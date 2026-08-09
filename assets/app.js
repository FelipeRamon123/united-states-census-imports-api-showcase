
const state={
  lang:"en",
  year:null,
  prevYear:null,
  metric:"general",
  country:"",
  filterCode:"",
  filterLevel:null,
  chartLevel:"10",
  tableLevel:"10",

  manifest:null,
  summary:null,
  countries:[],
  countryPt:{},
  products:[],
  catalog:[],
  catalogMap:{},
  hs2Titles:{},
  ptNomenclature:{},
  productRankings:null,
  searchIndex:[],
  searchValueMaps:{"2":{},"4":{},"6":{},"10":{}},

  countryDataCache:{},
  chapterCache:{},
  filteredCurrent:[],
  filteredPrevious:[]
};

const L={
en:{
  eyebrow:"OPEN TRADE INTELLIGENCE · SHOWCASE",
  subtitle:"A simple way to explore U.S. import data and understand what each number is actually useful for.",
  records:"records",
  githubTag:"GO BEYOND THE DASHBOARD",githubTitle:"Reproduce this query and explore other ways to use the API.",githubText:"The Official Data API Toolkit includes Power Query and Python examples for U.S. Census imports, exports, countries, ports, classifications and customs treatment.",
  openRepo:"Explore the toolkit",allExamples:"All examples",showcaseCode:"Code used by this showcase",dataset:"2024–2025 dataset",release:"GitHub Release",
  beforeTag:"BEFORE YOU START",codesTitle:"HTSUS in the U.S., NCM in Brazil. The first 6 digits are the common base.",codesIntro:"The common language is the Harmonized System. After digit 6, each market can open the code in a different way.",
  usa:"United States",brazil:"Brazil",example:"Ex:",htsExample:"8708.30 is already an HS6 code. The last 4 digits add U.S.-specific detail.",ncmExample:"Brazil keeps the same HS6 base and adds 2 Mercosur digits.",
  tip:"PRACTICAL TIP",compareTitle:"Comparing countries? Start at HS6.",compareExample:"To compare a U.S. HTSUS10 with a Brazilian NCM8, first go back to the common 6-digit code. After that, use a concordance if you need more detail.",
  numbersTag:"WHAT DO THESE NUMBERS MEAN?",numbersTitle:"Four measures. Four different uses.",numbersIntro:"The important part is knowing which one fits the question you are trying to answer.",
  generalImports:"General imports",consumptionImports:"Imports for consumption",dutiableValue:"Dutiable value",calculatedDuties:"Calculated duties",
  generalPlain:"Everything that physically arrived in the U.S.",generalExample:"A shipment arrives and goes to a bonded warehouse. It already counts here.",useFor:"Use for:",generalUse:"the broadest view of import flows entering the country.",
  consumptionPlain:"What was cleared to enter U.S. consumption channels.",consumptionExample:"That same shipment leaves the bonded warehouse two months later. It counts here at that moment.",consumptionUse:"questions closer to market entry, customs and tariffs.",
  dutiablePlain:"The part of consumption imports that was subject to duty.",dutiableExample:"US$100m entered for consumption and US$40m was dutiable. Then 40% of the flow was exposed to duty.",dutiableUse:"seeing how much of the imported value was actually dutiable.",
  dutiesPlain:"The Census estimate of duties calculated on the imports.",dutiesExample:"US$2m in calculated duties over US$40m dutiable value gives an observed effective rate of 5%.",careful:"Careful:",dutiesCareful:"this is not the legal tariff rate and may not equal what was actually paid.",
  sources:"Official references:",exploreTag:"EXPLORE THE DATA",exploreTitle:"Choose a product, a supplier or just browse the rankings.",
  year:"Year",product:"HS2, HS4, HS6, HTSUS10 or product",country:"Supplier country",metric:"Ranking metric",reset:"Reset filters",
  pathTag:"CLASSIFICATION PATH",changeTag:"WHAT CHANGED?",generalChange:"General imports",dutiableShare:"Dutiable share of consumption",effectiveRate:"Calculated duties / dutiable value",
  suppliers:"SUPPLIERS",productsLabel:"PRODUCTS",chartLevel:"Chart level",tableLevel:"Table level",compare:"COMPARE",
  methodTitle:"What this showcase does not replace",methodText:"Use it to explore the data and learn the concepts. For a legal tariff, trade remedy or exact classification decision, go back to the official source.",
  footerSource:"Trade data: U.S. Census Bureau. HTS labels: USITC annual references. Portuguese HS labels: Receita Federal TIPI/NCM.",
  allCountries:"All countries",overview:"Overview",topCountries:"Top supplier countries",topProducts:"Top imported products",selectedProductDetails:"Selected product",
  suppliersFor:"Supplier countries for",productsFrom:"Top products from",within:"within",rank:"Rank",code:"Code",description:"Description",
  previous:"Previous",variation:"Change",share:"Share",shareChange:"Share change",noBase:"No prior-year base",noPrevValue:"No value in prior year",
  noDutiableBase:"No dutiable value",noConsumptionBase:"No consumption value",vs:"vs",baseYear:"Base year",
  noResults:"No matching code or product found",filter:"Filter",officialUS:"U.S. official detail",productPlaceholder:"87, 8708, 870830, 8708305090 or brakes",translationDisclaimer:"Language note: Portuguese HS2, HS4 and HS6 labels follow official Brazilian nomenclature. HTS8 and HTSUS10 are U.S.-specific; whenever a Portuguese adaptation is used at those levels, it is an AI-assisted free translation for readability, not official nomenclature. The USITC English text remains the reference.",dashboardSource:"View dashboard source"
},
pt:{
  eyebrow:"INTELIGÊNCIA DE COMÉRCIO EXTERIOR · SHOWCASE",
  subtitle:"Uma forma simples de explorar as importações dos EUA e entender para que cada número realmente serve.",
  records:"registros",
  githubTag:"QUER IR ALÉM DESTE PAINEL?",githubTitle:"Reproduza esta consulta e explore outras formas de usar a API.",githubText:"No Official Data API Toolkit você encontra exemplos em Power Query e Python para importações, exportações, países, portos, classificações e tratamento aduaneiro no U.S. Census.",
  openRepo:"Explorar o toolkit",allExamples:"Todos os exemplos",showcaseCode:"Código usado neste showcase",dataset:"Base 2024–2025",release:"Release no GitHub",
  beforeTag:"ANTES DE COMEÇAR",codesTitle:"HTSUS nos EUA, NCM no Brasil. Os 6 primeiros dígitos têm a mesma base.",codesIntro:"A linguagem comum é o Sistema Harmonizado. Depois do 6º dígito, cada mercado pode abrir o código de um jeito diferente.",
  usa:"Estados Unidos",brazil:"Brasil",example:"Ex:",htsExample:"8708.30 já é um código SH6. Os 4 últimos dígitos acrescentam o detalhamento específico dos EUA.",ncmExample:"O Brasil mantém a mesma base SH6 e acrescenta 2 dígitos definidos no Mercosul.",
  tip:"DICA PRÁTICA",compareTitle:"Vai comparar países? Comece pelo SH6.",compareExample:"Para comparar um HTSUS10 dos EUA com uma NCM8 brasileira, primeiro volte ao código comum de 6 dígitos. Depois, use uma correspondência se precisar de mais detalhe.",
  numbersTag:"O QUE ESSES NÚMEROS QUEREM DIZER?",numbersTitle:"Quatro medidas. Quatro usos diferentes.",numbersIntro:"O mais importante é saber qual delas faz sentido para a pergunta que você quer responder.",
  generalImports:"Importações gerais",consumptionImports:"Importações para consumo",dutiableValue:"Valor sujeito a tarifa",calculatedDuties:"Direitos calculados",
  generalPlain:"Tudo que chegou fisicamente aos EUA.",generalExample:"Uma carga chega e vai para um armazém alfandegado. Ela já entra nas importações gerais.",useFor:"Use para:",generalUse:"ter a visão mais ampla do fluxo que entrou fisicamente no país.",
  consumptionPlain:"O que foi liberado para entrar nos canais de consumo dos EUA.",consumptionExample:"A mesma carga sai do armazém dois meses depois. Ela entra nas importações para consumo nesse momento.",consumptionUse:"análises mais próximas de entrada no mercado, alfândega e tarifas.",
  dutiablePlain:"A parte das importações para consumo que ficou sujeita a direito de importação.",dutiableExample:"Entraram US$100 mi para consumo e US$40 mi eram dutiable. Então 40% daquele fluxo ficou sujeito a direito.",dutiableUse:"entender quanto do valor importado ficou efetivamente sujeito a direito.",
  dutiesPlain:"A estimativa do Census para os direitos calculados nas importações.",dutiesExample:"US$2 mi de direitos calculados sobre US$40 mi de valor dutiable dão uma taxa efetiva observada de 5%.",careful:"Cuidado:",dutiesCareful:"isso não é a alíquota legal do produto e pode não ser igual ao valor efetivamente pago.",
  sources:"Referências oficiais:",exploreTag:"EXPLORE OS DADOS",exploreTitle:"Escolha um produto, um fornecedor ou navegue pelos rankings.",
  year:"Ano",product:"SH2, SH4, SH6, HTSUS10 ou produto",country:"País fornecedor",metric:"Métrica do ranking",reset:"Limpar filtros",
  pathTag:"CAMINHO DA CLASSIFICAÇÃO",changeTag:"O QUE MUDOU?",generalChange:"Importações gerais",dutiableShare:"Parcela dutiable do consumo",effectiveRate:"Direitos calculados / valor dutiable",
  suppliers:"FORNECEDORES",productsLabel:"PRODUTOS",chartLevel:"Nível do gráfico",tableLevel:"Nível da tabela",compare:"COMPARAR",
  methodTitle:"O que este showcase não substitui",methodText:"Use para explorar os dados e entender os conceitos. Para tarifa legal, defesa comercial ou uma decisão exata de classificação, volte à fonte oficial.",
  footerSource:"Dados de comércio: U.S. Census Bureau. HTS: USITC. Nomes SH em português: TIPI/NCM da Receita Federal.",
  allCountries:"Todos os países",overview:"Visão geral",topCountries:"Principais países fornecedores",topProducts:"Principais produtos importados",selectedProductDetails:"Produto selecionado",
  suppliersFor:"Países fornecedores de",productsFrom:"Principais produtos de",within:"dentro de",rank:"Posição",code:"Código",description:"Descrição",
  previous:"Ano anterior",variation:"Variação",share:"Participação",shareChange:"Mudança na participação",noBase:"Sem base no ano anterior",noPrevValue:"Sem valor no ano anterior",
  noDutiableBase:"Sem valor dutiable",noConsumptionBase:"Sem valor de consumo",vs:"vs.",baseYear:"Ano-base",
  noResults:"Nenhum código ou produto encontrado",filter:"Filtro",officialUS:"Detalhe oficial dos EUA",productPlaceholder:"87, 8708, 870830, 8708305090 ou freios",translationDisclaimer:"Nota de idioma: os nomes em SH2, SH4 e SH6 seguem a nomenclatura oficial brasileira (NCM/TIPI). HTS8 e HTSUS10 são desdobramentos específicos dos EUA; quando houver adaptação para o português nesses níveis, ela é uma tradução livre assistida por IA apenas para facilitar a leitura, e não uma nomenclatura oficial. A referência continua sendo o texto em inglês da USITC.",dashboardSource:"Ver código do dashboard"
}};

