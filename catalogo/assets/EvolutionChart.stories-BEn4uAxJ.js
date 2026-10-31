import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{Dn as n,Lt as r,t as i,xr as a}from"./src-BbyRaoY1.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./trending-up-lP0xectD.js";import{n as l,r as u}from"./iframe-CM67LgzI.js";import{n as d,t as f}from"./smooth-decorator-Ch0T28w-.js";import{f as p,g as m,n as h,t as g}from"./fixtures-BBJMtdSN.js";import{_,a as v,c as y,g as b,h as x,m as S,n as C,t as w,v as T,y as E}from"./fixtures-smooth-fhbAfNb8.js";var D=t({AdaptacaoAoContainer:()=>B,DadosExtremos:()=>R,Estados:()=>F,Lacunas:()=>L,MetaSemDistribuicao:()=>I,Padrao:()=>N,TemasEIdentidade:()=>V,Visoes:()=>P,__namedExportsOrder:()=>H,default:()=>j});function O({caption:e,children:t,span:n}){return(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minWidth:0,gridColumn:n?`1 / -1`:void 0},children:[(0,k.jsx)(`p`,{className:`story-caption`,children:e}),(0,k.jsx)(`div`,{style:{flex:1},children:t})]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{f(),s(),i(),p(),E(),C(),u(),k=o(),{fn:A}=__STORYBOOK_MODULE_TEST__,j={title:`Widgets/EvolutionChart`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Evolução temporal com realizado, meta e previsão nas visões acumulada, diária e tabela. O realizado termina no corte; lacunas e dias futuros não viram zero; meta diária só com distribuição; previsão com versão, método e data. Todos os dados do catálogo são fictícios.`}}},args:{title:`Ritmo de vendas`,subtitle:`Outubro 2026 · dados até 17/10 (dia parcial)`,icon:(0,k.jsx)(c,{}),data:S,format:y,locale:`pt-BR`,timeZone:h,description:`Realizado acumulado contra a meta acumulada do mesmo recorte. Dados fictícios.`,source:`ERP fictício`,updatedAt:m(12),now:g,staleAfterMs:216e5,partialNote:`17/10 está em andamento (dados até 14h).`,methodology:{source:`ERP fictício, vendas faturadas menos devoluções`,period:`1 a 31 de outubro de 2026`,formula:`Realizado acumulado = soma diária até o corte. Diferença = realizado − meta na última data comparável.`,limitations:`O dia corrente é parcial e não entra na comparação.`},onRetry:A()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},defaultView:{control:`inline-radio`,options:[`cumulative`,`daily`,`table`]},locale:{control:`select`,options:[`pt-BR`,`en-US`]},icon:{control:!1},data:{control:`object`},messages:{control:!1},methodology:{control:`object`}},decorators:[d,(e,t)=>t.parameters.fullWidth?(0,k.jsx)(e,{}):(0,k.jsx)(`div`,{style:{maxWidth:920},children:(0,k.jsx)(e,{})})]},M={display:`grid`,gap:`1rem`,gridTemplateColumns:`repeat(auto-fill, minmax(min(100%, 26rem), 1fr))`},N={name:`Padrão`,args:{title:`Venda acumulada`,subtitle:`Rede, 8 unidades: realizado, meta e previsão por dia`,data:v,format:w,methodology:{source:`ERP fictício, vendas faturadas menos devoluções`,formula:`Venda líquida das 8 unidades, acumulada dia a dia. Meta distribuída pelos dias com operação; até 16/10 fecha com o total da tabela.`,limitations:`O dia corrente é parcial e não entra na comparação.`}}},P={name:`Visões`,parameters:{fullWidth:!0},render:e=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,k.jsx)(O,{caption:`Acumulado`,children:(0,k.jsx)(r,{...e,defaultView:`cumulative`})}),(0,k.jsx)(O,{caption:`Diário`,children:(0,k.jsx)(r,{...e,defaultView:`daily`})}),(0,k.jsx)(O,{caption:`Tabela`,children:(0,k.jsx)(r,{...e,defaultView:`table`})})]})},F={parameters:{fullWidth:!0},render:e=>(0,k.jsxs)(`div`,{style:M,children:[(0,k.jsx)(O,{caption:`Pronto`,children:(0,k.jsx)(r,{...e,partialNote:void 0})}),(0,k.jsx)(O,{caption:`Carregando`,children:(0,k.jsx)(r,{...e,status:`loading`})}),(0,k.jsx)(O,{caption:`Vazio`,children:(0,k.jsx)(r,{...e,data:{points:[]},emptyMessage:`Nenhuma venda registrada em outubro para este recorte.`})}),(0,k.jsx)(O,{caption:`Erro (com nova tentativa)`,children:(0,k.jsx)(r,{...e,status:`error`,errorMessage:`O ERP fictício não respondeu em 10 s.`})}),(0,k.jsx)(O,{caption:`Sem permissão`,children:(0,k.jsx)(r,{...e,status:`restricted`,restrictedMessage:`Seu perfil vê só a própria unidade.`})}),(0,k.jsx)(O,{caption:`Parcial (nota visível)`,children:(0,k.jsx)(r,{...e,status:`partial`})}),(0,k.jsx)(O,{caption:`Desatualizado (automático por idade)`,children:(0,k.jsx)(r,{...e,updatedAt:m(540),partialNote:void 0})})]})},I={name:`Meta sem distribuição e sem meta`,parameters:{fullWidth:!0},render:e=>(0,k.jsxs)(`div`,{style:M,children:[(0,k.jsx)(O,{caption:`Meta só do mês`,children:(0,k.jsx)(r,{...e,data:_,subtitle:`Outubro 2026 · dados até 16/10`,partialNote:void 0})}),(0,k.jsx)(O,{caption:`Sem meta (realizado e previsão)`,children:(0,k.jsx)(r,{...e,data:T,subtitle:`Outubro 2026 · dados até 16/10`,partialNote:void 0})})]})},L={name:`Lacunas, zero e sem operação`,parameters:{fullWidth:!0},render:e=>(0,k.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,k.jsx)(O,{caption:`Acumulado`,children:(0,k.jsx)(r,{...e,data:b,subtitle:`Outubro 2026 · dados até 17/10`,partialNote:`09/10 sem dados: o acumulado a partir dele não inclui esse dia.`,scope:(0,k.jsx)(n,{label:`Recorte efetivo`,value:`Unidade Litoral`,reason:`as demais unidades não têm a falha`})})}),(0,k.jsx)(O,{caption:`Diário`,children:(0,k.jsx)(r,{...e,data:b,subtitle:`Outubro 2026 · dados até 17/10`,defaultView:`daily`,partialNote:void 0})})]})},R={name:`Dados extremos e idioma`,parameters:{fullWidth:!0},render:e=>(0,k.jsxs)(`div`,{style:M,children:[(0,k.jsx)(O,{caption:`Valores muito grandes, acima da meta, mês fechado`,children:(0,k.jsx)(r,{...e,data:x,title:`Volume transacionado consolidado de todas as unidades e canais parceiros`,subtitle:`Setembro 2026 · mês fechado, consolidado no fechamento contábil`,partialNote:void 0})}),(0,k.jsx)(O,{caption:`en-US · USD`,children:(0,k.jsx)(r,{...e,title:`Sales pace`,subtitle:`October 2026 · data through Oct 17 (partial day)`,locale:`en-US`,format:{style:`currency`,currency:`USD`},partialNote:`Oct 17 is still in progress.`,source:`Fictional ERP`,description:`Fictional data.`,methodology:void 0})})]})},z=[320,420,640],B={name:`Adaptação ao container`,parameters:{fullWidth:!0},render:e=>(0,k.jsx)(`div`,{className:`story-row`,style:{alignItems:`flex-start`},children:z.map(t=>(0,k.jsxs)(`div`,{style:{width:t,display:`flex`,flexDirection:`column`},children:[(0,k.jsx)(`p`,{className:`story-caption`,children:`${t}px`}),(0,k.jsx)(r,{...e,partialNote:void 0})]},t))})},V={name:`Temas e identidade`,parameters:{fullWidth:!0},render:e=>(0,k.jsx)(`div`,{style:M,children:[[`Escuro · padrão`,`dark`,void 0],[`Claro · padrão`,`light`,void 0],[`Escuro · índigo (tokens)`,`dark`,l.dark],[`Claro · índigo (tokens)`,`light`,l.light]].map(([t,n,i])=>(0,k.jsxs)(a,{mode:n,tokens:i,canvas:!0,style:{padding:16,borderRadius:16},children:[(0,k.jsx)(`p`,{className:`story-caption`,children:t}),(0,k.jsx)(r,{...e,partialNote:void 0})]},t))})},H=[`Padrao`,`Visoes`,`Estados`,`MetaSemDistribuicao`,`Lacunas`,`DadosExtremos`,`AdaptacaoAoContainer`,`TemasEIdentidade`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    title: "Venda acumulada",
    subtitle: "Rede, 8 unidades: realizado, meta e previsão por dia",
    data: sx.smoothEvolution,
    format: sx.brlExact,
    methodology: {
      source: "ERP fictício, vendas faturadas menos devoluções",
      formula: "Venda líquida das 8 unidades, acumulada dia a dia. Meta distribuída pelos dias com operação; até 16/10 fecha com o total da tabela.",
      limitations: "O dia corrente é parcial e não entra na comparação."
    }
  }
}`,...N.parameters?.docs?.source},description:{story:`Mês parcial: realizado até o corte, meta distribuída, previsão e dia parcial marcado.
Configuração padrão (0.4.0): o mesmo conjunto conciliado do Início (fixtures-smooth). Até 16/10 o
gráfico fecha com a linha Rede da tabela (R$ 1.618.456 × R$ 1.636.500).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Visões",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      <Cell caption="Acumulado">
        <EvolutionChart {...args} defaultView="cumulative" />
      </Cell>
      <Cell caption="Diário">
        <EvolutionChart {...args} defaultView="daily" />
      </Cell>
      <Cell caption="Tabela">
        <EvolutionChart {...args} defaultView="table" />
      </Cell>
    </div>
}`,...P.parameters?.docs?.source},description:{story:`As três visões do mesmo dado. A tabela é a alternativa acessível.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    fullWidth: true
  },
  render: args => <div style={grid2}>
      <Cell caption="Pronto">
        <EvolutionChart {...args} partialNote={undefined} />
      </Cell>
      <Cell caption="Carregando">
        <EvolutionChart {...args} status="loading" />
      </Cell>
      <Cell caption="Vazio">
        <EvolutionChart {...args} data={{
        points: []
      }} emptyMessage="Nenhuma venda registrada em outubro para este recorte." />
      </Cell>
      <Cell caption="Erro (com nova tentativa)">
        <EvolutionChart {...args} status="error" errorMessage="O ERP fictício não respondeu em 10 s." />
      </Cell>
      <Cell caption="Sem permissão">
        <EvolutionChart {...args} status="restricted" restrictedMessage="Seu perfil vê só a própria unidade." />
      </Cell>
      <Cell caption="Parcial (nota visível)">
        <EvolutionChart {...args} status="partial" />
      </Cell>
      <Cell caption="Desatualizado (automático por idade)">
        <EvolutionChart {...args} updatedAt={fx.minutesBefore(9 * 60)} partialNote={undefined} />
      </Cell>
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Estados desenhados: pronto, carregando, vazio, erro, sem permissão, parcial e desatualizado.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Meta sem distribuição e sem meta",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={grid2}>
      <Cell caption="Meta só do mês">
        <EvolutionChart {...args} data={px.evolucaoMetaMensal} subtitle="Outubro 2026 · dados até 16/10" partialNote={undefined} />
      </Cell>
      <Cell caption="Sem meta (realizado e previsão)">
        <EvolutionChart {...args} data={px.evolucaoSemMeta} subtitle="Outubro 2026 · dados até 16/10" partialNote={undefined} />
      </Cell>
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Meta só do período: não há curva diária inventada; a meta aparece à parte. Sem meta: realizado sem comparação.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Lacunas, zero e sem operação",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      <Cell caption="Acumulado">
        <EvolutionChart {...args} data={px.evolucaoLacunas} subtitle="Outubro 2026 · dados até 17/10" partialNote="09/10 sem dados: o acumulado a partir dele não inclui esse dia." scope={<ScopeNote label="Recorte efetivo" value="Unidade Litoral" reason="as demais unidades não têm a falha" />} />
      </Cell>
      <Cell caption="Diário">
        <EvolutionChart {...args} data={px.evolucaoLacunas} subtitle="Outubro 2026 · dados até 17/10" defaultView="daily" partialNote={undefined} />
      </Cell>
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Sem dados (lacuna), sem operação, zero e dia negativo: três situações diferentes, nunca confundidas.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Dados extremos e idioma",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={grid2}>
      <Cell caption="Valores muito grandes, acima da meta, mês fechado">
        <EvolutionChart {...args} data={px.evolucaoEnorme} title="Volume transacionado consolidado de todas as unidades e canais parceiros" subtitle="Setembro 2026 · mês fechado, consolidado no fechamento contábil" partialNote={undefined} />
      </Cell>
      <Cell caption="en-US · USD">
        <EvolutionChart {...args} title="Sales pace" subtitle="October 2026 · data through Oct 17 (partial day)" locale="en-US" format={{
        style: "currency",
        currency: "USD"
      }} partialNote="Oct 17 is still in progress." source="Fictional ERP" description="Fictional data." methodology={undefined} />
      </Cell>
    </div>
}`,...R.parameters?.docs?.source},description:{story:`Valores grandes, textos longos e outro idioma.`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Adaptação ao container",
  parameters: {
    fullWidth: true
  },
  render: args => <div className="story-row" style={{
    alignItems: "flex-start"
  }}>
      {widths.map(w => <div key={w} style={{
      width: w,
      display: "flex",
      flexDirection: "column"
    }}>
          <p className="story-caption">{\`\${w}px\`}</p>
          <EvolutionChart {...args} partialNote={undefined} />
        </div>)}
    </div>
}`,...B.parameters?.docs?.source},description:{story:`O gráfico responde à largura do container: rótulos diretos e eixo se ajustam.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Temas e identidade",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={grid2}>
      {([["Escuro · padrão", "dark", undefined], ["Claro · padrão", "light", undefined], ["Escuro · índigo (tokens)", "dark", indigoIdentity.dark], ["Claro · índigo (tokens)", "light", indigoIdentity.light]] as const).map(([caption, mode, tokens]) => <RbTheme key={caption} mode={mode} tokens={tokens} canvas style={{
      padding: 16,
      borderRadius: 16
    }}>
          <p className="story-caption">{caption}</p>
          <EvolutionChart {...args} partialNote={undefined} />
        </RbTheme>)}
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Modos e identidade por tokens.`,...V.parameters?.docs?.description}}}})))()}export{L as a,V as c,j as d,D as i,P as l,R as n,I as o,F as r,N as s,B as t,U as u};