# Escopo e limites conhecidos

Kit rc.9 em repositório público autorizado por Thiago; código aprovado e publicado no catálogo d22f11b. A rc.8 (eb89f81, preparação e682f09) continua disponível em packages/.

## Disponível

Além dos seis módulos e da estrutura Workspace:

- Lote 0: Heatmap.
- Lote 1: StockCapital, CoverageQuadrant e MixBalance.
- Lote 2: ResultWaterfall, BulletBar/BulletList, ParetoChart e DivergingBars.
- Lote 3: SmallMultiples, CalendarHeatmap e anotações no EvolutionChart.
- Lote 4: PriorityQueue, DecisionCard, EffectScoreboard e XrayProvider/XrayTrigger.
- Lote 5: tabela com minigráficos (sparklineColumnCell) e InsightCard/InsightList, com texto determinístico e link/callback para a evidência.
- rc.9 · Reports: ReportCard (carta 5:7), ReportDeck (filtros, busca, ordem e favoritos), ReportDialog/ReportBack (verso com gráfico e tabela), adaptadores `reportCardFromRecord`/`reportDetailFromRecords` e funções puras. Só acréscimos; nenhum contrato da rc.8 mudou. Migração em [MIGRACAO-RC8-RC9.md](MIGRACAO-RC8-RC9.md).

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
- A receita dos seis módulos nasceu na rc.2 e foi validada com rc.9; os novos widgets têm contratos próprios e não precisam ser usados artificialmente em todos os módulos.

A aprovação dos componentes não substitui o aceite da reconstrução pelo Michael.
