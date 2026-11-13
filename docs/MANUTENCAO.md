# Manutenção da entrega

1. Partir de um commit aprovado da biblioteca, em ambiente separado do desenvolvimento em andamento.
2. Gerar biblioteca, catálogo e documentação da mesma versão. Atualizar o consumidor mínimo e lockfile.
3. Rodar a validação externa e o fluxo clone → verify → init → npm ci → typecheck → build.
4. Atualizar docs/VALIDACAO.md e CHANGELOG.md. Gerar MANIFEST.sha256 apenas dos arquivos distribuídos (excluir o próprio manifesto, .git, workspace, node_modules e saídas temporárias).
5. Abrir PR de entrega com nova versão do tarball; não substituir o conteúdo de uma versão já entregue. Aprovar o PR e comunicar o commit ao consumidor.
6. No projeto consumidor, fazer a migração explícita da dependência, atualizar lockfile e repetir os testes. Preservar dados e implementação do consumidor.

Neste ciclo não usamos tags, Releases ou publicação no npm. O repositório foi tornado público por Thiago para o acesso do Michael. A atualização rc.8 e a publicação do catálogo foram autorizadas em 30/10. A entrega rc.9 foi pedida por Thiago em 10/11, com o catálogo rc.9 já publicado (release 22); segue em branch própria e PR. A entrega rc.10 foi pedida por Thiago em 12/11, com o catálogo rc.10 já publicado (release 25); segue na branch entrega/rc10, montada sobre a entrega/rc9 porque o PR da rc.9 ainda não tinha sido aceito. A entrega rc.11 atende ao pedido de Thiago em 13/11 de resolver o período sobreposto e manter o Michael atualizado, com o catálogo rc.11 já publicado (release 27); segue na branch entrega/rc11, montada sobre a entrega/rc10 pelo mesmo motivo. Futuras entregas seguem a autorização correspondente.
