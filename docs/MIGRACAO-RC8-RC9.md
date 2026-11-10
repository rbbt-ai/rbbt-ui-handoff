> Cópia de `docs/reports-migracao.md` do pacote `@rbbt/ui` 0.5.0-rc.9 (commit de origem d22f11b). Depois do `npm ci`, o
> mesmo texto está em `workspace/node_modules/@rbbt/ui/docs/reports-migracao.md`.
>
> No kit, o passo 1 abaixo é, a partir de `workspace/`: `npm install --save-exact ../packages/rbbt-ui-0.5.0-rc.9.tgz`,
> conferir no `package-lock.json` o `integrity` `sha512-AsmOwiHT…iJnSKg==` e repetir `npm run typecheck` e `npm run build`.

# Reports · notas de migração (0.5.0-rc.8 → 0.5.0-rc.9)

Estas notas partem da **0.5.0-rc.8 (commit eb89f81)**. Se o kit do seu workspace aponta para um commit que não existe no
repositório do Rbbt UI, migre a partir dessa versão. A rc.9 não tem tag.

## O que muda

Só acréscimos. Nenhum componente, tipo ou classe da rc.8 mudou de contrato.

- Componentes: `ReportCard`, `ReportDeck`, `ReportDialog` e `ReportBack` (o verso sem modal).
- Adaptadores: `reportCardFromRecord` e `reportDetailFromRecords` (linhas planas; ausência vira `null`, nunca zero).
- Funções puras: `filterReportCards`, `sortReportCards`, `countReportCards`, `reportAreas`, `reportMatchesQuery`,
  `hasReportFilter`, `reportCardLabel`, `reportRunSentence`, `reportTableToComparison`, `reportCardDomId`, `formatReportDay`,
  `formatRunTime`, `formatRunClock`, `isReportRunBusy`.
- Tipos: `ReportStatus`, `ReportRun`, `ReportRunState`, `ReportCardData`, `ReportHeadline`, `ReportDetail`, `ReportChart`,
  `ReportTable`, `ReportDeckState`, `ReportSort` e os mapeamentos dos adaptadores.
- CSS: `foundation/report-card.css`, já incluído em `@rbbt/ui/styles.css`. Classes `rb-report-*`.

## Diferenças em relação ao contrato proposto no pedido

| Pedido | rc.9 | Por quê |
| --- | --- | --- |
| `chart?: EvolutionChartData \| ColumnDatum[] \| BarDatum[]` | `chart?: ReportChart` com `kind: "evolution" \| "columns" \| "bars"` e `label` | Sem o `kind`, colunas e barras não se distinguem em tempo de execução; o `label` nomeia o gráfico para leitores de tela. |
| `table.rows: Record<string, string \| number \| null>[]` | igual, mais `rowKey?` e `totalLabel?` | A tabela vira `ComparisonTable` (busca, ordem, CSV e totais conferidos nas colunas `aggregate: "sum"`). |
| `headline.delta: { value, label, polarity }` | igual, mais `mode?: DeltaMode` | Margens e participações variam em pontos (p.p.). |
| `onRetry()` | igual no verso; na carta em erro, `onRetry(id?)` | A carta em erro também oferece “Tentar de novo”. |
| Estados `partial` e `stale` | prop `status` da carta (`WidgetStatus`) ou `card.partial` / `card.stale` | O mesmo `WidgetStatus` dos painéis do pacote. |
| Favoritos e ordem pessoal | `favorites` + `onFavoriteChange` no baralho | Ordem pessoal fica com a ordem `sort` + o filtro; o workspace grava. |

## Passo a passo no workspace

1. Atualize o tarball da rc.9 (cópia local, como nas rcs anteriores) e confira o `integrity` do `package-lock.json` antes do
   `npm ci`.
2. Menu “Reports” no `WorkspaceShell`: o módulo lê `?modulo=reports&area=&situacao=&busca=&ordem=` e passa ao `ReportDeck`
   (`area`, `status`, `query`, `sort`); `onChange` escreve de volta na URL.
3. `?relatorio=Q03` abre o verso: `onOpen(id)` grava o parâmetro; `ReportDialog` recebe `returnFocusId={reportCardDomId(id)}`;
   `onClose` remove o parâmetro.
4. Dados da fonte: cada linha de resultado vira carta com `reportCardFromRecord(linha, { fields, formats, statusAliases })`.
   O verso usa `reportDetailFromRecords({ rows, gaps, history }, { columns, chart, method })`.
5. Fila de execução: “Rodar de novo” chama `onRerun(id)`; o workspace grava o pedido (com a identidade de quem pediu) e
   atualiza `card.run` (`queued` com `queuePosition`, `running` com `startedAt`, `updated`, `blocked`/`failed` com `reason`).
   O polling fica no workspace; o componente só mostra.
6. Copiar link: `onCopyLink(id)` monta a URL do relatório e copia.
7. Tema do cliente: a arte usa `--rb-featured-from/to`. Para seguir outra arte do workspace, ajuste só
   `--rb-report-art-from` e `--rb-report-art-to` no tema; o componente não muda.

## Fica com o workspace

Menu, URL, leitura das tabelas da fonte, tabela de pedidos de execução, gatilho da fonte, identidade de quem pede e
polling. O Rbbt UI não faz rede nem guarda estado de filtro.

## Conferência

- Ausência nunca vira zero (`value: null` → “sem número” e o motivo).
- Tab percorre as cartas; Enter ou Espaço abre; Esc fecha e o foco volta à carta.
- axe sem violação no claro e no escuro com o verso aberto.
- Nenhuma chamada de rede saindo dos componentes.
