# Migração rc.11 → rc.12

A rc.12 traz o **workspace em mosaico** e é só aditiva. Sem as props novas, cada componente funciona igual à rc.11. Nenhuma prop mudou de sentido e nenhuma dependência nova entrou.

## 1. Atualizar o pacote

```sh
npm install --save-exact ../packages/rbbt-ui-0.5.0-rc.12.tgz
```

Confira no `package-lock.json` o `integrity` do tarball rc.12: `sha512-j8C8WpeSF2B0t1Effwc4rr1lsQ1HcWi2Rt2zlti4Vvcj/eFMoCrZ0OYbBdmFM5AyOrSqI4vtaTOjBmQPypWg3A==`. Depois rode `npm run typecheck` e `npm run build`.

## 2. O que fica igual

- `WorkspaceShell` sem `navigation` (ou com `navigation="top"`) é o da rc.11.
- `StatCard` sem `variant="hero"`, `ComparisonTable` sem `polarity` nas linhas, e `InsightCard` e `DivergingBars` sem `density`: tudo como antes.
- `ResultWaterfall` não muda. A ponte com etapas nomeadas é um componente irmão (`BridgeChart`).

## 3. Adotar o mosaico (opcional)

Siga o passo 9 da [RECEITA](../RECEITA.md), "Montar o workspace em mosaico". Em resumo:

1. **Shell:** `navigation="sidebar"`, `groups` e `module.group` para agrupar, e `module.badge` para pendências. `contextBar` recebe a barra de contexto (região, período, "atualizado em"). No celular (< 768 px), a barra vira barra compacta com "Menu" e gaveta.
2. **Grade:** `BentoGrid` com `BentoItem` (`span` 1–4, `of={3}` para terços, `rows` 1–4). A ordem do DOM é a ordem de leitura e de Tab. Não reordene só pelo visual.
3. **Peças:**
   - um único `StatCard` `variant="hero"` por módulo, porque é o destaque cromático;
   - `ProportionCard` para composição;
   - `AgentActivityCard` para "o que os agentes fizeram hoje";
   - `BridgeChart` para ponte entre totais.
4. **Altura:** a grade de um módulo deve caber em até 1,5 tela a 1440×900. Se não couber, use `density="compact"` no `InsightCard` e nas `DivergingBars` ou abra o detalhe sob demanda (`OpenCard` + `DetailPanel`).

## 4. Polaridade por linha (DRE)

Em tabelas em que "maior é melhor" vale para receita e "menor é melhor" para custo, declare `polarity` na linha (`ComparisonRow.polarity`).

- A linha sobrepõe a polaridade da coluna, só nas colunas de variação.
- Subtotais e totais com polaridades misturadas ficam neutros, com o motivo.
- O CSV continua neutro.

## 5. Ausência ≠ zero

`ProportionCard`, `BridgeChart` e o minigráfico do hero tratam `null` como "sem dado": não desenham, não somam e marcam o total como parcial ou "sem como conferir". Não troque `null` por `0` nos dados.

## 6. Contratos

`docs/workspace-mosaico.md` no pacote instalado (`node_modules/@rbbt/ui/docs/`) e as seções rc.12 em `stat-card.md`, `comparison-table.md`, `insight-card.md` e `diverging-bars.md`. Exemplos no catálogo: Workspace › Mosaico, Widgets › Ponte em cascata e Widgets › ComparisonTable › Polaridade por linha (DRE).
