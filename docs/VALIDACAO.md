# Validação da entrega rc.8

Ambiente: Node 22.22.0, npm 10.9.4, macOS e Chromium.

Fonte: código aprovado eb89f81, preparação de dependência/lockfile e documentação e682f09. Instalação limpa com npm ci, build da biblioteca/demos, typecheck e catálogo completo passaram. Catálogo com 360 entradas; varredura de marca NBA nos arquivos públicos sem ocorrências.

Pacote testado como consumidor externo: conteúdo, tipos Bundler/NodeNext, build, CSS e fontes. Exemplo da receita: 146/146 verificações em seis módulos, desktop/celular, claro/escuro, axe, URL e console. Evidência em evidencias/rc8/pack-report.json.

## Limites

Os testes da receita são sobre o exemplo fictício Pedravela. Não são a reconstrução NBA do Michael, que permanece pendente. Safari, Firefox e leitor de tela não têm validação completa. Ressalvas dos widgets em ESCOPO-E-LIMITES.md.

As evidências da entrega rc.6 permanecem identificadas em evidencias/rc6/ e no histórico Git; não são apresentadas como testes novos da rc.8.
