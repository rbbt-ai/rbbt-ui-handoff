import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{$t as r,Dn as i,F as a,Fr as o,Gt as ee,I as s,L as c,N as l,Nr as te,fn as ne,hn as re,j as u,k as d,pn as ie,t as f,tn as ae,un as oe,wn as se}from"./src-D-7wCr18.js";import{t as ce}from"./jsx-runtime-MKhVqBIO.js";import{n as le,t as ue}from"./lightbulb-TKpB4zuK.js";import{a as de,o as fe}from"./fixtures-heatmap-C8vxANSz.js";import{n as pe,t as me}from"./smooth-decorator-Ci0vHQZp.js";import{d as he,m as ge,n as _e,u as p}from"./fixtures-kpi-xray-RsrNo70p.js";import{i as m,n as ve,r as ye}from"./fixtures-sparkline-BR5uSiKe.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{f(),h={style:`currency`,currency:`BRL`,maximumFractionDigits:0},g={style:`currency`,currency:`BRL`,notation:`compact`,maximumFractionDigits:0},_={style:`percent`,maximumFractionDigits:1},v=`Semanas 32 a 43 de 2026`,y=`ERP fictício · vendas por loja`,b={id:`ticket-praia`,title:`Ticket médio · Praia`,metric:`ticket médio da Praia`,current:214,reference:189,referenceLabel:`a média da rede`,currentLabel:`Praia`,referenceShort:`Média da rede`,format:h,polarity:`higher-is-better`,coverage:{reporting:8,total:8},coincidesWith:`a vitrine de Dia das Crianças`,period:v,source:y,evidence:{label:`ticket médio por loja`,kind:`detail`,target:`pv-ticket-table`,href:`https://example.com/pedravela/ticket-medio`}},x={id:`ruptura-grade`,title:`Ruptura de grade`,metric:`ruptura de grade`,current:`0,12`,reference:.08,referenceLabel:`a semana anterior`,currentLabel:`Semana 43`,referenceShort:`Semana 42`,format:_,polarity:`lower-is-better`,coverage:{reporting:7,total:8},period:`Semana 43 de 2026`,source:`WMS fictício · contagem diária`,evidence:{label:`ruptura de grade por loja`,kind:`detail`,target:`pv-ruptura`}},S={id:`venda-semanal`,title:`Venda líquida semanal`,metric:`venda líquida semanal`,points:[82400,84100,null,86900,88300,87600,null,91200,92800,94100,95300,97200].map((e,t)=>({at:`2026-W${32+t}`,value:e})),format:g,polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:v,source:y,evidence:{label:`venda líquida da rede`,kind:`xray`}},C={id:`conversao`,title:`Conversão`,metric:`conversão`,current:.312,reference:.309,referenceLabel:`a semana anterior`,currentLabel:`Semana 43`,referenceShort:`Semana 42`,format:_,polarity:`higher-is-better`,coverage:{reporting:1,total:1},stores:`1 loja (Centro)`,period:`Semana 43 de 2026`,source:`Contador de fluxo fictício`,evidence:{label:`conversão por dia`,kind:`detail`,target:`pv-conversao`}},w={id:`estoque-cd`,title:`Estoque do CD`,metric:`estoque do CD`,current:null,reference:1284600,referenceLabel:`a semana anterior`,referenceShort:`Semana 42`,format:h,polarity:`neutral`,stores:`CD Pedravela`,period:`Semana 43 de 2026`,source:`WMS fictício · contagem diária`},T=a(b),E=a(x),D=s(S),a(C),a(w),O=[T,E,D],k={...b,current:198,reference:191,period:`Semanas 36 a 43 de 2026`},A=a(k),j=a({...x,current:.09,coverage:{reporting:8,total:8}}),M=s({...S,points:[86900,88300,87600,89900,91200,92800,94100,95300,97200,98800,101400,103900]}),N={...T,id:`texto-literal`,title:`Nota do gerente`,headline:`Nota importada: <script>alert("x")<\/script> continua texto.`,support:[`<b>negrito</b> também aparece literal.`],evidence:{label:`origem recusada`,href:`javascript:alert(1)`}}})))()}var be=t({Escuro:()=>J,Estados:()=>q,Estreito360:()=>Z,Evidencia:()=>G,Glass:()=>Y,GlassEscuro:()=>X,Padrao:()=>W,PermissaoESeguranca:()=>$,Texto:()=>K,TrocaDeRecorte:()=>Q,__namedExportsOrder:()=>Te,default:()=>U});function xe(e){return(0,L.jsx)(r,{now:p,timeZone:ge,children:(0,L.jsx)(oe,{children:(0,L.jsx)(F,{...e})})})}function F({withOrigin:e=!0,...t}){let n=ae(),r=re()??!1,a=(0,I.useId)(),[o,s]=(0,I.useState)(null),c=(e,t)=>{if(e.kind===`xray`)n.open(he,{returnFocusId:l(t)});else if(e.kind===`widget`&&e.target){let t=document.getElementById(e.target);t?.scrollIntoView({behavior:r?`auto`:`smooth`,block:`start`}),t?.focus({preventScroll:!0})}else s(t)};return(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,L.jsx)(d,{...t,onOpenEvidence:c}),(0,L.jsx)(Ce,{}),e?(0,L.jsx)(`section`,{id:`pv-preco-lojas`,tabIndex:-1,"aria-label":`Widget de origem: preço médio entre lojas`,className:`rb-focus-ring`,children:(0,L.jsx)(ee,{title:`Preço médio entre lojas`,subtitle:`${m.period} · ${m.scope}`,rowHeader:`Loja`,columns:B.columns,data:B.data,defaultSort:{columnId:`preco`,direction:`desc`},searchable:!1,source:m.source})}):null,(0,L.jsx)(i,{isOpen:o!==null,onClose:()=>s(null),titleId:a,title:o?`Evidência · ${o.title}`:`Evidência`,subtitle:o?`${o.period} · ${o.stores} · ${o.source}`:void 0,returnFocusId:o?l(o):void 0,children:o?(0,L.jsx)(Se,{insight:o}):null})]})}function Se({insight:e}){return(0,L.jsxs)(`table`,{className:`rb-insight-story__figures`,children:[(0,L.jsx)(`caption`,{children:e.headline}),(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`th`,{scope:`col`,children:`Número`}),(0,L.jsx)(`th`,{scope:`col`,children:`Valor`})]})}),(0,L.jsx)(`tbody`,{children:(e.figures??[]).map((e,t)=>(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`th`,{scope:`row`,children:e.label}),(0,L.jsx)(`td`,{children:e.value===null?e.absentLabel??`sem leitura`:te(e.value,e.format,`pt-BR`).text})]},e.id??t))})]})}function Ce(){let e=ne();return(0,L.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,style:{alignSelf:`flex-start`},children:`Tocar a entrada de novo`})}function we(e){let[t,n]=(0,I.useState)(`12`),i=t===`12`?[T,E,D]:[A,j,M];return(0,L.jsx)(r,{now:p,timeZone:ge,children:(0,L.jsx)(oe,{children:(0,L.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,L.jsx)(se,{label:`Período`,value:t,options:[{value:`12`,label:`12 semanas`},{value:`8`,label:`8 semanas`}],onChange:n}),(0,L.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,style:{alignSelf:`flex-start`},onClick:()=>n(e=>e===`12`?`8`:`12`),children:`Trocar recorte (do antigo ao novo)`}),(0,L.jsx)(F,{...e,insights:i,withOrigin:!1})]})})})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{le(),ie(),I=n(),f(),de(),P(),_e(),ve(),me(),L=ce(),{fn:R}=__STORYBOOK_MODULE_TEST__,z=(e,t)=>(0,L.jsx)(o,{client:fe,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,L.jsx)(e,{})}),B=ye(`loja`),V=B.data.rows.find(e=>e.id===`aeroporto`)?.values.preco??null,H=a({id:`preco-aeroporto`,title:`Preço médio · Aeroporto`,metric:`preço médio do Aeroporto`,current:V,reference:B.networkAvg,referenceLabel:`a média da rede`,currentLabel:`Aeroporto`,referenceShort:`Média da rede`,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0},polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:m.period,source:m.source,evidence:{label:`preço médio entre lojas`,kind:`widget`,target:`pv-preco-lojas`}}),U={title:`Widgets/Card de insight`,id:`widgets-insight-card`,component:d,tags:[`autodocs`],parameters:{docs:{description:{component:'Achado em texto gerado por modelos determinísticos (`insightFromComparison`, `insightFromSeries`) a partir de dados estruturados, sem LLM e sem rede: frase principal, apoio, números com os formatadores da biblioteca, força com o motivo, tom declarado e período, lojas e origem no rodapé. O link "Ver evidência" usa `href` (origem externa), `onOpenEvidence` (raio-X, DetailPanel ou rolagem até o widget de origem) ou os dois. Cliente fictício: Pedravela Calçados.'}}},args:{title:`Achados da semana`,insights:O,locale:`pt-BR`,icon:(0,L.jsx)(ue,{}),onPin:R(),onDismiss:R(),onOpen:R()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`partial`]},insights:{control:!1},icon:{control:!1},messages:{control:!1},permissions:{control:!1}},decorators:[pe,z,(e,t)=>(0,L.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:980,maxWidth:`100%`},children:(0,L.jsx)(e,{})})],render:e=>(0,L.jsx)(xe,{...e})},W={name:`Padrão`,args:{insights:[T,E,D]}},G={name:`Evidência`,args:{title:`Três destinos da evidência`,insights:[D,T,H]}},K={render:()=>(0,L.jsx)(`div`,{className:`rb-spark-story__text`,children:[T,E,D,H].map(e=>(0,L.jsxs)(`section`,{"aria-label":e.title,children:[(0,L.jsx)(`strong`,{children:e.title}),(0,L.jsx)(`ul`,{children:c(e).map((e,t)=>(0,L.jsx)(`li`,{children:e},t))})]},e.id))})},q={render:e=>(0,L.jsxs)(`div`,{className:`rb-insight-story__grid`,children:[(0,L.jsx)(u,{...e,insight:null,title:`Carregando`,status:`loading`,period:v,stores:`8 lojas`,source:y}),(0,L.jsx)(u,{...e,insight:null,title:`Vazio`,status:`empty`,period:v,stores:`8 lojas`,source:y}),(0,L.jsx)(u,{...e,insight:E,status:`partial`,partialNote:`Bairro Alto não enviou a contagem da semana 43.`}),(0,L.jsx)(u,{...e,insight:null,title:`Erro`,status:`error`,onRetry:()=>{},period:v,stores:`8 lojas`,source:y})]})},J={globals:{rbMode:`dark`},args:{insights:[T,E,D]}},Y={globals:{rbFamily:`glass`},args:{insights:[T,E,D]}},X={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`},args:{insights:[T,E,D]}},Z={name:`Estreito 360`,parameters:{width:`narrow`},args:{insights:[T,E,D]}},Q={name:`Troca de recorte`,render:e=>(0,L.jsx)(we,{...e})},$={name:`Permissão e segurança`,args:{title:`Permissão e texto literal`,insights:[T,N],permissions:{pin:{allowed:!1,reason:`Só a gerência regional fixa achados.`},dismiss:{allowed:!1,reason:`Achado de auditoria não pode ser dispensado.`}}}},Te=[`Padrao`,`Evidencia`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TrocaDeRecorte`,`PermissaoESeguranca`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...W.parameters?.docs?.source},description:{story:`Padrão: três achados (comparação com a rede, cobertura parcial, série com lacunas), cada um com a sua evidência.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Evidência",
  args: {
    title: "Três destinos da evidência",
    insights: [insVenda, insTicket, insPreco]
  }
}`,...G.parameters?.docs?.source},description:{story:`Os três destinos da evidência: raio-X (venda líquida), DetailPanel (ticket, também com a origem externa) e rolagem até a tabela de origem.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rb-spark-story__text">
      {[insTicket, insRuptura, insVenda, insPreco].map(insight => <section key={insight.id} aria-label={insight.title}>
          <strong>{insight.title}</strong>
          <ul>
            {insightSummary(insight).map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </section>)}
    </div>
}`,...K.parameters?.docs?.source},description:{story:`A alternativa em texto: o achado inteiro em frases (o mesmo que o leitor de tela lê), sem cor nem ícone.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-insight-story__grid">
      <InsightCard {...args} insight={null} title="Carregando" status="loading" period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
      <InsightCard {...args} insight={null} title="Vazio" status="empty" period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
      <InsightCard {...args} insight={insRuptura} status="partial" partialNote="Bairro Alto não enviou a contagem da semana 43." />
      <InsightCard {...args} insight={null} title="Erro" status="error" onRetry={() => {}} period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
    </div>
}`,...q.parameters?.docs?.source},description:{story:`Carregando, vazio ("nenhum achado neste recorte"), parcial e erro, sempre com período, lojas e origem.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...J.parameters?.docs?.source},description:{story:`Modo escuro.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...Y.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...X.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...Z.parameters?.docs?.source},description:{story:`Celular a 360 px: o texto quebra sem cortar; link e ações continuam alcançáveis.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...Q.parameters?.docs?.source},description:{story:`Troca de recorte: os números vão do antigo ao novo (useCountUp), sem cascata; ausência troca na hora.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Ações sem permissão aparecem desabilitadas com o motivo; texto de dados com marcação aparece como texto.`,...$.parameters?.docs?.description}}}})))()}export{W as n,Ee as r,be as t};