import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{a as r,t as i}from"./src-BbyRaoY1.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,n as s}from"./fixtures-operacao-D_doPmKE.js";var c=t({Carregando:()=>m,Erro:()=>g,Padrao:()=>p,TextosDoCliente:()=>_,Vazio:()=>h,__namedExportsOrder:()=>v,default:()=>f});function l({initial:e,advanceLabels:t}){let[n,i]=(0,u.useState)(e);return(0,d.jsx)(r,{title:`Plano de ação`,subtitle:`Dados fictícios · a persistência fica com quem usa (callbacks)`,items:n,advanceLabels:t,onCreate:e=>i(t=>[...t,{id:`n${t.length+1}`,stage:`suggested`,title:e.title,unit:e.unit,owner:e.owner}]),onMove:(e,t,n)=>i(r=>r.map(r=>r.id===e?{...r,stage:t,evidence:n&&(t===`executed`||t===`evaluated`)?{...r.evidence,[t]:n}:r.evidence}:r))})}var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{u=n(),i(),o(),d=a(),f={title:`Widgets/Plano de ação`,id:`widgets-plano-de-acao`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"Quadro sugerido → aprovado → executado → resultado avaliado (0.5.0). Executado e avaliado exigem evidência escrita. Sem armazenamento no componente: `onCreate`, `onMove` e `onEvidence`. Teclado: botões em cada card e Alt + setas no card focado."}}},args:{title:`Plano de ação`,items:s},decorators:[e=>(0,d.jsx)(`div`,{style:{padding:`1.5rem`},children:(0,d.jsx)(e,{})})]},p={name:`Padrão`,render:()=>(0,d.jsx)(l,{initial:s})},m={args:{status:`loading`,items:null}},h={name:`Sem ações`,render:()=>(0,d.jsx)(l,{initial:[]})},g={args:{status:`error`,items:null,onRetry:()=>void 0}},_={name:`Textos do cliente nos botões`,render:()=>(0,d.jsx)(l,{initial:s,advanceLabels:{approved:`Simular aprovação`,executed:`Registrar execução demonstrativa`,evaluated:`Registrar avaliação`}})},v=[`Padrao`,`Carregando`,`Vazio`,`Erro`,`TextosDoCliente`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  render: () => <BoardDemo initial={actions} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: "loading",
    items: null
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Sem ações",
  render: () => <BoardDemo initial={[]} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    items: null,
    onRetry: () => undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Textos do cliente nos botões",
  render: () => <BoardDemo initial={actions} advanceLabels={{
    approved: "Simular aprovação",
    executed: "Registrar execução demonstrativa",
    evaluated: "Registrar avaliação"
  }} />
}`,..._.parameters?.docs?.source},description:{story:'Textos do cliente nos botões de avanço (0.5.0-rc.2, `advanceLabels`): o texto visível muda por\netapa de destino e o nome acessível começa por ele ("Simular aprovação: Repor numeração 35"),\nsem `label-content-name-mismatch`. Nas etapas com evidência, o mesmo texto confirma o registro.',..._.parameters?.docs?.description}}}})))()}export{c as n,y as r,p as t};