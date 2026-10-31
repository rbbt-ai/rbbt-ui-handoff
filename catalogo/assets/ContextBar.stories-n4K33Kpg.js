import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{jt as r,kn as i,t as a,xr as o}from"./src-BbyRaoY1.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,r as l}from"./iframe-CM67LgzI.js";import{n as u,t as d}from"./smooth-decorator-Ch0T28w-.js";import{f,g as p,n as m,t as h}from"./fixtures-BBJMtdSN.js";var g=t({Desatualizado:()=>D,Enxuta:()=>O,Estreito:()=>E,Padrao:()=>T,TemasEIdentidade:()=>k,__namedExportsOrder:()=>A,default:()=>w});function _(e){let[t,n]=(0,v.useState)(`rede`),[i,a]=(0,v.useState)(`rede`),[o,s]=(0,v.useState)(`todas`),[c,l]=(0,v.useState)(`2026-10`),[u,d]=(0,v.useState)(`meta`),f=[{value:`todas`,label:`Todas as unidades`},...(x[i]??[]).map(e=>({value:e,label:e}))];return(0,y.jsx)(r,{...e,perspective:{label:`Perspectiva`,value:t,options:[{value:`rede`,label:`Rede`},{value:`unidade`,label:`Unidade`}],onChange:n},filters:[{id:`regiao`,label:`Região`,value:i,options:b,onChange:e=>(a(e),s(`todas`))},{id:`unidade`,label:`Unidade`,value:o,options:f,onChange:s},{id:`periodo`,label:`Período`,value:c,options:S,onChange:l,showInSummary:e.anatomy!==`lean`&&void 0},{id:`comparacao`,label:`Comparação`,value:u,options:C,onChange:d}]})}var v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{d(),v=n(),a(),f(),l(),y=s(),b=[{value:`rede`,label:`Rede`,description:`8 unidades`},{value:`sul`,label:`Região Sul`,description:`5 unidades, inclui a móvel`},{value:`norte`,label:`Região Norte`,description:`3 unidades`}],x={rede:[`Unidade Centro`,`Unidade Porto`,`Unidade Serra`,`Unidade Litoral`,`Unidade Móvel`,`Unidade Rio`,`Unidade Vale`,`Unidade Nova`],sul:[`Unidade Centro`,`Unidade Porto`,`Unidade Serra`,`Unidade Litoral`,`Unidade Móvel`],norte:[`Unidade Rio`,`Unidade Vale`,`Unidade Nova`]},S=[{value:`2026-10`,label:`Outubro 2026`,description:`parcial, até 16/10`},{value:`2026-09`,label:`Setembro 2026`,description:`fechado`}],C=[{value:`meta`,label:`Meta`,shortLabel:`vs. meta`},{value:`anterior`,label:`Mesmos dias do mês anterior`,shortLabel:`vs. mês anterior`}],w={title:`Widgets/ContextBar`,component:r,tags:[`autodocs`],decorators:[u],parameters:{docs:{description:{component:`Contexto compacto da página: título, perspectiva, filtros, atualização, cobertura e fonte. Em containers estreitos os filtros viram um resumo que abre num painel. Dados fictícios.`}}},args:{title:`Visão geral`,subtitle:`Resultado, desvios e prioridades da rede`,locale:`pt-BR`,timeZone:m,updatedAt:p(12),now:h,staleAfterMs:216e5,coverage:{label:`7 de 8 unidades completas`,tone:`warning`,description:`Unidade Litoral sem dados em 15 e 16/10`},source:`ERP fictício`,extra:(0,y.jsx)(i,{tone:`info`,children:`Dados fictícios`}),filters:[]},render:e=>(0,y.jsx)(_,{...e})},T={name:`Padrão`,args:{title:`Desempenho da rede`,subtitle:`Resultado, desvios e prioridades das 8 unidades`,coverage:{label:`7 de 8 unidades enviaram hoje`,tone:`warning`,description:`Unidade Litoral sem envio desde as 9h de hoje; até 16/10, completo.`}}},E={render:e=>(0,y.jsx)(`div`,{style:{maxWidth:380},children:(0,y.jsx)(_,{...e})})},D={args:{updatedAt:p(1560),coverage:{label:`8 de 8 unidades completas`,tone:`positive`}}},O={name:`Anatomia enxuta 0.2.0-rc.2`,tags:[`!dev`,`!autodocs`],args:{anatomy:`lean`,period:`Outubro 2026, até 16/10`,subtitle:`Rede · 8 unidades`,extra:`Dados fictícios`},render:e=>(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`2rem`},children:[(0,y.jsx)(_,{...e}),(0,y.jsxs)(`div`,{style:{maxWidth:380},children:[(0,y.jsx)(`p`,{className:`story-caption`,children:`Estreito · 380 px`}),(0,y.jsx)(_,{...e,title:`Visão geral (estreito)`,headingLevel:2})]})]})},k={name:`Temas e identidade`,render:e=>(0,y.jsx)(`div`,{style:{display:`grid`,gap:`1rem`},children:[[`Claro · padrão`,`light`,void 0],[`Escuro · índigo (tokens)`,`dark`,c.dark]].map(([t,n,r])=>(0,y.jsxs)(o,{mode:n,tokens:r,canvas:!0,style:{padding:16,borderRadius:16},children:[(0,y.jsx)(`p`,{className:`story-caption`,children:t}),(0,y.jsx)(_,{...e})]},t))})},A=[`Padrao`,`Estreito`,`Desatualizado`,`Enxuta`,`TemasEIdentidade`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Configuração padrão (0.4.0): o mesmo recorte do Início (rede de 8 unidades, até 16/10).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 380
  }}>
      <Demo {...args} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Abaixo de 640 px de container, os filtros viram resumo + painel.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    updatedAt: fx.minutesBefore(26 * 60),
    coverage: {
      label: "8 de 8 unidades completas",
      tone: "positive"
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Anatomia enxuta (0.2.0-rc.2): período e corte, cobertura, atualização, fonte e identificação numa
linha só, mostrada uma vez para a página. A cobertura vira marcador; o detalhe abre por clique,
toque ou teclado. Em container estreito, os filtros viram um resumo de uma linha mais o botão "Filtros".`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}export{T as a,w as c,E as i,D as n,k as o,O as r,j as s,g as t};