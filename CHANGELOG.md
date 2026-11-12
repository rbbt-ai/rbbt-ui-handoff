# Histórico da entrega

## 2026-11-12 · Atualização · 0.5.0-rc.10

- Biblioteca e catálogo do commit a4f8f7c (visual do DateRangePicker aprovado em 12/11), o mesmo catálogo publicado na release 25.
- Entra o seletor de período De/Até: DateRangePicker, filtro `kind: "date-range"` no ContextBar e funções puras de período. Só acréscimos; nenhum contrato da rc.9 mudou e o PageContextProvider continua igual.
- Bordas dos campos De/Até com contraste de pelo menos 3:1 nos temas Glass e Smooth, claro e escuro.
- O pacote declara `@internationalized/date` 3.12.4, a mesma versão que o React Aria já trazia; o lockfile do scaffold registra a dependência.
- Notas de migração rc.9 → rc.10 em [docs/MIGRACAO-RC9-RC10.md](docs/MIGRACAO-RC9-RC10.md), genéricas e válidas para qualquer workspace.
- Scaffold e lockfile fixam o tarball rc.10; projetos existentes migram explicitamente. Tarballs rc.6, rc.8 e rc.9 preservados.
- A documentação do tarball rc.10 não traz mais o nome da peça interna de um workspace que ficou na rc.9 (detalhes em docs/VALIDACAO.md).
- Evidências novas em evidencias/rc10/; rc.6, rc.8 e rc.9 preservadas. Reconstrução independente do Michael permanece pendente.

## 2026-11-10 · Atualização · 0.5.0-rc.9

- Biblioteca e catálogo do commit aprovado d22f11b, o mesmo catálogo publicado na release 22.
- Entram as cartas de relatório: ReportCard, ReportDeck e ReportDialog/ReportBack, com adaptadores e funções puras. Só acréscimos; nenhum contrato da rc.8 mudou.
- Notas de migração rc.8 → rc.9 em [docs/MIGRACAO-RC8-RC9.md](docs/MIGRACAO-RC8-RC9.md), genéricas e válidas para qualquer workspace.
- Scaffold e lockfile fixam o tarball rc.9; projetos existentes migram explicitamente. Tarballs rc.6 e rc.8 preservados.
- Evidências novas em evidencias/rc9/; rc.6 e rc.8 preservadas. Reconstrução independente do Michael permanece pendente.
- Ressalva: o subtítulo da galeria do catálogo mostra 0.4.0-rc.1 (detalhes em docs/VALIDACAO.md). Corrigido no mesmo dia no commit 35c30f1, com o catálogo da release 24.

## 2026-10-30 · Atualização · 0.5.0-rc.8

- Biblioteca, catálogo e receita atualizados juntos para os Lotes 0–5 aprovados.
- Entram decisão/efeito/raio-X, tabela com minigráficos e InsightCard.
- Scaffold e lockfile fixam o novo tarball; projetos existentes migram explicitamente.
- Lote 6 continua bloqueado; reconstrução independente do Michael permanece pendente.
- Evidências da rc.6 preservadas em evidencias/rc6/.

## 2026-10-30 · Primeiro kit · 0.5.0-rc.6

- Pacote e catálogo alinhados com os Lotes 0–3 do commit abf232f.
- Receita portátil dos seis módulos, tema NBA e cenários fictícios.
- Instalação por tarball com versões fixas e lockfile; servidor de catálogo local.
- Brief para reconstrução independente, checklist de aceite, proveniência e canal de retorno por Issues/PR.
- Ressalvas conhecidas e evidências registradas. Reconstrução pelo Michael pendente.
