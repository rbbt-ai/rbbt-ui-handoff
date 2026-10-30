# Validação do kit · 30/10/2026

Ambiente: Node 22.22.0, npm 10.9.4, macOS, Chromium do Playwright.

- Biblioteca e catálogo gerados a partir do commit `abf232f89c79888326c6a712f995209cb399ef67` numa cópia isolada.
- 29 verificações do empacotamento passaram: conteúdo do tarball, imports declarados, tipos Bundler/NodeNext, build externo, CSS e fontes.
- Exemplo fictício da receita: typecheck estrito, build e **146/146** verificações no Chromium, seis módulos, desktop/celular, claro/escuro, axe, URL e console.
- Catálogo contém 289 entradas entre histórias e documentação.
- Evidências: `evidencias/pack-report.json`, `evidencias/visual-check.json` e capturas no mesmo diretório.

## Verificação de portabilidade

Clone Git limpo em outro diretório: integridade do manifesto, `npm run init`, `npm ci`, `npm run typecheck` e `npm run build` passaram. A dependência foi resolvida pelo tarball relativo do próprio kit, sem acesso ao código-fonte do UI Studio.

O scaffold compilado abriu no Chromium com a versão rc.6 visível e sem erros de página. Uma segunda execução de `init` recusou sobrescrever o projeto existente. Evidências: `evidencias/clone-check.json`, `evidencias/scaffold-check.json` e `evidencias/scaffold.png`.

Quatro capturas do catálogo/receita foram abertas e revisadas; a captura do Estoque em modo escuro foi feita a 360 px. A história do CalendarHeatmap também foi examinada diretamente com axe: nenhuma violação no estado inicial (`evidencias/catalogo-axe.json`). Isso não substitui os testes dos demais estados e detalhes apontados nas ressalvas.

## Limites da evidência

As capturas de receita mostram o exemplo fictício Pedravela já documentado. Não são a reconstrução NBA do Michael nem seu aceite. Ele ainda deve implementar e validar os seis módulos com os insumos NBA. Nenhuma publicação de site ou pacote foi feita.

## Preservação

O manifesto original da rc.2 foi conferido: 125 arquivos sem divergências. O código em andamento da rc.7 não foi utilizado nem editado.
