import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Produits santé et bien-être - Partie 4 ]]></title>
<description><![CDATA[ Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès. ]]></description>
<link>https://pharmacieagnespraden.com</link>
<item>
<title><![CDATA[ Caudalie Vinosun Protect Stick Invisible  SPF50 15 g ]]></title>
<g:id>36c398eb-249d-495e-b58c-277c92e0c3c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinosun protect stick invisible  spf50 15 g?36c398eb-249d-495e-b58c-277c92e0c3c9 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Caudalie Vinosun Protect Stick Invisible Haute Protection SPF50 15 g est une protection solaire destinée au visage, aux lèvres et aux zones sensibles. Elle convient aussi bien aux adultes qu'aux enfants dès 3 ans.</p>
<p>Avec une haute protection solaire SPF50, ce stick offre une défense invisible et efficace contre les rayons UVA/UVB, contribuant ainsi à prévenir les dommages cutanés induits par l'exposition au soleil.</p>
<p>Sa formule est enrichie d'huile de pépins de raisin, nourrissante  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004301</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cfc3a2239d2bf4a8a67b0312fd99267e04d8327df1bb145d52d4fd53b1947381 ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinotherapist Beurre Corps Vegan Relipidant 250ml ]]></title>
<g:id>b7049f2b-1896-4213-b3e9-31c62ffac3ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinotherapist beurre corps vegan relipidant 250ml?b7049f2b-1896-4213-b3e9-31c62ffac3ba ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Anti-grattage et 100% plaisir, le Beurre Corps Vegan Relipidant Vinotherapist™ nourrit intensément pendant 24 heures et répare les peaux sèches à tendance atopique pour un confort longue durée. Sa texture riche et soyeuse, enrichie en lipides d'origine végétale, apaise les sensations de démangeaisons et de tiraillements pour apporter douceur et souplesse aux peaux les plus sensibles.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003625</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/044a9cd27d9d57b09f609f2ea2872d644a6e69045a54cbe3f080fb6c7dfa5654 ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinotherapist Soin Corps Nourrissant Hyaluronique 200ml ]]></title>
<g:id>5d26fe66-2c51-47af-8376-b5b44ff9ae13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinotherapist soin corps nourrissant hyaluronique 200ml?5d26fe66-2c51-47af-8376-b5b44ff9ae13 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Soin Corps Nourrissant Hyaluronique hydrate et nourrit instantanément pour une peau douce, souple et lumineuse tout au long de la journée, comme après un soin au Spa Vinothérapie™. Sa texture fraîche et légère pénètre</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003632</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b23eacc708a9b669d929fe76b6663d32cea01b16417fc6ee8ad4ea54569dc1c2 ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinotherapist Soin Corps Nourrissant Hyaluronique 400ml ]]></title>
<g:id>17259187-9635-4f07-9985-17b11824118d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinotherapist soin corps nourrissant hyaluronique 400ml?17259187-9635-4f07-9985-17b11824118d ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Soin Corps Nourrissant Hyaluronique hydrate et nourrit instantanément pour une peau douce, souple et lumineuse tout au long de la journée, comme après un soin au Spa Vinothérapie™. Sa texture fraîche et légère pénètre rapidement sans effet gras et laisse la peau délicatement parfumée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003649</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47e6e96bb6f3e4ab497a5669b37bc57a6b9cc6b7ada86243f3e5eaf69afc6fd2 ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinotherapist™ Baume Lèvres Vegan Réparateur 7.5 ml ]]></title>
<g:id>46296e9f-a3dd-48b2-80ad-02f4880f6d9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinotherapist™ baume lèvres vegan réparateur 7.5 ml?46296e9f-a3dd-48b2-80ad-02f4880f6d9c ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Baume Lèvres Vegan Réparateur Vinotherapist™ répare, apaise et protège intensément les lèvres sèches et gercées. Sa texture baume crémeuse sans effet gras, aux notes phyto-aromatiques, nourrit les lèvres pour un effet repulpant et un confort ultime.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930004080</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3a5256d5ef0cbd929d6fdb58b4b28fbfb409bb38ade2fef92fe69e6f1bffcbe ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinotherapist™ Crème Beauté des Pieds 75ml ]]></title>
<g:id>995afeeb-37cd-4c71-a91c-a51ae3234b1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinotherapist™ crème beauté des pieds 75ml?995afeeb-37cd-4c71-a91c-a51ae3234b1c ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mt-2">
<div>La Crème Beauté des Pieds Vinotherapist™ nourrit et répare les pieds secs, même craquelés. Elle réduit les sensations de tiraillement et les rugosités pour une peau plus douce et plus souple.</div>
</div>
<div class="mt-2"><span>Formule :</span>
<ul class="list-disc list-inside"><li>95% d'ingrédients d'origine naturelle</li>
<li>Testé dermatologiquement</li>
<li>Vegan<span>La Crème de Beauté des Pieds Vinotherapist™ est enrichie en extrait de vigne rouge française. Les fe ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003977</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a48be797e1df11ff024533c58a7d8101fee5d8991269042b2b207cdebd296fc ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinothérapist Stick lèvres 2 x 4.5 g ]]></title>
<g:id>645b5965-0059-4e75-89b8-3ab061849f26</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinothérapist stick lèvres 2 x 4.5 g?645b5965-0059-4e75-89b8-3ab061849f26 ]]></link>
<g:price><![CDATA[ 580.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Enrichie en huile de pépins de raisin nourrissante et polyphénols de raisin anti-oxydants, ce soin de beauté des lèvres protège et apaise durablement les lèvres sèches. Sa texture fond instantanément sans effet gras et laisse les lèvres hydratées. Son parfum d'orange douce légèrement vanillé parfume subtilement les lèvres pour une protection tout au long de la journée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930028444</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7ee67fb6f3ce29483f628a380db7b07ee7aa32273beb73d1f154c18a19002235 ]]></g:image_link>
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
<title><![CDATA[ Caudalie Vinothérapist crème réparatrice mains & ongles 75 ml duo ]]></title>
<g:id>04b6215a-304b-4dda-9620-00e58ec43e2c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudalie-vinothérapist crème réparatrice mains & ongles 75 ml duo?04b6215a-304b-4dda-9620-00e58ec43e2c ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it">La Crème Réparatrice Mains et Ongles Vinotherapist™ nourrit et répare les mains sèches sans effet gras, tout en les protégeant de la déshydratation et des agressions extérieures. Les sensations de tiraillements sont apaisées, la peau est plus douce et les ongles et cuticules sont fortifiés.</div>
<div class="formula"><span>Formule :</span>
<ul class="formula"><li>98% d'ingrédients d'origine naturelle</li>
<li>Vegan</li>
</ul></div>
<div class="visible-results"><span>Résul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930028437</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b33681db9a1561dd059e08ad9c36a80238a4d29c2d14b70c8abd818d94abde69 ]]></g:image_link>
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
<title><![CDATA[ Caudalíe Vinopure Sérum Anti-imperfections 30 ml ]]></title>
<g:id>7eabdf3f-1694-4938-8b68-39f1a12b44c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/caudal-e vinopure sérum anti-imperfections 30 ml?7eabdf3f-1694-4938-8b68-39f1a12b44c2 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Concentré en acide salicylique naturel, polyphénols de raisins et huiles essentielles bios*, ce sérum à la texture légère fond au contact de la peau pour réduire visiblement les imperfections, resserrer les pores et affiner le grain de peau.</span><br /><span>Purifiée, la peau est douce et plus lumineuse.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3522930003441</g:gtin>
<g:brand><![CDATA[ CAUDALIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9a2ccb455d2c5222bc29d4afeefbb59d67730d373d67cb3eb3fa33120bf1214c ]]></g:image_link>
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
<title><![CDATA[ Cavailles Anti-transpirant Homme contrôle 48h Spray 150 ml ]]></title>
<g:id>f9069840-8e04-4c13-ace3-50e481f3501b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-anti-transpirant homme contrôle 48h spray 150 ml?f9069840-8e04-4c13-ace3-50e481f3501b ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cet Anti-Transpirant Homme vous dispense un parfum frais et masculin tout au long de la journée. Un allié bien-être fiable et efficace pour un confort régénérant durable.</p><p>– Une PEAU respectée et protégée : Renfermant du surgras végétal pro-régénérant® et des actifs ultra absorbants, notre formule sans alcool prévient des pics de transpiration.</p><p>– Un moment de BIEN-ÊTRE grâce à son parfum frais aux notes mentholées et musquées.</p><p>– Un geste pour la PLANÈTE avec son flacon en alu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006754</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c208231a4d12c570605d40cc0bd4dfd5c2761d5319c5e07b1724dcdf33fd1092 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Crème Lavante Dermato 500ml ]]></title>
<g:id>30ffa52d-380b-4290-8a07-5760da866eaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-crème lavante dermato 500ml?30ffa52d-380b-4290-8a07-5760da866eaa ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Conçue par la marque <span>Rogé Cavaillès</span>, la <span>crème lavante dermato</span> est un produit d'hygiène pour les <span>peaux intolérantes,</span> réactives, et les peaux à tendance atopique. Elle est idéale pour nettoyer la peau sans l'agresser.</p>
<p>La <span>crème lavante dermato Cavaillès</span> a été formulée pour offrir un nettoyage doux de la peau au quotidien. Elle aide à atténuer les sensations d'inconfort (démangeaisons, irritations, tiraillements), soutient le processus de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007478</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6011e0b546b46e6d71e52ef52915e6a6189bb0c944611c0cae927a978567b156 ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Crème de Douche Nourissante 750ml ]]></title>
<g:id>bf9d16f6-bccc-4531-a406-50ef3e7c9eaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-crème de douche nourissante 750ml?bf9d16f6-bccc-4531-a406-50ef3e7c9eaa ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en beurre de karité Bio, notre formule aide à maintenir l’hydratation naturelle des peaux les plus sèches et à protéger le film hydrolipidique ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE : la crème se transforme en une mousse enveloppante et l’extrait naturel de magnolia apaise votre peau  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006969</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e386130e5c5f8154beb1279aa5d771e908a90f7a48c34ec3e14c4d5817f3d343 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Crème de Douche Nourrissante 250ml ]]></title>
<g:id>b4cfe5bd-2d80-4bbb-84af-5dd211fed534</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-crème de douche nourrissante 250ml?b4cfe5bd-2d80-4bbb-84af-5dd211fed534 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en beurre de karité Bio, notre formule aide à maintenir l’hydratation naturelle des peaux les plus sèches et à protéger le film hydrolipidique ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE : la crème se transforme en une mousse enveloppante et l’extrait naturel de magnolia apaise votre peau  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006952</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/508e35388239be6f32b5dd4d53bb9cf3307678365f7dbbaec6d24ccf97d5fdb2 ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Crème de Douche Relaxante 250ml ]]></title>
<g:id>858b8d19-566e-4aa8-8bb4-1986631d3c31</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-crème de douche relaxante 250ml?858b8d19-566e-4aa8-8bb4-1986631d3c31 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’amande Bio, notre formule aide à maintenir l’hydratation naturelle des peaux les plus sèches et à protéger le film hydrolipidique ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE : la crème se transforme en une mousse enveloppante et l’extrait naturel de rose apaise votre peau délica ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006976</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53d350799054c04b588a758a0c5baa06021b49e9404e02450a1d88e997feee8b ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Crème de Douche Relaxante 750ml ]]></title>
<g:id>268944bb-2102-46e6-adac-8ab65cac1678</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-crème de douche relaxante 750ml?268944bb-2102-46e6-adac-8ab65cac1678 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’amande Bio, notre formule aide à maintenir l’hydratation naturelle des peaux les plus sèches et à protéger le film hydrolipidique ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE : la crème se transforme en une mousse enveloppante et l’extrait naturel de rose apaise votre peau délica ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006983</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f28f23f3a52c2648e2f4cb5f53c22545d160bd08c486ba8dcd64f6846b95ced ]]></g:image_link>
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
<title><![CDATA[ Cavailles Crème miraculeuse Multi-usages 100ml ]]></title>
<g:id>107ddbe6-6cda-4042-bda1-024465136a5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-crème miraculeuse multi-usages 100ml?107ddbe6-6cda-4042-bda1-024465136a5e ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Pour les PEAUX SÈCHES : enrichie en surgras végétal pro-régénérant® et en centella asiatica bio, notre formule concentrée aide à préserver le processus naturel de régénération de la peau. Elle peut s’utiliser sur le corps et le visage en soin quotidien et aussi en démaquillant, en masque hydratant, en après-rasage, etc.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa texture soyeuse et son parfum délicat.</span><br /><span>• Un geste pour la PLANÈTE avec son tube qui contient -2 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007379</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/884c418606f890e1632f5e5a1bd3b7515a043a3cbf36137e395a29e210f7193d ]]></g:image_link>
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
<title><![CDATA[ Cavailles Déodorant Absorb+ 48H Sans Parfum Roll-On 50ml ]]></title>
<g:id>e0871037-4cad-4e79-8c64-552f1f7beee0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant absorb+ 48h sans parfum roll-on 50ml?e0871037-4cad-4e79-8c64-552f1f7beee0 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Pour qui :<span> Pour tous les types de peaux</span></li>
<li><span>Résultats : </span>La peau est protégée de la transpiration et des mauvaises odeurs</li>
<li><span>Les actifs :</span> Surgras végétal</li>
<li><span>On aime : </span>Son flacon 100% en plastique recyclable et recyclé</li>
</ul><p> </p>
<p><span>Le Déodorant Anti-Transpirant Sans Parfum 48H Roll-On Absorb+ de Rogé Cavailles </span>respecte et protège la peau.</p>
<p id="B9SWVWL">Enrichie en <span>Surgras végétal</span> p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006709</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e09b92078b39faed23870cb783204fdf9e0da6217094b5a20990a5f0b45f195e ]]></g:image_link>
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
<title><![CDATA[ Cavailles Déodorant Absorb+ 48h Anti-transpirant Roll-on 50ml ]]></title>
<g:id>93a5e490-db99-44df-b979-687e5bd69b9a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant absorb+ 48h anti-transpirant roll-on 50ml?93a5e490-db99-44df-b979-687e5bd69b9a ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour tous les types de peaux</p></li><li><p>Résultats :&nbsp;La peau est protégée de la transpiration et des traces jaunes et blanches</p></li><li><p>Les actifs :&nbsp;Surgras végétal</p></li><li><p>On aime :&nbsp;Son flacon en plastique recyclable et recyclé</p><p></p></li></ul><p>Le Déodorant Anti-Transpirant et Anti-Traces 48H Roll-On Absorb+ de Rogé Cavailles&nbsp;respecte et protège tous les types de peaux même les peaux sensibles.</p><p>Enrichie en&nbsp;Surgras v ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006792</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/367506be911244c94ef9070ca87324366be7f74c299829d694774862b668ad14 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Déodorant Anti-transpirant Homme contrôle 48h Roll-on 50ml ]]></title>
<g:id>6a7cd876-68c9-48fa-a224-39243e671b18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant anti-transpirant homme contrôle 48h roll-on 50ml?6a7cd876-68c9-48fa-a224-39243e671b18 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour tous les types de peaux</p></li><li><p>Résultats :&nbsp;La peau est protégée de la transpiration</p></li><li><p>Les actifs :&nbsp;Surgras végétal</p></li><li><p>On aime :&nbsp;Son flacon en plastique recyclable et recyclé</p></li></ul><p>Le Déodorant Anti-Transpirant 48H Roll-On L'Homme de Rogé Cavailles&nbsp;respecte et protège tous les types de peaux même les peaux sensibles.</p><p>Enrichie en&nbsp;Surgras végétal&nbsp;pro-régénérant et en&nbsp;actifs ultra-abso ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006723</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f6e5f4d10cad401d4fb3c3441582f00c4e68fad28e0e9e96cd0f0a3dc2364fa ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > DEODORANT  > HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Déodorant Dermato 48H Roll-On 50ml ]]></title>
<g:id>919416dc-3f29-4034-8d90-724e824aefc9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant dermato 48h roll-on 50ml?919416dc-3f29-4034-8d90-724e824aefc9 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour les peaux sensibles</p></li><li><p>Résultats :&nbsp;La peau est propre et fraîche</p></li><li><p>Les ingrédients :&nbsp;Surgras végétal et huile de Riz</p></li><li><p>Le + :&nbsp;Son flacon 100% recyclable</p></li></ul><p>Le Déodorant 48H Roll-On Dermato de Rogé Cavailles&nbsp;respecte et protège la peau de la transpiration.</p><p>Enrichie en&nbsp;Surgras végétal&nbsp;pro-régénérant et en&nbsp;huile de Riz&nbsp;apaisante, la formule de ce déodorant est composée à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006693</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a77d5cbf39870ef92dc857c5511e25251ba51acf3872efc85285bcf39474f66d ]]></g:image_link>
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
<title><![CDATA[ Cavailles Déodorant Dermato 48h Stick 40 ml ]]></title>
<g:id>31fedb4a-7787-4ab7-bc41-4812dd038004</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant dermato 48h stick 40 ml?31fedb4a-7787-4ab7-bc41-4812dd038004 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Pour les peaux sensibles</li>
<li><span>Résultats : </span>La peau est fraîche et protégée des mauvaises odeurs</li>
<li><span>Les ingrédients :</span> Surgras végétal et huile de Riz</li>
<li id="JK6MNWR"><span>On aime : </span>Sa galénique solide </li>
</ul><p><br /><span>Le Déodorant Solide 48H Stick Dermatod e Rogé Cavaillès</span> est enrichi en Surgras végétal pro-régénérant® et en huile de Riz apaisante.</p>
<p>Sa formule est composée à <span>96% d'ingrédie ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006785</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bc02e397789a93d19db3fa638a6a1766aaf630de7ab5d770a1ab11fcde15093e ]]></g:image_link>
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
<title><![CDATA[ Cavailles Déodorant Dermato 48h Vapo 80ml ]]></title>
<g:id>26a9fb27-267a-4670-a190-556708ab8e10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant dermato 48h vapo 80ml?26a9fb27-267a-4670-a190-556708ab8e10 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Pour les peaux sensibles</li>
<li><span>Résultats :</span> La peau est fraîche et protégée des mauvaises odeurs</li>
<li><span>Les actifs : </span>Huile de Riz</li>
<li><span>On aime : </span>Son flacon en plastique recyclable</li>
</ul><p><span>Le Déodorant 48H Vapo Dermato de Rogé Cavailles</span> respecte et protège la peau même sensible.</p>
<p id="F8N9AL0">Enrichie en <span>surgras végétal </span>pro-régénérant<span> </span>et en <span>huile de Riz</span> apa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006778</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74f2a414825f3c038cc01f9ce9a51ab5659720b66e678995cb373ceb9fcd2570 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Déodorant Homme fraîcheur 48h Spray 150ml ]]></title>
<g:id>648d0c88-e1ad-4b64-8a08-7bbd497a1dd9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-déodorant homme fraîcheur 48h spray 150ml?648d0c88-e1ad-4b64-8a08-7bbd497a1dd9 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour les hommes et les peaux sensibles</p></li><li><p>Résultats :&nbsp;La peau est propre et fraîche</p></li><li><p>Les actifs :&nbsp;Surgras végétal et huile de Riz</p></li><li><p>On aime :&nbsp;Son flacon en aluminium recyclé</p></li></ul><p>Le Déodorant Fraîcheur 48H Spray L'Homme de Rogé Cavailles&nbsp;respecte et protège la peau.</p><p>Enrichie en&nbsp;Surgras végétal&nbsp;pro-régénérant® et en&nbsp;huile de Riz&nbsp;apaisante, sa formule&nbsp;sans alcool&nbsp;pro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006761</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae2f9297f3bd8b4f72c432142cf2403e3da696f193fce98639fcd76d63964401 ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  > HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Gel Bain Douche Amande Verte 1L ]]></title>
<g:id>13a744b7-2087-457a-90ab-dc5f1b000497</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-gel bain douche amande verte 1l?13a744b7-2087-457a-90ab-dc5f1b000497 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>« La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.</span><br /><span>• Une PEAU nourrie et protégée : enrichie en surgras végétal pro-régénérant®, notre formule sans savon et testée dermatologiquement sur peaux sensibles nettoie la peau en douceur et aide à préserver son processus naturel de régénération.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa mousse onctueuse et son parfum amande vert ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006358</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/daa298411b3c267d43493bf6b82020bd3f6197fcb6598a2b2772c5fa6b4223d7 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Gel Bain Douche Fleur de Coton 1L ]]></title>
<g:id>930b2442-5391-45b6-8337-184b31a2568b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-gel bain douche fleur de coton 1l?930b2442-5391-45b6-8337-184b31a2568b ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <div class="intro desktop">
<p>« La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.<br />• Une PEAU nourrie et protégée : enrichie en surgras végétal pro-régénérant®, notre formule sans savon et testée dermatologiquement sur peaux sensibles nettoie la peau en douceur et aide à préserver son processus naturel de régénération.<br />• Un moment de BIEN-ÊTRE grâce à sa mousse onctueuse et son parfum fleur de coton. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006365</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66377377ff076bc6edb6ff5f7a00eeedcd1d7def3ac634a58269580a5949ba57 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Gel Bain Douche L’Original 1L ]]></title>
<g:id>9eb59166-9817-4b9f-b9bc-b0069348f317</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-gel bain douche l’original 1l?9eb59166-9817-4b9f-b9bc-b0069348f317 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>« La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.</span><br /><span>• Une PEAU nourrie et protégée : enrichie en surgras végétal pro-régénérant®, notre formule sans savon et testée dermatologiquement sur peaux sensibles nettoie la peau en douceur et aide à préserver son processus naturel de régénération.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa mousse onctueuse et son parfum iconique.</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006488</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36e6f24314af2241cdffc53de680812b474c9d6882b14695ca721ad073b2b790 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Gel Douche Amande 200 ml  ]]></title>
<g:id>b2eefdb4-61d5-40f0-b923-cc41529e8ef8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-gel douche amande 200 ml ?b2eefdb4-61d5-40f0-b923-cc41529e8ef8 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enrichi en extrait d’huile d’amande douce 100% naturelle, le Douche surgras extra-doux de Rogé Cavaillès, nettoie délicatement votre peau sensible et la protège des agressions extérieures grâce à ses agents surgras.<br /><br />Utilisé quotidiennement, il apporte à votre peau confort et souplesse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004576</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c3028d9d11a274786295e96be339aa69f6a4fe0eecd8c096c7a2e9efe72ca658 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Gel Douche Lotus 200 ml  ]]></title>
<g:id>023ef389-e122-482d-a4f9-ccca62d62cf7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-gel douche lotus 200 ml ?023ef389-e122-482d-a4f9-ccca62d62cf7 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec sa formule associant agents surgras et extrait de protéines de blé d’origine 100% naturelle, le Douche surgras nourrissant nettoie votre épiderme et le préserve du dessèchement cutané.<br /><br />Jour après jour, il protège votre peau des agressions extérieures et la laisse douce, souple et intensément nourrie.<br />Composition<br />Avec sa formule haute tolérance au pH physiologique, sans savon, sans phénoxyéthanol, sans DMDM Hydantoin et sans paraben, il nettoie votre peau en douceur e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004590</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69d934c6d85ade3e63940633a0c8679ff6165ea3568d8c2c2d699eb1914d7070 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Gel Douche Souvenir d'Enfance 200ml ]]></title>
<g:id>552939a4-c1c6-44a2-b1bb-59831df41fa8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-gel douche souvenir d'enfance 200ml?552939a4-c1c6-44a2-b1bb-59831df41fa8 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour les peaux sensibles</p></li><li><p>Résultats :&nbsp;La peau est nourrie, protégée et parfumée</p></li><li><p>Les actifs :&nbsp;Châtaigne Bio, surgras végétal pro-régénérant</p></li><li><p>Le + :&nbsp;Sa formule composée à 90% d'ingrédients d'origine naturelle</p></li></ul><p>Le Gel Douche Souvenir d'Enfance Rogé Cavaillès&nbsp;est enrichi en surgras végétal pro-régénérant.</p><p>Il nettoie la peau en douceur, la&nbsp;nourrit&nbsp;et la&nbsp;protège&nbsp;tout en&nb ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007485</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/382b0ab1cb076583bb0a03de60b1a8fbc63998452b355d40048c4d69274d0432 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Huile Lavante Dermato 500ml ]]></title>
<g:id>e1ad532f-c17d-4e62-812b-873ece9563d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile lavante dermato 500ml?e1ad532f-c17d-4e62-812b-873ece9563d4 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU apaisée et protégée : composée d’Inuline, de prébiotique d’origine naturelle, et du surgras végétal pro-régénérant®, notre formule testée dermatologiquement sur peaux sensibles à tendance atopique nettoie la peau en douceur. Sans savon et au pH physiologique, elle respecte le microbiome cutané et aide à réduire les sensations de démangeaisons après la douche. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau.</p>
<p>• Un moment de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007454</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47d60ba8ade93b5e39657422ae90853b097e4ee5e4bb2845bfdb861a4e0b4fe5 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Huile Universelle de Surgras 150ml ]]></title>
<g:id>f02e5bf4-697d-484c-bb13-c28a62c561c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile universelle de surgras 150ml?f02e5bf4-697d-484c-bb13-c28a62c561c5 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Huile universelle de surgras est l’alliée soin du quotidien. Elle aide au processus naturel de régénération des peaux de toute la famille. Sa texture soyeuse au fini non gras est formulée avec 98% d’ingrédients d’origine naturelle et renferme un concentré de surgras unique :<br>-l’huile d’amande douce nourrit intensément la peau<br>-l’huile de soja, puissant émollient naturel, favorise son hydratation<br>-l’huile de graines de tournesol aide à la réparation des peaux abimées<br>-l’huile de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006464</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dd60f107d1e858207a817e9dc0b5df6315b0aea421d9a5a994cb3cfa771a0e8f ]]></g:image_link>
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
<title><![CDATA[ Cavailles Huile de Douche Satinante 250ml ]]></title>
<g:id>35d5e52c-cddc-4dc2-8a11-17308dd877d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile de douche satinante 250ml?35d5e52c-cddc-4dc2-8a11-17308dd877d0 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’argan Bio, notre formule aide à protéger le film hydrolipidique ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE : l’huile se transforme en une mousse soyeuse et l’extrait naturel de rose apaise votre peau délicatement parfumée.<br />• Un geste pour la PLANÈTE avec sa bouteille 100%  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006938</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b17ed3d360d1feb6e1229491cedc430b19373261680c6a9f859f3c71f6f896d ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Huile de Douche Satinante 750ml ]]></title>
<g:id>10b0d90d-093a-44c8-8d77-a35b33b3a238</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile de douche satinante 750ml?10b0d90d-093a-44c8-8d77-a35b33b3a238 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’argan Bio, notre formule aide à protéger le film hydrolipidique ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE : l’huile se transforme en une mousse soyeuse et l’extrait naturel de rose apaise votre peau délicatement parfumée.<br />• Un geste pour la PLANÈTE avec sa bouteille 100%  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006945</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2191292e0ed9a3e1d7bc268af865a217227f1c4fbc46eacc1c3017b8d1c21447 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Huile de Douche Veloutante 250 ml ]]></title>
<g:id>2b3522a6-82cb-4afd-b96a-ba3693bd96b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile de douche veloutante 250 ml?2b3522a6-82cb-4afd-b96a-ba3693bd96b5 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’amande Bio, notre formule aide à protéger le film hydrolipidique et l’extrait naturel d’argan apporte souplesse et douceur ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE: l’huile se transforme en une mousse soyeuse et son parfum aux notes orientales parfume délicatement votre peau. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006990</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ee97cbf6e4fa487aee89b4a47fbb0f5b66ed6565d895e60c06850d9f40ae2e8f ]]></g:image_link>
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
<title><![CDATA[ Cavailles Huile de Douche Veloutante 750ml ]]></title>
<g:id>43530cce-0404-455a-a600-bb8fefa4c52b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile de douche veloutante 750ml?43530cce-0404-455a-a600-bb8fefa4c52b ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’amande Bio, notre formule aide à protéger le film hydrolipidique et l’extrait naturel d’argan apporte souplesse et douceur ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE: l’huile se transforme en une mousse soyeuse et son parfum aux notes orientales parfume délicatement votre peau. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007003</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25d1642fd440e620af6a71b42885319f58f3a78d928acbb0ff03c48a1942fd64 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Huile de Douche Veloutante Eco Recharge 500ml ]]></title>
<g:id>fe7732b0-1074-4e9d-92e8-d60e8dcd9046</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-huile de douche veloutante eco recharge 500ml?fe7732b0-1074-4e9d-92e8-d60e8dcd9046 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU nourrie et protégée : enrichie en huile d’amande Bio, notre formule aide à protéger le film hydrolipidique et l’extrait naturel d’argan apporte souplesse et douceur ; associée au surgras végétal pro-régénérant®, elle aide à préserver le processus naturel de régénération de la peau. Sans savon et testée dermatologiquement sur peaux sensibles.<br />• Un moment de BIEN-ÊTRE: l’huile se transforme en une mousse soyeuse et son parfum aux notes orientales parfume délicatement votre peau. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007294</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/51982cb17237b7c3e984888bd941b5f21dc08e57a647937c3a70a5f2f9a8b0ee ]]></g:image_link>
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
<title><![CDATA[ Cavailles Lait Bain Douche Lait de Figue 1L ]]></title>
<g:id>39e087a2-ff49-4cfc-9b4f-41bd91cbcbd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-lait bain douche lait de figue 1l?39e087a2-ff49-4cfc-9b4f-41bd91cbcbd7 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>« La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.</span><br /><span>• Une PEAU hydratée et protégée : notre formule renferme du surgras végétal pro-régénérant® et des protéines de lait, agents hydratants puissants qui prennent soin des peaux les plus sèches. Sans savon et testée dermatologiquement sur peaux sensibles, elle nettoie en douceur et aide à préserver le processus naturel de régénération d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006396</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7327298f1a3cafa5ad2e8409c48970b87d87606986a9719bb08125f862f2d4cd ]]></g:image_link>
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
<title><![CDATA[ Cavailles Lait Onctueux Douceur 500 ml ]]></title>
<g:id>b110389e-2566-4fbf-8046-48275006c710</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-lait onctueux douceur 500 ml?b110389e-2566-4fbf-8046-48275006c710 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Pour TOUTES LES PEAUX : enrichie en surgras végétal pro-régénérant® et en huile d’amande douce bio, notre formule aide à maintenir l’équilibre et à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa texture légère et son parfum doux.</span><br /><span>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</span><br /><span>• Adapté à toute la FAMILLE : pour les petits et grands dès 1 an.</span> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007423</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f757659501fc8a08ab0ffdf68f8955210f56d2bcfdc039d8cadef61ff918dc8 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Le Coprs Crème Perlée Soin Ultra-Hydratant 400ml ]]></title>
<g:id>c571c0f2-669d-4048-9581-0560721afcf0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-le coprs crème perlée soin ultra-hydratant 400ml?c571c0f2-669d-4048-9581-0560721afcf0 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour les peaux sèches</p></li><li><p>Résultats :&nbsp;La peau est hydratée en profondeur</p></li><li><p>Les ingrédients :&nbsp;Aloe Vera Bio et Surgras végétal pro-régénérant</p></li><li><p>On aime :&nbsp;Sa formule composée à 97% d'ingrédients d'origine naturelle</p></li></ul><p>La Crème Perlée Ultra-Hydratante Bio Rogé Cavaillès&nbsp;est un soin spécialement conçu pour les peaux sèches.</p><p>Sa formule est enrichie en Aloe Vera Bio et en billes de&nbsp;Surgras végét ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007409</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/52dfadee8520aeb301ad299a5a7b1f4de296fdbb02dcaa0e7e788ae3b736fb08 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Le Corps Baume Gommant 200ml ]]></title>
<g:id>c8135318-7609-47e8-90c0-9be6b9cd553f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-le corps baume gommant 200ml?c8135318-7609-47e8-90c0-9be6b9cd553f ]]></link>
<g:price><![CDATA[ 1150.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Soin Exfoliant Baume Gommant de Cavaillès </span>est adapté aux peaux sensibles.</p>
<p>Sa formule est enrichie en <span>surgras</span> <span>végétal pro-régénérant</span> et en <span>huile de Noisette Bio</span>.</p>
<p>Les grains de sucres <span>exfolient</span> la peau en douceur sans l'abîmer.</p>
<p>Sa texture baume-en-huile offre un véritable <span>moment de bien-être</span> sous la douche.</p>
<p>Son pot est fabriqué à 100% à partir de <span>plastique recyclé</span>.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007546</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2280adbf1ebfffc56a9c2eed03504e6dfb7413c19e9a0ec72b2aab3b116fecc ]]></g:image_link>
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
<title><![CDATA[ Cavailles Les Lèvres Baume Gourmand 5.5 ml ]]></title>
<g:id>0b429e58-ecfa-48c6-9d7a-bd8ade3024a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-les lèvres baume gourmand 5.5 ml?0b429e58-ecfa-48c6-9d7a-bd8ade3024a5 ]]></link>
<g:price><![CDATA[ 280.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce Baume Lèvre Protecteur est adapté aux lèvres sèches.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007430</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/26a2f80a9703fe3f0f28439eeb988a1373493349023c83cdf6e62fcc46521537 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Les Mains Crème Riche Soin Réparateur 50 ml ]]></title>
<g:id>6f917394-2fe0-4bcc-8cc5-feaa2892f98b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-les mains crème riche soin réparateur 50 ml?6f917394-2fe0-4bcc-8cc5-feaa2892f98b ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="intro desktop">
<p>Pour les MAINS TRÈS SÈCHES : enrichie en surgras végétal pro-régénérant® et en beurre de karité bio, notre formule nourrit en profondeur et aide à préserver le processus naturel de régénération de la peau.<br />• Un moment de BIEN-ÊTRE grâce à sa texture fondante et son parfum réconfortant.<br />• Un geste pour la PLANÈTE avec son tube qui contient -37% de plastique par rapport à l’ancien tube 50ml.<br />97% d’ingrédients d’origine naturelle – Vegan* – Testée derma ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007362</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f8c59df40f380481348ed94e5b8b4a9e9ef345855470459b88ec2ddf3df53e9b ]]></g:image_link>
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
<title><![CDATA[ Cavailles Les lèvres Baume Gourmand 2 x 5.5 ml ]]></title>
<g:id>c483a5c9-2855-452e-a403-31df4ee8f1cb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-les lèvres baume gourmand 2 x 5.5 ml?c483a5c9-2855-452e-a403-31df4ee8f1cb ]]></link>
<g:price><![CDATA[ 460.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Pour les LÈVRES SÈCHES : enrichie en surgras végétal pro-régénérant® et en beurre de karité bio, notre formule aide à réparer les lèvres et à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa texture fondante et son parfum délicat.</span><br /><span>• Un geste pour la PLANÈTE avec son stick 100% en plastique recyclable.</span><br /><span>97% d’ingrédients d’origine naturelle – Vegan* – Testé dermatologiquement *formulé san ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007447</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9b337e23408cdf1bdde5eb1753447f075b62159d672b063efdbff664b4760c7 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Lingettes Déodorantes Dermato 48h 15 Lingettes ]]></title>
<g:id>c0f9e335-a824-43c3-8882-8525c9a650c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-lingettes déodorantes dermato 48h 15 lingettes?c0f9e335-a824-43c3-8882-8525c9a650c6 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Pour tous les types de peaux</li>
<li><span>Résultats : </span>La peau est protégée des mauvaises odeurs</li>
<li><span>Les ingrédients : </span>Surgras végétal pro-régénérant</li>
<li><span>On aime : </span>Sa formule composée à 95% d'ingrédients d'origine naturelle</li>
</ul><p> </p>
<p><span>Les Lingettes Déodorantes Rogé Cavaillès</span> ont une formule 2-en-1 qui nettoie en douceur et qui lutte contre les mauvaises odeurs.</p>
<p>Sa formule enrichie en <span> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007560</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e28dc854b8b1ea28434c5de90797c1750e1e3b6676fc8fd962a1112f7c9d94e ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Mon Premier Déo 48H Vapo 75ml ]]></title>
<g:id>f1d9e753-a8e2-47f6-b5bc-97aace42d00b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mon premier déo 48h vapo 75ml?f1d9e753-a8e2-47f6-b5bc-97aace42d00b ]]></link>
<g:price><![CDATA[ 670.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Mon 1er Déo Frais et Doux Rogé Cavaillès</span> est un déodorant en spray spécialement formulé pour les enfants de plus de 8 ans.</p>
<p>Sa formule est enrichie en<span> surgras végétale pro-régénérant</span> et en <span>extraits naturels de Thé Vert</span>.</p>
<p>Ce déodorant <span>protège</span> et <span>respecte</span> la peau sensible des enfants grâce à sa formule <span>sans alcool.</span></p>
<p>Il offre également un <span>moment</span> <span>de bien-être</span> grâce à son parfu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007508</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc27bf476adfd4e2ada9598bab9f0e6d33752dd4f2ede3588727b65f97ec103b ]]></g:image_link>
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
<title><![CDATA[ Cavailles Mousse Intime Antibactérien 100 ml ]]></title>
<g:id>0482f517-be68-4259-b0d1-acb23ff6824a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mousse intime antibactérien 100 ml?0482f517-be68-4259-b0d1-acb23ff6824a ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Mousse Intime Sans Rinçage avec Antibactérien Cavaillès</span> s'emporte partout et s'utilise à n'importe quel moment de la journée.</p>
<p>Sa <span>formule sans rinçage et au pH physiologique</span> renferme un extrait de <span>Thym</span> antibactérien et du <span>surgras végétal pro-régénérant</span> pour nettoyer en douceur tout en prenant soin de la zone intime.</p>
<p>Elle<span> limite les désagréments intimes</span> tout au long de la journée.</p>
<p><span>Sans savon et testé  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007584</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39b851cdc2b3d6fa842f88c055e3b84017261c792aca055a737e5423f19ed5e1 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Mousse Intime Sans Rinçage Fraîcheur 100ml ]]></title>
<g:id>eda55195-a3b8-4cb7-a7c4-f2af0d3ce87f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mousse intime sans rinçage fraîcheur 100ml?eda55195-a3b8-4cb7-a7c4-f2af0d3ce87f ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Mousse Intime Fraîcheur Cavaillès</span> s'emporte partout et peut s'utiliser à n'importe quel moment de la journée grâce à sont petit format et à sa formule sans rinçage.</p>
<p>Elle est enrichie en <span>extrait de Menthe rafraîchissante</span> et en <span>surgras végétal pro-régénérant.</span></p>
<p>Sa formule sans savon et au pH physiologique<span> nettoie en douceur et aide à limiter l'apparition d'odeurs gênantes</span> au cours de la journée.</p>
<p><span>Testée gynécologique ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007577</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4277ff90002ad0538541b85bb8c6838f32df10eb987efd3f37ae98c1240c7a96 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Mousse Intime sans rinçage Hydratant 100ml ]]></title>
<g:id>2f0d1a10-6d40-44ab-a4b0-c071fc8c5894</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mousse intime sans rinçage hydratant 100ml?2f0d1a10-6d40-44ab-a4b0-c071fc8c5894 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Mousse Intime Hydratant Cavaillès</span> s'emporte partout et peut s'utiliser à n'importe quel moment de la journée grâce à sont petit format et à sa formule sans rinçage.</p>
<p>Elle est enrichie en <span>extrait de feuille d'Olivier hydratant </span>et en <span>surgras végétal pro-régénérant.</span></p>
<p>Sa formule sans savon et au pH physiologique<span> nettoie en douceur et aide à réduire les sensations d'inconfort </span>au cours de la journée.</p>
<p><span>Testée gynécologiqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007591</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a839bfa82fe02b48f7e642a985d157be5e8e9cf60f9c0e7a48f37bcc9f801af ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Mousse de Douche Fleur de Lavande l'Original 200ml ]]></title>
<g:id>c17eb474-eec8-41a4-9bd5-7ca1efcc6d98</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mousse de douche fleur de lavande l'original 200ml?c17eb474-eec8-41a4-9bd5-7ca1efcc6d98 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span id="M4E5X2G">La Mousse de Douche à la Fleur de Lavande de Cavailles </span>est un soin lavant conçu pour <span>les peaux sensibles. </span></p>
<p>Elle est enrichie en <span>surgras végétal pro-régénérant et en extrait naturel de Lavande bio</span>.</p>
<p>Grâce à sa formule <span>sans savon et Vegan</span>, cette mousse préserve à la fois <span>le film hydrolipidique</span> et <span>son processus naturel de régénération</span>.</p>
<p>Sa mousse onctueuse <span>nettoie et protège la pea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007515</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34c87eed38ec42bbff697f2c10c4d8909aa1f62023d54164ff8febae2feee120 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Mousse de Douche Nectar de Vanille 200ml ]]></title>
<g:id>8fcee393-eb76-45fc-9e3d-67fea03bc8a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mousse de douche nectar de vanille 200ml?8fcee393-eb76-45fc-9e3d-67fea03bc8a4 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span id="M4E5X2G">La Mousse de Douche au Nectar de Vanille de Cavailles </span>est un soin lavant spécifiquement <span>adapté aux peaux sensibles</span>. </p>
<p><span>Vegan et sans savon</span>, sa formule <span>entretien le film hydrolipidique </span>et<span> permet une régénération naturelle de celui-ci.</span></p>
<p>Cette mousse est onctueuse et surtout envoutante grâce <span>son délicieux parfum vanillé</span>.  </p>
<p>Elle garanti un véritable <span>moment de confort et de bien-être. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007522</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2fbd1ad61d686f638174ec7f1de6cae07c953b2a8e24aaac0826acfd2af96f03 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Mousse de Douche l'Original à la Pulpe de Poire 200ml ]]></title>
<g:id>18fa6b81-0b16-4325-ba7f-2be156d3d0b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-mousse de douche l'original à la pulpe de poire 200ml?18fa6b81-0b16-4325-ba7f-2be156d3d0b4 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span id="M4E5X2G">La Mousse de Douche à la Pulpe de Poire de Cavailles </span>est un soin lavant adapté aux peaux sensibles.</p>
<p>Enrichie en <span>surgras végétal pro-régénérant</span>, cette mousse <span>prend soin du</span> <span>film hydrolipidique</span> ainsi que de<span> son processus de régénération naturelle.</span></p>
<p>Sa formule est non seulement <span>Vegan</span> mais elle est aussi <span>sans</span> <span>savon</span>.</p>
<p>La peau bénéficie d'un <span>nettoyage en profo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007539</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/772188ecb830c726af1c4d3330118b5be576d130b185d1e5db349df5f8961c80 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Nettoyant Solide Dermato 100 g ]]></title>
<g:id>d9e64dc0-2c8a-4da5-97dd-b8f12449a8bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-nettoyant solide dermato 100 g?d9e64dc0-2c8a-4da5-97dd-b8f12449a8bd ]]></link>
<g:price><![CDATA[ 430.00 EUR ]]></g:price>
<description><![CDATA[ <p>Respect et protection optimale assurés avec ce Pain Surgras Dermo-U.H.T. spécialement formulé pour les peaux sensibles à sèches.<br>&nbsp;</p><ul><li><p>Associé au Beurre de Karité, célèbre pour ses propriétés nourrissantes, ce Pain Surgras protège votre peau du dessèchement cutané</p></li><li><p>Une base lavante végétale qui vous promet un instant de douceur inédit</p><p>Laissez votre peau s’hydrater pour une action immédiate et de longue durée (1)</p></li><li><p>Jour après jour, votre peau  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007492</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e30813d13d5743f3a3bed4a5006034e9717e714d918d276d5280129a6b275cab ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Crème Nourrissante 100g ]]></title>
<g:id>170e3343-2f5a-48ed-b324-045b7f3776c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon crème nourrissante 100g?170e3343-2f5a-48ed-b324-045b7f3776c2 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Une PEAU nourrie et protégée : enrichie en beurre de karité bio, en extrait naturel de magnolia et en surgras végétal pro-régénérant®, notre formule aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE : le savon crème se transforme en une mousse enveloppante et parfume délicatement votre peau.</span><br /><span>• Un geste pour la PLANÈTE grâce à sa forme solide et son étui carton 100% recyclable.</span><br /><span>• Adapté à TOU ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007355</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/15a766a34e54bccd08fb6a1eef40ad4e0ab73b9cc208dee1d74fb68b26a40aa8 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Crème Relaxante 100g ]]></title>
<g:id>2d8f2d90-9e04-4321-9785-4d0084db68e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon crème relaxante 100g?2d8f2d90-9e04-4321-9785-4d0084db68e4 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Une PEAU nourrie et protégée : enrichie en huile d’amande bio, en extrait naturel de rose et en surgras végétal pro-régénérant®, notre formule aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE : le savon crème se transforme en une mousse enveloppante et parfume délicatement votre peau.</span><br /><span>• Un geste pour la PLANÈTE grâce à sa forme solide et son étui carton 100% recyclable.</span><br /><span>• Adapté à TOUS : te ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007331</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/775746e9d33b28df175a97c6ef96e8b269c05fcb89fec3d2494a4e4b5f27ec6b ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Huile Satinante 100g ]]></title>
<g:id>b59ec78a-f821-4c17-9224-c9c1ba4cda2c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon huile satinante 100g?b59ec78a-f821-4c17-9224-c9c1ba4cda2c ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Une PEAU nourrie et protégée : enrichie en huile d’argan bio, en extrait naturel de rose et en surgras végétal pro-régénérant®, notre formule aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE : le savon huile se transforme en une mousse soyeuse et parfume délicatement votre peau.</span><br /><span>• Un geste pour la PLANÈTE grâce à sa forme solide et son étui carton 100% recyclable.</span><br /><span>• Adapté à TOUS : testé de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007317</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5a4fe2568b0f3721cb540a91c0255dbe5e93840990c0203944bfd5e7a21e6fea ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Huile Veloutante 100g ]]></title>
<g:id>ea4e15c8-5f2c-4284-adf5-111b52c5dc8f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon huile veloutante 100g?ea4e15c8-5f2c-4284-adf5-111b52c5dc8f ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Une PEAU nourrie et protégée : enrichie en huile d’amande bio, en extrait naturel d’argan et en surgras végétal pro-régénérant®, notre formule aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE : le savon huile se transforme en une mousse soyeuse et parfume délicatement votre peau.</span><br /><span>• Un geste pour la PLANÈTE grâce à sa forme solide et son étui carton 100% recyclable.</span><br /><span>• Adapté à TOUS : testé d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007324</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34d1a2c11c9009dfd832e6aea4323ee6ea7fd4f625534b38604d733469ce54ce ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Surgras Délice de Figue 3 x 200g ]]></title>
<g:id>493d9252-848b-42d9-8cfc-5410a55c9743</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon surgras délice de figue 3 x 200g?493d9252-848b-42d9-8cfc-5410a55c9743 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU respectée et protégée : avec des agents nourrissants dont notre surgras végétal pro-régénérant®, notre formule nettoie en douceur. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau.<br />• Un moment de BIEN-ÊTRE : une mousse légère et enveloppante au parfum réconfortant et sucré du miel.<br />• Un geste pour la PLANÈTE : un format solide qui contient moins d’eau qu’un lavant liquide.<br />• Pour les PEAUX SENSIBLES : testé dermato ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3346020049894</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e75793a23f4c1945a6aa6e84f918f952896631936b5bd8a0ab0a3ec2d59cf2a ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Surgras Jardin l’Original 2 x 200g ]]></title>
<g:id>0d053cef-7aa2-454a-89c2-2fce531000d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon surgras jardin l’original 2 x 200g?0d053cef-7aa2-454a-89c2-2fce531000d3 ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une <strong>PEAU</strong> respectée et protégée : avec des agents nourrissants dont notre surgras végétal pro-régénérant®, notre formule nettoie en douceur. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau.</p><p>• Un moment de <strong>BIEN-ÊTRE</strong> : une mousse légère et enveloppante au parfum iconique de la lavande provençale.<br>• Un geste pour la <strong>PLANÈTE</strong> : un format solide qui contient moins d’eau qu’un lavant liqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3346020049757</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8c9dc04818489a61b871f9664ceea2790058a4b01e55b2bfca3f49c4d1e5471 ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Savon Surgras Lait & Miel 3+1 x 250g ]]></title>
<g:id>6bd98d8a-1ac5-4051-b30c-980e08364609</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon surgras lait & miel 3+1 x 250g?6bd98d8a-1ac5-4051-b30c-980e08364609 ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Rogé Cavaillès Savon Surgras Extra-Doux Lait et Miel Lot de 3 x 250 g + 1 Gratuit est idéal pour la toilette des peaux délicates et sensibles de toute la famille. Enrichi en huile d'Amande douce, il nettoie en douceur et adoucit l'épiderme. Ses agents surgras laissent sur la peau un film protecteur. Parfumé au Lait et Miel.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490002480</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9af8c929d0e0bb1b0e3155d0e93bcc9f8ce6191ceb72fda7e76b039cea0e4226 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon Surgras Oranger Jasmin 100g ]]></title>
<g:id>7a98b272-0d1e-4e4a-ba39-9cf54f547c00</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon surgras oranger jasmin 100g?7a98b272-0d1e-4e4a-ba39-9cf54f547c00 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Savon Surgras Oranger Jasmin Cavaillès</span> nettoie les peaux sensibles en douceur.</p>
<p>Sa formule enrichie en Surgras végétal pro-régénérant <span>aide à préserver le film hydrolipidique</span> de la peau ainsi que son <span>processus naturel de régénération</span>.</p>
<p>Au contact de l'eau, ce savon offre une <span>mousse légère et onctueuse</span> au parfum floral.</p>
<p>Testé dermatologiquement.</p>
<div id="kurato_extension_modal"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007621</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a7875fd35747230173caeb36112484a094940f1c208f15df2c622f9315098af ]]></g:image_link>
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
<title><![CDATA[ Cavailles Savon surgras Extra doux Lait de Rose 2 x 250g ]]></title>
<g:id>82496552-af4c-4a12-96d5-b029a7690a50</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-savon surgras extra doux lait de rose 2 x 250g?82496552-af4c-4a12-96d5-b029a7690a50 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Idéal pour la toilette des peaux délicates et sensibles de toute la famille.</p>
<p>Enrichi en huile d'amandes douce, il nettoie en douceur et adoucit l'épiderme.</p>
<p>Ses agents surgras laissent sur la peau un film protecteur et son parfum Lait de rose entoure la toilette d'une senteur naturelle et raffinée.</p>
<p>Dès la toilette, la peau est souple, douce et délicatement parfumée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490001834</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/91358d5f3fea7bd799ea6fe237911543a52cfce87b25bfde2c87757446a9bc64 ]]></g:image_link>
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
<title><![CDATA[ Cavailles Soin Lavant Intime Anti-bactérien 2 x 500 ml ]]></title>
<g:id>dbad5fe3-f4b7-4b38-99e6-34355061a92d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-soin lavant intime anti-bactérien 2 x 500 ml?dbad5fe3-f4b7-4b38-99e6-34355061a92d ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span> Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prevenir les désagréments intimes (irritations, démangeaisons…).</span><br /><span>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de thym antibactérien pour un confort optimal.</span><br /><span>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</span><br /><sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007249</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79cb01e8f63584f58104374d58fc5ee8f303544cdab288678fe39226d406b69b ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Soin Lavant Intime Extra-Doux Eco-Recharge 500ml ]]></title>
<g:id>dc05f510-13f4-4c0d-90ca-9fe1b2df4f9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-soin lavant intime extra-doux eco-recharge 500ml?dc05f510-13f4-4c0d-90ca-9fe1b2df4f9f ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour enfants dès 3 ans et pour adultes</p></li><li><p>Résultats :&nbsp;Les muqueuses sont protégées et respectées</p></li><li><p>Les actifs :&nbsp;Extraits de Calendula, surgras pro-régénérant</p></li><li><p>On aime :&nbsp;Sa formule composée à 97% d'ingrédients d'origine naturelle</p><p></p></li></ul><p>Le Soin lavant Intime Extra-Doux Rogé Cavaillès&nbsp;protège et respecte l'équilibre des muqueuses.</p><p>Enrichie en prébiotiques, sa formule sans savon&nbsp;nettoie  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007171</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c03010f487cd1eab900d21f8937792083b09bf00f892209363a105bd43b92bfa ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavailles Soin lavant Intime Extra-Doux 2 x 500ml ]]></title>
<g:id>36a70f9b-a9d4-474b-8473-2ad68e86cbb0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavailles-soin lavant intime extra-doux 2 x 500ml?36a70f9b-a9d4-474b-8473-2ad68e86cbb0 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Soin lavant Intime Extra-Doux Rogé Cavaillès </span>protège et respecte l'équilibre de la zone intime.</p>
<p id="SKBDYKP">Enrichie en prébiotiques, sa formule sans savon <span>nettoie en douceur.</span></p>
<p>Il offre un moment de bien-être grâce au <span>surgras végétal pro-régénérant</span> et aux extraits de <span>Calendula apaisant</span> pour un confort optimal.</p>
<p>Il est adapté à toutes les muqueuses dès <span>3 ans grâce à son pH physiologique</span>.</p>
<p>Un geste pou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007201</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d4981fcf262c9374aecfade181bcb56927182b6e511800ab537b42850df0ed6 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Déodorant Absorb+ 48 H Anti-Transpirant Spray 150ml ]]></title>
<g:id>258f89ba-3b1b-46fc-a573-f5ad0d62092b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s déodorant absorb+ 48 h anti-transpirant spray 150ml?258f89ba-3b1b-46fc-a573-f5ad0d62092b ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>ANTI-TRANSPIRANT SPRAY 48H</span><br /><span>- Une PEAU respectée et protégée : enrichie en surgras végétal pro-régénérant® et en actifs absorbants, notre formule sans alcool prévient des pics de transpiration et limite les traces jaunes et blanches. </span><br /><span>- Un moment de BIEN-ÊTRE grâce à son parfum frais aux notes de thé vert et de bergamote.</span><br /><span>- Un geste pour la PLANÈTE avec son flacon en aluminium recyclable.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006808</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da7da0967e9b96c07e7a3d123852b7f7d749fd20b30ca5b9712da48bbfaee068 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Déodorant Anti-transpirant Intense LP 48h Roll-on 40 ml ]]></title>
<g:id>a30c376d-14e7-48a3-9a72-cf18a39f959c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s déodorant anti-transpirant intense lp 48h roll-on 40 ml?a30c376d-14e7-48a3-9a72-cf18a39f959c ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Anti-Transpirant <b>Rogé Cavaillès Anti Transpirant Intense LP 48h Roll-on</b> est un allié bien-être indispensable pour ceux qui cherchent à <a href="https://www.soin-et-nature.com/fr/432-deodorant-sport-pharmacie">contrôler la transpiration</a> excessive tout au long de la journée. Avec sa formule efficace et fiable, vous pouvez vous sentir en confiance tout au long de la journée.</p>
<p>La technologie unique de ce déodorant roll-on permet une <b>libération continue de ses actifs</b> pour ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006716</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef3b51923fe868f2263632de8e2b770108479c9c026cedb5d64a5eebfedead67 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Déodorant Dermato 48h Spray 150 ml ]]></title>
<g:id>417c9d4e-ddb2-42c7-b0d6-5409b9949869</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s déodorant dermato 48h spray 150 ml?417c9d4e-ddb2-42c7-b0d6-5409b9949869 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce déodorant spray allie efficacité et douceur, sans compromis.</p><p>– Une PEAU respectée et protégée : Renfermant du surgras végétal pro-régénérant® et de l’huile de riz apaisante, notre formule sans alcool protège efficacement contre les mauvaises odeurs.</p><p>– Un moment de BIEN-ÊTRE grâce à son parfum doux aux notes de thé vert et de fleurs blanches.</p><p>– Un geste pour la PLANÈTE avec son flacon en aluminium recyclable.</p><p>Note YUKA : 80/100</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006747</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/01901c445fbbf7444694f73157ce678cc96d370e95f14cc3b5248f9aa6e4ee19 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Déodorant Homme fraîcheur 48h Roll-on 50ml ]]></title>
<g:id>4fd5c00d-fe85-412d-b04f-54ae45a54ec1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s déodorant homme fraîcheur 48h roll-on 50ml?4fd5c00d-fe85-412d-b04f-54ae45a54ec1 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Pour qui :&nbsp;Pour les hommes et les peaux sensibles</p></li><li><p>Résultats :&nbsp;La peau est propre et fraîche</p></li><li><p>Les actifs :&nbsp;Surgras végétal et huile de Riz</p></li><li><p>On aime :&nbsp;Son flacon 100% en plastique recyclé et recyclable</p></li><li><p>Le Déodorant Fraîcheur 48H Roll-On L'Homme de Rogé Cavailles&nbsp;respecte et protège la peau de la transpiration.</p></li></ul><p>Enrichie en&nbsp;Surgras végétal pro-régénérant et en huile de Rriz apaisante, s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006730</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/76bdfb83792b059ff931f1b9cc090aab3288f015d1ca013122c395607c842c4f ]]></g:image_link>
<g:product_type><![CDATA[ DEODORANT  > HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Eco-Recharge Gel Bain Douche Fleur de Coton 1L ]]></title>
<g:id>1ecadb88-a4da-4a90-b920-abe4dee761b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s eco-recharge gel bain douche fleur de coton 1l?1ecadb88-a4da-4a90-b920-abe4dee761b1 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une PEAU respectée et protégée : renfermant du surgras végétal pro-régénérant®, notre formule sans savon et testée dermatologiquement sur peaux sensibles nettoie la peau en douceur. Elle aide à préserver le film hydrolipidique et ainsi son processus naturel de régénération.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007737</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9fabd37dc2a6f48792d11f70e6e81d7a2b352113ce154ec5cbda8159e073eb36 ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Gel Bain Douche Aloe Vera Bio 1L ]]></title>
<g:id>490405fc-5c83-4736-a112-aac0a597facd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche aloe vera bio 1l?490405fc-5c83-4736-a112-aac0a597facd ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.</p>
<p>Une PEAU nourrie et protégée : enrichie en surgras végétal pro-régénérant® et en aloé vera bio, sa formule labellisée Cosmébio nettoie la peau en douceur et aide à préserver son processus naturel de régénération. Sans savon et testée dermatologiquement sur peaux sensibles.</p>
<ul><li>Un moment de BIEN-ÊTRE grâce à sa texture fraîche et son parfum 100 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006495</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/878d0020289201dc4607383e6b7c94a72696a8f0b5a4bc3985444fac9e2dc9ba ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Aloe Vera Bio 400 ml ]]></title>
<g:id>ceaf4182-cae7-4b49-ab05-0b6918b8dd6f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche aloe vera bio 400 ml?ceaf4182-cae7-4b49-ab05-0b6918b8dd6f ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles Aloe Vera Bio 400 mlest un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).<br />Enrichie en surgras pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération. Elle associe :</p>
<ul><li>L'huile d'amande douce, utilisée pour son action apaisante et adoucissante sur les peaux délicates et sèches, dont elle calme les déman ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006525</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6fda6645d7106fa96ab1e674a242ca99fcbfa01180a2c5e61ad195e5ee7c25f9 ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Gel Bain Douche Amande Verte 400 ml ]]></title>
<g:id>ab518278-908d-4688-8fd4-9a79b4692a36</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche amande verte 400 ml?ab518278-908d-4688-8fd4-9a79b4692a36 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles Amande Verte 400 ml est un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).</p>
<p>Enrichie en surgras végétal pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération.<br />Sa texture fraîche et sa mousse onctueuse offrent un véritable moment de bien-être et laissent le doux parfum iconique d'amande verte.</p>
<p>Sans  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006419</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3276aa1cc09c41b8984811052c5b4bc2c724549dea93f284840a69846e017397 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Bio Huile de Macadamia 400 ml ]]></title>
<g:id>1ff10528-2491-45c7-814b-d2ac43e235a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche bio huile de macadamia 400 ml?1ff10528-2491-45c7-814b-d2ac43e235a3 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sèches Macadamia Bio 400 ml est un gel lavant visage et corps élaboré pour hydrater et régénérer les peaux sèches de toute la famille (dès l'âge d'un an).<br />Enrichie en surgras pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération. Elle associe :</p>
<ul><li>L'huile d'amande douce, utilisée pour son action apaisante et adoucissante sur les peaux délicates et sèches, dont elle calme les démangeais ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006518</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/961b8f38f8f528f0d4949ec8b9ced425b8e7a0cadf876cff769754468fe0bdcc ]]></g:image_link>
<g:product_type><![CDATA[ GEL DOUCHE > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Gel Bain Douche Eco-Recharge Amande Verte 1L ]]></title>
<g:id>4a6bebde-bad7-4071-86af-6560af511de8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche eco-recharge amande verte 1l?4a6bebde-bad7-4071-86af-6560af511de8 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une PEAU respectée et protégée : renfermant du surgras végétal pro-régénérant, notre formule sans savon et testée dermatologiquement sur peaux sensibles nettoie la peau en douceur. Elle aide à préserver le film hydrolipidique et ainsi son processus naturel de régénération.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007720</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94ddaf1ab5509d86858b5ad5d3bdd50662c4f339d84522ee9bd02d9bdf1e8747 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Fleur de Coton 400 ml ]]></title>
<g:id>c206bfcc-31c9-44db-b423-3935a17c7c7a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche fleur de coton 400 ml?c206bfcc-31c9-44db-b423-3935a17c7c7a ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles Fleur de Coton 400 ml est un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).</p>
<p>Enrichie en surgras végétal pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération.<br />Sa texture fraîche et sa mousse onctueuse offrent un véritable moment de bien-être et laissent le doux parfum de Fleur de coton.</p>
<p>Sans savo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006402</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09eda899723f1dba46d210c00af19064021e9b9cd88e6f70b1abe7409d8fe4e7 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Huile de Macadamia Bio 1L ]]></title>
<g:id>331d708e-66da-4dd3-978b-ba8bc400750e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche huile de macadamia bio 1l?331d708e-66da-4dd3-978b-ba8bc400750e ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.</p>
<p>Une PEAU hydratée et protégée : enrichie en surgras végétal pro-régénérant® et en macadamia bio, sa formule labellisée Cosmébio nettoie la peau sèche en douceur et aide à préserver son processus naturel de régénération. Sans savon et testée dermatologiquement sur peaux sensibles.</p>
<ul><li>Un moment de BIEN-ÊTRE grâce à sa texture fraîche et son par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006501</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50ca51b4cd9602980c75dd8a4e1cf3803edd5600c106f8df3f11fd8293a41ff0 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Lait Miel 400 ml ]]></title>
<g:id>da87c225-4bc5-4751-bbd7-5acbab3abef0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche lait miel 400 ml?da87c225-4bc5-4751-bbd7-5acbab3abef0 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles Lait et Miel 400 ml est un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).</p>
<p>Enrichie en surgras végétal pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération.<br />Sa texture fraîche et sa mousse onctueuse offrent un véritable moment de bien-être et laissent le doux parfum Lait &amp; Miel.</p>
<p>Sans savon.<b ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006426</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cd482ac6154168f04bb142ac3cf151dc2cbf7d4a0823dba2722e04d7cc307693 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Peaux Sensibles Aloe Vera Bio Éco-Recharge 1L ]]></title>
<g:id>e571be6f-928c-4569-9273-edb1a909bc91</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche peaux sensibles aloe vera bio Éco-recharge 1l?e571be6f-928c-4569-9273-edb1a909bc91 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles Aloe Vera Bio Éco-Recharge 1 L est un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).<br />Enrichie en surgras pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération. Elle associe :</p>
<ul><li>L'huile d'amande douce, utilisée pour son action apaisante et adoucissante sur les peaux délicates et sèches, dont elle calm ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006549</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4de17268ddd1e74c61964102bbeb0b79054a1ba976f41899d79dbec156a51ede ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Peaux Sensibles L'Original 400 ml ]]></title>
<g:id>2940b5e9-20af-41c9-a67e-053971940eb3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche peaux sensibles l'original 400 ml?2940b5e9-20af-41c9-a67e-053971940eb3 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles L'Original 400 ml est un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).</p>
<p>Enrichie en surgras végétal pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération.<br />Sa texture fraîche et sa mousse onctueuse offrent un véritable moment de bien-être et laissent le doux parfum iconique d'amande verte.</p>
<p>Sans sa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006471</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ac25534e710b14d3036dbd5f2cbf8b256f123cff06e8de41a4e3ea2a49cfb65 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Peaux Sensibles L'Original Éco-Recharge 1L ]]></title>
<g:id>a06cd373-2da8-40a1-ad8c-36fa0e5ffe4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche peaux sensibles l'original Éco-recharge 1l?a06cd373-2da8-40a1-ad8c-36fa0e5ffe4b ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sensibles L'Original Éco-Recharge 1 L est un gel lavant visage et corps élaboré pour protéger et régénérer les peaux sensibles de toute la famille (dès l'âge d'un an).</p>
<p>Enrichie en surgras végétal pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération.<br />Sa texture fraîche et sa mousse onctueuse offrent un véritable moment de bien-être et laissent le doux parfum iconique d'amande verte.</p>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006556</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9987ee5a990be241dfe0c8917d224d7ca1cb542a4d86687388f3f295d3674e52 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HYGIENE CORPORELLE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Gel Bain Douche Peaux Sensibles Lait Miel 1L ]]></title>
<g:id>c9f8de8b-a114-4333-b6eb-74115daa4e31</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche peaux sensibles lait miel 1l?c9f8de8b-a114-4333-b6eb-74115daa4e31 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>déal pour les peaux sèches de toute la famille : petits et grands dès 1 an.</p>
<p>• Une PEAU hydratée et protégée : notre formule renferme du surgras végétal pro-régénérant® et des protéines de lait, agents hydratants puissants qui prennent soin des peaux les plus sèches. Sans savon et testée dermatologiquement sur peaux sensibles, elle nettoie en douceur et aide à préserver le processus naturel de régénération de la peau.</p>
<p>• Un moment de BIEN-ÊTRE grâce à sa crème enveloppante et son  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006372</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a111f608914cbd2d7e497ea4e859555bc1f047b10d5d8a137dbef462ca843cb3 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Peaux Sèches Macadamia Bio Éco-Recharge 1L ]]></title>
<g:id>c11bec70-dd8e-463e-a5a1-cc7f0172bf38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche peaux sèches macadamia bio Éco-recharge 1l?c11bec70-dd8e-463e-a5a1-cc7f0172bf38 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Gel Bain Douche Peaux Sèches Macadamia Bio Éco-Recharge 1 L est un gel lavant visage et corps élaboré pour hydrater et régénérer les peaux sèches de toute la famille (dès l'âge d'un an).<br />Enrichie en surgras pro-régénérant®, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération. Elle associe :</p>
<ul><li>L'huile d'amande douce, utilisée pour son action apaisante et adoucissante sur les peaux délicates et sèches, dont elle calme les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006563</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a91dc4a3ac87b0026b34a02ec56a2aa30f0101b49cec87c2a54b0ab40e288eb ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Bain Douche Éco-Recharge Lait Miel 1L ]]></title>
<g:id>7b7c760d-a522-4fa6-9ebb-2e19c7ae2dda</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel bain douche Éco-recharge lait miel 1l?7b7c760d-a522-4fa6-9ebb-2e19c7ae2dda ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait nettoyant Eco-recharge 1l lait et miel est un soin idéal pour nourrir et protéger les peaux de toute la famille. Avec 72% de plastique en moins par rapport au flacon de 1 litre, ce produit s'inscrit dans une démarche écologique. Composé à 83% d'ingrédients d'origine naturelle, il renferme du surgras végétal pro-régénérant, assurant ainsi une hydratation optimale. De plus, sa formule sans savon est spécialement conçue pour les peaux sensibles, et convient dès l'âge de 3 ans.<br><br>La  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007744</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d33111fea987c71f94122dc0bb0de819fab071c5572db8511f4f8581b65eca8f ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Gel Douche Crème de Lait 200ml ]]></title>
<g:id>6ad34239-bb78-4985-b418-5b264b65fd86</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s gel douche crème de lait 200ml?6ad34239-bb78-4985-b418-5b264b65fd86 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule unique du gel Douche-Lait Hydratant Rogé Cavaillès nettoie les peaux sèches et sensibles de toute la famille, et maintient leur hydratation pendant et après la douche. Enrichi en actifs hydratants et en extraits d'huile végétale, il aide à prévenir du dessèchement cutané.<br /><br />Sa base lavante sans savon et son excellente tolérance permettent une utilisation quotidienne sous la douche en toute sécurité.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490000141</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6c4db715d43acef693b8b3ad9f2efc0a21fcaa44ffa380918ec5dfbca4119566 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Lait Bain Douche L'Hydratant 1L ]]></title>
<g:id>79e2dc2f-abf6-4835-ba5d-18da526aef60</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s lait bain douche l'hydratant 1l?79e2dc2f-abf6-4835-ba5d-18da526aef60 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.</p>
<p>Une PEAU hydratée et protégée : notre formule renferme du surgras végétal pro-régénérant® et des protéines de lait, agents hydratants puissants qui prennent soin des peaux les plus sèches. Sans savon et testée dermatologiquement sur peaux sensibles, elle nettoie en douceur et aide à préserver le processus naturel de régénération de la peau.</p>
<ul><l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006389</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bd012e5ab74639c5463433dcf8e6b50c7d167a3e838dff91d959381e7b0e500a ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Lait Bain Douche L'Hydratant 400 ml ]]></title>
<g:id>7c0358dd-7b49-4088-9cfa-410bb91205df</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s lait bain douche l'hydratant 400 ml?7c0358dd-7b49-4088-9cfa-410bb91205df ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vie est une histoire de régénération : celle des peaux de toutes les familles pour un moment de bien-être qui respecte notre planète.<br>• Une PEAU hydratée et protégée : notre formule renferme du surgras végétal pro-régénérant® et des protéines de lait, agents hydratants puissants qui prennent soin des peaux les plus sèches. Sans savon et testée dermatologiquement sur peaux sensibles, elle nettoie en douceur et aide à préserver le processus naturel de régénération de la peau.<br>• Un mome ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006433</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6faab6a3c247db2a4ae7c5de51b07ce4d1800b6066068e199146c6108543080f ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Lait Bain Douche Lait de Figue 400 ml ]]></title>
<g:id>a4a50038-7737-434f-ac06-54820e8e9065</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s lait bain douche lait de figue 400 ml?a4a50038-7737-434f-ac06-54820e8e9065 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Lait Bain Douche Peaux Sèches Lait de Figue 400 ml est un lait-crème lavant visage et corps élaboré pour hydrater et régénérer les peaux sèches de toute la famille (dès l'âge d'un an).</p>
<p>Enrichie en surgras végétal pro-régénérant® et en protéines de lait, agents hydratants puissants qui prennent soin des peaux les plus sèches, sa formule nettoie la peau en douceur et aide à préserver le processus naturel de régénération.<br />Sa texture crème enveloppante offre un véritabl ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490006440</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d94a9ff70e391837ed41ec577dd27e9702b4242a659833baa970378ed2707a4a ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Le Corps Beurre Fondant Soin nourrissant 200 ml ]]></title>
<g:id>95d300ed-7452-4d10-b814-a5659bc5141d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s le corps beurre fondant soin nourrissant 200 ml?95d300ed-7452-4d10-b814-a5659bc5141d ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour les PEAUX TRÈS SÈCHES : enrichie en surgras végétal pro-régénérant® et en beurre de karité bio, notre formule nourrit en profondeur et aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa texture fondante et son parfum réconfortant.</span><br /><span>• Un geste pour la PLANÈTE avec son pot 100% en plastique recyclé et recyclable*.</span><br /><span>• Adapté à toute la FAMILLE : pour les petits et grands dès 1 an.</s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007416</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/37f47d9f4b0153b534773fcf6a2578839cc3cb27d51a3d34abcf40b996dc2f51 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Le Corps Gelée en Eau Soin Désaltérant 200 ml ]]></title>
<g:id>918d999d-5ee2-4a7c-aaeb-b69db33be664</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s le corps gelée en eau soin désaltérant 200 ml?918d999d-5ee2-4a7c-aaeb-b69db33be664 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour TOUTES LES PEAUX : enrichie en surgras végétal pro-régénérant® et en eau de concombre bio, notre formule hydrate immédiatement et aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa texture innovante et son parfum frais.</span><br /><span>• Un geste pour la PLANÈTE avec son pot 100% en plastique recyclé et recyclable*.</span><br /><span>• Adaptée à toute la FAMILLE : pour les petits et grands dès 1 an.</span><br /> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007393</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30d551b1ede0c2ec768c03d98976adc14d6c4b9b7287bb945836988ce0aa17a5 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Les Mains Crème Légère Amande Bio 50 ml ]]></title>
<g:id>08cb00bc-6999-4a27-8509-c66248a134d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s les mains crème légère amande bio 50 ml?08cb00bc-6999-4a27-8509-c66248a134d5 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Pour les MAINS SÈCHES : enrichie en surgras végétal pro-régénérant® et en huile d’amande douce bio, notre formule adoucit, apaise et aide à préserver le processus naturel de régénération de la peau.</span><br /><span>• Un moment de BIEN-ÊTRE grâce à sa texture légère et son parfum doux.</span><br /><span>• Un geste pour la PLANÈTEavec son tube qui contient -37% de plastique par rapport à l’ancien tube 50ml.</span><br /><span>97% d’ingrédients d’origine naturelle – Vegan* – Testée derm ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007386</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/934b8130df1adf9b33c782f77c3806fc51185df88b3f7c5601257dc75efe1299 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Lingettes Intimes Antibactérien 15 lingettes ]]></title>
<g:id>aa8449aa-60e3-41d7-a14c-38cff1a7a8f8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s lingettes intimes antibactérien 15 lingettes?aa8449aa-60e3-41d7-a14c-38cff1a7a8f8 ]]></link>
<g:price><![CDATA[ 320.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée à tout moment de la journée : enrichie en prébiotiques, notre formule sans savon composée à 96% d’ingrédients d’origine naturelle nettoie en douceur et aide à prévenir les désagréments intimes (irritations, démangeaisons…).</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de thym antibactérien pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son tissu 100% biodégradable et d’origine naturelle.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007270</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e798b2fadf604ca94e72c427d8cab90ffe74001782c6e76111cd70c5010ae410 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Lingettes Intimes Extra-Doux 15 lingettes ]]></title>
<g:id>7200c150-c6de-4554-8c56-ae43ea3d4fc6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s lingettes intimes extra-doux 15 lingettes?7200c150-c6de-4554-8c56-ae43ea3d4fc6 ]]></link>
<g:price><![CDATA[ 320.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée à tout moment de la journée: enrichie en prébiotiques, notre formule sans savon composée à 96% d’ingrédients d’origine naturelle nettoie en douceur et aide à protéger l’équilibre intime.</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de calendula apaisant pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son tissu 100% biodégradable et d’origine naturelle.</p>
<p>• Adaptées à TOUTES les muqueuses a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007300</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a13de738b7059ac0a2081da23167a46214fbd834565f303babbe7839bed5efb4 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Lingettes Intimes Hydratant 15 lingettes ]]></title>
<g:id>b1309acd-dae8-4abb-8fa2-522b6481bc17</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s lingettes intimes hydratant 15 lingettes?b1309acd-dae8-4abb-8fa2-522b6481bc17 ]]></link>
<g:price><![CDATA[ 320.00 EUR ]]></g:price>
<description><![CDATA[ <p>Idéal pour la toilette quotidienne des muqueuses sèches.</p><p>• Une zone INTIME respectée et protégée à tout moment de la journée: enrichie en prébiotiques, notre formule sans savon composée à 96% d’ingrédients d’origine naturelle nettoie en douceur et aide à diminuer les sensations de tiraillements.</p><p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de feuilles d’olivier hydratantes pour un confort optimal.</p><p>• Un geste pour la PLANÈTE avec son tissu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007287</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0f4a5a8309a198190e4562718cf2cbe29406c92aed6c2f14e2504e4aaf5cc92d ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Mousse Intime Extra-Doux 100 ml ]]></title>
<g:id>f63ed640-33a4-4fe5-a429-75b148108133</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s mousse intime extra-doux 100 ml?f63ed640-33a4-4fe5-a429-75b148108133 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description col-12 px-0 ng-star-inserted">
<div class="card-zone ng-tns-c137-4 card-zone-content ng-trigger ng-trigger-fadeInFadeOut">
<p class="description-text ng-tns-c137-4 mb-description-text"><span class="mb-0">La mousse intime sans rinçage est le geste ultra-rapide pour se sentir bien à tout moment. Pour obtenir sa texture mousse légère et non collante, bien agiter avant d'appliquer directement sur le papier toilette. Une seule pression suffit pour nettoyer en douceur.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007713</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40378d72f4a1ee523bd398ced2049212243a040c5bf54b65669c61399c6cf054 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Nettoyant Solide Visage Gommant Doux 70g ]]></title>
<g:id>4f624af3-c5b0-45dd-acd9-01e8b3c12747</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s nettoyant solide visage gommant doux 70g?4f624af3-c5b0-45dd-acd9-01e8b3c12747 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La peau&nbsp;du visage est plus fine, plus exposée aux agressions du quotidien (soleil, pollution…). Notre soin nettoyant solide, enrichi en poudre de riz bio de Camargue et en surgras végétal Pro-régénérant® la nettoie et l’exfolie en douceur. Formulé avec 92% d’ingrédients d’origine naturelle, il élimine les peaux mortes et redonne à votre peau un aspect lisse. Sans savon, il respecte son pH physiologique.</p><p>L’éclat de riz permet un gommage mécanique extrêmement doux tandis que l’huile  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007034</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a475e800e8e05c650d94f11983c866003b5ad4c91384414d258e8221b4eb19a1 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Nettoyant Solide Visage Masque Eclat 70g ]]></title>
<g:id>10b818bb-cfa0-4fbf-83fa-042fa69c88c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s nettoyant solide visage masque eclat 70g?10b818bb-cfa0-4fbf-83fa-042fa69c88c7 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le&nbsp;masque éclat doux solide sans savon de Rogé Cavaillès&nbsp;au concombre bio est un produit de soin visage innovant qui offre une expérience de masque apaisant et rafraîchissant pour la peau. Sa formule sans savon et enrichie en ingrédients naturels en fait un choix idéal pour les peaux sensibles et délicates.</p><p>Ce masque solide se présente sous la forme d'un pain compact qui s'active au contact de l'eau. Il est facile à utiliser et pratique à transporter, ce qui en fait un compagn ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007027</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b63b65973d31dc13b4a7c4da81a6b0f27f0d4a2676437f965fa739c23d636d1 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Nettoyant Solide Visage Mousse Apaisante 70g ]]></title>
<g:id>5bf4ae78-c099-4b87-9ee3-f944be12644f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s nettoyant solide visage mousse apaisante 70g?5bf4ae78-c099-4b87-9ee3-f944be12644f ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La peau du visage est plus fine, plus exposée aux agressions du quotidien (soleil, pollution…).</p>
<p><span> </span></p>
<p>Le soin nettoyant solide, <span>Rogé Cavaillès Nettoyant Solide Visage Mousse Apaisante</span> est enrichi en huile d’olive bio de Provence et en surgras végétal Pro-régénérant la nettoie tout en douceur et l’apaise.</p>
<p><span> </span></p>
<p>Formulé avec 92% d’ingrédients d’origine naturelle, il retire les impuretés et le maquillage et redonne à votre peau sa fraîch ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007164</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/775b706abbdd5beb60b2687bb1eb7e9a40279cd8b571395bff1f84523e8f46a9 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Nutrissance Crème Mains Veloutante 50ml ]]></title>
<g:id>e346839c-6533-4f18-bab4-46da1706afc0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s nutrissance crème mains veloutante 50ml?e346839c-6533-4f18-bab4-46da1706afc0 ]]></link>
<g:price><![CDATA[ 489.60 EUR ]]></g:price>
<description><![CDATA[ <p>Cette Crème Mains Veloutante, enrichie en Surgras Vitaminé, prend soin de vos mains et hydrate votre peau en profondeur. Elle est composée de 97% d’actifs d’origine naturelle.</p>
<p>Les mains sont les premières à être exposées aux agressions extérieures et ont besoin d’être hydratées aussi souvent que nécessaire. Avec sa formule enrichie au beurre de Karité et à l’huile d’Amande douce, cette Crème Mains Non grasse Veloutante apaise les tiraillements et nourrit les mains. Une seule noisette e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490004798</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3074cde052e9e235370f602134cde04d920bb2a2932cada6fdb9c5659e1bb0b2 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Nutrissance Duo Pocket Douceur  ]]></title>
<g:id>437588eb-ecbd-4dca-ba8f-3babe7bf5917</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s nutrissance duo pocket douceur ?437588eb-ecbd-4dca-ba8f-3babe7bf5917 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé cavaillès nutrissance duo pocket douceur</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490005436</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5971f5d3c6ff45c8ab9f3dd6ad44dafd7ce1d40df25a9315bc28505a0ddc878c ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Porte Savon Aimanté ]]></title>
<g:id>9d063029-2399-44d4-8243-493c8e35a38f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s porte savon aimanté?9d063029-2399-44d4-8243-493c8e35a38f ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>porte savon aimanté Rogé Cavaillès</span><span> se compose de 2 éléments : une capsule métallique et une ventouse. </span></p>
<p><span>Il est compatible avec tous les savons solides de la marque Cavaillès</span></p>
<p><span>Il supporte jusqu'à 250 grammes.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007133</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7bc0a7c7374927533f8841f57f4856fde47cdaa2a3d637012f0f4aa847d833c6 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Jardin l'Original 3 x 200g ]]></title>
<g:id>155daaff-e668-4fb3-9aa1-5315f106912b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon jardin l'original 3 x 200g?155daaff-e668-4fb3-9aa1-5315f106912b ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>"Une PEAU respectée et protégée : avec des agents nourrissants dont notre surgras végétal pro-régénérant®, notre formule nettoie en douceur. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau. • Un moment de BIEN-ÊTRE : une mousse légère et enveloppante au parfum iconique de la lavande provençale. • Un geste pour la PLANÈTE : un format solide qui contient moins d'eau qu'un lavant liquide. • Pour les PEAUX SENSIBLES : testé dermatologiqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3346020049771</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/742a680aca8669f2e965d0d267778cac5b410b55133640ddfbba2bad89731785 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Nectar de Miel 3 x 200g ]]></title>
<g:id>d774a795-8f8f-49b7-a78f-904b13305cf3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon nectar de miel 3 x 200g?d774a795-8f8f-49b7-a78f-904b13305cf3 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une PEAU respectée et protégée : avec des agents nourrissants dont notre surgras végétal pro-régénérant®, notre formule nettoie en douceur. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau.<br />• Un moment de BIEN-ÊTRE : une mousse légère et enveloppante au parfum réconfortant et sucré du miel.<br />• Un geste pour la PLANÈTE : un format solide qui contient moins d’eau qu’un lavant liquide.<br />• Pour les PEAUX SENSIBLES : testé dermato ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3346020049900</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47f879419d59eadc3e1ce49c8d6999669e29f2b0524c92ecc86d91db68ff61b1 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Oranger Jasmin 3 x 200g ]]></title>
<g:id>a5e5e1b6-88eb-4109-9abf-7cabac0d0691</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon oranger jasmin 3 x 200g?a5e5e1b6-88eb-4109-9abf-7cabac0d0691 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product-characteristics-description" class="product-content">
<div class="product-content__content c-text c-text--size-s c-text--style-p">
<div>"Une PEAU respectée et protégée : avec des agents nourrissants dont notre surgras végétal pro-régénérant®, notre formule nettoie en douceur. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau. • Un moment de BIEN-ÊTRE : une mousse légère et enveloppante au parfum iconique de la lavande provençal ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3346020049795</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28cdd7e581f1a5c5cd10b208023dcf72d98f815c6f7f2e0491e5247a56a9c324 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Amande Lactée 100g ]]></title>
<g:id>0ea52d65-fb3a-4ddf-994c-325560fc1be0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras amande lactée 100g?0ea52d65-fb3a-4ddf-994c-325560fc1be0 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Savon Surgras Amande Lactée Cavaillès</span> respecte et protège les peaux sèches.</p>
<p>Enrichi en agents nourrissants dont en Surgras végétal pro-régénérant, ce savon <span>nettoie la peau en douceur et aide à préserver son film hydrolipidique.</span></p>
<p>Ainsi, le<span> processus naturel de régénération</span> de la peau est préservé.</p>
<p>Sa mousse <span>légère</span> et <span>onctueuse</span> enveloppe la peau et la laisse délicatement <span>parfumée.</span></p>
<p>Testé d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007638</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf5507661f8f6486175d8dab7896711716389de234a346087a31d8ffec1c6d5d ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Amande Lactée 3 x 200g ]]></title>
<g:id>8015a3a8-55d3-4c74-b27e-1eae0265ac57</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras amande lactée 3 x 200g?8015a3a8-55d3-4c74-b27e-1eae0265ac57 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>"Une PEAU respectée et protégée : avec des agents nourrissants dont notre surgras végétal pro-régénérant®, notre formule nettoie en douceur. Elle aide à préserver le film hydrolipidique et ainsi le processus naturel de régénération de la peau. • Un moment de BIEN-ÊTRE : une mousse légère et enveloppante au parfum iconique de la lavande provençale. • Un geste pour la PLANÈTE : un format solide qui contient moins d'eau qu'un lavant liquide. • Pour les PEAUX SENSIBLES : testé dermatologiqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3346020049801</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a607cfd8b4ad8da279d2ef689c1f567948e989c71a38704c39938da84658479 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Amande Verte - 150g ]]></title>
<g:id>6443e4a2-0cf8-44bd-964e-d5ad96b31440</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras amande verte - 150g?6443e4a2-0cf8-44bd-964e-d5ad96b31440 ]]></link>
<g:price><![CDATA[ 180.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enrichi en agents surgras, il&nbsp;est spécifiquement formulé pour&nbsp;<strong>nettoyer les peaux délicates et sensibles</strong>&nbsp;de toute votre famille.</p><p>Il&nbsp;aide à protéger votre peau des agressions extérieures et à renforcer son film hydrolipidique afin de lui procurer douceur et souplesse au quotidien.</p><p>Ce savon extra doux surgras&nbsp;associe les vertus nourrissantes et adoucissantes de l’huile d’amande douce et de l’huile de noyau de pêche.</p><p>Il apporte à votre p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490000271</g:gtin>
<g:brand><![CDATA[ CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a0ed2d37d628c1fb3f6fcc640c299af21aed8ab5d2938a77c81c217ebf1a609d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Savon Surgras Amande Verte 3+1 x 250 g ]]></title>
<g:id>76492331-9b0d-4a82-bca9-28669581251a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras amande verte 3+1 x 250 g?76492331-9b0d-4a82-bca9-28669581251a ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Savon Surgras Extra-Doux Amande Verte Lot de 3 x 250 g + 1 Gratuit est un savon spécialement formulé pour nettoyer les peaux sensibles et délicates de toute la famille, tout en respectant leur intégrité cutanée.<br />Enrichi en huile d'Amande douce, il dépose sur la peau un film protecteur, procurant confort et souplesse aux peaux sensibles et délicates.<br />Son parfum Amande verte entoure la toilette d'une senteur douce et raffinée.</p>
<p>Testé dermatologiquement.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490002497</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3099b6f5121950128bfb703faab829a5c2744f84a207bbab9277918a84f45f40 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Délice de Figue 100g ]]></title>
<g:id>eebcb317-2e07-4330-8fd8-e15c8bd69837</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras délice de figue 100g?eebcb317-2e07-4330-8fd8-e15c8bd69837 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Savon Surgras Délice de Figue Cavaillès</span> respecte et protège les peaux sèches.</p>
<p>Enrichi en agents nourrissants dont du Surgras végétal pro-régénérant, ce savon <span>nettoie la peau en douceur.</span></p>
<p>Il aide à<span> préserver son film hydrolipidique</span> ainsi que le<span> processus naturel de régénération</span> de la peau est préservé.</p>
<p>Sa mousse <span>légère</span> et <span>onctueuse</span> enveloppe la peau et la laisse délicatement <span>parfumée d'un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007607</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ee30617a2934c1a7f3b050cfd87a12672688b637ad2eca2b6ab73972575a2c67 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Extra-Doux 3+1 x 250 g  ]]></title>
<g:id>5387098c-ab83-4d11-9f36-b9fc28cc1042</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras extra-doux 3+1 x 250 g ?5387098c-ab83-4d11-9f36-b9fc28cc1042 ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Savon Surgras Extra-Doux Lot de 3 x 250 g + 1 Gratuit est idéal pour la toilette des peaux délicates et sensibles comme celles des bébés, des enfants, et des personnes âgées. Enrichi en huile d'Amande douce, il nettoie en douceur et adoucit l'épiderme. Ses agents surgras laissent sur la peau un film protecteur.</p>
<p>Sans colorant, sans conservateur, hypoallergénique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490002473</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47edf88f74cbd0896ac5a0483e50781ff55894fcf581506d5aa11405f9dd9930 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Extra-Doux Fleur de Coton Lot de 3 x 250 g + 1 ]]></title>
<g:id>612eda6f-4601-43a9-8c4f-6a96b6a91c0a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras extra-doux fleur de coton lot de 3 x 250 g + 1?612eda6f-4601-43a9-8c4f-6a96b6a91c0a ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Savon Surgras Extra-Doux Fleur de Coton Lot de 3 x 250 g + 1 Gratuit a été spécialement formulé pour nettoyer les peaux sensibles et délicates de toute la famille, tout en respectant leur intégrité cutanée. Il nettoie et protège la peau, tout en l'enveloppant d'un doux parfum de fleur de coton.</p>
<p>Enrichi en huile d'amande douce, il dépose sur la peau un film protecteur, procurant confort et souplesse aux peaux sensibles et délicates.</p>
<p>Son parfum Fleur de Coton entour ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490002503</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a69200920f8605964d6ceaf90450015c2e050c5f18d42b576d6809e50782259f ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Extra-Doux Lait de Rose 3+1 x 250g  ]]></title>
<g:id>7b6a8acd-ba36-4522-b500-a216d440df14</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras extra-doux lait de rose 3+1 x 250g ?7b6a8acd-ba36-4522-b500-a216d440df14 ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rogé Cavaillès Savon Surgras Extra-Doux Lait de Rose Lot de 3 x 250 g + 1 Gratuit est idéal pour la toilette des peaux délicates et sensibles de toute la famille. Enrichi en huile d'Amande douce, il nettoie en douceur et adoucit l'épiderme. Ses agents surgras laissent sur la peau un film protecteur. Parfumé au Lait de Rose.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490002961</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74fa50ffaea9199733fad5aaa2b50b3d4816f926fb0fea3426612d56fad87db0 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Jardin l'Original 100g ]]></title>
<g:id>e8fbeaa0-536d-45a2-b78e-4552c90d424c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras jardin l'original 100g?e8fbeaa0-536d-45a2-b78e-4552c90d424c ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Savon Surgras Jardin l'Original Cavaillès</span> nettoie en douceur les peaux sensibles.</p>
<p>Sa formule enrichie en Surgras végétal pro-régénérant <span>aide à préserver le film hydrolipidique</span> de la peau ainsi que son <span>processus de régénération</span>.</p>
<p>Au contact de l'eau, ce savon offre une <span>mousse légère et onctueuse</span> au parfum réconfortant de miel.</p>
<p>Testé dermatologiquement.</p>
<div id="kurato_extension_modal"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007706</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bca2c15466d87cf6fceb9dc2b3ae6ab1a7e4fd17219746127815e8891bc682e8 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Savon Surgras Nectar de Miel 100g ]]></title>
<g:id>13f11b50-a91b-41b2-90af-bb12ebbe16ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s savon surgras nectar de miel 100g?13f11b50-a91b-41b2-90af-bb12ebbe16ef ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Savon Surgras Nectar de Miel Cavaillès</span> respecte et protège les peaux sensibles.</p>
<p>Enrichi en Surgras végétal pro-régénérant, ce savon <span>nettoie la peau en douceur et aide à préserver son film hydrolipidique.</span></p>
<p>Ainsi, le<span> processus naturel de régénération</span> de la peau est préservé.</p>
<p>Sa mousse <span>légère</span> et <span>onctueuse</span> enveloppe la peau et la laisse délicatement <span>parfumée d'une fragrance sucrée.</span></p>
<p>Testé de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007614</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/700c63de724c80934eee9e5cda86b1219acc8d5c15560f03930582b5b232087d ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Soin Crème Intime Mycolea+ 50ml ]]></title>
<g:id>e58990d6-ec04-44a4-b187-6744f91cc6ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin crème intime mycolea+ 50ml?e58990d6-ec04-44a4-b187-6744f91cc6ba ]]></link>
<g:price><![CDATA[ 875.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : renfermant des actifs protecteurs, notre formule aide à réduire les sensations de picotements et de démangeaisons. Composée à 85% d'ingrédients d'origine naturelle, elle soulage immédiatement et durablement.<br />• Un CONFORT optimal : avec du surgras végétal pro-régénérant® et de l'extrait de mangoustanier apaisant, notre formule adoucit la muqueuse intime.<br />• Un geste pour la PLANÈTE avec son tube majoritairement recyclable.<br />• Adapté aux mu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007348</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6d96511787a3a285a6c103db690d486a0c20b3ea8895fa89ae06f8ff409c8932 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Antibactérien 100ml ]]></title>
<g:id>15e2dfe5-00e7-46ef-8a4f-39a403237dc5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime antibactérien 100ml?15e2dfe5-00e7-46ef-8a4f-39a403237dc5 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prevenir les désagréments intimes (irritations, démangeaisons…).</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de thym antibactérien pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses dès ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007058</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ac392e4b21ee369b3593e4caf60bc2e6681269e8acb2f0f08c78c0d8616e500 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Antibactérien 250ml ]]></title>
<g:id>f556c23c-6bfa-44a6-8126-a7e417101a57</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime antibactérien 250ml?f556c23c-6bfa-44a6-8126-a7e417101a57 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prevenir les désagréments intimes (irritations, démangeaisons…).</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de thym antibactérien pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses dès ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007072</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a97939eadc081ddd83e4e1fb3e4f733b7de2b935065c72e7367e8176d6d5aa3b ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Antibactérien 500ml ]]></title>
<g:id>0bfb32ad-c8fc-4d2e-b48a-b856749c6159</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime antibactérien 500ml?0bfb32ad-c8fc-4d2e-b48a-b856749c6159 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prevenir les désagréments intimes (irritations, démangeaisons…).</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de thym antibactérien pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses dès ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007119</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a97939eadc081ddd83e4e1fb3e4f733b7de2b935065c72e7367e8176d6d5aa3b ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Fraîcheur 2 x 250ml ]]></title>
<g:id>72f18594-da89-4faf-aa63-ff9a64b1a184</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime fraîcheur 2 x 250ml?72f18594-da89-4faf-aa63-ff9a64b1a184 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prévenir l’apparition des odeurs gênantes.</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de menthe rafraîchissante pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses avec son pH physiolog ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007256</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0365b8c87bc72d576c4d1e93e8c47b1d782b2edb63a01b379a33d740796afb0f ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Fraîcheur 2 x 500 ml ]]></title>
<g:id>00189ec3-697c-4477-83c6-c98d6983b272</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime fraîcheur 2 x 500 ml?00189ec3-697c-4477-83c6-c98d6983b272 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prévenir l’apparition des odeurs gênantes.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de menthe rafraîchissante pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiologique.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007263</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42155b7c14c917356c15b6b734b3825d30137d7f49c3fa2fd45bcd125e44ea20 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Fraîcheur 250ml ]]></title>
<g:id>4fa3fbde-a7e1-4a63-8cde-44cb7e138c69</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime fraîcheur 250ml?4fa3fbde-a7e1-4a63-8cde-44cb7e138c69 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prévenir l’apparition des odeurs gênantes.</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de menthe rafraîchissante pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses avec son pH physiolog ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007096</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/29dd7763e784a9159b29169bcaa4f2b0a99e9336d1585625b3527dc532a238db ]]></g:image_link>
<g:product_type><![CDATA[ SOIN INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Fraîcheur 500ml ]]></title>
<g:id>000423c3-d152-4ca5-be58-8082ae743652</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime fraîcheur 500ml?000423c3-d152-4ca5-be58-8082ae743652 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prévenir l’apparition des odeurs gênantes.</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de menthe rafraîchissante pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses avec son pH physiolog ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007126</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a4f0afbecd123499f16fe82bf7da3f1bfd736a3c966356962996c60948456a9 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > SOIN INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Hydratant 100ml ]]></title>
<g:id>13a2f78a-b6d6-4216-84b2-bbb3ffb8c1b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime hydratant 100ml?13a2f78a-b6d6-4216-84b2-bbb3ffb8c1b9 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à diminuer les sensations de tiraillements.</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de feuilles d’olivier hydratantes pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses avec son pH ph ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007041</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e22e8dbd304a845a37f86e6fb8e8443a3c047e260195661c8ba6fc7a8cd1102e ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Hydratant 2 x 250 ml ]]></title>
<g:id>a5c3b3ef-bcdc-4ecb-b20c-5262f43b0e97</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime hydratant 2 x 250 ml?a5c3b3ef-bcdc-4ecb-b20c-5262f43b0e97 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une zone INTIME respectée et protégée : Renfermant un prébiotique, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à diminuer les sensations de tiraillements.<br>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de feuilles d’olivier hydratantes pour un confort optimal.<br>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br>• Adapté à TOUTES les muqueuses avec son pH physiologique.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007225</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/06ccfd5889ebcb9e196bd4bf77d6dc691b72647c15c24fa19b895912003cae95 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Hydratant 2 x 250ml ]]></title>
<g:id>8d3fea22-e97d-4bd8-be2a-df01f8da17b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime hydratant 2 x 250ml?8d3fea22-e97d-4bd8-be2a-df01f8da17b4 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à diminuer les sensations de tiraillements.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de feuilles d’olivier hydratantes pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiolo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007218</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b4f7431f5bb8996147d3a3844ffe5459e4f51f1310597f1dcd15abd54eed2867 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Hydratant 250ml ]]></title>
<g:id>c8ff4510-cf11-4008-807c-c9fe39bfb020</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime hydratant 250ml?c8ff4510-cf11-4008-807c-c9fe39bfb020 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à diminuer les sensations de tiraillements.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de feuilles d’olivier hydratantes pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiolo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007065</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03782f97af43f7b89aa515439466fe34d02e9266620ca71e5a9371f2910dce3a ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime Hydratant 500ml ]]></title>
<g:id>f183f738-6c7e-4e04-bec5-c759951e50f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime hydratant 500ml?f183f738-6c7e-4e04-bec5-c759951e50f9 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à diminuer les sensations de tiraillements.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de feuilles d’olivier hydratantes pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiolo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007102</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a1b4e178368d776dc2f0deb0259f1559df8a6aa42859f0af287385a0a7800943 ]]></g:image_link>
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
<title><![CDATA[ Cavaillès Soin Lavant Intime avec Antibactérien 2 x 250ml ]]></title>
<g:id>e159c711-6294-43a6-a395-2a1994287419</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime avec antibactérien 2 x 250ml?e159c711-6294-43a6-a395-2a1994287419 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d’ingrédients d’origine naturelle nettoie en douceur et aide à prevenir les désagréments intimes (irritations, démangeaisons…).</p>
<p>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de thym antibactérien pour un confort optimal.</p>
<p>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</p>
<p>• Adapté à TOUTES les muqueuses dès ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007232</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf19902af127efd2b2950bda8726691c2b287ce3e5a081c437f2f8f2e444c4c3 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin Lavant Intime et Corps Petite Fille 250ml ]]></title>
<g:id>d24547c4-fda7-40c8-b39c-bc15c752eaad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime et corps petite fille 250ml?d24547c4-fda7-40c8-b39c-bc15c752eaad ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon à 97% d'ingrédients d'origine naturelle nettoie en douceur et aide à protéger l'équilibre intime des petites filles.</span><br /><span>• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits deguimauve adoucissante pour un confort optimal.</span><br /><span>• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.</span><br /><span>• Adapté à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007089</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/10e2da23253abff668f4f4b84b79ad3c3838e84b41e3de86426dfe39df442fc1 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin lavant Intime Extra-Doux 100ml ]]></title>
<g:id>e30aad21-294e-4ab8-a9f7-f4748b741af3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime extra-doux 100ml?e30aad21-294e-4ab8-a9f7-f4748b741af3 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon composée à 97%d’ingrédients d’origine naturelle nettoie en douceur et aide à protéger l’équilibre intime.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de calendula apaisant pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiologique.</p>
<p>Tes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007188</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb75360cfcf421a4e2ac486c354ee9950f0f81fb79d97e260049857b266c3ebb ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin lavant Intime Extra-Doux 2 x 250ml ]]></title>
<g:id>21beecbe-5435-4bd1-b0db-981261ade6f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime extra-doux 2 x 250ml?21beecbe-5435-4bd1-b0db-981261ade6f2 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon composée à 97%d’ingrédients d’origine naturelle nettoie en douceur et aide à protéger l’équilibre intime.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de calendula apaisant pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiologique.</p>
<p>Tes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007195</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e00df45f5f7f7f87199bd6483146cfc213b351ead7d1176dcf49f05410d365a ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin lavant Intime Extra-Doux 250ml ]]></title>
<g:id>cde9ddd4-69af-451a-9590-44ffccff921c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime extra-doux 250ml?cde9ddd4-69af-451a-9590-44ffccff921c ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon composée à 97%d’ingrédients d’origine naturelle nettoie en douceur et aide à protéger l’équilibre intime.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de calendula apaisant pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiologique.</p>
<p>Tes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007140</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8726364a3e8ad18e9f16a27a9f84c26c57527184ad02abf0d1ae5734d2d07e7c ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin lavant Intime Extra-Doux 500ml ]]></title>
<g:id>1ada2227-0d38-4d59-8161-136d74425745</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime extra-doux 500ml?1ada2227-0d38-4d59-8161-136d74425745 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Une zone INTIME respectée et protégée : enrichie en prébiotiques, notre formule sans savon composée à 97%d’ingrédients d’origine naturelle nettoie en douceur et aide à protéger l’équilibre intime.<br />• Un moment de BIEN-ÊTRE grâce au surgras végétal pro-régénérant® et aux extraits de calendula apaisant pour un confort optimal.<br />• Un geste pour la PLANÈTE avec son flacon 100% en plastique recyclé et recyclable*.<br />• Adapté à TOUTES les muqueuses avec son pH physiologique.</p>
<p>Tes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007157</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a08af08a12cd8ff65e9fabb6b4ae863dbe00c2692595d13c0c74903ef666e9e7 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cavaillès Soin lavant Intime Mycolea+ 200ml ]]></title>
<g:id>f3cddbee-84cd-4847-90be-fe909e9ce5aa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cavaill-s soin lavant intime mycolea+ 200ml?f3cddbee-84cd-4847-90be-fe909e9ce5aa ]]></link>
<g:price><![CDATA[ 875.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>• Une zone INTIME respectée et protégée : renfermant des actifs protecteurs, notre formule nettoie en douceur et aide à réduire les sensations d'inconfort et de tiraillements. Sans savon et composée à 87% d'ingrédients d'origine naturelle, elle soulage immédiatement et durablement.</span><br /><span>• Un CONFORT optimal : avec du surgras végétal pro-régénérant® et de l'extrait de mangoustanier apaisant, notre formule aide à rétablir le bien-être intime.</span><br /><span>• Un geste pour ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3596490007553</g:gtin>
<g:brand><![CDATA[ ROGE CAVAILLES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/59132c7c4c941084820810213651237273c061e1d65e22cd6faec2ac55519180 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIENE INTIME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ CeraVe Baume Hydratant 50 ml ]]></title>
<g:id>b3fa5913-6269-41c7-a2de-c386b8a76cb9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-baume hydratant 50 ml?b3fa5913-6269-41c7-a2de-c386b8a76cb9 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Baume Hydratant 50 ml est un baume hydratant aux 3 céramides essentiels et acide hyaluronique pour les peaux sèches à très sèches. Il nourrit, hydrate et aide à restaurer la barrière protectrice de la peau.</p>
<p>Développé avec des dermatologues.</p>
<p>Formule sans parfum. Hypoallergénique. Non comédogène</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597371</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/655308d61b59d1f8b376073c1199205278b6228585b30b9493278af3729e7bd5 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Baume Hydratant avec Pompe 454 g ]]></title>
<g:id>52695709-6dfe-4ad5-9f33-538a5d515afe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-baume hydratant avec pompe 454 g?52695709-6dfe-4ad5-9f33-538a5d515afe ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Baume Hydratant avec Pompe 454 g est un baume hydratant aux 3 céramides essentiels et acide hyaluronique pour les peaux sèches à très sèches. Il nourrit, hydrate et aide à restaurer la barrière protectrice de la peau.</p>
<p>Développé avec des dermatologues.</p>
<p>Formule sans parfum. Hypoallergénique. Non comédogène.</p>
<p>Contient une pompe.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3606000551954</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/59a969323273b8322745b9860147f81248585531bfc9799ad7b6d110b4382e28 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Crème Hydratante Visage 52 ml ]]></title>
<g:id>460c4593-c94a-40d8-98ae-988ac5a572b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème hydratante visage 52 ml?460c4593-c94a-40d8-98ae-988ac5a572b1 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597449</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0cc6b65490c0a7d063cdcd47ce1e44a2877b579c8bea6b28b2d4064d20e94285 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Crème Hydratante Visage SPF30 52 ml ]]></title>
<g:id>9514e02e-6711-40a7-9f43-b52768b4c10e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème hydratante visage spf30 52 ml?9514e02e-6711-40a7-9f43-b52768b4c10e ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Crème Hydratante Visage SPF30 52 ml est une crème hydratante visage de protection aux UVA et UVB pour les peaux normales à sèches. Enrichie aux 3 céramides essentiels, au niacinamide et à l'acide hyaluronique, elle nourrit, apaise et restaure la barrière cutanée du visage et du cou.</p>
<p>Idéale pour les peaux desséchées par les traitements anti-acné.</p>
<p>Texture légère non collante.</p>
<p>Sans parfum. Non comédogène.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875840620</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1a164071282a70a9ab232c42b1d0fbdae49bd0a1996943ef2c7933f9366bb02 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Crème Lavante Hydratante 473 ml ]]></title>
<g:id>c00c74b7-7647-4e16-a8c7-181ec5ec2e54</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème lavante hydratante 473 ml?c00c74b7-7647-4e16-a8c7-181ec5ec2e54 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Crème Lavante Hydratante 473 ml est une crème lavante qui permet de nettoyer et hydrater la peau (visage et corps) sans altérer la barrière protectrice de la peau.<br />Idéale pour les peaux normales à sèches, sa formule contient 3 céramides essentiels dont la peau saine a besoin pour aider à renouveler et conserver sa barrière protectrice naturelle, et de l'acide hyaluronique.</p>
<p>Sans parfum. Hypoallergénique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597333</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1c1840362e1670558e986e249e6a7a2b75c10049ce976a2bad8848e717f9feae ]]></g:image_link>
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
<title><![CDATA[ CeraVe Crème Moussante Nettoyante Hydratante Visage 236 ml ]]></title>
<g:id>be351994-51da-4bd9-a4ce-2e71d9da428d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème moussante nettoyante hydratante visage 236 ml?be351994-51da-4bd9-a4ce-2e71d9da428d ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développée avec des dermatologues la Crème Moussante Nettoyante Hydratante CeraVe Nettoie, démaquille et hydrate tout en respectant la barrière protectrice des peaux normales à sèches. Texture crème en mousse onctueuse et enveloppante. Formule visage et yeux. Sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875743563</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b3e2d7276cec213b7211fdb26002bd16b53001904facbb882c7262ab9653794 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Crème Réparatrice Contour Yeux 14 ml ]]></title>
<g:id>f0cfe7ee-78ed-4f45-862a-84ffe04637ed</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème réparatrice contour yeux 14 ml?f0cfe7ee-78ed-4f45-862a-84ffe04637ed ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Crème Réparatrice Contour Yeux 14 ml développée par des dermatologues, est une crème réparatrice pour le contour des yeux.</p>
<p>Sa formule contient 3 céramides essentiels dont la peau saine a besoin pour aider à renouveler et conserver sa barrière protectrice naturelle, et de l'acide hyaluronique.</p>
<p>Les cernes et les poches sont nettement moins visibles.</p>
<p>Sans parfum, non comédogène.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597272</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c590e4c00c045759f31c286d60404c4f7928266c47eabf0a364753e62ec3dbb4 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Gel moussant 88 ml ]]></title>
<g:id>0382fb3f-3321-4cff-a078-8dccb765e9bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-gel moussant 88 ml?0382fb3f-3321-4cff-a078-8dccb765e9bd ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gel Moussant de CeraVe est un soin quotidien qui nettoie et purifie la peau en profondeur sans altérer la barrière cutanée des peaux normales, mixtes et grasses. Il élimine efficacement l'excès de sébum, les impuretés, le maquillage et la pollution et rafraichit la peau. Ce nettoyant à la texture gel moussante peut être utilisé sur le visage et le corps.</p>
<p>Enrichi aux <a href="https://www.cerave.fr/notre-marque/l-importance-des-ceramides" class="generic-event">3 céramides essentiels < ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597340</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f038e3b0fadf30759e1436eb4a5bec9e0795b2099f4881442caecf2ed5417088 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Huile Lavante Moussante Hydratante 236 ml ]]></title>
<g:id>8cc957af-28ec-4658-b668-16518df54abe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-huile lavante moussante hydratante 236 ml?8cc957af-28ec-4658-b668-16518df54abe ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Huile Lavante Moussante Hydratante 236 ml est un soin qui nettoie en douceur, relipide, hydrate les peaux normales à très sèches et les peaux à tendance atopique tout en restaurant la barrière cutanée.</p>
<p>Sa formule enrichie aux 3 céramides essentiels et à l'acide hyaluronique restaure la barrière cutanée et hydrate la peau sous la douche.<br />Formulée à partir d'un complexe unique de triglycérides et de squalane, lipides clés naturellement présents dans la peau, déficitaires dans ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875773430</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fd6cd2a96da2282c39fed4d5d0326d4d80fcbb4864ef246f88e65ca02c76cf28 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Lait Hydratant 473 ml ]]></title>
<g:id>cf3d4ba5-5899-44bb-b30f-fefce31dad38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-lait hydratant 473 ml?cf3d4ba5-5899-44bb-b30f-fefce31dad38 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Lait Hydratant 473 ml développé par des dermatologues, est un lait hydratant qui permet de nourrir et hydrater les peaux sèches à très sèches, visage et corps, sans altérer la barrière protectrice de la peau.</p>
<p>déale pour les peaux sèches à très sèches, sa formule contient 3 céramides essentiels dont la peau saine a besoin pour aider à renouveler et conserver sa barrière protectrice naturelle, et de l'acide hyaluronique.</p>
<p>Sans parfum, non comédogène. Hypoallergénique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597395</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4be468a0c3aa4cbdc0b131485e517a5ea5e140d2b0bdb3ec6aaa1501b7365986 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Pommade Réparatrice Intensive  50 ml ]]></title>
<g:id>a8566d2a-2b09-46aa-af5c-9d369f7c06e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-pommade réparatrice intensive  50 ml?a8566d2a-2b09-46aa-af5c-9d369f7c06e4 ]]></link>
<g:price><![CDATA[ 970.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Pommade Réparatrice Intensive Visage Corps Lèvres 50 ml est un soin pour les peaux très sèches, abîmées et craquelées. Il peut s'appliquer sur le corps, le visage et les lèvres.</p>
<p>Sa formule enrichie en céramides essentiels et en acide hyaluronique, répare la barrière cutanée et aide à maintenir l'hydratation naturelle de la peau. <br />Le pouvoir réparateur intensif de cette pommade garantit un soulagement immédiat, apaisant les sensations d'inconfort et de tiraillements.<br />Sa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875849302</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/68eb618609f9643f3b4b5f557c4c876847a423d2472c604d100f4af2289c13b2 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Pommade Réparatrice Intensive  88 ml ]]></title>
<g:id>f7fe3ac5-95d7-4811-98de-104dde91a3b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-pommade réparatrice intensive  88 ml?f7fe3ac5-95d7-4811-98de-104dde91a3b4 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Pommade Réparatrice Intensive Visage Corps Lèvres 88 ml est un soin pour les peaux très sèches, abîmées et craquelées. Il peut s'appliquer sur le corps, le visage et les lèvres.</p>
<p>Sa formule enrichie en céramides essentiels et en acide hyaluronique, répare la barrière cutanée et aide à maintenir l'hydratation naturelle de la peau. <br />Le pouvoir réparateur intensif de cette pommade garantit un soulagement immédiat, apaisant les sensations d'inconfort et de tiraillements.<br />Sa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875848459</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f01e31b1f7933e6d215f2baf713a2e93603c158b476313b1af093194a07f8ad5 ]]></g:image_link>
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
<title><![CDATA[ CeraVe SA Crème Anti-Rugosités 177 ml ]]></title>
<g:id>983ca1e8-0897-4f1b-8aea-2917dae87ec4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-sa crème anti-rugosités 177 ml?983ca1e8-0897-4f1b-8aea-2917dae87ec4 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe SA Crème Anti-Rugosités 177 ml est une crème indiquée pour exfolier, adoucir et lisser les rugosités des peaux sèches, rugueuses et squameuses. Sa formule aux 3 céramides essentiels, urée, LHA et acide salicylique, hydrate et lisse les peaux sèches et rugueuses. Elle aide à restaurer la barrière protectrice de la peau.</p>
<p>Sans parfum. Non comédogène. Hypoallergénique.</p>
<p>Urée 10%.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875684095</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4619498263779438f8d33dc2307750004f017aeda2d714a7f771981aaf6899f0 ]]></g:image_link>
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
<title><![CDATA[ CeraVe SA Crème Anti-Rugosités 340 g ]]></title>
<g:id>3f8e8d60-80fb-4f87-a963-dd6a505a06b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-sa crème anti-rugosités 340 g?3f8e8d60-80fb-4f87-a963-dd6a505a06b7 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Sa Crème Anti-Rugosités 340 g est une crème indiquée pour exfolier, adoucir et lisser les rugosités des peaux sèches, rugueuses et squameuses. Sa formule aux 3 céramides essentiels, urée, LHA et acide salicylique, hydrate et lisse les peaux sèches et rugueuses. Elle aide à restaurer la barrière protectrice de la peau.</p>
<p>Urée 10%.</p>
<p>Sans parfum. Non comédogène. Hypoallergénique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875684101</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6344c2b61ca2c6708659cd1da7a0d7bd3eb5cdd075df8ecf2d5f5fa2277bef5e ]]></g:image_link>
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
<title><![CDATA[ CeraVe SA Gel Nettoyant Anti-Rugosités 236 ml ]]></title>
<g:id>e83b603c-54bf-44e3-bdc8-b7115d0c425e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-sa gel nettoyant anti-rugosités 236 ml?e83b603c-54bf-44e3-bdc8-b7115d0c425e ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe SA Gel Nettoyant Anti-Rugosités 236 ml est un soin à la formule lissante, sans grains aux 3 céramides essentiels, acide salicylique et acide hyaluronique.<br />Il nettoie en douceur et favorise l'élimination des rugosités des peaux sèches sans altérer la barrière protectrice de la peau.</p>
<p>Sans parfum. Convient aux peaux sensibles, hypoallergénique.<br />Non comédogène.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875684118</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/95ae5e560fbd2b41e078c039b7676aa0e96240422a85a50763d302942f2460e4 ]]></g:image_link>
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
<title><![CDATA[ CeraVe SA Gel Nettoyant Anti-Rugosités 473 ml ]]></title>
<g:id>417c9b02-3c87-468f-9050-abd0228a25b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-sa gel nettoyant anti-rugosités 473 ml?417c9b02-3c87-468f-9050-abd0228a25b1 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe SA Gel Nettoyant Anti-Rugosités 473 ml est un gel qui nettoie en douceur et favorise l'élimination des rugosités sans altérer la barrière protectrice de la peau. Il contient 3 céramides essentiels, acide salicylique et acide hyaluronique.</p>
<p>Il convient aux peaux sensibles.</p>
<p>Non comédogène.<br />Hypoallergénique.</p>
<p>Sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875795456</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f90e7e49643fcd9c16c5d228ad9ab096ea20014d515f4c7f8d14caa7fe14865 ]]></g:image_link>
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
<title><![CDATA[ CeraVe Sérum Hydratant Acide Hyaluronique 30 ml ]]></title>
<g:id>df6c95a0-9f51-4c29-af83-b9260cc4238b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-sérum hydratant acide hyaluronique 30 ml?df6c95a0-9f51-4c29-af83-b9260cc4238b ]]></link>
<g:price><![CDATA[ 1970.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Sérum Hydratant Acide Hyaluronique 30 ml est un sérum conçu pour hydrater et maintenir l'hydratation tout en aidant à restaurer et renforcer la barrière protectrice de la peau.<br />Sa formule enrichie aux 3 céramides essentiels aide à restaurer et renforcer la barrière cutanée.<br />L'Acide hyaluronique hautement concentré et la vitamine B5 réinfusent la peau en eau et maintiennent l'hydratation.</p>
<p>Texture sérum-crème légère non collante à absorption rapide.</p>
<p>Idéale pour to ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3606000560833</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d32fdd1939d5f68ec8c4c2eede7712308c076af5c3c5b4a873a475cd4eb5d8be ]]></g:image_link>
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
<title><![CDATA[ CeraVe baume hydratant 454g ]]></title>
<g:id>b19ce67b-b9e0-45d0-a701-663eea231828</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-baume hydratant 454g?b19ce67b-b9e0-45d0-a701-663eea231828 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Hydrate la peau en continu et aide à restaurer la barrière protectrice de la peau.</strong></p>
<p>Développé avec des dermatologues, le Baume Hydratant CeraVe aide à restaurer la barrière protectrice de la peau. Ce soin nourrissant, enrichi aux 3 céramides essentiels et à l’acide hyaluronique hydrate la peau en continu pendant 48h*, dès la première application.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597388</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9bd59f96296cc7bf0d157f1db433564d69fe792cf4cad0ac413824c8579ebb3f ]]></g:image_link>
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
<title><![CDATA[ CeraVe crème hydratante visage SPF50 - 52ml ]]></title>
<g:id>6f57b76b-e218-4d20-8eb0-4550161800ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème hydratante visage spf50 - 52ml?6f57b76b-e218-4d20-8eb0-4550161800ce ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <h3>Soin hydratant avec SPF50 qui hydrate et protège la peau des UV.</h3>
<p>La Crème Hydratante Visage SPF50 de CeraVe est un soin qui hydrate les peaux normales à sèches.</p>
<p>Cette crème à la texture légère non collante s'applique sur le visage et le cou pour une peau hydratée toute la journée.</p>
<p>Sa protection UV SPF50 bloque les rayons UVA et UVB afin de protéger la peau du soleil.</p>
<p>Enrichie aux 3 céramides essentiels et à l' acide hyaluronique, elle nourrit, hydrate en continu  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875814652</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/184156e593a83f9405ca5c302f065defb8f33385a54bd5782b9b9705624bcff3 ]]></g:image_link>
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
<title><![CDATA[ CeraVe lait hydratant 88ml ]]></title>
<g:id>5f239847-1c62-4ba9-9f16-b88e39399bcb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-lait hydratant 88ml?5f239847-1c62-4ba9-9f16-b88e39399bcb ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <h3>Soin à la texture légère qui hydrate en continu 24H</h3>
<p>Le Lait Hydratant de CeraVe est un soin qui hydrate les peaux sèches à très sèches.</p>
<p>Ce soin hydratant s'applique sur le visage et le corps pour hydrater la peau toute la journée.</p>
<p>Sa texture est légère, non grasse et ne colle pas à la peau pour un habillage rapide.</p>
<p>Enrichi aux 3 céramides essentiels et à l' acide hyaluronique, il hydrate en continu pendant 24 heures grâce à la technologie MVE, qui encapsule les a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597364</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2db8c3c0aa4bce3375b188f56f992c7cf30cfb69871b01b8bb71f5b63fa14087 ]]></g:image_link>
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
<title><![CDATA[ Cerave Crème Hydratante Visage Spf50 52 ml + Crème Lavante Hydratante 20 ml Offerte ]]></title>
<g:id>700610ae-50d0-4037-96e0-de9503ee0031</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème hydratante visage spf50 52 ml + crème lavante hydratante 20 ml offerte?700610ae-50d0-4037-96e0-de9503ee0031 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Crème Hydratante Visage SPF50 52 ml + Crème Lavante Hydratante 20 ml Offerte est un lot de deux soins hydratants pour les peaux normales à sèches.</p><ul><li><p>CeraVe Crème Hydratante Visage SPF50 52 ml : est une crème composée de 3 céramides essentiels, de niacinamide et d'acide hyaluronique qui nourrit, hydrate et aide à restaurer la barrière protectrice de la peau. Sa formule protège des rayons du soleil et a une protection SPF 50.</p></li></ul><ul><li><p>CeraVe Crème Lavante Hydra ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3433425473185</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1ecd59c3d5a1faed089c9780bb35866be0898067ab0e2a4ee89c4635b0e669be ]]></g:image_link>
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
<title><![CDATA[ Cerave Crème Lavante Hydratante Lot de 2 x 473 ml ]]></title>
<g:id>d7343843-86c0-4161-ab8a-2732d80c96b2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-crème lavante hydratante lot de 2 x 473 ml?d7343843-86c0-4161-ab8a-2732d80c96b2 ]]></link>
<g:price><![CDATA[ 2099.00 EUR ]]></g:price>
<description><![CDATA[ <p>CeraVe Crème Lavante Hydratante Lot de 2 x 473 ml&nbsp;est une crème lavante qui permet de nettoyer et hydrater la peau (visage et corps) sans altérer la barrière protectrice de la peau.<br>Idéale pour les peaux normales à sèches, sa formule contient 3 céramides essentiels dont la peau saine a besoin pour aider à renouveler et conserver sa barrière protectrice naturelle, et de l'acide hyaluronique.</p><p>Sans parfum. Hypoallergénique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3433425486345</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e07c587981c06db89ed7a08878055752d55896d22537070233fda9fddef810b2 ]]></g:image_link>
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
<title><![CDATA[ Cerave Face Crème Hydratante Visage 52ml + Crème Lavante 20ml ]]></title>
<g:id>ca8cfa94-a5fa-4290-b5b1-460daf1f6e0f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-face crème hydratante visage 52ml + crème lavante 20ml?ca8cfa94-a5fa-4290-b5b1-460daf1f6e0f ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développée avec des dermatologues, la Crème Hydratante Visage CeraVe nourrit, hydrate et apaise la peau au quotidien.</p><p>Ce soin visage et cou enrichi aux 3 céramides essentiels naturellement présents dans la peau et à l'acide hyaluronique restaure la barrière cutanée. Au niacinamide, actif anti-inflammatoire pour apaiser la peau. La technologie brevetée MVE, véritable prouesse technique et scientifique, contenu dans la Crème Hydratante Visage permet d'encapsuler les actifs et de les diffu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3433425473260</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a92b45ed224487b5e4293cb598ac3bc5433ee1acedd53799ae6599dd318178e9 ]]></g:image_link>
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
<title><![CDATA[ Cerave Gel Nettoyant Anti-Rugosités Lot de 2 x 473 ml ]]></title>
<g:id>81a3626b-56e8-4f81-9c6d-db18c428be62</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-gel nettoyant anti-rugosités lot de 2 x 473 ml?81a3626b-56e8-4f81-9c6d-db18c428be62 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lot de 2 Gel Nettoyant SA Anti-rugosités est formulé pour répondre aux besoins des peaux sèches et rugueuses. Développé en collaboration avec des dermatologues, ce gel nettoyant est enrichi en acide salicylique et en tensio-actifs doux pour exfolier en douceur et nettoyer la peau. Grâce à sa formule contenant les 3 céramides essentiels naturellement présents dans la peau et de l'acide hyaluronique, il contribue à restaurer la barrière cutanée, apportant ainsi confort et bien-être à la peau ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3433425486383</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b7838f3924db7e3246c5eb56d1f348868a84e157f34e8138122c2f9e7c322bc3 ]]></g:image_link>
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
<title><![CDATA[ Cerave Gel moussant anti-imperfections 236 ml ]]></title>
<g:id>325e1cd4-15c6-42ce-b227-04c3b6965f16</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-gel moussant anti-imperfections 236 ml?325e1cd4-15c6-42ce-b227-04c3b6965f16 ]]></link>
<g:price><![CDATA[ 1040.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce nettoyant à la texture gel moussant est dotée d’une Technologie Sébum Contrôle qui matifie et aide à éliminer l'excès de sébum. Sa formule haute tolérance testée sous contrôle dermatologique respecte une charte de formulation stricte pour convenir aux peaux sensibles : sans parfum, hypoallergénique, au pH physiologique, non comédogène et non desséchant. Formule Visage et Corps, convient pour une utilisation quotidienne matin et soir chez l'adolescent et l'adulte.</p>
<p>Cette formule conti ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875784054</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39a0a0163da72a7c7b91f8b6cd2a22513037a998677de013d551912dfb4da66c ]]></g:image_link>
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
<title><![CDATA[ Cerave Huile Lavante Huile Lavante  473 ml ]]></title>
<g:id>730410f1-5d69-4225-995d-c253b4685531</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-huile lavante huile lavante  473 ml?730410f1-5d69-4225-995d-c253b4685531 ]]></link>
<g:price><![CDATA[ 1370.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoie en douceur, relipide et hydrate les peaux normales à très sèches et les peaux à tendance atopique tout en restaurant la barrière cutanée sous la douche.</p>
<p>Développée avec des dermatologues, l'Huile Lavante Moussante Hydratante CeraVe nettoie en douceur, relipide et nourrit les peaux normales à très sèches et les peaux à tendance atopique. Véritable soin lavant, sa formule enrichie aux 3 céramides essentiels et à l'acide hyaluronique restaure la barrière cutanée et hydrate la peau ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875773447</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7140975aa4fe33c95f7150ddd95861aac931994329177e70ef2542ec08c247ee ]]></g:image_link>
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
<title><![CDATA[ Cerave Soin concentré anti-imperfections 40 ml ]]></title>
<g:id>5a6486fc-aef7-4add-8fd0-c17947d6be12</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-soin concentré anti-imperfections 40 ml?5a6486fc-aef7-4add-8fd0-c17947d6be12 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développé avec des dermatologues, le Soin Concentré Anti-Imperfections réduit les boutons et les imperfections des peaux à tendance acnéique, resserre les pores tout en restaurant la barrière cutanée. Formulé avec 3 céramides essentiels et un complexe AHA-BHA, mais aussi de la niacinamide et de l’acide hyaluronique pour hydrater et apaiser la peau. La technologie MVE assure une diffusion prolongée et une libération continue des actifs pour une hydratation toute la journée.</p>
<p>Le petit plu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875782357</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/82ca3ebe8410950c930d6b51718dea53aba1c110772f331665bc21f94910d71c ]]></g:image_link>
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
<title><![CDATA[ Cerave Sérum rétinol anti-marques 30 ml ]]></title>
<g:id>83ae834b-e9c5-4edc-9253-77b40ececeeb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-sérum rétinol anti-marques 30 ml?83ae834b-e9c5-4edc-9253-77b40ececeeb ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développé avec des dermatologues, le Sérum Rétinol Anti-Marques CeraVe aide à réduire l'apparence des marques post-imperfections, des pores et lisse et améliore le grain de peau. Formulé avec 3 céramides essentiels, du Rétinol encapsulé, un ingrédient reconnu pour accélérer le renouvellement cellulaire, de l’extrait de racine de réglisse, mais aussi de la niacinamide et de l’Acide hyaluronique pour hydrater et apaiser la peau. La technologie MVE assure une diffusion prolongée et une libératio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875829007</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ace492156069de1b1681f8e8a8c6fa93faeb691a8fb071425dc156289dbf385 ]]></g:image_link>
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
<title><![CDATA[ Cerave creme main reparatrice 50ml ]]></title>
<g:id>04c0707c-dc91-4b7c-8bf2-54ddd5296282</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerave-creme main reparatrice 50ml?04c0707c-dc91-4b7c-8bf2-54ddd5296282 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développée avec des dermatologues, la Crème Mains Réparatrice Cerave répare, apaise et hydrate intensément les mains sèches à très sèches.<br />Enrichie en céramides 1, 3 et 6-II : aident à restaurer la barrière protectrice de la peau.<br />Texture fondante non grasse, non collante.<br />Les mains sont douces et lisses.<br />Formule hypoallergénique et sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875597319</g:gtin>
<g:brand><![CDATA[ CERAVE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cbbc2ffbbf615fbca8f60fb24006aee870a9916a2813bf389f51b7d2187c3179 ]]></g:image_link>
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
<title><![CDATA[ Ceruspray Hygiène de l'oreille 50ml ]]></title>
<g:id>1ff384d8-20fd-40ce-9e51-33d4e1df5a01</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/ceruspray-hygiène de l'oreille 50ml?1ff384d8-20fd-40ce-9e51-33d4e1df5a01 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour l'hygiène de l'oreille, la pharmacie des drakkars vous propose Céruspray un dispositif médical comprenant une solution de lavage qui permet l'élimination des résidus de cérumen et permet ainsi d'éviter l'apparition de bouchon.</p>
<p>Conseils d'utilisation de Cérumen pour les personnes sujettes au bouchon de cérumen :</p>
<p>mettre une pulvérisation dans chaque oreille 2 à 3 fois par semaine.</p>
<p>En présence d'un bouchon de cérumen après l'application de gouttes cérumenolytique pulvér ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000439</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65702cafde49fe9bfe6fe299c71db071e27bb0fb6edd7a04f30d509a6eeff90e ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE ET PROTECTIONS AUDITIVES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cerveau Clair 60 Comprimés ]]></title>
<g:id>6a67a36f-5b33-4a6b-ae50-418e866d18f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cerveau-clair 60 comprimés?6a67a36f-5b33-4a6b-ae50-418e866d18f0 ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <p>New Nordic Cerveau Clair 60 Comprimés est un complément alimentaire à base de noix, grenade, thé vert, écorce de pin, origan, iode et vitamines B pour les performances mentales et la mémoire.</p>
<p>Les actifs contenus dans la formule de ce complément alimentaire contribuent à la forme mentale car ils agissent sur les performances et les fonctions cognitives comme la mémoire, l'attention et la concentration.</p>
<p>Sa formule contient des extraits naturels de noix, de grenade, d'écorce de pin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401529518637</g:gtin>
<g:brand><![CDATA[ NEW NORDIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c6e6eec1a9be2c5013b90347cc07946586730c3f96e657c24bf35067a532ea17 ]]></g:image_link>
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
<title><![CDATA[ Cetaphil Galderma Lotion Nettoyante 470 ml ]]></title>
<g:id>8812cdfc-cb34-462a-a6cc-86bdbd429e9d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cetaphil-galderma lotion nettoyante 470 ml?8812cdfc-cb34-462a-a6cc-86bdbd429e9d ]]></link>
<g:price><![CDATA[ 1180.00 EUR ]]></g:price>
<description><![CDATA[ <p>Galderma Cetaphil Lotion Nettoyante 470 ml est un nettoyant à base de glycérine, vitamine B3 et provitamine B5, élaboré pour éliminer en douceur saletés, maquillage et impuretés tout en préservant la barrière naturelle d'hydratation de la peau.</p><p>Sa formule convient aux peaux sensibles, sèches à normales, et protège contre les 5 signes de la peau sensible : barrière cutanée affaiblie, irritations, sécheresse, rugosité, tiraillements.</p><p>Sans savon, sans parfum. Non comédogène.<br>Testé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3499320014113</g:gtin>
<g:brand><![CDATA[ CETAPHIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e8deaaad2de021a39afd4ef1f262dbf84ce753c13e4ba1a412b598741d37ac5b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Coffret Découverte Thé & Infusion 20 sachets ]]></title>
<g:id>1924d49e-d1c1-4629-8609-326e8e11a065</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-coffret découverte thé & infusion 20 sachets?1924d49e-d1c1-4629-8609-326e8e11a065 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette sélection de thés et d’infusions permet de découvrir la variété des assemblages CHOICE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000407</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dbaa796b13e806961b0a7865a39ceecab645631bef1185cd78f6f4a040987b0e ]]></g:image_link>
<g:product_type><![CDATA[ TISANERIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Infusion Bio Camomille Douce 17 sachets ]]></title>
<g:id>bd5c3334-c48b-4b1c-8d71-e0ce4d1b432e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-infusion bio camomille douce 17 sachets?bd5c3334-c48b-4b1c-8d71-e0ce4d1b432e ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Camomille Douce. Un véritable plaisir. Pour un moment de détente et de douceur, gorgée après gorgée, grâce à une élégante note de vanille et à d’autres plantes subtiles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000476</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7243c340f4b5dc132c825bfe533df515d2ea1102a584187601c1a4af5b90a96 ]]></g:image_link>
<g:product_type><![CDATA[ TISANERIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Infusion Bio Fenouil Anis Cumin des près 17 sachets ]]></title>
<g:id>1e66636f-8411-4aa3-ae8e-3adafe33c2e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-infusion bio fenouil anis cumin des près 17 sachets?1e66636f-8411-4aa3-ae8e-3adafe33c2e0 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Fenouil Anis Cumin des prés. Un mélange équilibré de plantes, associé à de la badiane pour un bien-être et une légèreté absolus.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000513</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f4a3a83a1fff717c3314bc550182e3256558a17f38c9dcd369903ef7f3acd79 ]]></g:image_link>
<g:product_type><![CDATA[ TISANERIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Infusion Bio Menthe Sauvage 17 sachets ]]></title>
<g:id>e1faded6-112f-4c62-8b34-00eae5d2cd18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-infusion bio menthe sauvage 17 sachets?e1faded6-112f-4c62-8b34-00eae5d2cd18 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Menthe Sauvage. Un mélange frais et stimulant de menthe poivrée, menthe verte et menthe velue. Une infusion qui donne envie d’aller de l’avant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000490</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d2df003a50dfd8e3d7e38b81a602f72922ed86f063ae00d43dabeeed7055a672 ]]></g:image_link>
<g:product_type><![CDATA[ TISANERIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Infusion Bio Rooibos Vanille 17 sachets ]]></title>
<g:id>6c39b0a5-f501-4db6-a23c-4ed56b1e9094</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-infusion bio rooibos vanille 17 sachets?6c39b0a5-f501-4db6-a23c-4ed56b1e9094 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une plante unique venue d’Afrique du Sud. L’arôme doux et légèrement sucré du rooibos est souligné par la vanille – une combinaison parfaite.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000575</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7de4af8333955567edee8a34cef29bd9c211ae7eadd0b14918bafb6bb9a9075c ]]></g:image_link>
<g:product_type><![CDATA[ TISANERIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Infusion Bio Soirée Tranquille 17 sachets ]]></title>
<g:id>0a2efb7b-773c-4e9a-b5b4-0d0475c19b38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-infusion bio soirée tranquille 17 sachets?0a2efb7b-773c-4e9a-b5b4-0d0475c19b38 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Soirée Tranquille. Un mariage légèrement fruité de mélisse et de citronnelle, associé à de douces notes de camomille et au merveilleux parfum de la lavande – le plaisir à l’état pur pour un moment de détente absolu en soirée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000452</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d71aad588768802bb06f6e2bfea6a2daf506dd2b675b3392a7124ea90475d04e ]]></g:image_link>
<g:product_type><![CDATA[ TISANERIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Thé Blanc Bio Fleur de Sureau 17 sachets ]]></title>
<g:id>6804d5ec-3a9c-445c-a65e-f9ba113cd610</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-thé blanc bio fleur de sureau 17 sachets?6804d5ec-3a9c-445c-a65e-f9ba113cd610 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Thé Blanc Fleur de Sureau. Le mariage unique et enivrant d’un thé blanc haut de gamme à de douces fleurs de sureau. Soigneusement récolté à la main, pour un goût particulièrement élégant et légèrement floral.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000438</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cdbc0f356f3cf63c10e29f55ad71364ec6960119563c0d28dc1d197b97eeadb6 ]]></g:image_link>
<g:product_type><![CDATA[ THE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Thé Noir Bio Darjeeling 17 sachets  ]]></title>
<g:id>a65b0bb7-959d-4c71-b4b1-d765322106f4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-thé noir bio darjeeling 17 sachets ?a65b0bb7-959d-4c71-b4b1-d765322106f4 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Darjeeling. Ses notes fruitées discrètes confèrent à ce thé un goût particulièrement corsé. Son léger arôme floral lui donne une belle vivacité.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000612</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/894ff3d9ffb058cbd8b802601e0b112a2270972b5f05694f3e791839658ae716 ]]></g:image_link>
<g:product_type><![CDATA[ THE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Thé Noir Bio Earl Grey 17 sachets ]]></title>
<g:id>733e3b7f-503b-4ed6-8695-0d6c07c4020e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-thé noir bio earl grey 17 sachets?733e3b7f-503b-4ed6-8695-0d6c07c4020e ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Earl Grey. Un thé noir d’excellence récolté à la main, associé à une précieuse huile essentielle de bergamote pour un thé légèrement amer aux notes d’agrumes raffinées.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000551</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/14e0487e2969dd851496cca3f6852667e9dc088225ad9dc53c039aa5a45e4478 ]]></g:image_link>
<g:product_type><![CDATA[ THE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Thé Noir Bio English Breakfast 17 sachets ]]></title>
<g:id>f1ad7daf-5f46-4210-b001-e1703d464367</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-thé noir bio english breakfast 17 sachets?f1ad7daf-5f46-4210-b001-e1703d464367 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE English Breakfast. Un thé du matin corsé, au goût puissant et légèrement malté. Soigneusement récolté à la main.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000636</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c159cf5bb827f5b2ded51da156b0381234ede70a1583ddfa99ea89ac34d4ddc ]]></g:image_link>
<g:product_type><![CDATA[ THE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Thé Vert Bio Jasmin 17 sachets ]]></title>
<g:id>ff20aa1b-3b78-4b9e-ac67-9a9e8745e6b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-thé vert bio jasmin 17 sachets?ff20aa1b-3b78-4b9e-ac67-9a9e8745e6b1 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Jasmin. Le parfait équilibre d’un thé vert d’excellence et de fleurs de jasmin de la meilleure qualité. Soigneusement récolté à la main, pour un goût particulièrement doux et floral.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000537</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/05e0e8526e2bec1b54d0632204bca736596986c56e7fe9fc0086169c2d1f9561 ]]></g:image_link>
<g:product_type><![CDATA[ THE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Choice Thé Vert Bio Sencha 17 sachets ]]></title>
<g:id>4e85f14c-4c66-478f-9856-a308f0cb6cb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/choice-thé vert bio sencha 17 sachets?4e85f14c-4c66-478f-9856-a308f0cb6cb2 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez CHOICE Sencha. Pur, original et inimitable. Soigneusement récolté à la main et séché délicatement pour un goût équilibré et doux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4012824000650</g:gtin>
<g:brand><![CDATA[ CHOICE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f4b56823fe79e4152979c38844c297479481230d4efddda48c30e9e73d79c729 ]]></g:image_link>
<g:product_type><![CDATA[ THE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cholestil 30 Gélules ]]></title>
<g:id>03444cb5-c939-4efa-8e32-51a2e26a5420</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cholestil-30 gélules?03444cb5-c939-4efa-8e32-51a2e26a5420 ]]></link>
<g:price><![CDATA[ 1270.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CHOLESTIL® <span> </span>Nouvelle formule est un complément alimentaire à base de Levure de riz rouge, Nattokinase, extrait d’ail, Coenzyme Q10 (Ubiquinol) et extrait de Grenade, pour le maintien d’une cholestérolémie normale.</span></p>
<p></p>
<p>CHOLESTIL®  peut être recommandé pour les personnes :</p>
<p><span><span><b>•</b></span> souhaitant contrôler leur taux de cholestérol et de lipides sanguins</span></p>
<p><span><span><b><span><span>•</span> </span></b>ayant des antécédents < ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225641343</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f59d32d55a6f4fab5769e3aba975752a6e7caa14cf594006ec7caf5a7e362055 ]]></g:image_link>
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
<title><![CDATA[ Chondro- Aid Silicium Global + 480ml ]]></title>
<g:id>2d877f09-03b3-431a-8d9e-e9752bef22bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondro-aid silicium global + 480ml?2d877f09-03b3-431a-8d9e-e9752bef22bb ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous souhaitez renforcer votre ossature et maintenir une bonne mobilité de vos articulations ?</p>
<p>Le complément alimentaire CHONDRO-AID SILICIUM GLOBAL+, est une source concentrée en silicium hautement biodisponible grâce à l’acide orthosilicique, associée à des plantes et du manganèse qui contribuent à reminéraliser et renforcer vos articulations et votre ossature.</p>
<ul><li>La prêle aide à la reminéralisation osseuse.</li>
<li>L’ortie aide à renforcer l’appareil locomoteur et à mainte ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503708</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/369498b1bc8356031b37085615bc3368d4cd26cfdbbe53162759f9356683d3d9 ]]></g:image_link>
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
<title><![CDATA[ Chondro-Aid Flash Crème 60 ml ]]></title>
<g:id>13c6564a-5f3c-48e8-bdb8-945e8a218aa5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondro-aid flash crème 60 ml?13c6564a-5f3c-48e8-bdb8-945e8a218aa5 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Chondro-Aid Flash Crème 60 ml est une crème qui permet un massage facile et efficace grâce à sa formule hydratante, un parfum agréable et une pénétration rapide.<br />Sa formule complète est concentrée en CBD appelé cannabidiol, actif du chanvre Cannabis sativa L. Elle contient aussi de l'huile essentielle de gaulthérie et des extraits d'arnica et de boswellia.</p>
<p>Elle procure un double effet :</p>
<ul><li>une fraîcheur pour une sensation apaisante immédiate,</li>
<li>une chale ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503463</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/437d25015d02e1513fe049be30aed19d167881143f1cd0ab3926745bc9f9596b ]]></g:image_link>
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
<title><![CDATA[ Chondro-Aid Flash Roll-On 60 ml ]]></title>
<g:id>8abe96c8-a032-47fe-8441-1b042839f6b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondro-aid flash roll-on 60 ml?8abe96c8-a032-47fe-8441-1b042839f6b4 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Chondro-Aid Flash Roll-On 60 ml est un produit qui contribue à la détente musculaire avant et/ou après un effort physique. Il améliore la sensation d'apaisement du massage, grâce à sa formule ultra complète à base :</p>
<ul><li>de cannabidiol, actif du chanvre Cannabis sativa L.,</li>
<li>d'arnica, aux propriétés tonifiantes et stimulantes,</li>
<li>de 5 huiles essentielles aux propriétés calmantes : galuthérie, lavandin abrial, pin sylvestre, katafray et eucalyptus citronné.</li>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503470</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a1abc3f29115c77abc9e6625bdf685975dc3922ed1461b5dfeedbb12b8fb44c7 ]]></g:image_link>
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
<title><![CDATA[ Chondro-Aid® 100 % Articulation 60 Gélules ]]></title>
<g:id>5ea42420-4b09-46f4-bcd2-4e208ccb21bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondro-aid® 100 % articulation 60 gélules?5ea42420-4b09-46f4-bcd2-4e208ccb21bf ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Grâce à sa formule complète, Chondro-Aid® 100% Articulation prend en charge l’ensemble de l’articulation et agit à plusieurs niveaux :</p>
<ul><li><span>LE CARTILAGE :</span>La vitamine C participe à la formation du collagène pour assurer le bon fonctionnement du cartilage.</li>
<li><span>LE MUSCLE :</span> La vitamine D3 contribue au maintien d’une fonction musculaire saine.</li>
<li><span>L’OS :</span> La vitamine D3 aide à maintenir une ossature solide.</li>
<li><span>LES TENDONS ET LES LI ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503432</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5523aacbfddb888c2c48d6832f7a33f0e1f7866e96072b52fbc28f411afad616 ]]></g:image_link>
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
<title><![CDATA[ Chondro-Aid® Flash 10 Capsules ]]></title>
<g:id>8fe7aec8-4abf-43cb-9144-2cb838b00fa0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondro-aid® flash 10 capsules?8fe7aec8-4abf-43cb-9144-2cb838b00fa0 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p>Une activité physique intense ou occasionnelle, ou bien des postures contraignantes peuvent être à l’origine d’inconfort. Il est alors important de maintenir le système musculo-squelettique en bonne santé.</p>
<p>Chondro-Aid® Flash Caps est une <span>solution à base d’actifs 100% d’origine végétale</span>, respectueuse de l’équilibre physiologique du corps. Son <span>complexe innovant</span> a démontré scientifiquement sa rapidité d’action.</p>
<p>La formule de CHONDRO-AID® FLASH Caps contien ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503456</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fdb5872a22a0fba9e4821dea0e9ecf04e8ce26faff432a34ba80b26d035a00bd ]]></g:image_link>
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
<title><![CDATA[ Chondrostéo Collagène Marin 280g ]]></title>
<g:id>576960c0-5a5c-40e7-bcc2-65f99980bc09</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondrost-o collagène marin 280g?576960c0-5a5c-40e7-bcc2-65f99980bc09 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CHONDROSTÉO+ COLLAGÈNE MARIN</span> est un complément alimentaire dédié aux articulations avec des constituants naturellement présents dans le cartilage, tendons et ligaments dont du peptide de collagene hydrolysé d'origine marine.<br /><br />Le mauvais fonctionnement articulaire (genoux, hanches, dos...) affecte la qualité de vie au quotidien : sensibilité accrue, perte de souplesse, de mobilité...<br />Ces atteintes peuvent être dues à la pratique d'un sport, les changements de saison ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760155217261</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8a5f2518b709b1faa0fde43ec915e7d65ac77f337b9d02cfc1ba6145b1681452 ]]></g:image_link>
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
<title><![CDATA[ Chondrostéo Fort Roll-on 50 ml ]]></title>
<g:id>42777a13-eff4-46d0-bd7b-b1f1c2d0fc16</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chondrost-o fort roll-on 50 ml?42777a13-eff4-46d0-bd7b-b1f1c2d0fc16 ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Granions Chondrostéo Fort Roll-on 50 ml est un roll-on de massage anti-douleur qui soulage et apaise immédiatement les douleurs articulaires, post-traumatiques et musculaires grâce à l'action mécanique de la bille de massage associée à l'effet froid intense qu'il procure. Il est particulièrement indiqué en cas de contractures, foulures, entorses, contusions, traumatismes divers, pour limiter la diffusion de l'œdème.</p>
<p>Non gras, il ne tache pas et ne colle pas.</p>
<p>Sans conservateur aj ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518681012580</g:gtin>
<g:brand><![CDATA[ LABORATOIRE DES GRANIONS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cf3c08e9d0452524be1c2a55b7e47579ab5a402e8954e6a797c2fffc5796a2f ]]></g:image_link>
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
<title><![CDATA[ ChronoDorm Flash Spray Sublingual 30 ml ]]></title>
<g:id>000e05a9-7b6d-49d6-b2c2-ab9e8b2be4e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chronodorm-flash spray sublingual 30 ml?000e05a9-7b6d-49d6-b2c2-ab9e8b2be4e2 ]]></link>
<g:price><![CDATA[ 960.00 EUR ]]></g:price>
<description><![CDATA[ <p>ChronoDorm Flash Spray Sublingual 30 ml est un spray à l'arôme naturel qui associe de la mélatonine et 3 extraits de plantes : oranger, mélisse et camomille.<br />Sans dépendance et sans accoutumance, sa formule unique convient aux personnes sujettes à des difficultés d'endormissement ou au décalage horaire, avec un dosage en mélatonine adaptable en fonction du besoin et de la situation.</p>
<p>Son format spray permet une action rapide et peut s'emporter facilement partout.</p>
<p>Sans édulco ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700399101162</g:gtin>
<g:brand><![CDATA[ IPRAD SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9b5421d4bf5e0caa16bec91b8ddaec183c500897fa9b56fcfda8f329a64501f0 ]]></g:image_link>
<g:product_type><![CDATA[ STRESS ET SOMMEIL ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ ChronoDorm Mélatonine 1 mg 30 Comprimés Sublinguaux ]]></title>
<g:id>035081fb-5072-4a9e-b07b-22b733e992c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/chronodorm-mélatonine 1 mg 30 comprimés sublinguaux?035081fb-5072-4a9e-b07b-22b733e992c8 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>ChronoDorm Mélatonine 1 mg 30 Comprimés Sublinguaux est un complément alimentaire à base de Mélatonine qui s'administre par voie sublinguale (comprimé à faire fondre sous la langue). Il contribue à réduire le temps d'endormissement chez les personnes ayant des difficultés à trouver le sommeil.</p>
<p>Chaque comprimé de ChronoDorm contient 1 mg de Mélatonine qui est le principal actif de ce complément alimentaire. La Mélatonine est une hormone naturelle produite par l'organisme qui régule l'ho ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560082623</g:gtin>
<g:brand><![CDATA[ IPRAD SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02353c4c7e2b0c5f2c7b587ab93a591e07c8160eb0611451ce4b7821aa2bf11e ]]></g:image_link>
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
<title><![CDATA[ CicaBiafine Baume Multi-Réparation 50 ml ]]></title>
<g:id>836e7ef6-1a11-4210-b649-9580ab799f49</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-baume multi-réparation 50 ml?836e7ef6-1a11-4210-b649-9580ab799f49 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>CicaBiafine Baume Multi-Réparation 50 ml est un baume S.O.S qui convient aux peaux de toute la famille (enfants à partir de 3 ans), même à tendance atopique.<br />Il convient aux peaux extra-sèches, abîmées ou fragilisées : sujettes aux gerçures, irritations, égratignures, rougeurs. Il vient apaiser les irritations post-épilation ou rasage chez l'adulte.<br />Sa formule baume, riche en émollients et glycérine est hydratante et apaisante :</p>
<ul><li>Contient de l'acide hyaluronique, actif re ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574661255927</g:gtin>
<g:brand><![CDATA[ JOHNSON BEAUTÉ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a6b5dedb022b5ac394d5a570b7810cf4308c1f13bdec35c283e0a0072f6dfab ]]></g:image_link>
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
<title><![CDATA[ CicaBiafine Douche Crème Anti-Irritations Apaisante 1 L ]]></title>
<g:id>2cdf1918-253e-4e6a-bdf2-0d25cd3a752c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-douche crème anti-irritations apaisante 1 l?2cdf1918-253e-4e6a-bdf2-0d25cd3a752c ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>CicaBiafine Douche Crème Anti-Irritations Apaisante 1 L est une crème lavante qui nettoie la peau en douceur et soulage les sensations de démangeaisons des peaux extra-sèches à tendance atopique (sensations de démangeaisons et irritations).</p>
<p>Sa formule est extra douce, enrichie en allantoïne et glycérine :</p>
<ul><li>elle nettoie la peau en douceur, sans l'altérer,</li>
<li>elle soulage les sensations de démangeaisons dès la 1ère douche,</li>
<li>elle hydrate intensément durant 24 heur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574661618883</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f41913129999fecbd8971fe1553dad386bd2e4ee3151e2d74dd504a4abcdfdd8 ]]></g:image_link>
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
<title><![CDATA[ CicaManuka Crème Pieds Réparatrice Bio 75 ml ]]></title>
<g:id>5f219056-26a5-4ddc-8ae5-fa89918bc84f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicamanuka-crème pieds réparatrice bio 75 ml?5f219056-26a5-4ddc-8ae5-fa89918bc84f ]]></link>
<g:price><![CDATA[ 1210.00 EUR ]]></g:price>
<description><![CDATA[ <p>CicaManuka Crème Pieds Réparatrice Bio 75 ml est une crème pour pieds secs à très secs et pour les talons fendillés. Elle réduit les callosités et aide à prévenir leur réapparition pour laisser la peau douce et souple.<br />Le miel de Manuka IAA15+ confère une action antibactérienne et favorise la réparation des couches superficielles de la peau.<br />Enrichi en beurre de karité Bio et en aloe vera Bio, ce soin favorise la réparation cutanée, nourrit et apaise intensément.</p>
<p>Texture non  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760123183178</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e965473a07607513d5c4987454c9c2576dfc5474cb267dd7e374283a2f54bc39 ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine Baume Hydratant Quoditien 300ml ]]></title>
<g:id>e7c0499d-1a37-4ce7-b81a-335ca38c4eb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-baume hydratant quoditien 300ml?e7c0499d-1a37-4ce7-b81a-335ca38c4eb2 ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <p>CICABIAFINE Enrichi en glycérine et en vitamine E, notre baume :<br />- Hydrate intensément et en profondeur* pendant 72h - Aide à restaurer la barrière cutanée dès la 1ère application<br />- Protège et renforce la peau Jour après jour, il laisse la peau nourrie, douce et apaisée.</p>
<p>* Couches supérieures de l'épiderme FORMULE HAUTE TOLÉRANCE DÉVELOPPÉE SOUS CONTRÔLE MÉDICAL ET TESTÉE CLINIQUEMENT Sans huile minérale. Convient aux peaux sensibles de toute la famille (dès 3 ans). Texture g ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574661785462</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf7a51935551f43103cc199f4a1dcc3710d6563d58a0df64235c37f5140ffb79 ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine Crème Hydratante Corporelle Anti-Irritations 200 ml ]]></title>
<g:id>598a15e5-59ff-436b-9157-ba643a03f75b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-crème hydratante corporelle anti-irritations 200 ml?598a15e5-59ff-436b-9157-ba643a03f75b ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
<div id="tabs-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom">Crème réparatrice pour apaiser les mains sèches et/ou abîmées, qui protège votre peau, la rend plus douce et plus souple. Texture fondante qui n'accroche pas pour une application facile.</div>
<div></div>
</div>
<div class="my_tag_info_area"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660504279</g:gtin>
<g:brand><![CDATA[ JOHNSON BEAUTÉ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b2ee193b5fd71ba4aa027cfcba322b3322c8c2c1f06fa9dd1919d2e63b8b1ec9 ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine Douche Lavante Reconstituante Apaisante 1Litre ]]></title>
<g:id>4635af32-511b-4b0e-9273-ff8938bec829</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-douche lavante reconstituante apaisante 1litre?4635af32-511b-4b0e-9273-ff8938bec829 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette <span>douche lavante Cicabiafine</span> est conseillée en soin de support aux patients sous traitement pour un cancer : chimiothérapie, radiothérapie, immunothérapie, thérapie ciblée, transplantation de cellules souches. Elle convient particulièrement aux <span>peaux très sèches</span>, xéreuses, sujettes au prurit (démangeaisons) ou encore aux rashes cutanés. En effet, son rôle est de nettoyer la peau avec un maximum de douceur, d'apaiser les sensations d'inconfort, de préserver et ren ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574661663807</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5954b81c63b3171b4924aebf7a6c9417c96aa21b8484884fbb02a5f76515655b ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine baume corps 200ml ]]></title>
<g:id>035ae160-096c-42b1-99d6-c495e39c119a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-baume corps 200ml?035ae160-096c-42b1-99d6-c495e39c119a ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce soin corporel Hydrate immédiatement et répare intensément les peaux très sèches.</p>
<p>Même les peaux craquelées redeviennent douces et lisses.</p>
<p>Développée sous contrôle médical, sa formule est enrichie en acide hyaluronique, reconnue par des médecins pour ses propriétés réparatrices.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660450705</g:gtin>
<g:brand><![CDATA[ JOHNSON BEAUTÉ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/72ce63346ab1e3d3588166c34d9c5bcda81a999befe00a3a52c1786e1f85b54c ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine baume hydratant 400ml ]]></title>
<g:id>72b1cd87-dacf-4286-8ea1-75fcad462c55</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-baume hydratant 400ml?72b1cd87-dacf-4286-8ea1-75fcad462c55 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Baume Hydratant Corporel Cicabiafine est enrichi en actifs surgras permettant de nourrir intensément la peau.</p>
<p>Sa formule ultra riche hydrate et répare intensément les peaux très sèches. Les peaux ultra desséchées et squameuses redeviennent douces et lisses.</p>
<p>Développée sous conrôle médical, sa formule est enrichie en acide hyaluronique, actif reconnu cliniquement pour ses propriétés réparatrices.</p>
<p>Sa texture fondante et non grasse pénètre rapidement et ne colle pas. Son  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660502510</g:gtin>
<g:brand><![CDATA[ JOHNSON BEAUTÉ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/99744ca72ebc771531512abab34cd80b84ac5acbbbffa6c583ce0376cc6d3059 ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine crème pieds secs anti-fendillements 100 ml ]]></title>
<g:id>53563535-90a9-4f7b-aae6-fc60edab323a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-crème pieds secs anti-fendillements 100 ml?53563535-90a9-4f7b-aae6-fc60edab323a ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème réparatrice des pieds secs à rugueux.</p>
<ul><li><span>Hydrate</span> les pieds pendants 24h</li>
<li><span>Apaise</span> et nourrit intensément</li>
<li><span>Prévient</span> la corne et les callosités : la peau devient progressivement plus lisse et retrouve sa souplesse</li>
</ul><p>Formule hypoallergénique, développée sous contrôle médical et testée cliniquement</p>
<p>Développé pour les pieds très secs à rugueux. Convient aux adultes.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574661257365</g:gtin>
<g:brand><![CDATA[ BIAFINE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7acc6b093326bc433346f11259859206f5b6afb23f6ae35a5e59cf6b998f0e16 ]]></g:image_link>
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
<title><![CDATA[ Cicabiafine lait hydratant corporel 200ml ]]></title>
<g:id>fa2949cd-3af2-42f9-9dc9-6d5e9eae8b58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicabiafine-lait hydratant corporel 200ml?fa2949cd-3af2-42f9-9dc9-6d5e9eae8b58 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait hydratant corporel Cicabiafine est un soin hydratant quotidien qui répare et protège les peaux sèches (naturellement sèches ou ou provoqué par le vent, le froid, le chauffage, l'eau calcaire...).</p>
<p>Même les peaux tiraillées ou rugeuses redeviennent douces et lisses.</p>
<p>Développée sous contrôle médical, la formule du lait hydratant corporel biafine cicabiafine est enrichie en acide hyaluronique, actif reconnu par des médecins pour ses propriétés réparatrices.</p>
<p>Ce lait, s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660450743</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c7741a9c5cd9a3b385f4b042bd5aea98cb28c6aee605866fac70d63f1eed1c9 ]]></g:image_link>
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
<title><![CDATA[ Cicaleïne Film Isolant Doigts-Talons 5,5 ml ]]></title>
<g:id>3a6711af-dcc6-439c-bdf0-570da6426119</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicale-ne film isolant doigts-talons 5,5 ml?3a6711af-dcc6-439c-bdf0-570da6426119 ]]></link>
<g:price><![CDATA[ 830.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Akileïne Cicaléine Film Isolant Doigts-Talons 5,5 ml est un soin qui forme un film protecteur souple et transparent sur les zones de peau traditionnellement sujettes aux agressions extérieures (froid, humidité...) comme le bout des doigts. Il aide à préserver l'intégrité cutanée et évite la formation de zones kératosiques dues aux frottements ou aux chaussures.</p>
<p>Ce flacon permet 150 applications.</p>
</div>
<div c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000190</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b32f5c1f2517f11f0ee6a5dcab98441973db5c6b159823ddc138ae50ff3b2aba ]]></g:image_link>
<g:product_type><![CDATA[ SOINS ET CONFORT DES PIEDS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cicaleïne Fissures & Crevasses Baume Mains Doigts 30 ml ]]></title>
<g:id>51443eb5-94b6-43de-9225-55d7548ddacb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicale-ne fissures & crevasses baume mains doigts 30 ml?51443eb5-94b6-43de-9225-55d7548ddacb ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fissures et crevasses. Hyperkératoses des pieds et/ou des mains. <br /><br />Le Soin Restructurant Cicaléine favorise la cicatrisation des fissures et crevasses des mains et des pieds. <br /><br />Action hydratante immédiate. Calme l'inflammation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323037631410</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/515acba8d3a54a73f12f0e15f1f56e154a28d452c7a988999b9ea5d56ef390fa ]]></g:image_link>
<g:product_type><![CDATA[ SOINS ET CONFORT DES PIEDS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cicamanuka Baume corps Hydratant IAA10+ 200ml ]]></title>
<g:id>82644040-c6e1-4424-9f6c-eab11086b247</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicamanuka-baume corps hydratant iaa10+ 200ml?82644040-c6e1-4424-9f6c-eab11086b247 ]]></link>
<g:price><![CDATA[ 2340.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Baume Corps Réparateur certifié Biologique au Miel de Manuka IAA®10＋ répare, nourrit et apaise les peaux sèches, sujettes aux démangeaisons.⁣</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3428883669508</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e8a39d807e568d416199a64a699e58c10a470ba0bddaa67f75a7e0ef2b5764b6 ]]></g:image_link>
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
<title><![CDATA[ Cicamanuka Soin lèvres réparateur IAA15+ 15ml ]]></title>
<g:id>f336cdf6-88c2-4b4a-babd-4ddad1ef6be2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicamanuka-soin lèvres réparateur iaa15+ 15ml?f336cdf6-88c2-4b4a-babd-4ddad1ef6be2 ]]></link>
<g:price><![CDATA[ 880.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Notre Soin Lèvres Réparateur certifié biologique est spécialement conçu pour les lèvres gercées, irritées et desséchés.</span><br /><br /><span>Basée près d’Aix-en-Provence, tous nos produits sont fabriqués et conditionnés en France </span><span class="_5mfr"><span class="_6qdm">????????</span></span></p>
<p><span>Tous nos produits sont ainsi composés à 100% d’ingrédients d’origine naturelle et certifiés par un organisme indépendant reconnu.</span></p>
<div id="kurato_extension_modal">< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3428883668501</g:gtin>
<g:brand><![CDATA[ CICAMANUKA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/89c0a4b7bad35d1480ef708821594e56c28b0f0129940807e8c17b027e02f915 ]]></g:image_link>
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
<title><![CDATA[ Cicamanuka Soins mains reparateur IAA15 50ml ]]></title>
<g:id>32313d96-82f4-4988-9331-5d811ec1bf69</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicamanuka-soins mains reparateur iaa15 50ml?32313d96-82f4-4988-9331-5d811ec1bf69 ]]></link>
<g:price><![CDATA[ 960.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce soin expert des peaux sèches a été spécialement formulé pour hydrater intensément les mains. Il protège les zones fragilisées et favorise la réparation cutanée des peaux agressées !⁣</span></p>
<p><span><span>Tous nos produits sont ainsi composés à 100% d’ingrédients d’origine naturelle et certifiés par un organisme indépendant reconnu.⁣</span></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3428883667504</g:gtin>
<g:brand><![CDATA[ CICAMANUKA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94ed03260d00a1fa34c01dd323105bcd91ab2e915262f964bfd62f1b73575644 ]]></g:image_link>
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
<title><![CDATA[ Cicamanuka crème réparatrice IAA10+ 40ml ]]></title>
<g:id>c411400a-6bac-4fc9-b3c4-452348426125</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicamanuka-crème réparatrice iaa10+ 40ml?c411400a-6bac-4fc9-b3c4-452348426125 ]]></link>
<g:price><![CDATA[ 1380.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>La Crème Réparatrice IAA®10＋ certifiée Biologique Ecocert, au secours des peaux abîmées, irritées, desséchées*.⁣</span><br /><span>⁣</span><br /><span>Avec sa haute concentration en miel, elle promet de réparer, assainir et apaiser les peaux de toute la famille**.⁣</span></span></p>
<p><span>Chez CicaManuka nous avons fait le choix de vous proposer un produit non pas avec 40% d’eau mais avec 40% de Miel de Manuka IAA®10＋ ! La Crème Réparatrice vous offre ainsi une merveilleuse tex ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3428883666507</g:gtin>
<g:brand><![CDATA[ CICAMANUKA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73c28a44a2a949fc1421414c7793f4156d7ec6294d6f46b15ce93d4d975a122e ]]></g:image_link>
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
<title><![CDATA[ Cicastim Crème Réparatrice 20 ml ]]></title>
<g:id>b004fffa-253d-4cff-bac4-8ef533f6bb93</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicastim-crème réparatrice 20 ml?b004fffa-253d-4cff-bac4-8ef533f6bb93 ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Laboratoire ACM Cicastim Crème Réparatrice 20 ml est une crème qui assainit, apaise et calme les peaux abîmées et irritées et les échauffements cutanés. Elle restaure rapidement le confort de l'épiderme, soulage les zones abîmées, irritées et permet une protection optimale.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760095250540</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d169b58ff49e94a5c3579915108fb94a67ce07cb4c9e62e47bf48674ffee7da ]]></g:image_link>
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
<title><![CDATA[ Cicastim.A Crème Apaisante 20 ml ]]></title>
<g:id>6ab21598-58c2-4108-bdf7-5d1172f2d522</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicastim-a crème apaisante 20 ml?6ab21598-58c2-4108-bdf7-5d1172f2d522 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Laboratoire ACM Cicastim.A Crème Apaisante 20 ml est un soin qui apaise les sensations d'inconfort de la peau. Elle favorise l'élimination des pigments responsables de la coloration bleue suite à des chocs ou des coups. Elle s'utilise également en prévention ou après une intervention esthétique ou chirurgicale.</p>
<p>Sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760095251295</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8f9a6d4eddaef83e4c92c535c5c165e4798bec2abcb3b112c8d88d6aae9d501 ]]></g:image_link>
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
<title><![CDATA[ Cicatridine 10 Ovules Vaginaux ]]></title>
<g:id>1127298f-ee90-4511-a0ea-7ee92f1d5200</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicatridine-10 ovules vaginaux?1127298f-ee90-4511-a0ea-7ee92f1d5200 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cicatridine 10 Ovules Vaginaux est un dispositif médical aux propriétés réparatrices, hydratantes et favorisant la cicatrisation. C'est un traitement adjuvant des processus de réparation des états atrophiques et dystrophiques de la muqueuse vaginale. Il favorise la cicatrisation en post-partum, en chirurgie gynécologique, en cas de dystrophie consécutive à la chimiothérapie et aux radiations ionisantes. Il traite également la sécheresse vaginale de nature diverse.</p>
<p>À l'acide hyaluroniqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8032595871453</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/472e11c64d22a3edbf30e5722ddb09565ca6112a7285e876ed3d587775b4e8b8 ]]></g:image_link>
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
<title><![CDATA[ Cicatridine crème 60g ]]></title>
<g:id>26f79fb7-f80a-4e18-8826-46c1a9d7a0c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicatridine-crème 60g?26f79fb7-f80a-4e18-8826-46c1a9d7a0c9 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <div id="short_description" class="rte align_justify">
<p>Cicatridine Crème est une crème à usage externe réparatrice et hydratante à base d'acide hyaluronique.</p>
<div></div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8032595870722</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a47eb5982d8dc90373834f56d92fcfdcdf260552cf57b6a771cfcb7350b28bc9 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cicatryl DM Crème 10 Sachets ]]></title>
<g:id>5507aa79-d6b9-4bed-b476-36dd0185af31</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicatryl-dm crème 10 sachets?5507aa79-d6b9-4bed-b476-36dd0185af31 ]]></link>
<g:price><![CDATA[ 570.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pierre Fabre Health Care Cicatryl DM Crème Plaies et Écorchures 10 Sachets est un dispositif médical conçu pour apaiser les plaies superficielles et les écorchures tout en accélérant le processus de cicatrisation.</p><p>Sa formule procure un effet hydratant et filmogène, formant ainsi une couche protectrice à la surface des plaies pour maintenir un environnement humide idéal à la cicatrisation.</p><p>Ce produit offre une solution pratique pour traiter les blessures mineures en procurant un so ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056026430</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8672d9dbaeb9492f138cc325e885fce50b3c1ecf32ff3aae8ddb1e697fe39b85 ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cicatryl Pansements Astuce'Doigts 20 Pansements ]]></title>
<g:id>73842450-d918-4795-8216-b9e9f9d1e9ed</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cicatryl-pansements astuce'doigts 20 pansements?73842450-d918-4795-8216-b9e9f9d1e9ed ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pierre Fabre Health Care Cicatryl Pansements Astuce'Doigts 20 Pansements est un assortiment de pansements multi-formes ergonomiques, pour les doigts.<br />Leurs formes adaptées facilitent la pose et assurent une véritable liberté de mouvement.<br />Résistants à l'eau et micro-aérés, ils sont particulièrement adaptés pour les blessures quotidiennes (coupures, égratignures, ...) de toute la famille.</p>
<p>Cette boîte contient 20 pansements :</p>
<ul><li>10 pansements forme bande : pour le tour ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056009808</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE HYGIENE SOIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09a0a70513a77319670ea6b8f16e4535bfc84575a9bd1b660b27001ff5759f6c ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cinq Sur Cinq Lotion Anti-Moustiques Bébé 100ml ]]></title>
<g:id>cccf88cd-8156-42c3-9a9b-cb1df7d4455b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq lotion anti-moustiques bébé 100ml?cccf88cd-8156-42c3-9a9b-cb1df7d4455b ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <pre class="page-title"><strong>CINQ SUR CINQ</strong><br /><strong>Lotion Anti-Moustiques Bébé</strong><br /><strong>Efficace aussi sur le moustique tigre</strong><br /><strong>Jusqu'à 8h de protection*</strong><br /><strong>+0 mois</strong><br /><strong>100ml</strong><br /><br /><strong>CINQ SUR CINQ bébé est une lotion anti-moustique. Produit à usage biocide à appliquer sur la peau pour protéger les humains contre les moustiques et les tiques uniquement dans les zones tempérées. Jusqu'à 8 heu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790001221</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3cc12e4dab954596ad66535c90b80350eaaafcdb1dcbba17584bd7fa19ad778e ]]></g:image_link>
<g:product_type><![CDATA[ MOUSTIQUES > PROTECTION MOUSTIQUES ET AUTRES INSECTES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cinq sur Cinq  Roll-on Apaisant 3 en1 -  7ml ]]></title>
<g:id>222264ed-accb-4665-b91a-c325c1ad13d8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq  roll-on apaisant 3 en1 -  7ml?222264ed-accb-4665-b91a-c325c1ad13d8 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Cinq sur Cinq Roll-on Apaisant 3en1 7 ml est un gel riche en huile végétale de coco et huiles essentielles de lavande et de menthe qui apaise les piqûres,</p>
<p>démangeaisons et irritations causées par les insectes et les végétaux.</p>
<p>Il possède un doux parfum de fleur de tiaré.</p>
<div id="i4c-dialogs-container"></div>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401563131540</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f76e3b13a309a2fe7972c49319fcbfb9103a259cdd87733d7bc41a014e9f37db ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Diffuseur Double Usage ]]></title>
<g:id>e8104b02-d6fc-4a5e-b7e0-38fbbecbe236</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq diffuseur double usage?e8104b02-d6fc-4a5e-b7e0-38fbbecbe236 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour une protection d'intérieur, le diffuseur rechargeable vous procure un quotidien sans moustique ni insecte. Muni d'une plaquette ou d'une recharge liquide, il sera l'allié confort qu'il manquait à votre intérieur.</p>
<p>Cinq sur Cinq Diffuseur Double Usage offre une protection nocturne efficace durant 45 nuits, ou 20 jours 24h/24.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560216387</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39e1b2c556305676d77062a1fd0bc6d016f3d6f0a7b3592374aa2f1a553ca7f5 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Famille Lotion Anti-Moustiques 100 ml ]]></title>
<g:id>9b68d0bb-71fa-426f-9b6c-8221e300f0af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq famille lotion anti-moustiques 100 ml?9b68d0bb-71fa-426f-9b6c-8221e300f0af ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le spray tropic lotion anti-moustiques repousse efficacement les insectes européens et tropicaux : moustiques, fourmis, araignées, tiques.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560750744</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d8d8d28258c9d8f22044f835963e9cc77702e952f0fc296c6987583fb6eb5f75 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Gel Crépitant Apaisant Piqûres d'Insectes et de Végétaux 50ml ]]></title>
<g:id>0de8c8ec-35d8-4859-bd16-f4a5a5a2ad07</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq gel crépitant apaisant piqûres d'insectes et de végétaux 50ml?0de8c8ec-35d8-4859-bd16-f4a5a5a2ad07 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <div id="type_info_prio_11_1">
<p>Cinq sur Cinq Gel Crépitant Apaisant Piqûres d'Insectes et de Végétaux 50 ml est un gel crépitant riche en actifs apaisants (allantoïne, bisabolol,</p>
<p>camomille et hamamelis) qui apaise la sensation de démangeaison provoquée par les piqûres d'insectes et de végétaux. Grâce à sa texture gel "aux</p>
<p>micro-bulles crépitantes" et à sa formule, le gel crépitant procure dès son application une sensation de fraîcheur intense. Il apaise et soulage rapidement</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560221473</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f0bac150621f2306a4664d27c01788dda55d90fe303f1c5701e344e3b56035eb ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Natura Anti-Moustiques Peaux Sensibles et Atopiques 100 ml ]]></title>
<g:id>89344668-5cbd-4496-9204-aab6d14ab014</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq natura anti-moustiques peaux sensibles et atopiques 100 ml?89344668-5cbd-4496-9204-aab6d14ab014 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cinq sur Cinq Natura Anti-Moustiques Peaux Sensibles et Atopiques 100 ml est une crème anti-moustiques pour peaux sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560206838</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/498d588396d047369a23804eaf9c46d9f5c8984d0492dcdd17a63b72a94170fe ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Natura Shampoing anti-poux 400 ml ]]></title>
<g:id>dcc60838-786f-42e7-90bf-028c04bf1508</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq natura shampoing anti-poux 400 ml?dcc60838-786f-42e7-90bf-028c04bf1508 ]]></link>
<g:price><![CDATA[ 1699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing anti-poux &amp; lentes élimine la totalité des poux et des lentes sur tous les types de cheveux même fragiles de toute la famille (à partir de 36 mois), en seulement 15 minutes de pose.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000293</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e670de8b6561d38b06af9da099eb6ba28bf5d8fdd8e8ed39bcc53e6846149505 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Spray Anti-Moustiques Tissus 250 ml ]]></title>
<g:id>90c80761-2ddb-455c-922a-6009e6d7edad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq spray anti-moustiques tissus 250 ml?90c80761-2ddb-455c-922a-6009e6d7edad ]]></link>
<g:price><![CDATA[ 1060.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>spray tissus Cinq sur Cinq</span><span> est une lotion anti-moustiques destinée à être appliquée sur les </span><span>vêtements</span><span>. Il repousse les moustiques et prévient ainsi les piqûres.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000798</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f65b7af0851a018da950bda1d42f7a2b6bd8044d8e334745494145e1e2041f68 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Spray Répulsif Anti-Poux Protection  100 ml ]]></title>
<g:id>36fb44c1-e1d0-43ba-ae11-2379f9d974fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq spray répulsif anti-poux protection  100 ml?36fb44c1-e1d0-43ba-ae11-2379f9d974fb ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cinq sur Cinq Spray Répulsif Anti-Poux Protection 12H 100 ml est un répulsif qui vous aidera à maintenir les poux à distance des têtes de vos enfants pendant au moins 12 heures.<br />Formulé avec de l'huile d'eucalyptus citriodora, un actif répulsif d'origine végétale, et de l'huile essentielle de lavande comme base parfumante.<br />La protection a été testée par un laboratoire indépendant et le produit a montré son efficacité jusqu'à 5 jours après l'application si les cheveux n'ont pas été m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000415</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71691955906b2db607d9e988686a24b9993358a6e2171925835b003420e3e6b3 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Stick Anti-Moustiques 20 ml ]]></title>
<g:id>f9a27c93-07da-4701-a28d-7adca263d034</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq stick anti-moustiques 20 ml?f9a27c93-07da-4701-a28d-7adca263d034 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Cinq sur Cinq Stick Anti-Moustiques 20 ml est un stick anti-moustiques qui vous assure une protection efficace durant 8 heures contre les tiques, les moustiques (tigre) et les taons.</p>
<p>Il s'applique aussi bien sur le visage que sur le corps, pour une protection optimale !</p>
<p>S'utilise chez l'enfant (dès 24 mois) et l'adulte.</p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560206708</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e85372b0cd00d6b463c0ba3ee8cd282189eea3860ea21d65714fb8196429f2cb ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Stylo Apaisant 2ml ]]></title>
<g:id>36e0ac58-d0db-4dc8-b644-0d0c447816c4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq stylo apaisant 2ml?36e0ac58-d0db-4dc8-b644-0d0c447816c4 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le stylo Gel apaisant Cinq sur Cinq est idéal pour calmer immédiatement les démangeaisons dues aux plantes urticantes ou aux contacts avec les méduses. Il soulage également les piqûres d'insectes tels que les moustiques, abeilles, guêpes. Son format nomade sous forme de stylo permet une application rapide et localisée à tout moment.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000781</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c7a595defb53b03300ce83ad1901114a9fc56e78e82b9bae172149a12fe29070 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq Zones tempérées spray anti moustiques 100ml ]]></title>
<g:id>38c31543-408a-42fe-9f15-82a01250bf3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq zones tempérées spray anti moustiques 100ml?38c31543-408a-42fe-9f15-82a01250bf3f ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Répulsif insectes pour les zones tempérées / Lotion anti-moustiques pour une protection renforcée contre les piqûres de moustiques, de guêpes de taons et de tiques.</p>
<p class="p1">Naterum vous propose le spray anti moustique Cinq sur Cinq zones tempérées des laboratoires Bayer, une formule à base du répulsif IR3535 à 25 %, dont l'efficacité est prouvée en laboratoire et sur le terrain. Efficace jusqu'à huit heures d'affilée, ce répulsif convient aux femmes enceintes et aux enfan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597812231</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41dd5b459fa26d5c1e7175ff007afe2ffa2c25eaccfdcfc3b580450dc028ff01 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq crème apaisante 3 en 1 40g ]]></title>
<g:id>21a1a23a-3f3f-402b-87d8-a47e22482913</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq crème apaisante 3 en 1 40g?21a1a23a-3f3f-402b-87d8-a47e22482913 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cinq sur Cinq Crème Apaisante 3en1 40 g riche en huiles végétales de calendula, camomille et en huile essentielle de lavande, apaise les piqûres,</p>
<p>démangeaisons et irritations causées par les insectes et les végétaux.</p>
<p>Sa formule hydrate aussi l'épiderme et contribue à la réparation de la peau agressée.</p>
<p>Le menthol apporte une sensation immédiate de fraîcheur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401563131779</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69e798ff5999824e32aa0058e137eb729a5e0e03bb86ff6a58601a431698bcb1 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq plaquettes pour diffuseur x30 ]]></title>
<g:id>ea0498e3-a7b7-4f20-97fb-7a3928e4cbcd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq plaquettes pour diffuseur x30?ea0498e3-a7b7-4f20-97fb-7a3928e4cbcd ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <strong>plaquettes anti-moustiques</strong> <strong>Cinq sur Cinq</strong> s'adaptent sur le diffuseur double usage de la marque afin d'éloigner les parasites de la zone traitée et vous offrir un peu de sérénité pendant votre repas ou votre repos. Ce dispositif propose deux alternatives en fonction de l'usage que l'on souhaite en faire, une diffusion nocturne d'une solution liquide équivalente à 50 nuits ou une autre par système de plaquettes qui proposent une protection de 8 heures chacu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560216370</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2366868fa04b6583dc420bc84d3e1e0b22933d5ee77c026d74d4bdb9718c91a9 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq spray naturel anti moustiques 100 ml ]]></title>
<g:id>c1976a21-3ecc-4d8d-9497-f88f8ec0d5c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq spray naturel anti moustiques 100 ml?c1976a21-3ecc-4d8d-9497-f88f8ec0d5c7 ]]></link>
<g:price><![CDATA[ 840.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formulé avec de l'huile d'Eucalyptus citriodora,<strong> le spray anti-moustiques Cinq sur Cinq Natura</strong> repousse efficacement les moustiques européens et tropicaux ainsi que les tiques. Il convient aux enfants dès 12 mois.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560038934</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a9f69933938530d660b5e3ff1607f8cc50a04755986fa314a943d4ad88c5bb48 ]]></g:image_link>
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
<title><![CDATA[ Cinq sur Cinq stick anti moustiques famille 20 ml ]]></title>
<g:id>d3f2461d-54e6-43ea-93f4-9b479e810711</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur cinq stick anti moustiques famille 20 ml?d3f2461d-54e6-43ea-93f4-9b479e810711 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le stick anti moustiques Cinq sur Cinq</strong> <strong>famille</strong> a été conçu afin de <strong>protéger la peau des piqûres</strong> de moustiques, et notamment du moustique tigre, mais aussi des guêpes et des tiques. <br />Il peut être utilisé chez la <strong>femme enceinte et chez le nourrisson de plus de 6 mois</strong>, ce qui représente un avantage pour ces personnes sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528503696</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/96a43022f956e98221c2d7647706ba9a8c2a813091f5af7ae45db79c7bc2535f ]]></g:image_link>
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
<title><![CDATA[ Cinq-sur-Cinq Huile essentielle Citriodora Roll-on 50ml ]]></title>
<g:id>90a107ea-1375-4ff8-8bd1-bb5593cfcf16</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cinq-sur-cinq huile essentielle citriodora roll-on 50ml?90a107ea-1375-4ff8-8bd1-bb5593cfcf16 ]]></link>
<g:price><![CDATA[ 720.00 EUR ]]></g:price>
<description><![CDATA[ <div id="short_description_block">
<div id="short_description_content" class="rte align_justify">
<p>Cinq-sur-Cinq Huile essentielle Citriodora Roll-on 50ml protège efficacement des moustiques et des tiques durant plusieurs heures.</p>
<p><strong>inq sur Cinq Spray et roll on Citriodora répulsif Végétal.</strong><br /><b>Le spray et le roll on</b><span> sont des</span><b> répulsifs anti-moustique</b><span> </span><b>Cinq sur cinq </b><span>est élaboré avec un actif d'origine végétale, il est rec ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000774</g:gtin>
<g:brand><![CDATA[ CINQ SUR CINQ ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b8e6e6b6c14e8bfd899c9a5b20a9cd40d34542aa51d8a2a2dcbeb5b73092da0c ]]></g:image_link>
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
<title><![CDATA[ Circulymphe Complexe H 16 Comprimés ]]></title>
<g:id>3a8b0735-2dc8-49ee-bf2c-2e2d787f0d4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/circulymphe-complexe h 16 comprimés?3a8b0735-2dc8-49ee-bf2c-2e2d787f0d4b ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>CIRCULYMPHE® COMPLEXE H comprimés est un complexe de 7 ingrédients reconnus, dont 5 plantes titrées, parmi lesquels :</p>
<p>Le <span><span>Petit Houx</span></span> qui soutient la circulation sanguine<br />Le <span><span>Marronnier d’Inde</span></span> et le <span><span>Chrysanthellum</span></span><br />La <span><span>Vitamine C</span></span> qui contribue à la formation normale de collagène pour assurer le fonctionnement normal des vaisseaux sanguins</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700695220697</g:gtin>
<g:brand><![CDATA[ SANTE VERTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dd9c8b29910309d52217e4de6ef32448555c399545858f01e118f8fcc59e2ffe ]]></g:image_link>
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
<title><![CDATA[ Circulymphe Jambes légères Jour Nuit 56 comprimés ]]></title>
<g:id>7940860e-851b-4d1d-bdaa-bcf80f2e5e03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/circulymphe-jambes légères jour nuit 56 comprimés?7940860e-851b-4d1d-bdaa-bcf80f2e5e03 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Circulymphe Jambes légères Jour Nuit</span><span> en comprimés est un </span><span>complément alimentaire</span><span> des </span><span>Laboratoires Santé Verte</span><span>.</span><br /><br /><span>La journée, les jambes sont sollicitées et permanence : de fortes chaleurs, une position statique prolongée, peuvent influencer la circulation. A contrario, la nuit est un moment propice où l'organisme au repos se régénère. Il faut donc apporter une </span><span>réponse spécifique </span><sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700695202105</g:gtin>
<g:brand><![CDATA[ SANTE VERTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff63f45957f3745d07970867f053f595f291a9b5fff02c62bed54c1d34cfe43c ]]></g:image_link>
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
<title><![CDATA[ Citrate de Bétaïne et Citrate de Calcium 10 Sticks ]]></title>
<g:id>facf5eee-b930-44f1-8500-2bf22f43b85f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/citrate-de bétaïne et citrate de calcium 10 sticks?facf5eee-b930-44f1-8500-2bf22f43b85f ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p><span>UPSA Digestion Citrate de bétaïne &amp; Citrate de calcium sachet-dose</span><em> </em>est un complément alimentaire pour le <span>bien-être digestif</span>, grâce au calcium qui contribue au fonctionnement normal des enzymes digestives. <br /><br />Pouvoir conserver un système digestif en bonne santé est essentiel. <br /><br /><span>Le complément alimentaire UPSA Citrate de bétaïne &amp; Citrate de calcium</span> est votre allié grâce au calcium qui contribue au fonctionnement  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3585550000375</g:gtin>
<g:brand><![CDATA[ UPSA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f1fba6a7c8b0ebc53234f004062724748d90fc89fe9a9a78acf5f9a3c6108106 ]]></g:image_link>
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
<title><![CDATA[ Clarins  Serum Peau Neuve 200ml ]]></title>
<g:id>d800f652-96e6-4b5f-81e2-deeb71cb976f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-serum peau neuve 200ml?d800f652-96e6-4b5f-81e2-deeb71cb976f ]]></link>
<g:price><![CDATA[ 6790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Toute l’expertise d'un sérum visage Clarins dans un soin corps.<br><br>Sa formule technique et innovante offre un effet perfecteur instantané pour une peau sublimée, lissée et lumineuse.<br><br>Duo d'actifs haute perfomance : le tripeptide anti-âge contribue à booster la production de collagène et de fibres élastiques pour favoriser la fermeté et l’élasticité cutanée. Il agit sur les marqueurs de jeunesse du corps : jour après jour les plis sont lissés, la peau est raffermie et retrouve un as ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057295829</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/12d14ed453e337a228c2bd969febe1a7be5b9eb9603c6176679fcd1154b5ad42 ]]></g:image_link>
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
<title><![CDATA[ Clarins Addition Concentré Eclat Corps 30ml ]]></title>
<g:id>1bb2e02c-3a0b-4705-bdcf-029476e7f6a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-addition concentré eclat corps 30ml?1bb2e02c-3a0b-4705-bdcf-029476e7f6a9 ]]></link>
<g:price><![CDATA[ 4590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L’auto-bronzant corps pour une peau dorée toute l’année.</span><br /><span>Addition Concentré Eclat Corps est l'auto-bronzant corps Clarins conçu pour ajouter une action auto-bronzante à tout soin hydratant ou raffermissant pour le corps. Pour chaque zone à hâler, il suffit de mélanger quelques gouttes d’Addition Concentré Eclat Corps au soin corps habituel Clarins. Un geste simplissime pour un corps joliment doré : le bronzage est très naturel, modulable à volonté et s’ajuste à toutes  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810449051</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39c9b2183df34c1c525036a174b1ad628ac784fb4731943c166300bfeb2864bc ]]></g:image_link>
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
<title><![CDATA[ Clarins Addition Concentré Eclat Visage 15ml ]]></title>
<g:id>1d2711d0-d037-4b74-b38f-9a6c61ec5214</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-addition concentré eclat visage 15ml?1d2711d0-d037-4b74-b38f-9a6c61ec5214 ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Eclat et bonne mine sur-mesure ajoutés aux bénéfices de vos soins quotidiens ! Addition Concentré Eclat se mélange à tous les types de soins du visage Clarins, permettant d'associer un effet auto-bronzant à tous les bénéfices hydratants, anti-rides, raffermissants des soins de jour ou de nuit habituels.• Un geste simplissime, 100% sûr, pour un hâle radi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810449068</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85736756022c411ae61af636e276d6cfd7eafafec76c953e88896d48b5c92d4e ]]></g:image_link>
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
<title><![CDATA[ Clarins Baume Beaute Eclair  ]]></title>
<g:id>397f2d98-fdca-4632-a126-7fe229ac1a59</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume beaute eclair ?397f2d98-fdca-4632-a126-7fe229ac1a59 ]]></link>
<g:price><![CDATA[ 4500.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-content col col-gutter col-6-mobile col-6-tablet col-6-desktop">Véritable révélateur de beauté, ce baume estompe instantanément les marques de fatigue : grâce à son action défatigante, les traits paraissent aussitôt plus reposés, plus lisses. Enrichi aux extraits d'olivier et de riz, il apaise et hydrate profondément la peau. Il réveille l’éclat du teint et donne au maquillage : lumière et longue tenue. Un baume booster de beauté : un vrai must-have !</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057059889</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da5a0a4585530f0e8018ef60b8e3e5da33cd98bcbf0d71b64b6b550c0d6d3be3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Baume Corps Super Hydratant 200ml ]]></title>
<g:id>2591871c-2762-4cb3-996e-fcb0fdfc3c47</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume corps super hydratant 200ml?2591871c-2762-4cb3-996e-fcb0fdfc3c47 ]]></link>
<g:price><![CDATA[ 4790.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-content col col-gutter col-6-mobile col-6-tablet col-6-desktop">Baume Corps Super Hydratant nourrit et hydrate toutes les peaux, même les plus sèches grâce à sa concentration en beurre de karité. Ses extraits d’origine naturelle d’eau de framboise bio, d’acides de pulpe de tamarin et de sucres d’avoine bio adoucissent et lissent le grain de peau. Sa texture fondante qui pénètre instantanément permet de s’habiller aussitôt.</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810458152</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a05d2943d7ff5e01b7b920c771300493179cf4eb4a1c57c37f4da64f22bfe73 ]]></g:image_link>
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
<title><![CDATA[ Clarins Baume Corps Super Hydratant 400ml ]]></title>
<g:id>e13944cc-b050-4199-bb70-50006e07a3f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume corps super hydratant 400ml?e13944cc-b050-4199-bb70-50006e07a3f9 ]]></link>
<g:price><![CDATA[ 6590.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-content col col-gutter col-6-mobile col-6-tablet col-6-desktop">Baume Corps Super Hydratant nourrit et hydrate toutes les peaux, même les plus sèches grâce à sa concentration en beurre de karité. Ses extraits d’origine naturelle d’eau de framboise bio, d’acides de pulpe de tamarin et de sucres d’avoine bio adoucissent et lissent le grain de peau. Sa texture fondante qui pénètre instantanément permet de s’habiller aussitôt.</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810458169</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71464ba687b8200c3a53b9130a831727968eb3bcdf17a6e1367bd40e9e75abe6 ]]></g:image_link>
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
<title><![CDATA[ Clarins Baume Hydratant Tonic 200ml  ]]></title>
<g:id>02da1ca8-4e12-4ae3-8a9b-dc3871ec023d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume hydratant tonic 200ml ?02da1ca8-4e12-4ae3-8a9b-dc3871ec023d ]]></link>
<g:price><![CDATA[ 5490.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p><strong>Type de peau : </strong>Peau mixte, Peau sèche, Peau normale, Peau grasse</p></li><li><p><strong>Texture : </strong>Crème</p></li><li><p><strong>Utilisation : </strong>Tous les jours, matin et/ou soir. <strong>En savoir plus</strong></p></li></ul><p><strong>Un produit pas comme les autres</strong></p><ul><li><p>Peau nourrie et hydratée.</p></li><li><p>Parfume et procure une agréable sensation de bien-être.</p></li></ul><p>Ce baume hydratant pour le corps associe des extraits d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057174445</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df36d93a044020956377d04544a0bb3cdf86470dc3c94952abfb71b8b0b09bee ]]></g:image_link>
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
<title><![CDATA[ Clarins Baume Jeunesse des Mains 100ml ]]></title>
<g:id>d03b2bcf-dfea-40e3-91cd-6391b63a1d13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume jeunesse des mains 100ml?d03b2bcf-dfea-40e3-91cd-6391b63a1d13 ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title"></h3>
<div class="accordion-section__content">
<div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Baume Jeunesse des Mains, la version riche de l'iconique Crème Jeunesse des Mains. Formulé avec 26% de beurre de karité bio issu du commerce équitable, il offre aux mains en quête de nutrition intense une enveloppe de protection. Plus concentré en beurre ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057024948</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/705e65d5879a09817f91430d7129fba4a97c8409802b8968a8dd533b82904c91 ]]></g:image_link>
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
<title><![CDATA[ Clarins Baume Lèvre 03 ]]></title>
<g:id>29961f48-9d87-4c43-80ec-8ca95dff0cce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume lèvre 03?29961f48-9d87-4c43-80ec-8ca95dff0cce ]]></link>
<g:price><![CDATA[ 3500.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'alliance idéale entre couleur et soin, sans compromis sur la nutrition ni le confort : une véritable caresse hydratante, nourrissante et protectrice.</p><p>Sa texture fine et fondante renferme une formule composée à 96% d'ingrédients d'origine naturelle, intégrant un trio d'huiles végétales ultra-performantes :</p><p>L'huile de rose musquée apporte confort et nutrition aux lèvres.<br>L'huile de jojoba nourrit intensément.<br>L'huile de noisette préserve l'hydratation et nourrit les lèvres.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057237140</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d8f2e4f817fab24bba9ff2b9a9a52a94dbbf8c62f41cd503a973b6f5cf665f5 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Baume Lèvre 04 ]]></title>
<g:id>2b7cfbc3-acc2-4ab2-a26c-09fc22a3325c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume lèvre 04?2b7cfbc3-acc2-4ab2-a26c-09fc22a3325c ]]></link>
<g:price><![CDATA[ 3500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le "Lip Comfort Oil" de Clarins est un baume à lèvres innovant qui combine les propriétés nourrissantes d'un baume à lèvres avec les effets brillants d'une huile pour procurer hydratation et confort aux lèvres.</p><p><br>Formule Nourrissante: Enrichie en huiles végétales nourrissantes telles que l'huile de noisette, l'huile de jojoba et l'huile de pépins de framboise, qui hydratent et adoucissent les lèvres.<br>Effet Brillant: Procure un fini brillant et glossy sans être collant, donnant aux  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057237157</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6bf7450e98bc20b292099a38ad4e0cee4d1788451f5fc346575c0e904d48b858 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Baume à Lèvres 06 ]]></title>
<g:id>031862eb-8c4a-4550-b3d6-4e44cca788d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-baume à lèvres 06?031862eb-8c4a-4550-b3d6-4e44cca788d4 ]]></link>
<g:price><![CDATA[ 3500.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Un produit pas comme les autres</strong></p><ul><li><p>Effet Baby lips* instantané : couleur homogène &amp; éclat, lèvres lisses ultra brillantes, à l'effet plump.</p></li><li><p>Formule soin : action lissante sur les lèvres, confort &amp; souplesse, nutrition.</p></li><li><p>Texture légère, non collante.</p></li><li><p>*Effet lèvres de bébé.</p></li></ul><h2><strong>En savoir plus</strong></h2><p>Découvrez notre baume à lèvres teinté en stick, offrant une teinte subtile qui sublime l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057237171</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/620cde328782a800561a41ec1393430d5886b449bd18031e6af34ab9a2900762 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Body Partner Expert Vergetures 175ml ]]></title>
<g:id>769c67db-549e-4cf4-846b-179859f98780</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-body partner expert vergetures 175ml?769c67db-549e-4cf4-846b-179859f98780 ]]></link>
<g:price><![CDATA[ 6190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Une crème haute tolérance fine et soyeuse pour contribuer à prévenir les vergetures et à réduire leur apparence lors des variations de poids (en particulier pendant la grossesse et la puberté). Sa formule experte associe des actifs qui améliorent les qualités d'élasticité et de fermeté de la peau, tout en l'apaisant. Sa composition réduite à l'essentiel est idéalement préservée dans son packaging protecteur.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810277807</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c7cd8c21dd2e76a60b2a002687f2b18d3009e1af974f2e6f6ace31d38ada80c3 ]]></g:image_link>
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
<title><![CDATA[ Clarins Brume solaire SPF 50+ 150ml ]]></title>
<g:id>a4a95fb7-1756-4a70-bb48-63287a8b5ce5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-brume solaire spf 50+ 150ml?a4a95fb7-1756-4a70-bb48-63287a8b5ce5 ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette <strong>brume solaire biphasée </strong>préserve visiblement du vieillissement prématuré et prend soin de <strong>toutes les peaux.</strong></p><p><strong>Un produit pas comme les autres :</strong></p><ul><li><p>Protection optimale contre les méfaits du soleil et de la lumière bleue. Hydrate la peau et sublime le bronzage.</p></li><li><p>Fini satiné et invisible.</p></li><li><p>Idéale pour toutes les carnations.</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057288210</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e9d155ff5a4ed33b7d7cf8d3dc1f160df9e28d567f3b4a6fdb67556f2eea79a ]]></g:image_link>
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
<title><![CDATA[ Clarins Calm-Essentiel Emulsion Apaisante 50ml ]]></title>
<g:id>c5399611-31fb-4b0a-81ae-abe5e1e409ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-calm-essentiel emulsion apaisante 50ml?c5399611-31fb-4b0a-81ae-abe5e1e409ca ]]></link>
<g:price><![CDATA[ 5290.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_d76uel3ntflt8sjxww">Description</h3>
<div class="accordion-section__content" id="accordion_content_d76uel3ntflt8sjxww"><div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Composée de 96% d'ingrédients d'origine naturelle, cette émulsion apaise immédiatement les sensations de peau qui tire et les rougeurs. Son délicat parfum floral  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810439656</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f62779debc7b2504d8cfcb9ca46ce88982aeffa7bfaf865a7b69a5c2f47a7c6a ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Body Hydration Essentials ]]></title>
<g:id>9a3b80ea-73a1-4e03-a59d-90f0c583a7b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret body hydration essentials?9a3b80ea-73a1-4e03-a59d-90f0c583a7b1 ]]></link>
<g:price><![CDATA[ 4900.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret réuni trois experts de l'hydratation instantée et durable. Le baume lèvres Hydra-Essentiel formulé avec de l'acide hyaluronique hydrate, nourrit et protège les lèvres. Le Baume Corps Super Hydratant au beurre de karité lisse et nourrit intensément la peau. La Crème Jeunesse des Mains forme un gant de beauté invisible pour des mains douces, lisses, hydratées et confortables.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057327193</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0feb4187c10db299082e54b77f26970bebf076213456eb7cc74ae53dbeadc7fb ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret ClarinsMen Les essentiels ]]></title>
<g:id>4bad26ce-174f-4470-920e-c731cdd28cf7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret clarinsmen les essentiels?4bad26ce-174f-4470-920e-c731cdd28cf7 ]]></link>
<g:price><![CDATA[ 2990.40 EUR ]]></g:price>
<description><![CDATA[ <p>Le parfait trio de soins pour hommes offre une routine simple et efficace pour une peau confortable en un minimum de temps. Ce kit comprend le Gel Super Hydratant ClarinsMen de 12ml pour hydrater et réduire les brillances, un Shampooing Douche ClarinsMen de 30ml pour nettoyer le corps et les cheveux en un seul geste, ainsi qu'une Brume Hydratante Multi-Protection Hydra-Essentiel de 20ml pour préserver l'hydratation de la peau tout en la protégeant des agressions extérieures.</p><p>En bonus, l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057328237</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/683e9a9752c14be5bbc844d9d5136fa1e7255bebb68548b599ca3e101424200b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Coffret Double Serum 30ml ]]></title>
<g:id>bdb9dfde-8791-4123-a605-1505f18c875a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret coffret double serum 30ml?bdb9dfde-8791-4123-a605-1505f18c875a ]]></link>
<g:price><![CDATA[ 10500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Double Serum 30ml<br>Wonder Volume Mascara XXL - 01 extreme black 3ml<br>Lip Comfort Oil - 03 Cherry 1,4 ml<br>Double Serum Eye - Echantillon sachet 0,9ml<br></p><p>Clarins a réuni dans un coffret en édition limitée le meilleur de son expertise soin et maquillage pour une peau d'apparence plus jeune, plus belle.<br>Double Serum et Double Serum Eye ciblent les signes visibles de l'âge du visage et du contour de l'œil. Le Wonder Volume Mascara XXL pour un volume extrême instantané et une perfor ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057332975</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a51405d2686ce5d390338f7900006e449cde35bcc6e5f16fefb181311308837 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Coffret Les Alliés Protection Solaire ]]></title>
<g:id>5c701044-9b37-4c0a-a4d4-35bb110cdb43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret coffret les alliés protection solaire?5c701044-9b37-4c0a-a4d4-35bb110cdb43 ]]></link>
<g:price><![CDATA[ 3600.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les meilleurs alliés protection solaire corps et visage. Protégez votre peau des rayons UV et apaisez-la après l'exposition avec les soins solaires Clarins pour révéler le plus beau des bronzages.<br>PROTÉGER LE VISAGE : La Crème Solaire Jeunesse Très Haute Protection Visage SPF50+ hydratante à la texture fine et fondante offre un toucher sec au fini mat et résiste à l'eau. Ce soin visage très haute protection anti-rides et anti-taches prend soin de votre peau. Sa combinaison de filtres solai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057421907</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2265150842d5cc6b602a526f9790ea81a73676a4ac169c6f6364deb92d5a93ed ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Double Serum & Extra-Firming ]]></title>
<g:id>1e2f213c-3410-4d6e-af37-d308ccfb4749</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret double serum & extra-firming?1e2f213c-3410-4d6e-af37-d308ccfb4749 ]]></link>
<g:price><![CDATA[ 15100.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le coffret anti-rides &amp; fermeté des femmes qui veulent une peau visiblement plus jeune, plus lisse, raffermie, comme liftée. D'abord, le mythique Double Serum formulé avec 27 extraits de plantes cible les signes de l'âge, raffermit et réduit l'apparence des ridules. Ensuite, les Crèmes de Jour et de Nuit anti-âge Extra-Firming, un duo de soin jeunesse quotidien enrichi d'un puissant trio d'actifs pro-collagène pour lutter contre la perte de fermeté, les rides et le manque d'éclat. Enfin,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057404672</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ab0824c834dbe1bee48b46a2cb3f9e1732a2dff139cc164e54d15520c1b70aa ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Double Serum Eye Collection Regard ]]></title>
<g:id>353173d2-aa56-4607-a02e-de6de37c51c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret double serum eye collection regard?353173d2-aa56-4607-a02e-de6de37c51c2 ]]></link>
<g:price><![CDATA[ 8500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour préserver l'apparence de la jeunesse et la beauté du regard, voici vos 3 essentiels. Un Démaquillant Express Yeux, doux avec la peau mais efficace sur le maquillage. Double Serum Eye, le soin contour des yeux anti-âge qui bénéficie de toute la technologie de Double Serum. Sa double formule inédite puise sa force dans une grande richesse en plantes (13 extraits de plantes dont le puissant duo d’extraits de cerfeuil des bois bio &amp; curcuma) : les rides semblent lissées, les poches et le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057327445</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20a088e7ed8b328af2d9efebf77d3fba2c4a43563a9556102a2882c00f31f778 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Double Serum Light ]]></title>
<g:id>06b2b20c-e17e-4b6d-99a5-3f6e9df685ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret double serum light?06b2b20c-e17e-4b6d-99a5-3f6e9df685ec ]]></link>
<g:price><![CDATA[ 13790.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_bfigip1uxssm2olav9y">Description</h3>
<div class="accordion-section__content" id="accordion_content_bfigip1uxssm2olav9y">
<div class="what-is-it-accordion-content expandable-content-js mb-base flex-column">
<div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Ce coffret réunit trois textures légères pour un visage éclatant : Double Serum ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297458</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/23832e1c323a85896adb58465333a66aff05c1758e2a446645ed6f4205abf8e1 ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Eau Dynamisante ]]></title>
<g:id>9dcb3284-5e7c-4519-8211-f73917a96afd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret eau dynamisante?9dcb3284-5e7c-4519-8211-f73917a96afd ]]></link>
<g:price><![CDATA[ 6200.40 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_idovfz7znem2olg0yo">Description</h3>
<div class="accordion-section__content" id="accordion_content_idovfz7znem2olg0yo">
<div class="what-is-it-accordion-content expandable-content-js mb-base flex-column">
<div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Ce coffret réunit la mythique Eau Dynamisante, la toute première Eau de Soins Cla ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297540</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6c5ac698c02c80a223fc8d5eba0e7f308c7e0d6f365446c35a71540cf230a420 ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Eau Extraordinaire ]]></title>
<g:id>f739aaca-0f79-41af-af1a-1ec28889c86d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret eau extraordinaire?f739aaca-0f79-41af-af1a-1ec28889c86d ]]></link>
<g:price><![CDATA[ 6200.00 EUR ]]></g:price>
<description><![CDATA[ <div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Ce coffret réunit l'Eau Extraordinaire, la toute dernière Eau de Soins Clarins, et deux soins corps au parfum revitalisant de l'Eau Extraordinaire : une crème hydratante corps au beurre de karité bio et une crème douche enrichie en huile d'amande douce bio. Ce rituel parfume, ravive la force intérieure et éveille les sens. Leur parfum vous transporte au cœur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297557</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9d909c6cedcff33701f2c5e3598a1b0f8421d1a7a222f74ac9ecf6674d0cbf2f ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Eau Extraordinaire 100ml ]]></title>
<g:id>98c320e5-c1b9-436b-8aad-6ab9e07bd88d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret eau extraordinaire 100ml?98c320e5-c1b9-436b-8aad-6ab9e07bd88d ]]></link>
<g:price><![CDATA[ 6000.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Routine peau et esprit revigorés.</span><br /><span>Le cadeau idéal à offrir ou à se faire offrir !</span><br /><span>Créez votre ambiance spa. Le parfum revitalisant des huiles essentiels de l'Eau Extraordinaire en eau de soins et en gel douche onctueux pour parfumer, nettoyer et nourrir la peau.</span><br /><br /><span>Ce coffret réunit l'Eau Extraordinaire, la toute dernière eau de soin Clarins, et un soin corps au parfum revitalisant : une crème douche enrichie en huile d'amande dou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057239052</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2dde2148674303d7fcb07cde7636a121ffc09c21ced774bcba20562db083a27 ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Kit Lip Oil & Mascara ]]></title>
<g:id>e5172f0c-caa3-4a8f-bf3e-cdac332f4057</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret kit lip oil & mascara?e5172f0c-caa3-4a8f-bf3e-cdac332f4057 ]]></link>
<g:price><![CDATA[ 7000.00 EUR ]]></g:price>
<description><![CDATA[ <div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Ce coffret réunit tous les essentiels d'un maquillage naturel, facile et réussi. Une base de teint hydratante pour unifier et booster l'éclat de la peau, une huile subtilement teintée brillante et nourrissante pour les lèvres. Et pour le regard, un démaquillant express qui élimine le maquillage en douceur (convient aux yeux sensibles) et le Mascara Wonder Pe ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297618</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/277c45046b5923b7206d338be668b7b701682372e4352861d448497dc9eed255 ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Les Essentiels Protection Solaire SPF 50 ]]></title>
<g:id>47e815fb-bd04-4754-82a9-0405a3142edd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret les essentiels protection solaire spf 50?47e815fb-bd04-4754-82a9-0405a3142edd ]]></link>
<g:price><![CDATA[ 3600.00 EUR ]]></g:price>
<description><![CDATA[ <p>Peau exfoliée, protégée, &amp; apaisée.</p><p>Les meilleurs alliés pour exfolier la peau, la protéger des méfaits du soleil et révéler ainsi le plus beau des bronzages uniforme et lumineux.</p><p>La Crème Solaire Jeunesse Très Haute Protection Visage SPF50+ hydratante à la texture fine et fondante offre un toucher sec au fini mat et résiste à l'eau. Ce soin visage très haute protection anti-rides et anti-taches prend soin de votre peau. Sa combinaison de filtres solaires offre une protection  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057331619</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c0c02fceac327b5a6d54641d15114830fd2f06cdc046bf67e0a9c8393b3a0e6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Les Iconiques – Eau Dynamisante  ]]></title>
<g:id>04f94b6d-0a04-47e7-a760-ec0c8e3ce35c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret les iconiques – eau dynamisante ?04f94b6d-0a04-47e7-a760-ec0c8e3ce35c ]]></link>
<g:price><![CDATA[ 10390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret créé pour les 70 ans de la marque réunit les iconiques soin et maquillage qui font le succès de Clarins depuis 70 ans. La mythique Crème Jeunesses des Mains, véritable gant de beauté qui hydrate et embellit la peau. L'Eau Dynamisante, première Eau de Soins qui allie le parfum et l'action des plantes. Le Baume Beauté Eclair, soin magique qui booste l'éclat. Lip Comfort Oil, le pouvoir des huiles Clarins pour nourrir et sublimer les lèvres. Mascara Wonder Perfect, pour sublimer le re ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057266409</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/311ad3fb3e15d881ef2e61e4e89cf2ebb33d434a0cb597790379406e77d91060 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Ma Routine Bonne Mine ]]></title>
<g:id>4e2c6fef-43f4-48e5-87fc-f053f252b6f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret ma routine bonne mine?4e2c6fef-43f4-48e5-87fc-f053f252b6f9 ]]></link>
<g:price><![CDATA[ 6800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour avoir bonne mine instantanément et sans soleil, Clarins a réuni dans ce coffret estival 2 soins à utiliser ensemble : 2-3 gouttes d'Addition Concentré Eclat à mélanger à la Crème Hydra-Essentiel Jour : une texture fraîche et soyeuse qui va hydrater et repulper la peau tout en lui donnant bonne mine grâce à l'Addition Concentré Eclat.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057333002</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/543965caced4428c44d44cd47a4596f6546fa1a4015d4ba601406f7893a92f04 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Mascara - Supra Volume ]]></title>
<g:id>ed1c56c0-30df-4661-b1f3-0c61288a4a53</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret mascara - supra volume?ed1c56c0-30df-4661-b1f3-0c61288a4a53 ]]></link>
<g:price><![CDATA[ 3800.40 EUR ]]></g:price>
<description><![CDATA[ <div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Du soin, du maquillage rien que pour vos beaux yeux. D'abord, Total Eye Lift, le soin expert regard à l'extrait d’harungana bio qui contribue à redensifier et en cire de cassie reconnue pour ses propriétés lissantes : sa texture douce et légère apporte un effet lift au contour de l'oeil en 60 secondes* chrono pour 80% des femmes tout en redensifiant la peau. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297595</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e2f62a64d8364785eeb4fdefd31ad141361b978881f3836c5386effa1714ea0 ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Maternite ]]></title>
<g:id>494a6243-e5c4-481f-aaa8-ae1d085d54da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret maternite?494a6243-e5c4-481f-aaa8-ae1d085d54da ]]></link>
<g:price><![CDATA[ 10500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret contient :</p><p>Body Partner (175 ml)<br>Huile Tonic 100 ml)<br>Multi-Active Crème Jour toutes Peaux (15 ml)<br>Lip Comfort OIl 4 mini (1,4 ml)<br>Mascara Wonder Volume XXl - Extrême Black (3 ml)<br>1 trousse</p><p>Dans ce coffret maternité, découvrez la parfaite routine visage et corps des futures et jeunes mamans pour préserver l'apparence de la jeunesse et la beauté de la peau. Pour le visage, une crème de jour formulée avec un extrait de cardère aux propriétés revitalisantes.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057332814</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2242d4df6471e2171920f67ea0a0a269ee72b48f2c6613c60379085cc57e64d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Coffret Men Energisant ]]></title>
<g:id>f9501681-7059-4893-a0bc-f934a8d0aa02</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret men energisant?f9501681-7059-4893-a0bc-f934a8d0aa02 ]]></link>
<g:price><![CDATA[ 5800.00 EUR ]]></g:price>
<description><![CDATA[ <div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Les quatre soins essentiels visage pour une peau en pleine forme malgré un mode de vie intense, messieurs ! Un gel hydratant et fortifiant à l'extrait de ginseng rouge qui réénergise toutes les peaux, un gel super frais défatigant spécialement formulé pour la peau fragile du contour des yeux, un gel moussant pour nettoyer le visage et purifier la peau et un  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297564</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2163bb3d0e041306127619b3c242eb5be2a7fdff3306e02ce10afb691d9b956b ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret Multi-Active ]]></title>
<g:id>b6a1e35d-8f6b-489a-8ceb-4bd18236638f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret multi-active?b6a1e35d-8f6b-489a-8ceb-4bd18236638f ]]></link>
<g:price><![CDATA[ 7300.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion-content expandable-content-js mb-base flex-column">
<div class="discover-more-product-section__description">
<div class="long-description-wrapper">
<div class="product-info__long-description">Le coffret de soins premières rides pour les femmes actives qui veulent protéger leur peau des méfaits d'un rythme intense. Deux crèmes jeunesse, l'une pour le jour, l'autre pour la nuit, formulées avec un duo puissant [Niacinamide + extrait de chardon des dunes] pour aider  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057297335</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb9860479789868b8f436d431867b3e5ad68709951e8d7b8d966c10515dcfb5b ]]></g:image_link>
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
<title><![CDATA[ Clarins Coffret eau dynamisante spray 50ml douche 30ml lait fondant 100ml ]]></title>
<g:id>5769e677-96cc-4170-9834-ddc2e18c2068</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-coffret eau dynamisante spray 50ml douche 30ml lait fondant 100ml?5769e677-96cc-4170-9834-ddc2e18c2068 ]]></link>
<g:price><![CDATA[ 3789.60 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret réunit la mythique Eau Dynamisante, la toute première Eau de Soins Clarins, et deux soins corps au parfum vivifiant de l'Eau Dynamisante : un lait hydratant corps à l'extrait de kalanchoé officinal bio et un gel douche à l'extrait d'aloe vera. Ce Rituel Énergie parfume, énergise et tonife le corps et l’esprit. Il est parfait pour bien commencer la journée ou procurer une sensation d'énergie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057328220</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c539a8194715d5347bbf0c515357ee9b73779a71cd8ff8974ccd2ae59c53d59a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Collection Eau Dynamisante ]]></title>
<g:id>0abfe11f-0dff-4064-a563-61a7c7545896</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-collection eau dynamisante?0abfe11f-0dff-4064-a563-61a7c7545896 ]]></link>
<g:price><![CDATA[ 6400.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret réunit dans une grande trousse : la mythique Eau Dynamisante, la toute première Eau de Soins Clarins et un gel douche à l'extrait d'aloe vera au parfum vivifiant de l'Eau Dynamisante. Ce Rituel Énergie parfume, énergise et tonife le corps et l’esprit. Il est parfait pour bien commencer la journée. Une grande trousse contient tous ces soins.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057327162</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36f73b9d0e6997d58651818bcd3b3d17f024c8e7d6941cc94840a8f21210414b ]]></g:image_link>
<g:product_type><![CDATA[ PARFUMERIE > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Collection Eau Extraordinaire ]]></title>
<g:id>861a074c-bdd2-4b74-b6a4-09c7e7c70555</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-collection eau extraordinaire?861a074c-bdd2-4b74-b6a4-09c7e7c70555 ]]></link>
<g:price><![CDATA[ 6400.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret réunit dans une grande trousse l'Eau Extraordinaire, la toute dernière Eau de Soins Clarins, et une crème de douche au parfum revitalisant de l'Eau Extraordinaire formulée avec de l'huile d'amande douce bio. Ce Rituel Force intérieure parfume, ravive la force intérieure et éveille les sens. Leur parfum vous transporte au cœur de l’univers végétal Clarins et invite à la reconnexion avec soi-même.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057327179</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/75f8e3fdd96c3f12ad79294842e6a904615a15e2138c78216af4f662e2014493 ]]></g:image_link>
<g:product_type><![CDATA[ PARFUMERIE > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Comfort Scrub 100ml ]]></title>
<g:id>94de88be-7e30-481d-8eaa-e1d77c9a6ee0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-comfort scrub 100ml?94de88be-7e30-481d-8eaa-e1d77c9a6ee0 ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js">Avec l'exfoliant huile Comfort Scrub, la peau est chouchoutée dans sa globalité. Ce soin nourrit et apporte à la peau tout le confort dont elle a besoin en un seul geste. Ses microcristaux de sucre éliminent les peaux mortes de la peau et des lèvres.</div>
<p></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810332315</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c38eb3b17fd514e33fda236d94aee2ba85dfaa92d165269c22c8d5afe0205c2e ]]></g:image_link>
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
<title><![CDATA[ Clarins Compact Solaire Minéral Spf30 Beige Naturel ]]></title>
<g:id>16111ede-b754-41c0-b3a3-6af2d7697dae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-compact solaire minéral spf30 beige naturel?16111ede-b754-41c0-b3a3-6af2d7697dae ]]></link>
<g:price><![CDATA[ 3844.80 EUR ]]></g:price>
<description><![CDATA[ <p><span>Crème solaire fluide teintée au format compact et au parfum exotique: effluves ensoleillées de mandarine, d'orange et de cassis.</span><br /><span>- Protège des UVA &amp; UVB [SunFilterComplex]</span><br /><span>- Protège des signes du photovieillissement (SunPlantComplex - combinaison 100% végétale de 6 extraits de plantes : Épi d'or, Platane, Olivier, Baobab, Pois et Aloé Vera)</span><br /><span>- Protège la peau des méfaits du soleil et des radicaux libres pour révéler le plus beau d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810304770</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/764dfa1f554bc25a1f7a68cf112441f2dcfac7b5e881447c1bd10ed1f563db43 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Crayon Khol noir 01 ]]></title>
<g:id>2919c084-6b9e-421d-b0ab-55ee775e2eaf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crayon khol noir 01?2919c084-6b9e-421d-b0ab-55ee775e2eaf ]]></link>
<g:price><![CDATA[ 2000.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Souligne et intensifie le regard</li>
<li>Double fini : couleur nette ou dégradée grâce au pinceau applicateur</li>
<li>Application douce, nette et facile</li>
<li>Longue tenue</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380814210916</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d4e34b64db32bb7f2fd7abf9ca72f8c52c544dc7aec9850e639755d0fd99cae ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Crayon sourcils 02 light brown ]]></title>
<g:id>8c6799f1-0e4d-427e-b025-c8243f12aa88</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crayon sourcils 02 light brown?8c6799f1-0e4d-427e-b025-c8243f12aa88 ]]></link>
<g:price><![CDATA[ 1900.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un crayon sourcils longue tenue qui définit et discipline la forme des sourcils. Un outil double pour un tracé plus que parfait : une mine souple et précise pour dessiner la courbe des sourcils et une brosse spirale pour coiffer et discipliner. Le maquillage des sourcils n'a jamais été aussi simple !</span></p>
<ul><li>Mine ferme et souple</li>
<li>La brosse permet de discipliner le sourcil</li>
<li>Tracé précis</li>
<li>Longue tenue</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380814213412</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3bf5cb25ff714ed5abe2cb101d18c47034943e65c3f2dac8690ce0c25003b260 ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Crayon waterproof 02 Chestnut ]]></title>
<g:id>8c24a253-3f8c-4233-b087-bb6f12408cfd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crayon waterproof 02 chestnut?8c24a253-3f8c-4233-b087-bb6f12408cfd ]]></link>
<g:price><![CDATA[ 2200.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le contour des yeux ose le trait de couleur pure avec ce crayon yeux waterproof. Sa mine précise et facile à estomper assure un tracé impeccable dès le premier passage. Waterproof, le résultat reste en place pendant 8 heures sans bouger.</span><span>Le contour des yeux ose le trait de couleur pure avec ce crayon yeux waterproof. Sa mine précise et facile à estomper assure un tracé impeccable dès le premier passage. Waterproof, le résultat reste en place pendant 8 heures sans bouger.</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810416862</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c13ace962564c867e8ab86b10b50a0ed3364ed4c8b8a5ec697bb9780f69a3024 ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Cryo Flash Cream Mask  ]]></title>
<g:id>60988dff-788a-4f99-81b0-63192726ef52</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-cryo flash cream mask ?60988dff-788a-4f99-81b0-63192726ef52 ]]></link>
<g:price><![CDATA[ 7900.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Un produit pas comme les autres</strong></p><ul><li><p>Effet lift, peau retendue</p></li><li><p>Effet perfecteur, peau lissée et sublimée.</p></li><li><p>Effet booster d'éclat</p></li></ul><h2><strong>En savoir plus</strong></h2><p>Votre peau manque d’éclat et de fermeté ?&nbsp; Vos rides et vos ridules sont de plus en plus visibles ? Vous êtes à la recherche d’une solution immédiate et efficace ?&nbsp;<br>En matière de soins de la peau, Clarins n'a jamais cessé d’innover. Découvrez l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057128257</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2d1676d84079074e35a33775d350a4b3594d27221cc3e1eacedfa6bfa1adecb7 ]]></g:image_link>
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
<title><![CDATA[ Clarins Crème Jeunesse des Mains 100ml ]]></title>
<g:id>c69392e1-107d-4b1e-9e75-d22a427e67a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème jeunesse des mains 100ml?c69392e1-107d-4b1e-9e75-d22a427e67a7 ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour des mains souples et douces, lissées à la perfection.</span><br /><span>L'indispensable crème mains pour préserver la jeunesse de vos mains.</span><br /><br /><span>Cette crème pour les mains est un soin professionnel ultra-émollient aux extraits d'Huile de Sésame apaisant et de Mûrier du Japon fortifiant pour former un « gant » invisible et protecteur sur les mains, véritable écran contre les agressions climatiques minimisant les signes de vieillissement. Ce soin apporte douceur e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810469585</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d89a96d78207ba58a1326a8016c37cddd4ab8925ad167702e99727e28398ae0d ]]></g:image_link>
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
<title><![CDATA[ Clarins Crème Jeunesse des Mains 30ml ]]></title>
<g:id>13245d14-8ee2-4c1b-b571-4bbe16108ecc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème jeunesse des mains 30ml?13245d14-8ee2-4c1b-b571-4bbe16108ecc ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydratation intense</p>
<p>Pour des mains souples et douces, lissées à la perfection.<br />L'indispensable crème mains pour préserver la jeunesse de vos mains.<br /><br />Cette crème pour les mains est un soin professionnel ultra-émollient aux extraits d'Huile de Sésame apaisant et de Mûrier du Japon fortifiant pour former un « gant » invisible et protecteur sur les mains, véritable écran contre les agressions climatiques minimisant les signes de vieillissement. Ce soin apporte douceur et con ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057008122</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7ea4d227e8c7d4d1f0a860882a3b149ce20b85e4fa99af2e62915491612ddb4 ]]></g:image_link>
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
<title><![CDATA[ Clarins Crème Jeunesse des Pieds 125 ml ]]></title>
<g:id>05a8f9eb-d45e-48f4-8fe0-2edf6ac52de1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème jeunesse des pieds 125 ml?05a8f9eb-d45e-48f4-8fe0-2edf6ac52de1 ]]></link>
<g:price><![CDATA[ 2860.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Soin confort apaisant pour les pieds fatigués ! Découvrez ce que marcher sur un nuage veut dire grâce à cette crème qui soulage la fatigue grâce à un extrait d'Arnica. Crème Jeunesse des Pieds lisse les rugosités grâce à la présence d'huile de Noix de Cajou de Virginie et de Beurre de Karité. Le soin renforce et embellit les ongles grâce à la Myrrhe. Il rénove et protège des chevilles jusqu'au bout des orteils.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057041150</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88a27f75fc1ee625405e18395ff160de7dc4eb14f69f00a722aba32013c568f4 ]]></g:image_link>
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
<title><![CDATA[ Clarins Crème Solaire Corps UVA/UVB 30 150ml ]]></title>
<g:id>9724a050-62b8-4e89-8779-d8fe0d058a45</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème solaire corps uva/uvb 30 150ml?9724a050-62b8-4e89-8779-d8fe0d058a45 ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le soin haute protection de toutes les peaux, en toutes circonstances (quelles que soient la destination et l’activité pratiquée).</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810304916</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/21d57c954373394e20c421c394f62566c350334d4bae041ddcfb637bba1d9ddb ]]></g:image_link>
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
<title><![CDATA[ Clarins Crème Solaire Toucher Sec Visage UVA/UVB 30 50ml ]]></title>
<g:id>a5c2a0af-8312-4a66-b9f5-e49878bcf497</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème solaire toucher sec visage uva/uvb 30 50ml?a5c2a0af-8312-4a66-b9f5-e49878bcf497 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème solaire haute protection antioxydante de toutes les peaux, même les plus sensibles, en toutes circonstances.</p>
<p>Crème solaire visage au parfum exotique: effluves ensoleillées de mandarine, d’orange et de cassis.<br /><br />- Protège des UVA &amp; UVB [SunFilterComplex]<br />- Protège des signes du photovieillissement (SunPlantComplex - combinaison 100% végétale de 6 extraits de plantes : Épi d’or, Platane, Olivier, Baobab, Pois et Aloé Vera)<br />- Protège la peau des méfaits du  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810304541</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc1a0ae81e09714c35bc974ee7dd806bc91fbb146004d1f5c71bb2ef3cda2830 ]]></g:image_link>
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
<title><![CDATA[ Clarins Crème solaire jeunesse SPF 50+ 50 ml ]]></title>
<g:id>7390f8bb-2bde-47a3-af96-25bc67862863</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème solaire jeunesse spf 50+ 50 ml?7390f8bb-2bde-47a3-af96-25bc67862863 ]]></link>
<g:price><![CDATA[ 3600.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Protection optimale contre les méfaits du soleil et de la lumière bleue.</p></li><li><p>Hydrate la peau, fini sec et invisible.</p></li><li><p>Adaptée aux activités d’extérieur, résiste à l’eau.</p></li><li><p>Idéale pour toutes les carnations.</p></li></ul><h2><strong>En savoir plus</strong></h2><p>Avec sa texture fondante, cette crème solaire SPF50+ offre une protection et hydrate la peau tout en laissant un fini sec et invisible pour toutes les carnations. Elle est parfaitement ada ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057217340</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19ef440de13e87d0ac8624eaaf6a04cd15fda400a1da3276e4c9e6b71a267148 ]]></g:image_link>
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
<title><![CDATA[ Clarins Double Serum 30mL ]]></title>
<g:id>f0fc2ef3-6362-4703-b4d0-0a66e2ae91e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-double serum 30ml?f0fc2ef3-6362-4703-b4d0-0a66e2ae91e4 ]]></link>
<g:price><![CDATA[ 9790.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Peau raffermie</li>
<li>Rides visiblement lissées</li>
<li>Eclat et unité du teint retrouvés</li>
<li>Pores atténués</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810149661</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ade5feab8c679d3ac975cdbf384334fd5d2b21715bf4c666ea4078942b05e2a ]]></g:image_link>
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
<title><![CDATA[ Clarins Double Serum 30ml ]]></title>
<g:id>3f7a7d69-9b77-44f4-b0c6-eecd8d5a0e91</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-double serum 30ml?3f7a7d69-9b77-44f4-b0c6-eecd8d5a0e91 ]]></link>
<g:price><![CDATA[ 10500.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<div class="discover-more-benefit-section__text">
<ul><li>Découvrez le nouveau sérum anti-âge Double Serum inspirée par la science de l'épigénétique qui agit visiblement sur les signes de l'âge.</li>
<li>Une goutte de notre sérum à base de Curcuma seulement pour une peau lisse et éclatante de jeunesse.</li>
<li>Rides visiblement lissées.</li>
<li>Peau raffermie, rebondie et plus éclatante.</li>
<li>Grain de peau affiné, pores atténués.</li>
</ul></div>
<p></p>
<p></p>
<div class="long-de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057202445</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf34c30d2494bcda1eb27863866d2976f92a580b623930f5e7e6375a014b6da3 ]]></g:image_link>
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
<title><![CDATA[ Clarins Double Serum 50ml ]]></title>
<g:id>c4ffe326-58dc-4e3b-a256-b31f73895c21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-double serum 50ml?c4ffe326-58dc-4e3b-a256-b31f73895c21 ]]></link>
<g:price><![CDATA[ 15000.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<div class="discover-more-benefit-section__text">
<ul><li>Découvrez le nouveau sérum anti-âge Double Serum inspirée par la science de l'épigénétique qui agit visiblement sur les signes de l'âge.</li>
<li>Une goutte de notre sérum à base de Curcuma seulement pour une peau lisse et éclatante de jeunesse.</li>
<li>Rides visiblement lissées.</li>
<li>Peau raffermie, rebondie et plus éclatante.</li>
<li>Grain de peau affiné, pores atténués.</li>
</ul></div>
<p></p>
<p></p>
<div class="long-de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057202476</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1705ddfb5eebe50f7d43d8fbd4424280fc58ea20ea27a388d920366a11656a02 ]]></g:image_link>
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
<title><![CDATA[ Clarins Double Serum 75 ml ]]></title>
<g:id>86d47119-3c44-40fb-be5e-11a0bd5d0430</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-double serum 75 ml?86d47119-3c44-40fb-be5e-11a0bd5d0430 ]]></link>
<g:price><![CDATA[ 18000.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Découvrez le nouveau sérum anti-âge Double Serum inspirée par la science de l'épigénétique qui agit visiblement sur les signes de l'âge.</li>
<li>Une goutte de notre sérum à base de Curcuma seulement pour une peau lisse et éclatante de jeunesse.</li>
<li>Rides visiblement lissées.</li>
<li>Peau raffermie, rebondie et plus éclatante.</li>
<li>Grain de peau affiné, pores atténués.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057202506</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f4b115d4b346a868908a4235b9ea803103b9a0d4c520231e163f437d9d06c365 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Double Serum Eye 20ml ]]></title>
<g:id>e00dc2e5-4760-4ce9-a518-c79ea0987025</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-double serum eye 20ml?e00dc2e5-4760-4ce9-a518-c79ea0987025 ]]></link>
<g:price><![CDATA[ 8390.00 EUR ]]></g:price>
<description><![CDATA[ <p>La puissance de Double Serum maintenant pour vos yeux.</p>
<p>Le sérum yeux complet à 96% d’origine naturelle pour préserver visiblement la beauté et la jeunesse du regard. Sa double formule unique, enrichie en 13 extraits de plantes, dont les puissants extraits de cerfeuil des bois bio et de curcuma booste les 5 fonctions vitales de la peau et agit visiblement sur les signes de l’âge : lisse les rides, réduit les poches, les cernes et fortifie la peau du contour des yeux. Sa double texture l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810463170</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/feb52da3e9d8c4a539eda4b1ce304239e5aec67222e0851fc632bf8bdb090134 ]]></g:image_link>
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
<title><![CDATA[ Clarins Douche fraîche énergisante - Eau Dynamisante 200ml ]]></title>
<g:id>5b316759-127a-4959-a601-99002e6fd0d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-douche fraîche énergisante - eau dynamisante 200ml?5b316759-127a-4959-a601-99002e6fd0d4 ]]></link>
<g:price><![CDATA[ 2700.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'iconique Eau Dynamisante se décline en gel douche pour nettoyer la peau sous la douche ou dans le bain. Boostez votre énergie avec ce soin lavant qui associe le parfum vivifiant des huiles essentielles de l’Eau Dynamisante à l’extrait d’aloe vera bio hydratant. Sa texture gel nettoie la peau en douceur et l’hydrate, tout en la laissant délicatement parfumée. 92% d’ingrédients d’origine naturelle.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057025839</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9b879fc103e19432a457ba20511abe911569a96aab4e5d03048c51568bc14cd ]]></g:image_link>
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
<title><![CDATA[ Clarins Doux Nettoyant Moussant Apaisant 125ml ]]></title>
<g:id>3c2520d5-f3d9-400c-b8b0-9d083f255e15</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-doux nettoyant moussant apaisant 125ml?3c2520d5-f3d9-400c-b8b0-9d083f255e15 ]]></link>
<g:price><![CDATA[ 2800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce soin nettoyant a été formulé spécifiquement pour les peaux très sèches ou sensibles qui se démaquillent à l'eau : un parfum frais, une texture très confortable qui se transforme en une mousse fine, des extraits de plantes apaisants qui aident à prévenir les sensations de peau qui tire. La peau est parfaitement nettoyée, douce.</span><br /><span>Tous nos produits sont conçus dans une démarche d'innovation responsable et de progrès continus.</span><br /><span>Ces nouvelles formules son ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810427332</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/628681519f00a537416227695211001199b4baa23997cb9e016a98c9c2f30b00 ]]></g:image_link>
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
<title><![CDATA[ Clarins Doux Nettoyant Moussant Purifiant Peaux mixtes à grasses 125ml ]]></title>
<g:id>0750817a-8f6b-47ef-86f7-43adbce58eaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-doux nettoyant moussant purifiant peaux mixtes à grasses 125ml?0750817a-8f6b-47ef-86f7-43adbce58eaa ]]></link>
<g:price><![CDATA[ 2800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un cocktail d’extraits de plantes pour nettoyer efficacement la peau !</p>
<p>Le nouveau doux nettoyant moussant purifiant Clarins, nettoie efficacement et en douceur les peaux mixtes à grasses, élimine les traces de maquillage, débarrasse la peau des impuretés et favorise l'élimination des particules de pollution. En plus d’éliminer le maquillage, et de débarrasser la peau des impuretés, ce doux nettoyant moussant, contribue à préserver le microbiote cutané lors du nettoyage ! Grâce au squal ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810427318</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c989d74fe5b20b6f10c7a1f8e7862e462e0a3845887f48368ac1cc6fef6760d4 ]]></g:image_link>
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
<title><![CDATA[ Clarins Doux Peeling Crème Gommante 50mL ]]></title>
<g:id>cac9dfa4-9698-4862-91d8-0d86804ee82b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-doux peeling crème gommante 50ml?cac9dfa4-9698-4862-91d8-0d86804ee82b ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Elimine les cellules mortes et les impuretés</li>
<li>Apaise</li>
<li>Apporte de l'éclat</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380811243108</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/111cc632f55debd8d7b5baad6b57f61159ee448dfa9d839582e1c85de1fa972f ]]></g:image_link>
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
<title><![CDATA[ Clarins Eau Dynamisante - Eau de Soin 100ml ]]></title>
<g:id>5a6ef9b6-38a4-4bb1-b184-c77fd6842ad9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau dynamisante - eau de soin 100ml?5a6ef9b6-38a4-4bb1-b184-c77fd6842ad9 ]]></link>
<g:price><![CDATA[ 6000.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La première et l'iconique eau de soins : l'eau dynamisante aux agrumes Clarins ! Composée de 95% d'ingrédients d'origine naturelle, elle parfume, énergise et tonifie le corps et l’esprit. Elle est parfaite pour bien commencer la journée ou lutter contre un coup de fatigue passagère. D’abord les notes de tête d’oranges douce et amère, de mandarine et de petit grain dévoilent leur senteur fraîche. Puis les notes de cœur de lavandin, d’eucalyptus, d’estragon et de noix de muscade associées ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057025754</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/be6619557b9bff0874352377ac49d1d722e54ce8ea422ca7a1ce3af25ebabc7f ]]></g:image_link>
<g:product_type><![CDATA[ PARFUMERIE > Dermocosmétique > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Eau Dynamisante - Eau de Soin 200ml ]]></title>
<g:id>0c26ed77-dfd9-42d0-b145-95f4837e85af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau dynamisante - eau de soin 200ml?0c26ed77-dfd9-42d0-b145-95f4837e85af ]]></link>
<g:price><![CDATA[ 8390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La première et l'iconique eau de soins : l'eau dynamisante aux agrumes Clarins ! Composée de 95% d'ingrédients d'origine naturelle, elle parfume, énergise et tonifie le corps et l’esprit. Elle est parfaite pour bien commencer la journée ou lutter contre un coup de fatigue passagère. D’abord les notes de tête d’oranges douce et amère, de mandarine et de petit grain dévoilent leur senteur fraîche. Puis les notes de cœur de lavandin, d’eucalyptus, d’estragon et de noix de muscade associées ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057025747</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a74837cff1b8d4fbca57c95d0c81fea7e7f0faa6e861f97ff125cce712e303fe ]]></g:image_link>
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
<title><![CDATA[ Clarins Eau Extraordinaire - Eau de Soin 100ml ]]></title>
<g:id>babac476-fba7-4d56-87e1-9dd53a60cc9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau extraordinaire - eau de soin 100ml?babac476-fba7-4d56-87e1-9dd53a60cc9c ]]></link>
<g:price><![CDATA[ 6000.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette eau de soins florale et fruitée parfume, ravive votre force intérieure et éveille vos sens en un seul geste. Cette fragrance fruitée offre une expérience sensorielle rafraîchissante tout en apportant des bienfaits hydratants. Composée à 95% d'ingrédients d'origine naturelle, elle associe le parfum réconfortant des huiles essentielles au pouvoir adoucissant et stimulant des extraits de plantes pour une peau qui retrouve tout son confort.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057026164</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/395eb5268b4479e20184605de866defa08193ee73f8cc6cd402fa849248c29dd ]]></g:image_link>
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
<title><![CDATA[ Clarins Eau Extraordinaire-Eau de Soin 50ml ]]></title>
<g:id>a578aba4-1be8-444c-b9ab-3938fec9c7aa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau extraordinaire-eau de soin 50ml?a578aba4-1be8-444c-b9ab-3938fec9c7aa ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette eau de soins florale et fruitée parfume, ravive votre force intérieure et éveille vos sens en un seul geste. Cette fragrance fruitée offre une expérience sensorielle rafraîchissante tout en apportant des bienfaits hydratants. Composée à 95% d'ingrédients d'origine naturelle, elle associe le parfum réconfortant des huiles essentielles au pouvoir adoucissant et stimulant des extraits de plantes pour une peau qui retrouve tout son confort.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057026171</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9efb4a792fd8246f9f754bf5a0934bd0d79c4e7cf8348047a7658b4227f1092 ]]></g:image_link>
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
<title><![CDATA[ Clarins Eau Ressourçante - Eau de Soin 100ml ]]></title>
<g:id>302665aa-2417-405d-8008-558677c13251</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau ressourçante - eau de soin 100ml?302665aa-2417-405d-8008-558677c13251 ]]></link>
<g:price><![CDATA[ 6000.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Fleurie et boisée, découvrez l'eau de soin ressourçante. Cette eau de soins composée de 93% d'ingrédients d'origine naturelle parfume, dissipe le stress et délasse le corps et l’esprit. C’est une alliée hors pair en cas de fatigue ou de tensions pour aider la peau et l’esprit à retrouver harmonie et sérénité. D’abord, les notes de tête du basilic et de la cardamone, de cette fragrance boisée et florale, rafraîchissent instantanément la peau. Puis les notes de cœur de sauge sclarée et d’ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057025907</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/813d1e3adcdda3f753e4ee3ae65d929286c9d02a076031606dc56ecc5768a413 ]]></g:image_link>
<g:product_type><![CDATA[ PARFUMERIE > Dermocosmétique > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Eau de Soins - Eau Ressourçante 50ml ]]></title>
<g:id>256c4e55-82b3-4412-9109-49f3b4ee2eb8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau de soins - eau ressourçante 50ml?256c4e55-82b3-4412-9109-49f3b4ee2eb8 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Fleurie et boisée, découvrez l'eau de soin ressourçante. Cette eau de soins composée de 93% d'ingrédients d'origine naturelle parfume, dissipe le stress et délasse le corps et l’esprit. C’est une alliée hors pair en cas de fatigue ou de tensions pour aider la peau et l’esprit à retrouver harmonie et sérénité. D’abord, les notes de tête du basilic et de la cardamone, de cette fragrance boisée et florale, rafraîchissent instantanément la peau. Puis les notes de cœur de sauge sclarée et d’ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057025914</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/813d1e3adcdda3f753e4ee3ae65d929286c9d02a076031606dc56ecc5768a413 ]]></g:image_link>
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
<title><![CDATA[ Clarins Eau des Jardins - Eau de Soin 100ml ]]></title>
<g:id>162d0acb-57ed-4a49-8279-9efa283f2402</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau des jardins - eau de soin 100ml?162d0acb-57ed-4a49-8279-9efa283f2402 ]]></link>
<g:price><![CDATA[ 6000.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'iconique Eau Dynamisante Clarins se décline en Eau des Jardins, florale et pétillante. Cette Eau de Soins composée de 93% d'ingrédients d'origine naturelle parfume et éveille la joie. Elle est idéale pour chasser la morosité et donner du pep’s dès le matin. Les zestes stimulants des notes de tête de citron, d’orange et de pamplemousse inondent la peau de fraîcheur. Puis, les notes de cœur de laurier, menthe crépue et géranium combinées aux notes équilibrantes du cèdre procurent une ag ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057026034</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/898e1ff75a938ab55669ed0f666d790a8aa94e3054c4ba01622a2c40af2e3a74 ]]></g:image_link>
<g:product_type><![CDATA[ PARFUMERIE > Dermocosmétique > PARFUM ET EAU DE TOILETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Eau-en-Brume Solaire SPF50+ 150ml ]]></title>
<g:id>3c62b27f-92ce-4d0d-ba97-492250b90ef5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-eau-en-brume solaire spf50+ 150ml?3c62b27f-92ce-4d0d-ba97-492250b90ef5 ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce soin très haute protection pour le corps est ultra-sensoriel et absorbé rapidement par la peau grâce à sa diffusion en brume, pour une application agréable et facile. Sa texture légère et aqueuse se vaporise uniformément et reste invisible. Elle assure une très haute protection tout en rafraîchissant et en hydratant la peau.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810374421</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c9e2264753d34f3f9cc8c26a620d50701c63a8f0bdfe43b87674bddc99e50de ]]></g:image_link>
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
<title><![CDATA[ Clarins Embellisseur lèvres Intense intense maple 17 ]]></title>
<g:id>979830ac-9f20-42dc-97dc-b01148b66d5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-embellisseur lèvres intense intense maple 17?979830ac-9f20-42dc-97dc-b01148b66d5e ]]></link>
<g:price><![CDATA[ 2400.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour des lèvres réparées, repulpées et joliment teintées</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810309614</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ffaee37c6d668af1f9a5a6cd28af08f315cc12b8c7c6467507f2244301b63fc ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Extra Firming Energy 50ml ]]></title>
<g:id>e5e88ee6-e1e3-494f-9e07-a20c65a994b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra firming energy 50ml?e5e88ee6-e1e3-494f-9e07-a20c65a994b5 ]]></link>
<g:price><![CDATA[ 9390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>C'est la crème de jour qui a pensé à tout pour les femmes de 40 ans, hyper actives et souvent débordées. Le soin 2-en-1 qui allie l'expertise fermeté Clarins à l'effet embelliseur d'une crème éclat. En effet la peau soumise à un rythme de vie effréné perd en tonus, fatigue, et les rides apparaissent...Extra-Firming Energy est la réponse pour agir à la fois sur la fermeté de la peau et apporter un double effet bonne mine et énergie ! Et bien sûr, sensorialité et bien-être à chaque applic ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810421590</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66c0047acab08486c2dfda1d558c8ef2f67c4f8053dee8b02f4e0108e0c1eb12 ]]></g:image_link>
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
<title><![CDATA[ Clarins Extra-Firming Cou & Décolleté 75mL ]]></title>
<g:id>e56bb4be-0e61-40af-9012-1442d07cf0eb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming cou & décolleté 75ml?e56bb4be-0e61-40af-9012-1442d07cf0eb ]]></link>
<g:price><![CDATA[ 7800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Soin anti-âge Extra-Firming, Lisse, raffermit, regalbe</span><br /><span>Le soin Lift-Regalbant et lissant Extra Firming pour le cou et le décolleté qui raffermit la peau et lisse les rides pour préserver la jeunesse et la beauté de cette zone fragile.</span><br /><span>Au coeur d'une texture crème onctueuse et fondante et non gras, l'association d'extraits de tournesol insaponifiable + auxines, préserve l'élasticité et la fermeté de la peau du cou et décolleté.</span><br /><span>L'extr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810343281</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/77ca1ebaf03f1ffa84e9693351c08ca2c87bc33f2bc95d1c766d01030ac32e0e ]]></g:image_link>
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
<title><![CDATA[ Clarins Extra-Firming Crème de Jour Peaux Seches Recharge ]]></title>
<g:id>39903b43-364a-4773-bf97-5a06a14acce2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming crème de jour peaux seches recharge?39903b43-364a-4773-bf97-5a06a14acce2 ]]></link>
<g:price><![CDATA[ 8290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable*.<br><br>Extra-Firming Jour, la crème anti-âge pour peaux sèches, idéale pour les peaux déshydratées, qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Pour améliorer la fermeté de la peau, Clarins crée une innovation exclusive [COL ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272677</g:gtin>
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
<title><![CDATA[ Clarins Extra-Firming Nuit Peaux Sèches ]]></title>
<g:id>87638d1f-22fe-47d6-b1c4-3fc169f68e40</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-extra-firming nuit peaux sèches?87638d1f-22fe-47d6-b1c4-3fc169f68e40 ]]></link>
<g:price><![CDATA[ 10790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins repousse encore les limites de la connaissance sur le collagène avec une innovation majeure dans sa nouvelle gamme Extra-Firming maintenant rechargeable.*<br><br>Extra Firming Nuit, la crème de nuit anti-âge pour peaux sèches, idéale pour les peaux déshydratées, qui augmente votre capital collagène pour un visage plus ferme, plus lisse, visiblement rajeuni. La peau est visiblement plus ferme dès 7 jours.**<br><br>Pour améliorer la fermeté de la peau, Clarins crée une innovation exclus ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057272745</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73998b08c74b0bea4ac22a94d3f049d2b6be1771f5bb9cd683ef909505ac1937 ]]></g:image_link>
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
<title><![CDATA[ Clarins Fix' Make-Up 50mL ]]></title>
<g:id>d3618e85-ebf6-4173-b792-7b9f15ad69ad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-fix' make-up 50ml?d3618e85-ebf6-4173-b792-7b9f15ad69ad ]]></link>
<g:price><![CDATA[ 3890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Une brume aérienne et rafraîchissante qui fixe le maquillage et lui offre une meilleure tenue. Enrichie en aloe vera et en allantoïne, elle hydrate et apaise instantanément la peau. Son parfum vivifiant à l’extrait de pamplemousse et à l’eau florale de rose bio procure un bien-être continu. Un geste simple pour un maquillage longue tenue.</span><br /><br /><span>Complexe anti-pollution exclusif Clarins.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810040692</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8f5219fca7187ee55c6f87494b006e1283c3db841c437442ae2ae59e26bf459 ]]></g:image_link>
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
<title><![CDATA[ Clarins Gel Buste Super Lift 50mL ]]></title>
<g:id>29e36615-6e0e-4769-92d6-ad7c1a0a965f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-gel buste super lift 50ml?29e36615-6e0e-4769-92d6-ad7c1a0a965f ]]></link>
<g:price><![CDATA[ 6590.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>De la base des seins au menton, retend et lisse le "soutien-gorge naturel".</li>
<li>Tonifie et prévient le relâchement cutané.</li>
<li>Hydrate et adoucit la peau.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810296679</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/45b2df5e06c3ffe29d3ca75aec9861673c264c1fc868de8279d22775d261b577 ]]></g:image_link>
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
<title><![CDATA[ Clarins Gelée Auto-Bronzante Express 125ml ]]></title>
<g:id>7d78cf59-a697-432b-85ec-271b654afb92</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-gelée auto-bronzante express 125ml?7d78cf59-a697-432b-85ec-271b654afb92 ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Une texture gel, très fraîche, non grasse, qui hâle la peau, naturellement et uniformément grâce au [SelfTanComplex], combinaison de DHA d’origine naturelle et d’érythrulose. Facile à appliquer, elle fond instantanément sur la peau, ce qui permet de s'habiller peu de temps après l’application. La peau est douce et satinée, tout simplement superbe !</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810449037</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bbf7a4553904b9a3e2dbb239935f4568f7e797deb272e3bfc24797daa18b9725 ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentie l[HA²] Emulsion Désalterante 75ml ]]></title>
<g:id>1ea3076b-bf31-4e84-ba01-b8981ba8577a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentie l[ha²] emulsion désalterante 75ml?1ea3076b-bf31-4e84-ba01-b8981ba8577a ]]></link>
<g:price><![CDATA[ 5190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette émulsion est enrichie en acide hyaluronique, extrait de kalanchoé officinal bio et eau de rose de Damas bio. Des ingrédients connus pour leurs vertus hydratantes. Adaptée aux peaux normales à mixtes de tout âge, cette crème à la texture fluide non grasse hydrate et repulpe intensément la peau, tout en l'adoucissant.Au cœur de sa formule, le Hyaluronic Power Complex mis au point par les Laboratoires Clarins aide à relancer les mécanismes naturels d’auto-hydratation de la peau et à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057098048</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c3bc2bc2abef8cc13d91f85c645c4ec51671dbd6fd12ade769ef72ba3840a5c ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentiel Crème Gel Visage Hydratante et Matifiante 75ml ]]></title>
<g:id>aad6357b-5791-4d0d-a7c3-2b0096fffc38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentiel crème gel visage hydratante et matifiante 75ml?aad6357b-5791-4d0d-a7c3-2b0096fffc38 ]]></link>
<g:price><![CDATA[ 5190.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Cette crème gel hydratante enrichie en acide hyaluronique, extrait de kalanchoé officinal bio et épilobe des Moraines bio hydrate et repulpe intensément la peau, tout en la matifiant. Au coeur de sa formule, le Hyaluronic Power Complex mis au point par les Laboratoires Clarins aide à relancer les mécanismes naturels d’auto-hydratation de la peau et à pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057098031</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d33a41dafd505bd804f544539dc55dd61971e6eb0957f8961b17ac5f0ea96fd1 ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentiel Crème Hydratante Peaux Normales à Sèches 50 ml ]]></title>
<g:id>11270525-fd20-4472-8b04-51a16ae03351</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentiel crème hydratante peaux normales à sèches 50 ml?11270525-fd20-4472-8b04-51a16ae03351 ]]></link>
<g:price><![CDATA[ 5190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette crème hydratante pour peaux mixtes riche en acide hyaluronique et extrait de kalanchoé officinal bio hydrate et repulpe intensément la peau. Au coeur de sa formule, le Hyaluronic Power Complex, duo d'acides hyaluroniques et kalanchoé officinal bio mis au point par les Laboratoires Clarins aide à relancer les mécanismes naturels d’auto-hydratation de la peau et à préserver ses réserves hydriques. Cette crème hydratante pour peaux mixtes est adapté à toutes les femmes, de tout âge e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057097980</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/156d01835def6c7f5e5990ade4007769d8014f4b741bfe4ca28adb66182b29df ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentiel Crème Riche 50ml ]]></title>
<g:id>a003d34d-0a69-4ef2-ba8d-c428e99690db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentiel crème riche 50ml?a003d34d-0a69-4ef2-ba8d-c428e99690db ]]></link>
<g:price><![CDATA[ 5190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette crème hydratante pour peaux très sèches enrichie en acide hyaluronique, extrait de kalanchoé officinal bio et beurre de karité bio hydrate et repulpe intensément la peau, tout en la nourrissant. Au coeur de sa formule, le Hyaluronic Power Complex mis au point par les Laboratoires Clarins aide à relancer les mécanismes naturels d’auto-hydratation de la peau et à préserver ses réserves hydriques. Les peaux très sèches seront séduites par cette crème hydratante à la texture riche qui ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057098024</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ef548d934ba07a25a9f2b91e8b3bc74399ce736fc8bf758f6731c1e94a2872a ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentiel Crème de Nuit Hydratante 50ml ]]></title>
<g:id>f5858298-9f5d-4ee3-abd9-dcc83b2d4974</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentiel crème de nuit hydratante 50ml?f5858298-9f5d-4ee3-abd9-dcc83b2d4974 ]]></link>
<g:price><![CDATA[ 5490.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Cette crème de nuit hydratante riche en acide hyaluronique et extrait de kalanchoé officinal bio hydrate et repulpe intensément la peau. Au coeur de sa formule, le Hyaluronic Power Complex mis au point par les Laboratoires Clarins aide à relancer les mécanismes naturels d’auto-hydratation de la peau et à préserver ses réserves hydriques. Parce que la nu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057098055</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d0cf2f400b5b15cdc867cbffcf2a148f2af78c61598c5672221d62a0e1e02fc ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentiel Spf 15 50ml ]]></title>
<g:id>95b81eb2-8f6c-4446-a7dd-e62a4a4edce9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentiel spf 15 50ml?95b81eb2-8f6c-4446-a7dd-e62a4a4edce9 ]]></link>
<g:price><![CDATA[ 5190.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Cette crème hydratante visage SPF 15 riche en acide hyaluronique, extrait de kalanchoé officinal bio et extrait d’edelweiss bio hydrate et repulpe intensément la peau. Ce soin hydratant protège tous les types des peaux des méfaits des uvs et des radicaux libres. Elle aide également à prévenir du vieillissement prématuré de la peau grâce à son SPF 15. La ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057098017</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65185687d8e44e17a655543c216537a4e7641cb6a15fce617d008f80d8592ff5 ]]></g:image_link>
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
<title><![CDATA[ Clarins Hydra Essentiel [HA²] Masque Crème 75ml ]]></title>
<g:id>3735164e-bc66-4193-b410-16e1dd3e102a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-hydra essentiel [ha²] masque crème 75ml?3735164e-bc66-4193-b410-16e1dd3e102a ]]></link>
<g:price><![CDATA[ 4490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce masque-crème expert à la texture fraiche offre une hydratation suractivée.</span><br /><br /><span>Au coeur de sa formule, le [HYALURONIC POWER COMPLEX +], duo d'acide hyaluronique et extrait de kalanchoe bio, apporte hydratation continue, multi-niveaux et longue durée. L’extrait de kalanchoé officinal bio + l’acide hyaluronique aident à hydrater et à repulper la peau intensément. L’acide hyaluronique acétylé, actif phare de la formule, suractive l’hydratation.</span><br /><span>Il e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057200069</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bce06356e7c9648f4f7cfb1464bc864928fd0a46f86a7672f8716fd242f506da ]]></g:image_link>
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
<title><![CDATA[ Clarins Lait Buste Ultra-Fermeté 50ml ]]></title>
<g:id>9b89eba8-3f4b-4a9a-8a6f-a4bd33fe4351</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-lait buste ultra-fermeté 50ml?9b89eba8-3f4b-4a9a-8a6f-a4bd33fe4351 ]]></link>
<g:price><![CDATA[ 6590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le traitement raffermissant et anti-âge indispensable au maintien de la jeunesse du buste. Formulé à partir d'extraits de Vu Sua* et de bocoa, ce lait onctueux redonne densité et tonicité au "soutien-gorge naturel" qui, de la base des seins au menton, assure la beauté du buste. *Fruit récolté notamment au sud du Vietnam.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810296709</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/317f80ca743ecad481843366db33dbd386aaf13d9af987dc5cd2f2bb52d68398 ]]></g:image_link>
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
<title><![CDATA[ Clarins Lait Fondant Auto-Bronzant 125ml ]]></title>
<g:id>e8088a4e-7ee2-4313-accd-6e9d57f2268b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-lait fondant auto-bronzant 125ml?e8088a4e-7ee2-4313-accd-6e9d57f2268b ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Lait 2 en 1 parfait pour préparer l'été. Il pare la peau d'un hâle bluffant de naturel, uniforme et qui dure grâce au [SelfTanComplex], combinaison de DHA d’origine naturelle et d’érythrulose. Sa formule enrichie en extrait de figue bio hydrate la peau durant 24 heures*. La peau est sublimée, durablement hydratée, douce et lisse pour garder plus longtemps son bel éclat doré. Sa texture lactée au doux parfum de vacances fond immédiatement sur la peau : l'été dure toute l'année !</span ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810449020</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a30aa479bf50b2d15d77f98147d8e112d2cfe43215d06bb969b6eb63fe4d3917 ]]></g:image_link>
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
<title><![CDATA[ Clarins Lait Jambes Lourdes 125ml ]]></title>
<g:id>f5c13020-d072-4c27-bad1-192f4c11853e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-lait jambes lourdes 125ml?f5c13020-d072-4c27-bad1-192f4c11853e ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Il relaxe et soulage les jambes fatiguées, rafraîchit et procure une impression immédiate de légèreté et de bien-être. Grâce aux huiles essentielleset aux extraits naturels de plantes, cesoin jambes lourdes laisse la peau souple et douce et contribue à maintenir son hydratation. Sa texture poids-plume permet de l'appliquer à tout moment de la journée, même sur les collants et de rester debout en toute légèreté.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810691108</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/97a4d4ca710a7e9ada1befd78988eb835b79bb545a4979314c12000bd668c1dc ]]></g:image_link>
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
<title><![CDATA[ Clarins Lait corps hydratant velours 400 ml ]]></title>
<g:id>e7916065-8870-4380-9b0e-09b575f4e827</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-lait corps hydratant velours 400 ml?e7916065-8870-4380-9b0e-09b575f4e827 ]]></link>
<g:price><![CDATA[ 4090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce lait corps hydratant à l'aloe vera dispose d'une la texture légère et fondante glisse sur la peau pour aussitôt lui apporter confort, souplesse et douceur. Un subtil parfum de néroli enveloppe le corps de ses notes florales et hespéridées. Le lait corporel hydratant à l'Aloe Vera offre une expérience apaisante et nourrissante pour la peau. Grâce aux propriétés hydratantes exceptionnelles de l'Aloe Vera, ce lait corporel pénètre profondément, apaisant la peau tout en la maintenant int ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057220852</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88436af104d612d555c999574e05e745e32d921f37aea3935f284dd98fdda980 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Lait-en-Spray Solaire Corps UVA/UVB 50+ 150ml ]]></title>
<g:id>c693e57e-6ce3-4fa4-a7d5-2186b48fb20a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-lait-en-spray solaire corps uva/uvb 50+ 150ml?c693e57e-6ce3-4fa4-a7d5-2186b48fb20a ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p class="section-title-js accordion-section__title clicked">Le soin très haute protection de toutes les peaux, en toutes circonstances (quelles que soient la destination et l'activité pratiquée).</p>
<div class="accordion-section__content">
<div class="what-is-it-accordion__section">
<p></p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810305050</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6199b0de0a4fdfdec71a34df08a8e37a1f6e1bfbc70dc850ccba99cd541a7d9a ]]></g:image_link>
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
<title><![CDATA[ Clarins Lotion Tonique Apaisante 400ml ]]></title>
<g:id>f53ad478-3313-41d7-947d-b9402aaa2362</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-lotion tonique apaisante 400ml?f53ad478-3313-41d7-947d-b9402aaa2362 ]]></link>
<g:price><![CDATA[ 4290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La lotion tonique Clarins, qui parfait le démaquillage et hydrate, apaise et adoucit la peau grâce à un cocktail de plantes. Dernière étape du démaquillage, cette lotion tonique sans alcool enrichie en extraits de camomille bio et d'échinacée pourpre bio, élimine les résidus de démaquillant tout en apaisant et en réconfortant la peau. Mais ce n’est pas tout… Parce qu’elle contient le [Microbiote Complex], elle optimise l’équilibre du microbiote cutané et renforce ses défenses naturelles ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810378863</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b2dd6980bf89aff93c5396ec693f69063e639f8d68f2f8a45e8ccdab2ea3775 ]]></g:image_link>
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
<title><![CDATA[ Clarins Mascara Supra Volume noir 01 Black ]]></title>
<g:id>4b0f57a7-7557-4782-b716-f6ea7add92ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-mascara supra volume noir 01 black?4b0f57a7-7557-4782-b716-f6ea7add92ee ]]></link>
<g:price><![CDATA[ 3500.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>AQUA/WATER/EAU, DIMETHICONE, BUTYLENE GLYCOL, GLYCERIN, PHENYL TRIMETHICONE, VINYL DIMETHICONE/METHICONE SILSESQUIOXANE CROSSPOLYMER, ALCOHOL, PEG/PPG-18/18 DIMETHICONE, MICA, C12-15 ALKYL BENZOATE, CI 77891/TITANIUM DIOXIDE, SODIUM CHLORIDE, SILICA, BISAB</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810060447</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/819aa652911dd35d3896e698da09aa152a2f13a08176d32a27fd74a6c7bbcf90 ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Anti-Ride Fermeté Peaux sèches Flacon Pompe 50ml ]]></title>
<g:id>84599669-66e2-4de5-8981-a6f1bf38bf29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men anti-ride fermeté peaux sèches flacon pompe 50ml?84599669-66e2-4de5-8981-a6f1bf38bf29 ]]></link>
<g:price><![CDATA[ 6700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Votre nouvel objectif : lisser les rides et ridules marquées tout en allégeant le bas du visage.</p>
<p>Très fine, la crème anti rides ClarinsMen aux extraits énergisants d'Herbe à Bison et de Galanga de Chine lifte et raffermit là où il faut. De plus ce soin du visage contribue à neutraliser les agents polluants nocifs pour la peau. Cette crème s'applique après Nettoyant Visage.<br />Texture non grasse, fini mat et frais.<br />- Extrait de brède mafane (plante de la pharmacopée malgache) : r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057005886</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0592c28a9a4225327e0855d294b142a4636f51524c15c8a418a9f1be70ef277b ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Baume Super Hydratant 50ml ]]></title>
<g:id>c39a6dbb-cb7d-4121-804c-a61708617bac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men baume super hydratant 50ml?c39a6dbb-cb7d-4121-804c-a61708617bac ]]></link>
<g:price><![CDATA[ 4690.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js">Besoin d'hydratation et de confort sur une peau irritée et desséchée par le froid de l'hiver ? Le Baume Super Hydratant, crème hydratante homme ultra-confort, invisible et non grasse est votre meilleur allié.</div>
<p></p>
<div class="accordion-section__content">
<div class="discover-more-benefit-section__text">
<ul><li>Hydrate intensément même en conditions ext ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057019050</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/668a7564ae44dd0e1ceb6fd3e3119ea3b04ce54679b340c4660168071fd34940 ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Baume Super Hydratant 50ml sup ]]></title>
<g:id>d1c26330-050f-444d-bc44-5d26c8c95e2e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men baume super hydratant 50ml sup?d1c26330-050f-444d-bc44-5d26c8c95e2e ]]></link>
<g:price><![CDATA[ 4690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Besoin d'hydratation et de confort sur une peau irritée et desséchée par le froid de l'hiver ? Le Baume Super Hydratant, crème hydratante homme ultra-confort, invisible et non grasse est votre meilleur allié.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057003417</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/259996aaded269f096c744b324a2a50d662f8ca7f2b28c881516c5116ce876b0 ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Coffret Kit Découverte ]]></title>
<g:id>f3ca959f-58fb-43ed-a22a-483625a96d1f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men coffret kit découverte?f3ca959f-58fb-43ed-a22a-483625a96d1f ]]></link>
<g:price><![CDATA[ 2500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret contient :</p><p>ClarinsMen - Nettoyant visage 30 ml<br>ClarinsMen - Shampooing Douche 30 ml<br>ClarinsMen- Gel Energisant 12 ml<br></p><p>Le parfait trio de soins visage pour les hommes.<br><br>Ce kit découverte contient trois soins essentiels pour une peau éclatante et revitalisée. Un gel moussant tout doux pour nettoyer le visage, un gel douche tonifiant pour le corps et les cheveux et un gel super hydratant et fortifiant à l'extrait de kalanchoé officinal bio qui réénergise tou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057296161</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18c4b674f0d258eaded894a86ac23c03e79dffab264980d3b37920f21cf04c61 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HOMME > SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Gel Energisant 50ml ]]></title>
<g:id>524fe13e-ea01-44bd-84e4-53891e2ffebb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men gel energisant 50ml?524fe13e-ea01-44bd-84e4-53891e2ffebb ]]></link>
<g:price><![CDATA[ 5600.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Par nature, la peau des hommes a besoin de plus d'énergie. Elle est aussi plus épaisse que celle des femmes et demande d'être réhydratée régulièrement pour rester en forme. Ce gel hydratant frais, non collant et légèrement parfumé contient tout ce qu'il faut d'extraits végétaux pour recharger la peau en énergie et lui redonner tout son éclat. Son flacon pompe rouge délivre la juste dose de vitalité pour une peau reposée et tonique, en pleine forme. Le parfum de tous nos soins ClarinsMen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810427776</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ef1b2d8a0c0b0b737d364f42754d1541c7187b5fcb2096e06e7912e2f7b6ba8 ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Gel Energisant yeux 15ml ]]></title>
<g:id>deec9cbe-fa92-43e8-9e15-aee7c093d52c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men gel energisant yeux 15ml?deec9cbe-fa92-43e8-9e15-aee7c093d52c ]]></link>
<g:price><![CDATA[ 4390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>C'est le soin idéal pour les hommes qui mènent une vie intense. Un véritable shot* d'énergie, de vitalité et d'hydratation pour leur peau surmenée. L'action puissante de l'extrait de ginseng rouge bio va contribuer à une meilleure production d'énergie de la peau : afin de l'énergiser, la stimuler et lui permettre de résister à toutes sortes d'agressions (températures extrêmes, surmenage, stress). Pour un contour des yeux à la fois lissé et plus tonique, un regard éclatant et reposé.</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810427783</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6687261ba71de8a5ba21fdc38dd7b1edd866927539e280c44640c6c2c31ece1d ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Hydra-Sculpt 50ml ]]></title>
<g:id>f44dd3f0-0b7c-439b-92ec-cff20d67e3d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men hydra-sculpt 50ml?f44dd3f0-0b7c-439b-92ec-cff20d67e3d6 ]]></link>
<g:price><![CDATA[ 6890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le soin hydratant homme qui redéfinit visiblement les contours du visage. Une double technologie inédite pour les hommes qui réunit des extraits de plantes parmi les plus performants pour une efficacité exceptionnelle sur la peau masculine. Chacun des deux flacons est doté d’une pompe indépendante : le mélange des deux formules ne se fait qu’au moment de l’application, avec la certitude de toujours obtenir la juste dose pour un maximum d'efficacité.</span></p>
<ul><li>Une double action  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057011368</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e1bc8e033462b8f77de4538cf6ad8b498b74532ac0b6bd9270e998fdc6c30f3 ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Nettoyant Visage 125ml ]]></title>
<g:id>007f0ee7-b744-4189-9043-a0c7098f76cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men nettoyant visage 125ml?007f0ee7-b744-4189-9043-a0c7098f76cc ]]></link>
<g:price><![CDATA[ 2660.00 EUR ]]></g:price>
<description><![CDATA[ <div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Pour une peau nette et saine, ce nettoyant visage doux aux extraits purifiants de grindelia et de gaulthérie chasse en douceur toutes les impuretés et traces de pollution. La mousse nettoyante adoucit après le feu du rasoir, tonifie et dresse un bouclier pour protéger la peau de tout ce qu'elle rencontre. </div>
<div class="what-is-it-accordion__text wh ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057042317</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3bd6278c6d1267c0aab7736ba94aac4743fd51d4876574971ede87f73ec608d9 ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Men Shampooing Douche 200 ml ]]></title>
<g:id>9af537a1-184b-4542-a38f-2472a186be1d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-men shampooing douche 200 ml?9af537a1-184b-4542-a38f-2472a186be1d ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le shampooing pour laver corps et cheveux avec un seul produit, se dynamiser des pieds à la tête en un seul geste. Ce soin du corps qui neutralise les effets de l'eau calcaire, convient à toutes les peaux et tous les types de cheveux. Il contient de la pro-vitamine B5 (panthénol) qui tonifie l'épiderme. La formule très douce de ce shampooing permet de se laver les cheveux tous les jours.</span></p>
<ul><li>Nettoie la peau en douceur.</li>
<li>Tonifie les cheveux, les rend brillants et f ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057044564</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fea08177621474214f8cc77e45aa6d7e695379a8ecbe5d24100f3d046cf0498f ]]></g:image_link>
<g:product_type><![CDATA[ HOMME ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Multi-Intensive Crème de Jour Anti-Âge Peaux Très Sèches 50ml ]]></title>
<g:id>d7b58926-6f5c-47d6-8bbd-b1a2b75ea263</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-multi-intensive crème de jour anti-Âge peaux très sèches 50ml?d7b58926-6f5c-47d6-8bbd-b1a2b75ea263 ]]></link>
<g:price><![CDATA[ 11690.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_j56l81cngiflt8k5236">Description</h3>
<div class="accordion-section__content" id="accordion_content_j56l81cngiflt8k5236"><div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">
<p><span><span><span><span><span>Découvrez Multi-Intensive Jour Toutes Peaux, la crème anti-âge et anti-rides repulpante. </span></span><span><span></span></sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057064500</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/520bbf6179b478ae053967921fbcbb8cc9f78509fd3cfa277be8b0be7436b89a ]]></g:image_link>
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
<title><![CDATA[ Clarins Multi-Intensive Nuit Peaux très sèches 50ml ]]></title>
<g:id>f3689368-2f38-495b-9939-d4a052ef1cbb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-multi-intensive nuit peaux très sèches 50ml?f3689368-2f38-495b-9939-d4a052ef1cbb ]]></link>
<g:price><![CDATA[ 12390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette crème de nuit visage atténue les méfaits sur la peau des modifications hormonales liées à l'âge. Immédiatement lissée, intensément nourrie, nuit après nuit unifiée et comme liftée, la peau est plus éclatante au réveil. Son secret ? Un puissant duo végétal composé de l’extrait d’harungana bio et d’un extrait d’ajonc bio qui contribue à redensifier la peau, apporter un effet lift et lutter contre le relâchement cutané. Sa texture riche et onctueuse enrichie en beurre de karité bio h ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057064555</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a0a325f79943fe0be92beb48e5e06af10d617aaa4e8d38f3e849d4c6d8de0213 ]]></g:image_link>
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
<title><![CDATA[ Clarins Multi-Intensive Supra Sérum Lift-Remodelant 30ml ]]></title>
<g:id>b9ce53cb-2997-462b-ac8d-c8bffeb1611c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-multi-intensive supra sérum lift-remodelant 30ml?b9ce53cb-2997-462b-ac8d-c8bffeb1611c ]]></link>
<g:price><![CDATA[ 12490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce nouveau soin anti-âge d'exception lifte les traits, redensifie la peau, remodèle et redéfinit les contours et l'ovale du visage, tout en réduisant l'apparence des taches.</span><br /><br /><span>INNOVATION VOLUME ANTI-ÂGE CLARINS</span><br /><span>Le précieux extrait de plantain lancéolé, avec l'extrait d'harungana bio, est le gardien des volumes du visage. En limitant le déstockage des lipides par les adipocytes, il prévient la fonte du tissu adipeux induit par les fibroblastes âgés ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810013252</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1070c0d5a6f7dc4ebfea6b48bd6ea2d4d7d88f5c11fd511acbc1cf031e36e8eb ]]></g:image_link>
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
<title><![CDATA[ Clarins Multi-Intensive Supra Sérum Lift-Remodelant 50ml ]]></title>
<g:id>eaa0c4c4-69b3-4312-a338-123254568a72</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-multi-intensive supra sérum lift-remodelant 50ml?eaa0c4c4-69b3-4312-a338-123254568a72 ]]></link>
<g:price><![CDATA[ 16450.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce nouveau soin anti-âge d'exception lifte les traits, redensifie la peau, remodèle et redéfinit les contours et l'ovale du visage, tout en réduisant l'apparence des taches.</span><br /><br /><span>INNOVATION VOLUME ANTI-ÂGE CLARINS</span><br /><span>Le précieux extrait de plantain lancéolé, avec l'extrait d'harungana bio, est le gardien des volumes du visage. En limitant le déstockage des lipides par les adipocytes, il prévient la fonte du tissu adipeux induit par les fibroblastes âgés ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810013269</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a806687a020f61a70a314ac53ea743939918241603f63a65abd315640bc69e32 ]]></g:image_link>
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
<title><![CDATA[ Clarins Rose Radiance Multi Intensive 50ml ]]></title>
<g:id>fe8527e2-61e9-46f4-99d7-4ccfaa25475d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-rose radiance multi intensive 50ml?fe8527e2-61e9-46f4-99d7-4ccfaa25475d ]]></link>
<g:price><![CDATA[ 11790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ravivez la jeunesse et l’éclat de votre peau.</p>
<p>Le soin de jour à l'effet redensifiant qui redonne lumière aux peaux fragilisées par les modifications hormonales liées à l’âge pour un effet lift-repulpant et un éclat rosé instantané. Multi-Intensive Rose Lumière devient Multi-Intensive Rose Radiance. Une double action anti-âge &amp; éclat dans une formule composée à 93% d’ingrédients d’origine naturelle.</p>
<p> </p>
<p>Au cœur de la formule, le nouveau complexe [PEPTIDE ÉCLAT + EXTRAIT  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057227257</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ddf21c81c5f0a52499702e1faf1e3fef8ce8a3809eab38ed3ebee7daffe1c43 ]]></g:image_link>
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
<title><![CDATA[ Clarins Skin Illusion Tinted Moisturizer SPF25 40ml 02 ]]></title>
<g:id>065aa453-8765-4120-9816-d1a6c4403e83</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-skin illusion tinted moisturizer spf25 40ml 02?065aa453-8765-4120-9816-d1a6c4403e83 ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins réinvente le look « no make-up make-up » <em> avec le Skin Illusion Tinted Moisturizer. Cette crème teintée à la couvrance naturelle et au fini lumineux sublime la peau en un seul geste.<br><br>Grâce à sa double performance make-up &amp; soin, son subtil voile unifiant réveille instantanément l’éclat du teint tandis que sa formule bienfaitrice aide à booster l’éclat de la peau pour un glow</em>* imparable avec et sans maquillage !<br><br>Dès la première application, Skin Illusion Tint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057298004</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f42424db7936c95e3ce7f96197588c162ac62b1ce2d7134eae04551aa66d398 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Skin Illusion Tinted Moisturizer SPF25 40ml 03 ]]></title>
<g:id>a422dafe-d2e1-40fa-b111-4e70d7d31c77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-skin illusion tinted moisturizer spf25 40ml 03?a422dafe-d2e1-40fa-b111-4e70d7d31c77 ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins réinvente le look « no make-up make-up » <em> avec le Skin Illusion Tinted Moisturizer. Cette crème teintée à la couvrance naturelle et au fini lumineux sublime la peau en un seul geste.<br><br>Grâce à sa double performance make-up &amp; soin, son subtil voile unifiant réveille instantanément l’éclat du teint tandis que sa formule bienfaitrice aide à booster l’éclat de la peau pour un glow</em>* imparable avec et sans maquillage !<br><br>Dès la première application, Skin Illusion Tint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057298028</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3580d3c790158e1ebb6c5db72bc65b2139032dac33566ae2ea5abdca6b3cbf4a ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Skin Illusion Tinted Moisturizer SPF25 40ml 04 ]]></title>
<g:id>2fe64342-36cf-4370-8fba-4145e366db13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-skin illusion tinted moisturizer spf25 40ml 04?2fe64342-36cf-4370-8fba-4145e366db13 ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins réinvente le look « no make-up make-up » <em> avec le Skin Illusion Tinted Moisturizer. Cette crème teintée à la couvrance naturelle et au fini lumineux sublime la peau en un seul geste.<br><br>Grâce à sa double performance make-up &amp; soin, son subtil voile unifiant réveille instantanément l’éclat du teint tandis que sa formule bienfaitrice aide à booster l’éclat de la peau pour un glow</em>* imparable avec et sans maquillage !<br><br>Dès la première application, Skin Illusion Tint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057298035</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f72ee195f63e2ece4f231c6670e6163d7f7dbcc6e8f08489a3598b422313fce ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Skin Illusion Tinted Moisturizer SPF25 40ml 05 ]]></title>
<g:id>7f15dac6-ff44-4f41-9041-f4e3c0553fad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-skin illusion tinted moisturizer spf25 40ml 05?7f15dac6-ff44-4f41-9041-f4e3c0553fad ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins réinvente le look « no make-up make-up » <em> avec le Skin Illusion Tinted Moisturizer. Cette crème teintée à la couvrance naturelle et au fini lumineux sublime la peau en un seul geste.<br><br>Grâce à sa double performance make-up &amp; soin, son subtil voile unifiant réveille instantanément l’éclat du teint tandis que sa formule bienfaitrice aide à booster l’éclat de la peau pour un glow</em>* imparable avec et sans maquillage !<br><br>Dès la première application, Skin Illusion Tint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057298042</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe77bb50391803d25536db6ef633a04047b262b29c54a7b586796b609ca81f3b ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Skin Illusion Tinted Moisturizer SPF25 40ml 06 ]]></title>
<g:id>6f5dc8a2-6b87-4aec-870d-6b8999d2771a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-skin illusion tinted moisturizer spf25 40ml 06?6f5dc8a2-6b87-4aec-870d-6b8999d2771a ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins réinvente le look « no make-up make-up » <em> avec le Skin Illusion Tinted Moisturizer. Cette crème teintée à la couvrance naturelle et au fini lumineux sublime la peau en un seul geste.<br><br>Grâce à sa double performance make-up &amp; soin, son subtil voile unifiant réveille instantanément l’éclat du teint tandis que sa formule bienfaitrice aide à booster l’éclat de la peau pour un glow</em>* imparable avec et sans maquillage !<br><br>Dès la première application, Skin Illusion Tint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057298059</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba7cd6952187440dcebdc1d57b541cd8c5317ff885bef400bf5ccaf7960a37e3 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Skin Illusion Tinted Moisturizer SPF25 40ml 2.5 ]]></title>
<g:id>2f68f40f-a06c-46d1-b039-41c5fc9e3272</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-skin illusion tinted moisturizer spf25 40ml 2.5?2f68f40f-a06c-46d1-b039-41c5fc9e3272 ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clarins réinvente le look « no make-up make-up » <em> avec le Skin Illusion Tinted Moisturizer. Cette crème teintée à la couvrance naturelle et au fini lumineux sublime la peau en un seul geste.<br><br>Grâce à sa double performance make-up &amp; soin, son subtil voile unifiant réveille instantanément l’éclat du teint tandis que sa formule bienfaitrice aide à booster l’éclat de la peau pour un glow</em>* imparable avec et sans maquillage !<br><br>Dès la première application, Skin Illusion Tint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057298011</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18bb6c00ea747de8a7b91e66670dbeabaf9f10aa90217650f78b130072a9eaaf ]]></g:image_link>
<g:product_type><![CDATA[ SOIN TEINTE > SOINS VISAGE ET CORPS > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Soin Lèvres et Contour Multi-Régénérant 15ml ]]></title>
<g:id>14e7c1d8-fd64-4d93-b0c3-579e050ffafb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-soin lèvres et contour multi-régénérant 15ml?14e7c1d8-fd64-4d93-b0c3-579e050ffafb ]]></link>
<g:price><![CDATA[ 4530.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-content col col-gutter col-6-mobile col-6-tablet col-6-desktop">Ce baume à lèvres régénérant nourrit, lisse, protège et réconforte immédiatement les lèvres et leur contour. Il lisse les rides et ridules du contour des lèvres. Les lèvres paraissent naturellement pulpeuses, plus jeunes et superbement dessinées.</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380811063102</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7a2dd6eb42b9475f49070381e5f7d0deab3d3f7d402edb3706ddaca6fef5322 ]]></g:image_link>
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
<title><![CDATA[ Clarins Spray solaire lactée spf 50 150 ml ]]></title>
<g:id>4446eb0f-8d91-4547-a4ce-bac0c0fa63c1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-spray solaire lactée spf 50 150 ml?4446eb0f-8d91-4547-a4ce-bac0c0fa63c1 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057217364</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3976bac55cc0809387bf2cdf6ac01f7faf8fb20f22aa0d023436e5765418920b ]]></g:image_link>
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
<title><![CDATA[ Clarins Stick Solaire Invisible SPF50 Haute Protection 17 g ]]></title>
<g:id>d55ecafb-28e5-4b86-8379-e3df3c9bda6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-stick solaire invisible spf50 haute protection 17 g?d55ecafb-28e5-4b86-8379-e3df3c9bda6e ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p>A la ville, comme à la plage ou à la montagne, le Stick Solaire Invisible est l’indispensable à avoir. Nomade, il se glisse n’importe où grâce à son format pocket* qui le rend idéal pour les retouches express. Son application est rapide et ultra-pratique. *poche</p><p>En un seul geste, il protège efficacement les zones sensibles exposées et délivre avec précision une texture invisible et non grasse. Grâce à son fini transparent, il peut s’appliquer même sur le maquillage sans le déplacer et l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057288197</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/96824168ffb8760dc1930d4ea95cf984f54c80dc2eb8a691a4bb325f0e632d42 ]]></g:image_link>
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
<title><![CDATA[ Clarins Stylo yeux waterproof 01 black ]]></title>
<g:id>fa674fc9-da5f-4a09-965e-7695279efe02</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-stylo yeux waterproof 01 black?fa674fc9-da5f-4a09-965e-7695279efe02 ]]></link>
<g:price><![CDATA[ 2200.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le contour des yeux ose le trait de couleur pure avec ce crayon yeux waterproof. Sa mine précise et facile à estomper assure un tracé impeccable dès le premier passage. Waterproof, le résultat reste en place pendant 8 heures sans bouger.</span></p>
<ul><li>Mine précise</li>
<li>Tracé impeccable</li>
<li>Embout estompeur</li>
<li>Waterproof</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810317732</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c236bbfcde0a327dca4fd6161d4ae2082aa7632aca5e807f0dc079b224ccb213 ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins Total Eye Hydrate Baume-masque yeux ]]></title>
<g:id>d5ad25be-4a94-4b67-a6e5-5c9fc53d4441</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-total eye hydrate baume-masque yeux?d5ad25be-4a94-4b67-a6e5-5c9fc53d4441 ]]></link>
<g:price><![CDATA[ 4300.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057012839</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f494ee949dd4a1ebea719d9d315470e9617b1d2b61bb47943b3d19b217eff181 ]]></g:image_link>
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
<title><![CDATA[ Clarins Total Eye Lift 15ml ]]></title>
<g:id>5bb6e684-0676-4bf4-a5a8-7ff33f12827d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-total eye lift 15ml?5bb6e684-0676-4bf4-a5a8-7ff33f12827d ]]></link>
<g:price><![CDATA[ 8200.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-content col col-gutter col-6-mobile col-6-tablet col-6-desktop">Le soin expert Lift-redensifiant, spécifiquement conçu pour sublimer l’ensemble de la zone du regard, de tempe à tempe. Cette émulsion fine, à la texture lissante, facilite l’application et la tenue du maquillage. Convient aux yeux sensibles et portant des lentilles.</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810405217</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef13e44bbc594729bbc1da85e058c16f4daf10657342ad9d27c5232572b9fa18 ]]></g:image_link>
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
<title><![CDATA[ Clarins Total Eye Revive 15ml ]]></title>
<g:id>4db835c7-5dc8-4335-bbe7-4b9c390e7782</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-total eye revive 15ml?4db835c7-5dc8-4335-bbe7-4b9c390e7782 ]]></link>
<g:price><![CDATA[ 5200.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_zduqkal41qlt8hx6n2">Description</h3>
<div class="accordion-section__content" id="accordion_content_zduqkal41qlt8hx6n2"><div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">Le contour des yeux premières rides est un produit de soin spécifiquement conçu pour traiter les premiers signes du vieillissement autour des yeux. En plus de cib ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057012846</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66bef18208fc9244edec193c02991c3235639cf6f4d17447d09e0c37f380dfe8 ]]></g:image_link>
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
<title><![CDATA[ Clarins UV Plus Anti Pollution Neutre Spf 50 30ml ]]></title>
<g:id>747925d9-ac92-4b4c-9163-799b1a43100d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-uv plus anti pollution neutre spf 50 30ml?747925d9-ac92-4b4c-9163-799b1a43100d ]]></link>
<g:price><![CDATA[ 4450.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_t0rkue4salelt8hqf09">Ce 1er écran anti-UV et anti-pollution Clarins protège contre les 5 polluants les plus courants de la vie quotidienne : atmosphérique, intérieur, pollen, lumière bleue et photo-pollution. Une crème-gel légère à l’absorption facile pour une finition parfaitement invisible. À base d’extrait de feuille de manguier bio, il renforce le pouvoir d’auto-défense de la peau de 64 %*. Hydrate et prend soin de la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810424058</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f5891bedf9501035380b02f12fd65cdeb74708b24c59dba7dad4d4c403b53f6 ]]></g:image_link>
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
<title><![CDATA[ Clarins Wonder Volume Mascara XXL ]]></title>
<g:id>3cd289b0-2630-46b5-ae8e-a08a62e193b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-wonder volume mascara xxl?3cd289b0-2630-46b5-ae8e-a08a62e193b9 ]]></link>
<g:price><![CDATA[ 3500.00 EUR ]]></g:price>
<description><![CDATA[ <h3 class="section-title-js accordion-section__title" id="accordion_title_knz23c5b2uolvm6gfy2">Description</h3>
<div class="accordion-section__content" id="accordion_content_knz23c5b2uolvm6gfy2"><div class="what-is-it-accordion__section">
<div class="what-is-it-accordion__text what-is-it-accordion__clamp-text what-is-it-text-js expanded">
<div class="product-info__long-description">Clarins met à l'honneur la Double performance avec son tout nouveau mascara volume XXL. Not Just a mascara<br />Une ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057165498</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/068509cbd51b733079bbef14334524415db0fcc68aac082c8d5725a8bbe1b0d9 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clarins crème de jour Extra-Firming Jour SPF 15 50ml ]]></title>
<g:id>1879d8ac-37e5-42e5-942c-beaf76192139</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarins-crème de jour extra-firming jour spf 15 50ml?1879d8ac-37e5-42e5-942c-beaf76192139 ]]></link>
<g:price><![CDATA[ 8900.40 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Rides visiblement réduites</li>
<li>Ovale du visage comme remodelé</li>
<li>Effet lissant immédiat</li>
<li>Éclat</li>
<li>Anti-UV</li>
<li>Peau protégée des méfaits de la pollution</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3380810194807</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c91c31a8cc9cd4c4d7c1c625d12028de012d6e0031c98da206baf16f87f1379f ]]></g:image_link>
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
<title><![CDATA[ ClarinsMen  Essentiels rasage ]]></title>
<g:id>813d59c8-4a8a-405a-b331-d7db1fa247cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarinsmen-essentiels rasage?813d59c8-4a8a-405a-b331-d7db1fa247cc ]]></link>
<g:price><![CDATA[ 6700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret contient tous les soins qu'il vous faut pour faciliter le rasage et apaiser la peau. Un soin pour nettoyer le visage, puis un gel moussant et une huile qui adoucissent la peau et la barbe pour préparer le passage du rasage. Enfin, un gel après-rasage formulé avec un extrait apaisant et hydratant pour une peau rafraîchie et une barbe assouplie malgré le feu récurrent du rasoir.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057327254</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8a89c99ea4d0ae1fb7861f17872d1cfaf91019a2dc1422725d554a7066413899 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HOMME > SOIN HOMME ET RASAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ ClarinsMen Baume Super Hydratant Essentiels hydratation ]]></title>
<g:id>ce9102a7-f703-40a4-a80c-bda41817a61e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clarinsmen-baume super hydratant essentiels hydratation?ce9102a7-f703-40a4-a80c-bda41817a61e ]]></link>
<g:price><![CDATA[ 4900.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret pour les hommes réunit les soins essentiels pour une peau toute douce en toutes circonstances : un shampooing douche tonifiant qui lave le corps et les cheveux, un baume super hydratant ultra-confort pour prendre soin de la peau, un gel moussant pour nettoyer le visage et Double Serum Eye pour préserver l'apparence de la jeunesse du regard. La peau est lissée, purifiée et fortifiée.</p><p><strong><br></strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666057327230</g:gtin>
<g:brand><![CDATA[ CLARINS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c66a7ac4f953bfea8d34ae290e1cbb709fde17571935dc48995483ead76c3efe ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HOMME > SOIN HOMME ET RASAGE > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue Test d'Ovulation Digital 2 Jours 10 Unités ]]></title>
<g:id>c0668f77-d764-4b6b-8365-33e0052d1e87</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test d'ovulation digital 2 jours 10 unités?c0668f77-d764-4b6b-8365-33e0052d1e87 ]]></link>
<g:price><![CDATA[ 2750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le TEST D'OVULATION DIGITAL LECTURE 2 HORMONES de CLEARBLUE est le seul test qui indique les 4 jours les plus fertiles de votre cycle afin de concevoir un bébé. <br /><br />Grâce à son nouveau procédé à double lecture d'hormone, TEST D'OVULATION DIGITAL LECTURE 2 HORMONES identifie donc 2 fois plus de jour pour être enceinte que les tests de génération précédente. <br /><br />Il affiche des résultats digitaux très clairs pour une haute efficacité.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4015600769734</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4c8cae150896daa97bbd0de0fed3cdd030df38950a2743736baacc30237f9644 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue Test de Grossesse Digital 2 Tests ]]></title>
<g:id>c425b971-6421-4961-bb2c-baf72f618dcc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse digital 2 tests?c425b971-6421-4961-bb2c-baf72f618dcc ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une innovation de CLEARBLUE qui révolutionne les informations que l'on peut avoir lors d'un simple test de grossesse.</p>
<p>Pour capter les données reçues de la tige absorbante, un lecteur optique est installé dans le bâtonnet-test. Clearblue digital recueille les informations en cinq secondes du taux d'HCG et les interprète en 3 minutes.</p>
<p>Le test de grossesse de CLEARBLUE permet de n'interpréter aucune bande colorée. L'instrument affiche via un écran digital les résultats du test en f ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5013965856051</g:gtin>
<g:brand><![CDATA[ PROCTER GAMBLE HBD ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e65d232f4ee53a32f1964a6b0f800e76fa2cfa173c604ede970eb3b0c6c1a55 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue Test de Grossesse Détection Ultra Précoce Digital ]]></title>
<g:id>26aea363-780d-453f-91b4-7a80068419ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse détection ultra précoce digital?26aea363-780d-453f-91b4-7a80068419ab ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clearblue Test de Grossesse Détection Ultra Précoce Digital est un test urinaire fiable à plus de 99% qui permet de détecter une grossesse pour un résultat clair en toutes lettres 6 jours plus tôt*. Son voyant lumineux unique clignote lorsqu'une quantité suffisante d'urine est recueillie.</p>
<p>*par rapport au retard des règles (5 jours avant la date présumée des règles).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8001841704203</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a8c4bd471ab86f9260217f304045d71bdabdd6a42b1d9025b9a122ec4b78021 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue Test de Grossesse Détection Ultra Précoce Digital Lot de 2 Tests ]]></title>
<g:id>c8af51b3-5449-4a6b-a7a9-56844bd05d9e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse détection ultra précoce digital lot de 2 tests?c8af51b3-5449-4a6b-a7a9-56844bd05d9e ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clearblue Test de Grossesse Détection Ultra Précoce Digital Lot de 2 Tests est un test urinaire fiable à plus de 99% qui permet de détecter une grossesse pour un résultat clair en toutes lettres 6 jours plus tôt*. Son voyant lumineux unique clignote lorsqu'une quantité suffisante d'urine est recueillie.</p>
<p>*par rapport au retard des règles (5 jours avant la date présumée des règles).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8001841913377</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/408e9414211edebc0d6606d8c3a4488596b848c19f132e5275941b30a61f5936 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue Test de Grossesse Early ]]></title>
<g:id>eafccfb8-679b-487d-b5ad-7b16306fd37d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse early?eafccfb8-679b-487d-b5ad-7b16306fd37d ]]></link>
<g:price><![CDATA[ 575.00 EUR ]]></g:price>
<description><![CDATA[ <p>Test de grossesse détection précoce peut être utilisé jusqu'à 6 jours avant la date de retard de vos règles, ce qui correspond à 5 jours avant la date de début de vos règles (la date présumée de vos règles).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8001090039538</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/638e38c991fd0a511d03cb17363851b163530533f01f84d1398db9f038f7ad32 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue test de grossesse classic 1 ]]></title>
<g:id>b9dd5583-f553-4d87-8db6-ecea3152ffa9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse classic 1?b9dd5583-f553-4d87-8db6-ecea3152ffa9 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lorsque vous êtes enceinte, votre organisme sécrète une hormone de grossesse appelée hormone Gonadotrophine Chorionique humaine (hCG). La quantité d’hCG présente dans votre corps augmente rapidement pendant les 12 premières semaines environ de la grossesse. </p>
<p>Bien que le taux d’hCG atteigne un maximum entre les 7 et 12ème semaines, il reste plus élevé que la normale pendant le reste de la grossesse et jusqu’à environ 3 semaines après l'accouchement. </p>
<p>Le taux d’hCG reste au-dessus ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5011321715257</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/59704bfb7d744475dbf479b7dd4dce2e3ba67356da9c0acb0b9fab73c4b03e86 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue test de grossesse classic 2 ]]></title>
<g:id>2d7aae63-9953-416d-8687-8de093e9283e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse classic 2?2d7aae63-9953-416d-8687-8de093e9283e ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Test de grossesse Clearblue permet la détection de l'hormone gonadotrophine chorionique HCG dans l'urine de la femme enceinte dès le premier jour de retard des règles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5011321715295</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2232edd2cc1a2d26f1b546c416b44528fa0ddbe21abaa95c07d89c4fb96ad8ef ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clearblue test de grossesse digital ]]></title>
<g:id>e2dfa555-b9ec-47b4-a0f0-8ad771a2198b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clearblue-test de grossesse digital?e2dfa555-b9ec-47b4-a0f0-8ad771a2198b ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Test de Grossesse Electronique.<br /><br />Le Test de Grossesse Electronique Clearblue a été le 1er test de grossesse de ce genre à avoir été lancé dans le monde. Il offre tous les avantages de la gamme Clearblue, notamment la fiabilité, la facilité et la simplicité d'utilisation. Lorsque vous êtes enceinte, votre organisme sécrète une hormone de grossesse appelée hormone Gonadotrophine Chorionique humaine (hCG).</p>
<p>La quantité d'hCG présente dans votre organisme augmente rapidement duran ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5011321693302</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03147dfce0d1bb1db1e5f16f63a9b5d13ae5ac6accb543a60ec0bc2f08f32f1b ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cledist Métabolisme Équilibre Métabolique 40+ 60 Comprimés ]]></title>
<g:id>61eacf4f-2482-4118-838c-c2c48e8f29ed</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cledist-métabolisme Équilibre métabolique 40+ 60 comprimés?61eacf4f-2482-4118-838c-c2c48e8f29ed ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Jaldes Cledist Métabolisme Équilibre Métabolique 40+ 60 Comprimés est un complément alimentaire qui apporte une combinaison essentielle de vitamines, oligoéléments et polyphénols présents dans les extraits de cannelle et d'aronia.</p>
<ul><li>L'extrait de cannelle et le chrome contribuent à maintenir une glycémie normale ;</li>
<li>le magnésium et la vitamine B6 contribuent au maintien d'un métabolisme énergétique normal et des fonctions psychologiques normales ;</li>
<li>l'aronia est une bai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008157118</g:gtin>
<g:brand><![CDATA[ IDIM PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/24e84a39fa21e03961087750e667dee5773e6c1872f10d836df4f5e0db323fff ]]></g:image_link>
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
<title><![CDATA[ Clement Thekan Fiprokil Spray 100ml ]]></title>
<g:id>72d5ffed-6e46-4ed1-acd3-7f1181830b08</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clement-thekan fiprokil spray 100ml?72d5ffed-6e46-4ed1-acd3-7f1181830b08 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>FIPROKIL Spray est un traitement antiparasitaire à base de fipronil qui permet d’éliminer les puces, les tiques et les poux en toute sécurité. L‘efficacité insecticide contre les nouvelles infestations par des puces adultes persiste jusqu’à 6 semaines chez le chat et jusqu’à 3 mois chez le chien, selon le contexte environnemental. La durée de l'efficacité acaricide du produit est de 4 semaines contre les tiques, selon la pression environnementale d’infestation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283021955666</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8438d961228343e8c4dd6788f544a76b2f99e714cb609e61871257c434bec05f ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clement Thekan Soin des Oreilles Chien et Chat 100ml ]]></title>
<g:id>9efc6b05-d43e-4a3d-93e2-cc64e11b7652</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clement-thekan soin des oreilles chien et chat 100ml?9efc6b05-d43e-4a3d-93e2-cc64e11b7652 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin des oreilles Chien et Chat de Clément Thékan est indiqué afin de nettoyer, purifier, apaiser et hydrater les oreilles de vos compagnons canins et félins. L'ouïe des chiens et des chats est bien plus développée que celle des humains. Leurs oreilles sont fragiles et sensibles. Il est donc important de nettoyer régulièrement et correctement les oreilles de nos compagnons à quatre pattes.</p>
<p>Cette lotion nettoyante Soin des oreilles pour chien et chat Clément Thékan est formulée à par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595895315003</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0826598ded8e288c666fe7727407452d5d6dc6f031f59c62cec3c00484b0bfbe ]]></g:image_link>
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
<title><![CDATA[ Clement Thekan Vermiscan Chiens 100mg -  Bte/6 Comprimés ]]></title>
<g:id>ed64f464-b27a-44b2-9154-d0103660d502</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clement-thekan vermiscan chiens 100mg -  bte/6 comprimés?ed64f464-b27a-44b2-9154-d0103660d502 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le médicament est un anthelminthique à large spectre utilisé chez les chiots et les chiens adultes pour le traitement d’infestations par des nématodes ou des cestodes intestinaux adultes suivants:</span><br /><span>- </span><span>Nématodes</span><span> : </span><em>Toxocara canis, Toxascaris leonina, Ancylostoma caninum, Uncinaria stenocephala</em><span>.</span><br /><span>- </span><span>Cestodes</span><span> : </span><em>Taenia hydatigena, Taenia pisiformis, Dipylidium caninum</em><spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890242076</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c48f2ea8627621472f0cfcbc6c1bc9b8b447fecec4652b9fc33597d2029f5a9 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clinique Almost Powder SPF15 – Teint Poudre Naturel 10Gr ]]></title>
<g:id>2079cca6-900c-4820-9ef4-d24bd3bbbd59</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-almost powder spf15 – teint poudre naturel 10gr?2079cca6-900c-4820-9ef4-d24bd3bbbd59 ]]></link>
<g:price><![CDATA[ 3590.40 EUR ]]></g:price>
<description><![CDATA[ <p>Plus que des minéraux. La peau paraît plus heureuse et sublimée. La formule longue tenue préserve les pores. La protection SPF protège la peau. Contient des antioxydants. Ce maquillage naturel et perfecteur, à l’effet «&nbsp;sans maquillage&nbsp;», est si léger que vous ne le sentirez jamais. Infaillible, vous pouvez l’appliquer avec une éponge, un pinceau et presque les yeux fermés.</p><p>Plus que des minéraux. La peau a l’air plus heureuse et sublimée. La formule longue tenue préserve les p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0020714325299</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a1d35cff426b02b11e27e74fa06fde2f99016eb7d4b947b95e6c0d9fa5bc5168 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clinique Coffret Aromatics Elixir 2 Produits + Eau de Parfum-45ml ]]></title>
<g:id>d654f35f-6077-422c-a5e9-a7ed33b60d77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret aromatics elixir 2 produits + eau de parfum-45ml?d654f35f-6077-422c-a5e9-a7ed33b60d77 ]]></link>
<g:price><![CDATA[ 9500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les coffrets Aromatics Elixir contiennent :</p>
<ul><li>Le parfum Aromatics Elixir Parfum Spray 45 ml </li>
<li>Un Aromatics Elixir Baume Douceur pour le Corps 75 ml, offert</li>
<li>un Gel moussant Aromatics elixir 75 ml, offert</li>
</ul><p></p>
<p><span>Un parfum culte classique défini par un mélange complexe de notes luxueuses, pour une fragrance incomparable et intense.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333193563</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58c8ea4cbde9b9db002c800f6e770d2036a64271bcaf6943393d4775f782fb68 ]]></g:image_link>
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
<title><![CDATA[ Clinique Coffret Cadeau Mascara ]]></title>
<g:id>de2b45dc-ff97-4f0b-b775-ddae42e183bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret cadeau mascara?de2b45dc-ff97-4f0b-b775-ddae42e183bb ]]></link>
<g:price><![CDATA[ 3000.00 EUR ]]></g:price>
<description><![CDATA[ <p>Des cils sublimés tout en volume grâce à ce coffret High Impact™ Mascara Impact Optimal.<br>Ce coffret contient :<br>- High Impact Mascara™ Impact Optimal Teinte Black (7ml) : Un effet spectaculaire instantané pour les cils. Ce mascara augmente le volume et la longueur de chaque cil.<br>- High Impact™ Eyeliner liquide (Black) (0.34g) : Définit votre regard en un seul geste. Eyeliner longue tenue à la couleur intense et à l'application ultra-précise.<br>- Take The Day Off™ Baume Démaquillant ( ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333224847</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4149761354af986fcec02b830412d16f04add7c352216a8ba7e1b0534ed74af3 ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clinique Coffret High Impact  Produits + Mascara-7ml ]]></title>
<g:id>ca317f26-1019-404a-9cef-a18fce98028f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret high impact  produits + mascara-7ml?ca317f26-1019-404a-9cef-a18fce98028f ]]></link>
<g:price><![CDATA[ 4800.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Augmentez l'effet dramatique avec un regard qui se fait remarquer.</li>
<li>High Impact™ Mascara en format standard augmente le volume et la longueur de chaque cil.</li>
<li>High Impact™ Liner liquide Easy offre l'effet spectaculaire d’un eye-liner liquide, sans la difficulté de l'appliquer.</li>
<li>Totally tugless Take The Day Off™ Baume Démaquillant se transforme d’un baume solide en une huile soyeuse pour dissoudre les maquillages tenaces des yeux et du visage, et les crèmes solaires ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333193655</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c2a194cdfbe69c9a63d7c628cf792f33f2597e2ad40f13b3dd70c941e3f29ef ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux > MAQUILLAGE > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clinique Coffret Moisture Surge- Coffret Hydratation Instantanée ]]></title>
<g:id>85064e0a-b3f8-4927-8f07-1adf6367ed4d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret moisture surge- coffret hydratation instantanée?85064e0a-b3f8-4927-8f07-1adf6367ed4d ]]></link>
<g:price><![CDATA[ 4100.40 EUR ]]></g:price>
<description><![CDATA[ <p>Les héros de l’hydratation pour votre visage: instantanément la peau est hydratée, repulpée et radieuse.</p><p>Ce coffret contient :</p><p>· Moisture Surge™ Soin Auto-réhydratant 100H - 50ml</p><p>Ce soin rafraîchissant, à la texture gel-crème addictive, apporte à votre peau une hydratation immédiate. Instantanément, votre peau est apaisée, repulpée et plus lumineuse.</p><p>· Moisture Surge™ Masque Hydratant Nuit - 30ml</p><p>Ce masque de nuit nourrit et hydrate en profondeur pendant votre so ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333193631</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c72742788649a180b729c9c14f9390f86040e2f6081e0d26b7c4a4f5a7df1ae1 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clinique Coffret Smart Clinical Repair-30ml  ]]></title>
<g:id>0a2c321e-8f47-4cc8-8163-6da80194a386</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret smart clinical repair-30ml ?0a2c321e-8f47-4cc8-8163-6da80194a386 ]]></link>
<g:price><![CDATA[ 8600.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez un trio de soins anti-âge haute performance pour une peau hydratée, protégée et visiblement plus jeune.</p><p>Ce coffret contient :</p><p>·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Smart Clinical Repair™ Crème Correction Rides SPF 30 - 50ml&nbsp;</strong></p><p>Cette crème hydratante pour les rides aide à renforcer et à nourrir la peau pour lui donner un aspect plus lisse et plus jeune, tout en la protégeant des rayons UV grâce à sa protection solaire supplémentaire.</p><p>·&nbsp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333193785</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b1355c284b47c1b416b76164ff1e2dbbb94f9acc87c3989769cdd6f956376d33 ]]></g:image_link>
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
<title><![CDATA[ Clinique Coffret de soins Moisture Surge Megastars ]]></title>
<g:id>99e13862-a4b7-4fcb-91fd-9f7c95f06545</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret de soins moisture surge megastars?99e13862-a4b7-4fcb-91fd-9f7c95f06545 ]]></link>
<g:price><![CDATA[ 4900.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce coffret contient :</p>
<p>- Moisture Surge™ Soin Auto-réhydratant 100H (50ml)</p>
<p>Ce soin rafraîchissant, à la texture gel-crème addictive, apporte à votre peau une hydratation immédiate. Instantanément, votre peau est apaisée, repulpée et plus lumineuse.</p>
<p>- Moisture Surge™ Masque Hydratant Nuit (30ml)</p>
<p>Ce masque de nuit nourrit et hydrate en profondeur pendant votre sommeil. La peau est repulpée, souple et lumineuse dès le début de la journée.</p>
<p>- Moisture Surge Lips™  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333224571</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a04c5914811745d6418e24819116f3d6bf5afff20fe96a11bfbf62616115f3b ]]></g:image_link>
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
<title><![CDATA[ Clinique Even Better Make-Up SPF15 09 Sand ]]></title>
<g:id>2926049e-21bc-40dd-ad47-49a2fd10db62</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-even better make-up spf15 09 sand?2926049e-21bc-40dd-ad47-49a2fd10db62 ]]></link>
<g:price><![CDATA[ 3900.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développé par des dermatologues, Even Better Fond de Teint est un fond de teint Clinique qui aide à unifier et à diminuer les problèmes d'irrégularités du teint. Il permet non seulement de camoufler les taches brunes mais aussi de les traiter immédiatement et pour longtemps. Sa formule enrichie en écran solaire permet de lutter efficacement contre la formation de nouvelles taches et de lutter contre la formation de nouvelles taches.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0020714324681</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/117001121152d84c75d6c6a868161e72e776382b81233e410132d30a988d7745 ]]></g:image_link>
<g:product_type><![CDATA[ SOLAIRES > Dermocosmétique > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clinique Moisture Surge - Masque Hydratant Nuit ]]></title>
<g:id>a2cd63ee-e087-4c47-a3db-6dfc4a5fe7c4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-moisture surge - masque hydratant nuit?a2cd63ee-e087-4c47-a3db-6dfc4a5fe7c4 ]]></link>
<g:price><![CDATA[ 4290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce masque de nuit Moisture Surge à la texture crème hydrate en profondeur la peau et aide à restaurer sa barrière d'hydratation protectrice.</span><br /><br /><span>Réparateur, le masque hydratant Moisture Surge permet à la peau de se repulper et de produire des réserves pour le lendemain pour une peau souple et lumineuse dès le début de la journée.</span><br /><span>Tout au long de la nuit, il apaise toute peau desséchée.</span><br /><span>Au réveil, la peau est repulpée, souple et lum ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0020714576219</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/67513b7b2e95bf1e5934a4351d35232cd6a4d089e7a1b17ef7f94f4b33ca22bd ]]></g:image_link>
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
<title><![CDATA[ Clinique Moisture Surge Intense Soin Hydro-Relipidant 50ml ]]></title>
<g:id>4611d57c-30f3-4e6a-8cd2-9bd1999f3806</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-moisture surge intense soin hydro-relipidant 50ml?4611d57c-30f3-4e6a-8cd2-9bd1999f3806 ]]></link>
<g:price><![CDATA[ 4200.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clinique Moisture Surge Intense 72H Hydratant Relipidifiant 50 ml est un gel-crème à la crème riche et onctueuse qui hydrate et apaise la peau pour lui donner un aspect lisse, repulpé et lumineux.</p><p>Sa technologie auto-réhydratante et relipidante est composée de :</p><p>de centella asiatica, qui apaise et calme les irritations et les rougeurs,</p><p>d'acide hyaluronique, d'eau d'aloe vera et de caféine, qui maintiennent la peau hydratée pendant 72 heures, même après le nettoyage,</p><p>de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333042809</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1afd08dbf5c236647764e2055dbfd6399874f6a5cfe49e459c404564fc0e63aa ]]></g:image_link>
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
<title><![CDATA[ Clinique Sun-Kissed Gel de Teint Multi-usage Effet Soleil ]]></title>
<g:id>d9b7836d-f838-4688-8126-fc742465a0c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-sun-kissed gel de teint multi-usage effet soleil?d9b7836d-f838-4688-8126-fc742465a0c6 ]]></link>
<g:price><![CDATA[ 4100.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Universal Glow - 30ml</span></p>
<p>Un gel Clinique effet soleil, qui réchauffe le teint et apporte de l’éclat.</p>
<p>Un effet bonne mine immédiat avec la gelée teintée Clinique. Un gel bronzant liquide, léger et transparent, qui donne instantanément à la peau un effet hâlé et une bonne mine, avec ou sans fond de teint.<br /><br />Mélangez-le avec une crème hydratante ou un fond de teint pour apporter à votre peau un éclat ensoleillé.<br /><br />Fini doré. Couvrance légère.<br /><br /> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0020714795689</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8585be6998277a05b14fd20c8f005f12051ac3d770e0a971aa2e21bcee396fdf ]]></g:image_link>
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
<title><![CDATA[ Clinique chubby in the nude fondation stick 6g ]]></title>
<g:id>348fb1b6-d783-4833-b18f-60e36633aafe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-chubby in the nude fondation stick 6g?348fb1b6-d783-4833-b18f-60e36633aafe ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Perfection instantanée en déplacement. Fond de teint en stick crémeux pour une application et des retouches sur tout le visage. Sans huile.<br />Finir Naturel</p>
<p><strong>Couverture</strong><br />Modéré, Transparent</p>
<p><strong>Type de peau</strong><br />Très sec à sec, mixte gras, mixte sec, gras, normal</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0020714755409</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c4e024d998da62a83f650b37583fb86e6a43753fac1ef09213ad6b9195aa39db ]]></g:image_link>
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
<title><![CDATA[ Clinique coffret Smart Skincare ]]></title>
<g:id>1af535ad-846b-4fa3-bb04-9d1792c2268e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinique-coffret smart skincare?1af535ad-846b-4fa3-bb04-9d1792c2268e ]]></link>
<g:price><![CDATA[ 8300.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce coffret contient :</span><br /><span>- Smart Clinical Repair Crème Réparatrice Anti-rides - Tous types de peaux (50ml). Cette crème hydratante pour les rides aide à renforcer et à nourrir la peau pour lui donner un aspect plus lisse et plus jeune.</span><br /><span>- Smart Clinical Repair Sérum Correcteur Anti-rides (10ml). Ce sérum anti-âge formulé avec 1% de rétinoïde corrige les rides, repulpe et raffermit la peau.</span><br /><span>- Smart Clinical Repair Crème Yeux Correction Ri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0192333224632</g:gtin>
<g:brand><![CDATA[ CLINIQUE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6b967dfcb84b1313073b7481e1892c7a99d7ac8f45499979c25552b38998b4a3 ]]></g:image_link>
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
<title><![CDATA[ Clinomint Eclat Gel Dentifrice Anti Tache 75 ml ]]></title>
<g:id>69cc072e-20a0-45ff-bb1e-2c7ee82ac347</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/clinomint-eclat gel dentifrice anti tache 75 ml?69cc072e-20a0-45ff-bb1e-2c7ee82ac347 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Restaure la blancheur naturelle de vos dents, tout en respectant leur émail. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5011111810223</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66252ae60678577142cd9790e63c1fb6e41705c28cf0336b4c546962ead667e1 ]]></g:image_link>
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
<title><![CDATA[ Clément Thékan Fiprokil Chat 50mg 4 pipettes ]]></title>
<g:id>e89dce98-89a9-4caf-b84d-8a20b2fcebb4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment thékan fiprokil chat 50mg 4 pipettes?e89dce98-89a9-4caf-b84d-8a20b2fcebb4 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clément Thékan Fiprokil traite les infestations par les puces (Ctenocephalides spp.) et les tiques (Dermacentor Reticulatus).</p>
<p>L'efficacité insecticide du produit persiste jusqu'à 5 semaines contre les puces (Ctenocephalides Felis), l'efficacité acaricide du produit persiste jusqu'à 2 semaines contre les tiques (Rhipicephalus Sanguineus, Ixodes Ricinus, Dermacentor Reticulatus).</p>
<p>Si des tiques de certaines espèces sont présentes au moment de l'application du produit (Rhipicephalus ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3283021955611</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e77af1574beb3af51c5bd5d0c1284e00e8d86ea6b353bbfa906d68a961e60431 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clément Thékan Shampooing Démêlant 200 ml ]]></title>
<g:id>71c3e233-6e88-4022-a91f-2ef5c7090b7b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment thékan shampooing démêlant 200 ml?71c3e233-6e88-4022-a91f-2ef5c7090b7b ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clément Thékan Shampooing Démêlant 200 ml est un shampooing effet démêlant et volumateur pour chiens et chats. Particulièrement adapté aux animaux à poils longs il laisse le poil brillant et souple. Votre animal est propre et son pelage est soyeux. Eviter les yeux, les oreilles, le museau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890215414</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/842d703fbcd1eb4a03a5b259ad4cc6f1a325c50e9fc2ad9fb268b2b7f86fdc16 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clément Thékan Shampooing Poils Blancs 200 ml ]]></title>
<g:id>e0cbdea3-457a-4b0f-8506-1ff261921b58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment thékan shampooing poils blancs 200 ml?e0cbdea3-457a-4b0f-8506-1ff261921b58 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clément Thékan Shampooing Poils Blancs 200 ml spécialement formulé pour les chiens et chats à poils blancs est un shampooing offrant deux actions : - il nettoie efficacement le pelage, - il élimine les souillures et le jaunissement du pelage. Il permet de raviver la blancheur et laisse le pelage doux, souple et brillant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890215407</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aaaf93df930cd69c4df108a86e4f8e16dfa7407b2b3179deb3280a82ae15847b ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clément Thékan Strantel XL Vermifuges Chien 2 Comprimés ]]></title>
<g:id>4da72e4f-ec32-4dac-96a7-64055401bb32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment thékan strantel xl vermifuges chien 2 comprimés?4da72e4f-ec32-4dac-96a7-64055401bb32 ]]></link>
<g:price><![CDATA[ 1415.00 EUR ]]></g:price>
<description><![CDATA[ <div id="short_description_content" class="rte align_justify">
<p><span>Clément Thékan StrantelXL </span>est un vermifuge à spectre large pour les chiens utilisé dans le traitement des infestations mixtes par les nématodes et cestodes (vers plats et ronds).</p>
<p></p>
</div>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890212901</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cfd801c6f7a58277659dfa6e37c6f64f4b9f8af9e616b737d23bc4ab553f5260 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clément Thékan Vermiscan Chiens Vermifuge  4 comprimés ]]></title>
<g:id>0a3482db-34aa-40c9-9e8d-b991f2e04138</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment thékan vermiscan chiens vermifuge  4 comprimés?0a3482db-34aa-40c9-9e8d-b991f2e04138 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les comprimés vermifuges scanil chien offrent un traitement contre les infestations par les cestodes ou les nématodes pour votre chien. <br /><br />SCANIL CHIENS peut être utilisé en période de croissance et de gestation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890242045</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9bfe8679393fe8627fae06c14ecd580a091c9e478c1b30e0deb3126d265851ee ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clément thékan arthrosenior chien et chat  60 comprimés ]]></title>
<g:id>920cefb0-69ab-4681-aca0-a0bb8e3189ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment thékan arthrosenior chien et chat  60 comprimés?920cefb0-69ab-4681-aca0-a0bb8e3189ab ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Arthrosenior Chien &amp; Chat de clément thekan est un complément alimentaire vétérinaire destiné aux chiens et chats âgés de 7 à 10 ans. </p>
<p>Il est idéal pour les chiens sportifs, les chiens de grande taille, les animaux présentant une surcharge pondérale et les animaux ayant subi une chirurgie de l'articulation. <br /><br />L'Arthrosenior Chien &amp; Chat clement thekan contient : </p>
<p>De la chondroïtine et de la glucosamine qui stimulent la régénération du cartilage, favorisant ai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595897787631</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/68bc3625ac3bd65fcefa243a64685505594ade293e503e9424d6646f5ae0f9a3 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Clément-Thékan Clémiderm 150ml ]]></title>
<g:id>caf3cd40-ea38-4d74-96b9-b3ecbe3a28fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cl-ment-thékan clémiderm 150ml?caf3cd40-ea38-4d74-96b9-b3ecbe3a28fd ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Désinfection de la peau.</li>
<li>Convient à tous les animaux : chiens, chats, chevaux, lapins, oiseaux, volailles, bovins, porcins et ovins.</li>
<li>Peut être utilisé dès les plus jeune âge.</li>
</ul><p> </p>
<ul><li>Clemiderm est un désinfectant anti-ùicrobien topique, utilisable sur toutes les espèces.</li>
<li>Le spray, à appliquer sur une peau saine, a une action anti-microbienne à large spectre éliminant 99.9% des germes (Gram (+) et Gram (-)).</li>
<li>Clemiderm élimine les odeu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595895306667</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/acee9e90c90e348cfc200336ce6867a9cb7da91c17ff5cd21645905d9ff6c002 ]]></g:image_link>
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
<title><![CDATA[ Coalgan Compresses x 5 ]]></title>
<g:id>254ab0af-571e-4683-95c2-4d3e1c82180b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coalgan-compresses x 5?254ab0af-571e-4683-95c2-4d3e1c82180b ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Coalgant 5 Compresses arrête le saignement et favorise la cicatrisation. Bio-active et stérile, chaque compresse est constituée d'alginate de calcium d'origine 100% végétale pour accélérer l'agrégation des plaquettes et favoriser la cicatrisation rapide.</p>
<p>Elle est également efficace chez les patients présentant des troubles de l'hémostase congénitaux ou acquis.</p>
<p>Contient 5 compresses hémostatiques de 30 x 50 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401563015536</g:gtin>
<g:brand><![CDATA[ IDES PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e79be195c69cc60237c00ae171c082b43f48e0653aaf79eebb75ffb102356dc ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Coalgan adhésif 12 pansements ]]></title>
<g:id>d6d1eeb1-ca67-441f-831a-8942a10f4670</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coalgan-adhésif 12 pansements?d6d1eeb1-ca67-441f-831a-8942a10f4670 ]]></link>
<g:price><![CDATA[ 410.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Les pansements adhésifs Coalgan</strong> sont indiqués pour soigner les blessures occasionnées lors d’activités pratiquées au cours de la vie quotidienne.<br /><br />Ces pansements sont utilisés en cas de <strong>blessures superficielles</strong> (coupures, ampoules ouvertes, petites plaies). Ils conviennent chez l’enfant, l’adulte, la femme enceinte et est recommandé chez les patients souffrant de<strong> troubles de l’hémostase congénitaux</strong> (Rendu-Osler, von Willebrand, hémo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401521069847</g:gtin>
<g:brand><![CDATA[ IDES PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b6d9b8e8b87dd465a4c7a71bfd4e25e256dcdc9a28a6cab1835c3ea2cf1969c ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Coalgan ouate sachet 0.40 g ]]></title>
<g:id>55b3986c-28d3-43df-aa51-4fc0b244904a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coalgan-ouate sachet 0.40 g?55b3986c-28d3-43df-aa51-4fc0b244904a ]]></link>
<g:price><![CDATA[ 451.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coalgan est constitué de fibres d’alginate de calcium (molécule naturelle extraite d’algues brunes) qui se gélifient en surface au contact du sang.</p>
<p>Coalgan est indiqué dans les saignements : de nez, cutanés, buccaux, des points de ponction. Coalgan est efficace chez les patients sous anticoagulants, antiagrégants plaquettaires</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401073757667</g:gtin>
<g:brand><![CDATA[ IDES PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5bfbbc7a0bb679fc905edbe578038b3be2a620bdfbc68258ecb0c834aa3464f ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Codexial Calmiscab Intense Soin Apaisant Anti-Grattage 50 ml ]]></title>
<g:id>0a428b1d-3925-40a6-b46f-4dd4e49b3fa7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-calmiscab intense soin apaisant anti-grattage 50 ml?0a428b1d-3925-40a6-b46f-4dd4e49b3fa7 ]]></link>
<g:price><![CDATA[ 1165.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Calmiscab Intense Soin Apaisant Anti-Grattage 50 ml est un soin anti-grattage destiné à soulager immédiatement les démangeaisons localisées et à atténuer les désagréments liés aux piqûres d'insectes et de végétaux urticants.</p>
<p>Calmiscab Intense, sans parfum, réduit immédiatement les démangeaisons et l'incitation au grattage grâce à son complexe d'actifs (Crotamiton 5%, Calamine 2% et sulfate de Zinc 0,4%).</p>
<p>Ces actifs soulagent et apaisent les désagréments cutanés, assaini ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263123</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1eec802fa46e487767435ac64765d6867556b209c0041b4ad4713b3a62e57283 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enobright Pigment Control SPF50+ 30 ml ]]></title>
<g:id>b4274f40-1cae-438b-a4ad-1e2dad8273e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enobright pigment control spf50+ 30 ml?b4274f40-1cae-438b-a4ad-1e2dad8273e6 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enobright Pigment Control SPF50+ Crème Uniformisante Anti-Taches 30 ml est un soin visage qui conviendra à tous types de peaux.<br />Cette crème atténue les taches brunes, prévient le vieillissement prématuré de la peau et la préserve des effets néfastes du soleil.<br />Sa formule associe la puissance d'actifs dépigmentants et éclaircissants à des filtres solaires :</p>
<ul><li>La Vitamine C : anti-oxydant puissant, elle protège la peau des facteurs environnementaux nocifs quotidiens ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263550</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e017e8aba7314cf4646d4b24682881116050bcaf2d2fdb2dedb101c3174f8cf4 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enobright Radiance Day Émulsion 30 ml ]]></title>
<g:id>931e5bbd-f56e-46d2-9ddd-7d50e1de1046</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enobright radiance day Émulsion 30 ml?931e5bbd-f56e-46d2-9ddd-7d50e1de1046 ]]></link>
<g:price><![CDATA[ 2760.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enobright Radiance Day Émulsion Éclat Anti-Taches 30 ml est un soin visage dépigmentant qui conviendra à tous types de peaux.<br />Cette émulsion corrige l'aspect des taches brunes existantes quel que soit leur nature : soleil, âge, grossesse ou acné, et éclaircit le teint. Elle est formulée à partir d'un trio d'actifs original :</p>
<ul><li>L'alpha-arbutine et l'acide dioïque, deux principes actifs dépigmentants reconnus pour corriger les taches brunes et éclaircir le teint.</li>
<l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263512</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cece2ec3383ea7d9593a57d129d1b4a6e668e57f52ac1bf7e1c6fbfc58b9c9e4 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enobright Radiance Intense Sérum 15 ml ]]></title>
<g:id>619c4302-54fb-4a9a-b975-dda49ff25fbc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enobright radiance intense sérum 15 ml?619c4302-54fb-4a9a-b975-dda49ff25fbc ]]></link>
<g:price><![CDATA[ 3130.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enobright Radiance Intense Sérum Intensif Anti-Taches 15 ml est un soin d'attaque pour agir sur des taches pigmentaires prononcées, qui conviendra à tous types de peaux.<br />Il corrige l'aspect des taches brunes existantes quelle que soit leur nature : soleil, âge, grossesse ou acné, et éclaircit le teint. Sa formule est l'association d'actifs inédite et hautement concentrée :</p>
<ul><li>L'alpha-arbutine : dépigmentant reconnu, elle permet d'atténuer les taches brunes.</li>
<li>La  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263505</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/be7d82e0aa86d9e788fdc6b91b2669fd389bf986b5aba29224264ca4acf8ad05 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Baume Lèvres Nourrissant 15 ml ]]></title>
<g:id>f30d86ba-2f4d-415b-80a9-03a1cec6519a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare baume lèvres nourrissant 15 ml?f30d86ba-2f4d-415b-80a9-03a1cec6519a ]]></link>
<g:price><![CDATA[ 570.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Baume Lèvres Nourrissant 15 ml est un baume à lèvres nourrissant, réparateur et protecteur enrichi en provitamine B5. Il apaise et hydrate les lèvres sèches, abîmées et gercées tout en les protégeant des agressions extérieures (froid, pollution ...).</p>
<p>Grâce à un complexe d'actifs reconnus pour ses propriétés réparatrices, hydratantes et apaisantes, dont la provitamine B5, il permet de retrouver la souplesse naturelle de vos lèvres.<br />Sa texture translucide et onctueu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263680</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c82b07de6bc71dfd5ed5ec56eb2352996de191edf6765d92631f41e014da261c ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Crème Corps Hydratante 200 ml ]]></title>
<g:id>d9f68533-6389-4f4d-ae48-c18eedc3fdfd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare crème corps hydratante 200 ml?d9f68533-6389-4f4d-ae48-c18eedc3fdfd ]]></link>
<g:price><![CDATA[ 1360.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Crème Corps Hydratante 200 ml est une crème hydratante pour le corps, enrichie en extrait de salicorne. Elle apporte 24h d'hydratation à la peau, apaise l'inconfort cutané, protège et renforce la fonction barrière de la peau.</p>
<p>Grâce à son duo ultra-hydratant d'extrait de salicorne et de glycérine, elle est la réponse aux problèmes des peaux sèches, qui sont généralement plus sujettes aux inconforts cutanés.<br />Apaisante et protectrice, elle apporte la quantité d'eau d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263710</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8fc07d2a742c62bd08814945fc89035d9dbabd196850d16a71f6e28fb4ddc037 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Crème Mains Hydratante 50 ml ]]></title>
<g:id>6b325dbd-17d6-49d1-937b-d521263fcebe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare crème mains hydratante 50 ml?6b325dbd-17d6-49d1-937b-d521263fcebe ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Crème Mains Hydratante 50 ml est une crème hydratante pour les mains, enrichie en provitamines B5. Elle nourrit, répare et apaise les tiraillements des mains desséchées ou abîmées, grâce à son complexe d'actifs ultra nourrissants de provitamine B5 et de beurre de karité.</p>
<p>Formulée à partir d'actifs reconnus pour leurs propriétés hydratantes, réparatrices et apaisantes, elle procure une sensation immédiat d'hydratation à la peau sans laisser de film gras. L'association d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263703</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/45f7fc4051cffd1c5cd7b6efcdfab3ab7d1e8b87c5444d87cbb950758e7cb096 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Crème Visage Hydratante 30 ml ]]></title>
<g:id>7446be63-d6ae-4d25-938b-c974041c5a30</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare crème visage hydratante 30 ml?7446be63-d6ae-4d25-938b-c974041c5a30 ]]></link>
<g:price><![CDATA[ 1235.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Crème Visage Hydratante 30 ml est un soin enrichi en extrait de salicorne, qui apaise l'inconfort cutané et apporte 24h d'hydratation à la peau tout en renforçant sa fonction barrière.</p>
<p>Elle apporte l'hydratation optimale dont la peau a besoin tout au long de la journée, grâce à un complexe d'actifs ultra-hydratants d'extrait de salicorne et de glycérine. Elle atténue significativement les sensations de tiraillement et de picotement dues à la sécheresse cutanée et repul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263697</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d9f6b35617ff0a73847ade23cc840ebb125050f7ec040d2dcc90510e5234d80a ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Crème Visage Hydratante 30 ml + Huile Visage Nourrissante 20 ml ]]></title>
<g:id>f0ce0eac-8adb-489c-ab95-bc35350958c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare crème visage hydratante 30 ml + huile visage nourrissante 20 ml?f0ce0eac-8adb-489c-ab95-bc35350958c0 ]]></link>
<g:price><![CDATA[ 3150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Crème Visage Hydratante 30 ml + Huile Visage Nourrissante 20 ml est un duo de soins hydratants associant une crème hydratante à une huile nourrissante pour hydrater intensément sa peau au quotidien.</p>
<p>- Codexial Enocare Crème Visage Hydratante 30 ml est un soin enrichi en extrait de salicorne, qui apaise l'inconfort cutané et apporte 24h d'hydratation à la peau tout en renforçant sa fonction barrière. Cette crème apporte l'hydratation optimale dont la peau a besoin tout  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263932</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bdc4ff8c78bfc22aa157c72687762fb4e4be8d9d36107436e4f689dd7b646056 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Gel Lavant Surgras 400 ml ]]></title>
<g:id>1c62724a-710a-427a-a34e-84eec3abb2a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare gel lavant surgras 400 ml?1c62724a-710a-427a-a34e-84eec3abb2a3 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Gel Lavant Surgras 400 ml est un gel nettoyant doux et protecteur, sans savon. Il nourrit, protège et nettoie la peau et les cheveux de toute la famille en douceur.<br />Il élimine toutes les impuretés tout en respectant les peaux les plus sensibles. Apaisant, il réduit les sensations d'inconfort cutané, pour une peau propre, douce et hydratée.</p>
<p>Grâce aux propriétés assainissantes et hydratantes de sa formule, il nettoie la peau sans dessécher, en lui laissant un voile  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263727</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/746b89fda6e2ddf7d58848db239c28fcd92c7c7e317edd4b8b20653bc6d1e7c1 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Ma Routine Douceur et Hydratation ]]></title>
<g:id>ea1a238c-63e2-4810-a15d-52088d577247</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare ma routine douceur et hydratation?ea1a238c-63e2-4810-a15d-52088d577247 ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Ma Routine Douceur et Hydratation est un coffret de soins pour le visage, les lèvres et les mains. Ces 3 produits nourrissent, hydratent et réparent les peaux sèches.</p>
<p>- Codexial Enocare Crème Visage Hydratante 30 ml est un soin enrichi en extrait de salicorne, qui apaise l'inconfort cutané et apporte 24h d'hydratation à la peau tout en renforçant sa fonction barrière. Elle apporte l'hydratation optimale dont la peau a besoin tout au long de la journée, grâce à un compl ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263321</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe1ebf94f3472292ba9fc10cb593e9f7f28b653212915cf31df7d75db46e5997 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Pain Nettoyant Surgras 100 g ]]></title>
<g:id>ae059367-c4d4-4ecf-8ebc-70563c4f33ea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare pain nettoyant surgras 100 g?ae059367-c4d4-4ecf-8ebc-70563c4f33ea ]]></link>
<g:price><![CDATA[ 440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Pain Nettoyant Surgras 100 g est un pain extra-doux qui nettoie en douceur tout en respectant les peaux les plus sensibles. Aux vertus apaisantes, ce savon réduit les sensations d'inconfort de la peau, pour une peau propre, souple et douce.<br />Il nettoie sans altérer la barrière protectrice de la peau, grâce aux tensioactifs doux qu'il contient.</p>
<p>Grâce à son complexe de provitamine B5, de beurre de karité et d'amidon de riz, reconnus pour leurs propriétés surgraissant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263734</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/771ed7be219b76fc2122eb125d06d2510532101f72f151a5c7bca23a9b314628 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Pro Baume Émollient Réparateur 100 ml ]]></title>
<g:id>b36b760b-7073-4fcf-b957-9a81f7e30ca3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare pro baume Émollient réparateur 100 ml?b36b760b-7073-4fcf-b957-9a81f7e30ca3 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Pro Baume Émollient Réparateur 100 ml est un baume nourrissant réparateur, hydratant et apaisant enrichi en provitamine B5. Il apaise, favorise la réparation et hydrate immédiatement et durablement les zones localisées.<br />Il est spécifiquement formulé pour les peaux extrêmement sèches, sensibles et fragilisées du nourrisson, de l'enfant et de l'adulte.</p>
<p>Grâce à un complexe d'actifs à la concentration optimale de provitamine B5 et de beurre de karité, il possède une t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263772</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e46e23d84e9cd68c2e53c2c43d02e7663f098d58d57b0a18749f10ff0551a25 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Pro Emulkera40 75 ml ]]></title>
<g:id>b5a672ff-163f-45fc-888b-8e5548c17187</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare pro emulkera40 75 ml?b5a672ff-163f-45fc-888b-8e5548c17187 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Pro Emulkera40 75 ml est une émulsion lissante, kératolytique et hydratante concentrée en urée. Elle agit sur les rugosités, callosités et squames des zones localisées (coudes, genoux, pieds) et du cuir chevelu.<br />Grâce à une concentration optimale de 40% d'actifs kératolytiques et hydratants, les épaississements cutanés sont atténués dès le 5ème jour.</p>
<p>Formulée à base d'urée, d'acide lactique et d'acide salicylique, un trio d'actifs exfoliants, elle favorise l'élimi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263741</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ba52794ef9604262cf800afe0b8f3b3481295073a6dc883b363132f73caf185 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Pro Onguent Karité 40 ml ]]></title>
<g:id>4b3ad8c5-b5df-4833-b4c6-0c34e40925b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare pro onguent karité 40 ml?4b3ad8c5-b5df-4833-b4c6-0c34e40925b3 ]]></link>
<g:price><![CDATA[ 940.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Pro Onguent Karité 40 ml est une crème barrière nourrissante et réparatrice à utiliser en cas de fissures et crevasses* sur les mains, les pieds et les coudes. Elle permet de retrouver un confort cutané en moins de 7 jours, d'apaiser les sensations de démangeaisons, d'irritations et de tiraillements, hydrater et nourrir la peau et isoler des agressions grâce à sa texture barrière.</p>
<ul><li>Le beurre de karité, riche en acide oléique est ultra-nourrissant. Il apporte les li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263758</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e5f46cd0f6baffcba274967cb6d9e14f2361a466a35e8c763982b0fe9134b02 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Pro Pâte Oléozinc 50 ml ]]></title>
<g:id>bc4e5a24-02d3-4493-bd66-351e42257f10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare pro pâte oléozinc 50 ml?bc4e5a24-02d3-4493-bd66-351e42257f10 ]]></link>
<g:price><![CDATA[ 720.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Pro Pâte Oléozinc 50 ml est une pâte isolante protectrice enrichie en oxyde de zinc. Elle protège et soulage les zones irritables, fragiles ou génératrices de grattage comme le siège du nourrisson ou les zones de plis.<br />Elle bénéficie d'une complexe d'actifs à la concentration optimale, lui garantissant une triple action : isolante, protectrice et apaisante.</p>
<p>Sa formule parfaitement adaptée aux peaux fragiles prévient et réduit les rougeurs et sensations de tiraille ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263796</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b108d2c0668ef50a01f8070a674ddede5e5ad064e2a7a35265987cea3d45ea26 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enocare Pro Émulsion Relipidante 400 ml ]]></title>
<g:id>07d381c5-8852-431b-8004-b5dc92940f87</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enocare pro Émulsion relipidante 400 ml?07d381c5-8852-431b-8004-b5dc92940f87 ]]></link>
<g:price><![CDATA[ 1560.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enocare Pro Émulsion Relipidante 400 ml est un lait corps nourrissant enrichi en provitamine B5. Il hydrate, nourrit et apaise les sensations de tiraillements et de picotements, tout en prévenant et en réduisant les irritations et les sécheresses cutanées sévères.<br />Il est spécialement conçu pour soulager les peaux sèches à très sèches à tendance atopique (psoriasis, eczéma). Il apaise l'inconfort cutané et procure à la peau 48h d'hydratation intense tout en restaurant sa barrière ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263789</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d5a04749f69d2cb62eded69a2829273b47bca8d69e07d41fcd1df83fd67cda9 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Coffret Ma Routine Coup d'Eclat ]]></title>
<g:id>f0cddb1e-826c-4ea1-a84e-6bdf8128517f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss coffret ma routine coup d'eclat?f0cddb1e-826c-4ea1-a84e-6bdf8128517f ]]></link>
<g:price><![CDATA[ 2080.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin Foamer 150 ml + Perfect Skin Regul 30 ml est un coffret de soins anti-imperfections, apportant un coup d'éclat au visage.</p>
<p>- Codexial Enoliss Perfect Skin Foamer 150 ml est une mousse dermo-nettoyante purifiante et anti-imperfections. Elle convient à tous types de peaux, même sensibles.</p>
<ul><li>Respecte l'équilibre naturel de la peau.</li>
<li>Nettoie et démaquille en douceur, sans dessécher ni irriter.</li>
<li>Élimine les impuretés et l'excès de sébum ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263024</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e29d755cfdd3b9f9354357b13f7753bc5e4bb1f78311190f089b20e2bc553b42 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Duo Geste Anit-Imperfections ]]></title>
<g:id>967b4905-4adc-4cca-bbe0-e7d2e05e9869</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss duo geste anit-imperfections?967b4905-4adc-4cca-bbe0-e7d2e05e9869 ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin 15 AHA Émulsion Rénovatrice Nuit Micro-Peeling 30 ml + Perfect Skin Oil 20 ml est un duo de soins anti-imperfections associant une émulsion rénovatrice nuit à une huile lissante.</p>
<p>- Codexial Enoliss Perfect Skin 15 AHA Émulsion Rénovatrice Nuit Micro-Peeling 30 ml est un micro-peeling quotidien à destination des peaux normales à mixtes avec imperfections. Il intervient sur les peaux à tendance acnéique de l'adulte en agissant sur les pores dilatés et imperf ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263918</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7983c763a5ed4398fc7e5fa731c16502116f4467d70c38e4d2e2281fc6ecccda ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin 10 AHA Crème Rénovatrice Nuit Micro-Peeling 30 ml ]]></title>
<g:id>f215e03d-6e27-4131-8a4c-ffbf795dfa0d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin 10 aha crème rénovatrice nuit micro-peeling 30 ml?f215e03d-6e27-4131-8a4c-ffbf795dfa0d ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin 10 AHA Crème Rénovatrice Nuit Micro-Peeling 30 ml est un micro-peeling quotidien à destination des peaux à imperfections, sèches à normales de l'adulte. Elle agit sur les rugosités, les irrégularités et les pores dilatés.</p>
<p>Sa formule associe deux actifs principaux qui sont l'acide glycolique et l'acide hyaluronique. L'acide glycolique, concentré à 10% dans ce soin, est un acide de fruit lissant et exfoliant. Issu de la canne à sucre, naturel ou de synthèse, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263468</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c72aac87920e8b6ae28f05743765a542d5951cb9fa85a69e1616bd55e316781 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin 15 AHA Émulsion Rénovatrice Nuit Micro-Peeling 30 ml ]]></title>
<g:id>c528f1fc-b737-4b2f-87b4-28a00349de33</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin 15 aha Émulsion rénovatrice nuit micro-peeling 30 ml?c528f1fc-b737-4b2f-87b4-28a00349de33 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263475</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d20671efb919da9d704e24bfcf1127392702235d8b05c0f08157d74eaab01760 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin 20 AHA Gel Rénovateur Nuit Micro-Peeling 30 ml ]]></title>
<g:id>16330137-90e5-4779-9408-a1462135e72f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin 20 aha gel rénovateur nuit micro-peeling 30 ml?16330137-90e5-4779-9408-a1462135e72f ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin 20 AHA Gel Rénovateur Nuit Micro-Peeling 30 ml est un micro-peeling quotidien à l'effet assainissant et matifiant sur les peaux grasses à imperfections persistantes de l'adulte.</p>
<p>Dosé à 20% en acide glycolique, il réduit les impuretés, élimine l'excès de sébum et corrige les imperfections. Il purifie et améliore la texture de la peau. L'acide glycolique est un acide de fruit lissant et exfoliant. Issu de la canne à sucre, naturel ou de synthèse, il améliore ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263482</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c72aac87920e8b6ae28f05743765a542d5951cb9fa85a69e1616bd55e316781 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin Body 25 AHA Lotion Exfoliante et Lissante Corps 100 ml ]]></title>
<g:id>79daa46b-dd66-47de-8732-6e3b2a274710</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin body 25 aha lotion exfoliante et lissante corps 100 ml?79daa46b-dd66-47de-8732-6e3b2a274710 ]]></link>
<g:price><![CDATA[ 2330.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin Body 25 AHA Lotion Exfoliante et Lissante Corps 100 ml est une lotion corporelle pour peaux normales à grasses.<br />Elle corrige les imperfections et rugosités, élimine les cellules mortes, et lisse et affine le grain de peau.</p>
<p>Elle est concentrée à 25% de principes actifs exfoliants dont 15% d'acide glycolique, un acide de fruit lissant et exfoliant. Issu de la canne à sucre, naturel ou de synthèse, il améliore le toucher et l'apparence de la peau, corrig ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263499</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e287a875bc7431e32d23d11024afdcf7c7361d3e2eede744e3de7c779ff2fac ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin Cleanser Eau Micellaire 200 ml ]]></title>
<g:id>873371f9-ac4a-4fe9-b011-8d9832db3b20</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin cleanser eau micellaire 200 ml?873371f9-ac4a-4fe9-b011-8d9832db3b20 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin Cleanser Eau Micellaire 200 ml est une eau micellaire nettoyante, démaquillante et purifiante destinée aux peaux mixtes à grasses à tendance acnéique.<br />Sa formule :</p>
<ul><li>Nettoie et apaise la peau instantanément.</li>
<li>Ne dessèche pas la peau.</li>
<li>Limite l'apparition de nouvelles imperfections.</li>
<li>Élimine toute trace de maquillage même waterproof.</li>
<li>Préserve l'équilibre naturel de la peau.</li>
<li>Élimine l'excès de sébum.</li>
</u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263581</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8366f6966291e4a6152f6c50af11f276b8bd5a39cba069aee8c535f4ee68dcf6 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin Peel 5 AHA Eau Tonique Pré-Exfoliante 100 ml ]]></title>
<g:id>4e5a06ac-e850-4c4c-bfc3-10d242df6fa5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin peel 5 aha eau tonique pré-exfoliante 100 ml?4e5a06ac-e850-4c4c-bfc3-10d242df6fa5 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin Peel 5 AHA Eau Tonique Pré-Exfoliante 100 ml est une eau tonique pré-exfoliante pour peaux normales à grasses avec imperfections.<br />Elle prépare la peau aux soins à l'acide glycolique, exfolie, libère les pores obstrués et favorise l'élimination des points noirs, sans dessécher la peau.</p>
<p>Dosée à 5% d'acide glycolique, cet actif améliore le toucher et l'apparence de la peau, corrige les imperfections, élimine les cellules mortes et redonne ainsi tout son  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263451</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/07654b1c4858d7053d865e6d1b3cdab189cce73bc70c6b4cecb0fb314752bedd ]]></g:image_link>
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
<title><![CDATA[ Codexial Enoliss Perfect Skin Regul 30 ml ]]></title>
<g:id>dded3d42-91b2-47c1-8720-5f132c29beb6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enoliss perfect skin regul 30 ml?dded3d42-91b2-47c1-8720-5f132c29beb6 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enoliss Perfect Skin Regul 30 ml est une émulsion exfoliatrice douce à la gluconolactone enrichie en post-biotique.<br />Elle convient aux peaux sensibles, normales à mixtes avec imperfections.<br />Grâce à la Gluconolactone, à l'Acide Lactobionique, au Ferment de Lactobacillus et au Zinc Gluconate, elle :</p>
<ul><li>Réduit boutons et points noirs sans assécher.</li>
<li>Affine le grain de peau et libère les pores obstrués.</li>
<li>Absorbe l'excès de sébum et prévient l'apparition  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263826</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0afe24f73d277b063d66edcc57db508200474c745eb6b48dc0288ca68a1fe45b ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Body Lift Lait Corps Anti-Âge 125 ml ]]></title>
<g:id>18a1f031-38c7-4a15-a54b-3b829b928dc1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime body lift lait corps anti-Âge 125 ml?18a1f031-38c7-4a15-a54b-3b829b928dc1 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Body Lift Lait Corps Anti-Âge 125 ml est un lait corps anti-âge hydratant et redensifiant destiné aux peaux normales à sèches.<br />Sa formule associe :</p>
<ul><li>L'acide hyaluronique qui hydrate la peau, la rend plus ferme et tonique.</li>
<li>Les acides glycolique et lactique : ces acides de fruits lissants permettent de lutter contre les signes de vieillissement cutané en redonnant à la peau un aspect visiblement plus lisse.</li>
</ul><p>La peau est hydratée, l'ensemble  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263567</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8f77987df5786bc8aefb747a586fa3fc31d9530f7b4349e5411566239b2b969 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Booster C10 Sérum Coffret Make Up ]]></title>
<g:id>7b3865b0-7932-436a-a953-98c08548ab3a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime booster c10 sérum coffret make up?7b3865b0-7932-436a-a953-98c08548ab3a ]]></link>
<g:price><![CDATA[ 3340.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>sérum Booster C10 Enotime</span><span> développé par la marque </span><span>Codexial</span><span> est soin anti-âge qui allie dans sa formule la vitamine C pure à deux acides hyaluroniques de poids moléculaires différents. Il s’adresse à tous les types de peau et s’applique généralement en prévention des premiers signes du vieillissement cutané que sont les rides, bien sûr, mais aussi les tâches pigmentaires.</span><br /><br /><span>Malgré son rôle essentiel de bouclier, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263000</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/053ce610d733e39cf7785bfca410fe5fc723c1c6d5daac699731747eca4c05a4 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Crème Complexe Global 50 ml + Supreme Oil 20 ml ]]></title>
<g:id>4ccd6eb0-68bc-4f02-957d-62953c8b4618</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime crème complexe global 50 ml + supreme oil 20 ml?4ccd6eb0-68bc-4f02-957d-62953c8b4618 ]]></link>
<g:price><![CDATA[ 5650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Crème Complexe Global 50 ml + Supreme Oil 20 ml est un duo fermeté anti-âge. Il permet de découvrir l'association unique de la crème anti-âge redensifiante et de l'huile concentrée anti-âge repulpante.</p>
<p>- Codexial Enotime Crème Complexe Global 50 ml est une crème jeunesse redensifiante au Tri-peptide tenseur hautement concentré.Elle conviendra à tous types de peaux, même sensibles. Son complexe d'actifs agit sur les rides profondes, d'expression et de déshydratation :</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263949</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff1f2215246c210c850e5c029c03aabf5eb169346812b90fafafece76ba81e37 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Crème Rich Lift 50 ml ]]></title>
<g:id>9207e2a4-95c2-4be2-99a4-925c2a6f4d43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime crème rich lift 50 ml?9207e2a4-95c2-4be2-99a4-925c2a6f4d43 ]]></link>
<g:price><![CDATA[ 4590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Crème Rich Lift 50 ml est une crème jeunesse nourrissante aux multi-céramides hautement concentrés..<br />Elle est spécialement destinée aux peaux matures, sensibles et/ou sèches. Ses actifs agissent en synergie sur le comblement des rides et sur l'hydratation de la peau :</p>
<ul><li>Multi-céramides et peptide pro-collagène : réduisent la profondeur des rides, resculptent le contour du visage.</li>
<li>Acides hyaluroniques haut et bas poids moléculaire : hydratent durablemen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263208</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50b138392baeba988468dd7c7cb57f24cfffb4b9cf3af0aa7c5d811d7b721edf ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Eyes Density 15 ml ]]></title>
<g:id>edf705ff-61e2-4163-9e7d-1c656020d9f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime eyes density 15 ml?edf705ff-61e2-4163-9e7d-1c656020d9f0 ]]></link>
<g:price><![CDATA[ 2470.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Eyes Density 15 ml est un gel contour des yeux anti-âge et défatiguant concentré à la caféine. Il défroisse le regard et estompe poches, cernes et signes de fatigue grâce à son effet tenseur immédiat.<br />Sa formule associe :</p>
<ul><li>La caféine, un actif reconnu pour ses effets tonifiants, qui atténue significativement les poches.</li>
<li>L'acide hyaluronique de haut poids moléculaire et le panthénol pour défroisser et hydrater intensément le contour des yeux.</li>
<li> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263628</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/928f16474d71aae0b7faa1a9aba65ce3121997344c3a05c5b7b36b23f52f78aa ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Ma Routine Jeunesse ]]></title>
<g:id>dbc949e6-1c8c-490d-8292-a7e684ff9cf1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime ma routine jeunesse?dbc949e6-1c8c-490d-8292-a7e684ff9cf1 ]]></link>
<g:price><![CDATA[ 4195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Crème Complexe Global 50 ml + Body Lift Lait Corps Anti-Âge 125 ml Offert est un coffret de soins anti-âge visage et corps, aux propriétés redensifiantes.</p>
<p>- Codexial Enotime Crème Complexe Global 50 ml est une crème jeunesse redensifiante au Tri-peptide tenseur hautement concentré. Elle conviendra à tous types de peaux, même sensibles. Son complexe d'actifs agit sur les rides profondes, d'expression et de déshydratation :</p>
<ul><li>Tri-peptide tenseur : décrispe les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263314</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f1cd434394000e1141f4bd8f65121299f466a459ea970b9f0b6bdebdbc8655c ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Makeup Remover 100 ml ]]></title>
<g:id>d32768c9-7e7f-4827-9c7a-4684a37e1dcb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime makeup remover 100 ml?d32768c9-7e7f-4827-9c7a-4684a37e1dcb ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Codexial Enotime Makeup Remover 100 ml est une gelée d'huile démaquillante et nettoyante pour le visage, les yeux et les lèvres. Elle convient à toutes les peaux, même sensibles. </span><br /><span>À l'huile de figue de Barbarie et à la vitamine E, cette gelée démaquille efficacement, même le maquillage waterproof, nettoie en douceur et élimine les impuretés. Il procure une sensation de peau fraîche et douce, laisse la peau détoxifiée, nourrie et apaisée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263635</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ab15a1f70f404b43771cdf96e6f47de1addd9c312eddbb34facbc9eeda32076 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Nutri-Lift Eyes 15 ml ]]></title>
<g:id>c7d7645c-b18e-401e-981b-8fe357ad01b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime nutri-lift eyes 15 ml?c7d7645c-b18e-401e-981b-8fe357ad01b1 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Nutri-Lift Eyes 15 ml est une crème riche contour des yeux anti-âge liftante qui convient à tous types de peaux, y compris sensibles. Elle est conçue pour nourrir intensément, défroisser les paupières et lutter contre les signes de l'âge, lisser rides et ridules, lifter le contour de l'œil, et atténuer cernes et poches. Sa formule associe :</p>
<ul><li>Le Resvératrol et la vitamine E, anti-oxydants et anti-âge reconnus qui permettent de lutter contre les signes du vieillissem ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263574</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b93d89c1fba2bd1a7961fae957dade9d06a59327ddc72564ca588e13f7f29dc ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Sérum Booster C10 15 ml ]]></title>
<g:id>528bd8da-b97c-429e-b049-b9b2d841021c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime sérum booster c10 15 ml?528bd8da-b97c-429e-b049-b9b2d841021c ]]></link>
<g:price><![CDATA[ 3790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Sérum Booster C10 15 ml est un sérum jeunesse antioxydant à la vitamine C pure hautement concentrée.<br />Il protège la peau au quotidien de la pollution, du stress oxydatif, et atténue les effets du photovieillissement grâce à une synergie d'actifs inédite :</p>
<ul><li>Vitamine C et adenosine : ces antioxydants puissants protègent la peau des facteurs environnementaux nocifs, quotidiens (effet du soleil, pollution, stress).</li>
<li>Acides hyaluroniques haut et bas poids mo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263246</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b9ae4d0e283c42250437541dce5212d9f42886683e70ead4f85d3aeb636c161 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enotime Sérum Star 30 ml ]]></title>
<g:id>e5b19a4e-433b-4cb5-a029-ff67a98cb16d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enotime sérum star 30 ml?e5b19a4e-433b-4cb5-a029-ff67a98cb16d ]]></link>
<g:price><![CDATA[ 4390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enotime Sérum Sérum Star 30 ml est un sérum jeunesse revitalisant au rétinol hautement concentré.<br />Il convient aux peaux normales, mixtes et grasses. Grâce à ses actifs, sa formule agit sur les signes de l'âge :</p>
<ul><li>Rétinol : il lise rides et ridules, affine le grain de la peau, réduit les imperfections et les taches pigmentaires.</li>
<li>Acides hyaluroniques haut et bas poids moléculaire : Reconnus pour stimuler la synthèse de collagène qui a tendance à diminuer au fil  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263222</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/51b0465805a526bb559a9df5321243b32f0558f2059ed6f43cc1c27bd855ecf6 ]]></g:image_link>
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
<title><![CDATA[ Codexial Enviroscab Spray Antiparasitaire 200 ml ]]></title>
<g:id>f1106a3d-0796-4e98-89b1-d4c29310eddb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-enviroscab spray antiparasitaire 200 ml?f1106a3d-0796-4e98-89b1-d4c29310eddb ]]></link>
<g:price><![CDATA[ 1020.00 EUR ]]></g:price>
<description><![CDATA[ <p>Codexial Enviroscab Spray Antiparasitaire 200 ml est un spray antiparasitaire destiné au traitement de la literie (matelas, oreillers, couvertures, couettes), des canapés, coussins, sièges de voiture ou autre support qui ne peut pas passer en machine à laver (certains vêtements et tissus, chaussures, casques…). Enviroscab est efficace sur les sarcoptes de la gale, les poux, les puces, les punaises de lit et les acariens de poussière. Ces parasites se transmettent par contact direct interhumai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263819</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f88eb5da1192983f2da7a1bb98412e11f33d1dafccc87d4f1ecd225052749ac ]]></g:image_link>
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
<title><![CDATA[ Codexial Répulsif Tiques Moustiques 75ml ]]></title>
<g:id>4fa0ee83-156d-4780-9246-ac08da68dc5f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codexial-répulsif tiques moustiques 75ml?4fa0ee83-156d-4780-9246-ac08da68dc5f ]]></link>
<g:price><![CDATA[ 1020.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec une innovation brevetée, le <strong>Répulsif Tiques Moustiques</strong> du Laboratoire Codexial est le premier répulsif qui agit à la fois sur la peau et les vêtements et qui assure une efficacité sur les tiques et les moustiques.</p>
<div class="product-desc">
<p>Son action offre une <strong>protection renforcée</strong> en zones tempérées et en zones tropicales pour toute la famille (adultes, enfants et nourrissons à partir de 6 mois).</p>
<p></p>
</div>
<div class="wrapper-infos-flex" ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008263345</g:gtin>
<g:brand><![CDATA[ LABORATOIRE CODEXIAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6ad6c8531460dbf7bb26b3640641040b02029259dcc79d42df40d38c37863d9 ]]></g:image_link>
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
<title><![CDATA[ Codifra Actyfilus Immunité 30 gélules ]]></title>
<g:id>2ea4c041-4d73-45c5-a259-30a320dc9773</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-actyfilus immunité 30 gélules?2ea4c041-4d73-45c5-a259-30a320dc9773 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Actyfilus apporte, dans une gélule d'origine végétale, 5 souches de ferments lactiques et de l'inuline extraite de racine de chicorée.</p>
<p>Chaque gélule apporte 10 milliards de souches de ferments lactiques.</p>
<p>Les probiotiques sont des micro-organismes vivants qui favorisent le développement des bonnes bactéries et ainsi restaurent l'équilibre de la flore intestinale, garante d'un système de défenses immunitaires performant.</p>
<p>Ils proviennent de 5 souches différentes : Lactococcu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401547894966</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4386537e4a6efaca90eaa24a56accf219c64ba0b0f3a77cf122831501c89c3bf ]]></g:image_link>
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
<title><![CDATA[ Codifra Actymine 30 gélules ]]></title>
<g:id>53cf02f1-3bae-4405-9e2f-93222d64ddde</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-actymine 30 gélules?53cf02f1-3bae-4405-9e2f-93222d64ddde ]]></link>
<g:price><![CDATA[ 1820.00 EUR ]]></g:price>
<description><![CDATA[ <p>Complément alimentaire antioxydant peau oméga 6.</p>
<p>ACTYMINE participe à la lutte contre le vieillissement accéléré de la peau en favorisant l’hydratation cutanée et l’élimination des Radicaux libres en excès.</p>
<p>Recommandé en préparation à l’exposition solaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401573920783</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d2c4087d5f3d0cc74ab2f99d462fc99f338f09f5ba1541e177d358e2debde99 ]]></g:image_link>
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
<title><![CDATA[ Codifra Expuryl 60 gélules ]]></title>
<g:id>06e39e21-a1d1-4065-bcb8-bda97d32ae4c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-expuryl 60 gélules?06e39e21-a1d1-4065-bcb8-bda97d32ae4c ]]></link>
<g:price><![CDATA[ 1585.00 EUR ]]></g:price>
<description><![CDATA[ <p><span class="couleur_produit"><span>Notre phytodraineur</span></span><span> Expuryl </span><span> </span>associe des plantes et du chrome à la fois sous forme de gélules d’origine végétale ou liquide en 300 ou 500 ml au goût agréable et naturel de cassis. Ainsi, les complexes apportent de l’artichaut, qui participe au <span>confort intestinal et facilite la digestion</span>. De plus, le curcuma, pissenlit et l’artichaut contribuent au <span>maintien d’une fonction hépatique normale</span>. Le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401578487625</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9f1f305adc6ce5abb7604d9018153c56e0615385c1d6958692448ff34cbfb03a ]]></g:image_link>
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
<title><![CDATA[ Codifra Expuryl digestion problème digestif draineur minceur 500ml ]]></title>
<g:id>6db99a42-40e6-4e06-b291-e78e0db5fd62</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-expuryl digestion problème digestif draineur minceur 500ml?6db99a42-40e6-4e06-b291-e78e0db5fd62 ]]></link>
<g:price><![CDATA[ 1750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span class="couleur_produit"><span>Notre phytodraineur</span></span><span> Expuryl </span><span> </span>associe des plantes et du chrome à la fois sous forme de gélules d’origine végétale ou liquide en 300 ou 500 ml au goût agréable et naturel de cassis. Ainsi, les complexes apportent de l’artichaut, qui participe au <span>confort intestinal et facilite la digestion</span>. De plus, le curcuma, pissenlit et l’artichaut contribuent au <span>maintien d’une fonction hépatique normale</span>. Le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401543480941</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a72aad700f082cffcc5b54f3ca3f2ad0dc2298c53ab0aa679ecf294db1c72b6c ]]></g:image_link>
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
<title><![CDATA[ Codifra Gynofenol 30 gélules ]]></title>
<g:id>cfa518d9-3ebd-444e-abb0-3e8f8e8cb6f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-gynofenol 30 gélules?cfa518d9-3ebd-444e-abb0-3e8f8e8cb6f9 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>CODIFRA GYNOFENOL. Complément alimentaire destiné à atténuer les effets liés à la ménopause à base de Houblon et Vitamines B6/B9/B12.</p>
<p>Le houblon aide à diminuer les signes associés à la ménopause tels que les bouffées de chaleur et sueurs nocturnes.</p>
<p>La vitamine B6 contribue à réguler l'activité hormonale.</p>
<p>Les vitamines B6, B9 et B12 contribuent au métabolisme normal de l'homocysteïne et à des fonctions psychologiques normales.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401541368487</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/56f5d43a9af93fde14c7621ebb3dac2ff8f0d61c9fe5c25ef2fe9a43f03d22d0 ]]></g:image_link>
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
<title><![CDATA[ Codifra Normafilus Ferments Microbiotiques x28 ]]></title>
<g:id>bf596622-1da9-4a02-a60a-b05fe7a1b41d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-normafilus ferments microbiotiques x28?bf596622-1da9-4a02-a60a-b05fe7a1b41d ]]></link>
<g:price><![CDATA[ 1275.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span><span class="couleur_produit">NORMAFILUS</span> </span></span>apporte dans une gélule d’origine végétale <span>2 souches de ferments microbiotiques.</span></p>
<p>2 gélules/jour apportent<span> 10 milliards de souches de ferments microbiotiques</span>.</p>
<p> </p>
<h3>Quand prendre <span class="couleur_produit">NORMAFILUS</span> ?</h3>
<ul><li>En cas de stress psychique et/ou physique entraînant une sensibilité intestinale</li>
<li>En cas d’intolérance aux fibres alimentaires ins ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401596550332</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c871ad60db165509e6a15bf17c337480d597b04f23bc79b8289c487c368d2d0 ]]></g:image_link>
<g:product_type><![CDATA[ Médicament > COMPLEMENTS ALIMENTAIRES > Appareil digestif ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Codifra Normalite 1000 30 gélules ]]></title>
<g:id>ecaf6908-255c-4a9a-b14d-68f9b39b8e7a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-normalite 1000 30 gélules?ecaf6908-255c-4a9a-b14d-68f9b39b8e7a ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le ginseng, l'apport en oligo-éléments et les vitamines permettent à Codifra Normalite 1000 d'agir de façon rapide et durable contre la fatigue, physique, psychique et sexuelle. De plus il contribue à votre bien être au quotidien.</p>
<p>Codifra Normalite 1000 a une triple action :</p>
<p>- Fatigue : fonctionnelle d’origine physique, psychique et sexuelle, après intervention chirurgicale et après accouchement, liée à un excès de stress,</p>
<p>- Amélioration de la résistance physique et intel ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401573919725</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8cbabcf578c902b4343a10a610d3d342bda0452e8ab3f3ceb18328ffc15ec3b2 ]]></g:image_link>
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
<title><![CDATA[ Codifra Normalite Omega 3 30 Capsules ]]></title>
<g:id>ea551127-6c46-427a-8e7f-8271bed0abdf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-normalite omega 3 30 capsules?ea551127-6c46-427a-8e7f-8271bed0abdf ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les capsules CODIFRA NORMALITE OMEGA 3 contiennent une formule unique et puissante, composée d'huile de micro-algue renouvelable riche en acides gras Oméga 3 (EPA/DHA). Ces acides gras sont essentiels pour le bon fonctionnement de notre organisme : L'EPA et le DHA s'associent pour participer au fonctionnement normal du cœur ; le DHA participe au maintien d'une fonction cardiaque et une vision normales. En prenant régulièrement ces capsules, vous pourrez bénéficier des résultats efficace ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664524000839</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5da032099d83a269e75985c56cd49da0c7f420dcf6e7625bda5a198ada3d18b3 ]]></g:image_link>
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
<title><![CDATA[ Codifra Osprotect 60 Gélules ]]></title>
<g:id>6aa8ad43-5eb4-4066-8a66-cd023533be10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-osprotect 60 gélules?6aa8ad43-5eb4-4066-8a66-cd023533be10 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>OSPROTECT se compose de calcium, magnésium, vitamines D et K, qui contribuent au maintien d’une ossature normale. De plus, la silice, apportée par le bambou, participe à la constitution osseuse et enfin le sélénium aide à protéger les cellules contre le stress oxydatif.</p>
<p>Quand prendre OSPROTECT ?<br />Chez toute personne souhaitant protéger son capital osseux en favorisant la formation osseuse par l’apport notamment de Calcium – Vitamine D3 – Vitamine K et Magnésium et en particulier :< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664524000068</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/412157405efaf897d74a6d418699de34a4d72273c3a94091011c28b82dc7906a ]]></g:image_link>
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
<title><![CDATA[ Codifra Permaflore 30 gélules ]]></title>
<g:id>824d6529-d464-4ea9-a99b-77c49ea3855d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-permaflore 30 gélules?824d6529-d464-4ea9-a99b-77c49ea3855d ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p><span class="couleur_produit"><span>ERMAFLORE </span></span>apporte des vitamines B2, B3 et B8 qui contribuent <span>au maintien de muqueuses normales</span>, notamment la muqueuse intestinale. La formule se composé également de vitamine D qui contribue au <span>fonctionnement normal du système immunitaire </span>et de la vitamine E qui participe à <span>protéger les cellules contre le stress oxydatif.</span></p>
<p> </p>
<h3>Quand prendre <span class="couleur_produit">PERMAFLORE</span> ?</h3 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560290332</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac56107f800f75d1815026a6aac1a9a8ddf3f990fead8d2eb1ef4259543a270e ]]></g:image_link>
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
<title><![CDATA[ Codifra Reflustress 30 gélules ]]></title>
<g:id>c2c5884a-edcc-4480-8378-64d9c1743c21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-reflustress 30 gélules?c2c5884a-edcc-4480-8378-64d9c1743c21 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span><span><span>Reflustress complément alimentaire </span></span>des Laboratoires Codifra</span>,</span> combinaison de 2 extraits de plantes qui permettent d’assurer une double action digestive + psychique afin d’apaiser le système digestif.</p>
<p><span>Figuier de Barbarie &amp; Feuille d’olivier. De plus, la présence de Lactobacillus paracasei Lpc-37®, de calcium et de vitamine B12 permet d’assurer</span><span> une double action digestive + psychique </span><span>afin d’apaiser le  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664524000709</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c41cc9a4c82826646b6f14a488b066ffa1a44018cdc2413f1af50b02b0f3e4b7 ]]></g:image_link>
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
<title><![CDATA[ Codifra Safralite 15mg 28 gélules ]]></title>
<g:id>11ed4662-fb91-4096-9572-6ca56717bb32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/codifra-safralite 15mg 28 gélules?11ed4662-fb91-4096-9572-6ca56717bb32 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Améliorer l’humeur et retrouver optimisme et sérénité tout spécialement chez les : Sujets soumis à un stress chronique Personnes âgées présentant une altération chronique de l’humeur Adolescents et jeunes adultes.</p>
<p>Safralite® améliore l’humeur en augmentant la concentration en sérotonine cérébrale à 2 niveaux : </p>
<p>Safran : Safralite® inhibe la recapture de la sérotonine, hormone impliquée dans la régulation de l’humeur mais également de l’appétit et du sommeil grâce au safranal et  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548927397</g:gtin>
<g:brand><![CDATA[ CODIFRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dd81c646199c7dcbd7feafa8aea7d6f5cd72ef5de3afd49ea61b9a37fc0cdd12 ]]></g:image_link>
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
<title><![CDATA[ Cognistim Presciption Nature 30 Gélules ]]></title>
<g:id>a71646c9-7d5d-45a9-900f-d46c331f5a30</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cognistim-presciption nature 30 gélules?a71646c9-7d5d-45a9-900f-d46c331f5a30 ]]></link>
<g:price><![CDATA[ 1340.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>COGNISTIM </span>est un complément alimentaire à base de deux actifs brevetés (<span>Cognique®, </span>Rhodiolife®) et des extraits de plantes. Il <span>supporte la mémoire et l'apprentissage</span>.</p>
<ul><li>Contribue à stimuler l’activité intellectuelle et à renforcer la mémoire¹</li>
<li>Améliore la résistance de l’organisme contre le stress²</li>
<li>Prévient le déclin de la mémoire et préserve les fonctions cognitives³<br /><br />¹ Petite pervanche<br />² Bacopa<br />³ Ginkgo</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770002638231</g:gtin>
<g:brand><![CDATA[ PRESCRIPTION NATURE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03a049c5b22285b58e6a8998c236a30c8b15bffeb8b0df9f84381d8805f04d5b ]]></g:image_link>
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
<title><![CDATA[ Colgate Brosse à Dents à Piles Barbie ]]></title>
<g:id>40cfc07f-e0cd-4701-80f9-a481979ec3a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/colgate-brosse à dents à piles barbie?40cfc07f-e0cd-4701-80f9-a481979ec3a1 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hygiène bucco-dentaire des enfants. Extra-souple. Cette brosse à dents nettoie mieux les dents qu'une brosse à dents manuelle ordinaire et rend le brossage plus marrant. Elle possède une petite tête rotative avec des poils extra souples, pour nettoyer les dents et éliminer la plaque dentaire en douceur. Un bouton Marche/Arrêt faciles. 2 piles alcalines AAA remplaçables incluses. Dotée d'un manche plus fin. Cette brosse à dents tient à plat pour faciliter l'application du dentifrice. Ne pas ut ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8714789988726</g:gtin>
<g:brand><![CDATA[ COLGATE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73c981be50631badd09ee99bbe0d0a370221bb423da0e18193fdd3f6291569c1 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Colgate brosse à dents électrique Batman ]]></title>
<g:id>b5fe8cf1-2c6f-4aa7-a036-d4a79a576a6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/colgate-brosse à dents électrique batman?b5fe8cf1-2c6f-4aa7-a036-d4a79a576a6e ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <div class="col-lg-8 col-md-9 col-sm-12 col-xs-12"><strong>Colgate</strong>, le grand spécialiste dans le domaine de l’hygiène bucco-dentaire, a imaginé une <strong>brosse à dents électrique pour les enfants</strong> reprenant l’effigie de l’un de leurs héros préférés, Batman, le justicier de Gotham. Fonctionnant à piles, elle est équipée d’une tête ronde oscillante qui accompagne le mouvement de va-et-vient et facilite l’élimination des résidus alimentaires et de la plaque dentaire à la fois et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8718951249608</g:gtin>
<g:brand><![CDATA[ COLGATE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb7cc00dfe1795d41a6350576b587824a5305e85728e23ed5296e516f4a986b1 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Collugomme Maux de Gorge 30 Gommes ]]></title>
<g:id>62ecb493-96e6-4070-adf8-976ed6f4f8bc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/collugomme-maux de gorge 30 gommes?62ecb493-96e6-4070-adf8-976ed6f4f8bc ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Lorsque vos gorges sont irritées, <b>Collugomme Maux de Gorge</b> est là pour vous offrir un soulagement naturel. Découvrez comment cette gomme à sucer sans sucres, enrichie en huiles essentielles d'eucalyptus et de menthe poivrée, <a href="https://www.soin-et-nature.com/fr/19004-citrotonic-defenses-immunitaires-epp-propolis-gelules.html" target="_blank">peut apaiser vos gorges</a> et <a href="https://www.soin-et-nature.com/fr/127-serenite-bien-etre" target="_blank">améliorer votre bien-être< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810005093</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d16a87c6606740d632819e74ac431584f3f5cca541f0c4090c48a486d89e17db ]]></g:image_link>
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
<title><![CDATA[ Colon Pure Purifiant Intestinal 40 Gélules ]]></title>
<g:id>408c3863-b0d8-4262-b1c1-e122c1e258fa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/colon-pure purifiant intestinal 40 gélules?408c3863-b0d8-4262-b1c1-e122c1e258fa ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nutreov Colon Pure Purifiant Intestinal 40 Gélules est un complément alimentaire à base de 9 actifs d'origine naturelle et de 4 huiles essentielles, conçu pour la purification et la détoxification, le confort digestif et du transit intestinal, le maintien des fonctions normales du côlon.</p>
<p>Sa formule purifiante et détox exclusive permet de retrouver un équilibre intestinal et un bien-être général :</p>
<p>- la Chlorella agit à 3 niveaux : détoxification et élimination des toxines, mainti ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640168731014</g:gtin>
<g:brand><![CDATA[ NOREVA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/433aa4cc38b70ea5b7dfab3cd4eeb93722200d4308d7accd52ef39e5dc9ed98f ]]></g:image_link>
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
<title><![CDATA[ Colpofix Gel vaginal en spray 20 ml + 10 applicateurs ]]></title>
<g:id>ac7c51dd-561a-4c18-85e3-69a0e2ea190f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/colpofix-gel vaginal en spray 20 ml + 10 applicateurs?ac7c51dd-561a-4c18-85e3-69a0e2ea190f ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce dispositif médical constitue un traitement utile au maintien des conditions physiologiques de la zone de transformation cervicovaginale en cas d'altérations dues au HPV (<i>Human Papillomavirus</i>).</p>
<p>Le gel vaginal Colpofix est pulvérisé en fines gouttelettes pour atteindre facilement et tapisser uniformément la muqueuse cervicovaginale. Ses propriétés mucoadhésives évitent l'écoulement. Grâce à son mode d'administration en spray et à sa capacité d'adhésion, Colpofix forme une pelli ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700399101575</g:gtin>
<g:brand><![CDATA[ IPRAD SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/543bd145db41a15c8aa0857038497c50c88f3fa24d842afe65cdde8dea5e03de ]]></g:image_link>
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
<title><![CDATA[ Compeed Ampoule au Talon 5 Pansements ]]></title>
<g:id>03387867-781f-41a4-a9a6-236a85acdf23</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-ampoule au talon 5 pansements?03387867-781f-41a4-a9a6-236a85acdf23 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Compeed Ampoule au Talon a été développé en partenariat avec Jordi Labanda, illustrateur de mode, pour donner une touche de féminité et de glamour à ces pansements. Il soulage instantanément et apporte une protection renforcée contre les frottements grâce à un effet coussinet.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574661047720</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3106f8d07e1289e8ba4e262fce126bdc4bd120adacfbc809c5d85ac16969031 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Ampoules Moyen Format 5 Pansements ]]></title>
<g:id>2f7593ea-4ac9-4d10-af8d-8ea731fc323a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-ampoules moyen format 5 pansements?2f7593ea-4ac9-4d10-af8d-8ea731fc323a ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécifiquement conçu pour le traitement des ampoules au talon, il agit comme une seconde peau pour :</p>
<p>- Soulager la douleur instantanément.</p>
<p>- Eviter les frottements grâce à un effet coussinet.</p>
<p>- Prévenir les infections : imperméable à l'eau, aux bactéries et aux impuretés.</p>
<p>- Accélérer la cicatrisation : adhérence parfaite durant plusieurs jours.</p>
<p>Il peut aussi être utilisé dès les premiers signes de frottements pour prévenir l'apparition d'une ampoule.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660115420</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/43f7b20c4babae5915ea170ba2c758597bcdd396ec1e4c49eddebf6a193d95ee ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Ampoules Petit Format 6 Pansements ]]></title>
<g:id>5aa9d110-4929-4cad-945a-0670e8575a70</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-ampoules petit format 6 pansements?5aa9d110-4929-4cad-945a-0670e8575a70 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécifiquement conçu pour le traitement des ampoules de petite taille ou situées sur le côté du pied, il agit comme une seconde peau pour :</p>
<p>- Soulager la douleur instantanément.</p>
<p>- Eviter les frottements grâce à un effet coussinet.</p>
<p>- Prévenir les infections : imperméable à l'eau, aux bactéries et aux impuretés.</p>
<p>- Accélérer la cicatrisation : adhérence parfaite durant plusieurs jours.</p>
<p>Il peut aussi être utilisé dès les premiers signes de frottements pour préve ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660115390</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db2aea138174f0cce6d998878937c36bb8d253f313ca46cbb6e01eec6f9404c6 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Ampoules Plante du Pied 5 Pansements ]]></title>
<g:id>27700618-699a-416a-bb5d-61408963d8ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-ampoules plante du pied 5 pansements?27700618-699a-416a-bb5d-61408963d8ee ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Il a été spécifiquement conçu pour le traitement des ampoules situées sur la plante du pied, plus épais au centre pour un meilleur soulagement et plus flexible pour un plus grand confort.</p>
<p>Il agit comme une seconde peau pour :</p>
<p>- Soulager la douleur instantanément.</p>
<p>- Eviter les frottements grâce à un effet coussinet.</p>
<p>- Prévenir les infections : imperméable à l'eau, aux bactéries et aux impuretés.</p>
<p>- Accélérer la cicatrisation : adhérence parfaite durant plusieu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660559859</g:gtin>
<g:brand><![CDATA[ J&J SANTE BEAUTE France ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/180873f82c53378fe997ca62f577bd4a5c4cdda5c6467dce7a520f9936df708f ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Assortiment pansements ampoules x 5 ]]></title>
<g:id>f72255f1-ad6d-4673-bb77-fd8ebab494e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-assortiment pansements ampoules x 5?f72255f1-ad6d-4673-bb77-fd8ebab494e7 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pansements Ampoules Assortiments 5 Pansements de Compeed sont des pansements qui soulage la douleur instantanément et protège des frottements. Cet assortiment est composé de :</p>
<ul><li>2 pansements Moyen Format pour le talon</li>
<li>2 pansements Petit Format pour le côté du pied</li>
<li>1 pansement Orteils</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660720242</g:gtin>
<g:brand><![CDATA[ JOHNSON & JOHNSON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0bba0c16b2e05b25b509b19402c499770ee6e5cd39ecb8047289e24e3cfa9222 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Cors Pansement Moyen Format 10 Pansements ]]></title>
<g:id>9cb9df6c-c9eb-4ac6-acbe-12aab3d1403a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-cors pansement moyen format 10 pansements?9cb9df6c-c9eb-4ac6-acbe-12aab3d1403a ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Il peut être utilisé sur un cor déjà formé.</p>
<p>Il agit alors comme une seconde peau pour préserver l’hydratation naturelle de la peau et pour aider à : </p>
<p>- Protéger contre les frottements et la pression des chaussures par un effet coussinet.</p>
<p>- Soulager immédiatement la douleur.</p>
<p>- Hydrater et ramollir le cor, pour aider à l’éliminer.</p>
<p>Reste en place plus de 24 heures.</p>
<p>Il peut aussi être utilisé en prévention, notamment avec des chaussures serrées pour aider ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660115451</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c4de3a7f7d5f49b3c7827c9fd647311ad7bae7b6f1a35d4cd4d5799a13f0230 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements &OEligil-de-Perdrix x 10 ]]></title>
<g:id>120bfdfe-8b6c-401b-937c-66484674675a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements &oeligil-de-perdrix x 10?120bfdfe-8b6c-401b-937c-66484674675a ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Il peut être utilisé sur un œil-de-perdrix déjà formé.</p>
<p>Il agit alors comme une seconde peau pour préserver l’hydratation naturelle de la peau et pour aider à : </p>
<p>- Protéger contre les frottements et la pression des chaussures par un effet coussinet.</p>
<p>- Soulager immédiatement la douleu.</p>
<p>- Hydrater et ramollir l’œil-de-perdrix, pour aider à l’éliminer.</p>
<p>Reste en place plus de 24 heures.</p>
<p>Il peut aussi être utilisé en prévention, notamment avec des chaussure ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5708932019385</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1eaa326ac00747af0b1c837a3af0ff95038a9a45880c46ca8b6e4340035a06d1 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Ampoules Extrême Pour le talon x 5 ]]></title>
<g:id>9144a22f-68be-48d8-9a98-2f3430b19d5a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements ampoules extrême pour le talon x 5?9144a22f-68be-48d8-9a98-2f3430b19d5a ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une ampoule est la réponse du corps aux frictions, la façon dont le corps protège les tissus plus profonds.</p>
<p>Le Pansement Ampoules Extrêmes de Compeed? est conçut pour procurer un maximum de confort et éliminer l'ampoule grâce à sa technologie hydrocolloïde.</p>
<p>Le Pansement Ampoules Extrêmes de Compeed hydrate l'ampoule et la ramollit jusqu'à sa disparition totale.</p>
<p>Le Pansement Ampoules Extrêmes de Compeed permet aussi l'élimination de la peau morte ce qui accélère ainsi le p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660634297</g:gtin>
<g:brand><![CDATA[ J&J SANTE BEAUTE France ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9de66d287104c8e16eb7afe68a92fb40ba2dbc9321757cac905f75fbc37fc0d ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Ampoules Moyen Format 3 Tailles 10 Pansements ]]></title>
<g:id>ff509b6f-f798-4c66-bd6f-c69dd733e223</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements ampoules moyen format 3 tailles 10 pansements?ff509b6f-f798-4c66-bd6f-c69dd733e223 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Compeed Pansements Ampoules Moyen Format 3 Tailles 10 Pansements sont des pansements avec une technologie de gel hydrocolloïde pour un soulagement instantané de la douleur et une cicatrisation rapide.</p>
<p>L'effet coussinet permet de soulager la pression et protéger des frottements douloureux.<br />Avec ses bords biseautés ultra-adhésifs, le pansement s'adapte aux mouvements et reste en place pendant plusieurs jours.<br />Les bords sont translucides pour se fondre avec la peau.</p>
<p>Résis ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3663555004960</g:gtin>
<g:brand><![CDATA[ COMPEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab9c7b1bff4e715457dd2e6adb50731c9c658e9067007f9609a3fdff56d25af3 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Ampoules Moyen Format Extrême 10 Pansements ]]></title>
<g:id>1d297fad-216d-4265-afca-b66063251395</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements ampoules moyen format extrême 10 pansements?1d297fad-216d-4265-afca-b66063251395 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Compeed Pansements Ampoules Moyen Format Extrême 10 Pansements sont des pansements avec une technologie de gel hydrocolloïde pour un soulagement instantané de la douleur et une cicatrisation rapide.</p>
<p>La structure en nid d'abeille offre 20% d'épaisseur en plus par rapport aux pansements ampoules Compeed moyen format.<br />Avec ses bords biseautés ultra-adhésifs, le pansement s'adapte aux mouvements et reste en place pendant plusieurs jours.<br />Les bords sont translucides pour se fondre ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3663555004939</g:gtin>
<g:brand><![CDATA[ COMPEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db478cf36355c089157c9437c2b811474101a36399a9ca2be407aa05183b2023 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Ampoules aux Orteils x 8 ]]></title>
<g:id>2e0f6151-a32f-46a5-aa76-a71b9138324d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements ampoules aux orteils x 8?2e0f6151-a32f-46a5-aa76-a71b9138324d ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécifiquement conçu pour le traitement des ampoules situées sur les orteils, il agit comme une seconde peau pour :</p>
<p>- Soulager la douleur instantanément.</p>
<p>- Eviter les frottements grâce à un effet coussinet.</p>
<p>- Prévenir les infections : imperméable à l'eau, aux bactéries et aux impuretés.</p>
<p>- Accélérer la cicatrisation : adhérence parfaite durant plusieurs jours.</p>
<p>Il a été spécifiquement conçu pour envelopper l’orteil.</p>
<p>Il peut aussi être utilisé dès les pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660129168</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3a50adafff1d25df7455c53aac959d145577a6021fd1bfdd80bc905c9f50446 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Cors Hydratant sur les orteils x 6 ]]></title>
<g:id>9d4a3922-433a-487c-90b6-0dea0a562673</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements cors hydratant sur les orteils x 6?9d4a3922-433a-487c-90b6-0dea0a562673 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour répondre aux besoins de protection et d'hydratation, il allie les avantages de la crème et du pansement :</p>
<p>- Action en douceur pour aider à stopper le développement des cors naissants.</p>
<p>- Hydratation ciblée et continue grâce à la pastille ultra-hydratante.</p>
<p>- Soulage la douleur instantanément grâce à l'effet coussinet.</p>
<p>- Protège contre les frottements.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660696318</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e675b16f64f77403c874436cbbd8975092a373b43ac1edfbfe2fea67b606c21d ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Durillons x 6 ]]></title>
<g:id>b22ec477-3bdd-406f-a187-ff53ef071c18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements durillons x 6?b22ec477-3bdd-406f-a187-ff53ef071c18 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Il peut être utilisé sur un durillon déjà formé.</p>
<p>Il agit alors comme une seconde peau pour préserver l’hydratation naturelle de la peau et pour aider à : </p>
<p>- Protéger contre les frottements et la pression des chaussures par un effet coussinet.</p>
<p>- Soulager immédiatement la douleur.</p>
<p>- Hydrater et ramollir le durillon, pour aider à l’éliminer.</p>
<p>Reste en place plus de 24 heures.</p>
<p>Il peut aussi être utilisé en prévention, notamment avec des chaussures serrées, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3574660115482</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba1acd280412d4243aa068d33aaaa7e6bc015929a3efb426350d632c95e794d5 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Pansements Oignons x 5 ]]></title>
<g:id>8da43936-62f0-4bcb-83d5-beaca555b314</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-pansements oignons x 5?8da43936-62f0-4bcb-83d5-beaca555b314 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Il agit  comme une seconde peau pour préserver l’hydratation naturelle de la peau et pour aider à : </p>
<p>- Soulager immédiatement la douleur et la pression.</p>
<p>- Protéger l’oignon des frottements grâce à un effet coussinet.</p>
<p>- Prévenir la formation d’ampoule et de corne.</p>
<p>Reste en place plusieurs jours.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5708932019422</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e965094be2af43e462cc3a954fe1678f58c623d7cd560fe9e17542f8ae3cf031 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed Patch Anti Imperfections Discrets x15 ]]></title>
<g:id>3b43a961-65b8-4a22-9194-aeae82ad0e8d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-patch anti imperfections discrets x15?3b43a961-65b8-4a22-9194-aeae82ad0e8d ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3663555005370</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6672943afb1f8095f6d2262f2ee137a409a95a20938bf60c426d5134c28a2d18 ]]></g:image_link>
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
<title><![CDATA[ Compeed ampoules format moyen 10 pansements ]]></title>
<g:id>64593518-664b-4e52-a549-a475f5983af3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-ampoules format moyen 10 pansements?64593518-664b-4e52-a549-a475f5983af3 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p class="product-hero__desc">Les pansements Compeed<span>®</span> Ampoules Moyen Format absorbent l'excédent de liquide et forment un coussin protecteur, procurant un soulagement instantané de la douleur et des conditions optimales de guérison des ampoules du pied. Disponible en différents conditionnements.</p>
<div class="product-hero__info">
<div class="product-hero__info__img">
<p>Tous nos pansements pour ampoules Compeed<span>®</span> sont dotés de la technologie hydrocolloïde, actif avec d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3663555004991</g:gtin>
<g:brand><![CDATA[ COMPEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/caa7d411a6daf79e218fd93b3c18dee0896c207b4dd22264ec40bc0d8caa48ec ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Compeed anti ampoule stick ]]></title>
<g:id>6b09f77d-8107-49d4-9e55-d5f58d5b6557</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/compeed-anti ampoule stick?6b09f77d-8107-49d4-9e55-d5f58d5b6557 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce <strong>stick invisible de Compeed</strong> s’applique sur les pieds pour limiter l’apparition des <strong>ampoules</strong> et des irritations, de manière générale.<br /><br />L’ampoule est une petite bulle de liquide causée par des frottements et un échauffement de la peau. Elle se forme, le plus souvent, au niveau des pieds, régions du corps les plus exposées aux frottements, suite à une marche intensive, des chaussures non adaptées ou une déformation physiologique, comme un <strong>hal ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3663555002256</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f5cfdd01c5778c39cfcd2242267a2b05fa03763873ccab8d73891c15de12b56 ]]></g:image_link>
<g:product_type><![CDATA[ PANSEMENTS ET PREMIERS SOINS > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Comptoir du Bain Huile de douche Jasmin précieux 1 L ]]></title>
<g:id>e6cad2c1-fb04-4980-b020-a3e1693288a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/comptoir-du bain huile de douche jasmin précieux 1 l?e6cad2c1-fb04-4980-b020-a3e1693288a5 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'<span>huile de douche parfumée</span> de la marque<span> Le Comptoir du Bain</span> est un produit d'hygiène qui permet de <span>nettoyer en douceur</span> la peau du corps. Elle convient à toutes les peaux, même sensibles, et offre une grande sensorialité.</p>
<p>Très respectueuse de tous les types de peau, cette <span>huile de douche</span> nettoie la peau sans altérer la barrière cutanée. Sa douceur est assurée par sa base lavante enrichie en glycérine, un actif reconnu pour ses propriét ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3616828842776</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/568ec2ef8d5399074a1b6de46db3a41417e084403cbdbfb48a37e4ba2d0218e2 ]]></g:image_link>
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
<title><![CDATA[ Condensé Crème régénérante anti-âge 50ml ]]></title>
<g:id>0dc31724-cc78-4086-9185-d31b280ebbe1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/condens-crème régénérante anti-âge 50ml?0dc31724-cc78-4086-9185-d31b280ebbe1 ]]></link>
<g:price><![CDATA[ 6490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L’extrait de Fleur de Trèfle Rouge réactive le métabolisme cutané et redensifie la peau, tout en atténuant significativement la profondeur des rides. L’extrait de Fleur de Lupin, quant à lui, lisse le micro relief et redonne de l’éclat, en favorisant l’oxygénation de votre peau. L’huile de Rosier Muscat, régénère, hydrate pour une peau plus souple. Des effets apaisants et photo-protecteur permettent également de protéger votre peau des agressions extérieures, grâce à l’action de l’extra ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700561700063</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1349765e5be1686e5cbc83f8c05089ff42607f866b6ca5260ec3640c9c634137 ]]></g:image_link>
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
<title><![CDATA[ Confiance mobile absorption 10 slip taille L x14 ]]></title>
<g:id>0aa33684-4afb-4971-9ca5-192ea8f456a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/confiance-mobile absorption 10 slip taille l x14?0aa33684-4afb-4971-9ca5-192ea8f456a1 ]]></link>
<g:price><![CDATA[ 2550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sous-vêtement absorbant avec triple coussin absorbant « Dry Plus » assurant une diffusion très rapide de l’urine pour un effet garde au sec immédiat et une neutralisation des odeurs.<br />Les barrières anti-fuites hydrophobes et intégrales assurent une sécurité maximale.<br />Le voile externe en nontissé ultra doux et souple au toucher textile est imperméable et micro respirant. La ceinture élastiquée assure un maintien parfait pour plus de confort.<br />Confiance® Mobile se met et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4052199277240</g:gtin>
<g:brand><![CDATA[ HARTMANN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/313216ee87bbd725ef6f75246c8d6e9ce21aa8d9b0e92ed0fc7d2ba0e5acaab9 ]]></g:image_link>
<g:product_type><![CDATA[ INCONTINENCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Confiance mobile absorption 10 slip taille M x14 ]]></title>
<g:id>0e8a6e2f-318c-4791-aeef-1fc79a6a4e2a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/confiance-mobile absorption 10 slip taille m x14?0e8a6e2f-318c-4791-aeef-1fc79a6a4e2a ]]></link>
<g:price><![CDATA[ 2268.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sous-vêtement absorbant avec triple coussin absorbant « Dry Plus » assurant une diffusion très rapide de l’urine pour un effet garde au sec immédiat et une neutralisation des odeurs.<br />Les barrières anti-fuites hydrophobes et intégrales assurent une sécurité maximale.<br />Le voile externe en nontissé ultra doux et souple au toucher textile est imperméable et micro respirant. La ceinture élastiquée assure un maintien parfait pour plus de confort.<br />Confiance® Mobile se met et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4052199277196</g:gtin>
<g:brand><![CDATA[ HARTMANN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/313216ee87bbd725ef6f75246c8d6e9ce21aa8d9b0e92ed0fc7d2ba0e5acaab9 ]]></g:image_link>
<g:product_type><![CDATA[ INCONTINENCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Confiance mobile absorption 10 slip taille XL x14 ]]></title>
<g:id>4e5cf590-e918-4e7e-b796-0dd38b1ad314</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/confiance-mobile absorption 10 slip taille xl x14?4e5cf590-e918-4e7e-b796-0dd38b1ad314 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sous-vêtement absorbant avec triple coussin absorbant « Dry Plus » assurant une diffusion très rapide de l’urine pour un effet garde au sec immédiat et une neutralisation des odeurs.<br />Les barrières anti-fuites hydrophobes et intégrales assurent une sécurité maximale.<br />Le voile externe en nontissé ultra doux et souple au toucher textile est imperméable et micro respirant. La ceinture élastiquée assure un maintien parfait pour plus de confort.<br />Confiance® Mobile se met et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4052199277271</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/313216ee87bbd725ef6f75246c8d6e9ce21aa8d9b0e92ed0fc7d2ba0e5acaab9 ]]></g:image_link>
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
<title><![CDATA[ Confiance mobile absorption 6 slip taille M x14  ]]></title>
<g:id>e71d69d6-4972-4479-b5a9-a80bde3aa4ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/confiance-mobile absorption 6 slip taille m x14 ?e71d69d6-4972-4479-b5a9-a80bde3aa4ae ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sous-vêtement absorbant avec triple coussin absorbant « Dry Plus » assurant une diffusion très rapide de l’urine pour un effet garde au sec immédiat et une neutralisation des odeurs.<br />Les barrières anti-fuites hydrophobes et intégrales assurent une sécurité maximale.<br />Le voile externe en nontissé ultra doux et souple au toucher textile est imperméable et micro respirant. La ceinture élastiquée assure un maintien parfait pour plus de confort.<br />Confiance® Mobile se met et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4052199210018</g:gtin>
<g:brand><![CDATA[ HARTMANN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f461da8c3ad2380946a306137138a12acbe0d9300556fd6285dc049f9b4891ef ]]></g:image_link>
<g:product_type><![CDATA[ INCONTINENCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Confiance mobile absorption 8 slip taille L x14 ]]></title>
<g:id>2ab5e842-e7be-4608-87f3-e973cb305172</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/confiance-mobile absorption 8 slip taille l x14?2ab5e842-e7be-4608-87f3-e973cb305172 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sous-vêtement absorbant avec triple coussin absorbant « Dry Plus » assurant une diffusion très rapide de l’urine pour un effet garde au sec immédiat et une neutralisation des odeurs.<br />Les barrières anti-fuites hydrophobes et intégrales assurent une sécurité maximale.<br />Le voile externe en nontissé ultra doux et souple au toucher textile est imperméable et micro respirant. La ceinture élastiquée assure un maintien parfait pour plus de confort.<br />Confiance® Mobile se met et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4052199210124</g:gtin>
<g:brand><![CDATA[ HARTMANN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7b9e8eace88f6ef81a249ecd6776a0abd7896484528067c3406f3b09ca38d9e ]]></g:image_link>
<g:product_type><![CDATA[ INCONTINENCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Contapharm eye care crayon intense liner brun 1.3g ]]></title>
<g:id>57899a53-6a48-4688-8243-9e57b60e41e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/contapharm-eye care crayon intense liner brun 1.3g?57899a53-6a48-4688-8243-9e57b60e41e6 ]]></link>
<g:price><![CDATA[ 1080.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce crayon souligne le regard et lui donne une intensité inégalée.</p>
<p>Formule waterproof pour une tenue longue durée. Une formule ultra-crémeuse qui glisse sur la paupières et s’applique en douceur et ne bouge pas une fois appliquée.</p>
<p>Sa formule haute tolérance, est idéale pour le maquillage des yeux sensibles, allergiques ou porteurs de lentilles.</p>
<p><strong>Couleur intense</strong><br /><strong>Application précise </strong><br /><strong>Longue tenue</strong><br /><strong>Haute  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007303</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2479c2d52699cbe2143b80831a81bdbc74c6f9ab0946cbd0cfe85f0291d0d97f ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Contapharm eye care crayon intense liner noir 1.3g ]]></title>
<g:id>0f6418ae-16fe-48dc-ad13-8f0c7eaeafdc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/contapharm-eye care crayon intense liner noir 1.3g?0f6418ae-16fe-48dc-ad13-8f0c7eaeafdc ]]></link>
<g:price><![CDATA[ 1080.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce crayon souligne le regard et lui donne une intensité inégalée.</p>
<p>Formule waterproof pour une tenue longue durée. Une formule ultra-crémeuse qui glisse sur la paupières et s’applique en douceur et ne bouge pas une fois appliquée.</p>
<p>Sa formule haute tolérance, est idéale pour le maquillage des yeux sensibles, allergiques ou porteurs de lentilles.</p>
<p><strong>Couleur intense</strong><br /><strong>Application précise </strong><br /><strong>Longue tenue</strong><br /><strong>Haute  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007310</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2479c2d52699cbe2143b80831a81bdbc74c6f9ab0946cbd0cfe85f0291d0d97f ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Contapharm eye care intense mascara regard xxl brun 10g ]]></title>
<g:id>c21d5774-8e49-4d7b-a011-5904539e445a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/contapharm-eye care intense mascara regard xxl brun 10g?c21d5774-8e49-4d7b-a011-5904539e445a ]]></link>
<g:price><![CDATA[ 1845.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Intense Mascara procure aux cils un volume incomparable pour un regard intense.</p>
<p>Sa texture onctueuse, haute tolérance, enrobe les cils et les charge intensément, de la racine à la pointe, en un seul passage.</p>
<p>Ce mascara est enrichi en Silicium pour des cils plus vigoureux et plus denses.</p>
<p>Sa brosse volume étire les cils tout en douceur et dépose une couche généreuse de produit pour un maquillage intense.</p>
<p><strong>Volume intense</strong><br /><strong>Formule haute to ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662050002</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b47dce3e279c24efcadae45c7dc29055aec8b8c50b67c2bc98858dd0de935e06 ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Contapharm eye care intense mascara regard xxl noir 10g ]]></title>
<g:id>d6b961a9-3bea-402d-9a5b-0af6765988e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/contapharm-eye care intense mascara regard xxl noir 10g?d6b961a9-3bea-402d-9a5b-0af6765988e8 ]]></link>
<g:price><![CDATA[ 1845.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Intense Mascara procure aux cils un volume incomparable pour un regard intense.</p>
<p>Sa texture onctueuse, haute tolérance, enrobe les cils et les charge intensément, de la racine à la pointe, en un seul passage.</p>
<p>Ce mascara est enrichi en Silicium pour des cils plus vigoureux et plus denses.</p>
<p>Sa brosse volume étire les cils tout en douceur et dépose une couche généreuse de produit pour un maquillage intense.</p>
<p><strong> Volume intense</strong><br /><strong> Formule haute  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662050019</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b47dce3e279c24efcadae45c7dc29055aec8b8c50b67c2bc98858dd0de935e06 ]]></g:image_link>
<g:product_type><![CDATA[ MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ ControlStérol, 60 gélules végétales ]]></title>
<g:id>77e9629c-360f-4fa9-a6f5-c5eb67f4f0c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/controlst-rol, 60 gélules végétales?77e9629c-360f-4fa9-a6f5-c5eb67f4f0c9 ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Bienfait : </span>Contribue à réguler le cholestérol.</li>
<li><span>Indication(s) :</span> En cas de régulation du cholestérol.</li>
<li><span>Actifs Phares : </span>Vitamines B3, B6, B1, B12, Coenzyme Q10, Bulbe d'Ail noir et écorce de cannelle de Ceylan.</li>
<li><span>Durée de la cure : </span>Cure de 1 mois.</li>
<li><span>On aime :</span> Sa formule végétale !</li>
</ul><p> </p>
<p><span>ControlStérol™ </span>est un régulateur de cholestérol naturel nouvelle génération : son  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664688000089</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0594ce77a501ebd768660567c9802ebcb25f1c5d43a2038b3dbd5bfface3aa54 ]]></g:image_link>
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
<title><![CDATA[ Cooper Actipoche 2 Patchs Chauffants ]]></title>
<g:id>7259ae5d-2eee-410b-bee4-becb644fee21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-actipoche 2 patchs chauffants?7259ae5d-2eee-410b-bee4-becb644fee21 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le patch chauffant ACTIPOCHE permet de soulager la douleur par son action longue durée. Une fois appliqué sur la peau, le patch chauffant diffuse une chaleur constante pendant 8 heures, permettant de décontracter les muscles douloureux par une meilleure oxygénation et de soulager les douleurs articulaires. Son format convient particulièrement aux personnes nécessitant un soulagement efficace tout au long de la journée.</p>
<p> Le patch chauffant ACTIPOCHE permet d’apaiser différents types de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401020525158</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ecc787b0922ab86618dbdbfc160086caf25e8fbb8fcedacf05dca6d60e1411e8 ]]></g:image_link>
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
<title><![CDATA[ Cooper Actipoche Chaud/Froid Genou ]]></title>
<g:id>db19d23a-c0cf-4804-8fd0-c909ead0332d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-actipoche chaud/froid genou?db19d23a-c0cf-4804-8fd0-c909ead0332d ]]></link>
<g:price><![CDATA[ 875.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le coussin thermique ACTIPOCHE Genou a été spécialement conçu pour soulager la douleur au niveau du genou, à chaud ou à froid. Il convient particulièrement aux sportifs, aux personnes ayant subit une opération chirurgicale du genou ou souffrant de douleurs musculaires ou articulaires liées à des courbatures.</p>
<p> En fonction du type de douleur, le coussin thermique ACTIPOCHE Genou s’applique localement soit à chaud soit à froid :</p>
<ul><li>vous pouvez l’utiliser à chaud pour soulager les ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819990741</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3391ceb3460f120d778d4b29b544dff941f568a27d2067cb3663845570f9e1fc ]]></g:image_link>
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
<title><![CDATA[ Cooper Actipoche Coussin Thermique 10 x 15 cm ]]></title>
<g:id>33b9a630-eeb6-4aca-880f-26080a21181d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-actipoche coussin thermique 10 x 15 cm?33b9a630-eeb6-4aca-880f-26080a21181d ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le coussin thermique ACTIPOCHE Petit Modèle permet de soulager la douleur efficacement et naturellement (sans médicament), grâce à son action à chaud ou à froid. Son petit format est particulièrement adapté pour le traitement des maux de tête ou de dents, des bleus ou des bosses.</p>
<p> Le coussin thermique ACTIPOCHE Petit Modèle peut s’utiliser soit à chaud soit à froid, en fonction du type de douleur :</p>
<ul><li>appliquez-le chaud en cas de contracture musculaire, crampe, courbature ;</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401545582360</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/de64c0307a77ac4b4d3b35181869792dc36fd7949b69ce6c9da8488f404539ed ]]></g:image_link>
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
<title><![CDATA[ Cooper Actipoche Coussin Thermique Chaud froid  20 x30 cm ]]></title>
<g:id>ab667417-8e3f-4cb0-8ec4-5a9be5594556</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-actipoche coussin thermique chaud froid  20 x30 cm?ab667417-8e3f-4cb0-8ec4-5a9be5594556 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le coussin thermique ACTIPOCHE Petit Modèle permet de soulager la douleur efficacement et naturellement (sans médicament), grâce à son action à chaud ou à froid. Son petit format est particulièrement adapté pour le traitement des maux de tête ou de dents, des bleus ou des bosses.</p>
<p> Le coussin thermique ACTIPOCHE Petit Modèle peut s’utiliser soit à chaud soit à froid, en fonction du type de douleur :</p>
<ul><li>appliquez-le chaud en cas de contracture musculaire, crampe, courbature ;</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401545582599</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d1c7f4b4f9353be65fe04b21e518c31bae112368c9233bc04c529efbd1a8a694 ]]></g:image_link>
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
<title><![CDATA[ Cooper Actipoche Coussin Thermique Chaud froid 11 x 27 cm ]]></title>
<g:id>48587d80-6073-4603-b47a-15ed56f89c77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-actipoche coussin thermique chaud froid 11 x 27 cm?48587d80-6073-4603-b47a-15ed56f89c77 ]]></link>
<g:price><![CDATA[ 670.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le coussin thermique ACTIPOCHE Petit Modèle permet de soulager la douleur efficacement et naturellement (sans médicament), grâce à son action à chaud ou à froid. Son petit format est particulièrement adapté pour le traitement des maux de tête ou de dents, des bleus ou des bosses.</p>
<p> Le coussin thermique ACTIPOCHE Petit Modèle peut s’utiliser soit à chaud soit à froid, en fonction du type de douleur :</p>
<ul><li>appliquez-le chaud en cas de contracture musculaire, crampe, courbature ;</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401545582421</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bdf5b4ff074d209771c880531a945a5706471f77c93e0405c82089022d3f4fe9 ]]></g:image_link>
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
<title><![CDATA[ Cooper Actipoche Coussin thermique Chaud/Froid cervicales et trapèzes ]]></title>
<g:id>3c51d147-7863-4cb1-9a36-5e9236ce23db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-actipoche coussin thermique chaud/froid cervicales et trapèzes?3c51d147-7863-4cb1-9a36-5e9236ce23db ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le coussin thermique ACTIPOCHE Cervicales et Trapèzes permet de soulager rapidement la douleur par thermothérapie, grâce à son action à chaud ou à froid, et ce naturellement (sans médicament). Son format a été spécialement étudié pour s’adapter à la zone cervicale (nuque) et aux trapèzes. Il est donc plus particulièrement adapté pour le traitement des torticolis, des douleurs cervicales ou des douleurs de la nuque.</p>
<p> Le coussin thermique ACTIPOCHE Cervicales et Trapèzes peut s’utiliser  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401051092629</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5950b6095b237daef132dfb03c03e16a4948f35392701ee09da166e483834474 ]]></g:image_link>
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
<title><![CDATA[ Cooper Aureocyde crème assainissante antibacterienne 15 g ]]></title>
<g:id>e5547516-cc8f-4885-9a10-ec1d39a24f89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-aureocyde crème assainissante antibacterienne 15 g?e5547516-cc8f-4885-9a10-ec1d39a24f89 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <div id="short_description_content" class="rte align_justify">
<p><span>Auréocyde est une crème assainissante antibactérienne.</span></p>
</div>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401047497001</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58a2fd3d800975498a71d2a56e8bbcae64aa0bd92a70715a8248cde879f7273a ]]></g:image_link>
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
<title><![CDATA[ Cooper Baccide Gel Hydroalcoolique 300ml ]]></title>
<g:id>5289edee-889b-4102-b91b-1f0112a17797</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-baccide gel hydroalcoolique 300ml?5289edee-889b-4102-b91b-1f0112a17797 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Avec une formule issue du milieu hospitalier active dès 30 secondes, Baccide gel mains est idéal pour l’hygiène de vos mains.</span></p>
<p><span>Baccide s’utilise sans eau, sans serviette et sèche tout seul.</span><br /><span>Pratique et facile à utiliser, Baccide vous aide à garder des mains saines à tout moment (en cas d’épidémie de gastro-entérite ou de grippe par exemple).</span><br /><span>Sa formule triple action bactéricide</span><span>(1)</span><span>, fongicide</span><span>(2) ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401046422387</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6602efc7281e6e68a79096846cb0f80d8576401fbffd7f37022499d93a8ce6e9 ]]></g:image_link>
<g:product_type><![CDATA[ GELS HYDRO ALCOOLIQUES ET ASSAINISSANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Baccide Gel hydroalcoolique 100 ml ]]></title>
<g:id>05639f0a-fda6-42f6-b39e-e27e50a8dcfb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-baccide gel hydroalcoolique 100 ml?05639f0a-fda6-42f6-b39e-e27e50a8dcfb ]]></link>
<g:price><![CDATA[ 199.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p><span>Avec une formule issue du milieu hospitalier active dès 30 secondes, Baccide gel mains est idéal pour l’hygiène de vos mains.</span><br /><span>Baccide s’utilise sans eau, sans serviette et sèche tout seul.</span><br /><span>Pratique et facile à utiliser, Baccide vous aide à garder des mains saines à tout moment (en cas d’épidémie de gastro-entérite ou de grippe par exemple).</span><br /><span>Sa formule triple ac ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401595895083</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02612924023b5d651b74ad6c22c16d5a6f9579583e9a4b938add6b5c908243a5 ]]></g:image_link>
<g:product_type><![CDATA[ GELS HYDRO ALCOOLIQUES ET ASSAINISSANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Baccide Lingettes individuelles mains et surfaces x 12 ]]></title>
<g:id>7a2db43a-6333-49f9-a5dd-2f1ace2565a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-baccide lingettes individuelles mains et surfaces x 12?7a2db43a-6333-49f9-a5dd-2f1ace2565a5 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Des lingettes mains et surfaces, qui allient douceur pour les mains et large spectre d’activité, avec une odeur fraîche, discrète et agréable.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810002955</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f83826e2a4b689a4b73731b76b01ca07cb5b25038443a68449d8b4ee1b9a2065 ]]></g:image_link>
<g:product_type><![CDATA[ GELS HYDRO ALCOOLIQUES ET ASSAINISSANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Baccide gel mains sans rinçage 30ml ]]></title>
<g:id>1ca351f8-e277-4a1f-8cca-700354f5526d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-baccide gel mains sans rinçage 30ml?1ca351f8-e277-4a1f-8cca-700354f5526d ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Avec une formule issue du milieu hospitalier active dès 30 secondes, Baccide gel mains est idéal pour l’hygiène de vos mains.</span><br /><span>Baccide s’utilise sans eau, sans serviette et sèche tout seul.</span><br /><span>Pratique et facile à utiliser, Baccide vous aide à garder des mains saines à tout moment (en cas d’épidémie de gastro-entérite ou de grippe par exemple).</span><br /><span>Sa formule triple action bactéricide</span><span>(1)</span><span>, fongicide</span><span>(2)</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548937273</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94650d94a5aaf8714fee012b69245a92a5d66a8f76166b1f5d1e13a39776e208 ]]></g:image_link>
<g:product_type><![CDATA[ GELS HYDRO ALCOOLIQUES ET ASSAINISSANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Bicarbonate De Sodium Poudre 250g ]]></title>
<g:id>418a9856-2dc5-47f5-b2d2-63236f16b3ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-bicarbonate de sodium poudre 250g?418a9856-2dc5-47f5-b2d2-63236f16b3ba ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Reconnu pour ses propriétés nettoyantes et blanchissantes, le bicarbonate de sodium favorise une bonne hygiène bucco-dentaire. Il blanchit l'émail et prévient la formation de taches et le jaunissement des dents.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560646856</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/99beb7cae7c8e7296dc4ee926609cac96b4a66329468889150103479f47ab5d7 ]]></g:image_link>
<g:product_type><![CDATA[ Médicament > Soins bucco-dentaires ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Bicarbonate de sodium 75g ]]></title>
<g:id>c8e17e3a-5a21-488f-b1a7-ab4f37edb18c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-bicarbonate de sodium 75g?c8e17e3a-5a21-488f-b1a7-ab4f37edb18c ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Reconnu pour ses propriétés nettoyantes et blanchissantes, le bicarbonate de sodium favorise une bonne hygiène bucco-dentaire. Il blanchit l'émail et prévient la formation de taches et le jaunissement des dents.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401521387194</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/219322904951fcd90b3882ca46b70210850f6287e6a965d87e07fe25793e39de ]]></g:image_link>
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
<title><![CDATA[ Cooper Bouillotte caoutchouc rouge 2L ]]></title>
<g:id>148aff7c-26a7-4b33-bd2d-5b9b2ed3ec4a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-bouillotte caoutchouc rouge 2l?148aff7c-26a7-4b33-bd2d-5b9b2ed3ec4a ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les bouillottes COOPER sont une solution pratique, écologique et économique pour se réchauffer tout l'hiver. La bouillotte nue COOPER rouge est en matière thermoplastique, une matière sans odeur et recyclable et est conforme aux normes en vigueur (BS 1970 : 2012).</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819990451</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb2cd4684e845573fff28b6c24062f8b784699b4cc6be45011fc6ea5e37da54e ]]></g:image_link>
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
<title><![CDATA[ Cooper Chlorhexidine 0.5% 12 unidoses 5 ml ]]></title>
<g:id>80b21cf4-be00-4255-8a88-e1e142a39ef7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-chlorhexidine 0.5% 12 unidoses 5 ml?80b21cf4-be00-4255-8a88-e1e142a39ef7 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Solution Antiseptique Chlorhexidine 0.5% de Cooper a une action assainissante et purifiante de la peau qui ne pique pas.</p>
<p>Elle contient de la Chlorhexidine, un agent antibactérien à large spectre d'activité, qui possède une action durable et particulièrement bien toléré par les épidermes les plus fragiles.</p>
<p>Sans Alcool, ne pique pas, incolore et ne tache pas les vêtements.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401596852061</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8449dd483ec9ca01f430129b14ee462f529bb17a21cba0f6ded51043cf4f97bc ]]></g:image_link>
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
<title><![CDATA[ Cooper Chlorure de Magnésium 20g / 50 sachets ]]></title>
<g:id>df4572d9-382b-4396-a0cd-047e0eab1ba6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-chlorure de magnésium 20g / 50 sachets?df4572d9-382b-4396-a0cd-047e0eab1ba6 ]]></link>
<g:price><![CDATA[ 115.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cooper Chlorure de Magnésium 20g (MgCl2) est un remède efficace qui augmente l'immunité, stimule l'organisme tout en diminuant le stress.<br>Le chlorure de magnésium est surtout utilisé pour sa concentration en magnésium (le chlorure étant un sel). Certes le magnésium est très important pour notre santé, mais on le trouve naturellement dans de nombreux aliments comme dans la banane. Discutez toujours avec votre médecin ou nutritionniste pour connaître vos besoins en magnésium.<br>Le chlorure  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401547496054</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2cef20058e030ba04473acee0c61047c122439f9e29d69c8966e1c04711571d1 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > SANTÉ PREVENTION > FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Chlorure de Sodium Sachet 1g ]]></title>
<g:id>84f3ff09-dae9-4c69-8009-a316c13867e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-chlorure de sodium sachet 1g?84f3ff09-dae9-4c69-8009-a316c13867e4 ]]></link>
<g:price><![CDATA[ 12.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les sachets de chlorure de sodium Cooper ont été élaborés pour pallier un manque de sel dans l’organisme.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401563384151</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b0683868716de1e1c271d364e59121d8213eb6f5d8520f3c1a90e94b5b41492 ]]></g:image_link>
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
<title><![CDATA[ Cooper Etiaxyl Anti-transpirant Roll-On Protection 48h Peaux Sensibles 2x50ml ]]></title>
<g:id>2577bdd6-1137-4e5e-bc5e-622253bf31ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-etiaxyl anti-transpirant roll-on protection 48h peaux sensibles 2x50ml?2577bdd6-1137-4e5e-bc5e-622253bf31ee ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Anti-transpirant Roll-on Protection 48 h pour peaux sensibles de la marque Etiaxil est conçu pour réguler la transpiration sans la bloquer complètement tout en prévenant les mauvaises odeurs. Il n'agresse pas les peaux sensibles et sa formule ayant fait l'objet d'un test dermatologique garantit une utilisation sans risque pour la peau. Il ne contient pas ni paraben ni alcool. Il présente l'avantage de ne laisser aucune trace sur les vêtements. Son action antitranspirante agit durant 48 heur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401525912583</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5d90e3f9dc3ccdf6a60c278a4d148885d6c080806a5e72656cd950752d3473a6 ]]></g:image_link>
<g:product_type><![CDATA[ Médicament > DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Glucose Pur Anhydre Poudre 75g ]]></title>
<g:id>eede9508-cf1e-459f-a364-90932dfdc6a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-glucose pur anhydre poudre 75g?eede9508-cf1e-459f-a364-90932dfdc6a4 ]]></link>
<g:price><![CDATA[ 210.00 EUR ]]></g:price>
<description><![CDATA[ <p><br>Le <strong>glucose pur anhydre de Cooper</strong> est généralement utilisé pour réaliser le test d’<strong>hyperglycémie</strong> <strong>provoquée par voie orale (HGPO)</strong>.<br><br>La <strong>glycémie</strong>, qui correspond au taux de glucose dans le plasma sanguin, est généralement régulée par tout un système complexe qui implique notamment l’insuline,&nbsp;produite par le pancréas. Dans le cas où cette hormone protéique vient à manquer, le taux de sucre augmente et l’on parle d’ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401565764975</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39ee95eff27f57e04b7e0ae26cfc83e527065223ac1b911ec331d86c3803f61d ]]></g:image_link>
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
<title><![CDATA[ Cooper Inhalateur ]]></title>
<g:id>114bb41c-c099-4c60-b743-e01917993924</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-inhalateur?114bb41c-c099-4c60-b743-e01917993924 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cooper Inhalateur Polyéthylène Enfant/Adulte est un inhalateur deux tailles idéal pour effectuer des inhalations par fumigation en cas d'affections au niveau de la sphère ORL. Très pratique, il va vous aider à retrouver une respiration normale, et passer l'hiver sereinement. Il est adapté à l'adulte et à l'enfant.</span></p>
<p><span style="color:#d0121a;"><strong>* coloris aléatoire </strong></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810003983</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/726386df3f89ba93ffef2f1af14effe7c0c725307848a32018daa1a9c533dce8 ]]></g:image_link>
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
<title><![CDATA[ Cooper Mag 2 24H 120 Comprimés ]]></title>
<g:id>b1b7e0d1-d92c-48f5-add2-7176e8e5bf72</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-mag 2 24h 120 comprimés?b1b7e0d1-d92c-48f5-add2-7176e8e5bf72 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le manque de magnésium peut être à l’origine de fatigue, nervosité et fatigue musculaire. Faites le plein de magnésium grâce au complément alimentaire Mag2 24h nouvelle formule !</p>
<p><span>Une formule renforcée</span></p>
<p>En manque de magnésium ? Luttez contre la nervosité, la fatigue et la fatigue musculaire grâce au complément alimentaire Mag2 24 H et son nouveau comprimé !<br /><br /><span>Un complément alimentaire à la formule concentrée</span><br />En une seule prise, Mag2 24 h app ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810005628</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c65a73cdf06c85fa0639ca93243227beec9b4d9e9d08f311a94100f42c413b13 ]]></g:image_link>
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
<title><![CDATA[ Cooper Mag2 45 gommes goût framboise ]]></title>
<g:id>5d41dbe7-9c1e-4e90-a152-9a366ce30684</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-mag2 45 gommes goût framboise?5d41dbe7-9c1e-4e90-a152-9a366ce30684 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez le premier magnésium Mag2 sous forme de délicieuses gommes à la framboise ultra faciles à prendre !<br />Alliant plaisir et efficacité, Mag2 Gommes, source de magnésium et de vitamine B6, aide à réduire la nervosité et la fatigue. En effet, le magnésium et la vitamine B6 contribuent à réduire la fatigue et à des fonctions psychologiques normales.<br /><br /><span style="text-decoration:underline;">Des gommes d'origine végétale</span></p>
<p>Sans sucres ajoutés ni colorant artificiel ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810003648</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b642f95d58fde6391689ea1a19a7313afb334847318a5c44a7b37de4b6a0dec1 ]]></g:image_link>
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
<title><![CDATA[ Cooper Mag2 45 gommes goût pêche ]]></title>
<g:id>b857aff5-9b63-4f0c-9c78-1b0b97352696</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-mag2 45 gommes goût pêche?b857aff5-9b63-4f0c-9c78-1b0b97352696 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez le premier magnésium Mag2 sous forme de délicieuses gommes à la pêche ultra faciles à prendre !<br />Alliant plaisir et efficacité, Mag2 Gommes, source de magnésium et de vitamine B6, aide à réduire la nervosité et la fatigue. En effet, le magnésium et la vitamine B6 contribuent à réduire la fatigue et à des fonctions psychologiques normales.<br /><br /><span style="text-decoration:underline;">Des gommes d'origine végétale</span></p>
<p>Sans sucres ajoutés ni colorant artificiel, no ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810003655</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30e264b81e1396148fdee67553da26c3519e5c739190e90490f003491bb45879 ]]></g:image_link>
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
<title><![CDATA[ Cooper Mag2 cannabis sativa 30 comprimés ]]></title>
<g:id>cbf7292c-c028-4d30-a669-6d8f6efcb304</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-mag2 cannabis sativa 30 comprimés?cbf7292c-c028-4d30-a669-6d8f6efcb304 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Au quotidien, il arrive de se sentir fatigué et tendu. Un déficit en magnésium peut être à l’origine de nervosité et de fatigue, entraînant des tensions quotidiennes. L’organisme ne résiste plus au surmenage et n’arrive plus à se détendre.</p>
<p><span>Contient un mélange de magnésium, de vitamine et de plantes</span></p>
<p>Pour vous aider à retrouver un état de relaxation et d’apaisement, Mag2 Cannabis sativa propose une formule innovante à base de poudre de graines de chanvre et de Rhodiol ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503685</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/70f5579f0e7c69bbcbedf13e2ce0e936673f3b33459e66cb81358816090c95be ]]></g:image_link>
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
<title><![CDATA[ Cooper Nausélib 36 comprimés ]]></title>
<g:id>254d1dae-652a-4909-a319-7afa3db145ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-nausélib 36 comprimés?254d1dae-652a-4909-a319-7afa3db145ae ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nausélib contient du gingembre qui contribue au fonctionnement normal du système digestif et à diminuer la sensation d’inconfort en cas de nausées : mal des transports (voiture, avion, bateau, …), début de grossesse.</p>
<p>L’extrait de gingembre contenu dans Nausélib est dix fois plus concentré qu’une poudre de gingembre traditionnelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560120479</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50f3f1d994a24c9474b0befdaea10f014f404c49afd1fa62ccc32be2f46c3f0b ]]></g:image_link>
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
<title><![CDATA[ Cooper Osmo Soft Brûlures et Coups de Soleil 150g  ]]></title>
<g:id>9ea51423-67da-4b31-a9b6-b8c6354b71f7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-osmo soft brûlures et coups de soleil 150g ?9ea51423-67da-4b31-a9b6-b8c6354b71f7 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cooper Osmo Soft Gel Réparateur Cutané 150 g est un produit qui apaise, répare et hydrate les coups de soleil et les peaux échauffées.</p><p>Ce gel soulage immédiatement les peaux échauffées, favorise leur réparation et hydrate les couches superficielles de l'épiderme.<br>Idéal après une exposition prolongée au soleil, il apaise instantanément la peau, procurant une agréable sensation de fraîcheur.</p><p>En réparant l'épiderme, il contribue à restaurer le confort cutané et à accélérer la régé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810006403</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/05c4207d2592d72e1a611a060ad72794ffa0bef95de55c6b30a680008c506f55 ]]></g:image_link>
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
<title><![CDATA[ Cooper Osmo Soft Gel coups de soleil 75 g ]]></title>
<g:id>4e42d588-f725-4222-baea-b4e3dd248532</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-osmo soft gel coups de soleil 75 g?4e42d588-f725-4222-baea-b4e3dd248532 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cooper Osmo Soft Gel Réparateur Cutané 75 g + 25 g Offert est un produit qui apaise, répare et hydrate les coups de soleil et les peaux échauffées.</p><p>Ce gel soulage immédiatement les peaux échauffées, favorise leur réparation et hydrate les couches superficielles de l'épiderme.<br>Idéal après une exposition prolongée au soleil, il apaise instantanément la peau, procurant une agréable sensation de fraîcheur.</p><p>En réparant l'épiderme, il contribue à restaurer le confort cutané et à accé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810006434</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e4a802df13fa7f2c040489bf757a44ee3ad7b1396357934bba842f60a0ef9bff ]]></g:image_link>
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
<title><![CDATA[ Cooper Pilulier hebdomadaire pour patients dépendants ]]></title>
<g:id>44c3d47d-563f-43e2-bb6c-b393b4cfa843</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-pilulier hebdomadaire pour patients dépendants?44c3d47d-563f-43e2-bb6c-b393b4cfa843 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pratique et fonctionnel, le pilulier hebdomadaire PILBOX Classic permet d'organiser simplement son traitement pour la semaine et de prendre facilement ses médicaments grâce à un système de bouton-poussoir breveté.</p>
<p>Son couvercle transparent permet un remplissage en une seul fois des 28 cases (7 jours / 4 cases par jour).</p>
<p>L'inscription du jour et des prises sur le pilulier permet d'éviter toute confusion, de même que les repères sensoriels pour malvoyants.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401570226833</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/26aa921c305586c663550cb272f0b09cca70443e304b296c7ca802f23e323063 ]]></g:image_link>
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
<title><![CDATA[ Cooper Poire à Lavement 65 ml ]]></title>
<g:id>5e280982-ff4a-401a-9646-e53691216c79</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-poire à lavement 65 ml?5e280982-ff4a-401a-9646-e53691216c79 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cooper Salva Poire à Lavement Bout Effilé N°4 permet de réaliser des lavements auriculaires en cas de bouchons de cérumen.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401047795695</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/724921602b87db5b51a8caab7546f2e7303aa4d4e01b397b4c5f6d9072e7cb19 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE ET PROTECTIONS AUDITIVES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Poire à lavement 30ml ]]></title>
<g:id>9bfd0b35-43d3-4546-a2d7-2496ffc076e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-poire à lavement 30ml?9bfd0b35-43d3-4546-a2d7-2496ffc076e0 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>poire effilée Salva</span><span> des laboratoires français </span><span>Cooper</span><span> est un équipement destiné aux lavements auriculaires, notamment en cas de bouchons de cérumen. Elle participe à l’évacuation de de l’excédant de sécrétion et à une hygiène optimale de l’oreille. Le cérumen, appelé aussi cire d’oreille, est une substance grasse et jaunâtre naturellement sécrétée par l’organisme dans le but de nettoyer et de lubrifier le conduit auditif. Son écoulem ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401047795527</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ef279262aae40cd68f15d651ca8cae6d2e62035721acaa0fa174a6da5389096 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE ET PROTECTIONS AUDITIVES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Salva Crayon Hémostatique ]]></title>
<g:id>b10c6c83-823c-4610-ab64-44a48c8cf507</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-salva crayon hémostatique?b10c6c83-823c-4610-ab64-44a48c8cf507 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <strong>crayon hémostatique&nbsp;Salva&nbsp;des laboratoires Cooper</strong> est utilisé pour arrêter le saignement des micro-coupures, notamment lors du rasage. Très simple d'utilisation, il apaise également la sensation de douleur accompagnant la coupure.&nbsp;</p><p>Certaines plaies, et notamment celles sur le visage, saignent pendant de longues minutes et ne s'arrêtent qu'au moyen d'une pression exercée. Pour éviter cela, la Pharmacie des Drakkars vous propose de découvrir le&nbsp;cray ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401078724763</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d2ddd6bdefbfa5253bdb37901d98fa3bc327bafcfc86ee34a5f9d0a8e2fcc5d1 ]]></g:image_link>
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
<title><![CDATA[ Cooper Suretest test d'ovulation x10 ]]></title>
<g:id>ddbfb536-10a0-4e1b-aed4-230a25a86f9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-suretest test d'ovulation x10?ddbfb536-10a0-4e1b-aed4-230a25a86f9f ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le test d’ovulation Suretest est un test de détection de l’ovulation sur urine (sensibilité 25 mUI / ml), spécialement conçu pour un autodiagnostic.</p>
<p>Ce test permet de détecter le pic de LH ou Hormone Lutéinisante, et donc de déterminer les 2 jours du cycle les plus fertiles. Le tableau présent dans la notice indique, selon la durée du cycle menstruel, le jour du cycle à partir duquel commencer les tests. Utiliser alors un test par jour, à la même heure, jusqu'à la détection du pic de L ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401061088797</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d69228b5beaa2b9f4932deec10c3dbcf659b9bb3415f558ba0ff27311ee6165 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Suretest test de grossesse ]]></title>
<g:id>3b8e507e-9cea-424a-91c2-3931e0fb49b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-suretest test de grossesse?3b8e507e-9cea-424a-91c2-3931e0fb49b1 ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le test de grossesse Suretest est un test de détection de la grossesse sur urine, spécialement conçu pour un autodiagnostic. Par la réalisation d’une réaction colorée spécifique grâce à l’utilisation d’anticorps anti-hCG, ce test détecte dans les urines la présence de l’hormone hCG, hormone sécrétée dès l’implantation de l’embryon dans l’utérus. Sensibilité : 25 mUI / ml Résultat disponible en 5 minutes.</p>
<p><span>boite de 1 test</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401048324184</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d588ecdffe4aa9ebbed3b9a8a4382adb2fe1d51f75dc17da2128f3928ade1b02 ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Suretest test de grossesse x 2 ]]></title>
<g:id>4e683dfd-d9a3-4c96-894a-d0c2d4e59778</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-suretest test de grossesse x 2?4e683dfd-d9a3-4c96-894a-d0c2d4e59778 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="field field--name-body field--type-text-with-summary field--label-above">
<div class="field__items">
<div class="field__item even">
<p>Le test de grossesse Suretest est un test de détection de la grossesse sur urine, spécialement conçu pour un autodiagnostic. Par la réalisation d’une réaction colorée spécifique grâce à l’utilisation d’anticorps anti-hCG, ce test détecte dans les urines la présence de l’hormone hCG, hormone sécrétée dès l’implantation de l’embryon dans l’utérus. Sensi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401048324245</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1dd1e5e3dff5bad3d681dbeb8666246579a3364e6efd58ff3e4004ecc3c5bf1e ]]></g:image_link>
<g:product_type><![CDATA[ TESTS DE GROSSESSE ET D'OVULATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cooper Thermacare Patch auto-chauffant Dos x2 ]]></title>
<g:id>c204eb7a-6a95-4b01-b0f5-7bc0ba822634</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-thermacare patch auto-chauffant dos x2?c204eb7a-6a95-4b01-b0f5-7bc0ba822634 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ei-service-icon-text text-left appeight-headline pera-content">
<div class="ei-service-text">
<div class="container">
<div class="eight-section-title appeight-headline pera-content text-center">
<p>Les patchs auto-chauffants ThermaCare offrent un soulagement efficace et ciblé des douleurs musculaires et articulaires consécutives à une tension musculaire, un claquage, une courbature, une entorse ou à de l’arthrose. Il convient pour des douleurs de type chronique ou occasionnel.</p>
</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401060329754</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6c41fc085e99e13f5368f016b2d54a37033f8c8c26758306686dea3fc96f64c0 ]]></g:image_link>
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
<title><![CDATA[ Cooper Thermacare Patch auto-chauffant Nuque /Epaule/Poignet x2 ]]></title>
<g:id>890d3d9b-e626-4b09-9d82-d6cd0061d1f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-thermacare patch auto-chauffant nuque /epaule/poignet x2?890d3d9b-e626-4b09-9d82-d6cd0061d1f1 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ei-service-icon-text text-left appeight-headline pera-content">
<div class="ei-service-text">
<div class="container">
<div class="eight-section-title appeight-headline pera-content text-center">
<div class="ei-service-icon-text text-left appeight-headline pera-content">
<div class="ei-service-text">
<div class="container">
<div class="eight-section-title appeight-headline pera-content text-center">
<p>Les patchs auto-chauffants ThermaCare offrent un soulagement efficace et ciblé des  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401060329693</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/926e9cdb52fc4dbd5be838b06127bb769c74b51888621104a0a003177d1424d6 ]]></g:image_link>
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
<title><![CDATA[ Cooper Thermacare Patch auto-chauffant Nuque /Epaule/Poignet x6 ]]></title>
<g:id>5708f68c-270a-467c-bd93-7b975ee4bc40</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-thermacare patch auto-chauffant nuque /epaule/poignet x6?5708f68c-270a-467c-bd93-7b975ee4bc40 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ei-service-icon-text text-left appeight-headline pera-content">
<div class="ei-service-text">
<div class="container">
<div class="eight-section-title appeight-headline pera-content text-center">
<p>Les patchs auto-chauffants ThermaCare offrent un soulagement efficace et ciblé des douleurs musculaires et articulaires consécutives à une tension musculaire, un claquage, une courbature, une entorse ou à de l’arthrose. Il convient pour des douleurs de type chronique ou occasionnel.</p>
</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401098329665</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/926e9cdb52fc4dbd5be838b06127bb769c74b51888621104a0a003177d1424d6 ]]></g:image_link>
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
<title><![CDATA[ Cooper Vitascorbol C1000 20 comprimés x2 ]]></title>
<g:id>aa9e09df-6ecc-407c-a12a-42591a87575e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-vitascorbol c1000 20 comprimés x2?aa9e09df-6ecc-407c-a12a-42591a87575e ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>VitascorbolC1000 est un complément alimentaire sous forme de comprimés, à dissoudre chaque matin dans un demi-verre d’eau. Il contient 1 g de vitamine C pour vous aider à lutter contre la fatigue<span>1</span>, protéger votre système immunitaire<span>1</span>, et contribuer à augmenter vos apports journaliers en association avec une alimentation variée et équilibrée.</p>
<ul>
<li>20 comprimés effervescents goût orange-abricot.</li>
<li>À partir de 15 ans.</li>
</ul>
<p>(1) La vitamine C contr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810004805</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3eba4b7ddb862f9303a7d285f7dbaeec13b01cb15373cc762be33f4fd1dddcdf ]]></g:image_link>
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
<title><![CDATA[ Cooper Vitascorbol Vitamine C 500mg + vitamine D + zinc 30 capsules ]]></title>
<g:id>fdafa629-b306-4f91-81bf-7a30b27e9789</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-vitascorbol vitamine c 500mg + vitamine d + zinc 30 capsules?fdafa629-b306-4f91-81bf-7a30b27e9789 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Complément alimentaire à base de Vitamine C, Vitamine D et Zinc<br />Besoin de renforcer vos défenses naturelles ?<br />Découvrez VitascorbolC500 + Zinc + Vit. D !<br />Plus qu’une Vitamine C :<br />• Une formule et un effet double action :<br />Anti-fatigue1 + Système immunitaire renforcé2, grâce à l’association de 500 mg de vitamine C + 10 µg de vitamine D + 15mg de Zinc, pour 2 capsules par jour.</p>
<p>- Effet anti-fatigue grâce à la vitamine C<br />- Sur la durée : des défenses naturelle ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810002511</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61dd2cae270e21ab37ea424cda67c30327351e00d8ca64d279b4c14a5065fc40 ]]></g:image_link>
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
<title><![CDATA[ Cooper Vitascorbol vitamine C 60 gommes ]]></title>
<g:id>264141c2-1856-4603-9e5f-0970002ed4c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-vitascorbol vitamine c 60 gommes?264141c2-1856-4603-9e5f-0970002ed4c9 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>VitascorbolGommes Vitamine C rassemble tous les bienfaits de la Vitamine C dans une gomme au bon goût citron pour revenir au top de sa vitalité<span>1</span>.<br /><br />VitascorbolGommes Vitamine C agit sur deux facteurs de la vitalité : la fatigue et le système immunitaire.<span><br /><br />Contre la fatigue :</span> la vitamine C réduit la fatigue et protège les cellules contre le stress oxydatif.<span><br /><br />Pour soutenir le système immunitaire :</span> la vitamine C aide au fonction ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810005024</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba5f24bb87f40d384ff71f6310bfd40766ff32a813d0e431901c6f234473dd81 ]]></g:image_link>
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
<title><![CDATA[ Cooper baccide gel hydroalcoolique vert parfum fraîcheur 100ml ]]></title>
<g:id>4b7a19c8-14cb-42e2-9e07-589c96b34985</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-baccide gel hydroalcoolique vert parfum fraîcheur 100ml?4b7a19c8-14cb-42e2-9e07-589c96b34985 ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p class="titremenu"><span class="texte">BACCIDE GEL MAINS est un gel hydroalcoolique pour le traitement hygiénique et la désinfection des mains par friction.</span></p>
<p class="titremenu"><span class="texte">Grâce à sa substance active l'éthanol (70% m/m), le gel hydro-alcoolique Baccide élimine </span><span class="menuaccueil">99,9%</span><span class="menuaccueil"> des bactéries en 30 secondes</span><span class="texte">, ce gel est aussi fongicide et virucide.</span></p>
<p>EFFICACE SUR LE V ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810001545</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/618e17a8a22bfa9d971dcb656d9a35b2ddd48d0388faba730853feabf75dba27 ]]></g:image_link>
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
<title><![CDATA[ Cooper baccide gel mains parfum amande 100 ml ]]></title>
<g:id>98c2c6e1-c32d-4f37-83a4-8ab6d4bc7c9e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cooper-baccide gel mains parfum amande 100 ml?98c2c6e1-c32d-4f37-83a4-8ab6d4bc7c9e ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p>Avec une formule issue du milieu hospitalier active dès <strong>30 secondes</strong>, Baccide gel mains est idéal pour l’hygiène de vos mains. Baccide s’utilise sans eau, sans serviette et sèche tout seul.</p>
<p>Pratique et facile à utiliser, Baccide vous aide à garder des mains saines à tout moment (en cas d’épidémie de gastro-entérite ou de grippe par exemple). Sa formule triple action bactéricide (1), fongicide (2) et virucide (3) permet d’éliminer 99,9% des bactéries.</p>
<p>Baccide gel  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810001552</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/564853bfaea2db1ea730412f23195301a07ac95935683a00b0ecd0f756337d75 ]]></g:image_link>
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
<title><![CDATA[ Corega Poudre Ultra Poudre Adhésive 40 g ]]></title>
<g:id>2aa2e8e7-3fc7-4d27-9537-d580c5fdaacd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/corega-poudre ultra poudre adhésive 40 g?2aa2e8e7-3fc7-4d27-9537-d580c5fdaacd ]]></link>
<g:price><![CDATA[ 635.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>poudre ultra de Corega Polident</span><span> offre une forte fixation de l'appareil dentaire, pour une tenue sûre et optimale toute la journée. Elle est formulée sans zinc. </span><br /><br /><span>L'appareil dentaire peut, avec le temps, </span><span>perdre son ajustement </span><span>avec les gencives. En cause : l'usure de la prothèse, ou encore la résorption osseuse. Cette dernière entraîne une rétractation des gencives et donc une perte d'ajustement de la prothèse.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3094907024105</g:gtin>
<g:brand><![CDATA[ GSK MEDICAMENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8fb51fa7c6645ff6d6a9399ddf2fa6026042cdf5a7bdbb37ec5267feb7974619 ]]></g:image_link>
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
<title><![CDATA[ Cotocouche 1° Age x 30 couches  ]]></title>
<g:id>7b3191d6-5708-4630-a882-a66d0fd98194</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cotocouche-1° age x 30 couches ?7b3191d6-5708-4630-a882-a66d0fd98194 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>100% coton contre les rougeurs, les irritations et l'érythème fessier. La seule couche douceur. Anallergique. Avec Cotocouche, les fesses rouges et irritées ne sont plus une fatalité ! Grâce à sa surface naturelle 100% coton, sans aucun additif, Cotocouche offre le plus doux des contacts. Elle augmente ainsi le confort de bébé, apaise ses irritations et favorise la disparition des rougeurs. Simplement, efficacement, naturellement ! Cotocouche est la solution simple, efficace et de bon sens, à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3265660001034</g:gtin>
<g:brand><![CDATA[ Tetra medical ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e0871280a184ecd1d4ae008a4c3ba54504dd283b5270132c546df9d58fe4808 ]]></g:image_link>
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
<title><![CDATA[ Cotocouche 2° Age x 30 couches ]]></title>
<g:id>35a95f72-abde-40c5-a7bd-75bc7cfbe5e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cotocouche-2° age x 30 couches?35a95f72-abde-40c5-a7bd-75bc7cfbe5e9 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les couches Cotocouche Coton 2ème âge de Tetra Medical ont été spécialement conçues pour le change afin de soigner les irritations et rougeurs de votre bébé naturellement. Les fesses de bébé sont au sec tout en étant apaisées.</p>
<p>Ce matelas absorbant en fibres végétales 100 % coton naturel lutte efficacement contre le développement des bactéries.<br />Il laisse respirer la peau de bébé et lui procure une agréable sensation de douceur.<br />Sans aucun additif, il est biodégradable et respe ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3265660001133</g:gtin>
<g:brand><![CDATA[ Tetra medical ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3679169408b85bb465e4a84c5eac5f10d7452a49686f5bea4195e40fbd58a1b4 ]]></g:image_link>
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
<title><![CDATA[ Cotopads Rectangles de Coton 8 x 10 cm x 200 ]]></title>
<g:id>38048a8c-60a9-4d3a-88b9-6fdf5a5b9d26</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cotopads-rectangles de coton 8 x 10 cm x 200?38048a8c-60a9-4d3a-88b9-6fdf5a5b9d26 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cotopad rectangles de coton est idéal pour les soins de la peau, pour la toilette de bébé ou le démaquillage. Il nettoie en douceur le visage, les mains ou le siège de bébé. </span></p>
<div id="kurato_extension_modal"></div>
<div></div>
<div></div>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4056649512820</g:gtin>
<g:brand><![CDATA[ LOHMANN RAUSCHER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b69b6bcf8ac4aecf79d1f1bde4cfd6b905821da1a0416553a12d7e472a88e63d ]]></g:image_link>
<g:product_type><![CDATA[ CARRES COTON ET MOUCHOIRS PAPIER ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cottony Couche Bébé T2 x38 ]]></title>
<g:id>2c94e6ad-1d92-45f4-ad61-79a02bc0962c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cottony-couche bébé t2 x38?2c94e6ad-1d92-45f4-ad61-79a02bc0962c ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cottony Couches avec du Coton Bio 38 Couches Taille 2 (3-6 kg) sont des couches conçues pour respecter la peau fragile de bébé et assurer une absorption optimale.</p>
<p>Elles sont dotées d'un voile protecteur 100% coton Bio garanti sans chlore, sans additifs et pesticides. Naturellement perspirant, à très haut pouvoir absorbant, confortable et hypoallergénique, il assure une protection idéale pour la peau sensible et délicate de bébé. De plus, il aide à prévenir les irritations et évite les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8016867006972</g:gtin>
<g:brand><![CDATA[ IDIM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27fd8ba026362db747f2f68d2f38b2f8f6f1facd22991fc7f249ece7035aaf80 ]]></g:image_link>
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
<title><![CDATA[ Cottony Couche Bébé T4 x28 ]]></title>
<g:id>4cb27210-7691-495e-b69d-5e86eb34075a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cottony-couche bébé t4 x28?4cb27210-7691-495e-b69d-5e86eb34075a ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cottony Couches avec du Coton Bio 28 Couches Taille 4 (7-18 kg) sont des couches conçues pour respecter la peau fragile de bébé et assurer une absorption optimale.<br />Elles proposent :</p>
<ul><li>Un voile interne naturel 100% coton Bio, pour une douceur extrême. Il protège la peau sensible de bébé et prévient les irritations.</li>
<li>Un cœur ultra-absorbant à base de cellulose certifiée blanchie sans chlorine TCF et certifiée FSC®. Il absorbe efficacement et maintient bébé au sec.</li>
<l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8016867006996</g:gtin>
<g:brand><![CDATA[ IDIM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25bed71eb7466b7ffbc5cdd6c7f2962e3d2dabe294705255b62fcb5361eb8a12 ]]></g:image_link>
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
<title><![CDATA[ Cottony Couche Bébé T5 x24 ]]></title>
<g:id>b5e216cf-e463-4916-ac62-11671abe56e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cottony-couche bébé t5 x24?b5e216cf-e463-4916-ac62-11671abe56e4 ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cottony Couches avec du Coton Bio 24 Couches Taille 5 (11-25 kg) sont des couches conçues pour respecter la peau fragile de bébé et assurer une absorption optimale.<br />Elles proposent :</p>
<ul><li>Un voile interne naturel 100% coton Bio, pour une douceur extrême. Il protège la peau sensible de bébé et prévient les irritations.</li>
<li>Un cœur ultra-absorbant à base de cellulose certifiée blanchie sans chlorine TCF et certifiée FSC®. Il absorbe efficacement et maintient bébé au sec.</li>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8016867007009</g:gtin>
<g:brand><![CDATA[ IDIM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5d8d078a781c1c267b66495c73ee6da00dc28e177a1287ebb9a2862ab051d8f8 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Eclat Ampoules Lifting 12x1ml ]]></title>
<g:id>c9cdd56a-04ac-4300-8c1b-591992e97ebd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'eclat ampoules lifting 12x1ml?c9cdd56a-04ac-4300-8c1b-591992e97ebd ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat 12 Ampoules Lift &amp; Lumière est une solution pour la peau froissée, fatiguée, ridée, les traits relâchés. Cette solution anti-rides et raffermissante est votre atout pour une mise en beauté immédiate et durable (pendant 8 heures).<br />Sa formule contient :</p>
<ul><li>un complexe tenseur végétal, avec des extraits d'acmella oleracea, du jus de sorgho, des amandes et des algues rouges,</li>
<li>des extraits de racine d'imperata cylindrica, plante subtropicale aux propriétés hy ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000435</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/428b89c152ab97ae270a3cacd4c98e5351edcaef7d10624085465d39347d5cff ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat 12 Ampoules Collagène Marin & Peptides Anti-Âge ]]></title>
<g:id>2eec9291-e4f8-45ac-9646-fa89789933f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat 12 ampoules collagène marin & peptides anti-Âge?2eec9291-e4f8-45ac-9646-fa89789933f5 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat 12 Ampoules Collagène Marin &amp; Peptides Anti-Âge est une cure raffermissante de nuit qui vient repulper, défroisser et hydrater intensément la peau.<br />Ce soin de nuit réparateur et dynamisant est un véritable concentré d'actifs anti-âge pour une peau d'apparence plus jeune et éclatante, et un effet anti-âge visible dès 12 jours :</p>
<ul><li>La peau est plus ferme, repulpée et plus lumineuse.</li>
<li>Moins froissée au réveil, elle paraît plus reposée.</li>
</ul><p>Après 24 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000800</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f5e8ccb6f71b7e0e5ee27bdefc94e991773dc2b4d672f151b99327676ce4dcb4 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat 3 Ampoules Lift & Lumière ]]></title>
<g:id>cc50559c-a985-4f02-b4cc-6dc4d000ac8d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat 3 ampoules lift & lumière?cc50559c-a985-4f02-b4cc-6dc4d000ac8d ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat 3 Ampoules Lift &amp; Lumière est une solution pour la peau froissée, fatiguée, ridée, les traits relâchés. Cette solution anti-rides et raffermissante est votre atout pour une mise en beauté immédiate et durable (pendant 8 heures).<br />Sa formule contient :</p>
<ul><li>un complexe tenseur végétal, avec des extraits d'acmella oleracea, du jus de sorgho, des amandes et des algues rouges,</li>
<li>des extraits de racine d'imperata cylindrica, plante subtropicale aux propriétés hyd ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000411</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5684539f032550ff985006bf39e298f30d8c386c9c93366f6faeb4d63517e0b9 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Baume Lèvres Lift & Pulp 15 ml ]]></title>
<g:id>e4884490-89b8-4b7f-8ca1-0be46523c443</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat baume lèvres lift & pulp 15 ml?e4884490-89b8-4b7f-8ca1-0be46523c443 ]]></link>
<g:price><![CDATA[ 970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Baume Lèvres Lift &amp; Pulp 15 ml est un soin anti-rides et raffermissant qui assure la tenue du rouge à lèvres. Ultra concentré en agents nutritifs hydratants (karité, huiles de pépins de raisin et son de riz) et anti-âge (acide hyaluronique et collagène marin), ce soin à la texture fondante est la base idéale pour appliquer le rouge à lèvres : il pénètre rapidement, ne laisse pas de film gras, pour des lèvres à croquer, lisses au contour redessiné.</p>
<p>Jour après jour, les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000480</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1b70e35d8a8364b3e579fcc083c87cc407a3fcf461b207b674a966b58255a367 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Crème Riche Nutri-Intense+ 50 ml ]]></title>
<g:id>75e399b3-7c9f-4323-a707-dd78bccfbb1d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat crème riche nutri-intense+ 50 ml?75e399b3-7c9f-4323-a707-dd78bccfbb1d ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Crème Riche Nutri-Intense+ 50 ml est une crème qui hydrate et nourrit intensément et durablement les peaux sèches à très sèches, même sensibles. Sa formule associe :</p><ul><li><p>Le collagène marin et le silicium organique pour une hydratation intense.</p></li><li><p>L'huile d'avocat et le beurre de karité aux propriétés adoucissantes et régénérantes exceptionnelles.</p></li><li><p>Les extraits de miel et thé vert Bio à l'action anti-radicalaire.</p></li></ul><p>Sa texture onctu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000824</g:gtin>
<g:brand><![CDATA[ COUP D'ECLAT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/978a0bab9bbb1a30ee19383d3d50bb1e7eb33588d5c3214cae8b9651fa76d610 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Crème Velours Anti-Âge+ 50 ml ]]></title>
<g:id>7228640c-7c56-4902-88bb-e1bbf423c487</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat crème velours anti-Âge+ 50 ml?7228640c-7c56-4902-88bb-e1bbf423c487 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Crème Velours Anti-Âge+ 50 ml est un soin anti-âge global à la texture velours qui hydrate, raffermit la peau et la protège des principaux signes du vieillissement occasionnés par la déshydratation.<br />Ultra sensorielle et fondante, elle agit comme une vague désaltérante et procure un confort intense tout au long de la journée. Sa formule associe des ingrédients clés :</p>
<ul><li>Hydratants et réparateurs : Karité, huiles de jojoba et macadamia.</li>
<li>Antioxydants : Huile d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000763</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4fcc3fe4dc6ac2ff52724a753b5cbdaf43bb5465de1b57a21e30fa88e211e2ca ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Gelée Micellaire Démaquillante 250 ml ]]></title>
<g:id>79d86335-ab59-4661-9cc7-d824d37f1639</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat gelée micellaire démaquillante 250 ml?79d86335-ab59-4661-9cc7-d824d37f1639 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Gelée Micellaire Démaquillante 250 ml est une gelée ultra-sensorielle et sans rinçage, qui démaquille, apaise et rafraîchit en un seul geste le visage et les yeux.</p>
<p>Composée à plus de 99% d'ingrédients d'origine naturelle, elle élimine en douceur tous types de maquillage (même waterproof), résidus de pollution et impuretés sans dessécher la peau. Sa formule associe des ingrédients clés Bio :</p>
<ul><li>Le miel au pouvoir hydratant et antioxydant.</li>
<li>Le thé vert aux v ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000794</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9519fab854b89107151e82f3b828bc2841148e5a24bda3dc444dbabb083e5b84 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Soin Contour des Yeux 15 ml ]]></title>
<g:id>0ed5158f-28f4-41ec-b221-8ce6c900fc9a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat soin contour des yeux 15 ml?0ed5158f-28f4-41ec-b221-8ce6c900fc9a ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Soin Contour des Yeux 15 ml est un soin anti-fatigue triple action spécifiquement conçu pour la zone très fragile du contour de l'œil. Il agit sur l'ensemble de la zone regard : rides, poches et cernes.<br />Sa formule associe ces ingrédients clés :</p>
<ul><li>Extrait de miel Bio, huile de grenade et acide hyaluronique hydratants et repulpants.</li>
<li>Extrait d'amande douce au pouvoir liftant.</li>
<li>Fleurs d'aubépine et de jasmin sélectionnés pour leur action sur les cernes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000770</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8724470bcf30321208df0c74928da55899d86f4b6a8f5dcf6da5efa9a6af43dd ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Soin Repulpeur Intense 30 ml ]]></title>
<g:id>abe164f9-a8e7-48b9-8694-873326cc3130</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat soin repulpeur intense 30 ml?abe164f9-a8e7-48b9-8694-873326cc3130 ]]></link>
<g:price><![CDATA[ 1760.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Soin Repulpeur Intense 30 ml est un soin anti-âge intensif qui hydrate intensément et corrige les signes visibles du vieillissement : déshydratation, relâchement, manque d'éclat, perte d'élasticité.<br />Sa formule associe des ingrédients clés :</p>
<ul><li>L'acide hyaluronique hautement concentré : hydratant, repulpant, combleur de rides.</li>
<li>L'Iparzine®4A, actif breveté exclusif, anti-âge et raffermissant.</li>
<li>Le ginkgo biloba oxygénant et anti-radicalaire.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000718</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/96c141aa69d93e88e137aaa04fb33402fb1dafe5ce50d7b8b6669b8aad8d90f6 ]]></g:image_link>
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
<title><![CDATA[ Coup d'Éclat Sérum Anti-Rides Raffermissant 30 ml ]]></title>
<g:id>6b62e56e-69e2-41eb-ba88-c34f1442296c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'Éclat sérum anti-rides raffermissant 30 ml?6b62e56e-69e2-41eb-ba88-c34f1442296c ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coup d'Éclat Sérum Anti-Rides Raffermissant 30 ml est un sérum formulé pour constituer une véritable cure anti-âge, à l'effet remodelant, raffermissant, en plus de sa vertu anti-rides.<br />Véritable concentré d'actifs anti-âge sélectionnés pour leur haute efficacité, ce sérum hydrate intensément la peau pour l'aider à retrouver un aspect ferme et tonique. Sa formule associe :</p>
<ul><li>Le collagène marin hydratant et repulpant.</li>
<li>Le complexe peptidique Idealift® + Matrixyl synthe'6® ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000749</g:gtin>
<g:brand><![CDATA[ ECRINAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae0e7c444ff445c9e9e02745cd5b3d59cd151e307130b4f53164e9e223a52ad1 ]]></g:image_link>
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
<title><![CDATA[ Coup d'éclat Lift & Lumières 3 ampoules x 2 + 1 roller massage ]]></title>
<g:id>f24ce205-0b85-4e96-a266-89e264cb294c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/coup-d'éclat lift & lumières 3 ampoules x 2 + 1 roller massage?f24ce205-0b85-4e96-a266-89e264cb294c ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Anti-rides et raffermissante l'ampoule Lift &amp; Lumière COUP D’ECLAT® est votre atout pour une mise en beauté immédiate et durable (pendant 8 heures). Le teint est plus lumineux, les rides sont moins visibles et les signes de fatigues diminués. Bonus, elle fixe le maquillage.</span><br /><span>Convient aux peaux sensibles.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323030000817</g:gtin>
<g:brand><![CDATA[ COUP D'ECLAT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/21e6daf6677d0937ceacaa6daca71aff205bdf2cea846ae87a0c3787fcd5f6a9 ]]></g:image_link>
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
<title><![CDATA[ Crinex Brossettes Interdentaires Micro B/6 ]]></title>
<g:id>155a9046-598e-4d9e-8f4d-db46886b3229</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-brossettes interdentaires micro b/6?155a9046-598e-4d9e-8f4d-db46886b3229 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les brossettes interdentaires micro B/6 permettent de nettoyer les espaces interdentaires <span>et d'éliminer la plaque dentaire</span> pour une hygiène bucco-dentaire irréprochable.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343582470</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0bb5e757f48ce8c930af873c2b94e3e465143f89f8f04e91dae793819e0bafb8 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex PHB Plus Ultrafine boîte de 6 brossettes ]]></title>
<g:id>e3b16c5b-e23f-41ba-99b2-18626f976c29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb plus ultrafine boîte de 6 brossettes?e3b16c5b-e23f-41ba-99b2-18626f976c29 ]]></link>
<g:price><![CDATA[ 675.00 EUR ]]></g:price>
<description><![CDATA[ <p>La brossette PHB Plus Ultrafine de Crinex format 6 unités est équipée d'une brosse de 2 mm de diamètre et des fibres en Tynex pour nettoyer vos espaces interdentaires très étroits.</p>
<p>La Brossette Ultrafine PHB Plus de Crinex (blister 6 unités) est une brossette interdentaire permettant de nettoyer les espaces plus étroits entre vos dents.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401565361501</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4b688ef0c9b2c2a8a9a7b506f2c9f967e392b5eb8544a9e2c2f1a2dd7b59c5a1 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex PHB brosse à dents adulte ]]></title>
<g:id>21f6750f-d0de-45e5-a2e2-8355c0cc23a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb brosse à dents adulte?21f6750f-d0de-45e5-a2e2-8355c0cc23a9 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>La brosse à dents PHB Adulte est une brosse à dents spécialement conçue par des chirurgiens dentistes pour les adultes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401365024125</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/760447de2e27cda6a9f66f17f484b0efaabc07c77622b98a08122a19bc17cf5d ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex PHB brosse à dents junior ]]></title>
<g:id>ce6ffe34-4db5-44e5-badf-9e9bc1c4e9af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb brosse à dents junior?ce6ffe34-4db5-44e5-badf-9e9bc1c4e9af ]]></link>
<g:price><![CDATA[ 280.00 EUR ]]></g:price>
<description><![CDATA[ <p>La brosse à dents PHB Junior est une brosse à dents spécialement conçue pour les grands enfants.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401370117744</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb0890b7e18c510b3a50e830b5f2b5e5a6c7bdb9dcb9da7a16f13a93fcb56140 ]]></g:image_link>
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
<title><![CDATA[ Crinex Phb Brossettes Interdentaires Maxi x6 ]]></title>
<g:id>1fc5d2f8-d6ef-4da6-a13e-45055168a4f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb brossettes interdentaires maxi x6?1fc5d2f8-d6ef-4da6-a13e-45055168a4f5 ]]></link>
<g:price><![CDATA[ 675.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crinex PHB Plus 6 Brossettes Interdentaires Maxi pour nettoyer les espaces interdentaires et éliminer la plaque dentaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343582999</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1519b4e244b4318aa472a5745a269f1ea512cd01e9fa2613d891ae3dee264dac ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex Phb Brossettes Ultrafine 0.7 12 ]]></title>
<g:id>69815a0c-48bb-4a8d-ab04-18ccb21db665</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb brossettes ultrafine 0.7 12?69815a0c-48bb-4a8d-ab04-18ccb21db665 ]]></link>
<g:price><![CDATA[ 875.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crinex Phb Ultrafine GF 0.7 12 Brossettes Interproximales sont des accessoires d'hygiène bucco-dentaire indiqués pour le nettoyage des espaces interdentaires, en complément de la brosse à dents.<br />Cette brossette permet de mieux se protéger contre les caries et maladies parodontales. Elle peut être utilisée dans les espaces interdentaires, avec les implants, appareils d'orthodontie ou prothèses fixes.</p>
<p>Diamètre de la brossette : 2,0 mm.<br />Diamètre de la tige : 0,45 mm.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401581780744</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/89ea12d4fceaee3716fbc303dcef96d6943273c5774698900cd010e8a0927b1d ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex Phb Plus Brossettes Interdentaires Coniques x6 ]]></title>
<g:id>c4fc37e0-64ec-49e4-9a09-08444c3592ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb plus brossettes interdentaires coniques x6?c4fc37e0-64ec-49e4-9a09-08444c3592ee ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crinex PHB Plus 6 Brossettes Interdentaires Coniques pour nettoyer les espaces interdentaires et éliminer la plaque dentaire.<br /><br /><span>Brossette prête à l'emploi, ne nécessitant aucun montage. Elle peut se plier et trouver le meilleur angle de brossage. On peut allonger le manche en adaptant le capuchon.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343582760</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d9a1540c7be8bfedd168f9dc7a71e204f5dfed9c41fd2bed30dd950a6b9fa431 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex Phb Plus Brossettes Interdentaires Cylindriques x6 ]]></title>
<g:id>cc007891-9325-44cb-83e7-90c1013f4552</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb plus brossettes interdentaires cylindriques x6?cc007891-9325-44cb-83e7-90c1013f4552 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crinex PHB Plus 6 Brossettes Interdentaires Cylindriques pour nettoyer les espaces interdentaires et éliminer la plaque dentaire.<br /><br /><span>Brossette prête à l'emploi, ne nécessitant aucun montage. Elle peut se plier et trouver le meilleur angle de brossage. On peut allonger le manche en adaptant le capuchon.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343582821</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0aa52b8de9863b93e67bc46f582c0b52cb964e52b9e2d12abd6e977d86afb431 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex Phb Plus Brossettes Mini x6 ]]></title>
<g:id>0b48df1e-f4f9-439b-aed7-2479470fe167</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb plus brossettes mini x6?0b48df1e-f4f9-439b-aed7-2479470fe167 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
<div id="tabs-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom">Compacte. Tête avec fibres bicolores, filaments blancs pour détecter les saignement des gencives, filaments noirs pour détecter la plaque bactérienne. Manche anatomique avec surface antidérapante. Munie d'un capuchon protecteur se fixant à la base du manche et permettant de le rallonger. Mini plus : diamètre des brins 3 mm. Code couleur jaune.</div>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343582531</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0bb15ec7e8f93b485f897e36e791900297088b6648bc1731cfa2c997dc202337 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex Phb Plus Conique Plus 1.3 12 Brossettes ]]></title>
<g:id>09cb89ac-6eb9-4b4c-b280-a808df6e6a01</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-phb plus conique plus 1.3 12 brossettes?09cb89ac-6eb9-4b4c-b280-a808df6e6a01 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crinex Phb Plus Conique Plus 1.3 12 Brossettes Interproximales sont des accessoires d'hygiène bucco-dentaire indiqués pour le nettoyage des espaces interdentaires, en complément de la brosse à dents.<br />Cette brossette permet de mieux se protéger contre les caries et maladies parodontales. Elle peut être utilisée dans les espaces interdentaires, avec les implants, appareils d'orthodontie ou prothèses fixes.</p>
<p>Diamètre de la brosse : 3,5 à 6 mm.<br />Diamètre de la tige : 0,8 mm.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401581780683</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ee6f4e93177de67e3af043a63fd93ab442f8b7cf9e1cfdcb59587e950743d804 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Crinex brossettes interdentaires micro 12 brossettes ]]></title>
<g:id>7c5fe232-74f3-46db-8cc0-f78d9ec93d23</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/crinex-brossettes interdentaires micro 12 brossettes?7c5fe232-74f3-46db-8cc0-f78d9ec93d23 ]]></link>
<g:price><![CDATA[ 875.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">
<div id="tabs-1" class="ui-tabs-panel ui-widget-content ui-corner-bottom">Compacte. Tête avec fibres bicolores, filaments blancs pour détecter les saignement des gencives, filaments noirs pour détecter la plaque bactérienne. Manche anatomique avec surface antidérapante. Munie d'un capuchon protecteur se fixant à la base du manche et permettant de le rallonger. Micro plus : diamètre des brins 2,4 mm. Code couleur vert.</div ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401343583071</g:gtin>
<g:brand><![CDATA[ CRINEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b4ba63c1f81c70b7705a47426bd6d1852bacdf0d1b1e18b7472cad4096ce035 ]]></g:image_link>
<g:product_type><![CDATA[ BROSSES À DENTS ET ACCESSOIRES DENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Culottes Jetables 4 Unités - Taille : L ]]></title>
<g:id>98ab95d2-61a0-425d-b9fe-b59b026c8c6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/culottes-jetables 4 unités - taille : l?98ab95d2-61a0-425d-b9fe-b59b026c8c6c ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Orgakiddy Culottes Jetables 4 Unités en non tissé sont idéales pour votre séjour en maternité, pour maintenir les protections périodiques sans risquer de tâcher vos sous-vêtements.<br /><br />En tissu doux et aux coutures extensibles, ces culottes extensibles sont confortables et non comprimantes, très agréables à porter.<br />- small : 38/40<br />- medium : 42/44<br />- large : 46/48</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700769900364</g:gtin>
<g:brand><![CDATA[ DENSMORE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25e91a5a33a33f31b19ea25b07917b17dfaa6aa20d9dc89e723266ecc5a2e35b ]]></g:image_link>
<g:product_type><![CDATA[ PROTECTIONS FEMININES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cuprum métallicum 9CH Homéopack 3 tubes granules ]]></title>
<g:id>30c901a1-3182-46f8-897d-dcd5772ee808</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cuprum-métallicum 9ch homéopack 3 tubes granules?30c901a1-3182-46f8-897d-dcd5772ee808 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cuprum Metallicum</span><span> est un médicament homéopathique des laboratoires </span><span>Boiron</span><span>.</span></p>
<p><span><span>Destiné à différentes pathologies, </span><span>Cuprum Metallicum</span><span> de </span><span>Boiron</span><span> se consomme selon diverses posologies à définir avec un médecin spécialisé.</span></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400302559065</g:gtin>
<g:brand><![CDATA[ BOIRON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28de4fa7e12932625cedae4bc41a02e81c56ceabe8b266241459b7461d8b6f21 ]]></g:image_link>
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
<title><![CDATA[ Curaprox Brosses Prime Refill CP 0,9 - 4,0 mm 8 recharges ]]></title>
<g:id>3a1564c6-3f25-4cfc-b61c-9f16d8e4678e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-brosses prime refill cp 0,9 - 4,0 mm 8 recharges?3a1564c6-3f25-4cfc-b61c-9f16d8e4678e ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product--left-column">
<div class="tab--content-main">Ce sont des brosses interdentaires, elles aident à éliminer les bactéries entre les dents et même entre les broches tout en étant conçues pour lutter contre la mauvaise haleine, protéger l'émail et prévenir les maladies des gencives.</div>
<div class="tab--logo-brand"></div>
<div class="tab--content-brand"></div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412426540</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d6cc708dea25254571f935cc37cfbc34aeaab224cbb077c2528fd2fe4e0afe56 ]]></g:image_link>
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
<title><![CDATA[ Curaprox Brossettes  Prime+ CPS 07  Lot de 8 ]]></title>
<g:id>e63e94e0-5636-45ba-95f2-bbb3f940159b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-brossettes  prime+ cps 07  lot de 8?e63e94e0-5636-45ba-95f2-bbb3f940159b ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Certainement les brossettes les plus fines au monde. Les CPS prime peuvent se faufiler dans des espaces très rapprochés et lutter contre les inflammations et la mauvaise haleine. Une fois par jour suffit.</p>
<p>Les CPS prime sont les plus fines brossettes sur le marché et elles disposent d’une durée de vie sans égale. D’ailleurs, la CPS prime 07 est la deuxième plus petite brossette interdentaire et s’insère également dans des espaces serrés. Le système d’encliquetage permet d’utiliser son m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412426526</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b350fbf7f7c1e40699669b39c8ac970bb2602bea0085eccd9dde5dbf35fc7f13 ]]></g:image_link>
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
<title><![CDATA[ Curaprox CPS - 08 Prime Start Brossettes x5 + 1 manche + 1 manche UHS 470 ]]></title>
<g:id>e9d2e787-3abd-4dc0-a6a8-9609d77d0b54</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-cps - 08 prime start brossettes x5 + 1 manche + 1 manche uhs 470?e9d2e787-3abd-4dc0-a6a8-9609d77d0b54 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <div class="value">
<div>
<div>
<div>
<p><span>Les brossettes Interdentaires Roses CPS 08 Prime de Curaprox</span> nettoient même les espaces interdentaires étroits et permettent de prévenir efficacement les inflammations et la mauvaise haleine. Une utilisation par jour suffit. Grâce au système d’encliquetage, chaque brossette interdentaire CURAPROX s’adapte à chaque manche. Le principe est très simple: retirez l’ancienne brossette, insérez la nouvelle et c’est reparti. Toutes nos brossettes int ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412427769</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c269ace0311b7922b5522e5c3e3c00a69f71dd6d2cbb35e406c48ab7e4cfb0f ]]></g:image_link>
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
<title><![CDATA[ Curaprox CPS 07 - Prime Start  5 Brossettes + 2 Manches ]]></title>
<g:id>52748f88-c173-4c68-bb2b-88fb7c0f6829</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-cps 07 - prime start  5 brossettes + 2 manches?52748f88-c173-4c68-bb2b-88fb7c0f6829 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>e <span>set CPS 07 Prime Start</span> de <span>Curaprox</span> est composé de 2 manches : 1 manche UHS 409 + 1 manche UHS 470 et de 5 brossettes interdentaires. A utiliser en complément d’un brossage des dents traditionnel, les <span>brossettes interdentaires</span> facilitent le nettoyage des dents en éliminant avec plus de précision les résidus alimentaires et la <span>plaque dentaire</span> susceptibles de fragiliser votre dentition et votre gencive. Les brossettes CPS 07 du set Cura ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412427707</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3fdb37859586a7b9bc4863cc347452defca45feff9a5aafc238827c75d174aaa ]]></g:image_link>
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
<title><![CDATA[ Curaprox CPS 09 Prime start 5 brossettes interdentaires + manche ]]></title>
<g:id>614da306-d853-4e7e-a6da-76527719f5c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-cps 09 prime start 5 brossettes interdentaires + manche?614da306-d853-4e7e-a6da-76527719f5c2 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ces brossettes interdentaires nettoient même les espaces interdentaires étroits car ce sont sans conteste les plus fines – elles permettent de prévenir efficacement les inflammations et la mauvaise haleine.</p>
<p>Une utilisation par jour suffit. La CPS 09 prime est la deuxième plus grande brossette interdentaire CPS prime.</p>
<p>Grâce au système d’encliquetage, chaque brossette interdentaire Curaprox s’adapte à chaque manche. Le principe est très simple: retirez l’ancienne brossette, insére ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412427837</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41611d8f4d2203685b793939af9275bd4f5b8cf4dc1f3074c829f45cc01d8d02 ]]></g:image_link>
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
<title><![CDATA[ Curaprox Cps 11 Brossettes 1.1-5mm+Manche ]]></title>
<g:id>f47fa7fe-ace1-47a6-b01f-49ba60ae2618</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-cps 11 brossettes 1.1-5mm+manche?f47fa7fe-ace1-47a6-b01f-49ba60ae2618 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filaments ultrafins avec effet parapluie </p>
<p></p>
<p>Fil métallique de qualité chirurgical pour les plus petits espaces interdentaires </p>
<p></p>
<p>Longue durée de vie</p>
<p></p>
<p>Système à encliquetage pour tous les manches</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412427905</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9d1ef5c974416fe5149093b7da5593ffe4e8a0ed09fd9ba79dc0d24b732cca55 ]]></g:image_link>
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
<title><![CDATA[ Curaprox Cps Prim Star Mix 6 Pièces+2 Manches ]]></title>
<g:id>8b6e4698-4431-4fcc-b7b6-6faf5fa0d869</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-cps prim star mix 6 pièces+2 manches?8b6e4698-4431-4fcc-b7b6-6faf5fa0d869 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <h2><span>Curaprox CPS 409 MIX PRIME PLUS HANDY - un ensemble de brossettes interdentaires</span></h2>
<h3><span><span>Un ensemble de brossettes interdentaires Curaprox CPS 409 MIX est conçu pour le nettoyage de divers espaces interdentaires. </span><span>La pointe de la brossette interdentaire, comme les brossettes standards, est en fibre de Curen, ce qui rend la pointe extrêmement flexible. </span><span>Cela permet le nettoyage le plus complet des espaces interdentaires.</span></span></h3>
<p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412430745</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1c5d86031c1298a8c5fd425865c55942277922ba2c66031c89531dcc592032fc ]]></g:image_link>
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
<title><![CDATA[ Curaprox Prime Refill CPS 06  8 Pièces ]]></title>
<g:id>746b7439-b968-4372-8aa6-07699fb26124</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/curaprox-prime refill cps 06  8 pièces?746b7439-b968-4372-8aa6-07699fb26124 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La brossette interdentaire de rechange Curaprox Prime Refill remplace votre ancienne brossette et garantit un soin parfait de votre cavité buccale.</p>
<p><span>Le produit :</span></p>
<ul><li>remplacement facile</li>
<li>élimine parfaitement les impuretés présentes dans les espaces interdentaires</li>
<li>réduit les risque d’apparition de caries dentaires</li>
<li>évite l’inflammation de la gencive et la mauvaise haleine</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612412426519</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1c66f09d688343003238ed1150178030205a9240206d10a1437415eb9f262e20 ]]></g:image_link>
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
<title><![CDATA[ Cys-Control Canneberge 60 Gummies ]]></title>
<g:id>49468913-8923-4bf0-a07e-6c9ef6ff90c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control canneberge 60 gummies?49468913-8923-4bf0-a07e-6c9ef6ff90c8 ]]></link>
<g:price><![CDATA[ 1895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control Canneberge 60 Gummies est un complément alimentaire sous forme de gomme destiné à toute la famille, concentré en canneberge 100% d'origine naturelle.</p>
<p>Goût canneberge et cerise.</p>
<p>Sans sucre.<br />Arômes naturels.<br />Sans colorant artificiel.<br />Sans gluten.</p>
<p>Vegan.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504477</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dfe1b97b2b94a722e8cf91a7022b56326a88a2c8d3a21a6acc6827f1c71c4b26 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > SANTÉ PREVENTION > SANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Cys-Control Confort Urinaire 20 Gélules ]]></title>
<g:id>139bdfb0-ac13-4a22-b94c-d2c31a44a58c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control confort urinaire 20 gélules?139bdfb0-ac13-4a22-b94c-d2c31a44a58c ]]></link>
<g:price><![CDATA[ 1180.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control est un complément alimentaire destiné aux personnes connaissant des gênes urinaires, et désirant équilibrer et améliorer leur système urinaire.</p>
<p>Cys-Control des laboratoires Arkopharma est un complément alimentaire destiné aux personnes souffrant de gênes urinaires, et désirant équilibrer et améliorer leur système urinaire.</p>
<p>En effet, ce complément alimentaire apporte 36mg de proanthocyanidines (PAC) par jour.</p>
<p>La consommation quotidienne de 36mg de pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578830132439</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6eac4b81cfdfee964f36d38daf1b012e1660ca8a4df2ec383747650f3845dfd5 ]]></g:image_link>
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
<title><![CDATA[ Cys-Control Confort Urinaire 60 Gélules ]]></title>
<g:id>5e41181c-d716-4c6f-b657-478eb32b29f4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control confort urinaire 60 gélules?5e41181c-d716-4c6f-b657-478eb32b29f4 ]]></link>
<g:price><![CDATA[ 2860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control Confort Urinaire 60 Gélules est un complément alimentaire à base d'extraits de canneberge et de bruyère. Il apporte 36 mg de proanthocyanides totaux (PACs) par jour. La bruyère contribue aux fonctions d'élimination de l'organisme et favorise un bon confort urinaire.</p>
<p>La formule est 100% d'origine végétale. Les gélules sont végétales.</p>
<p>Sans dioxyde de titane. Sans colorant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401596137441</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b0a110c5a7e8ee1bde7a5c24a4b01cae2cb064defdf9d6f69dc051a16cd77b23 ]]></g:image_link>
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
<title><![CDATA[ Cys-Control Confort Urinaire Lot de 2 x 20 Gélules ]]></title>
<g:id>2b254410-ca45-4407-8418-a2015046e13f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control confort urinaire lot de 2 x 20 gélules?2b254410-ca45-4407-8418-a2015046e13f ]]></link>
<g:price><![CDATA[ 2120.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control Confort Urinaire Lot de 2 x 20 Gélules est un complément alimentaire à base d'extraits de canneberge et de bruyère. Il apporte 36 mg de proanthocyanides totaux (PACs) par jour. La bruyère contribue aux fonctions d'élimination de l'organisme et favorise un bon confort urinaire.</p>
<p>Sans dioxyde de titane. Sans colorant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401526030330</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/125d626cbcc9b86228289770c6c002b413dd39d92bb04c12f37e595010f85783 ]]></g:image_link>
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
<title><![CDATA[ Cys-Control Confort Urinaire Lot de 2 x 20 Sachets ]]></title>
<g:id>b1ada6cf-4fc7-4967-94d5-4c620f4ad723</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control confort urinaire lot de 2 x 20 sachets?b1ada6cf-4fc7-4967-94d5-4c620f4ad723 ]]></link>
<g:price><![CDATA[ 2195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control Confort Urinaire Lot de 2 x 20 Sachets est un complément alimentaire avec édulcorant, sous forme de poudre, à base de canneberge.</p>
<p>Il convient à toute la famille à partir de 3 ans, y compris les femmes enceintes et allaitantes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401544739598</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ce8aff373273af347e2713455ec4a270f52d27a0d883451ad53af72d91c51589 ]]></g:image_link>
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
<title><![CDATA[ Cys-Control Flash 10 Gélules + 10 Capsules ]]></title>
<g:id>54c50a6d-ec93-43d2-8829-b145ea6a4040</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control flash 10 gélules + 10 capsules?54c50a6d-ec93-43d2-8829-b145ea6a4040 ]]></link>
<g:price><![CDATA[ 920.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control Flash 10 Gélules + 10 Capsules est un complément alimentaire à base de Bruyère, Canneberge et de 4 Huiles Essentielles Botaniquement et Biochimiquement Définies (Niaouli, Cannelle de Ceylan, Romain, Sarriette des montagnes).</p>
<p>La Bruyère contribue aux fonctions d'élimination de l'organisme et favorise un bon confort urinaire.</p>
<p>Sans dioxyde de titane. Sans colorant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401563131601</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/722a8090ce8077920a4250bbd3973144c39d62c6663ffb41389cf47274b6bb24 ]]></g:image_link>
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
<title><![CDATA[ Cys-Control Fort 10 Sachets + 5 Sticks à Diluer ]]></title>
<g:id>105217e3-0c16-4afe-a931-7390921db276</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cys-control fort 10 sachets + 5 sticks à diluer?105217e3-0c16-4afe-a931-7390921db276 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Cys-Control Fort 10 Sachets + 5 Sticks à Diluer est un complément alimentaire à la formule renforcée pour agir sur le bon fonctionnement de la sphère urinaire. Cette formule contient :</p>
<ul><li>de la bruyère qui contribue aux fonctions d'élimination de l'organisme et favorise ainsi un bon confort urinaire,</li>
<li>du D-mannose, naturellement produit en petite quantité par l'organisme,</li>
<li>de la canneberge dosée en ProAnthoCyanidines de type A (ou PACs),</li>
<li>2 souches  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503074</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9afe8ca47ae3838f5cafefcb5828a6ba2b7bcbc27e46465453ca8eef0b4d3bb ]]></g:image_link>
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
<title><![CDATA[ Cystiphane Anagen Croissance des Cheveux 90 comprimés ]]></title>
<g:id>69a8fc9c-0762-4d84-97de-0f093cd1a071</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cystiphane-anagen croissance des cheveux 90 comprimés?69a8fc9c-0762-4d84-97de-0f093cd1a071 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bailleul-Biorga Cystiphane Anagen Croissance des Cheveux 90 comprimés est un complément alimentaire sous forme de comprimés. À base de cystine, roquette, vitamine B6, zinc, sélénium et biotine, il est destiné à la croissance du cheveux lors de situations chroniques : âge, hérédité.</span><br /><span>L'extrait de roquette (Eruca Sativa) participe à la stimulation du bulbe du cheveux et favorise sa croissance.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660398505197</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2052d0ecaa4364f3328770320c8c873a5c2c8334f5a180a33da1b7f76132273d ]]></g:image_link>
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
<title><![CDATA[ Cystiphane Fort Cheveux et Ongles 120 Comprimés ]]></title>
<g:id>f49d7439-075f-48a1-9f30-7c768e4103f7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cystiphane-fort cheveux et ongles 120 comprimés?f49d7439-075f-48a1-9f30-7c768e4103f7 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bailleul-Biorga Cystiphane Fort Cheveux et Ongles 120 Comprimés est un complément alimentaire à base de cystine d'origine végétale, arginine, zinc et vitamine B6. Il est particulièrement recommandé en cas de situation réactionnelle : stress, régime, changement de saison.</p>
<ul>
<li>La vitamine B6 contribue à la synthèse normale de la cystéine ;</li>
<li>le zinc contribue au maintien de cheveux et d'ongles normaux et à protéger les cellules contre le stress oxydatif.</li>
</ul>
<p>Les cheveu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660398504985</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c57a9478168aaf8ee1d55b74e5835fe4169e6efa34824e0cb02dbf561d8dcd9c ]]></g:image_link>
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
<title><![CDATA[ Cytolnat Centella crème dermatologique, 50ml ]]></title>
<g:id>c7d2e77b-32f4-4409-a9cf-1440b4cf53c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cytolnat-centella crème dermatologique, 50ml?c7d2e77b-32f4-4409-a9cf-1440b4cf53c0 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Centella Asiatica, de type semi-aquatique, est connue pour ses propriétés apaisantes sur les démangeaisons et les irritations de l'épiderme, grâce à l'action de ses</p>
<p>stéroïdes naturels. Elle calme également les brûlures et accélère la cicatrisation des tissus. Grâce à sa formulation sous forme de crème, avec une émulsion d'huile dans</p>
<p>l'eau, CENTELLA Crème dermatologique des laboratoires CYTOLNAT présente en outre un fort pouvoir pénétrant et régénérant, et permet de restaurer  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401321285669</g:gtin>
<g:brand><![CDATA[ CYTOLNAT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/77df33e1b28382e460150106c4590ee3f48c45787eec44f50d200da6beff0af7 ]]></g:image_link>
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
<title><![CDATA[ Cytolnat CytolSlim crème amincissante et raffermissante 200ML ]]></title>
<g:id>a265c815-040c-4896-babd-48c875a9a06d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cytolnat-cytolslim crème amincissante et raffermissante 200ml?a265c815-040c-4896-babd-48c875a9a06d ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <div class="value">
<div>
<div>
<div>
<p><span>La Crème Amincissante et Raffermissante CYTOLSLIM® de Cytolnat</span> s’utilise en application locale sur les zones que l’on souhaite affiner et remodeler : cuisses, fesses, hanches, ventre… Appliquer une noisette deux fois par jour, en massant pour bien faire pénétrer la crème. Cure d’attaque : 2 applications quotidiennes pendant deux mois consécutifs. Cure d’entretien : 2 applications quotidiennes sur un rythme de deux semaines consécutives chaque ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360619944</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d9554e6765b04def82d8636219eceddc95da3f879c0f5b187baecad81a970519 ]]></g:image_link>
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
<title><![CDATA[ Cytolnat Gel Lavant Extra doux 500ml ]]></title>
<g:id>5b21754f-19ca-45e7-a683-78938661d322</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cytolnat-gel lavant extra doux 500ml?5b21754f-19ca-45e7-a683-78938661d322 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gel lavant destinée à la toilette quotidienne du corps, des cheveux et du visage pour peaux sensibles et sèches.</p>
<p>Convient à toute la famille : Adultes, enfant et nourrissons</p>
<p>Destinée à toute la famille, CYTOLNAT® GEL LAVANT ULTRA DOUX est utilisé pour la toilette quotidienne du corps, des cheveux et du visage. CYTOLNAT® GEL LAVANT ULTRA DOUX est spécifiquement destiné à la toilette quotidienne des peaux sensibles et fragilisées.</p>
<p><span>L’extrait sec d’aloe Vera </span>est  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701138700011</g:gtin>
<g:brand><![CDATA[ CYTOLNAT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/afddca2fd2533b8972f7deab1c3909aa9e486019599e3d36cda3cab9ffd14a0c ]]></g:image_link>
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
<title><![CDATA[ Cytolnat Selenium 50ml ]]></title>
<g:id>af69cc55-7565-43b0-b500-0031e03b6627</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cytolnat-selenium 50ml?af69cc55-7565-43b0-b500-0031e03b6627 ]]></link>
<g:price><![CDATA[ 1365.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Crème de soin dermatologique anti-âge, Hypoallergénique.</p>
<p class="p1">Prévient et ralentit les effets du veillissement cutané. </p>
<p class="p1">Extrait d'algue naturellement riche en sélénium organique - Biomimétique.</p>
<p class="p1">Sa formulation novatrice, riche en sélénium organique marin extrait d'une algue (Thalassiosira pseudonana), lui confère une efficaité anti-âge intense.</p>
<p class="p1">En apportant le sélénium oligo-élément nécessaire au fonctionnement de la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401376190857</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a57a2cfa31c56ca9687a51b7c4b1c0aee199a377fef02d2cb3ffebc93ccd7548 ]]></g:image_link>
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
<title><![CDATA[ Cytolnat centella crème apaisante réparatrice 100ml ]]></title>
<g:id>9fd5a168-630c-4c0d-bb49-3722506e5814</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/cytolnat-centella crème apaisante réparatrice 100ml?9fd5a168-630c-4c0d-bb49-3722506e5814 ]]></link>
<g:price><![CDATA[ 1120.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Centella asiatica est utilisé depuis plus de 3000 ans en médecine traditionnelle chinoise, malaisienne et indienne comme cicatrisant, mais également pour le traitement des maladies cutanées. En Europe, c’est partir du 19ème siècle que le Centella asiatica a commencé à intéresser les chercheurs. En 1852, Boileau, médecin français de l’île Maurice puis Hunter en 1855 dans les hôpitaux de Madras, l’utilisèrent dans le traitement de la lèpre.</p>
<p>Le Centella asiatica était aussi utilisé com ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401376191168</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c17596cca6e83b243a54c1fd3f1d88a37cc494627bbe1167d4d4a71707ff36b1 ]]></g:image_link>
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
<title><![CDATA[ Cérave Crème mains réparatrice 100 ml ]]></title>
<g:id>61ad0322-6f79-4317-aae5-b6d37c2ff7f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/c-rave crème mains réparatrice 100 ml?61ad0322-6f79-4317-aae5-b6d37c2ff7f6 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p class="product-details__description">La Crème Mains Réparatrice de CeraVe est un soin hydratant, nourrissant et réparateur pour les mains sèches à très sèches, abimées ou bien fragilisées par les agressions quotidiennes. Elle est enrichie à l'<a href="https://www.cerave.fr/nos-ingredients/acide-hyaluronique" class="generic-event">acide hyaluronique</a> pour maintenir la peau hydratée, à la <a href="https://www.cerave.fr/nos-ingredients/niacinamide" class="generic-event">niacinamide</a> pour a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875763967</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ff59303dfb8ff9c7b809fc9253bf1659509ab641e21943ca4ba59446bba1399 ]]></g:image_link>
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
<title><![CDATA[ Céruprotect Solution auriculaire pour la prévention des otites 10 ml Bausch + Lomb ]]></title>
<g:id>b7b304c3-9318-499f-aacf-d29217c0949e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/c-ruprotect solution auriculaire pour la prévention des otites 10 ml bausch + lomb?b7b304c3-9318-499f-aacf-d29217c0949e ]]></link>
<g:price><![CDATA[ 560.00 EUR ]]></g:price>
<description><![CDATA[ <p>Céruprotect est une solution auriculaire permettant :</p>
<p>- d'aider à la prévention des otites</p>
<p>- d'atténuer le gonflement du conduit auditif et possède des propriétés astringentes</p>
<p>- d'aider à maintenir une humidité optimale</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000842</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78aa090b2ffaca896d147b44d0f3755d0596b95017ddf3865dadcce8b0e91f56 ]]></g:image_link>
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
<title><![CDATA[ D-Stress Jour & Nuit 60 comprimés ]]></title>
<g:id>0ba82f04-e24a-4d8f-af4a-cb832050287d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/d-stress jour & nuit 60 comprimés?0ba82f04-e24a-4d8f-af4a-cb832050287d ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>D-Stress Jour &amp; Nuit</span> est un complément alimentaire proposé par le laboratoire <span>Synergia</span>. Sous forme de comprimés, il aide à <span>gérer le stress</span> et <span>améliorer le</span> <span>sommeil</span>.</p>
<p>Le stress et le sommeil sont interdépendants. Une journée stressante nuit à la qualité et à la durée du sommeil. Inversement, une mauvaise nuit diminue la résistance au stress la journée, tout en augmentant la fatigue. Dans certaines situations, un cercle v ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760139290761</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4554512489ee6e6b93488d297955e6433c2c97db20614675b87fa86633ec9200 ]]></g:image_link>
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
<title><![CDATA[ D-Stress Relaxation - CBD 50mg & Ashwagandha, 30 capsules ]]></title>
<g:id>0076111d-ba18-434d-b5ca-9dd0a5d0938f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/d-stress relaxation - cbd 50mg & ashwagandha, 30 capsules?0076111d-ba18-434d-b5ca-9dd0a5d0938f ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez D-Stress Relaxation Capsules CBD, un complément alimentaire du laboratoire Synergia formulé à partir d'<span>huile de CBD 10%</span> et d'extrait d'<span>Ashwagandha KSM-66®.</span></p>
<p>Ces capsules ont été formulées afin de contribuer à la relaxation, au bien-être général et à un équilibre émotionnel normal.</p>
<p>Complément alimentaire riche en Oméga-3-6-9. Format capsule pratique et <span>neutre en gout.</span></p>
<p><span>100% d'origine naturel - Sans THC.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760139290877</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e1588950867ecd4bb63b3cd663e1350529690bf62d45fcf2566d4a8219bae3e ]]></g:image_link>
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
<title><![CDATA[ D-Stress Sommeil 40 Comprimés ]]></title>
<g:id>bdd1ea38-519a-40e0-b6d9-9b3a2272edf0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/d-stress sommeil 40 comprimés?bdd1ea38-519a-40e0-b6d9-9b3a2272edf0 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Synergia D-Stress Sommeil 40 Comprimés est un complément alimentaire à base d'actifs pour un meilleur sommeil et une relaxation optimale :</p>
<p>- le pavot de Californie contribue à une relaxation optimale, améliore l'endormissement, réduit les réveils nocturnes et procure un sommeil réparateur et naturel,</p>
<p>- le magnésium et les vitamines B2, B3, B5 et B6 contribuent à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760139290518</g:gtin>
<g:brand><![CDATA[ IDIM PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13fb5ebbab2becc5ec188d7ae50167ccded72b113957ae94d8a9d1700b3fedff ]]></g:image_link>
<g:product_type><![CDATA[ STRESS ET SOMMEIL ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ DARPHIN Cr dermabrasion anti-âge Pot/50ml ]]></title>
<g:id>2a142e77-9cd7-40c5-9f30-8f5272adc20b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-cr dermabrasion anti-âge pot/50ml?2a142e77-9cd7-40c5-9f30-8f5272adc20b ]]></link>
<g:price><![CDATA[ 7890.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381042226</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aedd5cd07ad94583abbc54e8068d24f87575175b7e0c181c6d55180b7da7e04c ]]></g:image_link>
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
<title><![CDATA[ DARPHIN HYDRASKIN LIGHT Gel crème Pot/50ml ]]></title>
<g:id>130ca740-bda4-4c18-b106-ea23ce48e189</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-hydraskin light gel crème pot/50ml?130ca740-bda4-4c18-b106-ea23ce48e189 ]]></link>
<g:price><![CDATA[ 5390.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381004644</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb487ee923340a8d7c9ae99da7012e87652db3a6f4e040c9d948dbb41c465457 ]]></g:image_link>
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
<title><![CDATA[ DEXERYL DM CR TB500G ]]></title>
<g:id>3aebc9a2-1aab-4261-9432-e039b54832af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dexeryl-dm cr tb500g?3aebc9a2-1aab-4261-9432-e039b54832af ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécialement formulé pour répondre aux besoins des peaux sèches de toute la famille, Dexeryl Crème est un dispositif médical indiqué dans le traitement d'appoint des états de sécheresse cutanée et de certaines affections de la peau telles que l'eczéma atopique, les états ichtyosiques, psoriasis, et des brûlures superficielles de faibles étendues.</p>
<p>Grâce à sa nouvelle formule optimisée, sans paraben, Dexeryl hydrate et répare efficacement la peau de votre visage et de votre corps, pour u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3573994006572</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5749eb166c4ab386a1775e710f8b899d4db6f7f23701e637f604e698994ca801 ]]></g:image_link>
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
<title><![CDATA[ DIY ORICULI ]]></title>
<g:id>27e82dde-89d8-4d20-8235-c8b26986d9ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/diy-oriculi?27e82dde-89d8-4d20-8235-c8b26986d9ba ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Oriculi en bambou 100% naturel. Réduit les déchets en se substituant aux cotons-tiges. Nettoie en douceur. Réutilisable à l'infini.</span><br /><span>Coloris aléatoire.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579510704</g:gtin>
<g:brand><![CDATA[ AXELLE MERCIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/270f0b680c3d7e5884b63e5ac2c7c7fc8ad2d13a6d8c64d0bda596e5afd945a6 ]]></g:image_link>
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
<title><![CDATA[ DODIE Sucette Physiologique +18mois X2 - Fille ]]></title>
<g:id>5948dc67-9669-4b50-b01c-d0c420f454bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dodie-sucette physiologique +18mois x2 - fille?5948dc67-9669-4b50-b01c-d0c420f454bf ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apaisez l'envie de succion de bébé avec DODIE Sucette Physiologique +18mois - Fille. Son bouclier tritan, confortable et léger qui permet à bébé de la garder en bouche facilement. Sa téterelle en silicone de forme biseautée, réversible, reste toujours bien positionnée dans la bouche de bébé.  Pourvue de nervures qui consolident sa résistance, cette sucette est idéale à l'arrivée des premières dents. Ses trous de ventilation favorisent la circulation de l'air et réduisent ainsi le risque d'irr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763502168</g:gtin>
<g:brand><![CDATA[ DODIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/72e2c764093ac5f2701ecedca62055a0c6c8bbd823d8b25e859f6dc615a42298 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ DODIE Sucette Physiologique +18mois X2 - Garçon ]]></title>
<g:id>d0db6762-5ec5-46d2-b8ff-2923ac794996</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dodie-sucette physiologique +18mois x2 - garçon?d0db6762-5ec5-46d2-b8ff-2923ac794996 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apaisez l'envie de succion de bébé avec DODIE Sucette Physiologique +18mois - Garçon. Son bouclier tritan, confortable et léger qui permet à bébé de la garder en bouche facilement. Sa téterelle en silicone de forme biseautée, réversible, reste toujours bien positionnée dans la bouche de bébé.  Pourvue de nervures qui consolident sa résistance, cette sucette est idéale à l'arrivée des premières dents. Ses trous de ventilation favorisent la circulation de l'air et réduisent ainsi le risque d'ir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700763502151</g:gtin>
<g:brand><![CDATA[ DODIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ca6e153a123b1909c038e390e630b1c4258650d0c193c0e3f8042e782ef5e35 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ DOUCENUIT SPRAY GORGE ANTI-RONFLEMENT SPR ]]></title>
<g:id>320965d1-d088-403f-84d3-78946e978455</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/doucenuit-spray gorge anti-ronflement spr?320965d1-d088-403f-84d3-78946e978455 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401043633892</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9043c12a6b890c481be38b9ac8de058d6ca4078f460b400ea4582a29dff33e44 ]]></g:image_link>
<g:product_type><![CDATA[ RONFLEMENT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ DUO LP-PRO Anti-Poux et Lentes Lotion 200 ml ]]></title>
<g:id>d6f6e7d0-010f-421b-8957-22c3cf946d89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/duo-lp-pro anti-poux et lentes lotion 200 ml?d6f6e7d0-010f-421b-8957-22c3cf946d89 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le format familial, DUO LP-PRO Anti-Poux et Lentes Lotion 200 ml est un traitement radical sans insecticide neurotoxique contre lentes et poux.</p>
<p>C'est une lotion efficace en 1 seule application. Dès le lendemain de l'application, l'enfant est totalement débarrassé des poux et n'est plus contagieux.</p>
<p>La lotion est efficace grâce à l'Oxyphthirine, un actif innovant double action à base de triglycérides, qui conduit à l'asphyxie et à l'inactivation des parasites à tous les stades de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890228728</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f29ca46e2c0988d4df5287a400d0b12b27c221e1d69f84b768c6a1bf4b50eee ]]></g:image_link>
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
<title><![CDATA[ DUREX SEXY FRAISE BT 12  ]]></title>
<g:id>a917be53-608a-4cfb-9d6b-8657dc15a52a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/durex-sexy fraise bt 12 ?a917be53-608a-4cfb-9d6b-8657dc15a52a ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Durex Sexy Fraise 10 Préservatifs sont des préservatifs colorés de forme profilée Pleasure-Fit avec réservoir pour plus de confort. Ils sont en latex de caoutchouc naturel et sont extra-lubrifiés à base de silicone saveur fraise.<br>Parfum fraise.</p><p>Largeur nominale : Standard (56 mm).</p><p>Testés dermatologiquement et électroniquement.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3059948007111</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/80dc1cab3927dd7272cd234dc257d256cf34104f752c0d464911e3fa8727ee45 ]]></g:image_link>
<g:product_type><![CDATA[ Bien être > Idées Cadeaux > PRESERVATIFS > PRESERVATIFS ET GELS LUBRIFIANTS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Darphin Coffret Routine de Nuit Régénerante Avec la Crème Infusion Stimulskin Plus 15 ml ]]></title>
<g:id>56787ec6-fade-488a-8954-5d9d930134b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-coffret routine de nuit régénerante avec la crème infusion stimulskin plus 15 ml?56787ec6-fade-488a-8954-5d9d930134b6 ]]></link>
<g:price><![CDATA[ 7650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Retrouvez un visage lumineux et tonifié au réveil grâce au coffret Routine de Nuit Régénérante Darphin. Améliorez votre éclat et lissez votre peau avec le Concentré Huile Jeunesse au Rétinol Ideal Resource.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381003333</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8dd0f07694246a25ffeca9600a13b0c0c34ac4ee3e14f26717b2f00b24ca838d ]]></g:image_link>
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
<title><![CDATA[ Darphin Coffret Stimuskin Plus ]]></title>
<g:id>f223c2d4-5b0a-4278-add8-e7e64a4d5414</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-coffret stimuskin plus?f223c2d4-5b0a-4278-add8-e7e64a4d5414 ]]></link>
<g:price><![CDATA[ 12800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une crème extraordinaire combinant l'intelligence botanique et la précision scientifique pour offrir une performance puissante au plus profond des couches de la peau pour lifter, sculpter et lisser la peau.<br><br>Cette luxurieuse formule associe le pouvoir de l'Emeraude de Mer à un complexe puissant de peptides rajeunissants, pour rajeunir visiblement la peau.<br><br>95% d'ingrédients d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381112097</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3cd5359b2bc58e3878ade46846932401dc74edf9afe23ea9d1e917cba71a3e88 ]]></g:image_link>
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
<title><![CDATA[ Darphin Coffret Éclat Sublime Sérum + Baume + Huile Nectar  ]]></title>
<g:id>6c577ac5-e97f-4aad-b588-faec910153d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-coffret Éclat sublime sérum + baume + huile nectar ?6c577ac5-e97f-4aad-b588-faec910153d6 ]]></link>
<g:price><![CDATA[ 9500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le laboratoire Darphin est reconnu pour ses produits de qualité et ce coffret ne fait pas exception.&nbsp;</p><p>Le Baume Nettoyant Bois de Rose de 5 ml nettoie en douceur tout en laissant la peau douce et hydratée. Le Micro-Sérum Bi-Phasé Jeunesse de 30 ml est un sérum anti-âge qui aide à réduire les signes de l'âge et à améliorer la texture de la peau. Enfin, l'Huile Nectar d'Or de 4 ml est une huile nourrissante qui aide à hydrater et à protéger la peau.&nbsp;</p><p>Offrez-vous une peau éc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381112547</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8fc1a855da3c3aafa5c91975bc4446e5f25e783d3c83c7120a141581b3b513bb ]]></g:image_link>
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
<title><![CDATA[ Darphin Soleil plaisir crème soin solaire anti âge 50 ml ]]></title>
<g:id>2e4433e6-c7ca-406b-9553-e7e5aa089290</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-soleil plaisir crème soin solaire anti âge 50 ml?2e4433e6-c7ca-406b-9553-e7e5aa089290 ]]></link>
<g:price><![CDATA[ 3890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Soin solaire anti-âge qui offre à la fois une protection solaire hautement efficace et une sensorialité incroyable. Ce soin quotidien illustre l’expertisede Darphin dans la formulation et la sélection minutieuse des ingrédients. Avec son SPF50, il prévient les dommages cutanés, protège du soleil et hydrate idéalement la peau, la laissant lisse, souple et agréable. Sa texture est satinée, non grasse, non collante et ne laisse pas de traces blanches.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381060930</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c076e6f82945e3d58dae97dc26f3dae79e5822494b2161e754634e51e14682cd ]]></g:image_link>
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
<title><![CDATA[ Darphin elexir soin d'arôme au vétiver 15ml ]]></title>
<g:id>630f5498-1bcf-47fe-b487-8c4690760185</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-elexir soin d'arôme au vétiver 15ml?630f5498-1bcf-47fe-b487-8c4690760185 ]]></link>
<g:price><![CDATA[ 5000.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce soin anti-stress réparateur associe des huiles essentielles pures de vétiver, géranium, lavande papillon et marjolaine. La barrière cutanée est renforcée pour aider à améliorer sa résistance à l’impact visible de l’environnement, aux agressions quotidiennes et au manque de sommeil. La peau est apaisée et semble souple, reposée et naturellement éclatante, tandis que l’arôme relaxant contribue à se libérer des sensations de stress.</p>
<p>Idéal pour</p>
<ul><li>Peaux visiblement stressées.</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381082802</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/afad2c9178e2a621322e641efacdb3280aafd86e0c003fa9f89d241b171db0c4 ]]></g:image_link>
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
<title><![CDATA[ Darphin intral crème réparatrice anti-rougeurs 50ml ]]></title>
<g:id>ef2bed9f-6109-43e5-82f7-1d9472f34856</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-intral crème réparatrice anti-rougeurs 50ml?ef2bed9f-6109-43e5-82f7-1d9472f34856 ]]></link>
<g:price><![CDATA[ 5450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette crème ultra légère présente une teinte verte tendre pour lutter contre les rougeurs, et est enrichie avec un complexe apaisant unique composé de 3 fleurs : l'aubépine, la pivoine et la camomille. Elle réduit les rougeurs, apaise la peau et renforce sa barrière naturelle. La peau est ainsi mieux protégée contre les agents irritants, la pollution et les particules agressives de l'environnement, à l'origine du vieillissement.</p>
<p>Idéal pour</p>
<ul><li>Peaux irritées.</li>
<li>Rougeurs. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401346429949</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d6240a3b2fb8f74d84f109ede6ef5a103c72e0071bbb298c495a3fdee320f3a0 ]]></g:image_link>
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
<title><![CDATA[ Darphin intral émulsion équilibre active 100ml ]]></title>
<g:id>cd10a359-7afc-4757-9f7e-503ad9f03b29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-intral émulsion équilibre active 100ml?cd10a359-7afc-4757-9f7e-503ad9f03b29 ]]></link>
<g:price><![CDATA[ 8290.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Emulsion Equilibre Active Intral, hydrate, renforce et repulpe la peau.<br />Une texture laiteuse qui pénètre la peau en profondeur et la laisse parfaitement hydratée, prête pour le maquillage.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381104825</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a749734aca78496c14509a8b12c74256ce0ead958b8f5e12d89b264868fdb843 ]]></g:image_link>
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
<title><![CDATA[ Darphin masque éclat jeunesse au camélia 75ml ]]></title>
<g:id>02d85957-9bb1-4920-9689-5020a0b8c37d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-masque éclat jeunesse au camélia 75ml?02d85957-9bb1-4920-9689-5020a0b8c37d ]]></link>
<g:price><![CDATA[ 5190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Traitement Anti-Âge Multi-Actions</p>
<p>Un masque riche à la texture délicieuse infusé en extraits de camélia, booster d'éclat, et d'illuminateurs pour lisser visiblement les rides et ridules, raffemir et offrir un teint plus éclatant.</p>
<p>Idéal pour</p>
<ul><li>Teint terne, perte d'éclat.</li>
<li>Rides et ridules.</li>
<li>Sécheresse, déshydratation.</li>
</ul><p>Résultats visibles</p>
<ul><li>Peau rayonnante.</li>
<li>Réduction des rides et ridules.</li>
<li>Grain de peau affiné : peau ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360659575</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2aa90dcd4d94e47e3c1585ec18482f2ff98dc94f2b3f1ab64b91584927e83ad0 ]]></g:image_link>
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
<title><![CDATA[ Darphin prédermine crème anti-rides densifiante peaux normales 50ml ]]></title>
<g:id>3d93fee0-0ca3-4bf4-a190-34d707eb4422</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-prédermine crème anti-rides densifiante peaux normales 50ml?3d93fee0-0ca3-4bf4-a190-34d707eb4422 ]]></link>
<g:price><![CDATA[ 11500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette crème anti-rides, raffermissante et ultra légère composée d'extrait d'iris et de trèfle d'eau, réduit les rides pour une peau repulpée et visiblement plus jeune.</p>
<p>Idéal pour</p>
<ul><li>Perte de fermeté.</li>
<li>Rides et ridules.</li>
</ul><p>Résultats visibles</p>
<ul><li>Peau raffermie et densifiée.</li>
<li>Rides lissées.</li>
<li>Peau agréablement nourrie et souple.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401376627506</g:gtin>
<g:brand><![CDATA[ DARPHIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e80bf754320e72cfc5c16559aedb74ec06d0e9d7819788726d72acb7063aa073 ]]></g:image_link>
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
<title><![CDATA[ Darphin prédermine crème de nuit sculptante 50ml ]]></title>
<g:id>8beb0a51-4e6d-4e22-9f5c-7da17e7f3da1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/darphin-prédermine crème de nuit sculptante 50ml?8beb0a51-4e6d-4e22-9f5c-7da17e7f3da1 ]]></link>
<g:price><![CDATA[ 14690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sculptez et redéfinissez visiblement les contours du visage chaque nuit avec le pouvoir rajeunissant de la tubéreuse à floraison nocturne et des vitamines à libération prolongée. Les rythmes de sommeil de la peau fonctionnent en harmonie avec cette crème hydratante pour stimuler le collagène naturel pour un lifting remarquable, comme un corset sculptant pour le visage. Les rides sont repulpées et la peau semble visiblement liftée.</p>
<p>84% du total des ingrédients d'origine naturelle.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>0882381084585</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/70b59702ff789199f059ffa4f412e7054460091e93a49956cdeaa29dc9a041d9 ]]></g:image_link>
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
<title><![CDATA[ Daylong Actinica Lotion 80 g ]]></title>
<g:id>fe8d9783-7e1f-4326-b0b8-9ec246b77ce5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/daylong-actinica lotion 80 g?fe8d9783-7e1f-4326-b0b8-9ec246b77ce5 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Actinica Lotion 80 g est un produit médical pour la prévention de différentes formes de cancer de la peau non mélanome chez les patients à risque (immunosupprimés) et s'avère efficace dans la prévention des kératoses actiniques et des carcinomes epidermoïdes.</p>
<p>Protégeant des rayons UVA et UVB, cette lotion contient des filtres à large spectre photostable et résiste à l'eau, elle hydrate et entretient la peau. Sans parfum et émulsifiants PEG, elle est très bien tolérée et peut être utili ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612076396470</g:gtin>
<g:brand><![CDATA[ GALDERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c2b227d000a0e76638ff0a473d33638ef9aeaf3b68c476e901e2cca7ae34c24 ]]></g:image_link>
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
<title><![CDATA[ Daylong Kids Lotion Solaire SPF 50 150 ml ]]></title>
<g:id>804d20fc-a2b9-4856-a634-81c6ef45a719</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/daylong-kids lotion solaire spf 50 150 ml?804d20fc-a2b9-4856-a634-81c6ef45a719 ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Lotion Solaire SPF 50 Daylong Kids est aux liposomes, sans parfum et extra résistante à l'eau. Pratique, le flacon-pompe permet de bien doser la crème.<br /><br />Elle contient les filtres solaires photostables Tisorb M et Tinsorb S qui fournissent une protection efficace contre les rayons UVA et les UVB. Sans conservateurs, elle pénètre rapidement et soigne la peau avec le dexpanthénol, la glycérine, l'Aloe Vera et la vitamine E.<br /><br />Daylong Kids offre également une haute protectio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7612076396746</g:gtin>
<g:brand><![CDATA[ GALDERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a266bae5e536ea375e6eb1533ee481a91db74bc8dddd71305763b6aa0dc9c732 ]]></g:image_link>
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
<title><![CDATA[ Decramp 30 Comprimés à Avaler ]]></title>
<g:id>728e1119-e6ac-4a99-9f3e-7f5f8c10e255</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/decramp-30 comprimés à avaler?728e1119-e6ac-4a99-9f3e-7f5f8c10e255 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Détente musculaire en cas de fatigue des muscles, de crampes.</li>
<li>Convient aux femmes enceintes et allaitantes, aux personnes âgées, ainsi qu’ aux sportifs.</li>
</ul><p> </p>
<p>Fatigue musculaire ? Découvrez DERAMP® Comprimés, un complément alimentaire à base d’ oligo-éléments, favorisant la récupération musculaire.</p>
<p> </p>
<p>Sa nouvelle formule contribue à :</p>
<ul><li>Une fonction musculaire normale, grâce au magnésium et au potassium.</li>
<li>Un métabolisme énergétique  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700399101667</g:gtin>
<g:brand><![CDATA[ IDIM PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73b54fda1fdd1cc97c858956b95bef8a2bb2ff87198196ecbcba375bd7de44ed ]]></g:image_link>
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
<title><![CDATA[ Densmore vitadrop 10ml ]]></title>
<g:id>d7d2ce89-b03c-4ba8-a980-70cf65c84dce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/densmore-vitadrop 10ml?d7d2ce89-b03c-4ba8-a980-70cf65c84dce ]]></link>
<g:price><![CDATA[ 976.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Hydratation et lubrification de l'?il. Fatigue oculaire , sensations de sécheresse ou d'irritation induites par les poussières , la fumée, la climatisation, la pollution, le travail prolongé devant un écran ou le port de lentilles de contact.</p>
<div id="i4c-dialogs-container"></div>
<div></div>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401045014200</g:gtin>
<g:brand><![CDATA[ DEDICATE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba8c956d9486a4f31bab3fe9f4a8718d11d1ddf34188814209ade0e90cacc62a ]]></g:image_link>
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
<title><![CDATA[ Dentifrice Accélérateur de Blancheur et Réduit la Plaque Dentaire Max White One COLGATE ]]></title>
<g:id>7f4341f2-4af2-42b9-a3a6-9219a927dff4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dentifrice-accélérateur de blancheur et réduit la plaque dentaire max white one colgate?7f4341f2-4af2-42b9-a3a6-9219a927dff4 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Colgate® Max White One avec micro-cristaux accélérateurs de blancheur contient des ingrédients similaires à ceux utilisés par les dentistes.<br>Sa formule enlève les taches en douceur et prévient la formation du tartre, pour vous aider à obtenir des dents plus blanches d'1 teinte en 1 semaine.<br>Un usage continu vous aidera à garder les dents blanches plus longtemps.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8718951484672</g:gtin>
<g:brand><![CDATA[ COLGATE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/450746d19b4b509326528fa7c619f3a66860288e7a5fc6a5c0402b08a85a31be ]]></g:image_link>
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
<title><![CDATA[ Dento-Plaque Révélateur de Plaque Dentaire 10 ml ]]></title>
<g:id>a1250ac2-41e9-40e4-8754-7f2c89419014</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dento-plaque révélateur de plaque dentaire 10 ml?a1250ac2-41e9-40e4-8754-7f2c89419014 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Inava Dento-Plaque Inava Révélateur de Plaque Dentaire 10 ml est une solution qui permet de révéler la plaque dentaire et aide ainsi à perfectionner la méthode de brossage.</p>
<p>En raison de sa coloration rouge le produit peut tacher</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056004308</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6f3abe608b1cd1e4bf268b8957e559c609ceac0d901c89edf82e7964b2ec0f71 ]]></g:image_link>
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
<title><![CDATA[ Dercos PSOlution - Shampooing Traitant Kératoréducteur, 200ml ]]></title>
<g:id>77797e07-02b6-4c5d-b2e2-492aae994423</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dercos-psolution - shampooing traitant kératoréducteur, 200ml?77797e07-02b6-4c5d-b2e2-492aae994423 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Shampooing Traitant Kératoréducteur Dercos PSOlution de Vichy</span> est spécialement formulé pour les cuirs chevelus à états squameux ou tendance psoriasique. Sa formule hypoallergénique vient agir en compléments des traitements médicaux pour aider à nettoyer les résidus, apaiser les sensations de démangeaisons et redonner de la souplesse et de la douceur aux cheveux. </p>
<p>Testé cliniquement sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875787222</g:gtin>
<g:brand><![CDATA[ VICHY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0fe9cecff5a2d6d9d97457e2fde39e7c7dec065e7eaf3a72cb84203aea4a64c7 ]]></g:image_link>
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
<title><![CDATA[ Dercos Shampooing 2en1 Anti-Pelliculaire 390ml ]]></title>
<g:id>4defcc29-cab3-4cfb-81f7-42f479a20d01</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dercos-shampooing 2en1 anti-pelliculaire 390ml?4defcc29-cab3-4cfb-81f7-42f479a20d01 ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le shampooing démêlant traitant 2en1 Dercos Anti-pelliculaire DS</span> <span>de Vichy</span> élimine 100% des pellicules visibles dès la 1ère application**, pendant 6 semaines grâce à son action anti-récidive***.</p>
<p>Les démangeaisons sont diminuées.</p>
<p>Sa technologie au Sélénium DS aide à rééquilibrer le microbiome* et apporte <span>hydratation jusqu'à 72 heures</span> en préservant la couleur des cheveux****.</p>
<p>Plus faciles à démêler, les <span>cheveux sont plus doux et p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3337875902373</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e2c4553ffbe5da3a9a431d29611734c7e62384c56d5ca355b176cebe9be0151 ]]></g:image_link>
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
<title><![CDATA[ Derm Hydralin solution lavante sans savon 200ml ]]></title>
<g:id>3c654bed-d00f-4d6f-8709-10c759dcc8b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/derm-hydralin solution lavante sans savon 200ml?3c654bed-d00f-4d6f-8709-10c759dcc8b7 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La</span><span> solution lavante Derm Hydralin</span><span> a été mise au point dans l’optique de permettre aux personnes ayant des problèmes d’</span><span>irritation cutanée</span><span> de pouvoir se laver tout en prenant soin de leur peau. Sa formule ne contient pas de savon pour nettoyer l’épiderme de façon moins agressive, tout en garantissant tout de même une hygiène impeccable et en l'aidant à retrouver une sensation de douceur et de bien-être.</span><br /><br /><span>Cette solu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401374646073</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/131586d9f22fff6e4e10d865ec558f20b589d43ff12a1cd74de0547eb87d2448 ]]></g:image_link>
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
<title><![CDATA[ Dermaceutic Activ Retinol 1.0 Sérum anti-âge intense 30ml ]]></title>
<g:id>48ca82a1-2826-417b-9b1f-e29d626678b8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dermaceutic-activ retinol 1.0 sérum anti-âge intense 30ml?48ca82a1-2826-417b-9b1f-e29d626678b8 ]]></link>
<g:price><![CDATA[ 6490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Activ Retinol 1.0 prévient l’apparition des signes du vieillissement cutané grâce à leur concentration optimale en rétinol. Combiné à un cocktail d'antioxydants et de céramides, il aide à protéger et à renforcer la peau.</span><br /><br /><span>Recommandé pour les signes du vieillissement cutané, perte d’élasticité et teint terne. Convient à tous types de peaux.</span><br /><br /><span>Sans parfum</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760135010059</g:gtin>
<g:brand><![CDATA[ DERMACEUTIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5b55ebcf7e38dd86f83d180150aefd84866804fee20712e1acf28e30bda774dc ]]></g:image_link>
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
<title><![CDATA[ Dermaceutic Advanced Cleanser Mousse nettoyante globale 150 ml ]]></title>
<g:id>a4ead87d-8e77-4fe0-b8fb-3b6a801417c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dermaceutic-advanced cleanser mousse nettoyante globale 150 ml?a4ead87d-8e77-4fe0-b8fb-3b6a801417c2 ]]></link>
<g:price><![CDATA[ 2440.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Advanced Cleanser démaquille efficacement et élimine l’excès de sébum.</span><br /><br /><span>Nettoyant quotidien. Convient à tous types de peaux.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760135010035</g:gtin>
<g:brand><![CDATA[ DERMACEUTIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/26e32fb916800f0f2dd1d9f68b30f5f478e57e9bf12d0963606b1476bbb29f90 ]]></g:image_link>
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
<title><![CDATA[ Dermaceutic C25 crème 30ml ]]></title>
<g:id>029b2545-ee02-4df0-80bc-0f9db5829d49</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dermaceutic-c25 crème 30ml?029b2545-ee02-4df0-80bc-0f9db5829d49 ]]></link>
<g:price><![CDATA[ 5440.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760135011124</g:gtin>
<g:brand><![CDATA[ DERMACEUTIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/885f849812455c9cb82ce51b24d3be28cb8f00ee403eecd4de99a1561021df73 ]]></g:image_link>
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
<title><![CDATA[ Dermaceutic Derma Lift 5.0 serum liftant yeux 30ml ]]></title>
<g:id>004f0b3b-7c50-4537-a2aa-c3ffdb96ffd9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/dermaceutic-derma lift 5.0 serum liftant yeux 30ml?004f0b3b-7c50-4537-a2aa-c3ffdb96ffd9 ]]></link>
<g:price><![CDATA[ 5690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Derma Lift 5.0 est formulée pour un effet tenseur immédiat associé à une action durable lissante des peptides. La synergie des ingrédients améliore l’aspect des dommages causés par les radicaux libres et les signes du vieillissement cutané.</span><br /><br /><span>Recommandé pour le relâchement cutané, les rides d’expression et ridules. Convient à tous types de peaux.</span><br /><br /><span>Sans parfum</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760135010066</g:gtin>
<g:brand><![CDATA[ DERMACEUTIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0fb178bf1bb3a4388648e020daa073c9b6296e89e1eb3f37e807b2920bfa8612 ]]></g:image_link>
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
</channel>
</rss>`;
});
