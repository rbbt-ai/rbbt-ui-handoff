# Origem desta entrega

- Biblioteca: `@rbbt/ui` 0.5.0-rc.12.
- Código publicado no catálogo: `60479cdf9f16beeb967d183121c6aa7e6d1e169f`, sobre a rc.11 (3d03a10). Traz o workspace em mosaico, todo aditivo:
  - barra lateral do `WorkspaceShell` (`navigation="sidebar"`, com gaveta no celular);
  - `BentoGrid`/`BentoItem`;
  - `StatCard` `variant="hero"`;
  - `ProportionCard` e `AgentActivityCard`;
  - `BridgeChart` (ponte em cascata);
  - `ComparisonRow.polarity` (polaridade por linha);
  - `density="compact"` no `InsightCard` e nas `DivergingBars`.
  
  As decisões estão no repositório-fonte em `docs/workspace-mosaico/DECISOES.md` e o contrato em `docs/workspace-mosaico.md` do pacote. Nenhum contrato da rc.11 mudou de sentido. A fonte segue em `f8514cf`, que só acrescenta as peças novas à checagem do consumidor externo.
- Tarball gerado por `npm pack` depois do build nesse commit e verificado como consumidor externo, com as peças novas (evidencias/rc12/pack-report.json). 1.507.034 bytes, 238 arquivos, sha256 `cd3cdc7b4211f79e0a71e4c6e874e8294a0fea3f6f030a59b16ace2aad713319`, `integrity` `sha512-j8C8WpeSF2B0t1Effwc4rr1lsQ1HcWi2Rt2zlti4Vvcj/eFMoCrZ0OYbBdmFM5AyOrSqI4vtaTOjBmQPypWg3A==`.
- Catálogo: os mesmos 176 arquivos da release 28 do catálogo público (https://rbbt-rbbt-ui-studio.ravi.page/catalogo/), conferidos byte a byte com o build e com o conteúdo servido depois da publicação. Base `/catalogo/`, servida localmente por `npm run catalogo`.
- As notas de migração rc.11 → rc.12 em docs/MIGRACAO-RC11-RC12.md foram escritas para o kit e são genéricas. As notas anteriores continuam em docs/MIGRACAO-RC10-RC11.md, docs/MIGRACAO-RC9-RC10.md e docs/MIGRACAO-RC8-RC9.md.
- Tema do cliente da reconstrução, logo e dados fictícios foram preservados do kit anterior; vêm dos insumos congelados da rc.2. Os originais permanecem intocados.
- RECEITA.md copia `docs/receita-workspace.md` desta versão, com caminho relativo ao tarball do kit. Da rc.11 para a rc.12 entraram o passo 9 ("Montar o workspace em mosaico"), o rótulo de versão e o comando de instalação. Referências históricas à rc.2 continuam identificadas.
- O repositório distribui biblioteca compilada, documentação, catálogo e scaffold mínimo. Não contém o repositório-fonte da biblioteca nem a implementação pronta do workspace.
- Entregas anteriores, com tarballs preservados em packages/:
  - rc.11: código 3d03a10, kit 11f33f2;
  - rc.10: código a4f8f7c, kit 9dab9c6;
  - rc.9: código d22f11b, catálogo corrigido no commit do kit 35c30f1;
  - rc.8: código eb89f81, preparação e682f09, catálogo 47cb8e6;
  - rc.6: abf232f.
- O commit do kit e o MANIFEST.sha256 identificam os bytes distribuídos. Evidências históricas em evidencias/rc6/, evidencias/rc8/, evidencias/rc9/, evidencias/rc10/ e evidencias/rc11/.
