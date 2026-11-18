# Rbbt UI · handoff para Michael

Kit de consumo de **@rbbt/ui 0.5.0-rc.12**, baseado no commit de origem `60479cdf9f16beeb967d183121c6aa7e6d1e169f`. Contém a biblioteca compilada, catálogo da mesma versão, receita, tema NBA e dados fictícios. O Michael reconstrói o workspace em outra máquina e devolve as lacunas.

Catálogo público da mesma versão: https://rbbt-rbbt-ui-studio.ravi.page/catalogo/

## Começar

Pré-requisitos: Git, Node **>=22.12.0** e npm. Referência validada: Node 22.22.0 / npm 10.9.4. A instalação inicial baixa dependências do npm; o catálogo incluído funciona localmente sem rebuild e sem acesso ao Ravi.

```sh
git clone https://github.com/rbbt-ai/rbbt-ui-handoff.git
cd rbbt-ui-handoff
git rev-parse HEAD
# Se usa nvm: nvm install && nvm use
npm run verify
npm run catalogo
```

O repositório é público por decisão de Thiago em 30/10/2026, para permitir acesso ao Michael. O clone HTTPS não exige autenticação. Escrita de branches e PRs depende das permissões da conta; nunca grave tokens no repositório.

Abra http://127.0.0.1:4400/catalogo/. Em outro terminal, na raiz do repositório:

```sh
git switch -c michael/workspace-nba-rc12
npm run init
cd workspace
npm ci
npm run typecheck
npm run build
npm run dev
```

Abra http://127.0.0.1:5173/workspaces/nba-glass-receita/. A tela inicial confirma que o pacote carrega; **não é o workspace pronto**. O scaffold não sobrescreve `workspace/` existente. Portas ocupadas: `PORT=4401 npm run catalogo` ou `npm run dev -- --port 5174`.

## Ordem de leitura

1. [BRIEF-AGENTE.md](BRIEF-AGENTE.md): resultado esperado e limites da prova.
2. [RECEITA.md](RECEITA.md): os seis módulos, dados, tema, callbacks e URL.
3. Catálogo local: Workspace → Receita e contratos dos widgets. Os contratos também estão em `workspace/node_modules/@rbbt/ui/docs/`.
4. [docs/ESCOPO-E-LIMITES.md](docs/ESCOPO-E-LIMITES.md): widgets novos e ressalvas.
5. [docs/MIGRACAO-RC11-RC12.md](docs/MIGRACAO-RC11-RC12.md): o que muda da rc.11 para a rc.12: workspace em mosaico (barra lateral, grade, hero, proporção, agentes, ponte em cascata, polaridade por linha e densidade compacta), tudo aditivo.
5a. [docs/MIGRACAO-RC10-RC11.md](docs/MIGRACAO-RC10-RC11.md): o que mudou da rc.10 para a rc.11 (período em campo na anatomia full do ContextBar e a nota de CSS do consumidor).
6. [docs/MIGRACAO-RC9-RC10.md](docs/MIGRACAO-RC9-RC10.md): o que mudou da rc.9 para a rc.10 (seletor de período De/Até) e o passo a passo no workspace.
7. [docs/MIGRACAO-RC8-RC9.md](docs/MIGRACAO-RC8-RC9.md): o que mudou da rc.8 para a rc.9 (cartas de relatório).
8. [docs/ACEITE.md](docs/ACEITE.md): evidências da entrega do Michael.
9. [docs/VALIDACAO.md](docs/VALIDACAO.md): o que foi validado antes deste handoff.

## Conteúdo

- `packages/`: tarball instalável, sem acesso ao repositório de desenvolvimento.
- `catalogo/`: Storybook estático da rc.12, idêntico ao publicado em /catalogo (release 28), incluindo contratos e exemplos fictícios.
- `cliente-nba/`: tema e logo para a reconstrução privada; não fazem parte do pacote genérico.
- `dados/`: cenários fictícios por recorte e período.
- `templates/workspace/`: ambiente mínimo com dependências fixas e lockfile.
- `scripts/`: integridade, servidor local e scaffold.
- `MANIFEST.sha256`: hashes dos arquivos do kit; `workspace/` é a área de trabalho e fica fora do manifesto.

Não é necessário instalar Ravi, ter conta no npm privado ou acessar o código do UI Studio. Não há credenciais ou dados de produção no kit. A biblioteca tem licença `UNLICENSED`: distribuição do kit autorizada, sem concessão automática de licença de uso ou redistribuição.

## Retorno pelo Git

Construa em `workspace/`, faça commits pequenos e abra um PR com código, lockfile, `PROVENANCE.md`, `LACUNAS.md` e evidências. `node_modules/` e `dist/` ficam fora do Git. O template do PR orienta o resumo. Para dúvidas ou bugs, use uma Issue e informe commit do kit, versão do pacote e passos de reprodução.

**Divisão de trabalho:** Michael monta workspaces; o Rbbt UI cria e mantém os widgets. Para pedir um widget ou ampliar um contrato, use o modelo de Issue “Pedido de widget ao Rbbt UI”. O coordenador encaminha o pedido ao Studio e acompanha o retorno por versão do kit; esse encaminhamento é manual. Não é necessário dar ao Michael acesso ao código-fonte da biblioteca.

Se tiver apenas leitura, peça acesso de escrita ao coordenador antes de enviar uma branch. Não mude a visibilidade do repositório. Não publique a aplicação ou a biblioteca neste exercício.

## Atualizações

Para migrar um workspace existente da rc.11 (ou de uma rc anterior), comece na raiz do repositório:

```sh
git fetch origin
git merge origin/entrega/rc12   # ou origin/main, depois que o PR da rc.12 for aceito
npm run verify
cd workspace
npm install --save-exact ../packages/rbbt-ui-0.5.0-rc.12.tgz
npm run typecheck
npm run build
```

Confira no `package-lock.json` o `integrity` do tarball rc.12: `sha512-j8C8WpeSF2B0t1Effwc4rr1lsQ1HcWi2Rt2zlti4Vvcj/eFMoCrZ0OYbBdmFM5AyOrSqI4vtaTOjBmQPypWg3A==`. A rc.12 traz o workspace em mosaico e é só aditiva: sem as props novas, nada muda. O passo a passo está em [docs/MIGRACAO-RC11-RC12.md](docs/MIGRACAO-RC11-RC12.md) e no passo 9 da [RECEITA.md](RECEITA.md). Vindo da rc.10, aplique antes [docs/MIGRACAO-RC10-RC11.md](docs/MIGRACAO-RC10-RC11.md); da rc.9, também [docs/MIGRACAO-RC9-RC10.md](docs/MIGRACAO-RC9-RC10.md); da rc.8, também [docs/MIGRACAO-RC8-RC9.md](docs/MIGRACAO-RC8-RC9.md).

Repita os testes da aplicação e registre a atualização no PROVENANCE.md. Não execute `init` sobre um workspace existente. Os tarballs rc.6, rc.8, rc.9, rc.10 e rc.11 permanecem disponíveis para migração ou reversão.

Cada atualização entra em PR com tarball, receita, catálogo, changelog e manifesto coerentes. Nunca substituir silenciosamente o tarball de uma entrega existente. Este primeiro ciclo usa commits, sem tags. `git pull` atualiza o kit, mas o projeto consumidor mantém sua dependência fixa: a migração requer atualizar o caminho/versão de `@rbbt/ui`, o lockfile e repetir os testes. Veja [docs/MANUTENCAO.md](docs/MANUTENCAO.md).
