import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DiElMJAq.js";import{n as l,r as u,t as d}from"./Pareto.stories-BFwGe3BD.js";var f;function p(){return(p=e((()=>{f=`# Pareto 80/20 (\`ParetoChart\`) · contrato

Concentração de uma métrica (receita, por padrão) por marca, produto ou qualquer dimensão: barras da
maior para a menor, linha do **% acumulado** e marca do **limite** (80% por padrão, prop
\`threshold\`). Os **poucos vitais** vêm sempre em texto, com cor e com um sinal que não é cor.

## Leitura

- **Frase:** "12 de 85 produtos fazem 80% da receita". A contagem é de quantos itens, do maior
  para o menor, são precisos para o acumulado chegar a **≥ limite**. Singular e plural são tratados
  ("1 de 14 marcas faz…", "1 de 1 marca faz…"); o nome contável vem de \`dimension.noun\` e o
  complemento da métrica de \`metricPhrase\` (padrão: "da" + \`metricLabel\` em minúsculas).
- **Destaque:** barras dos poucos vitais na cor \`--rb-pareto-vital\`; nas colunas, um **colchete
  "Poucos vitais"** sob elas; nas linhas, a divisória tracejada "**80% da receita até aqui**"; na
  tabela, a etiqueta "Poucos vitais". O nome acessível de cada barra termina em ", poucos vitais".
- **Acumulado exato:** "Acumulado dos poucos vitais: 81,3%" e o total aparecem sob a frase.

## Dados

\`\`\`ts
interface ParetoItem { id: string; label: string; value: number | null }
interface ParetoDimension<D> { id: D; label: string; noun?: { one: string; other: string }; items: ParetoItem[] }
interface ParetoData<D> { dimensions: ParetoDimension<D>[] }
\`\`\`

- \`value: null\` (ou negativo, NaN, texto inválido) é **ausência**: fica fora do ranking e do total e
  é declarado ("3 sem dado" sob a frase; no rodapé, um só trecho de texto "3 sem dado: A, B, C. Fora
  do ranking…", com o ":" colado ao rótulo, para a quebra nunca começar por pontuação; na tabela, as
  linhas "sem dado"). Nunca vira zero. Zero é leitura: entra no fim do ranking.
- **Conciliação em centavos:** cada valor vira centavos inteiros (\`paretoCents\`) antes de somar.
  Σ barras visíveis + "Demais" = total, exatamente (\`paretoReconciles(model)\`).
- Empates: mesma receita → rótulo em ordem do \`locale\`, depois id.
- **Adaptador:** \`paretoFromRecords(records, { value: "receita", dimensions: [{ id: "marca", label: "Marca", key: "marca", keyLabel: "marca_nome" }, …] })\`
  lê linhas de uma view de Bases ou de um cenário (\`createScenarioReader(...).rows(...)\`). Números
  pela regra de \`toMetricValue\` ("1.234,56" vira número). Linhas repetidas do mesmo item somam; se
  alguma não tem leitura, o item inteiro fica sem dado (soma estrita).

## Dimensões

Com duas ou mais dimensões, a pílula **"Ver por"** alterna (controlada por \`dimension\` /
\`onDimensionChange\`, ou não controlada com \`defaultDimension\`). Na troca, cada barra vai do valor
antigo ao novo **na mesma posição**, sem cascata e sem passar por zero; a linha do acumulado
desliza do traçado antigo ao novo.

## Cauda longa

As \`topN\` primeiras barras (padrão 12) aparecem e o resto vira **"Demais (k)"**, hachurado, sempre
por último. O botão "Mostrar os k demais" (\`aria-expanded\`, \`aria-controls\`) abre a cauda
(\`expanded\` / \`defaultExpanded\` / \`onExpandedChange\`). Com um só item na cauda, ele aparece como
barra (não existe "Demais (1)").

## Rótulos e espaço mínimo

- **Espaço mínimo por barra: \`PARETO_MIN_SLOT_PX\` = 56 px.** Com pelo menos isso por barra, o
  gráfico fica em **colunas** e cada barra tem o valor compacto em cima ("182 mil"; a moeda vai na
  chave: "Valor: R$"), com fundo para não brigar com a linha.
- **Abaixo disso** (cartão estreito, celular a 360 px, cauda aberta com muitas barras), o gráfico
  vira **linhas horizontais**: posição, nome e valor em cima, barra embaixo, "% · acum. %" ao lado e
  a divisória do limite em texto. Nenhuma barra perde o rótulo.
- Colisão testada por geometria no DOM (\`getBoundingClientRect\`): rótulos de valor entre si, nomes,
  marca do limite, frase e balão, no desktop e a 360 px.

## Estados

Carregando (esqueleto de barras), vazio (\`data\` nulo, sem itens com leitura ou total zero), erro com
"Tentar de novo", parcial com nota. Contexto sempre visível: período e lojas no subtítulo, origem no
rodapé.

## Interação e acessibilidade

- Lista de barras (\`role="list"\`), uma barra na ordem de Tab (tabindex móvel); setas ←/→ (e ↑/↓),
  Home/End; Esc fecha o balão. Nome acessível: "1º, Passo Leve: R$ 182.400, 15,2% do total, 15,2%
  acumulado, poucos vitais".
- Hover discreto: a barra ativa ganha fundo e as outras recuam (\`--rb-pareto-fade\`); o balão traz
  posição, valor, %, % acumulado, a etiqueta dos poucos vitais e o período. No celular, o tap dá o
  mesmo estado; tap fora fecha.
- Posição do balão: o lugar livre mais perto da barra ativa (com o rótulo de valor) ou, em linhas, da
  linha inteira, medido no DOM. Ele nunca cobre texto do quadro (valores, nomes, frase, 80%, colchete,
  chave) e evita as outras barras e os pontos do acumulado quando dá. Sem lugar para o completo, o
  compacto mostra "valor · % · acum." numa linha.
- **Tabela alternativa** ("Ver tabela"): posição, item, valor, %, % acumulado e a etiqueta "Poucos
  vitais"; segue a cauda (agrupada → linha "Demais (k)"; aberta → todos os itens), depois as linhas
  sem dado e o total (100,0%), para a conciliação ficar à vista.
- Motion: cascata só na entrada (\`RbEntrance\`); troca de dimensão do antigo ao novo; movimento
  reduzido zera durações e põe contorno na barra ativa.

## Tokens

\`--rb-pareto-vital\`, \`--rb-pareto-rest\`, \`--rb-pareto-others\`, \`--rb-pareto-line\`,
\`--rb-pareto-mark\`, \`--rb-pareto-halo\`, \`--rb-pareto-track\`, \`--rb-pareto-absent\`,
\`--rb-pareto-fade\`, \`--rb-pareto-hover-in\`, \`--rb-pareto-hover-out\`, \`--rb-pareto-hover-ease\`, por
tema (claro/escuro, Smooth/Glass); \`--rb-pareto-vital\` segue a cor de destaque do cliente.
`})))()}function m(e){let t={h2:`h2`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:l,name:`Contrato`}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(c,{children:f}),`
`,(0,g.jsx)(t.h2,{id:`referência-de-props-gerada`,children:`Referência de props (gerada)`}),`
`,(0,g.jsx)(o,{of:l})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),a(),p(),u()})))()}_();export{h as default};