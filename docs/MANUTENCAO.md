# Manutenção da entrega

1. Partir de um commit aprovado da biblioteca, em ambiente separado do desenvolvimento em andamento.
2. Gerar biblioteca, catálogo e documentação da mesma versão. Atualizar o consumidor mínimo e lockfile.
3. Rodar a validação externa e o fluxo clone → verify → init → npm ci → typecheck → build.
4. Atualizar docs/VALIDACAO.md e CHANGELOG.md. Gerar MANIFEST.sha256 apenas dos arquivos distribuídos (excluir o próprio manifesto, .git, workspace, node_modules e saídas temporárias).
5. Abrir PR de entrega com nova versão do tarball; não substituir o conteúdo de uma versão já entregue. Aprovar o PR e comunicar o commit ao consumidor.
6. No projeto consumidor, fazer a migração explícita da dependência, atualizar lockfile e repetir os testes. Preservar dados e implementação do consumidor.

Neste ciclo não usamos tags, Releases ou publicação no npm. O envio inicial ao repositório privado foi autorizado por Thiago; futuras publicações seguem a autorização correspondente.
