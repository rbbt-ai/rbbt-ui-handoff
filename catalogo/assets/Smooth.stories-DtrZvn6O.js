import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Bt as r,On as i,Qt as a,Xt as o,Yt as s,dn as c,ft as l,ht as u,kt as d,mt as f,t as p,un as m,ut as h,wn as g,xt as _}from"./src-lgDrkLBh.js";import{t as v}from"./jsx-runtime-MKhVqBIO.js";import{n as y,t as b}from"./package-x-DtfTy7Yi.js";import{n as x,t as S}from"./receipt-text-DJn0GK0D.js";import{n as C,t as w}from"./users-round-DDC7otS4.js";import{n as T,t as E}from"./wallet-CkTOcWQF.js";var D=t({Carregando:()=>q,Estados:()=>Y,Fileira:()=>G,FileiraEscura:()=>K,__namedExportsOrder:()=>X,default:()=>R});function O({prefix:e}){let[t,n]=(0,I.useState)(`mes`);return(0,L.jsxs)(`header`,{className:`story-smooth__header`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h2`,{className:`story-smooth__title`,children:`Visão geral de vendas`}),(0,L.jsx)(`p`,{className:`story-smooth__subtitle`,children:`Outubro de 2026 · dados fictícios · atualizado às 11:34`})]}),(0,L.jsxs)(`div`,{className:`story-smooth__controls`,children:[(0,L.jsx)(d,{label:`Período`,hideLabel:!0,value:t,onChange:n,options:[{value:`semana`,label:`Esta semana`},{value:`mes`,label:`Este mês`},{value:`trimestre`,label:`Este trimestre`}]}),(0,L.jsxs)(g,{variant:`accent`,"aria-describedby":`${e}-export-hint`,children:[(0,L.jsx)(m,{"aria-hidden":`true`}),`Exportar`]}),(0,L.jsx)(`span`,{id:`${e}-export-hint`,className:`rb-sr-only`,children:`Exemplo sem ação: dados fictícios.`})]})]})}function k({status:e=`ready`}){return(0,L.jsxs)(`div`,{className:`story-smooth__kpis`,children:[(0,L.jsx)(h,{featured:!0,label:`Receita do mês`,icon:(0,L.jsx)(E,{}),status:e,data:{value:1284600,previousValue:1142900},format:V,comparison:{...U,polarity:`higher-is-better`},description:`Vendas faturadas menos devoluções, no mês corrente. Dados fictícios.`}),(0,L.jsx)(h,{label:`Novos clientes`,icon:(0,L.jsx)(w,{}),status:e,data:{value:318,previousValue:296},comparison:{...U,polarity:`higher-is-better`},description:`Clientes com a primeira compra no mês. Dados fictícios.`}),(0,L.jsx)(h,{label:`Devoluções`,icon:(0,L.jsx)(b,{}),iconTone:`accent`,status:e,data:{value:72,previousValue:68},comparison:{...U,polarity:`lower-is-better`},description:`Pedidos devolvidos no mês. Menor é melhor. Dados fictícios.`}),(0,L.jsx)(h,{label:`Ticket médio`,icon:(0,L.jsx)(S,{}),iconTone:`accent`,status:e,data:{value:186.4,previousValue:179.9},format:V,comparison:{...U,polarity:`higher-is-better`},description:`Receita dividida pelo número de pedidos. Dados fictícios.`})]})}function A({status:e=`ready`}){let[t,n]=(0,I.useState)(`8m`),r=s({status:e,hasData:!0,locale:`pt-BR`});return(0,L.jsx)(a,{title:`Pedidos por mês`,subtitle:`Março a outubro de 2026`,frame:r,locale:`pt-BR`,loadingSkeleton:(0,L.jsx)(u,{height:`13.5rem`}),onRetry:()=>void 0,errorMessage:`A fonte fictícia não respondeu em 10 s. Os dados anteriores não aparecem para evitar leitura errada.`,actions:(0,L.jsx)(d,{label:`Intervalo`,hideLabel:!0,value:t,onChange:n,options:[{value:`8m`,label:`Últimos 8 meses`},{value:`12m`,label:`Últimos 12 meses`}]}),className:`story-smooth__wide`,children:(0,L.jsx)(f,{label:`Pedidos por mês, março a outubro de 2026`,data:W,series:[{id:`pedidos`,label:`Pedidos`},{id:`receita`,label:`Receita`,format:H}],highlight:`max`,height:`13.5rem`})})}function j({status:e=`ready`}){let t=s({status:e,hasData:!0,locale:`pt-BR`});return(0,L.jsx)(a,{title:`Meta do trimestre`,subtitle:`Out–dez de 2026`,frame:t,locale:`pt-BR`,children:(0,L.jsxs)(`div`,{className:`story-smooth__goal`,children:[(0,L.jsx)(l,{value:.708,label:`70,8% da meta do trimestre`,caption:`da meta`,size:`16.5rem`,children:(0,L.jsx)(r,{text:`70,8%`})}),(0,L.jsxs)(`div`,{className:`story-smooth__tiles`,children:[(0,L.jsx)(_,{label:`Pedidos`,value:`2.343`,delta:{text:`+4,5%`,direction:`up`,sentiment:`favorable`,srText:`alta de 4,5% sobre o trimestre anterior, favorável`}}),(0,L.jsx)(_,{label:`Receita`,value:`R$ 3,09 mi`,delta:{text:`+4,3%`,direction:`up`,sentiment:`favorable`,srText:`alta de 4,3% sobre o trimestre anterior, favorável`}})]})]})})}function M({prefix:e}){return(0,L.jsx)(o,{period:`Outubro de 2026`,source:`Dados fictícios`,updatedAt:B,now:z,anatomy:`lean`,children:(0,L.jsxs)(`div`,{className:`story-smooth`,children:[(0,L.jsx)(O,{prefix:e}),(0,L.jsx)(k,{}),(0,L.jsxs)(`div`,{className:`story-smooth__bottom`,children:[(0,L.jsx)(A,{}),(0,L.jsx)(j,{})]})]})})}function N({mode:e,prefix:t}){return(0,L.jsx)(i,{mode:e,canvas:!0,className:`story-smooth__mode`,children:(0,L.jsx)(M,{prefix:t})})}function P({children:e}){return(0,L.jsx)(`p`,{className:`story-caption`,children:e})}function F({title:e,subtitle:t,children:n}){let r=s({status:`ready`,hasData:!0,locale:`pt-BR`});return(0,L.jsx)(a,{title:e,subtitle:t,frame:r,locale:`pt-BR`,children:n})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{c(),y(),x(),C(),T(),I=n(),p(),L=v(),R={title:`Smooth/Etapa 1 · base e indicadores`,id:`smooth-etapa-1`,parameters:{layout:`fullscreen`,docs:{description:{component:`Linguagem smooth, Etapa 1 (0.4.0): base, indicadores, colunas e medidor em segmentos, no azul
Rbbt. Uma fileira no estilo da referência, com dados genéricos e fictícios.`}}}},z=`2026-10-26T11:40:00-03:00`,B=`2026-10-26T11:34:00-03:00`,V={style:`currency`,currency:`BRL`},H={style:`currency`,currency:`BRL`,notation:`compact`},U={label:`Mês anterior`,mode:`percent`},W=[{id:`mar`,label:`Mar`,title:`Março de 2026`,values:{pedidos:286,receita:132400}},{id:`abr`,label:`Abr`,title:`Abril de 2026`,values:{pedidos:312,receita:141900}},{id:`mai`,label:`Mai`,title:`Maio de 2026`,values:{pedidos:268,receita:120300}},{id:`jun`,label:`Jun`,title:`Junho de 2026`,values:{pedidos:241,receita:112800}},{id:`jul`,label:`Jul`,title:`Julho de 2026`,values:{pedidos:330,receita:151600}},{id:`ago`,label:`Ago`,title:`Agosto de 2026`,values:{pedidos:412,receita:178600}},{id:`set`,label:`Set`,title:`Setembro de 2026`,values:{pedidos:298,receita:139200}},{id:`out`,label:`Out`,title:`Outubro de 2026`,values:{pedidos:356,receita:164100}}],G={render:()=>(0,L.jsx)(M,{prefix:`f`})},K={name:`Fileira escura`,render:()=>(0,L.jsx)(N,{mode:`dark`,prefix:`e`})},q={render:()=>(0,L.jsx)(o,{period:`Outubro de 2026`,source:`Dados fictícios`,updatedAt:B,now:z,anatomy:`lean`,children:(0,L.jsx)(`div`,{className:`story-smooth`,children:(0,L.jsx)(k,{status:`loading`})})})},J=W.map(e=>e.id===`jun`?{...e,values:{pedidos:0,receita:0}}:e.id===`set`?{...e,values:{pedidos:null,receita:null}}:e),Y={render:()=>{let e={label:`Receita do mês`,icon:(0,L.jsx)(E,{}),format:V,comparison:{...U,polarity:`higher-is-better`}},t={value:1284600,previousValue:1142900};return(0,L.jsx)(o,{period:`Outubro de 2026`,source:`Dados fictícios`,updatedAt:B,now:z,staleAfterMs:72e5,anatomy:`lean`,children:(0,L.jsxs)(`div`,{className:`story-smooth`,children:[(0,L.jsxs)(`div`,{className:`story-smooth__kpis`,children:[(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Vazio`}),(0,L.jsx)(h,{...e,status:`empty`,emptyMessage:`Nenhuma venda faturada em outubro até agora.`})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Erro`}),(0,L.jsx)(h,{...e,status:`error`,errorMessage:`A fonte fictícia não respondeu em 10 s.`,onRetry:()=>void 0})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Desatualizado`}),(0,L.jsx)(h,{...e,data:t,updatedAt:`2026-10-26T07:10:00-03:00`,onRetry:()=>void 0})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Sem permissão`}),(0,L.jsx)(h,{...e,status:`restricted`})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Parcial`}),(0,L.jsx)(h,{...e,featured:!0,data:t,status:`partial`,partialNote:`Uma unidade sem dados em 24–25/10.`,marker:{label:`Parcial`,value:`7/8 unidades`,tone:`warning`}})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Valor ausente`}),(0,L.jsx)(h,{...e,data:{value:null,previousValue:1142900}})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Sem valor de comparação`}),(0,L.jsx)(h,{...e,data:{value:1284600,previousValue:null}})]}),(0,L.jsxs)(`div`,{className:`story-smooth__cell`,children:[(0,L.jsx)(P,{children:`Com mini-gráfico`}),(0,L.jsx)(h,{...e,iconTone:`accent`,data:{...t,series:[968e3,1012500,990300,1142900,1190200,1284600]}})]})]}),(0,L.jsxs)(`div`,{className:`story-smooth__bottom`,children:[(0,L.jsx)(F,{title:`Pedidos por mês`,subtitle:`Junho zerado; setembro sem leitura`,children:(0,L.jsx)(f,{label:`Pedidos por mês, com um mês zerado e um sem leitura`,data:J,series:[{id:`pedidos`,label:`Pedidos`},{id:`receita`,label:`Receita`,format:H}],highlight:`max`,height:`11rem`})}),(0,L.jsx)(F,{title:`Medidor`,subtitle:`Zerado e acima da meta`,children:(0,L.jsxs)(`div`,{className:`story-smooth__tiles`,children:[(0,L.jsx)(l,{value:0,label:`0% da meta`,caption:`da meta`,size:`12rem`,children:(0,L.jsx)(r,{text:`0%`})}),(0,L.jsx)(l,{value:1.18,label:`118% da meta, acima`,caption:`da meta`,size:`12rem`,children:(0,L.jsx)(r,{text:`118%`})})]})})]}),(0,L.jsxs)(`div`,{className:`story-smooth__bottom`,children:[(0,L.jsx)(A,{status:`loading`}),(0,L.jsx)(A,{status:`error`})]})]})})}},X=[`Fileira`,`FileiraEscura`,`Carregando`,`Estados`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Row prefix="f" />
}`,...G.parameters?.docs?.source},description:{story:`A fileira no estilo da referência, no modo da barra de ferramentas (claro por padrão).`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Fileira escura",
  render: () => <Mode mode="dark" prefix="e" />
}`,...K.parameters?.docs?.source},description:{story:`A mesma fileira no escuro: mesmos componentes, só tokens.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <PageContextProvider period="Outubro de 2026" source="Dados fictícios" updatedAt={UPDATED} now={NOW} anatomy="lean">
      <div className="story-smooth">
        <Indicators status="loading" />
      </div>
    </PageContextProvider>
}`,...q.parameters?.docs?.source},description:{story:`Carregando: esqueletos com a geometria do estado pronto.`,...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const base = {
      label: "Receita do mês",
      icon: <Wallet />,
      format: brl,
      comparison: {
        ...comparison,
        polarity: "higher-is-better" as const
      }
    };
    const data = {
      value: 1_284_600,
      previousValue: 1_142_900
    };
    return <PageContextProvider period="Outubro de 2026" source="Dados fictícios" updatedAt={UPDATED} now={NOW} staleAfterMs={2 * 3_600_000} anatomy="lean">
        <div className="story-smooth">
          <div className="story-smooth__kpis">
            <div className="story-smooth__cell">
              <Caption>Vazio</Caption>
              <TrendIndicator {...base} status="empty" emptyMessage="Nenhuma venda faturada em outubro até agora." />
            </div>
            <div className="story-smooth__cell">
              <Caption>Erro</Caption>
              <TrendIndicator {...base} status="error" errorMessage="A fonte fictícia não respondeu em 10 s." onRetry={() => undefined} />
            </div>
            <div className="story-smooth__cell">
              <Caption>Desatualizado</Caption>
              <TrendIndicator {...base} data={data} updatedAt="2026-10-26T07:10:00-03:00" onRetry={() => undefined} />
            </div>
            <div className="story-smooth__cell">
              <Caption>Sem permissão</Caption>
              <TrendIndicator {...base} status="restricted" />
            </div>
            <div className="story-smooth__cell">
              <Caption>Parcial</Caption>
              <TrendIndicator {...base} featured data={data} status="partial" partialNote="Uma unidade sem dados em 24–25/10." marker={{
              label: "Parcial",
              value: "7/8 unidades",
              tone: "warning"
            }} />
            </div>
            <div className="story-smooth__cell">
              <Caption>Valor ausente</Caption>
              <TrendIndicator {...base} data={{
              value: null,
              previousValue: 1_142_900
            }} />
            </div>
            <div className="story-smooth__cell">
              <Caption>Sem valor de comparação</Caption>
              <TrendIndicator {...base} data={{
              value: 1_284_600,
              previousValue: null
            }} />
            </div>
            <div className="story-smooth__cell">
              <Caption>Com mini-gráfico</Caption>
              <TrendIndicator {...base} iconTone="accent" data={{
              ...data,
              series: [968_000, 1_012_500, 990_300, 1_142_900, 1_190_200, 1_284_600]
            }} />
            </div>
          </div>
          <div className="story-smooth__bottom">
            <FramedPanel title="Pedidos por mês" subtitle="Junho zerado; setembro sem leitura">
              <ColumnChart label="Pedidos por mês, com um mês zerado e um sem leitura" data={withGaps} series={[{
              id: "pedidos",
              label: "Pedidos"
            }, {
              id: "receita",
              label: "Receita",
              format: brlCompact
            }]} highlight="max" height="11rem" />
            </FramedPanel>
            <FramedPanel title="Medidor" subtitle="Zerado e acima da meta">
              <div className="story-smooth__tiles">
                <SegmentedGauge value={0} label="0% da meta" caption="da meta" size="12rem">
                  <Figure text="0%" />
                </SegmentedGauge>
                <SegmentedGauge value={1.18} label="118% da meta, acima" caption="da meta" size="12rem">
                  <Figure text="118%" />
                </SegmentedGauge>
              </div>
            </FramedPanel>
          </div>
          <div className="story-smooth__bottom">
            <PerformanceCard status="loading" />
            <PerformanceCard status="error" />
          </div>
        </div>
      </PageContextProvider>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Estados no estilo smooth: carregando, vazio, erro, desatualizado, sem permissão, parcial e
valor ausente; colunas com mês zerado e mês sem leitura; medidor zerado e acima de 100%.`,...Y.parameters?.docs?.description}}}})))()}export{D as n,Z as r,G as t};