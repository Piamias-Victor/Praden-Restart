// scripts/generate-merchant-feed.js
const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");

console.log("Script démarré");

// Informations sur la boutique
const shopTitle = "Pharmacie Agnès Praden - Produits santé et bien-être";
const shopDescription = "Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.";
const shopLink = "https://pharmacieagnespraden.com";

// Fonction principale
async function generateXmlFeed() {
  try {
    console.log("Fonction generateXmlFeed appelée");

    // Commencer le XML
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<rss xmlns:g=\"http://base.google.com/ns/1.0\" version=\"2.0\">\n";
    xml += "<channel>\n";
    xml += `<title><![CDATA[ ${shopTitle} ]]></title>\n`;
    xml += `<description><![CDATA[ ${shopDescription} ]]></description>\n`;
    xml += `<link>${shopLink}</link>\n`;
    
    // Chemin vers le fichier CSV
    const csvPath = path.resolve(__dirname, "../data/products_data.csv");
    console.log(`Recherche du fichier CSV: ${csvPath}`);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(csvPath)) {
      console.error(`Le fichier CSV n'existe pas à l'emplacement: ${csvPath}`);
      console.log("Génération d'un fichier XML vide...");
      
      // Finaliser le XML vide
      xml += "</channel>\n";
      xml += "</rss>";
      
      // Créer le dossier public s'il n'existe pas
      const publicDir = path.resolve(__dirname, "../public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      // Chemin du fichier de sortie
      const outputPath = path.resolve(publicDir, "merchant-feed.xml");
      fs.writeFileSync(outputPath, xml, "utf8");
      
      console.log(`Un fichier XML vide a été généré: ${outputPath}`);
      return;
    }
    
    console.log("Fichier CSV trouvé, lecture en cours...");
    const csvContent = fs.readFileSync(csvPath, "utf8");
    console.log("Contenu CSV lu, analyse en cours...");
    
    // Analyser le CSV
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ",",
      quote: "\""
    });
    
    console.log(`Nombre de produits trouvés: ${records.length}`);
    let processedCount = 0;
    let skippedCount = 0;
    
    for (const record of records) {
      // Vérifier les champs obligatoires
      if (!record.id || !record.title || !record.price || !record.image_link) {
        skippedCount++;
        continue; // Ignorer les produits incomplets
      }
      
      // Ajouter l'élément produit
      xml += "<item>\n";
      xml += `<title><![CDATA[ ${record.title} ]]></title>\n`;
      xml += `<g:id>${record.id}</g:id>\n`;
      xml += `<link><![CDATA[ ${record.link || `${shopLink}/product/${record.id}`} ]]></link>\n`;
      xml += `<g:price><![CDATA[ ${record.price} ]]></g:price>\n`;
      
      // Prix promotionnel
      if (record.sale_price) {
        xml += `<g:sale_price><![CDATA[ ${record.sale_price} ]]></g:sale_price>\n`;
      }
      
      // Description (éviter les descriptions trop longues)
      let description = record.description || "";
      if (description.length > 5000) {
        description = description.substring(0, 5000) + "...";
      }
      xml += `<description><![CDATA[ ${description} ]]></description>\n`;
      
      xml += `<g:condition><![CDATA[ ${record.condition || "new"} ]]></g:condition>\n`;
      
      // GTIN
      if (record.gtin) {
        xml += `<g:gtin>${record.gtin}</g:gtin>\n`;
      } else {
        xml += "<g:gtin/>\n";
      }
      
      // MPN
      if (record.mpn) {
        xml += `<g:mpn>${record.mpn}</g:mpn>\n`;
      } else {
        xml += "<g:mpn/>\n";
      }
      
      // Marque
      if (record.brand) {
        xml += `<g:brand><![CDATA[ ${record.brand} ]]></g:brand>\n`;
      } else {
        xml += "<g:brand/>\n";
      }
      
      xml += `<g:image_link><![CDATA[ ${record.image_link} ]]></g:image_link>\n`;
      
      // Images supplémentaires
      if (record.additional_images) {
        const additionalImages = record.additional_images.split("|");
        for (const img of additionalImages.slice(0, 10)) { // Limiter à 10 images max
          if (img.trim()) {
            xml += `<g:additional_image_link><![CDATA[ ${img.trim()} ]]></g:additional_image_link>\n`;
          }
        }
      }
      
      xml += `<g:product_type><![CDATA[ ${record.product_type || "PARAPHARMACIE"} ]]></g:product_type>\n`;
      xml += `<g:availability><![CDATA[ ${record.availability || "in stock"} ]]></g:availability>\n`;
      xml += "<g:quantity>0</g:quantity>\n";
      
      // Livraison
      xml += "<g:shipping>\n";
      xml += "<g:country>FR</g:country>\n";
      xml += "<g:price>0</g:price>\n";
      xml += "</g:shipping>\n";
      
      // Poids d'expédition
      if (record.shipping_weight) {
        xml += `<g:shipping_weight>${record.shipping_weight}</g:shipping_weight>\n`;
      }
      
      xml += `<g:identifier_exists>${record.identifier_exists || "FALSE"}</g:identifier_exists>\n`;
      
      // Médicament sur ordonnance
      if (record.is_medicine && record.is_medicine.toLowerCase() === "true") {
        xml += "<g:is_prescription_required>yes</g:is_prescription_required>\n";
      }
      
      xml += "<g:adwords_grouping/>\n";
      xml += "<g:adwords_labels/>\n";
      xml += "<g:adult>FALSE</g:adult>\n";
      xml += "</item>\n";
      
      processedCount++;
      
      // Afficher la progression toutes les 1000 entrées
      if (processedCount % 1000 === 0) {
        console.log(`${processedCount} produits traités...`);
      }
    }
    
    // Finaliser le XML
    xml += "</channel>\n";
    xml += "</rss>";
    
    // Créer le dossier public s'il n'existe pas
    const publicDir = path.resolve(__dirname, "../public");
    console.log(`Vérification/création du dossier public: ${publicDir}`);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Chemin du fichier de sortie
    const outputPath = path.resolve(publicDir, "merchant-feed.xml");
    console.log(`Écriture du fichier XML: ${outputPath}`);
    fs.writeFileSync(outputPath, xml, "utf8");
    
    console.log("====== RAPPORT ======");
    console.log(`Total de produits dans le CSV: ${records.length}`);
    console.log(`Produits traités: ${processedCount}`);
    console.log(`Produits ignorés: ${skippedCount}`);
    console.log(`Le fichier XML a été généré: ${outputPath}`);
    console.log(`Taille du fichier: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} Mo`);
  } catch (error) {
    console.error("ERREUR lors de la génération du XML:", error);
    
    // En cas d'erreur, créer un fichier XML de base pour éviter les erreurs de build
    const basicXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<rss xmlns:g=\"http://base.google.com/ns/1.0\" version=\"2.0\">\n" +
                "<channel>\n" +
                `<title><![CDATA[ ${shopTitle} ]]></title>\n` +
                `<description><![CDATA[ ${shopDescription} ]]></description>\n` +
                `<link>${shopLink}</link>\n` +
                "</channel>\n" +
                "</rss>";
    
    const publicDir = path.resolve(__dirname, "../public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const outputPath = path.resolve(publicDir, "merchant-feed.xml");
    fs.writeFileSync(outputPath, basicXml, "utf8");
    
    console.log(`Un fichier XML de base a été généré suite à l'erreur: ${outputPath}`);
  }
}

// Exécuter la fonction
console.log("Avant l'appel de generateXmlFeed");
generateXmlFeed();
console.log("Après l'appel de generateXmlFeed");