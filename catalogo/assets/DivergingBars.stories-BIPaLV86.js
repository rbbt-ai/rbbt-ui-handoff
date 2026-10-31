import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{en as r,ir as i,mn as a,mr as o,nn as s,nt as c,pr as l,rr as u,t as d,xr as f}from"./src-BbyRaoY1.js";import{t as p}from"./jsx-runtime-MKhVqBIO.js";import{n as m,t as h}from"./percent-TNy-FrY0.js";import{n as ee,t as te}from"./wallet-DRs6X1La.js";import{a as ne,o as g}from"./fixtures-heatmap-Av-RnC91.js";import{n as _,t as v}from"./smooth-decorator-Ch0T28w-.js";var y,b;function x(){return(x=e((()=>{o(),y={name:`arrow-down-up`,size:24,node:[[`path`,{d:`m3 16 4 4 4-4`,key:`1co6wj`}],[`path`,{d:`M7 20V4`,key:`1yoxec`}],[`path`,{d:`m21 8-4-4-4 4`,key:`1c9v7m`}],[`path`,{d:`M17 4v16`,key:`7dpous`}]]},y.node,b=l(y)})))()}function S(){return{items:E(D)}}function C(){return{items:E(D.map(([e,t,n,r])=>e===`praia`?[e,t,null,r]:e===`aeroporto`?[e,t,n,null]:e===`vila-nova`?[e,t,69900,69900]:[e,t,n,r]))}}function w(e=`outubro`){return{items:E(e===`outubro`?O:k)}}function re(){return{items:E(A)}}function ie(){return{items:j.map(([e,t,n])=>({id:e,label:t,value:n}))}}var T,E,D,O,k,A,j;function M(){return(M=e((()=>{T={period:`Outubro de 2026`,source:`ERP fictício · vendas, metas e previsão`},E=e=>e.map(([e,t,n,r])=>({id:e,label:t,value:n,reference:r})),D=[[`centro`,`Centro`,131200,116700],[`shopping-norte`,`Shopping Norte`,98400,104e3],[`jardins`,`Jardins`,142500,135e3],[`rodoviaria`,`Rodoviária`,61800,72e3],[`outlet-sul`,`Outlet Sul`,88300,86500],[`praia`,`Praia`,54200,58900],[`aeroporto`,`Aeroporto`,77600,7e4],[`vila-nova`,`Vila Nova`,69100,69900]],O=[[`centro`,`Centro`,123600,12e4],[`shopping-norte`,`Shopping Norte`,108700,1e5],[`jardins`,`Jardins`,127400,13e4],[`rodoviaria`,`Rodoviária`,62300,7e4],[`outlet-sul`,`Outlet Sul`,91800,9e4],[`praia`,`Praia`,56700,6e4],[`aeroporto`,`Aeroporto`,78e3,75e3],[`vila-nova`,`Vila Nova`,67320,68e3],[`shopping-leste`,`Shopping Leste`,93500,85e3],[`centro-historico`,`Centro Histórico`,50440,52e3],[`parque`,`Parque`,66560,64e3],[`estacao`,`Estação`,53360,58e3]],k=[[`centro`,`Centro`,118800,116e3],[`shopping-norte`,`Shopping Norte`,101200,98e3],[`jardins`,`Jardins`,120100,124e3],[`rodoviaria`,`Rodoviária`,66900,69e3],[`outlet-sul`,`Outlet Sul`,93600,88e3],[`praia`,`Praia`,59100,61e3],[`aeroporto`,`Aeroporto`,70400,72e3],[`vila-nova`,`Vila Nova`,70900,67e3],[`shopping-leste`,`Shopping Leste`,84100,83e3],[`centro-historico`,`Centro Histórico`,49700,51e3],[`parque`,`Parque`,58800,63e3],[`estacao`,`Estação`,56300,57e3]],A=[[`centro`,`Centro`,48200,45100],[`shopping-norte`,`Shopping Norte`,39800,42e3],[`jardins`,`Jardins`,51e3,50200],[`rodoviaria`,`Rodoviária`,30100,33200],[`outlet-sul`,`Outlet Sul`,36900,35400],[`praia`,`Praia`,27400,28900]],j=[[`jan`,`Jan`,.538],[`fev`,`Fev`,.507],[`mar`,`Mar`,.526],[`abr`,`Abr`,.489],[`mai`,`Mai`,.531],[`jun`,`Jun`,.552],[`jul`,`Jul`,.515],[`ago`,`Ago`,.5],[`set`,`Set`,.544],[`out`,`Out`,.523]]})))()}var N=t({AcuracidadeDaPrevisao:()=>X,Escuro:()=>G,Estados:()=>W,Estreito360:()=>J,Glass:()=>K,GlassEscuro:()=>q,MenorEMelhor:()=>Z,Padrao:()=>H,Tabela:()=>U,Vertical:()=>Y,__namedExportsOrder:()=>Q,default:()=>V});function P(e){return(0,R.jsxs)(r,{children:[(0,R.jsx)(c,{...e}),(0,R.jsx)(F,{})]})}function F(){let e=s();return(0,R.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function I(e){let[t,n]=(0,L.useState)(`outubro`);return(0,R.jsx)(r,{children:(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,R.jsx)(a,{label:`Mês`,value:t,options:[{value:`outubro`,label:`Outubro`},{value:`setembro`,label:`Setembro`}],onChange:n}),(0,R.jsx)(c,{...e,period:t===`outubro`?`Outubro de 2026`:`Setembro de 2026`,data:w(t)})]})})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{x(),i(),m(),ee(),L=n(),d(),ne(),M(),v(),R=p(),{fn:z}=__STORYBOOK_MODULE_TEST__,B=(e,t)=>(0,R.jsx)(f,{client:g,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,R.jsx)(e,{})}),V={title:`Widgets/Barras divergentes`,id:`widgets-diverging-bars`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`Barras acima e abaixo de uma referência rotulada (zero, meta ou previsão; única ou por item), na horizontal ou na vertical. Cada barra traz o desvio com sinal em texto, dentro dela quando cabe e, senão, na ponta. A polaridade é declarada (nem todo positivo é bom) e a leitura vem em texto e ícone além da cor; a tolerância opcional desenha a faixa em volta da referência. Ausência fica fora das barras, como “sem dado”. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Vendas × meta por loja`,icon:(0,R.jsx)(u,{}),data:S(),reference:{label:`Meta`},mode:`percent`,polarity:`higher-is-better`,groupLabel:`Loja`,countNoun:{one:`loja`,other:`lojas`},valueFormat:{style:`currency`,currency:`BRL`,notation:`compact`,compactMaximumFractionDigits:1},period:T.period,scope:`8 lojas`,source:T.source,locale:`pt-BR`,onViewChange:z()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},polarity:{control:`inline-radio`,options:[`higher-is-better`,`lower-is-better`,`neutral`,`closer-is-better`]},mode:{control:`inline-radio`,options:[`percent`,`absolute`,`points`]},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},sort:{control:`inline-radio`,options:[`input`,`deviation`,`magnitude`]},defaultView:{control:`inline-radio`,options:[`bars`,`table`]},icon:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[_,B,(e,t)=>(0,R.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`medium`?640:860,maxWidth:`100%`},children:(0,R.jsx)(e,{})})],render:e=>(0,R.jsx)(P,{...e})},H={name:`Padrão`},U={args:{defaultView:`table`,data:C()}},W={render:e=>(0,R.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,R.jsx)(c,{...e,title:`Carregando`,status:`loading`}),(0,R.jsx)(c,{...e,title:`Vazio`,status:`empty`,data:null}),(0,R.jsx)(c,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,R.jsx)(c,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não fecharam outubro.`,scope:`6 de 8 lojas`,data:{items:S().items.slice(0,6)}}),(0,R.jsx)(c,{...e,title:`Ausência × zero`,data:C(),description:`Praia sem leitura do realizado e Aeroporto sem meta: ficam fora das barras e da contagem, como “sem dado”. Vila Nova bateu a meta exatamente: 0,0%.`})]})},G={globals:{rbMode:`dark`}},K={globals:{rbFamily:`glass`}},q={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},J={name:`Estreito 360`,parameters:{width:`narrow`}},Y={args:{title:`Margem bruta × meta`,icon:(0,R.jsx)(h,{}),data:ie(),orientation:`vertical`,reference:{label:`Meta`,value:.52},mode:`points`,valueFormat:{style:`percent`,minimumFractionDigits:1,maximumFractionDigits:1},groupLabel:`Mês`,countNoun:{one:`mês`,other:`meses`},period:`Jan–Out 2026`,scope:`Rede (8 lojas)`}},X={name:`Acuracidade da previsão`,args:{title:`Acuracidade da previsão de vendas`,icon:(0,R.jsx)(b,{}),reference:{label:`Previsão`},polarity:`closer-is-better`,tolerance:.05,scope:`12 lojas`},render:e=>(0,R.jsx)(I,{...e})},Z={name:`Menor é melhor`,args:{title:`Despesa × orçamento`,icon:(0,R.jsx)(te,{}),data:re(),reference:{label:`Orçamento`},mode:`absolute`,polarity:`lower-is-better`,scope:`6 lojas`}},Q=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`Vertical`,`AcuracidadeDaPrevisao`,`MenorEMelhor`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...H.parameters?.docs?.source},description:{story:`Padrão: vendas × meta de cada loja em outubro, desvio em %, acima da meta é bom.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table",
    data: salesDataWithGaps()
  }
}`,...U.parameters?.docs?.source},description:{story:`A alternativa em tabela, aberta: valor, meta, desvio com sinal e leitura; os itens sem dado aparecem como tais.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <DivergingBars {...args} title="Carregando" status="loading" />
      <DivergingBars {...args} title="Vazio" status="empty" data={null} />
      <DivergingBars {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <DivergingBars {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não fecharam outubro." scope="6 de 8 lojas" data={{
      items: salesData().items.slice(0, 6)
    }} />
      <DivergingBars {...args} title="Ausência × zero" data={salesDataWithGaps()} description="Praia sem leitura do realizado e Aeroporto sem meta: ficam fora das barras e da contagem, como “sem dado”. Vila Nova bateu a meta exatamente: 0,0%." />
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e ausência × zero.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...G.parameters?.docs?.source},description:{story:`Modo escuro.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...K.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...q.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...J.parameters?.docs?.source},description:{story:`Celular a 360 px: rótulo em cima, barra embaixo; o rótulo de valor vai para a ponta quando não cabe; a página nunca rola na horizontal.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Margem bruta × meta",
    icon: <Percent />,
    data: marginData(),
    orientation: "vertical",
    reference: {
      label: "Meta",
      value: 0.52
    },
    mode: "points",
    valueFormat: {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    },
    groupLabel: "Mês",
    countNoun: {
      one: "mês",
      other: "meses"
    },
    period: "Jan–Out 2026",
    scope: "Rede (8 lojas)"
  }
}`,...Y.parameters?.docs?.source},description:{story:`Vertical: margem bruta por mês contra a meta única de 52%, desvio em p.p. Abaixo de 64 px por coluna, vira horizontal.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Acuracidade da previsão",
  args: {
    title: "Acuracidade da previsão de vendas",
    icon: <ArrowDownUp />,
    reference: {
      label: "Previsão"
    },
    polarity: "closer-is-better",
    tolerance: 0.05,
    scope: "12 lojas"
  },
  render: args => <ForecastDemo {...args} />
}`,...X.parameters?.docs?.source},description:{story:`Acuracidade da previsão: erro = (realizado − previsão) ÷ previsão, por loja. Perto da previsão é bom
(\`closer-is-better\`) e a faixa de ±5% é a tolerância; fora dela, acima ou abaixo, pesa. A troca de mês
leva cada barra do valor antigo ao novo, sem cascata e sem passar por zero.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Menor é melhor",
  args: {
    title: "Despesa × orçamento",
    icon: <Wallet />,
    data: expensesData(),
    reference: {
      label: "Orçamento"
    },
    mode: "absolute",
    polarity: "lower-is-better",
    scope: "6 lojas"
  }
}`,...Z.parameters?.docs?.source},description:{story:`Menor é melhor: despesa operacional × orçamento, desvio em R$; abaixo do orçamento é bom, acima pesa.`,...Z.parameters?.docs?.description}}}})))()}export{H as n,$ as r,N as t};