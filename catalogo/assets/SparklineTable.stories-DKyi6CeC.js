import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{A as r,B as i,Ft as a,L as o,en as s,mn as c,nn as l,t as u,xr as d}from"./src-BbyRaoY1.js";import{t as f}from"./jsx-runtime-MKhVqBIO.js";import{a as p,o as m}from"./fixtures-heatmap-Av-RnC91.js";import{n as h,t as g}from"./smooth-decorator-Ch0T28w-.js";import{a as _,i as v,n as y,r as b,t as x}from"./fixtures-sparkline-DySvZxkk.js";var S=t({Escuro:()=>F,Estados:()=>P,Estreito360:()=>R,Glass:()=>I,GlassEscuro:()=>L,Padrao:()=>j,Texto:()=>N,TopProdutos:()=>M,TrocaDeRecorte:()=>z,__namedExportsOrder:()=>B,default:()=>A});function C(e){return(0,D.jsxs)(s,{children:[(0,D.jsx)(a,{source:v.source,...e}),(0,D.jsx)(w,{})]})}function w(){let e=l();return(0,D.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,children:`Tocar a entrada de novo`})}function T(e){let[t,n]=(0,E.useState)(`loja`),r=b(t);return(0,D.jsx)(s,{children:(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,D.jsx)(c,{label:`Canal`,value:t,options:Object.keys(x).map(e=>({value:e,label:x[e].label})),onChange:n}),(0,D.jsx)(a,{source:v.source,...e,columns:r.columns,data:r.data,subtitle:`${v.period} · ${x[t].note}`}),(0,D.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,D.jsx)(w,{}),(0,D.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>n(e=>e===`loja`?`total`:`loja`),children:`Trocar recorte (do antigo ao novo)`})]})]})})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{E=n(),u(),p(),y(),g(),D=f(),O=(e,t)=>(0,D.jsx)(d,{client:m,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,D.jsx)(e,{})}),k=b(`loja`),A={title:`Widgets/Tabela com minigráficos`,id:`widgets-sparkline-table`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:"Minigráfico SVG por linha da ComparisonTable (`sparklineColumnCell`), no padrão do `bulletColumnCell`: último ponto marcado com o valor, linha de referência opcional (média da rede), escala por linha ou comum declarada no cabeçalho e tom pela polaridade. Semana sem leitura abre lacuna, nunca zero. Clique ou Enter na célula abre a série completa em tabela. Adaptadores `sparkSeriesFromRecords` e `topProductsFromRecords`. Cliente fictício: Pedravela Calçados."}}},args:{title:`Preço médio entre lojas`,subtitle:`${v.period} · ${v.scope}`,rowHeader:`Loja`,columns:k.columns,data:k.data,defaultSort:{columnId:`preco`,direction:`desc`},searchable:!1,animateReorder:!0,caveat:`Semana sem registro fica sem leitura (lacuna na linha), nunca zero. A média da rede usa só as lojas com leitura na semana.`,export:{filename:`preco-medio-lojas-pedravela`,scope:`Pedravela · ${v.period}`}},argTypes:{columns:{control:!1},data:{control:!1},messages:{control:!1}},decorators:[h,O,(e,t)=>(0,D.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:980,maxWidth:`100%`},children:(0,D.jsx)(e,{})})],render:e=>(0,D.jsx)(C,{...e})},j={name:`Padrão`},M={name:`Top produtos`,render:e=>{let t=_(8);return(0,D.jsx)(C,{...e,title:`Top produtos por receita`,subtitle:t.subtitle,rowHeader:`Produto`,columns:t.columns,data:t.data,defaultSort:{columnId:`receita`,direction:`desc`},caveat:t.caveat,export:{filename:`top-produtos-pedravela`,scope:`Pedravela · ${v.period}`}})}},N={render:()=>{let e=i[`pt-BR`],t=k.series.get(`praia`);return(0,D.jsxs)(`div`,{className:`rb-spark-story__text`,children:[(0,D.jsx)(`ul`,{children:k.data.rows.map(e=>{let t=k.series.get(e.id);return(0,D.jsxs)(`li`,{children:[(0,D.jsxs)(`strong`,{children:[e.label,`:`]}),` `,t?o(t,{metric:`Preço médio`,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0},polarity:`higher-is-better`}):`sem série`]},e.id)})}),t?(0,D.jsx)(r,{series:t,metric:`Preço médio · Praia`,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0},referenceLabel:`Média da rede`,messages:e}):null]})}},P={render:e=>(0,D.jsxs)(`div`,{className:`rb-heat-story__states`,style:{gridTemplateColumns:`minmax(0, 1fr)`},children:[(0,D.jsx)(a,{source:v.source,...e,title:`Carregando`,status:`loading`}),(0,D.jsx)(a,{source:v.source,...e,title:`Vazio`,status:`empty`,data:{rows:[]}}),(0,D.jsx)(a,{source:v.source,...e,title:`Erro`,status:`error`,onRetry:()=>{}}),(0,D.jsx)(a,{source:v.source,...e,title:`Parcial`,status:`partial`,partialNote:`Bairro Alto não enviou 3 semanas e o Aeroporto não enviou a última: as lacunas aparecem na linha.`,subtitle:`${v.period} · 6 de 8 lojas com todas as semanas`})]})},F={globals:{rbMode:`dark`}},I={globals:{rbFamily:`glass`}},L={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},R={name:`Estreito 360`,parameters:{width:`narrow`}},z={name:`Troca de recorte`,render:e=>(0,D.jsx)(T,{...e})},B=[`Padrao`,`TopProdutos`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TrocaDeRecorte`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...j.parameters?.docs?.source},description:{story:`Padrão: preço médio por loja em 12 semanas, contra a média da rede (linha de referência), com semanas sem leitura.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Top produtos",
  render: args => {
    const top = topTable(8);
    return <Entrance {...args} title="Top produtos por receita" subtitle={top.subtitle} rowHeader="Produto" columns={top.columns} data={top.data} defaultSort={{
      columnId: "receita",
      direction: "desc"
    }} caveat={top.caveat} export={{
      filename: "top-produtos-pedravela",
      scope: \`Pedravela · \${sparkContext.period}\`
    }} />;
  }
}`,...M.parameters?.docs?.source},description:{story:`Top produtos por receita: N = 8, empate pelo nome, posição e mudança (↑2, ↓1, novo), "outros" fechando o total.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const messages = sparkMessages["pt-BR"];
    const praia = price.series.get("praia");
    return <div className="rb-spark-story__text">
        <ul>
          {price.data.rows.map(row => {
          const series = price.series.get(row.id);
          return <li key={row.id}>
                <strong>{row.label}:</strong>{" "}
                {series ? sparkText(series, {
              metric: "Preço médio",
              format: {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0
              },
              polarity: "higher-is-better"
            }) : "sem série"}
              </li>;
        })}
        </ul>
        {praia ? <SeriesTable series={praia} metric="Preço médio · Praia" format={{
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
      }} referenceLabel="Média da rede" messages={messages} /> : null}
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:`A alternativa em texto: uma frase por loja (a mesma do leitor de tela) e a série completa em tabela, como no detalhe.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-heat-story__states" style={{
    gridTemplateColumns: "minmax(0, 1fr)"
  }}>
      <ComparisonTable source={sparkContext.source} {...args} title="Carregando" status="loading" />
      <ComparisonTable source={sparkContext.source} {...args} title="Vazio" status="empty" data={{
      rows: []
    }} />
      <ComparisonTable source={sparkContext.source} {...args} title="Erro" status="error" onRetry={() => {}} />
      <ComparisonTable source={sparkContext.source} {...args} title="Parcial" status="partial" partialNote="Bairro Alto não enviou 3 semanas e o Aeroporto não enviou a última: as lacunas aparecem na linha." subtitle={\`\${sparkContext.period} · 6 de 8 lojas com todas as semanas\`} />
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Carregando, vazio, erro e parcial (loja sem envio fica sem leitura, nunca zero).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...F.parameters?.docs?.source},description:{story:`Modo escuro.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...I.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...L.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  }
}`,...R.parameters?.docs?.source},description:{story:`Celular a 360 px: cartões com o minigráfico legível (mínimo de 88 px) e o valor ao lado; nada é cortado.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...z.parameters?.docs?.source},description:{story:`Troca de recorte: cada linha vai da série antiga à nova e a ordem muda do lugar antigo ao novo, sem cascata.`,...z.parameters?.docs?.description}}}})))()}export{S as n,V as r,j as t};