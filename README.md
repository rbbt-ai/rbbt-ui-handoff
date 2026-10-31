# Rbbt UI · handoff para Michael

Kit de consumo de **@rbbt/ui 0.5.0-rc.8**, baseado no commit de origem `e682f098357365dba6b2e5f28c2f691fa371af87`. Contém a biblioteca compilada, catálogo da mesma versão, receita, tema NBA e dados fictícios. O Michael reconstrói o workspace em outra máquina e devolve as lacunas.

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
git switch -c michael/workspace-nba-rc8
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
5. [docs/ACEITE.md](docs/ACEITE.md): evidências da entrega do Michael.
6. [docs/VALIDACAO.md](docs/VALIDACAO.md): o que foi validado antes deste handoff.

## Conteúdo

- `packages/`: tarball instalável, sem acesso ao repositório de desenvolvimento.
- `catalogo/`: Storybook estático da rc.8, incluindo contratos e exemplos fictícios.
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

Para migrar um workspace existente da rc.6, a partir de `workspace/`:

```sh
npm install --save-exact ../packages/rbbt-ui-0.5.0-rc.8.tgz
npm run typecheck
npm run build
```

Repita os testes da aplicação e registre a atualização no PROVENANCE.md. Não execute `init` sobre um workspace existente. O tarball rc.6 permanece disponível para migração ou reversão.

Cada atualização entra em PR com tarball, receita, catálogo, changelog e manifesto coerentes. Nunca substituir silenciosamente o tarball de uma entrega existente. Este primeiro ciclo usa commits, sem tags. `git pull` atualiza o kit, mas o projeto consumidor mantém sua dependência fixa: a migração requer atualizar o caminho/versão de `@rbbt/ui`, o lockfile e repetir os testes. Veja [docs/MANUTENCAO.md](docs/MANUTENCAO.md).
