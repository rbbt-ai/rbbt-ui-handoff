import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t,t as n}from"./src-BSeQ01dl.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./milestone-B9OnxuTW.js";import{n as o,t as s}from"./smooth-decorator-CjOKIOT8.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),n(),s(),c=r(),l=[{id:`ano-anterior`,label:`Ano anterior`,kind:`total`,value:742e4},{id:`plano`,label:`Crescimento planejado`,kind:`delta`,value:61e4},{id:`budget`,label:`Budget`,kind:`total`,value:803e4},{id:`realizado`,label:`Desvio do realizado`,kind:`delta`,value:-28e4},{id:`projection`,label:`Projection`,kind:`total`,value:775e4},{id:`ritmo`,label:`Ritmo das últimas 4 semanas`,kind:`delta`,value:19e4},{id:`pacing`,label:`Pacing`,kind:`total`,value:794e4}],u=l.map(e=>e.id===`realizado`?{...e,value:null}:e),d=l.map(e=>e.id===`projection`?{...e,value:79e5}:e),f={title:`Widgets/Ponte em cascata`,id:`widgets-ponte-cascata`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:'`BridgeChart` (B-002, 0.5.0-rc.12), irmão do `ResultWaterfall`: etapas nomeadas com totais intermediários (Ano anterior → Budget → Projection → Pacing). Cada variação mostra valor, % sobre a âncora anterior e a leitura pela polaridade (cor, ícone e texto). As âncoras são conferidas contra a soma das etapas. Etapa sem valor aparece como "sem dado", nunca como zero. Tabela alternativa em "Ver tabela". Dados fictícios: Pedravela.'}}},args:{title:`Ponte da receita do trimestre`,icon:(0,c.jsx)(a,{}),steps:l,period:`4º trimestre de 2026`,scope:`18 lojas`,valueFormat:{style:`currency`,currency:`BRL`,notation:`compact`,compactMaximumFractionDigits:2},source:`ERP fictício · plano e realizado`,locale:`pt-BR`},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`partial`]},baseline:{control:`inline-radio`,options:[`auto`,`zero`]},polarity:{control:`inline-radio`,options:[`higher-is-better`,`lower-is-better`]},icon:{control:!1},steps:{control:`object`}},decorators:[o,e=>(0,c.jsx)(`div`,{style:{maxWidth:760},children:(0,c.jsx)(e,{})})]},p={name:`Padrão`},m={args:{defaultTableOpen:!0}},h={name:`Sem dado (ausência ≠ zero)`,args:{steps:u}},g={name:`Âncora que não fecha`,args:{steps:d}},_={name:`Base zero`,args:{baseline:`zero`}},v={render:e=>(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,c.jsx)(t,{...e,title:`Carregando`,status:`loading`}),(0,c.jsx)(t,{...e,title:`Vazio`,steps:[]}),(0,c.jsx)(t,{...e,title:`Erro`,status:`error`,onRetry:()=>void 0})]})},y={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},b=[`Padrao`,`Tabela`,`SemDado`,`NaoFecha`,`BaseZero`,`Estados`,`GlassEscuro`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...p.parameters?.docs?.source},description:{story:`Ano anterior → Budget → Projection → Pacing, com as variações entre elas.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTableOpen: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Tabela alternativa aberta.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Sem dado (ausência ≠ zero)",
  args: {
    steps: comLacuna
  }
}`,...h.parameters?.docs?.source},description:{story:`Uma variação sem dado: não desenha, não soma; a âncora seguinte fica "sem como conferir".`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Âncora que não fecha",
  args: {
    steps: naoFecha
  }
}`,...g.parameters?.docs?.source},description:{story:`Âncora que não fecha com a soma das etapas: aviso com a diferença.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Base zero",
  args: {
    baseline: "zero"
  }
}`,..._.parameters?.docs?.source},description:{story:`Eixo a partir de zero.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      <BridgeChart {...args} title="Carregando" status="loading" />
      <BridgeChart {...args} title="Vazio" steps={[]} />
      <BridgeChart {...args} title="Erro" status="error" onRetry={() => undefined} />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Carregando, vazio e erro.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...y.parameters?.docs?.source},description:{story:`Glass escuro.`,...y.parameters?.docs?.description}}}})))()}x();export{_ as BaseZero,v as Estados,y as GlassEscuro,g as NaoFecha,p as Padrao,h as SemDado,m as Tabela,b as __namedExportsOrder,f as default};