const MI={general:0,consumption:1,dutiable:2,duties:3};
const C={bronze:"#B87544",beige:"#D7C9B6",brown:"#6B4A36",text:"#F4EEE5",muted:"#AFA59A",grid:"rgba(215,201,182,.12)"};

function t(k){return L[state.lang][k]||k}
async function loadJSON(path){const r=await fetch(path);if(!r.ok)throw new Error(`Could not load ${path}`);return r.json()}
function usd(v){const n=Number(v||0);if(Math.abs(n)>=1e12)return "$"+(n/1e12).toFixed(2)+"T";if(Math.abs(n)>=1e9)return "$"+(n/1e9).toFixed(2)+"B";if(Math.abs(n)>=1e6)return "$"+(n/1e6).toFixed(2)+"M";if(Math.abs(n)>=1e3)return "$"+(n/1e3).toFixed(1)+"K";return "$"+n.toLocaleString()}
function full(v){return "$"+Number(v||0).toLocaleString(state.lang==="pt"?"pt-BR":"en-US",{maximumFractionDigits:0})}
function pct(v){return Number.isFinite(v)?v.toFixed(2)+"%":t("noBase")}
function pp(v){return Number.isFinite(v)?(v>0?"+":"")+v.toFixed(2)+" pp":t("noBase")}
function yoy(a,b){return Number(b)!==0?100*(Number(a)-Number(b))/Number(b):null}
function change(a,b){a=Number(a||0);b=Number(b||0);if(b===0&&a>0)return t("noPrevValue");if(b===0)return t("noBase");const x=yoy(a,b);return (x>0?"+":"")+x.toFixed(1)+"%"}
function trunc(s,n=46){s=String(s||"");return s.length>n?s.slice(0,n-1)+"…":s}

