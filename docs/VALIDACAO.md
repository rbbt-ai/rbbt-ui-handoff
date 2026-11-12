# Validação da entrega rc.10

Ambiente: Node 22.22.0, npm 10.9.4, macOS e Chromium.

Fonte: código aprovado a4f8f7c, o mesmo do catálogo público rc.10 (release 25). Build da biblioteca refeito nesse commit antes do `npm pack`.

## Pacote como consumidor externo

33/33 verificações do pack-and-verify passaram em 12/11/2026. Evidência em evidencias/rc10/pack-report.json.

- Tarball `rbbt-ui-0.5.0-rc.10.tgz`: 1.449.418 bytes, 229 arquivos, só dist, docs, README, CHANGELOG e package.json; sem fontes TS, stories ou testes. sha256 `b848bbe3966924d87d7c739cb3b4e2993ddb580c32b2e85188af188aed979261`, `integrity` `sha512-gkiExBkb4byDq6nXj4v4WvuI4WCB7ETV8gcxaf9UHvj4V8RlHEQAmhqx0mLuKFCRsPCD+fKzKTX3fegZf6/6HA==`.
- Todo import publicado declarado, inclusive `@internationalized/date` 3.12.4 (nova dependência declarada, na mesma versão que o React Aria já trazia); ECharts em chunk sob demanda.
- Consumidor externo: instalação com versão fixa, tipos Bundler e NodeNext (`skipLibCheck: false`), build com JS/CSS com hash, CSS dos Lotes 1–5, das cartas de relatório, do Glass/workspace, sem preflight global, e fontes OFL.
- Exemplo da receita: 146/146 verificações em seis módulos, desktop/celular, claro/escuro, axe, URL e console.

## DateRangePicker na fonte

Rodados na fonte depois da correção das bordas, antes do pack:

- e2e do DateRangePicker: 13/13 no desktop e 13/13 no celular.
- Capturas de revisão em Glass claro, Glass escuro e Smooth claro, com o painel e a folha abertos: axe sem violações.
- Contraste da borda dos campos De/Até contra o fundo, medido por estilos computados (evidencias/rc10/contraste-bordas.json), dentro do campo e no painel em volta: Glass claro 3,45–3,59:1, Glass escuro 4,78–5,26:1, Smooth claro 3,55:1 e Smooth escuro 4,01–4,24:1. Todos acima de 3:1. Os tokens globais e os outros componentes não mudaram. O gatilho do período é uma pílula preenchida, sem borda, como as outras do ContextBar.

## Clone Git limpo do kit

Clone da branch entrega/rc10 no commit 46356f2, sem acesso ao código da biblioteca: `npm run verify` (227 arquivos íntegros), `npm run init`, `npm ci` (53 pacotes, nenhuma vulnerabilidade), `npm run typecheck` e `npm run build` passaram. O pacote instalado é o 0.5.0-rc.10, e o CSS compilado do scaffold já traz a borda nova dos campos De/Até. Os caminhos do tarball são relativos.

O commit seguinte só acrescenta evidencias/rc10/, este arquivo e o MANIFEST.sha256 regenerado. Tarball, lockfile, catálogo, scripts e scaffold continuam com os mesmos bytes.

## Catálogo e scaffold renderizados

Catálogo servido por `npm run catalogo` no clone limpo e scaffold compilado no mesmo clone. Resultados em evidencias/rc10/render-check.json.

- Catálogo do kit: 168 arquivos, idênticos byte a byte ao build e ao conteúdo servido pelo catálogo público depois da publicação (https://rbbt-rbbt-ui-studio.ravi.page/catalogo/, release 25).
- Galeria a 1440 px: menu e subtítulo com `@rbbt/ui 0.5.0-rc.10`, sem erro de JavaScript, recurso HTTP com erro ou rolagem lateral.
- DateRangePicker Glass a 1280 px, com o painel aberto: sem erros, sem rolagem lateral e axe sem violações.
- DateRangePicker a 360 px, com a folha aberta: sem erros, sem rolagem lateral e axe sem violações.
- Página de contrato do DateRangePicker: carregou sem erros.
- ContextBar com o período De/Até a 1280 px: sem erros. O axe, com todas as regras, aponta só duas regras de boas práticas de página (`landmark-one-main` e `region`): a história isolada não tem `main`. Nenhuma regra WCAG.
- Scaffold: “@rbbt/ui 0.5.0-rc.10 carregado”, sem erros e axe sem violações.
- A nota docs/MIGRACAO-RC9-RC10.md termina com o texto exato de `docs/date-range-picker-migracao.md` do tarball.
- Capturas: catalogo-rc10.png, date-range-picker-glass.png, date-range-picker-360.png e scaffold-rc10.png.

## Varredura de marca e de nomes internos

- Marca NBA (`nba` e `nba-store`) nos 168 arquivos do catálogo e nas 229 entradas do tarball rc.10: nenhuma ocorrência. Evidência em evidencias/rc10/marca-check.json. A marca fica em cliente-nba/ e nos documentos do kit que descrevem a reconstrução.
- **Ocorrência da rc.9 resolvida:** o tarball rc.10 não traz mais o nome da peça interna de workspace que ficou em `package/docs/report-card.md` do tarball rc.9. O exemplo da documentação agora é genérico, como já era no catálogo desde a release 24. O tarball rc.9 continua com os bytes entregues em 10/11 e, portanto, ainda com essa ocorrência. A mesma varredura de nomes internos do workspace consumidor deu zero no catálogo e no tarball rc.10.

## Tarballs anteriores

Não mudaram. sha256: rc.6 `b90c598250711a0d0cc582e27bae0dbe6f43fe01c0e103633748428db90e965e`, rc.8 `159dce7b904549f5c5f7b560906921b57fe9817be0ad5186375ac814629b29f7` e rc.9 `93c387d923f107d4c08a0a9fa253049c421e9331fead1d7956880d685de22d63`.

## Limites

Os testes da receita são sobre o exemplo fictício Pedravela. Não são a reconstrução NBA do Michael, que permanece pendente. Safari, Firefox e leitor de tela não têm validação completa. Ressalvas dos widgets, inclusive as do DateRangePicker, em ESCOPO-E-LIMITES.md.

As evidências das entregas rc.6, rc.8 e rc.9 permanecem em evidencias/rc6/, evidencias/rc8/, evidencias/rc9/ e no histórico Git; não são apresentadas como testes novos da rc.10.
