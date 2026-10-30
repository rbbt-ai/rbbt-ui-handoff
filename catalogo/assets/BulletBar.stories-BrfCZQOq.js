import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{M as r,On as i,bt as a,it as o,j as s,k as c,kt as l,nn as u,rn as d,t as f,vt as p}from"./src-lgDrkLBh.js";import{t as m}from"./jsx-runtime-MKhVqBIO.js";import{a as h,o as g}from"./fixtures-heatmap-CMRqa3v6.js";import{n as _,t as v}from"./smooth-decorator-DsOGrokP.js";function y({slice:e=`mes`,withMissing:t=!1}={}){return{items:T[e].rows.filter(e=>t||e[2]!==null).map(w)}}function b(){return{rows:S.filter(e=>e[2]!==null).map(([e,t,n,r,i])=>({id:e,label:t,values:{actual:n,target:r,attainment:n!==null&&r?n/r:null,projection:i},...r===null?{cellText:{target:`sem meta`,attainment:`sem meta`}}:{}}))}}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f(),x={period:`Outubro até 29/10`,scope:`7 lojas`,source:`ERP fictício · venda líquida e metas`},S=[[`centro`,`Centro`,336900,343800,352400],[`norte`,`Shopping Norte`,412500,38e4,431e3],[`jardins`,`Jardins`,228400,26e4,244900],[`praia`,`Praia`,189700,2e5,204300],[`outlet`,`Outlet`,301200,29e4,318600],[`rodoviaria`,`Rodoviária`,96300,13e4,103800],[`aeroporto`,`Aeroporto`,154800,null,null],[`bairro-alto`,`Bairro Alto`,null,15e4,null]],C=[[`centro`,`Centro`,81200,78e3,null],[`norte`,`Shopping Norte`,88400,92e3,null],[`jardins`,`Jardins`,61900,6e4,null],[`praia`,`Praia`,39800,46e3,null],[`outlet`,`Outlet`,70100,68e3,null],[`rodoviaria`,`Rodoviária`,27300,3e4,null],[`aeroporto`,`Aeroporto`,36400,null,null],[`bairro-alto`,`Bairro Alto`,null,35e3,null]],w=([e,t,n,r,i])=>({id:e,label:t,actual:n,target:r,projection:i}),T={mes:{label:`Mês`,period:`Outubro até 29/10`,rows:S},semana:{label:`Semana`,period:`Semana 23–29/10`,rows:C}},E={items:[{id:`centro`,label:`Centro`,actual:336900,target:343800},{id:`aeroporto`,label:`Aeroporto`,actual:154800,target:null},{id:`quiosque`,label:`Quiosque Parque`,actual:12400,target:0},{id:`galpao`,label:`Galpão (reforma)`,actual:0,target:4e4},{id:`bairro-alto`,label:`Bairro Alto`,actual:null,target:15e4}]},D={style:`currency`,currency:`BRL`},O=[{id:`actual`,header:`Realizado`,format:D,emphasis:`primary`},{id:`target`,header:`Meta`,format:D,emptyText:`sem meta`},{id:`attainment`,header:`Meta × realizado`,shortHeader:`Atingimento`,description:`Realizado ÷ meta, com as faixas < 90%, 90–100% e ≥ 100%, a marca da meta e a projeção.`,format:{style:`percent`,minimumFractionDigits:1,maximumFractionDigits:1},derived:{kind:`ratio`,of:[`actual`,`target`]},emptyText:`sem meta`,cell:r({actualColumn:`actual`,targetColumn:`target`,projectionColumn:`projection`})}]})))()}var A=t({Escuro:()=>H,Estados:()=>V,Estreito360:()=>G,Glass:()=>U,GlassEscuro:()=>W,NaTabela:()=>K,Padrao:()=>z,SemMeta:()=>q,Tabela:()=>B,TrocaDeRecorte:()=>J,__namedExportsOrder:()=>Y,default:()=>R});function j(e){return(0,F.jsxs)(p,{children:[(0,F.jsx)(c,{...e,data:e.data??y()}),(0,F.jsx)(M,{})]})}function M(){let e=a();return(0,F.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function N(e){let[t,n]=(0,P.useState)(`mes`);return(0,F.jsx)(p,{children:(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,F.jsx)(l,{label:`Recorte`,value:t,options:Object.keys(T).map(e=>({value:e,label:T[e].label})),onChange:n}),(0,F.jsx)(c,{...e,period:T[t].period,data:y({slice:t})})]})})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{d(),P=n(),f(),h(),k(),v(),F=m(),{fn:I}=__STORYBOOK_MODULE_TEST__,L=(e,t)=>(0,F.jsx)(i,{client:g,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,F.jsx)(e,{})}),R={title:`Widgets/Meta × realizado`,id:`widgets-bullet-bar`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:'Meta × realizado por loja em bullet chart compacto (12–20 px): faixas qualitativas ao fundo (< 90%, 90–100% e ≥ 100% da meta, cortes configuráveis), barra do realizado, marca da meta e, opcional, da projeção, com o texto ao lado ("98,0% · −R$ 6,9 mil"). Sem meta, meta zero e sem dado são estados próprios, nunca 0%. O mesmo BulletBar vira célula da ComparisonTable por `bulletColumnCell`. Cliente fictício: Pedravela Calçados.'}}},args:{title:`Meta × realizado`,icon:(0,F.jsx)(u,{}),period:x.period,scope:x.scope,source:x.source,locale:`pt-BR`,onSortChange:I(),onViewChange:I()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},defaultSort:{control:`inline-radio`,options:[`attainment`,`gap`,`name`]},defaultView:{control:`inline-radio`,options:[`bars`,`table`]},icon:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[_,L,(e,t)=>(0,F.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`wide`?980:860,maxWidth:`100%`},children:(0,F.jsx)(e,{})})],render:e=>(0,F.jsx)(j,{...e})},z={name:`Padrão`},B={args:{defaultView:`table`,scope:`8 lojas`,data:y({withMissing:!0})}},V={render:e=>(0,F.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,F.jsx)(c,{...e,title:`Carregando`,status:`loading`,data:y()}),(0,F.jsx)(c,{...e,title:`Vazio`,status:`empty`,data:null}),(0,F.jsx)(c,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,F.jsx)(c,{...e,title:`Parcial`,status:`partial`,partialNote:`Bairro Alto ainda não enviou a venda de 29/10.`,scope:`7 de 8 lojas`,data:y({withMissing:!0})}),(0,F.jsx)(c,{...e,title:`Sem realizado`,scope:`1 loja`,data:{items:[{id:`bairro-alto`,label:`Bairro Alto`,actual:null,target:15e4}]},description:`Nenhuma loja enviou o realizado: o widget mostra o vazio com o motivo, nunca barras em 0%.`})]})},H={globals:{rbMode:`dark`}},U={globals:{rbFamily:`glass`}},W={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},G={name:`Estreito 360`,parameters:{width:`narrow`}},K={name:`Na tabela`,parameters:{width:`wide`},render:()=>(0,F.jsx)(o,{title:`Meta × realizado por loja`,rowHeader:`Loja`,columns:O,data:b(),defaultSort:{columnId:`attainment`,direction:`asc`},searchable:!1,source:x.source,subtitle:`${x.period} · 7 lojas`,export:{filename:`meta-realizado-pedravela`,scope:`Pedravela · Outubro até 29/10`}})},q={name:`Sem meta`,render:e=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,F.jsx)(c,{...e,title:`Sem meta × 0%`,scope:`5 lojas`,data:E,defaultSort:`name`}),(0,F.jsxs)(`div`,{className:`rb-bullet-demo`,style:{display:`grid`,gap:10,maxWidth:440,"--rb-bullet-text-w":`10.5rem`},"aria-label":`BulletBar sozinho`,role:`group`,children:[(0,F.jsx)(s,{label:`Aeroporto (sem meta)`,actual:154800,target:null}),(0,F.jsx)(s,{label:`Galpão (realizado zero)`,actual:0,target:4e4}),(0,F.jsx)(s,{label:`Quiosque Parque (meta zero)`,actual:12400,target:0}),(0,F.jsx)(s,{label:`Bairro Alto (sem dado)`,actual:null,target:15e4})]})]})},J={name:`Troca de recorte`,render:e=>(0,F.jsx)(N,{...e})},Y=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`NaTabela`,`SemMeta`,`TrocaDeRecorte`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...z.parameters?.docs?.source},description:{story:`Padrão: venda líquida de outubro até 29/10 × meta do mês, por loja, do menor atingimento ao maior.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table",
    scope: "8 lojas",
    data: bulletData({
      withMissing: true
    })
  }
}`,...B.parameters?.docs?.source},description:{story:`A alternativa em tabela: loja, realizado, meta, atingimento, diferença, projeção e situação, com total comparável.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <BulletList {...args} title="Carregando" status="loading" data={bulletData()} />
      <BulletList {...args} title="Vazio" status="empty" data={null} />
      <BulletList {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <BulletList {...args} title="Parcial" status="partial" partialNote="Bairro Alto ainda não enviou a venda de 29/10." scope="7 de 8 lojas" data={bulletData({
      withMissing: true
    })} />
      <BulletList {...args} title="Sem realizado" scope="1 loja" data={{
      items: [{
        id: "bairro-alto",
        label: "Bairro Alto",
        actual: null,
        target: 150_000
      }]
    }} description="Nenhuma loja enviou o realizado: o widget mostra o vazio com o motivo, nunca barras em 0%." />
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Carregando, vazio, erro, parcial e sem dado (ausência nunca vira zero).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Celular a 360 px: nome e leitura em cima, barra e texto embaixo; a página nunca rola na horizontal.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Na tabela",
  parameters: {
    width: "wide"
  },
  render: () => <ComparisonTable title="Meta × realizado por loja" rowHeader="Loja" columns={bulletTableColumns} data={bulletTableData()} defaultSort={{
    columnId: "attainment",
    direction: "asc"
  }} searchable={false} source={bulletContext.source} subtitle={\`\${bulletContext.period} · 7 lojas\`} export={{
    filename: "meta-realizado-pedravela",
    scope: "Pedravela · Outubro até 29/10"
  }} />
}`,...K.parameters?.docs?.source},description:{story:"O mesmo BulletBar como célula da ComparisonTable (`bulletColumnCell`): a coluna ordena, exporta e é lida pelo número.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Sem meta",
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <BulletList {...args} title="Sem meta × 0%" scope="5 lojas" data={bulletNoTargetData} defaultSort="name" />
      <div className="rb-bullet-demo" style={{
      display: "grid",
      gap: 10,
      maxWidth: 440,
      ["--rb-bullet-text-w" as string]: "10.5rem"
    }} aria-label="BulletBar sozinho" role="group">
        <BulletBar label="Aeroporto (sem meta)" actual={154_800} target={null} />
        <BulletBar label="Galpão (realizado zero)" actual={0} target={40_000} />
        <BulletBar label="Quiosque Parque (meta zero)" actual={12_400} target={0} />
        <BulletBar label="Bairro Alto (sem dado)" actual={null} target={150_000} />
      </div>
    </div>
}`,...q.parameters?.docs?.source},description:{story:`Sem meta ≠ 0%: loja sem meta, meta zero, realizado zero de verdade e sem dado, lado a lado.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...J.parameters?.docs?.source},description:{story:`Troca de recorte: cada barra vai do valor antigo ao novo, sem cascata e sem passar por zero.`,...J.parameters?.docs?.description}}}})))()}export{z as n,X as r,A as t};