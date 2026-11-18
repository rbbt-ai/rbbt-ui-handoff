import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Kr as r,ct as i,t as a,xn as o,yn as s}from"./src-BSeQ01dl.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{a as l,c as u,d,f,i as p,l as m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./fixtures-decision-card-CfJCuKkk.js";import{n as S,t as C}from"./smooth-decorator-CjOKIOT8.js";import{a as w,o as T}from"./fixtures-heatmap-Ei1UaJ2i.js";var E=t({DecididoEDescartado:()=>X,Escuro:()=>B,Estados:()=>z,Estreito360:()=>U,FormularioComErro:()=>q,Glass:()=>V,GlassEscuro:()=>H,NasceDaFila:()=>G,NasceDeUmAlerta:()=>W,Padrao:()=>L,Texto:()=>R,TrocarFiltro:()=>Y,ValoresQueMudaram:()=>K,__namedExportsOrder:()=>Z,default:()=>I});function D(e){return(0,j.jsxs)(s,{children:[(0,j.jsx)(i,{...e}),(0,j.jsx)(O,{})]})}function O(){let e=o();return(0,j.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function k(e){let[t,n]=(0,A.useState)(!1),[r,a]=(0,A.useState)(!1);return(0,j.jsxs)(s,{children:[(0,j.jsx)(i,{...e,decision:r?l:e.decision,currentValues:t?J:p}),(0,j.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>n(e=>!e),children:`Trocar filtro (valores de agora)`}),(0,j.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>a(e=>!e),children:`Trocar estado (decidido)`}),(0,j.jsx)(O,{})]})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{_(),A=n(),a(),d(),w(),C(),j=c(),{fn:M,userEvent:N,within:P}=__STORYBOOK_MODULE_TEST__,F=(e,t)=>(0,j.jsx)(r,{client:T,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,j.jsx)(e,{})}),I={title:`Widgets/Cartão de decisão`,id:`widgets-decision-card`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Cartão de decisão: problema, evidência (números e links para a origem), proposta, responsável, prazo e estado com o motivo visível. Nasce de um alerta ou da fila com o contexto congelado (período, filtros, lojas, valores e fonte, com data e hora); valores que mudaram aparecem lado a lado. Ações só por callback. Cliente fictício: Pedravela Calçados.`}}},args:{decision:x,icon:(0,j.jsx)(f,{}),today:v,timeZone:h,people:m,locale:`pt-BR`,permissions:{decide:{allowed:!1,reason:`só a gerência regional decide.`}},onPropose:M(),onDecide:M(),onDiscard:M(),onAssign:M()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},display:{control:`inline-radio`,options:[`card`,`text`]},icon:{control:!1},decision:{control:!1},currentValues:{control:!1},people:{control:!1},permissions:{control:!1},messages:{control:!1},portalContainer:{control:!1}},decorators:[S,F,(e,t)=>(0,j.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:680,maxWidth:`100%`},children:(0,j.jsx)(e,{})})],render:e=>(0,j.jsx)(D,{...e})},L={name:`Padrão`},R={name:`Tabela/Texto`,args:{display:`text`,currentValues:p}},z={render:e=>(0,j.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,j.jsx)(i,{...e,decision:null,title:`Carregando`,status:`loading`,period:`Semana 43`,scope:`3 lojas`,source:`ERP fictício`}),(0,j.jsx)(i,{...e,decision:null,title:`Sem decisão`,status:`empty`,period:`Semana 43`,scope:`3 lojas`,source:`ERP fictício`}),(0,j.jsx)(i,{...e,decision:null,title:`Erro`,status:`error`,period:`Semana 43`,scope:`3 lojas`,source:`ERP fictício`,onRetry:()=>{}}),(0,j.jsx)(i,{...e,status:`partial`,partialNote:`O CD ainda não mandou a contagem do dia; o estoque dele aparece sem leitura.`})]})},B={globals:{rbMode:`dark`}},V={globals:{rbFamily:`glass`}},H={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},U={name:`Estreito 360`,parameters:{width:`narrow`},args:{currentValues:p}},W={name:`Nasce de um alerta`,args:{decision:y,permissions:void 0}},G={name:`Nasce da fila`,args:{decision:u,permissions:void 0}},K={name:`Valores que mudaram`,args:{currentValues:p,currentAt:b}},q={name:`Formulário com erro`,args:{decision:y,permissions:void 0},play:async({canvasElement:e})=>{let t=P(e);await N.click(await t.findByRole(`button`,{name:`Atribuir`}));let n=await t.findByLabelText(`Prazo`);await N.type(n,`28/10/2026`),await N.click(t.getByRole(`button`,{name:`Salvar`}))}},J={ruptura:47,"vendas-perdidas":19200,cobertura:.58,"estoque-cd":null},Y={name:`Trocar filtro`,render:e=>(0,j.jsx)(k,{...e})},X={name:`Decidido e descartado`,render:e=>(0,j.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,j.jsx)(i,{...e,decision:l}),(0,j.jsx)(i,{...e,decision:g})]})},Z=[`Padrao`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`NasceDeUmAlerta`,`NasceDaFila`,`ValoresQueMudaram`,`FormularioComErro`,`TrocarFiltro`,`DecididoEDescartado`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...L.parameters?.docs?.source},description:{story:`Padrão: proposto, com o motivo do estado, o contexto do alerta e "Decidir" sem permissão (com o motivo).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Tabela/Texto",
  args: {
    display: "text",
    currentValues: dcCurrentValues
  }
}`,...R.parameters?.docs?.source},description:{story:`Alternativa em texto corrido: o mesmo conteúdo em linhas, também para copiar numa mensagem.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <DecisionCard {...args} decision={null} title="Carregando" status="loading" period="Semana 43" scope="3 lojas" source="ERP fictício" />
      <DecisionCard {...args} decision={null} title="Sem decisão" status="empty" period="Semana 43" scope="3 lojas" source="ERP fictício" />
      <DecisionCard {...args} decision={null} title="Erro" status="error" period="Semana 43" scope="3 lojas" source="ERP fictício" onRetry={() => {}} />
      <DecisionCard {...args} status="partial" partialNote="O CD ainda não mandou a contagem do dia; o estoque dele aparece sem leitura." />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Carregando, vazio, erro e parcial.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...B.parameters?.docs?.source},description:{story:`Modo escuro.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...V.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...H.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  },
  args: {
    currentValues: dcCurrentValues
  }
}`,...U.parameters?.docs?.source},description:{story:`Celular a 360 px: evidência empilhada, todo valor inteiro, sem rolagem lateral.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Nasce de um alerta",
  args: {
    decision: dcDraft,
    permissions: undefined
  }
}`,...W.parameters?.docs?.source},description:{story:`Recém-criado de um alerta: rascunho, contexto congelado às 07:12 e "Propor" esperando proposta, responsável e prazo.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Nasce da fila",
  args: {
    decision: dcFromQueue,
    permissions: undefined
  }
}`,...G.parameters?.docs?.source},description:{story:`Criado de um item da fila: impacto estimado, confiança e janela viram evidência e prazo.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Valores que mudaram",
  args: {
    currentValues: dcCurrentValues,
    currentAt: DC_CURRENT_AT
  }
}`,...K.parameters?.docs?.source},description:{story:`Valores que mudaram desde o alerta: lado a lado, com a diferença; "sem leitura agora" não é zero.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Formulário de responsável e prazo com erro: campo vazio e prazo antes de hoje.`,...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Trocar filtro",
  render: args => <FilterSwap {...args} />
}`,...Y.parameters?.docs?.source},description:{story:`Movimento: a cascata dos passos toca só na entrada. "Trocar filtro" muda os valores de agora e
"Trocar estado" decide o cartão: os passos ficam no lugar, sem cascata; o que aparece já nasce no
lugar. Com movimento reduzido, nada se desloca.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Decidido e descartado",
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <DecisionCard {...args} decision={dcDecided} />
      <DecisionCard {...args} decision={dcDiscarded} />
    </div>
}`,...X.parameters?.docs?.source},description:{story:`Decidido e descartado: registro, sem ações, com quem, quando e por quê.`,...X.parameters?.docs?.description}}}})))()}export{L as n,Q as r,E as t};