function compactMoney(v,decimals=1){
  const n=Number(v||0),abs=Math.abs(n);
  if(state.lang==="pt"){
    if(abs>=1e12)return "US$ "+(n/1e12).toLocaleString("pt-BR",{maximumFractionDigits:decimals})+" tri";
    if(abs>=1e9)return "US$ "+(n/1e9).toLocaleString("pt-BR",{maximumFractionDigits:decimals})+" bi";
    if(abs>=1e6)return "US$ "+(n/1e6).toLocaleString("pt-BR",{maximumFractionDigits:decimals})+" mi";
    if(abs>=1e3)return "US$ "+(n/1e3).toLocaleString("pt-BR",{maximumFractionDigits:decimals})+" mil";
    return "US$ "+n.toLocaleString("pt-BR",{maximumFractionDigits:0});
  }
  if(abs>=1e12)return "$"+(n/1e12).toLocaleString("en-US",{maximumFractionDigits:decimals})+"T";
  if(abs>=1e9)return "$"+(n/1e9).toLocaleString("en-US",{maximumFractionDigits:decimals})+"B";
  if(abs>=1e6)return "$"+(n/1e6).toLocaleString("en-US",{maximumFractionDigits:decimals})+"M";
  if(abs>=1e3)return "$"+(n/1e3).toLocaleString("en-US",{maximumFractionDigits:decimals})+"K";
  return "$"+n.toLocaleString("en-US",{maximumFractionDigits:0});
}

function compactAxis(v){
  const n=Number(v||0),abs=Math.abs(n);
  if(state.lang==="pt"){
    if(abs>=1e12)return (n/1e12).toLocaleString("pt-BR",{maximumFractionDigits:1})+" tri";
    if(abs>=1e9)return (n/1e9).toLocaleString("pt-BR",{maximumFractionDigits:1})+" bi";
    if(abs>=1e6)return (n/1e6).toLocaleString("pt-BR",{maximumFractionDigits:1})+" mi";
    if(abs>=1e3)return (n/1e3).toLocaleString("pt-BR",{maximumFractionDigits:1})+" mil";
    return n.toLocaleString("pt-BR",{maximumFractionDigits:0});
  }
  if(abs>=1e12)return (n/1e12).toLocaleString("en-US",{maximumFractionDigits:1})+"T";
  if(abs>=1e9)return (n/1e9).toLocaleString("en-US",{maximumFractionDigits:1})+"B";
  if(abs>=1e6)return (n/1e6).toLocaleString("en-US",{maximumFractionDigits:1})+"M";
  if(abs>=1e3)return (n/1e3).toLocaleString("en-US",{maximumFractionDigits:1})+"K";
  return n.toLocaleString("en-US",{maximumFractionDigits:0});
}

