import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{G as r,J as i,en as a,mr as o,nn as ee,pr as te,q as s,t as c,xr as l}from"./src-BbyRaoY1.js";import{t as u}from"./jsx-runtime-MKhVqBIO.js";import{a as ne,o as re}from"./fixtures-heatmap-Av-RnC91.js";import{n as ie,t as ae}from"./smooth-decorator-Ch0T28w-.js";var d,f;function p(){return(p=e((()=>{o(),d={name:`gavel`,size:24,node:[[`path`,{d:`m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381`,key:`pgg06f`}],[`path`,{d:`m16 16 6-6`,key:`vzrcl6`}],[`path`,{d:`m21.5 10.5-8-8`,key:`a17d9x`}],[`path`,{d:`m8 8 6-6`,key:`18bi4p`}],[`path`,{d:`m8.5 7.5 8 8`,key:`1oyaui`}]]},d.node,f=te(d)})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c(),m=`2026-10-30T07:12:00-03:00`,h=`2026-10-30`,g=`America/Sao_Paulo`,_={style:`currency`,currency:`BRL`,maximumFractionDigits:0},v={id:`ALR-2041`,title:`Ruptura de grade no feminino`,description:`Numerações 35 a 37 zeradas em três lojas há quatro dias; a vitrine de verão depende delas.`,period:{label:`Semana 43`,start:`2026-10-19`,end:`2026-10-25`},stores:[`Savassi`,`Centro`,`Pampulha`],filters:[{label:`Linha`,value:`Feminino`},{label:`Canal`,value:`Loja física`}],source:{label:`ERP fictício`,href:`https://erp.pedravela.example/ruptura?semana=43`,updatedAt:`2026-10-30T07:00:00-03:00`},values:[{id:`ruptura`,label:`Numerações zeradas`,value:38,format:{style:`number`},href:`https://erp.pedravela.example/ruptura?semana=43&linha=feminino`},{id:`vendas-perdidas`,label:`Vendas perdidas`,value:12400,format:_,note:`estimativa: 4 dias × ticket médio da numeração`},{id:`cobertura`,label:`Cobertura da grade`,value:.62,format:{style:`percent`}},{id:`estoque-cd`,label:`Pares no CD`,value:null,format:{style:`number`},missingReason:`o CD não mandou a contagem do dia`}]},y={ruptura:41,"vendas-perdidas":15800,cobertura:null,"estoque-cd":240},b=`2026-10-30T10:05:00-03:00`,x=[{id:`p-ana`,name:`Ana Lima`},{id:`p-bruno`,name:`Bruno Siqueira`},{id:`p-carla`,name:`Carla Menezes`}],S=s(v,{},m),C={...S,proposal:`Transferir duas caixas por numeração do CD para as três lojas e antecipar o pedido da coleção de verão.`,owner:{id:`p-ana`,name:`Ana Lima`},due:`2026-11-06`,state:`proposed`,stateNote:{by:`Ana Lima`,at:`2026-10-30T08:40:00-03:00`,reason:`Proposta pronta para o comitê de sexta.`}},w={...C,state:`decided`,stateNote:{by:`Rafael Prado`,at:`2026-10-31T11:20:00-03:00`,reason:`Aprovada no comitê; a transferência sai na segunda.`}},T={...C,state:`discarded`,stateNote:{by:`Rafael Prado`,at:`2026-10-31T11:24:00-03:00`,reason:`A coleção nova chega antes da transferência; não compensa o frete.`}},E={id:`Q-07`,title:`Margem caindo no tênis infantil`,subject:`Loja 07 · Pampulha`,impact:{value:8900,format:_,basis:`estimado: 3 semanas × diferença de margem`},urgency:{window:{start:`2026-11-02`,end:`2026-11-13`},label:`antes da Black Friday`},confidence:{level:`medium`,reason:`2 dias sem leitura de custo`},owner:{id:`p-bruno`,name:`Bruno Siqueira`},evidence:[{label:`Margem bruta`,value:.318,format:{style:`percent`},href:`https://erp.pedravela.example/margem?loja=07`,source:`ERP fictício`},{label:`Desconto médio`,value:.142,format:{style:`percent`}}]},D=i(E,{period:{label:`Outubro 2026`,start:`2026-10-01`,end:`2026-10-29`},stores:[`Pampulha`],filters:[{label:`Categoria`,value:`Tênis infantil`}],source:{label:`ERP fictício`,updatedAt:`2026-10-30T06:30:00-03:00`}},m)})))()}var oe=t({DecididoEDescartado:()=>Z,Escuro:()=>V,Estados:()=>B,Estreito360:()=>W,FormularioComErro:()=>J,Glass:()=>H,GlassEscuro:()=>U,NasceDaFila:()=>K,NasceDeUmAlerta:()=>G,Padrao:()=>R,Texto:()=>z,TrocarFiltro:()=>X,ValoresQueMudaram:()=>q,__namedExportsOrder:()=>Q,default:()=>L});function k(e){return(0,M.jsxs)(a,{children:[(0,M.jsx)(r,{...e}),(0,M.jsx)(A,{})]})}function A(){let e=ee();return(0,M.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function se(e){let[t,n]=(0,j.useState)(!1),[i,o]=(0,j.useState)(!1);return(0,M.jsxs)(a,{children:[(0,M.jsx)(r,{...e,decision:i?w:e.decision,currentValues:t?Y:y}),(0,M.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>n(e=>!e),children:`Trocar filtro (valores de agora)`}),(0,M.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>o(e=>!e),children:`Trocar estado (decidido)`}),(0,M.jsx)(A,{})]})}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{p(),j=n(),c(),O(),ne(),ae(),M=u(),{fn:N,userEvent:P,within:F}=__STORYBOOK_MODULE_TEST__,I=(e,t)=>(0,M.jsx)(l,{client:re,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,M.jsx)(e,{})}),L={title:`Widgets/Cartão de decisão`,id:`widgets-decision-card`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Cartão de decisão: problema, evidência (números e links para a origem), proposta, responsável, prazo e estado com o motivo visível. Nasce de um alerta ou da fila com o contexto congelado (período, filtros, lojas, valores e fonte, com data e hora); valores que mudaram aparecem lado a lado. Ações só por callback. Cliente fictício: Pedravela Calçados.`}}},args:{decision:C,icon:(0,M.jsx)(f,{}),today:h,timeZone:g,people:x,locale:`pt-BR`,permissions:{decide:{allowed:!1,reason:`só a gerência regional decide.`}},onPropose:N(),onDecide:N(),onDiscard:N(),onAssign:N()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},display:{control:`inline-radio`,options:[`card`,`text`]},icon:{control:!1},decision:{control:!1},currentValues:{control:!1},people:{control:!1},permissions:{control:!1},messages:{control:!1},portalContainer:{control:!1}},decorators:[ie,I,(e,t)=>(0,M.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:680,maxWidth:`100%`},children:(0,M.jsx)(e,{})})],render:e=>(0,M.jsx)(k,{...e})},R={name:`Padrão`},z={name:`Tabela/Texto`,args:{display:`text`,currentValues:y}},B={render:e=>(0,M.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,M.jsx)(r,{...e,decision:null,title:`Carregando`,status:`loading`,period:`Semana 43`,scope:`3 lojas`,source:`ERP fictício`}),(0,M.jsx)(r,{...e,decision:null,title:`Sem decisão`,status:`empty`,period:`Semana 43`,scope:`3 lojas`,source:`ERP fictício`}),(0,M.jsx)(r,{...e,decision:null,title:`Erro`,status:`error`,period:`Semana 43`,scope:`3 lojas`,source:`ERP fictício`,onRetry:()=>{}}),(0,M.jsx)(r,{...e,status:`partial`,partialNote:`O CD ainda não mandou a contagem do dia; o estoque dele aparece sem leitura.`})]})},V={globals:{rbMode:`dark`}},H={globals:{rbFamily:`glass`}},U={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},W={name:`Estreito 360`,parameters:{width:`narrow`},args:{currentValues:y}},G={name:`Nasce de um alerta`,args:{decision:S,permissions:void 0}},K={name:`Nasce da fila`,args:{decision:D,permissions:void 0}},q={name:`Valores que mudaram`,args:{currentValues:y,currentAt:b}},J={name:`Formulário com erro`,args:{decision:S,permissions:void 0},play:async({canvasElement:e})=>{let t=F(e);await P.click(await t.findByRole(`button`,{name:`Atribuir`}));let n=await t.findByLabelText(`Prazo`);await P.type(n,`28/10/2026`),await P.click(t.getByRole(`button`,{name:`Salvar`}))}},Y={ruptura:47,"vendas-perdidas":19200,cobertura:.58,"estoque-cd":null},X={name:`Trocar filtro`,render:e=>(0,M.jsx)(se,{...e})},Z={name:`Decidido e descartado`,render:e=>(0,M.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,M.jsx)(r,{...e,decision:w}),(0,M.jsx)(r,{...e,decision:T})]})},Q=[`Padrao`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`NasceDeUmAlerta`,`NasceDaFila`,`ValoresQueMudaram`,`FormularioComErro`,`TrocarFiltro`,`DecididoEDescartado`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...R.parameters?.docs?.source},description:{story:`Padrão: proposto, com o motivo do estado, o contexto do alerta e "Decidir" sem permissão (com o motivo).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Tabela/Texto",
  args: {
    display: "text",
    currentValues: dcCurrentValues
  }
}`,...z.parameters?.docs?.source},description:{story:`Alternativa em texto corrido: o mesmo conteúdo em linhas, também para copiar numa mensagem.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <DecisionCard {...args} decision={null} title="Carregando" status="loading" period="Semana 43" scope="3 lojas" source="ERP fictício" />
      <DecisionCard {...args} decision={null} title="Sem decisão" status="empty" period="Semana 43" scope="3 lojas" source="ERP fictício" />
      <DecisionCard {...args} decision={null} title="Erro" status="error" period="Semana 43" scope="3 lojas" source="ERP fictício" onRetry={() => {}} />
      <DecisionCard {...args} status="partial" partialNote="O CD ainda não mandou a contagem do dia; o estoque dele aparece sem leitura." />
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Carregando, vazio, erro e parcial.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...V.parameters?.docs?.source},description:{story:`Modo escuro.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...H.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...U.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  },
  args: {
    currentValues: dcCurrentValues
  }
}`,...W.parameters?.docs?.source},description:{story:`Celular a 360 px: evidência empilhada, todo valor inteiro, sem rolagem lateral.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Nasce de um alerta",
  args: {
    decision: dcDraft,
    permissions: undefined
  }
}`,...G.parameters?.docs?.source},description:{story:`Recém-criado de um alerta: rascunho, contexto congelado às 07:12 e "Propor" esperando proposta, responsável e prazo.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Nasce da fila",
  args: {
    decision: dcFromQueue,
    permissions: undefined
  }
}`,...K.parameters?.docs?.source},description:{story:`Criado de um item da fila: impacto estimado, confiança e janela viram evidência e prazo.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Valores que mudaram",
  args: {
    currentValues: dcCurrentValues,
    currentAt: DC_CURRENT_AT
  }
}`,...q.parameters?.docs?.source},description:{story:`Valores que mudaram desde o alerta: lado a lado, com a diferença; "sem leitura agora" não é zero.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Formulário com erro",
  args: {
    decision: dcDraft,
    permissions: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Atribuir"
    }));
    const due = await canvas.findByLabelText("Prazo");
    await userEvent.type(due, "28/10/2026");
    await userEvent.click(canvas.getByRole("button", {
      name: "Salvar"
    }));
  }
}`,...J.parameters?.docs?.source},description:{story:`Formulário de responsável e prazo com erro: campo vazio e prazo antes de hoje.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Trocar filtro",
  render: args => <FilterSwap {...args} />
}`,...X.parameters?.docs?.source},description:{story:`Movimento: a cascata dos passos toca só na entrada. "Trocar filtro" muda os valores de agora e
"Trocar estado" decide o cartão: os passos ficam no lugar, sem cascata; o que aparece já nasce no
lugar. Com movimento reduzido, nada se desloca.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Decidido e descartado",
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <DecisionCard {...args} decision={dcDecided} />
      <DecisionCard {...args} decision={dcDiscarded} />
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Decidido e descartado: registro, sem ações, com quem, quando e por quê.`,...Z.parameters?.docs?.description}}}})))()}export{R as n,$ as r,oe as t};