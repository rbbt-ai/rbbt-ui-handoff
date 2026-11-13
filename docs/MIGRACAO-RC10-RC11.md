> Cópia de `docs/date-range-picker-migracao.md` do pacote `@rbbt/ui` 0.5.0-rc.11 (commit de origem 3d03a10). Depois do
> `npm ci`, o mesmo texto está em `workspace/node_modules/@rbbt/ui/docs/date-range-picker-migracao.md`.
>
> **O que muda da rc.10 para a rc.11:** só correções e um acréscimo opcional; nenhuma prop muda de sentido.
> - Na anatomia `full` do `ContextBar` (a padrão), o filtro `kind: "date-range"` passa a ser um campo igual aos
>   vizinhos: rótulo em cima e a mesma caixa, altura, borda, raio e foco do `SelectField`, na mesma linha da grade.
>   Na anatomia `lean` ele continua em pílula. O painel dos filtros do modo recolhido também usa o campo e ocupa a
>   largura disponível (até 32rem).
> - `DateRangePicker` ganha a prop opcional `appearance: "pill" | "field"` (padrão `pill`, igual à rc.10). Use
>   `appearance="field"` quando a página monta a própria linha de filtros ao lado de um `SelectField`.
> - Nota **CSS do consumidor** (seção 6 abaixo e `docs/date-range-picker.md` do pacote): o pacote usa `@layer`; CSS
>   global da página sem camada (`button`, `input`, `:focus-visible`) vence o pacote e pode desenhar caixas extras.
>
> No kit, a atualização é, a partir de `workspace/`: `npm install --save-exact ../packages/rbbt-ui-0.5.0-rc.11.tgz`,
> conferir no `package-lock.json` o `integrity` `sha512-d9Rv91C5…UwvIA==` e repetir `npm run typecheck` e `npm run build`.
> Um workspace ainda na rc.9 aplica antes as notas de [MIGRACAO-RC9-RC10.md](MIGRACAO-RC9-RC10.md).

# DateRangePicker — plano mínimo de migração (0.5.0-rc.10, atualizado na rc.11)

Para páginas que já têm um seletor De/Até próprio, fora do catálogo. Estado do componente: **visual aprovado pelo Thiago em 12/11/2026**. A migração é aditiva: nada no `ContextBar` nem no `PageContextProvider` muda para quem não usa o seletor.

## 1. Levantar o que existe

- Onde o De/Até aparece (topo da página, filtro, painel) e quem guarda o estado (componente, URL, store).
- Formato do estado: `Date`, timestamp ou texto. Anote o fuso usado para "hoje".
- Quem lê o período: consultas de dados, títulos e textos de contexto, links compartilhados.

## 2. Passar o estado para dias ISO

- O seletor trabalha com `{ from: "AAAA-MM-DD", to: "AAAA-MM-DD" } | null`.
- De `Date` para dia ISO, converta **no fuso da página**, nunca com `toISOString().slice(0, 10)` sobre uma data local (o dia muda conforme o fuso). Para "hoje", use `todayIso(timeZone)`.
- Período lido da URL: valide com `dateRangeIssue(valor, { min, max })`. Se vier inválido, passe-o assim mesmo (a pílula diz "Período inválido" e explica) ou `null`; nunca troque em silêncio por um período padrão.

## 3. Trocar o controle

- Dentro do `ContextBar`: um item `{ kind: "date-range", id, label, value, onChange, min?, max?, presets? }` em `filters[]`. Os outros filtros não mudam. Desde a rc.11, na anatomia `full` (a padrão) o período é um campo igual aos vizinhos, com rótulo em cima, na mesma linha da grade; na `lean`, uma pílula. No modo recolhido (`collapseBelow`), o período entra no resumo como "01–15 out 2026".
- Fora dele: `<DateRangePicker label value onChange min max timeZone />`. Ao lado de outros campos (`SelectField`), use `appearance="field"` para ter a mesma caixa, altura e foco.
- Atalhos são opcionais: `presets={["thisMonth", "lastMonth", "year", "yearToDate"]}`.
- Remova a validação local: `onChange` só recebe períodos válidos e completos.

## 4. Texto do período

- `PageContextProvider.period` e `ContextBar.period` continuam recebendo string. Gere a canônica com `formatDateRangeLabel(periodo, { locale, timeZone })` ("Novembro 2026, 01–12").

## 5. Ausência de dados

- Período sem dados continua sendo responsabilidade da página: os widgets mostram o estado `empty` deles. O seletor não mostra cobertura nem assume ausência.

## 6. CSS da página (rc.11)

- Apague o CSS do seletor antigo junto com o componente: classes próprias e regras globais que ele trazia.
- O pacote usa `@layer`. CSS global da página **sem camada** (`button`, `input`, `:focus-visible` e afins) vence qualquer camada do pacote e pode desenhar caixas, bordas ou anéis extras dentro do seletor. Escope essas regras na marcação da página ou declare a camada da página antes da do pacote (`@layer pagina;` no topo do primeiro CSS, antes de `@rbbt/ui/styles.css`). Detalhes em [CSS do consumidor](date-range-picker.md#css-do-consumidor).

## 7. Conferir

- Teclado puro (abrir, digitar, navegar no calendário, Esc devolve o foco), 360 px (folha com 1 mês), claro e escuro, axe sem violações com o painel aberto.
- Na linha de filtros: o período tem o mesmo topo e a mesma altura dos campos vizinhos, nada se sobrepõe e o anel de foco não cobre o vizinho.
- Compare antes e depois na mesma tela antes de pedir aprovação visual.
