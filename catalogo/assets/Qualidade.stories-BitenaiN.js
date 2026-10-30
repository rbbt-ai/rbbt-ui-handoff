import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n,t as r}from"./src-lgDrkLBh.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{i as a,r as o,t as s}from"./fixtures-operacao-B-RwJqeV.js";var c=t({Carregando:()=>p,CoberturaDesconhecida:()=>f,Erro:()=>m,Padrao:()=>d,TitulosDoCliente:()=>h,__namedExportsOrder:()=>g,default:()=>u}),l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),l=i(),u={title:`Widgets/Qualidade`,id:`widgets-qualidade`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Qualidade dos dados (0.5.0): cards de confiança (cobertura, fonte e posição, mesmo universo), mapa de cobertura por unidade com busca e ordenação, e "Origem e fórmula". Sem leitura é ausência, nunca zero.`}}},args:{title:`Mapa de cobertura`,subtitle:`Rede fictícia · leitura por loja`,coverage:{covered:8,total:10,unit:`lojas`,note:`Com dados no período. Cenário fictício.`},snapshot:{value:`26/10/2026, 06:00`,note:`Posição do último snapshot. Última venda e sincronização são diferentes.`},universe:{value:`8 lojas comparáveis`,note:`Comparações excluem lojas sem leitura.`},units:o,now:s,methodology:{source:`Base fictícia de vendas`,formula:`Receita = vendas − cancelamentos − devoluções.`,coverage:`Loja com dados = receita numérica no período.`}},decorators:[e=>(0,l.jsx)(`div`,{style:{padding:`1.5rem`},children:(0,l.jsx)(e,{})})]},d={name:`Padrão`},f={name:`Cobertura desconhecida`,args:{coverage:{covered:null,total:null,unit:`lojas`}}},p={args:{status:`loading`,units:null}},m={args:{status:`error`,units:null,onRetry:()=>void 0}},h={name:`Títulos do cliente`,args:{coverage:{covered:8,total:10,unit:`lojas`,label:`Lojas com dados`,note:`Com dados no período. Cenário fictício.`},snapshot:{value:`Snapshot demonstrativo`,label:`Snapshot de 26/10, 06:00`,note:`Última venda e sincronização são diferentes.`},universe:{value:`8 lojas comparáveis`,label:`Mesmo universo nas comparações`,note:`Comparações excluem lojas sem leitura.`},methodologyTitle:`Origem e fórmula, sempre disponíveis.`}},g=[`Padrao`,`CoberturaDesconhecida`,`Carregando`,`Erro`,`TitulosDoCliente`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Padrão"
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Cobertura desconhecida",
  args: {
    coverage: {
      covered: null,
      total: null,
      unit: "lojas"
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: "loading",
    units: null
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    units: null,
    onRetry: () => undefined
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Títulos do cliente",
  args: {
    coverage: {
      covered: 8,
      total: 10,
      unit: "lojas",
      label: "Lojas com dados",
      note: "Com dados no período. Cenário fictício."
    },
    snapshot: {
      value: "Snapshot demonstrativo",
      label: "Snapshot de 26/10, 06:00",
      note: "Última venda e sincronização são diferentes."
    },
    universe: {
      value: "8 lojas comparáveis",
      label: "Mesmo universo nas comparações",
      note: "Comparações excluem lojas sem leitura."
    },
    methodologyTitle: "Origem e fórmula, sempre disponíveis."
  }
}`,...h.parameters?.docs?.source},description:{story:"Títulos do cliente nos cards e no bloco de método (0.5.0-rc.2): `label` em cada card e\n`methodologyTitle`. Sem eles, ficam os textos padrão do pacote.",...h.parameters?.docs?.description}}}})))()}export{c as n,_ as r,d as t};