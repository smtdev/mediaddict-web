// Interactive phone mock-up (a visual replica of the app). Generated from the design; data comes from #demo.
(function(){
const D=JSON.parse(document.getElementById('demo').textContent);const LANG=document.documentElement.lang==='en'?'en':'es';
const EN_MAP = {
  'Inicio': 'Home', 'Progreso': 'Progress', 'Calendario': 'Calendar', 'Seguimiento': 'Watchlist', 'Lista de seguimiento': 'Watchlist',
  'Series': 'Shows', 'Películas': 'Movies', 'Todo': 'All', 'Al día': 'Up to date', 'Continuar viendo': 'Catch Up',
  'Emitido recientemente': 'Recently aired', 'Vista recientemente': 'Recently watched', 'Fecha de añadido': 'Date added',
  'Por ver': 'To Watch', 'Próximos estrenos': 'Upcoming Releases', 'Próximos': 'Upcoming', 'Ya emitidos': 'Already Aired',
  'Hoy': 'Today', 'En curso': 'In progress', 'Pendiente': 'Pending', 'Visto': 'Watched', 'Favorito': 'Favorite', 'Colección': 'Collection',
  'Streaming': 'Streaming', 'Físico': 'Physical', 'Estreno': 'Premiere', 'Buscar…': 'Search…', 'Para ti': 'For you',
  'Programación': 'Coming up', 'Estrenos': 'Releases', 'Esta semana': 'This week', 'Descubrir': 'Discover', 'Ver todo': 'See all',
  'Cine': 'Movies', 'Tendencias': 'Trending', 'Género': 'Genre', 'Filtros': 'Filters', 'Explorar': 'Explore',
  'Empezar de nuevo': 'Start over', 'Saltar': 'Skip', 'Siguiente': 'Next', 'Reparto': 'Cast', 'Notas': 'Notes', 'Listas': 'Lists',
  'Dónde ver': 'Where to Watch', 'Información': 'Information', 'Temporadas': 'Seasons', 'Episodios': 'Episodes',
  'Siguiente por ver': 'Up next', 'Próximo estreno': 'Next release', 'Más antiguos primero': 'Oldest first',
  'Marcar temporada como vista': 'Mark season watched', 'Añadir a la lista': 'Add to Watchlist', 'En emisión': 'Returning Series',
  'Historial de visualización': 'Viewing history', 'Tipo': 'Type', 'Estado': 'Status', 'Miniseries': 'Mini-Series',
  'Película': 'Movie', 'Serie': 'Show', 'Ver ya': 'See now', 'Las más maratoneadas': 'Most binged', 'Semana': 'This week',
  '¿Película o serie?': 'Movie or show?', 'Trakt separa su catálogo en dos. Elige por dónde empezamos.': 'Trakt splits its catalog in two. Pick where we start.',
  'TU BÚSQUEDA': 'YOUR SEARCH', '+ más filtros': '+ more filters', 'Temporada 1': 'Season 1', 'Paso 1 de 6': 'Step 1 of 6',
  'Busco una': 'I want a', 'película': 'movie', 'serie': 'show', 'que': 'that', 'de': 'of', 'en': 'on', 'y': 'and',
  '¿qué te apetece?': 'what are you in the mood for?', '¿cuánto dura?': 'how long?', '¿dónde?': 'where?', '¿qué nota?': 'what rating?', '¿algo que evitar?': 'anything to avoid?',
  'Sáb': 'Sat', 'Dom': 'Sun', 'Mar': 'Tue', 'Mié': 'Wed', 'Jue': 'Thu', 'Vie': 'Fri', 'Lun': 'Mon', 'Próx. sem.': 'Next wk',
  'Aviso': 'Alert', 'Nada que ver este día.': 'Nothing to watch this day.', 'Streaming ': 'Streaming',
  'Visto 1 vez': 'Watched once', 'Años': 'Years'
};
const EN_MONTH = { ene: 'Jan', feb: 'Feb', mar: 'Mar', abr: 'Apr', may: 'May', jun: 'Jun', jul: 'Jul', ago: 'Aug', sept: 'Sep', oct: 'Oct', nov: 'Nov', dic: 'Dec' };
function trSeg(s) {
  const lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
  let c = s.trim().replace(/ /g, ' ');
  if (!c) return s;
  if (EN_MAP[c] !== undefined) return lead + EN_MAP[c] + trail;
  c = c
    .replace(/^(\d+) elementos$/, '$1 items')
    .replace(/^Dentro de (\d+) días$/, 'In $1 days')
    .replace(/^Reseñas( · \d+)?$/, 'Reviews$1')
    .replace(/(\d+) episodios? sin emitir/g, (m, n) => n + (n === '1' ? ' unaired episode' : ' unaired episodes'))
    .replace(/(\d+) pendientes de ver • (\d+) pendiente de emitir/, '$1 left to watch • $2 yet to air')
    .replace(/(\d+) episodios\)/g, '$1 episodes)')
    .replace(/(\d+) episodios/g, '$1 episodes')
    .replace(/(\d+) temporada/g, '$1 season')
    .replace(/\((\d+) restantes\)/, '($1 left)').replace(/(\d+h \d+m) restantes/, '$1 left')
    .replace(/(\d+) (ene|feb|mar|abr|may|jun|jul|ago|sept|oct|nov|dic) (\d{4})/g, (m, d, mo, y) => EN_MONTH[mo] + ' ' + d + ', ' + y)
    .replace(/(\d+) %/g, '$1%');
  return lead + c + trail;
}
function tr(html) {
  if (LANG !== 'en') return html;
  return html.replace(/>([^<>]+)</g, (m, t) => '>' + trSeg(t) + '<');
}

const IMG=(p,s='w342')=>p?`https://image.tmdb.org/t/p/${s}${p}`:'';
const $=s=>document.querySelector(s);
const IC={
search:'M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
list:'M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z',
grid:'M3 3v8h8V3zm6 6H5V5h4zm-6 4v8h8v-8zm6 6H5v-4h4zm4-16v8h8V3zm6 6h-4V5h4zm-6 4v8h8v-8zm6 6h-4v-4h4z',
play:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5z',
bm:'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10z',
bmf:'M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z',
okc:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
fav:'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z',
favf:'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z',
col:'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5z',
down:'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z',
up:'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z',
chk:'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
less:'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z',
more:'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z',
clock:'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z',
star:'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
share:'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z',
dots:'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
back:'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z',
home:'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
prog:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.5 12.5V12h-3c-.55 0-1 .45-1 1v2H7v-2a2.5 2.5 0 0 1 2.5-2.5h3V8L17 11z',
cal:'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14zM5 8V6h14v2zM7 12h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 16h2v2H7zm4 0h2v2h-2z',
seg:'M3 5h12v2H3zm0 6h12v2H3zm0 6h8v2H3zm13.5-1.5L14 13l-1.5 1.5 4 4 6-6L21 11z',
expl:'M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6z',
chat:'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16z',
edit:'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75z',
bms:'M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z',
info:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z',
ext:'M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z',
person:'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
chev:'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
dice:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z',
movie:'M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z',
tv:'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18z',
cale:'M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14zM7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z',
add:'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z',
arr:'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
tune:'M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z',
rot:'M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z'
};
const svg=(k)=>`<svg viewBox="0 0 24 24"><path d="${IC[k]}"/></svg>`;
const pad=n=>String(n).padStart(2,'0');

// ---- data ----
const T={},M={};D.tv.forEach(x=>T[x.q]=x);D.movie.forEach(x=>M[x.q]=x);
const PR={};D.providers.forEach(p=>PR[p.name]=p.logo);
const prov=(...n)=>n.map(k=>PR[k]).filter(Boolean);
const MONTHS_ES=['ene','feb','mar','abr','may','jun','jul','ago','sept','oct','nov','dic'];
const fd=s=>{if(!s)return '';const [y,m,d]=s.split('-');return `${+d} ${MONTHS_ES[m-1]} ${y}`};
const R=x=>(x||0).toFixed(1).replace('.',',');
let PROG_S=[
 {k:'Ranma 1/2',s:1,e:29,ep:'Las galletas de la rosa negra',d:'31 oct 2026 • 16:55',w:28,t:29,sin:7,b:['fv','pl']},
 {k:'The Apothecary Diaries',s:1,e:53,ep:'La inmortal serpiente blanca',d:'30 oct 2026 • 15:40',w:52,t:53,sin:7,b:['pl']},
 {k:'Scrubs',s:2,e:6,ep:'My Halloween',d:'29 oct 2026 • 1:00',w:14,t:16,sin:4,b:['pl']},
 {k:'Nobody Wants This',s:3,e:1,ep:'Es perfecto',d:'22 oct 2026 • 9:00',w:20,t:30,sin:0,tag:'Estreno',b:['pl']},
 {k:'VisionQuest',s:1,e:4,ep:'Malware',d:'21 oct 2026 • 3:00',w:3,t:7,sin:1,b:['pl'],vq:1},
 {k:'Tougen Anki',s:2,e:6,ep:'Sangre y sombra',d:'20 oct 2026 • 2:00',w:24,t:29,sin:0,b:['pl']}
];
let DAY_S=[
 {k:'Sheriff Country',s:2,e:5,ep:'No Way In (I)',d:'7 nov 2026 • 2:00',w:24,t:24,sin:2,b:['fv','ok']},
 {k:'Marshals',s:2,e:6,ep:'Under the Influence',d:'16 nov 2026 • 2:00',w:18,t:18,sin:1,b:['ok']},
 {k:'Percy Jackson and the Olympians',s:3,e:1,ep:'My Rescue Operation Goes Very Wrong',d:'20 nov 2026 • 9:00',w:16,t:16,sin:8,tag:'Estreno',b:['ok']}
];
let PROG_M=[
 {k:'Now You See Me: Now You Don\'t',d:'14 nov 2025 • 112m',g:'Crimen, Suspense'},
 {k:'Avatar: Fire and Ash',d:'19 dic 2025 • 198m',g:'Ciencia ficción, Aventura, Fantasía'},
 {k:'Good Luck, Have Fun, Don\'t Die',d:'13 feb 2026 • 134m',g:'Ciencia ficción, Acción, Comedia'},
 {k:'Remarkably Bright Creatures',d:'8 may 2026 • 114m',g:'Drama, Misterio'}
];
const SEG={
 'En curso':{S:[['Ranma 1/2',28,29,'Emitido recientemente'],['The Apothecary Diaries',52,53],['Scrubs',14,16],['Nobody Wants This',20,30],['VisionQuest',3,7],['Tougen Anki',24,29]],M:[]},
 'Pendiente':{S:[['Will Trent',0,59],['Your Friends & Neighbors',0,19],['Tracker',0,60],['SPY x FAMILY',0,50],['ONE PIECE',0,16],['Nippon Sangoku',0,12]],M:['Wicked: For Good','Unabomber','One Night Only','Office Romance','The Furious','Supergirl']},
 'Visto':{S:[['Sheriff Country',24,24],['Marshals',18,18],['Percy Jackson and the Olympians',16,16]],M:['Now You See Me: Now You Don\'t','Avatar: Fire and Ash']},
 'Favorito':{S:[['Ranma 1/2',28,29],['Sheriff Country',24,24],['Friends',236,236]],M:['Supergirl']},
 'Colección':{S:[],M:['Wicked: For Good','Avatar: Fire and Ash','Resident Evil']}
};
const CAL_S=[
 {k:'Mandy\'s First Marriage',c:'S03E05',n:'El primer matrimonio de…',p:['Movistar Plus+','HBO Max']},
 {k:'9-1-1: Nashville',c:'S02E04',p:['Disney Plus']},
 {k:'Elsbeth',c:'S04E04',p:['Movistar Plus+']},
 {k:'Grey\'s Anatomy',c:'S23E04',p:['Disney Plus']},
 {k:'Mobland',c:'S02E08',n:'Tierra de mafiosos',p:['Amazon Prime Video','Movistar Plus+','SkyShowtime']},
 {k:'Tougen Anki',c:'S02E06',p:['Netflix','Amazon Prime Video']},
 {k:'The Apothecary Diaries',c:'S02E10',p:['Netflix']}
];
const DAYS=[['Sáb','7',3],['Dom','8',1],['Mar','10',2],['Mié','11',2],['Jue','12',3],['Próx. sem.','13',5],['Nov','',5]];

// ---- state ----
let ST={tab:'progress',stack:[],seg:{prog:'S',cal:'S',home:'movies',homeTab:'Programación'},watch:{type:'Series',chip:'Pendiente'},day:0,favs:{},lists:{},vq:{w:3},sw:{},xp:'movie',touched:false};
const app=$('#app');
function item(k){return T[k]||M[k]}
function badges(b){return b&&b.length?`<div class="bdg">${b.map(x=>`<i class="${x==='pl'?'pl':x==='fv'?'fv':x==='ok'?'ok':''}">${svg(x==='pl'?'play':x==='fv'?'favf':x==='ok'?'okc':'bmf')}</i>`).join('')}</div>`:''}
function po(k,extra=''){const x=item(k);return `<div class="po"><img loading="lazy" src="${IMG(x.poster)}" alt="">${extra}</div>`}
function wavy(w,t,flat){const p=t?Math.round(w/t*100):0;if(p>=100)return `<div class="prog"><div class="w ${flat?'flat':''}" style="flex:1"></div><span class="d"></span></div>`;
  return `<div class="prog">${p>0?`<div class="w ${flat?'flat':''}" style="width:${Math.max(p,6)}%"></div>`:''}<div class="t"></div><span class="d"></span></div>`}
function statusbar(){return `<div class="status"><span>9:41</span><span class="r"><svg viewBox="0 0 24 24"><path d="M2 20h20V4z"/></svg><svg viewBox="0 0 24 24"><path d="M2 9a15 15 0 0 1 20 0l-2 2a12 12 0 0 0-16 0zM6 13a9 9 0 0 1 12 0l-2 2a6 6 0 0 0-8 0zm4 4a3 3 0 0 1 4 0l-2 2z"/></svg><span class="bat">100 %</span></span></div>`}
function nav(){const it=[['home','Inicio','home'],['progress','Progreso','prog'],['calendar','Calendario','cal'],['watchlist','Seguimiento','seg']];
  return `<div class="nav4">${it.map(([k,n,ic])=>`<button class="${ST.tab===k&&!ST.stack.length?'sel':''}" data-act="tab" data-k="${k}"><span class="pw">${svg(ic)}</span>${n}</button>`).join('')}</div><div class="gbar"></div>`}
function topbar(t,grid){return `<div class="topbar"><h3>${t}</h3><span class="ib">${svg('search')}</span><span class="ib">${svg(grid?'grid':'list')}</span></div>`}
function seg(items,sel,key){return `<div class="seg">${items.map(([k,n])=>`<button class="${sel===k?'sel':''}" data-act="${key}" data-k="${k}">${n}</button>`).join('')}</div>`}

// ---- screens ----
function vProgress(){
  const S=ST.seg.prog==='S';
  let h=topbar('Progreso',true)+seg([['S','Series'],['M','Películas']],ST.seg.prog,'segprog');
  if(S){
    h+=`<div class="chiprow"><span class="fchip" data-act="jump" data-k="al">Al día</span><span class="fchip" data-act="jump" data-k="co">Continuar viendo</span></div>
    <div class="sortrow"><span class="sortchip">Emitido recientemente ${svg('down')}</span><span class="count">83 elementos</span></div>`;
    h+=`<div class="sech" id="sec-al"><span>Al día<i>(${DAY_S.length})</i></span>${svg('less')}</div><div class="rows">${DAY_S.map((r,i)=>rowS(r,i,'D')).join('')}</div>`;
    h+=`<div class="sech" id="sec-co"><span>Continuar viendo<i>(${80+PROG_S.length-5})</i></span>${svg('less')}</div><div class="rows">${PROG_S.map((r,i)=>rowS(r,i,'P')).join('')}</div><div style="height:24px"></div>`;
  }else{
    h+=`<div class="chiprow"><span class="fchip">Por ver</span><span class="fchip">Próximos estrenos</span></div>
    <div class="sortrow"><span class="sortchip">Vista recientemente ${svg('down')}</span><span class="count">45 elementos</span></div>
    <div class="sech"><span>Por ver<i>(${33+PROG_M.length})</i></span>${svg('less')}</div><div class="rows">${PROG_M.map((r,i)=>rowM(r,i)).join('')}</div><div style="height:24px"></div>`;
  }
  return h}
function rowS(r,i,L){const x=item(r.k);const done=r.w>=r.t;const first=!ST.touched&&L==='P'&&i===0;
  return `<div class="row" data-act="open" data-k="${r.k}" style="animation-delay:${i*50}ms"><div class="po"><img src="${IMG(x.poster)}"><span class="rate">${R(x.vote)}</span>${badges(r.b)}</div>
   <div class="tx"><div class="tt"><span>${x.name}</span>${r.tag?`<em class="tag" style="font-style:normal">${r.tag}</em>`:''}</div>
   <div class="ep"><b>S${pad(r.s)}E${pad(r.e)}</b><s>${r.ep}</s></div>
   <div class="line">${svg('clock')}<span>${r.d}</span></div>${wavy(r.w,r.t)}
   <div class="sub">(${r.w}/${r.t}) ${r.sin?`&nbsp;•&nbsp; ${r.sin} episodio${r.sin>1?'s':''} sin emitir`:''} &nbsp;•&nbsp; ${Math.round(r.w/r.t*100)} %</div></div>
   ${done?'':`<button class="mk ${first?'pulse':''}" data-act="mark" data-l="${L}" data-i="${i}">${svg('chk')}</button>`}</div>`}
function rowM(r,i){const x=item(r.k);return `<div class="row" data-act="open" data-k="${r.k}" style="animation-delay:${i*50}ms"><div class="po"><img src="${IMG(x.poster)}"><span class="rate">${R(x.vote)}</span>${badges(['bm'])}</div>
 <div class="tx"><div class="tt"><span>${x.name}</span></div><div class="line">${svg('clock')}<span>${r.d}</span></div><div class="sub" style="white-space:normal">${r.g}</div></div><button class="mk" data-act="markm" data-i="${i}">${svg('chk')}</button></div>`}
function cardP(k,sub,w,t,extra){const x=item(k);
  return `<div class="card" data-act="open" data-k="${k}"><div class="po"><img loading="lazy" src="${IMG(x.poster)}"><span class="rate">${R(x.vote)}</span>${extra&&extra.b?badges(extra.b):badges(['bm'])}${extra&&extra.ov||''}</div>
   <div class="meta"><b>${extra&&extra.name||x.name}</b><small>${sub}</small></div>${t!==undefined?`<div class="foot">${wavy(w,t)}<button class="mk" data-act="markc" data-k="${k}">${svg('chk')}</button></div>`:'<div style="height:12px"></div>'}</div>`}
function vCal(){
  const S=ST.seg.cal==='S';
  let h=topbar('Calendario')+seg([['S','Series'],['M','Películas']],ST.seg.cal,'segcal')+`<div class="chiprow"><span class="fchip sel">Próximos</span><span class="fchip">Ya emitidos</span></div>
  <div class="dayrow">${DAYS.map(([a,n,d],i)=>`<div class="day ${ST.day===i?'sel':''}" data-act="day" data-i="${i}">${a}${n?`<b>${n}</b>`:'<b>&nbsp;</b>'}<div class="dots">${Array.from({length:Math.min(d,5)},()=>'<i></i>').join('')}</div></div>`).join('')}</div>`;
  if(S){const off=ST.day%3;const lst=CAL_S.slice(off).concat(CAL_S.slice(0,off)).slice(0,ST.day===0?7:5);
    h+=`<div class="sech"><span>${ST.day===0?'Hoy':'Dentro de '+(ST.day+1)+' días'}<i>(${lst.length})</i></span>${svg('less')}</div><div class="grid" style="padding-top:0">${lst.map((r,i)=>{const x=item(r.k);const ps=prov(...r.p);
      return `<div class="card" data-act="open" data-k="${r.k}" style="animation-delay:${i*50}ms"><div class="po"><img loading="lazy" src="${IMG(x.poster)}"><span class="rate">${R(x.vote)}</span><div class="scrim"></div><div class="provs">${ps.map(p=>`<img src="${IMG(p,'w92')}">`).join('')}</div><span class="codep" style="bottom:30px">${r.c}</span></div><div class="meta"><b>${r.n||x.name}</b></div><div style="height:12px"></div></div>`}).join('')}</div>`;
  }else{
    const L=[['The Super Mario Galaxy Movie','Streaming',['Movistar Plus+','SkyShowtime'],'Hoy'],['Normal','Físico',['Amazon Prime Video','Amazon Prime Video'],'Dentro de 3 días']];
    h+=L.map(([k,b,p,t],i)=>{const x=item(k);return `<div class="sech"><span>${t}<i>(1)</i></span>${svg('less')}</div><div class="grid" style="padding-top:0"><div class="card" data-act="open" data-k="${k}"><div class="po"><img src="${IMG(x.poster)}"><span class="rate">${R(x.vote)}</span><div class="scrim"></div><div class="provs" style="bottom:36px">${prov(...p).map(q=>`<img src="${IMG(q,'w92')}">`).join('')}</div><div class="band">${b}</div></div><div class="meta"><b>${x.name}</b></div><div style="height:12px"></div></div></div>`}).join('');
  }
  return h+'<div style="height:24px"></div>'}
function vWatchlist(){
  const kind=ST.watch.type,chip=ST.watch.chip;
  const chips=[['En curso','play'],['Pendiente','bm'],['Visto','okc'],['Favorito','fav'],['Colección','col']];
  const vis=kind==='Películas'?chips.filter(c=>c[0]!=='En curso'):chips;
  const ch=vis.some(c=>c[0]===chip)?chip:vis[0][0];
  const S=SEG[ch].S.map(a=>({k:a[0],w:a[1],t:a[2],ep:1})),Mv=SEG[ch].M.map(k=>({k,ep:0}));
  let items=kind==='Series'?S:kind==='Películas'?Mv:[...S,...Mv];
  let h=topbar('Lista de seguimiento')+seg([['Todo','Todo'],['Películas','Películas'],['Series','Series']],kind,'segwatch')+
   `<div class="chiprow">${vis.map(([n,ic])=>`<span class="fchip ${ch===n?'sel':''}" data-act="schip" data-k="${n}">${svg(ic)}${n}</span>`).join('')}</div>
   <div class="sortrow"><span class="sortchip">${ch==='En curso'?'Emitido recientemente':'Fecha de añadido'} ${svg('down')}</span><span class="count">${kind==='Películas'?42:kind==='Series'?13:72} elementos</span></div><div class="grid">`+
   items.map((r,i)=>{const x=item(r.k);return r.ep?cardP(r.k,`${r.w}/${r.t} episodios`,r.w,r.t,{b:ch==='En curso'?['pl']:null}).replace('class="card"','class="card" style="animation-delay:'+i*40+'ms"'):cardP(r.k,(x.date||'').slice(0,4),0,undefined)}).join('')+'</div>';
  return h}
function vHome(){
  const tabs=[['Programación',98],['Pendiente',80],['Estrenos',8]];const ht=ST.seg.homeTab;
  const lst={Programación:[['Mandy\'s First Marriage','S03E05 • A Snotty Attitude and a…','Hoy'],['Elsbeth','S04E04 • A Bad Lie','Hoy'],['Grey\'s Anatomy','S23E04','Hoy']],Pendiente:[['Grey\'s Anatomy','S02E01 • Sigue lloviendo sobre mí','26 sept 2005'],['ONE PIECE','S04E92 • El héroe de Arabasta y la…','9 dic 2001']],Estrenos:[['The Super Mario Galaxy Movie','Hoy','Streaming'],['Normal','Dentro de 3 días','Físico']]}[ht];
  const cine=ST.seg.home==='movies';
  const disc=cine?['Resident Evil','Primetime','Verity','Supergirl']:['Grey\'s Anatomy','South Park','The Big Bang Theory','Friends'];
  return `<div class="search"><div class="bar">${svg('search')}Buscar…</div><div class="avatar">${svg('person')}</div></div>
  <div class="hsec"><h4>Para ti</h4>${ht==='Estrenos'?'<span class="dd">Esta semana</span>':''}<a data-act="tab" data-k="${ht==='Programación'?'calendar':'progress'}">${ht==='Estrenos'?'Películas':ht==='Programación'?'Calendario':'Progreso'}${svg('chev')}</a></div>
  <div class="seg" style="margin-top:16px">${tabs.map(([n,c])=>`<button class="${ht===n?'sel':''}" data-act="htab" data-k="${n}">${n}<span class="cnt">${c}</span></button>`).join('')}</div>
  <div class="hscroll">${lst.map(([k,a,b])=>{const x=item(k);const mk=ht==='Pendiente';return `<div class="bcard" data-act="open" data-k="${k}"><img src="${IMG(x.backdrop||x.poster,'w500')}"><div class="ct">${x.name.length>26?x.name.slice(0,25)+'…':x.name}<small>${a}</small>${ht==='Estrenos'?`<u>${b}</u>`:''}</div>${mk?`<button class="mk">${svg('chk')}</button>`:''}</div>`}).join('')}</div>
  <div class="hsec" style="padding-top:30px"><h4>Descubrir</h4><a>Ver todo${svg('chev')}</a></div>
  ${seg([['movies','Cine'],['shows','Series']],ST.seg.home,'seghome')}
  <div class="chiprow"><span class="fchip">${cine?'Tendencias':'Las más maratoneadas'}${svg('more')}</span><span class="fchip">${cine?'':'Semana'}${cine?svg('tune')+'Filtros':svg('more')}</span><span class="fchip">Género</span></div>
  <div class="hscroll" style="padding-top:18px">${disc.map(k=>{const x=item(k);return `<div class="pcard"><div class="card" data-act="open" data-k="${k}"><div class="po"><img src="${IMG(x.poster)}"><span class="rate">${R(x.vote)}</span></div><div class="meta"><b>${x.name}</b><small>${(x.date||'').slice(0,4)}</small></div><div style="height:12px"></div></div></div>`}).join('')}</div><div style="height:160px"></div>
  <button class="fab" data-act="xp">${`<span class="ex">${svg('expl')}</span>`}<span>Explorar</span></button>`}
function vExplore(){
  const p=ST.xp==='movie';
  return `<div class="topbar back"><span class="ib" data-act="back">${svg('back')}</span><h3>Explorar</h3><span class="ib">${svg('dice')}</span><span class="fchip" style="height:48px;border-radius:24px;border:0;background:#2e2a30;color:#8d8794;margin-right:2px;padding:0 20px 0 14px">${svg('rot')}Empezar de nuevo</span></div>
  <div class="prog" style="padding:6px 16px 0;gap:8px;height:30px"><div class="w" style="width:44px"></div><div class="t"></div><span class="d"></span><span style="font-size:16px;color:var(--onv);white-space:nowrap;margin-left:6px">Paso 1 de 6</span></div>
  <div class="sentence"><small>${svg('edit').replace('<svg','<svg style="display:inline;width:16px;height:16px;vertical-align:middle;margin-right:6px"')} TU BÚSQUEDA</small>Busco ${p?'una':'una'} <u class="on">${p?'película':'serie'}</u> que <u>¿qué te apetece?</u>, de <u>¿cuánto dura?</u>, en <u>¿dónde?</u>, <u>¿qué nota?</u> y <u>¿algo que evitar?</u>. <u class="on" style="background:transparent;color:var(--gold);border-color:var(--gold)">+ más filtros</u></div>
  <div style="padding:18px 16px 0"><div style="font-size:32px">¿Película o serie?</div><div style="font-size:16px;color:var(--onv);margin-top:6px">Trakt separa su catálogo en dos. Elige por dónde empezamos.</div></div>
  <div class="big2"><div class="big ${p?'sel':''}" data-act="xpsel" data-k="movie"><span class="okk">${svg('chk')}</span><div class="blob" style="background:#FFD16B;border-radius:48% 52% 46% 54%;color:#4D3A12">${svg('movie')}</div>Película</div><div class="big ${p?'':'sel'}" data-act="xpsel" data-k="show"><span class="okk">${svg('chk')}</span><div class="blob" style="background:#B8D8FF;border-radius:36%;color:#0d2b4d">${svg('tv')}</div>Serie</div></div>
  <div class="xpbot"><div class="n"><span class="pl">${svg('play')}</span><div><b>${p?'28.761':'9.314'}</b><small>${p?'películas':'series'} encajan contigo ahora mismo</small></div><a>Ver ya</a></div><div class="bt"><button class="sk">Saltar</button><button class="nx">Siguiente ${svg('arr')}</button></div></div>`}
function vDetail(k){
  const x=item(k),V=(k==='VisionQuest')?D.vq:null;const name=V?V.det.name:x.name;
  const ov=V?V.det.overview:x.overview;const bd=V?V.det.backdrop:x.backdrop;
  const w=ST.vq.w,tot=7;const pct=Math.round(w/tot*100);
  const ep=V?V.season.eps[w]:null;
  const isM=!!M[k];
  return `<div class="hero-h"><div class="bd" style="background-image:url(${IMG(bd||x.poster,'w780')})"></div></div>
  <div class="hero-top"><span class="ib" data-act="back">${svg('back')}</span><span class="sp"></span><span class="ib">${svg('share')}</span><span class="ib">${svg('dots')}</span></div>
  <div class="dhead"><div class="pp"><img src="${IMG(V?V.det.poster:x.poster)}"></div><div class="dt"><h2>${name}</h2>
   <span class="pillo"><i class="flag"></i>12 &nbsp;•&nbsp; ${V?'40min':isM?'2 h':'45min'}</span><br><span class="pillo">${V?'En emisión':isM?'Estrenada':'En emisión'}</span>
   <div style="font-size:18px;margin-top:6px;color:var(--onv)">${V?'1 temporada &nbsp;•&nbsp; 8 episodios':(x.date||'').slice(0,4)}</div><div style="color:var(--gold);font-size:18px;margin-top:2px;display:flex;gap:8px;align-items:center">Historial de visualización <span style="width:18px;height:18px;border-radius:50%;background:var(--gold);color:#222;display:inline-grid;place-items:center;font-size:12px;font-weight:700">i</span></div></div></div>
  <div class="ratings"><div class="rb"><span class="lg" style="background:#F5C518;color:#000">IMDb</span>${R(V?7.8:x.vote)}${svg('ext')}</div><div class="rb"><span class="lg" style="background:#0d253f;color:#01b4e4;font-size:9px">TMDB</span>${R(V?V.det.vote:x.vote)}${svg('ext')}</div><div class="rb"><span class="lg" style="background:#9b1fcb;color:#fff;font-size:15px">✓</span>${R(V?8.6:x.vote)}${svg('ext')}</div></div>
  <div class="syn">${ov||'Sinopsis no disponible.'}</div>
  <div class="acts"><span class="act">${svg('chat')}Reseñas · 23</span><span class="act">${svg('edit')}Notas</span><span class="act">${svg('bms')}Listas</span></div>
  ${V?`<div class="h2" style="padding-top:26px">Progreso</div><div class="pbar">${wavy(w,tot,true).replace('class="prog"','class="prog"')}<p>${w}/${tot} (${tot-w} restantes) • ${pct}% • ${Math.max(0,(tot-w))*0.9|0}h ${(((tot-w)*54)%60)}m restantes</p></div>
   ${seg([['a','Siguiente por ver'],['b','Próximo estreno']],'a','x')}
   ${ep&&w<7?`<div class="epcard" data-act="ep" data-n="${w+1}"><div class="still"><img src="${IMG(ep.still,'w300')}"></div><div class="x"><div class="line">${svg('cale')}<span>${fd(ep.date)} • 3:00</span></div><div class="ep"><b>S01E${pad(ep.n)}</b><s>${ep.name}</s></div><div class="line">${svg('clock')}<span>${ep.runtime}m</span> &nbsp;${svg('star')}<span>${R(ep.vote)}</span></div></div><button class="mk out" data-act="markvq" style="width:48px;height:48px">${svg('chk')}</button></div>`:''}
   <div class="h2" style="justify-content:space-between"><span>Temporadas</span><span class="fchip" style="font-size:16px">Más antiguos primero ${svg('up').replace('<svg','<svg style="color:var(--gold)"')}</span></div>
   <div class="seasoncard" data-act="season"><div class="sp"><img src="${IMG(V.season.poster,'w154')}"></div><div class="x"><b>Temporada 1</b><small>2026</small><small>${w}/8 • ${Math.round(w/8*100)}%</small>${wavy(w,8,true)}<small style="font-size:15px;margin-top:4px">${7-w} pendientes de ver • 1 pendiente de emitir</small></div><button class="mk out" style="width:48px;height:48px">${svg('chk')}</button></div>`:''}
  <div class="jw"><div class="h2" style="padding:0">Dónde ver ${svg('chev')}</div><b>▸JustWatch</b></div><span class="stag">Streaming</span><img class="prov" src="${IMG(PR['Disney Plus'],'w154')}">
  <div class="h2">Información</div><div class="info"><div>${svg('cale')}<span>Estado</span><em>En emisión</em></div><div>${svg('info')}<span>Tipo</span><em>${V?'Miniseries':'Serie'}</em></div><div>${svg('cale')}<span>Temporadas</span><em>${V?'1 (8 episodios)':'—'}</em></div></div>
  ${V?`<div class="h2">Reparto ${svg('chev')}</div><div class="circs">${V.cast.map(c=>`<div class="circ"><div class="ph">${c.img?`<img src="${IMG(c.img,'w185')}">`:svg('person')}</div><b>${c.name}</b><small>${c.role}</small></div>`).join('')}</div>`:''}
  <div style="height:170px"></div>
  <div class="floatbar"><div class="add"><button>Añadir a la lista</button><button>${svg('more')}</button></div><span class="c">${svg('chk')}</span><span class="st ${ST.favs[k]?'on':''}" data-act="fav" data-k="${k}">${svg(ST.favs[k]?'star':'star')}</span></div>`}
function vSeason(){
  const V=D.vq,w=ST.vq.w;
  return `<div class="topbar back"><span class="ib" data-act="back">${svg('back')}</span><h3>Temporada 1</h3></div>
  <div style="display:flex;gap:16px;padding:6px 16px 0"><div style="width:100px;flex:none;aspect-ratio:2/3;border-radius:12px;overflow:hidden;border:1px solid var(--outl)"><img style="width:100%;height:100%;object-fit:cover" src="${IMG(V.season.poster,'w185')}"></div><div style="padding-top:16px"><div style="font-size:26px">Temporada 1</div><div style="color:var(--gold);font-size:18px">VisionQuest <span style="color:var(--onv)">•&nbsp; 2026</span></div><div style="color:var(--onv);font-size:16px;margin-top:6px">13 oct 2026<br>8 episodios</div></div></div>
  <div class="ratings" style="padding-top:18px"><div class="rb"><span class="lg" style="background:#0d253f;color:#01b4e4;font-size:9px">TMDB</span>7,6${svg('ext')}</div><div class="rb"><span class="lg" style="background:#9b1fcb;color:#fff;font-size:15px">✓</span>8,1${svg('ext')}</div></div>
  <div class="syn" style="max-height:none">${V.season.overview||'Con una recompensa por su cabeza, Visión debe enfrentarse a su propia naturaleza y resistir la influencia de Ultrón para sobrevivir.'}<span style="display:none"></span></div>
  <div class="acts"><span class="act">${svg('chat')}Reseñas · 1</span><span class="act">${svg('edit')}Notas</span><span class="act">${svg('bms')}Listas</span></div>
  <div class="h2">Episodios</div><div class="epl">${V.season.eps.map((e,i)=>{const dn=i<w;return `<div class="eprow" data-act="ep" data-n="${e.n}"><div class="still"><span class="rate" style="left:5px;top:5px">${R(e.vote)}</span><img src="${IMG(e.still,'w300')}"></div><div class="x"><div class="line">${svg('cale')}<span>${fd(e.date)} • 3:00</span></div><div class="ep"><b>E${e.n}</b><s>${e.name}</s></div>${e.n===1?'<em class="tag" style="font-style:normal;margin-left:6px">Estreno</em>':''}<div class="line">${svg('clock')}<span>${e.runtime||'—'}m</span></div></div><button class="mk ${dn?'done':'out'}" data-act="markep" data-n="${e.n}">${svg('chk')}${e.n===1&&dn?'<span class="plus">+1</span>':''}</button></div>`}).join('')}</div><div style="height:190px"></div>
  <div class="floatbar"><span class="season" data-act="markall">${svg('chk').replace('<svg','<svg style="width:24px;height:24px"')}Marcar temporada como vista</span><span class="st" style="margin-left:6px">${svg('star')}</span></div>`}
function vEp(n){
  const V=D.vq,e=V.season.eps[n-1]||V.season.eps[0],dn=n<=ST.vq.w;
  return `<div class="hero-h" style="height:210px"><div class="bd" style="background-image:url(${IMG(e.still||V.det.backdrop,'w780')})"></div></div>
  <div class="hero-top"><span class="ib" data-act="back">${svg('back')}</span></div>
  <div class="chipsep" style="margin-top:-24px;position:relative;z-index:3">${V.season.eps.map(q=>`<span class="fchip ${q.n===n?'sel':''}" data-act="ep" data-n="${q.n}" data-r="1">S01E${pad(q.n)}</span>`).join('')}</div>
  <div class="ttl2" style="padding-top:22px"><div class="a">VisionQuest ${svg('chev')} Temporada 1</div><div style="display:flex;align-items:center;gap:12px;margin-top:2px"><div style="font-size:30px;flex:1">${e.name}</div>${n===1?'<em class="tag" style="font-style:normal">Estreno</em>':''}<span style="color:var(--gold);font-size:16px;white-space:nowrap">${dn?'Visto 1 vez':''}</span></div><div style="color:var(--onv);font-size:16px;margin-top:4px">${fd(e.date)} • 3:00 &nbsp;•&nbsp; ${e.runtime||'—'}m</div></div>
  <div class="ratings" style="padding-top:20px"><div class="rb"><span class="lg" style="background:#0d253f;color:#01b4e4;font-size:9px">TMDB</span>${R(e.vote)}${svg('ext')}</div><div class="rb"><span class="lg" style="background:#9b1fcb;color:#fff;font-size:15px">✓</span>${R(e.vote+.4)}${svg('ext')}</div></div>
  <div class="syn" style="max-height:none">${e.overview||'Visión se embarca en un viaje de autodescubrimiento y acaba huyendo de una amenaza letal.'}</div>
  <div class="acts"><span class="act">${svg('chat')}Reseñas · 60</span><span class="act">${svg('edit')}Notas</span><span class="act">${svg('bms')}Listas</span></div>
  <div class="h2">Reparto ${svg('chev')}</div><div class="circs">${V.cast.map(c=>`<div class="circ"><div class="ph">${c.img?`<img src="${IMG(c.img,'w185')}">`:svg('person')}</div><b>${c.name}</b><small>${c.role}</small></div>`).join('')}</div><div style="height:170px"></div>
  <div class="floatbar"><span class="c ${dn?'done':''}" data-act="markep" data-n="${n}">${svg('chk')}${n===1&&dn?'<span class="plus">+1</span>':''}</span><span class="st">${svg('star')}</span></div>`}

function view(){
  const top=ST.stack[ST.stack.length-1];
  let html,full=false;
  if(top){full=top.t!=='xp';html=top.t==='detail'?vDetail(top.k):top.t==='season'?vSeason():top.t==='ep'?vEp(top.n):vExplore();if(top.t==='xp')full=false}
  else html=ST.tab==='home'?vHome():ST.tab==='progress'?vProgress():ST.tab==='calendar'?vCal():vWatchlist();
  const fullScreen=top&&top.t!=='xp';
  const keep=app.querySelector('.page');const sc=keep?keep.scrollTop:0;
  const _h=statusbar()+`<div class="page ${fullScreen?'full':(top&&top.t==='xp'?'xpage':'')}" id="page">${html}</div>`+(top&&top.t==='xp'?'':(fullScreen?'':nav()))+(fullScreen?'<div class="gbar"></div>':'');app.innerHTML=tr(_h);
  if(top&&top.t==='xp'){app.insertAdjacentHTML('beforeend','<div class="gbar"></div>')}
  const fb=app.querySelector('#page .floatbar');if(fb)app.appendChild(fb);const fab0=app.querySelector('#page .fab');if(fab0)app.appendChild(fab0);const xb=app.querySelector('#page .xpbot');if(xb)app.appendChild(xb);const pg=$('#page');if(ST.keepScroll){pg.scrollTop=sc}else if(!top&&ST.tab==='progress'&&ST.seg.prog==='S'){const t2=$('#sec-co');if(t2)pg.scrollTop=t2.offsetTop-150}ST.keepScroll=false;
  const stt=app.querySelector('.status');pg.addEventListener('scroll',()=>stt.classList.toggle('solid',pg.scrollTop>(fullScreen?150:6)));
const fab=app.querySelector('.fab');if(fab){pg.addEventListener('scroll',()=>fab.classList.toggle('small',pg.scrollTop>30))}
}
function go(screen){ST.stack=[];if(screen==='detail'){ST.tab='progress';ST.stack=[{t:'detail',k:'VisionQuest'}]}else ST.tab=screen;view()}

// ---- interaction ----
function ripple(el){const fx=document.createElement('span');fx.className='fx';el.appendChild(fx);el.classList.add('pop');setTimeout(()=>{fx.remove();el.classList.remove('pop')},800)}
app.addEventListener('click',e=>{
  const a=e.target.closest('[data-act]');if(!a)return;const act=a.dataset.act,k=a.dataset.k;e.stopPropagation();
  if(act==='tab'){ST.stack=[];ST.tab=k;view();return}
  if(act==='segprog'){ST.seg.prog=k;view();return}
  if(act==='segcal'){ST.seg.cal=k;view();return}
  if(act==='seghome'){ST.seg.home=k;ST.keepScroll=true;view();return}
  if(act==='htab'){ST.seg.homeTab=k;ST.keepScroll=true;view();return}
  if(act==='segwatch'){ST.watch.type=k;view();return}
  if(act==='schip'){ST.watch.chip=k;ST.keepScroll=true;view();return}
  if(act==='day'){ST.day=+a.dataset.i;view();return}
  if(act==='jump'){const t=$('#sec-'+k);if(t)$('#page').scrollTo({top:t.offsetTop-110,behavior:'smooth'});return}
  if(act==='open'){ST.stack.push({t:'detail',k});view();return}
  if(act==='back'){ST.stack.pop();view();return}
  if(act==='xp'){ST.stack.push({t:'xp'});view();return}
  if(act==='xpsel'){ST.xp=k;ST.keepScroll=true;view();return}
  if(act==='season'){ST.stack.push({t:'season'});view();return}
  if(act==='ep'){const n=+a.dataset.n;if(a.dataset.r)ST.stack[ST.stack.length-1]={t:'ep',n};else ST.stack.push({t:'ep',n});view();return}
  if(act==='fav'){ST.favs[k]=!ST.favs[k];ST.keepScroll=true;view();return}
  if(act==='mark'){const r=(a.dataset.l==='D'?DAY_S:PROG_S)[+a.dataset.i];ST.touched=true;a.classList.remove('pulse');document.querySelector('.hint .dot')&&(document.querySelector('.hint .dot').style.display='none');ripple(a);
    if(r.w<r.t){r.w++;r.e++}
    const row=a.closest('.row');setTimeout(()=>{if(r.w>=r.t){row.style.transition='all .4s';row.style.opacity=0;row.style.transform='translateX(30px)';setTimeout(()=>{if(a.dataset.l==='P'){const i=PROG_S.indexOf(r);PROG_S.splice(i,1);DAY_S.unshift(r)}ST.keepScroll=true;view()},400)}else{ST.keepScroll=true;view()}},650);return}
  if(act==='markm'){ripple(a);setTimeout(()=>{PROG_M.splice(+a.dataset.i,1);ST.keepScroll=true;view()},650);return}
  if(act==='markc'||act==='markvq'){ripple(a);if(act==='markvq'){ST.vq.w=Math.min(7,ST.vq.w+1);setTimeout(()=>{ST.keepScroll=true;view()},650)}return}
  if(act==='markep'){const n=+a.dataset.n;ST.vq.w=(n<=ST.vq.w)?n-1:n;ripple(a);setTimeout(()=>{ST.keepScroll=true;view()},500);return}
  if(act==='markall'){ST.vq.w=7;ST.keepScroll=true;view();return}
});
function toast(){const old=app.querySelector('.toast');if(old)old.remove();const el=document.createElement('div');el.className='toast';
  el.innerHTML=tr('<div class="ap">'+(document.getElementById('app-icon')?document.getElementById('app-icon').innerHTML:'')+'</div><div><small>Mediaddict · ahora</small><b>Elsbeth: hoy se estrena S04E04</b></div>').replace('Mediaddict · ahora',LANG==='en'?'Mediaddict · now':'Mediaddict · ahora').replace('Elsbeth: hoy se estrena S04E04',LANG==='en'?'Elsbeth: S04E04 premieres today':'Elsbeth: hoy se estrena S04E04');
  app.appendChild(el);setTimeout(()=>el.classList.add('in'),60);setTimeout(()=>el.classList.remove('in'),4200);setTimeout(()=>el.remove(),5000)}
// scroll-driven scenes
const scenes=[...document.querySelectorAll('.scene')];
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&en.intersectionRatio>.55){scenes.forEach(s=>s.classList.toggle('on',s===en.target));const g=en.target.dataset.go;if(g&&ST.lastGo!==g){ST.lastGo=g;go(g);if(g==='calendar')setTimeout(toast,700)}}}),{threshold:[.55]});
scenes.forEach(s=>io.observe(s));
// palette
const PAL={amber:['#E9B824','#ff8a3d','#4D3A12','#F6DC8B','#4A4458'],teal:['#4EDAD2','#3b8ff0','#00504E','#6FF7EF','#3b4a4f'],crimson:['#FFB4AB','#ff4d6d','#6B1A18','#FFDAD6','#58434a'],azure:['#9ECAFF','#6a7bff','#00497D','#D1E4FF','#40485a'],purple:['#D0BCFF','#ff7ad9','#4F378B','#EADDFF','#4F4468'],emerald:['#8CD5A2','#2fbf8f','#00522B','#A8F2BE','#3d4f45']};
const pal=$('#palette');Object.entries(PAL).forEach(([n,v])=>{const b=document.createElement('button');b.dataset.p=n;b.style.background=`linear-gradient(135deg,${v[0]} 50%,${v[1]} 50%)`;pal.appendChild(b)});
pal.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const v=PAL[b.dataset.p];pal.querySelectorAll('button').forEach(x=>x.classList.toggle('sel',x===b));
  const r=document.documentElement.style;r.setProperty('--acc',v[0]);r.setProperty('--acc-2',v[1]);const a=app.style;a.setProperty('--gold',v[0]);a.setProperty('--pric',v[2]);a.setProperty('--onpric',v[3]);a.setProperty('--secc',v[4])});
