import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{br as n,o as r,s as i,t as a,yr as o}from"./src-BEw3PAEi.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{i as c,n as l,r as u,t as d}from"./fixtures-reports-B7xsLJbm.js";var f=t({Escuro:()=>b,Estados:()=>y,Estreito360:()=>C,Glass:()=>x,GlassEscuro:()=>S,Padrao:()=>_,__namedExportsOrder:()=>w,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),a(),l(),p=s(),{fn:m}=__STORYBOOK_MODULE_TEST__,h=(0,p.jsx)(o,{"aria-hidden":`true`,strokeWidth:2}),g={title:`Reports/Verso`,id:`reports-report-dialog`,component:i,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:"Modal até 1100 px; até 640 px vira tela cheia, com fundo opaco. Entra girando a partir da carta (Motion); com movimento reduzido, só aparece. Sem rede nem polling: o consumidor atualiza `card.run` e `detail` pelas props."}}},args:{isOpen:!0,card:u[0],detail:c.P01,icon:h,timeZone:d,onClose:m(),onRerun:m(),onRetry:m(),onCopyLink:m()},argTypes:{card:{control:!1},detail:{control:!1},icon:{control:!1},portalContainer:{control:!1}}},_={name:`Padrão`},v=[{caption:`idle`,card:u[6],run:{state:`idle`}},{caption:`queued · posição na fila`,card:u[5]},{caption:`running · desde hh:mm`,card:u[7]},{caption:`updated`,card:u[0]},{caption:`blocked · motivo`,card:u[9]},{caption:`failed · Tentar de novo`,card:u[1]}],y={render:e=>(0,p.jsx)(`div`,{style:{display:`grid`,gap:32,padding:24,maxWidth:1100},children:v.map(({caption:t,card:n,run:i},a)=>(0,p.jsxs)(`figure`,{style:{margin:0,display:`grid`,gap:8},children:[(0,p.jsx)(`figcaption`,{style:{fontSize:13,color:`var(--rb-fg-muted)`},children:t}),(0,p.jsx)(r,{card:i?{...n,run:i}:n,detail:c[n.id],titleId:`rp-estado-${a}`,icon:e.icon,onRerun:e.onRerun,onRetry:e.onRetry,onCopyLink:e.onCopyLink,timeZone:d})]},t))})},b={globals:{rbMode:`dark`}},x={globals:{rbFamily:`glass`}},S={name:`Glass escuro`,globals:{rbFamily:`glass`,rbMode:`dark`}},C={name:`Estreito 360`,args:{card:u[5],detail:c.P06},parameters:{viewport:{defaultViewport:`mobile1`}},globals:{viewport:{value:`mobile1`,isRotated:!1}}},w=[`Padrao`,`Estados`,`Escuro`,`Glass`,`GlassEscuro`,`Estreito360`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,..._.parameters?.docs?.source},description:{story:`P01 · pronto, com evolução diária, tabela por loja e o histórico.`,..._.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: 32,
    padding: 24,
    maxWidth: 1100
  }}>
      {RUNS.map(({
      caption,
      card,
      run
    }, index) => <figure key={caption} style={{
      margin: 0,
      display: "grid",
      gap: 8
    }}>
          <figcaption style={{
        fontSize: 13,
        color: "var(--rb-fg-muted)"
      }}>{caption}</figcaption>
          <ReportBack card={run ? {
        ...card,
        run
      } : card} detail={rpDetails[card.id]!} titleId={\`rp-estado-\${index}\`} icon={args.icon} onRerun={args.onRerun} onRetry={args.onRetry} onCopyLink={args.onCopyLink} timeZone={RP_TIME_ZONE} />
        </figure>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Os seis estados da execução no rodapé (verso sem modal, `ReportBack`).",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    rbMode: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    rbFamily: "glass"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Glass escuro",
  globals: {
    rbFamily: "glass",
    rbMode: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Estreito 360",
  args: {
    card: rpCards[5]!,
    detail: rpDetails.P06!
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`Tela cheia num celular de 360 px (P06: parcial, na fila).`,...C.parameters?.docs?.description}}}})))()}export{T as n,f as t};