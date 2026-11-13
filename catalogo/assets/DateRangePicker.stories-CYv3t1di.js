import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Vn as r,Vt as i,t as a,zn as o}from"./src-BEw3PAEi.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";var c=t({ComposicaoDePagina:()=>D,Escuro:()=>x,Estados:()=>b,Estreito360:()=>w,Glass:()=>S,GlassEscuro:()=>C,Padrao:()=>y,Teclado:()=>T,__namedExportsOrder:()=>O,default:()=>v});function l(e){let[t,n]=(0,f.useState)(e.value);return(0,f.useEffect)(()=>n(e.value),[e.value]),(0,p.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange(t)}})}function u({caption:e,children:t}){return(0,p.jsxs)(`div`,{style:{display:`grid`,gap:6,alignContent:`start`},children:[(0,p.jsx)(`p`,{className:`story-caption`,children:e}),t]})}function d(e){let[t,n]=(0,f.useState)(`todas`),i={flex:`1 1 14rem`,minWidth:0,maxWidth:`20rem`};return(0,p.jsxs)(`div`,{style:{display:`grid`,gap:24},children:[(0,p.jsxs)(`div`,{className:`story-filters`,style:{display:`flex`,flexWrap:`wrap`,alignItems:`flex-end`,gap:`12px 16px`},children:[(0,p.jsx)(`div`,{style:i,children:(0,p.jsx)(r,{label:`Loja`,value:t,options:E,onChange:n})}),(0,p.jsx)(`div`,{style:i,children:(0,p.jsx)(l,{...e,appearance:`field`})}),(0,p.jsx)(`div`,{className:`story-coverage`,style:{marginLeft:`auto`,marginBottom:6},children:(0,p.jsx)(o,{tone:`positive`,children:`12 de 12 lojas`})})]}),(0,p.jsxs)(`section`,{className:`story-block`,"aria-label":`Vendas do período (dados fictícios)`,style:{display:`grid`,alignContent:`space-between`,minHeight:240,padding:24,borderRadius:20,color:`var(--rb-fg)`,background:`var(--rb-surface)`,boxShadow:`inset 0 0 0 1px var(--rb-border)`},children:[(0,p.jsx)(`p`,{className:`story-caption`,style:{margin:0},children:`Vendas no período · Pedravela Calçados (dados fictícios)`}),(0,p.jsx)(`p`,{style:{margin:0,fontSize:40,fontWeight:650,letterSpacing:`-0.02em`,fontVariantNumeric:`tabular-nums`},children:`R$ 1,24 mi`})]})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f=n(),a(),p=s(),{fn:m}=__STORYBOOK_MODULE_TEST__,h=`2026-10-15T15:00:00-03:00`,g=`America/Sao_Paulo`,_={from:`2026-10-01`,to:`2026-10-15`},v={title:`Widgets/DateRangePicker`,id:`widgets-date-range-picker`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Período De/Até em pílula. No desktop, painel com atalhos à esquerda e 2 meses; abaixo de 640 px, folha em tela cheia com 1 mês. Digite nos campos (dd/mm/aaaa) ou marque início e fim no calendário. Data incompleta, invertida ou fora dos limites nunca chega a `onChange`: aparece um aviso e o período anterior continua valendo. Dados fictícios da Pedravela."}}},args:{label:`Período`,value:_,onChange:m(),min:`2025-01-01`,locale:`pt-BR`,timeZone:g,now:h,presets:[`thisMonth`,`lastMonth`,`year`,`yearToDate`],description:`Vendas da Pedravela (dados fictícios), desde 01/01/2025.`},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`disabled`,`error`]},value:{control:`object`},presets:{control:`object`},messages:{control:!1},onRetry:{control:!1}},decorators:[(e,t)=>(0,p.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?328:`auto`,maxWidth:`100%`,minHeight:t.parameters.width===`narrow`?120:480},children:(0,p.jsx)(e,{})})],render:e=>(0,p.jsx)(l,{...e})},y={name:`Padrão`},b={render:e=>(0,p.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(17rem, 1fr))`,gap:`1.25rem 1.5rem`},children:[(0,p.jsx)(u,{caption:`Pronto`,children:(0,p.jsx)(l,{...e})}),(0,p.jsx)(u,{caption:`Sem período (value = null)`,children:(0,p.jsx)(l,{...e,value:null})}),(0,p.jsx)(u,{caption:`Carregando (aria-busy)`,children:(0,p.jsx)(l,{...e,status:`loading`})}),(0,p.jsx)(u,{caption:`Sem datas disponíveis`,children:(0,p.jsx)(l,{...e,status:`empty`})}),(0,p.jsx)(u,{caption:`Desabilitado`,children:(0,p.jsx)(l,{...e,status:`disabled`})}),(0,p.jsx)(u,{caption:`Erro da fonte, com nova tentativa`,children:(0,p.jsx)(l,{...e,status:`error`,onRetry:m()})}),(0,p.jsx)(u,{caption:`Valor recebido inválido (De depois de Até)`,children:(0,p.jsx)(l,{...e,value:{from:`2026-10-15`,to:`2026-10-01`}})}),(0,p.jsx)(u,{caption:`Fora dos limites (antes de 01/01/2025)`,children:(0,p.jsx)(l,{...e,value:{from:`2024-12-20`,to:`2025-01-10`}})}),(0,p.jsx)(u,{caption:`Meses diferentes`,children:(0,p.jsx)(l,{...e,value:{from:`2026-09-28`,to:`2026-10-12`}})}),(0,p.jsx)(u,{caption:`Inglês (en-US)`,children:(0,p.jsx)(l,{...e,locale:`en-US`,label:`Period`,description:`Pedravela sales (fictitious data).`})})]})},x={globals:{rbMode:`dark`}},S={globals:{rbFamily:`glass`}},C={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},w={name:`Estreito 360`,parameters:{width:`narrow`}},T={render:e=>(0,p.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:560},children:[(0,p.jsx)(`p`,{className:`story-caption`,children:`Tab → pílula · Enter abre · Tab percorre atalhos, De, Até, meses e calendário · setas: dia · Page Up/Down: mês · Enter: início e fim · Esc: fecha e volta à pílula`}),(0,p.jsx)(l,{...e})]})},E=[{value:`todas`,label:`Todas as lojas`,description:`12 lojas`},{value:`centro`,label:`Loja Centro`},{value:`shopping-sul`,label:`Loja Shopping Sul`},{value:`outlet`,label:`Outlet Rodovia`}],D={name:`Composição de página`,render:e=>(0,p.jsx)(d,{...e})},O=[`Padrao`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`Teclado`,`ComposicaoDePagina`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...y.parameters?.docs?.source},description:{story:`Pronto: período de 01 a 15/10, atalhos e limites (de 01/01/2025 até hoje).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(17rem, 1fr))",
    gap: "1.25rem 1.5rem"
  }}>
      <Labeled caption="Pronto">
        <Controlled {...args} />
      </Labeled>
      <Labeled caption="Sem período (value = null)">
        <Controlled {...args} value={null} />
      </Labeled>
      <Labeled caption="Carregando (aria-busy)">
        <Controlled {...args} status="loading" />
      </Labeled>
      <Labeled caption="Sem datas disponíveis">
        <Controlled {...args} status="empty" />
      </Labeled>
      <Labeled caption="Desabilitado">
        <Controlled {...args} status="disabled" />
      </Labeled>
      <Labeled caption="Erro da fonte, com nova tentativa">
        <Controlled {...args} status="error" onRetry={fn()} />
      </Labeled>
      <Labeled caption="Valor recebido inválido (De depois de Até)">
        <Controlled {...args} value={{
        from: "2026-10-15",
        to: "2026-10-01"
      }} />
      </Labeled>
      <Labeled caption="Fora dos limites (antes de 01/01/2025)">
        <Controlled {...args} value={{
        from: "2024-12-20",
        to: "2025-01-10"
      }} />
      </Labeled>
      <Labeled caption="Meses diferentes">
        <Controlled {...args} value={{
        from: "2026-09-28",
        to: "2026-10-12"
      }} />
      </Labeled>
      <Labeled caption="Inglês (en-US)">
        <Controlled {...args} locale="en-US" label="Period" description="Pedravela sales (fictitious data)." />
      </Labeled>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Todos os estados lado a lado. Ausência (`null`) nunca vira um período padrão.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...w.parameters?.docs?.source},description:{story:`360 px: a pílula cabe na largura; o painel abre como folha em tela cheia com 1 mês.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 12,
    maxWidth: 560
  }}>
      <p className="story-caption">
        Tab → pílula · Enter abre · Tab percorre atalhos, De, Até, meses e calendário · setas: dia · Page Up/Down: mês · Enter: início e fim · Esc: fecha e volta à pílula
      </p>
      <Controlled {...args} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Só teclado: Tab até a pílula; Enter, Espaço ou Alt+↓ abrem. Tab passa pelos atalhos, pelos campos
De/Até (números e setas em cada segmento), pelos botões de mês e pelo calendário (setas mudam o
dia, Page Up/Page Down o mês, Shift+Page Up/Down o ano, Enter marca início e fim). Esc fecha e
devolve o foco à pílula.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Composição de página",
  render: args => <PageComposition {...args} />
}`,...D.parameters?.docs?.source},description:{story:'Em campo (0.5.0-rc.11, `appearance="field"`), numa linha de filtros montada pela página: select\nde loja, período, cobertura à direita e um bloco grande abaixo. Rótulo em cima e a mesma caixa\ndo `SelectField` (altura, borda, raio e foco); o painel e a folha a 360 px não mudam.\nDados fictícios da Pedravela.',...D.parameters?.docs?.description}}}})))()}export{k as i,c as n,y as r,D as t};