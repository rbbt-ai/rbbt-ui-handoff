> Cópia de `docs/date-range-picker-migracao.md` do pacote `@rbbt/ui` 0.5.0-rc.10 (commit de origem a4f8f7c). Depois do
> `npm ci`, o mesmo texto está em `workspace/node_modules/@rbbt/ui/docs/date-range-picker-migracao.md`.
>
> **O que muda da rc.9 para a rc.10:** só acréscimos. Entram o seletor de período `DateRangePicker` (contrato em
> `docs/date-range-picker.md` do pacote e no catálogo, em Widgets › DateRangePicker), o filtro
> `kind: "date-range"` do `ContextBar` e as funções puras de período (`dateRangeIssue`, `isValidDateRange`, `parseIsoDay`,
> `todayIso`, `presetRange`, `resolvePresets`, `formatDateRangeCompact`, `formatDateRangeLong` e `formatDateRangeLabel`).
> Nenhum contrato da rc.9 mudou; o `PageContextProvider` continua igual. O pacote passa a declarar
> `@internationalized/date` 3.12.4, a mesma versão que o React Aria já trazia.
>
> No kit, a atualização é, a partir de `workspace/`: `npm install --save-exact ../packages/rbbt-ui-0.5.0-rc.10.tgz`,
> conferir no `package-lock.json` o `integrity` `sha512-gkiExBkb…6HA==` e repetir `npm run typecheck` e `npm run build`.
> Um workspace ainda na rc.8 aplica antes as notas de [MIGRACAO-RC8-RC9.md](MIGRACAO-RC8-RC9.md).

# DateRangePicker — plano mínimo de migração (0.5.0-rc.10)

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

- Dentro do `ContextBar`: um item `{ kind: "date-range", id, label, value, onChange, min?, max?, presets? }` em `filters[]`. Os outros filtros não mudam. No modo recolhido (`collapseBelow`), o período entra no resumo como "01–15 out 2026".
- Fora dele: `<DateRangePicker label value onChange min max timeZone />`.
- Atalhos são opcionais: `presets={["thisMonth", "lastMonth", "year", "yearToDate"]}`.
- Remova a validação local: `onChange` só recebe períodos válidos e completos.

## 4. Texto do período

- `PageContextProvider.period` e `ContextBar.period` continuam recebendo string. Gere a canônica com `formatDateRangeLabel(periodo, { locale, timeZone })` ("Novembro 2026, 01–12").

## 5. Ausência de dados

- Período sem dados continua sendo responsabilidade da página: os widgets mostram o estado `empty` deles. O seletor não mostra cobertura nem assume ausência.

## 6. Conferir

- Teclado puro (abrir, digitar, navegar no calendário, Esc devolve o foco), 360 px (folha com 1 mês), claro e escuro, axe sem violações com o painel aberto.
- Compare antes e depois na mesma tela antes de pedir aprovação visual.
