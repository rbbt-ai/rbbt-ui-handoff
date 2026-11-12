import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Fr as r,t as i,zn as a,zt as o}from"./src-D-7wCr18.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,r as l}from"./iframe-DmJsF8km.js";import{n as u,t as d}from"./smooth-decorator-Ci0vHQZp.js";import{f,g as p,n as m,t as h}from"./fixtures-BBJMtdSN.js";var g=t({Desatualizado:()=>O,Enxuta:()=>k,Estreito:()=>D,Padrao:()=>E,PeriodoDeAte:()=>j,TemasEIdentidade:()=>M,__namedExportsOrder:()=>N,default:()=>T});function _(e){let[t,n]=(0,y.useState)(`rede`),[r,i]=(0,y.useState)(`rede`),[a,s]=(0,y.useState)(`todas`),[c,l]=(0,y.useState)(`2026-10`),[u,d]=(0,y.useState)(`meta`),f=[{value:`todas`,label:`Todas as unidades`},...(S[r]??[]).map(e=>({value:e,label:e}))];return(0,b.jsx)(o,{...e,perspective:{label:`Perspectiva`,value:t,options:[{value:`rede`,label:`Rede`},{value:`unidade`,label:`Unidade`}],onChange:n},filters:[{id:`regiao`,label:`Região`,value:r,options:x,onChange:e=>(i(e),s(`todas`))},{id:`unidade`,label:`Unidade`,value:a,options:f,onChange:s},{id:`periodo`,label:`Período`,value:c,options:C,onChange:l,showInSummary:e.anatomy!==`lean`&&void 0},{id:`comparacao`,label:`Comparação`,value:u,options:w,onChange:d}]})}function v(e){let[t,n]=(0,y.useState)({from:`2026-10-01`,to:`2026-10-15`}),[r,i]=(0,y.useState)(`todas`),[a,s]=(0,y.useState)(`meta`);return(0,b.jsx)(o,{...e,filters:[{kind:`date-range`,id:`periodo`,label:`Período`,value:t,onChange:n,min:`2025-01-01`,presets:[`thisMonth`,`lastMonth`,`year`,`yearToDate`]},{id:`loja`,label:`Loja`,value:r,options:A,onChange:i},{id:`comparacao`,label:`Comparação`,value:a,options:w,onChange:s}]})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{d(),y=n(),i(),f(),l(),b=s(),x=[{value:`rede`,label:`Rede`,description:`8 unidades`},{value:`sul`,label:`Região Sul`,description:`5 unidades, inclui a móvel`},{value:`norte`,label:`Região Norte`,description:`3 unidades`}],S={rede:[`Unidade Centro`,`Unidade Porto`,`Unidade Serra`,`Unidade Litoral`,`Unidade Móvel`,`Unidade Rio`,`Unidade Vale`,`Unidade Nova`],sul:[`Unidade Centro`,`Unidade Porto`,`Unidade Serra`,`Unidade Litoral`,`Unidade Móvel`],norte:[`Unidade Rio`,`Unidade Vale`,`Unidade Nova`]},C=[{value:`2026-10`,label:`Outubro 2026`,description:`parcial, até 16/10`},{value:`2026-09`,label:`Setembro 2026`,description:`fechado`}],w=[{value:`meta`,label:`Meta`,shortLabel:`vs. meta`},{value:`anterior`,label:`Mesmos dias do mês anterior`,shortLabel:`vs. mês anterior`}],T={title:`Widgets/ContextBar`,component:o,tags:[`autodocs`],decorators:[u],parameters:{docs:{description:{component:`Contexto compacto da página: título, perspectiva, filtros, atualização, cobertura e fonte. Em containers estreitos os filtros viram um resumo que abre num painel. Dados fictícios.`}}},args:{title:`Visão geral`,subtitle:`Resultado, desvios e prioridades da rede`,locale:`pt-BR`,timeZone:m,updatedAt:p(12),now:h,staleAfterMs:216e5,coverage:{label:`7 de 8 unidades completas`,tone:`warning`,description:`Unidade Litoral sem dados em 15 e 16/10`},source:`ERP fictício`,extra:(0,b.jsx)(a,{tone:`info`,children:`Dados fictícios`}),filters:[]},render:e=>(0,b.jsx)(_,{...e})},E={name:`Padrão`,args:{title:`Desempenho da rede`,subtitle:`Resultado, desvios e prioridades das 8 unidades`,coverage:{label:`7 de 8 unidades enviaram hoje`,tone:`warning`,description:`Unidade Litoral sem envio desde as 9h de hoje; até 16/10, completo.`}}},D={render:e=>(0,b.jsx)(`div`,{style:{maxWidth:380},children:(0,b.jsx)(_,{...e})})},O={args:{updatedAt:p(1560),coverage:{label:`8 de 8 unidades completas`,tone:`positive`}}},k={name:`Anatomia enxuta 0.2.0-rc.2`,tags:[`!dev`,`!autodocs`],args:{anatomy:`lean`,period:`Outubro 2026, até 16/10`,subtitle:`Rede · 8 unidades`,extra:`Dados fictícios`},render:e=>(0,b.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`},children:[(0,b.jsx)(_,{...e}),(0,b.jsxs)(`div`,{style:{maxWidth:380},children:[(0,b.jsx)(`p`,{className:`story-caption`,children:`Estreito · 380 px`}),(0,b.jsx)(_,{...e,title:`Visão geral (estreito)`,headingLevel:2})]})]})},A=[{value:`todas`,label:`Todas as lojas`,description:`12 lojas`},{value:`centro`,label:`Loja Centro`},{value:`shopping-sul`,label:`Loja Shopping Sul`},{value:`outlet`,label:`Outlet Rodovia`}],j={name:`Período De/Até`,args:{title:`Vendas da rede`,subtitle:`Pedravela Calçados · 12 lojas`,now:`2026-10-15T15:00:00-03:00`,updatedAt:`2026-10-15T14:48:00-03:00`,coverage:{label:`12 de 12 lojas`,tone:`positive`},source:`ERP fictício`,extra:(0,b.jsx)(a,{tone:`info`,children:`Dados fictícios`})},render:e=>(0,b.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`,minHeight:520,alignContent:`start`},children:[(0,b.jsx)(v,{...e}),(0,b.jsxs)(`div`,{style:{maxWidth:380},children:[(0,b.jsx)(`p`,{className:`story-caption`,children:`Estreito · 380 px`}),(0,b.jsx)(v,{...e,title:`Vendas da rede (estreito)`,headingLevel:2})]})]})},M={name:`Temas e identidade`,render:e=>(0,b.jsx)(`div`,{style:{display:`grid`,gap:`1rem`},children:[[`Claro · padrão`,`light`,void 0],[`Escuro · índigo (tokens)`,`dark`,c.dark]].map(([t,n,i])=>(0,b.jsxs)(r,{mode:n,tokens:i,canvas:!0,style:{padding:16,borderRadius:16},children:[(0,b.jsx)(`p`,{className:`story-caption`,children:t}),(0,b.jsx)(_,{...e})]},t))})},N=[`Padrao`,`Estreito`,`Desatualizado`,`Enxuta`,`PeriodoDeAte`,`TemasEIdentidade`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    title: "Desempenho da rede",
    subtitle: "Resultado, desvios e prioridades das 8 unidades",
    coverage: {
      label: "7 de 8 unidades enviaram hoje",
      tone: "warning",
      description: "Unidade Litoral sem envio desde as 9h de hoje; até 16/10, completo."
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`Configuração padrão (0.4.0): o mesmo recorte do Início (rede de 8 unidades, até 16/10).`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 380
  }}>
      <Demo {...args} />
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Abaixo de 640 px de container, os filtros viram resumo + painel.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    updatedAt: fx.minutesBefore(26 * 60),
    coverage: {
      label: "8 de 8 unidades completas",
      tone: "positive"
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Anatomia enxuta 0.2.0-rc.2",
  // 0.4.0: variante 0.2, só no Legado (a página do widget já abre no smooth).
  tags: ["!dev", "!autodocs"],
  args: {
    anatomy: "lean",
    period: "Outubro 2026, até 16/10",
    subtitle: "Rede · 8 unidades",
    extra: "Dados fictícios"
  },
  render: args => <div style={{
    display: "grid",
    gap: "2rem"
  }}>
      <Demo {...args} />
      <div style={{
      maxWidth: 380
    }}>
        <p className="story-caption">Estreito · 380 px</p>
        <Demo {...args} title="Visão geral (estreito)" headingLevel={2} />
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Anatomia enxuta (0.2.0-rc.2): período e corte, cobertura, atualização, fonte e identificação numa
linha só, mostrada uma vez para a página. A cobertura vira marcador; o detalhe abre por clique,
toque ou teclado. Em container estreito, os filtros viram um resumo de uma linha mais o botão "Filtros".`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Período De/Até",
  args: {
    title: "Vendas da rede",
    subtitle: "Pedravela Calçados · 12 lojas",
    now: "2026-10-15T15:00:00-03:00",
    updatedAt: "2026-10-15T14:48:00-03:00",
    coverage: {
      label: "12 de 12 lojas",
      tone: "positive"
    },
    source: "ERP fictício",
    extra: <StatusChip tone="info">Dados fictícios</StatusChip>
  },
  render: args => <div style={{
    display: "grid",
    gap: "2rem",
    minHeight: 520,
    alignContent: "start"
  }}>
      <PeriodDemo {...args} />
      <div style={{
      maxWidth: 380
    }}>
        <p className="story-caption">Estreito · 380 px</p>
        <PeriodDemo {...args} title="Vendas da rede (estreito)" headingLevel={2} />
      </div>
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Período De/Até (0.5.0-rc.10): o seletor entra como um filtro a mais, em pílula; no container
estreito, o resumo mostra o intervalo compacto ("01–15 out 2026"). Dados fictícios da Pedravela.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Temas e identidade",
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      {([["Claro · padrão", "light", undefined], ["Escuro · índigo (tokens)", "dark", indigoIdentity.dark]] as const).map(([caption, mode, tokens]) => <RbTheme key={caption} mode={mode} tokens={tokens} canvas style={{
      padding: 16,
      borderRadius: 16
    }}>
          <p className="story-caption">{caption}</p>
          <Demo {...args} />
        </RbTheme>)}
    </div>
}`,...M.parameters?.docs?.source}}}})))()}export{E as a,T as c,D as i,O as n,M as o,k as r,P as s,g as t};