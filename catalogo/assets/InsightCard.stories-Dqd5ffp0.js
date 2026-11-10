import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{$t as r,F as i,I as a,L as o,N as s,Sn as c,Tn as ee,Ut as te,Zt as l,cn as u,dn as ne,j as d,jr as re,k as f,kr as ie,pn as ae,t as p,un as oe}from"./src-04IKjZET.js";import{t as se}from"./jsx-runtime-MKhVqBIO.js";import{n as ce,t as le}from"./lightbulb-D4gpZ7An.js";import{a as ue,o as de}from"./fixtures-heatmap-D2hYNWnq.js";import{n as fe,t as pe}from"./smooth-decorator-BRALqmIw.js";import{d as me,m as he,n as ge,u as m}from"./fixtures-kpi-xray-RsrNo70p.js";import{i as h,n as _e,r as ve}from"./fixtures-sparkline-8AjT8aVb.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{p(),g={style:`currency`,currency:`BRL`,maximumFractionDigits:0},_={style:`currency`,currency:`BRL`,notation:`compact`,maximumFractionDigits:0},v={style:`percent`,maximumFractionDigits:1},y=`Semanas 32 a 43 de 2026`,b=`ERP fictício · vendas por loja`,x={id:`ticket-praia`,title:`Ticket médio · Praia`,metric:`ticket médio da Praia`,current:214,reference:189,referenceLabel:`a média da rede`,currentLabel:`Praia`,referenceShort:`Média da rede`,format:g,polarity:`higher-is-better`,coverage:{reporting:8,total:8},coincidesWith:`a vitrine de Dia das Crianças`,period:y,source:b,evidence:{label:`ticket médio por loja`,kind:`detail`,target:`pv-ticket-table`,href:`https://example.com/pedravela/ticket-medio`}},S={id:`ruptura-grade`,title:`Ruptura de grade`,metric:`ruptura de grade`,current:`0,12`,reference:.08,referenceLabel:`a semana anterior`,currentLabel:`Semana 43`,referenceShort:`Semana 42`,format:v,polarity:`lower-is-better`,coverage:{reporting:7,total:8},period:`Semana 43 de 2026`,source:`WMS fictício · contagem diária`,evidence:{label:`ruptura de grade por loja`,kind:`detail`,target:`pv-ruptura`}},C={id:`venda-semanal`,title:`Venda líquida semanal`,metric:`venda líquida semanal`,points:[82400,84100,null,86900,88300,87600,null,91200,92800,94100,95300,97200].map((e,t)=>({at:`2026-W${32+t}`,value:e})),format:_,polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:y,source:b,evidence:{label:`venda líquida da rede`,kind:`xray`}},w={id:`conversao`,title:`Conversão`,metric:`conversão`,current:.312,reference:.309,referenceLabel:`a semana anterior`,currentLabel:`Semana 43`,referenceShort:`Semana 42`,format:v,polarity:`higher-is-better`,coverage:{reporting:1,total:1},stores:`1 loja (Centro)`,period:`Semana 43 de 2026`,source:`Contador de fluxo fictício`,evidence:{label:`conversão por dia`,kind:`detail`,target:`pv-conversao`}},T={id:`estoque-cd`,title:`Estoque do CD`,metric:`estoque do CD`,current:null,reference:1284600,referenceLabel:`a semana anterior`,referenceShort:`Semana 42`,format:g,polarity:`neutral`,stores:`CD Pedravela`,period:`Semana 43 de 2026`,source:`WMS fictício · contagem diária`},E=i(x),D=i(S),O=a(C),i(w),i(T),k=[E,D,O],A={...x,current:198,reference:191,period:`Semanas 36 a 43 de 2026`},j=i(A),M=i({...S,current:.09,coverage:{reporting:8,total:8}}),N=a({...C,points:[86900,88300,87600,89900,91200,92800,94100,95300,97200,98800,101400,103900]}),P={...E,id:`texto-literal`,title:`Nota do gerente`,headline:`Nota importada: <script>alert("x")<\/script> continua texto.`,support:[`<b>negrito</b> também aparece literal.`],evidence:{label:`origem recusada`,href:`javascript:alert(1)`}}})))()}var ye=t({Escuro:()=>J,Estados:()=>q,Estreito360:()=>Z,Evidencia:()=>G,Glass:()=>Y,GlassEscuro:()=>X,Padrao:()=>W,PermissaoESeguranca:()=>$,Texto:()=>K,TrocaDeRecorte:()=>Q,__namedExportsOrder:()=>Te,default:()=>we});function be(e){return(0,R.jsx)(l,{now:m,timeZone:he,children:(0,R.jsx)(u,{children:(0,R.jsx)(I,{...e})})})}function I({withOrigin:e=!0,...t}){let n=r(),i=ae()??!1,a=(0,L.useId)(),[o,c]=(0,L.useState)(null),l=(e,t)=>{if(e.kind===`xray`)n.open(me,{returnFocusId:s(t)});else if(e.kind===`widget`&&e.target){let t=document.getElementById(e.target);t?.scrollIntoView({behavior:i?`auto`:`smooth`,block:`start`}),t?.focus({preventScroll:!0})}else c(t)};return(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,R.jsx)(f,{...t,onOpenEvidence:l}),(0,R.jsx)(Se,{}),e?(0,R.jsx)(`section`,{id:`pv-preco-lojas`,tabIndex:-1,"aria-label":`Widget de origem: preço médio entre lojas`,className:`rb-focus-ring`,children:(0,R.jsx)(te,{title:`Preço médio entre lojas`,subtitle:`${h.period} · ${h.scope}`,rowHeader:`Loja`,columns:V.columns,data:V.data,defaultSort:{columnId:`preco`,direction:`desc`},searchable:!1,source:h.source})}):null,(0,R.jsx)(ee,{isOpen:o!==null,onClose:()=>c(null),titleId:a,title:o?`Evidência · ${o.title}`:`Evidência`,subtitle:o?`${o.period} · ${o.stores} · ${o.source}`:void 0,returnFocusId:o?s(o):void 0,children:o?(0,R.jsx)(xe,{insight:o}):null})]})}function xe({insight:e}){return(0,R.jsxs)(`table`,{className:`rb-insight-story__figures`,children:[(0,R.jsx)(`caption`,{children:e.headline}),(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:`Número`}),(0,R.jsx)(`th`,{scope:`col`,children:`Valor`})]})}),(0,R.jsx)(`tbody`,{children:(e.figures??[]).map((e,t)=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`row`,children:e.label}),(0,R.jsx)(`td`,{children:e.value===null?e.absentLabel??`sem leitura`:ie(e.value,e.format,`pt-BR`).text})]},e.id??t))})]})}function Se(){let e=oe();return(0,R.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,style:{alignSelf:`flex-start`},children:`Tocar a entrada de novo`})}function Ce(e){let[t,n]=(0,L.useState)(`12`),r=t===`12`?[E,D,O]:[j,M,N];return(0,R.jsx)(l,{now:m,timeZone:he,children:(0,R.jsx)(u,{children:(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,R.jsx)(c,{label:`Período`,value:t,options:[{value:`12`,label:`12 semanas`},{value:`8`,label:`8 semanas`}],onChange:n}),(0,R.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,style:{alignSelf:`flex-start`},onClick:()=>n(e=>e===`12`?`8`:`12`),children:`Trocar recorte (do antigo ao novo)`}),(0,R.jsx)(I,{...e,insights:r,withOrigin:!1})]})})})}var L,R,z,B,V,H,U,we,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{ce(),ne(),L=n(),p(),ue(),F(),ge(),_e(),pe(),R=se(),{fn:z}=__STORYBOOK_MODULE_TEST__,B=(e,t)=>(0,R.jsx)(re,{client:de,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,R.jsx)(e,{})}),V=ve(`loja`),H=V.data.rows.find(e=>e.id===`aeroporto`)?.values.preco??null,U=i({id:`preco-aeroporto`,title:`Preço médio · Aeroporto`,metric:`preço médio do Aeroporto`,current:H,reference:V.networkAvg,referenceLabel:`a média da rede`,currentLabel:`Aeroporto`,referenceShort:`Média da rede`,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0},polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:h.period,source:h.source,evidence:{label:`preço médio entre lojas`,kind:`widget`,target:`pv-preco-lojas`}}),we={title:`Widgets/Card de insight`,id:`widgets-insight-card`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:'Achado em texto gerado por modelos determinísticos (`insightFromComparison`, `insightFromSeries`) a partir de dados estruturados, sem LLM e sem rede: frase principal, apoio, números com os formatadores da biblioteca, força com o motivo, tom declarado e período, lojas e origem no rodapé. O link "Ver evidência" usa `href` (origem externa), `onOpenEvidence` (raio-X, DetailPanel ou rolagem até o widget de origem) ou os dois. Cliente fictício: Pedravela Calçados.'}}},args:{title:`Achados da semana`,insights:k,locale:`pt-BR`,icon:(0,R.jsx)(le,{}),onPin:z(),onDismiss:z(),onOpen:z()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`partial`]},insights:{control:!1},icon:{control:!1},messages:{control:!1},permissions:{control:!1}},decorators:[fe,B,(e,t)=>(0,R.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:980,maxWidth:`100%`},children:(0,R.jsx)(e,{})})],render:e=>(0,R.jsx)(be,{...e})},W={name:`Padrão`,args:{insights:[E,D,O]}},G={name:`Evidência`,args:{title:`Três destinos da evidência`,insights:[O,E,U]}},K={render:()=>(0,R.jsx)(`div`,{className:`rb-spark-story__text`,children:[E,D,O,U].map(e=>(0,R.jsxs)(`section`,{"aria-label":e.title,children:[(0,R.jsx)(`strong`,{children:e.title}),(0,R.jsx)(`ul`,{children:o(e).map((e,t)=>(0,R.jsx)(`li`,{children:e},t))})]},e.id))})},q={render:e=>(0,R.jsxs)(`div`,{className:`rb-insight-story__grid`,children:[(0,R.jsx)(d,{...e,insight:null,title:`Carregando`,status:`loading`,period:y,stores:`8 lojas`,source:b}),(0,R.jsx)(d,{...e,insight:null,title:`Vazio`,status:`empty`,period:y,stores:`8 lojas`,source:b}),(0,R.jsx)(d,{...e,insight:D,status:`partial`,partialNote:`Bairro Alto não enviou a contagem da semana 43.`}),(0,R.jsx)(d,{...e,insight:null,title:`Erro`,status:`error`,onRetry:()=>{},period:y,stores:`8 lojas`,source:b})]})},J={globals:{rbMode:`dark`},args:{insights:[E,D,O]}},Y={globals:{rbFamily:`glass`},args:{insights:[E,D,O]}},X={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`},args:{insights:[E,D,O]}},Z={name:`Estreito 360`,parameters:{width:`narrow`},args:{insights:[E,D,O]}},Q={name:`Troca de recorte`,render:e=>(0,R.jsx)(Ce,{...e})},$={name:`Permissão e segurança`,args:{title:`Permissão e texto literal`,insights:[E,P],permissions:{pin:{allowed:!1,reason:`Só a gerência regional fixa achados.`},dismiss:{allowed:!1,reason:`Achado de auditoria não pode ser dispensado.`}}}},Te=[`Padrao`,`Evidencia`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TrocaDeRecorte`,`PermissaoESeguranca`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Ações sem permissão aparecem desabilitadas com o motivo; texto de dados com marcação aparece como texto.`,...$.parameters?.docs?.description}}}})))()}export{W as n,Ee as r,ye as t};