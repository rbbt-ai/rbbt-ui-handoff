# Rbbt UI · handoff privado para Michael

Kit de consumo de **@rbbt/ui 0.5.0-rc.6**, baseado no commit de origem `abf232f89c79888326c6a712f995209cb399ef67`. Contém a biblioteca compilada, catálogo da mesma versão, receita, tema NBA e dados fictícios. O Michael reconstrói o workspace em outra máquina e devolve as lacunas.

## Começar

Pré-requisitos: acesso de leitura ao repositório privado, Git, Node **>=22.12.0** e npm. Referência validada: Node 22.22.0 / npm 10.9.4. A instalação inicial baixa dependências do npm; o catálogo incluído funciona localmente sem rebuild e sem acesso ao Ravi.

```sh
git clone https://github.com/rbbt-ai/rbbt-ui-handoff.git
cd rbbt-ui-handoff
git rev-parse HEAD
# Se usa nvm: nvm install && nvm use
npm run verify
npm run catalogo
```

O clone privado exige autenticação GitHub na máquina do Michael. Se ele usa SSH configurado, pode usar `git@github.com:rbbt-ai/rbbt-ui-handoff.git` como alternativa. Nunca grave tokens no repositório.

Abra http://127.0.0.1:4400/catalogo/. Em outro terminal, na raiz do repositório:

```sh
git switch -c michael/workspace-nba-rc6
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
- `catalogo/`: Storybook estático da rc.6, incluindo contratos e exemplos fictícios.
- `cliente-nba/`: tema e logo para a reconstrução privada; não fazem parte do pacote genérico.
- `dados/`: cenários fictícios por recorte e período.
- `templates/workspace/`: ambiente mínimo com dependências fixas e lockfile.
- `scripts/`: integridade, servidor local e scaffold.
- `MANIFEST.sha256`: hashes dos arquivos do kit; `workspace/` é a área de trabalho e fica fora do manifesto.

Não é necessário instalar Ravi, ter conta no npm privado ou acessar o código do UI Studio. Não há credenciais ou dados de produção no kit. A biblioteca tem licença `UNLICENSED`: distribuição privada autorizada, sem concessão de licença pública.

## Retorno pelo Git

Construa em `workspace/`, faça commits pequenos e abra um PR com código, lockfile, `PROVENANCE.md`, `LACUNAS.md` e evidências. `node_modules/` e `dist/` ficam fora do Git. O template do PR orienta o resumo. Para dúvidas ou bugs, use uma Issue e informe commit do kit, versão do pacote e passos de reprodução.

Se tiver apenas leitura, peça acesso de escrita ao coordenador antes de enviar uma branch. Não mude a visibilidade do repositório. Não publique a aplicação ou a biblioteca neste exercício.

## Atualizações

Cada atualização entra em PR com tarball, receita, catálogo, changelog e manifesto coerentes. Nunca substituir silenciosamente o tarball de uma entrega existente. Este primeiro ciclo usa commits, sem tags. `git pull` atualiza o kit, mas o projeto consumidor mantém sua dependência fixa: a migração requer atualizar o caminho/versão de `@rbbt/ui`, o lockfile e repetir os testes. Veja [docs/MANUTENCAO.md](docs/MANUTENCAO.md).
