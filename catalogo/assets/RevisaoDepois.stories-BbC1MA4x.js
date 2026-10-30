import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Bt as t,Q as n,Qt as r,Xt as i,Yt as a,_n as ee,ft as te,gn as ne,it as re,mt as ie,nn as ae,nt as oe,ot as se,rn as ce,t as o,ut as s}from"./src-lgDrkLBh.js";import{t as le}from"./jsx-runtime-MKhVqBIO.js";import{i as c,n as l,r as u,t as ue}from"./trending-down-CfzsRLwS.js";import{n as de,t as d}from"./store-D2Zsymtk.js";import{n as fe,t as pe}from"./user-round--OEEuz0a.js";import{n as me,t as he}from"./users-round-DDC7otS4.js";import{n as ge,t as f}from"./wallet-CkTOcWQF.js";import{f as p,g as m,n as h,t as g}from"./fixtures-BBJMtdSN.js";import{a as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./fixtures-smooth-fhbAfNb8.js";import{a as w,c as T,d as E,f as D,i as O,l as k,n as A,p as j,r as _e,s as M,t as N,u as P}from"./fixtures-revisao-zujU1umd.js";function F({context:e=T,children:t}){return(0,L.jsxs)(i,{...e,anatomy:`lean`,children:[(0,L.jsx)(`style`,{children:z}),(0,L.jsx)(`div`,{className:`rv-frame`,"data-rv-frame":!0,children:t})]})}function I({title:e,subtitle:t,children:n}){let i=a({status:`ready`,hasData:!0,locale:`pt-BR`});return(0,L.jsx)(r,{title:e,subtitle:t,frame:i,locale:`pt-BR`,children:n})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),c(),de(),ce(),l(),fe(),me(),ge(),o(),p(),y(),M(),L=le(),R={title:`Legado/Revisão antes × depois · 27 out`,id:`revisao-depois`,parameters:{layout:`fullscreen`,docs:{description:{component:`Revisão "antes × depois" do catálogo (27/10/2026), lado direito: as mesmas famílias e os mesmos
dados fictícios do lado esquerdo (0.3.0-rc.3), na linguagem smooth da 0.4.0. Cada história é uma
família, numa moldura de largura fixa, para a captura lado a lado em artifacts/review/antes-depois.`}}}},z=`.rv-frame{box-sizing:border-box;width:680px;padding:20px;display:grid;gap:16px}.rv-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:start}`,B={period:`Outubro 2026, até 17/10`,source:`ERP fictício`,updatedAt:m(6),now:g},V=k.map(e=>({id:e.id,label:e.label,title:e.title,values:{pedidos:e.pedidos,receita:e.receita}})),H={Dados:(0,L.jsx)(u,{}),Venda:(0,L.jsx)(ue,{}),Estoque:(0,L.jsx)(ne,{}),Meta:(0,L.jsx)(ae,{})},U=S.map(e=>({...e,icon:H[e.kind?.label??``]})),W=x.filter(e=>j.includes(e.id)),G={render:()=>(0,L.jsx)(F,{children:(0,L.jsxs)(`div`,{className:`rv-pair`,children:[(0,L.jsx)(s,{featured:!0,...D,icon:(0,L.jsx)(f,{}),format:N,comparison:w}),(0,L.jsx)(s,{...E,icon:(0,L.jsx)(he,{}),comparison:w})]})})},K={name:`StatCard`,render:()=>(0,L.jsx)(F,{children:(0,L.jsxs)(`div`,{className:`rv-pair`,children:[(0,L.jsx)(n,{id:`rv-loja`,..._e,emblem:(0,L.jsx)(d,{})}),(0,L.jsx)(n,{id:`rv-vendedora`,...O,emblem:(0,L.jsx)(pe,{})})]})})},q={render:()=>(0,L.jsx)(F,{children:(0,L.jsx)(I,{title:`Pedidos por mês`,subtitle:`Março a outubro de 2026`,children:(0,L.jsx)(ie,{label:`Pedidos por mês, março a outubro de 2026`,data:V,series:[{id:`pedidos`,label:`Pedidos`},{id:`receita`,label:`Receita`,format:A}],highlight:`max`,height:`13.5rem`})})})},J={render:()=>(0,L.jsx)(F,{children:(0,L.jsx)(I,{title:`Meta do trimestre`,subtitle:`Out–dez de 2026`,children:(0,L.jsx)(te,{value:P.value,label:P.label,caption:P.caption,size:`16.5rem`,children:(0,L.jsx)(t,{text:P.text})})})})},Y={name:`Evolução`,render:()=>(0,L.jsx)(F,{context:B,children:(0,L.jsx)(se,{title:`Venda acumulada`,subtitle:`Rede, 8 unidades: realizado, meta e previsão por dia`,data:_,format:C,locale:`pt-BR`,timeZone:h,methodology:{formula:`Venda líquida das 8 unidades, acumulada dia a dia. Dados fictícios.`}})})},X={render:()=>(0,L.jsx)(F,{context:B,children:(0,L.jsx)(re,{title:`Comparação das unidades`,subtitle:`Até 16/10, última data comparável`,icon:(0,L.jsx)(d,{}),data:v,columns:W,rowHeader:`Unidade`,presets:b,grouped:!1,locale:`pt-BR`,timeZone:h,cardBreakpoint:480,onRowAction:()=>void 0})})},Z={render:()=>(0,L.jsx)(F,{context:B,children:(0,L.jsx)(oe,{title:`Prioridades`,criterion:`pendências de dados primeiro; depois, maior diferença negativa para a meta`,items:U,initialCount:3,locale:`pt-BR`})})},Q=[`Indicador`,`Cards`,`Colunas`,`Medidor`,`Evolucao`,`Tabela`,`Prioridades`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <div className="rv-pair">
        <TrendIndicator featured {...rv.receitaMes} icon={<Wallet />} format={rv.brl} comparison={rv.comparacaoMes} />
        <TrendIndicator {...rv.novosClientes} icon={<UsersRound />} comparison={rv.comparacaoMes} />
      </div>
    </Frame>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "StatCard",
  render: () => <Frame>
      <div className="rv-pair">
        <StatCard id="rv-loja" {...rv.cardLoja} emblem={<Store />} />
        <StatCard id="rv-vendedora" {...rv.cardVendedora} emblem={<UserRound />} />
      </div>
    </Frame>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <FramedPanel title="Pedidos por mês" subtitle="Março a outubro de 2026">
        <ColumnChart label="Pedidos por mês, março a outubro de 2026" data={months} series={[{
        id: "pedidos",
        label: "Pedidos"
      }, {
        id: "receita",
        label: "Receita",
        format: rv.brlCompact
      }]} highlight="max" height="13.5rem" />
      </FramedPanel>
    </Frame>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <FramedPanel title="Meta do trimestre" subtitle="Out–dez de 2026">
        <SegmentedGauge value={rv.metaTrimestre.value} label={rv.metaTrimestre.label} caption={rv.metaTrimestre.caption} size="16.5rem">
          <Figure text={rv.metaTrimestre.text} />
        </SegmentedGauge>
      </FramedPanel>
    </Frame>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Evolução",
  render: () => <Frame context={etapa2}>
      <EvolutionChart title="Venda acumulada" subtitle="Rede, 8 unidades: realizado, meta e previsão por dia" data={sx.smoothEvolution} format={sx.brlExact} locale="pt-BR" timeZone={fx.TIME_ZONE} methodology={{
      formula: "Venda líquida das 8 unidades, acumulada dia a dia. Dados fictícios."
    }} />
    </Frame>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Frame context={etapa2}>
      <ComparisonTable title="Comparação das unidades" subtitle="Até 16/10, última data comparável" icon={<Store />} data={sx.smoothComparisonData} columns={columns} rowHeader="Unidade" presets={sx.smoothPresets} grouped={false} locale="pt-BR" timeZone={fx.TIME_ZONE} cardBreakpoint={480} onRowAction={() => undefined} />
    </Frame>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Frame context={etapa2}>
      <PriorityList title="Prioridades" criterion="pendências de dados primeiro; depois, maior diferença negativa para a meta" items={priorities} initialCount={3} locale="pt-BR" />
    </Frame>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as Cards,q as Colunas,Y as Evolucao,G as Indicador,J as Medidor,Z as Prioridades,X as Tabela,Q as __namedExportsOrder,R as default};