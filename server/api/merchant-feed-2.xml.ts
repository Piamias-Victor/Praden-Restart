import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Produits santé et bien-être - Partie 2 ]]></title>
<description><![CDATA[ Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès. ]]></description>
<link>https://pharmacieagnespraden.com</link>
<item>
<title><![CDATA[ Arkopharma Collagène Peau, Cheveux, Os & Muscles 280g ]]></title>
<g:id>f6f6a2f3-027e-45cd-abe2-1ebe3910bbfc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-collagène peau, cheveux, os & muscles 280g?f6f6a2f3-027e-45cd-abe2-1ebe3910bbfc ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <div id="shopify-section-template--22871683334468__main" class="shopify-section"><div class="product__row product__row--full">
<div class="product__main"><div class="product__accordion-content">
<p>Pour renforcer son capital santé, la formule experte du Collagène Peau, Cheveux, Os &amp; Muscles associe des peptides de collagène hautement assimilables à de l’acide hyaluronique et des vitamines. Son bon goût fruité et sa dilution rapide en font une solution très agréable à boire.</p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835505467</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d804c287e5051be6fc3706389c6b575a86658b7ff7bc5a3c85ed14b6894d7d9 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Cranberry 60 gummies ]]></title>
<g:id>72ce28b0-49ba-4522-b0aa-30fae0c5c4c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-cranberry 60 gummies?72ce28b0-49ba-4522-b0aa-30fae0c5c4c8 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p id="isPasted"><span>Concentrés en jus de baies de Cranberry ou Canneberge, nos gummies vous accompagnent au quotidien dès 3 ans</span>. La Cranberry a été spécialement sélectionnée par nos experts en phytothérapie pour son usage ancestral.</p>
<p>Naturellement gourmands, sans sucre et au très bon goût de cranberry et cerise ces délicieux gummies sont sans gluten, sans lactose et vegan.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504675</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e9b1789837d7dbaaf52feb1872f951143978c0c22494e5a4f101a7a08eb4547 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Cys-control canneberge 20 sachets ]]></title>
<g:id>4b1f06ac-2b2b-4bcc-b456-a3250abb1f80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-cys-control canneberge 20 sachets?4b1f06ac-2b2b-4bcc-b456-a3250abb1f80 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cys-control® : des actifs 100% d'origine végétale</span></p>
<p>Besoin d’une aide pour un bon confort urinaire ? Cys-Control® Gélules est un complément alimentaire avec édulcorants à base de Canneberge, apportant <span>36 mg de proanthocyanidines totaux (PAC) par jour</span>.</p>
<p>La gamme Cys-Control®, à base de Canneberge et d’autres actifs d’origine végétale, est idéale pour contribuer au <span>bon fonctionnement du système urinaire.</span></p>
<p></p>
<p>arôme framboise</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578830115012</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ba3bda61074f08f2cae1f4e9af9440f1a84ce7ec1c2c1613589716cd72c8d56 ]]></g:image_link>
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
<title><![CDATA[ Arkopharma Douleurs Articulaires & Musculaires 60 Gummies ]]></title>
<g:id>17454593-c68d-4dc2-88be-3ef8830fd726</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-douleurs articulaires & musculaires 60 gummies?17454593-c68d-4dc2-88be-3ef8830fd726 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Douleurs Articulaires &amp; Musculaires 60 Gummies est un complément alimentaire qui aide à préserver la flexibilité articulaire et la santé musculaire.</p>
<ul><li>Le curcuma permet de soulager les douleurs liées à l'usure normale des articulations et des muscles, due à l'activité physique intense ou au vieillissement.</li>
<li>Le poivre noir augmente l'absorption du curcuma.</li>
</ul><p>Arôme naturel orange.</p>
<p>Flacon entièrement recyclable.</p>
<p>Sans gélatine, sans colora ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504934</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/501f4301afb1394487735d835d5ec4e4d0572a0b7b345402215fc72b3d0bd592 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Forcapil Anti-chute 90 comprimés ]]></title>
<g:id>0a944b57-c7e5-4e33-aa1b-c13bfcad5c34</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-forcapil anti-chute 90 comprimés?0a944b57-c7e5-4e33-aa1b-c13bfcad5c34 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Offre 2 + 1 mois offert</span></p>
<p><span>Forcapil® Anti-Chute, une triple action : force, croissance, résistance</span></p>
<p>Forcapil® Anti-chute a été spécialement conçu pour <span>prévenir la chute des cheveux</span> – conséquence directe du stress, de la fatigue passagère, des bouleversements hormonaux, des changements de saison et diverses agressions extérieures – et retrouver <span>force</span>, <span>croissance</span> et <span>résistance</span>.</p>
<p>Nos scientifiques ont d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835502954</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/64a93c6fd210283ade23de8aec83a8365d4387afa3f4cd2afb0dcd64ec38b5fe ]]></g:image_link>
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
<title><![CDATA[ Arkopharma Forcapil Fortifiant Cheveux et Ongles x180+60 ]]></title>
<g:id>41645cf8-e514-4272-a582-d41c3c71109e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-forcapil fortifiant cheveux et ongles x180+60?41645cf8-e514-4272-a582-d41c3c71109e ]]></link>
<g:price><![CDATA[ 2380.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les compléments alimentaires Forcapil bénéficient d'une formule riche en éléments nutritifs : acides aminés soufrés (méthionine et cystine), vitamines et minéraux. Ils nourrissent en profondeur vos ongles et cheveux. Ces compléments alimentaires puisent dans les bienfaits du Zinc pour assurer la synthèse normale des protéines, dont la kératine. Cet actif rend les ongles plus forts et assure leur bonne santé. Grâce à la vitamine B8 présente dans ces compléments alimentaires, les cheveux retrou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401548143728</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8be067ea7793371453e4b844ab836c23daee2eb56614829aca3e5548695b9603 ]]></g:image_link>
<g:product_type><![CDATA[ Médicament > COMPLEMENTS ALIMENTAIRES > Dermatologie, cheveux, ongles ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Forcapil Kératine + Masque Soin Double Usage 200 ml ]]></title>
<g:id>f0eb4d80-fa0b-4063-82d2-b73e11108f3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-forcapil kératine + masque soin double usage 200 ml?f0eb4d80-fa0b-4063-82d2-b73e11108f3c ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Forcapil Kératine + Masque Soin Double Usage 200 ml est un soin élaboré pour apporter force, réparation et protection aux cheveux cassants et abîmés.</p>
<p>Il offre une double utilisation : soin après chaque shampoing ou masque pour une réparation plus intense. Sa formule allie phytokératine, vitamines, zinc et huile de jojoba pour :</p>
<ul><li>Renforcer la fibre capillaire de la racine à la pointe.</li>
<li>Réparer les cheveux abîmés et cassants.</li>
<li>Protéger le cheveu et l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504057</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13557ff5bb76941a9c0ecb056ce3749fada9f58a8d6725f4a0f5fb6fc22d90fc ]]></g:image_link>
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
<title><![CDATA[ Arkopharma Gingembre - Etat nauséeux 40 gélules ]]></title>
<g:id>91111bc0-6596-4eff-8088-58fed5f62ad7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-gingembre - etat nauséeux 40 gélules?91111bc0-6596-4eff-8088-58fed5f62ad7 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gingembre est dynamisant et facilite la digestion. Il aide à lutter contre les nausées en début de grossesse et en cas de mal des transports (bateau, voiture, avion).</p>
<p>Les Arkogélules® Gingembre, vous apportent chaque jour :</p>
<ul>
<li>12,6 mg de gingérols</li>
</ul>
<p>Le <span>rhizome de gingembre</span> est riche en huile essentielle ainsi qu'en gingérols, substances qui lui procurent son activité caractéristique. Il permet ainsi de conserver un bien-être gastro-intestinal en to ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504279</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/83e31f5bdd8d69cdacf7d361c19ad719dabae774ceaab4285fbd0036f29fd95b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Cannelle de Ceylan 10ml ]]></title>
<g:id>04ecd8d3-cc96-4e84-9cf5-d36634d6b3c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle cannelle de ceylan 10ml?04ecd8d3-cc96-4e84-9cf5-d36634d6b3c0 ]]></link>
<g:price><![CDATA[ 1010.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Cannelle de Ceylan (Cinnamomum verum) Bio n°01 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Sri Lanka.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501605</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d4d75d98f2634d00494a06dafefbff862578015441b42495910736b87623895b ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Ciste Bio 5 ml ]]></title>
<g:id>916531e5-41aa-4448-b239-23d16a6e92c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle ciste bio 5 ml?916531e5-41aa-4448-b239-23d16a6e92c0 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Ciste (Cistus ladanifer) Bio n°02 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Maroc.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501582</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66b39a3b5787cf9394e08ec1ffed8be3b7561382f0cd224a36f3c34dab3b3a8e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Citron  Bio 10 ml ]]></title>
<g:id>09c48675-1926-47af-807c-ed11a57d6c06</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle citron  bio 10 ml?09c48675-1926-47af-807c-ed11a57d6c06 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Eucalyptus Citron (Citrus limon) n°03 Bio 10 ml est une huile essentielle 100% pure et naturelle.</p>
<p>Origine : Italie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501261</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69e37217ee8a3aef48a8b61fd1c8d5a1ec84f865247a49187189ae3b1bc6a88f ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Clou de Girofle Bio  5 ml ]]></title>
<g:id>d81d032e-81d5-40dc-937a-bd8370b8c939</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle clou de girofle bio  5 ml?d81d032e-81d5-40dc-937a-bd8370b8c939 ]]></link>
<g:price><![CDATA[ 440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Clou de Girofle (Syzygium aromaticum) Bio n°13 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par expressi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501285</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7933cd70573a01ef29a51aae66c9a70a8b0ce839f79047a785c92e31c4488041 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Cyprès Bio 10 ml ]]></title>
<g:id>b0c95b71-13ca-4174-a4e2-100533af1cb8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle cyprès bio 10 ml?b0c95b71-13ca-4174-a4e2-100533af1cb8 ]]></link>
<g:price><![CDATA[ 635.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Cyprès (Cupressus sempervirens) Bio n°05 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501476</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7f0186957021a7f7b7b7dee50467fff0870f44f8aca255ce3c81581c14b9a04c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Eucalyptus Citronné Bio 10 ml ]]></title>
<g:id>58900fa2-73cb-4bfb-89b5-86fb07db414e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle eucalyptus citronné bio 10 ml?58900fa2-73cb-4bfb-89b5-86fb07db414e ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Eucalyptus Citronné (Corymbia citriodora) n°06 Bio 10 ml est une huile essentielle 100% pure et naturelle.</p>
<p>Origine : Madagascar ou Brésil.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501391</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/856777ff9e54b39384ee4a74a87144dd38183d505ff19879bb09a6b12e464c00 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Eucalyptus Globulus 10ml ]]></title>
<g:id>fd4ac2f7-f756-428f-99f8-fb847e884417</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle eucalyptus globulus 10ml?fd4ac2f7-f756-428f-99f8-fb847e884417 ]]></link>
<g:price><![CDATA[ 440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Eucalyptus Globulus (Eucalyptus globulus) Bio n°07 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Portugal.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501407</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6445c5e12c6efef8943b271f4167824f956fff12383485d7e0b71f4550f3864 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Eucalyptus Radiata  Bio 10 ml ]]></title>
<g:id>b7f4502f-a1fb-475b-989f-6668f72dd76a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle eucalyptus radiata  bio 10 ml?b7f4502f-a1fb-475b-989f-6668f72dd76a ]]></link>
<g:price><![CDATA[ 440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Eucalyptus Radiata (Eucalyptus radiata) Bio n°08 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par press ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501254</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5397e5a7793823912aeaecc86bb6f5fcab6ffbfdeeb5669111e1ec79a6e36d97 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Gaulthérie Bio 10 ml ]]></title>
<g:id>14b0ac93-5bf7-4a61-9d6b-59e3f13cf58f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle gaulthérie bio 10 ml?14b0ac93-5bf7-4a61-9d6b-59e3f13cf58f ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Gaulthérie (Gaultheria fragantissima) Bio n°09 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par expression à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501278</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe84398103a269adf77b5d56e1d25e9e666963359250ff94b40cc384b46b5579 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Genièvre 5ml ]]></title>
<g:id>66e29db2-c0f4-473f-815f-b21880f4052b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle genièvre 5ml?66e29db2-c0f4-473f-815f-b21880f4052b ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Genièvre (Juniperus communis) Bio n°10 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Bulgarie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501483</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66fc75cd057f992514fc6b6d21c3ea13c8a7ec0cc6a51c7bcab73b2d4104e73b ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Gingembre Bio  5 ml ]]></title>
<g:id>ff1dc75e-1714-4a72-8f03-45b5c6fa843a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle gingembre bio  5 ml?ff1dc75e-1714-4a72-8f03-45b5c6fa843a ]]></link>
<g:price><![CDATA[ 705.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Gingembre (Zingiber officinale) Bio n°12 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Sri Lanka ou Madagascar.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501490</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4dd4aed52ffdbe7e5e1da27897dfd37ad2df045e83e1d7f66a8382ce19e59d29 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Géranium Rosat Bio 5 ml ]]></title>
<g:id>5aaa0678-67d2-462b-aaee-149c39de24fa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle géranium rosat bio 5 ml?5aaa0678-67d2-462b-aaee-149c39de24fa ]]></link>
<g:price><![CDATA[ 880.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Géranium Rosat (Pelargonium graveolens) n°11 Bio 5 ml est une huile essentielle 100% pure et naturelle.</p>
<p>Origine : Madagascar.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501346</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b392296265af9b6a635464788a342b5bd4c4cd0a0703c57f950e24fd7649a6e ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Hélichryse 5ml ]]></title>
<g:id>5833deb0-70ee-4b25-a7b8-c7432b45caec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle hélichryse 5ml?5833deb0-70ee-4b25-a7b8-c7432b45caec ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Hélichryse (Helichrysum italicum) Bio n°14 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Bosnie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501599</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a006756b7fa0a569f1aea7326cdea73e0be01f4b43a17be30e9184431519b25 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Katrafay 10ml ]]></title>
<g:id>57481b22-9abe-4f84-b72e-047a32db66cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle katrafay 10ml?57481b22-9abe-4f84-b72e-047a32db66cc ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Katrafay (Cedrelopsis grevei) Bio n°15 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Madagascar.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501469</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87e9463ee49ad6c2ce445de079e761779269dd5a10ce39a2cd7f2ad19381aca6 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Laurier Noble Bio 5ml ]]></title>
<g:id>f1a1e21a-00cf-4827-8181-8ae0a8c4730b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle laurier noble bio 5ml?f1a1e21a-00cf-4827-8181-8ae0a8c4730b ]]></link>
<g:price><![CDATA[ 705.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Laurier Noble (Laurus nobilis) Bio n°16 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Défiinies (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Balkans.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501506</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8020c34a5374a8b17151211459e9a747926b68297981f3767b26338076e4fd1e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Lavande Aspic  Bio 10 ml ]]></title>
<g:id>4bef2223-d2d1-4604-85b4-6965a40601a2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle lavande aspic  bio 10 ml?4bef2223-d2d1-4604-85b4-6965a40601a2 ]]></link>
<g:price><![CDATA[ 605.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Lavande Aspic (Lavandula latifolia) Bio n°17 10 ml est une Huile Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par pression à froid a été effectué.</p>
<p>Origine : Espagne.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501377</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a23812f468b4a9d6fffa5495473c284f92d16d1c2707155e3c92aa21b22fe8a0 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Lavande Fine  Bio  10 ml ]]></title>
<g:id>490d572a-26b0-47dc-b1ac-661ab174a96b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle lavande fine  bio  10 ml?490d572a-26b0-47dc-b1ac-661ab174a96b ]]></link>
<g:price><![CDATA[ 640.01 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Lavande Fine (Lavandula angustifolia) Bio n°19 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par pression à fr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501292</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a387f3639c988bd3a59513fa597f9f38651c2c8af4ce55b10ad18e8d8fab733 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Lavandin Abrial  Bio  10 ml ]]></title>
<g:id>843f45e8-3a74-469f-8688-cfa96be56c32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle lavandin abrial  bio  10 ml?843f45e8-3a74-469f-8688-cfa96be56c32 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Lavandin Abrial (Lavandula x intermedia) Bio n°18 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501452</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/566974645f23ebde310125503e8b3cadf81556a64c51de1f9538a80bd6e6ee18 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Marjolaine Bio  5 ml ]]></title>
<g:id>2558e929-cff6-49c6-919e-3e403b762aa2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle marjolaine bio  5 ml?2558e929-cff6-49c6-919e-3e403b762aa2 ]]></link>
<g:price><![CDATA[ 705.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Arko Essentiel Huile Essentielle Marjolaine (Origanum majorana) Bio n°21 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définies (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Egypte.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501513</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/89b14022d85d52e21fec62ff699ce6a73766aa281d32ac3efc2fe58f7c1b00d9 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Menthe Poivrée  Bio 10 ml ]]></title>
<g:id>b315c43f-011d-4778-9ed5-1fac9ed5b203</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle menthe poivrée  bio 10 ml?b315c43f-011d-4778-9ed5-1fac9ed5b203 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Menthe Poivrée (Mentha x piperita) Bio n°22 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501308</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/453cd59d5efa9dc45d9c497ebad3f74bf8f309236835851dc4d02e0d315b727a ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Niaouli Bio  10 ml ]]></title>
<g:id>99878422-d5cc-4430-9181-7d95c618aeff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle niaouli bio  10 ml?99878422-d5cc-4430-9181-7d95c618aeff ]]></link>
<g:price><![CDATA[ 515.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Niaouli (Melaleuca viridiflora) Bio n°23 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par expression à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501315</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f884a3a09481538e7332ad2d019efefa9d57de9897e518d150828da010f74272 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Orange Bio  10 ml ]]></title>
<g:id>098d1a2a-ef03-4fd5-9138-4a8339676aac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle orange bio  10 ml?098d1a2a-ef03-4fd5-9138-4a8339676aac ]]></link>
<g:price><![CDATA[ 395.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Orange (Citrus sinensis) Bio n°24 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Mexique ou Brésil.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501421</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e37719b6c55bd881be73d31a368d7b947cd3a85ec9e9be05c35ea9ca3256f388 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Palmarosa  Bio  5 ml ]]></title>
<g:id>1b54e96c-6888-45c6-92bd-691693115a60</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle palmarosa  bio  5 ml?1b54e96c-6888-45c6-92bd-691693115a60 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Palmarosa (Cymbopogon martinii) Bio n°25 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Inde ou Népal.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501438</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/26ad90f0c3caca981130a5e5ec1e43a4d9f58c95d2bb13195c6c207d4e587505 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Pin  Bio 5 ml ]]></title>
<g:id>e5590265-a954-46a5-a9d3-90307f4fda45</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle pin  bio 5 ml?e5590265-a954-46a5-a9d3-90307f4fda45 ]]></link>
<g:price><![CDATA[ 555.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Pin (Pinus sylvestris) Bio 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : France ou Bulgarie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501520</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5849ffc35a24efa610e5d0b49d69109ee8effce7a13993693996e8cf6dbc49e ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Ravintsara  Bio  5 ml ]]></title>
<g:id>de1445d4-f925-474e-af20-9d6669bd9c6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle ravintsara  bio  5 ml?de1445d4-f925-474e-af20-9d6669bd9c6c ]]></link>
<g:price><![CDATA[ 440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Ravintsara (Cinnamomum camphora) Bio n°27 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par expression à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501339</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9233fc09a9add5caead01615b7ee4bfd75fc39d2befab79fba4513a452db1cec ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Sarriette des Montagnes Bio 5 ml ]]></title>
<g:id>c12d5680-8d48-432e-9a09-1f80588da815</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle sarriette des montagnes bio 5 ml?c12d5680-8d48-432e-9a09-1f80588da815 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Sarriette des Montagnes (Satureja montana) Bio n°29 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à froid a été effectué.</p>
<p>Origine : Europe du Sud.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501575</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/843002abab7472fcdb776a8eacdcc0ec987136030fd2759bdffec79401b7ca48 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Sauge Sclarée Bio 5 ml ]]></title>
<g:id>f9c6376e-2e9a-4792-8071-41341cc91c0f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle sauge sclarée bio 5 ml?f9c6376e-2e9a-4792-8071-41341cc91c0f ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkpharma Huile Essentielle Sauge Sclarée (Salvia sclarea) Bio n°30 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par pression à froid a été effectué.</p>
<p>Origine : France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501568</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5d0ae89c8da24fedb5ab326143905b5a2de8a2798fcca4724bdf9c745aa880d ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Tea Tree Bio 10 ml ]]></title>
<g:id>6348f0cf-b9ec-4676-9777-6f7960830324</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle tea tree bio 10 ml?6348f0cf-b9ec-4676-9777-6f7960830324 ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Tea Tree (Melaleuca alternifolia) Bio n°31 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son origine géographique est certifiée selon des critères rigoureux (zone géographique, climat, conditions de culture et de récolte). Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur d'eau ou par pression à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501322</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d7d5e444ed0d27fff5c0af9266d31902e6f8eeee2aaa03f3e358e82755fd29c5 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Thym à Linalol Bio 5 ml ]]></title>
<g:id>04dbeca9-0755-4fbb-ba26-846db713745d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle thym à linalol bio 5 ml?04dbeca9-0755-4fbb-ba26-846db713745d ]]></link>
<g:price><![CDATA[ 910.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Thym à Linalol (Thym vulgaris) Bio n°33 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par pression à froid a été effectué.</p>
<p>Origine : France ou Espagne.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501537</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5dabf9ca348ffe83938bc5323717faba8ea50c406f1f692ced6c24ff7a0eb9c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Thym à Thymol Bio 5 ml ]]></title>
<g:id>a4307fab-7341-49c5-866e-a66c19019169</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle thym à thymol bio 5 ml?a4307fab-7341-49c5-866e-a66c19019169 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Thym à Thymol (Thymus vulgaris) Bio n°32 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par pression à froid a été effectué.</p>
<p>Origine : France ou Espagne.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501544</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4688d8206ec38a9d63c28e21c6d2a5cc6b6f48616cd88616c51a0ac2f2e94d2b ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile Essentielle Ylang Ylang  5 ml ]]></title>
<g:id>7d2daf3b-86b0-48ed-9846-9e6ee176b74f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle ylang ylang  5 ml?7d2daf3b-86b0-48ed-9846-9e6ee176b74f ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Huile Essentielle Ylang Ylang (Cananga odorata) Bio n°34 5 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (HEBBD) 100% pure et naturelle, non dénaturée, non coupée, non diluée, non reconstituée. Son identité et sa qualité ont été contrôlées. Le choix du meilleur procédé de distillation, à la vapeur ou par pression à froid a été effectué.</p>
<p>Origine : Madagascar.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501551</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/682a6347f9a58240624bd6f69cfb8d271e22363511c48e64b4e3fbd0c5f3ca04 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile essentielle Citronnelle de Java bio 10 ml ]]></title>
<g:id>1b22d82a-8b3c-4050-a0a7-991d60bcfb3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle citronnelle de java bio 10 ml?1b22d82a-8b3c-4050-a0a7-991d60bcfb3f ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Arkopharma Huile essentielle de Citronnelle de Java BIO n°04</span><span> est un </span><span>complément alimentaire</span><span>.</span><br /><br /><span>Il contient de l'huile essentielle de </span><em>Cymbopogon winterianus</em><span> (dont citronellal, géraniol, citronellol), 100 % pure et naturelle, issue de l'Agriculture biologique. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501384</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/14e22c5c9fe7281646d1a7e1dfa792de2a6ea83c4ee8bf3919ace24afb72923e ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Huile essentielle de Mandarine BIO 10 ml ]]></title>
<g:id>2b5db585-5b1c-4998-a21b-6b0272707a45</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-huile essentielle de mandarine bio 10 ml?2b5db585-5b1c-4998-a21b-6b0272707a45 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Huile Essentielle 100 % pure et naturelle.</span></p>
<p>L'huile essentielle de <span>Mandarine verte BIO</span> a été sélectionnée au Brésil pour son odeur rafraîchissante, douce et fruitée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501414</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/136ee1377b3489de75030921b3ed6d44a28ecf0dcf4e0b089d7417e43c2e30f0 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Humeur positive 60 gummies ]]></title>
<g:id>39710ba3-73df-49ed-8bd4-f772eb10e85d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-humeur positive 60 gummies?39710ba3-73df-49ed-8bd4-f772eb10e85d ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p id="isPasted"><span>Grâce à un concentré de stigmates de Safran, nos gummies vous aident à retrouver une humeur positive dès 12 ans.</span> Spécialement sélectionné par nos experts en phytothérapie pour son action sur les «molécules du bonheur» : la sérotonine, la dopamine et la noradrénaline, le Safran aide à réduire naturellement les tensions et contribue à l’équilibre émotionnel en favorisant la bonne humeur.</p>
<p><em><span>Sans dépendance, ni accoutumance.</span></em></p>
<p>Naturelleme ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504705</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9fb048a1c8ea1c96f13f87ceaec8b400f57de6573c745c58f9d715a01d239780 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Immunité Boostée 60 Gummies ]]></title>
<g:id>886bb95a-d00e-4bc8-83cc-73b808399c29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-immunité boostée 60 gummies?886bb95a-d00e-4bc8-83cc-73b808399c29 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Immunité Boostée 60 Gummies est un complément alimentaire à base de vitamine D3 végétale qui contribue au fonctionnement normal du système immunitaire. Elle permet également de maintenir le capital osseux et la fonction musculaire normale.<br />Hautement dosée, elle participe aussi à l'absorption du calcium et du phosphore.</p>
<p>Arôme naturel orange.</p>
<p>Flacon entièrement recyclable.</p>
<p>Sans gélatine, sans colorant, sans sucre, sans gluten, sans lactose.</p>
<p>Vegan.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504712</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3fbc7b5d09c74ac7cba2c27468197b2e992824497601cc012a8c2b3417b65ac5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Migrastick Fort Roll-on antimigraineux 3 ml ]]></title>
<g:id>7d5ec216-069a-472e-989f-94d733eaad4a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-migrastick fort roll-on antimigraineux 3 ml?7d5ec216-069a-472e-989f-94d733eaad4a ]]></link>
<g:price><![CDATA[ 620.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Migrastick Fort</span><span> est un </span><span>roll-on antimigraineux d'Arkopharma</span><span>, formulé avec du menthol et de l'eucalyptol. Il provoque un effet froid qui permet de soulager très rapidement les migraines. </span><br /><br /><span>Les </span><span>migraines</span><span> sont parfois difficiles à supporter, et leurs impacts ne sont pas à négliger. En effet, elles sont susceptibles de nuire à la qualité de vie et de dégrader les relations professionnelles ou familiales.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835502725</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc86302c695a2c0938b85f52480f68988ba33deba6f101f062c7f6ffb5e56863 ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE COMPLEXE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Olfae Micro-Nébulisateur ]]></title>
<g:id>8b4a99ee-a9e1-4b86-9628-62b0a8fbf275</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-olfae micro-nébulisateur?8b4a99ee-a9e1-4b86-9628-62b0a8fbf275 ]]></link>
<g:price><![CDATA[ 3890.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>La micro-nébulisation par Olfae, une technologie de pointe</strong><br />La diffusion est pure et directe à partir du flacon, sans eau, ni chauffe et permet de préserver 100 % des bienfaits olfactifs et des actifs des huiles essentielles. Olfae transforme les huiles essentielles en microgouttelettes extrêmement légères. Leur durée de suspension est beaucoup plus longue qu’avec un diffuseur classique.</p>
<p>Olfae, des protocoles olfactifs préprogrammés<br />Olfae offre plus de 50 prot ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501629</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f09635717f77d15dfde9f26ec52786695da6a3d19ca4e4efab1bcd3e364a00ca ]]></g:image_link>
<g:product_type><![CDATA[ AROMATHÉRAPIE PRODUIT DE BASE ET DIFFUSION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Perles de Peau Anti-Age Global 30 Sticks ]]></title>
<g:id>a8b65483-4fd0-4407-8c32-d44510c2a8b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-perles de peau anti-age global 30 sticks?a8b65483-4fd0-4407-8c32-d44510c2a8b9 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span id="isPasted">PERLES DE PEAU ANTI-ÂGE GLOBAL </span><span>associe des peptides de collagène, qui améliorent durablement la densité et l‘élasticité de la peau et aident à réduire visiblement les rides à de l'acide hyaluronique pour raffermir la peau.</span></p>
<p>L’activité antioxydante <span>CELL'DEFENSE de la gamme PERLES DE PEAU</span> aide à protéger les cellules du vieillissement prématuré, pour une peau préservée.</p>
<p><span>ERLES DE PEAU ANTI-ÂGE GLOBAL </span>combine des ingré ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504958</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f2e379f91aa392ebfb4304dbb0842e1467761b7b936a8fbbeb54204f4e59c11 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Perles de Peau Anti-Age Global 60 Sticks ]]></title>
<g:id>5dfb8b17-ae2a-4684-af80-0558a950fd33</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-perles de peau anti-age global 60 sticks?5dfb8b17-ae2a-4684-af80-0558a950fd33 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span id="isPasted">PERLES DE PEAU ANTI-ÂGE GLOBAL </span><span>associe des peptides de collagène, qui améliorent durablement la densité et l‘élasticité de la peau et aident à réduire visiblement les rides à de l'acide hyaluronique pour raffermir la peau.</span></p>
<p>L’activité antioxydante <span>CELL'DEFENSE de la gamme PERLES DE PEAU</span> aide à protéger les cellules du vieillissement prématuré, pour une peau préservée.</p>
<p><span>PERLES DE PEAU ANTI-ÂGE GLOBAL </span>combine des ingr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504965</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a4e4366331007c5be80fd873591ccd64a34eb5538afb737c3fbcfe7e431a55f8 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Perles de Peau Hydratant 180 Capsules ]]></title>
<g:id>baf74b12-96d1-48a6-a6ac-da495e39ba28</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-perles de peau hydratant 180 capsules?baf74b12-96d1-48a6-a6ac-da495e39ba28 ]]></link>
<g:price><![CDATA[ 2830.00 EUR ]]></g:price>
<description><![CDATA[ <div class="pb-center-column col-xs-12 col-sm-6 col-md-7 no-description">
<div id="more_info_block" class="clear">
<div id="more_info_sheets" class="sheets align_justify">
<div class="rte">
<p>Perles de Peau Hydratant : associe des actifs d'origine végétale avec les huiles de Carthame, Bourrache et Onagre, et vitamine E, permettant de maintenir la souplesse et l’élasticité de la peau.</p>
</div>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835505009</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d93951f758c70b4c73905880c19e09c842673cb72a99e7bd0bc5af74f4fada36 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Phytobronz  Solaire 60 gummies ]]></title>
<g:id>45c61690-47db-49fa-99f9-a3193577a8f8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-phytobronz  solaire 60 gummies?45c61690-47db-49fa-99f9-a3193577a8f8 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobronz® est un complément alimentaire qui contient un mélange de 9 actifs d’origine végétale, du Cuivre et du Sélénium pour une action complète :</p>
<ol><li>Préparation</li>
<li>Protection anti oxydante (Sélénium, Vitamine E)</li>
<li>Pigmentation de la peau (Cuivre)</li>
</ol><p>Phytobronz, N°1 des préparateurs solaires*</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503777</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71455d5da4bd0afb7a76fc4c98f124d570cacbcd3238c86a3fa3490b423e8db3 ]]></g:image_link>
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
<title><![CDATA[ Arkopharma Phytobronz Solaire 60 Gélules ]]></title>
<g:id>99171573-d251-4f39-9062-038a2b3fa268</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-phytobronz solaire 60 gélules?99171573-d251-4f39-9062-038a2b3fa268 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>La nouvelle formule de PHYTOBRONZ est composée d’un complexe de Caroténoïdes 100% d’origine végétale dont le dosage a été renforcé par rapport à l’ancienne formule, pour vous procurer une peau plus rayonnante et un teint plus unifié.</p>
<p>Phytobronz est un complément alimentaire qui contient un mélange de 9 actifs d’origine végétale, du Cuivre et du Sélénium pour une action complète :</p>
<o ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401526340163</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27f2031caaa28cf4f1e184117dd3f1f38c3271364b15aaeea31b6880f68435fa ]]></g:image_link>
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
<title><![CDATA[ Arkopharma Safran 30 gélules ]]></title>
<g:id>30817afd-a48b-4d43-ac67-e9847c6f27f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-safran 30 gélules?30817afd-a48b-4d43-ac67-e9847c6f27f0 ]]></link>
<g:price><![CDATA[ 1530.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p><span>Le Safran contribue à l’équilibre émotionnel, favorise la bonne humeur et la relaxation.</span></p>
<div id="i4c-dialogs-container"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503883</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03df845e72e391725c26aa52b513c9974bf502284616877ea2db9d9705b3df15 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma Sommeil apaisé 60 gummies ]]></title>
<g:id>471b3d44-ced4-4474-8d52-fc4ea12b125c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-sommeil apaisé 60 gummies?471b3d44-ced4-4474-8d52-fc4ea12b125c ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Grâce à un concentré de pétales de Coquelicot, nos gummies vous aident à retrouver un sommeil apaisé. </span>Spécialement sélectionné par nos experts en phytothérapie pour ses propriétés relaxantes reconnues, le Coquelicot facilite naturellement l’endormissement et favorise un sommeil de qualité et réparateur. Nos gummies conviennent également pour les enfants à partir de 3 ans.</p>
<p><span> Sans dépendance, ni accoutumance et sans somnolence au réveil.</span></p>
<p>Naturellement gour ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504682</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/12ac2b00f3c76f04613bddd5ce7a6490b7b1f556641ecd237db2f95a8e15e66a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkopharma arkogelules passiflore 150 gélules ]]></title>
<g:id>1b599c1b-ec26-435e-8b6d-93efcdb1cc3a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-arkogelules passiflore 150 gélules?1b599c1b-ec26-435e-8b6d-93efcdb1cc3a ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Médicament à base de plantes. Traditionnellement utilisé dans les troubles de l'éréthisme cardiaque de l'adulte (coeur sain). Traditionnellement utilisé dans le traitement symptomatique des états neurotoniques des adultes et des enfants, notamment en cas de troubles mineurs du sommeil.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503166</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c46fc6f389115288c35df68a91491357fbed17fad185ecafa8005d4d90295235 ]]></g:image_link>
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
<title><![CDATA[ Arkopharma arkogélules ail noir bio 40 gélules ]]></title>
<g:id>84d0116f-ea35-4cde-9091-65752d2302ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-arkogélules ail noir bio 40 gélules?84d0116f-ea35-4cde-9091-65752d2302ce ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Ail noir contribue à maintenir une cholestérolémie et une santé cardiovasculaire normales. Nos Arkogélules® BIO ont été formulées dans le respect de nos garanties, gages de la naturalité de nos formules et de l'implication de nos laboratoires pour une santé naturelle au quotidien.</p>
<p>Arkogélules® BIO Ail noir, une formule d’origine biologique hautement concentrée en actifs ciblés</p>
<p>L'Ail noir contribue à maintenir une cholestérolémie et une santé cardiovasculaire normales.</p>
<p>L ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501209</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ec2b61646409e724211ce8d032d04876a9b45da67f68e6cbe463cd06ecb5de6 ]]></g:image_link>
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
<title><![CDATA[ Arkopharma arkogélules ginseng bio 45 gélules ]]></title>
<g:id>8ee3f2bb-981a-4bd0-acda-89846d0feabb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharma-arkogélules ginseng bio 45 gélules?8ee3f2bb-981a-4bd0-acda-89846d0feabb ]]></link>
<g:price><![CDATA[ 1195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkogélules® BIO Ginseng, une formule d’origine biologique, restituant 100% des actifs de la plante</p>
<p>Le Ginseng, grâce à son action tonifiante et stimulante, favorise les capacités physiques.</p>
<p>Les Arkogélules® BIO Ginseng, vous apportent chaque jour :</p>
<ul><li>29 mg de ginsénosides</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835500554</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d3045122dbea651be05a2ccf12881eb86442a5a71edbf7b7cf7c7e52ed954ccb ]]></g:image_link>
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
<title><![CDATA[ Arkopharmacie Jambes légères 60 gummies ]]></title>
<g:id>027ff04f-9cdc-4844-8de8-248cdb6143eb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkopharmacie-jambes légères 60 gummies?027ff04f-9cdc-4844-8de8-248cdb6143eb ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p id="isPasted"><span>Grâce à un concentré de feuilles de Vigne rouge</span>, nos délicieux gummies vous aident à retrouver des jambes légères. Spécialement sélectionnée par nos experts en phytothérapie pour ses propriétés reconnues sur la circulation, la Vigne rouge favorise le retour veineux pour ainsi améliorer la circulation sanguine et soulager les sensations de jambes lourdes.</p>
<p>La Vigne Rouge va vous aider à favoriser une <span>bonne circulation</span> afin de retrouver des <span>ja ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504699</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/abece01865caa7f3297ef07ae03cb02f46df91cf23a85d9fef59d2bfa3291ec7 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > BEAUTÉ ET MINCEUR > SANTE > FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkorelax CBD Flexi-doses - 60 comprimés ]]></title>
<g:id>46b33b0c-c409-4a8c-a768-bebcbc79f566</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-cbd flexi-doses - 60 comprimés?46b33b0c-c409-4a8c-a768-bebcbc79f566 ]]></link>
<g:price><![CDATA[ 1270.00 EUR ]]></g:price>
<description><![CDATA[ <p>Plongez dans la sérénité avec <span>ARKORELAX® CBD FLEXI-DOSES,</span> la solution anti-stress sur-mesure d'Arkopharma. Présenté en mini comprimés sublinguaux, ce complément alimentaire offre une flexibilité optimale pour répondre à vos besoins spécifiques, vous permettant de rester calme en toutes circonstances.<br /> </p>
<h4><span>CARACTÉRISTIQUES DU PRODUIT :</span><br /> </h4>
<ul><li>
<p><span>Flexibilité Anti-Stress :</span> Adapté à vos besoins spécifiques, la formule à base de CBD of ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504828</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3b1a6983602c970786349629e3c467d2169018560bea0a6884ca03ab9ad703c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkorelax Cannabis Sativa 30 Comprimés ]]></title>
<g:id>382eae1b-0aff-4df1-b0ae-cd5bb953f0f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-cannabis sativa 30 comprimés?382eae1b-0aff-4df1-b0ae-cd5bb953f0f1 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Arkorelax Cannabis Sativa 30 Comprimés est un complément alimentaire à base de plantes, de magnésium et de vitamine B6 qui apporte maîtrise et sérénité au quotidien.</p>
<ul><li>La rhodiole et l'éleuthérocoque sont des plantes adaptogènes qui aident à augmenter la résistance de l'organisme au stress. Elles contribuent au bien-être émotionnel et aux performances physiques et intellectuelles.</li>
<li>Le magnésium et la vitamine B6 aident à réduire la fatigue et maintiennent un bon f ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503395</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b2e7f7eefcf04610700fee2e51f68fbb5ed37941e74a9561a53646fb65bb6a21 ]]></g:image_link>
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
<title><![CDATA[ Arkorelax Moral+  30 comprimés ]]></title>
<g:id>95d60801-ed0e-4a7b-a363-40bdcb17733a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-moral+  30 comprimés?95d60801-ed0e-4a7b-a363-40bdcb17733a ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<div class="description" id="description">
<p> Ce complément alimentaire développe une action semblable à celle de la sérotonine, elle favorise l'<span>équilibre émotionnel.</span></p>
<p></p>
</div>
<p></p>
<div id="i4c-dialogs-container"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503562</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3162b035eb12e5e6b23215046ff8ea647e5d1b40ef1e169fbc4e1d3597001436 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > SANTE > FORME - VITALITÉ > STRESS ET SOMMEIL ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkorelax Moral+  60 comprimés ]]></title>
<g:id>e4161b5c-b405-455c-93fa-e409545bbec3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-moral+  60 comprimés?e4161b5c-b405-455c-93fa-e409545bbec3 ]]></link>
<g:price><![CDATA[ 2630.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Ce complément alimentaire développe une action semblable à celle de la sérotonine, elle favorise l'<span>équilibre émotionnel.</span></p>
<div id="i4c-dialogs-container"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503715</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d933920625d1e83b655f5b023109bb8d602060d772e5ee492ba7cbf79a7a8261 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkorelax SOS Stress Spray 15 ml ]]></title>
<g:id>70527489-4af3-4519-9fa6-24c829c99903</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sos stress spray 15 ml?70527489-4af3-4519-9fa6-24c829c99903 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Arkorelax SOS Stress Spray 15 ml est une solution express pour aider en cas de pics de stress occasionnels (réunion, prise de parole en public, examen...). Ce spray sublingual permet une action flash grâce à une libération et une absorption rapide d'actifs d'origine végétale ciblant le stress aigu :</p>
<ul>
<li>les feuilles de thé vert, source de L-théanine, aident à se détendre en rééquilibrant la balance des neurotransmetteurs du stress (GABA et glutamate). Elles augmentent l'ad ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504644</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4832c3b4f7be3fd87615929c47d366187dd780aebc0f14c42b1419e407fa3905 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkorelax Sommeil 60 Gummies ]]></title>
<g:id>9fb18aac-f22a-4468-8bb0-73a489f6c800</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sommeil 60 gummies?9fb18aac-f22a-4468-8bb0-73a489f6c800 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les délicieuses </span><span>Gummies Arkorelax® Sommeil</span><span> sans sucre sont une solution plaisir, saine et pratique pour vous aider à vous endormir plus rapidement et à améliorer la qualité de votre sommeil.</span></p>
<p><span>La complémentarité de la mélatonine et de 3 plantes pour faciliter l’endormissement et retrouver un réveil en pleine forme sans somnolence</span></p>
<p>Les Gummies Arkorelax Sommeil vous aident à :</p>
<ul><li><span>Réduire le temps d’endormissement</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504361</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30e32b8ab9859fc398847f3e46dce2709b2a2efc9959365b40b0209e6a70d9c6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkorelax Sommeil Flash 20 ml ]]></title>
<g:id>074c541d-0c2e-4d53-b21d-aa24de526576</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sommeil flash 20 ml?074c541d-0c2e-4d53-b21d-aa24de526576 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Arkorelax Sommeil Flash 20 ml est un complément alimentaire avec édulcorant à base de mélatonine et d'eschscholtzia. Il s'agit d'une solution express à l'arôme de verveine pour vous endormir et vous rendormir plus rapidement en cas de problèmes de sommeil occasionnels, de réveils au milieu de la nuit ou de décalage horaire.<br />Ce spray sublingual innovant permet une action rapide grâce à une libération et une absorption immédiate des actifs :</p>
<ul><li>la mélatonine aide à rédu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835502749</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61d14a53fd1bc6bd5af1f931e0bf3032e1e8c78d083e924fb31a91ac1d016051 ]]></g:image_link>
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
<title><![CDATA[ Arkorelax Sommeil Fort 8H 15 Comprimés ]]></title>
<g:id>a57df625-eee8-4f9d-99af-38097cd900ea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sommeil fort 8h 15 comprimés?a57df625-eee8-4f9d-99af-38097cd900ea ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Arkopharma Arkorelax Sommeil Fort 8H 15 Comprimés est un complément alimentaire sous forme de comprimé bicouche à base de mélatonine.<br />Il délivre la dose optimale de mélatonine en libération rapide (1 mg) et en libération prolongée (0,9 mg) pour une nuit complète, de l'endormissement jusqu'au réveil.</p>
<p>Il contient une haute concentration de plantes reconnues pour leurs propriétés sur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501230</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69f376c7a9a7713a8660c59f0d8800340148868965b1585b1c20d9a897516891 ]]></g:image_link>
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
<title><![CDATA[ Arkorelax Sommeil Fort 8H 30 Comprimés ]]></title>
<g:id>876b8cf0-64e8-4aa8-81b5-10b5cff9c991</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sommeil fort 8h 30 comprimés?876b8cf0-64e8-4aa8-81b5-10b5cff9c991 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Arkorelax Sommeil Fort 8H 30 Comprimés Offre Spéciale est un complément alimentaire à base de Mélatonine (1,9 mg), d'extraits de plantes et de Vitamine B6. Il permet d'assurer une nuit complète grâce à sa formule innovante hautement concentrée :</p>
<p>- en mélatonine à libération rapide et prolongée pour un effet pendant 8 heures,</p>
<p>- en extraits de plantes (Passiflore, Valériane, Eschscholtzia), reconnues pour leurs propriétés sur le sommeil.</p>
<p>Il agit ainsi selon les p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835501995</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7334d8d86b5595b65a90c420f65beed099ca0fdcf769dc751a4a772c250823d ]]></g:image_link>
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
<title><![CDATA[ Arkorelax Sommeil Gummies sans sucre 30 gommes ]]></title>
<g:id>15d3d647-bf05-4174-8828-86dad8471248</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sommeil gummies sans sucre 30 gommes?15d3d647-bf05-4174-8828-86dad8471248 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les </span><span>gummies sans sucre Arkorelax Sommeil</span><span> sont un complément alimentaire des laboratoires </span><span>Arkopharma</span><span>. Elles contiennent de la mélatonine et 3 plantes, pour un </span><span>endormissement rapide</span><span> et un </span><span>sommeil de qualité</span><span>.</span></p>
<p>Les délicieuses gummies sans sucre <span>Arkorelax Sommeil</span> sont spécialement conçues pour réduire le temps d'endormissement grâce à la <span>Mélatonine</span>.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503647</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f41866a1a685122c80e47997aa2ac66208b1df60daf080255ce10c5b00656d4 ]]></g:image_link>
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
<title><![CDATA[ Arkorelax Sommeil Kids Bio 100 ml ]]></title>
<g:id>f6277c7a-a406-42e6-9cee-26481d89f936</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-sommeil kids bio 100 ml?f6277c7a-a406-42e6-9cee-26481d89f936 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Arkopharma Arkorelax Sommeil Kids Bio 100 ml est un complément alimentaire à base de 4 plantes :</p>
<ul><li>la mélisse contribue à diminuer l'agitation et facilite la relaxation et l'endormissement ;</li>
<li>la verveine, associée à la lavande et au tilleul, favorisent naturellement un sommeil réparateur et de qualité.</li>
</ul><p>Goût fraise banane.</p>
<div id="i4c-dialogs-container"></div ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835503388</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/06264e5c9bd76e8a29177cc2fada35c632b0d5df9d04efb2c5a71285dffbcb4a ]]></g:image_link>
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
<title><![CDATA[ Arkorelax Stress Control 30 Comprimés ]]></title>
<g:id>5ab87d2a-da76-4eeb-81d1-b88a2d925540</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkorelax-stress control 30 comprimés?5ab87d2a-da76-4eeb-81d1-b88a2d925540 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Arkopharma Arkorelax Stress Control 30 Comprimés est un complément alimentaire à base d'extraits de plantes adaptogènes, de magnésium et de vitamine B6.</p>
<p>La formule complète et innovante de ce complément alimentaire associe 2 plantes adaptogènes à du magnésium et de la vitamine B6 pour vous aider dans une gestion globale du stress :</p>
<p>- Mieux résister au surmenage professionnel et p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560273274</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3051630f94631e293b68569f7228a2efbcf5beb3e5472bc87e7ccbb5d6576466 ]]></g:image_link>
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
<title><![CDATA[ Arkoroyal Booster Bio 10 ampoules x10ml ]]></title>
<g:id>b7932f59-4ff1-40bf-b101-bfe49df49ef7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkoroyal-booster bio 10 ampoules x10ml?b7932f59-4ff1-40bf-b101-bfe49df49ef7 ]]></link>
<g:price><![CDATA[ 860.00 EUR ]]></g:price>
<description><![CDATA[ <p>Effet coup de fouet avec le guarana<br />Dynamisant avec le ginseng<br />Agriculture Biologique<br />Complément alimentaire<br />10 ampoules x 10ml<br />Volume net: 100ml</p>
<p>Arkoroyal Booster BIO est un complexe booster d'énergie formulé sans ingrédients chimiques et sans conservateurs. Il contient du Ginseng aux propriétés fortifiantes et stimulantes pour diminuer la sensation de fatigue et rendre l'organisme plus résistant</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835504408</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/098d39755f3fdb260ad702f705e2601bbcde3da64bb3a01f00f0338d88b4ca39 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arkotoux Sirop 140 ml ]]></title>
<g:id>83c90d4d-6313-4464-aba3-fcbd1d791085</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arkotoux-sirop 140 ml?83c90d4d-6313-4464-aba3-fcbd1d791085 ]]></link>
<g:price><![CDATA[ 620.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Arkotoux Sirop 140 ml est un dispositif médical spécialement conçu à partir d'ingrédients 100 % d'origine naturelle, sans conservateur et sans colorant, recommandé pour tous les types de toux (sèche ou productive), qui convient à toute la famille.</p>
<p>Ce sirop formulé avec un extrait de Thym connu pour ses propriétés antioxydantes et protectrices de la muqueuse :</p>
<p>- soulage la toux, notamment la nuit par effet protecteur contre les agents extérieurs irritants,</p>
<p>- dim ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3578835500356</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/987d45ec86c4178e15e6543892707f59aac5e89c2aefb9b176391517b61f09e8 ]]></g:image_link>
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
<title><![CDATA[ Arnican Gel 50g ]]></title>
<g:id>46e4d295-efe4-44d7-ac90-293fcdeb802d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arnican-gel 50g?46e4d295-efe4-44d7-ac90-293fcdeb802d ]]></link>
<g:price><![CDATA[ 330.00 EUR ]]></g:price>
<description><![CDATA[ <p>ArnicanGel est un gel à base d’extrait fluide d’<strong><span style="text-decoration:underline;">arnica</span></strong> à utiliser en application sur la peau après <strong><span style="text-decoration:underline;">un coup ou une chute</span></strong>.</p>
<p>Formulé sans ajout d’alcool pour une meilleure tolérance, le gel apaise et aide la peau à retrouver une apparence normale après un choc.</p>
<p>La texture non grasse du produit permet une pénétration facile et rapide.</p>
<p>ArnicanGel a é ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360195639</g:gtin>
<g:brand><![CDATA[ ARNICAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6f83c19631da7c3306d6cb4195fa6a86ccb124779364b4d7568526da596a589d ]]></g:image_link>
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
<title><![CDATA[ Arnican Huile de Massage 150ml ]]></title>
<g:id>481612cf-5172-4f98-b4de-4df3201f111f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arnican-huile de massage 150ml?481612cf-5172-4f98-b4de-4df3201f111f ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'huile de massage Arnican du laboratoire Cooper est destinée à la préparation et à la récupération des muscles des sportifs, avant et après un entrainement ou suite à un effort intense par exemple.</p><p>Avec sa formule d'origine naturelle, l'<strong>huile de massage Arnican</strong> bénéficie des propriétés de l'arnica, de la gaulthérie et de l'harpagophytum pour favoriser l'apaisement des muscles tout en prenant soin de la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810004331</g:gtin>
<g:brand><![CDATA[ ARNICAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc1f576eee0ac7becb5f8c37750b69eb19e5a698d943e6c952ecc32dcd3c72db ]]></g:image_link>
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
<title><![CDATA[ Arnican Pocket roll on 10ml ]]></title>
<g:id>065b5502-83d4-458a-955b-c6b7dcfcaa25</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arnican-pocket roll on 10ml?065b5502-83d4-458a-955b-c6b7dcfcaa25 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce roll on s'applique rapidement après un choc, une chute ou un coup. Sa formule à base d''extrait d'Arnica apaise et aide la peau à retrouver une</p>
<p>apparence normale après un choc.</p>
<p>Le format pockett permet de l'emporter partout avec soi, dans le sac de sport ou en randonnée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401398192624</g:gtin>
<g:brand><![CDATA[ ARNICAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5aebde0c3ee6ad8509f2d775224b1d09ec6600c64e419c35dffe175754db9272 ]]></g:image_link>
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
<title><![CDATA[ Arnican freeze gel 100 g ]]></title>
<g:id>09f58465-4171-4092-8ece-99c24ba32f15</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arnican-freeze gel 100 g?09f58465-4171-4092-8ece-99c24ba32f15 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Ce produit s’utilise après un coup ou une chute. La combinaison de l’arnica et de l’action par le froid, obtenue grâce au menthol, soulage rapidement la douleur et aide la peau à retrouver une apparence normale. L’effet froid persiste après l’application pour apaiser durablement la zone touchée (jambes, bras…).</p>
<p>Sa texture gel non grasse permet une pénétration rapide.</p>
<div id="i4c-di ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401353647701</g:gtin>
<g:brand><![CDATA[ ARNICAN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db47b0e8efb33c5d9d9c6a04e2b82e1bf0e4d8e96bab9a471669af68798cfb8a ]]></g:image_link>
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
<title><![CDATA[ Aromasantis ARG 24 gélules ]]></title>
<g:id>b3f2ecf5-f748-4d25-ad7f-9cafc2b32eea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/aromasantis-arg 24 gélules?b3f2ecf5-f748-4d25-ad7f-9cafc2b32eea ]]></link>
<g:price><![CDATA[ 1394.99 EUR ]]></g:price>
<description><![CDATA[ <p class="hp__pb__desc">Complément alimentaire à base d'Huiles Essentielles et d'Oligo-éléments</p>
<ul class="hp__pb__list">
<li class="hp__pb__li"> Immunité</li>
<li class="hp__pb__li"> Défense de l'organisme</li>
<li class="hp__pb__li"> Anti Oxydant</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008824270</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e866ac979081a06ce9804cc346c45d06a4cb186e7707ffc950e20e9c04bb329c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Aromasantis CBU 24 capsules ]]></title>
<g:id>ef95db7a-2845-4b01-82b3-2bd932f14568</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/aromasantis-cbu 24 capsules?ef95db7a-2845-4b01-82b3-2bd932f14568 ]]></link>
<g:price><![CDATA[ 1595.00 EUR ]]></g:price>
<description><![CDATA[ <p class="hp__pb__desc">APPAREIL URO-GÉNITAL<br />Riche mélange d'Huiles Essentielles et d'un Oligo-élément.</p>
<ul class="hp__pb__list"><li class="hp__pb__li"> Infections urinaires</li>
<li class="hp__pb__li"> Douleurs de règles</li>
<li class="hp__pb__li"> Cystites d'origine bactériennes</li>
<li class="hp__pb__li"> Mycoses intimes</li>
</ul><div class="produit-quand editor voies-uro-genitales">
<p>aromasantis®CBU contient :</p>
<p>5 Huiles Essentielles, ayant une puissante action anti-microb ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008824232</g:gtin>
<g:brand><![CDATA[ SANTIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02fd93c27cb320f59830ad1bbfd623c98c43223e89f3e9cf796e238978c05bb9 ]]></g:image_link>
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
<title><![CDATA[ Aromasantis Gel ATB 20ml ]]></title>
<g:id>edb094bd-22bc-491f-b18c-7d24ee8e5abc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/aromasantis-gel atb 20ml?edb094bd-22bc-491f-b18c-7d24ee8e5abc ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>AROMASANTIS ATB GEL s’utilise pour les infections cutanées d’origine bactériennes ou virales mais aussi pour l’acné, les abcès, , les panaris …</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770008824348</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/861955263ad9aa63e6f257946c2a3208b67ff3873f4d353589e1ce35ae8639ec ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arterin Cholesterol 90 comprimés ]]></title>
<g:id>5ef7a0fa-1eb4-4332-8818-3f1c46b9c750</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arterin-cholesterol 90 comprimés?5ef7a0fa-1eb4-4332-8818-3f1c46b9c750 ]]></link>
<g:price><![CDATA[ 4190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arterin Cholestérol 90 Comprimés est un complément alimentaire, une solution efficace et bien tolérée qui permet de réduire et d'assurer un contrôle optimal du cholestérol.<br />Il contient des extraits naturels de bergamote et d'artichaut, ainsi que de stérols végétaux dont la qualité est contrôlée et standardisée.</p>
<ul><li>Les stérols végétaux réduisent le cholestérol sanguin.</li>
<li>La vitamine C soutient la formation normale de collagène pour le fonctionnement normal des vaisseaux sa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890250873</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3e96a5c52e267a228cbf747155ed6e04f21432055fad21d25a10719198b76582 ]]></g:image_link>
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
<title><![CDATA[ Arthrodont Classic Pâte dentifrice gingivale Gencives sensibles 75 ml lot 2 ]]></title>
<g:id>23dfa635-47a3-47e8-ad7a-3cb370cb2852</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-classic pâte dentifrice gingivale gencives sensibles 75 ml lot 2?23dfa635-47a3-47e8-ad7a-3cb370cb2852 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <div class="block-content">
<p>L’irritation des gencives, caractérisée par des rougeurs ou des saignements occasionnels, peut provoquer un réel inconfort. L'acide glycyrrhétinique, extrait de racines de réglisse, contenu dans la formule d'Arthrodont Classic pâte dentifrice gingivale, apaise et aide à renforcer les gencives.<br />Appliqué en brossage à l'aide d'un doigt propre sur les zones sensibles, puis rincé, ce dentifrice aide à réduire efficacement les saignements occasionnels (jusqu'à 71%) ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056024719</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74547c7528852825a2a712c881bc7f752f6b563a558dd9502188bf154e5fc1ea ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE BUCCO-DENTAIRE > DENTIFRICE > SOIN BUCCO-DENTAIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arthrodont Classic Pâte dentifrice gingivale Gencives sensibles 75ml ]]></title>
<g:id>bfed5bbc-b36a-498a-871c-242dadc2fc71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-classic pâte dentifrice gingivale gencives sensibles 75ml?bfed5bbc-b36a-498a-871c-242dadc2fc71 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Acide Glycyrrhétinique, extrait de racines de réglisse, contenu dans la formule d'Arthrodont Classic Pâte Dentifrice Gingivale, apaise et aide à renforcer les gencives. </p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056024573</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36153b7f1e62d5604274b6bb98e7d8276be89c373723a9a00d9ee1c227bae3ca ]]></g:image_link>
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
<title><![CDATA[ Arthrodont Expert Dentifrice Gencives Irritées 50 ml ]]></title>
<g:id>7ebfd97c-9fd1-4c08-a546-0d694a1c7e3e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-expert dentifrice gencives irritées 50 ml?7ebfd97c-9fd1-4c08-a546-0d694a1c7e3e ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Arthrodont Expert dentifrice</strong> est un <strong>soin d'attaque antiplaque dentaire</strong> qui s'utilise à la suite d'un traitement professionnel non invasif et non chirurgical, tel qu'un <strong>détartrage</strong>. Il est formulé pour soulager les gencives irritées et lutter contre la plaque dentaire.<br /><br />La <strong>plaque dentaire</strong> est principalement composée de bactéries et de protéines. Elle forme un dépôt blanchâtre à la surface des dents. Elle doit impérati ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056023293</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bdb88c0c34fbf7257e0543e1a83c1908cb6cd502551d3e1052528f2b498138cc ]]></g:image_link>
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
<title><![CDATA[ Arthrodont Fraicheur Intense - dentifrice gencives irritées 75ml ]]></title>
<g:id>2c5966d3-f3e7-423e-87a8-e543a6c386a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-fraicheur intense - dentifrice gencives irritées 75ml?2c5966d3-f3e7-423e-87a8-e543a6c386a7 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p-info__description">Une pâte dentifrice efficace dans l’accompagnement des gencives irritées. Les saignements occasionnels peuvent donc aller se brosser, et vous laisser profiter d’une sensation de fraîcheur intense.</p>
<div id="accordion" class="myaccordion">
<div class="myaccordion__item">
<div class="myaccordion__header" id="headingOne">
<div class="myaccordion__btn d-flex align-items-center justify-content-between">Un dentifrice à la fois efficace pour aider à réduire les irritat ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056026669</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8825528e1bafb63e068df2938ed9c46a4dafc62658e07f75303ad9dada673fce ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arthrodont Fraîcheur Intense Dentifrice Gencives Irritées  2 x 75 ml ]]></title>
<g:id>b80901d5-49f3-480b-ae7f-1463c17657bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-fraîcheur intense dentifrice gencives irritées  2 x 75 ml?b80901d5-49f3-480b-ae7f-1463c17657bb ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’irritation des gencives, caractérisée par des rougeurs ou des saignements occasionnels, peut provoquer un réel inconfort. L'acide glycyrrhétinique, extrait de racines de réglisse, contenu dans la formule d'Arthrodont Fraîcheur Intense pâte dentifrice gingivale, apaise les gencives.<br>A destination des plus de 6 ans, ce dentifrice aide à réduire efficacement les saignements occasionnels des gencives jusqu'à 2 fois moins de rougeurs observées dès 2 semaines d’utilisation¹</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056028205</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a9d7574a30845d36ae90f7bea4ebe078fd0d00259b77d8bf819c309ade828c5 ]]></g:image_link>
<g:product_type><![CDATA[ HYGIÈNE BUCCO-DENTAIRE > Bien être > DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arthrodont Protect Gel Dentifrice Fluoré 2x75ml ]]></title>
<g:id>a455b045-caf3-438f-ad45-d53830284a10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-protect gel dentifrice fluoré 2x75ml?a455b045-caf3-438f-ad45-d53830284a10 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arthrodont Protect gel dentifrice fluoré est utilisé pour renforcer les dents et gencives sensibles. Il permet une protection renforcée des gencives et des dents fragiles. D'une part, le fluorinol&nbsp; contribue à reminéraliser et à protéger l'émail dentaire. A la différence d'un fluor minéral classique, 5 fois plus de fluor est fixé dès la première minute de brossage. D'autre part, l'énoxolone, permet de décongestionner, d'apaiser et de renforcer les gencives fragilisées. Offre promotionnel ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401398710156</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/86ec4b417c7f4a2c97af6655b75d8ef336993df66fd7689de01b0a9c9eec1155 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE DENTS SENSIBLES > DENTIFRICE > DENTIFRICE GENCIVES IRRITÉES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arthrodont pate tube 50 ml ]]></title>
<g:id>22c6e6ca-e00c-44dc-b2a4-7ee54d38ec7f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-pate tube 50 ml?22c6e6ca-e00c-44dc-b2a4-7ee54d38ec7f ]]></link>
<g:price><![CDATA[ 385.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>RTHRODONT Classic est une pâte gingivale composée d’enoxolone (acide glycyrrhétinique) à 1%. Il va décongestionner, adoucir et apaiser les inflammations des gencives irritées, et les renforcer pour les rendre plus forte face aux irritations (saignements, rougeurs,…). Son arôme mentholé laisse après le brossage une grande sensation de fraîcheur. Les gencives seront plus fortes et saines.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056024566</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0fd2fe55cafb2ba7447d0b890f41a52c5131c937501b4059836fe381877a7133 ]]></g:image_link>
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
<title><![CDATA[ Arthrodont protect gel dentifrice fluoré 75ml ]]></title>
<g:id>b3e1d38d-e911-4715-8d5b-ea2336a7dabb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthrodont-protect gel dentifrice fluoré 75ml?b3e1d38d-e911-4715-8d5b-ea2336a7dabb ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arthrodont Protect Gel Dentifrice Fluoré 75 ml renferme de l'Enoxolone (acide glycyrrhétinique), substance connue pour ses propriétés décongestionnantes et apaisantes, et du Fluorinol (Fluorhydrate de nicométhanol), breveté par les Laboratoires Pierre Fabre, qui se fixe sur l'émail pour aider à reminéraliser, renforcer et protéger les dents.</p>
<p>Arthrodont Protect contribue au soin des gencives irritées, participe à l'amélioration de l'état de la gencive et favorise le confort du brossage. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3577056017551</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE ORAL CARE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6c8c5872a8146b64393af74a77e2c2b6521d410d761542734e578f565ad7c2d3 ]]></g:image_link>
<g:product_type><![CDATA[ DENTIFRICE PROTECTION CARRIES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Arthur et Lola Eau de Senteur coffret Grenouille ]]></title>
<g:id>dfa67b0e-f78a-455b-88fc-bbdc11baf699</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/arthur-et lola eau de senteur coffret grenouille?dfa67b0e-f78a-455b-88fc-bbdc11baf699 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le produit <strong>Arthur et Lola Eau de Senteur coffret Grenouille</strong> s’inscrit résolument dans une démarche axée sur l’excellence, une démarche qualitative visant à optimiser le <strong>bien-être</strong> et le <strong>confort</strong> des enfants en bas âge. Cet ensemble unique combine une Eau de Senteur spécialement formulée pour respecter et nourrir la <strong>peau sensible</strong> des nourrissons et des jeunes enfants. Il inclut également une <strong>peluche en forme de Grenouill ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646256042</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1fb96671e47b9cddf9f64c7f41645f5c6798ccb38ac34da942d9cd1b1e99e59 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > Bébé > Idées Cadeaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Artisan Savonnier DIY Percarbonate de sodium 1kg ]]></title>
<g:id>233b15e7-9774-4898-92c6-5dc292a26931</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/artisan-savonnier diy percarbonate de sodium 1kg?233b15e7-9774-4898-92c6-5dc292a26931 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>Le percarbonate de sodium peut être comparé à de l'eau oxygénée solide.</p>
<p>C'est un <strong>agent lavant</strong> qui ne contient aucun produit chimique. Il est:</p>
<ul><li><strong>Blanchissant</strong></li>
<li><strong>Détachant</strong></li>
<li><strong>Assainissant</strong></li>
<li><strong>Désodorisant</strong></li>
<li>
<p>Le percarbonate de sodium est un <strong>produit lavant</stro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3489940081589</g:gtin>
<g:brand><![CDATA[ AXELLE MERCIER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1b51575aa6f1ce93425e2d7508049fad8e39ec286dc7347a70dedc85b7dec97a ]]></g:image_link>
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
<title><![CDATA[ Artobiol Plus 120 Gélules ]]></title>
<g:id>89e41b32-e326-4499-878a-aac22e7b46d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/artobiol-plus 120 gélules?89e41b32-e326-4499-878a-aac22e7b46d6 ]]></link>
<g:price><![CDATA[ 1570.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>ARTROBIOL PLUS peut être recommandé pour les personnes :</span></p>
<ul><li><span>Ayant des gênes ou inconforts articulaires</span></li>
<li><span>Souhaitant maintenir une bonne mobilité et flexibilité de leurs articulations</span></li>
<li><span>Ayant des mouvements répétitifs ou des stations prolongées</span></li>
<li><span>Sportifs</span></li>
<li><span>En surpoids, obésité</span></li>
<li><span>Seniors</span></li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225640735</g:gtin>
<g:brand><![CDATA[ INELDEA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f8909b871541b3e53552166f572f149f5b28d90adb25bfd5aa6ecddda1a1cf4 ]]></g:image_link>
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
<title><![CDATA[ Artrobiol Patchs Chauffants x8 ]]></title>
<g:id>0fe9ff56-cd9f-4c48-82b2-f17331ac6240</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/artrobiol-patchs chauffants x8?0fe9ff56-cd9f-4c48-82b2-f17331ac6240 ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le patch chauffant ARTROBIOL® PATCH soulage et décontracte naturellement les tensions et douleurs musculaires, avec actions ciblées (dos, nuque, épaules).</span><br /><span>La formule contient des actifs naturels thermoactifs (charbon activé, poudre de fer et sel) qui produisent de la chaleur au contact de l’air.</span><br /><br /><span>Appliqué sur la peau, il diffuse une chaleur thérapeutique agréable en profondeur pendant 8h, permettant d’apaiser et soulager naturellement les tension ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225641299</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d44e2056b5be819e7acf2136bbac2d4d1bf6c1d8cf72eeb6bb71768f771fb4a7 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Asept Apaisyl spray antibactérien 100ml ]]></title>
<g:id>90816902-c11c-4157-89cc-074529a0d4b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/asept-apaisyl spray antibactérien 100ml?90816902-c11c-4157-89cc-074529a0d4b5 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>AseptApaisyl est un soin antibactérien de première intention destiné à assainir et purifier l’épiderme.</p>
<p>Formulé sans alcool et sans parfum, il ne pique pas et s’adapte aux peaux sensibles et délicates.</p>
<p>Sa formule incolore ne tache pas.</p>
<p>Hautement concentré en chlorhexidine, agent à large spectre d’activité, AseptApaisyl est efficace sur les bactéries responsables d’affections cutanées.</p>
<p>Enrichi en acide lactique, il respecte le pH physiologique de la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401345516428</g:gtin>
<g:brand><![CDATA[ MERCK MONOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6fca4df12f86f115b854b7030391e14f6405aebac184b07a89398232f184f7dd ]]></g:image_link>
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
<title><![CDATA[ Asepta canys collier antiparasitaire insectifuge chat chaton ]]></title>
<g:id>65b1d023-ac18-4198-aaa7-edd7acddcf7b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/asepta-canys collier antiparasitaire insectifuge chat chaton?65b1d023-ac18-4198-aaa7-edd7acddcf7b ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Repousse puces, tiques, moustiques</p>
<p>Les colliers de la gamme CANYS associent les propriétés antiparasitaires du géraniol et du lavandin à celles de l’icaridine, pour repousser efficacement les puces, les tiques, les phlébotomes (vecteur de la leishmaniose), les moustiques.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401154350916</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a7a64527b151dc7f0c9688b4b1e55125afe20c7755198fd9ec63db3d5fb8913 ]]></g:image_link>
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
<title><![CDATA[ Asepta canys collier antiparasitaire insectifuge chien chiot ]]></title>
<g:id>fc77a360-c207-4b94-aff6-0e7a8a56dc41</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/asepta-canys collier antiparasitaire insectifuge chien chiot?fc77a360-c207-4b94-aff6-0e7a8a56dc41 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Repousse puces, tiques, moustiques</p>
<p>Les colliers de la gamme CANYS associent les propriétés antiparasitaires du géraniol et du lavandin à celles de l’icaridine, pour repousser efficacement les puces, les tiques, les phlébotomes (vecteur de la leishmaniose), les moustiques.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401154350855</g:gtin>
<g:brand><![CDATA[ ASEPTA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e1666b2c1b953029a244f01848a252e2fd7d6642f2b81d48757cd36f2bcc1df ]]></g:image_link>
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
<title><![CDATA[ Asepta cicaleine fissures et crevasses 50ml ]]></title>
<g:id>9a0fb775-bc8b-40c7-bca2-4aa1b7151864</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/asepta-cicaleine fissures et crevasses 50ml?9a0fb775-bc8b-40c7-bca2-4aa1b7151864 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Baume Cicaleïne® protège les zones crevassées et fissurées des pieds et des mains. Dès la première application, son fort pouvoir hydratant redonne souplesse et confort à la peau après 7 jours d’utilisation seulement, l’effet apaisant est remarquable sur les crevasses et fissures. Après 14 jours, le résultat est optimal avec une peau nettement améliorée et souple qui retrouve toute sa fonction protectrice.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3323039503173</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b5a3d31b9f3dd36d1ae1c37fa609addcc36a540454293ae68bdc0d42e78faa8f ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > SOIN DES PIEDS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Aspivenin kit 1er secours anti-venin ]]></title>
<g:id>b73f7567-3c88-40dc-a395-0a283644cbf2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/aspivenin-kit 1er secours anti-venin?b73f7567-3c88-40dc-a395-0a283644cbf2 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p>ASPIVENIN est une mini-pompe aspirante qui permet d'éliminer de manière indolore et hygiénique les substances injectées par les insectes et animaux venimeux lors d'une piqûre ou d'une morsure : guêpes, abeilles, frelons, moustiques, fourmis, araignées, serpents, scorpions, méduses, vives...<br />Soulage rapidement la douleur et la démangeaison, limite la formation de l'oedème.<br />Facile à ut ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3544436254226</g:gtin>
<g:brand><![CDATA[ AUVEX ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/125b9b2cf7c759b7c761d915ca12d475b77fded1bba302cc15eeb32b1daf9d04 ]]></g:image_link>
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
<title><![CDATA[ Assanis Gel Mains Hydroalcoolique 80 ml - Senteur : Amande ]]></title>
<g:id>51959858-af2c-4ab6-b4a1-06ddf25686a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-gel mains hydroalcoolique 80 ml - senteur : amande?51959858-af2c-4ab6-b4a1-06ddf25686a3 ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gel antibactérien sans rinçage. <br />Sans eau, sans savon, sans serviette ! <br />Pour des mains propres. <br />Parfum amande douce. <br /><br />Lave les mains sans eau ni savon. Sèche en seulement 30 secondes. <br />Grâce à son format nomade, le gel antibactérien Assanis Kids est parfait pour toutes vos activités extérieures. <br />Vos mains sont propres en toutes circonstances quand l'eau et le savon ne sont pas disponibles ou dans les environnements à rique. <br />Enrichi à l'aloé vera, l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760032831078</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a76740c7fd225d47068c12a60cab6f8e64b7e3bd33992586f1ad5fce9071f23 ]]></g:image_link>
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
<title><![CDATA[ Assanis Gel hydro alcoolique Epices de Noel 80 ml ]]></title>
<g:id>aabdf1d9-4103-4ff2-ab66-072757fe6217</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-gel hydro alcoolique epices de noel 80 ml?aabdf1d9-4103-4ff2-ab66-072757fe6217 ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p><b>Assanis gel hydroalcoolique Noël "Epices de Noël"</b><span> est un </span><b>gel hydroalcoolique</b><span> formulé en </span><b>édition limitée "Noël"</b><span>. </span><b>Ce gel hydroalcoolique</b><span> </span><b>lave les mains sans savon</b><span> ni eau en 30 secondes et ne</span><b> nécessite pas de rinçage</b><span>. On aime son parfum sucré et vanillé. </span><b>Ce gel hydroalcoolique</b><span> est </span><b>bactéricide, fongicide et virucide</b><span>. </span><b>Ce gel hydroalcooli ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664789000445</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ebe2441312a374a3fae1c4f052c5b60d1094c9f2990eecabe26dd220bfa81a7e ]]></g:image_link>
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
<title><![CDATA[ Assanis gel anti bactérien 500ml ]]></title>
<g:id>a1f8b281-2a12-4937-a5f1-6f959dc5ba51</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-gel anti bactérien 500ml?a1f8b281-2a12-4937-a5f1-6f959dc5ba51 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <div align="justify"><span><span><span class="PBLongTxt"><span class="PBLongTxt">Grâce à leurs pompes doseuses, les flacons <b>Assanis Family</b> sont très faciles d'utilisation, même pour les enfants. A positionner par exemple dans la cuisine, dans les toilettes, ou près de l'ordinateur pour se laver les mains rapidement sans contraintes.<br /><b><br />PROPRIÉTÉS</b><br />Le gel hydroalcoolique Assanis élimine <b>99,9% des bactéries</b>.</span></span></span></span></div>
<div align="justify"><s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664789000353</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f6fce0b307cbea2836b401e7c66ab161eede196f6157eee3a949f5fdcbc24c20 ]]></g:image_link>
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
<title><![CDATA[ Assanis gel anti-bactérien 980ml ]]></title>
<g:id>1c3ac0bc-051d-4ee9-b4be-0fec53ca3979</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-gel anti-bactérien 980ml?1c3ac0bc-051d-4ee9-b4be-0fec53ca3979 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pourquoi se désinfecter les mains avec une solution hydroalcoolique ?</strong><br />Les mains sont en contact direct avec les éléments extérieurs, c’est pourquoi il est essentiel de ne pas négliger une bonne hygiène des mains. Les circonstances de la vie quotidienne ne sont pas propices au lavage des mains : absence d’eau, de savon ou de serviette propre.</p>
<p>Quand les conditions d’un lavage des mains efficace ne sont pas réunies, les gels et les lingettes antibactériens représente ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760032832723</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a3b2432e0d810e0c5e419e2adbd8e6d9ec5c13b67f53666b39f72243600dc31 ]]></g:image_link>
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
<title><![CDATA[ Assanis gel hydroalcoolique sans rinçage pour les mains 250ml ]]></title>
<g:id>1b0c3682-3555-412b-b7d7-be7deb9ffa42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-gel hydroalcoolique sans rinçage pour les mains 250ml?1b0c3682-3555-412b-b7d7-be7deb9ffa42 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>gel hydroalcoolique sans rinçage pour les mains Aloe vera+ Provitamine B5 250ml</p>
<p>pratique et idéal pour garder vos mains propres et hydratées</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664789000346</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f6a0af07c1fbc1391d8d7d95d5f4708f37af99aca7edca1d2dbba6c733ab1a34 ]]></g:image_link>
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
<title><![CDATA[ Assanis limited gel antibactérien mangue 80ml ]]></title>
<g:id>b5b4b02d-49f1-4afe-906a-6d87e7d3c73d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-limited gel antibactérien mangue 80ml?b5b4b02d-49f1-4afe-906a-6d87e7d3c73d ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p>La mangue est un fruit suave et charnu.Gorgée de pulpe dorée, elle a le fondant des fruits exotiques, cepetit goût juteux et frais qui sent si bon les Tropiques. </p>
<p>Le premier gel antibactérienparfumé à la mangue !</p>
<p>Assanis reconstitue le goût de lamangue, son sucré orangé, son velouté gorgé de nectar, simplementen parfum sur la peau à travers notre gel antibactérien.</p>
<p>Son petit format s'adaptera à toutesvos sorties estivales !</p>
<div><br /></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760032831900</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1fe435cb59e1514ab8dfca1ae4208e16b502e4fb4267264e589076b90a36c352 ]]></g:image_link>
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
<title><![CDATA[ Assanis pocket gel antibactérien 80ml ]]></title>
<g:id>05d1ccfa-b7c5-4cb5-8f8e-05165a6ec871</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assanis-pocket gel antibactérien 80ml?05d1ccfa-b7c5-4cb5-8f8e-05165a6ec871 ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gel nettoyant antibactérien sans rinçage pour les mains. Enrichi en Aloe vera et provitamine B5. Hypoallergénique, hydratant. Sans eau, sans savon. pH neutre. Bactéricide : NF EN 1040. Sèche en 30 secondes, ne colle pas.</p>
<p>Le flacon 18 ml est parfaitement nomade, grâce à sa petite taille. Sa contenance (représentant 18 utilisations) le rend idéal pour les petites randonnées. Testé sous contrôle dermatologique.</p>
<p>Convient à tous types de peaux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760032831313</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/123954d618d1bd5c2b101100b6c6e26bcbc697baefbf3461099347d8e697b3e8 ]]></g:image_link>
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
<title><![CDATA[ Assaniss spray desinfectant 100 ml ]]></title>
<g:id>5ef1ee4f-4fe5-4182-beba-a3a14a011d21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/assaniss-spray desinfectant 100 ml?5ef1ee4f-4fe5-4182-beba-a3a14a011d21 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Assanis Spray Désinfectant 100 ml est un spray qui nettoie et désinfecte sans rinçage les objets et toutes les surfaces du quotidien (hors surfaces en contact alimentaire). Il aide à réduire les risques de contaminations virales et bactériennes.<br />Il est idéal pour les plans de travail, poignées, digicodes, claviers, bureaux, tables...</p>
<ul><li>Bactéricide (EN1040) : sur Pseudomonas aeruginosa, Staphylococcus aure ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664789000322</g:gtin>
<g:brand><![CDATA[ ASSANIS ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9631d4e67d24cb8679521790b17a55712db7a028e3830d3cf1cb35e0333c0949 ]]></g:image_link>
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
<title><![CDATA[ Atrix professionnal crème réparatrice 100ml ]]></title>
<g:id>dc2e431b-d9fc-4585-8a98-a8972e146269</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/atrix-professionnal crème réparatrice 100ml?dc2e431b-d9fc-4585-8a98-a8972e146269 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les mains très sollicitées peuvent devenir rugueuses et gercées.</p>
<p>Elles exigent donc plus qu'un simple soin basique et réclament l'efficacité de la Crème Réparatrice Professionnelle Atrix.</p>
<p>Sa formulation spécifique contient du panthénol au pouvoir apaisant intensif.</p>
<p>Elle répare et soulage immédiatement les mains les plus abîmées et leur redonne toute leur douceur.</p>
<p>pH neutre.</p>
<p>Sans colorant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4006000061221</g:gtin>
<g:brand><![CDATA[ EUCERIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7756c81add116eebfe1cc05a6702d8c3951a99ce01c6ec13ee299ba7f83c4192 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Audispray Ultra Spray auriculaire 20ml ]]></title>
<g:id>3259b758-6fcd-4477-a47d-67f4ec8685eb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/audispray-ultra spray auriculaire 20ml?3259b758-6fcd-4477-a47d-67f4ec8685eb ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un traitement en spray contre les bouchons de cérumen ! Audispray Ultra est un produit permettant de traiter un bouchon de cérumen formé ou en formation, idéal à domicile ou avant une visite chez un spécialiste. La solution de traitement Audispray Ultra pénètre à l’intérieur du bouchon de cérumen et le fractionne en plusieurs petits fragments dans un premier temps, et dissout les fragments de bouchons dans un deuxième temps.</p>
<p> </p>
<p>Les plus du produit :</p>
<p> </p>
<ul><li>Permet de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640107850462</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e13fc71133d2b5cdf0d78f5173b3308303d5097e80466307dec4d36703d1d6d ]]></g:image_link>
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
<title><![CDATA[ Audispray adultes spray auriculaire 50 ml ]]></title>
<g:id>69f4495d-755a-438f-b3fc-2e6004fdfeb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/audispray-adultes spray auriculaire 50 ml?69f4495d-755a-438f-b3fc-2e6004fdfeb2 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>A partir de 12 ans, AUDISPRAY ADULT prévient l’accumulation de cérumen et d’impuretés dans le conduit auditif. Ramollit et dissout le cérumen, facilitant ainsi son évacuation naturelle vers l’extérieur. Composée d’eau de mer microbiologiquement contrôlée, la solution Audispray nettoie les oreilles en douceur grâce à son embout breveté limitant le risque de surpression.</p>
<p>Les plus du produit :</p>
<p>• Solution 100% naturelle, à base d’eau de mer microbiologiquement contrôlée.</p>
<p>• Ut ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640107850141</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f13ad68d47693ef6269affa9f528ce13cfe439b9b9a84c418218946aaf393b5 ]]></g:image_link>
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
<title><![CDATA[ Audispray dry 30 ml ]]></title>
<g:id>1c65eead-77aa-401a-93de-6dac98e40d1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/audispray-dry 30 ml?1c65eead-77aa-401a-93de-6dac98e40d1c ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Audispray Dry Soin des Oreilles 30 ml est un spray auriculaire pour prévenir les effets néfastes (otites) d'une humidité excessive dans l'oreille.</p>
<p>La triple action de ce produit dans le conduit auditif externe permet l'évaporation de l'excès d'eau. Elle préserve également le pH physiologique et apaise la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640107851001</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad66dbe17a12dfff0ef2ae3bd9f84b8d50e1ca981da3d6e5e7e1795e7991157b ]]></g:image_link>
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
<title><![CDATA[ Audistim - 60 comprimés jour/nuit ]]></title>
<g:id>3dd9864a-ecc2-4768-9604-b769f8eac99c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/audistim-60 comprimés jour/nuit?3dd9864a-ecc2-4768-9604-b769f8eac99c ]]></link>
<g:price><![CDATA[ 2750.01 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p><strong>JOUR (COMPRIMÉS BLANCS) :</strong></p>
<p>Le Ginkgo biloba participe à la microcirculation périphérique du sang et contribue à une bonne audition. Le magnésium, les vitamines B6, B12 et la niacine (B3) contribuent à réduire la fatigue. Le magnésium, les vitamines B6, B12, la thiamine (B1) et la niacine (B3) contribuent à des fonctions psychologiques normales (concentration, apprentissa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3770009584036</g:gtin>
<g:brand><![CDATA[ AUDISTIM PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2255ea6d6999edb6473013724dcf476dff3b4560fdeeeec878943265d5ae5375 ]]></g:image_link>
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
<title><![CDATA[ Avene Cleanance Comedomed Peeling 40ml ]]></title>
<g:id>4b9fadea-62d1-4752-86ba-8adfb45f2f7c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-cleanance comedomed peeling 40ml?4b9fadea-62d1-4752-86ba-8adfb45f2f7c ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La crème Comedomed Peeling est le nouvel allié face aux poussées de boutons. Elle cible toutes les imperfections visibles des peaux à tendance acnéique avec une formule unique et ultra-efficace grâce à l'association d'actifs dermatologiques: l'Acide Glycolique, exfolie et stimule le renouvellement cellulaire pour un effet peau neuve grâce à son action kératolytique. Le Retinoid Booster, favorise la résorption des boutons et la réduction des marques résiduelles grâce à une association br ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395365</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/51444273cce02f783e85837937bfbc63fa91d70fb1f5ec18e6cf5353ced9a905 ]]></g:image_link>
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
<title><![CDATA[ Avene Cleanance Gel Nettoyant  200ml  ]]></title>
<g:id>2fa823b9-4808-46cd-a957-4ff53c4ee3d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-cleanance gel nettoyant  200ml ?2fa823b9-4808-46cd-a957-4ff53c4ee3d1 ]]></link>
<g:price><![CDATA[ 760.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un gel nettoyant purifiant, légèrement moussant, destiné aux peaux grasses et /ou à tendance acnéique. Sa formule respectueuse des peaux sensibles combine une association unique d'actifs aux triples bénéfices : un nettoyage délicat grâce à une base lavante douce, un effet matifiant assuré par la Comedoclastin™, un actif végétal issu de graines de chardon marie aux propriétés brevetées* qui réduit l’excès de sébum, et un confort lié à l'Eau thermale d'Avène aux propriétés apaisantes et anti-ir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770139204</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c6b522753eb7033cf8c8c8e8600cce7d626f721e68fa6d07cddc58b31865736a ]]></g:image_link>
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
<title><![CDATA[ Avene Cleanance Gel Nettoyant 400ml ]]></title>
<g:id>18c23b20-20f1-4cc5-9d95-7650f74158c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-cleanance gel nettoyant 400ml?18c23b20-20f1-4cc5-9d95-7650f74158c6 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un gel nettoyant purifiant, légèrement moussant, destiné aux peaux grasses et /ou à tendance acnéique. Sa formule respectueuse des peaux sensibles combine une association unique d'actifs aux triples bénéfices : un nettoyage délicat grâce à une base lavante douce, un effet matifiant assuré par la Comedoclastin™, un actif végétal issu de graines de chardon marie aux propriétés brevetées* qui réduit l’excès de sébum, et un confort lié à l'Eau thermale d'Avène aux propriétés apaisantes et a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770207774</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41c1f0693982fe8befec39bfe06032b121a1fc1c0634e39cfa82686e01a3d599 ]]></g:image_link>
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
<title><![CDATA[ Avene Cleanance Serum Exfoliant 30ml ]]></title>
<g:id>d1b16442-1c90-40cc-a55c-c88c446d2d23</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-cleanance serum exfoliant 30ml?d1b16442-1c90-40cc-a55c-c88c446d2d23 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p id="PTSBQKK">Le <span>Sérum Exfoliant AHA d'Avène</span> est le 1er sérum exfoliant aux acides naturels plus puissant que l'acide salicylique pour un <span>grain de peau affiné immédiatement</span> et un <span>effet peau neuve</span> en 10 jours.</p>
<p>Spécialement conçu pour les <span>personnes sujettes aux imperfections</span>, aux marques d'acné et à un grain de peau irrégulier, le sérum exfoliant AHA Avène Cleanance exerce une <span>triple action.</span></p>
<p>Il va <span>lutter contre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390469</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e47276ede214ffbb8bed2e95389bc02493bc74d4c73ddaa6f7ef2a586be01495 ]]></g:image_link>
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
<title><![CDATA[ Avene Hydrance Légère Emulsion Hydratante 2x40ml ]]></title>
<g:id>532d8de1-9c3b-4e4b-b815-66d65868e43a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-hydrance légère emulsion hydratante 2x40ml?532d8de1-9c3b-4e4b-b815-66d65868e43a ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong><span>La crème hydratante Hydrance Légère d’Avène a été créée spécialement pour les peaux sensibles normales à mixtes. Ce soin à la texture légère contribue à hydrater en profondeur la peau, qui reste souple et apaisée toute la journée. Les peaux sensibles sont plus facilement sujettes aux irritations et aux rougeurs. La formule nourrissante de ce soin contient donc de l’eau thermale d’Avène, reconnue pour ses propriétés hydratantes et apaisantes. Grâce au toucher caresse de ce fluide ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770147841</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53fecf14dfc68709d317a14b9fde9c05518a981732163730f6dab4ec8c05cd5a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avene Hydrance Riche Crème Hydratante 2x40ml ]]></title>
<g:id>b9377ef8-73ae-4d52-8be2-02e85b8f6a85</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-hydrance riche crème hydratante 2x40ml?b9377ef8-73ae-4d52-8be2-02e85b8f6a85 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Grâce au toucher onctueux de cette crème riche, l’hydratation devient la base de la routine beauté de toutes les peaux sensibles déshydratées sèches à très sèches. Hydrance Riche crème hydratante leur apporte une recharge d’Eau thermale d'Avène pour offrir 24h d'hydratation. Sa texture riche et non collante laisse la peau souple et confortable, désaltérée tout au long de la journée, tandis que son parfum subtil réveille les sens. Hydrance Riche crème hydratante apporte une recharge d’Ea ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770147988</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f15e98798bc3ed93d3b965af9452cf3ecd545bfd824a6afbcb5664e5a524e00d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avene Solaire Fluide SPF50+ Sans Parfum 50ml  ]]></title>
<g:id>916ea725-cb7f-4352-b3e1-82cbb7293923</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-solaire fluide spf50+ sans parfum 50ml ?916ea725-cb7f-4352-b3e1-82cbb7293923 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Fluide SPF50+ Peaux Sensibles Normales à Mixtes sans parfum de Avène</span> est un soin haute protection pour le visage à la texture légère effet "peau nue" qui protège efficacement des rayons UVA/UVB et de la lumière bleue. Ce fluide solaire a été formulé pour les peaux sensibles normales ou mixtes, sujettes aux coups de soleil ou à une forte exposition au soleil. </p>
<p>Au cœur du Fluide SPF 50+, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre qui ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149128</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8fc653e503f941ca6dcc560aa476c6f1c7eeca34cae6ff7b588a6bc038bcd670 ]]></g:image_link>
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
<title><![CDATA[ Avene Tolerance Hydra-10 Crème Hydratante 40ml ]]></title>
<g:id>1a932b9c-ca39-4bdb-994e-7ac147fd3e49</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-tolerance hydra-10 crème hydratante 40ml?1a932b9c-ca39-4bdb-994e-7ac147fd3e49 ]]></link>
<g:price><![CDATA[ 1610.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce soin hydratant visage 100% d'origine naturelle et haute tolérance destiné aux peaux déshydratées sèches à très sèches convient aux adultes, enfants et bébés. Enrichie en Acide hyaluronique, sa formule hydrate intensément la peau pendant 48H*. TOLERANCE HYDRA-10 Crème favorise l’hydratation naturelle de la peau et contribue à son confort au quotidien. Elle préserve l’équilibre naturel du microbiome cutané grâce à sa formule mimétique de la peau brevetée**. La texture confortable et nu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770388336</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f0bc024c28afe620212235102e5ae95a82e2599f74cbd849cabeae30fa1e42c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avene Tolerance Hydra-10 Fluide Hydratant 40ml ]]></title>
<g:id>34d09b03-01ed-49b9-be29-9f636275d2d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-tolerance hydra-10 fluide hydratant 40ml?34d09b03-01ed-49b9-be29-9f636275d2d3 ]]></link>
<g:price><![CDATA[ 1610.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce soin du visage hydratant, 100% d'origine naturelle et haute tolérance destiné aux peaux normales à mixtes convient aux adultes, enfants et bébés. Enrichie en Acide hyaluronique, sa formule hydrate intensément la peau pendant 48H*. TOLERANCE HYDRA-10 Fluide favorise l’hydratation naturelle de la peau et restaure son confort au quotidien. Il préserve l’équilibre naturel du microbiome cutané grâce à sa formule mimétique de la peau brevetée**. La texture fraîche et légère de ce fluide vi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770388299</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b299287883777d88ffec795a5771e4f6d0155da5e89d2cc1244ea65bb5e89e81 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avene Xeracalm A.D Concentré Apaisant 50ml ]]></title>
<g:id>6c8fb722-d8cb-4086-aa77-412802976ac4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm a.d concentré apaisant 50ml?6c8fb722-d8cb-4086-aa77-412802976ac4 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>XERACALM A.D Concentré apaisant soulage immédiatement les zones sèches sujettes aux démangeaisons intenses et à l’eczéma atopique. C’est le soin SOS pour une action anti-grattage immédiate grâce à sa formule associant I-modulia®, le 1er actif postbiotique issu de l’eau thermale d’Avène qui diminue les démangeaisons, stimule les défenses de la peau et lutte contre les irritations à un complexe protecteur et réparateur ultra concentré qui réduit les pics de sécheresse sévères pour rétabli ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770389890</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1eb61b05f84966de36ece54216e02fa860b1e046fb0eee840ace0bb48268674d ]]></g:image_link>
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
<title><![CDATA[ Avene Xeracalm A.D Huile Lavante 400ml ]]></title>
<g:id>3684f66a-7826-446e-a470-ff97857b9919</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm a.d huile lavante 400ml?3684f66a-7826-446e-a470-ff97857b9919 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>XeraCalm A.D Huile lavante relipidante nettoie en douceur et apaise les peaux très sèches sujettes à l'eczéma atopique et aux démangeaisons. Premier geste du rituel anti-démangeaisons, elle laisse la peau douce, confortable et respecte le microbiome cutané. Sans savon et au pH physiologique, elle peut être utilisée en phase de poussée sur le visage, le corps et le cuir chevelu. Sa formule combine le 1er actif postbiotique issu de l’Eau thermale d’Avène, I-modulia®, qui diminue les déman ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770389883</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b8597c1828e701474595a936176b4a731bc924e0e50d43ccc7067c23ae4b5fe3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avene Xeracalm Lait Hydratant 400ml ]]></title>
<g:id>9a4c8727-4df9-49e5-8a00-bbddc5d7b327</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm lait hydratant 400ml?9a4c8727-4df9-49e5-8a00-bbddc5d7b327 ]]></link>
<g:price><![CDATA[ 1698.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Lait hydratant et nourrissant pour les peaux sensibles et sèches de toute la famille. Ce soin quotidien haute tolérance composé de 97% d’ingrédients d’origine naturelle renforce la barrière cutanée du visage et du corps. Il apaise les tiraillements, nourrit et hydrate pendant 48h*. Formulé avec de l’huile de chardon marie qui booste la synthèse de céramides pour une action anti-dessèchement. Sa texture confort au parfum léger combine la richesse d’une crème et la fluidité d’un lait, pou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155181</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3620f8ae06288d193a6fe5547efd23162783636fd403ef8187853e48fee3bf2 ]]></g:image_link>
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
<title><![CDATA[ Avene Xeracalm Nutrition Crème de Douche 200ml ]]></title>
<g:id>966364ef-3bc2-4104-95a1-e67749198be8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm nutrition crème de douche 200ml?966364ef-3bc2-4104-95a1-e67749198be8 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>XERACALM NUTRITION Crème de douche nettoie et nourrit en un seul geste les peaux sensibles sèches de toute la famille. Formulée à base de 99% d’ingrédients d’origine naturelle, cette crème de douche est enrichie en agents nourrissants pour apaiser les sensations de tiraillements. Sa texture crémeuse, sans savon, au pH neutre pour la peau et délicatement parfumée procure confort cutané et plaisir d’utilisation. Elle mousse à l’application, et ne pique pas les yeux, ni les zones intimes e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155044</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc74a486550b9cade2b0ffc39c07a59770cd57947a18a2aed734881731e73f65 ]]></g:image_link>
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
<title><![CDATA[ Avene Xeracalm Nutrition Gel Nettoyant 750ml ]]></title>
<g:id>002e36f1-efe1-4d27-b9a7-963dc3a3977b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm nutrition gel nettoyant 750ml?002e36f1-efe1-4d27-b9a7-963dc3a3977b ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Gel Nettoyant Xeracalm Nutrition d'Avène </span>nettoie en douceur et nourrit les peaux les plus sensibles. Ce soin quotidien haute tolérance au parfum léger apporte confort cutané et est destiné aux peaux sensibles et sèches de toute la famille.</p>
<p>Formulé à base de 99% d’ingrédients d’origine naturelle, il respecte les peaux les plus sensibles. Sa texture gel sans savon au pH neutre pour la peau mousse à l’application, et ne pique pas les yeux, ni les zones intimes externes.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155020</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8793bec3b466824a1d17bb9dbf17d72e5ee6018b7011f33e14f99b7e958b67da ]]></g:image_link>
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
<title><![CDATA[ Avene Xeracalm Nutrition Gel nettoyant 100ml ]]></title>
<g:id>f58707e0-2f8c-45a0-bbd4-c478ba1650bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm nutrition gel nettoyant 100ml?f58707e0-2f8c-45a0-bbd4-c478ba1650bb ]]></link>
<g:price><![CDATA[ 460.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le<span> Gel Nettoyant Xeracalm Nutrition d'Avène</span> nettoie en douceur et nourrit les peaux les plus sensibles. Ce soin quotidien haute tolérance au parfum léger apporte confort cutané et est destiné aux peaux sensibles et sèches de toute la famille.</p>
<p>Formulé à base de 99% d’ingrédients d’origine naturelle, il respecte les peaux les plus sensibles. Sa texture gel sans savon au pH neutre pour la peau mousse à l’application, et ne pique pas les yeux, ni les zones intimes externes.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155013</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aa0ff34fd7da7a985c9f606530c4a6d6ae26bbecfe52c8459ad63ba77dae29fc ]]></g:image_link>
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
<title><![CDATA[ Avene Xeracalm Nutrition Lait Hydratant 200ml ]]></title>
<g:id>bb34b5c1-d4f5-44e8-ae1b-3622023f32e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avene-xeracalm nutrition lait hydratant 200ml?bb34b5c1-d4f5-44e8-ae1b-3622023f32e0 ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Lait Hydratant Xeracalm Nutrition d'Avène</span> renforce la barrière cutanée et apaise les tiraillements du visage et du corps. Ce soin quotidien haute tolérance formulé avec 97% d’ingrédients d’origine naturelle est destiné aux peaux sensibles et sèches de toute la famille.</p>
<p>La composition de ce lait hydratant et nourrissant intègre de l’huile de chardon marie qui booste la synthèse des céramides pour une action anti-dessèchement.</p>
<p>Sa texture confort à absorption rapide ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155174</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/785ffd1e282c525a661db3cabe2c9d33ad76043d952db0dbb6ccb9613c53451d ]]></g:image_link>
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
<title><![CDATA[ Avent Natural Response 2 Biberons 260 ml 1 Mois et + ]]></title>
<g:id>af0bf5a3-9fd2-4785-a7b8-c3b0f668ae86</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response 2 biberons 260 ml 1 mois et +?af0bf5a3-9fd2-4785-a7b8-c3b0f668ae86 ]]></link>
<g:price><![CDATA[ 1470.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response 2 Biberons 260 ml 1 Mois et + sont des biberons avec une tétine de débit 3, conçus pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est large, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989745</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f8d7522a48b3007db74ccb4348fafbc91a83d5e7cc9ff6ba01f609280687cb5c ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response 2 Tétines Débit 2  ]]></title>
<g:id>7b8351f3-3abc-4610-9ad2-7b7b146b0114</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response 2 tétines débit 2 ?7b8351f3-3abc-4610-9ad2-7b7b146b0114 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response 2 Tétines Débit 2 0 Mois et + sont des tétines qui imitent la forme du sein maternel, facilitant ainsi la combinaison de l'allaitement maternel et du biberon. Le débit est spécialement adapté pour les bébés de 0 mois et plus, réduisant les risques de suffocation et de régurgitation. Fabriquées en silicone souple, elles sont douces pour les gencives sensibles des nourrissons. Ces tétines favorisent une alimentation naturelle et confortable, assurant ainsi une transition  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103985105</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0775bcc98d0755dc6056753d43ca014a086cfd7145d466008ac188a28982fc4e ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > TETINE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response 2 Tétines Débit 3 ]]></title>
<g:id>60d65526-618f-47ca-848d-64a392e4be52</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response 2 tétines débit 3?60d65526-618f-47ca-848d-64a392e4be52 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response 2 Tétines Débit 3 1 Mois et + sont des tétines qui imitent la forme du sein maternel, facilitant ainsi la combinaison de l'allaitement maternel et du biberon. Le débit est spécialement adapté pour les bébés de 1 mois et plus, réduisant les risques de suffocation et de régurgitation. Fabriquées en silicone souple, elles sont douces pour les gencives sensibles des nourrissons. Ces tétines favorisent une alimentation naturelle et confortable, assurant ainsi une transition  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103985129</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/31c79ffd564fe0fa801e2704db36a960168fb4fca5c05551a6612857e24ba7a7 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > TETINE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response 2 Tétines Débit 4  ]]></title>
<g:id>15ca6849-44ef-4fe0-8801-ec0e836c5f58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response 2 tétines débit 4 ?15ca6849-44ef-4fe0-8801-ec0e836c5f58 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response 2 Tétines Débit 4 3 Mois et + sont des tétines qui imitent la forme du sein maternel, facilitant ainsi la combinaison de l'allaitement maternel et du biberon. Le débit est spécialement adapté pour les bébés de 3 mois et plus, réduisant les risques de suffocation et de régurgitation. Fabriquées en silicone souple, elles sont douces pour les gencives sensibles des nourrissons. Ces tétines favorisent une alimentation naturelle et confortable, assurant ainsi une transition  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103985143</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98ef39f0ac940066aa9797c173c81b59f26a9bcf5acf08b0d11cd65d53892767 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response 2 Tétines Débit Liquides Épaissis  ]]></title>
<g:id>c2b0fe92-a333-41de-a0e4-024b71cee617</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response 2 tétines débit liquides Épaissis ?c2b0fe92-a333-41de-a0e4-024b71cee617 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response 2 Tétines Débit Liquides Épaissis 6 Mois et + sont des tétines adaptées aux bébés de 6 mois et plus, offrant une solution idéale pour les liquides épaissis. Conçues pour accompagner l'évolution des besoins alimentaires de votre tout-petit, ces tétines facilitent la transition vers des liquides plus consistants. Grâce à leur débit spécifique, elles permettent une succion naturelle tout en minimisant les risques de coliques. Elles permettent une alimentation confortable,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103985181</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/49bc872a2415a5fe54b3b8e4fca32c79ce7fc0802b76cd64c9282f22eea3323a ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > TETINE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response 3 Biberons 260 ml 1 Mois et + ]]></title>
<g:id>62744962-b963-4e88-92a1-bac0b883c9b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response 3 biberons 260 ml 1 mois et +?62744962-b963-4e88-92a1-bac0b883c9b4 ]]></link>
<g:price><![CDATA[ 1950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response 3 Biberons 260 ml 1 Mois et + sont des biberons avec une tétine de débit 3, conçus pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est large, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103990741</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/548a37674d6a5514b942761a4a28a2e35f1c8884682b7dd4608a1109a7bca914 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 125 ml 0 Mois et + ]]></title>
<g:id>cc383456-56a8-4ccc-818d-34b73ad8f565</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 125 ml 0 mois et +?cc383456-56a8-4ccc-818d-34b73ad8f565 ]]></link>
<g:price><![CDATA[ 815.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon 125 ml 0 Mois et + est un biberon avec une tétine de débit 2, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est large, douce  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989615</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0fd8cc4d647698e0c81b555d9001705e009d0fdfbc735408435bfc9381ea0d65 ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 260 ml 1 Mois et +  Bleu ]]></title>
<g:id>d83fb534-eeb9-44e8-8802-94005ccecc81</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 260 ml 1 mois et +  bleu?d83fb534-eeb9-44e8-8802-94005ccecc81 ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon 260 ml 1 Mois et + - Couleur : Bleu est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989684</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8358c1d7634576a15776edebd30bc3ed15e94dff701c0c105f7295f43bcaa870 ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 260 ml 1 Mois et +  Rose ]]></title>
<g:id>4a397770-abb8-497f-bbb9-03f6488d69af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 260 ml 1 mois et +  rose?4a397770-abb8-497f-bbb9-03f6488d69af ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon 260 ml 1 Mois et + - Couleur : Rose est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989660</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f64313093a3826a24722fd3388a5220dd18b88936c86a15a2668a1e20058f1eb ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 260 ml 1 Mois et + Blanc ]]></title>
<g:id>9bc4ce78-29d5-4e63-b8ca-0bab7607e756</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 260 ml 1 mois et + blanc?9bc4ce78-29d5-4e63-b8ca-0bab7607e756 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon 260 ml 1 Mois et + - Couleur : Blanc est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989646</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c509f43e7d0c5d165951e7c48fcf62099b690fd9318e49baa0277c8c43d8c154 ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 260 ml 1 Mois et + Motif Girafe ]]></title>
<g:id>a1108e67-1521-4397-afaf-c3e9a417d9f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 260 ml 1 mois et + motif girafe?a1108e67-1521-4397-afaf-c3e9a417d9f3 ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon avec Motif 260 ml 1 Mois et + est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989707</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2398e8b42f03f52c016e75070ec5f6961796ecf65b5fe88576907d1a87e493a5 ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 260 ml 1 Mois et + Motif Koala ]]></title>
<g:id>04939cd8-e50f-4ccf-900e-3c8a5146b72a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 260 ml 1 mois et + motif koala?04939cd8-e50f-4ccf-900e-3c8a5146b72a ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon avec Motif 260 ml 1 Mois et + - Modèle : Koala est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Ce ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989721</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8ce7141844568b40878c7b9f13ce27246bc50e976bf16dffc30daecc1375521a ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > TETINE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon 330 ml 3 Mois et + ]]></title>
<g:id>9b20b66c-f0f0-425f-bd5c-f1982ab1128f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon 330 ml 3 mois et +?9b20b66c-f0f0-425f-bd5c-f1982ab1128f ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon 330 ml 3 Mois et + est un biberon avec une tétine de débit 4, conçus pour diminuer les coliques et l'inconfort.L<br>a tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est large, douce ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103989769</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8fb9100fb489bae1c2f4ef0cd36940b2e4e3c1566972cf6facd2dbeca34a6808 ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon Verre 120 ml 0 Mois et + ]]></title>
<g:id>b377d1f6-8feb-4ad2-bbda-18d7f8e82561</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon verre 120 ml 0 mois et +?b377d1f6-8feb-4ad2-bbda-18d7f8e82561 ]]></link>
<g:price><![CDATA[ 1060.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon Verre 120 ml 0 Mois et + est un biberon avec une tétine de débit 2, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est large,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103990765</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/75cc79c7094d37107d37f7ae7c4466b5381d03a96255bb6e84e2e373e3bdc8af ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon Verre 240 ml 1 Mois et + ]]></title>
<g:id>4bd13997-0029-416b-9c0d-ab30f9e2e186</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon verre 240 ml 1 mois et +?4bd13997-0029-416b-9c0d-ab30f9e2e186 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon Verre 240 ml 1 Mois et + est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques et l'inconfort.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cette tétine est large,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103990789</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/878849fc956923ceb238f1b208483c8aa65cdca230cedc040d5a4015125458ae ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon avec Valve AirFree 260 ml 1 Mois et + ]]></title>
<g:id>03261ed9-2c8c-4ebc-969a-b3d82bc1080e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon avec valve airfree 260 ml 1 mois et +?03261ed9-2c8c-4ebc-969a-b3d82bc1080e ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Biberon avec Valve AirFree 260 ml 1 Mois et + est un biberon avec une tétine de débit 3, conçu pour diminuer les coliques, les gaz et les reflux.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquement lorsque bébé boit activement. Ainsi, il peut s'arrêter pour avaler et respirer, le débit s'arrête aussi.<br>Cet ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103990390</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b45efe162311ddc96d8d093aa96faf521a80522e1e768d1c0a8887a87af1caad ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Biberon avec Valve AirFree 260 ml 1 Mois et + Motif Nounours ]]></title>
<g:id>d127a80f-d836-4350-9470-d818f1a1d92f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response biberon avec valve airfree 260 ml 1 mois et + motif nounours?d127a80f-d836-4350-9470-d818f1a1d92f ]]></link>
<g:price><![CDATA[ 1060.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <strong>Biberon Natural Response </strong>de la marque <strong>AVENT </strong>est un biberon pour les bébés âgés de 1 mois et plus.</p><p>Il dispose d'une <strong>tétine en silicone doux </strong>qui imite le mamelon du sein de maman afin de lui procurer un grand confort au moment de la succion.&nbsp;</p><p>La tétine en taille 2 a été conçu pour éviter les <strong>fuites</strong>.&nbsp;</p><p>Le biberon possède une contenance de <strong>260ml</strong>.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103990437</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cd6cf01e9b7adc8f8debfc79c5a91095f5bfc7340844565665dd83b894b2d7f0 ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Natural Response Tasse d'Apprentissage 150 ml 6 Mois et + ]]></title>
<g:id>f8c30df7-e47a-41d9-8b62-fedb9a9a7c1f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-natural response tasse d'apprentissage 150 ml 6 mois et +?f8c30df7-e47a-41d9-8b62-fedb9a9a7c1f ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Natural Response Tasse d'Apprentissage 150 ml 6 Mois et + est une tasse avec une tétine de débit 5, conçu pour diminuer les coliques et l'inconfort.<br>Les poignées d'apprentissage sont spécialement adaptées aux petites mains. Elles sont recouvertes de caoutchouc antidérapant.<br>La tétine Natural&nbsp;Response s'adapte au rythme de tétée naturel de bébé, ce qui facilite l'alternance entre le sein et le biberon. La tétine possède une ouverture unique qui laisse le lait s'écouler uniquem ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103990826</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6940e1edf25d4327f2caa90d24ec9248dd28f644af9919b03072aded8043cc7c ]]></g:image_link>
<g:product_type><![CDATA[ BIBERON > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Soothie 2 Sucettes Orthodontiques 0-6 Mois Boy  ]]></title>
<g:id>27956957-3902-4f48-809a-8f2590146abb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-soothie 2 sucettes orthodontiques 0-6 mois boy ?27956957-3902-4f48-809a-8f2590146abb ]]></link>
<g:price><![CDATA[ 815.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Soothie 2 Sucettes Orthodontiques 0-6 Mois sont des sucettes conçues pour s'adapter aux courbes naturelles du visage de bébé. La colerette incurvée en forme de cœur ne touchera pas son nez.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>0% BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103963882</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/804244a0f4d9d9134803125ee11ded5d2639244baeac94285d15dcb35fcd928d ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Sucette Ultra Air 0-6 Mois Motifs Animaux ]]></title>
<g:id>3270d210-b204-4b2d-9fbc-241e77470b41</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-sucette ultra air 0-6 mois motifs animaux?3270d210-b204-4b2d-9fbc-241e77470b41 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Une sucette légère et aérée</strong></p><p>Réconfortez votre bébé avec une sucette qui laisse respirer la peau. Le modèle ultra&nbsp;air Philips&nbsp;Avent est doté de trous extra-larges qui maintiennent la peau au sec. Sa collerette légère est conçue pour optimiser la circulation de l'air. Différents coloris et décorations sont disponibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103982487</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3c968878e75d40ddaa616dbdbd816bb95e069bdbc0a3e91025f964622236a22b ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Tasse à Paille 300 ml 12 Mois et + - Couleur : Rose ]]></title>
<g:id>d2062570-173b-4f3c-889d-c274db01c3bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-tasse à paille 300 ml 12 mois et + - couleur : rose?d2062570-173b-4f3c-889d-c274db01c3bd ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Tasse à Paille 300 ml 12 Mois et + - Couleur : Rose est une tasse avec paille flexible de forme ergonomique.</p><p>La partie inférieure de la paille est courbée pour atteindre la dernière goutte. Sa taille permet un développement bucco-dentaire sain et exerce les muscles de la bouche afin de les fortifier. La valve antifuites est intégrée, tandis que le clapet permet d'éviter les accidents.</p><p>Toutes les pièces sont compatibles au lave-vaisselle, pour plus de facilité.</p><p>Sans BPA ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103781981</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cbbd388f23b1ad646b8fe13c6407c9b3085e2e5b3e75e0fe3e4e94bf92e44839 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT > TASSE - GOBELET ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Tasse à Paille 300 ml 12 Mois et + - Couleur : Vert ]]></title>
<g:id>7974269d-90d9-4567-9ed1-127ef9cb3a6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-tasse à paille 300 ml 12 mois et + - couleur : vert?7974269d-90d9-4567-9ed1-127ef9cb3a6e ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Tasse à Paille 300 ml 12 Mois et + - Couleur : Vert est une tasse avec paille flexible de forme ergonomique.</p><p>La partie inférieure de la paille est courbée pour atteindre la dernière goutte. Sa taille permet un développement bucco-dentaire sain et exerce les muscles de la bouche afin de les fortifier. La valve antifuites est intégrée, tandis que le clapet permet d'éviter les accidents.</p><p>Toutes les pièces sont compatibles au lave-vaisselle, pour plus de facilité.</p><p>Sans BPA ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103781967</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5282a343ec9a6d248b02fe844ed21e55647d75b8c8e9a5d2cd209ae6202fdd7c ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Thermomètre Numérique Chambre et Bain ]]></title>
<g:id>9306a1d0-c11a-4a93-92c7-d658993001c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-thermomètre numérique chambre et bain?9306a1d0-c11a-4a93-92c7-d658993001c0 ]]></link>
<g:price><![CDATA[ 1950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Thermomètre Numérique Chambre et Bain - Couleur : Blanc a sa place dans la chambre comme dans le bain. Il vous permet de vérifier facilement la température d'une pièce ou de l'eau pendant que votre enfant joue avec ses pétales ludiques.<br>Ce thermomètre donne un relevé précis de la température.<br>Il est étanche et flotte, et permet de s'amuser en toute sérénité.</p><p>Conforme aux normes de sécurité de l'UE, dont celles relatives aux jouets.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103916895</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d43200300f5cba2dcce92984cd132c476586a32ca88295addd931fb5d5e8b19 ]]></g:image_link>
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
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques 0-6 Mois ]]></title>
<g:id>c6034c48-5c0b-4810-92fc-f8ff9a518f5d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques 0-6 mois?c6034c48-5c0b-4810-92fc-f8ff9a518f5d ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <strong>Sucettes Ultra-Air </strong>de <strong>AVENT </strong>conviennent aux bébés à partir de la naissance jusqu'à 6 mois.&nbsp;</p><p>Elles <strong>apaisent </strong>bébé au quotidien, sans abîmer la peau.&nbsp;</p><p>La gamme Ultra-Air est parfaite pour les <strong>peaux sensibles </strong>car les sucettes laissent la peau respirer sans provoquer d'irritations.&nbsp;</p><p>On aime le design unique en <strong>rose </strong>de ces sucettes AVENT.&nbsp;</p><p>Ce lot contient de 2 sucette ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103982357</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88fa582fa23390fd06bdc4f6a5981f86c5cc270fb755955e35337b1458ec796e ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques 18 Mois et + Motif :  Éléphants/Love ]]></title>
<g:id>f5594579-b5bc-4b30-bdfa-e082cae7b0be</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques 18 mois et + motif :  Éléphants/love?f5594579-b5bc-4b30-bdfa-e082cae7b0be ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air 2 Sucettes Orthodontiques 18 Mois et + - Modèle : Éléphants/Love est un lot de deux sucettes orthodontiques et robustes dont les orifices sont extra-larges pour une circulation de l'air de façon maximale.</p><p>Fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme selon la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012942</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/31c81c69bfd58bb85cd10bf67d2fda6e5b0ef1c0f7e049cce645497115a955ee ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques 18+ ]]></title>
<g:id>281b8618-4e6d-440d-aad6-cf504a34f55a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques 18+?281b8618-4e6d-440d-aad6-cf504a34f55a ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les<strong> Sucettes Orthodontiques Ultra Air</strong> de la marque <strong>AVENT</strong> ont spécialement été conçus pour les bébés âgés de 18 mois et plus.&nbsp;</p><p>Ces sucettes ont une forme <strong>orthodontique</strong> pour répondre aux besoins naturels de succion de bébé.&nbsp;</p><p>Elles favorisent le bon développement de la <strong>dentition</strong> des petits.</p><p>Elles sont adaptées aux <strong>peaux sensibles</strong> car elles laissent la peau respirer librement afin d'év ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689017442</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5420d702bff5d483afcb732cc5a4a03ea0a8beeac3d3216b82c8ac4a4291563f ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques 6-18 Mois ]]></title>
<g:id>892308d3-a1c6-404c-a4b0-65d118d36b27</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques 6-18 mois?892308d3-a1c6-404c-a4b0-65d118d36b27 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <strong>Sucettes Ultra Air</strong> de <strong>AVENT</strong> sont là pour apaiser bébé tout au long de la journée.&nbsp;</p><p>La forme orthodontique de ces sucettes pour bébés est parfaite afin de permettre un <strong>bon développement</strong> de la dentition.&nbsp;</p><p>De plus, les sucettes vont respecter le <strong>palais</strong> et les <strong>gencives</strong> de bébé.</p><p>Très <strong>douces,</strong> les sucettes ultra air AVENT ont une téterelle en <strong>silicone,</strong ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689018661</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/af528602e708fa5f59b35834ffd73b9484da5027a40d6cee2fe37f2042265808 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques 6-18 Mois ]]></title>
<g:id>6ea8702f-86f6-4fba-a708-8ab89074a90f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques 6-18 mois?6ea8702f-86f6-4fba-a708-8ab89074a90f ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air 2 Sucettes Orthodontiques 6-18 Mois est un lot de deux sucettes orthodontiques pour la peau sensible du bébé. Elles possèdent des orifices extra-larges pour une circulation d'air maximale et permettre à la peau sensible de bébé de respirer.</p><p>Il est ainsi réconforté et sa peau reste plus sèche grâce au design aéré de cette sucette. Ses bouts arrondis permettent une utilisation confortable. Sa téterelle texturée et soyeuse offre un confort apaisant. Sa forme symétrique en s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012683</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/811c19470108ff1a267abef86c5b2ff6c7b4051be3c48e4f84f90b078baab31b ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques 6-18 Mois Motif : Happy ]]></title>
<g:id>4c7ccb34-42e4-4ef3-b010-1ade140a6b39</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques 6-18 mois motif : happy?4c7ccb34-42e4-4ef3-b010-1ade140a6b39 ]]></link>
<g:price><![CDATA[ 610.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <strong>Sucettes Orthodontiques Motif Happy Ultra Air</strong> de <strong>AVENT</strong> répondent aux besoins des bébés âgés de 6 à 18 mois.&nbsp;</p><p>Elles ont une forme orthodontique afin de favoriser un bon <strong>développement</strong> de la <strong>bouche</strong> des bébés.&nbsp;</p><p>Les sucettes orthodontiques sont composées avec du <strong>silicone</strong> très doux.&nbsp;</p><p>De plus, elles sont sans BPA et sans BPS afin de respecter la réglementation en vigueur.&nbsp;</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103982463</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9d74e1b69cf975b1397f56d7ade7f3c6be6d2c935e6341a40bd13419c97d2a61 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques Silicone 0-6 Mois ]]></title>
<g:id>95ff2913-5e28-4a11-98d8-5eeae7bf5f0a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques silicone 0-6 mois?95ff2913-5e28-4a11-98d8-5eeae7bf5f0a ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air 2 Sucettes Orthodontiques Silicone 0-6 Mois est un lot de deux sucettes orthodontiques à larges aérations favorisant une circulation d'air maximale pour les peaux sensibles.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme à la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103993056</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9a7cbed5e07a358e8991d57f82d2851bd4ccb63cc0125601337e34e91be9551 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques Silicone 6-18 Mois ]]></title>
<g:id>240e99e6-6666-449e-90f1-163dec22eb1a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques silicone 6-18 mois?240e99e6-6666-449e-90f1-163dec22eb1a ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air 2 Sucettes Orthodontiques Silicone 6-18 Mois est un lot de deux sucettes orthodontiques à larges aérations favorisant une circulation d'air maximale pour les peaux sensibles.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme à la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103993155</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c5d476f4e98f0908ad8a2263de0f7ed3d7fd13ef023ccdb184d8751536bbdcbf ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air 2 Sucettes Orthodontiques Silicone avec Motif 0-6 Mois  ]]></title>
<g:id>9ac09f1c-07ff-4064-a356-710a2858be64</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air 2 sucettes orthodontiques silicone avec motif 0-6 mois ?9ac09f1c-07ff-4064-a356-710a2858be64 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air 2 Sucettes Orthodontiques Silicone avec Motif 0-6 Mois - Modèle : Soleil et Arc-en-Ciel Bleu est un lot de deux sucettes orthodontiques à larges aérations favorisant une circulation d'air maximale pour les peaux sensibles.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme à la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012201</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b5af061b063645cc2d441b78293e5b203be278bf43d08af04c6ac3dc425a543 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air Mix 2 Sucettes 0-6 Mois ]]></title>
<g:id>62ea5dfa-5de2-4e4a-b042-dde58b4c62d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air mix 2 sucettes 0-6 mois?62ea5dfa-5de2-4e4a-b042-dde58b4c62d4 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Laisse la peau de votre bébé respirer<br>0-6 mois<br>Orthodontique, 0 % BPA<br>Lot de 2</p><p>Une sucette légère et aérée</p><p>Les aérations extra-larges permettent à la peau de bébé de respirer</p><p>Réconfortez votre bébé avec une sucette qui laisse respirer la peau. Le modèle ultra air Philips Avent est doté de trous extra-larges qui maintiennent la peau au sec. Sa collerette légère est conçue pour optimiser la circulation de l'air. Différents coloris et décorations sont disponibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689018333</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2722a7993ecd3acdfb61f1d22d063d9ef2f74b0d2c8fe3f8eba933d985b8634b ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air Nighttime 2 Sucettes Orthodontiques 0-6 Mois ]]></title>
<g:id>c800fe23-3f9b-4d74-acb4-846337e9da81</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air nighttime 2 sucettes orthodontiques 0-6 mois?c800fe23-3f9b-4d74-acb4-846337e9da81 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air Nighttime 2 Sucettes Orthodontiques 0-6 Mois - Couleur : Bleu et Vert 1 est un lot de deux sucettes orthodontiques dont le nez brille longtemps dans le noir, ce qui les rend faciles à trouver.<br>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme selon la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012997</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8caecdd452264792fecdbdbb96897da36ed686e384b4533b34a0debfa266e5e9 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air Nighttime 2 Sucettes Orthodontiques 18 Mois et + ]]></title>
<g:id>1c7aff21-fc11-4766-91f8-7d34f5e4442b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air nighttime 2 sucettes orthodontiques 18 mois et +?1c7aff21-fc11-4766-91f8-7d34f5e4442b ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>La sucette SCF376/23 Nuit 18M+ est spécialement conçue pour répondre aux besoins des tout-petits âgés de 18 mois et plus. Grâce à ses caractéristiques uniques, elle offre un confort optimal et une réponse aux besoins naturels de l'enfant pendant la nuit. Sa forme ergonomique et sa taille adaptée à la bouche des tout-petits en font un accessoire idéal pour apaiser bébé lors de son sommeil. De plus, la sucette est dotée d'un anneau de préhension pour une manipulation facile, même dans l'obscuri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689022477</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c4b8f05d82a9c487f850ef1ed3371e79bf980d53f8e48a3699242ff3b9e13b4 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Air Nighttime 2 Sucettes Orthodontiques 6-18 Mois ]]></title>
<g:id>ed8b21ee-3cf1-46c4-9cb8-d698813f56cb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra air nighttime 2 sucettes orthodontiques 6-18 mois?ed8b21ee-3cf1-46c4-9cb8-d698813f56cb ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Air Nighttime 2 Sucettes Orthodontiques 6-18 Mois - Couleur : Bleu est un lot de deux sucettes orthodontiques dont le nez brille longtemps dans le noir, ce qui les rend faciles à trouver.<br>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme selon la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012966</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/346a7e60ac607b59143f3bddd8d27a22a178d82811c384393b6a3fc93f413b05 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Soft 2 Sucettes Orthodontiques Silicone 0-6 Mois ]]></title>
<g:id>cad0724f-8cc8-49ba-83bb-ae3697053478</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra soft 2 sucettes orthodontiques silicone 0-6 mois?cad0724f-8cc8-49ba-83bb-ae3697053478 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong><br></strong>Avent Ultra Soft 2 Sucettes Orthodontiques Silicone 0-6 Mois - Modèle : Beige et Vert est un lot de deux sucettes orthodontiques avec une collerette FlexiFit ultradouce pour éviter les marques et les irritations sur la peau.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme à la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012782</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/271bd3e1f73dc199aab92d02be6f1c99b46e86001652aea2fa3907f6585e6801 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Soft 2 Sucettes Orthodontiques Silicone 0-6 Mois ]]></title>
<g:id>5b297ddc-470c-4eab-a1aa-7645490a1b0a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra soft 2 sucettes orthodontiques silicone 0-6 mois?5b297ddc-470c-4eab-a1aa-7645490a1b0a ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Soft 2 Sucettes Orthodontiques Silicone 0-6 Mois est un lot de deux sucettes orthodontiques avec une collerette FlexiFit ultradouce pour éviter les marques et les irritations sur la peau.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme à la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8710103993179</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2eacffd4a9eb6f9bced2e662d04267dd7a16485cfaf7d2115993ee91196f354a ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Soft 2 Sucettes Orthodontiques Silicone 6-18 Mois ]]></title>
<g:id>e7c130d5-757f-45fb-9dac-b45718abd4bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra soft 2 sucettes orthodontiques silicone 6-18 mois?e7c130d5-757f-45fb-9dac-b45718abd4bd ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avent Ultra Soft 2 Sucettes Orthodontiques Silicone 6-18 Mois - Couleur : Bleu Vert/Gris est un lot de deux sucettes orthodontiques avec une collerette flexible pour une peau douce pour éviter les marques et les irritations sur la peau.</p><p>Ces 2 sucettes sont fournies dans un étui pratique pour le transport et la stérilisation.</p><p>Conforme à la norme EN 1400.</p><p>Sans BPA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689012805</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/16f6eff778e506787ef5c3c52614447cbada2e04df76edcd31ea68bcee43a8dc ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Star 2 Sucettes Orthodontiques 0-2 Mois ]]></title>
<g:id>bd4cacaf-b7cc-497f-8452-62d0f35aad9c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra star 2 sucettes orthodontiques 0-2 mois?bd4cacaf-b7cc-497f-8452-62d0f35aad9c ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les<strong> Sucettes Ultra Star Night</strong> de <strong>AVENT</strong> sont des sucettes adaptées aux besoins des bébés de 0 à 2 mois.&nbsp;</p><p>Elles ont une forme orthodontique pour permettre à la <strong>mâchoire</strong> et <strong>dentition</strong> de bébé d'être correctement développées.</p><p>Les sucettes sont en <strong>silicone</strong> très doux, un silicone de qualité alimentaire, conformément à la réglementation en vigueur.&nbsp;</p><p>Elles sont sans BPA et sans BPS.&nbsp;</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689028127</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e001406ed792d7f947d0398af8a989ee8e359838e3fb1c25e55b720e43cc22f6 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avent Ultra Start 2 Sucettes 0-2mois ]]></title>
<g:id>e967cb79-af0f-401c-a458-29c4b71411b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avent-ultra start 2 sucettes 0-2mois?e967cb79-af0f-401c-a458-29c4b71411b6 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>La sucette Ultra Start Philips Avent est la première sucette idéale pour les nouveau-nés. Grâce à sa conception spéciale, elle s’adapte parfaitement à leur bouche et à leur visage. Cette sucette, la plus légère et la plus petite de la gamme, est un véritable must parmi les produits essentiels pour les nouveau-nés, car elle répond aux besoins naturels de succion de votre bébé dès le premier jour. L’ensemble de sucettes orthodontiques et sans BPA est livré avec un étui de transport réutilisable ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8720689028134</g:gtin>
<g:brand><![CDATA[ PHILLIPS AVENT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/469f967c187de22ab9cf9bb46c5b387dfdcb5e5d0804015b63298a7041a53237 ]]></g:image_link>
<g:product_type><![CDATA[ SUCETTE > Bébé > ACCESSOIRES BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Correcteur bio teinte doré 4 g ]]></title>
<g:id>d9c38b02-789d-4700-9281-b4e5b9fcc3b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-correcteur bio teinte doré 4 g?d9c38b02-789d-4700-9281-b4e5b9fcc3b7 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>En application au doigt ou au pinceau, la texture crémeuse et couvrante du </span><strong>correcteur Doré certifié bio Avril</strong><span> corrige les cernes et dissimule les petites imperfections. Un indispensable !</span></p>
<ul><li>Teinte Doré</li>
<li>Correcteur très pigmenté, couvrance modulable</li>
<li>Texture crémeuse agréable à appliquer</li>
<li>Certifié bio par Ecocert</li>
<li>Produit végan</li>
<li>Fabriqué en Italie</li>
<li>Contenance : 4 g</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217011209</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/44b4d13b62d444ae30aad31f24194144b1992eb319637dfdb6ed5119506d8879 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Correcteur bio teinte noisette 4 g ]]></title>
<g:id>b30f5d12-43b7-4bee-8b7e-24d626448b34</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-correcteur bio teinte noisette 4 g?b30f5d12-43b7-4bee-8b7e-24d626448b34 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>En application au doigt ou au pinceau, la texture crémeuse et couvrante du </span><strong>correcteur Noisette certifié bio Avril</strong><span> corrige les cernes et dissimule les petites imperfections. Un indispensable !</span></p>
<ul><li>Teinte Noisette</li>
<li>Correcteur très pigmenté, couvrance modulable</li>
<li>Texture crémeuse agréable à appliquer</li>
<li>Certifié bio par Ecocert</li>
<li>Produit végan</li>
<li>Fabriqué en Italie</li>
<li>Contenance : 4 g</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217011940</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3044ce6cba2ec1d953787661186e84bc13a613f89c76584abfb4d7c741e7fd2e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Crème Premières Rides 50 ML - Certifiée BIO ]]></title>
<g:id>359757a1-a3fc-4fe2-9144-f32b8016fcb2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème premières rides 50 ml - certifiée bio?359757a1-a3fc-4fe2-9144-f32b8016fcb2 ]]></link>
<g:price><![CDATA[ 900.00 EUR ]]></g:price>
<description><![CDATA[ <p>Votre visage affiche des marques de fatigue ? Redonnez du peps à votre peau avec la <strong>crème premières rides certifiée bio Avril !</strong> Enrichie en eau florale de Damas bio, cette crème aide votre peau à lutter contre les premiers signes de l’âge.</p>
<p>Fabriquée en France</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217016518</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f69d1515e09e2d4db3921494191d946f61ad764d8ae56b263db5e7d02e34b9e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Crème anti-âge bio 50 ml ]]></title>
<g:id>aa80bb35-f714-45b9-97ac-c8d6aa629d60</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème anti-âge bio 50 ml?aa80bb35-f714-45b9-97ac-c8d6aa629d60 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Aidez votre peau à combattre le vieillissement cutané avec la </span><strong>crème anti-âge certifiée bio Avril</strong><span> ! Sa formule contient de l'eau florale de rose et un actif breveté anti-âge à l'extrait de bourgeon de hêtre bio.</span></p>
<ul><li>Aide à combattre les signes de l’âge</li>
<li>A l’eau florale de rose bio</li>
<li>Au miel d’acacia bio</li>
<li>A l'extrait de bourgeon de hêtre bio, un actif breveté anti-âge</li>
<li>Certifié bio par Ecocert</li>
<li>Fabriqué en ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217007066</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/693720b342f21c1ab8915fc405ea8e5d8574dcf3c04fbb0dacd4f6f15017e83b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Crème de nuit peaux normales & mixtes bio 50 ml ]]></title>
<g:id>a76eeedf-967e-4e49-acf5-c9f1abf54053</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème de nuit peaux normales & mixtes bio 50 ml?a76eeedf-967e-4e49-acf5-c9f1abf54053 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <strong>crème de nuit certifiée bio</strong> Avril contient de l'huile d'amande douce et de pépins de raisin bio, pour les <strong>peaux normales à mixtes</strong>. L'extrait de lys bio lui confère son odeur fraîche et subtile.</p>
<p>Fabriqué en France</p>
<ul><li>Peaux normales à mixtes</li>
<li>Aux huiles d'amande douce et de pépins de raisin bio</li>
<li>Parfum 100% naturel</li>
<li>Certifié bio par Ecocert</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217001743</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4b8ccfffea85e19fa4dcc5df677e4e0afdd1e801ad678bbd77b31948a1d6a399 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Crème jour & nuit bio 50 ml ]]></title>
<g:id>9f3e3b35-9b42-40f8-9478-c3ac436d67d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème jour & nuit bio 50 ml?9f3e3b35-9b42-40f8-9478-c3ac436d67d0 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apportez confort à votre peau matin et soir grâce à la <strong>crème jour et nuit certifiée bio Avril !</strong> Sa formule, à l’aloe vera bio et au beurre de karité bio, convient à tous les types de peaux.</p>
<p>Fabriqué en France</p>
<ul><li>Pour tous types de peau : sèches, normales, mixtes et grasses</li>
<li>Produit 2 en 1 : s’utilise comme crème de jour et de nuit</li>
<li>A l’aloe vera bio </li>
<li>Au beurre de karité bio</li>
<li>Certifié bio par Ecocert</li>
<li>Produit végan</li>
 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217015610</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57c2ffc5ba7212b9ad0a0a58980397a87ee3178a5fca4756d28fe3a443e988d5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Crème neutre bio 200 ml ]]></title>
<g:id>a4ce8b63-75b2-4335-8eaa-8947ab63428f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème neutre bio 200 ml?a4ce8b63-75b2-4335-8eaa-8947ab63428f ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les peaux sensibles vont l’adorer ! Haute tolérance, <strong>la crème neutre certifiée bio Avril</strong> est formulée sans parfum ajouté. Enrichie en huile d’amande douce bio et en beurre de karité bio, elle apporte un réconfort immédiat à votre peau.</p>
<ul><li>Enrichie en beurre de karité, huile d’amande douce et aloe vera bio</li>
<li>Pénètre rapidement</li>
<li>Visage et corps</li>
<li>Sans parfum ajouté</li>
<li>Haute tolérance</li>
<li>Pour tous types de peau</li>
<li>Excellente base  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217007189</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28589523ce7ccda84e8ff064c0f5f920c25db06497b0907b43bf03c87e4128de ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Crème visage & corps bio 200 ml ]]></title>
<g:id>2be37b6d-23cc-42f3-9033-286e1390cde3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème visage & corps bio 200 ml?2be37b6d-23cc-42f3-9033-286e1390cde3 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Votre peau est sèche ? La </span><strong>crème hydratante* visage et corps certifiée bio Avril</strong><span> vous apporte un apaisement immédiat. Enrichie en beurre de karité et en aloe vera bio, elle nourrit et protège votre peau en douceur.</span></p>
<ul><li>Enrichie en beurre de karité et aloe vera bio</li>
<li>Texture crème ultra généreuse</li>
<li>Pénètre rapidement</li>
<li>Parfum très discret : convient à toute la famille</li>
<li>Pour tous types de peau</li>
<li>Certifié bio p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217004867</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b06d681c6f9bc90b3e63317dd1b3fc69d69646de4a2a4b0fdb44b0439dd3d1df ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Démaquillant yeux bio 150 ml ]]></title>
<g:id>e580e20a-680c-4eaf-88f6-0f8abba33932</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-démaquillant yeux bio 150 ml?e580e20a-680c-4eaf-88f6-0f8abba33932 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Très doux, le </span><strong>démaquillant yeux certifié bio Avril</strong><span> les nettoie sans les agresser. Sa composition à base d'eau florale de bleuet apaise la zone fragile du contour de l'oeil.</span></p>
<ul><li>Adapté aux yeux sensibles</li>
<li>Formule hydratante</li>
<li>Respecte la zone fragile du contour des yeux</li>
<li>Ne pique pas les yeux</li>
<li>A l'eau florale de bleuet bio</li>
<li>A l'aloe vera bio</li>
<li>Certifié bio par Ecocert</li>
<li>Produit végan</li>
<l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217008254</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bab52b3134db2f96edcd8163ea6e52024c698b0fb7b99d1c40777ecee1843c08 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Démaquillant yeux biphasé bio 150 ml ]]></title>
<g:id>54339c84-215b-4e2a-8337-ac335cb3c47f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-démaquillant yeux biphasé bio 150 ml?54339c84-215b-4e2a-8337-ac335cb3c47f ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Grâce à sa texture biphase non grasse, le <strong>démaquillant yeux biphasé certifié bio Avril</strong> est idéal pour éliminer en douceur et avec efficacité tous les types de maquillage pour les yeux, même le waterproof.</p>
<ul><li>Efficace sur le maquillage waterproof</li>
<li>Convient aux yeux sensibles</li>
<li>Testé sous contrôles dermatologique et ophtalmologique</li>
<li>À l’eau florale de bleuet bio</li>
<li>À l'aloe vera bio</li>
<li>Certifié bio</li>
<li>Produit végan</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217011261</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fba27e65c883ab4f59f9ef324f67f8690e878c044178f01c1ab5ed109283135c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Eau micellaire bio 500 ml ]]></title>
<g:id>2b39aa92-76ec-4cee-9a12-66d9d4b31256</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-eau micellaire bio 500 ml?2b39aa92-76ec-4cee-9a12-66d9d4b31256 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Adaptée à tous les types de peaux, <strong>l'eau micellaire certifiée bio Avril</strong> démaquille et nettoie le visage en douceur.</p>
<p>Fabriquée en France</p>
<ul><li>Tous types de peaux, même sensibles</li>
<li>Nettoie, rafraîchit et démaquille en douceur</li>
<li>Laisse la peau nette</li>
<li>A l'aloe vera bio</li>
<li>A l'extrait de ginkgo biloba</li>
<li>Testée sous contrôle dermatologique et ophtalmologique</li>
<li>Certifiée bio par Ecocert</li>
<li>Produit vegan</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217002283</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/833b614ad9804269832b2d2a5fe033e26f90ca60e559f7bf879e18dd16e4ccee ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Fluide matifiant bio 50 ml ]]></title>
<g:id>bb2c56ea-a6e5-4e1c-93ff-074106d15389</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-fluide matifiant bio 50 ml?bb2c56ea-a6e5-4e1c-93ff-074106d15389 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Finies les brillances avec le <strong>fluide matifiant certifié bio Avril</strong> ! Grâce à sa formule composée d'un actif séborégulateur d'origine marine, l'excès de sébum est absorbé et les pores resserrés. Résultat : votre peau est lissée, <strong>votre teint est matifié</strong>. Comment faisiez-vous sans ?</p>
<p>Fabriqué en France</p>
<ul><li>Adapté aux peaux mixtes à grasses</li>
<li>A l'actif séborégulateur d'origine marine *</li>
<li>A l'aloe vera bio *</li>
<li>A l'huile de macadam ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217006823</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa3b18a01b59ad0030d4b51f9f0e938db6da2763c6781959e6e8a6ac12fb2336 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Gel nettoyant visage bio 100 ml ]]></title>
<g:id>ff8f3374-0ca2-4130-8ff5-a17431417372</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-gel nettoyant visage bio 100 ml?ff8f3374-0ca2-4130-8ff5-a17431417372 ]]></link>
<g:price><![CDATA[ 500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoyez votre peau en douceur grâce au <strong>gel nettoyant visage certifié bio Avril</strong> ! Composé d’aloe vera bio, il débarrasse votre peau des impuretés tout en respectant son équilibre naturel.</p>
<p>Fabriqué en France</p>
<ul><li>Nouvelle formule</li>
<li>Tous types de peaux</li>
<li>A l'aloe vera bio hydratant*</li>
<li>PH : 5,7 - 6,0</li>
<li>Certifié bio</li>
<li>Produit vegan</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217006250</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20b72a145cc945139f94760ee8d0c70b74adb31103a159e6fd23ae96e0ce130f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Homme Baume après rasage Bio 100 ml ]]></title>
<g:id>1cbc2e85-27b8-48a8-bf43-0fffe84403a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-homme baume après rasage bio 100 ml?1cbc2e85-27b8-48a8-bf43-0fffe84403a3 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Stop aux irritations avec le <strong>baume après-rasage certifié bio Avril</strong> ! Grâce à sa formule à l’aloe vera bio non grasse et non collante, votre peau est immédiatement apaisée, lissée et hydratée*.</p>
<p>Fabriqué en France</p>
<ul><li>  Tous types de peaux</li>
<li>       Formule non grasse, non collante</li>
<li>       Pénétration rapide</li>
<li>       A l’aloe vera bio *</li>
<li>       A l’extrait de bourgeon de hêtre bio *</li>
<li>       Certifié bio par Ecocert</li>
<li>   ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217006847</g:gtin>
<g:brand><![CDATA[ AVRIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7ee196ed9ca05d7010449c24ed3e70d8a3b5e5e11446e57b4b679c33cd253f3 ]]></g:image_link>
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
<title><![CDATA[ Avril Homme Gel nettoyant visage bio 100 ml ]]></title>
<g:id>f7ec6a9d-976a-4811-96a7-735b10b79b7e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-homme gel nettoyant visage bio 100 ml?f7ec6a9d-976a-4811-96a7-735b10b79b7e ]]></link>
<g:price><![CDATA[ 500.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoyez et purifiez votre peau en douceur grâce au <strong>gel nettoyant visage certifié bio Avril !</strong> Grâce au zinc PCA qui régule la production de sébum et à l’aloe vera bio hydratant*, votre peau est propre et saine !</p>
<p>Fabriqué en France</p>
<ul><li>Nettoie et purifie la peau</li>
<li>Tous types de peaux même sensibles</li>
<li>Sans savon</li>
<li>A l’eau de thé vert bio reconnu pour ses propriétés purifiantes et astringeantes (resserre les pores de la peau)</li>
<li>Au zinc  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217007110</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/099c0df1ddb0d1f1a0eeff57466d4c9c4e298d45b962794f8fa69a80b2dfe07a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Homme Huile à barbe bio 50 ml ]]></title>
<g:id>3239135d-ead8-441b-8faa-6cef4749c419</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-homme huile à barbe bio 50 ml?3239135d-ead8-441b-8faa-6cef4749c419 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Prenez soin de votre barbe en appliquant <strong>l’huile à barbe certifiée bio Avril.</strong> Finie la barbe qui pique ! Grâce à l'huile de sésame bio, elle ne laisse pas de film gras pour un confort optimal.</p>
<p>Fabriquée en France</p>
<ul><li>Utilisation quotidienne</li>
<li>Adaptée à tous les types de peaux et de barbes</li>
<li>A l’huile de sésame bio pressée à froid</li>
<li>Léger parfum boisé</li>
<li>Certifiée bio par Ecocert</li>
<li>Produit végan</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217008193</g:gtin>
<g:brand><![CDATA[ AVRIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3557a49061739f4a599138e9554ae18595acc5946420a3fe3e0f620bc3086c17 ]]></g:image_link>
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
<title><![CDATA[ Avril Homme Soin anti-âge bio 50 ml ]]></title>
<g:id>e5ad2176-0360-40d6-82a5-5299347a637a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-homme soin anti-âge bio 50 ml?e5ad2176-0360-40d6-82a5-5299347a637a ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Prendre soin de sa peau sans se prendre la tête ? Rien de plus facile avec le </span><strong>soin anti-âge homme certifié bio Avril </strong><span>! Grâce à ses ingrédients actifs, il hydrate*, protège, apaise la peau et lutte contre les signes du vieillissement cutané.</span></p>
<ul><li>Tous types de peaux</li>
<li>Protège, hydrate* et revitalise la peau</li>
<li>A l'aloe vera bio</li>
<li>A l’extrait de figue de barbarie bio</li>
<li>Certifié bio par Ecocert</li>
<li>Produit végan</l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217010387</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1685a429ce3b456e1cc5c9df3b29e5da0fc41b075ea747a9bd6b00cf8f5cb854 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Homme Soin hydratant bio 50 ml ]]></title>
<g:id>2a2bd888-e0a2-423c-9ec4-79a9aa009107</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-homme soin hydratant bio 50 ml?2a2bd888-e0a2-423c-9ec4-79a9aa009107 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour une peau éclatante, une hydratation quotidienne est un geste simple à adopter ! Grâce au <strong>soin hydratant Homme certifié bio Avril</strong> à l’aloe vera bio et à l’huile de graine de jojoba bio, votre peau est nourrie et protégée en un clin d’œil !</p>
<p>Fabriqué en France</p>
<ul><li>Adapté à tous types de peaux, idéal peaux ternes et déshydratées</li>
<li>Pénètre rapidement</li>
<li>A l’aloe vera bio</li>
<li>A l’huile de jojoba bio </li>
<li>Au beurre de karité bio</li>
<li>Ce ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217008162</g:gtin>
<g:brand><![CDATA[ AVRIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13b2f3fb2a12af13097ea4bf94e44b61be9a507e1e892d39627866837b00f0ea ]]></g:image_link>
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
<title><![CDATA[ Avril Lait démaquillant bio 250 ml ]]></title>
<g:id>8902626c-412b-4fca-9c82-c8e316c77700</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-lait démaquillant bio 250 ml?8902626c-412b-4fca-9c82-c8e316c77700 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'aloe vera bio apporte au <strong>lait démaquillant certifié bio Avril</strong> toutes ses vertus bienfaisantes. Enrichie en beurre de karité bio et en ginkgo biloba bio, sa formule rafraîchit la peau du visage.</p>
<p>Fabriqué en France</p>
<ul><li>Pour tous types de peaux</li>
<li>Formule hydratante</li>
<li>Démaquille en douceur</li>
<li>Ne laisse pas de film gras</li>
<li>Au beurre de karité bio</li>
<li>A l'aloé vera bio</li>
<li>Au ginkgo biloba bio</li>
<li>Testé sous contrôle dermato ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217004256</g:gtin>
<g:brand><![CDATA[ AVRIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5462161211c048fab928f6b59f9523ce50c0da2197e1e5cd860f3e38a6727a8d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Masque visage apaisant bio 50 ml ]]></title>
<g:id>48c3bdb3-d019-4fb2-8555-0f0cd0b15bc3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-masque visage apaisant bio 50 ml?48c3bdb3-d019-4fb2-8555-0f0cd0b15bc3 ]]></link>
<g:price><![CDATA[ 500.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour une peau apaisée en quelques minutes, le </span><strong>masque visage apaisant certifié bio Avril</strong><span> est votre meilleur ami ! Appliquez, laissez poser : votre peau vous remercie !</span></p>
<ul><li>Apaise et calme la peau</li>
<li>Peaux sensibles</li>
<li>A l’eau florale de camomille bio</li>
<li>A l’huile de camélia bio</li>
<li>Certifié bio par Ecocert</li>
<li>Fabriqué en France</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217008186</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2fb8bee41394930a7af203a1b104b55b60eacfa75c1b868235317f0d2a3d06f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Masque visage liftant bio 50 ml ]]></title>
<g:id>dbbb4414-57e6-4f4a-98cb-e62b20be0998</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-masque visage liftant bio 50 ml?dbbb4414-57e6-4f4a-98cb-e62b20be0998 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Luttez contre les signes de l’âge grâce au </span><strong>masque visage liftant certifié bio Avril </strong><span>! Enrichi en beurre de karité bio et en eau florale de rose bio, il lisse, raffermit et régénère la peau. Résultat : vous rayonnez !</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217007080</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0dc0e4f9c8acdaabdd52850d3838801d9d120e2f2d14020bd0cae60195fd22db ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Masque visage nourrissant bio 50 ml ]]></title>
<g:id>acdd4ac5-1c95-45a1-94d7-eec14a9a718c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-masque visage nourrissant bio 50 ml?acdd4ac5-1c95-45a1-94d7-eec14a9a718c ]]></link>
<g:price><![CDATA[ 500.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Votre peau est sèche ? Appliquez le </span><strong>masque visage nourrissant certifié bio Avril </strong><span>au beurre de karité bio spécialement formulé pour les peaux sèches et sensibles.</span></p>
<ul><li>Masque nourrissant</li>
<li>Pour peaux sèches et sensibles</li>
<li>Au beurre de karité bio</li>
<li>A l'aloe vera bio</li>
<li>Certifié bio par Ecocert</li>
<li>Fabriqué en France</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217011339</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fc774f03781c99683df7a744f55ad3518a70be152baeb817f2bf099d6727867 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Mousse nettoyante visage bio 150 ml ]]></title>
<g:id>55a9247e-6a6a-42bb-82f7-bb706ea28ab4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-mousse nettoyante visage bio 150 ml?55a9247e-6a6a-42bb-82f7-bb706ea28ab4 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <strong>mousse nettoyante certifiée bio Avril</strong> a été spécialement élaborée pour nettoyer votre visage en douceur. Elle contient de l'eau d'hamamélis bio.</p>
<p>Fabriqué en France</p>
<ul><li>Nettoie en douceur</li>
<li>A l'eau d'hamamélis bio</li>
<li>Certifiée bio par Ecocert</li>
<li>Produit VEGAN</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217006243</g:gtin>
<g:brand><![CDATA[ AVRIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c6fa0e7b45e752542931f7219c0579e7b7011a91c5c227348fea1900ef7e207b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Nettoyant 3 en 1 bio 50 ml ]]></title>
<g:id>41c65d0e-b501-46e6-837e-9fea661f1d27</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-nettoyant 3 en 1 bio 50 ml?41c65d0e-b501-46e6-837e-9fea661f1d27 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Nettoyant, exfoliant et masque : le </span><strong>nettoyant 3 en 1 certifié bio Avril</strong><span> sait tout faire ! Enrichi en poudre de charbon actif, en argile blanche et en aloe vera bio, il assainit votre peau sans l’agresser.</span></p>
<ul><li>Pour peaux mixtes à grasses</li>
<li>Convient aux peaux à imperfections</li>
<li>À la poudre de charbon actif </li>
<li>A l'argile blanche </li>
<li>À l'aloe vera bio *</li>
<li>À la poudre de noyau d'abricot bio pour une exfoliation dou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217007202</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5cc908d464b35a4677deca40a6da4306d17ee391c8f03c79a8028e9ce8372bf8 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Pinceau correcteur teint & poudre ]]></title>
<g:id>0a2215d0-82e5-4774-8565-ed02c2ae4392</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-pinceau correcteur teint & poudre?0a2215d0-82e5-4774-8565-ed02c2ae4392 ]]></link>
<g:price><![CDATA[ 500.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Une petite retouche est nécessaire ? Optez pour le </span><strong>pinceau correcteur teint &amp; poudre Avril</strong><span> : précis, il applique les textures poudre ou liquide pour une correction facile et rapide !</span></p>
<ul><li>Pinceau pour les corrections et retouches avec des textures poudre ou liquide</li>
<li>Utilisable également pour le contouring</li>
<li>Poils synthétiques</li>
<li>Pinceau professionnel de haute qualité</li>
<li>Taille du pinceau : 18 cm (dont tête de 2 c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217008629</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac6beb5ed4e71e158fcafd4a59dc60d051bbd38a169d18b3f309545a98acf328 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Pinceau précision teint & poudre ]]></title>
<g:id>bba71311-77d0-4242-8e92-0b33ce40bd56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-pinceau précision teint & poudre?bba71311-77d0-4242-8e92-0b33ce40bd56 ]]></link>
<g:price><![CDATA[ 900.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Multi-fonctions, le </span><strong>pinceau précision teint &amp; poudre Avril</strong><span> est l’outil idéal pour une application ciblée de l’anti-cernes, highlighter, poudre dont il facilite la pose.</span></p>
<ul><li>Pinceau pour les zones spécifiques : anti-cernes, enlumineur, blush en version liquide ou poudre</li>
<li>Coupe légèrement biseautée</li>
<li>Poils synthétiques</li>
<li>Pinceau professionnel de haute qualité</li>
<li>Taille du pinceau : 17 cm (dont tête de 1.5 cm)</li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217008544</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa9603c9dd798ed9cf9c9de4a22e49018fb75b0a4c6c1cf1f24db842de92b1ef ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Soin Contours des Yeux et des Lèvres 40Ml - BIO ]]></title>
<g:id>ac9c6e01-a227-43ba-b6d1-40ea631775b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-soin contours des yeux et des lèvres 40ml - bio?ac9c6e01-a227-43ba-b6d1-40ea631775b9 ]]></link>
<g:price><![CDATA[ 900.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le soin contour des yeux et lèvres certifié bio Avril</strong><span> prend soin de la zone fragile du contour de l'œil et des lèvres. Il contient du beurre de karité et de l'huile d'argan bio.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217014446</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19ee7da4464e3ea8f81fee4af7613a15b6c39f4df516aa43ec1ebcddf95cee5b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril Soin anti-imperfections bio 15 ml ]]></title>
<g:id>91a850c7-202a-4676-8569-54c4145089fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-soin anti-imperfections bio 15 ml?91a850c7-202a-4676-8569-54c4145089fd ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une imperfection apparaît ? Dégainez le<strong> soin anti-imperfections certifié bio Avril</strong> : il assèche, atténue et accélère la résorption des marques du visage. Résultat : une peau plus nette et purifiée !</p>
<p>Fabriqué en France</p>
<ul><li>Convient aux peaux mixtes, grasses, à imperfections</li>
<li>Assèche et atténue visiblement les imperfections</li>
<li>Accélère la résorption des boutons et marques du visage</li>
<li>Rend la peau plus belle, nette et purifiée</li>
<li>A l’hui ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217009824</g:gtin>
<g:brand><![CDATA[ AVRIL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/37ed50b731995773adf162ef730851c1850ad37d3c55d502f248ce406ffd5c80 ]]></g:image_link>
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
<title><![CDATA[ Avril Sérum Désaltérant 30ml - BIO ]]></title>
<g:id>2ad2ae84-4d2e-4806-851e-9cfaca72fcae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-sérum désaltérant 30ml - bio?2ad2ae84-4d2e-4806-851e-9cfaca72fcae ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p>Boostez l'hydratation de votre peau grâce au <strong>sérum désaltérant certifié bio Avril</strong> : l'acide hyaluronique et l'aloe vera bio combinent leurs vertus pour vous offrir une peau assouplie et hydratée, le tout dans une texture ultra légère.</p>
<p>Fabriqué en France</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217011254</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d3d34c97b81a18dd5b8b7d07da5eee2ea1bc573534cca0d46d7858c4bcb997e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril correcteur bio teinte porcelaine 4 g ]]></title>
<g:id>bc9a5f2f-027d-4b27-99dd-0f2d358ee8c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-correcteur bio teinte porcelaine 4 g?bc9a5f2f-027d-4b27-99dd-0f2d358ee8c8 ]]></link>
<g:price><![CDATA[ 800.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>En application au doigt ou au pinceau, la texture crémeuse et couvrante du </span><strong>correcteur Porcelaine certifié bio Avril</strong><span> corrige les cernes et dissimule les petites imperfections. Un indispensable !</span></p>
<ul><li>Teinte Porcelaine</li>
<li>Sous-ton froid</li>
<li>Correcteur très pigmenté, couvrance modulable</li>
<li>Texture crémeuse agréable à appliquer</li>
<li>Certifié bio par Ecocert</li>
<li>Produit végan</li>
<li>Fabriqué en Italie</li>
<li>Contenance ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217011179</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/337ef66773e70c99b676468d3db13933410d427cdb684b365f8b4ce39a258a96 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avril crème de jour peaux normales à mixtes bio 50 ml ]]></title>
<g:id>deedc1e3-5f2b-4787-82c4-5563583085b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/avril-crème de jour peaux normales à mixtes bio 50 ml?deedc1e3-5f2b-4787-82c4-5563583085b3 ]]></link>
<g:price><![CDATA[ 700.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette <strong>crème de jour certifiée bio</strong> contient de l'huile de macadamia bio et d'amande douce bio, elle est idéale pour les peaux normales à mixtes. Avec de l'extrait de lys bio et un parfum 100% naturel, son odeur est subtile et fraîche.</p>
<p>Crème fabriquée en France</p>
<ul><li>Peaux normales à mixtes</li>
<li>Aux huiles de macadamia et d'amande douce bio</li>
<li>A l'extrait de fleur de lys blanc bio</li>
<li>Parfum 100% naturel</li>
<li>Certifié bio par Ecocert</li>
<li>Pro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3662217001729</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/10420addabc59051c5a041b74ee37f8941d4b6040b9d3bd116cfb235356c2980 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène  Dermabsolu  Crème Jour Redensifiante 50ml ]]></title>
<g:id>1645a1e5-43df-4db5-990d-603877273022</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne  dermabsolu  crème jour redensifiante 50ml?1645a1e5-43df-4db5-990d-603877273022 ]]></link>
<g:price><![CDATA[ 4290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Crème jour redensifiante Dermabsolu </span><span>des Laboratoires Avène, </span>spécialement formulée pour les peaux matures ou dévitalisées, elle aide à restaurer le volume de la peau et à réduire les signes visibles de l'âge.</p>
<ul><li>Redensification : Aide à redensifier et à raffermir la peau, en restaurer le volume pour un effet repulpant visible.</li>
<li>Hydratation longue durée : Fournit une hydratation intense qui dure toute la journée, laissant la peau douce et confortable.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395976</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8e9083772486fa17f74bc690b075b3859783f7b1a1a6bd04554c0a28de98fa6a ]]></g:image_link>
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
<title><![CDATA[ Avène  Hyaluron Activ B3 - Crème Régénération Cellulaire 50ml + Sérum Concentré Repulpant 10ml Offert ]]></title>
<g:id>ba304592-f5cf-407b-86b1-ec89a4f7eddb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne  hyaluron activ b3 - crème régénération cellulaire 50ml + sérum concentré repulpant 10ml offert?ba304592-f5cf-407b-86b1-ec89a4f7eddb ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <strong>Crème de Jour Régénération Cellulaire Hyaluron Activ B3 </strong>est un soin qui favorise la régénération cellulaire de la peau et corrige le signes l'âge grâce à de l'Acide Hyaluronique et de la Niacinamide.<br>Avec l'âge, la peau produit moins d'Acide Hyaluronique, perd de sa fermeté, rides et ridules finissent par apparaître.<br>La Niacinamide, ou vitamine B3, protège les cellules du vieillissement et le ralentit.<br>Sa texture veloutée réduit efficacement les rides.<br>La vitam ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770394641</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94e3150e287d15a6023e01fa238d96910f9f00b6f013511c6b2ac3bac54c66d2 ]]></g:image_link>
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
<title><![CDATA[ Avène Après-Soleil Lait Réparateur 400 ml ]]></title>
<g:id>d368d927-4046-40cc-aca6-7bb83c72b6f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne après-soleil lait réparateur 400 ml?d368d927-4046-40cc-aca6-7bb83c72b6f0 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Lait après-soleil apaise instantanément les peaux sensibles échauffées après une exposition au soleil. Il apporte au visage et au corps une hydratation durable jusqu'à 48h*. Sa texture onctueuse et fondante procure une agréable sensation de fraîcheur intense. Sa formule riche en Eau Thermale d'Avène et enrichie en antioxydants et en huile de jojoba réparatrice calme la peau et l'enveloppe d'un délicat parfum. Il convient à toute la famille, aux adultes et aux enfants à partir de 2 an ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770154238</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/353d1c4f958118080aeab76cdb809edebf53bc6dcae9188a83ac0e57bb8c4996 ]]></g:image_link>
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
<title><![CDATA[ Avène Baume Lèvres Hydratant Intense 24H 10 ml ]]></title>
<g:id>b891eb04-3ffb-440c-a14e-e96f670b8559</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne baume lèvres hydratant intense 24h 10 ml?b891eb04-3ffb-440c-a14e-e96f670b8559 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <div class="col-xs-4">
<div class="InputLabel">
<div class="InputLabel__help">Baume d'hydratation intense 24h* pour lèvres sensibles et sèches. Un geste beauté quotidien alliant sensorialité et naturalité, qui hydrate intensément pendant 24h*, illumine, apaise et protège du dessèchement causé par les agressions extérieures (stress oxydatif, pollution urbaine). Avec sa texture fondante et son effet gloss, ce baume à lèvres naturel embellit les lèvres, les laisse souples et confortables. Sa formul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770147261</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/378d3210b3cc1bbe5359f4aa656cbb3413d8c34ba32851f6d41af65b801ca462 ]]></g:image_link>
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
<title><![CDATA[ Avène Body Baume Fondant Hydratant 250 ml ]]></title>
<g:id>647be6ac-5785-4914-bc62-94595caa447f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne body baume fondant hydratant 250 ml?647be6ac-5785-4914-bc62-94595caa447f ]]></link>
<g:price><![CDATA[ 1820.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le baume fondant hydratant Body enveloppe la peau dans un COCOON DE DOUCEUR ET DE RÉCONFORT.<br />Riche en COMPLEXE OLÉO-APAISANT, il laisse la peau VELOUTÉE ET HYDRATÉE JUSQU’À 24H.<br />Evaluation de l'indice d'hydratation des couches superficielles de l’épiderme, 19 sujets, 1 application.Sa texture onctueuse et son parfum relaxant invitent au délassement et au bien-être. Le baume fondant hydratant Body convient à toutes les peaux sèches sensibles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770111583</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7cae7bb069a32529a3686b6b6309154c47248c28fef6680e3d870b31e001c68b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Body Déodorant Efficacité 24h 50ml ]]></title>
<g:id>88b3cea5-d21f-4a4c-924f-84c28f7be384</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne body déodorant efficacité 24h 50ml?88b3cea5-d21f-4a4c-924f-84c28f7be384 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Déodorant efficacité 24H protège durablement des odeurs et réduit la sensation d'humidité, grâce à son duo d'agents antibactériens et à sa poudre absorbante.</p>
<p>Enrichi en complexe oléo-apaisant qui apaise et laisse la peau hydratée, son parfum doux apporte une agréable sensation de fraîcheur.</p>
<p>Sa formule haute tolérance, anti-traces blanches, anti-traces jaunes et sans alcool, convient à toutes les peaux sensibles, même rasées ou épilées.</p>
<h3>Avantage</h3>
<p>Le Déodorant ef ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770389043</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/50921a3f378ef5775d2f7f3da97ddba4d470da13e0448c4577610eef5bd805a2 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > DEODORANT  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Body Gel Douche Douceur 100 ml ]]></title>
<g:id>e42eb9c4-132f-4736-8966-a1afb546d302</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne body gel douche douceur 100 ml?e42eb9c4-132f-4736-8966-a1afb546d302 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce gel douche SANS SAVON et au pH physiologique nettoie délicatement la peau même la plus sensible grâce à sa BASE LAVANTE DOUCE. <br />Enrichi en COMPLEXE OLÉO-APAISANT et en agents hydratants d'origine végétale sa formule enveloppe la peau de douceur. La peau est nette, confortable et douce.<br />Sa texture cristalline se transforme en une mousse aérienne au parfum relaxant pour faire de la douche une parenthèse de bien-être!<br />EXCELLENTE TOLÉRANCE GYNÉCOLOGIQUE.<br />Formule biodégradab ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770111576</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7f11412490746986c80cc3a7f76973491b71a0f418ffab035e2331f89c638ac ]]></g:image_link>
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
<title><![CDATA[ Avène Body Gel Douche Douceur 500 ml ]]></title>
<g:id>cc6ac54c-6cc2-45cf-8308-215a4ae88671</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne body gel douche douceur 500 ml?cc6ac54c-6cc2-45cf-8308-215a4ae88671 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène body gel douche douceur 500ml sans savon et au pH physiologique nettoie délicatement  la peau même la plus sensible grâce à sa base lavante douce. <br />Enrichi en complexe oléo-apaisant et en agents hydratants d'origine végétale sa formule enveloppe la peau de douceur. La peau est nette, confortable et douce.<br />Sa texture cristalline se transforme en une mousse aérienne au parfum relaxant pour faire de la douche une parenthèse de bien-être!</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770111552</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a4de8a70fa8bcb739259b11c85fcb68976cb4ca9493da4f4430a57a07d9dc4e ]]></g:image_link>
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
<title><![CDATA[ Avène Body Gommage Douceur 200ml ]]></title>
<g:id>1f53d401-1adc-488a-aefc-18019495d46a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne body gommage douceur 200ml?1f53d401-1adc-488a-aefc-18019495d46a ]]></link>
<g:price><![CDATA[ 1760.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>Le gommage douceur d’Avène</span> permet d’affiner le grain de peau grâce à la présence de billes de cellulose et de perles de jojoba. Ces dernières nettoient délicatement l’épiderme en le débarrassant des impuretés qui s’y accumulent au cours de la journée et stimulent la régénération cellulaire. Le gommage doux d’Avène est un complexe d’actifs apaisants et d’agents d’origine végétale qui hydratent la peau tout en la purifiant. Il contient du beurre de karité, de l’huile de camel ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152791</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab6624afd30b55c882b2373ff16155e6622ed89541e6e4e3c40eb206968013db ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Body Huile de Soin 100 ml ]]></title>
<g:id>fe39e0e4-cc1e-42cc-bbb1-321d3dcaaa61</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne body huile de soin 100 ml?fe39e0e4-cc1e-42cc-bbb1-321d3dcaaa61 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour nourrir et sublimer la peau en un geste.</p>
<p>Une texture soyeuse au parfum relaxant qui induit une gestuelle massage propice au délassement. Elle est rapidement absorbée et son toucher sec laisse sur la peau un léger voile satiné.<br />Grâce au complexe oléo-apaisant riche en acide gras essentiels, l’huile de soin Body allie plaisir d’utilisation et efficacité nourrissante pour sublimer la peau en toute sérénité.</p>
<p></p>
<p><br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770110982</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2db3ef4700138364617b036ccf9fbd9362407da6d9200334d37246f8dafb42bd ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate + Baume Réparateur Lèvres 10 ml ]]></title>
<g:id>ee243433-4d56-4649-9328-86771d3021b0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate + baume réparateur lèvres 10 ml?ee243433-4d56-4649-9328-86771d3021b0 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Cicalfate + Baume Réparateur Lèvres 10 ml est un soin pour les lèvres gercées et irritées de toute la famille. Il s'applique aussi bien sur les lèvres que sur les zones localisées très sèches, gercées, abîmées, irritées à la suite d'agressions quotidiennes diverses ou suite à des traitement médicamenteux. Il nourrit, répare, protège et apaise durablement.</p>
<p>Très résistant à l'eau.</p>
<p>Sans parfum.</p>
<p>Non comédogène.<br />Élaboré en vue de minimiser les risques de réactions a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770142327</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/72ae3262982c142f434efd378ca2b319f7f42b0b866a676bd9b3c9462e2a34d7 ]]></g:image_link>
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
<title><![CDATA[ Avène Cicalfate + Gel Nettoyant Assainissant 200 ml ]]></title>
<g:id>06a8c42c-4c4d-4a2a-885b-4dbda076b471</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate + gel nettoyant assainissant 200 ml?06a8c42c-4c4d-4a2a-885b-4dbda076b471 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Cicalfate + Gel Nettoyant Assainissant 200 ml est un gel élaboré pour l'hygiène des peaux sensibles et zones intimes externes irritées chez le nourrisson, l'enfant, l'adulte : irritations du quotidien (rougeurs du siège, égratignures ...), irritations intimes, éruptions cutanées infantiles, tatouage, acte dermatologique superficiel, soin du cordon ...</p>
<p>Ce gel nettoie et assainit les zones irritées, sans dessécher. Sa formule intègre le [C+Restore]™, actif réparateur postbiotique,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770150261</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f58f09b4c818739985ece8e0c042e6a10d4aa9378536fe4209ac707f59899e3d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate + Soin Hydratant Réparateur 40 ml ]]></title>
<g:id>21ce447c-9005-465c-a540-46f65227dc13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate + soin hydratant réparateur 40 ml?21ce447c-9005-465c-a540-46f65227dc13 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Cicalfate + Soin Hydratant Réparateur 40 ml est un soin des peaux fragilisées suite à des atteintes dermatologiques superficielles : actes dermo-esthétiques (laser, peeling), tatouages, pour le visage et le corps.<br />Sa formule intègre le [C+Restore]™, actif réparateur postbiotique, issu de l'Eau Thermale d'Avène, elle :</p>
<ul><li>Apaise et atténue les irritations, les rougeurs, les sensations d'échauffement et la desquamation.</li>
<li>Renforce la barrière cutanée et répare la peau ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770148763</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a2757c1947cc8bf64f839ac573f05cb2c83cb74e53de180976429d5dd99c1e0 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate Crème Mains 100ml ]]></title>
<g:id>8e99f985-dd0c-42de-8cf6-9f4ef92d4463</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate crème mains 100ml?8e99f985-dd0c-42de-8cf6-9f4ef92d4463 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Crème réparatrice antibactérienne à l'eau thermale d'Avène aux propriétés apaisantes et cicatrisantes. Peaux sensibles, irritées, lésées. Nourrissons, enfants et adultes.</p>
<p class="p3">Dermites irritatives, dartres, brûlures superficielles, perlèches. Peaux sensibles, peaux irritées, peaux lésées. Nourrissons, enfants et adultes.   Cicalfate crème allie les propriétés réparatrices et antibactériennes qui permettent de réparer les épidermes lésés non suintants des adultes comme  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779416139</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f310dc2fb7ebccd48cd6f49bb34a13832b0bd9b62037ced2b919a962f39434ab ]]></g:image_link>
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
<title><![CDATA[ Avène Cicalfate Gel Cicatrice 30ml ]]></title>
<g:id>b2e9c84f-1c57-48f5-9bdc-022dd0d4e49e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate gel cicatrice 30ml?b2e9c84f-1c57-48f5-9bdc-022dd0d4e49e ]]></link>
<g:price><![CDATA[ 875.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Gel cicatrice Cicalfate+ contribue à améliorer l'aspect des cicatrices. Sa formule sur-mesure protège et hydrate, favorise la bonne réorganisation des tissus et améliore le confort de la peau. Sa texture gel forme un film protecteur et facilite le massage des cicatrices réépidermisées. Il est indiqué suite à des interventions chirurgicales ou dermatologiques, sur le visage et sur le corps, chez l'adulte et l'enfant (dès 1 an). Sa formule haute tolérance, sans parfum, apporte un effet apais ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770207088</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bc339d7ed2b03ab1c84669dd3c7c7da4db85c32b899b390c210a5c0f59027a64 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate+ Baume  Lèvres Réparateur 10ml ]]></title>
<g:id>4ae0d666-d32b-4208-9cee-8dd315e07fd0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate+ baume  lèvres réparateur 10ml?4ae0d666-d32b-4208-9cee-8dd315e07fd0 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>La nouvelle formule de ce baume réparateur pour les lèvres et les petites zones sèches localisées répare dès 48h*** les lèvres gercées, très sèches, fissurées et irritées. Très résistant à l'eau, il protège, hydrate durablement pendant 24h** et nourrit intensément. Sa composition enrichie en [C+-Restore]™, un nouvel actif réparateur post-biotique et en Eau thermale d'Avène apaise et offre un effet barrière protectrice sur les lèvres. Formulé avec 96% d’ingrédients d’origine naturelle, ce soin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770101263</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/671d08ffd1ffdbd7851f3444af682e798c523c3f5f43631a881316b7ac9f7c75 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate+ Crème 100ml ]]></title>
<g:id>09ffed5e-e157-45c5-ad9e-3f59bfe72068</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate+ crème 100ml?09ffed5e-e157-45c5-ad9e-3f59bfe72068 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une formule à la fois RÉPARATRICE et PROTECTRICE, très bien tolérée, Cicalfate+ est la crème pour les irritations de toute la famille. Encore plus efficace, immédiatement APAISANTE, grâce à une association unique d'actifs :</p>
<p>1. RÉPARATRICE<br />[C+-Restore]TM, 1er actif réparateur postbiotique, issu de l'Eau thermale d'Avène, favorise la réparation de l'épiderme.</p>
<p>2. ASSAINISSANTE<br />L'association sulfate de cuivre - sulfate de zinc limite le risque de prolifération bactérienne. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770204681</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d31bce779c0136a7c27cf75e1572f2f7e7197b1a764900cb09360d24903e847 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate+ Crème Réparatrice 15ml ]]></title>
<g:id>ba4e7048-79df-4c26-bd51-f381578f8c8b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate+ crème réparatrice 15ml?ba4e7048-79df-4c26-bd51-f381578f8c8b ]]></link>
<g:price><![CDATA[ 530.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Peaux sensibles irritées.</li>
<li>Irritations des couches superficielles de l' épiderme à la suite d' agressions diverses (climatiques, actes dermatologiques superficiels, traumatismes superficiels ponctuels).</li>
<li>Pour toute la famille.
<ul><li>La crème réparatrice protectrice pour apaiser, réparer* et assainir les peaux irritées de toute la famille au quotidien.</li>
<li>Cicalfate Crème réparatrice est particulièrement indiquée pour apaiser les irritations sèches des adultes, enfa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770204698</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e067793dfe571204a77bf8831d845b6a487c05ba044f9b568254a4b5c1583efe ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cicalfate+ Crème Réparatrice Multi-Protectrice SPF50 30ml ]]></title>
<g:id>b1eb41da-f813-40d2-801e-1385d262f331</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate+ crème réparatrice multi-protectrice spf50 30ml?b1eb41da-f813-40d2-801e-1385d262f331 ]]></link>
<g:price><![CDATA[ 1210.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>CICALFATE+ Crème réparatrice multi-protectrice SPF50+ d'Avène</span> est un soin innovant qui répare, réduit les marques rouges et prévient l'hyperpigmentation.</p>
<p>Grâce à son complexe anti-marques cicatricielles et son système photo-protecteur breveté, cette crème <span>apaise et répare</span> les peaux sensibles irritées, tout en limitant la prolifération bactérienne.</p>
<p>Elle protège efficacement contre les <span>rayons solaires</span> et les <span>agressions extérieures</span ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770394467</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/52cfb753d619d775d73c4363e13fe0a9a4dacb260093e980eea00a4763e42287 ]]></g:image_link>
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
<title><![CDATA[ Avène Cicalfate+ Serum Restaurateur Intense 30 ml ]]></title>
<g:id>e96154fc-0de2-4b9a-b859-63389515d477</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate+ serum restaurateur intense 30 ml?e96154fc-0de2-4b9a-b859-63389515d477 ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce sérum visage hautement concentré en Eau Thermale d'Avène, Pro-Vitamine B5 et TRP-Regulin, répare la barrière cutanée en 1 jour et la renforce* . La peau retrouve sa capacité d’auto-réparation en 3 semaines . Les mécanismes de réparation de la peau sont restaurés durablement***. Il apaise immédiatement et durablement les tiraillements et sensations d’inconfort : -84% d'irritation cutanée en 1 semaine***. Immédiatement après application, les rougeurs, la sécheresse cutanée les inconforts son ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393620</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/66819cfdfd3716e9f299a14376566cdb48398fe3dae581198d03312317805e1b ]]></g:image_link>
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
<title><![CDATA[ Avène Cicalfate+ Spray Asséchant Réparateur 100 ml ]]></title>
<g:id>f8da260b-9b29-4f0f-b53d-a12da70cb167</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cicalfate+ spray asséchant réparateur 100 ml?f8da260b-9b29-4f0f-b53d-a12da70cb167 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cicalfate+ Spray asséchant réparateur contribue, grâce à une combinaison d’actifs asséchants, réparateurs, apaisants et antibactériens, à un assèchement et à une régénération rapide des peaux irritées et zones humides sujettes à macération : plis de la peau du nourrisson, plis sous-mammaires, espaces entre les orteils, éruptions cutanées infantiles*. Appliqué deux fois par jour, il contribue à un apaisement immédiat et à leur réparation** dès 48 h.<br><br>*Ne se substitue pas à un antiseptiqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770205633</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb0a7fec1df8dda5af654166fcfde629298e2fcd8cc3eaa25786561a69fa46bb ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cleanance Aqua-Gel Matifiant 50 ml ]]></title>
<g:id>8652efbd-5d09-43a3-b02b-1d05dd321bf8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance aqua-gel matifiant 50 ml?8652efbd-5d09-43a3-b02b-1d05dd321bf8 ]]></link>
<g:price><![CDATA[ 1340.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cleanance Aqua gel-crème matifiant est le soin multi-bénéfices des peaux sensibles à imperfections.</span><br /><br /><span>Sa formule enrichie en Monolaurine permet d'immédiatement diminuer de 50% la brillance sans assécher ni agresser la peau grâce à la présence d’Eau thermale d’Avène apaisante. Sa texture ultra légère et fusionnelle resserre les pores immédiatement et hydrate la peau pendant 24 heures² pour une peau confortable toute la jounée³.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770146394</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c5bec3c7515e9fd37c17a4731461b34ba22b6ac6d7fc4f9cc6244c7335420d1 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Comedomed Concentré Anti-Imperfections 30 ML ]]></title>
<g:id>d7c6ed91-2255-4aaf-803c-3234d72e60ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance comedomed concentré anti-imperfections 30 ml?d7c6ed91-2255-4aaf-803c-3234d72e60ae ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cleanance Comedomed concentré réduit boutons et points noirs dès sept jours*. Grâce au mode d’action unique de la Comedoclastin™, actif végétal aux propriétés brevetées**, il combat les imperfections à la racine, en ciblant les micro-comédons, et assure une action anti-récidive***.<br>Testé sur plus de 4600 sujets et prescrit par les dermatologues****, Cleanance Comedomed concentré est le soin expert de toutes les peaux à tendance acnéique de l'adolescent dès l’âge de 12 ans à l'adulte (y com ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390414</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a792dca220ec4fce17346daa467a002d983869f3ac11afae86e53b48eee94300 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Eau Micellaire 100ml ]]></title>
<g:id>ed3d1f64-a145-4385-ac32-9023146f6a36</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance eau micellaire 100ml?ed3d1f64-a145-4385-ac32-9023146f6a36 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cleanance Eau micellaire est destinée aux peaux sensibles grasses à imperfections.<br />Elimine en douceur et sans rinçage les impuretés du visage et des yeux, y compris le maquillage.</p>
<p>NETTOYANTE, DÉMAQUILLANTE<br />Il réduit brillance et élimine les impuretés (même les particules de pollution) et maquillage grâce à ses agents nettoyants micellaires doux</p>
<p>MATIFIANTE<br />Grâce à la Comedoclastin<span>TM</span>, actif végétal issu de graines de chardon marie aux propriété brevetés ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390322</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d83d44cc6d78740bbbc704c11d42663b932ad8e293b4aa603ed9a058f8345934 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Eau Micellaire 400 ml ]]></title>
<g:id>a6a9e6c2-229b-4930-8ff0-cdc203146827</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance eau micellaire 400 ml?a6a9e6c2-229b-4930-8ff0-cdc203146827 ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette eau micellaire composée à 99% d'ingrédients d'origine naturelle démaquille dès le 1er coton* et élimine même les particules fines de pollution, pour laisser une peau nette, fraiche et matifiée.</span><br /><span>Sa formule enrichie en Eau Thermale d’Avène et en glycérine garantit un nettoyage doux qui permet de retrouver l'équilibre naturel de la peau.</span></p>
<p><span><span> DEMAQUILLE : le visage et les yeux, dès le 1er coton*</span><br /><span>• NETTOIE: Elimine les impureté ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390315</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8e3c3655785cc8148c008fddcc796246f353096abfe17f8fedf619dfdf5fecf7 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Gel Nettoyant 100ml ]]></title>
<g:id>8f346b57-311a-4519-b8ec-adcee9752021</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance gel nettoyant 100ml?8f346b57-311a-4519-b8ec-adcee9752021 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un gel nettoyant purifiant, légèrement moussant, destiné aux peaux grasses et /ou à tendance acnéique. Sa formule respectueuse des peaux sensibles combine une association unique d'actifs aux triples bénéfices : un nettoyage délicat grâce à une base lavante douce, un effet matifiant assuré par la Comedoclastin™, un actif végétal issu de graines de chardon marie aux propriétés brevetées* qui réduit l’excès de sébum, et un confort lié à l'Eau thermale d'Avène aux propriétés apaisantes et anti-ir ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770037111</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da389d8badf420c997fd12ae7e83f689ae85331af7a09e77e403cba80bb8ca04 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Gel Nettoyant 400ml*2 ]]></title>
<g:id>082a5fa2-27f3-4b99-8533-c82c0d47c3c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance gel nettoyant 400ml*2?082a5fa2-27f3-4b99-8533-c82c0d47c3c0 ]]></link>
<g:price><![CDATA[ 1699.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Un gel nettoyant purifiant, légèrement moussant, destiné aux peaux grasses et /ou à tendance acnéique. Sa formule respectueuse des peaux sensibles combine une association unique d'actifs aux triples bénéfices : un nettoyage délicat grâce à une base lavante douce, un effet matifiant assuré par la Comedoclastin™, un actif végétal issu de graines de chardon marie aux propriétés brevetées* qui réduit l’excès de sébum, et un confort lié à l'Eau thermale d'Avène aux propriétés apaisantes et a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395334</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ae42f84350a3d5ef05aedd6e6f350c8ba3953fcbfecd95425410466c4b28310f ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Hydra Crème Lavante Apaisante 200ml ]]></title>
<g:id>40a43be8-15f1-4af7-ba5d-db1e8e040e45</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance hydra crème lavante apaisante 200ml?40a43be8-15f1-4af7-ba5d-db1e8e040e45 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Une crème lavante au pH physiologique, qui nettoie et respecte la sensibilité des peaux desséchées et irritées par un traitement médicamenteux anti-acnéique. Cleanance HYDRA Crème lavante apaisante maintien la barrière et restaure le confort cutané. Cette base lavante douce aux actifs hydratants et nourrissants, apaise les peaux sensibles desséchées et irritées, et facilite le suivi des traitements médicamenteux anti-acnéique, grâce à sa formule contenant de l’Eau thermale d'Avène.</spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390476</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a99d877fa9762f5d1d3f3e0087a2e17a966cf345cdc9a18bfa61478ea561d70 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Hydra Crème Soin 40ml ]]></title>
<g:id>51088a2f-2236-49a3-87b7-53b033773a54</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance hydra crème soin 40ml?51088a2f-2236-49a3-87b7-53b033773a54 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cleanance hydra crème apaisante est une crème onctueuse, non grasse, facile à étaler et rapidement absorbée. La peau est apaisée, hydratée et nourrie.</p>
<p><br />Grâce à cleanance hydra crème apaisante, le suivi des traitements médicamenteux irritants et desséchants est facilité.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100891</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d9a0749d6d02fdff521ef48a8a96b469ba1d44211fba46fa6951d86a46f10c14 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Masque Detox 2*6ml ]]></title>
<g:id>fc084b90-32f4-42ad-a1ab-2ef9e6d8bc1a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance masque detox 2*6ml?fc084b90-32f4-42ad-a1ab-2ef9e6d8bc1a ]]></link>
<g:price><![CDATA[ 370.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>Masque Détox Eau Thermale Avène Cleanance </span>offre une solution complète pour les peaux sensibles sujettes aux imperfections.</p>
<p>Ce masque associe une concentration élevée d'<span>Argiles absorbantes (19%)</span> et de <span>Perlite exfoliante</span> pour une action matifiante et purifiante.</p>
<p>En absorbant efficacement l'<span>excès de sébum</span> et en <span>exfoliant en douceu</span>r, il agit en profondeur pour purifier, matifier et <span>resserrer les pores</span> d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390438</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2a30776644c86e4e9d4afa81e5539c04db4a96ad0c1c952942e69945848a3aa ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Masque Détox 50Ml ]]></title>
<g:id>212b49e5-a888-4eea-8e5b-6d4bb1b00daa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance masque détox 50ml?212b49e5-a888-4eea-8e5b-6d4bb1b00daa ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>CLEANANCE Masque Détox est le masque sans compromis des peaux sensibles à imperfections.<br>Grâce à l’alliance exclusive d’argiles absorbantes concentrées (19%) et de la perlite exfoliante, il purifie, matifie et resserre les pores dès 5 minutes*. Il laisse la peau confortable et apaisée grâce à ses agents hydra-nutritifs associés à l’Eau Thermale d’Avène, le tout dans une formule biodégradable et vegan.<br>Les imperfections sont réduites pour 90% des utilisateurs**.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390445</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f03c94f642600fc64a427e0308f70eabcaae25aee8c89c608a390b2a1749ed74 ]]></g:image_link>
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
<title><![CDATA[ Avène Cleanance Soin Matifiant 40 ml ]]></title>
<g:id>b294a7c5-b542-4d3e-ac9e-62cecfbba8f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cleanance soin matifiant 40 ml?b294a7c5-b542-4d3e-ac9e-62cecfbba8f0 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Cleanance Soin Matifiant 40 ml est un soin quotidien matifiant et hydratant longue durée. Il contribue également à réduire les imperfections grâce à son association unique d'actifs :</p>
<ul><li>Comédoclastin™, actif aux propriétés brevetées qui régule l'hyperproduction de sébum et aide à réduire les imperfections,</li>
<li>des poudres matifiantes, pour un fini mat poudré immédiat,</li>
<li>l'eau thermale d'Avène, aux propriétés apaisantes et adoucissantes.</li>
</ul><p>Ce soin constitu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770207828</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac2f8b48c1dc6cfe76728e409d1ffcabe63ab8abbcb197c6f79c5526a3372f24 ]]></g:image_link>
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
<title><![CDATA[ Avène Cold Cream 40ML ]]></title>
<g:id>487a2399-abf0-42ca-b5f7-271d9299f84b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cold cream 40ml?487a2399-abf0-42ca-b5f7-271d9299f84b ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Destin&eacute;e aux peaux s&egrave;ches et tr&egrave;s s&egrave;ches, la cr&egrave;me cold cream apaise, nourrit et prot&egrave;ge votre visage gr&acirc;ce &agrave; sa formule hypoallerg&eacute;nique.</p>
<p>Contient de la cire blanche d'abeille et de l'eau thermale d'Av&egrave;ne.</p>
<p>Enrichie en cire d'abeille blanche, la cr&egrave;me cold cream nourrit et prot&egrave;ge la peau.</p>
<p>Compos&eacute; &eacute;galement d&rsquo;eau thermale d&rsquo;Av&egrave;ne, ce soin poss&egrave;de des  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779002738</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f61ad881c570fadd8ec137a224a3bb43a47a8ca67901ff05fa25852db7640b20 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cold Cream Crème 100ml ]]></title>
<g:id>76a8b9a6-1f1d-4d34-b14d-bf58ed1e77c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cold cream crème 100ml?76a8b9a6-1f1d-4d34-b14d-bf58ed1e77c6 ]]></link>
<g:price><![CDATA[ 1360.00 EUR ]]></g:price>
<description><![CDATA[ <p> </p>
<p>Le Cold Cream Crème, aux propriétés apaisantes qui se conjuguent à des qualités cosmétiques particulièrement agréables (texture riche, onctueuse et légèrement parfumée) nourrit, hydrate et protège la peau en reconstituant le film hydrolipidique déficient des peaux sèches. </p>
<p>Ses Bienfaits:</p>
<p>- Nutritive : Riche en Cold Cream et en huiles végétales, cette crème à la texture onctueuse procure un grand moment de confort à votre peau dès son application.</p>
<p>- Protectrice :  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779002721</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ee1f2cbcdcbd8b267f7d63f2f1f0c6006df6bad319cb8bdd50711ab467559e97 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cold Cream Crème Mains Concentrée 50ml ]]></title>
<g:id>103059b5-d73f-4fda-bcfc-f03744f225c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cold cream crème mains concentrée 50ml?103059b5-d73f-4fda-bcfc-f03744f225c5 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Crème peaux sensibles pour les mains desséchées, sèches à très sèches, gercées, tiraillées ou abîmées par les agressions extérieures (vent, froid, …), elle compense les effets desséchants dus à l’utilisation du gel hydroalcoolique et au lavage excessif de mains. Ce soin nutritif à la texture enveloppante et au parfum léger prévient les gerçures et rugosités, les engelures et la sécheresse cutanée. Il protège et hydrate la peau, et laisse sur les mains un fini doux, non gras et non colla ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770145779</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/693fd33b121e67a095f158a35050a0596f18bd940f9b7437f2855c2726cf34b6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Cold Cream Pain Surgras Lot 2x100g ]]></title>
<g:id>dd6fddf6-99c4-47c4-8d8f-3645ba3d85b8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cold cream pain surgras lot 2x100g?dd6fddf6-99c4-47c4-8d8f-3645ba3d85b8 ]]></link>
<g:price><![CDATA[ 840.00 EUR ]]></g:price>
<description><![CDATA[ <p>Particulièrement onctueux et légèrement parfumé, Avène Cold Cream Pain Surgras Lot de 2 x 100 g nettoie l'épiderme en douceur, respecte le film hydrolipidique, et laisse sur la peau un film protecteur extrêmement confortable. Formulé sans savon, il respecte le pH physiologique de la peau sèche.<br /><br />- Nutritif et protecteur : Grâce à sa richesse en Cold Cream et de ses actifs surgras.<br />- Anti-irritant et apaisant : Grâce à sa richesse en Eau thermale d'Avène.<br /><br />Produit hypo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779255059</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/596ee2ef621855fcd76ab2a555f2987a6132cdc137a4273892a08ef31c286e19 ]]></g:image_link>
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
<title><![CDATA[ Avène Cold Cream Sticks Lèvres 2 x 4g ]]></title>
<g:id>2e2dd260-b2f4-4409-8786-2d4e7ee41e76</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cold cream sticks lèvres 2 x 4g?2e2dd260-b2f4-4409-8786-2d4e7ee41e76 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le stick lèvres Cold Cream soulage les lèvres sèches et gerçées de toute la famille. Enrichi en Cold Cream naturel, ce stick à lèvres onctueux nourrit durablement et protège les lèvres soumises au froid. Sa formule clean et minimaliste, à 99,5% naturelle, aux propriétés apaisantes et réparatrices contient également de l'Eau Thermale d'Avène ainsi que de l'huile de Jojoba. Résistant à l'eau et au froid, et transparent sur les lèvres, il peut être utilisé par toute la famille, dès 2 ans.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149401</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b211e0d9b0bd54871a6bccb44d00c752ca68fa48af17e621bba1aae0946c6cab ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Baume à Lèvres Nude 3g ]]></title>
<g:id>16f547ec-7ab5-4bf3-a4a6-75392468bb00</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance baume à lèvres nude 3g?16f547ec-7ab5-4bf3-a4a6-75392468bb00 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Couleurs délicates au fini gloss pour des lèvres brillantes et éclatantes (89% *).<br />Texture onctueuse et fondante.<br />Coeur de soin Oléo-nutritif pour des lèvres nourries, protégées et confortables.<br />Haute tolérance pour les lèvres sensibles et irritées : Sans parfum et SPF 20.<br />Résistance à l’eau, au transfert et à la sueur.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770209037</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d748dbcfb5991c9e5934de3d55c29334d55fa207c94c5314aa9c003c0454ff2 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Baume à Lèvres Rose 3g ]]></title>
<g:id>903e3ff0-6304-41fc-85df-5b9c28f4a888</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance baume à lèvres rose 3g?903e3ff0-6304-41fc-85df-5b9c28f4a888 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Couleurs délicates au fini gloss pour des lèvres brillantes et éclatantes (89% *).<br />Texture onctueuse et fondante.<br />Coeur de soin Oléo-nutritif pour des lèvres nourries, protégées et confortables.<br />Haute tolérance pour les lèvres sensibles et irritées : Sans parfum et SPF 20.<br />Résistance à l’eau, au transfert et à la sueur.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770209099</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/078f110f50e8eab5247f936f42c1255567b142520dcc768cca761342015baf12 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Baume à Lèvres Rouge 3g ]]></title>
<g:id>31a963f9-b87a-4537-ad63-f5890eda804c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance baume à lèvres rouge 3g?31a963f9-b87a-4537-ad63-f5890eda804c ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Couleurs délicates au fini gloss pour des lèvres brillantes et éclatantes (89% *).</p>
<p>Texture onctueuse et fondante.<br />Coeur de soin Oléo-nutritif pour des lèvres nourries, protégées et confortables.<br />Haute tolérance pour les lèvres sensibles et irritées : Sans parfum et SPF 20.<br />Résistance à l’eau, au transfert et à la sueur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770209068</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e3078f54a26db736f0aca19161d44ac5bf28b534b27c18349ba3490581bdc31 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Crayon Teux et Sourcils Blond ]]></title>
<g:id>d0721e08-e9b9-4d64-b07c-0379d4ee3d14</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance crayon teux et sourcils blond?d0721e08-e9b9-4d64-b07c-0379d4ee3d14 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crayon 2-EN-1 - sourcils &amp; yeux pour combler les sourcils et intensifier le regard en douceur. Un tracé PRÉCIS pour un résultat LONGUE TENUE 12H*.<br>Brosse douce ULTRA-PRATIQUE intégrée.<br>HAUTE TOLÉRANCE pour les yeux les plus SENSIBLES.<br>Démaquillage facile.<br>Convient aux femmes sous traitement oncologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392906</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a9955d1387d67c2bb9881cb573bb497d24cd772e37e259c413503c699e522863 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Crayon Yeux HD 3g ]]></title>
<g:id>b206dc92-ac43-4b62-a656-9b1dfedc6d84</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance crayon yeux hd 3g?b206dc92-ac43-4b62-a656-9b1dfedc6d84 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Couvrance Crayon Yeux HD</span>, crayon haute tolérance, permet de réaliser un maquillage léger, précis, pour un effet ultra naturel.</p>
<p><span> </span></p>
<p>Ce crayon haute définition accentue, intensifie et redessine le contour de l’œil pour un résultat noir profond.</p>
<p><span> </span></p>
<p>Ce crayon yeux noir est résistant à l’eau, à l’humidité et à la sueur.</p>
<p><span> </span></p>
<p>Sa formule à base d'ingrédients d'origine naturelle vous offre une tolérance maximale,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770207255</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f46171adcfc831152601528cd3f604d64a34a92a20c6b231627746ae1487d1f5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > MAQUILLAGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Crayon Yeux et Sourcils Brun ]]></title>
<g:id>574e123e-58a0-45ee-a6d6-9ccf78096a67</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance crayon yeux et sourcils brun?574e123e-58a0-45ee-a6d6-9ccf78096a67 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crayon 2-EN-1 - sourcils &amp; yeux pour combler les sourcils et intensifier le regard en douceur. Un tracé PRÉCIS pour un résultat LONGUE TENUE 12H*.<br>Brosse douce ULTRA-PRATIQUE intégrée.<br>HAUTE TOLÉRANCE pour les yeux les plus SENSIBLES.<br>Démaquillage facile.<br>Convient aux femmes sous traitement oncologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393071</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f35d06726e21d128da0c040c103f80734b7e614616ee273880d8fe751901288 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Crème de Teint  Compacte Confort Soleil 10g ]]></title>
<g:id>a8c2ec32-2942-404b-b845-54b5a4672419</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance crème de teint  compacte confort soleil 10g?a8c2ec32-2942-404b-b845-54b5a4672419 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Corrige les imperfections cutanées sévères et unifie le teint des peaux claires. Sans parfum, sans conservateur, sans paraben.<br />Fine et modulable avec une application facilité grâce à l'éponge haute tolérance micro-grain pour un rendu léger et naturel.<br />Haute tenue<br />Résiste à l’eau, à la sueur et au transfert. Système photo-protecteur SPF 30</p>
<p>Sans épaisseur ni effet masque. S’utilise seule ou en association avec les produits de correction par la couleur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770082357</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b938bbc1205b7ea6db1bf4c762ceef4a69d400f27837ba251e37c0dccc83f7fe ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Crème de Teint Fini Mat Soleil 10g ]]></title>
<g:id>33d5c390-31ad-4bae-b9d0-b491987fc6e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance crème de teint fini mat soleil 10g?33d5c390-31ad-4bae-b9d0-b491987fc6e7 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fine et modulable avec une application facilité grâce à l'éponge haute tolérance micro-grain pour un rendu léger et naturel.</p>
<p>Haute tenue<br />Résiste à l’eau, à la sueur et au transfert. Système photo-protecteur SPF 30</p>
<p>Sans épaisseur ni effet masque.S’utilise seule ou en association avec les produits de correction par la couleur.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770082616</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f5772b9bb67d5f2cc429307416b50ea8fe0153ce38e4c95b30a416acb890017 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Fond de Teint Compact Crème 1.1 Naturel ]]></title>
<g:id>c1208cee-ce1b-4a86-870d-e50087bd418d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint compact crème 1.1 naturel?c1208cee-ce1b-4a86-870d-e50087bd418d ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>A la recherche de produits de maquillage efficaces, d'origine naturelle et adaptés à votre peau sensible ? Tournez-vous vers le maquillage correcteur des Laboratoires dermatologiques Avène.</span><br /><span>Ce fond de teint compact HAUTE couvrance et HAUTE tolérance assure une correction immédiate des imperfections - même les plus sévères (rosacée, vitiligo, psoriasis, angiome...).</span><br /><span>Une tenue 12H* pour un teint unifié et lumineux.</span><br /><span>Une formule WATERPRO ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770146110</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69dfdc727936454fdb0c483a007ce0a49257dd04b77f7166ebb5227c25369d76 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Fond de Teint Compact Crème 1.2 Sable ]]></title>
<g:id>4bb25646-20b4-4f18-b4c8-3525f62268e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint compact crème 1.2 sable?4bb25646-20b4-4f18-b4c8-3525f62268e7 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>A la recherche de produits de maquillage efficaces, d'origine naturelle et adaptés à votre peau sensible ? Tournez-vous vers le maquillage correcteur des Laboratoires dermatologiques Avène.</span><br /><span>Ce fond de teint compact HAUTE couvrance et HAUTE tolérance assure une correction immédiate des imperfections - même les plus sévères (rosacée, vitiligo, psoriasis, angiome...).</span><br /><span>Une tenue 12H* pour un teint unifié et lumineux.</span><br /><span>Une formule WATERPRO ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770146097</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78d510f461df153a69da639af8fa9b1fed5eee84f4a09dc32722f542a7acf53c ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Fond de Teint Compact Crème 1.3 Miel ]]></title>
<g:id>0c372f6b-2691-43c1-9bf5-30b15d63792a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint compact crème 1.3 miel?0c372f6b-2691-43c1-9bf5-30b15d63792a ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p><span>A la recherche de produits de maquillage efficaces, d'origine naturelle et adaptés à votre peau sensible ? Tournez-vous vers le maquillage correcteur des Laboratoires dermatologiques Avène.</span><br /><span>Ce fond de teint compact HAUTE couvrance et HAUTE tolérance assure une correction immédiate des imperfections - même les plus sévères (rosacée, vitiligo, psoriasis, angiome...).</span><br /><span>Une tenue 12H* pour un teint unifié et lumineux.</span><br /><span>Une formule  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770146073</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fd2125d0b7bf830b34a53a7c9e82d6ee773213a100747f95e58bf30ea9dff3e1 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Fond de Teint Correcteur Fluide Beige 2.5 30ml ]]></title>
<g:id>e05f86b3-f55b-483c-b713-cd69979a12d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint correcteur fluide beige 2.5 30ml?e05f86b3-f55b-483c-b713-cd69979a12d0 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fond de teint correcteur fluide beige corrige les imperfections cutanées modérées et unifie le teint.</p>
<p><br />Résiste à l’eau et à la sueur. Protection anti-uv (spf 20) pour se préserver des rayons du soleil. Protection contre le vieillissement photo-induit grâce au pré-tocophéryl.</p>
<p><br />Complexe de pigments photo-correcteur pour un teint naturel, homogène et lumineux </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770050141</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db7d0bebc36eac807501ce4a90f49952910728068f2ca5bb63c52540f764f4e0 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Fond de Teint Correcteur Fluide Doré 5 30ml ]]></title>
<g:id>8e5257e8-5db9-4cc8-b617-9dd10b5190fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint correcteur fluide doré 5 30ml?8e5257e8-5db9-4cc8-b617-9dd10b5190fb ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fond de teint fluide doré corrige les imperfections cutanées modérées et unifie le teint.</p>
<p><br />Résiste à l’eau et à la sueur. Protection anti-uv (spf 20) pour se préserver des rayons du soleil. Protection contre le vieillissement photo-induit grâce au pré-tocophéryl.</p>
<p><br />Complexe de pigments photo-correcteur pour un teint naturel, homogène et lumineux</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770050158</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71a8d0031c2833e1009ba9c85cedba44fbea183101918833aea7056f23cdcc53 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Fond de Teint Correcteur Fluide Miel 4 30ml ]]></title>
<g:id>d8941d2e-128b-4f0f-bbb0-2c9952111318</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint correcteur fluide miel 4 30ml?d8941d2e-128b-4f0f-bbb0-2c9952111318 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fond de teint fluide miel corrige les imperfections cutanées modérées et unifie le teint.</p>
<p><br />Résiste à l’eau et à la sueur. Protection anti-uv (spf 20) pour se préserver des rayons du soleil. Protection contre le vieillissement photo-induit grâce au pré-tocophéryl.</p>
<p><br />Complexe de pigments photo-correcteur pour un teint naturel, homogène et lumineux</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100556</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da0729e75aa19761fd1413d1c865abd9c1c7e59e27b278bb8427ba2eb4f497df ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Fond de Teint Correcteur Fluide Naturel 30ml ]]></title>
<g:id>bf50970c-ae96-4eec-ba61-0b29d5ac4f78</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint correcteur fluide naturel 30ml?bf50970c-ae96-4eec-ba61-0b29d5ac4f78 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fond de teint fluide naturel corrige les imperfections cutanées modérées et unifie le teint.</p>
<p><br />Résiste à l’eau et à la sueur. Protection anti-uv (spf 20) pour se préserver des rayons du soleil. Protection contre le vieillissement photo-induit grâce au pré-tocophéryl.</p>
<p><br />Complexe de pigments photo-correcteur pour un teint naturel, homogène et lumineux </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100532</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a4e44f5e032dd5dc55a5baec4ec59a80369298ce4f709d2816d791185e7407af ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Fond de Teint Correcteur Fluide Porcelaine 30ml ]]></title>
<g:id>baf284d6-1e17-486f-82cd-7ed20b31691a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint correcteur fluide porcelaine 30ml?baf284d6-1e17-486f-82cd-7ed20b31691a ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fond de teint correcteur fluide porcelaine corrige les imperfections cutanées modérées et unifie le teint.</p>
<p><br />Résiste à l’eau et à la sueur. Protection anti-uv (spf 20) pour se préserver des rayons du soleil. Protection contre le vieillissement photo-induit grâce au pré-tocophéryl.</p>
<p><br />Complexe de pigments photo-correcteur pour un teint naturel, homogène et lumineux </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100525</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/26448d827a9897eca1a8d158400151475150f76344d368a4c4e2c0f58a8b773b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Fond de Teint Correcteur Fluide Sable 3 30ml ]]></title>
<g:id>5dbc7b7a-cada-4561-a773-c5f19be1a067</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance fond de teint correcteur fluide sable 3 30ml?5dbc7b7a-cada-4561-a773-c5f19be1a067 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fond de teint fluide sable corrige les imperfections cutanées modérées et unifie le teint.</p>
<p><br />Résiste à l’eau et à la sueur. Protection anti-uv (spf 20) pour se préserver des rayons du soleil. Protection contre le vieillissement photo-induit grâce au pré-tocophéryl.</p>
<p><br />Complexe de pigments photo-correcteur pour un teint naturel, homogène et lumineux</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100549</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f508c5a1c3477efeb0809793646cc0751506d556e9fb95a68bab5189ed6e4aa2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Mascara Haute Définition 7 ml ]]></title>
<g:id>7e5cda93-5981-4d91-bb75-b26e0ba1c2a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance mascara haute définition 7 ml?7e5cda93-5981-4d91-bb75-b26e0ba1c2a7 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Couvrance Mascara Haute Définition 7 ml est un mascara qui sépare et définit les cils.</p>
<p>Ses pigments d'origine naturelle offrent un résultat d'un noir intense.<br />Il se compose d'une formule à base de cire d'abeille, glycérine hydratante et gomme d'acacia.<br />Sa texture douce facilite une application fluide et confortable.<br />Sa brosse gainante assure une séparation optimale et une longue tenue 12 heures pour un regard sublimé tout le long de la journée.</p>
<p>Sans transfer ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770207224</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e38f1c79c711c2935cd11d6f9bd1e26b400bb0753dfeb36dff5f48dd365c14a ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Mascara Haute Tolérance 7 ml ]]></title>
<g:id>dfc9de5b-cd95-4620-a172-086a5eb7e026</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance mascara haute tolérance 7 ml?dfc9de5b-cd95-4620-a172-086a5eb7e026 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Couvrance Mascara Haute Tolérance 7 ml est un mascara haute tolérance 3en1 aux pigments d'origine naturelle. Il intensifie, sépare et recourbe les cils, même les plus petits pour un regard naturellement souligné. Sa formule anti-effritement et sa brosse innovante anti-paquets assurent une répartition harmonieuse.</p>
<p>Il offre une bonne tenue pour un regard sublimé toute la journée et permet un démaquillage rapide et facile, sans irriter la paupière.</p>
<p>Sa formule haute tolérance  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392852</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/73fa87859399ff12012c027db3b79d10f9638df8340d91f6721bb23429eb04cf ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Poudre Mosaïque Bonne Mine 10g ]]></title>
<g:id>8029d23a-ca9d-4227-8c6f-2a669ebfaff7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance poudre mosaïque bonne mine 10g?8029d23a-ca9d-4227-8c6f-2a669ebfaff7 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Prêtes à apporter la touche finale à votre make-up ? </p>
<p>Sublimez votre teint et sculptez votre visage à l'aide de nos Poudres mosaïques Couvrance. Leur texture, d'une extrême douceur, fixe le maquillage et magnifie vos traits pour un teint naturel et radieux. Un soin multifonctions à utiliser pour le teint, les pommettes et même les paupières !</p>
<p>Pour un maquillage ultra-léger, appliquez uniquement la Poudre Mosaïque de votre choix sur une peau bien hydratée. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770144550</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a2db1d2c37bb716289d3842ba7fc9c889ffcdaa90586a9c3013d4277867ce2c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Poudre Mosaïque Lumière ]]></title>
<g:id>40bbf1a2-0f88-4d53-b7b5-becd20f97128</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance poudre mosaïque lumière?40bbf1a2-0f88-4d53-b7b5-becd20f97128 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Couvrance Poudre Mosaïque Lumière Peaux Sensibles 10 g est une poudre formulée haute tolérance, conçue pour illuminer le teint et fixer le maquillage des peaux sensibles.<br />Elle offre des nuances correctrices (vert, mauve, blanc) et irisées pour flouter les imperfections légères et illuminer le teint.</p>
<p>Sa texture longue tenue est douce et légère.</p>
<p>Sans parfum.<br />Élaboré en vue de minimiser les risques de réactions allergiques.<br />Non comédogène.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770144604</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34a9f5fa5d833f495b5784bee9f40f6aacea78d11012767bacde5adb74d90f64 ]]></g:image_link>
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
<title><![CDATA[ Avène Couvrance Poudre Mosaïque Soleil ]]></title>
<g:id>b4821424-9b2b-425f-89ec-8e1455998c8d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance poudre mosaïque soleil?b4821424-9b2b-425f-89ec-8e1455998c8d ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Couvrance Poudre Mosaïque Soleil Peaux Sensibles 10 g est une poudre formulée haute tolérance, conçue pour sublimer et rehausser le maquillage des peaux sensibles avec un fini hâlé.<br />Elle offre des nuances brunes abricotées pour ensoleiller le teint et sculpter le visage.</p>
<p>Sa texture longue tenue est douce et légère.</p>
<p>Sans parfum.<br />Élaboré en vue de minimiser les risques de réactions allergiques.<br />Non comédogène.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770144512</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a45de06385b068a7f7e921d6c2106b8287a7248e971580198c78e74f0994bd4b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Poudre Mosaïque Translucide 10g ]]></title>
<g:id>7cd76458-2e17-4694-a3bb-2bbf1ff9a606</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance poudre mosaïque translucide 10g?7cd76458-2e17-4694-a3bb-2bbf1ff9a606 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette poudre visage légère aux nuances naturelles et translucides à dominantes beiges, unifie et matifie le teint. Idéale pour un effet nude mat, elle fixe le maquillage, et sublime les peaux sensibles. Sa texture subtile enveloppe la peau d'un voile de douceur. </span></p>
<p><span><span>Sa formule haute tenue résiste à l’eau, à la sueur et au transfert. </span><span>Sans parfum, sans conservateur.</span></span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770144536</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/819d82acb4fed00a2c15ebf4c8aad91890b50b98a47b50bcfaa9cee46fd60332 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Stick Correcteur Corail ]]></title>
<g:id>6d20e7fb-9eb6-4e7d-8068-160373821d43</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance stick correcteur corail?6d20e7fb-9eb6-4e7d-8068-160373821d43 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécialement formulé pour neutraliser les imperfections sévères, le Sticks Correcteur Couvrance Avène masque les défauts grâce à la correction par la couleur.<br />Haute tenue, il résiste à l’eau et à la sueur. Protection UV (SPF 15). Maquillage longue durée. Pouvoir couvrant exceptionnel.<br /><br />Trois teintes disponibles : Vert, Jaune, Corail.<br /><br />Produit hypoallergénique non comédogène.<br />Sans conservateur, Sans parfum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779292245</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/af83c381619e7cf6fe5cc8200c58c7409f6709bb0e1dd280cba712d847db7d32 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Couvrance Stick Correcteur Jaune  ]]></title>
<g:id>df0da512-acca-461c-9bd9-28f324bbe168</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne couvrance stick correcteur jaune ?df0da512-acca-461c-9bd9-28f324bbe168 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ Spécialement formulé pour neutraliser les imperfections sévères, le Sticks Correcteur Couvrance Avène masque les défauts grâce à la correction par la couleur.<br />Haute tenue, il résiste à l’eau et à la sueur. Protection UV (SPF 15). Maquillage longue durée. Pouvoir couvrant exceptionnel. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779292238</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/032aa9f68196fbd165e0b95f15d8580041021fb039947ee559a25a3522be3d78 ]]></g:image_link>
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
<title><![CDATA[ Avène Crème Mains Cold Cream Concentrée - 2x50ml ]]></title>
<g:id>94f57f71-3796-49b1-b453-71b7252702a8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne crème mains cold cream concentrée - 2x50ml?94f57f71-3796-49b1-b453-71b7252702a8 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Testé en conditions de grand froid, ce&nbsp;soin nutritif&nbsp;à la texture enveloppante et au&nbsp;parfum léger&nbsp;laisse sur les mains un&nbsp;fini doux, non gras et non collant.&nbsp;Grâce au&nbsp;Cold Cream d'Eau Thermale Avène, un mélange traditionnel d'ingrédients issue de la pharmacopée française, cette&nbsp;crème&nbsp;nourrit et apaise, protège du froid et du dessèchement.&nbsp; Sa texture généreuse assure une&nbsp;hydratation 24h&nbsp;et permet une libération progressive des actifs ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393750</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2c0c79c971329ec7b96a8ff14322a58b30869c32f4c1e9edf1c985dfd89c8e5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS > Dermocosmétique > CREME MAINS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Crème Nutritive Revitalisante 50ml ]]></title>
<g:id>30b64404-3ad7-4afd-84f6-d845110f78ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne crème nutritive revitalisante 50ml?30b64404-3ad7-4afd-84f6-d845110f78ce ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème nutritive revitalisante le révélateur de la beauté naturelle des peaux sensibles sèches, ce soin associe:</p>
<p><br />-Un extrait naturel de fruits rouges, « booster » des cellules de la peau, combiné à une forme stable de la vitamine e antioxydante. La peau parait protégée.<br />-Une texture fondante qui nourrit les peaux sèches grâce à sa composition en agents nutritifs de structure homologue au ciment intercellulaire tout en laissant un voile de douceur non gras sur la peau.<br />-L ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770209402</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4d533be59082afd44233270bb587b8a5ee04f4fe5f1736c107fc6706024968f9 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Crème Nutritive Revitalisante Riche 50ml ]]></title>
<g:id>ccd6e111-1f0e-41c1-96c2-4ced8712601b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne crème nutritive revitalisante riche 50ml?ccd6e111-1f0e-41c1-96c2-4ced8712601b ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème nutritive revitalisante riche "révélateur de la beauté naturelle des peaux sensibles sèches, ce soin associe: - un extrait naturel de fruits rouges, « booster » des cellules de la peau, combiné à une forme stable de la vitamine e antioxydante. La peau parait protégée. - une texture onctueuse fortement enrichie en agents nutritifs et en beurre de karité qui procure durablement confort aux peaux les plus sèches. Elles compense les manques hydrolipidiques de la peau en lui apportant une nu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770209396</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/14f90cc1cab319aa8c87f54d580a0e9b40cc8d22d4161916375717998fc1db7f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Dermabsolu Crème Jour Redensifiante - Recharge 40ml ]]></title>
<g:id>111d1f02-a828-415d-a607-e26d2594f458</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne dermabsolu crème jour redensifiante - recharge 40ml?111d1f02-a828-415d-a607-e26d2594f458 ]]></link>
<g:price><![CDATA[ 3590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Crème jour redensifiante Dermabsolu </span><span>des Laboratoires Avène, </span>spécialement formulée pour les peaux matures ou dévitalisées, elle aide à restaurer le volume de la peau et à réduire les signes visibles de l'âge.</p>
<ul><li>Redensification : Aide à redensifier et à raffermir la peau, en restaurer le volume pour un effet repulpant visible.</li>
<li>Hydratation longue durée : Fournit une hydratation intense qui dure toute la journée, laissant la peau douce et confortable.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395983</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/998688e77f738486699ceb39d05edbf7179fddb377a06e4145d03e702ad7a95d ]]></g:image_link>
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
<title><![CDATA[ Avène Dermabsolu Crème Nuit Intensive 40ml ]]></title>
<g:id>815b56b2-93a4-424d-bc67-ed34debb4d65</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne dermabsolu crème nuit intensive 40ml?815b56b2-93a4-424d-bc67-ed34debb4d65 ]]></link>
<g:price><![CDATA[ 4390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec le temps, la peau évolue : elle devient moins dense, plus sèche et plus terne... Cet effet de relâchement impacte la forme du visage : en dermatologie on parle alors de l'inversion du TRIANGLE DE JEUNESSE.<br>Pour une action performante, les Laboratoires Dermatologiques Avène ont développé la Crème Nuit Intensive Resculptante. Elle agit sur les 3 signes cliniques du vieillissement : perte de structure, sécheresse et perte d'homogénéité du teint.<br>Son TRIO d'actifs à base de Bakuchiol d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395990</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1dcc13c8a7f6acba4977ad29a610dea1f0c090747921abed73912c7135479275 ]]></g:image_link>
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
<title><![CDATA[ Avène Dermabsolu Serum Concentré 30ml ]]></title>
<g:id>700b4ef9-1eb9-428e-8475-201a40608b19</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne dermabsolu serum concentré 30ml?700b4ef9-1eb9-428e-8475-201a40608b19 ]]></link>
<g:price><![CDATA[ 4590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène DermAbsolu Sérum Concentré Resculptant 30 ml est un soin anti-âge conçu pour lutter contre les signes du vieillissement cutané.<br>Grâce à sa formule innovante, ce sérum agit en profondeur pour redensifier la peau, la resculpter et lui apporter une nutrition intense. Il s'adresse spécifiquement aux peaux sensibles en quête de confort.</p><p>Ce sérum concentre toute son action sur les 3 signes cliniques du vieillissement cutané, à savoir la perte de structure, la sécheresse et la perte d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395952</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db771188a828f9cd1c518c8516dc38046f483e3d0405f91249a22045500837bc ]]></g:image_link>
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
<title><![CDATA[ Avène Dermabsolu Soin Regard Jeunesse - 15ml ]]></title>
<g:id>f2e55d1b-8c69-4d30-8bd3-9945d95c0ce0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne dermabsolu soin regard jeunesse - 15ml?f2e55d1b-8c69-4d30-8bd3-9945d95c0ce0 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Soin regard jeunesse Dermabsolu </span><span>des Laboratoires Avène, </span>véritable anti-âge global, ce sérum atténue visiblement poches et cernes, pour un regard éclatant et lumineux.</p>
<p>Sa formule hydratante et nutritive, associée à son applicateur métallisé à sensation de fraîcheur, lisse et illumine votre regard. </p>
<p>Son association unique d'actifs brevetés agit visiblement sur le relâchement de votre peau et sa perte de densité :</p>
<ul><li>Avec ses Polyphénols de Vanill ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770396072</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d8acb31f86c535c131fcbd2be7e076dcf9be2c73f3d22763f34f855ce5f04fa8 ]]></g:image_link>
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
<title><![CDATA[ Avène Duo Sticks Lèvres Hydratant 4g ]]></title>
<g:id>669d9833-048c-4611-b1df-3fe12260978e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne duo sticks lèvres hydratant 4g?669d9833-048c-4611-b1df-3fe12260978e ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Hydratant lèvres, sa formule clean et plus minimaliste à 99,5% d’origine naturelle combine de l'Eau thermale d'Avène, de l'extrait d’Edelweiss aux propriétés anti-oxydantes, et un mélange d’huiles naturelles pour hydrater les lèvres. </span></p>
<p><span>Soin naturel* quotidien pour les lèvres, ce stick lèvres naturel hydrate, apaise, protège du dessèchement quotidien causé par les agressions extérieures (stress oxydant, pollution urbaine), et convient à toute la famille, dès 2 ans. Ave ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149418</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ab932d40020f15cbe0e64c35bfe9d4f81ae43970a5fb03cc37811ff5a9fc76a8 ]]></g:image_link>
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
<title><![CDATA[ Avène Démaquillant Douceur Yeux 125ml ]]></title>
<g:id>5e0cfa71-ae23-4cc5-8739-a6f071aed65e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne démaquillant douceur yeux 125ml?5e0cfa71-ae23-4cc5-8739-a6f071aed65e ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Gel démaquillant douceur pour les yeux à l'eau thermale d'Avène aux propriétés apaisantes et anti-irritantes.</p>
<p class="p3">Elimine le maquillage des cils et des paupières.</p>
<p class="p1">Apaisez votre regard avec une fine pulvérisation d’Eau thermale Avène. Elimine en douceur votre maquillage sans laisser de résidus.</p>
<p class="p1">- Démaquillant : Dépourvu d’agents nettoyants agressifs, il élimine parfaitement et sans gratter le maquillage des cils et des paupières. Il  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779051378</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/97d7800e9b9f933db6ab3bbeff0003bff57cf2a3cd3328f6e2494077ce61a9d3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Démaquillant Yeux Intense Flacon 125ml ]]></title>
<g:id>ea5c329c-487f-42b3-9b66-ff531e1595ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne démaquillant yeux intense flacon 125ml?ea5c329c-487f-42b3-9b66-ff531e1595ac ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Démaquillant yeux intense est une formule biphasique (combinaison d'eau thermale d'avène apaisante et d'huiles démaquillantes) éliminant le maquillage résistant, intense et waterproof. Yeux sensibles et porteurs de lentilles .</p>
<p><br />Le démaquillant yeux intense est adapté aux femmes ayant les yeux sensibles et/ou porteuses de lentilles et qui sont néanmoins adeptes d'un maquillage waterproof. Ce soin offre un double bénéfice :</p>
<p><br />- L'efficacité d'une formule biphasique.<br /> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770073126</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/531e6e27ed789cd2865ca9fe61d5a02bf2d9750378beb55b55d5d5e93151d81c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Eau Micellaire Démaquillante 100ml ]]></title>
<g:id>4a0325e9-5aed-499b-9a5f-a679d619deb4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau micellaire démaquillante 100ml?4a0325e9-5aed-499b-9a5f-a679d619deb4 ]]></link>
<g:price><![CDATA[ 425.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'<span>Eau Micellaire Démaquillante Avène</span> nettoie (même les particules de pollution *), hydrate** et apaise en un seul geste le visage et les yeux sensibles. Elle est composée à 99% d’ingrédients d’origine naturelle et sans ingrédients d’origine animale. La peau est nette, douce, apaisée et confortable.</p>
<p>Au quotidien, cette eau fraîche au parfum délicat démaquille et apporte douceur en un geste simple et rapide. Elle améliore l'hydratation et préserve l’équilibre naturel de la p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152456</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b11e2e4f4fa519c8ea5f1bbee479580a4016dd76f6effc39b4f5f1db28a63819 ]]></g:image_link>
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
<title><![CDATA[ Avène Eau Micellaire Démaquillante 200 ml ]]></title>
<g:id>0445e5a7-97a1-4891-b33b-bf893c591254</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau micellaire démaquillante 200 ml?0445e5a7-97a1-4891-b33b-bf893c591254 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Les Essentiels Eau Micellaire Démaquillante 200 ml est une eau qui démaquille, nettoie (même les particules de pollution), hydrate et apaise en un seul geste le visage et les yeux sensibles.</p>
<p>Elle améliore l'hydratation et préserve l'équilibre naturel de la peau grâce à sa combinaison de glycérine, de tréhalose et sa haute concentration en Eau Thermale d'Avène aux propriétés apaisantes.<br />Sa formule intègre le minimum d'ingrédients à la juste dose, pour garantir efficacité derm ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152463</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/024ce264c2eff2f5035da8239ec3a85160425c600c4d6612204e42942871fed6 ]]></g:image_link>
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
<title><![CDATA[ Avène Eau Micellaire Démaquillante 400 ml ]]></title>
<g:id>9aa6f3da-fa70-479f-beb5-52cf69718799</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau micellaire démaquillante 400 ml?9aa6f3da-fa70-479f-beb5-52cf69718799 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette eau micellaire démaquillante nettoie (même les particules de pollution * ), hydrate** et apaise en un seul geste le visage et les yeux sensibles. Elle est composée à 99% d’ingrédients d’origine naturelle et sans ingrédients d’origine animale. Au quotidien, cette eau fraîche au parfum délicat démaquille et apporte douceur en un geste simple et rapide. Elle améliore l'hydratation et préserve l’équilibre naturel de la peau grâce à sa combinaison de Glycérine, de Tréhalose et sa haute ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770390179</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/81ed5aa97c0555ef8c9705d6b8d2fbd58ed3cb835c7a3b6d73ea0154b38c7fa0 ]]></g:image_link>
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
<title><![CDATA[ Avène Eau Micellaire Démaquillante Peaux Sensibles lot 2x400ml ]]></title>
<g:id>8a8b1ba9-5f43-48e5-ad1a-4be9d3a7b544</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau micellaire démaquillante peaux sensibles lot 2x400ml?8a8b1ba9-5f43-48e5-ad1a-4be9d3a7b544 ]]></link>
<g:price><![CDATA[ 1980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoie et démaquille en un seul geste le visage, les yeux et les lèvres,&nbsp;idéale pour les peaux sensibles.</p><p>Cette lotion micellaire contient une formule à double fonction grâce à son pouvoir démaquillant et son action hydratante. Elle vous assure un nettoyage optimal de la peau grâce à ses agents nettoyants extra-doux qui capturent les impuretés sans dessécher votre peau.</p><p>Enrichie en Eau Thermale d'Avène aux propriétés naturelles apaisantes, sa formule redonne douceur à votre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770153293</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE HYGIENE SOIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/659100149e56da8cb260514f61e8f796c6ca68d3a814ef6b57743cde690742fb ]]></g:image_link>
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
<title><![CDATA[ Avène Eau Thermale Spray 150ml ]]></title>
<g:id>d9760ed4-e44f-4f61-ba9d-056d388872f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau thermale spray 150ml?d9760ed4-e44f-4f61-ba9d-056d388872f6 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p> </p>
<p>Propriétés apaisante et anti-irritante exceptionnelle, le spray est idéal pour les peaux sensibles et fragiles qu'elle enveloppe d'un voile de douceur et de fraîcheur. </p>
<p>Procure une agréable détente. </p>
<p>Apaise les rougeurs et sensations de chaleur après une exposition au soleil. </p>
<p>Parfait le maquillage et prépare la peau à recevoir les produits de soin.</p>
<p>Fixe le maquillage.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779003124</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f942e4fd6ba74a5931811a04b97fe6f5265823171b54e0232b2b9438a5f82fa8 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Eau Thermale Spray 300ml ]]></title>
<g:id>e3aba80c-415a-412a-b817-d8bc0c2985fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau thermale spray 300ml?e3aba80c-415a-412a-b817-d8bc0c2985fb ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apaisante par nature, adoucissante et anti-irritante l’Eau thermale d’Avène est le soin essentiel de toutes les peaux sensibles.</p><p>Une sensation de douceur vous enveloppe, vous apaise et vous protège durablement.</p><p>Directement prélevée à sa Source, l’Eau thermale d’Avène conserve intactes toutes ses propriétés apaisantes, anti-irritantes et adoucissantes.</p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779003131</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d967466bdd62b350ee2a57c1304cfc0a70c08c03fad0c562ea45f5ea681750ba ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Eau Thermale Spray 50ml ]]></title>
<g:id>2a76219b-3912-4d91-9b0f-ba8ae7480f65</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne eau thermale spray 50ml?2a76219b-3912-4d91-9b0f-ba8ae7480f65 ]]></link>
<g:price><![CDATA[ 320.00 EUR ]]></g:price>
<description><![CDATA[ <p>Propriétés apaisante et anti-irritante exceptionnelle, le spray est idéal pour les peaux sensibles et fragiles qu'elle enveloppe d'un voile de douceur et de fraîcheur. </p>
<p>Procure une agréable détente. </p>
<p>Apaise les rougeurs et sensations de chaleur après une exposition au soleil. </p>
<p>Parfait le maquillage et prépare la peau à recevoir les produits de soin.</p>
<p>Fixe le maquillage.</p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779228305</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ffd756f84aa3661d5eec369c6460714c7514086e0fa1c4e6759c792ff49a7f2b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Fluide Demaquillant 3 En 1 Peaux Sensibles 200ml ]]></title>
<g:id>83f04e67-7d59-4bdb-97df-cc67804ae621</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne fluide demaquillant 3 en 1 peaux sensibles 200ml?83f04e67-7d59-4bdb-97df-cc67804ae621 ]]></link>
<g:price><![CDATA[ 1230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce fluide lacté à la texture fraîche et légère démaquille en un seul geste visage, yeux et lèvres.<br />Riche en Eau thermale d'Avène, apaisante et anti-irritante.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770072952</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b9d7ad8f1a2d9fa358a20262b2471dcdfb0da285147481edffc6faa60c40cd1f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Gelée Gommante Douceur 75ml ]]></title>
<g:id>76f48fc1-7ad6-405b-a3de-5562e4e1bc66</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne gelée gommante douceur 75ml?76f48fc1-7ad6-405b-a3de-5562e4e1bc66 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>gelée gommante douceur</span><span> des laboratoires </span><span>Avène</span><span> est un soin visage qui convient à tous les types de peaux et plus particulièrement aux peaux sensibles. Elle </span><span>exfolie, purifie, désincruste les pores</span><span> en douceur et élimine les impuretés. En stimulant le renouvellement cellulaire, elle participe au maintien d’une peau en pleine santé.</span><br /><br /><span>Cette gelée tient son action exfoliante des microbilles  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152586</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d3d04f8174de77ea89ae536830c6acc1db97bd1ee667dae81dab6dc1e65d43a5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Haute Protection Spf50 Compact Teinté Doré 10g ]]></title>
<g:id>7ea66c9c-ee26-4281-bfdb-368ee0eb8cfe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne haute protection spf50 compact teinté doré 10g?7ea66c9c-ee26-4281-bfdb-368ee0eb8cfe ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Compact teinté SPF50 Doré, complexe de filtres 100% minéraux stables, offre une très bonne tolérance et une haute protection contre les UVB et les UVA (courts et longs). Spécifiquement formulé pour les peaux sensibles à intolérantes, il permet de masquer les imperfections cutanées. Il maquille les peaux dont la pigmentation est irrégulière, pour un teint naturel, homogène et mat. La Provitamine E (Pré-tocophéryl), puissant antioxydant, ajoute une protection cellulaire contre les radicaux libr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100242</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac0599623d04b90538b15ccb078a779d8a4ba37788ff58c30b78e5eb7edc4315 ]]></g:image_link>
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
<title><![CDATA[ Avène Haute Protection spf50 Compact Teinte Sable  ]]></title>
<g:id>303547b2-7992-45b5-acd7-de09dfc22ca2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne haute protection spf50 compact teinte sable ?303547b2-7992-45b5-acd7-de09dfc22ca2 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Compact teinté SPF50 Sable, complexe de filtres 100% minéraux stables, offre une très bonne tolérance et une haute protection contre les UVB et les UVA (courts et longs). Spécifiquement formulé pour les peaux sensibles à intolérantes, il permet de masquer les imperfections cutanées. Il maquille les peaux dont la pigmentation est irrégulière, pour un teint naturel, homogène et mat. La Provitamine E (Pré-tocophéryl), puissant antioxydant, ajoute une protection cellulaire contre les radicaux lib ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100228</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2daea87529aed636603fc0ea489cd18df1b584b58933c765b93d57ed3a94911 ]]></g:image_link>
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
<title><![CDATA[ Avène Homme Baume Riche Après Rasage 75ml ]]></title>
<g:id>cb5a5885-e8ad-4d40-8580-173f4fa76292</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne homme baume riche après rasage 75ml?cb5a5885-e8ad-4d40-8580-173f4fa76292 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Véritable anti-feu du rasoir, le Baume Après-rasage Avène Homme 75 ml apaise immédiatement les irritations, prévient des risques bactériens et régénère les tissus agressés par la lame.<br />Riche et onctueux, il dépose un film protecteur et adoucissant sur la peau.<br /><br />- Apaisant : Riche en Eau thermale d'Avène, il apaise et calme le feu du rasoir, procurant une sensation de bien être et de fraîcheur immédiate.<br />- Hydratant : Grâce aux agents hydratants*, il dépose un léger film pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779003889</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/afbc78242d570af9553cd5acd2c193130b73df16ee18604f5e9a362f32abb59d ]]></g:image_link>
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
<title><![CDATA[ Avène Homme Mousse à Raser 200 ml ]]></title>
<g:id>40a0ba68-892a-460e-9942-dd30b0dab5fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne homme mousse à raser 200 ml?40a0ba68-892a-460e-9942-dd30b0dab5fb ]]></link>
<g:price><![CDATA[ 1150.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Soin quotidien, cette mousse à raser hydrate, adoucit et apporte une réelle sensation de confort, grâce à la combinaison d’Eau thermale d’Avène aux propriétés apaisantes et anti-irritantes, et d’un agent hydratant (glycérine). Légère et onctueuse, elle facilite la glisse de la lame pour un rasage plus confortable. Elle assainit et diminue le risque bactérien lié aux microcoupures, tout en protégeant la peau des agressions du rasage. Sans alcool et légèrement parfumée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770147919</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e3eed0b96194b29d60dc7390393a6dc477bd9323f2ab5d611045a03b1440f809 ]]></g:image_link>
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
<title><![CDATA[ Avène Homme Soin Hydratant Anti-Age 50ml ]]></title>
<g:id>595a27b8-8577-4242-afa8-8c422f23c92b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne homme soin hydratant anti-age 50ml?595a27b8-8577-4242-afa8-8c422f23c92b ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Homme Soin Hydratant Anti-Âge 50 ml est un soin hydratant anti-âge pour hommes adapté aux peaux sensibles qui permet d'hydrater, de resourcer et de tonifier votre peau.<br /><br />Ce soin hydratant est composé de fragments exclusifs d'acide hyaluronique (HAE) qui permet de relancer la synthèse d'acide hyaluronique l'OGG. L'OGG est un véritable protecteur du capital élastique cutané, et le Pré-Tocopheryl est un actif qui aide à la prévention du stress oxydatif.<br /><br />Sa texture fond ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770038545</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/51078d1bd70d7070cc3a886cdb10e79e7563766b47da4ac64819912233a73477 ]]></g:image_link>
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
<title><![CDATA[ Avène Hyaluron Activ B3  Recharge Crème 50ml ]]></title>
<g:id>340192b4-aede-464d-941a-9414a1e57c77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3  recharge crème 50ml?340192b4-aede-464d-941a-9414a1e57c77 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <span>crème régénération cellulaire Hyaluron Activ B3</span> est un <span>soin anti-âge </span>développé par le laboratoire <span>Avène</span>. Elle s'adresse aux peaux normales à sèches et vise à corriger et freiner le vieillissement cutané.</p>
<p>Cette <span>crème anti-âge Avène</span> permet d'hydrater la peau au quotidien et l'aide à lutter contre le vieillissement lié à la baisse de production naturelle d'acide hyaluronique et de collagène. Ainsi, la <span>crème Hyaluron Activ B3</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770153187</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8fb3129d624d59d895aedf054a659d16c75891e7aae0be25b9b8956877c86e65 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hyaluron Activ B3 - Crème de Nuit 40ml ]]></title>
<g:id>a7ab1798-58b3-4443-93d6-4600f6a32769</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 - crème de nuit 40ml?a7ab1798-58b3-4443-93d6-4600f6a32769 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <div class="value">
<div>
<div>
<div>
<p><span>La Crème de Nuit Multi-Intensive Hyaluron Activ B3 d'Avène</span> est un soin de nuit riche et cocooning ultra-réparateur à base de Nicinamide et d'Acide Hyaluronqiue. Ce soin non collant et non gras agit sur la cause du vieillissement cutané et favorise la réparation de la peau la nuit, lorsque la régénération cellulaire est optimale.</p>
<p></p>
</div>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770153200</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/130e515fa06b0fe26c5f2c71621dec142433191dcd7f6de18a4ed38eb527d034 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hyaluron Activ B3 Aqua Gel Crème 50ml ]]></title>
<g:id>6efe4c70-09ed-4e68-80a1-2e5ce5d9f6a8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 aqua gel crème 50ml?6efe4c70-09ed-4e68-80a1-2e5ce5d9f6a8 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <div id="primary" class="content-area">
<div id="product-41332" class="product type-product post-41332 status-publish first instock product_cat-categ_powersante_48 has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
<div class="aboutandtab">
<div class="blocongletproduit">
<div class="tabsdescription-content">
<div id="tabsolo" class="active">Un soin gel-crème anti-rides hybride, à utiliser en crème ou comme masque hydratant 48h pour une peau repulpée, raffermie et écla ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393408</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/49d585f3dd20761d4ae8f011700255ba99b823980968410e789180ed13cbf149 ]]></g:image_link>
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
<title><![CDATA[ Avène Hyaluron Activ B3 Aqua Gel-Crème Recharge 50 ml ]]></title>
<g:id>66f09cfb-f036-465a-b6a6-09b89ec6b9f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 aqua gel-crème recharge 50 ml?66f09cfb-f036-465a-b6a6-09b89ec6b9f3 ]]></link>
<g:price><![CDATA[ 2895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Hyaluron Activ B3 Aqua Gel-Crème Régénération Cellulaire Recharge 50 ml est un pot de recharge pour la crème correspondante. Cette crème anti-âge à la formule unique associe l'efficacité de l'acide hyaluronique à la puissance régénératrice de la vitamine B3. Conçu pour revitaliser la peau en profondeur, ce gel-crème léger hydrate intensément, réduit les signes de fatigue et stimule la régénération cellulaire. Offrant une expérience sensorielle agréable, ce produit allie performance et d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393415</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36286de1e1e027e3d865c4ec6119bdca696529ac3464ce6d5b0a1835d77fd0fd ]]></g:image_link>
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
<title><![CDATA[ Avène Hyaluron Activ B3 Crème Pot 50ml ]]></title>
<g:id>1b036edf-a57d-416b-8d08-3c99f85dbbc1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 crème pot 50ml?1b036edf-a57d-416b-8d08-3c99f85dbbc1 ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product-description-short-15346" class="rte-content">
<p>Crème anti-âge pour le visage avec de la niacinamide et de l'acide hyaluronique pour favoriser la régénération cellulaire. Convient à la peau normale à sèche.</p>
<p>Cette <span>crème anti-âge Avène</span> permet d'hydrater la peau au quotidien et l'aide à lutter contre le vieillissement lié à la baisse de production naturelle d'acide hyaluronique et de collagène. Ainsi, la <span>crème Hyaluron Activ B3</span> est l'alliée idéale  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770153170</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/022cbf0139054c7863c9248cdb017ab4e8dfbf5251cb6d3f16e0ef0afe5ff77b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hyaluron Activ B3 Soin Regard Triple Action 15ml ]]></title>
<g:id>c6199164-068a-4649-962a-61771d228fd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 soin regard triple action 15ml?c6199164-068a-4649-962a-61771d228fd7 ]]></link>
<g:price><![CDATA[ 2580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec l'âge tout s'accélère. Les cellules vieillissantes se propagent et la peau fonctionne au ralenti. Les laboratoires dermatologiques Avène créent le soin regard Hyaluron Activ B3 contenant du sulfate de dextran, de l'acide hyaluronique pur (haut et bas poids moléculaire) et du niacinamide (6%) pour agir sur la cause du vieillissement et prolonger la vie des cellules*. Le soin regard triple correction Hyaluron Activ B3 est un soin éco-conçu contenant 93% d'ingrédients d'origine naturelle, s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770394313</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7cb91201568fbb9785c219f9be79f35703d9851c4fa5a7b41827a25da9d4a74a ]]></g:image_link>
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
<title><![CDATA[ Avène Hyaluron Activ B3 Soin Regard Triple Correction 15ml ]]></title>
<g:id>e8d17f79-c67f-44e3-b8ee-f424bb13410f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 soin regard triple correction 15ml?e8d17f79-c67f-44e3-b8ee-f424bb13410f ]]></link>
<g:price><![CDATA[ 2580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>soin regard triple correction Hyaluron Activ B3</span> est un <span>soin contour des yeux</span> développé par le laboratoire <span>Avène</span>. Il offre une action <span>anti-rides, anti-poches et anti-cernes</span>.</p>
<p>Le contour des yeux est sans doute la première zone du visage à être marquée par les ridules et les rides. De plus, elle peut être confrontée aux cernes et aux poches qui plombent le regard. Avec le <span>soin regard triple correction Hyaluron Activ B3 Avène</sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770153217</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3961173aadd02ce5381232d45f7b0a2f71cd30cb9caf4aeea34dea7589fc8031 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hyaluron Activ B3 Sérum Concentré Repulpant. 30ml ]]></title>
<g:id>c6c268b6-b1ad-4728-af3e-15f7deef4784</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hyaluron activ b3 sérum concentré repulpant. 30ml?c6c268b6-b1ad-4728-af3e-15f7deef4784 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product-description-short-15345" class="rte-content">
<p>Un concentré d'efficacité à 92% naturel, il repulpe, raffermit et restaure l'éclat de la peau, avec en plus un effet tenseur immédiat.</p>
<p>Un concentré d'efficacité anti-âge à 92% naturel, il repulpe, raffermit et restaure l'éclat de la peau, avec en plus un effet tenseur immédiat. Convient à tous les types de peaux du visage.</p>
<p></p>
<p></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770153101</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1ba9c75c38c8da61aab8c8dad3cb9241a1e6f41c12914d4448119b2d47833e28 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hydrance  Emulsion Légère BB  Lumière 40ml ]]></title>
<g:id>81a3dee1-c90a-4fac-a63e-6c7d16e22e10</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance  emulsion légère bb  lumière 40ml?81a3dee1-c90a-4fac-a63e-6c7d16e22e10 ]]></link>
<g:price><![CDATA[ 1720.00 EUR ]]></g:price>
<description><![CDATA[ <p>En un seul geste, ce soin hydrate, illumine et protège pour un teint homogène et lumieux. Teinte BB Lumière qui s'adapte à la majorité des carnations pour un effet bonne mine naturel. Sa texture légère non grasse laisse la peau douce et confortable toute la journée.</p>
<p><br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770208771</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a5d82b7708f53e433427359e06213d36413511f20e7bb583cc946c3f25b77db ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hydrance Aqua Gel Hydratant 50ml ]]></title>
<g:id>2a38566a-e9f5-4ea4-bc66-eec922d201c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance aqua gel hydratant 50ml?2a38566a-e9f5-4ea4-bc66-eec922d201c5 ]]></link>
<g:price><![CDATA[ 1820.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un soin tout-en-un inspiré des galéniques d'Asie, formulé au Japon et fabriqué en France. Sa texture aqua-gel très fraîche offre à la peau une sensation voile d'eau délicate.</p>
<p>Ce soin complet, tout-en-un, s'adapte à tous les besoins et tous les rythmes de vie grâce à ses propriétés et à ses utilisations multiples.</p>
<p>Il hydrate*, apaise et détoxifie la peau, en un seul geste grâce :<br />- à son complexe Cohederm breveté**, qui procure une hydratation intense,<br />- à l'Eau thermal ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770203493</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/86bf246f9b0712b8846a951ff7bb113b3c79909386c907e041fff6478b87c688 ]]></g:image_link>
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
<title><![CDATA[ Avène Hydrance Boost Sérum Concentré 30 ml ]]></title>
<g:id>8dab1c00-cbd8-4db1-9860-5bbc006a1740</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance boost sérum concentré 30 ml?8dab1c00-cbd8-4db1-9860-5bbc006a1740 ]]></link>
<g:price><![CDATA[ 2350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Véritable booster intense d'hydratation du visage, ce sérum agit pendant 48H* et rétablit l’équilibre des peaux sensibles déshydratées. Sa formule riche en acide hyaluronique et en vitamine B3 est composée à 96% d’ingrédients d’origine naturelle, pour une texture gel d’eau ultra-légère et fraîche, non grasse et non collante. Elle pénètre du bout des doigts et laisse une sensation voile d’eau sur la peau. Anti-teint terne, ce sérum visage renforce l’hydratation pour une peau souple, liss ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770388954</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1ac67406bbe730b73d547a2b5fca0b508d30a4a6cfe832225fe294d78267485a ]]></g:image_link>
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
<title><![CDATA[ Avène Hydrance Crème BB Lumière Riche 40ml ]]></title>
<g:id>6a23e63b-cddb-471f-a957-c1d1180c12a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance crème bb lumière riche 40ml?6a23e63b-cddb-471f-a957-c1d1180c12a5 ]]></link>
<g:price><![CDATA[ 1720.00 EUR ]]></g:price>
<description><![CDATA[ <p>En un seul geste, ce soin hydrate, illumine et protège pour un teint homogène et lumieux. Teinte BB Lumière qui s'adapte à la majorité des carnations pour un effet bonne mine naturel. Sa texture veloutée laisse la peau douce et confortable toute la journée.   </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770208764</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e8d3c7caaf73cbaa635bc2656092efacdcbc3257b5669f475551f799e075f2f0 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hydrance Crème Riche 40ml ]]></title>
<g:id>8e9d8c67-fcf1-4054-a51c-d361584c66e5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance crème riche 40ml?8e9d8c67-fcf1-4054-a51c-d361584c66e5 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une recharge d'eau thermale pour une peau durablement hydratée. Sa texture onctueuse et nutritive, au fini velouté laisse la peau confortable, souple et lumineuse toute la journée.</p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779390132</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8028065fae848125769c0964bd24888612f38a152c804ea93a8698693c39ceef ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hydrance Légère Emulsion Hydratante 40ml ]]></title>
<g:id>1f470e48-0434-4d1e-a1d3-fab0c7eb5f64</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance légère emulsion hydratante 40ml?1f470e48-0434-4d1e-a1d3-fab0c7eb5f64 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydrance légère emulsion hydratante est une recharge d'eau thermale pour une peau durablement hydratée. Sa texture légère non collante, laisse la peau douce, souple et lumineuse toute la journée.</p>
<p><br />Grâce à son complexe cohederm breveté*, hydrance légère emulsion hydrantante :<br />-Hydrate** durablement la peau,<br />-L'apaise durablement en recréant les réservoirs naturels d'eau qui concentrent l'eau thermale d'avène, anti-irritante.</p>
<p>Sa texture légère non collante, désaltèr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770208962</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ddf1705cd845ea2341a4c629cce6b471a2cd4f71000cd8fd639fd03ff2b48322 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hydrance UV Crème Riche 40ml ]]></title>
<g:id>7ce6c22d-3140-4d38-b26f-4aca052a13a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance uv crème riche 40ml?7ce6c22d-3140-4d38-b26f-4aca052a13a5 ]]></link>
<g:price><![CDATA[ 1660.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydrater votre peau tout en la protégeant quotidiennement des UV, des radicaux libres et de la pollution. Sa texture onctueuse et veloutée laisse la peau douce, souple et lumineuse toute la journée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770208795</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2bdd34e6f2e05c56453a05fcc1289008165b60c053d3e4c8b7920168f9e11cc ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Hydrance UV Emulsion Légère 40ml ]]></title>
<g:id>a6ee257c-5b39-4628-8440-bc34340279ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne hydrance uv emulsion légère 40ml?a6ee257c-5b39-4628-8440-bc34340279ce ]]></link>
<g:price><![CDATA[ 1660.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hydrater votre peau tout en la protégeant quotidiennement des UV, des radicaux libres et de la pollution. Sa texture légère au fini-mat laisse la peau douce, souple et lumineuse toute la journée.</p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770208788</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/402bb8073c3c1a4ed77630dc508a818a53f60398911089ad047833de171a6b7a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Lait Démaquillant 200 ml ]]></title>
<g:id>68fb701d-94d3-4025-ad40-c49c9e9154dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne lait démaquillant 200 ml?68fb701d-94d3-4025-ad40-c49c9e9154dd ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce lait doux démaquillant nettoie, hydrate* et apporte du confort aux peaux sensibles sèches et très sèches. Il réduit les sensations d'inconfort, le démaquillage devient un moment de plaisir. Lait au parfum délicat, il démaquille et apporte douceur en un geste simple et rapide, avec un fini non-gras. Il améliore l'hydratation et préserve l’équilibre naturel de la peau grâce à sa haute concentration en Eau thermale d'Avène aux propriétés apaisantes. Sa formule intègre le minimum d'ingré ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152555</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/afc3653484f0b92d3dd3373ee01ad853747e20a5bf667398505e656486b10cdd ]]></g:image_link>
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
<title><![CDATA[ Avène Lait Réparateur Après-Soleil 200ml ]]></title>
<g:id>c73372d9-a427-4255-b43f-33d5f2326054</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne lait réparateur après-soleil 200ml?c73372d9-a427-4255-b43f-33d5f2326054 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Riche en Eau Thermale d'Avène et enrichi en antioxydants et en huile de jojoba réparatrice, le <span>Lait Réparateur Après-Soleil d'Avène</span> apaise instantanément les peaux sensibles échauffées après une exposition au soleil.</p>
<p>Sa <span>texture onctueuse et fondante</span> procure une agréable sensation de fraîcheur intense.</p>
<p>Il apporte au visage et au corps une <span>hydratation durable</span> allant jusqu'à 48h* et un délicat parfum.</p>
<p>Il convient à <span>toute la famill ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770154221</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b5e11c1264c8897b51fcefdaf045b10d5b49209f117ccbf8d1ac2466ac3d0892 ]]></g:image_link>
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
<title><![CDATA[ Avène Lait Solaire Spf 50 250ml ]]></title>
<g:id>948cbe91-5a6b-4586-b034-274655c92ae1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne lait solaire spf 50 250ml?948cbe91-5a6b-4586-b034-274655c92ae1 ]]></link>
<g:price><![CDATA[ 1830.00 EUR ]]></g:price>
<description><![CDATA[ <p><br>Adultes</p><p>Type de peau</p><p>Peau sensible</p><p>Fabriqué en France</p><p>Le LAIT SOLAIRE SPF50 100% INVISIBLE* allie haute protection et sensorialité grâce à sa texture "lait-en-eau"** légère sur la peau.<br><br>HAUTE PROTECTION :<br>Une protection optimale SPF50 contre les UVB et les UVA qui résiste à l'eau, au sable et à la sueur.<br><br>TEXTURE 100% INVISIBLE* :<br>Une texture transformative "lait en eau" qui permet une absorption immédiate, sans effet blanc, même sur peau mouillé ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770396881</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c730e46d1d269d2daf2f73fdcffab493336c8718fa830742a1d1766ce4e56c60 ]]></g:image_link>
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
<title><![CDATA[ Avène Lotion Tonique Douceur 200ml ]]></title>
<g:id>c21163ce-5ae4-4ee5-ace4-771dafa4e3b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne lotion tonique douceur 200ml?c21163ce-5ae4-4ee5-ace4-771dafa4e3b4 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>La Lotion Tonique Apaisante Avène</strong> aide à parfaire le démaquillage quotidien et participe à l'hydratation de l'épiderme. Elle débarrasse la peau des impuretés et la laisse nette, sans effet gras ou collant. Grâce à sa très grande richesse en eau thermale d'Avène directement puisée à sa source, elle répond précisément aux besoins des peaux sensibles et déshydratées en restaurant la barrière cutanée. Elle recouvre en effet l'épiderme d'un voile apaisant, afin de soulager les irr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152517</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71dd959598b13aab23c7826df8a8cb3d60b0e098638b7fbe565a4e0892896882 ]]></g:image_link>
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
<title><![CDATA[ Avène Masque Apaisant Hydratant 50ml ]]></title>
<g:id>bfd15baa-a8c4-4448-ac63-68e04a74b1e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne masque apaisant hydratant 50ml?bfd15baa-a8c4-4448-ac63-68e04a74b1e7 ]]></link>
<g:price><![CDATA[ 1550.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce masque apaisant réconforte et énergise les peaux sensibles fatiguées (traits tirés et teint terne), inconfortables, en manque d’hydratation. Sa combinaison d’extrait naturel de fruits rouges, « booster » des cellules de la peau, d’une forme stable de la vitamine E antioxydante et d’un cocktail d’agents nourrissants et hydratants lutte contre les signes de fatigue. Il révèle la beauté naturelle de la peau, hydrate et renforce la barrière cutanée. L’Eau thermale d’Avène, apaisante et adoucis ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392357</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bebf8033ff183fcc072ba0adb01c0e3c78a245e57d06d0d09e6f39d54a25008b ]]></g:image_link>
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
<title><![CDATA[ Avène Men Mousse à Raser 50 ml ]]></title>
<g:id>8672b149-6aaf-4559-be3b-c231515dd061</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne men mousse à raser 50 ml?8672b149-6aaf-4559-be3b-c231515dd061 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Homme Mousse à Raser 50 ml est une mousse à raser pour les peaux normales et sensibles, barbes normales.</p>
<p>Elle protège des agressions du rasage, apaise le feu du rasoir, limite les irritations. La formule douce enrichie en Eau Thermale d'Avène apaisante, anti-irritante et en Vitamine B3 apaisante.</p>
<p>Rasée de près, votre peau est confortable, douce, souple et hydratée.</p>
<p>Élaboré en vue de minimiser les risques de réactions allergiques.<br />Non comédogène.</p>
<p>Sans alc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770147926</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a3eaad50aee5930b5cb0f63c03b7f56621ba8b084414bd3fb03d60883135e23 ]]></g:image_link>
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
<title><![CDATA[ Avène Mousse Nettoyante Visage et Yeux 150ml ]]></title>
<g:id>f5a28657-f471-42b0-9a2f-9295359e90b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne mousse nettoyante visage et yeux 150ml?f5a28657-f471-42b0-9a2f-9295359e90b5 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>arce que les peaux normales à mixtes ont besoin de nettoyants adaptés, </span><strong>Avène mousse nettoyante</strong><span> est spécialement formulée pour nettoyer et démaquiller ces peaux en douceur. Cette mousse convient pour le visage et les yeux. Elle élimine les impuretés et l'excès de sébum. Grâce à sa base lavante douce sans savon, elle resserre les pores pour une peau plus nette.</span><br /><br /><span>Naturelle à 98%, la </span><strong>mousse nettoyante Avène</strong><span> e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770152371</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6191446b26883dbb1f191474b99813c73c42dc410b230624dd678091413a2630 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Rosamed  Anti-Rougeurs 30 ml ]]></title>
<g:id>6534d4ee-d510-44d5-9bcc-e49a37eed97e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne rosamed  anti-rougeurs 30 ml?6534d4ee-d510-44d5-9bcc-e49a37eed97e ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Antirougeurs Rosamed 30 ml est une crème qui se distingue comme un allié essentiel pour ceux qui font face aux rougeurs persistantes.</p>
<p>Spécialement conçue pour les peaux sensibles sujettes aux rougeurs chroniques et les peaux à tendance couperosique, elle permet de réduire les rougeurs, même installées, et aide à limiter leur réapparition.</p>
<p>Enrichi de l'eau thermale d'Avène aux propriétés apaisantes, ce concentré agit en profondeur pour calmer les sensations d'échauffement e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392920</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d1f9eff4da7754be890ac1b8b6edcc4896ee2da08e5c74c07a0d1574821c0e25 ]]></g:image_link>
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
<title><![CDATA[ Avène Rosamed Antirougeurs Concentré Hydratant Protecteur Spf50 + 30ml ]]></title>
<g:id>d26f39ec-334b-40b4-9fe8-a9a612a6a774</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne rosamed antirougeurs concentré hydratant protecteur spf50 + 30ml?d26f39ec-334b-40b4-9fe8-a9a612a6a774 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>ROSAMED ANTI-ROUGEURS SPF 50+ est un soin quotidien qui procure à la fois une action durable, à la source des rougeurs et une très haute protection contre les UVs, l'ennemi numéro 1 des peaux sujettes aux rougeurs.<br>En seulement 2 semaines, il divise par 2 la fréquence des rougeurs* et réduit de 90% les sensations de brûlure**. Il laisse la peau hydratée pendant 24h***.<br>Fruit de plus de 3 ans de recherche, notre actif, l’Angiopausine™ issu du chardon-marie, dosé à 6%, réduit l'apparence  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395235</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9fa984fe542866bee0bd7a15c67f3c5147195f0b6694aef35c9539718350bca9 ]]></g:image_link>
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
<title><![CDATA[ Avène Soin Apaisant Contour des Yeux 10ml ]]></title>
<g:id>18f6e695-4a45-4a8f-9b8e-571f555bc960</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne soin apaisant contour des yeux 10ml?18f6e695-4a45-4a8f-9b8e-571f555bc960 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin Apaisant Contour des Yeux de la marque Avène est la solution pour apaiser rougeurs, irritations et tiraillements au quotidien.</p>
<p>Elaborée à base d'actifs hydratant et anti radicalaire, d'alpha-bisabolol, la formule des laboratoires Avène possède des propriétés apaisantes et anti-irritantes, et agit sur les paupières en les décongestionnant.</p>
<p>En utilisant le soin Apaisant Contour des Yeux Avène, retrouvez des yeux et des paupières hydratés, et protégés au quotidien.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779051361</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/11c154eb2af0510cd1ec09b0439141d4462825bcf44c55b3d558fc7d2c74e3a9 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Solaire  Fluide SPF50+ 50 ml ]]></title>
<g:id>7bf4b26c-627d-4177-818a-07e5f2f4a212</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire  fluide spf50+ 50 ml?7bf4b26c-627d-4177-818a-07e5f2f4a212 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Sa texture légère Sensation peau nue du </span><span>Fluide SPF 50+</span><span> laisse un fini sec et non brillant, imperceptible sur la peau. Une</span><span> très haute protection solaire adaptée à la peau sensible normale à mixte</span><span>, exposée à un ensoleillement intense et/ou toujours sujette aux coups de soleil.</span><br /><br /><span>Au coeur du Fluide SPF 50+, fluide solaire, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée : ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149074</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c25cd8acfdb6d1f574d591282e3d3d893967dffb6cdf9a469f3b8f4ddddd2565 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire  Sunsistick KA Spf50+ ]]></title>
<g:id>1249b107-cf1d-42b8-b78c-e26e712f85ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire  sunsistick ka spf50+?1249b107-cf1d-42b8-b78c-e26e712f85ac ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>SunsiStick KA SPF 50+ offre une très haute protection solaire quotidienne aux peaux sensibles, à risque, et sujettes aux kératoses actiniques. SunsiStick KA SPF 50+ s'emploie sur les zones localisées du front, du nez, des pommettes, du crâne, du dos des mains...Une formule au fini transparent qui s'applique très facilement, même sur les zones les plus sensibles. Sa très haute tolérance cutanée a été démontrée et évaluée sous contrôle dermatologique. Rémanence longue durée*.<br />Au coeur de S ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770207576</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d64f5ef7d131d14dbc3c7ae8f2a5d69e21c05e062f6e67a02ddeb6d6070e85a5 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire - Fluide minéral teinté SPF 50+ 40 ml ]]></title>
<g:id>dc4d5713-394f-4053-9a89-16d03cb504e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire - fluide minéral teinté spf 50+ 40 ml?dc4d5713-394f-4053-9a89-16d03cb504e3 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le parfait équilibre entre une très haute protection solaire UVB-UVA (courts et longs) teintée, et une bonne tolérance pour les peaux intolérantes aux filtres chimiques et aux parfums. Son complexe 100% minéral est stable. La Provitamine E (Pré-tocophéryl), puissant antioxydant, offre une protection cellulaire contre les radicaux libres. Sa texture fluide et légère hydrate* les peaux sensibles et/ou intolérantes, et sa composition intégrant de l'Eau thermale d'Avène, aux propriétés apaisantes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770388381</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/82596c7f2a400806d2c8d68af35ffa27133892acf918025b52171684574f6538 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Brume Satinée Spf30 150ml ]]></title>
<g:id>30e5a4e5-5b17-4f57-888b-b3fd9ac05236</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire brume satinée spf30 150ml?30e5a4e5-5b17-4f57-888b-b3fd9ac05236 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Brume satinée SPF 30 offre une haute protection solaire adaptée à la peau sensible du visage et du corps. Sa formule à la texture non collante offre un fini satiné qui sublime la peau.<br />La Brume satinée SPF 30 est composée :<br />- D'un système filtrant stable pour une large protection UVB-UVA.<br />- De la Provitamine E (Pré-tocophéryl), puissant antioxydant, offrant une protection cellulaire contre les radicaux libres.<br />Son utilisation est facilitée par une vaporisation à 360°, m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770114669</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02d8cdf4a26b12aa919b1a18117be3b8714b6363f8ee762ac942822d5d0d52d6 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Cleanance spf 50+ 50ml ]]></title>
<g:id>39bdff89-7c02-491a-a25a-dd9bba7a8229</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire cleanance spf 50+ 50ml?39bdff89-7c02-491a-a25a-dd9bba7a8229 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cleanance SolaireSPF 50+ offre une protection solaire quotidienne ultra large spectre qui protège des rayons UV et au-delà dans la lumière bleue, accélératrice du vieillissement cutané, jusqu'à 450nm. Ce soin est idéal pour protéger les peaux grasses à imperfections au quotidien. Avec de la Monolaurine, actif sébo-réducteur, il permet une réduction significative des boutons et aide à prévenir l'apparition de marques dues à l'exposition solaire. Cleanance Solaire 50+ laisse sur la peau u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149548</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/906018b68093eb647d95d699c968743b0dc45b16ff1411f22ae3bc1efd9e44ed ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Crème Minérale Spf50+  50ml ]]></title>
<g:id>f88d90e3-971c-4ac6-a94b-e262360ef0a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire crème minérale spf50+  50ml?f88d90e3-971c-4ac6-a94b-e262360ef0a1 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Crème minérale SPF 50+ offre une très haute protection solaire aux peaux intolérantes aux filtres chimiques et aux parfums, ainsi qu'aux peaux fragiles des adultes et des enfants. Appliquée sur le visage, sa formule à la texture riche et onctueuse hydrate et protège la peau.<br />La Crème minérale SPF 50+ est composée :<br />- D'un filtre minéral pour une très large protection UVB-UVA stable assurant une tolérance cutanée optimale.<br />- De la Provitamine E (Pré-tocophéryl), puissant anti ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779355773</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bc01f10511908812d78d5895235fcc68b3529e2176e93e83bc44285e5847de76 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Crème Sans Parfum SPF50+ 50 ml ]]></title>
<g:id>14b3e30a-929b-41c3-9fff-2312bbfc5b89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire crème sans parfum spf50+ 50 ml?14b3e30a-929b-41c3-9fff-2312bbfc5b89 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <span>Crème SPF50+ Peaux Sensibles et Sèches sans parfum de Avène</span> est un soin haute protection pour le visage à la texture veloutée effet "peau nue" qui protège efficacement des rayons UVA/UVB et de la lumière bleue. Cette crème solaire a été formulée pour les peaux sèches et sensibles sujettes aux coups de soleil ou à une forte exposition au soleil. </p>
<p>Au cœur de la Crème SPF 50+, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre qui se compose  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149494</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ccd3a1b5b029c4b80fe1fd59a7b398b8cf28913534e5a49b3e2495a5a9a2d8f ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Crème Spf30 50ml ]]></title>
<g:id>7e9da7c9-9216-42a8-912c-7a3681429bea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire crème spf30 50ml?7e9da7c9-9216-42a8-912c-7a3681429bea ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Crème SPF 30 offre une haute protection solaire adaptée aux peaux sensibles au soleil et/ou souvent sujettes aux coups de soleil. Elle s'emploie en relais d’un très haut indice de protection solaire (SPF 50+). Sa formule à la texture riche et onctueuse hydrate la peau sensible sèche du visage.<br />Au coeur de la Crème SPF 30, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée :<br />- D'un système filtrant breveté contenant seulement quatre filtr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779228633</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3dc4b61bf8f45059acdd69ab1bd475847bb80c4aaddd1674c8681a1c3564156 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Crème Spf50+ 50 ml ]]></title>
<g:id>2bedbe34-de30-4f75-a0fd-d13ce6a935d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire crème spf50+ 50 ml?2bedbe34-de30-4f75-a0fd-d13ce6a935d9 ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <span>Crème SPF50+ Peaux Sensibles et Sèches de Avène</span> est un soin haute protection pour le visage à la texture veloutée effet "peau nue" qui protège efficacement des rayons UVA/UVB et de la lumière bleue. Cette crème solaire a été formulée pour les peaux sèches et sensibles sujettes aux coups de soleil ou à une forte exposition au soleil. </p>
<p>Au cœur de la Crème SPF 50+, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre qui se compose :<br />- D'u ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149487</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e04684580741ce9452fe8eb9c95864fbd200cba6a7f02e3b6feabd47bd83ec07 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Crème Teintée SPF50+ 50 ml ]]></title>
<g:id>422d68d6-397a-4ade-a0e9-0131aa4efa3a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire crème teintée spf50+ 50 ml?422d68d6-397a-4ade-a0e9-0131aa4efa3a ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>La <span>Crème Teintée SPF50+ Peaux Sensibles et Sèches de Avène</span> est un soin haute protection pour le visage à la texture veloutée effet "peau nue" qui protège efficacement des rayons UVA/UVB et de la lumière bleue. Cette crème solaire légèrement teintée a été formulée pour les peaux sèches et sensibles sujettes aux coups de soleil ou à une forte exposition au soleil. </p>
<p>Au cœur de la Crème SPF 50+, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770149524</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aad83844a301bab657957b50c7f596165fb04efa01f20ef619b2fb36cefe9d3e ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Fluide Anti Pigmentation Spf 50+ 40ml ]]></title>
<g:id>395db866-a718-433a-8f98-80862521152a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire fluide anti pigmentation spf 50+ 40ml?395db866-a718-433a-8f98-80862521152a ]]></link>
<g:price><![CDATA[ 2050.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le fluide Anti-pigmentation SPF50+ offre une trés haute protection quotidienne contre les UVB, les UVA et la lumière bleue HEV pour prévenir les tâches pigmentaires photo induites<br><br>TRES HAUTE PROTECTION :<br>Ce soin intègre le TriAsorB, filtre solaire large spectre qui protège au delà des UVs, jusqu'à la lumière bleue. Il protège ainsi des tâches pigmentaires photo induites<br><br>TEXTURE FLUIDE :<br>Il offre une hydration avec une texture légère avec un effet peau nue, parfaite comme b ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770397451</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/467db474e8ea150e0ea3d9651bc362a0a66820521f4aac895179fdd2cecea155 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Fluide Anti-Age Spf 50 40ml ]]></title>
<g:id>61008b1c-e634-4380-90b2-202dc1b4f43c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire fluide anti-age spf 50 40ml?61008b1c-e634-4380-90b2-202dc1b4f43c ]]></link>
<g:price><![CDATA[ 2050.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le fluide Anti-âge SPF50 offre une haute protection quotidienne contre les UVB, les UVA et la lumière bleue HEV pour prévenir le photovieillissement.<br><br>HAUTE PROTECTION :<br>Ce soin intègre le TriAsorB, filtre solaire large spectre qui protège au delà des UVs, jusqu'à la lumière bleue. Il protège ainsi de l'accélération du vieillissement cutané photo induit.<br><br>ANTI-AGE :<br>Ce soin hydrate, prévient et corrige les signes de l'âge photo induits et améliore la fermeté.<br><br>TEXTURE  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770396300</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d699ef6011dcffd097635608ff7448e4032e6728d024c0cd05b88313dac18f7 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Fluide Anti-Imperfections Spf 50 40ml ]]></title>
<g:id>e6bcbfe7-104d-407b-a83c-c905baae0ff9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire fluide anti-imperfections spf 50 40ml?e6bcbfe7-104d-407b-a83c-c905baae0ff9 ]]></link>
<g:price><![CDATA[ 2050.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le fluide Anti-imperfection SPF50 offre une haute protection quotidienne contre les UVB, les UVA et la lumière bleue HEV pour prévenir des marques post acné.<br><br>HAUTE PROTECTION :<br>Ce soin intègre le TriAsorB, filtre solaire large spectre qui protège au delà des UVs, jusqu'à la lumière bleue. Il protège ainsi des marques post acné<br><br>TEXTURE FLUIDE :<br>Il offre une hydration avec une texture légère avec un fini invisible, parfaite comme base de maquillage.<br><br>ANTI-IMPERFECTION  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770397437</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/16109e27226678141a6a42381c4ac8b590090bbeeef6ffd2e55c0db6cd144444 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Fluide Minéral SPF50+ 40ml ]]></title>
<g:id>9002f51b-2930-428b-a3c7-d5a561922a38</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire fluide minéral spf50+ 40ml?9002f51b-2930-428b-a3c7-d5a561922a38 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le parfait équilibre entre une très haute protection solaire UVB-UVA (courts et longs), et une bonne tolérance pour les peaux intolérantes et allergiques aux filtres chimiques et aux parfums.</p>
<p>Son complexe 100% minéral est stable.</p>
<p>La Provitamine E (Pré-tocophéryl), puissant antioxydant, offre une protection cellulaire contre les radicaux libres.</p>
<p>Sa texture fluide et légère hydrate* les peaux sensibles et/ou intolérantes, et sa composition intégrant de l'Eau thermale d'Avèn ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770148671</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f589c46592cbfa08ad9346802c12bf7892f25e331187397e43cc0b624482dfa9 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Fluide Sport Spf 50+ 100ml ]]></title>
<g:id>5712f365-8f2f-4baa-b47c-dae6138828d7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire fluide sport spf 50+ 100ml?5712f365-8f2f-4baa-b47c-dae6138828d7 ]]></link>
<g:price><![CDATA[ 1470.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fluide sport spf 50+ le très haute protection solaire pour les peaux sensibles, adaptée aux activités sportives, même les plus intenses.<br />Visage &amp; corps.</p>
<p><br />Au coeur du fluide sport spf 50+, l'association exclusive sunsitive® protection, issue de la recherche pierre fabre :</p>
<p>1. Système filtrant breveté contenant seulement 4 filtres solaires pour une très large protection uvb-uva stable et efficace dans le temps, et une tolérance cutanée optimale.<br />2. Complexe antio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770101362</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dc6ecfd92e19d6a763ea661ac0d5c5f278cc6ec36ed90cf32bd368e6382bd9b1 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Huile Spf 30 200ml ]]></title>
<g:id>9f5fb019-4654-489d-87cc-82e1bda7719a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire huile spf 30 200ml?9f5fb019-4654-489d-87cc-82e1bda7719a ]]></link>
<g:price><![CDATA[ 1940.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Huile solaire SPF 30 offre une haute protection solaire adaptée à la peau sensible du corps. Sa formule à la texture non collante offre un fini satiné qui sublime la peau.<br>L'Huile solaire SPF 30 est composée :<br>- D'un système filtrant stable pour une large protection UVB-UVA.<br>- De la Provitamine E (Pré-tocophéryl), , puissant antioxydant, offrant une protection cellulaire contre les radicaux libres.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770389623</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a34be361276f74e3d674ec8f2a78af654201109be8a839d37643c20a9a17291d ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Lait Enfant Spf50+ 250ml ]]></title>
<g:id>69cdfc2d-5a02-42d5-b0e3-95d24bc000bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire lait enfant spf50+ 250ml?69cdfc2d-5a02-42d5-b0e3-95d24bc000bd ]]></link>
<g:price><![CDATA[ 1660.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait enfant SPF 50+ offre une très haute protection solaire à la peau sensible du visage et du corps des enfants. Une texture barrière anti-agressions, fluide, légère et facile à appliquer. Une formule très résistante à l'eau dotée d'un film protecteur renforcé.<br />Au coeur du Lait enfant SPF 50+ , lait solaire enfant,l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée :<br />- D'un système filtrant breveté contenant seulement quatre filtres sola ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770202106</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98b9efc8eab0d80935b7ca53e9ecace95e6b58bcebc5889669ebfd10cae54bae ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Lait Minéral Spf50+ 100ml ]]></title>
<g:id>460d17bb-8ce8-4e42-93b1-84fa0fff426b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire lait minéral spf50+ 100ml?460d17bb-8ce8-4e42-93b1-84fa0fff426b ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait minéral SPF 50+ offre une très haute protection solaire adaptée aux peaux intolérantes aux filtres chimiques et aux parfums, ainsi qu'aux peaux fragiles des adultes et des enfants. Appliqué sur le visage et le corps, le Lait minéral SPF 50+ enveloppe la peau d'une texture onctueuse qui l'hydrate et la protège.<br />Au coeur du Lait minéral SPF 50+, lait protection solaire, un complexe d'actifs unique, issu de la Recherche Pierre Fabre et composé :<br />- D'un filtre minéral pour une t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779355872</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28c32633c597cff668df4393138eeb6e2b33ce9beb7cc8da06e1a9bee76d8c27 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Lait Spf50+ 250ml ]]></title>
<g:id>e579ba79-10af-4a42-84db-2acc72438d7a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire lait spf50+ 250ml?e579ba79-10af-4a42-84db-2acc72438d7a ]]></link>
<g:price><![CDATA[ 1660.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait SPF 50+ offre une très haute protection solaire aux peaux sensibles exposées à un ensoleillement intense. Le Lait SPF 50+ s'applique sur le visage et le corps. Sa texture hydra-protectrice apporte une sensation de confort immédiate et durable, un effet anti-dessèchement et une hydratation durant six heures.<br />Au coeur du Lait SPF 50+ , lait solaire, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée :<br />- D'un système filtrant breveté c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100747</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5047ac27878fe534189e75d761c079a6ff7af7461ede0b5cc367d2aa12a940e ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Reflex  Spf 50+ 30ml ]]></title>
<g:id>04290d0b-352b-4b3c-b4ef-abfd30c3cbf7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire reflex  spf 50+ 30ml?04290d0b-352b-4b3c-b4ef-abfd30c3cbf7 ]]></link>
<g:price><![CDATA[ 960.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Réflexe solaire 50+ offre aux peaux les plus sensibles une très haute protection solaire contre les UVA, les UVB et la lumière bleue (HEVL). Conçu pour la protection du visage et du corps de toute la famille, il s'adapte aux conditions les plus intenses (haute altitude, climat tropical, forte humidité...). Il s'applique à tout moment de la journée et pénètre la peau en 3 secondes*. Sa texture légère laisse sur la peau un fini sec, imperceptible et non brillant. 100% photostable, il rési ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770388961</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6d2a5b734a75cb50c5a1216b7327675ae1e742646d928c5c6eb681d21fd6e51 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Spray Enfant SPF50 200ml ]]></title>
<g:id>9ed37977-c9b1-4f6b-ba5c-fe161623b21a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire spray enfant spf50 200ml?9ed37977-c9b1-4f6b-ba5c-fe161623b21a ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Spray enfant SPF 50+ est parfaitement adapté à la peau sensible des enfants. Grâce à sa Texture barrière anti-agressions*, le Spray enfant SPF 50+ offre une texture fluide et légère à appliquer et un film protecteur renforcé, très résistant à l'eau.<br />Au coeur du Spray enfant SPF 50+, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée :<br />- D'un système filtrant breveté contenant seulement quatre filtres solaires, pour une très large protect ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770202090</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ade30ff3208a23a2e665941adba12df2126fdc76fce07f54fe1e8a323b4a1043 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Spray Famille SPF50+ 400 ml ]]></title>
<g:id>0ec81284-3986-4f53-ab28-bb87d631b143</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire spray famille spf50+ 400 ml?0ec81284-3986-4f53-ab28-bb87d631b143 ]]></link>
<g:price><![CDATA[ 2690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le SPRAY ENFANT SPF50+ offre une protection optimale contre les rayons UV pour la peau sensible des enfants, à l'application facile et rapide.<br><br>TRES HAUTE PROTECTION :<br>L'expertise Avène pour protéger des UVB, UVA et des radicaux libres avec notre système filtrant breveté Sunsitive Protection®.<br><br>TRIPLE RESISTANCE :<br>Très résistant à l'eau et résistant au sable et à la sueur.<br><br>HAUTE TOLERANCE PEDIATRIQUE :<br>Testé sous contrôle dermatologique et pédiatrique pour assurer  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770396324</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27fe43e9617edaafe2c3902e9b7a86a3458c136a6b06c04f0ffaa0566938ac18 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Spray SPF50+ Toucher Sec 200ml ]]></title>
<g:id>5c132bd8-7dd9-4e86-865f-c7396aa55937</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire spray spf50+ toucher sec 200ml?5c132bd8-7dd9-4e86-865f-c7396aa55937 ]]></link>
<g:price><![CDATA[ 1775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le SPRAY SOLAIRE SPF50 100% INVISIBLE* allie haute protection et sensorialité grâce à sa texture légère sur la peau.<br><br>HAUTE PROTECTION :<br>Une protection optimale SPF50 contre les UVB et les UVA qui résiste à l'eau, au sable et à la sueur.<br><br>TEXTURE 100% INVISIBLE* :<br>Une texture transformative "lait en eau" qui permet une absorption immédiate, sans effet blanc, même sur peau mouillée. Son efficacité hydratante longue durée** laisse un effet frais à la peau.<br><br>TOUCHER SEC : ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770396331</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/04d22bab8243fafef2fc1321c49a803196206d1e0ebdef3e81f5cc7d67e06d71 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Spray Spf30  200ml ]]></title>
<g:id>6d43cef8-a8c0-45c7-9a0f-817524d455f1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire spray spf30  200ml?6d43cef8-a8c0-45c7-9a0f-817524d455f1 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Spray SPF 30 offre une haute protection solaire à la peau sensible du visage et du corps, souvent sujette aux coups de soleil.<br />Au coeur du Spray SPF 30, spray protection solaire, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée :<br />- D'un système filtrant breveté contenant seulement quatre filtres solaires, pour une très large protection UVB-UVA stable et une tolérance cutanée optimale.<br />- De Provitamine E (Pré-tocophéryl), puissant  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282779402927</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78031d13463e794b37d10fa60d611dab616d9c4f0b73bd2251a526d147cd10d9 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Spray Spf50+ 200ml ]]></title>
<g:id>a43ce7b9-f65b-4bae-9058-373040a1b149</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire spray spf50+ 200ml?a43ce7b9-f65b-4bae-9058-373040a1b149 ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Spray SPF 50+ offre une très haute protection solaire aux peaux sensibles exposées à un ensoleillement intense. Adaptée au visage et au corps, sa texture hydra-protectrice procure une sensation de confort immédiate et durable, un effet anti-dessèchement et une hydratation durant six heures.<br />Au coeur du Spray SPF 50+ , spray solaire, l'association exclusive Sunsitive® protection, issue de la Recherche Pierre Fabre et composée :<br />- D'un système filtrant breveté contenant seulement q ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770100617</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e20a54722fddfcd7373e1b74c31c29c0f4fe9b66110129c2c44e2d8adb69e70 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Stick Lèvres Spf50+ ]]></title>
<g:id>5c755a0d-1552-4ac5-ac14-d9a350b4fd62</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire stick lèvres spf50+?5c755a0d-1552-4ac5-ac14-d9a350b4fd62 ]]></link>
<g:price><![CDATA[ 620.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Stick lèvres SPF 50+ offre une très haute protection solaire aux lèvres sensibles. Un soin 2-en-1 qui protège et hydrate durablement. Sa texture fondante et non grasse laisse un fini transparent sur les lèvres. Les lèvres sont nourries et douces. Sa très bonne tolérance cutanée a été démontrée et évaluée sous contrôle dermatologique.<br />Le Stick lèvres SPF 50+ est composé :<br />- D'un système filtrant pour une très large protection UVB-UVA.<br />- D'un complexe antioxydant unique (Provi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770204797</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a5f4dab47c2f605ae53bdc2f786eb1e38b9ea0d61f2aad7b441ed5d88f34c24 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Stick Zones Sensible Spf50+ ]]></title>
<g:id>76db8ca3-efc3-41cb-9330-da1811a979bc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire stick zones sensible spf50+?76db8ca3-efc3-41cb-9330-da1811a979bc ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Stick zones sensibles SPF 50+ est parfaitement adapté aux zones sensibles localisées du visage et du corps de toute la famille, mais aussi des sportifs. Facile à appliquer*, très résistant à l'eau et résistant également à la sueur*, il dispose d'une texture non grasse qui laisse un fini transparent sur la peau*. Au coeur du Stick zones sensibles SPF 50+, un complexe d'actifs unique, issu de la Recherche Pierre Fabre :<br />- Un Système Filtrant stable pour une très large protection UVB-UVA ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770204803</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/77bf544aec74ca0213188aae33005b2eaf69ce7b6b3d529bb60c0efdaf23b1cc ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Ultra Fluid Invisible SPF50 Sans Parfum 50ml ]]></title>
<g:id>050e1065-c679-435f-80d0-772b21b02590</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire ultra fluid invisible spf50 sans parfum 50ml?050e1065-c679-435f-80d0-772b21b02590 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ultra Fluid INVISIBLE SPF50 offre une haute protection quotidienne contre les UVB, les UVA et la lumière bleue HEV pour prévenir le photovieillissement.</span><br /><br /><span>HAUTE PROTECTION :</span><br /><span>Ce soin intègre le TriasorB, filtre solaire large spectre qui protège au delà des UVs, jusqu'à la lumière bleue. Il protège ainsi de l'accélération du vieillissement cutané.</span><br /><br /><span>TEXTURE ULTRA FLUIDE :</span><br /><span>Sa technologie [waterlike] offre une t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392654</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0473cd255b4892b41702a9ddfa72033173410677e06f6b56cf8f73b9a8eeb868 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Ultra Fluid Perfecteur SPF50+ Sans Parfum 50ml ]]></title>
<g:id>5f03eea6-d405-4cc4-9045-023e79ef26df</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire ultra fluid perfecteur spf50+ sans parfum 50ml?5f03eea6-d405-4cc4-9045-023e79ef26df ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ultra Fluid Perfecteur SPF50+ offre une très haute protection quotidienne contre les UVB, les UVA et la lumière bleue HEV pour prévenir le photovieillissement.</span><br /><br /><span>TRES HAUTE PROTECTION :</span><br /><span>Ce soin intègre le TriasorB, filtre solaire large spectre qui protège au delà des UVs, jusqu'à la lumière bleue. Il protège ainsi de l'accélération du vieillissement cutané.</span><br /><br /><span>TEXTURE ULTRA FLUIDE :</span><br /><span>Sa technologie [waterlike] ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392692</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ed225243362d67e29b22ea73ef1fc1a215ab6adf266014a1b8b50b096d16872a ]]></g:image_link>
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
<title><![CDATA[ Avène Solaire Ultra Fluid Radiance Spf 50+ 50ml ]]></title>
<g:id>b9fd4594-b4bc-4a8b-875a-095d3f5eabf3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaire ultra fluid radiance spf 50+ 50ml?b9fd4594-b4bc-4a8b-875a-095d3f5eabf3 ]]></link>
<g:price><![CDATA[ 1540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ultra Fluid RADIANCE SPF50 offre une trés haute protection quotidienne contre les UVB, les UVA et la lumière bleue HEV pour prévenir le photovieillissement.</p><h3>Bénéfices</h3><p>Photoprotecteur : des filtres UVB-UVA photostables qui luttent contre les effets nocifs du rayonnement solaire.<br>Texture ultra fluide &amp; légère : permet une application facile et aérienne.<br>Technologie d’encapsulation teintée de micro-pigments qui se libèrent à l'applicationpour révéler un teint frais et lum ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770397697</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7da99eecfe3df1ef43326ce07a586917b8a11692cd7ca2dd3b0c49d2401da5b0 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaires Crème Solaire Visage Spf 50+ Sans Parfum 50 ml + Eau Thermale Offerte 50 ml ]]></title>
<g:id>80266247-3564-47ad-a634-efce583f51ae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaires crème solaire visage spf 50+ sans parfum 50 ml + eau thermale offerte 50 ml?80266247-3564-47ad-a634-efce583f51ae ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le pack Avène comprenant une Crème Solaire SPF 50+ sans parfum (50 ml) et une Eau Thermale d’Avène (50 ml) est spécialement conçu pour offrir une protection solaire optimale et un soin apaisant aux peaux sensibles. Il allie la technologie avancée de photoprotection d’Avène à l’effet calmant et rafraîchissant de son eau thermale reconnue mondialement.</p><p></p><p>Cette crème solaire visage assure une très haute protection SPF 50+, idéale pour les peaux sensibles et sèches exposées au soleil.  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770399455</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d0d279507783f9e1a7cdf4a4e000246d02314270c3c6e56a6545f2093d7393a9 ]]></g:image_link>
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
<title><![CDATA[ Avène Solaires Lait Enfant SPF50+ 250ml ]]></title>
<g:id>3ba5abfb-03e0-4b61-9cd8-534afba25c1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaires lait enfant spf50+ 250ml?3ba5abfb-03e0-4b61-9cd8-534afba25c1b ]]></link>
<g:price><![CDATA[ 1795.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><p>Le LAIT ENFANT SPF50+ offre une protection optimale contre les rayons UV pour la peau sensible des enfants, à l'application facile et rapide.<br><br>TRES HAUTE PROTECTION :<br>L'expertise Avène pour protéger des UVB, UVA et des radicaux libres avec notre système filtrant breveté Sunsitive Protection®.<br><br>TRIPLE RESISTANCE :<br>Très résistant à l'eau et résistant au sable et à la sueur.<br><br>HAUTE TOLERANCE PEDIATRIQUE :<br>Testé sous contrôle dermatologique et pédiatrique pour a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770397079</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c55aeb3c92dd05a94624babdb814a37ad5841e0653e07d8162524247f8af0a9 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > SOLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Solaires Soin Corps Intense Protect SPF 50+ 150ML ]]></title>
<g:id>1d1c1fbd-572d-4edb-b2ff-6d60d614f892</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne solaires soin corps intense protect spf 50+ 150ml?1d1c1fbd-572d-4edb-b2ff-6d60d614f892 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le fluide INTENSE PROTECT SPF50+ est la protection solaire très large spectre adaptée aux peaux les plus vulnérables au soleil et aux conditions d'ensoleillement les plus intenses.</p><p>TRES HAUTE PROTECTION :<br>Ce soin intègre le TriAsorB, filtre solaire large spectre qui protège au delà des UVB et UVA, jusqu'à la lumière bleue HEV. Il protège ainsi de l'accélération du vieillissement cutané.<br><br>TRES HAUTE TOLERANCE<br>Intense Protect 50+ convient aux bébés à partir de 6 mois, aux enfa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770395938</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/268fe506a9208b8976ab91a0ed1aafd337a93a63a72ba71483c15fa0f0478ec6 ]]></g:image_link>
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
<title><![CDATA[ Avène Spray Solaire Famille SPF 50+ 2000ml ]]></title>
<g:id>c616cd44-f62a-47e1-9856-6da52bff0dd5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne spray solaire famille spf 50+ 2000ml?c616cd44-f62a-47e1-9856-6da52bff0dd5 ]]></link>
<g:price><![CDATA[ 1775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le SPRAY ENFANT SPF50+ offre une protection optimale contre les rayons UV pour la peau sensible des enfants, à l'application facile et rapide.<br><br>TRES HAUTE PROTECTION :<br>L'expertise Avène pour protéger des UVB, UVA et des radicaux libres avec notre système filtrant breveté Sunsitive Protection®.<br><br>TRIPLE RESISTANCE :<br>Très résistant à l'eau et résistant au sable et à la sueur.<br><br>HAUTE TOLERANCE PEDIATRIQUE :<br>Testé sous contrôle dermatologique et pédiatrique pour assurer  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770396317</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a7105ca7daee1fedb9612349e8496fb4e60b635e56e282d6c1bafb4852d43a5 ]]></g:image_link>
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
<title><![CDATA[ Avène Sunsimed KA Dm 80ml ]]></title>
<g:id>befebe3e-912e-4649-a58a-ab5f22a9d48a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne sunsimed ka dm 80ml?befebe3e-912e-4649-a58a-ab5f22a9d48a ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Sunsimed KA est un dispositif médical très haute protection SPF50+ qui contribue à prévenir les lésions cancéreuses (hors mélanomes) et précancéreuses de type kératose actinique ainsi que les lésions d'ADN photo-induites.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392760</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/67754bcaf02462147fb7d568d73393731726581a9b60705ea5ddfd17a4964d1c ]]></g:image_link>
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
<title><![CDATA[ Avène Sunsimed Pigment - 80 ml ]]></title>
<g:id>d72bfa35-29fb-4aa1-8468-f092cffb0b56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne sunsimed pigment - 80 ml?d72bfa35-29fb-4aa1-8468-f092cffb0b56 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sunsimed Pigment, un écran solaire SPF 50+ développé par Avène, cible les peaux sujettes aux troubles pigmentaires comme les lentigos, le mélasma et les taches de rousseur.</p>
<p>Pourquoi opter pour Sunsimed Pigment d'Avène ? Cette protection solaire convient à tous les types de peau, particulièrement celles sensibles aux problèmes de pigmentation. Elle protège la peau des UVA, UVB et de la lumière bleue, prévenant ainsi le photo-vieillissement, les taches brunes et les dommages à l'ADN. De  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392791</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39087ca0fc0f02ffcc6953710ebbf009b820e524c48513e00875233d9c4f431b ]]></g:image_link>
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
<title><![CDATA[ Avène Tolerance Control Crème Apaisante Restauratrice 40ml ]]></title>
<g:id>40df6ff0-a156-495e-9100-09e2d75f3531</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne tolerance control crème apaisante restauratrice 40ml?40df6ff0-a156-495e-9100-09e2d75f3531 ]]></link>
<g:price><![CDATA[ 1795.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Tolérance Control crème apaisante pour peaux hypersensibles, réactives, intolérantes ou allergiques calme la peau en 30 secondes*. Grâce au D-Sensinose™ ultra-calmant, nouvel actif postbiotique breveté**, ce soin soulage les sensations d'échauffement, de tiraillements, picotements, d'inconfort. La peau est intensément hydratée et sa barrière restaurée en 48h***. Ce soin haute tolérance sans parfum ni conservateur, bénéficie d'un nouveau tube Cosmétique Stérile® qui préserve la formule d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770138801</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d75616ab0ae724364176626376a753669ba0a314b8cbcccdaf4db50631c429f7 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Tolérance Control Baume Restaurateur 40ml ]]></title>
<g:id>77bccaa5-d7d2-4348-acca-e50dcdbc1bef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne tolérance control baume restaurateur 40ml?77bccaa5-d7d2-4348-acca-e50dcdbc1bef ]]></link>
<g:price><![CDATA[ 1795.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Baume apaisant pour les peaux hypersensibles, réactives, intolérantes ou allergiques. Grâce à sa triple innovation actif, formule et packaging, ce soin calme la peau en 30 secondes*, restaure sa barrière en 48h*** et diminue durablement l'hyper-réactivité cutanée. Haute tolérance.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770138856</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/af24c776bb289853b42057de35c0e3766e925cfd919c17593f3f1735163c06b1 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Tolérance Control Lotion Nettoyante Gélifiée 200ml ]]></title>
<g:id>5a80dae6-bc48-443d-8a84-844719bedb8e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne tolérance control lotion nettoyante gélifiée 200ml?5a80dae6-bc48-443d-8a84-844719bedb8e ]]></link>
<g:price><![CDATA[ 870.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette lotion nettoyante pour peaux sensibles à réactives nettoie et démaquille en douceur le visage, les yeux et les lèvres. Elle élimine les impuretés accumulées au cours de la journée sans sur-irriter la peau ni la dessécher. Nettoyant démaquillant sans parfum et sans rinçage, sa texture légèrement gélifiée garantit confort et douceur aux peaux les plus sensibles.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770142280</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3130935811566fe4baed36316d739fcd2e56e029d21439be6df5e9c8b726e187 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Tolérance Control Lotion Nettoyante Gélifiée 400ml ]]></title>
<g:id>11f60a9a-72b8-4309-8cf6-87cfd875c942</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne tolérance control lotion nettoyante gélifiée 400ml?11f60a9a-72b8-4309-8cf6-87cfd875c942 ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Nettoie et démaquille en un seul geste, sans rinçage<br /> </li>
<li>N’agresse pas la peau, sans parfum<br /> </li>
</ul><p>Bénéficiant d’une texture très douce, cette lotion fond sur la peau. Hautement concentrée en Eau thermale d’Avène, elle nettoie délicatement et respecte</p>
<p>la barrière cutanée, en évitant les sensations de tiraillements et d’irritations.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770142273</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/43f1842165630adfc6e9e1f2a0d37f81c3b04f82cd499345c7ea3c45690016d7 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Vitamin Activ Cg Crème 50ml ]]></title>
<g:id>fc8185d0-9496-4e46-a2de-e4e3cdd5a88b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne vitamin activ cg crème 50ml?fc8185d0-9496-4e46-a2de-e4e3cdd5a88b ]]></link>
<g:price><![CDATA[ 3390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Grâce à l'action de la Vitamine Cg*, une forme hautement stable de la vitamine C pure, de la Niacinamide et de l'Acide Hyaluronique, la Crème intensive éclat corrige les rides, unifie et illumine le teint.</span><span>Le vieillissement cellulaire induit un déclin progressif des fonctions tissulaires. Au niveau cutané, la conséquence est l'apparition de caractéristiques cliniques telles que sécheresse, taches pigmentaires, relâchement, rides… Les Laboratoires Dermatologiques Avène créent ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393507</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b7f72abe705859587ccfd5468c6a4fa0c274ef2fce4009f2f66c3e6f117a9ea ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Vitamin Activ Cg Sérum 30ml ]]></title>
<g:id>1b27cc7f-ec5e-4d45-8ff6-d70df5e0b661</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne vitamin activ cg sérum 30ml?1b27cc7f-ec5e-4d45-8ff6-d70df5e0b661 ]]></link>
<g:price><![CDATA[ 3090.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p-info__description">Ce sérum lisse les rides, booste l’éclat de la peau et diminue l’apparence des taches brunes grâce au trio d’actifs [Vitamine Cg* + Bakuchiol + Niacinamide].<span>Le vieillissement cellulaire induit un déclin progressif des fonctions tissulaires. Au niveau cutané, la conséquence est l'apparition de caractéristiques cliniques telles que sécheresse, taches pigmentaires, relâchement, rides… Les Laboratoires Dermatologiques Avène créent le sérum correcteur éclat, conce ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393477</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad9d8440e44e294f2c7955ea560f3035b487096332a2af12ddda3aa534d5b2ac ]]></g:image_link>
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
<title><![CDATA[ Avène Vitamine Activ Cg Crème Intensive  Recharge 50 ml ]]></title>
<g:id>a2fd9c4c-e78a-433e-9e7e-410b52f01eff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne vitamine activ cg crème intensive  recharge 50 ml?a2fd9c4c-e78a-433e-9e7e-410b52f01eff ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène Vitamine Activ Cg Crème Intensive Éclat Recharge 50 ml est une crème à la formule riche en vitamine Cg, reconnue pour ses propriétés éclaircissantes, qui revitalise la peau tout en atténuant les taches pigmentaires. Cette crème intensive éclat apporte une hydratation profonde, laissant la peau visiblement plus lumineuse et uniforme. Son pouvoir antioxydant protège la peau des agressions environnementales, offrant un teint éclatant de santé. Un indispensable pour révéler la beauté nature ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770393514</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a463afb9d7a2d535c2276e7c2903b1533f06e6bd23ae2a2d96de96bb81f31189 ]]></g:image_link>
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
<title><![CDATA[ Avène XeraCalm AD Baume Relipidant 400 ml ]]></title>
<g:id>ca482a8a-8001-4fd8-918a-9127bf2ca8c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm ad baume relipidant 400 ml?ca482a8a-8001-4fd8-918a-9127bf2ca8c2 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène XeraCalm AD Baume Relipidant 400 ml visage et corps a été spécialement conçu pour nourrir et apaiser la peau du nourrisson, de l'enfant, et de l'adulte en cas de sécheresses sévères, de peaux sujettes aux irritations, rougeurs et démangeaisons et de peaux à tendance atopique.<br />Ce baume relipidant formulé avec un minimum d'ingrédients est composé de :</p>
<ul><li>complexe l-modulia qui diminue les sensations de démangeaisons dues au dessèchement cutané et apaise les irritations et ro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770154566</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df69dc8279be190f036047ec57b5d1fdda07f10aa9101267831208fce085f2c2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène XeraCalm Nutrition Lait Hydratant 100 ml ]]></title>
<g:id>98812f3a-fff3-4ab3-aa71-28ca767e8ce9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm nutrition lait hydratant 100 ml?98812f3a-fff3-4ab3-aa71-28ca767e8ce9 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avène XeraCalm Nutrition Lait Hydratant 100 ml est un soin hydratant quotidien haute tolérance pour les peaux sensibles et sèches de toute la famille*. Ce lait nourrit, hydrate la peau et possède une action anti-desséchement grâce à sa formule enrichie en huile de chardon marie.&nbsp; Il permet alors de renforcer la barrière cutanée et apaiser les tiraillements.</p><p>Sa texture combinant la richesse d'une crème et la fluidité d'un lait permet une application rapide et un habillage express po ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155167</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb624804ca3fd40af9000ee87726ee4e3dc8a8a8c2a207a1a9e305d1642d4532 ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm A.D Baume Relipidant 200ml ]]></title>
<g:id>f6b87e21-9386-4376-a991-04ee7c1b1d80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d baume relipidant 200ml?f6b87e21-9386-4376-a991-04ee7c1b1d80 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <div class="block-content">
<p>XERACALM A.D Baume relipidant soulage les peaux très sèches sujettes à l’eczéma atopique et aux démangeaisons grâce à l’association d’actifs d’exception choisis pour leur efficacité et leur innocuité. I-modulia®, 1er actif postbiotique issu de l’eau thermale d’Avène diminue les démangeaisons*, stimule les défenses de la peau et lutte contre les irritations. Les Cer-omega, lipides semblables à ceux de la peau agissent sur la sécheresse et restaurent la barrière cuta ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770154559</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a432b7d27dd5f8d38b1a199198621df336309de9c50d951b1dd131a74c978a07 ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm A.D Baume Relipidant 400ml ]]></title>
<g:id>e53c8722-a7ef-4122-887a-64735f2cc83f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d baume relipidant 400ml?e53c8722-a7ef-4122-887a-64735f2cc83f ]]></link>
<g:price><![CDATA[ 2090.40 EUR ]]></g:price>
<description><![CDATA[ <p>XERACALM A.D Baume relipidant soulage les peaux très sèches sujettes à l’eczéma atopique et aux démangeaisons grâce à l’association d’actifs d’exception choisis pour leur efficacité et leur innocuité. I-modulia®, 1er actif postbiotique issu de l’eau thermale d’Avène diminue les démangeaisons*, stimule les défenses de la peau et lutte contre les irritations. Les Cer-omega, lipides semblables à ceux de la peau agissent sur la sécheresse et restaurent la barrière cutanée. Grâce à la Cosmétique S ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770114195</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c123a8fbafd265dc60833629a2d813a1e65af6d5103dcacfbae8db04f7ed410c ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm A.D Crème Relipidante 200ml ]]></title>
<g:id>fe71454f-efc8-45fd-953a-49bd6c8c51c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d crème relipidante 200ml?fe71454f-efc8-45fd-953a-49bd6c8c51c6 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>XeraCalm A.D Crème relipidante est spécifiquement formulée et indiquée pour les peaux sèches sujettes à l'eczéma atopique et aux démangeaisons du nourrison, de l'enfant et de l'adulte. Elle bénéficie de la technologie Cosmétique Stérile. 0% CONSERVATEUR</span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770154580</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8350064c39530205ce90b9e2fd5f2f262971ba99eb05142446992c4388954c6 ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm A.D Crème Relipidante 400 ml ]]></title>
<g:id>cb9c95d4-761c-40a4-bda6-8b19af384bb5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d crème relipidante 400 ml?cb9c95d4-761c-40a4-bda6-8b19af384bb5 ]]></link>
<g:price><![CDATA[ 2110.00 EUR ]]></g:price>
<description><![CDATA[ <p>Xeracalm a.d crème relipidante restaure la fonction barrière de la peau et le confort cutané. elle apaise les sensations de démangeaisons dues à la sécheresse de la peau et respecte la flore cutanée.</p>
<p><br />une formule unique et performante :<br />-Complexe i-modulia®, le 1er actif biotechnologique issu de l'eau thermale d'avène : diminue les sensations de démangeaisons*, stimule les défenses de la peau, anti-irritant<br />-Cer-omega, lipides semblables à ceux de la peau : nourrit et re ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770154597</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e676a5f8b89fab83319dc6b1d140f2aa2f8102ff72be9f4fbd0116f1c5af96d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Xeracalm A.D Huile Lavante 100ml ]]></title>
<g:id>408d5189-74ef-4d72-914a-f657d1899232</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d huile lavante 100ml?408d5189-74ef-4d72-914a-f657d1899232 ]]></link>
<g:price><![CDATA[ 450.00 EUR ]]></g:price>
<description><![CDATA[ <p>XeraCalm A.D Huile lavante relipidante nettoie en douceur et apaise les peaux très sèches sujettes à l'eczéma atopique et aux démangeaisons. Premier geste du rituel anti-démangeaisons, elle laisse la peau douce, confortable et respecte le microbiome cutané. Sans savon et au pH physiologique, elle peut être utilisée en phase de poussée sur le visage, le corps et le cuir chevelu. Sa formule combine le 1er actif postbiotique issu de l’Eau thermale d’Avène, I-modulia®, qui diminue les démangeaiso ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770389876</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/325f3cbca8d77583eeab8f341c4d8cd58adb7fb88c34bbd400ea4c8b7816b4c5 ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm A.D Huile Lavante Relipidante 750 ml ]]></title>
<g:id>a84c667a-b9e1-417a-b5b6-6d7a1d89160f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d huile lavante relipidante 750 ml?a84c667a-b9e1-417a-b5b6-6d7a1d89160f ]]></link>
<g:price><![CDATA[ 1798.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>XeraCalm A.D Huile lavante relipidante nettoie en douceur et apaise les peaux très sèches sujettes à l'eczéma atopique et aux démangeaisons. Premier geste du rituel anti-démangeaisons, elle laisse la peau douce, confortable et respecte le microbiome cutané. Sans savon et au pH physiologique, elle peut être utilisée en phase de poussée sur le visage, le corps et le cuir chevelu. Sa formule combine le 1er actif postbiotique issu de l’Eau thermale d’Avène, I-modulia®, qui diminue les déman ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770391855</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ea5e38ab65434877006d3945a495bd1658735acd793f46fcac063740909b3df ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > SOINS VISAGE ET CORPS > Dermocosmétique > PEAU ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène Xeracalm A.D Pain Nettoyant Surgras 100g ]]></title>
<g:id>7259065f-4d39-4319-ba63-1a8c47a756c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm a.d pain nettoyant surgras 100g?7259065f-4d39-4319-ba63-1a8c47a756c6 ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Xeracalm a.d pain nettoyant surgras est un pain nettoyant surgras.<br />Peaux sensibles sèches à très sèches sujettes à l'eczéma atopique et aux démangeaisons.<br />Nourrissons, enfants, adultes.<br />Base lavante très douce sans savon - ph physiologique - non comédogène - elaboré en vue de minimiser les risques de réactions allergiques<br />très bonne tolérance cutanée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770104684</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9747b81e5a49e3e46c1130f5ba9c1f47e2ef58bb71d28969ef47787cd31267ed ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm Baume Hydratant 200ml ]]></title>
<g:id>296a6c6a-17f8-4108-8e28-6f7d66886e11</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm baume hydratant 200ml?296a6c6a-17f8-4108-8e28-6f7d66886e11 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce soin quotidien haute tolérance formulé avec 95% d’ingrédients d’origine naturelle renforce la barrière cutanée du visage et du corps. Baume hydratant et nourrissant pour les peaux sensibles et très sèches de toute la famille, sa composition intègre de l’huile de chardon marie qui booste la synthèse des céramides pour une action anti-dessèchement. Sa texture onctueuse, non grasse et sans parfum permet une application et un habillage express. Il apaise les tiraillements, nourrit et hydrate p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155082</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f0b935dc59570ca5b94376f056fe41262953189edf9afc8a0a417572a42fc8f ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm Baume Hydratant 400ml ]]></title>
<g:id>690af808-fe75-4ab3-9cf2-8022e4c66449</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm baume hydratant 400ml?690af808-fe75-4ab3-9cf2-8022e4c66449 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Baume hydratant et nourrissant pour les peaux sensibles et très sèches de toute la famille. Ce soin quotidien haute tolérance composé de 95% d’ingrédients d’origine naturelle renforce la barrière cutanée du visage et du corps. Il apaise les tiraillements, nourrit et hydrate pendant 48h*. Il est formulé avec de l’huile de chardon marie qui booste la synthèse de céramides pour une action anti-dessèchement. Sa texture onctueuse, non grasse et sans parfum permet une application et un habillage ex ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155099</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d7d679b04e704b09a796bb2aade2cc2b7ba7a4116bcef15eee0da517c5d2bc2 ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm Nutrition Crème de Douche 500ml ]]></title>
<g:id>6ffdf0a7-4965-49e3-a1e0-ac7f5f90964c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm nutrition crème de douche 500ml?6ffdf0a7-4965-49e3-a1e0-ac7f5f90964c ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>XERACALM NUTRITION Crème de douche nettoie et nourrit en un seul geste les peaux sensibles sèches de toute la famille.</p>
<p>Formulée à base de 99% d’ingrédients d’origine naturelle, cette crème de douche est enrichie en agents nourrissants pour apaiser les sensations de tiraillements.</p>
<p>Sa texture crémeuse, sans savon, au pH neutre pour la peau et délicatement parfumée procure confort cutané et plaisir d’utilisation.</p>
<p>Elle mousse à l’application, et ne pique pas les yeux, ni les  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155051</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b9a291c3bbd7d65b994dcfc753dd821cf6f561011ff60049424e3545e296ae4e ]]></g:image_link>
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
<title><![CDATA[ Avène Xeracalm Nutrition Gel Nettoyant 500ml ]]></title>
<g:id>de3b19c1-9234-4fca-ae22-118c0deaafbf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne xeracalm nutrition gel nettoyant 500ml?de3b19c1-9234-4fca-ae22-118c0deaafbf ]]></link>
<g:price><![CDATA[ 960.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Gel nettoyant destiné aux peaux sensibles et sèches de toute la famille. Hygiène quotidienne haute tolérance au parfum léger qui nettoie en douceur et apporte un confort cutané. Formulé à base de 99% d’ingrédients d’origine naturelle, ce gel nettoyant visage et corps respecte les peaux les plus sensibles. Sa texture gel sans savon au pH neutre pour la peau mousse à l’application, et ne pique pas les yeux, ni les zones intimes externes. Il bénéficie d'une démarche écoresponsable. Son emb ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770155105</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57c5ed7a0c24159f61c100c1d7ea12fba3c26b302fee488279bcdd3a47591cda ]]></g:image_link>
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
<title><![CDATA[ Avène cCcalfate+ Crème Réparatrice 40ml ]]></title>
<g:id>d187c8f4-786f-4d4e-80e4-076d259cc9b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne cccalfate+ crème réparatrice 40ml?d187c8f4-786f-4d4e-80e4-076d259cc9b4 ]]></link>
<g:price><![CDATA[ 720.00 EUR ]]></g:price>
<description><![CDATA[ <p>Apaise, protège et favorise la réparation* des peaux irritées de toute la famille. Elle forme un film protecteur au niveau des irritations des couches superficielles de l’épiderme, et crée un effet « pansement » qui protège la peau. Sa formule contient une combinaison d'Eau thermale d'Avène, de [C⁺-Restore]™ réparateur et d'ingrédients purifiants: Sulfate de cuivre et Sulfate de zinc. Cicalfate+ Crème réparatrice protectrice convient également aux zones intimes externes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770204667</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ca3085cf1e462ceb05919f3554f7f8acf72e3b9074a253dd4fced4750ff4d0ff ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Avène intense protect spf50+ fluide extra-résistant à l'eau 150ml ]]></title>
<g:id>f9b07f9c-1518-4ce2-8908-2aa0080df614</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne intense protect spf50+ fluide extra-résistant à l'eau 150ml?f9b07f9c-1518-4ce2-8908-2aa0080df614 ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Intense Protect 50+ est un soin solaire ultra large spectre. Pour la première fois, une photoprotection est étendue au-delà des UVB UVA à une partie dangereuse du rayonnement solaire : la lumière bleue haute énergie visible.<br />Un soin solaire adapté aux conditions d’ensoleillement les plus intenses, ainsi qu'aux peaux les plus vulnérables*. Sa texture hybride permet une pénétration en 3 secondes**, une hydratation intense durant 8 h*** et une action anti-dessèchement. Sa teinte nude offre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770141214</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df2d9ed410cc49f06f758387cf0d5ba11def5a40e9bbd1cf582a5cf3542e190b ]]></g:image_link>
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
<title><![CDATA[ Avène spray solaire invisible SPF 30 200ML  ]]></title>
<g:id>e692a237-3a63-4496-895a-3d9937ebc195</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/av-ne spray solaire invisible spf 30 200ml ?e692a237-3a63-4496-895a-3d9937ebc195 ]]></link>
<g:price><![CDATA[ 1780.00 EUR ]]></g:price>
<description><![CDATA[ <p>HAUTE PROTECTION : Une protection optimale SPF30 contre les UVB et les UVA et sans traces blanches</p><p>ANTIOXYDANT : Aide à protéger les cellules contre les radicaux libres grâce à la provitamine</p><p>E. WATER RESISTANT: Protège la peau des effets du soleil même lors de la baignade. Formule haute tolérance, délicatement parfumée.</p><p>Nos engagements pour limiter l'impact sur le milieu marin :</p><ol><li><p>Des filtres évalués non écotoxiques testés sur 3 espèces clés de la biodiversité m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3282770392999</g:gtin>
<g:brand><![CDATA[ AVÈNE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/926926c3c006a01d4533bc6f7972557495361a3ae9d87812d36b959651789deb ]]></g:image_link>
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
<title><![CDATA[ B com Bio Crème pieds nourrissante et relaxante hydratation 100 ml ]]></title>
<g:id>79da5138-9f76-469e-bc04-ddeed42c2e3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/b-com bio crème pieds nourrissante et relaxante hydratation 100 ml?79da5138-9f76-469e-bc04-ddeed42c2e3f ]]></link>
<g:price><![CDATA[ 570.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs-1">
<p>Cette crème pieds onctueuse, nourrit et répare intensément les pieds très secs et abîmés (talons fendillés, callosités…). Sa formule enrichie en actifs hydratants redonne à la peau douceur et souplesse. La Criste Marine procure un effet apaisant et relaxant tandis qu’un mélange d’huiles essentielles tonifiantes (Menthe, Lavandin…) délasse les pieds les plus fatigués. Sa texture fraîche pénètre instantanément sans laisser de film gras pour offrir une sensation de bien-être im ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705602</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f48cc83dd7fc350e2955e93f953e0258761ea9b137af4177532d38ca8ad99939 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ B com bio homme baume après-rasage 100ml ]]></title>
<g:id>69faa8d7-99f9-458b-9c4f-c4c14669768f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/b-com bio homme baume après-rasage 100ml?69faa8d7-99f9-458b-9c4f-c4c14669768f ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>Diminue les rougeurs et apaise les sensations d'inconfort: tiraillements, échauffements, démangeaisons...<br />Prévient l'apparition des poils incarnés et des boutons d'après-rasage grâce à l'acide salicylique, un puissant actif anti-bactérien.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099707217</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b48f56259a3b7e45d8ec64a7f72fadc0e2af83a150d82401c36155ff330c989e ]]></g:image_link>
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
<title><![CDATA[ B.Slim Tisane Minceur 30 Infusettes ]]></title>
<g:id>824db122-e4b0-45df-aea6-aef166fc6389</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/b-slim tisane minceur 30 infusettes?824db122-e4b0-45df-aea6-aef166fc6389 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Diet World B.Slim Tisane Minceur 30 Infusettes est une tisane minceur qui va favoriser votre transit et la détoxification de votre organisme.</p>
<p>Elle est principalement composée d'une plante rare, la mauve frisée aux propriétés émollientes, détoxinantes, diurétiques. La présence de senae dans la composition à hauteur de 4% renforce l'effet de la mauve frisée.</p>
<p>À chaque prise, cette tisane se charge des graisses présentes dans le bol alimentaire et s'attaque aux dépôts excessifs situ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579811139</g:gtin>
<g:brand><![CDATA[ DIET WORLD ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aeba583e3fcb418a5e35e81bda03833e63912a4dca980aee7162732f9b4aa466 ]]></g:image_link>
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
<title><![CDATA[ BD Seringue 3 Pièces Plastipak de 20 ml sans aiguille ]]></title>
<g:id>327a8ced-db54-415c-aeb3-f4618d7aee0e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bd-seringue 3 pièces plastipak de 20 ml sans aiguille?327a8ced-db54-415c-aeb3-f4618d7aee0e ]]></link>
<g:price><![CDATA[ 20.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Seringue BD Plastipak™ 20 ml est un dispositif médical de haute qualité, conçu pour des injections et des prélèvements précis et sécurisés. La Seringue est proposée à l'unité et sans Aiguille. Elle est reconnue pour sa fiabilité et sa qualité, faisant d'elle un choix privilégié pour des procédures médicales sûres et efficaces.</p><p>Stérile et à usage unique, elle est idéale pour les professionnels de santé et les particuliers soucieux d'une hygiène irréprochable.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401066110417</g:gtin>
<g:brand><![CDATA[ BECTON DICKINSON ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ec08d8251abf4a03ec6611cc0aa7f2a46b479494261681a8fae9d3c17da4110 ]]></g:image_link>
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
<title><![CDATA[ BELLOC CONSTIPATION ]]></title>
<g:id>07b0b562-8002-43c6-9685-68d092853607</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/belloc-constipation?07b0b562-8002-43c6-9685-68d092853607 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Belloc Constipation</span><span> est une denrée alimentaire destinée à des fins médicales spéciales (DADFMS). </span><span>Riche en fibres</span><span> et 100 % d'origine naturelle, ce produit associe le psyllium, l'acacia et le baobab pour faciliter le </span><span>transit intestinal </span><span>et restaurer l'équilibre de la flore perturbée par la </span><span>constipation</span><span>.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664492022505</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f7446839091d61613016ce61b860e7fbef3ba0b6f721f7bd7b54906319f289f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BEPANTHEN SENSICALM 50 G ]]></title>
<g:id>1e8235cd-a448-4e9d-a05e-c93a4eb47166</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthen-sensicalm 50 g?1e8235cd-a448-4e9d-a05e-c93a4eb47166 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <div class="short-description">
<div class="std">
<p>Bepanthen Sensicalm est une crème anti-démangeaisons, spécialement conçue pour les irritations cutanées type Eczéma. Ce dispositif médical soulage les démangeaisons, les rougeurs et régénère la peau en un seul produit en cas d'eczéma ou de réactions allergiques. Ces irritations de la peau peuvent survenir en cas de sécheresse cutanée, dermatite atopique, eczéma, ou réactions allergiques cutanées. Sans cortisone, haute tolérance prouvée.</p>
<p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401040503488</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dc2a83d70211bf2f06c7167368024a9cc22ae5e62ce9f81ffbdb82b285b0ffd5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BIOCANINA SHAMPOING PEAU SENSIBLE ]]></title>
<g:id>bb96f5b9-c68b-4509-80b5-23913cf6c7ac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing peau sensible?bb96f5b9-c68b-4509-80b5-23913cf6c7ac ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formule Dermo-Protectrice :<br />Le shampoing peau sensible biocanina a une base lavante douce, sans Lauryl éther sulfate (LES), sans parabènes ni colorants. Il n’irrite pas la peau sensible des animaux et permet de l’hydrater et de la protéger à chaque shampoing.<br />L’aloé Vera hydrate en retenant l’eau dans la fibre capillaire tout en respectant le pH naturel de la peau. Il a également une action antipelliculaire et contribue à réguler le sébum.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018829</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f8395425ed96fb001871bdb71176e57369310355ffb93431e5103fbbbc3b241b ]]></g:image_link>
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
<title><![CDATA[ BIOCANINA SPRAY PUR HABITAT ]]></title>
<g:id>1e1f3e89-2f86-4c4e-8766-6f8735ddc0c3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-spray pur habitat?1e1f3e89-2f86-4c4e-8766-6f8735ddc0c3 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Spray antiparasitaire pour traiter l’habitat.</span></p>
<p><span>Les actifs d’origine végétales contenus dans la formule du spray<br />antiparasitaire bouchent les pores respiratoires des insectes de manière<br />mécanique (asphyxie).<br />Le produit les paralyse et stoppe ainsi leurs développements.<br />Actions immédiate contre :<br />– les puces : les adultes, les larves et aucun œuf n’éclora dans les 7<br />jours qui suivent l’application.<br />– Les acariens et les punaises de lit ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729021577</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9c0f24ec335cf9873f95222a7ad3f57a64d15561a3d3c30d77d68ec6d8a7131 ]]></g:image_link>
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
<title><![CDATA[ BIOGAIA STILLIGOUTTE 5ML ]]></title>
<g:id>a5f4518d-54c9-48d8-9425-76525a6d664c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biogaia-stilligoutte 5ml?a5f4518d-54c9-48d8-9425-76525a6d664c ]]></link>
<g:price><![CDATA[ 1175.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biogaia gouttes flacon 5 ml est un probiotique préconisé en cas de diarrhée du nourisson et du jeune enfant. <br />Il contient une soche de Lactobacillus reuteri DSM 17938 (L. reuteri ProTectis).<br />Le L. reuteri pro Tectis de la formule de Biogaia gouttes flacon 5 ml a été testé dans plusiers études cliniques qui ont permis de démontrer sa bonne tolérance.<br />Biogaia gouttes est classé dans la catégorie des compléments alimentaires.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560081442</g:gtin>
<g:brand><![CDATA[ BIOGAIA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20a395481e0753e14582766c9b5d1bf7afe75ec114a05d6d5b3c17892b0faf9c ]]></g:image_link>
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
<title><![CDATA[ BIONUTRI INF FROIDE DIGESTION B/20 SACH ]]></title>
<g:id>52376f28-4128-4543-9ef7-21acf1576a0f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bionutri-inf froide digestion b/20 sach?52376f28-4128-4543-9ef7-21acf1576a0f ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'infusion froide SAVEUR MANGUE PÊCHE BIO de BIONUTRISANTÉ est idéale pour allier plaisir et santé.</p><p>Cette préparation pour infusion, composée d'ingrédients biologiques soigneusement sélectionnés, favorise la digestion et contribue à votre bien-être digestif grâce à la mélisse. Aromatisée à la mangue et à la pêche, elle saura rafraîchir vos journées d'été tout en prenant soin de votre système digestif.</p><p>Retrouvez vos produits VITAVEA SANTÉ dans votre pharmacie et parapharmacie habit ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515450101704</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/560f518d077c73de2528b852cf0a2a11e08c50f4b00dadebd768b171e48c24fd ]]></g:image_link>
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
<title><![CDATA[ BIONUTRI INF SAUGE SACH20 ]]></title>
<g:id>1bd6d123-2d02-4d80-ac72-6eb62685f31e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bionutri-inf sauge sach20?1bd6d123-2d02-4d80-ac72-6eb62685f31e ]]></link>
<g:price><![CDATA[ 320.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'infusion SAUGE BIO de BIONUTRISANTÉ est votre alliée contre les difficultés respiratoires.</p><p>Cette infusion, composée d'une plante issue d'une agriculture respectueuse de l'environnement et 100% biologique, apaise votre gorge et contribue à votre bien-être respiratoire grâce à la sauge.</p><p>Retrouvez vos produits VITAVEA SANTÉ dans votre pharmacie et parapharmacie habituelles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515450083925</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/37221b9b38b1ec588223c2789e1849b5bc308ccf9c2a0896a0c9d91d88a293a2 ]]></g:image_link>
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
<title><![CDATA[ BIOPAUSE FORT CPR B/60 ]]></title>
<g:id>2242f038-1fc8-40af-9b74-64be6e4bc289</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biopause-fort cpr b/60?2242f038-1fc8-40af-9b74-64be6e4bc289 ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577364026</g:gtin>
<g:brand><![CDATA[ MONIN CHANTEAUD ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f0b0864abb335dc67da25747ad7df20e464b57f1bb5a56457d991016e3e51bd ]]></g:image_link>
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
<title><![CDATA[ BOIRON VACCINOTOXINUM 15CH 4 DOSES ]]></title>
<g:id>e2a90908-066c-4207-b13a-9db3dd9ae81c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/boiron-vaccinotoxinum 15ch 4 doses?e2a90908-066c-4207-b13a-9db3dd9ae81c ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>VACCINOTOXINUM 15CH Tube Dose est un médicament homéopathique habituellement utilisé en infectiologie et en dermatologie. VACCINOTOXINUM DOSE 15CH s'utilise : En infectiologie : pour traiter l'herpès buccal ou péri-buccal. En dermatologie : pour prévenir l'apparition des boutons de fièvre et pour atténuer les éruptions cutanées et les varicelles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3400309259074</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d80fe36b694e6bac729dc637b6ad8bf45034a6007c805a9dde57f0bdc57b6790 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BabyBio Céréales Verveine Fleur Oranger Camomille 220g ]]></title>
<g:id>14529228-4a20-4352-bbb5-b3a14963e3ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-céréales verveine fleur oranger camomille 220g?14529228-4a20-4352-bbb5-b3a14963e3ce ]]></link>
<g:price><![CDATA[ 545.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Notre association de céréales et d'extraits de plantes sera parfaite pour accompagner bébé dans les bras de Morphée. La verveine couplée à la fleur d'oranger et à la camomille permettra à votre petit aventurier de faire le plein de douceur.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500164</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/efb216998436417e368939ce15d2f154e519df0f24d50b33ec37aa941765ec8a ]]></g:image_link>
<g:product_type><![CDATA[ Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BabyBio Sablé Emmental de Franche-Comté & thym ]]></title>
<g:id>55252159-9824-478b-9f13-a6b87f5b2445</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-sablé emmental de franche-comté & thym?55252159-9824-478b-9f13-a6b87f5b2445 ]]></link>
<g:price><![CDATA[ 330.00 EUR ]]></g:price>
<description><![CDATA[ <p>Quoi de mieux que la star des fromages français pour combler les petites faims de bébé ?</p><p>Babybio a tout prévu avec ces sablés au fromage de Franche-Comté ! Leur taille est parfaite pour le palais et les petites mains des jeunes pousses, et leur texture croustillante et fondante fera craquer les papilles de bébé. De quoi partager un moment de plaisir gourmand, que vous soyez à la maison ou en vadrouille !</p><p>Pas de culpabilité à l'horizon ! Sans sucres ajoutés ni ingrédient superflu,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500317</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5d71d7c5537e84a9903ff0aa503b851e4f7aa3e809942db5fa6d5c57275898ae ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BabyBio Sablés Comté AOP et Origan - 72g ]]></title>
<g:id>26e993a5-84d3-4519-bc14-a23db28f6b3e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-sablés comté aop et origan - 72g?26e993a5-84d3-4519-bc14-a23db28f6b3e ]]></link>
<g:price><![CDATA[ 330.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce produit de la marque BABYBIO, conçu pour les tout-petits, contient du comté et de l'origan&nbsp;</p><p>Élaboré avec du fromage du Massif Jurassien et de l'origan à la fois croustillant et fondant, ce produit offre des saveurs authentiques tout en garantissant un plaisir gustatif aux enfants de 15 mois à 3 ans. Ensemble, ces ingrédients soutiennent une alimentation équilibrée pour les enfants</p><p>.Offrez à votre enfant une délicieuse collation saine avec les sablés BABYBIO, parfaits pour  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500300</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f5487b67cbbddc3485342a021cb3fb9ee5ff18d3e8eabda38cfe767a7d86c48b ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio  Assiette Navarin de Petits légumes & d'Agneau français 230g ]]></title>
<g:id>cde5aa3b-3041-47fe-9f44-76ed4dc0002a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette navarin de petits légumes & d'agneau français 230g?cde5aa3b-3041-47fe-9f44-76ed4dc0002a ]]></link>
<g:price><![CDATA[ 285.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une préparation bio de légumes cuisinés avec de l’agneau de Midi-Pyrénées. Babybio, le bio dès le berceau. Pour l’éveil de bébé aux saveurs naturelles, les plats Babybio</p>
<p>sont constitués uniquement de légumes et de viande, poisson ou quinoa. Les variétés et les origines des ingrédients sont sélectionnées avec soin pour leurs propriétés</p>
<p>nutritionnelles. L’origine géographique est mentionnée sur chacune des étiquettes pour vous assurer traçabilité et qualité. La cuisson à la vapeur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131501628</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f25a1ec88bae06c013a8b725aaec77088eaac1f1f005f090b3ef29445e7b8e0c ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio 3 Céréales nature 200g ]]></title>
<g:id>92e84260-7851-410a-92e3-64a7f809643b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-3 céréales nature 200g?92e84260-7851-410a-92e3-64a7f809643b ]]></link>
<g:price><![CDATA[ 370.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le produit </span>3 céréales nature de Babybio<span> est une poudre à mélanger dans du lait infantile. Il renferme du blé, de l'avoine et du riz. Sans sucre ajouté, ce produit intègre l'alimentation des bébés afin de favoriser la diversification alimentaire et accompagner leur bonne croissance.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500188</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/22c64de34211e59fb91713db42a9b4e77bb3153bed69b25a54b371c239974926 ]]></g:image_link>
<g:product_type><![CDATA[ Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio 4 gourdes coco kiwi banane 340g ]]></title>
<g:id>353c9e7e-5ece-4331-a408-c5eb18177889</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-4 gourdes coco kiwi banane 340g?353c9e7e-5ece-4331-a408-c5eb18177889 ]]></link>
<g:price><![CDATA[ 580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Voici une recette originale qui fera le bonheur de bébé ! Une alternative végétale qui allie l'onctuosité du lait de coco, au pep’s du kiwi d'Aquitaine et à la générosité de la banane. Une douceur audacieuse pour éveiller le palais des petits gourmets !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540955</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41c511f4e0acdbf5cb178015c0e26135cd7907e2bb4d3018bd9122a42ac49a88 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio 4 gourdes lait coco pomme poire 340g ]]></title>
<g:id>0c3a304f-fcf3-4d55-97cd-da0df2717f0c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-4 gourdes lait coco pomme poire 340g?0c3a304f-fcf3-4d55-97cd-da0df2717f0c ]]></link>
<g:price><![CDATA[ 580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Quand végétal rime avec régal, ça donne un goûter sans égal. Faites découvrir à bébé cette douceur qui allie la gourmandise du lait de coco, aux délicates notes parfumées de la pomme d’Aquitaine et de la poire de Provence. Une création dont il raffolera !</p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540948</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/053b8a72ca89586dc26d0b9ed990e5e7595509be36d183da732757a39d3a5438 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio 4 gourdes poire fleur d'oranger 4x90g ]]></title>
<g:id>8bab20b5-4713-4fc4-8ea6-674c2821cdd2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-4 gourdes poire fleur d'oranger 4x90g?8bab20b5-4713-4fc4-8ea6-674c2821cdd2 ]]></link>
<g:price><![CDATA[ 420.00 EUR ]]></g:price>
<description><![CDATA[ <p>Quand végétal rime avec régal, ça donne un goûter sans égal. Faites découvrir à bébé cette douceur qui allie la gourmandise de la poire de Provence et de la fleur d'oranger. Une création dont il raffolera !</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540214</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d7a9f6eaa5bbae3dec1a9c6b3e8c92b309762e3834a23a820d832e228a8978e ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio 4 gourdes pomme framboise 4x90g ]]></title>
<g:id>00dde9d8-54b5-4404-a457-ae000d4af734</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-4 gourdes pomme framboise 4x90g?00dde9d8-54b5-4404-a457-ae000d4af734 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Quand végétal rime avec régal, ça donne un goûter sans égal. Faites découvrir à bébé cette douceur qui allie la gourmandise de la framboise aux délicates notes parfumées de la pomme d’Aquitaine. Une création dont il raffolera !</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540160</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5b8d8e14b12d5109006774260972794f40becfa64d862f50e7f8462da03002d2 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Assiette Aubergines de Provence façon Parmigiana & Macaroni 260g ]]></title>
<g:id>abb5684c-586e-4074-a590-3abbbcef7aa7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette aubergines de provence façon parmigiana & macaroni 260g?abb5684c-586e-4074-a590-3abbbcef7aa7 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le repas du soir des grands bébés ! Un régal à l'italienne. D'où vient le secret de cette savoureuse assiette ? Des légumes comme les aubergines de Provence, les carottes</p>
<p>des Landes et les pommes de terre du Val de Loire ? Ou bien les macaroni, la purée de tomates ou le parmesan ? Une chose est sûre, c'est que bébé savoure tout !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131530758</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9d9b517b0b9ad2151f334d545625858b2f3eed5fe45f818f5d2497ce0a0fd771 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Assiette Fondue de Carotte & Maïs doux d'Aquitaine au Quinoa 230g ]]></title>
<g:id>3ae288c2-669a-407a-871b-34c0d931137b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette fondue de carotte & maïs doux d'aquitaine au quinoa 230g?3ae288c2-669a-407a-871b-34c0d931137b ]]></link>
<g:price><![CDATA[ 230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Recette végétale bio aux légumes et au quinoa de Bolivie issu du commerce équitable. Babybio, le bio dès le berceau. Pour l’éveil de bébé aux saveurs naturelles, les plats</p>
<p>Babybio sont constitués uniquement de légumes et de viande, poisson ou quinoa. Les variétés et les origines des ingrédients sont sélectionnées avec soin pour leurs</p>
<p>propriétés nutritionnelles. L’origine géographique est mentionnée sur chacune des étiquettes pour vous assurer traçabilité et qualité. La cuisson à ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131501604</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8e9e71c4f2d3e887d87d274424fca09985a5f2d36c8ee681729c5e7bbdee66f5 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Assiette Légumes à la Basquaise & Poulet fermier du Poitou 260g ]]></title>
<g:id>eb626d60-2a53-45ce-9d05-f226fbc32c92</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette légumes à la basquaise & poulet fermier du poitou 260g?eb626d60-2a53-45ce-9d05-f226fbc32c92 ]]></link>
<g:price><![CDATA[ 285.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un menu comme les grands ! Un délice de légumes au poulet fermier bio façon basquaise accompagné de riz.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131530604</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/784c037c833a8cf98286a96aaf30f6acda97cb2268ee15dd42c962cd3eb2e0cb ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Assiette Macaroni, Légumes du soleil, Carotte & Maïs 200 g ]]></title>
<g:id>2ec30d3e-e254-4e65-b395-01a5c3ab8e46</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette macaroni, légumes du soleil, carotte & maïs 200 g?2ec30d3e-e254-4e65-b395-01a5c3ab8e46 ]]></link>
<g:price><![CDATA[ 350.00 EUR ]]></g:price>
<description><![CDATA[ <p>A chaque morceau, une nouvelle découverte !</p><p>Bébé grandit et veut tout faire comme les grands… même manger tout seul ! Avec cette assiette, bébé va s’émerveiller devant la forme et la couleur des morceaux d'aubergines, de carottes, de poivrons, de maïs et des macaroni fondants tout en explorant chaque texture avec les yeux, la bouche et même les mains.</p><p>Cultivés au cœur de la Nouvelle-Aquitaine, la carotte, la tomate et le maïs vont accompagner bébé dans une nouvelle étape de gourma ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131570969</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/865b7dae119bc34a51719398a7521c9938f01a36f3f56b7ed93a3acad9d3cca5 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Assiette Méli-mélo de Légumes au Saumon Riz 260g ]]></title>
<g:id>90d2e7cd-7b90-448b-8529-33bd5da9a158</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette méli-mélo de légumes au saumon riz 260g?90d2e7cd-7b90-448b-8529-33bd5da9a158 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un menu comme les grands ! Méli mélo de légumes et champignons au saumon bio d'Irlande accompagné de riz</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131530505</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a3d4fc7800836b654d9eb17ca59e637e33008161170725d19c81e6f8d38b7166 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Assiette Petits pois, panais veau fermier d'aquitaine, macaroni 230g ]]></title>
<g:id>60b463ad-d6b3-4ce3-88f7-e3810b6eb08d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette petits pois, panais veau fermier d'aquitaine, macaroni 230g?60b463ad-d6b3-4ce3-88f7-e3810b6eb08d ]]></link>
<g:price><![CDATA[ 230.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les macaroni, on en fait tout un plat chez Babybio ! Surtout quand ils font la part belle aux petits pois d’Espagne gorgés de soleil, aux panais du Val de Loire et au veau fermier de Nouvelle Aquitaine. Un pur délice !</span></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131501598</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/99c97cb0ca528cad3673140c0b0e703dcbe7df01ad926df767e29a9f46b792db ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Aubergine Pois Chiches Façon Moussaka Végétale 6 Mois et + Bio 2 Pots de 200 g ]]></title>
<g:id>daaeb2ff-940e-4b61-a456-83d0d4bbee05</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-aubergine pois chiches façon moussaka végétale 6 mois et + bio 2 pots de 200 g?daaeb2ff-940e-4b61-a456-83d0d4bbee05 ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Aubergine Pois Chiches Façon Moussaka Végétale 6 Mois et + Bio 2 Pots de 200 g est une purée de légumes et pois chiches Bio, un plat végétarien complet et savoureux.</p>
<p>Sans sel ajouté, sans lait, sans gluten.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.</p>
<p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510668</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9fc4f5b91a161bb4e765e667af25f9cb428f08f2969c3690e9a6f366dd15a72 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Brebis Mangue 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>6a89fe14-b362-4087-bc39-1bddb09add71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé brebis mangue 6 mois et + bio 2 pots de 130 g?6a89fe14-b362-4087-bc39-1bddb09add71 ]]></link>
<g:price><![CDATA[ 420.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Brebis Mangue 6 Mois et + Bio 2 Pots de 130 g est un brassé source de calcium à la texture lisse à base de lait de brebis fermenté de France et de mangues.</p>
<p>Sans gluten, sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510873</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ab7a51b6f19b4c6d04de5be5f526451a4e4f46538284dd5d772a19fa7ea3d9e ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Brebis Mirabelle Vanille 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>596173ec-cc46-437a-afea-a900459ff6fe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé brebis mirabelle vanille 6 mois et + bio 2 pots de 130 g?596173ec-cc46-437a-afea-a900459ff6fe ]]></link>
<g:price><![CDATA[ 420.00 EUR ]]></g:price>
<description><![CDATA[ <p>Vous êtes à la recherche de délicieux desserts et goûters bio pour bébé ? Pas d’inquiétude ! Avec notre petit pot brassé Brebis Mirabelle de France Vanille, bébé va pouvoir découvrir toute l’onctuosité de cette recette gourmande, originale et au bon lait de brebis français.</p>
<p>Et le petit plus ? Tous nos brassés sont fabriqués en France, sans sucres ajoutés*, se conservent à température ambiante et sont proposés dans un format pratique, écologique et idéal pour débuter la diversification  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510880</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c09f123f2ef3b14d4cf60cdf6e8ac2cfcf60347fa585ad7ae3de08252054582 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Chèvre Abricot Banane 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>10252f6f-9c21-4dc9-8d38-b739f28a1b0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé chèvre abricot banane 6 mois et + bio 2 pots de 130 g?10252f6f-9c21-4dc9-8d38-b739f28a1b0b ]]></link>
<g:price><![CDATA[ 420.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Chèvre Abricot Banane 6 Mois et + Bio 2 Pots de 130 g est un brassé à la texture lisse à base de lait de chèvre fermenté de France, d'abricots d'Occitanie et de bananes.</p>
<p>Sans gluten, sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510897</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/545940d743c9459731ac931b1d4871c0ebe3e173eb826130c6484d9a14f1b8b9 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Chèvre Poire Figue 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>dfdaa506-d301-4fb2-9ec7-ab125f23872f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé chèvre poire figue 6 mois et + bio 2 pots de 130 g?dfdaa506-d301-4fb2-9ec7-ab125f23872f ]]></link>
<g:price><![CDATA[ 420.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Chèvre Poire Figue 6 Mois et + Bio 2 Pots de 130 g est un brassé à la texture lisse à base de lait de chèvre fermenté de France, de poires et de figues de Provence.</p>
<p>Sans gluten, sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510903</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/545940d743c9459731ac931b1d4871c0ebe3e173eb826130c6484d9a14f1b8b9 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Nature 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>2ca30c92-1a15-4a6c-b749-459875675e32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé nature 6 mois et + bio 2 pots de 130 g?2ca30c92-1a15-4a6c-b749-459875675e32 ]]></link>
<g:price><![CDATA[ 330.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Nature 6 Mois et + Bio 2 Pots de 130 g est un brassé source de calcium à la texture lisse à base de lait fermenté de France.</p>
<p>Sans gluten, sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510859</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a6de9c849179916e7dc1a918d68d8713c91082bbcf95c9b5dbb0b6c6dabad3a3 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Poire Cannelle 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>80916126-789e-4bb3-8515-daee40349014</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé poire cannelle 6 mois et + bio 2 pots de 130 g?80916126-789e-4bb3-8515-daee40349014 ]]></link>
<g:price><![CDATA[ 365.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Poire Cannelle 6 Mois et + Bio 2 Pots de 130 g est un brassé source de calcium à la texture lisse à base de lait fermenté de France, de poires de Provence et de cannelle.</p>
<p>Sans gluten, sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510866</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a62de82cca6b16b708b35b7e86921322f845dc727885b06cf810a089ef909dda ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Végétal Avoine Banane Myrtille 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>1d37e024-7932-40b5-b412-e919a8d437a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé végétal avoine banane myrtille 6 mois et + bio 2 pots de 130 g?1d37e024-7932-40b5-b412-e919a8d437a9 ]]></link>
<g:price><![CDATA[ 365.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Végétal Avoine Banane Myrtille 6 Mois et + Bio 2 Pots de 130 g est un brassé à la texture lisse à base de boisson d'avoine, de bananes et de myrtilles.</p>
<p>Sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510989</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5b26095e567dd4e2fd832540219a9021a7a8ec2872f55afdd63d0db1f811093e ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Brassé Végétal Coco Mangue Ananas 6 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>897a00ce-e3a6-41fa-96c5-7e6ae504c37b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-brassé végétal coco mangue ananas 6 mois et + bio 2 pots de 130 g?897a00ce-e3a6-41fa-96c5-7e6ae504c37b ]]></link>
<g:price><![CDATA[ 365.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Brassé Végétal Coco Mangue Ananas 6 Mois et + Bio 2 Pots de 130 g est un brassé à la texture lisse à base de lait de coco, de mangues, de pommes de Nouvelle-Aquitaine et de riz de Camargue.</p>
<p>Sans gluten, sans sucres ajoutés.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510910</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7dd63e556e7ea01d07a70ac09386669db2a85da1adba18543f65abe29623e012 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Caprea lait de chèvre 1er âge 800g ]]></title>
<g:id>df7a6893-d396-449d-82fa-0e10a05ef5da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-caprea lait de chèvre 1er âge 800g?df7a6893-d396-449d-82fa-0e10a05ef5da ]]></link>
<g:price><![CDATA[ 2510.00 EUR ]]></g:price>
<description><![CDATA[ <div id="product-description-short-5604" class="product-description-short">
<p>Lait en poudre bio pour nourrissons élaboré en France avec du lait de chèvre bio. Convient à l’alimentation particulière du nourrisson, dès la naissance, conformément à la réglementation.</p>
<p>Le lait entier de la recette Babybio est issu de chèvres qui sont nourries principalement avec de l’herbe ou des fourrages et sont élevées dans le respect du bien-être animal, conformément à la réglementation biologique.</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580517</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f06a3815c74a33f3bf4a37b4d1a84aeda3e697c67ee0b0126fc443abc097e6b ]]></g:image_link>
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
<title><![CDATA[ Babybio Caprea lait de chèvre 2ème âge 800g ]]></title>
<g:id>a76d69ad-fe02-4ff3-949c-0f0ba2f7e065</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-caprea lait de chèvre 2ème âge 800g?a76d69ad-fe02-4ff3-949c-0f0ba2f7e065 ]]></link>
<g:price><![CDATA[ 2580.00 EUR ]]></g:price>
<description><![CDATA[ <p>Notre lait infantile Caprea 2 est fabriqué en France, à partir de bon lait de chèvre bio, et nous excluons tout composant non nécessaire. Nos laits infantiles sont ainsi sans huile de palme.</p>
<p>Et le petit plus de nos laits infantiles en poudre ? Nous veillons à garantir la juste rémunération de nos éleveurs partenaires tout en respectant le bien-être animal (accès au plein air dès que les conditions météo le permettent, nourries majoritairement avec des fourrages issus de la ferme, etc.) ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580524</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4b7ca328463f8bbba6c0fdca226a841efe70e72f8b52add35c4a41555aee51d5 ]]></g:image_link>
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
<title><![CDATA[ Babybio Caprea lait de chèvre 3ème âge 800g ]]></title>
<g:id>e07cab06-1af0-4bf0-98de-2bac882c260f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-caprea lait de chèvre 3ème âge 800g?e07cab06-1af0-4bf0-98de-2bac882c260f ]]></link>
<g:price><![CDATA[ 2345.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nourrir votre bébé est un moment unique qui allie complicité, tendresse et partage. Grâce à notre recette Caprea Croissance, qui convient aussi en relais et/ou en complément de l'allaitement, profitez sereinement de ce moment biberon avec bébé dès 10 mois et jusqu'à ses 3 ans.</p>
<p>Rien de mieux qu'une recette Croissance à base de bon lait de chèvre bio, fabriquée en France, et le tout sans huile de palme pour régaler bébé jusqu'à ses 3 ans.</p>
<p>Et le petit plus de Caprea Croissance ? No ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580531</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/267c2781d9467fe08816b164e1b69c2d68d1be0f67bc9a451d6a501213a6e07e ]]></g:image_link>
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
<title><![CDATA[ Babybio Carottes des landes 2*130g ]]></title>
<g:id>385a1d5f-fa42-4faa-9565-50b410c64a4e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-carottes des landes 2*130g?385a1d5f-fa42-4faa-9565-50b410c64a4e ]]></link>
<g:price><![CDATA[ 245.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La carotte dans toute sa splendeur. Onctuosité, fondant et goût délicat sont au programme de ce petit pot. Cultivées dans le sol sablonneux des Landes et doucement caressées par les vents Atlantiques, les carottes des Landes vous réservent une purée délicieuse qui régalera bébé jusqu'à voir la vie en orange ! Sans sel ajouté, sans épaississant, sans gluten et sans l</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510408</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/07bc9960d40d5c187323e8163f12eb143e30756b0b4c59c8103e93554be73d83 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Cocotte de Haricots Verts du Val de Loire & Truite 230g ]]></title>
<g:id>e0c0f9d4-0ef9-4b74-ad8d-ca43b91542a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-cocotte de haricots verts du val de loire & truite 230g?e0c0f9d4-0ef9-4b74-ad8d-ca43b91542a5 ]]></link>
<g:price><![CDATA[ 285.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec cette assiette, Babybio embarque vos papilles et navigue entre les goûts savoureux des pommes de terre, haricots verts et panais venus du Val de Loire. et avec ses</p>
<p>délicieux petits morceaux de truite d'Irlande, ce plat respire l'air marin et sera bientôt en vogue chez les tout-petits.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131501635</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e1fbb502972bdbd7f3d2948dc67f48e1fa9dcc1515985746c26ea440350d8210 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Céréales Cacao avec Quinoa 220g ]]></title>
<g:id>d76d5893-c1a1-427c-be17-61cfbeda3151</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-céréales cacao avec quinoa 220g?d76d5893-c1a1-427c-be17-61cfbeda3151 ]]></link>
<g:price><![CDATA[ 555.00 EUR ]]></g:price>
<description><![CDATA[ <p>A l’étape de la diversification alimentaire, les céréales biologiques Cacao permettent à Bébé dès 8 mois de découvrir une saveur et une consistance nouvelles. De parfaite</p>
<p>digestibilité, les céréales Babybio apportent tous les bienfaits nutritionnels du quinoa. Le quinoa est une «graine» ancienne d’origine sud-américaine caractérisée par sa</p>
<p>haute valeur nutritionnelle : composition en acides aminés essentiels, richesse en minéraux naturels. Aliment adapté à l’enfant à teneur gara ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500119</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6b61156d85d501ea458766564941064d12bed5cd00298d7a55ed34e8f552d1e5 ]]></g:image_link>
<g:product_type><![CDATA[ Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Céréales Vanille avec Quinoa 220g ]]></title>
<g:id>089c908d-3a5c-44a9-99f0-da53d6e4eef5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-céréales vanille avec quinoa 220g?089c908d-3a5c-44a9-99f0-da53d6e4eef5 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p>A l’étape de la diversification alimentaire, les céréales biologiques Vanille permettent à Bébé dès 6 mois de découvrir une saveur et une consistance nouvelles. De parfaite</p>
<p>digestibilité, les céréales Babybio apportent tous les bienfaits nutritionnels du quinoa. Le quinoa est une «graine» ancienne d’origine sud-américaine caractérisée par sa</p>
<p>haute valeur nutritionnelle : composition en acides aminés essentiels, richesse en minéraux naturels. Aliment adapté à l’enfant à teneur ga ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500102</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a3e39053b5a59725d7037bbc7ceb8670de0c137f3ea2fa0a89961e9bdd89290 ]]></g:image_link>
<g:product_type><![CDATA[ Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Gourdes Crème Semoule Cacao 90g x4 ]]></title>
<g:id>3df66144-1483-4bdb-8127-53b2f5e9c9ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-gourdes crème semoule cacao 90g x4?3df66144-1483-4bdb-8127-53b2f5e9c9ab ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gourde Dessert Lacté de Babybio crème cacao de semoule fondante, un vrai plaisir cacaoté dans une petite gourde que bébé pourra emporter partout et savourer en dessert ou à l'heure du goûter.</p>
<p>- Source de Calcium</p>
<p>- Cacao équitable Contient du gluten et du lait.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540801</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/331db7318a9428b6511ee09e87054f325f09794a9abd457575fd1d6dd94f23db ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Gourdes Pomme d'Aquitaine, Myrtille &Fraise 4X90g ]]></title>
<g:id>c09da256-5da7-46bc-a9cb-466d71c39b90</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-gourdes pomme d'aquitaine, myrtille &fraise 4x90g?c09da256-5da7-46bc-a9cb-466d71c39b90 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Babybio Gourdes Pomme d'Aquitaine, Myrtille &amp;Fraise 4X90g</span> est une association de fruits à la saveur douce, pour découvrir de nouveaux goûts.</p>
<p><span></span></p>
<p style="margin:0px 0px 10px;color:#515151;font-family:Ubuntu, arial, tahoma;font-size:14px;"></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540146</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9addb1c6d515314bd5e03bad38c272da0c71eef5b07d2af7afa966d88e62a6f ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Gourdes Pomme, Abricot & Banane 90g x4 ]]></title>
<g:id>366a71e7-8643-4e79-b191-2eca0cf74ec4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-gourdes pomme, abricot & banane 90g x4?366a71e7-8643-4e79-b191-2eca0cf74ec4 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Gourdes Pomme Abricot Banane Babybio feront le bonheur de vos tout-petits dès 12 mois. Quel plaisir pour eux de déguster cette purée de fruits comme des grands !</p>
<p>Tant que Bébé ne sait pas manger tout seul, versez la purée de fruits dans une cuillère ou dans un bol. Avec son format nomade, la gourde Babybio se glisse facilement</p>
<p>dans le sac à langer de maman ou dans le petit sac à goûter de bébé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540122</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e957fa5095609fa674e22cc81af90061261616cd4cc0bab328eea0219d41434e ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Gourdes Pomme, Fraise & Vanille 90g x4 ]]></title>
<g:id>b3367a6b-39f0-41f0-a328-d808305bd110</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-gourdes pomme, fraise & vanille 90g x4?b3367a6b-39f0-41f0-a328-d808305bd110 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Gourdes Pomme Fraise Vanille Babybio feront le bonheur de vos tout-petits dès 12 mois. Quel plaisir pour eux de déguster cette purée de fruits comme des grands !</p>
<p>Tant que Bébé ne sait pas manger tout seul, versez la purée de fruits dans une cuillère ou dans un bol. Avec son format nomade, la gourde Babybio se glisse facilement</p>
<p>dans le sac à langer de maman ou dans le petit sac à goûter de bébé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540108</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d8aa29815c9ccd8c21414db2c08a578522ac6f5a5a5228388894c42332574d3 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Gourdes Pomme, Poire & Pêche 90g x4 ]]></title>
<g:id>ab14a311-b396-4f75-84e9-a8c883e0acc6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-gourdes pomme, poire & pêche 90g x4?ab14a311-b396-4f75-84e9-a8c883e0acc6 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Gourdes Pomme Poire Pêche Babybio feront le bonheur de vos tout-petits dès 12 mois. Quel plaisir pour eux de déguster cette purée de fruits comme des grands ! Tant</p>
<p>que Bébé ne sait pas manger tout seul, versez la purée de fruits dans une cuillère ou dans un bol. Avec son format nomade, la gourde Babybio se glisse facilement dans le</p>
<p>sac à langer de maman ou dans le petit sac à goûter de bébé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540115</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/edb6db2e9d40119dace66a2ab0c4d9d6183bea801b0f0137907e01b167527681 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Hachis Végétal Patate Douce Lentilles Lait de Coco 6 Mois et + Bio 2 Pots de 200 g ]]></title>
<g:id>ca32fddf-99ce-4d8a-861a-2c751f6305b8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-hachis végétal patate douce lentilles lait de coco 6 mois et + bio 2 pots de 200 g?ca32fddf-99ce-4d8a-861a-2c751f6305b8 ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Hachis Végétal Patate Douce Lentilles Lait de Coco 6 Mois et + Bio 2 Pots de 200 g est un purée de légumes, lentilles et lait de coco Bio, un plat végétarien complet et savoureux.</p>
<p>Sans sel ajouté, sans lait, sans gluten.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.</p>
<p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510613</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9806814a61c8df1e137112424091d27610e348204c08ecf580d4c80703835b29 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Jardinière de Légumes 4 Mois et + Bio 2 Pots de 130 g ]]></title>
<g:id>1bdbab81-d8f9-438d-bf5c-a34138779e77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-jardinière de légumes 4 mois et + bio 2 pots de 130 g?1bdbab81-d8f9-438d-bf5c-a34138779e77 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Jardinière de Légumes 4 Mois et + Bio 2 Pots de 130 g est une purée à la texture lisse à base de maïs doux et petits pois d'Aquitaine, de carottes et persil de France, et de pommes de terre du Centre-Val de Loire.</p>
<p>Sans gluten, sans sel ajouté ni lait.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510439</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c15e77c9fd2801442297c9c1fc2c11b97cd858157f6bb73dcf1ffe49018045f ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Kiwi Mangue Lait De Coco Bio Des 6 Mois 4x90g ]]></title>
<g:id>3a990bd8-2498-450d-9367-8bc312b67153</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-kiwi mangue lait de coco bio des 6 mois 4x90g?3a990bd8-2498-450d-9367-8bc312b67153 ]]></link>
<g:price><![CDATA[ 420.00 EUR ]]></g:price>
<description><![CDATA[ <p>Compote<br />Kiwi mangue et lait de coco<br />Dès 6 mois<br />Agriculture biologique<br />4x90g</p>
<p>Les <span>compotes à boire</span> de la marque BABYBIO sont idéales en guise de <span>desserts</span> ou encore au <span>goûter</span>. <br />Laissez votre bébé découvrir le <span>kiwi</span>, la <span>mangue</span> et le<span> lait de coco</span> grâce à cette délicieuse recette. <br />Elles conviennent parfaitement aux bébés dès<span> 6 mois</span>. <br />Ces compotes sont composées avec d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131540238</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42c4c4999de6d5d0ec544fa0da607c86b4670d6b9c772afac61ab679a1de6c83 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Légumes verts, dès 4 mois, 2*130g ]]></title>
<g:id>6d17b4c6-5528-4cd0-9161-2b5a2ee7709d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-légumes verts, dès 4 mois, 2*130g?6d17b4c6-5528-4cd0-9161-2b5a2ee7709d ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Haricots verts du Val de Loire, brocolis et petits pois d'Espagne, ils sont tous réunis pour une recette de légumes verts.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510415</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a9fd03250a213c8e5fe31a182fd4855cca9a99148c2271301d179942c3a9651 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Mangue Pomme Bio 2 Pots de 130 g ]]></title>
<g:id>854bae3d-9378-4276-947c-e97db4f057ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-mangue pomme bio 2 pots de 130 g?854bae3d-9378-4276-947c-e97db4f057ee ]]></link>
<g:price><![CDATA[ 260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Mangue Pomme 4 Mois et + Bio 2 Pots de 130 g est une purée à la texture lisse, à base de 100% de fruits : pommes de Nouvelle-Aquitaine et mangues.</p>
<p>Sans gluten, sans sucres ajoutés, sans lait ni épaississant.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510798</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e24275f64f139f49ad9d51b59b2a3fe7288b0b3502ea2788fce6d7204b1f1f4e ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Optima 1er âge 800g ]]></title>
<g:id>52dde325-de73-4054-b00d-558fa4c91b1f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-optima 1er âge 800g?52dde325-de73-4054-b00d-558fa4c91b1f ]]></link>
<g:price><![CDATA[ 1920.01 EUR ]]></g:price>
<description><![CDATA[ <p>Lait en poudre bio pour nourrissons élaboré en France avec du lait de vache d’origine française. Convient à l’alimentation particulière du nourrisson, dès la naissance, conformément à la réglementation.</p>
<p>Le lait écrémé de la recette Babybio est issu de vaches élevées en France qui sont nourries principalement avec de l’herbe ou des fourrages et sont élevées dans le respect du bien-être animal, conformément à la réglementation biologique.</p>
<p>AVIS IMPORTANT : le lait maternel est, pou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580319</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a0ffeed8e972fe3b4478fd412bc68c96ed2184f4c6358d3bc0316d89d86bf69 ]]></g:image_link>
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
<title><![CDATA[ Babybio Optima 2ème âge 800g ]]></title>
<g:id>f1d8d925-a1c9-461f-8c82-ffc8c0c74d7a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-optima 2ème âge 800g?f1d8d925-a1c9-461f-8c82-ffc8c0c74d7a ]]></link>
<g:price><![CDATA[ 1985.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nourrir votre bébé est un moment unique qui allie complicité, tendresse et partage. Grâce à notre recette Optima 2ème âge, qui convient aussi en relais et/ou en complément de l'allaitement, profitez sereinement de ce moment biberon avec bébé dès 6 mois.</p>
<p>Rien de tel qu'un lait infantile fabriqué en France, à partir de bon lait de vache bio français et sans huile de palme, pour partager ces moments de tendresse avec bébé.</p>
<p>De plus, nous veillons à garantir la juste rémunération de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580326</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c53a519678993af525a22f0d25eca3312083b95347e97302a41b78685238d339 ]]></g:image_link>
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
<title><![CDATA[ Babybio Optima 3ème âge 800g ]]></title>
<g:id>e6b29aad-fb1b-4127-859e-d374c8e9b0cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-optima 3ème âge 800g?e6b29aad-fb1b-4127-859e-d374c8e9b0cc ]]></link>
<g:price><![CDATA[ 1775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nourrir votre bébé est un moment unique qui allie complicité, tendresse et partage. Grâce à notre recette Optima Croissance, qui convient aussi en relais et/ou en complément de l'allaitement, profitez sereinement de ce moment biberon avec bébé dès 10 mois et jusqu'à ses 3 ans.</p>
<p>Notre lait infantile Optima Croissance est fabriqué en France, à partir de bon lait de vache bio français, et nous excluons tout composant non nécessaire. Nos laits infantiles sont ainsi sans huile de palme. Enfi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580333</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b2fa44f29ce3462409b88dac7b704f1227cbbdc21800e2dbefbb25dad2a12a0 ]]></g:image_link>
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
<title><![CDATA[ Babybio Petit pot Carotte, Pruneau, Boeuf fermier Aquitaine & Limousin 2*200g ]]></title>
<g:id>87814cf7-7679-46a0-bbec-996548c8bd41</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petit pot carotte, pruneau, boeuf fermier aquitaine & limousin 2*200g?87814cf7-7679-46a0-bbec-996548c8bd41 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bébé va-t-il rêver de carottes des Landes, de pruneaux du Languedoc Roussillon ou encore de Boeuf d'Aquitaine et du Limousin </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510651</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0214cb237dbf64fa1a542825455c7f3e47ac15ab32d72e7036dcc58ae4339b64 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Petit pot banane fraise & menthe 2x130g ]]></title>
<g:id>e1ffd839-0b22-4c6b-b415-2d51abfd0ad1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petit pot banane fraise & menthe 2x130g?e1ffd839-0b22-4c6b-b415-2d51abfd0ad1 ]]></link>
<g:price><![CDATA[ 270.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le petit pot fruits banane fraise &amp; menthe possède une note rafraîchissante de menthe d’Île de France alliée à la saveur fruitée de la banane et de la fraise. Voilà un trio gourmand qui va faire le bonheur de bébé.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510965</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/99e9da10652523f14f261cd247eaddb4ddba98fbf72c2cb316b1fd24deb66e74 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Petits Pois Pomme de Terre Jambon 2*200g ]]></title>
<g:id>fcf6efe3-5b4b-4b49-b2cd-45fac9de6e0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petits pois pomme de terre jambon 2*200g?fcf6efe3-5b4b-4b49-b2cd-45fac9de6e0b ]]></link>
<g:price><![CDATA[ 380.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>D’une saveur très douce, le</span><span> Menu du Jour légumes et jambon convient aux bébés à partir de 8 mois.</span><span> Le savoir-faire de Babybio réside dans la présentation de petits pots pour les petits avec une vraie saveur s’approchant du </span><span>« fait maison </span><span>», sans épaississants.</span><br /><br /><span>A 8 mois, le jeune enfant a besoin d’une assiette plus variée et est avide de découvrir de nouvelles textures par le biais de sa fourchette ou de ses doigts ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510507</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/922ef6c6bf35a938c283fd81faeb8bf108e4abd0f81cdff0ffd219d0c9513753 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Petits Pots Maïs Doux, Patate douce & Quinoa Dès 8 mois 2 X 200g ]]></title>
<g:id>e73a7393-b9ef-46bd-92ac-63b3430685ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petits pots maïs doux, patate douce & quinoa dès 8 mois 2 x 200g?e73a7393-b9ef-46bd-92ac-63b3430685ec ]]></link>
<g:price><![CDATA[ 350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Des p'tits morceaux à gogo !</p><p>Dès 8 mois, éveillez les sens de bébé avec une recette originale, onctueuse et contenant de véritables morceaux fondants. Ses papilles apprécieront découvrir cette délicieuse association mêlant maïs doux d'Aquitaine, patates douces de nos Régions et quinoa du Centre-Val de Loire. Le petit plus ? Retrouvez dans ce pot des courgettes cultivées sur la Ferme Babybio.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510361</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fb7bbb56e8405aece3c163bfa0cc21c561a6324e06c322dce4503056d06eb6d4 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Petits pois, Pomme de terre & Cabillaud ]]></title>
<g:id>b7037dce-2b59-4fd4-bffc-972f1ae81007</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petits pois, pomme de terre & cabillaud?b7037dce-2b59-4fd4-bffc-972f1ae81007 ]]></link>
<g:price><![CDATA[ 380.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Avec son cabillaud sauvage pêché au large de l'Islande, ce petit pot respire l'Atlantique. Le poisson apporte ses notes iodées et s'accompagne de petits pois ainsi que de pomme de terre du Val de Loire. Un plat plein de fraîcheur qui embarque bébé dans une aventure remplie de saveurs !</span><br /><span>Sans sel ajouté, sans épaississant, sans gluten et sans lait</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510538</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f1b6997ebfde0ae216e02c49148cc7aa3aa3bfbf9bc842b9d38b11a496de222 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Petits pois, pomme de terre du val de loire,  2*130g ]]></title>
<g:id>8c69275d-d20e-4467-8836-e433167792de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petits pois, pomme de terre du val de loire,  2*130g?8c69275d-d20e-4467-8836-e433167792de ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Mélange entre l’onctuosité des pommes de terre du Val de Loire et le goût délicieusement sucré des petits pois d’Espagne.</span></p>
<p><span> </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510446</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1b32a215ac41042c1466c0aa3764c98008f0690df058b3fc84ceee3acfb912bf ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Pomme de Terre & Haricots Verts Val de Loire, Colin 2*200g ]]></title>
<g:id>e9d3e0e2-3a58-4b62-83c5-c4de91a2ee1a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-pomme de terre & haricots verts val de loire, colin 2*200g?e9d3e0e2-3a58-4b62-83c5-c4de91a2ee1a ]]></link>
<g:price><![CDATA[ 380.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Petits pots pour bébé Pomme de Terre &amp; Haricots Verts de Vendée, Babybio a sélectionné d'excellentes pommes de terre et haricots verts du Val de Loire dans un mélange gourmand qui ravira vos petits ! A cela nous y avons ajouté un savoureux colin qui apporte un goût iodé à cette recette. Bébé se voit déjà matelot !</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510088</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42cb9bcf9516dc40ccc23e2a6c7da90a38b8b189bf8c80dc84ac3f5cd9c6d283 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Pomme de terre carotte & veau 2x200g ]]></title>
<g:id>552fb71e-c85a-42e6-961c-4d8000f1e737</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-pomme de terre carotte & veau 2x200g?552fb71e-c85a-42e6-961c-4d8000f1e737 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <div class="panel panel-prod">
<div id="prod-collapse1" class="panel-collapse collapse in">
<div class="panel-body">
<p>Le petit pot menu pomme de terre carotte &amp; veau est composé d'un mélange de légumes : carottes Landaises, des pommes de terre et des « champignons de Paris » avec du veau d'Aquitaine. Parce que bébé a droit au meilleur, Babybio lui a préparé un plat plein de tendresse.</p>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510514</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/efce3549d7cba7c01710c71f98a9d704633544ffd11484851bbe5946d9360202 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Pot Panais Haricots Riz 2*200g ]]></title>
<g:id>115a989a-e78b-4461-8096-98ea73c37400</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-pot panais haricots riz 2*200g?115a989a-e78b-4461-8096-98ea73c37400 ]]></link>
<g:price><![CDATA[ 350.00 EUR ]]></g:price>
<description><![CDATA[ <div id="more_info_block" class="clear">
<div id="more_info_sheets" class="sheets align_justify">
<div id="idTab1" class="rte">
<p>Voici une délicieuse recette qui marie le goût sucré du panais du Val de Loire et le vert tendre des haricots verts de Vendée. Le tout est accompagné de riz de Camargue et d’une pointe de thym pour rehausser le goût de ce duo de légumes plein de saveurs !</p>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510637</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8efb308a105e1a813a56b4528d3298e5ee455ffe5e31df7fcd07c107b96b9d70 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Primea 2ème âge 800g ]]></title>
<g:id>8ff5bcda-1fa7-4941-8c1d-5c107781ff7e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-primea 2ème âge 800g?8ff5bcda-1fa7-4941-8c1d-5c107781ff7e ]]></link>
<g:price><![CDATA[ 2093.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nourrir votre bébé est un moment unique qui allie complicité, tendresse et partage. Grâce à notre recette Primea 2ème âge, qui convient aussi en relais et/ou en complément de l'allaitement, profitez sereinement de ce moment biberon avec bébé dès 6 mois.</p>
<p>Notre lait infantile Primea 2 est fabriqué en France, à partir de bon lait de vache bio français, et nous excluons tout composant non nécessaire. Nos laits infantiles sont ainsi sans huile de palme.</p>
<p>Et le petit plus de nos laits  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580227</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/baa02e04d71d1acbc1a8ebc0643f7342c8ae644f945929662ec875e993acac26 ]]></g:image_link>
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
<title><![CDATA[ Babybio Primea 3ème âge 800g ]]></title>
<g:id>75c0bc9b-b394-4eef-a9eb-d7d894b13158</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-primea 3ème âge 800g?75c0bc9b-b394-4eef-a9eb-d7d894b13158 ]]></link>
<g:price><![CDATA[ 1650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nourrir votre bébé est un moment unique qui allie complicité, tendresse et partage. Grâce à notre recette Primea Croissance, qui convient aussi en relais et/ou en complément de l'allaitement, profitez sereinement de ce moment biberon avec bébé dès 10 mois et jusqu'à ses 3 ans.</p>
<p>Rien de tel qu'un lait infantile fabriqué en France, à partir de bon lait de vache bio français, et sans huile de palme pour partager ces moments de tendresse avec bébé.</p>
<p>Et le petit plus de notre recette P ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131580234</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aa12f47798aa7fd323cb7b1cc2352f6a8eea456086ed7b8c96b69c1def98097d ]]></g:image_link>
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
<title><![CDATA[ Babybio Pâtes Bolognaises Végétales Lentilles Tomate 8 Mois et + Bio 2 Pots de 200 g ]]></title>
<g:id>7a0207c0-4ad1-4643-abcb-979008048482</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-pâtes bolognaises végétales lentilles tomate 8 mois et + bio 2 pots de 200 g?7a0207c0-4ad1-4643-abcb-979008048482 ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Pâtes Bolognaises Végétales Lentilles Tomate 8 Mois et + Bio 2 Pots de 200 g est une purée de légumes, pâtes et lentilles Bio, un plat végétarien complet avec de délicieux morceaux fondants.</p>
<p>Sans sel ajouté, sans lait.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.</p>
<p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510606</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef714bc62414d6e10d1ad36070567f0363b6f42f29eb9ef543e5a8495f8bcc79 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio Tajine Végétal Carotte Pois Chiches Abricot 8 Mois et + Bio 2 Pots de 200 g ]]></title>
<g:id>93e46320-37ad-4792-8bed-d2b8a4b9bb30</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-tajine végétal carotte pois chiches abricot 8 mois et + bio 2 pots de 200 g?93e46320-37ad-4792-8bed-d2b8a4b9bb30 ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio Tajine Végétal Carotte Pois Chiches Abricot 8 Mois et + Bio 2 Pots de 200 g est une purée de légumes, boulghour, pois chiches et abricot Bio, un plat végétarien complet avec de délicieux morceaux fondants.</p>
<p>Sans sel ajouté, sans lait.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.</p>
<p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510620</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b9233276df285b6a0b2dfa82684dacdeaed819d4a9e6b38f93b28aeb621ad14b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio assiette Gratin Panais  Potimaron ]]></title>
<g:id>379e9c21-d783-46b5-9470-41ccc1585d3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette gratin panais  potimaron?379e9c21-d783-46b5-9470-41ccc1585d3c ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <div id="more_info_block" class="clear">
<div id="more_info_sheets" class="sheets align_justify">
<div id="idTab1" class="rte">
<p>Voici un joli assortiment de légumes qui va ravir bébé. Panais et potimarron du Val de Loire se mélangent à merveille pour donner à ce plat toute sa saveur. Et parce que nos petits sont gourmands, Babybio a ajouté une pointe de crème et de parmesan d'Italie.</p>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131530772</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60d4861d9fb0f2f43e5b647cd1b2d413c111f2c7b422e6023c0830a7d93723cd ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio assiette légumes vert panais et boulghour 230g ]]></title>
<g:id>cfcd573b-c355-4c95-b70f-186180eb5b78</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette légumes vert panais et boulghour 230g?cfcd573b-c355-4c95-b70f-186180eb5b78 ]]></link>
<g:price><![CDATA[ 230.00 EUR ]]></g:price>
<description><![CDATA[ <p>Tout le gratin est réuni dans cette recette gourmande : panais, petits pois , brocolis, carottes et courgettes. Ils ont tous répondu présents pour entourer les graines de boulghour de beaucoup d'amour !</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131501666</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69741e31c0e1a4a2aa08e903ea0f8b7941f7522722386018b2e9f8dd92af6836 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio assiette patate douce et châtaigne 230g ]]></title>
<g:id>48bbcb06-e06e-4f9f-8bd9-43fe1d80c7df</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-assiette patate douce et châtaigne 230g?48bbcb06-e06e-4f9f-8bd9-43fe1d80c7df ]]></link>
<g:price><![CDATA[ 280.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec son petit goût sucré, la patate douce d’Espagne se marie à merveille avec la châtaigne d’Ardèche et sa cousine la pomme de terre du Val de Loire. Pour régaler bébé, Babybio y a rajouté de la pintade fermière du Poitou. Miam ! </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131501581</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dfa49db2c4e6a3a58d8f39f211092e230d0b55cb4855924ee44d2bca546f57ac ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio petit pot bonne nuit légumes variés-blé x2 200gr ]]></title>
<g:id>99cfd5e1-40ea-498a-a185-205a7391b701</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petit pot bonne nuit légumes variés-blé x2 200gr?99cfd5e1-40ea-498a-a185-205a7391b701 ]]></link>
<g:price><![CDATA[ 350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les petits pots bonne nuit carotte des landes, patate douce et blé de Babybio sont un mélange très gourmand de légumes et céréales issus de l’agriculture biologique. Ils raviront les papilles de votre enfant dès l’âge de 6 mois lors de la diversification. Ils sont sans lait et sans sel ajouté. nnLa cuisson vapeur est utilisée pour conserver les vitamines et les minéraux et préserver les couleurs et saveurs naturelles des aliments. nnSoucieux de la santé de votre enfant, Babybio a sélect ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510590</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c7c828b53a2c80edb09ef01efae3de7679085f1ae85eeb0fdb709d19e2a326b ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio petits pots Bonne Nuit carotte butternut riz 2x200 g ]]></title>
<g:id>a9596b23-8aee-492a-a420-66ca9f0b5630</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petits pots bonne nuit carotte butternut riz 2x200 g?a9596b23-8aee-492a-a420-66ca9f0b5630 ]]></link>
<g:price><![CDATA[ 350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Offrez un plat savoureux à votre enfant avec </span><span>le menu carotte des Landes, Butternut et riz de Camargue.<br /></span><span>A partir </span><span>de 6 mois,</span><span> il est important de faire découvrir à bébé d’autres goûts sous différentes textures, Babybio sélectionne rigoureusement ses ingrédients pour rendre inoubliables ses recettes et ravir le palais de bébé.</span><br /><br /><span>Babybio présente </span><span>un petit pot pour le dîner</span><span> où le goût déli ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510576</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fc25db853e97da6a0c107ae7a92db4a23736be2c740e34c13bacdfe4ddd15259 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio petits pots carottes des landes et potimarron 2*130g ]]></title>
<g:id>04ea80b9-eb15-42ed-b797-2095402834b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-petits pots carottes des landes et potimarron 2*130g?04ea80b9-eb15-42ed-b797-2095402834b7 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Babybio, Petit Pot Légumes : Carotte des Landes, Potimarron. Composée de carottes issues du sol sablonneux des Landes et des potimarrons cultivés dans la Drôme, cette recette est le reflet de nos régions. Sans sel ajouté, sans épaississant, sans gluten et sans lait.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510422</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8a7b42d9d36220fdf0aa92ef728eb85b72066e795b2a11374f274f574959ee43 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio pomme verveine 2x130g ]]></title>
<g:id>9eb93768-8c09-4da8-aa62-cad5dee16fa7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-pomme verveine 2x130g?9eb93768-8c09-4da8-aa62-cad5dee16fa7 ]]></link>
<g:price><![CDATA[ 245.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybio a élaboré un ensemble de petits pots bio 100% fruits et sans épaississant. Cela afin de s'adapter aux besoins de bébés dès l'âge de 4 mois.</p>
<p>Il existe de nombreux parfums de petits pots bio pour découvrir de nouvelles saveurs de façon naturelle.</p>
<p>La politique de Babybio est de proposer des produits issus de l'agriculture biologique.</p>
<p><span>Lorsque Newton reçut une pomme sur la tête il découvrit la loi de l'attraction universelle : Pomme de Nouvelle-Aquitaine + Vervei ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131510705</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/adf68ff2dc78d5d53104a61afbbabe378e212684f29efa796ff22ec6c339b3a0 ]]></g:image_link>
<g:product_type><![CDATA[ DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babybio poudre céréales 3 fruits 220g ]]></title>
<g:id>f4586a69-0219-4fcb-a275-3a7016cb5c7e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babybio-poudre céréales 3 fruits 220g?f4586a69-0219-4fcb-a275-3a7016cb5c7e ]]></link>
<g:price><![CDATA[ 555.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le quinoa est appelé "chisiya mama", mère de toutes les graines, par les Incas.Babybio a été cherché les meilleures récoltes et les a incorporées à sa recette avec des fruits doux qui vont ravir les papilles de vos enfants.</p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3288131500133</g:gtin>
<g:brand><![CDATA[ BABYBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db2b0c98a03eded349aad2f730a07eeffa3475a4de755d6675f8fe741b442e72 ]]></g:image_link>
<g:product_type><![CDATA[ Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Babylena Liniment biologique 400ml ]]></title>
<g:id>b7b5635a-32cd-47a0-8a4a-48da54e95cc4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babylena-liniment biologique 400ml?b7b5635a-32cd-47a0-8a4a-48da54e95cc4 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Liniment Biologique Oléo Calcaire Babylena des laboratoires BIOES est un soin issu de l'agriculture biologique qui vise à nettoyer en profondeur la peau et à apaiser la peau de bébé.</p>
<p>Le Liniment Biologique Babylena de BIOES, à base d’huile d’olive issue de l'agriculture biologique, a été conçu pour agir en 3 étapes sur les fesses de bébé :<br />- Nettoyer<br />- Adoucir les rougeurs du siège<br />- Nourrir et protéger la peau de bébé</p>
<p>Ce Liniment Biologique Oléo Calcaire est l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401397611669</g:gtin>
<g:brand><![CDATA[ BIOES ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/97a2d55765d180d4a7814579d12bd7b32149db051cbaf79c9bdffb23e62aeccb ]]></g:image_link>
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
<title><![CDATA[ Babyspasmyl compte goutte 30 ml ]]></title>
<g:id>faaff755-2100-4555-92ee-75d7311db911</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/babyspasmyl-compte goutte 30 ml?faaff755-2100-4555-92ee-75d7311db911 ]]></link>
<g:price><![CDATA[ 670.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>Baby</span><span>Spasmyl</span></span><span>®</span><span> est un dispositif médical à action physique et mécanique à base de siméticone, qui aide à soulager la colique du nourrisson, l’aérophagie, les ballonnements et les troubles digestifs chez l’adulte, l’enfant et le nourrisson.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760001040951</g:gtin>
<g:brand><![CDATA[ MAYOLY ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/312d4290752cf02b08b154bdc0504aeba60a9a8eb57790c5387a4666b8ca44d0 ]]></g:image_link>
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
<title><![CDATA[ Baccide Gel mains 1L ]]></title>
<g:id>8e6b2a94-7012-420b-8fba-e72b687b8f96</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/baccide-gel mains 1l?8e6b2a94-7012-420b-8fba-e72b687b8f96 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>Avec une formule issue du milieu hospitalier active dès 30 secondes, Baccide gel mains est idéal pour l'hygiène de vos mains.</span><br /><br /><span>Baccide s'utilise sans eau, sans serviette et sèche tout seul.</span><br /><br /><span>Pratique et facile à  utiliser, Baccide vous aide à  garder des mains saines à  tout moment (en cas d'épidémie de gastro-entérite ou de grippe par exemple).</span><br /><br /><span>Sa formule triple action bactéricide (1), fongicide (2) et virucide ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401081741078</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/177f2ebce1567f016da067aafc57786760a2d7683a70d455ca2d7cf470d89527 ]]></g:image_link>
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
<title><![CDATA[ Bactidose Gel hydroalcoolique flacon pompe 300 ml ]]></title>
<g:id>25b1d853-8b96-4ac1-ac12-ec3d3549444e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bactidose-gel hydroalcoolique flacon pompe 300 ml?25b1d853-8b96-4ac1-ac12-ec3d3549444e ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <div id="type_info_prio_11_1">
<p>Gilbert Bactidose Gel Hygiène Mains 300 ml est un gel hydroalcoolique pour les mains qui permet un nettoyage et une désinfection rapide des mains sans aucun rinçage.</p>
<p>Ce gel contient des agents hydratants afin d'éviter tout dessèchement des mains après utilisation du gel.</p>
<p>Hypoallergénique.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646213007</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27039711866f6b1b83a27b0d671516f6c28fe4a020f01333b241f45574bd66c4 ]]></g:image_link>
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
<title><![CDATA[ Balépou spray répulsif bio 100ml ]]></title>
<g:id>247df7d5-a977-496b-8b59-1caddd4fadc8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bal-pou spray répulsif bio 100ml?247df7d5-a977-496b-8b59-1caddd4fadc8 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>BALEPOU est un spray répulsif à action préventive.</p>
<p>Il permet de lutter contre la contamination de manière naturelle et efficace.</p>
<p>Sa formule exclusive, non agressive, non chimique associe des huiles essentielles biologiques sélectionnées pour leurs propriétés répulsives.</p>
<p>Sans insecticides, sans alcool et délicatement parfumé à la lavande, Balépou assure une protection naturelle au quotidien.</p>
<p>Facile d’utilisation, il s’utilise aussi souvent que nécessaire sans agress ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700225602009</g:gtin>
<g:brand><![CDATA[ INELDEA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/168406c2623209e083490fb0c8c542cc77b1ad916e977073ca12cf527f0b6daa ]]></g:image_link>
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
<title><![CDATA[ Baume du Tigre Fluide 90ml ]]></title>
<g:id>a2099d73-d51c-4730-9a27-abdfbeb864d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/baume-du tigre fluide 90ml?a2099d73-d51c-4730-9a27-abdfbeb864d9 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>Fluide Baume du tigre</span><span> est formulé tout spécialement pour aider à détendre et apaiser les douleurs, tensions et contractures musculaires. Que ce soit après une journée de travail intense, un long voyage ou trajet en voiture, une séance de sport, un après-midi jardinage ou encore tout simplement le matin au réveil, des tensions musculaires peuvent se faire sentir. Outre la douleur occasionnée, ces contractures musculaires entraînent une gêne et un inconfort po ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8888650500178</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a32aee6d3ea41df2198e1d0528c6176420805e7434e0d52fcc207cb76ae6b385 ]]></g:image_link>
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
<title><![CDATA[ Baume du tigre rouge 19g ]]></title>
<g:id>91bd7414-f5a9-4a40-b07f-09569eddcbac</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/baume-du tigre rouge 19g?91bd7414-f5a9-4a40-b07f-09569eddcbac ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le baume du tigre rouge soulage les muscles et les articulations, les piqûres et démangeaisons, les voies respiratoires qui sont encombrées et calme les maux de tête et migraines.</p>
<p>Fabriqué en Chine, il redonne de l’énergie en renforcant la circulation sanguine, soulage les douleurs articulaires et musculaires, piqûres d’insectes et dégage les voies respiratoires grâce aux huiles essentielles de menthol, de clous de girofle, camphre cajeput, cassia et menthe poivrée.</p>
<p>Son parfum d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8888650404063</g:gtin>
<g:brand><![CDATA[ COSMEDIET BIOTECHNIE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5b989638f482df0c22daf782cdc0c055dffd9cad2b07a773e0c6434dfdfa2cf4 ]]></g:image_link>
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
<title><![CDATA[ Baume du tigre rouge 30g ]]></title>
<g:id>f962c35e-5a68-44ec-bbe8-6719e0c7165a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/baume-du tigre rouge 30g?f962c35e-5a68-44ec-bbe8-6719e0c7165a ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">D'origine asiatique, le Baume du Tigre rouge est utilisé en Chine depuis très longtemps. Le Baume du Tigre fait partie de la médecine douce de par sa fabrication à partie de plantes naturelles.<br /><br /> Qu'il soit rouge ou blanc, les ingrédients de base sont les mêmes mais à quelques différences près.<br /><br /> Le baume rouge contient de l'huile de lavande et de dalchini, tandis que dans le blanc, on a de l'huile d'eucalyptus et de menthe pudine.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8888650416035</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/44568bc60925f3e2ab07ae4a9f152be1d637fcc69aa83766f1085ee758e8ee99 ]]></g:image_link>
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
<title><![CDATA[ Bausch & Lomb Désodrop solution ophtalmique 8 ml ]]></title>
<g:id>42cc1431-40f9-4d21-bc94-f75c0b70c328</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bausch-lomb désodrop solution ophtalmique 8 ml?42cc1431-40f9-4d21-bc94-f75c0b70c328 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La </span><span>solution ophtalmique Désodrop des laboratoires Bausch + Lomb</span><span> est un dispositif médical lubrifiant et protecteur. Ce collyre permet de traiter les symptômes associés à l'inflammation provoquée par une infection. Désodrop est aussi adapté en cas de sécheresse oculaire. Enfin, ces gouttes pour les yeux aident à la réparation, après un stress provoqué par une intervention chirurgicale ou à la suite d'un traumatisme.</span><br /><br /><span>L'infection oculaire</ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000699</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0513eb2cf27f80d2643fbec35d7e45bf7effb2789c9ddae8a74a4bf28f677cc1 ]]></g:image_link>
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
<title><![CDATA[ Bausch Bloxallergi solution 10ml ]]></title>
<g:id>832b22ca-c556-42fb-8262-dddc3752cbad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bausch-bloxallergi solution 10ml?832b22ca-c556-42fb-8262-dddc3752cbad ]]></link>
<g:price><![CDATA[ 680.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bloxallergi est une solution ophtalmique qui contient de l'Ectoin, une molécule naturelle de protection cellulaire qui aide à réduire l'inflammation et stabilise les membranes ainsi que de l'acide hyaluronique, un hydratant naturel aux propriétés apaisantes.<br />Bloxallergi s'utilise pour prévenir et soulager les symptômes de la conjonctivite allergique, soulager les yeux irrités et lubrifier les yeux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614790000347</g:gtin>
<g:brand><![CDATA[ BAUSCH & LOMB ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2232980199af68d41ebf6dba7596647a1e9b2121f08addedad7479cfb3ee098 ]]></g:image_link>
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
<title><![CDATA[ BcomBIO Baume Corps Fondant Nourrissant Bio 200 ml ]]></title>
<g:id>f7240d61-4c86-4965-8618-318cbb1f1864</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-baume corps fondant nourrissant bio 200 ml?f7240d61-4c86-4965-8618-318cbb1f1864 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>BcomBIO Baume Corps Fondant Nourrissant Bio 200 ml est un baume nourrissant au pur beurre de karité Bio, enrichi en huiles de sésame et de coco Bio, qui nourrit et apporte confort à la peau.</p>
<p>Sa texture onctueuse et fondante pénètre rapidement pour laisser une peau douce délicatement parfumée.</p>
<p>99% du total des ingrédients sont d'origine naturelle.<br />23,8% du total des ingrédients sont issus de l'Agriculture Biologique.</p>
<p>Cosmos Organic certifié par Ecocert Greenlife selon ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705732</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bace4291b30f567c841f05bf269fa92f390b53809e75c229ca56fc61b876f34d ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Contour des Yeux Soin Triple Action 20 ml ]]></title>
<g:id>6e121161-80c5-4975-969e-43e3283e937e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-contour des yeux soin triple action 20 ml?6e121161-80c5-4975-969e-43e3283e937e ]]></link>
<g:price><![CDATA[ 1495.00 EUR ]]></g:price>
<description><![CDATA[ <p>BcomBIO Intense Soin Triple Action Contour des Yeux est une émulsion fraiche qui apporte un soin complet au contour de l'oeil en luttant contre les rides, les cernes et les poches.</p>
<p>Sa tolérance a été testée sous contrôle ophtalmologique.</p>
<p>Sans paraben, sans phenoxyethanol, sans OGM, sans PEG, sans silicone, sans colorant ni parfum de synthèse.</p>
<p>Cosmétique BIO respectant la charte COSMEBIO.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705275</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/45b5b2b6e740ff3871c785c8ea77b0812dd494b4c7365b1f67ff871df904e74e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Eau Micellaire Hydratante 400 ml ]]></title>
<g:id>830a9098-46f6-48c1-981d-403de023035b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-eau micellaire hydratante 400 ml?830a9098-46f6-48c1-981d-403de023035b ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Véritable soin, cette eau micellaire nettoie en douceur la peau tout en l’hydratant. Sa texture gélifiée inédite élimine parfaitement les traces de maquillage, même waterproof. L’acide hyaluronique maintient le taux d’hydratation et renforce la barrière naturelle de la peau. L’eau des glaciers et le coton arctique adoucissent et apaisent les peaux délicates. Parfum délicat sans allergènes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705671</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d35b7a06e92b7c77a3bc1a1f2934cb16a1a12f1c0d5f13b1381a1cdee917e586 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Essentielle Crème Hydratante Corporelle 200 ml ]]></title>
<g:id>29eb3ae6-af14-499a-bbb7-bd67a6d0f198</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-essentielle crème hydratante corporelle 200 ml?29eb3ae6-af14-499a-bbb7-bd67a6d0f198 ]]></link>
<g:price><![CDATA[ 1585.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème hydratante raffermissante B com Bio est une crème pour le corps bio indiquée pour raffermir et tonifier la peau tout en assurant sa nutrition et son hydratation.</p>
<p>B com Bio organic Essentielle Crème hydratante raffermissante se compose d'ingrédients biologique ou d'origine végétale tel que du gingembre aux propriétés énergisantes, pour dynamiser et raffermir le corps.</p>
<p>Associé aux Oméga 3 et 6 extraits de pépins de raisin riche en acides gras hydratants, et au beurre de k ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705114</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/436e3c15628e491b314e21a893fdccb4459c083face4cc0e6beca073485fe661 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Essentielle Crème Protectrice et Réparatrice Mains et Ongles 50 ml ]]></title>
<g:id>af2cae38-1a11-4198-9f2e-ac0821127138</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-essentielle crème protectrice et réparatrice mains et ongles 50 ml?af2cae38-1a11-4198-9f2e-ac0821127138 ]]></link>
<g:price><![CDATA[ 480.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin quotidien pour les mains et les ongles certifié bio qui protège et répare les peaux abîmées ou desséchées et qui renforce l'ongle et stimule sa repousse.</p>
<p>Texture non grasse, pénétration rapide.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705138</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/019cd8dec28dfb844c43e01e723657e3250e09cea0d8c8f9cd595f13b4088334 ]]></g:image_link>
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
<title><![CDATA[ BcomBIO Essentielle Huile de Beauté 100 ml ]]></title>
<g:id>1b2aaeaf-4b19-4caa-932e-3197a623acc2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-essentielle huile de beauté 100 ml?1b2aaeaf-4b19-4caa-932e-3197a623acc2 ]]></link>
<g:price><![CDATA[ 1560.00 EUR ]]></g:price>
<description><![CDATA[ <p>BcomBIO Essentielle Huile de Beauté 100 ml à la texture soyeuse est une huile sèche multifonctions qui nourrit et sublime la peau et les cheveux.</p>
<p>La formule de cette huile contient de l'huile d'Argan issue du Maroc, 100% pure et biologique issue de première pression à froid, très riche en vitamine E. Les fleurs de désert protègent de la déshydratation car riches en vitamine A.</p>
<p>Une fois appliquée, l'huile dépose un voile satiné délicatement parfumé sur la peau. La peau est douce, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705725</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e310c6a5f0b8ce6b2b942d88454eb31aacf3892eac874f8ceecc3432e584426 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Exfoliant Doux 75 ml ]]></title>
<g:id>9a516024-2fa5-4e4e-943a-1fd06128d630</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-exfoliant doux 75 ml?9a516024-2fa5-4e4e-943a-1fd06128d630 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème gommante douce pour le visage et le cou adaptée à toutes les peaux même les peaux fragiles qui prépare la peau aux bienfaits des soins du visage BcomBIO.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705244</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7083789b31814e5d2a5ffbf5cf17ba736704a03c0ffc800d414f488918dc8b8b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Homme Gel Douche 3en1 200 ml ]]></title>
<g:id>7d424f62-2277-4f83-be8b-58a4e70ee7ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-homme gel douche 3en1 200 ml?7d424f62-2277-4f83-be8b-58a4e70ee7ba ]]></link>
<g:price><![CDATA[ 640.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le gel douche 2 en 1 lave le corps et les cheveux en une seule utilisation.</p>
<p>Le gel douche lave la peau et les cheveux sans les irriter.</p>
<p>Grâce au Gingembre et à la Menthe la peau est apaisée et purifiée, les cheveux sont plus forts et plus souples et facile à coiffer.</p>
<p>100% d’ingrédients végétaux d’origine biologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099707040</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/55e013bfb89126ee7307ef1c0e9f853bbf3103aeb2cbe92d909ef52250dbe59c ]]></g:image_link>
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
<title><![CDATA[ BcomBIO Homme Gel Nettoyant 125 ml ]]></title>
<g:id>61b4b6b8-72c6-42e6-91b7-5d7adeaa1959</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-homme gel nettoyant 125 ml?61b4b6b8-72c6-42e6-91b7-5d7adeaa1959 ]]></link>
<g:price><![CDATA[ 740.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Sa formule sans savon nettoie la peau sans la dessécher, en éliminant les impuretés et l’excès de sébum.</p>
<p class="p1">A base de Gingembre et d’extrait de Chêne, il apaise, protège et tonifie l’épiderme. </p>
<p class="p1">Grâce à leur pouvoir exfoliant, les micro-billes de Jojoba désincrustent les poils incarnés pour préparer au rasage.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099707019</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6f9dccf4fe0fbbc0b9f3123284753c46244d7e929467d3febcef39e6edb79d2b ]]></g:image_link>
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
<title><![CDATA[ BcomBIO Homme Huile de barbe 50 ml ]]></title>
<g:id>1124922f-eddb-40da-95c6-960523119f8f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-homme huile de barbe 50 ml?1124922f-eddb-40da-95c6-960523119f8f ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <div class="titre_zone_desc">DESCRIPTION</div>
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>BcomBIO Homme Huile de Barbe 50 ml est une huile spécialement développée pour le soin de la barbe.</p>
<p>Cette huile contient une association de 5 huiles végétales : Argan, Raisin, Jojoba, Ricin et Sésame. Elle contient également des baies sauvages arctiques qui protègent et de l'huile essentielle de Romarin qui revitalise. Ce soin nourrit, assouplit et discipline le poil, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099707224</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/502694455cd7d4b85195b1ad8b6ec1d9c47273239cd9beeee1dae4ce7184122e ]]></g:image_link>
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
<title><![CDATA[ BcomBIO Huile Lavante Nourrissante Bio 400 ml ]]></title>
<g:id>d23872e9-a1d1-4fe1-9eb4-d22724fc6372</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-huile lavante nourrissante bio 400 ml?d23872e9-a1d1-4fe1-9eb4-d22724fc6372 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>BcomBIO Huile Lavante Nourrissante Bio 400 ml est une huile hautement concentré en actifs relipidants grâce à sa texture bi-phase. Ce soin de douche certifié bio nettoie en douceur et nourrit intensément les peaux les plus délicates. L'association de 3 huiles précieuses (Coquelicot, Ricin, Abricot) et de l'extrait de Miel adoucit la peau, préserve le film hydrolipidique et protège des sensations d'inconfort liées à l'eau calcaire (tiraillements, démangeaisons, rugosités). La formule est enric ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099701413</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/56b92b9cb2acd31eb1a866160c7ce7d43071c3eb2d34bda46d9fdc11712b87ef ]]></g:image_link>
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
<title><![CDATA[ BcomBIO Lait Démaquillant Doux 200 ml ]]></title>
<g:id>2676f424-8146-4443-852b-cf396991e3aa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-lait démaquillant doux 200 ml?2676f424-8146-4443-852b-cf396991e3aa ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <div>
<div>Lait onctueux certifié BIO nettoie et démaquille le visage et les yeux en un seul geste.</div>
<div>Sa formule douce à base d'eau florale de Rose Bio rafraichit la peau.</div>
<div>Enrichi en Bisabolol végétal aux propriétés apaisantes il convient également aux peaux sèches et sensibles pour un confort immédiat.</div>
<div>Parfaitement nettoyée, la peau retrouve douceur et souplesse et l’épiderme est débarrassé des impuretés et des traces de maquillage.</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705398</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02f754fb5d40327a95eef2a8745678bdf91b24b2aa0978db33351dd9bc922b77 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Lotion Tonique Bio 200 ml ]]></title>
<g:id>a895ae0f-657f-4167-999b-0e929f413842</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-lotion tonique bio 200 ml?a895ae0f-657f-4167-999b-0e929f413842 ]]></link>
<g:price><![CDATA[ 960.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p>Eau florale en brumisateur, idéale pour tonifier et rafraîchir le visage, ainsi que pour apporter brillance aux cheveux. </p>
<p>Résultats : L'épiderme est réveillé en douceur, prêt à profiter des bienfaits des soins de la gamme. Les cheveux sont lumineux. </p>
<p>Actions et principes actifs :</p>
<p>- Adoucit, apaise l'épiderme et éclaircit les cheveux : Eau de Camomille Romaine Bio.</p>
<p>- Tonifie, rafraîchit et resserre les pores : Extrait de Fougère.</p>
<p>- Hydrate l'épiderme  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705053</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8718990612cbbb83dd4a263841587f976add0967ecba41dc48778e39e54acd6f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Masque Détoxifiant Effet Peau Neuve 50 ml ]]></title>
<g:id>2024ace2-4f37-45bf-8caa-8fff273b5d2c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-masque détoxifiant effet peau neuve 50 ml?2024ace2-4f37-45bf-8caa-8fff273b5d2c ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce masque 3 en 1 certifié bio détoxifie, exfolie et adoucit la peau en un seul geste. sa formule enrichie en actifs exfoliants favorise la régénération de la peau pour un effet « peau neuve » immédiat. un complexe végétal à base de fleurs d’immortelle stimule le processus naturel de détoxification pour libérer la peau des polluants qui l’asphyxient. les acides de fleurs et de fruits associés aux pépins de fraise affinent le grain de peau et ravivent l’éclat du teint. L’huile de camélia nourri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705749</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e41d6df6bbbf85cfe6140b1aa96f7bfcc339eefc75b4220b599b5c07e679cb4 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Mousse Nettoyante Perfectrice de Peau 150 ml ]]></title>
<g:id>2cc83869-24b1-4164-a610-f5802b38d114</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-mousse nettoyante perfectrice de peau 150 ml?2cc83869-24b1-4164-a610-f5802b38d114 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p>Mousse légère sans savon qui libère en douceur la peau des impuretés et des traces de maquillage.</p>
<p>Résultats : La peau est parfaitement nettoyée, lumineuse et respire le bien-être.</p>
<p>Ce soin contient des principes actifs efficaces qui respectent votre peau :</p>
<p>- Eau florale de Lavande : rafraîchit et purifie la peau.</p>
<p>- Mangue : bonne dermo-compatibilité, adoucit la peau, bon pouvoir moussant.</p>
<p>- Tensioactifs naturels issus de la palme et du coco : ne dessè ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705404</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/52c220c7c98236e54df0a509d0cdb9d92f9ac65d168f7182abdb552f01754351 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Patchs Hydrogel Lissants et Défatigants 2 Patchs ]]></title>
<g:id>6d3a37d1-1004-4e48-a245-85320640ece7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-patchs hydrogel lissants et défatigants 2 patchs?6d3a37d1-1004-4e48-a245-85320640ece7 ]]></link>
<g:price><![CDATA[ 465.00 EUR ]]></g:price>
<description><![CDATA[ <p>BcomBIO Patchs Hydrogel Lissants et Défatigants 2 Patchs est un sérum transformé en patch gélifié à base de sérum qui apporte un soin complet au contour des yeux. Conçu avec la technologie hydrogel, sa texture innovante à effet seconde peau défatigue instantanément le regard grâce à son effet frais et assure une meilleure pénétration des actifs.<br />Un actif high tech issu de l'arbre à soie lisse la paupière et le contour de l'œil.<br />Capable de retenir jusqu'à 1000 fois son poids en eau,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700737</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e0ebce51b66cf4b6db4c6f99b7d5b9a687e1609ea896475e2e8ce9038de200f9 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Sérum Concentré Hydratant Visage et Yeux 30 ml ]]></title>
<g:id>0ac4328f-8d01-4773-903b-54f825d3f470</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-sérum concentré hydratant visage et yeux 30 ml?0ac4328f-8d01-4773-903b-54f825d3f470 ]]></link>
<g:price><![CDATA[ 1570.00 EUR ]]></g:price>
<description><![CDATA[ <div class="titre_zone_desc">DESCRIPTION</div>
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>BcomBIO Sérum Concentré Hydratant Visage et Yeux 30 ml est un soin hautement concentré en principes actifs. Ce sérum hydrate intensément et durablement la peau. Un complexe unique de 2 types d'Acides Hyaluroniques et de Sucres Végétaux agit sur l'ensemble des facteurs à l'origine de la déshydratation. Le Figuier du Désert apaise et adoucit la peau. Il laisse un fini poudré  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705701</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60ccf4448a443a081ba21fa28ffff75e2e9033d92fd46711900fed436d08c93a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBIO Sérum Lissant Fermeté 30 ml ]]></title>
<g:id>01f8c688-24ef-4e7a-9656-0a044615bfb8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-sérum lissant fermeté 30 ml?01f8c688-24ef-4e7a-9656-0a044615bfb8 ]]></link>
<g:price><![CDATA[ 1840.00 EUR ]]></g:price>
<description><![CDATA[ <p>BcomBIO Intense Sérum Lissant Fermeté assure un effet tenseur et lissant immédiat grâce à l'extrait d'Avoine.</p>
<p>L'exceptionnel pouvoir hydratant de l'Acide Hyaluronique permet de combler les rides et ridules et de redonner tonicité à la peau.</p>
<p>Tolérance testée sous contrôle dermatologique.</p>
<p>Sans paraben, sans phenoxyethanol, sans OGM, sans PEG, sans silicone, sans colorant ni parfum de synthèse.</p>
<p>Cosmétique BIO respectant la charte COSMEBIO.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705497</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bd684762095ad1972b48d876da861f5d257a09f938757339f396a927d916fa3a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBio Elixir de beauté 200 ml ]]></title>
<g:id>4434e060-61f1-493b-b140-765fb482ebe8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-elixir de beauté 200 ml?4434e060-61f1-493b-b140-765fb482ebe8 ]]></link>
<g:price><![CDATA[ 1280.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette eau de soin certifiée BIO est un véritable élixir de beauté aux multiples propriétés. En un seul geste, elle purifie et lisse la peau, resserre les pores et révèle l’éclat du teint.</p>
<p>Hautement concentrées en molécules originelles, les cellules actives d’Iris pâle(1)  lissent le micro-relief cutané et améliorent la qualité de la peau. La synergie de 6 huiles essentielles(1) purifie la peau et favorise sa régénération. Grâce à sa teneur en AHA, l’extrait de Pomelo(1) active le renou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099702267</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf4b32527d9be2db3b8e5d95c117fc61eb6131ef589ee4333cda6ede7d0dabdf ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBio Homme fluide purifiant matifiant 50 ml ]]></title>
<g:id>915c04de-44e2-4409-bc93-9f33d0127576</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-homme fluide purifiant matifiant 50 ml?915c04de-44e2-4409-bc93-9f33d0127576 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>1. Anti-imperfections : favorise l’élimination des boutons et des points noirs.</span><br /><span>2. Anti-brillance : matifie la peau en neutralisant l’excès de sébum.</span><br /><span>3. Anti-pores dilatés &amp; anti-marques : agit comme un micro-peeling pour désobstruer, resserrer les pores et accélérer le renouvellement cellulaire.</span><br /><span>4. Anti-récidive : rééquilibre la peau pour éviter l’apparition de nouvelles imperfections et lutte contre les poils incarnés à l’origi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099702311</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/edd361aca11436369f0aaf058dd88fdcbe221b940afb943b3f644e5f8bbbe042 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBio Sérum actif ultra concentré 30 ml ]]></title>
<g:id>a8501277-cb6b-423b-aeb3-d7eca24abb2f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-sérum actif ultra concentré 30 ml?a8501277-cb6b-423b-aeb3-d7eca24abb2f ]]></link>
<g:price><![CDATA[ 2685.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fruit de la recherche avancée BcomBIO, ce sérum réparateur aide à corriger les 7 principaux signes de l’âge : ridules, rides installées et profondes, perte de fermeté et d’élasticité, manque d’éclat, déshydratation.</p>
<p>Un <span>trio d’Acides Hyaluroniques</span> de bas poids moléculaire pénètre en profondeur pour un effet repulpant et combleur de rides.</p>
<p>Le <span>Collagène Végétal</span> redonne fermeté et élasticité.  Actif réparateur par excellence, le <span>Panthénol Végétal<span ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099701956</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2cb52f11f20b97b1d8145665bd65cccbfa43e9f700e1ed48684c4b371fa770f3 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BcomBio intime gel moussant doux 500ml ]]></title>
<g:id>145e3cae-0507-4f57-a0b3-eb1e15afb00b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bcombio-intime gel moussant doux 500ml?145e3cae-0507-4f57-a0b3-eb1e15afb00b ]]></link>
<g:price><![CDATA[ 970.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs-1">
<p>Ce gel moussant doux certifié BIO, spécifiquement élaboré pour la toilette intime et les peaux sensibles, nettoie en douceur grâce à ses tensioactifs naturels. Il protège votre intimité en respectant son pH physiologique, et lui apporte fraîcheur et confort grâce aux propriétés antiseptiques et apaisantes de la Sauge officinale BIO.</p>
<p> Tolérance testée sous contrôle gynécologique.</p>
<p> conserver jusqu’à 6 mois après ouverture</p>
</div>
<div id="tabs-2" class="hidesc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099705435</g:gtin>
<g:brand><![CDATA[ BCOMBIO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/08b35a88534ce2719faf6f5c0a140c50aec418ae54b61fbee2150c4c552d682d ]]></g:image_link>
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
<title><![CDATA[ Beaphar Batonnets Dentaires Petiits Chiens -10kg ]]></title>
<g:id>4d371981-2c57-48de-9b77-ff6972c0bd42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-batonnets dentaires petiits chiens -10kg?4d371981-2c57-48de-9b77-ff6972c0bd42 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <div> Délicieuses friandises</div>
<div>• Procure une haleine fraîche</div>
<div>• Élimine la plaque dentaire et le tartre</div>
<div>• Faible en calories</div>
<div>• Contient de l'algue brune</div>
<div></div>
<div>Les problèmes bucco-dentaires sont récurrents chez les chiens. Il est primordial de se rendre compte de la nécessité de <span>prendre soin des dents</span> de votre animal.</div>
<div></div>
<div>
<div>Ces bâtonnets dentaires ont été conçus pour prévenir les problèmes bucco-dentaire ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231142736</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7672fe63e251c1830cccacec1d029811f9962f1c72ff354fbca6be8246a8676f ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Baume Coussinets Pour Chien ]]></title>
<g:id>c2f2d206-1824-4e76-9d40-b381713a0e81</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-baume coussinets pour chien?c2f2d206-1824-4e76-9d40-b381713a0e81 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>• Contient de l’huile d’arbre à Thé, de la Glycérine et de la cire d’abeille<br />• Adoucit les coussinets et lutte contre les crevasses<br />• Protège du froid, de la chaleur et des irritations</p>
<p>Le baume coussinets de Beaphar est spécialement formulé pour protéger les coussinets plantaires des chiens et des chats contre le salage, la saleté, le froid et la chaleur des routes et des trottoirs. Il adoucit les coussinets, agit contre les crevasses et prévient les irritations.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231117628</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/49b819f5c95e13f1dde7aaf0ad25d12b78c9be5a49ef5bad32fca679f8331673 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Santé Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Bâtonnet Dentaire Pour Chien x 7 ]]></title>
<g:id>4c1c3748-1103-4aa5-8fc4-6f76c5a0ce90</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-bâtonnet dentaire pour chien x 7?4c1c3748-1103-4aa5-8fc4-6f76c5a0ce90 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <div>Délicieuses friandises</div>
<div>• Procure une haleine fraîche</div>
<div>• Élimine la plaque dentaire et le tartre</div>
<div>• Faible en calories</div>
<div>• Contient de l'algue brune</div>
<div></div>
<div>Les problèmes bucco-dentaires sont récurrents chez les chiens. Il est primordial de se rendre compte de la nécessité de <span>prendre soin des dents</span> de votre animal.</div>
<div></div>
<div>
<div>Ces bâtonnets dentaires ont été conçus pour prévenir les problèmes bucco-dentaires ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231142743</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85efe003edf8847b88a43a4043d78f0a4cdf0dde5d7579abb945d43133709dd3 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Canishield Collier Grand Chien  ]]></title>
<g:id>c22144f0-438b-4779-8604-a3a91a757623</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-canishield collier grand chien ?c22144f0-438b-4779-8604-a3a91a757623 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>- 6 mois d’action sur les tiques, vectrices de la maladie de Lyme (Ixodes ricinus)<br>- 16 semaines d’action contre les puces, vectrices de la DAPP et du Ténia (Ctenocephalides felis)<br>- 5,5 mois d’action contre les phlébotomes, vecteurs de la Leishmaniose (Phlebotomus perniciosus)<br>- Substance active non absorbée dans le système sanguin<br>- Résistant à l’eau (contact occasionnel)</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231172108</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d25ff19aef3950ac8a76ecf8908bf1915c04afd185f2f7f1022878ad11d9cb4c ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires > Puces & Tiques ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Canishield Collier Petit et Moyen chien ]]></title>
<g:id>5ae3b046-f0c8-4b0b-adae-c781b556e74d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-canishield collier petit et moyen chien?5ae3b046-f0c8-4b0b-adae-c781b556e74d ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>- 6 mois d’action sur les tiques, vectrices de la maladie de Lyme (Ixodes ricinus)<br>- 16 semaines d’action contre les puces, vectrices de la DAPP et du Ténia (Ctenocephalides felis)<br>- 5,5 mois d’action contre les phlébotomes, vecteurs de la Leishmaniose (Phlebotomus perniciosus)<br>- Substance active non absorbée dans le système sanguin<br>- Résistant à l’eau (contact occasionnel)</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231172078</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8102c46caecc7e22a6273f9bdc0d7359da91985611d2ed3f382b8b0a68609692 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires environnement > Anti-parasitaires ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Collier Dimpylate Grand Chien ]]></title>
<g:id>c7863984-025d-4198-ad5f-7483ee8654b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-collier dimpylate grand chien?c7863984-025d-4198-ad5f-7483ee8654b3 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécialement conçu pour vous aider à protéger votre chien contre les ectoparasites tels que les puces et les tiques.<br>Indications d’utilisation : Affections à parasites sensibles au Dimpylate.<br><br>Chez les chiens :<br>- Élimination des puces et des tiques.<br>- Prévention des nouvelles infestations pendant une période de 4 mois pour les puces et de 3 mois pour les tiques.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231115433</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5b2b4ca65c4aaa49e31722fdbabb87eeb99290dbb2a6096cf2abbb4d1a90c213 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires > Puces & Tiques ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Collier Dimpylate Petit Chien  ]]></title>
<g:id>c233aa14-fda1-467d-849d-f27b119b5d68</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-collier dimpylate petit chien ?c233aa14-fda1-467d-849d-f27b119b5d68 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécialement conçu pour vous aider à protéger votre chien contre les ectoparasites tels que les puces et les tiques.<br>Indications d’utilisation : Affections à parasites sensibles au Dimpylate.<br><br>Chez les chiens :<br>- Élimination des puces et des tiques.<br>- Prévention des nouvelles infestations pendant une période de 4 mois pour les puces et de 3 mois pour les tiques.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231142569</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65033429e40702668848552df4f5b5dfe600b41e2fc18392e5daa3f891cfc381 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires > Puces & Tiques ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar DermaCare Shampoing assainissant chien et chat 200 ml ]]></title>
<g:id>15216b1e-ae80-4aeb-9614-6ab94d58b5a0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-dermacare shampoing assainissant chien et chat 200 ml?15216b1e-ae80-4aeb-9614-6ab94d58b5a0 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Pour chiens &amp; chats</li>
<li>À l’Argent Colloïdal, à l’extrait d’Aloe Vera &amp; aux huiles essentielles</li>
<li>Soulage les démangeaisons </li>
<li>Apaise les irritations </li>
<li>Favorise la régénération d’une peau saine </li>
<li>Fabriqué en France</li>
</ul><div></div>
<div>Ce shampoing assainit, apaise les démangeaisons et favorise le processus de régénération d’une peau saine . Grâce à ses agents actifs purifiants, il aide à réguler l’écosystème cutané en diminuant le nombre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231116256</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2ccdf9882c1eed735867f99022ebc26ae0d4dc4cb01c4e24e9bcbcdd5e2e2ee6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar DermaCare Spray Apaisant 150 ml ]]></title>
<g:id>8ba2220f-7967-4762-99cb-63985de5289f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-dermacare spray apaisant 150 ml?8ba2220f-7967-4762-99cb-63985de5289f ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Pour chiens &amp; chats </li>
<li>À l’argent colloïdal, à l’extrait d’Aloe Vera &amp; aux huiles essentielles </li>
<li>Apaise les démangeaisons généralisées </li>
<li>Assainit l’épiderme &amp; agit sur les odeurs fortes </li>
<li>Contribue à diminuer les pellicules </li>
<li>Fabriqué en France</li>
</ul><div></div>
<div>Ce spray apaise les démangeaisons généralisées, assainit l’épiderme et contribue à réguler l’écosystème cutané en diminuant le nombre de pellicules. Grâce à sa compositi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231137718</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f4bae08834c275079e0195a5d9b486e7ca7832a380366d35752d58db6b0b90de ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Flexifit Bâtonnets x7 ]]></title>
<g:id>99989096-7c1e-43c7-8d31-bfaf922a67ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-flexifit bâtonnets x7?99989096-7c1e-43c7-8d31-bfaf922a67ba ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les bâtonnets Beaphar Flexifit® sont des friandises qui apportent un soutien aux articulations, en plus d'être savoureuses grâce à leur bon goût de viande. Grâce à leur formule multi-actions, composée de glucosamine, d'omégas 3, de moule verte et de vitamine C, ils aident à maintenir des articulations souples, tout en favorisant le maintien d'os solides. Ils vont aider votre chien à se mouvoir facilement et à mener une vie active. Les bâtonnets Beaphar Flexifit® sont recommandés pour le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231200399</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5c3e23923c9b53f0728665b391fa6ff12c3ae21669c834a540a380cabfc9c363 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Articulations Animaux > Santé Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Kit Biberon Tétine ]]></title>
<g:id>4e4b0f96-0460-49ce-a2bd-611717876dc6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-kit biberon tétine?4e4b0f96-0460-49ce-a2bd-611717876dc6 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour nourrir les nouveaux-nés et les animaux en pleine croissance<br>Convient aux animaux malades ou en convalescence<br>Biberon souple et facile à utiliser<br>Contient : 1 bouteille, 6 tétines et 1 brosse pour nettoyer</p><p>Le biberon et les tétines Beaphar conviennent parfaitement aux animaux nouveau-nés en période de croissance (chiots, chatons, cobayes, hamsters, lapins, hérissons, etc.). Ils peuvent également s’employer pour administrer de la nourriture aux animaux malades et convalesce ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231112449</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e79275ab47a618ae8cfbb32408062c12f4f1f3838a35b01fed9c7fbf9048d23 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Lactol Lait Maternisé pour Chaton ]]></title>
<g:id>574671f5-f27f-4bb5-835c-8fc03684aa71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-lactol lait maternisé pour chaton?574671f5-f27f-4bb5-835c-8fc03684aa71 ]]></link>
<g:price><![CDATA[ 1010.00 EUR ]]></g:price>
<description><![CDATA[ <p>Contient les vitamines &amp; minéraux essentiels<br />Enrichi en DHA pour être au plus près du lait maternel<br />Aliment complet dès la naissance pour les chatons non sevrés<br />Aliment complémentaire pour chatons en sevrage, les femelles gestantes ou allaitantes et les chiens malades ou en convalescence.</p>
<p>Aliment complémentaire pour les chatons en sevrage, les femelles gestantes ou allaitantes et les chats malades ou en convalescence.<br />La formulation du lait maternisé Lactol a ét ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231151912</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0423a4900829753ccb2c8e1bc17b3ea675620364b0827f938e2853910839a966 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Santé Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Lait Maternisé pour Rongeurs et Lapins 200 g ]]></title>
<g:id>41c8b2ba-7eca-43f1-bf47-00ac482419c4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-lait maternisé pour rongeurs et lapins 200 g?41c8b2ba-7eca-43f1-bf47-00ac482419c4 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Aliment complet d’allaitement pour nouveaux-nés : lapins, hérissons (&gt; 50 grammes), cochons d'Inde, chinchillas, octodons, souris, rats, hamsters et gerbilles.</span></p>
<ul><li>liment d’allaitement complet pour jeunes lapins, hérissons (&gt; 50 grammes), cochons d'Inde, chinchillas, octodons, souris, rats, hamsters et gerbilles</li>
</ul><ul><li>Teneur réduite en lactose</li>
</ul><ul><li>Croissance &amp; Développement</li>
</ul><ul><li>Vitamines &amp; Minéraux</li>
</ul><p></p>
<p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231121441</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d910a7e1f7960ce8539d208c330f427c05cf87b4a2234b9024bdc9c8b15e56b1 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Lingettes Nettoyantes Yeux et Oreilles x 100 ]]></title>
<g:id>58e9b631-6a6f-429a-9db6-801736e37ab1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-lingettes nettoyantes yeux et oreilles x 100?58e9b631-6a6f-429a-9db6-801736e37ab1 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>A l’Aloe Vera, aux vertus apaisantes<br />Facilite le nettoyage quotidien<br />Respecte l’épiderme de l’animal</p>
<p>Avec les lingettes Premium de Beaphar, le nettoyage quotidien des yeux, oreilles, des pattes et du pelage de votre chien et de votre chat devient un geste simple et bénéfique pour son bien-être. La solution imprégnant ces lingettes respecte l’épiderme de l’animal.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3461921000017</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cf0e8bc51679349d8edcd7d55902d4308331cf5561d8d3b1d2bad2570a354474 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Multi-Vit vitamines pour rongeurs 50 ml ]]></title>
<g:id>256be969-885a-428f-a446-d4a9de76e5d7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-multi-vit vitamines pour rongeurs 50 ml?256be969-885a-428f-a446-d4a9de76e5d7 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Contient 11 vitamines + Vitamine C• Renforce le système immunitaire• Action bénéfique sur les dents et les os• Procure vitalité et bien-être</p>
<p>Multi-Vit contient 11 vitamines contribue à maintenir une peau et un poil en bonne santé. Il participe au fonctionnement optimal du système immunitaire et à la santé du pelage des lapins et rongeurs. Il contient de la vitamine C, qui est essentielle aux cochons d’Inde et qui renforce les dents et les os.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231114191</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09c0dfb6c4597a9fbb7e9cace24cba3048c3b989a50ceec9e8ec10618cf15ca8 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Pack Dentifrice & Brosse à Dent ]]></title>
<g:id>bcc81445-7646-4e4b-82a3-3fbf6545bfb4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-pack dentifrice & brosse à dent?bcc81445-7646-4e4b-82a3-3fbf6545bfb4 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La brosse à dents et le dentifrice de Beaphar permettent une protection totale de la dentition de votre animal. Il est important de brosser régulièrement ses dents afin d’éliminer la plaque dentaire et de limiter la mauvaise haleine.</p>
<p>La brosse à dents de Beaphar dispose de deux têtes et convient à toutes les tailles et races de chiens et de chats. Pratique et confortable, elle dispose d’un manche antidérapant. Les poils de la brosse ne sont pas de la même taille afin de nettoyer les de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231155040</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2427b599687e7a07348ff13c444352085b83aa000a7a128698d41e6de21f652f ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Accessoires Animaux  > Accessoires Chiens > Hygiène & Soins Animaux  > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Pommade pour Plaies Pour Chiens Chats Oiseaux et Rongeurs - 30 ml ]]></title>
<g:id>7c169e49-175a-4fa8-9c27-9c8aa2fa1267</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-pommade pour plaies pour chiens chats oiseaux et rongeurs - 30 ml?7c169e49-175a-4fa8-9c27-9c8aa2fa1267 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette pommade pour plaies de Beaphar favorise la réparation des plaies cutanées superficielles ou la réparation de la peau sèche ou abîmée chez votre animal.</p>
<p>En associant le Miel au Curcuma et à l’Aloe Vera, la pommade contribue à réparer les plaies superficielles et à protéger les peaux sèches et abîmées. Elle est idéale contre la peau sèche ou gercée et après des piqûres de tiques ou d'insectes.</p>
<p>Elle peut être utilisée sur tous type d'animaux. (Convient aux chiens, chats, rong ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231142118</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d48d817f14ef0c95509b5d4d5942eb43465ca9a925e02b8744eb56bad46e81bc ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Poudre Tétraméthrine Chien et Chat 150 g ]]></title>
<g:id>f62bfa14-cf60-4c3f-ac36-c0c5ec37b292</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-poudre tétraméthrine chien et chat 150 g?f62bfa14-cf60-4c3f-ac36-c0c5ec37b292 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <div id="description">
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Beaphar Poudre Tétraméthrine Chien et Chat 150 g est une poudre qui, grâce à sa composition à base de tétraméthrine (pyréthrinoïdes), possède une importante activité sur les ectoparasites tels que les puces et les tiques. Elle peut être utilisée chez les jeunes animaux dès l'âge de 2 mois.</p>
<p></p>
</div>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3461921510110</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41227f9a3e881e9c82c5a1ebab9a4640fad0abd6e0060f2202750fd889898e9a ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires > Puces & Tiques ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Pâte Anti-boules de Poils Chat 100 g ]]></title>
<g:id>daa1ff3a-9e51-4ee8-8589-44a9a9af8e53</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-pâte anti-boules de poils chat 100 g?daa1ff3a-9e51-4ee8-8589-44a9a9af8e53 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p> À base de malt et de Bio-MOS• Favorise l’évacuation des boules de poils• Procure une meilleure santé intestinaleLa pâte au malt de Beaphar favorise l’évacuation des boules de poils et participe au bon fonctionnement des intestins grâce à sa double composition :</p>
<ul><li>Une pâte au malt : elle enrobe les poils ingérés et facilite leur évacuation par le tractus gastro-intestinal.</li>
<li>Une pâte au Bio-MOS : la pâte au Bio-MOS (Mannane-oligosaccharides) est une substance naturelle présen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231129508</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/372ead52eb60ea69d8cde84088293539f723ba2e8e8d4af66d0bfbc5f4dfedc0 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Santé Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Shampooing Anti Puce Anti Tiques Pour Chien et Chat ]]></title>
<g:id>86f323f7-1922-4c1a-9ab5-7e9c2f2a17dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-shampooing anti puce anti tiques pour chien et chat?86f323f7-1922-4c1a-9ab5-7e9c2f2a17dc ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><br />• À base de Tétraméthrine<br />• Double action : Nettoie &amp; Protège<br />• Élimine les puces et les tiques<br />• Convient aux épidermes sensibles</p>
<p>Ce shampooing permet la destruction des ectoparasites tels que les puces et les tiques. Il peut être utilisé chez les jeunes animaux à partir de l’âge de 2 mois.<br />La tétraméthrine est une molécule qui élimine les parasites susceptibles d'infester votre chien ou votre chat. Il a été spécialement formulé pour convenir aux peaux le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3461922010145</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/05d282536d37637d00d761df912907fbde95ff3cc29bd8d3c9eeb7428796d57d ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires > Puces & Tiques > Toilettage ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Solution Haleine Fraiche 250ml ]]></title>
<g:id>b6e531fd-73fa-45b3-8ddb-0372fcf6179b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-solution haleine fraiche 250ml?b6e531fd-73fa-45b3-8ddb-0372fcf6179b ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Grâce à une combinaison d'enzyme protéase, de chlohexidine et de chlorure de zinc, cette solution proposé par la marque Beaphar permet d'éliminer la plaque dentaire et le tartre. Cette solution concentrée à base de menthol procure une haleine fraîche tout au long de la journée à votre animal. Elle s'attaque aux bactéries et aux résidus alimentaires, deux causes qui peuvent entraîner des caries, des problèmes de gencive et une mauvaise haleine. Facile à utiliser, elle est idéale pour les ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231160082</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8f30850609a195eab34f74d13c2c547eee6120afe66be2cb49941a9f0494d130 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Spray Insecticide Habitation 500 ml ]]></title>
<g:id>4d88b2a5-4412-4be9-9d60-a9c0c49f69b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-spray insecticide habitation 500 ml?4d88b2a5-4412-4be9-9d60-a9c0c49f69b6 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>• À base de Perméthrine et (S)-Méthoprène• Permet de traiter des zones ciblées• Protection de l’habitat pendant 3 mois• Détruit les parasites adultes, les larves et les œufs• Élimine les puces, tiques, cafards, araignées, fourmis, mites et gales</p>
<p><span>Le spray insecticide habitation de Beaphar est une association insecticide et larvicide destinée au traitement des habitations contre les acariens et les insectes. Ce spray insecticide et larvicide contient 3 substances :<br /></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3461925000174</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3fe71a58eb19b1e3a7fd90cef0b82769306f62bea1b5cd84848a2efa2b818672 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Anti-parasitaires environnement ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Beaphar Spray pour Plaies Chiens, Chats, Oiseaux & Rongeurs 75ml ]]></title>
<g:id>aa5deb9b-a099-4a50-940b-f6aaf102e532</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beaphar-spray pour plaies chiens, chats, oiseaux & rongeurs 75ml?aa5deb9b-a099-4a50-940b-f6aaf102e532 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le spray pour les plaies de Beaphar permet de prendre soin de la peau sèche ou abîmée de votre animal. Il est également idéal pour apaiser la peau après les piqûres de tiques ou d'insectes. Grâce à ses ingrédients comme la Propolis d'abeille et l'Aloe Vera, le spray laisse une couche protectrice, nettoie et prend soin de la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8711231137558</g:gtin>
<g:brand><![CDATA[ BEAPHAR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ebaf1221245a217cd9509721f461f8df4964ff3a526c64a0aa93b10dea5ab95c ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Hygiène & Soins Animaux  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BeauTerra Gel Douche Surgras Extra-Doux 1 L ]]></title>
<g:id>f46a8921-a180-4393-a94f-ee5fb1773af8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beauterra-gel douche surgras extra-doux 1 l?f46a8921-a180-4393-a94f-ee5fb1773af8 ]]></link>
<g:price><![CDATA[ 520.00 EUR ]]></g:price>
<description><![CDATA[ <h2></h2>
<p></p>
<p>Formulée avec un pH physiologique entre 5.5 et 6, le <span>gel douche surgras BEAUTERRA</span> respecte l'équilibre de la barrière cutanée. Pour un produit à la composition sans compromis, la formulation du<span> gel douche surgras BEAUTERRA</span> ne contient pas de perturbateurs endocriniens, savon, ou parabène. Vegan et non testé sur les animaux.</p>
<p>L'ensemble du <span>gel douche surgras BEAUTERRA</span> (packaging et matières premières inclus) est fabriqué en France  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360148246</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/86a8a49679d3567837fbcc30a6bee8d24bb4dcd5824d6c486895db6489cb1222 ]]></g:image_link>
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
<title><![CDATA[ BeauTerra Gel douche surgras monoi 1L ]]></title>
<g:id>bda13cc6-83f9-4a6f-a686-a2319d7660c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beauterra-gel douche surgras monoi 1l?bda13cc6-83f9-4a6f-a686-a2319d7660c6 ]]></link>
<g:price><![CDATA[ 520.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le gel douche surgras Beauterra au monoï </span>est adapté pour les peaux sensibles et délicates grâce à son pH physiologique. Ce nettoyant contient des agents démêlants pour convenir à tous les types cheveux. Sa formule 2 en 1 s'utilise sur le corps et les cheveux. Il est enrichi à l'huile de monoï, sans savon, sans paraben et sans phénoxyéthanol. Ce produit est testé sous contrôle dermatologique, fabriqué en France et non testé sur les animaux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360148222</g:gtin>
<g:brand><![CDATA[ BEAUTERRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7231005c063cd108db47ee65669ec30038236cc0dde7b269567e2139e1fdc9f8 ]]></g:image_link>
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
<title><![CDATA[ BeauTerra Savon Liquide de Marseille Surgras 1 L ]]></title>
<g:id>a62ce922-4ed5-4cf9-be2a-bca032edbc1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beauterra-savon liquide de marseille surgras 1 l?a62ce922-4ed5-4cf9-be2a-bca032edbc1c ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360094697</g:gtin>
<g:brand><![CDATA[ BEAUTERRA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9310b10cba6ea8164908e9f1658c829e033aaacfe9df5a71cebf789b9cc6dcc2 ]]></g:image_link>
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
<title><![CDATA[ Beauterra savon de Marseille beurre de karité  1L ]]></title>
<g:id>280a16c6-87ab-4160-94c2-3c04aabf7c73</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/beauterra-savon de marseille beurre de karité  1l?280a16c6-87ab-4160-94c2-3c04aabf7c73 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le savon de Marseille au beurre de karité Beauterra est fabriqué à partir d'ingrédients naturels qui respectent l'environnement. </p>
<p>Sans conservateur, sans tensio-actifs de synthèse, sans paraben, sans huile de palme et sans graisses animales. Enrichi en huile d'olive nourrissante et protectrice il nettoie en douceur les mains et le corps. Fabriqué dans la pure tradition marseillaise par un maître savonnier, il est fabriqué à partir d'huiles 100% végétales. Naturellement riche en glycéri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360094536</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/11955b5965f32404a3bfb1043ab3edb51b4e816471ded1bcea83c711c91c7fc8 ]]></g:image_link>
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
<title><![CDATA[ Bella Carrés en coton x 50 ]]></title>
<g:id>2d526d68-a730-4a7f-ae9c-9a3bb5704225</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bella-carrés en coton x 50?2d526d68-a730-4a7f-ae9c-9a3bb5704225 ]]></link>
<g:price><![CDATA[ 190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span><span>Tampons cosmétiques doux et délicats en 100% coton. </span><span>Parfait pour le démaquillage - les tampons sont très absorbants et ne se déforment pas lors de l'utilisation. </span><span>La structure du tampon double face permet une application précise des produits cosmétiques et un nettoyage précis de la peau.</span></span></p>
<p><span><span>La grande surface et le moelleux exceptionnel des coussinets carrés les rendent plus absorbants et plus doux au toucher. </span><span>Bell ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5900516400774</g:gtin>
<g:brand><![CDATA[ LS MEDICAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79f54ee8f37940926f251ca4385a326a7125612e1f1b9a7283a42e0ed0af07eb ]]></g:image_link>
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
<title><![CDATA[ Bella Cotons-tiges adulte x 200 ]]></title>
<g:id>d972d5ba-ad9c-436b-a7a5-c3b3e9e3f1b8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bella-cotons-tiges adulte x 200?d972d5ba-ad9c-436b-a7a5-c3b3e9e3f1b8 ]]></link>
<g:price><![CDATA[ 199.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bourgeons recouverts de 100% coton. </span><span>Recommandé pour le nettoyage des oreillettes des oreilles et l'application ponctuelle de produits cosmétiques.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5900516400040</g:gtin>
<g:brand><![CDATA[ LS MEDICAL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87264958dc8457d4536219da12665a36bdcc2423428c5c4666ae7ac4bfec15c9 ]]></g:image_link>
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
<title><![CDATA[ Bella for teens Energy serviettes hygiéniques x 10 ]]></title>
<g:id>05ba9882-b150-4d23-9a4c-d03ea4f3695d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bella-for teens energy serviettes hygiéniques x 10?05ba9882-b150-4d23-9a4c-d03ea4f3695d ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les serviettes hygiéniques ultra-fines Bella For Teens assurent confiance et discrétion aux jeunes femmes. </span><span>Recouvertes du filet Silky Dai, elles garantissent une sensation fraîche et sèche.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5900516302412</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/91f32867cd76ab772315c001903e213631bae537e27adc1a1df6b1c96fbfff66 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Belloc Probiotiques 30 Gélules Végétales ]]></title>
<g:id>caad7a23-6851-4402-b633-06159b37af3d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/belloc-probiotiques 30 gélules végétales?caad7a23-6851-4402-b633-06159b37af3d ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Belloc Probiotiques 30 Gélules Végétales est un complément alimentaire qui contient 12,5 milliards de souches microbiotiques de haute qualité, soigneusement sélectionnées et justement dosées :</p>
<ul><li>des souches lyophilisées microencapsulées pour les protéger de l'acidité gastrique : elles arrivent dans l'intestin sans dégradation, vivantes et intactes ;</li>
<li>des souches enregistrées dans les collections internationales (NCIMB).</li>
</ul><p>L'association unique de ces 4 souches micr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664492022130</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b2ad63bfca2f96907f94ce4a2626c93833682cd1c2fbace8214cd3683ec90d3 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Belloc Reflux Gastriques 12 Sticks x15ml ]]></title>
<g:id>56800cc1-52af-45d3-88ed-8646821413c1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/belloc-reflux gastriques 12 sticks x15ml?56800cc1-52af-45d3-88ed-8646821413c1 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le reflux gastro-oesophagien est un problème de société qui touche aujourd'hui un quart des Français, aussi bien les hommes que les femmes. Ces douleurs peuvent être intermittentes ou chroniques, et se caractérisent par des brûlures d'estomac, des sensations de brûlures dans l'estomac ou des remontées acides, entrainant un réel inconfort au quotidien ainsi que des lésions des muqueuses de l'oesophage. Belloc Reflux Gastriques, grâce à son action 4 en 1 exclusive associant des ingrédient ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664492020907</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/465e4d66c36a45424f57ff1c5380d7c8e02b40598f564eaef08e19bc8363acaf ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Belloc Reflux Gastriques 20 comprimés à croquer ]]></title>
<g:id>c67844eb-70c7-477e-b494-6a67ab3b7720</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/belloc-reflux gastriques 20 comprimés à croquer?c67844eb-70c7-477e-b494-6a67ab3b7720 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le reflux gastro-oesophagien est un problème de société qui touche aujourd'hui un quart des Français, aussi bien les hommes que les femmes. Ces douleurs peuvent être intermittentes ou chroniques, et se caractérisent par des brûlures d'estomac, des sensations de brûlures dans l'estomac ou des remontées acides, entrainant un réel inconfort au quotidien ainsi que des lésions des muqueuses de l'oesophage. Belloc Reflux Gastriques, grâce à son action 4 en 1 exclusive associant des ingrédient ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664492017747</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/418f8e38d388ea7f82a1f11de3828145f4dd623d92bd6327d4b8caf526b6d283 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepantehDerma Baume Réparateur Intense 200ml ]]></title>
<g:id>fa672d69-e048-4623-96b7-01607df32afe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepantehderma-baume réparateur intense 200ml?fa672d69-e048-4623-96b7-01607df32afe ]]></link>
<g:price><![CDATA[ 1595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Baume réparateur intense corps<br />Soin quotidien<br />Peaux très sèches à tendance squameuse<br />Apaise immédiatement et durablement. Protège contre les pics récurrents de sécheresse extrême.<br />Testé cliniquement sous contrôle dermatologique.<br />Nourrissons, enfants, adultes.<br />Tube 200ml<br /><br />Agit à l’origine de la peau sèche. Pour une hydratation immédiate et durable.</p>
<p>Protège contre les pics récurrents de sécheresse extrême<br />Un complexe réparateur complet<br />Ag ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001044</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1fd006a4245b47134ca13264032a6afc39ef405fa25d18d089acb8fdfa2f901b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bepanthen sensicalm 20 g ]]></title>
<g:id>6be03195-b19e-4546-970e-3ab4f4a72b77</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthen-sensicalm 20 g?6be03195-b19e-4546-970e-3ab4f4a72b77 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bepanthen Sensicalm est une crème anti-démangeaisons, spécialement conçue pour les irritations cutanées type Eczéma.</p>
<p>Ce dispositif médical soulage les démangeaisons, les rougeurs et régénère la peau en un seul produit en cas d'eczéma ou de réactions allergiques. Ces irritations de la peau peuvent survenir en cas de sécheresse cutanée, dermatite atopique, eczéma, ou réactions allergiques cutanées.</p>
<p>Sans cortisone, haute tolérance prouvée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401097676029</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/52c3bb3ad993a434cacc83a4db9629ba08774d65ff310f8a07250cadad7d0d8c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepanthenDerma Crème Mains Réparatrice, 50ml ]]></title>
<g:id>d8015eb5-82ae-44d5-b974-29f3c339cf3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-crème mains réparatrice, 50ml?d8015eb5-82ae-44d5-b974-29f3c339cf3c ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Enfants et Adultes</li>
<li><span>Indications : </span>Mains très sèches et abîmées </li>
<li><span>Actifs : </span>Pro-vitamine B5 </li>
<li><span>On aime :</span> Sa texture généreuse</li>
<li><span>Résultats : </span>Les mains sont douces et la peau est plus souple</li>
</ul><p> </p>
<p id="IYO5TVT">La <span>Crème Mains Réparatrice BepanthenDerma</span> de <span>BEPANTHEN </span>convient en cas de peau très sèche et abîmée. </p>
<p>Elle apporte au quotidien <sp ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001501</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a6c1e5a5a9723c219fb368825c5f2f894f1e8984d3f4c8863b32c72c085b07e4 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepanthenDerma Crème Nutritive Corps 400ml ]]></title>
<g:id>64b3369b-4b6c-45f6-b269-bc8d23007c50</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-crème nutritive corps 400ml?64b3369b-4b6c-45f6-b269-bc8d23007c50 ]]></link>
<g:price><![CDATA[ 1750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème nutritive corps<br />Soin quotidien<br />Peaux sèches et sensibles<br />Hydrate immédiatement et jusqu'à 48h, pour une peau douce et souple.<br />Testé cliniquement sous contrôle dermatologique.<br />Nourrissons, enfants, adultes.<br />Flacon pompe 400ml</p>
<p>Agit à l’origine de la peau sèche. Pour une hydratation immédiate et durable.</p>
<p>Hydrate immédiatement et jusqu’à 48h pour une peau douce et souple<br />Un complexe réparateur complet<br />Agit à l’origine de la sécheresse cu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001020</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e72b6e6f7143e9f3b34f13b75b70236d3598c3f62cb96881fede6edd21f5e385 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepanthenDerma Créme Riche Réparatrice 400ml ]]></title>
<g:id>ce44414d-e749-4c6a-83f5-9568d48c68da</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-créme riche réparatrice 400ml?ce44414d-e749-4c6a-83f5-9568d48c68da ]]></link>
<g:price><![CDATA[ 1850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème riche réparatrice corps<br />Soin quotidien<br />Peaux très sèches et sensibles<br />Hydrate immédiatement et jusqu'à 48h, protège contre la sécheresse récurrente.<br />Testé cliniquement sous contrôle dermatologique.<br />Nourrissons, enfants, adultes.<br />Flacon Pompe 400ml</p>
<p>Agit à l’origine de la peau sèche. Pour une hydratation immédiate et durable.</p>
<p>Hydrate immédiatement et jusqu’à 48h(2)<br />Protège contre la sécheresse récurrente<br />Un complexe réparateur complet< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000993</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/435e74c42414927f3053d6d33f1ac983389bbfb42e3f5ea5321d98c36eafd42b ]]></g:image_link>
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
<title><![CDATA[ BepanthenDerma Gel Lavant Doux 400ml ]]></title>
<g:id>1526b30b-ff89-4033-bf3f-681f263e4670</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-gel lavant doux 400ml?1526b30b-ff89-4033-bf3f-681f263e4670 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bepanthen Derma Gel Lavant Doux Corps</span> agit à l’origine de la sécheresse cutanée. Il nettoie et apaise en douceur la peau, tout en maintenant l’hydratation naturelle de la peau.</p>
<p><span>Bepanthen Derma Gel Lavant Doux Corps</span> a été spécifiquement formulé pour nettoyer les peaux sèches et sensibles.</p>
<p>Ce gel nettoie et protège en douceur, éliminant les impuretés tout en maintenant l'hydratation naturelle de la peau, la laissant fraîche et propre.</p>
<p>Ses + :</p>
< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000979</g:gtin>
<g:brand><![CDATA[ BAYER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/740ac4c9dfd0b755e90296f2b8facc068a65b1edadb5c0d272360f33be5d8a91 ]]></g:image_link>
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
<title><![CDATA[ BepanthenDerma Gel Nettoyant Visage Apaisant 200ml ]]></title>
<g:id>8eed7e30-9afe-4310-866e-3d543a576123</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-gel nettoyant visage apaisant 200ml?8eed7e30-9afe-4310-866e-3d543a576123 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le <span>gel nettoyant visage apaisant</span> proposé par la marque <span>BepanthenDerma</span> est un <span>nettoyant visage</span> destiné aux personnes ayant une <span>peau sèche à très sèche</span>. C'est un nettoyant doux qui préserve l'équilibre et le confort cutanés.</p>
<p>Parfait pour les peaux sèches et très sèches, le <span>gel nettoyant visage apaisant BepanthenDerma</span> permet de nettoyer la peau en douceur, sans la dessécher davantage. Il protège et maintient l'hydratation na ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001419</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e763f1d654e97bbc9841194a4384ae91e9b5c27a99ee5e8dadaaae0b3e33b88d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepanthenDerma SensiControl baume relipidant 400 ml ]]></title>
<g:id>628664a5-00fb-4a64-bb49-ce6a127f7f29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-sensicontrol baume relipidant 400 ml?628664a5-00fb-4a64-bb49-ce6a127f7f29 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p class="text-align-justify">La nouvelle gamme BepanthenDerma® SensiControl vous aide à prendre le contrôle de votre peau à tendance à l’eczéma atopique ou de celle de votre enfant. Adapté à toute la famille, le soin quotidien, BepanthenDerma® SensiControl Baume Relipidant, hydrate, aide à apaiser et est anti-grattage.</p>
<p class="text-align-justify">Jour après jour, par l’hydratation qu’il procure, BepanthenDerma® SensiControl Baume Relipidant apporte du confort aux peaux à tendance atopique ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001266</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9fe49496264137067f0ba3c94e31b9bbd2007f6fe10423f40544b40966488d5e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepanthenDerma SensiControl gel lavant protecteur 400 ml ]]></title>
<g:id>72a0c221-3486-4c55-97e0-6d4c0bfa8bfc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-sensicontrol gel lavant protecteur 400 ml?72a0c221-3486-4c55-97e0-6d4c0bfa8bfc ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p class="text-align-justify">La formule douce et sans savon du <span>Gel Lavant Protecteur Bepanthen Derma</span><span>®</span><span> SensiControl </span>convient parfaitement à la toilette des peaux à tendance à l’eczéma atopique qu’elle nettoie tout en douceur. Formulé avec 90% d’ingrédients d’origine naturelle, ce gel <span>lave tout en respectant votre peau, l’hydrate dès la douche et l’apaise.</span></p>
<p class="text-align-justify"><span><span><span><span>Les peaux à tendance à l’eczéma  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001235</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c3733fdda575427783af8a0da3dd63eb905e45a18890a71316c73cbb978f2047 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ BepanthenDerma Sensicontrol baume relipidant 200 ml ]]></title>
<g:id>58669fac-3841-4c94-a973-49f7b823d14b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bepanthenderma-sensicontrol baume relipidant 200 ml?58669fac-3841-4c94-a973-49f7b823d14b ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p class="text-align-justify">La nouvelle gamme BepanthenDerma<span>®</span> SensiControl vous aide à prendre le contrôle de votre peau à tendance à l’eczéma atopique ou de celle de votre enfant. Adapté à toute la famille, le soin quotidien, BepanthenDerma<span>®</span> SensiControl Baume Relipidant, hydrate, aide à apaiser et est anti-grattage.</p>
<p class="text-align-justify">Jour après jour, par l’hydratation qu’il procure, BepanthenDerma<span>®</span> SensiControl Baume Relipidant apporte d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001259</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f062c4ef84437b5227e16e6408925de2d2e80634dea965ba55903725a59fdd5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Berocca Boost 20 Comprimés Effervescents ]]></title>
<g:id>f0ab84b4-5f35-4355-b76c-f8662ebd7bd5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-boost 20 comprimés effervescents?f0ab84b4-5f35-4355-b76c-f8662ebd7bd5 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Avec Berocca<span>®</span> Boost, vous assurez à 100% aussi bien mentalement que physiquement ! Il vous fournit un effet boostant rapide et efficace partout et chaque fois que vous en avez besoin.</p>
<p>Berocca<span>®</span> Boost est un anti-coup de pompe efficace grâce à sa formule complète à base de 9 vitamines, zinc, magnésium, caféine et guarana (uniquement pour le comprimé effervescent) qui agit à la fois au niveau physique et mental !</p>
<p>Berocca<span>®</span> Boost soutient la for ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401553606027</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9077f7417bd934ec2082ed5dc3c8d5aedff130f648f43d94801f2b0b8b6f40eb ]]></g:image_link>
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
<title><![CDATA[ Berocca Energie Gommes, Goût cerise 60 gommes ]]></title>
<g:id>a47faa29-e257-45fb-8934-e1073c871f41</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-energie gommes, goût cerise 60 gommes?a47faa29-e257-45fb-8934-e1073c871f41 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Les gommes à mâcher Berocca Energie sont un complément alimentaire conçu pour maintenir votre énergie tout au long de la journée :&nbsp;</strong></p><p>Grâce à leur formule enrichie en vitamines B, ces gommes vous fournissent l'énergie nécessaire pour soutenir un métabolisme énergétique normal au quotidien. De plus, la présence de vitamine C contribue à réduire la fatigue, tandis que les vitamines B (à l'exception de la B2) et la vitamine C soutiennent des fonctions psychologiques nor ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001532</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/72a37a0e2431889f717b20b36a6ce2c8c1821aedbd9742e7cd8c855494d04692 ]]></g:image_link>
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
<title><![CDATA[ Berocca Energie cassis 30 comprimés effervescents ]]></title>
<g:id>e090aabe-bfda-4433-812b-8025a2bc0b83</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-energie cassis 30 comprimés effervescents?e090aabe-bfda-4433-812b-8025a2bc0b83 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez Berocca</span><span>®</span><span> Energie Cassis, un complément alimentaire à l'efficacité </span><a href="https://www.beroccagamme.fr/produits/etude-clinique"><span>scientifiquement prouvée</span></a><span>, qui associe les vitamines et minéraux dont vous avez besoin pour vous aider à retrouver votre énergie physique et mentale ! </span></p>
<p><span><span>a formule unique de Berocca</span><span>®</span><span> Energie vous fournit l’énergie nécessaire pour la journée, grâce  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000702</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c518c8c14ff053a3a0ea9d88d2f2a2b6fd92427c55cbffaca41885b561f8300d ]]></g:image_link>
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
<title><![CDATA[ Berocca Immunité Défense 2 x 28 Gélules ]]></title>
<g:id>9d8dee96-87ce-4a73-bffd-4b2a88f28538</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-immunité défense 2 x 28 gélules?9d8dee96-87ce-4a73-bffd-4b2a88f28538 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Berocca Immunité Défense 2 x 28 Gélules Végétales est un complément alimentaire à la formule unique qui réunit en 2 gélules des vitamines et minéraux, de l'échinacée, ainsi qu'une souche microbiotique.<br />Sa formule complète est basée sur l'association unique de vitamines et minéraux permettant de préparer et protéger l'organisme contre les agressions extérieures qui peuvent l'affaiblir au quotidien.</p>
<p>Les vitamines D, C, B6, B9, B12 et le zinc contribuent au fonctionnement normal du s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001136</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e8cc3aec5d80a529e9e56aad5bd6ca43694375adc50bde004e4ccc29e86bd59c ]]></g:image_link>
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
<title><![CDATA[ Berocca Immunité Flash 30 comprimés effervescents ]]></title>
<g:id>8fcc6825-e3ac-4e40-acdf-337f0382fe29</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-immunité flash 30 comprimés effervescents?8fcc6825-e3ac-4e40-acdf-337f0382fe29 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Berocca, est une association de vitamines, magnésium et d'éléments minéraux spécialement dédiée au soutien du système immunitaire. Berocca Immunité réunit en un seul comprimé les éléments essentiels pour aider votre organisme à faire face aux aléas du quotidien et combattre les virus.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001129</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e1b838faf086ef087dab696d13f0a8ea468e811bba4509b9d1c9256d342e4fa ]]></g:image_link>
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
<title><![CDATA[ Berocca énergie 30 comprimés pelliculés ]]></title>
<g:id>c9238352-43fe-4790-b2f8-15d7a07403e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-nergie 30 comprimés pelliculés?c9238352-43fe-4790-b2f8-15d7a07403e7 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez Berocca<span>®</span> Energie comprimé à avaler, un complément alimentaire à l'efficacité scientifiquement prouvée, qui associe les vitamines et minéraux dont vous avez besoin pour vous aider à retrouver votre énergie physique et mentale !</p>
<p>La formule unique de Berocca<span>®</span> Energie réunit en un seul comprimé les vitamines essentielles, ainsi que du magnésium et du zinc, pour vous fournir l’énergie dont vous avez besoin pour la journée, aussi bien sur le plan physique  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000665</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6960830a139072558783ed88a0b7d1b37401a358639f9ed9dab5f20f1660146f ]]></g:image_link>
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
<title><![CDATA[ Berocca énergie 60 comprimés pelliculés ]]></title>
<g:id>809ef0dd-32e7-46c0-a1d3-50f814daa385</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-nergie 60 comprimés pelliculés?809ef0dd-32e7-46c0-a1d3-50f814daa385 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez Berocca® Energie comprimé à avaler, un complément alimentaire à l'efficacité scientifiquement prouvée, qui associe les vitamines et minéraux dont vous avez besoin pour vous aider à retrouver votre énergie physique et mentale !</p>
<p><br />La formule unique de Berocca® Energie réunit en un seul comprimé les vitamines essentielles, ainsi que du magnésium et du zinc, pour vous fournir l’énergie dont vous avez besoin pour la journée, aussi bien sur le plan physique que mental.</p>
<p>< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000689</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d32741e7d0bd8fd1fe5e882dfc86b0ad4200cc56badcae1472ef6770c921e8a ]]></g:image_link>
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
<title><![CDATA[ Berocca énergie comprimés effervescents x30 ]]></title>
<g:id>0fffd0d1-c841-442b-9d58-bbecd996ac57</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-nergie comprimés effervescents x30?0fffd0d1-c841-442b-9d58-bbecd996ac57 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez Berocca<span>®</span> Energie orange, un complément alimentaire à l'efficacité scientifiquement prouvée, qui associe les vitamines et minéraux dont vous avez besoin pour vous aider à retrouver votre énergie physique et mentale !</p>
<p>La formule unique de Berocca<span>®</span> Energie réunit en un seul comprimé les vitamines essentielles, ainsi que du magnésium et du zinc, pour vous fournir l’énergie dont vous avez besoin pour la journée, aussi bien sur le plan physique que mental* ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000672</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c866ccc2e56050a1574a6015d75ebbe05bb2e0578f50e23996953331e13d2639 ]]></g:image_link>
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
<title><![CDATA[ Berocca énergie comprimés effervescents x60 ]]></title>
<g:id>3b7a9d78-cd0e-4346-99ce-dc238d720630</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berocca-nergie comprimés effervescents x60?3b7a9d78-cd0e-4346-99ce-dc238d720630 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Découvrez Berocca® Energie orange, un complément alimentaire à l'efficacité scientifiquement prouvée, qui associe les vitamines et minéraux dont vous avez besoin pour vous aider à retrouver votre énergie physique et mentale !</p>
<p><br />La formule unique de Berocca® Energie réunit en un seul comprimé les vitamines essentielles, ainsi que du magnésium et du zinc, pour vous fournir l’énergie dont vous avez besoin pour la journée, aussi bien sur le plan physique que mental.</p>
<p><br />La for ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510000696</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f2c9f4b5addcc0ab3de4bffcfb17b9ba4fa73083c701ae9f45c10dc2de1d7ece ]]></g:image_link>
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
<title><![CDATA[ Berroca Magnésium 14 Sachets ]]></title>
<g:id>6ec44142-5b60-4c51-936d-1f684d3552ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/berroca-magnésium 14 sachets?6ec44142-5b60-4c51-936d-1f684d3552ee ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Berroca magnésium sachets de poudre effervescente</span> est un complément alimentaire concentré en <span>magnésium</span>¹ (Mg) et à la <span>rhodiole</span>², goût citron. </p>
<ul><li>Double action 
<ul><li>Fatigue &amp; nervosité¹</li>
<li>Mémoire &amp; concentration²</li>
</ul></li>
</ul><p>Programme express. <span>Contribue à réduire la fatigue et au fonctionnement normal du système nerveux grâce au magnésium et aux vitamines B6 et B12.</span><br /><span>Soutient l'activité mental ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3534510001822</g:gtin>
<g:brand><![CDATA[ BEROCCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a619d853620bc2526b948a81564eb50a4cf423691db2ce7d12b6db11ac2a7e0 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi- Oil Huile de Soin 200ml ]]></title>
<g:id>f9c918b2-884d-477b-b4ab-3d6f74839d47</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-oil huile de soin 200ml?f9c918b2-884d-477b-b4ab-3d6f74839d47 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bi-Oil Huile de Soin 200 ml est un soin spécialisé pour les cicatrices et les vergetures. Contenant le PurCellin Oil, ingrédient révolutionnaire qui fluidifie la texture et facilite son absorption, elle offre d'autres bienfaits :</p>
<p>- cicatrices : elle aide à améliorer l'apparence des anciennes et nouvelles cicatrices ;</p>
<p>- vergetures : elle aide à réduire le risque de formation de vergetures pendant la grossesse, les poussées de croissance à l'adolescence et lors des périodes de pri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>6001159122852</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bafe9fb35aaf604a9b29664cc11930533b3e0e8fdeef6f62ec74c8e5939c6e89 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi-Oil 60ml ]]></title>
<g:id>5cca8319-e823-48fb-94f2-d340bad192c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-oil 60ml?5cca8319-e823-48fb-94f2-d340bad192c6 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bi-Oil Huile de Soin 60 ml est un soin spécialisé pour les cicatrices et les vergetures. Contenant le PurCellin Oil, ingrédient révolutionnaire, qui fluidifie la texture et facilite son absorption, il offre d'autres bienfaits :</p>
<p>- cicatrices : elle aide à améliorer l'apparence des anciennes et nouvelles cicatrices ;</p>
<p>- vergetures : elle aide à réduire le risque de formation de vergetures pendant la grossesse, les poussées de croissance à l'adolescence et lors des périodes de prise ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>6001159122876</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d977638a54bfcd3dd2139daecbe93a5906b5621b84dd107dd1e392c9d627d5f6 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi-Oil Huile de Soin 125 ml ]]></title>
<g:id>5aec4f6b-d7fd-44a2-bbb3-a0e59dd9a829</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-oil huile de soin 125 ml?5aec4f6b-d7fd-44a2-bbb3-a0e59dd9a829 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bi-Oil Huile de Soin 125 ml est un soin spécialisé pour les cicatrices et les vergetures. Contenant le PurCellin Oil, ingrédient révolutionnaire qui fluidifie la texture et facilite son absorption, elle offre d'autres bienfaits :</p>
<p>- cicatrices : elle aide à améliorer l'apparence des anciennes et nouvelles cicatrices ;</p>
<p>- vergetures : elle aide à réduire le risque de formation de vergetures pendant la grossesse, les poussées de croissance à l'adolescence et lors des périodes de pri ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>6001159122869</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb54169bf8fb718bddf930bed2f58fffeea729e7d45940b91409cd5832170d99 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi-Oil Huile de Soin Naturelle 200ml ]]></title>
<g:id>2d9b9885-fc22-46d0-ae90-d1879559de86</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-oil huile de soin naturelle 200ml?2d9b9885-fc22-46d0-ae90-d1879559de86 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bi-Oil Huile de Soin (Naturelle) 200 ml est un soin spécialisé à l'absorption rapide pour les cicatrices et les vergetures qui contient 100% d'ingrédients naturels.</p>
<ul><li>Les cicatrices : le soin aide à améliorer l'apparence des anciennes et des nouvelles cicatrices.</li>
<li>Les vergetures : le soin aide à réduire le risque de formation de vergetures pendant la grossesse, les poussées de croissance à l'adolescence et lors de périodes de prise de poids rapide. Il aide à améliorer l'appa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>6001159124887</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5346d1b23cd57c039b52b1eb5c681dbfcb9e3adb2e7ddab7ab4e821f935901f3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi-Oil Huile de Soin Naturelle 60 ml ]]></title>
<g:id>934f31ca-77f9-4fc9-8dbd-e924c66c5fb0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-oil huile de soin naturelle 60 ml?934f31ca-77f9-4fc9-8dbd-e924c66c5fb0 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bi-Oil Huile de Soin (Naturelle) 60 ml est un soin spécialisé à l'absorption rapide pour les cicatrices et les vergetures qui contient 100% d'ingrédients naturels.</p>
<ul><li>Les cicatrices : le soin aide à améliorer l'apparence des anciennes et des nouvelles cicatrices.</li>
<li>Les vergetures : le soin aide à réduire le risque de formation de vergetures pendant la grossesse, les poussées de croissance à l'adolescence et lors de périodes de prise de poids rapide. Il aide à améliorer l'appar ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>6001159124863</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d1a7d57ccc83db85ea798fa6214b6c1c4af17378f40aa6479f14f7929d35c7e ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi-Oil Huile de Soin Naturelle125 ml ]]></title>
<g:id>ba09e6eb-a678-4373-b62c-909f8d7e83c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-oil huile de soin naturelle125 ml?ba09e6eb-a678-4373-b62c-909f8d7e83c7 ]]></link>
<g:price><![CDATA[ 1999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bi-Oil Huile de Soin (Naturelle) 125 ml est un soin spécialisé à l'absorption rapide pour les cicatrices et les vergetures qui contient 100% d'ingrédients naturels.</p>
<ul><li>Les cicatrices : le soin aide à améliorer l'apparence des anciennes et des nouvelles cicatrices.</li>
<li>Les vergetures : le soin aide à réduire le risque de formation de vergetures pendant la grossesse, les poussées de croissance à l'adolescence et lors de périodes de prise de poids rapide. Il aide à améliorer l'appa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>6001159124870</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/607419a38d12784979cffab7ea1f8cb06423f007c3005feae28b57fbe049e883 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bi-ostéo Capital osseux 30 capsules ]]></title>
<g:id>a12ca9bd-3d56-46e1-bc78-a8ad3ebf9c6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bi-ostéo capital osseux 30 capsules?a12ca9bd-3d56-46e1-bc78-a8ad3ebf9c6c ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Riche en acide gras Omega 3, </span><span>Bi-Ostéo</span><span> est une synergie de vitamines C, D, K et Zinc qui contribuent à maintenir une ossature normale.</span><br /><br /><span>La vitamine C, E et le Sélénium protègent les cellules contre le stress oxydatif.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401245734830</g:gtin>
<g:brand><![CDATA[ IDIM PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/673bcdd78cc343b138f51844fefd2164685e465c6aaa66aea19810bf582220e0 ]]></g:image_link>
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
<title><![CDATA[ Bicare Gifrer Plus Coffret Blancheur ]]></title>
<g:id>f98203bc-ee7f-4ea1-b667-09aae12e1f94</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bicare-gifrer plus coffret blancheur?f98203bc-ee7f-4ea1-b667-09aae12e1f94 ]]></link>
<g:price><![CDATA[ 998.00 EUR ]]></g:price>
<description><![CDATA[ <p>Gifrer Bicare Gifrer Plus Coffret Blancheur est un coffret conçu pour l'hygiène bucco-dentaire, pour agir contre les tâches, le tartre et la plaque dentaire. Il se compose de :</p>
<p>- Gifrer Bicare Gifrer Plus Bicarbonate de Soude + Bromélaïne Lot de 2 x 60 g est une poudre mentholée contenant deux actifs (bicarbonate de sodium et bromélaïne), pour une bonne hygiène dentaire. Ces deux actifs agissent en synergie pour obtenir une action blanchissante, anti-plaque et anti-tartre :</p>
<ul><li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129000694</g:gtin>
<g:brand><![CDATA[ GIFRER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d3541921780eadff689d05b4876d3b8e37cc64cbf9b6087ab87fb7dc9d6d112a ]]></g:image_link>
<g:product_type><![CDATA[ Idées Cadeaux > DENTIFRICE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bicare Gifrer Plus Dentifrice 75 ml ]]></title>
<g:id>40ef43ce-564a-4467-a466-34482de4a412</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bicare-gifrer plus dentifrice 75 ml?40ef43ce-564a-4467-a466-34482de4a412 ]]></link>
<g:price><![CDATA[ 430.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le dentifrice Bicare de GIFRER Plus, le dentifrice qui nettoie parfaitement les dents pour leur redonner une blancheur éclatante.<br />Le laboratoire GIFRER conçoit des produits pharmaceutiques d’hygiène et de soins destinés à toute la famille.<br />Le dentifrice Bicare de GIFRER Plus composé de bicarbonate de sodium et de fluor, et à l’arôme mentholé, agit en diminuant les bactéries de la plaque dentaire et les taches sur les dents, renforce et protège l’émail des dents afin de lutter contre ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401360065840</g:gtin>
<g:brand><![CDATA[ GIFRER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7978c03dd8ed2df7e4c685a95a9da834ba86fff8b75948bce027e2393745f352 ]]></g:image_link>
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
<title><![CDATA[ Bicare Gifrer Plus Poudre Action Blanchissante 15 g ]]></title>
<g:id>0c7c8cde-3de3-461c-9781-0c7f4a641b4c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bicare-gifrer plus poudre action blanchissante 15 g?0c7c8cde-3de3-461c-9781-0c7f4a641b4c ]]></link>
<g:price><![CDATA[ 630.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Gifrer Bicare Gifrer Plus Poudre Action Blanchissante 15 g est une poudre blanchissante au charbon, qui aide à éliminer les colorations dentaires dues à l'alimentation et au tabac. Sa poudre de charbon 100% végétal, issue de la noix de coco, agent polissant naturel, agit jusque dans les sillons les plus fins des dents, pour un polissage extra-doux et un nettoyage en profondeur.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129000663</g:gtin>
<g:brand><![CDATA[ GIFRER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d18078d4eb106cc554fdec6a94a6c2666c17fe3d83e6bfe8598b1f48a551f8d6 ]]></g:image_link>
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
<title><![CDATA[ Bicare plus 60 ml ]]></title>
<g:id>10d312f8-42c3-4324-901a-394f9a335628</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bicare-plus 60 ml?10d312f8-42c3-4324-901a-394f9a335628 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les dents parfois jaunissent du fait de facteurs externes tels que la consommation de café, de tabac, de thé...Le tartre lui se forme sur la face interne des dents et selon les individus son apparition est plus ou moins rapide. Le Soin BICARE PLUS vous aide à reblanchir vos dents et à atténuer le tartre.Propriétés</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401373541324</g:gtin>
<g:brand><![CDATA[ GIFRER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e30d3b4740848c0c3d151ed73e96b6026ba2b8d686c12e93cd95551b8809c40 ]]></g:image_link>
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
<title><![CDATA[ Bio secure crème mains 50ml ]]></title>
<g:id>403fb0ce-e2c8-4111-81af-974154bec130</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bio-secure crème mains 50ml?403fb0ce-e2c8-4111-81af-974154bec130 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème pour les mains Bio Secure contient des actifs naturels qui réparent, régénèrent et protégent des agressions extérieures.</p>
<p>Elle nourrit intensément les mains gercées et tiraillées dès les premiers froids.</p>
<p>Ce produit certifié respecte les exigences de la cosmétique écologique et biologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3515451163015</g:gtin>
<g:brand><![CDATA[ Vitavéa ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b1c56af1be3d4e439bd834514f5387b5672218ddd24cfc8cfdd9dd7e4e079a3b ]]></g:image_link>
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
<title><![CDATA[ Biocanina  Fiprodog Combo  Grands Chiens de 20 à 40kg, 3 Pipettes ]]></title>
<g:id>c2e056fe-cc8b-4d2d-a79e-49716c241d05</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprodog combo  grands chiens de 20 à 40kg, 3 pipettes?c2e056fe-cc8b-4d2d-a79e-49716c241d05 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Fiprodog Combo Spot-On</span> de <span>BIOCANINA</span> est un antiparasitaire externe pour les chiens. </p>
<p>Il convient aux chiens de 20kg à 40kg. </p>
<p>Il permet : </p>
<p>- Traitement de l'infestations et prévention des réinfestations par les puces (<em>Ctenocephalides spp</em>.) du fait de l’activité insecticide persistant pendant 8 semaines.</p>
<p>Prévention de la multiplication des puces par inhibition du développement des œufs (activité ovicide) et des larves et pupes issue ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989758967</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6bb24d6f99699a2d194d38f4dfad9b68085319d1e120cf7b1f3752933fd3dc15 ]]></g:image_link>
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
<title><![CDATA[ Biocanina  prurispray anti-démangeaison 80 ml ]]></title>
<g:id>6e6e5468-5687-4988-951c-3413636fab16</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-prurispray anti-démangeaison 80 ml?6e6e5468-5687-4988-951c-3413636fab16 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spray calmant anti-démangeaison (sans alcool) pour chiens et chats.</p>
<p>Solution apaisante pour chiens et chats :</p>
<p>– Soulage le prurit.<br />– Réhydrate les peaux prurigineuses, desséchées et irritées.<br />L’Aloe vera, excellent hydratant, accélère la régénération de la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401178653123</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0080bd9111105bd4dad78603481dc95892aa79233d2d9725884a7517eada2f93 ]]></g:image_link>
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
<title><![CDATA[ Biocanina Antilactis 30 comprimés ]]></title>
<g:id>73d139ad-d75b-4b69-811d-988940e839d8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-antilactis 30 comprimés?73d139ad-d75b-4b69-811d-988940e839d8 ]]></link>
<g:price><![CDATA[ 870.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Chez les chiennes et les chattes : Traitement symptomatique du tarissement de la sécrétion lactée.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729023618</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/267da53b40e68efba7d05f326bfc791b5a9d81dc7e16d55b21cdae2ea24607c2 ]]></g:image_link>
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
<title><![CDATA[ Biocanina Arthroplus 40 comprimés ]]></title>
<g:id>62f07633-785b-49b4-886f-cd3ac19f12c4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-arthroplus 40 comprimés?62f07633-785b-49b4-886f-cd3ac19f12c4 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aliment complémentaire pour chien et chat qui favorise le fonctionnement optimal des articulations.</p>
<h6>b. Propriétés</h6>
<p>• L’intégrité du cartilage articulaire est un élément indispensable au maintien des capacités locomotrices et au confort de vie des chiens et des chats. Chez les chiens âgés en particulier, les races de grande taille ou les chiens en surpoids, l’arthrose est favorisée et peut alors gêner leurs déplacements et provoquer une douleur parfois invalidante. Par sa compos ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401145812126</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/785dcf10d437e0d4db9074a3218d4f4252baa964dc3cbce0e38fe5f407d6dc58 ]]></g:image_link>
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
<title><![CDATA[ Biocanina Artrocalm Traitement D’appoint Des Problèmes Articulaires Pour Chiens Et Chats 90g ]]></title>
<g:id>d611d822-aba8-4bcd-81ae-860f7b332df6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-artrocalm traitement d’appoint des problèmes articulaires pour chiens et chats 90g?d611d822-aba8-4bcd-81ae-860f7b332df6 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Traitement d’appoint des problèmes articulaires chez le chien et le chat.</p>
<p class="p1">La chondroïtine stimule la régénération du cartilage et contribue à la lubrification de l’articulation.</p>
<p class="p1">La Reine des prés est traditionnellement utilisée pour soulager la douleur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576929172</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c76fe9f95c24444e8216c4d589bca8e93aca7f433dafecde410785c5b49cb4f ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Articulations Animaux ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Collier Répulsif Chats ]]></title>
<g:id>f405b2a4-0465-40f5-b159-f88d1a244644</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-collier répulsif chats?f405b2a4-0465-40f5-b159-f88d1a244644 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biocanina Collier Répulsif Chats Dès 8 Semaines est un collier insectifuge de couleur marron pour chat (dès 8 semaines) à base de géraniol, contre les puces, tiques, moustiques, aoûtats, phlébotomes et poux. Il diffuse continuellement l'actif pendant environ 3 mois, sans affecter le sens olfactif de l'animal.<br />Il comporte un dispositif anti-étranglement pour garantir la sécurité de l'animal.</p>
<p>Résiste à l'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666560024763</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7967f9314c67ab826147f0dda22053e9a06466382f1c905b7403d8a150e09f5 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Deltatic Collier Grand Chien +25kg ]]></title>
<g:id>46002af8-ff95-431e-ad5b-33b81bf66d80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-deltatic collier grand chien +25kg?46002af8-ff95-431e-ad5b-33b81bf66d80 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Biocanina Deltatic Collier Grand Chien </span>a été conçu avec un dispositif de fermeture de sécurité (sécurité anti-étranglement). Dans le cas improbable où le chien serait coincé avec son collier, la force du chien sera suffisante pour élargir le collier afin de permettre une libération rapide.</p>
<p><span> </span></p>
<p>Prévention des infestations par les tiques (<em>Ixodes ricinus et Rhipicephalus sanguineus</em>) grâce à une action acaricide sur 6 mois.</p>
<p><br />Prévention de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8437016699256</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5cc756e3af2ea3aad7210afe15718d2a49ef5e22a2a4e81a094cbe998b29fff ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Deltatic Collier Petit Chien de moins de 5kg ]]></title>
<g:id>a56644f9-34c0-4301-a74e-06a751e696cc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-deltatic collier petit chien de moins de 5kg?a56644f9-34c0-4301-a74e-06a751e696cc ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Biocanina Deltatic Collier Petit Chien</span> convient aux chiens ayant un tour de cou mesurant jusqu’à 35 cm.</p>
<p><span> </span></p>
<p>Prévention des infestations par les tiques (<em>Ixodes ricinus et Rhipicephalus sanguineus</em>) grâce à une action acaricide pendant 6 mois.<br />Prévention des piqûres de phlébotomes (<em>Phlebotomus perniciosus</em>) grâce à une action répulsive (anti-gorgement) pendant 5 mois.<br />Prévention des piqûres de moustiques (<em>Culex pipiens</em>) gr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8437016699232</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87910df19b597340565b74f348c6cedd3c6368d226cece74d1ee359f57d660fa ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Deltatic Collier Petit et Moyen Chien de 5 à 25kg ]]></title>
<g:id>c4846ee2-1c01-4d52-a659-ca5abd9ae2f8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-deltatic collier petit et moyen chien de 5 à 25kg?c4846ee2-1c01-4d52-a659-ca5abd9ae2f8 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Biocanina Deltatic Collier Petit et Moyen Chien</span> a été conçu avec un dispositif de fermeture de sécurité (sécurité anti-étranglement). Dans le cas improbable où le chien serait coincé avec son collier, la force du chien sera suffisante pour élargir le collier afin de permettre une libération rapide.</p>
<p><span> </span></p>
<p>Prévention des infestations par les tiques (<em>Ixodes ricinus et Rhipicephalus sanguineus</em>) grâce à une action acaricide pendant 6 mois.<span>Préventi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8437016699249</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4692ff7134b3a7d6e2c9797df795a6ee340304b7e8fc0c5822b49f0dd97f9a69 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Fiprocat 50MG /3p ]]></title>
<g:id>4fd5f5af-f522-4449-944c-b4623686614f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprocat 50mg /3p?4fd5f5af-f522-4449-944c-b4623686614f ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chez les chats :<br />Traitement des infestations par les puces (<em>Ctenocephalides</em><span> </span>spp.).<br />L’efficacité insecticide prévient de toute nouvelle infestation par les puces pendant 4 semaines.</p>
<p>Le médicament peut être intégré dans un programme de traitement de la Dermatite par Allergie aux Piqûres de Puces (DAPP), lorsque ce diagnostic a été posé par un vétérinaire.</p>
<p>Bien qu’une efficacité acaricide immédiate n’a pas été démontrée pour ce produit, une activité  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700454550010</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d14dd6e67d195215ce587b31e5411d17d63e99f6e80ef26da2e2ab1d5375962 ]]></g:image_link>
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
<title><![CDATA[ Biocanina Fiprocat Combo Chats et Furets, 3 Pipettes ]]></title>
<g:id>3f22107a-2b0d-4562-8d15-57633f5e0e58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprocat combo chats et furets, 3 pipettes?3f22107a-2b0d-4562-8d15-57633f5e0e58 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Chez les chats :</span></p>
<p>Traitement des infestations mixtes par les puces et les tiques et/ou les poux broyeurs :</p>
<p>- Traitement des infestations et prévention des ré-infestations par les puces (<em>Ctenocephalides spp</em>.) du fait de l’activité insecticide persistant pendant 4 semaines.</p>
<p>Prévention de la multiplication des puces par inhibition du développement des œufs (activité ovicide), des larves et pupes issues des œufs pondus par les puces adultes (activité larv ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989758905</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b797e9b997f4a7c6e5ac0162f453af8be890fc93e58b77a117f7c7f61e99d730 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Fiprodog 134mg 3 pipettes ]]></title>
<g:id>8e521750-253a-4408-be80-fad6c73e4c82</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprodog 134mg 3 pipettes?8e521750-253a-4408-be80-fad6c73e4c82 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L’efficacité insecticide prévient de toute nouvelle infestation par les puces pendant 6 semaines.</span><br /><span>Le médicament peut être intégré dans un programme de traitement de la Dermatite par Allergie aux Piqûres de Puces (DAPP), lorsque ce diagnostic a été posé par un vétérinaire.</span><br /><span>Bien que le produit ne montre pas toujours une efficacité acaricide immédiate (des tiques peuvent être présentes après 48 heures), il possède une activité acaricide persistante jusqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700454550034</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8838a2e6704bb1c1b50e7e9ea829ec3d336b65fdc75fe0b51fd55633c1601eaf ]]></g:image_link>
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
<title><![CDATA[ Biocanina Fiprodog Combo Chiens de 10 à 20kg, 3 Pipettes ]]></title>
<g:id>13b1d40d-1199-4e72-8cf7-77bdb6d707df</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprodog combo chiens de 10 à 20kg, 3 pipettes?13b1d40d-1199-4e72-8cf7-77bdb6d707df ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Fiprodog Combo Spot-On </span>de <span>BIOCANINA </span>est un traitement contre les infestations et pour prévenir les réinfestations des puces et des tiques.</p>
<p>Cet antiparasitaire externe s'utilise pour : </p>
<p>- Traitement de l'infestations et prévention des réinfestations par les puces (<em>Ctenocephalides spp</em>.) du fait de l’activité insecticide persistant pendant 8 semaines.</p>
<p>Prévention de la multiplication des puces par inhibition du développement des œufs (activi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989758950</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e152fcc0f10b0796ccda56abbe475db0518e5faff7d1af6a4dbc09544ae6b3a7 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Fiprodog Combo Petits Chiens de 2 à 10kg 3 Pipettes ]]></title>
<g:id>2a5af38e-65b2-42d2-bcc1-7e9b6af0264c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprodog combo petits chiens de 2 à 10kg 3 pipettes?2a5af38e-65b2-42d2-bcc1-7e9b6af0264c ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Fiprodog Combo Spot-On</span> de la marque <span>BIOCANINA</span> est un antiparasitaire externe pour les chiens dont le poids est compris entre 2 et 10kg. </p>
<p>Il permet le traitement des infestations mixtes par les puces et les tiques et/ou les poux broyeurs : </p>
<p>- Traitement de l'infestations et prévention des réinfestations par les puces (<em>Ctenocephalides spp</em>.) du fait de l’activité insecticide persistant pendant 8 semaines.</p>
<p>Prévention de la multiplication des ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989758936</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/54549a94fcfb90da4fed81fbb6c42c285fad32750a77f78c8a21114a53ef756c ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Lait Maternisé en poudre pour Chiens Chats + biberon 400 g ]]></title>
<g:id>e4170f33-8a74-4342-b811-df69dfa10883</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-lait maternisé en poudre pour chiens chats + biberon 400 g?e4170f33-8a74-4342-b811-df69dfa10883 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <h6>Il peut être utilisé :</h6>
<div>
<ul><li>Pour l’élevage sans la mère</li>
<li>En complément de l’allaitement maternel (insuffisance de lait, portée nombreuse…)</li>
<li>En aliment de sevrage avec incorporation progressive de l’aliment de croissance choisi (dès la quatrième semaine)</li>
<li>Pour enrichir la ration alimentaire (période d’activité physique, gestation, lactation…)</li>
<li>En remplacement de l’eau de boisson chez les chats</li>
</ul><h6>b. Propriétés</h6>
<p>Une composition, p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401565556099</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d931c89ba73afae188b50b3eb0df3ccff653167b7e57288deb4dce6e04f6e0fc ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > ALIMENTATION CHATS > ALIMENTATION CHIENS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Milbetel  Chaton 4mg/10mg x 2 cp ]]></title>
<g:id>1ac6e70c-ee98-422b-8ef9-881ca23b43fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-milbetel  chaton 4mg/10mg x 2 cp?1ac6e70c-ee98-422b-8ef9-881ca23b43fb ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chez les chats :</p><ul><li><p>Traitement des infestations mixtes par des cestodes (vers plats) immatures et adultes et des nématodes (vers ronds) adultes des espèces suivante</p><ul><li><p>Cestodes<em> : Echinococcus multilocularis, Dipylidium caninum, Taenia spp.,</em></p></li><li><p>Nématodes : <em>Ancylostoma tubaeforme, Toxocara cati</em></p></li></ul></li><li><p>Prévention de la dirofilarose (<em>Dirofilaria immitis</em>), si un traitement concomitant contre des cestodes est indiqué.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729025230</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a90d21c840421ca2802dc2cfab1e9d93c040dcd6bfde2e2c175dcca81f44164 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Vermifuges  > Anti-parasitaires ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Milbetel Chat 2,5mg/25mg x 2 cp ]]></title>
<g:id>c6676234-1433-4cc6-81b3-f1d89ad39571</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-milbetel chat 2,5mg/25mg x 2 cp?c6676234-1433-4cc6-81b3-f1d89ad39571 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p id="BL03WJT"><span>Milbetel Chats Arôme Viande</span> de <span>BIOCANINA</span> est un traitement des infestations mixtes chez les chats par des cestodes (vers plats) immatures et adultes et des nématodes (vers ronds) adultes des espèces suivantes :</p>
<p>Cestodes :</p>
<p>Echinococcus multilocularis</p>
<p>Dipylidium caninum</p>
<p>Tænia spp.,</p>
<p>Nématodes :</p>
<p>Ancylostoma tubaeforme,</p>
<p>Toxocara cati</p>
<p>Prévention de la dirofilariose (Dirofilaria immitis), si un traitement  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729025247</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8eb3139e0db3b509c0d7ddf78d198ec4e58df8f78610fcb528490286be59552 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Vermifuges  > Anti-parasitaires ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Milbetel Chien 12,5mg/125mg x 2 cp ]]></title>
<g:id>aba3fece-265c-4928-8e2e-2655f44bd203</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-milbetel chien 12,5mg/125mg x 2 cp?aba3fece-265c-4928-8e2e-2655f44bd203 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>La milbémycine oxime appartient au groupe des lactones macrocycliques, produite par la fermentation de Streptomyces hygroscopicus var. aureolacrimosus. Elle est active contre les acariens, les stades larvaire et adulte des nématodes et contre les larves de Dirofilaria immitis.L’activité de la milbémycine est liée à son action sur la neurotransmission chez les invertébrés : la milbémycine oxime, comme les avermectines et autres milbémycines, augmente, chez les nématodes et les insectes, la per ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729025223</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/edf9638af809086bf01cadf5a8633266fa9a4e35b17f8082e781fdf6c9d4ab43 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Vermifuges  > Anti-parasitaires ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Milbetel Petit Chien Chiot 2,5mg/25mg x 2 cp ]]></title>
<g:id>e16da168-a2ac-4952-8291-c8a0cb2d81c9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-milbetel petit chien chiot 2,5mg/25mg x 2 cp?e16da168-a2ac-4952-8291-c8a0cb2d81c9 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chez les chiens :</p><ul><li><p>Traitement des infestations mixtes par des cestodes (vers plats) et des nématodes (vers ronds) adultes des espèces suivantes :</p><ul><li><p>Cestodes: <em>Dipylidium caninum</em>, <em>Taenia spp</em>., <em>Echinococcus spp</em>., <em>Mesocestoides spp</em>.,</p></li><li><p>Nématodes: <em>Ancylostoma caninum, Toxocara canis, Toxascaris leonina, Trichuris vulpis, Thelazia callipaeda</em> (voir les programmes de traitement spécifiques sous la rubrique « Voies d'ad ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729025216</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5eca77e5569af8a4f01da695aade5f852133a7728b33534499733d5bbbb35dd6 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Vermifuges  > Anti-parasitaires ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Otostan Solution Auriculaire Chien Et Chat15ml ]]></title>
<g:id>f7db2e6c-1fef-4124-9917-2b678337d067</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-otostan solution auriculaire chien et chat15ml?f7db2e6c-1fef-4124-9917-2b678337d067 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Traitement de la gale auriculaire due à Otodectes cynotis chez le chien et le chat.</p>
<p class="p1">– Le crotamiton possède les propriétés suivantes :<br /> – acaricide spécifique notamment contre Octodectes cynotis, agent de la gale auriculaire du chien et du chat,<br /> – antiprurigineux efficace et rapide dont l’action débute quelques minutes après l’application et se prolonge 4 à 6 heures.</p>
<p class="p1">Il conduit à une éradication rapide et durable des gales auriculaires ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729238241</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb0e37b7c9135c0ce7521df833197f365e686415dc1ea6d53419389c8d6652e6 ]]></g:image_link>
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
<title><![CDATA[ Biocanina Permetrix Chiens Moyens 3 Pipettes ]]></title>
<g:id>13e9e030-bf05-43a8-a504-4a2a14fbd2a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-permetrix chiens moyens 3 pipettes?13e9e030-bf05-43a8-a504-4a2a14fbd2a7 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biocanina Permetrix Chiens Moyens 3 Pipettes est une solution pour spot-on pour chiens de 10 kg à 25 kg qui agit contre les parasites externes :</p>
<ul><li>elle élimine les puces et tiques,</li>
<li>offre un effet répulsif sur les tiques, moustiques et phlébotomes,</li>
<li>réduit le risque de transmission de la leishmaniose canine.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989741068</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30239dda397cab852aae15f03e6aeaef42994c74cd6a9396b1c74146576dc25a ]]></g:image_link>
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
<title><![CDATA[ Biocanina Permetrix Grands chiens + 25kg 3 pipettes 4 ml ]]></title>
<g:id>3c36568d-d78e-46e5-b2c1-706179e8d6ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-permetrix grands chiens + 25kg 3 pipettes 4 ml?3c36568d-d78e-46e5-b2c1-706179e8d6ab ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les puces présentes sur le chien sont tuées dans la journée qui suit le traitement. Un seul traitement prévient les ré-infestations par les puces pendant 4 semaines. Le médicament peut être intégré dans un programme thérapeutique de la Dermatite par Allergie aux Piqûres de Puces (DAPP) lorsque celle-ci a été préalablement diagnostiquée par un vétérinaire.</p>
<p>Le produit possède une efficacité acaricide sur les tiques persistant pendant 4 semaines  (<em>Rhipicephalus sanguineus</em> et <em> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989741075</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c07beed19814a36bad20f85d9f444b6ff3b47bc5c633ca488cbf87f3f2b8b2e ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Permetrix Petits chiens 4 à 10kg 3 pipettes 1 ml ]]></title>
<g:id>c705ab40-f89f-4531-90fd-a00239552571</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-permetrix petits chiens 4 à 10kg 3 pipettes 1 ml?c705ab40-f89f-4531-90fd-a00239552571 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Prévention et traitement des infestations par les puces (<em>Ctenocephalides felis</em>).</p>
<p>Les puces présentes sur le chien sont tuées dans la journée qui suit le traitement. Un seul traitement prévient les ré-infestations par les puces pendant 4 semaines. Le médicament peut être intégré dans un programme thérapeutique de la Dermatite par Allergie aux Piqûres de Puces (DAPP) lorsque celle-ci a été préalablement diagnostiquée par un vétérinaire.</p>
<p>Le produit possède une efficacité a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3838989741044</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7a14cc6dff5ea1994a8e9b4c4d87ef9e85c337113a9a685912f4cfead0c700f3 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Pipettes Répulsives Chaton & Chat de 500 g à 5 kg 4 Pipettes ]]></title>
<g:id>72f66850-8e4f-4405-8c99-858def7359c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-pipettes répulsives chaton & chat de 500 g à 5 kg 4 pipettes?72f66850-8e4f-4405-8c99-858def7359c5 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biocanina Pipettes Répulsives Chaton &amp; Chat de 500 g à 5 kg 4 Pipettes est une solution qui protège le chaton (à partir de 8 semaines) et le chat des parasites externes, pendant un mois, par l'action répulsive des actifs certifiés Bio. Le produit se répartit sur toute la surface du corps par diffusion dans le sébum et construit un film protecteur contre les puces, tiques, poux, moustiques, phlébotomes, aoûtats.</p>
<p>Biocide classé TP19 (répulsif).</p>
<p>Contient 99,55% d'ingrédients d' ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666560024794</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7ac2aef6fd3b6e57afd66d141406d4f38da27e3dca688e7576f7ad7bafec59b ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Pipettes Répulsives Chiens de 15 à 30 kg 4 Pipettes ]]></title>
<g:id>1d28addc-34a1-4c3e-bf01-63c5540213d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-pipettes répulsives chiens de 15 à 30 kg 4 pipettes?1d28addc-34a1-4c3e-bf01-63c5540213d9 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biocanina Pipettes Répulsives Chiens de 15 à 30 kg 4 Pipettes est une solution qui protège le chien (de 15 à 30 kg) des parasites externes, pendant un mois, par l'action répulsive des actifs certifiés Bio. Le produit se répartit sur toute la surface du corps par diffusion dans le sébum et construit un film protecteur contre les puces, tiques, poux, moustiques, phlébotomes, aoûtats.</p>
<p>Biocide classé TP19 (répulsif).</p>
<p>Contient 99,55% d'ingrédients d'origine végétale ou minérale.<br / ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666560024817</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/083eba82fb134b52ca444bc2d70bd718fbe2259c6c72ce5f7094f919cc99a5e9 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Pipettes Répulsives Chiens de Plus de 30 kg 4 Pipettes ]]></title>
<g:id>24af9612-d76e-4acb-8f0f-509554a02b7b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-pipettes répulsives chiens de plus de 30 kg 4 pipettes?24af9612-d76e-4acb-8f0f-509554a02b7b ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Biocanina Pipettes Répulsives Chiens de Plus de 30 kg 4 Pipettes est une solution qui protège le chien de plus de 30 kg des parasites externes, pendant un mois, par l'action répulsive des actifs certifiés Bio. Le produit se répartit sur toute la surface du corps par diffusion dans le sébum et construit un film protecteur contre les puces, tiques, poux, moustiques, phlébotomes, aoûtats.</p>
<p>Biocide classé TP19 (répulsif).</p>
<p>Contient 99,55% d'ingrédients d'origine végétale ou minérale.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3666560024824</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e767fc82ba43a01c3e9652b036a6b71190596d075541bdc4193c52a0f03b8fa ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Randopatt lotion 90ml ]]></title>
<g:id>00e0999d-05f2-4889-97e9-32df306d858c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-randopatt lotion 90ml?00e0999d-05f2-4889-97e9-32df306d858c ]]></link>
<g:price><![CDATA[ 715.00 EUR ]]></g:price>
<description><![CDATA[ <h6>Lotion pour durcir et protéger les coussinets plantaires des chiens.</h6>
<p>RANDOPATT est une solution tannante pour durcir les coussinets (propriétés kératoplastiques qui favorisent la fabrication de la corne) avant une activité intense sur un sol abrasif (sable, cailloux, neige, glace etc.). Elle est également utilisée pour accélérer la cicatrisation des plaies des coussinets plantaires des chiens (propriétés antiseptiques et cicatrisantes).<br />RANDOPATT est particulièrement conseillé c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401177752766</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7153a3289953c930e830d54ef18ada1d236046881e6c1671d942063766ebb48f ]]></g:image_link>
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
<title><![CDATA[ Biocanina Shampoing Ape Tetramethrine 200ml ]]></title>
<g:id>cf5ac2f5-9943-479b-93f6-d2db15134ccf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing ape tetramethrine 200ml?cf5ac2f5-9943-479b-93f6-d2db15134ccf ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chez les chiens et les chats : Traitement des infestations par les puces, les poux et les tiques.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3461920000483</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8f9c6e97a4d02ad8ccb6ee01ae7ff79c558f48c835e35c052c8dffb996215fe ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina Shampoing sec en poudre ]]></title>
<g:id>501cd175-d79f-4c5d-8a51-37078170071a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing sec en poudre?501cd175-d79f-4c5d-8a51-37078170071a ]]></link>
<g:price><![CDATA[ 670.00 EUR ]]></g:price>
<description><![CDATA[ <p>– Absorption des excès de sébum, saleté et humidité contenus dans la fourrure des chiens et des chats.</p>
<p>– L’acide salicylique, kératolytique permet d’éliminer les squames.</p>
<p>– Ce shampooing redonne volume et brillance aux poils.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401142689004</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/63e573c07f00305112ceaf694a256928098ceacd7f877796494692ff0a846c2d ]]></g:image_link>
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
<title><![CDATA[ Biocanina Tick-Puss 2,5 mg/ml Anti-Puce, Anti-Tique, Anti-Poux À Base De Fipronil pour Chiens et Chats 250ml ]]></title>
<g:id>a027e63a-876f-4175-9796-4b038f81ae7d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-tick-puss 2,5 mg/ml anti-puce, anti-tique, anti-poux À base de fipronil pour chiens et chats 250ml?a027e63a-876f-4175-9796-4b038f81ae7d ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Chez les chats et les chiens :</p>
<p class="p1">Traitement des infestations par les puces (Ctenocephalides spp.).<br /> Traitement des infestations par les tiques (Ixodes ricinus, Rhipicephalus sanguineus).<br /> Traitement des infestations par les poux broyeurs chez le chien (Trichodectes canis) et le chat (Felicola subrostratus).</p>
<p class="p1">Le produit peut être intégré dans un programme thérapeutique de traitement de la Dermatite par Hypersensibilité aux Piqûres de Puces  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700481500224</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a10c444ea8a033b4d1e1da746f9ed5127d802a401b5dc100a63455ea64b49821 ]]></g:image_link>
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
<title><![CDATA[ Biocanina Tick-Puss pour chiens et chats 100ml ]]></title>
<g:id>ce1e27ba-7cdf-4a1e-b3ca-2f8d6a7676ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-tick-puss pour chiens et chats 100ml?ce1e27ba-7cdf-4a1e-b3ca-2f8d6a7676ff ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chez les chats et les chiens :<br />– Traitement des infestations par les puces (Ctenocephalides spp.).<br />– Traitement des infestations par les tiques (Ixodes ricinus, Rhipicephalus sanguineus).<br />– Traitement des infestations par les poux broyeurs chez le chien (Trichodectes canis) et le chat (Felicola subrostratus).</p>
<p>Le produit peut être intégré dans un programme thérapeutique de traitement de la Dermatite par Hypersensibilité aux Piqûres de Puces (DHPP).</p>
<p>L‘efficacité ins ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700481500217</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38cf32bd8f7fa3984d94043be696f6883ecb35faca3eb8ce366b4a020832cfef ]]></g:image_link>
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
<title><![CDATA[ Biocanina Tire-tiques 3 crochets ]]></title>
<g:id>224ad368-449a-4802-8ad4-35f3767c8495</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-tire-tiques 3 crochets?224ad368-449a-4802-8ad4-35f3767c8495 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>tire</span><span>-tiques Biocanina</span><span> se présente sous la forme d'un crochet et permet de retirer les tiques qui se seraient accrochées au pelage des animaux de compagnie. Il peut aussi être utilisé afin d'enlever une tique sur la peau humaine. Ce parasite est connu pour transmettre la borréliose de Lyme, plus communément appelée </span><span>maladie de Lyme</span><span>. Afin d'éviter la transmission aux animaux et à l'Homme, il est très important d'observer r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729024196</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88698528cc577c7fbd9e666faad556751198bb1dcd673381074e0e208c27fe54 ]]></g:image_link>
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
<title><![CDATA[ Biocanina ascatène 10 comprimés ]]></title>
<g:id>d3bb079b-ae58-4d53-a177-813f784184c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-ascatène 10 comprimés?d3bb079b-ae58-4d53-a177-813f784184c5 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Affections à parasites sensibles au pyrantel et au niclosamide.</p>
<p class="p1">Chez les chiens et les chats :<br /><br /> Traitement des infestations par les parasites suivants :<br /> – Nématodes gastro-intestinaux : Toxocara canis et cati, Toxascaris leonina, Ankylostoma caninum, Uncinaria stenocephala.<br /> – Cestodes : Taenia spp, Dipylidium caninum.</p>
<p class="p1">L’association réalisée permet d’atteindre les vers qui sont à la fois les plus fréquents et les plus nuisib ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729236063</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b9d4e9cfaaade3dafc9e281ba874968bb2a09e41d5b9f8750072db8ca8db993 ]]></g:image_link>
<g:product_type><![CDATA[ VÉTÉRINAIRE > Vermifuges  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Biocanina diffuseur anti stress + recharge ]]></title>
<g:id>3c671440-6c46-4527-8aeb-65b14d684044</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-diffuseur anti stress + recharge?3c671440-6c46-4527-8aeb-65b14d684044 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour les chats à partir de 6 semaines.</span><br /><span>Durée d’action : 4 semaines</span><br /><span>Convient pour une surface allant jusqu’à 50m².</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018744</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98c24da204f66d568c6798b7c6e72f3a42740451bdb013ff93bd2ef130e84f82 ]]></g:image_link>
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
<title><![CDATA[ Biocanina eco logis fogger ]]></title>
<g:id>4b7d9ca1-5dc6-410f-9678-3526b3eadc27</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-eco logis fogger?4b7d9ca1-5dc6-410f-9678-3526b3eadc27 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>ECO-LOGIS FOGGER a une action puissante et prolongée contre les insectes (puces, poux, punaises de lit), les acariens (tiques, aoûtats, agents de la gale) et araignées. La perméthrine détruit rapidement les parasites adultes. Le méthoprène inhibe le développement et la métamorphose des larves ainsi que la fécondité des femelles.</span><br /><span>ECO-LOGIS FOGGER agit donc de façon immédiate et différée sur le contrôle des populations de parasites.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018232</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32f00d697947ec7695d70848ebe029176a4abfeafc1be35301fcd715c3a161ed ]]></g:image_link>
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
<title><![CDATA[ Biocanina eco logis spray ]]></title>
<g:id>19e813f9-5968-4785-a335-0908cc8f2a73</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-eco logis spray?19e813f9-5968-4785-a335-0908cc8f2a73 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>ÉCO-LOGIS SPRAY a une action prolongée contre les insectes (puces, poux, punaises de lit), les acariens (tiques, aoûtats, agents de la gale) et les araignées. Elimine les œufs, les larves et les formes adultes des parasites. La perméthrine et la tétraméthrine détruisent rapidement les parasites adultes. Le méthoprène inhibe le développement et la métamorphose des larves ainsi que la fécondité des femelles.</p>
<p>ÉCO-LOGIS agit donc de façon immédiate et différée sur le contrôle des populatio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018416</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/06a32c90fc5695d9fd0538a2ca8fd7f6c2240d9411b5eec2e99d02d6e21bf31d ]]></g:image_link>
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
<title><![CDATA[ Biocanina fiprodog 67mg 3 pipettes ]]></title>
<g:id>4c19665d-4d3d-44a6-9b28-fda36af36379</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-fiprodog 67mg 3 pipettes?4c19665d-4d3d-44a6-9b28-fda36af36379 ]]></link>
<g:price><![CDATA[ 975.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L’efficacité insecticide prévient de toute nouvelle infestation par les puces pendant 6 semaines.</span><br /><span>Le médicament peut être intégré dans un programme de traitement de la Dermatite par Allergie aux Piqûres de Puces (DAPP), lorsque ce diagnostic a été posé par un vétérinaire.</span><br /><span>Bien que le produit ne montre pas toujours une efficacité acaricide immédiate (des tiques peuvent être présentes après 48 heures), il possède une activité acaricide persistante jusqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700454550027</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4032c11fc902b667c8d39b1b4ba9d593876cf1c817bb027da57318614b00c219 ]]></g:image_link>
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
<title><![CDATA[ Biocanina lait auriculaire hygiène des oreilles chiens et chats 90 ml ]]></title>
<g:id>e61662bf-6c61-4db6-b369-b42a4547fb18</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-lait auriculaire hygiène des oreilles chiens et chats 90 ml?e61662bf-6c61-4db6-b369-b42a4547fb18 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>– Propriété antiseptique due à l’acide borique et à l’eucalyptus,</p>
<p>– Propriété céruminolytique due aux tensioactifs présents dans l’excipient.<br />Le LAIT AURICULAIRE BIOCANINA peut donc être utilisé :<br />– pour l’hygiène et l’entretien régulier de l’oreille, une fois par semaine,<br />– pour supprimer les odeurs désagréables résultant des fermentations des débris accumulés dans le conduit auditif,<br />– pour évacuer les impuretés du conduit auditif avant l’application d’un traiteme ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401572450878</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ee9deb028f8cca78adf821e59b3b970fcd7d624de67013ee0c847777c04b948 ]]></g:image_link>
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
<title><![CDATA[ Biocanina multivermyx 2cp ]]></title>
<g:id>5048cb79-53af-4f1d-a0e8-e6c9d897932b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-multivermyx 2cp?5048cb79-53af-4f1d-a0e8-e6c9d897932b ]]></link>
<g:price><![CDATA[ 575.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chez les chats :<br />– Traitement curatif des infestations mixtes par les parasites gastro-intestinaux sensibles au praziquantel et au pyrantel :</p>
<p>– nématodes adultes :<br />Toxocara cati<br />Ancylostoma tubaeforme<br />Ancylostoma braziliense</p>
<p>– cestodes :<br />Taenia taeniaeformis</p>
<p></p>
<p></p>
<p><span>Ne pas utiliser en cas d’hypersensibilité connue au pyrantel, au praziquantel ou à l’un des excipients.</span><br /><span>Ne pas utiliser de façon concomitante avec des c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700454550201</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88aaeae507075daf5dc77f8bd6236800290b8d95d0c6b84ec2cc52e9dcf0060e ]]></g:image_link>
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
<title><![CDATA[ Biocanina parasites interne 30ml ]]></title>
<g:id>f94055d7-07b7-4b7f-8704-8bcb3c866003</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-parasites interne 30ml?f94055d7-07b7-4b7f-8704-8bcb3c866003 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le <span>complément alimentaire Ma Basse-cour Parasite Interne</span> est un <span>vermifuge pour volaille</span> à base de plantes qui <span>agit sur les parasites internes</span>, pouvant causer des maladies aux poules notamment.<br /></span></p>
<p> </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401160253867</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ac8360ea2813bfcb5c518739df770939e07031c0ef6595581d553d392957435 ]]></g:image_link>
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
<title><![CDATA[ Biocanina recharge anti stress ]]></title>
<g:id>4aef6b95-f7b4-4890-a586-1160754cc794</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-recharge anti stress?4aef6b95-f7b4-4890-a586-1160754cc794 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pour les chats à partir de 6 semaines</span><br /><span>Durée d’action : 4 semaines.</span><br /><span>Convient pour une surface allant jusqu’à 50m²</span></p>
<p><span><span>Le chat, animal routinier, est sensible à tout changement. Un déplacement, une visite chez le vétérinaire, l’arrivée d’un enfant ou d’un nouvel animal, des changements dans l’environnement, des bruits stridents, des odeurs étranges sont autant de sources de stress pour lui.</span><br /><span>Le diffuseur anti-stres ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018751</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bd8db1e61f5c3a49225b71652a6c2f7dac7f5635990c708c7b3f808f6794d42e ]]></g:image_link>
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
<title><![CDATA[ Biocanina shampoing chiot chaton 200ml ]]></title>
<g:id>bea64af2-9858-4c69-b4dd-abf258a8fa32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing chiot chaton 200ml?bea64af2-9858-4c69-b4dd-abf258a8fa32 ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Formule Dermo-Protectrice :</span><br /><span>Le shampoing chiot/chaton biocanina a une base lavante douce, sans Lauryl éther sulfate (LES), sans parabènes ni colorants. Il n’irrite pas la peau sensible des animaux et permet de l’hydrater et de la protéger à chaque shampoing.</span><br /><span>Sa formule à base de vitamine F nourrit et protège les peaux délicates des chiots et chatons.</span></p>
<p><span><span>Tube de 200 ml</span></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018782</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27250680cf1a85016d528e9f7effc914f4dad3c87b08d9010982c60a5f03d524 ]]></g:image_link>
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
<title><![CDATA[ Biocanina shampoing nourissant ]]></title>
<g:id>b495924a-69a2-48aa-96c0-ccfcf5714c89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing nourissant?b495924a-69a2-48aa-96c0-ccfcf5714c89 ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formule Dermo-Protectrice :<br />Le shampoing nourrissant biocanina a une base lavante douce, sans Lauryl éther sulfate (LES), sans parabènes ni colorants. Il n’irrite pas la peau sensible des animaux et permet de l’hydrater et de la protéger à chaque shampoing.<br />Les protéines d’avoine permettent de gainer le poil. Elles lui apportent douceur, brillance et le rendent plus facile à coiffer.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018812</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/882b150a555fa2b2f50b73226c6febd87554785d01c4d6302bd28b0c123cb7a1 ]]></g:image_link>
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
<title><![CDATA[ Biocanina shampoing poils courts 200ml ]]></title>
<g:id>b0cea24b-7f88-4514-a583-cc8adc85453b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing poils courts 200ml?b0cea24b-7f88-4514-a583-cc8adc85453b ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Formule Dermo-Protectrice :</span><br /><span>Le shampoing poils courts biocanina a une base lavante douce, sans Lauryl éther sulfate (LES), sans parabènes ni colorants. Il n’irrite pas la peau sensible des animaux et permet de l’hydrater et de la protéger à chaque shampoing.</span><br /><span>L’huile d’onagre contribue à régénérer et réparer les poils secs, abimés ou ternes tout en accélérant leur pousse.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018836</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d1e91785383cc172f49446eb9ca074f9beb0a9c42e13941c282bac62b26d3bda ]]></g:image_link>
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
<title><![CDATA[ Biocanina shampoing poils noirs ]]></title>
<g:id>99cd3f13-6307-400f-86c2-6093721264b2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing poils noirs?99cd3f13-6307-400f-86c2-6093721264b2 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formule Dermo-Protectrice :<br />Le shampoing poils noirs biocanina a une base lavante douce, sans Lauryl éther sulfate (LES), sans parabènes ni colorants. Il n’irrite pas la peau sensible des animaux et permet de l’hydrater et de la protéger à chaque shampoing.<br />Sa formule contribue à raviver la couleur noire et lui apporter de la brillance.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018850</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d297e93fa7c0b9f5ae99ad1bb8b9ea3faf943062ddeec144d652d7f25a878ec8 ]]></g:image_link>
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
<title><![CDATA[ Biocanina shampoing éclat poils blancs 200ml ]]></title>
<g:id>8cd2a89e-4278-40b4-8383-73d43a52df4e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-shampoing éclat poils blancs 200ml?8cd2a89e-4278-40b4-8383-73d43a52df4e ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Formule Dermo-Protectrice :</span><br /><span>Le shampoing éclat poils blancs biocanina a une base lavante douce, sans Lauryl éther sulfate (LES), sans parabènes ni colorants. Il n’irrite pas la peau sensible des animaux et permet de l’hydrater et de la protéger à chaque shampoing.</span><br /><span>L’azurant optique permet de raviver la blancheur du pelage et d’éviter le jaunissement.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018799</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e5fb41f816596f53edb65aa38547512ee5d6bb698ed456f6bb66c8b788a2e9b ]]></g:image_link>
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
<title><![CDATA[ Biocanina spray anti stress flacon 100ml ]]></title>
<g:id>ad39be8f-000b-49c3-880a-f4a4289e7f5c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biocanina-spray anti stress flacon 100ml?ad39be8f-000b-49c3-880a-f4a4289e7f5c ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le chat, animal routinier, est sensible à tout changement. Un déplacement, une visite chez le vétérinaire, l’arrivée d’un enfant ou d’un nouvel animal, des changements dans l’environnement, des bruits stridents, des odeurs étranges sont autant de sources de stress pour lui.</span><br /><span>Le spray anti-stress biocanina est recommandé pour une action ciblée lors de situation stressante ponctuelle (transport, visite chez le vétérinaire…).</span><br /><span>Il peut également être utilis ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3661729018768</g:gtin>
<g:brand><![CDATA[ BIOCANINA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da097fd4386e556383189ce135d2481474647a05e5f5e2334aadb91d10d9be40 ]]></g:image_link>
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
<title><![CDATA[ Biodance Masque Collagène  ]]></title>
<g:id>dd0b4418-210a-47af-81d3-d851cd8a1e85</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/biodance-masque collagène ?dd0b4418-210a-47af-81d3-d851cd8a1e85 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bio-Collagen Real Deep Mask de Biodance est formulé à base d’extrait d’enzyme galactomyce, de collagène, d’acide oligo-hyaluronique et de probiotiques pour resserrer les pores, redonner de l’élasticité et fournir une hydratation immédiate.</p><p>Convient à tous les types de peaux, même les plus sensibles</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8809937360834</g:gtin>
<g:brand><![CDATA[ BIODANCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c881069503f20e76fe4eca965276aa6e3abb5387e95c6fe186b66f0fe4e1888f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma - ABCDerm H2O Solution Micellaire 100ml ]]></title>
<g:id>86168369-4eb4-49d0-951e-6266d7208066</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm h2o solution micellaire 100ml?86168369-4eb4-49d0-951e-6266d7208066 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>La solution Micellaire Abcderm H20 de Bioderma est un soin micellaire qui nettoie en douceur la peau délicate des nourrissons et des jeunes enfants. <br />Le procédé original de La solution Micellaire Abcderm H20 de Bioderma de micro-émulsion élimine les salissures en toute sécurité. Très agréable d'utilisation et d'une très haute tolérance.<br />La solution Micellaire Abcderm H20 de Bioderma calme les irritations et les rougeurs et favorise la reconstitution du film hydrolipidique. Sans savo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401395376645</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62a7cd03caa3b8058764e1e46680978157286c4feea378d2284979b068793668 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > TOILETTE ET PRODUIT LAVANT > EAU NETTOYANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma ABCDerm Change Intensif Pâte à l'eau 75g ]]></title>
<g:id>c000fbf5-123c-499c-a34b-7eca98652071</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm change intensif pâte à l'eau 75g?c000fbf5-123c-499c-a34b-7eca98652071 ]]></link>
<g:price><![CDATA[ 710.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bioderma ABCDerm Change Intensif Pâte à l'Eau 75 g est un soin apaisant spécifiquement formulé selon l'engagement ABCDerm, pour les rougeurs de l'épiderme fessier des bébés et jeunes enfants. A base de D-panthénol, elle calme les sensations d'inconfort.</span></p>
<p><span><span>Elle renforce la barrière cutanée en accélérant la reconstruction de l'épiderme.</span></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129802168</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bcdb8f3aaf8595c7332c3e821185d91d3a1ea7f3a714cffed5f14bddf7c85ecf ]]></g:image_link>
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
<title><![CDATA[ Bioderma ABCDerm Cold Cream Crème Lavante 1L ]]></title>
<g:id>3880f72c-125e-4189-99c1-bf04c760c9e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm cold cream crème lavante 1l?3880f72c-125e-4189-99c1-bf04c760c9e0 ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Spécifiquement formulée selon l’engagement dermatologique ABCDerm, la crème lavante ABCDerm Cold-Cream est une hygiène nourrissante pour les peaux normales à sèches.</p><p>Sa base lavante douce sans savon contient des actifs surgraissants, riches en acides gras essentiels, permettant de nettoyer la peau en douceur et de respecter l'équilibre des peaux les plus sensibles.</p><p>Sa formule, inspirée de la recette traditionnelle de la cold cream, contient&nbsp;:<br></p><p>- De l’huile d’amande d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129801543</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b1b42de01dc6471b3b97a1d991df22ba924d473e258be94cb38184f142a3307 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > Bébé > TOILETTE ET PRODUIT LAVANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma ABCDerm Gel moussant 1 Litre ]]></title>
<g:id>22e137b4-2fbc-401c-b4d0-9b8089f97c46</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm gel moussant 1 litre?22e137b4-2fbc-401c-b4d0-9b8089f97c46 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le gel nettoyant doux sans savon haute sécurité et haute tolérance des peaux sensibles et fragiles des bébés et des enfants.</p>
<p>Spécifiquement formulé selon l’engagement de sécurité dermatologique ABCDerm, ABCDerm Moussant  nettoie en douceur la peau et le cuir chevelu délicat des bébés et des enfants.</p>
<p>Sa base lavante douce non délipidante respecte l’équilibre cutané et capillaire de toutes les peaux même les plus fragiles. La peau et les cheveux sont doux.</p>
<p>ABCDerm Moussant  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401397163618</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a600708ea86afcdfe82df7af8e94056dd567069b04dcd9b8beca9861b6a282cf ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > TOILETTE ET PRODUIT LAVANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma ABCDerm H2O Eau Micellaire 1 Litre ]]></title>
<g:id>7570c004-a84b-468f-b19b-a2554099e1b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm h2o eau micellaire 1 litre?7570c004-a84b-468f-b19b-a2554099e1b9 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Solution Micellaire Abcderm H2O des laboratoires Bioderma est un soin micellaire qui nettoie en douceur la peau délicate des nourrissons et des jeunes enfants. <br />Le procédé original de ce soin, composé de micro-émulsion, élimine les salissures en toute sécurité. Très agréable d'utilisation et d'une très haute tolérance. <br />Abcderm H2O des laboratoires Bioderma calme les irritations et les rougeurs et favorise la reconstitution du film hydrolipidique. <br />Sans savon, Abcderm H2O de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129801987</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3df54d6f32646108d712a27a23cf14edcadba29187583bfcf3dd4c00a2c233a2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > TOILETTE ET PRODUIT LAVANT > EAU NETTOYANTE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma ABCDerm Peri Oral 40ml ]]></title>
<g:id>8431b331-e86e-42d8-9142-811da67ffd81</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm peri oral 40ml?8431b331-e86e-42d8-9142-811da67ffd81 ]]></link>
<g:price><![CDATA[ 830.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Bioderma ABCDerm Péri-oral 40 ml est une crème apaisante qui purifie et protège l'épiderme irrité du contour de la bouche des bébés et des enfants.</span></p>
<p><span><span>Cette crème est facile à étaler et ne laisse pas de trace blanche sur la peau. Elle offre une bonne tolérance cutanée. Elle peut être appliquée dès la naissance.</span></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129801628</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/366699db1e442cdea0e1f749207153b5f663b49f8e543423722b5ac9c79357ba ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma ABCDerm Shampoing Douceur 200 ml ]]></title>
<g:id>55143bf3-1ce5-4f47-a94e-6611a42bf9e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-abcderm shampoing douceur 200 ml?55143bf3-1ce5-4f47-a94e-6611a42bf9e0 ]]></link>
<g:price><![CDATA[ 760.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bioderma ABCDerm Shampooing Douceur 200 ml est spécifiquement formulé selon l'engagement de sécurité dermatologique ABCDerm, pour laver en douceur le cuir chevelu délicat des enfants.</p>
<p>Sa base lavante contient des tensio-actifs doux, respectant l'équilibre capillaire des tout petits. Les cheveux sont soyeux, faciles à coiffer.</p>
<p>Très bonne tolérance cutanée et oculaire. Ne pique pas les yeux.</p>
<p>Testé sous contrôle dermatologique et ophtalmologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129800997</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/91d0c0c81747c65ee7a0533eeeb99130c2e990cfca72927a1a323096570a04b2 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > Bébé > Dermocosmétique > TOILETTE ET PRODUIT LAVANT > SHAMPOOING ET SOINS CAPILLAIRES > SHAMPOOING ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Bioderma Atoderm 2-in-1 Oil Huile Sèche 150ml ]]></title>
<g:id>c935dbd4-dadf-4e5c-b55f-a1316805b367</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm 2-in-1 oil huile sèche 150ml?c935dbd4-dadf-4e5c-b55f-a1316805b367 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Les peaux sèches.</li>
<li><span>Résultats beauté :</span> La peau est intensément nourrie et lissée, relipidée et hydratée durablement.</li>
<li><span>Actifs :</span> Ester d'Acide Malique, Huile de Jojoba, Huile de Karanja, Céramides, Squalane.</li>
<li><span>On aime :</span> Son toucher doux et satiné.</li>
</ul><p> </p>
<p><span>Atoderm 2-in-1 oil de Bioderma</span> est une huile sèche perfectrice garantissant une efficacité à 2 niveaux :</p>
<p>- Le grain de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807934</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57befd7163fbb41eb82fe2225686e51e3fea9bfb93ea9ec55f3d1dcdc4751e63 ]]></g:image_link>
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
<title><![CDATA[ Bioderma Atoderm Baume Intensive + Huile de douche 100ml ]]></title>
<g:id>9fcfec8b-4bac-4abf-aa6d-1288e9874d83</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm baume intensive + huile de douche 100ml?9fcfec8b-4bac-4abf-aa6d-1288e9874d83 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Atoderm Intensive baume</span> apaise rapidement et durablement les sensations de démangeaisons. Il diminue l'incitation au grattage grâce à son actif anti-prurit PEA. Enrichi en agents apaisants, il calme les <span>irritations</span>. Atoderm Intensive baume rétablit durablement une barrière cutanée efficace grâce à la technologie LIPIGENIUM<span>.</span> Le complexe breveté Skin Barrier Therapy<span> </span>permet de limiter l'adhésion de certaines bactéries (staphylocoque doré)  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129809914</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bc82a966dbb9db5f78da79a7dcee5961e7c41c267826fc0ce2abe12bc5fb1033 ]]></g:image_link>
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
<title><![CDATA[ Bioderma Atoderm Crème Lavante 1L ]]></title>
<g:id>eb4f1c12-bd4b-4dec-a3ec-3c6a29ef52b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/bioderma-atoderm crème lavante 1l?eb4f1c12-bd4b-4dec-a3ec-3c6a29ef52b5 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème de douche est l'une des meilleures options pour les peaux sèches et sensibles !<br>Cette crème lavante visage et corps hydratante va apporter douceur à votre peau dès le premier lavage. N'attendez plus d'appliquer votre crème hydratante pour ressentir une sensation d'apaisement. Ce soin hydratant soulage dès l'hygiène.</p><p><br>Utilisée 1 à 2 fois par jour, la crème de douche lavante nettoie en douceur et protège votre peau durablement. Sa texture onctueuse et son savon délicat rend ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401399371455</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/936efb62d05ef82bdd92cd96bf5b25628123e87e2646b24fd0c036a503735306 ]]></g:image_link>
<g:product_type><![CDATA[ SOIN HYDRATATION CORPS  > PARFUMERIE > Dermocosmétique > HYGIENE CORPORELLE ]]></g:product_type>
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
