import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{r as n,t as r}from"./Workspace.stories-DAHowhHj.js";import{i,r as a}from"./react-DITjJg24.js";import{c as o,l as s,r as c,s as l}from"./blocks-DiElMJAq.js";var u;function d(){return(d=e((()=>{u=`# Receita · montar um workspace

Versão do pacote: \`@rbbt/ui@0.5.0-rc.8\` · release candidate com os Lotes 0–5 aprovados. Receita dos seis módulos criada na rc.2; exemplos e contratos compatíveis com a rc.8.

Um workspace é uma página de trabalho com vários módulos (Visão geral, Lojas, Mix…) sob o mesmo topo, os mesmos filtros e o mesmo tema. Nesta biblioteca ele é a soma de quatro camadas:

| Camada | O que é | Onde vive |
|---|---|---|
| **Modelo** | topo com marca e módulos, barra de filtros, cabeçalho de página, seção e rodapé: \`WorkspaceShell\`, \`FilterBar\`, \`WorkspaceHeader\`, \`WorkspaceSection\`, \`WorkspaceFooter\` | pacote |
| **Tema** | família visual (Smooth ou Glass) + tema de cliente (nome, logo e cores por configuração), escolhidos no \`RbTheme\` | pacote (família) + consumidor (cliente) |
| **Componentes** | widgets que montam cada módulo (\`TrendIndicator\`, \`EvolutionChart\`, \`ComparisonTable\`, \`MixExplorer\`, \`StockGrid\`, \`ActionBoard\`, \`QualityOverview\`…) e os adaptadores que leem linhas planas | pacote |
| **Configuração** | quais módulos existem, textos, rótulos dos recortes, dados, URL, persistência e regras de negócio | consumidor |

O mesmo código de página serve a qualquer cliente: trocar o cliente é trocar o tema e a configuração, nunca o código interno dos componentes.

**Exemplo público.** O exemplo desta receita usa um cliente **fictício**, a **Pedravela Calçados** (nome inventado para o catálogo, conferido: não corresponde a marca conhecida). Todos os números são fictícios. No catálogo, a página desta receita mostra o modelo ao vivo logo depois desta introdução; ele também está em Workspace › Modelo › Glass com cliente fictício. O exemplo completo, com os seis módulos, está no código dos passos 1 a 6.

**Exemplo descrito (cliente real, sem marca).** Num cliente real do Studio, o mesmo modelo monta o workspace de inteligência comercial de uma rede de lojas de artigos esportivos: 20 lojas (18 com dados), recortes regionais, períodos Ontem, Semana e Mês, os seis módulos desta receita e um tema de cliente em azul profundo e vermelho por cima do Glass. A marca não entra no pacote nem no catálogo público: tema e logo ficam no projeto do cliente, e a rota é privada.

## Mapa · módulo → componentes → adaptadores

| Módulo | Componentes do pacote | Adaptadores | Fica no consumidor |
|---|---|---|---|
| Topo, filtros e rodapé | \`WorkspaceShell\`, \`WorkspaceHeader\` (+ \`ActionButton\` Exportar), \`FilterBar\`, \`WorkspaceFooter\`, \`PageContextProvider\` | \`coverageFromRecords\` (cobertura da barra) | módulos, rótulos dos recortes, datas, URL, CSV |
| Visão geral | \`TrendIndicator\` ×3 (o 1º com \`featured\`), cesta (\`Panel\` + \`CountUp\`), \`EvolutionChart\`, meta (\`Panel\` + \`SegmentedGauge\` + \`CountUp\`), prioridades (\`WorkspaceSection\` + \`OpenCard\` + \`StatusChip variant="pill"\`), \`DetailPanel\` | \`indicatorDataFromRecord\` (registro agregado) ou \`summarizeSeries\` (série), \`toMetricValue\` | soma do recorte, meta, textos das prioridades |
| Lojas | a mesma fileira de \`TrendIndicator\` + \`ComparisonTable\` (busca, ordenação, exportação e linha que abre) + \`DetailPanel\` | \`toMetricValue\`, \`indicatorDataFromRecord\` (no detalhe) | colunas, total, variação |
| Mix | \`MixExplorer\` + uma nota em \`Panel\` | — (recebe a árvore \`MixNode\`) | árvore do mix; caminho em estado |
| Estoque | \`StockGrid\` (+ \`legend\`, \`note\`) + \`TransferSimulatorDialog\` sob demanda (\`TransferSimulator\` se ficar sempre aberto) | \`stockFromRecords\`, \`coverageWeeks\`, \`ruptureSizes\`, \`simulateTransfer\`, \`transferLimits\` | origem, destino e quantidade; limites; rascunho no plano |
| Plano de ação | \`ActionBoard\` (+ \`advanceLabels\`) | \`actionsFromRecords\`, \`canMoveAction\`, \`requiresEvidence\`, \`ACTION_STAGES\` | persistência por callback e evidência; textos dos botões |
| Qualidade | \`QualityOverview\` (+ \`label\` nos cards, \`methodologyTitle\`) | \`coverageFromRecords\`, \`coverageMapFromRecords\` | fonte, posição, universo e relógio |
| Dados prontos em JSON | — (alimenta os módulos acima) | \`createScenarioReader\`, \`pickScenario\`, \`fillTemplate\`, \`formatByName\`, \`iconByName\`, \`readPath\` | o JSON, o valor de cada marcador e o registro de ícones |

Todos os adaptadores seguem o contrato de \`adapters/series.ts\`: linhas planas, como as de uma view de Bases, com nomes de campo configuráveis; nada faz rede; \`null\`, vazio e texto inválido nunca viram zero. Quando os dados chegam prontos num JSON (cenários por recorte × período, textos com marcadores), siga o passo 5. Contratos de cada widget em Widgets › *nome* › Contrato.

## 1. Instalar o pacote e importar o CSS

Projeto Vite + React + TypeScript com as **mesmas versões maiores do pacote**: React 19, Vite 8, \`@vitejs/plugin-react\` 6 e TypeScript 7 (as versões exatas estão em \`node_modules/@rbbt/ui/package.json\`). Instale o tarball pelo caminho do arquivo, com versão exata:

\`\`\`bash
npm install --save-exact ./rbbt-ui-0.5.0-rc.8.tgz react@19.3.1 react-dom@19.3.1 lucide-react@1.59.0
npm install --save-dev --save-exact vite@8.3.4 @vitejs/plugin-react@6.1.2 typescript@7.0.2 @types/react@19.3.0 @types/react-dom@19.3.0
\`\`\`

- \`lucide-react\` só é preciso se a página usar ícones próprios (os do exemplo vêm dele).
- A rota do Ravi Pages entra no \`base\` do Vite, com barra no fim:

\`\`\`ts
// vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({ base: "/workspaces/meu-workspace/", plugins: [react()] });
\`\`\`

- Os estilos entram uma vez, na entrada da página. \`styles.css\` não faz reset global: zere a margem do \`body\` no CSS da página.

\`\`\`ts
// arquivo: src/vite-env.d.ts
/// <reference types="vite/client" />
\`\`\`

\`\`\`tsx
// arquivo: src/main.tsx
import "@rbbt/ui/fonts.css"; // Plus Jakarta Sans (OFL), a fonte do Smooth e do Glass
import "@rbbt/ui/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
\`\`\`

\`\`\`html
<!-- arquivo: index.html -->
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Workspace · Pedravela Calçados (fictício)</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
\`\`\`

## 2. Escolher a família e aplicar o tema de cliente

A família vem do \`RbTheme\`. **Smooth é o padrão**; o workspace escolhe o Glass com \`family="glass"\` (vidro acetinado, fundo em gradiente sem foto, numerais contidos). A família, o modo e o cliente são herdados por \`RbTheme\` aninhado. Use \`canvas\` no \`RbTheme\` de fora para pintar o fundo.

O tema de cliente é configuração, criada com \`defineClientTheme\`:

| Campo | Para quê |
|---|---|
| \`id\` | identificador estável (vira \`data-rb-client\`) |
| \`name\`, \`product\`, \`mark\` | nome no topo (quando não há logo), rótulo ao lado da marca (ex.: "Workspace") e sigla do rodapé |
| \`logo\` | \`{ src, alt, width, height, darkSrc?, plate? }\`: o arquivo é do consumidor, nunca do pacote |
| \`tokens\`, \`light\`, \`dark\` | cores comuns e por modo (o modo vence \`tokens\`) |

Tokens que um cliente costuma trocar:

| Token | Onde aparece |
|---|---|
| \`accent\`, \`accentFrom\`, \`accentTo\` | destaque, gradiente do medidor e das barras |
| \`highlight\` | barra ou coluna em destaque |
| \`featuredFrom\`, \`featuredTo\` | card em destaque (o 1º indicador) |
| \`navSelected\` + \`onNavSelected\` | item ativo do menu. **Sempre em par**: sem o texto, o contraste falha no escuro |
| \`signal\` | ponto antes do caminho e traço do rodapé |
| \`seriesActual\`, \`seriesTarget\` | realizado e meta no \`EvolutionChart\` |
| \`focus\`, \`fg\` | foco e tinta do texto (opcionais: a família já tem valores testados) |

Regras do logo:

- Sem \`darkSrc\` e sem \`plate.dark\`, o pacote põe o logo numa placa clara no escuro.
- Logo com letras brancas: \`plate: { light: "<cor da marca>", dark: false }\` (placa na cor da marca no claro, direto no vidro no escuro).
- \`width\`/\`height\` são o tamanho de exibição no topo (padrão 104 × 32).

Se o tema chegar num arquivo JSON (nome, rótulo, cores por modo, logo), leia os campos e passe para \`defineClientTheme\`; o arquivo do logo entra como asset do projeto (\`import logo from "./marca/logo.svg"\`). Confira o contraste do \`accent\` sobre a superfície (≥ 4,5:1) e do \`onNavSelected\` sobre o \`navSelected\`.

\`\`\`ts
// arquivo: src/tema.ts
import { defineClientTheme } from "@rbbt/ui";
import logo from "./marca/pedravela.svg";

/** Tema de cliente FICTÍCIO: Pedravela Calçados, nome inventado para o catálogo. */
export const cliente = defineClientTheme({
  id: "pedravela",
  name: "Pedravela Calçados",
  product: "Workspace",
  mark: "PVL",
  // Arquivo do projeto. Sem \`darkSrc\`, o pacote põe o logo numa placa clara no escuro.
  logo: { src: logo, alt: "Pedravela Calçados", width: 132, height: 32 },
  light: {
    accent: "#0f6f66",
    accentFrom: "#13857a",
    accentTo: "#62b8ab",
    highlight: "#13857a",
    focus: "#0f6f66",
    featuredFrom: "#0b3b37",
    featuredTo: "#14695f",
    navSelected: "#0b3b37",
    onNavSelected: "#ffffff",
    signal: "#d4532f",
    seriesActual: "#13857a",
    seriesTarget: "#7b6a5b",
  },
  dark: {
    accent: "#6fd3c4",
    accentFrom: "#2fa596",
    accentTo: "#8fe0d4",
    highlight: "#6fd3c4",
    focus: "#8fe0d4",
    featuredFrom: "#0e4a44",
    featuredTo: "#17766b",
    navSelected: "#145e56",
    onNavSelected: "#ffffff",
    signal: "#f08a6c",
    seriesActual: "#6fd3c4",
    seriesTarget: "#d3c3b4",
  },
});
\`\`\`

O logo do exemplo também é inventado (uma pedra com uma vela):

\`\`\`svg
<!-- arquivo: src/marca/pedravela.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="132" height="32" viewBox="0 0 132 32"><rect x="3" y="4" width="24" height="24" rx="9" fill="#13857a"/><path d="M15.5 9 21 21H9.5z" fill="#fff"/><text x="33" y="22" font-family="Plus Jakarta Sans, Helvetica, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="-0.4" fill="#0b3b37">pedravela</text></svg>
\`\`\`

## 3. Montar o shell, a barra de filtros, o cabeçalho e o rodapé

- **\`WorkspaceShell\`**: topo em vidro com a marca (padrão: nome, produto e logo do cliente), o menu de módulos, ações, troca de tema e perfil; o conteúdo principal com o link "Ir para o conteúdo"; e o rodapé. A navegação é **controlada**: \`module\` + \`onModuleChange\`. Em contêiner até 860 px o menu vira uma fileira rolável sob a marca; até 640 px, o layout de celular.
- **\`WorkspaceHeader\`**: \`path\` (caminho curto, com o ponto na cor \`signal\`), \`badge\` (ex.: "Dados fictícios"), \`title\` (a frase do módulo), \`subtitle\` e \`actions\` (ex.: Exportar).
- **\`FilterBar\`**: \`scope\` (recorte em pílula), \`period\` (pílulas Ontem/Semana/Mês), \`dates\` (por extenso) e \`coverage\` (\`{ covered, total, unit, href | onPress }\`: "7/8 lojas com dados"; \`null\` vira "Cobertura … indisponível", nunca "0/8"). Todos os valores são controlados.
- **\`WorkspaceFooter\`**: sigla (\`mark\` do cliente) com o traço de sinal, rótulo (\`product\`), \`note\` e um \`link\`.
- **\`PageContextProvider anatomy="lean"\`** em volta dos módulos: os widgets herdam fonte e período e usam a anatomia enxuta (a do Glass e do Smooth).

O código do passo 3 está no \`App.tsx\` do passo 6.

## 4. Montar cada módulo

Cada módulo é uma composição de componentes do pacote sobre os dados do recorte. A grade da página é do consumidor (só layout; superfícies, cores, tipografia e movimento vêm do pacote). As consultas de contêiner usam o contêiner \`rb-ws\`, criado pelo \`WorkspaceShell\`:

\`\`\`css
/* arquivo: src/layout.css */
/* Só a grade da página: superfícies, cores, tipografia e movimento vêm do pacote. */
body {
  margin: 0;
}

.ws-kpis {
  display: grid;
  grid-template-columns: 1.22fr 1fr 1fr 1fr;
  gap: 1.0625rem;
  margin-bottom: 1.375rem;
}

.ws-split {
  display: grid;
  grid-template-columns: minmax(0, 1.95fr) minmax(17.5rem, 1fr);
  gap: 1.375rem;
}

.ws-pilha {
  display: grid;
  gap: 1.375rem;
}

.ws-prioridades {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.125rem;
}

/* Composição da cesta: dois números lado a lado, sem caixas. */
.ws-cesta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.25rem;
}

.ws-cesta__item {
  display: grid;
  gap: 0.25rem;
}

.ws-cesta__item[data-fim] {
  text-align: right;
}

.ws-cesta__num {
  font-size: 1.625rem;
  font-weight: var(--rb-figure-weight);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
}

.ws-rotulo,
.ws-cesta__item > span:last-child,
.ws-cesta__nota {
  font-size: var(--rb-text-label);
  color: var(--rb-fg-muted);
}

.ws-cesta__nota {
  margin-top: 0.75rem;
}

/* Em direção à meta: o medidor no centro; a meta e a seta embaixo. */
.ws-meta__corpo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  height: 100%;
}

.ws-meta__corpo > :first-child {
  margin-block: auto;
}

.ws-meta__base {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  align-self: stretch;
  padding-top: 1rem;
  border-top: 1px solid var(--rb-border);
}

.ws-meta__base .ws-rotulo {
  display: block;
  margin-bottom: 0.25rem;
}

.ws-meta__valor {
  font-size: 1rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.ws-redondo {
  display: grid;
  flex: none;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--rb-glass-line, var(--rb-border));
  border-radius: 999px;
  color: var(--rb-fg);
  background: var(--rb-surface);
  box-shadow: var(--rb-smooth-shadow);
  cursor: pointer;
}

.ws-redondo > svg,
.ws-icone {
  width: 1rem;
  height: 1rem;
}

/* Cards de prioridade: número, etiqueta em pílula, área e "Ver evidência". */
.ws-prio__topo {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
}

.ws-prio__n {
  font-size: 0.9375rem;
  font-weight: 450;
  color: var(--rb-fg-muted);
}

.ws-prio__ir {
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  font-size: var(--rb-text-label);
}

.ws-prio__ir > svg {
  width: 0.875rem;
  height: 0.875rem;
}

.ws-detalhe {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@container rb-ws (max-width: 1180px) {
  .ws-kpis {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@container rb-ws (max-width: 860px) {
  .ws-split,
  .ws-prioridades {
    grid-template-columns: 1fr;
  }
}

@container rb-ws (max-width: 640px) {
  .ws-kpis,
  .ws-detalhe {
    grid-template-columns: 1fr;
  }
}
\`\`\`

Os dados do exemplo são linhas planas, como as de uma view. Num workspace real, troque estas funções pela leitura da view (Bases) ou de um JSON; o resto da página não muda.

\`\`\`ts
// arquivo: src/dados.ts
/**
 * Dados FICTÍCIOS da Pedravela Calçados, cliente inventado para o catálogo. Linhas planas, como as
 * de uma view: num workspace real, troque estas funções pela leitura da view ou de um JSON.
 * Sem leitura é \`null\`, nunca zero.
 */
import { addDays, type MixNode, type StatusTone, type TransferUnit } from "@rbbt/ui";

export type RecorteId = "rede" | "litoral";
export type PeriodoId = "ontem" | "semana" | "mes";

export const RECORTES: Record<RecorteId, string> = { rede: "Rede · 8 lojas", litoral: "Litoral · 3 lojas" };
export const PERIODOS: Record<PeriodoId, { rotulo: string; datas: string; dias: number }> = {
  ontem: { rotulo: "Ontem", datas: "26 de outubro de 2026", dias: 1 },
  semana: { rotulo: "Semana", datas: "20–26 de outubro de 2026", dias: 7 },
  mes: { rotulo: "Mês", datas: "1–26 de outubro de 2026", dias: 26 },
};
/** Relógio fixo do exemplo: "última leitura há…" não muda a cada visita. */
export const AGORA = "2026-10-26T09:00:00-03:00";
const ULTIMO_DIA = "2026-10-26";

const NOMES = ["Centro", "Lagoa", "Porto", "Serra", "Vale", "Praia", "Norte", "Sul"] as const;
const LITORAL: readonly string[] = ["Lagoa", "Porto", "Praia"];

export type LinhaLoja = {
  loja: string;
  nome: string;
  receita: number | null;
  receitaAnterior: number | null;
  notas: number | null;
  notasAnteriores: number | null;
  ultimaLeitura: string | null;
};

/** Uma linha por loja do recorte. A Loja Sul não enviou leitura; a Loja Norte está com leitura antiga. */
export function linhasDasLojas(recorte: RecorteId, periodo: PeriodoId): LinhaLoja[] {
  const dias = PERIODOS[periodo].dias;
  return NOMES.filter((nome) => recorte === "rede" || LITORAL.includes(nome)).map((nome) => {
    const i = NOMES.indexOf(nome);
    const base = { loja: \`loja-\${nome.toLowerCase()}\`, nome: \`Loja \${nome}\` };
    if (nome === "Sul") {
      return { ...base, receita: null, receitaAnterior: null, notas: null, notasAnteriores: null, ultimaLeitura: null };
    }
    const notas = (48 + i * 7) * dias;
    const receita = notas * (196 + i * 11);
    const variacao = nome === "Porto" ? -0.16 : 0.03 + (i % 4) * 0.018;
    return {
      ...base,
      receita,
      receitaAnterior: Math.round(receita / (1 + variacao)),
      notas,
      notasAnteriores: Math.round(notas / 1.04),
      ultimaLeitura: nome === "Norte" ? "2026-10-24T06:00:00-03:00" : "2026-10-26T06:00:00-03:00",
    };
  });
}

/** Resumo do recorte com o mesmo universo nos três números: só as lojas com leitura. */
export function resumir(linhas: readonly LinhaLoja[]) {
  const lidas = linhas.filter((l) => l.receita !== null);
  const soma = (campo: "receita" | "receitaAnterior" | "notas" | "notasAnteriores") =>
    lidas.length ? lidas.reduce((total, l) => total + (l[campo] ?? 0), 0) : null;
  const divide = (a: number | null, b: number | null) => (a === null || !b ? null : a / b);
  const receita = soma("receita");
  const receitaAnterior = soma("receitaAnterior");
  const notas = soma("notas");
  const notasAnteriores = soma("notasAnteriores");
  return { receita, receitaAnterior, notas, notasAnteriores, ticket: divide(receita, notas), ticketAnterior: divide(receitaAnterior, notasAnteriores) };
}

/** Peso de cada dia num ciclo de 7: a semana soma 7 e o mês (26 dias) soma 26, então o mesmo dia vale o mesmo nos dois. */
const PESOS = [0.82, 0.96, 0.89, 1.05, 1.28, 1.08, 0.92];

/** Realizado e meta por dia. A soma do realizado confere com a receita do recorte. */
export function ritmoDiario(receita: number | null, periodo: PeriodoId): Array<{ dia: string; realizado: number | null; meta: number | null }> {
  const dias = PERIODOS[periodo].dias;
  const primeiro = PERIODOS.mes.dias - dias;
  const dia = (i: number) => addDays(ULTIMO_DIA, i - dias + 1);
  if (receita === null) return Array.from({ length: dias }, (_, i) => ({ dia: dia(i), realizado: null, meta: null }));
  const pesos = Array.from({ length: dias }, (_, i) => PESOS[(primeiro + i) % 7] ?? 1);
  const somaPesos = pesos.reduce((a, b) => a + b, 0);
  const valores = pesos.map((p) => Math.floor((receita * p) / somaPesos));
  valores[dias - 1] = (valores[dias - 1] ?? 0) + receita - valores.reduce((a, b) => a + b, 0);
  const meta = Math.ceil((receita / dias) * 1.055);
  return valores.map((realizado, i) => ({ dia: dia(i), realizado, meta }));
}

interface Fatia {
  id: string;
  label: string;
  atual: number;
  comparavel: number;
  filhos?: readonly Fatia[];
}
const REFERENCIAS: readonly Fatia[] = [
  { id: "ref-01", label: "Referência 01", atual: 0.55, comparavel: 0.5 },
  { id: "ref-02", label: "Referência 02", atual: 0.45, comparavel: 0.5 },
];
const MARCAS: readonly Fatia[] = [
  { id: "propria", label: "Marca própria", atual: 0.62, comparavel: 0.65, filhos: REFERENCIAS },
  { id: "parceira", label: "Marca parceira", atual: 0.38, comparavel: 0.35, filhos: REFERENCIAS },
];
const LINHAS: readonly Fatia[] = [
  { id: "calcados", label: "Calçados", atual: 0.6, comparavel: 0.63, filhos: MARCAS },
  { id: "bolsas", label: "Bolsas", atual: 0.26, comparavel: 0.24, filhos: MARCAS },
  { id: "acessorios", label: "Acessórios", atual: 0.14, comparavel: 0.13, filhos: MARCAS },
];

/** Divide um inteiro pelas participações; o resto fica no último, para os filhos somarem o pai. */
function dividir(total: number, partes: readonly number[]): number[] {
  const valores = partes.map((p) => Math.round(total * p));
  valores[valores.length - 1] = total - valores.slice(0, -1).reduce((a, b) => a + b, 0);
  return valores;
}

function ramos(fatias: readonly Fatia[], atual: number, comparavel: number): MixNode[] {
  const atuais = dividir(atual, fatias.map((f) => f.atual));
  const bases = dividir(comparavel, fatias.map((f) => f.comparavel));
  return fatias.map((f, i) => {
    const current = atuais[i] ?? 0;
    const base = bases[i] ?? 0;
    return { id: f.id, label: f.label, current, base, ...(f.filhos ? { children: ramos(f.filhos, current, base) } : {}) };
  });
}

/** Árvore do mix (Linha → Marca → Referência), atual e comparável. Os filhos somam o pai. */
export function arvoreDoMix(atual: number | null, comparavel: number | null): MixNode | null {
  if (atual === null || comparavel === null) return null;
  return { id: "todas", label: "Todas as linhas", current: atual, base: comparavel, children: ramos(LINHAS, atual, comparavel) };
}

export const TAMANHOS = ["34", "35", "36", "37", "38", "39", "40"] as const;
const LOJAS_DO_ESTOQUE = ["Centro", "Lagoa", "Porto", "Vale"] as const;
const quantidade = (i: number, j: number) => ((i + j) % 4 === 0 ? 0 : 2 + ((i * j) % 9));

/** Estoque da Referência 01: uma linha por loja × tamanho. Loja Vale · 40 sem leitura (não é zero). */
export function linhasDeEstoque(): Array<Record<string, unknown>> {
  return LOJAS_DO_ESTOQUE.flatMap((nome, i) =>
    TAMANHOS.map((tamanho, j) => ({
      loja: \`loja-\${nome.toLowerCase()}\`,
      nome: \`Loja \${nome}\`,
      tamanho,
      quantidade: nome === "Vale" && tamanho === "40" ? null : quantidade(i, j),
      vendaSemanal: 5 + i * 2,
    })),
  );
}

/** Estoque e venda do tamanho 37 por loja, para o simulador (venda de 1 peça por semana). */
export function unidadesDaTransferencia(): TransferUnit[] {
  const j = TAMANHOS.indexOf("37");
  return LOJAS_DO_ESTOQUE.map((nome, i) => ({ id: \`loja-\${nome.toLowerCase()}\`, label: \`Loja \${nome}\`, stock: quantidade(i, j), weeklySales: 1 }));
}

/** Ações como linhas de uma base: a etapa vem em texto e passa por \`actionsFromRecords\`. */
export const LINHAS_DE_ACOES: ReadonlyArray<Record<string, unknown>> = [
  { id: "a1", titulo: "Investigar queda de notas", etapa: "sugerido", loja: "Loja Porto", responsavel: "Gestão comercial", prazo: "28/10", motivo: "Notas abaixo do período comparável; confira o fluxo antes de apontar a causa." },
  { id: "a2", titulo: "Revisar a grade de tamanhos", etapa: "aprovado", loja: "Loja Vale", responsavel: "Planejamento", prazo: "29/10", motivo: "Referência 01 com tamanhos zerados que vendem bem." },
  { id: "a3", titulo: "Transferir o tamanho 37", etapa: "executado", loja: "Loja Porto → Loja Lagoa", responsavel: "Logística", prazo: "27/10", motivo: "Simulação: cobertura da Loja Lagoa de 0 para 2 semanas no tamanho 37.", evidenciaExecucao: "Nota de transferência 1042 (fictícia) registrada em 27/10." },
  { id: "a4", titulo: "Trocar a vitrine de bolsas", etapa: "avaliado", loja: "Loja Centro", responsavel: "Visual merchandising", prazo: "24/10", motivo: "Bolsas com participação abaixo da rede.", evidenciaExecucao: "Vitrine trocada em 22/10.", evidenciaAvaliacao: "Bolsas +5% na semana seguinte, mesmo universo (fictício)." },
];

export interface Prioridade {
  id: string;
  n: string;
  etiqueta: string;
  tom: StatusTone;
  titulo: string;
  onde: string;
  texto: string;
  area: string;
}

/** Três prioridades ilustrativas; a terceira conta as lojas sem leitura do recorte. */
export function prioridades(recorte: RecorteId, semLeitura: number): Prioridade[] {
  return [
    { id: "p1", n: "01", etiqueta: "Alta prioridade", tom: "negative", titulo: "Investigar queda de notas", onde: "Loja Porto", texto: "Receita abaixo do comparável. Confira volume e ticket antes de concluir a causa.", area: "Comercial" },
    { id: "p2", n: "02", etiqueta: "Revisão de estoque", tom: "accent", titulo: "Revisar a grade de tamanhos", onde: "Loja Vale", texto: "O estoque total pode esconder falta nos tamanhos que mais vendem.", area: "Planejamento" },
    { id: "p3", n: "03", etiqueta: "Confiança dos dados", tom: "info", titulo: "Conferir a cobertura dos dados", onde: RECORTES[recorte], texto: \`\${semLeitura} \${semLeitura === 1 ? "loja" : "lojas"} sem leitura. Ausência não é venda zero.\`, area: "Operações" },
  ];
}
\`\`\`

Como cada módulo se monta (o código está no \`App.tsx\` do passo 6):

- **Visão geral.** Fileira de indicadores (\`.ws-kpis\`): três \`TrendIndicator\` (o 1º com \`featured\`, todos com \`comparison={{ label: "Período comparável" }}\` e \`description\` com a regra do número) e a cesta, um \`Panel\` com dois \`CountUp\` lado a lado (os números da cesta vêm prontos do cenário em JSON, passo 5). Abaixo (\`.ws-split\`), o \`EvolutionChart\` diário (realizado × meta, \`defaultView="daily"\`) e a meta: \`Panel\` com \`SegmentedGauge\` (\`value\` = receita ÷ soma da meta), um \`CountUp\` no centro e a seta que leva às Lojas. Por fim, "Onde atuar agora": \`WorkspaceSection\` com três \`OpenCard\` (número, \`StatusChip variant="pill"\`, título, onde e texto, área, "Ver evidência") que abrem o \`DetailPanel\`.
- **Lojas.** A mesma fileira de indicadores e a \`ComparisonTable\` com as lojas do recorte: receita, variação em R$ e em %, notas e ticket; total das lojas com dados; ordenação inicial pela variação; exportação do recorte; a linha abre o detalhe da loja. Loja sem leitura leva o selo "Sem dados" e valores \`null\`.
- **Mix.** \`MixExplorer\` com a árvore Linha → Marca → Referência, caminho controlado (volta à raiz quando o recorte muda) e uma nota em \`Panel\`.
- **Estoque.** \`StockGrid\` (grade tamanhos × lojas, zero destacado sem depender de cor, "sem leitura" ≠ zero, cobertura em semanas, posição datada; vira lista por loja abaixo de 560 px de contêiner), com a legenda e a nota do cliente (\`legend\`, \`note\`). O simulador abre **sob demanda**: o botão "Simular transferência" da grade (\`onSimulate\`) abre o \`TransferSimulatorDialog\`, um painel lateral (folha inferior no celular) com o foco dentro; Esc fecha e devolve o foco ao botão. Origem → destino → quantidade, efeito previsto nas duas pontas, "Simulação" no topo; não movimenta nada. A quantidade fica entre \`minQuantity\` e o teto (o menor entre o estoque da origem e \`maxQuantity\`); nos limites, "−" e "+" ficam desabilitados e o motivo aparece em texto. "Criar rascunho de avaliação" (\`onSaveDraft\`) fecha o painel e cria uma ação sugerida no plano.
- **Plano de ação.** \`ActionBoard\` com as ações de \`actionsFromRecords\`. O componente não guarda nada: \`onCreate\`, \`onMove\` e \`onEvidence\` gravam (aqui, em memória; numa base, com \`--idempotency-key\` e \`--expected-version\`). Executado e avaliado exigem evidência. Os botões de avanço podem levar o texto do cliente (\`advanceLabels\`, por etapa de destino); o nome acessível começa pelo mesmo texto.
- **Qualidade.** \`QualityOverview\`: cobertura, fonte e posição, mesmo universo (cada card aceita o título do cliente em \`label\`), mapa de cobertura por loja (\`coverageMapFromRecords\`, com \`staleAfterMs\` para "desatualizada") e "Origem e fórmula" (\`methodologyTitle\`).

**Valores compactos.** Formatos com \`maximumFractionDigits: 0\` (ex.: \`brl\`, R$ 3.323.187 na notação padrão) passam à compacta automática a partir de 1 milhão com até 2 casas: R$ 3,15 mi e R$ 3,32 mi, nunca os dois "R$ 3 mi". Indicador, gráfico, medidor, tabela e colunas fazem isso sozinhos. Num bloco montado pela página (ex.: realizado e meta em dois \`CountUp\`), use \`distinctCompactFormat([realizado, meta], formato, locale)\` e passe o resultado aos dois: valores diferentes nunca caem no mesmo texto compacto e saem com as mesmas casas.

**Painel de detalhe e contexto da página.** O \`DetailPanel\` é montado no escopo do \`RbTheme\`, mas continua dentro da árvore do React: o \`PageContextProvider\` da página vale para o que estiver dentro dele (indicadores do detalhe herdam a anatomia \`lean\` e a fonte). Não precisa de um provedor próprio.

## 5. Dados prontos em JSON (cenários pré-agregados)

O exemplo gera os números em código (\`dados.ts\`). Muitas vezes o cliente entrega um JSON já agregado: um cenário por recorte × período, textos com \`{marcadores}\`, formatos e ícones por nome e campos como caminho. Para esse caminho, o pacote tem um adaptador (\`createScenarioReader\` e as peças abaixo, 0.5.0-rc.2). Ele leva o JSON aos contratos dos widgets sem rede, sem HTML e sem transformar ausência em zero.

| Peça do JSON | Exemplo | No pacote |
|---|---|---|
| Cenário por recorte × período | \`cenarios.rede.semana\` | \`createScenarioReader({ scenarios, slice, period })\` → \`scenario\` (\`null\` quando o par não existe) ou \`pickScenario\` |
| Campo como caminho | \`"cesta.skusPorNota"\` | \`metric(caminho)\` (regra do \`toMetricValue\`), \`indicator({ value, previousValue })\` para o \`TrendIndicator\`, \`rows("lojas")\` para tabelas e adaptadores; fora do leitor, \`readPath\` e \`indicatorDataFromRecord\` também aceitam caminhos |
| Texto com marcadores | \`"{pecas} peças por nota"\` | \`text(texto, extras)\` ou \`fillTemplate\`: texto puro e números pelo Intl do \`locale\`; marcador sem valor fica visível (\`{nome}\`), para a falta aparecer na revisão |
| Formato por nome | \`"moeda"\` | \`format(nome)\` ou \`formatByName\`: confere a forma (estilo, moeda) e cai no padrão se o nome não existe |
| Ícone por nome | \`"Layers"\` | \`icon(nome)\` ou \`iconByName\`, num registro escolhido pela página: só os ícones listados entram no bundle |

Regras do caminho:

- **A página decide o valor de cada marcador.** O JSON só nomeia. \`{periodo}\` pode ser "20–26 de outubro" num subtítulo e "20–26 de outubro, 2026" no CSV: passe os valores comuns em \`vars\` e os do lugar em \`text(texto, extras)\`.
- **Dado já agregado vale como veio.** É o número que o cliente conferiu. Recalcule só para conferir (ex.: \`coverageFromRecords\` sobre as linhas do cenário deve dar a cobertura do JSON). Se divergir, mostre o do JSON e registre a diferença; não some de novo em silêncio.
- **Texto, nunca HTML.** \`fillTemplate\` devolve texto e o React escapa. Não use \`dangerouslySetInnerHTML\` com texto do JSON.
- **Ausência continua ausência.** Campo sem valor → \`null\` → "—" ou "Sem leitura", nunca 0.
- **Cada texto tem lugar no componente certo.** Botões do Plano (\`advanceLabels\`), legenda e nota do Estoque (\`legend\`, \`note\`), limites e nota do simulador (\`minQuantity\`, \`maxQuantity\`, \`note\`), títulos dos cards de Qualidade (\`label\`) e do bloco de método (\`methodologyTitle\`). Sem o texto do cliente, ficam os do pacote.
- **Linhas tipadas por \`interface\` passam direto** nos adaptadores (\`stockFromRecords\`, \`coverageFromRecords\`…). Um JSON importado tipa \`false\` como \`boolean\`: a placa do logo (\`plate\`) aceita os dois.

No exemplo, o JSON traz os textos que antes estavam no código e os números da cesta por recorte × período:

\`\`\`json arquivo=src/cenario.json
{
  "_aviso": "Cenário FICTÍCIO da Pedravela Calçados (cliente inventado para o catálogo). Textos e números de demonstração.",
  "formatos": {
    "decimal1": { "style": "number", "minimumFractionDigits": 1, "maximumFractionDigits": 1 },
    "moeda": { "style": "currency", "currency": "BRL", "maximumFractionDigits": 0 }
  },
  "textos": {
    "subtituloDosModulos": "{recorte} · análise demonstrativa, com evidências a um clique.",
    "cesta": {
      "titulo": "Composição da cesta",
      "icone": "Layers",
      "esquerda": { "valor": "cesta.skusPorNota", "formato": "decimal1", "rotulo": "SKUs / nota" },
      "direita": { "formato": "moeda", "rotulo": "preço / peça" },
      "nota": "{pecas} peças por nota · dados fictícios"
    },
    "estoque": {
      "legenda": "Zero = estoque zerado no exemplo (traço e rótulo, não só cor). Sem leitura é ausência, nunca zero.",
      "nota": "Cobertura fictícia: não use para transferir mercadoria.",
      "transferencia": { "minimo": 1, "maximo": 4, "nota": "Limite ilustrativo de {maximo} peças por transferência." }
    },
    "plano": {
      "botoes": { "aprovado": "Aprovar", "executado": "Registrar execução", "avaliado": "Registrar avaliação" }
    },
    "qualidade": {
      "cards": { "cobertura": "Lojas com dados", "fonte": "Fonte e posição", "universo": "Mesmo universo" },
      "metodo": "Origem e fórmula, sempre disponíveis."
    }
  },
  "cenarios": {
    "rede": {
      "ontem": { "cesta": { "skusPorNota": 2.3, "pecasPorNota": 2.5 } },
      "semana": { "cesta": { "skusPorNota": 2.4, "pecasPorNota": 2.6 } },
      "mes": { "cesta": { "skusPorNota": 2.4, "pecasPorNota": 2.7 } }
    },
    "litoral": {
      "ontem": { "cesta": { "skusPorNota": 2.1, "pecasPorNota": 2.4 } },
      "semana": { "cesta": { "skusPorNota": 2.2, "pecasPorNota": 2.5 } },
      "mes": { "cesta": { "skusPorNota": 2.3, "pecasPorNota": 2.5 } }
    }
  }
}
\`\`\`

\`\`\`ts
// arquivo: src/cenario.ts
/**
 * Cenário pronto em JSON: o adaptador do pacote lê o recorte × período, preenche os {marcadores}
 * com texto (nunca HTML) e resolve formatos e ícones por nome.
 */
import { createScenarioReader, type ActionBoardProps, type TemplateValue } from "@rbbt/ui";
import { Layers, Package } from "lucide-react";
import dados from "./cenario.json";

/** Ícones que o JSON pode pedir por nome: só estes entram no bundle. */
const ICONES = { Layers, Package };

export const textos = dados.textos;

/** Botões do Plano: o JSON nomeia as etapas em português; o pacote usa os ids das etapas. */
export const botoesDoPlano: ActionBoardProps["advanceLabels"] = {
  approved: textos.plano.botoes.aprovado,
  executed: textos.plano.botoes.executado,
  evaluated: textos.plano.botoes.avaliado,
};

/** Leitor do recorte × período atual. Quem decide o valor de cada marcador é a página. */
export function lerCenario(recorte: string, periodo: string, vars: Readonly<Record<string, TemplateValue>>) {
  return createScenarioReader({ scenarios: dados.cenarios, slice: recorte, period: periodo, formats: dados.formatos, icons: ICONES, vars, locale: "pt-BR" });
}

export type LeitorDoCenario = ReturnType<typeof lerCenario>;
\`\`\`

## 6. Ligar filtros e módulo à URL

- \`useUrlParam(nome, { history })\` guarda um parâmetro de busca e acompanha o Voltar do navegador.
- **Módulo** em \`?modulo=\` com \`history: "push"\` (padrão): Voltar volta ao módulo anterior.
- **Recorte, período e tema** em \`?recorte=\`, \`?periodo=\` e \`?tema=escuro\` com \`history: "replace"\`: não enchem o histórico.
- Valor desconhecido na URL cai no padrão (\`daUrl\` abaixo); refresh e link copiado abrem o mesmo estado.
- Parâmetros de busca dispensam reescrita no servidor: a rota é sempre o \`index.html\` do \`base\`, então acesso direto e refresh funcionam no Ravi Pages.
- O caminho do Mix fica em estado e volta à raiz quando o recorte muda.

\`\`\`tsx
// arquivo: src/App.tsx
import {
  ActionBoard,
  ActionButton,
  actionsFromRecords,
  ComparisonTable,
  CountUp,
  coverageFromRecords,
  coverageMapFromRecords,
  DetailPanel,
  EvolutionChart,
  fillTemplate,
  FilterBar,
  indicatorDataFromRecord,
  MixExplorer,
  OpenCard,
  PageContextProvider,
  Panel,
  QualityOverview,
  RbTheme,
  SegmentedGauge,
  StatusChip,
  StockGrid,
  stockFromRecords,
  toMetricValue,
  TransferSimulatorDialog,
  TrendIndicator,
  useUrlParam,
  useWidgetFrame,
  version,
  WorkspaceFooter,
  WorkspaceHeader,
  WorkspaceSection,
  WorkspaceShell,
  type ActionDraft,
  type ActionItem,
  type ActionStage,
  type ComparisonColumn,
  type ComparisonRow,
  type RbThemeMode,
  type WorkspaceModule,
} from "@rbbt/ui";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  ChevronRight,
  Download,
  Layers,
  LayoutDashboard,
  Package,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Store,
  Target,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import {
  AGORA,
  LINHAS_DE_ACOES,
  PERIODOS,
  RECORTES,
  TAMANHOS,
  arvoreDoMix,
  linhasDasLojas,
  linhasDeEstoque,
  prioridades,
  resumir,
  ritmoDiario,
  unidadesDaTransferencia,
  type LinhaLoja,
  type PeriodoId,
  type RecorteId,
} from "./dados";
import { botoesDoPlano, lerCenario, textos, type LeitorDoCenario } from "./cenario";
import { cliente } from "./tema";
import "./layout.css";

type ModuloId = "visao-geral" | "lojas" | "mix" | "estoque" | "plano" | "qualidade";

const MODULOS: ReadonlyArray<WorkspaceModule<ModuloId>> = [
  { id: "visao-geral", label: "Visão geral", icon: <LayoutDashboard /> },
  { id: "lojas", label: "Lojas", icon: <Store /> },
  { id: "mix", label: "Mix", icon: <Layers /> },
  { id: "estoque", label: "Estoque", icon: <Package /> },
  { id: "plano", label: "Plano de ação", icon: <CheckCheck /> },
  { id: "qualidade", label: "Qualidade", icon: <ShieldCheck /> },
];

const FRASES: Record<ModuloId, string> = {
  "visao-geral": "Sua pauta. Seu próximo movimento.",
  lojas: "Cada loja conta uma história.",
  mix: "O que move o resultado.",
  estoque: "Estoque no lugar certo.",
  plano: "Da decisão ao resultado.",
  qualidade: "Confiança antes da decisão.",
};

const brl = { style: "currency", currency: "BRL", maximumFractionDigits: 0 } as const;
const brlCompacto = { style: "currency", currency: "BRL", notation: "compact", maximumFractionDigits: 2 } as const;
const brl2 = { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 } as const;
const pct1 = { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 } as const;

const COLUNAS: ComparisonColumn[] = [
  { id: "receita", header: "Receita líquida", format: brl, aggregate: "sum", emphasis: "primary" },
  { id: "variacao", header: "Variação R$", format: brl, signed: true, polarity: "higher-is-better", aggregate: "sum" },
  { id: "variacaoPct", header: "Variação %", format: { style: "percent", maximumFractionDigits: 1 }, signed: true, polarity: "higher-is-better" },
  { id: "notas", header: "Notas", format: { style: "number" }, aggregate: "sum" },
  { id: "ticket", header: "Ticket médio", format: brl },
];

/** Valor da URL só vale se for um dos conhecidos; senão, o padrão. */
function daUrl<T extends string>(valor: string | null, validos: readonly T[], padrao: T): T {
  return validos.find((v) => v === valor) ?? padrao;
}

type Detalhe = { tipo: "loja" | "prioridade"; id: string };

export function App() {
  const [moduloUrl, setModuloUrl] = useUrlParam("modulo");
  const [recorteUrl, setRecorteUrl] = useUrlParam("recorte", { history: "replace" });
  const [periodoUrl, setPeriodoUrl] = useUrlParam("periodo", { history: "replace" });
  const [temaUrl, setTemaUrl] = useUrlParam("tema", { history: "replace" });
  const modulo = daUrl(moduloUrl, MODULOS.map((m) => m.id), "visao-geral");
  const recorte = daUrl<RecorteId>(recorteUrl, ["rede", "litoral"], "rede");
  const periodo = daUrl<PeriodoId>(periodoUrl, ["ontem", "semana", "mes"], "semana");
  const mode: RbThemeMode = temaUrl === "escuro" ? "dark" : "light";

  const [caminhoMix, setCaminhoMix] = useState<string[]>([]);
  const [detalhe, setDetalhe] = useState<Detalhe | null>(null);
  const [acoes, setAcoes] = useState<ActionItem[]>(() =>
    actionsFromRecords(LINHAS_DE_ACOES, {
      id: "id",
      title: "titulo",
      stage: "etapa",
      unit: "loja",
      owner: "responsavel",
      due: "prazo",
      rationale: "motivo",
      executedEvidence: "evidenciaExecucao",
      evaluatedEvidence: "evidenciaAvaliacao",
    }),
  );

  const lojas = useMemo(() => linhasDasLojas(recorte, periodo), [recorte, periodo]);
  const cobertura = coverageFromRecords(lojas, { value: "receita", id: "loja" });
  const resumo = useMemo(() => resumir(lojas), [lojas]);
  const { datas } = PERIODOS[periodo];
  const grupo = RECORTES[recorte];
  const lista = prioridades(recorte, cobertura.total - cobertura.covered);
  // Cenário pronto em JSON (passo 5): a página decide o valor de cada marcador.
  const leitor = lerCenario(recorte, periodo, { recorte: grupo, periodo: datas });

  const criarAcao = (rascunho: ActionDraft, motivo?: string) =>
    setAcoes((atual) => [...atual, { id: \`n\${atual.length + 1}\`, stage: "suggested", title: rascunho.title, unit: rascunho.unit, owner: rascunho.owner ?? "A definir", rationale: motivo }]);
  const moverAcao = (id: string, etapa: ActionStage, evidencia?: string) =>
    setAcoes((atual) =>
      atual.map((a) =>
        a.id !== id ? a : { ...a, stage: etapa, evidence: evidencia && (etapa === "executed" || etapa === "evaluated") ? { ...a.evidence, [etapa]: evidencia } : a.evidence },
      ),
    );

  const lojaAberta = detalhe?.tipo === "loja" ? lojas.find((l) => l.loja === detalhe.id) : undefined;
  const prioridadeAberta = detalhe?.tipo === "prioridade" ? lista.find((p) => p.id === detalhe.id) : undefined;

  return (
    <RbTheme family="glass" client={cliente} mode={mode} canvas style={{ minHeight: "100vh" }}>
      <WorkspaceShell
        modules={MODULOS}
        module={modulo}
        onModuleChange={(id) => setModuloUrl(id)}
        theme={{ mode, onChange: (m) => setTemaUrl(m === "dark" ? "escuro" : null) }}
        profile={{ name: "Pessoa de demonstração", initials: "PD" }}
        footer={<WorkspaceFooter note={\`Rbbt UI \${version} · cliente fictício · dados fictícios\`} link={{ label: "Abrir catálogo", href: "/catalogo/" }} />}
      >
        <WorkspaceHeader
          path={[cliente.name, "Inteligência comercial"]}
          badge="Dados fictícios"
          title={FRASES[modulo]}
          subtitle={modulo === "visao-geral" ? "Uma visão clara da rede. Três prioridades para começar." : leitor.text(textos.subtituloDosModulos)}
          actions={
            <ActionButton onPress={() => exportarCsv(lojas, grupo, datas)}>
              <Download aria-hidden="true" className="ws-icone" /> Exportar
            </ActionButton>
          }
        />
        <FilterBar
          scope={{
            label: "Grupo de lojas",
            value: recorte,
            icon: <Store />,
            options: [
              { value: "rede", label: RECORTES.rede },
              { value: "litoral", label: RECORTES.litoral },
            ],
            onChange: (valor) => {
              setRecorteUrl(valor);
              setCaminhoMix([]);
            },
          }}
          period={{
            label: "Período",
            value: periodo,
            options: [
              { value: "ontem", label: PERIODOS.ontem.rotulo },
              { value: "semana", label: PERIODOS.semana.rotulo },
              { value: "mes", label: PERIODOS.mes.rotulo },
            ],
            onChange: (valor) => setPeriodoUrl(valor),
          }}
          dates={datas}
          coverage={{ covered: cobertura.covered, total: cobertura.total, unit: "lojas", onPress: () => setModuloUrl("qualidade") }}
        />
        <PageContextProvider anatomy="lean" source="Dados fictícios · Pedravela Calçados" period={datas}>
          {modulo === "visao-geral" || modulo === "lojas" ? <Indicadores resumo={resumo} cobertas={cobertura.covered} grupo={grupo} leitor={leitor} /> : null}
          {modulo === "visao-geral" ? (
            <>
              <div className="ws-split">
                <Ritmo receita={resumo.receita} periodo={periodo} datas={datas} onVerLojas={() => setModuloUrl("lojas")} />
              </div>
              <WorkspaceSection
                title="Onde atuar agora"
                subtitle="Prioridades ilustrativas · impacto, urgência e confiança"
                action={
                  <ActionButton variant="link" onPress={() => setModuloUrl("plano")}>
                    Ver plano de ação <ArrowRight aria-hidden="true" className="ws-icone" />
                  </ActionButton>
                }
              >
                <div className="ws-prioridades">
                  {lista.map((p) => (
                    <OpenCard
                      key={p.id}
                      id={\`prioridade-\${p.id}\`}
                      onOpen={() => setDetalhe({ tipo: "prioridade", id: p.id })}
                      eyebrow={
                        <span className="ws-prio__topo">
                          <span className="ws-prio__n">{p.n}</span>
                          <StatusChip tone={p.tom} variant="pill">
                            {p.etiqueta}
                          </StatusChip>
                        </span>
                      }
                      title={p.titulo}
                      support={\`\${p.onde} · \${p.texto}\`}
                      status={<span className="ws-rotulo">{p.area}</span>}
                      aside={
                        <span className="ws-prio__ir">
                          Ver evidência <ChevronRight aria-hidden="true" />
                        </span>
                      }
                    />
                  ))}
                </div>
              </WorkspaceSection>
            </>
          ) : null}
          {modulo === "lojas" ? <Lojas lojas={lojas} resumo={resumo} grupo={grupo} datas={datas} onAbrir={(id) => setDetalhe({ tipo: "loja", id })} /> : null}
          {modulo === "mix" ? (
            <div className="ws-pilha">
              <MixExplorer
                title="Explorador de mix"
                context={\`\${grupo} · \${datas} vs. período comparável · dados fictícios\`}
                data={arvoreDoMix(resumo.receita, resumo.receitaAnterior)}
                metric={{ label: "Receita líquida", format: brl }}
                path={caminhoMix}
                onPathChange={(caminho) => setCaminhoMix(caminho)}
                levels={["Linha", "Marca", { label: "Referência", plural: "Referências" }]}
                periodLabels={{ current: "Atual", base: "Comparável" }}
                description="Linhas, marcas e referências fictícias para demonstrar a navegação."
                caveat="Estoque e custo não estão integrados: participação não comprova margem."
              />
              <Nota titulo="Do panorama à referência, sem perder o contexto." icone={<Layers />}>
                Explore uma linha, depois uma marca e uma referência. O recorte e o período continuam no topo.
              </Nota>
            </div>
          ) : null}
          {modulo === "estoque" ? <Estoque onRascunho={criarAcao} /> : null}
          {modulo === "plano" ? (
            <ActionBoard
              title="Plano de ação"
              subtitle="Demonstração em memória · aprovação não comprova execução"
              items={acoes}
              onCreate={(rascunho) => criarAcao(rascunho)}
              onMove={moverAcao}
              advanceLabels={botoesDoPlano}
            />
          ) : null}
          {modulo === "qualidade" ? (
            <QualityOverview
              title="Mapa de cobertura"
              subtitle={\`\${grupo} · leitura por loja no período\`}
              coverage={{ covered: cobertura.covered, total: cobertura.total, unit: "lojas", note: "Com dados no período. Fonte fictícia.", label: textos.qualidade.cards.cobertura }}
              snapshot={{ value: "26/10/2026, 06:00", note: "Posição fictícia. Última venda e sincronização são coisas diferentes.", label: textos.qualidade.cards.fonte }}
              universe={{ value: \`\${cobertura.covered} lojas comparáveis\`, note: "Comparações excluem lojas sem leitura.", label: textos.qualidade.cards.universo }}
              methodologyTitle={textos.qualidade.metodo}
              units={coverageMapFromRecords(lojas, { id: "loja", label: "nome", value: "receita", lastReading: "ultimaLeitura" }, { now: AGORA, staleAfterMs: 36 * 3600_000 })}
              now={AGORA}
              methodology={{
                source: "Dados fictícios · Pedravela Calçados",
                formula: "Receita = vendas − cancelamentos − devoluções. Ticket = receita ÷ notas.",
                coverage: "Loja com dados = receita numérica no período. Sem leitura fica ausente, nunca zero.",
              }}
            />
          ) : null}
        </PageContextProvider>
      </WorkspaceShell>
      <DetailPanel
        isOpen={Boolean(lojaAberta || prioridadeAberta)}
        onClose={() => setDetalhe(null)}
        titleId="detalhe-titulo"
        title={lojaAberta?.nome ?? prioridadeAberta?.titulo ?? ""}
        eyebrow={\`\${cliente.name} · dados fictícios\`}
        subtitle={lojaAberta ? \`\${grupo} · \${datas}\` : prioridadeAberta?.onde}
        size="wide"
        returnFocusId={prioridadeAberta ? \`prioridade-\${prioridadeAberta.id}\` : undefined}
        footer={
          <ActionButton
            variant="accent"
            onPress={() => {
              criarAcao({ title: prioridadeAberta?.titulo ?? "Investigar o resultado da loja", unit: lojaAberta?.nome ?? prioridadeAberta?.onde, owner: prioridadeAberta?.area });
              setDetalhe(null);
              setModuloUrl("plano");
            }}
          >
            Criar ação no plano
          </ActionButton>
        }
      >
        {lojaAberta ? (
          <div className="ws-detalhe">
            <TrendIndicator label="Receita da loja" data={indicatorDataFromRecord(lojaAberta, { value: "receita", previousValue: "receitaAnterior" })} format={brl} comparison={{ label: "Período comparável" }} />
            <TrendIndicator label="Notas de venda" data={indicatorDataFromRecord(lojaAberta, { value: "notas", previousValue: "notasAnteriores" })} comparison={{ label: "Período comparável" }} />
          </div>
        ) : null}
        {prioridadeAberta ? <p>{prioridadeAberta.texto} Confira os movimentos da fonte e compare o mesmo universo antes de decidir.</p> : null}
      </DetailPanel>
    </RbTheme>
  );
}

function Indicadores({ resumo, cobertas, grupo, leitor }: { resumo: ReturnType<typeof resumir>; cobertas: number; grupo: string; leitor: LeitorDoCenario }) {
  return (
    <div className="ws-kpis">
      <TrendIndicator
        featured
        label="Receita líquida"
        icon={<ShoppingBag />}
        data={indicatorDataFromRecord(resumo, { value: "receita", previousValue: "receitaAnterior" })}
        format={brlCompacto}
        comparison={{ label: "Período comparável" }}
        description={\`Soma das \${cobertas} lojas com dados (\${grupo}). Vendas menos cancelamentos e devoluções. Dados fictícios.\`}
      />
      <TrendIndicator
        label="Notas de venda"
        icon={<Receipt />}
        data={indicatorDataFromRecord(resumo, { value: "notas", previousValue: "notasAnteriores" })}
        comparison={{ label: "Período comparável" }}
        description="Quantidade de notas, não de pedidos. Mesmo universo da receita."
      />
      <TrendIndicator
        label="Ticket médio"
        icon={<Activity />}
        data={indicatorDataFromRecord(resumo, { value: "ticket", previousValue: "ticketAnterior" })}
        format={brl2}
        comparison={{ label: "Período comparável" }}
        description="Receita líquida dividida pelas notas do mesmo recorte."
      />
      <Cesta ticket={resumo.ticket} leitor={leitor} />
    </div>
  );
}

/** Composição da cesta: dois números lado a lado, sem caixas. Números, textos, formatos e ícone vêm do cenário (passo 5). */
function Cesta({ ticket, leitor }: { ticket: number | null; leitor: LeitorDoCenario }) {
  const { cesta } = textos;
  const skus = leitor.metric(cesta.esquerda.valor);
  const pecas = leitor.metric("cesta.pecasPorNota");
  const Icone = leitor.icon(cesta.icone) ?? Layers;
  const frame = useWidgetFrame({ status: "ready", hasData: skus !== null, locale: "pt-BR" });
  return (
    <Panel title={cesta.titulo} icon={<Icone />} frame={frame} locale="pt-BR">
      <div className="ws-cesta">
        <p className="ws-cesta__item">
          <CountUp value={skus} format={leitor.format(cesta.esquerda.formato)} className="ws-cesta__num" />
          <span>{cesta.esquerda.rotulo}</span>
        </p>
        <p className="ws-cesta__item" data-fim="">
          <CountUp value={ticket === null || !pecas ? null : Math.round(ticket / pecas)} format={leitor.format(cesta.direita.formato)} className="ws-cesta__num" />
          <span>{cesta.direita.rotulo}</span>
        </p>
      </div>
      <p className="ws-cesta__nota">{leitor.text(cesta.nota, { pecas })}</p>
    </Panel>
  );
}

/** Ritmo de vendas e meta lado a lado: a meta é a soma da meta diária do período. */
function Ritmo({ receita, periodo, datas, onVerLojas }: { receita: number | null; periodo: PeriodoId; datas: string; onVerLojas: () => void }) {
  const dias = ritmoDiario(receita, periodo);
  const meta = dias.reduce((total, d) => total + (d.meta ?? 0), 0);
  const razao = receita !== null && meta > 0 ? receita / meta : null;
  const frame = useWidgetFrame({ status: "ready", hasData: razao !== null, locale: "pt-BR" });
  return (
    <>
      <EvolutionChart
        title="Ritmo de vendas"
        subtitle={\`\${datas} · realizado × meta demonstrativa\`}
        data={{ points: dias.map((d) => ({ day: d.dia, actual: d.realizado, target: d.meta })) }}
        defaultView="daily"
        format={brl}
        height={240}
        methodology={{ formula: "Valores fictícios distribuídos por um perfil diário. A soma confere com a receita do recorte." }}
      />
      <Panel title="Em direção à meta" subtitle="Mesmo período e lojas cobertas" icon={<Target />} frame={frame} locale="pt-BR">
        <div className="ws-meta__corpo">
          <SegmentedGauge value={razao} label="Realizado sobre a meta do período" caption="da meta do período" size="15rem">
            <CountUp value={razao} format={pct1} phase="chart" />
          </SegmentedGauge>
          <div className="ws-meta__base">
            <div>
              <span className="ws-rotulo">Meta demonstrativa</span>
              <CountUp value={meta} format={brl} phase="chart" className="ws-meta__valor" />
            </div>
            <button type="button" className="ws-redondo rb-focus-ring" aria-label="Ver lojas" onClick={onVerLojas}>
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </Panel>
    </>
  );
}

function Lojas({ lojas, resumo, grupo, datas, onAbrir }: { lojas: LinhaLoja[]; resumo: ReturnType<typeof resumir>; grupo: string; datas: string; onAbrir: (id: string) => void }) {
  const linhas = lojas.map((l): ComparisonRow => {
    const receita = toMetricValue(l.receita);
    const anterior = toMetricValue(l.receitaAnterior);
    const notas = toMetricValue(l.notas);
    const variacao = receita !== null && anterior !== null ? receita - anterior : null;
    return {
      id: l.loja,
      label: l.nome,
      sublabel: "Unidade fictícia",
      values: { receita, variacao, variacaoPct: variacao !== null && anterior ? variacao / anterior : null, notas, ticket: receita !== null && notas ? receita / notas : null },
      status: receita === null ? [{ label: "Sem dados", tone: "warning" }] : [],
    };
  });
  return (
    <ComparisonTable
      title="Lojas, lado a lado"
      subtitle="Ordene, busque e abra uma loja para investigar."
      rowHeader="Loja"
      columns={COLUNAS}
      data={{ rows: linhas, total: { label: "Total das lojas com dados", values: { receita: resumo.receita, notas: resumo.notas } } }}
      defaultSort={{ columnId: "variacao", direction: "asc" }}
      onRowAction={(linha) => onAbrir(linha.id)}
      export={{ filename: "pedravela-lojas-ficticio", scope: \`\${grupo} · \${datas} · dados fictícios\` }}
      caveat="Centros de distribuição ficam fora do resultado comercial."
    />
  );
}

function Estoque({ onRascunho }: { onRascunho: (rascunho: ActionDraft, motivo?: string) => void }) {
  const grade = useMemo(
    () => stockFromRecords(linhasDeEstoque(), { unit: "loja", unitLabel: "nome", size: "tamanho", quantity: "quantidade", weeklySales: "vendaSemanal" }, TAMANHOS),
    [],
  );
  const unidades = useMemo(() => unidadesDaTransferencia(), []);
  const { transferencia } = textos.estoque;
  // Simulador sob demanda: o botão da grade abre o painel; Esc fecha e devolve o foco ao botão.
  const [simulando, setSimulando] = useState(false);
  // Origem com estoque (Loja Porto, 8 peças) e destino em ruptura (Loja Lagoa, 0 peça).
  const [origem, setOrigem] = useState("loja-porto");
  const [destino, setDestino] = useState("loja-lagoa");
  const [quantidade, setQuantidade] = useState(2);
  const nome = (id: string) => unidades.find((u) => u.id === id)?.label ?? id;
  return (
    <>
      <StockGrid
        title="Grade e cobertura"
        subtitle="Referência 01 · lojas fictícias"
        data={grade}
        asOf="26/10/2026"
        badge="Simulação"
        legend={textos.estoque.legenda}
        note={textos.estoque.nota}
        onSimulate={() => setSimulando(true)}
      />
      <TransferSimulatorDialog
        isOpen={simulando}
        onClose={() => setSimulando(false)}
        title="Simular transferência"
        context="Referência 01 · tamanho 37 · venda de 1 peça por semana"
        units={unidades}
        origin={origem}
        destination={destino}
        quantity={quantidade}
        onOriginChange={setOrigem}
        onDestinationChange={setDestino}
        onQuantityChange={setQuantidade}
        minQuantity={transferencia.minimo}
        maxQuantity={transferencia.maximo}
        minWeeksAtOrigin={4}
        note={fillTemplate(transferencia.nota, { maximo: transferencia.maximo })}
        onSaveDraft={(sim) => {
          setSimulando(false);
          onRascunho(
            { title: \`Avaliar transferência de \${sim.quantity} \${sim.quantity === 1 ? "peça" : "peças"}\`, unit: \`\${nome(origem)} → \${nome(destino)}\` },
            "Rascunho do simulador. Nada foi movimentado.",
          );
        }}
      />
    </>
  );
}

function Nota({ titulo, icone, children }: { titulo: string; icone: ReactNode; children: ReactNode }) {
  const frame = useWidgetFrame({ status: "ready", hasData: true, locale: "pt-BR" });
  return (
    <Panel title={titulo} icon={icone} frame={frame} locale="pt-BR">
      <p className="ws-rotulo">{children}</p>
    </Panel>
  );
}

/** CSV do recorte (o botão Exportar do cabeçalho). \`;\` e BOM para abrir certo em planilhas pt-BR. */
function exportarCsv(lojas: readonly LinhaLoja[], grupo: string, datas: string) {
  const celula = (v: number | null) => (v === null ? "Sem leitura" : String(v));
  const csv = [\`﻿Dados fictícios;\${grupo};\${datas}\`, "Loja;Receita;Notas", ...lojas.map((l) => [l.nome, celula(l.receita), celula(l.notas)].join(";"))].join("\\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = Object.assign(document.createElement("a"), { href: url, download: "pedravela-recorte-ficticio.csv" });
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
\`\`\`

## 7. Movimento, tokens e reduced motion

- O \`WorkspaceShell\` envolve o conteúdo com \`RbEntrance\` (\`replayKey\` = módulo): a entrada toca ao abrir a página, a cada troca de módulo e quando um bloco entra na tela na rolagem. Números contam até o valor (~0,8 s), linhas se desenham da esquerda para a direita, barras e colunas crescem da base em cascata e o arco do medidor percorre até o valor. A ordem é indicadores → gráficos → tabelas, em ~1,2 s.
- **Troca de filtro não é entrada**: o valor vai do antigo ao novo, sem cascata e sem voltar a zero; item novo nasce no valor final; um eixo novo (Semana → Mês) entra direto no lugar final. Nenhum quadro pode parecer dado ausente.
- Números próprios da página usam \`CountUp\` (\`phase\`: \`indicator\`, \`chart\` ou \`table\`); animações próprias leem \`useEntrance(fase)\` (\`entering\`, \`pending\`, \`run\`). \`useReplayEntrance()\` toca de novo (veja Workspace › Movimento › Tocar de novo).
- Duração e curva são tokens: \`--rb-duration-enter\` (800 ms), \`--rb-duration-stagger\` (60 ms), \`--rb-duration-page\` (1,2 s) e \`--rb-ease-enter\` (\`cubic-bezier(.33, 1, .68, 1)\`). O cliente pode ajustar por \`tokens\` (\`durationEnter\`, \`durationStagger\`, \`durationPage\`, \`easeEnter\`), mas não precisa.
- **Movimento reduzido** (\`prefers-reduced-motion: reduce\`): os tokens zeram e o valor final aparece direto. \`motion={false}\` no \`WorkspaceShell\` desliga a entrada.
- O leitor de tela recebe só o valor final. O dado nunca fica escondido esperando a animação.

## 8. Validar acessibilidade, celular e escuro

Antes de chamar o workspace de pronto:

- \`tsc --noEmit\` e \`vite build\` sem erro; console do navegador sem erro nos seis módulos.
- Desktop (1440 px e 1280 px) e celular (390 px e 360 px): sem rolagem horizontal; menu em fileira rolável até 860 px de contêiner, com o módulo ativo inteiro à vista ao abrir e ao trocar (sem rolar a página); Estoque em lista por loja abaixo de 560 px; tabela de Lojas em cartões no estreito; "Ordenar" com o critério inteiro, sem corte.
- Números compactos: valores diferentes do mesmo bloco nunca saem iguais (R$ 3,15 mi × R$ 3,32 mi, não "R$ 3 mi" duas vezes).
- Claro e escuro: troca no topo (\`aria-pressed\`); logo legível nos dois (placa ou \`darkSrc\`); \`navSelected\` e \`onNavSelected\` com contraste ≥ 4,5:1.
- Teclado: "Ir para o conteúdo", menu com \`aria-current="page"\`, filtros, tabela (linha abre o detalhe; Esc fecha e devolve o foco), simulador (abre pelo "Simular transferência" com o foco dentro; Esc fecha e devolve o foco ao botão; setas na quantidade; nos limites, "−" e "+" desabilitados com o motivo em texto) e Plano de ação (Alt + → avança, Alt + ← volta; evidência obrigatória).
- Idioma: com o navegador em outro idioma (ex.: en-US), os nomes dos botões do passo e os números continuam no \`locale\` da página.
- Glass: painel de detalhe e simulador com desfoque; o conteúdo de trás nunca aparece nítido sob o título.
- axe (WCAG 2.2 A/AA) sem violações no claro e no escuro, em cada módulo.
- Movimento reduzido: valores finais direto, sem cascata.
- URL: refresh e link direto com \`?modulo=…&recorte=…&periodo=…&tema=escuro\` abrem o mesmo estado; Voltar volta de módulo.
- Dados: ausência aparece como "Sem leitura", "Sem dados" ou "—", nunca 0; selo "Dados fictícios" visível quando os dados forem fictícios.

## O que fica no consumidor

Escolha dos módulos e da URL; textos (frases, caminho, selo, notas); dados, permissões e o backend que valida o acesso; exportação do recorte (CSV); aviso de confirmação (toast, numa região \`role="status"\`); persistência do Plano de ação; regras de negócio (o que é "loja com dados", metas, recortes); e o arquivo do logo. Nada disso entra no pacote.

Como resolver na página o que a reconstrução de 29/10 levantou (0.5.0-rc.2):

- **Título, favicon e \`noindex\`.** Ficam no \`index.html\` da página (o do passo 1 já traz título e \`noindex\`); o favicon é um arquivo do cliente.
- **Plano por recorte.** O \`ActionBoard\` mostra as ações que recebe. Filtre pelo recorte na página; uma etapa vazia mostra "Nenhuma ação nesta etapa".
- **Persistência do plano.** Callbacks gravam onde a página quiser: numa base, com \`--idempotency-key\` (o \`id\` da criação) e \`--expected-version\` (a versão que sobe a cada mudança); numa demonstração, \`localStorage\` com volta para a memória quando o armazenamento falhar, e o texto do aviso dizendo isso.
- **Aviso (toast).** Uma região \`role="status"\` com \`pointer-events: none\`, para não interceptar cliques no rodapé.
- **CSV.** Números crus, \`;\` e BOM abrem certo em planilhas pt-BR. Se o cliente pedir números formatados, use \`formatValue(valor, formato, locale).full\`.
- **Detalhe com gráfico.** O \`DetailPanel\` aceita qualquer conteúdo: um \`EvolutionChart\` da loja entra direto no corpo.
- **Ficha da prioridade.** Monte com \`<dl>\` e tokens (Evidência, Recomendação, Próximo responsável); um componente próprio fica para depois.
- **Nome acessível dos seletores.** O \`PillSelect\` segue o React Aria: o nome do botão é "valor + rótulo" ("RBR · 20 lojas Grupo de lojas"). Em testes, procure pelo rótulo com expressão regular, ex.: \`getByRole("button", { name: /Grupo de lojas/ })\`.
- **Tamanho do bundle.** O ECharts já carrega sob demanda. Divida módulos pesados com \`React.lazy\`. O \`fonts.css\` declara três famílias, mas o navegador só baixa as que a página usa.
- **Validação.** Uma fumaça própria com Playwright e axe nos 6 módulos (claro e escuro, desktop e celular), como a do pacote (\`scripts/receita-smoke.mjs\`), mais o passo 8.
`})))()}function f(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`Workspace/Receita`}),`
`,`
`,(0,m.jsx)(l,{children:u.slice(0,h)}),`
`,(0,m.jsx)(c,{of:r}),`
`,(0,m.jsx)(l,{children:u.slice(h)})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m,h;function g(){return(g=e((()=>{m=t(),a(),s(),d(),n(),h=u.indexOf(`
## Mapa`)})))()}g();export{h as corte,p as default};