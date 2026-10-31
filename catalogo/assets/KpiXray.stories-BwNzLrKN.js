import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Ft as r,Gt as i,Jn as a,Ut as o,Vt as s,ct as ee,qn as c,t as l,xr as u,yr as d,zt as f}from"./src-BbyRaoY1.js";import{t as p}from"./jsx-runtime-MKhVqBIO.js";import{n as m,t as h}from"./badge-dollar-sign-BWoF2WhU.js";import{a as g,o as _}from"./fixtures-heatmap-Av-RnC91.js";import{n as v,t as te}from"./smooth-decorator-Ch0T28w-.js";import{a as ne,c as y,d as b,f as re,g as x,h as ie,i as S,l as C,m as w,n as T,o as E,p as D,r as ae,s as O,t as oe,u as k}from"./fixtures-kpi-xray-RsrNo70p.js";var A=t({Escuro:()=>G,Estados:()=>W,Estreito360:()=>J,Glass:()=>K,GlassEscuro:()=>q,Padrao:()=>V,PeloCodigo:()=>X,Tabela:()=>H,TresWidgets:()=>Y,TrocarEstado:()=>Z,__namedExportsOrder:()=>Q,default:()=>B});function j({request:e,label:t=`Venda líquida`}){return(0,L.jsx)(f,{label:t,period:e.context.period,icon:(0,L.jsx)(h,{}),data:ie,format:S.format,locale:`pt-BR`,comparison:{label:`set/2026`,mode:`percent`,polarity:`higher-is-better`},source:S.source.origin,updatedAt:S.source.updatedAt,now:k,timeZone:w,xray:e})}function M({caption:e,request:t}){let n=t.context.total,r=(t.context.status??`ready`)===`loading`?`carregando`:n===null?`Sem leitura`:d(n,U,`pt-BR`,{notation:`standard`}).text;return(0,L.jsxs)(`li`,{style:{display:`flex`,alignItems:`baseline`,justifyContent:`space-between`,gap:16,padding:`10px 0`,borderTop:`1px solid var(--rb-border)`},children:[(0,L.jsx)(`span`,{style:{color:`var(--rb-fg-muted)`,fontSize:14},children:e}),(0,L.jsx)(`span`,{style:{fontVariantNumeric:`tabular-nums`,fontWeight:600,color:`var(--rb-fg)`},children:(0,L.jsx)(s,{request:t,valueText:r,children:r})})]})}function N({caption:e,children:t}){return(0,L.jsxs)(`div`,{style:{display:`grid`,gap:8,minWidth:0},children:[(0,L.jsx)(`p`,{style:{margin:0,fontSize:13,color:`var(--rb-fg-muted)`},children:e}),t]})}function P(){let e=i(),t=`xray-hook-${(0,I.useId)().replace(/[^a-zA-Z0-9_-]/g,``)}`;return(0,L.jsxs)(`button`,{type:`button`,id:t,className:`rb-heat-story__replay rb-focus-ring`,onClick:()=>e.open(x,{returnFocusId:t}),children:[(0,L.jsx)(c,{"aria-hidden":`true`,style:{width:16,height:16,marginRight:6,verticalAlign:`-3px`}}),`Abrir o raio-X do fechamento`]})}function F(){let{current:e,currentReturnFocusId:t,open:n}=i(),r=e?.context.status===`loading`;return(0,I.useEffect)(()=>{if(!r)return;let e=window.setTimeout(()=>n(b,{returnFocusId:t??void 0}),600);return()=>window.clearTimeout(e)},[r,n,t]),null}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{m(),a(),I=n(),l(),g(),T(),te(),L=p(),{fn:R}=__STORYBOOK_MODULE_TEST__,z=(e,t)=>(0,L.jsx)(u,{client:_,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,L.jsx)(e,{})}),B={title:`Widgets/Raio-X do indicador`,id:`widgets-kpi-xray`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"Raio-X do indicador: a partir de qualquer número, um painel com fórmula, fonte (origem e atualização), filtros aplicados, exclusões (lojas, itens e por quê) e a conferência do total: a soma das partes bate, ou a diferença aparece explicada. Ausência e exclusões aparecem listadas com o efeito no total; ausência nunca vira zero. Mecanismo genérico: `XrayProvider` + `XrayTrigger` (ou `useXray`), com a prop opcional `xray` no TrendIndicator, na coluna da ComparisonTable e no BulletBar. Cliente fictício: Pedravela Calçados."}}},args:{locale:`pt-BR`,timeZone:w,now:k,onOpen:R(),onClose:R()},argTypes:{children:{control:!1},messages:{control:!1},portalContainer:{control:!1},now:{control:!1}},decorators:[v,z,(e,t)=>(0,L.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:t.parameters.width===`wide`?980:420,maxWidth:`100%`},children:(0,L.jsx)(e,{})})],render:e=>(0,L.jsx)(o,{...e,children:(0,L.jsx)(j,{request:b})})},V={name:`Padrão`},H={name:`Tabela/Texto`,args:{defaultPartsOpen:!0},render:e=>(0,L.jsx)(o,{...e,children:(0,L.jsx)(j,{request:O})})},U=S.format,W={render:e=>(0,L.jsx)(o,{...e,children:(0,L.jsxs)(`section`,{"aria-labelledby":`xray-states-title`,style:{padding:`4px 0`},children:[(0,L.jsx)(`h3`,{id:`xray-states-title`,style:{margin:`0 0 6px`,fontSize:15,fontWeight:600,color:`var(--rb-fg)`},children:`Venda líquida · estados do raio-X`}),(0,L.jsxs)(`ul`,{style:{listStyle:`none`,margin:0,padding:0},children:[(0,L.jsx)(M,{caption:`Bate`,request:b}),(0,L.jsx)(M,{caption:`Diferença explicada`,request:O}),(0,L.jsx)(M,{caption:`Diferença sem explicação`,request:x}),(0,L.jsx)(M,{caption:`Falta dado (parcial)`,request:C}),(0,L.jsx)(M,{caption:`Carregando`,request:y}),(0,L.jsx)(M,{caption:`Vazio (novembro)`,request:ne}),(0,L.jsx)(M,{caption:`Erro da fonte`,request:E})]})]})})},G={globals:{rbMode:`dark`}},K={globals:{rbFamily:`glass`}},q={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},J={name:`Estreito 360`,parameters:{width:`narrow`},render:e=>(0,L.jsx)(o,{...e,children:(0,L.jsx)(j,{request:C})})},Y={name:`Três widgets`,parameters:{width:`wide`},render:e=>(0,L.jsx)(o,{...e,children:(0,L.jsxs)(`div`,{style:{display:`grid`,gap:20,maxWidth:560},children:[(0,L.jsx)(N,{caption:`TrendIndicator · valor do mês`,children:(0,L.jsx)(`div`,{style:{maxWidth:400},children:(0,L.jsx)(j,{request:b})})}),(0,L.jsx)(N,{caption:`ComparisonTable · célula da venda líquida por loja`,children:(0,L.jsx)(r,{title:`Venda líquida por loja`,rowHeader:`Loja`,columns:re,data:D(),searchable:!1,cardBreakpoint:420,source:S.source.origin,subtitle:`Outubro até 29/10 · 4 lojas`})}),(0,L.jsx)(N,{caption:`BulletBar · realizado × meta de uma loja`,children:(0,L.jsx)(`ul`,{style:{display:`grid`,gap:12,listStyle:`none`,margin:0,padding:0,"--rb-bullet-text-w":`10.5rem`},"aria-label":`Meta × realizado: Outlet e Rodoviária`,children:[[`outlet`,`Outlet`,301200],[`rodoviaria`,`Rodoviária`,96300]].map(([e,t,n])=>(0,L.jsxs)(`li`,{style:{display:`grid`,gridTemplateColumns:`6.5rem minmax(0, 1fr)`,alignItems:`center`,gap:12},children:[(0,L.jsx)(`span`,{style:{fontSize:14,color:`var(--rb-fg)`},"aria-hidden":`true`,children:t}),(0,L.jsx)(ee,{label:t,actual:n,target:oe[e]??null,xray:ae(e)})]},e))})})]})})},X={name:`Pelo código (useXray)`,render:e=>(0,L.jsx)(o,{...e,children:(0,L.jsx)(P,{})})},Z={name:`Trocar estado (carregando → pronto)`,render:e=>(0,L.jsxs)(o,{...e,children:[(0,L.jsx)(j,{request:y}),(0,L.jsx)(F,{})]})},Q=[`Padrao`,`Tabela`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TresWidgets`,`PeloCodigo`,`TrocarEstado`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...V.parameters?.docs?.source},description:{story:`Padrão: o valor do indicador vira o gatilho; o painel mostra fórmula, fonte, filtros, exclusões e a conferência (bate).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Tabela/Texto",
  args: {
    defaultPartsOpen: true
  },
  render: args => <XrayProvider {...args}>
      <VendaCard request={xrayExplainedRequest} />
    </XrayProvider>
}`,...H.parameters?.docs?.source},description:{story:`As partes em tabela (lojas com valor) e a conferência em linhas: aqui a Loja Teste ainda vem nas partes e a exclusão explica a diferença.`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <XrayProvider {...args}>
      <section aria-labelledby="xray-states-title" style={{
      padding: "4px 0"
    }}>
        <h3 id="xray-states-title" style={{
        margin: "0 0 6px",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--rb-fg)"
      }}>
          Venda líquida · estados do raio-X
        </h3>
        <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0
      }}>
          <StateRow caption="Bate" request={xrayRequest} />
          <StateRow caption="Diferença explicada" request={xrayExplainedRequest} />
          <StateRow caption="Diferença sem explicação" request={xrayUnexplainedRequest} />
          <StateRow caption="Falta dado (parcial)" request={xrayMissingRequest} />
          <StateRow caption="Carregando" request={xrayLoadingRequest} />
          <StateRow caption="Vazio (novembro)" request={xrayEmptyRequest} />
          <StateRow caption="Erro da fonte" request={xrayErrorRequest} />
        </ul>
      </section>
    </XrayProvider>
}`,...W.parameters?.docs?.source},description:{story:"Qualquer número com `XrayTrigger`: bate, diferença explicada, diferença sem explicação, falta dado (parcial), carregando, vazio e erro.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...G.parameters?.docs?.source},description:{story:`Modo escuro.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...K.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...q.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  },
  render: args => <XrayProvider {...args}>
      <VendaCard request={xrayMissingRequest} />
    </XrayProvider>
}`,...J.parameters?.docs?.source},description:{story:`Celular a 360 px: o painel vira folha inferior, nada cortado e sem rolagem lateral.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Três widgets",
  parameters: {
    width: "wide"
  },
  render: args => <XrayProvider {...args}>
      <div style={{
      display: "grid",
      gap: 20,
      maxWidth: 560
    }}>
        <Labeled caption="TrendIndicator · valor do mês">
          <div style={{
          maxWidth: 400
        }}>
            <VendaCard request={xrayRequest} />
          </div>
        </Labeled>
        <Labeled caption="ComparisonTable · célula da venda líquida por loja">
          <ComparisonTable title="Venda líquida por loja" rowHeader="Loja" columns={xrayTableColumns} data={xrayTableData()} searchable={false} cardBreakpoint={420} source={vendaLiquida.source.origin} subtitle="Outubro até 29/10 · 4 lojas" />
        </Labeled>
        <Labeled caption="BulletBar · realizado × meta de uma loja">
          <ul style={{
          display: "grid",
          gap: 12,
          listStyle: "none",
          margin: 0,
          padding: 0,
          ["--rb-bullet-text-w" as string]: "10.5rem"
        }} aria-label="Meta × realizado: Outlet e Rodoviária">
            {([["outlet", "Outlet", 301_200], ["rodoviaria", "Rodoviária", 96_300]] as const).map(([id, name, actual]) => <li key={id} style={{
            display: "grid",
            gridTemplateColumns: "6.5rem minmax(0, 1fr)",
            alignItems: "center",
            gap: 12
          }}>
                <span style={{
              fontSize: 14,
              color: "var(--rb-fg)"
            }} aria-hidden="true">
                  {name}
                </span>
                <BulletBar label={name} actual={actual} target={XRAY_TARGETS[id] ?? null} xray={storeRequest(id)} />
              </li>)}
          </ul>
        </Labeled>
      </div>
    </XrayProvider>
}`,...Y.parameters?.docs?.source},description:{story:`Os três widgets abrindo o mesmo mecanismo: o valor do TrendIndicator, a célula da ComparisonTable e o texto do BulletBar.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Pelo código (useXray)",
  render: args => <XrayProvider {...args}>
      <OpenByHook />
    </XrayProvider>
}`,...X.parameters?.docs?.source},description:{story:"Pelo código: `useXray().open(request, { returnFocusId })` abre o mesmo painel de um botão, atalho ou menu.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Trocar estado (carregando → pronto)",
  render: args => <XrayProvider {...args}>
      <VendaCard request={xrayLoadingRequest} />
      <ResolveWhenOpen />
    </XrayProvider>
}`,...Z.parameters?.docs?.source},description:{story:`Movimento: a cascata curta das seções toca só na abertura do painel. Aqui o painel abre carregando e,
600 ms depois, os dados chegam: as seções novas aparecem no lugar, sem refazer a cascata. Com
movimento reduzido, nada se desloca.`,...Z.parameters?.docs?.description}}}})))()}export{V as n,$ as r,A as t};