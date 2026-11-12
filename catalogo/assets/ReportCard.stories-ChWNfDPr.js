import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{Sr as n,_r as r,l as i,t as a,vr as o,xr as s}from"./src-D-7wCr18.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./goal-lUy9kEuS.js";import{n as d,t as f}from"./store-C4W8UkA8.js";import{n as p,r as m,t as h}from"./fixtures-reports-B7xsLJbm.js";var g=t({Escuro:()=>T,Estados:()=>w,Estreito360:()=>O,Glass:()=>E,GlassEscuro:()=>D,Padrao:()=>S,__namedExportsOrder:()=>k,default:()=>x}),_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),o(),l(),d(),a(),p(),_=c(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={"Operação de lojas":(0,_.jsx)(f,{"aria-hidden":`true`,strokeWidth:2}),"Estoque e reposição":(0,_.jsx)(s,{"aria-hidden":`true`,strokeWidth:2}),"Metas e orçamento":(0,_.jsx)(u,{"aria-hidden":`true`,strokeWidth:2})},b=e=>(e?y[e.area]:null)??(0,_.jsx)(r,{"aria-hidden":`true`,strokeWidth:2}),x={title:`Reports/Carta`,id:`reports-report-card`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Carta 5:7 com série, situação, arte com o minigráfico, título em até 2 linhas, um número com a variação e o rodapé com a data do dado e a fonte. Hover e foco inclinam no máximo 6°; o clique vira a carta e chama `onOpen`. Com movimento reduzido, nada inclina nem vira. Ausência nunca vira zero: `value: null` mostra “sem número” e o motivo."}}},args:{card:m[0],icon:b(m[0]),timeZone:h,onOpen:v(),onRetry:v(),locale:`pt-BR`},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},card:{control:`object`},icon:{control:!1},messages:{control:!1},previewPointer:{control:!1}},decorators:[(e,t)=>(0,_.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?328:t.parameters.width===`full`?`auto`:296,maxWidth:`100%`},children:(0,_.jsx)(e,{})})]},S={name:`Padrão`},C=[{caption:`ready · pronto, favorito`,card:m[0],favorite:!0},{caption:`loading · esqueleto`,card:m[2],status:`loading`},{caption:`loading · sem dados ainda`,status:`loading`},{caption:`empty · sem dados neste retrato`,card:m[4],status:`empty`},{caption:`error · com Tentar de novo`,card:m[6],status:`error`},{caption:`restricted · sem acesso`,card:m[8],status:`restricted`},{caption:`partial · selo Parcial + na fila`,card:m[5]},{caption:`stale · selo Desatualizado`,card:m[3]},{caption:`execução falhou`,card:m[1]},{caption:`rodando desde hh:mm`,card:m[7]},{caption:`parado · sem número e o motivo`,card:m[8]},{caption:`parado · execução bloqueada`,card:m[9]}],w={parameters:{layout:`fullscreen`,width:`full`},decorators:[e=>(0,_.jsx)(`div`,{style:{padding:24},children:(0,_.jsx)(e,{})})],render:e=>(0,_.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(236px, 1fr))`,gap:20,width:`min(1320px, calc(100vw - 48px))`},children:C.map(t=>(0,_.jsxs)(`figure`,{style:{margin:0,display:`grid`,gap:8},children:[(0,_.jsx)(i,{...e,card:t.card,status:t.status,icon:b(t.card),favorite:t.favorite,onFavoriteChange:t.favorite===void 0?void 0:v()}),(0,_.jsx)(`figcaption`,{style:{fontSize:12,color:`var(--rb-fg-muted)`},children:t.caption})]},t.caption))})},T={globals:{rbMode:`dark`}},E={globals:{rbFamily:`glass`}},D={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},O={name:`Estreito 360`,parameters:{width:`narrow`}},k=[`Padrao`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...S.parameters?.docs?.source},description:{story:`Pronto: moldura holográfica, número com a variação contra a referência e o minigráfico.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen",
    width: "full"
  },
  decorators: [Story => <div style={{
    padding: 24
  }}>
        <Story />
      </div>],
  render: args => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(236px, 1fr))",
    gap: 20,
    width: "min(1320px, calc(100vw - 48px))"
  }}>
      {VIEWS.map(view => <figure key={view.caption} style={{
      margin: 0,
      display: "grid",
      gap: 8
    }}>
          <ReportCard {...args} card={view.card} status={view.status} icon={reportIcon(view.card)} favorite={view.favorite} onFavoriteChange={view.favorite !== undefined ? fn() : undefined} />
          <figcaption style={{
        fontSize: 12,
        color: "var(--rb-fg-muted)"
      }}>{view.caption}</figcaption>
        </figure>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Todos os estados da carta e da execução, lado a lado.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...O.parameters?.docs?.source},description:{story:`A mesma carta num celular de 360 px (contêiner de 328 px).`,...O.parameters?.docs?.description}}}})))()}export{g as n,A as r,S as t};