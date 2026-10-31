import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{U as r,Un as i,V as a,Wn as o,en as s,nn as c,t as l,xr as u}from"./src-BbyRaoY1.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{a as f,o as p}from"./fixtures-heatmap-Av-RnC91.js";import{n as m,t as h}from"./smooth-decorator-Ch0T28w-.js";function g(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function _(e,t){let n=Date.parse(`${e}T00:00:00Z`);return Array.from({length:t},(e,t)=>new Date(n+t*864e5).toISOString().slice(0,10))}function v({seed:e,before:t,after:n,absent:r=[]}){let i=g(e);return w.map((e,a)=>{let o=new Date(`${e}T12:00:00Z`).getUTCDay(),s=a<14?0:Math.min(1,(a-13)/3),c=t+(n-t)*s,l=1+(i()-.5)*.06,u=Math.round(c*C[o]*l*1e4)/1e4;return{dia:e,conversao:r.includes(e)?``:u}})}function y(e={}){let t=T();return e.absentBefore&&t.slice(0,e.absentBefore).forEach(e=>e.conversao=null),r(t,{getDay:e=>e.dia,getValue:e=>e.conversao,actionDay:S.actionDay,windowDays:14,target:e.target===void 0?.21:e.target,comparison:e.comparison===!1?null:{label:S.comparisonLabel,records:E()}})}function b(){return r(v({seed:19,before:.164,after:.191,absent:[`2026-10-08`,`2026-10-21`]}),{getDay:e=>e.dia,getValue:e=>e.conversao,actionDay:S.actionDay,windowDays:14,target:.21,comparison:{label:S.comparisonLabel,records:E()}})}function x(){let e=g(5),t=w.map((t,n)=>({dia:t,minutos:Math.round((n<14?6.4:5.1)*(1+(e()-.5)*.12)*10)/10}));return r(t,{getDay:e=>e.dia,getValue:e=>e.minutos,actionDay:S.actionDay,windowDays:14,target:5})}var S,C,w,T,E;function D(){return(D=e((()=>{l(),S={scope:`4 lojas da Zona Oeste`,source:`ERP fictício · conversão = vendas ÷ visitas do contador de porta`,actionLabel:`Vitrine de outono nas lojas da Zona Oeste`,metricLabel:`Conversão`,comparisonLabel:`8 lojas sem a vitrine`,actionDay:`2026-10-13`,todayConcluded:`2026-10-30`,todayEvaluating:`2026-10-22`,todayEarly:`2026-10-16`},C=[1.02,.97,.98,.99,1,1.01,1.04],w=_(`2026-09-29`,28),T=()=>v({seed:41,before:.182,after:.204,absent:[`2026-10-05`,`2026-10-18`]}),E=()=>v({seed:73,before:.176,after:.18})})))()}var O=t({Escuro:()=>B,Estados:()=>z,Estreito360:()=>U,Glass:()=>V,GlassEscuro:()=>H,Padrao:()=>L,Tabela:()=>R,TrocarFiltro:()=>W,__namedExportsOrder:()=>G,default:()=>I});function k(e){return(0,N.jsxs)(s,{children:[(0,N.jsx)(a,{...e,data:e.data===void 0?y():e.data}),(0,N.jsx)(A,{})]})}function A(){let e=c();return(0,N.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function j(e){let[t,n]=(0,M.useState)(!1),[r,i]=(0,M.useState)(0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s,{children:(0,N.jsx)(a,{...e,scope:t?`Loja 12 · Pampulha`:e.scope,data:t?b():y()})},r),(0,N.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>n(e=>!e),children:`Trocar filtro (do antigo ao novo)`}),(0,N.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>i(e=>e+1),children:`Montar de novo (entrada do começo)`})]})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{o(),M=n(),l(),D(),f(),h(),N=d(),{fn:P}=__STORYBOOK_MODULE_TEST__,F=(e,t)=>(0,N.jsx)(u,{client:p,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,N.jsx)(e,{})}),I={title:`Widgets/Placar de efeito`,id:`widgets-effect-scoreboard`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Antes → meta → depois de uma ação, com a janela de avaliação explícita (datas e duração) e o estado próprio: em avaliação (janela aberta, resultado não final), dados insuficientes ou concluído. O resultado sai em valor e em %, com a polaridade declarada; com grupo de comparação, aparece a diferença contra ele. A ressalva fica sempre visível. Dia sem leitura quebra a curva e fica fora da média (nunca vira zero). Cliente fictício: Pedravela Calçados.`}}},args:{title:`Efeito da vitrine de outono`,icon:(0,N.jsx)(i,{}),actionLabel:S.actionLabel,metricLabel:S.metricLabel,scope:S.scope,source:S.source,polarity:`higher-is-better`,valueFormat:{style:`percent`,maximumFractionDigits:1},today:S.todayConcluded,locale:`pt-BR`,actions:[{id:`propor`,label:`Propor nas outras lojas`,primary:!0,onAction:P()},{id:`arquivar`,label:`Arquivar`,disabledReason:`Sem permissão: só a gerência regional arquiva`}],onViewChange:P(),onDetailOpenChange:P()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},polarity:{control:`inline-radio`,options:[`higher-is-better`,`lower-is-better`,`neutral`]},defaultView:{control:`inline-radio`,options:[`chart`,`table`]},icon:{control:!1},data:{control:!1},actions:{control:!1},messages:{control:!1},valueFormat:{control:!1}},decorators:[m,F,(e,t)=>(0,N.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:640,maxWidth:`100%`},children:(0,N.jsx)(e,{})})],render:e=>(0,N.jsx)(k,{...e})},L={name:`Padrão`},R={args:{defaultView:`table`}},z={render:e=>(0,N.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,N.jsx)(a,{...e,title:`Em avaliação · parcial`,today:S.todayEvaluating,data:y()}),(0,N.jsx)(a,{...e,title:`Em avaliação · sem parcial ainda`,today:S.todayEarly,data:y({comparison:!1}),actions:void 0}),(0,N.jsx)(a,{...e,title:`Dados insuficientes`,data:y({absentBefore:10,comparison:!1}),actions:void 0}),(0,N.jsx)(a,{...e,title:`Menor é melhor · fila no caixa`,actionLabel:`Caixa extra aos sábados`,metricLabel:`Fila no caixa (min)`,polarity:`lower-is-better`,valueFormat:{style:`number`,maximumFractionDigits:1},source:`ERP fictício · tempo médio de fila, em minutos`,data:x(),actions:void 0}),(0,N.jsx)(a,{...e,title:`Carregando`,status:`loading`,data:y()}),(0,N.jsx)(a,{...e,title:`Vazio`,status:`empty`,data:null}),(0,N.jsx)(a,{...e,title:`Erro`,status:`error`,data:null,onRetry:()=>{}}),(0,N.jsx)(a,{...e,title:`Parcial`,status:`partial`,partialNote:`1 das 4 lojas ainda não enviou as visitas de 26/10.`,scope:`3 de 4 lojas`,data:y()})]})},B={globals:{rbMode:`dark`}},V={globals:{rbFamily:`glass`}},H={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},U={name:`Estreito 360`,parameters:{width:`narrow`}},W={name:`Trocar filtro`,render:e=>(0,N.jsx)(j,{...e})},G=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TrocarFiltro`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...L.parameters?.docs?.source},description:{story:`Padrão: janela encerrada (concluído), meta de 21%, grupo de comparação e dois dias sem leitura (lacunas).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "table"
  }
}`,...R.parameters?.docs?.source},description:{story:`A alternativa em tabela: um dia por linha, a janela de cada dia, as ausências escritas e as médias no rodapé.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <EffectScoreboard {...args} title="Em avaliação · parcial" today={effectContext.todayEvaluating} data={effectData()} />
      <EffectScoreboard {...args} title="Em avaliação · sem parcial ainda" today={effectContext.todayEarly} data={effectData({
      comparison: false
    })} actions={undefined} />
      <EffectScoreboard {...args} title="Dados insuficientes" data={effectData({
      absentBefore: 10,
      comparison: false
    })} actions={undefined} />
      <EffectScoreboard {...args} title="Menor é melhor · fila no caixa" actionLabel="Caixa extra aos sábados" metricLabel="Fila no caixa (min)" polarity="lower-is-better" valueFormat={{
      style: "number",
      maximumFractionDigits: 1
    }} source="ERP fictício · tempo médio de fila, em minutos" data={effectQueueData()} actions={undefined} />
      <EffectScoreboard {...args} title="Carregando" status="loading" data={effectData()} />
      <EffectScoreboard {...args} title="Vazio" status="empty" data={null} />
      <EffectScoreboard {...args} title="Erro" status="error" data={null} onRetry={() => {}} />
      <EffectScoreboard {...args} title="Parcial" status="partial" partialNote="1 das 4 lojas ainda não enviou as visitas de 26/10." scope="3 de 4 lojas" data={effectData()} />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Estados próprios (em avaliação com parcial, em avaliação sem parcial, dados insuficientes), menor é
melhor, e os estados gerais (carregando, vazio, erro, parcial). A ressalva aparece em todos.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Celular a 360 px: placar em três colunas compactas, rótulos visíveis e nada cortado.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Trocar filtro",
  render: args => <FilterSwap {...args} />
}`,...W.parameters?.docs?.source},description:{story:`Movimento: a entrada toca uma vez (cascata só aqui). "Trocar filtro" leva números e minigráfico do
valor antigo ao novo, todos juntos e sem cascata; dia que vira ausência (ou volta) troca na hora,
sem passar por zero. Com movimento reduzido, o valor final aparece direto.`,...W.parameters?.docs?.description}}}})))()}export{L as n,K as r,O as t};