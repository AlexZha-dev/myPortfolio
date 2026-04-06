---
title: "MyPortfolio"
projectId: "portfolio-site"
locale: "fi"
summary: "Henkilokohtainen portfoliosivusto Reactilla ja TypeScriptilla, jossa on markdown-pohjainen sisalto, monikielinen arkkitehtuuri, hash-pohjaiset project-modalit ja oma Vite-loader osioille ja caseille."
stack:
  - React
  - TypeScript
  - Vite
  - Markdown
  - Zod
featured: false
sortOrder: 20
status: "published"
translationState: "ready"
repoUrl: "https://github.com/AlexZha-dev/myPortfolio"
cover: "./cover.svg"
coverAlt: "Architecture overview of the MyPortfolio site"
tags:
  - portfolio
  - frontend
  - markdown
  - i18n
year: 2026
seoDescription: "Monikielinen sisaltovetoinen portfoliosivusto markdown-arkkitehtuurilla, omalla Vite-loaderilla ja page-pohjaisella UI-rakenteella."
---

`MyPortfolio` on portfoliosivusto itse, kasiteltyna omana projektinaan samassa repossa. Se ei ole vain vitriini muille tyoilleni, vaan myos itsenainen tekninen case sisaltoarkkitehtuurista, lokalisoinnista, markdown-latauksesta ja siistista UI-rakenteesta.

Sivusto on rakennettu `React 19`:lla, `TypeScriptilla` ja `Vitella`. Arkkitehtuurin paaidea on se, etta sisalto elaa erillaan esityskerrokesta. Sivun osiot ja projektikortit ladataan kansioista `src/content/pages` ja `src/content/projects`, kulkevat oman markdown-loaderin lapi tiedostossa `vite.config.ts`, validoidaan `zodilla` ja renderoidaan vasta sen jalkeen UI:hin.

### Miten rakenne on jarjestetty

- `src/app`: sovelluksen entry layer;
- `src/pages/home`: paa-sivu, jaettuna `ui`- ja `styles`-osiin;
- `src/content`: markdown-sisalto osioille ja projekteille;
- `src/content/loaders`: sisallon kokoaminen ja locale-aware palautus;
- `src/i18n`: kayttoliittyman sanakirjat kielille `ru`, `en` ja `fi`;
- `src/shared`: skeemat, tyypit, markdown-renderer ja apuutilit.

Oleellista on myos se, etta rakenne on jo valmiiksi valmisteltu kasvamaan kerroksilla `app`, `pages`, `shared`, `config` ja `content`, seka varauksilla tasoille `entities`, `features` ja `widgets`.

### Mita tassa on toteutettu

- monikielinen UI kielilla `ru`, `en` ja `fi`;
- markdown-pohjaiset projekticaset ja tekstiosiot;
- frontmatter-validointi `zodilla`;
- locale-aware sisallolataus fallback-kaytoksella;
- hash-pohjainen project-modalin avaus;
- jaetut page-styles shellille, atmospherelle, sectioneille, modalille ja responsive-kerrokselle;
- oma visuaalinen suunta `Premium Tech` -hengessa.

### Miksi tama case on tarkea

Tama sivusto nayttaa hyvin, miten lahestyn insinoorityota myos frontend-puolella: en pida kaikkea suurissa komponenteissa ja kovakoodatuissa riveissa, vaan rakennan jarjestelman, jossa sisalto on erotettu esityksesta, lokalisointi kuuluu arkkitehtuuriin ja projekti pysyy helposti laajennettavana.

### Miksi toteutus on arvokas

Minulle tama ei ole pelkka oma esittelysivu. Se on pieni sisaltoalusta, johon voi lisata uusia projekteja, kielia, osioita ja UI-blokkeja ilman koko sivun uudelleenkirjoitusta. Kaytannossa se toimii kompaktina sisallomoottorina tekniselle portfoliolle.