function niceTicks(values,count=6){
  const max=Math.max(...values.map(Number),0);
  if(max<=0)return {vals:[0],text:["0"]};
  const rough=max/Math.max(1,count-1);
  const magnitude=Math.pow(10,Math.floor(Math.log10(rough)));
  const residual=rough/magnitude;
  let nice;
  if(residual<=1)nice=1;
  else if(residual<=2)nice=2;
  else if(residual<=2.5)nice=2.5;
  else if(residual<=5)nice=5;
  else nice=10;
  const step=nice*magnitude;
  const top=Math.ceil(max/step)*step;
  const vals=[];
  for(let v=0;v<=top+step*.1;v+=step)vals.push(v);
  return {vals,text:vals.map(compactAxis)};
}


function setupLinks(){
  const cfg=window.SITE_CONFIG||{};
  const owner=String(cfg.githubOwner||"").trim();
  if(!owner)return;

  const branch=cfg.branch||"main";
  const toolkitRepo=cfg.toolkitRepo||"official-data-api-toolkit";
  const showcaseRepo=cfg.showcaseRepo||"united-states-census-imports-api-showcase";
  const toolkitBase=`https://github.com/${owner}/${toolkitRepo}`;
  const showcaseBase=`https://github.com/${owner}/${showcaseRepo}`;

  const links={
    repoLink:toolkitBase,
    powerQueryLink:`${toolkitBase}/blob/${branch}/${cfg.powerQueryPath}`,
    pythonLink:`${toolkitBase}/blob/${branch}/${cfg.pythonPath}`,
    datasetLink:`${showcaseBase}/releases/latest/download/${cfg.datasetAsset}`
  };

  Object.entries(links).forEach(([id,url])=>{
    const a=document.getElementById(id);
    if(!a)return;
    a.href=url;
    a.target="_blank";
    a.classList.remove("disabled");
  });

  if(typeof dashboardRepoLink!=="undefined"&&dashboardRepoLink){
    dashboardRepoLink.href=showcaseBase;
    dashboardRepoLink.classList.remove("hidden");
  }
}

function countryRow(code){return state.countries.find(r=>r[0]===code)}
function countryName(code){
  if(state.lang==="pt")return state.countryPt[code]||countryRow(code)?.[1]||code;
  return countryRow(code)?.[1]||code;
}
function productRow(code){return state.products.find(r=>r[0]===code)}
function catalogRow(code){return state.catalogMap[code]}

function levelName(level){
  if(level==="10")return "HTSUS10";
  return (state.lang==="pt"?"SH":"HS")+level;
}

function descFor(code,enDesc){
  code=String(code);
  const level=String(code.length);

  if(state.lang==="en")return enDesc||code;

  if(level==="2"){
    return state.ptNomenclature["2"]?.[code]||enDesc||code;
  }
  if(level==="4"||level==="6"){
    return state.ptNomenclature[level]?.[code]||enDesc||code;
  }

  // HTS8 / HTS10 are U.S.-specific. Keep the official U.S. detail
  // but add the common HS6 context in Portuguese.
  const pt6=state.ptNomenclature["6"]?.[code.slice(0,6)];
  if(pt6&&enDesc)return `${pt6} · ${enDesc}`;
  return enDesc||code;
}

function buildLevelMaps(){
  const maps={"2":{},"4":{},"6":{},"10":{}};
  state.catalog.forEach(r=>{
    maps["10"][r[0]]=r[1];
    maps["4"][r[0].slice(0,4)]=r[3];
    maps["6"][r[0].slice(0,6)]=r[4];
  });
  Object.entries(state.hs2Titles).forEach(([code,obj])=>maps["2"][code]=obj.en);
  state.levelMaps=maps;
}

function buildSearchValueMaps(){
  const maps={"2":{},"4":{},"6":{},"10":{}};
  state.products.forEach(r=>{
    const code=r[0],general=Number(r[1]||0);
    maps["10"][code]=general;
    ["2","4","6"].forEach(level=>{
      const prefix=code.slice(0,Number(level));
      maps[level][prefix]=(maps[level][prefix]||0)+general;
    });
  });
  state.searchValueMaps=maps;
}

function buildSearchIndex(){
  const seen=new Set(),out=[];
  const push=(level,code,en)=>{
    const key=`${level}-${code}`;
    if(seen.has(key))return;
    seen.add(key);
    const pt=descFor(code,en);
    out.push({level:String(level),code,en,pt});
  };

  Object.entries(state.levelMaps["2"]).forEach(([c,d])=>push(2,c,d));
  Object.entries(state.levelMaps["4"]).forEach(([c,d])=>push(4,c,d));
  Object.entries(state.levelMaps["6"]).forEach(([c,d])=>push(6,c,d));
  Object.entries(state.levelMaps["10"]).forEach(([c,d])=>push(10,c,d));

  state.searchIndex=out;
}

