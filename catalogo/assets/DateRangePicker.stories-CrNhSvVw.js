import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Vt as r,t as i}from"./src-D-7wCr18.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";var o=t({Escuro:()=>v,Estados:()=>_,Estreito360:()=>x,Glass:()=>y,GlassEscuro:()=>b,Padrao:()=>g,Teclado:()=>S,__namedExportsOrder:()=>C,default:()=>h});function s(e){let[t,n]=(0,l.useState)(e.value);return(0,l.useEffect)(()=>n(e.value),[e.value]),(0,u.jsx)(r,{...e,value:t,onChange:t=>{n(t),e.onChange(t)}})}function c({caption:e,children:t}){return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:6,alignContent:`start`},children:[(0,u.jsx)(`p`,{className:`story-caption`,children:e}),t]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l=n(),i(),u=a(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=`2026-10-15T15:00:00-03:00`,p=`America/Sao_Paulo`,m={from:`2026-10-01`,to:`2026-10-15`},h={title:`Widgets/DateRangePicker`,id:`widgets-date-range-picker`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Período De/Até em pílula. No desktop, painel com atalhos à esquerda e 2 meses; abaixo de 640 px, folha em tela cheia com 1 mês. Digite nos campos (dd/mm/aaaa) ou marque início e fim no calendário. Data incompleta, invertida ou fora dos limites nunca chega a `onChange`: aparece um aviso e o período anterior continua valendo. Dados fictícios da Pedravela."}}},args:{label:`Período`,value:m,onChange:d(),min:`2025-01-01`,locale:`pt-BR`,timeZone:p,now:f,presets:[`thisMonth`,`lastMonth`,`year`,`yearToDate`],description:`Vendas da Pedravela (dados fictícios), desde 01/01/2025.`},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`disabled`,`error`]},value:{control:`object`},presets:{control:`object`},messages:{control:!1},onRetry:{control:!1}},decorators:[(e,t)=>(0,u.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?328:`auto`,maxWidth:`100%`,minHeight:t.parameters.width===`narrow`?120:480},children:(0,u.jsx)(e,{})})],render:e=>(0,u.jsx)(s,{...e})},g={name:`Padrão`},_={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(17rem, 1fr))`,gap:`1.25rem 1.5rem`},children:[(0,u.jsx)(c,{caption:`Pronto`,children:(0,u.jsx)(s,{...e})}),(0,u.jsx)(c,{caption:`Sem período (value = null)`,children:(0,u.jsx)(s,{...e,value:null})}),(0,u.jsx)(c,{caption:`Carregando (aria-busy)`,children:(0,u.jsx)(s,{...e,status:`loading`})}),(0,u.jsx)(c,{caption:`Sem datas disponíveis`,children:(0,u.jsx)(s,{...e,status:`empty`})}),(0,u.jsx)(c,{caption:`Desabilitado`,children:(0,u.jsx)(s,{...e,status:`disabled`})}),(0,u.jsx)(c,{caption:`Erro da fonte, com nova tentativa`,children:(0,u.jsx)(s,{...e,status:`error`,onRetry:d()})}),(0,u.jsx)(c,{caption:`Valor recebido inválido (De depois de Até)`,children:(0,u.jsx)(s,{...e,value:{from:`2026-10-15`,to:`2026-10-01`}})}),(0,u.jsx)(c,{caption:`Fora dos limites (antes de 01/01/2025)`,children:(0,u.jsx)(s,{...e,value:{from:`2024-12-20`,to:`2025-01-10`}})}),(0,u.jsx)(c,{caption:`Meses diferentes`,children:(0,u.jsx)(s,{...e,value:{from:`2026-09-28`,to:`2026-10-12`}})}),(0,u.jsx)(c,{caption:`Inglês (en-US)`,children:(0,u.jsx)(s,{...e,locale:`en-US`,label:`Period`,description:`Pedravela sales (fictitious data).`})})]})},v={globals:{rbMode:`dark`}},y={globals:{rbFamily:`glass`}},b={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},x={name:`Estreito 360`,parameters:{width:`narrow`}},S={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:560},children:[(0,u.jsx)(`p`,{className:`story-caption`,children:`Tab → pílula · Enter abre · Tab percorre atalhos, De, Até, meses e calendário · setas: dia · Page Up/Down: mês · Enter: início e fim · Esc: fecha e volta à pílula`}),(0,u.jsx)(s,{...e})]})},C=[`Padrao`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`Teclado`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...g.parameters?.docs?.source},description:{story:`Pronto: período de 01 a 15/10, atalhos e limites (de 01/01/2025 até hoje).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:"Todos os estados lado a lado. Ausência (`null`) nunca vira um período padrão.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...x.parameters?.docs?.source},description:{story:`360 px: a pílula cabe na largura; o painel abre como folha em tela cheia com 1 mês.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Só teclado: Tab até a pílula; Enter, Espaço ou Alt+↓ abrem. Tab passa pelos atalhos, pelos campos
De/Até (números e setas em cada segmento), pelos botões de mês e pelo calendário (setas mudam o
dia, Page Up/Page Down o mês, Shift+Page Up/Down o ano, Enter marca início e fim). Esc fecha e
devolve o foco à pílula.`,...S.parameters?.docs?.description}}}})))()}export{g as n,w as r,o as t};