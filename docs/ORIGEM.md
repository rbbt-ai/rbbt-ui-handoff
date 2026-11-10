# Origem desta entrega

- Biblioteca: `@rbbt/ui` 0.5.0-rc.9.
- Código aprovado e publicado no catálogo: `d22f11b1a587e6149255793ee5fe409869341d33`. Acrescenta as cartas de relatório (ReportCard, ReportDeck e ReportDialog) aos Lotes 0–5 da rc.8, sem mudar contratos existentes, e tira o nome de cliente do pacote e do catálogo.
- Tarball gerado por `npm pack` depois do build nesse commit e verificado como consumidor externo (evidencias/rc9/pack-report.json). `integrity` `sha512-AsmOwiHTMOAsEZOLsG+NXzyc0fY+T7FEFr9sARrJv3b+6nERVDETrlafvphq2RT05luCq84ndDiisFWwiJnSKg==`.
- Catálogo: os mesmos 167 arquivos da release 22 do catálogo público (https://rbbt-rbbt-ui-studio.ravi.page/catalogo/), conferidos byte a byte com o build na publicação. Base `/catalogo/`, servida localmente por `npm run catalogo`.
- Notas de migração rc.8 → rc.9 em docs/MIGRACAO-RC8-RC9.md: cópia de `docs/reports-migracao.md` do pacote, com o comando de instalação do kit.
- Tema NBA, logo e dados fictícios preservados do kit anterior, originados dos insumos congelados da rc.2. Originais permanecem intocados.
- RECEITA.md copia a documentação desta versão com caminho relativo ao tarball do kit; a receita não mudou entre rc.8 e rc.9. Referências históricas à rc.2 permanecem identificadas.
- O repositório distribui biblioteca compilada, documentação, catálogo e scaffold mínimo. Não contém o repositório-fonte da biblioteca nem a implementação pronta do workspace NBA.
- Entregas anteriores: rc.8 (código eb89f81, preparação e682f09, catálogo 47cb8e6) e rc.6 (abf232f), com tarballs preservados em packages/.
- O commit do kit e MANIFEST.sha256 identificam os bytes distribuídos. Evidências históricas em evidencias/rc6/ e evidencias/rc8/.