async function loadYear(year){
  state.year=Number(year);
  state.prevYear=state.manifest.previousYear[String(year)];
  const b=`data/${year}`;

  [
    state.summary,state.countries,state.products,state.catalog,
    state.productRankings,state.hs2Titles,state.ptNomenclature,state.countryPt
  ]=await Promise.all([
    loadJSON(`${b}/summary.json`),
    loadJSON(`${b}/countries.json`),
    loadJSON(`${b}/products.json`),
    loadJSON(`${b}/product_catalog.json`),
    loadJSON(`${b}/product_rankings.json`),
    loadJSON(`data/hs2_titles.json`),
    loadJSON(`data/pt_nomenclature.json`),
    loadJSON(`data/country_names_pt.json`)
  ]);

  state.catalogMap=Object.fromEntries(state.catalog.map(r=>[r[0],r]));
  buildLevelMaps();
  buildSearchValueMaps();
  buildSearchIndex();

  state.country="";
  state.filterCode="";
  state.filterLevel=null;
  state.filteredCurrent=[];
  state.filteredPrevious=[];
  productSearch.value="";
  refreshLevelOptions();
  populateCountries();
  await updateAll();
}

function populateCountries(){
  const current=state.country;
  countrySelect.innerHTML=`<option value="">${t("allCountries")}</option>`;
  state.countries
    .slice()
    .sort((a,b)=>countryName(a[0]).localeCompare(countryName(b[0]),state.lang==="pt"?"pt-BR":"en"))
    .forEach(r=>{
      const o=document.createElement("option");
      o.value=r[0];o.textContent=countryName(r[0]);countrySelect.appendChild(o);
    });
  countrySelect.value=current;
}

async function countryData(year,code){
  if(!year||!code)return[];
  const k=`${year}-${code}`;
  if(!state.countryDataCache[k]){
    try{state.countryDataCache[k]=await loadJSON(`data/${year}/countries_data/${code}.json`)}
    catch(e){state.countryDataCache[k]=[]}
  }
  return state.countryDataCache[k];
}

async function chapterData(year,hs2){
  if(!year||!hs2)return[];
  const k=`${year}-${hs2}`;
  if(!state.chapterCache[k]){
    try{state.chapterCache[k]=await loadJSON(`data/${year}/chapters/${hs2}.json`)}
    catch(e){state.chapterCache[k]=[]}
  }
  return state.chapterCache[k];
}

async function setProductFilter(code,level){
  code=String(code);
  level=String(level);

  state.filterCode=code;
  state.filterLevel=level;
  productSearch.value=code;
  suggestions.classList.add("hidden");

  const hs2=code.slice(0,2);
  const [cur,prev]=await Promise.all([
    chapterData(state.year,hs2),
    state.prevYear?chapterData(state.prevYear,hs2):Promise.resolve([])
  ]);

  state.filteredCurrent=cur.filter(r=>r[1].startsWith(code));
  state.filteredPrevious=prev.filter(r=>r[1].startsWith(code));

  // Start one level deeper when possible. Levels broader than the active
  // filter are hidden because they would show only a partial parent total.
  const next=level==="2"?"4":level==="4"?"6":"10";
  state.chartLevel=next;
  state.tableLevel=next;
  productLevelSelect.value=next;
  tableLevelSelect.value=next;
  refreshLevelOptions();

  await updateAll();
}

async function selectCountry(code){
  state.country=code;
  countrySelect.value=code;
  if(code){
    await countryData(state.year,code);
    if(state.prevYear)await countryData(state.prevYear,code);
  }
  await updateAll();
}

function rowsInScope(current=true){
  let rows;

  if(state.filterCode){
    rows=(current?state.filteredCurrent:state.filteredPrevious).slice();
  }else if(state.country){
    // Country-only scope.
    return null; // loaded asynchronously in scopedRankings / metrics
  }else{
    return null;
  }

  if(state.country)rows=rows.filter(r=>r[0]===state.country);
  return rows;
}

async function metrics(current=true){
  // Product filter uses chapter rows, optionally narrowed to one country.
  if(state.filterCode){
    const rows=rowsInScope(current)||[];
    const sums=[0,0,0,0];
    rows.forEach(r=>{for(let i=0;i<4;i++)sums[i]+=Number(r[i+2]||0)});
    return sums;
  }

  if(state.country){
    const r=countryRow(state.country);
    if(!r)return[0,0,0,0];
    return current?[r[2],r[3],r[4],r[5]]:[r[7],r[8],r[9],r[10]];
  }

  const x=current?state.summary.totals:(state.summary.previousTotals||{});
  return [x.general||0,x.consumption||0,x.dutiable||0,x.duties||0];
}

function aggregateRows(rows,level){
  const map={};
  rows.forEach(r=>{
    const code=r[1].slice(0,Number(level));
    if(!map[code])map[code]=[0,0,0,0];
    for(let i=0;i<4;i++)map[code][i]+=Number(r[i+2]||0);
  });
  return map;
}

async function scopedRankings(level){
  level=String(level);

  // Global overview can use prebuilt top lists.
  if(!state.filterCode&&!state.country){
    return state.productRankings[level]?.[state.metric]||[];
  }

  let curRows,prevRows;

  if(state.filterCode){
    curRows=state.filteredCurrent;
    prevRows=state.filteredPrevious;
    if(state.country){
      curRows=curRows.filter(r=>r[0]===state.country);
      prevRows=prevRows.filter(r=>r[0]===state.country);
    }
  }else{
    curRows=await countryData(state.year,state.country);
    prevRows=state.prevYear?await countryData(state.prevYear,state.country):[];
    // countries_data rows: [HTS10, G, C, D, duties]
    curRows=curRows.map(r=>[state.country,r[0],r[1],r[2],r[3],r[4]]);
    prevRows=prevRows.map(r=>[state.country,r[0],r[1],r[2],r[3],r[4]]);
  }

  const cm=aggregateRows(curRows,level),pm=aggregateRows(prevRows,level);
  const codes=new Set([...Object.keys(cm),...Object.keys(pm)]);
  const idx=MI[state.metric];

  const rows=[];
  codes.forEach(code=>{
    const c=cm[code]||[0,0,0,0],p=pm[code]||[0,0,0,0];
    const en=state.levelMaps[level]?.[code]||code;
    rows.push([code,en,...c,...p]);
  });

  return rows.sort((a,b)=>b[2+idx]-a[2+idx]).slice(0,20);
}

