import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Kr as r,Qn as i,nn as a,t as o,xn as s,yn as c}from"./src-BSeQ01dl.js";import{t as l}from"./jsx-runtime-MKhVqBIO.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./fixtures-evolucao-eventos-C50_Hw2M.js";import{n as v,t as y}from"./smooth-decorator-CjOKIOT8.js";import{a as b,o as x}from"./fixtures-heatmap-Ei1UaJ2i.js";var S=t({Escuro:()=>P,Estados:()=>N,Estreito360:()=>L,Glass:()=>F,GlassEscuro:()=>I,Padrao:()=>j,RotulosNumerados:()=>R,Tabela:()=>M,TrocaDePeriodo:()=>z,__namedExportsOrder:()=>B,default:()=>A});function C(e){return(0,D.jsxs)(c,{children:[(0,D.jsx)(a,{...e,data:e.data??h()}),(0,D.jsx)(w,{})]})}function w(){let e=s();return(0,D.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function T(e){let[t,n]=(0,E.useState)(`mes`);return(0,D.jsx)(c,{children:(0,D.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,D.jsx)(i,{label:`Período`,size:`sm`,value:t,options:[{value:`mes`,label:`Outubro`},{value:`semanas`,label:`08 a 21/10`}],onChange:n}),(0,D.jsx)(a,{...e,data:t===`mes`?h():f()})]})})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{d(),E=n(),o(),b(),u(),y(),D=l(),{fn:O}=__STORYBOOK_MODULE_TEST__,k=(e,t)=>(0,D.jsx)(r,{client:x,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,D.jsx)(e,{})}),A={title:`Widgets/Evolução com eventos`,id:`widgets-evolucao-eventos`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:"EvolutionChart com anotações de eventos (prop opcional `annotations`): o evento de um dia vira linha fina; o intervalo, faixa clara. Os rótulos ficam numa faixa acima dos dados e, sem espaço, viram marcadores numerados com legenda. O balão traz nome, data e descrição sem cobrir a curva. Cliente e eventos fictícios: Pedravela Calçados."}}},args:{title:`Receita de outubro`,subtitle:`Pedravela Calçados · 18 lojas · dados até 24/10`,icon:(0,D.jsx)(g,{}),source:`Caixa das lojas (fictício)`,format:{style:`currency`,currency:`BRL`},locale:`pt-BR`,anatomy:`lean`,annotations:p,annotationTypes:m,onViewChange:O()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},defaultView:{control:`inline-radio`,options:[`cumulative`,`daily`,`table`]},icon:{control:!1},data:{control:!1},annotations:{control:!1},annotationTypes:{control:!1},messages:{control:!1}},decorators:[v,k,(e,t)=>(0,D.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:880,maxWidth:`100%`},children:(0,D.jsx)(e,{})})],render:e=>(0,D.jsx)(C,{...e})},j={name:`Padrão`},M={args:{defaultView:`table`}},N={render:e=>(0,D.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,D.jsx)(a,{...e,title:`Carregando`,status:`loading`,data:h()}),(0,D.jsx)(a,{...e,title:`Vazio`,status:`empty`,data:null}),(0,D.jsx)(a,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,D.jsx)(a,{...e,title:`Parcial`,status:`partial`,partialNote:`2 lojas ainda não enviaram as vendas de 24/10.`,data:h()})]})},P={globals:{rbMode:`dark`}},F={globals:{rbFamily:`glass`}},I={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},L={name:`Estreito 360`,parameters:{width:`narrow`}},R={name:`Rótulos numerados`,args:{annotations:_}},z={name:`Troca de período`,render:e=>(0,D.jsx)(T,{...e})},B=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`RotulosNumerados`,`TrocaDePeriodo`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...j.parameters?.docs?.source},description:{story:`Padrão: receita acumulada com a liquidação (faixa, recortada no dia 1), duas datas (linhas) e a feira.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table"
  }
}`,...M.parameters?.docs?.source},description:{story:`A alternativa em tabela: cada dia com os eventos que o tocam, na coluna "Eventos".`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <EvolutionChart {...args} title="Carregando" status="loading" data={evolucaoEventosData()} />
      <EvolutionChart {...args} title="Vazio" status="empty" data={null} />
      <EvolutionChart {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <EvolutionChart {...args} title="Parcial" status="partial" partialNote="2 lojas ainda não enviaram as vendas de 24/10." data={evolucaoEventosData()} />
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Carregando, vazio, erro e parcial; dias sem leitura continuam sem valor (nunca zero).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...P.parameters?.docs?.source},description:{story:`Modo escuro.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...F.parameters?.docs?.source},description:{story:`Família Glass.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...I.parameters?.docs?.source},description:{story:`Glass escuro.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...L.parameters?.docs?.source},description:{story:`Celular a 360 px: os rótulos viram marcadores numerados e a legenda vem embaixo.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Rótulos numerados",
  args: {
    annotations: eventosDensos
  }
}`,...R.parameters?.docs?.source},description:{story:`Eventos próximos demais para rótulos completos: marcadores numerados (1, 2, 3…) com legenda.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Troca de período",
  render: args => <PeriodSwitch {...args} />
}`,...z.parameters?.docs?.source},description:{story:`Troca de período: as anotações acompanham o novo eixo sem piscar; as de fora somem.`,...z.parameters?.docs?.description}}}})))()}export{j as n,V as r,S as t};