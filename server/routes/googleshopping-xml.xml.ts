// server/routes/googleshopping-xml.xml.ts
import { defineEventHandler } from 'h3';
import axios from 'axios';
import { priceFormatter, percentFormatter } from '~/src/utils/formater';
import { ReductionType } from '~/src/core/entities/product';

// Formatage des slugs de produits
const formatProductSlug = (product: { name: string; uuid: string }): string => {
  if (!product.name) return `unnamed-product?${product.uuid}`;
  
  const formattedName = product.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplace les caractères non alphanumériques par des tirets
    .replace(/^-|-$/g, ''); // Supprime les tirets en début ou fin de chaîne

  return `${formattedName}?${product.uuid}`;
};

// Fonction pour nettoyer les descriptions
const cleanDescription = (description: string): string => {
  if (!description) return "Produit disponible à la Pharmacie Agnès Praden";
  return description
    .replace(/<[^>]*>/g, '') // Supprime les balises HTML
    .replace(/\s+/g, ' ') // Remplace les espaces multiples par un seul espace
    .trim()
    .substring(0, 5000); // Limite la description à 5000 caractères
};

// Catégories Google basées sur les catégories de votre site
const getGoogleCategory = (product: any): string => {
  if (product.isMedicine) return "6567"; // Médicaments
  
  // Mapper vos catégories aux catégories Google Shopping
  // Référence: https://www.google.com/basepages/producttype/taxonomy-with-ids.fr-FR.txt
  const categoryMappings = {
    'beauté': "2915", // Health & Beauty > Personal Care
    'hygiène': "2914", // Health & Beauty > Personal Care > Cosmetics
    'bébé': "5394", // Baby & Toddler
    'maman': "5395", // Maternity
    'bio': "5428", // Health & Beauty
    'compléments alimentaires': "4504", // Health & Beauty > Health Care > Vitamins & Supplements
    'matériel médical': "4183", // Health & Beauty > Health Care > Medical Supplies & Equipment
  };
  
  // Rechercher dans les catégories du produit
  if (product.categories && product.categories.length > 0) {
    for (const category of product.categories) {
      const categoryLower = category.toLowerCase();
      for (const [key, value] of Object.entries(categoryMappings)) {
        if (categoryLower.includes(key)) {
          return value;
        }
      }
    }
  }
  
  return "5428"; // Health & Beauty (catégorie par défaut)
};

// Vérifier si une promotion est active
const isPromotionActive = (promotion: any): boolean => {
  const now = Date.now();
  return promotion.startDate <= now && promotion.endDate >= now;
};

// Obtenir la promotion active et formater le prix
const getActivePromotion = (product: any) => {
  if (!product.promotions || product.promotions.length === 0) {
    return { 
      hasPromotion: false,
      regularPrice: formatPrice(product.price),
      salePrice: null
    };
  }
  
  // Rechercher une promotion active
  const activePromotions = product.promotions.filter(isPromotionActive);
  
  if (activePromotions.length === 0) {
    return {
      hasPromotion: false,
      regularPrice: formatPrice(product.price),
      salePrice: null
    };
  }
  
  // Prendre la première promotion active
  const promotion = activePromotions[0];
  let discountedPrice;
  
  if (promotion.type === 'FIXED') {
    discountedPrice = product.price - promotion.amount;
  } else {
    discountedPrice = product.price - (product.price * promotion.amount / 100);
  }
  
  return {
    hasPromotion: true,
    regularPrice: formatPrice(product.price),
    salePrice: formatPrice(discountedPrice)
  };
};

// Formater le prix pour Google Merchant
const formatPrice = (price: number): string => {
  return (price / 100).toFixed(2) + ' EUR';
};

/**
 * Handler qui génère le flux XML pour Google Merchant Center
 */
