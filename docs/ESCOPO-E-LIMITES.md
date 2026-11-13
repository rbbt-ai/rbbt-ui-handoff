# Escopo e limites conhecidos

Kit rc.11 em repositório público autorizado por Thiago; código publicado no catálogo 3d03a10 (correção do período na anatomia full do ContextBar, pedida por Thiago em 13/11, sobre a rc.10 a4f8f7c, cujo visual do DateRangePicker foi aprovado em 12/11). A rc.10 (a4f8f7c), a rc.9 (d22f11b) e a rc.8 (eb89f81, preparação e682f09) continuam disponíveis em packages/.

## Disponível

Além dos seis módulos e da estrutura Workspace:

- Lote 0: Heatmap.
- Lote 1: StockCapital, CoverageQuadrant e MixBalance.
- Lote 2: ResultWaterfall, BulletBar/BulletList, ParetoChart e DivergingBars.
- Lote 3: SmallMultiples, CalendarHeatmap e anotações no EvolutionChart.
- Lote 4: PriorityQueue, DecisionCard, EffectScoreboard e XrayProvider/XrayTrigger.
- Lote 5: tabela com minigráficos (sparklineColumnCell) e InsightCard/InsightList, com texto determinístico e link/callback para a evidência.
- rc.9 · Reports: ReportCard (carta 5:7), ReportDeck (filtros, busca, ordem e favoritos), ReportDialog/ReportBack (verso com gráfico e tabela), adaptadores `reportCardFromRecord`/`reportDetailFromRecords` e funções puras. Só acréscimos; nenhum contrato da rc.8 mudou. Migração em [MIGRACAO-RC8-RC9.md](MIGRACAO-RC8-RC9.md).
- rc.10 · Período: DateRangePicker (De/Até digitável em dias ISO, calendário com 2 meses no desktop e folha com 1 mês abaixo de 640 px, atalhos opcionais, `min`/`max`, `timeZone`, estados `ready`/`loading`/`empty`/`disabled`/`error`), filtro `kind: "date-range"` no ContextBar e funções puras de período (`formatDateRangeLabel` gera o texto do período do PageContextProvider, que não muda). Só acréscimos; nenhum contrato da rc.9 mudou. Migração em [MIGRACAO-RC9-RC10.md](MIGRACAO-RC9-RC10.md).
- rc.11 · Período em campo: na anatomia `full` do ContextBar, o filtro `kind: "date-range"` é um campo igual aos vizinhos (rótulo em cima, mesma caixa, altura e foco do SelectField, na mesma linha da grade); na `lean`, pílula. `DateRangePicker` ganha `appearance: "pill" | "field"` (padrão `pill`). O painel dos filtros recolhido ocupa a largura disponível. Nota "CSS do consumidor": o pacote usa `@layer` e CSS global da página sem camada vence o pacote. Migração em [MIGRACAO-RC10-RC11.md](MIGRACAO-RC10-RC11.md).

Os dados são fictícios. O catálogo usa Pedravela; marca NBA fica nos insumos do consumidor destinados ao workspace privado. Não são fornecidos eventos reais extraídos da planilha NBA.

## Fora desta entrega

Lote 6: previsão/acuracidade, abastecimento/fornecedores, Sankey e promoções. Permanece bloqueado. A reconstrução independente NBA continua a cargo do Michael.

## Ressalvas da revisão interna

- Lote 0: recuo visual forte no tema claro (opacidade 0,5); sem GIF.
- Lote 1: Brisa sem valor no treemap; anéis podem encostar em 360 px; revisão en-US não concluída.
- Lote 3: escala sem zero e ação “Ver todos” sem teste específico. Axe com detalhe das anotações aberto foi coberto no Lote 4.
- Raio-X em celular: Esc no primeiro quadro pode chegar antes de o foco entrar na folha; teste espera 500 ms.
- InsightCard: CountUp parte de zero na entrada de valores presentes. Na troca de filtro, parte do valor anterior; ausência continua ausência.
- Raio-X na célula via column.xray existe, sem story/e2e dedicado. Detalhe da série e destinos de evidência do InsightCard foram testados.
- Safari, Firefox e leitor de tela não têm validação completa. Chromium/axe não equivalem a certificação de acessibilidade.
- Reports: com 45 cartas, a medição headless sem GPU registrou 8 quadros longos na rolagem (pior ~70 ms) nas famílias Glass e Smooth. Fica em observação se houver travamento visível.
- Reports: rede, URL, fila de execução, polling e identidade de quem pede ficam com o workspace; o componente só mostra.
- DateRangePicker: com o teclado no calendário, o Enter que marca o início leva o foco ao dia seguinte. É o comportamento do React Aria 1.22, coberto por teste.
- DateRangePicker: não foram testados o clique fora depois de digitar (a saída do campo confirma um período válido) nem uma data inexistente digitada nos segmentos (o React Aria limita o dia).
- DateRangePicker: o alvo de 44 px foi medido só na folha do celular. No desktop com ponteiro grosso, a área vem do `::before` e não foi medida.
- A receita dos seis módulos nasceu na rc.2 e foi validada com rc.11; os novos widgets têm contratos próprios e não precisam ser usados artificialmente em todos os módulos.

A aprovação dos componentes não substitui o aceite da reconstrução pelo Michael.
