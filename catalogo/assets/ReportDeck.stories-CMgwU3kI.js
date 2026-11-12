import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Sr as r,_r as i,a,r as o,s,t as c,vr as l,xr as u}from"./src-D-7wCr18.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{n as f,t as p}from"./goal-lUy9kEuS.js";import{n as m,t as h}from"./store-C4W8UkA8.js";import{i as g,n as _,r as v,t as y}from"./fixtures-reports-B7xsLJbm.js";var b=t({Escuro:()=>A,Estados:()=>k,Estreito360:()=>N,Glass:()=>j,GlassEscuro:()=>M,Padrao:()=>O,__namedExportsOrder:()=>P,default:()=>D});function x(e){let[t,n]=(0,S.useState)({area:e.area,status:e.status,query:e.query,sort:e.sort}),[r,i]=(0,S.useState)([`P01`]),[c,l]=(0,S.useState)(null),[u,d]=(0,S.useState)({}),f=e.cards.map(e=>u[e.id]?{...e,run:u[e.id]}:e),p=f.find(e=>e.id===c),m=e=>d(t=>({...t,[e]:{state:`queued`,requestedBy:`Você`,requestedAt:`2026-11-10T15:00:00Z`,queuePosition:1}}));return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o,{...e,cards:f,...t,onChange:t=>{n(t),e.onChange?.(t)},favorites:r,onFavoriteChange:(e,t)=>i(n=>t?[...n,e]:n.filter(t=>t!==e)),icon:E,onOpen:t=>{l(t),e.onOpen?.(t)}}),p?(0,C.jsx)(s,{isOpen:!0,onClose:()=>l(null),returnFocusId:a(p.id),card:p,detail:g[p.id]??g.P01,icon:E(p),onRerun:m,onRetry:()=>m(p.id),onCopyLink:w(),timeZone:y}):null]})}var S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{r(),l(),f(),m(),S=n(),c(),_(),C=d(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={"Operação de lojas":(0,C.jsx)(h,{"aria-hidden":`true`,strokeWidth:2}),"Estoque e reposição":(0,C.jsx)(u,{"aria-hidden":`true`,strokeWidth:2}),"Metas e orçamento":(0,C.jsx)(p,{"aria-hidden":`true`,strokeWidth:2})},E=e=>T[e.area]??(0,C.jsx)(i,{"aria-hidden":`true`,strokeWidth:2}),D={title:`Reports/Baralho`,id:`reports-report-deck`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Grade de cartas com busca por número ou nome, área, situação (com os contadores de prontos, preparados e parados) e ordem por série, data do dado ou situação. Controlado: `area`, `status`, `query`, `sort` e `onChange`. Vazio por filtro com “Limpar filtros”; favoritos opcionais por callback. Grade de 4–5 colunas em 1440 px, 2 em 768 e 1 em 360, pela largura do contêiner."}}},args:{cards:v,sort:`serial`,timeZone:y,onChange:w(),onOpen:w(),onRetry:w()},argTypes:{cards:{control:!1},views:{control:!1},icon:{control:!1},cardMessages:{control:!1},sort:{control:`inline-radio`,options:[`serial`,`dataAsOf`,`status`]},status:{control:`inline-radio`,options:[null,`ready`,`prepared`,`stopped`]}},decorators:[(e,t)=>(0,C.jsx)(`div`,{style:{padding:t.parameters.width===`narrow`?16:32,width:t.parameters.width===`narrow`?360:void 0,boxSizing:`border-box`},children:(0,C.jsx)(e,{})})],render:e=>(0,C.jsx)(x,{...e})},O={name:`Padrão`},k={render:e=>(0,C.jsxs)(`div`,{style:{display:`grid`,gap:40},children:[(0,C.jsx)(o,{...e,loading:!0,skeletonCount:5,label:`Baralho carregando`}),(0,C.jsx)(o,{...e,views:{P03:`loading`,P05:`empty`,P07:`error`,P09:`restricted`},label:`Cartas com estados`}),(0,C.jsx)(o,{...e,query:`zzz`,label:`Vazio por filtro`})]})},A={globals:{rbMode:`dark`}},j={globals:{rbFamily:`glass`}},M={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},N={name:`Estreito 360`,parameters:{width:`narrow`}},P=[`Padrao`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...O.parameters?.docs?.source},description:{story:`As 10 cartas: três situações, selos e os seis estados da execução. Clique abre o verso.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 40
  }}>
      <ReportDeck {...args} loading skeletonCount={5} label="Baralho carregando" />
      <ReportDeck {...args} views={{
      P03: "loading",
      P05: "empty",
      P07: "error",
      P09: "restricted"
    }} label="Cartas com estados" />
      <ReportDeck {...args} query="zzz" label="Vazio por filtro" />
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Carregando (esqueleto), cartas em erro, vazias e sem acesso, e o vazio por filtro.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...N.parameters?.docs?.source},description:{story:`Uma coluna num celular de 360 px.`,...N.parameters?.docs?.description}}}})))()}export{F as n,b as t};