async function supplierRows(){
  if(state.filterCode){
    const by={};
    state.filteredCurrent.forEach(r=>{
      if(!by[r[0]])by[r[0]]=[0,0,0,0];
      for(let i=0;i<4;i++)by[r[0]][i]+=Number(r[i+2]||0);
    });
    const idx=MI[state.metric];
    return Object.entries(by)
      .map(([cc,v])=>[cc,countryName(cc),v[idx]])
      .sort((a,b)=>b[2]-a[2])
      .slice(0,15);
  }

  const idx=2+MI[state.metric];
  return state.summary.topCountries[state.metric].map(r=>[r[0],countryName(r[0]),r[idx]]);
}

function plotBar(id,labels,values,colors){
  const ticks=niceTicks(values,6);
  const maxValue=Math.max(...values.map(Number),0);
  const axisMax=maxValue>0?maxValue*1.30:1;
  const displayValues=values.map(v=>compactMoney(v));

  const trace={
    x:values.slice().reverse(),
    y:labels.slice().reverse(),
    type:"bar",
    orientation:"h",
    marker:{color:colors.slice().reverse()},

    // Keep the summarized value permanently visible at the end of each bar.
    text:displayValues.slice().reverse(),
    texttemplate:"%{text}",
    textposition:"outside",
    textfont:{color:C.beige,size:12},
    cliponaxis:false,
    constraintext:"none",

    customdata:values.map(v=>full(v)).reverse(),
    hovertemplate:"%{y}<br>%{customdata}<extra></extra>"
  };

  Plotly.react(id,[trace],{
    margin:{l:250,r:26,t:8,b:48},
    paper_bgcolor:"rgba(0,0,0,0)",
    plot_bgcolor:"rgba(0,0,0,0)",
    font:{family:'Aptos,"Segoe UI",Arial',color:C.text,size:12},
    uniformtext:{mode:"show",minsize:10},
    xaxis:{
      gridcolor:C.grid,
      zeroline:false,
      color:C.muted,
      tickmode:"array",
      tickvals:ticks.vals.filter(v=>v<=axisMax),
      ticktext:ticks.vals.filter(v=>v<=axisMax).map(compactAxis),
      range:[0,axisMax],
      fixedrange:true
    },
    yaxis:{automargin:true,type:"category",color:C.text},
    showlegend:false,
    bargap:.34,
    hoverlabel:{bgcolor:"#171915",font:{color:C.text,size:12}}
  },{displayModeBar:false,responsive:true});
}

async function updateKPIs(){
  const a=await metrics(true),b=await metrics(false);
  const values=[kpiGeneral,kpiConsumption,kpiDutiable,kpiDuties];
  const changes=[changeGeneral,changeConsumption,changeDutiable,changeDuties];

  values.forEach((el,i)=>el.textContent=usd(a[i]));
  changes.forEach((el,i)=>{
    const y=yoy(a[i],b[i]);
    el.className="kpi-change"+(y>0?" positive":y<0?" negative":"");
    el.textContent=state.prevYear?`${change(a[i],b[i])}${b[i]!==0?` ${t("vs")} ${state.prevYear}`:""}`:t("baseYear");
  });
}

async function updateChangeStrip(){
  const a=await metrics(true),b=await metrics(false);
  changeTitle.textContent=state.prevYear?`${state.year} ${t("vs")} ${state.prevYear}`:t("baseYear");
  changeImports.textContent=state.prevYear?change(a[0],b[0]):t("noBase");

  if(a[1]>0){
    const current=100*a[2]/a[1];
    const previous=b[1]>0?100*b[2]/b[1]:null;
    dutiableShare.textContent=pct(current)+(previous===null?"":` · ${pp(current-previous)}`);
  }else{
    dutiableShare.textContent=t("noConsumptionBase");
  }

  if(a[2]>0){
    const current=100*a[3]/a[2];
    const previous=b[2]>0?100*b[3]/b[2]:null;
    effectiveRate.textContent=pct(current)+(previous===null?"":` · ${pp(current-previous)}`);
  }else{
    effectiveRate.textContent=t("noDutiableBase");
  }
}

async function updateCharts(){
  const suppliers=await supplierRows();

  countriesTitle.textContent=state.filterCode
    ?`${t("suppliersFor")} ${levelName(state.filterLevel)} ${state.filterCode}`
    :t("topCountries");

  plotBar(
    "countriesChart",
    suppliers.map(r=>r[1]),
    suppliers.map(r=>r[2]),
    suppliers.map(r=>r[0]===state.country?C.beige:C.bronze)
  );

  productPanelKicker.textContent=t("productsLabel");
  levelControl.classList.remove("hidden");

  const rows=(await scopedRankings(state.chartLevel)).slice(0,15);
  productChartTitle.textContent=state.country
    ?`${t("productsFrom")} ${countryName(state.country)}`
    :state.filterCode
      ?`${t("topProducts")} ${t("within")} ${levelName(state.filterLevel)} ${state.filterCode}`
      :t("topProducts");

  const idx=2+MI[state.metric];

  plotBar(
    "productChart",
    rows.map(r=>`${r[0]} · ${trunc(descFor(r[0],r[1]),42)}`),
    rows.map(r=>r[idx]),
    rows.map((_,i)=>i<3?C.bronze:C.brown)
  );
}

