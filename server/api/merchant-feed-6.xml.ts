import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Produits santé et bien-être - Partie 6 ]]></title>
<description><![CDATA[ Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès. ]]></description>
<link>https://pharmacieagnespraden.com</link>
<item>
<title><![CDATA[ Elteans Peau Sèche 60 Capsules ]]></title>
<g:id>486cbd61-a6dc-458b-921f-b018c20f8cb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/elteans-peau sèche 60 capsules?486cbd61-a6dc-458b-921f-b018c20f8cb2 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Jaldes Elteans Peau Sèche 60 Capsules est un complément alimentaire conçu pour aider à lutter contre le manque d'éclat, d'élasticité, de souplesse de la peau.<br />Les oméga- 3, 6 et 9 font partie intégrante de la structure de la peau. Ce complément alimentaire apporte une combinaison d'acides gras essentiels pour un apport équilibré en oméga-3, oméga-6 et oméga-9 :</p>
<ul><li>L'huile de bourrache contient naturellement des omégas 6 et 9. Elle est la source végétale la plus riche en GLA, un  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401566360701</g:gtin>
<g:brand><![CDATA[ IDIM PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c8c6bf9a4bb8c9da747747430c98bd384a94cf521b2181f321e60fa33c6f8ed ]]></g:image_link>
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
<title><![CDATA[ Eluday Bain de Bouche Quotidien Fresh 500ml ]]></title>
<g:id>8291c542-51a2-445a-995b-92ed19dc4f38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-bain de bouche quotidien fresh 500ml?8291c542-51a2-445a-995b-92ed19dc4f38 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>ELUDAY</span><br /><span>Bain de Bouche Quotidien</span><br /><span>Fresh</span><br /><span>Combat et prévient de la mauvaise haleine</span><br /><span>Arôme Menthe Fraîche</span><br /><span>Sans Alcool</span><br /><span>500ml</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056025167</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e8777fb803d05415fc01932209e497d27c42f40302d23488b9478b01bd3cc1a ]]></g:image_link>
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
<title><![CDATA[ Eluday Blancheur Bain de Bouche Quotidien 500 ml ]]></title>
<g:id>80317629-d3c0-4ec3-864a-0590d8086496</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-blancheur bain de bouche quotidien 500 ml?80317629-d3c0-4ec3-864a-0590d8086496 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eluday Blancheur Bain de Bouche Quotidien 500 ml est une solution prête à l'emploi à la technologie blancheur adaptée aux dents sensibles. Elle aide à prévenir les taches sur la surface des dents et à limiter la fixation des agents colorants. Son agent bactérien lutte contre les bactéries à l'origine de la plaque dentaire pouvant favorisant la coloration des dents. Elle contribue à reminéraliser l'émail pour des dents éclatantes et fortes grâce au Fluorinol. Elle procure une agréable sensatio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056021923</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b0a4816a24841b2fb8bcc233b0e10ef33bc2adb6c81e2904577a29849d8b69f6 ]]></g:image_link>
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
<title><![CDATA[ Eluday Care Bain de Bouche 500 ml ]]></title>
<g:id>3db8030f-15ce-4953-a78a-4a2fcded3f51</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-care bain de bouche 500 ml?3db8030f-15ce-4953-a78a-4a2fcded3f51 ]]></link>
<g:price><![CDATA[ 725.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eluday Care Bain de Bouche 500 ml est un soin d'hygiène quotidienne avec une action antiplaque renforcée, adapté :</p>
<p>- aux personnes dont le brossage seul ne permet pas d'éliminer suffisamment de plaque dentaire,</p>
<p>- aux porteurs de prothèses (implants) et d'appareil orthodontique.</p>
<p>La plaque dentaire est la principale cause des problèmes de gencives.</p>
<p>Eluday Care prévient et limite la formation de la plaque dentaire grâce à la chlorhexidine et au chlorure de cétylpyridi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056021930</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5271d764eb99d990d67f53df4af90bb68ed19319ae7c4240f737c4e549c0d658 ]]></g:image_link>
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
<title><![CDATA[ Eluday Gencives bain de bouche quotidien soin gencives sensibles 500 ml ]]></title>
<g:id>51e09c85-7ce6-4615-afea-25526ffa22f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-gencives bain de bouche quotidien soin gencives sensibles 500 ml?51e09c85-7ce6-4615-afea-25526ffa22f6 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Eluday Gencives bain de bouche apaise et assainit les gencives sensibles en complétant les bienfaits du brossage. Il aide à lutter contre la plaque dentaire, principale cause de la sensibilité et de l'irritation des gencives: les gencives deviennent 2 fois moins sensibles après 3 semaines d'utilisation¹. Sans alcool, prêt à l'emploi, Eluday Gencives bain de bouche apporte une protection de 12h contre les bactéries responsables de la plaque dentaire et limite les inconforts gingivaux (pi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056024221</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e39f5fff3e2a97e28ec694b0c2639eaa784b069bc1377bf2222ba7269c8b84f ]]></g:image_link>
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
<title><![CDATA[ Eluday Intense Bain de Bouche Quotidien 500 ml ]]></title>
<g:id>a9f2156e-a226-4b51-94f2-b310effa8c6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-intense bain de bouche quotidien 500 ml?a9f2156e-a226-4b51-94f2-b310effa8c6c ]]></link>
<g:price><![CDATA[ 580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eluday Intense Bain de Bouche Quotidien 500 ml est une solution prête à l'emploi à la technologie Cooling associée à un arôme extra menthol. Elle procure une sensation de fraîcheur intense longue durée. Elle combat les bactéries responsables de la plaque dentaire, du tartre et de la mauvaise haleine. Elle complète le brossage notamment pour les zones difficiles d'accès.</p>
<p>Sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056021947</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fd08ff1c8301bee6fb25ad03f51a912e54d5e0773a819075681e83fd99ea6e8b ]]></g:image_link>
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
<title><![CDATA[ Eluday Ortho Bain de Bouche 500ml ]]></title>
<g:id>134df963-14be-4dd3-9f4b-f986f61912ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-ortho bain de bouche 500ml?134df963-14be-4dd3-9f4b-f986f61912ee ]]></link>
<g:price><![CDATA[ 725.00 EUR ]]></g:price>
<description><![CDATA[ <div class="secondary-details__description">
<p class="paragraph">Eludril Ortho – Bain de bouche quotidien ortho facilite l’hygiène dentaire des personnes porteuses d’appareils orthodontiques. Il rafraîchit l’haleine et contribue à maintenir des dents et des gencives saines. Il contient du Fluorinol® qui aide à prévenir la formation des caries et des taches blanches autour des attaches orthodontiques, en lutant contre les attaques acides et la formation de plaque. Il ne colore également pas les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056025037</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5dd3d4682d33d92c7f1eed6f859793f5a8496feb47a1c377a638db077e170ff2 ]]></g:image_link>
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
<title><![CDATA[ Eluday Protect Bain de Bouche Quotidien 500 ml ]]></title>
<g:id>66ae573b-bcff-4482-95e5-a3e0dbe6f42f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-protect bain de bouche quotidien 500 ml?66ae573b-bcff-4482-95e5-a3e0dbe6f42f ]]></link>
<g:price><![CDATA[ 580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eluday Protect Bain de Bouche Quotidien 500 ml est une solution prête à l'emploi offrant une protection complète grâce à son agent antibactérien qui aide à lutter immédiatement contre les bactéries responsables de la plaque dentaire et du tartre pour des gencives plus saines. Elle permet d'atteindre les zones difficiles d'accès. Elle complète l'efficacité du brossage et procure une agréable sensation de fraîcheur et de propreté avec un arôme frais mentholé.</p>
<p>Sans alcool. Contient du flu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056021954</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/185320b3c0755a618c86c9adb2774eef302a2f902550a0a188cc7059b71f848e ]]></g:image_link>
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
<title><![CDATA[ Eluday Sensibilite bain de bouche 500ml ]]></title>
<g:id>b1ec897c-601c-4b63-9f16-d8b141284082</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eluday-sensibilite bain de bouche 500ml?b1ec897c-601c-4b63-9f16-d8b141284082 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bain de bouche pour les dents sensibles sans alcool Protection cahud et froid</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056024238</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60721222316e9951bd59e03127251043b6654917f67cbae60e30dc3c9e0f2fb0 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Crème Lift-Fermeté 50 ml ]]></title>
<g:id>7ccd993f-f7f0-4726-a199-b112abd876db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-crème lift-fermeté 50 ml?7ccd993f-f7f0-4726-a199-b112abd876db ]]></link>
<g:price><![CDATA[ 2850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Crème Lift-Fermeté 50 ml est une crème soyeuse à la fleur de kangourou qui repulpe quotidiennement la peau pour une correction continue des rides et de la fermeté.<br>Elle comble tous les types de rides et redessine l'ovale du visage. Elle convient à tous les types de peaux, y compris sensibles. Sa formule associe :</p><ul><li><p>l'acide hyaluronique, aux propriétés hydratantes et fixatrices d'eau, actions lissantes et repulpantes,</p></li><li><p>l'extrait de fleur de kangourou Bi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002053</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/997a10f15e646b681a4dc8604ab769383bb3b957f959c7a052f7c486c2690e0b ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Crème Solaire SPF50 100 ml ]]></title>
<g:id>9f7ed6df-26d3-4ed0-b000-782da70ef72a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-crème solaire spf50 100 ml?9f7ed6df-26d3-4ed0-b000-782da70ef72a ]]></link>
<g:price><![CDATA[ 2070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Crème Solaire SPF50 100 ml est une protection solaire visage et corps qui convient à toute la famille, dès 3 ans. Cette crème offre une haute protection contre les rayons UVA et une très haute protection contre les rayons UVB (SPF50).<br>Sa formule est enrichie à l'huile de roucou antioxydante et en beurre de karité nourrissant, pour une peau hydratée immédiatement et durablement, et un effet bonne mine instantané.</p><p>Sa texture crème au fini invisible et satiné, pénètre rapide ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002763</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aef79382c04485851e68cd7436d0f2ed0d96e9589a8ba5bfb20d60976380710e ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Eau de Beauté Rosamelis 200 ml ]]></title>
<g:id>dddc7835-b7bb-4e1c-9a5a-8018b863d9b8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-eau de beauté rosamelis 200 ml?dddc7835-b7bb-4e1c-9a5a-8018b863d9b8 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Eau De Beauté Rosamélis 200 ml est un mélange d'eaux florales naturelles et délicieusement parfumées, rose, oranger et hamamélis, purifient et tonifient la peau. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900000448</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/091fc57d25cdbe42ad33db0d4702190bf44783147176874cf4eb985be6e891c0 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Filaderme Émulsion Peaux Sèches à Très Sèches 75 ml ]]></title>
<g:id>de25324f-8727-4502-9380-904d23028efb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-filaderme Émulsion peaux sèches à très sèches 75 ml?de25324f-8727-4502-9380-904d23028efb ]]></link>
<g:price><![CDATA[ 1670.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Filaderme Émulsion Peaux Sèches à Très Sèches 75 ml est un soin nourrissant protecteur qui conviendra aux peaux sensibles.</p><p>Cette émulsion onctueuse prend soin des épidermes les plus secs et sensibles. Sa formule relipidante riche en nutriments essentiels reconstitue le film protecteur lipidique de la peau et renforce la barrière cutanée.<br>Les signes de sécheresse et les sensations d'inconfort disparaissent.</p><p>La peau est apaisée et confortable, à nouveau douce et soupl ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900001759</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b019ce2d493a6db30aa579cab0fa2ea4f790b969918af68f6943063a1a5b3f5a ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Hydra-Crème Énergisante 40 ml ]]></title>
<g:id>513a4a57-a1a7-4a21-83ab-918d1a5dfdcd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-hydra-crème Énergisante 40 ml?513a4a57-a1a7-4a21-83ab-918d1a5dfdcd ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Hydra-Crème Énergisante 40 ml est un soin hydratant pour les peaux normales à sèches, même sensibles. Enrichie d'un extrait de ginseng, actif stimulant, et de glycérine végétale, cette crème offre une hydratation instantanée et de longue durée et une dose d'énergie.<br>De plus, elle bénéficie d'une protection quotidienne face à la pollution et aux agressions extérieurs grâce au pouvoir antioxydant de la vitamine C.</p><p>La peau retrouve vitalité, tonicité et un éclat radieux.<br> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002114</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f7e9278e501c7e0a8b0688c2ffdd2b768c3af5a85d5f1e384d8170bd97f4dd5 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Lait Crème Concentré Soin Hydratant 75 ml ]]></title>
<g:id>f0da2986-9844-4ebb-ae1d-7b48e5cc21d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-lait crème concentré soin hydratant 75 ml?f0da2986-9844-4ebb-ae1d-7b48e5cc21d2 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Un soin surdou&eacute;, vrai secret de beaut&eacute; et favori des dermatologues depuis des d&eacute;cennies, &agrave; l'efficacit&eacute; hydratante* et nutritive in&eacute;gal&eacute;e gr&acirc;ce &agrave; une association d'ingr&eacute;dients d'origine naturelle aux vertus reconnues, riches en acides gras essentiels et vitamines.</p>
<p class="p1">Il apporte &agrave; la peau tous les nutriments et l'eau n&eacute;cessaires &agrave; son &eacute;quilibre, reconstitue le film hydro-l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900000011</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57956631119944451ee551d04d6d0e9c69679356fa517fc120ef50c63b1b2747 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Lait-Crème Fluide+ 400 ml ]]></title>
<g:id>810215cf-5b86-484d-b6b8-9af14c14c539</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-lait-crème fluide+ 400 ml?810215cf-5b86-484d-b6b8-9af14c14c539 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Lait-Crème Fluide+ 400 ml est un soin multi-fonctions pour le visage et le corps de toute la famille, dès 3 ans. Sa formule se compose d'aloe vera réparateur, de karité nourrissant et de cire d'abeille protectrice de la barrière cutanée.</p><p>Sa texture fluide aux vertus ultra-hydratantes et nutritives permettent d'utiliser ce lait-crème en tant que :</p><ul><li><p>crème visage et corps puisqu'il hydrate et nourrit la peau intensément et durablement,</p></li><li><p>base de maquil ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002589</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/828571a0be45bfd99744c9117674c359fa4c3e3a581f18e8772a3fe5a358a88d ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Lait-Crème Multi-Protection SPF20  40 ml ]]></title>
<g:id>0b199984-e099-451f-b132-112e640cb09c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-lait-crème multi-protection spf20  40 ml?0b199984-e099-451f-b132-112e640cb09c ]]></link>
<g:price><![CDATA[ 1560.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Lait-Crème Multi-Protection SPF20 PA+++ 40 ml est un lait-crème dont l'association de filtres solaires au large spectre, d'aloe vera, de protéines de soja, de beurre de karité et de cire d'abeille, procure une hydratation continue dans une formulation multi-protections/multi-usages 7 en 1 : crème hydratante, base de maquillage, crème après-rasage, protection UVA-UVB, protection lumière bleue et rayons infrarouges, bouclier anti-pollution et prévention du vieillissement cutané. Il  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900001704</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/870472521f6ebc3708c102fdda47e7cc0069cbde5c374fc8a752c93ff1d5f37a ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Lait-Crème Rétinol-like 75ml ]]></title>
<g:id>582ddff1-c62e-4c3e-be7c-a86c079932f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-lait-crème rétinol-like 75ml?582ddff1-c62e-4c3e-be7c-a86c079932f1 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Embryolisse Lait-Crème Rétinol-like 75ml</span>, le savoir-faire "Lait-Crème" multi-fonctions dans une formulation nutritive au Rétinol-like végétal. Ce soin à la texture riche et crémeuse, apporte une réponse <span>anti-ride</span> complète et efficace.</p>
<p>Soin multi-fonctions, il peut à la fois s'utiliser comme <span>soin hydratant anti-rides</span>, <span>base de maquillage lissante</span>, <span>masque régénérant</span>, <span>crème de nuit redensifiante</span> et <span>lait cor ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002787</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c9d3b240236068d37574149cf63cc1aa8745863b6bbcbdd943c1b580035f79b1 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Lotion Micellaire 250 ml ]]></title>
<g:id>d5e89e6b-3c8b-4f35-aaeb-2fc0991a946f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-lotion micellaire 250 ml?d5e89e6b-3c8b-4f35-aaeb-2fc0991a946f ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Lotion Micellaire 250 ml est une lotion micellaire qui conviendra à tous les types de peaux, y compris aux peaux sensibles.</p><p>Formulée à base d'eaux florales de bleuet, d'hamamélis et de camomille, elle retire tout en douceur les impuretés et la pollution quotidienne, ainsi que le maquillage. Elle convient aussi bien pour le visage que pour les yeux et les lèvres.</p><p>La peau est apaisée, douce et tonique, le teint retrouve son éclat.</p><p>95% des ingrédients sont d'origine ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900000295</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6182e97bbcd08a2b3ce72e4b17926380c61341641d651984f5a3c17e37dbdd8c ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Pâte Secrète 3en1 100 ml ]]></title>
<g:id>ea632319-ae90-4c16-938d-e7216d2abeed</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-pâte secrète 3en1 100 ml?ea632319-ae90-4c16-938d-e7216d2abeed ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Pâte Secrète 3en1 100 ml est un soin anti-imperfections destiné aux peaux mixtes à grasses. Composé d'un extrait de curcuma Bio, d'argile jaune et de poudre de pois chiche, il est à la fois :</p><ul><li><p>un soin anti-boutons qui agit la nuit en asséchant le bouton et en réduisant sa rougeur,</p></li><li><p>un masque anti-brillance qui absorbe et purifie la peau afin de réduire les imperfections et affiner le grain de peau,</p></li><li><p>un nettoyant purifiant qui élimine et dés ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002633</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b096565be34406965d40e69416a25781f492de39fe2db0b68868d6c08d346614 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Secret De Maquilleurs Voile Illuminateur De Teint BB Cream SPF20 30 ml ]]></title>
<g:id>32c93d1e-3199-465a-9efe-30b8cf49a82d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-secret de maquilleurs voile illuminateur de teint bb cream spf20 30 ml?32c93d1e-3199-465a-9efe-30b8cf49a82d ]]></link>
<g:price><![CDATA[ 1799.00 EUR ]]></g:price>
<description><![CDATA[ Embryolisse Secret De Maquilleurs Voile Illuminateur De Teint BB Cream SPF 20 30 ml est une véritable BB Cream, qui illumine la peau en un geste. Embellisseur du teint, il floute pores et ridules, camoufle les imperfections avec ses poudres minérales matifiantes réfléchissant la lumière et ses pigments caméléon. Soin hydratant* puissant grâce à l'acide hyaluronique, il repulpe et lisse la peau. Soin protecteur anti radicaux libres et rayons UV, il préserve du vieillissement. Un effet nude bluffa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900000608</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79ed9ef12d61ffcb1c0892788a93fdf4ff854515e5e6203a4d9aead3cc3e2caf ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Secret de Maquilleurs Soin Blush de Peau 30 ml ]]></title>
<g:id>c7f9a027-575a-48eb-89af-18bc843a26e5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-secret de maquilleurs soin blush de peau 30 ml?c7f9a027-575a-48eb-89af-18bc843a26e5 ]]></link>
<g:price><![CDATA[ 1780.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Secret de Maquilleurs Soin Blush de Peau 30 ml est un soin qui s'applique comme une crème hydratante sur tout le visage y compris le contour des yeux pour donner bonne mine immédiatement. Sa formule d'origine naturelle à l'extrait d'arbre de soie et à l'acide hyaluronique :</p><ul><li><p>efface les signes de fatigue cutanée,</p></li><li><p>réduit les cernes et les poches,</p></li><li><p>repulpe la peau.</p></li></ul><p>Sa teinte rose universelle fusionne naturellement avec la peau ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002671</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0252e122acfcfa216c1e3f9493f566359e3c126e020bc368021803ded3a8c700 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Secret de Maquilleurs Soin Correcteur Anti-Cernes Rose ]]></title>
<g:id>38f5a57d-a436-4750-8e4e-ba2527902af7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-secret de maquilleurs soin correcteur anti-cernes rose?38f5a57d-a436-4750-8e4e-ba2527902af7 ]]></link>
<g:price><![CDATA[ 1540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Secret de Maquilleurs Soin Correcteur Anti-Cernes 8 ml - Teinte : Rose est une alliance soin &amp; maquillage en un seul soin correcteur, élaboré pour camoufler immédiatement les cernes, unifier les contours du regard et effacer les signes de fatigue.<br>Sa formule associe ces principaux actifs : Extrait de frêne, dérivé de vitamine E, vitamine B3, glycérine.</p><p>Sa texture douce et fondante offre un résultat naturel longue tenue sans effet matière.<br>Les poches sont atténuées, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002015</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/33204cc671fe519be2ed89a03a63373a42c4e1d1c2a7bd2958caed04dbd52169 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Secret de Maquilleurs Éclat du Regard  ]]></title>
<g:id>ead62035-9fee-4ccc-9301-cd574a1890f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-secret de maquilleurs Éclat du regard ?ead62035-9fee-4ccc-9301-cd574a1890f0 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Secret de Maquilleurs Éclat du Regard 4,5 g est un stick soin fraîcheur défatigant express anti-cernes et anti-poches.</p><p>Ce stick effet glaçon offre une double action beauté et soin : il rafraîchit immédiatement le regard, restructure et hydrate pour lisser le contour des yeux.<br>Un coup d'éclat magique qui délasse, atténue cernes et poches, fait pétiller le regard.</p><p>99% des ingrédients sont d'origine naturelle.</p><p>Sans parfum.<br>Tolérance testée sous contrôle dermat ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900001834</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9001354c9cb538486f16b2d19e30c68deb7a361b24bedef789e348ac93a60bd1 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Soin Hydratant Matifiant 50 ml ]]></title>
<g:id>9ed1f527-c0f8-4d4b-b923-c4c32182197b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-soin hydratant matifiant 50 ml?9ed1f527-c0f8-4d4b-b923-c4c32182197b ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Soin Hydratant Matifiant 50 ml est un soin destiné aux peaux mixtes à grasses. L'extrait de curcuma et sa poudre matifiante permettent de réduire les brillances, de resserrer les pores et d'hydrater la peau, offrant ainsi un teint plus homogène.</p><p>Sans alcool.</p><p>Non comédogène.</p><p>Convient aux peaux sensible.<br>Testé sous contrôle dermatologique.</p><p>98% d'ingrédients d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002626</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1079014c02cfaf2a7d50066e16083c58ee2901874c01e8bfabe46b28323c6f70 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Soin Lissant Contour Des Yeux 15 ml ]]></title>
<g:id>875f6412-6c15-4fea-9189-34be4bd9d596</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-soin lissant contour des yeux 15 ml?875f6412-6c15-4fea-9189-34be4bd9d596 ]]></link>
<g:price><![CDATA[ 1580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Soin Lissant Contour Des Yeux 15 ml est un soin lissant-défatigant pour le contour des yeux, même sensibles. Il agit simultanément sur les cernes, les poches et les rides pour un regard reposé et d'apparence plus jeune.<br>Sa formule hydratante et apaisante protège la zone délicate du contour de l'œil.</p><p>Il est enrichi en extrait de rose de Damas qui défatigue et illumine le regard. L'acide hyaluronique et la glycérine hydratent, repulpent et lissent la peau. Un extrait d'écor ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002091</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02ee7a736fccc349df6e07233d20d785901edda6b86d147b7bc52637910f90a9 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Stick Solaire SPF50+  ]]></title>
<g:id>c0f86cf6-0705-4a9a-ab43-cec2c4613cc1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-stick solaire spf50+ ?c0f86cf6-0705-4a9a-ab43-cec2c4613cc1 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Crème Solaire SPF50 100 ml est une protection solaire qui convient aussi bien aux adultes qu'aux enfants dès 3 ans. Cette crème protège le visage et les zones sensibles (grain de beauté, cicatrice, tatouage) en offrant une très haute protection contre les rayons UVA/UVB (SPF50+).</p><p>Sa formule est enrichie à l'huile de roucou antioxydante et en beurre de karité nourrissant, pour une peau hydratée immédiatement et durablement, et un effet bonne mine instantané.<br>Son format nom ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002770</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0e5296d46603ecbde8e61134f3b4e2843b5d67dbc797b7592adc9404967c723d ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Sérum Anti-Imperfections 30 ml ]]></title>
<g:id>542bdffb-475d-4581-86bb-ca8d559c3715</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-sérum anti-imperfections 30 ml?542bdffb-475d-4581-86bb-ca8d559c3715 ]]></link>
<g:price><![CDATA[ 1899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Sérum Anti-Imperfections 30 ml est un soin destiné aux peaux mixtes à grasses à tendance acnéique. Enrichi d'un extrait de curcuma Bio, il rééquilibre et améliore la qualité de la peau afin de réduire boutons, rougeurs, éruptions, point noirs, marques et d'agir sur l'excès de sébum et les brillances.</p><p>Sans alcool.</p><p>Non comédogène.</p><p>Convient aux peaux sensibles.<br>Testé sous contrôle dermatologique.</p><p>99% d'ingrédients d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900002640</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/017ae376de83fe8ecbd40674ea6ab25459e1fde05b29c32ec02c9e2677ebe8a7 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse Sérum Complet 30 ml ]]></title>
<g:id>82c70369-4935-480d-bffb-a8f6a2fca5da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-sérum complet 30 ml?82c70369-4935-480d-bffb-a8f6a2fca5da ]]></link>
<g:price><![CDATA[ 2840.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Sérum Complet 30 ml est un sérum hautement concentré en acide hyaluronique et extrait de litchi booster de fermeté et d'élasticité, qui offre de multiples bénéfices pour une peau d'apparence plus jeune : il lifte visiblement les traits, repulpe la peau, lisse les rides et raffermit. Il convient à tous les types de peaux, y compris sensibles.<br>Sa formule associe :</p><ul><li><p>l'acide hyaluronique, aux propriétés hydratantes et fixatrices d'eau, actions lissantes et repulpantes, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900001995</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/43b66c6b0a88b823ebf642cbe1dafeff8415819c27425c953f37b7cb219ed2e3 ]]></g:image_link>
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
<title><![CDATA[ Embryolisse lait creme moussant 200 ml ]]></title>
<g:id>529c6e97-98aa-4872-91d9-ec557c39ea78</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/embryolisse-lait creme moussant 200 ml?529c6e97-98aa-4872-91d9-ec557c39ea78 ]]></link>
<g:price><![CDATA[ 635.00 EUR ]]></g:price>
<description><![CDATA[ <p>Embryolisse Lait-Crème Moussant 200 ml est un soin nettoyant hydratant sans savon qui convient à toutes les peaux.</p><p>Associant un extrait de figue de Barbarie et un complexe de Bio-lipides riche en vitamines, acides gras essentiels et phytostérols, il élimine les impuretés quotidiennes tout en maintenant une hydratation optimale.<br>Sa texture onctueuse de lait crémeux enveloppe la peau avec douceur.</p><p>La peau est nettoyée, douce et confortable.</p><p>Testé sous contrôle dermatologiqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3350900000264</g:gtin>
<g:brand><![CDATA[ EMBRYOLISSE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32da7b3898f3d8e1c89aef8b2242c28e7356c050aaaa33d8767f43b66665061e ]]></g:image_link>
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
<title><![CDATA[ Endomelia 60 Gélules ]]></title>
<g:id>1c7f707d-b970-4b22-aba0-8a540bc0aa3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/endomelia-60 gélules?1c7f707d-b970-4b22-aba0-8a540bc0aa3f ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les différentes phases du cycle menstruel chez la femme peuvent provoquer des gênes et inconforts.</span></p>
<p><span>On estime que </span><span>20% à 40% des femmes </span><span>en âge de procréer</span><span> pourraient être concernées par ces gênes et désagréments.</span></p>
<p><span>Cela se manifeste par des <span>désordres physiques mais aussi psychologiques plus ou moins intenses</span> et invalidants :</span></p>
<p><b><span>•</span> </b>Douleurs au moment des règles (dysménorr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225641381</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41cee3620ce8a64103d95b36c9e5ea49b8d1d856387f27ff74a1c1815bdf5960 ]]></g:image_link>
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
<title><![CDATA[ Endurol système immunitaire  30 comprimés ]]></title>
<g:id>45cdac95-9d4d-4877-8298-de09cb934753</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/endurol-système immunitaire  30 comprimés?45cdac95-9d4d-4877-8298-de09cb934753 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Endurol système immunitaire favorise les défenses naturelles de l'organisme. </p>
<p>L'échinacée pourpre est une plante médicinale utilisée en prévention de certaines affections hivernales. Le coenzyme Q10 contribue à la production d'énergie essentielle au fonctionnement des cellules de l'immunité.</p>
<p class="p1">Le sélénium et le zinc sont deux oligo-éléments essentiels à un bon fonctionnement du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401595407613</g:gtin>
<g:brand><![CDATA[ DISSOLVUROL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a9a07446d2f3de361cc04ed9db1174e6c1e2ba0371b90bc06d33e2bc69e3920a ]]></g:image_link>
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
<title><![CDATA[ Eneomey Daylight C20 airless 30ml ]]></title>
<g:id>d6d5c76e-0c16-4dd8-b335-a10faf6cfb2d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-daylight c20 airless 30ml?d6d5c76e-0c16-4dd8-b335-a10faf6cfb2d ]]></link>
<g:price><![CDATA[ 5540.00 EUR ]]></g:price>
<description><![CDATA[ <p>La perte d’éclat est un des premiers signes du vieillissement cutané, dû à 80% aux agressions extérieures (UV, pollution, tabac, stress, manque de sommeil). Votre peau a donc besoin d’être à la fois protégée et revitalisée au quotidien. </p>
<p> Pour lutter contre l’oxydation des cellules de la peau et la perte d’éclat, la Vitamine C est un actif indispensable d’'un rituel beauté efficace. Elle préserve nos cellules du vieillissement cutané, aide notre organisme à lutter contre les agressions ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360263888</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/137c3b046e9ae07ab406a26d9d2a5255efde688d33b2d2fc30bf1583047458b3 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Light Renew Gel 30 ml ]]></title>
<g:id>01e6a1fa-027e-41fb-9061-f8b76733f26c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-light renew gel 30 ml?01e6a1fa-027e-41fb-9061-f8b76733f26c ]]></link>
<g:price><![CDATA[ 4850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le gel dépigmentant LIGHT RENEW GEL atténue les imperfections pigmentaires : mélasma, taches de vieillesse, masque de grossesse, hyperpigmentation, lentigo solaire, cicatrices d'acné… et réduit les différents signes du vieillissement cutané.</p>
<p>Bénéficiez de résultats visibles sur votre peau dès 3 semaines. </p>
<p>Les taches pigmentaires sont la 3ème préoccupation beauté des femmes après les rides et le relâchement cutané. Surtout visibles sur le front, les joues, les mains ou encore le  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000011</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c200923e874cf9698901cf74dbc67e47dd5c7912c250b7f0c97b0ddec33ae9f ]]></g:image_link>
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
<title><![CDATA[ Eneomey Lip Stimulation 4 ml ]]></title>
<g:id>7a1a0305-b9fe-4025-81ea-9e2f7d6ab6ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-lip stimulation 4 ml?7a1a0305-b9fe-4025-81ea-9e2f7d6ab6ab ]]></link>
<g:price><![CDATA[ 2250.00 EUR ]]></g:price>
<description><![CDATA[ <p>1 FORMULE UNIQUE POUR 3 ACTIONS</p>
<h5>LIP STIMULATION, gloss 3-en-1, regalbe et lisse les lèvres, leur redonne de la souplesse et leur douceur naturelle, et les hydrate intensément.</h5>
<p>Vos lèvres sont sublimées, regalbées et repulpées. </p>
<p></p>
<p>Avec l’âge, les lèvres sont sujettes au vieillissement cutané et perdent de leur volume. Grâce à un complexe stimulant innovant, LIP STIMULATION lisse et repulpe les lèvres.</p>
<p> Idéal pour les lèvres fines, le gloss LIP STIMULATION as ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000097</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9a030bd7d5b48ceb7b9f4bb83033eb7e1cfbb2ef48d6eb1ae3d89d718280d3f6 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Lip nutrition Effet gloss 4 ml ]]></title>
<g:id>0b030f24-e7b6-486b-bdb0-abdc348f8dc1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-lip nutrition effet gloss 4 ml?0b030f24-e7b6-486b-bdb0-abdc348f8dc1 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Froid, vent, soleil, intérieurs surchauffés… Nos lèvres sont souvent mises à rude épreuve. Délicate et sensible, la peau des lèvres est l’une des zones les plus exposées aux agressions extérieures. Afin d’éviter qu’elle ne se dessèche et s’abime, utilisez 2 à 3 fois par jour LIP NUTRITION, notre gloss hydratant nourrissant. </p>
<p> Bien plus qu'un gloss, LIP NUTRITION est un véritable soin double action : réparateur et protecteur. Grâce à sa combinaison d'actifs hydratants et antioxydants, i ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000080</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/44b8415d479e118182deb0f013da0822f23223061123b7bb716d5e9adc37b487 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Perfect body 30 150ml ]]></title>
<g:id>9e1e17d5-fa60-4e1b-a372-06f56d4fa668</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-perfect body 30 150ml?9e1e17d5-fa60-4e1b-a372-06f56d4fa668 ]]></link>
<g:price><![CDATA[ 6450.00 EUR ]]></g:price>
<description><![CDATA[ <p>PERFECT BODY 30 réduit le relâchement cutané des bras, des jambes, des fesses, du ventre et des seins.</p>
<p>Ce lait raffermit les tissus cutanés, améliore la qualité et la tonicité de la peau et réduit l’aspect des vergetures.</p>
<p></p>
<p>Comme la peau de notre visage, la peau de notre corps est sensible aux effets du temps et perd de sa tonicité. Elle mérite elle aussi les bénéfices de l'expertise de notre laboratoire en formules concentrées en acide de fruit (AHA). </p>
<p> PERFECT BOD ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000042</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2995316a202d3da6f8b668aee0a73107d1fd12419f0db3fdd65ed198a448ce6d ]]></g:image_link>
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
<title><![CDATA[ Eneomey Purify Gel sébo-régulateur 30ml ]]></title>
<g:id>d7cb5ff2-9b3a-4b2e-b717-2ec04a48d338</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-purify gel sébo-régulateur 30ml?d7cb5ff2-9b3a-4b2e-b717-2ec04a48d338 ]]></link>
<g:price><![CDATA[ 3230.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’acné juvénile et adulte peuvent être causées par des pores obstrués, une sur-production de sébum et la présence de bactéries responsables de l’acné. Il est important de nettoyer sa peau tous les jours pour désincruster les pores et d’appliquer un soin adapté. </p>
<p> </p>
<p>PURIFY GEL vous offre une action complète : il désincruste la peau, réduit les comédons, et régule la production de sébum. Grâce à sa formule unique, les signes physiques et fonctionnels de l’acné sont réduits. </p>
<p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000547</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02582084cf6e48ef4ee552012676f14fd9eee0849d63742979445434d82020d3 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Purify masque 10 50ml ]]></title>
<g:id>4388ce6b-f349-4bc8-b531-9dabcfaa6ce8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-purify masque 10 50ml?4388ce6b-f349-4bc8-b531-9dabcfaa6ce8 ]]></link>
<g:price><![CDATA[ 3790.00 EUR ]]></g:price>
<description><![CDATA[ <p>JE VEUX UNE PEAU SAINE ET PURIFIÉE</p>
<p>En 2 minutes seulement, PURIFY MASQUE 10 élimine les cellules mortes, l’excès de sébum et réduit le sébum des peaux mixtes et grasses.</p>
<p>Votre grain de peau est affiné et vos pores sont resserrés. </p>
<p></p>
<p>L’acné, qu'elle soit juvénile ou adulte, peut être causée par des pores obstrués, une sur-production de sébum et la présence de bactéries responsables du développement de l’acné. </p>
<p>Composé à 10% d'Acide Glycolique, PURIFY MASQUE 10 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000066</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d3805824e3e0abeef3a275e0b2324475c131f42a9c608782d0daea1c59f0927a ]]></g:image_link>
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
<title><![CDATA[ Eneomey Repair cream 50 ml ]]></title>
<g:id>2f7f965e-6598-4d4a-a55b-3bd5f27936dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-repair cream 50 ml?2f7f965e-6598-4d4a-a55b-3bd5f27936dc ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <div id="ene-product-description">
<p>REPAIR CREAM répare, apaise et nourrit les peaux sensibilisées et réduit les rougeurs. </p>
<p>Elle contient une technologie d'actifs qui aide à la régénération naturelle de l’épiderme et renforce la barrière hydrolipidique de la peau pour préserver son hydratation. </p>
<p>Face aux agressions cutanées telles que la pollution, le stress, les variations de températures ou encore les actes esthétiques, notre peau a besoin d’être hydratée. Le secret d’une peau  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000073</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32f3260183f7a6e32482a4cd9a5996fbba9d3b380811360699159b7273c99503 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Soft Cleanser 150 ml ]]></title>
<g:id>bba605d4-4a19-43d8-83f7-a9b459ad8cdf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-soft cleanser 150 ml?bba605d4-4a19-43d8-83f7-a9b459ad8cdf ]]></link>
<g:price><![CDATA[ 4190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoyer sa peau est le geste indispensable de tout programme beauté. </p>
<p>SOFT CLEANSER élimine délicatement les cellules mortes et impuretés pour une peau éclatante, lisse et propre. </p>
<p></p>
<p>Pour préserver votre capital jeunesse et optimiser l'action de vos programmes de soin, un nettoyage quotidien de la peau est primordial. En effet, résidus de maquillage, pollution et cellules mortes limitent le renouvellement cellulaire et la pénétration des actifs. </p>
<p>SOFT CLEANSER vous ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360263895</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b81a615defe646eee68adf245b21260573dc09ba9508410462edd2dcd5283c99 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Stim renew 15 50ml ]]></title>
<g:id>cb5c051a-b8bc-4d60-9d44-715e25a0cae6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-stim renew 15 50ml?cb5c051a-b8bc-4d60-9d44-715e25a0cae6 ]]></link>
<g:price><![CDATA[ 4990.00 EUR ]]></g:price>
<description><![CDATA[ <p>STIM RENEW 15 ravive le teint et redensifie la peau et la lisse en améliorant son élasticité sa tonicité.</p>
<p>Les signes de vieillissement cutané sont visiblement réduits, dès 3 semaines.</p>
<p></p>
<p>Profitez du pouvoir des acides de fruits : la gamme de soins de nuit STIM RENEW est formulée avec de l'acide glycolique, qui accélère le renouvellement cellulaire de la peau naturellement activé durant la nuit.</p>
<p> La formule de STIM RENEW 15 a été spécifiquement développée pour lisser  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360263925</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/129b15351968a0b525093b0b684dd8f0df89ccdc20a6dc6da7f1cc107e540342 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Stim renew 30 50ml ]]></title>
<g:id>ba025e95-6d57-49c8-9b74-35e61bf08614</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-stim renew 30 50ml?ba025e95-6d57-49c8-9b74-35e61bf08614 ]]></link>
<g:price><![CDATA[ 5430.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>STIM RENEW 30 estompe les effets du vieillissement : il réduit le relâchement cutané, améliore la tonicité et raffermit la peau. </span></p>
<p>Profitez du pouvoir des acides de fruits : la gamme de soins de nuit STIM RENEW est formulée avec de l'acide glycolique, qui accélère le renouvellement cellulaire de la peau naturellement activé durant la nuit.</p>
<p> La formule de STIM RENEW 30 est spécialement développée pour lisser les rides, et redensifier et raffermir les peaux matures (à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664397000004</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9caf41cd6e2193287e697bfe47a61ee93ccc98d946cb5f5a144e9f3da7c62a55 ]]></g:image_link>
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
<title><![CDATA[ Eneomey Stim renew 8 50ml ]]></title>
<g:id>43bd8233-dd25-402c-b9e6-cda708ded961</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eneomey-stim renew 8 50ml?43bd8233-dd25-402c-b9e6-cda708ded961 ]]></link>
<g:price><![CDATA[ 4890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Idéal pour lutter contre les premières rides, STIM RENEW 8 affine le grain de peau et homogénéise le teint.</span></p>
<p>Profitez du pouvoir des acides de fruits : la gamme de soins de nuit STIM RENEW est formulée avec de l'acide glycolique, qui accélère le renouvellement cellulaire de la peau naturellement activé durant la nuit.</p>
<p> La formule de STIM RENEW 8 est spécialement créée pour lutter contre les premiers signes du vieillissement cutané : ridules, teint terne et petits déf ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360263918</g:gtin>
<g:brand><![CDATA[ ENEOMEY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4790ae76e3388b70c1d56994f10fe686025b7a46459c5314f101927987ed9cc4 ]]></g:image_link>
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
<title><![CDATA[ Ephydrol Pedilane spray déodorant régulateur pieds 60ml ]]></title>
<g:id>434f1a55-b90f-4c3c-acc9-9a3a188833cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/ephydrol-pedilane spray déodorant régulateur pieds 60ml?434f1a55-b90f-4c3c-acc9-9a3a188833cd ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ephydrol Pedilane Vaporisateur Déodorant Pieds Sudo-régulateur est composé d'une formule enrichie en actifs assainissants et antibactériens permettant d'éviter les mauvaises odeurs, et d'un actif sudorégulateur pour réguler efficacement la sécrétion de sueur au niveau des pieds sans la bloquer.</p>
<p>Rafraichis, les pieds respirent sans transpirer excessivement.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401397099702</g:gtin>
<g:brand><![CDATA[ SINCLAIR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53b048f91e9c1b09309b013b914cd8fd66b868febb05bf7a9df762147a88edec ]]></g:image_link>
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
<title><![CDATA[ Epitact Doigtier Cor Pulpaire Ongle Incarné - Taille S ]]></title>
<g:id>8ea38483-fdc2-4426-b964-6729a582afdd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtier cor pulpaire ongle incarné - taille s?8ea38483-fdc2-4426-b964-6729a582afdd ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Epitact Doigtier Cor Pulpaire Ongle Incarné - Taille S est un doigtier qui protège l'extrémité des orteils et soulage les douleurs : cor pulpaire, ongle bleu,</p>
<p>ongle incarné...Porté quotidiennement, il élimine le cor. De faible épaisseur, il ne provoque aucune gêne dans les chaussures.</p>
<p>Le gel d'Epithelium 26 est inséré entre 2 couches de tissu pour une meilleure résistance à l'usu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002278</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa2b63cdd1e806019d48de42c6de94430f4e250ea61b8680b5e48b7219d28f04 ]]></g:image_link>
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
<title><![CDATA[ Epitact Doigtiers à l'Epithelium 26 Lot de 2 ]]></title>
<g:id>e1b9e4ae-e2e2-4f61-8582-c23560d1938d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtiers à l'epithelium 26 lot de 2?e1b9e4ae-e2e2-4f61-8582-c23560d1938d ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Epitact Doigtiers à l'Epithelium 26 sont des doigtiers qui protègent l'extrémité des orteils et soulagent les douleurs : cor pulpaire, ongle bleu, ongle</p>
<p>incarné... Portés quotidiennement, ils éliminent les cors.</p>
<p>Intégré dans le doigtier, le gel d'Epithelium 26® répartit les pressions et soulage immédiatement la douleur.</p>
<p>En protégeant la peau des agressions, il désactive le processus de formation de corne et entraîne naturellement la disparition du cor.</p>
<p>De faible ép ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001981</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f3988349d7fff4560f2d1f7eedfefc811cfe347a0d30567572ede666ab8269f3 ]]></g:image_link>
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
<title><![CDATA[ Epitact Semelles Thérapeutiques Jambes Légères - Taille : 36-38 ]]></title>
<g:id>6ed9cd23-68c0-45c9-9b83-9de7d12e2096</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-semelles thérapeutiques jambes légères - taille : 36-38?6ed9cd23-68c0-45c9-9b83-9de7d12e2096 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Epitact Semelles Thérapeutiques Jambes Légères - Taille : 36-38 sont des semelles thérapeutiques indiquées en cas de troubles de la circulation sanguine des membres inférieurs, d'insuffisance veineuse et de varices débutantes.<br>En activant la pompe plantaire à chaque pas, elles stimulent la circulation sanguine et soulagent rapidement les symptômes de jambes lourdes et douloureuses et les sensations de gonflement.</p><p>Elles se composent :</p><ul><li><p>de billes de gel réparties de façon  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396020425</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/59ad845627f6b8c2ca1fdd462cc3aca1c7bd5d7eaaa28634d9ae2abaed275b75 ]]></g:image_link>
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
<title><![CDATA[ Epitact Semelles Thérapeutiques Jambes Légères - Taille : 39-41 ]]></title>
<g:id>2ba5e3de-309d-4fca-84d1-58f5ec025100</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-semelles thérapeutiques jambes légères - taille : 39-41?2ba5e3de-309d-4fca-84d1-58f5ec025100 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Epitact Semelles Thérapeutiques Jambes Légères - Taille : 39-41 sont des semelles thérapeutiques indiquées en cas de troubles de la circulation sanguine des membres inférieurs, d'insuffisance veineuse et de varices débutantes.<br>En activant la pompe plantaire à chaque pas, elles stimulent la circulation sanguine et soulagent rapidement les symptômes de jambes lourdes et douloureuses et les sensations de gonflement.</p><p>Elles se composent :</p><ul><li><p>de billes de gel réparties de façon  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396020432</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dc72fef824345d3a11b63eafaaa72a189370d6119aae71de1fa739ee4b4f8db9 ]]></g:image_link>
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
<title><![CDATA[ Epitact barrettes sous-diaphysaires femme ]]></title>
<g:id>77f6fef2-11ff-48b7-b892-287d982c7657</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-barrettes sous-diaphysaires femme?77f6fef2-11ff-48b7-b892-287d982c7657 ]]></link>
<g:price><![CDATA[ 2350.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>UNE FORME SPÉCIFIQUE POUR UN CONFORT IMMÉDIAT.</strong></p>
<p>Vous avez un ou plusieurs orteils en marteau ou en griffe ? Orientez-vous vers les barrettes sous-diaphysaires EPITACT® développées pour allonger confortablement les orteils déformés et limiter ainsi la formation de cors.</p>
<p>Se chausser lorsque l’on a un orteil en marteau ou en griffe peut être très douloureux. En protégeant l’orteil sans le redresser, le risque est qu’il finisse par se fixer dans cette position et qu’ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001660</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28ac3261f05c4f76762eee18a4b4ad8db8003b5a7d7c841e7b1a59b9159f8647 ]]></g:image_link>
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
<title><![CDATA[ Epitact barrettes sous-diaphysaires homme x2 ]]></title>
<g:id>49ab912e-b3f4-4471-8156-ff104ed5a861</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-barrettes sous-diaphysaires homme x2?49ab912e-b3f4-4471-8156-ff104ed5a861 ]]></link>
<g:price><![CDATA[ 2350.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Une forme spécifique pour un confort immédiat</strong></p>
<p>Vous avez un ou plusieurs orteils en marteau ou en griffe ? Orientez-vous vers les barrettes sous-diaphysaires EPITACT® développées pour allonger confortablement les orteils déformés et limiter ainsi la formation de cors.<br />Se chausser lorsque l’on a un orteil en marteau ou en griffe peut être très douloureux. En protégeant l’orteil sans le redresser, le risque est qu’il finisse par se fixer dans cette position et qu’il  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001677</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/676e146be8cf6808c03547b8ebdef282efd268326ad2ae442bb65085f0e037b1 ]]></g:image_link>
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
<title><![CDATA[ Epitact carp'activ orthèse poignet souple d'activité droite taille S ]]></title>
<g:id>aafe9bd5-760e-46ac-8595-546c34bb594d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-carp'activ orthèse poignet souple d'activité droite taille s?aafe9bd5-760e-46ac-8595-546c34bb594d ]]></link>
<g:price><![CDATA[ 1620.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour apaiser les fourmillements et douleurs liés au Syndrome du CANAL CARPIEN</strong></p>
<p>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !<br />EPITACT a créé une orthèse souple d’activité, CARP’ACTIV, qui accompagne le poignet durant vos activités. Idéale si vous souffrez du syndrome du canal carpien .</p>
<p>Le port de l’orthèse souple d’activité CARP’ACTIV est préconisé lors de vos activités quotidiennes en cas de syndrome du canal carpien, de troubles musculo-squelettiques ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396012048</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94fc22b057f7c3426dcf92940ba89472d6f7ad1e6b80aee22652a846d1e944d9 ]]></g:image_link>
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
<title><![CDATA[ Epitact carp'activ orthèse poignet souple d'activité gauche taille L ]]></title>
<g:id>d4345e19-7f55-4955-861c-49a3768a38d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-carp'activ orthèse poignet souple d'activité gauche taille l?d4345e19-7f55-4955-861c-49a3768a38d4 ]]></link>
<g:price><![CDATA[ 1620.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour apaiser les fourmillements et douleurs liés au Syndrome du CANAL CARPIEN</strong></p>
<p>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !<br />EPITACT a créé une orthèse souple d’activité, CARP’ACTIV, qui accompagne le poignet durant vos activités. Idéale si vous souffrez du syndrome du canal carpien .</p>
<p>Le port de l’orthèse souple d’activité CARP’ACTIV est préconisé lors de vos activités quotidiennes en cas de syndrome du canal carpien, de troubles musculo-squelettiques ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396012093</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94fc22b057f7c3426dcf92940ba89472d6f7ad1e6b80aee22652a846d1e944d9 ]]></g:image_link>
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
<title><![CDATA[ Epitact carp'activ orthèse poignet souple d'activité gauche taille M ]]></title>
<g:id>cb6a484b-4337-4841-83d9-0a60ec618d79</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-carp'activ orthèse poignet souple d'activité gauche taille m?cb6a484b-4337-4841-83d9-0a60ec618d79 ]]></link>
<g:price><![CDATA[ 1620.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour apaiser les fourmillements et douleurs liés au Syndrome du CANAL CARPIEN</strong></p>
<p>Enfin une solution adaptée aux gestes du quotidien !<br />Epitact a créé une orthèse souple d’activité, CARP’ACTIV, qui accompagne le poignet durant vos activités. Idéale si vous souffrez du syndrome du canal carpien .</p>
<p>Le port de l’orthèse souple d’activité CARP’ACTIV est préconisé lors de vos activités quotidiennes en cas de syndrome du canal carpien, de troubles musculo-squelettiques ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396012079</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94fc22b057f7c3426dcf92940ba89472d6f7ad1e6b80aee22652a846d1e944d9 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets comfortact plus taille L ]]></title>
<g:id>79224f64-f4ca-446d-842a-923059f14480</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets comfortact plus taille l?79224f64-f4ca-446d-842a-923059f14480 ]]></link>
<g:price><![CDATA[ 2440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous ressentez des douleurs sous l’avant pied, des pressions lors de la marche ? Ultra confortable, la bretelle ergonomique épouse les courbes naturelles du gros orteil. Elle est conçue pour limiter les risques d'irritations interdigitales (entre les doigts de pieds). En zone plantaire, un module en gel de silicone EPITHELIUM 26™ à effet "billes" a été spécialement développé pour accueillir confortablement l'avant-pied et répartir les pressions.</p>
<p>Les coussinets COMFORTACT PLUS vous proc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396013526</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bbc60eb427a149c03129e064de46a36a72db851a6e2a4ceab673c10772029974 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets comfortact plus taille M ]]></title>
<g:id>7e83217d-822b-437b-bb0a-9233ccf0c539</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets comfortact plus taille m?7e83217d-822b-437b-bb0a-9233ccf0c539 ]]></link>
<g:price><![CDATA[ 2440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous ressentez des douleurs sous l’avant pied, des pressions lors de la marche ? Ultra confortable, la bretelle ergonomique épouse les courbes naturelles du gros orteil. Elle est conçue pour limiter les risques d'irritations interdigitales (entre les doigts de pieds). En zone plantaire, un module en gel de silicone EPITHELIUM 26™ à effet "billes" a été spécialement développé pour accueillir confortablement l'avant-pied et répartir les pressions.</p>
<p>Les coussinets COMFORTACT PLUS vous proc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396013519</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bbc60eb427a149c03129e064de46a36a72db851a6e2a4ceab673c10772029974 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets comfortact plus taille S ]]></title>
<g:id>8914a40d-3556-4880-8060-f0ff915f3e36</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets comfortact plus taille s?8914a40d-3556-4880-8060-f0ff915f3e36 ]]></link>
<g:price><![CDATA[ 2440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous ressentez des douleurs sous l’avant pied, des pressions lors de la marche ? Ultra confortable, la bretelle ergonomique épouse les courbes naturelles du gros orteil. Elle est conçue pour limiter les risques d'irritations interdigitales (entre les doigts de pieds). En zone plantaire, un module en gel de silicone EPITHELIUM 26™ à effet "billes" a été spécialement développé pour accueillir confortablement l'avant-pied et répartir les pressions.</p>
<p>Les coussinets COMFORTACT PLUS vous proc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396013502</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bbc60eb427a149c03129e064de46a36a72db851a6e2a4ceab673c10772029974 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets discrets taille M ]]></title>
<g:id>a669278b-5436-4bce-825d-e4f950312979</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets discrets taille m?a669278b-5436-4bce-825d-e4f950312979 ]]></link>
<g:price><![CDATA[ 2040.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous portez des chaussures ouvertes et souhaitez améliorer votre confort ? Discrets et de faible épaisseur, les coussinets EPITACT® ont été spécialement développés pour s’adapter à toutes les chaussures ; ouvertes ou à talons.</p>
<p>Douleur sous le pied en chaussures d’été ? Lorsque le capiton plantaire naturel s’est aminci et qu’il ne joue plus son rôle de répartiteur de pressions, des douleurs et des sensations de brûlures se font sentir. Ces sensations sont souvent accompagnées de corne s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005194</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d9aaea1cb072beea412263c20749c10d18d67101fc03939d42cdc3d7d400123 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets double protection taille M x2 ]]></title>
<g:id>0a20977d-70ee-4ec3-993d-1c5574a05768</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets double protection taille m x2?0a20977d-70ee-4ec3-993d-1c5574a05768 ]]></link>
<g:price><![CDATA[ 2860.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>2 EN 1, ils protègent les 2 zones simultanément!</strong></p>
<p>Vous avez aussi des douleurs plantaires sous le pied ? Les coussinets double protection EPITACT® ont été développés pour soulager les deux zones, l’hallux valgus (oignon ) et sous l’avant-pied !</p>
<p>Pour vous, « oignon » et douleurs plantaires vont de pair ? Rien d’étonnant : lorsque la déformation est suffisamment importante, le gros orteil ne parvient plus à jouer son rôle de support. Les pressions sont alors report ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000106</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2bc82f32e1ee0ef865e5f13dce5b8097cf70c7749627ae43d83b68da571226b8 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets plantaires durillons taille L x2 ]]></title>
<g:id>52c5c360-c9c5-4253-a1a3-8ea209e2ffe9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets plantaires durillons taille l x2?52c5c360-c9c5-4253-a1a3-8ea209e2ffe9 ]]></link>
<g:price><![CDATA[ 2240.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Vous souffrez de douleurs chroniques ? Pour un usage quotidien, optez pour les coussinets plantaires EPITACT qui visent à protéger et soulager les zones soumises à des pressions ou des frottements excessifs.</strong></p>
<p>Vous ressentez des douleurs sous l’avant pied, échauffements, brûlure, sensation de marcher sur des clous ? …Présence de corne ou de durillon ? Quelle que soit la description, elle est souvent synonyme de douleur intense qui peut handicaper la marche. Cette douleur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000038</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/246a4d2ae3ded1eb4251cf454b3dbf3e640c70110f81fe543577863ddcd2ae96 ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets plantaires durillons taille M x2 ]]></title>
<g:id>867a8de8-207a-4ab9-b664-1df9847e9f72</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets plantaires durillons taille m x2?867a8de8-207a-4ab9-b664-1df9847e9f72 ]]></link>
<g:price><![CDATA[ 2240.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Vous souffrez de douleurs chroniques ? Pour un usage quotidien, optez pour les coussinets plantaires EPITACT qui visent à protéger et soulager les zones soumises à des pressions ou des frottements excessifs.</strong></p>
<p>Vous ressentez des douleurs sous l’avant pied, échauffements, brûlure, sensation de marcher sur des clous ? …Présence de corne ou de durillon ? Quelle que soit la description, elle est souvent synonyme de douleur intense qui peut handicaper la marche. Cette douleur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000021</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cc5f1efc30f19873a06ad95f8db828da546ada5d5818f60f49312357266c8ab ]]></g:image_link>
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
<title><![CDATA[ Epitact coussinets plantaires durillons taille S x2 ]]></title>
<g:id>3e4b6908-c777-4cfa-a814-fe8aa6fcb988</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-coussinets plantaires durillons taille s x2?3e4b6908-c777-4cfa-a814-fe8aa6fcb988 ]]></link>
<g:price><![CDATA[ 2240.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Vous souffrez de douleurs chroniques ? Pour un usage quotidien, optez pour les coussinets plantaires EPITACT qui visent à protéger et soulager les zones soumises à des pressions ou des frottements excessifs.</strong></p>
<p>Vous ressentez des douleurs sous l’avant pied, échauffements, brûlure, sensation de marcher sur des clous ? …Présence de corne ou de durillon ? Quelle que soit la description, elle est souvent synonyme de douleur intense qui peut handicaper la marche. Cette douleur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000014</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/246a4d2ae3ded1eb4251cf454b3dbf3e640c70110f81fe543577863ddcd2ae96 ]]></g:image_link>
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
<title><![CDATA[ Epitact digitubes cors et oeils de perdrix taille L x3 ]]></title>
<g:id>2a8191fd-4f1c-4345-8999-baadad071383</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-digitubes cors et oeils de perdrix taille l x3?2a8191fd-4f1c-4345-8999-baadad071383 ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>EVITE NATURELLEMENT L'APPARITION DU COR SANS PRINCIPE ACTIF !</p>
<p>1 mm de gel protecteur sur la demi-circonférence des Digitubes® suffit à soulager efficacement les cors dorsaux et interdigitaux. Vous pouvez les porter sur les orteils voisins sans aucune gêne !</p>
<p><strong>Un orteil douloureux ? Un cor ou un œil de perdrix (cor situé entre 2 orteils) ? Adoptez les Digitubes® EPITACT® !</strong></p>
<p>Grâce au gel silicone EpitheliumTM qui le constitue, il évite la corne et les douleurs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000083</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2955d587e4848bb1f3ddcfbef7a9dc283ecc517e2ad5f7d7b0d49f927ed2d86 ]]></g:image_link>
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
<title><![CDATA[ Epitact digitubes cors oeils de perdrix taille L ]]></title>
<g:id>bca298b6-8e82-4cd3-b025-4be87b29fa18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-digitubes cors oeils de perdrix taille l?bca298b6-8e82-4cd3-b025-4be87b29fa18 ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p>EVITE NATURELLEMENT L'APPARITION DU COR SANS PRINCIPE ACTIF !</p>
<p>1 mm de gel protecteur sur la demi-circonférence des Digitubes® suffit à soulager efficacement les cors dorsaux et interdigitaux. Vous pouvez les porter sur les orteils voisins sans aucune gêne !</p>
<p><br /><strong>Un orteil douloureux ? Un cor ou un œil de perdrix (cor situé entre 2 orteils) ? Adoptez les Digitubes® EPITACT® !</strong></p>
<p>Grâce au gel silicone EpitheliumTM qui le constitue, il évite la corne et les do ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002261</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2955d587e4848bb1f3ddcfbef7a9dc283ecc517e2ad5f7d7b0d49f927ed2d86 ]]></g:image_link>
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
<title><![CDATA[ Epitact digitubes cors oeils-de-perdrix taille M ]]></title>
<g:id>54595bbc-7c14-4843-afb2-d26eaffc6eb5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-digitubes cors oeils-de-perdrix taille m?54595bbc-7c14-4843-afb2-d26eaffc6eb5 ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p>EVITE NATURELLEMENT L'APPARITION DU COR SANS PRINCIPE ACTIF !</p>
<p>1 mm de gel protecteur sur la demi-circonférence des Digitubes® suffit à soulager efficacement les cors dorsaux et interdigitaux. Vous pouvez les porter sur les orteils voisins sans aucune gêne !</p>
<p><strong>Un orteil douloureux ? Un cor ou un œil de perdrix (cor situé entre 2 orteils) ? Adoptez les Digitubes® EPITACT® !</strong></p>
<p>Grâce au gel silicone EpitheliumTM qui le constitue, il évite la corne et les douleurs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002254</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/033e0d5431951773c0b52596f9369dcbbbdd98b3da14e40c7ada55168a06e6a2 ]]></g:image_link>
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
<title><![CDATA[ Epitact digitubes cors oeils-de-perdrix taille M x3 ]]></title>
<g:id>380c3d3e-d48a-450b-aeb5-340d71bcbf48</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-digitubes cors oeils-de-perdrix taille m x3?380c3d3e-d48a-450b-aeb5-340d71bcbf48 ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>EVITE NATURELLEMENT L'APPARITION DU COR SANS PRINCIPE ACTIF !</p>
<p>1 mm de gel protecteur sur la demi-circonférence des Digitubes® suffit à soulager efficacement les cors dorsaux et interdigitaux. Vous pouvez les porter sur les orteils voisins sans aucune gêne !</p>
<p><strong>Un orteil douloureux ? Un cor ou un œil de perdrix (cor situé entre 2 orteils) ? Adoptez les Digitubes® EPITACT® !</strong></p>
<p>Grâce au gel silicone EpitheliumTM qui le constitue, il évite la corne et les douleurs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000076</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc9ebd4b089134550e838be022f371d519ba2e04316de71c3ec024943a4ad810 ]]></g:image_link>
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
<title><![CDATA[ Epitact digitubes cors oeils-de-perdrix taille S x1 ]]></title>
<g:id>d9f6d011-e25a-4388-b003-15dbffcba377</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-digitubes cors oeils-de-perdrix taille s x1?d9f6d011-e25a-4388-b003-15dbffcba377 ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p>EVITE NATURELLEMENT L'APPARITION DU COR SANS PRINCIPE ACTIF !</p>
<p>1 mm de gel protecteur sur la demi-circonférence des Digitubes® suffit à soulager efficacement les cors dorsaux et interdigitaux. Vous pouvez les porter sur les orteils voisins sans aucune gêne !</p>
<p><strong>Un orteil douloureux ? Un cor ou un œil de perdrix (cor situé entre 2 orteils) ? Adoptez les Digitubes® EPITACT® !</strong></p>
<p>Grâce au gel silicone EpitheliumTM qui le constitue, il évite la corne et les douleurs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002247</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6af30200c5190f810a7d078a42e931c19fff6e266f7561d655403e0225a443b4 ]]></g:image_link>
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
<title><![CDATA[ Epitact digitubes cors oeils-de-perdrix taille S x3 ]]></title>
<g:id>a3e693c7-9bd9-4a6a-9037-8f62b0600c5f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-digitubes cors oeils-de-perdrix taille s x3?a3e693c7-9bd9-4a6a-9037-8f62b0600c5f ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>EVITE NATURELLEMENT L'APPARITION DU COR SANS PRINCIPE ACTIF !</p>
<p>1 mm de gel protecteur sur la demi-circonférence des Digitubes® suffit à soulager efficacement les cors dorsaux et interdigitaux. Vous pouvez les porter sur les orteils voisins sans aucune gêne !</p>
<p><strong>Un orteil douloureux ? Un cor ou un œil de perdrix (cor situé entre 2 orteils) ? Adoptez les Digitubes® EPITACT® !</strong></p>
<p>Grâce au gel silicone EpitheliumTM qui le constitue, il évite la corne et les douleurs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000069</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc9ebd4b089134550e838be022f371d519ba2e04316de71c3ec024943a4ad810 ]]></g:image_link>
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
<title><![CDATA[ Epitact doigtier cor pulpaire et ongle incarné taille L ]]></title>
<g:id>3d629002-0183-4593-ad18-90ed93cc8bbe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtier cor pulpaire et ongle incarné taille l?3d629002-0183-4593-ad18-90ed93cc8bbe ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour protéger les orteils et soulager la douleur des cors pulpaires et ongles incarnés ou bleu</strong></p>
<p>L’extrémité de l’orteil est une zone très sensible. Lorsqu’elle entre en conflit avec la chaussure, les douleurs ressenties sont vives. Si le bout du doigt de pied présente un cor ou des callosité s, un ongle incarné ou s’il est soumis à une succession de traumatismes mécaniques (microchocs) les douleurs sont particulièrement intenses. Pour protéger la pulpe de l’orteil, le d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002292</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa2b63cdd1e806019d48de42c6de94430f4e250ea61b8680b5e48b7219d28f04 ]]></g:image_link>
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
<title><![CDATA[ Epitact doigtier cor pulpaire ongle incarné taille M x1 ]]></title>
<g:id>016fce6e-f4f3-4a15-bea2-d0c71db914c3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtier cor pulpaire ongle incarné taille m x1?016fce6e-f4f3-4a15-bea2-d0c71db914c3 ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour protéger les orteils et soulager la douleur des cors pulpaires et ongles incarnés ou bleu</strong></p>
<p>L’extrémité de l’orteil est une zone très sensible. Lorsqu’elle entre en conflit avec la chaussure, les douleurs ressenties sont vives. Si le bout du doigt de pied présente un cor ou des callosité s, un ongle incarné ou s’il est soumis à une succession de traumatismes mécaniques (microchocs) les douleurs sont particulièrement intenses. Pour protéger la pulpe de l’orteil, le d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002285</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/227ad62aac390b0f8f040ca491be78cea65d717d06e015dda82cd1fa5ee47158 ]]></g:image_link>
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
<title><![CDATA[ Epitact doigtier protection hallux valgus taille S ]]></title>
<g:id>f2e160d0-2149-4ef3-aa46-dd9767eea6f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtier protection hallux valgus taille s?f2e160d0-2149-4ef3-aa46-dd9767eea6f2 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>SEULEMENT 1MM D'ÉPAISSEUR pour une PROTECTION OPTIMALE !</strong></p>
<p>Pour un usage quotidien, adoptez la protection hallux valgus EPITACT® ! Fine et discrète, elle a pour objectif de limiter les frottements et d'apaiser les douleurs conflictuelles avec la chaussure.</p>
<p>Vous souffrez d’un oignon au pied ? Même si la déformation n’est pas très marquée, le chaussage est très vite douloureux. Le conflit avec la chaussure crée des douleurs sur l’excroissance osseuse et de la corne  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000120</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/598f06b3d94bc2a6c1fcf257e8da31c7dbe8e140a9737664e575d3b6700ca720 ]]></g:image_link>
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
<title><![CDATA[ Epitact doigtiers cors pulpaires et ongles incarnés taille L x2 ]]></title>
<g:id>27a3351d-4087-4b12-b698-db4ccf1462a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtiers cors pulpaires et ongles incarnés taille l x2?27a3351d-4087-4b12-b698-db4ccf1462a4 ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour protéger les orteils et soulager la douleur des cors pulpaires et ongles incarnés ou bleu</strong></p>
<p>L’extrémité de l’orteil est une zone très sensible. Lorsqu’elle entre en conflit avec la chaussure, les douleurs ressenties sont vives. Si le bout du doigt de pied présente un cor ou des callosité s, un ongle incarné ou s’il est soumis à une succession de traumatismes mécaniques (microchocs) les douleurs sont particulièrement intenses. Pour protéger la pulpe de l’orteil, le d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001998</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f3988349d7fff4560f2d1f7eedfefc811cfe347a0d30567572ede666ab8269f3 ]]></g:image_link>
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
<title><![CDATA[ Epitact doigtiers cors pulpaires ongles incarnés taille S x2 ]]></title>
<g:id>fede94b7-18b0-4aa0-b056-9133290e54fa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-doigtiers cors pulpaires ongles incarnés taille s x2?fede94b7-18b0-4aa0-b056-9133290e54fa ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pour protéger les orteils et soulager la douleur des cors pulpaires et ongles incarnés ou bleu</strong></p>
<p>L’extrémité de l’orteil est une zone très sensible. Lorsqu’elle entre en conflit avec la chaussure, les douleurs ressenties sont vives. Si le bout du doigt de pied présente un cor ou des callosité s, un ongle incarné ou s’il est soumis à une succession de traumatismes mécaniques (microchocs) les douleurs sont particulièrement intenses. Pour protéger la pulpe de l’orteil, le d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001974</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3242d2b04356c83e23427ad921433bb9e05352c05636d2104febe10da46a05b6 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective double hallux valgus droit taille M ]]></title>
<g:id>8c80596d-98c4-4bab-88df-9fec413eea84</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective double hallux valgus droit taille m?8c80596d-98c4-4bab-88df-9fec413eea84 ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p>UN PRODUIT 3 en 1 !</p>
<p>Vous avez un hallux valgus et des durillons sous le pied ? Cette orthèse a été développée pour corriger la déformation et supprimer les frottements sur "l’oignon " tout en soulageant les douleurs plantaires.</p>
<p>Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsiens. De ce fait, des zones de corne, de callosité s par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005774</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fd4bc3f06fa859ac50327ad5fe7e361165c50eefeede6563cdc57bbd0f44763 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective double hallux valgus droit taille S ]]></title>
<g:id>1bbf3594-9ab5-4363-a115-806c13a34c21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective double hallux valgus droit taille s?1bbf3594-9ab5-4363-a115-806c13a34c21 ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>UN PRODUIT 3 en 1 !</strong></p>
<p>Vous avez un hallux valgus et des durillons sous le pied ? Cette orthèse a été développée pour corriger la déformation et supprimer les frottements sur "l’oignon " tout en soulageant les douleurs plantaires.</p>
<p>Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsiens. De ce fait, des zones de corne, d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005750</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/55daa981270dde7e0ea6444dfdff57beb22811f0e99b11203197c80c4bf50f70 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective double hallux valgus gauche taille M ]]></title>
<g:id>a851b3f6-a8fc-4bd7-81ae-b51f7c8cc555</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective double hallux valgus gauche taille m?a851b3f6-a8fc-4bd7-81ae-b51f7c8cc555 ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p>UN PRODUIT 3 en 1 !</p>
<p>Vous avez un hallux valgus et des durillons sous le pied ? Cette orthèse a été développée pour corriger la déformation et supprimer les frottements sur "l’oignon " tout en soulageant les douleurs plantaires.</p>
<p>Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsiens. De ce fait, des zones de corne, de callosité s par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005781</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fd4bc3f06fa859ac50327ad5fe7e361165c50eefeede6563cdc57bbd0f44763 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective double hallux valgus gauche taille S ]]></title>
<g:id>16eda27f-aad7-4912-bdfa-be76d352f160</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective double hallux valgus gauche taille s?16eda27f-aad7-4912-bdfa-be76d352f160 ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p>UN PRODUIT 3 en 1 !</p>
<p>Vous avez un hallux valgus et des durillons sous le pied ? Cette orthèse a été développée pour corriger la déformation et supprimer les frottements sur "l’oignon " tout en soulageant les douleurs plantaires.</p>
<p>Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsiens. De ce fait, des zones de corne, de callosité s par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005767</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fd4bc3f06fa859ac50327ad5fe7e361165c50eefeede6563cdc57bbd0f44763 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective jour hallux valgus oignon taille L ]]></title>
<g:id>f2a391be-bcac-4c91-bf64-def981fc6dfb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective jour hallux valgus oignon taille l?f2a391be-bcac-4c91-bf64-def981fc6dfb ]]></link>
<g:price><![CDATA[ 2255.00 EUR ]]></g:price>
<description><![CDATA[ <p>UNE ORTHÈSE QUI VISE A CORRIGER LA DÉFORMATION LORS DE LA MARCHE.</p>
<p>Vous souhaitez limiter l’évolution de l’hallux valgus et soulager les douleurs articulaires et conflictuelles avec la chaussure ? L’orthèse souple EPITACT® agit sur les facteurs aggravant la déformation, contrairement aux orthèses rigides.</p>
<p>L'EPITHELIUM FLEX®, technologie brevetée, offre une orthèse souple et ultra fine pour s'adapter à toutes les chaussures.</p>
<p>L'orthèse corrective hallux valgus EPITACT® a été ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005224</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ca610f2caa475d77cc851c4967d30eb91dd6d625c48107b8333ac84bee029549 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective jour hallux valgus oignon taille M x1 ]]></title>
<g:id>4ab14fee-add7-48da-9b6e-532ab2b577d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective jour hallux valgus oignon taille m x1?4ab14fee-add7-48da-9b6e-532ab2b577d4 ]]></link>
<g:price><![CDATA[ 2255.00 EUR ]]></g:price>
<description><![CDATA[ <p>UNE ORTHÈSE QUI VISE A CORRIGER LA DÉFORMATION LORS DE LA MARCHE.</p>
<p>Vous souhaitez limiter l’évolution de l’hallux valgus et soulager les douleurs articulaires et conflictuelles avec la chaussure ? L’orthèse souple EPITACT® agit sur les facteurs aggravant la déformation, contrairement aux orthèses rigides.</p>
<p>L'EPITHELIUM FLEX®, technologie brevetée, offre une orthèse souple et ultra fine pour s'adapter à toutes les chaussures.</p>
<p>L'orthèse corrective hallux valgus EPITACT® a été ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005217</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ca610f2caa475d77cc851c4967d30eb91dd6d625c48107b8333ac84bee029549 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective jour hallux valgus oignon taille S ]]></title>
<g:id>66f4ec68-4aa0-4935-9f38-139e3e7bc436</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective jour hallux valgus oignon taille s?66f4ec68-4aa0-4935-9f38-139e3e7bc436 ]]></link>
<g:price><![CDATA[ 2255.00 EUR ]]></g:price>
<description><![CDATA[ <p>UNE ORTHÈSE QUI VISE A CORRIGER LA DÉFORMATION LORS DE LA MARCHE.</p>
<p>Vous souhaitez limiter l’évolution de l’hallux valgus et soulager les douleurs articulaires et conflictuelles avec la chaussure ? L’orthèse souple EPITACT® agit sur les facteurs aggravant la déformation, contrairement aux orthèses rigides.</p>
<p>L'EPITHELIUM FLEX®, technologie brevetée, offre une orthèse souple et ultra fine pour s'adapter à toutes les chaussures.</p>
<p>L'orthèse corrective hallux valgus EPITACT® a été ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005200</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/786b373889bbf4aeb1179e9ae7a88ad88033d051832f4fc231f7746fa1cd4893 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective nuit hallux valgus oignon taille M ]]></title>
<g:id>55de3423-6efd-43bb-a719-ec73c138f5a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective nuit hallux valgus oignon taille m?55de3423-6efd-43bb-a719-ec73c138f5a3 ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Conçue pour limiter l'évolution et apaiser les douleurs la nuit.</strong></p>
<p><strong></strong><br />THERMOFORMABLE PLUSIEURS FOIS, ELLE EST ÉVOLUTIVE !</p>
<p>Vous avez des douleurs la nuit sur votre oignon ? L’orthèse corrective de nuit EPITACT® pour hallux valgus a été conçue pour soulager les douleurs articulaires nocturnes et supprimer les douleurs de contact tout en se faisant oublier pendant le sommeil.<br />L'orthèse corrective hallux valgus nuit EPITACT® a pour objectif de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396007501</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/769d1cb04160e45330a3cd2ec55bb908d38ad2a379a588e1bd7d3ffce3838c20 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective nuit hallux valgus oignon taille S ]]></title>
<g:id>6e4b4f3b-e878-4ce4-8040-bb48518b1b9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective nuit hallux valgus oignon taille s?6e4b4f3b-e878-4ce4-8040-bb48518b1b9c ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Conçue pour limiter l'évolution et apaiser les douleurs la nuit.</strong></p>
<p><strong></strong><br />THERMOFORMABLE PLUSIEURS FOIS, ELLE EST ÉVOLUTIVE !</p>
<p>Vous avez des douleurs la nuit sur votre oignon ? L’orthèse corrective de nuit EPITACT® pour hallux valgus a été conçue pour soulager les douleurs articulaires nocturnes et supprimer les douleurs de contact tout en se faisant oublier pendant le sommeil.<br />L'orthèse corrective hallux valgus nuit EPITACT® a pour objectif de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396007495</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/769d1cb04160e45330a3cd2ec55bb908d38ad2a379a588e1bd7d3ffce3838c20 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse corrective nuit hallux valgux oignon taille L ]]></title>
<g:id>b2e332e2-8c65-4c2d-9b2c-d5983da5a306</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse corrective nuit hallux valgux oignon taille l?b2e332e2-8c65-4c2d-9b2c-d5983da5a306 ]]></link>
<g:price><![CDATA[ 2635.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Conçue pour limiter l'évolution et apaiser les douleurs la nuit.</strong></p>
<p><strong></strong><br />THERMOFORMABLE PLUSIEURS FOIS, ELLE EST ÉVOLUTIVE !</p>
<p>Vous avez des douleurs la nuit sur votre oignon ? L’orthèse corrective de nuit EPITACT® pour hallux valgus a été conçue pour soulager les douleurs articulaires nocturnes et supprimer les douleurs de contact tout en se faisant oublier pendant le sommeil.<br />L'orthèse corrective hallux valgus nuit EPITACT® a pour objectif de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396007518</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e7bf24b510bea7c08ff471bfe08407a18b9f86446126f0ae00054ad6b5170f6 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse pouce souple d'activité rhizarthrose droite taille L ]]></title>
<g:id>21cbddb2-8ac6-4adb-8b69-b2b3c7220440</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse pouce souple d'activité rhizarthrose droite taille l?21cbddb2-8ac6-4adb-8b69-b2b3c7220440 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !</strong></p>
<p>EPITACT® a créé une orthèse souple d’activité qui a pour but de soulager les douleurs articulaires liées à de l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !</p>
<p>Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose . Ce dispositif limite les micro-mouvements traumatisants. Il maintient le pouc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006146</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a2297899a7d7ff2453b844aa3ff913e9f0bd96f3e7f7ac87870186f7ca1fa38 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse pouce souple d'activité rhizarthrose droite taille M ]]></title>
<g:id>90ef5150-1d7b-464b-9a29-88af929f5f72</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse pouce souple d'activité rhizarthrose droite taille m?90ef5150-1d7b-464b-9a29-88af929f5f72 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !</strong></p>
<p>EPITACT® a créé une orthèse souple d’activité qui a pour but de soulager les douleurs articulaires liées à de l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !</p>
<p>Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose . Ce dispositif limite les micro-mouvements traumatisants. Il maintient le pouc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006122</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a2297899a7d7ff2453b844aa3ff913e9f0bd96f3e7f7ac87870186f7ca1fa38 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse pouce souple d'activité rhizarthrose gauche taille L ]]></title>
<g:id>e8a0338d-314e-4b0c-aaf0-add9484e9aa5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse pouce souple d'activité rhizarthrose gauche taille l?e8a0338d-314e-4b0c-aaf0-add9484e9aa5 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <div class="titre_zone_desc">
<p><strong>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !</strong></p>
<p>EPITACT® a créé une orthèse souple d’activité qui a pour but de soulager les douleurs articulaires liées à de l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !</p>
<p>Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose . Ce dispositif limite les micro-mouvements traum ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006153</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a2297899a7d7ff2453b844aa3ff913e9f0bd96f3e7f7ac87870186f7ca1fa38 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse pouce souple d'activité rhizarthrose gauche taille M ]]></title>
<g:id>abf0ff3e-5c89-4833-8b54-e637c1e25409</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse pouce souple d'activité rhizarthrose gauche taille m?abf0ff3e-5c89-4833-8b54-e637c1e25409 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <div class="tab-pane in active" id="description">
<div class="product-description">
<div class="rte-content">
<p><strong>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !</strong></p>
<p>EPITACT® a créé une orthèse souple d’activité qui a pour but de soulager les douleurs articulaires liées à de l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !</p>
<p>Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006139</g:gtin>
<g:brand><![CDATA[ IDES PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a2297899a7d7ff2453b844aa3ff913e9f0bd96f3e7f7ac87870186f7ca1fa38 ]]></g:image_link>
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
<title><![CDATA[ Epitact orthèse pouce souple d'activité rhizarthrose gauche taille S ]]></title>
<g:id>5df8d469-6030-4cc5-82dc-f29b0c2ad6a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-orthèse pouce souple d'activité rhizarthrose gauche taille s?5df8d469-6030-4cc5-82dc-f29b0c2ad6a3 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !</strong></p>
<p>EPITACT® a créé une orthèse souple d’activité qui a pour but de soulager les douleurs articulaires liées à de l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !</p>
<p>Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose . Ce dispositif limite les micro-mouvements traumatisants. Il maintient le pouc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006115</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a2297899a7d7ff2453b844aa3ff913e9f0bd96f3e7f7ac87870186f7ca1fa38 ]]></g:image_link>
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
<title><![CDATA[ Epitact physiostrap médical genouillère arthrose taille M ]]></title>
<g:id>ad5c0e90-4edb-4e99-ae54-d1224cc2664f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-physiostrap médical genouillère arthrose taille m?ad5c0e90-4edb-4e99-ae54-d1224cc2664f ]]></link>
<g:price><![CDATA[ 3970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Protège des frottements, prévient les ampoules et soulage la douleur.Pour protéger des frottements, prévenir les ampoules et apaiser la douleur.</p>
<p>En prévention ou lorsque l’ampoule est déjà formée, ces protections auto-adhésives, extra-fines et discrètes, agissent comme une véritable barrière anti-frottements sur toutes les zones sensibles.</p>
<p>Plutôt que d’avoir à soigner une ampoule sur le pied, généralement très handicapante, la stratégie adoptée est d’appliquer une protection ant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396008126</g:gtin>
<g:brand><![CDATA[ IDES PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e82424ec1f366011384cc009865a55d21c4cda1c047593a6e8adea65612fa8b5 ]]></g:image_link>
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
<title><![CDATA[ Epitact physiostrap médical genouillère arthrose taille S ]]></title>
<g:id>195f6ad3-3b8c-4243-a827-46b28264fe82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-physiostrap médical genouillère arthrose taille s?195f6ad3-3b8c-4243-a827-46b28264fe82 ]]></link>
<g:price><![CDATA[ 3970.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Protège des frottements, prévient les ampoules et soulage la douleur.Pour protéger des frottements, prévenir les ampoules et apaiser la douleur.<br /><br />En prévention ou lorsque l’ampoule est déjà formée, ces protections auto-adhésives, extra-fines et discrètes, agissent comme une véritable barrière anti-frottements sur toutes les zones sensibles.<br /><br />Plutôt que d’avoir à soigner une ampoule sur le pied, génér ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396008119</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3d03d5a667aa7840ffaa3a421e883a315a1f965e6872456bb2b5c0b8403dbb4 ]]></g:image_link>
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
<title><![CDATA[ Epitact plaque de protection anti-ampoules à découper ]]></title>
<g:id>d7d5aaf9-b3c3-4410-acd4-c330e1e30217</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-plaque de protection anti-ampoules à découper?d7d5aaf9-b3c3-4410-acd4-c330e1e30217 ]]></link>
<g:price><![CDATA[ 1025.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Protège des frottements, prévient les ampoules et soulage la douleur.</strong></p>
<p>Les protections à l'Epithelium Activ sont recommandées pour limiter les frottements excessifs sur la peau et prévenir la formation d'irritations, de rougeurs, d'échauffements, d'ampoules, etc... Elles peuvent aussi être utilisées lorsque les ampoules sont formées mais non percées pour poursuivre l'activité en cours.</p>
<p>Présentées sous forme de plaques à découper, ces protections en silicone contr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000045</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fcd689258acd067b7c46b4a7458a07e811c629170cbfe3817a98f2dce9d4ce7f ]]></g:image_link>
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
<title><![CDATA[ Epitact pouce douloureux rhizarthrose main droite taille S ]]></title>
<g:id>2aa5de35-3e22-4696-9e09-832b61e4d123</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-pouce douloureux rhizarthrose main droite taille s?2aa5de35-3e22-4696-9e09-832b61e4d123 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>ENFIN UNE SOLUTION ADAPTÉE AUX GESTES DU QUOTIDIEN !</strong></p>
<p>EPITACT® a créé une orthèse souple d’activité qui a pour but de soulager les douleurs articulaires liées à de l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !</p>
<p>Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose . Ce dispositif limite les micro-mouvements traumatisants. Il maintient le pouc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006108</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/de6b9c119e97edbd7c5ecd54cc7b92e17819886ae8f6adcd8e0b89b8d3f8f6d3 ]]></g:image_link>
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
<title><![CDATA[ Epitact protection anti-ampoules x2 ]]></title>
<g:id>6c6cf57e-b282-48f0-ac4c-cc56f8b05682</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protection anti-ampoules x2?6c6cf57e-b282-48f0-ac4c-cc56f8b05682 ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Protège des frottements, prévient les ampoules et soulage la douleur.Pour protéger des frottements, prévenir les ampoules et apaiser la douleur.</strong></p>
<p>En prévention ou lorsque l’ampoule est déjà formée, ces protections auto-adhésives, extra-fines et discrètes, agissent comme une véritable barrière anti-frottements sur toutes les zones sensibles.</p>
<p>Plutôt que d’avoir à soigner une ampoule sur le pied, généralement très handicapante, la stratégie adoptée est d’appliquer u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002230</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c59d53c4410938b98308622e250269dd704a0d99d19939296581116c802bb11 ]]></g:image_link>
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
<title><![CDATA[ Epitact protection hallux valgus taille L ]]></title>
<g:id>232bb256-eb5d-4040-b835-02a8c277ef52</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protection hallux valgus taille l?232bb256-eb5d-4040-b835-02a8c277ef52 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>SEULEMENT 1 MM D'ÉPAISSEUR pour une PROTECTION OPTIMALE !</strong></p>
<p>Pour un usage quotidien, adoptez la protection hallux valgus EPITACT® ! Fine et discrète, elle a pour objectif de limiter les frottements et d'apaiser les douleurs conflictuelles avec la chaussure.</p>
<p>Vous souffrez d’un oignon au pied ? Même si la déformation n’est pas très marquée, le chaussage est très vite douloureux. Le conflit avec la chaussure crée des douleurs sur l’excroissance osseuse et de la corne ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000144</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/598f06b3d94bc2a6c1fcf257e8da31c7dbe8e140a9737664e575d3b6700ca720 ]]></g:image_link>
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
<title><![CDATA[ Epitact protection hallux valgus taille M ]]></title>
<g:id>3ccbf48f-80f7-4a33-ab41-037019aa1d82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protection hallux valgus taille m?3ccbf48f-80f7-4a33-ab41-037019aa1d82 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>SEULEMENT 1MM D'ÉPAISSEUR pour une PROTECTION OPTIMALE !</strong></p>
<p>Pour un usage quotidien, adoptez la protection hallux valgus EPITACT® ! Fine et discrète, elle a pour objectif de limiter les frottements et d'apaiser les douleurs conflictuelles avec la chaussure.</p>
<p>Vous souffrez d’un oignon au pied ? Même si la déformation n’est pas très marquée, le chaussage est très vite douloureux. Le conflit avec la chaussure crée des douleurs sur l’excroissance osseuse et de la corne  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396000137</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/598f06b3d94bc2a6c1fcf257e8da31c7dbe8e140a9737664e575d3b6700ca720 ]]></g:image_link>
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
<title><![CDATA[ Epitact protections anti-ampoules sport tact 01 x12 ]]></title>
<g:id>85a40f25-4a54-4b1a-8576-0302194c7543</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protections anti-ampoules sport tact 01 x12?85a40f25-4a54-4b1a-8576-0302194c7543 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ces protections anti-ampoules ont été spécialement conçues pour la pratique sportive : elles protègent la peau des frottements, évitent la formation d’ampoules et permettent de rester performant.<br />Des frottements répétés sur la peau provoquent une irritation et à la longue une séparation du derme et de l'épiderme. Cet espace est alors rempli par une sécrétion naturelle, la lymphe , et l'ampoule est créée. Ce phénomène est une réaction de défense de l'épiderme afin de protéger les tissus s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396006689</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/00f1231fc5e28e870dd05ba21c7735d3183232697465af29eca9b0e38cf29c90 ]]></g:image_link>
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
<title><![CDATA[ Epitact protections anti-crevasses x2 ]]></title>
<g:id>a58f7d4d-c10e-40d6-9de9-08d14d19f0e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protections anti-crevasses x2?a58f7d4d-c10e-40d6-9de9-08d14d19f0e6 ]]></link>
<g:price><![CDATA[ 1730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Idéales pour protéger et soulager efficacement les talons fissurés, crevassés, douloureux et améliorer leur aspect esthétique. Pour cela, les protections jouent un rôle de répartiteur de pression et hydratent en continu les talons grâce à l’occlusivité du gel d’EPITHELIUM™.</p>
<p>Il est difficile d’obtenir la guérison de crevasses sous le talon lorsque l’on continue à marcher : à chaque pas, l’appui du pied sur le sol crée une onde de choc qui va rouvrir une brèche dans la peau. Or, il est d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396005088</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c40e1fdbfc3eb99c2fa0dc4dcc784f0387a7740ccb398a1555c73da581d77c26 ]]></g:image_link>
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
<title><![CDATA[ Epitact protections durillons x3 ]]></title>
<g:id>20f85a20-2396-435c-ab35-e437ab2992e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protections durillons x3?20f85a20-2396-435c-ab35-e437ab2992e8 ]]></link>
<g:price><![CDATA[ 785.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>ÉLIMINENT LES ÉCHAUFFEMENTS ET SOULAGENT LES DURILLONS</strong></p>
<p>Ces protections s’adaptent à toutes les chaussures ouvertes ou fermées et conviennent aux pieds diabétiques. Réutilisables 4 à 5 fois en moyenne, elles conservent leurs propriétés adhésives !</p>
<p>Les durillons et les callosité s se forment dans des zones de pression excessive. Dès qu’on supprime la pression, la peau stoppe ce processus de kératinisation, c’est-à-dire la formation de corne. C’est exactement la fo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002216</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c7841c1923fad5eaae86416ef2d7807c6121dbbe7cbe08dbb72493c6e81f2f3d ]]></g:image_link>
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
<title><![CDATA[ Epitact protections hallux valgus x2 ]]></title>
<g:id>f34d7460-a461-4ae2-846b-169979e04acf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protections hallux valgus x2?f34d7460-a461-4ae2-846b-169979e04acf ]]></link>
<g:price><![CDATA[ 785.00 EUR ]]></g:price>
<description><![CDATA[ <p>Idéales pour un usage occasionnel, les protections auto-adhésives EPITACT®, lavables et réutilisables, sont développées pour soulager dès l’application en répartissant les pressions et diminuant les frottements.<br />Les protections auto-adhésives soulagent grâce au gel d'EPITHELIUM™ ACTIV qui répartit les pressions et diminue les frottements à l'origine des douleurs. Ces protections agissent ainsi directement sur les causes des douleurs.</p>
<p>Très fines, les protections pour hallux valgus  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396002223</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/029378869a5392da569d9986d58bc8d9173bea8000139c1f4b35d5238dc20789 ]]></g:image_link>
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
<title><![CDATA[ Epitact protège-pointes orteils en marteau taille L x2 ]]></title>
<g:id>ec313bb3-59f7-4828-9d11-4c46a2020091</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protège-pointes orteils en marteau taille l x2?ec313bb3-59f7-4828-9d11-4c46a2020091 ]]></link>
<g:price><![CDATA[ 1940.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vise à protéger et soulager le dessus des orteils en marteau, en griffe ou cors dorsaux.</p>
<p>Vous avez un ou plusieurs cors sur le dessus des orteils, ou des orteils en marteau ou en griffe ? Ces protège-pointes s’enfilent comme des chaussettes pour protéger le dessus de tous vos orteils.</p>
<p>Un orteil en marteau ou en griffe est assez facile à protéger mais la tâche se complique lorsque plusieurs doigts de pieds sont concernés. Il faut alors opter pour une solution globale car la mise  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001653</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c64400868a4862dfa34704872efde817d5729a431530239c2a67212511a67967 ]]></g:image_link>
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
<title><![CDATA[ Epitact protège-pointes orteils en marteau taille M x2 ]]></title>
<g:id>a68b6410-3c04-4710-bd94-5b856417c5d7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-protège-pointes orteils en marteau taille m x2?a68b6410-3c04-4710-bd94-5b856417c5d7 ]]></link>
<g:price><![CDATA[ 1940.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vise à protéger et soulager le dessus des orteils en marteau, en griffe ou cors dorsaux.</p>
<p>Vous avez un ou plusieurs cors sur le dessus des orteils, ou des orteils en marteau ou en griffe ? Ces protège-pointes s’enfilent comme des chaussettes pour protéger le dessus de tous vos orteils.</p>
<p>Un orteil en marteau ou en griffe est assez facile à protéger mais la tâche se complique lorsque plusieurs doigts de pieds sont concernés. Il faut alors opter pour une solution globale car la mise  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001646</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae9adf02f9566ad7683a77d8416bbe63e121e708f99408385d738d6337c0e377 ]]></g:image_link>
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
<title><![CDATA[ Epitact séparateurs cors interdigitaux taille L x4 ]]></title>
<g:id>542b0f4a-16c1-4e04-b1bb-9f5009eb0347</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-séparateurs cors interdigitaux taille l x4?542b0f4a-16c1-4e04-b1bb-9f5009eb0347 ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>SÉPARENT DEUX ORTEILS POUR UN SOULAGEMENT IMMÉDIAT.</strong></p>
<p>Optez pour les séparateurs, conçus pour soulager les cors en séparant les orteils de quelques millimètres. Ils ont pour but d'éviter le chevauchement de deux orteils en cas de déformation.</p>
<p>Vous avez deux orteils qui ont tendance à se chevaucher ou à se toucher ? Ceci est fréquent et provoque souvent la formation de corne dans l’espace interdigital. C’est ce que l’on appelle communément un œil-de-perdrix. Pour é ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001837</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf81d9cf803fb9b3c3a31e538d6247af0ed591415013a0921bd12fe7746a4c57 ]]></g:image_link>
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
<title><![CDATA[ Epitact écarteurs hallux valgus x2 ]]></title>
<g:id>4cd99b4a-177e-483f-b20d-0648dd66bcb0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/epitact-carteurs hallux valgus x2?4cd99b4a-177e-483f-b20d-0648dd66bcb0 ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>LEUR FORME SPÉCIFIQUE ASSURE UN MAINTIEN PARFAIT</strong></p>
<p>Votre gros orteil et le deuxième se chevauchent ? Les écarteurs EPITACT® ont pour but de limiter la déviation du gros orteil en évitant le chevauchement et ainsi l’apparition de cors interdigitaux.</p>
<p>Si la déformation liée à l’hallux valgus est importante, il arrive que le gros orteil ait une fâcheuse tendance à venir se coller contre son voisin. Outre le caractère difficile du chaussage, un autre problème peut se g ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3660396001844</g:gtin>
<g:brand><![CDATA[ EPITACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ccd77d92a930dd2e186f2e1582efbbb630076be006f837a06a07f9ef1dcf2cc ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng 15 ml  Caramel ]]></title>
<g:id>728dc5b3-c431-4793-a03e-6558ba4730dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng 15 ml  caramel?728dc5b3-c431-4793-a03e-6558ba4730dd ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Crème au Ginseng 15 ml - Teinte : Caramel est une crème teintée qui sublime la peau grâce à son action mi-teint mi-soin, pour un effet "peau de bébé" instantané.</p>
<p>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au ginseng blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de la peau au quotidien.<br />BB Crème se fond sur la peau pour :</p>
<ol><li>unifier et parfaire le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786460</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98b161ffdf59bf24c6621332632b54b07f02ac53865ec2d839df832fb6b69358 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng 15 ml - Teinte : Chocolat ]]></title>
<g:id>29e391ca-778e-48d9-ad3c-6c37515fb840</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng 15 ml - teinte : chocolat?29e391ca-778e-48d9-ad3c-6c37515fb840 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Crème au Ginseng 15 ml - Teinte : Chocolat est une crème teintée qui sublime la peau grâce à son action mi-teint mi-soin, pour un effet "peau de bébé" instantané.</p>
<p>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au ginseng blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de la peau au quotidien.<br />BB Crème se fond sur la peau pour :</p>
<ol><li>unifier et parfaire l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787009</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff82477266f9a0ca6696370463c422696a851e88a25ec7a5de9d55a72382b0cf ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng 15 ml - Teinte : Clair ]]></title>
<g:id>8067aa0e-7d21-4b8c-8ace-44ecd2e21fbe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng 15 ml - teinte : clair?8067aa0e-7d21-4b8c-8ace-44ecd2e21fbe ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Crème au Ginseng 15 ml - Teinte : Clair est une crème teintée qui sublime la peau grâce à son action mi-teint mi-soin, pour un effet "peau de bébé" instantané.</p>
<p>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au ginseng blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de la peau au quotidien.<br />BB Crème se fond sur la peau pour :</p>
<ol><li>unifier et parfaire le t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786286</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef61dcde460dcb1c5a0e875942bd6e244da5d6a98e6d88c3c94541f28815ac31 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng 15 ml - Teinte : Doré ]]></title>
<g:id>a31c85f1-358e-4a03-81c0-2dd01edc89a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng 15 ml - teinte : doré?a31c85f1-358e-4a03-81c0-2dd01edc89a7 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Crème au Ginseng 15 ml - Teinte : Doré est une crème teintée qui sublime la peau grâce à son action mi-teint mi-soin, pour un effet "peau de bébé" instantané.</p>
<p>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au ginseng blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de la peau au quotidien.<br />BB Crème se fond sur la peau pour :</p>
<ol><li>unifier et parfaire le te ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786408</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/29b2b24cbaedd02b47cb3923cd9b9a8ea28750b2bd1162542273b6d73eefbef8 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng 40 ml - Teinte : Clair ]]></title>
<g:id>89dfd9fe-96df-4793-a178-a15e6fa23454</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng 40 ml - teinte : clair?89dfd9fe-96df-4793-a178-a15e6fa23454 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Crème au Ginseng 40 ml - Teinte : Clair est une crème teintée qui sublime la peau grâce à son action mi-teint mi-soin, pour un effet "peau de bébé" instantané.</p>
<p>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au ginseng blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de la peau au quotidien. BB Crème se fond sur la peau pour :</p>
<ol><li>unifier et parfaire le teint, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786279</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71fb35e409134cf16ba5c29d078ea813881ecdd35c56a3c20e9e91dcee353926 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng 40 ml - Teinte : Doré ]]></title>
<g:id>9364e0c5-6264-4af7-8c32-817b7f3c6bf2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng 40 ml - teinte : doré?9364e0c5-6264-4af7-8c32-817b7f3c6bf2 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Crème au Ginseng 40 ml - Teinte : Doré est une crème teintée qui sublime la peau grâce à son action mi-teint mi-soin, pour un effet "peau de bébé" instantané.</p>
<p>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au ginseng blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de la peau au quotidien. BB Crème se fond sur la peau pour :</p>
<ol><li>unifier et parfaire le teint,< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786392</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22b1f5a11af03c48ffd5fbd9c9b366c4f9d3f81d2c6a9574294b728552c20e29 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au Ginseng clair 40 ml ]]></title>
<g:id>793db265-472c-4a4b-b036-558b599ab278</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng clair 40 ml?793db265-472c-4a4b-b036-558b599ab278 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>LA BB CRÈME ERBORIAN : L’ICONIQUE EFFET « PEAU DE BÉBÉ »</span><br /><br /><span>La crème teintée qui sublime votre peau grâce à son action mi-teint mi-soin, pour un effet « peau de bébé » instantané.</span><br /><span>Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au Ginseng Blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de votre peau au quotidien.</span><br /><br /><span>BB C ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786330</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/454243d49c38f545d8603c6f9d75fe1732bda19ecbcc0e5d79bd0aee27039461 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Crème au ginseng teint Nude 15 ml ]]></title>
<g:id>9010d73c-4b34-4011-b66f-722534bc6e14</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb crème au ginseng teint nude 15 ml?9010d73c-4b34-4011-b66f-722534bc6e14 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>LA BB CRÈME ERBORIAN : L’ICONIQUE EFFET « PEAU DE BÉBÉ » </span></p>
<p>La crème teintée qui sublime votre peau grâce à son action mi-teint mi-soin, pour un effet « peau de bébé » instantané.<br />Sa couvrance modulable et sa texture légère permettent de parfaire et unifier le teint, sans effet de matière. Sa formule, au complexe au Ginseng Blanc, actif coréen reconnu pour ses propriétés lissantes, prend soin de votre peau au quotidien. </p>
<p>BB CRÈME se fond sur votre peau pour :</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786347</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b9510fd8fe6544c257eda4f84959681272e4f6edc10a5ded30aa9e8858f680b ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Eye Touche Parfaite 15 ml ]]></title>
<g:id>9c2f90eb-3120-4f2c-98c8-58ff83be1b68</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb eye touche parfaite 15 ml?9c2f90eb-3120-4f2c-98c8-58ff83be1b68 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Eye Touche Parfaite 15 ml est un soin 3 en 1 pour le contour des yeux sous forme de crème.</p>
<p>Ce soin contient :</p>
<p>- Pourpier : anti-oxydant puissant avec des propriétés anti-inflammatoires. Il prévient les premiers signes de l'âge et protège des radicaux libres.</p>
<p>- Co-Enzyme Q10 : anti-âge puissant.</p>
<p>- Extrait de Levure : anti-cernes et anti-poches. Améliore le système vasculaire et relance la microcirculation.</p>
<p>Les résultats sont visible, les cernes et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255780338</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3f2c8a55f89cfa3f60c9935d0faec219a32064df1675e4ebf1ccd9c734e37f7 ]]></g:image_link>
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
<title><![CDATA[ Erborian BB Shot Mask 14 g ]]></title>
<g:id>8bd65993-680a-453f-b610-eea00a0aeb69</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bb shot mask 14 g?8bd65993-680a-453f-b610-eea00a0aeb69 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian BB Shot Mask 14 g est un masque en tissu qui vous procure un effet éclat " peau de bébé ".</p>
<p>Ce masque de beauté est composé d'une structure en fibres lisses de cellulose qui contribue à la diffusion de ses nombreux actifs. Il contient notamment :</p>
<p>- de l'Extrait de Prêle (Equisetum Giganteum)</p>
<p>- de la Glycérine, au pouvoir hydratant.</p>
<p>- du Dioxyde de Titane, filtre UV.</p>
<p>Son fini perlé agit comme un concentré pour peaux parfaites.</p>
<p>Après utilisation ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255783599</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b515cea37b28d0d8726087c7955eb1d81d74b1125a714c6efebe331577091d2c ]]></g:image_link>
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
<title><![CDATA[ Erborian Bamboo Shot Mask 15 g ]]></title>
<g:id>50a2c85c-c49b-4032-9373-eba6e096d7c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-bamboo shot mask 15 g?50a2c85c-c49b-4032-9373-eba6e096d7c7 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Bamboo Shot Mask 15 g est un masque effet frais à utilisation unique pour aider à réveiller les peaux même fatiguées. Imprégné d'une formule enrichie avec le complexe Bamboo Waterlock, connu pour ses vertus hydratantes, ce masque aide à procurer un coup de frais grâce à la structure en fibres lisses de cellulose qui contribue à la diffusion de ses actifs.<br />Il agit comme un concentré de fraîcheur qui aide à hydrater immédiatement la peau et la repulper jour après jour.</p>
<p>Dès  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785678</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34e25f2ca9f8c7555d81ae9050bd698af203fc6566554a9f39b8a70f1d5d55bb ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Crème à la Centella Asiatica 15 ml - Clair ]]></title>
<g:id>4b916753-5897-4e11-b42f-35f33a3b9578</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc crème à la centella asiatica 15 ml - clair?4b916753-5897-4e11-b42f-35f33a3b9578 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Crème à la Centella Asiatica 15 ml - Teinte : Clair est un soin illuminateur de haute définition et perfecteur de peau.<br />Cette crème a la texture fine a été formulée pour s'adapter à la peau, pour unifier et rehausser le teint. Enrichie à la centella asiatica, elle contribue :</p>
<ul><li>à apporter éclat, protection et hydratation,</li>
<li>à unifier et camoufler les ridules,</li>
<li>à affiner visiblement le grain de peau.</li>
</ul><p>La peau devient comme plus lumineuse, d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255780253</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db6cb854c9dae546f45206e28049751cdb40c743226fc3f44a1c3b55bec67e7e ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Crème à la Centella Asiatica 15 ml Doré ]]></title>
<g:id>d5562f13-34e8-4227-a499-4d223fe601f4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc crème à la centella asiatica 15 ml doré?d5562f13-34e8-4227-a499-4d223fe601f4 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Crème à la Centella Asiatica 15 ml est un soin illuminateur de haute définition et perfecteur de peau.<br />Cette crème a la texture fine a été formulée pour s'adapter à la peau, pour unifier et rehausser le teint. Enrichie à la centella asiatica, elle contribue :</p>
<ul><li>à apporter éclat, protection et hydratation,</li>
<li>à unifier et camoufler les ridules,</li>
<li>à affiner visiblement le grain de peau.</li>
</ul><p>La peau devient comme plus lumineuse, douce et les imper ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255780178</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a48a3d31ff84aaacedc906d358e00e3887a48934726bf3fb2f4e1de76309c562 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Crème à la Centella Asiatica 45 ml - Clair ]]></title>
<g:id>82d6e4f9-496a-44ed-b000-aad9bc86a816</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc crème à la centella asiatica 45 ml - clair?82d6e4f9-496a-44ed-b000-aad9bc86a816 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Crème à la Centella Asiatica 45 ml - Teinte : Clair est un soin illuminateur de haute définition et perfecteur de peau.</p>
<p>Cette CC Crème est enrichie en actifs :</p>
<p>- Centella Asiatica : augmente la production de collagène et l'activité anti-oxydante. Actif anti-âge.</p>
<p>- l'Adénosine : actif anti-âge, améliore l'élasticité et la souplesse de la peau.</p>
<p>- la Vitamine B3 : protège des radicaux libres, renforce la barrière cutanée et diminue les différences de pigme ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255780260</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e5546cc17f44a6cb1e8d5edb4353726f25702d66599baa3e22f1b810ac19236 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Crème à la Centella Asiatica 45 ml Doré ]]></title>
<g:id>dda9aee8-c405-45d6-9052-844ef50f91d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc crème à la centella asiatica 45 ml doré?dda9aee8-c405-45d6-9052-844ef50f91d9 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Crème à la Centella Asiatica 45 ml est un soin illuminateur de haute définition et perfecteur de peau.</p>
<p>Cette CC Crème est enrichie en actifs :</p>
<p>- Centella Asiatica : augmente la production de collagène et l'activité anti-oxydante. Actif anti-âge.</p>
<p>- l'Adénosine : actif anti-âge, améliore l'élasticité et la souplesse de la peau.</p>
<p>- la Vitamine B3 : protège des radicaux libres, renforce la barrière cutanée et diminue les différences de pigmentation de la pea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255780185</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/725f5777106b13e10a07fba8e8cc634647f849e8cb0208b6d6bbe6bf91525b7d ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Dull Correct à la Centella Asiatica 15 ml ]]></title>
<g:id>4effb017-ac64-423a-b27e-a906a9984951</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc dull correct à la centella asiatica 15 ml?4effb017-ac64-423a-b27e-a906a9984951 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255784237</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1b3b02234867a3377ae30ca92f625c4eaa621c94559f8e623538b95d1e9a0d08 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Dull Correct à la Centella Asiatica 45 ml ]]></title>
<g:id>7c34b281-7456-45bf-8a14-42009d227f13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc dull correct à la centella asiatica 45 ml?7c34b281-7456-45bf-8a14-42009d227f13 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Dull Correct à la Centella Asiatica 45 ml est un soin perfecteur pour le visage qui booste l'éclat du teint tout en l'unifiant. Il est particulièrement recommandé pour les teints ternes.</p>
<p>Ce soin illuminateur est enrichi en Centella Asiatica qui contribue à apaiser et hydrater la peau tout en rehaussant le teint. L'extrait de Réglisse connu pour ses propriétés illuminantes et anti-oxydantes et pour sa capacité à capter les radicaux libres, complète cette formule.</p>
<p>Il c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255784282</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9eba08a6f76ab310b1f5e53d9fd66ddd31366b4a332a06bb7e49e0e807eed912 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Eye Soin Illuminateur Contour des Yeux 10 ml -  Doré ]]></title>
<g:id>d848156b-5f22-4f26-a3c0-7617dd3c3307</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc eye soin illuminateur contour des yeux 10 ml -  doré?d848156b-5f22-4f26-a3c0-7617dd3c3307 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Eye Soin Illuminateur Contour des Yeux 10 ml - Teinte : Doré est un véritable soin 3en1 du contour de l'oeil. Issue de la haute technologie coréenne avec des pigments encapsulés qui se fondent sur la peau, sa formule légère et sa couleur s'adaptent parfaitement à la peau délicate du contour des yeux.</p>
<p>Enrichi en Centella Asiatica connue pour ses propriétés apaisantes, ce soin unificateur aide à lutter contre les signes visibles de l'âge du contour de l'oeil et contribue à :< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255784015</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42b5a08219aecf1a85c9b733cd3c25255d0d0a232aac22005e1cd3435d299a2a ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Eye Soin Illuminateur Contour des Yeux 10 ml -Clair ]]></title>
<g:id>216f010d-1881-48b5-9bcf-65e6b14603a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc eye soin illuminateur contour des yeux 10 ml -clair?216f010d-1881-48b5-9bcf-65e6b14603a6 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Eye Soin Illuminateur Contour des Yeux 10 ml - Teinte : Clair est un véritable soin 3en1 du contour de l'oeil. Issue de la haute technologie coréenne avec des pigments encapsulés qui se fondent sur la peau, sa formule légère et sa couleur s'adaptent parfaitement à la peau délicate du contour des yeux.</p>
<p>Enrichi en Centella Asiatica connue pour ses propriétés apaisantes, ce soin unificateur aide à lutter contre les signes visibles de l'âge du contour de l'oeil et contribue à : ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255784022</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9f44cfd7e583b1c3f4552be33b38b63403c2ea0f4f50fe02d15a944da4a1a078 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Red Correct à la Centella Asiatica 15 ml ]]></title>
<g:id>9dcfdc05-70f8-4792-be04-3967da69d8d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc red correct à la centella asiatica 15 ml?9dcfdc05-70f8-4792-be04-3967da69d8d1 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Red Correct à la Centella Asiatica 15 ml est un soin perfecteur automatique à l'effet apaisant et qui permet d'unifier le teint.</p>
<p>Ce soin permet de corriger automatiquement les rougeurs grâce à l'action camouflante de ses pigments verts et les autres imperfections à l'aide de l'effet flouteur de ses pigments encapsulés. Il s'adapte à la carnation des peaux claires et sublime votre teint grâce à son effet correction colorielle parfaite.</p>
<p>Sa formule fine et verte se tran ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255783780</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8dbc47911d3c679820ed3738ec5e6ba35447b9b21bdfa3f4bcc2a0a2f77e6aca ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Red Correct à la Centella Asiatica 45 ml ]]></title>
<g:id>ab84f2da-c3ae-49e3-bf45-b785d89c11b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc red correct à la centella asiatica 45 ml?ab84f2da-c3ae-49e3-bf45-b785d89c11b4 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Red Correct à la Centella Asiatica 45 ml est un soin perfecteur automatique à l'effet apaisant et qui permet d'unifier le teint.</p>
<p>Ce soin permet de corriger automatiquement les rougeurs grâce à l'action camouflante de ses pigments verts et les autres imperfections à l'aide de l'effet flouteur de ses pigments encapsulés. Il s'adapte à la carnation des peaux claires et sublime votre teint grâce à son effet correction colorielle parfaite.</p>
<p>Sa formule fine et verte se tran ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255783773</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e06d7f5b9fcbfa3aaca3e42ca6854d1042bebbf0f9e9b8fe7beac74229847efb ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Water Gel  40 ml - Clair ]]></title>
<g:id>692bba3e-639b-4765-8349-934eff16c865</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc water gel  40 ml - clair?692bba3e-639b-4765-8349-934eff16c865 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Water à la Centella Gel Teint Frais Perfecteur de Peau 40 ml - Teinte : Clair est un gel teint frais perfecteur de peau à la texture ultra-légère, enrichi en Centella Asiatica, super-ingrédient réputé en Corée.</p>
<p>Il sublime la peau grâce à ses pigments encapsulés, tout en contribuant à l'apaiser et l'hydrater. Il a été formulé pour répondre au besoin des peaux adeptes de soins ultra-légers : sa texture gel désaltérante est enrichie en acide hyaluronique.<br />Il s'adapte à la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786071</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53115fe749fa78e9496250c7e9b100de65fa0e44db6e1328528e7d4db2acc733 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Water Gel Teint Frais  15 ml - Doré ]]></title>
<g:id>4de91e81-a45e-452f-a5b8-ccb8933b071e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc water gel teint frais  15 ml - doré?4de91e81-a45e-452f-a5b8-ccb8933b071e ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Water à la Centella Gel Teint Frais Perfecteur de Peau 15 ml - Teinte : Doré est un gel teint frais perfecteur de peau à la texture ultra-légère, enrichi en Centella Asiatica, super-ingrédient réputé en Corée.</p>
<p>Il sublime la peau grâce à ses pigments encapsulés, tout en contribuant à l'apaiser et l'hydrater. Il a été formulé pour répondre au besoin des peaux adeptes de soins ultra-légers : sa texture gel désaltérante est enrichie en acide hyaluronique.<br />Il s'adapte à la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786125</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b2a9cb3d334c406fc813ef62474574a32f3261ac16719be101ea2e231c447b81 ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Water Gel Teint Frais 40 ml - Caramel ]]></title>
<g:id>69e54b1a-a581-41ec-8d0b-f19ec5780366</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc water gel teint frais 40 ml - caramel?69e54b1a-a581-41ec-8d0b-f19ec5780366 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Water à la Centella Gel Teint Frais Perfecteur de Peau 40 ml - Teinte : Caramel est un gel teint frais perfecteur de peau à la texture ultra-légère, enrichi en Centella Asiatica, super-ingrédient réputé en Corée.</p>
<p>Il sublime la peau grâce à ses pigments encapsulés, tout en contribuant à l'apaiser et l'hydrater. Il a été formulé pour répondre au besoin des peaux adeptes de soins ultra-légers : sa texture gel désaltérante est enrichie en acide hyaluronique.<br />Il s'adapte à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786156</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c087866e66d5c1b3fb454ae35a496d28031292360c37efd6a8786ebd2c3641d ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Water Gel Teint Frais Perfecteur de Peau 15 ml -Caramel ]]></title>
<g:id>561b2897-b97e-466b-9e1f-ba11b63bde5a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc water gel teint frais perfecteur de peau 15 ml -caramel?561b2897-b97e-466b-9e1f-ba11b63bde5a ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Water à la Centella Gel Teint Frais Perfecteur de Peau 15 ml - Teinte : Caramel est un gel teint frais perfecteur de peau à la texture ultra-légère, enrichi en Centella Asiatica, super-ingrédient réputé en Corée.</p>
<p>Il sublime la peau grâce à ses pigments encapsulés, tout en contribuant à l'apaiser et l'hydrater. Il a été formulé pour répondre au besoin des peaux adeptes de soins ultra-légers : sa texture gel désaltérante est enrichie en acide hyaluronique.<br />Il s'adapte à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786163</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/af055a656fd54f5430c68d2bd52444449e19ed35208a54bc7dc040f3b171888f ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Water Gel Teint Frais- Teinte : Doré ]]></title>
<g:id>77ba0a3b-ab80-43c6-85b1-1defd7fc8ee2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc water gel teint frais- teinte : doré?77ba0a3b-ab80-43c6-85b1-1defd7fc8ee2 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Water à la Centella Gel Teint Frais Perfecteur de Peau 40 ml - Teinte : Doré est un gel teint frais perfecteur de peau à la texture ultra-légère, enrichi en Centella Asiatica, super-ingrédient réputé en Corée.</p>
<p>Il sublime la peau grâce à ses pigments encapsulés, tout en contribuant à l'apaiser et l'hydrater. Il a été formulé pour répondre au besoin des peaux adeptes de soins ultra-légers : sa texture gel désaltérante est enrichie en acide hyaluronique.<br />Il s'adapte à la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786118</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/15653b28b55d06f467251594c8bd17222f24656dbe7f965c49f8d0439ed3564d ]]></g:image_link>
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
<title><![CDATA[ Erborian CC Water Gel Teint Frais15 ml - Clair ]]></title>
<g:id>b2109982-9337-44ca-9826-49183b60329d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-cc water gel teint frais15 ml - clair?b2109982-9337-44ca-9826-49183b60329d ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian CC Water à la Centella Gel Teint Frais Perfecteur de Peau 15 ml - Teinte : Clair est un gel teint frais perfecteur de peau à la texture ultra-légère, enrichi en Centella Asiatica, super-ingrédient réputé en Corée.</p>
<p>Il sublime la peau grâce à ses pigments encapsulés, tout en contribuant à l'apaiser et l'hydrater. Il a été formulé pour répondre au besoin des peaux adeptes de soins ultra-légers : sa texture gel désaltérante est enrichie en acide hyaluronique.<br />Il s'adapte à la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786088</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fdbda63889f159cf346ac6bf3a16cad9912270255cd75a80dfd59005cecbb778 ]]></g:image_link>
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
<title><![CDATA[ Erborian Centella Cleansing Balm 80 g ]]></title>
<g:id>dc1a56ac-8f9f-4134-914d-25476ba7215a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-centella cleansing balm 80 g?dc1a56ac-8f9f-4134-914d-25476ba7215a ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Centella Cleansing Balm 80 g est un démaquillant fondant en baume pour le visage et les yeux.</p>
<p>Il allie l'efficacité démaquillante d'une huile et la douceur réconfortante d'un baume. Enrichi en Centella Asiatica, un super-ingrédient coréen, il démaquille efficacement tout en apportant une sensation de douceur et de confort à la peau.<br />Avec sa double transformation, il enveloppe la peau de sa douceur et se transforme en huile, puis en voile lacté au contact de l'eau, faisant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787276</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/97920576175eeb81c1389706b23366c8c2a0bc64fa777db56ba76c78f713496b ]]></g:image_link>
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
<title><![CDATA[ Erborian Centella Cleansing Gel 180 ml ]]></title>
<g:id>6174b1b6-3d7e-483f-976c-17a945a92d98</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-centella cleansing gel 180 ml?6174b1b6-3d7e-483f-976c-17a945a92d98 ]]></link>
<g:price><![CDATA[ 1795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Centella Cleansing Gel 180 ml est un gel nettoyant doux quotidien qui nettoie intensément, pour une sensation de peau parfaitement propre et apaisée.</p>
<p>Enrichi en Centella Asiatica reconnue pour ses propriétés apaisantes, ce gel nettoyant aide à purifier et éliminer les impuretés, sans sensation de tiraillement.<br />Avec sa texture enveloppante, il procure un nettoyage doux et aide à préserver l'hydratation naturelle de la peau.<br />La peau semble instantanément plus nette, lu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785753</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f677cea1f114342ae4dd5f1312250ac8714683f9fee7ebf56fd08451ec364786 ]]></g:image_link>
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
<title><![CDATA[ Erborian Centella Cleansing Oil 180 ml ]]></title>
<g:id>eb5f7fd3-714e-44c4-90e7-5a12dde20210</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-centella cleansing oil 180 ml?eb5f7fd3-714e-44c4-90e7-5a12dde20210 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Centella Cleansing Oil 180 ml est une huile démaquillante et nettoyante ultra-fine qui élimine maquillage (y compris waterproof), excès de sébum et impuretés tout en aidant la peau à garder son hydratation naturelle.</p>
<p>Formulée avec de la Centella Asiatica (aussi appelée Herbe du tigre, notamment utilisée pour ses propriétés apaisantes) et riche en huiles végétales nourrissantes, elle laisse la peau comme apaisée, hydratée et confortable.<br />Sa texture légère se transforme en  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785777</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/081e491145245d03e87316c46ab180f4222e7a05cf3fcee31c152035985f945d ]]></g:image_link>
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
<title><![CDATA[ Erborian Centella Crème 50 ml ]]></title>
<g:id>70ddd948-a5f4-469c-8702-dd050c119269</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-centella crème 50 ml?70ddd948-a5f4-469c-8702-dd050c119269 ]]></link>
<g:price><![CDATA[ 1750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CENTELLA CRÈME est votre dose quotidienne d’hydratation alliée à une action </span><span>apaisante et anti-rougeurs </span><span>cliniquement prouvée. Retrouvez une peau gorgée d’hydratation, un teint qui semble plus uniforme et une sensation de confort qui dure toute la journée !</span><br /><br /><span>Grâce à sa formule enrichie en </span><span>acide hyaluronique </span><span>et à l’efficacité apaisante cliniquement prouvée de la </span><span>Centella Asiatica</span><span>, CENTELLA  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787917</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30ecd30b3c7d8e795148673b3ec8d583188a433f371e3a2867d4b1ba91ef9655 ]]></g:image_link>
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
<title><![CDATA[ Erborian Centella SOS Patch 9ml ]]></title>
<g:id>369a0d8e-33ae-411c-8797-10ceadf9ed88</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-centella sos patch 9ml?369a0d8e-33ae-411c-8797-10ceadf9ed88 ]]></link>
<g:price><![CDATA[ 1680.00 EUR ]]></g:price>
<description><![CDATA[ <p>CENTELLA SOS PATCH : Ce soin ciblé associe Niacinamide et PHA, acide exfoliant doux. Il réduit visiblement l'apparence et la taille de votre imperfection en seulement 24h pour une peau qui paraît lissée et unifiée.</p>
<p>CENTELLA SOS PATCH a été formulé afin de répondre aux problématiques des peaux à tendance acnéique.<br />Prenez soin de vos imperfections avec CENTELLA SOS PATCH : ce soin ciblé tel un « patch seconde peau » réduit visiblement l'apparence et la taille de votre imperfection e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787481</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/abbc6bfd13f6994bac9e6428906eac01479a95303705a3ec840e39d096c2ae31 ]]></g:image_link>
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
<title><![CDATA[ Erborian Eau Ginseng 190ml ]]></title>
<g:id>4f48a28b-d578-4d00-96ef-de3e788c8acd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-eau ginseng 190ml?4f48a28b-d578-4d00-96ef-de3e788c8acd ]]></link>
<g:price><![CDATA[ 2880.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enrichie en&nbsp;<strong>complexe de Ginseng</strong>, reconnu pour ses vertus lissantes,&nbsp;<strong>EAU GINSENG améliore la texture de la peau</strong>&nbsp;et&nbsp;<strong>diminue visiblement</strong>&nbsp;<strong>les rides et les ridules</strong>, pour une peau plus<strong>&nbsp;lisse et douce</strong>.</p><p>Tel un s<strong>hot d’hydratation</strong>, elle offre une sensation de fraîcheur instantanée, pour une peau comme&nbsp;<strong>plus souple et un confort immédiat</strong>. Votre pe ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786828</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50fca6dfedabb921718ccab65b1edfd95cb988442d66a402fe16e4fd1fa1a487 ]]></g:image_link>
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
<title><![CDATA[ Erborian Ginseng Infusion Total Eye Contour des Yeux 15ml ]]></title>
<g:id>d871ddb9-90a8-4106-8964-e2581c54d82d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-ginseng infusion total eye contour des yeux 15ml?d871ddb9-90a8-4106-8964-e2581c54d82d ]]></link>
<g:price><![CDATA[ 3350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Ginseng Infusion Total Eye Contour des Yeux Effet Tenseur 15 ml est un soin tenseur idéal pour un regard comme plus jeune.</p>
<p>La formule de ce soin est enrichie en extraits de Centella Asiatica et de Ginseng. Elle permet ainsi d'aider à visiblement estomper les premiers signes de l'âge et combattre les marques de fatigue de la peau délicate du contour des yeux.</p>
<p>Le regard semble éclatant et comme plein de vitalité : l'apparence des poches et des cernes est visiblement rédui ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255780048</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef71837ab36c55dfc4a9066808d9a8f197b673c946684c8f07528d1474ceb52f ]]></g:image_link>
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
<title><![CDATA[ Erborian Ginseng Power Crème lissante 50ml ]]></title>
<g:id>5340d867-5e55-4b8a-8305-01348a6b324f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-ginseng power crème lissante 50ml?5340d867-5e55-4b8a-8305-01348a6b324f ]]></link>
<g:price><![CDATA[ 4180.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Ginseng, notre meilleur actif coréen lissant, <strong>aussi efficace que le Rétinol</strong>1, dans une crème visage addictive qui <strong>défroisse les ridules</strong> en 3 minutes2 et <strong>lisse durablement les rides</strong> en 28 jours. Jour après jour, la peau est plus lisse, ferme et élastique.</p><p>Une formule confortable et hydratante qui nourrit sans alourdir la peau et sans effet gras ou collant.</p><p><strong>Votre allié lissant quotidien.</strong><br>Dès la première applic ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786842</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb697348ffb8a5896c619108a0571d56a836801ada338243dfbe5a3d087894d9 ]]></g:image_link>
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
<title><![CDATA[ Erborian Ginseng Power Eye Crème yeux lissante 15ml ]]></title>
<g:id>80d9ec60-8f06-4895-b1db-43423c679982</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-ginseng power eye crème yeux lissante 15ml?80d9ec60-8f06-4895-b1db-43423c679982 ]]></link>
<g:price><![CDATA[ 3350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Ginseng, notre meilleur actif coréen lissant, aussi efficace que le Rétinol1, dans une crème yeux qui <strong>défroisse les ridules en 3 minutes</strong>2&nbsp;et <strong>lisse durablement les rides en 14 jours</strong>2.<br>Sa formule contenant de la <strong>Caféine</strong> réduit visiblement les cernes et poches pour un regard plus frais jour après jour.</p><p>Une formule addictive : 75%2 des personnes l’ayant testée la choisiraient à la place de leur produit habituel !&nbsp;</p><p><str ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786873</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39a9ca8ee9c81ee85cc8bde504e6212a93e32b3b2f6ad6af258f1a6130648251 ]]></g:image_link>
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
<title><![CDATA[ Erborian Kit Super Masks Trio ]]></title>
<g:id>b9ae649c-78f5-464f-8fc1-d5436ccba709</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-kit super masks trio?b9ae649c-78f5-464f-8fc1-d5436ccba709 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Kit Super Masks Trio est un kit de 3 masques iconiques en formats voyage, pour emporter avec soi les soins adaptés à chaque besoin de la peau :</p>
<p>- Erborian Bamboo Waterlock 30 ml est un masque en gelée rafraîchissant hydratant.<br />Il apporte une recharge en eau immédiate à la peau. Dans une texture aquagel, son complexe de fibres et de sève de bambou contribue à hydrater la peau qui paraît repulpée d'eau et rafraîchie. Grâce à ce masque repulpant, les signes de fatigue parais ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760239246972</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25686caebee0f0dd7cd522bfa6f8183fbaab71539da0a73a13a6fae976804b5f ]]></g:image_link>
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
<title><![CDATA[ Erborian Matte Crème 15 ml ]]></title>
<g:id>1632c32d-c2fa-43c9-a266-bf5733d29844</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-matte crème 15 ml?1632c32d-c2fa-43c9-a266-bf5733d29844 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Matte Crème 15 ml est un soin matifiant visage effet flouté au Nymphaea Alba destiné à uniformiser le teint et à matifier la peau.</p>
<p>Ce soin hybride permet de :</p>
<ul><li>Flouter les imperfections et l'apparence des pores avec un effet "blur".</li>
<li>Unifier le teint avec un fini ultra mat.</li>
<li>Affiner le grain de peau.</li>
<li>Préserver la fonction barrière de la peau pour retenir l'hydratation.</li>
<li>Matifier pour préparer la peau au maquillage.</li>
</ul><p>Dès s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255783674</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25cc0ac6a1b2552c233fdfe220b47bebc6a389fb95837bc4667a18061566af4c ]]></g:image_link>
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
<title><![CDATA[ Erborian Matte Crème 45 ml ]]></title>
<g:id>e925d328-8097-4a1f-b0a5-9ee89e65d724</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-matte crème 45 ml?e925d328-8097-4a1f-b0a5-9ee89e65d724 ]]></link>
<g:price><![CDATA[ 2899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Matte Crème 45 ml est un soin matifiant visage effet flouté au Nymphaea Alba destiné à uniformiser le teint et à matifier la peau.</p>
<p>Ce soin hybride permet de :</p>
<ul><li>Flouter les imperfections et l'apparence des pores avec un effet "blur".</li>
<li>Unifier le teint avec un fini ultra mat.</li>
<li>Affiner le grain de peau.</li>
<li>Préserver la fonction barrière de la peau pour retenir l'hydratation.</li>
<li>Matifier pour préparer la peau au maquillage.</li>
</ul><p>Dès s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255783667</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d59a897c9c00b74ea6c860c6e770e0c1bc50b5284f150772cec577fcf3c284c9 ]]></g:image_link>
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
<title><![CDATA[ Erborian Milk & Peel Shot Mask 1 Sérum Flash Peel 3 g + 1 Masque Tissu Milk Bath 15 g ]]></title>
<g:id>4c411fdf-5632-4ed4-a459-7a357473e3d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-milk & peel shot mask 1 sérum flash peel 3 g + 1 masque tissu milk bath 15 g?4c411fdf-5632-4ed4-a459-7a357473e3d3 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Milk &amp; Peel Shot Mask 1 Sérum Flash Peel 3 g + 1 Masque Tissu Milk Bath 15 g est un duo de soins visage inspiré du pouvoir resurfaçant du lait de sésame.<br />L'association d'une exfoliation douce et efficace et d'un masque hautement nourrissant instantanément : une double action pour un effet "peau neuve" en quelques minutes :</p>
<ol><li>Flash Peel : le sérum peeling enrichi en enzymes exfoliantes. Instantanément, il lisse le grain de peau, ravive l'éclat et aide à préparer la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785791</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/44c125880f86b7fda933c014b8b21ced5d495983e0e211c47550b7cd1708e146 ]]></g:image_link>
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
<title><![CDATA[ Erborian Pink Primer & Care au Diospyros Kaki 15 ml ]]></title>
<g:id>f6ebc088-cfa7-4f3e-ac45-1d5629525428</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-pink primer & care au diospyros kaki 15 ml?f6ebc088-cfa7-4f3e-ac45-1d5629525428 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Pink Primer &amp; Care au Diospyros Kaki 15 ml est un indispensable 2 en 1 : base de maquillage multi-perfectrice + soin hydratant. Tous les bénéfices d'un "primer", le soin en plus !<br />Ce véritable soin sublimateur combine tous les bénéfices d'une base de teint pour :</p>
<ul><li>Lisser visiblement la peau et uniformiser le teint pour une meilleure tenue du maquillage.</li>
<li>Aider à faciliter l'application du maquillage.</li>
</ul><p>Tous les bienfaits d'un soin hydratant grâc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785616</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf8952b4ee1f7804844bfb4cbe027d20e2c62110d575d734b823ca6f41acf0cb ]]></g:image_link>
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
<title><![CDATA[ Erborian Red Pepper Paste Mask 20 ml ]]></title>
<g:id>cfde732b-7df1-4ab0-b7aa-d0fae1a2fd13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-red pepper paste mask 20 ml?cfde732b-7df1-4ab0-b7aa-d0fae1a2fd13 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Red Pepper Paste Mask 20 ml est un masque soin concentré d'éclat pour une transformation instantanée.<br />Grâce à la pulpe du fruit du piment rouge dont le pouvoir énergisant est exceptionnel, ce soin est une véritable recharge énergisante qui booste l'éclat naturel de la peau.<br />Il enveloppe la peau grâce à sa texture veloutée et onctueuse, en procurant une sensation de douceur et de confort immédiat.</p>
<p>Ainsi, la peau paraît plus lisse et uniforme, son éclat est comme raviv ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785166</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae116a72f68b00a7b60ee635101ae6e0e98fbbcb0a24def68b04697730c43381 ]]></g:image_link>
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
<title><![CDATA[ Erborian Red Pepper Paste Mask 50 ml ]]></title>
<g:id>287fa323-cac5-4d22-9b7e-868421752f3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-red pepper paste mask 50 ml?287fa323-cac5-4d22-9b7e-868421752f3f ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Red Pepper Paste Mask 50 ml est un masque soin concentré d'éclat pour une transformation instantanée. Grâce à la pulpe du fruit du piment rouge dont le pouvoir énergisant est exceptionnel, ce soin est une véritable recharge énergisante qui booste l'éclat naturel de la peau.<br />Il enveloppe la peau grâce à sa texture veloutée et onctueuse, en procurant une sensation de douceur et de confort immédiat.</p>
<p>Ainsi, la peau paraît plus lisse et uniforme, son éclat est comme ravivé.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785159</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/84e4cc802d44520f0fa0d2262e25476f642fae31e07fe6320f43464ed103f809 ]]></g:image_link>
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
<title><![CDATA[ Erborian Red Pepper Pulp 50 ml ]]></title>
<g:id>012456f8-b7a2-4e05-9053-5ddfc14d9765</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-red pepper pulp 50 ml?012456f8-b7a2-4e05-9053-5ddfc14d9765 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Erborian Red Pepper Pulp 50 ml est un gel-crème qui booste l'éclat de votre peau !</span><br /><span>A base de piment rouge reconnu pour son pouvoir énergisant exceptionnel dont Erborian a su transformer la pulpe pour le rendre doux, c'est une véritable "recharge énergisante" qui booste l'éclat naturel de la peau.</span><br /><span>Sa texture gel-crème fraîche fond sur la peau et aide à la repulper immédiatement en hydratation.</span><br /><span>Dès la première semaine, la peau semble r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785111</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/466893c2a73e748c3061adacd7274e89bfb87dc9e72d2873fff1d800c558722d ]]></g:image_link>
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
<title><![CDATA[ Erborian Skin therapy huile de nuit multi perfectrice 30 ml ]]></title>
<g:id>aa80070c-a586-41e8-a013-acbbe06ec67c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-skin therapy huile de nuit multi perfectrice 30 ml?aa80070c-a586-41e8-a013-acbbe06ec67c ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Une huile pour le visage qui concentre toute la puissance du soin Erborian</span></p>
<p>Une huile de nuit multi-perfectrice associant <span>17 extraits de plantes </span>conçue pour agir pendant votre sommeil. Sa promesse ? Vous redonner confiance en votre peau nue, en une nuit seulement !<br /><br />• <span>APRÈS LA 1ÈRE NUIT</span>* : Votre peau est lissée, intensément nourrie et repulpée en hydratation. Les signes de fatigue semblent réduits, votre teint est frais et lumineux.<br /> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787368</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c0eb5ec6b3db679dcb819e31facc01f544cc451fb0340f712ab99c0277ccadd2 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB - BB crème Caramel 40ml ]]></title>
<g:id>1aadb021-7641-452a-824b-6ba7b087b0d7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb - bb crème caramel 40ml?1aadb021-7641-452a-824b-6ba7b087b0d7 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint </span>: plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787191</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62169a5d53d7a4068c8d08c8a5374d9f2b17e8d1ed1b454aedc4664b1351fe63 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB BB crème Clair 40ml ]]></title>
<g:id>8a2086ca-1127-4cf0-8c2c-7e2f5eceea2f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb bb crème clair 40ml?8a2086ca-1127-4cf0-8c2c-7e2f5eceea2f ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB </span>: L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787078</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/56ab1fdade9498ccf41399b6ba481ebc44daa896047f7ac779c147ae9d287fe3 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Concealer -Caramel 10ml ]]></title>
<g:id>4e8561f7-ed70-4eed-ba6a-a998517e5ee4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb concealer -caramel 10ml?4e8561f7-ed70-4eed-ba6a-a998517e5ee4 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un anticernes qui allie haute couvrance et soin efficace</span></p>
<p>Super BB Concealer est un <span>anticernes haute couvrance</span>, au fini naturel, qui apporte bien plus à votre peau : sa formule crémeuse et hydratante, contenant <span>5% de Niacinamide</span>, camoufle parfaitement cernes et imperfections, tout en les réduisant jour après jour. C’est cliniquement prouvé !</p>
<p><span>• Haute couvrance, tenue 12h<br />• Sans effet de matière, ne file pas dans les ridules<br />•  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255788181</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5620048321331df5843c4535c35fe0929821791cdf3bf19f61224c0c701e4821 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Concealer -Clair 10ml ]]></title>
<g:id>e9624daf-bfe2-40f6-964d-095bdd200b9a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb concealer -clair 10ml?e9624daf-bfe2-40f6-964d-095bdd200b9a ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un anticernes qui allie haute couvrance et soin efficace</span></p>
<p>Super BB Concealer est un <span>anticernes haute couvrance</span>, au fini naturel, qui apporte bien plus à votre peau : sa formule crémeuse et hydratante, contenant <span>5% de Niacinamide</span>, camoufle parfaitement cernes et imperfections, tout en les réduisant jour après jour. C’est cliniquement prouvé !</p>
<p><span>• Haute couvrance, tenue 12h<br />• Sans effet de matière, ne file pas dans les ridules<br />•  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255788150</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58420d13d87e5c8a191cf10d38c9be7e1199579862639c0a981516dd1bdb9386 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Concealer -Doré 10ml ]]></title>
<g:id>7a31f5bd-1584-4982-842b-baadd93b5e31</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb concealer -doré 10ml?7a31f5bd-1584-4982-842b-baadd93b5e31 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong></strong></p>
<div class="o-tabs">
<div class="o-tab o-expandable js--expanded" id="description">
<div class="o-expandable-content">
<p><span>Un anticernes qui allie haute couvrance et soin efficace</span></p>
<p>Super BB Concealer est un <span>anticernes haute couvrance</span>, au fini naturel, qui apporte bien plus à votre peau : sa formule crémeuse et hydratante, contenant <span>5% de Niacinamide</span>, camoufle parfaitement cernes et imperfections, tout en les réduisant jour aprè ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255788174</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/782957c8d6559b1bd8a5da58c7851c1cd3302e435ccf6a89ee364a7615569333 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Concealer Chocolat 10ml ]]></title>
<g:id>675ed805-e988-4471-9e88-71674d19ef7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb concealer chocolat 10ml?675ed805-e988-4471-9e88-71674d19ef7f ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un anticernes qui allie haute couvrance et soin efficace</span></p>
<p>Super BB Concealer est un <span>anticernes haute couvrance</span>, au fini naturel, qui apporte bien plus à votre peau : sa formule crémeuse et hydratante, contenant <span>5% de Niacinamide</span>, camoufle parfaitement cernes et imperfections, tout en les réduisant jour après jour. C’est cliniquement prouvé !</p>
<p><span>• Haute couvrance, tenue 12h<br />• Sans effet de matière, ne file pas dans les ridules<br />•  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255788198</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58aa8670d4df47fcd651bbb7bbcb72d65ffe50c94ec698d169f1e1200929fe7c ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Crème Chocolat 15ml ]]></title>
<g:id>e4e57634-0ed5-4128-8d0c-80273b3fe9a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème chocolat 15ml?e4e57634-0ed5-4128-8d0c-80273b3fe9a9 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787245</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c91f4ad7ca1b4c254241f67945caac88285ceecc778c2bb3b33e68e992fe9d10 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Crème Chocolat 40ml ]]></title>
<g:id>ee2bf1ff-c511-41bd-8a16-11fd89a1fe30</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème chocolat 40ml?ee2bf1ff-c511-41bd-8a16-11fd89a1fe30 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787238</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03b54795bd2cedfc892107af59c6343b4342eec5361ebc9ce5930667974a5767 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Crème Doré 40ml ]]></title>
<g:id>273b259c-72c3-46a0-a247-9ae26874b1f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème doré 40ml?273b259c-72c3-46a0-a247-9ae26874b1f9 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787153</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/15891dff16c2ed96657fcf30dcb23cbccae36d42d495a906eb961f85bac74271 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Crème Nude 15ml ]]></title>
<g:id>13d0a624-ad74-4805-bd10-9c74e057d5cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème nude 15ml?13d0a624-ad74-4805-bd10-9c74e057d5cd ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787122</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ea15ca63644c7c05bf242c717ef0031f88422bc190e442749e670c8dc4568552 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Crème Nude 40ml ]]></title>
<g:id>68970a5b-ff40-48ea-9c64-a1befa8989a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème nude 40ml?68970a5b-ff40-48ea-9c64-a1befa8989a5 ]]></link>
<g:price><![CDATA[ 2999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787115</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d762b503c8fe35c6cf393a3003c83b39d66452905c6f73ed4195ed2ad154ee29 ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Crème Teinte Caramel 15ml ]]></title>
<g:id>e4775151-3ab9-4105-a476-abf1f423224a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème teinte caramel 15ml?e4775151-3ab9-4105-a476-abf1f423224a ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p><b>SUPER BB : </b><span>L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !</span><br /><br /><b>Côté teint : </b><span>plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un te ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787207</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39516fda82b9cef67a6e0146da577ab98bcd0d47346ef63bdeb4db1f1896e2df ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB Doré Crème 15ml ]]></title>
<g:id>432da4c4-217c-47a4-a9e1-bc06df0f4646</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb doré crème 15ml?432da4c4-217c-47a4-a9e1-bc06df0f4646 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p> </p>
<p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787160</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb852bfb2154ed6205994640b28afb94d34f28a22f24c0fddf8b50d9b5a9bedc ]]></g:image_link>
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
<title><![CDATA[ Erborian Super BB crème au ginseng Clair15 ml ]]></title>
<g:id>871beb5a-ef9d-4b4c-a6be-c29249765feb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-super bb crème au ginseng clair15 ml?871beb5a-ef9d-4b4c-a6be-c29249765feb ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUPER BB</span> : L’expertise BB Crème mi-teint mi-soin boostée pour camoufler et agir sur vos imperfections sans effet de matière. Révélez votre « peau de bébé » sans effet masque grâce à cette nouvelle BB crème couvrante !<br /><br /><span>Côté teint</span> : plus couvrante que la BB crème originale, SUPER BB camoufle même vos imperfections, rougeurs et taches pigmentaires. Grâce à sa texture légère et confortable, cette BB crème couvrante laisse un fini satiné naturel et un teint par ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255787085</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c6f1826f80be84120cba0daee154acbbab7aaf65f3ac489c62685fa4395bb10b ]]></g:image_link>
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
<title><![CDATA[ Erborian ginseng super sérum 30ml ]]></title>
<g:id>885d0a37-5fa8-4d0e-97ac-5ae2d30a8335</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-ginseng super sérum 30ml?885d0a37-5fa8-4d0e-97ac-5ae2d30a8335 ]]></link>
<g:price><![CDATA[ 4690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sérum anti-âge lissant et raffermissant pour réduire l’apparence des rides et ridules.</p>
<p>Chez Erborian, nous avons tellement confiance en nos super ingrédients coréens que nous leur avons laissé une place de choix dans notre flacon : leurs extraits sont incorporés à 80%. Notre sérum lissant GINSENG SUPER SERUM réduit l’apparence des rides et ridules de la peau grâce à ses effets lissants et tenseurs. L’association de notre complexe au Ginseng et des peptides aide à rendre la peau plus li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786255</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e497978e40523c40c579b29f8a31c43202310519d14ccffc0e8ba2c034370a5a ]]></g:image_link>
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
<title><![CDATA[ Erborian red pepper super sérum 30ml ]]></title>
<g:id>35930889-ad0c-4b36-81b5-8426d3959e00</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-red pepper super sérum 30ml?35930889-ad0c-4b36-81b5-8426d3959e00 ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sérum éclat pour un teint unifié et ultra lumineux.</p>
<p>Chez Erborian, nous avons tellement confiance en nos super ingrédients coréens que nous leur avons laissé une place de choix dans notre flacon : leurs extraits sont incorporés à 80%. Notre sérum éclat visage RED PEPPER SUPER SERUM agit comme une dose énergisante qui réveille la peau pour booster instantanément son éclat naturel. En surface, ses agents exfoliants d’origine naturelle dévoilent un teint plus unifié et lumineux. La promes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786231</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6183bbf7ba3b6a31ff19d54e181c03d1024a86caa3e28a628e8e07ded8311fc3 ]]></g:image_link>
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
<title><![CDATA[ Erborian skin hero au ginseng perfecteur de peau nue 15ml ]]></title>
<g:id>481bc52e-4d9c-492d-9d7b-26fa5ea1c2d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-skin hero au ginseng perfecteur de peau nue 15ml?481bc52e-4d9c-492d-9d7b-26fa5ea1c2d0 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>SKIN HERO</strong> : votre peau nue, comme parfaite instantanément, encore plus belle demain !<br />Ce soin perfecteur non teinté, sans silicone*, sublime votre peau nue dès l’application, et améliore visiblement la qualité et la texture de votre peau jour après jour. Il associe l’efficacité du complexe au Ginseng Blanc coréen à des enzymes retexturisantes pour un effet peau neuve visible.</p>
<p>- Instantanément, sa formule lisse, floute et illumine, tout en laissant une sensation de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255785722</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8a2ab9287a7b6232ad5d3515702eda04d3d441eb4b8e2eae5d7a2802833b821c ]]></g:image_link>
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
<title><![CDATA[ Erborian yuza super sérum 30ml ]]></title>
<g:id>93de4534-effc-442c-85f7-f7579843f340</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-yuza super sérum 30ml?93de4534-effc-442c-85f7-f7579843f340 ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <div class="o-tabs">
<div class="o-tab o-expandable js--expanded" id="description">
<div class="o-expandable-content">
<p>Chez Erborian, nous avons tellement confiance en nos super ingrédients coréens que nous leur avons laissé une place de choix dans notre flacon : leurs extraits sont incorporés à 80%. <span>Enrichi en vitamine C</span>, connue pour ses propriétés anti-oxydantes, <span>YUZA SUPER SERUM</span> à la vitamine C agit comme un « bouclier quotidien ». Formulé dans une texture ultra l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809255786217</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6898e522820c4f63365111eb2f78dafd858c1061f5c6e5c7996fa6e7df6a588b ]]></g:image_link>
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
<title><![CDATA[ Erborian Éponge Konjac Naturelle Éponge Douce Exfoliante ]]></title>
<g:id>d3b0337a-9556-4cf7-b58d-e68b58cd112f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-ponge konjac naturelle Éponge douce exfoliante?d3b0337a-9556-4cf7-b58d-e68b58cd112f ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Erborian Éponge Konjac Naturelle Éponge Douce Exfoliante est une éponge naturelle issue d'une plante asiatique, qui est utilisée depuis longtemps en Corée pour le nettoyage du visage et du corps.</p>
<p>L'éponge Konjac naturelle aide à stimuler la micro-circulation grâce au massage associé.</p>
<p>La peau est assainie, purifiée, infiniment douce et lumineuse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760239241083</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9dd901095688fe7a7cf0fcd2c26924bdfea006b78308544a56fd438622d92590 ]]></g:image_link>
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
<title><![CDATA[ Erborian Éponge Konjac au Thé Vert ]]></title>
<g:id>2f31c9df-d014-42ca-90c1-101c07d2d4c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/erborian-ponge konjac au thé vert?2f31c9df-d014-42ca-90c1-101c07d2d4c9 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>rborian Éponge Konjac au Thé Vert Éponge Douce Exfoliante est une éponge issue d'une plante asiatique, qui est utilisée depuis longtemps en Corée pour le nettoyage du visage et du corps.</p>
<p>L'éponge Konjac naturelle aide à stimuler la micro-circulation grâce au massage associé. Le thé vert est reconnu pour ses propriétés antioxydantes.</p>
<p>La peau est assainie, purifiée, infiniment douce et lumineuse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760239241205</g:gtin>
<g:brand><![CDATA[ ERBORIAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e161c1db2790f7c29c64a3460fd5408098b47e77723790145ad0e1fe9a3a3b34 ]]></g:image_link>
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
<title><![CDATA[ Eryplast Calm Mousse 100ml ]]></title>
<g:id>f09f5a96-efc8-42f2-b4ba-b7a423808d68</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eryplast-calm mousse 100ml?f09f5a96-efc8-42f2-b4ba-b7a423808d68 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Mousse anti-démangeaisons aux actifs naturels (Panthénol – Vitamine B5 et extraits de feuilles d’Aloe Vera)</p>
<p>- Elle réduit les rougeurs et hydrate en une seule application.<br />- Elle soulage en 60 secondes.<br />- Elle a un effet rafraichissant et durable jusqu’à 72H après une seule application.</p>
<p>La mousse est adaptée pour toute la famille et est applicable sur le visage et le corps et tout type de peaux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7350087738826</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/35f00bad4293504474da7657bc7562e69984b491835066c1b708d5a631775e4d ]]></g:image_link>
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
<title><![CDATA[ Estipharm 30 lingettes nettoyantes anti buée pour lunettes ]]></title>
<g:id>91824154-c586-4db8-8c40-8277316f4764</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-30 lingettes nettoyantes anti buée pour lunettes?91824154-c586-4db8-8c40-8277316f4764 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les lingettes nettoyantes Estipharm vous permettent de nettoyer : </p>
<ul><li>Les verre de lunettes, de jumelles.</li>
<li>Les objectifs d' appareils photos.</li>
<li>Les écrans de téléphones portables, de tablettes et d' ordinateur.</li>
</ul><p> </p>
<p><em><span>Les + produit :</span></em></p>
<ul><li>Anti-buée = efficacité pendant 10 heures.</li>
<li>Anti-traces.</li>
<li>Anti-statique.</li>
</ul><p> </p>
<p>Nettoyage et entretien pour tous les types de verre.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560001792</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/019ec3b2ea1f61918d8bdc50aa5620cf9f0c76bfc75562ec8cecf4304474265f ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm Cotons Démaquillants Réutilisables 7 Cotons ]]></title>
<g:id>d9ecb05e-7162-467c-9bd1-8cf77f429b66</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-cotons démaquillants réutilisables 7 cotons?d9ecb05e-7162-467c-9bd1-8cf77f429b66 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estigreen Cotons Démaquillants Réutilisables 7 Cotons est un ensemble de 7 cotons réutilisables, représentant une solution écologique et pratique pour votre routine de démaquillage. Chaque coton offre une texture délicate, idéale pour le démaquillage en douceur, tout en garantissant une élimination efficace des résidus de maquillage. Ils possèdent une face lisse pour les laits et les huiles afin de démaquiller la peau en douceur et une face rugueuse pour les eaux micellaires et lotions afin d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760270171127</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8a52632e69483bb962f7740a82d404b5104aa6b65581d2cedc4d3e9a63766d2 ]]></g:image_link>
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
<title><![CDATA[ Estipharm Cure oreilles ]]></title>
<g:id>f5ab6fc9-5a67-4f2d-aab2-ef22f82ec0e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-cure oreilles?f5ab6fc9-5a67-4f2d-aab2-ef22f82ec0e0 ]]></link>
<g:price><![CDATA[ 240.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm 2 Cure-Oreilles Métal permettent de retirer le cérumen et ainsi éviter la formation de bouchon d'oreilles.</p>
<p>Il suffit d'introduire sans forcer, l'extrémité arrondie dans l'oreille et longer la paroi du pavillon avec le coté courbé. Retirer délicatement les amas de cérumen.</p>
<p>L'oreille est propre en toute sécurité!</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401573210556</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/be9eadd807d1f98a0cfba86bc4ade0326589bf2f4fdefcb7368e125ec9fa6c79 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm Fleur de douche Rose ]]></title>
<g:id>09cc0b5e-947e-4f51-92c2-2a3c50150598</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-fleur de douche rose?09cc0b5e-947e-4f51-92c2-2a3c50150598 ]]></link>
<g:price><![CDATA[ 99.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm Fleur de Douche Rose est un accessoire indispensable de la salle de bain. Sous la douche ou dans le bain, cette fleur permet d'optimiser la mousse et de masser la peau. Elle exfolie tout en douceur pour une meilleure élimination des cellules mortes, laissant la peau lisse et douce.</p>
<p>Munie d'une cordelette, cette fleur de douche colorée est aussi très pratique car elle peut ainsi être accrochée dans la douche.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760270171707</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32e977b110e913be56101c9e0f51d05e35d1c7f0fa8d3725fae2e967df40a9b1 ]]></g:image_link>
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
<title><![CDATA[ Estipharm Gant pour appliquer l'autobronzant ]]></title>
<g:id>d636aef8-cede-414b-9544-3b35cab765af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-gant pour appliquer l'autobronzant?d636aef8-cede-414b-9544-3b35cab765af ]]></link>
<g:price><![CDATA[ 395.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760270171646</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb9dfc14d96e3e6e4bbfa47fa9b74c57c676f2d7ea42dc814674e85982f948cc ]]></g:image_link>
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
<title><![CDATA[ Estipharm Peigne anti-poux métallique ultra fin ]]></title>
<g:id>f3c5f8a2-3915-4f48-a869-17bfcfcfc4ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-peigne anti-poux métallique ultra fin?f3c5f8a2-3915-4f48-a869-17bfcfcfc4ae ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Peigne à poux métallique avec poignée avec zone antidérapante. </span></li>
<li><span>Loupe intégrée dans le manche pour repérer facilement les poux et les lentes.</span></li>
<li><span>Dents torsadées en acier inoxydable avec un très fin espacement et une pointe arrondie pour décrocher et éliminer efficacement tous les parasites.</span></li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401553830460</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b54b315948ba36ea9110c98c34da3e44c9ff79acb1f5357f283af2a80b999532 ]]></g:image_link>
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
<title><![CDATA[ Estipharm Pilulier 7 Jours Rond ]]></title>
<g:id>b4eeec20-2bea-4201-9e8a-f082e4a77a4c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-pilulier 7 jours rond?b4eeec20-2bea-4201-9e8a-f082e4a77a4c ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm Pilulier 7 Jours Rond est destiné aux patients polymédiqués.</p><p>Le pilulier semainier Estipharm est doté de 7 modules et 4 compartiments par module. L'étui est en plastique rigide et chaque module correspond à une journée de traitement.</p><p>Couleur : modules bleus, modules verts.</p><p>Diamètre : 8 cm.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597131677</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/263f810afc7b2218518bf20d22ff5ef537f64e704f90f5fcad8496fb345f8004 ]]></g:image_link>
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
<title><![CDATA[ Estipharm Pilulier 7 jours ]]></title>
<g:id>8ac1f65e-4683-4d32-b4f5-a90359e21e36</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-pilulier 7 jours?8ac1f65e-4683-4d32-b4f5-a90359e21e36 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm Pilulier 7 Jours Rectangulaire est destiné aux patients polymédiqués.</p>
<p>Le pilulier semainier Estipharm est doté de 7 modules et 4 compartiments par module. L'étui est en plastique rigide et chaque module correspond à une journée de traitement.</p>
<p>L'étui rigide est doté de ressorts pour permettre un accès facile et rapide aux modules.</p>
<p>Taille : 19 x 11 cm.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597131738</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c66fc9e73ff8d68be0c8ecec6dec37e3b7505062160ebd8fbe63f172be10276c ]]></g:image_link>
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
<title><![CDATA[ Estipharm Pochette Voyage Flacons Rechargeables 90ml ]]></title>
<g:id>0a145006-63cf-4392-811a-aaa14ae12c2b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-pochette voyage flacons rechargeables 90ml?0a145006-63cf-4392-811a-aaa14ae12c2b ]]></link>
<g:price><![CDATA[ 360.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <strong>kit de flacons de voyage Estipharm</strong> est un accessoire indispensable à tous les baroudeurs ainsi qu'aux personnes étant régulièrement en déplacement professionnel ! Il vous permet de voyager sans pour autant mettre votre routine beauté de côté !&nbsp;</p><p>Il vous est déjà arrivé de passer les premiers contrôles à l'aéroport et que l'on vous refuse certains de vos produits cosmétiques (savons, shampooings, soin cheveux, etc.), tout simplement car leur contenance était supér ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760270171912</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/652aba2680667a61922829f06375df380d555beb1f39f9fcefd2b6ae897388f0 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm Savon au lait de chèvre 100g ]]></title>
<g:id>88529f32-091c-4968-876f-4e3632f206f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-savon au lait de chèvre 100g?88529f32-091c-4968-876f-4e3632f206f3 ]]></link>
<g:price><![CDATA[ 395.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm Savon au Lait de Chèvre 100 g est un savon enrichi en lait de chèvre reconnu pour ses propriétés d'hydratation.</p>
<p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760270171097</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b2948063b6512e1d98cda837a7121fa6c6714b2140b8bdeed967a20c0319568e ]]></g:image_link>
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
<title><![CDATA[ Estipharm Spray nettoyant pour lunettes 30ml + lingette ]]></title>
<g:id>e60471af-7ddb-4d5d-9755-334740bf0956</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-spray nettoyant pour lunettes 30ml + lingette?e60471af-7ddb-4d5d-9755-334740bf0956 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spray nettoyant pour lunettes anti-buée</p>
<p>Estipharm Spray Nettoyant pour lunettes 30 ml est un kit nettoyant 2 en 1, avec solution et lingette, qui permet de nettoyer tous types de verres : lunettes, mais aussi portables, appareils photos, jumelles, écrans d'ordinateurs... Très pratique, la solution Estipharm offre une action : anti-buée (pendant 10 heures), antistatique, anti-traces.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560001808</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3acbeb5e83f14ea1c9810dc394d2b94e8b1508383e1ca14b6d03be13da786d63 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm bouillote caoutchouc 2l ]]></title>
<g:id>efe16abe-64a2-4d05-8d53-671529726fa9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-bouillote caoutchouc 2l?efe16abe-64a2-4d05-8d53-671529726fa9 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>
</p><p>Bouillotte lamelles caoutchouc.</p>
<p>Coloris selon disponibilité.</p>
<p>A remplir d'eau chaude.</p>
<p>Apporte chaleur et réconfort. Parfait pour se délasser après une journée de travail.</p>
<p>Contenance 2 litres. </p>
<p>Ne pas passer au four micro-ondes.  </p>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548704424</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2020bc0d3734b42f72df59f7ee86de56a63724c6fb2f91c56de67911b3563f6a ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm brumisateur rechargeable 200ml ]]></title>
<g:id>069e78ec-08d2-43a8-b7a3-00c2a1d3c6a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-brumisateur rechargeable 200ml?069e78ec-08d2-43a8-b7a3-00c2a1d3c6a1 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm brumisateur rechargeable 200ml</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760270170182</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/963f8c773fb32cf9da17ca9a39b7dad885f5dfb70d8c22ff3bcfa1829a1a6b0c ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm fleur de massage 1 eponge ]]></title>
<g:id>edf3c8b9-508a-4d2a-bec9-0929a6c51b5c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-fleur de massage 1 eponge?edf3c8b9-508a-4d2a-bec9-0929a6c51b5c ]]></link>
<g:price><![CDATA[ 160.00 EUR ]]></g:price>
<description><![CDATA[ <p>Corolle de bain. <br />Soin du corps.</p>
<p>Pour un massage douceur sous la douche. Cette éponge fleur multiplie les bons points. D'abord, elle retient durablement la mousse de vos produits de toilette. Ensuite, elle stimule en douceur la circulation. Enfin, elle élimine les cellules mortes et affine le grain de la peau. 3 bonnes raisons pour l'adopter chaque jour pour la toilette !</p>
<p>Son + : Son cordon de suspension pour l'accrocher à un robinet, par exemple. Se rince et s'entretient f ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597971587</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/541fd6844456cf03628eee259885cb7a4b84a6be7c2d7a8af5a3ba60ba23d405 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm gant bain et toilette ]]></title>
<g:id>da7b67a0-d2f4-4b76-afec-cfd0fb89b55d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-gant bain et toilette?da7b67a0-d2f4-4b76-afec-cfd0fb89b55d ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm gant bain et toilette</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548704653</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da7ffe5819857eafd0e11ee0ad0705adb71902997d3de8c42b9f5e8c85179279 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm masque repos ]]></title>
<g:id>b34c9ea2-e101-4e61-95aa-8cdbfa086c7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-masque repos?b34c9ea2-e101-4e61-95aa-8cdbfa086c7f ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Estipharm Masque de Relaxation, masque confortable avec une face satinée et une molletonnée,</p>
<p>idéal pour voyager ou pour les personnes sensibles à la lumière.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401544363847</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa18da81476edbe16c54247a6dc5159351a2d938a0295511fd547fbb403d7fa5 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Estipharm trousse flacon voyage ]]></title>
<g:id>180cce4e-ca6e-4d10-b626-f53b061857d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/estipharm-trousse flacon voyage?180cce4e-ca6e-4d10-b626-f53b061857d1 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>existe en 3 coloris : rose, bleu et vert </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401541221607</g:gtin>
<g:brand><![CDATA[ ESTIPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab661968d1826a5c17ff37c12fce414b9d37c535db57f2e57f655afda3e4fb75 ]]></g:image_link>
<g:product_type><![CDATA[ ACCESSOIRES ET COUTELLERIE  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Etat Pur Acide Hyaluronique 15 ml ]]></title>
<g:id>60c221d0-2f6c-4b11-804a-082f792e435a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur acide hyaluronique 15 ml?60c221d0-2f6c-4b11-804a-082f792e435a ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Acide Hyaluronique 15 ml est un soin indiqué pour combler les rides grâce à de l'acide hyaluronique aux deux poids moléculaires.</p>
<ul><li>Le bas poids moléculaire stimule en profondeur la synthèse d'acide hyaluronique et de collagène naturellement présents dans la peau pour estomper visiblement les rides du visage.</li>
<li>Le haut poids moléculaire protège la peau de la déshydratation. Il agit comme une éponge et est capable de retenir jusqu'à mille fois son poids en eau.</li>
</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231142</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88953fd3c7ba4287b30b8588d2891722032fd3561a8be9a833a6275a44a6b001 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Acide Salicylique 2% 15 ml ]]></title>
<g:id>bdbc898f-7aba-4858-ad2c-6dc47c636d4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur acide salicylique 2% 15 ml?bdbc898f-7aba-4858-ad2c-6dc47c636d4b ]]></link>
<g:price><![CDATA[ 1645.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Acide Salicylique 2% 15 ml est un soin indiqué pour combattre les boutons et points noirs.</p>
<ul><li>Grâce à son action kératolytique, il stimule le renouvellement cellulaire et aide à éliminer les cellules mortes accumulées à la surface de la peau, réduire visiblement les imperfections dès leur apparition et affine le grain de peau.</li>
<li>Il permet également de désobstruer et resserrer les pores pour diminuer visiblement l'apparence des impuretés et points noirs.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231159</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/340b5670381754a8d0cdf0153281f7a575680881017b1dd1741249188a24e4e8 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Acide glycolique 10% ]]></title>
<g:id>fdece20e-0c32-40a0-9cf0-dcb104f25df9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur acide glycolique 10%?fdece20e-0c32-40a0-9cf0-dcb104f25df9 ]]></link>
<g:price><![CDATA[ 2135.00 EUR ]]></g:price>
<description><![CDATA[ <div class="col-span-3 lg:col-span-1">
<div class="inline-flex items-start">
<div class="text-left ml-5 lg:ml-3"><span class="font-zilla font-semibold text-lg md:text-xl">Effet peau neuve</span></div>
</div>
<div class="lg:text-sm text-gray-800 mt-2 pl-10 lg:pl-0 keep-all hidden lg:block">Booste le renouvellement cellulaire et favorise l'élimination des cellules mortes pour une peau lisse et éclatante.Lisse le grain de peau</div>
</div>
<div class="col-span-3 lg:col-span-1">
<div class="lg:text- ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231517</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/260d61497081e1bc04f9288d4c6f3ab1f02e888840f24174f1636744eeb67b95 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Actif Pur A05 Resvératrol 15 ml ]]></title>
<g:id>76924cce-052a-47eb-8e16-6965a6693265</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur actif pur a05 resvératrol 15 ml?76924cce-052a-47eb-8e16-6965a6693265 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur A05 Resvératrol 15 ml est un soin formulé pour agir sur le vieillissement cutané, à base d'extraits de sarments de vigne de Bordeaux à teneur garantie en Resvératrol (formulé avec 1500 mg/100 g).</p>
<p>Le Resvératrol est un puissant antioxydant issu de la vigne et appartenant à la famille des polyphénols, qui possède une couleur naturellement brune, preuve de sa pureté.<br />Les ingrédients biomimétiques de ce soin, inspirés des composants naturellement présents dans la peau, ont ét ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231234</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40067fc7b57497f7c5e001f3534e051b9728fae0c20d70fe2103a0e8aede3179 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Actif Pur Aloe Vera 15 ml ]]></title>
<g:id>ab34da12-5b39-4334-9ad3-f71ce39673b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur actif pur aloe vera 15 ml?ab34da12-5b39-4334-9ad3-f71ce39673b5 ]]></link>
<g:price><![CDATA[ 1945.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Actif Pur Aloe Vera 15 ml est un soin formulé pour les peaux fragiles ou agressées, à base d'aloe vera (formulé avec 500 mg/100 g).<br />Ses ingrédients biomimétiques, inspirés des composants naturellement présents dans la peau, ont été sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau, pour lui donner juste ce dont elle a besoin. Sa formule :</p>
<ul><li>Hydrate intensément : il réhydrate la peau et l'aide à maintenir une teneur en eau optimale pour la pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231104</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a5165429b67ae17e2c57bf76993e5671ce5988a226001674f77697cb6e4a891 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Actif Pur Glabridine 15 ml ]]></title>
<g:id>f7181347-ce23-40e1-802b-051d32d0ae60</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur actif pur glabridine 15 ml?f7181347-ce23-40e1-802b-051d32d0ae60 ]]></link>
<g:price><![CDATA[ 2135.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Actif Pur Glabridine 15 ml est un soin formulé pour agir sur les hyperpigmentations, à base d'un puissant extrait de réglisse (formulé avec 25 mg/100 g).</p>
<p>Il est formulé à base d'un puissant extrait de réglisse qui estompe les taches brunes (taches liées au soleil, taches liées aux changements hormonaux, masque de grossesse, hyperpigmentation dûe à l'acné ou cicatricielle) et uniformise le teint. Ses ingrédients biomimétiques, inspirés des composants naturellement présents dans ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231180</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e4aa344f3d78fafd32a965dd326b90d4f03230e3a3e3c4e796c89dc191e4b60 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Actif Pur Propolis 15 ml ]]></title>
<g:id>1fb6c4ca-0602-49a3-879d-2e99b2c3669e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur actif pur propolis 15 ml?1fb6c4ca-0602-49a3-879d-2e99b2c3669e ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Actif Pur Propolis 15 ml est un soin formulé pour agir sur le teint brouillé, la peau à tendance acnéique, à base de propolis (formulé avec 75 mg/100 g).</p>
<p>La propolis est reconnue pour ses propriétés purifiantes et apaisantes. Cet extrait de propolis biosourcé est idéal pour une action de fond sur la peau à tendance acnéique (acné adulte ou adolescence), quand le teint se brouille et que les imperfections s'installent.<br />Ses ingrédients biomimétiques, inspirés des composants ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231272</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae7279a89f39f7b36f76f8b3460467442b77caefac413bb5e6ae20d79fbfa164 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Baume Ultra-Riche Hydratant 40 ml ]]></title>
<g:id>c8fea289-8676-4a57-bfb1-0bf40371f815</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur baume ultra-riche hydratant 40 ml?c8fea289-8676-4a57-bfb1-0bf40371f815 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Baume Ultra-Riche Hydratant 40 ml est un soin qui calme les sensations d'inconfort liées à la sécheresse cutanée.<br />Ses ingrédients biomimétiques, inspirés des composants naturellement présents dans la peau, ont été sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau, pour lui donner juste ce dont elle a besoin.<br />Relipidée, la peau retrouve souplesse et douceur. Restaurée, elle est moins réactive.</p>
<p>Testé sous contrôle dermatologique. Convient au ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231340</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e0ceb558095d09d109c585b8ecd8b13261f09cee6f98ae83e61c50a286affe9 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Crème Légère Hydratante 40 ml ]]></title>
<g:id>b79f7dad-34a1-43b8-9989-329e5303d508</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur crème légère hydratante 40 ml?b79f7dad-34a1-43b8-9989-329e5303d508 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Crème Légère Hydratante 40 ml est une crème fine qui hydrate immédiatement tous types de peaux, même les plus sensibles et délicates.<br />Ses ingrédients biomimétiques, inspirés des composants naturellement présents dans la peau, ont été sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau, pour lui donner juste ce dont elle a besoin.<br />Protégée, la peau est matifiée, douce et plus éclatante.</p>
<p>Testé sous contrôle dermatologique. Convient aux peaux s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201230848</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/14751c7c36c2035ca1fb387d48738f70dac3b453c462bdab59b6b280e7668140 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Crème Riche Hydratante 40 ml ]]></title>
<g:id>dea0e1a8-9e98-4342-8ac5-eee8fc99bbbe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur crème riche hydratante 40 ml?dea0e1a8-9e98-4342-8ac5-eee8fc99bbbe ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Crème riche hydratante offre une hydratation intense et durable  à la peau. (hydratation 8 heures). Le trio d'huiles végétales combinées au beurre de mangue nourrissent intensément la peau et renforcent la barrière protectrice de la peau. Leur dosage dans ce produit offre un équilibre idéal aux peaux sèches. Mieux protégée de l'impact environnental, la peau est douce. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231029</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e0ef7a904f2f5dc85750832cbbc04eb75631b20b11d62a9b857859f5e94733d ]]></g:image_link>
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
<title><![CDATA[ Etat Pur D-Panthénol 5,25% 15 ml ]]></title>
<g:id>42301a4c-3274-4e4a-9b3f-1e52c77c4da9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur d-panthénol 5,25% 15 ml?42301a4c-3274-4e4a-9b3f-1e52c77c4da9 ]]></link>
<g:price><![CDATA[ 1945.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur D-Panthénol 5,25% 15 ml est un soin contenant du d-panthénol, ou vitamine B5, une vitamine naturellement présente dans la peau qui, concentré à un dosage pharmacologique, hydrate et renforce la peau pour diminuer significativement la sécheresse cutanée.</p>
<ul><li>Il stimule la formation des lipides (acides gras), molécules essentielles à la constitution de la barrière cutanée, pour renforcer le film protecteur de la peau et la protéger de la sécheresse et de la déshydratation.</li> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231166</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8af4260bdc7776b66983ae8ff00df0ed856b29df78416bd5727a8ff9318a3240 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Enoxolone 15 ml ]]></title>
<g:id>49888435-8f24-465c-a59a-9a4b6295ea89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur enoxolone 15 ml?49888435-8f24-465c-a59a-9a4b6295ea89 ]]></link>
<g:price><![CDATA[ 2135.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Enoxolone 15 ml est un soin indiqué pour les peaux sensibles et hyper-réactives, sujettes au "flush".</p>
<ul><li>Il inhibe la production des médiateurs inflammatoires et réduit les réactions cutanées (irritations, rougeurs diffuses, échauffements, picotements, tiraillements...). Il apaise rapidement la peau du visage.</li>
<li>Il améliore le seuil de tolérance des peaux anormalement réactives en diminuant le déclenchement des réactions cutanées.</li>
<li>Il atténue significativement ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231173</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25b9519a2ded8a3e8355a21b26f4e075fce46d01e76eb349d95757060887e900 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Fluide Hydratant Contour des Yeux 15ml ]]></title>
<g:id>7d39f880-f042-4710-bfca-5a2b42b2fb75</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur fluide hydratant contour des yeux 15ml?7d39f880-f042-4710-bfca-5a2b42b2fb75 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Fluide hydratant contour des yeux riche en glycérine et acide hyaluronique hydrate la peau délicate du contour des yeux. L'extrait de Tara et d'algues rouges nourrissent la peau et restaure la barrière de surface. Grâce à un biopolymère d'origine végétal, ce fluide contour des yeux a un effet tenseur immédiat sur la peau pour un regard plus reposé.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231418</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f8efa35bb169f3c3fdcc1aa5bf43667fd3d01e0f88f0db184f5e03577d2be65 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Gel Nettoyant Purifiant Visage 200 ml ]]></title>
<g:id>19e3eb47-46f9-4927-a9d4-891c10706279</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur gel nettoyant purifiant visage 200 ml?19e3eb47-46f9-4927-a9d4-891c10706279 ]]></link>
<g:price><![CDATA[ 1275.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Gel Nettoyant Purifiant Visage 200 ml est un gel au pH neutre et aux ingrédients biomimétiques inspirés des composants naturellement présents dans la peau, sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau.</p>
<p>Idéal pour les peaux mixtes à grasses.</p>
<p>Testé sous contrôle dermatologique et ophtalmologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201230626</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb917e39956851be85619e85b581e3be805cbec0b097ba462dafdb961c110932 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Gelée Fondante Exfoliante 50 ml ]]></title>
<g:id>34a3a400-1c1e-41eb-9304-b00d6285fa38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur gelée fondante exfoliante 50 ml?34a3a400-1c1e-41eb-9304-b00d6285fa38 ]]></link>
<g:price><![CDATA[ 1580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Gelée Fondante Exfoliante 50 ml est une gelée aux ingrédients biomimétiques inspirés des composants naturellement présents dans la peau, sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau. Elle élimine en douceur les cellules mortes et les impuretés.</p>
<p>Testé sous contrôle dermatologique</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231500</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a68ec364227254db9fcdd365b57a9941b156a43361e8bad09c0a7aa7425bd812 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Lait Démaquillant au pH Doux 200 ml ]]></title>
<g:id>7c9a9446-2ec3-406d-a7cd-765333999578</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur lait démaquillant au ph doux 200 ml?7c9a9446-2ec3-406d-a7cd-765333999578 ]]></link>
<g:price><![CDATA[ 1275.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Lait Démaquillant au pH Doux 200 ml est un lait démaquillant au pH neutre et aux ingrédients biomimétiques inspirés des composants naturellement présents dans la peau, sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau.</p>
<p>Convient aux peaux sensibles.</p>
<p>Testé sous contrôle dermatologique et ophtalmologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201230404</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19597e27d58c06938de492b3c1e4e04ff7eeb5acdaf252c47d60e22bea40e8f1 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Masque Purifiant Express 50 ml ]]></title>
<g:id>b3a2683f-b14e-486f-96c4-1bc76290ddd6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur masque purifiant express 50 ml?b3a2683f-b14e-486f-96c4-1bc76290ddd6 ]]></link>
<g:price><![CDATA[ 1525.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Masque Purifiant Express 50 ml est un soin formulé pour absorber l'excès de sébum, désincruster les pores et resserrer le grain de peau.<br />Ses ingrédients biomimétiques, inspirés des composants naturellement présents dans la peau, ont été sélectionnés pour leur degré de pureté et leur parfaite affinité avec la peau, pour lui donner juste ce dont elle a besoin.<br />La peau est matifiée, le grain de peau resserré.</p>
<p>Testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231524</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b516b88e394f6324041c363f05ed9d5fb4dbff75d88284f63a59c883147296a1 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Peptide-4 Pro-Collagène 15 ml ]]></title>
<g:id>a4dfdb40-4444-413a-b034-3f03b6e9a743</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur peptide-4 pro-collagène 15 ml?a4dfdb40-4444-413a-b034-3f03b6e9a743 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etat Pur Peptide-4 Pro-Collagène 15 ml est un soin indiqué pour cibler les rides d'expression (ride du lion, pattes d'oie, contour de la bouche).</p>
<ul><li>Le peptide-4 pro-collagène est un peptide naturellement présent dans la peau qui stimule la synthèse de collagène et autres composants du derme, essentiels à la densité et la fermeté de la peau.</li>
<li>Grâce à cette action booster de collagène, il estompe visiblement les rides d'expression.</li>
</ul><p>Ainsi, la peau est revitalisée,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231227</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf596d3816b6fb69dbbe7c19232eb9745628b15ad2407c6c35118a79f3ae0cec ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Vitamine E 3,93% 15 ml ]]></title>
<g:id>479a44e3-bc7b-43f0-a010-7dc4168a439d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur vitamine e 3,93% 15 ml?479a44e3-bc7b-43f0-a010-7dc4168a439d ]]></link>
<g:price><![CDATA[ 1945.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Etat Pur Vitamine E 3,93% 15 ml est un véritable booster anti-oxydant pour la peau formulé avec de la vitamine E sous sa forme la plus active : l'alpha-tocophérol. Puissant antioxydant, la vitamine E renforce les capacités naturelles de défense de la peau vis-à-vis des agressions environnementales et du stress (pollution, UV, mode de vie, fumée de cigarette...).</span><br /><span>Ce soin protège également du vieillissement cutané prématuré induit par les surexpositions (soleil, pollutio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231203</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2dd1393d9af5abd0af4e090fd8c4510726b7322f1a7787da2324176079eb3c64 ]]></g:image_link>
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
<title><![CDATA[ Etat Pur Zinc Gluconate 3% 15 ml ]]></title>
<g:id>2862ab5a-abcd-4bfe-ae87-f93d20f776e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etat-pur zinc gluconate 3% 15 ml?2862ab5a-abcd-4bfe-ae87-f93d20f776e3 ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Etat Pur Zinc Gluconate 3% 15 ml est un soin au gluconate de zinc, dérivé de zinc assimilable par la peau qui est un puissant sébo-régulateur connu pour ses propriétés antibactériennes et astringentes. Il rééquilibre et matifie visiblement la peau du visage.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760201231210</g:gtin>
<g:brand><![CDATA[ Etat Pur ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b5abb39832f0a4be99095aaf887aa701c61fe3906dcfe1aec9390b6e9f9d3a10 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Anti-Transpirant Protection 48h - Peaux Sensibles Compressé, 100ml ]]></title>
<g:id>641dbf35-9b27-4642-a788-626b1f9c12de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-anti-transpirant protection 48h - peaux sensibles compressé, 100ml?641dbf35-9b27-4642-a788-626b1f9c12de ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'<span>Anti-Transpirant Protection 48h</span> de <span>ETIAXIL</span> a spécialement été formulée pour répondre aux besoins des peaux les plus sensibles. </p>
<p>Il permet de neutraliser l'<span>humidité</span>, ainsi que les mauvaises odeurs pour vous permettre de rester au <span>frais</span> pendant plusieurs heures. </p>
<p>Testé dermatologiquement, l'anti-transpirant Etiaxil respecte tous les types de peaux. </p>
<p>Son format <span>compressé</span> contient moins de gaz mais assure un n ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810006397</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9637d8519bdaaa12aa7c86ccba50a90727beb71cc58ac928be92f9f55878d6b8 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Déodorant Anti-Transpirant 48H Roll-on 50 ml ]]></title>
<g:id>fa8a5070-df85-43d5-b9f5-1f1f270daf06</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant anti-transpirant 48h roll-on 50 ml?fa8a5070-df85-43d5-b9f5-1f1f270daf06 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le roll-on ETIAXIL déodorant a une action déodorante et anti-transpirante pendant 48h. </span></p>
<p><span>Il prévient l’apparition de traces jaunes et blanches sur les textiles et respecte les peaux sensibles.</span></p>
<p><span> Sa formule testée sous contrôle dermatologique est sans alcool et sans paraben.</span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360044951</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c97ae267867739872a5f2e291abdddab52ab0e368f4907d79635c042f1d353fe ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Déodorant Anti-Transpirant 48H Stick 40 ml ]]></title>
<g:id>e2f68e23-1aa6-45a4-8d29-3ec4cfaa0d31</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant anti-transpirant 48h stick 40 ml?e2f68e23-1aa6-45a4-8d29-3ec4cfaa0d31 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etiaxil Déodorant Anti-Transpirant 48H Stick 40 ml est un déodorant avec une action déodorante et une action anti-transpirante, efficace pendant 48 heures.</p>
<p>Ce déodorant prévient l'apparition de traces jaunes et blanches sur les textiles et respecte les peaux les plus sensibles.</p>
<p>La formule est testée sous contrôle dermatologique et est sans alcool ajouté et sans paraben. Hypoallergénique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819997436</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb6d23d782cb0268d6ff67a72763bcaad58d1417880cf2970c14217921cb5fe2 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Déodorant Douceur 48H Roll-On 50 ml ]]></title>
<g:id>aae9ce06-5c3b-4ec9-9604-66178b2ae610</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant douceur 48h roll-on 50 ml?aae9ce06-5c3b-4ec9-9604-66178b2ae610 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etiaxil Déodorant Douceur 48H Roll-On 50 ml est un déodorant à l'actif anti-odeurs d'origine naturelle pour peaux sensibles.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810004263</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6b1243394b02b8483864cad3ca46ded2293e3a7a81a7d95dd56f54047d31524d ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Déodorant douceur 48H sans aluminium Aérosol 150ml ]]></title>
<g:id>fdf0e3d4-ed5f-4fc3-9164-f0409849dcfa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant douceur 48h sans aluminium aérosol 150ml?fdf0e3d4-ed5f-4fc3-9164-f0409849dcfa ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>Etiaxil Douceur 48h sans sels d’aluminium neutralise efficacement les odeurs grâce à la terre de diatomée et à son action antibactérienne. Son complexe végétal anti-humidité à base de prêle et sauge adoucit la peau. Son parfum aux notes d’agrumes apporte une sensation de fraîcheur<span>(1)</span>.</span></span></p>
<p> Efficaces pendant 48 heures, ils agissent sans bloquer la transpiration.</p>
<p><span>Les déodorants Douceur 48h sont formulés sans sels d’aluminium, sans alcool et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819990635</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fb2da8afd29c2a6dba6792ab19ce533600cca8de15a8cca0687c57bb66bc1aa6 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Déodorant douceur 48H sans aluminium stick 40ml ]]></title>
<g:id>5df14ac7-c405-436b-b0be-73a3391bc824</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant douceur 48h sans aluminium stick 40ml?5df14ac7-c405-436b-b0be-73a3391bc824 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>Etiaxil Douceur 48h sans sels d’aluminium neutralise efficacement les odeurs grâce à la terre de diatomée et à son action antibactérienne.</span></span></p>
<p> Son complexe végétal anti-humidité à base de prêle et sauge adoucit la peau.</p>
<p><span><span>Son parfum aux notes d’agrumes apporte une sensation de fraîcheur<span>(1)</span>. Efficaces pendant 48 heures, ils agissent sans bloquer la transpiration.</span></span></p>
<p><span><span>Les déodorants Douceur 48h sont formulé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819997023</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/169cb02eb61804524c9703d002b35cf69417ae84d4f62e00048e4b56952b15a8 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Déotranspirant Peaux normales Lotion Pieds 100ml ]]></title>
<g:id>d5eb2992-dfbc-4eab-8464-96276f69e5a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déotranspirant peaux normales lotion pieds 100ml?d5eb2992-dfbc-4eab-8464-96276f69e5a3 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le détranspirant Etiaxil pieds peaux normales a été conçu pour traiter efficacement la transpiration excessive des pieds. Appliqué sur les pieds, le produit permet de mettre au repos les glandes sudoripares, responsables de la production de sueur. Le débit de la transpiration est ainsi sous contrôle pendant plusieurs jours. Etiaxil pieds peaux normales peut également être utilisé en cas de transpiration des mains. Avant d’appliquer le produit sur la zone à traiter, faire un test au préa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401363896199</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62be534026a505b5cc85c3f859e7d452dfeb56a5acd881f9772eac39fcd2b494 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Détranspirant peaux normales roll-on 15ml ]]></title>
<g:id>68a09e15-38f9-47f3-911e-1fe8380f90c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-détranspirant peaux normales roll-on 15ml?68a09e15-38f9-47f3-911e-1fe8380f90c8 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le détranspirant Etiaxil aisselles peaux normales a été conçu pour traiter efficacement la transpiration excessive des aisselles. Appliqué sur les aisselles, le produit permet de mettre au repos les glandes sudoripares, responsables de la production de sueur. Le débit de la transpiration est ainsi sous contrôle pendant plusieurs jours. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401362744835</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f1e71105042885a69f0bbdf3e24855498473a74089bf08c48ef2268013e155d ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Men Déodorant anti transpirant contrôle 48h aerosol 150ml ]]></title>
<g:id>6057dc03-34c7-41f2-849b-6c5d942ec29f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-men déodorant anti transpirant contrôle 48h aerosol 150ml?6057dc03-34c7-41f2-849b-6c5d942ec29f ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Déodorant Men Anti-transpirant Contrôle 48H possède une formule à l’efficacité déodorante et anti-transpirante pendant 48H conçue spécialement pour les hommes.</p>
<p>4 actions :</p>
<ul><li> anti-trace</li>
<li> anti-odeur</li>
<li> anti-humidité</li>
<li> anti-auréole.</li>
</ul><p>Son système d’ouverture ON/OFF, de fermeture technique et sa bille diffusion antiblocage en font un produit pratique et nomade</p>
<p>Formule anti-trace et testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819997030</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5060f3881e3020df5cf4d4d615a6f5d66b88b25fd441959fe55fe6df41e1c6f3 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil Men Détranspirant Peaux Sensibles, 15ml ]]></title>
<g:id>6c7a7d77-d22e-42ef-adf7-49ad52b0daeb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-men détranspirant peaux sensibles, 15ml?6c7a7d77-d22e-42ef-adf7-49ad52b0daeb ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Hommes - Peaux sensibles. </li>
<li><span>On aime : </span>sa formule sans parfum. </li>
<li><span>Résultat : </span>La transpiration excessive est neutralisée pendant plusieurs jours.</li>
</ul><p> </p>
<p id="J609PWL">Le <span>Détranspirant Transpiration Excessive MEN</span> de <span>ETIAXIL </span>est un anti-transpirant qui neutralise les effets néfastes de la transpiration des aisselles. </p>
<p>Sa protection dure jusqu’à 5 jours pour vous apporter <span>conf ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810005581</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9abc8f8a19d39f6b43f954953499179f6a2a4587cb49d31c37b0b84318b2d794 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil déodorant Men anti transpirant 48H roll-on 50 ml ]]></title>
<g:id>750902f9-cc88-4c98-90a2-ee7ca1a246a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant men anti transpirant 48h roll-on 50 ml?750902f9-cc88-4c98-90a2-ee7ca1a246a6 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Déodorant Men Anti-transpirant Contrôle 48H possède une formule à l’efficacité déodorante et anti-transpirante pendant 48H conçue spécialement pour les hommes.</p>
<p>4 actions :</p>
<ul><li>anti-trace</li>
<li>anti-odeur</li>
<li>anti-humidité</li>
<li>anti-auréole.</li>
</ul><p>Son système d’ouverture ON/OFF, de fermeture technique et sa bille diffusion antiblocage en font un produit pratique et nomade</p>
<p>Formule anti-trace et testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819997009</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/013225207577c3c987e1b503a05e4e6588ffe17e0030307abfac25ba94b234b6 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil déodorant anti transpirant 48H pieds vaporisateur 100ml ]]></title>
<g:id>2dfd882c-0988-4da4-a8e6-8b5533407fd4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant anti transpirant 48h pieds vaporisateur 100ml?2dfd882c-0988-4da4-a8e6-8b5533407fd4 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le vaporisateur sans gaz ETIAXIL déodorant pieds a une action déodorante et anti-transpirante pendant 48h.</p>
<p>Sa formule testée sous contrôle dermatologique, sans alcool et sans paraben, respecte les peaux sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360114715</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb55941bd41c9b986f1d400d78ae60f86c144386364ae5fe3fbbfd0c5f45736f ]]></g:image_link>
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
<title><![CDATA[ Etiaxil déodorant anti-transpirant 48h spray 100ml ]]></title>
<g:id>02e6b136-254d-4f9a-a247-c2b35b52f9c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant anti-transpirant 48h spray 100ml?02e6b136-254d-4f9a-a247-c2b35b52f9c9 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etiaxil Déodorant Anti-Transpirant 48H Spray 100 ml est un déodorant offrant une action déodorante et une action anti-transpirante pendant 48 heures, pour une protection maximale.</p>
<p>Ce déodorant prévient l'apparition de traces jaunes et blanches sur les textiles et respecte les peaux sensibles.</p>
<p>Sa formule hypoallergénique, testée sous contrôle dermatologique est sans alcool et sans paraben. Son parfum est discret et léger, procurant une sensation de fraîcheur immédiate et durable. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360114906</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d2bd9ddc003fdb6df628e77877e5559297e9f63aab2478189bd8b3b69d198039 ]]></g:image_link>
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
<title><![CDATA[ Etiaxil déodorant anti-transpirant Protection 48H aérosol 150 ml ]]></title>
<g:id>a6964e89-637c-434b-beba-7c3c8a7a7dbc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-déodorant anti-transpirant protection 48h aérosol 150 ml?a6964e89-637c-434b-beba-7c3c8a7a7dbc ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Etiaxil Déodorant Anti-Transpirant Protection 48H Aérosol 150 ml est un déodorant à la formule enrichie en actifs déodorants et anti-transpirants.<br />Il assure une efficacité de 48 heures. Il est anti-traces blanches et jaunes, il protège sans faire de marque sur les vêtements.<br />Son parfum discret et léger procure une sensation de fraîcheur tout au long de la journée.</p>
<p>Testé sous contrôle dermatologique, convient aux peaux sensibles.<br />Sans alcool ajouté.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360114890</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/938e1d0c721b868df787f2bfb3320f7b8f879d332d2666088efb0aea1bbaa6dc ]]></g:image_link>
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
<title><![CDATA[ Etiaxil détranspirant aisselles peaux sensibles roll on 15ml ]]></title>
<g:id>d3d57bfd-c27b-41c8-a65b-1fa96f22ab8c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/etiaxil-détranspirant aisselles peaux sensibles roll on 15ml?d3d57bfd-c27b-41c8-a65b-1fa96f22ab8c ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le détranspirant Etiaxil aisselles peaux sensibles a été conçu pour traiter efficacement la transpiration excessive des aisselles, tout en respectant les peaux sensibles. Appliqué sur les aisselles, le produit permet de mettre au repos les glandes sudoripares, responsables de la production de sueur. Le débit de la transpiration est ainsi sous contrôle pendant 3 à 5 jours.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819997108</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dee2d218ebcc5d0851ff70f1b05b3f7f49da5845c22a67a6c70ef8cec6602262 ]]></g:image_link>
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
<title><![CDATA[ Eucerin - Hyaluron-Filler 3X Effect Soin de jour Spf 15 ]]></title>
<g:id>cb7526c8-7e72-40f4-89d3-ff80bd9197b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler 3x effect soin de jour spf 15?cb7526c8-7e72-40f4-89d3-ff80bd9197b6 ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour les </span><strong>peaux normales à mixtes</strong><span>,</span><strong> </strong><strong> </strong><strong>le </strong><strong>Soin de jour Peau normale à mixte Hyaluron-Filler <strong>3X Effect</strong> d'Eucerin</strong><span> est un soin de jour antirides</span><strong> </strong><strong>ultra doux et efficace</strong><span>. C’est  grâce  à  l’</span><strong>acide hyaluronique et la saponine</strong><span>, les deux éléments essentiels contenus dans ce produit, que ce produit  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294778</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/785ba1ddaf9a8ec96de5a3c6773fda520b0d273cf336a86d48616aafd37e9479 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Anti Rougeurs Soin Apaisant 50 ml ]]></title>
<g:id>560683b9-d69b-4de7-b9d4-3d4c6db92c8b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti rougeurs soin apaisant 50 ml?560683b9-d69b-4de7-b9d4-3d4c6db92c8b ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La peau hypersensible réagit facilement aux facteurs externes (froid, vent, pollution) et internes (stress, anxiété) et est plus sujette aux irritations, rougeurs, sécheresses, démangeaisons, picotements, tiraillements, ...<br /><br />Eucerin Anti Rougeurs Soin Apaisant 50 ml apaise et diminue les rougeurs cutanées des peaux hypersensibles, tout en apportant confort à la peau, immédiatement et durablement.<br /><br />L'actif SymSitive régule la sensibilité cutanée à la source pour apaiser la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800109096</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36353bbeaea444619611cd16e7fbe88c09d39460d59119d027a2fac5280ce4eb ]]></g:image_link>
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
<title><![CDATA[ Eucerin Anti Rougeurs Soin De Jour Correcteur SPF 25+ Teinté 50 ml ]]></title>
<g:id>7ad7d904-1073-4569-a7af-f16a298dea1f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti rougeurs soin de jour correcteur spf 25+ teinté 50 ml?7ad7d904-1073-4569-a7af-f16a298dea1f ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La peau hypersensible réagit facilement aux facteurs externes (froid, vent, pollution) et internes (stress, anxiété) et est plus sujette aux irritations, rougeurs, sécheresses, démangeaisons, picotements, tiraillements, ...<br /><br />Eucerin Anti Rougeurs Soin De Jour Correcteur SPF 25+ Teinté 50 ml apaise et diminue les rougeurs cutanées des peaux hypersensibles, tout en apportant confort à la peau, immédiatement et durablement.<br /><br />L'actif SymSitive régule la sensibilité cutanée à l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800109058</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7caa6d28609f2e56cb32d15b0c90b2081c7066cd0b96fe22240d7a36eca51964 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Anti pigment soin de jour teinté light spf30 50ml ]]></title>
<g:id>6747ae5a-b838-41c0-9933-527cbec20b3b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti pigment soin de jour teinté light spf30 50ml?6747ae5a-b838-41c0-9933-527cbec20b3b ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p><a href="https://www.eucerin.fr/votre-peau/peaux-hyperpigmentees/hyperpigmentation">La mélanine</a><span> est un pigment naturel qui donne de la couleur à la peau. </span><a href="https://www.eucerin.fr/a-propos-de-la-peau/comprendre-la-peau/le-soleil-et-la-peau">L’exposition à la lumière du soleil</a><span>, les influences hormonales et le vieillissement peuvent entraîner une augmentation de la production de mélanine et déclencher une hyperpigmentation. </span><a href="https://www.eucerin.fr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900916174</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/875259753d213443badf61b5f3b728947b0a72126167888046f7ba55d7ed578c ]]></g:image_link>
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
<title><![CDATA[ Eucerin Anti-pigment soin de jour teinté Médium SPF30 - 50ml ]]></title>
<g:id>de48a91f-7a19-40ba-aceb-dee04e25f77a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti-pigment soin de jour teinté médium spf30 - 50ml?de48a91f-7a19-40ba-aceb-dee04e25f77a ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Soin de Jour Teinté pour un teint à l'apparence naturelle et immédiatement unifiée</li>
<li>Couvre et réduit efficacement les taches brunes</li>
<li>Une protection SPF 30 + UVA.</li>
</ul><p>Pour un teint à l'apparence naturelle et immédiatement unifiée, et une réduction durable des taches brunes grâce à une application régulière. Premiers résultats visibles dès 2 semaines*.</p>
<p>Un Soin de Jour hydratant testé cliniquement avec une protection SPF 30 + UVA. Le Thiamidol**, actif brevet ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800303678</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/171c9f37eac8014d126ac8b47e71db63b3213e3cbbdf66d1fe65be47a9c0e861 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Anti-pigment sérum éclat 30 ml ]]></title>
<g:id>7bd655fe-cf7c-4592-90b1-cbd87b9bfc8e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti-pigment sérum éclat 30 ml?7bd655fe-cf7c-4592-90b1-cbd87b9bfc8e ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La mélanine est un pigment naturel qui donne de la couleur à la peau. </span><a href="https://www.eucerin.fr/a-propos-de-la-peau/comprendre-la-peau/le-soleil-et-la-peau">L’exposition à la lumière du soleil</a><span>, les influences hormonales et le vieillissement peuvent entraîner une augmentation de la production de mélanine et déclencher des taches brunes. Les taches brunes apparaissent sous forme de taches foncées et de taches de </span><a href="https://www.eucerin.fr/votre-peau/sign ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800303647</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f8577af829a42ac14a814ec152288375dda094e29ac2a6b00578babe0ce4a9ae ]]></g:image_link>
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
<title><![CDATA[ Eucerin Aquaphor baume réparateur 40G ]]></title>
<g:id>0de3135f-3616-4eca-9d96-4bf12ab96e5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-aquaphor baume réparateur 40g?0de3135f-3616-4eca-9d96-4bf12ab96e5e ]]></link>
<g:price><![CDATA[ 870.00 EUR ]]></g:price>
<description><![CDATA[ <p>Baume réparateur cutané multifonctionnel. La crème est apaisante, régénérante, hydratante, protectrice et cicatrisante. </p>
<p>Le baume protecteur pour la peau Aquaphor d’Eucerin apaise et protège la peau et les lèvres sèches, irritées et endommagées en créant une barrière protective pour aider à sceller l’hydratation.</p>
<p>Avantages:</p>
<p>- Protège temporairement les écorchures et les brûlures superficielles.</p>
<p>- Assez doux pour être utilisé sur les bébés.</p>
<p>- Sans préservateu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800019876</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/29d07d89b6f6a20d424d53bbf4137951ab106dce6fbef71152460ed1a50d4ea7 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Aquaporin Active Soin Hydratant Peau Sèche 50 ml ]]></title>
<g:id>0b13ff53-0594-4009-b712-c5c603817d77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-aquaporin active soin hydratant peau sèche 50 ml?0b13ff53-0594-4009-b712-c5c603817d77 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Aquaporin Active Soin Hydratant Peau Sèche 50 ml est idéal pour les peaux sensibles déshydratées qui tiraillent.<br /><br />La formule innovante de ce soin à base de gluco-glycérol, un actif naturel, favorise l'activation des réseaux naturels d'hydratation, les aquaporines. Elles stimulent la circulation des molécules d'eau à travers les cellules et restaurent de l'intérieur l'équilibre naturel d'hydratation de la peau.<br /><br />Résultats : la peau est hydratée durablement (pendant  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800128011</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a14e8b66d519a513b31c07a1116eb16f2046393b0ac9236771830a136b65a43c ]]></g:image_link>
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
<title><![CDATA[ Eucerin Aquaporin Active soin hydratant peau normale à mixte 50ml ]]></title>
<g:id>9e8bf246-6263-41ee-8b7a-e2b55d2f4250</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-aquaporin active soin hydratant peau normale à mixte 50ml?9e8bf246-6263-41ee-8b7a-e2b55d2f4250 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <h3>Soin hydratant visage peau normale à peau mixte</h3>
<p>Eucerin AQUAporin Active Soin Hydratant Peau normale à mixte est un soin hydratant pour le visage rafraichissant qui améliore le système naturel d'hydratation de la peau et la rend souple, douce et rayonnante.</p>
<p>Notre peau a besoin d'eau pour fonctionner efficacement.</p>
<p>Une peau bien hydratée est douce, souple et rayonnante.</p>
<p>Lorsque la barrière de protection naturelle de la peau est altérée, cette dernière s'assèche et  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800127397</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0427a8e336e9644d142bc318b4142494522dc1f7bbc2667eb18fc418fd33f8c8 ]]></g:image_link>
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
<title><![CDATA[ Eucerin AtopiControl Baume Tube 400 ml ]]></title>
<g:id>cb31e902-9703-47da-b089-f0ca40623688</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-atopicontrol baume tube 400 ml?cb31e902-9703-47da-b089-f0ca40623688 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin AtopiControl Baume Tube 400 ml est un baume à absorption rapide, non collant, non gras qui apaise les sensations de démangeaisons et les irritations. La formule agréable contient de l'extrait de racine de réglisse (contenant de la Licochalcone A apaisante), des lipides (Acides Gras Omégas 3 &amp; 6 et Céramides) et du Beurre de Karité bienfaisant pour renforcer la barrière cutanée et apaiser les sensations de démangeaisons et d'irritations cutanées.</p><p>Ce soin procure une hydratati ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900791047</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/939ccc51b22de7844e0e95a4d2dacb1dd401745140c25075b1b95f35beb35b7a ]]></g:image_link>
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
<title><![CDATA[ Eucerin AtopiControl Huile Bain et Douche 400 ml ]]></title>
<g:id>2c532b66-9140-4620-970a-66fa67079280</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-atopicontrol huile bain et douche 400 ml?2c532b66-9140-4620-970a-66fa67079280 ]]></link>
<g:price><![CDATA[ 1440.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p>Eucerin AtopiControl Huile Bain et Douche 400 ml est une huile de bain et de douche qui préserve la barrière cutanée et protège des sensations de démangeaisons. La formule douce, sans savon, à base d'huiles, contient une haute concentration de lipides (Acides Gras Omégas 3 &amp; 6), pour préserver la barrière cutanée et protéger la peau contre un dessèchement accéléré.</p>
<p>Résultats : La peau est nettoyée en douceur et apaisée. Aide à préserver la barrière cutanée et protège des se ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800213861</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ffd3ddaa4baa0d66acae3036ae0dbaa3ab4df5f3d8d72c15fa37fbee38d37d1b ]]></g:image_link>
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
<title><![CDATA[ Eucerin Dermo Purifyer Gommage 100ml ]]></title>
<g:id>0323a77f-a1d1-4541-b637-72aa72a06240</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermo purifyer gommage 100ml?0323a77f-a1d1-4541-b637-72aa72a06240 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gommage Dermo Purifyer des laboratoires Eucerin?? est un soin qui élimine efficacement et en douceur l'exces de sebum tout en débarrassant la peau des impuretés et du maquillage.</p>
<p>Le Gommage Dermo Purifyer des laboratoires Eucerin est idéal pour les peaux grasses et/ou à tendance acnéique.</p>
<p>En effet, il matifie instantanément votre peau. Le Gommage Dermo Purifyer des laboratoires Eucerin réduite sensiblement les points noirs et imperfections de votre visage ou de votre corps.</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800062452</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e4289e6f882d49f83b337d2863188a68f21ab98b2c4d77e0e0b8f84c1e9c371 ]]></g:image_link>
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
<title><![CDATA[ Eucerin DermoCapillaire Shampoing Haute Tolérance 250 ml ]]></title>
<g:id>0863bd1e-6784-400b-b3ef-5d39a264ab42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermocapillaire shampoing haute tolérance 250 ml?0863bd1e-6784-400b-b3ef-5d39a264ab42 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin DermoCapillaire Shampooing Haute Tolérance 250 ml améliore le cuir chevelu :</p>
<p>- Il nettoie en douceur le cuir chevelu et les cheveux.</p>
<p>- Il contient du Bisabolol apaisant.</p>
<p>- Il soulage les sensations de démangeaison.</p>
<p>- Il diminue les sensations de tiraillements et d'échauffements du cuir chevelu et soulage l'irritation.</p>
<p>Sa formule extra douce qui prévient le cuir chevelu du dessèchement convient au cuir chevelu hypersensible et à problèmes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800037184</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9351a0591c978e62fe4f872633da213fa94eef5638d845dc59d3377a0e3c3b49 ]]></g:image_link>
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
<title><![CDATA[ Eucerin DermoPure Crème corps Triple Action ]]></title>
<g:id>ae353490-173f-42d8-a803-594ea638438d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermopure crème corps triple action?ae353490-173f-42d8-a803-594ea638438d ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <strong>crème corps triple action Dermopure</strong> est idéale pour les personnes souhaitant obtenir une <strong>peau hydratée et sans imperfections</strong>.</p><p>Sa formule innovante, multi-action et non-comédogène répond efficacement aux besoins des <strong>peaux sujettes à l'acné corporelle</strong>. Même une peau grasse peut souffrir de déshydratation, et il est crucial de lui apporter l'hydratation nécessaire, surtout si vous avez des imperfections sur le corps (boutons dans le dos ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800343162</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30756e427b0699127d3b5e44fbd9fde66db9a2bee8a2c79c367bc78bc5e6ba73 ]]></g:image_link>
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
<title><![CDATA[ Eucerin DermoPure Sérum Triple Action 40 ml ]]></title>
<g:id>8a8be391-4047-42f8-a566-aa96ca3648d7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermopure sérum triple action 40 ml?8a8be391-4047-42f8-a566-aa96ca3648d7 ]]></link>
<g:price><![CDATA[ 1550.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>Sérum Triple Action DermoPure</span><span> des Laboratoires dermatologiques </span><span>Eucerin </span><span>est permet de traiter les imperfections, les marques résiduelles et de réduire les brillances grâce à sa formule à base de Thiamidol breveté visible dès 2 semaines. </span></p>
<ul><li>Le <span>Thiamidol breveté </span>possède une action sur l'hyperpigmentation post-inflammatoire et prévient leur apparition. Le Thiamidol permet d'inhiber la production de mélanine ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800295003</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/948ecbcd2feac4650adfe9a7727f1886effe8276d0286db032c492ae227fae71 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Dermopure Gel Nettoyant Triple Action 400ml ]]></title>
<g:id>9d81a5ec-115d-4cf3-9754-f57fc0cec18a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermopure gel nettoyant triple action 400ml?9d81a5ec-115d-4cf3-9754-f57fc0cec18a ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gel Nettoyant Triple Action est spécialement formulé pour réduire les marques post-acné. 1. Anti-imperfections : 2% d'Acide Salicylique anti-bactérien pour réduire les imperfections et désobstruer les pores. 2. Anti-marques : Complexe exfoliant d'acides AHA/BHA/PHA pour aider à éliminer les cellules mortes et à réduire les marques d'hyperpigmentation post-inflammatoire. 3. Anti-brillance : Nettoie pour éliminer l'excès de sébum, les impuretés, et le maquillage. La formule est non comédogèn ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800342813</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69f940da12ba08698b2fa94f92a7c56572c2e6d4cb6411e45503e01934e5a232 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Duo Sun Oil Control transparent SPF 50 +  Après-soleil Offert ]]></title>
<g:id>c2a95115-b339-4100-8d0f-032c86cc43d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-duo sun oil control transparent spf 50 +  après-soleil offert?c2a95115-b339-4100-8d0f-032c86cc43d6 ]]></link>
<g:price><![CDATA[ 1660.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>SUN OIL CONTROL Spray Transparent SPF 50 - 200ml</span><br />Ce spray solaire offre une excellente protection solaire sans laisser de traces visibles sur la peau. Pour les peaux normales ou grasses. Cette formule en spray est 100 % transparente, non collante et non grasse, et elle pénètre rapidement. Résistant à l'eau.</p>
<p><span>AFTER SUN SENSITIVE RELIEF Gel-Crème - 50ml OFFERT</span><br />Le soin Crème-Gel After Sun Sensitive Relief apaise et adoucit immédiatement la peau. Convient ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900936967</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f61aad8eedfee5dbf168ff7862793b1c3e9922c88f755d5344203b072cb0659 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron Filler +3 x effect sérum perfecteur de peau 30 ml ]]></title>
<g:id>01005ec8-f098-4897-a73f-96f49ef248cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler +3 x effect sérum perfecteur de peau 30 ml?01005ec8-f098-4897-a73f-96f49ef248cc ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Attaquez les premiers signes du vieillissement et affinez vos pores avec le nouveau Sérum Perfecteur de Peau HYALURON-FILLER + 3x EFFECT Eucerin. Ce sérum ultra-léger contient trois actifs clés dont l'Acide Hyaluronique, l'Acide Glycolique et l'Acide Lactique pour rendre votre peau lisse et soyeuse. La formule contient des anti-oxydants pour protéger la peau contre les radicaux libres et les dommages causés par les agressions extérieures.<br /><br />Dans une étude, 97% des personnes interrogé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800276767</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/90e2415dfdf35e2646e2c74143e6334aa637e2a8d22005734640c8c7b12a1f04 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron Filler +3*Effect Nuit ]]></title>
<g:id>f8cf3d4c-1ce7-411b-b847-cccf0bc34a5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler +3*effect nuit?f8cf3d4c-1ce7-411b-b847-cccf0bc34a5e ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Soin de Nuit HYALURON-FILLER + 3x EFFECT aide à ralentir la baisse de production naturelle d'Acide Hyaluronique de la peau pendant la nuit. Sa formule aux triple bénéfices :</p>
<p>1. Comble : la peau est hydratée et les rides comblées grâce à l'Acide Hyaluronique de haut et bas poids moléculaire.<br />2. Stimule : la production naturelle d'Acide Hyaluronique est stimulée grâce la Saponine.<br />3. Protège : le taux de dégradation de l'Acide Hyaluronique est diminué grâce à l'Enoxolone.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294808</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28c1d1ae29d80bdf75a934a0adb3c69403d0b75c666a2c3b8ece5dbb2b8252a8 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron Filler 3x effect masque intensif à l'acide hyaluronique ]]></title>
<g:id>356003c6-ffa2-40a1-abc4-02ef1f6f0cbd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler 3x effect masque intensif à l'acide hyaluronique?356003c6-ffa2-40a1-abc4-02ef1f6f0cbd ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>En seulement 5 minutes, ce masque innovant pour le visage hydrate la peau et atténue les ridules.</span><br /><br /><span>Le Masque Intensif à l'Acide Hyaluronique HYALURON-FILLER + 3x EFFECT est imbibé du mélange d'Acide Hyaluronique de haut et bas poids moléculaire. L'</span><a href="https://www.eucerin.fr/la-recherche-eucerin/base-de-donnees-des-ingredients/hyaluronic-acid">Acide Hyaluronique</a><span> de haut poids moléculaire aide à améliorer l'hydratation et lisse les ridules des  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294860</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a8b9ae6db8c8c692dd59e1d1abcd5c79c6f73fd2b55b9a10cf5c16018f08b7a ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron Filler 3x effect soin de nuit booster hydratation 50 ml ]]></title>
<g:id>18aef604-16ac-49b3-9ee5-38b5e2bcef23</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler 3x effect soin de nuit booster hydratation 50 ml?18aef604-16ac-49b3-9ee5-38b5e2bcef23 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Soin de Nuit Booster d'Hydratation HYALURON-FILLER + 3x EFFECT procure une peau à l’apparence fraîche, saine, moins fatiguée et qui semble plus résistante au toucher.</span><br /><span>Ce Soin de Nuit Gel-Crème à la texture ultra légère offre une hydratation intense, repulpe </span><a href="https://www.eucerin.fr/la-recherche-eucerin/la-demarche-scientifique/eucerin-hyaluron-filler">les ridules et les premières rides</a><span>, et régénère activement la peau pendant la nuit.</span><b ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800310102</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ca072ca53242948657641a5eee2e73da70a79736b14c213bd8a7377afb48f8f ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron Filler Elasticity Crème Corps  200Ml ]]></title>
<g:id>b4b333f3-9d71-4fc3-ad93-44d9721c667a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler elasticity crème corps  200ml?b4b333f3-9d71-4fc3-ad93-44d9721c667a ]]></link>
<g:price><![CDATA[ 2560.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Crème Corps Anti-Age et Anti-Taches Hyaluron-Filler + Elasticity Eucerin réduit les taches brunes liées à l'âge, améliore l'élasticité de la peau et redensifie la peau grâce à sa triple action anti-âge :<br />• Plus d'élasticité et de fermeté : L'Arctiine , ingrédient ultra efficace, améliore l'élasticité de la peau<br />• Plus d'éclat : la formule au Thiamidol breveté* réduit de façon visible l'apparence des taches brunes liées à l'âge. La peau<br />paraît unifiée et plus jeune.<br />• Un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800328756</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/68c28fb5c266648a342d18b653a9c45ea4ef0a22978370d02d4e7c7c6e4ffc16 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron Filler Elasticity crème mains anti-tâches & anti-âge spf 30 75 ml ]]></title>
<g:id>dbe5c636-4a0c-4797-bea2-acc9b0e133fc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler elasticity crème mains anti-tâches & anti-âge spf 30 75 ml?dbe5c636-4a0c-4797-bea2-acc9b0e133fc ]]></link>
<g:price><![CDATA[ 1380.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Crème Mains Anti-Taches et Anti-Âge SPF 30 Hyaluron-Filler + Elasticity réduit les taches brunes liées à l'âge et prévient leur réapparition grâce à un usage régulier. Rapidement absorbée, la Crème Mains améliore la fermeté et l'élasticité de la peau. Pour des mains à l'apparence plus jeune. La protection SPF 30 offre une protection complémentaire contre les signes de l'âge induits par le soleil. Premiers résultats dès 2 semaines**. <em>Thiamidol breveté (EP 2 758 381 B1) FR, BE, NL. </em> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800287510</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df91e1c5b508704818b4e71452aa9acb2f2c82b14253f4bdcc36ef10be56f900 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique > CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Eucerin Hyaluron Filler volume yeux 15ml ]]></title>
<g:id>b2a49ecf-bc09-47e5-acb5-b66a2de1652c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler volume yeux 15ml?b2a49ecf-bc09-47e5-acb5-b66a2de1652c ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>EUCERIN VOLUME-FILLER Contour des Yeux agit sur les plis et le relâchement de la peau causés par la perte de volume cutané et exerce une action ciblée sur la zone sensible du contour de l'œil. Avec ses trois ingrédients actifs complémentaires, ce soin cliniquement testé contribue à redéfinir le contour de l'œil.</p>
<p>Actif naturel, le Magnolol augmente la taille et le nombre de cellules responsables du volume cutané.<br />D'autre part, les Oligo Peptides, extraits de l'anis, renforcent le r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900467379</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d72075d29862f0f915a2e6908ff1fee7c1d1526c1edb6f0136e873576a3266d6 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron filler 3x effect sérum vitamine C booster 8 ml ]]></title>
<g:id>7e9f2b9a-99ad-4865-a1c8-a01d4a3df26c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler 3x effect sérum vitamine c booster 8 ml?7e9f2b9a-99ad-4865-a1c8-a01d4a3df26c ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p class="hdl-3">Sérum Vitamine C Booster</p>
<div class="text">
<p>Le soleil, la pollution, le tabac et d’autres aspects de notre mode de vie génèrent la formation de radicaux libres. Les radicaux libres provoquent à la peau du stress oxydatif, accélèrent le <a href="https://www.eucerin.fr/votre-peau/signes-de-lage-et-vieillissement-cutane/vieillissement-premature">vieillissement prématuré de la peau</a> et ternissent la peau. EUCERIN HYALURON-FILLER + 3x EFFECT SÉRUM VITAMINE C BOOSTER, qui co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294914</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0406b8d5b49eb57f21fc400c730ea480432084d54cc5ecb19ebcf83e947a2793 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + 3x Effect Recharge Anti Age Soin de Jour 50ml ]]></title>
<g:id>bc6758c7-1fe5-41c1-8057-28b9df6ef526</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + 3x effect recharge anti age soin de jour 50ml?bc6758c7-1fe5-41c1-8057-28b9df6ef526 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Soin de Jour Peau sèche SPF 15 HYALURON-FILLER + 3x EFFECT aide à ralentir la baisse de production naturelle d'Acide Hyaluronique de la peau.<br><br>Sa formule aux triple bénéfice :<br><br>1. Comble : la peau est hydratée et les rides comblées grâce à l'Acide Hyaluronique de haut et bas poids moléculaire.<br>2. Stimule : la production naturelle d'Acide Hyaluronique est stimulée grâce la Saponine.<br>3. Protège : le taux de dégradation de l'Acide Hyaluronique est diminué grâce à l'Enoxolone ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900990297</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a344d36f5c93df2f59280731e6ed56b02755940ed4cde061536602a3a337a496 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + 3x Effect Soin de Nuit Recharge 50 ml ]]></title>
<g:id>aefa508d-bdab-43ca-9abc-47009f23a687</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + 3x effect soin de nuit recharge 50 ml?aefa508d-bdab-43ca-9abc-47009f23a687 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Hyaluron-Filler + 3x Effect Soin de Nuit Recharge 50 ml est un soin de nuit anti-âge qui convient à tous les types de peau.<br>Sa formule au [Hyal] Complex lutte contre l'apparition des rides et le vieillissement cutané, elle :</p><ul><li><p>Comble : l'acide hyaluronique de haut et bas poids moléculaire hydrate la peau et comble les rides.</p></li><li><p>Stimule : la saponine stimule la production naturelle d'acide hyaluronique.</p></li><li><p>Protège : l'enoxolone diminue le taux de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900990303</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62f63bf5a17fd807f975bd4fd544ededadd9dcf8ca68b4aeec67a0182beb215e ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + Elasticity Sérum 3D 30 ml ]]></title>
<g:id>bbe7f700-936e-4477-bf42-ecfb3e0c3d96</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + elasticity sérum 3d 30 ml?bbe7f700-936e-4477-bf42-ecfb3e0c3d96 ]]></link>
<g:price><![CDATA[ 4350.00 EUR ]]></g:price>
<description><![CDATA[ <div class="titre_zone_desc">DESCRIPTION</div>
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Eucerin Hyaluron-Filler + Elasticity 3D Sérum 30 ml est un soin à triple effet anti-âge :</p>
<ul><li>moins de rides : cette formule associe l'Acide hyaluronique de haut et bas poids moléculaire et comble visiblement les rides profondes ;</li>
<li>plus d'élasticité : l'Arctiine accélère le processus de renouvellement du collagène dans les cellules cutanées ;</li>
<li>réduit ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800271137</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8abdd838b12ff1decab909c0d56b1af704aef7b20658e8b8de94b09c73ffdb56 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + Elasticity soin contour des yeux SPF20 - 15ml ]]></title>
<g:id>9d100eaa-6534-44ad-8a35-96548f94f18b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + elasticity soin contour des yeux spf20 - 15ml?9d100eaa-6534-44ad-8a35-96548f94f18b ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <h3>Crème contour des yeux anti-âge pour peaux matures</h3>
<p>Contour des Yeux pour les peaux matures avec une protection UVA et UVB et de l'Acide Hyaluronique.</p>
<p>Sa formule innovante contient le complexe Collagène-Élastine pour améliorer l'élasticité de la peau.</p>
<p>Ce soin est conçu pour réduire les signes avancés de l'âge et repulper visiblement les rides profondes pour un regard qui paraît frais et éclatant.</p>
<h3>Contour des Yeux pour les peaux matures</h3>
<p>Le Contour des Yeux ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800313608</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53ee5793facd8e83dbad36927ef63262d6f571f1f0671838658180b06a722495 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + Elasticity soin de jour SPF15 - 50ml ]]></title>
<g:id>e62938be-005d-45f4-93dd-fcab273b659d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + elasticity soin de jour spf15 - 50ml?e62938be-005d-45f4-93dd-fcab273b659d ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Réduit visiblement l'apparence des taches brunes liées à l'âge</li>
<li>Rebooste la production de collagène et améliore l'elasticité de la peau</li>
<li>Comble les rides même profondes</li>
</ul><p>Soin de Jour anti-âge pour les peaux matures</p>
<p>Une nouvelle formule avec l'actif breveté Thiamidol*, pour réduire l'apparence des taches liées à l'âge, de l'Acide Hyaluronique pour repulper les rides profondes et le complexe Collagène-Élastine pour améliorer l'élasticité de la peau.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800313547</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a302df61f14700701cb55d1ce5be74649239af8849691f081a755c8f1b47770a ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + Elasticity soin de jour SPF30 - 50ml ]]></title>
<g:id>e430e0c4-85d2-49f3-ad06-bfb973bb89b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + elasticity soin de jour spf30 - 50ml?e430e0c4-85d2-49f3-ad06-bfb973bb89b5 ]]></link>
<g:price><![CDATA[ 4090.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Réduit visiblement l'apparence des taches brunes liées à l'âge</li>
<li>Rebooste la production de collagène et améliore l'elasticité de la peau</li>
<li>Comble les rides même profondes</li>
</ul><p>Soin de Jour anti-âge pour les peaux matures</p>
<p>Une nouvelle formule avec l'actif breveté Thiamidol*, pour réduire l'apparence des taches liées à l'âge, de l'Acide Hyaluronique pour repulper les rides profondes et le complexe Collagène-Élastine pour améliorer l'élasticité de la peau.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800313639</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da1e5572b6f2dece5d83fc32cec6231551db12acf0843a4f3a89ad545a3bb058 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler + Elasticity soin de nuit 50ml ]]></title>
<g:id>136c57bb-75d7-4010-a82b-847de53ade32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler + elasticity soin de nuit 50ml?136c57bb-75d7-4010-a82b-847de53ade32 ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <h3>Soin de Nuit Anti-Âge pour les peaux matures</h3>
<p>Le Soin de Nuit HYALURON-FILLER + ELASTICITY d'Eucerin est une crème anti-âge qui comble les rides profondes, améliore l'élasticité de la peau et réduit les taches liées à l'âge.</p>
<p>La formule innovante offre des bénéfices anti-âge multiples. Le mélange d'Acide Hyaluronique de haut et bas poids moléculaire repulpe visiblement les rides profondes de l'épiderme, tandis que le Dexpanthenol aide la peau à se regénérer pendant la nuit.</p>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800313578</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/48df51f5491b30c4788d6e4bc011bbd22d26c86bc3bb0dba750d1a0dfb5f3e04 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler +3*Effect Serum 30ml ]]></title>
<g:id>a96cdcb5-9bc0-4afe-a6c0-06e81849c190</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler +3*effect serum 30ml?a96cdcb5-9bc0-4afe-a6c0-06e81849c190 ]]></link>
<g:price><![CDATA[ 2160.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette formule gel ultra-légère et rafraîchissante, enrichie de deux types d’acide hyaluronique fortement concentrés et de glycérine, repulpe la peau grâce à une hydratation immédiate et intense.</p>
<ul><li>Effet immédiat : sensation de fraîcheur sur la peau et une hydratation jusqu’à 24 heures.</li>
<li>Convient à tous les types de peau, y compris les peaux sensibles.</li>
<li>Excellente base de maquillage.</li>
<li>Non comédogène.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294884</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6052e03ac6f2c0cea9d11032abf9fec68d967ba147a6616e77a7ccce306d4bce ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler +3*Effect Soin de Jour Peaux Seches Spf 15 50ml ]]></title>
<g:id>0638aace-4b21-4314-bbeb-76463c03c145</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler +3*effect soin de jour peaux seches spf 15 50ml?0638aace-4b21-4314-bbeb-76463c03c145 ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Soin de Jour Peau sèche SPF 15 HYALURON-FILLER + 3x EFFECT</span> aide à ralentir la baisse de production naturelle d'Acide Hyaluronique de la peau.<br /><br />Sa formule aux triple bénéfice :</p>
<p>1. <span>Comble</span> : la peau est hydratée et les rides comblées grâce à l'Acide Hyaluronique de haut et bas poids moléculaire.<br />2. <span>Stimule</span> : la production naturelle d'Acide Hyaluronique est stimulée grâce la Saponine.<br />3. <span>Protège</span> : le taux de dégrada ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294747</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0360ba2449afa00d2ecf104bf4229aef8a60b93d49b575fe61773b12807fce64 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler +3x Effect Soin Contour des Yeux Anti-Rides SPF15 15ml ]]></title>
<g:id>82c12ee9-839d-41ef-a648-86d2423fd108</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler +3x effect soin contour des yeux anti-rides spf15 15ml?82c12ee9-839d-41ef-a648-86d2423fd108 ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Eucerin Hyaluron-Filler +3x Effect Soin Contour des Yeux Anti-Rides SPF15 15ml</span> Lutte contre le processus de vieillissement cutané, pour une peau à l’apparence visiblement plus jeune, plus lisse et éclatante.</p>
<p>Ses + :</p>
<ol><li>Comble</li>
<li>Stimule</li>
<li>Protège</li>
</ol> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294839</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e39a3bef29cd10b2d0257817a47eaa7a941d519e6d8d44400291e023d60c226 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler Sérum Épigénétique 30 ml ]]></title>
<g:id>a7a80e22-ef2d-4798-809b-5841e49afb2e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler sérum Épigénétique 30 ml?a7a80e22-ef2d-4798-809b-5841e49afb2e ]]></link>
<g:price><![CDATA[ 4690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Hyaluron-Filler Sérum Épigénétique 30 ml est un sérum qui réduit les signes de l'âge.</p>
<p>Grâce à sa technologie Age Clock, ce produit cible les signes de l'âge en réactivant les gènes cutanés pour restaurer leur fonction naturelle, en se basant sur l'âge réel de la peau.</p>
<p>Il améliore la fermeté, la douceur, l'hydratation et l'éclat de la peau, tout en lui conférant un aspect reposé.<br />Cette technologie réduit visiblement les rides et ridules, affine le grain de peau, amél ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800342844</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4dab92b84627529adcb62a3865f43f78122b553584de9ec078270c7d826d5486 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Hyaluron-Filler X3 Crème De Jour SPF30 ]]></title>
<g:id>eac3b2c6-94de-45f1-b3ce-ea50e5b09248</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler x3 crème de jour spf30?eac3b2c6-94de-45f1-b3ce-ea50e5b09248 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Soin de Jour Tous types de peau SPF 30 HYALURON-FILLER</span> <span>+ 3x EFFECT</span> aide à ralentir la baisse de production naturelle d'<span>Acide Hyaluronique</span> de la peau. Sa formule aux triple bénéfice :</p>
<p>1. <span>Comble</span> : la peau est hydratée et les rides comblées grâce à l'Acide Hyaluronique de haut et bas poids moléculaire.<br />2. <span>Stimule</span> : la production naturelle d'Acide Hyaluronique est stimulée grâce la Saponine.<br />3. <span>Protège</spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800294945</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d66dad24c79757decbc6fa85df815b896024f93fa455b8e2e73070c4150d6d12 ]]></g:image_link>
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
<title><![CDATA[ Eucerin PH5 Huile Douche 1L ]]></title>
<g:id>474afd05-565c-4f0f-b501-0db96414a7e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-ph5 huile douche 1l?474afd05-565c-4f0f-b501-0db96414a7e1 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile de Douche pH5 vous est proposé par EUCERIN pour faire de votre rituel de bain, un réel moment de plaisir. Hormis le fait de nettoyer en douceur votre corps, cette nouvelle formule légèrement parfumée respecte intégralement la qualité de votre peau.  En plus, vous pouvez l’utiliser même d’une manière fréquente sans risque d’agresser ni d’irriter votre enveloppe cutanée. Contenance : 1000 ml</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800631191</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/987b1e067a18cad014c75b8aadba8df53710c691b590dd0a9759fd5eca02ac64 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Peau Sèche Dermo Purifyer Soin Hydratant Matifiant 50 ml ]]></title>
<g:id>4aeecce0-102e-4f71-9874-2b5f91678ff4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-peau sèche dermo purifyer soin hydratant matifiant 50 ml?4aeecce0-102e-4f71-9874-2b5f91678ff4 ]]></link>
<g:price><![CDATA[ 1470.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product_tabs_description_tabbed_contents" class="product-tabs-content tabs-content">
<div class="std">
<p>Le soin Hydratant Matifiant Dermo Purifyer des laboratoires Eucerin est un soin qui élimine efficacement et en douceur l'exces de sebum tout en débarrassant la peau des impuretés et du maquillage. Le soin Hydratant Matifiant Dermo Purifyer des laboratoires Eucerin est idéal pour les peaux grasses et/ou à tendance acnéique. En effet, il matifie instantanément votre peau. </p>
<div> < ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800016158</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da86de7266d50705cf84c54408bb549639a76d5da8006c7b9eda27348542346a ]]></g:image_link>
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
<title><![CDATA[ Eucerin Sensi-Rides Crème de Jour Peaux Sensibles 50ML ]]></title>
<g:id>d91e606d-8abc-406f-b43b-444f044cf0ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sensi-rides crème de jour peaux sensibles 50ml?d91e606d-8abc-406f-b43b-444f044cf0ca ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Plus nous vieillissons, et plus notre métabolisme ralentit : et notamment au niveau cutané puisque les substances garantissant la fermeté, l'élasticité et la protection de la peau sont en moindre quantité.</p>
<p>Les Laboratoires EUCÉRIN vous proposent la nouvelle formule de la Crème de Jour SENSI-RIDES qui renforce la fermeté, la souplesse et la protection.</p>
<p>Eucerin Sensi-Rides Crème de Jour a été spécialement développé pour améliorer l'apparence de la peau en réduisant la profondeur d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800017193</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/08904f08ca52d0c98d952240eb7ee6b314311a24928323771d4402bb68bf76c0 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Shampooing Urée Calmant 250 ml ]]></title>
<g:id>211815cc-8619-4631-b67c-d260a707d67e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-shampooing urée calmant 250 ml?211815cc-8619-4631-b67c-d260a707d67e ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Dermo Capillaire Shampooing Calmant 250 ml protège le cuir chevelu des sensations de démangeaison et de sécheresse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800036798</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/21fb7e3c7312d9642378824d8394279bc7498df14662e3e1a08aede7d2b5a5e2 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Soin Actif Lèvres Spf 20 2 x 4,8 g  ]]></title>
<g:id>40b9d12b-733c-410f-9b5e-03678379789f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-soin actif lèvres spf 20 2 x 4,8 g ?40b9d12b-733c-410f-9b5e-03678379789f ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce stick à lèvres est à la fois doux et efficace. Il apaise et protège les lèvres sèches et sensibles.</p><p>EUCERIN Soin Actif Lèvres a été conçu pour les lèvres sensibles. Sa formulation à base de dexpanthénol et de vitamine E apaise et hydrate les lèvres tout en les protégeant des agressions quotidiennes par des facteurs externes tels que l'exposition aux UV. Son application régulière hydratera rapidement vos lèvres tout en assurant une protection continue de leur fine couche supérieure. C ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4006000122144</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac5bd432f72680f254e63f78ee04b0b3836d0badc869ac7a67ef3d7414776197 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Sun Hydro Protect SPF50+ fluide ultra-léger 50ml ]]></title>
<g:id>a53c8667-f8e4-48c6-a927-61910c29cd18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun hydro protect spf50+ fluide ultra-léger 50ml?a53c8667-f8e4-48c6-a927-61910c29cd18 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Protection solaire fluide ultra-légère pour le visage, destiné à tous les types de peau, même les plus sensibles.</p>
<p>La lumière UV est la principale cause des dommages cutanés provoqués par le soleil, mais la lumière visible à haute énergie (HEVIS) peut également induire des radicaux libres qui agressent davantage la peau.</p>
<p>Le Fluide Ultra-Léger SPF 50+ SUN HYDRO PROTECT protège des dommages cutanés induits par le soleil et par la lumière visible de haute énergie (HEVIS) grâce aux f ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800320712</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b91dc4d16e2f6d9f924a5ceb5f316c29a81c3424543e357185fe3817d6c8ce03 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Sun Pigment control teinté Medium SPF 50+ ]]></title>
<g:id>cd24b45a-91ca-4e48-849b-3b46bb9bdd03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun pigment control teinté medium spf 50+?cd24b45a-91ca-4e48-849b-3b46bb9bdd03 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description">Prévient, réduit et couvre efficacement le taches brunes dues au soleil<span>Eucerin Sun Pigment control teinté SPF 50+</span><span> est une </span><span>protection solaire anti-taches pigmentaires</span><span> adaptée à </span><span>tous les types de peaux</span><span>. Grâce à sa très bonne tolérance cutanée, elle peut être utilisée sur les </span><span>peaux sensibles</span><span>. </span><br /><br /><span>L'exposition au soleil a des avantages mais présente aussi des ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800300783</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d6323105bfc73d0ae0c8b638c3f6970c339a3fd2e17c0b5dab62b2f3636304ee ]]></g:image_link>
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
<title><![CDATA[ Eucerin Sun Protection Oil control gel crème teinté SPF 50+ 50 ml ]]></title>
<g:id>34fe1cda-5693-4b15-a0ff-d055cd7f2ec4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection oil control gel crème teinté spf 50+ 50 ml?34fe1cda-5693-4b15-a0ff-d055cd7f2ec4 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Sun Protection Oil control SPF 50+ teinté est une protection solaire adaptée aux peaux à imperfections. Elle a une double action : elle protège la peau des UV et elle couvre ses irrégularités et imperfections. Elle laisse un fini non gras et non brillant et elle est agréable à appliquer grâce à sa texture non grasse ultra-légère, qui pénètre la peau rapidement.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800361180</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a27cd2c569430e10bc3b892cf6ecba8d3fb527c6b1f88e36aac41fc638cdea75 ]]></g:image_link>
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
<title><![CDATA[ Eucerin Sun Protection Sensitive Protect Sun Spray SPF50+ 200 ml + Relief Gel-Crème Après-Soleil 50 ml Offert ]]></title>
<g:id>d40bb15a-85ff-4045-88cb-42250e1533f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection sensitive protect sun spray spf50+ 200 ml + relief gel-crème après-soleil 50 ml offert?d40bb15a-85ff-4045-88cb-42250e1533f3 ]]></link>
<g:price><![CDATA[ 1660.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Sun Protection Sensitive Protect Sun Spray SPF50+ 200 ml + Relief Gel-Crème Après-Soleil 50 ml Offert est un duo de soins solaire visage et corps, pendant et après exposition :</p><p>- Eucerin Sun Protection Sensitive Protect Sun Spray SPF50+ 200 ml est une très haute protection solaire résistante à l'eau. Elle est élaborée pour protéger et apaiser la peau sensible des dommages cutanés induits par le soleil.<br>Sa formule contient l'Advanced Spectral Technology : une combinaison de fi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900936950</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad329179cd8cc6f49357e3345b4d9697cb043ced856826044536a8cdd57610ad ]]></g:image_link>
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
<title><![CDATA[ Eucerin Urea repair 5% crème émolliente 400 ml ]]></title>
<g:id>061ff7f0-f931-4eea-a04e-ba072e3461c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-urea repair 5% crème émolliente 400 ml?061ff7f0-f931-4eea-a04e-ba072e3461c9 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La barrière naturelle de la peau nous protège des agressions extérieures et permet de maintenir un niveau d'hydratation optimal lorsqu'elle fonctionne normalement. Mais lorsque cette barrière est altérée, la peau peut se déshydrater, sembler sèche et donner des sensations de tiraillement. </span><br /><br /><span>UreaRepair PLUS Emollient 5% d’Urée Parfumé apporte les soins quotidiens nécessaires aux peaux sèches et rugueuses. Sa combinaison unique d'ingrédients (</span><a href="https:/ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900924599</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc0815270e304d97c2f76f1c56260a626452e43dd20844b7a9cab13e289d78e5 ]]></g:image_link>
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
<title><![CDATA[ Eucerin UreaRepair  5% d'Urée  Apaisant 250 ml ]]></title>
<g:id>dd8e20e7-f316-4348-9cba-9da33e92c890</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-urearepair  5% d'urée  apaisant 250 ml?dd8e20e7-f316-4348-9cba-9da33e92c890 ]]></link>
<g:price><![CDATA[ 1380.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin UreaRepair PLUS Émollient 5% d'Urée Parfum Apaisant 250 ml est un émollient pour apaiser immédiatement les signes de sécheresse cutanée en retardant leur apparition.<br />Sa formule contient :</p>
<ul><li>des lipides, comme les céramides, qui renforcent le pouvoir protecteur de la barrière hydrolipidique et limite la perte invisible en eau ;</li>
<li>de l'urée et des NMF (Natural Moisturizing Factors) qui améliorent les capacités de fixation de l'eau dans l'épiderme et donc le niveau  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800277832</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ecf0ed97ad91ef3c3eadca51142056fc6e30519affe2cfbe59156b31e48a3999 ]]></g:image_link>
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
<title><![CDATA[ Eucerin UreaRepair PLUS Crème 30% Urée 75 ml ]]></title>
<g:id>1552852e-5fa0-4bc0-ad46-b62636f99fb0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-urearepair plus crème 30% urée 75 ml?1552852e-5fa0-4bc0-ad46-b62636f99fb0 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin UreaRepair PLUS Crème 30% Urée 75 ml est une crème d'application locale, avec 30% d'urée, qui adoucit les zones cutanées rugueuses, sèches et squameuses.</p>
<p>Cette crème est particulièrement recommandée au niveau des coudes, des pieds, des mains, des genoux, des zones sèches, rugueuses, épaisses ou squameuses.</p>
<p>Sa formule contient une combinaison d'actifs uniques :</p>
<p>- 30% d'urée concentrée qui exfolie en douceur,</p>
<p>- des NMF Natural Moisturizing Factor qui hydraten ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800220203</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ace41a16fe91d29530fa89ce3de153672ee2652bac840e834089a26b59fd985 ]]></g:image_link>
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
<title><![CDATA[ Eucerin UreaRepair Plus Mousse pieds 10% d'urée ]]></title>
<g:id>497a2c5b-69d7-4c63-950a-f33233d520c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-urearepair plus mousse pieds 10% d'urée?497a2c5b-69d7-4c63-950a-f33233d520c5 ]]></link>
<g:price><![CDATA[ 880.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Eucerin UreaRepair Plus Mousse pieds 10% d'urée</span><span> est spécialement conçue pour </span><span>hydrater intensément la peau des pieds </span><span>et offrir </span><span>48 h d'apaisement</span><span>. Elle agit très rapidement et elle est absorbée rapidement. </span><br /><br /><span>La </span><span>peau sèche</span><span> est source d’inconfort. Elle suscite des tiraillements et elle devient rugueuse. Des gerçures peuvent apparaître. Les pieds sont particulièrement sensibles à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800288296</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73a204688844b0891b1a0ed9824e7f06cad90e6aaf493eee150e6be76164349c ]]></g:image_link>
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
<title><![CDATA[ Eucerin anti-pigment soin de jour spf30 50ml ]]></title>
<g:id>195f65be-ed83-42ea-80a5-65ccce09857f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti-pigment soin de jour spf30 50ml?195f65be-ed83-42ea-80a5-65ccce09857f ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>La mélanine est un pigment naturel qui donne de la couleur à la peau. l’exposition à la lumière du soleil, les influences hormonales et le vieillissement peuvent entraîner une augmentation de la production de mélanine et déclencher une hyperpigmentation. l'hyperpigmentation apparaît sous forme de taches foncées et de taches de vieillesse (également appelées taches de soleil) qui donnent à la peau une apparence inégale.</p>
<p>Eucerin anti-pigment soin de jour spf 30 contient du thiamidol, un  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800213014</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85de6f9c06fdd855fc25134673aff964f2d6516d9b9008bceb1131ade8be778b ]]></g:image_link>
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
<title><![CDATA[ Eucerin anti-pigment soin de nuit 50ml ]]></title>
<g:id>834bae6b-897c-49a0-93da-31950a0333ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti-pigment soin de nuit 50ml?834bae6b-897c-49a0-93da-31950a0333ac ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>La mélanine est un pigment naturel qui donne de la couleur à la peau. L’exposition à la lumière du soleil, aux influences hormonales et au vieillissement peuvent entraîner une augmentation de la production de mélanine et déclencher une hyperpigmentation. L'hyperpigmentation apparaît sous forme de taches foncées et de taches de vieillesse (également appelées taches de soleil) qui donnent à la peau une apparence inhomogène.</p>
<p>Eucerin anti-pigment soin de nuit contient du thiamidol, un ingr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800213052</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c54d137fc35a2e235df9d3bf49745f007aaa2aa3047c8814438e1371ef2904ae ]]></g:image_link>
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
<title><![CDATA[ Eucerin anti-pigment sérum duo 30ml ]]></title>
<g:id>45706ec0-7078-4b26-8ec1-2fa3c88388e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-anti-pigment sérum duo 30ml?45706ec0-7078-4b26-8ec1-2fa3c88388e2 ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p>La mélanine est un pigment naturel qui donne de la couleur à la peau. l’exposition à la lumière du soleil, les influences hormonales et le vieillissement peuvent entraîner une augmentation de la production de mélanine et déclencher une hyperpigmentation. l'hyperpigmentation apparaît sous forme de taches foncées et de taches de vieillesse (également appelées taches de soleil) qui donnent à la peau une apparence inégale.</p>
<p>Eucerin anti-pigment sérum duo réunit deux sérums qui fonctionnent  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800210617</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/233778de264336e1617c5d2c1943b07f54aac9ca3921492654df5ee2dda2c306 ]]></g:image_link>
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
<title><![CDATA[ Eucerin aquaphor baume réparateur 198g ]]></title>
<g:id>e1ce36ef-a66a-4097-8c91-37d81f6e29b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-aquaphor baume réparateur 198g?e1ce36ef-a66a-4097-8c91-37d81f6e29b5 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Accélère la régénération cutanée</strong></p>
<p>Une formule sans eau qui répare, protège et apaise la peau sèche à très sèche, craquelée et irritée. Aquaphor crée la barrière protectrice idéale pour soutenir la régénération cutanée.</p>
<p>Notre peau travaille dur pour protéger notre corps, mais elle peut par conséquent devenir parfois très sèche, craquelée et irritée. Elle a besoin d'un soin SOS.</p>
<p>Eucerin Aquaphor Baume Réparateur apporte à la peau sèche à très sèche, craquelé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800167751</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d41496bec84e71ac68f77768ba4f67fea6db9d3802665c15d10ad229df4e97ce ]]></g:image_link>
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
<title><![CDATA[ Eucerin aquaphor baume réparateur 2x10ml ]]></title>
<g:id>b25322c2-4d8a-44f9-a43b-3e7f506178d8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-aquaphor baume réparateur 2x10ml?b25322c2-4d8a-44f9-a43b-3e7f506178d8 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Accélère la régénération cutanée</strong></p>
<p>Une formule sans eau qui répare, protège et apaise la peau sèche à très sèche, craquelée et irritée. Aquaphor crée la barrière protectrice idéale pour soutenir la régénération cutanée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800220173</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fd9c14ca3c21aa3ecb586dbd8170bc89233ca5e54532c4b6931959b56e386c81 ]]></g:image_link>
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
<title><![CDATA[ Eucerin aquaphor baume-spray corps 250ml ]]></title>
<g:id>f901798e-1da9-4693-a858-89f3ed183793</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-aquaphor baume-spray corps 250ml?f901798e-1da9-4693-a858-89f3ed183793 ]]></link>
<g:price><![CDATA[ 1625.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour les peaux très sèches, irritées</p>
<p>Ce baume spray réparateur favorise la régénération cutanée, apaise et hydrate les peaux très sèches, irritées. L’application en spray permet de couvrir facilement de larges zones corporelles telles que le torse, les jambes, les bras et le dos. Ne convient pas à une application sur le visage.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900770042</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/281c989bee4d9864d61de03ece2d8611a4d551edca9e81e124bd48ea220a6a82 ]]></g:image_link>
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
<title><![CDATA[ Eucerin correcteur de tâches anti-pigment 5ml ]]></title>
<g:id>cd9ff6a0-9a6a-4d15-b981-d246b32bed43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-correcteur de tâches anti-pigment 5ml?cd9ff6a0-9a6a-4d15-b981-d246b32bed43 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La mélanine est un pigment naturel qui donne de la couleur à la peau. L’exposition à la lumière du soleil, aux influences hormonales et au vieillissement peuvent entraîner une augmentation de la production de mélanine et déclencher une hyperpigmentation. L'hyperpigmentation apparaît sous forme de taches foncées et de taches de vieillesse (également appelées taches de soleil) qui donnent à la peau une apparence inhomogène.</p>
<p>Eucerin anti-pigment correcteur de taches est un gel non gras av ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800213113</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/72c06b4c5c517f9165fcdf975eb038d46a7b51ac4eb12c8716e292d5219769b4 ]]></g:image_link>
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
<title><![CDATA[ Eucerin crème mains réparatrice 5% urée 75ml x2 ]]></title>
<g:id>e6c3f8f4-17d4-4ca8-b5c6-1c28eabb007d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-crème mains réparatrice 5% urée 75ml x2?e6c3f8f4-17d4-4ca8-b5c6-1c28eabb007d ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin Crème Mains Réparatrice 5% Urée est un soin quotidien des mains sèches, très sèches, abîmées et irritées.</p>
<p>Elle peut être utilisée en complément de traitements (ex : dermatite atopique).</p>
<p>Elle protège les mains les plus abîmées contre les agressions extérieures climatiques et chimiques grâce à son film protecteur.</p>
<p>Elle pénètre instantanément grâce à sa texture légère.</p>
<p>Sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005808706716</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0959b994251d470e1738ac117a68aa4afa7b349a3249fcd5583421a4adaa0257 ]]></g:image_link>
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
<title><![CDATA[ Eucerin dermatoclean hyaluron eau micellaire 3 en 1 400ml ]]></title>
<g:id>8ece80fb-8921-4f7b-baa6-83078a8872ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermatoclean hyaluron eau micellaire 3 en 1 400ml?8ece80fb-8921-4f7b-baa6-83078a8872ae ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Eau Micellaire 3 en 1 Eucerin DermatoCLEAN [HYALURON] est un nettoyant à la fois doux et efficace pour le visage qui élimine les impuretés et le maquillage du visage et des yeux sans dessécher la peau.</p>
<p>Notre nettoyant à l'eau micellaire combine un complexe nettoyant extra-doux à de l'Acide Hyaluronique et à d'autres ingrédients hydratants d'origine naturelle pour aider la peau à maintenir son équilibre hydrique naturel. Il laisse la peau propre, rafraîchie et douce.</p>
<p>Solution n ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800150135</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dc512ef5ab0c9b67920116d4acdba25d2ce47c39544a4332a24bc0b0d57a11a1 ]]></g:image_link>
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
<title><![CDATA[ Eucerin dermo capillaire soin traitant calmant 5% urée 100 ml ]]></title>
<g:id>c88f7a81-a3f0-4744-a7fd-a62edf135439</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermo capillaire soin traitant calmant 5% urée 100 ml?c88f7a81-a3f0-4744-a7fd-a62edf135439 ]]></link>
<g:price><![CDATA[ 1370.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Shampoing cuir chevelu sec</strong><br />EUCERIN DermoCapillaire Soin Traitant Calmant 5% Urée a été spécialement développé pour les personnes souffrant d'un cuir chevelu sec et sujet aux sensations de démangeaisons. Sa formule sans rinçage non collante offre une hydratation intense durable à votre cuir chevelu. Elle apaise et réduit les sensations de démangeaisons dès la première utilisation. Elle soulage activement votre cuir chevelu des sensations de tiraillements. Elle améliore ai ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800036712</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae9820890af060d6cb242c8f0a04fcce99df93729a55705095cb566f67853533 ]]></g:image_link>
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
<title><![CDATA[ Eucerin dermoPure k10 soin rénovateur cutané 40ml ]]></title>
<g:id>e6cc4239-b748-4934-a7a8-bb9bd289c880</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-dermopure k10 soin rénovateur cutané 40ml?e6cc4239-b748-4934-a7a8-bb9bd289c880 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Concentré enrichi en Acide Salicylique pour les peaux à tendance acnéique</p>
<p>EUCERIN DermoPure K10 Soin Rénovateur Cutané agit efficacement dès la première application, et révèle une peau plus nette et plus douce jour après jour.</p>
<p><strong>Soin acné rénovateur</strong><br />EUCERIN DermoPure K10 Soin Rénovateur Cutané agit efficacement dès la première application, et révèle une peau plus nette et plus douce jour après jour.</p>
<p><strong>L’innovation :</strong></p>
<p>Le Complexe Hy ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800193026</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb2587310a620e8e43bd851f9ccea426d3fa55a9e8b0963515a4d06f2cc39b62 ]]></g:image_link>
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
<title><![CDATA[ Eucerin hyaluron filler volume lift nuit 50ml ]]></title>
<g:id>5193c17f-d5d3-4f7f-a148-22ace2b8fec1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron filler volume lift nuit 50ml?5193c17f-d5d3-4f7f-a148-22ace2b8fec1 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin de nuit volumisateur adapté à tous les types de peaux et enrichi en Magnolol, en Oligo Peptides et en Acide Hyaluronique pour traiter les différentes causes de la perte de volume cutané.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900467331</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f20cf6da304da6fce00293c2a33f15b821f81c48b674f3875dea2ba9ae1889bb ]]></g:image_link>
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
<title><![CDATA[ Eucerin hyaluron-filler extra riche soin de jour 50ml ]]></title>
<g:id>3153e570-35f2-473b-a6f3-c835b27bcf4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler extra riche soin de jour 50ml?3153e570-35f2-473b-a6f3-c835b27bcf4b ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydratation quotidienne intense et réduction de l'apparence des rides sur les peaux sèches, formulé avec une combinaison de deux complexes d’ingrédients actifs : la technologie Urea et la Technologie HYALURON-FILLER.</p>
<p>EUCERIN HYALURON-FILLER EXTRA RICHE Soin de Jour offre une hydratation intense et réduit visiblement les rides et ridules de sécheresse. Il contient une association de deux technologies issues de l’expertise Anti-Âge et de l’expertise Peau Sèche d’EUCERIN : la Technologie  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900354594</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab297f85d03680a655ae80505e0b6fb8dde37315f7385eea790da4bc815e1a1d ]]></g:image_link>
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
<title><![CDATA[ Eucerin hyaluron-filler extra riche soin de nuit 50ml ]]></title>
<g:id>fc5af2cb-d3f7-4100-916b-4c2482b42d5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler extra riche soin de nuit 50ml?fc5af2cb-d3f7-4100-916b-4c2482b42d5e ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin anti-rides nuit intense pour les peaux sèches et ridées formulé avec une combinaison de deux complexes d’ingrédients actifs : la technologie Urea et la Technologie HYALURON-FILLER.</p>
<p>EUCERIN HYALURON-FILLER EXTRA RICHE Soin de Nuit offre une hydratation intense et réduit visiblement les rides et ridules de sécheresse. Il contient une association de deux technologies issues de l’expertise Anti-Âge et de l’expertise Peau Sèche d’EUCERIN : la Technologie Urea (Urea et Acide Lactique) & ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900354631</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/12f8b098be4f2220ede9d246762ffb298c5d6d9ad25f81c42cdb86986eedce54 ]]></g:image_link>
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
<title><![CDATA[ Eucerin hyaluron-filler volume-lift soin de jour peau sèche 50ml ]]></title>
<g:id>4ccd7915-0cc0-46d4-b2ed-e1697034c01b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluron-filler volume-lift soin de jour peau sèche 50ml?4ccd7915-0cc0-46d4-b2ed-e1697034c01b ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Soin de jour peau sèche anti-âge</strong><br />EUCERIN HYALURON-FILLER + VOLUME-LIFT Soin de Jour Peau Sèche contient trois ingrédients actifs spécialement reconnus pour leurs actions face à la perte de volume et au relâchement cutané.</p>
<p>Il associe du Magnolol, un actif dérivé de la nature, qui augmente la taille et le nombre de cellules responsables du volume cutané, à des Oligo Peptides, qui dynamisent le renouvellement du collagène*. L'Acide Hyaluronique améliore par ailleurs  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900467416</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/158d2784667750540fb4893473a6f3c0916311ea33e8d41293592f0872f45c78 ]]></g:image_link>
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
<title><![CDATA[ Eucerin hyaluronfiller volume lift jour peaux normales à mixtes 50ml ]]></title>
<g:id>0fc2aeb7-0564-418a-8826-37fa339a48e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-hyaluronfiller volume lift jour peaux normales à mixtes 50ml?0fc2aeb7-0564-418a-8826-37fa339a48e2 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin de jour volumisateur pour peaux normales à mixtes.<br />Contient une protection solaire SPF15 et des filtres UVA pour protéger la peau du photovieillissement.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900467294</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ca331ee91b5a6a134ed60f379b193cbe28720a4c53904e45d65322bcdbb1467 ]]></g:image_link>
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
<title><![CDATA[ Eucerin pH5 gel lavant 1L ]]></title>
<g:id>b6e666ac-dc86-4e9f-b761-d250e993eb9e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-ph5 gel lavant 1l?b6e666ac-dc86-4e9f-b761-d250e993eb9e ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Peau sensible<br />pH5<br />Gel lavant<br />pH5 Enzyme Protection<br />Préserve les défenses naturelles de la peau<br />Protège du dessèchement<br />Offre spéciale <br />Format 1 litre</p>
<p>Le gel lavant pH5 a été spécialement développé par les laboratoires Eucerin pour les besoins des peaux sensibles.</p>
<p>Nettoie la peau en douceur et en profondeur<br />Convient aux peaux à tendance réactive - sans savon<br />Convient pour le visage et le corps</p>
<p>L'innovation: l'action pH5 EnzymePr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800630750</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/04aaa4528b42f292bbd29d29c877bdb2b2d32ddf006f5c88cd52c8b290799fb1 ]]></g:image_link>
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
<title><![CDATA[ Eucerin ph5 huile de douche eco recharge 400ml ]]></title>
<g:id>8ff0bcc0-3c7d-406e-b18d-3667e1d778f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-ph5 huile de douche eco recharge 400ml?8ff0bcc0-3c7d-406e-b18d-3667e1d778f2 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile de Douche<br />Préserve les défenses naturelles de la peau<br />Nettoie en douceur<br />Riche en lipides<br />Peaux sensibles<br />400ml</p>
<p>Nettoie en douceur visage et corps.</p>
<ul>
<li>L'association du tampon citrate pH5 et d'agents lavants extradoux active les enzymes naturelles de la peau pour renforcer sa barrière protectrice</li>
<li>Même en cas d'utilisation fréquente, la peau est protégée du dessèchement</li>
</ul>
<p>Des études cliniques ont montré une excellente efficaci ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800193729</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0111a947a44d6c5669536931f97c4376ca839e38ffded209eaa554d2452e3209 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sensi-rides soin anti-rides nuit peaux sensibles 50ml ]]></title>
<g:id>671273ce-560c-4d17-aeca-7a2b4bee2f91</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sensi-rides soin anti-rides nuit peaux sensibles 50ml?671273ce-560c-4d17-aeca-7a2b4bee2f91 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>C'est durant la nuit que la peau se régénère : c'est pourquoi il est important d'appliquer chaque soir une crème de nuit qui renforce cette régénération et aide à réduire l'apparence des rides et freine le vieillissement cutané.</p>
<p>Les Laboratoires EUCÉRIN mettent à votre disposition la Crème de Nuit Sensi Rides dont la formule permet de stimuler votre peau durant la nuit.</p>
<p>L'anti-ride EUCERIN a une double action:</p>
<p>- Elle comble le déficit  d'énergie causé par l'âge et amélior ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800017360</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1eff99c6129355e87237d256b3c21b1cadada1a5ee36ea4bfdeb8e30661759d4 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection leb protect crème-gel spf50 150ml ]]></title>
<g:id>9874ce2d-8d6a-43ce-86cd-85a2affad528</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection leb protect crème-gel spf50 150ml?9874ce2d-8d6a-43ce-86cd-85a2affad528 ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Une protection solaire à la texture gel-crème avec une haute protection UV et une protection efficace des peaux sujettes à la Lucite Estivale Bénigne (LEB).</strong></p>
<p>Cette protection solaire à la texture légère protège les peaux sujettes aux lucites estivales bénignes et des dommages liés au soleil.</p>
<p><strong>Protection solaire peau sensible - Crème Gel solaire SPF 50</strong></p>
<p>Eucerin SUN PROTECTION LEB PROTECT Crème-Gel SPF 50 offre une protection solaire élevée to ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800030772</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fcd3143cc26ce108603f3f059eaf5ebb093a4886567bbc78e589dcb6f8d07255 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection oil control gel-crème spf50+ 50ml ]]></title>
<g:id>6dabfaa2-03e0-49f3-bf02-f1b34ddee51c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection oil control gel-crème spf50+ 50ml?6dabfaa2-03e0-49f3-bf02-f1b34ddee51c ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Protection solaire pour les visages à la peau grasse ou à tendance acnéique</strong></p>
<p>Protège des dommages cutanés causés par le soleil. Fini mat et sec longue tenue grâce à une action anti-brillance durable.</p>
<p><strong>Protection solaire peau grasse - Crème Gel solaire SPF 50</strong></p>
<p>Eucerin SUN PROTECTION OIL CONTROL Gel-Crème SPF 50+ est un produit solaire d'usage quotidien qui présente un très haut facteur de protection solaire,et qui est spécifiquement formulé p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800119361</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5df6827c20b8e740dd5608c6c9f339fe7df6001ba3a16ff0ab42569b69b94376 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection photoaging control spf50 50ml ]]></title>
<g:id>4e143c1a-466f-4a42-a8f0-35000c0dc3ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection photoaging control spf50 50ml?4e143c1a-466f-4a42-a8f0-35000c0dc3ec ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Protection solaire anti-âge quotidienne à haut indice de protection, pour tous les types de peau, y compris les peaux sensibles</strong></p>
<p>Protège la peau du visage des coups de soleil et du photovieillissement. Texture légère et agréable.</p>
<p><strong>Protection solaire anti-âge SPF 50</strong></p>
<p>Eucerin SUN PROTECTION PHOTOAGING CONTROL Fluid SPF 50 est est une haute protection solaire qui peut être utilisée quotidiennement et qui est adaptée à tous les types de peau. El ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800147388</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc70397f1576074a6f472f7717cbc61f892516b5d0b87ca439b239cf95624c00 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection pigment control fluid spf50+ 50ml ]]></title>
<g:id>5ede2d1c-d677-4b8e-8dd9-3909cf3ec902</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection pigment control fluid spf50+ 50ml?5ede2d1c-d677-4b8e-8dd9-3909cf3ec902 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Très haute protection solaire anti-taches. Prévient l'hyperpigmentation induite par le soleil, réduit efficacement les taches brunes et empêche leur réapparition.</strong></p>
<p>L'Advanced Spectral Technology d'Eucerin offre une haute protection contre les UVA / UVB et une défense contre la Lumière Visible de Haute Energie (HEVIS). La protection solaire soutient également le propre mécanisme de réparation de l'ADN de la peau.</p>
<p><strong>Protection solaire anti-taches SUN PIGMENT  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800238963</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d84b18893c35521c649d087a7c7772382215ef15461b15302fa4edecf2aedf35 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection protect gel-crème toucher sec spf50+ 200ml ]]></title>
<g:id>a4b2a790-ff6e-4781-886b-9bab23ac8b27</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection protect gel-crème toucher sec spf50+ 200ml?a4b2a790-ff6e-4781-886b-9bab23ac8b27 ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <div class="titre_zone_desc">
<p><strong>Gel-crème solaire haute protection UVA et UVB.</strong></p>
<p>Texture ultra-légère résistante à l'eau et à la sueur qui laisse un toucher sec sur la peau.</p>
<p>L'Advanced Spectral Technology d'Eucerin offre une haute protection contre les UVA / UVB et une défense contre les effets de la lumière de Haute Energie Visible. La protection solaire soutient également le propre mécanisme de réparation de l'ADN de la peau, tandis que l'Acide Hyaluronique aide à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005900686367</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e75cce6363e586b60d0aa08032ef59f43658fc385e73541017e9fbfd996c123d ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection sensitive protect brume solaire 200ml ]]></title>
<g:id>21e08b2a-00a8-41c3-abe8-a1433bf1ebf4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection sensitive protect brume solaire 200ml?21e08b2a-00a8-41c3-abe8-a1433bf1ebf4 ]]></link>
<g:price><![CDATA[ 1580.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Brume solaire pour peaux sensibles, haute protection</strong></p>
<p>Formule transparente et légère qui protège efficacement les peaux sensibles et même les peaux à tendance acnéique.</p>
<p><strong>Études cliniques et dermatologiques</strong></p>
<p>Des études cliniques ont prouvé l'efficacité et la tolérance cutanée de ce produit chez les personnes à la peau sensible, même chez celles présentant une peau grasse ou à tendance acnéique.</p>
<p>Eucerin SUN PROTECTION SENSITIVE PROTECT  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800126253</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7ce174a7456c503c143a6aa3ea8f1f03c9a7052868c31418d7d417b156ab1015 ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection sensitive protect crème spf50+ 50ml ]]></title>
<g:id>bdc2ca49-6fb7-4cc0-80fc-1da941f2ceb3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection sensitive protect crème spf50+ 50ml?bdc2ca49-6fb7-4cc0-80fc-1da941f2ceb3 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Une crème solaire visage qui allie une très haute protection UV et un renforcement des mécanismes naturels de protection cellulaire et de réparation de l’ADN de la peau.</strong></p>
<p>Cette crème qui pénètre facilement est idéale pour les peaux normales et sèches.</p>
<p><strong>Crème solaire visage peau normale et sèche SPF 50</strong></p>
<p>Eucerin SUN PROTECTION SENSITIVE PROTECT Crème SPF 50+ est un écran solaire pour le visage avancé et spécialement conçu pour protéger du viei ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800065545</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/635509c520c964d82af755ee4799baa8a0e828e39b6b386f02c69c12b82d628a ]]></g:image_link>
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
<title><![CDATA[ Eucerin sun protection sensitive protect kids spray spf50+ 200ml ]]></title>
<g:id>0c7a3016-19bb-4aa2-96d0-9c96c2ff8b58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-sun protection sensitive protect kids spray spf50+ 200ml?0c7a3016-19bb-4aa2-96d0-9c96c2ff8b58 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Un spray solaire à très haute protection UV qui convient aux enfants de plus de trois ans.</strong></p>
<p>Ce spray non gras, facile à appliquer et résistant à l'eau protège la peau des enfants contre les coups de soleil et réduit les risques de dommages à long terme dus aux UV.</p>
<p><strong>Spray solaire enfants peaux sensibles SPF 50</strong></p>
<p>Eucerin SUN PROTECTION SENSITIVE PROTECT KIDS Spray SPF 50+ est spécialement conçu pour protéger la peau sensible des enfants contre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800027932</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6e7ad2c3f79408ee3be46d75f0c24f9ce2ede49b15dfd2501f56016fd289beb ]]></g:image_link>
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
<title><![CDATA[ Eucerin urearepair plus crème pieds 10% d'urée 100ml ]]></title>
<g:id>d2a57c79-25a7-44d2-a3b1-befe332b8722</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-urearepair plus crème pieds 10% d'urée 100ml?d2a57c79-25a7-44d2-a3b1-befe332b8722 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Soin pour les pieds secs à extrêmement secs</strong></p>
<p>Hydrate et apaise intensément les pieds secs à très secs et les talons fendillés pour laisser la peau douce et souple.</p>
<p>EUCERIN UreaRepair PLUS Crème Pieds 10% d'urée offre un soin intensif aux pieds secs à très secs, avec ou sans talon fendillé. Enrichie en urée et en lactate, elle garantit une hydratation longue durée même sur les peaux sèches et craquelées. Elle agit rapidement pour apaiser la sécheresse cutanée et l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800034428</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c98a63befb66e3f29dd124c303db43aa55eb59062f98834f85f09aea243ad91 ]]></g:image_link>
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
<title><![CDATA[ Eucerin émollient Corps réparateur 10% d'Urée 250ML ]]></title>
<g:id>d7836bfa-144e-493a-8674-d0c52539e77b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-mollient corps réparateur 10% d'urée 250ml?d7836bfa-144e-493a-8674-d0c52539e77b ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eucerin complete repair emollient réparateur 10% urée:</p>
<p>- Adoucit les sécheresses cutanée sevères. </p>
<p>- Favorise activement l'exfoliation des peaux squameuses et soulage les démangeaisons. </p>
<p>- Rétablit intensément le niveau naturel de l'urée et du lactate des agents hydratants. </p>
<p>- Laisse sur la peau une sensation de douceur et de souplesse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800024146</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8bd96d15fc8f81fe9f048f9580eb9467345693ec6d4826f6980cfb16308f1d4b ]]></g:image_link>
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
<title><![CDATA[ Eucerin émollient Corps réparateur 10% d'Urée 400ML ]]></title>
<g:id>1e560b9f-3b9d-4e1d-8a7a-ec8e2eb81172</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerin-mollient corps réparateur 10% d'urée 400ml?1e560b9f-3b9d-4e1d-8a7a-ec8e2eb81172 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce soin décrit les actions suivantes:</p>
<p>- Adoucit les sécheresses cutanée sevères. </p>
<p>- Favorise activement l'exfoliation des peaux squameuses et soulage les démangeaisons. </p>
<p>- Rétablit intensément le niveau naturel de l'urée et du lactate des agents hydratants. </p>
<p>- Laisse sur la peau une sensation de douceur et de souplesse.</p>
<p>L'urée est un agent, que l'on appelle aussi carbamide, très miscible dans l'eau, et qui prend naissance dans la fin du cycle métabolique des ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800024245</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20fe625159bd4ba35695befd080838391a791ee847fd940967f4178cc9b3bef1 ]]></g:image_link>
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
<title><![CDATA[ EucerinAnti Pigment Soin Contour Des Yeux Illuminateur 15ml ]]></title>
<g:id>c287fa8b-e9aa-4e38-8290-3f6deeb082b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eucerinanti-pigment soin contour des yeux illuminateur 15ml?c287fa8b-e9aa-4e38-8290-3f6deeb082b3 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <ul>
<li><span>Pour qui :</span> Tous les types de peaux.</li>
<li><span>Résultats beauté :</span><span> Les cernes sont corrigés et réduits, les ridules sont lissées, le contour de l'oeil est illuminé.</span></li>
<li><span>Actifs :</span><span> Thiamidol, Acide Hyaluronique, Oligopeptides.</span></li>
<li><span>On aime :</span><span> Sa texture fraîche et légère !</span></li>
</ul>
<p> </p>
<p>Le <span>Soin Contour des Yeux Illuminateur Eucerin Anti-Pigment </span>traite tous les types de cern ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4005800323713</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/49fefb929904932173ad8e9adc4f73a47f2baad519084c8123b36e6610890a20 ]]></g:image_link>
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
<title><![CDATA[ Eunova Kids Croissance ]]></title>
<g:id>82584d5e-029b-4f29-996d-81bb3aa16883</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eunova-kids croissance?82584d5e-029b-4f29-996d-81bb3aa16883 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eunova Croissance contient des actifs soigneusement sélectionnés et contribue au maintien d'une ossature normale de votre enfant. Un complément croissance au bon goût de fruit rouge, de fraise, d'orange et de citron pour une prise pratique et agréable.<br><br>CROISSANCE : les vitamines D3 et K contribuent au maintien d'une ossature normale de votre enfant.<br><br>VITALITÉ : les vitamines C, B3 et l’acide folique contribuent à réduire la fatigue. Les vitamines B3, B12, C et la biotine contribu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3615840000584</g:gtin>
<g:brand><![CDATA[ EUNOVA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2bc39afcfafa14ba30be8d49fb861222e5b175d1edbd78891689b0e57f5d5534 ]]></g:image_link>
<g:product_type><![CDATA[ SANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Eunova Kids Immunité ]]></title>
<g:id>e21bbc2d-baf4-470f-bab8-873eb01dd97b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eunova-kids immunité?e21bbc2d-baf4-470f-bab8-873eb01dd97b ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eunova Kids Immunité associe des baies d'argousier avec 5 vitamines et minéraux pour <strong>renforcer les défenses naturelles de votre enfant</strong>. Un complément immunité au bon goût d'orange, de passion, de fraise et de framboise pour une prise pratique et agréable.</p><ul><li><p>Immunité : les vitamines C, D3 et le zinc contribuent au <strong>fonctionnement normal du système immunitaire</strong>.</p></li><li><p>Vitalité : la vitamine C contribue à un <strong>métabolisme énergétique nor ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3615840000577</g:gtin>
<g:brand><![CDATA[ EUNOVA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ebc5766d2c4e1db971319cd0dc497555f1da0275001e138b30e04be85d5421c ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Eunova Kids Multi Vitamines ]]></title>
<g:id>a8415130-72d9-4e29-a1a3-b7d43ce45554</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eunova-kids multi vitamines?a8415130-72d9-4e29-a1a3-b7d43ce45554 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eunova Multivitamines associe du sureau avec 9 vitamines et minéraux pour accompagner votre enfant au quotidien. Un complément multivitaminé au bon goût de pomme et de cassis pour une prise pratique et agréable.<br><br>ÉNERGIE : les vitamines C, B3 et l’acide folique contribuent à réduire la fatigue.<br><br>VITALITÉ : les vitamines B3, B12, C et la biotine contribuent à un métabolisme énergétique normal.<br><br>ANTIOXYDANT : les vitamines C, E et le zinc contribuent à protéger les cellules du ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3615840000560</g:gtin>
<g:brand><![CDATA[ EUNOVA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58bed72525b06ef905d086ad14657dabdcb34a7fdf67b2695999d8c0c88337eb ]]></g:image_link>
<g:product_type><![CDATA[ SANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Euphytose Nuit LP 1,9 mg Mélatonine 30 Comprimés ]]></title>
<g:id>fb0a8251-5ecb-4241-819c-10cf9eaaf3f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytose-nuit lp 1,9 mg mélatonine 30 comprimés?fb0a8251-5ecb-4241-819c-10cf9eaaf3f5 ]]></link>
<g:price><![CDATA[ 1699.00 EUR ]]></g:price>
<description><![CDATA[ <p class="produit__description--text">Le produit complément alimentaire Euphytose Nuit Sommeil Mélatonine 1,9 mg libération prolongée en comprimés est un complément à base de mélatonine et de plantes qui permet de contribuer à une qualité de nuit meilleure et réparatrice.</p>
<p> </p>
<p class="produit__description--text">A l'aide d'un comprimé en bicouche, Euphytose Nuit Sommeil Mélatonine 1,9 mg libération prolongée en comprimés permet deux étapes distinctes. La première étant une libération r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001662</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42c2509c5f18d8c93a1f37dc6d7d998c4ae0a7ee3a93c4a35208eca90c80a217 ]]></g:image_link>
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
<title><![CDATA[ Euphytose Nuit à la mélatonine 30 comprimés ]]></title>
<g:id>b5029184-32e5-4b72-8309-1d6cf99f05bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytose-nuit à la mélatonine 30 comprimés?b5029184-32e5-4b72-8309-1d6cf99f05bd ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Du mal à s’endormir ? Sommeil perturbé ? Lendemain difficile ? EuphytoseNuit® est la solution adaptée sans dépendance ni accoutumance, pour s’endormir et bien dormir.</p>
<p>EuphytoseNuit® est un complément alimentaire à base de mélatonine pour un endormissement plus rapide et de passiflore pour retrouver un sommeil réparateur chez l’adulte sans dépendance ni accoutumance. Disponible en pharmacie et parapharmacie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401581631091</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e79b0f853870a0a56d14e1eb93442bf3a211b2b84b02d0f8d257f55027674b81 ]]></g:image_link>
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
<title><![CDATA[ Euphytose Zen 30 comprimés ]]></title>
<g:id>0bfb70b2-4841-47c7-a721-98e1923d4dba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytose-zen 30 comprimés?0bfb70b2-4841-47c7-a721-98e1923d4dba ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>EuphytoseZen® a été spécialement développé pour aider votre organisme à résister au stress lors de ces périodes intenses.</p>
<p>EuphytoseZen® est une association unique de <em>Rhodiola Rosea</em> et <em>Bacopa Monnieri</em>, deux plantes adaptogènes, pour gérer votre stress*, et <em>d’Ocimum Sanctum</em>, sans dépendance ni accoutumance.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000740</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c035ab448fbe6eaf529b844ec1d80cf572ff07023162e20e25f7d436a81f28c ]]></g:image_link>
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
<title><![CDATA[ Euphytose confort intestinal 28 gélules ]]></title>
<g:id>ae47e9ef-e513-4088-b70f-ce37dd8a46c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytose-confort intestinal 28 gélules?ae47e9ef-e513-4088-b70f-ce37dd8a46c9 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Euphytose Confort Intestinal 28 Gélules Végétales est un complément alimentaire à base de mélisse, de vitamine B2 et de Lactobacillus acidophilus (La-14).</p>
<ul><li>La mélisse favorise le bien-être digestif et l'équilibre du transit ;</li>
<li>la vitamine B2 contribue au maintien de muqueuses normales dont la paroi intestinale ;</li>
<li>le Lactobacillus acidophilus (La-14) est une souche microbiotique dosée à 10 milliards d'UFC (Unités Formant Colonies) par gélule à fabrication.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000948</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1bdef6f11364ada1c2c927925dbd5eb097b6b872081d1a8ee7d075c02e5d6d24 ]]></g:image_link>
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
<title><![CDATA[ Euphytose nuit 30 comprimés lot de 2 ]]></title>
<g:id>53475b62-7592-40c5-9210-d9fc22ae26c1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytose-nuit 30 comprimés lot de 2?53475b62-7592-40c5-9210-d9fc22ae26c1 ]]></link>
<g:price><![CDATA[ 1898.00 EUR ]]></g:price>
<description><![CDATA[ <div class="coh-container coh-component coh-component-instance-166fc693-4e22-4d28-bf95-c52b2ea3012b contextual-component coh-style-wysiwyg text-left text-mobile-left background-show margin-bottom-hide border-hide coh-instance-4033998216 coh-ce-cpt_wysiwyg-b4709b55">
<div class="coh-container WYSIWYG-container coh-style-small---padding-top-bottom coh-container-boxed">
<div class="coh-wysiwyg wysiwyg-content">
<p><strong>EuphytoseNuit® est la solution adaptée sans dépendance ni accoutumance, pour  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001303</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/24e458dd6f6840ad63fb0408f580031a7c43323bb363682fa3bd6d0c6c2cd27e ]]></g:image_link>
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
<title><![CDATA[ Euphytose nuit infusion à la mélatonine 20 sachets ]]></title>
<g:id>e35c2f27-18f8-4813-889f-81dc85d51c74</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytose-nuit infusion à la mélatonine 20 sachets?e35c2f27-18f8-4813-889f-81dc85d51c74 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Besoin de vous détendre avant d’aller au lit ? Vous avez du mal à trouver le sommeil ? Vous aimeriez mieux dormir ? Le sachet à infuser EuphytoseNuit® vous aide à vous endormir rapidement et à bien dormir, sans dépendance ni accoutumance.</p>
<p>EuphytoseNuit® Sachet est un mélange innovant de mélatonine, l’hormone naturelle du sommeil, pour s’endormir rapidement et de cinq plantes dont la feuille d’oranger pour bien dormir. Disponible en pharmacie et parapharmacie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000641</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1187e6ab05336c0d3f003f6dca45dbcd6393e8cd393cdb18215ce1de18a89c1 ]]></g:image_link>
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
<title><![CDATA[ Euphytosenuit LP 1.9mg x15 comprimés ]]></title>
<g:id>c2521c77-7752-4053-a3ad-e8d8f404722d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/euphytosenuit-lp 1.9mg x15 comprimés?c2521c77-7752-4053-a3ad-e8d8f404722d ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>EuphytoseNuit® LP 1,9mg est un complément alimentaire à base de mélatonine et de plantes pour contribuer à une meilleure nuit de sommeil.</span><br /><span>Grâce à un comprimé bicouche, EuphytoseNuit® LP 1,9mg délivre :</span><br /><span>En libération rapide, une dose adaptée de 1mg de mélatonine pour contribuer à réduire le temps d’endormissement ainsi que de l’Eschscholtzia et de la Valériane pour aider à une relaxation optimale.</span><br /><span>En libération prolongée, pendant 8 he ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001198</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e517577b4cf52d6c9ce00c73d695c1d77113dd720c23823647d61bbbbf20496c ]]></g:image_link>
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
<title><![CDATA[ Evabiote Endo boite 30 Capsules  ]]></title>
<g:id>17284548-5ada-4cdd-a4a7-d5e48b81eeb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/evabiote-endo boite 30 capsules ?17284548-5ada-4cdd-a4a7-d5e48b81eeb2 ]]></link>
<g:price><![CDATA[ 2070.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Evabiote Endo</strong>&nbsp;est un complément alimentaire à base d'une souche probiotique (<em>Saccharomyces cerevisiae boulardii</em>&nbsp;[CNCM I-3799]), de polyphénols (trans-resvératrol &amp; curcumine) et d'un oligo-élément (zinc).</p><p>Le <strong>zinc</strong> contribue à une fertilité et une reproduction normales, au fonctionnement normal du système immunitaire et à protéger les cellules contre le stress oxydatif.</p><p>Ce complément alimentaire est réservé à <strong>l'adulte. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700039500218</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22064bd09b1efbbef77925222ebee3d46edf93e8915662851b7f14ff5caedc7d ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Evabiote Flore Intime 20 gélules ]]></title>
<g:id>a58f87c4-a82a-4cbb-8081-c2ac1b8b724e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/evabiote-flore intime 20 gélules?a58f87c4-a82a-4cbb-8081-c2ac1b8b724e ]]></link>
<g:price><![CDATA[ 1150.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Evabiote® Flore intime</strong> des<strong> LABORATOIRES BESIN</strong>S est un complément alimentaire par voie ORALE destiné à restaurer et préserver le microbiote vaginal. La composition unique d’Evabiote® Flore intime associe l’espèce rhamnosus et l’espèce acidophilus représentant 5 milliards d’UFC (unités formant colonie) par gélule. Ces 2 espèces présentent l’avantage de résister à l’acidité de l’estomac et de migrer des voies digestives jusqu’au vagin. Elles sont complémentaires ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700039500119</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/91de6fdbf949a69f139d9339cf8c2644149586c06273d0a03dadef85fca05836 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Evabiote Hygiène Intime Gel Lavant 250ml ]]></title>
<g:id>945a7b72-e6fc-4549-aa19-300ae5e11f15</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/evabiote-hygiène intime gel lavant 250ml?945a7b72-e6fc-4549-aa19-300ae5e11f15 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p><br />Evabiote hygiène intime est une association innovante à double action régulatrice: </p>
<p>- action prébiotique qui favorise le développement des lactobacilles et des défenses naturelles de la zone intime<br />- il maintient le pH physiologique</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700039500133</g:gtin>
<g:brand><![CDATA[ HRA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d73421a7a0f2f142dd34ff8d3551e255fb2066c064790dd7457d56ddb515f38d ]]></g:image_link>
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
<title><![CDATA[ Evabiote Vaginal boite 10 ]]></title>
<g:id>5433bf74-0abf-4c18-a387-9445f18585f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/evabiote-vaginal boite 10?5433bf74-0abf-4c18-a387-9445f18585f2 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Evabiote Vaginal </strong>des <strong>Laboratoires Besins</strong> sont des ovules à base de postbiotique qui vont vous aider à maintenir du microbiote vaginal et une bonne hydratation vaginale.&nbsp;</p><p>Les ovules sont à utiliser par <strong>voie vaginale</strong> uniquement.&nbsp;</p><p>Elles sont composées d'acide lactique, d'acide hyaluronique, d'isoflavones de soja et de postbiotique (Lactobacillus acidophilus tyndallisés).&nbsp;</p><p>Les ovules vont permettre de maintenir le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700039500188</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6e59f0f626ddcb0185828a7f180e6566a7895c8375005b5541dc0e8bac88d7e ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > HYGIÈNE ET SOINS INTIMES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Exacto Test de grossesse précoce 8 jours ]]></title>
<g:id>8a66bc94-a5a5-49c8-9c2a-12d301345251</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/exacto-test de grossesse précoce 8 jours?8a66bc94-a5a5-49c8-9c2a-12d301345251 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Exacto® 8 Jours, est le premier test de grossesse précoce qui se base sur la date du rapport sexuel et non sur la date présumée des règles. Ce test est réalisable à partir du huitième jour suivant un rapport sexuel. Il détecte une hormone dans votre urine que votre corps produit pendant la grossesse (la gonadotrophine chorionique humaine - hCG). La concentration de cette hormone augmente suivant l’avancement de la grossesse.</span><br /><br /><span>Ce test est fiable à plus de 99 % à co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532678589312</g:gtin>
<g:brand><![CDATA[ Biosynex ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cba4d54ae02e597adb2997bd5f90ae34634195ef66d8ac3fc5ecda8c79ec651 ]]></g:image_link>
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
<title><![CDATA[ Excilor Baume Réparateur Talons Fendillés 50ml ]]></title>
<g:id>373e52bc-cfd2-4dc9-9a96-eef479ac0299</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-baume réparateur talons fendillés 50ml?373e52bc-cfd2-4dc9-9a96-eef479ac0299 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Excilor Baume Réparateur Talons Fendillés et Craquelés 50 ml est spécialement formulé pour traiter les pieds abîmés, pour réparer les talons fendillés et</p>
<p>craquelés.</p>
<p>Les propriétés réparatrices de la provitamine B5 et de l'allantoïne apaisent immédiatement et réduisent le nombre de fissures dès 3 jours.</p>
<p>Le pouvoir hydratant du beurre de karité et de l'urée restaure le film hydrolipidique de la peau.</p>
<p>Après deux semaines la peau est régénérée plus souple et plus douce ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819991298</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d28b0bd0188a0dbfa2c2c415b2661dfad70dc14e7cfe86404a02bd0579550b6e ]]></g:image_link>
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
<title><![CDATA[ Excilor Crème Hydra-Intense 125 ml ]]></title>
<g:id>fa43baf1-0c21-4f40-a0dd-a35c982919db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-crème hydra-intense 125 ml?fa43baf1-0c21-4f40-a0dd-a35c982919db ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Excilor Crème Hydra-Intense 125 ml est un soin hydratant spécialement formulé pour les pieds très secs, en cas déshydratation sévère.</p>
<p>Cette crème contient de l'urée et de l'huile de pépin de raisin qui réhydratent intensément et restaurent l'équilibre hydrique de l'épiderme, pour un confort immédiat. L'Allantoine répare et laisse la peau douce et lisse. La Provitamine B5 participe au renforcement de la barrière c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819991328</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c6242811fd4acfcb18eff8f470f9b4d5692571239777b507677ee5a67311035e ]]></g:image_link>
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
<title><![CDATA[ Excilor Crème Régénérante Corne & Callosités 50ml ]]></title>
<g:id>7356469a-fb29-4a2a-8dec-6c46c6dc197b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-crème régénérante corne & callosités 50ml?7356469a-fb29-4a2a-8dec-6c46c6dc197b ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>La gamme Excilor soin des pieds a été formulée avec des actifs reconnus et des extraits végétaux rigoureusement sélectionnés pour leur grande efficacité.</span></span></p>
<p><span><span>• Sans parabène, sans conservateur.</span></span></p>
<p><span><span>• Testée sous contrôle dermatologique.</span></span></p>
<p><span><span>• Formules concentrées.</span></span></p>
<p><span><span> </span></span></p>
<p><span><span>La crème régénératrice Excilor s’utilise dans le cas d’apparition ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819991311</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/11d1fadb7bf2843e96f31eb5f096f0b9e26a27c6906c5403155f0d8695fbd822 ]]></g:image_link>
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
<title><![CDATA[ Excilor Forte Solution Mycose Coloré Rouge, 30ml ]]></title>
<g:id>d6b151db-1720-483f-81c6-3ca203bfae56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-forte solution mycose coloré rouge, 30ml?d6b151db-1720-483f-81c6-3ca203bfae56 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>Solution Excilor Forte Vernis Coloré </span><span>élimine les couches infectées de l'ongle par les mycoses.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5410765005151</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9925ba295753b37a1f261e57d7a8b6c05b2b8bc530659748fc619aef35110fe0 ]]></g:image_link>
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
<title><![CDATA[ Excilor Forte Traitement de la Mycose Color Nude 30ml ]]></title>
<g:id>6b43fa3f-3e4e-4d68-a87c-998007918336</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-forte traitement de la mycose color nude 30ml?6b43fa3f-3e4e-4d68-a87c-998007918336 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Excilor Forte Color traitement de la mycose de l'ongle, un produit innovant extra fort, même contre la mycose de l'ongle persistante.<br />Luttez efficacement contre la mycose de l'ongle grâce à sa formule extra forte et sa technologie Transactive + offrant 24h de pénétration continue.<br />Efficacité cliniquement prouvée<br />Excilor Forte Color contrôle le micro-environnement de l’ongle en acidifiant le lit de l’ongle. Contient des substances acides capables de pénétrer l’ongle de sorte que ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5410765005168</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/24c98611995b933330b9090ae5fc8eb0a323a1275db9f3bc25a20599d3a433fb ]]></g:image_link>
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
<title><![CDATA[ Excilor Forte mycose de L'Ongle 30ml+Coupe Ongle Offert ]]></title>
<g:id>9d409607-06f6-4753-b7ea-dfe9b1d90d88</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-forte mycose de l'ongle 30ml+coupe ongle offert?9d409607-06f6-4753-b7ea-dfe9b1d90d88 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Excilor Traitement de la Mycose de l'Ongle Forte</span> contrôle le micro-environnement de l’ongle en acidifiant le lit de l’ongle.</p>
<p>Contient des substances acides capables de pénétrer l’ongle de sorte que l’ongle est traité “de l’intérieur vers l’extérieur”.</p>
<p>Abaisse immédiatement le PH de l’ongle et rend ainsi l’environnement hostile à la prolifération des mycoses.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711744054885</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e397c6489ebc087795a0656dce59e798fac49804e1e89964884f6a0ba9e97e7 ]]></g:image_link>
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
<title><![CDATA[ Excilor Mycose des pieds 3 en 1 ]]></title>
<g:id>adf32103-f8b4-4183-9933-d70ffb755155</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-mycose des pieds 3 en 1?adf32103-f8b4-4183-9933-d70ffb755155 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Excilor Mycose des Pieds 3en1 15ml est un traitement sous forme de crème des symptômes de la mycose du pied qui provoquent démangeaisons,</p>
<p>macération, mauvaises odeurs, desquamation.</p>
<p>Il agit en 7 jours sur la couche superficielle de la peau. Les champignons peuvent se nicher dans les espaces entre les orteils en provoquant des mycoses</p>
<p>plantaires et interdigitales.</p>
<p>Il sèche facilement et ne colle pas.</p>
<p>Sans parabène. Testé en métal (Nickel (&lt;0,1 PPM), Chrome ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711744050405</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fdcfcdeaa08abf9f1c1264ff6aeeb230378da884967563615e80777c800e69df ]]></g:image_link>
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
<title><![CDATA[ Excilor Verruxit Traitement Des Verrues Par Cryothérapie 50ml ]]></title>
<g:id>80f0e729-dc96-420b-8443-1deeaf290c9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/excilor-verruxit traitement des verrues par cryothérapie 50ml?80f0e729-dc96-420b-8443-1deeaf290c9c ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Excilor Cryo Verrues 50 ml&nbsp;est une solution innovante pour traiter efficacement les verrues des mains et des pieds. Basé sur le principe de la cryothérapie, ce produit agit en congélant directement la verrue jusqu’à sa racine, permettant ainsi son élimination progressive.</strong></p><p><strong>Idéal pour les verrues communes et plantaires, ce traitement est facile à utiliser à domicile et offre des résultats rapides. Avec Excilor Cryo, vous bénéficiez d’une solution professionne ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8032779841005</g:gtin>
<g:brand><![CDATA[ EXCILOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cadac38d3e87c5d39f1aead3024cf586a0e0563f5d79c764cd6a858188db197e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS ET CONFORT DES PIEDS > SOIN VERRUES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Exopharm Graines de Chia Bio 250 g ]]></title>
<g:id>7b096ece-10cf-4485-abd0-447a6e4af286</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/exopharm-graines de chia bio 250 g?7b096ece-10cf-4485-abd0-447a6e4af286 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Graines de Chia <span>présentent des caractéristiques nutritionnelles remarquables par leur richesse en fibres à 33%, en Oméga 3 à 18,5%, en Vitamine E, pauvre en sel, sans gluten et cholestérol.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760077790972</g:gtin>
<g:brand><![CDATA[ EXOPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/75cd345edc26b34e0bf951ae6c149ef9db3d7d1f1218d5bf9c387a0a1000b1bd ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE DONT ALLERGIES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Exopharm cramberries biologique sachet 250g ]]></title>
<g:id>b9e99758-eba2-4976-a930-81e02ce7a8eb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/exopharm-cramberries biologique sachet 250g?b9e99758-eba2-4976-a930-81e02ce7a8eb ]]></link>
<g:price><![CDATA[ 575.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cramberries biologique est d'originaires du canada où elles poussent à l’état naturel dans les tourbières acides, les cranberries ou canneberges sont issues de la même famille que les myrtilles. En automne, les plantations de cranberries deviennent flamboyantes; les champs sont alors inondés pour faire flotter les fruits à la surface et en faciliter la récolte.<br />Les amérindiens la nommaient atoca. Elles sont devenues très populaires grâce à leurs qualités nutritionnelles et gustatives.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760077790767</g:gtin>
<g:brand><![CDATA[ EXOPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/555f5c9b2e45ebdf4d83f592e503aab5d17ccde7cb555c2500c36696f72f1ed4 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE DONT ALLERGIES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Exopharm psyllium blond bilogique sachets 250g ]]></title>
<g:id>a04e66a1-842a-4fb6-a7be-a5e6cbd3acb1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/exopharm-psyllium blond bilogique sachets 250g?a04e66a1-842a-4fb6-a7be-a5e6cbd3acb1 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Psyllium blond bilogique est cultivé principalement dans le nord-ouest de l’inde où il est utilisé traditionnellement depuis des milliers d’années pour ses propriétés fonctionnelles. Le tégument ou enveloppe des graines du psyllium est composé de mucilages qui gonflent au contact de l’eau et se comportent dans l’intestin comme un gel augmentant le bol alimentaire.Il Facilite le transit intestinal, augmente la sensation de satiété. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760077790934</g:gtin>
<g:brand><![CDATA[ EXOPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c71024cb04fbbc6f52052536fd352e99d497628a58a4626e033fb034bb3923b3 ]]></g:image_link>
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
<title><![CDATA[ Expert 1.2.3. Cryostylo Verrues Pieds et Mains 18 Traitements ]]></title>
<g:id>bc59bb96-fcbb-40ff-b2dc-92260bde1cd4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/expert-1.2.3. cryostylo verrues pieds et mains 18 traitements?bc59bb96-fcbb-40ff-b2dc-92260bde1cd4 ]]></link>
<g:price><![CDATA[ 1580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Novodex Expert 1.2.3. Cryostylo Verrues Pieds et Mains 18 Traitements est un dispositif médical destiné au traitement des verrues par cryothérapie.</p>
<p>Doté de la nouvelle technologie Polestar, nouveau procédé de cryothérapie unique et de haute précision, il offre :</p>
<ul><li>Une précision extrême grâce au Cryostylo® : Facile d'utilisation, il gèle précisément la verrue et ses racines sans endommager la peau saine.</li>
<li>Une action rapide : Prêt à être utilisé et un traitement en quel ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401021473748</g:gtin>
<g:brand><![CDATA[ NOREVA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/10371da4ba470fc753d1548d60707a8803f4485e2fdcacb1a8d9920c48dfae29 ]]></g:image_link>
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
<title><![CDATA[ Expert 1.2.3. Stylo Verrues Pieds et Mains 3 ml ]]></title>
<g:id>2636fdad-86a7-4c7d-86a2-9f3affa4b8a2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/expert-1.2.3. stylo verrues pieds et mains 3 ml?2636fdad-86a7-4c7d-86a2-9f3affa4b8a2 ]]></link>
<g:price><![CDATA[ 1150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Novodex Expert 1.2.3. Stylo Verrues Pieds et Mains 3 ml est un dispositif médical sous forme de solution topique pour le traitement des verrues localisées sur les mains, les pieds, les bras, les jambes et le reste du corps (hors visage et muqueuses). Il pénètre instantanément. Il contient un agent kératolytique qui détruit les verrues en décomposant les tissus localement.</p>
<p>Il permet jusqu'à 220 applications.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664389000449</g:gtin>
<g:brand><![CDATA[ NOREVA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e15f8476ae9bf650722a20d5a1d2809c51020fd60be872954984e7c7a6c3acc ]]></g:image_link>
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
<title><![CDATA[ Extrait de Pépins de Pamplemousse 100 ml ]]></title>
<g:id>6057dfd5-de1b-46d7-b538-4806ce367ea0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/extrait-de pépins de pamplemousse 100 ml?6057dfd5-de1b-46d7-b538-4806ce367ea0 ]]></link>
<g:price><![CDATA[ 940.01 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Froid, Stress, Fatigue passagère, envie de renforcer ses défenses naturelles?<br /> L’extrait de pépins de pamplemousse possède une action protectrice.</p>
<p class="p1">Utilisé aussi bien en usage interne qu'extrême, il aide à renforcer les défenses naturelles de l'organisme et favorise ainsi le retour à un bien-être général.</p>
<p class="p1">La vitamine C possède une action antioxydante car elle protège les cellules du stress oxydatif.</p>
<p>D'origine naturelle</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515450015643</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d7e2d91867b929ee4dd35f8c536e61628e1a39bc3a451609130eb0d87a6d09bb ]]></g:image_link>
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
<title><![CDATA[ Extrait de Pépins de Pamplemousse 200 ml + 100 ml Offerts ]]></title>
<g:id>acfc0b34-b98c-4fa3-930c-a173840a954d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/extrait-de pépins de pamplemousse 200 ml + 100 ml offerts?acfc0b34-b98c-4fa3-930c-a173840a954d ]]></link>
<g:price><![CDATA[ 1469.99 EUR ]]></g:price>
<description><![CDATA[ <p>Nutrisanté Extrait de Pépins de Pamplemousse 200 ml + 100 ml Offerts est un complément alimentaire à base d'extrait de pépins de pamplemousse qui va permettre de renforcer les défenses naturelles de l'organisme.</p>
<p>Utilisé aussi bien en usage interne qu'externe, il aide à renforcer les défenses naturelles de l'organisme et favorise ainsi le retour à un bien-être général.</p>
<p>La vitamine C présente dans ce complément possède une action antioxydante et contribue au bon fonctionnement des ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515450045763</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/54d383f8973dd30986b26a113341582efc2067a99e88ba38a5a1a7d4e060886f ]]></g:image_link>
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
<title><![CDATA[ Eye Care poudre compacte 05 sable 10g ]]></title>
<g:id>31fcd5ff-baca-40f4-ab26-a9b38d7be7e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care poudre compacte 05 sable 10g?31fcd5ff-baca-40f4-ab26-a9b38d7be7e3 ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p>La poudre compacte ultramicronisée très haute tolérance, d'une extrême douceur est sans effet abrasif sur la peau et évite ainsi l'apparition de rougeurs ou d'intolérances.<br /><br />D’une extrême douceur à l’application, effectuée à l’aide de la houppette ou d’un pinceau, la poudre compacte matifie et unifie le teint au cours de la journée.</p>
<p>Un maquillage réussi dépend en premier lieu d’une peau parfaitement nettoyée et bien hydratée. Puis, il convient d’attendre environ dix minutes e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663000051</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d19be88896298dc5b23eda7ee588841afb602afee384c17eba3873bca04d350 ]]></g:image_link>
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
<title><![CDATA[ Eye Care poudre compacte 06 beige rosé 10g ]]></title>
<g:id>cb51dbfc-82f7-4787-b599-22b452dc329d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care poudre compacte 06 beige rosé 10g?cb51dbfc-82f7-4787-b599-22b452dc329d ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p>La poudre compacte ultramicronisée très haute tolérance, d'une extrême douceur est sans effet abrasif sur la peau et évite ainsi l'apparition de rougeurs ou d'intolérances.<br /><br />D’une extrême douceur à l’application, effectuée à l’aide de la houppette ou d’un pinceau, la poudre compacte matifie et unifie le teint au cours de la journée.</p>
<p>Un maquillage réussi dépend en premier lieu d’une peau parfaitement nettoyée et bien hydratée. Puis, il convient d’attendre environ dix minutes e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663000068</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1294b420788a0a0f83fb865b8bb73e9e8f9cea2cc4f22d5aeadcb905a2d0a0fa ]]></g:image_link>
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
<title><![CDATA[ Eye Care poudre compacte 07 beige doré 10g ]]></title>
<g:id>44bfa367-078c-4c98-a9f8-e8b81ef984b0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care poudre compacte 07 beige doré 10g?44bfa367-078c-4c98-a9f8-e8b81ef984b0 ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p>La poudre compacte ultramicronisée très haute tolérance, d'une extrême douceur est sans effet abrasif sur la peau et évite ainsi l'apparition de rougeurs ou d'intolérances.<br /><br />D’une extrême douceur à l’application, effectuée à l’aide de la houppette ou d’un pinceau, la poudre compacte matifie et unifie le teint au cours de la journée.</p>
<p>Un maquillage réussi dépend en premier lieu d’une peau parfaitement nettoyée et bien hydratée. Puis, il convient d’attendre environ dix minutes e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663000075</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f17234e58be3ede92cfb6cdf2e22ae003c09cd06c52759eaf63acc43fcba515 ]]></g:image_link>
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
<title><![CDATA[ Eye Care poudre compacte 08 terre de soleil 10g ]]></title>
<g:id>01331c17-21c4-4d56-82c4-c92a6595f7c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care poudre compacte 08 terre de soleil 10g?01331c17-21c4-4d56-82c4-c92a6595f7c8 ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p>La poudre compacte ultramicronisée très haute tolérance, d'une extrême douceur est sans effet abrasif sur la peau et évite ainsi l'apparition de rougeurs ou d'intolérances.<br /><br />D’une extrême douceur à l’application, effectuée à l’aide de la houppette ou d’un pinceau, la poudre compacte matifie et unifie le teint au cours de la journée.</p>
<p>Un maquillage réussi dépend en premier lieu d’une peau parfaitement nettoyée et bien hydratée. Puis, il convient d’attendre environ dix minutes e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663000082</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/14da6cba08e808534945a2efc000db9e1657e8b58861e11862261a90cc69d1df ]]></g:image_link>
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
<title><![CDATA[ Eye Care poudre compacte 10 jasmin 10g ]]></title>
<g:id>dad1820b-c83e-4666-bbb1-1e5000d4d934</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care poudre compacte 10 jasmin 10g?dad1820b-c83e-4666-bbb1-1e5000d4d934 ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p>La poudre compacte ultramicronisée très haute tolérance, d'une extrême douceur est sans effet abrasif sur la peau et évite ainsi l'apparition de rougeurs ou d'intolérances.<br /><br />D’une extrême douceur à l’application, effectuée à l’aide de la houppette ou d’un pinceau, la poudre compacte matifie et unifie le teint au cours de la journée.</p>
<p>Un maquillage réussi dépend en premier lieu d’une peau parfaitement nettoyée et bien hydratée. Puis, il convient d’attendre environ dix minutes e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663000105</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3d683087591794c654155dde782bdbca3d436b290865231968dedbe8d462008 ]]></g:image_link>
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
<title><![CDATA[ Eye cara mascara haute tolérance 200 brun 9g ]]></title>
<g:id>e12f80dc-84a2-4f3f-a0ef-77c463d5e83e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-cara mascara haute tolérance 200 brun 9g?e12f80dc-84a2-4f3f-a0ef-77c463d5e83e ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002001</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f00d1b1a302a21951eb9fee8b891603b382921773f2b5b9299982de082f2806 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 700 brun 1,1g ]]></title>
<g:id>291a7a7b-f282-403b-ba64-c80ddcc86ece</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 700 brun 1,1g?291a7a7b-f282-403b-ba64-c80ddcc86ece ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum.</p>
<p>D'une extrême douceur, au beurre de karité et à l'huile de jojoba, il permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007006</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74ec049231c57577dbbc5fca2d5b35056822be53ac0772fd27e9c130a3c951be ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 701 noir 1,1G ]]></title>
<g:id>226808b8-354c-4138-9e53-f0a027b5c46d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 701 noir 1,1g?226808b8-354c-4138-9e53-f0a027b5c46d ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum.</p>
<p>D'une extrême douceur, au beurre de karité et à l'huile de jojoba,  ce crayon permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007013</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f9e6cfc5ef890215d7093663beafce0138360e4cc7486280fdd18c59a73933d ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 702 bleu 1,1g ]]></title>
<g:id>1f798a6a-9f6f-4cdb-a196-712404bc00ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 702 bleu 1,1g?1f798a6a-9f6f-4cdb-a196-712404bc00ee ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Il permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007020</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32c07e2cd695c19c32da21d5d9a24cd36ce0e4313b6f040acf13977159132e45 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 703 parme 1,1g ]]></title>
<g:id>906d5367-f43e-40bd-b00d-6a7196bb581e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 703 parme 1,1g?906d5367-f43e-40bd-b00d-6a7196bb581e ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007037</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f9e6cfc5ef890215d7093663beafce0138360e4cc7486280fdd18c59a73933d ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 704 vert 1,1g ]]></title>
<g:id>b4477998-b16e-4046-87e2-14991b107858</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 704 vert 1,1g?b4477998-b16e-4046-87e2-14991b107858 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007044</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f9e6cfc5ef890215d7093663beafce0138360e4cc7486280fdd18c59a73933d ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 705 gris 1,1g ]]></title>
<g:id>7b229eb1-4f9a-41bb-b688-6b1fefed47a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 705 gris 1,1g?7b229eb1-4f9a-41bb-b688-6b1fefed47a6 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007051</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f9e6cfc5ef890215d7093663beafce0138360e4cc7486280fdd18c59a73933d ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 707 lichen 1,1g ]]></title>
<g:id>44000929-a533-4eca-a6b6-b0bebee4952e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 707 lichen 1,1g?44000929-a533-4eca-a6b6-b0bebee4952e ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007075</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/68e23e5abf8a102a8abef6d324e3ed9742f745257050a4841c53e70b61c24b52 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 708 outremer 1,1g ]]></title>
<g:id>b03ff7ce-1d24-4ec0-a840-827653df0b58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 708 outremer 1,1g?b03ff7ce-1d24-4ec0-a840-827653df0b58 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007082</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9f0aee5f1ccf4df7531cba3ccc0c50d3fedea90053717f174cc2b8962fdadaa9 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 710 bois doré 1,1g ]]></title>
<g:id>e9f77fcc-4602-4675-9981-aa5457f65a85</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 710 bois doré 1,1g?e9f77fcc-4602-4675-9981-aa5457f65a85 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007105</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85585e3ecc9db898b326bee07a5bcbbf3ebce1532bd3e9e60082cdf6f414c8d1 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 711 blanc 1,1g ]]></title>
<g:id>cea2a539-0dce-4955-95e6-5ec7617f22b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 711 blanc 1,1g?cea2a539-0dce-4955-95e6-5ec7617f22b7 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007112</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73b874cb9056666fca88034c6881aef7743095f19bf472494a295015f5efebb3 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 712 jade 1,1g ]]></title>
<g:id>795450df-4fcc-417a-99e1-4db34bcacf29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 712 jade 1,1g?795450df-4fcc-417a-99e1-4db34bcacf29 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007129</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/160c7b1edbf2a68e519f994fa7bc7d3a246947060888ddbe8b3c0e01fb98e948 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 713 lilas 1,1g ]]></title>
<g:id>837ade5f-c711-4484-8876-0b7471b0f412</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 713 lilas 1,1g?837ade5f-c711-4484-8876-0b7471b0f412 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007136</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0768b50fe0c7f2d80ac3103339ea0c8de0bc48a114c3aca88b1484ee55cf6733 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 714 havane 1,1g ]]></title>
<g:id>77f947cd-1c98-4fc4-9415-36b220213966</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 714 havane 1,1g?77f947cd-1c98-4fc4-9415-36b220213966 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007143</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a4336badd5a2bb878c19a058b20054163c2b6577cd6919f699e18a72fba54942 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 715 olive 1,1g ]]></title>
<g:id>df413a87-3684-46a4-8cdb-95c0ba83dc3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 715 olive 1,1g?df413a87-3684-46a4-8cdb-95c0ba83dc3f ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007150</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab39d7fbfb53f1d2cdff619d69992dcdb998ac0fdc290cf4fb596d9e5f15c233 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 716 turquoise 1,1g ]]></title>
<g:id>3b843869-cca4-44b7-a97a-7911dd119528</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 716 turquoise 1,1g?3b843869-cca4-44b7-a97a-7911dd119528 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007167</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/52c7dc0b87ac5b34ef2941be010724c10fce40b0cd4d804a0c08145a71a0d700 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 717 ciel 1,1G ]]></title>
<g:id>3feb7f57-45c7-4d23-8f1b-b57067c8e5d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 717 ciel 1,1g?3feb7f57-45c7-4d23-8f1b-b57067c8e5d1 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayn Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007174</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bab43e2e51860e18331a39367ebcbdfa6954207f75bfbee152164bfd62326f32 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 718 émeraude 1,1g ]]></title>
<g:id>b55fb633-f430-403b-9734-700b8a273006</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 718 émeraude 1,1g?b55fb633-f430-403b-9734-700b8a273006 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007181</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2067ab02174e029c0f646ef808d61c7232ae6c485ef87d9657bfac794176bf09 ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon liner yeux 719 prune 1,1G ]]></title>
<g:id>95b7d464-6a8d-4cbb-9f1b-39aceaf79d63</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon liner yeux 719 prune 1,1g?95b7d464-6a8d-4cbb-9f1b-39aceaf79d63 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007198</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f359e2596258e9b02ab7e0e03bd4e6323d880d7ca92b7652d7eb20d50a3bf27c ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon sourcils 30 noisette 1.1g ]]></title>
<g:id>ce3bd712-6d38-4b85-af32-eec1faeba2ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon sourcils 30 noisette 1.1g?ce3bd712-6d38-4b85-af32-eec1faeba2ab ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eye Care Crayon Sourcils sans Paraben, sans parfum, à la cire d'abeille et à l'huile de palme.</p>
<p>Il souligne harmonieusement les sourcils.</p>
<p>Un maquillage des sourcils des peaux sensibles et yeux sensibles, porteurs de lentilles de contact.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662000304</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d13f33fbe41ed0ab0113f903d249c4a52a3bff038712d2e18d6f796cca74c9e ]]></g:image_link>
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
<title><![CDATA[ Eye care crayon sourcils 31 taupe 1.1g ]]></title>
<g:id>439315bf-6338-43ba-8daf-187fa2fb4c0d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care crayon sourcils 31 taupe 1.1g?439315bf-6338-43ba-8daf-187fa2fb4c0d ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eye Care Crayon Sourcils Sans Paraben, sans parfum, à la cire d'abeille et à l'huile de palme.</p>
<p>Il souligne harmonieusement les sourcils.</p>
<p>Un maquillage des sourcils des peaux sensibles et yeux sensibles, porteurs de lentilles de contact.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662000311</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ccb8406ca2850365b7763e78c433ae2321834cc07de5a26b7873548bc6fa89aa ]]></g:image_link>
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
<title><![CDATA[ Eye care eyeliner 300 brun 5g ]]></title>
<g:id>c3337d5e-9091-4873-b4ff-7e48207c58e5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care eyeliner 300 brun 5g?c3337d5e-9091-4873-b4ff-7e48207c58e5 ]]></link>
<g:price><![CDATA[ 1135.00 EUR ]]></g:price>
<description><![CDATA[ <p>Toutes les formules sont ultramicronisées pour éviter tout risque d'abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d'utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de contact.</p>
<p>Eye Care Eyeliner 5 g, sans alcool, sans parfum, anti-effritement après séchage, permet de modifier ou de corriger la forme de l'oeil au moyen d'un trait net et fin.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662003008</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1175fc4de8dfd60798daeb6527b05412e6a0370f382009852410d468a5ce5785 ]]></g:image_link>
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
<title><![CDATA[ Eye care eyeliner 301 noir 5g ]]></title>
<g:id>3cafdb88-b361-40ff-a8dd-5f4f9f718858</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care eyeliner 301 noir 5g?3cafdb88-b361-40ff-a8dd-5f4f9f718858 ]]></link>
<g:price><![CDATA[ 1135.00 EUR ]]></g:price>
<description><![CDATA[ <p>Toutes les formules sont ultramicronisées pour éviter tout risque d'abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d'utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de contact.</p>
<p>Eye Care Eyeliner 5 g, sans alcool, sans parfum, anti-effritement après séchage, permet de modifier ou de corriger la forme de l'oeil au moyen d'un trait net et fin.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662003015</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/64a47a215216c7a285ed13cf331d303c620d5f4291572f210e87a1ce6db8c8aa ]]></g:image_link>
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
<title><![CDATA[ Eye care eyeliner 302 bleu 5g ]]></title>
<g:id>138bb14a-0c0a-4fd6-96ce-6ffdcf378887</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care eyeliner 302 bleu 5g?138bb14a-0c0a-4fd6-96ce-6ffdcf378887 ]]></link>
<g:price><![CDATA[ 1135.00 EUR ]]></g:price>
<description><![CDATA[ <p>Toutes les formules sont ultramicronisées pour éviter tout risque d'abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d'utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de contact.</p>
<p>Eye Care Eyeliner 5 g, sans alcool, sans parfum, anti-effritement après séchage, permet de modifier ou de corriger la forme de l'oeil au moyen d'un trait net et fin.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662003022</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8ffaa1ea9fecbec1a7f8f93f0f9ab1de1fe664dec7b3e7c624a72df192bceaaa ]]></g:image_link>
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
<title><![CDATA[ Eye care eyeliner feutre 320 brun 0.8ml ]]></title>
<g:id>f9c5b962-174b-4212-b192-807537616409</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care eyeliner feutre 320 brun 0.8ml?f9c5b962-174b-4212-b192-807537616409 ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les eyeliners feutre soulignent la base des cils d'un geste simple et facile pour un maquillage sûr du contour de l'oeil.</p>
<p>Sans paraben, sans parfum, sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662003206</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5640e0870c3ec4b8e84c4dd5b37ffce7a7f3a1e1d17775ae30b5211035a55608 ]]></g:image_link>
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
<title><![CDATA[ Eye care eyeliner feutre 321 noir 0.8ml ]]></title>
<g:id>a2a000e7-4b48-47c4-937e-dd4c52d58c1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care eyeliner feutre 321 noir 0.8ml?a2a000e7-4b48-47c4-937e-dd4c52d58c1c ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les eyeliners feutre soulignent la base des cils d'un geste simple et facile pour un maquillage sûr du contour de l'oeil.</p>
<p>Sans paraben, sans parfum, sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662003213</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6c4600a0db8752790317fcbe554ff902199faced8ec0ad34e176aff076c2b03 ]]></g:image_link>
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
<title><![CDATA[ Eye care liner yeux 709 aigue marine 1.1g ]]></title>
<g:id>593024c7-7a9f-44b8-b571-db5957b23356</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care liner yeux 709 aigue marine 1.1g?593024c7-7a9f-44b8-b571-db5957b23356 ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Crayons Liner Yeux de EYE CARE sont haute tolérance, sans paraben, sans parfum, d'une extrême douceur, au beurre de karité et à l'huile de jojoba.</p>
<p>Le crayon Liner permet d'intensifier le regard des yeux les plus sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007099</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/63d46e8142b66ccecdb444138df311d359edaa0fb72949f7607cb5bedcde3496 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 201 noir 9g ]]></title>
<g:id>f0f7045e-93e1-4230-b190-7a8aa6eef41f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 201 noir 9g?f0f7045e-93e1-4230-b190-7a8aa6eef41f ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002018</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f00d1b1a302a21951eb9fee8b891603b382921773f2b5b9299982de082f2806 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 202 bleu 9g ]]></title>
<g:id>5fbc499f-c6d4-48b6-9b4c-9579121b8d21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 202 bleu 9g?5fbc499f-c6d4-48b6-9b4c-9579121b8d21 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002025</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f00d1b1a302a21951eb9fee8b891603b382921773f2b5b9299982de082f2806 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 203 outremer 9g ]]></title>
<g:id>2c68e34c-7d05-487f-b84d-5ad0df477d1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 203 outremer 9g?2c68e34c-7d05-487f-b84d-5ad0df477d1c ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002032</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b1dbedc87b79324fa976a0879dcb0a0d26e320995572882c8bf01bb2a7e9be25 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 207 vert 9g ]]></title>
<g:id>8cd09d13-5e38-4a05-b513-5a4dc79f9626</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 207 vert 9g?8cd09d13-5e38-4a05-b513-5a4dc79f9626 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002070</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/46cd20117958a29410fe48693e0f828a6d5975eec36d68ad55fda9de96eba0d6 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 208 saphir 9g ]]></title>
<g:id>e60f6e1c-438b-42c1-ae75-c6f6d67a9e80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 208 saphir 9g?e60f6e1c-438b-42c1-ae75-c6f6d67a9e80 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002087</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f00d1b1a302a21951eb9fee8b891603b382921773f2b5b9299982de082f2806 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 211 anthracite 9g ]]></title>
<g:id>4a581a5c-463d-4e5f-9777-6cc9dd2e275f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 211 anthracite 9g?4a581a5c-463d-4e5f-9777-6cc9dd2e275f ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002117</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f00d1b1a302a21951eb9fee8b891603b382921773f2b5b9299982de082f2806 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara 212 bordeaux 9g ]]></title>
<g:id>5af423c0-e570-49e1-8d32-e92f32984f48</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara 212 bordeaux 9g?5af423c0-e570-49e1-8d32-e92f32984f48 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce mascara haute tolérance, très peu chargé en cire, sans parfum, compatible avec les lentilles de contact, anti-effritement, allonge les cils des yeux, même les plus sensibles.</p>
<p>Toutes les formules sont ultramicronisées pour éviter tout risque d’abrasion et les flaconnettes, brosses (garanties sans nickel) et pinceaux sont stérilisés avant conditionnement afin de garantir une sécurité d’utilisation optimale.</p>
<p>Elles sont particulièrement recommandées aux porteuses de lentilles de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662002124</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f00d1b1a302a21951eb9fee8b891603b382921773f2b5b9299982de082f2806 ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara allongeant 3000 brun 6g ]]></title>
<g:id>b4a27465-482c-49c1-a564-ff0bc7a2229a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara allongeant 3000 brun 6g?b4a27465-482c-49c1-a564-ff0bc7a2229a ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Mascara formulé pour allonger les cils et développer leur volume dans le respect des yeux sensibles et du port de lentilles de contact. Formule onctueuse et douce, rigoureusement mise au point selon les principes exclusifs de bio-inertie des formulations.</p>
<p>Sa formule est sans paraben, sans chrome et sans parfum.</p>
<p>Enrichi en propolis raffinée pour purifier la racine du cil et en vitamine E pour renforcer sa vigueur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662030004</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73a1b03ea51a545b1b9fc75547abd73656146c887aacdbb33f51819b36fbc85d ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara allongeant 3001 noir 6g ]]></title>
<g:id>59e552bc-5bf9-458e-9a96-167df77eb41c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara allongeant 3001 noir 6g?59e552bc-5bf9-458e-9a96-167df77eb41c ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Mascara formulé pour allonger les cils et développer leur volume dans le respect des yeux sensibles et du port de lentilles de contact. Formule onctueuse et douce, rigoureusement mise au point selon les principes exclusifs de bio-inertie des formulations.</p>
<p>Sa formule est sans paraben, sans chrome et sans parfum. Enrichi en propolis raffinée pour purifier la racine du cil et en vitamine E pour renforcer sa vigueur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662030011</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73a1b03ea51a545b1b9fc75547abd73656146c887aacdbb33f51819b36fbc85d ]]></g:image_link>
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
<title><![CDATA[ Eye care mascara allongeant 3002 bleu 6g ]]></title>
<g:id>2c206115-4d40-4869-97c8-46f240591068</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mascara allongeant 3002 bleu 6g?2c206115-4d40-4869-97c8-46f240591068 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Mascara formulé pour allonger les cils et développer leur volume dans le respect des yeux sensibles et du port de lentilles de contact. Formule onctueuse et douce, rigoureusement mise au point selon les principes exclusifs de bio-inertie des formulations.</p>
<p>Sa formule est sans paraben, sans chrome et sans parfum. Enrichi en propolis raffinée pour purifier la racine du cil et en vitamine E pour renforcer sa vigueur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662030028</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73a1b03ea51a545b1b9fc75547abd73656146c887aacdbb33f51819b36fbc85d ]]></g:image_link>
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
<title><![CDATA[ Eye care mini vernis cosmos n°1507 5ml ]]></title>
<g:id>bba28fab-6eca-427e-9bab-704ccf5cd188</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mini vernis cosmos n°1507 5ml?bba28fab-6eca-427e-9bab-704ccf5cd188 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le vernis à ongles haute tolérance ultra d'Eye care est enrichie de deux actifs aux propriétés particulièrement adaptées aux besoins de l'ongle :</p>
<p>- le silicium qui renforce et protège,</p>
<p>- l'urée qui lutte contre les effets de dessèchement et évite le développement d'un ongle épais.</p>
<p>Grâce à sa texture nouvelle, l'étalement est remarquable à tel point qu'une couche peut suffire. Il a une très bonne tenue, est peu sensible aux chocs et sèche rapide.</p>
<p>Sa formule est sans ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663005070</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cd91e82390d6676af28f747dbf01093354564ecbd5c677064bb2a518dc631d11 ]]></g:image_link>
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
<title><![CDATA[ Eye care mini vernis incolore n° 1501 5ml ]]></title>
<g:id>9c229901-c46f-440c-bb87-163d5a49ea9d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care mini vernis incolore n° 1501 5ml?9c229901-c46f-440c-bb87-163d5a49ea9d ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le vernis à ongles haute tolérance ultra d'Eye care est enrichie de deux actifs aux propriétés particulièrement adaptées aux besoins de l'ongle : </p>
<p>- le silicium qui renforce et protège,</p>
<p>- l'urée qui lutte contre les effets de dessèchement et évite le développement d'un ongle épais.</p>
<p>Grâce à sa texture nouvelle, l'étalement est remarquable à tel point qu'une couche peut suffire. Il a une très bonne tenue, est peu sensible aux chocs et sèche rapide.</p>
<p>Sa formule est san ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663005018</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c91e01feb56fcbe47c8e60772cef3b1a4c4354734939ce4571c29acaad09233 ]]></g:image_link>
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
<title><![CDATA[ Eye care sourcils 32 flanelle 1.1g ]]></title>
<g:id>20fb19f3-8466-4e85-b9c2-c1d570b318e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care sourcils 32 flanelle 1.1g?20fb19f3-8466-4e85-b9c2-c1d570b318e8 ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eye Care Crayon Sourcils Sans Paraben, sans parfum, à la cire d'abeille et à l'huile de palme, soulignent harmonieusement les sourcils.</p>
<p>Pour un maquillage des sourcils des peaux sensibles et yeux sensibles, porteurs de lentilles de contact.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662000328</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c4edf4383e47249a8eaca2f11746afcf071ddcf053518873ba2535f8cf78cce0 ]]></g:image_link>
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
<title><![CDATA[ Eye care sourcils 33 brun foncé 1.1g ]]></title>
<g:id>451378fc-4b87-4503-acba-f1607373961a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care sourcils 33 brun foncé 1.1g?451378fc-4b87-4503-acba-f1607373961a ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eye Care Crayon Sourcils Sans Paraben, sans parfum, à la cire d'abeille et à l'huile de palme, soulignent harmonieusement les sourcils.</p>
<p>Pour un maquillage des sourcils des peaux sensibles et yeux sensibles, porteurs de lentilles de contact.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662000335</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb7b8361a9cd92155d6d7af7c321ec1964ed6f8e4efd40a0a6013bad2d48afa7 ]]></g:image_link>
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
<title><![CDATA[ Eye care vernis à ongles baie rose n° 1504 5ml ]]></title>
<g:id>8a8bb2c3-30a4-4940-8f0f-3f21565483e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eye-care vernis à ongles baie rose n° 1504 5ml?8a8bb2c3-30a4-4940-8f0f-3f21565483e7 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le vernis à ongles haute tolérance Ultra d'Eye care est enrichie de deux actifs aux propriétés particulièrement adaptées aux besoins de l'ongle :</p>
<p>- le silicium qui renforce et protège,</p>
<p>- l'urée qui lutte contre les effets de dessèchement et évite le développement d'un ongle épais.</p>
<p>Grâce à sa texture nouvelle, l'étalement est remarquable à tel point qu'une couche peut suffire. Il a une très bonne tenue, est peu sensible aux chocs et sèche rapide.</p>
<p>Sa formule est sans ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532663005049</g:gtin>
<g:brand><![CDATA[ CONTAPHARM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8a01b44cabeb6b100c5def80d63845bc1ec2e46dbc5d6496e08fdd939233d6a0 ]]></g:image_link>
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
<title><![CDATA[ Eyecar Ombre à Paupière Jumbo Waterproof Praline 753 ]]></title>
<g:id>5640e556-2c96-4a32-95c6-6b8c02f665cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/eyecar-ombre à paupière jumbo waterproof praline 753?5640e556-2c96-4a32-95c6-6b8c02f665cd ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Eye Care complète sa collection d'ombres à paupières avec ses Crayons Jumbo Ombres à paupières.<br />La formule des Ombres à paupières Jumbo contient du Silicium qui contribue à tonifier le tissu de la paupière ( tissu très fin) et permet aussi de garder son élasticité. Enrichi en vitamine E et F, elles possèdent une forte propriétés anti-oxydantes et luttent ainsi contre le vieillissement.<br />Les Ombres à paupières Jumbo sont waterproof avec une tenue longue durée. Avec une palette de 10 t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3532662007532</g:gtin>
<g:brand><![CDATA[ ECRINAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/523911b25d5584d99041bc0870cd161141c6c147d4803a1523eaa28610201323 ]]></g:image_link>
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
<title><![CDATA[ FILORGA OPTIM EYES 15ML BRI  ]]></title>
<g:id>07f33959-2a1c-4aa1-92ec-bbf0fc84fb9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-optim eyes 15ml bri ?07f33959-2a1c-4aa1-92ec-bbf0fc84fb9f ]]></link>
<g:price><![CDATA[ 3790.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550014814</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e4489034a32cfb1f8498fc5f2879b958affc3a02d1375e900a3c2eec4abf2e6 ]]></g:image_link>
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
<title><![CDATA[ FILORGA TIME FILLER 5XP GEL CR 50ML ]]></title>
<g:id>074fffb3-ecc2-487b-b8af-46777c944580</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time filler 5xp gel cr 50ml?074fffb3-ecc2-487b-b8af-46777c944580 ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>TIME-FILLER 5XP, FILORGA réinvente sa crème anti-ride best-seller qui agit simultanément sur 5 types de rides, grâce au cœur de formule 5XP inspiré de 5 techniques de médecine esthétique.&nbsp;<br><br>Disponible en 2 textures, sous sa forme crème [peaux normales à sèches] ou gel-crème [peaux mixtes à grasses], TIME-FILLER 5XP s'inspire de 5 expertises de médecine esthétique pour lisser les 5 types de rides, pour lisser les 5 types de rides.<br><br><strong>/Rides d’expression</strong><br><br>L ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550016467</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3433d0fa059dfb0ff113ef748b0891ced441ddcfd1892c0770d99776f8d680e9 ]]></g:image_link>
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
<title><![CDATA[ FITOCOLD GEL FROID 250 ML ]]></title>
<g:id>193d2d88-8c64-4ee0-88e2-4e8997306f6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fitocold-gel froid 250 ml?193d2d88-8c64-4ee0-88e2-4e8997306f6c ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8437002581015</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/488bca6bd643ec1760e53bd30473f58cc0643e626c6eeede26d85d61fa0e6963 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN DES JAMBES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ FIXODENT Pro Complete Crème Adhésive Pour Prothèses Totales & Partielles Fraîcheur 70,5 g ]]></title>
<g:id>25bbbe0d-0393-4471-922d-758416fdf3dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro complete crème adhésive pour prothèses totales & partielles fraîcheur 70,5 g?25bbbe0d-0393-4471-922d-758416fdf3dc ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Fixation forte, protection et confort toute la journée</p></li><li><p>Fixodent Pro Complete Soin Confort est le soin classique de Fixodent Pro qui assure un grand confort et une bonne tenue tout au long de la journée.</p></li><li><p>Il possède un goût légèrement mentholé.</p></li><li><p>Assure une tenue efficace de votre appareil tout au long de la journée.</p></li><li><p>Empêche les aliments de se coincer sous votre appareil, par la formation d' une barrière étanche.</p></li><li><p>V ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216621038</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1279ab1ac70004b1a96cfa8afbeb7aa728e62898ad159e19dee7d4825f26301c ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE BUCCO-DENTAIRE > PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ FLORAME Homme Huile à Barbe Adoucissante BIO 50ml ]]></title>
<g:id>58e673d1-4762-4194-941d-d775a3c43395</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/florame-homme huile à barbe adoucissante bio 50ml?58e673d1-4762-4194-941d-d775a3c43395 ]]></link>
<g:price><![CDATA[ 1170.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>FLORAME Homme Huile à Barbe Adoucissante BIO 50ml</strong> assouplit les poils et la peau du visage grâce à sa synergie de 5 huiles végétales bio. Adapté à<strong> tous les types de barbe</strong>, ce soin apporte vigueur et aide à réduire les sensations de tiraillement.</p>
<p><span>Votre barbe, parfumée aux notes fraîches et boisées, est douce et resplendissante de beauté.</span></p>
<p><br /><strong>100% du total est d’origine naturelle</strong><br /><strong>99% du total des ingréd ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3516170025677</g:gtin>
<g:brand><![CDATA[ FLORAME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bfa7084ba4a6fb1885f0b3f013f5b78fb621b2645319d708a719a452c5c1b75f ]]></g:image_link>
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
<title><![CDATA[ FLORAME SPRAY ANTI-MOUSTIQUE Bio 90ml ]]></title>
<g:id>de2c3e0a-4347-4945-90ae-63cea8172a99</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/florame-spray anti-moustique bio 90ml?de2c3e0a-4347-4945-90ae-63cea8172a99 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <strong>Spray Anti-Moustiques 100% Bio Florame</strong>, à l’efficacité prouvée, est l’allié idéal pour éloigner les moustiques et éviter leurs piqûres. Il vous accompagnera dans tous vos voyages.&nbsp;</p><p>Grâce à son complexe d’huiles essentielles 100% bio (Citronnelle, Lavandin, Lemongrass, Eucalyptus, Palmarosa, Menthe poivrée et Patchouli) et son alcool bio de Lavande, il repousse en douceur les moustiques tout en laissant une senteur légère et agréable. S’utilise sur les vêtements  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3516170023949</g:gtin>
<g:brand><![CDATA[ FLORAME ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3cbd74753ad698405cf68d65c71e6ffcb8af4eb4ce147854927716bbc4cd59c6 ]]></g:image_link>
<g:product_type><![CDATA[ PROTECTION MOUSTIQUES ET AUTRES INSECTES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ FORCAPIL 60 GEL CHEV ONGL ]]></title>
<g:id>0ce234b2-6c2b-4a7e-b518-cb38c769de44</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/forcapil-60 gel chev ongl?0ce234b2-6c2b-4a7e-b518-cb38c769de44 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548171172</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1ea5752548707810ddbf5eca8f109b50056e65c874b7a8249817daad1904f300 ]]></g:image_link>
<g:product_type><![CDATA[ PRESERVATIFS ET GELS LUBRIFIANTS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ FRONTLINE SPRAY 100 ML ]]></title>
<g:id>b7899764-58e6-4fc2-9c31-3ac6d5f3f408</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/frontline-spray 100 ml?b7899764-58e6-4fc2-9c31-3ac6d5f3f408 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Affections à parasites sensibles au Fipronil chez les chiens et chats de moins de 5 kg. Utiliser Frontline Spray 100 ml.</p>
<p>Chez le chien et le chat : élimination des poux broyeurs.</p>
<p>- Chez le chien : traitement et prévention des infestations par les puces et les tiques.</p>
<p>- Chez le chat : traitement et prévention des infestations par les puces.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661103068594</g:gtin>
<g:brand><![CDATA[ Boehringer Ingelheim ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb126e3a16b3f9e00d08e64df1085a21e47fae4b7c8a69231d37c87899a0bcce ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Céréales Protéines Shot Chocolat Amande ]]></title>
<g:id>41428d63-6380-4067-b749-6a2d6c33c4f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre céréales protéines shot chocolat amande?41428d63-6380-4067-b749-6a2d6c33c4f2 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Une délicieuse barre Protéines shot hyper-croustillante au chocolat et à l'amande</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069005419</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d5ec3aeb385b497a1df96339e8dd7624abcf01a5cb6f8dcbf844404d09def38 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Chocolat Fruits Rouges 100g ]]></title>
<g:id>dbcebdbd-7f91-4582-a3ff-482228696aaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas chocolat fruits rouges 100g?dbcebdbd-7f91-4582-a3ff-482228696aaa ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de fruits rouges</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006119</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb30526f0452ec02e90d9e4c653cca34075e551be96492604e15b7c1084cad03 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Light Caramel Crispy 70g ]]></title>
<g:id>cb460ddc-091c-4cfc-9bae-09da95d18fd1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas light caramel crispy 70g?cb460ddc-091c-4cfc-9bae-09da95d18fd1 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Barre-repas Light croustillante au délicieux goût de caramel</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006829</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0dcdb9890ac82adce79472b298c3c8e982f65d271bc3deaf908f123894644ab5 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Light Crispy Peanut 70 g ]]></title>
<g:id>54820c04-95da-4775-9a4e-8264de44559b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas light crispy peanut 70 g?54820c04-95da-4775-9a4e-8264de44559b ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Barre-repas Light croustillante au délicieux goût beurre de cacahuète</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006997</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/437f5907aa54243f2f2055cce79c725e5eb3c66674ac838f5b87a3de7ba85500 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Light Sesam Chocolat 70g  ]]></title>
<g:id>2c604324-9d4f-4334-9b71-d4080528e74d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas light sesam chocolat 70g ?2c604324-9d4f-4334-9b71-d4080528e74d ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Barre-repas Light croustillante au délicieux goût de sésame</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069001602</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69bca8936af579d59922c1beaa9c61c601750705978c24d3b437f3229a0523a6 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Light Tiramisu 70g ]]></title>
<g:id>62f70a16-67b4-433c-8534-f8ebbe39d606</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas light tiramisu 70g?62f70a16-67b4-433c-8534-f8ebbe39d606 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Barre-repas Light croustillante au délicieux goût tiramisu</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006959</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/07f8af8f69071672cc1e2d9c64e9c6cf719bfcdfae82e111b7fad9d26a047e73 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Light Vanille Chocolat 70g ]]></title>
<g:id>ceca63ef-e026-4731-b1b4-c289cbf13d42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas light vanille chocolat 70g?ceca63ef-e026-4731-b1b4-c289cbf13d42 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Barre-repas Light croustillante au délicieux goût de vanille</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006157</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/86438ae4bd5eca9d67d299c06360e3a7ead9d0f5f8816ff75ae3fe569aeeed81 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Original Banane Chocolat 100g ]]></title>
<g:id>249f7922-879d-4259-9d71-49ab1c5e4720</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas original banane chocolat 100g?249f7922-879d-4259-9d71-49ab1c5e4720 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de banane</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770007832245</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9b7fb21db757c503ff4fea09d71f385b611d87e19a95926eada8518698d2cf6c ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Original Chocolat Noix de Coco 100g ]]></title>
<g:id>e2ecc13e-e610-4461-acb3-b384b81dff97</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas original chocolat noix de coco 100g?e2ecc13e-e610-4461-acb3-b384b81dff97 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de noix de coco</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770007832238</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/233d1f87d755d0fbde0b129bd53cd5d15f151006a0c42fabbfdff48650bba7c4 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Original Citron 100g ]]></title>
<g:id>36b2a5f7-4835-4d45-aff7-4681aad2a1f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas original citron 100g?36b2a5f7-4835-4d45-aff7-4681aad2a1f2 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de citron</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069000452</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a599dd9eb1a51ae89b1e7534f5fc6745f568cff31340c20ceea3d2c342962db ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Original Double Chocolat 100g ]]></title>
<g:id>765291a2-5fba-448e-8429-ea1a8613612b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas original double chocolat 100g?765291a2-5fba-448e-8429-ea1a8613612b ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de chocolat</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770007832030</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4366077d9bfe18d1127c73c9c93c3f15e4182ae52b64ee097924683d3232babf ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Original Fruits Rouges 100g ]]></title>
<g:id>33d865d7-2d06-4749-86d8-6e558b6816e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas original fruits rouges 100g?33d865d7-2d06-4749-86d8-6e558b6816e2 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de fruits rouges</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770007832153</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/084c4985e3d80be8fe6147b5d1feda2b992ff1b3c47f9b5ce68276054f50f6d7 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Original Pomme Cranberry 100g ]]></title>
<g:id>16c6a7b9-7523-44da-b154-de2849629292</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas original pomme cranberry 100g?16c6a7b9-7523-44da-b154-de2849629292 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de pomme et cranberry</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069000483</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a180ec9891e4a94d9b59ecedfdd5106f8578012b93b670aab10b74bec12c7eae ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Repas Pomme Cranberry 100g ]]></title>
<g:id>7cb8194e-07c0-4d65-85d7-3b70545fce23</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas pomme cranberry 100g?7cb8194e-07c0-4d65-85d7-3b70545fce23 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des repas protéinés au délicieux goût de pomme et cranberry</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006539</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36b36dd5cfa80829ccae64156ebdb297142f99896c6205ee0b544c7573e01a43 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre Super Nuts Amandes Cacahuètes 40g ]]></title>
<g:id>440387e2-2c14-43f3-97ed-44d4657709a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre super nuts amandes cacahuètes 40g?440387e2-2c14-43f3-97ed-44d4657709a9 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des barres ultra-gourmandes aux amandes et cacahuètes</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006744</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/17c407f071eb229584591da2d3d0cc128119ae139e7424f164110d391628c9ae ]]></g:image_link>
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
<title><![CDATA[ Feed Barre kéto Energie Chocolat Noisette 30g ]]></title>
<g:id>a0402a5a-125b-4c5a-8f15-b025008d27d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre kéto energie chocolat noisette 30g?a0402a5a-125b-4c5a-8f15-b025008d27d3 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Des barres ultra-gourmandes aux noisettes et chocolat</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069005532</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3f7802334b765cd121790cce55aed7f2ff9cdb34c8796e562d485ca486e8691 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre repas Light Chocolat Brownies 70g ]]></title>
<g:id>f22ef110-30e9-4a28-9450-e7e621273c56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre repas light chocolat brownies 70g?f22ef110-30e9-4a28-9450-e7e621273c56 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Barre-repas Light au délicieux goût brownie</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006195</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/643e1ec747fe33831582ca1754c7307d6731753d60c138c9a8d9094b6006b6c4 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre-vegan Protéines Shot Double Caramel  ]]></title>
<g:id>1959dce0-d78f-4885-a217-9c3cff1bb161</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre-vegan protéines shot double caramel ?1959dce0-d78f-4885-a217-9c3cff1bb161 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Une délicieuse barre Protéines shot hyper-moelleuse au caramel</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069005860</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0f3871312dc4b94234615288025257d317c7b6c48719c9dc3761622ea45be798 ]]></g:image_link>
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
<title><![CDATA[ Feed Barre-vegan Protéines Shot Extra Cacahuètes 55g ]]></title>
<g:id>b41b2bc9-5ae7-4b87-990b-20023f131bea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-barre-vegan protéines shot extra cacahuètes 55g?b41b2bc9-5ae7-4b87-990b-20023f131bea ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p>La barre Protéines Shot. est un encas sain, hyperprotéiné et sans sucre. Elle est conçue pour la construction et récupération musculaire, et permet ainsi de couper sainement une petite faim. À tout moment de la journée, au petit déjeuner, avant ou après le sport : faites le plein de protéines pour rester en forme, vous dépasser, performer et progresser</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069005907</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a4f7e0980a58331ff595141386bfe1bf19cf8bced791e449e3dc79c80eb48868 ]]></g:image_link>
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
<title><![CDATA[ Feed Raw Barre Super Nuts Chocolat Noisette 40g ]]></title>
<g:id>632e404e-c809-4c03-8ec0-5848941be8f8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-raw barre super nuts chocolat noisette 40g?632e404e-c809-4c03-8ec0-5848941be8f8 ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>De délicieuses barres à la pâte de dattes et noisette</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069006867</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b2afa9c5aadd5a1d8a40efdaf442bc958c021f9f022c0bbae5727585371865b ]]></g:image_link>
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
<title><![CDATA[ Feed Raw-barre Cacahuète 40g ]]></title>
<g:id>1ec61e61-6fd5-4726-a19a-7d2ecab1494d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feed-raw-barre cacahuète 40g?1ec61e61-6fd5-4726-a19a-7d2ecab1494d ]]></link>
<g:price><![CDATA[ 290.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>De délicieuses barres à la pâte de dattes et cacahuète</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3665069005495</g:gtin>
<g:brand><![CDATA[ FEED ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7434a1e4bc81bff5dbf525ddcb789827e7cb85aae58c1c38c9580c2b9e205e3b ]]></g:image_link>
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
<title><![CDATA[ Feliway Optimum Diffuseur + recharge 48 ml ]]></title>
<g:id>f187f35b-6145-487f-9484-48c686c1dc11</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feliway-optimum diffuseur + recharge 48 ml?f187f35b-6145-487f-9484-48c686c1dc11 ]]></link>
<g:price><![CDATA[ 3260.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Spécialement développé pour les “amoureux des chats” et bénéficiant des dernières avancées scientifiques, FELIWAY <em>Optimum</em> est le meilleur FELIWAY jamais conçu.</span></p>
<p>FELIWAY <em>Optimum</em> est la solution de phéromonothérapie la plus avancée pour aider à résoudre les principaux signes de stress chez le chat et à assurer bien-être et sérénité en toutes circonstances.</p>
<ul><li><span></span>Complexe de phéromones de nouvelle génération</li>
<li><span></span>Satisfacti ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3411113030445</g:gtin>
<g:brand><![CDATA[ Feliway ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fb780f22eb6e21db3bf5acc679cd5b1badfa4112e50b5164f8c56fedb975017d ]]></g:image_link>
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
<title><![CDATA[ Feliway Optimum Recharge ]]></title>
<g:id>0ed5282c-61b6-45e9-875f-1eeaabd26d2c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/feliway-optimum recharge?0ed5282c-61b6-45e9-875f-1eeaabd26d2c ]]></link>
<g:price><![CDATA[ 2915.00 EUR ]]></g:price>
<description><![CDATA[ <p>FELIWAY <em>Optimum</em> est la meilleure solution FELIWAY jamais créée pour aider à résoudre la plupart des signes de stress et garantir une sérénité renforcée :</p>
<ul><li><span></span>Complexe de phéromones de nouvelle génération</li>
<li><span></span>Satisfaction globale des propriétaires de chat 9,1/10</li>
<li><span></span>93% des utilisateurs ont constaté une plus grande sérénité chez leur chat</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3411113030452</g:gtin>
<g:brand><![CDATA[ Feliway ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c5d6cee9b670edf7910051937cd45044173cff1c9fab603339e1b72b22a31eed ]]></g:image_link>
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
<title><![CDATA[ Fertilia Conception Femme 30 Sachets ]]></title>
<g:id>12abdcd9-a882-4a70-8715-1b515bc1e1fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fertilia-conception femme 30 sachets?12abdcd9-a882-4a70-8715-1b515bc1e1fd ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <div class="contents active" id="product_description">
<p>FERTILIA® Conception Femme est un complément alimentaire pré-conceptionnel à base de Myo-inositol, Acide folique, Vitamines et minéraux pour favoriser une fertilité féminine normale et optimiser les chances de concevoir. 100% naturel, sans hormones.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225641367</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b83c3e970f0bf60277870f2c5478f8973595a24d54459d448d2b1522d23a87c ]]></g:image_link>
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
<title><![CDATA[ Fertilia Conception Homme 30 Sachets ]]></title>
<g:id>b97d2e5c-72d5-4c8c-93df-8985c2bdd35f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fertilia-conception homme 30 sachets?b97d2e5c-72d5-4c8c-93df-8985c2bdd35f ]]></link>
<g:price><![CDATA[ 2260.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Fertilia Conception Homme</span><span> est un complément alimentaire préconceptionnel à base d'Acétyl-L-Carnitine, Coenzyme Q10, vitamines, minéraux et acides aminés, avec édulcorant, pour la </span><span>fertilité masculine</span><span> et la qualité des spermatozoïdes.</span></p>
<ul><li>Favorise une fertilité et une reproduction normales¹</li>
<li>Maintien de la qualité spermatique²</li>
<li>Acétyl-L-Carnitine, Coenzyme Q10 (Kaneki Ubiquinol) + Taurine, Arginine + Vitamines &amp; Min ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225641374</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cefbd6d530053949282243f574cd867c75533f48aa3ff9e2a1497c6790314843 ]]></g:image_link>
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
<title><![CDATA[ Filorga Age Purify masque 75ml ]]></title>
<g:id>c8919109-70a9-47ed-a5d0-9f80159d91a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-age purify masque 75ml?c8919109-70a9-47ed-a5d0-9f80159d91a9 ]]></link>
<g:price><![CDATA[ 4590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez Age-Purify Mask, un masque visage formulé pour répondre aux besoins des peaux mixtes à grasses grâce à sa double action anti-âge et anti-imperfections. Ses acides micro-peeling et sa formule enrichie en zinc permet d’agir sur l’apparence des pores, les brillances, des boutons et les points noirs pour une peau plus apaisée et hydratée.</span></p>
<div class="more">
<p><span>Correction rides [expertise médecine esthétique]</span></p>
<p>Le HYALURO-YOUTH CX renferme un trio d’act ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009605</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ffde9d029de9d369fd294ccc47fe40fb686b675348dc8b6816721782b2187d79 ]]></g:image_link>
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
<title><![CDATA[ Filorga Age-Purify Gel Nettoyant Lissant Purifiant 150 ml ]]></title>
<g:id>825f2a52-2782-4e04-bc31-8c7101ff2adc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-age-purify gel nettoyant lissant purifiant 150 ml?825f2a52-2782-4e04-bc31-8c7101ff2adc ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga Age-Purify Gel Nettoyant Lissant Purifiant 150 ml est un gel nettoyant visage lissant et purifiant effet peau neuve intensif.</p>
<p>Sa formule est enrichie en actifs lissants et purifiants pour une peau simultanément plus lisse et plus nette :</p>
<ul><li>Correction des rides : Le Hyaluro-Youth CX renferme de l'acide hyaluronique repulpant, un peptide défroissant et un glycopeptide comblant pour lisser les rides et corriger les signes de l'âge.</li>
<li>Correction des imperfections : ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009636</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a50ef7dd1d00e818eb96c4bda26d4a507bb89ba608717edec2d99969805ba888 ]]></g:image_link>
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
<title><![CDATA[ Filorga Crème Universelle 100 ml ]]></title>
<g:id>98ce0b08-2155-4b79-b0e8-d5535e166935</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-crème universelle 100 ml?98ce0b08-2155-4b79-b0e8-d5535e166935 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga crème universelle multi fonctions est un traitement multi-usage quotidien [hydrate - protège – réparations]<br />La solution pour toute situation!<br />Cette crème est un allié de toute la famille et peut être utilisée dans toutes les situations. Une formule multi-usage exclusive qui hydrate, protège et répare en une seule étape.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360226906</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f0cb3e5b55cf8278667280eee0b4c64463f6ee41c9ac52023cbfa221be37080 ]]></g:image_link>
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
<title><![CDATA[ Filorga GLOBAL-REPAIR Eyes & Lips Contour Yeux & Lèvres 15 ml ]]></title>
<g:id>3f897b18-e71d-4c3d-9970-bb920005036a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-global-repair eyes & lips contour yeux & lèvres 15 ml?3f897b18-e71d-4c3d-9970-bb920005036a ]]></link>
<g:price><![CDATA[ 6690.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Découvrez GLOBAL-REPAIR EYES &amp; LIPS, un soin anti-âge global inspiré de techniques de médecine esthétique reconnues pour un effet jeunesse visible sur le contour des yeux et des lèvres. Pensé pour les peaux dévitalisées, il nourrit la peau et agit intensément sur les tous les signes visibles de l’âge grâce à son action multi-revitalisante.</strong></p>
<p><strong>Spécifiquement conçu pour les zones délicates du contour des yeux et des lèvres, ce soin anti-âge enrichi en NCEF agit  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009469</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f5e811f1c2234677de73f2040345fd42b2c96f44b1994836f2d3fc6459f14efa ]]></g:image_link>
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
<title><![CDATA[ Filorga GLOBAL-REPAIR Intensive Sérum Nutri-Jeunesse Multi-Revitalisant 30 ml ]]></title>
<g:id>f1a00c4a-7368-46b6-9073-c1032feb4e08</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-global-repair intensive sérum nutri-jeunesse multi-revitalisant 30 ml?f1a00c4a-7368-46b6-9073-c1032feb4e08 ]]></link>
<g:price><![CDATA[ 7790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga global-repair intensive sérum nutri-jeunesse multi-revitalisant est un sérum multi-actif concentré, spécial peaux dévitalisées, inspiré des techniques de médecine esthétique reconnues pour un effet jeunesse visible et intensif.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009476</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e85687931758b1d618231c93e5cd10b4a6036c1ead2cd814598d1cbf31a94d78 ]]></g:image_link>
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
<title><![CDATA[ Filorga Global Repair Advanced Cream 50 ml ]]></title>
<g:id>7cef515b-5106-4d8f-b965-ab6c3a5ecfe5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-global repair advanced cream 50 ml?7cef515b-5106-4d8f-b965-ab6c3a5ecfe5 ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>GLOBAL-REPAIR ADVANCED CREAM, la crème visage anti-âge qui agit sur les 10 signes de l’âge et favorise le processus naturel de réparation de la peau, pour une peau d’apparence plus jeune.</span></p>
<div class="more">
<div>
<p><span>/Formule</span></p>
<p> </p>
<p>Sa formule s’inspire des pansements riches en lipides utilisés en médecine esthétique post-intervention.</p>
<p>Les laboratoires Filorga ont mis au point un facteur réparateur breveté(1) qui combine différents lipides pour fav ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550013657</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e143b4b3b5144fc81d123b3e4cdf590d927a70bec7e00e4a047ad2792df1321 ]]></g:image_link>
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
<title><![CDATA[ Filorga Global Repair Advanced Elixir 30 ml ]]></title>
<g:id>55a36922-fe32-449b-9a62-40e22b85b715</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-global repair advanced elixir 30 ml?55a36922-fe32-449b-9a62-40e22b85b715 ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>GLOBAL-REPAIR ADVANCED ELIXIR, le sérum jeunesse intensif à la texture huile légère, qui allie l’efficacité d’actifs anti-âge de pointe au pouvoir nutritif des huiles précieuses afin de corriger 10 signes de l’âge.</span></p>
<div class="more">
<div>
<p> </p>
<p>La formule de ce sérum anti-âge s’inspire des pansements riches en lipides utilisés en médecine esthétique post-intervention.</p>
<p>Les laboratoires Filorga ont mis au point un facteur réparateur breveté(1) qui combine différen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550013664</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e081e19fa2e11dd930f7f5585196dae6da91894355c11343c2f90324e30a964 ]]></g:image_link>
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
<title><![CDATA[ Filorga Global Repair baume nutritif  multi-revitalisant 50 ml ]]></title>
<g:id>878db0b8-891b-425b-b278-ebcb31868ff7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-global repair baume nutritif  multi-revitalisant 50 ml?878db0b8-891b-425b-b278-ebcb31868ff7 ]]></link>
<g:price><![CDATA[ 7890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>GLOBAL-REPAIR BAUME, le baume anti-âge pour une action globale sur les signes majeurs de l’âge et une nutrition intense.</span></p>
<div class="more">
<div>
<p>Formule inspirée de techniques de médecine esthétique [acide hyaluronique + peptides redensifiants + NCEF, booster cellulaire unique] pour une efficacité cosmétique sur les rides, la densité de peau, les volumes du visage et l’homogénéité du teint.</p>
<p> </p>
<p><span>/ Nutrition revitalisante</span></p>
<p>3 super nutriments [ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550011431</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a999b773beb98ec293a08ceebb1554b072fe2a71f27c198eae0c38075d90467e ]]></g:image_link>
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
<title><![CDATA[ Filorga Global-Repair Crème Nutri-Jeunesse 30 ml ]]></title>
<g:id>cfa62b5f-0f50-49c1-a88e-a46b22c40f9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-global-repair crème nutri-jeunesse 30 ml?cfa62b5f-0f50-49c1-a88e-a46b22c40f9f ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga GLOBAL-REPAIR Crème Nutri-Jeunesse 30 ml est un soin anti-âge multi-revitalisant à la formule concentrée et à l'action globale intensive. Spécial peaux dévitalisées, il agit contre les signes de l'âge : déshydratation, rides marquées, manque de fermeté/ovale relâché, manque d'homogénéité, teint fatigué. Il offre :</p>
<ul><li>une action nutrition revitalisante : 3 super nutriments agissent en synergie pour redonner souplesse et vitalité,</li>
<li>une action antiâge global : 50 méso-in ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550007410</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cb3b3d93f5e06885ce8b24d5b20b8c2c2eda9212f2b257dc876a29b7b91e6e19 ]]></g:image_link>
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
<title><![CDATA[ Filorga Hydra - Filler Mask 1 Masque 23 g ]]></title>
<g:id>78e64065-9785-4064-8c46-88aa79f593f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-hydra - filler mask 1 masque 23 g?78e64065-9785-4064-8c46-88aa79f593f3 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>FILORGA crée deux masques imprégnés aux actifs Medi-Cosmétique® : HYDRA-FILLER MASK® et TIME-FILLER MASK®, inspirés chacun d’un produit emblématique de la marque. Conçus à partir d’une fibre innovante*, ces deux masques surpuissants vont embellir toutes les peaux en 15 minutes chrono.<br /><br />HYDRA-FILLER MASK réunit tous les bénéfices d’HYDRA-FILLER®, la crème hydratante star de FILORGA. Ce masque imprégné d'acide hyaluronique renferme également un complexe NMF-Like et de l’aloe vera, pou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360225121</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e70aa55183a0bf030112e0fe2452626d4c31bfbfbc15e45e09c59e708a0f9fa ]]></g:image_link>
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
<title><![CDATA[ Filorga Hydra AOX [5] Sérum antioxydant intensif 30 ml ]]></title>
<g:id>c44389ab-eedf-4ffb-9d73-f65860d6f414</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-hydra aox [5] sérum antioxydant intensif 30 ml?c44389ab-eedf-4ffb-9d73-f65860d6f414 ]]></link>
<g:price><![CDATA[ 4890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La puissance de 5 antioxydants [astaxanthine + ergothionéine + vitamine C + vitamine E + vitamine B3] et de l’acide hyaluronique dans un sérum pour protéger la peau du vieillissement lié aux agressions extérieures* et corriger les premiers signes de l’âge. Les ridules sont lissées, le grain de peau est affiné et le teint est éclatant.</p>
<p>Flacon pompe de 30ml</p>
<p><span class="legend">*Test ex-vivo sur explants de peau avec HYDRA-AOX [5].</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550013442</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b7dd2ade94592ec045ce11b0fa75247b3dd7be3d3e621f42a09a7d43672ed3a ]]></g:image_link>
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
<title><![CDATA[ Filorga Hydra Hyal Crème Gel Hydratante Repulpante 50 ml ]]></title>
<g:id>aaaf69cf-3ca0-4075-8822-b198043cba56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-hydra hyal crème gel hydratante repulpante 50 ml?aaaf69cf-3ca0-4075-8822-b198043cba56 ]]></link>
<g:price><![CDATA[ 4790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga HYDRA-HYAL Crème-Gel Hydratante Repulpante 50 ml est un soin aux acides hyaluroniques particulièrement destiné aux peaux mixtes à grasses.</p>
<p>Sa formule associe un duo d'acides hyaluroniques (réticulé et bas poids moléculaire) à un actif rééquilibrant pour restaurer un niveau d'hydratation pour toute la journée. Elle est enrichie d'un actif astringent végétal pour affiner les pores et matifier durablement.</p>
<p>Non comédogène.<br />Testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550000145</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c6bf1022b0e3d6a94ae6b23b3b1444589cf357b2e174433a12b792a3b893f8c ]]></g:image_link>
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
<title><![CDATA[ Filorga Hydra-Hyal 50ml ]]></title>
<g:id>76d202ba-3d17-4294-b9f1-d9a64aa436dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-hydra-hyal 50ml?76d202ba-3d17-4294-b9f1-d9a64aa436dc ]]></link>
<g:price><![CDATA[ 4790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème visage hydratante repulpante HYDRA-HYAL délivre dans la peau 5 acides hyaluroniques différents : réticulé, encapsulé, bas, moyen et haut poids moléculaires. Ce soin apporte à la peau une hydratation anti-âge, lisse et repulpe. Son plus : une texture rafraîchissante confort. Le geste ressourçant des peaux normales à sèches par excellence !<br />5 bénéfices pour ma peau :</p>
<ul><li>Peau hydratée</li>
<li>Peau repulpée</li>
<li>Ridules lissées</li>
<li>Confort retrouvé</li>
<li>Peau l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550000237</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2257be7cf088459bc6416cf7277408b806283fc2ce7fab86f403dac90475dc9 ]]></g:image_link>
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
<title><![CDATA[ Filorga Hydra-Hyal Crème Hydratante 30ml ]]></title>
<g:id>9647fdff-d0b8-45c9-888b-489742713c58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-hydra-hyal crème hydratante 30ml?9647fdff-d0b8-45c9-888b-489742713c58 ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Redécouvrez la crème visage hydratante repulpante HYDRA-HYAL en format voyage 30ml à emporter partout !</span><br /><span>Dotée d'un complexe qui délivre dans la peau </span><span>5 acides hyaluroniques différents </span><span>: réticulé, encapsulé, bas, moyen et haut poids moléculaires, ce soin réactive l’hydratation et repulpe la peau tout en lissant les rides durablement.</span><br /><span>Son + : </span><span>une texture rafraîchissante confort. </span><span>Le geste ressourçant des ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550012469</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f19072db2899d25bbbae32560bb27eb618f973dfb64c97b2276adff7896522b ]]></g:image_link>
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
<title><![CDATA[ Filorga Hydra-Hyal Sérum Hydratant Repulpant 30ml ]]></title>
<g:id>36cc46ab-9784-443b-9950-2a402f730c58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-hydra-hyal sérum hydratant repulpant 30ml?36cc46ab-9784-443b-9950-2a402f730c58 ]]></link>
<g:price><![CDATA[ 4790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>Sérum hydratant repulpant Hydra-Hyal</span><span> des laboratoires </span><span>Filorga</span><span> est un sérum anti-âge qui peut être utilisé par tous les types de peaux. Il est particulièrement indiqué pour les personnes qui veulent retrouver une peau rebondie, </span><span>parfaitement hydratée et lissée</span><span>. Ce soin visage permet également de redonner de l’éclat au teint et contribue au maintien du </span><span>capital jeunesse</span><span> de la peau.</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550000183</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6f3cbc196981ea6645c2a58997d7918fb7f18b40fee10b93c5699cb44282ff1 ]]></g:image_link>
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
<title><![CDATA[ Filorga LIFT-STRUCTURE Crème Ultra-Liftante 50 ml ]]></title>
<g:id>50dd5814-6fe6-4784-acd1-769da3b3709c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-lift-structure crème ultra-liftante 50 ml?50dd5814-6fe6-4784-acd1-769da3b3709c ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une crème ultra-liftante formulée à base d’actifs issus des procédures esthétiques pour un effet anti-âge radical.<br />La nouvelle crème ultra-liftante qui agit sur le raffermissement cutané. Sa texture high-tech allie finesse et confort pour un effet « belle peau » et lui apporte un éclat instantané.<br />Lift-structure de filorga, jugée plus efficace qu’un anti-âge classique par 73% des femmes !</p>
<p><br />/ efficacité liftante surprenante [traits lissés + volumes redéfinis] : intégré po ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008110</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c04d1c45dd9ddb51f5256c242fde2fd42939596e6f6619f6cf202afdc372b3b9 ]]></g:image_link>
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
<title><![CDATA[ Filorga LIFT-STRUCTURE Radiance 50 ml ]]></title>
<g:id>fa9bb4f9-e3ba-4bbb-82c0-a8994ab7b210</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-lift-structure radiance 50 ml?fa9bb4f9-e3ba-4bbb-82c0-a8994ab7b210 ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga LIFT-STRUCTURE Radiance 50 ml est un fluide rose éclat ultra-liftant qui agit sur le manque de fermeté, la perte de volume, les traits fatigués, le manque d'homogénéité et le teint terne. Ce soin révélateur d'éclat naturel est inspiré des techniques de médecine esthétique pour un effet anti-âge radical.</p>
<p>Pour une efficacité liftante visible, le Plasmating Lifting Factors associe des facteurs cellulaires, du collagène et de l'acide hyaluronique pour retendre visiblement les trait ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009612</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c5d088d03619e35d12434c67944603954873e8ac155f90273b638c63a8452aa ]]></g:image_link>
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
<title><![CDATA[ Filorga Lift Mask 1 Masque Super-Liftant 14 ml ]]></title>
<g:id>f454fece-f775-4681-984f-b6074a35e5cb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-lift mask 1 masque super-liftant 14 ml?f454fece-f775-4681-984f-b6074a35e5cb ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga Lift Mask 1 Masque Super-Liftant 14 ml est un soin du visage qui propose toute la puissance d'un sérum concentrée dans un masque nouvelle génération pour un effet anti-âge surprenant en 15 minutes :</p>
<ul><li>Double effet tenseur : Traits liftés + peau repulpée. Le Plasmatic Lifting Factors associe les facteurs cellulaires, du collagène et de l'acide hyaluronnique pour retendre visiblement les traits et repulper la peau.</li>
<li>Action anti-âge intensive : Polyphénols antioxdants.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009568</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3506b9af132c5b614ace3550ce6d04b9f5ff8a92f6cf38cf7fe6d1d3309eb4c9 ]]></g:image_link>
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
<title><![CDATA[ Filorga MESO-MASK Masque Lissant Illuminateur 50 ml ]]></title>
<g:id>7ed98d71-5182-4c14-bf14-e6d6d012a605</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-meso-mask masque lissant illuminateur 50 ml?7ed98d71-5182-4c14-bf14-e6d6d012a605 ]]></link>
<g:price><![CDATA[ 4590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga MESO-MASK Masque Lissant Illuminateur 50 ml sublime la peau en lui apportant lumière et éclat. Il traite les rides et efface les signes de fatigue. Le polysaccharide de rhamnose apaise les irritations, unifie et éclaircit le teint instantanément et durablement. Le NCTF, notre coeur de formule exclusif, stimule l'activité cellulaire et la production collagénique. Une texture crème délicate pour un moment unique de détente. La peau est repulpée, éclatante de santé et de fraîcheur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401348573060</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c8ae85b53c03f8eda76e527cf4083290c2fb353a1bf6c8b132d5a9040729ea0 ]]></g:image_link>
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
<title><![CDATA[ Filorga NCEF - Revitalize Crème Raffermissante 50 ml + Sérum 5 ml Offert ]]></title>
<g:id>90095fac-2b9d-4ad2-a65b-985952c0fe71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef - revitalize crème raffermissante 50 ml + sérum 5 ml offert?90095fac-2b9d-4ad2-a65b-985952c0fe71 ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga NCEF - REVITALIZE Crème Raffermissante 50 ml + Sérum 5 ml Offert apporte à votre peau une apparence visiblement plus jeune.<br>Ce coffret contient :</p><p>- Filorga NCEF - REVITALIZE Sérum 30 ml est un soin qui renforce le métabolisme cellulaire et les défenses de l'épiderme.<br>Adapté à tous les types de peau, ce soin à la texture ultra-légère procure instantanément un fini doux et lumineux, s'absorbant rapidement sans laisser de résidu gras ou collant.<br>Enrichi en NCEF, un complex ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550017983</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff0352968b6b5eb94728193ee9ccbfee82053dbe184575158723be3f49bab383 ]]></g:image_link>
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
<title><![CDATA[ Filorga NCEF - SHOT Concentré Polyrevitalisant Suprême 15 ml ]]></title>
<g:id>be2bbedb-aa98-4879-9067-ddcfffc1527e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef - shot concentré polyrevitalisant suprême 15 ml?be2bbedb-aa98-4879-9067-ddcfffc1527e ]]></link>
<g:price><![CDATA[ 5990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga NCEF - SHOT Concentré Polyrevitalisant Suprême 15 ml est un soin ultra-concentré en NCEF pour une action pro-jeunesse intense et une qualité de peau renouvelée :</p>
<ul><li>régénération intensive de la qualité de peau (régénération démultipliée), grâce au NCEF, complexe polyrevitalisant unique dont 50 ingrédients sont intégrés dans des concentrations comparables à celles utilisées en méso-injection ;</li>
<li>activation cellulaire (correction rides, fermeté et éclat), grâce à un puis ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550007540</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3051b47916819f74a3e7884775c2516d118f7247a2fdc655b1530d945ad0ca26 ]]></g:image_link>
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
<title><![CDATA[ Filorga NCEF Night mask 50 ml ]]></title>
<g:id>5194a075-b8f0-4809-8005-58a3c91f6133</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef night mask 50 ml?5194a075-b8f0-4809-8005-58a3c91f6133 ]]></link>
<g:price><![CDATA[ 5590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécial nuits courtes - peaux fatiguées, stressées.<br />Un masque de nuit multi-correcteur concentre en ncef pour une peau visiblement plus jeune au reveil.<br />Le masque nuit à effet récupérateur cutané intense.<br />Rénovation intensive de la qualité de peau [régénération activée]<br />Une formule au ncef, complexe polyrevitalisant unique mis au point par les laboratoires filorga dont 50 ingrédients sont intégrés pour la première fois dans des concentrations comparables à celles utilisées ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008523</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/37d2e622f782424ee535055084dcc2c0ed68a67449f3af3e19297b41ed15374e ]]></g:image_link>
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
<title><![CDATA[ Filorga NCEF-REVERSE EYES Soin Regard Multi-Correction Suprême 15 ml ]]></title>
<g:id>f8deaafe-d5b6-4c98-95d8-40c71cfd3c7d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef-reverse eyes soin regard multi-correction suprême 15 ml?f8deaafe-d5b6-4c98-95d8-40c71cfd3c7d ]]></link>
<g:price><![CDATA[ 6290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga ncef-reverse eyes soin regard multi-correction supreme est un soins yeux concentrés dans le ncef pour une action renforcée pro-jeunesse et une action renaissante intensif.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009148</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6b1ad0ade4573712e9186de64f506379e2f7aae0ce6c0c4476a327ecbd356a5d ]]></g:image_link>
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
<title><![CDATA[ Filorga NCEF-REVERSE MAT Fluide Multi-Correcteur Suprême 50 ml ]]></title>
<g:id>03c3edb1-ce8c-4492-87f2-abd88b905e56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef-reverse mat fluide multi-correcteur suprême 50 ml?03c3edb1-ce8c-4492-87f2-abd88b905e56 ]]></link>
<g:price><![CDATA[ 7190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga NCTF-REVERSE MAT Fluide Régénérant Suprême 50 ml est un soin régénérant ultra-concentrée en NCTF pour une qualité de peau renouvelée et une action anti-âge</p>
<p>démultipliée.</p>
<p>Ce soin contient une formule au NCTF, un complexe polyrevitalisant unique issu de la médecine esthétique, intégré pour la 1ère fois à une concentration équivalente à celle</p>
<p>d'un traitement anti-âge injectable en cabinet.</p>
<p>Ce fluide régénérant possède le meilleur des actifs anti-âge (Acide hya ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360192232</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f3d06e84a796f69f08a13a5eab677eb2cb6e4f4f43b7fbaf74163f3f2680928 ]]></g:image_link>
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
<title><![CDATA[ Filorga NCTF-REVERSE Lotion Régénérante Suprême 150 ml ]]></title>
<g:id>5cd83554-c637-4b76-8408-38874a08dbd6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-nctf-reverse lotion régénérante suprême 150 ml?5cd83554-c637-4b76-8408-38874a08dbd6 ]]></link>
<g:price><![CDATA[ 4690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga NCTF-REVERSE Lotion Régénérante Suprême 150 ml est une lotion préparatrice et hydratante.</p>
<p>Cette lotion hydratante contient un concentré hydratant qui grâce à ses capteurs d'eau (technologie Aqua-Mx) assure une hydratation flash et durable en seulement 30</p>
<p>minutes.</p>
<p>Le NCTF qu'elle contient est associé à un polysaccharide anti-pollution qui régénère et révèle l'éclat des teints ternes et prépare la peau aux soins.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360156456</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/933f4d3d543937fade414fae86744f9067f85c238100c04177df054a175d5d94 ]]></g:image_link>
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
<title><![CDATA[ Filorga NUTRI-FILLER Crème Nutri-Reconstituante 50 ml ]]></title>
<g:id>6af016e2-01e8-42d6-b4c8-25215922379b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-nutri-filler crème nutri-reconstituante 50 ml?6af016e2-01e8-42d6-b4c8-25215922379b ]]></link>
<g:price><![CDATA[ 5490.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Ce soin anti-âge permet de nourrir et de régénérer la peau en profondeur afin de redessiner le contour du visage.</p>
<p class="p1">En effet, cette crème apporte :<br /><br />- un effet lift grâce à l'algue rouge,<br />- une régénération totale car elle favorise le renouvellement et la protection du collagène,<br />- une nutrition extrême grâce au beurre de karité associé à l'huile d'argan.</p>
<p class="p1">Ainsi, votre peau est protégée, souple et plus dense. Votre peau retouve t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401162659230</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61ca8e87b746cf77d5c345da5aadc99ed246ea3aa58d93d6719963b7e99be1f1 ]]></g:image_link>
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
<title><![CDATA[ Filorga NUTRI-FILLER Lips 4 g ]]></title>
<g:id>74b7bd87-828a-40f9-b4df-6f65c593385e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-nutri-filler lips 4 g?74b7bd87-828a-40f9-b4df-6f65c593385e ]]></link>
<g:price><![CDATA[ 2170.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga nutri-filler lips baume levres nutri-repulpant est une baume nutri-plumping 3 en 1,<br />un huile de baume ultra nourrissante pour conforter et luminer les lèvres sèches et donner une luminosité naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360120075</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9d51713ce5b6988006243c610886dd12f131912aed7ddb6e5146abb3af3aec3 ]]></g:image_link>
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
<title><![CDATA[ Filorga Ncef-Revitalize Crème 50ml ]]></title>
<g:id>b594e849-7f14-4ee0-876d-30a227a31613</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef-revitalize crème 50ml?b594e849-7f14-4ee0-876d-30a227a31613 ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La crème anti-âge polyrevitalisante qui lisse les rides et raffermit la peau tout en lui redonnant son tonus et son éclat.</span></p>
<div class="more">
<div>
<p>NCEF-REVITALIZE CRÈME est un soin anti-âge revitalisant qui agit pour une diminution des signes de vieillissement. La peau est plus tonique, plus lisse et plus lumineuse en 7 jours (1).</p>
<p> </p>
<p><span>/Formule</span></p>
<p>La formule de ce soin revitalisant est concentrée en NCEF, un complexe unique exclusivement dévelo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550015323</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19af44f14958c7ac316a448cd5b9d78a984beca1d72da8a2e8c40616c4717564 ]]></g:image_link>
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
<title><![CDATA[ Filorga Ncef-Revitalize Serum 30ml ]]></title>
<g:id>a02cdeb1-b76e-4a87-9108-5598c1d464bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef-revitalize serum 30ml?a02cdeb1-b76e-4a87-9108-5598c1d464bb ]]></link>
<g:price><![CDATA[ 7990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le sérum anti-âge revitalisant pour une peau plus lisse, plus homogène, plus lumineuse et une réduction progressive des signes de vieillissement.</span></p>
<div class="more">
<div>
<p>NCEF-REVITALIZE SERUM est un sérum anti-âge polyrevitalisant qui renforce le métabolisme cellulaire et les défenses de l’épiderme pour une peau plus lisse, plus homogène et plus lumineuse.</p>
<p> </p>
<p><span>/Formule</span></p>
<p>Ce sérum revitalisant est hautement concentré en NCEF, un complexe uniqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550015378</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/97713c8a7c28f945b3a71a5612065a6ac3b1de24fe914ffee16a4173b21f3315 ]]></g:image_link>
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
<title><![CDATA[ Filorga Ncef-Shot Serum 30ml ]]></title>
<g:id>4d195ff5-6b37-45b4-aebc-1b8280c5b713</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-ncef-shot serum 30ml?4d195ff5-6b37-45b4-aebc-1b8280c5b713 ]]></link>
<g:price><![CDATA[ 9390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>NCEF-SHOT Concentré Polyrevitalisant Suprême de Filorga</span> est un soin ultra-concentré en NCEF, qui intègre pour la première fois une dose quotidienne d'actifs revitalisants équivalente à celle d’une méso-injection pour corriger intensément les rides, la fermeté et l'éclat jour après jour.</p>
<p>La formule au NCEF est un complexe unique mis au point par les Laboratoires FILORGA à base d'<span>ingrédients revitalisants </span>(vitamines, antioxydant, minéraux, coenzymes, acides amin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550018898</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8dd9964df6107ad4b3fdb82ac41e9039b7886f5e2a7f36e53d8be82f403c77c9 ]]></g:image_link>
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
<title><![CDATA[ Filorga OXYGEN-GLOW 50 ml ]]></title>
<g:id>cead6a4d-e71d-4a0d-bd22-2862d9d3678c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-oxygen-glow 50 ml?cead6a4d-e71d-4a0d-bd22-2862d9d3678c ]]></link>
<g:price><![CDATA[ 4090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Objectif peau zéro défaut - Développé par FILORGA, le complexe Super-Skin Boosting Factors réunit un booster d’oxygénation énergisant, de l’acide hyaluronique repulpant et lissant et de la L-enzyme détoxifiante(1) pour révéler une peau zéro défaut jour après jour.<br />Le + : Une action unifiante renforcée grâce à un peptide color-control(2).<br />Éclat immédiat visible à l’oeil nu - Une texture hydrailluminatrice intégrant la technologie Photoperfector HD pour un effet peau sublimée instanta ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009032</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3055257bd027fba5825374e0f61abf687838339d2aa82a606e11a01e4f9f0366 ]]></g:image_link>
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
<title><![CDATA[ Filorga OXYGEN-GLOW [Eyes] 15 ml ]]></title>
<g:id>ae617009-1959-4d6f-9e7e-d6b450601a43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-oxygen-glow [eyes] 15 ml?ae617009-1959-4d6f-9e7e-d6b450601a43 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga OXYGEN-GLOW [Eyes] 15 ml est un soin yeux super-lissant éclat idéal pour défatiguer, hydrater, détoxifier le contour des yeux.</p>
<p>Ce soin est recommandé en cas de regard fatigué, cernes, peau déshydratée et ridules, pour booster l'éclat pour un regard sublimé au naturel.</p>
<p>Sa formule contient le complexe Super-Skin Boosting Factors qui réunit un booster d'oxygénation, de l'acide hyaluronique et de la L-enzyme détoxifiante pour révéler un regard zéro défaut jour après jour. El ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009001</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/257f51f759baffd70db363bc2c4874e924783db199c52920e749e42104c69be7 ]]></g:image_link>
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
<title><![CDATA[ Filorga Optim-Eyes Masque Yeux Anti-Âge & Éclat 6 ml ]]></title>
<g:id>8ad96f5a-2068-4ad6-b4e2-4e786f3ed943</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-optim-eyes masque yeux anti-Âge & Éclat 6 ml?8ad96f5a-2068-4ad6-b4e2-4e786f3ed943 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga OPTIM-EYES Masque Yeux Anti-Âge &amp; Éclat 6 ml est idéal pour retrouver un regard éclatant en un clin d'œil.</p><p>Adapté à tous les types de peau, ce masque pour les yeux imprégné d'une formule liquide et fluide renferme une formulation à base de peptides marins, d'acide hyaluronique et d'antioxydants tels que le curcuma.<br>Grâce à sa triple action corrective intensive, il agit sur les cernes colorés, le volume des poches et les rides, offrant ainsi un effet rajeunissant et lissan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550018393</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27ae9983650fed32a1691699c1ee69bdb4835262e039cd1ebf0aba19de083fd9 ]]></g:image_link>
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
<title><![CDATA[ Filorga Oxygen-Glow CC crème spf30 40 ml ]]></title>
<g:id>6e548b3f-b98e-4c76-bfc1-b0770cf650e5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-oxygen-glow cc crème spf30 40 ml?6e548b3f-b98e-4c76-bfc1-b0770cf650e5 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>OXYGEN-GLOW, La première CC crème hybride qui booste l’oxygénation de la peau, sublime le teint et offre une protection urbaine quotidienne.</span></p>
<div class="more">
<div>
<p> </p>
<p><span>[OXYGEN-GLOW CC Cream] c’est une formule unique, inspirée de la carboxythérapie utilisée en médecine esthétique, qui dope le glow naturel de la peau. A chaque application, les actifs de pointe des laboratoires Filorga boostent l’oxygénation et l’éclat de la peau. Des pigments micro-encapsulés un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550011448</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b9b2e9cc84e758189abf7b5f0b401163a52019f79106ea508ba9bfe738d3f70 ]]></g:image_link>
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
<title><![CDATA[ Filorga Oxygen-Peel Lotion Micro-Peeling Réoxygénante 150 ml ]]></title>
<g:id>4d858ed7-f7db-4d92-b037-6f83dc726ecb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-oxygen-peel lotion micro-peeling réoxygénante 150 ml?4d858ed7-f7db-4d92-b037-6f83dc726ecb ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga oxygen-peel lotion micro-peeling reoxygenante est une lotion de micro-peeling reoxygenante<br />[rides + pores + radiance + evenness].</p>
<p>S'est inspiré de son expertise en médecine esthétique pour créer oxygen-peel, une lotion quotidienne adaptée à tous les types de peau pour un nouvel effet de peau, tous les jours!</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008059</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6963f528d78a006cd8d1d7183daf40849ad1b41305fcf6da5ae6d5d271ae9c25 ]]></g:image_link>
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
<title><![CDATA[ Filorga Purify Fluide Double Correction 50ml ]]></title>
<g:id>f345b662-c8d5-4c01-bc67-1c02bf950d74</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-purify fluide double correction 50ml?f345b662-c8d5-4c01-bc67-1c02bf950d74 ]]></link>
<g:price><![CDATA[ 6170.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le fluide anti-âge et anti-imperfections des peaux mixtes à grasses qui comble les rides, purifie la peau et protège la peau de la pollution et des particules fines !</span><br /><br /><span>Rides ou imperfections, plus question de choisir ! Ce soin visage anti-âge purifiant et anti-pollution unique développé avec des médecins esthétiques et des dermatologues(1) renferme un cœur de formule totalement inédit chez FILORGA. Grâce à lui vous pouvez enfin protéger votre peau mixte à grasse d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009643</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/04651b5bacf96e9c511e20b8461f735505dd717b7e1abccb1cf166d7d0efe603 ]]></g:image_link>
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
<title><![CDATA[ Filorga Purify Serum Double Correction 30ml ]]></title>
<g:id>be090485-f197-4675-99d0-faa36144e809</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-purify serum double correction 30ml?be090485-f197-4675-99d0-faa36144e809 ]]></link>
<g:price><![CDATA[ 6170.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le sérum anti-âge et anti-imperfections des peaux mixtes à grasses à l’action rééquilibrante long terme !</span><br /><br /><span>Rides ou imperfections, plus question de choisir ! Ce soin visage anti-âge purifiant et anti-pollution unique développé avec des médecins esthétiques et des dermatologues(1) renferme un cœur de formule totalement inédit chez FILORGA. Grâce à lui vous pouvez enfin protéger votre peau mixte à grasse de la pollution et réduire les imperfections tout en traitant  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550009629</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/813ea087122ccd1847282096412440871ff498b433c8d6b94ed52698d2bab968 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-PREP Crème Exfoliante Enzymatique 75 ml ]]></title>
<g:id>9a0a0637-73de-463e-9640-16aef38078e6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-prep crème exfoliante enzymatique 75 ml?9a0a0637-73de-463e-9640-16aef38078e6 ]]></link>
<g:price><![CDATA[ 2125.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-PREP Crème Exfoliante Enzymatique 75 ml est un exfoliant visage à l'action intense, conçu pour cibler les points noirs et resserrer les pores pour un effet peau neuve immédiat. Cette crème nettoie en profondeur, désincruste et resserre les pores, offrant des résultats visibles dès la première utilisation.</p>
<p>Sa formule unique combine une double exfoliation mécanique et enzymatique grâce à l'enzyme de papaïne stabilisée et aux billes de sable volcanique, assurant un nettoyage  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550014944</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74af9c57c37d4ad7ce4c1595ca5b9577afa2f6fd8e63fb4e75fb885668ca9845 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-PREP Gel Nettoyant aux AHA 150 ml ]]></title>
<g:id>19588116-e7a0-4a32-996c-c8ce3be7d543</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-prep gel nettoyant aux aha 150 ml?19588116-e7a0-4a32-996c-c8ce3be7d543 ]]></link>
<g:price><![CDATA[ 2280.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-PREP Gel Nettoyant aux AHA 150 ml est un gel spécialement conçu pour les peaux mixtes à grasses. Il nettoie, purifie, lisse et matifie la peau tout en éliminant impuretés et imperfections, offrant un effet peau neuve.</p>
<p>Ce gel micro-peeling combine trois AHA (acide mandélique, acide citrique et acide glycolique) et un PHA (gluconolactone) pour une exfoliation profonde et un lissage de la surface de la peau.<br />Sa texture se transforme en mousse fine lors du massage, offran ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550015019</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ce610c6ce8eaea09c7bcbc7b8ac8ea24f7d3644d08a6d81ab082acec53f8ab20 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-PREP Huile Démaquillante Perfectrice 150 ml ]]></title>
<g:id>7a46cdc5-a6a2-4e60-ab5c-b99fd53b8182</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-prep huile démaquillante perfectrice 150 ml?7a46cdc5-a6a2-4e60-ab5c-b99fd53b8182 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-PREP Huile Démaquillante Perfectrice 150 ml est une huile conçue pour éliminer en douceur le maquillage, même waterproof, ainsi que l'excès de sébum et la pollution, tout en nourrissant la peau. Adaptée à tous les types de peaux, y compris les peaux sensibles, cette huile visage et yeux ne laisse aucun film gras.</p>
<p>Enrichie en oméga 6 et en vitamine E, elle hydrate, assouplit et exerce une action restructurante et régénérante sur la peau. Sa texture lisse se transforme en la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550014913</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/407330945f345554958054d4a2d66fa5194eb1aa64f9a6deb6bd1efcecf945f2 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-PREP Mousse Nettoyante Enzymatique 150 ml ]]></title>
<g:id>a53ccd57-09bf-4284-b872-65a1ce1adc75</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-prep mousse nettoyante enzymatique 150 ml?a53ccd57-09bf-4284-b872-65a1ce1adc75 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-PREP Mousse Nettoyante Enzymatique 150 ml est une mousse resurfaçante conçue pour nettoyer efficacement le visage et les yeux, lisser le grain de peau et illuminer le teint. Elle permet de retirer le maquillage et les particules de pollution même sur les peaux sensibles.</p>
<p>Cette mousse à la texture aérienne et onctueuse contient une enzyme de papaïne stabilisée qui booste le processus naturel d'élimination des cellules mortes, laissant un effet peau neuve. La peau est lissée ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550015040</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d9d03b291155ffb35860f68702d3e1ff1fefeaf05bc0840ba2e6706aa1309369 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-PREP Solution Micellaire 400 ml ]]></title>
<g:id>3e95fcf5-d181-4b4c-8f86-7013bde82589</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-prep solution micellaire 400 ml?3e95fcf5-d181-4b4c-8f86-7013bde82589 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-PREP Solution Micellaire 400 ml est une solution micellaire 3-en-1 pour le visage et les yeux qui offre une expérience de nettoyage et de démaquillage adaptée à tous les types de peaux. Elle nettoie, démaquille et hydrate quotidiennement, laissant la peau confortable et prête à recevoir les soins.</p>
<p>Enrichie en tréhalose et rhamnose, des actifs hydratants et apaisants, elle procure son efficacité en réduisant les impuretés et le sébum.<br />Sa texture fraîche et légère assur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550015064</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d543233f8692c4e058cb554f74e95888fa7741bee6a5a9475c087cf70c81267 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-UNIFY Crème Uniformisante Illuminatrice 50 ml ]]></title>
<g:id>944a5447-85f2-49a6-8549-ee4e99d7615b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-unify crème uniformisante illuminatrice 50 ml?944a5447-85f2-49a6-8549-ee4e99d7615b ]]></link>
<g:price><![CDATA[ 5990.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550000107</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03410a1ba78df4f4ec32b860a0a1f4a4197cd6b0d0beb42a772f371693991d22 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-UNIFY Intensive Sérum Uniformisant Illuminateur 30 ml ]]></title>
<g:id>3c185e72-b5bf-4fda-a7b2-1295f2d4cb51</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-unify intensive sérum uniformisant illuminateur 30 ml?3c185e72-b5bf-4fda-a7b2-1295f2d4cb51 ]]></link>
<g:price><![CDATA[ 5990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-UNIFY Intensive Sérum Uniformisant Illuminateur 30 ml est un sérum anti-taches perfecteur de teint à la texture légère et fondante, inspiré de 3 techniques de médecine esthétique reconnues, pour une peau uniforme et lumineuse.</p>
<ul><li>Action anti-taches : Une association de 3 actifs (vitamine C + glabridine + extrait d'algue) aide à réduire efficacement les taches pigmentaires.</li>
<li>Action réuniformisante : Un actif resurfaçant contribue à retrouver un teint plus lumineux ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550000077</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20d31c6f46216f1aeea7967ce4f74dd553f30ec7ea1c54f0ca155b5cbf1b14e0 ]]></g:image_link>
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
<title><![CDATA[ Filorga SKIN-UNIFY Radiance Soin Lumière Perfecteur 15 ml ]]></title>
<g:id>dbf42256-48da-4a01-a4ee-67089feb954c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-skin-unify radiance soin lumière perfecteur 15 ml?dbf42256-48da-4a01-a4ee-67089feb954c ]]></link>
<g:price><![CDATA[ 3890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga SKIN-UNIFY Radiance Soin Lumière Perfecteur 15 ml est un soin inspiré de 3 techniques de médecine esthétique reconnues pour recréer les zones de lumière du visage et révéler l'éclat de la peau.</p>
<ul><li>Action illuminatrice : Un duo acide hyaluronique repulpant + actif lissant pour mettre en valeur les zones clés du visage et optimiser la réflexion de la lumière. La formule est infusée de nacres iridescentes pour un éclat radical instantané.</li>
<li>Action perfectrice de teint : D ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550010403</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb257c0b78a36e2c2b024f7cf0a2c4d36c671b0ef99cca7f7abc9060050a064b ]]></g:image_link>
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
<title><![CDATA[ Filorga SLEEP AND LIFT Crème Ultra-Liftante Nuit 50 ml ]]></title>
<g:id>557701a1-e35c-43c3-be23-93237cf099e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-sleep and lift crème ultra-liftante nuit 50 ml?557701a1-e35c-43c3-be23-93237cf099e0 ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une crème ultra-liftante nuit formulée à base d’actifs issus des procédures esthétiques pour un effet anti-âge radical.<br />Ce baume sensoriel ultra-enveloppant apporte nutrition et confort au visage pour une peau redensifiée et regénérée nuit après nuit.</p>
<p><br />/ efficacité liftante surprenante [traits lissés + volumes redéfinis] : intégré pour la première fois dans une crème, le filorga plasmatic lifting factors® associe [facteurs cellulaires + collagène + acide hyaluronique] pour re ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008127</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cfda36df0d24c2444b8ce2f5080bd595fc991189d7bae656fd66c568fb0a45a5 ]]></g:image_link>
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
<title><![CDATA[ Filorga TIME-FILLER 5XP Crème Correction 30 ml ]]></title>
<g:id>03a7b380-3a2a-4475-807e-0fa801b887f4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time-filler 5xp crème correction 30 ml?03a7b380-3a2a-4475-807e-0fa801b887f4 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga TIME-FILLER 5XP Crème Correction Tous Types de Rides 30 ml est un soin visage et cou destiné aux peaux normales à sèches, pour une correction intensive de tous les types de rides.</p>
<p>Sa formule associe de puissants actifs : Tripeptide, Acide hyaluronique, Christe marine, Extrait végétal, et Actif restructurant, pour décrisper les rides d'expression, repulper les rides profondes, lisser les rides de surface et de déshydratation, et défroisser les rides du cou.<br />Idéale pour les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550010830</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab996808c9e2dadf0ae885c4754d7b1675bda71b4b3e6122d737b2f216cb599f ]]></g:image_link>
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
<title><![CDATA[ Filorga TIME-FILLER 5XP Eyes 15 ml ]]></title>
<g:id>42c36988-98ed-42f9-9e42-87b5a483f7a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time-filler 5xp eyes 15 ml?42c36988-98ed-42f9-9e42-87b5a483f7a4 ]]></link>
<g:price><![CDATA[ 4490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga TIME-FILLER 5XP Eyes 15 ml est une crème yeux correction tous types de rides, conçue pour agir sur les rides du contour de l'œil.</p>
<p>Sa formule associe Peptides et Cellules souches végétales pour corriger tous les types de rides de la zone regard : rides de la patte d'oie, rides du dessous de l'œil, rides du lion et plis des paupières.<br />Les cernes sont réduits et les cils semblent fortifiés.</p>
<p>La zone regard apparaît visiblement plus jeune.</p>
<p>Testé sous contrôle opht ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550012612</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/757408fff9175c6423bb55c254fd4fec6662b5b67520993f746394130c363ae1 ]]></g:image_link>
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
<title><![CDATA[ Filorga TIME-FILLER NIGHT 50 ml ]]></title>
<g:id>97999863-843f-492a-9a61-380715285217</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time-filler night 50 ml?97999863-843f-492a-9a61-380715285217 ]]></link>
<g:price><![CDATA[ 5890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Toute l’expertise en médecine esthétique de filorga dans une crème pour réduire visiblement tous les types de rides nuit après nuit.</p>
<p><br />Rides de contraction - un hexapeptide pour décrisper les traits sans figer les expressions.</p>
<p><br />Rides profondes - un puissant booster de collagène associé à de l’acide hyaluronique encapsulé pour repulper visiblement les rides marquées.</p>
<p><br />Rides de surface - de la gluconolactone exfoliante associée à un actif effet peeling pour li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008882</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab40b8463d37827b3137ecc586d154d60cd2e44ef35dbd2824851ca4692cb974 ]]></g:image_link>
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
<title><![CDATA[ Filorga Time Filler 5 XP Gel crème 50ml ]]></title>
<g:id>f17c5dd3-9e9e-48f1-b9f3-57a8073e2050</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time filler 5 xp gel crème 50ml?f17c5dd3-9e9e-48f1-b9f3-57a8073e2050 ]]></link>
<g:price><![CDATA[ 5890.00 EUR ]]></g:price>
<description><![CDATA[ <p>TIME-FILLER 5XP, FILORGA réinvente sa crème anti-ride best-seller qui agit simultanément sur 5 types de rides, grâce au cœur de formule 5XP inspiré de 5 techniques de médecine esthétique. </p>
<div class="more">
<div>
<p><span>Disponible en 2 textures, sous sa forme crème [peaux normales à sèches] ou gel-crème [peaux mixtes à grasses], TIME-FILLER 5XP </span><span>s’inspire de 5 expertises de médecine esthétique pour lisser les 5 types de rides</span><span>, pour lisser les 5 types de rides.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550010793</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/92b6d48b0f2cf358f4a7e9de94e650200d26f515f5b59ae93d28ad0ef3c6fc47 ]]></g:image_link>
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
<title><![CDATA[ Filorga Time Filler Essence Lotion anti-âge 150 ml ]]></title>
<g:id>5cdf894c-d8cb-47f9-8e13-fa8817d92030</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time filler essence lotion anti-âge 150 ml?5cdf894c-d8cb-47f9-8e13-fa8817d92030 ]]></link>
<g:price><![CDATA[ 3290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>TIME-FILLER ESSENCE , la lotion visage anti-âge conçue pour laisser la peau plus lisse, réhydratée et éclatante.</span></p>
<div class="more">
<div>
<p>La peau est parfaitement préparée à recevoir les soins quotidiens de votre routine beauté et à maximiser leurs bienfaits.</p>
<p><span>/Formule</span></p>
<p>Sa formule s’appuie sur un puissant extrait végétal booster de collagène dont l’action est semblable à celle du rétinol, actif anti-âge de référence reconnu pour ses vertus anti-rid ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550013404</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f1df9bb75f93d58ab4015ccb948ca653a15751705ff356b516b1a0b3544c6f8 ]]></g:image_link>
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
<title><![CDATA[ Filorga Time Filler Mask 23 Gr ]]></title>
<g:id>ce2a58b3-22e8-4843-92ad-7260b0c10ab9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time filler mask 23 gr?ce2a58b3-22e8-4843-92ad-7260b0c10ab9 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga TIME-FILLER MASK 1 Masque de 23 g est un masque noir à effet seconde peau qui offre la puissance d'un sérum concentré pour une peau lissée et plus jeune en 15 minutes.</p>
<ul><li>Double effet lissant [tenseur + comblement] : Sa formule à imprégnation d'actifs tenseurs au pouvoir liftant associés à du collagène d'origine naturelle permet de lisser visiblement les rides.</li>
<li>Action pro-jeunesse : Un polysaccharide puissant agit pour réduire visiblement l'apparence des signes de l' ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360225138</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf571b40f1409ebd70d8e7c4d2fab24df7da18e2f2359cf33025792ddde0e92d ]]></g:image_link>
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
<title><![CDATA[ Filorga Time Filler Shot 5XP 15 ml ]]></title>
<g:id>700669e4-890b-409a-bcd1-3ad99e52ff02</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time filler shot 5xp 15 ml?700669e4-890b-409a-bcd1-3ad99e52ff02 ]]></link>
<g:price><![CDATA[ 4990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez le nouveau TIME-FILLER SHOT 5XP, un sérum concentré qui agit spécifiquement sur chacune des 5 rides d’expression :  rides du front, du lion, de la patte d’oie, du dessus des lèvres et de la marionnette.</span></p>
<div class="more">
<div>
<p><span>/Formule</span></p>
<p><span>TIME-FILLER SHOT 5XP intègre une technologie neuropeptidique inspirée des injections de toxine botulique pour créer un effet décrispant. Les rides et ridules causées par les contractions musculaires répét ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550015286</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b9e6d3135df1ee2406dc816451f9821064242e971fedebba8cb889c1940f967 ]]></g:image_link>
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
<title><![CDATA[ Filorga Time-Filer Intensive 5xp Sérum Correction Tous Types de Rides 30 ml ]]></title>
<g:id>7435de14-edfe-49fb-8ef9-6d80ea6b6b0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time-filer intensive 5xp sérum correction tous types de rides 30 ml?7435de14-edfe-49fb-8ef9-6d80ea6b6b0b ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sa formule intègre, au cœur du complexe 5XP, un peptide décrispant inspiré des injections utilisées en médecine esthétique.<br><br>Ce neuro-peptide nouvelle génération, concentré à 4%, mime l'effet de la toxine botulique pour bloquer la contraction musculaire.<br><br>Associé à un cocktail d'actifs lissants instantanés et à un acide hyaluronique de bas poids moléculaire, il contribue à corriger immédiatement et à long terme les rides d'expression, les rides profondes, les rides de surface, les ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550017198</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/82206464f33bcf7beaf1c2b0733ede253d6015b98b885da4bb493f03cfbedaf0 ]]></g:image_link>
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
<title><![CDATA[ Filorga Time-Filler 5xp Crème correction tous types de rides 50ml ]]></title>
<g:id>eec340f4-5f15-43fd-888b-2818d2258b57</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time-filler 5xp crème correction tous types de rides 50ml?eec340f4-5f15-43fd-888b-2818d2258b57 ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>TIME-FILLER 5XP CREME<br>Crème de jour anti-rides<br>Rides, cou &amp; décolleté<br>Tout type de peau<br>50ml</p><p>Vous rêvez d’une peau lisse dès 7 jours ? 10 ans après la formulation de la première crème TIME-FILLER, FILORGA révolutionne une nouvelle fois le monde de l’anti-rides et invente le soin de jour à la technologie 5XP. Une <strong>formule suractivée inédite inspirée de 5 expertises de médecine esthétique</strong> reconnues qui permet un lissage intensif des 5 types de rides.</p><p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550016474</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b053b25de151778a09593c8e02ce5d2ec83fa44e09428d2c097c07a753a1f7a2 ]]></g:image_link>
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
<title><![CDATA[ Filorga Time-Filler Night 5Xp Crème Nuit Défroissante Rides, 50ml ]]></title>
<g:id>52d82c88-676d-4d9d-9bfa-0923a20ff7e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-time-filler night 5xp crème nuit défroissante rides, 50ml?52d82c88-676d-4d9d-9bfa-0923a20ff7e3 ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème anti-âge FILORGA TIME-FILLER NIGHT 5XP est le fruit de toute l'expertise en médecine esthétique de FILORGA. Sa formule 5XP est conçue pour réduire visiblement l'apparence de 5 types de rides, offrant ainsi une action ciblée pour une peau visiblement plus lisse et ferme. Grâce à une efficacité anti-rides démontrée, cette crème agit dès 7 jours, permettant à 83% des femmes de constater une amélioration de la texture de leur peau. Après 28 jours, 9 femmes sur 10 déclarent percevoir une  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550016450</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6bce4ccc3f47180445b15608d42f4e1a3ae7e3941ed67c490f1ac2e0e4a11845 ]]></g:image_link>
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
<title><![CDATA[ Filorga UV Cellular Protect Crème solaire anti-âge visage SPF 50+ ]]></title>
<g:id>f05cb11c-60d3-4eaa-96ad-802da539deb8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv cellular protect crème solaire anti-âge visage spf 50+?f05cb11c-60d3-4eaa-96ad-802da539deb8 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p>UV CELLULAR-PROTECT VISAGE est une crème solaire visage anti-âge SPF50+ créée afin de cibler 4 signes du photo-vieillissement. Pour une peau bien protégée, mieux hydratée, plus lisse et plus ferme, et des taches brunes estompées.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550019277</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28312a3d1a3fe991aee02e910c9a3e120c166ce2fb15a6a7053efbf378ead4a9 ]]></g:image_link>
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
<title><![CDATA[ Filorga UV-BRONZE Après-Soleil 200 ml ]]></title>
<g:id>e3b8db5c-f204-4c9c-815b-5bf4054a7646</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv-bronze après-soleil 200 ml?e3b8db5c-f204-4c9c-815b-5bf4054a7646 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga UV-BRONZE Après-Soleil 200 ml est un soin après-soleil idéal à appliquer pour prolonger et sublimer le bronzage tout en prenant soin de votre peau.<br />Ce gel à la triple action contient une association de 4 huiles : argan, abricot, amande et avocat, associées à de l'acide hyaluronique. Il hydrate et nourrit ainsi votre peau en profondeur. Il contient également un complexe d'acides aminés et de minéraux, qui booste, sublime et prolonge votre bronzage même sans UV, grâce au Tan-stimul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008080</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5399946604e6efe86fe0624cea052b23bb2dc973a126a06dd86b5e4262177680 ]]></g:image_link>
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
<title><![CDATA[ Filorga UV-BRONZE Corps Huile Solaire Anti-Âge Activatrice de Bronzage SPF30 150 ml ]]></title>
<g:id>9574bfaa-bef5-4e21-8fc4-6cbeef5e41a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv-bronze corps huile solaire anti-Âge activatrice de bronzage spf30 150 ml?9574bfaa-bef5-4e21-8fc4-6cbeef5e41a4 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga UV-BRONZE Corps Huile Solaire Anti-Âge Activatrice de Bronzage SPF30 150 ml est un soin solaire corps activateur de bronzage, qui offre une haute protection solaire SPF30.<br />Cette huile propose plusieurs actions :</p>
<ul><li>une protection anti-âge globale [photo-active technology] : un puissant anti-oxydant, actif sous les rayons du soleil, met la peau sous haute protection et agit contre les signes du vieillissement cutané.</li>
<li>la nutrition raffermissante [duo d'huiles + ac ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008073</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b8e3c1e5662d1342955c1639aaabbb3389de5122ac5c4f70eed619bd15f488e ]]></g:image_link>
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
<title><![CDATA[ Filorga UV-BRONZE Visage Fluide Solaire Anti-Âge SPF50+ 40 ml ]]></title>
<g:id>fc1b2645-d763-4ec0-b17b-a0ded6095889</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv-bronze visage fluide solaire anti-Âge spf50+ 40 ml?fc1b2645-d763-4ec0-b17b-a0ded6095889 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga UV-Bronze Visage Fluide Solaire Anti-Âge SPF50  est une très haute protection solaire pour les peaux matures, agissant contre le vieillissement et les taches.<br /><br />Sa formule fluide à la texture non grasse offre plusieurs actions :<br /><br />- bouclier anti-âge global [photo-activated technology] : un puissant anti-oxydant qui agit sous les rayons du soleil pour mettre la peau sous haute protection UV + IR et permet ainsi de réduire les signes du vieillissement.<br /><br />- ac ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360245761</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d8aec2305e81f4fc28cdc1cb17f2c1a56e98747ab4d15878a48ed9d8b80e0f38 ]]></g:image_link>
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
<title><![CDATA[ Filorga UV-Bronze Spray Solaire Anti-Age SPF50+ 150ml ]]></title>
<g:id>519e6ee9-a067-4ae4-ab24-57c28fa2c4d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv-bronze spray solaire anti-age spf50+ 150ml?519e6ee9-a067-4ae4-ab24-57c28fa2c4d2 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bouclier anti-age global [photo-activated technology] : un puissant anti-oxydant, activé par les rayons du soleil, met la peau sous haute protection UV + IR et lutte contre les signes du vieillissement.<br /><br />/ Régénération fermeté :<br />Un booster de collagène associé au duo acide hyaluronique + NCTF® renforce l’élasticité cutanée pour une peau plus tonique et plus ferme.<br /><br />/ Haute nutrition :<br />L’huile sublimatrice de noix de coco nourrit la peau en profondeur et laisse un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360180666</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f164d3760aeb591d60a314f88d310ad4c561a9ff5f9a7627bc8aee959813c6cf ]]></g:image_link>
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
<title><![CDATA[ Filorga UV-Defence soin solaire anti-âge anti-tâches 40ml ]]></title>
<g:id>1a0bd62b-c080-4d5a-89a5-7342c7a1497a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv-defence soin solaire anti-âge anti-tâches 40ml?1a0bd62b-c080-4d5a-89a5-7342c7a1497a ]]></link>
<g:price><![CDATA[ 2490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>UV-DEFENCE, un soin protecteur quotidien pour lutter contre les signes du vieillissement et les taches.</span></p>
<div class="more">
<div>
<p><span>/ Très haute protection</span></p>
<p>Une puissante association de filtres solaires couplée à de la vitamine E anti-oxydante pour protéger la peau des UV et des radicaux libres.</p>
<p> / Action anti-taches</p>
<p>Un extrait de houblon mélano-réducteur pour réduire les taches photo-induites.</p>
<p> / Action anti-âge</p>
<p>Un extrait d’alg ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360202337</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22ca9766a4a59ba964e089c0763ba095f4d415fa277c036b974e665e21b89d66 ]]></g:image_link>
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
<title><![CDATA[ Filorga Uv Cellular Protect Crème Solaire Anti-Âge SPF50+ 125 ml ]]></title>
<g:id>2d6e694c-7e7e-4409-ab24-c671ea4b1ecd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-uv cellular protect crème solaire anti-Âge spf50+ 125 ml?2d6e694c-7e7e-4409-ab24-c671ea4b1ecd ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Filorga UV-Cellular Protect SPF50+ – Crème Solaire Anti-Âge 125 ml</p><p>Cette crème solaire haute protection agit sur les 4 signes majeurs du vieillissement cutané induit par le soleil : rides, déshydratation, perte de fermeté et taches brunes.</p><p>Enrichie à 8 % d’actifs anti-âge, sa formule aide à protéger la peau tout en stimulant ses mécanismes naturels de réparation. La peau est visiblement plus lisse, plus ferme, hydratée et unifiée.</p><p>Sa texture fluide et légère pénètre rapideme ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550017273</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/54438a7411aa82cee8bc8ac9c94ed6f3dc8bd36b71a4153a0d04ee193bb05967 ]]></g:image_link>
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
<title><![CDATA[ Filorga lift-designer sérum ultra-liftant tenseur intensif 30ml ]]></title>
<g:id>c5be3ee9-302a-44eb-9c45-6209dc7c5e77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-lift-designer sérum ultra-liftant tenseur intensif 30ml?c5be3ee9-302a-44eb-9c45-6209dc7c5e77 ]]></link>
<g:price><![CDATA[ 6390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lift-designer sérum ultra-liftant tenseur intensif sérum ultra-sensoriel pénètre rapidement et apporte un effet défroissant à la peau pour une double action tenseur + coup d’éclat sans effet carton.<br />Un soin malin, une utilisation pratique, pour un effet tenseur immédiat !</p>
<p><br />/ efficacité liftante surprenante [traits lissés + volumes redéfinis] : intégré pour la première fois dans une crème, le plasmatic lifting factors® associe [facteurs cellulaires + collagène + acide hyaluron ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008288</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a90dc0287b6c44f1d5e6def011f87812cad863a6a6f234e9b11a786041d78e34 ]]></g:image_link>
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
<title><![CDATA[ Filorga nctf reverse crème multi-correctrice suprême 30ml ]]></title>
<g:id>58031806-0663-436b-8776-66adf3b54b6f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-nctf reverse crème multi-correctrice suprême 30ml?58031806-0663-436b-8776-66adf3b54b6f ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin polyrevitalisant inspiré des méso-injections<br />Rénovation intensive de la qualité de peau [régénération activée]<br />une formule au ncef, complexe polyrevitalisant unique mis au point par les laboratoires filorga dont 50 ingrédients sont intégrés pour la première fois dans des concentrations comparables à celles utilisées en méso-injection.<br />Correction suractivée [rides – fermeté – eclat] : des actifs réputés dans la lutte contre le vieillissement [acide hyaluronique+collagène ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550008356</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32d0f9c662c571e6abbb13243caa5167b5aaee57106b8982e817c9d6cda8fe66 ]]></g:image_link>
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
<title><![CDATA[ Filorga sleep & peel 4.5 crème micro peeling de nuit 40ml ]]></title>
<g:id>878765ec-adff-4b0b-bdb6-fab50e3b68b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/filorga-sleep & peel 4.5 crème micro peeling de nuit 40ml?878765ec-adff-4b0b-bdb6-fab50e3b68b4 ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p>SLEEP&amp;PEEL 4.5, la crème qui stimule le renouvellement cellulaire pendant la nuit pour un effet peau neuve au réveil. Inspirée des peelings professionnels, cette crème nuit intègre un complexe d’hydroxy-acides (AHA et BHA) concentré à 4,5% et associé à de l’algue brune apaisante pour une efficacité cosmétique resurfaçante en douceur. Résultat, la peau est lissée, le teint illuminé et le grain de peau affiné.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3540550000428</g:gtin>
<g:brand><![CDATA[ FILORGA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d4d9a365848191276e3358982e7d168da755aa11ffa38a1ee912db633c325b79 ]]></g:image_link>
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
<title><![CDATA[ Fiprokil Duo 50 mg/60 mg Chat 4 Pipettes ]]></title>
<g:id>3b47f60d-0ed5-4a7c-bd23-9337f3424d80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fiprokil-duo 50 mg/60 mg chat 4 pipettes?3b47f60d-0ed5-4a7c-bd23-9337f3424d80 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Clément Thékan Fiprokil Duo 50 mg/60 mg Chat 4 Pipettes est à utiliser contre les infestations par les puces seules ou les infestations mixtes par les</p>
<p>puces et les tiques chez le chat de 1 à 6 kg.</p>
<p>Chaque pipette contient du fipronil et du pyriproxifène.</p>
<p>Le pyriproxifène empêche la contamination de l'environnement des animaux traités par les stades immatures des puces.</p>
<p>Les pipettes possèdent un système anti-goutte.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890226694</g:gtin>
<g:brand><![CDATA[ CLEMENT THEKAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b884f2398640262242daad418d62b45596373683ea5f7fca8c1e7d60080355e ]]></g:image_link>
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
<title><![CDATA[ Fittydent Crème Fixative pour Prothèse Dentaire 40 g ]]></title>
<g:id>c13d27fb-6084-4faa-8e5c-5a4eb6a5c452</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fittydent-crème fixative pour prothèse dentaire 40 g?c13d27fb-6084-4faa-8e5c-5a4eb6a5c452 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fittydent Crème Fixative pour Prothèse Dentaire 40 g est une crème fixative pour prothèse denatire à base d'Aloe Vera et de Myrrhe.</p>
<p>Les avantages :</p>
<ul><li>Elle est résistante à l'eau, à l'ingestion de nourriture et de boisson,</li>
<li>Elle se maintient longtemps,</li>
<li>Elle apaise et prévient les problèmes de gencives,</li>
<li>Elle est moins collante, plus fixante.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>9002240111400</g:gtin>
<g:brand><![CDATA[ Biosynex ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42cff25319c40ec89caeae4e77e6fe03a12e536c3a6c8c2789a2b7df7dde3012 ]]></g:image_link>
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
<title><![CDATA[ Fittydent Professional Coussinets adhésifs sans zinc ]]></title>
<g:id>7bacf265-a290-4eee-bddc-a30eb4025023</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fittydent-professional coussinets adhésifs sans zinc?7bacf265-a290-4eee-bddc-a30eb4025023 ]]></link>
<g:price><![CDATA[ 660.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong class="blue">Une prothèse inférieure stable : défi relevé !</strong><br />Non solubles dans l’eau, les Coussinets Adhésifs garantissent une adhérence parfaite et longue durée. De plus les aliments et boissons ont plus de difficultés à se glisser entre la prothèse et la gencive. Cette nouvelle technologie permet de créer une liaison solide et durable pendant toute la journée. Ces coussinets règlent ainsi les problèmes d’instabilité de la prothèse inférieure, même dans les cas les plus  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>9002240310155</g:gtin>
<g:brand><![CDATA[ Biosynex ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3692ba481e7c8420449d3c6090836c0613453b51b76bbb723313885b0dad20c6 ]]></g:image_link>
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
<title><![CDATA[ Fixodent Anti particules crème fixatrice adhésive 57gr ]]></title>
<g:id>d2fdb712-2824-402e-9dfd-1678fd7587f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-anti particules crème fixatrice adhésive 57gr?d2fdb712-2824-402e-9dfd-1678fd7587f0 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Appliquez Fixodent Pro Plus Barrière Anti-Particules quotidiennement pour éviter que les particules alimentaires ne se glissent sous votre prothèse dentaire.</p><p>Son embout fin permet une application précise et forme une barrière confortable contre les infiltrations, assurant ainsi une meilleure fixation. Cette crème adhésive Premium est adaptée aux prothèses dentaires totales et partielles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216621076</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d0354230aa5d75e14a537b2a07263730ebee10f6cb85c9dd370c63d618c310e6 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE BUCCO-DENTAIRE > PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Complete Pro Soin Confort 70g ]]></title>
<g:id>d05bc5a4-1714-40bc-8436-c67fb9741791</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-complete pro soin confort 70g?d05bc5a4-1714-40bc-8436-c67fb9741791 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fixodent Pro Soin Confort. Modèle Eco.</p>
<p>Crème Fixative pour Appareils Dentaires. Fixation extra-forte.</p>
<p>Crème fixative extra forte pour appareils dentaires, permettant une fixation immédiate et durable pendant toute la journée.</p>
<p>Elle forme un coussin adhésif et évite les irritations dues à l’insertion de particules alimentaires entre l’appareil et les gencives.</p>
<p>Vous pouvez ainsi sourire, parler, boire et manger en toute confiance.</p>
<p>Arôme menthe.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331675</g:gtin>
<g:brand><![CDATA[ GSK SANTE FAMILIALE  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2dada8953af402d5ae36c2da39ad1c91ea99ae22f8c0cb982cd74be59df76cbd ]]></g:image_link>
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
<title><![CDATA[ Fixodent Duo action creme fixatrice 40gr ]]></title>
<g:id>10c52aab-f031-4e78-a384-5f82ebd437e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-duo action creme fixatrice 40gr?10c52aab-f031-4e78-a384-5f82ebd437e8 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fixodent Pro Idée Nature vous aide à prendre soin de vos gencives en les protégeant des irritations. Son arôme contient des extraits naturels de camomille et de propolis et sa formule vous aide à protéger vos gencives des irritations causées par votre appareil dentaire.</p>
<p>Utilisé quotidiennement, sa formule :</p>
<p>- vous aide à oublier que vous portez un appareil dentaire.</p>
<p>- assure une tenue efficace de votre appareil tout au long de la journée.</p>
<p>- vous aide à garder des g ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331316</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d46c1d5ce9f93ccda516e3fb0919c8a23c639b5f4f1771226db46263b5bb9367 ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Complete Crème Adhésive Pour Prothèses Totales & Partielles Fraîcheur 47g ]]></title>
<g:id>1f7acc9b-6cac-4da8-832f-f6c1edee2585</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro complete crème adhésive pour prothèses totales & partielles fraîcheur 47g?1f7acc9b-6cac-4da8-832f-f6c1edee2585 ]]></link>
<g:price><![CDATA[ 540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les crèmes adhésives peuvent améliorer l’ ajustement de votre prothèse. Elles empêchent votre prothèse de bouger lorsque vous parlez ou mangez et fournissent une protection contre les particules alimentaires et les bactéries. Personne ne s’ apercevra que vous portez un appareil dentaire et vous pourrez profiter de chaque instant de la vie en toute confiance!<br>Fixodent Pro propose une gamme complète de crèmes adhésives qui vous apportent fixation, protection et confort tout au long de la jou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216621014</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/542a5d2f71b0330518911bd77ed191324a7bff3b5e45203b52f12f36daeccdb2 ]]></g:image_link>
<g:product_type><![CDATA[ PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Pro Complete Créme Adhésive pour Prothèses Totales & Partielles Soin Neutre 47g ]]></title>
<g:id>2cc1b6ff-7a92-4327-89d5-46df8a4fa125</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro complete créme adhésive pour prothèses totales & partielles soin neutre 47g?2cc1b6ff-7a92-4327-89d5-46df8a4fa125 ]]></link>
<g:price><![CDATA[ 540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Utilisez Fixodent Pro Complete sans arôme pour une fixation forte et un grand confort tout au long de la journée.<br>Cette crème adhésive convient aux prothèses dentaires totales et partielles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216620437</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2569628de210356c422af9d5bb465a874ffe36bf3fdb828cffad8d766ba1dc4b ]]></g:image_link>
<g:product_type><![CDATA[ PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Pro PLUS Soin Anti-particules. Tube 40G ]]></title>
<g:id>b21bdb6c-3b0d-4dd1-88fc-f4a469606ae9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus soin anti-particules. tube 40g?b21bdb6c-3b0d-4dd1-88fc-f4a469606ae9 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p> Chaque jour avec Fixodent Pro Soin Anti-particules, vous retrouvez la liberté de manger et d'apprécier la nourriture que vous ne pensiez ne plus pouvoir goûter. Sa formule et son embout fin uniques :</p>
<p>- vous aident à oublier que vous utilisez une crème adhésive.</p>
<p>- évitent même aux particules alimentaires les plus gênantes de pénétrer sous votre appareil.</p>
<p>- assurent une tenue efficace de votre appareil tout au long de la journée.</p>
<p>- vous apportent un grand confort et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331033</g:gtin>
<g:brand><![CDATA[ GSK SANTE FAMILIALE  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b0ce0389f82284ac18e2e0e8366b23149c2033aa81ce58b4ca751caa2fd3586d ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Plus Anti-Particules Goût Neutre 40g ]]></title>
<g:id>37c6010a-9e59-41a8-a91b-bc56b6bebbdd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus anti-particules goût neutre 40g?37c6010a-9e59-41a8-a91b-bc56b6bebbdd ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>crème adhésive innovante spécialement conçue pour offrir une fixation longue durée des prothèses dentaires tout en assurant un confort optimal au quotidien. Grâce à sa formule avancée, ce produit garantit une protection efficace contre l'infiltration des particules alimentaires, permettant ainsi de profiter pleinement de chaque repas sans désagrément.</p><p>La formule unique de Fixodent Pro Plus Anti-Particules intègre des polymères adhésifs puissants qui assurent une tenue ferme et sécurisée ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216620857</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f0c5fa2b023c4df20557778afa9de1fa74b815ec2cdc04ed82c69a8cf8320207 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE BUCCO-DENTAIRE > PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Pro Plus Crème Adhésive Antiparticules Pour Prothèses 57 g ]]></title>
<g:id>f82519c8-0210-4aec-8a1d-03104575def4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus crème adhésive antiparticules pour prothèses 57 g?f82519c8-0210-4aec-8a1d-03104575def4 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fixodent Pro est la solution idéale pour les porteurs de prothèses dentaires recherchant confort et efficacité. Élaborée par Oral-B, cette gamme offre une fixation exceptionnelle et un soin optimal des prothèses. La crème Fixodent Pro Professional intègre des technologies avancées pour prévenir l'irritation des gencives dès le premier jour d'utilisation, tout en luttant contre la mauvaise haleine grâce à ses agents antibactériens. Pour ceux qui souhaitent une protection renforcée, Fixodent Pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216620963</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe0f28f699b873fced18b060194c4f7e829ddf998b80c5ad6ef1339a754611ba ]]></g:image_link>
<g:product_type><![CDATA[ PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Pro Plus Crème adhésive ]]></title>
<g:id>27323332-8be1-486f-aca4-d6b294caa82e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus crème adhésive?27323332-8be1-486f-aca4-d6b294caa82e ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>crème adhésive Fixodent Pro Plus Duo Protection</span><span> est un produit d’</span><span>hygiène bucco-dentaire</span><span> destiné aux personnes porteuses de </span><span>prothèses dentaires totales ou partielles</span><span>. Elle permet de </span><span>fixer</span><span> la prothèse durablement et garantit une tenue longue durée. Cette crème présente également l’avantage d’avoir une action </span><span>contre les particules alimentaires</span><span>.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331354</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db17ce2a13cca1cd712d04e710a5695dc934d8527604e402532b551c351384d5 ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Plus Crème adhésive prothèse dentaire antiparticules - 40g ]]></title>
<g:id>f5ff21de-b723-45c2-8e2f-894d4622dad5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus crème adhésive prothèse dentaire antiparticules - 40g?f5ff21de-b723-45c2-8e2f-894d4622dad5 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Utilisez Fixodent Pro Plus Barrière Anti-Particules Fraîcheur chaque jour pour empêcher les particules alimentaires de se loger sous votre prothèse dentaire.<br>Son embout fin permet une application précise et aide à créer une barrière confortable contre les infiltrations de particules alimentaires.&nbsp;<br>Cette crème adhésive Premium convient aux prothèses dentaires totales et partielles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216621229</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/93bdf54ff256b7f5f7f4e43310a701fbaa35a617635e21468b159da2b6e2d0e5 ]]></g:image_link>
<g:product_type><![CDATA[ PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Pro Plus La Meilleure Fixation 60g ]]></title>
<g:id>0f23baa5-2b39-4fc2-8c88-82600391e5b0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus la meilleure fixation 60g?0f23baa5-2b39-4fc2-8c88-82600391e5b0 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p> Tenue imbattable au sein de la gamme Fixodent : jusqu'à 88 % de la tenue initiale en fin de journée</p>
<p>- Offre 10 fois plus de tenue par rapport à un port sans adhésif et maintient parfaitement votre prothèse en place</p>
<p>- Vous offre la liberté de manger toutes sortes d'aliments croquants, grâce à son pouvoir d'adhérence exceptionnel</p>
<p>- Agit comme un coussin entre les gencives et la prothèse dentaire afin de s'adapter à chaque morphologie</p>
<p>- Facile à appliquer en fines ba ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331071</g:gtin>
<g:brand><![CDATA[ GSK SANTE FAMILIALE  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/328e1c91aee5c50ace1adf0c61429b5e8c9bb677b1e3b7163b0943083a542e55 ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Plus Mordant imbattable crème adhésive 40g ]]></title>
<g:id>e2ed5493-36c2-4a3e-9afc-234225e0691b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus mordant imbattable crème adhésive 40g?e2ed5493-36c2-4a3e-9afc-234225e0691b ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Appliquez Fixodent Pro Plus Mordant Imbattable pour assurer une fixation fiable de vos prothèses dentaires tout au long de la journée, surtout pendant les repas. Cette crème adhésive de qualité Premium est adaptée aux prothèses dentaires totales et partielles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8700216620598</g:gtin>
<g:brand><![CDATA[ PROCTER & GAMBLE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40b2d7369e4b2a60cbedf49896af2f60b62b5cf67c4e68a563f0cba82eae988c ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE BUCCO-DENTAIRE > PROTHESE DENTAIRE > PROTHESE DENTAIRE FIXATIF ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fixodent Pro Plus Tube 57g ]]></title>
<g:id>a43ddc7f-db97-4125-a199-d0fb9d82d443</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro plus tube 57g?a43ddc7f-db97-4125-a199-d0fb9d82d443 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fixodent Pro Plus La Meilleure Technologie Anti-Particules 57 g est une crème adhésive pour prothèses dentaires totales et partielles. Son embout de précision la rend facile à appliquer.</p>
<p>Goût neutre.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331712</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87aa3af072659f660548fd1120485ec59f59bb9d48eab6523042693b6139af37 ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Professionnel 57g ]]></title>
<g:id>27fa0505-2cdf-443f-9bbc-d5f68c9628a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro professionnel 57g?27fa0505-2cdf-443f-9bbc-d5f68c9628a1 ]]></link>
<g:price><![CDATA[ 880.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fixodent Pro Professionnel 40 g est une crème adhésive pour prothèses dentaires totales et partielles.<br />Sa formule enrichie vient vous offrir une meilleure fixation*, une meilleure protection des gencives* ainsi que son action antibactérienne* pour vous permettre de vivre en toute confiance et spontanéité.<br />Son tube est doté d'un embout fin afin de favoriser la pose de la crème avec précision.</p>
<p>Dispositif médical.</p>
<p>* Meilleures technologies au sein de la gamme Fixodent.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540762721</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/207ec8081a0e5e0001408d64b421f35428f1acff919f0a473b9311e17679f236 ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Soin Confort 47g ]]></title>
<g:id>3e4321d1-6b86-45bd-adab-09fc2acbf826</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro soin confort 47g?3e4321d1-6b86-45bd-adab-09fc2acbf826 ]]></link>
<g:price><![CDATA[ 540.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème adhésive pour prothèses dentaires Fixodent Pro Complete est le produit idéal pour ceux qui ne veulent plus se préoccuper de leur prothèse dentaire. Quoi que vous fassiez ou mangiez, vous saurez que votre prothèse dentaire est bien maintenue et reste confortablement en place.</p>
<p>Fixodent Pro Complete confère une bonne tenue tout au long de la journée et offre un confort amélioré grâce au coussin créé entre les gencives et les prothèses. Elle permet également d’éviter que les résid ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331590</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e12a0f2065f9593ee26e8705de6f06326a3774bec287b862dac73b4c0951a8ea ]]></g:image_link>
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
<title><![CDATA[ Fixodent Pro Soin Neutre 47 g ]]></title>
<g:id>f4dcc6e1-ae1a-4f3a-9ed0-8ecfd3e454e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro soin neutre 47 g?f4dcc6e1-ae1a-4f3a-9ed0-8ecfd3e454e7 ]]></link>
<g:price><![CDATA[ 540.00 EUR ]]></g:price>
<description><![CDATA[ <div id="description">
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Fixodent Pro soin Neutre vous assure toute la tenue et l'aisance que vous attendez d'une crème adhésive dentaire. Il ne contient aucun colorant ni arôme artificiel. Il a ainsi un goût neutre et sa formule diminue les risques d'hypersensibilité.</p>
<p></p>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331637</g:gtin>
<g:brand><![CDATA[ GSK SANTE FAMILIALE  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ed092a1f2270b15d84981ff38097585964c0efb2106427cffea2b8edb8d1911 ]]></g:image_link>
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
<title><![CDATA[ Fixodent pro professional 40g ]]></title>
<g:id>4c1ec08e-7258-4b1d-bddd-4ea2b3f3bf9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fixodent-pro professional 40g?4c1ec08e-7258-4b1d-bddd-4ea2b3f3bf9f ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Conçu avec des dentistes pour vous donner une fixation imbattable* et une réduction des irritations de la gencive dès le 1er jour**</span></p>
<p><span>Fixodent Pro Professional vous donne aussi la confiance nécessaire pour donner plus de mordant à votre vie.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8006540331798</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d849728391c69f03b1d22f36beef89b1387493e06340d86144e8b931d67b632 ]]></g:image_link>
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
<title><![CDATA[ Flect'Expert Patch gaulthérie 5 patchs ]]></title>
<g:id>5901114c-7f78-43d7-bb60-ce21e502e44d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flect-expert patch gaulthérie 5 patchs?5901114c-7f78-43d7-bb60-ce21e502e44d ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Flect'Expert® Patch Gaulthérie est un patch à double action issu de la thermothérapie et basé sur la technologie Hydrogel. Dès l'application, le patch procure immédiatement un effet froid puis un effet chaud qui soulage durablement les tensions musculaires en procurant une confortable chaleur sur les zones douloureuses. Sa structure douce et confortable, adaptée à tous types de peau, protège la zone douloureuse et par la présence d'hydrogel, sa teneur élevée en eau permet un retrait facile et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700640501468</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a0d3f9bf78b2f4ec5f262c58e633cca110595f83f0934ac67903aa8bbe70d51e ]]></g:image_link>
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
<title><![CDATA[ Flect'Expert Patch harpagophytum 5 patchs ]]></title>
<g:id>8e43a806-07fb-4b8a-a880-8b8832fc53f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flect-expert patch harpagophytum 5 patchs?8e43a806-07fb-4b8a-a880-8b8832fc53f1 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Flect'Expert® Patch Harpagophytum est un patch à effet chaud durable issu d'une technologie innovante, qui dès l'application soulage immédiatement les douleurs articulaires en procurant une confortable chaleur sur les zones douloureuses. Sa structure douce et confortable protège la zone douloureuse et sa technologie garantit un retrait atraumatique et indolore.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700640501451</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac227b83556e19bed3f4bafa846306b16eed0fc4d29940ca0e1310060bf702a9 ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Mimulus 20ml ]]></title>
<g:id>042973b7-67f7-4e94-9cd3-d5b191d85473</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach mimulus 20ml?042973b7-67f7-4e94-9cd3-d5b191d85473 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous avez peur de choses reconnaissables telles que les araignées, l'avion, la mort etc, alors prenez la fleur de bach MIMULUS.</p>
<p>LES BIENFAITS DU PRODUIT :</p>
<p>La peur au quotidien, timidité, crainte identifiable. Si vous avez peur de choses définies telles que les araignées, l'avion, la mort... et que vous êtes de nature timide. L'essence de Mimule (fleur de bach MIMULUS) vous redonnera sûreté en vous et tranquilité. </p>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103588</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/071f2942c3bdc34343bbcaa892da27b77ba71dc87265e6d0f8ffd80a3abf4eb5 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Olive 20ml ]]></title>
<g:id>d12946a2-f310-46a2-b91b-5c1b102e67a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach olive 20ml?d12946a2-f310-46a2-b91b-5c1b102e67a4 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Retrouver force et vitalité.</p>
<p>Olive s'adresse à ceux qui se sentent épuisés physiquement ou moralement après une longue période éprouvante due à des problèmes personnels, une période d'étude ou de travail intense, une longue maladie ou après avoir soigné un malade pendant longtemps. Cette Fleur de Bach convient très bien aux convalescents.</p>
<p>L'Olive se caractérise par l’épuisement qui peut conduire au bord des larmes, lorsque toutes les réserves de force et d'énergie viennent à man ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103618</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/72a41f3b5a2076fc0d6b7ce190e86e4766884065b7d10563f302fa897be89f8b ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Agrimony 20 ml ]]></title>
<g:id>53cc6474-783e-4458-8165-f8babe2c9c6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original agrimony 20 ml?53cc6474-783e-4458-8165-f8babe2c9c6e ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Agrimony 20 ml est conseillée aux personnes sensibles, qui cachent leurs vrais sentiments derrière une façade.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Aigremoine / Agrimonia Eupatoria</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103397</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5714af4d20e59c714b67a9918f14c52ac0abb442e2b652f751af8171d58ac2f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Aspen 20 ml ]]></title>
<g:id>16d29d27-677e-47e1-aabd-6aea58e1caa1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original aspen 20 ml?16d29d27-677e-47e1-aabd-6aea58e1caa1 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Aspen20 ml est conseillée pour les personnes qui ont des peurs, des inquiétudes et des anxiétés sans raison.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Tremble / Populus Tremula</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103403</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/229e795ff6e6dd378b9fe87c6b6257d89e8097958ee54b92f4ef8bd5b2d7b842 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Beech 20 ml ]]></title>
<g:id>dfed46cd-ae8c-4952-bb88-a050e1482cc7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original beech 20 ml?dfed46cd-ae8c-4952-bb88-a050e1482cc7 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Beech 20 ml est conseillée pour les personnes qui ont tendance à tout critiquer se montrant intolérants à l'égard des faiblesses des autres incapables de faire la part des choses. Aisément irritées par les manies et les habitudes des autres, ces personnes sont souvent enclins à juger et peuvent penser toujours avoir raison.</p>
<p>Le hêtre vous permet d'être plus tolérant, de discerner le bon chez les autres malgré leurs différences.</p>
<p>Les essences de fleurs de Ba ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103410</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df495e4b81942e52f78a4298d63be0bc58cdd45702d3b55a6e15295ab465820f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Centaury 20 ml ]]></title>
<g:id>45735d61-5186-4717-8773-6a10182e1a48</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original centaury 20 ml?45735d61-5186-4717-8773-6a10182e1a48 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Centaury 20 ml est conseillée pour les personnes timides qui ne savent pas dire non, qui n'arrivent pas à s'imposer.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103427</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ff5d84cad05f4677e94eed25471265a195dbc09df6a2c5d48cadde8d4aca69f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Cerato 20 ml ]]></title>
<g:id>25d8f27e-d173-496a-8fcc-23ae14194d70</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original cerato 20 ml?25d8f27e-d173-496a-8fcc-23ae14194d70 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Plumbago 20 ml est conseillée pour les personnes indécises et qui ont du mal à prendre des décisions. Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives. Cerato / Ceratotigma Willmottiana</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103434</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1c398ded9822f617ce8a631d7771b46ac4244ac84bcce71cf23c7259fbc5a556 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Cherry Plum 20ml ]]></title>
<g:id>fff2ae92-1cc3-46f0-8c29-30933d93e15c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original cherry plum 20ml?fff2ae92-1cc3-46f0-8c29-30933d93e15c ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Prunus 20 ml est conseillée pour les personnes qui sont dans un profond désespoir, qui ont peur de perdre le contrôle d'eux mêmes.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Cherry Plum / Prunus Cerasifera</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103441</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ed808c27a042f7920219079714b247eef67b06880a2760847cac7bdd7349598 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Chestnut Bud 20 ml ]]></title>
<g:id>0dea884c-b45d-4b0d-9a2b-c83e3f8cdaa5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original chestnut bud 20 ml?0dea884c-b45d-4b0d-9a2b-c83e3f8cdaa5 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Chestnut Bud 20 ml est conseillée aux personnes qui ne savent pas tirer parti de leurs expériences ou de celles des autres et qui sont donc incapables de progresser.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Bourgeon de Marronnier / Aesculus Hippocas ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103458</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8dcacdc29de019ee3ae6575f9bddcf7a21200d36eb38da2eb2ed222f13dc8104 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Chicory 20 ml ]]></title>
<g:id>f73cdaf5-cef8-4a2b-a69d-d768d97a8ff7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original chicory 20 ml?f73cdaf5-cef8-4a2b-a69d-d768d97a8ff7 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Chicory 20 ml est conseillée pour les personnes qui sont possessives, qui recherchent l'attention des autres de manières excessives.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Chicorée/Cichorium intybus</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103465</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/56169c93145b86e694e6dd2056c7d3bf8446f9218337c9838ba1e18e8fb56150 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Clematis 20 ml ]]></title>
<g:id>fcf70e82-5fb2-49c4-80c1-c6143ff59eda</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original clematis 20 ml?fcf70e82-5fb2-49c4-80c1-c6143ff59eda ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Clematis 20 ml est conseillée aux personnes éprouvant un sentiment de manque d'intérêt, qui ont une imagination débordante ayant tendance à rêver.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Clématite / Clematis Vitalba</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103472</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/153f840f33374ddc0c6917c26ad8faac690a7e845a88fd931f9b2a546241fd04 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Crab Apple 20 ml ]]></title>
<g:id>17698288-f137-41de-9259-a9920ec33c80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original crab apple 20 ml?17698288-f137-41de-9259-a9920ec33c80 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Crab Apple 20 ml est conseillée pour ceux qui se sentent impurs et éprouvent de la répugnance à l'égard d'eux mêmes. Cela peut se manifester sous la forme d'une obsession.</p>
<p>La pomme sauvage permet l'acceptation de soi-même et de ses imperfections.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103489</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c463af95e364e5dd9a03094c7fc02ff3b5ee930f3c68aa4c517f96fcc035fc9f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Elm 20 ml ]]></title>
<g:id>b82e65c6-4dcf-4938-a9b5-16b2f04b02d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original elm 20 ml?b82e65c6-4dcf-4938-a9b5-16b2f04b02d2 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Elm 20 ml est conseillée pour les personnes qui ont des capacités au dessus de la moyenne et perdent la confiance en elles ou se découragent.</p>
<p>L'orme est recommandée pour les personnes compétentes qui se sentent écrasées sous le poids de leurs responsabilités, incapables d'y faire face ou d'être à la hauteur de la situation. L'orme permet le retour de l'assurance naturelle et la confiance en soi.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103496</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/169cfe7c5e20cba5485d078fddad99e928d8a7e9201128f659c1f6ebe6a88477 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Gentian 20 ml ]]></title>
<g:id>1f178da6-aeac-4cb7-9b94-388a799344af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original gentian 20 ml?1f178da6-aeac-4cb7-9b94-388a799344af ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Gentian 20 ml est conseillée pour les personnes qui se laissent facilement décourager face à la tâche, ou aux problèmes.</p>
<p>Pour les animaux, cette essence est recommandée si votre animal refuse de se promener par découragement, ou par tristesse.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103502</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0f4c32a8a18638796dc398b90605809292b3e245d61db486b037be76c99ccb26 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Gorse 20 ml ]]></title>
<g:id>46b4e98e-bc35-4cf3-8ca4-d1b69e01e23e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original gorse 20 ml?46b4e98e-bc35-4cf3-8ca4-d1b69e01e23e ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Gorse 20 ml est conseillée pour les personnes en pleine incertitude, dont rien ne semble pouvoir aider.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Ajonc/Ulex europaeus</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103519</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/305d2cdd414b693fb88629833af19f46599a5f5b3f4866d94efcfef2a805d786 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Heather 20 ml ]]></title>
<g:id>dd707028-4bf2-44cd-ad5a-40a95e67baf2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original heather 20 ml?dd707028-4bf2-44cd-ad5a-40a95e67baf2 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Heather convient à ceux qui sont fort préoccupés d'eux-mêmes, centrés sur leurs propres maux et problèmes. Parler est un besoin pour eux et il leur faut un auditoire; ils accaparent donc les gens afin de pouvoir parler d'eux-mêmes dans les moindres détails et à n'en plus finir. Ils peuvent avoir tendance à parler vite et tout près du visage de la personne qui écoute.</p>
<p>Ils n'aiment pas être seuls mais ne se rendent pas compte que si on les évite souvent, c'est parce qu'ils vident les aut ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103526</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ee2ff3ba8dd18b1889b30b5af950cc28570c3afa5ee89e0eea84081ec792d53 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Holly 20 ml ]]></title>
<g:id>88e74085-2745-4bb6-a3d2-454e7708934c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original holly 20 ml?88e74085-2745-4bb6-a3d2-454e7708934c ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Holly 20 ml est conseillée pour les personnes jalouses, envieuses et qui ressentent un sentiment de haine.</p>
<p>Pour les animaux, cette essence est indiquée en cas de jalousie envers un nouvel animal de compagnie ou lors de l'arrivée d'un bébé dans la famille.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103533</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d534e9f11216e6193880e965b94f4a0d2481c27b256e3b087c09f93dc6db3114 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Honeysuckle 20 ml ]]></title>
<g:id>90db63f4-5b23-419a-b354-8b04eb917382</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original honeysuckle 20 ml?90db63f4-5b23-419a-b354-8b04eb917382 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Honeysuckle 20 ml est conseillée pour les personnes attachées aux souvenirs du passé, qui sont nostalgiques et qui ne parviennent pas à se défaire du passé.</p>
<p>Pour les animaux, cette essence est conseillée si votre animal a le mal du pays, ou en cas de perte du propriétaire ou de sa maison.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103540</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9920c6c29aaa739b2590b74e29c45b4a68986ea19aacd7859061b02d7b9ae4a9 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Hornbean 20 ml ]]></title>
<g:id>a3be4dcd-0e5d-495a-831c-9654cd99f858</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original hornbean 20 ml?a3be4dcd-0e5d-495a-831c-9654cd99f858 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Hornbean 20 ml est conseillée aux personnes qui éprouvent un sentiment d'incertitude, un manque d'entrain.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Charme / Carpinus Betulus</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103557</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8abb9b35dfc968bd9ad98b7dc29a899aee0b3b02373077b3495311578fbe39bf ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Impatiens 20ml ]]></title>
<g:id>e6fe16e7-3563-4330-93a1-401f144ad13a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original impatiens 20ml?e6fe16e7-3563-4330-93a1-401f144ad13a ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Impatiens 20 ml est conseillée pour les personnes impatientes, nerveuses, qui s'irritent facilement.</p>
<p>Les personnes énergiques peuvent être tendues et être frustrées par ceux qui manquent de rapidité.</p>
<p>L'impatiente est idéale pour les personnes intelligentes et spontanées dont les pensées et les actions sont trop spontanées.</p>
<p>Elle détend et favorise une humeur positive et agréable avec les autres.</p>
<p>Les essences de fleurs de Bach sont un moyen na ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103564</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4693f6ffae2a880facd8bab0f984273c2f12ecfae47a5ba0f8f6c925938f0280 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Larch 20 ml ]]></title>
<g:id>a42ff8c5-5b9d-44dc-b283-b594f0304f0c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original larch 20 ml?a42ff8c5-5b9d-44dc-b283-b594f0304f0c ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Larch 20 ml est conseillée pour les personnes qui manquent de confiance, qui sont certaines d'échouer, et souffrant d'un complexe d'infériorité.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Mélèze / Larix Decidua</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103571</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/04f8ea68b7db228121a50198a7c3b1b2c27693155662d67413bb247a44a10e15 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Mustard 20 ml ]]></title>
<g:id>d21ab61b-7df4-4497-9ef3-0901d36e449d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original mustard 20 ml?d21ab61b-7df4-4497-9ef3-0901d36e449d ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Mustard 20 ml est conseillée pour les personnes dépressives sans raison, dont la gaieté semble être détruite par un nuage sombre.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Moutarde / Sinapis Arvensis</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103595</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e978bdaf6ca6e9173eaa70e51ae3fb9a6ac644b15d583b0a348ebbad538ac04 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Oak 20 ml ]]></title>
<g:id>a170c24a-2394-41f7-8a9f-749606c793f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original oak 20 ml?a170c24a-2394-41f7-8a9f-749606c793f1 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Oak 20 ml est conseillée aux personnes en état de surmenage, qui travaillent beaucoup et qui ont du mal à décrocher.</p>
<p>Pour les animaux, cette essence est recommandée si votre animal continue d'être en activité malgré la fatigue, et qu'il soit en difficulté.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énerg ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103601</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ec178023e5ec5b1fb01426e0ac4369b33b1291f781c665eb2fc5abf0a9f4e025 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Pine 20 ml ]]></title>
<g:id>31d549bb-b68c-4ab8-98e4-d3c70851e87f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original pine 20 ml?31d549bb-b68c-4ab8-98e4-d3c70851e87f ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Pine 20 ml est conseillée pour les personnes qui éprouvent un sentiment de culpabilité et se remettent en question. Elle est recommandée pour les personnes qui se considèrent responsables des fautes d'autrui, voire de tout ce qui va mal, et se sentent indignes et peu méritantes.</p>
<p>Le pin permet d'accepter les responsabilités de façon réaliste.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103625</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3716ce373fd6a4cee288994e6a309abe0ac971e24f67a884396310a18ad57087 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Red Chestnut 20 ml ]]></title>
<g:id>23b0eac9-670e-48aa-80ee-87a052f0771c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original red chestnut 20 ml?23b0eac9-670e-48aa-80ee-87a052f0771c ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Red Chestnut 20 ml est conseillée aux personnes qui éprouvent un sentiment d'inquiètude, qui éprouvent une impression d'être protecteur(trice) à l'excès vis-à-vis des autres.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Marronnier Rouge / Aesculus Carne ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103632</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65cb6b504d03d43a8a219ff4476be80174b3c2d008f2a6fa329bb6bd1210b4a7 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Rock Rose 20 ml ]]></title>
<g:id>dd77e596-1aca-46e8-bfbd-a7893cd2b3c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original rock rose 20 ml?dd77e596-1aca-46e8-bfbd-a7893cd2b3c7 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Rock Rose 20 ml est conseillée pour les personnes qui paniquent ou se sentent terrorisées, témoins ou victimes d'accidents par exemple.</p>
<p>L'hélianthème offre courage et présence d'esprit, calme en situation d'urgence.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies pos ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103649</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/26997d31fb82309c9291c52288c42f4cdbc804e8c0bcb56913c7e4b5e39e3c4f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Rock Water 20 ml ]]></title>
<g:id>59a3c975-b2cb-4e0d-a750-8fc04f3a1581</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original rock water 20 ml?59a3c975-b2cb-4e0d-a750-8fc04f3a1581 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Rock Water 20 ml est conseillée pour les personnes inflexibles qui font parfois preuve d'abnégation. Elles se montrent souvent rigides envers elles-mêmes et vont jusqu'au martyre, recherchant la perfection.</p>
<p>L'eau de roche combine les idéaux nobles à un esprit souple. Elle vous aide à abandonner les grandes théories et favorise un esprit souple.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elle ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103656</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02873e247815f20878f81f76bd8a49bead756139d2cf9e08981894f945f8e18d ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Sclerathus 20 ml ]]></title>
<g:id>ced36038-142b-47fc-ab61-78d693793d67</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original sclerathus 20 ml?ced36038-142b-47fc-ab61-78d693793d67 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Fleurs de Bach Original Sclerathus 20 ml est conseillée aux personnes éprouvant un sentiment d'incertitude, qui ont l'impression d'hésiter entre deux choses.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103663</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bbc2c1885899cd3a3bec759636fdabbbeecd15967563f6d15187bf17010dd9aa ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Star of Bethlehem 20 ml ]]></title>
<g:id>cc673e6b-e9bc-48a1-83aa-b5e1b377a1b2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original star of bethlehem 20 ml?cc673e6b-e9bc-48a1-83aa-b5e1b377a1b2 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Star of Bethlehem 20 ml est conseillée aux personnes qui ont subis des traumatismes, après un choc ou un stress post-traumatique.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Dame d'Onze Heure / Ornithogalum Umbellatum</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103670</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/91a69c87243dce9e7c3bd2e8a94b198d75dfe7d9a798bf0a9cece607b98df2bd ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Sweet Chestnut 20 ml ]]></title>
<g:id>9519fac5-6ed6-4fce-b736-b6aaedc2f793</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original sweet chestnut 20 ml?9519fac5-6ed6-4fce-b736-b6aaedc2f793 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Fleurs de Bach Original Sweet Chestnut 20 ml est conseillée pour les personnes angoissées, chagrinées, qui souffrent et ont l'impression d'être détruites. Ces personnes peuvent se sentir au bord de la dépression nerveuse.</p>
<p>Le châtaignier soulage la souffrance, le désespoir, l'abattement. Il permet d'affronter calmement les circonstances extérieures, l'esprit tranquille.</p>
<p></p>
<div  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103687</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/edda9bea6ae4b30feb7962e6e7aa7775fa590ffd1e52b40b0083c574df96366c ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Vervain 20 ml ]]></title>
<g:id>3739f0a9-ac04-45f0-b1b2-9acf787f84c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original vervain 20 ml?3739f0a9-ac04-45f0-b1b2-9acf787f84c8 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Vervain 20 ml est conseillée pour les personnes nerveuses, débordantes d'activité voir surexcitée et qui ont donc du mal à trouver le sommeil.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Verveine / Verbena Officinalis</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103694</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cd2f7c8cf92ce35371b47fe0dd383d1717d82571b6bb8ac36505c6f6d663b0a ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Vine 20 ml ]]></title>
<g:id>d82d7b61-1558-475d-b453-d89e803fa407</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original vine 20 ml?d82d7b61-1558-475d-b453-d89e803fa407 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Vine 20 ml est conseillée pour les personnes qui se sentent dominatrices et inflexible, qui ressentent le besoin d'avoir raison.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives.</p>
<p>Vigne/Vitis vinifera</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103700</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ed83eaabf41ea6a4cbf1e2e430c0eb27e0e448cfa60df58b5a03e8fcedd6982 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Walnut 20 ml ]]></title>
<g:id>21fc5b25-111c-45d2-835e-733d8a3ad970</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original walnut 20 ml?21fc5b25-111c-45d2-835e-733d8a3ad970 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Walnut 20 ml est conseillée pour les personnes hypersensibles à certaines atmosphères ou influences. Cette fleur de bach est recommandée en période d'importants changements dans la vie : poussée dentaire, puberté, grossesse, divorce, ménopause...</p>
<p>Le noyer vous aide à progresser, à poursuivre le chemin de votre vie, et à effectuer les changements nécessaires pour mener à bien vos projets malgré le découragement, les objections ou la dérision venant des autres.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103717</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e1ccca703a2fca734892eecced0e275a83a5b12769555b183ab011b2412c5fd3 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Water Violet 20 ml ]]></title>
<g:id>478aabca-22f8-4e23-9cff-683023700fa2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original water violet 20 ml?478aabca-22f8-4e23-9cff-683023700fa2 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Water Violet de Fleurs de Bach s’agit d’un élixir floral qui permet de lutter contre l’envie incessante d’être seul.</p>
<p>Water Violet de Fleurs de Bach aide à être plus ouvert vis-à-vis des autres.</p>
<p>Cet élixir floral convient particulièrement aux personnes réservées ou solitaires.</p>
<p>Pris au quotidien, ce philtre de Fleurs de Bach les aide à surmonter les difficultés à sortir de leur réserve.</p>
<p>Ces personnes deviennent ainsi plus ouvertes et sociables.</p>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103724</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e75032bb0fd78eb65a6bc54254d0d81fa48a81fe3847742b26e38ccea7c8d980 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original White Chestnut 20 ml ]]></title>
<g:id>a4938965-963e-4015-8000-23b2922793ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original white chestnut 20 ml?a4938965-963e-4015-8000-23b2922793ab ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous avez des pensées non désirées, des soucis et êtes préoccupé.</p>
<p>Le potentiel positif du Marronnier d''Inde est la paix de l''esprit. Les idées sont claires et, devenu maître de ses pensées, on peut s'appliquer à réfléchir de façon constructive afin de résoudre ses problèmes. L'inquiétude est remplacée par la certitude d'obtenir un résultat positif.</p>
<p>À base de fleurs et de plantes rigoureusement sélectionnées, ces remèdes 100% naturels aident à mieux gérer les émotions négatives ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103731</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8efdb08a9429c3b8a6c8106aa4aaf97286b6cd0bad050897025a96262e822aa1 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Wild Oat 20 ml ]]></title>
<g:id>1349c40f-0687-43dd-91cd-b03f3e99f5a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original wild oat 20 ml?1349c40f-0687-43dd-91cd-b03f3e99f5a6 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Définir ses ambitions et prendre des décisions.</p>
<p>Wild Oat s'adresse aux personnes qui arrivent à un tournant décisif de leur vie et ne savent pas quelle direction prendre. Elles ont généralement de l'ambition et une multitude de talents, mais elles ne sont jamais entièrement satisfaites car elles ne savent pas précisément où elles vont dans la vie. Elles peuvent avoir essayé plusieurs professions mais n’y ont pas trouvé satisfaction et ne savent pas exactement ce qu'elles veulent. Elles ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103748</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7b1da3ac7cac181e6e7028a624f3fa37731cf9caad4a7ac03b3d4242a254934 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Wild Rose 20 ml ]]></title>
<g:id>465d8a70-a7cd-44cc-9b4d-9670583d432c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original wild rose 20 ml?465d8a70-a7cd-44cc-9b4d-9670583d432c ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Eglantier 20 ml est conseillée aux personnes qui éprouvent un manque d'intérêt, qui réagissent de manière indifférente. Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été découvert par le Dr Bach. Elles permettent de restaurer l'équilibre entre le corps et l'esprit en transformant les énergies et émotions négatives en énergies positives. Wild Rose / Rosa Canina</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103755</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5dd8606f83420e95870ddb4e38d430d0bb28b73a4e0ed997d57c2f52ac18cf94 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Original Willow 20 ml ]]></title>
<g:id>49a00ac8-1498-45ac-afbf-185c28dbcf76</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original willow 20 ml?49a00ac8-1498-45ac-afbf-185c28dbcf76 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Original Willow 20 ml est conseillée pour les personnes qui s'apitoient sur leur sort, qui ont l'impression que l'on abuse d'eux. La fleur de bach Saule aide à neutraliser le ressentiment et à retrouver le sens de l'humour et le sens des proportions.</p>
<p>Le Saule permet de pardonner et oublier les injustices et de prendre plaisir à la vie, attirant les situations positives et les amis.</p>
<p>Les essences de fleurs de Bach sont un moyen naturel et sûr de guérison qui a été d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488103762</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c27e27601e5d0dd3bf475ea5e73562b56d99a7948b2276fefd1bef268828924 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Pastilles Saveur Citron 50 g ]]></title>
<g:id>28f73205-176e-4043-bf10-89faa28d3d43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach pastilles saveur citron 50 g?28f73205-176e-4043-bf10-89faa28d3d43 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Pastilles Saveur Citron 50 g sont des pastilles qui contiennent un mélange de 5 essences de fleurs de Bach Original : Rock rose, Impatiens, Clematis, Star of Bethlehem, Cherry Plum.</p>
<p>Elles apportent les propriétés relaxantes et apaisantes des essences florales :</p>
<p>- la Rock Rose permet de contrôler les peurs paniques,</p>
<p>- l'Impatiens (Impatience) permet de contrôler la précipitation,</p>
<p>- la Clematis (Clématite) permet de rester présent malgré la situation,</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488109726</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b8203e3eb3be10db1d7e8db11f444d46e90995dc15805638904ce678be98932c ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Capsules Harmonie & Positivité 30 capsules ]]></title>
<g:id>8c0c5c2e-6158-419d-bfff-2f61f70ab9af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue capsules harmonie & positivité 30 capsules?8c0c5c2e-6158-419d-bfff-2f61f70ab9af ]]></link>
<g:price><![CDATA[ 1830.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <span>capsules "Harmonie &amp; Positivité" de Rescue Fleurs de Bach</span> sont un complément alimentaire spécialement conçu pour favoriser l'équilibre émotionnel, la positivité et le bien-être mental. Ces capsules combinent les bienfaits des fleurs de Bach, du safran, de la L-théanine, de la vitamine B et du Rescue pour créer une formule synergique pour soutenir l'état d'esprit et favoriser une attitude positive.</p>
<p><span> </span></p>
<p>Les fleurs de Bach sont des extraits floraux d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303094</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ce6ba9f8524adc10aa7f301a8a6c28cade0e20ede5d5f53771a28745dc6e037d ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Compte-gouttes 10 ml ]]></title>
<g:id>23b224ac-79f7-40af-af0a-aca2ce3d52b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue compte-gouttes 10 ml?23b224ac-79f7-40af-af0a-aca2ce3d52b5 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fleurs de Bach Rescue Remedy Réconforte et Rassure 10ml.</p>
<p>Fleur de Bach Rescue permet de mieux gérer le stress, les émotions fortes naturellement... Mises au point dans les années 30 par le docteur Bach, Rescue est utilisé en toute confiance dans plus de 75 pays à travers le monde.</p>
<p>Rescue de la gamme Fleurs de Bach est un complément alimentaire destiné aux coups de stress et émotions fortes.</p>
<p>Sa formule naturelle sans alcool et sans accoutumance réconforte et rassure.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488104196</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/457509c361307e34d31710201150e5b2c0ccae66c186bf58b8aa628134536da4 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Compte-gouttes 20 ml ]]></title>
<g:id>b526ea55-ae78-4811-a584-353391d67262</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue compte-gouttes 20 ml?b526ea55-ae78-4811-a584-353391d67262 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Compte-gouttes 20 ml est un mélange de fleurs de Bach, véritable concentré de sérénité.</p>
<p>Ce flacon compte-gouttes très pratique en cas de situations d'urgences ou de stress, apporte une sensation immédiate de sérénité. Il procure les propriétés relaxantes et apaisantes des essences florales :</p>
<p>- la Rock Rose permet de contrôler les peurs paniques,</p>
<p>- l'Impatiens (Impatience) permet de contrôler la précipitation,</p>
<p>- la Clematis (Clématite) permet de rester p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488104202</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aa979290298aa2f3b328a8306dbea5e5e2082d7b66b1d3d7405213f16a1fc1bf ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Crème Original  30 ml ]]></title>
<g:id>00a8017c-98da-4051-a492-f777fd583e84</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue crème original  30 ml?00a8017c-98da-4051-a492-f777fd583e84 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Crème Les Fleurs de Bach Original pour la Peau 30 ml est une crème apaisante pour le visage et le corps qui contient un mélange d'Authentiques Fleurs de Bach Original (Rock Rose, Clematis, Impatients, Cherry Plum, Star of Bethlehem, Crab Apple). Cette crème apporte réconfort et bien-être à votre peau.</p>
<p>Sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488108828</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74e59a2ce5b721ba09c33420d505bcc7ff25fd4ce11421fe221ca9309f9ba916 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Gummies Orange 60 Gommes ]]></title>
<g:id>f677caf4-1f0e-4cf7-86f5-722910825c13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue gummies orange 60 gommes?f677caf4-1f0e-4cf7-86f5-722910825c13 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les Gummies RESCUE</span><span class="s2">® </span><span>sont au délicieux goût </span><span class="s3">naturel </span><span>d’orange, sans alcool, </span><span class="s3">sans colorants artificiels, </span><span>peuvent convenir à tous, et peuvent être utilisables à partir de 3 ans.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303254</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a6c57faeb8c759a7c22732ba282df1d4f98d8f7e9d2bf0d7ffc2c42167143913 ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Rescue Kids Jour Fraise 10ML ]]></title>
<g:id>8be6a3e8-ff8a-4d74-b36a-4b353439e853</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue kids jour fraise 10ml?8be6a3e8-ff8a-4d74-b36a-4b353439e853 ]]></link>
<g:price><![CDATA[ 1265.00 EUR ]]></g:price>
<description><![CDATA[ <p>Développé pour apporter sérénité et réconfort, RESCUE® l’accompagne dans</p><p>toutes&nbsp; les situations qui peuvent être source de stress pour lui au quotidien : nouvel environnement, voyage, examens, visite chez le dentiste, séparation,...</p><p>Pour rassurer les enfants dès qu'ils en ont besoin.</p><p>Flacon compte-gouttes 10 ml.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304398</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/68a2a08b4f0f948e6a2a39da08b631ed9ec1125740f48f0059ffb6f8dbac1d25 ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Rescue Kids Nuit Compte-Gouttes 10 ml ]]></title>
<g:id>25000d15-b52a-4726-822f-2b67aa6e22f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue kids nuit compte-gouttes 10 ml?25000d15-b52a-4726-822f-2b67aa6e22f3 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Rescue Nuit Kids</span><span> est un </span><span>complément alimentaire</span><span> à base de </span><span>6 fleurs de Bach Original</span><span> dans une solution de glycérine.</span><br /><br /><span>Rescue Nuit Kids, c'est l'association du mélange Rescue de 5 fleurs de Bach Original et de la fleur de Bach Original White Chestnut. Il peut être utilisé par tous.</span><br /><br /><span>Formule </span><span>sans alcool</span><span>.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488302806</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c30333146610158d0339357232391cef70e20d0372b9ad05127e067041d5efff ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Kids Rescue Remedy Compte-gouttes 10 ml ]]></title>
<g:id>e020d785-9679-4156-8d13-8b8754bc2104</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue kids rescue remedy compte-gouttes 10 ml?e020d785-9679-4156-8d13-8b8754bc2104 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bach Kids Rescue Remedy Compte-gouttes 10 ml est un complément alimentaire réconfortant et rassurant pour les enfants.</p>
<p>Idéal pour un premier jour d'école, une épreuve, un exposé, un voyage ... ce complément alimentaire calme l'enfant énervé et agité.</p>
<p>Ce complément alimentaire procure les propriétés relaxantes et apaisantes des essences florales :</p>
<p>- la Rock Rose permet de contrôler les peurs paniques,</p>
<p>- l'Impatiens (Impatience) permet de contrôler la précipitation,< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488106893</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0eda9f56315988c68a097814eda9dfa2a5e8a13a77fc0036f031602db50f534e ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Nuit 20ml ]]></title>
<g:id>95c4558d-f6ed-45a2-8301-8d483f24ba8e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuit 20ml?95c4558d-f6ed-45a2-8301-8d483f24ba8e ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour les difficultés d'endormissement ou insomnies dues à une activité mentale intense avec idées récurrentes voire obsessionnelles. Une nuit paisible naturellement, sans accoutumance.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304671</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8738c1bcd9de137f89d2936f68c4c646cde85b92da6a5135bddb11aa4db6ecf3 ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Rescue Nuit Compte-Gouttes 10 ml ]]></title>
<g:id>4debc699-f767-425f-a271-58c357080ad0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuit compte-gouttes 10 ml?4debc699-f767-425f-a271-58c357080ad0 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Nuit Compte-Gouttes 10 ml est un mélange de fleurs de Bach associé à la fleur de marronnier blanc qui participe à lâcher prise la nuit pour un réveil serein.</p>
<ul><li>La Rock Rose permet de contrôler les peurs paniques,</li>
<li>l'impatiens permet de contrôler la précipitation,</li>
<li>la clematis permet de rester présent malgré la situation.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488104561</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/89619645116f904380ee6aad76ec9178cbef51220b08241a94d4aa00ae318f13 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Nuit Gummies Fraise x 60 ]]></title>
<g:id>56007018-eb52-467a-8834-4de1770aae4f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuit gummies fraise x 60?56007018-eb52-467a-8834-4de1770aae4f ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Ces compléments alimentaires sous forme de gommes à mâcher vous aident à vous endormir plus rapidement, passer une bonne et longue nuit de sommeil et vous réveiller en plein forme.</p>
<p>Lors d'insomnies occasionnelles ou de périodes d'agitation, ces gummies seront votre allié pour favoriser la relaxation et éliminer les pensées répétitives et le stress.</p>
<p>Vous retrouvez les 6 fleurs qui ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303261</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8c3cb04afbbc1c6d89d42a129a9f5a4972cb8b8cb521fc6381ff73b8fc3857d ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Nuit Perles 14 Capsules ]]></title>
<g:id>9bd3835b-8f3d-4710-8d8a-efd349e2e022</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuit perles 14 capsules?9bd3835b-8f3d-4710-8d8a-efd349e2e022 ]]></link>
<g:price><![CDATA[ 840.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Nuit Perles 14 Capsules est un complément alimentaire sous forme de perles et à base de fleurs de Bach Original dans une solution d'huile de pépins de raison. Il contient un mélange de 6 fleurs de Bach Original dont White Chestnut qui participe à des nuits harmonieuses.</p>
<p>Il est idéal pour lâcher prise la nuit, pour la veille de réunion ou de départ.</p>
<p>Sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488109023</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c3188f9bfd0d4c6ee3360f008e5a6a8b1237e432f89980e5a373477c7236f13c ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Nuit Spray 20 ml ]]></title>
<g:id>a949f3bc-91b2-4016-8c53-d60326ab61f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuit spray 20 ml?a949f3bc-91b2-4016-8c53-d60326ab61f1 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Spray Nuit Bach Original.</p>
<p>Rescue Spray Elixir floral d'urgence nuit est une réponse naturelle en cas de stress, trac et d'émotions fortes pour retrouver un sommeil serein et paisible.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488104578</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5532493af7ee7f750689cf5083fa2e3a710b31eabe286cdb39a70f004265c078 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Nuit spray sans alcool 20 ml ]]></title>
<g:id>b384d871-c6e8-4947-99bf-8d39365aeec0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuit spray sans alcool 20 ml?b384d871-c6e8-4947-99bf-8d39365aeec0 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p2">RESCUE<span class="s2">® </span>pense au bien-être émotionnel de tous et a conçu cette année une nouvelle formule à base de glycérine végétale pour tous ceux qui n’utilisent pas ou qui préfèrent les produits sans alcool.</p>
<p class="p3">Enrichi de la fleur de Bach<span class="s2">® </span>Original des pensées sereines White Chestnut, RESCUE Nuit<span class="s2">® v</span>ous aidera à lâcher prise la nuit pour un réveil en toute sérénité.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303223</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cfce3ac9ae0abd5fe76f844ae0586f472c14682a3c68c4d8a5e7e5c79aaf75f4 ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Nuits Paisibles 30 capsules ]]></title>
<g:id>f24f0f74-4c55-4ffe-bb29-397bb5ed64a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue nuits paisibles 30 capsules?f24f0f74-4c55-4ffe-bb29-397bb5ed64a5 ]]></link>
<g:price><![CDATA[ 1830.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lorsqu'on parle du complément alimentaire <strong>Rescue Nuits Paisibles Capsules</strong>, on parle d'une solution pensée pour faciliter <a href="https://www.soin-et-nature.com/fr/93-stress-sommeil-detente" target="_blank">un sommeil réparateur et harmonieux</a>. Le produit s'appuie sur une combinaison d'ingrédients naturels et de principes actifs destinés à apaiser, à relaxer et à régénérer pendant le sommeil. Chaque ingrédient a été soigneusement sélectionné pour ses vertus spécifiques. Le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303070</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b840a90b304ce86774c2297a08175d1474120ce20fee44c4214578bbd7f837e6 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pastilles Cassis 50g ]]></title>
<g:id>b21af3cd-19c9-46e3-a7fb-e2513511212a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles cassis 50g?b21af3cd-19c9-46e3-a7fb-e2513511212a ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Délicieuses, pratiques et discrètes, les pastilles RESCUE® saveur cassis contiennent le mélange de 5 Fleurs de Bach Original. Idéales en réunion, examen, déplacement…</p>
<p>Ces bonbons à sucer sont de véritables <span>concentrés de sérénité</span> grâce à un mélange de 5 <span>fleurs de Bach Original</span> : Rock rose, Impatiens, Clematis, Star of Bethlehem et Cherry plum. Sans sucre, ils sont dotés d'un délicieux arôme naturel de cassis. SANS ALCOOL. Rescue sous forme de pastilles à sucer. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488105216</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1edb0e363fffd762aac769747a446e14613c9e8a72bc75a22362fc0af4316841 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pastilles Cassis Nuit 50g ]]></title>
<g:id>6e6bb2d9-518a-4807-a66f-4cc10be8bf47</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles cassis nuit 50g?6e6bb2d9-518a-4807-a66f-4cc10be8bf47 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>SANS ALCOOL ET SANS SUCRE</p><p>Douces et fruitées, ces pastilles gourmandes sauront séduire les petits comme les grands. Le célèbre mélange RESCUE® Nuit s’associe au goût cassis dans ces friandises sans alcool, sans sucres et sans aromes artificiels.</p><p>Les pastilles sont pratiques et discrètes, à transporter et à conserver sur soi.</p><p>Idéales en voyage, déplacements ou avant et pendant les examens.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304657</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7faf7ed5adb6c8353e81b4cfbf9f1b058f82d1e7783de0deda9315b9d0b267f ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Rescue Pastilles Kids Fraise 50g ]]></title>
<g:id>0240c241-5be7-4cef-9add-9069b819dece</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles kids fraise 50g?0240c241-5be7-4cef-9add-9069b819dece ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>SANS ALCOOL ET SANS SUCRE</p><p>Délicieuses, pratiques et discrètes, les pastilles RESCUE® saveur fraise contiennent le mélange de 5 Fleurs de Bach Original. Idéales pur les stress ponctuels des enfants!</p><p>Le célèbre mélange RESCUE® s’associe au délicieux goût fraises dans de nouvelles pastilles sans alcool, sans sucres et sans aromes artificiels pour vos enfants.</p><p>• Les Pastilles RESCUE® Kids goût fraise, à emporter partout contribue à apaiser votre enfant et l’aide à mieux gérer se ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304688</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39583922d23468da5f159d26d4fe27e2151d3a5f3e5692e8e06228f459a26806 ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Rescue Pastilles Saveur Fruits des Bois 50g ]]></title>
<g:id>e6bb969b-49e2-4bf2-b972-06ddb4c178b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles saveur fruits des bois 50g?e6bb969b-49e2-4bf2-b972-06ddb4c178b3 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Pastilles RESCUE Saveur Fruits des Bois sont des pastilles formulées à partir de Fleurs de Bach et reconnues pour leurs vertus thérapeutiques, apaisantes et relaxantes. </p>
<p>Sans alcool. Sans sucres. Facile à transporter.</p>
<div id="kurato_extension_modal"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304640</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/472ba3ce6a8a2a081f82f5d2eb635d5d4bb8b1066c41638f9a6bf59507251a06 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pastilles Saveur Orange Sureau 50 g ]]></title>
<g:id>cbf64303-c95c-4354-ac45-f4877760c808</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles saveur orange sureau 50 g?cbf64303-c95c-4354-ac45-f4877760c808 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Pastilles Saveurs Orange Sureau 50 g sont des bonbons sans sucres avec édulcorants qui contiennent un mélange de 5 fleurs de Bach Original : rock rose, clématite des haies, balsamine de l'Himalaya, prunier-cerise et étoile de Bethléem.</p>
<ul><li>La rock rose (Helianthemum nummularium) permet de stimuler le courage,</li>
<li>la clématite des haies (Clematis vitalba) permet de rester présent malgré la situation,</li>
<li>la balsamine de l'Himalaya (Impatiens glandulifera) permet d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488104387</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a372763d5f089dda820aeab1afe875459f41550065f15d93d28e5e82d15d3636 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pastilles Saveur Pastèque, 50g ]]></title>
<g:id>1fb3079b-4fa7-49ef-b794-ebd349669168</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles saveur pastèque, 50g?1fb3079b-4fa7-49ef-b794-ebd349669168 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les </span><span>pastilles Rescue Pastèque Fleurs de Bach</span><span> sont de délicieux bonbons sans sucres, avec édulcorants, à l'arôme naturel de pastèque. Ces </span><span>bonbons à sucer</span><span> Fleurs de Bach Rescue sont de véritables petites douceurs qui vous apporteront une petite pause gourmande et réconfortante à tout moment de la journée. Conditionnés dans une petite boite en métal, ils trouveront facilement leur place à la maison, au bureau, en voiture, dans votre sac o ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304565</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/93fa7de83150a3d87ccb76ec9026ade9d234a2ff798adbfe493563bc8f95ced9 ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pastilles Saveur Pomme et Menthe - 50g ]]></title>
<g:id>d3954c95-ebf1-44bc-a40b-f1b2980754cf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pastilles saveur pomme et menthe - 50g?d3954c95-ebf1-44bc-a40b-f1b2980754cf ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <div>
<p>Douces et fruitées, ces pastilles délicieuses raviront aussi bien les enfants que les adultes. Le célèbre mélange RESCUE® se marie avec le savoureux goût de pomme-menthe dans ces friandises sans alcool, sans sucres ajoutés et sans arômes artificiels. Pratiques et discrètes, elles se glissent facilement dans votre sac et sont parfaites à emporter partout. Idéales lors de voyages, de déplacements ou avant et pendant les examens.</p>
</div>
<div id="kurato_extension_modal"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304572</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/48765d69c4f4fdc9f3b3b6af8bb65ac0a38f9a8ae6b55cc4b0bc95fab0915f00 ]]></g:image_link>
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
<title><![CDATA[ Fleur de Bach Rescue Perles 28 Capsules ]]></title>
<g:id>4e66e117-43cf-4f1a-878b-df37720f1235</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue perles 28 capsules?4e66e117-43cf-4f1a-878b-df37720f1235 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Perles 28 Capsules est un complément alimentaire à base de 5 fleurs de Bach dans une solution d'huile de pépins de raisin.<br />Sous forme de perles, ce complément alimentaire apporte une sensation immédiate de sérénité.</p>
<p>Sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488109016</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18d1506c76e8af812a6a3e17172d76a2d1b6310b8200abdf9f5af0938f5dac7f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pets (Animaux) Jours  Compte-Gouttes 20 Ml ]]></title>
<g:id>c7349504-0655-427d-8e27-cac30d63587d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pets (animaux) jours  compte-gouttes 20 ml?c7349504-0655-427d-8e27-cac30d63587d ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product-description-short-866" class="tvproduct-page-decs">
<p>Idéal pour les animaux préoccupés en cas de feux d’artifice, d’orages, de consultation chez le vétérinaire, mais aussi ceux qui doivent s’adapter à un nouvel environnement ou passer du temps loin de leur maître.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303889</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6790450b10c86388b613bfa054e3fb49433ff40b4a37e24541df628fd743919d ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pets Friandises Relaxantes Pour Chien, 60 Croquettes ]]></title>
<g:id>66e0c503-afdb-4a02-82f2-014cb84dd3cf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pets friandises relaxantes pour chien, 60 croquettes?66e0c503-afdb-4a02-82f2-014cb84dd3cf ]]></link>
<g:price><![CDATA[ 1960.00 EUR ]]></g:price>
<description><![CDATA[ <div id="primary" class="content-area">
<div id="product-201473" class="product type-product post-201473 status-publish first instock product_cat-categ_powersante_2247 has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
<div class="aboutandtab">
<div class="blocongletproduit">
<div class="tabsdescription-content">
<div id="tabsolo" class="active">Découvrez les croquettes pour chien Bach Rescue, des friandises relaxantes qui favorisent l'apaisement et l'équilibre émotion ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304251</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/47b490cb53a2a4696ee28843ec5053ad2f0a284a62b0d4a3018d16e1f6c82cfc ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Pets Nuit (Animaux) Compte-Gouttes 20 Ml ]]></title>
<g:id>5bc396f5-673b-463f-81bb-f23b97c6ae06</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue pets nuit (animaux) compte-gouttes 20 ml?5bc396f5-673b-463f-81bb-f23b97c6ae06 ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product-description-short-867" class="tvproduct-page-decs">
<p>Cette formule rassemble tous les bienfaits du mélange RESCUE® Original avec en plus White Chestnut pour contribuer à l’apaisement des animaux de compagnie le soir (Feux d’artifices, bruits bizarres la nuit).  Idéal pour préparer votre animal à l’heure du coucher.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488304220</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a201b60a7fe50e7d6d8cbd6b5cd71489c1bd0ec4373186363e39cf78534f36c ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Spray - 7ml ]]></title>
<g:id>24636b01-0190-455f-980d-f5468f97a72a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue spray - 7ml?24636b01-0190-455f-980d-f5468f97a72a ]]></link>
<g:price><![CDATA[ 915.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Rescue Spray</span></p>
<p>Le fameux Spray Rescue s’impose de plus en plus comme l’indispensable de nos journées bien remplies. Pratique et fonctionnel, il saura vous accompagner aussi bien à la maison, qu’au bureau ou qu’en voyage.</p>
<p>Les incontournables Rescue® pour votre lâcher prise au quotidien. On ne les présente plus, les fameux flacons jaunes qui sont devenus les incontournables de la gamme Rescue® qui ont su avec les années s’imposer comme le meilleur allié des étudiants, e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488302851</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0fc6b4053bdf3bf223906650c72c167fbb143cd30bf338bf81befa24a4e9b4d4 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Spray 20 ml ]]></title>
<g:id>7f6910ee-282f-4e31-ba6b-d454ffac8177</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue spray 20 ml?7f6910ee-282f-4e31-ba6b-d454ffac8177 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Spray 20 ml est un mélange de fleurs de Bach, véritable concentré de sérénité.</p>
<p>Ce spray prêt à l'emploi, très pratique en cas de situations d'urgences ou de stress (voiture, sac à main, travail), apporte une sensation immédiate de sérénité. Il procure les propriétés relaxantes et apaisantes des essences florales :</p>
<p>- la Rock Rose permet de contrôler les peurs paniques,</p>
<p>- l'Impatiens (Impatience) permet de contrôler la précipitation,</p>
<p>- la Clematis (Clémat ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488104189</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8c246511c2aee129131c2b7b153691bc6b11acfb96142b695b01f29e209178a ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue Spray sans alcool 20 ml ]]></title>
<g:id>786e0946-28e9-4565-bf0b-5fe3ccb3bef1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue spray sans alcool 20 ml?786e0946-28e9-4565-bf0b-5fe3ccb3bef1 ]]></link>
<g:price><![CDATA[ 1740.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p2">Rescue® a pensé au bien-être émotionnel de tous et a conçu une nouvelle formule à base de glycérine végétale pour tous ceux qui n’utilisent pas ou qui préfèrent les produits SANS ALCOOL.</p>
<p class="p2">Du plus petit au plus grand, c’est la sérénité pour tous !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488303216</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22dd5a0f90b12a0085c265c2382dc2d1b51e3e4cccfa200abfc21ce0a77cbb72 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE > AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de Bach Rescue spray nuit mini 7ml ]]></title>
<g:id>3563363c-620b-40bc-a34e-73765a4ba4ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach rescue spray nuit mini 7ml?3563363c-620b-40bc-a34e-73765a4ba4ca ]]></link>
<g:price><![CDATA[ 915.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Rescue nuit spray </span>est un <span>complément alimentaire</span>, un mélange de fleurs de Bach associé à la fleur de marronnier blanc qui aide à retrouver un esprit apaisé et permet de garder l'esprit clair.<span><br /></span></p>
<p>Ce spray prêt à l'emploi, très pratique avant de dormir, apporte une sensation immédiate de sérénité. Il procure les propriétés relaxantes et apaisantes des essences florales :</p>
<ul><li>La Rock Rose permet de contrôler les peurs paniques,</li>
<li>L'I ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488302868</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/976d0dca602c75dce569dee95adb1b0b085feeaf2eb467edb1710b4aadc6792d ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Fleur de bach original rescue remedy pets 10ml ]]></title>
<g:id>2028fcfd-5cc3-432a-9205-7d27b006dad7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/fleur-de bach original rescue remedy pets 10ml?2028fcfd-5cc3-432a-9205-7d27b006dad7 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Rescue Bach Remedy Pets Compte-gouttes 10 ml est un complément alimentaire réconfortant et rassurant pour les animaux.</p>
<p>Il aide à gérer le stress et les émotions fortes des animaux au quotidien. Ce complément alimentaire procure les propriétés relaxantes et apaisantes des essences florales :</p>
<p>- la Rock Rose permet de contrôler les peurs paniques,</p>
<p>- l'Impatiens (Impatience) permet de contrôler la précipitation,</p>
<p>- la Clematis (Clématite) permet de rester présent malgré ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5000488106770</g:gtin>
<g:brand><![CDATA[ FLEUR DE BACH ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7ec1c7d2eee293b9dee5530c953632e0bed11bd4d366f51f58bfaefc5c462a08 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura Beauté Fermeté Peau 20 ampoules 15 ml ]]></title>
<g:id>bc7c993c-74ee-4759-8bd9-845d057d2488</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura beauté fermeté peau 20 ampoules 15 ml?bc7c993c-74ee-4759-8bd9-845d057d2488 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Flora Natura® Beauté - FERMETE PEAU est composé de Collagène marin, d'un extrait de Pensée sauvage (Viola Tricolor), d'Aloe vera (Aloe vera) et de Chlorelle (Chlorella sorokiniana). Extraits et complexe fabriqués et conditionnés dans notre Laboratoire de Coutras (FR-33).</span><br /><br /><span>La Pensée sauvage, favorise la beauté de la peau. Sous forme d’extrait fluide aqueux, elle est associée à l'Aloe vera, qui aide à maintenir la peau saine, au Collagène marin, constituant naturel  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265305209</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b552ee44f64bea9c67baa46cb35629e46f6aea0ed9199c53194372670396d1d1 ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Beauté Hydratant 20 ampoules ]]></title>
<g:id>32ec0a86-fb67-41cf-aaae-c3221ab0fc61</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura beauté hydratant 20 ampoules?32ec0a86-fb67-41cf-aaae-c3221ab0fc61 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Flora Natura® Beauté - HYDRATANT est composé de Collagène marin, d'un extrait d'Ortie (Urtica dioica), d'Aloe vera (Aloe vera), de Zinc et de Sélénium . Extraits et complexe fabriqués et conditionnés dans notre Laboratoire de Coutras (FR-33).</span><br /><br /><span>L'Ortie contribue au maintien d'une peau nette et saine. L'Ortie, sous forme d’extrait fluide aqueux, est associé à l'Aloe vera, qui aide à maintenir la peau saine, au Collagène marin, constituant naturel de la peau, au Zinc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265305308</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ea084b4e35ceab6473810ace1cc4d0a05f9b00c1146cf2a9b12733b656985928 ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Beauté Vitalité peau 20 ampoules ]]></title>
<g:id>c4b77929-6a9b-4d60-bd6f-b7e99cc050ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura beauté vitalité peau 20 ampoules?c4b77929-6a9b-4d60-bd6f-b7e99cc050ae ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Flora Natura® Beauté - VITALITE PEAU est composé d'Acide Hyaluronique, de Collagène Marin, d'un extrait de Gingembre (Zingiber officinale) et d'un extrait d'Acérola (Malpighia emarginata) titré en vitamine C. Extraits et complexe fabriqués et conditionnés dans notre Laboratoire de Coutras (FR-33).</span><br /><br /><span>L'extrait d'Acérola titré en vitamine C contribue à la formation normale de collagène pour assurer la fonction normale de la peau. L'Acérola, sous forme d’extrait fluid ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265305315</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e8b8835ed0672ea05c2d7f835ebc0da539d7336762fe3f8b3c6419bb58038fc ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Complexe Beauté Femme cheveux et ongles 20 Ampoules ]]></title>
<g:id>a6507bbb-a79d-433e-a4b5-b4327205d334</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe beauté femme cheveux et ongles 20 ampoules?a6507bbb-a79d-433e-a4b5-b4327205d334 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Flora natura® beauté au féminin cheveux &amp; ongles la kératine est un constituant naturel de la peau, des cheveux et des ongles.<br />Elle est associée à deux oligoéléments, le sélénium, qui contribue au maintien de cheveux et d'ongles normaux, et le cuivre, qui contribue à la pigmentation normale des cheveux ; à la l-arginine et à la vitamine b6 qui participent à la formation de la kératine ; et à un complexe de plantes pour la beauté des cheveux et des ongles.</p>
<p>Chaque plante est iss ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265305223</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a4b4dd61f127c4bc297a328ee8e18e31bc9ff32b9c08edb4e32ec1b7ed6c5e3 ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Complexe minceur cellulite 300 ml 20 Ampoules ]]></title>
<g:id>e0c2b976-105f-48c1-9700-de8e6439340f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe minceur cellulite 300 ml 20 ampoules?e0c2b976-105f-48c1-9700-de8e6439340f ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Flora Natura® MINCEUR MN CELLULITE Anti-capitons. Le Guarana contribue à l'action brûle graisse.</p>
<p>Sous forme d’extrait fluide aqueux, il est associé au Thé Vert, qui favorise le métabolisme et contribue à l'oxydation des graisses, à la Vigne Rouge et au Cassis qui sont utilisés pour le drainage de l'organisme, et au Pisenlit, qui contribue à une meilleure digestion des graisses et aide à favoriser le drainage.</p>
<p>La formule est complétée par de la Vitamine C, du Zinc et du Cuivre, q ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265303076</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9a838d1a40db45f7df346b2b017416e7b4d94d983f217608604b54ef9064cbc4 ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Complexe minceur jambes fines 300ml ]]></title>
<g:id>eae4d05f-6e10-4d4f-a3b4-25d166e623ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe minceur jambes fines 300ml?eae4d05f-6e10-4d4f-a3b4-25d166e623ff ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Reine des prêts est utilisée pour ses propriétés diurétiques. Sous forme d'extrait fluide aqueux, elle est associée à la Myrtille et au Cassis, qui aident à diminuer les sensations de jambes lourdes et qui sont utilisés pour le drainage de l'organisme.</p>
<p>Ce complexe contient également du Thé vert qui contribue à la perte de poids.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265303052</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7a64cb801cc643ff4f1f35936c46190ab888043be5de7f587c9df34e4f4183b ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Immunité renforcement 20 ampoules ]]></title>
<g:id>93767b08-cc00-456b-9f60-c4b9c9bf7237</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura immunité renforcement 20 ampoules?93767b08-cc00-456b-9f60-c4b9c9bf7237 ]]></link>
<g:price><![CDATA[ 1270.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce complexe est composé de plantes (Echinacée, Chlorelle), propolis et d'oligoéléments (Zinc et sélénium) qui permet de renforcer les défenses immunitaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265305162</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e0cfed3964406a48c9f5f00b205a46bfe835012ec8bd0ec3df682066592f2be ]]></g:image_link>
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
<title><![CDATA[ Flora Natura Immunité stimuler 20 ampoules ]]></title>
<g:id>fdb9d672-7fc1-405d-a686-10a2f2495267</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura immunité stimuler 20 ampoules?fdb9d672-7fc1-405d-a686-10a2f2495267 ]]></link>
<g:price><![CDATA[ 1270.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce complexe est compose d'armoise, d'acérola, Vitamine b, cuivre et de zinc qui permet de stimuler le système immunitaire  </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265305179</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1dc53159cfd2255262ec2fdc71dbd9760e2ecdd18ab9eb7592440cd36842eb8d ]]></g:image_link>
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
<title><![CDATA[ Flora Natura® Argousier bio 20 ampoules ]]></title>
<g:id>310691d6-871e-4818-816a-96bd0b5f78f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® argousier bio 20 ampoules?310691d6-871e-4818-816a-96bd0b5f78f6 ]]></link>
<g:price><![CDATA[ 865.01 EUR ]]></g:price>
<description><![CDATA[ <p class="h3"><span>Flora Natura® jus d'argousier Bio contribue aux défenses naturelles de l'organisme et à limiter la fatigue.</span><br /><br /><span><br /></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300310</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab45b252927578f84a4fd8fad01fd96864095fe9a0c97024550fe64f2bd7344a ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Canneberge Bio 20 Ampoules ]]></title>
<g:id>ba8f92d7-4659-4443-9aa9-f8db1bc669ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® canneberge bio 20 ampoules?ba8f92d7-4659-4443-9aa9-f8db1bc669ce ]]></link>
<g:price><![CDATA[ 865.01 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Canneberge, appelée aussi Cranberry, est un désinfectant naturel pour les voies urinaires qui inhibe le développement des germes pathogènes. </span><br /><span>Très riche en vitamine C, la Canneberge est un antioxydant. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300051</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4b5ead43d318f06f5a77358a1fd9c05b01db1df374992d6bc61e0dcee8339cd2 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Cassis BIO 20 Ampoules ]]></title>
<g:id>2b5bb7f3-7b66-47ff-9f53-1332ac017909</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® cassis bio 20 ampoules?2b5bb7f3-7b66-47ff-9f53-1332ac017909 ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le cassis est un arbuste d'environ 1,5 mètre de hauteur, appartenant à la famille des grossulariacées (famille de groseillers). </span><br /><span>Le cassis soigne les douleurs articulaires, l'arthrose, l'arthrite ou la goutte. Il est conseillé en cas de douleurs articulaires. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300037</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9b67107bc5e47292fbfcd04d80c0d242d9a4751b97243b63c38a1faaf554bf70 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Complexe 4+ Mémoire Sénior Bio 20 ampoules ]]></title>
<g:id>ca317481-57fe-47c8-8a70-9de19b48d782</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® complexe 4+ mémoire sénior bio 20 ampoules?ca317481-57fe-47c8-8a70-9de19b48d782 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Le Complexe 4+ associe Ginkgo biloba BIO, Ail noir BIO, Cassis BIO, Echinacée BIO et Primevère BIO. <br />Ce complexe va améliorer la micro circulation pour renforcer la sphère cardiovasculaire et préserver la mémoire ainsi que les fonctions cognitives. </p>
<p> </p>
<div id="i4c-dialogs-container"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302079</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fdf379f46709f7d7012bda371afaee752870b7005fa81f877f2ee2dd9f5d23be ]]></g:image_link>
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
<title><![CDATA[ Flora Natura® Marron d'Inde Bio 20 ampoules ]]></title>
<g:id>584e3e4e-c248-45a7-add2-0505fd2208e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® marron d'inde bio 20 ampoules?584e3e4e-c248-45a7-add2-0505fd2208e1 ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Marron d'Inde, arbre originaire d'Asie mineure et de Grèce mesure une vingtaine de mètres de hauteur.</span><br /><span>Le Marron d'Inde est un tonique veineux pour éviter les varices, les jambes lourdes, les petits hématomes et les hémorroïdes. Il favorise aussi la vasoconstriction. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300150</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a0bdfb5897734151bd42cf05fe560c0a1f98e3983d90ff302331b536bcbc214a ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Millepertuis Bio 20 Ampoules ]]></title>
<g:id>30f6e0ce-c2f6-4702-addf-44fb8faae0b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® millepertuis bio 20 ampoules?30f6e0ce-c2f6-4702-addf-44fb8faae0b4 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Millepertuis est connu pour ses effets antidépresseurs et anti-stress. <br />Véritable calmant naturel, le Millepertuis améliore la qualité du sommeil et permet de lutter contre les troubles de l'insomnie. Le sommeil sera réparateur.<br />Le Millepertuis va permettre de traiter les états dépressifs saisonniers et l'agitation nerveuse. <br />Millepertuis signifie mille trous. Au Moyen Âge, on l'accrochait à la porte des étables le jour de la Saint Jean pour chasser les démons. </p>
<p></p>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300204</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/acaae25304eb61d97d5d6b936dd1ff22c061673bcc56fbf574aa05c3d112c804 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Prêle des Champs BIO 20 Ampoules ]]></title>
<g:id>cbbf45d8-2138-4ad6-85f6-4be469c14005</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® prêle des champs bio 20 ampoules?cbbf45d8-2138-4ad6-85f6-4be469c14005 ]]></link>
<g:price><![CDATA[ 865.01 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Prêle des champs est utilisée contre les douleurs articulaires, les problèmes urinaires, améliore l’état de la peau, des cheveux et des ongles.<span>  </span></span><span><br />Elle est un bon reminéralisant en cas de problèmes osseux. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300365</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9744564f58c3d6f8adce6cd3bfc532e79683c098c6e63ae925fac132a559ade ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Sève de Bouleau Bio 20 Ampoules ]]></title>
<g:id>7050e2eb-554d-4e43-a5bf-83170fa4ffec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® sève de bouleau bio 20 ampoules?7050e2eb-554d-4e43-a5bf-83170fa4ffec ]]></link>
<g:price><![CDATA[ 1160.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Récoltée au printemps, la sève de bouleau est un nectar naturel bourré de vertus pour préparer son organisme à l’arrivée des beaux jours. La sève de bouleau est un reminéralisant et un stimulant pour l’organisme. Cette sève, le liquide du bouleau remonte au tronc pour nourrir les bourgeons. La sève est riche en oligo-éléments et va aider à reminéraliser l’organisme lors d’un changement de saison. Cette cure va stimuler le métabolisme grâce à ses vertus antioxydantes et ses vitamines.</s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300303</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ac00cb6f8a8fab7e7499f24a5af1743c244f3c07b3eb3c9cf5b03a49a920108 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora Natura® Valériane Bio 20 ampoules 15 ml ]]></title>
<g:id>327c7a4b-586c-446c-93b4-d9a41c08e775</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura® valériane bio 20 ampoules 15 ml?327c7a4b-586c-446c-93b4-d9a41c08e775 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Racine de Valériane Bio (Valeriana officinalis)</span><br /><br /><span>Flora Natura® Valériane Bio aide à normaliser et a favoriser le sommeil.</span><br /><br /><span>Cette plante doit son nom Valeriana au latin valere qui signifie bien se porter. En Europe du Nord on lui reconnait le pouvoir de chasser les elfes !</span><br /><br /><br /><span>Convient aux Vegans</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300334</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/17ab6c8e36eda39e115fdfae7732d174e62fcd17aad69376fadfdf8f914bb16d ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora natura Desmodium bio 20 Ampoules 15 ml ]]></title>
<g:id>7d371ed7-c4b4-43b5-b1d9-726224a3a912</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura desmodium bio 20 ampoules 15 ml?7d371ed7-c4b4-43b5-b1d9-726224a3a912 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Desmodium est une plante originaire de l'Afrique Equatoriale. C'est un hépato protecteur puissant pour le foie. Le Desmodium permet de regénérer le foie après avoir subit des traitements lourds. <br />Le Desmodium aide aussi à soigner l'asthme bronchique ou allergique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300068</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f61d25cd5587424ea15400c36801fa945069faf0ed2fab551ce42f7db8440f4 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora natura artichaut bio 20 ampoules ]]></title>
<g:id>a98f8a43-79ee-47ed-bdc0-c13f55dea7c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura artichaut bio 20 ampoules?a98f8a43-79ee-47ed-bdc0-c13f55dea7c5 ]]></link>
<g:price><![CDATA[ 720.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'artichaut favorise le bon fonctionnement du foie. En stimulant le flux des sucs digestifs, il a un effet détoxifiant et favorise le confort intestinal.<br />Cultivée dans l'ouest de la France, l'artichaut est une plante bisannuelle pouvant atteindre 1,5 mètre de hauteur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300136</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db3915609634bfdc911de9d9d722b184f7ea29aabb26f79dae415cb7ccf63650 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora natura aubier de tilleul bio 20 ampoules ]]></title>
<g:id>94d0cbec-f2d2-478c-9fc2-7c1c2e009bc7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura aubier de tilleul bio 20 ampoules?94d0cbec-f2d2-478c-9fc2-7c1c2e009bc7 ]]></link>
<g:price><![CDATA[ 865.01 EUR ]]></g:price>
<description><![CDATA[ <p>Le tilleul est un très grand arbre à l'écorce lisse dans sa prime jeunesse et qui commence à se craqueler (apparition de l'aubier) chez les spécimens de plus d'une vingtaine d'années. L'aubier de tilleul est issu du bois que l'on retrouve entre le cœur de l'arbre et son écorce, il est prélevé sur des spécimens de plantation à la montée de sève. <br />L'aubier a de nombreuses vertus pour la santé, il favorise le drainage de l'organisme, le confort hépatique et rénal.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300020</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9bde96003f4666d2c25bceac15f8682e7bdfa1ba30834f4a4af5dfea3e535660 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora natura chardon marie bio 20 ampoules 15 ml ]]></title>
<g:id>545a9761-14d4-4376-aa0b-9feefd47f71b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura chardon marie bio 20 ampoules 15 ml?545a9761-14d4-4376-aa0b-9feefd47f71b ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p><br /><span>Flora Natura® Chardon Marie Bio contribue à la protection et la détoxification du foie.</span><br /><br /><span>Autrefois le chardon Marie était réputé pour stimuler les esprits et donner du dynamisme.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300044</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff3fbb399163271fddf15ea6d2ab31e84a73e7054ff1e17507a07525edf85a11 ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Flora natura complexe 4+ Articulations bio 20 ampoules 15 ml ]]></title>
<g:id>63aff079-bb80-4dd2-8b79-2f0085d46a43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe 4+ articulations bio 20 ampoules 15 ml?63aff079-bb80-4dd2-8b79-2f0085d46a43 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Flora Natura® Complexe 4+ Bio Articulations - Aide à maintenir la flexibilité des articulations, les muscles et les tendons, Soutient le système locomoteur, soulage les douleurs inflammatoires. Il associe cassis, harpagophytum, ortie, aubier de tilleul, primevère sous forme d’extraits fluides aqueux. Chaque plante est issue de l’agriculture biologique et nos synergies d’extraits ne contiennent ni conservateur, ni colorant. L'ortie est traditionnellement reconnue pour maintenir une bonne ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302093</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3763163d5eb52020e48552be8df47f27f72be196331a9ad5d1b17f91333bd531 ]]></g:image_link>
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
<title><![CDATA[ Flora natura complexe 4+ circulation 20 ampoules ]]></title>
<g:id>30ff6640-c9ae-47ca-84fc-67da5ca7e8d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe 4+ circulation 20 ampoules?30ff6640-c9ae-47ca-84fc-67da5ca7e8d0 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Complexe Circulation associe la Vigne Rouge BIO, le Marron d'Inde BIO, l'Ortie BIO, le Cassis BIO et la Primevère BIO.<br />Ce complexe a pour action de renforcer le tonus veineux. Il évite le syndrome des jambes lourdes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302109</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/150482a84aa0a5844f78237b99aea8471dfbbfdd46b43b8c736c4a8ad4549d3f ]]></g:image_link>
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
<title><![CDATA[ Flora natura complexe 4+ confort urinaire 20 ampoules ]]></title>
<g:id>00f89ab3-0a6f-4e9c-ae59-7dc4748369d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe 4+ confort urinaire 20 ampoules?00f89ab3-0a6f-4e9c-ae59-7dc4748369d9 ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Complexe 4+ Confort urinaire associe Canneberge BIO, Bruyère BIO, Ortie piquante BIO, Reine des prés BIO et Primevère BIO. <br />Le Complexe 4+ Confort urinaire favorise l'élimination rénale de l'eau et aide au maintien de la fonction des voies urinaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302024</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da666b65a24b3f600e5cd70bb0490a03d1f8ded67c5d83461b3d1596c70d1039 ]]></g:image_link>
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
<title><![CDATA[ Flora natura complexe 4+ foie Radis Noir 20 Ampoules ]]></title>
<g:id>ab52e37d-b019-49ef-9a65-3be4a1ab46ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe 4+ foie radis noir 20 ampoules?ab52e37d-b019-49ef-9a65-3be4a1ab46ef ]]></link>
<g:price><![CDATA[ 1063.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Complexe 4+ Foie - Radis Noir associe Radis Noir BIO, Fumeterre BIO, Mélisse BIO, Romarin BIO et Primevère BIO.</span><br /><span>Ce complexe va faciliter l'augmentation des sécrétions biliaires pour améliorer le transit et la digestion.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302055</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58892b621f54ce08dc3c913644834b4ea4424f69614c7dc63596b62bef37f02e ]]></g:image_link>
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
<title><![CDATA[ Flora natura complexe 4+ foie-Artichaut 20 ampoules ]]></title>
<g:id>1fa99f86-c4b3-4324-b309-25b5aa4fa9cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe 4+ foie-artichaut 20 ampoules?1fa99f86-c4b3-4324-b309-25b5aa4fa9cd ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Complexe hépatique, soutient la santé du foie. Contribue à la protection du foie, favorise le fonctionnement hépatique. Il associe artichaut, chardon marie, desmodium, pissenlit et primevère sous forme d'extrait fluide aqueux. Chaque plante est issue de l'agriculture biologique et nos synergies d'extraits ne contiennent ni conservateur, ni colorant.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302048</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4265d9709c9a9a040b10478642d811b45e306c4fedbf41ced0ae89ef2a074c1c ]]></g:image_link>
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
<title><![CDATA[ Flora natura complexe 4+ minceur - élimination 20 Ampoules ]]></title>
<g:id>2029accb-d670-4af2-904a-c2f86cb970aa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura complexe 4+ minceur - élimination 20 ampoules?2029accb-d670-4af2-904a-c2f86cb970aa ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Complexe 4+ associe Aubier de Tilleul BIO, Bruyère BIO, Reine des prés BIO, Pissenlit BIO et Primevère BIO. <br />Le Complexe 4+ Minceur - Elimination nettoie l'organisme de ses toxines et déchets en facilitant l'élimination. Il va drainer sans engendrer de fatigue ni de perte en minéraux. <br />Ce complexe aide à éliminer les graisses et à la perte de poids.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302086</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4525bd3ce7776a93285499d423314f8ad11b0373623a091d2e3d347df8b51789 ]]></g:image_link>
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
<title><![CDATA[ Flora natura duo hépatique bio 20 Ampoules ]]></title>
<g:id>75d449fb-f390-43f7-a702-d77d9668ff99</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura duo hépatique bio 20 ampoules?75d449fb-f390-43f7-a702-d77d9668ff99 ]]></link>
<g:price><![CDATA[ 870.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Duo Hépatique associe Artichaut BIO et Radis Noir BIO.<br />Ce complexe assure, grâce à ses extraits fluides un bon confort hépatique. Allié au radis noir, l'artichaut favorise le bon fonctionnement du foie par son effet "Détox", stimule le flux de sucs digestifs et favorise également le confort intestinal.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265302208</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e3234adfd9b2a36600fecf6ebb492ddc15d8640a35e6fe7487f24601411763b ]]></g:image_link>
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
<title><![CDATA[ Flora natura harpagophytum bio 20 Ampoules 15 ml ]]></title>
<g:id>7e6bd8f5-0c66-4de0-9488-ecfa4dbc8647</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/flora-natura harpagophytum bio 20 ampoules 15 ml?7e6bd8f5-0c66-4de0-9488-ecfa4dbc8647 ]]></link>
<g:price><![CDATA[ 865.01 EUR ]]></g:price>
<description><![CDATA[ <p>L'Harpagophytum aide à soulager les personnes souffrant de douleurs articulaires, lombaires et musculaires.<br />Cette plante est utilisée pour ses vertus antidouleurs et anti-inflammatoires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760265300372</g:gtin>
<g:brand><![CDATA[ FLORA NATURA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60a1b697bd39e57332ae9264a0b734663fd4853369476fcc398fd25e37d0d4fb ]]></g:image_link>
<g:product_type><![CDATA[ PHYTOTHERAPIE ]]></g:product_type>
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
