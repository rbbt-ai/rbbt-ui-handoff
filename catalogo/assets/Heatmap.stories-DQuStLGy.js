import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{St as r,ar as i,en as a,nn as o,or as s,t as c,xr as l}from"./src-BbyRaoY1.js";import{t as u}from"./jsx-runtime-MKhVqBIO.js";import{n as d,t as f}from"./calendar-days-CmQlKR6w.js";import{n as p,t as m}from"./store-DU7b4cjY.js";import{a as h,c as g,i as _,n as v,o as y,r as b,s as x,t as S}from"./fixtures-heatmap-Av-RnC91.js";import{n as C,t as w}from"./smooth-decorator-Ch0T28w-.js";var T=t({Escuro:()=>V,Estados:()=>B,Estreito360:()=>W,Estreito360Lojas:()=>G,Glass:()=>H,GlassEscuro:()=>U,LimitesFixos:()=>R,LojaPorDia:()=>F,Metricas:()=>L,Padrao:()=>P,SemanaPorDia:()=>I,Tabela:()=>z,__namedExportsOrder:()=>K,default:()=>N});function E({dados:e=`dia-hora`,metric:t,onMetricChange:n,...i}){let[o,s]=(0,O.useState)(t);return(0,k.jsxs)(a,{children:[(0,k.jsx)(r,{...i,data:i.data??j[e](o),metric:o,onMetricChange:e=>{n?.(e),s(e)}}),(0,k.jsx)(D,{})]})}function D(){let e=o();return(0,k.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{d(),s(),p(),O=n(),c(),h(),w(),k=u(),{fn:A}=__STORYBOOK_MODULE_TEST__,j={"dia-hora":v,"loja-dia":x,"semana-dia":g},M=(e,t)=>(0,k.jsx)(l,{client:y,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,k.jsx)(e,{})}),N={title:`Widgets/Mapa de calor`,id:`widgets-heatmap`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Mapa de calor de concentração: quanto mais concentração, mais quente a célula. Dia × hora por padrão; também loja × dia e semana × dia. Faixas por tokens (as baixas com hachura), ausência diferente de zero, seletor de métrica, balão com valor e % do total, teclado, tabela e entrada em cascata. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Concentração de vendas`,icon:(0,k.jsx)(i,{}),metrics:_,metric:`receita`,axes:{x:`Dia`,y:`Hora`},period:b.period,scope:b.scope,source:b.source,locale:`pt-BR`,dados:`dia-hora`,onMetricChange:A()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},metric:{control:`inline-radio`,options:[`receita`,`notas`,`pecas`]},dados:{control:`inline-radio`,options:[`dia-hora`,`loja-dia`,`semana-dia`],description:`Recorte da história.`},icon:{control:!1},data:{control:!1},metrics:{control:!1},messages:{control:!1}},decorators:[C,M,(e,t)=>(0,k.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`wide`?1240:600,maxWidth:`100%`},children:(0,k.jsx)(e,{})})],render:e=>(0,k.jsx)(E,{...e})},P={name:`Padrão (dia × hora)`},F={name:`Loja × dia`,args:{title:`Vendas por loja e dia`,icon:(0,k.jsx)(m,{}),dados:`loja-dia`,axes:{x:`Dia`,y:`Loja`}}},I={name:`Semana × dia`,args:{title:`Vendas por semana e dia`,icon:(0,k.jsx)(f,{}),dados:`semana-dia`,axes:{x:`Dia`,y:`Semana`},period:`15/09–26/10`,scale:{method:`quantile`,bands:4}}},L={name:`Métricas (seletor)`,args:{metric:`pecas`}},R={name:`Limites fixos`,args:{scale:{method:`fixed`,thresholds:[2e3,4e3,6e3,8e3]}}},z={args:{defaultView:`table`}},B={parameters:{width:`wide`},render:e=>(0,k.jsxs)(`div`,{className:`rb-heat-story__states`,children:[(0,k.jsx)(r,{...e,title:`Carregando`,status:`loading`,data:v(`receita`)}),(0,k.jsx)(r,{...e,title:`Vazio`,status:`empty`,data:null}),(0,k.jsx)(r,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,k.jsx)(r,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não enviaram as vendas de domingo.`,data:v(`receita`),scope:`16 de 20 lojas`}),(0,k.jsx)(r,{...e,title:`Ausência × zero`,data:S(),description:`Domingo 10h–11h: zero venda (loja fechada), na faixa mais fria. Terça a partir das 13h: sem leitura (contorno tracejado), nunca zero.`})]})},V={globals:{rbMode:`dark`}},H={globals:{rbFamily:`glass`}},U={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},W={name:`Estreito 360`,parameters:{width:`narrow`}},G={name:`Estreito 360 (lojas)`,parameters:{width:`narrow`},args:{title:`Vendas por loja e dia`,icon:(0,k.jsx)(m,{}),dados:`loja-dia`,axes:{x:`Dia`,y:`Loja`}}},K=[`Padrao`,`LojaPorDia`,`SemanaPorDia`,`Metricas`,`LimitesFixos`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`Estreito360Lojas`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Padrão (dia × hora)"
}`,...P.parameters?.docs?.source},description:{story:`Padrão: dia × hora (10h–21h), receita. Domingo 10h–11h é zero (loja fechada); quarta 15h está sem leitura.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Loja × dia",
  args: {
    title: "Vendas por loja e dia",
    icon: <Store />,
    dados: "loja-dia",
    axes: {
      x: "Dia",
      y: "Loja"
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`Loja × dia: 12 lojas fictícias. Serra Alta sem leitura no sábado.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Semana × dia",
  args: {
    title: "Vendas por semana e dia",
    icon: <CalendarDays />,
    dados: "semana-dia",
    axes: {
      x: "Dia",
      y: "Semana"
    },
    period: "15/09–26/10",
    scale: {
      method: "quantile",
      bands: 4
    }
  }
}`,...I.parameters?.docs?.source},description:{story:`Semana × dia: seis semanas, com a do Dia das Crianças mais concentrada. Corte em 4 faixas.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Métricas (seletor)",
  args: {
    metric: "pecas"
  }
}`,...L.parameters?.docs?.source},description:{story:`Seletor de métrica: receita, notas e peças. A troca leva cada célula da faixa antiga à nova, sem cascata.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Limites fixos",
  args: {
    scale: {
      method: "fixed",
      thresholds: [2000, 4000, 6000, 8000]
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Limites fixos por configuração (em vez de quantis): ≥ R$ 2 mil, 4 mil, 6 mil e 8 mil.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table"
  }
}`,...z.parameters?.docs?.source},description:{story:`A alternativa em tabela, aberta.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    width: "wide"
  },
  render: args => <div className="rb-heat-story__states">
      <Heatmap<HeatMetricId> {...args} title="Carregando" status="loading" data={dayHourData("receita")} />
      <Heatmap<HeatMetricId> {...args} title="Vazio" status="empty" data={null} />
      <Heatmap<HeatMetricId> {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <Heatmap<HeatMetricId> {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não enviaram as vendas de domingo." data={dayHourData("receita")} scope="16 de 20 lojas" />
      <Heatmap<HeatMetricId> {...args} title="Ausência × zero" data={absenceVsZeroData()} description="Domingo 10h–11h: zero venda (loja fechada), na faixa mais fria. Terça a partir das 13h: sem leitura (contorno tracejado), nunca zero." />
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e ausência × zero.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...V.parameters?.docs?.source},description:{story:`Modo escuro: a faixa mais quente é a mais luminosa.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...H.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...U.parameters?.docs?.source},description:{story:`Família Glass, escuro: brilho discreto na célula ativa.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...W.parameters?.docs?.source},description:{story:`Celular a 360 px: grade compacta, rótulos fixos; a página nunca rola na horizontal.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360 (lojas)",
  parameters: {
    width: "narrow"
  },
  args: {
    title: "Vendas por loja e dia",
    icon: <Store />,
    dados: "loja-dia",
    axes: {
      x: "Dia",
      y: "Loja"
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Loja × dia a 360 px: nomes das lojas fixos à esquerda, rolagem só dentro do widget se faltar espaço.`,...G.parameters?.docs?.description}}}})))()}export{P as n,q as r,T as t};