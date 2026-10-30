import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Cn as r,On as i,P as a,Sn as o,bt as s,kt as c,t as l,vt as u}from"./src-lgDrkLBh.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{a as f,o as p}from"./fixtures-heatmap-CMRqa3v6.js";import{n as m,t as h}from"./smooth-decorator-DsOGrokP.js";var g,_;function v(){return(v=e((()=>{r(),g={name:`chart-column-stacked`,size:24,node:[[`path`,{d:`M11 13H7`,key:`t0o9gq`}],[`path`,{d:`M19 9h-4`,key:`rera1j`}],[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`rect`,{x:`15`,y:`5`,width:`4`,height:`12`,rx:`1`,key:`q8uenq`}],[`rect`,{x:`7`,y:`8`,width:`4`,height:`9`,rx:`1`,key:`sr5ea`}]]},g.node,_=o(g)})))()}function y(e={}){let{slice:t=`todas`,missing:n=!1}=e,r=S[t],i=x.map(e=>{let n=C(e);return t===`todas`?n:{...n,baseQuantity:n.baseQuantity===null?null:Math.round(n.baseQuantity*r.q0),currentQuantity:n.currentQuantity===null?null:Math.round(n.currentQuantity*r.q1)}});return n&&i.push({id:`bolsas`,label:`Bolsas`,baseQuantity:410,basePrice:159.9,currentQuantity:380,currentPrice:null},{id:`acessorios`,label:`Acessórios`,baseQuantity:null,basePrice:39.9,currentQuantity:1210,currentPrice:42.9}),{items:i,universe:{stores:r.stores,products:1240}}}var b,x,S,C,w,T;function E(){return(E=e((()=>{b={period:`Out/2026 × Out/2025`,scope:`18 lojas`,source:`ERP fictício · vendas por categoria`,basePeriod:`Out/2025`,currentPeriod:`Out/2026`},x=[[`tenis`,`Tênis`,4200,289.9,4630,299.9],[`sandalias`,`Sandálias`,3100,129.9,2890,134.9],[`botas`,`Botas`,1450,349,1220,359],[`sapatilhas`,`Sapatilhas`,2300,119.9,2480,114.9],[`chinelos`,`Chinelos`,3900,49.9,4520,52.9],[`sociais`,`Sapatos sociais`,980,279,860,289],[`mocassins`,`Mocassins`,760,219.9,790,214.9],[`infantil`,`Infantil`,1800,99.9,2050,104.9],[`trilha`,`Linha Trilha`,0,null,340,399],[`galochas`,`Galochas`,220,89.9,0,null]],S={todas:{label:`Todas as lojas`,stores:18,q0:1,q1:1},sul:{label:`Sul`,stores:6,q0:.34,q1:.37},nordeste:{label:`Nordeste`,stores:5,q0:.27,q1:.25}},C=([e,t,n,r,i,a])=>({id:e,label:t,baseQuantity:n,basePrice:r,currentQuantity:i,currentPrice:a}),w={base:3236842,current:3509454.3,volume:158300,price:95410.5,mix:12880.4},T={base:3236842,current:3509454.3,volume:158300,price:null,mix:-21640.8}})))()}var D=t({EfeitosProntos:()=>U,Escuro:()=>z,Estados:()=>R,Estreito360:()=>H,Glass:()=>B,GlassEscuro:()=>V,Padrao:()=>I,ResiduoGrande:()=>W,Tabela:()=>L,TrocaDeRecorte:()=>G,__namedExportsOrder:()=>K,default:()=>F});function O(e){return(0,M.jsxs)(u,{children:[(0,M.jsx)(a,{...e,data:e.data??y()}),(0,M.jsx)(k,{})]})}function k(){let e=s();return(0,M.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function A(e){let[t,n]=(0,j.useState)(`todas`),r=S[t];return(0,M.jsx)(u,{children:(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,M.jsx)(c,{label:`Recorte`,value:t,options:Object.keys(S).map(e=>({value:e,label:S[e].label})),onChange:n}),(0,M.jsx)(a,{...e,scope:t===`todas`?b.scope:`${r.label} · ${r.stores} lojas`,data:y({slice:t})})]})})}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{v(),j=n(),l(),f(),E(),h(),M=d(),{fn:N}=__STORYBOOK_MODULE_TEST__,P=(e,t)=>(0,M.jsx)(i,{client:p,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,M.jsx)(e,{})}),F={title:`Widgets/Cascata do resultado`,id:`widgets-result-waterfall`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Cascata do resultado: do resultado da base ao atual, pelos degraus volume (variação de quantidade ao preço médio da base), preço (variação de preço sobre a quantidade atual) e mix (mudança de participação), com resíduo/outros explícito e conciliação ao centavo. Sinal, seta e valor em texto além da cor; linhas-guia; tabela com R$ e % da base. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Receita: da base ao atual`,icon:(0,M.jsx)(_,{}),period:b.period,scope:b.scope,source:b.source,basePeriod:b.basePeriod,currentPeriod:b.currentPeriod,locale:`pt-BR`,onViewChange:N()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},defaultView:{control:`inline-radio`,options:[`chart`,`table`]},baseline:{control:`inline-radio`,options:[`auto`,`zero`]},icon:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[m,P,(e,t)=>(0,M.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:860,maxWidth:`100%`},children:(0,M.jsx)(e,{})})],render:e=>(0,M.jsx)(O,{...e})},I={name:`Padrão`},L={args:{defaultView:`table`}},R={render:e=>(0,M.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,M.jsx)(a,{...e,title:`Carregando`,status:`loading`,data:y()}),(0,M.jsx)(a,{...e,title:`Vazio`,status:`empty`,data:null}),(0,M.jsx)(a,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,M.jsx)(a,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não fecharam outubro.`,scope:`16 de 18 lojas`,data:{...y(),universe:{stores:16,products:1180}}}),(0,M.jsx)(a,{...e,title:`Sem dado × zero`,data:y({missing:!0}),description:`Bolsas sem preço atual e Acessórios sem quantidade da base: ficam declarados em “Sem dado”, fora da base e do atual calculados, nunca como zero.`})]})},z={globals:{rbMode:`dark`}},B={globals:{rbFamily:`glass`}},V={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},H={name:`Estreito 360`,parameters:{width:`narrow`}},U={name:`Efeitos prontos`,args:{title:`Receita: efeitos da fonte`,data:{effects:w,universe:{stores:18}}}},W={name:`Resíduo grande`,args:{title:`Receita: preço sem dado`,data:{effects:T,universe:{stores:18}}}},G={name:`Troca de recorte`,render:e=>(0,M.jsx)(A,{...e})},K=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`EfeitosProntos`,`ResiduoGrande`,`TrocaDeRecorte`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...I.parameters?.docs?.source},description:{story:`Padrão: receita por categoria, out/2026 × out/2025, 18 lojas; item novo e descontinuado no resíduo.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table"
  }
}`,...L.parameters?.docs?.source},description:{story:`A alternativa em tabela, aberta: cada degrau em R$ e em % da base, com o acumulado e a conciliação.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <ResultWaterfall {...args} title="Carregando" status="loading" data={waterfallData()} />
      <ResultWaterfall {...args} title="Vazio" status="empty" data={null} />
      <ResultWaterfall {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <ResultWaterfall {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não fecharam outubro." scope="16 de 18 lojas" data={{
      ...waterfallData(),
      universe: {
        stores: 16,
        products: 1180
      }
    }} />
      <ResultWaterfall {...args} title="Sem dado × zero" data={waterfallData({
      missing: true
    })} description="Bolsas sem preço atual e Acessórios sem quantidade da base: ficam declarados em “Sem dado”, fora da base e do atual calculados, nunca como zero." />
    </div>
}`,...R.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e itens sem dado (nunca zero).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...z.parameters?.docs?.source},description:{story:`Modo escuro.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...B.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...V.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...H.parameters?.docs?.source},description:{story:`Celular a 360 px: a cascata vira linhas horizontais; rótulos nunca se sobrepõem.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Efeitos prontos",
  args: {
    title: "Receita: efeitos da fonte",
    data: {
      effects: WATERFALL_EFFECTS,
      universe: {
        stores: 18
      }
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`Efeitos prontos da fonte (entrada b): o widget calcula o resíduo = atual − base − Σ efeitos.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Resíduo grande",
  args: {
    title: "Receita: preço sem dado",
    data: {
      effects: WATERFALL_EFFECTS_GAP,
      universe: {
        stores: 18
      }
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`Resíduo grande: o preço veio sem dado da fonte; o valor dele fica no resíduo, explícito.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...G.parameters?.docs?.source},description:{story:`Troca de recorte: cada barra vai do valor antigo ao novo, sem cascata e sem passar por zero.`,...G.parameters?.docs?.description}}}})))()}export{D as n,q as r,I as t};