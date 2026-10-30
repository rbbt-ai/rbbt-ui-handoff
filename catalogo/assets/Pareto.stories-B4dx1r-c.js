import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{Cn as n,D as r,On as i,Sn as a,bt as o,t as s,vt as c}from"./src-lgDrkLBh.js";import{t as l}from"./jsx-runtime-MKhVqBIO.js";import{a as u,o as d}from"./fixtures-heatmap-CMRqa3v6.js";import{n as f,t as p}from"./smooth-decorator-DsOGrokP.js";var m,h;function g(){return(g=e((()=>{n(),m={name:`chart-column-decreasing`,size:24,node:[[`path`,{d:`M13 17V9`,key:`1fwyjl`}],[`path`,{d:`M18 17v-3`,key:`1sqioe`}],[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M8 17V5`,key:`1wzmnc`}]]},m.node,h=a(m)})))()}function _(){let e=[],t=S.map((e,t)=>1/(t+2)**1.5),n=Array(S.length).fill(0);for(let r=0;r<85;r++){let i=C[r%C.length],a=w[Math.floor(r/C.length)%w.length],o=2912e3/(r+4)**2,s=r*37%100/100,c=Math.round(o)+s,l=0;for(let e=1;e<S.length;e++)n[e]/t[e]<n[l]/t[l]&&(l=e);n[l]=n[l]+c,e.push({id:`p${String(r+1).padStart(2,`0`)}`,label:`${i} ${a}`,brand:l,value:c})}return e}function v(e){return Math.round(e*100)/100}function y(e,t={}){let n=!!t.absent,r=T.map(e=>({...e,brand:E.has(e.id)?9:e.brand,value:n&&E.has(e.id)?null:e.value}));return e===`produto`?r.map(e=>({id:e.id,label:e.label,value:e.value})):S.map(([e,t],n)=>{let i=r.filter(e=>e.brand===n);return{id:e,label:t,value:i.length===0||i.some(e=>e.value===null)?null:v(i.reduce((e,t)=>e+(t.value??0),0))}})}function b(e={}){return{dimensions:[{id:`marca`,label:`Marca`,noun:{one:`marca`,other:`marcas`},items:y(`marca`,e)},{id:`produto`,label:`Produto`,noun:{one:`produto`,other:`produtos`},items:y(`produto`,e)}]}}var x,S,C,w,T,E;function D(){return(D=e((()=>{x={period:`Outubro 2026`,scope:`18 lojas`,source:`ERP fictício · vendas faturadas`},S=[[`passo-leve`,`Passo Leve`],[`trilha-norte`,`Trilha Norte`],[`mare-alta`,`Maré Alta`],[`vertice`,`Vértice`],[`sola-viva`,`Sola Viva`],[`pedra-fina`,`Pedra Fina`],[`lume`,`Lume`],[`caminho-sul`,`Caminho Sul`],[`aurora`,`Aurora`],[`brisa-mar`,`Brisa Mar`],[`ventana`,`Ventana`],[`casco`,`Casco`],[`rumo`,`Rumo`],[`alpendre`,`Alpendre`]],C=[`Tênis Corrida`,`Sandália Rasteira`,`Bota Cano Curto`,`Tênis Casual`,`Chinelo Slide`,`Sapatilha Bico Fino`,`Mocassim Couro`,`Scarpin Salto Médio`,`Papete Trilha`,`Tênis Infantil`,`Sapato Social`,`Mule Tressê`,`Anabela Juta`,`Coturno Tratorado`,`Oxford Verniz`,`Galocha Chuva`,`Babuche Conforto`],w=[`Preto`,`Areia`,`Branco`,`Caramelo`,`Marinho`],T=_(),E=new Set([`p40`,`p57`,`p71`])})))()}var O=t({CaudaLongaExpandida:()=>U,Escuro:()=>R,Estados:()=>L,Estreito360:()=>V,Glass:()=>z,GlassEscuro:()=>B,Padrao:()=>F,PorProduto:()=>H,Tabela:()=>I,__namedExportsOrder:()=>W,default:()=>P});function k({dados:e=`limpos`,...t}){return(0,j.jsxs)(c,{children:[(0,j.jsx)(r,{...t,data:t.data??b({absent:e===`com-ausencia`})}),(0,j.jsx)(A,{})]})}function A(){let e=o();return(0,j.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}var j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{g(),s(),u(),D(),p(),j=l(),{fn:M}=__STORYBOOK_MODULE_TEST__,N=(e,t)=>(0,j.jsx)(i,{client:d,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,j.jsx)(e,{})}),P={title:`Widgets/Pareto 80-20`,id:`widgets-pareto`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Pareto 80/20 de concentração: barras da maior para a menor, linha do % acumulado e marca do limite (80% por padrão). Os poucos vitais vêm em texto ("6 de 14 marcas fazem 80% da receita"), com cor, colchete e etiqueta. Alterna marca × produto; a cauda longa vira "Demais (k)", expansível, e Σ barras + Demais = total. Itens sem dado ficam fora do ranking, declarados. Cliente fictício: Pedravela Calçados.`}}},args:{title:`Concentração da receita`,icon:(0,j.jsx)(h,{}),period:x.period,scope:x.scope,source:x.source,metricLabel:`Receita`,locale:`pt-BR`,dados:`limpos`,onDimensionChange:M(),onExpandedChange:M(),onViewChange:M()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},defaultDimension:{control:`inline-radio`,options:[`marca`,`produto`]},defaultView:{control:`inline-radio`,options:[`chart`,`table`]},threshold:{control:{type:`range`,min:.5,max:.95,step:.05}},topN:{control:{type:`number`,min:3,max:30}},dados:{control:`inline-radio`,options:[`limpos`,`com-ausencia`],description:`Dados da história.`},icon:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[f,N,(e,t)=>(0,j.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:880,maxWidth:`100%`},children:(0,j.jsx)(e,{})})],render:e=>(0,j.jsx)(k,{...e})},F={name:`Padrão`},I={args:{defaultView:`table`,dados:`com-ausencia`}},L={render:e=>(0,j.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,j.jsx)(r,{...e,title:`Carregando`,status:`loading`,data:b()}),(0,j.jsx)(r,{...e,title:`Vazio`,status:`empty`,data:null}),(0,j.jsx)(r,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,j.jsx)(r,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não enviaram as vendas de 31/10.`,scope:`16 de 18 lojas`,data:b()}),(0,j.jsx)(r,{...e,title:`Ausência`,defaultDimension:`produto`,data:b({absent:!0}),description:`Três produtos da Brisa Mar estão sem leitura de receita: saem do ranking e do total e aparecem como “sem dado”, nunca como zero.`})]})},R={globals:{rbMode:`dark`}},z={globals:{rbFamily:`glass`}},B={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},V={name:`Estreito 360`,parameters:{width:`narrow`}},H={name:`Por produto`,args:{defaultDimension:`produto`}},U={name:`Cauda longa expandida`,args:{defaultDimension:`produto`,defaultExpanded:!0}},W=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`PorProduto`,`CaudaLongaExpandida`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...F.parameters?.docs?.source},description:{story:`Padrão: receita de outubro por marca, 12 barras + "Demais", limite de 80%. Troque para Produto na pílula.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table",
    dados: "com-ausencia"
  }
}`,...I.parameters?.docs?.source},description:{story:`A alternativa em tabela: posição, valor, %, % acumulado e a etiqueta dos poucos vitais, com total.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <ParetoChart<ParetoDim> {...args} title="Carregando" status="loading" data={paretoData()} />
      <ParetoChart<ParetoDim> {...args} title="Vazio" status="empty" data={null} />
      <ParetoChart<ParetoDim> {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <ParetoChart<ParetoDim> {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não enviaram as vendas de 31/10." scope="16 de 18 lojas" data={paretoData()} />
      <ParetoChart<ParetoDim> {...args} title="Ausência" defaultDimension="produto" data={paretoData({
      absent: true
    })} description="Três produtos da Brisa Mar estão sem leitura de receita: saem do ranking e do total e aparecem como “sem dado”, nunca como zero." />
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e ausência (itens sem dado fora do ranking, nunca como zero).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...R.parameters?.docs?.source},description:{story:`Modo escuro.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...z.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...B.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...V.parameters?.docs?.source},description:{story:`Celular a 360 px: barras horizontais em linhas, com o % acumulado em texto e a linha dos 80%.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Por produto",
  args: {
    defaultDimension: "produto"
  }
}`,...H.parameters?.docs?.source},description:{story:`Por produto: 85 produtos, 12 barras + "Demais (73)".`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Cauda longa expandida",
  args: {
    defaultDimension: "produto",
    defaultExpanded: true
  }
}`,...U.parameters?.docs?.source},description:{story:`Cauda longa aberta: todas as barras, sem "Demais"; sem espaço para colunas, vira linhas.`,...U.parameters?.docs?.description}}}})))()}export{O as n,G as r,F as t};