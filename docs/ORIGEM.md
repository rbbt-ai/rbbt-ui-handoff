# Origem desta entrega

- Biblioteca: `@rbbt/ui` 0.5.0-rc.10.
- Código aprovado e publicado no catálogo: `a4f8f7c997abe5137a8b8657c7ba105ee6a6d841`. Acrescenta o seletor de período De/Até (DateRangePicker, filtro `kind: "date-range"` do ContextBar e funções puras de período) à rc.9, sem mudar contratos existentes. Visual aprovado por Thiago em 12/11/2026; depois da aprovação, a borda dos campos De/Até passou a ter contraste de pelo menos 3:1 (commit a16fa21) e os rótulos de versão das docs foram alinhados (a4f8f7c). A linha parte da rc.9 com a correção do catálogo (ac6393a, exemplo genérico de contrato).
- Tarball gerado por `npm pack` depois do build nesse commit e verificado como consumidor externo (evidencias/rc10/pack-report.json). 1.449.418 bytes, sha256 `b848bbe3966924d87d7c739cb3b4e2993ddb580c32b2e85188af188aed979261`, `integrity` `sha512-gkiExBkb4byDq6nXj4v4WvuI4WCB7ETV8gcxaf9UHvj4V8RlHEQAmhqx0mLuKFCRsPCD+fKzKTX3fegZf6/6HA==`.
- Catálogo: os mesmos 168 arquivos da release 25 do catálogo público (https://rbbt-rbbt-ui-studio.ravi.page/catalogo/), conferidos byte a byte com o build e com o conteúdo servido depois da publicação. Base `/catalogo/`, servida localmente por `npm run catalogo`.
- Notas de migração rc.9 → rc.10 em docs/MIGRACAO-RC9-RC10.md: cópia de `docs/date-range-picker-migracao.md` do pacote, com o comando de instalação do kit. As notas rc.8 → rc.9 continuam em docs/MIGRACAO-RC8-RC9.md.
- Tema NBA, logo e dados fictícios preservados do kit anterior, originados dos insumos congelados da rc.2. Originais permanecem intocados.
- RECEITA.md copia `docs/receita-workspace.md` desta versão com caminho relativo ao tarball do kit; da rc.9 para a rc.10 mudaram só o rótulo de versão e o comando de instalação. Referências históricas à rc.2 permanecem identificadas.
- O repositório distribui biblioteca compilada, documentação, catálogo e scaffold mínimo. Não contém o repositório-fonte da biblioteca nem a implementação pronta do workspace NBA.
- Entregas anteriores: rc.9 (código d22f11b; catálogo corrigido no commit do kit 35c30f1), rc.8 (código eb89f81, preparação e682f09, catálogo 47cb8e6) e rc.6 (abf232f), com tarballs preservados em packages/.
- O commit do kit e MANIFEST.sha256 identificam os bytes distribuídos. Evidências históricas em evidencias/rc6/, evidencias/rc8/ e evidencias/rc9/.
