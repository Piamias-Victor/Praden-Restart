import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Produits santé et bien-être - Partie 3 ]]></title>
<description><![CDATA[ Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès. ]]></description>
<link>https://pharmacieagnespraden.com</link>
<item>
<title><![CDATA[ Bioderma Atoderm Crème Ultra Crème Hydratante2 x 500 ml ]]></title>
<g:id>65aba438-23bf-42c8-a31a-d24bf2695216</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm crème ultra crème hydratante2 x 500 ml?65aba438-23bf-42c8-a31a-d24bf2695216 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Crème Ultra Crème Hydratante Ultra-Nourrissante Lot de 2 x 500 ml est une crème qui répare, apaise et protège les peaux sensibles normales à sèches. Le complexe Skin Protect associé à la glycérine permet de recréer une barrière cutanée saine et d'hydrater en profondeur la peau. Inspiré du fonctionnement naturel de la peau, ce soin lui apporte douceur et souplesse dès la première application.</p>
<p>Sa texture légère non grasse et non collante laisse sur la peau une sensation  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129805824</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/96d759bd4038b08dc0903f0db0245a7a443dafb474f2e1ba58235afc53a201b3 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Crème Ultra-Nourrissante Mains & Ongles 50 ml ]]></title>
<g:id>c89446b0-cf85-4b54-8365-e1a1c0c120f4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm crème ultra-nourrissante mains & ongles 50 ml?c89446b0-cf85-4b54-8365-e1a1c0c120f4 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Crème Ultra-Nourrissante Mains &amp; Ongles 50 ml est une crème qui nourrit, hydrate et adoucit les mains sèches à très sèches. Elle procure à la peau une sensation de confort qui persiste toute la journée, et fortifie également les ongles.</p><p>Sa texture pénètre rapidement et laisse un fini non gras et non collant.</p><p>Testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804193</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/63853e74b1ef42f1e04a670e60200c822c98d8fc26ea842f2c51f71d145333f5 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Gel Douche 1 L ]]></title>
<g:id>439196a6-9383-410a-8086-8e8ab5e1a7d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm gel douche 1 l?439196a6-9383-410a-8086-8e8ab5e1a7d9 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Gel Douche 1 L est un nettoyant moussant pour le visage, le corps et les mains des adultes, enfants et nourrissons (hors prématurés).</p><p>Ce gel douche intègre le complexe skin protect qui a une double action biologique.</p><ol><li><p>Il augmente le niveau d'hydratation de la peau en stimulant la production d'acide hyaluronique.</p></li><li><p>Il protège durablement&nbsp; la peau grâce à son action relipidante. Sa formule ultra-douce respecte l'équilibre cutané. Sa mousse o ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129811542</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/449ee3b252733b073af45047005041a14b11ccfe3a00b7bf7f1d5eafa237e77a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > GEL DOUCHE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Gel Douche 200ml ]]></title>
<g:id>9a1af72d-8fd6-449e-9274-be9898fb6f3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm gel douche 200ml?9a1af72d-8fd6-449e-9274-be9898fb6f3c ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gel Douche Atoderm de Bioderma est un soin nettoyant moussant procure un réel moment de plaisir et de bien être.</p>
<p>Sa mousse douce et onctueuse délicatement parfumée et sa couleur naturellement bleutée (sans colorant) procure une agréable sensation de fraîcheur.</p>
<p>Les propriétés apaisantes du Gel Douche Atoderm de Bioderma diminuent les sensations de tiraillements.</p>
<p>Le pH physiologique respecte l'équilibre cutané grâce à ses actifs hydratants.</p>
<p>Le Gel Douche Atoderm d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399373237</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f6930b84308435d0a7e1a8d29ee22c79f4d346630574d4a3dfd3fac3c4270992 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Gel Douche Ultra-Douceur 100 ml ]]></title>
<g:id>b216b44e-38dc-4470-aa81-5a6b53d5d83f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm gel douche ultra-douceur 100 ml?b216b44e-38dc-4470-aa81-5a6b53d5d83f ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Gel Douche Ultra-Douceur 100 ml à la texture onctueuse et parfumée est un gel douche nettoyant moussant parfaitement adapté à l'hygiène des peaux sensibles normales à sèches de toute la famille.</p>
<p>Sans savon, la formule au pH physiologique de ce gel douche contient le complexe naturel breveté DAF qui augmente le seuil de tolérance de la peau. Grâce à ses actifs hydratants, Bioderma Atoderm Gel Douche Ultra-Douceur adoucit et protège l'épiderme. Ses propriétés apaisantes  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401354309233</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e295ab7d655f215316da14a4217230b69280bf5e26bcd387f6300d7a47f77c6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Gel Douche Éco-Recharge 1 L ]]></title>
<g:id>644749da-531d-47d7-b9b3-57c96cfd3f8b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm gel douche Éco-recharge 1 l?644749da-531d-47d7-b9b3-57c96cfd3f8b ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Gel Douche Éco-Recharge 1 L est un nettoyant moussant pour le visage et le corps des adultes, enfants et nourrissons (hors prématurés). Ce gel douche intègre le complexe skin protect qui a une double action biologique.</p>
<ol><li>Il augmente le niveau d'hydratation de la peau en stimulant la production d'acide hyaluronique.</li>
<li>Il protège durablement  la peau grâce à son action relipidante. Sa formule ultra-douce respecte l'équilibre cutané. Sa mousse onctueuse apporte  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807323</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b64a645448d20fd0f3639c752978055b59d712d6a096ec5cccb97dbd8e89d87a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Gel douche 1l ]]></title>
<g:id>7b1a2b99-aa82-4d8e-b3df-6919b6663e6a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm gel douche 1l?7b1a2b99-aa82-4d8e-b3df-6919b6663e6a ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Grâce à ses actifs hydratants, Atoderm Gel douche adoucit et protège l’épiderme.</p>
<p>Ses propriétés apaisantes diminuent les sensations de tiraillements : le pH physiologique respecte l’équilibre cutané.</p>
<p>Sa mousse douce et onctueuse délicatement parfumée et sa couleur naturellement bleutée (sans colorant) procure un moment de bien-être.</p>
<p>Atoderm Gel douche se rince parfaitement.</p>
<p>Il convient aux enfants et aux adultes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399372926</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4d6db0fa18580a8b5718b973926a78553d340a9df73d240c1ea5e7861fce11dc ]]></g:image_link>
<g:product_type><![CDATA[ PARFUMERIE > SOINS VISAGE ET CORPS > HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Huile Lavante 1l + Baume 45ml Offert ]]></title>
<g:id>669e3a92-28e1-4173-8c9b-b35efbaa386a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm huile lavante 1l + baume 45ml offert?669e3a92-28e1-4173-8c9b-b35efbaa386a ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Huile de Douche 1 L est une base lavante douce sous forme d'huile de douche à la texture onctueuse et non grasse. Elle nettoie en douceur les peaux sensibles sèches, très sèches à irritées. Sa formule composée de 33% d'agents relipidants et hydratants renforce durablement la barrière cutanée, apaise les sensations de tiraillement et protège des agressions extérieures. Le complexe breveté Skin Barrier Therapy permet de limiter l'adhésion de certaines bactéries (staphylocoque d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129813539</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e32f7173f328b748f6c8d1e8da3d5f02680bd918b2c6fa772bb3de3431df7313 ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Huile de Douche 100 ml ]]></title>
<g:id>f89b7577-5be7-4a97-99c5-7dd579e10960</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm huile de douche 100 ml?f89b7577-5be7-4a97-99c5-7dd579e10960 ]]></link>
<g:price><![CDATA[ 430.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Huile de Douche 100 ml est une huile de douche qui nettoie en douceur les peaux sensibles sèches, très sèches à irritées. Sa formule composée de 33% d'agents relipidants et hydratants nourrit intensément la peau, calme les sensations de tiraillement et protège des agressions extérieures.</p>
<p>Très bonne tolérance cutanée et oculaire.</p>
<p>Testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528520037</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6e8479be71a5c22cda188b595f0ecd3516b45335286581fbd4fd1477a577240 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Huile de Douche 1L ]]></title>
<g:id>ddc4c72b-19a3-48f0-bc17-56092e07ab23</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm huile de douche 1l?ddc4c72b-19a3-48f0-bc17-56092e07ab23 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Atoderm Huile de Douche apaise et protège des agressions extérieures grâce à sa formule exclusive composée de biolipidesvégétaux, de la Vitamine PP et du brevet Skin Barrier Therapy.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528520846</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/801846abdfdd38a3296652480c4f4c95e003b9d37e9047304967037fb18f0a3f ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Huile de Douche 200 ml ]]></title>
<g:id>be586246-0445-4272-92b5-ee185233fc89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm huile de douche 200 ml?be586246-0445-4272-92b5-ee185233fc89 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Huile de Douche 200 ml à la texture onctueuse et non grasse, nettoie en douceur les peaux sensibles sèches, très sèches à irritées de toute la famille. Composée de 33% d'agents relipidants et hydratants, sa formule exclusive nourrit intensément la peau, calme les sensations de tiraillement et protège des agressions extérieures. Le brevet Skin Barrier Therapy permet de protéger la peau de la bactérie responsable des irritations. Ultra légère et délicatement parfumée, sa formul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528519895</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69736b042d193e7dc974855c4715d9fa9d5928d00496f54424fbdd30a4c8295f ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Huile de douche Recharge 1L ]]></title>
<g:id>64fbfe83-2b70-4a94-9af1-6897c9b9f076</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm huile de douche recharge 1l?64fbfe83-2b70-4a94-9af1-6897c9b9f076 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Atoderm Huile de douche nettoie en douceur. Sa formule exclusive composée d'agents relipidants (vitamine PP et biolopides végétaux</span><span>*</span><span>) et hydratants nourrit intensément la peau, calme les sensations de tiraillement, et protège des agressions extérieures. Le complexe breveté Skin Barrier Therapy™ permet de limiter l'adhésion de certaines bactéries (staphylocoque doré) à la surface de la peau, qui peuvent être à l'origine de l'aggravation de la sécheresse cutanée.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807330</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62afbc2868b9d2bb52e94b118a85014b58d55a808b650e293c7a3648a2ece1fa ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Intensive Baume Ultra-Apaisant 200 ml ]]></title>
<g:id>b40f1dbc-e2f5-44d2-9cec-1a228dc969bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm intensive baume ultra-apaisant 200 ml?b40f1dbc-e2f5-44d2-9cec-1a228dc969bf ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Intenisve Baume Ultra-Apaisant 200 ml est un soin ultra-apaisant et ultra-riche recommandé pour les peaux sensibles très sèches irritées à atopiques de toute la famille (adultes, enfants, nourrissons).</p>
<p>Anti-démangeaisons, ce baume restaure et relipide la peau agissant sur les dysfonctionnements biologiques. Il stoppe les démangeaisons et diminue l'incitation au grattage grâce à son actif dermatologique anti-prurit PEA. Il calme immédiatement les irritations grâce au bé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129802069</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/67e4adeae29b96c5594d08b8f18c3cac5a4f1bfe6fe532110f867bd31293561a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Intensive Baume Ultra-Apaisant 75 ml ]]></title>
<g:id>5d4be553-db28-449d-a175-50c510973446</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm intensive baume ultra-apaisant 75 ml?5d4be553-db28-449d-a175-50c510973446 ]]></link>
<g:price><![CDATA[ 755.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Intensive Baume Ultra-Apaisant 75 ml est un soin ultra-apaisant et ultra-riche recommandé pour les peaux sensibles très sèches irritées à atopiques de toute la famille (adultes, enfants, nourrissons).</p>
<p>Anti-démangeaisons, ce baume restaure et relipide la peau agissant sur les dysfonctionnements biologiques. Il stoppe les démangeaisons et diminue l'incitation au grattage grâce à son actif dermatologique anti-prurit PEA. Il calme immédiatement les irritations grâce au bét ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129802083</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/496ab9d6732d01c43078fd660816259daade043be7c12135717add41e43a6fd4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Intensive Eye 100 ml ]]></title>
<g:id>f928b42d-d21d-4b73-8416-2d679852f257</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm intensive eye 100 ml?f928b42d-d21d-4b73-8416-2d679852f257 ]]></link>
<g:price><![CDATA[ 1895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Intensive Eye Soin Anti-Irritations 3-en1- 100 ml est un soin formulé pour répondre aux besoins spécifiques des paupières et contours des yeux secs à irrités. Ainsi, il offre une triple efficacité :</p>
<p>- il apaise immédiatement les irritations, sécheresses et sensations de démangeaisons du contour de l'oeil. Il atténue les rougeurs et offre un effet décongestionnant. L'Enoxolone cible les facteurs impliqués dans les sensations de démangeaisons ;</p>
<p>- il répare les zon ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129801963</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb9277f72e0808084ac0850af3f234e86c0e7a233b5c1ff13707aca50e0df2aa ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Intensive Gel Moussant Nettoyant Surgras 500 ml ]]></title>
<g:id>1ef88007-5473-4979-a5f3-de51765560f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm intensive gel moussant nettoyant surgras 500 ml?1ef88007-5473-4979-a5f3-de51765560f9 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formulé à partir d'actifs purifiants et de vitamine PP, Bioderma Atoderm Intensive Gel Moussant Nettoyant Surgras 500 ml lutte contre la prolifération des micro-organismes, agents irritants responsables de l'aggravation de la sécheresse cutanée. Il nettoie en douceur les peaux sensibles sèches à atopiques et apaise les sensations d'inconfort et de tiraillement, les irritations, et contribue à renforcer biologiquement la barrière cutanée. Le complexe naturel breveté DAF augmente le seuil de to ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560969757</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/058d48d299ccd9b3f160a4036a87b0a1d86bc079eeea50632a25010b19ef77aa ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Intensive Gel-Crème  Ultra-Apaisant 200 ml ]]></title>
<g:id>f32deaca-57b9-44df-a1c1-6fb042fb8898</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm intensive gel-crème  ultra-apaisant 200 ml?f32deaca-57b9-44df-a1c1-6fb042fb8898 ]]></link>
<g:price><![CDATA[ 1270.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Intensive Gel-Crème Soin Frais Ultra-Apaisant 200 ml est un soin nourrissant anti-démangeaisons, dans une texture ultra-légère et fraîche pour faciliter son application et son absorption par la peau dans ces conditions. En effet, la chaleur et/ou l'humidité peuvent rendre l'application quotidienne d'un soin riche peu agréable pour les peaux sèches à tendance atopiques. Grâce à la vitamine PP, il relipide et renforce la barrière cutanée durablement. Formulé à base de dérivé d' ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129802663</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e0bd9bc7237c3dc68e2aff461d5cee6f431cd268d4c372cd59e8dff4d8ec9c2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Intensive Gel-Crème Ultra-Apaisant 500 ml ]]></title>
<g:id>73611737-b3e7-4025-91f4-b8ae487ee5c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm intensive gel-crème ultra-apaisant 500 ml?73611737-b3e7-4025-91f4-b8ae487ee5c6 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Intensive Gel-Crème Soin Frais Ultra-Apaisant 500 ml est un soin nourrissant anti-démangeaisons, dans une texture ultra-légère et fraîche pour faciliter son application et son absorption par la peau dans ces conditions. En effet, la chaleur et/ou l'humidité peuvent rendre l'application quotidienne d'un soin riche peu agréable pour les peaux sèches à tendance atopiques. Grâce à la vitamine PP, il relipide et renforce la barrière cutanée durablement. Formulé à base de dérivé d' ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129802670</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8a93288699bb31b50eea3bdac81257e2ee42b14e5be5a63b102fb3847e94619e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm PP Baume Ultra Nourissant 500ml ]]></title>
<g:id>9e1b8a0c-f930-4b26-9431-f363d3b61d1e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm pp baume ultra nourissant 500ml?9e1b8a0c-f930-4b26-9431-f363d3b61d1e ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Baume PP Atoderm est un baume aux actifs nourrissants, et réparateurs à sa formule dermo-brevetée pour nourrir intensément et protéger les peaux sensibles très sèches à atopiques du visage et du corps dès le plus jeune âge.</p>
<p class="p1">Le baume à la texture onctueuse qui pénètre rapidement, nourrit, reforme le film protecteur hydrolipidique de l’épiderme pour mieux résister aux agressions extérieures qui sont la cause de la sècheresse par le contrôle de l’écosystème de la pea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401340652619</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d68ba01be123e59a50c9e6cfb234e1a89b334ef67401a796bb9f7df5d7660d74 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Pain Surgras Lot de 2 x 150 g ]]></title>
<g:id>c9b84c67-8114-431a-9ff5-9f7ce9a689ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm pain surgras lot de 2 x 150 g?c9b84c67-8114-431a-9ff5-9f7ce9a689ef ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Pain Surgras Lot de 2 x 150 g contient des agents nettoyants particulièrement doux, surgraissants, apaisants et adoucissants. Atoderm Pain Surgras respecte l'équilibre de la peau et évite son dessèchement et sa fragilisation. Excellente tolérance.   Attention : La vente des produits du Laboratoire Bioderma est limitée à l'Espace Economique Européen et à 6 produits identiques par jour et par client.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577689808</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dde4aeaefebeb57f5d47e02d57fb1f6caa747350a60fa5740e0f42ded6323ddf ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Palmakera Soin Lissant Apaisant 100 ml ]]></title>
<g:id>c596e612-7c1a-4c2e-9429-6ef017c6c341</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm palmakera soin lissant apaisant 100 ml?c596e612-7c1a-4c2e-9429-6ef017c6c341 ]]></link>
<g:price><![CDATA[ 1580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Atoderm Palmakera Soin Lissant Apaisant 100 ml est un soin dermo-cosmétique des mains et des pieds, sujets aux desquamations et sensations d'inconfort.</p>
<p>Il est spécifiquement conçu pour accompagner le dessèchement, l'épaississement cutané, ainsi que les sensations d'échauffement des mains et des pieds pouvant être induits par certains traitements notamment anticancéreux ou par le diabète.<br />Il hydrate intensément les mains et les pieds pour limiter le dessèchement et les des ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803882</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/93967c954a2545811547091c28d57b3ae18d0e2902e8d2adc325936e20880198 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm SOS Spray 200 ml ]]></title>
<g:id>362420c1-536c-4a89-9f39-6696f91f28dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm sos spray 200 ml?362420c1-536c-4a89-9f39-6696f91f28dd ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Quelque soit la cause des démangeaisons, elles peuvent survenir à tout moment. Atoderm SOS Spray apaise les démangeaisons en 60 secondes pour une efficacité 6h.<br />Sa texture ultra légère (émulsion huile dans eau) apporte une sensation de fraîcheur.<br />Sa formule se diffuse sous forme de micro-gouttelettes extra fines permettant une répartition homogène sur l’ensemble du corps et du visage.<br />Application ultra-rapide, en un seul geste et 360° (idéal pour les zones inaccessibles).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528546341</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f13b7c6e68884c0f876395eb32e890496254f1eae7d233696a418cac2f53d017 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm Stick Lèvres 2 x 4.5 g ]]></title>
<g:id>91e9d6f0-c911-4625-bfc0-08c72b18ae4d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm stick lèvres 2 x 4.5 g?91e9d6f0-c911-4625-bfc0-08c72b18ae4d ]]></link>
<g:price><![CDATA[ 429.00 EUR ]]></g:price>
<description><![CDATA[ <p>Atoderm Stick lèvres reconstitue la muqueuse labiale gercée et desséchée.</p>
<p>Son actif hautement nourrissant et hydratant, le beurre de karité, permet de régénérer les lèvres fragilisées.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129806579</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da48cd50ee329c34a77351abb8cda1535e5e2fb73fd25755bbf37573a9f0f84f ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Arnica+ 40ml ]]></title>
<g:id>611f6799-4ab8-441d-b0f2-d599d65684c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio arnica+ 40ml?611f6799-4ab8-441d-b0f2-d599d65684c0 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Crème Cicabio Arnica + BIODERMA est indiquée pour calmer les bleux, coups et bosses du visage et du corps.</p>
<p>Elle peut s'utiliser en prévention et en post-interventions esthétiques chirurgicales, sur avis médical.<br /><br />En plus d'une résoption naturelle et efficace, Cicabio Arnica+ calme rapidement les sensations d'inconfort par l'action biologique de l'Antalgicine, innovation issue de la Recherche Avancée BIODERMA.<br /><br />Sa formule exclusive associe :<br /><br />- un extrai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401398303648</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9a2da802beb0199264cd1baaa72d8c9829f0df5aa70f615a8410ce1115d5cf30 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Arnica+ Crème 40ml ]]></title>
<g:id>0da8056e-031d-4f00-929e-560507e2384f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio arnica+ crème 40ml?0da8056e-031d-4f00-929e-560507e2384f ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>La<strong> Crème Cicabio Arnica+ de Bioderma </strong>agit rapidement pour soulager les sensations d'inconfort liées à la sécheresse cutanée.</p><p>Elle est notamment conseillée en cas de <strong>gênes ou de tiraillements</strong>.</p><p>Grâce à son embout précis, Cicabio Arnica+ permet une <strong>application localisée ultra-facile</strong> et rapide pour toute la famille.</p><p>Sa <strong>texture crème fondante</strong> et douce offre un confort optimal.</p><p>Grâce à sa formulation à base  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129811399</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f232f24d0f2a348b7f1e1c613d5a5209cd1ad4bd08e0ea239ff4cbd188ce8ab7 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Baume Lavant 200ml ]]></title>
<g:id>545d63db-6c79-467f-9a85-3864193f0369</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio baume lavant 200ml?545d63db-6c79-467f-9a85-3864193f0369 ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bioderma Cicabio Baume lavant </span><span>est conçu pour les </span><span>peaux fragilisées, irritées</span><span>. Sa particularité est qu'il </span><span>nettoie la peau tout en favorisant le processus de cicatrisation</span><span>. Il est à la fois nettoyant, apaisant et protecteur et il aide la peau à cicatriser. Il peut être utilisé sur le visage, le corps ou le cuir chevelu, mais aussi sur les zones intimes. Il convient pour toute la famille, hors prématurés.</span><br /><br /><s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129810019</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a1c4a3cb896c1645888e388d065c1261ccbbbb49fc3f949c002d4008c89d387d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Baume Lèvres Réparateur 10 ml ]]></title>
<g:id>f8c86a8d-a108-4914-b244-7984d70846ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio baume lèvres réparateur 10 ml?f8c86a8d-a108-4914-b244-7984d70846ab ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Cicabio Lip Repair de Bioderma</strong> est un soin réparateur pour les lèvres spécialement conçu pour les <strong>sécheresses sévères</strong> liées aux conditions climatiques et aux traitements médicamenteux.</p><p>Sa texture <strong>« effet pansement »</strong> forme une barrière isolante contre les agressions extérieures.</p><p>Non parfumé et testé dermatologiquement, ce soin garantit une <strong>haute tolérance</strong> pour les lèvres les plus fragiles.</p><p>Grâce à son <strong ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129812426</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ea223b3cc46a0e03eae8b3c8bada0ffc65df7390cb164a88f2c289254daa8cc3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > STICK LEVRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Crème+ 100 ml ]]></title>
<g:id>445fed3e-34e4-4b36-b923-35c51cfab954</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio crème+ 100 ml?445fed3e-34e4-4b36-b923-35c51cfab954 ]]></link>
<g:price><![CDATA[ 1185.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cicabio Crème+ garantit une double action pour un retour de la peau à son état originel :</p><p>1 - RESTAURE LA DIVERSITE DU MICROBIOME</p><p>NOUVELLE APPROCHE MICROBIOME BIODERMA - Sur la peau le microbiome fait partie intégrante de la barrière protectrice. De plus des études scientifiques récentes ont montré qu'il jouait</p><p>un rôle majeur dans le processus de cicatrisation. La formule considère la peau comme un écosystème et recrée un environnement favorable au microbiome cutané (formule ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129810101</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/907add0dc9a10dc8759e470a43a56e48bbdca906a067d974fd3d3e7b4346c2e1 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Crème+ 40 ml ]]></title>
<g:id>b1e71123-8d60-4211-877b-369a8529d6a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio crème+ 40 ml?b1e71123-8d60-4211-877b-369a8529d6a9 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Cicabio Crème+ 40 ml est un soin ultra-réparateur apaisant et anti-marques cicatricielles. Il s'utilise aussi bien sur le visage que sur le corps, y compris les zones intimes et convient aux adultes, aux enfants et aux nourrissons (hors prématurés).</p><p>Il est indiqué : lors d'atteintes épidermiques fréquentes (coupures et brûlures superficielles, écorchures...), à la suite d'actes chirurgicaux ou d'embellissement, en soins de la maman (cicatrice de césarienne, épisiotomie) ou en s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129810095</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/06530f33bf50fa55726941987471241451a1d27e6a3ba01f4fd29662579d594a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio Crème+ SPF50+ 40 ml ]]></title>
<g:id>f8f232a0-31e4-4979-82a7-c0b2f19d217e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio crème+ spf50+ 40 ml?f8f232a0-31e4-4979-82a7-c0b2f19d217e ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Cicabio Crème+ SPF50+ 40 ml est un soin ultra-réparateur apaisant, anti-marques cicatricielles et anti-hyperpigmentation. Il s'utilise aussi bien sur le visage que sur le corps et convient aux adultes, aux enfants et aux nourrissons (hors prématurés).</p>
<p>Il est indiqué lors d'atteintes épidermiques fréquentes (coupures et brûlures superficielles, écorchures...) ou à la suite d'actes chirurgicaux ou d'embellissement.</p>
<p>Cette crème favorise la réparation cutanée et garantit un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129810088</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b13a25df2160622cb31d8d5e7b44adbbaaf6aca91b44a585d90340f2207be356 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Cicabio mains Baume barrière réparateur 50 ml ]]></title>
<g:id>fcd2896d-8182-4d70-b2d1-8efeab4b4b1e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-cicabio mains baume barrière réparateur 50 ml?fcd2896d-8182-4d70-b2d1-8efeab4b4b1e ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Cicabio Mains 50 ml est un baume barrière réparateur qui nourrit, protège et apaise les mains abîmées présentant des micro-fissures ou des gerçures.</p><ul><li><p>Il favorise la réparation cutanée grâce à ses agents restructurants,</p></li><li><p>il apaise les sensations de démangeaisons et d'inconfort via l'Antalgicine,</p></li><li><p>il protège la peau grâce à sa texture innovante qui forme une barrière protectrice et isolante contre les agressions extérieures,</p></li><li><p>il co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804711</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b707e74ebd704893162479137185b15deb2d3330499d991602bb55974984ad81 ]]></g:image_link>
<g:product_type><![CDATA[ CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Crealine Defensive Crème Riche 40ml ]]></title>
<g:id>88b20994-5009-4a73-a287-4cec78bc3a21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-crealine defensive crème riche 40ml?88b20994-5009-4a73-a287-4cec78bc3a21 ]]></link>
<g:price><![CDATA[ 1340.00 EUR ]]></g:price>
<description><![CDATA[ <p></p><p><br>Bioderma Créaline Défensive Riche Crème Active Apaisante 40 ml est une crème conçue pour renforcer le pouvoir d'auto-défense des peaux sensibles et sensibilisées par les agressions quotidiennes, sèches à très sèches.<br>La technologie Défensive agit sur la sensibilité naturelle provenant d'un dysfonctionnement biologique, et sur la sensibilité induite par l'environnement et le mode de vie. Elle offre une action protectrice antioxydante, une action fortifiante de la fonction barrièr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804476</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f85a4578ac88e576da1ebcb96ef48d88493d6ea156006da1c230448133d05b3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline AR BB  Clair Crème 40 ml ]]></title>
<g:id>e6f746c5-5a1c-443d-b68a-5404fc40285c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline ar bb  clair crème 40 ml?e6f746c5-5a1c-443d-b68a-5404fc40285c ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline AR BB Cream 40 ml est un soin multi-actions des peaux sensibles et réactives à tendance couperosique, qui prévient et diminue les rougeurs. Il hydrate, apaise, unifie le teint et protège des UV en un seul geste.<br />Il agit spécifiquement sur :</p>
<ul><li>les rougeurs passagères intenses (agressions climatiques, émotion, alimentation, chauffage...)</li>
<li>les rougeurs permanentes,</li>
<li>les petits vaisseaux apparents.</li>
</ul><p>Les rougeurs sont principalement dues ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401351277979</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7012fdb079f6d28aed57c228333c7df29db44ddf5ff326be2d448637a22a7aa3 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline AR Crème Teintée Doré 40ml ]]></title>
<g:id>94059d6a-f930-4bed-96cd-789cb1027407</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline ar crème teintée doré 40ml?94059d6a-f930-4bed-96cd-789cb1027407 ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Créaline AR Crème teintée garantit un résultat immédiat et prolongé :</p>
<p>- L’association d’actifs apaisants intenses de Créaline AR Crème teintée diminue instantanément les rougeurs et les sensations de chaleur.</p>
<p>- Grâce à l’efficacité des actifs anti-rougeurs sélectionnés, son brevet exclusif et novateur Rosactiv® (Brevet BIODERMA) agit directement sur le facteur responsable de la dilatation et de la fragilisation des capillaires cutanés (sources de rougeurs permanentes).</p>
<p>Ut ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401345935632</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dff7b216580e755f7ea457efeb772718cbb5aa1e033e21bde61bbae8444eaef7 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline DS+ Crème 40 ml ]]></title>
<g:id>17d0a781-6559-409b-b9da-96ee70351616</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline ds+ crème 40 ml?17d0a781-6559-409b-b9da-96ee70351616 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline DS+ Crème 40 ml est destinée aux peaux sensibles, associant irritations, rougeurs et squames. Elle assainit la peau en particulier au niveau des zones grasses irritées : ailes du nez, sourcils, front, menton.</p>
<p>La peau sensible s'exprime le plus souvent par des sensations de chaleur et des rougeurs diffuses ou localisés. Elle se déshydrate facilement et la sécheresse qui s'ensuit auto-entretient la fragilité et s'accompagne de désagréables sensations de tiraillements. L ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401397240241</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4dd4b77b9e8f78fd365818b55183a2123329318b00cb585b01f791140ae5cb11 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline DS+ Gel Nettoyant 200 ml ]]></title>
<g:id>059e2a70-9351-4970-abec-6fbadd0af3a0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline ds+ gel nettoyant 200 ml?059e2a70-9351-4970-abec-6fbadd0af3a0 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gel nettoyant moussant apaisant assainissant des peaux sensibles sébo-squameuses associant rougeurs et squames localisées en particulier au niveau des zones grasses irritées : aile du nez, sourcils, front, menton.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401397240302</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ccd774a7730bbbfcc0a1928f82a0e32edbc2e5f83d6baac0eb79f1552e6cd485 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Défensive Crème Normale 40ml ]]></title>
<g:id>4c030eb4-d911-46b2-b992-317e978579d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline défensive crème normale 40ml?4c030eb4-d911-46b2-b992-317e978579d6 ]]></link>
<g:price><![CDATA[ 1340.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline Défensive Crème Active Apaisante 40 ml est une crème conçue pour renforcer le pouvoir d'auto-défense des peaux sensibles et sensibilisées par les agressions quotidiennes, normales à mixtes.<br>La technologie Défensive agit sur la sensibilité naturelle provenant d'un dysfonctionnement biologique, et sur la sensibilité induite par l'environnement et le mode de vie. Elle offre une action protectrice antioxydante, une action fortifiante de la fonction barrière et une action apai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804445</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4d13423065ab087aa922ef9736a8403926c275d919e003f13e355ca7b79fa5a7 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Défensive Sérum 30 ml ]]></title>
<g:id>0cb6c8cf-4392-4f0b-b040-196fc5665fae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline défensive sérum 30 ml?0cb6c8cf-4392-4f0b-b040-196fc5665fae ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma apporte une réponse écobiologique unique et efficace pour les peaux sensibles et sensibilisées. La technologie DEFENSIVE et le polymère de fucose donnent à la peau les moyens de se défendre contre le phénomène d'inflamm'aging. </p>
<p>Ils agissent sur les différentes origines de la sensibilité et du vieillissement prématuré en stoppant le cercle vicieux responsable de l'exacerbation des peaux sensibles et du vieillissement cutané.</p>
<p>- Action protectrice : la carnosine + la vitam ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129805374</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/24174bd49a9b1011e1d79a2f611283ef3591f85717e88fd884fa116e0ff3aa0e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Erycontrol 100 ml ]]></title>
<g:id>9de92f21-c5a1-4ea2-bb4e-46a01cdd2ce6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline erycontrol 100 ml?9de92f21-c5a1-4ea2-bb4e-46a01cdd2ce6 ]]></link>
<g:price><![CDATA[ 1560.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Créaline Erycontrol</span> a été développé selon la <span>d</span><span>émarche de développement MEDI-SECURE</span>, spécifiquement conçue en fixant des <span>mesu</span><span>res de précautions rigoureuses et adaptées aux peaux fragilisées par les traitements ou les pathologies</span> : des ingrédients strictement sélectionnés, des packagings pratiques et hygiéniques et des études cliniques réalisées sous contrôle médical et oncologique.</p>
<p><span>L'ENOXOLONE</span> apaise les rouge ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803356</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cdd5234f1fda120314fcb86f30a2d0fdc4fbaef686af74ef122bb47aa408c193 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Fort 40 ml ]]></title>
<g:id>27ff09e4-774c-4b23-a51a-d423d03b4cf1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline fort 40 ml?27ff09e4-774c-4b23-a51a-d423d03b4cf1 ]]></link>
<g:price><![CDATA[ 1330.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline Fort 40 ml est un soin apaisant d'action rapide destiné aux peaux intolérantes, rougies et échauffées.</p>
<p>Véritable soin d'urgence, il lutte à deux niveaux contre l'inflammation. D'une part, il calme immédiatement les rougeurs et apaise les sensations de brûlure. D'autre part, il augmente le seuil de tolérance cutanée et limite l'amplification de la réaction inflammatoire.</p>
<p>Des agents humectants et restructurants permettent de lutter également contre la déshydratat ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579462171</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dd71a401bb6bf3a2aaeaa9615c6779ef280f15abe2b2a771a07695b26bebdcc7 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Gel Contour des Yeux 15ML ]]></title>
<g:id>7e5e7f36-b044-4338-9eac-2ab1f899ef3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline gel contour des yeux 15ml?7e5e7f36-b044-4338-9eac-2ab1f899ef3c ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline Gel-Crème Contour des Yeux 15 ml est un soin protecteur quotidien, décongestionnant, apaisant et hydratant du contour des yeux des peaux sensibles.</p>
<p>Nouvelle avancée dans le domaine des peaux sensibles, le complexe breveté 18 béta-Toléridine augmente le seuil de tolérance de la peau. Plus résistante, elle est ainsi mieux protégée face aux agressions extérieures et devient moins réactive. Bioderma Créaline Gel-Crème Contour des Yeux 15 ml apaise les sensations d'inconfo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401345935861</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/848e1f1ccfabfd39c6e9da04676f2af5b5e2e6b736e1d365f0a5674a6ce5c57f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Gel Moussant 100 ml ]]></title>
<g:id>ae4e5749-f517-42d2-a04a-9f2c40029e1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline gel moussant 100 ml?ae4e5749-f517-42d2-a04a-9f2c40029e1b ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline Gel Moussant 100 ml nettoie en douceur, apaise et hydrate les peaux sensibles.</p>
<p>Grâce à ses actifs apaisants et surgraissants, il calme rapidement les irritations. Le complexe naturel breveté DAF (dermatological advanced formulation) augmente le seuil de tolérance des peaux les plus sensibles. Sa mousse onctueuse laisse la peau douce et confortable.</p>
<p>S'utilise aussi comme démaquillant. Excellente tolérance cutanée et oculaire. Testé sous contrôle dermatologique e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129800836</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50766e37f5e03a9f693978b3c7a050c4a90fbc5c8aff63bbb77689959a7c0493 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Gel Moussant 200 ml ]]></title>
<g:id>83cefaa4-e2dc-4309-86e1-18d2943f1739</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline gel moussant 200 ml?83cefaa4-e2dc-4309-86e1-18d2943f1739 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline Gel Moussant 200 ml, nettoie en douceur, apaise et hydrate les peaux sensibles.</p>
<p>Grâce à ses actifs apaisants et surgraissants, il calme rapidement les irritations. Le complexe naturel breveté DAF (dermatological advanced formulation) augmente le seuil de tolérance des peaux les plus sensibles. Sa mousse onctueuse laisse la peau douce et confortable.</p>
<p>S'utilise aussi comme démaquillant. Excellente tolérance cutanée et oculaire. Testé sous contrôle dermatologique  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129800041</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8590cb5f40a4ca4a466570baa60c342d2ec44fed9f99128bd0bfbdb780005f43 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Gel Moussant 500 ml ]]></title>
<g:id>f713606d-7c59-4caa-88e9-d6eac87c8f0e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline gel moussant 500 ml?f713606d-7c59-4caa-88e9-d6eac87c8f0e ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Créaline Gel moussant nettoie en douceur, apaise et hydrate les peaux sensibles grâce à ses actifs apaisants et surgraissants qui calment rapidement les irritations.</p>
<p>Le complexe dermo-breveté D.A.F. (Dermatological Advanced Formulation) augmente le seuil de tolérance des peaux les plus sensibles.</p>
<p>Sa mousse onctueuse laisse la peau douce et confortable.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804834</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2fe0dd93008e254f1305b55d119ef24ee2c5a65f2ad1d4496dc2818848a15bb0 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O AR Eau Micellaire Démaquillante 250 ml ]]></title>
<g:id>4225abc3-5abd-4c0c-b9d6-796f1adc2cba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o ar eau micellaire démaquillante 250 ml?4225abc3-5abd-4c0c-b9d6-796f1adc2cba ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline H2O AR Eau Micellaire Démaquillante 250 ml est une eau micellaire au pH physiologique spécialement formulée pour les peaux sensibles et réactives à tendance couperosique, qui garantit un nettoyage et un démaquillage en douceur du visage et des yeux. Elle ne nécessite pas de rinçage.<br>Le complexe breveté exclusif Rosactiv™ agit sur l'un des principaux facteurs responsables des rougeurs pour diminuer durablement leur intensité et prévenir leur apparition.</p><p>Cette eau mic ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401353738461</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7bc7a303e681c73aa9622c9ccb97b4e95fb4f2f4ad30fb3d5cd88fb194865f81 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O Eau Micellaire Démaquillante Édition Limitée 500 ml ]]></title>
<g:id>1507d05b-7b28-461c-8410-1cf8dff000b2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o eau micellaire démaquillante Édition limitée 500 ml?1507d05b-7b28-461c-8410-1cf8dff000b2 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline H2O Eau Micellaire Démaquillante Édition Limitée 500 ml est une eau micellaire spécialement formulée pour les peaux sensibles, sensibilisées et allergiques.</p><p>Elle est recommandée par les dermatologues pour un nettoyage en douceur du visage et des yeux.<br>Les micelles contenues dans sa formule permettent une élimination des impuretés (maquillage, particules fines, pollens) tout en respectant la flore cutanée.<br>Les actifs apaisants et décongestionnants préviennent les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129814437</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/01a7c6aadf9394554d3f04c65865c44e75eb98ec2c4546aa921f09259200dc27 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O L'Eau Micellaire Originale 500 ml ]]></title>
<g:id>485e8e30-d498-45e4-9173-2eee1dc8899c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o l'eau micellaire originale 500 ml?485e8e30-d498-45e4-9173-2eee1dc8899c ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline H2O L'Eau Micellaire Originale 500 ml est une eau micellaire au pH physiologique qui garantit un nettoyage et un démaquillage en douceur du visage et des yeux et favorise l'élimination des résidus de pollution et de pollen. Inspirées de la structure biologique des lipides de la peau, ses micelles éliminent les impuretés tout en respectant l'équilibre cutané. Les actifs dermatologiques apaisants aident à prévenir les sensations d'irritation. Le complexe breveté D.A.F.™ augmen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129805008</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c3de4b4e0a5903326e827f77a9bdd646fbef0ae5257c9ebeef202b6219765b98 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O L'Eau Micellaire Originale Édition Limitée 500 ml ]]></title>
<g:id>1a8bfd45-9de6-4bf8-b774-777aed4f00e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o l'eau micellaire originale Édition limitée 500 ml?1a8bfd45-9de6-4bf8-b774-777aed4f00e9 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline H2O L'Eau Micellaire Originale Édition Limitée 500 ml est une eau micellaire spécialement formulée pour les peaux sensibles.</p><p>Elle permet un nettoyage et un démaquillage en douceur du visage et des yeux et favorise l'élimination des impuretés (maquillage, particules fines, pollens) tout en respectant l'équilibre cutané. Les actifs dermatologiques apaisants préviennent les sensations d'irritation. Le complexe breveté D.A.F.™ (Dermatological Advanced Formulation) augmente ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401396992080</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d65a3cc11d345f110965c259fb5bdad43c655d9b37058a4b2097ce18e8bd05e9 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O Lingettes Dermatologiques x25 ]]></title>
<g:id>e2118443-0a95-420d-ac15-2cdc41326565</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o lingettes dermatologiques x25?e2118443-0a95-420d-ac15-2cdc41326565 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les lingettes dermatologiques Créaline H2O sont imprégnées d’une solution micellaire active formulée à partir d’agents nettoyants ultra-doux.</p>
<p>Elles assurent un parfait nettoyage et/ou démaquillage des peaux et des yeux sensibles par un processus de micro-émulsion des impuretés. Les Lingettes dermatologiques Créaline H2O éliminent toute trace de maquillage même résistant à l’eau.</p>
<p>Enrichies en actifs apaisants, les lingettes dermatologiques Créaline H2O préviennent les sensations  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579165584</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79c2407ba219e6d77bdd96e010fcf6761eb7b590e32a7df27db4634c478c4249 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O TS Eau Micellaire Démaquillante 500 ml ]]></title>
<g:id>43235c40-a7cb-45cd-b4a0-f5869eb2ec7b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o ts eau micellaire démaquillante 500 ml?43235c40-a7cb-45cd-b4a0-f5869eb2ec7b ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline H2O TS Eau Micellaire Démaquillante 500 ml est une eau micellaire spécialement formulée pour les peaux sensibles très sèches.</p>
<p>Elle garantit un nettoyage et un démaquillage en douceur du visage et des yeux. Les micelles contenues dans sa formule permettent une élimination des impuretés tout en respectant l'équilibre cutané. Enrichie en actifs hydratants et filmogènes, elle lutte contre la déshydratation cutanée.<br />Les actifs apaisants et décongestionnants préviennen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129805015</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/de16a3a4668cde3cf59287c32564134f1f39db1ef5b02b81e119a0438bef9988 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O Yeux  Biphase Micellaire 125ml ]]></title>
<g:id>a1ae6336-c7a7-413d-b4d1-0ae669fcf3cb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o yeux  biphase micellaire 125ml?a1ae6336-c7a7-413d-b4d1-0ae669fcf3cb ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce démaquillant biphase micellaire a la particularité d'avoir une triple action soin :</span></p>
<p><span>- Apaise </span><br /><span>- Hydrate</span><br /><span>- Renforce .</span></p>
<p><span><span>Conçu spécialement pour les </span><span>yeux sensibles</span><span>, le démaquillant waterproof Créaline H2O Yeux offre un démaquillage tout en douceur. Il est efficace sur tous les types de maquillage, y compris les plus résistants. Ce </span><span>démaquillant yeux</span><span> va égal ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360212244</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c652c0464ba640f9946184cf01bc607dd31935b66b6a06bbe9b180557b3b353e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline H2O Yeux 125ml ]]></title>
<g:id>d52caf15-a538-457b-8528-7930c72cc78a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline h2o yeux 125ml?d52caf15-a538-457b-8528-7930c72cc78a ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p></p><p>Créaline H2O yeux est un démaquillant biphase micellaire pour les yeux et lèvres sensibles, avec une TRIPLE ACTION SOIN.<br>- Elimine le maquillage, même waterproof, et nettoie impuretés et pollution, grâce à sa formule unique. Une phase aqueuse dotée de la technologie micellaire (70%) qui a permis de réduire la phase huileuse (30%) pour un maximum de sensorialité, une haute efficacité et un FINI NON GRAS.</p><p>- APAISE immédiatement à l'aide de 3 sucres apaisants biomimétiques qui pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129812617</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c1a329db69f5a6e8ababc63836eeaee29b60835e51ac1a052db7e275873c7a5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Huile Micellaire 150 ml ]]></title>
<g:id>38ea1aba-f23c-4b8c-ae00-7026f97999e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline huile micellaire 150 ml?38ea1aba-f23c-4b8c-ae00-7026f97999e4 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Créaline Huile Micellaire 150 ml est une huile qui nettoie en douceur et aide à éliminer tous types de maquillage, même waterproof et libère la peau des impuretés et des filtres solaires tout en préserant son pH naturel.</p>
<p>Sa formule apaisante, composée d'actifs biomimétiques, contient un acide aminé et des Oméga 3 et 6 d'origine végétale, tous deux connus pour leurs propriétés nourrissantes. La technologie micellaire double action libère l'acide aminé sur la peau et aide à lais ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807804</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c4f37ae1c790d378bb6053c618aa38380b4ec38bea64a89be1302b6923f53e85 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Créaline Yeux+ Soin Regard Anti-Fatigue 15ml ]]></title>
<g:id>2055c384-8f86-485e-84a7-3165d8c0a982</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-créaline yeux+ soin regard anti-fatigue 15ml?2055c384-8f86-485e-84a7-3165d8c0a982 ]]></link>
<g:price><![CDATA[ 1620.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin regard anti-fatigue conçu pour les contours des yeux sensibles qui apaise, lisse et hydrate la peau, cible les cernes et les poches. Propriétés : les agressions extérieures exacerbent la sensibilité cutanée et particulièrement la zone fragile du contour de l'oeil. Issue de la recherche avancée Bioderma, la TECHNOLOGIE DÉFENSIVE offre une action protectrice qui réduit l'apparence des rides et ridules tout en fortifiant la fonction barrière et en apaisant la peau. La formule enrichie en CA ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129811412</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/250e9ff2b9b1a88a78da46d7d6589091431d59c2cf5a276961858c3d04dbd26b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Brume Aerosol 300ml ]]></title>
<g:id>f0e7a2f6-f2b5-4702-a02a-4c41adaa6427</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio brume aerosol 300ml?f0e7a2f6-f2b5-4702-a02a-4c41adaa6427 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Hydrabio Brume Eau Apaisante Rafraîchissante 300 ml est une eau qui apporte confort et fraîcheur immédiate aux peaux sensibles déshydratées.</p><p>Formulée pour apaiser immédiatement, rafraîchir et hydrater durablement les peaux sensibles., elle agit également sur les irritations cutanées (après épilation, feu du rasoir, coups de soleil, en post-actes dermatologiques ou esthétiques sur avis médical), sur les rougeurs.<br>Multi-actions, elle est également indiquée pour fixer le maquil ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399848254</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b8dba33fc7bbd0faae87003937bb9a9542c7c9c51490bc6161fabe9190b2907 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Crème Soin Hydratant Texture Riche 50 ml ]]></title>
<g:id>1ce1346a-acea-4a7d-91d2-b3f813e9047a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio crème soin hydratant texture riche 50 ml?1ce1346a-acea-4a7d-91d2-b3f813e9047a ]]></link>
<g:price><![CDATA[ 1820.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Hydrabio Crème Soin Hydratant Texture Riche 50 ml est une crème spécialement formulée pour le soin et l'hydratation des peaux sensibles sèches à très sèches.<br /><br />Cette crème hydratante contient des actifs du brevet Aquagenium qui agissent de façon plus ciblée et efficace pour réactiver le processus naturel d'hydratation et relancer ainsi la circulation de l'eau au cœur des cellules. Elle effectue une action lissante et affine le grain de peau tout en ravivant l'éclat naturel d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401329447687</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34dcc3984b7ee06e78a31d2aba24172a03a357d8c5a9c7ecd1e9dd2599a67351 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Gel-Crème Soin Hydratant Texture Légère 40 ml ]]></title>
<g:id>5884b465-bc65-474b-8525-918298d10112</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio gel-crème soin hydratant texture légère 40 ml?5884b465-bc65-474b-8525-918298d10112 ]]></link>
<g:price><![CDATA[ 1680.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Hydrabio Gel-Crème Soin Hydratant Texture Légère 40 ml est un soin visage hydratant spécialement formulé pour les peaux sensibles normales à mixtes. Il hydrate intensément et révèle l'éclat du teint.<br /><br />Ce gel-crème hydratant contient des actifs du brevet Aquagenium qui agissent de façon plus ciblée et efficace pour réactiver le processus naturel d'hydratation et relancer ainsi la circulation de l'eau au cœur des cellules. Elle effectue une action lissante et affine le grain  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401329447809</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f5ae75ec29bd82c5ce5bb3836e55d8fca0877134012cb7c27077815d6e91e9fc ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio H2O Solution Micellaire 250ML ]]></title>
<g:id>e26df0ee-c287-4994-9129-34f367835236</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio h2o solution micellaire 250ml?e26df0ee-c287-4994-9129-34f367835236 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La première solution micellaire hydratante à l’Aquagenium® destinées aux peaux déshydratées et sensibles.</p>
<p>Innovation BIODERMA, le complexe biologique breveté Aquagenium®, réapprend à la peau à générer, en profondeur, et à retenir, en surface, l’eau indispensable à son équilibre naturel.</p>
<p>Les micelles contenues dans Hydrabio H2O permettent, en un seul geste, de nettoyer et démaquiller parfaitement le visage et les yeux.</p>
<p>La peau retrouve immédiatement confort, souplesse et é ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399694127</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4b866290d81f3cc07bf7f443508b63e999d73f842b51ed66ea6b919b22e2ca47 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio H2O Solution Micellaire 500ml ]]></title>
<g:id>637d5d3b-8aa2-4c57-b6cf-c63d89ec94a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio h2o solution micellaire 500ml?637d5d3b-8aa2-4c57-b6cf-c63d89ec94a1 ]]></link>
<g:price><![CDATA[ 1135.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1"><span class="s1">L'eau nettoyante démaquillante qui respecte la fragilité des peaux sensibles et stimule l'hydratation.</span></p>
<p class="p1"><span class="s1">Hydrabio H2O est la 1ère et la seule eau micellaire dermatologique à présenter une parfaite analogie biologique avec la peau. Ses esters d’acides gras, constitutifs des micelles, sont similaires aux phospholipides des membranes des cellules cutanées et participent à la reconstitution naturelle du film hydrolipidique de la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401321549020</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eccd6bd5971344ec66c9b24f192ac391088e3c62b21cc11e853dceb86ec0b1f4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio H2O Solution Micellaire Démaquillante Hydratante 100 ml ]]></title>
<g:id>4ee701eb-a55b-4c89-a10f-187ebbcc123d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio h2o solution micellaire démaquillante hydratante 100 ml?4ee701eb-a55b-4c89-a10f-187ebbcc123d ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Hydrabio H2O Solution Micellaire Démaquillante Hydratante 100 ml est une eau micellaire qui réapprend à la peau à relancer ses capacités d'hydratation et à retenir l'eau indispensable à son équilibre.<br />Elle contient des micelles qui permettent en un seul geste de nettoyer et démaquiller parfaitement la peau du visage ainsi que les yeux.</p>
<p>Ainsi, la peau est nettoyée et hydratée. Elle retrouve douceur et éclat.</p>
<p>Testé dermatologiquement.</p>
<p>Sans paraben.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528521157</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6b0fabf180baa27ae0b8ed7c91bdd5bb28047c27acb60666988e51577f27ea55 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Hyalu+ Sérum 30 ml ]]></title>
<g:id>51c5c58e-0d55-4d07-976a-e76e0e40f6ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio hyalu+ sérum 30 ml?51c5c58e-0d55-4d07-976a-e76e0e40f6ef ]]></link>
<g:price><![CDATA[ 2740.00 EUR ]]></g:price>
<description><![CDATA[ <p>ioderma Hydrabio Hyalu+ Sérum 30 ml est un soin concentré repulpant auto-réhydratant. Ce sérum offre une prise en charge globale et spécifique des peaux déshydratées.<br>Il réhydrate intensément et durablement la peau tout en limitant les premiers signes de l'âge.</p><p>La technologie HYALU+ réapprend à la peau à relancer ses mécanismes naturels d'hydratation et à retenir l'eau indispensable à son équilibre. Elle aide à renforcer et protéger les réserves internes en Acide Hyaluronique, molécu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129809334</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5ae8dce39338df79e237121b125573fc5158a73b2bb5848eeb04e43cb4ae3798 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Lait Nettoyant 250 ml ]]></title>
<g:id>d1745a4c-16c8-4e3d-af78-0c26de002ec5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio lait nettoyant 250 ml?d1745a4c-16c8-4e3d-af78-0c26de002ec5 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait Hydrabio de Bioderma démaquille en douceur les peaux sensibles et déshydratées sans altérer leur équilibre fragile.</p>
<p>Bioderma Hydrabio Lait nettoie en douceur les peaux sensibles et déshydratées. Sa formule au complexe breveté Aquagénium aide la peau à se régénérer d’elle-même de manière autonome.</p>
<p>Cet actif rééduque l’épiderme à retenir l’eau en surface pour assurer une bonne hydratation.</p>
<p>Du complexe naturel breveté D.A.F améliore le seuil de tolérance cutanée pour ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399694295</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5166dac8fa06c592210af9459a89c3bc52b507e7601772c77ddbb02b6ea1b3c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Lotion Tonique 250 ml ]]></title>
<g:id>e302b824-b02f-43a1-bef9-533ec0e14ec3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio lotion tonique 250 ml?e302b824-b02f-43a1-bef9-533ec0e14ec3 ]]></link>
<g:price><![CDATA[ 1380.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydrabio Lotion Tonique de Bioderma permet à la peau de se régénérer en profondeur et de retenir l'eau, indispensable à son équilibre naturel, à la surface.</p>
<p>Hydrabio Lotion Tonique de Bioderma, grâce à sa texture fluide et évanescente, permet de ressentir une sensation de fraîcheur intense.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399694356</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8efb06bd5168f8585516a7fd2ec72eca1e03d6d01c965ae66ea5a3d8ffebd6c5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Masque Hydratant 75ML ]]></title>
<g:id>df00b138-5d20-46dc-81f6-0ebc556582a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio masque hydratant 75ml?df00b138-5d20-46dc-81f6-0ebc556582a1 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Hydrabio masque peaux déshydratées et sensibles 75 ml.</p>
<p>Masque douceur visage, Peau déshydratée et sensible. Texture onctueuse et enveloppante, non comédogène et hypoallergénique parfumée </p>
<p>Lors de fortes déshydratations, Hydrabio Masque réhydrate* intensément et durablement.</p>
<p>La peau retrouve alors confort, douceur, souplesse et éclat. Innovation galénique, la texture onctueuse et enveloppante d’Hydrabio.</p>
<p>*Hydratation des couches supérieures de l’épiderme.</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343613730</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8aa4bd0af72b8ca6e16628a8ef1a2d7756b4cbc50b453349781a5ba956326d69 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Perfecteur SPF 30 40 ml ]]></title>
<g:id>7cb0c224-bb80-42ed-bd63-798f5c216558</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio perfecteur spf 30 40 ml?7cb0c224-bb80-42ed-bd63-798f5c216558 ]]></link>
<g:price><![CDATA[ 1899.00 EUR ]]></g:price>
<description><![CDATA[ <p><br />Le complexe biologique breveté Aquagenium® est un réel générateur d’hydratation, immédiat et durable :<br />La Vitamine PP renforce la résistance de la peau et son imperméabilité. <br />L’extrait de pépin de pomme stimule l'expression des "Aquaporines", réels canaux naturels permettant la circulation de l'eau dans la peau.<br />Grâce à une émulsion inspirée de la structure de l’épiderme, les actifs du brevet Aquagenium® pénètrent profondément et de façon ciblée au cœur de celui-ci. La p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401329447977</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a0b3907c45f1dec133b616fbf042ad9186aa0537fd8fc722f0b14112a27a9345 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Hydrabio Serum 40 ml ]]></title>
<g:id>e8d904fd-b122-44a2-b791-825ccdc046b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-hydrabio serum 40 ml?e8d904fd-b122-44a2-b791-825ccdc046b6 ]]></link>
<g:price><![CDATA[ 2130.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développé dans les laboratoires de recherche BIODERMA, l’AQUAGENIUMTM breveté et les puissants actifs hydratants présents dans Hydrabio Sérum stimulent les mécanismes naturels de la peau en générant 3 niveaux d’hydratation.</p>
<p>1. Capture de l’eau</p>
<p>L’ACIDE HYALURONIQUE, LA GLYCÉRINE ET LE XYLITOL ont une formidable capacité à attirer et capturer l’eau environnante. Véritable aimant à hydratation, ils aident les cellules à conserver un maximum d’eau.</p>
<p>2. Conservation de l’eau</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401347869775</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/49b81acb8825a914eab8b32e7d24239606aaf0c820f76738e49fe3ddda83bcf6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Node P Shampooing Antipelliculaire Apaisant 400ml ]]></title>
<g:id>69bcc074-f603-4698-8ba5-0ee85e2d5e88</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-node p shampooing antipelliculaire apaisant 400ml?69bcc074-f603-4698-8ba5-0ee85e2d5e88 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Nodé P apaisant élimine biologiquement les pellicules et évite leur réapparition. </p>
<p class="p1">Il permet de respecter l’équilibre du cuir chevelu en inhibant, par l’action biologique du climbazole, la présence de Malassezia, un des micro-organisme à l'origine des pellicules. </p>
<p class="p1">Cette activité anti-microbienne est renforcée par la piroctone olamine et complétée par une action kératolytique de l’acide salicylique.</p>
<p class="p1">L’actif dermatologique D-panth ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401340710081</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/703ca2f2fe30a6d6eea5cfeab43c3e2265ce0c7e54db0374c5c29727fea2aacc ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé A Shampoing Apaisant 400 ml ]]></title>
<g:id>0e1c9d9a-d54b-4b6e-b4ff-d074e0bc11d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé a shampoing apaisant 400 ml?0e1c9d9a-d54b-4b6e-b4ff-d074e0bc11d2 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Nodé A Shampooing Apaisant calme les irritations et les démangeaisons du cuir chevelu sensible et irrité tout en respectant son équilibre naturel.</p>
<p>Par ses propriétés apaisantes, hydratantes et gainantes, l'actif dermatologique D-Panthenol apporte un soulagement immédiat.<br /><br />Le complexe naturel breveté DAF renforce le seuil de tolérance du cuir chevelu pour plus de confort. Formulé à partir d'agent nettoyants doux et antistatiques, il apporte douceur et brillance.<br /> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401396545132</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eee4c70231297cc12e645c8d8e59522d52eefac248b22a1c22c59176ba4252ef ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé Ds+ Shampooing Antipelliculaire Intensif Anti-Récidive 125ml ]]></title>
<g:id>63297731-0775-4ae3-a61f-e0994e2a44db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé ds+ shampooing antipelliculaire intensif anti-récidive 125ml?63297731-0775-4ae3-a61f-e0994e2a44db ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nodé DS est un shampooing de soin antipelliculaire, non détergent, destiné aux états squameux sévères, rebelles et récidivants associés à des démangeaisons intenses du cuir chevelu.</p>
<p> </p>
<p>La formule exclusive de Nodé DS+ Anti-récidive offre la meilleure efficacité contre les états pelliculaires persistants.</p>
<p>Le complexe breveté DSactiv garantit une double efficacité grâce à son action sur l’origine des états squameux :</p>
<p>- Il limite la prolifération de la levure Malassezi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401344957253</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a58defb71fe053bfed0b511c15f064dbf06068ad0aa384a9675ee16b60c27bb1 ]]></g:image_link>
<g:product_type><![CDATA[ SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé G Shampoing Purifiant 400 ml ]]></title>
<g:id>625d6d47-1a6f-4357-808b-afadc052c38b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé g shampoing purifiant 400 ml?625d6d47-1a6f-4357-808b-afadc052c38b ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Shampoing doux séborégulateur, non détergent adapté aux besoins des cheveux gras et très gras. La base lavante non détergente de Nodé G contrôle le flux de sébum. <br /><br /> Les capteurs de calcium évitent la formation de sels calciques d’acides gras qui alourdissent les cheveux et leur donnent un aspect luisant. <br /><br /> Actif séborégulateur, l’huile essentielle de Sauge assainit le cuir chevelu et maintient l’équilibre de la flore limitant ainsi les risques d’irritation. <br /><br />  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579333501</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7db9dfbee57b8e22aa7285097d73185be38c2674e217bc76a4e88eaeaa57b4f ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé K Concentré Kératoreducteur 100 ml ]]></title>
<g:id>78721e5e-1f74-4c83-8162-959da9009154</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé k concentré kératoreducteur 100 ml?78721e5e-1f74-4c83-8162-959da9009154 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etats squameux sévères et chroniques en plaques sèches épaissies du cuir chevelu et du corps, psoriasis, démangeaisons, irritations et rougeurs.</p>
<p>Nodé K Emulsion est un soin dermo-capillaire destiné aux états squameux sévères et chroniques se manifestant par des plaques sèches épaissies souvent associées à des démangeaisons et des irritations.</p>
<p>Sa formule originale active l'élimination des plaques adhérentes du corps et du cuir chevelu et évite leur réapparition grâce à l'action s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577940039</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6defa508de963d9266d10c72fb80a3a6011b119ded0c3db46936b0fee588b2c2 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé K Shampoing Kérato-Réducteur 150 ml ]]></title>
<g:id>5849ddd7-055b-40f8-b283-a8db1a3dd5e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé k shampoing kérato-réducteur 150 ml?5849ddd7-055b-40f8-b283-a8db1a3dd5e3 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing destiné aux états squameux sévères et chroniques se manifestant par des plaques sèches épaissies souvent associées à des démangeaisons.</p>
<p>La formule originale de Nodé K Shampooing active l’élimination des plaques sèches du cuir chevelu et prévient leur réapparition grâce à de puissants agents kératolytiques et kératorégulateurs : l’acide salicylique et l’hydrolat de cade.</p>
<p>Nodé K Shampooing est enrichi d’un agent apaisant intense, la forskoline (Coleus barbatus). Il l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577939958</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5659de5cabc530f5b02df9db1e75fbdf98a8de71c6b22216c36d9e47b0ab2c4d ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé P Shampooing Antipelliculaire Purifiant 400 ml ]]></title>
<g:id>811492ee-e844-4aab-bd34-e824545f4452</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé p shampooing antipelliculaire purifiant 400 ml?811492ee-e844-4aab-bd34-e824545f4452 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Nodé P Shampooing Antipelliculaire Purifiant 400 ml est un shampooing formulé pour les cheveux à tendance grasse sujets aux état pelliculaires modérés. Ce shampooing antipelliculaire nettoie en douceur vos cheveux, et permet d'éliminer les pellicules et d'éviter leur réapparition. Il contient des actifs tel que le gluconate de zinc qui régule la production de sébum, assainit le cuir chevelu et retarde efficacement le regraissage des cheveux. Sans Sodium Laureth Sulfate, Sans Paraben, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401340710432</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb69006e62ab0c94009cb349e6dde38c99e1ec2a6182b0a58fb3a591bf9c2798 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé Shampoing Fluide Non Détergent 400 ml ]]></title>
<g:id>03860b62-9435-4d22-97be-9a68ed3f9813</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé shampoing fluide non détergent 400 ml?03860b62-9435-4d22-97be-9a68ed3f9813 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Nodé Shampooing Fluide Non Détergent 400 ml est un shampooing non détergent à usage fréquent en prévention des déséquilibres capillaires.</p>
<p>Utilisez le en relais des shampooings traitants, ou en soin d'hygiène complémentaire des traitements du cuir chevelu. Sa formule douce respecte l'équilibre des cheveux et du cuir chevelu, même les plus fragilisés.</p>
<p>Sans sodium laureth sulfate. Testé sous contrôle dermatologique et ophtalmologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401573697197</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/963c80ffe4c1b9bb4c3056c7f1f245a31ff807540fbb9a5bc06f3b8d5babdbe8 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Nodé Shampooing Fluide 200ml ]]></title>
<g:id>994980e1-6d90-44e6-a08b-54ab90ebe803</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-nodé shampooing fluide 200ml?994980e1-6d90-44e6-a08b-54ab90ebe803 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing doux quotidien, non détergent, adapté au lavage régulier de tous les types de cheveux.</p>
<p>Nodé peut également être utilisé en relais de shampooings traitants.</p>
<p>La base lavante non irritante et non délipidante de Nodé Fluide permet de nettoyer parfaitement les salissures et d'éviter le regraissage trop rapide des cheveux.</p>
<p>Ses propriétés gainantes et restructurantes renforcent la tige capillaire, facilite le coiffage et redonne du volume au cheveu.</p>
<p>Régulièr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401345060150</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2bbb7eec069eac9759b7e5d5909e0f6d3c328c64996bd0b2c4ddc245dddb41e9 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm AKN Mat SPF30 Fluide Matifiant 40 ml ]]></title>
<g:id>ede5f250-8227-4460-9f8b-f7883abcb993</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm akn mat spf30 fluide matifiant 40 ml?ede5f250-8227-4460-9f8b-f7883abcb993 ]]></link>
<g:price><![CDATA[ 1170.00 EUR ]]></g:price>
<description><![CDATA[ <p>La haute protection solaire matifiante qui limite les imperfections.</p>
<p><strong>BÉNÉFICES</strong><br />Garantit une haute protection UVA/UVB<br />SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA<br />Matifie tout au long de la journée<br />Améliore la qualité du sébum et limite l'apparition de nouvelles imperfections grâce au brevet Fluidactiv<br />Lisse le grain de peau et aide à prévenir l'effet rebond grâce aux acides salycilique et glycolique<br  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803691</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d54de0a94ac8bb23e02229f2a029154884d77675f87b8f03be80dcfd1c423422 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Aquafluide SPF50+ 40ml ]]></title>
<g:id>46050461-4171-4728-ad7d-9fc83ab0e698</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm aquafluide spf50+ 40ml?46050461-4171-4728-ad7d-9fc83ab0e698 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>NOUVELLE FORMULE : seulement 4 filtres, pas d'ingrédient controversé</li>
<li><span lang="fr" xml:lang="fr">Garantit une très haute protection UVA/UVB </span></li>
<li><span lang="fr" xml:lang="fr">SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA. +26% de protection contre le stress oxydatif + 24% de protection des capacités de défenses immunitaires de la peau.</span></li>
<li><span lang="fr" xml:lang="fr">8h d'hydratation et effet mat</span></li>
<l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807385</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c56b79346b7fbb67b8375e82786b69f7576e47968d4b145ae7413fa97454172f ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Autobronzant Brume Autobronzante Hydratante 150 ml ]]></title>
<g:id>81beaf5d-79e1-48fa-b803-ec294f5388cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm autobronzant brume autobronzante hydratante 150 ml?81beaf5d-79e1-48fa-b803-ec294f5388cd ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm Autobronzant bénéficie d'une technologie associant l'agent autobronzant DHA (Dihydroxyacétone) à un système de diffusion unique. Ce dernier permet à plus de DHA d'entrer en contact avec l'épiderme et améliore ainsi la qualité des couleurs.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803813</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ce37ac0ff0f8d28153f4fab955c76068396f8928b2e6346f44b1076d5331b66e ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Bronz Huile Sèche spf50+ 200ml ]]></title>
<g:id>d34418d3-1416-407d-b384-7420dcbf2b4c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm bronz huile sèche spf50+ 200ml?d34418d3-1416-407d-b384-7420dcbf2b4c ]]></link>
<g:price><![CDATA[ 1470.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Photoderm Huile Bronz, nourrit et stimule le bronzage naturel pour les peaux sensibles.</span><br /><span>Exposition solaire intense.</span><br /><span>Visage, corps et cheveux.</span><br /><span>Texture transparente et hydratante.</span><br /><span>Sublime la peau.</span><br /><span>Stimule, intensifie et prolonge durablement le bronzage naturel.</span><br /><span>La CELLULAR PROTECTION protège les cellules du stress oxydatif grâce à la vitamine E antioxydante.</span><br /><span>non-co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803585</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3fffb99de37fcae7363efbcf980cfa5ec85c44690595ff5a4172ba9442d83821 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Brume invisible SPF50+ 150ml ]]></title>
<g:id>26ec8188-4dc9-403e-b2e4-3b215de51a20</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm brume invisible spf50+ 150ml?26ec8188-4dc9-403e-b2e4-3b215de51a20 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Exposition solaire intense. Visage et corps. La CELLULAR PROTECTION protège les cellules du stress oxydatif grâce à la vitamine E antioxydante. Parfumé. Convient à une application sur peau mouillée ou sèche. Très résistant à l’eau et résistant à la transpiration. Texture résistante au sable. Très bonne tolérance cutanée et oculaire dans les conditions normales d'utilisation. Testé sous contrôle dermatologique. Photostable.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129806616</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1593e763708c91dcbd75e97545c9243f8cc2dd40a364477c082b3dad966b87ba ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Duo Ski SPF50+ 20ml ]]></title>
<g:id>2c6787c7-f6a4-4c12-9894-25981fc6142f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm duo ski spf50+ 20ml?2c6787c7-f6a4-4c12-9894-25981fc6142f ]]></link>
<g:price><![CDATA[ 760.00 EUR ]]></g:price>
<description><![CDATA[ <p>Partenaire depuis plusieurs années, Bioderma et l'Ecole de Ski Français unissent leur expertise dans la prévention et la sécurité pour vous protéger contre les méfaits du soleil en montagne.  A la montagne la dose d'UV sur la peau augmente considérablement.</p>
<p>L’indice UV augmente de 10% tous les 1000 mètres et 85% des UV sont réfléchis par la neige vs 25% seulement par l'eau à la plage !</p>
<p>Même quand il fait gris, l’application d’un soin solaire est nécessaire puisque les nuages bai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129809433</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19bfc89945f7855f9ad9ec18d40189bf1f7d4f1b91e3609fc2a53d825492d725 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Eau Solaire Anti-Oxydant spf 50 200 ml ]]></title>
<g:id>ed17ed56-3b52-47d4-b7f9-01afb7022636</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm eau solaire anti-oxydant spf 50 200 ml?ed17ed56-3b52-47d4-b7f9-01afb7022636 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>PHOTODERM EAU SOLAIRE ANTI-OX SPF86</p><p>- Haute protection UVB &amp; UVA courts &amp; longs (SUN ACTIVE DEFENSE)</p><p>- Protection antioxydante puissante qui prévient les dommages cellulaires (nouvel actif : ANTI-OX ACTIVE)</p><p>- Hydratation 8H</p><p>- Visage, corps et cheveux, convient aux peaux sensibles</p><p>- Galénique unique : fini satiné &amp; toucher sec, frais à l'application</p><p>- Parfum vert, floral &amp; aquatiques</p><p>- Non collant/ gras, résistant à l'eau, applicable su ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807897</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d33e31759ec0b4d730b6d81da0a045aaf0779cae808d4b8934ed01c41d2cd195 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Eau Solaire Bronz SPF30 200 ml ]]></title>
<g:id>61a73ca5-eb5f-4bc4-991e-1b42b26aba28</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm eau solaire bronz spf30 200 ml?61a73ca5-eb5f-4bc4-991e-1b42b26aba28 ]]></link>
<g:price><![CDATA[ 1550.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Les peaux sensibles.</li>
<li><span>Résultats beauté :</span> La peau est protégée, hydratée et le bronzage sublimé.</li>
<li><span>Actifs :</span> Filtres anti-UVA/UVB.</li>
<li><span>On aime :</span> Sa texture hyper légère qui offre une sensation peau nue.</li>
</ul><p> </p>
<p><span>Photoderm Eau Solaire Bronz SPF30 </span>de Bioderma protège, hydrate et sublime le bronzage.</p>
<p>Son SPF30 permet de protéger la peau des rayons UV, notamment des rayons UVA et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807880</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1484885d2436bdbb09dbf42a021a6ae0be1d356f68193a9be440e81618234af ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Gel-Crème Après Soleil 200 ml ]]></title>
<g:id>2537c5b8-102a-419c-9d9a-e963f2ade130</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm gel-crème après soleil 200 ml?2537c5b8-102a-419c-9d9a-e963f2ade130 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm Gel-crème Après-soleil Fraîcheur est enrichi en agents émollients et apaisants. Il réhydrate durablement la peau, apaise la sensation d'échauffement après exposition et prolonge le bronzage naturel.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803820</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2eaaf46f5436dc6147de9e19dacede3767def1024c8111306142dfea28d4fe15 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Gel-Crème Après Soleil 500 ml ]]></title>
<g:id>ab1c8581-5773-405d-abf4-721d85302a07</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm gel-crème après soleil 500 ml?ab1c8581-5773-405d-abf4-721d85302a07 ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm Gel-crème Après-soleil Fraîcheur est enrichi en agents émollients et apaisants. Il réhydrate durablement la peau, apaise la sensation d'échauffement après exposition et prolonge le bronzage naturel.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803837</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f0364eea441918b854c07829e9ebffca084f1718ab71fffec897259ceaa1a3c ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Huile Bronz SPF30 Huile Sèche 200 ml ]]></title>
<g:id>387bae1b-228e-4f7f-8d96-a049faf26b7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm huile bronz spf30 huile sèche 200 ml?387bae1b-228e-4f7f-8d96-a049faf26b7f ]]></link>
<g:price><![CDATA[ 1470.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>BÉNÉFICES</strong><br />Garantit une haute protection UVA/UVB<br />PROTECTION CELLULAIRE : protège les cellules du stress oxydatif grâce à la vitamine E antioxydante<br />Stimule, intensifie et prolonge durablement le bronzage naturel<br />Nourrit et hydrate tout en embellissant la peau<br />Pour le visage, le corps et les cheveux - Texture invisible - Non collant - Non gras - Parfumé - Très bonne tolérance - Non comédogène - Applicable sur peau humide ou sèche - Très résistant à l'ea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803578</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/14e2b2c0dee3f9a29622a2213e1c28ee5d89e2b7ebbbb5d8a501e1e3dd0c05ed ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Lait Ultra SPF50+ 200 ml ]]></title>
<g:id>2eeca933-cb6a-43b5-9534-349d5cba07ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm lait ultra spf50+ 200 ml?2eeca933-cb6a-43b5-9534-349d5cba07ac ]]></link>
<g:price><![CDATA[ 1540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Photoderm Lait Ultra SPF50+ 200 ml est un lait non parfumé et invisible de haute technologie de protection solaire, renforcée dans les UVA. L'association de filtres UV et d'une protection biologique brevetée améliore les capacités d'auto-défense de la peau, pour aider à préserver sa santé au soleil, durablement. Incolore à l'application, sans effet gras. Très bonne tolérance. Photostable.</p>
<p>Très résistant à l'eau, résistant à la transpiration et au sable.</p>
<p>Testé sous contr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803639</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f87ade91b6b1d214152861f69811d0413dde19c8ffee844330cf4094ebc218bb ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm M SPF 50+ Solaire Teinté - 40ml ]]></title>
<g:id>9fa89ebb-bd3f-4507-8dc1-d4260e554255</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm m spf 50+ solaire teinté - 40ml?9fa89ebb-bd3f-4507-8dc1-d4260e554255 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm M, gel-crème clarifiant teinté dorée pour les tâches type masque de grossesse SPF50+ doté de l'innovation "protection lumière bleue" texture gel-crème matifiant au fini poudré.</p><p>Haute couvrance. Unifie sans effet masque et clarifie le</p><p>teint. Aide à prévenir l’apparition de nouvelles hyperpigmentations grâce à la glabridine. Adapté aux peaux</p><p>mates.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804414</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/83be5eb29330b4ca5d36443072cfeb011bd7869545cd916ebf9ac566a97cbf07 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm MAX Aquafluide Pocket SPF50+ 30ml ]]></title>
<g:id>315e6a2f-2225-4cde-bf7d-a3c890682d9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm max aquafluide pocket spf50+ 30ml?315e6a2f-2225-4cde-bf7d-a3c890682d9f ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Grâce à sa formule à base d'eau, Photoderm Aquafluide SPF 50+ offre un très haut niveau de protection solaire en toute&nbsp;légèreté. Il respecte les peaux les plus sensibles et garantit une <strong>hydratation longue durée</strong>. Comme tous les solaires Bioderma, Aquafluide repose sur le brevet <strong>Sun Active Defense</strong>, qui booste les défenses naturelles de la peau face au soleil. La protection <strong>anti-UVA et UVB</strong> est assurée par des filtres solaires photostables.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528509551</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9b560e96097b2de98809d02a75eb5b43229606a419457743a874b031de41d552 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Max Spray Spf 50+ 200ml ]]></title>
<g:id>5630d48c-286b-4ba0-a99e-a48155c52bb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm max spray spf 50+ 200ml?5630d48c-286b-4ba0-a99e-a48155c52bb2 ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Garantit une protection optimale UVA-UVB contre les méfaits du soleil (coups de soleil, intolérances solaires...)</p></li><li><p>Active les défenses naturelles de la peau, protège des risques de dommages cellulaires et lutte contre le vieillissement cutané prématuré : brevet biologique Bioprotection® Cellulaire</p></li><li><p>Texture fondante, incolore à l’application, sans effet gras, sans traces blanches</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807279</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5548858d185bcafc10dc74726b998fa3599d0c12e0b037b9827ba61f61c9f2b ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Pediatrics Lait SPF50+ 100ml ]]></title>
<g:id>8fe8e716-662d-4707-96e6-6326e422732a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm pediatrics lait spf50+ 100ml?8fe8e716-662d-4707-96e6-6326e422732a ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>SPF50+ UVA 25. Très haute protection large spectre : UVB, UVA courts et longs. Visage, corps. Hydratation 8h. Application facile, absorption rapide. Invisible et non-collant. Très bonne tolérance. Testé sous contrôle pédiatrique, dermatologique et ophtalmologique. Éviter le contact avec les textiles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807286</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/126594e6ab80a109f19a0fd446d7510ba0082e8222f51236da554815964e4ca6 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Pediatrics Lait solaire SPF 50+ ]]></title>
<g:id>bcb4a1e7-147a-4f38-9d89-d2e2aaaeb6cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm pediatrics lait solaire spf 50+?bcb4a1e7-147a-4f38-9d89-d2e2aaaeb6cc ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour protéger la peau des bébés et des enfants, dès 12 mois, Bioderma a créé le lait&nbsp;solaire Photoderm Pediatrics&nbsp;SPF 50 +. Cette crème solaire bébé bénéficie d'un SPF 50+ et assure une très haute protection à large spectre. Elle permet ainsi de protéger la peau de votre enfant aussi bien des UVB, responsables notamment des coups de soleil (rougeurs), que des UVA courts et longs, qui favorisent le développement des radicaux libres, le vieillissement prématuré de la peau et l'apparit ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807293</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8dfde6e6ece4a1ad8a075e91c3386e3bbcae19ec504fec58e5c8d394142b6bde ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Pediatrics Spray SPF50+ 200 ml ]]></title>
<g:id>47294d06-94d0-444d-982f-7543831971be</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm pediatrics spray spf50+ 200 ml?47294d06-94d0-444d-982f-7543831971be ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm PEDIATRICS Spray SPF50+</p><p>- Très haute protection solaire ultra sécuritaire conçue pour aider à préserver le capital soleil de la peau délicate des enfants exposés au soleil.</p><p>- Protège et renforce la barrière cutanée (SUN BARRIER TECHNOLOGY)</p><p>- Formule courte basée sur 4 filtres haute efficacité, haute sécurité et respectueux des océans</p><p>- Enfants dès 12 mois, convient aussi aux peaux à tendance atopique</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807316</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36da94f6fcaa71530a7bb3168a012f05d03d23107b188ffcd5a2c121f0beb2ed ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Spray Invisible Spf30 Peaux Sensibles 300ml ]]></title>
<g:id>18a49cb0-9f28-4899-961e-4c442a514938</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm spray invisible spf30 peaux sensibles 300ml?18a49cb0-9f28-4899-961e-4c442a514938 ]]></link>
<g:price><![CDATA[ 1870.00 EUR ]]></g:price>
<description><![CDATA[ <p>Visage et corps. Texture ultra-légère, s'étale facilement. Laisse la peau douce et confortable. Parfumé. S'applique sur peau mouillée ou sèche. Très résistant à l'eau, résistant à la transpiration et au sable. Très bonne tolérance. Testé sous contrôle dermatologique. Photostable. 1ère utilisation : tirer les 2 parties blanches. Appuyer sur le pistolet plusieurs fois pour casser la protection d'inviolabilité et amorcer la pompe.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807255</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf7ceda9b2e968a3a3fcc8b1cef86732fb9913f5f03436e1ec0c8a5a2783087e ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Spray SPF50+ 300 ml ]]></title>
<g:id>5d1eac37-5a10-445e-9dad-f93b48d369dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm spray spf50+ 300 ml?5d1eac37-5a10-445e-9dad-f93b48d369dc ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bioderma Photoderm&nbsp;Spray&nbsp;SPF50+</strong> est un soin qui peut être appliqué à la fois sur le visage et sur le corps et qui constitue une <strong>très haute protection solaire</strong>. Il convient particulièrement aux<strong> peaux sensibles</strong> des adultes et des enfants&nbsp;à partir de&nbsp;12 mois, aux <strong>peaux intolérantes au soleil</strong> ou aux <strong>peaux très claires</strong> avec des taches de rousseur. Il est également indiqué&nbsp;en cas d'ensoleill ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129809921</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88ad8087d5a91b46ef526f2291c63ccd88f0289dc83b79b7f6aba7f831770811 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Spray solaire invisible SPF 30 200 ml ]]></title>
<g:id>37edda77-8ed8-42d3-86e3-9983de0dac5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm spray solaire invisible spf 30 200 ml?37edda77-8ed8-42d3-86e3-9983de0dac5e ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce spray est <strong>hydratant </strong>et répondra ainsi aux besoins des peaux desséchées par l'exposition au soleil.&nbsp;<br>Il&nbsp;est labellisé <em>Aquatic Ecosystem Tested</em>, ce qui indique qu'il ne nuit pas aux planctons d'eaux douces, aux algues marines et aux coraux.&nbsp;</p><ul><li><p>Absorption rapide.</p></li><li><p>Multi résistant : à l'eau, la transpiration, le sable.</p></li><li><p>Applicable sur peau mouillée.</p></li><li><p>Formule parfumée.</p></li><li><p>Testé sous con ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807262</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13959bf162ee5c939f45c3d0de5c93ae90b24bce8d75307a1e0e9feb8d025721 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Stick spf50+ 8g ]]></title>
<g:id>23601532-a8c4-4f6d-a5e2-b73d261cb675</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm stick spf50+ 8g?23601532-a8c4-4f6d-a5e2-b73d261cb675 ]]></link>
<g:price><![CDATA[ 830.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>L'hydratation très haute protection pour les zones sensibles</strong></p>
<p><strong>BÉNÉFICES</strong><br />Garantit une très haute protection UVA/UVB<br />PROTECTION CELLULAIRE : protège les cellules du stress oxydatif grâce à la vitamine E antioxydante<br />8h d'hydratation<br />Absorption rapide<br />Convient aux zones sensibles : Nez, oreilles, cicatrices, marques<br />Texture invisible<br />Non collant - Non gras - Non comédogène - Très bonne tolérance cutanée et oculaire - Rési ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129804438</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9550ab0e688a35635052624822e7e76458fa7d902233e85944e3a0fe0a787f17 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Ultra-Fluid SPF50+ Teinté (Teinte:03) 40ml ]]></title>
<g:id>765bbb2e-7c72-4d6a-9b71-eed0dacb0f35</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm ultra-fluid spf50+ teinté (teinte:03) 40ml?765bbb2e-7c72-4d6a-9b71-eed0dacb0f35 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>XDefense Ultra-Fluid Bioderma Photoderm est un fluide solaire doté d'un SPF 50+ et d'un PA++++. Il offre le plus haut niveau de protection contre les dommages induits par le soleil : coups de soleil, brûlures, lésions cellulaires et vieillissement cutané prématuré. XDefense Ultra-Fluid va également protéger la peau de la lumière visible, des infrarouges et de la pollution. Enfin, il exerce aussi une action détoxifiante et hydratante.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129813645</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/75d0a0510e190f70d384b6b540d5bb786d1e461c5499661f1dcea7a4c56e5768 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm XDefense Ultra-Fluid SPF50+ 40ml ]]></title>
<g:id>02abdebb-aab9-496d-a4e7-4ade8c271597</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm xdefense ultra-fluid spf50+ 40ml?02abdebb-aab9-496d-a4e7-4ade8c271597 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm XDefense Ultra-Fluid est une protection solaire visage SPF 50+&nbsp;qui&nbsp;offre une protection complète face aux agresseurs environnementaux : rayons UV, lumière visible, infra-rouges et pollution.</p><p>Développée par le laboratoire Bioderma, ce fluide est conçu pour un usage quotidien, et est adapté à tous les types de peau. Il&nbsp;garantit une très haute protection solaire à large spectre.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129813614</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e131e37ec24290d62bffaf672629edb0f0c19df7dd6790b86738b4f5ea5537fb ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Xdefense Ultra-Fluid Teinte 01 SPF50+ 40ml ]]></title>
<g:id>c0f9ca97-3ad8-4226-8607-a7eb7069b8e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm xdefense ultra-fluid teinte 01 spf50+ 40ml?c0f9ca97-3ad8-4226-8607-a7eb7069b8e7 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Photoderm XDefense Ultra-Fluid SPF50+ Teinté (40 ml) - Teinte 01 agit comme un véritable bouclier protecteur, protégeant la peau des effets nocifs des rayons UV, de la lumière visible, des infrarouges et de la pollution.</p><p>Grâce à sa technologie Detox Science, elle aide à détoxifier la peau de la pollution, la laissant plus radieuse.</p><p>La technologie Sun Active Defense renforce les capacités d'auto-défense de la peau, contribuant à préserver sa santé lorsqu'elle est exposée a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129813621</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65457ebf72b0d6e600bcdc5e42abe6f1f302ac63b0c16da56ef0b6ddc779abac ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Photoderm Xdefense Ultra-Fluid Teinte 04 SPF50+ 40ml ]]></title>
<g:id>26789a68-29ab-476d-bb68-63b3e81b5e10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm xdefense ultra-fluid teinte 04 spf50+ 40ml?26789a68-29ab-476d-bb68-63b3e81b5e10 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>XDefense Ultra-Fluid Bioderma Photoderm</strong> est un <strong>fluide solaire</strong> doté d'un SPF 50+ et d'un PA++++. Il offre le plus haut niveau de protection contre les dommages induits par le soleil : coups de soleil, brûlures, lésions cellulaires et vieillissement cutané prématuré. <strong>XDefense Ultra-Fluid</strong> va également protéger la peau de la lumière visible, des infrarouges et de la pollution. Enfin, il exerce aussi une action détoxifiante et hydratante.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129813652</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eda44ec4c6a804141518127aade0e9561d672d1c218cab7d963ae7e6431df7e5 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma PigmentBio Daily Care SPF50+ Soin de Jour Éclaircissant 40 ml ]]></title>
<g:id>95bdf6fb-eb08-4153-939b-b2a4d2f6825b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-pigmentbio daily care spf50+ soin de jour Éclaircissant 40 ml?95bdf6fb-eb08-4153-939b-b2a4d2f6825b ]]></link>
<g:price><![CDATA[ 2540.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bioderma PigmentBio Daily Care SPF50+ Soin de Jour Éclaircissant 40 ml est un soin à très bonne tolérance inspiré des traitements de référence des dermatologues qui révèle la luminosité du teint originel, aide à réduire la production de mélanine et booste le renouvellement cellulaire pour un effet éclaircissant correctif et préventif.</span><br /><span>Les filtres anti-UVA/UVB et les vitamines C et E anti-oxydantes agissent en synergie pour renforcer l'action éclaircissante et protéger  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129800072</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/083d3bf321d5ce67e523caba39fe61b729c2347d0a233514f294840a7c2f6367 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma PigmentBio Soin Nuit Éclaircissant 50 ml ]]></title>
<g:id>7b2acd85-fce6-4eed-94e7-7c074a82a059</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-pigmentbio soin nuit Éclaircissant 50 ml?7b2acd85-fce6-4eed-94e7-7c074a82a059 ]]></link>
<g:price><![CDATA[ 3015.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bioderma PigmentBio Night Renewer Soin de Nuit Éclaircissant 50 ml est un soin à très bonne tolérance inspiré des traitements de référence des dermatologues qui révèle la luminosité du teint originel, aide à réduire la production de mélanine et booste le renouvellement cellulaire pour un effet éclaircissant correctif et préventif. Ce soin contient un actif qui stimule la production de collagène pour une peau lissée au réveil.</span><br /><span>Sa formule est parfumée et sa texture est r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129800089</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c28e875a9a61cbef36361ead7884d4e32bf0b3dbb848493b80083dee8e72433 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Pigmentbio Sensitive Areas Soin Éclaircissant Ciblé 75 ml ]]></title>
<g:id>c032fee6-9300-426a-be70-e528e7e3e62f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-pigmentbio sensitive areas soin Éclaircissant ciblé 75 ml?c032fee6-9300-426a-be70-e528e7e3e62f ]]></link>
<g:price><![CDATA[ 2430.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Pigmentbio Sensitive Areas Soin Éclaircissant Ciblé 75 ml est un soin pour le corps qui atténue les différences colorielles, unifie, hydrate, apaise la peau.</p>
<p>Ce soin éclaircit et unifie les zones de frottements (genoux, coudes, aisselles, cuisses, aine) et les zones intimes externes. Il apaise la peau et aide à prévenir les rougeurs responsables des différences colorielles cutanées.<br />L'association d'actifs brevetée régule les mécanismes biologiques à l'origine des taches b ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129800096</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef5f6821308017e713b7b57b1c5a92928c45305496f904e487216be11dd87a2b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sebium Gel Moussant Nettoyant Purifiant 200 ml ]]></title>
<g:id>2d897afd-b6e0-4b47-bab0-5febbd7436bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sebium gel moussant nettoyant purifiant 200 ml?2d897afd-b6e0-4b47-bab0-5febbd7436bf ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sébium Gel moussant nettoie en douceur et est le seul gel nettoyant à limiter la formation des imperfections grâce au complexe sébo-correcteur Fluidactiv<sup>®</sup> qui normalise biologiquement la qualité du <span id="glossaryID6" class="glossaryTerm">sébum</span>.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401578653709</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c274447ca3f49e6d64e11f5ce05e8c7201210901e8b1eeca5eb1b873cea8b1fb ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sebium Gel-crème Anti-Imperfections 30ml ]]></title>
<g:id>e1612992-3c2c-4660-8e28-8bf38c49a4b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sebium gel-crème anti-imperfections 30ml?e1612992-3c2c-4660-8e28-8bf38c49a4b5 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le DUO UNIQUE D’ACTIFS KÉRATOLYTIQUES (acide salicylique et ester d’acide malique), efficace au pH de la peau, agit en surface et en profondeur pour éliminer les boutons et les marques tout en préservant le confort de la peau.</span><br /><br /><span>L'ESTER D'ACIDE MALIQUE est un actif avec une double action : kératolytique mais aussi régulatrice de l’excès de sébum.</span><br /><br /><span>Le brevet FLUIDACTIV™, en normalisant biologiquement la qualité du sébum, empêche l’apparition d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807972</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4154670c0723594d314b99fcec04c856d1f96efd7eebbaf25ae83c17d503a1d8 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sebium H2O Solution Micellaire 500ml  ]]></title>
<g:id>b8bffa1e-530d-42b7-94db-e9b76738b696</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sebium h2o solution micellaire 500ml ?b8bffa1e-530d-42b7-94db-e9b76738b696 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Bioderma Sébium H2Oest une solution micellaire qui nettoie et purifie au quotidien, grâce à un procédé original de micro-émulsion des salissures, les peaux jeunes, les peaux mixtes ou grasses et les peaux grasses à problèmes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401575645851</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/67eff8e01d4d16ffdcb7e7fe056bb7d93fc3cc5cab9ee31cc7ee3883e1d2be91 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Gel Gommant 100ml ]]></title>
<g:id>35fa40cb-b112-4042-afb8-82260f788d03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium gel gommant 100ml?35fa40cb-b112-4042-afb8-82260f788d03 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Gel Gommant est formulé à partir d'agents nettoyants reconnus pour leur efficacité et leur douceur.</p>
<p>Les micro-billes, renforcées par de puissants actifs kératorégulateurs agissent mécaniquement sur les boutons et les points noirs.</p>
<p>Elles accélèrent l'élimination des impuretés et favorisent ainsi le renouvellement cellulaire. Le complexe breveté Fluidactiv normalise la qualité du sébum.</p>
<p>Grâce au gel gommant Sébium de Bioderma, le grain de la peau s'affine, l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401574131423</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7fe6c4269f3e0b03b02d3b60fd6b18fa005d9ea3a06f294fb7bb2b1da30d990a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Gel Moussant Actif 200 ml ]]></title>
<g:id>bc0e5939-fc53-43ba-b136-f84eb0d1019e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium gel moussant actif 200 ml?bc0e5939-fc53-43ba-b136-f84eb0d1019e ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Gel Moussant Actif 200 ml est un nettoyant purifiant intense qui désobstrue les pores et diminue les imperfections tout en respectant la peau. Il est spécialement dédié aux peaux grasses à tendance acnéique.</p>
<p>Sa formule associe un duo d'actifs lissants (Acide salicylique + Acide glycolique) qui nettoie et purifie la peau intensément sans la dessécher. Il respecte l'équilibre cutané.<br />Le complexe breveté D.A.F.™ (Dermatological Advanced Formulation) augmente le seuil  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803400</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/67c6c04c21900a3f41c29c27d959eec0a5a2083419252873f676fc98e31c2d2d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Gel Moussant Purifiant 500ml ]]></title>
<g:id>99fa74d6-ba8c-4ae9-9cae-3e04732524ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium gel moussant purifiant 500ml?99fa74d6-ba8c-4ae9-9cae-3e04732524ca ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gel Moussant Sebium des laboratoires Bioderma est un soin lavant qui nettoie et purifie au quotidien les peaux jeunes ou à tendance acnéiques.</p>
<p>Il enlève les impuretés de la peau : l'épiderme est assainit en douceur.</p>
<p>Le Gel Moussant Sebium s'utilise quotidiennement pour des résultats visibles.</p>
<p>Il corrige et normalise la qualité du sébum.</p>
<p>Ce gel moussant convient aux peaux mixtes, grasses ou à problèmes.</p>
<p>Il limite la sécrétion sébacée et assainit l'épiderme ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399277092</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dddd612806675f9dfb219b27500dc00473f80534ba8f19a1a1558d1906f5a9f4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Global Cover ]]></title>
<g:id>52e3aee3-056a-454d-ad60-134fc9053d1d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium global cover?52e3aee3-056a-454d-ad60-134fc9053d1d ]]></link>
<g:price><![CDATA[ 1270.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Global Cover 30 ml + 2 g est un soin purifiant spécialement formulé pour les peaux à tendance acnéique. Ce soin teinté agit essentiellement au niveau</p>
<p>des boutons et des points noirs grâce à la technologie SeboRestore (Brevet Fluidactiv - Bakuchiol). Elle permet de rééquilibrer la composition du sébum afin qu'il retrouve</p>
<p>ses fonctions protectrices. Il contient également une association d'actifs dermatologiques, esters d'AHA et d'acide salicylique qui désobstrue le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360145207</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6b378607e665db11700effacb18988fd565d05adae3b5337dfb5a876ce2041be ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium H2O Eau Micellaire Nettoyante Purifiante Lot de 2 x 500 ml ]]></title>
<g:id>713a5022-5ec5-4ffd-8fe4-4475c2d7f528</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium h2o eau micellaire nettoyante purifiante lot de 2 x 500 ml?713a5022-5ec5-4ffd-8fe4-4475c2d7f528 ]]></link>
<g:price><![CDATA[ 1899.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">L'eau micellaire nettoyante démaquillante qui purifie en douceur les peaux mixtes ou grasses. </p>
<p class="p1">Sébium H2O  est un soin d'hygiène quotidienne qui nettoie la peau en douceur sans dessécher par un processus de micro-émulsion des impuretés et de l'excès de sébum. </p>
<p class="p1">Enrichi en actifs purifiants, Sébium H2O assainit l'épiderme et limite la sécrétion sébacée. Le complexe sébo-correcteur breveté Fluidactiv normalise la qualité du sébum.</p>
<p class="p1"> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401325629209</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/332ad12d4bc96f232fbd2c4feef1bc4842624c4ed8b61728ef6577d84ed6f764 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium H2O Solution Micellaire 100 ml ]]></title>
<g:id>f9666f9a-a587-4cae-b853-0739cfee223b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium h2o solution micellaire 100 ml?f9666f9a-a587-4cae-b853-0739cfee223b ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Bioderma propose une nouvelle génération de soins anti-imperfections qui agissent directement sur la qualité du sébum grâce au complexe breveté Fluidactiv.</p>
<p class="p1">Innovation BIODERMA, Sébium H2O nettoie la peau en douceur sans dessécher par un processus de micro-émulsion des impuretés et de l’excès de sébum. Enrichi en actifs purifiants, Sébium H2O assainit l’épiderme et limite la sécrétion sébacée. Le complexe sébo-correcteur breveté Fluidactiv® normalise la qualité du  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401395376935</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc3e2bfbbf2fa3d36ecd2343917368718c689de0132ea2fb0f7f5abd3195fac4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Hydra Cleanser Baume Lavant Apaisant 200 ml ]]></title>
<g:id>eea41501-c03e-4834-9c0b-b0c0a7886739</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium hydra cleanser baume lavant apaisant 200 ml?eea41501-c03e-4834-9c0b-b0c0a7886739 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Hydra Cleanser Baume Lavant Apaisant 200 ml est une base lavante douce pour les peaux à tendance acnéiques. Ce baume à la texture enveloppante est spécialement conçu pour un nettoyage tout en douceur en limitant les frottements afin de respecter les peaux fragilisées et ultra-desséchées par des traitements.<br />Il est formulé avec 93% d'ingrédients biomimétiques, en parfaite affinité avec la peau, dont un lipide (huile de karité) aux propriétés nourrissantes.</p>
<p>La peau e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129809273</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/760901fbeeb46ebbd07308a67de503f6138281b0437754deab9b6dfb07b93f73 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Hydra Soin Ultra-Hydratant Compensateur 40 ml ]]></title>
<g:id>0f8819cc-5f62-49d2-a0e2-61565d213163</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium hydra soin ultra-hydratant compensateur 40 ml?0f8819cc-5f62-49d2-a0e2-61565d213163 ]]></link>
<g:price><![CDATA[ 1050.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin compensateur hydratant et apaisant des peaux grasses fragilisées, desséchées et/ou irritées par des traitements dermatologiques.</p>
<p>Toutes les peaux, mêmes grasses, doivent être hydratées car elles peuvent momentanément être desséchées et/ou irritées (soins spécifiques, agressions extérieures...).</p>
<p>Sébium Hydra est spécialement formulée pour compenser ces déséquilibres provisoires.</p>
<p>Les actifs hydratants et restructurants de Sébium Hydra combattent le phénomène de desq ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401348840421</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb70a110ed162137b3e83dd0a6c33be1b2bfdce2460d559201f844523d2117bf ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Mat Control Soin Hydratant Anti-Brillance 30 ml ]]></title>
<g:id>019cf110-3923-4669-96a4-6235f132355f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium mat control soin hydratant anti-brillance 30 ml?019cf110-3923-4669-96a4-6235f132355f ]]></link>
<g:price><![CDATA[ 1165.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Mat Control Soin Hydratant Anti-Brillance 30 ml est un soin hydratant matifiant et lissant destiné aux peaux mixtes à grasses.<br>Ce soin hydratant Technologie "Mat &amp; Lisse" offre une efficacité instantanée et en continu pour une peau toujours plus belle au naturel :</p><ul><li><p>Efficacité instantanée et pendant 8 heures : hydrate, matifie, lisse les irrégularités instantanément grâce à sa texture correctrice nouvelle génération.</p></li><li><p>Efficacité en continu : ré ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401381682361</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8041000a373022d4c139c39edb9c1fc70d6d7a12e0139c9195fcd1404be25862 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Night Peel Concentré Lissant 40 ml ]]></title>
<g:id>f19ca12b-52c8-4227-a2f3-c8efd39aee1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium night peel concentré lissant 40 ml?f19ca12b-52c8-4227-a2f3-c8efd39aee1b ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <div id="type_info_prio_11_1">
<p>Bioderma Sébium Night Peel 40 ml est un soin à très bonne tolérance qui favorise la diminution des marques et des imperfections installés et réduit les brillances. L'acide glycolique, formulé à 15%, favorise le renouvellement épidermique. Ce soin peeling doux lisse le grain de la peau et révèle son éclat naturel. Il associe également du D-Panthenol pour son action apaisante. Le brevet Fluidactiv™ normalise biologiquement la qualité du sébum et évite l'obstructio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129801369</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0f38bef6976c129d0771a397651a8b9319e9f30f445d3ce8b526ecb9900d369e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Pore Refiner Soin Correcteur des Pores Dilatés 30 ml ]]></title>
<g:id>3cccf5e8-285d-4426-88b8-58a642d2503c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium pore refiner soin correcteur des pores dilatés 30 ml?3cccf5e8-285d-4426-88b8-58a642d2503c ]]></link>
<g:price><![CDATA[ 1370.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce concentré correcteur améliore l’aspect de la peau : son grain est plus fin, plus régulier, plus net, les pores sont resserrés, moins visibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401361353625</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/635669c304264d5b1e86a1e269d846cdba4b746e5806fe1a6c3a997fcb6afc2c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Sensitive Soin Apaisant Anti-Imperfections 30 ml ]]></title>
<g:id>34c40922-ad7f-4833-a5c8-438e1ba23b96</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium sensitive soin apaisant anti-imperfections 30 ml?34c40922-ad7f-4833-a5c8-438e1ba23b96 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Sensitive Soin Apaisant Anti-Imperfections 30 ml est un soin qui réhydrate et élimine les rougeurs et boutons. Il est spécialement formulé pour les peaux à tendance acnéique sensibles et fragilisées.</p>
<p>Ce soin apaisant contient une technologie SeboRestore (Brevet Fluidactiv - Bakuchiol) qui va agir à l'origine de la sensibilité et des imperfections des peaux à tendance acnéique. Cette technologie rééquilibre la composition du sébum pour qu'il retrouve durablement ses fonc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360106994</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87a14490008f5ae860c0747e5bd9d19e6bd268b15de4c2bcd0524f0dc3ab175f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Sébium Serum Concentré Lissant Anti-Imperfections 30 ml ]]></title>
<g:id>c57ec199-515d-4b57-b23e-f4802470cebd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-sébium serum concentré lissant anti-imperfections 30 ml?c57ec199-515d-4b57-b23e-f4802470cebd ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma Sébium Serum Concentré Lissant Anti-Imperfections 30 ml est un sérum qui offre une prise en charge globale et spécifique des imperfections des peaux adultes à tendance acnéique. Il réduit rapidement boutons, pores visibles et dilatés, marques résiduelles et limite leur réapparition. Il contient des actifs hautement dosés : l'acide salicylique exfolie la peau tandis que l'acétyl glucosamine, dérivé du sucre, favorise le renouvellement cellulaire. Sa technologie normalise biologiquemen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129809280</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3eece7f17e0c3da382f5239723324b2374068c9baea1bf9f643b9636ee4099c2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > SOIN PEAU GRASSE A PROBLEME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm AR crème anti-rougeurs spf50+ 30ml ]]></title>
<g:id>21c35099-e010-4d0f-a734-4e4b99a1fce4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm ar crème anti-rougeurs spf50+ 30ml?21c35099-e010-4d0f-a734-4e4b99a1fce4 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>La très haute protection solaire anti-rougeurs pour une peau unifiée.</p>
<ul><li>Garantit une très haute protection UVA/UVB</li>
<li>SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA</li>
<li>Apaise et atténue les rougeurs grâce au complexe Rosactiv™</li>
<li>Aide à contrôler la réaction de la peau et prévient l'apparition de nouvelles éruptions cutanées</li>
<li>8h d'hydratation</li>
<li>Teinte naturelle unifiante</li>
<li>Texture onctueuse - Non collant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803707</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a409a82d3a2ef9635ace365a41f9dae1869249d67f9afde313edc91086d338e1 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm M spf50+ doré 40ml ]]></title>
<g:id>28e7cf59-a1e8-4e9d-a149-58ca5767be33</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm m spf50+ doré 40ml?28e7cf59-a1e8-4e9d-a149-58ca5767be33 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>BÉNÉFICES</strong><br />- 66 % DE PROTECTION CONTRE LA LUMIÈRE BLEUE : Prévient la récidive du mélasma - SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA - Clarifie les taches brunes existantes grâce à la glabridine - Unifie : Haute concentration de pigments, haute couvrance sans effet masque - Fini matifiant et poudré 8h Convient aux femmes enceintes et allaitantes - Texture gel-crème - Non collant - Non gras - Sans parfum - Très bonne tolérance  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803714</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5bacd99f47dac23bbddb28bb2a1a7ed9c2dee85c65db1c33022b9d6657d9c76 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm aquafluide spf50+ dorée 40ml ]]></title>
<g:id>ec46149a-0888-4498-8fc9-3f04716efd61</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm aquafluide spf50+ dorée 40ml?ec46149a-0888-4498-8fc9-3f04716efd61 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>BÉNÉFICES</strong><br />Garantit une très haute protection UVA/UVB<br />SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA<br />8h d'hydratation<br />Laisse une sensation de toucher sec<br />Unifie le teint<br />Formule à base d'eau - Texture ultra-légère et fraîche - Fini invisible - Non collant - Non gras - Excellente base de maquillage - Sans parfum - Très bonne tolérance cutanée et oculaire - Non comédogène - Résistant à l'eau, à la chaleur et à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807408</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f923c8dbfa1c803d760f778a4cde0f841b66d5d512383a69f3caca1589f5f141 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm crème spf50+ teintée 40ml ]]></title>
<g:id>f360a9ad-58fb-4246-a6b6-746118841f03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm crème spf50+ teintée 40ml?f360a9ad-58fb-4246-a6b6-746118841f03 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Garantit une très haute protection UVA/UVB</li>
<li>SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA</li>
<li>8h d'hydratation</li>
<li>Laisse la peau souple et confortable</li>
<li>Unifie, laissant un teint lumineux</li>
<li>Non collant - Non gras - Excellente base de maquillage - Sans parfum - Très bonne tolérance cutanée et oculaire - Non comédogène - Résiste à l'eau, à la chaleur et à l'humidité élevée</li>
</ul><p>La SUN ACTIVE DEFENSE est une p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803516</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c1c478c24691ae4437b0196290697883ed2c7757f194e8efb974ef2f116c5f8 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm max crème solaire spf 50+ 40ml ]]></title>
<g:id>f85f695b-d0e5-4230-a711-1a379bfae292</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm max crème solaire spf 50+ 40ml?f85f695b-d0e5-4230-a711-1a379bfae292 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Garantit une très haute protection UVA/UVB</li>
<li>SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA</li>
<li>8h d'hydratation</li>
<li>Laisse la peau souple et confortable</li>
<li>Fini invisible - Non collant - Non gras - Excellente base de maquillage - Sans parfum - Très bonne tolérance cutanée et oculaire - Non comédogène - Résiste à l'eau, à la chaleur et à l'humidité élevée</li>
</ul><p>La SUN ACTIVE DEFENSE est une protection solaire de haute  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803523</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62181e10e7d1da2e7eee624bdf60a3273250a138a5ad3b7cdee795f7a49fb9b7 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm nude touch mineral spf50+ claire 40ml ]]></title>
<g:id>2b2d21c7-fd91-4c4f-864b-3f75aa700c5d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm nude touch mineral spf50+ claire 40ml?2b2d21c7-fd91-4c4f-864b-3f75aa700c5d ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin solaire minéral, effet peau nue.</p>
<p><strong>BÉNÉFICES</strong><br />Garantit une très haute protection UVA/UVB avec des filtres 100% minéraux et une protection contre la lumière visible grâce aux oxydes de fer<br />SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA<br />Améliore la qualité du sébum et limite l'apparition de nouvelles imperfections grâce au brevet breveté Fluidactiv™ associé à l'acide salicylique et à la capryloyl glycine.<br />U ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803448</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a3fa1a56f4a74c4248d9481cdeff7e6bb232ab007d1b26989eaefa2ec31ab22f ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm nude touch spf50+ teinte dorée 40ml ]]></title>
<g:id>514ff21d-85c9-4fb7-885b-afd11a61a2aa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm nude touch spf50+ teinte dorée 40ml?514ff21d-85c9-4fb7-885b-afd11a61a2aa ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Offre une protection 100 % minérale contre les UVA/UVB</li>
<li>Atténue la brillance pendant 8 h grâce à ses poudres absorbantes</li>
<li>Offre un teint uniforme et éclatant avec un effet peau nu</li>
<li>Réduit les imperfections jour après jour</li>
<li>Texture ultralégère, toucher soyeux, fini poudré en parfaite fusion avec la peau - Très bonne tolérance - Non comédogène - Très haute résistance à l’eau - Disponible en trois teintes</li>
</ul><p>L’association de filtres minéraux anti-UV ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803462</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a84d5c1f687134712dae630e0fce2fdbf40116ff796d267d9f269f49043e29b ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm spot-âge spf50+ 40ml ]]></title>
<g:id>c8f00939-c925-409f-a358-c6fb06693e93</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm spot-âge spf50+ 40ml?c8f00939-c925-409f-a358-c6fb06693e93 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Très haute protection solaire enrichie en antioxydants qui réduit les taches et les rides.</p>
<p><strong>BÉNÉFICES</strong><br />Garantit une très haute protection à large spectre [UVA/UVB, Lumière visible à haute énergie, Infrarouge &amp; pollution]<br />SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA<br />8h d'hydratation<br />Texture gel-crème au toucher léger et sec<br />Anti-taches : Action éclaircissante, augmente l'homogénéité de la peau grâce à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803738</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/21e52b319d8def6060f53b7f4e2ef412728c3dd422026823b6a01374d3589a1e ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma photoderm spray spf50+ 200ml ]]></title>
<g:id>f5f4faa1-5753-4155-8ce2-daaa297d33b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-photoderm spray spf50+ 200ml?f5f4faa1-5753-4155-8ce2-daaa297d33b5 ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <p>La très haute protection qui active les défenses naturelles de la peau.</p>
<p><strong>BÉNÉFICES</strong><br />Garantit une très haute protection UVA/UVB<br />SUN ACTIVE DEFENSE : protection solaire de haute technologie, renforcée contre les UVA<br />Protection complémentaire sur la défense immunitaire cutanée de +24%* et protection antioxydante de +26%*<br />8h d'hydratation<br />Texture légère<br />Finition invisible<br />Absorption rapide<br />Pour le visage &amp; le corps - Non collant -  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129803677</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8138a144ead8fca54897180967ceb604b80da631c87cd3f55ea43362212d59fe ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioes Babylena bio liniment oléo calcaire 1l ]]></title>
<g:id>6d1a5ab9-3bab-43a0-81e0-de9e7a544a32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioes-babylena bio liniment oléo calcaire 1l?6d1a5ab9-3bab-43a0-81e0-de9e7a544a32 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une recette ancestrale à base d'huile d'olive issue de l'agriculture biologique conçue pour agir en 3 étapes sur les fesses de bébé : Il nettoie, il adoucit les rougeurs passagères, il nourrit et protège</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401353741591</g:gtin>
<g:brand><![CDATA[ BIOES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f94fb0b54dca91f03b497ed98a0be0d890b25f6473f45d37bc6dff6f826d2ef6 ]]></g:image_link>
<g:product_type><![CDATA[ LINIMENT OLEO CALCAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Cicabébé Baume Réparateur Apaisant Bio 40 ml ]]></title>
<g:id>43f31e35-9eec-4d2f-a44f-320b05b227da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-cicabébé baume réparateur apaisant bio 40 ml?43f31e35-9eec-4d2f-a44f-320b05b227da ]]></link>
<g:price><![CDATA[ 740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifié biologique, le baume réparateur apaisant Cicabébé® prévient, répare et apaise les sécheresses intenses et irritations superficielles de votre bébé (sécheresses localisées, irritations péri-orales, croûtes de lait).<br><br>Protéger les bébés, en préservant la nature :<br>- Un emballage comportant au moins 11% de matières recyclées<br>- Un étui en carton FSC pour la préservation des forêts<br>- Une fabrication sur notre site vendéen<br>- Une formule à 99% d'origine naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010078384</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad27e5d3c1fdab0536176bea7916f5961b00fe946398e5c923cafc720341002f ]]></g:image_link>
<g:product_type><![CDATA[ SOIN BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Couches Ecologiques Taille 1 2-5Kg 28 couches  ]]></title>
<g:id>6f2b4e95-7763-40e8-a92c-179dd6a17218</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-couches ecologiques taille 1 2-5kg 28 couches ?6f2b4e95-7763-40e8-a92c-179dd6a17218 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fort de son expertise de la peau des bébés, Biolane lance en 2020 une gamme de couches dont les surfaces en contact avec la peau du bébé sont 100% d'origines naturelles.*<br><br>Fabriquées en France, elles sont garanties sans ajout de substance irritante ou toxique. Les couches Biolane garantissent jusqu’à 12h de protection, grâce à un cœur absorbant composé de 3 niveaux et une cellulose dense qui absorbe les liquides rapidement. Quant au voile extérieur, il est micro-aéré pour laisser respir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010060075</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/44ae06a6f634c4ffcf6077307af3951564aeed69eff5a670cc771c15874a55d9 ]]></g:image_link>
<g:product_type><![CDATA[ COUCHES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Couches Ecologiques Taille 2 3-6Kg 28 couches  ]]></title>
<g:id>cfad0609-19d9-480b-a18f-b7b26d94f2bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-couches ecologiques taille 2 3-6kg 28 couches ?cfad0609-19d9-480b-a18f-b7b26d94f2bf ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fort de son expertise de la peau des bébés, Biolane lance en 2020 une gamme de couches dont les surfaces en contact avec la peau du bébé sont 100% d'origines naturelles.*<br><br>Fabriquées en France, elles sont garanties sans ajout de substance irritante ou toxique. Les couches Biolane garantissent jusqu’à 12h de protection, grâce à un cœur absorbant composé de 3 niveaux et une cellulose dense qui absorbe les liquides rapidement. Quant au voile extérieur, il est micro-aéré pour laisser respir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010060150</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/64e1398c540dcb10f0c4d87749bb86bae1e3c172967f657b7c5df4a9a1bc7d68 ]]></g:image_link>
<g:product_type><![CDATA[ COUCHES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Couches Ecologiques Taille 3 4-9Kg 52 couches  ]]></title>
<g:id>80d0c625-886d-4b0b-9ff3-b78c40f20510</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-couches ecologiques taille 3 4-9kg 52 couches ?80d0c625-886d-4b0b-9ff3-b78c40f20510 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fort de son expertise de la peau des bébés, Biolane lance en 2020 une gamme de couches dont les surfaces en contact avec la peau du bébé sont 100% d'origines naturelles.*<br><br>Fabriquées en France, elles sont garanties sans ajout de substance irritante ou toxique. Les couches Biolane garantissent jusqu’à 12h de protection, grâce à un cœur absorbant composé de 3 niveaux et une cellulose dense qui absorbe les liquides rapidement. Quant au voile extérieur, il est micro-aéré pour laisser respir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010060082</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b694ac452af72026ae580c6929bf2c9b9f49b445360fa0c09baaabffa19ba8c3 ]]></g:image_link>
<g:product_type><![CDATA[ COUCHES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Couches Ecologiques Taille 4 7-18Kg 44 couches  ]]></title>
<g:id>a6c5d52a-6fd5-422f-94dc-2120bc939959</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-couches ecologiques taille 4 7-18kg 44 couches ?a6c5d52a-6fd5-422f-94dc-2120bc939959 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fort de son expertise de la peau des bébés, Biolane lance en 2020 une gamme de couches dont les surfaces en contact avec la peau du bébé sont 100% d'origines naturelles.*<br><br>Fabriquées en France, elles sont garanties sans ajout de substance irritante ou toxique. Les couches Biolane garantissent jusqu’à 12h de protection, grâce à un cœur absorbant composé de 3 niveaux et une cellulose dense qui absorbe les liquides rapidement. Quant au voile extérieur, il est micro-aéré pour laisser respir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010060105</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5d774d67aa8e949851c9649bfd1072de6b264cf412b01167cc57060fb7b12a9 ]]></g:image_link>
<g:product_type><![CDATA[ COUCHES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Couches Ecologiques Taille 5 11-25Kg 40 couches  ]]></title>
<g:id>eb912c13-db3c-4790-9b61-a382fc91bcb7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-couches ecologiques taille 5 11-25kg 40 couches ?eb912c13-db3c-4790-9b61-a382fc91bcb7 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fort de son expertise de la peau des bébés, Biolane lance en 2020 une gamme de couches dont les surfaces en contact avec la peau du bébé sont 100% d'origines naturelles.*<br><br>Fabriquées en France, elles sont garanties sans ajout de substance irritante ou toxique. Les couches Biolane garantissent jusqu’à 12h de protection, grâce à un cœur absorbant composé de 3 niveaux et une cellulose dense qui absorbe les liquides rapidement. Quant au voile extérieur, il est micro-aéré pour laisser respir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010060112</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/547ad3a5c27d4e8456f2233c9892d2af2f6f17e78f8009e064ec20a394c5a05a ]]></g:image_link>
<g:product_type><![CDATA[ COUCHES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Crème Change 100 ml ]]></title>
<g:id>95abc677-6329-453a-be2a-abe5e2877195</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-crème change 100 ml?95abc677-6329-453a-be2a-abe5e2877195 ]]></link>
<g:price><![CDATA[ 660.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème change répare, apaise et protège efficacement les irritations et rougeurs de l'épiderme fessier de votre bébé. Sa formule forme un film protecteur naturel grâce à l'association de l'oxyde de zinc et de l'huile d'amande douce. L'apport en vitamine B5 participe à la régénération des tissus cutanés.<br><br>Protéger les bébés, en préservant la nature :<br>- Un emballage comportant au moins 12% de matières recyclées<br>- Un étui en carton FSC pour la préservation des forêts<br>- Une fabri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010075567</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a3db668352007df7a8c5fb82b4a9a31039106285fdee1e56b2152e89659dda8 ]]></g:image_link>
<g:product_type><![CDATA[ CHANGE > CREME CHANGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Crème Change Bio 75 ml ]]></title>
<g:id>a278227e-4358-4396-bd9b-34208457055a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-crème change bio 75 ml?a278227e-4358-4396-bd9b-34208457055a ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifiée biologique, la crème change répare, apaise et protège les rougeurs et irritations de l'épiderme fessier.<br><br>Protéger les bébés, en préservant la nature :<br>- Un emballage comportant au moins 34% de matières recyclées<br>- Une fabrication sur notre site vendéen<br>- Une formule à 99% d'origine naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010059864</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b5644eef30f861d6bd49bd57df4bdf12a40b3599540e675657dec30d17bd80b ]]></g:image_link>
<g:product_type><![CDATA[ CREME CHANGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Crème Hydratante Bio 75 ml  ]]></title>
<g:id>22e5971a-ac7b-4969-8c97-da4e8ae0711e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-crème hydratante bio 75 ml ?22e5971a-ac7b-4969-8c97-da4e8ae0711e ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifiée biologique, la crème hydratante nourrit et protège le visage et le corps de votre bébé.<br>Une efficacité prouvée : +72% d'hydratation 8H après application<br><br>Protéger les bébés, en préservant la nature :<br>- Un emballage comportant au moins 34% de matières recyclées<br>- Une fabrication sur notre site vendéen<br>- Une formule à 99% d'origine naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010059857</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22c2f1811c49326d62ace4b95f6bfc6b801b0e38441579d6b8b94b40f7312718 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Deliderm Crème Visage 50 ml ]]></title>
<g:id>7995c667-5a48-4022-94ec-959b8a97af82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-deliderm crème visage 50 ml?7995c667-5a48-4022-94ec-959b8a97af82 ]]></link>
<g:price><![CDATA[ 620.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enrichie en beurre de karité et glycérine la crème visage Deliderm® hydrate durablement et adoucit la peau sensible du visage de votre bébé.<br>Une efficacité prouvée : +34% d'hydratation 8H après application.<br><br>Protéger les bébés, en préservant la nature :<br>- Un emballage comportant au moins 14% de matières recyclées<br>- Un étui en carton FSC pour la préservation des forêts<br>- Une fabrication sur notre site vendéen<br>- Une formule à 98 % d'origine naturelle<br><br>A quoi correspon ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010045072</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/efdd885df56b0fc6ece8c90c70880a462fe3319c1007ac4f3efeb34886db76c3 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Eau Fraîche Coiffante 200 ml ]]></title>
<g:id>8552bd95-470b-480a-8f8f-21eb274f3a32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-eau fraîche coiffante 200 ml?8552bd95-470b-480a-8f8f-21eb274f3a32 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biolane Expert Eau fraiche coiffante est une eau coiffante pour bébé dès la naissance.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010110206</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ca91ebb3ffb225ac39faaf9c2001c23acfde67febf3b368f77d0d013281bab0 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Eau Nettoyante Bio 500 ml ]]></title>
<g:id>a81dc384-c02c-458d-80fc-b90211cc4a4d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-eau nettoyante bio 500 ml?a81dc384-c02c-458d-80fc-b90211cc4a4d ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifiée biologique, l'eau nettoyante nettoie en douceur le visage, le corps et l'épiderme fessier de votre bébé, tout en préservant l'épiderme.<br><br>Protéger les bébés, en préservant la nature :<br>- Un flacon d'origine végétale<br>- Une fabrication sur notre site vendéen<br>- Une formule à 99% d'origine naturelle"</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010059840</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e78f38c6210fd3b6b1271fe2503ddf0e4a319502187bfaad4700031b031da0ee ]]></g:image_link>
<g:product_type><![CDATA[ EAU NETTOYANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Eau nettoyante sans rinçage 500 ml ]]></title>
<g:id>bdbe6398-bd97-4f68-83c5-c3da7d4b79c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-eau nettoyante sans rinçage 500 ml?bdbe6398-bd97-4f68-83c5-c3da7d4b79c9 ]]></link>
<g:price><![CDATA[ 620.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'eau nettoyante nettoie en douceur le visage, le corps et l'épiderme fessier de votre bébé, tout en préservant l'épiderme.<br><br>Protéger les bébés, en préservant la nature :<br>- Un flacon d'origine végétale<br>- Une fabrication sur notre site vendéen<br>- Une formule à 98% d'origine naturelle<br><br>À quoi correspondent les 2% restant ?<br>- Un système conservateur afin de garantir la sécurité de votre bébé.<br>- Un parfum sans aucune substances allergisantes pour allier douceur et plaisi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010044648</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b39a2faf66478ee5a14f15dcdc3db3d7945a1db6009e0d0182d6b7a0f5149d62 ]]></g:image_link>
<g:product_type><![CDATA[ TOILETTE ET PRODUIT LAVANT > EAU NETTOYANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Eryderm® Pâte à l'Eau 75 ml ]]></title>
<g:id>0e7d59ef-8b84-4d12-a201-614b0feb106b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-eryderm® pâte à l'eau 75 ml?0e7d59ef-8b84-4d12-a201-614b0feb106b ]]></link>
<g:price><![CDATA[ 510.00 EUR ]]></g:price>
<description><![CDATA[ <p>Préparation traditionnelle à base d'oxyde de zinc (25%), la pâte à l'eau Eryderm® soulage et répare les rougeurs et irritations légères à sévères de l'épiderme fessier de votre bébé, en créant une barrière protectrice contre les agressions extérieures. Sa formule absorbe l'excès d'humidité et favorise la régénération de l'épiderme fragilisé grâce à l'association de glycérine et panthénol.<br><br>Protéger les bébés, en préservant la nature :<br>- Un emballage comportant au moins 17% de matière ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010045089</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d2ee40f180841f64e96b05e1a1b9931fc8ccf334a87ea10af384fbe90e6f490 ]]></g:image_link>
<g:product_type><![CDATA[ CHANGE > CREME CHANGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Gel Lavant Corps et Cheveux 500 ml ]]></title>
<g:id>3e65a0a5-50ac-4a97-8a2c-94558f7bcfa4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-gel lavant corps et cheveux 500 ml?3e65a0a5-50ac-4a97-8a2c-94558f7bcfa4 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le gel lavant corps et cheveux nettoie en douceur tout en préservant la peau et le cuir chevelu de votre bébé.<br><br>Protéger les bébés, en préservant la nature :<br>- Un flacon d'origine végétale<br>- Une fabrication sur notre site vendéen<br>- Une formule à 97% d'origine naturelle<br><br>À quoi correspondent les 3% restants ?<br>- Un système conservateur afin de garantir la sécurité de votre bébé.<br>- Un parfum sans aucune substances allergisantes pour allier douceur et plaisir.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010044655</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/92399123c09f9b3e693ba65b29430e4230990a796ca19d52ef81c4587e423575 ]]></g:image_link>
<g:product_type><![CDATA[ GEL LAVANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Gel Lavant Corps et Cheveux Bio 500 ml ]]></title>
<g:id>cb869e53-9149-4044-8b18-e91e4beb4646</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-gel lavant corps et cheveux bio 500 ml?cb869e53-9149-4044-8b18-e91e4beb4646 ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifié biologique, le gel lavant corps et cheveux nettoie en douceur tout en préservant la peau et le cuir chevelu.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010059826</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/847d4fe4e1b12fb5253fb244038819e53bb10327e8d8a2d856f1de4a8a76886d ]]></g:image_link>
<g:product_type><![CDATA[ GEL LAVANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Gel Lavant Corps et Cheveux Eco-Recharge 500 ml ]]></title>
<g:id>8298a42d-1973-4456-8003-ca561e04e67f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-gel lavant corps et cheveux eco-recharge 500 ml?8298a42d-1973-4456-8003-ca561e04e67f ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le gel lavant corps et cheveux nettoie en douceur tout en préservant la peau et le cuir chevelu de votre bébé.<br><br>Protéger les bébés en préservant la nature :<br>- Un emballage avec 82% de plastique en moins<br>- Une fabrication française<br>- Une formule certifiée biologique à 97% d'origine naturelle<br><br>À quoi correspondent les 3% restants ?<br>- Un système conservateur afin de garantir la sécurité de votre bébé.<br>- Un parfum sans aucune substances allergisantes pour allier douceur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010056962</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c69e31264e470482193416d9e43c153f35907538ba8c547b6e587e46f23bae44 ]]></g:image_link>
<g:product_type><![CDATA[ GEL LAVANT > TOILETTE ET PRODUIT LAVANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Huile Lavante Dermo-Protectrice 500 ml ]]></title>
<g:id>c2bc3abf-8c93-4f64-b21d-226e91604ca6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-huile lavante dermo-protectrice 500 ml?c2bc3abf-8c93-4f64-b21d-226e91604ca6 ]]></link>
<g:price><![CDATA[ 1140.00 EUR ]]></g:price>
<description><![CDATA[ <p>Notre huile lavante nettoie en douceur, préserve du dessèchement et protège les peaux sèches et sensibles des irritations. Testée sous contrôle médical.<br>-31% de sécheresse cutanée après 28 jours consécutifs d'utilisation<br><br>Formule très pure, composée d'un complexe oléo-lipidique aux huiles végétales :<br>- Assure un effet dermo-protecteur<br>- Apaise les sensations d'inconfort<br>- Laisse un film protecteur sur la peau<br><br>Protéger les bébés, en préservant la nature :<br>- Flacon d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010087423</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/54edb40c30be765885242754ba8f7e8371e10a37455009f95d1681e1d8226826 ]]></g:image_link>
<g:product_type><![CDATA[ HUILE LAVANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Lait Corps 300 ml ]]></title>
<g:id>a169b2bc-7f36-4ea1-9087-f7387e46c103</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-lait corps 300 ml?a169b2bc-7f36-4ea1-9087-f7387e46c103 ]]></link>
<g:price><![CDATA[ 970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait corps nourrit durablement et apaise la peau de votre bébé.<br>Une efficacité prouvée : + 62 % d'hydratation 8H après l'application.<br><br>Protéger les bébés, en préservant la nature :<br>- Un flacon d'origine végétale<br>- Une fabrication sur notre site vendéen<br>- Une formule à 98 % d'origine naturelle<br><br>À quoi correspondent les 2% restants ?<br>- Un système conservateur afin de garantir la sécurité de votre bébé.<br>- Des agents qui assurent une formule homogène à la texture  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010045119</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8acd8a23111b5dbe119eb8d3be5220413ceead245fd3f5745299fb84a9e39419 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Lingettes Pure Water 3 x 48 lingettes  ]]></title>
<g:id>a259e6f5-25dc-480d-ba80-4bc73a6de4c1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-lingettes pure water 3 x 48 lingettes ?a259e6f5-25dc-480d-ba80-4bc73a6de4c1 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les lingettes Pure Water Biolane nettoient délicatement et en un seul geste le siège, le corps et le visage de votre bébé.<br><br>Notre vocation : protéger la peau sensible de votre bébé<br>Des lingettes, avec seulement 2 ingrédients, à 99,9% d'eau purifiée, pour les peaux les plus délicates. Une formule testée cliniquement sous contrôle médical pour la plus grande sécurité des bébés.<br><br>Notre engagement : participer à un avenir durable<br>Des lingettes en fibre 100% végétales.<br>Une fab ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010079848</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a5a3be7a201d3ca5a4d11097270a078aa292c74aebfdc24e7201b2b7c31c7f9 ]]></g:image_link>
<g:product_type><![CDATA[ LINGETTES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Lingettes à l'Eau Bio 54 lingettes ]]></title>
<g:id>d647945e-e723-428a-98df-c793cd32645f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-lingettes à l'eau bio 54 lingettes?d647945e-e723-428a-98df-c793cd32645f ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifiées biologiques, les lingettes à l'eau nettoient et protègent le visage, le corps et l'épiderme fessier de votre bébé.<br><br>Protéger les bébés, en préservant la nature :<br>- Des fibres en coton biologique<br>- Une fabrication Française<br>- Une formule certifiée biologique à 99% d'origine naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010059871</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09d8091adcf767c1e2d2c2cd45aeb2b0104d8e0301a109f573653db5d539ed8a ]]></g:image_link>
<g:product_type><![CDATA[ CHANGE > LINGETTES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Liniment Oléo-Calcaire 500 ml ]]></title>
<g:id>fdfad1cb-ade9-48b8-9e36-4a43797e4851</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-liniment oléo-calcaire 500 ml?fdfad1cb-ade9-48b8-9e36-4a43797e4851 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Préparation traditionnelle à base d'huile d'olive et d'eau de chaux, le liniment oléo-calcaire nettoie et protège en un seul geste l'épiderme fessier de votre bébé.<br><br>Protéger les bébés, en préservant la nature :<br>- Un flacon d'origine végétale<br>- Une fabrication sur notre site vendéen<br>- Une formule à 99% d'origine naturelle<br><br>À quoi correspondent les 1% restants ?<br>- Un système conservateur afin de garantir la sécurité de votre bébé.<br>- Des agents qui assurent une formul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010045041</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aae4dc2219091008f00cd3fd7037d00b7b6282ba593094e1cdb4f39604998d47 ]]></g:image_link>
<g:product_type><![CDATA[ LINIMENT OLEO CALCAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Liniment Oléo-Calcaire Bio 500 ml ]]></title>
<g:id>e223b87d-73a3-4154-bcde-b165482a186e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-liniment oléo-calcaire bio 500 ml?e223b87d-73a3-4154-bcde-b165482a186e ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certifié biologique, le liniment oléo-calcaire nettoie et protège en un seul geste l'épiderme fessier de votre bébé.<br><br>Protéger les bébés, en préservant la nature :<br>- Un flacon d'origine végétale<br>- Une fabrication sur notre site vendéen<br>- Une formule à 99% d'origine naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010059833</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cd86865e87e6404ca668d0f74ba50199379bb6a651a4076563c726ae6ebe4c77 ]]></g:image_link>
<g:product_type><![CDATA[ LINIMENT OLEO CALCAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Shampooing doux 350 ml  ]]></title>
<g:id>fa62b596-1c58-48ca-800a-03457d107e57</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-shampooing doux 350 ml ?fa62b596-1c58-48ca-800a-03457d107e57 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing Biolane est spécialement conçu pour être le premier shampooing de votre bébé. Très doux, il respecte son cuir chevelu sensible.<br><br>Formulé avec du lin cultivé en France :<br>• Démêle les noeuds<br>• Facilite le coiffage après le bain<br>• Laisse les cheveux doux et brillants<br>• Testé sous contrôle dermatologique et ophtalmologique<br><br>Biolane s'engage à vos côtés :<br>• Charte de formulation sécurité bébé<br>• Fabriqué en Vendée<br>• Formulé à 97% d'origine naturelle</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010110152</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85ab73ecec00a1816bbd22006e5965a943400eb62cef2cde6406f0bbfae22678 ]]></g:image_link>
<g:product_type><![CDATA[ TOILETTE ET PRODUIT LAVANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biolane Sérum Physiologique 20 unidoses 5 ml ]]></title>
<g:id>1d2c9ee2-1cd2-47a0-9697-35f72fee3ff8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biolane-sérum physiologique 20 unidoses 5 ml?1d2c9ee2-1cd2-47a0-9697-35f72fee3ff8 ]]></link>
<g:price><![CDATA[ 230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Solution nasale et ophtalmique stérile en récipient unidose. Son embout douceur épouse parfaitement la narine de votre bébé pour nettoyer le nez en toute sécurité, sans risque de blessure.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010053039</g:gtin>
<g:brand><![CDATA[ BIOLANE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28fa1d26e483b7016442c85393c5efc90450cee1980fbe2dcfcbee0b0a81d734 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion  3 adulte 30 comprimés ]]></title>
<g:id>135bf051-a5ff-4505-b0a4-cd8f762df21f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 adulte 30 comprimés?135bf051-a5ff-4505-b0a4-cd8f762df21f ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Renforcer vos défenses, Bion 3 Adultes est la combinaison unique de 3 probiotiques, 12 vitamines, 8 oligo-éléments, dosés de manière optimale.</p>
<p class="p1">Les actions combinées de ces 3 catégories de substances permettent d'influer sur un large champ de fonctions de l'organisme et en particulier de renforcer les défenses naturelles.</p>
<p>Bion 3 Adultes aide l'organisme à mieux se défendre et contribue à maintenir un état de santé optimal.Bion 3 Adultes est destiné aux perso ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401377618190</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c414c956e9334541265cde52c240a7a4dff91aeec7fe95a0d06698781ca4f3e ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3  Defenses Arome Fruits Rouges 60 Gommes ]]></title>
<g:id>4a7e0987-1606-47ef-b612-fd0ca894aa41</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3  defenses arome fruits rouges 60 gommes?4a7e0987-1606-47ef-b612-fd0ca894aa41 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>BION 3 DEFENSE &amp; EQUILIBRE INTESTINAL 60 GOMMES</p>
<p>Complément alimentaire avec probiotiques, vitamines et zinc. </p>
<p>Soutien immunitaire : la vitamine C et le zinc contribuent au fonctionnement normal du système immunitaire.</p>
<p>Equilibre intestinal : Contient des probiotiques qui contribuent à l'équilibre de la flore intestinale et sont sélectionnés pour atteindre vivants l'intestin</p>
<p></p>
<p>L'intestin héberge 70% des cellules immunitaires du corps. Il est au coeur du pro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216273329</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b480ca54d75feafd8bf47d313cfca36d4073c475d058f58f0302d8a3840a1ce ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 Defense adultes 90 comprimés ]]></title>
<g:id>35e6d61d-195c-41eb-a619-43ca4df6308e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 defense adultes 90 comprimés?35e6d61d-195c-41eb-a619-43ca4df6308e ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bion 3 adultes Aide l'organisme à mieux se défendre et contribue à maintenir un état de santé optimal,  une combinaison unique de 3 probiotiques, 12 vitamines et 8 minéraux, dosés de manière optimale. Les actions combinées de ces 3 catégories de substances permettent d'influer sur un large champ de fonctions de l'organisme et en particulier de renforcer les défenses naturelles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401546943245</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2edfabf87a8abaffe49202b852a007c509eaa747191bbc15c3eb012f47a072e ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 Vitalité 50+ 90 Comprimés ]]></title>
<g:id>ec087102-2529-40a3-8fe7-eea101598bfb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 vitalité 50+ 90 comprimés?ec087102-2529-40a3-8fe7-eea101598bfb ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401546943184</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7901fa9d685250e709c128914c501127b6d068efd223d26538dc49fe3746de93 ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 Vitalité 90 Comprimés ]]></title>
<g:id>1ad9be95-2631-4eeb-b891-5a1bd51a78fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 vitalité 90 comprimés?1ad9be95-2631-4eeb-b891-5a1bd51a78fb ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bion 3 Energie Continue 90 Comprimés est un complément alimentaire à base de 3 ferments Tri-Bion brevetés, 11 vitamines et 3 minéraux, pour une énergie continue. Ce complément alimentaire à libération prolongée est efficace grâce à:</p>
<p>- 11 vitamines dont les vitamines B12 et C qui contribuent à un métabolisme énergétique normal,</p>
<p>- 3 minéraux dont le fer qui aide à réduire la fatigue,</p>
<p>- 3 ferments tri-bion qui atteignent la flore intestinale, grâce à un enrobage protégeant d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540897195</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b60c85e071d012c83fa46a60373d60919fccce0a4afc1ae33cc67b01e4a9021a ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 Vitalié  30 Comprimés ]]></title>
<g:id>65fec090-d5f1-43b6-9027-27edffc6deac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 vitalié  30 comprimés?65fec090-d5f1-43b6-9027-27edffc6deac ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un rythme de vie effrené ? Besoin de retrouver votre vitalité ? Vous êtes probablement à la recherche d' un complément alimentaire contre la fatigue pour aborder sereinement vos journées en procurant des micro-nutriments, notamment des vitamines et minéraux qui contribueront à la production d' énergie et au soutient de vos défenses immunitaires.</p>
<p> </p>
<p>Bion®3 Vitalité est un complément alimentaire venant soutenir vos niveaux d' énergie physique et mentale ainsi que vos défenses immun ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401599460553</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a8c3cdd4f085691ae850658d4627239afc5d558b90af3542df2314c21526dea ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 adulte 60 comprimés ]]></title>
<g:id>a3bcc936-4f1a-4b37-be6a-63c2ebf15917</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 adulte 60 comprimés?a3bcc936-4f1a-4b37-be6a-63c2ebf15917 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Renforcer vos défenses, Bion 3 Adultes est la combinaison unique de 3 probiotiques, 12 vitamines, 8 oligo-éléments, dosés de manière optimale.</p>
<p>Les actions combinées de ces 3 catégories de substances permettent d'influer sur un large champ de fonctions de l'organisme et en particulier de renforcer les défenses naturelles.</p>
<p>Bion 3 Adultes aide l'organisme à mieux se défendre et contribue à maintenir un état de santé optimal.Bion 3 Adultes est destiné aux personnes actives, désireus ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401543362636</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a080447713d782cfb6d93eaa2ff36c3d1c245c5566db1fc5e652c7be485920c5 ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 junior goût framboise 30 comprimés ]]></title>
<g:id>fcb5bbc4-05c3-4bc3-9614-56b357119fc4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 junior goût framboise 30 comprimés?fcb5bbc4-05c3-4bc3-9614-56b357119fc4 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bion 3 Juniors est un complexe multivitaminé destiné aux enfants de 4 à 12 ans pour retrouver la forme et renforcer les défenses naturelles de l’organisme notamment en cas de période de fatigue (fin de période scolaire, activités multiples, changements de saison…) ou de nez et gorge sensibles et exposés.</p>
<p>Sa formule à croquer au bon gout framboise est appréciée des enfants.</p>
<p>Grâce à sa formule riche en probiotiques, Bion 3 Juniors à la capacité de :</p>
<p>- Moduler la microflore  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401546294040</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c68db46276eb679e06631a5f945bdcf3006dccb07ff426d70058b3ec7c3caa6 ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 junior goût framboise 60 comprimés ]]></title>
<g:id>833bcb7f-873e-4747-8050-894089561b0e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 junior goût framboise 60 comprimés?833bcb7f-873e-4747-8050-894089561b0e ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bion 3 Juniors est un complexe multivitaminé destiné aux enfants de 4 à 12 ans pour retrouver la forme et renforcer les défenses naturelles de l’organisme notamment en cas de période de fatigue (fin de période scolaire, activités multiples, changements de saison…) ou de nez et gorge sensibles et exposés.</p>
<p>Sa formule à croquer au bon gout framboise est appréciée des enfants.</p>
<p>Grâce à sa formule riche en probiotiques, Bion 3 Juniors à la capacité de :</p>
<p>- Moduler la microflore  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548306611</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1a48640e4555c42993fa2e51b3b36e9d3a61a0a643734c0310870ed4f1b0cde ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 senior 30 comprimés ]]></title>
<g:id>8d14ed42-f053-4e4d-9e71-5f5afcc0c858</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 senior 30 comprimés?8d14ed42-f053-4e4d-9e71-5f5afcc0c858 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p class="p1">Après 50 ans, il est essentiel de préserver son bien-être et sa vitalité pour profiter au maximum de cette nouvelle phase d’épanouissement.</p>
<p class="p1">Bion 3 Seniors est destiné aux personnes qui souhaitent retrouver leur forme et renforcer leurs défenses naturelles, notamment en cas de baisse de tonus, et aux changements de saison.</p>
<p class="p1">Bion 3 Seniors renforce l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401377750753</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7999df9563f866834c2d1dc21c6ceaf15e78f9d26430369460fdec234cfa8f60 ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion 3 vitalité 50+ 60 comprimés ]]></title>
<g:id>4b956ce8-d1c7-4402-97b9-4b767b28796f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-3 vitalité 50+ 60 comprimés?4b956ce8-d1c7-4402-97b9-4b767b28796f ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Après 50 ans, il est essentiel de préserver son bien-être et sa vitalité pour profiter au maximum de cette nouvelle phase d’épanouissement.</p>
<p class="p1">Bion 3 Seniors est destiné aux personnes qui souhaitent retrouver leur forme et renforcer leurs défenses naturelles, notamment en cas de baisse de tonus, et aux changements de saison.</p>
<p class="p1">Bion 3 Seniors renforce le métabolisme et la santé des hommes et des femmes dépassant la cinquantaine. Il s’agit d’un produit  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401543524867</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/017657306bd2383dc52595e07c6bd7b8b0fbbe52b075b7a84856641e40416313 ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion Energie Arôme Orange 60 Gommes ]]></title>
<g:id>c594dfa5-0d87-478f-8421-3728475e0d82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion-energie arôme orange 60 gommes?c594dfa5-0d87-478f-8421-3728475e0d82 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bion3 Energie gommes</span> contient des probiotiques, 8 vitamines et du magnésium pour donner de <span>l'énergie</span> physique et mentale, offrir un soutien immunitaire et rééquilibrer la <span>flore intestinale</span>.</p>
<p>Les <span>vitamines B12, C et le magnésium</span> contribuent à un métabolisme énergétique normal et à la <span>réduction de la fatigue</span>. Tandis que les vitamines C et D oeuvrent au fonctionnement normal du système immunitaire. une association équilibrée  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216273428</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3be5bf1f244f84d2f6a79c9cd83cca768e2f56441c7bd7e592b3e45576408090 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bion3 Vitalié 60 Comprimés ]]></title>
<g:id>b9f8f07c-9570-4ca7-980c-4f8aa6ae380a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bion3-vitalié 60 comprimés?b9f8f07c-9570-4ca7-980c-4f8aa6ae380a ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>BION 3 VITALITÉ 60 COMPRIMES </span> à base de 3 souches microbiotiques, de vitamines, de minéraux et d'un extrait de ginseng. </p>
<p>3 souches microbiotiques</p>
<p>10 vitamines</p>
<p>4 minéraux</p>
<p>Vitamines B12, C &amp; D, avec ginseng. </p>
<p>Energie pour la journée¹ et soutien du système immunitaire².</p>
<p>Diffusion prolongée des vitamines B1, B2, B3, B5, B6 et C pendant 6 heures. </p>
<p>10 vitamines dont¹ la vitamine B12 qui contribue au métabolisme énergétique normal et  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401581350015</g:gtin>
<g:brand><![CDATA[ MERCK medic familiale ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ea2924ef45e565b609c0d7d98b183ce086f89c31235b7b3d9aeddd514e45db9 ]]></g:image_link>
<g:product_type><![CDATA[ FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosecure Déodorant Pierre d'Alun Aloe Vera Bergamote 50 ml ]]></title>
<g:id>f41d2faf-522d-4f9e-90cb-d93f30617c7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosecure-déodorant pierre d'alun aloe vera bergamote 50 ml?f41d2faf-522d-4f9e-90cb-d93f30617c7f ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Déodorant Pierre d'Alun Biosecure des laboratoires Nutrisanté est sans alcool, sans sels d'aluminium, sans paraben et son parfum est sans allergène.</p>
<p>Il assure une agréable sensation de fraîcheur et de dynamisme tout au long de la journée.</p>
<p>Ses actifs aident à respecter l'équilibre de la peau.</p>
<p>De texture fine, le Déodorant Sans Sels d'Aluminium Biosecure des laboratoires Nutrisanté pénètre rapidement et ne laisse aucune trace blanche sur les vêtements.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515450013595</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c41094de6639b0a263080efa8949ac23ad1aad2e7de4c4f54b1c5067014a1d30 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosecure Déodorant Sans Sels d'Aluminium Roll-on 50ml ]]></title>
<g:id>d1f7cbe6-e6c3-4ea1-ac25-82c9902f1a82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosecure-déodorant sans sels d'aluminium roll-on 50ml?d1f7cbe6-e6c3-4ea1-ac25-82c9902f1a82 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Déodorant Sans Sels d'Aluminium Biosecure des laboratoires Nutrisanté est sans alcool, sans sels d'aluminium, sans paraben et son parfum est sans allergène.</p>
<p>Il assure une agréable sensation de fraîcheur et de dynamisme tout au long de la journée.</p>
<p>Ses actifs aident à respecter l'équilibre de la peau.</p>
<p>De texture fine, le Déodorant Sans Sels d'Aluminium Biosecure des laboratoires Nutrisanté pénètre rapidement et ne laisse aucune trace blanche sur les vêtements.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515451080299</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7ef622da21319ee62b346c9d080cc37cc8fc939c8fa8fbabeadd37628c923ed7 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosecure Gel Corps et Cheveux 730 ml ]]></title>
<g:id>2afedf5c-fb8a-40e6-85b1-eed228a06f46</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosecure-gel corps et cheveux 730 ml?2afedf5c-fb8a-40e6-85b1-eed228a06f46 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biosecure Gel Corps et Cheveux 730 ml est un gel sans savon certifié biologique, qui permet de nettoyer la peau, tout en la respectant, et les cheveux.</p>
<p>Ce gel au pH physiologique lave en douceur, apporte tonicité et fraîcheur, tout au long de la journée. Le lait de coton nourrit et adoucit la peau, le parfum naturel oriental apporte un véritable plaisir sous la douche.</p>
<p>Non testé sur les animaux. Testé sous contrôle dermatologique.</p>
<p>98% du total des ingrédients sont d'origi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515450035177</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e0d7be1dbf9fb7b9ef2e866571ccdbc3dc1df58b2a70c7d8fbfa9dc39cb26d66 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosecure Gel Douche sans Savon 730 ml ]]></title>
<g:id>0235568a-dd18-482b-8f66-a3afe594d0c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosecure-gel douche sans savon 730 ml?0235568a-dd18-482b-8f66-a3afe594d0c9 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gel Douche Sans Savon Biosecure des laboratoires Nutrisanté met la nature au service de votre peau.</p>
<p>Le Gel Douche Sans Savon Biosecure est sans paraben, sans huiles essentielles, et son parfum est sans allergènes afin d'assurer le respect de votre peau.</p>
<p>L'aloé verra contenu dans le Gel Douche Sans Savon Biosecure hydrate votre système cutané en douceur et en laissant une odeur fraiche et délicate.</p>
<p>Grâce à un usage quotidien, le Gel Douche Sans Savon Biosecure vous perm ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515451118015</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/759d7f8c59a9fe021c6e132915dff98427ccd589f9d1461eb15b1572945a7347 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosecure Shampoing Cheveux Normaux 730 ml ]]></title>
<g:id>ced18fcf-6300-4697-9c14-350dd7fa1b3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosecure-shampoing cheveux normaux 730 ml?ced18fcf-6300-4697-9c14-350dd7fa1b3c ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing pour cheveux normaux Bio Secure à l'aloé vera, grâce à sa formule concentrée, contribue à respecter les cheveux et cuirs chevelus, même les plus sensibles.</p>
<p>Il convient à toute la famille et permet une utilisation fréquente, voir quotidienne.</p>
<p>Le shampooing pour cheveux normaux Bio Secure a une formule concentrée pour respecter les cheveux et les cuirs chevelus de toute la famille pour une utilisation fréquente, même quotidienne.</p>
<p>Son ph est proche du pH physio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515451118107</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a1145142d0d5afbd954d47e8662e6863e7a528291c694cc691bee8c7e5c0d14 ]]></g:image_link>
<g:product_type><![CDATA[ SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosince Gel douche relaxant bio Verveine Exotique 1L ]]></title>
<g:id>f81ab4a7-d901-4c9e-89af-e5f71ab3584a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosince-gel douche relaxant bio verveine exotique 1l?f81ab4a7-d901-4c9e-89af-e5f71ab3584a ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Il est composé à 100 % d’ingrédients d’origine naturelle et 15 % du total des ingrédients sont issus de l’agriculture biologique.*</p>
<p>Sa base moussante d'origine naturelle est sans colorants et parfumé aux huiles essentielles.</p>
<p>Ce gel à la mousse délicate, est un soin quotidien pour le bain et la douche, spécialement élaboré pour nettoyer votre peau en douceur. </p>
<p>Les produits de cette gamme du Laboratoire Gravier sont naturellement doux et efficaces.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3489940530025</g:gtin>
<g:brand><![CDATA[ LABORATOIRE GRAVIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c58ec91a480025b32a1d9437413594f161dcad98600448c9f92d326c91230d84 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biostime 1 Lait 0 - 6 mois 800g ]]></title>
<g:id>82dd895b-9d21-49e3-bee2-97fbcdca2256</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biostime-1 lait 0 - 6 mois 800g?82dd895b-9d21-49e3-bee2-97fbcdca2256 ]]></link>
<g:price><![CDATA[ 2160.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'organisation mondiale de la santé (oms) recommande l'allaitement exclusif au sein les six premiers mois et une diversification de l'alimentation avec poursuite de l'allaitement jusqu'à deux ans ou plus.<br />Inspirés par plus de 10 ans de recherche sur le lait maternel, aliment idéal pour le nourrisson, les Laboratoires biostime ont développé biostime sn-2 bio plus, une gamme de laits infantiles qui allie les bienfaits de la nature à l’innovation scientifique.<br />Développé par nos experts ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763535692</g:gtin>
<g:brand><![CDATA[ BIOSTIME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9a81175867e0f8b7942a7ca88ea96e2bb171c004e3498a7823050ea6fbbf97f9 ]]></g:image_link>
<g:product_type><![CDATA[ LAIT DE CROISSANCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biostime 2 Lait 6 -12 mois 800g ]]></title>
<g:id>cd8d0882-60e7-420e-bdc1-03d50148f039</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biostime-2 lait 6 -12 mois 800g?cd8d0882-60e7-420e-bdc1-03d50148f039 ]]></link>
<g:price><![CDATA[ 2299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour les bébés bien portants, Biostime n°1 des laits infantiles bio en pharmacie a développé Biostime SN-2 BIO PLUS™ 2ème âge, une formule qui répond aux besoins nutritionnels spécifiques* de bébé en lui apportant notamment :<br />• De la crème de lait <br />• Des ferments lactiques bifidus et des fibres FOS(1)<br />• Du DHA*(2) (Omega 3), qui contribue au développement de la vision de l'enfant entre 6 et 12 mois.<br />• Des Vitamines A et C* qui contribuent au fonctionnement normal du systèm ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763535708</g:gtin>
<g:brand><![CDATA[ BIOSTIME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/00d4567fad8863c04815f2bd1c0e5611f57698042a5bf6f251d5853d384c60aa ]]></g:image_link>
<g:product_type><![CDATA[ LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biostime 3 Lait 10 - 36 mois 800g ]]></title>
<g:id>fb0e5dfd-c568-4cb1-ab1b-d993b901a166</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biostime-3 lait 10 - 36 mois 800g?fb0e5dfd-c568-4cb1-ab1b-d993b901a166 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lait infantile Biostime SN-2 Bio Plus 3ᵉ̀ᵐᵉ âge, au lait de vache bio, collecté en circuit court en Normandie et sans huile de palme. Répond aux besoins nutritionnels spécifiques des nourrissons et des enfants en bas âge à partir de 10mois², convient en relais de l'allaitement maternel.</p><p>Biostime, n°1 des laits infantiles bio en pharmacie¹, a développé Biostime SN-2 BIO PLUS 3ᵉ̀ᵐᵉ âge, une formule alliant la puissance de la nature et de la science et qui répond aux besoins nutritionnels  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763535715</g:gtin>
<g:brand><![CDATA[ BIOSTIME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/540767b62504f3378d674e19e65021a9f803bfe7bd7ca2d90b8eff03e02f09c0 ]]></g:image_link>
<g:product_type><![CDATA[ LAIT TROISIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biostime AR 1 Lait 0 - 6 mois 800g ]]></title>
<g:id>726c3f31-76e6-41b9-b6fe-c63b1998bd5a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biostime-ar 1 lait 0 - 6 mois 800g?726c3f31-76e6-41b9-b6fe-c63b1998bd5a ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait SN-2 Bio Biostime AR 0-6 mois est conçu pour améliorer le confort des bébés qui souffrent de régurgitations persistantes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763535722</g:gtin>
<g:brand><![CDATA[ BIOSTIME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2788b9110f0c7456089b9d1af5d64bd752a9f4c67f267276bb3ed27e122eda26 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biostime AR 2 Lait 6 - 12 mois 800 g ]]></title>
<g:id>e725af32-d7dd-4d5f-8718-f2a06f6bd623</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biostime-ar 2 lait 6 - 12 mois 800 g?e725af32-d7dd-4d5f-8718-f2a06f6bd623 ]]></link>
<g:price><![CDATA[ 2475.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biostime Lait AR 2 boite de 800g convient pour l'alimentation des nourrissons de plus de 6 mois souffrant de régurgitations persistantes, dans le cadre d'une alimentation diversifiée, conformément à la réglementation.<br />Ce lait infantile contribue à la réduction de la fréquence et de l’importance du reflux gastro-oesophagien. <br />Le lait utilisé dans cette formule est 100% normand.<br />Formule anti-régurgitation épaissie à la caroube. Sans Huile de Palme.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763507392</g:gtin>
<g:brand><![CDATA[ BIOSTIME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f17ee77d839be94a7efd0d99c19cb5bb2465c9fb385483e31ff034eccec7f80 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biosynex Exacto autotest HIV ]]></title>
<g:id>09137a86-ef66-401b-b140-95bf601fe76f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biosynex-exacto autotest hiv?09137a86-ef66-401b-b140-95bf601fe76f ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Test Exacto VIH est un autotest de dépistage de l’infection par le VIH (VIH 1 ou VIH 2), virus responsable du SIDA (syndrome de l’immunodéficience acquise). Il détecte des anticorps dirigés contre les virus du VIH1 et VIH2 et peut être réalisé chez soi, en toute intimité. Simple à réaliser, il ne nécessite qu’une microgoutte de sang et permet l’obtention d’un résultat fiable à 99,9 % en 10 minutes pour dépister une infection au VIH, après une prise de risque de plus de 3 mois. Ce pro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532678551647</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fed36d2e69d8d0c000ba192a457439c9ac6e426bfde05b285f5ff86ed67e5948 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Anti-Transpirant Pure Natural Protect Roll-On 75 ml ]]></title>
<g:id>38f7b518-2910-49b1-88fa-3b15086c2086</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-anti-transpirant pure natural protect roll-on 75 ml?38f7b518-2910-49b1-88fa-3b15086c2086 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Biotherm invente DEO PURE NATURAL PROTECT, son premier déodorant certifié Ecocert et Cosmébio.</span><br /><span>Sa formule inédite, composée à 100% de matières premières d'origine naturelle, contient des actifs déodorants qui limitent le développement bactérien responsable des odeurs durant 24 heures*. Riche en aloe vera, il apaise et hydrate la peau.</span><br /><span><br /></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540496954</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aa83d3b1130524cf716e552d6648e8e771e6c1596ed2f5835c47001db65cc0d4 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aqua Bounce Super Concentrate 50 ml ]]></title>
<g:id>800c98ff-91f4-4cd5-a055-20f879f04d1e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aqua bounce super concentrate 50 ml?800c98ff-91f4-4cd5-a055-20f879f04d1e ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aqua Bounce Super Concentrate 50 ml est un véritable concentré d'hydratation et de densité.</p>
<p>Ce gel hydratant est formulé à base de Concentré de Plancton de Vie, l'ingrédient unique de Biotherm. La formule est enrichie en Acide Hyaluronique qui agit sur le manque de rebond et booste l'énergie cellulaire pour une peau douce et souple.</p>
<p>Sa texture de gel fluide pénètre instantanément dans la peau, il améliore le rebond et la souplesse de votre peau pour une sensation de lif ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272537439</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fcf4f2b2a14339ce3da727771d83d55cab1d342f8d0f86e1abbbe82fbae4765c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aqua Gelée Auto Bronzante Visage 50ml  ]]></title>
<g:id>40c727c1-b170-4daa-a4b2-575e23748be1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aqua gelée auto bronzante visage 50ml ?40c727c1-b170-4daa-a4b2-575e23748be1 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p class="c-product-main__subtitle">Découvrez le nouveau Aqua-Gelée Autobronzant : un sérum auto-bronzant avec une formule hydratante</p>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270201943</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f6dd4e28fb88c4dcf6b4528e2092faa7698b8cf52e9e0e755a1992a6abcd0b69 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aqua Glow Super Concentrate 50 ml ]]></title>
<g:id>a2861fc9-29f3-4aff-a8be-c49c998d1d7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aqua glow super concentrate 50 ml?a2861fc9-29f3-4aff-a8be-c49c998d1d7f ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm aqua glow super concentrate gel crème et hydratation + eclat, personnalisez votre hydratation en adoptant votre nouvelle équation super peau enrichie en vitamine c.</p>
<p><br />Véritable concentré d'hydratation et d'éclat, le gel hydratant aqua glow redonne à la peau son éclat naturel : il la réhydrate immédiatement et aide à clarifier le teint.</p>
<p>Concentré en plancton de vie; l'ingrédient unique de biotherm, la formule est enrichie en vitamine c qui améliore l'éclat de la peau ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272537385</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b8c331985acbb4dab2b3dac372bb8f986c4a4e8a37cd5df203c4e01cf541caaf ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aquasource Aura Concentrate Sérum Régénérant Intense 50ml ]]></title>
<g:id>6380aea5-3857-4db6-bf5a-38e2c2393e9d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aquasource aura concentrate sérum régénérant intense 50ml?6380aea5-3857-4db6-bf5a-38e2c2393e9d ]]></link>
<g:price><![CDATA[ 4890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aquasource Aura Concentrate Sérum Régénérant Intense Hydratation et Éclat 50 ml est un sérum adapté aux peaux sensibles qui hydrate et apporte éclat à la peau.</p>
<p>Ce sérum est le premier sérum liquide qui active le pouvoir de millions de micro-gouttelettes hydratantes.</p>
<p>Sa double texture exclusive fusionne instantanément avec votre peau pour une absorption rapide et une radiance retrouvée.</p>
<p>Dès la première application, votre peau est visiblement plus lumineuse et est  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272023710</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d132c899e22a2c440dc90cc4d056393e27d10a2abd38e946d6b3109f36fcc3e2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aquasource BB Cream Hydratant SPF15 30 ml : Clair à Médium ]]></title>
<g:id>92d71375-2e4d-4b12-81c3-7d7946456331</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aquasource bb cream hydratant spf15 30 ml : clair à médium?92d71375-2e4d-4b12-81c3-7d7946456331 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aquasource BB Cream Hydratant Embellisseur Instantané SPF 15 30 ml à la formule enriche en plancton thermal pur, acide hyaluronique et pigments minéraux protège et magnifie la peau en un seul geste, en effet la BB Cream :<br /><br />- hydrate en profondeur,<br />- protège grâce à son SPF 15,<br />- corrige et lisse,<br />- unifie le teint,<br />- illumine et sublime le teint.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540853764</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a4b5b5a5190d8d401ad2e0d78b0e4ee66b13d331de0104bfde79505e10f1f3ed ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aquasource BB Cream Hydratant SPF15 30 ml Medium à Doré ]]></title>
<g:id>fa0f0ef0-1a5a-4fe4-a13c-dda8e7085516</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aquasource bb cream hydratant spf15 30 ml medium à doré?fa0f0ef0-1a5a-4fe4-a13c-dda8e7085516 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aquasource BB Cream Hydratant Embellisseur Instantané SPF15 30 ml à la formule enriche en plancton thermal pur, acide hyaluronique et pigments minéraux protège et magnifie la peau en un seul geste, en effet la BB Cream :</p>
<p>- hydrate en profondeur,</p>
<p>- protège grâce à son SPF15,</p>
<p>- corrige et lisse,</p>
<p>- unifie le teint,</p>
<p>- illumine et sublime le teint.</p>
<p>La peau est fraîche, naturelle, le teint est parfaitement sublimé.</p>
<p>Sans paraben.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540854600</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad350b2bec90844334c492391bf9ecda6677fb7502997271ba752606532c2582 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aquasource Cica Nutri Crème 50 ml ]]></title>
<g:id>5daaf79c-fe8d-44c5-9ded-7af09e90e667</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aquasource cica nutri crème 50 ml?5daaf79c-fe8d-44c5-9ded-7af09e90e667 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aquasource Cica Nutri Crème 50 ml est une crème qui recharge les réserves naturelles en eau de la peau pour 48 heures d'hydratation intense régénérante.<br />Elle contient 2 ingrédients clés :</p>
<ul><li>de la Centella asiatica pour une peau apaisée et une réparation de la fonction barrière de la peau ;</li>
<li>des extraits probiotiques de Plancton de Vie™ : ingrédient d'origine naturelle qui contribue à régénérer et à fortifier la peau.</li>
</ul><p>Ainsi, la peau sèche est apaisé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273393546</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d2c17fb330f0bb87857ae5ec6274e5d38eed69d355fa9997f77bb1dd60926d6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aquasource Crème Hydratation à Diffusion Continue 48H 50 ml ]]></title>
<g:id>b283575e-c292-4dda-b76f-2ab41c23acf8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aquasource crème hydratation à diffusion continue 48h 50 ml?b283575e-c292-4dda-b76f-2ab41c23acf8 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aquasource Crème Hydratation à Diffusion Continue 48H Peau Normale Mixte 50 ml est une crème légère qui vous offre une hydratation en continue durant 48h, et est adaptée aux peaux normales à mixtes.<br /><br />Ce soin contient une association d'eau cellulaire de plancton de vie riche de 35 nutriments vitaux (vitamines, minéraux, acides aminés, etc.) et de Mannose, un nouvel hydratant breveté capable d'agir dans les couches profondes de l'épiderme ce qui permet une efficacité optimale ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270366215</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/889bb71baba42fe78b7294ca0b4216852890877b7c8171740d21f0b4f93c09fe ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Aquasource Total Eye Revitalizer Soin Yeux Effet Froid 15 ml ]]></title>
<g:id>a7e7459b-7028-4305-888b-ba4e05b27f82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-aquasource total eye revitalizer soin yeux effet froid 15 ml?a7e7459b-7028-4305-888b-ba4e05b27f82 ]]></link>
<g:price><![CDATA[ 2740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Aquasource Total Eye Revitalizer Soin Yeux Effet Froid 15 ml est un soin pour le contour des yeux à effet froid qui agit au niveau des poches, cernes et ridules de déshydratation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270129681</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f491ce328398a6af5b85af4d372777b73626bc8fec81bb56d1f21ce635e3e10 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biocils Soin Démaquillant Yeux Effet Anti-Chute 100 ml ]]></title>
<g:id>ae063f41-81d8-4fc8-a2a0-54bc62eff3b0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biocils soin démaquillant yeux effet anti-chute 100 ml?ae063f41-81d8-4fc8-a2a0-54bc62eff3b0 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biocils soin démaquillant yeux effet anti-chute démaquille les yeux en douceur, en éliminant le maquillage même waterproof et les impuretés.<br />Grâce à son effet anti-chute, il limite la chute des cils liée au démaquillage, améliorant la qualité et la beauté des cils.<br />Il est efficace grâce à son complexe associant madecassocide, l-arginine et acide citrique :</p>
<p><br />- Il protège et renforce la qualité des cils,<br />- Il limite leur chute pendant le démaquillage,<br />- Il embell ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271260437</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b9991e1a79dd8914abc9c831596b866ec138705314b3d4f3f8cc086953233ab4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biocils Waterproof Démaquillant Yeux 100 ml ]]></title>
<g:id>f10fd8a1-b1f5-4824-ad59-4f6b151b14a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biocils waterproof démaquillant yeux 100 ml?f10fd8a1-b1f5-4824-ad59-4f6b151b14a6 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <p>La solution biphasée biotherm biocils waterproof démaquillant express pour les yeux à la formule ultra-fraîche, dissout en un seul geste le maquillage même<br />Waterproof, sans effet gras.<br />Il est efficace grâce à :</p>
<p><br />- La phase huileuse qui facilite le retrait des pigments et retire les mascaras les plus résistants,<br />- La phase aqueuse comprenant un agent nettoyant doux non ionique qui parfait le démaquillage.<br />La peau est propre, nette, et préparée au soin suivant.<b ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271260420</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8ad889629c5dfb4c7da2341bd72c6ae10441cc3ff074d96ce3fc4e546691fd62 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biomains Soin Jeunesse des Mains 100 ml ]]></title>
<g:id>6b877d26-2503-4f73-a136-222e661de4bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biomains soin jeunesse des mains 100 ml?6b877d26-2503-4f73-a136-222e661de4bb ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Biomains Soin Jeunesse des Mains 100 ml est un soin anti-desséchant pour les mains qui fortifie les ongles.<br /><br />Anti-desséchant, il restaure le film protecteur naturel de la peau. Grâce à son voile satinant aux extraits d'algues, les mains restent souples, lisses et douces toute la journée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729181142</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/974f19ef823cb25fd89587e8ca3da8ae689cd4e5dc63e5f89a700ef308c31db3 ]]></g:image_link>
<g:product_type><![CDATA[ CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Lait Démaquillant & Adoucissant Peau Sèche 400 ml ]]></title>
<g:id>37b1c0e5-ebdf-4d02-87c2-e9d4e372e956</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource lait démaquillant & adoucissant peau sèche 400 ml?37b1c0e5-ebdf-4d02-87c2-e9d4e372e956 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ayant une texture douce et onctueuse, le lait démaquillant peaux sèches biosource de biotherm nettoie les peaux sèches en toute délicatesse.</p>
<p>A rincer à l'eau, sa formule contient de l’allantoïne qui adoucit et apaise l’épiderme asséché.</p>
<p>Après son application, les traces de maquillage sont éliminées et la peau est apaisée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271256119</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cba8cee1a507dd6eabf90b5044560bc74213b082ed84107f380ddd69ccbe970a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Lait Démaquillant & Purifiant Peau Normale à Mixte 400 ml ]]></title>
<g:id>b10bbf80-3231-4baa-98a6-05cef8234207</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource lait démaquillant & purifiant peau normale à mixte 400 ml?b10bbf80-3231-4baa-98a6-05cef8234207 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biosource lait démaquillant &amp; purifiant à la texture veloutée permet un démaquillage haute précision des peaux normales et mixtes.</p>
<p><br />Ce lait démaquillant est formulé avec un extrait de l saccharina.<br />La peau est propre, débarrassée de toutes traces de maquillage et de toutes ses impuretés.<br />La peau est purifiée et nette, prête à recevoir le soin suivant.<br />Sans paraben. Convient aux peaux sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271256102</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8be5d6cdea880a1e72514373b8b5e99f4fa57c1ec8b0fd17ebd998a88f83dd34 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Lotion Adoucissante & Hydratante 200 ml ]]></title>
<g:id>0b8cfe75-c7eb-414d-8ff9-467c63b207e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource lotion adoucissante & hydratante 200 ml?0b8cfe75-c7eb-414d-8ff9-467c63b207e1 ]]></link>
<g:price><![CDATA[ 1495.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Lotion Adoucissante et Hydratante 24h Anti-Pollution de la gamme Biosource de Biotherm est un soin qui parfait le nettoyage, élimine les résidus de maquillage et de lait</p>
<p>et neutralise l'effet calcaire de l'eau, avec une formule à base de Mannose, Plancton de vie™ et Aquatoril pour hydrater la peau.</p>
<p>Enrichie en oligo-éléments et sels minéraux essentiels, ce soin clarifiant parfait le démaquillage et réveille l'éclat de la peau, tout en procurant une sensation de fraîcheur et</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271256164</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f1996b993fca30933c6b0e61456c04039575e15afb0b63843cd5c049613fa03b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Lotion Adoucissante & Hydratante 400 ml ]]></title>
<g:id>22e8e96f-f21e-4e25-80b4-f23aa0ba62fc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource lotion adoucissante & hydratante 400 ml?22e8e96f-f21e-4e25-80b4-f23aa0ba62fc ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une lotion rafraîchissante qui élimine les traces résiduelles de lait et parfait ainsi le nettoyage - démaquillage.</p>
<p>Plus qu'une simple lotion, c'est une 'eau active' qui resserre les pores et réveille l'éclat de la peau.</p>
<p>Elle tonifie et laisse sur la peau une sensation de propreté et de fraîcheur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271256096</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9bfc200f041d15b76e3a7ef783ef51b4889f9cfb5ad2414db9482e342f91b0b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Lotion Tonifiante & Hydratante 200 ml ]]></title>
<g:id>fbcf1333-db1e-46a2-baf4-c29ca2567c4e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource lotion tonifiante & hydratante 200 ml?fbcf1333-db1e-46a2-baf4-c29ca2567c4e ]]></link>
<g:price><![CDATA[ 1495.00 EUR ]]></g:price>
<description><![CDATA[ <h1 id="type_info_prio_12_1"><span>Biotherm Biosource Lotion Tonifiante &amp; Hydratante 200 ml est une lotion qui prépare la peau pour les soins. Elle est particulièrement formulée pour les peaux normales à mixtes.</span><br /><span>Les impuretés sont éliminées et la peau libérée de la pollution. Cette "eau active" resserre les pores et réveille l'éclat de la peau.</span><br /><span>Elle tonifie et laisse sur la peau une sensation de propreté et de fraîcheur.</span></h1> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271256157</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/007f038abed19d01eacbd2cdf3b4e7cc28f317335bb61585fbaa21562900d782 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Lotion Tonifiante & Hydratante 400 ml ]]></title>
<g:id>1b00b819-ab8e-4fcf-9610-db72546eb56b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource lotion tonifiante & hydratante 400 ml?1b00b819-ab8e-4fcf-9610-db72546eb56b ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Biosource Lotion Tonifiante &amp; Hydratante 400 ml est une lotion qui prépare la peau pour les soins. Elle est particulièrement formulée pour les peaux normales à mixtes.<br />Les impuretés sont éliminées et la peau libérée de la pollution. Cette "eau active" resserre les pores et réveille l'éclat de la peau.<br />Elle tonifie et laisse sur la peau une sensation de propreté et de fraîcheur.</p>
<p>Flacon en plastique 100% recyclé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271256089</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f6f03aa9678c334565a1698cdb0189c02f4ccd05a9023cb359d887f5cf1cba6f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Nettoyant Moussant Adoucissant 150 ml ]]></title>
<g:id>3bcd4c34-4054-42a0-aab4-45fb6426459e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource nettoyant moussant adoucissant 150 ml?3bcd4c34-4054-42a0-aab4-45fb6426459e ]]></link>
<g:price><![CDATA[ 1870.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
<div id="tabs-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom"><span>Biotherm Biosource Nettoyant Moussant Adoucissant 150 ml est un gel qui nettoie et libère la peau de la pollution sans la dessécher.</span><br /><span>Immédiatement, la peau est nette et confortable. Dès 7 jours, elle est plus éclatante.</span></div>
</div>
<div class="my_tag_info_area"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540526415</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a59b12077186e5c9502b7db2dbc7a405b6a644a2648570a78eb4f12e04b1551 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Nettoyant Moussant Purifiant 150 ml ]]></title>
<g:id>85e8bc6a-585d-48a9-a7c9-34e1cccef5df</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource nettoyant moussant purifiant 150 ml?85e8bc6a-585d-48a9-a7c9-34e1cccef5df ]]></link>
<g:price><![CDATA[ 1870.00 EUR ]]></g:price>
<description><![CDATA[ <p><br /><span>Biotherm Biosource Nettoyant Moussant Purifiant 150 ml est un gel qui nettoie et libère la peau de la pollution sans la dessécher.</span><br /><span>Immédiatement, la peau est nette et fraîche. Dès 7 jours, elle est plus éclatante.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540526712</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/97249313adfb6f0bd6ebdb4eed14b932bcd45a6169fb7ea574a0752ed7675bbd ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biosource Total Renew.Oil Huile Auto-Moussante 200 ml ]]></title>
<g:id>e722c0c3-6584-44df-9a23-8f4d5fdd739b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biosource total renew.oil huile auto-moussante 200 ml?e722c0c3-6584-44df-9a23-8f4d5fdd739b ]]></link>
<g:price><![CDATA[ 1995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Biosource Total Renewoil Huile Auto-Moussante 200 ml est un double démaquillant sous forme d'huile, dont la texture se transforme au contact de l'eau.</p>
<p>Elle permet de démaquiller et purifier toutes les peaux en éliminant les impuretés et en libérant la peau de la pollution, pour la préparer au soin suivant.</p>
<p>Ce produit combine l'efficacité démaquillante de l'huile à la pureté nettoyante d'une mousse.</p>
<p>Avec un simple auto-massage réalisé sur le visage, la peau est pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271346933</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b1f7b88ef366c7453239325cdb363afea7646763fdc81efd31f5c08428e7e8d9 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Biovergetures Corps 400ml ]]></title>
<g:id>11a5aef4-0de6-4af2-9162-7aac3f645fd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-biovergetures corps 400ml?11a5aef4-0de6-4af2-9162-7aac3f645fd7 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un gel crème non gras délicatement fragrant qui prévient les vergetures potentielles et réduit visiblement l'aspect des vergetures existantes.<br />Action préventive :<br />Améliore l'élasticité de la peau.<br />Aide la peau à résister à l'étirement causé par un gain de poids important ou une grossesse.<br />Action curative :<br />Réduit l'apparence des vergetures existantes, qu'elles soient récentes ou non.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540677735</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85e24be3c5946cf9577501421faf6bfdac9f34819b0b758c214ac91f72bc8090 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Blue Pro-retinol eye cream 15 ml ]]></title>
<g:id>6cc80eab-6009-4e3b-a977-7ffe8be2c97a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue pro-retinol eye cream 15 ml?6cc80eab-6009-4e3b-a977-7ffe8be2c97a ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez le pouvoir anti-rides du Rétinol adapté au contour sensible de l’œil. Avec un haut niveau d'efficacité dans la réduction des rides du contour de l'œil, cette crème anti-rides innovante pour le contour des yeux est à la fois douce et puissante.</span><br /><span>Double efficacité : l’association du Plancton de VieTM régénérant et du Pro-Rétinol ressurfaçant pour réduire visiblement les signes de fatigue dès la première utilisation. Dès la première semaine d’utilisation, le cont ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273869997</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69afa542b050d7e0b462e9e704192ebff2a6ae6968602876c210274bcdaa632b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Blue Therapy Accelerated Sérum 50 ml ]]></title>
<g:id>c5a8109a-2b26-47e6-a58e-6f354cb081db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy accelerated sérum 50 ml?c5a8109a-2b26-47e6-a58e-6f354cb081db ]]></link>
<g:price><![CDATA[ 6990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Blue Therapy Accelerated Sérum 50 ml est un sérum réparateur qui agit sur les signes visibles de l'âge : rides, taches, fermeté. Il est idéalement formulé pour tous les types de peaux. Ce sérum réparateur rend votre peau instantanément plus douce et plus belle grâce à sa formule concentré en extrait d'Algue de Jeunesse. Il agit efficacement sur les 3 principaux signes de l'âge qui sont les rides, les taches et le relâchement cutané. Après 4 semaines d'utilisation, les rides paraissen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270963186</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/de28bd3abfa8de2a97996199d44504a7273e6d8263a95251289133cffb484274 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Blue Therapy Blue Pro-Retinol Multi-Correct Cream Anti-Âge 50 ml ]]></title>
<g:id>e91b02b0-0375-4b00-9eaf-1e86e68f447d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy blue pro-retinol multi-correct cream anti-Âge 50 ml?e91b02b0-0375-4b00-9eaf-1e86e68f447d ]]></link>
<g:price><![CDATA[ 6190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Blue Therapy Blue Pro-Retinol Multi-Correct Cream Anti-Âge 50 ml est un soin quotidien au pro-rétinol et extraits d'algues, élaboré pour lutter contre les rides et le teint terne, qui conviendra à tous les types de peaux.</p>
<p>Le pro-rétinol est une forme stabilisée et non irritante du rétinol, un actif anti-âge de référence connu pour favoriser la régénération des cellules. À sa juste concentration, il agit efficacement contre les rides et ridules.</p>
<p>Activée au contact de la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273262484</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/76982a2a2b111162c16836f91e6ed814b93c4ca3665c0de20e5308e2c8ff999e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Blue Therapy Blue Retinol Night Serum Anti-Âge 30 ml ]]></title>
<g:id>f187d0a3-8e0f-4244-a386-95bd14cd1b73</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy blue retinol night serum anti-Âge 30 ml?f187d0a3-8e0f-4244-a386-95bd14cd1b73 ]]></link>
<g:price><![CDATA[ 6970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Blue Therapy Blue Retinol Night Serum Anti-Âge 30 ml est un soin de nuit anti-rides et uniformité, particulièrement destiné aux peaux normales à grasses.</p>
<p>Sa formule associe l'action régénératrice du Plancton de Vie™ à un actif dermatologique anti-âge de référence, le rétinol - pur et hautement dosé (0.25%) pour une efficacité anti-ride et resurfaçante :</p>
<ul><li>1% Planton de Vie™, un ingrédients 100% naturel qui favorise le renouvellement cellulaire.</li>
<li>0,25% Rétinol ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273622554</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f6a6494d53caa50a3075ac089f1ed04e50515d3ab4925a5699a7f48edd99546d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Blue Therapy Multi-Defender SPF25 Peau Normale à Mixte 50 ml ]]></title>
<g:id>9c24030d-ac02-4641-9f94-ede51ad4c003</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy multi-defender spf25 peau normale à mixte 50 ml?9c24030d-ac02-4641-9f94-ede51ad4c003 ]]></link>
<g:price><![CDATA[ 5870.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Blue Therapy Multi-Defender SPF25 Peau Normale à Mixte 50 ml est une crème multi-protectrice qui répare la peau des signes visibles de l'âge. Elle est spécialement formulée pour les peaux normales à mixtes.<br /><br />Cette crème contient le premier Broad Outdoor Defense Complex, un concentré en Baïcaline antioxydante et en F. Lumbricalis qui protège votre peau de la pollution, afin de défendre votre peau contre les facteurs d'accélération du vieillissement comme jamais auparavant. I ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271578488</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/acee7ab54df0aa6c151ce45f06dcd0f4237767184c4c6f1a1b3260dc91894736 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Blue Therapy Nuit 50 ml ]]></title>
<g:id>10839b93-95b2-4b1a-99b5-22a70c69664f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy nuit 50 ml?10839b93-95b2-4b1a-99b5-22a70c69664f ]]></link>
<g:price><![CDATA[ 6460.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pendant la nuit, la peau est à l'abri des agresseurs externes, elle est plus à même de se régénérer et de se réparer. Biotherm Blue Therapy Nuit Réparation des Signes Visibles de l'Âge 50 ml agit sur les signes visibles de l'âge de toutes les peaux.<br /><br /><span>Cette crème contient une micro algue bleue-verte, la A.Flos-Aquae pour stimuler la prolifération des kératinocytes et renforcer la structure extracellulaire de la peau, l'algue L.Ochroleuca et le complexe Plancton de Vie pour cont ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540886304</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ee1e74d5b6c5c64402c91985c595e163949993ec508bddb53afa06f2d07f606 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Bluetherapy Eye Opening Sérum ]]></title>
<g:id>a5e49006-0245-4292-a2f9-9cd150362a25</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-bluetherapy eye opening sérum?a5e49006-0245-4292-a2f9-9cd150362a25 ]]></link>
<g:price><![CDATA[ 4260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec l’âge, le regard semble moins ouvert et moins vif. Pour la première fois, Biotherm associe l’extrait d'algue de jeunesse à un applicateur perle innovant pour agir sur les trois signes de la perte d’ouverture du regard : les paupières paraissent liftées, les poches paraissent décongestionnées et les rides semblent lissées. Les yeux paraissent visiblement plus ouverts après 4 semaines, et 5 ans de dommages peuvent être réparés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271633279</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/441ce4b87fa902995e91af2d58a5804c71c96e9d752108650ac6fe8c8b558f4a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Cera Repair Crème Barrière Réparatrice 50 ml ]]></title>
<g:id>6d57291f-d5ad-40ff-91e4-5ef04ab4ee9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-cera repair crème barrière réparatrice 50 ml?6d57291f-d5ad-40ff-91e4-5ef04ab4ee9c ]]></link>
<g:price><![CDATA[ 4290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Cera Repair Crème Barrière Réparatrice 50 ml est un soin visage conçu pour renforcer et protéger la peau des agressions urbaines, et agir sur les premiers signes de l'âge.<br />Cette crème convient à tous les types de peaux, y compris sensibles. Sa formule associe :</p>
<ul><li>Des Fractions de probiotiques de Plancton de Vie™ d'origine naturelle pour aider à apaiser et régénérer la peau agressée.</li>
<li>Des Biocéramides d'origine naturelle en bio-affinité avec la peau pour aider à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273393539</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa5b1c897daa870c50b5fc7502a3e09be56acf39ee48cb459af69f5ea3842e4f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Coffret Blue Pro-Retinol Cream Routine Set ]]></title>
<g:id>4d87b146-493e-4a39-ae88-4dc3c4208ca9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-coffret blue pro-retinol cream routine set?4d87b146-493e-4a39-ae88-4dc3c4208ca9 ]]></link>
<g:price><![CDATA[ 6189.60 EUR ]]></g:price>
<description><![CDATA[ <p><span>Blue Pro-Retinol Multi-Correct Cream 50ml : Crème de jour au Pro-Rétinol pour cibler les rides et améliorer la texture de la peau.</span><br /><br /><span>Life Plankton Elixir 7ml : Ressentez le pouvoir régénérant du Life Plankton Serum La régénération commence là où Life Plankton™ et la vitamine Cg se rencontrent. Jour après jour, réparez, rechargez et rayonnez avec Life Plankton Serum pour révéler une peau lumineuse, saine et lisse. Haute bio-affinité avec la peau +59% de réparation p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614274330748</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f81c85d4ffb02fe6ec245e77d74860575421eb62871f5ddd84d0ad423e07742 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Coffret routine Blue Peptides Uplift Spf 30 ]]></title>
<g:id>13f32f30-1bcf-4d5c-86de-510e2269ab21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-coffret routine blue peptides uplift spf 30?13f32f30-1bcf-4d5c-86de-510e2269ab21 ]]></link>
<g:price><![CDATA[ 5870.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Crème visage anti-âge et fermeté Blue Peptides SPF30 50ml :</span><span> Découvrez le secret d'une peau visiblement plus ferme et d'un teint éclatant de jeunesse avec la crème Blue Peptides Uplift SPF30 - intégrée à la nouvelle franchise Blue Peptides. La rencontre entre le Plancton de Vie™ régénérant et les fractions de peptides de collagène qui stimulent la production naturelle de collagène de votre peau avec une efficacité de +416 %1 pour une peau plus ferme et visiblement liftée. Ma ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614274330762</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09b26e718139d656f5c6b3fe239b95b6fb59b59f2d264589509dbb75ce8cd763 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Day Control Deodorant 72h Homme 2x75ml ]]></title>
<g:id>183eb177-104d-4151-ac48-2b7c4e977820</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-day control deodorant 72h homme 2x75ml?183eb177-104d-4151-ac48-2b7c4e977820 ]]></link>
<g:price><![CDATA[ 2439.60 EUR ]]></g:price>
<description><![CDATA[ <p><strong>L’anti-transpirant 72 h Day Control Extrême Protection</strong> fait partie de la gamme Biotherm Homme. Ce produit contribue à limiter la transpiration excessive au niveau des aisselles masculines. Le stress, l’activité physique ou encore la fièvre passagère peut provoquer une surproduction des glandes surrénales et occasionner des traces d’humidité sous les bras. La sueur en excès peut alors accentuer la prolifération de bactéries responsables de mauvaises odeurs. Cet anti-transpiran ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605061469093</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c200d93a47585db40477594d1eea66f5588066b977f292c176bbeef1aebfe17 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT ET PARFUM > HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Déo Pure Anti-Transpirant Stick 40 ml ]]></title>
<g:id>b0a7ffdb-8cf3-4add-a312-b38ff9137e1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-déo pure anti-transpirant stick 40 ml?b0a7ffdb-8cf3-4add-a312-b38ff9137e1b ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Déo Pure Stick Anti-Transpirant 40 ml au complexe minéral est un déodorant anti-transpirant idéal pour toutes les peaux même les plus sensibles.<br /><br /><span>Agréable à appliquer, il sèche rapidement sans laisser de traces, pour une protection longue durée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729018974</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a3592407f3c661ea6fe4be82694627f40be6820f4ee71d36608224ffe06ef7b ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Déo Pure Anti-Transpirante Crème 75 ml ]]></title>
<g:id>f6cce484-3999-4323-99a6-ee224d630c4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-déo pure anti-transpirante crème 75 ml?f6cce484-3999-4323-99a6-ee224d630c4b ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Confortable, ultra riche, la texture soin s'applique en un clin d'œil, sans laisser de traces. L'actif anti-transpirant régule la transpiration pendant 24h.</p>
<p class="p1">Procure une sensation de confort, de netteté et de douceur dès l'application. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729018943</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/918198635d3dee6f72c71d17d91232620124cd821e4d38548cb79b7150bae744 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Déo Pure Invisible Anti-Transpirant 48H Spray 150 ml ]]></title>
<g:id>439a8ea8-11e3-4bdc-9950-7879002cdc6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-déo pure invisible anti-transpirant 48h spray 150 ml?439a8ea8-11e3-4bdc-9950-7879002cdc6e ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Déo Pure Invisible Anti-Transpirant 48H Spray 150 ml enrichi au plancton thermal pur et au complexe apaisant agit jusqu'à 48 heures pour protéger votre peau grâce à son action anti-bactérienne. Son parfum de fruits d'été : bergamote, poire, prune apporte une sensation de fraîcheur immédiate.</p>
<p>Une fois appliqué, il ne laisse pas de traces.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540856703</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc59bf3ef81f6d61a1d9d40058ef72bc7b560ff8ab1744de46b162b7035d5a40 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Déo Pure Invisible Roll-On Anti-Transpirant 48h 75 ml ]]></title>
<g:id>33c3aae2-7f58-4b83-8a03-5b4bd73a820d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-déo pure invisible roll-on anti-transpirant 48h 75 ml?33c3aae2-7f58-4b83-8a03-5b4bd73a820d ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Déo Pure Invisible Roll-On Anti-Transpirant 48h 75 ml au complexe apaisant est un déodorant anti-transpirant efficace pendant 48h. Il convient pour toutes les peaux, même les plus sensibles.<br /><br />Invisible, il ne laisse ni traces jaunes ni traces blanches après application. La peau est protégée, parfumée d'un parfum frais et floral.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540856635</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c24482e83264b553e31ef76643050d75837b590a403fdaa39d9849b9e15b7c41 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Eau Pure Eau de Toilette 100 ml + Gel Douche Parfumé 75 ml Offert ]]></title>
<g:id>a11e8517-d0f0-46bf-a1e5-11a7ab0e131b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-eau pure eau de toilette 100 ml + gel douche parfumé 75 ml offert?a11e8517-d0f0-46bf-a1e5-11a7ab0e131b ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Eau Pure Eau de Toilette 100 ml + Gel Douche Parfumé 75 ml Offert est un duo autour de la mythique Eau Pure, pour vivifier vos sens :</p>
<p>- Biotherm Eau Pure Eau de Toilette 100 ml est un parfum vivifiant comme un torrent d'eaux vives, un parcours aromatique frais, gorgé de fruits verts, purs et bienfaisants pour la peau : le thé vert, le citron vert et le kiwi.<br />Cette eau de toilette puise au cœur de la nature tous ses bienfaits pour la peau et contient des huiles essentielle ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273964005</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fbcbd63eb6f9df194e3b8dc3996687665c0199f526bbf93ab18ef0c30918f17b ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Eau Vitaminée Eau de Toilette 100 ml + Gel Douche Parfumé 75 ml Offert ]]></title>
<g:id>36deda86-5982-476d-aa7e-d68ffa68acd3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-eau vitaminée eau de toilette 100 ml + gel douche parfumé 75 ml offert?36deda86-5982-476d-aa7e-d68ffa68acd3 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Eau Vitaminée Eau de Toilette 100 ml + Gel Douche Parfumé 75 ml Offert est un duo autour de l'Eau Vitaminée pour revigorer vos sens :</p>
<p>-  Biotherm Eau Vitaminée Eau de Toilette 100 ml est un spray de fraîcheur exaltant qui parfume délicatement la peau tout en l'hydratant. Ses propriétés aromathérapiques aux essences d'orange et de feuille de citronnier énergisent et ravivent l'esprit.<br />Un mariage de pamplemousse, de jasmin, de freesia, de lys et de musc blanc aide à tonifie ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273964029</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9dc6e46832c4401825876a971b9957989cdc5fd0f6a3be0c60b77a866950fec9 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Eau Vitaminée Eau de Toilette 50 ml ]]></title>
<g:id>81bdbd8c-b1dc-44c3-a77b-93dd4d845783</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-eau vitaminée eau de toilette 50 ml?81bdbd8c-b1dc-44c3-a77b-93dd4d845783 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eau vitaminée tonifiante pour le corps et l'esprit !<br />Ce spray de fraîcheur parfume délicatement la peau tout en l'hydratant. Ses propriétés aromathérapeutiques aux essences d'orange et de feuille de citronnier énergisent et ravivent l'esprit. Un mariage de pamplemousse, de jasmin, de freesia, de lys et de musc blanc aide à tonifier la peau. Il hydrate, assouplit et tonifie la peau grâce à de la vitamine E et à des essences d'huiles d'agrumes.<br />Résultat : La peau est délicatement parf ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540669099</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/89faabe969ef27f5582473a271d073a36b9ab4b21b4c99557fb2903ec4c8ab08 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Eau d'Énergie 100 ml + Gel Douche Parfumé 75 ml Offert ]]></title>
<g:id>d454a428-0206-48a9-9f42-d20af53ed325</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-eau d'Énergie 100 ml + gel douche parfumé 75 ml offert?d454a428-0206-48a9-9f42-d20af53ed325 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Eau d'Énergie Eau de Toilette 100 ml + Gel Douche Parfumé 75 ml Offert est un duo autour de l'Eau d'Énergie, pour réveiller vos sens :</p>
<p>-  Biotherm Eau d'Énergie Eau de Toilette 100 ml est une eau de soin revitalisante aux essences d'agrumes. Cette brume parfumée énergisante aux notes éveillantes et stimulantes de pulpe d'orange, mandarine, physalis, citron, pulpe d'abricot, jasmin frais et cyclamen parfume délicatement, rafraîchit et adoucit votre peau.</p>
<ul><li>Notes de tê ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273963978</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c9571d7b778c8ca1eaad2f4ba62613b1a0b24d77107122cc4f80a8e49f629686 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Eau d'Énergie Eau de Toilette 50 ml ]]></title>
<g:id>88d6ba58-1b3e-4f0c-88ab-d81d7c2d8f3d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-eau d'Énergie eau de toilette 50 ml?88d6ba58-1b3e-4f0c-88ab-d81d7c2d8f3d ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Eau d'Énergie Eau de Toilette 50 ml est une eau de soin revitalisante aux essences d'agrumes.<br />Cette brume parfumée énergisante aux notes éveillantes et stimulantes de pulpe d'orange, mandarine, physalis, citron, pulpe d'abricot, jasmin frais et cyclamen parfume délicatement, rafraîchit et adoucit votre peau.</p>
<ul><li>Notes de tête : Bergamote, Mandarine, Orange.</li>
<li>Notes de cœur : Cardamome, Gingembre, Freesia.</li>
<li>Notes de fond : Cèdre, Tonka, Muscs.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540669150</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e667db66900c2f06cd2ceef004f622cdf97b76ab7b9560c48923dbdb37b0d9e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme 72H Day Control Anti-Transpirant Non-Stop 150 ml ]]></title>
<g:id>695499db-e681-49e8-8ecf-5583548a44ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme 72h day control anti-transpirant non-stop 150 ml?695499db-e681-49e8-8ecf-5583548a44ab ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Homme 72H Day Control Anti-Transpirant Non-Stop 150 ml est un déodorant protection extrême, offrant une action ciblée anti-transpirante pendant 72 heures.<br /><br />Résistant à toute épreuve, il propose une action anti-transpirante, en régulant efficacement la transpiration sans la bloquer.<br /><br />Sec en quelques secondes seulement, il est aussi très pratique grâce à son format spray.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271099853</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe00d9b2d73d9c6e6c2e097cff6ba907ac770415932642acb109cabaedb02df5 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT ET PARFUM ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Aquafitness Gel Douche Revitalisant Instantané 200 ml ]]></title>
<g:id>ee7b7662-4edf-4592-89b6-577039450446</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme aquafitness gel douche revitalisant instantané 200 ml?ee7b7662-4edf-4592-89b6-577039450446 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Homme Aquafitness Gel Douche Revitalisant Instantané 200 ml est un gel douche corps et cheveux pour homme.</p>
<p>Enrichi en eau de source marine naturellement chargée en oligoéléments et minéraux, ce gel apporte immédiatement un effet frais et revitalisant.</p>
<p>Il laisse les cheveux doux et la peau hydratée.</p>
<p>Après 4 semaines d'utilisation, il offre une sensation de peau neuve. 98% biodégradable dans l'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540873502</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f83b2f5020f4fd4923706e0912a06fc97f2f764937c0fb24bcb28a985647dac ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Aquapower 72H Hydratant Glacial Concentré 50 ml ]]></title>
<g:id>0f3286b7-5a77-4fca-a86f-b91c3c37cebf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme aquapower 72h hydratant glacial concentré 50 ml?0f3286b7-5a77-4fca-a86f-b91c3c37cebf ]]></link>
<g:price><![CDATA[ 3930.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Homme Aquapower 72H Hydratant Glacial Concentré 50 ml à la texture ultra-légère se liquéfie au contact de la peau pour une hydratation profonde jusqu'à 72 heures.<br /><br />Ce gel-crème à la formule enrichie en P.Antartica, une algue des eaux de l'Antarctique, et Mannose permet de prévenir la déshydratation car il retient l'eau au coeur de la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270254215</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2cac67d1628cb37fc37355b24d05afc2f70c1f60f02824362bbec793e2c402cf ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Aquapower Comfort Gel 75 ml ]]></title>
<g:id>08b66543-b2af-4877-8ada-db2c634b61cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme aquapower comfort gel 75 ml?08b66543-b2af-4877-8ada-db2c634b61cc ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Biotherm Homme Aquapower Comfort Gel 75 ml est un gel hydratant qui nourrit la peau pour l'aider à combattre la sécheresse, les sensations de tiraillement et la rugosité cutanée causées par les agressions externes quotidiennes. Grâce à sa texture fraîche et nourrissante, la peau est hydratée en profondeur et bénéficie d'une sensation de confort tout au long de la journée. Le fini est non collant.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272975064</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9e045f176e9f9288900aa521255e6d2822911b84c870ea14dcec67b084ec682 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Day Control Anti-Transpirant Non-Stop 48H Stick 50 ml ]]></title>
<g:id>8ff7d8db-a227-4ff5-9abb-fd8474f773ad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme day control anti-transpirant non-stop 48h stick 50 ml?8ff7d8db-a227-4ff5-9abb-fd8474f773ad ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Day Control Déodorant Stick 50 ml de Biotherm Homme est un déodorant sans alcool qui va vous offrir une double efficacité :<br />        -action anti-transpirante : régule efficacement votre transpiration sans la bloquer<br />        -action déodorante : lutte contre le développement des bactéries responsables des mauvaises odeurs.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729021066</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c10269a29c77f9f73f19086bdd59bb82acba9013b7677fb57a3ba2766b59ad4a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Day Control Natural Protect 24H Roll-On 75 ml ]]></title>
<g:id>eb49a6ae-d4c8-4e76-b0ba-8cb6950136da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme day control natural protect 24h roll-on 75 ml?eb49a6ae-d4c8-4e76-b0ba-8cb6950136da ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Homme Day Control Natural Protect 24H Roll-On 75 ml est un déodorant certifié Bio aux ingrédients 100% naturels, sans sels d'aluminium, spécialement conçu pour les hommes.</p>
<p>Efficace pendant 24 heures, il protège la peau des mauvaises odeurs tout en la laissant respirer.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605540596951</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f30ee429a837c37c1c269801580216c819be533447a6868e6fa5db38a3c8b0a0 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT ET PARFUM ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Foamshaver Mousse de Rasage 200 ml ]]></title>
<g:id>a08b3f5f-484f-447a-9b16-3580c581724c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme foamshaver mousse de rasage 200 ml?a08b3f5f-484f-447a-9b16-3580c581724c ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Homme Foamshaver Mousse de Rasage 200 ml est une mousse à la texture onctueuse pour un rasage haute précision, idéal pour toutes les peaux, même les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729017212</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8212b7b8d2747f48e6f0d83aa598e5149f8d3359bdc6971fddd0eb3101715e7e ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Force Suprême Youth Architect Cream 50 ml ]]></title>
<g:id>4656e0fb-b2ff-4e07-86c3-fa8120bae6f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme force suprême youth architect cream 50 ml?4656e0fb-b2ff-4e07-86c3-fa8120bae6f1 ]]></link>
<g:price><![CDATA[ 6550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm homme force suprême youth reshaping cream est un soin correcteur multi-signes de l'âge à base d'extrait d'algue de jeunesse et de pro-xylane. Ce soin multi-correcteur agit efficacement sur les 5 signes du vieillissement cutané (rides, perte de fermeté, teint terne, irrégularité colorielle, manque d'hydratation) chez les hommes de plus de 40 ans. Cette crème est enrichie en extrait d'algue de jeunesse à l'action multiple. Elle permet de remodeler les contours du visage tout en amélior ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270303944</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e1737964ec60c38a2538864a25958bb61b4e800dd404e94bd822548fc4f71ae4 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Homme Gel exfoliant visage 125ml ]]></title>
<g:id>0ed4437c-fad8-4f44-916c-17df3cb7d5ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme gel exfoliant visage 125ml?0ed4437c-fad8-4f44-916c-17df3cb7d5ee ]]></link>
<g:price><![CDATA[ 2670.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273475754</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18dc73572e2bc889fd2da3afa1be45b87ffdf754372a11a7469701aa2f72d382 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm L'Eau Le Parfum Énergisant du Lait Corporel 100 ml ]]></title>
<g:id>ccc1205c-a19a-44c3-9aca-b23b00ea2ae0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-l'eau le parfum Énergisant du lait corporel 100 ml?ccc1205c-a19a-44c3-9aca-b23b00ea2ae0 ]]></link>
<g:price><![CDATA[ 3790.00 EUR ]]></g:price>
<description><![CDATA[ <div id="description">
<div>
<div>Biotherm L'Eau Le Parfum Énergisant du Lait Corporel 100 ml est une eau de toilette dynamisante pour le corps. <br /><br />Ce parfum énergisant diffuse une délicieuse fragrance dans laquelle on retrouve les essences de Bergamote, d'Orange, de Mandarine, de Gingembre, et d'Élémi, et également des notes de Cèdre et de Musc. Dès son application, il procure une sensation de fraîcheur tout en laissant sur votre peau un doux parfum sensoriel qui s'inspire de la fragra ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270274671</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/00aa2f62afe108d749fafffa1be09dc1f499797ca638844ba447cdddd20761e2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Lait Corporel Active Recovery 400ml ]]></title>
<g:id>32e6a378-73a3-4b1d-a097-c0cda465ef37</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-lait corporel active recovery 400ml?32e6a378-73a3-4b1d-a097-c0cda465ef37 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce lait corporel apporte une dose quotidienne de nutriments vitaux pour la peau afin d'accélérer la réparation de la barrière cutanée.</span><br /><br /><span>CE QUI EST UNIQUE</span><br /><span>Saviez-vous que le manque de nutriments vitaux pour la peau peut ralentir la réparation de la peau endommagée ou irritée ?</span><br /><br /><span>Le Lait Corporel Active Recovery de Biotherm est formulé sur la base de cette idée biologique pour aller au-delà de l'hydratation de la peau en accél ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614274170429</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13790246cad9faab84d31c7f9961cae53b2da01687a96a5db9e07a3a3847a15c ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Lait corporel anti dessèchement 2 x 400 mL ]]></title>
<g:id>9bc7f2b3-6286-4bf1-b74c-3bd3073526ea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-lait corporel anti dessèchement 2 x 400 ml?9bc7f2b3-6286-4bf1-b74c-3bd3073526ea ]]></link>
<g:price><![CDATA[ 3790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Notre iconique Lait Corporel rend la peau instantanément plus douce. Cette formule anti-dessèchement restaure la barrière protectrice de votre peau et son élasticité naturelle. Enrichi en essences d'agrumes, notre lait pour le corps restaure la barrière de votre peau et offre 48H de protection contre la sécheresse. Notre parfum signature et sa texture non-collante vous offrent un véritable moment de sensorialité. La peau semble régénérée.</span><br /><br /><span>48H d'hydratation</span> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3605061299997</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/77c0578b599a21aeddce9389b88c3988f89bb37122bd7cf0343014d0e34eaf0e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Life Plankton Ampoules repulpantes 8 x 1,3 ml ]]></title>
<g:id>46d93585-a5c1-4f0b-8a6c-47eeb1affbb0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-life plankton ampoules repulpantes 8 x 1,3 ml?46d93585-a5c1-4f0b-8a6c-47eeb1affbb0 ]]></link>
<g:price><![CDATA[ 4190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le laboratoire </span><span>Biotherm</span><span> vous propose des </span><span>ampoules repulpantes</span><span> issues de sa gamme </span><span>Life Plankton</span><span> et destinée à combler les rides et regonfler l'épiderme de la peau qui peut s'affaisser quelque peu avec l'âge et le stress. Nous ne sommes, en effet, pas tous égaux face au vieillissement cutané dont les causes sont relatives à de nombreux facteurs comme la fatigue, la sensibilité de la peau, l'environnement et donc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272890497</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/012db563982764ce58501c862ab53313a529e8614606b095bcaf4d94c71f0d67 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Life Plankton Lait Corps Multi-Correction 400 ml ]]></title>
<g:id>a3e5b67d-4567-4020-8634-2d2ef53c72ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-life plankton lait corps multi-correction 400 ml?a3e5b67d-4567-4020-8634-2d2ef53c72ba ]]></link>
<g:price><![CDATA[ 2860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Life Plankton Lait Corps Multi-Correction 400 ml est un lait protecteur et apaisant pour le corps enrichi en Life Plankton™.<br />Jour après jour, la qualité de la peau est restaurée.</p>
<p>Hypoallergénique.<br />Testé sur peaux sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272848573</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7efe505876b90deacc935e138f632d729dd2b197a73196a04ba7775f2dcfd447 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Oil Therapy Baume Corps 400 ml ]]></title>
<g:id>e1a272a7-9f93-49e4-9280-f97e808f9082</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-oil therapy baume corps 400 ml?e1a272a7-9f93-49e4-9280-f97e808f9082 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Oil Therapy Baume Corps 400 ml est un baume pour le corps enrichi en huile de noyaux d'abricot pour nourrir les peaux sèches et les aider à retrouver leur éclat naturel. Cet émollient riche et fondant nourrit intensément la peau.</p>
<p>Dès la première application, il procure une sensation de confort. Hydratées et nourries, les peaux sèches retrouvent douceur, souplesse, fermeté et un aspect lisse.</p>
<p>Ce soin nutri-reconstituant est ultra-pénétrant et sans effet gras.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614274042870</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e978a2ec2170385179dedf47f8569fd428c4e6f10bd8ebaac941dccf9c81383f ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Pure Roll-On Anti-Transpirant 75 ml ]]></title>
<g:id>ae715c0a-1a61-4e38-a5bd-905c0c9b38e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-pure roll-on anti-transpirant 75 ml?ae715c0a-1a61-4e38-a5bd-905c0c9b38e7 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Déo Pure Roll-On Anti-Transpirant 75 ml au complexe minéral est un déodorant anti-transpirant idéal pour toutes les peaux même les plus sensibles.<br /><br />Agréable à appliquer, il sèche rapidement sans laisser de traces, pour une action longue durée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729018981</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/976ecde67d551c154b922d92633372a5270e6c9d273f501649c6918e7e994dd9 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Sun After Lait Oligo-Thermal Visage et Corps Hydratant 400 ml ]]></title>
<g:id>f5fc5804-adf3-4dc9-85f6-805cda6c5e35</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-sun after lait oligo-thermal visage et corps hydratant 400 ml?f5fc5804-adf3-4dc9-85f6-805cda6c5e35 ]]></link>
<g:price><![CDATA[ 2050.00 EUR ]]></g:price>
<description><![CDATA[ <p>After Sun :<br /><br />- apaise et favorise la régénération cellulaire des épidermes agressés par le soleil grâce à l’Extrait Pur de Plancton Thermal™ + oligo minéraux + vitamines B5 et E + SOD.<br /><br />- hydrate et adoucit la peau (beurre de karité, Radiant Tan Complex…).<br />Résultat : La peau est hydratée et apaisée, elle révèle un bronzage lumineux, uniforme et durable</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729012354</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f1ae2679f7ab2469dc704f24beb534b2464ab52caa1cb123df405ae8d3b8534e ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Trousse Les Essentiels de l'Eté ]]></title>
<g:id>ea3246c7-9a7b-448d-a9ff-5d1efdcc69e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-trousse les essentiels de l'eté?ea3246c7-9a7b-448d-a9ff-5d1efdcc69e8 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Trousse Les Essentiels de l'Eté est un trio de soins en format voyage pour un rituel de l'été pour protéger et hydrater la peau, visage et corps.</p>
<p>- Biotherm Waterlover Sun Milk SPF 30 40 ml est un lait solaire fondant qui assure une très haute protection de la peau Cette protection peut s'utiliser pour toute la famille (dès 3 ans). Il contient des ingrédients sélectionnés pour respecter l'environnement aquatique. Sa formule hydratante est enrichie en Plancton de Vie pour garan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273014861</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8f24027f46d441cc93065755fdbcdaf4b86d842e0302e22312192072c4b7496 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Urban UV Defense hydratation spf 50 30 ml ]]></title>
<g:id>bd305e0c-12ca-453d-a4f8-0992f3c814c3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-urban uv defense hydratation spf 50 30 ml?bd305e0c-12ca-453d-a4f8-0992f3c814c3 ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez Urban UV Defense, un nouveau fluide hydratant protecteur alliant une très haute protection UVA, UVB, SPF 50+ et une combinaison Plancton de Vie régénérant et Acide Hyaluronique. Pour une peau protégée, plus lisse et parfaitement hydratée*. *Test consommateur sur 69 sujets caucasiens, résultats après 28 jours d'application.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273708685</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8166cd85e16b4cd05abdca16043c9669242b14cb16b3cc0b06eb2807cbf7b4b6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Waterlove Spray Solaire Lacté SPF50+ 200 ml ]]></title>
<g:id>80a5997e-690c-4bf4-a26a-c9f831215f89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlove spray solaire lacté spf50+ 200 ml?80a5997e-690c-4bf4-a26a-c9f831215f89 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Waterlover Milky Sun Spray Solaire Lacté SPF50+ 200 ml est une très haute protection solaire hydratante multi-résistance qui convient à tous les types de peaux.<br />Ce spray lacté offre à votre peau une très haute protection contre les UVA et les UVB.</p>
<p>La Technologie Netlock permet une résistance à l'eau et au sable tout en protégeant la peau des dommages du soleil. Elle assure une plus haute protection contre les UV, avec un SPF plus élevé qu'une formule classique pour le mêm ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273762717</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4d7043b3e329da1a0b593fe1a226749f97a74c6777bde758e0c8df62504b705b ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Waterlover Crème Visage  SPF50+ 50 ml ]]></title>
<g:id>91bbcc7d-67e0-41e0-b845-092e3fc8d423</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlover crème visage  spf50+ 50 ml?91bbcc7d-67e0-41e0-b845-092e3fc8d423 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Waterlover Face Sunscreen Crème Visage Protection Jeunesse SPF50+ 50 ml est une très haute protection solaire visage, formulée pour protéger la jeunesse et prévenir le photo vieillissement.</p>
<p>Cette formule résistante à l'eau offre à votre peau une très haute protection contre les UVA et UVB. La niacinamide combinée aux fractions de probiotiques de Plancton de Vie™ aident à prévenir les signes prématurés de l'âge dus à une exposition aux UV tels que les taches et les rides.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273760423</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ff730cc7d9d4026cf9b22d7d4615d9913399766cabe8e223e6529cb721a8e31 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Waterlover Crème Visage SPF30 50ml ]]></title>
<g:id>01d8981c-1934-468e-a7f2-464da8a8fb94</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlover crème visage spf30 50ml?01d8981c-1934-468e-a7f2-464da8a8fb94 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description" id="description">
<p><span>Biotherm Waterlover Crème Visage SPF30</span> offre une protection jeunesse qui protège des UV. Elle protège du photo-vieillissement. Ce soin est infusé des actifs, tels que le life plankton, qui protège les cellules cutanées du stress oxydatif.</p>
<p></p>
</div>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273760430</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/37a145615c11f8f114063acfba19168e44579c0e313987de7a4a6c09133ff6db ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Waterlover Lait Solaire P SPF50+ 200 ml ]]></title>
<g:id>83fb6f8f-7561-44b8-a979-7754536e5408</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlover lait solaire p spf50+ 200 ml?83fb6f8f-7561-44b8-a979-7754536e5408 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Waterlover Lait Solaire Protection et Hydratation SPF50+ 200 ml est un lait solaire très haute protection contre les UVA/UVB, formulé pour convenir aux peaux sensibles.<br />Résistant à l'eau, il hydrate la peau durant 24 heures et est rapidement absorbé, sans laisser de traces blanches.</p>
<p>Son tube est plus écoresponsable, il intègre du papier et utilise 43% de plastique en moins par rapport à l'ancien tube.<br />Sa formule éco-testée est plus respectueuse de la vie aquatique.</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273490566</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79ebcbf22294140f81101dbb2b6a6ba5e4ca2e8af537df20bfbd38eca72668ae ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Waterlover Sun Milk SPF 50 200 ml ]]></title>
<g:id>aa917058-156e-453e-aee1-3a4b3b4c9229</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlover sun milk spf 50 200 ml?aa917058-156e-453e-aee1-3a4b3b4c9229 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Waterlover Sun Milk SPF 50 200 ml est un lait solaire fondant pour le visage et le corps qui assure une très haute protection de la peau. Cette protection peut s'utiliser par toute la famille (à partir de 3 ans).<br /><br />Ce lait solaire contient des ingrédients sélectionnés pour respecter l'environnement aquatique. Sa formule hydratante est enrichie en Plancton de Vie pour garantir l'hydratation de votre peau.<br /><br />Sa texture fluide et onctueuse s'applique rapidement et pénè ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271701510</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78742e355cb6757e7aae2e880d2594225417d97f93ba099478d6c67058462cfe ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm Waterlover Sun Milk SPF30 200 ml ]]></title>
<g:id>a55599f3-8ab1-437d-99bb-18c75a730372</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlover sun milk spf30 200 ml?a55599f3-8ab1-437d-99bb-18c75a730372 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm Waterlover Sun Milk SPF30 200 ml est un lait solaire fondant pour le visage et le corps qui assure une très haute protection de la peau. Cette protection peut s'utiliser par toute la famille (à partir de 3 ans).<br /><br />Ce lait solaire contient des ingrédients sélectionnés pour respecter l'environnement aquatique. Sa formule hydratante est enrichie en Plancton de Vie pour garantir l'hydratation de votre peau.<br /><br />Sa texture fluide et onctueuse s'applique rapidement et pénèt ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614271701503</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f3107a13de83497f5f3fd5cda5d2d8e118aa4dd59ce5c7aa23570b54ce9a1fe6 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm blue therapy amber crème de jour anti-âge 50ml ]]></title>
<g:id>f6de7fa8-6d69-41cc-8150-552d0c205bd3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy amber crème de jour anti-âge 50ml?f6de7fa8-6d69-41cc-8150-552d0c205bd3 ]]></link>
<g:price><![CDATA[ 6740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm blue therapy amber crème de jour anti-âge revitalisation - nutrition - eclat. <br /><br />Pour toutes les femmes à partir de 50 ans, qui souhaitent une meilleure nutrition anti-âge et de l’éclat, biotherm a créé une nouvelle génération de soins anti-âge revitalisants. Amber algae revitalize, un soin revitalisant profond capable de fortifier, nourrir et illuminer la peau. <br /><br />L'alliance de l'algue ambrée, puissant anti-âge tonifiant, du calcium et d'un complexe d'actifs nature ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272688339</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40b46113d36aa849c8f0cd0879c766266bd468e17b2fe78be1e4194337100a4f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm blue therapy amber crème de nuit anti-âge 50ml ]]></title>
<g:id>c1487045-2653-4beb-a5b2-191ec725ea3a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-blue therapy amber crème de nuit anti-âge 50ml?c1487045-2653-4beb-a5b2-191ec725ea3a ]]></link>
<g:price><![CDATA[ 7170.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm blue therapy amber est une crème de nuit anti-âge ultra-nourrissante qui répare, fortifie et régénère la peau pour lui redonner éclat et fraîcheur le matin.<br /><br />Son aspect unique: la crème de nuit revitalisante aux algues bleues blue therapy agit pendant la nuit pour nourrir visiblement la peau et repulper les pattes d'oie, les ridules et les rides pour une peau jeune et éclatante le matin.<br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272688346</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ad20d63a61107c95de4c716a696ca8d7875ba4dc691973847eacee441bea8a0 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm homme day control déodorant atomiseur anti-transpirant 150 ml ]]></title>
<g:id>23bffddd-a0c4-4e15-9a81-4e59a9958f62</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme day control déodorant atomiseur anti-transpirant 150 ml?23bffddd-a0c4-4e15-9a81-4e59a9958f62 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729202403</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73ac762cb1814dd617cf496c658592e959f85d81c021ba6ae96722e8a6122d2b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm homme gelshaver gel de rasage 150ml ]]></title>
<g:id>101d2390-cce5-41df-8ca4-ea7ab0c21d37</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-homme gelshaver gel de rasage 150ml?101d2390-cce5-41df-8ca4-ea7ab0c21d37 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le gel de rasage prévient les irritations dues au rasage et permet un rasage de très près en apportant vitalité &amp; fraicheur.</span><br /><span></span></p>
<p><span>Ce gel frais transparent se transforme en une mousse onctueuse sur la peau. Il combine une action anti-feu du rasoir et une hydratation pour une peau confortable et protégée.</span><br /><span></span></p>
<p><span><span>Une formule triple action pour prévenir les principaux problèmes de l'épiderme masculin après le rasage ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729017236</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c9935fddd5826be764e00bbd4b9a148d0186009b1e2632159a5d5840a2e29983 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm lait corporel anti-dessèchement 400ml ]]></title>
<g:id>ab56e841-75d9-440d-93e3-765ce5a2b26f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-lait corporel anti-dessèchement 400ml?ab56e841-75d9-440d-93e3-765ce5a2b26f ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Délicieusement fluide et merveilleusement frais, ce lait corporel quotidien aide instantanément la peau à retrouver sa douceur. Triplement actif, il réhydrate et compense le déssèchement cutané, reconstitue la barrière protectrice de la peau tout en préservant son élasticité naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3367729117264</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ea03e429d19e27c1125889b5fa5b2b8be311bf3151cb6b3772fa7598fc3b9417 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm life plankton eye soin contour yeux régénérant 15ml ]]></title>
<g:id>b87f137e-4225-43fb-8843-3bf8731d2d9e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-life plankton eye soin contour yeux régénérant 15ml?b87f137e-4225-43fb-8843-3bf8731d2d9e ]]></link>
<g:price><![CDATA[ 3790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm life plankton eye soin contour yeux régénérant, année après année, la matrice cutanée et le réseau de collagène se dégradent ; apparaissent alors ce qu’on appelle des micro-rides. l’affinement de la peau du contour de l’oeil accélère le processus de vieillissement cutané et se traduit par l’apparition de rides et de cernes, une perte d’élasticité et un teint terne. <br />Le soin régénérant life plankton eye agit en profondeur pour prévenir la formation de ces micro-rides. il redessin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272360037</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ee9cc5e7f3c3f4e5f825877f032ff464f6524ce75e8f256d66b2874252b3540 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm masque flash Aqua Glow 31g ]]></title>
<g:id>fbf5a82c-f807-4927-90c3-0b5a4a2b25c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-masque flash aqua glow 31g?fbf5a82c-f807-4927-90c3-0b5a4a2b25c7 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Aqua Glow Flash Mask procure une hydratation intense à la peau. Grâce à une combinaison puissante de complexe de vitamines et d'eau de Plancton de VieTM, la peau est plus éclatante. Ce masque tissu effet "seconde peau" régénère votre peau et lui rend tout son éclat naturel., Aqua Pure Flash Mask fait parti d'un trio de masques hydratants en tissu, les Aqua Flash Masks, conçus pour donner un flash d'hydratation à votre peau. Pour les jours où votre peau en a le plus besoin, associez votr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273010092</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/56a6b31cda5ebf8f8f6dcb58087c333efc2035cd0d1b0be7f60130fb60ea6e14 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm masque flash Aqua Pure 31g ]]></title>
<g:id>2a88e31d-9a1a-4272-adbf-17b87a43fb4c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-masque flash aqua pure 31g?2a88e31d-9a1a-4272-adbf-17b87a43fb4c ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec son effet "seconde peau", <span>Aqua Pure Flash Mask</span> procure une hydratation intense de la peau.<br />Grâce à une combinaison d'Acide Salicylique et de probiotique de Plancton de VieTM, la peau parait plus saine après une seule application.<br />Un seul masque tissu suffit pour régénérer profondément et affiner votre grain de peau.<br />Les pores paraissent resserés, moins visibles et votre peau semble purifiée et plus fraîche.</p>
<p><span> </span></p>
<p>Ingrédients clés:<br />C ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273010115</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2ced31143945b52cccb42eff41316d4249dcd10d20a6dcfd9eb135e29c66f91 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm masque flash aqua bounce 35g ]]></title>
<g:id>e0d10fc9-1a6c-4346-8c5a-b15ab36844e5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-masque flash aqua bounce 35g?e0d10fc9-1a6c-4346-8c5a-b15ab36844e5 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Aqua Bounce Flash Mask procure une hydratation intense de la peau. Grâce à une combinaison d'Acide Hyaluronique et d'eau de Plancton de VieTM, la peau parait repulpée. Ce masque tissu effet "seconde peau" régénère votre peau et la rend plus souple, plus éclatante.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614273010108</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25b61f95e85ae82d70bd7b189f4c57c1ab704bc4cc22fa0835e0cb4a780b9b24 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm sun after crème nacrée corps 200ml ]]></title>
<g:id>c7bb9dfe-effc-4244-ac2b-dc0198ed39f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-sun after crème nacrée corps 200ml?c7bb9dfe-effc-4244-ac2b-dc0198ed39f5 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Illuminez votre bronzage avec cette crème nacrée hydratante qui donnera un éclat délicieusement nacré à votre peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614270202148</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c2b23001ca175d1d29c1eed22dc39e789ab77b0783f1b3c85fd3296c753c1b7 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotherm waterlover sun mist spf30 brume solaire invisible 200ml ]]></title>
<g:id>2598cf62-d4e5-4862-ad62-51b3269abb36</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotherm-waterlover sun mist spf30 brume solaire invisible 200ml?2598cf62-d4e5-4862-ad62-51b3269abb36 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biotherm waterlover sun mist spf30 brume solaire invisible protège votre peau, respectez les oceans.</p>
<p></p>
<p>Ses filtres résistants à l’eau protègent votre peau des rayons solaires les plus agressifs (uva &amp; uvb). Avec ses nutriments réparateurs, votre peau est prête pour profiter entièrement de l’été.</p>
<p></p>
<p>La base formule de la brume solaire waterlover est biodégradable à 99% avec une combinaison de filtres fps plus respectueuses de la biodiversité aquatique.<br />Le pack ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614272459052</g:gtin>
<g:brand><![CDATA[ BIOTHERM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4db57ed2f7df396578988d2c809e90ba17cb3332f6b9f0e84bbf4cc1301c2d4b ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotrue Solution Multifonctions Lot de 3 x 300 ml ]]></title>
<g:id>14a6566b-2990-46fe-9eb5-593862885b27</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotrue-solution multifonctions lot de 3 x 300 ml?14a6566b-2990-46fe-9eb5-593862885b27 ]]></link>
<g:price><![CDATA[ 2799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bausch + Lomb Biotrue Solution Multifonctions Lot de 3 x 300 ml est une solution qui hydrate, nettoie, élimine les protéines, décontamine, rince et conserve les lentilles de contact. Elle élimine 99,9% des bactéries.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7391899851686</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/800175e88661ba1709931120f30b8e02a48ae8a440068af23bdb119a1ac4e5b1 ]]></g:image_link>
<g:product_type><![CDATA[ CONTACTOLOGIE ET SOINS DES YEUX ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biotrue solution multifonction pour lentilles flacon 300ml ]]></title>
<g:id>afab2325-4cc7-485a-a88a-b95dce6efa9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biotrue-solution multifonction pour lentilles flacon 300ml?afab2325-4cc7-485a-a88a-b95dce6efa9f ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>La solution multifonctions Biotrue™ est indiquée pour le nettoyage quotidien, l’élimination des protéines, le rinçage, la conservation et la décontamination chimique des lentilles de contact souples à usage quotidien, y compris les lentilles de contact en silicone hydrogel, conformément aux recommandations de votre spécialiste.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7391899850719</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d15489ae1d244b52635065614e0a633bb6a42e27161a23b72e5baf71f5f1b1fb ]]></g:image_link>
<g:product_type><![CDATA[ CONTACTOLOGIE ET SOINS DES YEUX ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biovène Masque Anti-fatigue Yeux  ]]></title>
<g:id>ee037655-c82d-4c7b-9f8c-b2687abcaa7b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biov-ne masque anti-fatigue yeux ?ee037655-c82d-4c7b-9f8c-b2687abcaa7b ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Masque contour des yeux ultra-lumineux et décongestionnant, enrichi en sérum à la vitamine C, au pamplemousse et à l'acide hyaluronique. Convient à tous les types de peau présentant des cernes, des poches et des rides. À conserver au réfrigérateur pour un effet fraîcheur optimal. Fabriqué de manière responsable en Europe avec les ingrédients naturels et cliniques que vous appréciez, et sans ceux que vous pourriez ignorer.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8436575096124</g:gtin>
<g:brand><![CDATA[ BIOVENE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02c7d53509e8cf81b56fa0ba0096f1528d4980f4acedeb17dbabe0b69d56f3ec ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biovène Masque Anti-âge Yeux  ]]></title>
<g:id>a4733e77-800d-4e45-bf78-f2093b432d6b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biov-ne masque anti-âge yeux ?a4733e77-800d-4e45-bf78-f2093b432d6b ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Masque contour des yeux décongestionnant et apaisant, enrichi en sérum au rétinol, aux peptides et à l'acide hyaluronique anti-âge, pour un regard revitalisé et unifié. Convient à tous les types de peau présentant des rides, des cernes et des poches sous les yeux. À conserver au réfrigérateur pour un effet fraîcheur optimal. Fabriqué de manière responsable avec les ingrédients naturels et cliniques que vous appréciez, sans ceux que vous pourriez ignorer.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8436575096131</g:gtin>
<g:brand><![CDATA[ BIOVENE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7cc271b0b633b212bc09768242c56d03fc02187f83a36d8472de69f4b620cfd ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biovène Masque Hydratant Lèvres  ]]></title>
<g:id>00416d5e-eddc-4281-b6b5-231f56f87223</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biov-ne masque hydratant lèvres ?00416d5e-eddc-4281-b6b5-231f56f87223 ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Masque à lèvres ultra-hydratant et apaisant, enrichi en sérum à l'acide hyaluronique ultra-hydratant, à la pastèque et à la centella asiatica (CICA) pour une peau plus lisse, plus douce, et un look plus séduisant. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8436575096148</g:gtin>
<g:brand><![CDATA[ BIOVENE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/312e3656fa34cc8dfa8b0ba3074cac03752d55a10730c847b3ce245cdda257b3 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biovène Masque Hydratant Yeux  ]]></title>
<g:id>49083880-41cc-4fef-aec0-98deb5a18066</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biov-ne masque hydratant yeux ?49083880-41cc-4fef-aec0-98deb5a18066 ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Masque contour des yeux intensément nourrissant et rafraîchissant, enrichi en sérum à l'acide hyaluronique ultra-hydratant, à l'aloe vera et à la vitamine E. Convient à tous les types de peau présentant des poches, des rides et des cernes. À conserver au réfrigérateur pour des bienfaits rafraîchissants. Fabriqué de manière responsable avec les ingrédients cliniques et naturels que vous appréciez, et sans ceux que vous pourriez ne pas aimer.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8436575096117</g:gtin>
<g:brand><![CDATA[ BIOVENE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c7a66c2bf9e39ca30e571a0adc774816f5dec4872fb6694ed88b84f91d6b1943 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BledilaitBlédigest 2ème Âge de 6 à 12 Mois 820 g ]]></title>
<g:id>76d20064-6da4-48fb-877a-b9f2f26559f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bledilaitbl-digest 2ème Âge de 6 à 12 mois 820 g?76d20064-6da4-48fb-877a-b9f2f26559f0 ]]></link>
<g:price><![CDATA[ 1430.00 EUR ]]></g:price>
<description><![CDATA[ <p>Blédina Blédilait Blédigest 2ème Âge de 6 à 12 Mois 820 g est une formule infantile épaissie à l'amidon développée par des experts en nutrition avec tout ce dont bébé a besoin dans le cadre d'une alimentation diversifiée, conformément à la réglementation, comme toutes les préparations de suite.</p>
<p>Cette formule contient du DHA (Omega 3), des vitamines A, C et D, des fibres FOS/GOS. Elle contribue au bon fonctionnement du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091511751</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c98efa53d1ac60ae3a45f48eeb821023cd4622c56746ca2e9132c382a01bdafa ]]></g:image_link>
<g:product_type><![CDATA[ LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blephagel Flacon Pompe 30ml ]]></title>
<g:id>bd02bea5-8251-4de4-975a-6c4c1fd82dc0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/blephagel-flacon pompe 30ml?bd02bea5-8251-4de4-975a-6c4c1fd82dc0 ]]></link>
<g:price><![CDATA[ 1050.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoyage et hygiène quotidienne des paupières et des cils. Mucus conjonctival, squames.</p>
<p class="p1">Sans parabène, sans parfum, non gras, nettoie de façon adéquate les paupières, le mucus, les squames qui encombrent la racine des cils.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662042001949</g:gtin>
<g:brand><![CDATA[ THEA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e8ea1d0b49e939c40942fa56ab77ff32271daadc32614cfedcf070306e1c2dd ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BloXaphte Gel Adulte 15 ml ]]></title>
<g:id>82a053ba-8e20-4c7d-aaf8-e58a2adf4bdb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bloxaphte-gel adulte 15 ml?82a053ba-8e20-4c7d-aaf8-e58a2adf4bdb ]]></link>
<g:price><![CDATA[ 660.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>L'aphte est une manifestation inflammatoire caractéristique de l'apparition de lésions ulcéreuses de la cavité buccale s'accompagnant d'une douleur locale.</p>
<p>Bausch + Lomb BloXaphte Gel Adulte 15 ml, de part sa formulation, permet la réduction rapide de la douleur grâce à son effet isolant et son pouvoir hydratant. Il favorise la guérison des ulcères aphteux et réduit leur nombre.</p>
<p>Sans alcool.</p>
</div>
</d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000002</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a14e9ad5894403b7dee99ab9071e003204ca5452e6709064184581fe8731017 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bloxang Topic Pommade Hémostatique 30 g ]]></title>
<g:id>be635f5d-7254-49a9-bb84-c8c1faa7cb1f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bloxang-topic pommade hémostatique 30 g?be635f5d-7254-49a9-bb84-c8c1faa7cb1f ]]></link>
<g:price><![CDATA[ 530.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bausch + Lomb Bloxang Topic Pommade Barrière Hémostatique 30 g est une pommade barrière hémostatique indiquée dans l'arrêt et la prévention des épisodes hémorragiques de la peau et des muqueuses tels que : épistaxis d'origine physiologique ou traumatique, saignements des gencives.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401051621676</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b9ff580e84d3fcc30024ce719694347e9191f81fbc05d740ab42fe9ddbec12d ]]></g:image_link>
<g:product_type><![CDATA[ Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bloxaphte gel junior 15 ml ]]></title>
<g:id>30478791-6472-4f22-a5b6-ad1882a5105b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bloxaphte-gel junior 15 ml?30478791-6472-4f22-a5b6-ad1882a5105b ]]></link>
<g:price><![CDATA[ 660.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bloxaphte junior</strong> est un dispositif médical qui se présente <strong>sous forme de gel</strong>. Il s’applique directement sur les aphtes et les autres petites lésions de la cavité buccale, y apportant un <strong>soulagement immédiat</strong>.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000019</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78ded97d9448347fe0a0462844c5e755be2ec8a8524444c0ca120b252e28ee54 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bloxaphte spray adulte 20 ml ]]></title>
<g:id>afce0d02-7732-4bff-b7f9-bf10c73f1c74</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bloxaphte-spray adulte 20 ml?afce0d02-7732-4bff-b7f9-bf10c73f1c74 ]]></link>
<g:price><![CDATA[ 660.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bloxaphte</strong> est un dispositif médical présenté sous forme de spray qui est généralement destiné aux personnes montrant des<strong> lésions buccales</strong>, telles que des <strong>aphtes</strong>, des morsures ou des petites coupures dues au port d’un appareil dentaire ou d’un dentier, mais aussi des lésions localisées au fond de la bouche, sur l’intérieur des gencives.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000033</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b89f2b43fa2f18d3945ae12530fb9861084e570d555e0f6a9ee1bdb4e5e43a0b ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bloxgel poussées dentaires 15 ml ]]></title>
<g:id>911dddd2-d50e-4919-b319-4b284eb66b10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bloxgel-poussées dentaires 15 ml?911dddd2-d50e-4919-b319-4b284eb66b10 ]]></link>
<g:price><![CDATA[ 640.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bloxgel</strong> se présente sous la forme d'un gel à appliquer directement sur les gencives de bébé, en massage, afin de soulager efficacement les douleurs dues aux poussées dentaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000040</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5db4b1eecb9f689ff569b0865bf64a75b7ac724e4c6d6c23d09db1b0472833cf ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blue Berry 60 Comprimés ]]></title>
<g:id>2d34b31e-9c02-4d41-bbd3-7ead043ea5f7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/blue-berry 60 comprimés?2d34b31e-9c02-4d41-bbd3-7ead043ea5f7 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le complément alimentaire BlueBerry de la marque New Nordic est 100% naturel et très fortement dosé en myrtilles suédoises.</p>
<p>L'efficacité de la myrtille est prouvée depuis de nombreuses années, en effet, elle a pour rôle d'améliorer la santé des yeux de manière générale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548184820</g:gtin>
<g:brand><![CDATA[ NEW NORDIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6fbe53b09f996d3c1c65e869b7869c9ab0690360559ef73d7420435c9300e01e ]]></g:image_link>
<g:product_type><![CDATA[ SANTÉ PREVENTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blue Berry Max 60 Comprimés ]]></title>
<g:id>ad043a32-67ca-4eab-98f4-cb519975e47d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/blue-berry max 60 comprimés?ad043a32-67ca-4eab-98f4-cb519975e47d ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>New Nordic Blue Berry Max 60 Comprimés est un complément alimentaire pour la vision afin de lutter contre la fatigue et la sécheresse oculaires. Il est idéal pour les fortes expositions aux écrans (ordinateur, télévision) et à la lumière bleue.</p>
<p>Les myrtilles et le Zinc contribuent à une vision normale, notamment par leur activité antioxydante.</p>
<p>Les myrtilles améliorent la microcirculation sanguine dans l'œil et l'adaptation des yeux aux changements de luminosité, ce qui contribue ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560167979</g:gtin>
<g:brand><![CDATA[ NEW NORDIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d70a90c54025adcf0a67dc2226b6aa8e7a4a502b1046067a8c79dd48fac6170a ]]></g:image_link>
<g:product_type><![CDATA[ SANTÉ PREVENTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédilait 1er âge 0-6 mois 800G ]]></title>
<g:id>5f951997-44ac-4e83-b708-01fccb4409ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dilait 1er âge 0-6 mois 800g?5f951997-44ac-4e83-b708-01fccb4409ef ]]></link>
<g:price><![CDATA[ 1335.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts en nutrition de Blédina ont développé Blédilait 1er âge : une formule qui accompagne bébé pas à pas, tout naturellement, dès sa naissance jusqu'à 6 mois, lorsqu'il n'est pas allaité, en complément ou en relais de l'allaitement.</p>
<p>Lait pour nourrissons, en poudre.</p>
<p>Le lait ne sera ni repris ni échangé pour des raisons sanitaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091439994</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/976580039e46b582913b7fbedc068c596ce23543029d2288688abb1b101a0d27 ]]></g:image_link>
<g:product_type><![CDATA[ LAIT DE CROISSANCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédilait Croissance - 900g ]]></title>
<g:id>a0b68e9a-6a26-4cf7-90e6-285a36fd42f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dilait croissance - 900g?a0b68e9a-6a26-4cf7-90e6-285a36fd42f3 ]]></link>
<g:price><![CDATA[ 1155.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez<b> Blédilait </b><span><span><b>Croissance +)</b></span><b> 3ème âge </b></span>qui accompagne votre bébé pas à pas, tout naturellement.</p>
<p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
<ul><li>Adapté aux besoins nutritionnels des bébés<span><strong> de 1 à 3 ans</strong></span></li>
<li>Contribue à répondre  aux besoins nutritionnels spécifiques du bébé</li>
<li>Contient du fer et de l'Omega 3 pour le bon développement cérébral de votre enfant, de la vitamine D et du calcium nécessaires à la croissance</li>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091553324</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5fc09693fd601856c558698d713b37e3157a89b4116841d0422232a66996a63 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédilait croissance+ 3 900g ]]></title>
<g:id>4a755967-ef00-423c-9029-c608ab3d67e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dilait croissance+ 3 900g?4a755967-ef00-423c-9029-c608ab3d67e6 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 12 mois.<br />Formules Croissance.<br />900 g</p>
<p>Le lait ne sera ni repris ni échangé pour des raisons sanitaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091553317</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3cc2bcc597165578923f83a1c2bb6dd40c3fea446c6d75a76b2123ce6381d28e ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina Blédilait 2ème Âge de 6 Mois à 1 An 800 g ]]></title>
<g:id>1854c96d-e13f-4bdb-88be-1a8d717353ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina blédilait 2ème Âge de 6 mois à 1 an 800 g?1854c96d-e13f-4bdb-88be-1a8d717353ac ]]></link>
<g:price><![CDATA[ 1210.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Laits de suite.<br />800g</p>
<p>Le lait ne sera ni repris ni échangé pour des raisons sanitaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091445230</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57e07d9ef997dd71e8a9012103e5313d2edcf7c8ef6fa8323db5a533fa97839b ]]></g:image_link>
<g:product_type><![CDATA[ LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina blédine blé & cacao 400g ]]></title>
<g:id>e68f4b23-0fc9-4149-96e4-53ec5a40f7d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina blédine blé & cacao 400g?e68f4b23-0fc9-4149-96e4-53ec5a40f7d3 ]]></link>
<g:price><![CDATA[ 345.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Céréales instantanées.<br />400 g</p>
<p>Blédina encourage l’allaitement maternel au moins jusqu’aux 6 mois de l’enfant en accord avec les recommandations de l’OMS. En effet, le lait maternel est l’aliment le mieux adapté aux besoins spécifiques des bébés. Par ailleurs, la réglementation interdit aux industriels de l’alimentation infantile de communiquer sur leurs laits pour nourrissons (0-6 mois). Consultez votre médecin.</p>
<p>Céréales instantanées adaptées à bébé. Comme n ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091339911</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32332e75c76d21041b4bedf0188f0d3f812814730e719bbd1c0a249ac73f8d8d ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina blédine blé & vanille 400g ]]></title>
<g:id>53dcdf37-0214-44d3-8786-b5b6c36226e5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina blédine blé & vanille 400g?53dcdf37-0214-44d3-8786-b5b6c36226e5 ]]></link>
<g:price><![CDATA[ 345.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Céréales instantanées.<br />400 g</p>
<p>Blédina encourage l’allaitement maternel au moins jusqu’aux 6 mois de l’enfant en accord avec les recommandations de l’OMS. En effet, le lait maternel est l’aliment le mieux adapté aux besoins spécifiques des bébés. Par ailleurs, la réglementation interdit aux industriels de l’alimentation infantile de communiquer sur leurs laits pour nourrissons (0-6 mois). Consultez votre médecin.</p>
<p>Céréales instantanées adaptées à bébé. Comme n ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091339645</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/242c7b102aec09398e888c97211ca305fa33c1ed7316df6d7548f609de63d688 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina blédine ma 1ère blédine nature 4-6 mois 250g ]]></title>
<g:id>d7dd1c68-cbd7-450f-a47c-f458482374f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina blédine ma 1ère blédine nature 4-6 mois 250g?d7dd1c68-cbd7-450f-a47c-f458482374f0 ]]></link>
<g:price><![CDATA[ 370.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 4/6 mois SAVEUR NATURE SANS GLUTEN<br />Céréales instantanées<br />250gr</p>
<p>Blédina encourage l’allaitement maternel au moins jusqu’aux 6 mois de l’enfant en accord avec les recommandations de l’OMS. En effet, le lait maternel est l’aliment le mieux adapté aux besoins spécifiques des bébés. Par ailleurs, la réglementation interdit aux industriels de l’alimentation infantile de communiquer sur leurs laits pour nourrissons (0-6 mois). Consultez votre médecin.</p>
<p>Céréales instantanée ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041090839993</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b2e9db94a06db0c5a1e4c2830212658e4b5183d2d9c1a0f4dc09365176e4c7d ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina blédine saveur biscuit 400g ]]></title>
<g:id>3bd65274-2e60-4563-bd8d-59b2424da764</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina blédine saveur biscuit 400g?3bd65274-2e60-4563-bd8d-59b2424da764 ]]></link>
<g:price><![CDATA[ 345.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Céréales instantanées.<br />400 g</p>
<p>Blédina encourage l’allaitement maternel au moins jusqu’aux 6 mois de l’enfant en accord avec les recommandations de l’OMS. En effet, le lait maternel est l’aliment le mieux adapté aux besoins spécifiques des bébés. Par ailleurs, la réglementation interdit aux industriels de l’alimentation infantile de communiquer sur leurs laits pour nourrissons (0-6 mois). Consultez votre médecin.</p>
<p>Céréales instantanées adaptées à bébé. Comme n ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091339928</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28eda6b770965b3fcab99ab90bb02ae191b0064878c630b1a359f6513c0a0f76 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots carottes petits pois poulet 2x200g ]]></title>
<g:id>63ace7b2-e05c-4af0-8181-65b31fb581d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots carottes petits pois poulet 2x200g?63ace7b2-e05c-4af0-8181-65b31fb581d1 ]]></link>
<g:price><![CDATA[ 330.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Plats de légumes, féculents et viandes/poissons.<br />Poids net : 2 x 200 g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091289773</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/961eb33a9cba7eacfd331ea72a42d3bf16ed02e9f6d1c93c3f3f2c93d2ba244c ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots haricots verts pommes de terre 2x130g ]]></title>
<g:id>9717ea78-f75c-49c0-a841-f6af6c630bc3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots haricots verts pommes de terre 2x130g?9717ea78-f75c-49c0-a841-f6af6c630bc3 ]]></link>
<g:price><![CDATA[ 210.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 4/6 mois.<br />Plats de légumes.<br />Poids net : 2 x 130 g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091303394</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c87c8836ec7a93af8e1240e51b8846c297165d94d76372330bf9ec7781c2e28 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots pommes bananes kiwis 2x130g ]]></title>
<g:id>d630b7e1-5d50-4a0c-b9d1-b5ad89b40198</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots pommes bananes kiwis 2x130g?d630b7e1-5d50-4a0c-b9d1-b5ad89b40198 ]]></link>
<g:price><![CDATA[ 215.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Purées de fruits.<br />Poids net : 2 x 130 g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091289643</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2bff550a75c1909636c40b8d2943602fc51928a45bc36c69106d8a4fef3db8b7 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots pommes fraises 2x130g ]]></title>
<g:id>35474e92-161c-4e2f-aca3-edd4745bfe18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots pommes fraises 2x130g?35474e92-161c-4e2f-aca3-edd4745bfe18 ]]></link>
<g:price><![CDATA[ 215.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Purées de fruits.<br />Poids net : 2 x 130 g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091303332</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ba5ab4f99001a7e42c0b865001f483aebbcc1a884e1de5505fc9f0068a6bf3c ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots pommes nectarines bananes 2x130g ]]></title>
<g:id>178a901c-01bc-41e7-8f27-5fa2c4fc9dcf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots pommes nectarines bananes 2x130g?178a901c-01bc-41e7-8f27-5fa2c4fc9dcf ]]></link>
<g:price><![CDATA[ 215.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Purées de fruits.<br />Poids net : 2 x 130 g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091303028</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/947c38de43c6e850d9ea5d342a03d79c59145803bd4be1f196ef5393d0da4446 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots pommes pruneaux 2x130g ]]></title>
<g:id>f746d311-83ea-4386-9a2d-b9f07d5d18e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots pommes pruneaux 2x130g?f746d311-83ea-4386-9a2d-b9f07d5d18e6 ]]></link>
<g:price><![CDATA[ 215.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 4/6 mois.<br />Purées de fruits.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091302236</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/84818a230fbf9538d1f3e946f71904412a3956974659b1fff1e765749ae5979d ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Blédina les récoltes bio pots tomates riz veau 2x200g ]]></title>
<g:id>a9e187f7-8a05-48fd-831b-0e8b4d008684</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bl-dina les récoltes bio pots tomates riz veau 2x200g?a9e187f7-8a05-48fd-831b-0e8b4d008684 ]]></link>
<g:price><![CDATA[ 315.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dès 6 mois.<br />Plats de légumes, féculents et viandes/poissons.<br />Poids net : 2 x 200 g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3041091289681</g:gtin>
<g:brand><![CDATA[ BLÉDINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ed213b9c113f3fa7faeebd90e421f2c5c0d533c8260164d77405cd7c3084002f ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bodyguard Anti-moustiques Bébé parfume 100ml ]]></title>
<g:id>2b356cf1-bb4c-43c7-bfe8-45e98a8704fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bodyguard-anti-moustiques bébé parfume 100ml?2b356cf1-bb4c-43c7-bfe8-45e98a8704fd ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>BODYGUARD Antimoustique parfumé est un répulsif à action immédiate destiné à protéger contre les piqûres de moustiques, notamment les moustiques pouvant transmettre le paludisme ( Anopheles), le chikungunya, la dengue, la fièvre jaune ou le zika (Aedes albopictus- communément appelé « moustique tigre » ou Aedes aegypti), ou encore la fièvre du Nil Occidental (Culex).</span><span>BODYGUARD Antimoustique parfumé est un répulsif à action immédiate destiné à protéger contre les piqûres de m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760139569737</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/229da1cb138e1833ee1065819d3bda10ba10aa9961769885cc8766defea4456c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Apis  Mellifica 15ch 4g ]]></title>
<g:id>701d7441-acf5-443f-be4c-aaf7b8c2b373</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-apis  mellifica 15ch 4g?701d7441-acf5-443f-be4c-aaf7b8c2b373 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apis Mellifica est un médicament homéopathique des laboratoires Boiron sous forme de tubes granules. Il est conseillé pour calmer les douleurs inflammatoires liées à une piqûre ou à une brûlure (y compris les coups de soleil). Il est également recommandé en cas de conjonctivite accompagnée d'œdème inflammatoire (gonflement) et en cas d'otites. Enfin, il est indiqué pour soigner les maux de gorge, l'angine et les orgelets (infection de la racine du cil). </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300627933</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9490e88f126decffd92ae397e9ba4c4ae34134e708f2aad54877b183aaf1ed29 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Apis mellifica 15CH Homéopack 3 tubes granules ]]></title>
<g:id>66fa871c-5bab-4c91-83e0-67e3d7c32e61</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-apis mellifica 15ch homéopack 3 tubes granules?66fa871c-5bab-4c91-83e0-67e3d7c32e61 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apis Mellifica est un médicament homéopathique des laboratoires Boiron sous forme de tubes granules.</p>
<p>Il est conseillé pour calmer les douleurs inflammatoires liées à une piqûre ou à une brûlure (y compris les coups de soleil). Il est également recommandé</p>
<p>en cas de conjonctivite accompagnée d'œdème inflammatoire (gonflement) et en cas d'otites.</p>
<p>Enfin, il est indiqué pour soigner les maux de gorge, l'angine et les orgelets (infection de la racine du cil).</p>
<p></p>
<p></p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300629050</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d761e6d22c345c02a432135f3a304c53439fb3f2988f39b22e17417b523cd45 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Arnica Montana 30 CH Granules ]]></title>
<g:id>00351f12-10a6-48b3-8624-2ff27cd9764a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana 30 ch granules?00351f12-10a6-48b3-8624-2ff27cd9764a ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arnica montana tube de granules est un médicament homéopathique utilisé en traumatologie, soit les chocs, plaies, accidents et traumatismes de toute nature, ecchymoses.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300758101</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/519e1f06fb377221e30d8245f8387072d31208001c7e637d10df71547e3ac07a ]]></g:image_link>
<g:product_type><![CDATA[ Douleurs / Coups ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Arnica Montana 9Ch en tube Granule ]]></title>
<g:id>288166e7-5348-473d-adc5-15d7ed0b1fa5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana 9ch en tube granule?288166e7-5348-473d-adc5-15d7ed0b1fa5 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Granules homéopathiques qui permet de réduire la douleur relative à une piqure d'insecte.</p>
<p class="p1">Possédant des propriétés immunologiques, Arnica Montana constitue aussi un remède pour certains états infectieux avec adynamie et les affections dues à la fragilité du derme.  </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300758163</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c02153b2627ee5f9ffec26ad31fc5c8a9f0950e0896dbfe03bd28e8b8f79b7c7 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Arnica Montana Granules 7CH 4g ]]></title>
<g:id>85811ccb-3675-42d5-b507-f98ce59056e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana granules 7ch 4g?85811ccb-3675-42d5-b507-f98ce59056e1 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>ARNICA MONTANA 7CH Tube Granules est un médicament homéopathique utilisé en traumatologie, en cardiologie, et dans les troubles du comportement. Les granules d'ARNICA MONTANA 7CH s'utilisent : *En traumatologie : en cas de surmenage musculaire professionnel ou sportif, ecchymoses, d'hématomes, de tendinites, d'entorses, de luxations, de fractures, de lombalgies d'effort. En cas de prévention d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300758149</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f46b9d4a1554d12f10dcbc1044c7161aa3ea9070a292d2b9ed72135aa677b49 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Arnica montana 9CH - 3 tubes granules ]]></title>
<g:id>fca7f213-82f8-4163-b01f-59432c4d66db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana 9ch - 3 tubes granules?fca7f213-82f8-4163-b01f-59432c4d66db ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Arnica Montana appelée l'arnica des montagnes est une plante réputée pour ses vertus anti-inflammatoires participant à réduire les hématomes et les</span></p>
<p><span> chocs traumatiques tels que les coups et les bosses. </span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300759061</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3ea4632a906db1c04bf564dc0b78d2333f05dcf0c2230aebba10499880dc11c ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Arnica montana 9CH Homéopack 4 doses ]]></title>
<g:id>29afdc13-6ede-4cad-a03c-1f817b36226f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana 9ch homéopack 4 doses?29afdc13-6ede-4cad-a03c-1f817b36226f ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Arnica Montana</span><span> appelée l'arnica des montagnes est une plante réputée pour ses vertus anti-inflammatoires participant à réduire les hématomes et les</span></p>
<p><span> chocs traumatiques tels que les coups et les bosses. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300759085</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6669252ab08ea750d0211f8c675a57574536bde7fc2e4201ceceee9f0732a3cf ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Arnicrème 70g ]]></title>
<g:id>77e91bfe-2eea-437d-b095-5aa6e41709c3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnicrème 70g?77e91bfe-2eea-437d-b095-5aa6e41709c3 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Boiron Arnicrème 70 g à la texture légère et fluide, formulée à base de plante fraîche d'arnica montana (7%) reconnue pour ses propriétés apaisantes</p>
<p>depuis plusieurs années est idéale pour favoriser la récupération musculaire.</p>
<p>Après tout type d'effort physique, il suffit de masser les zones particulièrement sollicitées en cas de fatigue musculaire ou de sensation de courbatures.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712007493</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47d5dcd7b0589d72a7c32ccebd0abb9276ff2d7be88b4f824175ebf404a89124 ]]></g:image_link>
<g:product_type><![CDATA[ DOULEURS ARTICULAIRES ET MUSCULAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Dapis Gel 40g ]]></title>
<g:id>ff56838f-768c-4842-9037-0508a77e3b89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-dapis gel 40g?ff56838f-768c-4842-9037-0508a77e3b89 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <div id="description">
<div>Boiron Dapis Gel 40 g est un gel apaisant pour les petites démangeaisons qui convient à toute la famille dès 1 an.</div>
<div>
<div>
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p><br /><br /></p>
</div>
</div>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579221747</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2df7e404fe9ff9505782920a11e43f4aac8d35559d23fd6af3e27fba4726d4c7 ]]></g:image_link>
<g:product_type><![CDATA[ MOUSTIQUES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Dapis Roll On Repulsif Anti Moustiques 40ml ]]></title>
<g:id>95ed3656-d06b-46dc-8290-611e2ed858fe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-dapis roll on repulsif anti moustiques 40ml?95ed3656-d06b-46dc-8290-611e2ed858fe ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p class="mb-4">Le roll-on anti-moustiques Dapis®* est un produit répulsif dont la substance active est l<span>'huile essentielle d’eucalyptus citronné</span> (100% végétale BIO), qui <span>éloigne efficacement les moustiques**</span> <span>pendant 4 heures***</span> en zones tempérées.<br />Formulé avec un<span> minimum d'ingrédients</span>, le roll-on contient de<span> l'huile essentielle d’eucalyptus citronné et de l'huile d'amande douce</span>.</p>
<ul class="mb-4 list-outside pl-4 list-disc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712010363</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2809bc846c7f39c193a610df2ce6e531a365f0b1ef3f7a80876ee73bbe2b47d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Dapis stick 3ml ]]></title>
<g:id>37ba8055-f622-4237-809a-2de81387a319</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-dapis stick 3ml?37ba8055-f622-4237-809a-2de81387a319 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le stick Dapis Boiron 3 ml à bille contient une solution apaisante contre les piqures d'insecte. </span></p>
<p><span>Emportez ce tube applicateur de 5 cm partout.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577473346</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/877f5f2ce489e359d3c991311a3ea8d271ac3dbe5e020682f22f6398cb129f85 ]]></g:image_link>
<g:product_type><![CDATA[ MOUSTIQUES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Dermoplasmine 2 sticks ]]></title>
<g:id>661b6f8c-c569-4a83-a2ed-9c1a68d0d496</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-dermoplasmine 2 sticks?661b6f8c-c569-4a83-a2ed-9c1a68d0d496 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Stick lèvres hydratant et apaisant pour les lèvres sèches et fragilisées</span><br /><span>99,9% d’ingrédients d’origine naturelle (selon norme ISO 16128)</span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712007929</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/664a28d17f8dc8778779c683b62266d4ed556d044520537b510ca3fa99f1c237 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Dermoplasmine Baume lèvres au calendula 2.5g ]]></title>
<g:id>d9b62982-39cb-4e79-8fdc-4b49c8a4d5d7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-dermoplasmine baume lèvres au calendula 2.5g?d9b62982-39cb-4e79-8fdc-4b49c8a4d5d7 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Boir</span><span>on Dermoplasmine Baume lèvres au Calendula</span><span> offre une </span><span>triple action</span><span> sur les lèvres : il les répare, les nourrit et les apaise. Il va aussi permettre de les protéger des agressions extérieures. Il est idéal pour les lèvres souffrant de sécheresse, irritées, sensibles et marquées par les gerçures. </span></p>
<p><br /><span>La </span><span>peau des lèvres</span><span> cumule plusieurs désavantages : elle est presque constamment exposé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712007936</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ea9d2a5e9c88de3ad4d121febf949519c4945de5577f78c67c7c5d5f17827de ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Folliculinum Dose 15CH 4g ]]></title>
<g:id>958a624f-5da7-4d04-b553-d5e15b3d825d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-folliculinum dose 15ch 4g?958a624f-5da7-4d04-b553-d5e15b3d825d ]]></link>
<g:price><![CDATA[ 275.00 EUR ]]></g:price>
<description><![CDATA[ <p>FOLLICULINUM 15CH Tube Dose est un médicament homéopathique utilisé en gynécologie. FOLLICULINUM DOSE 15CH s'utilise : *En gynécologie : pour régulariser les cycles menstruels des jeunes filles. Il est également prescrit pour traiter les syndromes prémenstruels comme la migraine, les douleurs mammaires et les crampes abdominales chez la femme. Il soulage les règles douloureuses et abondantes. Ce médicament est aussi prescrit pour traiter les symptômes de la ménopause comme les palpitations, l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400303152227</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1cb9732ed69a4da058f07456e4adf227a01e3beb1fcbc6c61c56bffd7bb58cc8 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Gelsemium Granules 15CH 4g ]]></title>
<g:id>28f81cdd-7cb6-4636-aef6-e06678c87b92</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-gelsemium granules 15ch 4g?28f81cdd-7cb6-4636-aef6-e06678c87b92 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Les Granules de GELSEMIUM 15CH s'utilisent :</p>
<p>En cas de grippe et de symptômes grippaux, lorsque le malade est prostré, avec des tremblements</p>
<p>intenses, un visage rouge, des céphalées, des courbatures et une absence de soif.</p>
<p>En cas de céphalée ou de migraine. En cas de trac (caractérisé par une obnubilation, des troubles de la mémoire, des tremblements, une diarrhée, ou</p>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400303337938</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1cb9732ed69a4da058f07456e4adf227a01e3beb1fcbc6c61c56bffd7bb58cc8 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Gelsemium Granules 5CH 4g ]]></title>
<g:id>0f3deb39-5031-4590-a123-6f9fb1b97bc9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-gelsemium granules 5ch 4g?0f3deb39-5031-4590-a123-6f9fb1b97bc9 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Granules de GELSEMIUM 5CH s'utilisent : *En cas de grippe et de symptômes grippaux, lorsque le malade est prostré, avec des tremblements intenses, un visage rouge, des céphalées, des courbatures et une absence de soif. *En cas de céphalée ou de migraine. *En cas de trac (caractérisé par une obnubilation, des troubles de la mémoire, des tremblements, une diarrhée, ou par une émission d'urine très fréquente mais peu abondante engendrée par les émotions). *En cas d'anxiété (on retrouve alors ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400303338126</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Homeodent Soin première dents 50 ml ]]></title>
<g:id>f22e2a7f-ff3e-4c4a-b414-1b6221049f98</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-homeodent soin première dents 50 ml?f22e2a7f-ff3e-4c4a-b414-1b6221049f98 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gel dentifrice arôme fraise/framboise</p>
<p>Tube de 50 ml</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712008490</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b2bb27bc7715a3fbfa8282509023c0143aa0c17575088be468e71d9fcc187df ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Homéodent soin blancheur arôme chlorophylle 75 ml ]]></title>
<g:id>8ed45a33-e8f5-48cb-bc10-ce47db34cb92</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-homéodent soin blancheur arôme chlorophylle 75 ml?8ed45a33-e8f5-48cb-bc10-ce47db34cb92 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p class="mb-4">Grâce à sa formule unique, au fluor et aux extraits de plantes soigneusement sélectionnées, <span>HOMEODENT® Soin blancheur</span> aide à retrouver la blancheur naturelle des dents, avec un effet protecteur sur l'émail.</p>
<p class="mb-4">Contient plus de 95% d'ingrédients d'origine naturelle selon la norme ISO 16128.</p>
<p class="mb-4">Arôme chlorophylle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712008575</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/68a89a1f7e9f8733d61940a59fa19863ce4bac98d285d3432197cfb9b25949b0 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Ignatia Amara 9CH Granules 4g ]]></title>
<g:id>6ba67be4-2b7b-466b-b18e-44d6c2948506</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-ignatia amara 9ch granules 4g?6ba67be4-2b7b-466b-b18e-44d6c2948506 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <div class="col-12 prod-desc">
<p>Ignatia amara tube de granules est un médicament homéopathique. Il est utilisé dans les troubles du comportement tels que le trac, l'anxiété, mal des transport, nausées de la grossesse, insomnies et dépressions nerveuses réactionnelles. spasmophilie, spasmes du sanglot. </p>
<p></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400303848168</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5b1dd487e163006ecd446edc59c4a1e8bb3cf1571af79595aae5de23d7a7e0d ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Mag'300+ fatigue générale 160 comprimés ]]></title>
<g:id>5ee46259-1d14-4ae5-8abe-651529ed2be5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-mag'300+ fatigue générale 160 comprimés?5ee46259-1d14-4ae5-8abe-651529ed2be5 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Magnésium 300+ est un complément alimentaire qui combine 2 magnésiums complémentaires : un sel de magnésium organique (glycérophosphate) et un sel de magnésium riche en magnésium élément (carbonate) pour un apport quotidien optimal. Le magnésium et la vitamine B6 contenus dans Magnésium 300+ contribuent à réduire la fatigue et au fonctionnement normal du système nerveux. Le magnésium contribue également à une fonction musculaire normale.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712008124</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d932a616cebce2f2a277d0779f4a9aa174f2d2da9610439f5e70d160b1ef358 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Nux Vomica 9CH Tube Granules 4g ]]></title>
<g:id>0ddb9363-2f81-4c46-8f90-950f04af837f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-nux vomica 9ch tube granules 4g?0ddb9363-2f81-4c46-8f90-950f04af837f ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>NUX VOMICA 9CH Tube Granules est un médicament homéopathique habituellement utilisé en cas de coliques chez les nourrissons, en cas de rhume</p>
<p>survenant après un refroidissement ou de rhinites allergiques, en cas de crises hémorroïdaires avec démangeaisons et pour prévenir des effets</p>
<p>provoqués par une consommation excessive et occasionnelle d'aliments ou d'alcool. Les Granules de NUX VOMICA 9CH s'utilisent :</p>
<p>En cas de colique chez le nourrisson.</p>
<p>En cas de rhume surve ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400305278161</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5b1dd487e163006ecd446edc59c4a1e8bb3cf1571af79595aae5de23d7a7e0d ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Rhus Toxicodendron 9 CH Granules 4g ]]></title>
<g:id>1943cd0b-39c0-4ec9-a288-d1896228ee2b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-rhus toxicodendron 9 ch granules 4g?1943cd0b-39c0-4ec9-a288-d1896228ee2b ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>RHUS TOXICODENDRON 9CH Tube Granules est un médicament homéopathique habituellement utilisé en cas d'eczéma, herpès labiaux, zona, douleurs rhumatismales, entorse, grippe, fatigue musculaire. Les Granules de RHUS TOXICODENDRON 9CH s'utilisent : Dans toutes les dermatoses érythémato-oedémateuses ou vésiculeuses, c'est-à-dire lorsque la peau est rouge, gonflée avec éventuellement la présence de vésicules : eczémas, herpès labiaux ou génitaux, zonas, acnés rosacées. En cas de douleurs rhumatisma ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400306318163</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5b1dd487e163006ecd446edc59c4a1e8bb3cf1571af79595aae5de23d7a7e0d ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron Thymuline 9 CH pack de 4 doses ]]></title>
<g:id>691adbfb-3b52-44f4-9d54-693ad8f36d8c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-thymuline 9 ch pack de 4 doses?691adbfb-3b52-44f4-9d54-693ad8f36d8c ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Thymuline 9CH dose est un médicament homéopathique du Laboratoire Boiron.</span></p>
<p><span>Ce pack </span><span>contient </span><span>4 tubes unidoses de Thymuline 9CH</span><span>.</span><br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309559082</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f5fe033ce67850dff121a0bf629ee3cd48ec79d9206dd0704974249983ff787 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron apis mellifica 9CH 4g ]]></title>
<g:id>79fe3f8c-e867-4fd4-99f5-be13a0d96769</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-apis mellifica 9ch 4g?79fe3f8c-e867-4fd4-99f5-be13a0d96769 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apis Mellifica est conseillé pour calmer les douleurs inflammatoires liées à une piqûre ou à une brûlure (y compris les coups de soleil).</p>
<p>Il est également recommandé en cas de conjonctivite accompagnée d'œdème inflammatoire (gonflement) et en cas d'otites.</p>
<p>Enfin, il est indiqué pour soigner les maux de gorge, l'angine et les orgelets (infection de la racine du cil).</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300628169</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/408aeda730d479a3130eb90099dd42257c0f8a6c6174654054a30c0411064d18 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron arnica montana 9ch dose 4g ]]></title>
<g:id>36f9e826-84c8-451c-bd5a-7334864ab682</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana 9ch dose 4g?36f9e826-84c8-451c-bd5a-7334864ab682 ]]></link>
<g:price><![CDATA[ 275.00 EUR ]]></g:price>
<description><![CDATA[ <p>ARNICA MONTANA DOSE 9CH s'utilise :</p>
<p>En traumatologie : en cas de surmenage musculaire professionnel ou sportif, ecchymoses, d'hématomes, de tendinites, d'entorses, de luxations, de</p>
<p>fractures, de lombalgies d'effort.</p>
<p>En cas de prévention des hémorragies du postpartum, de prolapsus après l'accouchement.</p>
<p>En cardiologie : en cas d'un coeur forcé, de cardiomégalie des sportifs, de dyspnée, d'insuffisance coronarienne.</p>
<p>Dans les troubles du comportement : en cas de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300752451</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1d98a11da5d34bdb5508c1b8e1b4458d82a303ccfec9afe4bebe0068276ad95 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron arnica montana doses 5CH 4g ]]></title>
<g:id>2087afbc-89a3-464e-bada-5395d47c59a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana doses 5ch 4g?2087afbc-89a3-464e-bada-5395d47c59a4 ]]></link>
<g:price><![CDATA[ 275.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mb-4">
<p>Arnica montana dose ,en granules,  est un médicament homéopathique des laboratoires Boiron utilisé en traumatologie  pour soigner les chocs, plaies, accidents, ecchymoses et traumatismes de toute nature. </p>
<p></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300752413</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron arnica montana granules 5CH 4g ]]></title>
<g:id>5bee209f-72fe-4b81-8661-4c14de05ca8e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-arnica montana granules 5ch 4g?5bee209f-72fe-4b81-8661-4c14de05ca8e ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>ARNICA MONTANA 5CH Tube Granules est un médicament homéopathique utilisé en traumatologie, en cardiologie, et dans les troubles du</p>
<p>comportement.  Les granules d'ARNICA MONTANA 5CH s'utilisent :</p>
<p>En traumatologie : en cas de surmenage musculaire professionnel ou sportif, ecchymoses, d'hématomes, de tendinites, d'entorses, de luxations, de</p>
<p>fractures, de lombalgies d'effort. En cas de prévention des hémorragies du postpartum, de prolapsus après l'accouchement.</p>
<p>En cardi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400300758125</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ Médicament ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron belladonna 9ch 4g ]]></title>
<g:id>89dbe7f0-4485-4bfc-8c1c-6706e9f906e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-belladonna 9ch 4g?89dbe7f0-4485-4bfc-8c1c-6706e9f906e3 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Boiron Belladonna 9CH Tube Granules est un médicament homéopathique du laboraroire Boiron.</p>
<p>Pour connaître les mises en garde, les précautions d'emploi, la composition, la posologie, les contre-indications, veuillez consulter la notice d'utilisation .</p>
<p>Si vos symptômes persistent, consultez votre médecin.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400301088160</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dc110a16d06f8b9e7b8c2508adf228065add9009380541ae1d5aeaae63fc53a2 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron belladonna granules 5CH 4g ]]></title>
<g:id>01c6ab30-3a1b-4a0c-be17-c61e3c04c79d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-belladonna granules 5ch 4g?01c6ab30-3a1b-4a0c-be17-c61e3c04c79d ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p dir="ltr"><span>Belladonna en granules est un médicament homéopathique du laboratoire Boiron.</span></p>
<p dir="ltr"><span>Dilutions : 4 ch</span></p>
<p><span> </span></p>
<h3><span id="docs-internal-guid-0a1218fd-7fff-1d92-a511-8e7006b4e9f9"></span></h3>
<h3></h3> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400301088122</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron chamomilla vulgaris 9ch 4g ]]></title>
<g:id>d04a8553-f85b-4a18-a840-3e747fab5504</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-chamomilla vulgaris 9ch 4g?d04a8553-f85b-4a18-a840-3e747fab5504 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Boiron Chamomilla Vulgaris 9ch Granules est un médicament homéopathique qui permet de soulager les douleurs des bébés au niveau des dents.</p>
<p>Sa formule à base de saccharose et de lactose ainsi que de chamomilla vulgaris, utilisée en général en cas de troubles liés aux poussées dentaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400301938168</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3542160b60476d6f75ebe8b7109cb901e96335c95cb9014afb11e1bfff7be337 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron cuprum metallicum 9CH 4g ]]></title>
<g:id>beb7b2db-80a7-4f6f-aec4-2bc533080f3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-cuprum metallicum 9ch 4g?beb7b2db-80a7-4f6f-aec4-2bc533080f3c ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce médicament est recommandé pour les personnes ayants facilement des crampes qui apparaissent et disparaissent facilement, des diarrhées aqueuses sanguinolentes, nausées et vomissements en buvant de l'eau froide, toux quinteuse et asthme soulagée avec de l'eau froide.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400302558167</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5b1dd487e163006ecd446edc59c4a1e8bb3cf1571af79595aae5de23d7a7e0d ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron cuprum metallicum granules 5CH 4g ]]></title>
<g:id>2c23fe7c-253a-4453-bb25-a74d05cb03a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-cuprum metallicum granules 5ch 4g?2c23fe7c-253a-4453-bb25-a74d05cb03a9 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p> </p>
<p>CUPRUM METALLICUM 5CH est un médicament homéopathique obtenu à partir du cuivre, un des rares métaux utilisés depuis longtemps par l'homme pour soigner de nombreuses pathologies. En effet, à faible dose, le cuivre est un oligo-élément indispensable, nécessaire à la formation de l'hémoglobine, qui transporte l'oxygène dans le sang. CUPRUM METALLICUM 5CH Tube Granules est habituellement utilisé pour soigner diverses pathologies de type spasmodique. Les Granules de CUPRUM METALLICUM 5CH ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400302558129</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron gelsemium granules 9CH 4g ]]></title>
<g:id>f91e73bf-f57b-43ea-8530-08fc487c2fe7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-gelsemium granules 9ch 4g?f91e73bf-f57b-43ea-8530-08fc487c2fe7 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gelsemium 9CH en granules de Boiron  conseillé en cas d’anxiété, de chocs affectifs ou émotionnels, ou d’insomniée liée à l’anxiété.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400303338164</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/95eaa663068ece5760eb67fbd6f213eebe84cc165e87247f3a4a16a245b9a0dc ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron ignatia amara granules 15CH 4g ]]></title>
<g:id>6a06821e-d7ba-4e68-8d48-eb344ab3e448</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-ignatia amara granules 15ch 4g?6a06821e-d7ba-4e68-8d48-eb344ab3e448 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p><br />IGNATIA AMARA 15CH Tube Granules est un médicament homéopathique habituellement utilisé en cas de troubles du comportement, stress, anxiété. Les Granules d'IGNATIA AMARA 15CH s'utilisent : *En cas de troubles du comportement : trac, anxiété, spasmophilie, troubles du sommeil, syndromes dépressifs réactionnels à un choc affectif avec une tendance à l'introversion (la personne ressasse ses soucis). *En cas de troubles fonctionnels occasionnés par des contrariétés, entraînant une réaction  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400303847932</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1cb9732ed69a4da058f07456e4adf227a01e3beb1fcbc6c61c56bffd7bb58cc8 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron influenzinum 15 CH 2021-2022 dose 4g ]]></title>
<g:id>df2f6cbc-3bb9-439a-a0af-711df5fc2e95</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-influenzinum 15 ch 2021-2022 dose 4g?df2f6cbc-3bb9-439a-a0af-711df5fc2e95 ]]></link>
<g:price><![CDATA[ 260.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p>Influenzinum en dose est un médicament homéopathique des Laboratoires Boiron. <br />Les doses d'influenzinum sont fabriquées chaque année à partir des souches du vaccin de la grippe de l'année en cours.Le vaccin anti-grippal est élaboré contre la grippe saisonnière. Influenzinum est l'unique médicament homéopathique qui connaît chaque année une modification. <br />Chaque dose est composée de 200 globules</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309092220</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47e21933fadebd4b65d88c625e1646b8d079267521dd6ceeb07b717c9391b9ef ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron influenzinum 15CH 2021-2022 tube granules 4g ]]></title>
<g:id>f3744f14-d139-4a87-8484-89cd1d30cc92</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-influenzinum 15ch 2021-2022 tube granules 4g?f3744f14-d139-4a87-8484-89cd1d30cc92 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Influenzinum en granules des Laboratoires Boiron, est un médicament homéopathique. </p>
<p>Les granules d'influenzinum sont élaborés à partir du vaccin contre la grippe fabriqué pour l'année. En effet, la formule du vaccin antigrippe varie tous les ans. Elle est établie en fonction des épidémies qui ont sévi à travers le monde.</p>
<p>tube de 80 granules.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309097935</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d1715a1c964c987996c17d96fa8bb6ab159d118f550a4f82907b82aa71c5951a ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron influenzinum 9CH  dose 4g ]]></title>
<g:id>61044080-1c77-4d0a-a434-a0addea57c5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-influenzinum 9ch  dose 4g?61044080-1c77-4d0a-a434-a0addea57c5e ]]></link>
<g:price><![CDATA[ 275.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Influenzinum</span><span> en dose est un médicament homéopathique des </span><span>Laboratoires Boiron</span><span>. Il est disponible en plusieurs dilutions, 5 CH, 7 CH, 9 CH, 15 CH et 30 CH. Ce sont des dilutions au centième, appelées Centésimales Hahnemanniennes en référence au Dr Samuel Hahnemann, fondateur de l'homéopathie. </span><br /><span>Les doses d'</span><span>influenzinum</span><span> sont fabriquées chaque année à partir des souches du vaccin de la grippe de l'année en cou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309092459</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/12468a244c2b36cb2d4d64bdf7a5b4d15dba83c44ae03d5821eb9d036e73b8ee ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron influenzinum 9CH tube Granules ]]></title>
<g:id>61f97ff7-e8cb-4f7a-b1ec-79faa94f7d32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-influenzinum 9ch tube granules?61f97ff7-e8cb-4f7a-b1ec-79faa94f7d32 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Influenzinum en granules des Laboratoires Boiron, est un médicament homéopathique. </p>
<p>Les granules d'influenzinum sont élaborés à partir du vaccin contre la grippe fabriqué pour l'année. En effet, la formule du vaccin antigrippe varie tous les ans. Elle est établie en fonction des épidémies qui ont sévi à travers le monde.</p>
<p>tube de 80 granules.</p>
<div id="kurato_extension_modal"></div>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309098161</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ca1fd3d54f64141845ebc94cae3ec6c381ad7c8cebe4a0247b79ec2ddc3aaa13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron ledum palustre 9ch 4g ]]></title>
<g:id>466b2c6c-dd5c-47c1-b510-0b1927ecb357</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-ledum palustre 9ch 4g?466b2c6c-dd5c-47c1-b510-0b1927ecb357 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p> </p>
<p>Ce médicament homéopathique est à prendre en dehors des repas, du tabac, du café ou encore de la menthe. Les granules et les doses sont à laisser fondre sous la langue. Chez les nourrissons, ces formes peuvent être dissoutes dans un peu d'eau. usuelle : 3 à 5 granules, 3 à 4 fois par jour. Espacer les prises dès amélioration des symptômes. La durée du traitement ne doit pas dépasser 5 jours sans avis médical.Si vos symptômes persistent, consultez votre médecin.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400304308166</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5b1dd487e163006ecd446edc59c4a1e8bb3cf1571af79595aae5de23d7a7e0d ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron nux vomica granules 5CH 4g ]]></title>
<g:id>0b559b4b-654f-4332-950e-75eaeb4118b2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-nux vomica granules 5ch 4g?0b559b4b-654f-4332-950e-75eaeb4118b2 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p>NUX VOMICA 5CH Tube Granules est un médicament homéopathique habituellement utilisé en cas de coliques chez les nourrissons,en cas de rhume survenant après un refroidissement ou de rhinites allergiques, en cas de crises hémorroïdaires avec démangeaisons. Les Granules de NUX VOMICA 5CH s'utilisent : *En cas de coliques chez le nourrisson. *En cas de rhume survenant après un refroidissement ou de rhinites allergiques, avec éternuement le matin au réveil. *Chez des patients présentant certains t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400305278123</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron rhus toxicodendron granules 5CH 4g ]]></title>
<g:id>674c4538-967f-49fd-bd94-08ae13cbfd65</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-rhus toxicodendron granules 5ch 4g?674c4538-967f-49fd-bd94-08ae13cbfd65 ]]></link>
<g:price><![CDATA[ 295.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p>RHUS TOXICODENDRON 5CH Tube Granules est un médicament homéopathique habituellement utilisé en cas d'eczéma, herpès labiaux, zona, douleurs rhumatismales, entorse, grippe, fatigue musculaire. Les Granules de RHUS TOXICODENDRON 5CH s'utilisent : *Dans toutes les dermatoses érythémato-oedémateuses ou vésiculeuses, c'est-à-dire lorsque la peau est rouge, gonflée avec éventuellement la présence de vésicules : eczémas, herpès labiaux ou génitaux, zonas, acnés rosacées. *En cas de douleurs  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400306318125</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/133ab78d2d2836225f569d952908ca6668a2e9f708e796cedb9535ef8d764d13 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boiron vaccinotoxinum Dose 15CH 4g ]]></title>
<g:id>0baba469-cd98-4b86-999d-4bb9eda036e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-vaccinotoxinum dose 15ch 4g?0baba469-cd98-4b86-999d-4bb9eda036e3 ]]></link>
<g:price><![CDATA[ 275.00 EUR ]]></g:price>
<description><![CDATA[ <p>VACCINOTOXINUM 15CH Tube Dose est un médicament homéopathique habituellement utilisé en infectiologie et en dermatologie. VACCINOTOXINUM DOSE 15CH s'utilise : En infectiologie : pour traiter l'herpès buccal ou péri-buccal. En dermatologie : pour prévenir l'apparition des boutons de fièvre et pour atténuer les éruptions cutanées et les varicelles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309252228</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a9371f63a98af29b10fabf3f9ccbf499d707f83589b716900008c8cedb1f27b2 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bol Maju Anthracite & Blanc ]]></title>
<g:id>63a67e97-79fe-49da-b163-16e04f373693</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bol-maju anthracite & blanc?63a67e97-79fe-49da-b163-16e04f373693 ]]></link>
<g:price><![CDATA[ 5990.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Composez des repas équilibrés</strong>&nbsp;adaptés à vos besoins sans compter ni peser.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770019671009</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/be06d4a92b5e5dcba7d0ca1ae71105fd6597ed2d43e816ebd324bff9d5995b54 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > MINCEUR > SANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bol Maju Crème & kaki  ]]></title>
<g:id>a34b8e03-5303-405d-9352-174b100a3368</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bol-maju crème & kaki ?a34b8e03-5303-405d-9352-174b100a3368 ]]></link>
<g:price><![CDATA[ 5990.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Composez des repas équilibrés</strong>&nbsp;adaptés à vos besoins sans compter ni peser.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770019671085</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/524e6e43433036510a8fc1e7a108d4969b5d5c1db2cf89ef7ef05ee763e1faf2 ]]></g:image_link>
<g:product_type><![CDATA[ MINCEUR > SANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bona fama Tisane allaitement bio vrac 200g ]]></title>
<g:id>19c8e0c7-8d60-4023-abc4-7806df4d4fbf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bona-fama tisane allaitement bio vrac 200g?19c8e0c7-8d60-4023-abc4-7806df4d4fbf ]]></link>
<g:price><![CDATA[ 815.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les bienfaits des ingrédients de la tisane d'allaitement Bona Fama sont multiples : </span><span><br /><br /><span>- Le fenouil, le cumin et l'anis sont des plantes aux vertus galactogènes, c'est-à-dire qu'elles sont capables de stimuler la sécrétion lactée chez la femme qui allaite. La tisane augmente fortement la production de lait chez plus de 80% des mamans. Elle est donc d'un grand secours à certains moments délicats de l'allaitement : montée de lait difficile suite par exemple à u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700507100124</g:gtin>
<g:brand><![CDATA[ Distripharm ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ea38b49ea1b7842e485c0eb5c49fd2d97bfa5160b1bdbb1467f870c4e76dd200 ]]></g:image_link>
<g:product_type><![CDATA[ TISANES  ET  NUTRITION MATERNITE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Boston Simplus 120ml ]]></title>
<g:id>5b6a11db-5aca-4788-9c95-cad35d4983bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boston-simplus 120ml?5b6a11db-5aca-4788-9c95-cad35d4983bb ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <div class="tab_content">
<div class="tab tab-content-0 tab_content_main-description">
<div>Composée d'éléments déprotéinisants, la solution Boston One Bottle Simplus permet d'enlever les protéines des lentilles de contacts rigides, tout en les lubrifiant et conservant.</div>
<p></p>
</div>
</div>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7391899836966</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2277a1e0fef119091f52930751bd6e366f64e2f343da5c1d5056190a80b94da ]]></g:image_link>
<g:product_type><![CDATA[ CONTACTOLOGIE ET SOINS DES YEUX ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Bain de Bouche Anis Citrus Réglisse 250 ml ]]></title>
<g:id>889a6fac-4f0a-48ca-aace-2c0f0981f80f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-bain de bouche anis citrus réglisse 250 ml?889a6fac-4f0a-48ca-aace-2c0f0981f80f ]]></link>
<g:price><![CDATA[ 780.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Botot est un bain de bouche</strong> purifiant et antiseptique formulé aux <strong>essences naturelles d’Anis, de Citrus et de Réglisse</strong> afin de garder une <strong>bouche saine</strong> ainsi qu’une <strong>haleine fraîche</strong>. L’utilisation de ce dernier peut s’avérer efficace lors de petites irritations de la cavité buccale, mais également en tant que prévention contre les infections.<br /><br />Ce bain de bouche Botot est un <strong>véritable complément</strong> pour u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004811</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3173ac63ae3a311c7d0523c7b10957ce26cc48cc6cefd7bd12d359d9dc330927 ]]></g:image_link>
<g:product_type><![CDATA[ BAIN DE BOUCHE > DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Bain de Bouche Cannelle Clou de Girofle Menthe 250 ml ]]></title>
<g:id>c2fd1f0a-32ce-472e-b9d3-e17871dab5ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-bain de bouche cannelle clou de girofle menthe 250 ml?c2fd1f0a-32ce-472e-b9d3-e17871dab5ac ]]></link>
<g:price><![CDATA[ 780.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Ce bain de bouche Botot</strong> aux essences naturelles de Cannelle, Clou de girofle et de Menthe est destiné à votre <strong>hygiène bucco-dentaire</strong> afin de purifier votre bouche tout en rafraîchissant votre haleine. <br /><br />Les essences naturelles de<strong> Cannelle, de Clou de girofle et de Menthe</strong> possèdent des vertus rafraîchissantes pour l'haleine afin de vous procurer une certaine fraîcheur tout au long de la journée. <br /><br />Ce bain de bouche Botot co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004804</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c6e1c674bba737a860245b59bdfaaea063475518535b3acb00acc9282b53591f ]]></g:image_link>
<g:product_type><![CDATA[ BAIN DE BOUCHE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Bain de Bouche Figue Menthe Cannelle 250 ml ]]></title>
<g:id>2311284a-f698-4b8d-9d9f-12ba6b53154e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-bain de bouche figue menthe cannelle 250 ml?2311284a-f698-4b8d-9d9f-12ba6b53154e ]]></link>
<g:price><![CDATA[ 780.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le bain de bouche Botot Figue Menthe Cannelle est une <span>eau de bouche diluée</span> qui est formulée à partir d'<span>essences naturelles</span> soigneusement sélectionnées pour leurs <span>vertus antibactériennes et rafraîchissantes</span>, et qui lui confèrent un goût unique en son genre.</p>
<p>Combiné à l'un des dentifrices de la gamme Botot, le <span>bain de bouche Botot Figue Menthe Cannelle</span> sera pour vous une recette idéale pour une parfaite hygiène bucco-dentaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006259</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f74be9116e96dd08973bbd03738aad1218a62adfec8e67873a8fec5cff84beb ]]></g:image_link>
<g:product_type><![CDATA[ BAIN DE BOUCHE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Bain de bouche Menthe Pin Eucalyptus 250 ml ]]></title>
<g:id>99941895-3b01-4c22-8064-1c2f736a3216</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-bain de bouche menthe pin eucalyptus 250 ml?99941895-3b01-4c22-8064-1c2f736a3216 ]]></link>
<g:price><![CDATA[ 780.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <strong>bain de bouche Botot</strong> purifie et rafraîchit l’haleine pour longtemps grâce à sa formule aux <strong>essences naturelles de menthe, d’eucalyptus et de pin</strong>. <br /><br />C’est l’<strong>eau de Botot</strong> qui est à l’origine de ce bain de bouche. Cette eau de Botot a été élaborée en 1755, par le docteur Edme-François-Julien Botot, à partir d’essences naturelles. Elle était destinée au roi Louis XV. Son succès lui a permis de perdurer jusqu’à nos jours, puisqu’elle  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004828</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22c201356e2478aa7651ca7b0aa6e938dd932ebb3419ed817af0ea5a907eb684 ]]></g:image_link>
<g:product_type><![CDATA[ BAIN DE BOUCHE > HYGIÈNE BUCCO-DENTAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Dentifrice Anis Citrus Réglisse 75ml ]]></title>
<g:id>6c797ea0-078d-47c8-91bd-cf8fa10fe2e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-dentifrice anis citrus réglisse 75ml?6c797ea0-078d-47c8-91bd-cf8fa10fe2e9 ]]></link>
<g:price><![CDATA[ 480.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le dentifrice Anis Citrus </strong>de la marque<strong> Botot</strong> est enrichi aux essences naturelles d'anis, de citrus et de réglisse afin de vous offrir une protection contre les caries et la plaque dentaire, tout en nettoyant parfaitement votre cavité buccale. <br /><br /><strong>L'essence d'Anis</strong> contenue dans la pâte dentifrice Botot possède une véritable pouvoir rafraîchissant, très agréable lors du brossage afin de vous procurer une haleine fraîche immédiate. <br / ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004842</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b58ef072f9e35ee4e68f2776f4444a58e932fa5a32a748952d71912dc820f86 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Dentifrice Cannelle Clou de Girofle Menthe 75ml ]]></title>
<g:id>43c1ae0e-5de9-4d4f-97ac-eb5b31aeb49f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-dentifrice cannelle clou de girofle menthe 75ml?43c1ae0e-5de9-4d4f-97ac-eb5b31aeb49f ]]></link>
<g:price><![CDATA[ 480.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Dentifrice Botot aux essences naturelles au fluor et au triclosan est un soin pour l'hygiène buccale, à actions antiplaques, permettant de nettoyer les dents, de combattre les bactéries responsables de la plaque bactérienne tout en reminéralisant l'émail dentaire.</p>
<p>Le Dentifrice Botot purifie et rafraîchit l'haleine.</p>
<p>Sa double utilité de prévention contre la formation de la plaque bactérienne et de protection contre les caries dentaires fait du Dentifrice Botot un soin buccal  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8002410070101</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27143be3067a1edc32d4155846652808637372545737d18dc664202f53cf0fff ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Dentifrice Figue Menthe Cannelle 75 ml ]]></title>
<g:id>e79c8f8b-979d-4609-bee1-419e91cc0933</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-dentifrice figue menthe cannelle 75 ml?e79c8f8b-979d-4609-bee1-419e91cc0933 ]]></link>
<g:price><![CDATA[ 480.00 EUR ]]></g:price>
<description><![CDATA[ <p>Violette comme la couleur du bain de bouche dont elle est inspirée, cette pâte dentifrice est enrichie d’une combinaison unique de trois essences naturelles aux propriétés vivifiantes et antibactériennes. Profitez de toutes les vertus de ses ingrédients pour une haleine fraîche immédiate et durable.</p><h5>Essences naturelles</h5><ul><li><p>Figue</p></li><li><p>Menthe</p></li><li><p>Cannelle</p></li></ul><p>Utilisé au quotidien, il est efficace contre la plaque dentaire et vous aide à éviter  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006242</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d4f8e78824be5d3760f4ca7db37c35adbb4083350aa333401ad0747eff400c7 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Dentifrice Menthe Pin Eucalyptus 75ml ]]></title>
<g:id>d3044b77-4d3d-446a-a8ff-0b82ae5ddf9e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-dentifrice menthe pin eucalyptus 75ml?d3044b77-4d3d-446a-a8ff-0b82ae5ddf9e ]]></link>
<g:price><![CDATA[ 480.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le dentifrice Botot</strong> a été formulé dans le but de <strong>protéger des caries et de la plaque dentaire</strong>. Sa formule enrichie en menthe, pin et eucalyptus a un <strong>effet purifiant et rafraîchissant intense</strong>. En 1755, Edme-François-Julien Botot, médecin de la Cour, créé l’eau de Botot pour le roi Louis XV. Son succès traversera les siècles. La formule inspirera la création de la pâte dentifrice Botot.<br /><br />Ce dernier est composé d’une combinaison d’huil ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004835</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4764688cbe881c1c034fa141ba3843b28ded3d816caffc6d759a06f22228d1d3 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Botot Eau de bouche 150ml ]]></title>
<g:id>69d296c8-3e7e-4b59-9680-4a4f3e595026</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/botot-eau de bouche 150ml?69d296c8-3e7e-4b59-9680-4a4f3e595026 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bain de bouche concentré raffraichissant et purifiant pour hygiène buccale, aux essences naturelles, permettant de purifier et de rafraîchir l'haleine.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8002410070118</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/96c7110c2a2e8b8900c7d2fe1e9748dd9dc793a24048600a9f38452aca6e9355 ]]></g:image_link>
<g:product_type><![CDATA[ BAIN DE BOUCHE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Buccotherm Dentifrice à l'Eau Thermale 7-12 Ans Bio 50 ml ]]></title>
<g:id>caf07c5b-aa28-44ba-9921-f1c86829aa49</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/buccotherm-dentifrice à l'eau thermale 7-12 ans bio 50 ml?caf07c5b-aa28-44ba-9921-f1c86829aa49 ]]></link>
<g:price><![CDATA[ 370.00 EUR ]]></g:price>
<description><![CDATA[ <p>Buccotherm Dentifrice à l'Eau Thermale 7-12 Ans Bio 50 ml est un dentifrice à la teneur en fluor qui favorise la prévention des caries sur les dents définitives. Son ingrédient principal, l'eau thermale, grâce à son pH basique, aide à lutter contre les attaques acides et à éliminer la plaque dentaire.</p>
<p>Contient du fluorure de sodium (1450 ppm).</p>
<p>Sans alcool, sans saccharine, sans colorants ni parfums de synthèse.</p>
<p>98,5% du total est d'origine naturelle.<br />19,7% du total d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665313000016</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e267c4e492a02a07b0d4018f61461c63e38ba3b2135832622ae67b08cb91a05 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Buccotherm Gel Dentifrice à l'Eau Thermale Gencives Sensibles Bio Rechargeable 100 ml ]]></title>
<g:id>4abc0256-906d-4482-b41a-d3f7dd43e981</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/buccotherm-gel dentifrice à l'eau thermale gencives sensibles bio rechargeable 100 ml?4abc0256-906d-4482-b41a-d3f7dd43e981 ]]></link>
<g:price><![CDATA[ 510.00 EUR ]]></g:price>
<description><![CDATA[ <p>Buccotherm Gel Dentifrice à l'Eau Thermale Gencives Sensibles Bio Rechargeable 100 ml est un gel dentifrice spécialement conçu pour les gencives sensibles.</p>
<p>Concentré en eau thermale de Castéra-Verduzan aux propriétés apaisantes, ce dentifrice non-abrasif favorise la diminution des saignements occasionnels et des sensibilités gingivales. Renforcé en fluor, il aide à prévenir les caries.</p>
<p>Écologique, ce flacon une fois vide, peut être conservé et complété grâce à son éco-recharge B ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665313000382</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/93ca54a6a26a1e65c9c2983e85e42f25df0dc501247587da3472885d8944cc8b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Buccotherm dentifrice 7-12 ans menthe douce 50ml ]]></title>
<g:id>9f3e0754-af5d-4b79-8e25-32eaa52f6ed9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/buccotherm-dentifrice 7-12 ans menthe douce 50ml?9f3e0754-af5d-4b79-8e25-32eaa52f6ed9 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>BUCCOTHERM JUNIOR 7-12 ans Menthe est un gel dentifrice doux. Son dosage en fluor (1000 ppm) est spécifiquement adapté aux enfants de 7 à 12 ans, selon les recommandations des experts. Avec son arôme très agréable à la menthe douce Chlorophylle, il ravira les grands enfants.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401543508140</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f52a57b16426905a57b73afc2984c1e24d225f737761e5fb807e4bd8ed66f448 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Buccotherm gel dentifrice gencives sensibles bio ]]></title>
<g:id>673a80b7-92aa-464d-8b70-2f2df220d76f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/buccotherm-gel dentifrice gencives sensibles bio?673a80b7-92aa-464d-8b70-2f2df220d76f ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Buccotherm Gencives Sensibles Gel Dentifrice à l'Eau Thermale 75 ml certifié bio composé d'ingrédients d'origine naturelle apaise et cicatrice grâce à l' Eau Thermale présente dans sa formule.</p>
<p>Non-abrasif, ce dentifrice favorise la diminution des saignements occasionnels et des sensibilités gingivales.</p>
<p>Sans paraben, colorants, parfums de synthèse, alcool.</p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401595815760</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/370524b285fac7bba37f9bc70002e22fbe9ca380de684f2ccd604afc7442dafc ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Buccotherm pâte dentifrice prévention caries 75ml ]]></title>
<g:id>1e4f243f-d110-4a47-9c40-0a14adbfaec6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/buccotherm-pâte dentifrice prévention caries 75ml?1e4f243f-d110-4a47-9c40-0a14adbfaec6 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>BUCCOTHERM Prévention Caries est le dentifrice quotidien de l’adulte.</p>
<p>Nettoie, reminéralise les dents et procure une haleine fraiche.</p>
<p>BUCCOTHERM Prévention caries :</p>
<p>- Aide à lutter contre la plaque dentaire et favorise la prévention des caries par son dosage renforcé en fluor (1100 ppm).</p>
<p>- Favorise la reminéralisation des dents.</p>
<p>- Protège les dents et les muqueuses des attaques acides grâce à au pH basique de l’eau thermale.</p>
<p>- Apporte une haleine frai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576451482</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/80f4d0c722cde7460cef55fdcf4fa2163fcfff99509b23dfe68a8e4f0d159736 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Béaba Coffret Repas Silicone 4 pièces Eucalyptus ]]></title>
<g:id>9576b099-764f-4ceb-8f9a-a121f8dd8da1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/b-aba coffret repas silicone 4 pièces eucalyptus?9576b099-764f-4ceb-8f9a-a121f8dd8da1 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gamme de vaisselle en silicone composée de:&nbsp;<br>- Une assiette<br>- Un bol<br>- Un verre<br>- Une cuillère 2ème âge.<br>-&nbsp;L’assiette et le bol sont équipés d’une ventouse.<br>-&nbsp;La matière silicone est souple, douce et adaptée à l’utilisation au micro-ondes et au lave-vaisselle<br>-&nbsp;Ventouse sous les assiettes et le bol : pour adhérer à la table et éviter les incidents,<br>- Formes ergonomiques pour aider bébé dans sa phase d’apprentissage des repas,<br>- Gamme évolutive, d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3384349135072</g:gtin>
<g:brand><![CDATA[ Suavinex ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d5e900c9089ee986c9ec9809be034f72fee25c6f20441a344580b29fdcd6259 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > AUTRE ACCESSOIRE > REPAS - TOILETTE ET AUTRE ACCESSOIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Béaba Coffret Repas Silicone Avec Ventouse 4 Mois et + ]]></title>
<g:id>571610b4-304a-4994-b479-fbe47b1cd6bc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/b-aba coffret repas silicone avec ventouse 4 mois et +?571610b4-304a-4994-b479-fbe47b1cd6bc ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Béaba Coffret Repas Silicone Avec Ventouse 4 Mois et + est un set de repas en silicone souple et doux aux formes ergonomiques pour aider bébé à manger seul (angles arrondis et bords droits pour faciliter la prise des aliments). Il comprend :</p><p>- 1 assiette et 1 bol avec ventouse pour adhérer à la table,</p><p>- 1 cuillère 2e âge et 1 verre.</p><p>Leur matière est incassable et silencieuse lors de leur chute. Ils se nettoient facilement au lave-vaisselle ou à la main. Ils sont stérilisable ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3384349134280</g:gtin>
<g:brand><![CDATA[ Suavinex ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/adbaf6b31ab2193846b95ab97d01470a861e50bb4b98a92eb7b5ba7b6545b32a ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > AUTRE ACCESSOIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE GEL DOUCHE ANGES DES VIGNES 200ML ]]></title>
<g:id>6618dfeb-9678-4d76-a489-328581d4fb37</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche anges des vignes 200ml?6618dfeb-9678-4d76-a489-328581d4fb37 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enrichi en aloé vera, ce gel douche sans savon est formulé sur une base lavante douce d’origine végétale qui respecte le pH physiologique de la peau. Sa fragrance sensuelle célèbre l’alliance du musc blanc, de la fleur de néroli et du gingembre. Pour toutes celles et tous ceux qui souhaitent transformer la douche en un moment de détente absolue grâce à ce gel douche nectar délicatement parfumé.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004417</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f4117b0f973589d9d972e409595ca10e60a484e54719078060562b6b8c93e15 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE PREMIER  CRU LA CREME RICHE 50ML ]]></title>
<g:id>e81d136b-dcda-4dcb-93ea-c2826ae89a58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-premier  cru la creme riche 50ml?e81d136b-dcda-4dcb-93ea-c2826ae89a58 ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nouvelle formule Longévité pour une peau plus jeune plus longtemps.<br>Boostée par notre brevet longévité et par un filler repulpant naturel, La Crème Riche Premier Cru réactive les mécanismes de jeunesse de la peau et augmente les performances cellulaires pour corriger tous les signes de l'âge : rides, taches, volume. Sa texture riche, enrichie en bio-céramides relipidants, aide à réparer la barrière cutanée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004592</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eecbe59bf4d6c0ee1308cdc15728d9b3911b45ef98865602961afbaad503451d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE PREMIER CRU CRU LA CREME RICHE 50ML RECHARG ]]></title>
<g:id>6dd1a751-c8a3-4d27-939f-61a83ad4f24e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-premier cru cru la creme riche 50ml recharg?6dd1a751-c8a3-4d27-939f-61a83ad4f24e ]]></link>
<g:price><![CDATA[ 6890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nouvelle formule Longévité pour une peau plus jeune plus longtemps.<br>Boostée par notre brevet longévité et par un filler repulpant naturel, La Crème Riche Premier Cru réactive les mécanismes de jeunesse de la peau et augmente les performances cellulaires pour corriger tous les signes de l'âge : rides, taches, volume. Sa texture riche, enrichie en bio-céramides relipidants, aide à réparer la barrière cutanée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004608</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b63a957de9fe58bcfcc267752a76282c39d4c2739c97292a1697bc1109bbcab ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE PREMIER CRU LA CR 50ML RECHARGE ]]></title>
<g:id>34e83bb9-81fe-4f75-b555-3a5aa8120e00</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-premier cru la cr 50ml recharge?34e83bb9-81fe-4f75-b555-3a5aa8120e00 ]]></link>
<g:price><![CDATA[ 6890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nouvelle formule Longévité pour une peau plus jeune plus longtemps.<br>La Crème Premier Cru corrige tous les signes de l’âge : rides, taches, volume. Boostée par un brevet longévité exclusif et par un filler repulpant naturel, elle réactive les mécanismes de jeunesse et augmente les performances cellulaires de votre peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004585</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d85085a74d8fedf51f52096928d35f9327fbd9547bab0bad10d5ff74857ff86 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE PREMIER CRU LA CREME 50ML ]]></title>
<g:id>2bd9e672-587b-4b91-898c-f8733ed0c2e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-premier cru la creme 50ml?2bd9e672-587b-4b91-898c-f8733ed0c2e3 ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nouvelle formule Longévité pour une peau plus jeune plus longtemps.<br>La Crème Premier Cru corrige tous les signes de l’âge : rides, taches, volume. Boostée par un brevet longévité exclusif et par un filler repulpant naturel, elle réactive les mécanismes de jeunesse et augmente les performances cellulaires de votre peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004578</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d85085a74d8fedf51f52096928d35f9327fbd9547bab0bad10d5ff74857ff86 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE PREMIER CRU LA CREME YEUX 15ML ]]></title>
<g:id>aa1e04f6-9326-4666-a687-c975d94ab6e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-premier cru la creme yeux 15ml?aa1e04f6-9326-4666-a687-c975d94ab6e0 ]]></link>
<g:price><![CDATA[ 4490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nouvelle formule Longévité pour une peau plus jeune plus longtemps.<br>Boostée par notre brevet longévité et par un filler repulpant naturel, La Crème Yeux Premier Cru illumine et ouvre le regard. Sa formule corrige tous les types de rides du contour des yeux et des lèvres, et son embout décongestionnant réduit les cernes et les poches pour un regard visiblement plus jeune.<strong><br><br></strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004554</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/95af9dd5f9f91ee52d77bd194daa73dae9d3adbe5e1291dc396e600be1d6df28 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CAUDALIE VINOPURE STOP BOUTONS 15ML ]]></title>
<g:id>788d6a07-0947-4da5-8379-977e8a4ad2c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure stop boutons 15ml?788d6a07-0947-4da5-8379-977e8a4ad2c8 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Les peaux à tendance acnéique.</li>
<li><span>Résultats beauté :</span> Les boutons sont visiblement réduits après 1 heure*.</li>
<li><span>Actifs :</span> Acide salicylique Naturel, Niacinamide, Huile Essentielle d'Arbre à Thé.</li>
<li><span>Le + : </span>Sa couleur vert clair corrige instantanément les rougeurs.</li>
</ul><p> </p>
<p>Le<span> Stop Boutons Salicylique Vinopure</span> réduit visiblement les boutons localisés en 1h*.</p>
<p>Il assainit, assèche et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004073</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/77c6c22d9e4751b840eea6a10aa8e14e076fcb51817dfd00c7d2e7d9facf6a25 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CB 12 Bain de bouche 250ml ]]></title>
<g:id>2fe1fd7c-4121-4a82-abdf-3b146bcd3b7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cb-12 bain de bouche 250ml?2fe1fd7c-4121-4a82-abdf-3b146bcd3b7f ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La solution CB12 prévient et traite la mauvaise haleine (halitose) en neutralisant les composés sufurés volatils dans la bouche.</p>
<p>Son effet est instantané et procure une haleine saine pendant 12 heures.</p>
<p>CB12 a un goût de menthe fraîche/menthol rafraîchissant.</p>
<ul><li>Sa formule puissante permet de garder une haleine ultra-fraîche grâce. Formule brevetée.</li>
<li>L'effet sur votre haleine est d'une durée de 12 heures ! </li>
<li>Prouvé scientifiquement, l'effet CB12 vous donn ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700343900261</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb9d91ec748981ddf96096321112ee4d69aa3e7b88e58ff2fbec80cceff68314 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CB12 500 ml ]]></title>
<g:id>0c073433-a1f9-4c56-9be8-8c74998fe8f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cb12-500 ml?0c073433-a1f9-4c56-9be8-8c74998fe8f5 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>CB12 <br />Bain de bouche<br />Actif pour une haleine sûre<br />Neutralise et bloque les substances à l'origine de la mauvaise haleine (halitose)<br />Effet 12h<br />Goût menthe/menthol<br />500ml </p>
<p>CB12 est une eau buccale qui élimine la cause de la mauvaise haleine; action longue durée garantie.<br />La mauvaise haleine est provoquée par la croissance de certaines bactéries dans la cavité buccale: entre les dents et dans la cavité à l'arrière de la langue.<br />Lorsque ces bactéries d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700343900278</g:gtin>
<g:brand><![CDATA[ CCD ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28f0672175a37dfdac598247d24c95345aad5b76ac2c8044635505b65d541ae7 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CB12 Bain de bouche 500 ml + spray offert ]]></title>
<g:id>4f90eec7-882e-4428-bb6e-81abfff870b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cb12-bain de bouche 500 ml + spray offert?4f90eec7-882e-4428-bb6e-81abfff870b5 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p class="cb12_mouthwash_text3">Le bain de bouche CB12 est différent. Il neutralise activement la mauvaise haleine, au lieu de simplement la masquer.</p>
<p class="cb12_mouthwash_text3">Le bain de bouche neutralise la mauvaise haleine, en agissant sur les mauvaises odeurs au lieu de simplement les masquer pendant une courte durée. Il est cliniquement prouvé que sa formule brevetée agit pendant 12 heures<span>1</span>. Qui plus est, le bain de bouche CB12 contient également du fluor, un ingrédien ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700343903125</g:gtin>
<g:brand><![CDATA[ MYLAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cd45c91490af606fcb8d26b26117dd12e524d7ca354185d07e2bae2125e7d6df ]]></g:image_link>
<g:product_type><![CDATA[ HALEINE FRAICHE > HYGIÈNE BUCCO-DENTAIRE > SOIN BUCCO-DENTAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CB12 Sensitive Bain de Bouche 250 ml ]]></title>
<g:id>e1eef433-6d26-42d7-9789-f4b8aab64af4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cb12-sensitive bain de bouche 250 ml?e1eef433-6d26-42d7-9789-f4b8aab64af4 ]]></link>
<g:price><![CDATA[ 798.00 EUR ]]></g:price>
<description><![CDATA[ <p>CB12 Sensitive Bain de Bouche 250 ml est une solution à la formule brevetée, à l'acétate de zinc et à la chlorhexidine qui neutralise activement la mauvaise haleine pendant 12 heures.<br />Elle aide à réduire la sensibilité dentaire : elle protège et soulage au quotidien les dents sensibles grâce à l'arginine qu'elle contient.</p>
<p>Elle contient du fluor pour renforcer l'émail des dents. Son parfum menthe légère laisse un goût agréable.</p>
<p>Sans alcool.</p>
<p>Contient 0,05 % de fluorure ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700343901787</g:gtin>
<g:brand><![CDATA[ MYLAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cbe9c564c78716cf1d15407568c179f4eaa7d43cc8f6f8fa6b8962d13c541b7e ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CB12 mild bain de bouche 250ml ]]></title>
<g:id>9040aa54-14f6-4f69-94f6-59844211f5a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cb12-mild bain de bouche 250ml?9040aa54-14f6-4f69-94f6-59844211f5a7 ]]></link>
<g:price><![CDATA[ 798.00 EUR ]]></g:price>
<description><![CDATA[ <p>CB12 Mild composé de <strong>zinc acétate</strong> et de la molécule de <strong>chlorexidine diacerate,</strong> neutralise les composés sulfurés volatiles qui causent la mauvaise haleine (<strong>halitose</strong>), et empêche leur développement.</p>
<p>Dès le bain de bouche l'haleine est fraîche au goût menthe et pour longtemps.</p>
<ul><li>CB12 assure une haleine ultra-fraîche grâce à une formule efficace et brevetée.</li>
<li>12 heures de protection grâce à sa technologie longue durée.</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890210501</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA VITAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3689ffe2ddd4b6fa7fc799073b54826892baa3f4eaac6f6c620cf78ce45724e3 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CBD by Boiron Gel - Répare & relaxe 120g ]]></title>
<g:id>46093b28-1ae5-41a5-879b-8deecb799958</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cbd-by boiron gel - répare & relaxe 120g?46093b28-1ae5-41a5-879b-8deecb799958 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p class="mb-4">Concentré en <span>CBD naturel,</span> ce gel a 3 actions : <span>relaxer</span>²<span> les muscles, </span>favoriser la <span>détente</span>¹<span> physique </span>et aider à la <span>récupération après l'effort.</span></p>
<p class="mb-4">Il est aussi utile en cas de <span>tensions</span>¹<span> </span>pouvant être provoquées par un geste répété avec une mauvaise posture, ou pour l’inconfort musculaire parfois causé par l’immobilité du télétravail.</p>
<ul class="mb-4 list-outs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712010295</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42f2d700a2e827bc7eba673167f7dcee1f60a687495d0c86c5f8f13f57fb98c4 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CBD by Boiron Gel - Répare & relaxe 70g ]]></title>
<g:id>ecc11983-1d48-4a2e-9568-de7e55705d2a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cbd-by boiron gel - répare & relaxe 70g?ecc11983-1d48-4a2e-9568-de7e55705d2a ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p class="mb-4">Concentré en <span>CBD naturel,</span> ce gel a 3 actions : <span>relaxer</span>²<span> les muscles, </span>favoriser la <span>détente</span>¹<span> physique </span>et aider à la <span>récupération après l'effort.</span></p>
<p class="mb-4">Il est aussi utile en cas de <span>tensions</span>¹<span> </span>pouvant être provoquées par un geste répété avec une mauvaise posture, ou pour l’inconfort musculaire parfois causé par l’immobilité du télétravail.</p>
<ul class="mb-4 list-outs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712010318</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/213f8c546e8b6f543db95bb5a853dbb3966bf0a99e0c416d16f03a1d9c16789b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CBD by Boiron Gel Roll on 45g ]]></title>
<g:id>b1ecfc05-5d8b-44ab-aa18-0ced64690a39</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cbd-by boiron gel roll on 45g?b1ecfc05-5d8b-44ab-aa18-0ced64690a39 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CBC By Boiron Gel-Crème</span> contient plus de 98 % d'ingrédients d'origine naturel : CBD issu du <span>Cannabis sativa</span> bio et de l'extrait d’<span>Arnica Montana</span> pour relaxer et détendre les muscles et favoriser la récupération après un effort physique. Il peut aussi être utile en cas de tensions provoquées par des gestes répétitifs (tendinite) ou des contractures musculaires. De plus, sa texture gel procure une sensation de fraîcheur.</p>
<p>Ce Gel-Crème est formulé à b ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712010301</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3563b0f156e81f79b5b19ac9ce97735b9dd15d1ed81cb006f8540ace23ff1966 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CBD by Boiron Gel crème - Assouplit & apaise 40g ]]></title>
<g:id>b5502167-01f2-4633-970c-1e3344841d9a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cbd-by boiron gel crème - assouplit & apaise 40g?b5502167-01f2-4633-970c-1e3344841d9a ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p class="mb-4">Ce gel crème est concentré en <span>CBD naturel </span>pour <span>améliorer la souplesse et le confort articulaire</span>¹<span>.</span> Conçu pour s’appliquer facilement en massage, il apaise et détend <span>efficacement </span>les tensions du quotidien⁵.</p>
<ul class="mb-4 list-outside pl-4 list-disc">
<li><span>+96% d’ingrédients d’origine naturelle</span>⁶. Dont du CBD naturel issu du Cannabis <em>sativa </em>bio et des extraits d’Arnica Montana &amp; d’Harpagophytum.</li>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3352712010288</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/989b4900de25ec8b5e06d2f21a1271a460207586565679da96d4cdadc6d30708 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CINQ SUR CINQ Recharge Liquide Anti-Moustiques 35 ml ]]></title>
<g:id>c1c72449-13c3-42de-b012-750715a3792d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq recharge liquide anti-moustiques 35 ml?c1c72449-13c3-42de-b012-750715a3792d ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Cinq sur Cinq Recharge Liquide Anti-Moustiques 35 ml permet une protection de 450 heures contre les moustiques.</p>
<p>La recharge s'utilise avec le diffuseur double usage Cinq sur Cinq.</p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560216394</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/efcb1bffac16427574d189239249d8df516fbb58f7bd66d48e7c74d626b8815f ]]></g:image_link>
<g:product_type><![CDATA[ MOUSTIQUES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CINQ SUR CINQ Spray anti-tiques 100 ml ]]></title>
<g:id>de5ba58b-c2ee-4795-9205-ab9316edb261</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq spray anti-tiques 100 ml?de5ba58b-c2ee-4795-9205-ab9316edb261 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <strong>spray anti-tiques</strong> de la marque <strong>Cinq sur Cinq</strong> est un <strong>produit répulsif </strong>prêt à l'emploi qui éloigne efficacement les tiques et qui permet de prévenir les borrélioses (maladies infectieuses transmises par les tiques ou les poux) et notamment la <strong>maladie de Lyme</strong>.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000064</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/342e4123dc6a0db0c8b74a83d14c7f6a10db514a6c821beaccfeb4fb0cc3bbc3 ]]></g:image_link>
<g:product_type><![CDATA[ MOUSTIQUES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CINQ SUR CINQ Tropic Lotion Anti-moustiques 100ml ]]></title>
<g:id>62e8d059-61e5-44ff-82e7-5cfab7db19be</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq tropic lotion anti-moustiques 100ml?62e8d059-61e5-44ff-82e7-5cfab7db19be ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dans les régions infestées et les zones à risque de paludisme,Cinq sur Cinq Tropic Lotion Anti-moustiques 100 ml contient un répulsif, l'IR 3535, repousse efficacement 5 espèces d'insectes européens et tropicaux : moustiques, guêpes, abeilles, tiques et taons.<br /><br />Il est l'un des gestes possibles de prévention contre le paludisme, la dengue et le chikungunya.<br />Pour une protection optimale, vaporisez les parties découvertes de votre corps en évitant les yeux et les muqueuses. Le vap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401542172809</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65e269182caab164c512d05c3c6a3450aac311f08369a3388b2f63563df20952 ]]></g:image_link>
<g:product_type><![CDATA[ MOUSTIQUES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CINQ SUR CINQ shampooing anti poux & lentes 100 ml ]]></title>
<g:id>c8e61092-e651-4044-a77b-0c67252bb96a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq shampooing anti poux & lentes 100 ml?c8e61092-e651-4044-a77b-0c67252bb96a ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing anti-poux &amp; lentes élimine la totalité des poux et des lentes sur tous les types de cheveux même fragiles de toute la famille (à partir de 36 mois), en seulement 15 minutes de pose.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401581493163</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a9c9d752dd21bf9b0dd0d3045d7dbc49d1b805a8271576cb7842eb8b7e8fece ]]></g:image_link>
<g:product_type><![CDATA[ ANTI POUX ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLARINS EXTRA-FIRMING CREME JOUR  PEAUX SECHES 50ML ]]></title>
<g:id>992650cf-d650-4c9d-a307-4db51eb0d22f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming creme jour  peaux seches 50ml?992650cf-d650-4c9d-a307-4db51eb0d22f ]]></link>
<g:price><![CDATA[ 10290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable.*<br><br>Extra-Firming Jour, la crème de jour anti-âge qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Pour améliorer la fermeté de la peau, Clarins crée une innovation exclusive [COLLAGEN]³ TECHNOLOGY ; un puissant trio d’actifs  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272660</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f2dab50332f913a5ca51ec7f47c2f6154e6c5139c307b63fd93df755495bcb2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLARINS EXTRA-FIRMING CREME JOUR TOUTES PEAUX 50ML ]]></title>
<g:id>9d642c34-897a-4b41-9159-03f9cebd40c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming creme jour toutes peaux 50ml?9d642c34-897a-4b41-9159-03f9cebd40c0 ]]></link>
<g:price><![CDATA[ 10290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable*.<br><br>Extra-Firming Jour, la crème anti-âge pour peaux sèches, idéale pour les peaux déshydratées, qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Pour améliorer la fermeté de la peau, Clarins crée une innovation exclusive [COL ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272646</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f2dab50332f913a5ca51ec7f47c2f6154e6c5139c307b63fd93df755495bcb2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLARINS EXTRA-FIRMING EMULSION 100ML ]]></title>
<g:id>bd4abc4b-a0b5-4175-a7af-82768bc84adc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming emulsion 100ml?bd4abc4b-a0b5-4175-a7af-82768bc84adc ]]></link>
<g:price><![CDATA[ 10290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming.<br>Extra-Firming Emulsion anti-âge augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.*<br><br>Pour améliorer la fermeté de la peau, Clarins crée une innovation exclusive [COLLAGEN]³ TECHNOLOGY ; un puissant trio d’actifs pro-collagène qui agit contre la perte de fermet ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272714</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e8923c3cbba4d24782da402f2a860303b151dff39bccbedbb469ceaae191298 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLARINS EXTRA-FIRMING SPF15 CREME JOUR 50ML ]]></title>
<g:id>554e2a4e-3fdf-4ae4-b0ab-cfbe7d115791</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming spf15 creme jour 50ml?554e2a4e-3fdf-4ae4-b0ab-cfbe7d115791 ]]></link>
<g:price><![CDATA[ 10290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable.*<br><br>Extra-Firming Jour, la crème anti-âge SPF15 qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Ce soin SPF15 apporte une protection supplémentaire efficace contre les rayons UV.<br><br>Pour améliorer la fermeté de la peau, C ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272684</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0098210831b8bca0791059bd663dcd622d577472cbbd5b3902a079ebff3e3126 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLARINS EXTRA-FIRMING TOUTES PEAUX RECHARGE CREME 50ML ]]></title>
<g:id>cf8cc24b-4bb1-4417-b22e-5a9a06cc457a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming toutes peaux recharge creme 50ml?cf8cc24b-4bb1-4417-b22e-5a9a06cc457a ]]></link>
<g:price><![CDATA[ 8290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable.*<br><br>Extra-Firming Jour, la crème de jour anti-âge qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Pour améliorer la fermeté de la peau, Clarins crée une innovation exclusive [COLLAGEN]³ TECHNOLOGY ; un puissant trio d’actifs  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272653</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8091a261b1fb3c4879e1bbf3f42c6b341072b4c49b349d162eab0ff389f4b081 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLARISN EXTRA-FIRMING  SPF15 RECHARGE 50ML ]]></title>
<g:id>9de82349-007e-4e2d-9c7b-a88932dd2b4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarisn-extra-firming  spf15 recharge 50ml?9de82349-007e-4e2d-9c7b-a88932dd2b4b ]]></link>
<g:price><![CDATA[ 8290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable.*<br><br>Extra-Firming Jour, la crème anti-âge SPF15 qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Ce soin SPF15 apporte une protection supplémentaire efficace contre les rayons UV.<br><br>Pour améliorer la fermeté de la peau, C ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272691</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/99a3debd09743a2b50af2e1a5501adef3d22a484f966467e4e6d7b94c8a0b387 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CLINOMINT PATE SP FUMEURS 75ML ]]></title>
<g:id>e33afdb9-24a1-4ce6-b59e-f30c8e8ebbb3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinomint-pate sp fumeurs 75ml?e33afdb9-24a1-4ce6-b59e-f30c8e8ebbb3 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5011111810186</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f3de5d9582f6e98575d89fc10bdb8b60608a7bcf55b99f4e08f21b03941f5229 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ COLGATE Max White Optic dentifrice blancheur au fluor 75ml ]]></title>
<g:id>af39c156-e90b-4311-9a2b-6f68db33cd8e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/colgate-max white optic dentifrice blancheur au fluor 75ml?af39c156-e90b-4311-9a2b-6f68db33cd8e ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Dentifrice Max White One Optic de Colgate est un soin qui peut être utilisé pour le brossage quotidien des dents. Le brossage des dents est essentiel pour éviter la prolifération de bactéries. Celles-ci peuvent entraîner le développement de la plaque dentaire à l'origine des caries et des problèmes gingivaux (gencives sensibles, saignements, etc.). Afin d'éliminer les bactéries et les résidus alimentaires après chaque repas, le dentifrice Max White One Optic contient des actifs netto ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8718951484627</g:gtin>
<g:brand><![CDATA[ COLGATE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ebc5eea858c0726e8e58e4272228539732721e383e0d3dc195717da9341023ae ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ COUSSINET DBLE PROT 36/38 S ]]></title>
<g:id>b5397087-2d92-4858-ad67-8c70c5dbc63a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coussinet-dble prot 36/38 s?b5397087-2d92-4858-ad67-8c70c5dbc63a ]]></link>
<g:price><![CDATA[ 2860.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000090</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/684c5a6054603db794500c3bd5d96433358e92591530f3248426cfad48067f6f ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES PODOLOGIE ET SEMELLES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CYSTIPHANE+ - Shampooing Anti-Chute 200ml ]]></title>
<g:id>88e3740c-8a18-4861-8718-41e95ce2c782</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cystiphane-shampooing anti-chute 200ml?88e3740c-8a18-4861-8718-41e95ce2c782 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <ul>
<li><span>Pour qui : </span>Pour hommes et femmes, chute de cheveux chronique ou occasionnelle</li>
<li><span>Résultats : </span>Les cheveux son plus résistants</li>
<li><span>Les actifs : </span>Acide Hyaluronique, Vitamine B6</li>
<li><span>On aime : </span>Sa mousse onctueuse</li>
</ul>
<p> </p>
<p><span>Le Shampooing Anti-Chute Cystiphane des Laboratoires Bailleul</span> est soin conçu pour la chute de cheveux occasionnelle ou chronique.</p>
<p>Sa formule associe de <span>l'Acide Hyalur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660398504923</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e39ccc4a3f500e5fdf4da62b72b643592d9a21723fa36895b1fe8c215b586dc ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CYTOLNAT KOJIC Soin des Tâches Brunes 30ML ]]></title>
<g:id>272f05bb-31fd-4707-a1fb-e4fc936d7fb1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cytolnat-kojic soin des tâches brunes 30ml?272f05bb-31fd-4707-a1fb-e4fc936d7fb1 ]]></link>
<g:price><![CDATA[ 1395.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">CYTOLNAT KOJIC est une émulsion éclaircissante dermatologique avec une efficacité incontestée dans l’hyperpigmentation, à savoir :</p>
<p>Masque de grossesse (chloasma résiduel), Tâches solaires, Tâches dues au vieillissement (lentigos séniles), Tâches de photosensibilisation (médicaments, parfum).</p>
<p>Son action est triple : préparatoire, inhibitrice et protectrice.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401376190918</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc770d961d0014a41c678c3fc2cb3e7dabb01ca739d7e9d7151e1fd26825fe08 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine 100 ml ]]></title>
<g:id>ad7b5ec4-2baf-46df-852b-0fe82e6ce8e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-100 ml?ad7b5ec4-2baf-46df-852b-0fe82e6ce8e1 ]]></link>
<g:price><![CDATA[ 810.00 EUR ]]></g:price>
<description><![CDATA[ <p>CALMOSINE Digestion Bio est un complément alimentaire d’origine naturelle et doux.<br />CALMOSINE Digestion Bio a une action particulièrement bénéfique chez les petits en cas d’inconfort digestif : apaisés, ils retrouvent leur calme et leurs pleurs diminuent.</p>
<ul><li>Le fenouil améliore le confort digestif,</li>
<li>le tilleul est connu pour ses vertus calmantes notamment au niveau digestif,</li>
<li>la fleur d'oranger apporte son arôme délicat à la formule.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664391000116</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb0f1a44680b4cf3ba5a31d108391917441df31809f55003199d57dd31b5584e ]]></g:image_link>
<g:product_type><![CDATA[ DIGESTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine 12 dosettes 5 ml ]]></title>
<g:id>a35097ca-be14-417b-b2e7-32a343550427</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-12 dosettes 5 ml?a35097ca-be14-417b-b2e7-32a343550427 ]]></link>
<g:price><![CDATA[ 830.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CALMOSINE Digestion Bio est un complément alimentaire d’origine naturelle et doux.</span><br /><span>CALMOSINE Digestion Bio a une action particulièrement bénéfique chez les petits en cas d’inconfort digestif : apaisés, ils retrouvent leur calme et leurs pleurs diminuent.</span></p>
<ul><li>Le fenouil améliore le confort digestif,</li>
<li>le tilleul est connu pour ses vertus calmantes notamment au niveau digestif,</li>
<li>la fleur d'oranger apporte son arôme délicat à la formule.</li> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664391000123</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/726c6e2912ab81806069685b1aaec6190fe9bf9a9e451ac75d427d2a8e4806a5 ]]></g:image_link>
<g:product_type><![CDATA[ DIGESTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine Allaitement 14 sticks 10 ml ]]></title>
<g:id>d6a91118-5a96-4d4c-8f21-bab6c7ebceea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-allaitement 14 sticks 10 ml?d6a91118-5a96-4d4c-8f21-bab6c7ebceea ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>CALMOSINE Allaitement est un complément alimentaire à base d’extraits de plantes, de biotine (vitamine B8) et de magnésium.<br />CALMOSINE Allaitement est destiné à favoriser l’allaitement et le bien-être de la maman grâce à :</p>
<p>- l'extrait de fénugrec qui améliore la lactation, contribue à stimuler et maintenir la production de lait pour un bon allaitement. Il facilite la récupération après la naissance.</p>
<p>- l'extrait de passiflore qui contribue à la détente et la relaxation. La Pa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664391000000</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ffe972a11d401253f9254f04320e887924c0cac1064e207b39774c48395496ff ]]></g:image_link>
<g:product_type><![CDATA[ SANTÉ PREVENTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine Bébé Tux Gorge et Toux 100ml ]]></title>
<g:id>5d1037cc-dcfb-4f9b-b038-e84ba9849071</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-bébé tux gorge et toux 100ml?5d1037cc-dcfb-4f9b-b038-e84ba9849071 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p>Calmosine Bébé Tux est une solution naturelle avec une double action qui apaise sans bloquer le réflexe naturel de toux.</p>
<p>Conçu pour les bébés dès 1 an, il apaise les irritations de la gorge en cas de toux sèche et de toux grasse grâce à l’action protectrice des mucilages de la guimauve et libère les voies respiratoires grâce à la camomille.</p>
<p>Combinant les propriétés de ces deux plantes, ce sirop est soigneusement élaboré pour soulager votre bébé</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010092168</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ae9f7c4e16e5d9c39794f85398fbc9acfdba550fc08b3026e6c84f43ac4cc4b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine Gelée apaisante poussée dentaire 15ml ]]></title>
<g:id>01db2ed1-44ff-4e99-a9a8-8f2727448472</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-gelée apaisante poussée dentaire 15ml?01db2ed1-44ff-4e99-a9a8-8f2727448472 ]]></link>
<g:price><![CDATA[ 775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Calmosine Gelée Apaisante Poussées Dentaires Bio 15 ml est une gelée apaisante aux extraits végétaux (Aloe Vera, Réglisse, Iris) et à la propolis, qui</p>
<p>diminue les inconforts liés aux poussées dentaires et facilite la sortie des premières dents par son action apaisante sur les gencives de bébé.</p>
<p>Testé sous contrôle dermatologique. Haute tolérance.</p>
<p>Sans sucre ajoutés.</p>
<p>Arômes et conservateurs naturels.</p>
<p>100% du total des ingrédients est d'origine naturelle.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664391000208</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/406141b7891d188e194965bdb505aa55dec69711f2867eb1ed3687ac12871dbe ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine Microbiotique Transit 20 Sachets ]]></title>
<g:id>f9e52c2b-9806-4f09-882e-416ca086e8c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-microbiotique transit 20 sachets?f9e52c2b-9806-4f09-882e-416ca086e8c2 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description" id="description">
<p>La caroube, particulièrement les graines de caroube sont riches en fibres solubles, mieux tolérées au niveau digestif. Chez les nourrissons allaités au lait maternisé, la caroube à tendance à augmenter le transit intestinal.</p>
 
<p>Le tamarin est un arbre de la famille des Fabacée utilisé en tant que laxatif doux pour favoriser le transit intestinal.</p>
 
<p>La gomme d’acacia, véritable source de fibres, est documentée pour son intérêt que dans tr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3286010089526</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50bf95b859ba41704d16a81d75bb8b02c9e78805fc337694b4ba51397b816e4b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calmosine Sommeil 14 sticks 10 ml ]]></title>
<g:id>ff462323-dddf-4d71-98c2-fb2bad2dfdae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calmosine-sommeil 14 sticks 10 ml?ff462323-dddf-4d71-98c2-fb2bad2dfdae ]]></link>
<g:price><![CDATA[ 1110.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CALMOSINE Sommeil Bio est un complément alimentaire d’origine naturelle et doux pour retrouver des nuits tranquilles.</span><br /><span>CALMOSINE Sommeil Bio a une action particulièrement bénéfique chez les enfants à partir d’un an en cas de troubles du sommeil (difficultés à s’endormir, réveils nocturnes, réveil matinal précoce) : apaisés, ils s’endorment plus facilement et retrouvent un sommeil régulier.</span></p>
<p>Ce complément alimentaire est une boisson relaxante à base de plant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664391000109</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/abc82bf6871cfd51e43a637c7c917ec7b0a639b0177e1dfc03909c150830cd8e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Calyplantes spray respiratoire 75ml ]]></title>
<g:id>cee706fb-1223-49a7-8876-d74526e7ebd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/calyplantes-spray respiratoire 75ml?cee706fb-1223-49a7-8876-d74526e7ebd7 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Calyplantes spray respiratoire</span><span> est formulé avec un complexe d'huiles essentielles qui lui permet </span><span>d'apaiser et de libérer les voies respiratoires</span><span>. Il est donc idéal pour aider à affronter les affections saisonnières. C'est un produit d'aromathérapie prêt-à-l'emploi. </span><br /><br /><span>Au coeur de la formule de ce spray, on trouve 5 huiles essentielles : Eucalyptus globulus, Pin sylvestre, Romarin à cinéole, Camomille romaine et Estragon. </spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665445000038</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b7e38f39986835d32a6b9d87212704734cc7c6eee8e05abacfce77b4f0834d49 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CanolSlim elimination 60 comprimés ]]></title>
<g:id>17841d35-4a17-47f7-aacc-a0b80c1a54b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/canolslim-elimination 60 comprimés?17841d35-4a17-47f7-aacc-a0b80c1a54b3 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p>CanolSlim Élimination Comprimés est un complément alimentaire à base d'extraits de 3 plantes : artichaut, thé vert et orthosiphon. Cette formule contribue à stimuler les fonctions d'élimination de l'organisme :</p>
<ul><li>le thé vert favorise l'élimination rénale de l'eau,</li>
<li>l'artichaut contribue à la maîtrise des graisses et facilite la perte de poids.</li>
</ul><p>CanolSlim est indiqué en accompagnement de la perte de poids ou pour aider à détoxifier l'organisme.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770010380009</g:gtin>
<g:brand><![CDATA[ IDES PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f670f309dd2cfdea5d3e6e01b9d2e04caae9ce105face45b7fa5fda11f7feff8 ]]></g:image_link>
<g:product_type><![CDATA[ BEAUTÉ ET MINCEUR ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Capricare Lait 1er âge 800g ]]></title>
<g:id>2b3002d1-a028-4dd8-a007-90f5d9447c1f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/capricare-lait 1er âge 800g?2b3002d1-a028-4dd8-a007-90f5d9447c1f ]]></link>
<g:price><![CDATA[ 2449.99 EUR ]]></g:price>
<description><![CDATA[ <p>Nutritionnellement complet, conformément à la règlementation européenne, et cliniquement évalué 1,2 le lait de suite en poudre Capricare® 1er âge est une alternative de choix en nutrition infantile.</p>
<p>Développé à partir du lait de chèvre, il est enrichi pour apporter les vitamines, minéraux et autres nutriments requis pour être un substitut ou un complément à l’allaitement maternel dans le cadre d’une alimentation diversifiée.</p>
<p></p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>9421025232060</g:gtin>
<g:brand><![CDATA[ PEDIACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dde1f454f7c24c07674e681573d4c20c14c0154ea9a49032c4ca5bbbd01cd1c3 ]]></g:image_link>
<g:product_type><![CDATA[ LAIT SPECIFIQUE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Capricare lait de croissance 800g ]]></title>
<g:id>6b30e94b-9469-465e-97b9-a3ce58f10122</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/capricare-lait de croissance 800g?6b30e94b-9469-465e-97b9-a3ce58f10122 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développé à partir des qualités naturelles du lait de chèvre, Capricare® Croissance est un Aliment lacté en poudre pour enfants en bas âge enrichi en vitamines, minéraux et autres nutriments pour répondre aux besoins nutritionnels de l’enfant de plus de 12 mois, en complément d’une alimentation diversifiée et équilibrée.</p>
<p>Capricare® Croissance est source de calcium et de vitamine D, nécessaires à une croissance et un développement osseux normaux de l’enfant ; et source de fer contribuan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>9421025232084</g:gtin>
<g:brand><![CDATA[ PEDIACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d389a438dac745277570a28affd55ae40219d7e147355b21221e92ab8cc6fee8 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Capricare lait en poudre 2ème âge 800g ]]></title>
<g:id>99d3212f-011d-423e-8dcb-6d840d3e9834</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/capricare-lait en poudre 2ème âge 800g?99d3212f-011d-423e-8dcb-6d840d3e9834 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nutritionnellement complet, conformément à la règlementation européenne, et cliniquement évalué1,2 le lait de suite en poudre Capricare® 2ème âge est une alternative de choix en nutrition infantile.</p>
<p>Développé à partir du lait de chèvre, il est enrichi pour apporter les vitamines, minéraux et autres nutriments requis pour être un substitut ou un complément à l’allaitement maternel dans le cadre d’une alimentation diversifiée.</p>
<p></p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>9421025232077</g:gtin>
<g:brand><![CDATA[ PEDIACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/818e838b1b30e7c32833872349596b2b2b550849036a7c1ee6a81a5240524cc7 ]]></g:image_link>
<g:product_type><![CDATA[ LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Care + Patch bouton de fièvre avec applicateur x 15 ]]></title>
<g:id>c9ea78da-0dbb-4330-ab1b-22a354d53510</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/care-patch bouton de fièvre avec applicateur x 15?c9ea78da-0dbb-4330-ab1b-22a354d53510 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le disque en polyuréthane est composé d'un adhésif hypoallergénique dans lequel a été dispersé de l'acide hyaluronique.</p>
<p>Grâce à sa capacité de réentio d'eau, l'acide hyaluronique maintient un niveau adéquat d'humidité, soulageant ainsi les démangeaisons. </p>
<p>Efficace pendant 12 heures, le patch forme une barrière de protection vis-à-vis de l'environnement extérieur, réduisant la possibilité d'infection et</p>
<p>protégeant la peau contre la formation de cicatrices. </p>
<p>Grâce à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3615840000317</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c408da1b6f0324cce721b181256fde3df5160d3b3a104cacdd805b235b851e39 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Care+  Sérum physiologique 40 Unidoses ]]></title>
<g:id>26bb8195-85d8-44a6-a06c-cf4db24cd74e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/care-sérum physiologique 40 unidoses?26bb8195-85d8-44a6-a06c-cf4db24cd74e ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Care+</span><span> est une gamme du laboratoire </span><span>EG Labo</span><span> qui propose un </span><span>sérum physiologique en unidoses </span><span>de 5 ml chacune et destinée à l'usage de toute la famille</span></p>
<p><span> pour le </span><span>lavage du nez, des yeux et des plaies</span><span>. </span></p>
<p><span>Il convient aussi bien aux adultes qu'aux nourrissons grâce à sa formule neutre et parfaitement dosée. </span><br /><br /><span>Le </span><span>sérum physiologique ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3615840000102</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/396f73e9a3c569fd4f845828aaf4993085b660b085a97e49b9453ee6cdf1420d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > Bébé > SOIN ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Carmex Fraise Baume Hydratant Lèvres ]]></title>
<g:id>189b42d0-1309-4c16-9120-77ecc040f3de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/carmex-fraise baume hydratant lèvres?189b42d0-1309-4c16-9120-77ecc040f3de ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Carmex Fraise Baume Hydratant Lèvres SPF15 4,9 ml apaise, hydrate, et nourrit les lèvres sèches et gercées. Il peut aussi s'utiliser comme base de maquillage et fixateur de rouge à lèvres.</p>
<p>Grâce à son SPF15, il protège des rayons du soleil.</p>
<p>Très pratique, ce baume se glisse facilement dans votre sac à main!</p>
<p>Délicieux parfum de fraise !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664789000001</g:gtin>
<g:brand><![CDATA[ LABORATOIRE MAJORELLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e14da56e88fe7733da8549a25094f18114d59ead6e108fe56a47d35f7ada624 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Carmex Naturally - Baume à Lèvres Fruits Rouges, 4g ]]></title>
<g:id>aa4017f7-db3e-486f-bb4d-3eac0a836b37</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/carmex-naturally - baume à lèvres fruits rouges, 4g?aa4017f7-db3e-486f-bb4d-3eac0a836b37 ]]></link>
<g:price><![CDATA[ 340.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Baume à Lèvres Intensément Hydratant Naturally de Carmex </span>lisse et adoucit les lèvres après 1 application. Son parfum fruits rouges apporte une sensation gourmande lors de son application.</p>
<p>Sa formule est enrichie en :</p>
<p>- huiles de graines de fruits pour hydrater les lèvres,</p>
<p>- beurres de cupuaçu et de murumuru antioxydants,</p>
<p>- avoine colloïdale pour apaiser et repulper les lèvres.</p>
<p>Ce baume à lèvres pénètre rapidement pour une hydratation intense. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664789000551</g:gtin>
<g:brand><![CDATA[ LABORATOIRE MAJORELLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cf0a12f24e54d2ceea2233ca06833ec37e7fcba4f3de0b358917c6d7b707591 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Carmex baume lèvres tube 10g ]]></title>
<g:id>f22ab38f-af4e-4652-9c54-8634d4ae96f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/carmex-baume lèvres tube 10g?f22ab38f-af4e-4652-9c54-8634d4ae96f6 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le tube de Carmex Baume pour lèvres hydrate vos lèvres, soulageant ainsi la douleur due aux lèvres gercées. Son efficacité est permanente et son application reste facile. Plus besoin de mettre et en remettre Vos lèvres retrouvent leurs splendeurs. Formule de protection en profondeur qui protège les lèvres du vent comme du soleil Hydratation des lèvres et des craquelures. L'excellent ingrédient dans ce baume à lèvres est le menthol, actif qui laisse une sensation rafraîchissante sur les lèvres ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401351322617</g:gtin>
<g:brand><![CDATA[ LABORATOIRE MAJORELLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a7017e73f573ca3392be07353d36ffad5fa3bf41e27cd52aed533a7d2e64d797 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cartidol 60 Gélules ]]></title>
<g:id>2f780a17-e3bd-43f4-b18c-297e3c8e8b0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cartidol-60 gélules?2f780a17-e3bd-43f4-b18c-297e3c8e8b0b ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytoresearch Cartidol 60 Gélules est un complément alimentaire avec actifs végétaux qui agissent en synergie pour normaliser la réponse inflammatoire et retrouver rapidement confort et mobilité.</p>
<p>Cartidol est recommandé dans les cas suivants :</p>
<p>- Raideurs et gênes articulaires d'intensité plus ou moins aiguë</p>
<p>- Articulations sensibles et/ou abîmées</p>
<p>- Perte de souplesse et de mobilité</p>
<p>La Vergerette du Canada soulage les douleurs inflammatoires. La Boswellia, le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560242577</g:gtin>
<g:brand><![CDATA[ NEW NORDIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/10f0d3b969f99a4a614563e1fb2e11ccd10c2b494275e928b6382a6f59e0f834 ]]></g:image_link>
<g:product_type><![CDATA[ SANTÉ PREVENTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Après Shampooing Volume Cheveux Fins 150ml ]]></title>
<g:id>7d448b05-afca-4042-8c1a-7a4330a8876d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-après shampooing volume cheveux fins 150ml?7d448b05-afca-4042-8c1a-7a4330a8876d ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Après-shampooing Soin Volume Cattier, à la texture crémeuse et fondante, nourrit, densifie et renforce les longueurs affinées. Véritable complexe créateur de matière,</p>
<p>l’huile d’abyssinie, associée aux phytostérols, restructure et protège les cheveux grâce à ses vertus nutritives et filmogènes. Le beurre de cupuaçu répare, gaine et facilite</p>
<p>le démêlage sans alourdir les cheveux. La chevelure, douce et brillante, retrouve son toucher souple, soyeux et aéré.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917636</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7f7dc5f5447b83396e2cdc9b34ca0e77880a8f0ac59f633d95b255d16a0fb222 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Argile Blanche Surfine Kaolin 200 g ]]></title>
<g:id>b9906d2a-cc0a-4a6b-8b81-56a2a5b26c67</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-argile blanche surfine kaolin 200 g?b9906d2a-cc0a-4a6b-8b81-56a2a5b26c67 ]]></link>
<g:price><![CDATA[ 410.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Argile Blanche Surfine Cattier s'utilise en masque de beauté et en cataplasme pour ses bienfaits sur la peau et l'organisme.</p>
<p>L'Argile Blanche Surfine Cattier, grâce à son pH neutre, est particulièrement bien adaptée au soin des peaux sèches et fragiles. Non allergisante, elle convient aussi à la</p>
<p>peau sensible des bébés et peut s'utiliser comme talc. Elle est également antiseptique et cicatrisante, ce qui la rend précieuse pour le soin des peaux irritées.</p>
<p>Absorbante, déc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950011044</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0dcdfd4e049722fa828a4c68874b9db13d50cf98f323ab50263c55fade561e7b ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Argile Tube Mini 100ml ]]></title>
<g:id>84d72e80-249d-4207-9b8f-0f60ee4c8b7c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-argile tube mini 100ml?84d72e80-249d-4207-9b8f-0f60ee4c8b7c ]]></link>
<g:price><![CDATA[ 355.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Argile Verte Prête à l'Emploi Cattier s'utilise en masque de beauté et en cataplasme pour ses multiples bienfaits.</p>
<p>Absorbante, purifiante et régénérante, l'Argile Verte Prête à l'Emploi Cattier est particulièrement bien adaptée au soin des peaux mixtes à grasses. Elle absorbe et régule</p>
<p>l'excès de sébum, élimine les impuretés, revitalise la peau et favorise le renouvellement cellulaire. Adoucissante, elle soulage les peaux irritées.</p>
<p>Très riche en micro-nutriments, elle a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950011068</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/29756c4598ebfb33ddc1bce55a94656eb8e11303371f7b05412868cb6906768b ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Argile Verte Concassée 3 kg ]]></title>
<g:id>3a50a585-226b-4ba2-a473-5daf21fd8a89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-argile verte concassée 3 kg?3a50a585-226b-4ba2-a473-5daf21fd8a89 ]]></link>
<g:price><![CDATA[ 965.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Argile Verte Concassée Cattier s'utilise en masque de beauté et en cataplasme pour ses multiples bienfaits.</p>
<p>Absorbante, purifiante et régénérante, l'Argile Verte Cattier est particulièrement bien adaptée au soin des peaux mixtes à grasses. Elle absorbe et régule l'excès de sébum,</p>
<p>élimine les impuretés, revitalise la peau et favorise le renouvellement cellulaire.</p>
<p>Adoucissante, elle soulage les peaux irritées. Grâce à sa richesse en micro-nutriments, elle apporte à la pea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950011020</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3faf6bb207623527e8e5dfadbd4327cd8f9871462443eb8576de0e30fdfc68d ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Argile Verte Prête à l'Emploi 400 g ]]></title>
<g:id>1a70722a-eb3f-49f4-bf6b-d1e992c15281</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-argile verte prête à l'emploi 400 g?1a70722a-eb3f-49f4-bf6b-d1e992c15281 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Argile Verte Prête à l'Emploi 400 g est particulièrement recommandée pour les peaux mixtes à grasses car elle est absorbante, purifiante et régénérante. Elle</p>
<p>absorbe l'excès de sébum et régule sa production, élimine les impuretés et toxines et revitalise la peau en favorisant le renouvellement cellulaire. L'argile est riche en</p>
<p>magnésium et minéraux permettant trois actions : purifier, apaiser et soulager. Ainsi elle peut aussi s'utiliser en cataplasme.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950011006</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/83047e0675993f6bd514453925925486047f69de1ebf47bde3ca540d3a880bd1 ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Argile Verte Ultra-Ventilée 250 g ]]></title>
<g:id>d7ebbec9-62be-4929-a505-e966578bd1e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-argile verte ultra-ventilée 250 g?d7ebbec9-62be-4929-a505-e966578bd1e6 ]]></link>
<g:price><![CDATA[ 350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Argile Verte Ultra-Ventilée 250 g est un poudre d'argile montmorillonite illite fine. Cette poudre est à utiliser soit en masque pour révéler la beauté des peaux</p>
<p>grasses ou mixtes, en cataplasme pour soulager ou en eau d'argile pour une utilisation interne. Elle peut s'utiliser seule ou combinée à des huiles essentielles. Argile 100%</p>
<p>naturelle, extraite en France, séchée sous le soleil.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911771</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/75a932c3333fa5e9e47f01ab23b42af4483a987de674fd4e7236684e50b295c7 ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Baume de Massage Tendre Caresse 100g ]]></title>
<g:id>415a92fb-36b6-4ed0-8847-a9a2bb0a3da3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby baume de massage tendre caresse 100g?415a92fb-36b6-4ed0-8847-a9a2bb0a3da3 ]]></link>
<g:price><![CDATA[ 1050.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un baume délicat et enveloppant, certifié bio, idéal pour partager un moment de complicité et de tendresse en massant bébé. Une association de 4 huiles végétales bio (amande douce, camélia, macadamia, tournesol) pour nourrir, protéger et adoucir la peau délicate de bébé et celle fragilisée de maman pendant et après la grossesse. Multifonctions : prévention des vergetures / massages / cicatrices / bain (protège du calcaire).</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950927703</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/458fdfb09258adce585e19676e2175508fbe2a27cda0af0faf9710328e769ce7 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > Dermocosmétique > Bien être ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Crème Change 3en1 75ml ]]></title>
<g:id>cd090273-263f-4112-99d8-1fea08e0fc73</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby crème change 3en1 75ml?cd090273-263f-4112-99d8-1fea08e0fc73 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Humidité, petits plis, frottements de la couche… Le siège de bébé est mis à rude épreuve. C’est pourquoi il a besoin de soin au quotidien qui apporte douceur et protection. La crème change 3 en 1 hydrate, protège et adoucit les fesses de bébé. Elle prévient les irritations et favorise la disparition des rougeurs. La texture onctueuse crée une véritable barrière protectrice qui isole les fesses de Bébé de l’humidité et du frottement des couches.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928045</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0da5a3d5223f4512a0b700bdeea1a535bdb3bf5fdb4b9f7f1117dfed6eca2f57 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Crème hydratante bébé 100ml ]]></title>
<g:id>5fb40839-1d4c-4719-ab6c-70fedae58175</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby crème hydratante bébé 100ml?5fb40839-1d4c-4719-ab6c-70fedae58175 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydrater la peau de bébé est un geste simple du quotidien mais il permet de profiter d’un instant de partage, détente et tendresse avec son enfant. La crème hydratante visage et corps, nourrit, adoucit et protège la peau. Elle convient aux peaux sensibles des bébés et permet un soin hydratant complet.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950927826</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/21564affdedbd03ebf2578a469d8fea4b1bb9112683b969fa0929e71b0fbea3f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Eau nettoyante bébé 500ml ]]></title>
<g:id>b9af8236-6934-47ca-b476-1c20e6429d6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby eau nettoyante bébé 500ml?b9af8236-6934-47ca-b476-1c20e6429d6e ]]></link>
<g:price><![CDATA[ 880.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928076</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f6b55ec9e67a4fc1861e2a61238d6e3a164b294792df1e0b547e5fe3ad808f6 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > EAU NETTOYANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Gel Lavant Eco-Recharge 1Litre ]]></title>
<g:id>943744ca-7ad9-45e4-b9cc-31c7f3f88048</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby gel lavant eco-recharge 1litre?943744ca-7ad9-45e4-b9cc-31c7f3f88048 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le bain, un moment intime avec bébé, de calme et de bien-être, où on joue, on prend le temps, on va au rythme de bébé. C’est aussi un moment de complicité entre le parent et son enfant. Le Gel Lavant Doux Cattier est spécialement formulé pour laver en douceur les cheveux fragiles et la peau délicate de bébé. Sa formule très douce, sans savon, ni sulfates, respecte l'équilibre naturel du cuir chevelu et de l'épiderme. Enrichi en protéines de riz et en huile d'amande douce bio, il laisse la pea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950927581</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a59ed800920fbc9b77af2f790cdc27797ba533ed28a18cce934e00782d4f6630 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Gel lavant doux 500ml ]]></title>
<g:id>6f7ee1a6-510c-48d6-aa53-94541df2b5d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby gel lavant doux 500ml?6f7ee1a6-510c-48d6-aa53-94541df2b5d1 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le bain, un moment intime avec bébé, de calme et de bien-être, où on joue, on prend le temps, on va au rythme de bébé. C’est aussi un moment de complicité entre le parent et son enfant. Le Gel Lavant Doux Cattier est spécialement formulé pour laver en douceur les cheveux fragiles et la peau délicate de bébé. Sa formule très douce, sans savon, ni sulfates, respecte l'équilibre naturel du cuir chevelu et de l'épiderme. Enrichi en protéines de riz et en huile d'amande douce bio, il laisse la pea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928038</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/890a67baedf4c3df42424cd45dc80bf4adb4fd184ff21aa9ba4fab96022d0d5d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Liniment 200ml ]]></title>
<g:id>8bf5c06c-d436-40db-b42c-98d924060c71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby liniment 200ml?8bf5c06c-d436-40db-b42c-98d924060c71 ]]></link>
<g:price><![CDATA[ 585.00 EUR ]]></g:price>
<description><![CDATA[ <div class="data item title" id="tab-label-description">
<div class="data switch" id="tab-label-description-title">Le Liniment Cattier certifié bio nettoie en douceur les fesses de bébé. Sa texture onctueuse forme un film protecteur qui isole la peau de l’humidité et du frottement des couches. Enrichi en huile d’amande douce bio et en beurre de coco bio, il apaise les irritations, prévient les rougeurs et soulage les sensations d’inconfort.</div>
</div>
<div class="data item content" id="descrip ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928014</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf4609e96ac311a745fee456debe01b8494c3fa461f9acef2ee74899b0cf4faa ]]></g:image_link>
<g:product_type><![CDATA[ CHANGE > LINIMENT OLEO CALCAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Liniment Lait 500ml ]]></title>
<g:id>2ab8bf94-6593-4fa3-9777-69620289ade7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby liniment lait 500ml?2ab8bf94-6593-4fa3-9777-69620289ade7 ]]></link>
<g:price><![CDATA[ 1125.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Liniment Cattier certifié bio nettoie en douceur les fesses de bébé. Sa texture onctueuse forme un film protecteur qui isole la peau de l’humidité et du frottement des couches. Enrichi en huile d’amande douce bio et en beurre de coco bio, il apaise les irritations, prévient les rougeurs et soulage les sensations d’inconfort.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928021</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf4609e96ac311a745fee456debe01b8494c3fa461f9acef2ee74899b0cf4faa ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baby Mousse Lavante Corps & Cheveux Bio 150 ml ]]></title>
<g:id>a1b12155-baca-429e-892e-2b0385994651</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baby mousse lavante corps & cheveux bio 150 ml?a1b12155-baca-429e-892e-2b0385994651 ]]></link>
<g:price><![CDATA[ 580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Baby Mousse Lavante Corps &amp; Cheveux Bio 150 ml est une mousse spécialement conçue pour le nettoyage de la peau délicate et des cheveux fragiles de bébé, simplifiant ainsi la routine de bain.</p>
<p>Les extraits naturels présents dans la formule apaisent, nourrissent, protègent et adoucissent la peau, laissant une sensation de fraîcheur et de propreté.<br />La peau est parfaitement et délicatement lavée, rendue plus souple et confortable.</p>
<p>Sa texture mousse, légère et onctueu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928069</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6630be0c3891ad5c8a8f85ca21cb0578d6cc2fd17db203a00ccaca39b345eb55 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Bain de Bouche Fraîcheur Bio 500 ml ]]></title>
<g:id>9c32a215-965f-45b8-a2e6-1b8a46a13953</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-bain de bouche fraîcheur bio 500 ml?9c32a215-965f-45b8-a2e6-1b8a46a13953 ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Bain de Bouche Fraîcheur Bio 500 ml est un bain de bouche idéal pour rafraîchir l'haleine, purifier instantanément et éliminer les impuretés.<br />Sa formule respectueuse des gencives sensibles complète efficacement le brossage. Elle offre une protection quotidienne et rafraîchit l'haleine grâce à son agréable goût de menthe.</p>
<p>Sans alcool.</p>
<p>99,1% du total est d'origine naturelle.<br />46,8% du total des ingrédients sont issus de l'Agriculture Biologique.</p>
<p>Cosmos Orga ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950920834</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4304836c6731be0126ecd8a62c89f6e6094c7c6543727b0e54140f8210157745 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Baume Demêlant  Grenade 150ml ]]></title>
<g:id>fa333d8f-f02e-4841-93df-aa831c00427f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-baume demêlant  grenade 150ml?fa333d8f-f02e-4841-93df-aa831c00427f ]]></link>
<g:price><![CDATA[ 785.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Baume Démêlant Cattier nourrit en profondeur, répare et revitalise les cheveux sans les alourdir. </p>
<p>Sa texture onctueuse et fondante libère un délicieux parfum de grenade. Enrichi en aloe vera, aux vertus protectrices et nutritives, il fortifie la fibre capillaire, lisse les</p>
<p>écailles et gaine le cheveu.</p>
<p>L’Amisol TrioTM restaure la barrière lipidique du cuir chevelu et apporte brillance, souplesse et volume. </p>
<p>Protégés des agressions extérieures, les cheveux sont d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912549</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5d5542c59ecdc31af8959e7660e01bfdaaf97b737d9b81a021b508fd99eaaf76 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Beurre de Karité 100% Bio 100 g ]]></title>
<g:id>488e5b40-c938-4a61-bc44-022e9fda1db4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-beurre de karité 100% bio 100 g?488e5b40-c938-4a61-bc44-022e9fda1db4 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Beurre de Karité 100% Bio 100 g naturellement riche en vitamines A, D, E, F nourrit intensément l'épiderme et favorise le renouvellement cellulaire. Il assouplit, adoucit et protège la peau des agressions extérieures, prévenant aussi la sécheresse cutanée. Il redonne éclat et vitalité aux cheveux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950070300</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc20d8ba66cdc0e3be55be4535ee4128b64ccbd5381df4496815e03c75a6d9e6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Beurre de Karité 100% Bio 20g ]]></title>
<g:id>afaa63bc-4108-4b83-b292-c20c0d9df942</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-beurre de karité 100% bio 20g?afaa63bc-4108-4b83-b292-c20c0d9df942 ]]></link>
<g:price><![CDATA[ 410.00 EUR ]]></g:price>
<description><![CDATA[ <p>Recherché pour ses propriétés réparatrices, anti-desséchantes et protectrices, le Beurre de Karité est naturellement riche en vitamines A, D, E et F.</p>
<p>Le Beurre de Karité bio Cattier nourrit et hydrate* intensément l’épiderme, prévient la sécheresse cutanée, favorise le renouvellement cellulaire, assouplit et adoucit la peau tout en la protégeant des agressions extérieures.</p>
<p>Sa petite taille permet de l'emmener partout.</p>
<p>* Les couches supérieures de l’épiderme.</p>
<p>Le Beu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911368</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e9c7b4ec57b25001ebf0d2ed2e03d66402c5deaf738bd59f787a09831d76f08 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Beurre de Karité Parfum Fleur des Îles 100g ]]></title>
<g:id>0993de49-2df2-4129-9c04-7e7a17d152b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-beurre de karité parfum fleur des Îles 100g?0993de49-2df2-4129-9c04-7e7a17d152b9 ]]></link>
<g:price><![CDATA[ 820.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’indispensable pour nourrir et protéger visage, corps et cheveux.</p>
<p>Recherché pour ses propriétés réparatrices, anti-desséchantes et protectrices, le Beurre de Karité est naturellement riche en vitamines A, D, E et F. Le Beurre de Karité bio Cattier nourrit et hydrate* intensément l’épiderme, prévient la sécheresse cutanée, favorise le renouvellement cellulaire, assouplit et adoucit la peau tout en la protégeant des agressions extérieures.  * Les couches supérieures de l’épiderme.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911993</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53b44e87694a15d56457ffe595c07254a8725101e0e8d30ddb80d4f7f87f0484 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Beurre de Karité Parfum Miel 100g ]]></title>
<g:id>d48fb74d-b1d2-4a55-9caa-cb912e393efa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-beurre de karité parfum miel 100g?d48fb74d-b1d2-4a55-9caa-cb912e393efa ]]></link>
<g:price><![CDATA[ 820.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'indispensable pour nourrir et protéger visage, corps et cheveux.</p>
<p>Recherché pour ses propriétés réparatrices, anti-desséchantes et protectrices, le Beurre de Karité est naturellement riche en vitamines A, D, E et F. Le Beurre de Karité bio Cattier nourrit et hydrate* intensément l'épiderme, prévient la sécheresse cutanée, favorise le renouvellement cellulaire, assouplit et adoucit la peau tout en la protégeant des agressions extérieures.</p>
<p>* Les couches supérieures de l'épiderme. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911986</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/be5601c23244cf4a384b970133d10da0cf2fbcc34dfe0076d1d578888006af61 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Caresse d'Herboriste Lait Démaquillant 200ml ]]></title>
<g:id>4d960897-d520-4bec-9c85-c3b3ffe67690</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-caresse d'herboriste lait démaquillant 200ml?4d960897-d520-4bec-9c85-c3b3ffe67690 ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Le Lait démaquillant Caresse d’Herboriste élimine efficacement maquillage et impuretés tout en respectant l’équilibre naturel de l’épiderme.</p>
<p class="p1">Enrichi de composants naturels adoucissants et nourrissants (Eau Florale de Bleuet bio et Extrait de Tournesol bio), ce soin démaquille en douceur le visage et les yeux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911481</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87c40b0c2ed76ffeb98f2e11ed555847b01ea98574c56ba98241ddb098687b75 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dentargile Dentifrice Anis 75ml ]]></title>
<g:id>c4a41c4a-f681-4b10-90ff-6e3d4751eb3d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dentargile dentifrice anis 75ml?c4a41c4a-f681-4b10-90ff-6e3d4751eb3d ]]></link>
<g:price><![CDATA[ 470.00 EUR ]]></g:price>
<description><![CDATA[ <div class="short-description">
<div class="std">Le dentifrice Dentargile, grâce à une formule enrichie en argile et en huile essentielle d'anis, recherchée pour ses propriétés antiseptiques, renforce l'émail des dents et prévient la formation du tartre.</div>
</div>
<div class="block2"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950040068</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ddf178183df5b593db1d3c88ed99f554ec048793b011651629c420dc067b3d9 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dentargile Dentifrice Citron 75ml ]]></title>
<g:id>3f435313-1697-434c-9ed5-e483d94d4df8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dentargile dentifrice citron 75ml?3f435313-1697-434c-9ed5-e483d94d4df8 ]]></link>
<g:price><![CDATA[ 470.00 EUR ]]></g:price>
<description><![CDATA[ <p>La santé des dents et des gencives dépend principalement d'une bonne hygiène bucco-dentaire.</p>
<p>Pour contribuer à préserver des dents et des gencives saines malgré les agressions quotidiennes qu'elles subissent, le laboratoire Cattier a conçu une gamme complète de dentifrices reminéralisants à l'argile, enrichis en ingrédients naturels.</p>
<p>Le dentifrice dentargile, grâce à une formule enrichie en argile, composition minérale complexe, et en huile essentielle de citron, très efficace c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950040051</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88bb1468b24a50b9028fefc01c32314d21ed7e7f014d5bdecfd2f08ec742a4d1 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dentargile Dentifrice Menthe 75ml ]]></title>
<g:id>0352da91-f068-4db4-aa80-33bf6be5de84</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dentargile dentifrice menthe 75ml?0352da91-f068-4db4-aa80-33bf6be5de84 ]]></link>
<g:price><![CDATA[ 470.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le dentifrice Dentargile Menthe de la marque Cattier offre la possibilité d'obtenir des dents plus saines en gardant une haleine fraîche.</p>
<p>Sa formule, élaborée à partir d'argile de composition minérale, d'huile essentielle de menthe et de sel marin, contribue à tonifier vos gencives, à renforcer l'émail des dents et tout en vous assurant une haleine fraîche.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950040020</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/329a4c6876b76b58978affc0e3343cf93b15277aed66ceacebd2aa923fb6939f ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dentargile Dentifrice Propolis ]]></title>
<g:id>0cde25bd-fc2b-4cde-92ee-c12e3d919775</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dentargile dentifrice propolis?0cde25bd-fc2b-4cde-92ee-c12e3d919775 ]]></link>
<g:price><![CDATA[ 470.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le dentifrice DENTOLIS Protection des Gencives est recommandé pour les gencives sensibles et  douloureuses et dans le cas de saignements gingivaux.</p>
<p>Sa formule enrichie en argile, composition minérale complexe, et en propolis, aux propriétés bactéricides et fongicides, renforce l'émail des dents, favorise l'élimination de la plaque dentaire et fortifie les gencives.</p>
<p>La propolis est une substance élaborée par les abeilles riche en flavonoïdes et en acides organiques.</p>
<p>Contie ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950040075</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/307c5ea0a8a79008fd37bebac7569697da9dcd0aee9d0e6efe8cdb1d9874ab20 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dentargile Dentifrice Romarin 75ml ]]></title>
<g:id>aad6031c-d000-4c13-8efc-093b618d5be5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dentargile dentifrice romarin 75ml?aad6031c-d000-4c13-8efc-093b618d5be5 ]]></link>
<g:price><![CDATA[ 470.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le dentifrice Dentargile Anti-âge et Fortifiant, possède une formule enrichie en Argile, composition minérale complexe, et en huile essentielle de Romarin bio, aux vertus stimulantes et purifiantes.</p>
<p>Il renforce l’émail des dents, favorise l’élimination de la plaque dentaire et fortifie les dents.</p>
<p>Le sel marin, riche en oligo-éléments, tonifie les gencives.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950040037</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0211d9ed3b1fc52853c66d56a0f8afa71cd0d26d95f33d2a3e27e98fbb116927 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dermo Gel Nettoyant Rééquilibrant 200ml ]]></title>
<g:id>ccc87a52-8ccb-4d6b-a2c2-47bd6462690c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dermo gel nettoyant rééquilibrant 200ml?ccc87a52-8ccb-4d6b-a2c2-47bd6462690c ]]></link>
<g:price><![CDATA[ 920.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce gel nettoyant, aux notes fraîches de concombre, nettoie la peau sans l’agresser, élimine efficacement l’excès de sébum et les impuretés. Le complexe actif sébo-régulateur aide à rééquilibrer le microbiome cutané, purifier et matifier la peau tout en préservant son équilibre. La peau est nette, les pores sont resserrés et les brillances sont atténuées.</span><br /><span>Sans sulfates*. Non comédogène.</span><br /><span>*Sans tensioactif sulfaté</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928557</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/863f7b5e7941ba3819c3a7fc6a0c4322e22c660b78f45a1491479109249322de ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dermo Soin de Jour Matifiant  40ml ]]></title>
<g:id>129fc485-c076-4e3c-a5c8-add4282ff56a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dermo soin de jour matifiant  40ml?129fc485-c076-4e3c-a5c8-add4282ff56a ]]></link>
<g:price><![CDATA[ 1340.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le soin de jour matifiant, régule l’excès de sébum pour un fini mat immédiat et durable. L’association du Complexe actif sébo-régulateur et de l’huile de jojoba bio, contribue à équilibrer le microbiome cutané et purifier la peau sans la dessécher. Jour après jour, la brillance est maitrisée, la qualité de la peau est améliorée, elle est plus nette et fraîche. Non comédogène.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928571</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3de5f5fe447be81f3b7b8582a18175c9976394486f7e04288aa8503c0e5d36fe ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Dermo Sérum Anti-imperfections 30ml ]]></title>
<g:id>6eabe4df-c23f-4113-88ca-9e2e509788be</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-dermo sérum anti-imperfections 30ml?6eabe4df-c23f-4113-88ca-9e2e509788be ]]></link>
<g:price><![CDATA[ 1420.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un soin expert, ultra concentré en actifs qui agit efficacement pour prévenir et corriger tous les types d’imperfections. Le complexe actif sébo-régulateur1 aide à rééquilibrer le microbiome cutané, purifier et matifier la peau tout en préservant son équilibre. Associé à du Gluconolactone, actif aussi efficace que les AHA/BHA mais mieux toléré par la peau, et à du Bisabolol, le soin désincruste les pores et affine le grain de peau, aide à limiter la formation des imperfections et favori ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950928618</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8ec96d978e5e9c7638d30090aea65b1ba5b5a8d222ee73041d400f390d0f373 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Douche Sublime alchimie 200ml ]]></title>
<g:id>0cc3c109-f89c-4237-8675-ddf3643b2362</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-douche sublime alchimie 200ml?0cc3c109-f89c-4237-8675-ddf3643b2362 ]]></link>
<g:price><![CDATA[ 395.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>ormulé sans savon et sans sulfates, ce gel douche nettoie délicatement, tout en laissant la peau douce.</span><br /><span>Son parfum chaud et solaire d’amande &amp; d’ylang-ylang offre un moment d’évasion le temps d’une douche et laisse un parfum subtil sur la pea</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950923552</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6d7ec142f1540a440f9299097795600d5a9542456cb5181a692e2bb96d7596d3 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Déodorant Brume Active Bio 100ml ]]></title>
<g:id>a789b47d-12ed-4622-b942-21118cf1d995</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-déodorant brume active bio 100ml?a789b47d-12ed-4622-b942-21118cf1d995 ]]></link>
<g:price><![CDATA[ 615.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Brume Active Déodorant Spray 100 ml au parfum chypré de cardamome et patchouli est un déodorant certifié biologique pour femme. Il purifie et agit efficacement</p>
<p>contre la transpiration grâce à son principe actif naturel anti-bactérien. Il apporte douceur et fraîcheur tout au long de la journée et prévient la formation d'odeurs sans</p>
<p>bloquer le processus naturel de transpiration. Sans sel d'aluminium. Sans gaz propulseur. Certifié bio par Ecocert. 98,9% du total des ingrédi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912006</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c47faac5a8381dce1204535f410b91651ad5673c4a0f9342d7e42ec6fce7476 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Déodorant Roll-On Bergamote Orange Bio 50 ml ]]></title>
<g:id>e73e1432-6869-4dd4-9e33-c3cd67e6bf19</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-déodorant roll-on bergamote orange bio 50 ml?e73e1432-6869-4dd4-9e33-c3cd67e6bf19 ]]></link>
<g:price><![CDATA[ 575.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Déodorant Roll-On Bergamote Orange Bio 50 ml est un déodorant pour toutes les peaux même les plus sensibles. Il apporte confort et fraîcheur. Formulé sans alcool et sans sels d'aluminium, il protège et respecte la peau sensible des aisselles même récemment épilée. Son principe actif naturel antibactérien et purifiant prévient la formation d'odeurs sans bloquer le processus de transpiration. Il ne laisse ni traces blanches ni jaunes sur les vêtements. Son parfum léger d'agrumes laisse  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950922104</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3424989bbfc6b257e0f600d7be42d14dfa32a51e7f51e8bab44c37058e191a92 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Eclat de Rose Concentré Regard 15ml ]]></title>
<g:id>2e503072-7a8f-45ff-a254-15ab4d120381</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-eclat de rose concentré regard 15ml?2e503072-7a8f-45ff-a254-15ab4d120381 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Éclat de Rose Concentré Regard 15 ml propose une action anti-âge, anti-cernes et anti-poches au contour de l'oeil, offrant au regard une véritable cure de beauté.<br /><br />L'huile d'argan bio favorise le dynamisme cellulaire, hydrate et renforce l'épiderme. La synergie d'actifs de cire de blé noir et extraits d'algues permet et décongestionner et réduire les poches et la couleur des cernes. L'extrait de lavande aide à lutter contre les expressions et lisse. L'extrait de rose bio apa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911955</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d01c1e9ede2c897942d1f1f5e80964a185abc4612bb31f9adaffb03fb55ac5bb ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Eridène Dentifrice Haleine Fraîche 75ml ]]></title>
<g:id>b30bb339-86c0-4caa-a292-eb22fa84d859</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-eridène dentifrice haleine fraîche 75ml?b30bb339-86c0-4caa-a292-eb22fa84d859 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eridène Gencives Fragiles raffermit les gencives grâce à l’extrait de souak.</p>
<p>Il favorise également l’élimination du tartre et de la plaque dentaire par son action protéolytique.</p>
<p>Un dentifrice doux pour les dents et qui agit sans rayer l’émail, mais aussi actif contre les taches.</p>
<p>Il favorise la prévention de la carie grâce au fluor actif et blanchit les dents.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911092</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/933d8c9a50bb27cd8eb30179e50fff250e430e5530eb22005c948902382f2d09 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Eridène Dentifrice Sans Sulfates Ni Fluor 75 ml ]]></title>
<g:id>9b1bd6ed-e334-4f71-a83b-0736a5593b5a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-eridène dentifrice sans sulfates ni fluor 75 ml?9b1bd6ed-e334-4f71-a83b-0736a5593b5a ]]></link>
<g:price><![CDATA[ 635.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Eridène Dentifrice Sans Sulfates Ni Fluor 75 ml est un dentifrice blanchissant au bon goût de menthe douce pour un soin complet des dents.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950915571</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dd38d073bdf0978544622a6c5c8cad4ee8c3f9c93d99823488d5e8f5f611c262 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Gel Crème Purifiant 50ml ]]></title>
<g:id>0904fffd-b1f2-4f3c-b038-89019aead8fc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gel crème purifiant 50ml?0904fffd-b1f2-4f3c-b038-89019aead8fc ]]></link>
<g:price><![CDATA[ 585.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Le Gel Crème Purifiant de la marque Cattier vous permet de traiter vos problèmes de peau tout en la purifiant.</p>
<p class="p1">Sa formule, élaborée à base d'extrait de menthe poivrée bio, adoucit et apaise votre épiderme.</p>
<p class="p1">Avec le Gel Crème Purifiant vous retrouverez une peau purifiée, brillante et éclatante.</p>
<p class="p1">Riche en actifs normalisants et purifiants comme l’extrait de menthe poivrée bio, le Gel Crème Purifiant Cattier hydrate, matifie et rafra ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950080033</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/35f3cde098d434d65d65f61c0f03ede42d262adb80e7818249ecea692724832d ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Gel Nettoyant Purifiant 200 ml ]]></title>
<g:id>506d2d43-be0a-42bc-8ccc-6ea731454aa0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gel nettoyant purifiant 200 ml?506d2d43-be0a-42bc-8ccc-6ea731454aa0 ]]></link>
<g:price><![CDATA[ 540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Gel Nettoyant Purifiant 200 ml nettoie en douceur les peaux mixtes à imperfections et les peaux grasses.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911238</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b90ea87516839dc420cf1484b7f5c13713902a2bea17615a610465cee9821c5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Gelée Exfoliante Corps 200 ml ]]></title>
<g:id>5ae8d607-4a4c-43fd-bcd2-09c399acb974</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gelée exfoliante corps 200 ml?5ae8d607-4a4c-43fd-bcd2-09c399acb974 ]]></link>
<g:price><![CDATA[ 1170.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Gelée Exfoliante Corps 200 ml au parfum subtil de pêche ylang-ylang et aux grains naturels (abricot, riz et cellulose) se transforme en un lait onctueux au contact de l'eau et de la peau.</p>
<p>Elle exfolie la peau et élimine les cellules mortes tout en douceur. Enrichie en argile violette, elle redonne de l'éclat à la peau, la laissant douce, lisse et hydratée.</p>
<p>La peau est ainsi préparée pour recevoir un soin hydratant. La gelée exfoliante convient à tous les types de peaux,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950920803</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4965af8f5011c503b880eddf8ada9f76800e84781ded860229850ab0b89ce311 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Gommage Argile Blanche 100 ml ]]></title>
<g:id>357cb2e4-898e-45a5-8d53-ac9e90ba4663</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gommage argile blanche 100 ml?357cb2e4-898e-45a5-8d53-ac9e90ba4663 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Gommage Argile Blanche 100 ml purifie, adoucit et clarifie l'épiderme de toutes les peaux. Il débarrasse la peau de toutes ses impuretés, il la lisse et lui apporte</p>
<p>douceur. Enrichi en huile de jojoba bio, il hydrate et protège, et, grâce à l'huile essentielle de menthe poivrée bio, il rafraîchit et stimule. L'eau florale de lavande bio et</p>
<p>l'aloe vera permettent de purifier et apaiser la peau. Certifié bio. 98.5% du total des ingrédients sont d'origine naturelle. 38.4% d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924054</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a268774611e2d451926036202bd52ffdbdd2cd3373b3631a9cd218b8e0d94052 ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Gynea Gel Intime Douceur 500ml ]]></title>
<g:id>e63c56e4-a2f2-4d74-bcf7-f2fe95d54b9b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gynea gel intime douceur 500ml?e63c56e4-a2f2-4d74-bcf7-f2fe95d54b9b ]]></link>
<g:price><![CDATA[ 865.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin douceur Gynea Cattier est une émulsion lavante sans savon spécialement conçue pour la toilette intime quotidienne.</p>
<p>Grâce à sa formule ultra douce, au pH équilibré, Gynea Cattier nettoie en douceur, préserve l’équilibre fragile de la flore vaginale et respecte la sensibilité des muqueuses.</p>
<p>Enrichi en extrait de fleur de Calendula bio, en huile essentielle de Géranium bio et en Extrait de Bleuet bio, il apaise et adoucit tout en protégeant contre les infections et</p>
<p>l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912389</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2d77a90d2a6fe4372304825a0ad4dde251b0666af44b3a9d71392aada448763 ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Gynea Soin Douceur Toilette Intime 200 ml ]]></title>
<g:id>c95f574e-6ffa-4a05-b600-81a3002af9e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gynea soin douceur toilette intime 200 ml?c95f574e-6ffa-4a05-b600-81a3002af9e4 ]]></link>
<g:price><![CDATA[ 660.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Gynea Soin Douceur Toilette Intime 200 ml formulé sans savon est spécialement conçu pour la toilette intime quotidienne des femmes. Il nettoie en douceur grâce à sa formule ultra-douce au pH équilibré et assure une protection optimale tout en respectant l'équilibre intime. Enrichi en extrait de fleur de Calendula bio, en huile essentielle de géranium et en extrait de bleuet bio, il apaise et adoucit tout en prévenant les irritations. Certifié bio par Ecocert.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950910255</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b125ebdb1812f37c52a0e84999df6143a596725510b3c0b923be05bc3f976eb ]]></g:image_link>
<g:product_type><![CDATA[ PARAPHARMACIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Homme Déodorant Roll Fraîcheur 24h 50ml ]]></title>
<g:id>46989f9f-dd57-481e-b22c-d3f33f8ff67d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-homme déodorant roll fraîcheur 24h 50ml?46989f9f-dd57-481e-b22c-d3f33f8ff67d ]]></link>
<g:price><![CDATA[ 560.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce déodorant anti-trace apporte une sensation de fraicheur tout au long de la journée et protège des mauvaises odeurs. L'extrait botanique actif BIO, composé de joubarbe et de feuilles d'olivier, associé à de l'aloe vera, offre un cœur de formule bio 100% actif qui apporte une action anti-bactérienne et apaisante. Après utilisation, les odeurs sont neutralisées et la peau est apaisée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950927680</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7949dcfcba3d76df41dfe91a328fd7853f1dc328c11c595b9bfd9f2c120bcd43 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Homme Soin Visage 3 en 1 Bio 50ml ]]></title>
<g:id>69808759-6789-4cfa-b474-19a4aa4884dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-homme soin visage 3 en 1 bio 50ml?69808759-6789-4cfa-b474-19a4aa4884dd ]]></link>
<g:price><![CDATA[ 1365.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce soin visage 3 en 1 hydrate, contribue à apaiser le feu du rasoir et à protéger la peau. L'extrait botanique actif BIO1, composé de joubarbe et de feuilles d'olivier, associé à l'aloe vera et à des huiles végétales (olive et babassu), offre un cœur de formule bio 100% actif qui contribue à apaiser l'épiderme et aide à lutter contre les agressions extérieures. La peau est hydratée, souple et confortable.</span><br /><span>Obtenu à partir d'un extrait de feuilles d'olivier bio dans une  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950927673</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9f1e7cd4ce64f533a355ad8f68d38eaf6204985a97cab3c0be20d3e16a61c8c3 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Huile Sérum Redensifiante Bio 30 ml ]]></title>
<g:id>b9ae5ff0-5f7d-4655-a882-ec808754ad7b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-huile sérum redensifiante bio 30 ml?b9ae5ff0-5f7d-4655-a882-ec808754ad7b ]]></link>
<g:price><![CDATA[ 2195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Huile Sérum Redensifiante Bio 30 ml est un soin à l'action anti-âge globale qui laisse un film protecteur non gras sur la peau et procure une sensation de confort immédiat. Elle contribue à lisser, raffermir et repulper la peau.</p>
<p>L'association d'huiles végétales précieuses Bio et d'un actif anti-âge booste l'activité cellulaire.<br />Les huiles de mirabelle, carthame jojoba, avocat et macadamia riches en oméga 3, 6 et 9 et les larmes du pistachier contribuent à booster la synthè ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950925433</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/51ed75739a83a1c887b26cc7f490f024dd0c2c06b09403b42b839d370e9ad408 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Kids Bio Dentifrice 2-6 Ans Pastèque 50 ml ]]></title>
<g:id>bf2c840a-4985-4b4f-8c6c-9535885702d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-kids bio dentifrice 2-6 ans pastèque 50 ml?bf2c840a-4985-4b4f-8c6c-9535885702d2 ]]></link>
<g:price><![CDATA[ 365.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Kids Bio Dentifrice 2-6 Ans Pastèque 50 ml prend soin des premières dents de votre enfant. Sa formule douce, sans sulfates, sans fluor respecte totalement l'email</p>
<p>des dents. Elle aide à garder des gencives en bonne santé, et les protège grâce au gel d'aloe vera bio riche en minéraux et vitamines. Goût pastèque, il est très apprécié</p>
<p>des enfants. Certifié bio par Ecocert. 99,2% du total des ingrédients sont d'origine naturelle. 10% du total des ingrédients sont issus de l' ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917865</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba1065b241bce1cb78f3663e0606b1c7967ab5312eebdafdda46e82d1139e323 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Kids Bio Dentifrice 7 Ans+ 50 ml ]]></title>
<g:id>a42a502b-b640-44e7-95b7-87649fa72474</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-kids bio dentifrice 7 ans+ 50 ml?a42a502b-b640-44e7-95b7-87649fa72474 ]]></link>
<g:price><![CDATA[ 365.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Kids Bio Dentifrice 7 Ans+ 50 ml prend soin des dents définitives de votre enfant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912624</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e787ed8ef77c9ff707e0864bdd5c6349dcf9db2121946ccf86de20c43a13d4fc ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Kids Bio Dentifrice 7 Ans+ Orange 50 ml ]]></title>
<g:id>d203c659-c9e6-4edd-943f-e16cd15db457</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-kids bio dentifrice 7 ans+ orange 50 ml?d203c659-c9e6-4edd-943f-e16cd15db457 ]]></link>
<g:price><![CDATA[ 365.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Kids Bio Dentifrice 7 Ans+ Orange 50 ml prend soin des dents définitives de votre enfant. Sa formule douce, sans sulfates, légèrement dosée en fluor respecte</p>
<p>totalement l'email des dents et fortifie. Elle aide à garder des gencives en bonne santé, et les protège grâce au gel d'aloe vera bio riche en minéraux et vitamines. Goût</p>
<p>orange, frais et délicieux, il est très apprécié des enfants. Certifié bio par Ecocert. 99,2 % du total des ingrédients sont d'origine naturelle.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917872</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c731389a3039228d911d9c9b481f0960f736f0a1a39dbbff443222650c046618 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Lait Corps Adoucissant Beurre de Coco Vanille 500 ml ]]></title>
<g:id>6703826c-27c5-44f9-807f-0deb98784292</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-lait corps adoucissant beurre de coco vanille 500 ml?6703826c-27c5-44f9-807f-0deb98784292 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Lait Corps Adoucissant 500 ml est un soin hydratant et adoucissant pour le corps qui convient à tous les types de peaux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911160</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6224f1c8dc7bce64ed4b1ee06ea9aa4e4646392137065f254e9c0f2a7aa7fc2a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Lait Corps Modelant Aloe Vera Onagre 500 ml ]]></title>
<g:id>39d0591c-b64c-490a-b6fe-69d566d771a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-lait corps modelant aloe vera onagre 500 ml?39d0591c-b64c-490a-b6fe-69d566d771a1 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Lait Corps Modelant 500 ml est un soin corps hydratant, raffermissant qui prévient le vieillissement cutané.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911177</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/874ff3c291e4d2a6e75b47f11c92a62d00821169062a3cf5f3a7001f30dceb4c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Lait Corps Nourrissant 500 ml ]]></title>
<g:id>9cf95287-abb1-486e-b947-a90eee657bfc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-lait corps nourrissant 500 ml?9cf95287-abb1-486e-b947-a90eee657bfc ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Lait Corps Nourrissant 500 ml est un soin hydratant, apaisant, nourrissant pour le corps qui convient aux peaux sèches à très sèches.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911184</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8aea3188878fcf0e9a15b1afd6265b7013af467a284b632042a5835f57bb0388 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Lait hydratant régénérant Thé Agrumes 500 ml ]]></title>
<g:id>4f916f11-6583-48ed-928d-a76bc34d3d24</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-lait hydratant régénérant thé agrumes 500 ml?4f916f11-6583-48ed-928d-a76bc34d3d24 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait pour le Corps Régénérant Cattier hydrate et régénère l’épiderme.</p>
<p>Enrichi en extrait de papaye à l’action exfoliante et en thé blanc antioxydant, il favorise le renouvellement cellulaire, assouplit et revitalise la peau tout en y déposant un agréable parfum agrumes tonifiant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911153</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/157b36c500d373ed6311e7ae03cd351335ac020263060db6fa6cae1ee5c41619 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Lotion Purifiante 200ml ]]></title>
<g:id>f4beb6c0-489b-45bf-abfb-2d51287e6df1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-lotion purifiante 200ml?f4beb6c0-489b-45bf-abfb-2d51287e6df1 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">La Lotion Purifiante Cattier, formulée avec des huiles essentielles bio de Melaleuca, Romarin et Menthe Poivrée, parfait en douceur le nettoyage des peaux à problèmes, tonifie et rééquilibre l’épiderme tout en resserrant les pores.</p>
<p class="p1">Elle offre une agréable sensation de fraîcheur à une peau matifiée et oxygénée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950080057</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2db41de60565ead55fdb135d9793e234933906a6778bc274d616ef671958b758 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Masque Argile Rose Peaux Sensibles 100 ml ]]></title>
<g:id>93d3db41-97f0-4efa-b58d-1dcb0b91ddda</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-masque argile rose peaux sensibles 100 ml?93d3db41-97f0-4efa-b58d-1dcb0b91ddda ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Masque Argile Rose Peaux Sensibles 100 ml est un soin douceur idéal pour apaiser et purifier la peau et réveiller l'éclat du teint des peaux sensibles et réactives.</p>
<p>Enrichi en beurre de karité bio, reconnu pour ses vertus réparatrices, anti-desséchantes et protectrices, en menthe poivrée bio aux propriétés rafraîchissantes et</p>
<p>stimulantes et en aloe vera hydratante et apaisante, il adoucit et nourrit l’épiderme, clarifiant aussi la peau. Riche en micro-nutriments issus de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924016</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b0966b9ebc6ad0fbf39d7419b22a061a71ecaf6f787bdd8455cc84f9a9ea17c6 ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Masque Hydratant 50ml ]]></title>
<g:id>da6277b3-76ee-4692-a3fb-a51f4b68936a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-masque hydratant 50ml?da6277b3-76ee-4692-a3fb-a51f4b68936a ]]></link>
<g:price><![CDATA[ 1315.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Véritable bain d’hydratation, ce masque souple et fondant aide à désaltérer toutes les peaux mêmes les plus assoiffées. La formule composée de jus végétal actif bio, riche en sucres de fruits, et en acide hyaluronique, participe à combler les carences en eau des peaux les plus desséchées et contribue à booster durablement l'hydratation naturelle cutanée.</span><br /><span>L’huile de camélia bio apporte douceur, souplesse et hydratation à la peau. </span><br /><span>Résultats : désaltéré ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924108</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/574ab80abe0a63b0c20164dafa817b0480c1bfee1b3732f18c9469f7296743a3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Masque Réparateur Cheveux Secs Moelle de Bambou 200 ml ]]></title>
<g:id>3959d8e3-2ec3-40c1-b184-71802b22a184</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-masque réparateur cheveux secs moelle de bambou 200 ml?3959d8e3-2ec3-40c1-b184-71802b22a184 ]]></link>
<g:price><![CDATA[ 1140.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Masque Réparateur Cheveux Secs Moelle de Bambou 200 ml à la texture riche et fondante nourrit et répare les pointes des cheveux secs. Sa formule est riche en</p>
<p>moelle de bambou et en beurre de cupuaçu, permettant ainsi de protéger et gainer la fibre capillaire pour facilement démêler les cheveux. Ce masque prévient la</p>
<p>formation des fourches et restructure le cheveu. Les cheveux sont visiblement plus forts, plus souples, plus doux et soyeux. Produit certifié biologique. 98, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917841</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/695e02f8287ff2d69452e409d5c3c1f3e7c46b87649390ab02ae19f6894cdaac ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Masque argile noire 100 ml ]]></title>
<g:id>3fb9fb7f-8219-4de3-be0b-aee3d075aaad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-masque argile noire 100 ml?3fb9fb7f-8219-4de3-be0b-aee3d075aaad ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le laboratoire </span><span>Cattier</span><span> a développé un </span><span>masque à l’argile noire bio</span><span> dédié à tous les types de peaux du visage et destiné à leur détoxification. Il ne se contente pas de purifier l’épiderme puisque ce soin hydrate également le derme et contribue à la régénération cellulaire pour un teint plus frais et illuminé. Certifié bio, ce produit de soin contient jusqu’à 99 % d’ingrédients d’origine naturelle, parmi lesquels 10 % sont issus de l’agr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924009</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b37916dcd924bfa50cc816cf00058659fb661150a2e0183e488a4d419d641d37 ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Masque à l'argile verte 100ml ]]></title>
<g:id>84faecf0-9994-42e5-9940-9fbe302a1e00</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-masque à l'argile verte 100ml?84faecf0-9994-42e5-9940-9fbe302a1e00 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Masque Argile Verte Peaux Grasses 100 ml est un soin douceur pour purifier et reminéraliser les peaux mixtes à grasses. Grâce à l'argile verte, il va absorber</p>
<p>l'excès de sébum et rééquilibrer la peau. Enrichi en huile de jojoba bio, hydratante et protectrice, en menthe poivrée bio, aux propriétés rafraîchissantes et stimulantes et</p>
<p>en huile essentielle de romarin bio, ce masque adoucit et nourrit l’épiderme clarifiant aussi la peau. Riche en micro-nutriments de l’argile,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924030</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78c065b47925fcfc5d43d1f071d6eaa691db68cea2da433771f8dd65095d199d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Masque à l'argile violette 100ml ]]></title>
<g:id>66d2a7fc-eaaf-4197-b5cb-95650878abb1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-masque à l'argile violette 100ml?66d2a7fc-eaaf-4197-b5cb-95650878abb1 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <div class="data item title active" id="tab-label-description"></div>
<div class="data item content" id="description">
<div class="product attribute description">
<div class="value">
<p>Le Masque à l’Argile Violette Cattier certifié bio, par son dosage optimum d’argile violette et d’un complexe d’<span>actifs énergisants</span>, est le soin idéal des <span>peaux fatiguées en manque de vitalité</span>. Formulé à partir de 38 % d’argile pure, ce masque offre une base onctueuse pour un gain en <spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950923989</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/303fee18d6a0634801ec11cf080659ce85df88e45c77e6323191d3431e6f4b3f ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Mini gommage argile blanche 30ml ]]></title>
<g:id>8a7faa8c-b4c4-44c8-b310-3df8b09dc496</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-mini gommage argile blanche 30ml?8a7faa8c-b4c4-44c8-b310-3df8b09dc496 ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <div class="data item title active" id="tab-label-description"></div>
<div class="data item content" id="description">
<div class="product attribute description">
<div class="value">
<p>Le Mini Gommage à l’argile blanche Cattier certifié bio offre à tous les types de peaux un <span>soin douceur exfoliant</span>, pour une peau débarrassée de toutes impuretés, et un <span>grain plus lisse et doux</span>. Formulée à partir de 25 % d’argile blanche pure et de coque de bambou. Cette nouvelle formule  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924061</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0856886f695e704567f4e7dd977f6dc0eb17cd9b02067f1066e96515448e4548 ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Mini masque argile rose 30ml ]]></title>
<g:id>e115d6f5-e082-44fa-af36-bfe337ded13c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-mini masque argile rose 30ml?e115d6f5-e082-44fa-af36-bfe337ded13c ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Mini masque à l’argile rose Cattier certifié bio permet aux </span><span>peaux sensibles et réactives</span><span> de profiter d’un soin </span><span>douceur</span><span> purifiant, pour un effet « </span><span>bonne mine</span><span> » garanti. Cette nouvelle formule contient 38 % d’argile pure et offre une base plus </span><span>onctueuse</span><span> pour un gain en sensorialité durant l’application. Enrichi en extrait de lin brun, et en aloe vera, </span><span>hydratant et apaisa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924023</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe5cd3094f8d55b28cee2fd4eeaf46a112aaf7dc0e2c99e42f0f495a10041901 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Mini masque argile verte 30ml ]]></title>
<g:id>c6e176b9-3d83-4395-9a49-669ac8ed556e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-mini masque argile verte 30ml?c6e176b9-3d83-4395-9a49-669ac8ed556e ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Mini masque à l’argile verte Cattier </span><span>certifié bio </span><span>par son dosage optimum d’argile verte et blanche, est le soin douceur </span><span>purifiant</span><span> et </span><span>reminéralisant</span><span> des </span><span>peaux mixtes à grasses</span><span>. Cette </span><span>nouvelle formule</span><span> contient 45 % d’argile pure et offre une base plus onctueuse pour un gain en sensorialité durant l’application. Enrichi en huile essentielle de menthe poivrée  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924047</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f5d197a3f595b583209aa5cb3ebb08980b53005b5cd10bc2b5128c76ac325aa2 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Mini masque argile violette 30ml ]]></title>
<g:id>f3430179-3d5f-44d4-936c-c297d344eb9e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-mini masque argile violette 30ml?f3430179-3d5f-44d4-936c-c297d344eb9e ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Mini masque à l’Argile Violette Cattier certifié bio, par son dosage optimum d’argile violette et d’un complexe d’<span>actifs énergisants</span>, est le soin idéal des <span>peaux fatiguées en manque de vitalité</span>. Formulé à partir de 38 % d’argile pure, ce masque offre une base onctueuse pour un gain en <span>sensorialité</span> durant l’application. Enrichi avec un complexe d’actifs de fruits énergisants, l’<span>éclat de la peau</span> est naturellement révélé. Il s’adapte à tout  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950923996</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0332ad58e11d174749ca7ecab2f47c99f50db320826b2f452461f840c0d2223e ]]></g:image_link>
<g:product_type><![CDATA[ ARGILE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Moussant Familial 1 L ]]></title>
<g:id>b9bf09b1-25f3-46d7-be32-2bbe599d613d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-moussant familial 1 l?b9bf09b1-25f3-46d7-be32-2bbe599d613d ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Moussant Familial 1 L format familial nettoie chaque jour le corps et les cheveux de toute la famille, sans agresser.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950916608</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2de5ac3e13ebdebe52ea3bfb10124bb7b9eaa8c25dd7b5588aaa3c808a86bd38 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Nectar Éternel Soin Léger Anti-Âge Lissant 50 ml ]]></title>
<g:id>d4c75894-e2ac-40a7-bb99-86e9d8216d48</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-nectar Éternel soin léger anti-Âge lissant 50 ml?d4c75894-e2ac-40a7-bb99-86e9d8216d48 ]]></link>
<g:price><![CDATA[ 1935.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Nectar Éternel Soin Léger Anti-Âge Lissant 50 ml à la texture crème-gel légère et fondante est idéal pour les peaux normales à mixtes, pour aider à retarder et corriger les premiers signes de l'âge.</p>
<p>Le complexe âge défense, innovation Cattier, composé d'argile montmorillonite et d'une association d'actifs d'origine marine et végétale, intervient à 3 niveaux :</p>
<p>- Agit comme un bouclier contre les attaques radicalaires limitant ainsi la dégradation prématurée du collagène e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950921848</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fb60405f1fec9bf29f9a2a0dfc607ba64b23ed6b1bfd3c2a5e6fc854163f9b0c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Nectar Éternel Soin Riche Anti-Âge Lissant 50 ml ]]></title>
<g:id>3d46f1eb-c3e6-477b-8187-0c23e19b11c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-nectar Éternel soin riche anti-Âge lissant 50 ml?3d46f1eb-c3e6-477b-8187-0c23e19b11c6 ]]></link>
<g:price><![CDATA[ 1935.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Nectar Éternel Soin Riche Anti-Âge Lissant 50 ml à la texture crème onctueuse et enveloppante est idéal pour les peaux sèches, pour aider à retarder et corriger les premiers signes de l'âge.</p>
<p>Le complexe âge défense, innovation Cattier, composé d'argile montmorillonite et d'une association d'actifs d'origine marine et végétale, intervient à 3 niveaux :</p>
<p>- Agit comme un bouclier contre les attaques radicalaires limitant ainsi la dégradation prématurée du collagène et de l'é ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950921855</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/49da1a1311e97452a75c892886d15d36ff53230486e3365a8b099e862da04154 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Nuage Céleste Mousse Nettoyante Visage 150ml ]]></title>
<g:id>c823bf18-c56d-4f19-89da-e584b83b615a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-nuage céleste mousse nettoyante visage 150ml?c823bf18-c56d-4f19-89da-e584b83b615a ]]></link>
<g:price><![CDATA[ 825.00 EUR ]]></g:price>
<description><![CDATA[ <p>La mousse nettoyante Nuage Céleste bio Cattier nettoie en profondeur la peau délicate du visage. Sa texture ultra-légère se transforme en mousse fine et aérienne pour le plaisir d'un nettoyage doux et sans savon.</p>
<p>Riche en protéines de blé, puissants actifs hydratants et nourrissants, et en eau florale de rose et de bleuet bio, cette mousse, au parfum frais et délicat, hydrate, purifie et adoucit la peau tout en respectant son équilibre naturel.</p>
<p class="p1">Parfaitement nettoyée,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911511</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/274c6fb0e607f5c248eefab381a1058c121f113058e03185dcbb7204d95f0d4c ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Perle d'Eau Solution Micellaire Démaquillante 300ml ]]></title>
<g:id>f42439d1-f55b-4d66-8ec7-fb1da4a0dad7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-perle d'eau solution micellaire démaquillante 300ml?f42439d1-f55b-4d66-8ec7-fb1da4a0dad7 ]]></link>
<g:price><![CDATA[ 870.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Perle d'Eau Solution Micellaire Démaquillante 300 ml visage, yeux et lèvres à la texture ultra-légère élimine délicatement toutes les impuretés et le maquillage.<br /><br />Grâce à sa richesse en eau florale de rose bio aux vertus apaisantes, astringentes et hydratantes et en aloe vera bio adoucissant, régénérant et protecteur, cette solution sans alcool et sans parfum haute tolérance apaise et purifie la peau. La peau est propre, douce et éclatante.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912365</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/de5ac713b6b4d0266874d16194d0d65f926360053f38873338af208081881535 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Philtre Exquis Sérum Douceur Apaisant 30 ml ]]></title>
<g:id>c9fd03c9-fbbd-4cd7-89c0-8902b88a8973</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-philtre exquis sérum douceur apaisant 30 ml?c9fd03c9-fbbd-4cd7-89c0-8902b88a8973 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Véritable soin SOS des peaux sensibles et réactives, Cattier Philtre Exquis Sérum Douceur Apaisant 30 ml soulage immédiatement, hydrate et aide à lutter contre les sensations d'inconfort. Sa formule contient plusieurs ingrédients actifs :</p>
<p>- Le Defensil-Plus, un complexe actif innovant anti-irritant et protecteur, associé à un extrait bio de lin brun, protège l'épiderme des agressions extérieures (climat, pollution, air conditionné…), atténue la sensibilité de la peau et prévient les ro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917681</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f24b1b5280abeb4d88f86599c4bb1c51aad70ae04f4c06dbbea49aac45e9c6d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Pureté Divine Huile Démaquillante 100 ml ]]></title>
<g:id>8faf56c5-f38d-420f-a166-8ba81aa82b84</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-pureté divine huile démaquillante 100 ml?8faf56c5-f38d-420f-a166-8ba81aa82b84 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Pureté Divine Huile Démaquillante 100 ml visage et yeux à la texture fondante et veloutée démaquille tous les types de peaux.<br /><br />Elle élimine les impuretés et dissout les maquillages les plus tenaces, même waterproof. Efficace, elle agit grâce aux huiles de noyaux d'abricot, de carthame bio et de tournesol bio alliées à des disperseurs de pigments : la peau est nette, soyeuse et fraîche.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912532</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a80228ee1bc194a719d341c959600a26065e5231c163dfb718fe92d0c345b780 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Pétale d'Iris Eau Démaquillante 150ml ]]></title>
<g:id>704145e0-d230-44b3-8c3c-35cfe310033c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-pétale d'iris eau démaquillante 150ml?704145e0-d230-44b3-8c3c-35cfe310033c ]]></link>
<g:price><![CDATA[ 685.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Pétale d'Iris Eau Démaquillante 150 ml démaquille, apaise et rafraîchit en douceur les yeux même sensibles.<br /><br />Adaptée à la peau fine et sensible des paupières et du contour de l'oeil, elle n'irrite pas et respecte la peau. Les eaux florales de camomille et de bleuet bio permettent d'apaiser, adoucir et décongestionner.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911504</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b7ed9a9dfaecaeeb28ef87916ab4b1c5665be3d31cc12e7f60f6607ded91f0f1 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Rosée Florale Lotion de Beauté Apaisante 200ml ]]></title>
<g:id>bd2debd5-caf4-48bd-964b-b4fedc13beae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-rosée florale lotion de beauté apaisante 200ml?bd2debd5-caf4-48bd-964b-b4fedc13beae ]]></link>
<g:price><![CDATA[ 865.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Rosée Florale Lotion de Beauté Apaisante 200 ml sans alcool apaise, rafraîchit et tonifie la peau pour un teint frais.<br /><br />Cette lotion parfait le démaquillage et réveille l’éclat du teint. Elle apaise et adoucit l'épiderme grâce aux eaux florales bio de rose et de camomille et à l'extrait de calendula bio. Les protéines de blé, puissants actifs hydratants et nourrissants, apportent tonicité et fermeté à la peau. Les huiles essentielles libèrent un délicieux parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911498</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65075e377545e0086c073f36397941425db060238a50898048d53bdb0963aa9f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Savon Doux Végétal Surgras Karité 150g ]]></title>
<g:id>5a72ae7d-2855-4f50-8433-0847b7011504</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-savon doux végétal surgras karité 150g?5a72ae7d-2855-4f50-8433-0847b7011504 ]]></link>
<g:price><![CDATA[ 385.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Savon Doux Végétal Surgras Karité a été spécialement conçu pour nettoyer en douceur les peaux sèches et sensibles.</p>
<p>Sa formule ultra-douce associe le beurre de karité bio, naturellement riche en principes actifs hydratants et adoucissants, à l’huile végétale d’amande douce bio qui apaisent et redonnent souplesse et douceur à la peau.</p>
<p>Sa mousse fine et délicate laisse sur la peau un agréable voile parfumé aux accords d’ylang-ylang et de bergamote. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911078</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5340228aab7fc3f35b9e718f30dc6304f91b0a688deff3f082dfb12789ff770 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Secret Botanique Soin de Jour Nourrissant 50ml ]]></title>
<g:id>aaa07022-d995-4620-b5af-49928248ed3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-secret botanique soin de jour nourrissant 50ml?aaa07022-d995-4620-b5af-49928248ed3c ]]></link>
<g:price><![CDATA[ 1665.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Secret Botanique Soin de Jour Nourrissant 50 ml est un soin nourrissant douceur pour les peaux sèches et sensibles.<br /><br />Sans parfum, ce soin nourrissant est idéal pour hydrater et protéger au quotidien. Régénérant, il hydrate et nourrit en profondeur, adoucit et apaise l’épiderme. En effet, il associe :<br /><br />- l'huile de jojoba bio aux propriétés rééquilibrantes et protectrices,<br />- l'extrait de tournesol bio riche en vitamines E et F, un antioxydant qui nourrit et ado ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911467</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61d12d797092981bcd1f1cd76a797ff0d4a14d149467d41644ee376447a239aa ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampoing Usage Fréquent Lait d'Avoine Bio 250 ml ]]></title>
<g:id>3bbd3123-6aea-400c-98b7-2006eec83c0f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampoing usage fréquent lait d'avoine bio 250 ml?3bbd3123-6aea-400c-98b7-2006eec83c0f ]]></link>
<g:price><![CDATA[ 665.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampoing Usage Fréquent Lait d'Avoine Bio 250 ml est un shampoing au lait d'avoine et aux huiles essentielles, à la texture onctueuse et à la mousse légère, qui apporte souplesse, douceur et brillance à tous les types de cheveux. Sa formule ultra douce au pH équilibré permet un usage fréquent. Les sucres végétaux contribuent à hydrater les cheveux et faciliter leur démêlage.</p>
<p>Cosmétique Écologique et Biologique Certifié par Ecocert Greenlife selon le rérérentiel Ecocert.</p>
<p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950910729</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d84d372097276ff2511298e3193d12987c6bc47a01b6f5ab3ee196b40147c637 ]]></g:image_link>
<g:product_type><![CDATA[ SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampoing douche Kids 2en1 500ml ]]></title>
<g:id>2927b452-1a44-44cf-8194-45e055630216</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampoing douche kids 2en1 500ml?2927b452-1a44-44cf-8194-45e055630216 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Shampoing Douche 2en1 Fleur de guimauve, un soin spécialement conçu pour nettoyer en douceur la peau sensible et les cheveux fragiles des enfants. Flacon de 500ml. </p>
<p></p>
<hr /><div class="row mx-auto">
<div class="col-12 px-0">
<p>Découvrez le <span>Shampoing Douche 2en1 Fleur de guimauve</span> de <span>Cattier</span>, un soin <span>naturel </span>qui <span>nettoie en douceur</span> la peau sensible des enfants sans la dessécher et <span>lave délicatement</span> leurs cheveux fragiles ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924344</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/480b96ef007a04db1d723abc2f85b95a03582b4124cf707b1eaa7372906a0831 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Aloe Vera Orange Bio 500 ml ]]></title>
<g:id>391b381d-da99-4bdd-a7ac-5cb488ba21cb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing aloe vera orange bio 500 ml?391b381d-da99-4bdd-a7ac-5cb488ba21cb ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Aloe Vera Orange Bio 500 ml est un shampooing formulé sans sulfates, qui nettoie en douceur et prend soin des cheveux. Sa formule douce, pour tous les types de cheveux, est enrichie en aloe vera, huile de ricin, extrait d'orange et millet, laissant les cheveux légers.</p>
<p>Facile à rincer, ce shampooing aide à démêler les cheveux et les parfume d'une odeur délicate de feuille de figuier.</p>
<p>97,5% du total est d'origine naturelle.</p>
<p>12,4% du total des ingrédients  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950922791</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c56325ca35abecf04d9324347956cd2745fdd578455275de8ed293ab3be71678 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Antipelliculaire Bois de Saule 250 ml ]]></title>
<g:id>223249ea-3877-4aa6-937a-6d266381b607</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing antipelliculaire bois de saule 250 ml?223249ea-3877-4aa6-937a-6d266381b607 ]]></link>
<g:price><![CDATA[ 665.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Antipelliculaire Bois de Saule 250 ml est un shampooing antipelliculaire qui convient à tous.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950910736</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/072b1d66863ffb189d8392b38f40a6e1107608a8e7e9854b38e1f5f8b4dfa0e1 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Cheveux Colorés Couleur 250 ml ]]></title>
<g:id>ce8f7455-af5c-46c9-bbde-04b698e672d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing cheveux colorés couleur 250 ml?ce8f7455-af5c-46c9-bbde-04b698e672d2 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Cheveux Colorés Couleur 250 ml est idéal pour préserver la durée et l'éclat de la couleur. Ce shampooing nettoie en douceur, nourrit et permet de</p>
<p>conserver une couleur intacte plus longtemps. L'extrait de riz riche en acides aminés et peptides est un actif protecteur antioxydant qui protège, répare et renforce la fibre</p>
<p>capillaire pour une couleur qui tient longtemps, pour une brillance intense et un toucher soyeux. L'intensité de la couleur est prolongée. Les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917766</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e3dda36f629a6324d432f9df0310ae6b467b9a8ba616bf4dfc2df07cb005513 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Cheveux Fins Volume 250 ml ]]></title>
<g:id>0ce299e3-5256-4d8a-bf3c-d7b765696e20</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing cheveux fins volume 250 ml?0ce299e3-5256-4d8a-bf3c-d7b765696e20 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Cheveux Fins Volume 250 ml est idéal pour apporter du volume aux cheveux fins, pour une masse capillaire plus dense. Ce shampooing nettoie en</p>
<p>douceur, nourrit et donne du corps aux cheveux, de la racine aux pointes, pour un volume plus important. L'huile d'abyssinie et les phytostérols forment un complexe</p>
<p>volumateur qui permet de gainer et restructurer les cheveux fins. Aérienne et souple, la chevelure paraît plus épaisse et plus abondante. Produit certifié bi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917773</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b15fdd6259c9ba0f8d0673b87b321b9747a5b8e5022407599d8f3d0a5647f93 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Cheveux Regraissant Vite Vinaigre de Romarin 250 ml ]]></title>
<g:id>6c20e61e-952a-4f45-9b4b-9ccd6b4f5661</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing cheveux regraissant vite vinaigre de romarin 250 ml?6c20e61e-952a-4f45-9b4b-9ccd6b4f5661 ]]></link>
<g:price><![CDATA[ 665.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Cheveux Regraissant Vite Vinaigre de Romarin 250 ml et huiles essentielles assainit le cuir chevelu grâce à sa formule principalement composée de vinaigre de plantes (romarin, lavande, sauge et thym).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950910743</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7ddecb2726ed8633ce45f29436839bf5ebaa2dee6ef3a2c69c12d3878a083cb4 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Cheveux Secs Moelle de Bambou 250 ml ]]></title>
<g:id>20115256-fdea-4270-8e73-1e66dc7145ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing cheveux secs moelle de bambou 250 ml?20115256-fdea-4270-8e73-1e66dc7145ff ]]></link>
<g:price><![CDATA[ 665.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Cheveux Secs Moelle de Bambou 250 ml est un shampooing nourrissant, fortifiant pour cheveux secs.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950910750</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b82e19ee02259e8d8f7e5c3fcd11f4de717bfbd0254904624a28dbf35514a97c ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Cuir Chevelu Gras Argile Verte 250 ml ]]></title>
<g:id>bebe9f80-9903-486d-bd5a-082ab40b42b2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing cuir chevelu gras argile verte 250 ml?bebe9f80-9903-486d-bd5a-082ab40b42b2 ]]></link>
<g:price><![CDATA[ 665.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Shampooing Cuir Chevelu Gras Argile Verte 250 ml à l'argile verte convient aux cheveux et cuirs chevelus gras.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950910798</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ffec922e3db058c24056f96eb40e7d92ef226d4f3e5df748ce0c2354b7597a7 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Extra Doux Usage Quotidien 1L ]]></title>
<g:id>76323583-0507-4692-8e08-d226e254b40b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing extra doux usage quotidien 1l?76323583-0507-4692-8e08-d226e254b40b ]]></link>
<g:price><![CDATA[ 1160.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Shampoing extra-doux Cattier certifié bio au lait d'avoine et aux huiles essentielles apporte douceur et brillance à tous les types de cheveux. Il les fortifie et facilite leur démêlage. Sa formule ultra-douce, au pH équilibré, permet un usage quotidien.</p>
<div class="data item content" id="description">
<div class="product attribute description">
<div class="value">
<p><span>Certifié bio - Végan - Sans silicone - Mousse généreuse - Formule ultra-douce - Usage fréquent</span></p>
<p>Cont ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911924</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d69d63d7fc52b079178f3b2d778e872e116b8e84d9c359f708110a2e46522e2e ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing Kids douche 2 en 1 Corps et Cheveux - 500ml ]]></title>
<g:id>87c46602-b679-42f2-a31b-b80b00443184</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing kids douche 2 en 1 corps et cheveux - 500ml?87c46602-b679-42f2-a31b-b80b00443184 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce shampooing douche 2 en 1 Cattier certifié bio, nettoie en douceur la peau sensible des enfants sans la dessécher et lave délicatement leurs cheveux fragiles, sans piquer les yeux.</p>
<p>Sa formule allie une base lavante ultra-douce à de l’aloe vera bio qui contribue à hydrater et protéger la peau.</p>
<p>Son parfum gourmand aux notes acidulées ravira petits et grands.</p>
<p>La peau est douce et les cheveux sont brillants, faciles à coiffer.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924368</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/99a6e6510ea24a7103ad5e3d4f53434c66f22ca91fbe502817ddac77bf494129 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Shampooing soin 2 en 1 Shampooing cheveux bouclés ]]></title>
<g:id>741675f4-3901-4dc2-a537-6decbb96b3e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-shampooing soin 2 en 1 shampooing cheveux bouclés?741675f4-3901-4dc2-a537-6decbb96b3e8 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <div class="data item title active" id="tab-label-description"><a class="data switch" href="https://www.cattier-paris.com/fr/cheveux/shampooing-soin-2-en-1.html#description" id="tab-label-description-title">DESCRIPTION</a></div>
<p><span> </span></p>
<div class="data item content" id="description">
<div class="product attribute description">
<div class="value">
<p><span>Le Shampooing soin 2 en 1</span> Cattier certifié bio, est idéal pour les cheveux ondulés à bouclés, sa formule onctueuse, sans ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950923507</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/530f344bf0fbfc6f15136cd315a219738ebaa943846cbdfa38e7d91c5039e322 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Sleeping Crème Lissante Nuit 50 ml ]]></title>
<g:id>7cb9c2f1-a471-4258-b83f-a97007eefc03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-sleeping crème lissante nuit 50 ml?7cb9c2f1-a471-4258-b83f-a97007eefc03 ]]></link>
<g:price><![CDATA[ 2050.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Murmure Éternel Sleeping Crème Lissante Nuit 50 ml à la texture enveloppante au toucher velours aide à renforcer les défenses naturelles cutanées et contribue à préserver le capital jeunesse de la peau.</p>
<p>L'actif SkiNight 3R et le complexe âge défense agissent en synergie durant la nuit pour réparer, fortifier et dynamiser la barrière cutanée. Cette association d'actifs aide ainsi la peau à lutter contre les dommages liés aux agresseurs environnementaux. L'huile de Camélia apport ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950921862</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e3894cda3fecdae13326dc02bdc40ac06fd88c6f92dde9eac5ecb46806abcb3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Soin Lèvres Anti-Âge Lissant 4 g ]]></title>
<g:id>ff81d644-74fc-4431-97ff-e7bff4230aad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-soin lèvres anti-Âge lissant 4 g?ff81d644-74fc-4431-97ff-e7bff4230aad ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Soin Lèvres Anti-Âge Lissant 4 g est un baume lèvres anti-âge qui hydrate et lisse les lèvres pour leur apporter confort immédiat et douceur optimale.</p>
<p>Sa formule enrichie en huile d'olive et en huile de baobab préserve l'hydratation des lèvres, les nourrit et les protège des agressions extérieures.</p>
<p>Son actif anti-âge Sepilift DHP lisse les ridules, redensifie les lèvres et les rend plus fermes.</p>
<p>Sa texture onctueuse glisse sur les lèvres et offre un léger goût sucr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950920810</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a98381863ed33bae7743caa5b4c3df2c9e60509df7ddb420516a7a5cd7364a2 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Soin de Jour Hydratant Bio 50ml ]]></title>
<g:id>6b8ce68a-8c99-4c3b-8aba-b2e795a550b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-soin de jour hydratant bio 50ml?6b8ce68a-8c99-4c3b-8aba-b2e795a550b5 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924078</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e435ea1875824af7e8dae0d12d58210d7df81c3b54222530812c32984d4c865d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Soin de Jour Redensifiant Bio 50 ml ]]></title>
<g:id>ec2974c0-b93f-4921-85f4-40056e3ba14b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-soin de jour redensifiant bio 50 ml?ec2974c0-b93f-4921-85f4-40056e3ba14b ]]></link>
<g:price><![CDATA[ 2270.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Soin de Jour Redensifiant Bio 50 ml est une crème fondante qui agit efficacement contre les signes de l'âge. Elle hydrate, lisse et raffermit la peau. Les rides sont comme comblées, peu à peu les traits semblent plus lisses et l'ovale du visage regalbé.<br />L'association du jus végétal actif bio et des actifs anti-âge offre une hydratation et un confort immédiat.<br />Le jus végétal source de polyphénols et d'acides aminés, le fruit de la longévité et l'acide hyaluronique agissent en ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950925419</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cac95d03bba80161566f14014bd0cc302b3022afefa29e0b3a5167d11ba38a54 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Soin des Lèvres Réparateur Ultra Nourrissant 4g ]]></title>
<g:id>22e4dc44-ee82-446b-ac0f-7f2da5e08a07</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-soin des lèvres réparateur ultra nourrissant 4g?22e4dc44-ee82-446b-ac0f-7f2da5e08a07 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un stick à lèvres qui répare, nourrit et protège pour des lèvres douces, lisses et hydratées <br /><br />Ce baume réparateur ultra-nourrissant aide les lèvres à lutter contre les agressions extérieures. Dépourvues de film hydrolipidique, les lèvres ont particulièrement besoin d'être protégées.</p>
<p>Le Soin des Lèvres Cattier leur apporte les éléments naturels essentiels pour une protection et une hydratation optimales. Sa texture onctueuse glisse sur les lèvres et offre un léger goût sucré- ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950912396</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6c0cb9c5fe215b281d9e606285ea0ac6821d4c7a06564366b93c5d31a556f53 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Soin définisseur boucles bio 150ml ]]></title>
<g:id>d660a0d0-1432-4171-a7e7-54cd75955adb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-soin définisseur boucles bio 150ml?d660a0d0-1432-4171-a7e7-54cd75955adb ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sans rinçage, <span>le soin définisseur boucles</span> certifié bio Cattier, <span>aide à nourrir les cheveux</span> et définir les boucles grâce à la combinaison d’huiles végétales de ricin et de coco. </p>
<p><span>Certifié bio - Végan - Sans sulfates</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950923514</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a43717abfe367c712a7bf4de624e03505f5731590e0e97444c584d73a3536f2 ]]></g:image_link>
<g:product_type><![CDATA[ CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Sublime Alchimie Huile Sèche Multi-Usages 100 ml ]]></title>
<g:id>bf59f626-6793-44c2-8477-299fc60b22f7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-sublime alchimie huile sèche multi-usages 100 ml?bf59f626-6793-44c2-8477-299fc60b22f7 ]]></link>
<g:price><![CDATA[ 1360.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Sublime Alchimie Huile Sèche Multi-Usages 100 ml hydrate, nourrit, répare et protège le visage, le corps, les cheveux. Riche en huile de camélia et huile d'argan,</p>
<p>cette huile à la texture dorée, fine et soyeuse, pénètre rapidement et laisse un film protecteur sur la peau. Sa formule unique permet de prévenir le dessèchement, lisser et</p>
<p>adoucir la peau, mais aussi renforcer la fibre capillaire et apporter brillance et douceur. Une fois l'huile appliquée, votre visage ou co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950917827</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a75244a9d4b5efef93794a6cd1875de1b84e9a910fb0bdfb9f53f7f3b940606 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Symphonie Végétale Démaquillant Biphase 150 ml ]]></title>
<g:id>e8be8da3-9bd5-4b3e-a8e5-465b413459b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-symphonie végétale démaquillant biphase 150 ml?e8be8da3-9bd5-4b3e-a8e5-465b413459b6 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Symphonie Végétale Démaquillant Biphase 150 ml élimine instantanément et efficacement le maquillage des yeux sensibles et des lèvres, même longue durée et waterproof.</p>
<p>Sa formule contient plusieurs ingrédients actifs :</p>
<p>- Eau florale de rose de Damas bio : astringente et rafraîchissante,</p>
<p>- Eau florale de bleuet bio : décongestionnante, adoucissante, hydratante,</p>
<p>- le Squalane, actif démaquillant d'origine végétale : phase grasse démaquillante, disperseur de pi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950919906</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df070d265a5a737de255d102f0198b8688084e9face7811bb97474011ccd64a5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Sérum SOS hydratation Bio 30 ml ]]></title>
<g:id>ed7005e2-3683-4a8c-991d-eb48858b5188</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-sérum sos hydratation bio 30 ml?ed7005e2-3683-4a8c-991d-eb48858b5188 ]]></link>
<g:price><![CDATA[ 1875.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>laboratoire </span><span>Cattie</span><span>r vous présente son </span><span>sérum SOS hydratation</span><span>, adressé à toutes les peaux sujettes à une déshydratation importante. Avec 77 % de ses ingrédients issus de l’agriculture biologique et 99 % du total d’origine naturelle, ce soin du visage respecte votre peau en même temps que l’environnement, mais ne s’arrête pas là puisqu’il n’utilise aucune substance animale et convient ainsi parfaitement aux personnes végan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924092</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5a7dbd8db4320b2b2e659e47818565687bd87121e4a235a6dbcc2f4f7bc25c5b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Touch'Express Gel Anti-Imperfections 5 ml ]]></title>
<g:id>a328ba20-7378-4a7e-af74-6440cd18ee0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-touch'express gel anti-imperfections 5 ml?a328ba20-7378-4a7e-af74-6440cd18ee0b ]]></link>
<g:price><![CDATA[ 460.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cattier Touch'Express Gel Anti-Imperfections 5 ml a été spécialement conçu pour neutraliser rapidement les imperfections et assainir la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950080040</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2aa63884131b85e4cba7fe6990a4a95be9775e1f3432fce5402a7706b2e9bb6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier Visage Sleeping Crème de Nuit Hydratante Bio 50 ml ]]></title>
<g:id>3ff6cdd8-a0d1-4148-aa9e-ead2e59ca9ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-visage sleeping crème de nuit hydratante bio 50 ml?3ff6cdd8-a0d1-4148-aa9e-ead2e59ca9ae ]]></link>
<g:price><![CDATA[ 1920.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Sleeping Crème de Nuit Hydratante Peaux Déshydratées Bio 50 ml de Cattier est un soin à la fois frais et enveloppant qui insuffle à la peau une hydratation en continue tout au long de la nuit, au moment où la récupération cellulaire est optimale.</span><br /><span>Un cœur de formule 100% actif qui apporte les nutriments essentiels à la peau pour la garder en pleine santé.</span><br /><span>Le jus végétal actif bio, riche en sucres de fruits, et l’acide hyaluronique agissent en synerg ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950924085</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e8209ee508cac950a2c93b021c581b04148f2043ca973993313f677e9737ee1 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier déodorant mixte roll on 50ml  ]]></title>
<g:id>84b94fd8-a428-4cfe-b068-e438654c95b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-déodorant mixte roll on 50ml ?84b94fd8-a428-4cfe-b068-e438654c95b9 ]]></link>
<g:price><![CDATA[ 575.00 EUR ]]></g:price>
<description><![CDATA[ <p>Déodorant efficacité longue durée, sans alcool et sel d'aluminium. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950919890</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d1f36a344fd9d570ade62463a68b87f539db564271779b3b2603e99e318ef8f ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier gel douche fraîcheur verveine sauvage - citrus 1L ]]></title>
<g:id>6b4bc5c5-789d-4422-92b1-f663f421f275</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gel douche fraîcheur verveine sauvage - citrus 1l?6b4bc5c5-789d-4422-92b1-f663f421f275 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce gel douche Cattier bio et végan, à utiliser sous la douche ou dans le bain, nettoie délicatement et préserve l’équilibre naturel de la peau. L’aloe vera, aux multiples vertus, contribue à hydrater et protéger pour un véritable moment de bien-être. Enveloppant la peau d’un parfum acidulé et revitalisant, ce gel douche apporte une sensation de fraîcheur.</p>
<p>Certifié bio - Végan - Format pompe économique</p>
<p>Contenance : 1 L</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950923699</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60cca7ff22a4054aa471b72aa500618f3e6938c9551dc8b094ef0364ac54bef5 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier gelée exfoliante visage grains de lumière 75ml ]]></title>
<g:id>93ce68a5-2ffe-4c63-a144-daa253cf852d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-gelée exfoliante visage grains de lumière 75ml?93ce68a5-2ffe-4c63-a144-daa253cf852d ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <div class="contents active" id="product_description">
<div class="short-description">
<div class="std">
<p>La gelée exfoliante Bio grains de lumière Cattier élimine délicatement les cellules mortes et les impuretés du visage.</p>
</div>
</div>
<div class="qty-basket">
<div class="qty-container clearfix"></div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950925365</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c755947579f8f1455f23bf33c3e4362ac6e2dd64083afc8e706f4ed12f19e72 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier lait Corps Hydratant 500ml ]]></title>
<g:id>dbb35e22-4870-4b2c-859c-7e590acc6b6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-lait corps hydratant 500ml?dbb35e22-4870-4b2c-859c-7e590acc6b6c ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce lait corps, certifié bio, contribue à hydrater et revitaliser l’épiderme. Sa formule enrichie en huile de carthame, reconnue pour ses propriétés réparatrices, hydratantes et antioxydantes, favorise la régénération cellulaire et apporte douceur et éclat. Sa texture veloutée enveloppe la peau d’un film protecteur au parfum frais et floral de fleur de cerisier</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950927437</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2676dcdf3849fc85c18401d1285ff742d66e27553e7d380b97686c034055b869 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cattier éridène gencives fragiles 75ml ]]></title>
<g:id>3abc8aba-a915-42eb-a255-4bc0094499ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cattier-ridène gencives fragiles 75ml?3abc8aba-a915-42eb-a255-4bc0094499ce ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p> </p>
<p>Eridène Gencives Fragiles raffermit les gencives grâce à l’extrait de souak.</p>
<p>Il favorise également l’élimination du tartre et de la plaque dentaire par son action protéolytique.</p>
<p>Un dentifrice doux pour les dents et qui agit sans rayer l’émail, mais aussi actif contre les taches. Il favorise la prévention de la carie grâce au fluor actif et blanchit les dents.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283950911108</g:gtin>
<g:brand><![CDATA[ CATTIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9ba0d19f479f30edc3781ee32d6462b0954a72906da2bda770ed5ff8305b447 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Ange des Vignes Eau de Parfum 50ml ]]></title>
<g:id>a8e1fe97-dc73-4e46-b5c5-7239782644c3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-ange des vignes eau de parfum 50ml?a8e1fe97-dc73-4e46-b5c5-7239782644c3 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Caudalie Ange des Vignes Eau de Parfum</span> est la première Eau de Parfum de la marque.</p>
<p><span> </span></p>
<p>A la fois voluptueuse et pétillante, sa fragrance chyprée dévoile des notes fruitées de raisin framboise, légères de néroli et enveloppantes de patchouli. Entre ciel et vignes, une envolée céleste, envoûtante et sensuelle.</p>
<p><span> </span></p>
<p>Les notes fruitées et pétillantes du raisin framboise ont été recréées grâce à la collaboration du maître parfumeur Anne ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004202</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f19a024ec5ebf45858f2d726fc73cb7d260b1b4e8e4491988b46a064cf7551be ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Baume Corps Lift & Fermeté Vinosculpt 250ml ]]></title>
<g:id>2b3bfe0a-a24b-49b6-8b70-3f1b1ad1b4d8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-baume corps lift & fermeté vinosculpt 250ml?2b3bfe0a-a24b-49b6-8b70-3f1b1ad1b4d8 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Baume Corps Lift &amp; Fermeté Vinosculpt cible les 4 zones clés de votre corps : bras, buste, ventre et fesses pour une peau plus ferme dès le premier mois d'utilisation*. La peau est lissée, tonifiée et visiblement raffermie.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003655</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/127a4745e7bda3a2ba2271e3a037d02e33462e170886ea660c9863852b556545 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Coffret - Vinoperfect Sérum Eclat Anti-Taches 30ml + Vinosun Protect Fluide Très Haute Protection SPF50+ 20ml Offert ]]></title>
<g:id>0535007f-4f88-4ff6-9d5d-90c11a858ca9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-coffret - vinoperfect sérum eclat anti-taches 30ml + vinosun protect fluide très haute protection spf50+ 20ml offert?0535007f-4f88-4ff6-9d5d-90c11a858ca9 ]]></link>
<g:price><![CDATA[ 4290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le&nbsp;<strong>Sérum Éclat Anti-Taches Vinoperfect de Caudalie&nbsp;</strong>est un soin adapté pour tout type de peau ciblant son action sur les&nbsp;taches cutanées, qu’elles soient liées au soleil, au vieillissement naturel de la peau, à l’activité hormonale ou à un traitement médicamenteux.<br>Sa formule unique et brevetée allie deux ingrédients de qualité : la&nbsp;Viniférine&nbsp;et le&nbsp;Squalane.<br>Les principes actifs de cette combinaison permettent de lutter contre les&nbsp;tach ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931127337</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2dd0955e5999ad18ab75e09fa39d8eb96429ae5c80ab5abce7db958abf8c89d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Coffret Eau de beauté Trio Bestsellers Soin & Éclat ]]></title>
<g:id>73d99ed9-90d0-4a61-a6ff-bd7bcc39a2b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-coffret eau de beauté trio bestsellers soin & Éclat?73d99ed9-90d0-4a61-a6ff-bd7bcc39a2b3 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret, conçu par la marque renommée Caudalie, regroupe trois soins emblématiques qui subliment et hydratent votre épiderme au quotidien.</p><p>Le laboratoire Caudalie, pionnier des soins à base de vinothérapie, met à votre disposition ce coffret qui regroupe des produits phares pour un rituel de beauté optimal. Composé d'un sérum, d'une crème et d'un masque, ce coffret est enrichi d'ingrédients naturels et efficaces qui apportent luminosité et hydratation. Chaque soin a été formulé pour  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930028741</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a6682183fa4a1d8515ec72c9812cc7f260ea236f2df97d7459e4450c3b9af7de ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Idées Cadeaux > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Coffret Huile de Soin​ Soleil des Vignes ]]></title>
<g:id>945f71fe-1294-40a4-88e8-c251b4bff686</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-coffret huile de soin​ soleil des vignes?945f71fe-1294-40a4-88e8-c251b4bff686 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <div class="font-light mt-2">
<div>Craquez pour le coffret Huile de Soin​ Soleil des Vignes : la routine parfumée pour une peau nourrie, lumineuse et éclatante.<br /><br />Retrouvez dans ce coffret : l'Huile de Soin Soleil des Vignes &amp; 2 produits parfumés offerts.<br /><br /><span>L'Huile de Soin Soleil des Vignes 50 ml</span><br />Grâce à son alliance d'huiles nourrissantes, l'Huile de Soin Soleil des Vignes améliore l'élasticité de la peau et l'illumine instantanément, sans effet gras. Sa  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930028710</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2538c8dbc7e461edb531fcd46d700d48d2417234c92993ca8bced1582ed5750c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Coffret Resveratrol-lift ]]></title>
<g:id>4d8a4bba-eff6-47b7-acb8-af1233cd4357</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-coffret resveratrol-lift?4d8a4bba-eff6-47b7-acb8-af1233cd4357 ]]></link>
<g:price><![CDATA[ 4350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez Resveratrol–Lift, la collection anti-rides &amp; fermeté, pour prolonger la jeunesse de votre peau.</span><br /><br /><span>Retrouvez dans ce coffret : La Crème Cachemire Redensifiante best-seller + 2 produits de la même collection en formats voyage offerts.</span><br /><br /><span>La Crème Cachemire Redensifiante 50 ml</span><br /><span>N°1 de l’anti-âge en France*, elle corrige les rides, raffermit et redensifie la peau. En un seul geste, le visage est comme lifté, repulpé e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930028680</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/48a842bd558854f50c0d1580bc9af538bba18f0f3467e313b95e27466e417838 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Coffret Trio Crèmes Mains Nutrition 3 x 30 ml ]]></title>
<g:id>419578c2-2380-48da-92d4-19a7250a3171</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-coffret trio crèmes mains nutrition 3 x 30 ml?419578c2-2380-48da-92d4-19a7250a3171 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <div class="font-light mt-2">
<div>Retrouvez dans ce coffret : la Crème Réparatrice Mains et Ongles en format voyage 30 ml et déclinée dans 3 parfums différents pour vous accompagner au fil de vos envies.<br /><br /><span>La Crème Réparatrice Mains et Ongles Vinotherapist™ 30 ml</span><br />Elle nourrit et répare les mains sèches sans effet gras, tout en les protégeant de la déshydratation et des agressions extérieures. Les sensations de tiraillements sont apaisées, la peau est plus douce et les ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522938028163</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22e16862e6dc530857f9ea28919eff65d39e32e4a4dc5867e2a7370774be1d08 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Crème Gommante Douce 75 ml ]]></title>
<g:id>c22faf6b-0e51-470d-b04c-f1ebac6ad3ea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-crème gommante douce 75 ml?c22faf6b-0e51-470d-b04c-f1ebac6ad3ea ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Crème Gommante Douce 75 ml est un soin exfoliant qui élimine en douceur les impuretés et cellules mortes de la peau.<br />Elle nettoie et purifie le visage en douceur grâce aux micro-billes de jojoba alliées à l'huile de pépins de raisin nourrissante. En un instant, la peau est nette, douce et lumineuse.<br />Sa fragrance composée d'un cocktail phyto-aromatique distille des notes fraîches de citron et lavandin.</p>
<p>Sans micro-billes de plastique. Sans parabènes, phénoxyéthanol, ph ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003038</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cab4341141c53b9812c6fd5bd76cb144efb6b30197c35c21b42a17acfd6bbdaa ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Crème exfoliante désincrustante 75 ml ]]></title>
<g:id>9cf36c8a-1048-4718-8ae4-d0e815a00e68</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-crème exfoliante désincrustante 75 ml?9cf36c8a-1048-4718-8ae4-d0e815a00e68 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Crème Exfoliante Désincrustante purifie et affine le grain de peau sans dessécher grâce à ses micro-billes de sable volcanique exfoliantes alliées à de l'eau de raisin hydratante et apaisante. En un instant, votre teint retrouve sa fraîcheur et son éclat. Sa fragrance pétillante composée de notes de pamplemousse, de menthe et d’orange douce vous offira une véritable sensation de bien-être.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004158</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ca0a69f031511fb9d5cf15fd634016ea7c935fb60a546f5efff9cdd8af229d2 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Duo lèvres et mains  Vinotherapist ]]></title>
<g:id>e4fd6bf7-5e4b-4e3c-a36c-589918ab2772</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-duo lèvres et mains  vinotherapist?e4fd6bf7-5e4b-4e3c-a36c-589918ab2772 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret comprend :</p>
<p>- Soin des lèvres Vinothérapist 4.5g</p>
<p><span>Enrichie en huile de pépins de raisin nourrissante et polyphénols de raisin anti-oxydants, ce soin de beauté des lèvres protège et apaise durablement les lèvres sèches. Sa texture fond instantanément sans effet gras et laisse les lèvres hydratées. Son parfum d'orange douce légèrement vanillé parfume subtilement les lèvres pour une protection tout au long de la journée.</span></p>
<p><span>- Crème réparatrice mains  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522932027353</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cdca8f4e412605a06cd6f25b455af55ab89d2815cba9a502b4d08f522091bfd6 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Duo lèvres et mains thé des vignes ]]></title>
<g:id>92af044f-8491-4199-8ad3-25ae86431d03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-duo lèvres et mains thé des vignes?92af044f-8491-4199-8ad3-25ae86431d03 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret contient :</p>
<p><span>- Crème Mains et Ongles Thé des Vignes 30 ml </span></p>
<p><span>La Crème Réparatrice Mains et Ongles Thé des Vignes nourrit et répare les mains sèches sans effet gras, tout en les protégeant de la déshydratation et des agressions extérieures. Les sensations de tiraillements sont apaisées, la peau est plus douce et les ongles et cuticules sont fortifiés. Elle laisse la peau délicatement parfumée de la fragrance iconique Thé des Vignes aux notes de musc blan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522932027360</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b8d2c16fe8408765bae8a577e4fbad4188201e825d5012c8e0c61373d97830f0 ]]></g:image_link>
<g:product_type><![CDATA[ STICK LEVRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau Fraîche Eau des Vignes 50 ml ]]></title>
<g:id>d8d4c25b-1871-4f98-a37c-eb40be2cdc77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau fraîche eau des vignes 50 ml?d8d4c25b-1871-4f98-a37c-eb40be2cdc77 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Eau Fraîche Eau des Vignes 50 ml est une eau parfumée de caractère.<br />Son sillage vous transporte dans un jardin d'été au cœur des vignes, où la pétillante bergamote se mêle à l'élégance de l'iris et à la sensualité du musc blanc :</p>
<ul><li>Musc Blanc : Une note douce et enveloppante.</li>
<li>Bergamote : Une note fraîche et pétillante.</li>
<li>Iris : Une note végétal, douce et poudrée.</li>
</ul><p>Sans parabène ni phénoxyéthanol, ni huiles minérales. Sans PEG ni silicone.<br ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003915</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ac8fae3236bffed2ea34f8debb34737658131211def0dcdbc61de28ac24451e ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau Fraîche Fleur de Vigne 50ml ]]></title>
<g:id>d69e5d85-1c0b-4e64-803b-cc9b2bbb43ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau fraîche fleur de vigne 50ml?d69e5d85-1c0b-4e64-803b-cc9b2bbb43ff ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span> L'Eau Fraîche Fleur de Vigne est une eau parfumée, fraîche et légère, aux notes énergisantes de pamplemousse, de mandarine et de cèdre. Son sillage évoque l’éclosion au petit matin de cette fleur éphémère au parfum délicat. Une fleur ardemment attendue, désirée, fêtée comme la promesse d’un millésime extraordinaire.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003878</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f10d4658ad2320c7cfbedc3f1f63f8cfe16e8f63c842a6ee1dc67a20a9337fb3 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau Fraîche Rose de Vigne 50 ml ]]></title>
<g:id>8dbb808f-1e5a-4294-98d7-21e654384354</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau fraîche rose de vigne 50 ml?8dbb808f-1e5a-4294-98d7-21e654384354 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Eau Fraîche Rose de Vigne 50 ml est une eau parfumée particulièrement douce et romantique.<br />Son sillage évoque les notes fleuries et la fraîcheur végétale de la rose de vigne au petit matin, dont le parfum se mêle aux notes acidulées de rhubarbe :</p>
<ul><li>Rhubarbe : Une note fruitée et pétillante.</li>
<li>Rose : Une note de bouquet floral printanier.</li>
<li>Musc Blanc : Une note douce et enveloppante.</li>
</ul><p>Sans parabène ni phénoxyéthanol, ni huiles minérales.<br /> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003908</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27f91c9d63a398191938bdd3eafe40baf2912fdfab2efcd7164a37a36e3265c3 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau Fraîche Soleil des Vignes 50ml ]]></title>
<g:id>f11229a9-f641-4199-b81e-7a7a058edc34</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau fraîche soleil des vignes 50ml?f11229a9-f641-4199-b81e-7a7a058edc34 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'Eau Fraîche Soleil des Vigne est une eau parfumée, particulièrement chaleureuse. Sa fragrance ensoleillée révèle sur la peau des notes de coco, fleur d'oranger, jasmin et vanille… Une réminiscence de l'été tout au long de l'année.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003939</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/834830ed89deb8df0af9b12c735b5323caf412bdef80a7280f0e3bf18edd1e21 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau Fraîche Thé des Vignes 100ml ]]></title>
<g:id>46e937f1-1965-45d3-adb8-4fe4c8ecea98</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau fraîche thé des vignes 100ml?46e937f1-1965-45d3-adb8-4fe4c8ecea98 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003892</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c1f043e8566dcd844ebc753a59f3953c08507eca5bc1ec3f437ec012a2c0c80 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau de Raisin 200 ml ]]></title>
<g:id>47b1ed02-d23d-4821-aea8-7e6f6cae5a95</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau de raisin 200 ml?47b1ed02-d23d-4821-aea8-7e6f6cae5a95 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Caudalie Eau de Raisin 200 ml est une eau apaisante, hydratante et anti-oxydante à pulvériser sur le visage.</span><br /><span>Sa formule à base de raisin 100% Bio convient à tous les types de peaux, même les plus sensibles.</span><br /><br /><span>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.</span><br /><span>Sans conservateurs.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003212</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c79578da2dfa990760735e39c2c83d7f33d145559baae3eba5687d4416e1dd54 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau de beauté 100 ml ]]></title>
<g:id>61b056db-42ac-4bba-8fe2-664aed453ee5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau de beauté 100 ml?61b056db-42ac-4bba-8fe2-664aed453ee5 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Produit culte de Caudalie, l’Eau de Beauté est une brume de soin 100% naturelle aux multiples propriétés. Elle révèle l'éclat du teint et resserre les pores tout en fixant le maquillage.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003199</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e07c7530b64552dd4e6eb30cad8744de2531a5063d5c3668dad40a4c8de41da0 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Eau de beauté 30 ml ]]></title>
<g:id>300ea03d-e918-46ac-8273-0d57d896ba6f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-eau de beauté 30 ml?300ea03d-e918-46ac-8273-0d57d896ba6f ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Produit culte de Caudalie, l’Eau de Beauté est une brume de soin 100% naturelle aux multiples propriétés. Elle révèle l'éclat du teint et resserre les pores tout en fixant le maquillage.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003182</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/95f22fdd08973f2f895fd06ad4330c203b47fc206c522e8c1d6ae1c6d9f377da ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Gel Douche Eau des Vignes 200ml ]]></title>
<g:id>e79877d0-edc9-4756-9781-b16568e32af4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche eau des vignes 200ml?e79877d0-edc9-4756-9781-b16568e32af4 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Sans savon et haute tolérance, le Gel Douche Eau des Vignes nettoie en douceur et laisse la peau délicatement parfumée aux notes pétillantes de bergamote, iris et musc blanc.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003861</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/650d0820709ab01619cfc90be151eb5819c1f193d8bb88cea9283568e4e2794a ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Gel Douche Fleur De Vigne 200ml ]]></title>
<g:id>706b4291-11b5-40d6-8900-42a89c31cb16</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche fleur de vigne 200ml?706b4291-11b5-40d6-8900-42a89c31cb16 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Gel Douche Fleur de Vigne</span> aux notes énergisantes de melon d’eau, poivre rose et rose blanche <span>nettoie en douceur et laisse un léger parfum sur la peau</span>.</p>
<p>Sa <span>formule est vegan</span>, sans savon, haute tolérance et composée à 96% d’ingrédients d’origine naturelle.</p>
<p>Le packaging du Gel Douche Fleur de Vigne est 100% recyclable, plus respectueux de la planète*.</p>
<p><em>*Hors pompes et capots multi-matériaux, recyclables uniquement dans les Boutique ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003816</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38b2f9addabcf14d0bc095fe96d258f9c1df4c361a1e907242bdec1571adc29a ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Gel Douche Rose de Vigne 200ml ]]></title>
<g:id>1e9d5793-36f4-4982-8503-5386cff65fad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche rose de vigne 200ml?1e9d5793-36f4-4982-8503-5386cff65fad ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it">Sans savon et haute tolérance, le Gel Douche Rose de Vigne nettoie en douceur et laisse la peau délicatement parfumée aux notes fleuries de rose, rhubarbe et musc.</div>
<div class="formula"><span>Formule :</span>
<ul class="formula"><li>97% d'ingrédients d'origine naturelle</li>
<li>Vegan</li>
<li>Sans savon et dotée d'une base lavante ultra-douce</li>
</ul></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003847</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/63f3b33368a788cc6323e50e8a89c197dece9e94f0ab8d77ed2079ab3ea9afe3 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Gel Douche Soleil des Vignes 200 ml ]]></title>
<g:id>64d80cb6-0be3-40d7-87f9-2385a7d3ec00</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche soleil des vignes 200 ml?64d80cb6-0be3-40d7-87f9-2385a7d3ec00 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Gel Douche Soleil des Vignes 200 ml est un gel douche doux, sans savon, pour tous les types de peaux, enrichi en aloe vera, aux notes de coco, à la fleur d'oranger et au jasmin.</p>
<p>Sans phénoxyéthanol, sans silicones, sans PEG, sans huiles minérales, sans SLS, sans BHA, sans EDTA et sans ingrédients d'origine animale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003854</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6cc71859b525ccd08d9403f3582bca4b0b4496fad9af5467981dfb57e2fc3970 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Gel Douche Thé des Vignes 200ml ]]></title>
<g:id>298b6c90-a566-4425-8add-4e5fa6aca8fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche thé des vignes 200ml?298b6c90-a566-4425-8add-4e5fa6aca8fb ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Sans savon et haute tolérance, le Gel Douche Thé des Vignes nettoie en douceur. Il laisse la peau délicatement parfumée de la fragrance iconique Thé des Vignes aux notes de musc blanc, néroli et gingembre.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003823</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/af5b443036ef388eb8a8b46dc19032050dbdd98e1f6de314eb7cc2f826720705 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Gel douche thé des vignes 400 ml ]]></title>
<g:id>4955bbf9-ad1d-4221-a4d8-65de6f409987</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-gel douche thé des vignes 400 ml?4955bbf9-ad1d-4221-a4d8-65de6f409987 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Sans savon et haute tolérance, le Gel Douche Thé des Vignes nettoie en douceur. Il laisse la peau délicatement parfumée de la fragrance iconique Thé des Vignes aux notes de musc blanc, néroli et gingembre.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004035</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/10fc74e82a6ad226bf905f232e6a26d8e024a6ccf8629d4306d20f10b89b175b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Huile de Soin Démaquillante 150 ml ]]></title>
<g:id>92f0a47b-ffd0-4500-9cb8-5dfc6be03a86</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-huile de soin démaquillante 150 ml?92f0a47b-ffd0-4500-9cb8-5dfc6be03a86 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Huile de Soin Démaquillante 150 ml est une huile démaquillante, mélange d'huiles végétales nourrissantes 100% d'origine naturelle.</p>
<p>Pour le visage et les yeux, elle démaquille tous les types de maquillages, y compris waterproof. Elle nettoie et élimine les impuretés sans laisser de film gras.<br />Elle est parfaite pour celles qui veulent un démaquillage très efficace, rapide et sans coton.<br />Sa texture huile sans effet gras se transforme en lait au contact de l'eau. Son par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003175</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9fbf947612bdcc2ac3e53213f8dbcffa2e75184ef9126fb7e4df80dc3a8f6b51 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Huile de Soin Figue Lissage & Glow - 100ml ]]></title>
<g:id>717e8705-154d-4946-97ca-70fa3f171f32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-huile de soin figue lissage & glow - 100ml?717e8705-154d-4946-97ca-70fa3f171f32 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'Huile de Soin Lissage &amp; Glow est une huile naturelle et multi-usages pour le corps, les cheveux et le décolleté. Enrichie en huiles précieuses et figue de barbarie, elle nourrit et sublime tous les types de peaux, rend les cheveux brillants et lisse le décolleté.</span><br /><br /><span>Son parfum de figue 100% d'origine naturelle enveloppe la peau d'une fragrance sensuelle et addictive.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004196</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/83067fe7ae1d92453286719305ef673071e33cbba98c914233adfea5470bad29 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Huile de Soin Figue Lissage & Glow - 50ml ]]></title>
<g:id>066382bc-9e8f-48a6-9e14-ab66f7d50042</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-huile de soin figue lissage & glow - 50ml?066382bc-9e8f-48a6-9e14-ab66f7d50042 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'Huile de Soin Lissage &amp; Glow est une huile naturelle et multi-usages pour le corps, les cheveux et le décolleté. Enrichie en huiles précieuses et figue de barbarie, elle nourrit et sublime tous les types de peaux, rend les cheveux brillants et lisse le décolleté.</span><br /><br /><span>Son parfum de figue 100% d'origine naturelle enveloppe la peau d'une fragrance sensuelle et addictive.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004189</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5db60c267a497733b6824456f86e9c055599af0e5b6de469b6a64ec53364ed04 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Huile de Soin Soleil des Vignes - 100ml ]]></title>
<g:id>a5383f72-0c3e-499d-94de-d1dacde72c26</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-huile de soin soleil des vignes - 100ml?a5383f72-0c3e-499d-94de-d1dacde72c26 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'Huile de Soin Soleil des Vignes est une huile nourrissante pour le corps. Enrichie en huiles d'argan, de karité, de pépins de raisin et d'amande, elle améliore l'élasticité de la peau et l'illumine instantanément.</span><br /><br /><span>Sa fragrance emblématique Soleil des Vignes révèle sur la peau des notes de coco, fleur d'oranger et jasmin… Une réminiscence de l'été tout au long de l'année.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004172</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6722005b63438ef4456556748f70bdb9f36db1c4f5e69ff6b6fc374aa9c9a830 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Huile de Soin Soleil des Vignes - 50ml ]]></title>
<g:id>6a7e8765-9b90-40b1-b6fa-3357be7b52d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-huile de soin soleil des vignes - 50ml?6a7e8765-9b90-40b1-b6fa-3357be7b52d5 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="font-light mt-2">
<div>L'Huile de Soin Soleil des Vignes est une huile nourrissante pour le corps. Enrichie en huiles d'argan, de karité, de pépins de raisin et d'amande, elle améliore l'élasticité de la peau et l'illumine instantanément.<br /><br />Sa fragrance emblématique Soleil des Vignes révèle sur la peau des notes de coco, fleur d'oranger et jasmin… Une réminiscence de l'été tout au long de l'année.</div>
</div>
<div class="font-light mt-2"><span>Type de peau <span>:</span></s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004165</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/efb136f68d56cf6c4453b0be32dd7849e2c1836fee5a7f6229c0e21acf900b17 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Masque peeling glycolique - 75 ml ]]></title>
<g:id>e3bd85cc-5a6b-4997-8671-a7366807edfa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-masque peeling glycolique - 75 ml?e3bd85cc-5a6b-4997-8671-a7366807edfa ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Masque Peeling Glycolique 75 ml est un masque peeling adapté à tous les types de peaux, et qui permet d'illuminer et d'unifier les peaux ternes qui manquent d'éclat.<br /><br /><span>Ce masque contient de nombreux actifs et ingrédients qui agissent efficacement tels que :</span><br /><span>- l'Actif Anti-tache, la Viniférine qui contribue à une peau éclatante</span><br /><span>- l'Actif Éclat-perfecteur, la Papaye qui libère la peau des excès de cellules mortes, et donne un teint uni ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003281</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28f955a518be844208c84ae1a2767eb4d50cd72ccd1b0f44e59d279c267a3db6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Premier Cru Crème Riche 50ml ]]></title>
<g:id>a62e7e39-c658-40ee-bafc-22988e616aa9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-premier cru crème riche 50ml?a62e7e39-c658-40ee-bafc-22988e616aa9 ]]></link>
<g:price><![CDATA[ 8490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Grâce à la technologie brevetée TET8™, la <span>Crème Riche Premier Cru</span> est un<span> soin anti-âge</span> d'exception qui procure<span> confort et hydratation</span> même aux peaux les plus sèches et sensibles.<br />Elle <span>corrige</span> sans compromis les <span>8 signes de l'âge</span> : rides installées, ridules, fermeté, volume, élasticité, taches, hydratation, éclat.<br />Les bio-céramides présents dans la Crème Riche sont similaires aux lipides de la barrière cutanée et la ren ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003571</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/768fde5ab6953be1e3af40866ac4651af19abeae11fb8ce0223b770d269d7d55 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol Fluide Cachemire Redensifiant 40 ml ]]></title>
<g:id>5b8c27a1-1747-4ff1-a3cb-c48695d3b9b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol fluide cachemire redensifiant 40 ml?5b8c27a1-1747-4ff1-a3cb-c48695d3b9b3 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Resveratrol [Lift] Fluide Cachemire Redensifiant 40 ml est un soin conçu pour agir en profondeur afin de redensifier la peau et lui redonner fermeté et élasticité.</p><p>Sa formule innovante combine les bienfaits du resveratrol de vigne et d'un complexe d'acides hyaluroniques micro pour une peau visiblement raffermie, lissée et matifiée. Elle aide à réduire l'apparence des pores et des imperfections pour un teint plus uniforme et éclatant.<br>La peau est durablement hydratée, jour ap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004523</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b4242f9f526d89ea64b576e6bb4f22f977c6394b5f5d8efbe70038457fb65a0 ]]></g:image_link>
<g:product_type><![CDATA[ PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol Lift Sérum Recharge, 30ml ]]></title>
<g:id>1e988e49-77f2-4b3f-92c0-39f9e95d41ea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol lift sérum recharge, 30ml?1e988e49-77f2-4b3f-92c0-39f9e95d41ea ]]></link>
<g:price><![CDATA[ 3890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rechargez votre peau en resvératrol avec notre éco-recharge en aluminium et donnez une seconde vie à votre flacon vide. Recharge conçue pour être utilisée uniquement avec le flacon en verre du Sérum Liftant Fermeté pour une meilleure conservation.</p><p>Le Sérum Liftant Fermeté Resveratrol–Lift corrige les rides et lisse l’ovale du visage. Sa formule ultra-concentrée agît instantanément pour des traits liftés et une peau visiblement plus ferme. Au coeur de l’innovation, le Collagène 1 Vegan*  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004516</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/550edc413d0e54f5d46f496e81e8fb2dae2cef04f9bc71e2d844a1c6dce7bafb ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol-Lift Soin Liftant Regard ]]></title>
<g:id>ef73720c-4317-4b44-9d7c-7c40f93450f8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol-lift soin liftant regard?ef73720c-4317-4b44-9d7c-7c40f93450f8 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p><strong>Pour qui :</strong> Tous les types de peaux, convient aux yeux sensibles.</p></li><li><p><strong>Résultats beauté :</strong> Les poches et les cernes sont réduites, les paupières sont défroissées.</p></li><li><p><strong>Actifs :</strong> Extrait de Quinoa, Biopolymères, Peptides.</p></li><li><p><strong>Le + :</strong> Sa formule composée à 97% d'ingrédients d'origine naturelle.</p></li></ul><p>&nbsp;</p><p>Le <strong>Soin Liftant Regard Resveratrol–Lift de Caudalie </strong>ré ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004509</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/496216ce051daa2486f807a3f2c701c107723b265f064154548017c5726247fd ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol-lift Crème tisane de nuit 50 ml ]]></title>
<g:id>142f4e61-5b35-469c-8d2f-d5f6c9bd9ced</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol-lift crème tisane de nuit 50 ml?142f4e61-5b35-469c-8d2f-d5f6c9bd9ced ]]></link>
<g:price><![CDATA[ 4350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Collagène du Futur ? Vegan &amp; Durable.</span><br /><span>La Crème Tisane de Nuit lisse les rides pendant la nuit pour des traits reposés, une peau plus ferme et un teint plus éclatant au réveil. Au coeur de l’innovation, le Collagène 1 Vegan*, collagène d’origine végétale, associé à un brevet anti-âge exclusif (Resvératrol de vigne, acides hyaluroniques et booster de collagène vegan) pour stimuler les 3 types de collagène.</span><br /><br /><span>Disponible en format recharge.</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004257</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fb86d752cda3ef7169fc7b596bdfc1e6d01a586397c0bf8f688ee67b85914da7 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol-lift Crème tisane de nuit recharge 50 ml ]]></title>
<g:id>61d11816-1410-46be-82f3-34a0d8a6004f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol-lift crème tisane de nuit recharge 50 ml?61d11816-1410-46be-82f3-34a0d8a6004f ]]></link>
<g:price><![CDATA[ 3650.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Caudalie s’engage pour faire rimer beauté et éco-responsabilité. Les capsules permettent de recharger votre pot La Crème Tisane de Nuit en toute simplicité. Recharge conçue pour être utilisée uniquement avec le pot rechargeable pour une meilleure conservation.</span><br /><br /><span>La Crème Tisane de Nuit lisse les rides pendant la nuit pour des traits reposés, une peau plus ferme et un teint plus éclatant au réveil. Au coeur de l’innovation, le Collagène 1 Vegan*, collagène d’origine ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004264</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27866305560ce6d8deba7e4927c3ba6ce4c612b17206af95fbea4497b121173d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol-lift Sérum Liftant Fermeté 30 ml ]]></title>
<g:id>27524472-603c-416e-b123-1d968f01680f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol-lift sérum liftant fermeté 30 ml?27524472-603c-416e-b123-1d968f01680f ]]></link>
<g:price><![CDATA[ 4790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>3X plus efficace que le Rétinol pour raffermir la peau.</span><br /><br /><span>Le Sérum Liftant Fermeté Resveratrol–Lift corrige les rides et lisse l’ovale du visage. Sa formule ultra-concentrée agît instantanément pour des traits liftés et une peau visiblement plus ferme. Au coeur de l’innovation, le Collagène 1 Vegan*, collagène d’origine végétale, associé à un brevet anti-âge exclusif (Resvératrol de vigne, acides hyaluroniques et booster de collagène vegan) pour stimuler les 3 type ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004240</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a41d0a4ff5e98f53125afcc9c51eeb4edbdac0319db4b45ef7d8459e6fc57e9 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol-lift crème cachemire redensifiante 50 ml ]]></title>
<g:id>e88267b0-4422-43fe-b82c-dfbe8a1ec510</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol-lift crème cachemire redensifiante 50 ml?e88267b0-4422-43fe-b82c-dfbe8a1ec510 ]]></link>
<g:price><![CDATA[ 4350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Collagène du Futur ? Vegan &amp; Durable.</span><br /><span>N°1 de l’anti-âge en France*, La Crème Cachemire Redensifiante Resveratrol–Lift corrige les rides et raffermit la peau. En un seul geste, la peau est nourrie, lissée et visiblement repulpée. Au coeur de l’innovation, le Collagène 1 Vegan**, collagène d’origine végétale, associé à un brevet anti-âge exclusif (Resvératrol de vigne, acides hyaluroniques et booster de collagène vegan) pour stimuler les 3 types de collagène.</spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004271</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7826654d00773195a2ce57c045f8bf64fb9c4c38c869df5569a720bafba1816 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Resveratrol-lift crème cachemire redensifiante recharge 50 ml ]]></title>
<g:id>c4f1d6d0-4619-411d-8a1a-d07c2b2e15f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-resveratrol-lift crème cachemire redensifiante recharge 50 ml?c4f1d6d0-4619-411d-8a1a-d07c2b2e15f6 ]]></link>
<g:price><![CDATA[ 3650.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Caudalie s’engage pour faire rimer beauté et éco-responsabilité. Les capsules permettent de recharger votre pot de Crème Cachemire Redensifiante en toute simplicité. Recharge conçue pour être utilisée uniquement avec le pot rechargeable pour une meilleure conservation.</span></p>
<p><br />N°1 de l’anti-âge en France*, La Crème Cachemire Redensifiante Resveratrol–Lift corrige les rides et raffermit la peau. En un seul geste, la peau est nourrie, lissée et visiblement repulpée. Au coeur d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004288</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4835acd3e9867ccc9bc520d7d4c44402e6bba42c3bfc41a5ab61863e7889878f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Shampooing  Soin Douceur 200ml ]]></title>
<g:id>ee84957e-90c6-4af9-b713-28e7bd887349</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-shampooing  soin douceur 200ml?ee84957e-90c6-4af9-b713-28e7bd887349 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Tous les types de cheveux.</li>
<li><span>Résultats beauté :</span> Les cheveux sont nettoyés, renforcés et protégés.</li>
<li><span>Actifs :</span> Huile de pépins de raisin, Glycérine.</li>
<li><span>Le + :</span> Il laisse les cheveux délicatement parfumés de la fragrance iconique Thé des Vignes.</li>
</ul><p> </p>
<p>Le <span>Shampooing Soin Douceur de Caudalie </span>nettoie, renforce et protège les cheveux sensibles, même colorés.</p>
<p>Enrichi en huile de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004141</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4109b43f0369966c3fe51c95d29f20d1fd1809e5166d9780c093b427dd959106 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie The Des Vignes Soin Corps Nourrissant Hyaluronique 400m ]]></title>
<g:id>ed9fc5a7-b874-48cd-8daf-18397257b75c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-the des vignes soin corps nourrissant hyaluronique 400m?ed9fc5a7-b874-48cd-8daf-18397257b75c ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin Corps Nourrissant Hyaluronique<br />Acide Hyaluronique Hydratant<br />Beurre de Karité BIO Nourrissant<br />Polyphénols anti-oxydants<br />400ml<br /><br /></p>
<p>Grâce à sa <span>texture légère et fraîch</span>e, le<span> Soin Corps Nourrissant Hyaluronique</span> Thé des Vignes <span>nourrit, hydrate et pénètre</span> rapidement en laissant un voile délicatement parfumé sur votre peau.<br />La peau est <span>souple, douce, lumineuse</span> et délicatement parfumée de la fragrance icon ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003700</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18f663730dd21891ce992832aaa930285890c363abc7020f8d00831ee9c7a02b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Thé des Vignes Soin Corps Nourrissant Hyaluronique 200 ml ]]></title>
<g:id>af0aa0db-de4e-4015-8dda-9d4d2e753be4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-thé des vignes soin corps nourrissant hyaluronique 200 ml?af0aa0db-de4e-4015-8dda-9d4d2e753be4 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Thé des Vignes Soin Corps Nourrissant Hyaluronique 200 ml est un soin corporel qui hydrate et nourrit instantanément pour une peau visiblement plus douce, souple et lumineuse.<br />Sa formule associe :</p>
<ul><li>l'Acide hyaluronique 100% d'origine naturelle, biologique et produit par biotechnologie. Il lisse et hydrate la surface de la peau en continu.</li>
<li>le Beurre de karité d'origine 100% naturelle, biologique et produit durablement. Il nourrit, regénère et répare les peaux  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003693</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/713687b0ce5470140f6628602b61ba0995c0efc1f6af34afab0b9ebf086a29d2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Trousse Les Essentiels de Voyage ]]></title>
<g:id>4e689cfc-1a8f-4459-b349-ca77393e7f34</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-trousse les essentiels de voyage?4e689cfc-1a8f-4459-b349-ca77393e7f34 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez notre trousse de voyage : Les Essentiels de Caudalie pour une peau toujours douce et hydratée, où que vous alliez.<br><br>Cette nouvelle édition limitée contient 4 soins cultes Visage et Corps en format voyage : une Mousse Nettoyante Fleur de Vigne Vinoclean 50 ml, une Crème Sorbet Hydratante VinoHydra 15 ml, un Gel Douche Soleil des Vignes 30 ml et un Soin Corps Nourrissant Hyaluronique Vinotherapist 30 ml.</p><p><strong>Formule :</strong></p><ul><li><p>97% d'ingrédients d'origine  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522932128326</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a7d9b4c20b979f5d80ef0fa80dcb7d1fe40128e8bdbb82fee4d724f7fc6dac1 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Trousse Les Essentiels de Voyage ]]></title>
<g:id>6a6e4e85-b34a-4bbc-b497-6f1d65368911</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-trousse les essentiels de voyage?6a6e4e85-b34a-4bbc-b497-6f1d65368911 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Trousse Les Essentiels de Voyage est une trousse de 4 produits en format voyage pour une routine beauté efficace.</p>
<p>- Caudalie Vinoclean Mousse Nettoyante Fleur de Vigne 50 ml est une mousse au raisin et à la sauge qui nettoie, hydrate et purifie en douceur. Elle apporte éclat et confort, et laisse la peau douce et fraîche.</p>
<p>- Caudalie Vinosource Hydra Crème Sorbet Hydratante 15 ml est un gel-crème qui, grâce à sa technologie "quick break", se transforme au contact de la p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931128327</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb6fa6968eaefb348f52bce02b7ad66c3a26c47ca4b70572f1c962d99603e6dc ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinergetic C+ Huile de Nuit Détox Bio 30 ml ]]></title>
<g:id>f175adf5-485d-42aa-94cc-0cf9fdd218e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinergetic c+ huile de nuit détox bio 30 ml?f175adf5-485d-42aa-94cc-0cf9fdd218e8 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinergetic C+ Huile de Nuit Détox Bio 30 ml est un soin visage conçu pour aider à régénérer les peaux surmenées, stressées, pour un teint frais au réveil.</p>
<p>Sa formule associe 5 huiles précieuses : huile de pépins de raisin riche en Oméga 6, huile de rosier muscat, huile d'amande douce, huiles essentielles de néroli et de lavande.<br />Sa texture huile sèche est rapidement absorbée et sans fini collant. Elle convient à tous les types de peaux même mixtes à grasses.</p>
<p>Sans p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003519</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cbf01bb9a1360922f3f166573449aaa8eacb31ae19140f90c67171ff9a7042ed ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinergetic C+ Masque instant détox 35 ml ]]></title>
<g:id>e067370e-7614-4f72-b5f6-38fbfb1a48b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinergetic c+ masque instant détox 35 ml?e067370e-7614-4f72-b5f6-38fbfb1a48b7 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span> Le Masque Instant Détox Vinergetic C+ nettoie la peau de toutes ses impuretés, élimine l'excès de sébum et resserre les pores. Le teint est frais, net et éclatant.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003984</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cf4a3c00cc77a36502d5c528d9040717bab16cefef4045277f780091f7ef6cc ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie VinoHydra Crème Hydratation Intense 50ml ]]></title>
<g:id>21b8095f-251c-4e6b-9991-7e1a5a298d4a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinohydra crème hydratation intense 50ml?21b8095f-251c-4e6b-9991-7e1a5a298d4a ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Crème Hydratation Intense VinoHydra est l'alliée indispensable des peaux les plus sèches et sensibles. Elle hydrate intensément, nourrit la peau et atténue les sensations d'inconfort et de tiraillement. La peau est visiblement plus souple et reste confortable toute la journée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004356</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a8486c21180c36ced8a4201570dbaf22a67232dd3e34c84d57bcc84302d70b3 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie VinoHydra Crème Hydratation Intense 60ml ]]></title>
<g:id>3d19532b-d035-44e8-80f0-a0df97db8ed3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinohydra crème hydratation intense 60ml?3d19532b-d035-44e8-80f0-a0df97db8ed3 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Crème Hydratation Intense VinoHydra est l'alliée indispensable des peaux les plus sèches et sensibles. Elle hydrate intensément, nourrit la peau et atténue les sensations d'inconfort et de tiraillement. La peau est visiblement plus souple et reste confortable toute la journée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004400</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b029cff89181a9926f205460710c6dac9f9309b567adbe6982f98bf7dbfbd5b3 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie VinoHydra Crème Sorbet Hydratante 60ml ]]></title>
<g:id>eda2a05e-4f45-4877-ae26-7f3dc71b1640</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinohydra crème sorbet hydratante 60ml?eda2a05e-4f45-4877-ae26-7f3dc71b1640 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Crème Sorbet Hydratante VinoHydra hydrate et apaise les peaux fragilisées. Dès l’application, elle diminue la sensibilité cutanée et les rougeurs. Sa texture fraîche comme un sorbet et ultra-légère, fond instantanément sur la peau, la rendant idéale pour les peaux normales, même sensibles.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004387</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ebb56743b3bead088d0d81a51d3be567e1bc383422254a12e7f1564c9566d99 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie VinoHydra Gelée Hydratante 60ml ]]></title>
<g:id>f42efd6a-9f84-4d0a-a397-1074549d7d38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinohydra gelée hydratante 60ml?f42efd6a-9f84-4d0a-a397-1074549d7d38 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Gelée Hydratante VinoHydra agit comme un véritable patch d'hydratation naturelle. Formulée sans silicones, sa texture gelée ultra-fraîche fond sur la peau sans laisser de fini gras, la rendant idéale pour les peaux mixtes, même sensibles. Dès l'application, la peau devient instantanément plus souple, comme gorgée d'eau, et le teint plus frais.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004394</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/377baecedb6b9477f430c426b0a7aa9f3adb8eea59b47d947537fde367bea41f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie VinoHydra Masque-Crème Hydratant 75ml ]]></title>
<g:id>a9637d11-41cc-4d2a-a602-195a07262137</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinohydra masque-crème hydratant 75ml?a9637d11-41cc-4d2a-a602-195a07262137 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Masque-Crème Hydratant VinoHydra offre un véritable bain d'hydratation à votre peau. En un seul geste, il nourrit et apaise les peaux sèches, même les plus sensibles. Après application, la peau est plus douce, plus souple et durablement protégée contre la déshydratation.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004370</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cca98e750db0f63f59de8d0822439b6c9031c1b0f6018e9a6456023401a229c5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie VinoHydra Sérum Hyaluronique S.O.S 30ml ]]></title>
<g:id>84fcedd2-6fb9-44f7-b9ba-c222256c9a9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinohydra sérum hyaluronique s.o.s 30ml?84fcedd2-6fb9-44f7-b9ba-c222256c9a9c ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Sérum Hyaluronique VinoHydra capte intensément et diffuse l'eau en continu toute la journée. Il rétablit l'équilibre hydrique de l'épiderme pour une peau ressourcée et apaisée, tout en souplesse et en douceur.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004363</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71493186c076c4bafebd28a36d151d848abf4d0d302eefe07309cda532b9ec11 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Eau Micellaire 400ml ]]></title>
<g:id>f0850799-a870-4424-b7b2-dab2ebb9697c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean eau micellaire 400ml?f0850799-a870-4424-b7b2-dab2ebb9697c ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <div class="btitle"></div>
<p></p>
<p>Une nouvelle gamme de nettoyants éco-friendly, aux formules vegan et hautement naturelles.</p>
<p><span> </span></p>
<p>Composée de 98% d'ingrédients d'origine naturelle, l'<span>Eau Micellaire Démaquillante Vinoclean </span>nettoie et démaquille en un seul geste le visage et les yeux, tout en respectant l’équilibre naturel de la peau. Gorgée d'Eau de raisin bio, elle hydrate et apaise la peau, même la plus sensible. La peau est nette, douce et confortable.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003106</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e567dd802f6c9d086fd8cab6a56f37059835ed53751f98cb122489b4a54afe4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Eau Micellaire Démaquillante 100 ml ]]></title>
<g:id>61c1aa32-d137-4aa3-9f79-f082e5509f96</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean eau micellaire démaquillante 100 ml?61c1aa32-d137-4aa3-9f79-f082e5509f96 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Eau Micellaire Démaquillante 100 ml est une eau micellaire qui nettoie et démaquille, hydrate et apaise. Elle laisse la peau nette, hydratée et confortable.</p>
<p>Le flacon est en plastique 100% recyclé et recyclable.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.</p>
<p>98% des ingrédients sont d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003083</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3bed1e210a7bada042aeca93f11eee671e65bfa89b6a956612487d1decdd2d5f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Huile de soin démaquillante 75 ml ]]></title>
<g:id>a5ed3cf3-2f68-470f-a64d-4b151b3daad9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean huile de soin démaquillante 75 ml?a5ed3cf3-2f68-470f-a64d-4b151b3daad9 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2">
<div>L'Huile de Soin Démaquillante est un mélange d'huiles végétales nourrissantes 100% d'origine naturelle. Efficace sur tous les types de maquillage y compris waterproof, sa formule clean et vegan démaquille le visage, les yeux et les lèvres en douceur.</div>
</div>
<div class="mt-2"><span>Le saviez-vous ?</span>
<div>Sa texture huile se transforme en lait au contact de l'eau pour un rinçage facile et rapide sans laisser de film gras sur la peau.</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004004</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ba086e715bc49203226e323b09951e8e614abbc1556acf41cf3d6ef9a570236 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Lait d'Amande Démaquillant - 400 mL ]]></title>
<g:id>ed90729d-6d4b-40eb-922d-5885f64038ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean lait d'amande démaquillant - 400 ml?ed90729d-6d4b-40eb-922d-5885f64038ef ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Nos démaquillants se refont une beauté et deviennent VINOCLEAN, une nouvelle gamme de nettoyants éco-friendly, aux formules vegan et hautement naturelles.</span><br /><span>Le Lait d'Amande Démaquillant nettoie et démaquille en douceur le visage et les yeux, même les plus sensibles. Enrichi en huile d'amande douce nourrissante, eau de bleuet apaisante et polyphénols anti-oxydants, il apaise et protège la peau du dessèchement. Hydratée, la peau est nette, douce et confortable.</span><br  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003137</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61bde1771ef60a1d612bebac21a8ea9c04f022df96b0ca4b18418ccef08be31a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Lait d'Amande Démaquillant 100 ml ]]></title>
<g:id>a63b81a5-dcf1-4c55-893f-47e03575247e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean lait d'amande démaquillant 100 ml?a63b81a5-dcf1-4c55-893f-47e03575247e ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Lait d'Amande Démaquillant 100 ml est un lait qui nettoie et démaquille, hydrate et apaise. Il laisse la peau nette, hydratée et confortable.</p>
<p>Le flacon est en plastique 100% recyclé et recyclable.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.<br />Testé sous contrôle dermatologique et ophtalmologique. Non comédogène.</p>
<p>97% des ingrédients sont d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003113</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/babf6ca5bf00d5933e6fa70f731479c17e077abff1c27c6bc2bd9f3a1c5d8ff5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Lait d'Amande Démaquillant 200 ml ]]></title>
<g:id>72effdcf-cdb7-4366-8c6f-fb356c9614a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean lait d'amande démaquillant 200 ml?72effdcf-cdb7-4366-8c6f-fb356c9614a3 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Lait d'Amande Démaquillant 200 ml est un lait qui nettoie et démaquille, hydrate et apaise. Il laisse la peau nette, hydratée et confortable.</p>
<p>Le flacon est en plastique 100% recyclé et recyclable.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.<br />Testé sous contrôle dermatologique et ophtalmologique. Non comédogène.</p>
<p>97% des ingrédients sont d'origine naturelle.</p>
<p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003120</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/795ba113ff9374a465ceb7ea49629e2582eb61c44a7cef62979241ce7a7e6604 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Lotion Tonique Hydratante 100 ml ]]></title>
<g:id>2fbf0f20-d703-484a-9208-cd39d95040e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean lotion tonique hydratante 100 ml?2fbf0f20-d703-484a-9208-cd39d95040e6 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Lotion Tonique Hydratante 100 ml est une lotion à l'eau de rose Bio et à la vinolevure qui parfait le démaquillage, hydrate et tonifie.<br />Ainsi, la peau est fraîche, nette et confortable.</p>
<p>Le flacon est en plastique 100% recyclé et recyclable.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.</p>
<p>99% des ingrédients sont d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003144</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8c50420f611f7763b0387db0eaa09df68548f58454cba90b0bc2d9b4bd76f36 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Lotion Tonique Hydratante 200 ml ]]></title>
<g:id>2c2b1471-2d72-45ab-9f2d-69fa1d2ed2fe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean lotion tonique hydratante 200 ml?2c2b1471-2d72-45ab-9f2d-69fa1d2ed2fe ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Lotion Tonique Hydratante 200 ml est une lotion à l'eau de rose Bio et à la vinolevure qui parfait le démaquillage, hydrate et tonifie.<br />Ainsi, la peau est fraîche, nette et confortable.</p>
<p>Le flacon est en plastique 100% recyclé et recyclable.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.</p>
<p>99% des ingrédients sont d'origine naturelle.</p>
<p>Végan.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003151</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/737c39282371c26630de09dab67123c19fa9f7e0867d891c54a48a931bd5494e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Lotion Tonique Hydratante 400 ml ]]></title>
<g:id>00af74cf-cbff-4580-a4be-54de813dcd83</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean lotion tonique hydratante 400 ml?00af74cf-cbff-4580-a4be-54de813dcd83 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Lotion Tonique Hydratante 400 ml est une lotion à l'eau de rose Bio et à la vinolevure qui parfait le démaquillage, hydrate et tonifie.<br />La peau est fraîche, nette et confortable.</p>
<p>Le flacon est en plastique 100% recyclé et recyclable.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.<br />Testé sous contrôle dermatologique et ophtalmologique.</p>
<p>99% des ingrédients sont d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003168</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e567dd802f6c9d086fd8cab6a56f37059835ed53751f98cb122489b4a54afe4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Mousse Nettoyante 2X150ml ]]></title>
<g:id>23bfda89-95f5-4cdc-80ff-76940ccce5b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean mousse nettoyante 2x150ml?23bfda89-95f5-4cdc-80ff-76940ccce5b6 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>Mousse Nettoyante Vinoclean Caudalie</span><span> est un soin quotidien conçu pour </span><span>nettoyer et purifier la peau en douceur</span><span>.</span><br /><span>Incorporée dans votre routine beauté, la Mousse Nettoyante Vinoclean Caudalie apporte </span><span>éclat et confort</span><span> et laisse la </span><span>peau douce et fraîche</span><span>.</span><br /><span>Avec sa formule à base de </span><span>97% d'ingrédients d'origine naturelle</span><span>, cette < ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930027812</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ec1c2bc72a2aa9a07971b61ba6d6668da58999e2bf59f0dbca5a7060974b3eb8 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Mousse Nettoyante Fleur de Vigne 150 ml ]]></title>
<g:id>0cc2d7a1-853a-425c-a83d-3d668919ffd2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean mousse nettoyante fleur de vigne 150 ml?0cc2d7a1-853a-425c-a83d-3d668919ffd2 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Mousse Nettoyante Fleur de Vigne 150 ml est une mousse au raisin hydratant et à la sauge purifiante qui nettoie et purifie en douceur. Elle apporte éclat et confort, et laisse la peau douce et fraîche.</p>
<p>Le flacon est en plastique 100% recyclé.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.</p>
<p>97% des ingrédients sont d'origine naturelle.</p>
<p>Végan.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003075</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bd1336597b748b65ef845a6033aeb42a1b56659f74cda8dc87f4b2a49d6ed4a8 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoclean Mousse Nettoyante Fleur de Vigne 50 ml ]]></title>
<g:id>8acb7cf9-1c4f-42f4-bd85-e50a4789140e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoclean mousse nettoyante fleur de vigne 50 ml?8acb7cf9-1c4f-42f4-bd85-e50a4789140e ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoclean Mousse Nettoyante Fleur de Vigne 50 ml est une mousse au raisin hydratant et à la sauge purifiante qui nettoie et purifie en douceur, apporte éclat et confort, et laisse la peau douce et fraîche.</p>
<p>Le flacon est en plastique 100% recyclé.</p>
<p>Sans parabènes, phénoxyéthanol, PEG, silicones, phtalates, huiles minérales, sodium laureth sulfate, ingrédients d'origine animale.</p>
<p>97% des ingrédients sont d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003052</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/17a6ab0bded57b69fadd983eddf4b5363a105d730f9eadf80f3ad04acba44419 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinocrush Crème Teintée - Teinte 3 30ml ]]></title>
<g:id>c4aace0b-2b67-48f6-a4b9-abc271195b92</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinocrush crème teintée - teinte 3 30ml?c4aace0b-2b67-48f6-a4b9-abc271195b92 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> Le teint est unifié, lumineux et la peau est hydratée.</li>
<li><span>Actifs :</span> Acide Hyaluronique, Niacinamide, Eau de Raisin Bio.</li>
<li><span>On aime :</span> Son fini ultra-naturel.</li>
</ul><p> </p>
<p>La <span>Crème Teintée Vinocrush</span> corrige et unifie la peau tout en réhaussant sa beauté naturelle.</p>
<p>Ses pigments encapsulés d’origine naturelle se fondent sur la peau à l’ap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004110</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bc425565545f02b0121a865975a5a45ef3f2bf979aeda32b6f5bee09ab05ff6a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinocrush Crème Teintée - Teinte 4 30ml ]]></title>
<g:id>14f99ff6-3d01-4f66-9d9f-4d7dc8281ef0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinocrush crème teintée - teinte 4 30ml?14f99ff6-3d01-4f66-9d9f-4d7dc8281ef0 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> Le teint est unifié, lumineux et la peau est hydratée.</li>
<li><span>Actifs :</span> Acide Hyaluronique, Niacinamide, Eau de Raisin Bio.</li>
<li><span>On aime :</span> Son fini ultra-naturel.</li>
</ul><p> </p>
<p>La <span>Crème Teintée Vinocrush</span> corrige et unifie la peau tout en réhaussant sa beauté naturelle.</p>
<p>Ses pigments encapsulés d’origine naturelle se fondent sur la peau à l’ap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004127</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/81913f5d3f9fcf9d45d3cde120da402d52251f853650209233af2c2ea360255a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinocrush Crème Teintée - Teinte 5 30ml ]]></title>
<g:id>17e72594-e538-49d0-8507-c9709615d840</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinocrush crème teintée - teinte 5 30ml?17e72594-e538-49d0-8507-c9709615d840 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> Le teint est unifié, lumineux et la peau est hydratée.</li>
<li><span>Actifs :</span> Acide Hyaluronique, Niacinamide, Eau de Raisin Bio.</li>
<li><span>On aime :</span> Son fini ultra-naturel.</li>
</ul><p> </p>
<p>La <span>Crème Teintée Vinocrush</span> corrige et unifie la peau tout en réhaussant sa beauté naturelle.</p>
<p>Ses pigments encapsulés d’origine naturelle se fondent sur la peau à l’ap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004295</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ca70f97a22f37aba3e5a95edccd01e27bc4b751f9deac3bdcf58ff15ceabb9b1 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinocrush Crème Teintée Teinte N°1 30ml ]]></title>
<g:id>f8047aa3-5058-47cf-a9c8-6ab24092ce1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinocrush crème teintée teinte n°1 30ml?f8047aa3-5058-47cf-a9c8-6ab24092ce1b ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> Le teint est unifié, lumineux et la peau est hydratée.</li>
<li><span>Actifs :</span> Acide Hyaluronique, Niacinamide, Eau de Raisin Bio.</li>
<li><span>On aime :</span> Son fini ultra-naturel.</li>
</ul><p> </p>
<p>La <span>Crème Teintée Vinocrush</span> corrige et unifie la peau tout en réhaussant sa beauté naturelle.</p>
<p>Ses pigments encapsulés d’origine naturelle se fondent sur la peau à l’ap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004097</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d8e509e9cefe65bdd418e8f5efd4d247fcb1d64e94639d0e1239ac00bc445df6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinocrush Poudre Bronzante ]]></title>
<g:id>016641e0-e9e5-480a-b144-1734b556a9b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinocrush poudre bronzante?016641e0-e9e5-480a-b144-1734b556a9b5 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> La peau est éclatante, le teint est hâlé.</li>
<li><span>Actifs :</span> Huile de Pépins de Raisin, Polyphénols.</li>
<li><span>On aime :</span> Sa teinte universelle qui convient à toutes les carnations.</li>
</ul><p> </p>
<p>La <span>Poudre Bronzante Longue Tenue Vinocrush</span> vous offre un teint naturellement ensoleillé toute l'année.</p>
<p>Formulée à base de <span>pigments minéraux</span> sa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004134</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f5f6deaf8d7e3a8da004bccaf2f179d04b80ff9108e3c1630be83226ed3a43f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinofresh Déodorant Stick Naturel 50g ]]></title>
<g:id>61022157-a94a-432d-aa37-adf4e395afaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinofresh déodorant stick naturel 50g?61022157-a94a-432d-aa37-adf4e395afaa ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <div class="btitle"></div>
<p></p>
<p>Testé sous contrôle dermatologique, <span>Vinofresh</span> <span>de Caudalie</span> est un stick naturel qui convient aux peaux même les plus sensibles.</p>
<p><span> </span></p>
<p>Il peut s’appliquer sur une peau rasée, épilée, y compris pendant un traitement d’épilation au laser.</p>
<p><span> </span></p>
<p>Convient aux femmes enceintes et allaitantes.</p>
<p><span> </span></p>
<p>Grâce à sa texture translucide non grasse et qui ne laisse pas de traces,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003304</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3590fc2901a6188df1079d4910f08e9c989a67abf9c34dc5464c28cfc18821bf ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Crème Mains Anti-tache 50ml ]]></title>
<g:id>974c776b-38ba-4a99-8f8b-732932b0c695</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect crème mains anti-tache 50ml?974c776b-38ba-4a99-8f8b-732932b0c695 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécialement conçue pour les mains, la Crème Mains Anti-taches Vinoperfect estompe visiblement les taches brunes, prévient leur apparition et nourrit les mains sans laisser de film gras.</p>
<p><span> </span></p>
<p>Sa texture crème à la fois fine et onctueuse enveloppe la peau d'un confort absolu. Sa fragrance phyto-aromatique, fraîche et subtile, associe des notes vertes de fleur de cédrat, feuilles d'oranger, melon d'eau et menthe froissée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003274</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38119ffc20b205dea1a6e50a7148d74e088c0a97cb05776ac6287308b55eb077 ]]></g:image_link>
<g:product_type><![CDATA[ CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Crème Nuit Glycolique Anti-Taches 50 ml ]]></title>
<g:id>5b3490e0-1eb7-4834-b5a3-c3e5d0981e0d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect crème nuit glycolique anti-taches 50 ml?5b3490e0-1eb7-4834-b5a3-c3e5d0981e0d ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoperfect Crème Nuit Glycolique Anti-Taches 50 ml est une crème qui agit comme un véritable peeling doux tout au long de la nuit pour révéler un peau éclatante au réveil.<br />Ce soin de nuit est formulé à base de viniférine, d'acide glycolique et d'enzymes de papaye pour unifier et affiner le grain de peau.</p>
<p>Son parfum phyto-aromatique, frais et subtil, associe des notes vertes de bergamote, d'orange douce, de mandarine et de bois citronnier.</p>
<p>Dès son application, il c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003236</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19a575f6b3f2154aae0d3cb27ced37364aff547ae345161f7d3aa2071098e5cd ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Crème Éclat Anti-Taches 50 ml ]]></title>
<g:id>313854a7-6d2a-4bf6-b36b-14a5ac754770</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect crème Éclat anti-taches 50 ml?313854a7-6d2a-4bf6-b36b-14a5ac754770 ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoperfect Crème Éclat Anti-Taches 50 ml est une crème de jour enrichie en viniférine 500 et niacinamide qui corrige, prévient les taches et unifie le teint. Sa texture gel veloutée qui contient des nacres d'origine naturelle fond sur la peau pour lui apporter éclat et hydratation sans effet gras. Elle offre un éclat instantané à la peau.<br />Sa fragrance phyto-aromatique fraîche et subtile associe des notes vertes de bergamote, mandarine, feuille de citronnier, concombre et menthe ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003228</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/852e08abb92c223d939c262f93e55130ebc1f594e8680a410bff189f8a7b457c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Essence Glycolique 50 ml ]]></title>
<g:id>86079731-138a-451b-883f-76733b83d5da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect essence glycolique 50 ml?86079731-138a-451b-883f-76733b83d5da ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoperfect Essence Glycolique Concentrée d'Éclat 50 ml est un soin anti-taches visage et cou. Il permet de prévenir ou d'atténuer les taches brunes (dues au soleil, à l'acné, à l'âge, à la grossesse..). Tout en éliminant les cellules mortes :</p>
<ul><li>l'eau de raisin hydrate, apaise, et est antioxydante,</li>
<li>la pivoine blanche illumine et unifie le teint,</li>
<li>l'acide glycolique affine le grain de peau.</li>
</ul><p>Contient de l'acide glycolique, de la pivoine blanche e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930033264</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6c2fc59c4e7d71d96adddfa998cb70c48f79a81099d18aa072f505ba4604fa6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Essence Glycolique Concentrée 100ml ]]></title>
<g:id>28f8e816-f0bb-4ef7-8ede-925406b9a324</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect essence glycolique concentrée 100ml?28f8e816-f0bb-4ef7-8ede-925406b9a324 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> Prévient et atténue les taches brunes, apporte éclat, luminosité et uniformité au teint.</li>
<li><span>Actifs :</span> Acide Glycolique, Pivoine Blanche, Eau de Raisin Bio.</li>
<li><span>Le + :</span> Elle est formulée avec 98% d'ingrédients d'origine naturelle.</li>
</ul><p> </p>
<p>L'<span>Essence Glycolique Concentrée d'Éclat</span> est la 1ère étape de la routine anti-taches Vinoperfect et s'a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004011</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fad173634eee82484132c9d2497f67745318b86478c5b6e4a67778405395f6df ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Mousse Micro-Peeling Éclat 100ml ]]></title>
<g:id>a807f0e9-4ed3-41e1-9d09-06e50f29994a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect mousse micro-peeling Éclat 100ml?a807f0e9-4ed3-41e1-9d09-06e50f29994a ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Mousse Micro-Peeling Éclat Vinoperfect nettoie la peau en profondeur et élimine les cellules mortes grâce à une exfoliation kératolytique douce. Le teint est plus lumineux et unifié. Un soin peeling quotidien pour un effet peau neuve en 30 secondes.</span></p>
<div class="font-light mt-2">
<div>L'exfoliation kératolytique stimule le renouvellement cellulaire, ce qui contribue à faire disparaître les taches en surface de l'épiderme et donne de l'éclat à la peau. L'acide mandélique est ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004318</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/91cd9f2272d8dfde9623cf712165d93e3d274ea7ef98f6e07792123d539ab21b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Soin Éclaircissant Regard 15 ml ]]></title>
<g:id>8b7dac4f-73b5-417a-8d70-97493c34c718</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect soin Éclaircissant regard 15 ml?8b7dac4f-73b5-417a-8d70-97493c34c718 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoperfect Soin Éclaircissant Regard 15 ml est une crème fluide corrigeant tous types de cernes et hydratant pour le contour des yeux. Son embout en céramique permet une action rafraîchissante et participe à la réduction des cernes. Elle contient :</p>
<ul><li>de la viniférine, qui corrige les cernes bruns/noirs et assure une action anti-taches,</li>
<li>de la caféine qui corrige les cernes bleus/violets et est antioxydante,</li>
<li>de la niacinamide qui unifie le contour des yeux  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003298</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2a6e1f22c129cf9499bf3775fa75beb8dda6171d1809db7339815beae9abffb ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoperfect Sérum Éclat Anti-Taches 30 ml + Vinosun Protect Crème SPF50+ 25 ml Offerte ]]></title>
<g:id>83269f40-ce4b-41e3-be79-daac2830d8d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoperfect sérum Éclat anti-taches 30 ml + vinosun protect crème spf50+ 25 ml offerte?83269f40-ce4b-41e3-be79-daac2830d8d2 ]]></link>
<g:price><![CDATA[ 4290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinoperfect Sérum Éclat Anti-Taches 30 ml + Vinosun Protect Crème SPF50+ 25 ml Offerte est un coffret de soins anti-taches et solaire pour un bronzage et un teint uniforme, lumineux et sans taches.</p>
<p>- Caudalie Vinoperfect Sérum Éclat Anti-Taches 30 ml est un soin pour visage, cou et décolleté qui corrige les taches (soleil, acné, âge...) et prévient leur apparition. Le teint est plus éclatant, la peau est hydratée.<br />Convient à tous types de peau.<br />Non photosensibilisant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522939027332</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58cc7ad0d570ee60502e88a9916852e9961d1fd028324581cbdb1976ef472866 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Fluide Matifiant Hydratant 40 ml ]]></title>
<g:id>78140d72-e560-4a75-80a2-f3dd2a038dbc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure fluide matifiant hydratant 40 ml?78140d72-e560-4a75-80a2-f3dd2a038dbc ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinopure Fluide Matifiant Hydratant 40 ml est un fluide matifiant hydratant pour les peaux à tendance acnéique à base de polyphénols, de squalane végétal et de poudre de silice. Les polyphénols limitent l'oxydation du sébum responsable de l'apparition des points noirs.</p>
<p>Sans parabènes, sans phenoxyéthanol, sans phtalates, sans huiles minérales, sans PEG, sans silicones et sans ingrédients d'origine animale.</p>
<p>Non comédogène. Non photosensibilisant.</p>
<p>Testé sous contrô ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003458</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c974caed311a52439de3a6111524ba6c3166baf6481375c547fa6ca8163031ab ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Gelée Nettoyante Purifiante 150ml ]]></title>
<g:id>75b45339-4d0c-4b5b-ae85-45ad2745d498</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure gelée nettoyante purifiante 150ml?75b45339-4d0c-4b5b-ae85-45ad2745d498 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Premier geste beauté indispensable contre les imperfections, la Gelée Nettoyante Purifiante enrichie en acide salicylique naturel, Polyphénols de raisins et huiles essentielles bio* nettoie et purifie la peau sans la dessécher. Sa formule allie douceur et efficacité pour resserrer les pores, réduire l'excès de sébum et diminuer visiblement les imperfections.</p>
<p>Sa texture gélifiée laisse une sensation de fraîcheur et de propreté instantanée sur la peau.</p>
<p>Interprétation olfactive lég ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003465</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/21d42199304c7f7d4dbe2e8f5a864e8681f3481dbc263fb631e462e9ea124e59 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Gelée Nettoyante Purifiante Bio 385 ml ]]></title>
<g:id>98fcc618-2a5c-436d-8c47-af53340c29d8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure gelée nettoyante purifiante bio 385 ml?98fcc618-2a5c-436d-8c47-af53340c29d8 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinopure Gelée Nettoyante Purifiante Bio 385 ml est une gelée nettoyante purifiante pour les peaux mixtes à tendance acnéique, à base d'acide salicylique naturel, d'huiles essentielles Bio et d'eau de raisin qui nettoie et resserre les pores.<br />Elle réduit l'excès de sébum sans dessécher. Pour une peau nette, fraîche et lumineuse.</p>
<p>Sans parabènes, sans phenoxyéthanol, sans phtalates, sans huiles minérales, sans PEG, sans silicones et sans ingrédients d'origine animale.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004066</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ce6923a88cac335b29ffe1ecd7e88110a611f10f72c8524e0961be39f2049df9 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Lotion Purifiante 200ml ]]></title>
<g:id>919734e1-2a89-4f98-ba5f-207936efda4c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure lotion purifiante 200ml?919734e1-2a89-4f98-ba5f-207936efda4c ]]></link>
<g:price><![CDATA[ 1550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Étape fondamentale de votre programme peaux mixtes, la Lotion Vinopure enrichie en acide salicylique naturel, polyphénols de raisins et huiles essentielles bios*, purifie la peau et la prépare à recevoir son soin quotidien. La peau est immédiatement clarifiée, les pores sont resserrés et les imperfections diminuées. </p>
<p>Sa texture eau, ultra-fluide apporte un effet rafraîchissant immédiat.</p>
<p>Interprétation olfactive légère, 100% naturelle, issue du cocktail d'huiles essentielles qui  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003427</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2910d6f9f78115c5bdb604510854f6db28e70212b8fe1729ddb80e29fe67f5b2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Lotion Purifiante Anti-imperfection 400ml ]]></title>
<g:id>57b0b0df-b0ff-40f7-94f3-ffc681880011</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure lotion purifiante anti-imperfection 400ml?57b0b0df-b0ff-40f7-94f3-ffc681880011 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>La<span> Lotion Vinopure</span> enrichie en polyphénols de raisins et huiles essentielles bios*, purifie la peau et la prépare à recevoir son soin quotidien. La peau est immédiatement clarifiée, les pores sont resserrés et les imperfections diminuées.</p>
<p><span> </span></p>
<p>Sa texture eau, ultra-fluide apporte un effet rafraîchissant immédiat.</p>
<p><span> </span></p>
<p>Interprétation olfactive légère, 100% naturelle, issue du cocktail d'huiles essentielles qui délivre un souffle de f ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003434</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/de38d4bcb86183e941918abfcfa33114ffdc0cb2bc8ad6f384cc1f0af459e60a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Lotion Purifiante Peau nette 200 ml ]]></title>
<g:id>51d1bcb0-0f9d-4597-ad5f-03fc8ae46458</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure lotion purifiante peau nette 200 ml?51d1bcb0-0f9d-4597-ad5f-03fc8ae46458 ]]></link>
<g:price><![CDATA[ 1550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le geste purifiant naturel qui libère la peau de ses imperfections et la prépare à recevoir son programme beauté.</p>
<p>Étape fondamentale de votre programme peaux mixtes, la Lotion Vinopure enrichie en acide salicylique naturel, polyphénols de raisins et huiles essentielles bios*, purifie la peau et la prépare à recevoir son soin quotidien. La peau est immédiatement clarifiée, les pores sont resserrés et les imperfections diminuées.<br />Sa texture eau, ultra-fluide apporte un effet rafraîc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930002505</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13f2c606f0b49bec50a20aff124425f632da238ac1fc34a1e87c496c0114d261 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinopure Masque Purifiant Anti-imperfections 75ml ]]></title>
<g:id>a86c6883-a958-44cf-a63d-d51213551df2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinopure masque purifiant anti-imperfections 75ml?a86c6883-a958-44cf-a63d-d51213551df2 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Masque Purifiant de Caudalie</span> est le partenaire idéal des peaux mixtes à grasses avec imperfections.</p>
<p><span> </span></p>
<p>Justement dosé en actifs absorbants et régulateurs, ce masque visage clarifie, équilibre l’épiderme et désincruste en profondeur. La peau est douce, pure et matifiée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003472</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74d77ab31eb355994bd1fe36f67f7f2b2be752e52babcb9e85678ffb767dc5ee ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinoscrush  Crème Teintée - Teinte 2 30ml ]]></title>
<g:id>5adf52a4-b9df-4023-b69c-779e074e0a38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinoscrush  crème teintée - teinte 2 30ml?5adf52a4-b9df-4023-b69c-779e074e0a38 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span> Le teint est unifié, lumineux et la peau est hydratée.</li>
<li><span>Actifs :</span> Acide Hyaluronique, Niacinamide, Eau de Raisin Bio.</li>
<li><span>On aime :</span> Son fini ultra-naturel.</li>
</ul><p> </p>
<p>La <span>Crème Teintée Vinocrush</span> corrige et unifie la peau tout en réhaussant sa beauté naturelle.</p>
<p>Ses pigments encapsulés d’origine naturelle se fondent sur la peau à l’ap ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004103</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9738cb5e11cfd69d1b25900193a6a4511b665e3acd49b41a521161f1c4354701 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosculpt Concentré Minceur 75ml ]]></title>
<g:id>51df26ad-3d2d-4366-9a70-4353472da5d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosculpt concentré minceur 75ml?51df26ad-3d2d-4366-9a70-4353472da5d0 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Concentré Minceur Vinosculpt est une huile corps remodelante qui tonifie et lisse le ventre, les cuisses, les hanches et les fesses pour une silhouette affinée et sublimée. Il active le drainage, aide à éliminer l’eau et les toxines, et à réduire l’aspect peau d’orange de la cellulite.</p>
<p> </p>
<p>Le Concentré Minceur Vinosculpt est le soin tonifiant du Programme Fermeté Caudalie.</p>
<p>Cette routine en 4 étapes comprend le Gommage Crushed Cabernet, le Baume Corps Lift &amp; Fermeté,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003670</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/924f7e0d14cf9b2ad8950e34487c16aff57f0a7e59a5b4d4b44f471deb98dac6 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN CORPS MINCEUR ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosculpt Tisane bio drainante 30 sachets ]]></title>
<g:id>193772bd-a6a6-4506-b7d8-ed893c496994</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosculpt tisane bio drainante 30 sachets?193772bd-a6a6-4506-b7d8-ed893c496994 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les Tisanes Bio Drainantes sont un savoureux mélange drainant et relaxant de 5 plantes biologiques: vigne rouge, écorce d’oranger, myrtilles, cassis et cannelle. Créées en exclusivité pour la Tisanerie du Spa Vinothérapie™, elles aident à drainer les toxines et à lutter contre la rétention d'eau pour une silhouette affinée.</span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003687</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5975b396aab582870b313d21920d0e45b281af6f8018ddc60b5671ea3e88446c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Fluido Spf50+ 40ml ]]></title>
<g:id>b04965de-5956-43b6-92c9-bd71fada8735</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun fluido spf50+ 40ml?b04965de-5956-43b6-92c9-bd71fada8735 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Caudalie dévoile le tout premier soin de sa révolution solaire. Le Fluide Très Haute Protection SPF50+ Vinosun Ocean Protect protège efficacement le visage et le cou des UVA/UVB tout en offrant une action anti-oxydante aux peaux les plus sensibles. Grâce à sa texture invisible, ultra-légère et sans parfum, adoptez la protection clean et invisible, pour tous les jours. Sans compromis entre la protection de la peau et la protection de la nature, sa formule est hautement biodégradable et n ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003723</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0daa29686674a464beaa91f9c38882c52732cdd4598ca8224d6402d930a1fd1d ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Crème  SPF30 50ml ]]></title>
<g:id>aad56c51-d906-4198-a4e9-2cd036a644a8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect crème  spf30 50ml?aad56c51-d906-4198-a4e9-2cd036a644a8 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2">
<div>La Crème Haute Protection SPF30 protège efficacement le visage et le décolleté des UVA/UVB tout en offrant une action anti-rides aux peaux les plus sensibles. Sa texture crème invisible pénètre rapidement et laisse un doux parfum d'été sur la peau. Une formule clean, hautement sensorielle et respectueuse de l'océan pour toute la famille !</div>
</div>
<div class="mt-2"><span>Formule :</span>
<ul class="list-disc list-inside"><li>Testé dermatologiquement</li>
<li>Vegan</li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003755</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c92d088468537c8e1a57cc806b2b23734d29424efb706ea1f93a803e080cca13 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Crème Solaire SPF50 50ml ]]></title>
<g:id>db511c90-bdfd-44b3-ac2b-50868da62375</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect crème solaire spf50 50ml?db511c90-bdfd-44b3-ac2b-50868da62375 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2">
<div>La Crème Haute Protection SPF50 protège efficacement le visage et le décolleté des UVA/UVB tout en offrant une action anti-rides aux peaux les plus sensibles. Sa texture crème invisible pénètre rapidement et laisse un doux parfum d'été sur la peau. Une formule clean, hautement sensorielle et respectueuse de l'océan pour toute la famille !</div>
</div>
<div class="mt-2"><span>Formule :</span>
<ul class="list-disc list-inside"><li>Testé dermatologiquement</li>
<li>Vegan</li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003747</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34be857e7d1357b0889cca3c77fffd6ba91cd2825cbc047de8b3ee29aa3f0c95 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Eau Solaire  SPF50+ 150ml ]]></title>
<g:id>291e40b7-62c8-46de-9c24-171105d39243</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect eau solaire  spf50+ 150ml?291e40b7-62c8-46de-9c24-171105d39243 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2">
<div>L'Eau Solaire Très Haute Protection SPF50+ protège efficacement visage, corps et cheveux des UVA/UVB tout en offrant une action anti-oxydante aux peaux les plus sensibles. Sa texture invisible mi-eau mi-huile pénètre rapidement sans effet gras et laisse un doux parfum d'été sur la peau. Une formule clean et respectueuse de l'océan pour toute la famille !</div>
</div>
<div class="mt-2"><span>Formule :</span>
<ul class="list-disc list-inside"><li>Testé dermatologiquement</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004028</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c49b6ee65a84203bf4667e53aec081987c7ed7ba564f5dad365ba258f7141ba1 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Lait Réparateur Après-Soleil 200 mL ]]></title>
<g:id>2ed87f6e-5971-47cf-9e78-c275e8c4d30a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect lait réparateur après-soleil 200 ml?2ed87f6e-5971-47cf-9e78-c275e8c4d30a ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Visage et corps, le Lait Réparateur Après-Soleil Vinosun Protect nourrit, répare et apaise les peaux échauffées après chaque exposition au soleil tout en prolongeant le bronzage de 2 semaines. Enrichi en extrait d'aloe vera, sa texture non collante offre une sensation immédiate de fraîcheur et laisse la peau douce, hydratée et délicatement parfumée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003792</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/403659d0898c4cbd0a26c6f6a566f188e5277c984b35c9c6b4cd5bde5e80b367 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Lait Réparateur Après-Soleil 400 mL ]]></title>
<g:id>3897c2ca-cc8e-4441-9493-85a474ec3b76</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect lait réparateur après-soleil 400 ml?3897c2ca-cc8e-4441-9493-85a474ec3b76 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Visage et corps, le Lait Réparateur Après-Soleil Vinosun Protect nourrit, répare et apaise les peaux échauffées après chaque exposition au soleil tout en prolongeant le bronzage de 2 semaines. Enrichi en extrait d'aloe vera, sa texture non collante offre une sensation immédiate de fraîcheur et laisse la peau douce, hydratée et délicatement parfumée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003809</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e55b6ac535ee934799ef893c68e5d9662ea136a86082f6de3267b608a69a9a4 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Spray  SPF50 150ml ]]></title>
<g:id>2324eca0-7e97-4dab-b13f-aa0286c249d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect spray  spf50 150ml?2324eca0-7e97-4dab-b13f-aa0286c249d2 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2"><span>Qu'est-ce que c'est ?</span>
<div>Le Spray Invisible Haute Protection SPF50 protège efficacement le visage et le corps des UVA/UVB tout en offrant une action anti-oxydante aux peaux les plus sensibles. Sa texture fluide (au fini) invisible penètre rapidement et laisse un doux parfum d'été sur la peau. Une formule clean, hautement sensorielle et respectueuse de l'océan pour toute la famille !</div>
</div>
<div class="mt-2"><span>Formule :</span>
<ul class="list-disc list-i ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003761</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3bae93381ae45447c0ba28f0c790c4af3d6b631c023819b35658379118c9be4e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Spray SPF30 150ml ]]></title>
<g:id>3a920ce2-83cc-4b7c-90fa-7b78f3307ec2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect spray spf30 150ml?3a920ce2-83cc-4b7c-90fa-7b78f3307ec2 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2">
<div>Le Spray Invisible Haute Protection SPF50 protège efficacement le visage et le corps des UVA/UVB tout en offrant une action anti-oxydante aux peaux les plus sensibles. Sa texture fluide (au fini) invisible penètre rapidement et laisse un doux parfum d'été sur la peau. Une formule clean, hautement sensorielle et respectueuse de l'océan pour toute la famille !</div>
</div>
<div class="mt-2"><span>Formule :</span>
<ul class="list-disc list-inside"><li>Testé dermatologiquemen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522931003778</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4de98f64960d2070691a94d6f6a4676021256cc03d98656aabef54c507a74fa6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
</channel>
</rss>`;
});
