import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{bt as r,cr as i,en as a,mn as o,nn as s,sr as c,t as l,xr as u}from"./src-BbyRaoY1.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{a as f,o as p}from"./fixtures-heatmap-Av-RnC91.js";import{n as m,t as h}from"./smooth-decorator-Ch0T28w-.js";function g(e={}){let t=e.factor??1,n=e.stores?y.filter(t=>e.stores.includes(t.id)):y,r=[];return v.forEach((i,a)=>{n.forEach(n=>{let o=y.indexOf(n),s=b[i.id];if(i.id===`brisa`&&(n.id===`jardins`||n.id===`moinhos`))return;let c=s.base*1e3*x[n.id]*S(a,o)*t,l=Math.min(.62,s.old*(.8+.4*((o*7+a*3)%5)/4)),u=s.mid*(.9+.2*((o+a)%3)/2),d={"0-30":C(c*(1-u-l)),"31-90":C(c*u),"90+":C(c*l)};e.clean||(i.id===`brisa`&&n.id===`aldeota`&&(d[`90+`]=null),i.id===`solar`&&n.id===`pituba`&&(d[`0-30`]=null,d[`31-90`]=null,d[`90+`]=null),i.id===`ponto-fino`&&n.id===`batel`&&(d[`0-30`]=0,d[`31-90`]=0,d[`90+`]=0)),r.push({brand:i.id,store:n.id,ages:d})})}),{brands:v,stores:n,positions:r}}var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{_={position:`26/10/2026`,scope:`8 lojas`,source:`ERP fictício · estoque a custo médio`},v=[{id:`passo-leve`,label:`Passo Leve`},{id:`trilha-norte`,label:`Trilha Norte`},{id:`vertice`,label:`Vértice`},{id:`mare-alta`,label:`Maré Alta`},{id:`solar`,label:`Solar`},{id:`ponto-fino`,label:`Ponto Fino`},{id:`raiz`,label:`Raiz`},{id:`brisa`,label:`Brisa`}],y=[{id:`centro`,label:`Centro`},{id:`jardins`,label:`Jardins`},{id:`moinhos`,label:`Moinhos`},{id:`savassi`,label:`Savassi`},{id:`boa-viagem`,label:`Boa Viagem`},{id:`batel`,label:`Batel`},{id:`pituba`,label:`Pituba`},{id:`aldeota`,label:`Aldeota`}],b={"passo-leve":{base:168,mid:.24,old:.06},"trilha-norte":{base:132,mid:.3,old:.14},vertice:{base:104,mid:.33,old:.24},"mare-alta":{base:86,mid:.27,old:.09},solar:{base:71,mid:.29,old:.17},"ponto-fino":{base:58,mid:.31,old:.21},raiz:{base:49,mid:.28,old:.41},brisa:{base:33,mid:.26,old:.12}},x={centro:1.32,jardins:1.18,moinhos:1.04,savassi:.97,"boa-viagem":.9,batel:.84,pituba:.71,aldeota:.63},S=(e,t)=>1+.11*Math.sin(e*2.3+t*1.1)+.06*Math.cos(e*.7-t*1.9),C=e=>Math.round(e*100)/100,w={todas:{label:`Todas as lojas`,stores:void 0},sul:{label:`Sul e Sudeste`,stores:[`centro`,`jardins`,`moinhos`,`savassi`,`batel`]},nordeste:{label:`Nordeste`,stores:[`boa-viagem`,`pituba`,`aldeota`]}}})))()}var E=t({Detalhe:()=>L,Escuro:()=>H,Estados:()=>V,Estreito360:()=>G,Glass:()=>U,GlassEscuro:()=>W,LojaMarca:()=>I,Padrao:()=>F,PrecoDeVenda:()=>R,Tabela:()=>B,TrocaDeRecorte:()=>z,__namedExportsOrder:()=>K,default:()=>P});function D({dados:e=`limpos`,...t}){return(0,j.jsxs)(a,{children:[(0,j.jsx)(r,{...t,data:t.data??g({clean:e===`limpos`,factor:t.basis===`price`?2.1:1})}),(0,j.jsx)(O,{})]})}function O(){let e=s();return(0,j.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function k({dados:e,...t}){let[n,i]=(0,A.useState)(`todas`),s=w[n];return(0,j.jsx)(a,{children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,j.jsx)(o,{label:`Recorte`,value:n,options:Object.keys(w).map(e=>({value:e,label:w[e].label})),onChange:i}),(0,j.jsx)(r,{...t,scope:s.stores?`${s.label} · ${s.stores.length} lojas`:_.scope,data:g({clean:!0,stores:s.stores})})]})})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{i(),A=n(),l(),f(),T(),h(),j=d(),{fn:M}=__STORYBOOK_MODULE_TEST__,N=(e,t)=>(0,j.jsx)(u,{client:p,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,j.jsx)(e,{})}),P={title:`Widgets/Capital em estoque`,id:`widgets-stock-capital`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Capital parado em estoque: barras por idade (0–30, 31–90 e +90 dias, com valor e % do capital; a +90 com hachura de risco) e treemap por marca e por loja (área = capital; cor = fatia acima de 90 dias, em faixas). Clique ou Enter detalha o bloco, com caminho de volta. Base de valor declarada, posição datada, ausência fora da soma (nunca zero) e conciliação ao centavo. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Capital em estoque`,icon:(0,j.jsx)(c,{}),basis:`cost`,position:_.position,scope:_.scope,source:_.source,locale:`pt-BR`,dados:`limpos`,onFocusChange:M(),onHierarchyChange:M()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},basis:{control:`inline-radio`,options:[`cost`,`price`]},defaultHierarchy:{control:`inline-radio`,options:[`brand-store`,`store-brand`]},dados:{control:`inline-radio`,options:[`limpos`,`com-ausencia`],description:`Dados da história.`},icon:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[m,N,(e,t)=>(0,j.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`medium`?640:1080,maxWidth:`100%`},children:(0,j.jsx)(e,{})})],render:e=>(0,j.jsx)(D,{...e})},F={name:`Padrão (marca → loja)`},I={name:`Loja → marca`,args:{defaultHierarchy:`store-brand`}},L={args:{defaultFocus:`raiz`}},R={name:`A preço de venda`,args:{basis:`price`}},z={name:`Troca de recorte`,render:e=>(0,j.jsx)(k,{...e})},B={args:{defaultView:`table`}},V={render:e=>(0,j.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,j.jsx)(r,{...e,title:`Carregando`,status:`loading`,data:g()}),(0,j.jsx)(r,{...e,title:`Vazio`,status:`empty`,data:null}),(0,j.jsx)(r,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,j.jsx)(r,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não enviaram a posição de 26/10.`,scope:`6 de 8 lojas`,data:g({clean:!0,stores:[`centro`,`jardins`,`moinhos`,`savassi`,`boa-viagem`,`batel`]})}),(0,j.jsx)(r,{...e,title:`Ausência × zero`,data:g(),description:`Pituba × Solar sem leitura nenhuma e Aldeota × Brisa sem a faixa +90: ficam fora da soma e aparecem na lista, nunca como zero. Batel × Ponto Fino é zero de verdade (estoque zerado).`})]})},H={globals:{rbMode:`dark`}},U={globals:{rbFamily:`glass`}},W={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},G={name:`Estreito 360`,parameters:{width:`narrow`}},K=[`Padrao`,`LojaMarca`,`Detalhe`,`PrecoDeVenda`,`TrocaDeRecorte`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Padrão (marca → loja)"
}`,...F.parameters?.docs?.source},description:{story:`Padrão: marca → loja, a custo, posição de 26/10. Clique (ou Enter) num bloco abre as lojas da marca.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Loja → marca",
  args: {
    defaultHierarchy: "store-brand"
  }
}`,...I.parameters?.docs?.source},description:{story:`A mesma posição na hierarquia loja → marca.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFocus: "raiz"
  }
}`,...L.parameters?.docs?.source},description:{story:`Detalhe aberto: as lojas da Raiz, a marca com mais capital acima de 90 dias. Esc ou "Voltar" sobe.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "A preço de venda",
  args: {
    basis: "price"
  }
}`,...R.parameters?.docs?.source},description:{story:`Base preço de venda, declarada no topo dos números.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...z.parameters?.docs?.source},description:{story:`Troca de recorte: cada barra e cada bloco vão do valor antigo ao novo, sem cascata e sem passar por zero.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table"
  }
}`,...B.parameters?.docs?.source},description:{story:`A alternativa em tabela, aberta: idade e o nível atual do treemap.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <StockCapital {...args} title="Carregando" status="loading" data={capitalData()} />
      <StockCapital {...args} title="Vazio" status="empty" data={null} />
      <StockCapital {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <StockCapital {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não enviaram a posição de 26/10." scope="6 de 8 lojas" data={capitalData({
      clean: true,
      stores: ["centro", "jardins", "moinhos", "savassi", "boa-viagem", "batel"]
    })} />
      <StockCapital {...args} title="Ausência × zero" data={capitalData()} description="Pituba × Solar sem leitura nenhuma e Aldeota × Brisa sem a faixa +90: ficam fora da soma e aparecem na lista, nunca como zero. Batel × Ponto Fino é zero de verdade (estoque zerado)." />
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e ausência × zero.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...H.parameters?.docs?.source},description:{story:`Modo escuro.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...U.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...W.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...G.parameters?.docs?.source},description:{story:`Celular a 360 px: barras em cima, treemap embaixo, mais alto que largo; a página nunca rola na horizontal.`,...G.parameters?.docs?.description}}}})))()}export{E as n,q as r,F as t};