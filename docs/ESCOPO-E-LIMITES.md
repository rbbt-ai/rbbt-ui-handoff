# Escopo e limites conhecidos

Entrega privada rc.6; código-base `abf232f89c79888326c6a712f995209cb399ef67`.

## Disponível

Além dos componentes dos seis módulos e da estrutura Workspace:

- Lote 0: mapa de calor (Heatmap).
- Lote 1: StockCapital, CoverageQuadrant e MixBalance.
- Lote 2: ResultWaterfall, BulletBar/BulletList, ParetoChart e DivergingBars.
- Lote 3: SmallMultiples, CalendarHeatmap e anotações no EvolutionChart.

O catálogo usa Pedravela, cliente fictício. Marca NBA está somente nos insumos privados do consumidor. Os dados fornecidos são fictícios. Não são fornecidos os eventos reais extraídos da planilha NBA.

## Fora desta entrega

Lote 4 (fila v2, cartão de decisão, placar de efeito e raio-X completo), Lote 5 (tabela com minigráficos e insight em texto) e Lote 6. Não há dependência do trabalho incompleto da rc.7.

## Ressalvas registradas na revisão interna

- Lote 0: recuo visual forte no tema claro (opacidade 0,5); sem GIF de demonstração.
- Lote 1: item Brisa sem valor no treemap; anéis podem encostar em 360 px; revisão en-US não concluída.
- Lote 3: escala sem zero e ação “Ver todos” sem teste específico; axe com detalhe de anotação aberto foi complementado depois do commit de corte e **não integra a evidência da rc.6**.
- Safari, Firefox, leitor de tela e hospedagem real não estão cobertos por este handoff. A evidência local é Chromium; não equivale a certificação de acessibilidade.
- A receita dos seis módulos foi criada na rc.2; as referências históricas foram preservadas, e a versão/comando de instalação foram ajustados para este kit.
- Os novos widgets têm contratos e exemplos no catálogo; a receita dos seis módulos não foi ampliada para forçar todos os formatos em uma única tela.

As aprovações internas dos lotes não substituem o aceite da reconstrução pelo Michael.