pal.querySelector('button').classList.add('sel');
// phone size from the window height
function fit(){const s=Math.max(.5,Math.min(.86,(innerHeight-210)/892));document.documentElement.style.setProperty('--s',s)}
fit();addEventListener('resize',fit);
// 3D tilt
const t3=$('#tilt'),p3=$('#p3d');if(matchMedia('(pointer:fine)').matches){t3.addEventListener('mousemove',e=>{const r=t3.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p3.style.transform=`rotateY(${x*10}deg) rotateX(${-y*7}deg)`});t3.addEventListener('mouseleave',()=>p3.style.transform='')}
view();
(function(){
  const pl=document.getElementById('provline');if(pl)['Netflix','Amazon Prime Video','Disney Plus','Movistar Plus+','HBO Max','SkyShowtime'].forEach(n=>{if(PR[n]){const i=document.createElement('img');i.src=IMG(PR[n],'w92');i.alt=n;pl.appendChild(i)}});
  const cl=document.getElementById('castline');if(cl)D.vq.cast.slice(0,5).forEach(c=>{if(c.img){const i=document.createElement('img');i.src=IMG(c.img,'w185');i.alt=c.name;cl.appendChild(i)}});
  const words=[...document.querySelectorAll('.s4 .words span')];let wi=0,wt=null;
  function hot(){words.forEach((w,i)=>w.classList.toggle('hot',i===wi));if(ST.stack.length===0&&ST.tab==='watchlist'){ST.watch.type='Series';ST.watch.chip=words[wi].dataset.w;ST.keepScroll=true;view()}wi=(wi+1)%words.length}
  const s4=document.querySelector('.s4');
  new MutationObserver(()=>{if(s4.classList.contains('on')){if(!wt){wi=0;hot();wt=setInterval(hot,2300)}}else if(wt){clearInterval(wt);wt=null;words.forEach(w=>w.classList.remove('hot'))}}).observe(s4,{attributes:true,attributeFilter:['class']});
})();
})();
