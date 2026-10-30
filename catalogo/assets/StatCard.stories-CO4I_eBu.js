import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{Mt as r,On as i,Q as a,bn as o,on as s,sn as c,t as l,wn as u,xn as d}from"./src-lgDrkLBh.js";import{t as f}from"./jsx-runtime-MKhVqBIO.js";import{n as p,t as m}from"./bot-DQTlGyRE.js";import{n as h,t as g}from"./store-D2Zsymtk.js";import{n as _,t as v}from"./truck-DVIUAq7H.js";import{n as y,t as b}from"./user-round--OEEuz0a.js";var x=t({Arte:()=>Z,ClaroEEscuro:()=>H,Controles:()=>F,DestaqueGrafiteOuAzul:()=>G,Enxuto:()=>q,Estados:()=>z,Identidade:()=>U,Padrao:()=>P,TextoLongoEEstreito:()=>V,__namedExportsOrder:()=>Q,default:()=>E});function S(e,t,n=e=>D.format(e),r={}){return e.map((e,i)=>{let a=String(6+i).padStart(2,`0`),o=Array.isArray(t)?t[i]??null:t;return{id:`2026-10-${a}`,label:`${a}/10`,value:e,reference:o,state:r[i],valueText:e===null?void 0:n(e),referenceText:o===null?void 0:n(o)}})}function C({prefix:e,items:t=N}){let[n,i]=(0,w.useState)(null),s=t.find(e=>e.key===n);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`div`,{className:`story-stat__grid`,children:t.map(({key:t,data:n})=>(0,T.jsx)(a,{...n,id:`${e}-${t}`,onOpen:()=>i(t)},t))}),(0,T.jsx)(r,{isOpen:s!==void 0,onClose:()=>i(null),titleId:`${e}-detalhe`,eyebrow:`Detalhe`,title:s?.data.title??``,subtitle:`Outubro, até o dia 15 · dados fictícios`,returnFocusId:s?`${e}-${s.key}`:void 0,footer:(0,T.jsxs)(u,{variant:`primary`,onPress:()=>i(null),children:[`Ver a área`,(0,T.jsx)(o,{"aria-hidden":`true`})]}),children:(0,T.jsx)(`p`,{className:`story-v3__text`,children:`O detalhe é de quem usa: o card só chama onOpen e recebe o foco de volta pelo id.`})})]})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{d(),p(),c(),h(),_(),y(),w=n(),l(),T=f(),E={title:`Widgets/StatCard`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:'StatCard (0.3.0-rc.3): card de estatísticas "estilo card de jogador". Genérico: os exemplos\nmostram loja, vendedora, agente e produto com o mesmo componente. Anatomia `smooth` (padrão:\nícone em círculo, pílula de variação, mini-blocos e barras-pílula; `featured` em gradiente para\no primeiro), `plain` (enxuta) e `art` (0.3.0-rc.2, com a arte no topo). Números fictícios.'}}}},D=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`,notation:`compact`,maximumFractionDigits:1}),O=e=>`${Math.floor(e/60)} min ${String(Math.round(e%60)).padStart(2,`0`)} s`,k={title:`Unidade Centro 04`,rank:{value:1,of:12,label:`atingimento`},emblem:(0,T.jsx)(g,{}),featured:!0,overline:`Região Sul`,subtitle:`loja de rua`,status:{label:`Acima da meta`,tone:`positive`},primary:{label:`Atingimento`,value:`108,4%`,ratio:1.084,delta:{text:`R$ 18,2 mil`,direction:`up`,tone:`positive`,srLabel:`+R$ 18,2 mil vs meta`},baseline:{label:`Meta até 15/10`,value:`R$ 216,7 mil`},support:`+R$ 18,2 mil vs meta`,supportTone:`positive`},stats:[{id:`venda`,label:`Venda`,value:`R$ 236 mil`,srLabel:`Venda líquida até 17/10: R$ 236,4 mil`},{id:`evolucao`,label:`Evolução`,value:`+6,2%`,tone:`positive`,srLabel:`Evolução: +6,2% vs outubro de 2025`},{id:`ticket`,label:`Ticket`,value:`R$ 184`,srLabel:`Ticket médio: R$ 184 por atendimento`}],form:{label:`Forma recente`,caption:`venda × meta, últimos 10 dias`,referenceLabel:`meta`,points:S([14800,16200,12900,15600,17400,19800,13100,15900,16700,18300],14500)}},A={title:`Marina Couto`,rank:{value:3,of:18,label:`conversão`},emblem:(0,T.jsx)(b,{}),overline:`Equipe Norte`,subtitle:`vendas internas`,status:{label:`No ritmo`,tone:`accent`},primary:{label:`Conversão`,value:`31,8%`,ratio:.318/.35,delta:{text:`2,4 p.p.`,direction:`up`,tone:`positive`,srLabel:`+2,4 p.p. vs setembro`},baseline:{label:`Meta`,value:`35%`},support:`+2,4 p.p. vs setembro`,supportTone:`positive`},stats:[{id:`propostas`,label:`Propostas`,value:`46`},{id:`fechadas`,label:`Fechadas`,value:`14`},{id:`ticket`,label:`Ticket`,value:`R$ 9,8 mil`,srLabel:`Ticket médio: R$ 9,8 mil`}],form:{label:`Forma recente`,caption:`propostas × meta diária`,referenceLabel:`meta`,points:S([5,4,6,3,5,0,0,7,4,6],[4,4,4,4,4,null,null,4,4,4],e=>String(e),{5:`closed`,6:`closed`})},badges:[{id:`parcial`,label:`Parcial`,tone:`warning`,srLabel:`Dados parciais: hoje ainda em andamento`}]},j={title:`Agente de triagem`,rank:{value:2,of:6,label:`tempo de resposta`},emblem:(0,T.jsx)(m,{}),overline:`Atendimento`,subtitle:`agente`,status:{label:`Atenção`,tone:`warning`},primary:{label:`Tempo de resposta`,value:`1 min 42 s`,ratio:.85,ringTone:`warning`,delta:{text:`18 s`,direction:`up`,tone:`negative`,srLabel:`+18 s vs semana anterior, pior`},baseline:{label:`Meta`,value:`até 2 min`},support:`+18 s vs semana anterior`,supportTone:`negative`},stats:[{id:`conversas`,label:`Conversas`,value:`1.284`},{id:`resolvidas`,label:`Sem humano`,value:`72%`,srLabel:`Resolvidas sem humano: 72%`},{id:`satisfacao`,label:`Satisfação`,value:`4,6`,srLabel:`Satisfação: 4,6 de 5`}],form:{label:`Forma recente`,caption:`tempo de resposta × meta, menor é melhor`,referenceLabel:`meta`,polarity:`lower-is-better`,points:S([96,104,88,131,117,99,142,108,126,102],120,O)}},M={title:`Garrafa térmica 750 ml`,rank:{value:null,of:40,label:`giro`},emblem:(0,T.jsx)(s,{}),overline:`Utilidades`,subtitle:`lançamento`,status:{label:`Sem leitura`,tone:`neutral`,srLabel:`Sem leitura comparável no período`},primary:{label:`Atingimento`,value:null,ratio:null,absentText:`sem leitura comparável`},stats:[{id:`venda`,label:`Venda`,value:`R$ 3,1 mil`,srLabel:`Venda líquida desde 12/10: R$ 3,1 mil`},{id:`evolucao`,label:`Evolução`,value:null,srLabel:`Evolução: sem base, produto novo`},{id:`estoque`,label:`Estoque`,value:`212`,srLabel:`Estoque: 212 unidades`}],form:{label:`Forma recente`,caption:`venda por dia`,referenceLabel:`meta`,points:S([null,null,null,null,null,null,640,410,980,1120],null)},badges:[{id:`nova`,label:`Nova`,tone:`accent`}]},N=[{key:`loja`,data:k},{key:`vendedora`,data:A},{key:`agente`,data:j},{key:`produto`,data:M}],P={name:`Padrão`,args:k,render:()=>(0,T.jsxs)(`div`,{className:`story-stat`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Mesmo componente para loja, vendedora, agente e produto`}),(0,T.jsx)(C,{prefix:`p`})]})},F={name:`Controles`,args:k,render:e=>(0,T.jsx)(`div`,{className:`story-stat story-stat--one`,children:(0,T.jsx)(a,{...e})})},I={title:`Unidade Lagoa 09`,rank:{value:null,of:12,label:`atingimento`},emblem:(0,T.jsx)(g,{}),overline:`Região Sul`,subtitle:`loja de shopping`,status:{label:`Sem leitura`,tone:`neutral`,srLabel:`Sem leitura comparável até 15/10`},primary:{label:`Atingimento`,value:null,ratio:null,absentText:`sem leitura comparável`},stats:[{id:`venda`,label:`Venda`,value:null},{id:`evolucao`,label:`Evolução`,value:null},{id:`dias`,label:`Dias abertos`,value:`0`,srLabel:`Dias abertos: 0 de 17`}],form:{label:`Forma recente`,caption:`venda × meta, últimos 10 dias`,referenceLabel:`meta`,points:S([null,null,null,null,null,null,null,null,null,null],9e3)}},L={title:`Unidade Porto 11`,rank:{value:null,of:12,label:`atingimento`},emblem:(0,T.jsx)(g,{}),overline:`Região Leste`,subtitle:`quiosque`,status:{label:`Sem meta`,tone:`neutral`,srLabel:`Sem meta no mês`},primary:{label:`Atingimento`,value:null,ratio:null,absentText:`sem meta no mês`},stats:[{id:`venda`,label:`Venda`,value:`R$ 41,9 mil`},{id:`evolucao`,label:`Evolução`,value:`−3,1%`,tone:`negative`},{id:`ticket`,label:`Ticket`,value:`R$ 96`}],form:{label:`Forma recente`,caption:`venda por dia`,referenceLabel:`meta`,points:S([2400,2100,2900,0,3100,2700,2300,2800,3300,2600],null)}},R={title:`Unidade móvel 02`,rank:{value:7,of:12,label:`atingimento`},emblem:(0,T.jsx)(v,{}),overline:`Eventos`,subtitle:`unidade móvel`,status:{label:`Abaixo da meta`,tone:`negative`},primary:{label:`Atingimento`,value:`81,3%`,ratio:.813,delta:{text:`R$ 7,4 mil`,direction:`down`,tone:`negative`,srLabel:`−R$ 7,4 mil vs meta`},baseline:{label:`Meta até 15/10`,value:`R$ 39,6 mil`},support:`−R$ 7,4 mil vs meta`,supportTone:`negative`},stats:[{id:`venda`,label:`Venda`,value:`R$ 32,1 mil`},{id:`evolucao`,label:`Evolução`,value:null,srLabel:`Evolução: fora da comparação, unidade de eventos`},{id:`ticket`,label:`Ticket`,value:`R$ 61`}],form:{label:`Forma recente`,caption:`zero, devolução, sem dados, fechado e parcial`,referenceLabel:`meta`,points:S([5800,0,-1200,null,0,0,6400,4100,null,3900],[5500,5500,5500,5500,null,null,5500,5500,5500,5500],e=>D.format(e),{4:`closed`,5:`closed`,9:`partial`})},badges:[{id:`fechou`,label:`Fechou 2 dias`,tone:`neutral`},{id:`evento`,label:`Evento`,tone:`accent`},{id:`parcial`,label:`Parcial`,tone:`warning`,srLabel:`Dados parciais em 15/10`}]},z={name:`Estados`,args:k,render:()=>(0,T.jsxs)(`div`,{className:`story-stat`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Sem leitura, sem meta, lacunas e devolução (destacado) e carregando: mesma altura`}),(0,T.jsxs)(`div`,{className:`story-stat__grid`,children:[(0,T.jsx)(a,{...I,id:`e-sem-leitura`,onOpen:()=>{}}),(0,T.jsx)(a,{...L,id:`e-sem-meta`,onOpen:()=>{}}),(0,T.jsx)(a,{...R,id:`e-lacunas`,onOpen:()=>{},highlighted:!0}),(0,T.jsx)(a,{title:`Unidade Centro 04`,loading:!0})]}),(0,T.jsx)(`p`,{className:`story-caption`,children:`Estático (sem ação), sem posição e só com o número`}),(0,T.jsxs)(`div`,{className:`story-stat__grid`,children:[(0,T.jsx)(a,{...A,rank:void 0}),(0,T.jsx)(a,{title:`Resumo da equipe`,overline:`Equipe Norte`,subtitle:`18 pessoas`,primary:{label:`Conversão média`,value:`27,4%`},stats:A.stats})]})]})},B={...k,featured:!1,title:`Unidade Shopping Parque das Águas Claras, piso superior, ala norte`,overline:`Região Metropolitana Sul e Litoral`,subtitle:`loja de shopping com depósito próprio`,status:{label:`Acima da meta no acumulado do mês`,tone:`positive`},primary:{...k.primary,value:`1.084,4%`,ratio:10.844,delta:{text:`R$ 12.345.678,90`,direction:`up`,tone:`positive`,srLabel:`+R$ 12.345.678,90 vs meta`},baseline:{label:`Meta acumulada até o fechamento de 15/10`,value:`R$ 1.252.000,00`},support:`+R$ 12.345.678,90 vs meta`},stats:[{id:`venda`,label:`Venda acumulada`,value:`R$ 12,3 mi`},{id:`evolucao`,label:`Evolução`,value:`+1.206,2%`,tone:`positive`},{id:`ticket`,label:`Ticket`,value:`R$ 18.400`}],badges:[{id:`parcial`,label:`Dados parciais no fechamento do mês`,tone:`warning`}]},V={name:`Texto longo e container estreito`,args:k,render:()=>(0,T.jsxs)(`div`,{className:`story-stat`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`240 px, 280 px e 400 px de container`}),(0,T.jsxs)(`div`,{className:`story-stat__widths`,children:[(0,T.jsx)(`div`,{style:{width:`15rem`},children:(0,T.jsx)(a,{...B,id:`l-240`,onOpen:()=>{}})}),(0,T.jsx)(`div`,{style:{width:`17.5rem`},children:(0,T.jsx)(a,{...R,id:`l-280`,onOpen:()=>{}})}),(0,T.jsx)(`div`,{style:{width:`25rem`},children:(0,T.jsx)(a,{...B,id:`l-400`,onOpen:()=>{}})})]})]})},H={name:`Claro e escuro`,args:k,render:()=>(0,T.jsxs)(`div`,{className:`story-v3__modes`,children:[(0,T.jsxs)(i,{mode:`light`,canvas:!0,className:`story-v3__mode`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Claro (padrão)`}),(0,T.jsx)(C,{prefix:`claro`,items:N.slice(0,2)})]}),(0,T.jsxs)(i,{mode:`dark`,canvas:!0,className:`story-v3__mode`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Escuro`}),(0,T.jsx)(C,{prefix:`escuro`,items:N.slice(0,2)})]})]})},U={name:`Identidade por tokens`,args:k,render:()=>(0,T.jsxs)(`div`,{className:`story-v3__modes`,children:[(0,T.jsxs)(i,{mode:`light`,canvas:!0,className:`story-v3__mode`,tokens:{accent:`#1f4fa0`},children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Azul, claro`}),(0,T.jsx)(C,{prefix:`azul`,items:N.slice(0,2)})]}),(0,T.jsxs)(i,{mode:`dark`,canvas:!0,className:`story-v3__mode`,tokens:{accent:`#a99bff`},children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Violeta, escuro`}),(0,T.jsx)(C,{prefix:`violeta`,items:N.slice(2,4)})]})]})},W={statFeaturedFrom:`var(--rb-featured-from)`,statFeaturedTo:`var(--rb-featured-to)`,statFeaturedMuted:`var(--rb-on-featured)`},G={name:`Destaque: grafite ou azul (token)`,args:k,render:()=>(0,T.jsxs)(`div`,{className:`story-v3__modes`,children:[(0,T.jsxs)(i,{mode:`light`,canvas:!0,className:`story-v3__mode`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Grafite (padrão aprovado)`}),(0,T.jsx)(C,{prefix:`grafite`,items:N.slice(0,2)})]}),(0,T.jsxs)(i,{mode:`light`,canvas:!0,className:`story-v3__mode`,tokens:W,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Azul do indicador (alternativa em decisão)`}),(0,T.jsx)(C,{prefix:`azul-destaque`,items:N.slice(0,2)})]}),(0,T.jsxs)(i,{mode:`dark`,canvas:!0,className:`story-v3__mode`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Grafite, escuro`}),(0,T.jsx)(C,{prefix:`grafite-escuro`,items:N.slice(0,2)})]}),(0,T.jsxs)(i,{mode:`dark`,canvas:!0,className:`story-v3__mode`,tokens:W,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`Azul, escuro`}),(0,T.jsx)(C,{prefix:`azul-escuro`,items:N.slice(0,2)})]})]})},K=N.map(({key:e,data:t})=>({key:e,data:{...t,variant:`plain`,featured:void 0}})),q={name:`Enxuto (plain)`,args:{...k,variant:`plain`,featured:void 0},render:()=>(0,T.jsxs)(`div`,{className:`story-stat`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`variant="plain": um número com barra fina, fileira de 3 estatísticas e forma sem moldura`}),(0,T.jsx)(C,{prefix:`n`,items:K}),(0,T.jsxs)(`div`,{className:`story-stat__grid`,children:[(0,T.jsx)(a,{...I,variant:`plain`,id:`n-sem-leitura`,onOpen:()=>{}}),(0,T.jsx)(a,{...L,variant:`plain`,id:`n-sem-meta`,onOpen:()=>{}}),(0,T.jsx)(a,{...R,variant:`plain`,id:`n-lacunas`,onOpen:()=>{}}),(0,T.jsx)(a,{variant:`plain`,title:`Unidade Centro 04`,loading:!0})]})]})},J={variant:`art`,title:`Unidade Centro 04`,rank:{value:1,of:12,label:`atingimento`},emblem:`04`,overline:`Região Sul`,subtitle:`Loja de rua`,status:{label:`Acima da meta`,tone:`positive`},primary:{label:`Atingimento da meta`,value:`108,4%`,ratio:1.084,ringTone:`positive`,support:`+R$ 18,2 mil vs meta até 15/10`,supportTone:`positive`},stats:[{id:`venda`,label:`Venda líquida`,value:`R$ 236,4 mil`,note:`até 17/10`},{id:`evolucao`,label:`Evolução`,value:`+6,2%`,tone:`positive`,note:`vs out/2025`},{id:`ticket`,label:`Ticket médio`,value:`R$ 184`},{id:`cobertura`,label:`Cobertura < 2 sem.`,value:`12`,note:`itens`},{id:`dias`,label:`Dias de operação`,value:`17`,note:`de 17`}],form:k.form},Y={...j,variant:`art`,emblem:(0,T.jsx)(m,{}),primary:{label:`Tempo médio de resposta`,value:`1 min 42 s`,support:`+18 s vs semana anterior`,supportTone:`negative`},stats:[{id:`conversas`,label:`Conversas`,value:`1.284`},{id:`resolvidas`,label:`Sem humano`,value:`72%`,note:`resolvidas`},{id:`transferidas`,label:`Transferidas`,value:`9%`},{id:`satisfacao`,label:`Satisfação`,value:`4,6`,note:`de 5`}]},X={...R,variant:`art`,emblem:`M2`,primary:{...R.primary,label:`Atingimento da meta`,ringTone:`negative`,support:`−R$ 7,4 mil vs meta dos dias de evento`},stats:[{id:`venda`,label:`Venda líquida`,value:`R$ 32,1 mil`,note:`6 dias de evento`},{id:`evolucao`,label:`Evolução`,value:null,note:`fora da comparação`},{id:`ticket`,label:`Ticket médio`,value:`R$ 61`},{id:`dias`,label:`Dias de evento`,value:`6`,note:`de 17`}]},Z={name:`Arte (rc.2)`,args:J,render:()=>(0,T.jsxs)(`div`,{className:`story-stat`,children:[(0,T.jsx)(`p`,{className:`story-caption`,children:`variant="art": arte no topo, anel e grade de estatísticas com legendas`}),(0,T.jsxs)(`div`,{className:`story-stat__grid`,children:[(0,T.jsx)(a,{...J,id:`a-loja`,onOpen:()=>{}}),(0,T.jsx)(a,{...Y,id:`a-agente`,onOpen:()=>{}}),(0,T.jsx)(a,{...X,id:`a-lacunas`,onOpen:()=>{},highlighted:!0}),(0,T.jsx)(a,{variant:`art`,title:`Unidade Centro 04`,loading:!0})]})]})},Q=[`Padrao`,`Controles`,`Estados`,`TextoLongoEEstreito`,`ClaroEEscuro`,`Identidade`,`DestaqueGrafiteOuAzul`,`Enxuto`,`Arte`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Padrão",
  args: loja,
  render: () => <div className="story-stat">
      <p className="story-caption">Mesmo componente para loja, vendedora, agente e produto</p>
      <Grid prefix="p" />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Controles",
  args: loja,
  render: args => <div className="story-stat story-stat--one">
      <StatCard {...args} />
    </div>
}`,...F.parameters?.docs?.source},description:{story:"Um card só, pelos controles (sem `onOpen` ele fica estático).",...F.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Estados",
  args: loja,
  render: () => <div className="story-stat">
      <p className="story-caption">Sem leitura, sem meta, lacunas e devolução (destacado) e carregando: mesma altura</p>
      <div className="story-stat__grid">
        <StatCard {...semLeitura} id="e-sem-leitura" onOpen={() => {}} />
        <StatCard {...semMeta} id="e-sem-meta" onOpen={() => {}} />
        <StatCard {...lacunas} id="e-lacunas" onOpen={() => {}} highlighted />
        <StatCard title="Unidade Centro 04" loading />
      </div>
      <p className="story-caption">Estático (sem ação), sem posição e só com o número</p>
      <div className="story-stat__grid">
        <StatCard {...vendedora} rank={undefined} />
        <StatCard title="Resumo da equipe" overline="Equipe Norte" subtitle="18 pessoas" primary={{
        label: "Conversão média",
        value: "27,4%"
      }} stats={vendedora.stats} />
      </div>
    </div>
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Texto longo e container estreito",
  args: loja,
  render: () => <div className="story-stat">
      <p className="story-caption">240 px, 280 px e 400 px de container</p>
      <div className="story-stat__widths">
        <div style={{
        width: "15rem"
      }}>
          <StatCard {...longo} id="l-240" onOpen={() => {}} />
        </div>
        <div style={{
        width: "17.5rem"
      }}>
          <StatCard {...lacunas} id="l-280" onOpen={() => {}} />
        </div>
        <div style={{
        width: "25rem"
      }}>
          <StatCard {...longo} id="l-400" onOpen={() => {}} />
        </div>
      </div>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Claro e escuro",
  args: loja,
  render: () => <div className="story-v3__modes">
      <RbTheme mode="light" canvas className="story-v3__mode">
        <p className="story-caption">Claro (padrão)</p>
        <Grid prefix="claro" items={cards.slice(0, 2)} />
      </RbTheme>
      <RbTheme mode="dark" canvas className="story-v3__mode">
        <p className="story-caption">Escuro</p>
        <Grid prefix="escuro" items={cards.slice(0, 2)} />
      </RbTheme>
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Os dois modos lado a lado: o escuro sai do mesmo componente, só trocando tokens.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Identidade por tokens",
  args: loja,
  render: () => <div className="story-v3__modes">
      <RbTheme mode="light" canvas className="story-v3__mode" tokens={{
      accent: "#1f4fa0"
    }}>
        <p className="story-caption">Azul, claro</p>
        <Grid prefix="azul" items={cards.slice(0, 2)} />
      </RbTheme>
      <RbTheme mode="dark" canvas className="story-v3__mode" tokens={{
      accent: "#a99bff"
    }}>
        <p className="story-caption">Violeta, escuro</p>
        <Grid prefix="violeta" items={cards.slice(2, 4)} />
      </RbTheme>
    </div>
}`,...U.parameters?.docs?.source},description:{story:"A cor da barra e das formas muda por tokens (`accent`), sem editar o componente.",...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Destaque: grafite ou azul (token)",
  args: loja,
  render: () => <div className="story-v3__modes">
      <RbTheme mode="light" canvas className="story-v3__mode">
        <p className="story-caption">Grafite (padrão aprovado)</p>
        <Grid prefix="grafite" items={cards.slice(0, 2)} />
      </RbTheme>
      <RbTheme mode="light" canvas className="story-v3__mode" tokens={featuredBlue}>
        <p className="story-caption">Azul do indicador (alternativa em decisão)</p>
        <Grid prefix="azul-destaque" items={cards.slice(0, 2)} />
      </RbTheme>
      <RbTheme mode="dark" canvas className="story-v3__mode">
        <p className="story-caption">Grafite, escuro</p>
        <Grid prefix="grafite-escuro" items={cards.slice(0, 2)} />
      </RbTheme>
      <RbTheme mode="dark" canvas className="story-v3__mode" tokens={featuredBlue}>
        <p className="story-caption">Azul, escuro</p>
        <Grid prefix="azul-escuro" items={cards.slice(0, 2)} />
      </RbTheme>
    </div>
}`,...G.parameters?.docs?.source},description:{story:"O destaque do StatCard por token (0.4.0-rc.1): grafite é o padrão aprovado; o azul do indicador\nem destaque é a alternativa em decisão (`statFeaturedFrom`/`statFeaturedTo`).",...G.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Enxuto (plain)",
  args: {
    ...loja,
    variant: "plain",
    featured: undefined
  },
  render: () => <div className="story-stat">
      <p className="story-caption">variant="plain": um número com barra fina, fileira de 3 estatísticas e forma sem moldura</p>
      <Grid prefix="n" items={plainCards} />
      <div className="story-stat__grid">
        <StatCard {...semLeitura} variant="plain" id="n-sem-leitura" onOpen={() => {}} />
        <StatCard {...semMeta} variant="plain" id="n-sem-meta" onOpen={() => {}} />
        <StatCard {...lacunas} variant="plain" id="n-lacunas" onOpen={() => {}} />
        <StatCard variant="plain" title="Unidade Centro 04" loading />
      </div>
    </div>
}`,...q.parameters?.docs?.source},description:{story:`A anatomia enxuta, opcional: barra fina, fileira de estatísticas e forma com a referência em linha.`,...q.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Arte (rc.2)",
  args: lojaArte,
  render: () => <div className="story-stat">
      <p className="story-caption">variant="art": arte no topo, anel e grade de estatísticas com legendas</p>
      <div className="story-stat__grid">
        <StatCard {...lojaArte} id="a-loja" onOpen={() => {}} />
        <StatCard {...agenteArte} id="a-agente" onOpen={() => {}} />
        <StatCard {...lacunasArte} id="a-lacunas" onOpen={() => {}} highlighted />
        <StatCard variant="art" title="Unidade Centro 04" loading />
      </div>
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`A anatomia da 0.3.0-rc.2, opcional: arte em gradiente por tokens, anel, grade e vários selos.`,...Z.parameters?.docs?.description}}}})))()}export{x as n,$ as r,P as t};