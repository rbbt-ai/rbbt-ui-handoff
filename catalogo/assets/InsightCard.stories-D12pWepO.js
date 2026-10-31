import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{C as r,D as i,Ft as ee,Gt as te,O as a,T as o,Ut as s,_n as ne,an as re,en as c,k as ie,mn as ae,nn as oe,rn as se,t as l,x as u,xr as ce,yr as le}from"./src-BbyRaoY1.js";import{t as ue}from"./jsx-runtime-MKhVqBIO.js";import{n as de,t as fe}from"./lightbulb-DSRfpAPt.js";import{a as pe,o as me}from"./fixtures-heatmap-Av-RnC91.js";import{n as he,t as ge}from"./smooth-decorator-Ch0T28w-.js";import{d as _e,m as d,n as ve,u as f}from"./fixtures-kpi-xray-RsrNo70p.js";import{i as p,n as ye,r as be}from"./fixtures-sparkline-DySvZxkk.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{l(),m={style:`currency`,currency:`BRL`,maximumFractionDigits:0},h={style:`currency`,currency:`BRL`,notation:`compact`,maximumFractionDigits:0},g={style:`percent`,maximumFractionDigits:1},_=`Semanas 32 a 43 de 2026`,v=`ERP fictício · vendas por loja`,y={id:`ticket-praia`,title:`Ticket médio · Praia`,metric:`ticket médio da Praia`,current:214,reference:189,referenceLabel:`a média da rede`,currentLabel:`Praia`,referenceShort:`Média da rede`,format:m,polarity:`higher-is-better`,coverage:{reporting:8,total:8},coincidesWith:`a vitrine de Dia das Crianças`,period:_,source:v,evidence:{label:`ticket médio por loja`,kind:`detail`,target:`pv-ticket-table`,href:`https://example.com/pedravela/ticket-medio`}},b={id:`ruptura-grade`,title:`Ruptura de grade`,metric:`ruptura de grade`,current:`0,12`,reference:.08,referenceLabel:`a semana anterior`,currentLabel:`Semana 43`,referenceShort:`Semana 42`,format:g,polarity:`lower-is-better`,coverage:{reporting:7,total:8},period:`Semana 43 de 2026`,source:`WMS fictício · contagem diária`,evidence:{label:`ruptura de grade por loja`,kind:`detail`,target:`pv-ruptura`}},x={id:`venda-semanal`,title:`Venda líquida semanal`,metric:`venda líquida semanal`,points:[82400,84100,null,86900,88300,87600,null,91200,92800,94100,95300,97200].map((e,t)=>({at:`2026-W${32+t}`,value:e})),format:h,polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:_,source:v,evidence:{label:`venda líquida da rede`,kind:`xray`}},S={id:`conversao`,title:`Conversão`,metric:`conversão`,current:.312,reference:.309,referenceLabel:`a semana anterior`,currentLabel:`Semana 43`,referenceShort:`Semana 42`,format:g,polarity:`higher-is-better`,coverage:{reporting:1,total:1},stores:`1 loja (Centro)`,period:`Semana 43 de 2026`,source:`Contador de fluxo fictício`,evidence:{label:`conversão por dia`,kind:`detail`,target:`pv-conversao`}},C={id:`estoque-cd`,title:`Estoque do CD`,metric:`estoque do CD`,current:null,reference:1284600,referenceLabel:`a semana anterior`,referenceShort:`Semana 42`,format:m,polarity:`neutral`,stores:`CD Pedravela`,period:`Semana 43 de 2026`,source:`WMS fictício · contagem diária`},w=i(y),T=i(b),E=a(x),i(S),i(C),D=[w,T,E],O={...y,current:198,reference:191,period:`Semanas 36 a 43 de 2026`},k=i(O),A=i({...b,current:.09,coverage:{reporting:8,total:8}}),j=a({...x,points:[86900,88300,87600,89900,91200,92800,94100,95300,97200,98800,101400,103900]}),M={...w,id:`texto-literal`,title:`Nota do gerente`,headline:`Nota importada: <script>alert("x")<\/script> continua texto.`,support:[`<b>negrito</b> também aparece literal.`],evidence:{label:`origem recusada`,href:`javascript:alert(1)`}}})))()}var xe=t({Escuro:()=>q,Estados:()=>K,Estreito360:()=>X,Evidencia:()=>W,Glass:()=>J,GlassEscuro:()=>Y,Padrao:()=>U,PermissaoESeguranca:()=>Q,Texto:()=>G,TrocaDeRecorte:()=>Z,__namedExportsOrder:()=>$,default:()=>H});function Se(e){return(0,I.jsx)(s,{now:f,timeZone:d,children:(0,I.jsx)(c,{children:(0,I.jsx)(P,{...e})})})}function P({withOrigin:e=!0,...t}){let n=te(),r=re()??!1,i=(0,F.useId)(),[a,s]=(0,F.useState)(null),c=(e,t)=>{if(e.kind===`xray`)n.open(_e,{returnFocusId:o(t)});else if(e.kind===`widget`&&e.target){let t=document.getElementById(e.target);t?.scrollIntoView({behavior:r?`auto`:`smooth`,block:`start`}),t?.focus({preventScroll:!0})}else s(t)};return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,I.jsx)(u,{...t,onOpenEvidence:c}),(0,I.jsx)(we,{}),e?(0,I.jsx)(`section`,{id:`pv-preco-lojas`,tabIndex:-1,"aria-label":`Widget de origem: preço médio entre lojas`,className:`rb-focus-ring`,children:(0,I.jsx)(ee,{title:`Preço médio entre lojas`,subtitle:`${p.period} · ${p.scope}`,rowHeader:`Loja`,columns:z.columns,data:z.data,defaultSort:{columnId:`preco`,direction:`desc`},searchable:!1,source:p.source})}):null,(0,I.jsx)(ne,{isOpen:a!==null,onClose:()=>s(null),titleId:i,title:a?`Evidência · ${a.title}`:`Evidência`,subtitle:a?`${a.period} · ${a.stores} · ${a.source}`:void 0,returnFocusId:a?o(a):void 0,children:a?(0,I.jsx)(Ce,{insight:a}):null})]})}function Ce({insight:e}){return(0,I.jsxs)(`table`,{className:`rb-insight-story__figures`,children:[(0,I.jsx)(`caption`,{children:e.headline}),(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{scope:`col`,children:`Número`}),(0,I.jsx)(`th`,{scope:`col`,children:`Valor`})]})}),(0,I.jsx)(`tbody`,{children:(e.figures??[]).map((e,t)=>(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{scope:`row`,children:e.label}),(0,I.jsx)(`td`,{children:e.value===null?e.absentLabel??`sem leitura`:le(e.value,e.format,`pt-BR`).text})]},e.id??t))})]})}function we(){let e=oe();return(0,I.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,onClick:e,style:{alignSelf:`flex-start`},children:`Tocar a entrada de novo`})}function Te(e){let[t,n]=(0,F.useState)(`12`),r=t===`12`?[w,T,E]:[k,A,j];return(0,I.jsx)(s,{now:f,timeZone:d,children:(0,I.jsx)(c,{children:(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,I.jsx)(ae,{label:`Período`,value:t,options:[{value:`12`,label:`12 semanas`},{value:`8`,label:`8 semanas`}],onChange:n}),(0,I.jsx)(`button`,{type:`button`,className:`rb-heat-story__replay rb-focus-ring`,style:{alignSelf:`flex-start`},onClick:()=>n(e=>e===`12`?`8`:`12`),children:`Trocar recorte (do antigo ao novo)`}),(0,I.jsx)(P,{...e,insights:r,withOrigin:!1})]})})})}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function Ee(){return(Ee=e((()=>{de(),se(),F=n(),l(),pe(),N(),ve(),ye(),ge(),I=ue(),{fn:L}=__STORYBOOK_MODULE_TEST__,R=(e,t)=>(0,I.jsx)(ce,{client:me,mode:t.globals.rbMode??`light`,className:`rb-heat-story`,children:(0,I.jsx)(e,{})}),z=be(`loja`),B=z.data.rows.find(e=>e.id===`aeroporto`)?.values.preco??null,V=i({id:`preco-aeroporto`,title:`Preço médio · Aeroporto`,metric:`preço médio do Aeroporto`,current:B,reference:z.networkAvg,referenceLabel:`a média da rede`,currentLabel:`Aeroporto`,referenceShort:`Média da rede`,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0},polarity:`higher-is-better`,coverage:{reporting:8,total:8},period:p.period,source:p.source,evidence:{label:`preço médio entre lojas`,kind:`widget`,target:`pv-preco-lojas`}}),H={title:`Widgets/Card de insight`,id:`widgets-insight-card`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:'Achado em texto gerado por modelos determinísticos (`insightFromComparison`, `insightFromSeries`) a partir de dados estruturados, sem LLM e sem rede: frase principal, apoio, números com os formatadores da biblioteca, força com o motivo, tom declarado e período, lojas e origem no rodapé. O link "Ver evidência" usa `href` (origem externa), `onOpenEvidence` (raio-X, DetailPanel ou rolagem até o widget de origem) ou os dois. Cliente fictício: Pedravela Calçados.'}}},args:{title:`Achados da semana`,insights:D,locale:`pt-BR`,icon:(0,I.jsx)(fe,{}),onPin:L(),onDismiss:L(),onOpen:L()},argTypes:{status:{control:`inline-radio`,options:[`ready`,`loading`,`empty`,`error`,`partial`]},insights:{control:!1},icon:{control:!1},messages:{control:!1},permissions:{control:!1}},decorators:[he,R,(e,t)=>(0,I.jsx)(`div`,{style:{width:t.parameters.width===`narrow`?360:980,maxWidth:`100%`},children:(0,I.jsx)(e,{})})],render:e=>(0,I.jsx)(Se,{...e})},U={name:`Padrão`,args:{insights:[w,T,E]}},W={name:`Evidência`,args:{title:`Três destinos da evidência`,insights:[E,w,V]}},G={render:()=>(0,I.jsx)(`div`,{className:`rb-spark-story__text`,children:[w,T,E,V].map(e=>(0,I.jsxs)(`section`,{"aria-label":e.title,children:[(0,I.jsx)(`strong`,{children:e.title}),(0,I.jsx)(`ul`,{children:ie(e).map((e,t)=>(0,I.jsx)(`li`,{children:e},t))})]},e.id))})},K={render:e=>(0,I.jsxs)(`div`,{className:`rb-insight-story__grid`,children:[(0,I.jsx)(r,{...e,insight:null,title:`Carregando`,status:`loading`,period:_,stores:`8 lojas`,source:v}),(0,I.jsx)(r,{...e,insight:null,title:`Vazio`,status:`empty`,period:_,stores:`8 lojas`,source:v}),(0,I.jsx)(r,{...e,insight:T,status:`partial`,partialNote:`Bairro Alto não enviou a contagem da semana 43.`}),(0,I.jsx)(r,{...e,insight:null,title:`Erro`,status:`error`,onRetry:()=>{},period:_,stores:`8 lojas`,source:v})]})},q={globals:{rbMode:`dark`},args:{insights:[w,T,E]}},J={globals:{rbFamily:`glass`},args:{insights:[w,T,E]}},Y={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`},args:{insights:[w,T,E]}},X={name:`Estreito 360`,parameters:{width:`narrow`},args:{insights:[w,T,E]}},Z={name:`Troca de recorte`,render:e=>(0,I.jsx)(Te,{...e})},Q={name:`Permissão e segurança`,args:{title:`Permissão e texto literal`,insights:[w,M],permissions:{pin:{allowed:!1,reason:`Só a gerência regional fixa achados.`},dismiss:{allowed:!1,reason:`Achado de auditoria não pode ser dispensado.`}}}},$=[`Padrao`,`Evidencia`,`Texto`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`,`TrocaDeRecorte`,`PermissaoESeguranca`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...U.parameters?.docs?.source},description:{story:`Padrão: três achados (comparação com a rede, cobertura parcial, série com lacunas), cada um com a sua evidência.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Evidência",
  args: {
    title: "Três destinos da evidência",
    insights: [insVenda, insTicket, insPreco]
  }
}`,...W.parameters?.docs?.source},description:{story:`Os três destinos da evidência: raio-X (venda líquida), DetailPanel (ticket, também com a origem externa) e rolagem até a tabela de origem.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rb-spark-story__text">
      {[insTicket, insRuptura, insVenda, insPreco].map(insight => <section key={insight.id} aria-label={insight.title}>
          <strong>{insight.title}</strong>
          <ul>
            {insightSummary(insight).map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </section>)}
    </div>
}`,...G.parameters?.docs?.source},description:{story:`A alternativa em texto: o achado inteiro em frases (o mesmo que o leitor de tela lê), sem cor nem ícone.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <div className="rb-insight-story__grid">
      <InsightCard {...args} insight={null} title="Carregando" status="loading" period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
      <InsightCard {...args} insight={null} title="Vazio" status="empty" period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
      <InsightCard {...args} insight={insRuptura} status="partial" partialNote="Bairro Alto não enviou a contagem da semana 43." />
      <InsightCard {...args} insight={null} title="Erro" status="error" onRetry={() => {}} period={INSIGHT_PERIOD} stores="8 lojas" source={INSIGHT_SOURCE} />
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Carregando, vazio ("nenhum achado neste recorte"), parcial e erro, sempre com período, lojas e origem.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...q.parameters?.docs?.source},description:{story:`Modo escuro.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...J.parameters?.docs?.source},description:{story:`Família Glass, claro.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...Y.parameters?.docs?.source},description:{story:`Família Glass, escuro.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  parameters: {
    width: "narrow"
  },
  args: {
    insights: [insTicket, insRuptura, insVenda]
  }
}`,...X.parameters?.docs?.source},description:{story:`Celular a 360 px: o texto quebra sem cortar; link e ações continuam alcançáveis.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Troca de recorte",
  render: args => <SliceDemo {...args} />
}`,...Z.parameters?.docs?.source},description:{story:`Troca de recorte: os números vão do antigo ao novo (useCountUp), sem cascata; ausência troca na hora.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Ações sem permissão aparecem desabilitadas com o motivo; texto de dados com marcação aparece como texto.`,...Q.parameters?.docs?.description}}}})))()}export{U as n,Ee as r,xe as t};