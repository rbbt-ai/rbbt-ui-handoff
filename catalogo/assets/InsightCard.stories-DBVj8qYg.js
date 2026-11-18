import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{B as r,H as i,In as ee,K as a,Kr as o,Nn as s,R as c,Sn as l,W as te,Wr as ne,cn as u,en as re,t as d,un as f,wn as ie,xn as ae,yn as p}from"./src-BSeQ01dl.js";import{t as oe}from"./jsx-runtime-MKhVqBIO.js";import{n as se,t as ce}from"./lightbulb-GOeIv06B.js";import{n as m,t as le}from"./smooth-decorator-CjOKIOT8.js";import{a as ue,o as de}from"./fixtures-heatmap-Ei1UaJ2i.js";import{a as fe,c as pe,d as h,i as g,l as _,n as v,o as y,r as b,s as x,t as S,u as me}from"./fixtures-insight-CRYFrke7.js";import{d as he,m as C,n as ge,u as w}from"./fixtures-kpi-xray-RsrNo70p.js";import{i as T,n as E,r as D}from"./fixtures-sparkline-B6nY-woA.js";var O=t({Escuro:()=>K,Estados:()=>G,Estreito360:()=>Y,Evidencia:()=>U,Glass:()=>q,GlassEscuro:()=>J,Padrao:()=>H,PermissaoESeguranca:()=>Z,Texto:()=>W,TrocaDeRecorte:()=>X,__namedExportsOrder:()=>Q,default:()=>V});function k(e){return(0,F.jsx)(u,{now:w,timeZone:C,children:(0,F.jsx)(p,{children:(0,F.jsx)(A,{...e})})})}function A({withOrigin:e=!0,...t}){let n=f(),r=ie()??!1,a=(0,P.useId)(),[o,s]=(0,P.useState)(null),l=(e,t)=>{if(e.kind===`xray`)n.open(he,{returnFocusId:i(t)});else if(e.kind===`widget`&&e.target){let t=document.getElementById(e.target);t?.scrollIntoView({behavior:r?`auto`:`smooth`,block:`start`}),t?.focus({preventScroll:!0})}else s(t)};return(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,F.jsx)(c,{...t,onOpenEvidence:l}),(0,F.jsx)(M,{}),e?(0,F.jsx)(`section`,{id:`pv-preco-lojas`,tabIndex:-1,"aria-label":`Widget de origem: preço médio entre lojas`,className:`rb-focus-ring`,children:(0,F.jsx)(re,{title:`Preço médio entre lojas`,subtitle:`${T.period} · ${T.scope}`,rowHeader:`Loja`,columns:R.columns,data:R.data,defaultSort:{columnId:`preco`,direction:`desc`},searchable:!1,source:T.source})}):null,(0,F.jsx)(ee,{isOpen:o!==null,onClose:()=>s(null),titleId:a,title:o?`Evidência · ${o.title}`:`Evidência`,subtitle:o?`${o.period} · ${o.stores} · ${o.source}`:void 0,returnFocusId:o?i(o):void 0,children:o?(0,F.jsx)(j,{insight:o}):null})]})}function j({insight:e}){return(0,F.jsxs)(`table`,{className:`rb-insight-story__figures`,children:[(0,F.jsx)(`caption`,{children:e.headline}),(0,F.jsx)(`thead`,{children:(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{scope:`col`,children:`Número`}),(0,F.jsx)(`th`,{scope:`col`,children:`Valor`})]})}),(0,F.jsx)(`tbody`,{children:(e.figures??[]).map((e,t)=>(0,F.jsxs)(`tr`,{children:[(0,F.jsx)(`th`,{scope:`row`,children:e.label}),(0,F.jsx)(`td`,{children:e.value===null?e.absentLabel??`sem leitura`:ne(e.value,e.format,`pt-BR`).text})]},e.id??t))})]})}function M(){let e=ae();return(0,F.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,style:{alignSelf:`flex-start`},children:`Tocar a entrada de novo`})}function N(e){let[t,n]=(0,P.useState)(`12`),r=t===`12`?[y,g,_]:[x,fe,me];return(0,F.jsx)(u,{now:w,timeZone:C,children:(0,F.jsx)(p,{children:(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,F.jsx)(s,{label:`Período`,value:t,options:[{value:`12`,label:`12 semanas`},{value:`8`,label:`8 semanas`}],onChange:n}),(0,F.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,style:{alignSelf:`flex-start`},onClick:()=>n(e=>e===`12`?`8`:`12`),children:`Trocar recorte (do antigo ao novo)`}),(0,F.jsx)(A,{...e,insights:r,withOrigin:!1})]})})})}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{se(),l(),P=n(),d(),ue(),b(),ge(),E(),le(),F=oe(),{fn:I}=__STORYBOOK_MODULE_TEST__,L=(e,t)=>(0,F.jsx)(o,{client:de,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,F.jsx)(e,{})}),R=D(`loja`),z=R.data.rows.find(e=>e.id===`aeroporto`)?.values.preco??null,B=te({id:`preco-aeroporto`,title:`Preço médio · Aeroporto`,metric:`preço médio do Aeroporto`,current:z,reference:R.networkAvg,referenceLabel:`a média da rede`,currentLabel:`Aeroporto`,referenceShort:`Média da rede`,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0},polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:T.period,source:T.source,evidence:{label:`preço médio entre lojas`,kind:`widget`,target:`pv-preco-lojas`}}),V={title:`Widgets/Card de insight`,id:`widgets-insight-card`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:'Achado em texto gerado por modelos determinísticos (`insightFromComparison`, `insightFromSeries`) a partir de dados estruturados, sem LLM e sem rede: frase principal, apoio, números com os formatadores da biblioteca, força com o motivo, tom declarado e período, lojas e origem no rodapé. O link "Ver evidência" usa `href` (origem externa), `onOpenEvidence` (raio-X, DetailPanel ou rolagem até o widget de origem) ou os dois. Cliente fictício: Pedravela Calçados.'}}},args:{title:`Achados da semana`,insights:h,locale:`pt-BR`,icon:(0,F.jsx)(ce,{}),onPin:I(),onDismiss:I(),onOpen:I()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`partial`]},insights:{control:!1},icon:{control:!1},messages:{control:!1},permissions:{control:!1}},decorators:[m,L,(e,t)=>(0,F.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:980,maxWidth:`100%`},children:(0,F.jsx)(e,{})})],render:e=>(0,F.jsx)(k,{...e})},H={name:`Padrão`,args:{insights:[y,g,_]}},U={name:`Evidência`,args:{title:`Três destinos da evidência`,insights:[_,y,B]}},W={render:()=>(0,F.jsx)(`div`,{className:`rb-spark-story__text`,children:[y,g,_,B].map(e=>(0,F.jsxs)(`section`,{"aria-label":e.title,children:[(0,F.jsx)(`strong`,{children:e.title}),(0,F.jsx)(`ul`,{children:a(e).map((e,t)=>(0,F.jsx)(`li`,{children:e},t))})]},e.id))})},G={render:e=>(0,F.jsxs)(`div`,{className:`rb-insight-story__grid`,children:[(0,F.jsx)(r,{...e,insight:null,title:`Carregando`,status:`loading`,period:S,stores:`8 lojas`,source:v}),(0,F.jsx)(r,{...e,insight:null,title:`Vazio`,status:`empty`,period:S,stores:`8 lojas`,source:v}),(0,F.jsx)(r,{...e,insight:g,status:`partial`,partialNote:`Bairro Alto não enviou a contagem da semana 43.`}),(0,F.jsx)(r,{...e,insight:null,title:`Erro`,status:`error`,onRetry:()=>{},period:S,stores:`8 lojas`,source:v})]})},K={globals:{rbMode:`dark`},args:{insights:[y,g,_]}},q={globals:{rbFamily:`glass`},args:{insights:[y,g,_]}},J={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`},args:{insights:[y,g,_]}},Y={name:`Estreito 360`,parameters:{width:`narrow`},args:{insights:[y,g,_]}},X={name:`Troca de recorte`,render:e=>(0,F.jsx)(N,{...e})},Z={name:`Permissão e segurança`,args:{title:`Permissão e texto literal`,insights:[y,pe],permissions:{pin:{allowed:!1,reason:`Só a gerência regional fixa achados.`},dismiss:{allowed:!1,reason:`Achado de auditoria não pode ser dispensado.`}}}},Q=[`Padrao`,`Evidencia`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TrocaDeRecorte`,`PermissaoESeguranca`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...H.parameters?.docs?.source},description:{story:`Padrão: três achados (comparação com a rede, cobertura parcial, série com lacunas), cada um com a sua evidência.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Evidência",
  args: {
    title: "Três destinos da evidência",
    insights: [insVenda, insTicket, insPreco]
  }
}`,...U.parameters?.docs?.source},description:{story:`Os três destinos da evidência: raio-X (venda líquida), DetailPanel (ticket, também com a origem externa) e rolagem até a tabela de origem.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rb-spark-story__text">
      {[insTicket, insRuptura, insVenda, insPreco].map(insight => <section key={insight.id} aria-label={insight.title}>
          <strong>{insight.title}</strong>
          <ul>
            {insightSummary(insight).map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </section>)}
    </div>
}`,...W.parameters?.docs?.source},description:{story:`A alternativa em texto: o achado inteiro em frases (o mesmo que o leitor de tela lê), sem cor nem ícone.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-insight-story__grid">
      <InsightCard {...args} insight={null} title="Carregando" status="loading" period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
      <InsightCard {...args} insight={null} title="Vazio" status="empty" period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
      <InsightCard {...args} insight={insRuptura} status="partial" partialNote="Bairro Alto não enviou a contagem da semana 43." />
      <InsightCard {...args} insight={null} title="Erro" status="error" onRetry={() => {}} period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
    </div>
}`,...G.parameters?.docs?.source},description:{story:`Carregando, vazio ("nenhum achado neste recorte"), parcial e erro, sempre com período, lojas e origem.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...K.parameters?.docs?.source},description:{story:`Modo escuro.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...q.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...J.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...Y.parameters?.docs?.source},description:{story:`Celular a 360 px: o texto quebra sem cortar; link e ações continuam alcançáveis.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...X.parameters?.docs?.source},description:{story:`Troca de recorte: os números vão do antigo ao novo (useCountUp), sem cascata; ausência troca na hora.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Permissão e segurança",
  args: {
    title: "Permissão e texto literal",
    insights: [insTicket, insUnsafeText],
    permissions: {
      pin: {
        allowed: false,
        reason: "Só a gerência regional fixa achados."
      },
      dismiss: {
        allowed: false,
        reason: "Achado de auditoria não pode ser dispensado."
      }
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Ações sem permissão aparecem desabilitadas com o motivo; texto de dados com marcação aparece como texto.`,...Z.parameters?.docs?.description}}}})))()}export{H as n,$ as r,O as t};