function filterDescription(){
  if(!state.filterCode)return"";
  const en=state.levelMaps[state.filterLevel]?.[state.filterCode]||state.filterCode;
  return descFor(state.filterCode,en);
}

function updatePath(){
  if(!state.filterCode){
    productPathCard.classList.add("hidden");
    return;
  }

  productPathCard.classList.remove("hidden");
  selectedProductTitle.textContent=`${levelName(state.filterLevel)} ${state.filterCode} · ${filterDescription()}`;

  const code=state.filterCode;
  const levels=[2,4,6,8,10].filter(n=>n<=Number(state.filterLevel));
  const nodes=[];

  levels.forEach(n=>{
    const c=code.slice(0,n);
    let en="";
    if(n===2)en=state.levelMaps["2"]?.[c]||"";
    else if(n===4)en=state.levelMaps["4"]?.[c]||"";
    else if(n===6)en=state.levelMaps["6"]?.[c]||"";
    else if(n===8){
      const row=state.catalog.find(r=>r[0].startsWith(c));
      en=row?.[5]||"";
    }else{
      en=state.levelMaps["10"]?.[c]||"";
    }

    const label=n===10?"HTSUS10":n===8?"HTS8":levelName(String(n));
    nodes.push([label,c,descFor(c,en)]);
  });

  classificationPath.innerHTML=nodes.map((x,i)=>
    `${i?'<div class="path-arrow">→</div>':""}
     <div class="path-node">
       <span class="level">${x[0]}</span>
       <span class="code">${x[1]}</span>
       <span class="desc">${x[2]||""}</span>
     </div>`
  ).join("");
}

async function renderTable(){
  tableBody.innerHTML="";
  const rows=await scopedRankings(state.tableLevel);
  const idx=2+MI[state.metric],pidx=6+MI[state.metric];
  const [curDen,prevDen]=await Promise.all([metrics(true),metrics(false)]);
  const currentTotal=curDen[MI[state.metric]],previousTotal=prevDen[MI[state.metric]];
  const metricLabel=metricSelect.options[metricSelect.selectedIndex].text;

  tableTitle.textContent=state.country
    ?`${t("productsFrom")} ${countryName(state.country)}`
    :state.filterCode
      ?(state.filterLevel==="10"
        ?`${t("selectedProductDetails")} · ${state.filterCode}`
        :`${t("topProducts")} ${t("within")} ${levelName(state.filterLevel)} ${state.filterCode}`)
      :t("topProducts");

  selectionNote.textContent=state.prevYear?`${state.year} ${t("vs")} ${state.prevYear} · ${metricLabel}`:metricLabel;

  tableHead.innerHTML=`<tr>
    <th>${t("rank")}</th><th>${t("code")}</th><th>${t("description")}</th>
    <th>${state.year}</th><th>${state.prevYear||t("previous")}</th>
    <th>${t("variation")}</th><th>${t("share")}</th><th>${t("shareChange")}</th>
  </tr>`;

  rows.forEach((r,j)=>{
    const a=Number(r[idx]||0),b=Number(r[pidx]||0);
    const sa=currentTotal?100*a/currentTotal:0;
    const sb=previousTotal?100*b/previousTotal:0;
    const tr=document.createElement("tr");

    const clickable=state.tableLevel==="10"
      ?`<button class="code-link" data-code="${r[0]}" data-level="10">${r[0]}</button>`
      :`<button class="code-link" data-code="${r[0]}" data-level="${state.tableLevel}">${r[0]}</button>`;

    tr.innerHTML=`<td>${j+1}</td>
      <td>${clickable}</td>
      <td class="description-cell" title="${String(descFor(r[0],r[1])).replaceAll('"',"&quot;")}">${descFor(r[0],r[1])}</td>
      <td>${full(a)}</td>
      <td>${b?full(b):"—"}</td>
      <td>${change(a,b)}</td>
      <td>${pct(sa)}</td>
      <td>${state.prevYear?pp(sa-sb):"—"}</td>`;
    tableBody.appendChild(tr);
  });

  document.querySelectorAll(".code-link").forEach(btn=>{
    btn.addEventListener("click",()=>setProductFilter(btn.dataset.code,btn.dataset.level));
  });
}

function updateContext(){
  let x=`${state.year} · ${state.country?countryName(state.country):t("overview")}`;
  if(state.filterCode)x+=` · ${levelName(state.filterLevel)} ${state.filterCode}`;
  activeContext.textContent=x;
}

async function updateAll(){
  if(!state.summary)return;
  populateCountries();
  await updateKPIs();
  await updateChangeStrip();
  updatePath();
  updateContext();
  await updateCharts();
  await renderTable();
}

function suggestionLabel(item){
  const level=levelName(item.level);
  const desc=state.lang==="pt"?item.pt:item.en;
  return {level,desc};
}

