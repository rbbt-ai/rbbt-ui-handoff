import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{Fn as n,Nt as r,Un as i,Wn as a,cr as o,mr as s,pr as c,sr as l,t as u,xr as d,zn as f}from"./src-BbyRaoY1.js";import{t as p}from"./jsx-runtime-MKhVqBIO.js";import{i as m,n as h,r as g,t as _}from"./trending-down-CWYhmS1q.js";import{n as v,r as y}from"./iframe-DTQCbhXd.js";import{n as b,t as x}from"./smooth-decorator-Ch0T28w-.js";import{f as S,g as C,n as w,t as T}from"./fixtures-BBJMtdSN.js";import{b as E,n as D,s as O,y as k}from"./fixtures-smooth-fhbAfNb8.js";var A,j;function M(){return(M=e((()=>{s(),A={name:`flag`,size:24,node:[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]},A.node,j=c(A)})))()}var N=t({AnatomiaEnxuta:()=>B,Estados:()=>H,Estagios:()=>V,Padrao:()=>z,TemasEIdentidade:()=>U,__namedExportsOrder:()=>W,default:()=>L});function P({caption:e,children:t}){return(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minWidth:0},children:[(0,F.jsx)(`p`,{className:`story-caption`,children:e}),(0,F.jsx)(`div`,{style:{flex:1},children:t})]})}var F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{x(),o(),m(),M(),a(),h(),u(),S(),k(),D(),y(),F=p(),{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Widgets/PriorityList`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Prioridades de atenção: problema → evidência → hipótese → próximo passo, com critério de ordenação visível e estágio explícito (sugestão ≠ aprovação ≠ execução). Não executa ações. Dados fictícios.`}}},args:{title:`Prioridades de atenção`,subtitle:`Outubro 2026 · até 16/10`,icon:(0,F.jsx)(j,{}),items:E,criterion:`pendências de dados primeiro; depois, maior diferença negativa para a meta (R$); depois, itens com cobertura abaixo do limite`,locale:`pt-BR`,timeZone:w,source:`Regras fictícias sobre o ERP fictício`,updatedAt:C(12),now:T,caveat:`Sugestões geradas por regra. Nenhuma ação é executada a partir desta lista.`},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},icon:{control:!1},items:{control:`object`},messages:{control:!1}},decorators:[b,(e,t)=>t.parameters.fullWidth?(0,F.jsx)(e,{}):(0,F.jsx)(`div`,{style:{maxWidth:960},children:(0,F.jsx)(e,{})})]},R={Dados:(0,F.jsx)(g,{}),Venda:(0,F.jsx)(_,{}),Estoque:(0,F.jsx)(l,{}),Meta:(0,F.jsx)(i,{})},z={name:`Padrão`,args:{title:`Prioridades`,subtitle:void 0,icon:void 0,caveat:void 0,items:O.map(e=>({...e,icon:R[e.kind?.label??``]})),criterion:`pendências de dados primeiro; depois, maior diferença negativa para a meta`,initialCount:4}},B={name:`Anatomia enxuta 0.2.0-rc.2`,tags:[`!dev`,`!autodocs`],args:{source:void 0,updatedAt:void 0,now:void 0,methodology:{formula:`Pendências de dados primeiro; depois, diferença para a meta em R$; depois, itens com cobertura baixa.`}},render:e=>(0,F.jsx)(n,{period:`Outubro 2026, até 16/10`,source:`Regras fictícias sobre o ERP fictício`,updatedAt:C(12),now:T,anatomy:`lean`,children:(0,F.jsx)(r,{...e,itemDetail:`expandable`})})},V={name:`Estágios`,args:{initialCount:5,evidenceLimit:2}},H={parameters:{fullWidth:!0},render:e=>(0,F.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,gridTemplateColumns:`repeat(auto-fill, minmax(min(100%, 24rem), 1fr))`},children:[(0,F.jsx)(P,{caption:`Carregando`,children:(0,F.jsx)(r,{...e,status:`loading`})}),(0,F.jsx)(P,{caption:`Vazio`,children:(0,F.jsx)(r,{...e,items:[]})}),(0,F.jsx)(P,{caption:`Erro`,children:(0,F.jsx)(r,{...e,status:`error`,onRetry:I()})}),(0,F.jsx)(P,{caption:`Sem permissão`,children:(0,F.jsx)(r,{...e,status:`restricted`})}),(0,F.jsx)(P,{caption:`Estreito · parcial`,children:(0,F.jsx)(r,{...e,status:`partial`,partialNote:`Unidade Litoral sem dados em 15 e 16/10.`,initialCount:2})}),(0,F.jsx)(P,{caption:`Dependência (estado desenhado fora do widget)`,children:(0,F.jsx)(`section`,{className:`rb-card rb-scope`,children:(0,F.jsxs)(`div`,{className:`rb-panel__inner`,children:[(0,F.jsx)(`h3`,{className:`rb-panel__title`,children:`Ações em acompanhamento`}),(0,F.jsx)(f,{kind:`dependency`,title:`Depende de registro persistente`,description:`Responsáveis, prazos e evolução só aparecem quando houver uma fonte que registre as ações. Nada aqui atribui tarefas.`})]})})})]})},U={name:`Temas e identidade`,parameters:{fullWidth:!0},render:e=>(0,F.jsx)(`div`,{style:{display:`grid`,gap:`1rem`},children:[[`Claro · padrão`,`light`,void 0],[`Escuro · índigo (tokens)`,`dark`,v.dark]].map(([t,n,i])=>(0,F.jsxs)(d,{mode:n,tokens:i,canvas:!0,style:{padding:16,borderRadius:16},children:[(0,F.jsx)(`p`,{className:`story-caption`,children:t}),(0,F.jsx)(r,{...e})]},t))})},W=[`Padrao`,`AnatomiaEnxuta`,`Estagios`,`Estados`,`TemasEIdentidade`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    title: "Prioridades",
    subtitle: undefined,
    icon: undefined,
    caveat: undefined,
    items: sx.smoothPriorities.map(item => ({
      ...item,
      icon: KIND_ICON[item.kind?.label ?? ""]
    })),
    criterion: "pendências de dados primeiro; depois, maior diferença negativa para a meta",
    initialCount: 4
  }
}`,...z.parameters?.docs?.source},description:{story:`Configuração padrão (0.4.0): as prioridades do Início (fixtures-smooth), em cards com ícone e uma
linha de evidência; citam as linhas da tabela, na ordem do critério.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Anatomia enxuta 0.2.0-rc.2",
  // 0.4.0: variante 0.2, só no Legado (a página do widget já abre no smooth).
  tags: ["!dev", "!autodocs"],
  args: {
    source: undefined,
    updatedAt: undefined,
    now: undefined,
    methodology: {
      formula: "Pendências de dados primeiro; depois, diferença para a meta em R$; depois, itens com cobertura baixa."
    }
  },
  render: args => <PageContextProvider period="Outubro 2026, até 16/10" source="Regras fictícias sobre o ERP fictício" updatedAt={fx.minutesBefore(12)} now={fx.NOW} anatomy="lean">
      <PriorityList {...args} itemDetail="expandable" />
    </PageContextProvider>
}`,...B.parameters?.docs?.source},description:{story:`Anatomia enxuta (0.2.0-rc.2) dentro de um \`PageContextProvider\`: cada item mostra problema e
unidade, a evidência principal, o próximo passo e a diferença; "Ver evidências" abre as demais
evidências, a hipótese e a posição na lista. Ressalva em linha, sem caixa; fonte e atualização
iguais às da página não se repetem no rodapé (continuam em "Como calculamos"). Desde a 0.4.0 a
anatomia enxuta mostra cards (veja Smooth · Etapa 2); esta história fixa \`itemDetail="expandable"\`.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Estágios",
  args: {
    initialCount: 5,
    evidenceLimit: 2
  }
}`,...V.parameters?.docs?.source},description:{story:`Estágios diferentes lado a lado: o texto deixa claro o que é só sugestão. Evidências limitadas a 2 por item.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    fullWidth: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 24rem), 1fr))"
  }}>
      <Cell caption="Carregando">
        <PriorityList {...args} status="loading" />
      </Cell>
      <Cell caption="Vazio">
        <PriorityList {...args} items={[]} />
      </Cell>
      <Cell caption="Erro">
        <PriorityList {...args} status="error" onRetry={fn()} />
      </Cell>
      <Cell caption="Sem permissão">
        <PriorityList {...args} status="restricted" />
      </Cell>
      <Cell caption="Estreito · parcial">
        <PriorityList {...args} status="partial" partialNote="Unidade Litoral sem dados em 15 e 16/10." initialCount={2} />
      </Cell>
      <Cell caption="Dependência (estado desenhado fora do widget)">
        <section className="rb-card rb-scope">
          <div className="rb-panel__inner">
            <h3 className="rb-panel__title">Ações em acompanhamento</h3>
            <WidgetState kind="dependency" title="Depende de registro persistente" description="Responsáveis, prazos e evolução só aparecem quando houver uma fonte que registre as ações. Nada aqui atribui tarefas." />
          </div>
        </section>
      </Cell>
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Temas e identidade",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      {([["Claro · padrão", "light", undefined], ["Escuro · índigo (tokens)", "dark", indigoIdentity.dark]] as const).map(([caption, mode, tokens]) => <RbTheme key={caption} mode={mode} tokens={tokens} canvas style={{
      padding: 16,
      borderRadius: 16
    }}>
          <p className="story-caption">{caption}</p>
          <PriorityList {...args} />
        </RbTheme>)}
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Modos e identidade por tokens.`,...U.parameters?.docs?.description}}}})))()}export{N as a,L as c,z as i,H as n,U as o,V as r,G as s,B as t};