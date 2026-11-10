# Validação da entrega rc.9

Ambiente: Node 22.22.0, npm 10.9.4, macOS e Chromium.

Fonte: código aprovado d22f11b, o mesmo do catálogo público rc.9 (release 22). Build da biblioteca refeito nesse commit antes do `npm pack`.

## Pacote como consumidor externo

32/32 verificações do pack-and-verify passaram em 10/11/2026. Evidência em evidencias/rc9/pack-report.json.

- Tarball `rbbt-ui-0.5.0-rc.9.tgz`: 1.415.708 bytes, 225 arquivos, só dist, docs, README, CHANGELOG e package.json; sem fontes TS, stories ou testes. `integrity` `sha512-AsmOwiHTMOAsEZOLsG+NXzyc0fY+T7FEFr9sARrJv3b+6nERVDETrlafvphq2RT05luCq84ndDiisFWwiJnSKg==`.
- Todo import publicado declarado; ECharts em chunk sob demanda.
- Consumidor externo: instalação com versão fixa, tipos Bundler e NodeNext (`skipLibCheck: false`), build com JS/CSS com hash, CSS dos Lotes 1–5, das cartas de relatório, do Glass/workspace, sem preflight global, e fontes OFL.
- Exemplo da receita: 146/146 verificações em seis módulos, desktop/celular, claro/escuro, axe, URL e console.

## Clone Git limpo do kit

Clone da branch entrega/rc9, sem acesso ao código da biblioteca: `npm run verify` (218 arquivos íntegros), `npm run init`, `npm ci` (53 pacotes, nenhuma vulnerabilidade), `npm run typecheck` e `npm run build` passaram. Os caminhos do tarball são relativos.

Depois disso só a documentação mudou: saiu uma nota de migração específica de cliente e o MANIFEST foi regenerado. Tarball, lockfile, catálogo, scripts e scaffold continuam com os mesmos bytes. `npm run verify` foi repetido num clone limpo do commit entregue, antes do push.

## Catálogo e scaffold renderizados

Catálogo servido por `npm run catalogo` no clone limpo e scaffold compilado no mesmo clone. Resultados em evidencias/rc9/render-check.json.

- Galeria a 1440 px: menu com `@rbbt/ui 0.5.0-rc.9`, sem erro de JavaScript, recurso HTTP com erro ou rolagem lateral.
- ReportDeck Glass a 1280 px: 10 cartas, sem erros. O axe, com todas as regras, aponta só duas regras de boas práticas de página (`landmark-one-main` e `page-has-heading-one`): a história isolada não tem `main` nem `h1`. Nenhuma regra WCAG.
- ReportDialog a 360 px: sem erros, sem rolagem lateral e axe sem violações.
- Página de contrato do ReportDeck: carregou sem erros.
- Scaffold: “@rbbt/ui 0.5.0-rc.9 carregado”, sem erros e axe sem violações.
- Capturas: catalogo-rc9.png, report-deck-glass.png, report-dialog-360.png e scaffold-rc9.png.

## Varredura de marca

Marca NBA (`nba` e `nba-store`) nos 167 arquivos do catálogo e nas 225 entradas do tarball: nenhuma ocorrência. Evidência em evidencias/rc9/marca-check.json. A marca fica em cliente-nba/ e nos documentos do kit que descrevem a reconstrução.

## Limites

Os testes da receita são sobre o exemplo fictício Pedravela. Não são a reconstrução NBA do Michael, que permanece pendente. Safari, Firefox e leitor de tela não têm validação completa. Ressalvas dos widgets em ESCOPO-E-LIMITES.md.

## Correção do catálogo (commit adicional, 10/11)

- Commit restrito a `catalogo/`, `MANIFEST.sha256` e este arquivo. O tarball `packages/rbbt-ui-0.5.0-rc.9.tgz` não mudou: os bytes e o sha256 `93c387d923f107d4c08a0a9fa253049c421e9331fead1d7956880d685de22d63` são os mesmos do commit 2930fba.
- Subtítulo da galeria: agora mostra `@rbbt/ui 0.5.0-rc.9`. O ajuste da rc.8 que deriva o rótulo da versão do pacote (47cb8e6) foi aplicado à fonte como 3600820. A galeria renderizada localmente não teve erro de JavaScript.
- Página de contrato do ReportCard: o exemplo que citava uma peça interna de um workspace virou um exemplo genérico, "o cabeçalho de um painel de evolução" (fonte ac6393a).
- Catálogo do kit refeito a partir dessa fonte: 167 arquivos.
  - O catálogo público foi republicado em https://rbbt-rbbt-ui-studio.ravi.page/catalogo/ (release 24).
  - Os 167 arquivos baixados coincidem byte a byte com o build e com este `catalogo/`.
  - Nenhuma ocorrência de marca de cliente, do nome da peça interna ou de nomes de sistemas internos.
- **Ocorrência remanescente:** dentro do tarball rc.9, `package/docs/report-card.md` ainda traz, num exemplo, o nome de uma peça interna de workspace. Ela não foi saneada nesta entrega, porque trocar o texto mudaria o tarball já entregue. A correção entra na próxima versão do pacote. Este kit não declara saneamento total da rc.9.

As evidências das entregas rc.6 e rc.8 permanecem em evidencias/rc6/, evidencias/rc8/ e no histórico Git; não são apresentadas como testes novos da rc.9.