function wireSearch(){
  productSearch.addEventListener("input",()=>{
    const raw=productSearch.value.trim();
    const q=raw.toLowerCase();

    if(q.length<2){
      suggestions.classList.add("hidden");
      return;
    }

    const numeric=/^\d/.test(raw);
    const d=raw.replace(/\D/g,"");

    let matches=state.searchIndex.filter(item=>{
      if(numeric)return item.code.startsWith(d);
      return (item.en||"").toLowerCase().includes(q)||(item.pt||"").toLowerCase().includes(q);
    });

    // Exact / shorter levels first, then code order.
    matches.sort((a,b)=>{
      const ae=a.code===d?0:1,be=b.code===d?0:1;
      if(ae!==be)return ae-be;
      return Number(a.level)-Number(b.level)||a.code.localeCompare(b.code);
    });

    matches=matches.slice(0,18);

    suggestions.innerHTML=matches.length
      ?matches.map(item=>{
        const s=suggestionLabel(item);
        return `<div class="suggestion" data-code="${item.code}" data-level="${item.level}">
          <div class="suggestion-top">
            <code>${s.level} · ${item.code}</code>
            <small>${compactMoney(state.searchValueMaps[item.level]?.[item.code]||0)}</small>
          </div>
          <div class="suggestion-desc">${s.desc}</div>
        </div>`;
      }).join("")
      :`<div class="suggestion"><div class="suggestion-desc">${t("noResults")}</div></div>`;

    suggestions.querySelectorAll("[data-code]").forEach(el=>{
      el.addEventListener("click",()=>setProductFilter(el.dataset.code,el.dataset.level));
    });
    suggestions.classList.remove("hidden");
  });

  productSearch.addEventListener("keydown",e=>{
    if(e.key!=="Enter")return;
    const d=productSearch.value.replace(/\D/g,"");
    if([2,4,6,10].includes(d.length)){
      const item=state.searchIndex.find(x=>x.code===d&&Number(x.level)===d.length);
      if(item)setProductFilter(item.code,item.level);
    }
  });

  productSearch.addEventListener("blur",()=>setTimeout(()=>suggestions.classList.add("hidden"),180));
}

function setLevelLabels(select){
  [...select.options].forEach(o=>{
    if(o.value==="10")o.textContent="HTSUS10";
    else o.textContent=(state.lang==="pt"?"SH":"HS")+o.value;
  });
}

function refreshLevelOptions(){
  const minLevel=state.filterLevel?Number(state.filterLevel):2;

  [productLevelSelect,tableLevelSelect].forEach(select=>{
    [...select.options].forEach(o=>{
      const level=Number(o.value);
      o.disabled=level<minLevel;
      o.hidden=level<minLevel;
    });

    if(Number(select.value)<minLevel){
      const preferred=[4,6,10].find(v=>v>=minLevel) || 10;
      select.value=String(preferred);
    }
  });

  state.chartLevel=productLevelSelect.value;
  state.tableLevel=tableLevelSelect.value;
}

function applyLanguage(){
  document.documentElement.lang=state.lang==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(L[state.lang][k])el.textContent=L[state.lang][k];
  });
  langToggle.textContent=state.lang==="en"?"PT-BR":"EN";

  metricSelect.options[0].textContent=t("generalImports");
  metricSelect.options[1].textContent=t("consumptionImports");
  metricSelect.options[2].textContent=t("dutiableValue");
  metricSelect.options[3].textContent=t("calculatedDuties");

  setLevelLabels(productLevelSelect);
  setLevelLabels(tableLevelSelect);
  productSearch.placeholder=t("productPlaceholder");
  refreshLevelOptions();

  buildSearchIndex();
  updateAll();
}

async function init(){
  if(typeof Plotly==="undefined"){
    alert("Plotly could not be loaded. Check your internet connection.");
    return;
  }

  setupLinks();
  state.manifest=await loadJSON("data/manifest.json");

  state.manifest.years.forEach(y=>{
    const o=document.createElement("option");o.value=y;o.textContent=y;yearSelect.appendChild(o);
  });
  yearSelect.value=state.manifest.defaultYear;

  yearSelect.addEventListener("change",()=>loadYear(yearSelect.value));
  metricSelect.addEventListener("change",e=>{state.metric=e.target.value;updateAll()});
  countrySelect.addEventListener("change",e=>selectCountry(e.target.value));

  productLevelSelect.addEventListener("change",e=>{
    state.chartLevel=e.target.value;
    updateCharts();
  });

  tableLevelSelect.addEventListener("change",e=>{
    state.tableLevel=e.target.value;
    renderTable();
  });

  langToggle.addEventListener("click",()=>{
    state.lang=state.lang==="en"?"pt":"en";
    applyLanguage();
  });

  resetBtn.addEventListener("click",async()=>{
    state.country="";
    state.filterCode="";
    state.filterLevel=null;
    state.filteredCurrent=[];
    state.filteredPrevious=[];
    state.chartLevel="10";
    state.tableLevel="10";
    productSearch.value="";
    countrySelect.value="";
    productLevelSelect.value="10";
    tableLevelSelect.value="10";
    refreshLevelOptions();
    await updateAll();
  });

  wireSearch();
  await loadYear(state.manifest.defaultYear);
}

init().catch(err=>{
  console.error(err);
  document.body.insertAdjacentHTML("afterbegin",
    `<div style="padding:12px;background:#7c2d12;color:white;font-family:Arial">Dashboard error: ${err.message}</div>`);
});
