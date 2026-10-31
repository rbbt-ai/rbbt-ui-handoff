import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{en as r,ht as i,ir as a,nn as o,rr as s,t as c,xr as l}from"./src-BbyRaoY1.js";import{t as u}from"./jsx-runtime-MKhVqBIO.js";import{n as d,t as f}from"./store-DU7b4cjY.js";import{a as p,o as m}from"./fixtures-heatmap-Av-RnC91.js";import{n as h,t as g}from"./smooth-decorator-Ch0T28w-.js";function _(e,t){let n={id:e.id,label:e.label,detail:e.detail,velocity:t===`sellthrough`?e.st:e.un,coverage:e.cov,rupture:e.rup};return e.stores&&(n.stores=e.stores.map((e,t)=>({id:`loja-${t+1}`,label:w[t],coverage:e}))),n}function v(e=`unidades`){return E[e]}function y(){return D}function b(){return O}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{x=[{id:`unidades`,label:`Unidades por semana`,format:{style:`number`,suffix:`un/sem`,maximumFractionDigits:1},threshold:12},{id:`sellthrough`,label:`Sell-through`,format:{style:`percent`,maximumFractionDigits:0},threshold:.35}],S=[{id:`unidades`,label:`Unidades por semana`,format:{style:`number`,suffix:`un/sem`,maximumFractionDigits:0},threshold:250}],C={period:`20–26/10`,scope:`6 lojas`,stockDate:`2026-10-26`,source:`ERP fictício`},w=[`Centro`,`Jardins`,`Moinhos`,`Batel`,`Savassi`,`Pituba`],T=[{id:`ref-01`,label:`Tênis Trilha Norte`,detail:`Tênis · Linha Trilha`,un:31.5,st:.71,cov:2.4,rup:.38,stores:[2,2.8,1.9,3.1,2.2,2.6]},{id:`ref-02`,label:`Tênis Corrida Vento`,detail:`Tênis · Linha Corrida`,un:24,st:.62,cov:4.1,rup:.12},{id:`ref-03`,label:`Sandália Maré`,detail:`Sandália · Verão`,un:18.6,st:.55,cov:5.5,rup:.05},{id:`ref-04`,label:`Chinelo Brisa`,detail:`Chinelo · Verão`,un:37.8,st:.82,cov:1.6,rup:.21},{id:`ref-05`,label:`Rasteira Coral`,detail:`Rasteira · Verão`,un:14.2,st:.33,cov:6.8,rup:0},{id:`ref-06`,label:`Tênis Casual Duna`,detail:`Tênis · Casual`,un:21.3,st:.58,cov:3.2,rup:.09,stores:[2.1,14.5,3.4,.8,2.6,1.9]},{id:`ref-07`,label:`Bota Serra Fina`,detail:`Bota · Inverno`,un:4.2,st:.12,cov:19.5,rup:0},{id:`ref-08`,label:`Scarpin Noite`,detail:`Scarpin · Festa`,un:0,st:0,cov:30,rup:0},{id:`ref-09`,label:`Oxford Ribeira`,detail:`Social · Masculino`,un:6.8,st:.19,cov:14.2,rup:.02},{id:`ref-10`,label:`Bota Chelsea Neblina`,detail:`Bota · Inverno`,un:2.5,st:.06,cov:46,rup:0},{id:`ref-11`,label:`Mocassim Lapa`,detail:`Mocassim · Casual`,un:8.9,st:.24,cov:11.3,rup:.04,stores:[18,9.2,10.4,8.8,12.1,1.5]},{id:`ref-12`,label:`Sapatênis Porto`,detail:`Sapatênis · Casual`,un:16.4,st:.47,cov:9.6,rup:0},{id:`ref-13`,label:`Tênis Infantil Pipa`,detail:`Infantil`,un:27.1,st:.66,cov:8.4,rup:.03},{id:`ref-14`,label:`Sandália Plataforma Sol`,detail:`Sandália · Verão`,un:12.9,st:.38,cov:12.7,rup:0},{id:`ref-15`,label:`Mule Areia`,detail:`Mule · Casual`,un:19.8,st:.52,cov:10.2,rup:.07},{id:`ref-16`,label:`Slip-on Lagoa`,detail:`Slip-on · Casual`,un:7.4,st:.36,cov:5.2,rup:.14},{id:`ref-17`,label:`Tamanco Jardim`,detail:`Tamanco · Casual`,un:3.1,st:.22,cov:3.6,rup:.08},{id:`ref-18`,label:`Alpargata Vila`,detail:`Alpargata · Verão`,un:10.6,st:.33,cov:6.1,rup:null},{id:`ref-19`,label:`Scarpin Aurora`,detail:`Scarpin · Social`,un:5,st:.28,cov:7.2,rup:.18},{id:`ref-20`,label:`Coturno Granito`,detail:`Coturno · Inverno`,un:9.4,st:.27,cov:null,rup:0},{id:`ref-21`,label:`Papete Cascata`,detail:`Papete · Verão`,un:null,st:null,cov:6,rup:null}],E={unidades:{items:T.map(e=>_(e,`unidades`))},sellthrough:{items:T.map(e=>_(e,`sellthrough`))}},D={items:[{id:`loja-1`,label:`Centro`,velocity:412,coverage:5.8,rupture:.07},{id:`loja-2`,label:`Jardins`,velocity:368,coverage:9.4,rupture:.02},{id:`loja-3`,label:`Moinhos`,velocity:214,coverage:12.8,rupture:0},{id:`loja-4`,label:`Batel`,velocity:236,coverage:4.6,rupture:.11},{id:`loja-5`,label:`Savassi`,velocity:301,coverage:6.9,rupture:.31},{id:`loja-6`,label:`Pituba`,velocity:176,coverage:15.2,rupture:.04},{id:`loja-7`,label:`Aldeota`,velocity:284,coverage:10.1,rupture:0},{id:`loja-8`,label:`Vale Verde`,velocity:132,coverage:6.2,rupture:.09},{id:`loja-9`,label:`Serra Alta`,velocity:158,coverage:null,rupture:null}]},O={items:[{id:`a-1`,label:`Scarpin Noite`,detail:`Zero venda na semana: leitura, no zero do eixo`,velocity:0,coverage:30,rupture:0},{id:`a-2`,label:`Rasteira Coral`,detail:`Ruptura zero: leitura, sem anel`,velocity:14.2,coverage:6.8,rupture:0},{id:`a-3`,label:`Alpargata Vila`,detail:`Ruptura sem leitura`,velocity:10.6,coverage:6.1,rupture:null},{id:`a-4`,label:`Tênis Trilha Norte`,detail:`Ruptura em 38% dos dias`,velocity:31.5,coverage:2.4,rupture:.38},{id:`a-5`,label:`Coturno Granito`,velocity:9.4,coverage:null,rupture:0},{id:`a-6`,label:`Papete Cascata`,velocity:null,coverage:6,rupture:null},{id:`a-7`,label:`Bota Rio Claro`,velocity:null,coverage:null}]}})))()}var A=t({Escuro:()=>W,Estados:()=>U,Estreito360:()=>q,Glass:()=>G,GlassEscuro:()=>K,LimitesConfigurados:()=>V,Padrao:()=>R,PorLoja:()=>z,SellThrough:()=>B,Tabela:()=>H,__namedExportsOrder:()=>J,default:()=>L});function j({dados:e=`referencias`,metric:t=`unidades`,onMetricChange:n,...a}){let[o,s]=(0,N.useState)(t);return(0,P.jsxs)(r,{children:[(0,P.jsx)(i,{...a,data:a.data??(e===`lojas`?y():v(o)),metric:o,onMetricChange:e=>{n?.(e),s(e)}}),(0,P.jsx)(M,{})]})}function M(){let e=o();return(0,P.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{a(),d(),N=n(),c(),p(),k(),g(),P=u(),{fn:F}=__STORYBOOK_MODULE_TEST__,I=(e,t)=>(0,P.jsx)(l,{client:m,mode:t.globals.rbMode??`light`,className:`rb-quad-story`,children:(0,P.jsx)(e,{})}),L={title:`Widgets/Quadrante velocidade × cobertura`,id:`widgets-coverage-quadrant`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Quadrante velocidade de venda × cobertura em semanas: cada ponto é uma referência (ou loja), com a ação do quadrante em texto (repor, remarcar, remanejar, manter, acompanhar), anel de ruptura (% dos dias sem estoque), limites visíveis e configuráveis, lista "Sem leitura" (ausência nunca vira zero), balão, teclado e tabela. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Velocidade × cobertura`,icon:(0,P.jsx)(s,{}),metrics:x,metric:`unidades`,period:C.period,scope:C.scope,stockDate:C.stockDate,source:C.source,locale:`pt-BR`,dados:`referencias`,onMetricChange:F()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},metric:{control:`inline-radio`,options:[`unidades`,`sellthrough`]},itemKind:{control:`inline-radio`,options:[`reference`,`store`]},dados:{control:`inline-radio`,options:[`referencias`,`lojas`],description:`Recorte da história.`},icon:{control:!1},data:{control:!1},metrics:{control:!1},messages:{control:!1}},decorators:[h,I,(e,t)=>(0,P.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`wide`?1240:640,maxWidth:`100%`},children:(0,P.jsx)(e,{})})],render:e=>(0,P.jsx)(j,{...e})},R={name:`Padrão (referências)`},z={name:`Por loja`,args:{title:`Velocidade × cobertura por loja`,icon:(0,P.jsx)(f,{}),dados:`lojas`,itemKind:`store`,metrics:S,scope:`9 lojas`}},B={name:`Sell-through`,args:{metric:`sellthrough`}},V={name:`Limites configurados`,args:{thresholds:{velocity:18,coverage:6},rule:{imbalance:{high:10,low:2}},description:`Limites desta história: rápido a partir de 18 un/sem; cobertura alta a partir de 6 semanas. Remanejar: uma loja com 10 semanas ou mais e outra com 2 ou menos.`}},H={args:{defaultView:`table`}},U={parameters:{width:`wide`},render:e=>(0,P.jsxs)(`div`,{className:`rb-heat-story__states`,children:[(0,P.jsx)(i,{...e,title:`Carregando`,status:`loading`,data:v(`unidades`)}),(0,P.jsx)(i,{...e,title:`Vazio`,status:`empty`,data:null}),(0,P.jsx)(i,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,P.jsx)(i,{...e,title:`Parcial`,status:`partial`,partialNote:`Moinhos e Pituba ainda não enviaram o estoque de 26/10.`,data:v(`unidades`),scope:`4 de 6 lojas`}),(0,P.jsx)(i,{...e,title:`Ausência × zero`,data:b(),description:`Scarpin Noite vendeu zero (leitura: fica no zero do eixo). Rasteira Coral tem ruptura zero (sem anel). Sem velocidade ou sem cobertura: lista Sem leitura, nunca no zero.`})]})},W={globals:{rbMode:`dark`}},G={globals:{rbFamily:`glass`}},K={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},q={name:`Estreito 360`,parameters:{width:`narrow`}},J=[`Padrao`,`PorLoja`,`SellThrough`,`LimitesConfigurados`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Padrão (referências)"
}`,...R.parameters?.docs?.source},description:{story:`Padrão: 21 referências, unidades por semana (limite 12 un/sem) × cobertura (limite 8 semanas).
Tênis Casual Duna e Mocassim Lapa remanejam (sobra numa loja, falta em outra); Scarpin Noite vendeu
zero (leitura, no zero do eixo); Coturno Granito e Papete Cascata estão sem leitura.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Por loja",
  args: {
    title: "Velocidade × cobertura por loja",
    icon: <Store />,
    dados: "lojas",
    itemKind: "store",
    metrics: storeMetrics,
    scope: "9 lojas"
  }
}`,...z.parameters?.docs?.source},description:{story:`Itens = lojas: a velocidade é a da loja (limite 250 un/sem). Serra Alta sem cobertura, fora do gráfico.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Sell-through",
  args: {
    metric: "sellthrough"
  }
}`,...B.parameters?.docs?.source},description:{story:`Eixo x em sell-through (%), limite 35%: os pontos mudam de lugar e alguns trocam de quadrante.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Limites configurados",
  args: {
    thresholds: {
      velocity: 18,
      coverage: 6
    },
    rule: {
      imbalance: {
        high: 10,
        low: 2
      }
    },
    description: "Limites desta história: rápido a partir de 18 un/sem; cobertura alta a partir de 6 semanas. Remanejar: uma loja com 10 semanas ou mais e outra com 2 ou menos."
  }
}`,...V.parameters?.docs?.source},description:{story:`Limites e regra por configuração: 18 un/sem, 6 semanas e remanejar com sobra ≥ 10 e falta ≤ 2 semanas.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table"
  }
}`,...H.parameters?.docs?.source},description:{story:`A alternativa em tabela, aberta: todos os itens, com quadrante, ação e ruptura.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    width: "wide"
  },
  render: args =>
  // Mesma grade de estados do mapa de calor (classe do preview do catálogo).
  <div className="rb-heat-story__states">
      <CoverageQuadrant<QuadMetricId> {...args} title="Carregando" status="loading" data={quadrantReferences("unidades")} />
      <CoverageQuadrant<QuadMetricId> {...args} title="Vazio" status="empty" data={null} />
      <CoverageQuadrant<QuadMetricId> {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <CoverageQuadrant<QuadMetricId> {...args} title="Parcial" status="partial" partialNote="Moinhos e Pituba ainda não enviaram o estoque de 26/10." data={quadrantReferences("unidades")} scope="4 de 6 lojas" />
      <CoverageQuadrant<QuadMetricId> {...args} title="Ausência × zero" data={quadrantAbsence()} description="Scarpin Noite vendeu zero (leitura: fica no zero do eixo). Rasteira Coral tem ruptura zero (sem anel). Sem velocidade ou sem cobertura: lista Sem leitura, nunca no zero." />
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e ausência × zero.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...W.parameters?.docs?.source},description:{story:`Modo escuro.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...G.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...K.parameters?.docs?.source},description:{story:`Família Glass, escuro: halo discreto no ponto ativo.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...q.parameters?.docs?.source},description:{story:`Celular a 360 px: gráfico compacto; a página nunca rola na horizontal.`,...q.parameters?.docs?.description}}}})))()}export{R as n,Y as r,A as t};