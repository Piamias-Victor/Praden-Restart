import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Produits santé et bien-être - Partie 13 ]]></title>
<description><![CDATA[ Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès. ]]></description>
<link>https://pharmacieagnespraden.com</link>
<item>
<title><![CDATA[ Pharmascience nopal contrôle du poids 200 gélules ]]></title>
<g:id>b7bd86e1-3d30-483c-a772-be7d3036d528</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-nopal contrôle du poids 200 gélules?b7bd86e1-3d30-483c-a772-be7d3036d528 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Contribue au métabolisme des graisses, ce qui aide à contrôler le poids. Favorise l'amincissement.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020107</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/174e3cd44e4885571f7e048c47baef706034f9b20d4755c82cd713a42e7a7398 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience olivier circulation 200 gélules ]]></title>
<g:id>494a1fbc-c24a-4614-a75f-4d348c05a05c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-olivier circulation 200 gélules?494a1fbc-c24a-4614-a75f-4d348c05a05c ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Antioxydant naturel aide les voies respiratoires supérieures. Traditionnellement connu pour favoriser la circulation du sang et la tension vasculaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020114</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30ade59436c1763cdf0babe8bdd7bf123f4f2e8466d607ce06c4f5860d75bc45 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience onagre confort menstruel 120 capsules ]]></title>
<g:id>dc0307e6-6fcd-4d3b-aa7f-7ef113bdac54</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-onagre confort menstruel 120 capsules?dc0307e6-6fcd-4d3b-aa7f-7ef113bdac54 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Source en acides gras polyinstaurés qui aident à maintenir un confort optimum pendant les règles et à entretenir une peau en bonne santé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020121</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cab9c7dcd03c579cfd320b3b9a7d02a37870e97f852bfdfccf568df1674c334a ]]></g:image_link>
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
<title><![CDATA[ Pharmascience orange douce bio huile essentielle 10ml ]]></title>
<g:id>7220d29d-ce86-4d19-92bd-82467dc48bbe</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-orange douce bio huile essentielle 10ml?7220d29d-ce86-4d19-92bd-82467dc48bbe ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Orange douce 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500367</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5b3f62d48ede6263fce9aa34cd713707d15d266bee92b3a78d9b3bf10cd77f1 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience origan compact bio huile essentielle 10ml ]]></title>
<g:id>53ff7064-3197-458d-9e6a-7daaae935024</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-origan compact bio huile essentielle 10ml?53ff7064-3197-458d-9e6a-7daaae935024 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Origan compact 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500374</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f70f72648282d5b8495cd47cf92f9735f19d6c7ddcec66f9e4bba69f5d57371 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience orthosiphon bio minceur - drainage 200 gélules ]]></title>
<g:id>5fda9c3b-ccb1-4859-b247-b39a7cc26ac5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-orthosiphon bio minceur - drainage 200 gélules?5fda9c3b-ccb1-4859-b247-b39a7cc26ac5 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Favorise l'amincissement en complément de mesures diététiques. Contribue au débit urinaire. Contribue au bon fonctionnement hépatique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020138</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c97e01603555c27c6eb0a3cbe7c82939ee751ecb176b3552588caab8d6ad7aa0 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience ortie piquante feuille bio articulations 200 gélules ]]></title>
<g:id>2362403c-d160-4dec-b4c1-49f4a1922b03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-ortie piquante feuille bio articulations 200 gélules?2362403c-d160-4dec-b4c1-49f4a1922b03 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bon pour les os. Positif pour la santé des articulations. Reconnu pour contribuer à une peau nette. Favorise la vitalité de l'organisme.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020145</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bf4f94812489554df37d03d9e6bfc06bd42ff15f56765e14d4ef57cf063072e4 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience ortie racine piquante bio 200 gélules ]]></title>
<g:id>5fc6356d-7d30-40dd-9442-d649826ab3b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-ortie racine piquante bio 200 gélules?5fc6356d-7d30-40dd-9442-d649826ab3b4 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Favorise l'élimination rénale de l’eau. Aide à se sentir plus énergique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020152</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dd7553c2d49f965047a39140ba6b95dd47da1c7577ccc73615535bb663bf277b ]]></g:image_link>
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
<title><![CDATA[ Pharmascience palmarosa bio huile essentielle 10ml ]]></title>
<g:id>938931a9-2658-47e9-8f8b-ec129b7bc253</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-palmarosa bio huile essentielle 10ml?938931a9-2658-47e9-8f8b-ec129b7bc253 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Palmarosa 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500381</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d08ec32e260f366b21467fd7f1b4f4184da34a0d79f1b749de598df9765ceec ]]></g:image_link>
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
<title><![CDATA[ Pharmascience pamplemousse blanc bio huile essentielle 10ml ]]></title>
<g:id>97a7fda3-d4e7-456c-a464-7252e3b19a1e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-pamplemousse blanc bio huile essentielle 10ml?97a7fda3-d4e7-456c-a464-7252e3b19a1e ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Pamplemousse blanc 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500398</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a77b12ab2a383b22200d4e0f58d16564215db61ae5a32c606937504ef50a0c09 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience passiflore bio sommeil 200 gélules ]]></title>
<g:id>647ccf62-6d32-4a6e-897b-a1cc3825bc13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-passiflore bio sommeil 200 gélules?647ccf62-6d32-4a6e-897b-a1cc3825bc13 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>À utiliser pour un sommeil sain. Favorise un repos nocturne bon et sain. Aide à induire la relaxation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020169</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ef1d5918d5220a88d6a74c162b73b4e0393b515982876d264cba5c79f68ec9cb ]]></g:image_link>
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
<title><![CDATA[ Pharmascience patchouli bio huile essentielle 5ml ]]></title>
<g:id>ba495314-3071-4cf2-8901-a094f9a20f40</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-patchouli bio huile essentielle 5ml?ba495314-3071-4cf2-8901-a094f9a20f40 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Patchouli 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500404</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d43677322d01afc33a61c981ffa6ebbb2c894072c30d6764f38309af01e01b4d ]]></g:image_link>
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
<title><![CDATA[ Pharmascience petitgrain bigaradier bio huile essentielle 10ml ]]></title>
<g:id>dbd383d8-0a1d-4a04-a372-bf0c38e417c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-petitgrain bigaradier bio huile essentielle 10ml?dbd383d8-0a1d-4a04-a372-bf0c38e417c7 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Petitgrain bigaradier 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500411</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1d874bf234ab8eb50a6809f739be68a9edc4d816fe02745aef236c18512fb15 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience piloselle drainage - élimination 200 gélules ]]></title>
<g:id>d28e1b10-acfe-4f8e-9756-94219af20b35</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-piloselle drainage - élimination 200 gélules?d28e1b10-acfe-4f8e-9756-94219af20b35 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Facilite les fonctions d'élimination de l'organisme. Participe au confort urinaire dépuratif stimulant l'élimination de l'eau et des toxines.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020183</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8ea07a2bc5a708057a3546b79d870c2fdd889eefcbecf3fc5a4544880759b73b ]]></g:image_link>
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
<title><![CDATA[ Pharmascience pin sylvestre bio huile essentielle 10ml ]]></title>
<g:id>e57e7c11-6c02-4208-b35a-f841a88e4fff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-pin sylvestre bio huile essentielle 10ml?e57e7c11-6c02-4208-b35a-f841a88e4fff ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pin sylvestre 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500428</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff689ea1f0afa7347d55634f163a06c207d8b9319257918959ea4c7faaffe0ab ]]></g:image_link>
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
<title><![CDATA[ Pharmascience pissenlit bio drainage - urinaire 200 gélules ]]></title>
<g:id>dbe46fba-57cc-41e8-8584-b92824f23053</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-pissenlit bio drainage - urinaire 200 gélules?dbe46fba-57cc-41e8-8584-b92824f23053 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aide au maintien de la fonction des voies urinaires. Favorise le fonctionnement hépatique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020190</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f538cba2f083c34f2d5c7a50602508a2cc4218d03a71b9a6588bd95b9bccacd1 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience plantes draineur 200 gélules ]]></title>
<g:id>d6b46b27-49c6-4343-935c-9a730a6cd086</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-plantes draineur 200 gélules?d6b46b27-49c6-4343-935c-9a730a6cd086 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Favorise les fonctions d’élimination de l’organisme.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020343</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/500361ce26d1f2d8885f56ccd3d96ee2790b9e1eb9f2778036ee8f554543a205 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience prêle bio articulations 200 gélules ]]></title>
<g:id>544790b0-b310-4f73-b5c8-70a551c04a08</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-prêle bio articulations 200 gélules?544790b0-b310-4f73-b5c8-70a551c04a08 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>A utiliser pour maintenir les articulations souples. La silice contenue dans la prêle aide à maintenir les cheveux, les ongles et la peau dans des conditions optimales.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020206</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4432c47579319972873af6bc8fb8f9da8a39dd7490aac1bf1cc8944cc26228f1 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience queues de cerise 200 gélules ]]></title>
<g:id>cfdcb374-3592-4fe0-8366-4017f058b644</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-queues de cerise 200 gélules?cfdcb374-3592-4fe0-8366-4017f058b644 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Traditionnellement utilisé pour faciliter les fonctions d'élimination de l'organisme et pour sa contribution aux fonctions d'élimination urinaires normales.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400019774</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4713fccfab70fca47a86b700bd7a93a093abf795c6eac552a6d5f1469ae14e1b ]]></g:image_link>
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
<title><![CDATA[ Pharmascience radis noir bio 200 gélules ]]></title>
<g:id>ca0a86dd-6f3d-414e-9572-e5b538018e8b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-radis noir bio 200 gélules?ca0a86dd-6f3d-414e-9572-e5b538018e8b ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Favorise l'élimination des toxines et des déchets. Aide à l'équilibre de l'organisme.</p>
<p>Le calcium contribue au fonctionnement normal des enzymes digestives.</p>
<p></p>
<p><br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020213</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34b0ea40adef33d5d697e2d9775b4c92a45e23ad1508abb6c336bef014f15f57 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience reine des prés bio confort articulaire 200 gélules ]]></title>
<g:id>4bd3c761-4c56-4eb7-9d81-626dd29071d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-reine des prés bio confort articulaire 200 gélules?4bd3c761-4c56-4eb7-9d81-626dd29071d3 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soutient la flexibilité des articulations. Draine les articulations. Utilisé pour faciliter les fonctions d'élimination de l'organisme.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020220</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba242321a012ec439cd8c33d6a5de40871fbbd7ddcbdef14a60ba5239bb8c033 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience romarin 1,8 cinéole  huile essentielle 10ml ]]></title>
<g:id>1cb3050d-9ac3-4106-9d2b-cb1a38bb744a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-romarin 1,8 cinéole  huile essentielle 10ml?1cb3050d-9ac3-4106-9d2b-cb1a38bb744a ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle de romarin 1.8 cinéole 100% bio, pure et naturelle est obtenue par distillation à la vapeur d'eau. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500442</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6cff5254491b60ab2669c5c676e60d664752834ce0d58a1e34f296d8c3d40066 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pharmascience sarriette des montagnes huile essentielle 2ml ]]></title>
<g:id>938828f4-5c73-413f-9282-f9c79a13c97f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-sarriette des montagnes huile essentielle 2ml?938828f4-5c73-413f-9282-f9c79a13c97f ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle de sariette des montagnes 100% bio, pure et naturelle est obtenue par distillation à la vapeur d'eau. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500480</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/130f6e9673f8ac449751ee88114a0db92ac423d8626204ba870792edb474baf3 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience sauge bio digestion 200 gélules ]]></title>
<g:id>a369ca7e-2b2a-48ee-9583-8efa68e1f300</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-sauge bio digestion 200 gélules?a369ca7e-2b2a-48ee-9583-8efa68e1f300 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aide à favoriser la digestion. Contribue au fonctionnement normal du tube intestinal. Favorise le bien-être de la femme.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020244</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6458b0bc03b84ecf2098524e19931bddbf0ebc7ffe1b2cd4a8d7f19e4942cd8d ]]></g:image_link>
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
<title><![CDATA[ Pharmascience sauge sclarée huile essentielle 5ml ]]></title>
<g:id>825dbf25-6173-4024-8989-80c79d4f32e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-sauge sclarée huile essentielle 5ml?825dbf25-6173-4024-8989-80c79d4f32e8 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle de sauge sclarée 100% bio, pure et naturelle est obtenue par distillation à la vapeur d'eau. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500497</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f8f8d0636120796e1f1aaec4f5f036ffeb693117b43b25d9cd529c2575b9be1e ]]></g:image_link>
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
<title><![CDATA[ Pharmascience spiruline bio tonus-vitalité 200 comprimés ]]></title>
<g:id>57355a5f-a8e1-4965-a614-619de25eb69a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-spiruline bio tonus-vitalité 200 comprimés?57355a5f-a8e1-4965-a614-619de25eb69a ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aide à améliorer le tonus et la vitalité. Aide en cas de fatigue. Aide à se sentir plus énergique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020251</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/057ee01909cbae254c522ecdac1fa03f455faa9f39c9d44ff04e2541cf17b786 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience spiruline vitamine C tonus 200 gélules ]]></title>
<g:id>a596cccf-258c-4d1e-91cd-50aca29a794d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-spiruline vitamine c tonus 200 gélules?a596cccf-258c-4d1e-91cd-50aca29a794d ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aide à améliorer le tonus et la vitalité. Aide en cas de fatigue. Aide à se sentir plus énergique.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020336</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3205d2f2d4b2f721f46919f679e789f9927176b33289e7077df09804af3ac12d ]]></g:image_link>
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
<title><![CDATA[ Pharmascience tea tree huile essentielle bio 10ml ]]></title>
<g:id>cd6fd621-a341-48fd-ab9d-e3b077142536</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-tea tree huile essentielle bio 10ml?cd6fd621-a341-48fd-ab9d-e3b077142536 ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle de tea tree 100% bio, pure et naturelle est obtenue par distillation à la vapeur d'eau. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500503</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7e3d601db2bb573c0e06961ec0d519eec5ae0d4d70facc8bc18adb68ccf0b1ba ]]></g:image_link>
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
<title><![CDATA[ Pharmascience thym à linalol bio huile essentielle 5ml ]]></title>
<g:id>c2bb7b17-2c62-4291-8619-75814700e12e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-thym à linalol bio huile essentielle 5ml?c2bb7b17-2c62-4291-8619-75814700e12e ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Thym à linalol  100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500527</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2f033892f0d50bceb7391ec9c2649131e848f63af8f26393e5e0a84df2599e6 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience thym à thymol bio huile essentielle 5ml ]]></title>
<g:id>35afcfef-e409-456b-ac48-174aee6bcb0f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-thym à thymol bio huile essentielle 5ml?35afcfef-e409-456b-ac48-174aee6bcb0f ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Thym à thymol 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500510</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/111fdcf0d11002809bdc9bbb6cbdd46829c95e14de3ae353d820eb961171e840 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience thé vert bio minceur 200 gélules ]]></title>
<g:id>1f99ce38-14e2-4835-9cd5-c2b4f7ea0c33</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-thé vert bio minceur 200 gélules?1f99ce38-14e2-4835-9cd5-c2b4f7ea0c33 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Reconnu pour favoriser l'élimination rénale de l’eau. Aide à mincir en complément de mesures diététiques. Contribue à l'oxydation des graisses.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020268</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5349a9dbf7b1c9324af28d70a4e6a90da1fc6c88a8bd00f9414ce1371db16abe ]]></g:image_link>
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
<title><![CDATA[ Pharmascience valériane bio relaxation 200 gélules ]]></title>
<g:id>d638760f-cd2b-44dc-a362-2783970e6e44</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-valériane bio relaxation 200 gélules?d638760f-cd2b-44dc-a362-2783970e6e44 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aide à favoriser la relaxation et le bien-être mental. Aide à s'endormir. Aide à maintenir un sommeil naturel.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020275</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f3fc7d4b6e437c1164d5c666fa9f9efa910183255c6c5344934e854a098aceaa ]]></g:image_link>
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
<title><![CDATA[ Pharmascience vigne rouge jambe légères 200 gélules ]]></title>
<g:id>387d2b4f-2363-4308-909d-c4842e706dd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-vigne rouge jambe légères 200 gélules?387d2b4f-2363-4308-909d-c4842e706dd7 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aide à maintenir de bonnes fonctions jambes/veines. Défense naturelle contre les radicaux libres.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020282</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6fed06ce7d7d0f46799b692f7e1b5794ab12f2675d2d1abc6bcb6d0f72f4c203 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience vigne rouge vitamine C circulation 200 gélules ]]></title>
<g:id>5b739a11-87a5-43d0-a74a-dba921a58de3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-vigne rouge vitamine c circulation 200 gélules?5b739a11-87a5-43d0-a74a-dba921a58de3 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vitamine C contribue à la formation normale de collagène pour assurer le fonctionnement normal des vaisseaux sanguins.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3535400020312</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ccb8d72cdcdccf502bd249deea496139947e3c8f5d415fd59e8a1aa803729f5a ]]></g:image_link>
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
<title><![CDATA[ Pharmascience ylang ylang complète bio huile essentielle 10ml ]]></title>
<g:id>b54410d9-e8c0-49ed-abdf-0896bddfde24</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-ylang ylang complète bio huile essentielle 10ml?b54410d9-e8c0-49ed-abdf-0896bddfde24 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ylan ylang 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500541</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a45dea3e24059d750714fa5e408f7d322f5c73d2e57b0e20d27a4ff142677879 ]]></g:image_link>
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
<title><![CDATA[ Pharmascience épinette noire bio huile essentielle 5ml ]]></title>
<g:id>b338f4f3-08c4-43c3-b51b-c28815983995</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pharmascience-pinette noire bio huile essentielle 5ml?b338f4f3-08c4-43c3-b51b-c28815983995 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Epinette noire 100% bio huile essentielle, pure et naturelle est obtenue par distillation à la vapeur d'eau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701215500138</g:gtin>
<g:brand><![CDATA[ PHARMASCIENCE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94364eec279d403c1f9be0b633e744787457e04e3e38ec6cf6953e564ee5a742 ]]></g:image_link>
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
<title><![CDATA[ Photoderm Pediatrics  Mineral SPF50+ 50g ]]></title>
<g:id>c460c018-90cb-465c-8df3-b52755e895bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/photoderm-pediatrics  mineral spf50+ 50g?c460c018-90cb-465c-8df3-b52755e895bf ]]></link>
<g:price><![CDATA[ 1040.00 EUR ]]></g:price>
<description><![CDATA[ <p>Photoderm Pediatrics Mineral SPF50+ est le résultat de l’expertise de Bioderma en biologie de la peau mise à profit pour répondre aux besoins spécifiques de la peau des bébés dès la naissance.</p>
<p>La recherche avancée de Bioderma a développé la SUN BARRIER TECHNOLOGY : conçue pour aider à préserver le capital soleil de leur peau délicate exposée au soleil lors des expositions inévitables.</p>
<p>Cette technologie combine des filtres UV et de la vitamine E, antioxydant naturellement présent ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701129807309</g:gtin>
<g:brand><![CDATA[ BIODERMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c3e81400d0ea212dc0d71b69dc819e1836138934a74354c49532a57909925f9 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > SOINS VISAGE ET CORPS > SOLAIRES > Dermocosmétique ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phylarm 10ml 16 unidoses stériles ]]></title>
<g:id>04267579-13be-42bc-baa2-28b2d9bbb76a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phylarm-10ml 16 unidoses stériles?04267579-13be-42bc-baa2-28b2d9bbb76a ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ Unidoses opthalmiques de 10ml, stériles, isotoniques et sans conservateur destinées aux traitements symptomatiques des pathologies de la surface oculair. La solution isotonique est sans conservateur, elle élimine les impuretés situés au niveau de la surface de l?eil qui dérangent (poussières, petites infections, allergènes,...). Son pH de 7,4 permet de bien hydrater l?eil afin d'activer le lysozyme des larmes par son action iso-osmolaire (335mOsm/kg). Pratique par son format unidose, PhyLarm per ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700288600042</g:gtin>
<g:brand><![CDATA[ LCA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c7d665a3d003b43a0d15bb394b8f2d16b1ff875d7bde0e6eda387d7f150b71b ]]></g:image_link>
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
<title><![CDATA[ Physiodose filtres pour mouche bébé 20 filtres + 2 embouts offerts ]]></title>
<g:id>34038b37-4600-4142-92c5-4c9106e2745a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiodose-filtres pour mouche bébé 20 filtres + 2 embouts offerts?34038b37-4600-4142-92c5-4c9106e2745a ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les filtres jetables sont spécialement adaptés aux mouche bébés de Physiodose. Equipés d'une languette permettant de les changer facilement et de façon hygiènique, ils permettent une aspiration performante du mucus de bébé pour un mouchage optimal.</p>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646066931</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/54fecf49bfb03ca41675c701347aef89271a3cc280ac3336c9c675b398064d8e ]]></g:image_link>
<g:product_type><![CDATA[ MOUCHE BEBE - EMBOUT - FILTRE - AUTRE ACCESSOIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Physiodose sérum physiologique 40 doses 5ml ]]></title>
<g:id>57b162d8-d583-4cdd-867e-9163d418e91e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiodose-sérum physiologique 40 doses 5ml?57b162d8-d583-4cdd-867e-9163d418e91e ]]></link>
<g:price><![CDATA[ 199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Physiodose sérum physiologique est conseillé chez le nourrisson, l’enfant et l’adulte :</p>
<p>- Pour l’hygiène nasale et oculaire</p>
<p>- Pour le rinçage auriculaire</p>
<p>- Pour le lavage des plaies</p>
<p>- Comme solvant pour inhalation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646266638</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ec7a95714161ad59cc0bdbc6d6b398b38b2f04a3cc962e700e477f186cff5c5 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS BEBE - ENFANT > Bébé > HYGIÈNE NASALE > Premiers Soins ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Physioflor 30 Gélules ]]></title>
<g:id>e349973c-e4e6-4e9d-bafe-301882f90b2a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physioflor-30 gélules?e349973c-e4e6-4e9d-bafe-301882f90b2a ]]></link>
<g:price><![CDATA[ 1445.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Physioflor 30 Gélules est un complément alimentaire qui apporte par voie orale une souche microbiotique brevetée de Lactobacillus Crispatus, espèce naturellement présente dans une flore vaginale. Il est conditionné en gélules gastro-résistantes.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700399100110</g:gtin>
<g:brand><![CDATA[ IPRAD SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/562c0e3a5fb4da6cca1f2e615230c46fb09bfcc8c40c77800d3bf157117bcb89 ]]></g:image_link>
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
<title><![CDATA[ Physioflor Flash 10Gélules+10 Cprs ]]></title>
<g:id>b47863bb-6ee1-4661-812d-c1151f5d3c28</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physioflor-flash 10gélules+10 cprs?b47863bb-6ee1-4661-812d-c1151f5d3c28 ]]></link>
<g:price><![CDATA[ 1020.00 EUR ]]></g:price>
<description><![CDATA[ <p>La queue de cerise contribue à soutenir les fonctions d'élimination urinaire<br />Contient canneberge, queue de cerise, microbiotique lactobacillus rhamnosus et D-mannose<br />Voie orale<br />Complément alimentaire<br />10 gélules + 10 comprimés<br />Poids net: 32g</p>
<p>Complément alimentaire avec action « Flash » permettant de soulager les symptômes liés à l’inconfort urinaire chez la femme. Formule complète :  Canneberge, Queue de cerises, D-mannose et Lactobacillus rhamnosus</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700399101070</g:gtin>
<g:brand><![CDATA[ IPRAD SANTE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cbd117b8457834ca59e1e6cc00f89006b6539b2d08e379867bcd1e05938ccdc9 ]]></g:image_link>
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
<title><![CDATA[ Physiolac 1 Lait 0 - 6 mois 800G ]]></title>
<g:id>ac830482-2f53-4736-83bd-c28c5dd810de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-1 lait 0 - 6 mois 800g?ac830482-2f53-4736-83bd-c28c5dd810de ]]></link>
<g:price><![CDATA[ 1640.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Physiolac lait 1er âge&nbsp;</strong>est un lait pour nourrissons utilisable dès la naissance, ou en relais de l'allaitement. Il convient pour les bébés âgés de 0 à 6 mois. Il est formulé avec du lait écrémé qui provient de vaches françaises. Il est fabriqué en Vendée.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646125331</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c5895b3f9f32bbd7578289c86030e9a7e0939bdb4d50503dd8b91594e714500 ]]></g:image_link>
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
<title><![CDATA[ Physiolac 2 Lait 6 -12 mois 800G ]]></title>
<g:id>eedf7fcc-d74b-435d-ac16-994d6dd0651d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-2 lait 6 -12 mois 800g?eedf7fcc-d74b-435d-ac16-994d6dd0651d ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lait de suite en poudre pour nourrissons de 6 à 12 mois.</p><p>Les Laboratoires Physiolac proposent des laits :<br>• spécialement développés et validés par des experts en nutrition infantile,<br>• répondant aux besoins nutritionnels spécifiques des bébés*,<br>• à base de lait écrémé 100% français,<br>• fabriqués en France</p><p><strong>Physiolac 2</strong> contient notamment :<br>• du <strong>DHA</strong>* (oméga 3),<br>• des fibres GOS et FOS,<br>• du bisglycinate de fer assimilable,<br>• du ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646125348</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03be566b084c8d9ad200243ddf49a367165ea4be35ff4279a10dfc76112f9fc8 ]]></g:image_link>
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
<title><![CDATA[ Physiolac Bio 1 Lait 0 - 6 mois 800g ]]></title>
<g:id>8ad3f459-8213-4c75-a5f9-ee3e4e21a185</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio 1 lait 0 - 6 mois 800g?8ad3f459-8213-4c75-a5f9-ee3e4e21a185 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Physiolac Bio 1er age est un lait adapté à l'alimentation des bébés de 0 à 6 mois.</p>
<p>Peut etre donné dès la naissance quand l'allaitement maternel n'est pas possible ou en relais de l'allaitement.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646124167</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2f57c5319bdd5ddb509e0b417466a21408ba36321ed5bfbf48f25c1d7e78de8 ]]></g:image_link>
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
<title><![CDATA[ Physiolac Bio 1er âge 0 - 6 mois formule épaissie 800g ]]></title>
<g:id>23028fcf-0dac-4b5f-9fb1-30ca38d9b025</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio 1er âge 0 - 6 mois formule épaissie 800g?23028fcf-0dac-4b5f-9fb1-30ca38d9b025 ]]></link>
<g:price><![CDATA[ 2115.00 EUR ]]></g:price>
<description><![CDATA[ <p>Physiolac BIO des Laboratoires Gilbert, propose des produits :</p>
<p>• spécialement développés et validés par des experts en nutrition infantile,<br />• répondant aux besoins nutritionnels spécifiques des bébés*,<br />• certifiés agriculture biologique avec un lait écrémé 100% français,<br />• fabriqués en France,<br />• formulés sans huile de palme.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646124488</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9e0ae278873bdcd93e5ea51573c0ca36d6c80117b4daf1656120af201676692 ]]></g:image_link>
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
<title><![CDATA[ Physiolac Bio 2 Lait 6 - 12 mois 800g ]]></title>
<g:id>7be632d6-427c-46df-9430-a7d57d7c99f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio 2 lait 6 - 12 mois 800g?7be632d6-427c-46df-9430-a7d57d7c99f5 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait de suite Physiolac Bio 2 est formulé sans huile de palme pour le respect de l’environnement. Il apporte les nutriments nécessaires** au développement de votre enfant dont le Fer qui participe à son développement cognitif. Physiolac Bio 2 est un lait se rapprochant du lait maternel, pour un relais de l’allaitement en douceur et dans le respect de l’environnement.</p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646124174</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ccf8186dd7b79662ab4813189f4d19045be644eb90898fb2ad21ae3ee3473b9 ]]></g:image_link>
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
<title><![CDATA[ Physiolac Bio Anti-Régurgitations AR 1 Lait 0 - 6 Mois 800g ]]></title>
<g:id>217dfce9-642e-4ac0-95b1-6cd01ad2152a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio anti-régurgitations ar 1 lait 0 - 6 mois 800g?217dfce9-642e-4ac0-95b1-6cd01ad2152a ]]></link>
<g:price><![CDATA[ 1775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Grâce à sa formule qui contient de l'amidon de maïs prégélatinisé bio et de la caroube, Physiolac Bio AR 1 aide à réduire les régurgitations.</p>
<p></p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646123634</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e27878604b1e5d5a8743172e471b339cc06b84be302ca1e4d0ae99aa40f63da ]]></g:image_link>
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
<title><![CDATA[ Physiolac Bio Anti-Régurgitations AR 2 Lait 6 - 12 mois 800 g ]]></title>
<g:id>e79b03de-6010-4b51-8b62-2e2ecf8f9eaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio anti-régurgitations ar 2 lait 6 - 12 mois 800 g?e79b03de-6010-4b51-8b62-2e2ecf8f9eaa ]]></link>
<g:price><![CDATA[ 1699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Physiolac Bio Anti-Régurgitations 2 de 6 à 12 Mois 800 g est un lait en poudre qui a été développé par des professonnels de la nutrition infantile afin de répondre aux besoins nutritionnels et à l'immaturité digestive du nourrisson. Sa formule contient de l'amidon de Maîs prégélatinisé Bio et de la Caroube. Il permet de réduire efficacement les régurgitations de votre enfant après son biberon. Ce lait respecte le bien-être de votre enfant car il est issu de l'Agriculture Biologique et apporte ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646123641</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/607f53357f0d41ca18a915d856f6b3ade1128d34c490eeed971b027e93427c19 ]]></g:image_link>
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
<title><![CDATA[ Physiolac Bio Croissance 3 Lait dès 10 mois 800g ]]></title>
<g:id>9ee90036-79c4-49f6-8155-91d43c87eaaa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio croissance 3 lait dès 10 mois 800g?9ee90036-79c4-49f6-8155-91d43c87eaaa ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait Physiolac Bio Croissance 3 a été développé afin de répondre aux besoins nutritionnels de votre enfant de 1 à 3 ans, il ne contient pas d'huile de palme afin de respecter l'environnement. Il est un excellent lait relais des laits infantiles 2ème âge, il est pratique et facile à conserver.<br /><br />Ce lait apporte tous les nutriments nécessaires au développement de votre enfant :<br />- Le fer, le calcium et 11 autres minéraux<br />- 13 vitamines<br /><br />Le calcium étant nécessaire ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646124181</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4effa9d7e3caa040b7878062d0b8b5514b61b7c7cde0fdd1173fc941ca9e2309 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES > LAIT DE CROISSANCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Physiolac Bio Formule Epaissie 2 Lait 6 - 12 mois 800g ]]></title>
<g:id>f7943c54-2950-42f6-9473-12ff3243a738</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-bio formule epaissie 2 lait 6 - 12 mois 800g?f7943c54-2950-42f6-9473-12ff3243a738 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <div class="preparation-steps">
<div class="preparation-step">
<div class="content-preparation-step">
<div>
<p>Physiolac BIO des Laboratoires Gilbert, propose des produits :</p>
<p>• spécialement développés et validés par des <span>experts en nutrition infantile</span>,<br />• répondant aux <span>besoins nutritionnels spécifiques</span> des bébés*,<br />• <span>certifiés agriculture biologique</span> avec un lait écrémé 100% français,<br />• <span>fabriqués en France</span>,<br />• formulés <spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646124495</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c2f294f14dca52000ce84c42648c7ed4ba6c1ff9995c0183832b8699ea52d00 ]]></g:image_link>
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
<title><![CDATA[ Physiolac Croissance 3 Lait dès 12 mois  800 g ]]></title>
<g:id>a9eeadc6-7e6a-4ded-8de8-5a14b6681488</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-croissance 3 lait dès 12 mois  800 g?a9eeadc6-7e6a-4ded-8de8-5a14b6681488 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Physiolac Croissance 3 de 1 à 3 ans 800 g est un lait spécialement développé pour les enfants de 1 à 3 ans et validé par des experts en nutrition infantile. Il répond aux besoins nutritionnels spécifiques des bébés. Il contient : </p>
<p>- du DHA (oméga 3),</p>
<p>- des fibres GOS et FOS,</p>
<p>- du bisglycinate de fer assimilable,</p>
<p>- de la vitamine D nécessaire au maintien d'une bonne croissance et d'un bon développement osseux</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646124556</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/003b4dd9b6cceea9a93826f7cd80e94ef19e6c44fde277d51c2bafac31f8970b ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES > LAIT DE CROISSANCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Physiolac Diarrhées Lait 0 - 12 mois 400g ]]></title>
<g:id>13fc537c-a1d9-44fd-b12c-ea3aa8d2af55</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiolac-diarrhées lait 0 - 12 mois 400g?13fc537c-a1d9-44fd-b12c-ea3aa8d2af55 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le lait en poudre Episodes diarrhéiques Physiolac est spécialement dédié aux nourrissons ayant des</span><strong> diarrhées</strong><span> banales, aiguës ou des</span><strong> gastro-entérites</strong><span>. Il est également conçu pour les cas d'</span><strong>intolérance au lactose.</strong><span> Il convient au bébé de </span><strong>0 à 12 mois.</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646123085</g:gtin>
<g:brand><![CDATA[ PHYSIOLAC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/287ad21417468669704f8e388544575e0489438a3f8644debd151b9d45b7fd7c ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES > LAIT SPECIFIQUE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Physiomer 20 Filtres Protecteurs ]]></title>
<g:id>290a63c9-1b62-4dc2-a21c-7ae63212b49b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiomer-20 filtres protecteurs?290a63c9-1b62-4dc2-a21c-7ae63212b49b ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les filtres protecteurs du Mouche Bébé Physiomer assurent une utilisation hygiénique en bloquant le mucus aspiré dans la partie avant du dispositif.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401097813356</g:gtin>
<g:brand><![CDATA[ SANOFI ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d3109fbd503f2ac21a2932105b3d6008ea53bb10d16bd85eb0067dc0d18dc4dc ]]></g:image_link>
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
<title><![CDATA[ Physiomer Mouche Bébé ]]></title>
<g:id>925c6bb4-4483-44bf-97be-88bd1c235827</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiomer-mouche bébé?925c6bb4-4483-44bf-97be-88bd1c235827 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Mouche Bébé Physiomer est spécialement destiné aux nourrissons à partir de 1 mois. Sans Bisphénol A et sans PVC, il peut être utilisé à volonté. Le Mouche Bébé Physiomer soulage le nez encombré de bébé de manière douce et efficace. Il élimine les mucosités en excès, et permet à votre enfant de respirer plus librement, facilitant ainsi son alimentation. Réponse parfaitement naturelle à l'encombrement du nez, le Mouche bébé Physiomer peut être utilisé chaque fois que cela est nécessaire. Con ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401097813417</g:gtin>
<g:brand><![CDATA[ SANOFI ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5a56ca0e4ccc91206dad85eaaeb26ba36ce9426a9136fb583bb17ef7dc3e1faf ]]></g:image_link>
<g:product_type><![CDATA[ MOUCHE BEBE - EMBOUT - FILTRE - AUTRE ACCESSOIRE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Physiosalt Réhydratation Orale 10x10g ]]></title>
<g:id>acf280f0-282c-453c-8d06-587ad861db1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/physiosalt-réhydratation orale 10x10g?acf280f0-282c-453c-8d06-587ad861db1b ]]></link>
<g:price><![CDATA[ 620.00 EUR ]]></g:price>
<description><![CDATA[ <p>Physiosalt est indiqué pour les besoins nutritionnels des nourrissons et enfants en bas âge en cas de déshydratation lors de diarrhées, gastroentérites.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3518646025662</g:gtin>
<g:brand><![CDATA[ GILBERT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff8e37ee6724eb898908b19ada37894fc7ee24a72117a391337a2f5a3d7fcbcf ]]></g:image_link>
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
<title><![CDATA[ Phytalgic Chondro C+ Expert Articulations 60 comprimés ]]></title>
<g:id>5489c045-6bd7-439d-b9aa-5d6eec9a5b4f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytalgic-chondro c+ expert articulations 60 comprimés?5489c045-6bd7-439d-b9aa-5d6eec9a5b4f ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description" id="description">
<p>Phytalgic Chondro C+ Expert Articulations a été développé pour contribuer au confort articulaire, grâce au bambou et à une meilleure flexibilité et mobilité .</p>
<p></p>
</div>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701132600867</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/497fbcc775038d15a2267a3d6e1297dacb6c71726adcdc7eadb87dff1cd8d1ae ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytalgic Oméga C+ Confort Articulations 60 capsules ]]></title>
<g:id>695a6b45-e144-4ac1-81cc-ec9d729422e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytalgic-oméga c+ confort articulations 60 capsules?695a6b45-e144-4ac1-81cc-ec9d729422e2 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Phytalgic Oméga C+ Confort Articulations agit sur la souplesse et le fonctionnement articulaire. Il contribue à une ossature normale et aide à la flexibilé et à la mobilité.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701132600874</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f4b0ad96ff9f5a6bb1d61538e4c4fadf88a834b7cb5ea624677552d8228f4d62 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto  Blond Après Shampoing Sublimateur 175ml ]]></title>
<g:id>2a176fb2-9bb9-4148-a5ea-1cbc667a65e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-blond après shampoing sublimateur 175ml?2a176fb2-9bb9-4148-a5ea-1cbc667a65e0 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ewa-rteLine">L’après-shampooing BLOND démêle facilement, nourrit et <span>sublime l’éclat des cheveux blonds</span> de toute la famille* dès la première utilisation. Les cheveux sont plus doux et plus brillants. Au cœur de la formule, du <span>vinaigre de cidre</span> lisse les écailles de la fibre pour <span>révéler un blond éclatant</span> et un <span>extrait de carthame</span> pour protéger la fibre des agressions extérieures. Grâce à une <span>extraction de mauve blanche</span>,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923532</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b18bdaa378fc3478999d8cb9493ea9126a5006ee61a38791165a19639cb2014b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto 7 Crème de Jour Nourrisante 50ml ]]></title>
<g:id>471fb85d-5a1d-4728-b94c-916cf22bb986</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-7 crème de jour nourrisante 50ml?471fb85d-5a1d-4728-b94c-916cf22bb986 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème de jour iconique PHYTO 7 nourrit intensément et quotidiennement la fibre sans l'alourdir, discipline et facilite le coiffage. Au cœur de la formule, 7 extraits de plantes apportent nutrition et douceur aux cheveux secs. Les cheveux sont doux, souples et incroyablement brillants.</p>
<p><span>La mythique </span>crème de jour hydratante aux 7 plantes pour cheveux secs, dont la création remonte à plus de quarante ans ! 7 plantes traditionnelles sélectionnées pour leurs vertus hydratante ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916961</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6e039fdab76f750c42ff749078b5da034c1c0253301f76d49d59a80d15f8dbf0 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Anti-Démangeaisons Shampoinf Dermo Apaisant 250ml ]]></title>
<g:id>346963e1-4ff4-4e09-93aa-118ff4a443d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-anti-démangeaisons shampoinf dermo apaisant 250ml?346963e1-4ff4-4e09-93aa-118ff4a443d3 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ewa-rteLine"><span>Dès la première utilisation</span>, le Shampooing DERMO-APAISANT calme les démangeaisons et les rougeurs du cuir chevelu sensible, irrité et sec. Au fur et à mesure des applications, les sensations d’irritations et d’inconfort sont apaisées. Au cœur de la formule, le bisabolol d’origine fermentée calme les démangeaisons et réduit les rougeurs. Grâce à une extraction de romarin, le cuir chevelu est protégé contre les agressions extérieures et rééquilibré.</div>
<div ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923624</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79612a7a9b935bce353f880a42e44d80ae2741271ff70cdaccc7e00e5612d329 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Anti-Pellicules shampoing Dermo Traitant 250ml ]]></title>
<g:id>fd2e7330-bf6d-4bd4-bb80-b9277d972ef6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-anti-pellicules shampoing dermo traitant 250ml?fd2e7330-bf6d-4bd4-bb80-b9277d972ef6 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923631</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5cb72186adc1b565e4dbad80ba5edb423838c851d2bccc7c0b56fd7d153db3d1 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Après-Shampoing Hydratation Boucles 175 ml ]]></title>
<g:id>2f5336e0-5c92-47a3-8fc6-7589a279803f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-après-shampoing hydratation boucles 175 ml?2f5336e0-5c92-47a3-8fc6-7589a279803f ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'Après-shampooing Hydratation Boucles BOUCLES est spécialement conçu pour répondre aux besoins des cheveux ondulés et bouclés. Sa formule unique démêle instantanément, hydrate et nourrit les boucles, pour des cheveux plus souples et soyeux. Enrichi en Hydra Curl Complex, il gaine la fibre capillaire et redéfinit les boucles, tandis que le beurre d'illipé offre une nutrition intense. De plus, l'extraction de mauve blanche apporte une brillance exceptionnelle, laissant les cheveux deux fois pl ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923495</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74f2d584d352e102aa0cf0e518e0e27d658da8968c49c9144f3c09cc86b3ec23 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Blond Shampoing Illuminant 250ml ]]></title>
<g:id>98daf034-6977-4f44-99c7-7f6df3a2c6e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-blond shampoing illuminant 250ml?98daf034-6977-4f44-99c7-7f6df3a2c6e0 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ewa-rteLine">Le shampooing BLOND respecte le cuir chevelu et <span>nettoie en douceur</span> les cheveux blonds de toute la famille, dès 3 ans. Les cheveux sont plus souples et plus brillants. Au cœur de la formule, du <span>vinaigre de cidre</span> lisse les écailles de la fibre pour révéler <span>un blond éclatant</span>. Grâce à une <span>extraction de mauve blanche</span>, les cheveux sont deux fois plus brillants*.</div>
<div class="ewa-rteLine"><span>Sans silicones, sans tensio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923075</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d642fbac83347caeeadc65ac5d95aa45d893c62f8dd69179879506d864ee0c37 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Blond Spray Lumièere Eclaircissant 150ml ]]></title>
<g:id>6c2cbbc6-2a35-46a9-8225-c7f5f68eaefb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-blond spray lumièere eclaircissant 150ml?6c2cbbc6-2a35-46a9-8225-c7f5f68eaefb ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ewa-rteLine">Le spray BLOND qui <span>éclaircit progressivement la chevelure jusqu’à 2 tons</span> pour apporter des reflets ensoleillés aux cheveux blonds clairs à foncés. Au cœur de la formule, du <span>vinaigre de cidre</span> lisse les écailles de la fibre pour révéler <span>un blond éclatant</span>, de <span>l’eau oxygénée</span> qui éclaircit progressivement les cheveux et de la <span>glycérine végétale</span> qui adoucit la fibre capillaire.</div>
<div class="ewa-rteLine"><spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923525</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1df26f45fc95dae53b7a48fdb69f777bfd24f25633126067f29f73f539dc3b5e ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Boucles Gel Crème 150ml ]]></title>
<g:id>9639fb5c-888f-48c5-bfbe-b0f099ac5e39</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-boucles gel crème 150ml?9639fb5c-888f-48c5-bfbe-b0f099ac5e39 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>le gel-Crème Définition Boucles de Phyto</strong> définit les ondulations et les boucles sans effet carton.</p><p>Le complexe Hydra Curl, à base de sucre fermenté, <strong>gaine les cheveux</strong> et la gomme de Tara enveloppe la fibre capillaire et <strong>la protège contre l'humidité</strong>.&nbsp;</p><p>L'extrait de Mauve Blanche offre <strong>brillance</strong> et <strong>douceur</strong> aux cheveux.</p><p>Les boucles et les ondulations sont définies et <strong>protégés des fr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923501</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c70de5f2425f9d70947cfa1d2057257f7eee2d3c8cb8f44404f21ffd4f607fb5 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Boucles Spray Reveil Boucles 150ml ]]></title>
<g:id>ca1dde0c-5314-42d2-8b5c-f0c129a01780</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-boucles spray reveil boucles 150ml?ca1dde0c-5314-42d2-8b5c-f0c129a01780 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le Spray Réveil Boucles de Phyto</strong> s'utilise entre deux shampooings pour raviver les boucles et les ondulations.</p><p>Sa formule à base d'huile biotechnologique <strong>réduit les frisottis</strong> et prévient leur apparition.</p><p>Le complexe Hydra Curl à base de sucre fermenté <strong>gaine la fibre capillaire</strong> afin de redéfinir les boucles.</p><p>L'extrait de Mauve Blanche offre <strong>deux fois plus de brillance</strong> aux cheveux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923518</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4862fb6b7412cd3f6f8f3965d4df424a956571b12df63308afefea45584971f9 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Coloration Permanente 5,5 Marron Acajou ]]></title>
<g:id>f5e8dec9-d9b7-4115-af5e-fe45d6cd85f8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-coloration permanente 5,5 marron acajou?f5e8dec9-d9b7-4115-af5e-fe45d6cd85f8 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<p class="preamble"><span>Phyto Color Coloration Permanente des laboratoires Phytosolba, à prix discount dans votre pharmacie en ligne, la coloration sans ammoniaque pour une couleur intense, naturelle et une brillance inégalable. Couleur 5.5 Châtain Clair Acajou</span></p>
<p>Depuis 40 ans, les laboratoires PHYTOSOLBA travaillent en étroite collaboration avec des scientifiques pour développer de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436911522</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/59dd94e72b06abd44a13badb6f624f8e272c898a4377aa5f4a908d98bbe27778 ]]></g:image_link>
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
<title><![CDATA[ Phyto Coloration Permanente 8,1 Blond Clair Cendré ]]></title>
<g:id>37540aaa-d608-453d-8d5f-b8b99b4d2c0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-coloration permanente 8,1 blond clair cendré?37540aaa-d608-453d-8d5f-b8b99b4d2c0b ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div class="mod-text">
<div class="mod clearfix">
<p>Phyto Color Coloration Permanente, de part sa haute concentration en pigments végétaux dû à un mélange de cinq plantes tinctoriales, offre une couleur aux nuances profondes. Une tenue parfaite et couvre 100% des cheveux blancs en une seule application. Sans ammoniaque, votre cheveu et votre cuir chevelu est respecté et protégé.</p>
<p></p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436911539</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fab1d408a5b768dbceb177be0906473c420788eb8efe20f443533f5c1d1c10d7 ]]></g:image_link>
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
<title><![CDATA[ Phyto Couleur Après-Shampooing Raviveur d'Éclat 175ml ]]></title>
<g:id>ee2532a9-531a-4b01-883d-d6ac643d5e37</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-couleur après-shampooing raviveur d'Éclat 175ml?ee2532a9-531a-4b01-883d-d6ac643d5e37 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Pour les cheveux colorés et méchés</li>
<li><span>Résultats : </span>Les cheveux sont brillants et doux</li>
<li><span>Les ingrédients : </span>Pousses de Tournesol, peptides de Riz, huile de Karanja</li>
<li><span>On aime : </span>Sa formule à base d'ingrédients d'origine naturelle</li>
</ul><p> </p>
<p><span>L'Après-Shampooing Raviveur d'Éclat COULEUR de Phyto </span>démêle, hydrate et ravive l’éclat des cheveux colorés dès la 1ère utilisation.</p>
<p id="MJGDQO ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915735</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b4ef43f2173f89dd3019283dfeae5731ed5939beefde9bf7f7d83ec4b2bba684 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Couleur Masque Prolongateur de Couleur 200ml ]]></title>
<g:id>56affbf5-d6cf-46fd-9848-c0061be7eb01</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-couleur masque prolongateur de couleur 200ml?56affbf5-d6cf-46fd-9848-c0061be7eb01 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Pour les cheveux colorés et méchés</li>
<li><span>Résultats : </span>Les cheveux sont nourris et l'éclat de couleur prolongé</li>
<li><span>Les actifs : </span>Mauve blanche, peptides de Riz, pousses de Tournesol</li>
<li><span>Le + : </span>Sa formule à base d'ingrédients d'origine naturelle</li>
</ul><p> </p>
<p><span>Le Masque Prolongatuer de Couleur de Phyto </span>prolonge durablement l’éclat et l’intensité de la couleur tout en réparant les cheveux sensibili ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915773</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/518d15ce2a92ee0596d059c7d26ee4830c4eb0e793e08656bef8c7eb36ed98d7 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Couleur Shampoing Anti-Degorgement 500ml ]]></title>
<g:id>58583ac9-e828-4432-a5f9-a6e396e0a87c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-couleur shampoing anti-degorgement 500ml?58583ac9-e828-4432-a5f9-a6e396e0a87c ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing COULEUR nettoie en douceur pour <span>préserver l’intensité et l’éclat de la couleur.</span> Les cheveux sont doux et la couleur est toujours aussi intense et lumineuse <span>après 12 shampooings</span>*. Au cœur de la formule, un complexe de peptides de riz qui <span>limite le dégorgement</span> des pigments <span>jusqu'à 12 shampooings</span>*. Des tanins de tara et jeunes pousses de tournesol antioxydantes apportent <span>protection</span> à la couleur. Une extraction de mauv ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436920340</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3b3376c978e2b4dbc7687cf1cb932625dc0a29fc004165db0fe8dc566e776bf3 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Couleur Shampooing Anti-Dégorgement 250 ml ]]></title>
<g:id>24c35f1f-14c6-401a-abff-29da73a602a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-couleur shampooing anti-dégorgement 250 ml?24c35f1f-14c6-401a-abff-29da73a602a4 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto Couleur Shampooing Anti-Dégorgement 250 ml est un soin pour cheveux colorés et méchés. Il nettoie en douceur pour préserver l'intensité et l'éclat de la couleur.</p>
<ul><li>Le complexe à base de peptides de riz retient les pigments au cœur de la fibre pour protéger la couleur.</li>
<li>L'extraction de mauve blanche apporte de la brillance à la fibre.</li>
</ul><p>Sans tensio-actifs sulfatés. Sans silicones.</p>
<p>90% d'ingrédients d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915759</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb0ea62c2adec1b52d794ed729b54c9436e949de0a3cc783adedd7df51c3f523 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Crème Riche Boucles Intenses 250ml ]]></title>
<g:id>1e186da4-d823-4051-b230-811a598a8ee8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-crème riche boucles intenses 250ml?1e186da4-d823-4051-b230-811a598a8ee8 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>La Crème Riche Définition Boucles Intense de Phyto</strong> est un soin spécialement conçu pour les cheveux frisés et crépus (3B à 4C).</p><p>Sa formule renferme une synergie d'actifs afin de <strong>redonner brillance et souplesse aux boucles.</strong></p><p>Elle<strong> définit la forme naturelle des boucles</strong> grâce au <strong>complexe [Nutri Curl]</strong>, à base d'un dérivé de sucres végétaux.</p><p>Les <strong>beurres de karité et de Cacao nourrissent en profondeur les ch ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436930516</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/442272fb47c9310c28f93f3a4af8ff24f2336439824d6c575c0cadf5eef19658 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Douceur Après Shampoing 175ml ]]></title>
<g:id>28fb9606-db5f-4dc3-a21f-9df8954ac37f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-douceur après shampoing 175ml?28fb9606-db5f-4dc3-a21f-9df8954ac37f ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'après-shampooing DOUCEUR démêle efficacement les cheveux de toute la famille*. Les cheveux sont plus doux, souples et brillants. Au cœur de la formule, du lait d'avoine apporte de la douceur à la fibre. Une extraction de mauve blanche rend les cheveux deux fois plus brillants.</p>
<p>Sans silicones, sans tensio-actifs sulfatés, sans colorants, sans PEG.</p>
<p><small>*à partir de 3 ans</small></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436913113</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c965dae22b36b8eb191690b80e86edcaf6b5c45d50e43d9d1376574fd80c3c05 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Douceur Lait Démêlant Express 150ml ]]></title>
<g:id>579c2dea-c16f-4e07-9892-46168ab444ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-douceur lait démêlant express 150ml?579c2dea-c16f-4e07-9892-46168ab444ec ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Tous les types de cheveux</li>
<li><span>Résultats :</span> Les cheveux sont disciplinés et démêlés</li>
<li><span>Les actifs :</span> Extraits huileux de Romarin et de Calendula</li>
<li><span>On aime :</span> Sa formule adaptée à toute la famille</li>
</ul><p> </p>
<p><span>Le Lait Démêlant sans rinçage Douceur de Phyto </span>démêle les cheveux en douceur et sans effort.</p>
<p>Il <span>facilite le coiffage</span> des cheveux mouillés et secs de toute la famill ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436913151</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a7959cda2253b46a488130ae94c58348419b6ddf26aad78c9825de4aa34e0c64 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Douceur Shampoing Sec 75ml ]]></title>
<g:id>eee2a993-3d87-41f7-9b52-044d3e9dd653</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-douceur shampoing sec 75ml?eee2a993-3d87-41f7-9b52-044d3e9dd653 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436913199</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5cc7811691f8e1ae38df7c541e8f5871152d46733c776adbc0a54dfc0f237f80 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Gelée Anti-Frizz Boucles 250ml ]]></title>
<g:id>aaf712bf-4871-48e5-ad92-d896489f4917</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-gelée anti-frizz boucles 250ml?aaf712bf-4871-48e5-ad92-d896489f4917 ]]></link>
<g:price><![CDATA[ 1595.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>La Gelée Anti-Frizz Boucles Intense de Phyto</strong> est un soin spécialement conçu pour les cheveux ondulés, bouclés, frisés et crépus (2A à 4C).</p><p>Sa formule renferme une synergie d'actifs afin de <strong>fixer les boucles toute la journée.</strong></p><p>Elle<strong> définit la forme naturelle des boucles</strong> grâce au <strong>complexe [Nutri Curl]</strong>, à base d'un dérivé de sucres végétaux.</p><p>L'Aloe Vera<strong> aide à maintenir l'hydratation</strong> au coeur de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436930523</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9fcd659687ad0facd39fd777280d721e8b8833051d97d823dcfd15a96ac97127 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Gommage Lavant Purifiant Cuir Chevelu ]]></title>
<g:id>8ec491c5-41c9-4160-8d33-f50ac7d92ff0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-gommage lavant purifiant cuir chevelu?8ec491c5-41c9-4160-8d33-f50ac7d92ff0 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce <strong>soin capillaire</strong> à la texture granitée aux cristaux de sel marin convient à tous les types de cuir chevelu. Il <strong>exfolie</strong> et libère des impuretés pour maintenir un cuir chevelu sain et des cheveux en pleine santé. Sa texture fond dans la chevelure et se transforme en mousse légère pour rafraîchir le cuir chevelu et lutter contre l'<strong>excès de sébum</strong>. Le <strong>gommage pour cuir chevelu</strong> Phyto est un soin 2 en 1 permettant d'exfolier le cu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436913359</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2145e7721115cb6f75ce7b231d0524d8be75fca43658d0fd3122ecc4db0ae48b ]]></g:image_link>
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
<title><![CDATA[ Phyto Kids Shampooing Douche Magique 400ml ]]></title>
<g:id>5206139d-1c1e-4b56-bc4f-2d0b0a46333f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-kids shampooing douche magique 400ml?5206139d-1c1e-4b56-bc4f-2d0b0a46333f ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le Shampooing Douche Magique Kids Boucles Intense de Phyto </strong>est un soin 2-en-1 adapté aux enfants dès 3 ans.</p><p>Sa formule renferme de <strong>l'huile de Karité et du miel d'Acacia</strong> pour <strong>nourrir</strong> <strong>la peau et les cheveux</strong> tout en lissant les écailles de la fibre capillaire.&nbsp;</p><p>Comme par magie, les cheveux sont parfaitement <strong>démêlés</strong> et <strong>soyeux.</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436930837</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d7935e4830eafd25ae9c7ee9fd4cc294f4b742c595a37ef54319ac6b389b6de7 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Kids Spray Démêlant Magique 200ml ]]></title>
<g:id>ea81eb6d-8723-4292-afe2-ca7f26a31984</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-kids spray démêlant magique 200ml?ea81eb6d-8723-4292-afe2-ca7f26a31984 ]]></link>
<g:price><![CDATA[ 1130.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le Spray Démêlant Magique Kids Boucles Intense de Phyto </strong>est un soin adapté aux enfants dès 3 ans.</p><p>Sa formule est enrichie en <strong>huile de Karité et en miel d'Acacia</strong> pour <strong>nourrir</strong> <strong>la les cheveux</strong> tout en <strong>lissant</strong> les écailles de la fibre capillaire.&nbsp;</p><p>Ce spray capillaire <strong>nourrit, démêle</strong> et <strong>discipline</strong> les cheveux frisés et crépus en un seul geste.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436930783</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38a0a0541aa2c1d53e67df8b9ee868e7c431fa61966a44718d3fab6a78064092 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Masque Boucles Intenses 250ml ]]></title>
<g:id>740e4444-f1d6-45a5-b87d-85f1417b9cfc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-masque boucles intenses 250ml?740e4444-f1d6-45a5-b87d-85f1417b9cfc ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le Masque Nutrition Boucles Intense de Phyto</strong> est un soin spécialement conçu pour les cheveux frisés et crépus (3B à 4C).</p><p>Sa formule est enrichie en une synergie d'actifs afin de <strong>nourrir intensément la fibre capillaire.</strong></p><p>Ce maque <strong>définit la forme naturelle des boucles</strong> et <strong>gaine</strong> les cheveux grâce au <strong>complexe [Nutri Curl]</strong>, à base d'un dérivé de sucres végétaux.</p><p><strong>Le beurre de Karité nourrit ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436930530</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/29e0a43ba06f65ef5d0628419171fdf6da8099a76d281210c2b32ad46443e31e ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Masque Réparation Intense 200 ml ]]></title>
<g:id>1a923abf-337b-4746-b538-a8def125dc48</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-masque réparation intense 200 ml?1a923abf-337b-4746-b538-a8def125dc48 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le masque RÉPARATION répare les longueurs en profondeur, il restaure et consolide instantanément les cheveux abîmés et cassants. Au cœur de la formule, un nouveau complexe biomimétique "Kératine A18+" issue de la recherche végétale : une kératine composée de 18 acides aminés boostés qui agit comme un combleur intra-fibre pour recréer de la matière au cœur du cheveu et restaurer la fibre endommagée. Issue d’Avoine noir et Lupin cette kératine végétale superchargée en acides aminés garantie la  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916930</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61727a8d652c2258e43eb706151d4446d4603504d3ed81b5328a461e0a711918 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Masque Ultra Nourrissant 200ml ]]></title>
<g:id>18c7f6f1-9f77-4143-8431-495a97a1d87a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-masque ultra nourrissant 200ml?18c7f6f1-9f77-4143-8431-495a97a1d87a ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le masque NUTRITION nourrit intensément sans alourdir la fibre. Gorgés de soin, les cheveux sont sublimés, souples et doux. Au cœur de la formule, du beurre de Jojoba relipide, nourrit et protège les cheveux secs. Grâce à une extraction de mauve blanche, les cheveux sont deux fois plus brillants.​</p>
<div>
<p><span>Sans silicones, sans colorants.</span></p>
<p><span> </span></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916787</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1428ac813aeb7bd53e455319103fcb25562313e577ae652f9eb428b243a8234 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Nutrition Après-Shampoing 175ml ]]></title>
<g:id>2c8e1218-3274-4c93-a5d1-bb6c3d02f8d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-nutrition après-shampoing 175ml?2c8e1218-3274-4c93-a5d1-bb6c3d02f8d5 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'après-shampooing NUTRITION démêle et nourrit sans alourdir la fibre, pour des cheveux plus souples, doux et brillants. Au cœur de la formule, de l'huile de Jojoba apporte les lipides dont les cheveux secs ont besoin et les protège du dessèchement. Grâce à une extraction de mauve blanche, les cheveux sont deux fois plus brillants.</p>
<div>
<p><span>Sans silicones, sans colorants.</span></p>
<p><span> </span></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916800</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c8c91c9448997ef1815f624d734b18f7df34478d7294e53dc84cfc468d5a743 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Nutrition Shampoing 250ml ]]></title>
<g:id>bc997190-8616-49f5-b4cf-42dd5b76f748</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-nutrition shampoing 250ml?bc997190-8616-49f5-b4cf-42dd5b76f748 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing NUTRITION nettoie délicatement les cheveux <span>sans les alourdir</span>. Les cheveux sont plus souples et plus doux. Au cœur de la formule, de l'huile de Jojoba apporte les lipides dont les cheveux secs ont besoin et les <span>protège du dessèchement</span>. Grâce à une extraction de mauve blanche, les cheveux sont <span>deux fois plus brillants</span>.​</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916794</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ff53a82ba3c3f036cf1ba1d1ca96f8251179f62fe5e6e3e7477eef3a032f5451 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Nutrition Shampooing Nourrissant Cheveux Secs 500ml ]]></title>
<g:id>454bbe20-c1c8-46ef-8a8a-75d32ef76021</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-nutrition shampooing nourrissant cheveux secs 500ml?454bbe20-c1c8-46ef-8a8a-75d32ef76021 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nettoie délicatement et nourrit sans alourdir. Les cheveux sont plus souples et plus doux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436924041</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4f262bf4ee3bce5b0f06d426c37857350949023244106d3acecac62cc45816ea ]]></g:image_link>
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
<title><![CDATA[ Phyto Phytocyane Complement Alimentaire Anti Chute 84 Caps ]]></title>
<g:id>abd3d356-807e-4e03-909c-b9ca24bb6b0a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytocyane complement alimentaire anti chute 84 caps?abd3d356-807e-4e03-909c-b9ca24bb6b0a ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Freinez la chute de vos cheveux avec le nouveau </span><span>PHYTOCYANE complément alimentaire antichute</span><span>. </span><span>Issue de la recherche antichute PHTYO,  </span><span>sa </span><span>formule puissante aux résultats cliniques exceptionnels </span><span>agit contre les </span><span>3 causes biologiques</span><span> responsables de la chute progressive et sévère.</span><span>- Les </span><span>PHYTOSTEROLS DE PIN</span><span>, associés au </span><span>ZINC,</span><span> a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436926397</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3163b59db3d3820e4d3a68627e47121502932330c8492e37386a1e90f9ea959b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Phytocyane Shampoing Revigorant 100 ml ]]></title>
<g:id>f056dd2c-1b8f-4672-a566-b4acf9a7b195</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytocyane shampoing revigorant 100 ml?f056dd2c-1b8f-4672-a566-b4acf9a7b195 ]]></link>
<g:price><![CDATA[ 400.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto Phytocyane Shampoing Revigorant 250 ml est un shampoing idéal pour préparer le cuir chevelu avant un traitement antichute. Il nettoie en douceur et redonne vitalité et volume aux cheveux.</p><ul><li><p>Une extraction de romarin permet d'activer l'eau dans le shampoing pour protéger le cuir chevelu.</p></li><li><p>L'extrait de ginkgo biloba est connu pour ses propriétés revitalisantes.</p></li></ul><p>81% des ingrédients sont d'origine naturelle.</p><p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436917401</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e35977c5257c6dbe49fc03a5b10fcdb1621a8fb0290cee44c24a9d8127616075 ]]></g:image_link>
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
<title><![CDATA[ Phyto Phytocyane Shampooing Revigorant 250ml ]]></title>
<g:id>84cfe1dd-6352-4f80-ae08-c3355c354bb9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytocyane shampooing revigorant 250ml?84cfe1dd-6352-4f80-ae08-c3355c354bb9 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing PHYTOCYANE est idéal pour préparer le cuir chevelu avant un traitement antichute. Il nettoie en douceur et redonne vitalité et volume aux cheveux. Les cheveux sont de meilleure qualité, plus forts et plus volumineux. Au cœur de la formule, un extrait de ginkgo biloba connu pour ses propriétés tonifiantes et revitalisantes aide à redonner de la vitalité aux cheveux. Des pro-vitamines B6 et B5 apportent force et beauté à la fibre capillaire. Une extraction de romarin bio favorise  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915544</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5b8c64ced706fce32f3883199d23da18371be1bffcff53073ca74df33298f06c ]]></g:image_link>
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
<title><![CDATA[ Phyto Phytolaque Laque Végétale Fixation Médium à Forte 100ml ]]></title>
<g:id>83a4c6ab-9e6e-4ce2-8927-5864c2e47929</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytolaque laque végétale fixation médium à forte 100ml?83a4c6ab-9e6e-4ce2-8927-5864c2e47929 ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fixation médium. Un amour de laque invisible à la gomme laque pour coiffer toutes vos envies. Sans gaz propulseur. Fixation médium. Un amour de laque invisible à la gomme laque pour coiffer toutes vos envies. Sans gaz propulseur.</p>
<ul><li>La gomme laque est une résine naturelle qui fixe la chevelure sans l’alourdir, même par temps humide, en lui apportant une brillance incomparable.</li>
<li>Une laque pour contrôler et discipliner tout en finesse les cheveux sans coller ni cartonner en ass ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221009449</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3009952cd7a534ab65ace4b6ebac9f8b904950b7653227758eac7e3c231b00b7 ]]></g:image_link>
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
<title><![CDATA[ Phyto Phytolaque Végétale Fixation Souple 100ml ]]></title>
<g:id>48804859-5992-4f55-960b-2ee331d6ef8d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytolaque végétale fixation souple 100ml?48804859-5992-4f55-960b-2ee331d6ef8d ]]></link>
<g:price><![CDATA[ 770.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Cette laque sans gaz propulseur assure une fixation naturelle longue durée aux cheveux sensibilisés et sublime la coiffure, </span><span>sans coller ni cartonner.</span><span> La protéine de soie protège la fibre capillaire et offre </span><span>un fini doux et soyeux</span><span> à la chevelure.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221009418</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6375447c317aca9df396cb6db743197343756fc7478b3cdb7d846bb034209011 ]]></g:image_link>
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
<title><![CDATA[ Phyto Plage L’Icône Huile Protectrice 100ml ]]></title>
<g:id>3578f518-9137-4d44-803d-83325f158bef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-plage l’icône huile protectrice 100ml?3578f518-9137-4d44-803d-83325f158bef ]]></link>
<g:price><![CDATA[ 1260.00 EUR ]]></g:price>
<description><![CDATA[ <p>Plus qu’une protection, l’huile PLAGE est un soin embellisseur qui <strong>nourrit la fibre</strong> capillaire et apporte une brillance <strong>effet « wet look ».</strong> Sa texture légère et son parfum solaire addictif enveloppent la fibre. Les cheveux sont <strong>protégés contre les effets néfastes des UV, sel, chlore et sable et la couleur est préservée.</strong> Au cœur de la formule, l’extrait de calendula <strong>nourrit et adoucit</strong> la fibre capillaire et l’huile de karanja  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923037</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/686f9194d59b7e438adab87e56504043f1ce80a28947074dc2d6a2b7e7f6fffb ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Plage Shampooing Après-Soleil Réhydratant 100ml ]]></title>
<g:id>f17dabf6-1d4c-423b-a7c4-310a9fffe2ea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-plage shampooing après-soleil réhydratant 100ml?f17dabf6-1d4c-423b-a7c4-310a9fffe2ea ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing PLAGE <strong>réhydrate et répare</strong> les cheveux fragilisés par <strong>le soleil, la mer ou la piscine.</strong> Sa mousse onctueuse<strong> nettoie en douceur et élimine les résidus</strong> de protection solaire, sel, sable et chlore. Les cheveux sont plus <strong>doux et légers.</strong> Au cœur de la formule, l’extrait de calendula <strong>nourrit et adoucit</strong> la fibre capillaire. Grâce à une extraction de mauve blanche, les cheveux sont <strong>deux fois plus  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923051</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/defcb3b309ac460189e3d896f58d1516f7aff65a85ea3ec43560f76fe51a8556 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Plage Shampooing Après-Soleil Réhydratant 250ml ]]></title>
<g:id>f486c1ae-f5c2-49ad-a19b-2963da71b251</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-plage shampooing après-soleil réhydratant 250ml?f486c1ae-f5c2-49ad-a19b-2963da71b251 ]]></link>
<g:price><![CDATA[ 980.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing PLAGE <strong>réhydrate et répare</strong> les cheveux fragilisés par<strong> le soleil, la mer ou la piscine.</strong> Sa mousse onctueuse<strong> nettoie en douceur et élimine les résidus</strong> de protection solaire, sel, sable et chlore. Les cheveux sont plus <strong>doux et légers.</strong> Au cœur de la formule, l’extrait de calendula<strong> nourrit et adoucit</strong> la fibre capillaire. Grâce à une extraction de mauve blanche, les cheveux sont<strong> deux fois plus  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923044</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2767d154c36a4a3af17f5f27dd3922acad9cb1a11d7277707f3805af03c6478e ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Recharge Shampoing Douceur 750ml ]]></title>
<g:id>e07d191c-9905-464c-886c-3773a987144b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-recharge shampoing douceur 750ml?e07d191c-9905-464c-886c-3773a987144b ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing DOUCEUR nettoie les cheveux de toute la famille* dans le plus grand respect du cuir chevelu. Les cheveux sont plus doux, souples et brillants. Au cœur de la formule, un complexe de prébiotiques aide à préserver l'équilibre du cuir chevelu et le maintenir en bonne santé au fil des shampooings. Du lait d'avoine apporte de la douceur à la fibre. Une extraction de mauve blanche rend les cheveux deux fois plus brillants.<br><strong>Sans silicones, sans tensio-actifs sulfatés, sans co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436924102</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/478ad6998d0a8582785626e9c6c8d6df1b7e4c58817da002b73b50f2da334d35 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Recharge Shampoing Nourrissant 750ml ]]></title>
<g:id>f89c4213-8ce4-4acd-a89e-083027050d3f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-recharge shampoing nourrissant 750ml?f89c4213-8ce4-4acd-a89e-083027050d3f ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing NUTRITION nettoie délicatement les cheveux <strong>sans les alourdir</strong>. Les cheveux sont plus souples et plus doux. Au cœur de la formule, de l'huile de Jojoba apporte les lipides dont les cheveux secs ont besoin et les <strong>protège du dessèchement</strong>. Grâce à une extraction de mauve blanche, les cheveux sont <strong>deux fois plus brillants</strong>.​<br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436924133</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c5e26ef07c73410b33604b81d4d410f3663bca3a4616a826fb4a8c493ce676ea ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Recharge Shampoing Volume 750ml ]]></title>
<g:id>38bf28fe-faf2-4974-a166-3087226f5fc4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-recharge shampoing volume 750ml?38bf28fe-faf2-4974-a166-3087226f5fc4 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing VOLUME nettoie en légèreté et laisse les cheveux en manque d'épaisseur avec <strong>plus de volume</strong>, sans les alourdir et sans effet gras. Au cœur de la formule, un extrait de nénuphar apporte <strong>corps et volume</strong> aux cheveux fins <strong>dès la racine</strong>. Grâce à une extraction de mauve blanche bio, les cheveux sont deux fois plus brillants.<br><strong>Sans silicones, sans tensio-actifs sulfatés, sans colorants.</strong></p><p><br></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436924126</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/81270bf9cc89dd9d3dc3d17ca905db3d25eb70f655bac60a5a303ea84380b0f8 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Recharge Shampooing Couleur 750 ml ]]></title>
<g:id>0fd5c4d3-2610-48ed-81fa-97e32482067c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-recharge shampooing couleur 750 ml?0fd5c4d3-2610-48ed-81fa-97e32482067c ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing COULEUR nettoie en douceur pour préserver l’intensité et l’éclat de la couleur. Les cheveux sont doux et la couleur est toujours aussi intense et lumineuse après 12 shampooings. Au cœur de la formule, un complexe de peptides de riz qui limite le dégorgement des pigments jusqu'à 12 shampooings*. Des tanins de tara et jeunes pousses de tournesol antioxydantes apportent protection à la couleur. Une extraction de mauve blanche rend les cheveux deux fois plus brillants.<br>Sans silic ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436924119</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/199dba1a0809f626caf3fce1a4ece17154ef71772620e4d40d15dd4675caf1ff ]]></g:image_link>
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
<title><![CDATA[ Phyto Réparation Shampoing 250 ml ]]></title>
<g:id>dce02443-4dab-43a5-9f22-d833dfd170eb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-réparation shampoing 250 ml?dce02443-4dab-43a5-9f22-d833dfd170eb ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing RÉPARATION nettoie en douceur et répare la matière des cheveux abîmés et cassants. Au cœur de la formule, un nouveau complexe biomimétique "Kératine A18+" issue de la recherche végétale : une kératine composée de 18 acides aminés boostés qui agit comme un combleur intra-fibre pour recréer de la matière au cœur du cheveu et restaurer la fibre endommagée. Issue d’Avoine noir et Lupin cette kératine végétale superchargée en acides aminés garantie la résistance d’un cheveu naturelle ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916947</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fb2d22426e0e4db99e56bd17dfb9dda54fa5e9d6785bfa2d013f6ce311cdb2df ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Réparation Spray Protecteur 150ml ]]></title>
<g:id>c7e9e0f8-3373-47bb-8a73-cf991e8d0498</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-réparation spray protecteur 150ml?c7e9e0f8-3373-47bb-8a73-cf991e8d0498 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le spray RÉPARATION protège la fibre de la casse lors du séchage jusqu'à 230°c. Il répare et lisse les frisottis. Au cœur de la formule, un nouveau complexe biomimétique "Kératine A18+" issue de la recherche végétale : une kératine composée de 18 acides aminés boostés qui agit comme un combleur intra-fibre pour recréer de la matière au cœur du cheveu et restaurer la fibre endommagée. Issue d’Avoine noir et Lupin cette kératine végétale superchargée en acides aminés garantie la résistance d’un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916954</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ba98812ead92223078b52540d2c2523115586575110c49a7103ef4f71f5a83df ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Sebum Control Shampoing Séboréducteur 250ml ]]></title>
<g:id>797f42fb-4de6-4ea9-a774-005f17df6ebc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-sebum control shampoing séboréducteur 250ml?797f42fb-4de6-4ea9-a774-005f17df6ebc ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <div class="ewa-rteLine">Le Shampooing SÉBORÉDUCTEUR <span>élimine les impuretés </span>et <span>réduit</span> l’excès de sébum du cuir chevelu gras. Il procure une sensation de fraîcheur immédiate et <span>permet d’espacer les shampooings</span> dans le temps. Le cuir chevelu est <span>purifié</span>, les cheveux <span>regraissent moins vite</span> et retrouvent légèreté et souplesse. Au cœur de la formule, la sarcosine cible et limite la production excessive de sébum. Grâce à une extraction de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923617</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f0b01a8f4443c241e11086e662374493087815cb3ab72136ac363f06df5e2aab ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Shampoing Douceur 250ml ]]></title>
<g:id>7d49211c-4543-45fc-be62-c041f143349f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-shampoing douceur 250ml?7d49211c-4543-45fc-be62-c041f143349f ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing DOUCEUR nettoie les cheveux de toute la famille* dans le plus grand respect du cuir chevelu. Les cheveux sont plus doux, souples et brillants. Au cœur de la formule, un complexe de prébiotiques aide à préserver l'équilibre du cuir chevelu et le maintenir en bonne santé au fil des shampooings. Du lait d'avoine apporte de la douceur à la fibre. Une extraction de mauve blanche rend les cheveux deux fois plus brillants.</p>
<p>Sans silicones, sans tensio-actifs sulfatés, sans colora ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436913236</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/548e82ccd5e0288fc185087860b9d4c459a2edf4a897c554a30238c34b9fed27 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Shampoing Hydra Boucles 250ml ]]></title>
<g:id>4b3bb822-521f-4d4b-89c0-37cae05b4e21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-shampoing hydra boucles 250ml?4b3bb822-521f-4d4b-89c0-37cae05b4e21 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le Shampooing Hydratation Boucles de Phyto</strong> est un soin spécialement conçu pour les cheveux ondulés et bouclés.</p><p>Sa formule renferme de l'<strong>extrait de Mauve Blanche et un complexe à base de sucre fermenté</strong>, le Complexe Hydra Curl.</p><p>Ce complexe aide à <strong>redéfinir les boucles ainsi que les ondulations</strong>, tandis que l'extraction de Mauve Blanche offre de la <strong>brillance</strong> à la fibre capillaire.</p><p>Les cheveux sont <strong>doux,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436923488</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d204a93ec29571a767deff2b2f6c3b799becb677bad120e4ad47d0a87a0d5a41 ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Shampooing Boucles Intenses 250ml ]]></title>
<g:id>169be832-7142-44e4-a48a-8871ce37a08d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-shampooing boucles intenses 250ml?169be832-7142-44e4-a48a-8871ce37a08d ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Le Shampooing Nutrition Boucles Intense de Phyto</strong> est un soin spécialement conçu pour les cheveux frisés et crépus (3B à 4C).</p><p>Sa formule renferme une synergie d'actifs afin de <strong>redonner brillance et souplesse aux boucles.</strong></p><p>Elle<strong> définit la forme naturelle des boucles</strong> grâce au <strong>complexe [Nutri Curl]</strong>, à base d'un dérivé de sucres végétaux.</p><p>L'huile d'Amande Douce <strong>nourrit intensément les cheveux et renforce l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436930547</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/23287a27cb33256f99c8cd97734b593c3ac2bc1266cb5adb17d54d3111695cda ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Shampooing Douceur 500ml ]]></title>
<g:id>708b8457-cafb-4667-8ec9-4e6ef9bbb724</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-shampooing douceur 500ml?708b8457-cafb-4667-8ec9-4e6ef9bbb724 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Tous les types de cheveux et toute la famille</li>
<li><span>Résultats :</span> Les cheveux sont propres, doux et brillants</li>
<li><span>Les ingrédients :</span> Prébiotiques, lait d'Avoine</li>
<li><span>Le + :</span> Sa formule qui convient aux cheveux de toute la famille</li>
</ul><p> </p>
<p><span>Le Shampooing Douceur de Phyto </span>nettoie les cheveux en douceur sans les agresser.</p>
<p id="GIFYACD">Sa formule à base de <span>Prébiotiques </span>respecte ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436920333</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/db28d7b7ffc74ce664bacd51174b874caebc69c00196d8779d3fc862771c24ee ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Specific Kids Shampoing Douche Démêlant Magique 400 ml ]]></title>
<g:id>6adcfd35-eb62-48e5-b03d-4a0726cd8837</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-specific kids shampoing douche démêlant magique 400 ml?6adcfd35-eb62-48e5-b03d-4a0726cd8837 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto Specific Kids Shampoing Douche Démêlant Magique 400 ml est un shampoing douche démêlant magique 2en1. Enrichi en actifs végétaux et naturels, en huile de Karité, de Miel d'Acacia, d'Extraits de fleurs d'Oranger, de Cerisier et d'extraction d'Hibiscus. Ce shampoing douche 2en1 nettoie en douceur les cheveux et la peau fragile des enfants.</p>
<p>Fini les nœuds ! Il démêle instantanément et délicatement les cheveux difficiles à coiffer. Comme par magie, les cheveux sont tout doux et facil ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338220100864</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c68365130f1e13de01b52fcde025adc776cf91ccfc8171a050847d7109accd60 ]]></g:image_link>
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
<title><![CDATA[ Phyto Violet Masque Déjaunissant Réparateur 200 ml ]]></title>
<g:id>0aaf497f-9b49-416e-93a2-a3a81b80fcd1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-violet masque déjaunissant réparateur 200 ml?0aaf497f-9b49-416e-93a2-a3a81b80fcd1 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto Violet Masque Déjaunissant Réparateur 200 ml est un soin aux pigments violets pour cheveux blonds décolorés, gris ou blancs. Il répare et protège les cheveux fragilisés tout en ravivant l'éclat des reflets froids.</p>
<ul><li>Les pigments violets neutralisent les reflets indésirables jaunes et cuivrés.</li>
<li>L'extraction de mauve blanche apporte de la brillance à la fibre.</li>
</ul><p>Sans silicone.</p>
<p>97% d'ingrédients d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915766</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ee2ba4ee9b3ccc185cd2cf6675d8f091aa1c1158243b65b00b9c36093365329a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Violet Shampoing Déjaunissant 250 ml ]]></title>
<g:id>f804379f-d4b0-4cbc-9088-1ee6abfdf45a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-violet shampoing déjaunissant 250 ml?f804379f-d4b0-4cbc-9088-1ee6abfdf45a ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto Violet Shampoing Déjaunissant 250 ml est un soin pour cheveux blonds décolorés, gris ou blancs. Il nettoie en douceur et hydrate la fibre tout en neutralisant les reflets indésirables.</p>
<ul><li>Les pigments violets neutralisent les reflets indésirables jaunes et cuivrés.</li>
<li>L'extraction de mauve blanche apporte de la brillance à la fibre.</li>
</ul><p>Sans tensio-actifs sulfatés. Sans silicones.</p>
<p>90% d'ingrédients d'origine naturelle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915742</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8bac32f269bc061d7127cc648515aa02c62c767f7f1297c1a19677bf9250ce2c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Volume  Après-Shampooing Volumateur 150ml ]]></title>
<g:id>b40295c9-bbea-4b1d-b155-9492be288d19</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-volume  après-shampooing volumateur 150ml?b40295c9-bbea-4b1d-b155-9492be288d19 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Pour les cheveux fins et plats</li>
<li><span>Résultats beauté : </span>Les cheveux sont plus texturés et volumineux</li>
<li><span>Les ingrédients : </span>Extraits de Nénuphar et de Mauve Blanche Bio</li>
<li><span>On aime : </span>Sa formule légère </li>
</ul><p> </p>
<p><span>L'Après-Shampooing Volumateur Volume de Phyto </span>démêle et hydrate les cheveux sans les alourdir.</p>
<p>Enrichi en extrait de Nénuphar, il <span>décolle les racines</span> et <span>t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916176</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62b1f147aa54294cf283caad4414c8690291dd950a262486fb8f04c01f1c65c5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Volume Shampoing Volumateur 250ml ]]></title>
<g:id>abd4d217-5ec8-4a81-8373-b2685173ed02</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-volume shampoing volumateur 250ml?abd4d217-5ec8-4a81-8373-b2685173ed02 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description">Le shampoing qui apporte volume aux cheveux fins.</div>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916183</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0201fe7917830f5d6417edb12eb5a7792b05d832f71d53c6d4fdece0ac07e149 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto Volume Shampoing Volumateur Cheveux Fins 500 ml ]]></title>
<g:id>3421e4b6-76a8-4615-9052-ff7346bfe5b8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-volume shampoing volumateur cheveux fins 500 ml?3421e4b6-76a8-4615-9052-ff7346bfe5b8 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing VOLUME nettoie en légèreté et laisse les cheveux plus volumineux.<br>Au cœur de la formule, un extrait de nénuphar apporte corps et volume aux cheveux dès la racine.<br>Grâce à une extraction de mauve blanche bio, les cheveux sont deux fois plus brillants.<br>Sans silicones, sans tensio-actifs sulfatés, sans colorants, sans PEG.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436920357</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/79a0868245ab3eb6e17c556b43f897b4dd5ba39432bc737bbbcf64f210a03e0f ]]></g:image_link>
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
<title><![CDATA[ Phyto Volume Spray Brushing Volumateur 150ml ]]></title>
<g:id>92981936-49dd-4c73-8757-78a4683f7f3a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-volume spray brushing volumateur 150ml?92981936-49dd-4c73-8757-78a4683f7f3a ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui : </span>Pour les cheveux fins et plats</li>
<li><span>Résultats beauté : </span>Les cheveux sont plus texturés et volumineux</li>
<li><span>Les ingrédients : </span>Extraits de Nénuphar et de Mauve Blanche Bio</li>
<li><span>On aime : </span>Sa texture fine et légère</li>
</ul><p> </p>
<p><span>Le Spray Brushing Volumateur Volume de Phyto </span>est un spray coiffant qui apporte matière et volume aux cheveux fins et plats.</p>
<p>Enrichi en extrait de Nénuphar, il <span>d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916190</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8615d16d7e213164ad17dba7a03682aeb109e5f0ef03be83f30fd02c46ddd1ca ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto phytocolor coloration permanente 4 châtain 112ml ]]></title>
<g:id>b62785af-562e-4d12-86eb-604bb0ff9404</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytocolor coloration permanente 4 châtain 112ml?b62785af-562e-4d12-86eb-604bb0ff9404 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule phytocolor est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.<br />Composition du kit phytocolor :  lait révélateur 5 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002549</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/979ba57154f2fb89b28b42ac34f81ed34f5bd67b07f3c3ff32d9ce9e0a8e3c4e ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phyto phytocolor coloration permanente 5.3 châtain clair 112ml ]]></title>
<g:id>5cd32019-eb8a-4f5e-af29-ae69c32bfbe7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phyto-phytocolor coloration permanente 5.3 châtain clair 112ml?5cd32019-eb8a-4f5e-af29-ae69c32bfbe7 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts coloristes phyto créent la 1ère coloration aux pigments végétaux sans ammoniaque, alliant performance couleur, beauté du cheveu et respect du cuir chevelu.<br />Les nouvelles colorations phytocolor sont des colorations sans ammoniaque, sans ppd (para-phénylènediamine), ni résorcine… leur force unique : la haute concentration en pigments végétaux (jusqu’à 74% suivant les nuances) pour une couleur intense, naturelle à la brillance incomparable. </p>
<p><br />Ces pigments peuvent néa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002600</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fe6fc31427e92a7615381694de9ccf0518e2657d70a4f2f9e2d950301644a2a ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ PhytoColor Coloration Permanente  9.8 Blond Très Clair Beige ]]></title>
<g:id>396fda20-6432-4a9a-b114-6b31eb682cad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-coloration permanente  9.8 blond très clair beige?396fda20-6432-4a9a-b114-6b31eb682cad ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto PhytoColor Coloration Permanente - Coloration : 9.8 Blond Très Clair Beige est une coloration permanente qui respecte le cuir chevelu et la fibre capillaire.</p>
<p>Elle est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets lumineux, et agit comme un boost ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221010575</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c98e1672c170bcba55ac4ef281d7c154c07787c8251918ff8c97bcf75d266c9a ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ PhytoColor Coloration Permanente 10 Blond Extra Clair ]]></title>
<g:id>a467195d-1ce3-4270-a1ae-c04380f66761</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-coloration permanente 10 blond extra clair?a467195d-1ce3-4270-a1ae-c04380f66761 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto PhytoColor Coloration Permanente - Coloration : 10 Blond Extra Clair est une coloration permanente qui respecte le cuir chevelu et la fibre capillaire.</p>
<p>Elle est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets lumineux, et agit comme un booster de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221010599</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5e968e69f539e3eed6ad896630390d5812febeed612f20e7158024f13a9d115 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ PhytoColor Coloration Permanente 9.3 Blond Très Clair Doré ]]></title>
<g:id>de78ae06-2552-43e9-9617-dbf3fbf87f78</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-coloration permanente 9.3 blond très clair doré?de78ae06-2552-43e9-9617-dbf3fbf87f78 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phyto PhytoColor Coloration Permanente - Coloration : 9.3 Blond Très Clair Doré est une coloration permanente qui respecte le cuir chevelu et la fibre capillaire.</p>
<p>Elle est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets lumineux, et agit comme un booste ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221010568</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/41dcfddb7f22924cee8cd6f9dc827cf9319a3ada5e1a8cdf70e2adcfdb5942b1 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ PhytoNormyl 30 Comprimés ]]></title>
<g:id>97e48918-9b44-4539-89b6-04a095199165</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytonormyl-30 comprimés?97e48918-9b44-4539-89b6-04a095199165 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <div class="tab__container tab__container--active properties-tab">
<div class="product-detail__tabs__content">PHYTONORMYL est un complément alimentaire à base de plantes et de mélatonine.</div>
<p></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3585550000849</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2533e81acf49f608aa716a04d395ea334d6f38c596387531744f8a86a149adf ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytobronz 30 Capsules ]]></title>
<g:id>6c3cd3eb-bff4-48a3-b5d6-686bc3a04d42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytobronz-30 capsules?6c3cd3eb-bff4-48a3-b5d6-686bc3a04d42 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Phytobronz 30 Capsules est un complément alimentaire sous forme de capsules à base d'huiles et d'extraits végétaux, de vitamines et minéraux, qui prépare la peau au soleil et la protège.</p>
<p>Le cuivre contribue à la pigmentation de la peau.</p>
<p>Le bêta-carotène est un précurseur de la vitamine A qui maintient une peau en bonne santé.</p>
<p>Le sélénium et la vitamine E, antioxydants, aident à protéger les cellules contre le stress oxydatif.</p>
<p>Les huiles précieuses (argan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401164989694</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3f6da5e5e216bcec70d0c4316b10036f743917ddbdb43df50c49015c0462d476 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytobronz Autobronzant 30 gélules ]]></title>
<g:id>97fbef2f-2f29-484d-9897-825d77147917</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytobronz-autobronzant 30 gélules?97fbef2f-2f29-484d-9897-825d77147917 ]]></link>
<g:price><![CDATA[ 1570.00 EUR ]]></g:price>
<description><![CDATA[ <p>Arkopharma Phytobronz Autobronzant est un complément alimentaire autobronzant qui contribue à activer le hâle naturel de la peau, sans exposition au soleil.<br />Sa formule contient de la vitamine A qui aide à maintenir une peau en bonne santé, du sélénium et de la vitamine E, des antioxydants qui contribuent à protéger les cellules contre le stress oxydatif.<br />Toute l'année, en toute saison, vous avez bonne mine et votre teint est éclatant et lumineux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401354417891</g:gtin>
<g:brand><![CDATA[ ARKOPHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03a5a2e799484047fd5aa72d17ca67fd8257b6ad3eae655d0a9eeec80c986798 ]]></g:image_link>
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
<title><![CDATA[ Phytocolor 1 noir coloration permanente 122ml ]]></title>
<g:id>d87ed149-f55f-4d53-9410-6467e966226c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-1 noir coloration permanente 122ml?d87ed149-f55f-4d53-9410-6467e966226c ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts coloristes PHYTO créent la 1ère coloration aux pigments végétaux sans ammoniaque, alliant performance couleur, beauté du cheveu et respect du cuir chevelu.</p>
<p>Les nouvelles colorations PHYTOCOLOR sont des colorations sans ammoniaque, sans PPD (para-phénylènediamine), ni résorcine… Leur force unique : La haute concentration en pigments végétaux (jusqu’à 74% suivant les nuances) pour une couleur intense, naturelle à la brillance incomparable.</p>
<p>Ces pigments peuvent néanmoin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002501</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/325e3c4ec1d8224efee2c1db4dbda38764e6e7f3159ad6de77a7010fbe836e24 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 3 châtain foncé coloration permanente ]]></title>
<g:id>5918f722-04ae-4ab3-bd55-a091a971039b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-3 châtain foncé coloration permanente?5918f722-04ae-4ab3-bd55-a091a971039b ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002525</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6629ab5d334043e6ef3d6530d91643c536e2f1dde3012bdef3f48f65ae1a6e96 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 4.77 châtain marron profond coloration permanente 112ml ]]></title>
<g:id>b5de7e93-08c3-41eb-86a4-932b5857a698</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-4.77 châtain marron profond coloration permanente 112ml?b5de7e93-08c3-41eb-86a4-932b5857a698 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts coloristes phyto créent la 1ère coloration aux pigments végétaux sans ammoniaque, alliant performance couleur, beauté du cheveu et respect du cuir chevelu.<br />Les nouvelles colorations phytocolor sont des colorations sans ammoniaque, sans ppd (para-phénylènediamine), ni résorcine… leur force unique : la haute concentration en pigments végétaux (jusqu’à 74% suivant les nuances) pour une couleur intense, naturelle à la brillance incomparable. <br />Ces pigments peuvent néanmoins l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002563</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aecf35ca006de9520bb05d71828621de69e3338cf6b9369a09e8560db7f0bc9b ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 5 châtain clair 112ml ]]></title>
<g:id>c4c1cab2-65a1-4c0c-a08c-56d7afbaef69</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-5 châtain clair 112ml?c4c1cab2-65a1-4c0c-a08c-56d7afbaef69 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002587</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/879d6a679faf540a9e81ec1922b050e27cff073e07fff7adb9d761f49c1f33f7 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 5.35 châtain clair chocolat coloration permanente ]]></title>
<g:id>3d7b88f2-7258-4cc9-98fc-25ffff8316f3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-5.35 châtain clair chocolat coloration permanente?3d7b88f2-7258-4cc9-98fc-25ffff8316f3 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts coloristes PHYTO créent la 1ère coloration aux pigments végétaux sans ammoniaque, alliant performance couleur, beauté du cheveu et respect du cuir chevelu.</p>
<p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets lumineux, e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221004567</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2ffa912d3b5d9e4b771c74a897ff71cc4f40b0214d131be4710d1428b2896e1 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 5.7 châtain clair marron coloration permanente ]]></title>
<g:id>399b791b-991b-4a85-8cce-ad8753e62d40</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-5.7 châtain clair marron coloration permanente?399b791b-991b-4a85-8cce-ad8753e62d40 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002624</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9e76ac5e21bc7c42436cbc3b095f511d2c9244a53f0c8df23cc239998810d9a7 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 6 blond foncé coloration permanente ]]></title>
<g:id>c16a006a-65ff-4f8a-94f2-2ccb54fef58d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-6 blond foncé coloration permanente?c16a006a-65ff-4f8a-94f2-2ccb54fef58d ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts coloristes PHYTO créent la 1ère coloration aux pigments végétaux sans ammoniaque, alliant performance couleur, beauté du cheveu et respect du cuir chevelu.</p>
<p>Les nouvelles colorations PHYTOCOLOR sont des colorations sans ammoniaque, sans PPD (para-phénylènediamine), ni résorcine… Leur force unique : La haute concentration en pigments végétaux (jusqu’à 74% suivant les nuances) pour une couleur intense, naturelle à la brillance incomparable.</p>
<p>Ces pigments peuvent néanmoin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002648</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d562ed325764fe22214ea77954b2a9a861ff2268cda1089e43596e9c715224c ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 6.3 blond foncé doré coloration permanente ]]></title>
<g:id>9dba3628-4de7-4bfc-b2bf-2a9080034a42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-6.3 blond foncé doré coloration permanente?9dba3628-4de7-4bfc-b2bf-2a9080034a42 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les experts coloristes PHYTO créent la 1ère coloration aux pigments végétaux sans ammoniaque, alliant performance couleur, beauté du cheveu et respect du cuir chevelu.</p>
<p>Une haute concentration en pigments végétaux pour une coloration toute en nuance<br />Jusqu'à 74% de la base pigmentaire selon la teinte : la garantie d'une couleur intense et nuancée de reflets naturels, profonds et lumineux.</p>
<p>Un duo d'huiles précieuses et actives qui magnifient la couleur : Monoï et Jojoba<br />D ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002662</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8b6de04a5859afa35024511a8cae4002bdbe26c0f68812537c2289ddbf9ab84 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 6.77 marron clair cappuccino coloration permanente ]]></title>
<g:id>eacbe7fb-69a0-42f0-b22b-ba4f5d3ed076</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-6.77 marron clair cappuccino coloration permanente?eacbe7fb-69a0-42f0-b22b-ba4f5d3ed076 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002389</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5f0a04d4d3ceeb222bb485974616a9708d2219291022578eeab1c63a1fe587f0 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 7 blond coloration permanente 112ml ]]></title>
<g:id>38f21dd3-1d9d-4619-8a82-7b25ae294b80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-7 blond coloration permanente 112ml?38f21dd3-1d9d-4619-8a82-7b25ae294b80 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002402</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/397cfe1710140512c8e80c6d33d1302903c07f6ef11aec197f2ef506f3d63d7b ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 7.3 blond doré coloration permanente ]]></title>
<g:id>521ee7c3-a455-44be-8e0f-af3ba696ec56</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-7.3 blond doré coloration permanente?521ee7c3-a455-44be-8e0f-af3ba696ec56 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p></p>
<p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait rév ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002426</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d33d734a9be46d73d10a67ba69500ad9ee0da66f28ce82730608e7451fd00c29 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 7.43 blond cuivré doré coloration permanente ]]></title>
<g:id>881eab02-7280-46dc-a7ae-832f0a8d093f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-7.43 blond cuivré doré coloration permanente?881eab02-7280-46dc-a7ae-832f0a8d093f ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytocolor est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets lumineux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Un duo d'huiles précieuses et actives qui magnifient la coul ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221004604</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/153587b19e993fed2ebe146b5e8e047eec6ddb9f8b4d5ab3348b35c5074674d6 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 8 blond clair coloration permanente 112ml ]]></title>
<g:id>0e20e06f-f62e-4bd3-bdc1-2853325c2c12</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-8 blond clair coloration permanente 112ml?0e20e06f-f62e-4bd3-bdc1-2853325c2c12 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002440</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b9874179a603c61b2c610c06ce887a40843d1e89c8c4067df303c97c3a6da7c ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 8.3 blond clair doré coloration permanente ]]></title>
<g:id>64d3ef83-f7c7-4ec1-bfcf-84829312f39d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-8.3 blond clair doré coloration permanente?64d3ef83-f7c7-4ec1-bfcf-84829312f39d ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002464</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/76c3f1280c4eb7a1a7a1c1d0ed1a33c16d00818ca9646d6c5625887ca1852227 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocolor 9 blond très clair coloration permanente 112ml ]]></title>
<g:id>fe89dc16-4e68-43cf-8a8e-dc472c1ce551</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocolor-9 blond très clair coloration permanente 112ml?fe89dc16-4e68-43cf-8a8e-dc472c1ce551 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule PHYTOCOLOR est enrichie d'un mélange inédit de pigments végétaux issus de cinq plantes tinctoriales sélectionnées pour leur pouvoir pigmentant supérieur. Leur haute concentration au sein de la base pigmentaire, jusqu'à 74% selon la teinte, assure une couleur intense, naturelle et nuancée de reflets luminieux, et agit comme un booster de brillance. Elle ne s'estompe pas et couvre 100% des cheveux blancs dès la 1ère application.</p>
<p>Composition du kit Phytocolor : Lait révélateur  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221002488</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34ea11af35ac087881e8de2de36e005cca49ebd2211b4677afe6638af09bc9f3 ]]></g:image_link>
<g:product_type><![CDATA[ COLORATION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytocyane Men Shampoing Revigorant 250ml ]]></title>
<g:id>0d159c3d-35a9-4578-bb8b-4b6876bd1df4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocyane-men shampoing revigorant 250ml?0d159c3d-35a9-4578-bb8b-4b6876bd1df4 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le shampooing Phytocyane Men est idéal pour préparer le cuir chevelu avant un traitement antichute.<br>Il nettoie en douceur et redonne vitalité et vigueur aux cheveux.<br>Les cheveux sont de meilleure qualité, plus forts et tonifiés dès la racine.<br>Au cœur de la formule, un extrait de shiitaké connu pour ses propriétés tonifiantes et revigorantes aide à redonner de la vigueur aux cheveux.<br>Des pro-vitamines B6 et B5 apportent force et beauté à la fibre capillaire.<br>Une extraction de ro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915490</g:gtin>
<g:brand><![CDATA[ PHYTO ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a5017becbfa3e8d42f39b3d79723bb392f2d05d6407dec6aecfd42561cfe918 ]]></g:image_link>
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
<title><![CDATA[ Phytocyane Traitement Anti-Chute Femme Chute Progressive ]]></title>
<g:id>72f0a383-d344-49f0-a3fb-efbc03f4e7fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocyane-traitement anti-chute femme chute progressive?72f0a383-d344-49f0-a3fb-efbc03f4e7fd ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>INNOVATION BREVETÉE</span><br /><br /><span>Un concentré d'actifs d'origine naturelle pour une efficacité triple action.</span><br /><span>CHUTE FREINÉE, REPOUSSE STIMULÉE, CHEVEUX SUBLIMÉS.</span><br /><br /><span>87%</span><span>(1)</span><span>chute freinée</span><br /><span>Croissance stimulée : +8 014 cheveux</span><span>(2)</span><span>.</span><br /><span>Chevelure plus abondante, plus dense et plus épaisse.</span><br /><span>92%</span><span>(3)</span><span> de satisfaction global ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436910174</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/685b62b689eb2ccbe7b62a6cb8490e6968023ee607f8ba74e325957277a5ed19 ]]></g:image_link>
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
<title><![CDATA[ Phytocyane Traitement AntiChute Femme Chute Réactionnelle ]]></title>
<g:id>29ec74a9-4181-4574-9a96-f4ccad61f25c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocyane-traitement antichute femme chute réactionnelle?29ec74a9-4181-4574-9a96-f4ccad61f25c ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>INNOVATION BREVETÉE</span><br /><br /><span>Un concentré d'actifs d'origine naturelle pour une efficacité triple action.</span><br /><span>CHUTE FREINÉE, MATIÈRE RETROUVÉE, CHEVEUX SUBLIMÉS.</span><br /><br /><span>EFFICACITÉ ANTICHUTE 85%</span><span>(1)</span><span> dès 2 mois.</span><br /><span>Des résultats visibles dès le 1er mois, des cheveux plus volumineux et plus brillants.</span><br /><br /><span>Ce traitement cible la chute de cheveux massive et soudaine (depuis moins de 3 mo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436910143</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57bc1e42e8b4681aaf08ec34c6479deaf06daa0aa075a555fb18faf5d7167bc7 ]]></g:image_link>
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
<title><![CDATA[ Phytocyane Traitement Antichute Homme 12 Fioles ]]></title>
<g:id>555deadd-e9c5-498a-a0d5-8a570010354a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocyane-traitement antichute homme 12 fioles?555deadd-e9c5-498a-a0d5-8a570010354a ]]></link>
<g:price><![CDATA[ 3990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>INNOVATION BREVETÉE</span><br /><br /><span>Un concentré d'actifs d'origine naturelle pour une efficacité triple action.</span><br /><span>CHUTE FREINÉE, REPOUSSE STIMULÉE, CHEVEUX SUBLIMÉS.</span><br /><br /><span>Chute freinée.</span><br /><span>+6 440</span><span>(1)</span><span> cheveux dès 6 semaines.</span><br /><span>Cheveux plus denses et plus forts.</span><br /><br /><span>Ce traitement cible la chute de cheveux sévère chez les hommes, liée à l'âge ou à l'hérédité. Une chute pr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436910303</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/101d510540a9529ab2ba47d671d149883dff1e5ff9211e0a18c131982064e2ef ]]></g:image_link>
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
<title><![CDATA[ Phytocyane-Men Shampooing Revigorant, 250ml ]]></title>
<g:id>d64e1121-72b6-477b-98a2-9ec01757f527</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytocyane-men shampooing revigorant, 250ml?d64e1121-72b6-477b-98a2-9ec01757f527 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li><span>Pour qui :</span> Hommes</li>
<li><span>Résultats :</span> Les cheveux sont revigorés et tonifiés </li>
<li><span>Les actifs : </span>Extraits de Shiitaké </li>
<li><span>On aime :</span> Sa formule douce avec le cuir chevelu</li>
</ul><p> </p>
<p><span>Le Shampooing Revigorant Phytocyane Men de Phyto</span> est un soin capillaire qui s'utilise avant de commencer une<span> cure anti-chute</span> de cheveux pour <span>hommes</span>.</p>
<p>Sa formule nettoie les cheveux et le cuir c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436915506</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1973b7cef9a60397551b9c5fe5657a712a9572b03b83f6f7e998810df556caf0 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytodefrisant soin a-frisottis 50ml ]]></title>
<g:id>41a60c41-f441-4540-b657-6cee144b119a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytodefrisant-soin a-frisottis 50ml?41a60c41-f441-4540-b657-6cee144b119a ]]></link>
<g:price><![CDATA[ 1395.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Résultat : Lissage parfait. Coiffure redéfinie. </span></p>
<div>
<ul class="bullet"><li>Souplesse et brillance. </li>
<li>Action anti-frisottis 72h*. </li>
<li>Protection jusqu'à 80% d'humidité*.</li>
</ul></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221007124</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0313b36d4fcfa12b58dc93afd326d756894903455d99b2c0eb77afef26e27d94 ]]></g:image_link>
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
<title><![CDATA[ Phytophanère Duo 2x120 Gélules ]]></title>
<g:id>cb1b7f4c-0964-4e99-819c-51a20acf697a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytophan-re duo 2x120 gélules?cb1b7f4c-0964-4e99-819c-51a20acf697a ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytophanère est un complément alimentaire dédié à la force et à la croissance des cheveux et des ongles. La vitamine B6 contribue à la production de la cystéine, constituant de la kératine, tandis que la vitamine B8 et le zinc participent à leur beauté et à leur qualité. Il est conseillé de faire 2 programmes de 3 mois par an : une en automne et une au printemps.<br /><br />Phytophanère, pour des cheveux densifiés et plus beaux et des ongles plus résistants.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338221001085</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2d0b27b1f83dbfb5d5477a72da6a4f2cc79c84cb05f70b097dcfdb5ff081e680 ]]></g:image_link>
<g:product_type><![CDATA[ PHANERES CAPILLAIRES ONGLES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosepecific crème de soin lavante 125ml ]]></title>
<g:id>bd3b46c0-5c0a-46e6-b434-dd64e5cd8ed4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosepecific-crème de soin lavante 125ml?bd3b46c0-5c0a-46e6-b434-dd64e5cd8ed4 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <h2 class="product-shortTitle">CRÈME DE SOIN LAVANTE</h2>
<h3 class="product-subtitle">CHEVEUX BOUCLÉS, FRISÉS, CRÉPUS ET DÉFRISÉS</h3> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338220100659</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ed82d65728b06d122b6a74f9490d660b8d325a24e14a11e0c1619aaffaa519d0 ]]></g:image_link>
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
<title><![CDATA[ Phytosolba Réparation Après Shampoing 175ml ]]></title>
<g:id>e6b13ade-143f-40a5-9ad7-bdb4b0053f49</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosolba-réparation après shampoing 175ml?e6b13ade-143f-40a5-9ad7-bdb4b0053f49 ]]></link>
<g:price><![CDATA[ 1240.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'après-shampooing RÉPARATION répare et renforce les cheveux abîmés et les protège de la casse, tout en démêlant. Au cœur de la formule, un nouveau complexe biomimétique "Kératine A18+" issue de la recherche végétale : une kératine composée de 18 acides aminés boostés qui agit comme un combleur intra-fibre pour recréer de la matière au cœur du cheveu et restaurer la fibre endommagée. Issue d’Avoine noir et Lupin cette kératine végétale superchargée en acides aminés garantie la résistance d’un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701436916923</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/84ddae71f5b7fb3119ed3bef78f3ffaba6657d025764faa19cd5c73aef91614a ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytospecific curl legnd gel creme 150ml ]]></title>
<g:id>7d3e8d98-bddc-460b-a38d-91cd46d16465</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytospecific-curl legnd gel creme 150ml?7d3e8d98-bddc-460b-a38d-91cd46d16465 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <h2 class="product-shortTitle">GEL-CRÈME SCULPTEUR DE BOUCLES</h2>
<h3 class="product-subtitle">CHEVEUX ONDULÉS À FRISÉS</h3> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3338220100680</g:gtin>
<g:brand><![CDATA[ PHYTOSOLBA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/25982403ee1c6b745efd825e12a6882e470835554cf9ffff9dfc7a28e5f0ffe9 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Aroms Huile Essentielle de Chanvre BIO, 5ml ]]></title>
<g:id>07f96706-b3bd-4912-858c-2f3a266e224f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-aroms huile essentielle de chanvre bio, 5ml?07f96706-b3bd-4912-858c-2f3a266e224f ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Huile essentielle BIO</span> de chanvre <span>100% pure et naturelle</span> de la marque Phytosun Arôms.</p>
<p>L'huile essentielle de chanvre Phytosun Arôms ne contient pas de THC.</p>
<p><span>Made in France.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595895308388</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/007999cf4d0c4d4b7cbe59bdc637c8c92a4d94e6289836fc483bedb325202014 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun Aroms Huile essentielle Bio Lavande fine 10 ml ]]></title>
<g:id>a2015e3c-6857-451e-a773-1577bc7ff791</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-aroms huile essentielle bio lavande fine 10 ml?a2015e3c-6857-451e-a773-1577bc7ff791 ]]></link>
<g:price><![CDATA[ 855.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L’Huile Essentielle de Lavande fine contribue à une relaxation optimale.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890240287</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7009c9ee2b09aeb52cfa2f59deb6f9e69c48b22c7dc79043175f75b0bf286ee2 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Aroms Sirop Toux & Gorge 120ml ]]></title>
<g:id>8ad3be25-ace2-40a5-bc6a-edad2e3c2661</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-aroms sirop toux & gorge 120ml?8ad3be25-ace2-40a5-bc6a-edad2e3c2661 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Sirop Toux &amp; Gorge Max 8 en 1</span> de <span>PHYTOSUN AROMS</span> est un dispositif médical, à action rapide et prolongée, à effet 8 en 1 : </p>
<p>- Toux sèche<br />- Toux grasse<br />- Mal de gorge<br />- Envie de tousser<br />- Chatouillement dans la gorge<br />- Enrouement <br />- Sècheresse de la bouche et de la gorge<br />- Difficulté à avaler</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5400951001128</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/11484818b821089a9bd26c449cd6c128ded9dce08e4ef004fc4fbd6069d085c1 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Aroms Stress Triple Action 30 Caps ]]></title>
<g:id>0f0fab95-0fdc-43b5-98f9-6d7093b1792d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-aroms stress triple action 30 caps?0f0fab95-0fdc-43b5-98f9-6d7093b1792d ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <div class="produit-titre-respiration">
<div class="produit-citation">
<div class="quote-texte">
<p>Phytosun Arôms STRESS TRIPLE ACTION est une solution efficace à base d’Huiles Essentielles qui peut être utilisée pour faire face à la pression d’une vie bien remplie en aidant à favoriser la détente et l’apaisement.</p>
</div>
<div class="quote-droite"><img src="https://www.phytosunaroms.com/wp-content/themes/phlox/images/picto/quote_bottom.png" alt="" /></div>
</div>
</div>
<div class="prod-bloc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890247989</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b46280794f359e72ba5cc328c6006f2b0ecbb893799dc5c2d5a1cf12971e876 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun Aroms spray nasal décongestionnant 20ml ]]></title>
<g:id>f5d490d8-1ef0-49ff-a638-92eadf991222</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-aroms spray nasal décongestionnant 20ml?f5d490d8-1ef0-49ff-a638-92eadf991222 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fort de 20 ans d’expérience dans le domaine de l’aromathérapie, Phytosun fabrique des huiles HEBDD (Huiles Essentielles Botaniquement et Biochimiquement Définies) de très hautes qualités et soumises à des contrôles pharmaceutiques très stricts.</p>
<p>Le spray nasal décongestionnant vous permettra de retrouver le confort de vos voies respiratoires en décongestionnant le nez tout en évitant la prolifération de l’infection grâce à cet assemblage d’huiles essentielles d'Eucalyptus, de Niaouli et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595899930837</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e290e4e8caf7d629e94b7601f04698efae31658d8940e8dfb0c08cdeb60d04a ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Aromadoses Bronches 30 Capsules ]]></title>
<g:id>29e0446a-b8e6-45d7-8d39-51dbcd6c3cf5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms aromadoses bronches 30 capsules?29e0446a-b8e6-45d7-8d39-51dbcd6c3cf5 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ Phytosun Arôms Aromadoses Bronches 30 Capsules est une association d'huiles essentielles utilisées pour améliorer le confort et l'hygiène de l'arbre bronchique. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595894847703</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a37f64b941cb2c0e7ba2e18953fe9d09f8ab186c86f4568fdfa41f6523bee6f5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun Arôms Aromadoses Nez et Gorge 30 Capsules ]]></title>
<g:id>47a704bf-71ad-40b8-9439-5a018cc8bb96</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms aromadoses nez et gorge 30 capsules?47a704bf-71ad-40b8-9439-5a018cc8bb96 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Aromadoses Nez et Gorge 30 Capsules est une association d'huiles essentielles utilisées pour améliorer le confort et l'hygiène des voies</p>
<p>aériennes supérieures.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595894847697</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7f44aa483d268c352cd9c29c3e09180bcd211f01f545fb5ad5efe114baf76bf5 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Camomille Romaine 5 ml ]]></title>
<g:id>8e14cf5c-fc13-4acf-8dbb-6e5811027e0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms camomille romaine 5 ml?8e14cf5c-fc13-4acf-8dbb-6e5811027e0b ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les Huiles Essentielles Phytosun Arôms sont 100% pures et naturelles, Botaniquement et Biochimiquement Définies. (H.E.B.B.D).</p>
<p>L'huile essentielle de Phytosun Arôms Camomille Romaine 5 ml possède des propriétés :</p>
<p>- Sédative, calmante puissante du système nerveux central</p>
<p>- Antispasmodique puissante (anti crampes, anti-hoquet, anti-spasmes).</p>
<p>Elle a aussi des vertus antalgiques et pré-anesthésiantes (calme la douleur, endort la peau), anti-inflammatoires, elle calme le ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595897516897</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/95aca19e51078f885185501e20647165dedf48d173d6c7251b75993b25c67fb1 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Carotte 5 ml ]]></title>
<g:id>724a4846-3de4-449e-9a28-4fd8f5fbc3d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms carotte 5 ml?724a4846-3de4-449e-9a28-4fd8f5fbc3d9 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p>Daucus carota o.p. semences. L'huile essentielle de Phytosun Arôms Carotte 5 ml est un tonique des voies digestives. Elle a également de nombreuses actions au niveau de la peau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595897516903</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad892ebc8e97c3d423c9d882113066b3d208ae153a96a5d7c065ed0e164e7035 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Complexe Agrumes pour Diffuseur 30 ml ]]></title>
<g:id>ee8b54a0-9424-4ce6-9636-4eba213b51e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms complexe agrumes pour diffuseur 30 ml?ee8b54a0-9424-4ce6-9636-4eba213b51e0 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Complexe Agrumes pour Diffuseur 30 ml grâce à sa composition vivifiante, est une véritable envolée de fraîcheur citronnée.</p>
<p>Ce complexe regroupe plusieurs huiles essentielles : Pamplemousse, Citron, Eucalyptus radiata, Petit Grain Bigaradier, Cajeput, Litsée, Sapin de Sakhaline, Menthe des champs, Ravintsara.</p>
<p>Huiles essentielles 100% pures et naturelles, botaniquement et biochimiquement définies (H.E.B.B.D).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890233838</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ba0921dcd316c8caf778e33ee4a1d1d95d251ea83a5a66c376bd1e9f475d68e ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Complexe Diffuseur Grand Air 30 ml ]]></title>
<g:id>5b74e51b-359a-46c7-97eb-5d714a4855bd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms complexe diffuseur grand air 30 ml?5b74e51b-359a-46c7-97eb-5d714a4855bd ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Complexe Diffuseur Grand Air 30 ml est composé à 100% d'Huiles essentielles, 100% pures et naturelles, botaniquement et biochimiquement définies (H.E.B.B.D).</p>
<p>La diffusion d'huiles essentielles permet de retrouver la nature chez soi et de bénéficier de la finesse, de la variété des parfums ainsi que des propriétés des huiles essentielles.</p>
<p>Avec ce complexe vous avez une garantie de sécurité et de bon fonctionnement de votre diffuseur.</p>
<p>Le complexe pour diffuse ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890233821</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/648274dfc916d77127edfdb1ced795d13a315eef6990c932021b3f21f231e428 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Complexe Diffuseur Pureté 30 ml ]]></title>
<g:id>daa83e63-8c47-445b-bc48-c8bf95e3c33b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms complexe diffuseur pureté 30 ml?daa83e63-8c47-445b-bc48-c8bf95e3c33b ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>https://www.cocooncenter.com/phytosun-aroms-complexe-diffuseur-purete-30-ml/5388.html#:~:text=Phytosun%20Ar%C3%B4ms%20Complexe,les%20mauvaises%20odeurs.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890233807</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/893af552b4e4ae46fc69f8e02611114643f94983956040af017a832ac947c3e7 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Essence Citron Jaune Bio 10 ml ]]></title>
<g:id>27b0939c-9df3-4fb2-82c0-d83c6704ea58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms essence citron jaune bio 10 ml?27b0939c-9df3-4fb2-82c0-d83c6704ea58 ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Essence Citron Jaune (Citrus limonum) Bio 10 ml est un complément alimentaire sous forme d'huile essentielle bio 100% pure et naturelle (non diluée, non modifiée).</p>
<p>o.p : zestes expressés.<br />s.b. : limonène, bêta-pinène, citrals.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01. Agriculture UE/Non UE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239571</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fa0022c579d3e2339bafb73658b59152b7cc79c83a2eb5297e3648ccadbbdca1 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Cyprès  Bio 10 ml ]]></title>
<g:id>228a4a37-714e-463a-a6b4-2d4976e800a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle cyprès  bio 10 ml?228a4a37-714e-463a-a6b4-2d4976e800a7 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Cyprès (Cupressus Sempervirens) Bio 10 ml est un complément alimentaire sous forme d'huile essentielle bio 100% pure et naturelle (non diluée, non modifiée).</p>
<p>o.p : rameaux.<br />s.b. : alpha-pinène, delta3-carène, cédrol.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01. Agriculture UE/Non UE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890245329</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/be6e9657a6113b17f625d1bc4a41155dfea5c72c6ed8d5ba646c6ecc5a06c90d ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Encens Oliban Bio 5 ml ]]></title>
<g:id>04e9b6f4-02f1-44c0-8857-5658673123fb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle encens oliban bio 5 ml?04e9b6f4-02f1-44c0-8857-5658673123fb ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Encens Oliban (Boswellia carterii) Bio 5 ml est un produit de diffusion à base d'huile essentielle d'encens oliban.</p>
<p>o.p : organe producteur : gomme résine.<br />s.b. : spécificité biochimique : alpha-pinène, limonène, sabinène, Bêta-myrcène, alpha-thuyène.</p>
<p>100% du total des ingrédients sont issus de l'Agriculture Biologique.</p>
<p>Parfum d'ambiance biologique contrôlé par Ecocert Greenlife F32600.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890245336</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/edba11f73ee012ef76a6d293bef114013bcc0de89f7f62d8709c14f8ca72171e ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Epinette Noire Bio 10 ml ]]></title>
<g:id>f1e254fb-130c-4eca-b6b7-5dd8bff11b80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle epinette noire bio 10 ml?f1e254fb-130c-4eca-b6b7-5dd8bff11b80 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Epinette Noire (Picea mariana) Bio 10 ml est une Huile Essentielle Botaniquement et Biochimiquement Définie (H.E.B.B.D.) 100% pure et naturelle.</p>
<p>Organe producteur : rameaux</p>
<p>Famille : pinacées</p>
<p>Spécificité biochimique : acétate de bornyle, camphène, alpha-pinène, delta-3-carène, santène</p>
<p>Extraction par distillation à la vapeur d'eau ou par expression.</p>
<p>Parfum d'ambiance Biologique. Contrôle Ecocert Greenlife F32600.</p>
<p>100% d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890247712</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e4db98bac50778b5bcb682d078111e15becb5e1c16e5a34aa2088d690c8484ac ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Eucalyptus Citronné Bio 10 ml ]]></title>
<g:id>c0b127d3-722a-4fd7-95c2-0658b0384949</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle eucalyptus citronné bio 10 ml?c0b127d3-722a-4fd7-95c2-0658b0384949 ]]></link>
<g:price><![CDATA[ 360.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Eucalyptus Citronné (Eucalyptus citriodora) Bio 10 ml est une huile essentielle 100% pure et naturelle.</p>
<p>Organe producteur : feuilles.</p>
<p>Origine : Brésil.</p>
<p>Dose journalière pour 6 gouttes : 168 mg</p>
<p>Dose journalière pour 3 gouttes (enfants) : 84 mg</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890244490</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0cf05e12da663b3e41914fb1eedbc28b703926b3dc6a55536abe7bc15ceb5154 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun Arôms Huile Essentielle Géranium Bourbon  Bio 10 ml ]]></title>
<g:id>539ca165-f38b-4ac5-886a-3bd96c19c53d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle géranium bourbon  bio 10 ml?539ca165-f38b-4ac5-886a-3bd96c19c53d ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Géranium Bourbon (Pelargonium graveolens roseum) Bio 10 ml est un complément alimentaire sous forme d'huile essentielle bio 100% pure et naturelle (non diluée, non modifiée).</p>
<p>o.p : feuilles.<br />s.b. : citronellol, géraniol, formiate de citronellyle.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01. Agriculture UE/Non UE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890241260</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9dffc6ad144d47838d9e1a8e0a36bd92ed1f3141f16e6fc963aa5bf5d1e65634 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Hélichryse Bio 5 ml ]]></title>
<g:id>38fdc625-c570-418c-b595-5fddf7389a74</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle hélichryse bio 5 ml?38fdc625-c570-418c-b595-5fddf7389a74 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Hélichryse Bio (Helichrysum italicum) 5 ml est un complément alimentaire sous forme d'huile essentielle bio 100% pure et naturelle (non diluée, non modifiée).</p>
<p>o.p : parties aériennes fleuries.<br />s.b. : cucumènes, diones.</p>
<p>Test d'efficacité sous contrôle dermatologique.</p>
<p>Cosmos Organic Certifié par Ecocert Greenlife selon le référentiel Cosmos.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890241277</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/13c7700ed35026357239cad1ec4ca1ce239b4d2850634e60f6cfc0dc44e2cf44 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Lavande Aspic Bio 10 ml ]]></title>
<g:id>022b22a9-c32a-4cb9-808e-f57ab93333d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle lavande aspic bio 10 ml?022b22a9-c32a-4cb9-808e-f57ab93333d6 ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Lavande Aspic (Lavandula aspic) Bio 10 ml est une huile essentielle 100% pure et naturelle.</p>
<p>Organe producteur : sommité fleurie.</p>
<p>Origine : Espagne.</p>
<p>Dose journalière : 93 mg</p>
<p>Certifiée par FR-BIO-01.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890244483</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d0d916a2c9e6549a9e71273a3d8824e110a53ff9bc53765b5ad797fde1325daf ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Lavandin Abrial  Bio 10 ml ]]></title>
<g:id>f9d3cf42-11c7-40bf-b2ce-6ac42cd8925d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle lavandin abrial  bio 10 ml?f9d3cf42-11c7-40bf-b2ce-6ac42cd8925d ]]></link>
<g:price><![CDATA[ 375.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Lavandin Abrial (Lavandula hybrida clone abrialis) Bio 10 ml est une huile essentielle 100% pure et naturelle.</p>
<p>Organe producteur : sommité fleurie.</p>
<p>Origine : Espagne.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890244551</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d455d3399a045795a5dc3d62c730035a8f2e7bad807c92ec04ac7ed8c86ebba7 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Mandarine Rouge Bio 10 ml ]]></title>
<g:id>d7f2a69e-366c-4669-b099-0e2a654295b1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle mandarine rouge bio 10 ml?d7f2a69e-366c-4669-b099-0e2a654295b1 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Mandarine Rouge (Citrus reticulata) Bio 10 ml est une Huile Essentielle Botaniquement et Biologiquement Définie 100% pure et naturelle.</p>
<p>Organe producteur : zestes expressés.</p>
<p>Spécificité biochimique : limonène, gamma-terpinène.</p>
<p>Certifiée Agriculture Biologique. Contrôle FR-BIO-01.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890245305</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d5e38705509ab92bb7a1fb6b557e32541deb19c889128a7977dbe41487b6e786 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun Arôms Huile Essentielle Menthe Poivrée  Bio 10 ml ]]></title>
<g:id>87b9b5c5-6dc6-4a50-b150-49e624658507</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle menthe poivrée  bio 10 ml?87b9b5c5-6dc6-4a50-b150-49e624658507 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Menthe Poivrée (Mentha piperita) Bio 10 ml est un complément alimentaire sous forme d'huile essentielle bio 100% pure et naturelle (non diluée, non modifiée).</p>
<p>o.p : partie aériennes.<br />s.b : menthol (30-55%), menthone (14-32%).</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01. Agriculture UE/Non UE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239526</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85d2fbde60b3d3e1f6cf19b31dba70923120c7ccb3a8cb2c65ce0804e4bc15ad ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Niaouli  Bio 10 ml ]]></title>
<g:id>e8c09c39-8c1d-43dd-9913-4c8750d43873</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle niaouli  bio 10 ml?e8c09c39-8c1d-43dd-9913-4c8750d43873 ]]></link>
<g:price><![CDATA[ 515.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Niaouli (Melaleuca quinquenervia) Bio 10 ml est une huile essentielle de niaouli bio.</p>
<p>o.p : Organe producteur : rameaux feuillés.<br />s.b : Spécificité biochimique : 1,8 cinéole, viridiflorol.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01.<br />Agriculture UE/Non UE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890249716</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d522d1f2b30358a29cf0962adc0ad609f660bf171ab017497360b7dcf4c05115 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun Arôms Huile Essentielle Tea-Tree Bio 10 ml ]]></title>
<g:id>7a36a0f0-a028-4023-be2e-b15422e3eb2e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle tea-tree bio 10 ml?7a36a0f0-a028-4023-be2e-b15422e3eb2e ]]></link>
<g:price><![CDATA[ 640.01 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Tea-Tree (Melaleuca alternifolia) Bio 10 ml est un complément alimentaire sous forme d'huile essentielle bio 100% pure et naturelle (non diluée, non modifiée).</p>
<p>o.p : feuilles.<br />s.b. : 4-terpinéol, y-terpinène.</p>
<p>Certifié Agriculture Biologique. Contrôle FR-BIO-01. Agriculture UE/Non UE.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239502</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/692fea611281861ddf1ac0cf2e3fb1b182a344ad511b5db898bd6c8f4b4869b4 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Huile Essentielle Ylang Ylang  Bio 5 ml ]]></title>
<g:id>1dd728c0-6b87-4258-b0bd-c83bd19eb25c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle ylang ylang  bio 5 ml?1dd728c0-6b87-4258-b0bd-c83bd19eb25c ]]></link>
<g:price><![CDATA[ 775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms Huile Essentielle Ylang Ylang (Cananga odorata) Bio 5 ml est une huile essentielle 100% pure et naturelle. Elle est destinée à la diffusion.</p>
<p>Partie distillée : fleurs.</p>
<p>Origine : Madagascar.</p>
<p>100% du total des iingrédients sont issus de l'agriculture Biologique.</p>
<p>Parfum d'ambiance biologique contrôlé par Ecocert Greenlife F32600.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890244650</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27e24f0e076fde6cc0bb6aa3f73b2b29900b1a5c2ac30e47d9532815d4fd78c8 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms Spray Nasal Allergie 20 ml ]]></title>
<g:id>6e4e57bd-efaf-4069-b694-a7c2c662bd1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms spray nasal allergie 20 ml?6e4e57bd-efaf-4069-b694-a7c2c662bd1c ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <div id="description">
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Phytosun Arôms Spray Nasal Allergie 20 ml est un spray qui protège durant 6 heures et agit rapidement de façon sûre et efficace dès les premiers symptômes des rhinites allergiques (éternuements, écoulement nasal, larmoiements, nez bouché). Il est efficace en cas d'allergies au pollen, acariens et poils d'animaux. C'est une formule Thixotropique brevetée : le spray devient fluide une fois secoué po ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890241468</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5d73ace55fc15a6f6d2f20f43e81cc92950f68819d20039762197eff8a71b215 ]]></g:image_link>
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
<title><![CDATA[ Phytosun Arôms diffuseur sans fil Easygo ]]></title>
<g:id>07b4e7d9-4138-43b4-b42a-0d13fc26cf98</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms diffuseur sans fil easygo?07b4e7d9-4138-43b4-b42a-0d13fc26cf98 ]]></link>
<g:price><![CDATA[ 4190.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Diffuseur d’Huiles Essentielles</li>
</ul><p>La diffusion d’Huiles Essentielles permet de bénéficier de la finesse et de la variété des parfums ainsi que des propriétés aromatiques des Huiles Essentielles. Que ce soit pour assainir l’atmosphère, supprimer les mauvaises odeurs, créer une ambiance tonique, relaxante ou rafraîchissante, il existe une Huile Essentielle ou un Complexe de Diffusion Phytosun Arôms adapté à chaque situation.</p>
<ul><li>Diffusion Ultrasonique</li>
</ul><p>Cette  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890257841</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98422ee47d6cfd61379109ca4243810fb7aefd4677633d27b4216bd51f85057f ]]></g:image_link>
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
<title><![CDATA[ Phytosun Huile de Chanvre Bio 50ml ]]></title>
<g:id>6819329a-ac1e-4f38-b263-5669d7c6d3c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-huile de chanvre bio 50ml?6819329a-ac1e-4f38-b263-5669d7c6d3c0 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Obtenue par première pression à froid des graines, l'</span><span>huile végétale de Chanvre Bio Phytosun</span><span> est 100% pure et naturelle.</span><br /><span>L'huile de chanvre BIO est riche en oméga 3, 6, 9 et en vitamine E. Grâce à ses propriétés régénérantes, revitalisantes, nutritives et assouplissantes, elle est l'alliée des </span><span>peaux sèches et matures</span><span>.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595895308395</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7fa723b94ac6bbe453c422c2c35cd5d8f03e3a4b73616e3b885bda3c83eaeca4 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun arom eucalyptus radié bio 10ml ]]></title>
<g:id>5be08855-1672-412b-9e80-8452d9faa158</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arom eucalyptus radié bio 10ml?5be08855-1672-412b-9e80-8452d9faa158 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Famille</strong> :<br />Myrtacées.</p>
<p><strong>Organe producteur :</strong><br />Feuilles.</p>
<p><strong>Spécificité biochimique :</strong><br />1.8-cinéole, α-terpinéol, Citrals.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239564</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc38122f32c37ca772364cd96408f14fb0e35ebd0e2efb205e53e49255321c36 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms aromadoses confort urinaire 30 capsules ]]></title>
<g:id>de0b6511-28aa-458d-9451-360b3ad5ca1e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms aromadoses confort urinaire 30 capsules?de0b6511-28aa-458d-9451-360b3ad5ca1e ]]></link>
<g:price><![CDATA[ 960.00 EUR ]]></g:price>
<description><![CDATA[ <p>AROMADOSES CONFORT URINAIRE 30 CAPSULES.</p>
<p>Huile Essentielle de Coriandre qui aide à améliorer le confort et le bon fonctionnement des voies urinaires.</p>
<div></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595899501976</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b3abf6124f053eb59a7a3ef8aa5a98fabae73e38f20d0e3099c6fa7bc0659b36 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms brûlures d'estomac & remontées acides 20 comprimés ]]></title>
<g:id>8615bcf0-d83a-4835-966f-f71f12857bae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms brûlures d'estomac & remontées acides 20 comprimés?8615bcf0-d83a-4835-966f-f71f12857bae ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>PHYTOSUN arôms Brûlures d’estomac et Remontées acides soulage instantanément et protège durablement des brûlures d’estomac et des remontées acides. Son composant exclusif, le PhycodolTM, est un extrait naturel d’algues brunes unique riche en alginates. Il permet la formation d’une barrière protectrice au-dessus du contenu de l’estomac qui empêche instantanément toute remontée acide vers l’oesophage et prévient les douleurs et les sensations d’inconfort.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890248948</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/75f9e917cb7c68ee43411447c11fde5133938be8e0a31c474d402ab04ead98b7 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle cannelle de ceylan bio 5ml ]]></title>
<g:id>2e34976e-e923-48ce-9fe5-a090ce673be5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle cannelle de ceylan bio 5ml?2e34976e-e923-48ce-9fe5-a090ce673be5 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle cannelle de ceylan bio</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239595</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/31748ef0bf7abbc4c00aaed613e75b2a33311b184cd3a8a9dcf5f95395e740b3 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle citronnelle de java bio 10ml ]]></title>
<g:id>74899da7-c7e9-4163-bce6-1bc55872ff01</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle citronnelle de java bio 10ml?74899da7-c7e9-4163-bce6-1bc55872ff01 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Famille :</strong><br />Poacées.</p>
<p><strong>Organe producteur :</strong><br />Herbe.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890247668</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c03e9cd4017c33b9ffd894197f5270fb7e63625a09dc8a9577c0f65e584818ac ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle cèdre de virginie 5ml ]]></title>
<g:id>ad7b05db-9cf5-4e90-bdcb-43b62dae8fe9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle cèdre de virginie 5ml?ad7b05db-9cf5-4e90-bdcb-43b62dae8fe9 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Famille :</strong><br />Cupressacées.</p>
<p><strong>Organe producteur :</strong><br />Bois.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890250460</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/911284ebd3d21f4585f00ce7785526d8528c462aa1c2b35a68e79ead09cac0f6 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle d'origan compact bio 10ml ]]></title>
<g:id>ec7def45-2bf8-4fcf-9e70-0e7a4ab8fb8c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle d'origan compact bio 10ml?ec7def45-2bf8-4fcf-9e70-0e7a4ab8fb8c ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Famille :</strong><br />Lamiacées.</p>
<p><strong>Organe producteur :</strong><br />Parties aériennes fleuries.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890247675</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34bb6ba624f9502c6eaeebeef8a53de2a85e8e024f5fcc21fa271205c5892e94 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle de romarin a Verbénone bio 5ml ]]></title>
<g:id>acbaa33c-04f7-44ed-aa00-05ad5b12dc58</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle de romarin a verbénone bio 5ml?acbaa33c-04f7-44ed-aa00-05ad5b12dc58 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle de romarin à verbénone bio</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890248153</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/62e1ddd840cf5d6c5619ed266ce27855f293c042f1c8940cc3894890e3baad50 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun arôms huile essentielle gingembre frais bio 5ml ]]></title>
<g:id>c1c4052f-2e5b-4a33-9e1b-fe84e19a2bee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle gingembre frais bio 5ml?c1c4052f-2e5b-4a33-9e1b-fe84e19a2bee ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Huile Essentielle de Gingembre frais aide à maintenir le confort des articulations et contribue à maintenir la mobilité et la flexibilité des articulations et limite les raideurs matinales.</p>
<p><strong>Famille :</strong><br />Zingiberacées.</p>
<p><strong>Organe producteur :</strong><br />Rhizomes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890247682</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ESSENTIEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/555d1ab3bbb0b26c3947dbdf33e5deb7c65fd20eedc59f8656ffced93b5afde1 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle girofle clous bio 10ml ]]></title>
<g:id>36cb5166-0420-407e-8dce-7ffe0e69c539</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle girofle clous bio 10ml?36cb5166-0420-407e-8dce-7ffe0e69c539 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Complément alimentaire à base d'huiles essentielles de girofles clous</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239540</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f715e3711d273755c7d8989f6e157e7a95f34a9f58b678eaa944e0159e92f10e ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle lavande fine bio 30ml ]]></title>
<g:id>3c032128-51ec-4218-9c75-70dc1153c83f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle lavande fine bio 30ml?3c032128-51ec-4218-9c75-70dc1153c83f ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Huile Essentielle de Lavande fine contribue à une relaxation optimale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890240270</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4cfe9820e1b8080ff87a1ce7484e8d8409a2be8bf043db4853029a362dcacefd ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle lravinstara bio 30ml ]]></title>
<g:id>fd20d3da-f46c-4eb3-8358-8340f210443c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle lravinstara bio 30ml?fd20d3da-f46c-4eb3-8358-8340f210443c ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’Huile Essentielle de ravintsara.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890241253</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0a1e19a8f584cd374e16fe08b8703809d4195258971af77c1d84a442e3322570 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle palma rosa bio 10ml ]]></title>
<g:id>6c570652-10bc-4cc3-9902-dcbf747086d6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle palma rosa bio 10ml?6c570652-10bc-4cc3-9902-dcbf747086d6 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile essentielle de palma rosa bio</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890248122</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b665e32b3916821defd1cdcd748b174b4214fd4a017d63f023fd930f44fb5ed ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun arôms huile essentielle petit grain bigaradier bio 10ml ]]></title>
<g:id>4ade02fc-7b14-413f-a9c8-bc1231340bd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle petit grain bigaradier bio 10ml?4ade02fc-7b14-413f-a9c8-bc1231340bd7 ]]></link>
<g:price><![CDATA[ 550.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Famille :</strong><br />Rutacées.</p>
<p><strong>Organe producteur :</strong><br />Feuilles, rameaux</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890248146</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2a0fffd892022312f2cba77d73f94f1577f74112614a175db7edd3c6f8aa6edd ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle sauge sclarée bio 5ml ]]></title>
<g:id>cd6e6a83-55f8-40b5-bcee-3cff1c08b940</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle sauge sclarée bio 5ml?cd6e6a83-55f8-40b5-bcee-3cff1c08b940 ]]></link>
<g:price><![CDATA[ 750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Famille :<br />Lamiacées.</p>
<p>Organe producteur :<br />Parties aériennes fleuries.</p>
<p>Spécificité biochimique :<br />Acétate de linalyle, Linalol, Germacrène D, Sclaréol.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239601</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2e6753c51da260ed80bde42a24ec78b0b846e768b7210571b7955be7249a99c0 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile essentielle thym à thymol bio 10ml ]]></title>
<g:id>2c8dad7b-ad15-4147-ba61-fe6e657f1fbd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile essentielle thym à thymol bio 10ml?2c8dad7b-ad15-4147-ba61-fe6e657f1fbd ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Thym à Thymol contribue au bon fonctionnement, à l’apaisement et au bien-être des voies respiratoires.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890239557</g:gtin>
<g:brand><![CDATA[ PHYTOSUN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a8a485a2f0610847fbba260bbe66246f8c6ef402cb458cab24e81da271b9632 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile végétale d'amande douce bio 50ml ]]></title>
<g:id>c13a62a3-b1b7-4e44-8054-ab8ec11f0d9f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile végétale d'amande douce bio 50ml?c13a62a3-b1b7-4e44-8054-ab8ec11f0d9f ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>NATURELLEMENT EFFICACE </strong></p>
<p>L’Huile Végétale d’Amande douce Phytosun Arôms adoucit la peau délicate et sensible, et la nourrit. Elle aide à apaiser les irritations cutanées types démangeaisons. Convient aux femmes enceintes et aux bébés. Texture douce et onctueuse.</p>
<p>Testé sous contrôle dermatologique.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890250941</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/33c67d6b50d1cc36482602b11ff1292034fa9402594faf2b5c5d668a6d7f7750 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytosun arôms huile végétale d'argan bio 50ml ]]></title>
<g:id>0fb5ce87-9d1a-45bf-af0e-d5458f6fb02f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile végétale d'argan bio 50ml?0fb5ce87-9d1a-45bf-af0e-d5458f6fb02f ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>NATURELLEMENT EFFICACE </strong></p>
<p>L’Huile Végétale d’Argan Phytosun Arôms nourrit et fortifie les cheveux secs et les ongles cassants. Après utilisation, la peau est comme régénérée. L’usage quotidien de l’huile d’Argan hydrate et prévient le dessèchement cutané.<br />Texture douce et fluide.<br />Convient aux femmes enceintes et aux bébés.</p>
<p>Test d’efficacité sous contrôle dermatologique.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890250880</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e038d3c5340e1b85e08528f747a47bf25cf11e6999c47e00371f04e7bb7ae6d7 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile végétale macadamia bio 50ml ]]></title>
<g:id>de644877-8365-4f1e-96c5-1341ee160f08</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile végétale macadamia bio 50ml?de644877-8365-4f1e-96c5-1341ee160f08 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>NATURELLEMENT EFFICACE</strong> L’Huile Végétale de Macadamia Phytosun Arôms donne un teint lumineux et homogène aux peaux ternes. Après utilisation, la peau est souple, douce et lumineuse. Elle est nourrie. Idéale pour les massages rapides. L’éclat du visage est réveillé sous l’action du massage. Texture fluide, légère, absorption rapide.</p>
<p>Convient aux femmes enceintes et aux bébés.</p>
<p>Test d’efficacité sous contrôle dermatologique.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890250934</g:gtin>
<g:brand><![CDATA[ OMEGA PHARMA ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bc85f5812688cdc201ab8fe1a33617934172bf0b0491a6e69afe1fb3d287f5b0 ]]></g:image_link>
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
<title><![CDATA[ Phytosun arôms huile végétale rose musquée bio 50ml ]]></title>
<g:id>53127add-e0c5-41d8-aaef-f46b298800a1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosun-arôms huile végétale rose musquée bio 50ml?53127add-e0c5-41d8-aaef-f46b298800a1 ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>NATURELLEMENT EFFICACE L’Huile Végétale de Rose Musquée Phytosun Arôms réduit et diminue les rides de la patte d’oie* et hydrate la peau. Elle assouplit et redensifie la peau.<br />Convient aux femmes enceintes et aux bébés.</p>
<p>Test d’efficacité sous contrôle dermatologique.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595890225840</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/354a1c5f9507ead8afd0bd84cdedb72e84e581eb32778f178a17e2acf1c9b795 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ PhytosunAroms Baume Pectoral Enfant 60g ]]></title>
<g:id>f11555cf-cce8-48d4-bd2a-e4e49cea9b32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytosunaroms-baume pectoral enfant 60g?f11555cf-cce8-48d4-bd2a-e4e49cea9b32 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytosun Arôms BAUME PECTORAL ENFANT apporte une sensation de confort de la peau au niveau de la poitrine, du dos ou de la nuque. Il procure une sensation de fraicheur grâce à ses senteurs purifiantes. Il est particuliérement adapté pour les périodes d’hiver.</p>
<p>Ce baume est notamment composé d’Huiles Essentielles de Ravintsara, Tea tree, Gingembre, mais aussi d’extrait de Fleur de Calendula et contribue à un effet apaisant.</p>
<p>Satisfaction consommateur : 91% des utilisateurs trouvent ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3595895306773</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/00f97826a2f0a53fc0b4b81d57e854ea55cb69a4fac3db295237fbd63557a31f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytoxil Junior Sirop 100ml ]]></title>
<g:id>ea21734b-b27a-4063-8c9d-85b43c5c9138</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytoxil-junior sirop 100ml?ea21734b-b27a-4063-8c9d-85b43c5c9138 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sanofi Phytoxil Junior Sirop 100 ml est un sirop spécialement formulé pour les enfants, aux arômes naturels de fraise et de framboise. Grâce à la présence d'extraits naturels de plantes à l'efficacité démontrée, il forme un film protecteur muco-adhésif à effet barrière qui calme la toux et apaise la gorge irritée. Il est efficace en cas de :</p>
<p>- toux sèche grâce à l'action muco-adhésive de la mauve blanche riche en mucilage qui forme un film protecteur sur la muqueuse de la gorge contre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664798024302</g:gtin>
<g:brand><![CDATA[ SANOFI ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3338ee155eee179f069b10feb36050097d43e37490fbaa51657f7d2952b67625 ]]></g:image_link>
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
<title><![CDATA[ Phytoxil Pastilles Gorge Irritée Fruits Rouges 16 Pastilles ]]></title>
<g:id>6c78cd60-3687-4787-ae3c-1fb75057d46a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytoxil-pastilles gorge irritée fruits rouges 16 pastilles?6c78cd60-3687-4787-ae3c-1fb75057d46a ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <span>pastilles gorge irritée</span> proposées par la marque <span>Phytoxil </span>est un dispositif médical destiné au traitement et à la prévention des symptômes communs du rhume, de la sécheresse de la bouche et de la gorge et de l'enrouement. Elles conviennent à l'adulte et l'enfant à partir de 6 ans.</p>
<p><span>Recommandées dès les premières gênes, les </span><span>pastilles gorge irritée Phytoxil</span><span> s'appuient sur un actif phare : l'ectoïne. Cette molécule, 100 % naturel ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664798063936</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fc25236a09f3cd53b77ebe4dd74657020abecbde0850349d70bf6a8c3393cd6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytoxil Pastilles Gorge Irritée Miel Citron Menthe 16 Pastilles ]]></title>
<g:id>a5fc65ba-aced-4832-aea6-33e8384bb5f7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytoxil-pastilles gorge irritée miel citron menthe 16 pastilles?a5fc65ba-aced-4832-aea6-33e8384bb5f7 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les <span>pastilles gorge irritée</span> proposées par la marque <span>Phytoxil </span>est un dispositif médical destiné au traitement et à la prévention des symptômes communs du rhume, de la sécheresse de la bouche et de la gorge et de l'enrouement. Elles conviennent à l'adulte et l'enfant à partir de 6 ans.</p>
<p>Recommandées dès les premières gênes, les <span>pastilles gorge irritée Phytoxil</span> s'appuient sur un actif phare : l'ectoïne. Cette molécule, 100 % naturelle, est employée po ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664798063943</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f3da114204409d89caa348691c115ba49eb665197c91766223f927be70bbe592 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Phytoxil Sirop sans sucre 120 ml ]]></title>
<g:id>6f2495e4-c9d3-4393-832a-b7b3dccbe2e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytoxil-sirop sans sucre 120 ml?6f2495e4-c9d3-4393-832a-b7b3dccbe2e3 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sanofi Phytoxil Sirop sans Sucre 120ml est un sirop qui permet de soulager la toux (toux sèche et toux grasse) à base de Thym, Plantain et de Mauve blanche.</p>
<p>Ce sirop pour la toux est un dispositif médical qui est indiqué pour soulager la toux sèche ou la toux grasse et lorsque celle-ci est associée à une infection des voies respiratoires supérieures.</p>
<p>Ce sirop agit sur :</p>
<p>- la toux grasse grâce à l'action combinée du plantain, du thym, qui fluidifient le mucus en l'hydratan ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3582910089599</g:gtin>
<g:brand><![CDATA[ SANOFI ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/356be6352f12d8b3ddf7c44af6db56c7750e44aa7c31496d58aefda83744286c ]]></g:image_link>
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
<title><![CDATA[ Phytoxil toux et gorge sirop 100 ml ]]></title>
<g:id>9c9fb391-79cf-4d9b-8621-bd3780ceba6b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/phytoxil-toux et gorge sirop 100 ml?9c9fb391-79cf-4d9b-8621-bd3780ceba6b ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Sanofi Phytoxil Toux et Gorge Sirop 100 ml est un sirop à base d'extrait naturel de mauve blanche et de miel, qui calme la toux sèche, soulage la gorge irritée et enflammée et apaise le mal de gorge. Il aide à réduire les symptômes de la toux sèche et l'envie de tousser.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3664798025507</g:gtin>
<g:brand><![CDATA[ SANOFI ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0bb8dcba2dfa3e1875cb79546f6fc1bd7626c6a913eacbd11aeb55a58bdf7c39 ]]></g:image_link>
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
<title><![CDATA[ Picot 1 Lait 0 - 6 mois 800g ]]></title>
<g:id>37f9676b-37cf-44fb-ab45-ea6582554c85</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-1 lait 0 - 6 mois 800g?37f9676b-37cf-44fb-ab45-ea6582554c85 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait en poudre Picot 1 répond aux besoins nutritionnels de bébé, et sa composition est basée sur le modèle du lait maternel.<br />Il est formulé avec des ingrédients rigoureusement sélectionnés pour apporter un maximum de bénéfices aux bébés.</p>
<p>La formulation spécifique de Picot est de contenir:<br />- des lipides laitiers pour être plus proche du lait maternel<br />- des probiotiques, pour un meilleur équilibre de la flore intestinale de bébé<br />- DHA et ARA, pour optimiser le déve ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101545343</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/688a0a929115ca75460b94440c130269fd99e26162d0ecb867a9af0fd7460e60 ]]></g:image_link>
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
<title><![CDATA[ Picot 2 Lait 6 - 12 mois 800g ]]></title>
<g:id>ad6a9046-5cb3-44bf-8f4f-36e298d1d50c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-2 lait 6 - 12 mois 800g?ad6a9046-5cb3-44bf-8f4f-36e298d1d50c ]]></link>
<g:price><![CDATA[ 1575.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le </span><span>lait Picot 2</span><span> est un lait de suite, adapté pour les </span><span>bébés âgés de 6 à 12 mois</span><span>. Elle contient du fer, du calcium, des vitamines et des oméga-3. </span><br /><br /><span>Les enfants âgés de moins de 12 mois ne doivent pas être nourris avec des laits animaux ou végétaux "classiques", destinés aux enfants, adolescents ou adultes. Ils ne sont pas adaptés pour son alimentation. Il doit être nourri avec du lait maternel ou, si la mère ne pe ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101545350</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/39a7bafb3f117a9b99311ecf1a3b99445874f25e1a88ed3c0799faae919b5e7e ]]></g:image_link>
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
<title><![CDATA[ Picot 3 Croissance Nature Lait 10 - 36 mois 800g ]]></title>
<g:id>1389987d-1e3c-4fab-a1c2-4226803e7ce4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-3 croissance nature lait 10 - 36 mois 800g?1389987d-1e3c-4fab-a1c2-4226803e7ce4 ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Lait 3ème âge Croissance nature de Picot</span>, une préparation en poudre riche en calcium, en fer et en vitamines adaptée à l'alimentation des bébés âgés de 10 mois à 3 ans. </p>
<div><span>Il apporte du </span><span>calcium et de la vitamine D</span><span>, qui sont des éléments essentiels pour un développement normal du squelette de l'enfant ainsi que pour sa croissance. Il contient également des </span><span>vitamines A et C</span><span>, qui participeront au bon fonctionnement de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101545367</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19b1ca54c2c779e7554e73b72037aac4c1825db1e97474daedfc9f90353a07ed ]]></g:image_link>
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
<title><![CDATA[ Picot AR 1 Lait 0 - 6 mois 800g ]]></title>
<g:id>8b3a9a3a-8836-4ed4-bc14-9e40c41e187e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-ar 1 lait 0 - 6 mois 800g?8b3a9a3a-8836-4ed4-bc14-9e40c41e187e ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Picot Expert AR 1er âge est un lait infantile adapté pour les enfants âgés de 0 à 6 mois. Il est spécialement conçu pour les bébés souffrant de régurgitations ou de reflux gastro-oesophagiens (RGO). En effet, il est épaissi avec de la caroube. Il apporte également du DHA, acide docosahexaénoïque, un acide gras essentiel à l'organisme.</span><br /><br /><span>Les régurgitations et les reflux gastro-oesophagiens surviennent généralement entre 0 et 12 mois. Ils sont dus à une alimentation  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101547576</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1eeba62077ba916a5103457eb57c3a5f9a9a25b2c21a9a66a641aa4f5cb0d6b4 ]]></g:image_link>
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
<title><![CDATA[ Picot AR 2 Lait 6 - 12 mois 800g ]]></title>
<g:id>9d336193-5b00-4302-8e5a-afeb14bddbed</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-ar 2 lait 6 - 12 mois 800g?9d336193-5b00-4302-8e5a-afeb14bddbed ]]></link>
<g:price><![CDATA[ 2250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Picot Expert AR 2 est une DADFMS*  spécialement élaborée pour aider à réduire les régurgitations de votre bébé grâce à son épaississement à la caroube. Ce produit ne convient pas aux nourrissons souffrant d’une allergie aux protéines de lait de vache.</p>
<p>PICOT Expert AR 2ème âge est destiné aux bébés de 6 à 12 mois.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101547705</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a1d59e12cc998aff3846d88fc1ff74033548b657953734205dd11906cd11242 ]]></g:image_link>
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
<title><![CDATA[ Picot Bébé Gourmand 2 Lait 6 - 12 mois 800g ]]></title>
<g:id>be5408b1-1879-4f2e-bb65-bb448efa7c39</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-bébé gourmand 2 lait 6 - 12 mois 800g?be5408b1-1879-4f2e-bb65-bb448efa7c39 ]]></link>
<g:price><![CDATA[ 1995.01 EUR ]]></g:price>
<description><![CDATA[ <p>Picot Bébé Gourmand 2ème âge est un lait de suite destiné aux bébés de 6 mois à 1 an dans le cadre d’une alimentation diversifiée.</p><p>Si bébé est un gourmand, sachez qu’il existe des formules pour faire face à ce type de situation, qui vous seront conseillées par votre professionnel de santé.</p><p>Picot bébé gourmand 2 est une formule qui a été conçue pour les petits gourmands, sans pour autant leur apporter des calories supplémentaires*</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101547927</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/84c26303b4bc7bc5f6c9bd05b74aea81043ef006d5f3b7a989b50713e5830562 ]]></g:image_link>
<g:product_type><![CDATA[ LAITS INFANTILES > LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Croissance nature 3 de 10 mois à 3 ans 850gr ]]></title>
<g:id>25007547-9b5d-4d23-ad38-0c8b23a06dcf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-croissance nature 3 de 10 mois à 3 ans 850gr?25007547-9b5d-4d23-ad38-0c8b23a06dcf ]]></link>
<g:price><![CDATA[ 1095.00 EUR ]]></g:price>
<description><![CDATA[ <p>PICOT Croissance propose une formule adaptée avec un goût nature : sans arôme et sans sucres ajoutés*, pour donner de bonnes habitudes alimentaires</p>
<p>*Contient des sucres naturellement présents.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102095588</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/df70674e584032b97596efd4b9d61eafc6aff19d978057c9afec5d4b200ed1fb ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAIT TROISIEME AGE > LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Magic Mix Poudre Epaississante dès la naissance 350g ]]></title>
<g:id>e349e9fd-bb8b-4d8b-b898-7f279ec4dee3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-magic mix poudre epaississante dès la naissance 350g?e349e9fd-bb8b-4d8b-b898-7f279ec4dee3 ]]></link>
<g:price><![CDATA[ 1394.99 EUR ]]></g:price>
<description><![CDATA[ <p>Magic Mix dès la naissance est adopté aux patients atteints de troubles de la déglutition ou ayant des problèmes du passage du bol alimentaire.<br>Magic Mix est un épaississant utilisable en pédiatrie au biberon en cas de reflux gastro-oesophagien.</p><p>Magic Mix est une poudre épaississante à base d'amidon de maïs:<br>- elle est neutre et n'altère pas le goût des liquides ou des préparations<br>- rapide et fiable: consistance obtenue en 2 minutes et stable, même après avoir été réchauffé<br ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101982766</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/834729182c47ff9ef611aec9e15fe8cef25c3164666be02103aa12cf07f14431 ]]></g:image_link>
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
<title><![CDATA[ Picot Mes 1ers Boudoirs Vanille dès 8 mois 6 sachets de 4 ]]></title>
<g:id>93ecde87-3a81-44f3-a9c9-9e1b6aa829df</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes 1ers boudoirs vanille dès 8 mois 6 sachets de 4?93ecde87-3a81-44f3-a9c9-9e1b6aa829df ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Mes 1ers Boudoirs Vanille des Laboratoires Picot, ont été spécialement élaborés pour faciliter la prise en main de bébé.</p><p>Leur taille et leur forme sont parfaitement&nbsp;adaptées à sa bouche. Leur texture, croquante et fondante, aide à la percée&nbsp;des dents, sans blesser ses gencives fragiles.</p><p>Les&nbsp;boudoirs Picot sont rigoureusement contrôlés à tous les stades de leur fabrication pour offrir à bébé l’assurance d’une qualité irréprochable.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551100266652</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2391d03811614438b0a64d59a2424bfff52a6ff0ced1c93ae33274d9f61d0a5 ]]></g:image_link>
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
<title><![CDATA[ Picot Mes Céréales Biscuit dès 6 mois 200g  ]]></title>
<g:id>5df4362c-c2c8-41fa-835a-c57994c76163</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes céréales biscuit dès 6 mois 200g ?5df4362c-c2c8-41fa-835a-c57994c76163 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Mes céréales Biscuit Picot</strong> sont des céréales&nbsp;instantanées au goût de<strong>&nbsp;biscuit</strong>, à reconstituer pour les bébés à partir de 6 mois. En effet, à cet âge, bébé est déjà initié à la diversification alimentaire, qui lui&nbsp;fait découvrir et apprécier de nouvelles textures et de nouvelles saveurs. Qui plus est, à mesure que bébé grandit, ses besoins nutritionnels évoluent simultanément. Il est donc indispensable de satisfaire ses besoins, tout en lui appor ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102149694</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d239d67f1bd2c5d6c1cdca0f0f657b2e4ff8d64ebe60782e2e9d306ee61da5c0 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Mes Céréales Miel dès 6 mois 200g  ]]></title>
<g:id>1d681cc9-ec0e-49e6-977a-ef233015a36b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes céréales miel dès 6 mois 200g ?1d681cc9-ec0e-49e6-977a-ef233015a36b ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour nourrissons à partir de 6 mois et enfants en bas âge. Les produits sont conditionnés sous atmosphère protectrice dans des sachets refermables de 200g contenus dans des étuis en carton.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102087422</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/11c7f361f9c96957909863d22d7ed3bfe39a8782674468feb4bcc6677ad3d26f ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Mes Céréales Multicéréales dès 6 mois 200g ]]></title>
<g:id>a6abbf99-ac0c-4134-9820-4befdda0781c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes céréales multicéréales dès 6 mois 200g?a6abbf99-ac0c-4134-9820-4befdda0781c ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Mes céréales Multicéréales&nbsp;Picot sont des céréales instantanées aromatisées à reconstituer. Elles sont destinées aux bébés à partir de 6 mois et aux enfants en bas âge. En effet,&nbsp;à mesure que bébé grandit, ses besoins nutritionnels évoluent. Qui plus est, la diversification alimentaire lui permet de découvrir de nouvelles textures et de nouvelles saveurs&nbsp;qui l'aideront à apprécier ses repas de demain.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102087415</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c9c4793cfcd83c20d626e949c190caa6a5fa37eb843b403c02cf1a2c0b3f3b45 ]]></g:image_link>
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
<title><![CDATA[ Picot Mes Céréales saveur Cacao dès 6 mois 200g  ]]></title>
<g:id>ba162620-1e6a-4733-8b83-ffea61f8573f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes céréales saveur cacao dès 6 mois 200g ?ba162620-1e6a-4733-8b83-ffea61f8573f ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Picot Mes céréales saveur cacao</strong> sont des céréales instantanées avec du cacao maigre. Elles sont destinées aux bébés à partir de 6 mois. Ces céréales à reconstituer peuvent être utilisées dans un biberon ou à l'assiette.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102087408</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/665a191e58afb014e458caa23f22810fb5618a5abdc6d2aa20453324d404675c ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Mes Céréales saveur Fruits dès 6 mois 200g  ]]></title>
<g:id>acb5dc8c-1675-4560-aba7-419cc66d47e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes céréales saveur fruits dès 6 mois 200g ?acb5dc8c-1675-4560-aba7-419cc66d47e0 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Picot Mes Céréales sont des céréales instantanées aromatisées à reconstituer pour nourrissons à partir de 6 mois et enfants en bas âge. Les produits sont conditionnés sous atmosphère protectrice dans des sachets refermables de 200g contenus dans des étuis en carton.<br>•Des ingrédients soigneusement sélectionnées<br>•Fermeture zip unique pour une Concervation Optimale<br>•Source de Calcium<br>•Source de Vitamines (A, D, C, B3, B6, B9<br>•Sans conservateurs (Conformément à la réglementation su ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102087439</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aab28d20fc7ae7e474a59c165d242006161772193478bc51c86da67e2d801f52 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Mes Céréales saveur Vanille dès 6 mois 200g ]]></title>
<g:id>ebd9f638-6dcb-4d33-a336-5f8ae0ae3643</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-mes céréales saveur vanille dès 6 mois 200g?ebd9f638-6dcb-4d33-a336-5f8ae0ae3643 ]]></link>
<g:price><![CDATA[ 299.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Picot Mes céréales saveur vanille&nbsp; - dès 6 mois - 200g </strong>sont des céréales instantanées aromatisées à reconstituer pour nourrissons à partir de 6 mois et enfants en bas âge.</p><p>Les produits sont conditionnés sous atmosphère protectrice dans des sachets refermables de 200g contenus dans des étuis en carton.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551102087392</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9d369af0c56f9ff10a3edeb47c9b601f4bfd5924a24fa7f39c567654fd01c4d5 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > Céréales > DIETETIQUE BEBE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Picot Pepti Junior Dessert Sans Lait Dès 6 mois Abricot 4 pots  ]]></title>
<g:id>033cabcd-71d6-4243-998b-273d791c1956</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-pepti junior dessert sans lait dès 6 mois abricot 4 pots ?033cabcd-71d6-4243-998b-273d791c1956 ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p><span>Dessert sans lait abricot Pepti Junior de Picot</span>, idéal pour initier sereinement les bébés dès 6 mois  à la diversification alimentaire tout en lui faisant plaisir. </p>
<div>
<div><span>Développés avec le plus grand soin, ces desserts sont garantis sans lait, sans lactose. </span></div>
<div></div>
<div><span>Au bon goût d’abricot, </span><span>ils permettront à Bébé de découvrir de nouveaux goûts et de nouvelles textures.</span></div>
</div>
<p>Fabriqué en France.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551100418105</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0c9028afb9dde842d9deb8709834c63a0b41cb242fd67e4894d92c23ccd4224d ]]></g:image_link>
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
<title><![CDATA[ Picot Pepti Junior Dessert Sans Lait Dès 6 mois Banane 4 pots ]]></title>
<g:id>96235f46-fe8b-4c5c-b619-738271d8443c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-pepti junior dessert sans lait dès 6 mois banane 4 pots?96235f46-fe8b-4c5c-b619-738271d8443c ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les pots de crème dessert Picot Pepti-Junior saveur banane</span><span>, sont spécialement conçus </span><span>sans lait</span><span> et sont destinés aux nourrissons et enfants en bas âge </span><span>intolérants au lactose et au lait</span><span>. Ils sont élaborés pour apporter une</span><span> saveur gourmande</span><span> à l’enfant dès 6 mois.</span><br /><br /><span>Picot a créé cette crème dessert pour les enfants allergiques aux protéines de lait de vache (APLV) afin de diversi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551100418112</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/504cd1bb3798d5ad393d16bc44e5ee976c9c8a8385102f60dd2f93ae13fa510d ]]></g:image_link>
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
<title><![CDATA[ Picot Pepti Junior Dessert Sans Lait Dès 6 mois Cacao 4 pots  ]]></title>
<g:id>2a8437da-c237-4750-b777-48410611e9b0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-pepti junior dessert sans lait dès 6 mois cacao 4 pots ?2a8437da-c237-4750-b777-48410611e9b0 ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>La&nbsp;crème dessert Picot Pepti-Junior saveur cacao&nbsp;est spécialement conçue&nbsp;sans lait. Leur texture crémeuse est destinée aux nourrissons à partir de 6 mois et enfants en bas âge&nbsp;intolérants au lactose de lait. Ce sont des aliments idéals pour commencer l’apprentissage de la&nbsp;diversification alimentaire.&nbsp;Les besoins nutritionnels de l’enfant évoluent entre 4 et 6 mois et il est normal de lui faire découvrir d’autres saveurs, d’autres goûts et d’autres textures. Le la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551100418082</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ad69f0dd02a859f442ae84391b00a9aff3b132f537eaa31320568b0c9ecd9963 ]]></g:image_link>
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
<title><![CDATA[ Picot Pepti Junior Dessert Sans Lait Dès 6 mois Fraise 4 pots ]]></title>
<g:id>2c6b3e02-775a-4198-b789-8b1ae9952063</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-pepti junior dessert sans lait dès 6 mois fraise 4 pots?2c6b3e02-775a-4198-b789-8b1ae9952063 ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les</span><span> crèmes dessert Picot pepti-junior saveur fraise</span><span> sont spécialement conçues </span><span>sans lait</span><span> et destinées aux nourrissons et enfants en bas âge i</span><span>ntolérants au lait et/ou au lactose.</span><br /><br /><span>Au moment de la diversification alimentaire, il est important de proposer à bébé des goûts et des saveurs différents en tenant compte des allergènes signalés. </span><span>Picot a créé une gamme</span><span> à visée spécifiqu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551100418099</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6af5ca215fd8eb3229b15d53c636bfbcb583e2239769ec6fbb6d7321b98aef85 ]]></g:image_link>
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
<title><![CDATA[ Picot Pepti-Junior Mes 1ers Boudoirs Sans Lait dès 8 mois 6 sachets ]]></title>
<g:id>80ffafae-b303-496a-8772-5e06278e32ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-pepti-junior mes 1ers boudoirs sans lait dès 8 mois 6 sachets?80ffafae-b303-496a-8772-5e06278e32ee ]]></link>
<g:price><![CDATA[ 489.99 EUR ]]></g:price>
<description><![CDATA[ <p>Mes 1ers boudoirs Picot Pepti-Junior ont été développés avec le plus grand soin : GARANTIS SANS LAIT, SANS LACTOSE, ces délicieux boudoirs ont une texture fondante, et un petit goût très agréable qui fera plaisir à bébé.</p>
<p>AVIS IMPORTANT : Vous pouvez donner Mes 1ers boudoirs sans lait à votre bébé s’il :<br />• se tient maintenant assis tout seul dans sa chaise bébé,<br />• mange des plats avec des petits morceaux,<br />• mange un morceau de pain.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551100751189</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/19b3ff77cca932da94249584c1752482dacbf34dd843f3b9ac9019f41f3df2c0 ]]></g:image_link>
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
<title><![CDATA[ Picot Picogest 2 Lait 6 - 12 mois 800g ]]></title>
<g:id>c532e738-8d1e-4599-be4e-c9bc30f5fb17</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/picot-picogest 2 lait 6 - 12 mois 800g?c532e738-8d1e-4599-be4e-c9bc30f5fb17 ]]></link>
<g:price><![CDATA[ 1760.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Lait 2ème âge Picogest 2 de Picot Expert</span>, un lait de suite épaissie à l’amidon adapté aux bébés de 6 mois à 1 an dans le cadre d’une alimentation diversifiée.</p>
<div><span>L'amidon permet de rendre le lait plus épais.Il peut nécessiter l'utilisation d'une tétine adaptée. </span></div>
<div></div>
<div><span><span>Le lait Picot Picogest 2e âge répond aux besoins spécifiques de l'enfant à cette période de sa vie. Il contient notamment du DHA, un acide gras de la famille des </spa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3551101547941</g:gtin>
<g:brand><![CDATA[ PICOT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65bc535c41ae0b032c0a275180328ec0e1a0c3365309df8156cd33a02c6284fe ]]></g:image_link>
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
<title><![CDATA[ Pierre Fabre Dexeryl crème 250g ]]></title>
<g:id>e4394450-43be-4d3f-b216-aaa0b37839f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pierre-fabre dexeryl crème 250g?e4394450-43be-4d3f-b216-aaa0b37839f0 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Répare et hydrate durablement les peaux sèches ou atopiques, notamment dans le cas de certaines dermatoses (dermatite atopique, ichtyoses…) ou d'érythèmes induits par radiothérapie.</p><p>Sa formule traite les symptômes de la peau sèche et crée un film protecteur qui évite la déshydratation et aide à protéger la peau des agressions extérieures.</p><p>Sans parfum, elle permet de limiter et de prévenir les irritations.</p><p>Sans paraben.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3573994006589</g:gtin>
<g:brand><![CDATA[ PIERRE FABRE HYGIENE SOIN ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b78bd2951c348f5a496bdecb7026b2a882831c57cf922faff3d4c486806b9823 ]]></g:image_link>
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
<title><![CDATA[ PilEJE Formag Magnésium Marin 90 comprimés + 30 offerts ]]></title>
<g:id>385411a0-b2d5-49fc-8216-b33c5540a95c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-formag magnésium marin 90 comprimés + 30 offerts?385411a0-b2d5-49fc-8216-b33c5540a95c ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formag Magnésium marin est destiné aux personnes ayant besoin de renforcer leur apport en magnésium, un minéral essentiel pour l'organisme.</p><p>Le magnésium contribue au fonctionnement normal du système nerveux et à réduire la fatigue.</p><p>La vitamine B6 contribue à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601943</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/986df2a560c75e660439f21adfbbbd994e25d0473528a8414da1637787592c1c ]]></g:image_link>
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
<title><![CDATA[ Pilege Unibiane Iode 120 comprimés  ]]></title>
<g:id>2ca9b648-738f-4b7c-8e25-bae4c67560dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pilege-unibiane iode 120 comprimés ?2ca9b648-738f-4b7c-8e25-bae4c67560dc ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Unibiane Iode est destiné aux personnes ayant le besoin de maintenir leur fonction thyroïdienne grâce à sa composition à base d'iode.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600380</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/818c26cf8d27c18394d9f2433491757fae1cef27c1e201521be239b026d36455 ]]></g:image_link>
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
<title><![CDATA[ Pileje Androbiane Protect 60 comprimés ]]></title>
<g:id>28c25af5-1846-4a86-89ef-6db14c8206ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-androbiane protect 60 comprimés?28c25af5-1846-4a86-89ef-6db14c8206ca ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Androbiane Protect permet de maintenir le confort masculin grâce à sa composition à base d'extraits de pépins de courge et de racines d'ortie.</p><p>Les pépins de courge contribuent au bon fonctionnement de la prostate.</p><p>Les racines d’ortie contribuent aux fonctions d’élimination.</p><p>La vitamine E et le sélénium contribuent à protéger les cellules contre le stress oxydatif.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600151</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b5f60cbc32543283083807be1f9503136f14d14f331c7178d3fdfa6c464d4e01 ]]></g:image_link>
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
<title><![CDATA[ Pileje Astemag 20 sticks ]]></title>
<g:id>057d17da-8362-4422-b136-0ddf131929de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-astemag 20 sticks?057d17da-8362-4422-b136-0ddf131929de ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>La formule complète d'Astemag apporte notamment du <strong>magnésium qui contribue au fonctionnement normal du système nerveux ainsi que de la vitamine B6 pour réduire la fatigue</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401547456881</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b560adf78cb6904cf246f2da87e57010a1563f1aab2f404e801691decb9162a7 ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol AB 30 Capsules ]]></title>
<g:id>257fdde0-de99-44fd-b6fc-6d046bad0f36</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol ab 30 capsules?257fdde0-de99-44fd-b6fc-6d046bad0f36 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol AB est un complément alimentaire à base d'huile de cameline et d'huiles essentielles d'eucalyptus, de cannelle, de romarin et de citron.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577875522</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c06f6a0be723a7eb6834a7e96a1121b3f02c2718b08d6dc9f3a5eeb42358687 ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol ALR 30 comprimés ]]></title>
<g:id>e4330a86-68cc-405c-b4fb-d108e5e82859</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol alr 30 comprimés?e4330a86-68cc-405c-b4fb-d108e5e82859 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol ALR a été développé pour accompagner les personnes dont le système immunitaire peut être impacté par l'arrivée du printemps, grâce à une association unique d’extrait de plantain, d’une souche microbiotique et de zinc.</p><p>Le zinc contribue au fonctionnement normal du système immunitaire.</p><p>Souche microbiotique sélectionnée, et dosée à 4 milliards par comprimé : <em>Latilactobacillus sakei</em> LA907 tyndallisée</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690497</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4a8ed334b0c6e5361f63d1e0864c5e344d6800873c2140dcad3f697bdb5fee14 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Azéol ALR Flash 30 comprimés ]]></title>
<g:id>1a467499-794d-4e3b-ba24-b8eb11ee98e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol alr flash 30 comprimés?1a467499-794d-4e3b-ba24-b8eb11ee98e1 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol ALR Flash a été développé pour accompagner les personnes dont le système immunitaire est sollicité à l'arrivée du printemps, grâce à une association d’extraits de plantain et de cassis et de zinc.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690503</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36375e08ac4169cfb08871ac3d7c23a7f3dd09790147f64772ae90a859d67f17 ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol AV 15 comprimés ]]></title>
<g:id>1c55bee6-59ce-4c22-8521-691df1bbf207</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol av 15 comprimés?1c55bee6-59ce-4c22-8521-691df1bbf207 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol AV est un complément alimentaire à base d’extrait de cyprès et de zinc.</p><p>Le zinc contribue au fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690190</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/87ace9cdb9a1a93083607fbd1ecdbf84b38908710d7b7ff66cbeef4f01fa04ed ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol DM  Rhume Rhinite Enfant Spray Nasal 20ml ]]></title>
<g:id>52e580ba-8c8f-4ee2-ac2d-a50fb3226f95</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol dm  rhume rhinite enfant spray nasal 20ml?52e580ba-8c8f-4ee2-ac2d-a50fb3226f95 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol DM Rhume Rhinite Enfant est destiné à nettoyer et humidifier le nez des enfants de plus de 2 ans, en cas de rhume ou de rhinite.</p><p><em>Ce dispositif médical est disponible uniquement en pharmacie.</em></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640149724202</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5e4b6ada79c54e1fa20426c7158eedd6e07cd75a178fc05b34b2b6d4e52ef801 ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol DM Rhinite Rhinosinusite Spray Nasal 20 ml ]]></title>
<g:id>281a9b56-aacd-45aa-8be6-07c28de3a698</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol dm rhinite rhinosinusite spray nasal 20 ml?281a9b56-aacd-45aa-8be6-07c28de3a698 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol DM Rhinite Rhinosinusite permet de traiter les symptômes nasaux de la rhinite aigüe et de la rhinosinusite.&nbsp;</p><p><em>Ce dispositif médical est disponible uniquement en pharmacie.</em></p><p>Nettoyage et décongestion efficace de la muqueuse nasale : il réduit la sensation de nez bouché.</p><p>Activité antivirale, antibactérienne et anti-biofilm du Symbiofilm®</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640149724219</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2dc6afee28a3107996fca31766cb8f6347c7649bc75aa3ea701adefa79e7aace ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol Gorge 30 comprimés à sucer goût menthe ]]></title>
<g:id>b38cf0c4-1be3-40ed-a7cc-f9d69942fc71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol gorge 30 comprimés à sucer goût menthe?b38cf0c4-1be3-40ed-a7cc-f9d69942fc71 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol Gorge Comprimés à sucer goût menthe est composé d’extrait de sauge, d’extrait de sureau et de zinc.</p><p>La sauge aide à adoucir la gorge.</p><p>Le zinc contribue à un fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600243</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09e623343c6e04f5b90b2324c24071954872e49cb6405fa9297a5425c251497e ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol Gorge 30 comprimés à sucer goût miel citron ]]></title>
<g:id>21ce83c7-dc51-4736-ac05-0e4d9c3f03ef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol gorge 30 comprimés à sucer goût miel citron?21ce83c7-dc51-4736-ac05-0e4d9c3f03ef ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol Gorge Comprimés à sucer goût miel citron est composé d’extrait de sauge, d’extrait de sureau et de zinc.</p><p>La sauge aide à adoucir la gorge.</p><p>Le zinc contribue à un fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690640</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8e975cb48c1b3a8dea2d145267948e1b13caece8a8ea2615387b1602b6a18d7 ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol Gorge Spray 15 ml ]]></title>
<g:id>0c600d4b-fa19-48dc-a93f-7a52b69edc64</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol gorge spray 15 ml?0c600d4b-fa19-48dc-a93f-7a52b69edc64 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol Gorge Spray&nbsp;est composé de miel, d'extrait de sauge, d'extrait de sureau et de zinc. Au goût naturel de menthe.</p><p>La sauge aide à adoucir la gorge.</p><p>Le zinc contribue à un fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401562465875</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/652ccb7091f47ee75be62f82fb99c45920a446ab04c8e13d294976334b55901a ]]></g:image_link>
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
<title><![CDATA[ Pileje Azéol Sirop Toux Sèche 75 ml ]]></title>
<g:id>d23da3ec-65b0-46c1-a9e9-293e320d02a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-azéol sirop toux sèche 75 ml?d23da3ec-65b0-46c1-a9e9-293e320d02a3 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Azéol Sirop Toux sèche est composé de miel et d'extraits de thym, de plantain et de guimauve.</p><p>Le thym est bon pour les voies respiratoires et il adoucit la gorge.</p><p>L’huile essentielle de petit grain de bigarade donne un goût agréable au sirop.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690091</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2a8ec282bd4e4ed7e603823772af2a11cac1ad3e8b9b747b19e0230c65c8e7c ]]></g:image_link>
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
<title><![CDATA[ Pileje BabyBiane Imédia 7 sachets ]]></title>
<g:id>f65ae179-e7e5-47ec-b910-4bc3f5c421a0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-babybiane imédia 7 sachets?f65ae179-e7e5-47ec-b910-4bc3f5c421a0 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Babybiane Imedia est spécialement formulé pour les besoins nutritionnels des enfants dès la naissance en cas de gastroentérite aiguë ou diarrhée associée aux antibiotiques.<br>Babybiane Imedia apporte 1 souche microbiotique dosée à 10 milliards par sachets :&nbsp;<em>Lactobacillus rhamnosus&nbsp;</em>GG LA801</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600076</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/872509245db719b85939cee0dac5f770af5a0d294953b7bd32d91906f9fd6d15 ]]></g:image_link>
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
<title><![CDATA[ Pileje Babybiane Acolia 90ml ]]></title>
<g:id>4c91a9a0-e85d-41db-8128-55e570b2b245</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-babybiane acolia 90ml?4c91a9a0-e85d-41db-8128-55e570b2b245 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Destiné aux enfants dès la naissance, Babybiane Acolia est composé d’une souche microbiotique dosée à 1 milliard par jour et d’infusions de mélisse et camomille.&nbsp;</p><p>Souche microbiotique sélectionnée : <em>Lactobacillus gasseri </em>LA709 tyndallisée</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601080</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0450fba3832e357fdb95aa0ac16277e330e9fe49ca6916d4d3f1d2e8dc41f3ca ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > DIGESTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Biofilm 14 sachets ]]></title>
<g:id>0c9bfe1b-7315-4d94-833d-dff7d7569644</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-biofilm 14 sachets?0c9bfe1b-7315-4d94-833d-dff7d7569644 ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Les fibres alimentaires sont constituées d’un enchaînement de molécules de sucres (appelées polysaccharides) qui ne peuvent pas être digérées et absorbées par l’organisme humain.</p><p>Elles progressent donc intactes au sein de l’appareil digestif haut, résistant aux différents processus de dégradation de la digestion (action des sucs gastriques, libération des enzymes digestives…).</p><p>Ces fibres sont utiles pour le bon fonctionnement de l'organisme et notamment de l'<strong>écosystème int ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560505597</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/12278c0fb916cd60b6c6551e84b69c38b7e26db25267e749ca004ea6f17f881a ]]></g:image_link>
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
<title><![CDATA[ Pileje C Biane Acérola 60 comprimés ]]></title>
<g:id>e32aaac2-93f6-42ea-84d9-16da9ba05c26</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-c biane acérola 60 comprimés?e32aaac2-93f6-42ea-84d9-16da9ba05c26 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vitamine C est une vitamine liposoluble dans l'eau qui intervient dans de nombreux mécanismes physiologiques :</p><ul><li><p>Elle contribue au fonctionnement normal du système immunitaire ;</p></li><li><p>Elle contribue à réduire la fatigue ;</p></li><li><p>Elle contribue à protéger les cellules contre le stress oxydatif.</p></li></ul><p>Cependant, l'organisme ne sait pas la synthétiser.&nbsp;Cette vitamine doit donc être apportée au quotidien par l'alimentation&nbsp;en consommant par exem ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401529507921</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4e7e60da0e4250bd45abebc241ea75d893a08489712e107262094507ea30e0c0 ]]></g:image_link>
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
<title><![CDATA[ Pileje Calcibiane 30 sachets ]]></title>
<g:id>ac2ba8a9-7f6e-4b98-a704-b1308e8d27ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-calcibiane 30 sachets?ac2ba8a9-7f6e-4b98-a704-b1308e8d27ec ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Calcibiane permet d'apporter une complémentation en calcium aux personnes qui ont des besoins augmentés.</p><p>Goût Citron</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576293105</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18764d527805c7a44424a29f9c94b47d8d8e13b0d4d81dd60786a9acccf56c71 ]]></g:image_link>
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
<title><![CDATA[ Pileje Cartimotil Structure 60 comprimés ]]></title>
<g:id>2a8ac635-7df6-47ec-b55c-87ea92112730</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-cartimotil structure 60 comprimés?2a8ac635-7df6-47ec-b55c-87ea92112730 ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cartimotil Structure est destiné à accompagner les personnes ayant besoin de maintenir leur cartilage, grâce au manganèse qui contribue à la formation normale de tissus conjonctifs dont le cartilage et à la protection des cellules contre le stress oxydatif. Il est aussi composé de MSM et de sulfate de chondroïtine.</p><p>Le manganèse contribue à la formation normale de tissus conjonctifs dont le cartilage.</p><p>Le manganèse contribue à la protection des cellules contre le stress oxydatif.</p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600564</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dcab7bea2c401f7a0136bbb27a926ee0ebc857de16193ab14677365e08b7eedc ]]></g:image_link>
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
<title><![CDATA[ Pileje Chronobiane Immédiat Spray 20ml ]]></title>
<g:id>11bdfa6c-b9df-4b0a-983f-d5ac945dd797</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-chronobiane immédiat spray 20ml?11bdfa6c-b9df-4b0a-983f-d5ac945dd797 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chronobiane Immediat est spécialement formulé pour répondre aux besoins des personnes ayant des rythmes de sommeil désynchronisés comme le décalage horaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560256789</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40155b791f87246ddfe6a512a5526fcb72bb99533d58981deced110c74c1a7c2 ]]></g:image_link>
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
<title><![CDATA[ Pileje Chronobiane LP 1.9 mg 60 comprimés ]]></title>
<g:id>127142de-e9f5-4ebe-8302-fd7c012bd5d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-chronobiane lp 1.9 mg 60 comprimés?127142de-e9f5-4ebe-8302-fd7c012bd5d5 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<div class="description wysiwyg-rendering">
<p>Chronobiane LP 1,9 mg est destiné aux personnes qui présentent un sommeil très fragmenté. Chronobiane LP 1,9 mg contribue au ré-endormissement.</p>
</div>
<div class="list-informations">
<div class="card-information info orange">
<div class="informations wysiwyg-rendering">
<p>L’effet bénéfique est obtenu par la consommation d’au moins 1 mg de mélato ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600229</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8abdb191b0d9efc4289229df8c86111e07d3c92fbb93c9fecc0d61ff7bfb82f7 ]]></g:image_link>
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
<title><![CDATA[ Pileje Chronobiane LP 1mg 60 comprimés ]]></title>
<g:id>2a6b521e-775a-4466-9a99-4a67b6f04fc0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-chronobiane lp 1mg 60 comprimés?2a6b521e-775a-4466-9a99-4a67b6f04fc0 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chronobiane LP 1 mg est destinée aux personnes qui présentent un réveil nocturne ou des difficultés à s'endormir, grâce à sa composition à base de mélatonine à libération prolongée.</p><p>La mélatonine contribue à réduire le temps d’endormissement. L’effet bénéfique est obtenu par la consommation d’au moins 1 mg de mélatonine avant le coucher.</p><p>Le magnésium contribue à réduire la fatigue.</p><p>La vitamine E contribue à protéger les cellules contre le stress oxydatif.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560256772</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0e73d3121bb80cca7f7cdb5313ba9b2886f397600d28f83c0683f1f33127dcb1 ]]></g:image_link>
<g:product_type><![CDATA[ SANTE > STRESS ET SOMMEIL ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Chronobiane Mélatonine 1 mg 30 comprimés sécables ]]></title>
<g:id>d758bb89-d5d1-4064-83d7-c28027a9d8bb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-chronobiane mélatonine 1 mg 30 comprimés sécables?d758bb89-d5d1-4064-83d7-c28027a9d8bb ]]></link>
<g:price><![CDATA[ 775.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chronobiane Mélatonine 1 mg est destinée aux personnes présentant des difficultés d’endormissement, notamment en cas de retard de phase.</p><p>La mélatonine contribue à réduire le temps d’endormissement. L’effet bénéfique est obtenu par la consommation d’au moins 1 mg de mélatonine avant le coucher.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560256284</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/76e74c6af21c139299c3348ab29d9b3955bffbdc0614ce5779817e18322df909 ]]></g:image_link>
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
<title><![CDATA[ Pileje Chronobiane Protect LD 1,9 mg 45 comprimés ]]></title>
<g:id>547e0b5d-b252-431f-9701-0c89fc59fe76</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-chronobiane protect ld 1,9 mg 45 comprimés?547e0b5d-b252-431f-9701-0c89fc59fe76 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Chronobiane Protect LD 1,9 mg est destiné aux personnes ayant un réveil précoce ou des difficultés à se rendormir en fin de nuit grâce à sa technologie exclusive de libération différée de la mélatonine.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600830</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8b9ad7ebb3ca3cfcbf0bfe4ed8ec9efb54b271a363df0a2b87bcc8f212f6d954 ]]></g:image_link>
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
<title><![CDATA[ Pileje Coracol 150 comprimés ]]></title>
<g:id>e10479a9-9643-4012-9ca2-98e6314fc3f5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-coracol 150 comprimés?e10479a9-9643-4012-9ca2-98e6314fc3f5 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Coracol est un complément alimentaire à base de monacoline K issue de levure de riz rouge, de policosanols et de coenzyme Q10.</p><p>La levure de riz rouge est un champignon microscopique, Monascus purpureus, cultivé en Chine depuis des siècles. D’un rouge intense, elle y est utilisée comme colorant alimentaire et comme ingrédient dans la préparation de nombreux condiments, sauces et légumes marinés, par exemple. Elle est riche en amidon, en acides gras, en phytostérols, en isoflavones et en  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601011</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/afc5ea500b43080ccf46fe86aab065ae9370ad1129f320b0e729f2f19225c0b9 ]]></g:image_link>
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
<title><![CDATA[ Pileje D3 Biane 1000UI 30 Capsules ]]></title>
<g:id>dfb25778-b4c0-44e4-8e9e-49c36f208658</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-d3 biane 1000ui 30 capsules?dfb25778-b4c0-44e4-8e9e-49c36f208658 ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>D3 Biane Capsule 1000 UI permet d’apporter la dose journalière recommandée en vitamine D.</p><p>La vitamine D contribue au fonctionnement normal du système immunitaire et au maintien d’une ossature normale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600786</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/340e97558897308ed6a3a48701673ebcb08e4049766ef32102da762758eac525 ]]></g:image_link>
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
<title><![CDATA[ Pileje D3 Biane Gouttes 20ml ]]></title>
<g:id>500559f8-94f7-4278-b49e-6ea3a48a4bf6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-d3 biane gouttes 20ml?500559f8-94f7-4278-b49e-6ea3a48a4bf6 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>D3 Biane Gouttes permet de compléter ses apports en vitamine D.</p><p>La vitamine D contribue au maintien d'une ossature normale et au fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528537417</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38fe57dcd7d3b89ec370d847aa1689cb920f1da32d842004f8f8cf300c5c40bb ]]></g:image_link>
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
<title><![CDATA[ Pileje D3 Biane Spray 20 ml ]]></title>
<g:id>e4978b4a-54ba-4e78-a588-38db9d4f28c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-d3 biane spray 20 ml?e4978b4a-54ba-4e78-a588-38db9d4f28c0 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>La vitamine D est essentielle au bon fonctionnement de l'organisme car elle joue un rôle important dans le <strong>renforcement de notre système immunitaire</strong>. Elle contribue au <strong>maintien d'une ossature et d'une dentition normale</strong>.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600618</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/307b84f1f9eddcb6849f31c561c090602d22cc96d6df0b01b62beb97c5ad36e6 ]]></g:image_link>
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
<title><![CDATA[ Pileje Dermobiane Age Protect 60 capsules ]]></title>
<g:id>c0cf27df-8b21-4616-8c42-418f6a9cee0d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-dermobiane age protect 60 capsules?c0cf27df-8b21-4616-8c42-418f6a9cee0d ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dermobiane Age Protect permet de maintenir une peau normale grâce à sa composition à base de zinc.</p><p>Le zinc contribue au maintien d’une peau normale.</p><p>Le zinc, manganèse et sélénium qui contribuent à protéger les cellules contre le stress oxydatif.</p><p>Le manganèse contribue à la formation normale des tissus conjonctifs.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700410500035</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4782aa08c0646ebd8ab9547675daa7ecea24ae9f3728fc09a7a6267d36b9f269 ]]></g:image_link>
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
<title><![CDATA[ Pileje Dermobiane Cheveux et Ongles 40 gélules ]]></title>
<g:id>4efb7d3f-33a7-4781-abc1-1ce7f69301ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-dermobiane cheveux et ongles 40 gélules?4efb7d3f-33a7-4781-abc1-1ce7f69301ec ]]></link>
<g:price><![CDATA[ 2075.00 EUR ]]></g:price>
<description><![CDATA[ <p>ermobiane Cheveux &amp; Ongles permet d'accompagner le cycle de vie des cheveux et des ongles, grâce à sa composition à base de zinc, sélénium et de biotine.</p><p>Le zinc et le sélénium contribuent au maintien d'ongles normaux.</p><p>Le cuivre contribue à la pigmentation normale des cheveux.</p><p>La biotine, le sélénium et le zinc contribuent au maintien de cheveux normaux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401542343384</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ca061fd95c7de91f9141b3670a83f432ef497d9803d56c1ed76573343509735 ]]></g:image_link>
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
<title><![CDATA[ Pileje Digebiane RFx 20 comprimés à croquer ]]></title>
<g:id>0b908004-dc23-43d6-bb47-f24aebd522fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-digebiane rfx 20 comprimés à croquer?0b908004-dc23-43d6-bb47-f24aebd522fd ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Digebiane RFx est une solution pour favoriser une digestion normale, grâce à sa composition en vitamine B2 et calcium.</p><p>La vitamine B2 contribue au maintien des muqueuses normales telles que les muqueuses digestives.</p><p>Le calcium contribue au fonctionnement normal des enzymes digestives.</p><p>Goût Menthe</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145650255</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f367861983103096173ebb378afe8699a49a34923f4ff993760960e92a81d46 ]]></g:image_link>
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
<title><![CDATA[ Pileje Digebiane sBO 20 comprimés ]]></title>
<g:id>640e8a9b-d702-4f29-9a3e-5cbebc4791ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-digebiane sbo 20 comprimés?640e8a9b-d702-4f29-9a3e-5cbebc4791ec ]]></link>
<g:price><![CDATA[ 1415.00 EUR ]]></g:price>
<description><![CDATA[ <p>Digebiane sBO est destiné à accompagner les personnes rencontrant des inconforts digestifs grâce à sa composition en vitamine B2.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601219</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74db7fa16a3f1736be8eb74ec6b87231483b590ae7590bffa25a053ae00a493c ]]></g:image_link>
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
<title><![CDATA[ Pileje Dynabiane Start 30 Gélules ]]></title>
<g:id>64aed50e-a7f9-478a-abfc-a0f133058570</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-dynabiane start 30 gélules?64aed50e-a7f9-478a-abfc-a0f133058570 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Dynabiane Start est destiné aux personnes sujettes à la fatigue matinale, et ayant besoin de démarrer leurs journées avec davantage d’énergie, grâce à sa composition à base de tyrosine, ginseng, guarana et cuivre associés aux vitamines B6, B9, B12 et C.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601356</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/08a89894089b573b8163372c9b4db7ed7f9edbb8aee756a587cbdea7b0f722ab ]]></g:image_link>
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
<title><![CDATA[ Pileje Enabiane 28 sticks ]]></title>
<g:id>077243ad-e218-4c11-a379-01549275f224</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-enabiane 28 sticks?077243ad-e218-4c11-a379-01549275f224 ]]></link>
<g:price><![CDATA[ 1798.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enabiane est destiné aux personnes qui souhaitent optimiser leurs apports nutritionnels en minéraux dans les situations d'alimentation déséquilibrée.</p><p>L’alimentation contemporaine est caractérisée par une offre très importante en produits transformés, pauvres en micronutriments.</p><p>Or, le bon fonctionnement de l’organisme passe par une alimentation constituée d’une grande diversité de nutriments et micronutriments.</p><p>Dans certaines situations (alimentation déséquilibrée, consommat ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401595790944</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8f5f03db9f556236ba2c07fee24ef8ec33f329736e385bebba8261a1b0f6dda ]]></g:image_link>
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
<title><![CDATA[ Pileje Feminabiane CBU 30 comprimés ]]></title>
<g:id>03682ae3-c04d-4fb9-a118-06abf2783a13</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane cbu 30 comprimés?03682ae3-c04d-4fb9-a118-06abf2783a13 ]]></link>
<g:price><![CDATA[ 1699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feminabiane CBU est un complément alimentaire formulé avec des extraits de canneberge, de cannelle et 2 souches probiotiques dosées à 5 milliards pour 2 comprimés.</p><p><strong>Souches probiotiques sélectionnées :</strong><em> Lactobacillus helveticus</em> LA401 ; <em>Lactiplantibacillus plantarum</em> LA402</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600526</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c0d78973ce45801ff578dd6a58ff379f94a5e0e051c52a20c162bb00c7f2b2df ]]></g:image_link>
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
<title><![CDATA[ Pileje Feminabiane CBU Flash 20 Comprimés ]]></title>
<g:id>6f8fd5e6-f7e1-4ab1-a61d-e89549c14bd3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane cbu flash 20 comprimés?6f8fd5e6-f7e1-4ab1-a61d-e89549c14bd3 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pour répondre aux besoins des femmes, le Laboratoire PiLeJe a développé Feminabiane CBU Flash qui se compose :</p><ul><li><p>De 3 huiles essentielles (Cannelle, Girofle et Sarriette des montagnes)</p></li><li><p>D'extrait de cumin</p></li><li><p>D’extraits de bruyère (125 mg par comprimé) qui contribue à des fonctions urinaires normales.&nbsp;</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600472</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8000bc6e08642c932f7f95a776ac8085383e2b385133e0ebce1d3cd6d4e15106 ]]></g:image_link>
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
<title><![CDATA[ Pileje Feminabiane Fer 60 gélules ]]></title>
<g:id>5de57160-d181-4225-b81f-a586abc11379</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane fer 60 gélules?5de57160-d181-4225-b81f-a586abc11379 ]]></link>
<g:price><![CDATA[ 1415.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feminabiane Fer est destiné aux femmes ayant besoin de compléter leurs apports en fer.</p><p>Le fer contribue à réduire la fatigue.</p><p>Le fer contribue à la formation normale de globules rouges et d’hémoglobine.</p><p>Le cuivre contribue au transport normal du fer dans le corps.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600663</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/07a8a1c40d780076c111c5aef4c042d9303f60f5770313bfebe9a501da0564ad ]]></g:image_link>
<g:product_type><![CDATA[ FEMME  > SANTÉ PREVENTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Feminabiane Intima 20 gélules ]]></title>
<g:id>9a44e337-ba48-4cbf-8416-cbad2419f41e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane intima 20 gélules?9a44e337-ba48-4cbf-8416-cbad2419f41e ]]></link>
<g:price><![CDATA[ 1590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le microbiote vaginal, aussi appelé la flore vaginale, est composé de 90 à 95 % de lactobacilles. Grâce à la production d’acide lactique, ces lactobacilles stabilisent le pH physiologique du vagin.</p><p>La flore vaginale peut être altérée pour différentes raisons telles que des changements hormonaux, des troubles métaboliques, le stress, l’utilisation de produits hygiéniques inadaptés, des interventions chirurgicales ou la prise de médicaments1.</p><p><strong>Pour accompagner les femmes dans ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601097</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d229c0336c9e4778a44a0b04bb147ee1a5f1ba3e8e37c624d0002291cd7f9084 ]]></g:image_link>
<g:product_type><![CDATA[ FEMME  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Feminabiane Intima Topique 15 ml ]]></title>
<g:id>6b67c244-fa33-4d52-978c-652634be3ac1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane intima topique 15 ml?6b67c244-fa33-4d52-978c-652634be3ac1 ]]></link>
<g:price><![CDATA[ 1199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feminabiane Intima topique est une crème protectrice et apaisante destinée à accompagner les femmes dans leur besoin de confort intime, en protégeant l’équilibre du microbiote vulvaire.&nbsp;</p><p><strong>Souches probiotiques sélectionnées </strong>:<em> Lactobacillus helveticus</em> LA401 ; <em>Lactobacillus gasser</em>i LA806</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600878</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/110b6618a4403d6870e1433a95f4bb7a70dced71c75801d6b2a635cc8d6be1c6 ]]></g:image_link>
<g:product_type><![CDATA[ FEMME  ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Feminabiane Méno'Confort 30 comprimés ]]></title>
<g:id>5a1bbae5-378f-4fd7-ba04-46d45389d8af</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane méno'confort 30 comprimés?5a1bbae5-378f-4fd7-ba04-46d45389d8af ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feminabiane Meno'confort est formulé à base de rhodiole, d'extrait d’actée à grappes noires et de vitamines (D3, B6, acide folique et B12) pour accompagner les femmes durant la période de la ménopause.</p><p>L'extrait d’actée à grappes noires contribue à une ménopause plus sereine.</p><p>La rhodiole aide à améliorer l’humeur.</p><p>La vitamine B6 contribue à réguler l’activité hormonale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560223804</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/454b75e46f6ff2b4e00d07ed3ab9ca5b44d7463e59d175327553b8801689b7c6 ]]></g:image_link>
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
<title><![CDATA[ Pileje Feminabiane SPM 80 gélules ]]></title>
<g:id>2894ad1e-f543-4ce5-bd6c-3edb99aab035</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-feminabiane spm 80 gélules?2894ad1e-f543-4ce5-bd6c-3edb99aab035 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feminabiane SPM est composé d'huiles vierges de bourrache et d'onagre et de tryptophane.</p><p>La bourrache est une plante originaire de Syrie, aujourd'hui cultivée en Europe méridionale et centrale.</p><p>L'onagre est une plante herbacée originaire d'Amérique du Nord.</p><p>Les graines d'onagre et de bourrache contiennent de l'acide gamma-linolénique (GLA), un acide gras de la famille des oméga 6.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401553707823</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/923f7fe7525cc73cef092918c9445fab606be14d21510ea7f03585c7de43a339 ]]></g:image_link>
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
<title><![CDATA[ Pileje Fermentine Résistance 6 sachets de ferments + 6 sachets de poudre de lait ]]></title>
<g:id>dcb58032-1a8a-42d5-9c41-6666eb63a17e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-fermentine résistance 6 sachets de ferments + 6 sachets de poudre de lait?dcb58032-1a8a-42d5-9c41-6666eb63a17e ]]></link>
<g:price><![CDATA[ 2195.00 EUR ]]></g:price>
<description><![CDATA[ <p>Fermentine Résistance est une préparation pour laits fermentés maigres destinée à toute la famille, formulée à base de 3 souches probiotiques dosées à plus de 100 milliards par pot.</p><p>Préparation pour 36 pots </p><p>Saveur neutre</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760142290390</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/29e9428429fbd2a5d3a5869ea9af11fd3cb6371f00715317cd4e383687ac5081 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > SANTE > DIGESTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Formag Enfant Magnésium Marin 20 sticks ]]></title>
<g:id>73aa24e3-eb0b-455c-9e24-b754aadf5451</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-formag enfant magnésium marin 20 sticks?73aa24e3-eb0b-455c-9e24-b754aadf5451 ]]></link>
<g:price><![CDATA[ 915.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le magnésium est un minéral incontournable présent dans presque toutes nos cellules ainsi que dans de nombreux aliments (chocolat, fruits secs, fruits de mer...).</p><p>Participant au fonctionnement de plus de 300 enzymes et considéré comme le minéral de l’énergie, il est essentiel à l’organisme. Pour autant, son apport est largement inférieur aux recommandations. Cette insuffisance peut notamment s’expliquer par :</p><ul><li><p>Un rythme de vie de plus en plus soutenu augmentant les besoins. ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600212</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/08443cdda69b56125bd432e547c12dd33733b59711e2374ab6f51fc290c33c28 ]]></g:image_link>
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
<title><![CDATA[ Pileje Formag Fort 15 Sticks ]]></title>
<g:id>96aa01e7-b203-4f1c-bca1-20bc02ff0dce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-formag fort 15 sticks?96aa01e7-b203-4f1c-bca1-20bc02ff0dce ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formag Fort est destiné aux personnes ayant besoin d’une complémentation concentrée en magnésium, notamment en situation de stress passager, face à une période d’activité physique soutenue ou encore pour l’équilibre électrolytique.&nbsp;</p><p>Le magnésium et le potassium contribuent à une fonction musculaire normale.</p><p>Le magnésium contribue à l’équilibre électrolytique et au fonctionnement normal du système nerveux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601615</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e0281cb9affd7804ab71d0297bacb3227e02a659ad6bd2df7aedc4d15ec68070 ]]></g:image_link>
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
<title><![CDATA[ Pileje Formag Magnesium Marin Adulte 20 sticks ]]></title>
<g:id>f277a8e3-2c4a-422c-96f4-adc8efffedae</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-formag magnesium marin adulte 20 sticks?f277a8e3-2c4a-422c-96f4-adc8efffedae ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formag Stick Adulte est destiné aux adultes ayant besoin de renforcer leur apport en magnésium, un minéral essentiel pour l'organisme.</p><p>Le magnésium contribue au fonctionnement normal du système nerveux et à réduire la fatigue.</p><p>La vitamine B6 contribue à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560280937</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53272a7b9c31a8ec802eeceffb48d730316455f38b80c1211b4b6a13215a784d ]]></g:image_link>
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
<title><![CDATA[ Pileje Formag Magnésium Marin 30 comprimés ]]></title>
<g:id>02aec058-2e5e-403b-9708-38b9da697526</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-formag magnésium marin 30 comprimés?02aec058-2e5e-403b-9708-38b9da697526 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formag Magnésium marin est destiné aux personnes ayant besoin de renforcer leur apport en magnésium, un minéral essentiel pour l'organisme.</p><ul><li><p>Le magnésium contribue au fonctionnement normal du système nerveux et à réduire la fatigue.</p></li><li><p>La vitamine B6 contribue à réduire la fatigue.</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597192302</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/754410dedf4594a3663d480fd84762a97fc04bfbbb700ff1e35737eff0e3b66b ]]></g:image_link>
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
<title><![CDATA[ Pileje Formag Magnésium marin 90 comprimés ]]></title>
<g:id>fcf4245b-ad9d-4286-98ed-d74aa0867696</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-formag magnésium marin 90 comprimés?fcf4245b-ad9d-4286-98ed-d74aa0867696 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formag Magnésium marin est destiné aux personnes ayant besoin de renforcer leur apport en magnésium, un minéral essentiel pour l'organisme.</p><p>Le magnésium contribue au fonctionnement normal du système nerveux et à réduire la fatigue.</p><p>La vitamine B6 contribue à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401547456652</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b87863c61f08fc16729d1e6e0492126e9ae651bc6168f3783b4c3fa7aad3ce69 ]]></g:image_link>
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
<title><![CDATA[ Pileje Forzinc 60 comprimés ]]></title>
<g:id>94a947e9-cd46-44c9-a8fd-9e5f19dd3ac9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-forzinc 60 comprimés?94a947e9-cd46-44c9-a8fd-9e5f19dd3ac9 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Forzinc est destiné aux personnes ayant besoin de soutenir leur immunité par un apport en zinc.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600779</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/215ae7f8867b5a5ebc979fc781bcb0379c109470edcb523eaadcba10cb2b9388 ]]></g:image_link>
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
<title><![CDATA[ Pileje Féminabiane Conception 30 comprimés+30 capsules ]]></title>
<g:id>f69347b0-a971-4a60-bc17-7f6f404443f0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-féminabiane conception 30 comprimés+30 capsules?f69347b0-a971-4a60-bc17-7f6f404443f0 ]]></link>
<g:price><![CDATA[ 1699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feminabiane Conception est spécialement formulé pour apporter les nutriments essentiels à la femme, depuis le désir d'enfant jusqu'à la fin de grossesse et pendant toute la durée de l'allaitement.</p><ul><li><p>L'acide folique&nbsp;contribue à la croissance des tissus maternels pendant la grossesse.</p></li><li><p>L'iode&nbsp;contribue à la production normale d'hormones thyroïdiennes et à une fonction thyroïdienne normale.</p></li><li><p>La consommation d'acides gras oméga 3 DHA&nbsp;par la m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560255355</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/137e21d444ab547644358977559bd7e82d5d1f25ebf538a76d9476046aea2b1e ]]></g:image_link>
<g:product_type><![CDATA[ SANTÉ PREVENTION > TISANES  ET  NUTRITION MATERNITE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Glycabiane 60 gélules ]]></title>
<g:id>1ec5bdee-07a2-4d5b-b567-f942e5f1fa5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-glycabiane 60 gélules?1ec5bdee-07a2-4d5b-b567-f942e5f1fa5e ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Glycabiane permet d'accompagner les personnes ayant besoin de maintenir leur glycémie grâce à sa composition à base de chrome.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401547191072</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a74cc035173edd5a524ece3c3c3c6f2be476d96b6cc02dad62191101c13b2ccd ]]></g:image_link>
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
<title><![CDATA[ Pileje Hépatobiane 20 sachets ]]></title>
<g:id>ede861cc-f925-4dd9-b1ce-5ddd5656b7e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-hépatobiane 20 sachets?ede861cc-f925-4dd9-b1ce-5ddd5656b7e9 ]]></link>
<g:price><![CDATA[ 2299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Hepatobiane est un complément alimentaire à base de curcuma, romarin et poivre. L'association du curcuma et du romarin favorise le bon fonctionnement hépatique et biliaire. Hepatobiane contribue ainsi à la détoxication du foie et facilite la digestion. Le romarin est également intéressant de par son rôle antioxydant.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576639859</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d3f050585a99d33f0d79edf5c920e9984e004e4241b5dfe42f9b0bc5a0a7704 ]]></g:image_link>
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
<title><![CDATA[ Pileje Immuchoc 15 comprimés ]]></title>
<g:id>4a5d7fa3-715a-44b5-81ff-f9a15d2f2495</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-immuchoc 15 comprimés?4a5d7fa3-715a-44b5-81ff-f9a15d2f2495 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Immuchoc permet de soutenir le système immunitaire grâce à sa composition à base de vitamine C.</p><ul><li><p>La vitamine C contribue au fonctionnement normal du système immunitaire.</p></li><li><p>La vitamine C contribue à réduire la fatigue.</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401564145829</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1d988ab9fe33073a4b7be5fdf3d201108c70f15a9d5c795e34b7c771e2220a30 ]]></g:image_link>
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
<title><![CDATA[ Pileje Insudiet Galettes Chocolatées 12 Sachets de 3 biscuits  ]]></title>
<g:id>cc659902-9584-476d-97a3-5dd40c6dd5ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-insudiet galettes chocolatées 12 sachets de 3 biscuits ?cc659902-9584-476d-97a3-5dd40c6dd5ff ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Des pépites de chocolat noir ajoutent du croquant à ces biscuits chocolatés. Les adeptes de biscuits craquants seront comblés par les Galettes Insudiet… à déguster par exemple avec une infusion sans sucre.&nbsp;</p><p><strong>Atouts santé</strong></p><ul><li><p>Riche en protéines qui contribuent au maintien de la masse musculaire</p></li><li><p>Teneur réduite en sucres</p></li><li><p>Riche en fibres</p></li><li><p>Riche en oméga 3 naturels (ALA) qui contribuent au maintien d'une cholestérolém ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3700593401419</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/00e29a12087667cb0f43cb96840152f1f8d126969e6da69401195553d4fdf6ab ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane ATB 10 gélules ]]></title>
<g:id>cba0aaba-02a9-48c2-9a0b-aa56f2c61393</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane atb 10 gélules?cba0aaba-02a9-48c2-9a0b-aa56f2c61393 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description wysiwyg-rendering">
<p>Lactibiane ATB est un complément alimentaire à base d'une souche microbiotique dosée à 12 milliards par gélule.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560168174</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6208888807389c2fdd5d89ed34844c6e16ee9f6e5775b27766b76e2de506a315 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Buccodental 30 comprimés à sucer ]]></title>
<g:id>f14fdf37-65a8-4330-9fd2-f9ee48760eb1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane buccodental 30 comprimés à sucer?f14fdf37-65a8-4330-9fd2-f9ee48760eb1 ]]></link>
<g:price><![CDATA[ 1215.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Buccodental est composé de vitamines C et D, associées à une souche probiotique, <em>Lacticaseibacillus paracasei&nbsp;</em>LA802.</p><p>La vitamine C contribue à la formation normale de collagène pour assurer la fonction normale des dents et des gencives.&nbsp;</p><p>La vitamine D contribue au maintien d’une dentition normale.</p><p><strong>Souche probiotique sélectionnée :</strong><em> Lacticaseibacillus paracasei</em> LA802</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401571931088</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/16583a6075c01c12326dab51ee4ba1e926e8c75a9b59a565d5d791311957693d ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Cnd 10M 30 gélules ]]></title>
<g:id>b3e404c7-a12d-430a-8aba-f2e85cfff915</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane cnd 10m 30 gélules?b3e404c7-a12d-430a-8aba-f2e85cfff915 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Cnd 10M est un complément alimentaire composé de deux souches probiotiques, dosées à 10 milliards par gélule.</p><p><strong>Souches probiotiques sélectionnées :</strong><em> Lactobacillus gasseri</em> LA806 ; <em>Lactobacillus helveticus</em> <em>candisis </em>LA401&nbsp;</p><p>Les probiotiques contribuent à l'équilibre de la flore intestinale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600267</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38bc5a598c36f6a6c505f63044ee252038436e4b9a17f0339a7e2d9cd371ba97 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Enfants Gouttes 30 ml ]]></title>
<g:id>c3e85124-efb4-4d74-ab99-50c8b5dbe408</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane enfants gouttes 30 ml?c3e85124-efb4-4d74-ab99-50c8b5dbe408 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un complément alimentaire à base d'huile de colza et de&nbsp;5 souches microbiotiques dosées à 2 milliards&nbsp;par dose de 1 ml :</p><ul><li><p><em>Bifidobacterium longum&nbsp;</em>LA101,</p></li><li><p><em>Lactobacillus helveticus</em>&nbsp;LA102,</p></li><li><p><em>Lactococcus lactis</em>&nbsp;LA103,</p></li><li><p><em>Streptococcus thermophilus&nbsp;</em>LA104,</p></li><li><p><em>Lactobacillus rhamnosus</em>&nbsp;LA801.</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528537646</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/55cebe78b4161b7358b5a99571f7d89b15a724b5590ee1d7f725ba1c9af451fb ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Iki 30 sachets ]]></title>
<g:id>688606d8-2199-411b-aca3-36be87c9d569</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane iki 30 sachets?688606d8-2199-411b-aca3-36be87c9d569 ]]></link>
<g:price><![CDATA[ 3690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Iki est un complément alimentaire composé de 3 souches probiotiques dosées à 40 milliards par sachet.</p><p><strong>Souches probiotiques sélectionnées :</strong><em> Bifidobacterium animalis </em>subsp.<em> lactis</em> LA304 ; <em>Lactobacillus acidophilus</em> LA201 ; <em>Ligilactobacillus salivarius </em>LA302</p><p>Les souches probiotiques contribuent à l'équilibre de la flore intestinale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401596927783</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0806428129a7471f0f861c3f3350b1bfcd83ec5a1331c4f2d2aedf7ff90f7ca8 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Immuno 30 comprimés ]]></title>
<g:id>5990099d-2971-4ad6-ae7f-5e91c7cc8843</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane immuno 30 comprimés?5990099d-2971-4ad6-ae7f-5e91c7cc8843 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description wysiwyg-rendering">
<p>Lactibiane Immuno se compose de souches microbiotiques <em>Lactobacillus paracasei</em> LA802, <em>Lactobacillus acidophilus</em> LA201 et de vitamines C et D.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600182</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9c054cee394f53d880265aec79783a77f9c54e19eb4d4534b707493cef8b63be ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Imédia 4 sticks orodispersibles ]]></title>
<g:id>cc0251ab-393a-4e73-8f68-270e16996fe0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane imédia 4 sticks orodispersibles?cc0251ab-393a-4e73-8f68-270e16996fe0 ]]></link>
<g:price><![CDATA[ 850.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Imedia est un complément alimentaire composé de 4 souches microbiotiques déposées et enregistrées dans les collections privées de l'Institut Pasteur et dosées</p>
<p>à 30 milliards par stick .</p>
<p>Lactibiane Imédia est conseillé quand la flore intestinale est diminuée par un traitement antibiotique par exemple ou lors de diarrhées.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401528534805</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5879bdeb8804382ca67d20376c33ebf7709d4770c88211c18cb41852c0a51f5c ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Réflexe Enfant 30 sachets ]]></title>
<g:id>c532b760-2a0f-4f3f-9c1b-7244fd18b7d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane réflexe enfant 30 sachets?c532b760-2a0f-4f3f-9c1b-7244fd18b7d9 ]]></link>
<g:price><![CDATA[ 1799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Réflexe Enfant est un complément alimentaire destiné à apporter aux enfants cinq souches microbiotiques spécifiques, dosées à 4 milliards par sachet, ainsi que de la vitamine D3.</p><p>La vitamine D3 intervient dans la croissance normale et le développement des os chez l'enfant.</p><p>La vitamine D3 contribue également au fonctionnement normal du système immunitaire des enfants.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401545503877</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/08d96a2e4093d9361a6929411e29542559677d9f51b54ba9d567400995ce57da ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Référence 10 gélules ]]></title>
<g:id>f377c068-7fc7-4fa2-a393-dff316a9c371</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane référence 10 gélules?f377c068-7fc7-4fa2-a393-dff316a9c371 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Référence est un complément alimentaire à base de 4 souches probiotiques dosées à 10 milliards par gélule.</p><p>Souches probiotiques sélectionnées :<em> Bifidobacterium longum</em> LA101 ; <em>Lactobacillus helveticus</em> LA102 ; <em>Lactococcus lactis</em> LA103 ; <em>Streptococcus thermophilus</em> LA104</p><p>Les souches probiotiques contribuent à l'équilibre de la flore intestinale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560504477</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3d5cae478fd12b87fde20b7c8e1a36d2b57342998173ccea962190f8549842a4 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Référence 2.5g 10 sachets ]]></title>
<g:id>6ad33d9b-0a59-4c21-b11c-33bdefc2b59b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane référence 2.5g 10 sachets?6ad33d9b-0a59-4c21-b11c-33bdefc2b59b ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Référence est un complément alimentaire à base de 4 souches probiotiques dosées à 10 milliards par sachet.</p><p><strong>Souches probiotiques sélectionnées : </strong><em>Bifidobacterium longum</em> LA101 ; <em>Lactobacillus helveticus</em> LA102 ; <em>Lactococcus lactis</em> LA103 ; <em>Streptococcus thermophilus </em>LA104</p><p>Les probiotiques contribuent à l'équilibre de la flore intestinale.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401542267642</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/31487d72847b5f78d7444bc6338a5eb3ef71be6f4ac4b79e23b5b4fc00e2cbf7 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Référence 2.5g 30 sachets ]]></title>
<g:id>38e0f905-ad90-4ba6-b9d8-eca9849d10db</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane référence 2.5g 30 sachets?38e0f905-ad90-4ba6-b9d8-eca9849d10db ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Référence est un complément alimentaire à base de 4 souches probiotiques dosées à 10 milliards par sachet.</p><p><strong>Souches probiotiques sélectionnées : </strong><em>Bifidobacterium longum</em> LA101 ; <em>Lactobacillus helveticus</em> LA102 ; <em>Lactococcus lactis</em> LA103 ; <em>Streptococcus thermophilus</em> LA104</p><p>Les probiotiques contribuent à l'équilibre de la flore intestinale.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401545532105</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2982e3e22e730c20ee476215cae52d6ff9ee13d04a8ec84161df887486a8c3d6 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Référence 20 Sticks orodispersibles ]]></title>
<g:id>cff13da1-e37f-4a0d-b350-d9895fbc9070</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane référence 20 sticks orodispersibles?cff13da1-e37f-4a0d-b350-d9895fbc9070 ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Référence est un complément alimentaire à base de 4 souches probiotiques dosées à 10 milliards par stick orodispersible, au bon goût d’orange.</p><p><strong>Souches probiotiques sélectionnées</strong> : <em>Bifidobacterium longum</em> LA101 ; <em>Lactobacillus helveticus</em> LA102 ; <em>Lactococcus lactis </em>LA103 ; <em>Streptococcus thermophilus</em> LA104</p><p>Les probiotiques contribuent à l’équilibre de la flore intestinale.</p><p>Goût Orange</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601509</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/aa31ae3cdf22d6d8b8986169a1e472345f0c72b3a200acde20691dbf0a70d06e ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Référence 30 gélules ]]></title>
<g:id>47473d5f-2b07-462d-9f0a-1b72f41b838a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane référence 30 gélules?47473d5f-2b07-462d-9f0a-1b72f41b838a ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pileje Lactibiane Référence 10 gélules de 596 mg est un mélange de probiotique contribuant au renfort de la flore. Il améliore les troubles intestinaux (ballonnements, gênes…) et régule le transit dès la 1ère semaine.</p>
<p>Les 4 souches probiotiques de Lactibiane Référence sont déposées et enregistrées dans les collections privées de l'Institut Pasteur :</p>
<p>- Bifidobacterium longum LA 101,</p>
<p>- Lactobacillus acidophilus LA 102,</p>
<p>- Lactococcus lactis LA 103,</p>
<p>- Streptococ ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560504828</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20a0fcfd3517112fa759617aa57959d60b2a256f2c719cef33d845a308d8e4f6 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Tolérance 2.5g 30 gélules ]]></title>
<g:id>2eea7287-8791-40c6-a310-7b06f614a4ba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane tolérance 2.5g 30 gélules?2eea7287-8791-40c6-a310-7b06f614a4ba ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Tolérance est un complément alimentaire à base de 5 souches probiotiques dosées à 10 milliards par gélule</p><p>Le mix des 5 souches :</p><p>- Bifidobacterium lactis LA 303,</p><p>- Lactobacillus acidophilus LA 201,</p><p>- Lactobacillus plantarum LA 301,</p><p>- Lactobacillus salivarius LA 302,</p><p>- Bifidobacterium lactis LA 304.</p><p>L’ensemble des 5 souches sélectionnées pour Lactibiane Tolérance répond à tous nos critères de qualité.</p><p>Les souches de Lactibiane Toléranc ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560504996</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8c61cab11fe13832f29d4b9f240b6d7ebd7e7769a0e6c774bce148c95706fe4b ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Tolérance 2.5g 30 sachets ]]></title>
<g:id>9d6612bf-8dbd-4f3a-b4fc-855b47c80625</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane tolérance 2.5g 30 sachets?9d6612bf-8dbd-4f3a-b4fc-855b47c80625 ]]></link>
<g:price><![CDATA[ 2250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Tolérance est un complément alimentaire à base de 5 souches probiotiques dosées à 10 milliards par sachet de 2.5 g.</p><p><strong>Souches probiotiques sélectionnées :</strong><em> Bifidobacterium lactis</em> LA303 ; <em>Lactobacillus acidophilus</em> LA201 ; <em>Lactiplantibacillus plantarum</em> LA301 ; <em>Ligilactobacillus salivarius</em> LA302 ; <em>Bifidobacterium animalis</em> subsp. lactis LA304</p><p>Les souches probiotiques contribuent à l'équilibre de la flore intestinale ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579209561</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/06bdf723ed4a55b6844ba02e91108daa06ab49173ffc35f516e5f03923ab4e53 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Tolérance 5g 30 Sachets ]]></title>
<g:id>952d020c-0e8d-4e41-9055-51a9e86351a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane tolérance 5g 30 sachets?952d020c-0e8d-4e41-9055-51a9e86351a5 ]]></link>
<g:price><![CDATA[ 3150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Tolérance est un complément alimentaire à base de 5 souches probiotiques dosées à 20 milliards par sachet de 5 g.</p><p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401543342874</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4d7f829cdc72a0495100a507c5578a77b6e88bd7e5f0f3a763ca07d499675bd6 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactibiane Topic AD 125 ml ]]></title>
<g:id>78056028-d4dd-4480-8345-bf6fc183cada</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactibiane topic ad 125 ml?78056028-d4dd-4480-8345-bf6fc183cada ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactibiane Topic AD est un baume émollient pour les peaux sèches à tendance atopique. Il apaise et calme les sensations de démangeaisons et de grattages.</p><p>Lactibiane Topic AD est composé de plusieurs actifs pour une action complète sur la peau atopique.</p><p><em>Lactobacillus ferment lysate </em>augmente la diversité du microbiote cutané commensal et maintient l’équilibre du microbiote cutané.</p><p>Le prébiotique α-gluco-oligosaccharide protège le microbiote cutané.</p><p>Le LPCa et la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600465</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/157563960ea94ba39bef666f01c7bf8700369abeec768261d91a4046804f803e ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactichoc 20 gélules ]]></title>
<g:id>50491ff4-45e5-4d47-9d5d-a4a3c9b05ae0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactichoc 20 gélules?50491ff4-45e5-4d47-9d5d-a4a3c9b05ae0 ]]></link>
<g:price><![CDATA[ 2650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactichoc est un complément alimentaire à base de 8 souches microbiotiques dosées à 80 milliards par jour pour 2 gélules.</p><p>Les souches sont : </p><ul><li><p><em>Bifidobacterium lactis</em> LA304</p></li><li><p><em>Bifidobacterium bifidum </em>LA803</p></li><li><p><em>Bifidobacterium animalis </em>subsp<em>. lactis </em>LA804, précédemment appellée<em> Bifidobacterium lactis </em>LA804</p></li><li><p><em>Bifidobacterium breve</em> LA805</p></li><li><p><em>Lactobacillus acidophilus </em>LA ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560288322</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1744c7c69a5f7f50207a0fc9a5d9efd9033f71027ca11e0b349a4b8e4db65357 ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactiplus 56 Gélules ]]></title>
<g:id>bf364a99-a537-4965-8417-a5f44ab972ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactiplus 56 gélules?bf364a99-a537-4965-8417-a5f44ab972ff ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le syndrome de l’intestin irritable touche l’intestin grêle et le côlon qui deviennent hypersensibles et présentent une activité irrégulière.</p><p>Le diagnostic repose sur une consultation clinique permettant de dresser un profil caractéristique réunissant plusieurs symptômes.</p><p>Une complémentation à base de souches microbiotiques peut être conseillé. Le laboratoire PiLeJe a développé <strong>Lactiplus</strong>, une solution formulée spécifiquement pour répondre aux besoins nutritionnels ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600731</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/86bc206a64e8f942579e9eb003adae6dbef432ab2c6e66cf97b90a556015745e ]]></g:image_link>
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
<title><![CDATA[ Pileje Lactiplus Butyrate LP 30 Sachets  ]]></title>
<g:id>3234a13d-0d70-49df-aaf8-bb846ef100d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-lactiplus butyrate lp 30 sachets ?3234a13d-0d70-49df-aaf8-bb846ef100d5 ]]></link>
<g:price><![CDATA[ 2790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lactiplus Butyrate LP permet de répondre aux besoins nutritionnels en cas de dysbiose intestinale et désordres intestinaux associés à une alimentation pauvre en fibres.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145601257</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c4dcaccb4f590535739bd22a3bd5d47c2ae2d8b6b6db7b72e4e0b9a64bb8af06 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > DIGESTION ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Melioran Imedia 4 Sticks ]]></title>
<g:id>bdebb788-7524-4923-850e-9fe5c2a7c076</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-melioran imedia 4 sticks?bdebb788-7524-4923-850e-9fe5c2a7c076 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Melioran® Imedia est destiné aux personnes ayant besoin d’un effet relaxant dans le cas d’un stress ponctuel ou d’anticipation grâce à sa composition à base de L-théanine, d'extraits de passiflore et de rhodiole.&nbsp;</p><ul><li><p>La théanine et la passiflore favorisent la relaxation.</p></li><li><p>La rhodiole aide en cas de stress.</p></li></ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690305</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53978116bab844093ef0c0455f5ee13b0d44a8db015bd97aa7e4faaa8d740135 ]]></g:image_link>
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
<title><![CDATA[ Pileje Melioran Regul 30 comprimés  ]]></title>
<g:id>e8124bda-ce01-4b22-a0f6-8102455150d3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-melioran regul 30 comprimés ?e8124bda-ce01-4b22-a0f6-8102455150d3 ]]></link>
<g:price><![CDATA[ 1399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Melioran® Regul est composé d'extraits de Phytostandard® de Rhodiole et d'extrait de Safracetin® de safran.&nbsp;</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690329</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4dc23511a6f9469c7207d8cf9c39698c2c9633179d57f66db8c9ff8f0be91394 ]]></g:image_link>
<g:product_type><![CDATA[ COMPLEMENTS ALIMENTAIRES > FORME - VITALITÉ ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pileje Melioran Regul 90 comprimés ]]></title>
<g:id>c74577b6-2a4e-4aa4-9286-f0af9cb9ed94</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-melioran regul 90 comprimés?c74577b6-2a4e-4aa4-9286-f0af9cb9ed94 ]]></link>
<g:price><![CDATA[ 3499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le stress est une réaction physiologique normale, correspondant à l’ensemble des réponses de l’organisme pour s’adapter aux pressions de son environnement. Certaines plantes peuvent aider à améliorer cet état et les signes associés.</p><p>Melioran® Regul est une association d’actifs végétaux sélectionnés, <strong>issue de l’expertise scientifique et technique du Laboratoire PiLeJe.</strong></p><p>Melioran® Regul est composé d'extraits de Phytostandard® de Rhodiole et d'extrait de Safracetin®  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690336</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09c385ebe1c27b50cb8bee12523438bfbf1fabbf4c9557542fb25c5d487abd14 ]]></g:image_link>
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
<title><![CDATA[ Pileje Memobiane performance 60 cprs ]]></title>
<g:id>ff87f569-0b89-44cb-85bb-ffed8da568e0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-memobiane performance 60 cprs?ff87f569-0b89-44cb-85bb-ffed8da568e0 ]]></link>
<g:price><![CDATA[ 1799.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Memobiane Performance permet de maintenir la mémorisation grâce à sa composition à base de zinc et d'acide panthothénique.</span></p>
<div class="card-information info orange">
<div class="informations wysiwyg-rendering">
<p>Le zinc contribue à une fonction cognitive normale (dont la mémoire).</p>
<div class="list-informations">
<div class="card-information info orange">
<div class="informations wysiwyg-rendering">
<p>L'acide panthoténique contribue à des performances intellectuelles no ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401529507570</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0b311005d55a538bde987c41b4c32bcc59459a9a818de5f26781434a0be3a3fa ]]></g:image_link>
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
<title><![CDATA[ Pileje Microbiane Q10 Age Protect 30 gélules ]]></title>
<g:id>d4b5e119-16ef-4a07-9684-e4478c0425e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-microbiane q10 age protect 30 gélules?d4b5e119-16ef-4a07-9684-e4478c0425e9 ]]></link>
<g:price><![CDATA[ 2374.99 EUR ]]></g:price>
<description><![CDATA[ <p>Microbiane Q10 Age Protect permet de préserver les cellules du stress oxydatif grâce à sa composition à base de coenzyme Q10 et de vitamine E.</p><p>La vitamine E contribue à protéger les cellules contre le stress oxydatif.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401596928735</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b69312eec11b1b8e6d3808890ce2120416cab6788abd93f703f61a35a7584d98 ]]></g:image_link>
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
<title><![CDATA[ Pileje Multibiane 120 gélules ]]></title>
<g:id>92aa6941-58af-4e40-b736-cf215a4848a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-multibiane 120 gélules?92aa6941-58af-4e40-b736-cf215a4848a6 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Multibiane, qui contient 11 vitamines et 5 minéraux, est spécialement formulé pour aider les adultes à équilibrer leurs apports en vitamines et minéraux.</p><p>Les vitamines B6, B9 et C contribuent à réduire la fatigue.&nbsp;</p><p>Les vitamines A, B6, B9 et C contribuent au fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576293044</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/46f8fd1a693e09166a3ccdd4fd5e382f924ea8fabdbf29b9c0a979e0083ffc8d ]]></g:image_link>
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
<title><![CDATA[ Pileje Multibiane Immunité Enfant 150ml ]]></title>
<g:id>14807b30-6929-4dc4-ba7a-9b1ed841f1e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-multibiane immunité enfant 150ml?14807b30-6929-4dc4-ba7a-9b1ed841f1e9 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Multibiane Immunité Enfant est destiné à renforcer l'immunité des enfants dès 10 ans, grâce à sa formule complète à base de plantes et de vitamine D.</p><p>La vitamine D contribue à la croissance et au développement osseux normaux chez l’enfant.</p><p>La vitamine D contribue au fonctionnement normal du système immunitaire des enfants.</p><p>Flacon de 15 doses </p><p>Goût Abricot</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600458</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27ecaa29602b82d3f243eb67f829644efcc3e017ab54e859b1b48b975fcee571 ]]></g:image_link>
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
<title><![CDATA[ Pileje Multibiane Vitalité 30 gélules ]]></title>
<g:id>cb05616b-48cd-447e-a66f-ee5efe50d9e9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-multibiane vitalité 30 gélules?cb05616b-48cd-447e-a66f-ee5efe50d9e9 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Multibiane Vitalité, qui contient 11 vitamines et 5 minéraux, est spécialement formulé pour aider les adultes à équilibrer leurs apports en vitamines et minéraux.</p><p>Les vitamines A, B6, B9, B12 et C contribuent au fonctionnement normal du système immunitaire.</p><p>Les vitamines B6, B9 et C contribuent à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560505368</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9ca17c2548473afa0914596b34843dd0cb3d9bf97047daf3ecfc5e4fe12e33e8 ]]></g:image_link>
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
<title><![CDATA[ Pileje Multibiane Vitalité 45+ 120 gélules ]]></title>
<g:id>e110d299-48b9-437c-a70c-b49dc437f864</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-multibiane vitalité 45+ 120 gélules?e110d299-48b9-437c-a70c-b49dc437f864 ]]></link>
<g:price><![CDATA[ 1999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Multibiane Vitalité 45+ est un complexe de 12 vitamines, 3 minéraux et ginseng qui permet d'optimiser son statut micronutritionnel.</p><p>&nbsp;Les vitamines B6, B9 et C contribuent à réduire la fatigue.</p><p>Les vitamines A, B6, B9, B12, C et D contribuent au fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401562648810</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/54a4a2ff80bdb3207cd2ba7b856a39caf7474d9ac478fdebc2293efd83a29927 ]]></g:image_link>
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
<title><![CDATA[ Pileje Multibiane Vitalité 45+ 30 gélules ]]></title>
<g:id>91ba56dc-84fe-4a5a-9acb-f3c133185b30</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-multibiane vitalité 45+ 30 gélules?91ba56dc-84fe-4a5a-9acb-f3c133185b30 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Multibiane Vitalité 45+ est un complexe de 12 vitamines, 3 minéraux et ginseng qui permet d'optimiser son statut micronutritionnel.</p><p>&nbsp;Les vitamines B6, B9 et C contribuent à réduire la fatigue.</p><p>Les vitamines A, B6, B9, B12, C et D contribuent au fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560505429</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/88ccbd33d452e6a25e97140e8cdcfaa16568128729ff1c2250c449d3e40c473d ]]></g:image_link>
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
<title><![CDATA[ Pileje Myolegy 30 comprimés  ]]></title>
<g:id>f28605fd-9d03-41a4-b0d9-62e8093cfa06</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-myolegy 30 comprimés ?f28605fd-9d03-41a4-b0d9-62e8093cfa06 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Myolegy® est destiné aux personnes ayant besoin de maintenir une fonction musculaire normale grâce à sa formule composée de magnésium marin, de PEA et d’extrait Phytostandard® de valériane.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600793</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a5320f8d2ffa34a488ec55308a3b9191af247a5c82925bec2e114a69427ee474 ]]></g:image_link>
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
<title><![CDATA[ Pileje Neurobiane 60 gélules ]]></title>
<g:id>f4d2c6e7-7781-45df-a6ba-716df4e9c3e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-neurobiane 60 gélules?f4d2c6e7-7781-45df-a6ba-716df4e9c3e2 ]]></link>
<g:price><![CDATA[ 1250.00 EUR ]]></g:price>
<description><![CDATA[ <p>Neurobiane permet d'équilibrer le système nerveux et de favoriser la détente grâce à sa composition à base de magnésium et de vitamine B6.</p><p>Le magnésium et la vitamine B6 contribuent au fonctionnement normal du système nerveux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401542119811</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/56642f6365abbd5bc12862885ba24a7a6a26c35a53a86e363287ef746dc46925 ]]></g:image_link>
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
<title><![CDATA[ Pileje Noctesia 90 comprimés ]]></title>
<g:id>b0ae1784-eec6-4d17-b16e-7f9e3bc7f400</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-noctesia 90 comprimés?b0ae1784-eec6-4d17-b16e-7f9e3bc7f400 ]]></link>
<g:price><![CDATA[ 2290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Noctesia®, grâce à sa composition à base d’eschscholtzia et de valériane, permet de favoriser la relaxation<em> et un sommeil de qualité</em>.</p><p>*L'eschscholtzia et la valériane favorisent un sommeil de qualité.</p><p>*L’eschscholtzia favorise la relaxation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690121</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b352475d8cf6fff4b401abdadba4c4e27ae00051bba2ccd47a2d1bdb94cc1825 ]]></g:image_link>
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
<title><![CDATA[ Pileje Oligobiane Fer Cuivre 30 gélules ]]></title>
<g:id>10259bb6-a4ad-4ca9-9bc9-9e081270c673</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-oligobiane fer cuivre 30 gélules?10259bb6-a4ad-4ca9-9bc9-9e081270c673 ]]></link>
<g:price><![CDATA[ 1075.00 EUR ]]></g:price>
<description><![CDATA[ <p>Oligobiane FeCu est destiné aux personnes ayant besoin de compléter leurs apports en fer. À base de Guanylor® Fer Cuivre.</p><p>Le fer contribue à la formation normale des globules rouges et de l'hémoglobine.</p><p>Le fer contribue au transport normal de l'oxygène dans l'organisme.</p><p>Le fer contribue à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560504019</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74318512ce10f7cd1e2ce12cc34cdd1493491f584949807fa743e82b8c166a0b ]]></g:image_link>
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
<title><![CDATA[ Pileje Oligobiane Fer Cuivre 90 gélules ]]></title>
<g:id>3d8613d9-a871-42b7-88ed-2a91243443d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-oligobiane fer cuivre 90 gélules?3d8613d9-a871-42b7-88ed-2a91243443d5 ]]></link>
<g:price><![CDATA[ 2090.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description wysiwyg-rendering">
<p>Oligobiane FeCu est destiné aux personnes ayant besoin de compléter leurs apports en fer.</p>
<div class="card-information info orange">
<div class="informations wysiwyg-rendering">
<p>Le fer contribue à la formation normale des globules rouges et de l'hémoglobine.</p>
<div class="card-information info orange">
<div class="informations wysiwyg-rendering">
<p>Le fer contribue au transport normal de l'oxygène dans l'organisme.</p>
<div class="list-inf ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401579222577</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71ef28b354117cd7bc0b67f0071aad59a46187bc380abba8095c4e80d5f99e67 ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane DHA 80 capsules ]]></title>
<g:id>81ba3587-1901-40a0-9910-5aeadbe8150e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane dha 80 capsules?81ba3587-1901-40a0-9910-5aeadbe8150e ]]></link>
<g:price><![CDATA[ 2390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Omegabiane DHA permet de compléter ses apports en acides gras de type oméga 3 pour contribuer au maintien du bon fonctionnement du cerveau.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401599197046</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/57afc4e25c1e1060d8bbae526fe7ad6091d52dd1b63dcc1e328a21c45d657752 ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane EPA 80 capsules ]]></title>
<g:id>4210590c-a20f-40ee-91cc-cfb4c899e0a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane epa 80 capsules?4210590c-a20f-40ee-91cc-cfb4c899e0a9 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Omegabiane EPA permet de compléter ses apports en acides gras de type oméga 3 pour contribuer au bon fonctionnement du système cardiovasculaire.</p><p>Les acides gras eicosapentaénoïque et docosahexaénoïque contribuent à une fonction cardiaque normale. L’effet dose est obtenu par la consommation journalière de 250 mg d’EPA et de DHA.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401599197107</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7d46b10b0f8b34ddc4c06aae05c96802da6cdb379fd3d7c3a9c44f25bae0fe16 ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane Enfant 27 pastilles  ]]></title>
<g:id>1d554569-e140-4dd3-a6d2-f8f9541c97a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane enfant 27 pastilles ?1d554569-e140-4dd3-a6d2-f8f9541c97a9 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Omegabiane Enfant permet de répondre aux besoins des enfants en acides gras essentiels et notamment en oméga 3.</p><p>La vitamine D3 contribue à la croissance et au développement osseux normaux chez l'enfant.</p><p>Riche en acide gras oméga 3 DHA (docosahexaénoïque) et EPA (eicosapentaénoïque).</p><p>Goût Orange Citron </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600366</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da5b321a3e51089e25be01dc3d25890fe1e939e4e4c4dbafead445b8c1f43231 ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane Foie de Morue 80 Capsules marines ]]></title>
<g:id>40ab3780-d29f-4fa8-9873-4970c50466a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane foie de morue 80 capsules marines?40ab3780-d29f-4fa8-9873-4970c50466a4 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Omegabiane Foie de Morue permet de soutenir les défenses immunitaires grâce à sa composition enrichie en vitamines A et D.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401594965114</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0e10f45b0c82ded3c427bf6204e6b016b8445cfe2d4a34840215e4bb18169893 ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane Oméga 3-6-9 100 capsules marines ]]></title>
<g:id>133a67c2-88ab-4fe3-9109-046059f5ddd7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane oméga 3-6-9 100 capsules marines?133a67c2-88ab-4fe3-9109-046059f5ddd7 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description wysiwyg-rendering">
<p>Omegabiane Oméga 3, 6 et 9 permet d'équilibrer ses apports en acides gras insaturés.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600199</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/057108a26df266d74a4aecdcc8320df9e1600ea4640f6bafa7ec4f4a31c66354 ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane Onagre 100 Capsules ]]></title>
<g:id>549aabbc-1b3f-466e-819d-a36d277ce4c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane onagre 100 capsules?549aabbc-1b3f-466e-819d-a36d277ce4c8 ]]></link>
<g:price><![CDATA[ 1750.00 EUR ]]></g:price>
<description><![CDATA[ <p>Omégabiane Onagre permet d'équilibrer ses apports en acides gras de type Oméga 6 grâce à sa composition à base d'huile d'onagre.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576970914</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a1141af2f056fa6e260cd8885c840495d0b65e2ee359c24dc083556c22d868ff ]]></g:image_link>
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
<title><![CDATA[ Pileje Omegabiane Poissons des Mers Froides 100 capsules marines ]]></title>
<g:id>8cd22017-39f8-4d22-858b-cf3d025b642d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-omegabiane poissons des mers froides 100 capsules marines?8cd22017-39f8-4d22-858b-cf3d025b642d ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Omegabiane Poissons des mers froides est destiné aux personnes ayant besoin de compléter leurs apports en acides gras de type oméga 3.</p><p>Les acides gras de type oméga 3 Eicosapentaéonïque (EPA) et Docosahexaénoïque (DHA) contribuent à une fonction cardiaque normale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401576639798</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4511d27d01dcf0dd6b553faecf034cd9b6999e54a0c981c585bf82dbc5faf39a ]]></g:image_link>
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
<title><![CDATA[ Pileje Oxybiane Cell Protect 60 gélules ]]></title>
<g:id>f49e9229-98d6-406b-8bc8-9b0f2f527604</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-oxybiane cell protect 60 gélules?f49e9229-98d6-406b-8bc8-9b0f2f527604 ]]></link>
<g:price><![CDATA[ 2089.96 EUR ]]></g:price>
<description><![CDATA[ <p>Oxybiane Cell Protect permet de préserver ses cellules du stress oxydatif grâce à sa composition à base de vitamines C, E et B2, sélénium et zinc.</p><p>Les vitamines C, E et B2, le sélénium et le zinc contribuent à protéger les cellules contre le stress oxydatif.</p><p>Le sélénium contribue également au fonctionnement normal du système immunitaire.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401598299123</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5be8fc10a63bcea99fdd5b7f0d6212591f72a80ef20f872bb624f7036803ea75 ]]></g:image_link>
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
<title><![CDATA[ Pileje Pea Biane 45 Gélules ]]></title>
<g:id>fe1e1eeb-55b6-4afc-8027-3c3301c118a9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-pea biane 45 gélules?fe1e1eeb-55b6-4afc-8027-3c3301c118a9 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p>PEA Biane est un complément alimentaire à base de palmitoyléthanolamide (PEA).</p><p><strong>Qu’est-ce que le PEA ou Palmitoyléthanolamide ?</strong></p><p>Le PEA (palmitoyléthanolamide) est une molécule naturellement synthétisée par l’organisme. Il fait partie du système endocannabinoïde, un ensemble de récepteurs cellulaires et de molécules situés dans notre corps qui régulent de nombreux processus physiologiques.</p><p>Depuis plusieurs années, cet ingrédient fait l’objet de nombreuses étud ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600717</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/446f9d949252b807fd33c566dc873f347ff3a2269af9be117d70e2050979a992 ]]></g:image_link>
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
<title><![CDATA[ Pileje Permealine 20 sticks ]]></title>
<g:id>5b6a895f-89c7-4d33-933e-6c36f085c376</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-permealine 20 sticks?5b6a895f-89c7-4d33-933e-6c36f085c376 ]]></link>
<g:price><![CDATA[ 1875.00 EUR ]]></g:price>
<description><![CDATA[ <p>Permealine est un complément alimentaire destiné à accompagner les mesures alimentaires d'épargne digestive, notamment les régimes pauvres en FODMAPs.</p><p>La vitamine A contribue au maintien des muqueuses normales telles que les muqueuses intestinales.</p><p>Le zinc contribue au fonctionnement normal du système immunitaire</p><p>Goût Orange</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560281088</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/04ea0522a1c5e9691da667419266d2b36cb09635abd27b649ca518649a58589d ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Aubépine 15 comprimés ]]></title>
<g:id>091d3de8-8918-4efe-aa21-24ce951428ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane aubépine 15 comprimés?091d3de8-8918-4efe-aa21-24ce951428ce ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Aubépine est destiné à soutenir le confort cardiovasculaire des individus, grâce à sa composition à base d’aubépine biologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690572</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bcb88b801f1a3a63b29f447b7e13c5d069ee0822b2e340d7157a04318031a653 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Chardon Marie 30 Comprimés ]]></title>
<g:id>45517c26-f5c8-420e-80be-506c60de3c6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane chardon marie 30 comprimés?45517c26-f5c8-420e-80be-506c60de3c6e ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Chardon Marie est un complément alimentaire à base d’extrait de chardon marie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690459</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4448de11cbe3e60a2c587c28573fecfe0eed43d47f0c0add860e6b7c7067e174 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Desmodium 30 comprimés ]]></title>
<g:id>14f7326c-dc8f-4a02-84b4-5c8225ef3fda</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane desmodium 30 comprimés?14f7326c-dc8f-4a02-84b4-5c8225ef3fda ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Desmodium est un complément alimentaire à base d’extrait de desmodium biologique.&nbsp;</p><p>Comprimés à libération prolongée </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690565</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2222c4c026282a2518365a01dc9958067f3da6cd6445d907b512c4b9bdc3dd9c ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Gingko Biloba 30 comprimés à libération prolongée ]]></title>
<g:id>e394d6fd-6840-45c3-919a-1f1c03dfe5d8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane gingko biloba 30 comprimés à libération prolongée?e394d6fd-6840-45c3-919a-1f1c03dfe5d8 ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Ginkgo Biloba est destiné aux personnes souhaitant soutenir leur mémoire, grâce à sa composition à base de ginkgo biloba biologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690589</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28ac09a04cbb4bfbb4e3d5308e634d0c6917ae6413952f412fa799d5f312ab0b ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Griffonia 30 comprimés à sucer ]]></title>
<g:id>3b9de6bb-93aa-46b0-9dd1-1f7624d34f3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane griffonia 30 comprimés à sucer?3b9de6bb-93aa-46b0-9dd1-1f7624d34f3c ]]></link>
<g:price><![CDATA[ 1290.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Griffonia est destiné à soutenir l’équilibre du système nerveux, grâce à sa composition à base de griffonia.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690381</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b5040b6f3fb08986a73fa5703e6add91cfe80001cccce6398a991c35d386f4c3 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Harpagophytum 45 comprimés ]]></title>
<g:id>05328c6f-a0fe-4a87-a17f-ff922c8a19ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane harpagophytum 45 comprimés?05328c6f-a0fe-4a87-a17f-ff922c8a19ca ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Harpagophytum est destiné aux personnes ayant besoin de soutenir la santé de leurs articulations, grâce à sa composition à base d’harpagophytum.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690428</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/260e973f3b8901ddf40b8e739583818166a8935bb8f5507f08c0ebdf316fb6c8 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Marron d'Inde 30 Comprimés ]]></title>
<g:id>7c94511a-4522-4206-85e2-ed3a41433fad</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane marron d'inde 30 comprimés?7c94511a-4522-4206-85e2-ed3a41433fad ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Marron d’Inde est destiné aux personnes ayant besoin de favoriser leur santé circulatoire, grâce à sa composition à base de marron d’Inde.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690442</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/965e3107efc42988069ec572bb217099f46ab9590d58364602f17b7f1530947e ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Mélisse 30 Comprimés ]]></title>
<g:id>08bf9339-8ec9-4946-a669-669b9dc2ec54</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane mélisse 30 comprimés?08bf9339-8ec9-4946-a669-669b9dc2ec54 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description wysiwyg-rendering">
<p>Phytobiane Mélisse est destiné à accompagner le sommeil ou la digestion des individus grâce à sa composition à base de mélisse.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690404</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/527a491cdb22dc81dedd57ed43eac9a1a80f18792d7c03367bde3c38588415dc ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Passiflore 30 Comprimés ]]></title>
<g:id>7da6db52-242d-4325-8892-6c7166cc9f5d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane passiflore 30 comprimés?7da6db52-242d-4325-8892-6c7166cc9f5d ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Passiflore est destiné aux personnes ayant besoin de favoriser un sommeil de qualité &nbsp;grâce à sa composition à base de passiflore.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690435</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fed1377a3fe82e988b3535e2b72163e8e1988f70f4c983e8c1b860f01c9d54a ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Rhodiole 30 Comprimés ]]></title>
<g:id>800bf78e-c456-4035-8dea-ee0f004a984e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane rhodiole 30 comprimés?800bf78e-c456-4035-8dea-ee0f004a984e ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Rhodiole est destiné aux personnes cherchant à s'adapter au stress émotionnel grâce sa composition à base de rhodiole biologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690374</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/55245de4f364c8e4c28e2f03cc96b1505984a068297c35a3aa0ce486bbf8bb09 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Réglisse 15 Comprimés ]]></title>
<g:id>f315e77e-378d-4e5e-b9d2-16d19b82b6fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane réglisse 15 comprimés?f315e77e-378d-4e5e-b9d2-16d19b82b6fd ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Réglisse est un complément alimentaire à base d’extrait de réglisse (Glycyrrhiza glabra L.).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690466</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/77394e23ba943abe761d715802448a21f9059266f4e50782be282883836f980e ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytobiane Valériane 30 Comprimés ]]></title>
<g:id>75fcb2fa-6212-4dd5-9b62-9f35d8cff126</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytobiane valériane 30 comprimés?75fcb2fa-6212-4dd5-9b62-9f35d8cff126 ]]></link>
<g:price><![CDATA[ 1490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytobiane Valériane est destiné aux personnes ayant besoin de relaxation et de détente grâce à sa composition à base de valériane.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690398</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e32dc0cba57978b17260bc3fcc342af3bce7f22893f1b0544c7f90b7b8c55f19 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard  Cyprès / Echinacée 30 comprimés ]]></title>
<g:id>a4b7cd73-8090-4eca-87b8-93adb393d750</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard  cyprès / echinacée 30 comprimés?a4b7cd73-8090-4eca-87b8-93adb393d750 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce complément alimentaire permet de renforcer vos défenses immunitaires et vous aide à bien résister grâce aux propriétés du cyprès.</p>
<p>C'est un arbre originaire du pourtour de la mer Egée, dont les inflorescences sont riches en proanthocyanidines.</p>
<p>Et grâce aux propriétés de l’échinacée dont l’activité immunostimulante est scientifiquement reconnue, grâce à sa composition en alkylamides et en polysaccharides.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401542119699</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5cf29f343f71feaa8f436bfd2f9a97c6ccfba01542d712e956877fffd6ced581 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Artichaut / Radis Noir 30 comprimés ]]></title>
<g:id>ff2f4ece-4c6f-4c01-8964-b6d49f613ba3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard artichaut / radis noir 30 comprimés?ff2f4ece-4c6f-4c01-8964-b6d49f613ba3 ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pileje a sélectionné les parties de la plante les plus riches en composés : les feuilles d’artichaut (<em>Cynara scolymus</em> L.) et les racines de radis noir (<em>Raphanus sativus</em> L. <em>var. niger.</em>) pour élaborer le complément alimentaire Phytostandard® duo d’Artichaut et de Radis Noir.</p><p><strong>Comment sont sélectionnés les extraits d’artichaut et de radis noir du Phytostandard® duo ?</strong></p><ul><li><p><strong>L’artichaut</strong> est un légume répandu dans nos potager ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597517594</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1fca50846a22465b79f442b5457bcc40d6b4b2bfff2eec6a24d7223eb1db2965 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Aubépine / Passiflore 30 Comprimés ]]></title>
<g:id>e4b990c7-b6bc-4778-93ff-e3810c34e62e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard aubépine / passiflore 30 comprimés?e4b990c7-b6bc-4778-93ff-e3810c34e62e ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytostandard® d'Aubépine et de Passiflore est un complément alimentaire à base d'extraits d'Aubépine (<em>Crataegus monogyna</em> Jacq.et <em>oxyacantha</em> auct.) et de Passiflore (<em>Passiflora incarnata</em> L.)</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597517136</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2c61bb9970c955d780c8a61e58e249f25487d10e76ba5ea18ad150e773a33b77 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Cassis / Plantain 30 comprimés ]]></title>
<g:id>4f236210-e25e-48c2-930e-4c8ca64950e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard cassis / plantain 30 comprimés?4f236210-e25e-48c2-930e-4c8ca64950e1 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytostandard® de Cassis et de Plantain est un complément alimentaire à base d'extraits de Cassis (<em>Ribes nigrum</em> L.) et de Plantain (<em>Plantago lanceolata</em> L.).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401521255042</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/10a9503a066ca2968a02f64fb6d67abdb6e1d1431627fca2763f60bd0d26af40 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Cyprès / Astragle 30 comprimés ]]></title>
<g:id>0a2ad29f-c396-48a0-a362-cefeba1606a5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard cyprès / astragle 30 comprimés?0a2ad29f-c396-48a0-a362-cefeba1606a5 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Phytostandard de Cyprès-Astragale contribue au renfort des défenses naturelles pour prévenir les premiers signes d'infections virales ORL et pulmonaires des adultes de plus de 65 ans et ou fragilisés.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145690077</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60659dc502eef279cd4f6192687b02758b85e2d8f7952a307e6403e221cd1125 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Eschscholtzia / Valériane 30 comprimés ]]></title>
<g:id>d5dba14c-08b6-4c13-a337-dbd7593a68d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard eschscholtzia / valériane 30 comprimés?d5dba14c-08b6-4c13-a337-dbd7593a68d9 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytostandard® d'Eschscholtzia et de Valériane est composé d'extraits d'Eschscholtzia (<em>Eschscholtzia californica Cham</em>.) et de Valériane (<em>Valeriana officinalis L</em>.).&nbsp;</p><p>&nbsp;L'eschscholtzia contribue à favoriser un sommeil de qualité.</p><p>L'eschscholtzia contribue à une relaxation optimale.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597517426</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/45e4921413708ab381ddd24b90e5ecaae0dc10f8cd8ec792764c1c9afcecaf32 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Orthosiphon / Piloselle 30 comprimés ]]></title>
<g:id>fd4d8b09-b7a5-4815-8c6f-4020522acfc5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard orthosiphon / piloselle 30 comprimés?fd4d8b09-b7a5-4815-8c6f-4020522acfc5 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le phytostandard orthosiphon piloselle de Pileje est un complément alimentaire qui favorise le drainage de l'organisme. L'orthosiphon soigne de nombreuses affections liées aux voies urinaires et biliaires tandis que la piloselle est utilisée pour son action diurétique.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401553702330</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/65695b3a44841d26ccb458b86c61b8559a7ddb23b8cf2e37ca2c67cb7c945aa1 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Rhodiole / Safran 30 comprimés ]]></title>
<g:id>1887aa5c-a275-4163-975c-864bc7a36b21</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard rhodiole / safran 30 comprimés?1887aa5c-a275-4163-975c-864bc7a36b21 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Phytostandard® de Rhodiole et Safran est destiné aux personnes cherchant à s'adapter au stress émotionnel et à améliorer l'humeur, grâce à sa composition à base d'extraits de rhodiole (<em>Rhodiola rosea</em> L.) et safran (<em>Crocus Sativus</em> L</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401529507631</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3a781cc963ba8cc37b8635f6514b5168a732ea1d46ed44917d0aed93d989d832 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandard Réglisse 20 gélules ]]></title>
<g:id>af2f819a-23b1-4fa8-8807-8d875461ecfb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandard réglisse 20 gélules?af2f819a-23b1-4fa8-8807-8d875461ecfb ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <ul class="i8Z77e"><li class="TrT0Xe">Inflammations gastro-intestinales (gastrites)</li>
<li class="TrT0Xe">Prévention des récidives ulcéreuses.</li>
<li class="TrT0Xe">Angines, pharyngites.</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560448146</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9141be227e7ca440cda5286abe86c799e9103a4b8e6b318bd868a2088721607 ]]></g:image_link>
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
<title><![CDATA[ Pileje Phytostandart Aubépine 20 gélules ]]></title>
<g:id>84d81cea-a787-451a-955e-31f03a7db6c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-phytostandart aubépine 20 gélules?84d81cea-a787-451a-955e-31f03a7db6c8 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Complément alimentaire à base d'extrait d'aubépine biologique</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401551602861</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85e5eb8cd455ada6507299be3f9494203c0d01918a94e3aa048d29479b8f0d85 ]]></g:image_link>
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
<title><![CDATA[ Pileje Porphyral HSP Derm Crème 50ml ]]></title>
<g:id>dd420a9b-cffa-4bd0-aaab-7bedfa562499</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-porphyral hsp derm crème 50ml?dd420a9b-cffa-4bd0-aaab-7bedfa562499 ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <p>Porphyral HSP Derm permet d'apaiser, hydrater et réparer les peaux altérées, sèches et déshydratées (couches superficielles de l’épiderme). D’origine naturelle, elle associe 4 ingrédients principaux issus du monde végétal.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401353861398</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/32962f8eb4004d3eec68a90dff3e102f4a59a092b25f49c58bcbe680b13e0dcb ]]></g:image_link>
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
<title><![CDATA[ Pileje Proteochoc 36 capsules ]]></title>
<g:id>75cf8dae-e8e1-4e39-835b-65a8adfe6626</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-proteochoc 36 capsules?75cf8dae-e8e1-4e39-835b-65a8adfe6626 ]]></link>
<g:price><![CDATA[ 1690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Proteochoc est un complément alimentaire à base de Porphyral HSP, un ingrédient issu d’une algue alimentaire, d'huile de bourrache et de vitamine E.</p><p>La vitamine E contribue à protéger les cellules contre le stress oxydatif.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401577447262</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5a8b506a76dc99339971c6ec3a8e572fdf9928df5d044308c1f1707576ab27db ]]></g:image_link>
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
<title><![CDATA[ Pileje Revitaline 10 sachets ]]></title>
<g:id>e78c52c2-2bf8-4d90-af1e-df897c3da04f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-revitaline 10 sachets?e78c52c2-2bf8-4d90-af1e-df897c3da04f ]]></link>
<g:price><![CDATA[ 2199.00 EUR ]]></g:price>
<description><![CDATA[ <p>Revitaline permet de renforcer ses apports alimentaires grâce à sa composition à base de protéines, vitamines et minéraux.</p><ul><li><p>Les protéines contribuent à augmenter et maintenir la masse musculaire.</p></li><li><p>Le magnésium contribue à la fonction musculaire normale.</p></li><li><p>Le sélénium, le zinc, les vitamines B6, B9, B12, C et D contribuent au fonctionnement normal du système immunitaire.</p></li><li><p>Le magnésium, les vitamines B6,B5,B9, B12 et C contribuent à réduire  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401553630039</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3845f6c2960140a3e25c409fae2b96e6e25a7d2639559ebbccd38e90b1d36c02 ]]></g:image_link>
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
<title><![CDATA[ Pileje Transitbiane 15 Sticks ]]></title>
<g:id>e3492afa-ebf3-4200-9a2a-da72309ef499</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-transitbiane 15 sticks?e3492afa-ebf3-4200-9a2a-da72309ef499 ]]></link>
<g:price><![CDATA[ 1599.00 EUR ]]></g:price>
<description><![CDATA[ <p>Transitbiane permet de compléter ses apports en fibres.</p><p>Riche en fibres</p><p>Les fibres d'avoine contribuent à augmenter le volume des selles</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401599829213</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2f90d845270e8a06bf316a1fddd3fdbe3353542b9e1ce5cd1a84d5eb10645fcd ]]></g:image_link>
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
<title><![CDATA[ Pileje Unibiane Potassium 120 comprimés ]]></title>
<g:id>d716304c-d5d4-4f17-8195-6d3f61d3c714</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-unibiane potassium 120 comprimés?d716304c-d5d4-4f17-8195-6d3f61d3c714 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Unibiane Potassium est destiné aux personnes ayant besoin de renforcer leurs apports en potassium.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600397</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d2acca9521be6d8f11b41e55f3acfe32759b1632de33d1498af24a56c5d6639 ]]></g:image_link>
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
<title><![CDATA[ Pileje Unibiane Vitamine B12 Flacon spray 20 ml ]]></title>
<g:id>2eda38df-53c2-483e-9257-e5ec9a6c725b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-unibiane vitamine b12 flacon spray 20 ml?2eda38df-53c2-483e-9257-e5ec9a6c725b ]]></link>
<g:price><![CDATA[ 1350.00 EUR ]]></g:price>
<description><![CDATA[ <p>Unibiane Vitamine B12 est destiné aux personnes ayant besoin de compléter leurs apports en vitamine B12.</p><p>La vitamine B12 contribue à des fonctions psychologiques normales.</p><p>La vitamine B12 contribue à la formation normale de globules rouges.</p><p>La vitamine B12 contribue au fonctionnement normal du système immunitaire et à réduire la fatigue.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3701145600205</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38277ebf0a3a1b6996d159dec81e4d96f9cb95246333a6c4622ad7ff51069f51 ]]></g:image_link>
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
<title><![CDATA[ Pileje Visiobiane Protect 30 capsules ]]></title>
<g:id>fb820d5c-77f4-42cc-adff-ee97a47a1378</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pileje-visiobiane protect 30 capsules?fb820d5c-77f4-42cc-adff-ee97a47a1378 ]]></link>
<g:price><![CDATA[ 1975.00 EUR ]]></g:price>
<description><![CDATA[ <div class="description wysiwyg-rendering">
<p>Visiobiane Protect est composé d'huile de poissons riche en acides gras oméga 3, de Porphyral HSP®, d'extraits d'oeillets d'Inde, d'extrait de safran, de vitamines et de zinc</p>
<div class="card-information info blue">
<div class="informations wysiwyg-rendering">
<p>L'huile de poissons riche en acides gras oméga 3 docosahexaénoïque (DHA) et la riboflavine contribuent au maintien d’une vision normale.</p>
<div class="list-informations">
<div class=" ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401564461745</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/58af34deaff3139b619250150623c1e6b195e7c01f8e72ccfbb8caa196f357b1 ]]></g:image_link>
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
<title><![CDATA[ Pilèje Cartimotil fort 30 gélules ]]></title>
<g:id>8fb7ac62-0b77-4f80-be1c-515b259fde3c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pil-je cartimotil fort 30 gélules?8fb7ac62-0b77-4f80-be1c-515b259fde3c ]]></link>
<g:price><![CDATA[ 1750.00 EUR ]]></g:price>
<description><![CDATA[ <p>un complément alimentaire qui associe 3 extraits de plantes : extrait de curcuma, extrait d'algue marine Porphyra umbilicalis et extrait de boswellia.</p>
<p> </p>
<ul><li>Plus couramment utilisé en épices pour constituer le curry, le curcuma contribue à apaiser les articulations sensibles et à augmenter la mobilité articulaire.</li>
</ul><ul><li>La boswellia serrata est la résine obtenue après incision des écorces de bosvellia (arbre originaire des zones arides de l'Inde et également présent ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560212921</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/52a13f49a7c9f825e37b85226b12cb7aea31558f4552f4488e71f07e046b98c5 ]]></g:image_link>
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
<title><![CDATA[ Pilèje Lactibiane Voyage 14 gélules ]]></title>
<g:id>99767a8e-da2c-4024-9166-cebe7b7e6f1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pil-je lactibiane voyage 14 gélules?99767a8e-da2c-4024-9166-cebe7b7e6f1c ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>En cas de séjour dans les zones tropicales ou équatoriales, notre corps doit s’adapter à des conditions de vie différentes : hygiène, climat, eau, nourriture... Il peut être agressé par des micro-organismes différents ou bien ne pas supporter les conditions climatiques.</p>
<p>Pour mieux profiter du voyage et éviter certains troubles intestinaux (comme la célèbre tourista), on peut renforcer la flore intestinale avec Pileje Lactibiane Voyage.</p>
<p>Pileje Lactibiane Voyage est un Microbiote  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401560503067</g:gtin>
<g:brand><![CDATA[ PILEJE ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/15b5235bc7baefd21e22d5f878f307047578874b04c2a11d8b174483d7e7d641 ]]></g:image_link>
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
<title><![CDATA[ Piment Brûleur 60 Comprimés ]]></title>
<g:id>c4eadc0d-eaa9-4e23-8b66-7a7e1ca8e116</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/piment-brûleur 60 comprimés?c4eadc0d-eaa9-4e23-8b66-7a7e1ca8e116 ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>New Nordic Piment Brûleur 60 Comprimés est un complément alimentaire issu d'une innovation suédoise qui aide à stimuler le métabolisme des personnes présentant une surcharge pondérale.</p>
<p>Brûleur 100% naturel composé de végétaux, comme la capsaïne (piment), l'épigallocatéchine gallate ou EGCG (thé vert), il permet de brûler plus de graisses et d'augmenter les dépenses énergétiques. Il contient aussi du gingembre, de l'aneth, de la menthe. Tous ces ingrédients sains agissent en synergie po ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401597785115</g:gtin>
<g:brand><![CDATA[ NEW NORDIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e9439028f3613fa74d0a35fa109e93a942f2b91d5a495228216c31bbda96a98d ]]></g:image_link>
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
<title><![CDATA[ Pin Up Le Masque Capillaire 200ml ]]></title>
<g:id>4daa92ca-0442-4ed9-9dc8-e27b915e5db0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up le masque capillaire 200ml?4daa92ca-0442-4ed9-9dc8-e27b915e5db0 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Découvrez notre Masque cheveux, un soin capillaire réparateur, hydratant et fortifiant adapté à tous types de cheveux : bouclés, frisés, gras, cassants, abîmés, lisses, colorés ou décolorés. Ce masque réparateur nourrit et revitalise les cheveux en profondeur, boostant la structure capillaire pour la fortifier. Il reconstitue la fibre capillaire et la protège des agressions oxydatives, redonnant brillance, vitalité, souplesse et élasticité pour des cheveux en pleine santé.</span><br />< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551769</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/71fc429482d80bcb7ae33ca1c68a75926ba234167b2d27372bc8570d48eea9e5 ]]></g:image_link>
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
<title><![CDATA[ Pin Up Secret Brume jardin d'Eden 200 ml ]]></title>
<g:id>19537453-802c-4299-83ec-475c1722e727</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret brume jardin d'eden 200 ml?19537453-802c-4299-83ec-475c1722e727 ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La BRUME Jardin D'Eden est une brume tonique pour le visage. Riche en eau florale de rose, allantoïne et hexapeptide-9 . Conçue pour tous types de peaux.</span><br /><span>Ses vertus et ses bienfaits:</span><br /><br /></p>
<ul><li>Tonifiante: donne de l'éclat à la peau du visage</li>
<li>Hydratante et apaise la peau du visage</li>
<li>Réparatrice, régénerante &amp; anti-age</li>
</ul><p><span>Brume Jardin d’Eden est une brume tonique dont l’action principale est de parfaire le démaquil ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551868</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/27542cb7f4c41dd62c2317a601d30323cab85e11335c17b1324c2d70b4068b23 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pin Up Secret Capillaire Le Shampoing 250ml ]]></title>
<g:id>c4b1abcd-61df-4b22-8f2b-8d0a08e0941c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret capillaire le shampoing 250ml?c4b1abcd-61df-4b22-8f2b-8d0a08e0941c ]]></link>
<g:price><![CDATA[ 2190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Notre <strong>SHAMPOING</strong> est un shampoing qui répare, renforce et fortifie les cheveux abîmés, fourchus ainsi que les pointes. Le Shampoing de la gamme <em><strong>p</strong><strong>in Up </strong></em><strong>Secret :<br /><br /></strong></p>
<ul><li>Répare, renforce et fortifie les cheveux</li>
<li>Donne force, brillance et souplesse à vos cheveux</li>
<li><strong>Principes actifs:</strong> Acide Hyaluronique, Extraits de Fleur de Soucis, Extraits de Caroube, Huile d’Argan, Proteine ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551394</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6dee0986165d174f22eadf48946cbe7349eb012ef4cb2fb123809b46013af69 ]]></g:image_link>
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
<title><![CDATA[ Pin Up Secret Capillaire Le Soin Profond 120ml ]]></title>
<g:id>21eedc2d-1d5f-4ea1-9625-a9454dd7629d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret capillaire le soin profond 120ml?21eedc2d-1d5f-4ea1-9625-a9454dd7629d ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le soin profond est un traitement intensif pour les cheveux. Enrichi en kératine, protéines de soie et de blé, huile d’argan et acides aminés, il est spécialement conçu pour nourrir en profondeur, hydrater, réparer et renforcer les cheveux de l'intérieur. Ce soin est idéal pour tous types de cheveux : bouclés, frisés, cassants, abîmés, lisses, colorés ou décolorés.</p>
<ul><li>Répare, Restaure, Nourrit et Hydrate en profondeur le cheveu</li>
<li>Apporte souplesse et brillance</li>
<li><strong ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551776</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ce7501b742799a3a393c8e3cd350d26401975190fc9a362ee1fcdfa2e270f47 ]]></g:image_link>
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
<title><![CDATA[ Pin Up Secret Crème Précieuse au Lait de Chèvre 50 ml ]]></title>
<g:id>df13b97e-a9b3-4e0a-9f16-c3d8775d8fe1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret crème précieuse au lait de chèvre 50 ml?df13b97e-a9b3-4e0a-9f16-c3d8775d8fe1 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pin Up Secret Crème Précieuse au Lait de Chèvre 50 ml est une crème visage spécialement formulée pour apaiser des peaux sèches et à problèmes.</p>
<p>Enrichie en lait de chèvre, huile d'arbre à thé et gotu kola (plante médicinale utilisée dans l'ayurveda et dans la médecine traditionnelle chinoise), elle agit au cœur de l'imperfection et permet de retrouver un grain de peau lisse et unifié, un teint sans défaut.</p>
<p>Sans paraben.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300550298</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0bcad6711066226f09403d3eb0a5d88c6fad4cec959b884a12c7bf037015e42f ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pin Up Secret Crème sans Huile 50ml ]]></title>
<g:id>29fa5b0e-80c9-4dcf-b9ee-d8a5894295ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret crème sans huile 50ml?29fa5b0e-80c9-4dcf-b9ee-d8a5894295ff ]]></link>
<g:price><![CDATA[ 2890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>La Crème sans Huile de texture fine et légère et non grasse, riche en minéraux, extraits de plantes naturelles. Idéale pour les peaux grasses et acnéiques, permet de réguler le niveau de PH de la peau tout en la re-minéralisant. Pour un teint parfait sans imperfections, une peau pleine de vitalité. Contient également des filtres UVA/UVB qui préservent la peau des méfaits du soleil. </span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300550311</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42e2f0d0dd237439a49216cae53b90c1c4103f9483bfa029d6acdd54d55d26dc ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pin Up Secret Secret Biphasé démaquillant 200 ml ]]></title>
<g:id>cc8a5e4a-999f-403f-9764-faacbafeb502</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret secret biphasé démaquillant 200 ml?cc8a5e4a-999f-403f-9764-faacbafeb502 ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le SECRET BIPHASE est un démaquillant à 2 phases. Conçue pour les peaux normales à sèches. Une fois mélangées les 2 phases demaquillent la peau du visage sans l'agresser.  Ses deux phases auront un effet double ; l’élimination des traces de maquillage et des impuretés.</span><br /><span>Ses Bienfaits:</span></p>
<ul><li>Hydratant , apaisant et de tonifiant</li>
<li>Purifiiant: il permet de  protéger et  de réparer la peau des agressions extérieures</li>
<li>Favoriser la croissance du co ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551899</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/96cf1cdf9adc7adfb1370bbf881f3cb5b4c65edac33aa166b1328c280103c582 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pin Up Secret Secret démaquillant lait 200 ml ]]></title>
<g:id>ba52d43c-cba3-4fe8-b5c2-9132e1e6cfdf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret secret démaquillant lait 200 ml?ba52d43c-cba3-4fe8-b5c2-9132e1e6cfdf ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le SECRET Démaquillant est un lait démaquillant onctueux. Riche en eau florale de rose de Damas et feuille d'hamamélis. Conçue pour peau normale à grasse. Il permet :</span></p>
<ul><li>D'Hydrater, d'apaiser et donner de l'éclat à la peau</li>
<li>Protéger la peau des agressions extérieures et Réguler l'excès de sebum</li>
<li>D'Eliminer le maquillage et les impuretés de la peau du visage</li>
</ul><p><span>Secret Démaquillant est un lait onctueux, doux et ultra frais. Il est enrichi en ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551929</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/44a315948b1d16c1f375027fac25e4c679cd0609f9c9a8b4346e024f4fc09097 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pin Up Secret Secret teint précieux Masque au lait de chèvre ]]></title>
<g:id>0b1bbbe4-f47c-4a41-bc27-331ba37762c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret secret teint précieux masque au lait de chèvre?0b1bbbe4-f47c-4a41-bc27-331ba37762c5 ]]></link>
<g:price><![CDATA[ 2600.00 EUR ]]></g:price>
<description><![CDATA[ <div class="main-container col1-layout">
<div class="main">
<div class="col-main">
<div class="product-view" id="product-view">
<div class="product-collateral" id="product-tabs">
<div class="tabs">
<div class="tab opened">
<div class="content">
<p><strong>Le Savon au Lait de Chèvre Visage et Corps de Pin up Secret</strong> est formulé pour les peaux mixtes à grasses sujettes aux imperfections. Dès l'utilisation, il va nettoyer en profondeur la peau, éliminer toutes les impuretés et les cellules  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300550335</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40bac6edd959f79e31edd68f03c398a8b111a1826cb3e5e941251d4c800ffae0 ]]></g:image_link>
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
<title><![CDATA[ Pin Up Secret le Serum Cheveux 30ml ]]></title>
<g:id>6d348066-36f5-4a71-802d-e672e823f2b7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret le serum cheveux 30ml?6d348066-36f5-4a71-802d-e672e823f2b7 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Notre Sérum cheveux nourrissant est une solution de soin capillaire avec une formule avancée et unique. Idéal pour tout type de cheveux - bouclés, frisés, cassants, abîmés, lisses, colorés ou décolorés, il renforce et illumine la chevelure. Découvrez les bienfaits de ce sérum capillaire enrichi en kératine et Glyoxyloyl Carbocysteine. Il offre une expérience de soin capillaire unique, pour des cheveux plus forts, plus lisses et plus sains.</p>
<ul><li>Nourrit et Lisse les cheveux</li>
<li>Ren ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300551783</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f9bd11143c019e6ec9538695c7d4730ebd5bb4d4ca36d639b9223d719ba7202e ]]></g:image_link>
<g:product_type><![CDATA[ Dermocosmétique > CAPILLAIRES > SHAMPOOING ET SOINS CAPILLAIRES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pin Up Secret soin doux exfoliant 200 ml ]]></title>
<g:id>edc237e5-381f-4fdf-810d-4f1332fb0f71</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pin-up secret soin doux exfoliant 200 ml?edc237e5-381f-4fdf-810d-4f1332fb0f71 ]]></link>
<g:price><![CDATA[ 2590.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le SOIN DOUX EXFOLIANT est un soin exfoliant visage</span> conçu spécifiquement pour les points noirs et les imperfections. Il permet de :</p>
<ul><li>Désincruster les pores</li>
<li>Nettoyer en profondeur</li>
<li>Débarrasser votre peau des impuretés</li>
</ul><p><span>Le SOIN DOUX EXFOLIANT est un gommage visage doux</span><span>. Gommage visage enrichi en lait de chèvre, en huile d'arbre à thé et gotu kola, plante médicinale utilisée dans l'ayurveda et la médecine traditionnelle chin ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760300550328</g:gtin>
<g:brand><![CDATA[ PIN'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/442ab7c615aba28826f488665394594dfcfae1ed8cca40d19ddae1a92c9c6edc ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Baume lèvres anti-âge repulpant 4g ]]></title>
<g:id>02694850-c147-4b6b-9d56-80d8f2782c87</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-baume lèvres anti-âge repulpant 4g?02694850-c147-4b6b-9d56-80d8f2782c87 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'association unique de Biocrystal ® (actif breveté) et d'un peptide vectorisé* stimule la production de collagène et d'acide hyaluronique, les deux deux éléments à l'origine de la beauté et du volume des lèvres.<br />Des actifs naturels hydratent, nourrissent et protègent les lèvres : beurre de karité, huiles végétales de ricin et de noix de coco.</p>
<p>Résultats : Les signes du temps sont atténués. Les lèvres sont lissées et plus douces.<br /><br />Visiblement repulpées, elles retrouvent l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700614</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/31b3d0956c2dc857d0210b84f5b529fc41753c7de43c37d945962d3de6880b5f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Crème régénératrice ultra-hydratante Peaux très Séches 200ml ]]></title>
<g:id>5220f8bd-3e03-4d0b-bcc7-b9ae51759fab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-crème régénératrice ultra-hydratante peaux très séches 200ml?5220f8bd-3e03-4d0b-bcc7-b9ae51759fab ]]></link>
<g:price><![CDATA[ 1420.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">La Crème régénératrice ultra-hydratante des laboratoires Placentor Vegetal est une crème ultra hydratante visage et corps particulièrement adaptée aux peaux très sèches et déshydratées, sujettes aux tiraillements.</p>
<p class="p1">Grâce à l'action de la Crème régénératrice ultra-hydratante, l’état de surface de la peau est visiblement amélioré, la peau retrouve douceur, confort et souplesse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700027</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/549f0535f45cf741605ba57dcce6443e66cfc498078c317d22fc01ef1c2466cc ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Lotion tonique oxygénante 250 ml ]]></title>
<g:id>e7bec883-719e-429e-bb82-addc75443bd6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-lotion tonique oxygénante 250 ml?e7bec883-719e-429e-bb82-addc75443bd6 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>C'est une lotion sans alcool qui tonifie, revitalise et oxygène la peau grâce à l'eau d'algues bleues, source nourricière exceptionnelle. Un complexe de minéraux essentiels (magnésium, zinc, cuivre) associés à des acides aminés intelligents booste l'oxygénation de la peau et la protège de la pollution.</p>
<p>Sa formule est enrichie en allantoïne apaisante et en sodium PCA, un hydratant naturellement présent dans la peau.</p>
<p>Testé sous contrôle dermatologique.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700942</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40f54eaf825c505f6b18713cc423a709dd59e34b405f5512ee57bf50e5af383a ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Pain Surgras  Dermatologique 110g ]]></title>
<g:id>bdb0c89a-8189-4e32-9320-828c3830a8ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-pain surgras  dermatologique 110g?bdb0c89a-8189-4e32-9320-828c3830a8ce ]]></link>
<g:price><![CDATA[ 460.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs-1">
<p>Ce pain dermatologique hypoallergénique, sans parfum et au pH neutre nettoie en douceur, protège et apaise les peaux les plus délicates. Pour le visage et le corps.</p>
<p>Sa base lavante ultra douce, sans savon, respecte parfaitement la barrière de protection cutanée. Sa composition riche en ingrédients émollients et nourrissants (30%) réduit les sensations d’inconfort (rougeurs, tiraillements, démangeaisons…) et compense les effets desséchants de l’eau calcaire. Le beurre  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099702465</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f524ccc76f684f3233b39b53cf0472c1248c5103c6fae928962d1a9fdc2f4737 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Vegetal Fluide Purifiant et Matifiant  40ml ]]></title>
<g:id>17f1a562-89d3-4689-82ba-74df712c1903</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-vegetal fluide purifiant et matifiant  40ml?17f1a562-89d3-4689-82ba-74df712c1903 ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Soin d’attaque et de fond, ce <span>Fluide Purifiant Marifiant</span> réduit visiblement les imperfections dès 7 jours et assure une action anti-récidive. Dès la 1ère application, il lisse et affine visiblement le grain de peau. Sa texture légère à absorption rapide laisse la peau nette et matifiée toute la journée.</p>
<p>Améliore la tenue du maquillage.</p>
<p>Fini poudré.</p>
<p>Sans huiles minérales ni silicones.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099702243</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b234c9bf7d168cf445e50279da2c60c376fad56cf315839c4420b1407c41c42d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Végétal Crème dépigmentante 30ML ]]></title>
<g:id>4b7ec89f-fbf1-4690-83cb-1edb24daf868</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal crème dépigmentante 30ml?4b7ec89f-fbf1-4690-83cb-1edb24daf868 ]]></link>
<g:price><![CDATA[ 1220.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème éclaircissante pour le visage et le corps qui prévient et atténue les tâches brunes liées au vieillissement, à l'excès de soleil ou à des modifications hormonales (masque de grossesse).</p>
<p>Résultats : Le teint s'éclaircit et devient plus uniforme, les tâches s'atténuent visiblement.</p>
<p>La peau retrouve douceur et confort.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700072</g:gtin>
<g:brand><![CDATA[ SICOBEL ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/84ce2f3a97c136da6cdbae21218f2bcb9511e9c2b833bd2de522b84256294267 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor Végétal Fluide Hydratant Peaux Normales et Mixtes 40 ml ]]></title>
<g:id>363455df-1c47-430e-b822-091b2f2d072b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal fluide hydratant peaux normales et mixtes 40 ml?363455df-1c47-430e-b822-091b2f2d072b ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le fluide hydratant placentor végétal est le soin quotidien des peaux normales à mixtes.</p>
<p>Il hydrate et masque la brillance pour une peau belle et douce.</p>
<p>Hydrate et matifie la peau. Le fluide hydratant de Placentor végétal est un soin spécialement formulé pour les peaux normales à mixtes.</p>
<p>Il masque les brillances de la zone T grâce à ses poudres minérales tout en hydratant et en matifiant l'épiderme pour lui redonner douceur, fraîcheur et beauté.</p>
<p>Ce soin est non com ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700508</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da57d3550db9800579c3a57b70a044c2acb5ef8cc82b730669e9623e24dc9ac7 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor crème contour des yeux et lèvres 30ml ]]></title>
<g:id>75b47e52-970e-41d6-a365-f1275c2ea50b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-crème contour des yeux et lèvres 30ml?75b47e52-970e-41d6-a365-f1275c2ea50b ]]></link>
<g:price><![CDATA[ 1520.00 EUR ]]></g:price>
<description><![CDATA[ <p>Crème réparatrice. Prévient et atténue rides et ridules en redensifiant et en restructurant l'épiderme, hydrate en profondeur : Collagène Marin pur hydrolysé parfaitement assimilable.</p>
<p>Sans iode Collagène d'Acacia.</p>
<p>Stimule la régénération cellulaire et assure une hydratation immédiate et durable : Placenta Végétal.</p>
<p>Nourrit et assouplit le contour de l'œil (action relipidante) : Cire d'abeille, glycérine extraite du ricin, huile de noyaux d'abricot.</p>
<p>Résultats : Les r ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700140</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5fbd4848c98d527e0941c27c4b712678e42fc176d3caf189779d95cf17461078 ]]></g:image_link>
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
<title><![CDATA[ Placentor crème gommante visage 50ml ]]></title>
<g:id>3d4b8e8b-3130-48d2-81b1-e6ac4ebb4780</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-crème gommante visage 50ml?3d4b8e8b-3130-48d2-81b1-e6ac4ebb4780 ]]></link>
<g:price><![CDATA[ 925.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Crème gommante très douce enrichie en micro-billes de Jojoba. Élimine les cellules mortes et les impuretés tout en respectant la barrière cutanée.</p>
<p class="p1">Affinée, la peau retrouve souplesse et éclat. Prépare la peau à recevoir les soins Placentor Végétal. Tolérance testée par des dermatologues.</p>
<p class="p1">La crème gommante visage des laboratoires Placentor est un gommage doux pour le visage et le cou adapté à toutes les peaux, même les plus fragiles, qui prépare l ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700249</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b07765e72b37421096fed3e0486a1ab30cf937ae134c7a6823dc5dff68d173c8 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor vegetal gel nettoyant visage 150ml ]]></title>
<g:id>789d8caf-7bf5-4601-b9be-bcb00b438dc2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-vegetal gel nettoyant visage 150ml?789d8caf-7bf5-4601-b9be-bcb00b438dc2 ]]></link>
<g:price><![CDATA[ 840.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Gel nettoyant aux huiles essentielles de Lavande, Romarin et extrait d'Iris.</p>
<p class="p1">Pour toutes celles qui aiment se rincer à l'eau, pour les hommes et les adolescents. </p>
<p class="p2">Spécialement formulé pour nettoyer efficacement et en douceur les peaux grasses et à tendance acnéïque. </p>
<p class="p2">L'action bénéfique anti-microbienne des extraits d'Iris est combinée aux huiles essentielles de Lavande et Romarin. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700188</g:gtin>
<g:brand><![CDATA[ PHARM'UP ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3adfb5bdb8c43657a1f2d91f5d9188a2ded88b610b187abc3c7f55a0146c1105 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal Crème régénératrice hydratante 40ml ]]></title>
<g:id>b5cf6451-6100-4236-9b8a-d6105a7e48b4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal crème régénératrice hydratante 40ml?b5cf6451-6100-4236-9b8a-d6105a7e48b4 ]]></link>
<g:price><![CDATA[ 830.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">La Crème régénératrice hydratante des laboratoires Placentor Vegetal est une crème de soin jour et nuit pour le visage, idéale pour les peaux sèches et sensibles. L'état général de surface de l'épiderme s'améliore visiblement : les imperfections (rides, ridules, cicatrices) s'atténuent. La peau est plus souple et plus douce.</p>
<p class="p1">Elle possède des propriétés diverses <strong>:</strong></p>
<p class="p1">- Soin réparateur des cicatrices (après chirurgie réparatrice ou es ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700010</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c15059cd1d13615899d9aa4e6311cc6f2b8c009f341efa92686996d07a3e67bb ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal Huile nettoyante démaquillante 125 ml ]]></title>
<g:id>ffe089d9-ba27-43b6-8ea5-9a00271c0cd3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal huile nettoyante démaquillante 125 ml?ffe089d9-ba27-43b6-8ea5-9a00271c0cd3 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Associant des précieuses huiles 100% d’origine végétale, cette huile nettoie la peau en douceur et dissout tous les maquillages, même waterproof. Secrets de beauté ancestraux, l’huile d’argan et l’huile de melon de Kalahari sont réputées pour favoriser la régénération et la douceur de la peau. L’huile de mirabelle nourrit et assouplit la peau. Ne laisse pas de film gras, convient donc également aux peaux mixtes à grasses.</p>
<div id="tabs-1">
<p>Testé sous contrôle dermatologique.</p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099701000</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d6ac4eb1b1f49f45db2746991d75946e38ba140a5d3a65a3d1815fffb2ba420c ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal Lotion anti-chute fortifiante 125 ml ]]></title>
<g:id>86716297-546f-4310-bbae-dfdc2016c7b9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal lotion anti-chute fortifiante 125 ml?86716297-546f-4310-bbae-dfdc2016c7b9 ]]></link>
<g:price><![CDATA[ 1880.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs-1">
<p>Hautement concentrée en actifs innovants, cette lotion <span>3 en 1</span> offre une action anti-chute globale tout en apportant un véritable soin à la chevelure.</p>
<p><span>INDICATIONS</span><br />1. Chute de cheveux chronique et occasionnelle/réactionnelle (stress, fatigue, régime, changement de saison, post-grossesse, ménopause…)<br />2. Manque de volume et de brillance<br />3. Perte de densité<br />4. Etat pelliculaire et inconfort du cuir chevelu<br />Convient aux jeu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099701406</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/31f405841713b8744aa43cb3495442b376c69ae7bf7568385424ba942c319b2f ]]></g:image_link>
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
<title><![CDATA[ Placentor végétal Masque purifiant Argile verte 150ml ]]></title>
<g:id>d74c3189-fabb-467f-9125-7f6c422b436c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal masque purifiant argile verte 150ml?d74c3189-fabb-467f-9125-7f6c422b436c ]]></link>
<g:price><![CDATA[ 1125.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Ce Masque purifiant Argile verte des laboratoires Placentor Vegetal est un masque nettoyant désincrustant qui purifie en profondeur et en douceur les peaux normales, mixtes et grasses à tendance acnéique.</p>
<p class="p1">Les pores sont nettoyés et resserrés, la peau est propre et nette, elle est prête à profiter des bienfaits des soins traitants Placentor Végétal.</p>
<p class="p1">Grâce à ce Masque purifiant votre teint est frais et lumineux.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700287</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/03b47d46747246666b87625ab49c89b2a1c99e464c81e9c00a41177bb2d77453 ]]></g:image_link>
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
<title><![CDATA[ Placentor végétal Sérum régénérant 30 ml ]]></title>
<g:id>89b28fd5-473d-4059-ae1e-8fcf76dd9381</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal sérum régénérant 30 ml?89b28fd5-473d-4059-ae1e-8fcf76dd9381 ]]></link>
<g:price><![CDATA[ 1925.00 EUR ]]></g:price>
<description><![CDATA[ <div id="tabs-1" class="make_transist hidescale showscale">
<p>Le stress, la fatigue, le vieillissement conduisent à une désynchronisation de l’horloge biologique cutanée. Les mécanismes de protection (jour) et de réparation (nuit) sont altérés. Résultats : la peau devient déshydratée, terne, elle manque de fermeté et les rides se creusent.</p>
<p>Ce sérum régénérant apporte une réponse globale. Un actif innovant (racine de Lindera) resynchronise l’horloge biologique cutanée. Un complexe de 12 a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700560</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2255692579a654b20580560ccf258df7c14c809f89c21419b491fca628e3e6b ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal crème anti-âge légère 50ml ]]></title>
<g:id>d4dab27a-b854-4788-984c-84ce08e4f2ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal crème anti-âge légère 50ml?d4dab27a-b854-4788-984c-84ce08e4f2ca ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Crème structurante à la texture légère apporte une action anti-âge</p>
<p>globale. Elle atténue les rides et redonne à la peau toute son élasticité et sa tonicité. La peau est réparée dès 2 jours*. Pénètre rapidement. Convient aux peaux sensibles.</p>
<p></p>
<p></p>
<p><br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700539</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da39a0640f9140c005ca3c0d2e142fb653427b8c7d5c1c780a623d2a3c332bcd ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal crème régulatrice peaux mixtes 50ml ]]></title>
<g:id>e91198dd-f196-4fde-9ce9-c6344d65179a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal crème régulatrice peaux mixtes 50ml?e91198dd-f196-4fde-9ce9-c6344d65179a ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Crème de jour régulatrice et matifiante spécialement formulée pour les peaux mixtes, grasses à tendance acnéique.</p>
<p class="p1">Sa pénétration rapide et son fini mat seront appréciés par les adolescents et les hommes.</p>
<p class="p1">Cette crème de jour légère régulatrice et matifiante, spécialement formulée pour les peaux mixtes, grasses à tendance acnéique, assure une pénétration rapide et un fini mat qui en font un soin également appréciés par les adolescents et les hommes ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700058</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/694a5c6ef1230061de765c880bed7e11bd911ac380e98f0d1f61e84a2f1a9063 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal crème structurante anti-âge 50ml ]]></title>
<g:id>faeb9710-0ceb-4f8e-87d5-07d02487b17b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal crème structurante anti-âge 50ml?faeb9710-0ceb-4f8e-87d5-07d02487b17b ]]></link>
<g:price><![CDATA[ 1460.00 EUR ]]></g:price>
<description><![CDATA[ <p>La crème structurante anti-âge Placentor apporte fermeté et tonicité à la peau tout en prévenant et en atténuant les rides.</p>
<p class="p2">Hydrate et redonne fermeté à la peau tout en luttant contre les rides.</p>
<p class="p2">La crème structurante anti-âge Placentor végétal est riche en collagène marin et en placenta végétal. Elle permet de lutter contre les signes visibles de l'âge et de redonner fermeté et tonicité à la peau. Elle prévient et atténue les rides tout en assurant une hydr ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700133</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/23bc0fe156d534f9e436ecdf0fd72dc44f373ef2f235cd96a157bb3a1552ad75 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal lait corporel soin hydratant 400ml ]]></title>
<g:id>7dad8d37-86f3-4cdb-8228-ec15cbf7beba</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal lait corporel soin hydratant 400ml?7dad8d37-86f3-4cdb-8228-ec15cbf7beba ]]></link>
<g:price><![CDATA[ 1030.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Lait corporel, à la texture fluide, régénère et hydrate intensément. Ce soin procure une agréable sensation de fraîcheur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700935</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/60ab2ea13036196df910ad0a9c1b5631763fd8f4728ba5ff80150c583df6ef01 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal lait démaquillant 250ml ]]></title>
<g:id>b375b2eb-4121-4296-b745-9c89f56478e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal lait démaquillant 250ml?b375b2eb-4121-4296-b745-9c89f56478e4 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait démaquillant à l'huile d'abricot Placentor végétal est spécialement formulé pour nettoyer et démaquiller en douceur toutes les peaux même les plus délicates.</p>
<p>Il est aussi bien adapté au démaquillage des yeux que du visage.</p>
<p>Résultats : Parfaitement démaquillée et débarrassée des impuretés, la peau est nette, souple.</p>
<p>Le teint est frais.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700195</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/144b81798e231d61f0870aa82789411862a93ab7a49c9f8637e56e1570f2dfd3 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal lotion tonique florale 250ml ]]></title>
<g:id>87143484-dbf8-41e7-99dd-ba852596ccf8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal lotion tonique florale 250ml?87143484-dbf8-41e7-99dd-ba852596ccf8 ]]></link>
<g:price><![CDATA[ 725.00 EUR ]]></g:price>
<description><![CDATA[ <p>La Lotion tonique florale des laboratoires Placentor Vegetal est une lotion douce et rafraîchissante sans alcool qui parfait le nettoyage et le démaquillage de toutes les peaux, même sensibles.</p>
<p class="p1">Grâce à la Lotion tonique florale, la peau est propre et nette, elle prête à profiter des bienfaits des soins traitants Placentor Végétal.</p>
<p class="p1">Elle retrouve toute sa douceur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700225</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ac423a2d4cb1768a3089c30e2e9f1f31379330e719c868467f27784f7cb8b535 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal masque intégral anti-âge 35 g ]]></title>
<g:id>1f44c358-2a5b-49f4-8c03-2be80c21fc6e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal masque intégral anti-âge 35 g?1f44c358-2a5b-49f4-8c03-2be80c21fc6e ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le Masque intégral anti-âge est un masque tissu doux, prêt à l’emploi, imbibé d’un gel riche en actifs végétaux aux propriétés</p>
<p>anti-âge.<br />Produit cosmétique pouvant être recommandé en complément de soins esthétiques ou dermatologiques. Demandez conseil à votre dermatologue ou médecin-esthétique.</p>
<p></p>
<p></p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700218</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/722e31de66eb2657d6198381504c3e2215f029a7177c0c4b9c82be19aee56509 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Placentor végétal pads anti cernes et anti poches 6 sachets ]]></title>
<g:id>0a804bd0-cbde-49cf-b027-13420bc2e4de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/placentor-végétal pads anti cernes et anti poches 6 sachets?0a804bd0-cbde-49cf-b027-13420bc2e4de ]]></link>
<g:price><![CDATA[ 1340.00 EUR ]]></g:price>
<description><![CDATA[ <p class="p1">Pads tissus doux, imbibés d'un gel gorgé d'actifs végétaux, qui agissent sur tous les fronts pour atténuer les cernes et les poches de votre regard.</p>
<p class="p3">Pads tissus doux, imbibés d'un gel gorgé d'actifs végétaux, qui agissent sur tous les fronts pour atténuer les cernes et les poches de votre regard.</p>
<p class="p3">La camomille d'Or et la Centella Asiatica activent la micro-circulation tandis que la Caféine facilite le drainage et qu'un extrait de levure réduit l'h ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760099700171</g:gtin>
<g:brand><![CDATA[ PLACENTOR ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/892cbdd466b20e659066ab6f55614b33af391eb4e61c51479952ad53452e7d73 ]]></g:image_link>
<g:product_type><![CDATA[ SOINS VISAGE ET CORPS ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Poderm Color Care Vernis à ongles Top Coat - 8ml ]]></title>
<g:id>ce3faebf-8eec-47b2-83f0-10077348398c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-color care vernis à ongles top coat - 8ml?ce3faebf-8eec-47b2-83f0-10077348398c ]]></link>
<g:price><![CDATA[ 1550.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Le Top Coat Color Care</span>, enrichi en Tea Tree, Biotin et Silicium, <span>prolonge</span> <span>la tenue</span> de votre vernis et assure une<span> finition ultra-brillante</span>. Il maintient les ongles en bonne santé et <span>laisse passer les Sérums Ongles PODERM</span> afin de continuer à soigner un ou plusieurs ongles abîmés.</p>
<p>Le pinceau précis épouse parfaitement la forme de l’ongle pour une<span> protection et brillance</span> au rendu professionnel.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178211797</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/643a0b920deb72837f1c4a35a1bd513fc73fbb5a5af8a94dd71574b0d77083fb ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Poderm Complément Booster 6ml ]]></title>
<g:id>daeeaf1f-792a-46d4-a668-ade8d7f7718d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-complément booster 6ml?daeeaf1f-792a-46d4-a668-ade8d7f7718d ]]></link>
<g:price><![CDATA[ 1950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Poderm Complément Booster 6 ml est un soin pour l'ongle atteint de mycose qui accélère le processus de réparation de celui-ci.</p>
<p>Il est recommandé aux personnes qui souhaitent retrouver des ongles sains, lisses et brillants plus rapidement et dans le cas de mycose de l'ongle sévère et difficile à traiter.</p>
<p>Ses actifs "booster" tel que le Tea Tree, le Palmarosa et le Clou de Girofle accélère la pénétration de l'Huile-Sérum (ou autre traitement anti-fongique)</p>
<p>tout en créant un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210127</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94706226aee707df33ff1b7b411ddd876922d4a1981eafd2a3d3697280060cf5 ]]></g:image_link>
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
<title><![CDATA[ Poderm Huile-Sérum Apaisante 8ml ]]></title>
<g:id>4539ee38-e2ae-489e-b0e6-fc674eb10c2d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-huile-sérum apaisante 8ml?4539ee38-e2ae-489e-b0e6-fc674eb10c2d ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Poderm Soothing Serum-Oil 8ml est un soin quotidien spécialement formulé pour les ongles en volute et sensibles, il apaise, adoucit et nourrit les</p>
<p>ongles.</p>
<p>Ce soin pour les ongles contient un concentré d'agents apaisants, nourrissants et revitalisants.</p>
<p>Il contient des huiles essentielles anti-inflammatoires et anti-septiques très efficaces contre les ongles incarnés.</p>
<p>Les actifs libérés pénètrent en profondeur dans la peau des sillons et l'ongle pour une repousse ind ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210028</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5d6341aeaf0b14bc573e318260af90442368f54da11837411cb5075b54bc8c2e ]]></g:image_link>
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
<title><![CDATA[ Poderm Huile-Sérum Nourrissante 8 ml ]]></title>
<g:id>51ac422b-ddfd-412c-a66d-a5b19b429f72</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-huile-sérum nourrissante 8 ml?51ac422b-ddfd-412c-a66d-a5b19b429f72 ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Poderm Huile-Sérum Nourrissante 8 ml est un soin quotidien spécialement formulé pour les ongles striés, secs et cassants.</p>
<p>Ce soin pour les ongles est formulé avec des concentration maximisées puissantes nourrissantes et revitalisantes. Il contient 100% d'ingrédients d'origine naturelle dont 2 huiles essentielles précieuses : de l'huile essentielle de Cannelle de Ceylan et de Citron bio aux propriétés réparatrices et protectrices.</p>
<p>Il contient également 6 huiles végétales :</p>
<p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210011</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0d6a57d82bce73dd9d956956121da8ef5de3bf1c12642d730a230378fde31d46 ]]></g:image_link>
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
<title><![CDATA[ Poderm Huile-Sérum Purifiante 8 ml ]]></title>
<g:id>652cc009-d8d7-4b8b-bad1-8fa1e82fb93e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-huile-sérum purifiante 8 ml?652cc009-d8d7-4b8b-bad1-8fa1e82fb93e ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Poderm Huile-Sérum Purifiante 8 ml est un soin quotidien spécialement formulé pour les ongles jaunes et abîmés, il assainit, répare et clarifie les ongles.</p>
<p>Ce soin est formulé avec des concentrations maximisées puissantes anti-fongiques, nourrissantes et réparatrices, cette formulation unique est la plus efficace du marché. Elle permet de soigner efficacement et durablement les affections fongiques de l'ongle, et éviter la propagation de l'infection sur les autres ongles du pied. Elle  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210004</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/94304b460b44ad888b7cb5a972c3d61e112bc584c7a2d3ed58d8996e6d192288 ]]></g:image_link>
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
<title><![CDATA[ Poderm Ongles Noirs Traumatises ]]></title>
<g:id>b4ab3acf-1651-40e6-b2d2-784b068f8ca7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-ongles noirs traumatises?b4ab3acf-1651-40e6-b2d2-784b068f8ca7 ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Soin quotidien des ongles et contours, sujets aux traumatismes.</li>
<li>Ongles noirs, traumatisés</li>
<li>Recommandé pour tous les sportifs.</li>
<li>Convient à tous les ongles, pieds et mains, aux diabétiques et à toute la famille.</li>
<li>
<ul><li>L’ huile-sérum Fortifiante Ongles &amp; Contours est concentrée de 12 plantes puissantes fortifiante, réparatrices et revitalisantes. Cette formulation unique est la plus efficace du marché pour résorber les hématomes (ongles noirs), répar ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210042</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/82b25bc725da7bf298cbbed510e49109af9849f514adcfc253012ab041b45785 ]]></g:image_link>
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
<title><![CDATA[ Poderm Ongles et contours Huile-sérum Ongles Abimés 8ml ]]></title>
<g:id>4a96465c-5529-41a8-9560-efb6f3c73b6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-ongles et contours huile-sérum ongles abimés 8ml?4a96465c-5529-41a8-9560-efb6f3c73b6c ]]></link>
<g:price><![CDATA[ 1890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'</span><span>Huile-sérum Kids Poderm</span><span> est un soin quotidien spécialement formulé pour les </span><span>ongles abîmés et fragilisés des enfants et bébés</span><span>, dès 3 ans.</span><br /><br /><span>Les ongles des enfants, comme ceux des adultes, peuvent être fragilisés, abîmés, se dédoubler ou se décoller. Les jeux des enfants et leur exploration du monde se fait avec les cinq sens et notamment avec le toucher qui est loin de ménager leurs ongles fragiles, qui risquent  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210226</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb7ad71145e4e41be94bfd014c784826e31e79a48a95fc9b0a9f82c53a95cc05 ]]></g:image_link>
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
<title><![CDATA[ Poderm Pieds Irrités et Sensibles Serum 75ml ]]></title>
<g:id>e76ac192-998c-41d8-831f-4fcbea6f79dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-pieds irrités et sensibles serum 75ml?e76ac192-998c-41d8-831f-4fcbea6f79dd ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Enrichi en arnica et huile essentielle de tea tree, le sérum Pieds Irrités et Sensibles Poderm® a été spécifiquement formulé pour les personnes ayant la peau sensible et à tendance atopique, qui peut présenter des zones de sécheresse :</p>
<ul><li>il <span>apaise les rougeurs</span> et calme les <span>démangeaisons</span> pendant 24 heures,</li>
<li>il <span>nourrit intensément</span> les zones de sécheresse et ralentit le processus de <span>desquamation</span>,</li>
<li>il réduit la <span>se ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178212336</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b77f021503e710151b1e8f92def1fcf4ce6a262c09720fd0d57ec78ae1a91163 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Poderm Pieds Très Secs et Abimés Serum 75ml ]]></title>
<g:id>51d04787-cbab-457e-9e73-025672aaaff6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-pieds très secs et abimés serum 75ml?51d04787-cbab-457e-9e73-025672aaaff6 ]]></link>
<g:price><![CDATA[ 2990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Des rugosités blanches et des fendillements peuvent apparaître sur les talons et l’avant-pied. Le<span> sérum Pieds Très Secs et Abîmés Poderm</span> a été spécifiquement formulé pour les personnes ayant la peau très sèche, pouvant durcir et s’épaissir :</p>
<ul><li>il répare et nourrit intensément les pieds très secs pendant 24 heures,</li>
<li>il assouplit les <span>peaux dures</span>, lisse les <span>rugosités</span> et apporte <span>douceur et souplesse</span> à la peau,</li>
<li>riche en ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178212312</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2b667a3e61a39ab1658df1152f6fb98c5f8b9fab6669717facbcf33d53d93c8a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Poderm Professional  Color Care Rose Poudrée 8ml ]]></title>
<g:id>b44c4a17-8286-4c56-9087-02eb3e2ccd28</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-professional  color care rose poudrée 8ml?b44c4a17-8286-4c56-9087-02eb3e2ccd28 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210479</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/839f70bd7456a8ab5f3a26469bb85d3d12e1c71a5a699a85848b0c6fe1dd6d41 ]]></g:image_link>
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
<title><![CDATA[ Poderm Professional Color Care Rouge Noir 8ml ]]></title>
<g:id>d55a74dd-03be-4f0b-8772-8a79f23f824e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-professional color care rouge noir 8ml?d55a74dd-03be-4f0b-8772-8a79f23f824e ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Color Care convient à tous les ongles, pieds et mains, aux personnes diabétiques, femmes enceintes ou allaitantes et enfants à partir de 3 ans.
<p>Color Care est une gamme de vernis couleur développée spécifiquement pour assainir, réparer et clarifier les ongles jaunes &amp; abîmés par les mycoses de l’ ongle ou la pose de vernis classique ou semi-permanent. </p>
<p>Les couleurs longues tenues sont à la fois purifiantes, nourrissantes et respirantes. Elles garantissent le maintien des on ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210493</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7c4f39b4c1f0b4812caeb18d87c2eeba337b2a0cb08a38de8b652e9664abba23 ]]></g:image_link>
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
<title><![CDATA[ Poderm Professional Color Care Rouge Rose 8ml ]]></title>
<g:id>dd7454c8-207e-44dc-87e7-bc3bd550b0dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-professional color care rouge rose 8ml?dd7454c8-207e-44dc-87e7-bc3bd550b0dd ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>olor Care convient à tous les ongles, pieds et mains, aux personnes diabétiques, femmes enceintes ou allaitantes et enfants à partir de 3 ans.</span></p>
<p>Color Care est une gamme de vernis couleur développée spécifiquement pour assainir, réparer et clarifier les ongles jaunes &amp; abîmés par les mycoses de l’ ongle ou la pose de vernis classique ou semi-permanent. </p>
<p>Les couleurs longues tenues sont à la fois purifiantes, nourrissantes et respirantes. Elles garantissent le main ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210509</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ffe60de0378f906508a9aae095f955cfafe9e8f798474921d53e6b57a445297b ]]></g:image_link>
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
<title><![CDATA[ Poderm Professionnal Color Care Men Vernis Illusion Homme 8ml ]]></title>
<g:id>869bc72a-d28f-4e36-8a55-54ed03ce5892</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-professionnal color care men vernis illusion homme 8ml?869bc72a-d28f-4e36-8a55-54ed03ce5892 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Mycoses des ongles : ongles jaunis, abîmés ou striés.</li>
<li>Homme.</li>
<li>En complément d’ un traitement antifongique.</li>
<li>Convient à tous les ongles, pieds et mains.</li>
<li>
<ul><li>Color Care MEN a été spécifiquement conçu pour dissimuler la mycose des ongles.</li>
<li>Spécifiquement conçu pour les hommes, ce vernis mat de couleur chair, est totalement couvrant, permettant de donner à l’ ongle un aspect sain et naturel.</li>
<li>Sa formule est enrichie en huile essentielle  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210721</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d0ed70e8a6cd951426939a8c31d2ed25a401211b7cb11c2f3988f418a9779136 ]]></g:image_link>
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
<title><![CDATA[ Poderm Professionnal Color Care Rose Corail 8ml - ]]></title>
<g:id>b78e7555-cf23-4aca-9865-d36b63c15251</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-professionnal color care rose corail 8ml ?b78e7555-cf23-4aca-9865-d36b63c15251 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Color Care convient à tous les ongles, pieds et mains, aux personnes diabétiques, femmes enceintes ou allaitantes et enfants à partir de 3 ans.</li>
<li>
<p>Color Care est une gamme de vernis couleur développée spécifiquement pour assainir, réparer et clarifier les ongles jaunes &amp; abîmés par les mycoses de l’ ongle ou la pose de vernis classique ou semi-permanent. </p>
<p>Les couleurs longues tenues sont à la fois purifiantes, nourrissantes et respirantes. Elles garantissent le maint ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210462</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bd9864dfb14c5cd9c960f77e381aebbe9be08304605347c9158c6b1b2e93c187 ]]></g:image_link>
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
<title><![CDATA[ Poderm Professionnal Color Care Rouge Allure 8ml ]]></title>
<g:id>b4377b03-c556-47ff-9466-a2f409cd9bef</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-professionnal color care rouge allure 8ml?b4377b03-c556-47ff-9466-a2f409cd9bef ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <ul><li>Color Care convient à tous les ongles, pieds et mains, aux personnes diabétiques, femmes enceintes ou allaitantes et enfants à partir de 3 ans.</li>
</ul><p> </p>
<p>olor Care est une gamme de vernis couleur développée spécifiquement pour assainir, réparer et clarifier les ongles jaunes &amp; abîmés par les mycoses de l’ ongle ou la pose de vernis classique ou semi-permanent. </p>
<p>Les couleurs longues tenues sont à la fois purifiantes, nourrissantes et respirantes. Elles garantissent  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210486</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/162cd12a40a9633b72790dd71d0072e4a7e7844f29d693227190b2b0e0701bd4 ]]></g:image_link>
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
<title><![CDATA[ Poderm Serum Crevasses et Callosités+Chaussettes ]]></title>
<g:id>c8946607-493f-4562-a9fc-7d45953d3d03</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-serum crevasses et callosités+chaussettes?c8946607-493f-4562-a9fc-7d45953d3d03 ]]></link>
<g:price><![CDATA[ 3490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Ce kit complet regroupe un <span>sérum intensif</span> et une<span> paire de chaussettes</span> en gel réparateur :</p>
<ul><li>le sérum répare les tissus superficiels de la peau des pieds,</li>
<li>il favorise leur régénération.
<p>En cas de crevasses, le soin intensif Nuit Crevasses et Callosités Poderm agit pour réparer les tissus superficiels de la peau et favoriser leur régénération.</p>
<p>Il se compose d'un <span>sérum</span> et d'une <span>paire de chaussettes</span> en gel réparateur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178212329</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/905910b4afc79a9389d11e97739acebd269894456cfc5cb6b8b3214effe29979 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Poderm Sérum Silicium 8 ml ]]></title>
<g:id>5a15df01-ca4d-4a5b-ab7e-432115081c4b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-sérum silicium 8 ml?5a15df01-ca4d-4a5b-ab7e-432115081c4b ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Poderm Sérum Silicium 8 ml est un soin complet, à la fois durcisseur et protecteur destiné aux personnes ayant les ongles fragilisés.<br />Ce soin évite la chute de l'ongle et limite l'apparition de tâches marrons, noires, bleutées ou jaunes. Il lutte également contre les ongles striés.<br />Sa composition a été rigoureusement formulée à partir d'ingrédients 100% d'origine naturelle et bio et sans aucune trace de perturbateurs endocriniens, rigoureusement sélectionnés en adéquation avec les t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210219</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/76a9efc36e08afcaee9efaa4d065628b2eee7ad93ad6be488a289bc4946f7e4d ]]></g:image_link>
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
<title><![CDATA[ Poderm Sérum Stop Ongles Rongés 8 ml ]]></title>
<g:id>10d0c893-3ddc-4287-9275-3a039bc3989e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-sérum stop ongles rongés 8 ml?10d0c893-3ddc-4287-9275-3a039bc3989e ]]></link>
<g:price><![CDATA[ 2150.00 EUR ]]></g:price>
<description><![CDATA[ <p>Poderm Sérum Stop Ongles Rongés 8 ml est un soin pour les ongles, concentré d'actifs anti-stress naturels et réparateurs.<br />Il constitue une bonne alternative naturelle au vernis amer chimique pour arrêter de se ronger les ongles.<br />En application régulière, les huiles essentielles anti-stress et anti-compulsives agissent sur vos tensions internes et réduisent votre envie de vous ronger les ongles après quelques jours d'emploi régulier :</p>
<ul><li>Thym, Sauge sclarée Bio : huiles esse ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178210097</g:gtin>
<g:brand><![CDATA[ Poderm Vernis ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a75402a46f3c50ba81f45a1277ba68f95028d7ba3c35f5715ae2137b9caf76bc ]]></g:image_link>
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
<title><![CDATA[ Poderm Vernis Color Rose Brillant 8ml ]]></title>
<g:id>3634eb08-4672-44ff-bbda-ecfbf097dd80</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-vernis color rose brillant 8ml?3634eb08-4672-44ff-bbda-ecfbf097dd80 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Color Care est une gamme de vernis couleur développée spécifiquement pour assainir, réparer et clarifier les ongles jaunes &amp; abîmés par les mycoses de l’ ongle ou la pose de vernis classique ou semi-permanent. </p>
<p>Les couleurs longues tenues sont à la fois purifiantes, nourrissantes et respirantes. Elles garantissent le maintien des ongles en bonne santé et laissent passer les Huiles-Sérum PODERM afin de continuer à traiter un ou plusieurs ongles abîmés.</p>
<p>Sans base, deux applica ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178211698</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1f1e4aa8d9f5d729bec5239d727fa72ef1b334a3f8f29684ee172e3efaedca2 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Poderm Vernis Color Rouge Puissant  8ml ]]></title>
<g:id>0b9d42f3-c3b0-414d-bb8d-6097b9f7cdd9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poderm-vernis color rouge puissant  8ml?0b9d42f3-c3b0-414d-bb8d-6097b9f7cdd9 ]]></link>
<g:price><![CDATA[ 1450.00 EUR ]]></g:price>
<description><![CDATA[ <p>Color Care est une gamme de vernis couleur développée spécifiquement pour assainir, <span>réparer et clarifier les ongles jaunes &amp; abimés par les mycoses de l’ongle</span> ou la pose de vernis classique ou semi permanent.</p>
<p><span> </span></p>
<p>Ces <span>couleurs longues tenues</span> sont à la fois purifiantes, nourrissantes et respirantes. Elles garantissent le maintien des ongles en bonne santé et <span>laissent passer les Huiles-Sérum PODERM</span> afin de continuer à traiter un ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7640178211742</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d9df1641f8c4bef881a769c52ef768032fcc13e6059a8a233a4eec08ed612d17 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pohl Boskamp Gelositin soin nasal 15ml ]]></title>
<g:id>17aee454-9b18-4c33-9dd9-9b16cb57d447</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pohl-boskamp gelositin soin nasal 15ml?17aee454-9b18-4c33-9dd9-9b16cb57d447 ]]></link>
<g:price><![CDATA[ 930.00 EUR ]]></g:price>
<description><![CDATA[ <p>Traitement physique et humidification de la muqueuse nasale sèche ou abîmée (air sec, allergie, suite d'opérations, ...).</p>
<p>GeloSitin humidifie durablement la muqueuse nasale, décolle les croûtes en douceur, protège le nez irrité et sec.</p>
<p>GeloSitin protège également contre d'autres affections des voies respiratoires.</p>
<p>Huile de sésame à l'eau de mer : les huiles nasale adhèrent 9 fois plus longtemps à la muqueuse nasale. </p>
<p>Huile d'orange et de citron : anti-oxydants natu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>4029125048762</g:gtin>
<g:brand><![CDATA[ L.E.R.O. ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6429cb607c1d71a8695451273c962e5a4c6e17938a7b239f523528796c7adc21 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega 3 Minutes Nettoyant 66 Comprimés ]]></title>
<g:id>6bbd3ea1-4129-4752-8e4d-3c4a6df71788</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega 3 minutes nettoyant 66 comprimés?6bbd3ea1-4129-4752-8e4d-3c4a6df71788 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Polident Corega 3 Minutes Nettoyant 66 Comprimés aide à nettoyer votre appareil dentaire de meilleure façon qu'un dentifrice usuel.</p>
<p>En seulement 3 minutes, il élimine 99,99% des bactéries responsables des mauvaises odeurs et aide à éliminer la plaque et les taches.</p>
<p>Vous pourrez ainsi garder votre appareil plus propre, plus frais et plus éclatant.</p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563023018</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/daff9a551da8e86865a3f8b9c2fb2d6147eb64c217147e9dcf631902c804aaa2 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega Anti-Bactérien Nettoyant 72 Comprimés ]]></title>
<g:id>c73dfffb-fa2b-45df-a246-050827e1efcf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega anti-bactérien nettoyant 72 comprimés?c73dfffb-fa2b-45df-a246-050827e1efcf ]]></link>
<g:price><![CDATA[ 655.00 EUR ]]></g:price>
<description><![CDATA[ <p>Polident Corega 72 Comprimés Nettoyants.</p>
<p>Nettoyant pour appareils dentaires.</p>
<p>Détruit les particules microbiennes.</p>
<p>Anti-Plaque. Goût Menthe Fraîche.</p>
<p>Grâce à leur formule concentrée, les comprimés nettoyants Corega Anti-bactérien, Anti-tartre luttent efficacement contre la formation du tartre et des bactéries, principale cause d'irritations des gencives.</p>
<p>Les comprimés nettoyant Corega vous apportent une propreté et une hygiène en profondeur pour un confort dur ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3094904500541</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6bfece0b0835f3fd062a7f1856119d5f355df9b4b3f928f76f97f820016fe558 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega Fixation Forte Crème Fixative 40 g ]]></title>
<g:id>c260599e-2ea4-408a-89d4-b7d36181c699</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega fixation forte crème fixative 40 g?c260599e-2ea4-408a-89d4-b7d36181c699 ]]></link>
<g:price><![CDATA[ 430.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Polident Corega Fixation Forte Crème Fixative pour Appareils Dentaires 40 g est une crème fixative à fixation forte qui permet de fixer votre appareil dentaire dans toutes les directions.</p>
<p>Cette crème aide à maintenir efficacement et fermement votre appareil jusqu'à 12 heures complètes.</p>
</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563022530</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a4051c12a67d117517fc66fcd426c962604c9b5237bbbf1431f26fcd6e26991 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega Maximum Contrôle Crème Fixative  70 g ]]></title>
<g:id>4160b6b4-1b48-4acb-a1fc-0dc49ba22037</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega maximum contrôle crème fixative  70 g?4160b6b4-1b48-4acb-a1fc-0dc49ba22037 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Polident Corega Maximum Contrôle Crème Fixative pour Prothèses Partielles et Complètes 70 g est une crème qui permet une meilleure répartition (comparé à Polident Original) de la crème fixative qui aide à limiter les infiltrations alimentaires tout au long de la journée.</p>
<p>L'embout de précision permet de déposer la bonne quantité de produit le long de la prothèse formant ainsi une couche protectrice contre les infi ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563061706</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bb1b448caef6f6003b0e0976a50c91d997b502a3ac34be77e7bf41e3eac1e947 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega Protection Gencives Crème Fixatrice 40 g ]]></title>
<g:id>1f18bf2c-1380-4255-87af-7b8733b94c19</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega protection gencives crème fixatrice 40 g?1f18bf2c-1380-4255-87af-7b8733b94c19 ]]></link>
<g:price><![CDATA[ 430.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Polident Corega Protection Gencives Crème Fixatrice pour Appareils Dentaires 40 g est une crème fixatrice pour appareils dentaires qui vous permet de fixer votre appareil toute la journée, dans toutes les directions.</p>
<p>Cette crème fixatrice aide à empêcher l'infiltration des particules alimentaires afin de réduire l'irritation des gencives et améliorer votre confort. Ainsi, vous pouvez passer une journée en toute c ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563019707</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a42f1e843308ec3c1ba6f6ea8edb8425b5f18d0a2cd856257876daf17eb10990 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega Total Action Crème Fixative 40 g ]]></title>
<g:id>fe2e37fc-2194-498c-b924-bc02456adfa0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega total action crème fixative 40 g?fe2e37fc-2194-498c-b924-bc02456adfa0 ]]></link>
<g:price><![CDATA[ 430.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Polident Corega Total Action Crème Fixative pour Appareils Dentaires 40 g est une crème qui permet de fixer votre appareil toute la journée, dans toutes les directions.</p>
<p>Cette crème vous apporte :</p>
<p>- Une fixation forte et sûre jusqu'à 12 heures.</p>
<p>- +38% de force masticatoire* pour manger vos plats favoris.</p>
<p>- Aide à prévenir l'infiltration des particules alimentaires sous l'appareil et l'irritati ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563022578</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d93543973ad3a8cdd2b4b78e33daf6621dc9054956f5c3137ed016da0c0b14d6 ]]></g:image_link>
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
<title><![CDATA[ Polident Corega Total Action Nettoyant 66 Comprimés ]]></title>
<g:id>64c69ebf-699c-457a-8c1b-5f1849d34474</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-corega total action nettoyant 66 comprimés?64c69ebf-699c-457a-8c1b-5f1849d34474 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Polident Corega Total Action Nettoyant 66 Comprimés permet de nettoyer les appareils dentaires partiels et complets.</p>
<p>Le comprimé offre 7 bénéfices dans un seul comprimé : il désinfecte, rafraîchit, aide à éliminer les bactéries, élimine la plaque, élimine les taches, nettoie sans abîmer, offrant une action rapide.</p>
<p></p>
<p>Grâce à sa formule concentrée, le comprimé propose un nettoyage efficace en profondeu ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563022967</g:gtin>
<g:brand><![CDATA[ GSK SANTE GRAND PUBLIC ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e4d5af0596d531cc734947fd5901be42764952e8914cb238d886cbd5df995a67 ]]></g:image_link>
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
<title><![CDATA[ Polident Nettoyant Appareils orthodontiques et Gouttières 36 comprimés ]]></title>
<g:id>4aa4ebbe-26a3-4989-97b4-ae255413e41b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/polident-nettoyant appareils orthodontiques et gouttières 36 comprimés?4aa4ebbe-26a3-4989-97b4-ae255413e41b ]]></link>
<g:price><![CDATA[ 380.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5054563106131</g:gtin>
<g:brand><![CDATA[ GSK SANTE FAMILIALE  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/beae8a4655abd45d8b81d67cd9a96cbabcf6eb07f2f4d97c5b9ceb01b846ef17 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Abricot Bio 120g ]]></title>
<g:id>e1e84f81-1a93-4cb7-82f2-0344a7fd440b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde abricot bio 120g?e1e84f81-1a93-4cb7-82f2-0344a7fd440b ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Tout doux, tout doux l’abricot</strong></p><p>Partir à la découverte de ce fruit fougueux n’est pas chose aisée. Pour aider Bébé à apprivoiser le goût de l’abricot nous atténuons son acidité en y ajoutant un peu de compote de pommes bio.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840260</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/90bd40a3d3fc9f1328030afe67dde58fe4be9d245bb16ac5e7524749fa0b8ef9 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Artichaut Bio 120g ]]></title>
<g:id>be99a0ab-d1bb-445b-9925-1b318a01ef16</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde artichaut bio 120g?be99a0ab-d1bb-445b-9925-1b318a01ef16 ]]></link>
<g:price><![CDATA[ 230.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bébé sera-t-il un cœur d’artichaut ?</strong></p><p>Bonne question à laquelle même nos plus grands experts ne peuvent pas encore répondre. En revanche, ils savent que les fonds d’artichauts mis en purée et cuits à la vapeur présents dans cette gourde, plairont beaucoup à Bébé</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840017</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5915c85c91a08840727d40923b0ee4774656057e4b04fd7957a6fd0fb90b9950 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Banane Bio 120g ]]></title>
<g:id>5958f29d-43be-40b8-8f05-bc9b30c61588</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde banane bio 120g?5958f29d-43be-40b8-8f05-bc9b30c61588 ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Comment dit-on sourire en langage bébé ?</strong></p><p>Banane. Et le moins que l’on puisse dire, c’est que notre petite gourde en regorge, 85% exactement</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840314</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ce48f19569d44d0d4168ffdf6113e75825a3b0ddf2af9d452e8ab8fb9dbcc8dc ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Betterave Bio 120g ]]></title>
<g:id>d6e780bc-d4e4-41ad-b2db-1e2c9dc020c4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde betterave bio 120g?d6e780bc-d4e4-41ad-b2db-1e2c9dc020c4 ]]></link>
<g:price><![CDATA[ 180.00 EUR ]]></g:price>
<description><![CDATA[ <p>Nos betteraves ont été sélectionnées, cuites et mixées pour mettre un peu de nouveauté dans l’assiette de Bébé, qui adorera sa saveur sucrée.</p><p>A déguster seule ou avec un peu de fêta ou de fromage frais pour un effet wahou garanti dès 8 mois !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840444</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a9c424b1f8c5026b94d58f98b7a6c8166a4427a328a65d8684a0772add3e48a7 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Brassé Avoine Pomme 100g ]]></title>
<g:id>2c1f2256-ed20-4459-ac19-694406e1f456</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde brassé avoine pomme 100g?2c1f2256-ed20-4459-ac19-694406e1f456 ]]></link>
<g:price><![CDATA[ 210.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Elle est trognon cette avoine !</strong></p><p>Pas étonnant, puisque nous avons sélectionné les plus belles pommes et flocons d’avoine pour fabriquer le plus savoureux <strong>des brassés végétaux pour bébé</strong>. Nature, sans sucre ajouté et issu de l’agriculture biologique, ce brassé à l’avoine 100% végétal est parfait pour <strong>le dessert ou le goûter de bébé</strong>.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842011</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/28b69b78bcb315cdc93683f6ddca29819ece212d6ee82ba7e993288bef5781b8 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Brassé Chèvre 100g ]]></title>
<g:id>de14b9d6-4ba0-47bb-bd48-42e19cffe431</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde brassé chèvre 100g?de14b9d6-4ba0-47bb-bd48-42e19cffe431 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Promis, il ne vous rendra pas chèvre.</strong></p><p>Pas étonnant, puisque nous avons sélectionné du lait de chèvre français pour fabriquer le plus savoureux <strong>des brassés pour bébé</strong>. Nature, sans sucre ajouté et <strong>source de calcium</strong>, pour le plus grand bonheur de Bébé.<br>Parfait pour <strong>le dessert ou le goûter de bébé.</strong></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842004</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/442bfd6e84e33fd3009a942d240fac4172b55732dab4dfe6a6f306222d795756 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Brassé Coco Banane 100g ]]></title>
<g:id>cd32e6fd-68ce-4cc7-b697-b093f4593cc7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde brassé coco banane 100g?cd32e6fd-68ce-4cc7-b697-b093f4593cc7 ]]></link>
<g:price><![CDATA[ 210.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>T’as le look Coco.</strong></p><p>Pas étonnant, puisque nous avons sélectionné les plus belles bananes et le meilleur lait de coco pour fabriquer le plus savoureux <strong>des brassés végétaux pour bébé</strong>. Nature, sans sucre ajouté et issu de l’agriculture biologique, ce brassé Coco Banane 100% végétal est parfait pour <strong>le dessert ou le goûter de bébé</strong>.<br>Bébé APLV ? Vous pouvez y aller. Mais un brassé coco contient peu de calcium.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842028</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/69e4e3f2b5c56ff2c852ec96d9ca482111cbf8541274a5273bd3fb4e25e39000 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Brocoli Bio 120g ]]></title>
<g:id>56184adc-12b2-4c71-9f09-9f22487dfccd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde brocoli bio 120g?56184adc-12b2-4c71-9f09-9f22487dfccd ]]></link>
<g:price><![CDATA[ 180.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bébé se met au vert.</strong></p><p>Et pour cela, même pas besoin d’aller à la campagne ! Tout se passe dans l’assiette avec ces fleurettes de brocoli mises en purée moulinée, que nous avons soigneusement sélectionnées, et cuites à la vapeur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840048</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/626e7777668768dd3d3b68f976c501e62d55a7cfa52aee2af6fcbee04f902d1b ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Carotte Bio 120g ]]></title>
<g:id>c951d4dd-9823-4fa6-8078-a98aae73395f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde carotte bio 120g?c951d4dd-9823-4fa6-8078-a98aae73395f ]]></link>
<g:price><![CDATA[ 160.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Les carottes sont (bien) cuites.</strong></p><p>À la vapeur pour être précis. Avant cela, nous les avons soigneusement épluchées lavées, pour permettre à Bébé de découvrir et apprécier le goût de notre super purée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840130</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98238c7183ef9d1e8f6b4b73981245d50159dc4182853bc4b281e8a18d0ba566 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Courge Butternut Bio 120g ]]></title>
<g:id>bf9a4017-95ba-4a94-9b54-4c4031bf8fe8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde courge butternut bio 120g?bf9a4017-95ba-4a94-9b54-4c4031bf8fe8 ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Pas de temps à perdre pour devenir bilingue !</strong></p><p>ça tombe bien, aujourd’hui, c’est courge butternut au menu. Et si Bébé n’a pas encore l’accent, il aura l’appétit grâce à cette purée de bonnes courges.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840079</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c381f290bcb3949f4300fbb069c88b390320abbd57fec76541a3e1e8a7fe3f71 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > DIETETIQUE BEBE > Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Gourde Epinard Bio 120g ]]></title>
<g:id>f57e3c71-064a-4c21-9474-4378678b777b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde epinard bio 120g?f57e3c71-064a-4c21-9474-4378678b777b ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Rejoignez le côté vert de la force !</strong></p><p>Que Bébé opte pour une carrière de catcheur ou de chercheur en sciences physiques, les épinards sont des alliés de taille. Pour s’adapter à son palais, nous avons soigneusement veillé à ce que ces épinards ne soient pas trop forts en goût en y ajoutant un peu de pomme de terre.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840086</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8a8662e073b654c77b753ace3a33a7e128b5ffa43cce87e0af442cb5f737c32 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Figue Bio 120g ]]></title>
<g:id>68081cfe-a5ed-4122-9a64-c4b8ee70a8dd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde figue bio 120g?68081cfe-a5ed-4122-9a64-c4b8ee70a8dd ]]></link>
<g:price><![CDATA[ 220.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>“Figue-moi la gourde !”</strong></p><p>En cas de grande faim, Bébé risque de se laisser aller à ce genre de familiarités. Heureusement, nous avons sélectionné, nettoyé et cuit à la vapeur des figues bien charnues pour le régaler.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840215</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2885e2fcc5cb5a046fbe27c7204803533ba28d6111540c4676859df6e9952e6f ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Mangue 120g ]]></title>
<g:id>db9dc66c-b7ac-4d9a-997f-f18a585b0646</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde mangue 120g?db9dc66c-b7ac-4d9a-997f-f18a585b0646 ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Il ne mangue plus que ça …</strong></p><p>… pour que Bébé poursuive son tour du monde des goûts. Un passage par les tropiques, grâce à cette gourde remplie de jolies mangues et de sunlight*.</p><p>*soleil</p><p>NOUVELLE RECETTE 100%&nbsp; mangues bio !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840291</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8ca50524700601cd7de19ecc9bea04ffee68b16b363130750fd30b3b39794d7d ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Maïs Bio 120g ]]></title>
<g:id>02ef9153-ec42-452d-a399-4daeaaa7f10b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde maïs bio 120g?02ef9153-ec42-452d-a399-4daeaaa7f10b ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Non, les épis ne sont pas que sur la tête !</strong></p><p>C’est aussi dans la bouche, grâce à notre gourde composée de maïs gourmands, soigneusement mis en purée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840062</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8878bf3fcdae35145600744f674eb16509c928c5d3d1a850efcf99207d04da83 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Mirabelle Bio 120g ]]></title>
<g:id>6001ae7d-d5dd-4910-a46b-2305fcd79a5e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde mirabelle bio 120g?6001ae7d-d5dd-4910-a46b-2305fcd79a5e ]]></link>
<g:price><![CDATA[ 220.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Belle, belle, belle la mirabelle !&nbsp;</strong></p><p>Parce qu’on les aime autant que Bébé, nous les avons choisies bio et délicieuses. De quoi réveiller les papilles des petits ventres à régaler.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840451</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9f41f9843d3a1a3bd6e2d671ed211e79b6c76aa3a52dc15b8dbd0853bd73eab6 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Mûres et Banane Bio 120g ]]></title>
<g:id>3c6b99f1-581c-4a77-94cd-ff3fc461ee42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde mûres et banane bio 120g?3c6b99f1-581c-4a77-94cd-ff3fc461ee42 ]]></link>
<g:price><![CDATA[ 220.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Les mûres, ça donne la Banane</strong></p><p>On vous aura prévenu… avec <strong>notre compote de mûres et de bananes bio</strong>, sélectionnées, cuites et mixées, Bébé va se régaler.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841878</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d2a7a1e325e0cec2efb4dae264d912a0e4e7db1e13e74efbd0f6067999e576c3 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Nectarine et les Fraises Bio 120g ]]></title>
<g:id>8b712490-aca8-4f60-adc6-407f1a43df0b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde nectarine et les fraises bio 120g?8b712490-aca8-4f60-adc6-407f1a43df0b ]]></link>
<g:price><![CDATA[ 210.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Quand la Nectarine ramène sa Fraise</strong></p><p>Une délicieuse<strong> compote de nectarines et de fraises bio</strong>, sélectionnées, cuites et mixées, pour régaler les petits bidons. Bébé va en redemander !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841946</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6a20b878c7e70f71479a91c4f3287076eaeb392ec46692f9efeb8d980a6393f4 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Petits Pois Bio 120g ]]></title>
<g:id>3d76b65b-a25f-4ada-8442-11c138509306</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde petits pois bio 120g?3d76b65b-a25f-4ada-8442-11c138509306 ]]></link>
<g:price><![CDATA[ 180.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Petit pois deviendra grand !</strong></p><p>C’est petit pois par petit pois que Bébé grandira. Mais la quantité importe peu face à la qualité des ces produits.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840116</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e7b4e48631dcca0ca54c0d9a07bb8adbb6118a5525355a9d05d83306a8403e35 ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Poire Bio 120g ]]></title>
<g:id>620667dc-7aed-4ae8-8f20-23480d0a4932</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde poire bio 120g?620667dc-7aed-4ae8-8f20-23480d0a4932 ]]></link>
<g:price><![CDATA[ 189.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Plus besoin de couper la poire en deux !</strong></p><p>Choisir, c’est renoncer. Heureusement notre Poire met tout le monde d’accord ! Bébé n’a plus qu’à se concentrer sur sa dégustation.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840475</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f7b139f16673688fc2d922ae7eaa705ccc5bfa31a794a95d8c70a365e5c308ce ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Pomme Lisse Bio 120g ]]></title>
<g:id>a2411b6e-af8d-44ef-b9f9-7cbd8f4dbeb3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde pomme lisse bio 120g?a2411b6e-af8d-44ef-b9f9-7cbd8f4dbeb3 ]]></link>
<g:price><![CDATA[ 150.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Il n’y a plus de doute, bébé est trognon.</strong></p><p>Mais sans dents, pas facile de croquer dans une pomme. Pour aider Bébé, nous avons sélectionné la variété Golden, sans doute la meilleure façon de patienter avant de voir apparaître ses petites quenottes.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840321</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a8a50ac0daf8cdaa8345fd388a8ec675b7083fa884341ec9e090056dc20612af ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Prunes et Poire120g ]]></title>
<g:id>bf92e762-a164-4b7c-8904-34e017a64bf0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde prunes et poire120g?bf92e762-a164-4b7c-8904-34e017a64bf0 ]]></link>
<g:price><![CDATA[ 210.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>La Poire compte pas pour des Prunes</strong></p><p>Alors on a sélectionné des bonnes prunes bio et poires bio, on les a mixées, cuites ensemble… et c’est très très bon ! Bébé va en redemander.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841885</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/089798ba7562dc76d4f92528228c50ab4afcfef488962cf8ee11e1f7315963ef ]]></g:image_link>
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
<title><![CDATA[ Popote Gourde Veau Bio 60g ]]></title>
<g:id>a8ebea3c-aca5-4500-abd0-4694ab694007</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde veau bio 60g?a8ebea3c-aca5-4500-abd0-4694ab694007 ]]></link>
<g:price><![CDATA[ 250.00 EUR ]]></g:price>
<description><![CDATA[ <p>…Et même deux ou trois ! Car chez nous, pour notre chère purée de veau*, on prend le temps de choisir de beaux morceaux bio et d’origine France. Et pour bien vous seconder en cuisine, nous les avons cuits et finement mis en purée. Tout ça pour vous laisser le meilleur pour la fin : imaginer toutes les recettes que vous voulez pour régaler Bébé ! Amicalement v(eau)tre.</p><p>*Contient des traces de protéines de lait de vache</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840178</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cd55e8e05aea8c098fa18e55ea94bcf8705885bb12f13fffbf88c8c845705248 ]]></g:image_link>
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
<title><![CDATA[ Popote Lait 1er âge 400g ]]></title>
<g:id>2ba93ea1-dd26-45d4-ba40-9347d5a62f1c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-lait 1er âge 400g?2ba93ea1-dd26-45d4-ba40-9347d5a62f1c ]]></link>
<g:price><![CDATA[ 950.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Lait infantile 1er âge</strong> de <strong>Popote</strong>, une formule bio adaptée dès la naissance, en format pratique. Poids net : <strong>400 g</strong>.</p><p>Découvrez <strong>le lait infantile 1er âge</strong> de <strong>Popote.&nbsp;</strong></p><p>Idéal dès la naissance. Sa formule bio sans huile de palme, fabriquée en France à partir de lait de vache français, en fait un choix sain pour Bébé. En format pratique de 400g, il est parfait pour tester, emmener en voyage, ou laiss ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842042</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6aef55460ca6b32e3891c75cdd6b4e832b535284769cbd578f238435ac50912 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Lait 1er âge 800g ]]></title>
<g:id>d6921324-b259-4c3c-8cc4-040aa56280b3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-lait 1er âge 800g?d6921324-b259-4c3c-8cc4-040aa56280b3 ]]></link>
<g:price><![CDATA[ 1950.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le lait maternel, c’est ce qu’il y a de meilleur pour Bébé, et on sera toujours les premiers à le clamer. L’OMS le recommande d’ailleurs exclusivement jusqu’à 6 mois.<br>Mais chez Popote, on croit aussi qu’il y a 1000 façons d’être parent. Alors si vous ne souhaitez ou ne pouvez pas allaiter, on est aussi à vos côtés. Le lait infantile 1er âge bio Popote convient aussi en relais et/ou en complément de l’allaitement, comme tous les autres laits infantiles.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841298</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6aef55460ca6b32e3891c75cdd6b4e832b535284769cbd578f238435ac50912 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAITS INFANTILES ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Lait 2ème Age  800g  ]]></title>
<g:id>0a137d94-2eab-4028-b6e1-34873f4065d5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-lait 2ème age  800g ?0a137d94-2eab-4028-b6e1-34873f4065d5 ]]></link>
<g:price><![CDATA[ 1970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lait infantile 2ème âge en poudre, réalisé avec des ingrédients issus de l'agriculture biologique et sans huile de palme. </p><p>Idéal pour couvrir tous les besoins nutritionnels de votre bébé de 6 à 12 mois. </p><p>Pot de 800g.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841304</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b37b649f89991ef03cb5f81665585c93681a5a451d0e3823d1bb4d0c2d6b3a8 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAITS INFANTILES > LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Lait 2ème âge 400g ]]></title>
<g:id>8085b614-5947-41c4-ab3e-d133c135915a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-lait 2ème âge 400g?8085b614-5947-41c4-ab3e-d133c135915a ]]></link>
<g:price><![CDATA[ 970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lait infantile 2ème âge en poudre, réalisé avec des ingrédients issus de l'agriculture biologique et sans huile de palme.</p><p>Idéal pour couvrir tous les besoins nutritionnels de votre bébé de 6 à 12 mois. Pot de 400g.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842035</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b37b649f89991ef03cb5f81665585c93681a5a451d0e3823d1bb4d0c2d6b3a8 ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAITS INFANTILES > LAIT DEUXIEME AGE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Lait 3ème Age 400g ]]></title>
<g:id>1d95263d-0597-40c7-a930-49636b9f56c8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-lait 3ème age 400g?1d95263d-0597-40c7-a930-49636b9f56c8 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lait 3ème âge croissance en poudre,&nbsp;réalisé avec des ingrédients issus de l'agriculture biologique et sans huile de palme. Idéal pour couvrir tous les besoins nutritionnels de votre bébé de 10 mois à 3 ans. </p><p>Pot de 400g</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842059</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b9a0d0e2b8137c8818eca6b750ccc8a6e87f4a5002c251da5c38880972b607f ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAIT TROISIEME AGE > LAITS INFANTILES > LAIT DE CROISSANCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Lait 3ème Age 800g ]]></title>
<g:id>bd7dcdd4-59dd-4ca9-91e1-b645787bb7ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-lait 3ème age 800g?bd7dcdd4-59dd-4ca9-91e1-b645787bb7ff ]]></link>
<g:price><![CDATA[ 1970.00 EUR ]]></g:price>
<description><![CDATA[ <p>Lait 3ème âge croissance en poudre,&nbsp;réalisé avec des ingrédients issus de l'agriculture biologique et sans huile de palme. </p><p>Idéal pour couvrir tous les besoins nutritionnels de votre bébé de 10 mois à 3 ans. </p><p>Pot de 800g.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841311</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b9a0d0e2b8137c8818eca6b750ccc8a6e87f4a5002c251da5c38880972b607f ]]></g:image_link>
<g:product_type><![CDATA[ Bébé > LAIT TROISIEME AGE > LAITS INFANTILES > LAIT DE CROISSANCE ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Popote Moulinés Chou-fleur & Boulgour 180g ]]></title>
<g:id>4fa18116-85bc-4be9-bb9d-02fe79809748</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-moulinés chou-fleur & boulgour 180g?4fa18116-85bc-4be9-bb9d-02fe79809748 ]]></link>
<g:price><![CDATA[ 269.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>On n’a jamais vu un boulgour aussi chou.</strong></p><p>… avec cette purée de chou-fleur et boulgour* bio (*gluten), sélectionnés, cuits et moulinés, parfaite pour l’introduction des textures et premiers morceaux. On en connaît qui va se régaler</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841915</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0728a05f58600db117fc13784785b52fa88a9f37d69760ce3f439ddbeefe613d ]]></g:image_link>
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
<title><![CDATA[ Popote Moulinés Lentilles & Potimarron 180 g ]]></title>
<g:id>1bdddf65-7220-47cf-9582-7abe4fcfab9b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-moulinés lentilles & potimarron 180 g?1bdddf65-7220-47cf-9582-7abe4fcfab9b ]]></link>
<g:price><![CDATA[ 269.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Bébé va voir la vie en orange</strong></p><p>… avec cette purée de lentilles corail et potimarron bio, sélectionnés, cuits et moulinés, parfaite pour l’introduction des textures et premiers morceaux fondants. On en connaît un qui va se régaler.</p><p>(*Peut contenir du gluten)</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841908</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/46a070c8a366887bf02e93b5b15ce37e827b5340938d82537e299646ba4fa315 ]]></g:image_link>
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
<title><![CDATA[ Popote Moulinés Patate douce & Quinoa 180g ]]></title>
<g:id>0250acb0-350a-49e5-ae9c-8d983bc7435b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-moulinés patate douce & quinoa 180g?0250acb0-350a-49e5-ae9c-8d983bc7435b ]]></link>
<g:price><![CDATA[ 269.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Il a la patate, ce quinoa</strong></p><p>…avec cette purée de patate douce et quinoa bio, sélectionnés, cuits et moulinés, parfaite pour l’introduction des textures et premiers morceaux. On en connaît un qui va se régaler.</p><p>(*Peut contenir du gluten)</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262841892</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/368c10e053166c305f3002b1839c67f4e418e45d71de5893db182e235f8aa45b ]]></g:image_link>
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
<title><![CDATA[ Popote Petits morceaux Carottes & Riz complet 190g ]]></title>
<g:id>8e31c6f8-6b2d-486a-bd8a-d6610e5f55fd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-petits morceaux carottes & riz complet 190g?8e31c6f8-6b2d-486a-bd8a-d6610e5f55fd ]]></link>
<g:price><![CDATA[ 278.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Elles ont un grain (de riz) ces carottes.</strong></p><p>Cette purée de carottes et riz complet bio, sélectionnés, cuits et moulinés, est le repas idéal pour introduire de nouvelles textures et premiers morceaux tendres à Bébé. On sait déjà qu’il va se régaler !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842066</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/960e634283bb61c887e15f0d8a923bfa2a541171f9d0b0be6d67291a622b9bb5 ]]></g:image_link>
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
<title><![CDATA[ Popote Petits morceaux Champignons & Coquillettes 190g ]]></title>
<g:id>0ec7a4c0-1288-4c1a-8813-78aa6e59b0b5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-petits morceaux champignons & coquillettes 190g?0ec7a4c0-1288-4c1a-8813-78aa6e59b0b5 ]]></link>
<g:price><![CDATA[ 278.99 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Allez Bébé, appuie sur le champignon.</strong></p><p>Des champignons de Paris sélectionnés et cuits avec soin, moulinés avec de délicieuses coquillettes* : un repas parfait pour introduire de nouvelles textures et premiers morceaux tendres à Bébé. Il va se régaler !<br>*Contient du gluten</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262842073</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a6d2a3db52146daa48bf563c5219e9c92f870161ca32ce322d1a5adca1ba4158 ]]></g:image_link>
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
<title><![CDATA[ Popote gourde Haricots Verts Bio 120g ]]></title>
<g:id>68e6b1e2-d3f7-46c3-8d8f-63b78b32e29c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/popote-gourde haricots verts bio 120g?68e6b1e2-d3f7-46c3-8d8f-63b78b32e29c ]]></link>
<g:price><![CDATA[ 160.00 EUR ]]></g:price>
<description><![CDATA[ <p>Souvent pris en exemple pour leurs fins, les haricots ont aussi un début. Et ça tombe bien, la purée de haricots verts bio au menu ? C’est aujourd’hui pour Bébé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3760262840123</g:gtin>
<g:brand><![CDATA[ Popote ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c1cb59cec3d7580422eda8f36f559539c4b92dc59cf5ce990d5e4f017bbae995 ]]></g:image_link>
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
<title><![CDATA[ Pouxit Baume décolleur lente 100g + peigne ]]></title>
<g:id>1eba9dcb-a5b1-4b2f-9ccd-f67e7d000bc4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-baume décolleur lente 100g + peigne?1eba9dcb-a5b1-4b2f-9ccd-f67e7d000bc4 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401060265939</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/93ebf43ae967232a2f7e4028fb1897b19c9a6fd13bae930a468e1ad7391a471a ]]></g:image_link>
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
<title><![CDATA[ Pouxit Flash Traitement anti-poux & lentes Spray 150 ml ]]></title>
<g:id>27a63dbc-3a6d-40a0-94b6-e225778e0455</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-flash traitement anti-poux & lentes spray 150 ml?27a63dbc-3a6d-40a0-94b6-e225778e0455 ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>POUXIT FLASH est indiqué dans le traitement des poux du cuir chevelu (poux de la tête) et des lentes chez l’adulte et l’enfant de plus de 6 mois.</p>
<p>POUXIT FLASH ne contient pas de substance au mode d’action neurotoxique sur le pou et la lente, il agit par effet physique.</p>
<p> </p>
<p>5 minutes de pose, 1 seule application.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614810001262</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ecd7643f36d1db6d6f3f19cb3571305e6c86fe367dd057531e90b334526e5e3e ]]></g:image_link>
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
<title><![CDATA[ Pouxit Peigne ]]></title>
<g:id>eb2a423a-fc04-4b0f-9faa-71c4e066823c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-peigne?eb2a423a-fc04-4b0f-9faa-71c4e066823c ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>LE PEIGNE POUXIT vous apporte une solution naturelle en cas d’infestation par les poux et lentes. Grâce à ses dents brevetées en forme de « diamant »<span>1</span>, le Peigne Pouxit assure une action spécifique sur le cément qui fixe les lentes aux cheveux et permet de retirer efficacement poux et lentes<span>2</span>.</p>
<p>La forme des dents en acier et leur espacement ont été conçus précisément pour capturer et éliminer les poux et les lentes, quelle que soit leur taille. Les pointes ont  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3614819997740</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/93714c1c76d5efc72688ab4d29cd5004a5814a3e96dede18d63c12b3452dd86c ]]></g:image_link>
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
<title><![CDATA[ Pouxit Protect Spray Protection Anti-Poux 200 ml ]]></title>
<g:id>427d2509-2aeb-48ee-a979-43140b5eccbf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-protect spray protection anti-poux 200 ml?427d2509-2aeb-48ee-a979-43140b5eccbf ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pouxit Protect a été formulé à base de Protectdiol®, un actif breveté qui protège des infestations en éliminant les éventuels premiers poux avant qu'ils ne commencent à se développer.</p>
<p>Doux pour le cuir chevelu, il peut s'utiliser dès 6 mois et chez la femme enceinte ou allaitante.</p>
<p>Pouxit Protect s'utilise dans toutes les situations à risque d'infestation, notamment dans les contextes suivants : alertes aux poux à l'écoles, en colonie de vacances, etc.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401564524822</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1ee84f3b2fe58b4b56979aea9a6dee6392fcae9b3410f1376950eb02343666f2 ]]></g:image_link>
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
<title><![CDATA[ Pouxit Spécial Environnement 250 ml ]]></title>
<g:id>62a28c39-bb4d-4836-a17b-5a04e8e98cdc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-spécial environnement 250 ml?62a28c39-bb4d-4836-a17b-5a04e8e98cdc ]]></link>
<g:price><![CDATA[ 1099.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pouxit Spécial Environnement 250 ml élimine les poux et lentes sur tous les objets susceptibles d'avoir été en contact avec une personne infestée grâce à ses 4 substances actives.</p>
<p>Cet aérosol grand format élimine les poux et lentes de tous les objets susceptibles d'avoir été en contact avec une personne infestée : canapés, matelas, textiles, appuis-tête de voiture, sièges auto, tapis de jeux... Il peut être utilisé pour traiter les textiles non lavables en machine à 60°C et ayant été e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401529578259</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/95898af3d7fcff51f485e5c95498bc93123eb6d6a4d7a3d20f87cec95d7c94bd ]]></g:image_link>
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
<title><![CDATA[ Pouxit XF Lotion anti-poux 100 ml ]]></title>
<g:id>73bed0ca-3891-4587-a132-b501148da6e8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-xf lotion anti-poux 100 ml?73bed0ca-3891-4587-a132-b501148da6e8 ]]></link>
<g:price><![CDATA[ 1090.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pouxit XF est indiqué dans le traitement des poux et des lentes chez l'adulte et l'enfant de plus de 6 mois. </p>
<p>Ce produit ne contient pas d'insecticide au mode d'action neurotoxique sur le pou, il agit par effet physique.</p>
<p>15 minutes de pose, 1 seule application. </p>
<p></p>
<ul><li>Efficacité prouvée cliniquement²</li>
<li>Dès 6 mois</li>
<li>Femmes enceintes et allaitantes</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401596695491</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9565627f41cf017a2cb1d9f411720c7940422db6f6a8c89cb023d46b80ccc72c ]]></g:image_link>
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
<title><![CDATA[ Pouxit XF Lotion anti-poux 200 ml ]]></title>
<g:id>d193ec0c-2275-4bfe-8d1b-ed59cbf607ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pouxit-xf lotion anti-poux 200 ml?d193ec0c-2275-4bfe-8d1b-ed59cbf607ce ]]></link>
<g:price><![CDATA[ 1790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pouxit XF est indiqué dans le traitement des poux et des lentes chez l'adulte et l'enfant de plus de 6 mois. </p>
<p>Ce produit ne contient pas d'insecticide au mode d'action neurotoxique sur le pou, il agit par effet physique.</p>
<p>15 minutes de pose, 1 seule application. </p>
<p></p>
<ul><li>Efficacité prouvée cliniquement²</li>
<li>Dès 6 mois</li>
<li>Femmes enceintes et allaitantes</li>
</ul> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>3401051570028</g:gtin>
<g:brand><![CDATA[ COOPER ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e2a562049cfaaca9e294caa02cf177406d8da192e70050103d3cf2857a46b6ee ]]></g:image_link>
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
<title><![CDATA[ Poxclin Démangeaisons mousse 100 ml ]]></title>
<g:id>1dc0a75f-adc0-4670-976f-9c59b9f5ee32</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poxclin-démangeaisons mousse 100 ml?1dc0a75f-adc0-4670-976f-9c59b9f5ee32 ]]></link>
<g:price><![CDATA[ 1500.00 EUR ]]></g:price>
<description><![CDATA[ <div>
<div><span>PoxClin® Démangeaisons est une mousse adaptée à toute la famille et spécialement formulée pour soulager les symptômes associés aux démangeaisons cutanées en cas de peau sèche, d’eczéma, d’urticaire, de molluscum contagiosum, …</span></div>
<div> </div>
</div>
<div>
<p>PoxClin® Démangeaisons rafraîchit et apaise, et est basé sur le complexe bio-actif breveté 2QR, qui réduit le risque de surinfection cutanée et favorise le processus de cicatrisation de la peau.</p>
<p>Une applicat ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>7350068600555</g:gtin>
<g:brand><![CDATA[ PEDIACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/98b0156ee3097c92e80fba7739901fbca5451d06dee7c6572a5f9881d597d713 ]]></g:image_link>
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
<title><![CDATA[ Poxclin Varicelle mousse 100 ml ]]></title>
<g:id>50c22996-7fef-4997-9a7e-90c8d64c1c49</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/poxclin-varicelle mousse 100 ml?50c22996-7fef-4997-9a7e-90c8d64c1c49 ]]></link>
<g:price><![CDATA[ 1299.00 EUR ]]></g:price>
<description><![CDATA[ <div>
<div>PoxClin® Varicelle soulage les symptômes de la varicelle tels que les irritations, les démangeaisons et l’hypersensibilité.</div>
<div> </div>
</div>
<div>
<p>L’action apaisante de PoxClin® est renforcée par son efficacité contre la prolifération des bactéries. Le complexe 2QR, un dérivé de l’Aloe vera, bloque les bactéries à la surface de la peau lésée et limite leur prolifération. La barrière physique créée sur la peau, réduit le risque de surinfection cutanée et favorise le process ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>8718053572635</g:gtin>
<g:brand><![CDATA[ PEDIACT ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c5a9583e15ba609b56f5e6c4a9cf39572b67118d0e7f4f31600a8a9cffcb776b ]]></g:image_link>
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
<title><![CDATA[ PranaBB Huile Massage Sommeil BIO ]]></title>
<g:id>74541789-9ccc-4b2e-ab31-51b2b584c8c2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranabb-huile massage sommeil bio?74541789-9ccc-4b2e-ab31-51b2b584c8c2 ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L’huile de massage Sommeil est spécialement adaptée pour le massage relaxant de bébé : elle apaise en douceur et favorise le sommeil paisible?; les huiles végétales de coco, d’amande douce et de tournesol nourrissent la peau sensible de bébé et la protègent ; subtilement enrichie avec les huiles essentielles de Lavande vraie, de Camomille noble , d’Orange douce et de Ravintsara, l’huile de massage Sommeil au doux parfum apaisant crée un moment privilégié de détente et de complicité avec ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008533778</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8615bf810b939add9172e1a96ab448099c9d0085280c9a9299c5d4fee2510900 ]]></g:image_link>
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
<title><![CDATA[ Pranarom 24 Pastilles Gorge Miel/Citron ]]></title>
<g:id>45ce4232-6663-4e7f-bcee-7ff491bc6b41</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-24 pastilles gorge miel/citron?45ce4232-6663-4e7f-bcee-7ff491bc6b41 ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Pastilles Gorge</span> contribue à apaiser et adoucir la gorge.</p>
<p>L'huile essentielle de menthe poivrée agit comme un soin apaisant sur la gorge et les cordes vocales.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008551444</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4d87774f1a418befc22925b35709e37a07b5a99ea009be9caed46de8d0b7b710 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Amande douce - 100 ml ]]></title>
<g:id>c9139f92-adf7-4369-8a56-3c7748414a17</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-amande douce - 100 ml?c9139f92-adf7-4369-8a56-3c7748414a17 ]]></link>
<g:price><![CDATA[ 1070.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Douceur incarnée !</span><br /><br /><span>Huile adoucissante et protectrice par excellence, l’Amande douce convient parfaitement pour les soins du corps et la peau sèche. Elle est appréciée des mamans autant que des bébés en cosmétique et lors de la toilette ou du démaquillage.</span><br /><br /><span>C’est une base parfaite pour les mélanges d’aromathérapie destinés aux soins du corps car son rapport qualité prix est très avantageux et son confort d’application est optimal. Massages,  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008542701</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/40c79e465630e8e280164662ba2ffe8b55f3596792e6c3521b39ea93a875339e ]]></g:image_link>
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
<title><![CDATA[ Pranarom Aromaflex Forte 30 Comprimés ]]></title>
<g:id>368a5c03-ec78-4b5c-af6b-f07a6a8c11e1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-aromaflex forte 30 comprimés?368a5c03-ec78-4b5c-af6b-f07a6a8c11e1 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Aromaflex forte</span><br /><span>Confort des articulations et des muscles</span><br /><span>A base d'huile essentielle de gingembre </span><br /><span>+ curcuma et boswellia </span><br /><span>Complément alimentaire </span><br /><span>A partir de 18 ans</span><br /><span>30 comprimés sécables</span><br /><span>Poids net: 50g</span><br /><br /><span>AROMAFLEX FORTE Comprimés favorisent le confort et la mobilité des articulations et muscles grâce à une formule unique alliant 3 huiles ess ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008550928</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09ad61bf62238b84e850533425c867d8cfaa672e57ff81400c94e214cb64de37 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Aromaforce Capsules Nez-Gorge- Bio 30 Capsules ]]></title>
<g:id>080c8066-c39e-46fa-8852-65571aacd6f2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-aromaforce capsules nez-gorge- bio 30 capsules?080c8066-c39e-46fa-8852-65571aacd6f2 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Les capsules Nez et Gorge AROMAFORCE sont composées d'une synergie d’Huiles Essentielles d’Origan vulgaire et de Citron, spécialement sélectionnées pour favoriser la santé des organes respiratoires et soutenir les défenses naturelles de l’organisme. Ces capsules contribuent à apaiser les gorges sensibles.</span><br /><br /><span>L’Huile Essentielle d’Origan vulgaire :</span><br /><span>• Contribue à renforcer les défenses naturelles de l'organisme</span><br /><span>• Aide à gérer les in ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524783</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d235a50d1c186af5f04fe819d047de6ff7dde5e2c07476c97a37b153fa88583b ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Aromaforce Spray Assainissant 150 ml ]]></title>
<g:id>d2badfe5-2ca6-4676-a794-b1dd777cc5dc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-aromaforce spray assainissant 150 ml?d2badfe5-2ca6-4676-a794-b1dd777cc5dc ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-small h5" id="product-description-short-5748">
<div>Orange douce - Ravintsara - Contre les virus et les bactéries</div>
</div>
<div class="product-description" id="product-description-5748">
<div>Le spray assainissant AROMAFORCE Orange douce - Ravintsara garantit un air plus sain grâce aux notes purifiantes et aériennes de ses huiles 100% biologiques.<br /><br />Tests réalisés en laboratoire indépendant.<br />Formule efficace pour éliminer :<br />- Les virus: EN 1 ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008528187</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5a45d67d4cc5de2bf6e2541c4c44a1d1080d357371965564c5c6bc8a5576aa39 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Aromaforce Spray assainissant 150 ml + gel hydro-alcoolique 50 ml offert ]]></title>
<g:id>46271897-3e84-411a-8b2d-2caa5566d295</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-aromaforce spray assainissant 150 ml + gel hydro-alcoolique 50 ml offert?46271897-3e84-411a-8b2d-2caa5566d295 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Spray assainissant : </strong></p>
<p><span>Spray assainissant - Assainit l'air intérieur</span><br /><br /><span>Le spray assainissant Aromaforce et son complexe de 12 Huiles Essentielles 100% biologiques est spécialement conçu pour vous aider à assainir et purifier l’air de votre intérieur.</span><br /><br /><span>Les Huiles Essentielles de Bois de Hô, Ravintsara et Giroflier aident à réduire la présence de germes et de bactéries dans l'air, contribuant ainsi à maintenir un environn ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008544699</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/08067c04b9afed94985fc9bad3baff109dcf592f51950cdf89776760e88368fb ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Aromaforce Spray assainissant ravintsara tea tree 150 ml + gel hydro-alcoolique 50 ml offert ]]></title>
<g:id>b4f73b83-1b61-43a2-a8f4-5c653eb12ce4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-aromaforce spray assainissant ravintsara tea tree 150 ml + gel hydro-alcoolique 50 ml offert?b4f73b83-1b61-43a2-a8f4-5c653eb12ce4 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <p><strong>Spray assainissant : </strong></p>
<p><span>Le spray assainissant Aromaforce aux Huiles Essentielles de Ravintsara et de Tea Tree est l’allié idéal pour vous aider à assainir l’air de votre intérieur.</span><br /><br /><span>Enrichi de Bois de Hô, de Cèdre de l'Atlas et de Menthe des Champs, ce spray aident à réduire la présence de germes et de bactéries dans l'air, contribuant ainsi à maintenir un environnement sain. L’efficacité de ce spray est prouvée sur les Staphylococcus aureus, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008544712</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b91a7fdfdca098ae5fcdb01b1ac9787094a3eec04ea7f7ff1501804ab99fa00d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Aromaself Bracelet avec Plaquettes ]]></title>
<g:id>f62ad14b-3b89-4dd0-b0b2-d962aa5c4bf1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-aromaself bracelet avec plaquettes?f62ad14b-3b89-4dd0-b0b2-d962aa5c4bf1 ]]></link>
<g:price><![CDATA[ 560.00 EUR ]]></g:price>
<description><![CDATA[ <p>Bracelet Aromaself  à imprégner d'huiles essentielles</p>
<p>Votre allié de l'été!</p>
<p>Facile, confortable et ajustable</p>
<p>1 bracelet avec 3 plaquettes en céramique rechargeable incluses</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008541001</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/da7f42098a4b639551386656afce0a512bdd1c68c0979faf78e691dc7d64a893 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Basilic exotique - 10 ml ]]></title>
<g:id>acb7bd76-b73c-48f6-a32f-65702d7528f9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-basilic exotique - 10 ml?acb7bd76-b73c-48f6-a32f-65702d7528f9 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529238</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ed6d4f5934b4d79003a1590a571c9e746dca7b25967afdd629b34772ff29ac45 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Bergamote Huile Essentielle 10ml ]]></title>
<g:id>acda1955-6633-44a0-87fc-47ec0762194f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-bergamote huile essentielle 10ml?acda1955-6633-44a0-87fc-47ec0762194f ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><a href="https://www.pranarom.fr/fr/10140-digestion-et-sante-intestinale" target="_blank">Digestion Et Santé Intestinale</a><span> - </span><a href="https://www.pranarom.fr/fr/20110-diffusion-atmospherique" target="_blank">Diffusion Atmosphérique</a><span> - </span></p>
<p><span><span>Originaire de Chine, la bergamote fait partie de la famille botanique des Rutacées parmi laquelle nous retrouvons tous les agrumes : citron, mandarine, pamplemousse, orange. L’essence expressée à froid du zeste  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008506963</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/740081bfc1a946ffad5ee8bb4e8f81c9573a711c7453b437433eba12cd55e93f ]]></g:image_link>
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
<title><![CDATA[ Pranarom Bien chez soi - 30 ml ]]></title>
<g:id>6ebf67c0-237f-450c-9074-80c11966839e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-bien chez soi - 30 ml?6ebf67c0-237f-450c-9074-80c11966839e ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-small h5" id="product-description-short-32619">
<div>Ylang-ylang et Rose de Damas - Comme à la maison</div>
</div>
<div class="product-description" id="product-description-32619">
<div>Moments de détente et de bien-être «chez soi» grâce aux notes chaleureuses de l’Ylang-ylang et de la Rose de Damas.</div>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008537424</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/442bc18e64c2e56f67b0f97d7589ca8cbd5bb28e463d4ebd90b1ae3357b675e6 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Cajeput Huile Essentielle 10ml ]]></title>
<g:id>804096d5-cc9f-44fc-a673-9415bc81a329</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-cajeput huile essentielle 10ml?804096d5-cc9f-44fc-a673-9415bc81a329 ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p><a href="https://www.pranarom.fr/fr/10-sante-naturelle" target="_blank">Santé Naturelle</a><span> - </span><a href="https://www.pranarom.fr/fr/20-bien-etre-naturel" target="_blank">Bien-être naturel</a></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507717</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c8fba20bedae1c74b8568156a5dd5ac95a5b9d121a3a2b924211f3e9e2733d01 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Cannelier de Ceylan - 5 ml ]]></title>
<g:id>409bd85f-c1ad-4cc5-8573-1fd2af16fa37</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-cannelier de ceylan - 5 ml?409bd85f-c1ad-4cc5-8573-1fd2af16fa37 ]]></link>
<g:price><![CDATA[ 1105.00 EUR ]]></g:price>
<description><![CDATA[ <p><a href="https://www.pranarom.fr/fr/10120-defenses-naturelles" target="_blank">Défenses Naturelles</a><span> - </span><a href="https://www.pranarom.fr/fr/10140-digestion-et-sante-intestinale" target="_blank">Digestion Et Santé Intestinale</a><span> - </span><a href="https://www.pranarom.fr/fr/10160-anti-pique" target="_blank">Anti-Pique</a><span> - </span><a href="https://www.pranarom.fr/fr/10180-voies-urinaires" target="_blank">Voies Urinaires</a><span> - </span><a href="https://www.pranarom ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008501234</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f30dbbe14c18ca48d514a27e0dde2614f804147fa139b221810ff31092c8c4fd ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Citron Vert Huile Essentielle 10ml ]]></title>
<g:id>fd5dfbef-e621-40df-9d2f-b43eef38b255</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-citron vert huile essentielle 10ml?fd5dfbef-e621-40df-9d2f-b43eef38b255 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Issue de la distillation à basse pression du zeste de citron vert, l’Huile Essentielle de Citron Vert de Pranarom est une alliée thérapeutique et </span><strong>culinaire</strong><span>. Idéale pour apporter l’acidité du citron vert et une note fruitée aux préparations à base de poisson, de crustacés, mais également dans les desserts, cette essence est aussi appréciée pour ses vertus santé.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008596988</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/85beb9b2937a58a782a6cb77457d8ccf88bfb88bf43a5deb0c54eb64e93a1ad9 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Diffusion Huile Essentielle Esprit De Fête Bio 30 ml ]]></title>
<g:id>1fcc6007-9770-4a92-b7dc-c7463a0e75d4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-diffusion huile essentielle esprit de fête bio 30 ml?1fcc6007-9770-4a92-b7dc-c7463a0e75d4 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><b>Diffusion Huile Essentielle Esprit De Fête Bio</b> des laboratoires <strong>Pranarom</strong> est une synergie <a href="https://www.soin-et-nature.com/fr/118-huiles-essentielles-bio" target="_blank">d'huiles essentielles 100% Bio</a> prêt à être utilisé pour une diffusion qui confère une atmosphère gourmande et épicée idéale pour célébrer vos retrouvailles de fin d'année.</p>
<p>Conçu aux subtils senteurs et notes chaudes de Gingembre et de Cannelle,<strong> Pranarom Les Diffusables Esprit ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008551666</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/767637829131fb753c334559cf55925fe1b7f37ed5a01de117fd721633a2fe77 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Digest Stop 28 Gélules ]]></title>
<g:id>b4a4c891-f5eb-425b-ad71-a105498448c7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-digest stop 28 gélules?b4a4c891-f5eb-425b-ad71-a105498448c7 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p><span>Digest stop est composé d'huiles essentielles pures et naturelles de carvi et anis étoilé procurant un confort intestinal, ainsi que de charbon actif végétal</span></p>
<p><span> aidant à normaliser la fréquence des selles.</span><br /><br /><span>Ce complément alimentaire possède une action 2 en 1, gérant naturellement les problèmes de selles molles ou liquides, aidant ainsi à normaliser leur</span></p>
<p><span> fréquence.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008553059</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e03d158ce040d64edd50401246c3e2a768ecc770b477efb4c63756ce39743ec6 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Digestarom 30 Gélules ]]></title>
<g:id>b5ca1309-0ef9-4811-9163-8b459ff8c443</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-digestarom 30 gélules?b5ca1309-0ef9-4811-9163-8b459ff8c443 ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-small h5" id="product-description-short-48174">
<div>AIDE À SOUTENIR LES FLUX DE SUCS DIGESTIFS - Aux huiles essentielles 100% pures et naturelles de citron et de cumin*<br />+ Extrait naturel d’algues rouges</div>
</div>
<div class="product-description" id="product-description-48174">
<div>Ce complément alimentaire est formulé à base d'huiles essentielles pures et naturelles de citron et de cumin combinées à un extrait naturel d'algues rouges aidant à stimuler la ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008552977</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dcb3c39a143af2a31e944c3f7e689110f5d683bdb68b91cdf6e976ad663461ec ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Digestarom Digest Transit Poudre 10 Sachets ]]></title>
<g:id>7ee2509b-81da-4e06-8112-9ddc930ad8cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-digestarom digest transit poudre 10 sachets?7ee2509b-81da-4e06-8112-9ddc930ad8cd ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Formule laxative 100% naturelle, riche en mucilages.<br />Laxatifs de lest qui augmente le volume et l’hydratation des selles pour faciliter leur élimination naturelle<br />+<br />Apaise les crampes et soulage les maux de ventre grâce aux huiles essentielles</p>
<p>Non irritant, sans accoutumance</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008553011</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/549ac8e6057c93a97a644a088eef4aa1a5fe1c4856ab6f93298ef5eae9367d51 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Digestarom Oleobiotic 15 Capsules ]]></title>
<g:id>e42e4d40-2e03-49e4-961f-10a1ca9ad25f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-digestarom oleobiotic 15 capsules?e42e4d40-2e03-49e4-961f-10a1ca9ad25f ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p><span>Spécialement conçue pour maintenir la santé intestinale, la formule OLEOBIOTIC® Santé Intestinale associe les Huiles Essentielles 100% pures, biologiques et intégrales d'Origan, de Cannelle et d'Anis étoilé.</span><br /><br /><span>- L'Huile Essentielle d'Origan contribue à l'équilibre du microbiote intestinal, favorisant ainsi une digestion saine.</span><br /><br /><span>- L'Huile Essentielle de Cannelle aide à apaiser les inconforts intestinaux et favorise une fonction intestinale rég ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008555077</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3dfa7d9a648d6cfa38a0138b36d909161be46e22385b4cb4ba96505c9c1c9e1d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Gel bleus-bosses - 15 ml ]]></title>
<g:id>cbf83b2b-c81e-49bd-96b6-9f13ed66423d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-gel bleus-bosses - 15 ml?cbf83b2b-c81e-49bd-96b6-9f13ed66423d ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Ce gel Bleus-Bosses Pranabb est un gel apaisant aux huiles essentielles 100% biologiques* d’Immortelle, de Cyprès, de Curcuma et de Menthe pour un effet frais. Et enrichi aux huiles végétales 100% biologiques* d’Arnica et de Calophylle, reconnues pour leurs vertus apaisantes et régénératrices cellulaires en cas de peau abîmée.</span><br /><br /><span>En format mini, toujours à portée de main; le gel PranaBB Bleus-Bosses est un allié précieux pour aider bébé qui part à la découverte de s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008538247</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c53a871318738c6dc9997bfc448dc110230ba5ea24e2a5bc18b9b50f2d77d02b ]]></g:image_link>
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
<title><![CDATA[ Pranarom HE huile essentielle lavande vraie bio 10ml ]]></title>
<g:id>3f03f62b-0784-41da-a1e4-0f928db4bcc0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-he huile essentielle lavande vraie bio 10ml?3f03f62b-0784-41da-a1e4-0f928db4bcc0 ]]></link>
<g:price><![CDATA[ 815.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'huile essentielle Bio de lavande vraie Pranarôm est dotée d'une parfaite innocuité et son excellente tolérance alliée à son efficacité sans ombre ont très certainement contribué au rôle primordial qu'elle occupe dans toute pharmacie aromatique digne de ce nom.</p>
<p>Dans les collines et basses montagnes du bassin méditerranéen, la lavande vraie ou officinale se caractérise par des verticilles floraux associés à 2 petites bractées largement ovales-pointues, les feuilles sont étroites, linéa ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524493</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/058f635d6fbed8d1cfccb233c3164f497ca2e0e016dc4943c86c234abeb85e2c ]]></g:image_link>
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
<title><![CDATA[ Pranarom Huile Essentielle Bio Gaultherie F/10 ml  ]]></title>
<g:id>10453533-0f9e-458c-821a-60897def5fd5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-huile essentielle bio gaultherie f/10 ml ?10453533-0f9e-458c-821a-60897def5fd5 ]]></link>
<g:price><![CDATA[ 499.00 EUR ]]></g:price>
<description><![CDATA[ <div class="std">
<p><span class="pratitle">Originaire du Népal, la Gaultheria fragrantissima a des usages similaires à la Gaultheria procumbens. C’est le wintergreen népalais. L’H.E.C.T. de la gaulthérie odorante soulage les douleurs musculaires associées au surmenage, au mal de dos, à l’arthrite et à tout problème musculo-squelettique. Elle permet aux muscles de se détendre et diminue l’inflammation des articulations et des tendons.</span></p>
</div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507403</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2474d22b8721a558b0bbae191c857c695edc81fc8afc1a68a89e4133e970f938 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarom Huile Essentielle d'Angelique 5ml ]]></title>
<g:id>ea867f2f-9acb-4c03-8cd9-993cf36c3f28</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-huile essentielle d'angelique 5ml?ea867f2f-9acb-4c03-8cd9-993cf36c3f28 ]]></link>
<g:price><![CDATA[ 2250.00 EUR ]]></g:price>
<description><![CDATA[ <p>L'<span>Angélique</span> est une espèce herbacée de la famille des apiacées qui est particulièrement courante dans les climats humides, raison pour laquelle on la retrouve beaucoup en Europe du Nord et de l'Est. Fortement aromatique, ses pétioles, tiges et graines sont très souvent utilisés comme condiments en cuisine ou à des fins médicinales.</p>
<p>L'<span>huile essentielle d'Angélique</span> est pour sa part recueillie après distillation complète par entraînement à la vapeur d'eau de ses  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008500374</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bdfe393dea6cbf096b4ba71077ddd81b68a48504b74e24b03a364fac81bb176e ]]></g:image_link>
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
<title><![CDATA[ Pranarom Huile Végétale Neem 50ml ]]></title>
<g:id>b6846dd8-f1f7-4a5b-a5d8-a10a68d0f659</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-huile végétale neem 50ml?b6846dd8-f1f7-4a5b-a5d8-a10a68d0f659 ]]></link>
<g:price><![CDATA[ 640.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Traditionnellement utilisée en médecine ayurvédique, l’huile végétale de neem est réputée pour ses vertus purifiantes et assainissantes : soin des peaux à problèmes, soin des cheveux et même des végétaux.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008540677</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/507d2a3728a86f378444c642d2d3d5b8f5c6b1e87c1d8887757d02e053cb70d6 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Roller Après-piqûres 15ml ]]></title>
<g:id>8a5fe594-c1a6-4c59-8f50-e161c311249d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-roller après-piqûres 15ml?8a5fe594-c1a6-4c59-8f50-e161c311249d ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>En cas de piqûres, ce gel apaisant calme immédiatement les démangeaisons. </span></p>
<p><span>Les huiles essentielles de lavande aspic, menthe des champs, curcuma et de tanaisie allient leurs vertus apaisantes et calmantes.</span><br /><br /><span>Sous forme de roller, ce gel est pratique d’utilisation et facile à emporter partout.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531187</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6abdcb527e768600e2b2859b93507a5f0383475b5363a2c37a8892855866aa84 ]]></g:image_link>
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
<title><![CDATA[ Pranarom Spray Gorge Apaisant 15ml ]]></title>
<g:id>9e872f3a-84e1-46da-8e6b-156732509cdd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-spray gorge apaisant 15ml?9e872f3a-84e1-46da-8e6b-156732509cdd ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <div class="product-description-small h5" id="product-description-short-32442">
<div>Apaise la gorge - Contient du thym thujanol et de la menthe poivrée qui apaisent la gorge, le pharynx et les cordes vocales</div>
</div>
<div class="product-description" id="product-description-32442">
<div>Elixir pour la gorge aux huiles essentielles pures et naturelles.<br /><br />Aromaforce Spray gorge rafraîchit l’haleine et a une influence adoucissante sur la gorge en cas de chatouillement ou d’enrouement.< ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008535246</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/142a2b78cde140ef279f1cbe5f90516dee2eeff22d90a43989688168cc6ec7b5 ]]></g:image_link>
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
<title><![CDATA[ Pranarom huile essentielle Myrrhe 5 ml ]]></title>
<g:id>f65a9445-0676-4fac-8b42-37253e12a142</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-huile essentielle myrrhe 5 ml?f65a9445-0676-4fac-8b42-37253e12a142 ]]></link>
<g:price><![CDATA[ 730.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'huile essentielle de myrrhe</span><span> a été formulée par le laboratoire d'aromathérapie scientifique et médical : </span><span>Pranarôm</span><span>. Cette dernière constitue le remède idéal pour vous </span><span>réconforter durant des périodes difficiles </span><span>et les baisses de moral.  </span><br /><br /><span>Cette </span><span>huile essentielle de myrrhe Pranarôm</span><span> possède de nombreuses</span><span> propriétés bienfaisantes</span><span>, notamment des vertus a ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008526725</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/adfc264ebf953d0545c4655980c7aa595bce6a25b2b5c12004426a722511ffd3 ]]></g:image_link>
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
<title><![CDATA[ Pranarom huile essentielle mandarine bio 10ml ]]></title>
<g:id>de1c5e1a-7e79-46f2-b38b-ad2da3fd0eda</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranarom-huile essentielle mandarine bio 10ml?de1c5e1a-7e79-46f2-b38b-ad2da3fd0eda ]]></link>
<g:price><![CDATA[ 715.01 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Mandarinier (Citrus reticulata) Bio 10 ml 100% pure et naturelle, certifiée biologique, s'utilise comme complément alimentaire.</p>
<p>Ce petit arbre à feuilles persistantes et brillantes présente des fleurs blanches parfumées et un fruit orange. Originaire de Chine, la mandarine doit son nom aux mandarins chinois qui recevaient ce fruit en cadeau par tradition. La mandarine fournit une essence très utilisée car son action relaxante et calmante ainsi que son odeur t ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008597527</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b6f654a0e4c521a639b42ef647d17844bf6bea33181853ded4230be9a0a0df7a ]]></g:image_link>
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
<title><![CDATA[ Pranarôm  Allergoforce Spray Environnement 150 ml ]]></title>
<g:id>4d3400b1-8c6c-4326-ad2c-f375e6a2e365</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m  allergoforce spray environnement 150 ml?4d3400b1-8c6c-4326-ad2c-f375e6a2e365 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Science Allergoforce Spray Environnement 150 ml permet de chasser les acariens et d'éliminer les sources d'allergies et leurs désagréments (nez congestionné, oeil larmoyant...) Il possède des huiles essentielles de Cannelle, de Lemongrass et de Menthe Poivrée, reconnues pour leur propriétés anti-acarien et antiparasitaire.   Attention : Ce produit est un aérosol et est inflammable, il ne peut pas être expédié avec tous nos transporteurs.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008510359</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b84a670a873140b348b1dfacea463b4659aab6a36a3c453ebcb82d1950182504 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Allergoforce Spray Nasal ]]></title>
<g:id>9f04aa15-6af8-4a39-885b-cd44d111e85c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m allergoforce spray nasal?9f04aa15-6af8-4a39-885b-cd44d111e85c ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>- Le spray nasal Allergoforce est une solution hypertonique associée à des huiles essentielles 100% pures et naturelles. Les huiles essentielles de Tanaisie, Matricaire, Camomille noble et Poivre noir sont reconnues pour leurs vertus assainissantes, rafraichissantes et adoucissantes.<br /><br />- Ce produit est utilisé dans le traitement symptomatique de la congestion nasale, par exemple en cas de rhinite allergique et rhinopharyngite. Il décongestionne et purifie le nez en éliminant le mucus ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008521652</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/53d0b56d2f6abef7fc7d49d7a59f45878a9f8ea06283eee02535d2d102deb489 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromaboost Diet Roll-On  Bio 5 ml ]]></title>
<g:id>b26ef3ee-2175-4906-8d80-71cff7c1b497</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost diet roll-on  bio 5 ml?b26ef3ee-2175-4906-8d80-71cff7c1b497 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Diet Roll-On aux Huiles Essentielles Bio 5 ml est un roll-on olfactif conçu pour réduire les fringales grâce à une action coupe-faim. Un geste simple et rapide qui peut être répété à tout moment de la journée pour réduire le désir de manger.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p>
<p>100% des ingrédients sont d'origine naturelle.</p>
<p>Certifié Ecogarantie (Contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558115</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/30ee6072909127e20cd2bd1286632eb78ff3cdc6afdaac3ad9765617b355c0f4 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Détox 60 Capsules ]]></title>
<g:id>1cf75525-6962-4cdd-822f-4733946a4a1b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost détox 60 capsules?1cf75525-6962-4cdd-822f-4733946a4a1b ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Détox 60 Capsules est un complément alimentaire conçu pour favoriser l'élimination des toxines de l'organisme. Il favorise le bon drainage des émonctoires. Il contient de l'extrait sec standardisé de chardon marie, du zinc, des vitamines D3 et E, complétés par une synergie experte d'essence de citronnier, d'huiles essentielles de genévrier et cardamome.</p>
<ul><li>Le chardon marie soutient la santé du foie.</li>
<li>Les vitamines D3 et E ont des vertus anti-oxydantes, ant ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558191</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/805d0e302e089eea004115abf04eb351b25f7d740fd6d61509c4fbb64865c186 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Energy - Énergie 60 Capsules ]]></title>
<g:id>d61740ea-477d-4e97-8033-1e67d85ec0a7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost energy - Énergie 60 capsules?d61740ea-477d-4e97-8033-1e67d85ec0a7 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Energy - Énergie 60 Capsules est un complément alimentaire conçu pour aider à réduire la fatigue physique et mentale en offrant un soutien durable pour maintenir l'énergie tout au long de la journée. Idéal dans les périodes de fatigue intense ou pour surmonter une baisse de régime, ce complément alimentaire sans risque de dépendance offre une énergie soutenue sur le long terme, avec une cure recommandée de 1 mois. Il offre une action synergique, profonde et rapide.</p>
<p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558177</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/881c86605c2eb2a904fc7950c703cb19205c9c1f0419bafcbe11353a02ffb3ad ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Energy Brume Dynamisante Bio 50 ml ]]></title>
<g:id>17c0e274-a40c-45aa-b123-28e6e4463e88</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost energy brume dynamisante bio 50 ml?17c0e274-a40c-45aa-b123-28e6e4463e88 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Energy - Énergie Brume Dynamisante Bio 50 ml est une brume à vaporiser aux quatre coins de la pièce (bureau, salle de classe, salle de réunion) ou sur les textiles pour retrouver la vitalité. Un geste simple et rapide qui apporte un coup de boost partout et à tout moment de la journée, avec sa fragrance tonifiante.<br />Sa formule est enrichie en huile essentielle 100% biologique, pure et intégrale de pin sylvestre, traditionnellement utilisée comme tonique, pour stimuler  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558139</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/18aeb3b97b98699d0050790294b603c8d0820369c142345398bbd549a4ed3e6a ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Energy Roll-On aux Huiles Essentielles Bio 5 ml ]]></title>
<g:id>0586f937-4f72-42d4-939a-7fb27848446c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost energy roll-on aux huiles essentielles bio 5 ml?0586f937-4f72-42d4-939a-7fb27848446c ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Energy - Énergie Roll-On aux Huiles Essentielles Bio 5 ml est un roll-on olfactif conçu pour retrouver la vitalité. Un geste simple et rapide qui peut être répété à tout moment de la journée afin de réduire les sensations dues à la fatigue physique et mentale, pour une énergie soutenue au quotidien.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p>
<p>100% des ingrédients sont d'origine naturelle.</p>
<p>Certifié Ecogarantie (Contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558092</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f5305ab4b6ea105887bec789f60c50058fa30e1a522cc3fe9d5836ae7bfc7228 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Focus  Roll-On aux Huiles Essentielles Bio 5 ml ]]></title>
<g:id>9f3888df-f5a9-402d-95de-4c2f5d71231f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost focus  roll-on aux huiles essentielles bio 5 ml?9f3888df-f5a9-402d-95de-4c2f5d71231f ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Focus - Concentration Roll-On aux Huiles Essentielles Bio 5 ml est un roll-on olfactif conçu pour booster la concentration. Un geste simple et rapide qui peut être répété à tout moment de la journée pour aider à recentrer son attention et à ne pas s'éparpiller.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p>
<p>100% des ingrédients sont d'origine naturelle.</p>
<p>Certifié Ecogarantie (Contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558108</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e50daad1fd11479e5b81f24fc40ee35848c7bb2f3dc0d510bfc50ee7d1b7da72 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Focus - Concentration 60 Capsules ]]></title>
<g:id>1670c281-f491-4010-8571-69c338d9dec1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost focus - concentration 60 capsules?1670c281-f491-4010-8571-69c338d9dec1 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Focus - Concentration 60 Capsules est un complément alimentaire conçu pour aider à stimuler la performance cognitive et physique. Il offre un soutien durable pour améliorer la mémoire et la concentration. Il contient des extraits secs standardisés de ginkgo, ginseng et des vitamines B9 et B12, complétés par une synergie experte d'huiles essentielles de sauge à feuilles de lavande, romarin CT cinéole et menthe poivrée.</p>
<ul><li>Les extraits secs standardisés de ginkgo et ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558214</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/9d8d204f0f3b260ad27dd978360423dd00093add8a827a623d1b48d7b5d8beb0 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Immunity  60 Capsules ]]></title>
<g:id>dab35f0c-0b7c-4a5d-aac0-1fce9424abfb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost immunity  60 capsules?dab35f0c-0b7c-4a5d-aac0-1fce9424abfb ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Immunity - Immunité 60 Capsules est un complément alimentaire conçu pour aider à renforcer le système immunitaire. Il offre un soutien durable pour assurer le bon fonctionnement des défenses de l'organisme. Il contient de l'extrait sec standardisé d'échinacée, des vitamines B9, B12 et D3, complétés par une synergie experte d'huiles essentielles de ravintsara, gingembre et giroflier.</p>
<ul><li>L'extrait sec standardisé d'échinacée contribue au bon fonctionnement des défen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558207</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/20fb9373cb538de471ed8d665ac1dacbab2d67e12360c9dfdb93876e3fa33092 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Immunity  Roll-On aux Huiles Essentielles Bio 5 ml ]]></title>
<g:id>74c41e8d-da73-4b6e-9493-1f7d3ccafa60</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost immunity  roll-on aux huiles essentielles bio 5 ml?74c41e8d-da73-4b6e-9493-1f7d3ccafa60 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Immunity - Immunité Roll-On aux Huiles Essentielles Bio 5 ml est un roll-on olfactif conçu pour booster l'organisme. Un geste simple et rapide qui peut être répété à tout moment de la journée pour assurer le bon fonctionnement des défenses du corps et réduire la fatigue physique.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p>
<p>100% des ingrédients sont d'origine naturelle.</p>
<p>Certifié Ecogarantie (Contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558085</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/09ab56deb3aff2a2ee2e581975a3ecb36f48c2824e478700e5dc6d534f2ba032 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Relax - Détente 60 Capsules ]]></title>
<g:id>56b667cc-99bb-4205-975a-1942ccc116b0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost relax - détente 60 capsules?56b667cc-99bb-4205-975a-1942ccc116b0 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Relax - Détente 60 Capsules est un complément alimentaire conçu pour soutenir les symptômes mentaux et physiques du stress. Il offre un soutien durable durant les périodes de stress intense ou pour surmonter une anxiété passagère, grâce à un mélange exclusif d'extraits de plantes incluant du pavot de Californie, des vitamines B5, B6, B12, et boostées par les huiles essentielles pures et intégrales de lavande vraie, menthe verte et ravintsara.</p>
<p>Sans gluten, sans sucre ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558184</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b1c0c772b8ac719c690e7dfdef519258587f6e1983d58fee094bb1bb8d8ce865 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Relax Roll-On aux Huiles Essentielles Bio 5 ml ]]></title>
<g:id>a5724895-6434-491b-a27d-ecb4498df6ca</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost relax roll-on aux huiles essentielles bio 5 ml?a5724895-6434-491b-a27d-ecb4498df6ca ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Relax - Détente Roll-On aux Huiles Essentielles Bio 5 ml est un roll-on olfactif conçu pour apaiser les pics de stress intenses. Un geste simple et rapide qui peut être répété à tout moment de la journée pour se relaxer, se calmer et gérer ses émotions.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p>
<p>100% des ingrédients sont d'origine naturelle.</p>
<p>Certifié Ecogarantie (Contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558078</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/ccdaacf6e63263a3cf70cf401f5cd4044a5e119c2c44ef4ee6b63b13a2bb589f ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Sleep - Sommeil 60 Capsules ]]></title>
<g:id>d9423d09-3dcb-44b4-8064-9d3de26c99d2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost sleep - sommeil 60 capsules?d9423d09-3dcb-44b4-8064-9d3de26c99d2 ]]></link>
<g:price><![CDATA[ 1990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Sleep - Sommeil 60 Capsules est un complément alimentaire conçu pour retrouver rapidement un sommeil serein et réparateur. Il offre un soutien durable durant les périodes où le sommeil est perturbé. Il contient un mélange exclusif d'extraits de plantes dont la valériane, des vitamines B3, B6, D3, et boostées par les huiles essentielles pures et intégrales de camomille noble, lavande vraie et d'essence de mandarinier, créant une synergie puissante pour soutenir la relaxatio ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558160</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/201467c7d098ceb742e3ae01b97933a0f0478d29e1080953ffb6e9365ae039c5 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Sleep Brume d'Oreiller Bio 50 ml ]]></title>
<g:id>d22a8d8e-43da-4b2f-9c71-acdbbf6f6030</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost sleep brume d'oreiller bio 50 ml?d22a8d8e-43da-4b2f-9c71-acdbbf6f6030 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Sleep - Sommeil Brume d'Oreiller Bio 50 ml est une brume à vaporiser aux quatre coins de la pièce ou sur les textiles pour optimiser ses nuits. Un geste simple et rapide pour se détendre et se préparer au sommeil, avec une fragrance apaisante et réconfortante.<br />Sa formule est enrichie en huile essentielle 100% biologique, pure et intégrale de camomille noble, reconnue pour apaiser le système nerveux et détendre les muscles.</p>
<p>Produit certifié Ecogarantie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558122</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a71ce720ef38cd55c78cb87867ba53fd30cafdd7cefeb595dc098ca84565e4b4 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaboost Sleep Roll-On aux Huiles Essentielles Bio 5 ml ]]></title>
<g:id>9a393555-79a2-4639-bee6-86d5f5c076a4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaboost sleep roll-on aux huiles essentielles bio 5 ml?9a393555-79a2-4639-bee6-86d5f5c076a4 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaboost Sleep - Sommeil Roll-On aux Huiles Essentielles Bio 5 ml est un roll-on olfactif conçu pour optimiser ses nuits. Un geste simple et rapide pour faciliter l'endormissement et retrouver un sommeil de qualité.</p>
<p>Testé sous contrôle dermatologique.</p>
<p>Sans alcool.</p>
<p>100% des ingrédients sont d'origine naturelle.</p>
<p>Certifié Ecogarantie (Contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008558054</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e6d691aced09958b79477c14ba08ff06e400ab071ea68b5d273913eeaaff9f65 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaforce 15 Capsules Inhalation Bio ]]></title>
<g:id>1b6bee9d-b8bb-4fa9-8571-def1536ac1fc</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaforce 15 capsules inhalation bio?1b6bee9d-b8bb-4fa9-8571-def1536ac1fc ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaforce 15 Capsules Inhalation Bio aux huiles essentielles 100% pures et naturelles permettent de dégager le nez.</p>
<p>Les huiles essentielles présentes dans les capsules sont les suivantes : eucalyptus, ravintsara, menthe poivrée, tea tree, palmarosa.</p>
<p>Ces capsules sont à diluer dans de l'eau chaude. Lors de l'inhalation, les molécules aromatiques véhiculées par la vapeur d'eau dégagent le nez et aident à respirer plus librement.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008525483</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a31e065409bc23640afbc43bade4ae576b4f5595b0f9575f1f5fcc531cd57d13 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromaforce Baume Pectoral 80 ml ]]></title>
<g:id>9ef38141-c546-4b08-8f3c-32e3e80a049a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaforce baume pectoral 80 ml?9ef38141-c546-4b08-8f3c-32e3e80a049a ]]></link>
<g:price><![CDATA[ 675.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Aromaforce de Pranarom</span><span> est un baume réconfortant aux</span><span> huiles essentielles 100 % biologiques</span><span> d’eucalyptus radié, de romarin, de gaulthérie odorante, de thym à feuilles de sarriette et d'Inule ororante, reconnues pour la préservation</span><span> des défenses de l'organisme et de la santé respiratoire normale</span><span>. Il s’adresse à toute la famille et chez l’enfant à partir de 6 ans.</span><br /><span>Ce panaché d’huiles essentielles apporte une ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008527500</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b2b59568a2fb09b00de0d30c69c2c963ca70f526caef2e4f80d8c568a81f46fa ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromaforce Capsules Bronches Bio 30 Capsules ]]></title>
<g:id>d45c2ae0-f9eb-4821-9070-656a8cfca74a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaforce capsules bronches bio 30 capsules?d45c2ae0-f9eb-4821-9070-656a8cfca74a ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaforce Capsules Bronches Bio 30 Capsules est un complément alimentaire indiqué pour maintenir la santé des voies respiratoires grâce à l'huile essentielle de menthe poivrée qu'il contient. Ces capsules décongestionnent et dégagent les bronches et aident à lutter contre les agressions qui les touchent. Elles facilitent ainsi la respiration et aident l'organisme à mobiliser ses défenses naturelles.</p>
<p>Certifié Agriculture Biologique. Contrôle Certisys BE-BIO-01.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008527883</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b4baf8bd74dbd515d9ef9f1b4e20749ed2c693b11cd1358fb5f3bc485e32bb91 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromaforce Grog Voies Repiratoires Bio 140 g ]]></title>
<g:id>e607f65d-a82e-4d90-81a0-fdc37286aae1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaforce grog voies repiratoires bio 140 g?e607f65d-a82e-4d90-81a0-fdc37286aae1 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaforce Grog Voies Repiratoires 140 g est une préparation à base de miel qui contient de l'huile essentielle de ravintsara et de pin sylvestre pour maintenir la santé respiratoire et apaiser la gorge.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008535208</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0ebc8adcb0e2b7e828995615b921444f6728fd2e5994eea520e3c901cecc1244 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromaforce Spray Nasal Bio 15ml ]]></title>
<g:id>4336fad0-4574-4fec-90a0-e00f22a8aa47</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaforce spray nasal bio 15ml?4336fad0-4574-4fec-90a0-e00f22a8aa47 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromaforce Spray Nasal Bio 15 ml est une solution hypertonique décongestionnante pour pulvérisation nasale.</p>
<p>Elle est indiquée pour le traitement symptomatique de la congestion nasale, par exemple en cas de rhinite et rhinopharyngite.</p>
<p>Il convient aux femmes enceintes.</p>
<p>Ce spray pompe est doté d'une sécurité renforcée à la fermeture inviolable et avec filtration de l'air entrant.</p>
<p>Sans menthe ni menthol.</p>
<p>Certifié Agriculture Biologique. Contrôle Certisy ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008509148</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/892110f4d29e5a5c8f1b9cfc655dc97bb0fab24cb57a68786aa954d6c286f349 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromalgic Roller Articulations Fatiguées 75ml ]]></title>
<g:id>175ce1c2-276d-4634-89b3-41b74085fab6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromalgic roller articulations fatiguées 75ml?175ce1c2-276d-4634-89b3-41b74085fab6 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Aromalgic Roller Articulations Fatiguées</span> aux huiles 100% naturelles est un gel de massage non gras à appliquer en cas de raideur, muscles courbaturés, engourdis, fatigués et pour soulager les articulations.</p>
<p><span> </span></p>
<p>Les huiles essentielles de gaulthérie couchée, eucalyptus citronné, thym à feuilles de sarriette et de katafray aident à prendre soin des muscles et des articulations et à maintenir la souplesse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008552823</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0141fbeb3f1c7e8ace504bf5dbaefc40ca514ada0d2e4e13bff3ac6ba4a0779d ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Aromalgic Spray Muscles et Articulations Bio 75 ml ]]></title>
<g:id>5c6ff319-7994-4011-8833-2e9f4352edcb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromalgic spray muscles et articulations bio 75 ml?5c6ff319-7994-4011-8833-2e9f4352edcb ]]></link>
<g:price><![CDATA[ 899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromalgic Spray Muscles et Articulations Bio 75 ml est un spray qui soulage immédiatement et durablement en cas de tensions, raideurs et inconforts.<br />Sa formule non grasse et non collante hautement concentrée en huiles essentielles telles que copaïba, gaulthérie odorante et menthe des champs, pénètre rapidement.<br />Facile à utiliser, le spray est orientable dans toutes les positions sans perte de pression.<br />Spray respectueux de l'environnement.</p>
<p>Produit certifié Ecoga ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008534881</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/34dde0d62ee0c0a42c162d3f5df71f841a7fc6db14e3492274f219d78d166438 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromanoctis Spray Sommeil et Relaxation Bio 150 ml ]]></title>
<g:id>ee0730e0-88e5-474b-aee7-8b3ebbd1c129</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromanoctis spray sommeil et relaxation bio 150 ml?ee0730e0-88e5-474b-aee7-8b3ebbd1c129 ]]></link>
<g:price><![CDATA[ 1430.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromanoctis Spray Sommeil et Relaxation Bio 150 ml est une composition équilibrée aux notes de petit grain bigarade, mandarine et camomille noble. Ces huiles essentielles biologiques sont réputées pour faciliter l'endormissement, la relaxation et prévenir les réveils nocturnes, les pensées négatives.</p>
<p>Contient : éthanol, limonène (naturellement présent dans les huiles essentielles).</p>
<p>Certifié Agriculture Biologique, Contrôle Certisys BE-BIO-01.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008532108</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/2d0695291a644ec6bfacde6fbd981ee2fa0323f783774011e353bb8818214f82 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromapic Roller Anti-Moustique Lait Corporel 75 ml ]]></title>
<g:id>acd1210f-76a2-4b81-9c6c-c881c0fd11e4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromapic roller anti-moustique lait corporel 75 ml?acd1210f-76a2-4b81-9c6c-c881c0fd11e4 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Aromapic Roller Anti-Moustique Lait Corporel 75 ml à l'odeur agréable est un lait répulsif qui protège la peau des piqûres de la plupart des insectes : moustiques européens et tropicaux, abeilles et guêpes pendant 7 heures.</p>
<p>Formulé à base d'huiles essentielles de citronnelle, géranium, lavande, eucalyptus citronné et citriodiol, ingrédients aux propriétés répulsives.</p>
<p>Très pratique, il pénètre rapidement, laisse la peau douce, et non grasse.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008514357</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4b9fd7e1256a324a95bedef8cc9001f4080a9826442105e64a9ff7316b8d07d7 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromapic Soirée d'Été Paisible Mélange pour Diffusion Bio 20 ml ]]></title>
<g:id>bab2da5c-6fa9-4d43-8219-a029bcfeb9f4</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromapic soirée d'Été paisible mélange pour diffusion bio 20 ml?bab2da5c-6fa9-4d43-8219-a029bcfeb9f4 ]]></link>
<g:price><![CDATA[ 1190.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Aromapic Soirée d'Été Paisible Mélange pour Diffusion Bio 20 ml + 10 ml Offert et un mélange pour diffusion aux huiles essentielles 100% biologiques et aux senteurs typées de citronnelle et de géranium : savourez le plaisir des soirées d'été en toute quiétude.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531989</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/848290c94f86f5b7b389067ed567477c06205d00cded4e2c0e7687de6f762ce7 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Aromapic Spray Anti-Moustiques Atmosphère et Tissus 150 ml ]]></title>
<g:id>f5dacd19-8042-4690-a8f0-750ac9a2eb26</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromapic spray anti-moustiques atmosphère et tissus 150 ml?f5dacd19-8042-4690-a8f0-750ac9a2eb26 ]]></link>
<g:price><![CDATA[ 1390.00 EUR ]]></g:price>
<description><![CDATA[ <div class="titre_zone_desc">DESCRIPTION</div>
<div class="content_zone_desc tabcontent">
<div id="type_info_prio_11_1">
<p>Pranarôm Aromapic Spray Anti-Moustiques Atmosphère et Tissus 150 ml est un répulsif au parfum agréable, indiqué pour un usage familial, qui éloigne efficacement les moustiques européens et tropicaux (aedes albopictus (moustique tigre), aedes aegypti, culex pipiens, anopheles gambiae) pendant 7 heures.<br />Vaporisé dans l'air ou sur les textiles, ce répulsif est composé de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531149</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3853c3be6f095c3184dc3f3e8c3a23c69dd5e1030e7f89ba0cecfe0b49633c58 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Buccarom Gel Buccal 15 ml  ]]></title>
<g:id>a205815a-cc09-4922-9c16-8161fd3830ee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m buccarom gel buccal 15 ml ?a205815a-cc09-4922-9c16-8161fd3830ee ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Buccarom contribue à une hygiène buccale optimale : la synergie d’huiles essentielles complémentaires qui compose ce gel protège la bouche et apaise les zones sensibles en soutenant le pouvoir réparateur de la peau. Toute gène ressentie au niveau de la sphère buccale trouvera un soulagement par l’application du gel BUCCAROM grâce à ses vertus calmantes et réparatrices.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008551956</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/446e2793b101f53ccd0ea124b40f6c01a576050442bf3fb8ae2440c64a6c959b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Capsules d'Huile Végétale Nigelle 60 Capsules ]]></title>
<g:id>fe39d577-1601-446e-9c4a-76eea774be09</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m capsules d'huile végétale nigelle 60 capsules?fe39d577-1601-446e-9c4a-76eea774be09 ]]></link>
<g:price><![CDATA[ 1360.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Capsules d'Huile Végétale Nigelle 60 Capsules est un complément alimentaire sous forme de capsules prédosées de 750 mg d'huile végétale de nigelle (Nigella sativa) vierge, reconnue comme huile d'exception en tant que complément alimentaire.</p>
<p>Vegan.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008537363</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d36afc6e90c5597dcbdf094e5bdfd1b393eb88efc7684e6780dd9d9ebd3cbf4 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Capsules d'Huile Végétale Onagre 60 Capsules ]]></title>
<g:id>3cb683eb-39a0-470b-9a0b-fabb50ca482e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m capsules d'huile végétale onagre 60 capsules?3cb683eb-39a0-470b-9a0b-fabb50ca482e ]]></link>
<g:price><![CDATA[ 1420.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Capsules d'Huile Végétale Onagre 60 Capsules est un complément alimentaire sous forme de capsules prédosées de 750 mg d'huile végétale d'Onagre (Oenothera biennis L.) vierge, source principale d'acide gamma-linolénique (GLA) et d'acide linoléique.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008537325</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b15e72c4e6c8ff886edaf490f86ba386c49b6c452c5fdab8aa01010f2003a818 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Capsules d'Huile Végétale Rose Musquée 60 Capsules ]]></title>
<g:id>4e5f2b49-3e8e-4a32-b7e3-e15b9cd08ba9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m capsules d'huile végétale rose musquée 60 capsules?4e5f2b49-3e8e-4a32-b7e3-e15b9cd08ba9 ]]></link>
<g:price><![CDATA[ 1730.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Capsules d'Huile Végétale Rose Musquée 60 Capsules est un complément alimentaire sous forme de capsule prédosées de 750 mg d'huile végétale de rose musquée (Rosa rubiginosa) vierge, source végétale équilibrée de 2 acides gras essentiels.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008537349</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6fb049a8c9e0b0cedc8bfe6e7145979115bd3390625b52c30aecae7104ea21bb ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Circularom Gel Crème Jambes Légères Bio 100 ml ]]></title>
<g:id>34f6fb9a-a7e3-4f1c-ad8b-824dce0408d9</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m circularom gel crème jambes légères bio 100 ml?34f6fb9a-a7e3-4f1c-ad8b-824dce0408d9 ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Circularom Gel Crème Jambes Légères Bio 100 ml est un gel crème qui apaise la sensation de jambes lourdes et fatiguées grâce à la synergie d'huiles essentielles, notamment de menthe des champs, immortelle et cade, et de vigne rouge, réputées pour leur effet tonifiant.<br />La texture non grasse et non collante convient parfaitement au massage et laisse la peau douce et hydratée.</p>
<p>Sans alcool.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531422</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/92c11a85a48ad4dad103ddbe23bffad828c2cc16f6205b0a2ac9d77ca88795cb ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Circularom Jambes Légères Bio 75 ml ]]></title>
<g:id>6e5bcccd-29f1-4e7c-aa99-a90d7888a023</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m circularom jambes légères bio 75 ml?6e5bcccd-29f1-4e7c-aa99-a90d7888a023 ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Circularom Jambes Légères Bio 75 ml est un spray corporel aux huiles essentielles 100% biologiques qui apaise immédiatement la sensation de jambes lourdes et fatiguées et procure une sensation de fraîcheur intense et durable grâce à la synergie d'huiles essentielles enrichie en extrait de bourgeons de marronnier d'Inde.<br />Le spray préserve l'hydratation de la peau grâce à l'aloe vera et aux composants naturels issus de l'huile de coco, il pénètre rapidement en laissant la peau fra ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531446</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/770cb6955218e9e58c6c55fad30f91758710cfa56a65fcb1710bf7d21af86ebc ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Gel Crème Apaisant Piqûres d'Insectes et de Végétaux Bio 40 ml ]]></title>
<g:id>28e289b7-4cff-4582-821f-d371601d7d06</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m gel crème apaisant piqûres d'insectes et de végétaux bio 40 ml?28e289b7-4cff-4582-821f-d371601d7d06 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Gel Crème Apaisant Piqûres d'Insectes et de Végétaux Bio 40 ml est un gel crème à l'aloe vera qui calme les démangeaisons et soulage les irritations telles que les piqûres d'insectes et de plantes ainsi que petits coups de soleil. Il procure une sensation de fraîcheur intense de longue durée.</p>
<p>Végan.</p>
<p>Produit certifié Écogarantie (contrôle Certisys).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531620</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1f5c31701efd983991d4160b1abd5551b595f2b748d2a51b73dc0aa00af0c136 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Huile Bio Citronnelle de Java 5 ml  ]]></title>
<g:id>0516b5d0-928d-48fa-8871-8fe576f51841</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile bio citronnelle de java 5 ml ?0516b5d0-928d-48fa-8871-8fe576f51841 ]]></link>
<g:price><![CDATA[ 339.99 EUR ]]></g:price>
<description><![CDATA[ <p>Comme tous les cymbopogons, la citronnelle de Java est une herbe originaire d’Indonésie qui présente de longues feuilles étroites, des tiges et des inflorescences également linéaires. Les citronnelles sont des grandes herbes vivaces, sauvages ou cultivées des régions tropicales : Java, Sri Lanka… Son odeur fraîche, verte, citronnée se rapproche de celle de la mélisse à laquelle elle est parfois substituée.<br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507212</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7aef128d62c046b9c73a7e1e10791d2d45ae53027f4f3d8ea9174530feb5a35a ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle  Bio  Lavandin Super 10ml ]]></title>
<g:id>202fc92d-eb9e-45db-a84e-7254c7c7145e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle  bio  lavandin super 10ml?202fc92d-eb9e-45db-a84e-7254c7c7145e ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’hybridation de la lavande vraie et de la lavande aspic a donné naissance aux lavandins (clones) plus riches en essence dont les caractéristiques tant botaniques que pharmacologiques sont proches de celles de leurs parents d’origine.<br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008581908</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a36f2661d84047b7c3f2e4a653d54ee5d89dcd593f89f3961dced8ecb1fa7253 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle  Eucalyptus Globuleux  FL/ 10 ml ]]></title>
<g:id>d6b7a1ab-8d6c-4fb4-b8f4-ed514eef70ec</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle  eucalyptus globuleux  fl/ 10 ml?d6b7a1ab-8d6c-4fb4-b8f4-ed514eef70ec ]]></link>
<g:price><![CDATA[ 390.00 EUR ]]></g:price>
<description><![CDATA[ <p>Très répandu sur le globe entier (Espagne, Chili, Inde, Chine…) et très utilisé pour ses propriétés curatives, ce bel arbre de la grande famille aromatique des myrtacées possède une action antivirale, antifongique, antibactérienne et expectorante.<br /><br />Trucs &amp; Astuces:<br /><br />Pour assainir l’atmosphère pendant les périodes hivernales, diffusez le mélange composé de 1/3 HECT Eucalyptus globuleux + 1/3 HECT Eucalyptus radié + 1/3 HECT Eucalyptus mentholé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008502460</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c9b974a481416c9536ec9ee148d9808b23cd49ba2eb7d80683141dbedcf5a92b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Aneth 10 ml ]]></title>
<g:id>68dab148-b482-4511-a242-7f001c7fb939</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle aneth 10 ml?68dab148-b482-4511-a242-7f001c7fb939 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Huile Essentielle Aneth (Anethum graveolens) 10 ml 100% pure et naturelle, s'utilise comme complément alimentaire.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008500343</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/eb1960e73a6804740b2902a84718acaca18fb2992d246c31cbfdf31edbba873c ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Basilic Sacré  5 ml ]]></title>
<g:id>4465851a-bfe3-4b35-a07a-dac63de2900e</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle basilic sacré  5 ml?4465851a-bfe3-4b35-a07a-dac63de2900e ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Basilic Sacré (Ocimum sanctum) 5 ml est une huile essentielle 100% pure et 100% naturelle.</p>
<p>Partie distillée : feuille</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008508790</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7f0f71b00e5d915b6c0feba32ff8a2411ab9e1518cb39bb5a1ad9642d470cdbf ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Baume de Copahu 10ml ]]></title>
<g:id>39e510af-10b3-43e8-a7d3-dd382f7ead40</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle baume de copahu 10ml?39e510af-10b3-43e8-a7d3-dd382f7ead40 ]]></link>
<g:price><![CDATA[ 540.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Baume de Copahu (Copaifera officinalis) 10 ml est une huile essentielle 100% pure et 100% naturelle.</p>
<p>Cette huile essentielle est idéale comme complément alimentaire.</p>
<p>Partie distillée : oléorésine</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008526824</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5ba60d37baf695e8c09e2e68b530933bff708a813345d01bff850459bc28fe51 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Bois de Rose 5ml ]]></title>
<g:id>28d9269b-facb-4dde-9dd3-1505c1da9d27</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio bois de rose 5ml?28d9269b-facb-4dde-9dd3-1505c1da9d27 ]]></link>
<g:price><![CDATA[ 1595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile Essentielle Bois de Rose est botaniquement certifiée, 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.<br /><br />L'huile essentielle de bois de rose offre des propriétés anti-rides, et très bien tolérée par la peau. Elle est remarquable pour ses propriétés anti-virales et bactériennes chez l'e ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008518584</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6ed09238e448a0b7c654c4973591c475304f7168f4ef85d8d50eef0d410259d5 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Eucalyptus Citronnée 10ml ]]></title>
<g:id>f9b3c549-68ec-42cb-bbf0-01f38385be42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio eucalyptus citronnée 10ml?f9b3c549-68ec-42cb-bbf0-01f38385be42 ]]></link>
<g:price><![CDATA[ 440.00 EUR ]]></g:price>
<description><![CDATA[ <p>Feuilles lancéolées, fleurs blanches avec de nombreuses étamines, fruit hémisphérique et ligneux, l’eucalyptus citronné de Madagascar ou du Vietnam fournit une huile essentielle majeure pour soulager rapidement un foyer inflammatoire important. Le traitement est remarquablement efficace mais votre passage dans les bureaux laissera une trace olfactive “indélébile” et variablement appréciée !<br /><br />Trucs &amp; Astuces:<br /><br />Sur une inflammation ou douleur aiguë après le sport: 3 gout ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507267</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/82ebb864a2ff55ef90793d865712ab714e84e6e34a10fde546634d68ab0361f7 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Gingembre 5ml ]]></title>
<g:id>a5e9c37f-fa6f-4d5b-b23b-f5198ae2ad89</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio gingembre 5ml?a5e9c37f-fa6f-4d5b-b23b-f5198ae2ad89 ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le rhizome de gingembre est connu depuis plus de 6000 ans en Inde et en Chine pour le traitement des maux d’estomac, de la diarrhée et des nausées mais aussi répandu pour ses usages culinaires. Actuellement, plusieurs études en double aveugle avec placebo ont établi l’efficacité et l’innocuité du gingembre dans le traitement des nausées de grossesse et des nausées post-opératoires. La “Commission E“ pour la phytothérapie reconnaît l’usage médicinal du rhizome de gingembre pour traiter les tro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008508783</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d023207e789e8ea2049da7faa1dc135224136ef3cfa7e20fdb8d3086a2d971ba ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Lavande Aspic 10 ml ]]></title>
<g:id>214cb409-e39d-42ad-8b81-edd673f9c8c0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio lavande aspic 10 ml?214cb409-e39d-42ad-8b81-edd673f9c8c0 ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cette plante aérienne aime la garrigue du sud de l’Europe et les sols calcaires, craint le froid et présente des fleurs violet pâle disposées en épis lâches, au sommet de longues tiges. La floraison et la cueillette sont plus tardives que la lavande vraie. La lavande aspic fournit une huile essentielle qualifiée d’urgence car elle sera “miraculeuse” pour soulager et guérir de manière quasi instantanée les brûlures sévères et les piqûres de guêpe. En avoir eu besoin dans ces circonstances prou ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008574283</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/958d5613f0407d390498ff8f3d3eea0a25426549fea143cd3f2d555902b3c3b2 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Niaouli 10ml ]]></title>
<g:id>f2c7014d-71a9-4422-9503-2cd34b1a270b</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio niaouli 10ml?f2c7014d-71a9-4422-9503-2cd34b1a270b ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le niaouli fournit une huile essentielle remarquable d’efficacité et de tolérance, autrefois appelée goménol. Comme la lavande vraie, elle est considérée comme une panacée tant ses indications sont larges. Les multiples résultats obtenus par son emploi lui permettent de se classer dans les 10 premières huiles essentielles utilisées par le consommateur informé.<br /><br />Trucs &amp; Astuces:<br /><br />1 goutte HECT Niaouli + 1 goutte HECT Géranium d'Egypte dans votre crème de nuit suffira à  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524417</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/92d8e28e6f2c8211c7a80b63a2c4bd1d578d8c6efe134f0c98584d2303b6d19e ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Ravintsara 10 ml ]]></title>
<g:id>433e4971-218c-4f3c-9ffd-825b817e38a0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio ravintsara 10 ml?433e4971-218c-4f3c-9ffd-825b817e38a0 ]]></link>
<g:price><![CDATA[ 999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Originaire de Madagascar et appelé aussi Cinnamomum camphora ct cinéole, il pousse à l’état sauvage dans les forêts tropicales humides et peut atteindre 15 mètres. Ses feuilles sont ovales, alternes, coriaces et larges, persistantes et brillantes sur la face supérieure, rappelant son appartenance à la famille des Lauracées. La floraison a lieu de novembre à janvier et fournit une baie très caractéristique.<br /><br />Trucs &amp; Astuces:<br /><br />Formule pour augmenter les défenses naturell ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524400</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74b412c4ee9dd9bc7e222b49247a32b8bb79e3ffb037e85401ec06758cf81580 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bio Romarin à Camphre 10ml ]]></title>
<g:id>6eaa69ca-21f5-4de0-afde-aa414acf3c74</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bio romarin à camphre 10ml?6eaa69ca-21f5-4de0-afde-aa414acf3c74 ]]></link>
<g:price><![CDATA[ 635.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Bio Huile Essentielle Romarin à Camphre chémotypée (H.E.C.T) est botaniquement certifiée, 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.<br /><br />Poussant à l’état sauvage sur le pourtour méditerranéen, le romarin est un arbrisseau qui possède de nombreuses vertus. L'huile essentielle de ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524523</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5a2b58b275dbbdc5fffd8162c22081c620315596a79caed19e014504cd76f762 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bois De Hô 10ml ]]></title>
<g:id>8132d3eb-da4f-405c-9f64-d205aaa2fdf5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bois de hô 10ml?8132d3eb-da4f-405c-9f64-d205aaa2fdf5 ]]></link>
<g:price><![CDATA[ 525.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Bois de Hô (Cinnamomum camphora ct linalol) 10 ml est une huile essentielle 100% pure et naturelle de Bois de Hô.</p>
<p>Cette huile essentielle de Bois de Hô est obtenue par distillation de l'écorce d'un arbre de Chine, appelé aussi Bois de Shiu ou Laurier de Chine. Elle est d'une efficacité excellente et d'une bonne tolérance cutanée.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008584831</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dfdd84a803a2524a3a2623fc313ea0664c73219de271703593d9b3f1701edb7a ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Bois Santal des Indes 10 ml ]]></title>
<g:id>40e49d34-12d7-47cb-aef9-900fc3f6d07c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle bois santal des indes 10 ml?40e49d34-12d7-47cb-aef9-900fc3f6d07c ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Bois Santal des Indes (Amyris balsamifera) 10 ml est une huile essentielle chemotypée 100% pure et naturelle.</p>
<p>Partie distillée : bois.</p>
<p>Origine : Haïti.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008500312</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f87b558c38c91b4b64832dc97e31ca728a97efc375b1f64513359a3088fd4a6b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Camomille Allemande 5ml ]]></title>
<g:id>e62c011e-9903-4ba8-b55a-c4937024e4ab</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle camomille allemande 5ml?e62c011e-9903-4ba8-b55a-c4937024e4ab ]]></link>
<g:price><![CDATA[ 1899.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Camomille Allemande (Matricaria recutita) 5 ml 100% pure et naturelle, s'utilise comme complément alimentaire.</p>
<p>Partie distillée : fleur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008534744</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a51116351f837f82699ed002e7977b311f5c89f455455d43724dd36c55a765aa ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Camomille Noble 5ml ]]></title>
<g:id>26794564-d92f-414c-8110-0977f598f4a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle camomille noble 5ml?26794564-d92f-414c-8110-0977f598f4a6 ]]></link>
<g:price><![CDATA[ 1630.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Camomille Noble (Chamaemelum nobile) 5 ml 100% pure et naturelle, s'utilise comme complément alimentaire.</p>
<p>Sur les sols légers, sablonneux de l'ouest de l'Europe, cette plante vivace présente des feuilles plumeuses, des capitules composés de fleurs blanches, rares, tubuleuses, jaunes au centre insérées sur un réceptacle conique et des akènes jaunâtres côtelés.</p>
<p>Molécules aromatiques : Angélate d'Isobutyle, Angélate d'Isoamyle</p>
<p>Partie distillée : fl ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008501074</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/618d676abcf6141b727b11abd4a024d0ebfc8ff9849355bde8356ae3fca7dcb9 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Cannelier de Chine Bio 10 ml ]]></title>
<g:id>ab50e0bb-5c0d-479c-9f70-f82fecd583ed</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle cannelier de chine bio 10 ml?ab50e0bb-5c0d-479c-9f70-f82fecd583ed ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Huile Essentielle Cannelier de Chine (Cinnamomum cassia) Bio 10 ml est une huile essentielle chémotypée (H.E.C.T) et botaniquement certifiée. Elle est 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</span></p>
<p>L'huile essentielle de cannelier de chine est reconnue pour ses multiple ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008506826</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4c90fb71dadc5aeaba02d0a5c4c25239c782699d4636f8e0ccedb1b7d3a4106d ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Cardamome 5ml ]]></title>
<g:id>8265da5e-7035-4c56-ac94-9864ad478a0a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle cardamome 5ml?8265da5e-7035-4c56-ac94-9864ad478a0a ]]></link>
<g:price><![CDATA[ 1015.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Cardamome (Elettaria cardamomum) 5 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>Partie distillée : fruit.</p>
<p>Origine : Guatémala.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008502361</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/dcb97fd55739f9349adff0e53e18309de9e38d1a597c9b2556ab5b39f115b527 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Carotte 5ml ]]></title>
<g:id>ebd2f89c-5db9-4510-af8e-b014b2e97944</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle carotte 5ml?ebd2f89c-5db9-4510-af8e-b014b2e97944 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Carotte (Daucus carota) 5 ml 100% pure et naturelle, s'utilise comme complément alimentaire.</p>
<p>L'huile essentielle de carotte est reconnue pour être un tonique des voies digestives. Elle a également de nombreuses actions au niveau de la peau.</p>
<p>Partie distillée : plante verte en graines.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008502323</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c284fc6306fb4c4ed4978142bfa1440a324ffb284b4e8656a81909e07560a6e1 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Carvi  10 ml ]]></title>
<g:id>6244675e-78c3-4937-917d-ccff500550a6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle carvi  10 ml?6244675e-78c3-4937-917d-ccff500550a6 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Carvi (Carum carvi) 10 ml est une huile essentielle 100% pure et 100% naturelle.</p>
<p>Cette huile essentielle est idéale comme complément alimentaire.</p>
<p>Partie distillée : semence</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008500985</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/3ac67ababa3cfcf93f95fdec0c4c4f8435146bb6366f085928db340788c90ba5 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Ciste FL/5 ml ]]></title>
<g:id>9ffa1d80-0234-4f5a-9d41-8242de0b8ebb</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle ciste fl/5 ml?9ffa1d80-0234-4f5a-9d41-8242de0b8ebb ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[ <p>Toutes les propriétés de la fleur de ciste ladanifère sont réunies dans cette huile de Ciste Ladanifère de Pranarôm.<br /><br />Connue pour ces vertus antivirales et celle de régulateur immunitaire l'huile de ciste ladanifère de Pranarôm, aidera votre organisme à se défendre des bactéries.L'huile de<br /><br />ciste ladanifère de Pranarom est aussi reconnue pour ses qualités astringentes et hémostatiques.<br /><br />Créée à base de produits biologiques,l'huile de ciste ladanifère de Chine de  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008573286</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7cb99cb139fce7ad25b7831c83d2093ed99b29e4340f24787bac76d6664e02b7 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Cumin  5 ml ]]></title>
<g:id>3627e5f1-d8ff-453d-8388-802601e1b1c5</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle cumin  5 ml?3627e5f1-d8ff-453d-8388-802601e1b1c5 ]]></link>
<g:price><![CDATA[ 625.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Cumin (Cuminum cyminum) 5 ml est une huile essentielle 100% pure et 100% naturelle.</p>
<p>Cette huile essentielle est idéale comme complément alimentaire.</p>
<p>Partie distillée : fruit</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008502057</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/740415b6907dd254c2c0c0e7f5faa2cc60dd6b8c7090e8eecd2b70bafbbca18e ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Cyprès de Provence 10 ml ]]></title>
<g:id>c5034018-61e4-41e5-a5da-2a1a3516ea34</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle cyprès de provence 10 ml?c5034018-61e4-41e5-a5da-2a1a3516ea34 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Cyprès de Provence (Cupressus sempervirens) 10 ml est une Huile Essentielle Chémotypée (H.E.C.T.) 100% pure et naturelle.</p>
<p>Partie distillée : rameau (écorces).</p>
<p>Molécules aromatiques : alpha-pinène, delta-3-carène.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008533266</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6d53cf234d670560b0666d3c6e75f6d20ba9ad8af2afc9e9c63d4ff9a105c8ac ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Huile Essentielle Céleri  10 ml ]]></title>
<g:id>db8a2b9e-d88e-4b23-9c33-e6aeb5069f11</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle céleri  10 ml?db8a2b9e-d88e-4b23-9c33-e6aeb5069f11 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Céleri (Apium graveolens var. dulce) 10 ml est une huile essentielle 100% pure et 100% naturelle.</p>
<p>Partie distillée : semence</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529696</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/78dd8b9a1bf1be617eaac09a3f173aeb7867c683f1dd51f20b48d2c25071273b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Eucalyptus Mentholé  10 ml ]]></title>
<g:id>36905599-08e8-4b3f-8bfc-a20fe13b9f61</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle eucalyptus mentholé  10 ml?36905599-08e8-4b3f-8bfc-a20fe13b9f61 ]]></link>
<g:price><![CDATA[ 490.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Eucalyptus Mentholé (Eucalyptus dives) 10 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>L'eucalyptus mentholé fournit une huile essentielle indispensable dans toutes les synergies visant à traiter des pathologies où un processus muqueux encombre les voies respiratoires ou ORL. Elle dispose de propriétés rafraîchissantes et lipolytiques.</p>
<p>Partie distillée : feuille.</p>
<p>Origine : Australie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008526688</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a2c798c0c78e77e5fc1b4d101abe83fdb762a570020b326e7abb15c2ac27a689 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Eucalyptus Smithii  Bio 10 ml ]]></title>
<g:id>ac0a16c3-7556-4cd6-a79d-ad2c34e57650</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle eucalyptus smithii  bio 10 ml?ac0a16c3-7556-4cd6-a79d-ad2c34e57650 ]]></link>
<g:price><![CDATA[ 475.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Eucalyptus Smithii (Eucalyptus smithii) Bio 10 ml 100% pure et naturelle, certifiée biologique, s'utilise comme complément alimentaire.</p>
<p>Partie distillée : Feuille.</p>
<p>Bio signifie : issu de l'agriculture biologique (contrôle Certisys BE-BIO-01).</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507328</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a1bc52187622f80d2871d4303a756fc543743dbfcea855eb78b65b29c949045a ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Eucalyptus fleurs Multiples à Cryptone Bio 10 ml ]]></title>
<g:id>238a980d-4baa-4949-9984-567b1755c344</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle eucalyptus fleurs multiples à cryptone bio 10 ml?238a980d-4baa-4949-9984-567b1755c344 ]]></link>
<g:price><![CDATA[ 1695.00 EUR ]]></g:price>
<description><![CDATA[ <div id="type_info_prio_11_1">
<p>Pranarôm Huile Essentielle Eucalyptus à Fleurs Multiples à Cryptone (Eucalyptuus polybractea ct criptone) Bio 10 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>Partie distillée : Feuille.</p>
<p>Certifiée Agriculture Biologique. Contrôle Certisys BE-BIO-01.</p>
</div>
<div class="texte_restriction"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008527487</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/61ce3d39cb71bdca19a865b2365cd82b8eef14c2c5970f5cf623e0b035a967e9 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Fenouil Bio 10 ml ]]></title>
<g:id>43f7689e-51ab-402f-ac89-485b8ed59e4d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle fenouil bio 10 ml?43f7689e-51ab-402f-ac89-485b8ed59e4d ]]></link>
<g:price><![CDATA[ 815.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Fenouil (Foeniculum vulgare) Bio 10 ml chémotypée (H.E.C.T) est botaniquement certifiée, 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</p>
<p>L'huile essentielle de fenouil est reconnue pour ses multiples propriétés car elle est :</p>
<p>- anti-spasmodique puissante,</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008535611</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e5c66d5ee0f390602f7c6681fbc7624742ea02b195c2652092e313ae6f3ab412 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Huile Essentielle Genevrier  5 ml ]]></title>
<g:id>9d008a03-9f0b-4f35-9b51-cb370e878267</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle genevrier  5 ml?9d008a03-9f0b-4f35-9b51-cb370e878267 ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Cet arbuste touffu répandu dans les régions montagneuses, les landes et les clairières de tout l’hémisphère nord possède des feuilles très étroites se terminant en pointe acérée. Les baies sont globuleuses, d’abord vertes puis noires bleuâtres et recouvertes de cire à maturité.<br /><br />Trucs &amp; Astuces:<br /><br />2 gouttes HECT Genévrier commun dans du miel 3 fois par jour, viendra à bout de toutes gènes musculaires ou articulaires. 1 goutte HECT Genévrier commun dans vos marinades ou  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008534553</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/daa84988a0e164da61d527ce43014c8423a23ae703ff3592302bd7cf3582eb09 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Giroflier 10ml ]]></title>
<g:id>708de686-38b9-4e82-85b8-a12153a179fa</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle giroflier 10ml?708de686-38b9-4e82-85b8-a12153a179fa ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p> Originaire des îles Moluques, cet arbre de 20 mètres de haut apprécie les sols tropicaux maritimes drainés. Ses feuilles sont opposées, coriaces et persistantes. Ses fleurs blanc rosé sont groupées en petites cymes compactes et ramifiées.<br /><br />Trucs &amp; Astuces:<br /><br />Dent qui pousse et qui fait mal? Plus aucun souci en mélangeant 2 gouttes HECT Giroflier + 2 gouttes HECT Camomille noble dans 10 ml HV de Noisette. Appliquer 2 gouttes de ce mélange sur le bout du petit doigt et m ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008502620</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/0df8217a3584bdd4801f4a8beda8d63c20f25a37175261716f75bdf5d58ffec8 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Géranium Rosat cv bourbon  Bio 10 ml ]]></title>
<g:id>81d6310c-52f9-42c0-ad62-ca33e95f24cf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle géranium rosat cv bourbon  bio 10 ml?81d6310c-52f9-42c0-ad62-ca33e95f24cf ]]></link>
<g:price><![CDATA[ 1595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Géranium Rosat cv bourbon (Pelargonium x graveolens bourbon) Bio 10 ml est une huile essentielle 100% pure et naturelle qui s'utilise comme complément alimentaire.</p>
<p>Originaire d'Afrique du Sud, le géranium a été hybridé pour donner des cultivars en Égypte, en Chine, à la Réunion. Le terme Bourbon signifie des îles : le cultivar Bourbon vient notamment de l'océan Indien (la Réunion) mais aussi de Madagascar dont les terroirs sont favorables à sa croissance. La  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008512612</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c0a0fb850ded41bf719fcff1205eb2bb9f57eaf8d194d629fa0b08e4807b7b2e ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Immortelle Bio 5 ml ]]></title>
<g:id>ef1dec07-799e-4738-b559-4454a926e542</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle immortelle bio 5 ml?ef1dec07-799e-4738-b559-4454a926e542 ]]></link>
<g:price><![CDATA[ 1815.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Immortelle - Hélichryse Italienne (Helichrysum italicum) Bio 5 ml chémotypée (H.E.C.T) est botaniquement certifiée, 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</p>
<p>L'huile essentielle d'Immortelle est reconnue pour ses multiples propriétés car elle est :</p>
<ul><li ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529801</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c691aa3e455856c260547cecbaf0ae3f3ce075764cc8420954a0ad306e60b3e0 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Jasmin  5 ml ]]></title>
<g:id>77870805-4527-4422-aca6-c8c3a5f1f8e7</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle jasmin  5 ml?77870805-4527-4422-aca6-c8c3a5f1f8e7 ]]></link>
<g:price><![CDATA[ 3190.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Jasmin (Jasminum officinalis) 5 ml est une huile essentielle 100% pure et 100% naturelle.</p>
<p>Partie distillée : fleur</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008512193</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/e322c04d3ad8329d7ccc0205beef3b083bc9df2128b16fe9454fdc564ef8f269 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Lavande Fine  AOP 5 ml ]]></title>
<g:id>56eae1b9-101d-42c3-9c22-43f257d492d1</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle lavande fine  aop 5 ml?56eae1b9-101d-42c3-9c22-43f257d492d1 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’huile essentielle de Lavande fine AOP est obtenue par la distillation à la vapeur d’eau des sommités fleuries de la Lavandula AngustifoliaP. Miller. Cette espèce est issue de population de plants d’origine locale reproduits exclusivement par semis des graines pour garantir l’authenticité de chaque lavande et garantir la richesse variétale de ces populations de lavande. <br /><br /><br />Cultivée sur des terrains plus montagneux, à une altitude minimale de 800 mètres, la lavande AOP bénéfici ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008521836</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/175f08ca57b2c40fa8ce940f596b250940228ae46faa284b6941da1f33424a5b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Lemongrass 10 ml ]]></title>
<g:id>8ef99c12-d146-4ad8-8182-686086f2c6d0</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle lemongrass 10 ml?8ef99c12-d146-4ad8-8182-686086f2c6d0 ]]></link>
<g:price><![CDATA[ 360.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Lemongrass (Cymbopogon citratus) 10 ml est une Huile Essentielle Chémotypée 100% pure et naturelle.</p>
<p>Partie distillée : partie aérienne.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008502170</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/38e4d8d51d10bf3f6112ea6d9cf9338c95beec01a07bcff4a75197697e8095c7 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Litsée Citronnée Bio 10 ml ]]></title>
<g:id>37b639cb-fa81-4bcf-92b6-5dce879769f6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle litsée citronnée bio 10 ml?37b639cb-fa81-4bcf-92b6-5dce879769f6 ]]></link>
<g:price><![CDATA[ 395.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Litsée Citronnée (Litsea citrata) Bio 10 ml est une huile essentielle chémotypée (H.E.C.T) et botaniquement certifiée. Elle est 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</p>
<p>Originaire des régions tropicales d'Asie, cet arbre toujours vert, présente des feuilles s ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507670</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74bd54eff2bf9f33ad078137550df203d8c04e7b8bc25e2c0245c5b522edf713 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Menthe Champs 10ml ]]></title>
<g:id>75fa0315-88c2-4056-a880-d24cae399826</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle menthe champs 10ml?75fa0315-88c2-4056-a880-d24cae399826 ]]></link>
<g:price><![CDATA[ 414.99 EUR ]]></g:price>
<description><![CDATA[ <p>Hybride issue de Mentha aquatica et de Mentha spicata, cette plante de 80 cm est vivace. Ses tiges sont quadrangulaires; les feuilles sont opposées, ovales, aiguës et dentées. Elle aime les terrains frais, argileux et calcaires. La distillation a lieu en juin juste avant la floraison.<br /><br />Trucs &amp; Astuces:<br /><br />Au quotidien, 1 goutte HECT Menthe poivrée sur 1/4 de morceau de sucre de canne à sucer avant un rendez-vous donnera à votre haleine toute la fraîcheur de la menthe. El ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507779</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f704fb3524d3edef6ddabc4b4f9480a81aa0cf2ec647beceaace9f7190540ec2 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Menthe Poivrée Bio 5 ml ]]></title>
<g:id>3ed26cf8-78a8-437c-aeb2-0c5c3261482c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle menthe poivrée bio 5 ml?3ed26cf8-78a8-437c-aeb2-0c5c3261482c ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Menthe Poivrée (Mentha x piperita) Bio 5 ml chémotypée (H.E.C.T) est botaniquement certifiée, 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</p>
<p>La Menthe poivrée est reconnue pour agir contre les douleurs, les céphalées, le zona, les vertiges, mais aussi la sciatique, ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524349</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/74d61d9446a792e0d33aefd7c18170f87e57ca4d91c76d20f7e8e4476497aef1 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Néroli 2 ml  ]]></title>
<g:id>840feffe-08a7-496a-8eca-e33c779bfd42</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle néroli 2 ml ?840feffe-08a7-496a-8eca-e33c779bfd42 ]]></link>
<g:price><![CDATA[ 1715.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le bigardier (oranger amer) est un arbre de 5 à 10 m. Originaire d’Inde, il est introduit en Europe par les croisades. Les Maures le cultivèrent intensivement près de Séville en Espagne. Il porte un fruit plus petit que l’orange douce et possède une peau plus rugueuse teinte de vert ou de jaune.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008508905</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1089c7eb81ee6881a91bb626a96a8b6da19093b1eb03e1f4f03e1083748aa56e ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Origan à inflorescences compactes 10ml ]]></title>
<g:id>b650b565-7f89-4ac1-a58c-53b2218147cd</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle origan à inflorescences compactes 10ml?b650b565-7f89-4ac1-a58c-53b2218147cd ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p><span>L'</span><span>Origan</span><span> est une plante aromatique qui possède une </span><span>huile essentielle</span><span> remarquable en tant qu'</span><span>antibactérienne majeure</span><span> et pour stimuler les </span><span>défenses immunitaires</span><span>.<span>Originaire d’Afrique du Nord, elle est obtenue par</span><span> distillation</span><span> de la </span><span>sommité fleurie</span><span>.</span></span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008507977</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bfc9a9ad989a5821d6678d0a34c451f11fd0d971a3dcafa32dcb7bf53f4beb5c ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Palmarosa  Bio 10 ml ]]></title>
<g:id>84999e09-d5cf-4534-986d-2e553d74c922</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle palmarosa  bio 10 ml?84999e09-d5cf-4534-986d-2e553d74c922 ]]></link>
<g:price><![CDATA[ 399.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Palmarosa (Cymbopogon martinii var. motia) Bio 10 ml 100% pure et naturelle, certifiée biologique, s'utilise comme complément alimentaire.</p>
<p>Cette herbe d'origine indienne présente des feuilles longues et étroites et des inflorescences linéaires. De fragrance très agréable, cette huile essentielle est à utiliser pour toutes les affections cutanées mycosiques, cicatricielles et eczémateuses.</p>
<p>Partie distillée : partie aérienne.</p>
<p>Bio signifie : issu d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008508707</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cc3b28fde5cd1b8fe96225f759ad52e90d93aba75e5cb2a1af9983d8c864edcf ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Patchouli  5 ml ]]></title>
<g:id>90ced954-c152-47ca-8b48-2d7eaf386b7c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle patchouli  5 ml?90ced954-c152-47ca-8b48-2d7eaf386b7c ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Patchouli (Pogostemon cablin) 5 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>Largement plus connu et utilisé par la parfumerie qu'en thérapie aromatique, le patchouli, originaire d'Indonésie, ne manque pourtant pas d'attrait pour ses propriétés thérapeutiques pour la circulation lymphatique et veineuse.</p>
<p>Partie distillée : fleur.</p>
<p>Origine : Indonésie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008526572</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/b5265a230cc5b12903d54b589761cd347b39f6237d8cc2e0aae3e8d1bacf5750 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Petit Grain Bigarade  Bio 10 ml ]]></title>
<g:id>88116a58-a41a-48e6-85c8-d8fa2bb90c7c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle petit grain bigarade  bio 10 ml?88116a58-a41a-48e6-85c8-d8fa2bb90c7c ]]></link>
<g:price><![CDATA[ 530.00 EUR ]]></g:price>
<description><![CDATA[ <p>Originaire de Chine, l’oranger amer s’est répandu sous le climat méditerranéen. L’oranger amer ou bigarade fournit une huile essentielle d’odeur très agréable dont la simple inhalation apporte calme, détente et harmonie, d’où son intérêt manifeste pour sa diffusion atmosphérique dans les lieux où la gestion de stress n’est pas un vain mot.<br /><br />Trucs &amp; Astuces:<br /><br />1 goutte HECT Petit grain + 1 goutte HECT Romarin à verbénone dans une noix de crème de jour aident merveilleuse ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008506949</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/42270a5084569b553156cc178a9f356e07de70b5bc54d1f3a37d4878bccd777b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Pin Sylvestre  Bio 10 ml ]]></title>
<g:id>5bfe2e62-5b94-455d-92d8-d04813846004</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle pin sylvestre  bio 10 ml?5bfe2e62-5b94-455d-92d8-d04813846004 ]]></link>
<g:price><![CDATA[ 675.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Pin Sylvestre (Pinus sylvestris) Bio 10 ml chémotypée (H.E.C.T) est botaniquement certifiée, 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales, 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</p>
<p>L'huile essentielle de pin sylvestre est reconnue pour ses multiples propriétés car elle est :</p>
<p>- antibactérienne moyen ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524516</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c171eacc434e43669c61e40b52bf5ee14c1ce048da337932411c91edeec579b6 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Poivre Noir 5 ml ]]></title>
<g:id>003610cd-1c4c-458d-9eeb-6a644bd4c9de</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle poivre noir 5 ml?003610cd-1c4c-458d-9eeb-6a644bd4c9de ]]></link>
<g:price><![CDATA[ 720.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Poivre Noir (Piper nigrum) 5 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>Partie distillée : fruit.</p>
<p>Origine : Inde/Madagascar.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008505331</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d6007a0f43b9bec3e731a4052943c1f3f84309cf9162ca236f0e2709bef1ee6d ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Prédiluée Estragon  5 ml ]]></title>
<g:id>54a6ec20-13d8-45da-a246-1bd5b8605a19</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle prédiluée estragon  5 ml?54a6ec20-13d8-45da-a246-1bd5b8605a19 ]]></link>
<g:price><![CDATA[ 595.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Esssentielle Prédiluée Estragon (Artemisia dracunculus) 5 ml est une Huile Essentielle Chémotypée 100% pure et naturelle.</p>
<p>Partie distillée : sommité fleurie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529764</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4c905e069311758f66249510d49445c521f9a212f2378c7c597667fa9ceeaccc ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Rose de Damas 2 ml ]]></title>
<g:id>e8e007a5-f79c-4c6b-be2f-7743d0f104ff</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle rose de damas 2 ml?e8e007a5-f79c-4c6b-be2f-7743d0f104ff ]]></link>
<g:price><![CDATA[ 4390.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Parmi les nombreuses variétés de roses pâles cultivées, la rose de Damas résulte très vraisemblablement d’une hybridation entre la Rose de Provins (Rosa gallica) et des églantiers orientaux ou de Rosa centifolia. Elle a été introduite en Europe par les croisés et son essence a la réputation de remède universel.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008526398</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1c12761bdca4d03c18f8e4b9404711355431adb9f4143892ddc3ea6a56c32661 ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Huile Essentielle Thym Lianol 5 ml  ]]></title>
<g:id>a4ee29cd-edb8-4219-ae43-4a3da927957d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle thym lianol 5 ml ?a4ee29cd-edb8-4219-ae43-4a3da927957d ]]></link>
<g:price><![CDATA[ 995.00 EUR ]]></g:price>
<description><![CDATA[ <p>Sous arbrisseau vivace, pouvant atteindre 30 cm de hauteur. Il possède des petites feuilles lancéolées enroulées sur les bords. La tige est ligneuse et les rameaux sont ascendants. Les fleurs sont roses blanchâtres groupées en inflorescence dense. Le thymus vulgaris ct thymol est l’un des six chémotypes de thym identifiés par Passet, Granger et Vernet et al. Il est présent dans le sud de la France (essentiellement en Provence) sur un sol calcaire. <br /><br /></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008506208</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c48189d37d0334fbde86cbbe0232f5f3f978bc16b04adff8288e893c46bee0e7 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Thym Vulgaire À Thujanol 5 ml ]]></title>
<g:id>9d3adb2e-a295-412e-bdf4-13a7a2542538</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle thym vulgaire À thujanol 5 ml?9d3adb2e-a295-412e-bdf4-13a7a2542538 ]]></link>
<g:price><![CDATA[ 1499.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Thym Vulgaire À Thujanol (Thymus vulgaris CT thujanol) 5 ml est une huile essentielle aux multiples vertus.</p>
<p>L'huile essentielle de thym vulgaire à thujanol est traditionnellement réputée pour ses propriétés stimulante et régénératrice hépatocytaire, réchauffante circulatoire, neurotonique, et équilibrante.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008506284</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c271e5c9000878a2627eeab9a64f772c3f76b4f9e408642c44c8bfe1420adaaa ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Thym à Feuilles de Sarriette 10 ml ]]></title>
<g:id>2a49bc29-dc3b-4380-a23a-dffa7498e9ce</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle thym à feuilles de sarriette 10 ml?2a49bc29-dc3b-4380-a23a-dffa7498e9ce ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Thym à Feuilles de Sarriette (Thymus satureioides) 10 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>Molécules aromatiques : bornéol, carvacrol, thymol, terpinéol.</p>
<p>Partie distillée : sommité fleurie.</p>
<p>Origine : Maroc</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008526732</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/02a068bde668ad1d4ff4602fba5e6351c3e0f5a2742963c473bd34a96e06ea8a ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Verveine Citronnée 5ml ]]></title>
<g:id>938fa3ba-8d3e-4ae4-868c-691097c6df73</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle verveine citronnée 5ml?938fa3ba-8d3e-4ae4-868c-691097c6df73 ]]></link>
<g:price><![CDATA[ 1999.00 EUR ]]></g:price>
<description><![CDATA[ <p>Originaire d’Amérique du Sud, son odeur et sa saveur très plaisantes ont très tôt conquis tous ceux qui l’employèrent en tisane pour ses vertus relaxantes. Voulant prolonger le plus longtemps possible un moment agréable, ne finit-on pas par proposer une petite verveine ! Rien de tel pour favoriser l’ouverture et le partage de moments de bien-être. Aujourd’hui, elle a séduit le monde entier ( à juste titre) car la verveine est bien sympathique.<br /><br />Trucs &amp; Astuces:<br /><br />Rien d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008503832</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/06874b91721e45442bfc207f4af1ee2e779ec3caf3c96a61ea0d30ce6278794e ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Vétiver 5 ml ]]></title>
<g:id>b39982fb-f08b-4f94-8193-07ea4f6db715</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle vétiver 5 ml?b39982fb-f08b-4f94-8193-07ea4f6db715 ]]></link>
<g:price><![CDATA[ 790.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Vétiver (Vetiveria zizanoides) 5 ml est une huile essentielle chémotypée 100% pure et naturelle.</p>
<p>Partie distillée : racine.</p>
<p>Origine : Inde.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008506529</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c76afd45077f8fdb563fd092c871241f065cc45d54b21181c3062223d9bd4426 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Essentielle Ylang-Ylang Extra 5 ml ]]></title>
<g:id>9c7d4899-1c1f-4434-a770-a8b2abd6a7e2</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle ylang-ylang extra 5 ml?9c7d4899-1c1f-4434-a770-a8b2abd6a7e2 ]]></link>
<g:price><![CDATA[ 799.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Ylang-Ylang Extra (Cananga odorata) 5 ml est une huile essentielle 100% pure et naturelle.</p>
<p>L'ylang-ylang fournit une huile essentielle dont la fragrance est appréciée pour ses notes chaudes, florales, exotiques, rondes et féminines. Il n'est pas étonnant qu'elle fasse partie des huiles essentielles qui, par l'olfaction, peuvent modifier un comportement humain.</p>
<p>Partie distillée : Fleur.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529832</g:gtin>
<g:brand><![CDATA[  ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/724bbf55d425d5fdd3ce0370aa7a591f242a0c617d1af6f6269a92b34ef2827c ]]></g:image_link>
<g:product_type><![CDATA[ Passerelle ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm Huile Essentielle Ylang-Ylang Totum  Bio 5 ml ]]></title>
<g:id>c5dba392-178d-4360-b326-e99d6b1e3179</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle ylang-ylang totum  bio 5 ml?c5dba392-178d-4360-b326-e99d6b1e3179 ]]></link>
<g:price><![CDATA[ 798.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Essentielle Ylang-Ylang Totum (Cananga odorata) Bio 5 ml est une huile chémotypée (H.E.C.T) et botaniquement certifiée. Elle est 100% naturelle car non dénaturée par des composants synthétiques, par des huiles ou essences minérales; 100% pure car non coupée avec d'autres huiles essentielles et 100% totale car non décolorée, non peroxydée, non déterpénée et non rectifiée.</p>
<p>Partie distillée : fleur.</p>
<p>Molécules aromatiques : Germacrène D, benzoate de benzyle.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529795</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/4ec6d09af605a070d23e8cabf75da01fa6c5e5f70e25734964d19cfd07254d31 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végetale Noyau Abricot 50 ml  ]]></title>
<g:id>e67a4783-5fde-42fa-9d48-5ad7932f0aea</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végetale noyau abricot 50 ml ?e67a4783-5fde-42fa-9d48-5ad7932f0aea ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p> Une des huiles les plus douces et les plus polyvalentes ! Elle sert en bien des usages cosmétiques et nous garantit une peau adoucie et un teint éclatant. Elle est bien tolérée par tous, même les bébés ou les personnes réactives. Son odeur neutre, sa facilité d’emploi, son rapport qualité-prix et ses propriétés génériques en font un très bon support pour les préparations aux huiles essentielles. Les familles l’emmènent en vacances pour préparer la peau au soleil autant que pour les soins quo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008518355</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/bafe5fcc15ee73cf108d61dc66dfb0c0f3f78b59c9f1db6938d9be14b7abb1ab ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale  Amande  Douce  Vierge 50 ml ]]></title>
<g:id>f2aad05e-4617-4397-95bf-b893fdd49929</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale  amande  douce  vierge 50 ml?f2aad05e-4617-4397-95bf-b893fdd49929 ]]></link>
<g:price><![CDATA[ 575.00 EUR ]]></g:price>
<description><![CDATA[ <p>Huile adoucissante et protectrice par excellence, l’amande douce convient parfaitement pour les soins du corps et la peau sèche. Elle est appréciée des mamans autant que des bébés en cosmétique et lors de la toilette ou du démaquillage. C’est une base parfaite pour les mélanges d’aromathérapie destinés aux soins du corps car son rapport qualité prix est très avantageux et son confort d’application est optimal. Massages, frictions aromatiques, soins de beauté… tout est possible avec l’amande d ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008518317</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/338c67b7873112fee17dde479ef33363eb23d1716661189a10a7110d09f007bc ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale  Onagre Bio 50ml ]]></title>
<g:id>6668ec30-a4ee-45e6-a356-833b8d4dcae8</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale  onagre bio 50ml?6668ec30-a4ee-45e6-a356-833b8d4dcae8 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Idéale pour les femmes dès 40 ans, ou pour toutes les peaux en souffrance. Une huile précieuse et réellement anti-âge, à incorporer à ses soins ou à consommer en guise de complément dans le cadre d’une alimentation santé. <br /><br />Les graines d’onagre donnent une huile riche en acide gras gamma-linolénique (un bon omega 6) utilisée depuis des siècles en massage ou dans les remèdes. L’huile est réputée selon certains lutter contre l’inflammation chronique, mais aussi les déséquilibres hormo ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008596360</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/36f49b904b632bdc64ad2052d81b0ee1826141d2e5f08c5e13ddff7d0036f6cb ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Arnica Bio 50 ml ]]></title>
<g:id>6bf641c0-d25c-4116-b0ae-0cb34d26de83</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale arnica bio 50 ml?6bf641c0-d25c-4116-b0ae-0cb34d26de83 ]]></link>
<g:price><![CDATA[ 1295.00 EUR ]]></g:price>
<description><![CDATA[  ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008542695</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/296744645c39f8cd9f5f11b57798a19eaa6802cdb33c32e98885e0d7d87da81c ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Avocat Bio 50 ml  ]]></title>
<g:id>b49b374f-4189-44e0-9890-ca1659b952bf</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale avocat bio 50 ml ?b49b374f-4189-44e0-9890-ca1659b952bf ]]></link>
<g:price><![CDATA[ 650.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une huile très hydratante pour le corps, les cheveux et le visage. Sa jolie couleur verte, son odeur neutre et sa pénétration rapide dans la peau en fait une alliée cosmétique très pratique pour la beauté à la salle de bain. <br /><br />C’est une des rares huiles contenant l’acide palmitoléique, si précieux pour la protection des membranes cellulaires. Cette huile adoucit et assouplit comme aucune autre la peau fine ou les cheveux secs et cassants. Le petit plus : elle est appréciée en gastro ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008509056</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/c2fcf35893125ee3d5e3bb5315e355196c2458cfc6da356d653783af2436d9c6 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Bourrache Vierge ]]></title>
<g:id>8bfa4ba2-3d3a-4ed8-bfdb-03d86f98c03f</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale bourrache vierge?8bfa4ba2-3d3a-4ed8-bfdb-03d86f98c03f ]]></link>
<g:price><![CDATA[ 895.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une huile idéale pour les femmes matures et les peaux en souffrance. Son prix un peu plus élevé que la moyenne est dû au faible rendement de la plante, mais il est à la hauteur de ses effets dermo-cosmétiques hors pairs. Également utilisée en tant que complément alimentaire (ménopause, règles, arthrite…), elle ravira les plus exigeants. La bourrache est une oubliée de nos jardins, et pourtant ses graines précieuses renferment un trésor pour la santé et la beauté. Non grasse, elle est idéale p ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008518324</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/834adf7a215373dcf76b61af7a71d1fd9cb6d509f2c0f554f2c00308be177d0f ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Grenade Bio 30 ml ]]></title>
<g:id>3fdb5bdc-69f0-43b6-95b6-a2679f05e4c6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale grenade bio 30 ml?3fdb5bdc-69f0-43b6-95b6-a2679f05e4c6 ]]></link>
<g:price><![CDATA[ 1075.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Huile Végétale Grenade Bio 30 ml est une huile végétale 100% pure et naturelle à base de grenade (Punica granatum). La composition unique de l'huile végétale de pépins de grenade en fait une huile revitalisante, régénérante et apaisante. Elle protège la peau des radicaux libres et calme les peaux sujettes aux rougeurs. Adaptée aux peaux matures et sensibles.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008532696</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/a9b4d3f2d23493292809710c2b6929550e2f584d53f57e7ca7584a47d12a600b ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Jojoba Bio ]]></title>
<g:id>56fc5a82-d247-43e0-8d60-8a2d8c8fd073</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale jojoba bio?56fc5a82-d247-43e0-8d60-8a2d8c8fd073 ]]></link>
<g:price><![CDATA[ 925.00 EUR ]]></g:price>
<description><![CDATA[ <p>Une cire végétale liquide en bonne affinité avec la peau, qui permet toutes les applications cosmétiques et anti-âge, même sur les peaux grasses. Pénètre à merveille et laisse la peau satinée. Le jojoba a été l’allié de la tradition Inca. Les peuples d’Amérique centrale et du sud l’utilisaient pour se protéger des rayons du soleil ou pour s’y préparer. Aujourd’hui, on retrouve le jojoba dans beaucoup de préparations cosmétiques qui régulent les sécrétions sébacées, ou qui embellissent les che ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008518331</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7b84c67487e7bf89e0b8a8f18797437400c57fa67f83127de17fa59e104c32e0 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Millepertuis Bio 50 ml ]]></title>
<g:id>571061f2-62ed-401c-a261-7e728fea4683</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale millepertuis bio 50 ml?571061f2-62ed-401c-a261-7e728fea4683 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Convient pour le soin des peaux fragiles, rougies et irritées.</p>
<p>Rend la peau douce et souple.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008508691</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1e8e3cadee27b2c6138ff5340fcd2d22f99109392ed81b6d9b9ee031f6ddf9b1 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Nigelle Bio 50 ml ]]></title>
<g:id>1b0e2eca-64c9-49f4-8750-121006c9d7b6</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale nigelle bio 50 ml?1b0e2eca-64c9-49f4-8750-121006c9d7b6 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Huile Végétale Nigelle Bio 50 ml est une huile végétale de première pression à froid 100% naturelle à base de nigelle (Nigella sativa) bio.</p>
<p></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008509162</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/fe062164a32f2e7fb7f0a24d967eef31f7ce5f2f78ed8dfdd8312ec3d9704443 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile Végétale Noisette Bio ]]></title>
<g:id>9b8c9685-2620-4af9-b1f9-c087e3a39a7c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile végétale noisette bio?9b8c9685-2620-4af9-b1f9-c087e3a39a7c ]]></link>
<g:price><![CDATA[ 599.00 EUR ]]></g:price>
<description><![CDATA[ <p>L’huile neutre facile d’emploi par excellence. Sa douceur s’allie à sa simplicité pour ravir toute la famille. Pénétrante et satinée pour la peau, elle fleure bon les fruits de l’automne. Elle sert de base aux préparations d’aromathérapie ou de soin tonifiant pour les peaux ternes ou à problèmes. En massage, elle réchauffe le corps et véhicule vite et bien les éventuelles huiles essentielles d’une composition. En gastronomie, son goût de noisette exquis s’apprécie sur certains desserts ou pla ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008518348</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7f7cb8ae71e75040a2abba3655132fcdb4471407960e6005d9313b898da159f2 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile de Macération Carotte Bio  ]]></title>
<g:id>0eab1fe0-0140-47a1-bd14-7f3efa0d696d</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile de macération carotte bio ?0eab1fe0-0140-47a1-bd14-7f3efa0d696d ]]></link>
<g:price><![CDATA[ 495.00 EUR ]]></g:price>
<description><![CDATA[ <p>Un macérat vitaminé pour dorer la peau ! Cette huile très pénétrante et joliment orange est idéale en cosmétique pour préparer la peau au bronzage ou pour illuminer le teint.<br /><br />C’est le fameux beta-carotène qui donne à ce macérat huileux sa belle couleur. Active, elle est pourtant bien tolérée par tous et même par les peaux grasses qui l’apprécient beaucoup. On l’utilise en préparation d’une exposition au soleil, ou tout au long de l’année pour un soin éclat hors pair.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008509155</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/8d7dcf97a96fc81ebec117f75db0cce57c8e05ddc6a29fce37d4cfe198722613 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Huile essentielle Mandravasarotra 10ml ]]></title>
<g:id>2c789375-c380-4e88-b01a-5a9a96a88d6c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m huile essentielle mandravasarotra 10ml?2c789375-c380-4e88-b01a-5a9a96a88d6c ]]></link>
<g:price><![CDATA[ 795.00 EUR ]]></g:price>
<description><![CDATA[ <p><span>riginaire de Madagascar, cet arbre toujours vert et très aromatique peut atteindre 5 m de haut. En malgache, Mandravasarotra veut dire “qui tient le mal éloigné“. C’est la plante la plus utilisée par les populations de l’ouest de l’île. Dans cette région de Sakalava, on l’appelle soit Motrobeatiagnana soit Motrobeatianina, c’est-à-dire “grand feu dans les entrailles“ car toute sa partie aérienne a une saveur piquante et brûlante. Mais elle s’appelle également, en fonction des différents ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008596957</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1a39668efb70be3d7e6622b3e4b953017d8645f8353b39332e00d070a0357bae ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Les Diffusables Sommeil 30ml ]]></title>
<g:id>132ad9c3-e31b-43a8-96d1-b74403ae24e3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m les diffusables sommeil 30ml?132ad9c3-e31b-43a8-96d1-b74403ae24e3 ]]></link>
<g:price><![CDATA[ 990.00 EUR ]]></g:price>
<description><![CDATA[ <div id="i4c-draggable-container" style="width:0px;height:0px;">
<div class="resolved"></div>
</div>
<div class="product-description-small h5" id="product-description-short-32617"></div>
<div class="product-description" id="product-description-32617">
<div>Subtils effluves apaisants de Camomille et de Mandarine pour s’endormir en toute sérénité et profiter des bienfaits d’un sommeil paisible.</div>
</div>
<div id="i4c-dialogs-container"></div> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008537400</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/6bd23ca4ad7549ba24876157e8ad8b6b7f8188b548b2173a1608b586d35b034a ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Lotion Pieds Et Mains Verrues Aromaderm 10 ml ]]></title>
<g:id>8bb5b6da-9af2-4bd5-abe6-6fa37ae05f99</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m lotion pieds et mains verrues aromaderm 10 ml?8bb5b6da-9af2-4bd5-abe6-6fa37ae05f99 ]]></link>
<g:price><![CDATA[ 695.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Lotion Pieds Et Mains Verrues Aromaderm 10 ml est une lotion qui permet de traiter les excroissances cutanées après la piscine.</p>
<p>Cette lotion est composée d'huiles essentielles 100% biologiques de Cannelier de Chine, Litsée citronnée, Tea-tree, Niaouli, Eucalyptus mentholé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008514449</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7bfcb122f10c02b818200dd173072fa14fdcfafe79ca827267150fa65520057f ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Perles d'Huile Essentielle Lavande Vraie Bio 60 Perles ]]></title>
<g:id>cb90bfbf-3503-46f8-8934-38887f05ec8c</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m perles d'huile essentielle lavande vraie bio 60 perles?cb90bfbf-3503-46f8-8934-38887f05ec8c ]]></link>
<g:price><![CDATA[ 890.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Perles d'Huile Essentielle Lavande Vraie (Lavandula angustifolia) Bio 60 Perles sont des mini-capsules prédosées à base d'huile essentielle 100% pure et naturelle. Leur forme permet un dosage précis, une facilité à les avaler et offre un goût neutre.</p>
<p>Molécules aromatiques : linalol, acétate de linayle.</p>
<p>Partie distillée : sommité fleurie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529214</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/5ee05ae02545faa9dd30fa034ee269aa996922b956be1af42b5e1dad8905db4c ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Perles d'Huile Essentielle Origan Vulgaire Bio 60 Perles ]]></title>
<g:id>028fd9dd-80ea-4d6e-96db-f2a785159eee</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m perles d'huile essentielle origan vulgaire bio 60 perles?028fd9dd-80ea-4d6e-96db-f2a785159eee ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Perles d'Huile Essentielle Origan Vulgaire (Origanum vulgare L.) Bio 60 Perles sont des mini-capsules prédosées à l'huile essentielle 100% pure et naturelle d'Origan vulgaire. En format pratique, elles sont faciles à avaler grâce à leur goût neutre.</p>
<p>Molécules aromatiques : carvacrol.</p>
<p>Parties distillées : sommité fleurie.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008529191</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/1ea1213906e2d289d6c3b3ed145575edfe8fa987cb25fe553a9a41c7b9a13b42 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Prana BB Baume Pectoral Bio 40 ml ]]></title>
<g:id>92ce9aed-b303-4c74-8bc5-300634862d8a</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m prana bb baume pectoral bio 40 ml?92ce9aed-b303-4c74-8bc5-300634862d8a ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Le baume respiratoire Respiration aisée est un gel très doux et certifié bio* aux huiles essentielles de sapin baumier, d’épinette noire, de marjolaine à coquilles et d’inule odorante.</p>
<p>Une synergie aromatique idéale pour faciliter et dégager la respiration. Petit plus, la formule testée dermatologiquement diffuse l’arôme rassurant de la Vanille de Madagascar.</p>
<p>Un massage câlin et bienfaisant en perspective !</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008525155</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/d31fb11c7ccc60e2ee5b1c00f5e05d352d165ac55c2933f15111bc939cb8b1f5 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm PranaBB Gel Gingival Poussées Dentaires Bio 15 g ]]></title>
<g:id>c694bea6-02b3-48ed-84d6-684f7a7c5d79</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m pranabb gel gingival poussées dentaires bio 15 g?c694bea6-02b3-48ed-84d6-684f7a7c5d79 ]]></link>
<g:price><![CDATA[ 590.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm Science Prana BB Gel Gingival Poussées Dentaires 15 g aux huiles essentielles de camomille noble, katrafay, et giroflier soulage les gencives sensibles de bébé et apaise en cas d'inconfort. Ce gel est le parfait allié des mamans qui désirent soulager les douleurs dues aux poussées dentaires de bébé.</p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008510397</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/147ff81f840a05ccc0adb6bba3779a1e309bacb74d4ed633da1610d25d3920d9 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm PranaBB Roller Après-Piqûres Gel Apaisant Bio 15ml ]]></title>
<g:id>44f6b193-0e25-4368-a450-0fc2c1457e24</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m pranabb roller après-piqûres gel apaisant bio 15ml?44f6b193-0e25-4368-a450-0fc2c1457e24 ]]></link>
<g:price><![CDATA[ 690.00 EUR ]]></g:price>
<description><![CDATA[ <p>Pranarôm PranaBB Roller Après-Piqûres Bio 15 ml est un gel apaisant en cas de piqûres.</p>
<p>Il a été spécialement formulé pour bébé, il calme immédiatement le gonflement et les démangeaisons.</p>
<p>Les huiles essentielles de lavandin, menthe des champs et curcuma associée à l'huile végétale de calendula allient leurs vertus apaisantes et calmantes;</p>
<p>sous forme de roller, ce gel est pratique d'utilisation et facile à emporter partout.</p>
<p>Vegan.</p>
<p>Certifié Agriculture Biologiq ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008531217</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/7f74eef2225ec5112a9e81c8bb30298ebcf534f727bba941a39a63b50ed980c6 ]]></g:image_link>
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
<title><![CDATA[ Pranarôm Pranacaps Origan+ Bio 30 Capsules ]]></title>
<g:id>4a9eae9b-680b-4a3f-974b-dcabd4fd14a3</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m pranacaps origan+ bio 30 capsules?4a9eae9b-680b-4a3f-974b-dcabd4fd14a3 ]]></link>
<g:price><![CDATA[ 790.01 EUR ]]></g:price>
<description><![CDATA[ <p><span>Pranarôm Pranacaps Origan+ Bio 30 Capsules est un complément alimentaire qui contient de l'essence de Citron, de l'huile essentielle d'origan pour maintenir la santé des voies respiratoires, le confort digestif et la santé du foie et des intestins.</span></p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008524257</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/f246aef3ac7f0202b850b2a3f36eba51dd2a0cc3696510a427f3d3cf410ee9d3 ]]></g:image_link>
<g:product_type><![CDATA[ Médicament > COMPLEMENTS ALIMENTAIRES > SANTE > Appareil digestif ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>TRUE</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
<item>
<title><![CDATA[ Pranarôm aromaderm lotion ongles jaunis 10ml ]]></title>
<g:id>50175bf5-2daa-4beb-a706-9d3797009604</g:id>
<link><![CDATA[ https://pharmacieagnespraden.com/products/pranar-m aromaderm lotion ongles jaunis 10ml?50175bf5-2daa-4beb-a706-9d3797009604 ]]></link>
<g:price><![CDATA[ 699.00 EUR ]]></g:price>
<description><![CDATA[ <p>Aromaderm lotion ongles jaunis est une lotion certifiée bio qui assainit les ongles et les maintient en bonne santé grâce aux huiles essentielles rigoureusement sélectionnées de palmarosa, lemongrass, niaouli, lavandin super, ahibero, clou de girofle et katrafay; cette formule ciblée est également enrichie en huiles végétales de noyau d’abricot et de millepertuis qui nourrissent l’ongle et les rendent plus forts, plus beaux et moins cassants. </p> ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>5420008519031</g:gtin>
<g:brand><![CDATA[ PRANAROM ]]></g:brand>
<g:image_link><![CDATA[ https://praden.s3.eu-west-3.amazonaws.com/public/products/cee89b7ba5aa137bec6527eea1a48385e139b83f446e891f8cf250a5d0f127d1 ]]></g:image_link>
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
</channel>
</rss>`;
});
