import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Cn as r,I as i,On as a,Sn as o,bt as s,kt as c,t as l,vt as u}from"./src-lgDrkLBh.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{a as f,o as p}from"./fixtures-heatmap-CMRqa3v6.js";import{n as m,t as h}from"./smooth-decorator-DsOGrokP.js";var g,_;function v(){return(v=e((()=>{r(),g={name:`scale`,size:24,node:[[`path`,{d:`M12 3v18`,key:`108xh3`}],[`path`,{d:`m19 8 3 8a5 5 0 0 1-6 0zV7`,key:`zcdpyk`}],[`path`,{d:`M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`,key:`1yorad`}],[`path`,{d:`m5 8 3 8a5 5 0 0 1-6 0zV7`,key:`eua70x`}],[`path`,{d:`M7 21h10`,key:`1b0cd5`}]]},g.node,_=o(g)})))()}function y(e={}){let{clean:t=!0,by:n=`category`,slice:r=`todas`}=e,i=C[r],a=(n===`brand`?S:x).map((e,t)=>{let a=w(e);if(n===`brand`||r===`todas`)return a;let o=i.sold[t]??1,s=i.available[t]??1;return{...a,sold:Math.round(e[2]*o),available:Math.round(e[3]*s),reserved:Math.round(e[4]*s),blocked:Math.round(e[5]*s)}});return t||a.push({id:`acessorios`,label:`Acessórios`,sold:null,available:640,reserved:30,blocked:0},{id:`bolsas`,label:`Bolsas`,sold:310,available:null,reserved:null,blocked:null},{id:`galochas`,label:`Galochas`,sold:0,available:120,reserved:0,blocked:4}),{items:a,stockAt:b.stockAt,universe:{stores:i.stores,products:i.products}}}var b,x,S,C,w;function T(){return(T=e((()=>{b={period:`Semana 20–26/10`,scope:`18 lojas`,source:`ERP fictício · vendas e estoque`,stockAt:`2026-10-26T23:59:00-03:00`,timeZone:`America/Sao_Paulo`},x=[[`tenis`,`Tênis`,3780,3150,420,96],[`sandalias`,`Sandálias`,2140,1380,210,40],[`botas`,`Botas`,620,1890,120,210],[`sapatilhas`,`Sapatilhas`,1460,1520,160,22],[`chinelos`,`Chinelos`,1980,1110,90,12],[`sociais`,`Sapatos sociais`,540,1260,80,64],[`mocassins`,`Mocassins`,710,760,60,15],[`infantil`,`Infantil`,990,1430,110,30]],S=[[`passo-leve`,`Passo Leve`,2860,2410,260,40],[`trilha-norte`,`Trilha Norte`,2210,2650,240,70],[`vertice`,`Vértice`,1240,2180,150,120],[`mare-alta`,`Maré Alta`,1690,1240,130,20],[`solar`,`Solar`,1320,1290,120,35],[`ponto-fino`,`Ponto Fino`,980,1460,110,60],[`raiz`,`Raiz`,1150,640,90,18],[`brisa`,`Brisa`,770,630,70,12]],C={todas:{label:`Todas as lojas`,stores:18,products:1240,sold:[1,1,1,1,1,1,1,1],available:[1,1,1,1,1,1,1,1]},sul:{label:`Sul`,stores:6,products:1105,sold:[.32,.22,.48,.3,.18,.36,.3,.28],available:[.3,.28,.4,.29,.24,.33,.3,.31]},nordeste:{label:`Nordeste`,stores:5,products:980,sold:[.21,.34,.06,.2,.38,.15,.22,.24],available:[.23,.3,.12,.22,.3,.2,.2,.24]}},w=([e,t,n,r,i,a])=>({id:e,label:t,sold:n,available:r,reserved:i,blocked:a})})))()}var E=t({Escuro:()=>B,Estados:()=>z,Estreito360:()=>U,Glass:()=>V,GlassEscuro:()=>H,Padrao:()=>F,PorMarca:()=>I,Tabela:()=>R,TrocaDeRecorte:()=>L,__namedExportsOrder:()=>W,default:()=>P});function D({dados:e=`limpos`,...t}){return(0,j.jsxs)(u,{children:[(0,j.jsx)(i,{...t,data:t.data??y({clean:e===`limpos`,by:t.groupLabel===`Marca`?`brand`:`category`})}),(0,j.jsx)(O,{})]})}function O(){let e=s();return(0,j.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function k({dados:e,...t}){let[n,r]=(0,A.useState)(`todas`),a=C[n];return(0,j.jsx)(u,{children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,j.jsx)(c,{label:`Recorte`,value:n,options:Object.keys(C).map(e=>({value:e,label:C[e].label})),onChange:r}),(0,j.jsx)(i,{...t,scope:n===`todas`?b.scope:`${a.label} · ${a.stores} lojas`,data:y({slice:n})})]})})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{v(),A=n(),l(),f(),T(),h(),j=d(),{fn:M}=__STORYBOOK_MODULE_TEST__,N=(e,t)=>(0,j.jsx)(a,{client:p,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,j.jsx)(e,{})}),P={title:`Widgets/Mix vendido × disponível`,id:`widgets-mix-balance`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Mix vendido × mix disponível em barras espelhadas: à esquerda, unidades vendidas do item ÷ vendidas do total × 100; à direita, unidades disponíveis do item ÷ total disponível × 100. Mesmo universo de lojas e produtos nos dois lados, com os denominadores visíveis, posição do estoque datada e reservado e bloqueado à parte. O desequilíbrio vem em texto (risco de ruptura ou excesso) e em p.p., com ordenação pelo desequilíbrio. Ausência fica fora dos dois totais, nunca como zero. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Mix vendido × disponível`,icon:(0,j.jsx)(_,{}),groupLabel:`Categoria`,period:b.period,scope:b.scope,source:b.source,timeZone:b.timeZone,locale:`pt-BR`,dados:`limpos`,onSortChange:M(),onViewChange:M()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},defaultSort:{control:`inline-radio`,options:[`imbalance`,`sold`,`name`]},defaultView:{control:`inline-radio`,options:[`bars`,`table`]},dados:{control:`inline-radio`,options:[`limpos`,`com-ausencia`],description:`Dados da história.`},icon:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[m,N,(e,t)=>(0,j.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`medium`?640:860,maxWidth:`100%`},children:(0,j.jsx)(e,{})})],render:e=>(0,j.jsx)(D,{...e})},F={name:`Padrão`},I={name:`Por marca`,args:{groupLabel:`Marca`}},L={name:`Troca de recorte`,render:e=>(0,j.jsx)(k,{...e})},R={args:{defaultView:`table`,dados:`com-ausencia`}},z={render:e=>(0,j.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,j.jsx)(i,{...e,title:`Carregando`,status:`loading`,data:y()}),(0,j.jsx)(i,{...e,title:`Vazio`,status:`empty`,data:null}),(0,j.jsx)(i,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,j.jsx)(i,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não enviaram a posição de 26/10.`,scope:`16 de 18 lojas`,data:{...y(),universe:{stores:16,products:1180}}}),(0,j.jsx)(i,{...e,title:`Ausência × zero`,data:y({clean:!1}),description:`Acessórios sem leitura da venda e Bolsas sem leitura do estoque: ficam fora dos dois totais e aparecem em “Sem leitura”, nunca como zero. Galochas vendeu zero de verdade (0% do mix vendido).`})]})},B={globals:{rbMode:`dark`}},V={globals:{rbFamily:`glass`}},H={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},U={name:`Estreito 360`,parameters:{width:`narrow`}},W=[`Padrao`,`PorMarca`,`TrocaDeRecorte`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...F.parameters?.docs?.source},description:{story:`Padrão: por categoria, semana 20–26/10, posição do estoque de 26/10 23:59, ordenado pelo desequilíbrio.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Por marca",
  args: {
    groupLabel: "Marca"
  }
}`,...I.parameters?.docs?.source},description:{story:`O mesmo universo agrupado por marca.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...L.parameters?.docs?.source},description:{story:`Troca de recorte: cada barra vai do valor antigo ao novo, sem cascata e sem passar por zero; as linhas deslizam para a nova ordem.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table",
    dados: "com-ausencia"
  }
}`,...R.parameters?.docs?.source},description:{story:`A alternativa em tabela, aberta: unidades, participações, reservado e bloqueado, diferença e situação, com total.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <MixBalance {...args} title="Carregando" status="loading" data={mixData()} />
      <MixBalance {...args} title="Vazio" status="empty" data={null} />
      <MixBalance {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <MixBalance {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não enviaram a posição de 26/10." scope="16 de 18 lojas" data={{
      ...mixData(),
      universe: {
        stores: 16,
        products: 1180
      }
    }} />
      <MixBalance {...args} title="Ausência × zero" data={mixData({
      clean: false
    })} description="Acessórios sem leitura da venda e Bolsas sem leitura do estoque: ficam fora dos dois totais e aparecem em “Sem leitura”, nunca como zero. Galochas vendeu zero de verdade (0% do mix vendido)." />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e ausência × zero.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
  }
}`,...U.parameters?.docs?.source},description:{story:`Celular a 360 px: rótulo e leitura em cima, barras espelhadas embaixo; a página nunca rola na horizontal.`,...U.parameters?.docs?.description}}}})))()}export{F as n,G as r,E as t};