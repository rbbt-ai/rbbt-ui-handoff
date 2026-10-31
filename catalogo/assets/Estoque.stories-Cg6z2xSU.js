import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{c as r,l as i,s as a,t as o}from"./src-BbyRaoY1.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{a as c,i as l,o as u}from"./fixtures-operacao-D_doPmKE.js";var d=t({Carregando:()=>b,ContainerEstreito:()=>y,Erro:()=>S,Padrao:()=>v,Parcial:()=>C,Simulador:()=>w,SimuladorNoMaximo:()=>T,SimuladorNoMinimo:()=>E,SimuladorOrigemZerada:()=>D,SimuladorSobDemanda:()=>O,Vazio:()=>x,__namedExportsOrder:()=>k,default:()=>_});function f({origem:e=`u1`,quantidade:t=2}){let[n,i]=(0,m.useState)(e),[a,o]=(0,m.useState)(`u2`),[s,c]=(0,m.useState)(t);return(0,h.jsx)(r,{title:`Simular transferência`,context:`Referência fictícia · tamanho 35`,units:u,origin:n,destination:a===n?`u3`:a,quantity:s,onOriginChange:i,onDestinationChange:o,onQuantityChange:c,minQuantity:1,maxQuantity:4,minWeeksAtOrigin:3,note:`Limite ilustrativo de 4 peças por transferência, definido pelo cliente.`,onSaveDraft:g()})}function p(){let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(`u1`),[o,s]=(0,m.useState)(`u2`),[l,d]=(0,m.useState)(2);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{title:`Grade e cobertura`,subtitle:`Referência fictícia · 4 lojas`,data:c,asOf:`26/10/2026`,badge:`Simulação`,legend:`Zero = estoque zerado no exemplo (traço e rótulo, não só cor). Sem leitura é ausência, nunca zero.`,note:`Cobertura sintética: não use para transferir mercadoria.`,onSimulate:()=>t(!0)}),(0,h.jsx)(i,{isOpen:e,onClose:()=>t(!1),title:`Simular transferência`,context:`Referência fictícia · tamanho 35`,units:u,origin:n,destination:o,quantity:l,onOriginChange:r,onDestinationChange:s,onQuantityChange:d,minQuantity:1,maxQuantity:4,minWeeksAtOrigin:3,note:`Limite ilustrativo de 4 peças por transferência.`,onSaveDraft:()=>t(!1)})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{m=n(),o(),l(),h=s(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Widgets/Estoque`,id:`widgets-estoque`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:'Grade de tamanhos × unidades (0.5.0): o zero aparece com cor, listras, borda e rótulo; "sem leitura" é ausência, nunca zero; cobertura em semanas e posição datada. Abaixo de 560 px de container, vira lista por unidade (cobertura, "Ruptura: …" e "Ver grade"). O `TransferSimulator` mostra o efeito previsto nas duas pontas e não movimenta nada. Na 0.5.0-rc.2: o simulador abre sob demanda (`TransferSimulatorDialog`), tem mínimo e máximo com o motivo em texto e segue o `locale` do widget; a grade aceita a legenda e uma nota do cliente (`legend`, `note`).'}}},args:{title:`Grade e cobertura`,subtitle:`Referência fictícia · 4 lojas`,data:c,asOf:`26/10/2026`,badge:`Simulação`,onSimulate:g()},decorators:[e=>(0,h.jsx)(`div`,{style:{padding:`1.5rem`,maxWidth:`64rem`},children:(0,h.jsx)(e,{})})]},v={name:`Padrão`},y={name:`Container estreito`,decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:`22.5rem`},children:(0,h.jsx)(e,{})})]},b={args:{status:`loading`,data:null}},x={args:{data:null}},S={args:{status:`error`,data:null,onRetry:g()}},C={args:{status:`partial`,partialNote:`1 loja sem leitura no tamanho 39: a cobertura dela usa só os tamanhos lidos.`}},w={render:()=>(0,h.jsx)(f,{})},T={name:`Simulador no máximo`,render:()=>(0,h.jsx)(f,{quantidade:4})},E={name:`Simulador no mínimo`,render:()=>(0,h.jsx)(f,{quantidade:1})},D={name:`Simulador com origem zerada`,render:()=>(0,h.jsx)(f,{origem:`u2`,quantidade:2})},O={name:`Simulador sob demanda`,render:()=>(0,h.jsx)(p,{})},k=[`Padrao`,`ContainerEstreito`,`Carregando`,`Vazio`,`Erro`,`Parcial`,`Simulador`,`SimuladorNoMaximo`,`SimuladorNoMinimo`,`SimuladorOrigemZerada`,`SimuladorSobDemanda`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Container estreito",
  decorators: [Story => <div style={{
    maxWidth: "22.5rem"
  }}>
        <Story />
      </div>]
}`,...y.parameters?.docs?.source},description:{story:`Container estreito (celular ou coluna lateral): lista por unidade em vez da grade cortada.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    status: "loading",
    data: null
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: null
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    data: null,
    onRetry: fn()
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    status: "partial",
    partialNote: "1 loja sem leitura no tamanho 39: a cobertura dela usa só os tamanhos lidos."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <SimuladorDemo />
}`,...w.parameters?.docs?.source},description:{story:`Origem, destino e quantidade: efeito previsto na cobertura. A quantidade fica entre o mínimo e o
teto (o menor entre o estoque da origem e o máximo configurado); nos limites, "−" e "+" ficam
desabilitados e o motivo aparece em texto (0.5.0-rc.2).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Simulador no máximo",
  render: () => <SimuladorDemo quantidade={4} />
}`,...T.parameters?.docs?.source},description:{story:`No máximo configurado (4 peças por transferência): "+" desabilitado, com o motivo em texto.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Simulador no mínimo",
  render: () => <SimuladorDemo quantidade={1} />
}`,...E.parameters?.docs?.source},description:{story:`No mínimo (1 peça): "−" desabilitado.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Simulador com origem zerada",
  render: () => <SimuladorDemo origem="u2" quantidade={2} />
}`,...D.parameters?.docs?.source},description:{story:`Origem zerada: faixa 0–0, os dois botões desabilitados e o motivo em texto; nada a transferir.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Simulador sob demanda",
  render: () => <SobDemandaDemo />
}`,...O.parameters?.docs?.source},description:{story:`Simulador sob demanda (0.5.0-rc.2): a grade traz o botão "Simular transferência"; o simulador
abre num painel lateral (folha inferior no celular), com o foco dentro. Esc fecha e devolve o
foco ao botão. No Glass, o painel tem o desfoque das superfícies. Continua "Simulação": nada é
movimentado.`,...O.parameters?.docs?.description}}}})))()}export{v as n,A as r,d as t};