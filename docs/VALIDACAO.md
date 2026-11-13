# Validação da entrega rc.11

Ambiente: Node 22.22.0, npm 10.9.4, macOS e Chromium.

Fonte: commit 3d03a10, o mesmo do catálogo público rc.11 (release 27). Build da biblioteca refeito nesse commit antes do `npm pack`.

Motivo da rc.11: período na anatomia full alinhado aos campos vizinhos; nota de CSS do consumidor.

## Pacote como consumidor externo

33/33 verificações do pack-and-verify passaram em 13/11/2026. Evidência em evidencias/rc11/pack-report.json.

- Tarball `rbbt-ui-0.5.0-rc.11.tgz`: 1.452.281 bytes, 229 arquivos, só dist, docs, README, CHANGELOG e package.json; sem fontes TS, stories ou testes. sha256 `a4b8145e456079b170b106c2a39354f11e8eadaf3071e47b54c854a257f87d7f`, `integrity` `sha512-d9Rv91C59ubGxrDx5PwkeyxeXYpYfCMeqOz6zZkByLkuOO0hF6AYADk0v/wXh2pUAP3mtclJT/zTF0LMBUwvIA==`.
- Mesmas dependências da rc.10; nenhuma nova. Tipos Bundler e NodeNext (`skipLibCheck: false`), build com JS/CSS com hash, CSS sem preflight global e fontes OFL.
- Os tipos publicados trazem a prop nova `appearance?: "pill" | "field"` do `DateRangePicker`.

## Período em campo, na fonte

Rodados na fonte depois da última mudança de CSS, um arquivo por vez. Contagens em evidencias/rc11/testes-rc11.json.

- Teste novo de geometria (ContextBar › Período De/Até, anatomias full e lean, e a história Composição de página com select de loja, período, cobertura à direita e bloco abaixo; 1440, 1280, 768 e 360 px): 12/12 no desktop e 12/12 no celular. Confere topo e altura do período iguais aos do vizinho (1 px), nenhuma interseção entre filtros, metadados, cobertura e bloco, e o anel de foco de teclado dentro da caixa do controle mais 4 px, sem cobrir vizinho.
- Medida a 1440 px, anatomia full: caixa do período e do vizinho com o mesmo topo (y 117) e a mesma altura (36 px).
- e2e do DateRangePicker 13/13 + 13/13; ContextBar e painéis (panels) 41/41 + 37/37; fase 2 12/12 + 12/12; cache 3/3; receita ok.
- Achado e corrigido no caminho: o painel dos filtros do modo recolhido encolhia ao conteúdo (cerca de 180 px a 360 px). Agora ocupa a largura disponível, até 32rem.
- Capturas: periodo-antes-depois.png (antes rc.10 × depois rc.11 na anatomia full, com foco, e a lean sem mudança), composicao-1440.png, composicao-360.png, contextbar-recolhido-360.png e contextbar-full-glass-escuro-foco.png.

## Clone Git limpo do kit

Clone da branch entrega/rc11 no commit d90ec61, sem acesso ao código da biblioteca: `npm run verify` (237 arquivos íntegros), `npm run init`, `npm ci` (53 pacotes, nenhuma vulnerabilidade), `npm run typecheck` e `npm run build` passaram. O pacote instalado é o 0.5.0-rc.11, com o `integrity` acima no lockfile, e o CSS compilado do scaffold já traz o campo do período e a largura nova do painel. Os caminhos do tarball são relativos.

O commit seguinte só acrescenta evidências em evidencias/rc11/, este arquivo e o MANIFEST.sha256 regenerado. Tarball, lockfile, catálogo, scripts e scaffold continuam com os mesmos bytes.

## Catálogo

- Catálogo do kit: 168 arquivos, idênticos byte a byte ao build e ao conteúdo servido pelo catálogo público depois da publicação (https://rbbt-rbbt-ui-studio.ravi.page/catalogo/, release 27).
- A nota docs/MIGRACAO-RC10-RC11.md termina com o texto exato de `docs/date-range-picker-migracao.md` do tarball.
- Nesta entrega não houve nova rodada de renderização do catálogo servido pelo clone (`npm run catalogo`); a renderização do catálogo foi feita na fonte, com os mesmos bytes.

## Varredura de marca e de nomes internos

- Marca NBA (`nba` e `nba-store`) nos 168 arquivos do catálogo e nas 229 entradas do tarball rc.11: nenhuma ocorrência. Evidência em evidencias/rc11/marca-check.json. A marca fica em cliente-nba/ e nos documentos do kit que descrevem a reconstrução.
- A varredura de nomes internos do workspace consumidor deu zero no catálogo, no tarball rc.11 e nos textos do kit.

## Tarballs anteriores

Não mudaram. sha256: rc.6 `b90c598250711a0d0cc582e27bae0dbe6f43fe01c0e103633748428db90e965e`, rc.8 `159dce7b904549f5c5f7b560906921b57fe9817be0ad5186375ac814629b29f7`, rc.9 `93c387d923f107d4c08a0a9fa253049c421e9331fead1d7956880d685de22d63` e rc.10 `b848bbe3966924d87d7c739cb3b4e2993ddb580c32b2e85188af188aed979261`.

## Limites

O teste de geometria cobre as histórias do catálogo; não substitui a conferência na página de cada workspace. Uma caixa extra em volta do valor do período, vinda de CSS global da página sem camada, não é do pacote; a nota "CSS do consumidor" (contrato e migração) explica como evitar. Os testes da receita são sobre o exemplo fictício Pedravela. A reconstrução NBA do Michael permanece pendente. Safari, Firefox e leitor de tela não têm validação completa. Ressalvas dos widgets em ESCOPO-E-LIMITES.md.

As evidências das entregas rc.6, rc.8, rc.9 e rc.10 permanecem em evidencias/ e no histórico Git; não são apresentadas como testes novos da rc.11.