export default defineEventHandler(async (event) => {
  try {
    // Configuration de l'en-tête XML
    event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    
    // Début du document XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n';
    xml += '  <channel>\n';
    xml += '    <title><![CDATA[Pharmacie Agnès Praden - Produits santé et bien-être]]></title>\n';
    xml += '    <description><![CDATA[Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.]]></description>\n';
    xml += '    <link>https://pharmacieagnespraden.com</link>\n';
    
    // Récupérer la liste des UUIDs de produits via l'API sitemap
    console.log('Récupération de la liste des produits depuis l\'API sitemap...');
    const sitemapResponse = await axios.get('https://ecommerce-backend-production.admin-a5f.workers.dev/sitemap');
    const productsList = sitemapResponse.data || [];
    
    console.log(`Nombre de produits trouvés: ${productsList.length}`);
    
    // Pour limiter le nombre de requêtes pendant les tests
    const MAX_PRODUCTS = 1000; // Vous pouvez ajuster cette valeur
    const productsToProcess = productsList.slice(0, MAX_PRODUCTS);
    
    // Traiter chaque produit individuellement
    console.log(`Traitement des ${productsToProcess.length} produits...`);
    
    let processedCount = 0;
    let successCount = 0;
    
    for (const productInfo of productsToProcess) {
      try {
        processedCount++;
        
        // Récupérer les détails du produit
        const apiProductUrl = `https://ecommerce-backend-production.admin-a5f.workers.dev/products/${productInfo.uuid}`;
        const productResponse = await axios.get(apiProductUrl);
        const product = productResponse.data.item;
        
        // Sauter les produits sans images ou informations essentielles
        if (!product || !product.images || product.images.length === 0 || !product.name || !product.price) {
          continue;
        }
        
        // Obtenir les informations de prix et de promotion
        const priceInfo = getActivePromotion(product);
        
        // URL du produit
        const productSlug = product.slug || formatProductSlug(product);
        const productPageUrl = `https://pharmacieagnespraden.com/products/${productSlug}`;
        
        // Image du produit - utiliser la première image disponible
        const imageUrl = product.images[0] || '';
        
        // Déterminer la catégorie Google Shopping
        const googleCategory = getGoogleCategory(product);
        
        // Disponibilité
        const availability = product.availableStock > 0 ? 'in stock' : 'out of stock';
        
        // Génération de l'élément produit
        xml += '    <item>\n';
        xml += `      <g:id>${product.uuid}</g:id>\n`;
        xml += `      <title><![CDATA[${product.name}]]></title>\n`;
        xml += `      <link><![CDATA[${productPageUrl}]]></link>\n`;
        xml += `      <g:description><![CDATA[${cleanDescription(product.description)}]]></g:description>\n`;
        xml += `      <g:price>${priceInfo.regularPrice}</g:price>\n`;
        
        // Si en promotion, ajouter le prix promotionnel
        if (priceInfo.hasPromotion && priceInfo.salePrice) {
          xml += `      <g:sale_price>${priceInfo.salePrice}</g:sale_price>\n`;
        }
        
        xml += '      <g:condition>new</g:condition>\n';
        
        // Ajouter le code GTIN/EAN s'il existe
        if (product.gtin) {
          xml += `      <g:gtin>${product.gtin}</g:gtin>\n`;
        }
        
        // Ajouter le code MPN s'il existe
        if (product.mpn) {
          xml += `      <g:mpn>${product.mpn}</g:mpn>\n`;
        }
        
        // Marque (laboratoire)
        xml += `      <g:brand><![CDATA[${product.laboratory || 'Pharmacie Agnès Praden'}]]></g:brand>\n`;
        xml += `      <g:image_link><![CDATA[${imageUrl}]]></g:image_link>\n`;
        
        // Ajouter des images supplémentaires si disponibles
        if (product.images && product.images.length > 1) {
          for (let i = 1; i < Math.min(product.images.length, 10); i++) {
            xml += `      <g:additional_image_link><![CDATA[${product.images[i]}]]></g:additional_image_link>\n`;
          }
        }
        
        // Catégorie du produit
        xml += `      <g:product_type><![CDATA[Santé > ${product.categories?.join(' > ') || 'Pharmacie'}]]></g:product_type>\n`;
        xml += `      <g:google_product_category>${googleCategory}</g:google_product_category>\n`;
        xml += `      <g:availability>${availability}</g:availability>\n`;
        
        // Ajouter le poids s'il existe
        if (product.weight) {
          xml += `      <g:shipping_weight>${(product.weight / 1000).toFixed(2)} kg</g:shipping_weight>\n`;
        }
        
        // Informations d'expédition
        xml += '      <g:shipping>\n';
        xml += '        <g:country>FR</g:country>\n';
        xml += '        <g:service>Retrait en pharmacie</g:service>\n';
        xml += '        <g:price>0.00 EUR</g:price>\n';
        xml += '      </g:shipping>\n';
        
        xml += '      <g:shipping>\n';
        xml += '        <g:country>FR</g:country>\n';
        xml += '        <g:service>Point Relais</g:service>\n';
        xml += '        <g:price>6.37 EUR</g:price>\n';
        xml += '      </g:shipping>\n';
        
        xml += '      <g:shipping>\n';
        xml += '        <g:country>FR</g:country>\n';
        xml += '        <g:service>À domicile</g:service>\n';
        xml += '        <g:price>8.35 EUR</g:price>\n';
        xml += '      </g:shipping>\n';
        
        // Identifiants
        const identifier_exists = product.gtin || product.mpn ? 'TRUE' : 'FALSE';
        xml += `      <g:identifier_exists>${identifier_exists}</g:identifier_exists>\n`;
        
        xml += '      <g:content_language>fr</g:content_language>\n';
        xml += '      <g:target_country>FR</g:target_country>\n';
        
        // Si c'est un médicament, ajouter les informations spécifiques
        if (product.isMedicine) {
          xml += '      <g:adult>FALSE</g:adult>\n';
          xml += '      <g:is_bundle>FALSE</g:is_bundle>\n';
          xml += '      <g:age_group>adult</g:age_group>\n';
        }
        
        xml += '    </item>\n';
        
        successCount++;
        
        // Afficher une progression toutes les 50 produits
        if (processedCount % 50 === 0) {
          console.log(`Progression : ${processedCount}/${productsToProcess.length} produits traités`);
        }
      } catch (error) {
        console.error(`Erreur lors du traitement du produit ${productInfo.uuid}:`, error.message);
        continue; // Continuer avec le produit suivant
      }
    }
    
    console.log(`Traitement terminé : ${successCount} produits ajoutés au flux XML`);
    
    // Fin du document XML
    xml += '  </channel>\n';
    xml += '</rss>';
    
    return xml;
  } catch (error) {
    console.error('Erreur lors de la génération du flux Google Merchant:', error);
    
    // En cas d'erreur, retourner un XML minimal
    event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    let errorXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    errorXml += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n';
    errorXml += '  <channel>\n';
    errorXml += '    <title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>\n';
    errorXml += '    <description><![CDATA[Une erreur est survenue lors de la génération du flux.]]></description>\n';
    errorXml += '    <link>https://pharmacieagnespraden.com</link>\n';
    errorXml += `    <!-- Erreur détaillée: ${error.message} -->\n`;
    errorXml += '  </channel>\n';
    errorXml += '</rss>';
    
    return errorXml;
  }
});