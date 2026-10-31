import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{Fn as n,Ft as r,t as i,xr as a}from"./src-BbyRaoY1.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./store-DU7b4cjY.js";import{n as l,r as u}from"./iframe-CM67LgzI.js";import{n as d,t as f}from"./smooth-decorator-Ch0T28w-.js";import{f as p,g as m,n as h,t as g}from"./fixtures-BBJMtdSN.js";import{C as _,S as v,d as y,f as b,i as x,l as S,n as C,o as w,p as T,r as E,u as D,x as O,y as k}from"./fixtures-smooth-fhbAfNb8.js";var A=t({Cartoes:()=>I,ConciliacaoPorLinha:()=>R,Estados:()=>L,Padrao:()=>F,RankingTextosLongos:()=>B,TemasEIdentidade:()=>V,TotalDivergente:()=>z,__namedExportsOrder:()=>H,default:()=>P});function j({caption:e,children:t}){return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,minWidth:0},children:[(0,M.jsx)(`p`,{className:`story-caption`,children:e}),(0,M.jsx)(`div`,{style:{flex:1},children:t})]})}var M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{f(),s(),i(),p(),k(),C(),u(),M=o(),{fn:N}=__STORYBOOK_MODULE_TEST__,P={title:`Widgets/ComparisonTable`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Tabela comparável e ranking: ordenação com critério explícito, números tabulares, situação por linha, grupos com subtotal e total conferidos, cartões em containers estreitos e exportação CSV do recorte. Dados fictícios.`}}},args:{title:`Comparação das unidades`,subtitle:`Outubro 2026 · até 16/10, última data comparável`,icon:(0,M.jsx)(c,{}),data:D,columns:S,rowHeader:`Unidade`,presets:T,locale:`pt-BR`,timeZone:h,source:`ERP fictício`,updatedAt:m(12),now:g,export:{filename:`comparacao-unidades-out-2026`,scope:`Rede · Outubro 2026, até 16/10`},onRowAction:N(),description:`Meta e atingimento consideram só unidades com meta. Evolução: mesmos dias de setembro.`,methodology:{formula:`Diferença = venda líquida − meta até a data. Atingimento = venda ÷ meta (unidades com meta).`,exclusions:`Unidades sem meta ficam fora do atingimento do subtotal; a venda delas entra na venda líquida.`}},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`restricted`,`partial`,`stale`]},locale:{control:`select`,options:[`pt-BR`,`en-US`]},icon:{control:!1},data:{control:`object`},columns:{control:`object`},messages:{control:!1}},decorators:[d,(e,t)=>t.parameters.fullWidth?(0,M.jsx)(e,{}):(0,M.jsx)(`div`,{style:{maxWidth:1080},children:(0,M.jsx)(e,{})})]},F={name:`Padrão`,parameters:{fullWidth:!0},args:{subtitle:`Até 16/10, última data comparável`,data:x,columns:E,presets:w,grouped:!1,description:`Venda e meta até 16/10, a última data comparável. Evolução: mesmos dias de setembro.`,methodology:{formula:`Diferença = venda líquida − meta até 16/10. Atingimento = venda ÷ meta. A linha Rede soma as 8 unidades.`}}},I={name:`Cartões (container estreito)`,parameters:{fullWidth:!0},render:e=>(0,M.jsxs)(`div`,{className:`story-row`,style:{alignItems:`flex-start`},children:[(0,M.jsxs)(`div`,{style:{width:360},children:[(0,M.jsx)(`p`,{className:`story-caption`,children:`360px`}),(0,M.jsx)(r,{...e})]}),(0,M.jsxs)(`div`,{style:{width:600},children:[(0,M.jsx)(`p`,{className:`story-caption`,children:`600px · ranking sem grupos`}),(0,M.jsx)(r,{...e,grouped:!1,title:`Ranking das unidades`})]})]})},L={parameters:{fullWidth:!0},render:e=>(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,gridTemplateColumns:`repeat(auto-fill, minmax(min(100%, 30rem), 1fr))`},children:[(0,M.jsx)(j,{caption:`Carregando`,children:(0,M.jsx)(r,{...e,status:`loading`})}),(0,M.jsx)(j,{caption:`Vazio`,children:(0,M.jsx)(r,{...e,data:{rows:[]},emptyMessage:`Nenhuma unidade com vendas neste recorte.`})}),(0,M.jsx)(j,{caption:`Erro`,children:(0,M.jsx)(r,{...e,status:`error`,onRetry:N()})}),(0,M.jsx)(j,{caption:`Sem permissão`,children:(0,M.jsx)(r,{...e,status:`restricted`,restrictedMessage:`Seu perfil vê só a própria unidade.`})}),(0,M.jsx)(j,{caption:`Parcial`,children:(0,M.jsx)(r,{...e,status:`partial`,partialNote:`Unidade Litoral sem dados em 15 e 16/10.`,data:b,grouped:!1})}),(0,M.jsx)(j,{caption:`Desatualizado`,children:(0,M.jsx)(r,{...e,updatedAt:m(1800),staleAfterMs:216e5,data:b,grouped:!1,onRetry:N()})})]})},R={name:`Conciliação por linha 0.2.0-rc.2`,tags:[`!dev`,`!autodocs`],parameters:{fullWidth:!0},args:{data:_,columns:v,columnGroups:O,presets:[{id:`venda`,label:`Maiores vendas`,columnId:`venda`,direction:`desc`,criterion:`venda líquida até 16/10, da maior para a menor`},{id:`desvio`,label:`Maiores desvios`,columnId:`diferenca`,direction:`asc`,criterion:`diferença para a meta até 15/10, da mais negativa para a mais positiva`}],subtitle:`Outubro 2026 · 8 unidades`,source:void 0,updatedAt:void 0,now:void 0,export:{filename:`conciliacao-unidades-out-2026`,scope:`Rede · Outubro 2026, venda até 16/10, comparação até 15/10`},description:void 0,methodology:{formula:`Realizado e meta até 15/10, só nas unidades com meta. Diferença = realizado − meta. Atingimento = realizado ÷ meta. Venda líquida: todas as unidades, até 16/10.`,exclusions:`Unidades sem meta ficam fora da comparação (realizado, diferença e atingimento com “—”).`}},render:e=>(0,M.jsx)(n,{period:`Outubro 2026, até 16/10`,source:`ERP fictício`,updatedAt:m(12),now:g,anatomy:`lean`,children:(0,M.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,M.jsx)(`div`,{style:{maxWidth:1080},children:(0,M.jsx)(r,{...e})}),(0,M.jsxs)(`div`,{style:{width:360},children:[(0,M.jsx)(`p`,{className:`story-caption`,children:`360px · blocos viram seções do cartão`}),(0,M.jsx)(r,{...e,title:`Conciliação em cartões`,export:void 0})]})]})})},z={name:`Total divergente`,args:{data:y}},B={name:`Ranking e textos longos`,args:{data:b,grouped:!1,defaultSort:{columnId:`diferenca`,direction:`asc`}}},V={name:`Temas e identidade`,parameters:{fullWidth:!0},render:e=>(0,M.jsx)(`div`,{style:{display:`grid`,gap:`1rem`},children:[[`Claro · padrão`,`light`,void 0],[`Escuro · índigo (tokens)`,`dark`,l.dark]].map(([t,n,i])=>(0,M.jsxs)(a,{mode:n,tokens:i,canvas:!0,style:{padding:16,borderRadius:16},children:[(0,M.jsx)(`p`,{className:`story-caption`,children:t}),(0,M.jsx)(r,{...e})]},t))})},H=[`Padrao`,`Cartoes`,`Estados`,`ConciliacaoPorLinha`,`TotalDivergente`,`RankingTextosLongos`,`TemasEIdentidade`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  parameters: {
    fullWidth: true
  },
  args: {
    subtitle: "Até 16/10, última data comparável",
    data: sx.smoothComparisonData,
    columns: sx.smoothColumns,
    presets: sx.smoothPresets,
    grouped: false,
    description: "Venda e meta até 16/10, a última data comparável. Evolução: mesmos dias de setembro.",
    methodology: {
      formula: "Diferença = venda líquida − meta até 16/10. Atingimento = venda ÷ meta. A linha Rede soma as 8 unidades."
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`Agrupada com subtotais, total conferido, linha em destaque e exportação.
Configuração padrão (0.4.0): o mesmo conjunto conciliado do Início (fixtures-smooth), na largura
toda; percentuais com 1 casa fixa (98,0% ao lado de 103,6%).`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Cartões (container estreito)",
  parameters: {
    fullWidth: true
  },
  render: args => <div className="story-row" style={{
    alignItems: "flex-start"
  }}>
      <div style={{
      width: 360
    }}>
        <p className="story-caption">360px</p>
        <ComparisonTable {...args} />
      </div>
      <div style={{
      width: 600
    }}>
        <p className="story-caption">600px · ranking sem grupos</p>
        <ComparisonTable {...args} grouped={false} title="Ranking das unidades" />
      </div>
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Abaixo de 640 px de container, cada linha vira um cartão (sem rolagem horizontal da página).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    fullWidth: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 30rem), 1fr))"
  }}>
      <Cell caption="Carregando">
        <ComparisonTable {...args} status="loading" />
      </Cell>
      <Cell caption="Vazio">
        <ComparisonTable {...args} data={{
        rows: []
      }} emptyMessage="Nenhuma unidade com vendas neste recorte." />
      </Cell>
      <Cell caption="Erro">
        <ComparisonTable {...args} status="error" onRetry={fn()} />
      </Cell>
      <Cell caption="Sem permissão">
        <ComparisonTable {...args} status="restricted" restrictedMessage="Seu perfil vê só a própria unidade." />
      </Cell>
      <Cell caption="Parcial">
        <ComparisonTable {...args} status="partial" partialNote="Unidade Litoral sem dados em 15 e 16/10." data={px.comparisonLongText} grouped={false} />
      </Cell>
      <Cell caption="Desatualizado">
        <ComparisonTable {...args} updatedAt={fx.minutesBefore(30 * 60)} staleAfterMs={6 * 3600_000} data={px.comparisonLongText} grouped={false} onRetry={fn()} />
      </Cell>
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Estados: carregando, vazio, erro, sem permissão, parcial e desatualizado.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Conciliação por linha 0.2.0-rc.2",
  // 0.4.0: variante 0.2, só no Legado (a página do widget já abre no smooth).
  tags: ["!dev", "!autodocs"],
  parameters: {
    fullWidth: true
  },
  args: {
    data: px.reconcileData,
    columns: px.reconcileColumns,
    columnGroups: px.reconcileColumnGroups,
    presets: [{
      id: "venda",
      label: "Maiores vendas",
      columnId: "venda",
      direction: "desc",
      criterion: "venda líquida até 16/10, da maior para a menor"
    }, {
      id: "desvio",
      label: "Maiores desvios",
      columnId: "diferenca",
      direction: "asc",
      criterion: "diferença para a meta até 15/10, da mais negativa para a mais positiva"
    }],
    subtitle: "Outubro 2026 · 8 unidades",
    source: undefined,
    updatedAt: undefined,
    now: undefined,
    export: {
      filename: "conciliacao-unidades-out-2026",
      scope: "Rede · Outubro 2026, venda até 16/10, comparação até 15/10"
    },
    description: undefined,
    methodology: {
      formula: "Realizado e meta até 15/10, só nas unidades com meta. Diferença = realizado − meta. Atingimento = realizado ÷ meta. Venda líquida: todas as unidades, até 16/10.",
      exclusions: "Unidades sem meta ficam fora da comparação (realizado, diferença e atingimento com “—”)."
    }
  },
  render: args => <PageContextProvider period="Outubro 2026, até 16/10" source="ERP fictício" updatedAt={fx.minutesBefore(12)} now={fx.NOW} anatomy="lean">
      <div style={{
      display: "grid",
      gap: "1.5rem"
    }}>
        <div style={{
        maxWidth: 1080
      }}>
          <ComparisonTable {...args} />
        </div>
        <div style={{
        width: 360
      }}>
          <p className="story-caption">360px · blocos viram seções do cartão</p>
          <ComparisonTable {...args} title="Conciliação em cartões" export={undefined} />
        </div>
      </div>
    </PageContextProvider>
}`,...R.parameters?.docs?.source},description:{story:`Conciliação por linha (0.2.0-rc.2): a venda do mês fica num bloco com a própria data e a
comparação com a meta traz o realizado até a última data comparável ao lado da meta. Diferença e
atingimento são conferidos em cada linha, subtotal e total (\`derived\`); o rodapé diz que as contas
fecham. Anatomia enxuta: etiquetas ao lado do nome, só nas exceções ("sem meta" fica na célula).
Fonte e atualização vêm do \`PageContextProvider\` e não se repetem; o CSV leva a fonte mesmo assim.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Total divergente",
  args: {
    data: px.comparisonDataMismatch
  }
}`,...z.parameters?.docs?.source},description:{story:`O total informado pela fonte não fecha com as linhas: o widget avisa em vez de esconder.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Ranking e textos longos",
  args: {
    data: px.comparisonLongText,
    grouped: false,
    defaultSort: {
      columnId: "diferenca",
      direction: "asc"
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`Ranking sem grupos, ordenado por desvio, com nomes longos.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Temas e identidade",
  parameters: {
    fullWidth: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      {([["Claro · padrão", "light", undefined], ["Escuro · índigo (tokens)", "dark", indigoIdentity.dark]] as const).map(([caption, mode, tokens]) => <RbTheme key={caption} mode={mode} tokens={tokens} canvas style={{
      padding: 16,
      borderRadius: 16
    }}>
          <p className="story-caption">{caption}</p>
          <ComparisonTable {...args} />
        </RbTheme>)}
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Modos e identidade por tokens.`,...V.parameters?.docs?.description}}}})))()}export{F as a,z as c,L as i,U as l,A as n,B as o,R as r,V as s,I as t,P as u};