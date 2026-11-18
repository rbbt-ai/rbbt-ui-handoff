# Validação da entrega rc.12

Ambiente: Node 22.22.0, npm 10.9.4, macOS e Chromium.

Fonte: commit 60479cd, o mesmo do catálogo público rc.12 (release 28). Build da biblioteca refeito nesse commit antes do `npm pack`. O commit seguinte (f8514cf) só acrescenta as peças novas ao consumidor externo do pack-and-verify.

Motivo da rc.12: workspace em mosaico (bento), pedido aprovado pelo Thiago em 17/11/2026. Tudo é aditivo.

## Pacote como consumidor externo

O pack-and-verify passou em 17/11/2026, com as peças novas no consumidor externo. Evidência em evidencias/rc12/pack-report.json.

- Peças no consumidor: `WorkspaceShell` `navigation="sidebar"` com grupos, badge e `contextBar`; `BentoGrid`/`BentoItem`; `StatCard` hero com `trend` (com `null`) e `comparisons` (uma com `delta: null`); `BridgeChart` com etapa `null`; `ProportionCard` com segmento `null`; `AgentActivityCard`; e `ComparisonTable` com polaridade por linha.
- Tarball `rbbt-ui-0.5.0-rc.12.tgz`: 1.507.034 bytes, 238 arquivos, só dist, docs, README, CHANGELOG e package.json; sem fontes TS, stories ou testes. sha256 `cd3cdc7b4211f79e0a71e4c6e874e8294a0fea3f6f030a59b16ace2aad713319`, `integrity` `sha512-j8C8WpeSF2B0t1Effwc4rr1lsQ1HcWi2Rt2zlti4Vvcj/eFMoCrZ0OYbBdmFM5AyOrSqI4vtaTOjBmQPypWg3A==`.
- Dependências iguais às da rc.11, nenhuma nova. Tipos passam com Bundler e com NodeNext (`skipLibCheck: false`). O build gera JS e CSS com hash, o CSS não tem preflight global e as fontes OFL vão no pacote. A receita passou com 146/146 no Chromium (desktop e celular, claro e escuro, axe, URL e console).

## Workspace em mosaico, na fonte

Rodados na fonte, um arquivo por vez. Contagens em evidencias/rc12/testes-rc12.json.

- e2e do mosaico, desktop e celular: 23 passaram e 9 foram pulados (testes só de desktop ou só de celular), sem falhas. Cobrem:
  - `aria-current`, troca de módulo, badge com nome acessível, recolher (`aria-expanded`) e Tab;
  - a gaveta no celular (abre, Esc fecha, foco volta ao "Menu", sem rolagem horizontal);
  - axe no Glass claro e escuro;
  - hero, densidade compacta, composição, ponte e DRE;
  - movimento reduzido;
  - geometria: sem sobreposição e gutter de 20 px;
  - a grade da Visão geral e o módulo-molde em até 1,5 tela a 1440×900;
  - 360 px com um título só e o tema na barra compacta com 44 px.
- Regressão, desktop e celular:
  - DateRangePicker 26/26 e geometria do período 24/24;
  - WorkspaceShell rc2 24 (2 pulados) e v3 18 (2 pulados);
  - InsightCard 24/24;
  - DivergingBars 26, com 7 pulados e 1 tempo esgotado de 30 s sob carga, que passou isolado.
- Na rodada anterior desta rc: StatCard e ResultWaterfall 30 (1 pulado); painéis, que incluem a ComparisonTable, 41/41; unidade 18/18 do mosaico e 43/43 de regressão. cache.spec 3 (1 pulado).
- Medida: a grade da Visão geral vai de 299 a 1.602 px a 1440×900, ou 1.303 px (1,45 tela). A página inteira, com cabeçalho e rodapé, mede ~1.774 px. Caber inteira em 1,5 tela exigiria tirar uma das três faixas pedidas, e essa decisão é do Thiago.
- Capturas em evidencias/rc12/: Visão geral no Glass claro e escuro a 1440, Visão geral a 360 px, ponte em cascata e DRE com polaridade por linha.

## Clone Git limpo do kit

Clone da branch entrega/rc12 no commit 425d539, sem acesso ao código da biblioteca. Passaram:
- `npm run verify`, com 262 arquivos íntegros;
- `npm run init`;
- `npm ci`, com 53 pacotes;
- `npm run typecheck` e `npm run build`.

O pacote instalado é o 0.5.0-rc.12, com o `integrity` acima no lockfile, e traz `docs/workspace-mosaico.md`. Os caminhos do tarball são relativos.

**npm audit em 17/11/2026:** 5 avisos altos, todos do mesmo aviso novo, GHSA-fc5q-39xc-vjpf (ReDoS no `picomatch`, que vale para todas as versões).
- O aviso chega por `fdir`, `tinyglobby`, `vite` e `@vitejs/plugin-react`, as ferramentas de build do scaffold. Não vem do `@rbbt/ui`.
- O lockfile do scaffold é o mesmo da rc.11, exceto pelo `@rbbt/ui`. Na rc.11 o audit deu zero porque o aviso ainda não existia.
- `npm audit fix --force` rebaixaria o vite para 6.2.7, uma mudança incompatível. Por isso fica como lacuna, até sair uma versão corrigida.

O commit seguinte só registra este resultado e o MANIFEST.sha256 regenerado. Tarball, lockfile, catálogo, scripts e scaffold continuam com os mesmos bytes.

## Catálogo

- Catálogo do kit: 176 arquivos, idênticos byte a byte ao build e ao conteúdo servido pelo catálogo público depois da publicação (https://rbbt-rbbt-ui-studio.ravi.page/catalogo/, release 28).
- Nesta entrega não houve nova renderização do catálogo servido pelo clone (`npm run catalogo`). A renderização foi feita na fonte, com os mesmos bytes.

## Varredura de marca e de nomes internos

- A varredura `rg -i -w` de marca e de nomes internos do workspace consumidor deu zero no tarball rc.12, no catálogo (storybook-static), em src, dist, docs e stories do pacote. Evidência em evidencias/rc12/marca-check.json. A marca fica em cliente-nba/ e nos documentos do kit que descrevem a reconstrução.

## Tarballs anteriores

Não mudaram. sha256:
- rc.6: `b90c598250711a0d0cc582e27bae0dbe6f43fe01c0e103633748428db90e965e`
- rc.8: `159dce7b904549f5c5f7b560906921b57fe9817be0ad5186375ac814629b29f7`
- rc.9: `93c387d923f107d4c08a0a9fa253049c421e9331fead1d7956880d685de22d63`
- rc.10: `b848bbe3966924d87d7c739cb3b4e2993ddb580c32b2e85188af188aed979261`
- rc.11: `a4b8145e456079b170b106c2a39354f11e8eadaf3071e47b54c854a257f87d7f`

## Limites

- Os testes de geometria cobrem as histórias do catálogo. Não substituem a conferência na página de cada workspace.
- Os testes da receita e do mosaico usam o exemplo fictício Pedravela. A reconstrução do Michael continua pendente.
- Safari, Firefox e leitor de tela não têm validação completa.
- O visual da rc.12 é candidato e espera o aceite do Thiago.
- Ressalvas dos widgets em ESCOPO-E-LIMITES.md.

As evidências das entregas rc.6, rc.8, rc.9, rc.10 e rc.11 continuam em evidencias/ e no histórico Git. Não são apresentadas como testes novos da rc.12.
