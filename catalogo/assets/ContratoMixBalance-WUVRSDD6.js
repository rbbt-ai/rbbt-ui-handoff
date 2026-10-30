import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-D_sZS5Xq.js";import{n as l,r as u,t as d}from"./MixBalance.stories-CQkwOKVt.js";var f;function p(){return(p=e((()=>{f=`# Mix vendido × disponível (\`MixBalance\`, 0.5.0-rc.4)

O que sai da loja comparado com o que está na prateleira, no **mesmo universo**. Barras espelhadas a partir
do eixo central: à **esquerda o mix vendido**, à **direita o mix disponível**, uma linha por categoria, linha ou
marca (\`groupLabel\`). O desequilíbrio aparece em texto e em p.p., e a ordem padrão é a do maior desequilíbrio.

## Definições (iguais nos rótulos e no contrato)

- **Mix vendido** do item = unidades vendidas do item ÷ unidades vendidas do total × 100.
- **Mix disponível** do item = unidades disponíveis do item ÷ total disponível × 100.
- **Diferença** = mix vendido − mix disponível, em **p.p.** (pontos percentuais), com sinal.
- **Leitura** (sempre em texto, com ícone; a cor nunca é o único sinal):
  - vendido > disponível = **Risco de ruptura**;
  - disponível > vendido = **Excesso**;
  - |diferença| abaixo de \`tolerance\` (padrão 2 p.p.) = **Equilibrado**. No limite exato já há desequilíbrio.

## Dados

\`\`\`ts
interface MixBalanceData {
  items: {
    id: string;
    label: string;
    sold: number | null;        // unidades vendidas no período
    available: number | null;   // estoque vendável na posição
    reserved?: number | null;   // opcional, à parte
    blocked?: number | null;    // opcional, à parte
  }[];
  stockAt?: Date | string | number | null; // posição do estoque (datada)
  universe?: { stores?: number | null; products?: number | null };
}
\`\`\`

- **Mesmo universo nos dois lados.** Só entram itens com as duas leituras. Item sem uma delas sai **dos dois**
  denominadores e vai para "Sem leitura" (com o motivo: sem leitura da venda, do estoque ou das duas). Assim os
  dois lados somam 100% sobre o mesmo conjunto de lojas e produtos. O universo (\`universe\`) aparece no topo:
  "Mesmo universo nos dois lados: 18 lojas · 1.240 referências".
- **Denominadores visíveis** na legenda dos dois lados ("Vendido: 12.220 un." e "Disponível: 12.500 un.") e no
  total da tabela.
- **Posição do estoque datada**, sempre visível ("Posição do estoque 26/10 23:59", no fuso \`timeZone\`). Sem data,
  o widget diz "Posição do estoque sem data".
- **Disponível = estoque vendável.** Reservado e bloqueado ficam **fora do disponível e do denominador** e aparecem
  à parte quando o dado existe: nota no rodapé, balão, nome acessível e colunas próprias na tabela.
- **Ausência nunca vira zero.** \`null\`, campo ausente, número negativo ou inválido = sem leitura. Zero é leitura:
  0 vendido é 0% do mix vendido e a barra fica vazia, com o trilho visível.
- **Sem base**: se nada foi vendido (ou nada está disponível) no universo, não há mix; o widget mostra o estado
  vazio com o motivo, em vez de 0% em todas as linhas.
- **Contexto sempre visível**: \`period\` e \`scope\` no subtítulo, posição e universo no topo, \`source\` no rodapé.

### Adaptadores

- \`mixBalanceFromRecords(rows, mapping, extra?)\`: linhas de uma view de Bases ou \`reader.rows("mix")\` de um
  cenário pronto (\`createScenarioReader\`, \`adapters/scenario.ts\`). Campos por nome ou caminho com pontos
  (\`readPath\`), número pela regra de \`toMetricValue\` ("1.234,5" → 1234,5); vazio, \`null\` e texto inválido são
  ausência. Linhas repetidas do mesmo item (ex.: uma por loja) **somam**; se uma delas não tem leitura, o campo do
  item fica sem leitura (somar só as outras trataria a falta como zero).
  - \`mapping\`: \`{ id, label?, sold, available, reserved?, blocked?, stockAt?, order? }\`. \`order\` fixa ordem e
    rótulos; id fora dela fica de fora; id da ordem sem linha nenhuma vira item sem leitura.
  - \`extra\`: \`{ stockAt?, universe? }\` completa ou substitui a posição e o universo.

## Regras e arredondamento

- Participações em \`decimals\` casas (padrão 1) pelo **maior resto** (Hamilton), como no Explorador de mix: cada
  lado soma **exatamente 100%**. A diferença é a das participações **exibidas**, e a leitura usa essa mesma
  diferença: o texto nunca contradiz o número.
- **Ordem** (\`sort\`/\`defaultSort\`/\`onSortChange\`): \`imbalance\` (padrão, maior |diferença| primeiro), \`sold\`
  (maior mix vendido) ou \`name\` (rótulo pelo \`locale\`). Empate pela ordem dos dados.
- **Escala comum** aos dois lados (teto em degraus a partir da maior participação): uma barra de 20% tem o mesmo
  comprimento à esquerda e à direita.

## Tokens

| Token | Uso |
| --- | --- |
| \`--rb-mixbal-sold\` | Barra do mix vendido (acento do tema ou do cliente) |
| \`--rb-mixbal-available\` | Barra do mix disponível (neutro calmo) |
| \`--rb-mixbal-track\` | Trilho das barras |
| \`--rb-mixbal-risk\` / \`--rb-mixbal-excess\` / \`--rb-mixbal-balanced\` | Texto e ícone de cada leitura |
| \`--rb-mixbal-absent\` | Tracejado da ausência |
| \`--rb-mixbal-row-active\` | Fundo da linha ativa |
| \`--rb-mixbal-fade\` | Recuo das barras das outras linhas com uma ativa (0,4; 0,45 no Glass claro) |
| \`--rb-mixbal-hover-in\` / \`--rb-mixbal-hover-out\` | 150 ms / 110 ms (zeram com movimento reduzido) |
| \`--rb-mixbal-reorder\` | 480 ms: deslize das linhas para a nova ordem |
| \`--rb-mixbal-hover-ease\` | \`cubic-bezier(0.22, 1, 0.36, 1)\` |
| \`--rb-mixbal-bar-h\`, \`--rb-mixbal-value-w\`, \`--rb-mixbal-label-w\`, \`--rb-mixbal-gap\` | Medidas da linha |

## Interação

- **Hover, foco do teclado ou tap**: a linha ativa ganha fundo suave; as barras das outras recuam
  (\`--rb-mixbal-fade\`); o balão mostra o nome, a leitura com a diferença em p.p., as duas participações com as
  unidades, reservado e bloqueado (se houver) e o contexto (período e posição do estoque).
- **Ordenar por**: desequilíbrio, mix vendido ou nome. As linhas deslizam para a nova ordem.
- **Ver tabela / Ver barras** alterna a alternativa em tabela (\`view\`/\`defaultView\`/\`onViewChange\`).

## Acessibilidade

- Barras em \`role="list"\`, um \`listitem\` focável por linha, **tabindex móvel** (uma linha na ordem de Tab),
  setas ↑/↓, Home/End e Esc (fecha o balão).
- Nome de cada linha: "‹nome›: vendido ‹%› (‹un.›), disponível ‹%› (‹un.›), ‹±p.p.›, ‹leitura›, reservado …,
  bloqueado …". O balão é visual (\`aria-hidden\`).
- **Ver tabela**: unidades e participação dos dois lados, reservado e bloqueado (quando existem), diferença e
  situação, as linhas sem leitura ("Sem leitura · fora dos totais") e o total com os denominadores.
- axe sem violações no claro, no escuro e no Glass escuro.

## Movimento

- Entrada na página, troca de módulo ou entrada na tela: as barras crescem do eixo central em **cascata**
  (\`--rb-duration-enter\`, \`--rb-duration-stagger\`, até 12 passos).
- **Troca de recorte ou de dado**: cada barra vai da largura antiga à nova, **sem cascata e sem passar por zero**;
  as linhas deslizam para a nova ordem (\`--rb-mixbal-reorder\`).
- Movimento reduzido: estado final direto, sem recuo animado.

## Estados

Carregando (esqueleto com as barras espelhadas), vazio (com o motivo quando um lado não tem base), erro (com
"Tentar novamente"), sem permissão, parcial (aviso visível) e desatualizado, pela moldura comum (\`Panel\`).

## Layout

- Container largo: valor vendido, barra vendida, rótulo e leitura no centro, barra disponível, valor disponível.
- Abaixo de 30 rem de container (celular): rótulo e leitura em cima, barras espelhadas embaixo. A 360 px não há
  rolagem lateral; a tabela rola só dentro do widget.

## Por que DOM e não ECharts

O ECharts desenha em canvas: foco por linha, nome acessível com as duas participações, leitura em texto ao lado
da barra, tokens de tema e de cliente e a reordenação com Motion ficariam fora do componente. Barras espelhadas
são duas larguras por linha sobre uma escala comum; em DOM ficam focáveis, legíveis por leitor de tela e
animadas pelas mesmas regras dos outros widgets, sem biblioteca nova.
`})))()}function m(e){let t={h2:`h2`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:d,name:`Contrato`}),`
`,(0,g.jsx)(s,{of:l}),`
`,(0,g.jsx)(c,{children:f}),`
`,(0,g.jsx)(t.h2,{id:`referência-de-props-gerada`,children:`Referência de props (gerada)`}),`
`,(0,g.jsx)(o,{of:d})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),a(),p(),u()})))()}_();export{h as default};