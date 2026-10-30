# Prova de reconstrução · Michael · rc.6

## Objetivo

Construir um workspace NBA usando apenas o kit entregue nesta branch/commit. A prova mede se a biblioteca, a receita e o catálogo permitem trabalhar em outra máquina sem conhecimento prévio do código interno.

## Insumos permitidos

Pacote `packages/rbbt-ui-0.5.0-rc.6.tgz`, RECEITA.md, catálogo local, `cliente-nba/`, `dados/dados-ficticios.json`, documentos e scaffold deste repositório. Pode ler todo o conteúdo do pacote instalado, inclusive tipos, contratos, README e CSS. Dependências públicas e documentação oficial das ferramentas são permitidas e devem ser registradas.

Não acessar o repositório-fonte da biblioteca, demos privadas de referência, reconstruções anteriores ou memórias de outros agentes. O código dos exemplos fictícios da receita e catálogo é parte do material autorizado. Nenhuma implementação pronta da demonstração NBA é fornecida.

## Construir

1. Registre o commit do kit e execute `npm run verify`. Se houver divergência, pare e registre a falha.
2. Execute `npm run init` e instale `workspace/` com `npm ci`. O scaffold usa React 19, Vite 8 e TypeScript 7, fixos no lockfile.
3. Monte **Visão geral, Lojas, Mix, Estoque, Plano de ação e Qualidade** seguindo a receita.
4. Aplique família Glass e o tema NBA de `src/insumos/cliente-nba/tema.json`; o JSON é configuração de entrada, não o tipo pronto de `defineClientTheme`. Mapeie nome/rótulo/sigla, cores claro/escuro e logo como explicado na receita. Importe o SVG como asset.
5. Use os cenários de `src/insumos/dados-ficticios.json`. Passe pelos adaptadores, preserve valores agregados e registre divergências. Nunca transforme campo ausente em zero.
6. Troque recorte e período (Ontem/Semana/Mês), módulos e tema, preservando URL, acesso direto e refresh. Simulador de estoque somente sob demanda. Ações persistem no consumidor por callbacks; sem backend real neste exercício.
7. Entregue claro/escuro, desktop e celular; inclua teclado, ausência de leitura, vazio/erro e reduced motion nos casos aplicáveis.

## Novos widgets

A rc.6 também inclui os Lotes 0–3 descritos em docs/ESCOPO-E-LIMITES.md. Estão disponíveis para uso. A reconstrução obrigatória continua sendo os seis módulos acima; não é necessário inserir todos os novos widgets artificialmente. O uso adicional deve ter motivo e dados de entrada explícitos.

Michael somente monta workspaces com os componentes disponíveis. A criação e alteração de widgets reutilizáveis cabe exclusivamente ao Rbbt UI. Para uma capacidade ausente, abra uma Issue usando o modelo “Pedido de widget ao Rbbt UI”, descreva a necessidade em LACUNAS.md e avance nas partes independentes. Não improvise uma cópia do widget na página. O coordenador encaminha a Issue ao Rbbt UI; não há despacho automático de agentes neste repositório. A entrega do widget volta como nova versão do kit, com contrato e testes.

## Entrega

PR com `workspace/`, lockfile, PROVENANCE.md, LACUNAS.md, evidências e checklist de docs/ACEITE.md. Build local em `workspace/dist/`, sem publicação. Dúvidas viram Issues reproduzíveis com versão e commit. Ajuda recebida do coordenador entra no registro para tornar visíveis as lacunas da documentação.

Quando o build do Michael existir e for revisado, o destino previsto é a rota **privada** `/workspaces/nba-glass-receita/`. O envio desse build depende do OK explícito de Thiago. A disponibilidade do kit no GitHub não autoriza publicar a aplicação.
