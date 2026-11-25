/* Wissen › Wiederholung: jede Woche 5 Einheiten aus kurzer Wiederholung und Quiz.
   Inhalte: fortbildung/index.js (Wochenliste) und fortbildung/<KW>.js (Einheiten der Woche).
   Ergebnisse bleiben nur auf diesem Gerät (localStorage "df-wdh"), keine Patientendaten. */
(function(){
if(window.WDH_geladen)return;window.WDH_geladen=true;
var E=function(x){return String(x==null?"":x).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
var KEY="df-wdh",W={},IDX=null,ladend={};
window.WDH_woche=function(w){W[w.kw]=w;if(window.WI_st&&WI_st.modus==="wdh")WI_zeige()};
function lesen(){try{return JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){return{}}}
function schreiben(x){try{localStorage.setItem(KEY,JSON.stringify(x))}catch(e){}}
/* Verlauf aller Durchläufe ("df-wdh-log") und angefangene Quizze ("df-wdh-lauf"), nur auf diesem Gerät */
var LKEY="df-wdh-log",PKEY="df-wdh-lauf",MON=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
function jLes(k,d){try{var v=JSON.parse(localStorage.getItem(k)||"null");return v==null?d:v}catch(e){return d}}
function jSchr(k,x){try{localStorage.setItem(k,JSON.stringify(x))}catch(e){}}
function laeufe(){var L=jLes(LKEY,null);if(!Array.isArray(L)){L=[];var R=lesen();Object.keys(R).forEach(function(id){var r=R[id];if(r&&r.datum&&r.total)L.push({d:r.datum,id:id,t:"",r:r.right||0,n:r.total,w:r.reps||0})});L.sort(function(a,b){return a.d<b.d?-1:1});jSchr(LKEY,L)}return L}
function offen(id){var P=jLes(PKEY,{});return P&&P[id]||null}
function offenWeg(id){var P=jLes(PKEY,{});if(P&&P[id]){delete P[id];jSchr(PKEY,P)}}
function offenText(o){return o.f?"Angefangen, Frage "+o.f+" von "+o.n:"Angefangen, in der Wiederholung"}
function monatStat(m){var L=laeufe(),M=[],s={l:0,e:{},n:0,r:0,w:0,wd:0,u:{}};
 L.forEach(function(x,i){if(!x.d||x.d.slice(0,7)!==m)return;s.l++;s.e[x.id]=1;s.n+=x.n;s.r+=x.r;s.w+=x.w;
  if(L.slice(0,i).some(function(y){return y.id===x.id}))s.wd++;
  var u=s.u[x.id]||(s.u[x.id]={t:x.t,n:0,r:0});u.n+=x.n;u.r+=x.r;if(x.t)u.t=x.t});
 if(!s.l)return null;s.ein=Object.keys(s.e).length;s.f=s.n-s.r;s.pct=Math.round(100*s.r/Math.max(s.n,1));
 s.schwach=Object.keys(s.u).map(function(k){return s.u[k]}).filter(function(u){return u.t&&u.r<u.n}).sort(function(a,b){return a.r/a.n-b.r/b.n}).slice(0,3);return s}
function monatName(m){return MON[+m.slice(5,7)-1]+" "+m.slice(0,4)}
function monatBlock(m,titel,cls){var s=monatStat(m);
 if(!s)return `<section class="wd-mon${cls||""}"><h2>${E(titel)}</h2><p class="wd-mon-s">In diesem Monat noch kein Quiz beendet.</p></section>`;
 return `<section class="wd-mon${cls||""}"><h2>${E(titel)}</h2><div class="wd-mon-g"><div><b>${s.l}</b><small>Durchläufe</small></div><div><b>${s.ein}</b><small>Einheiten</small></div><div><b>${s.pct} %</b><small>auf Anhieb richtig</small></div><div><b>${s.f}</b><small>Fehler in Runde 1</small></div><div><b>${s.w}</b><small>Wiederholungen nötig</small></div><div><b>${s.wd}</b><small>Einheiten erneut gemacht</small></div></div>${s.schwach.length?`<p class="wd-mon-s">Am meisten Fehler: ${s.schwach.map(function(u){return E(u.t)+" ("+u.r+"/"+u.n+")"}).join(" · ")}</p>`:""}</section>`}
function lade(src,cb){if(ladend[src])return;ladend[src]=1;var s=document.createElement("script");s.src=src;s.onload=cb||null;s.onerror=function(){ladend[src]=0};document.head.append(s)}
function index(){if(window.WDH_INDEX){IDX=window.WDH_INDEX;return IDX}lade("fortbildung/index.js?t="+Date.now(),function(){IDX=window.WDH_INDEX||[];if(WI_st.modus==="wdh")WI_zeige()});return null}
var PFADE={pnf:"fortbildung/techniken-pnf.js",tape:"fortbildung/techniken-tape.js",studien:"fortbildung/techniken-studien.js"},PFAD_NAME={pnf:"PNF",tape:"Tape",studien:"Studien"};
function woche(kw){if(PFADE[kw]){if(!W[kw])lade(PFADE[kw]);return W[kw]}var e=(IDX||[]).find(function(x){return x.kw===kw});if(!W[kw]&&e)lade(e.datei);return W[kw]}
function alleE(w){return w?(w.einheiten||[]).concat(w.anatomie||[],(w.techniken||[]).filter(function(x){return !x.bald})):[]}
function heuteKw(){var d=new Date(),t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())),n=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-n);var j=new Date(Date.UTC(t.getUTCFullYear(),0,1));return t.getUTCFullYear()+"-W"+String(Math.ceil(((t-j)/864e5+1)/7)).padStart(2,"0")}
function aktuelleKw(){var k=heuteKw(),l=IDX||[];if(l.some(function(x){return x.kw===k}))return k;var f=l.filter(function(x){return x.kw<=k});return(f[0]||l[0]||{}).kw}
function tag(){return["so","mo","di","mi","do","fr","sa"][new Date().getDay()]}
function datum(iso){var p=String(iso||"").split("-");return p.length===3?(+p[2])+"."+(+p[1])+".":""}
var ART={kb:"Krankheitsbild",neu:"Neu aus der Forschung",wdh:"Wiederholung",ana:"Anatomie",grund:"Grundlagen",tech:"Technik",anw:"Anwendung",fall:"Fallquiz",pruef:"Prüfung"};
var ICO={ok:'<svg viewBox="0 0 24 24" class="wq-mk"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',no:'<svg viewBox="0 0 24 24" class="wq-mk"><path d="M7 7l10 10M17 7L7 17"/></svg>',
 pfeil:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
 x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>'};

/* ---------- Gestaltung ---------- */
(function(){if(document.getElementById("wdh-css"))return;var st=document.createElement("style");st.id="wdh-css";st.textContent=`
.wi-portal .wk-seg{max-width:100%;overflow-x:auto;scrollbar-width:none;flex-wrap:nowrap}
.wi-portal .wk-seg::-webkit-scrollbar{display:none}
.wi-portal .wk-seg button{flex:none;white-space:nowrap}
.wd-kblink{border:0;background:none;padding:0;font:inherit;color:var(--tape);font-weight:600;cursor:pointer}
.wd-toc{position:sticky;top:-8px;box-shadow:0 -12px 0 var(--grund);z-index:3;margin:14px calc(-1 * clamp(16px,4.5vw,56px)) 6px;padding:8px clamp(16px,4.5vw,56px) 0;background:color-mix(in srgb,var(--grund) 88%,transparent);-webkit-backdrop-filter:saturate(1.6) blur(14px);backdrop-filter:saturate(1.6) blur(14px)}
.wd-toc-l{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:8px}
.wd-toc-l::-webkit-scrollbar{display:none}
.wd-toc-l button{flex:none;border:0;border-radius:999px;padding:8px 14px;min-height:36px;background:var(--flaeche);color:var(--schrift2);font:inherit;font-weight:600;font-size:.875rem;cursor:pointer;white-space:nowrap;transition:background-color 200ms ease,color 200ms ease,transform 140ms ease-out}
.wd-toc-l button:active{transform:scale(.97)}
.wd-toc-l .wd-toc-q{color:var(--tape);box-shadow:inset 0 0 0 1.5px var(--tape);background:transparent}
.wd-toc-l button.an{background:var(--tape);color:var(--flaeche)}
.wd-lese{display:block;height:3px;background:var(--linie);border-radius:99px;overflow:hidden}
.wd-lese em{display:block;height:100%;background:var(--tape);transform-origin:left;transform:scaleX(0);transition:transform 400ms cubic-bezier(.23,1,.32,1)}
.wd-k,.wd-start{scroll-margin-top:72px}
.wd-kurz{background:color-mix(in srgb,#C9E86B 32%,var(--flaeche));border-radius:20px;padding:16px 18px;margin:8px 0 12px}
.wd-kurz h2{font-size:1.0625rem;font-weight:800;margin:0 0 6px}
.wd-kurz ul{margin:0;padding-left:20px}.wd-kurz li{margin:5px 0;line-height:1.5;font-weight:600}
.wd-anim .wd-k{opacity:0;transform:translateY(10px);transition:opacity 420ms ease-out,transform 420ms cubic-bezier(.23,1,.32,1)}
.wd-anim .wd-k.sicht{opacity:1;transform:none}
.wd-anim .wd-bars em{transform:scaleX(0);transform-origin:left;transition:transform 700ms cubic-bezier(.23,1,.32,1) 150ms}
.wd-anim .wd-k.sicht .wd-bars em{transform:none}
.wd-figs img{cursor:zoom-in;transition:transform 140ms ease-out}
.wd-figs img:active{transform:scale(.98)}
.wd-lupe{position:fixed;inset:0;z-index:10060;background:rgba(10,12,14,.94);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:max(16px,env(safe-area-inset-top)) 16px max(16px,env(safe-area-inset-bottom));animation:wd-auf 200ms ease-out;cursor:zoom-out}
.wd-lupe.zu{opacity:0;transition:opacity 150ms ease-in}
.wd-lupe img{max-width:min(100%,900px);max-height:72vh;object-fit:contain;border-radius:10px;animation:wd-gross 260ms cubic-bezier(.23,1,.32,1)}
.wd-lupe p{color:#d8dde1;font-size:.9375rem;line-height:1.5;max-width:70ch;margin:0;text-align:left}
.wd-lupe p b{color:#fff}
.wd-lupe button{position:absolute;top:max(12px,env(safe-area-inset-top));right:12px;width:44px;height:44px;border:0;border-radius:12px;background:rgba(255,255,255,.12);color:#fff;display:grid;place-items:center}
.wd-lupe button svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}
@keyframes wd-auf{from{opacity:0}}
@keyframes wd-gross{from{opacity:0;transform:scale(.96)}}
@media (prefers-reduced-motion:reduce){.wd-anim .wd-k{opacity:1;transform:none;transition:none}.wd-anim .wd-bars em{transform:none;transition:none}.wd-lupe,.wd-lupe img{animation:none}}
.wd-zweig{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0 4px}
.wd-zweig button{border:0;border-radius:16px;background:var(--flaeche);color:var(--schrift);font:inherit;text-align:left;padding:12px 14px;cursor:pointer;display:flex;flex-direction:column;gap:2px;box-shadow:inset 0 0 0 2px transparent;transition:box-shadow 180ms ease,transform 140ms ease-out}
.wd-zweig button:active{transform:scale(.98)}
.wd-zweig button b{font-size:1rem}.wd-zweig button small{color:var(--schrift2);font-size:.8125rem}
.wd-zweig button[aria-selected="true"]{box-shadow:inset 0 0 0 2px var(--tape)}
.wd-ende{background:var(--flaeche);border-radius:20px;padding:20px;margin:18px 0 0;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px}
.wd-ende h2{margin:0 0 4px;font-size:1.25rem;font-weight:800}
.wd-ende p{margin:0;color:var(--schrift2);font-size:.9375rem}
.wd-ende-k{display:flex;flex-wrap:wrap;gap:10px}
.wd-teil2{display:inline-flex;align-items:center;gap:8px}
.wd-ana-tab div:nth-child(odd){font-style:italic}
.wd-mu[data-p]{cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color 200ms ease,box-shadow 200ms ease,transform 140ms ease-out}.wd-mu[data-p]:active{transform:scale(.99)}.wd-mu>div{flex:1;min-width:0}.wd-zoom{display:grid;grid-template-rows:0fr;transition:grid-template-rows 280ms cubic-bezier(.23,1,.32,1)}.wd-zoom>div{overflow:hidden;min-height:0}.wd-mu.an .wd-zoom{grid-template-rows:1fr}.wd-zoom i{display:block;position:relative;width:min(100%,340px);aspect-ratio:4/3;margin-top:12px;overflow:hidden;border-radius:12px;background-repeat:no-repeat;background-color:var(--seite);opacity:0;transform:scale(.97);transition:opacity 220ms ease-out 60ms,transform 280ms cubic-bezier(.23,1,.32,1) 60ms}.wd-mu.an .wd-zoom i{opacity:1;transform:none}.wd-ring{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;box-shadow:0 0 0 3px #c9e86b,0 0 0 6px rgba(201,232,107,.35);pointer-events:none;animation:wdRing 1.4s cubic-bezier(.23,1,.32,1) 3 both}@keyframes wdRing{0%{transform:scale(.6);opacity:0}25%{opacity:1}70%{transform:scale(1.15);opacity:1}100%{transform:scale(1);opacity:1}}.wd-figs figure .wd-spot{position:absolute;left:0;top:0;width:100%;aspect-ratio:1;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity 240ms ease-out}.wd-figs figure.spot .wd-spot{opacity:1}.wd-figs figure{position:relative}@media (prefers-reduced-motion:reduce){.wd-zoom,.wd-zoom i,.wd-spot,.wd-mu[data-p]{transition:none}.wd-ring{animation:none}}.wd-th{width:64px;height:64px;border-radius:14px;object-fit:cover;background:var(--seite);display:block}.wd-hero{margin:4px 0 14px;border-radius:20px;overflow:hidden;background:var(--seite);aspect-ratio:21/9;max-height:260px}.wd-hero img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;display:block}@media(max-width:500px){.wd-e{grid-template-columns:36px 52px minmax(0,1fr) 16px;gap:10px}.wd-th{width:52px;height:52px;border-radius:12px}.wd-hero{aspect-ratio:16/9}}.wd-mus.nr{grid-template-columns:1fr}.wd-mus.nr .wd-mu{display:flex;gap:12px;align-items:flex-start;scroll-margin-top:90px;transition:background-color 200ms ease,box-shadow 200ms ease}.wd-mu.an{background:color-mix(in srgb,var(--lim,#c9e86b) 22%,var(--flaeche));box-shadow:inset 0 0 0 2.5px var(--tape)}.wd-mnr{flex:none;min-width:28px;height:28px;padding:0 6px;border-radius:99px;background:#c9e86b;color:#2a3a10;display:grid;place-items:center;font-weight:700;font-size:.8125rem;box-shadow:0 0 0 2px var(--flaeche)}.wd-mnr.leer{background:var(--linie);color:var(--schrift2)}.wd-muc{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}.wd-muc button{display:flex;align-items:center;gap:6px;border:0;border-radius:99px;background:var(--seite);color:var(--schrift);font:inherit;font-size:.875rem;font-weight:600;padding:4px 12px 4px 4px;min-height:34px;cursor:pointer;transition:transform 140ms ease-out,background-color 200ms ease}.wd-muc button:active{transform:scale(.97)}.wd-muc button.an{background:var(--tape);color:var(--flaeche)}.wd-muc .wd-mnr{min-width:24px;height:24px;font-size:.75rem;box-shadow:none}.wd-mus{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;margin:10px 0}
.wd-mu{background:var(--seite);border-radius:14px;padding:12px 14px}
.wd-mu b{display:block;font-size:1rem;margin-bottom:6px}
.wd-mu dl{display:grid;grid-template-columns:auto minmax(0,1fr);gap:4px 10px;margin:0;font-size:.875rem;line-height:1.4}
.wd-mu dt{color:var(--schrift2);font-weight:600;padding:1px 8px;margin-left:-8px;border-radius:7px;align-self:start}.wd-mu dt.u{background:rgba(38,88,168,.13);color:color-mix(in srgb,#2658a8 75%,var(--schrift))}.wd-mu dt.a{background:rgba(168,45,45,.12);color:color-mix(in srgb,#a82d2d 75%,var(--schrift))}.wd-mu dt.i{background:rgba(62,112,30,.14);color:color-mix(in srgb,#3e701e 75%,var(--schrift))}.wd-mu dd{padding:1px 0}.wd-mu dd{margin:0}
.wd-woche{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:22px 0 10px}
.wd-woche h2{font-size:1.25rem;font-weight:800;margin:0;letter-spacing:-.01em}
.wd-woche span{color:var(--schrift2);font-size:.875rem;white-space:nowrap}
.wd-liste{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px}
.wd-e{display:grid;grid-template-columns:44px 64px minmax(0,1fr) 20px;align-items:center;gap:14px;border:0;background:var(--flaeche);border-radius:20px;padding:14px 16px;text-align:left;font:inherit;color:inherit;cursor:pointer;transition:transform .16s ease-out}
.wd-e:active{transform:scale(.97)}
.wd-nr{width:44px;height:44px;border-radius:14px;background:var(--seite);display:grid;place-items:center;font-weight:800;font-size:1.125rem;color:var(--schrift2);font-variant-numeric:tabular-nums}
.wd-e.fertig .wd-nr{background:#C9E86B;color:#2E3236}
.wd-t{display:flex;flex-direction:column;gap:3px;min-width:0}
.wd-t small{font-size:.8125rem;color:var(--tape);font-weight:700}
.wd-t b{font-size:1.0625rem;line-height:1.25}
.wd-t span{font-size:.8125rem;color:var(--schrift2)}
.wd-e>svg{color:var(--schrift2)}
.wd-heute{display:inline-block;margin-left:6px;padding:1px 8px;border-radius:999px;background:var(--tape);color:var(--flaeche);font-size:.75rem;font-weight:700;vertical-align:1px}
.wd-frueher{margin-top:26px}
.wd-i{font:inherit;color:var(--tape);font-weight:600;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:inherit;text-decoration:underline dotted;text-decoration-thickness:2px;text-underline-offset:3px;border-radius:4px;-webkit-tap-highlight-color:transparent;transition:background-color 150ms ease}
.wd-i:hover,.wd-i[aria-expanded="true"]{background:color-mix(in srgb,var(--tape) 12%,transparent)}
.wd-pop{position:fixed;inset:0;z-index:60;pointer-events:none}
.wd-pop-k{position:fixed;pointer-events:auto;background:var(--flaeche);color:var(--schrift);border-radius:16px;padding:16px 18px 14px;box-shadow:0 12px 40px rgba(0,0,0,.18),0 0 0 1px var(--linie);max-height:60vh;overflow:auto}
.wd-pop-k h3{font-size:1rem;margin:0 28px 6px 0}
.wd-pop-t p{font-size:.9375rem;line-height:1.5;margin:6px 0}
.wd-pop-q{font-size:.75rem!important;color:var(--schrift2)}
.wd-pop-x{position:absolute;top:8px;right:8px;width:32px;height:32px;border:0;border-radius:50%;background:var(--grund);color:var(--schrift2);font-size:1.25rem;line-height:1;cursor:pointer}
.wd-mon{margin-top:26px;padding:18px;border-radius:18px;background:var(--flaeche);box-shadow:inset 0 0 0 1px var(--linie)}
.wd-mon.neu{margin:18px 0 0;box-shadow:inset 0 0 0 2px var(--tape)}
.wd-mon h2{font-size:1.125rem;margin:0 0 12px}
.wd-mon-g,.wq-zahl{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.wd-mon-g div,.wq-zahl div{background:var(--grund);border-radius:12px;padding:10px 12px}
.wd-mon-g b,.wq-zahl b{display:block;font-size:1.5rem;font-weight:800;line-height:1.15;font-variant-numeric:tabular-nums}
.wd-mon-g small,.wq-zahl small{color:var(--schrift2);font-size:.75rem}
.wd-mon-s{font-size:.875rem;color:var(--schrift2);margin:12px 0 0}
.wq-zahl{margin:14px 0 4px}
.wd-offen{display:block;font-style:normal;color:var(--tape);font-weight:700}
@media(max-width:520px){.wd-mon-g{grid-template-columns:repeat(2,1fr)}}
.wd-frueher summary{cursor:pointer;font-weight:700;color:var(--tape);padding:6px 0;list-style:none}
.wd-frueher summary::-webkit-details-marker{display:none}
.wd-hinweis{color:var(--schrift2);font-size:.875rem;margin:14px 0 0;max-width:62ch}
.wd-k p,.wd-k li{line-height:1.55}
.wd-k ul{padding-left:20px;margin:8px 0}
.wd-k li{margin:5px 0}
.wd-bars{display:grid;gap:12px;background:var(--seite);border-radius:14px;padding:14px;margin:10px 0}
.wd-bars b{display:flex;justify-content:space-between;gap:10px;font-size:.9375rem}
.wd-bars b span:last-child{font-weight:600;color:var(--schrift2)}
.wd-bars i{display:block;height:12px;border-radius:99px;background:var(--flaeche);margin-top:5px;overflow:hidden}
.wd-bars em{display:block;height:100%;border-radius:99px;background:var(--tape)}
.wd-tab{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.4fr);border-top:1px solid var(--linie);margin-top:8px}
.wd-tab div{padding:9px 10px 9px 0;border-bottom:1px solid var(--linie);font-size:.9375rem;line-height:1.4}
.wd-tab div:nth-child(odd){font-weight:700}
.wd-figs{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-top:10px}
.wd-figs figure{margin:0}
.wd-figs img{width:100%;display:block;border-radius:14px;background:#000;aspect-ratio:1/1;object-fit:contain}
.wd-figs img.hoch{aspect-ratio:auto;background:none}
.wd-figs figcaption{font-size:.875rem;color:var(--schrift2);line-height:1.45;margin-top:8px}
.wd-figs figcaption b{color:var(--schrift)}
.wd-pfadwahl{display:inline-flex;gap:2px;padding:4px;border-radius:999px;background:var(--seite);margin:14px 0 0}
.wd-pfadwahl button{border:0;border-radius:999px;background:none;color:var(--schrift2);font:inherit;font-size:.9375rem;font-weight:700;padding:8px 22px;cursor:pointer}
.wd-pfadwahl button[aria-selected="true"]{background:var(--flaeche);color:var(--schrift);box-shadow:0 1px 3px rgba(0,0,0,.08)}
.wd-pfad{background:var(--flaeche);border-radius:18px;padding:14px 16px;margin:14px 0 2px;display:grid;gap:8px}.wd-pfad b{display:block;font-size:1.0625rem}.wd-pfad span,.wd-pfad small{color:var(--schrift2);font-size:.8125rem}.wd-pfad-bar{display:block;height:8px;border-radius:9px;background:var(--seite);overflow:hidden}.wd-pfad-bar em{display:block;height:100%;background:#C9E86B;border-radius:9px;transition:width 400ms cubic-bezier(.23,1,.32,1)}
.wd-e.bald{opacity:.55;cursor:default;box-shadow:none}.wd-e.bald .wd-th{background:var(--seite)}
.wd-s{counter-reset:s;list-style:none;padding:0;margin:8px 0}.wd-s li{counter-increment:s;position:relative;padding-left:34px;margin:9px 0;line-height:1.5}.wd-s li:before{content:counter(s);position:absolute;left:0;top:0;width:24px;height:24px;border-radius:50%;background:var(--tape);color:var(--flaeche);display:grid;place-items:center;font-weight:700;font-size:.8125rem}
.wd-skizze{margin:12px 0}.wd-skizze img{width:100%;max-width:640px;display:block;border-radius:14px;background:var(--seite)}.wd-skizze figcaption{font-size:.8125rem;color:var(--schrift2);margin-top:6px}.wd-skizze b{color:var(--schrift)}
.wd-platz{margin:12px 0;border:2px dashed var(--linie);border-radius:14px;padding:14px;display:flex;gap:12px;align-items:flex-start;color:var(--schrift2);background:color-mix(in srgb,var(--seite) 50%,transparent)}.wd-platz figcaption{display:grid;gap:2px}.wd-platz b{color:var(--schrift);font-size:.9375rem}.wd-platz span{font-size:.875rem}.wd-platz small{font-size:.8125rem}
.wd-kurs{border-left:4px solid #C9E86B;background:color-mix(in srgb,#C9E86B 14%,var(--flaeche));border-radius:12px;padding:10px 14px;margin:12px 0}.wd-kurs b{display:block}.wd-kase{border-left-color:#7FA7D9;background:color-mix(in srgb,#7FA7D9 12%,var(--flaeche))}.wd-kase small{display:block;color:var(--schrift2);font-size:.8125rem}.wd-kurs ul{margin:6px 0 0;padding-left:18px}.wd-kurs li{margin:4px 0;line-height:1.5}
@media(max-width:500px){.wd-zweig button{padding:10px}.wd-zweig button small{font-size:.75rem}}
.wd-merk{background:color-mix(in srgb,#C9E86B 30%,var(--flaeche));border-radius:14px;padding:12px 14px;margin-top:10px;line-height:1.5}
.wd-quellen{font-size:.8125rem;color:var(--schrift2);line-height:1.5}
.wd-start{display:flex;align-items:center;gap:12px;background:var(--flaeche);border-radius:20px;padding:12px;margin:18px 0 0;box-shadow:0 6px 24px rgba(0,0,0,.12)}
.wd-teil{flex:none;width:48px;height:48px;border:0;border-radius:14px;background:var(--seite);color:var(--schrift);display:grid;place-items:center;cursor:pointer;transition:transform 140ms ease-out}
.wd-teil:active{transform:scale(.97)}
.wd-teil[aria-busy="true"]{opacity:.5;pointer-events:none}
.wd-start span{flex:1;font-size:.9375rem;color:var(--schrift2);line-height:1.35}
.wd-start span b{color:var(--schrift);display:block;font-size:1rem}
.wq-go,.wq-ghost{font:inherit;font-weight:700;font-size:1.0625rem;min-height:52px;padding:0 24px;border-radius:14px;border:0;cursor:pointer;transition:transform 140ms ease-out;-webkit-tap-highlight-color:transparent;white-space:nowrap}
.wq-go{background:var(--tape);color:var(--flaeche)}
.wq-ghost{background:transparent;color:var(--schrift);box-shadow:inset 0 0 0 2px var(--linie)}
.wq-go:active,.wq-ghost:active,.wq-opt:active,.wq-ico:active{transform:scale(.97)}
.wq-go:focus-visible,.wq-ghost:focus-visible,.wq-opt:focus-visible,.wq-ico:focus-visible{outline:3px solid var(--tape);outline-offset:3px}
.wq{--ok:#1f7a4a;--no:#c4140b;--okbg:#e7f4ec;--nobg:#fdeceb;--eo:cubic-bezier(.23,1,.32,1);--drawer:cubic-bezier(.32,.72,0,1);position:fixed;inset:0;z-index:10050;background:var(--grund);color:var(--schrift);display:flex;flex-direction:column;font-family:var(--ww-font,-apple-system,system-ui,sans-serif)}
.wq[hidden]{display:none}
.wq-top{display:flex;align-items:center;gap:14px;padding:max(10px,env(safe-area-inset-top)) clamp(14px,4vw,24px) 10px;max-width:760px;width:100%;margin:0 auto}
.wq-ico{width:44px;height:44px;flex:none;border:0;background:transparent;color:var(--schrift2);border-radius:12px;cursor:pointer;display:grid;place-items:center;transition:transform 140ms ease-out}
.wq-ico svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}
.wq-bar{flex:1;height:10px;border-radius:99px;background:var(--flaeche);overflow:hidden}
.wq-bar i{display:block;height:100%;background:var(--tape);border-radius:99px;transform-origin:left;transform:scaleX(.02);transition:transform 420ms var(--eo)}
.wq-cnt{font-size:.875rem;color:var(--schrift2);font-variant-numeric:tabular-nums;white-space:nowrap;min-width:4.5em;text-align:right}
.wq-view{position:relative;flex:1;overflow-y:auto;overflow-x:hidden;padding-bottom:calc(var(--sh,0px) + 28px);transition:padding-bottom 280ms var(--drawer)}
.wq-card{inset:0 0 auto 0;max-width:680px;margin:0 auto;padding:10px clamp(16px,4vw,24px) 0}
.wq-tag{display:inline-block;font-size:.8125rem;font-weight:700;color:var(--tape);background:var(--flaeche);padding:4px 10px;border-radius:99px;margin-bottom:10px}
.wq-q{font-weight:800;font-size:clamp(1.375rem,4.6vw,1.75rem);line-height:1.2;letter-spacing:-.01em;text-wrap:balance;margin:6px 0 18px}
.wq-img{margin:0 0 18px;background:#000;border-radius:14px;overflow:hidden}
.wq-img img{display:block;width:100%;max-height:36vh;object-fit:contain}
.wq-opts{display:grid;gap:10px}
.wq-opt{display:flex;align-items:center;gap:14px;width:100%;min-height:58px;padding:10px 14px;text-align:left;font:inherit;font-size:1rem;line-height:1.35;color:var(--schrift);background:var(--flaeche);border:2px solid transparent;border-radius:14px;cursor:pointer;transition:transform 140ms ease-out,border-color 160ms ease,background-color 160ms ease,opacity 200ms ease;animation:wq-in 300ms var(--eo) var(--d) backwards}
@keyframes wq-in{from{opacity:0;transform:translateY(8px)}}
@media (hover:hover) and (pointer:fine){.wq-opt:hover{border-color:var(--tape)}}
.wq-key{flex:none;width:30px;height:30px;border-radius:9px;background:var(--seite);display:grid;place-items:center;font-size:.875rem;font-weight:700;color:var(--schrift2)}
.wq-tx{flex:1}
.wq-st{flex:none;width:24px;height:24px}
.wq-mk{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.wq-mk path{stroke-dasharray:30;stroke-dashoffset:30;animation:wq-draw 260ms var(--eo) 60ms forwards}
@keyframes wq-draw{to{stroke-dashoffset:0}}
.wq-ans .wq-opt{pointer-events:none}
.wq-ans .wq-opt:not(.isok):not(.isno){opacity:.4}
.wq-opt.isok{border-color:var(--ok);background:var(--okbg);color:#14251b}
.wq-opt.isok .wq-key{background:var(--ok);color:#fff}
.wq-opt.isok .wq-st{color:var(--ok)}
.wq-opt.isno{border-color:var(--no);background:var(--nobg);color:#2b1210}
.wq-opt.isno .wq-key{background:var(--no);color:#fff}
.wq-opt.isno .wq-st{color:var(--no)}
.wq-sheet{position:fixed;left:0;right:0;bottom:0;z-index:10051;background:var(--okbg);color:#14251b;transform:translateY(105%);transition:transform 180ms ease-in;box-shadow:0 -8px 30px rgba(0,0,0,.14);border-radius:22px 22px 0 0;max-height:62vh;overflow-y:auto}
.wq-sheet.on{transform:none;transition:transform 300ms var(--drawer)}
.wq-sheet.no{background:var(--nobg);color:#2b1210}
.wq-sin{max-width:680px;margin:0 auto;padding:20px clamp(16px,4vw,24px) calc(18px + env(safe-area-inset-bottom))}
.wq-verdict{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.5rem}
.wq-sheet.ok .wq-verdict{color:var(--ok)}.wq-sheet.no .wq-verdict{color:var(--no)}
.wq-verdict .wq-mk{width:28px;height:28px}
.wq-verdict em{margin-left:auto;font-size:.8125rem;font-style:normal;color:var(--ok);background:#fff;padding:5px 10px;border-radius:99px;white-space:nowrap}
.wq-cmp{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;margin-top:12px;font-size:.9375rem;line-height:1.35}
.wq-cmp:empty{display:none}
.wq-cmp div{background:#fff;border-radius:10px;padding:10px 12px}
.wq-cmp small{display:block;font-size:.8125rem;opacity:.7;margin-bottom:3px}
.wq-buddy[aria-pressed="true"]{color:var(--tape)}
.wb{position:absolute;left:clamp(10px,3vw,24px);bottom:calc(var(--sh,0px) + 10px);z-index:5;transition:bottom 300ms cubic-bezier(.32,.72,0,1);display:flex;align-items:flex-end;gap:8px;pointer-events:none;max-width:min(360px,calc(100vw - 20px))}
.wb-fig{display:grid;justify-items:center;flex:none}.wb-fig img{width:clamp(84px,12vw,120px);height:clamp(84px,12vw,120px);object-fit:contain}.wb-fig small{font-size:.6875rem;color:var(--schrift2);font-weight:600}
.wb-blase{background:var(--flaeche);color:var(--schrift);border-radius:16px 16px 16px 4px;padding:10px 13px;font-size:.9375rem;line-height:1.35;box-shadow:0 6px 24px rgba(0,0,0,.14)}
.wb.rein{animation:wbRein 260ms cubic-bezier(.23,1,.32,1)}@keyframes wbRein{from{opacity:0;transform:translateY(10px) scale(.96)}to{opacity:1;transform:none}}
.wb-k{display:block;filter:drop-shadow(0 4px 10px rgba(0,0,0,.15));transform-origin:50% 100%;transition:transform 70ms linear;will-change:transform}.wb-m{display:block;overflow:hidden;width:clamp(84px,12vw,120px);height:clamp(84px,12vw,120px);animation:wbAtem 2.6s ease-in-out infinite alternate;transform-origin:50% 100%}.wb-fig img.wb-sprite{width:600%!important;height:100%!important;max-width:none;object-fit:fill}@keyframes wbAtem{from{transform:scale(1,1)}to{transform:scale(1.012,.988)}}
@media(prefers-reduced-motion:reduce){.wb.rein,.wb-m{animation:none}.wb-k{transform:none!important}}
.wq-why{font-size:.96875rem;line-height:1.55;margin:12px 0 16px}
.wq-sheet .wq-go{width:100%;color:#fff}
.wq-sheet.ok .wq-go{background:var(--ok)}.wq-sheet.no .wq-go{background:var(--no)}
.wq-mid{text-align:center;padding-top:6vh}
.wq-mid p{max-width:44ch;margin:0 auto 26px;color:var(--schrift2);line-height:1.5}
.wq-big{font-weight:800;font-size:clamp(4rem,18vw,6rem);line-height:1;font-variant-numeric:tabular-nums}
.wq-big span{font-size:.45em;color:var(--schrift2)}
.wq-ausw{border-radius:16px;overflow:hidden;margin-bottom:6px;background:#2E3236;min-height:120px}
.wq-miss{margin:22px 0}
.wq-miss h4{font-size:1rem;margin:0 0 8px}
.wq-miss ol{margin:0;padding-left:20px;font-size:.9375rem}
.wq-miss li{margin:0 0 10px}
.wq-miss li span{display:block;color:var(--schrift2)}
.wq-ends{display:grid;gap:10px;margin:18px 0 10px}
.wq-note{font-size:.8125rem;color:var(--schrift2)}
@media (max-width:600px){.wq-cmp{grid-template-columns:1fr}.wd-tab{grid-template-columns:1fr}.wd-tab div:nth-child(odd){border-bottom:0;padding-bottom:0}}
@media (prefers-reduced-motion:reduce){.wq-opt{animation:none}.wq-mk path{animation:none;stroke-dashoffset:0}.wq-bar i,.wq-sheet,.wq-sheet.on,.wq-view{transition-duration:0ms}}
`;document.head.append(st)})();

/* ---------- Seiten im Reiter Wissen ---------- */
function status(id){var r=lesen()[id];return r?`${r.right}/${r.total} auf Anhieb`:""}
function karte(e,i,w){if(e.bald)return `<div class="wd-e bald" aria-disabled="true"><span class="wd-nr">${i+1}</span><i class="wd-th"></i><span class="wd-t"><small>${E(ART[e.art]||"")}</small><b>${E(e.titel)}</b><span>kommt bald · ca. ${E(e.min||8)} min</span></span></div>`;var r=lesen()[e.id],o=offen(e.id),heute=w&&w.plan&&w.plan[tag()]===e.id&&w.kw===heuteKw();
 return `<button class="wd-e${r?" fertig":""}" data-wdh="${E(e.id)}" data-kw="${E(w.kw)}"><span class="wd-nr">${r?'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>':i+1}</span>${titelBild(e)?`<img class="wd-th" src="${E(titelBild(e))}" alt="" loading="lazy">`:`<i class="wd-th"></i>`}<span class="wd-t"><small>${E(ART[e.art]||"")}${heute?'<span class="wd-heute">Heute dran</span>':""}</small><b>${E(e.titel)}</b><span>${o?`<em class="wd-offen">${E(offenText(o))}</em>`:""}${r?E(status(e.id))+" · "+E(e.min||8)+" min":"ca. "+E(e.min||8)+" min lesen · "+E((e.fragen||[]).length)+" Fragen"}</span></span>${ICO.pfeil}</button>`}
function pfadListe(){var pk=PFADE[WI_st.wdhPfad]?WI_st.wdhPfad:"pnf",w=woche(pk),wahl=`<div class="wd-pfadwahl" role="tablist">${Object.keys(PFADE).map(function(k){return `<button role="tab" data-pfadwahl="${k}" aria-selected="${k===pk}">${E(PFAD_NAME[k])}</button>`}).join("")}</div>`;if(!w)return wahl+`<p class="wd-hinweis">Lade die Einheiten …</p>`;if(!w)return `<p class="wd-hinweis">Lade die Einheiten …</p>`;
 var T=w.techniken||[],R=lesen(),fertig=T.filter(function(e){return !e.bald&&R[e.id]}).length,da=T.filter(function(e){return !e.bald}).length;
var h=wahl+`<div class="wd-pfad"><div><b>${E(w.titel)}</b><span>${E(w.unter||"")}</span></div><i class="wd-pfad-bar"><em style="width:${Math.round(fertig/Math.max(T.length,1)*100)}%"></em></i><small>${fertig} von ${T.length} erledigt${da<T.length?` · ${da} schon da, die übrigen folgen`:""}</small></div>`;
 Object.keys(w.bloecke||{}).forEach(function(k){var L=T.filter(function(e){return e.block===k});if(!L.length)return;
  h+=`<div class="wd-woche"><h2>${E(k)} · ${E(w.bloecke[k])}</h2></div><div class="wd-liste">${L.map(function(e){return karte(e,T.indexOf(e),w)}).join("")}</div>`});
 return h+`<p class="wd-hinweis">Die Einheiten bauen aufeinander auf, du kannst aber frei springen. Was du im Quiz falsch hattest, kommt am Ende nochmal.</p>`}
function seiteListe(){
 var l=index(),z=WI_st.wdhZweig==="ana"||WI_st.wdhZweig==="tech"?WI_st.wdhZweig:"kl",feld=z==="ana"?"anatomie":"einheiten";
 var kopf=`<div class="wi-seite"><button class="wi-zur" data-a="zu">‹ Mehr</button><h1>Wissen</h1><p class="wi-unter">Wiederholung · jede Woche neue Einheiten mit Quiz</p>${WI_umschWdh()}
 <div class="wd-zweig" role="tablist"><button role="tab" data-zweig="kl" aria-selected="${z==="kl"}"><b>Krankheitslehre</b><small>Krankheitsbilder und Forschung</small></button><button role="tab" data-zweig="ana" aria-selected="${z==="ana"}"><b>Anatomie</b><small>Gelenke und Regionen</small></button><button role="tab" data-zweig="tech" aria-selected="${z==="tech"}"><b>Techniken</b><small>PNF, Tape, Studien</small></button></div>`;
 if(z==="tech")return kopf+pfadListe()+`</div>`;
 if(!l)return kopf+`<p class="wd-hinweis">Lade die Einheiten …</p></div>`;
 var kw=aktuelleKw(),w=woche(kw),meta=l.find(function(x){return x.kw===kw})||{},liste=w?(w[feld]||[]):null;
 var h=kopf+`<div class="wd-woche"><h2>Diese Woche</h2><span>${datum(meta.von)} – ${datum(meta.bis)}</span></div>`;
 h+=!w?`<p class="wd-hinweis">Lade die Einheiten …</p>`:liste.length?`<div class="wd-liste">${liste.map(function(e,i){return karte(e,i,w)}).join("")}</div>`:`<p class="wd-hinweis">${z==="ana"?"Diese Woche gibt es noch keine Anatomie-Einheit.":"Noch keine Einheiten da."}</p>`;
 if(w&&w.plan&&z==="kl")h+=`<p class="wd-hinweis">Montag und Mittwoch um 21 Uhr kommt eine Erinnerung. Die übrigen Einheiten machst du, wann es passt. Was du im Quiz falsch hattest, kommt am Ende nochmal.</p>`;
 var jetzt=new Date(),mJ=jetzt.getFullYear()+"-"+String(jetzt.getMonth()+1).padStart(2,"0"),vd=new Date(jetzt.getFullYear(),jetzt.getMonth()-1,1),mV=vd.getFullYear()+"-"+String(vd.getMonth()+1).padStart(2,"0");
 if(jetzt.getDate()<=7&&monatStat(mV))h=h.replace('<div class="wd-woche">',monatBlock(mV,"Bilanz "+monatName(mV)," neu")+'<div class="wd-woche">');
 var alt=l.filter(function(x){return x.kw!==kw});
 if(alt.length)h+=`<details class="wd-frueher"${WI_st.wdhAlt?" open":""}><summary>Frühere Wochen</summary>${alt.map(function(m){var a=woche(m.kw),L=a?(a[feld]||[]):null;if(L&&!L.length)return "";return `<div class="wd-woche"><h2>KW ${E(m.kw.slice(-2))}</h2><span>${datum(m.von)} – ${datum(m.bis)}</span></div>`+(L?`<div class="wd-liste">${L.map(function(e,i){return karte(e,i,a)}).join("")}</div>`:`<p class="wd-hinweis">${E((m.titel||[]).join(" · "))}</p>`)}).join("")}</details>`;
 h+=monatBlock(mJ,"Auswertung "+monatName(mJ));
 var fm={};laeufe().forEach(function(x){var m=x.d&&x.d.slice(0,7);if(m&&m!==mJ&&!(jetzt.getDate()<=7&&m===mV))fm[m]=1});var fl=Object.keys(fm).sort().reverse();
 if(fl.length)h+=`<details class="wd-frueher"><summary>Frühere Monate</summary>${fl.map(function(m){return monatBlock(m,monatName(m))}).join("")}</details>`;
 return h+`</div>`}
/* Begriffe mit Zusatzerklärung: im Text [[sichtbarer Text|schluessel]], Erklärung in einheit.info[schluessel] = {t, x} */
var aktE=null;
function OHNE(x){return String(x==null?"":x).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g,"$1")}
function TX(x){var info=aktE&&aktE.info||{};return E(x).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,function(m,t,k){return info[k]?`<button type="button" class="wd-i" data-info="${k}" aria-haspopup="dialog">${t}</button>`:t})}
var musN=0;function block(b){var h=b.t?`<h3>${E(b.t)}</h3>`:"";
 (b.p||[]).forEach(function(x){h+=`<p>${TX(x)}</p>`});
 if(b.l)h+=`<ul>${b.l.map(function(x){return `<li>${TX(x)}</li>`}).join("")}</ul>`;
 if(b.mus){var mz=b.mus.some(function(m){return m.z!=null});musN++;
  if(mz)h+=`<div class="wd-muc">${b.mus.map(function(m,k){return `<button data-mu="wdmu${musN}-${k}"><span class="wd-mnr${m.z?"":" leer"}">${E(m.z||"–")}</span>${E(String(m.n).replace(/^Mm?\. /,"").replace(/^./,function(c){return c.toUpperCase()}))}</button>`}).join("")}</div>`;
  h+=`<div class="wd-mus${mz?" nr":""}">${b.mus.map(function(m,k){return `<div class="wd-mu" id="wdmu${musN}-${k}"${m.p?` data-p="${E(JSON.stringify(m.p))}"${m.b?` data-b="${E(m.b)}"`:""} role="button" tabindex="0" aria-pressed="false"`:""}>${mz?`<span class="wd-mnr${m.z?"":" leer"}">${E(m.z||"–")}</span>`:""}<div><b>${E(m.n)}</b><dl><dt class="u">Ursprung</dt><dd>${E(m.u)}</dd><dt class="a">Ansatz</dt><dd>${E(m.a)}</dd><dt class="i">Nerv</dt><dd>${E(m.i)}</dd><dt>Funktion</dt><dd>${E(m.f)}</dd></dl>${m.p?`<div class="wd-zoom"><div><i></i></div></div>`:""}</div></div>`}).join("")}</div>`}
 if(b.bars)h+=`<div class="wd-bars">${b.bars.map(function(r){return `<div><b><span>${E(r[0])}</span><span>${E(r[2]||"")}</span></b><i><em style="width:${+r[1]}%"></em></i></div>`}).join("")}</div>`;
 if(b.tab)h+=`<div class="wd-tab">${b.tab.map(function(r){return `<div>${TX(r[0])}</div><div>${TX(r[1])}</div>`}).join("")}</div>`;
 if(b.fig)h+=`<div class="wd-figs">${b.fig.map(function(f){return `<figure><img src="${E(f.src)}" alt="${E(f.alt||"")}" loading="lazy"${f.hoch?' class="hoch"':""}><figcaption><b>${E(f.t)}</b> ${E(f.c||"")}</figcaption></figure>`}).join("")}</div>`;
 if(b.foto&&b.foto.src)h+=`<figure class="wd-skizze"><img src="${E(b.foto.src)}" alt="${E(b.foto.t)}" loading="lazy"><figcaption><b>Skizze · Foto folgt (${E(b.foto.id)})</b> ${E(b.foto.t)}</figcaption></figure>`;
 else if(b.foto)h+=`<figure class="wd-platz"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg><figcaption><b>Foto folgt · ${E(b.foto.id)}</b><span>${E(b.foto.t)}</span><small>${E(b.foto.x||"")}</small></figcaption></figure>`;
 if(b.s)h+=`<ol class="wd-s">${b.s.map(function(x){return `<li>${TX(x)}</li>`}).join("")}</ol>`;
 if(b.kurs)h+=`<div class="wd-kurs"><b>Aus deinem Kurs</b><ul>${b.kurs.map(function(x){return `<li>${TX(x)}</li>`}).join("")}</ul></div>`;
 if(b.kase)h+=`<div class="wd-kurs wd-kase"><b>Nach Kase-Konzept</b><small>Kurslehre, nicht durch Studien belegt</small><ul>${b.kase.map(function(x){return `<li>${TX(x)}</li>`}).join("")}</ul></div>`;
 if(b.merk)h+=`<div class="wd-merk"><b>Merke:</b> ${TX(b.merk)}</div>`;
 return h}
function kurzTitel(t){return String(t).replace(/^\d+\.\s*/,"").replace(/[:?].*$/,"").replace(/^Was ist das eigentlich$/,"Grundlagen").replace(/^Was hilft laut Studienlage$/,"Studienlage")}
function titelBild(e){if(e.bild)return e.bild;var f=null;(e.abschnitte||[]).some(function(a){return (a.b||[a]).some(function(b){if(b.fig&&b.fig[0]){f=b.fig[0].src;return true}})});return f}
function seiteEinheit(kw,id){var w=woche(kw),e=w&&alleE(w).find(function(x){return x.id===id});
 if(!e)return seiteListe();
 aktE=e;var r=lesen()[id],o=offen(id),ab=e.abschnitte||[],merk=[];
 ab.forEach(function(a){(a.b||[a]).forEach(function(b){if(b.merk)merk.push(b.merk)})});
 var h=`<div class="wi-seite wd-einheit"><button class="wi-zur" data-a="wdh-liste">‹ Wiederholung</button>${titelBild(e)?`<div class="wd-hero"><img src="${E(titelBild(e))}" alt=""></div>`:""}<h1>${E(e.titel)}</h1><p class="wi-unter">${E(ART[e.art]||"")}${PFAD_NAME[kw]?" · "+PFAD_NAME[kw]:""} · ca. ${E(e.min||8)} min · ${E(e.fragen.length)} Fragen${e.kb?` · <button class="wd-kblink" data-kbid="${E(e.kb)}">Zum Krankheitsbild</button>`:""}</p>`;
 h+=`<div class="wd-toc" role="navigation" aria-label="Kapitel"><div class="wd-toc-l">${ab.map(function(a,i){return `<button data-wdhgo="${i}">${E(kurzTitel(a.t))}</button>`}).join("")}</div><i class="wd-lese"><em></em></i></div>`;
 if(merk.length)h+=`<section class="wd-kurz"><h2>Kurz gemerkt</h2><ul>${merk.map(function(m){return `<li>${TX(m)}</li>`}).join("")}</ul></section>`;
 ab.forEach(function(a,i){h+=`<section class="wi-karte wd-k" id="wd-s${i}" data-i="${i}"><h2>${E(a.t)}</h2>${(a.b||[a]).map(function(b){return block(b===a?{p:a.p,l:a.l,tab:a.tab,fig:a.fig,merk:a.merk,bars:a.bars}:b)}).join("")}</section>`});
 if(e.quellen)h+=`<section class="wi-karte"><h2>Quellen</h2><p class="wd-quellen">${e.quellen.map(E).join("<br>")}</p></section>`;
 h+=`<section class="wd-ende" id="wd-quiz"><div class="wd-ende-t"><h2>${r?"Nochmal testen?":"Alles gelesen? Dann ins Quiz."}</h2><p>${E(e.fragen.length)} Fragen · ca. 5 min${r?" · zuletzt "+E(status(id)):" · falsche Antworten kommen am Ende nochmal"}</p></div><div class="wd-ende-k"><button class="wq-go" data-wdhquiz="${E(id)}" data-kw="${E(kw)}">${o?"Quiz fortsetzen":"Quiz starten"}</button><button class="wq-ghost wd-teil2" data-wdhpdf="${E(id)}" data-kw="${E(kw)}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>Als PDF teilen</button></div></section>`;
 return h+`</div>`}
/* Lernseite: Kapitel mitlaufen lassen, sanft einblenden, Balken füllen */
var beob=null;
function einrichten(el){if(beob){beob.disconnect();beob=null}
 var seite=el.querySelector(".wd-einheit");if(!seite||!("IntersectionObserver" in window))return;
 var secs=[].slice.call(seite.querySelectorAll(".wd-k")),chips=[].slice.call(seite.querySelectorAll(".wd-toc-l button")),lese=seite.querySelector(".wd-lese em"),toc=seite.querySelector(".wd-toc-l"),akt=-1;
 seite.classList.add("wd-anim");
 function setze(i){if(i===akt)return;akt=i;chips.forEach(function(c,k){c.classList.toggle("an",k===i)});if(lese)lese.style.transform="scaleX("+((i+1)/(secs.length+1))+")";var c=chips[i];if(c&&toc.scrollWidth>toc.clientWidth)toc.scrollTo({left:c.offsetLeft-toc.clientWidth/2+c.offsetWidth/2,behavior:"smooth"})}
 beob=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("sicht");beob.unobserve(x.target)}})},{rootMargin:"0px 0px -10% 0px"});
 secs.forEach(function(s){beob.observe(s)});
 var tocEl=seite.querySelector(".wd-toc"),quiz=seite.querySelector("#wd-quiz"),plan=0;
 function lage(){plan=0;var kante=tocEl.getBoundingClientRect().bottom+16,i=0;secs.forEach(function(s,k){if(s.getBoundingClientRect().top<=kante)i=k});
  var letzte=secs[secs.length-1].getBoundingClientRect().bottom;setze(i)}
 var weiter=function(){if(!plan)plan=requestAnimationFrame(lage)};document.addEventListener("scroll",weiter,true);
 beob.weiter=weiter;var alt=beob.disconnect.bind(beob);beob.disconnect=function(){document.removeEventListener("scroll",weiter,true);alt()};
 setze(0)}
function lupe(img){var o=document.createElement("div");o.className="wd-lupe";o.innerHTML=`<img src="${E(img.getAttribute("src"))}" alt="${E(img.alt)}"><p>${img.parentElement.querySelector("figcaption")?img.parentElement.querySelector("figcaption").innerHTML:""}</p><button aria-label="Schließen">${ICO.x}</button>`;
 o.addEventListener("click",function(){o.classList.add("zu");setTimeout(function(){o.remove()},160)});document.body.append(o)}
window.WI_umschWdh=function(){return `<div class="wk-seg"><button data-a="wk-kb">Krankheitsbilder</button><button data-modus="tests">Tests</button><button data-a="wk-vo">Verordnung &amp; Abrechnung</button><button data-modus="wdh" class="an">Wiederholung</button></div>`};

/* Einhängen: neues letztes Segment */
var vorListe=WI_liste,vorZeige=WI_zeige;
WI_liste=function(){if(WI_st.modus==="wdh")return WI_st.wdh?seiteEinheit(WI_st.wdhKw,WI_st.wdh):seiteListe();return vorListe.apply(this,arguments)};
WI_zeige=function(){var el=WI_st.el;
 if(el&&WI_st.modus==="wdh"&&!WI_st.tid&&!WI_st.id&&!WI_st.kap){var k=WI_st.wdh||"",a=el.dataset.wdhK;el.innerHTML=WI_liste();el.dataset.wdhK=k;var sg=el.querySelector(".wk-seg"),an=sg&&sg.querySelector(".an");if(an&&sg.scrollWidth>sg.clientWidth)sg.scrollLeft=an.offsetLeft-sg.offsetLeft-12;einrichten(el);if(a!==k){var n=el;while(n&&n!==document.documentElement){if(n.scrollTop)n.scrollTop=0;n=n.parentElement}try{window.scrollTo(0,0)}catch(e){}}return}
 vorZeige.apply(this,arguments);
 if(!el)return;el.querySelectorAll(".wk-seg").forEach(function(s){if(!s.querySelector('[data-modus="wdh"]')){var b=document.createElement("button");b.dataset.modus="wdh";b.textContent="Wiederholung";s.append(b)}})};
document.addEventListener("click",function(ev){var b=ev.target.closest(".wi-portal button,.wi-portal summary");if(!b)return;var d=b.dataset;
 if(b.tagName==="SUMMARY"){setTimeout(function(){WI_st.wdhAlt=b.parentElement.open},0);return}
 if(d.modus==="wdh"){WI_st.wdh=null}
 if(d.zweig){ev.stopImmediatePropagation();WI_st.wdhZweig=d.zweig;WI_zeige();return}
 if(d.pfadwahl){ev.stopImmediatePropagation();WI_st.wdhPfad=d.pfadwahl;WI_zeige();return}
 if(d.wdh){ev.stopImmediatePropagation();WI_st.wdh=d.wdh;WI_st.wdhKw=d.kw;WI_zeige();return}
 if(d.wdhgo!=null){ev.stopImmediatePropagation();var z=document.getElementById("wd-s"+d.wdhgo);if(z)z.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});return}
 if(d.a==="wdh-liste"){ev.stopImmediatePropagation();WI_st.wdh=null;WI_zeige();return}
 if(d.wdhpdf){ev.stopImmediatePropagation();var w2=woche(d.kw),e2=w2&&alleE(w2).find(function(x){return x.id===d.wdhpdf});if(e2)pdfTeilen(e2,b);return}
 if(d.wdhquiz){ev.stopImmediatePropagation();var w=woche(d.kw),e=w&&alleE(w).find(function(x){return x.id===d.wdhquiz});if(e)Quiz.auf(e);return}
},true);


/* ---------- Teilen als PDF: Wiederholung, dann jede Frage auf eigener Seite, Lösungen am Ende ---------- */
function ladeJs(src){return new Promise(function(ok,no){if(window.jspdf)return ok();var s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.append(s)})}
function bildJpg(src){return new Promise(function(ok){var im=new Image();im.onload=function(){var c=document.createElement("canvas");c.width=im.naturalWidth;c.height=im.naturalHeight;var g=c.getContext("2d");g.fillStyle="#000";g.fillRect(0,0,c.width,c.height);g.drawImage(im,0,0);ok(c.toDataURL("image/jpeg",.85))};im.onerror=function(){ok(null)};im.src=src})}
// shortcut: Helvetica kann nur Windows-1252, seltene Zeichen werden ersetzt; bei Bedarf eigene TTF einbetten
function T(x){return OHNE(x).replace(/≤/g,"<=").replace(/≥/g,">=").replace(/→/g,"->").replace(/≈/g,"ca.").replace(/[^\x00-\xff€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,"")}
async function pdfBauen(e){
 await ladeJs("jspdf.umd.min.js");
 var doc=new window.jspdf.jsPDF({unit:"mm",format:"a4"}),W=210,H=297,M=18,B=W-2*M,y=M,ANT=[46,50,54],GR=[110,116,122],LIM=[201,232,107],LINIE=[226,226,222];
 var bilder={},alle=[];(e.abschnitte||[]).forEach(function(a){(a.b||[a]).forEach(function(b){(b.fig||[]).forEach(function(f){alle.push(f.src)})})});e.fragen.forEach(function(q){if(q[4])alle.push(q[4])});
 await Promise.all(alle.map(function(s){return bildJpg(s).then(function(d){bilder[s]=d})}));
 function farbe(c){doc.setTextColor(c[0],c[1],c[2])}
 function neu(){doc.addPage();y=M}
 function platz(h){if(y+h>H-M-8)neu()}
 function text(t,gr,stil,c,ab){doc.setFont("helvetica",stil||"normal");doc.setFontSize(gr);farbe(c||ANT);var z=doc.splitTextToSize(T(t),ab||B),lh=gr*.42;z.forEach(function(l){platz(lh);doc.text(l,M+(B-(ab||B)),y+lh*.8);y+=lh});return z.length*lh}
 // Kopf
 doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.roundedRect(M,y,46,7,3.5,3.5,"F");doc.setFont("helvetica","bold");doc.setFontSize(8.5);farbe(ANT);doc.text(T(ART[e.art]||"Wiederholung"),M+23,y+4.8,{align:"center"});y+=13;
 text(e.titel,24,"bold");y+=2;text("Kurze Wiederholung, ca. "+(e.min||8)+" min lesen · Quiz mit "+e.fragen.length+" Fragen",10,"normal",GR);y+=6;
 (e.abschnitte||[]).forEach(function(a){
  platz(16);doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.setLineWidth(.3);doc.line(M,y,W-M,y);y+=6;text(a.t,14,"bold");y+=2;
  (a.b||[a]).forEach(function(b){
   if(b.t){y+=1;text(b.t,11,"bold");y+=1}
   (b.p||[]).forEach(function(x){text(x,10.5);y+=2});
   if(b.l)b.l.forEach(function(x){doc.setFontSize(10.5);var z=doc.splitTextToSize(T(x),B-6);platz(z.length*4.4);doc.setFillColor(ANT[0],ANT[1],ANT[2]);doc.circle(M+1.5,y+2.5,.8,"F");farbe(ANT);doc.setFont("helvetica","normal");z.forEach(function(l){doc.text(l,M+6,y+3.6);y+=4.4});y+=1.2});
   if(b.s)b.s.forEach(function(x,n){text((n+1)+". "+x,10.5);y+=1});
   if(b.kurs){text("Aus deinem Kurs",10.5,"bold");b.kurs.forEach(function(x){text("- "+x,10.5);y+=1})}
   if(b.kase){text("Nach Kase-Konzept (Kurslehre, nicht durch Studien belegt)",10.5,"bold");b.kase.forEach(function(x){text("- "+x,10.5);y+=1})}
   if(b.mus){b.mus.forEach(function(m){var BL=[223,234,250],RO=[251,226,226],GN=[228,243,212],z=[["Ursprung",m.u,BL,[38,88,168]],["Ansatz",m.a,RO,[168,45,45]],["Nerv",m.i,GN,[62,112,30]],["Funktion",m.f,null,GR]],h=6;doc.setFontSize(9.5);z.forEach(function(r){h+=doc.splitTextToSize(T(r[1]),B-28).length*4+1.6});platz(h+3);doc.setFont("helvetica","bold");doc.setFontSize(10.5);farbe(ANT);doc.text(T(m.n),M,y+4);y+=6.5;z.forEach(function(r){var l=doc.splitTextToSize(T(r[1]),B-28);if(r[2]){doc.setFillColor(r[2][0],r[2][1],r[2][2]);doc.roundedRect(M,y-.2,23,l.length*4+1.4,1.2,1.2,"F")}y+=.6;doc.setFont("helvetica","bold");doc.setFontSize(9);farbe(r[3]);doc.text(r[0],M+2,y+3);doc.setFont("helvetica","normal");doc.setFontSize(9.5);farbe(ANT);l.forEach(function(t,k){doc.text(t,M+26,y+3+k*4)});y+=l.length*4+1.4});y+=3});y+=2}
   if(b.bars){b.bars.forEach(function(r){platz(11);doc.setFont("helvetica","bold");doc.setFontSize(10);farbe(ANT);doc.text(T(r[0]),M,y+3.5);doc.setFont("helvetica","normal");farbe(GR);doc.text(T(r[2]||""),W-M,y+3.5,{align:"right"});doc.setFillColor(LINIE[0],LINIE[1],LINIE[2]);doc.roundedRect(M,y+5.5,B,3,1.5,1.5,"F");doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.roundedRect(M,y+5.5,B*r[1]/100,3,1.5,1.5,"F");y+=12});y+=2}
   if(b.tab){y+=1;b.tab.forEach(function(r){doc.setFontSize(10);var k=doc.splitTextToSize(T(r[0]),52),v=doc.splitTextToSize(T(r[1]),B-58),h=Math.max(k.length,v.length)*4.2+3;platz(h);doc.setFont("helvetica","bold");farbe(ANT);k.forEach(function(l,i){doc.text(l,M,y+4+i*4.2)});doc.setFont("helvetica","normal");v.forEach(function(l,i){doc.text(l,M+58,y+4+i*4.2)});y+=h;doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.line(M,y-.5,W-M,y-.5)});y+=3}
   if(b.fig&&b.fig.length===1){var f1=b.fig[0],iw=72;doc.setFont("helvetica","normal");doc.setFontSize(9.5);var cz=doc.splitTextToSize(T(f1.t+" "+(f1.c||"")),B-iw-6);platz(iw+4);if(bilder[f1.src])doc.addImage(bilder[f1.src],"JPEG",M,y,iw,iw);farbe(GR);cz.forEach(function(l,k){doc.text(l,M+iw+6,y+4+k*4.2)});y+=iw+5}
   else if(b.fig){var bw=(B-6)/2;for(var i=0;i<b.fig.length;i+=2){var zeile=b.fig.slice(i,i+2),capH=0;doc.setFontSize(9);zeile.forEach(function(f){capH=Math.max(capH,doc.splitTextToSize(T(f.t+" "+(f.c||"")),bw).length*3.8)});platz(bw+capH+6);zeile.forEach(function(f,j){var x=M+j*(bw+6);if(bilder[f.src])doc.addImage(bilder[f.src],"JPEG",x,y,bw,bw);doc.setFont("helvetica","normal");farbe(GR);doc.splitTextToSize(T(f.t+" "+(f.c||"")),bw).forEach(function(l,k){doc.text(l,x,y+bw+4.5+k*3.8)})});y+=bw+capH+7}}
   if(b.merk){doc.setFont("helvetica","bold");doc.setFontSize(10.5);var z=doc.splitTextToSize(T("Merke: "+b.merk),B-10),h=z.length*4.4+7;platz(h);doc.setFillColor(238,246,212);doc.roundedRect(M,y,B,h,3,3,"F");doc.setFont("helvetica","bold");farbe(ANT);z.forEach(function(l,i){doc.text(l,M+5,y+6+i*4.4)});y+=h+3}
  });y+=3});
 if(e.quellen){platz(14);doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.line(M,y,W-M,y);y+=6;text("Quellen",11,"bold");y+=1;e.quellen.forEach(function(q){text(q,9,"normal",GR);y+=1})}
 // Quiz: alle Fragen untereinander, Antworten als 2 × 2
 var L="ABCD";neu();var qStart=doc.getNumberOfPages();
 text("Quiz",20,"bold");y+=1;text(e.fragen.length+" Fragen. Die Lösungen stehen am Ende.",10,"normal",GR);y+=5;
 e.fragen.forEach(function(q,n){
  var img=q[4]&&bilder[q[4]],iw=img?36:0,x0=M+9+(img?iw+5:0),aw=W-M-x0,cw=(aw-4)/2;
  doc.setFont("helvetica","bold");doc.setFontSize(10.5);var qz=doc.splitTextToSize(T(q[0]),aw);
  doc.setFont("helvetica","normal");doc.setFontSize(9.5);
  var zl=q[1].map(function(o){return doc.splitTextToSize(T(o),cw-10)}),rh=[0,1].map(function(r){return Math.max(zl[r*2].length,(zl[r*2+1]||[]).length)*3.9+4.2});
  var h=Math.max(qz.length*4.6+2+rh[0]+rh[1]+3,iw)+7;platz(h);
  doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.setLineWidth(.3);if(n)doc.line(M,y-3.5,W-M,y-3.5);
  doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.circle(M+3.3,y+2.8,3.3,"F");doc.setFont("helvetica","bold");doc.setFontSize(8.5);farbe(ANT);doc.text(String(n+1),M+3.3,y+4,{align:"center"});
  if(img)doc.addImage(img,"JPEG",M+9,y,iw,iw);
  var yy=y;doc.setFontSize(10.5);qz.forEach(function(l){doc.text(l,x0,yy+3.8);yy+=4.6});yy+=2;
  [0,1].forEach(function(r){[0,1].forEach(function(c){var i=r*2+c;if(!q[1][i])return;var x=x0+c*(cw+4);
   doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.setLineWidth(.4);doc.roundedRect(x,yy,cw,rh[r]-1.5,2,2,"S");
   doc.setFont("helvetica","bold");doc.setFontSize(8.5);farbe(GR);doc.text(L[i],x+3.5,yy+4.3);
   doc.setFont("helvetica","normal");doc.setFontSize(9.5);farbe(ANT);zl[i].forEach(function(l,k){doc.text(l,x+8,yy+4.4+k*3.9)})});yy+=rh[r]});
  y=Math.max(yy,y+iw)+7});
 var loes=doc.getNumberOfPages()+1;for(var pg=qStart;pg<loes;pg++){doc.setPage(pg);doc.setFont("helvetica","normal");doc.setFontSize(8.5);farbe(GR);doc.text("Lösungen auf Seite "+loes,W-M,H-14,{align:"right"})}doc.setPage(loes-1);
 // Lösungen
 neu();text("Lösungen",20,"bold");y+=4;
 e.fragen.forEach(function(q,n){doc.setFontSize(10.5);var z=doc.splitTextToSize(T(q[3]),B-12);platz(10+z.length*4.4);doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.circle(M+3.5,y+3.3,3.5,"F");doc.setFont("helvetica","bold");doc.setFontSize(9);farbe(ANT);doc.text(String(n+1),M+3.5,y+4.6,{align:"center"});doc.setFontSize(10.5);doc.text(doc.splitTextToSize(T(L[q[2]]+"  "+q[1][q[2]]),B-12),M+12,y+4.5);y+=6+4.4*(doc.splitTextToSize(T(q[1][q[2]]),B-18).length-1);doc.setFont("helvetica","normal");farbe(GR);z.forEach(function(l){doc.text(l,M+12,y+3.5);y+=4.4});y+=5});
 // Fuß auf jeder Seite
 var N=doc.getNumberOfPages();for(var i=1;i<=N;i++){doc.setPage(i);doc.setFont("helvetica","normal");doc.setFontSize(8);farbe(GR);doc.text(T("Doku-Fix · Wiederholung · "+e.titel),M,H-8);doc.text(i+" / "+N,W-M,H-8,{align:"right"});if(i===1)doc.text(T("Entwurf, fachlich prüfen. Bilder sind KI-erstellte Lehrbilder, keine echten Aufnahmen."),M,H-12)}
 return doc.output("blob")}
async function pdfTeilen(e,btn){btn.setAttribute("aria-busy","true");
 try{var blob=await pdfBauen(e),name="Wiederholung_"+e.titel.replace(/[^A-Za-zÄÖÜäöüß0-9]+/g,"_").replace(/^_|_$/g,"")+".pdf",f=new File([blob],name,{type:"application/pdf"});
  try{var cl=window.claude,dl=cl&&cl.use?await cl.use("downloads"):null;if(dl){await dl.save({filename:name,data:blob});return}}catch(x){if(x&&x.code==="declined")return}
  try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:e.titel});return}}catch(x){if(x&&x.name==="AbortError")return}
  var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.append(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},2000)}
 catch(x){btn.style.color="#c4140b";btn.setAttribute("aria-label","PDF ging nicht");console.error(x)}
 finally{btn.removeAttribute("aria-busy")}}
window.WDH_pdf=pdfBauen;

/* ---------- Quiz-Buddy Patti: kommentiert Antworten (optional, mit Stimme) ---------- */
var Buddy=(function(){var KEY="df-wdh-buddy",au=null,el,txt,img,tm,stimme=null,heim=document.body,SP=null,sl=false;
 function an(){try{return localStorage.getItem(KEY)==="1"}catch(e){return false}}
 function setz(v){try{localStorage.setItem(KEY,v?"1":"0")}catch(e){}if(v)lade();else{still();weg()}}
 var geladen={},uid=null;
 function skript(src,f){if(geladen[src])return;geladen[src]=1;var sc=document.createElement("script");sc.src=src;if(f){sc.onload=function(){f(true)};sc.onerror=function(){f(false)}}document.head.append(sc)}
 function lade(){if(!sl){sl=true;skript("fortbildung/patti.js",function(){SP=window.PATTI_SP||{}})}skript("fortbildung/patti-ton/allgemein.js");if(uid)skript("fortbildung/patti-ton/"+uid+".js")}
 function einheit(u){uid=u;if(an())lade()}
 function bau(){if(el)return;el=document.createElement("div");el.className="wb";el.hidden=true;el.setAttribute("aria-live","polite");
  el.innerHTML='<div class="wb-fig"><span class="wb-k"><span class="wb-m"><img alt="" width="84" height="84"></span></span><small>Patti</small></div><div class="wb-blase"></div>';heim.append(el);txt=el.querySelector(".wb-blase");img=el.querySelector("img");kp=el.querySelector(".wb-k")}
 // Lippensynchron: je Emotion ein Streifen mit 6 Mundbildern (0 zu, 1 leicht, 2 halb, 3 weit, 4 O, 5 E), gesteuert über Lautstärke und Klangfarbe der Aufnahme
 var kp,emo="neutral",MB="fortbildung/bilder/patti/mund/patti-",fr=[],ctx=null,ana=null,raf=0,fake=0,last=-1,lastT=0,vorrat={};
 function bild(e){emo=e||"neutral";last=-1;if(!img)return;img.onerror=null;if(ohne[emo]){img.className="";img.style.transform="";img.src="fortbildung/bilder/patti/patti-"+emo+".webp";return}
  img.onerror=function(){ohne[emo]=1;img.onerror=null;img.className="";img.style.transform="";img.src="fortbildung/bilder/patti/patti-"+emo+".webp"};img.className="wb-sprite";img.src=MB+emo+".webp";zeig(0,true)}
 var ohne={};function zeig(n,jetzt){if(n===last&&!jetzt)return;last=n;if(!img||ohne[emo])return;img.style.transform="translateX("+(-n*100/6).toFixed(4)+"%)"}
 function koerper(l){if(!kp)return;kp.style.transform=l?"translateY("+(-l*6).toFixed(1)+"px) scale("+(1+l*.05).toFixed(3)+","+(1-l*.035).toFixed(3)+") rotate("+(Math.sin(Date.now()/260)*l*3).toFixed(2)+"deg)":""}
 function mundAus(){cancelAnimationFrame(raf);raf=0;clearInterval(fake);fake=0;zeig(0,true);koerper(0)}
 function mundAudio(a){mundAus();try{var AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw 0;if(!ctx)ctx=new AC();if(ctx.state!=="running")ctx.resume();if(ctx.state!=="running")throw 0;
   var src=ctx.createMediaElementSource(a);ana=ctx.createAnalyser();ana.fftSize=1024;ana.smoothingTimeConstant=.35;src.connect(ana);ana.connect(ctx.destination)}catch(e){ana=null;return mundSchein()}
  var td=new Uint8Array(ana.fftSize),fd=new Uint8Array(ana.frequencyBinCount),pegel=0,ms=0;
  (function schleife(t){raf=requestAnimationFrame(schleife);ana.getByteTimeDomainData(td);var q=0;for(var i=0;i<td.length;i++){var v=(td[i]-128)/128;q+=v*v}var rms=Math.sqrt(q/td.length);
   pegel=pegel*.55+Math.min(1,rms*5)*.45;koerper(pegel);if(t-lastT<70)return;lastT=t;
   ana.getByteFrequencyData(fd);var su=0,gw=0;for(var k=2;k<180;k++){su+=fd[k];gw+=fd[k]*k}var mitte=su?gw/su:0;
   if(pegel>.1)ms=ms?ms*.9+mitte*.1:mitte;var n=pegel<.1?0:pegel<.3?1:pegel<.55?2:3;if(n>=1&&ms&&mitte>ms+7)n=5;else if(n>=1&&ms&&mitte<ms-9)n=4;zeig(n)})(0)}
 function mundSchein(){mundAus();var folge=[1,2,3,2,1,5,2,4,1,3,2,0];var i=0;fake=setInterval(function(){var n=folge[i++%folge.length];zeig(n);koerper(n?.35:0)},110)}
 function wahl(){if(stimme||!window.speechSynthesis)return stimme;var v=speechSynthesis.getVoices().filter(function(x){return /^de/i.test(x.lang)});
  stimme=v.find(function(x){return /anna|helena|petra|marlene|female/i.test(x.name)})||v[0]||null;return stimme}
 function still(){mundAus();try{window.speechSynthesis&&speechSynthesis.cancel()}catch(e){}try{if(au){au.pause();au=null}}catch(e){}if(el)el.classList.remove("spricht")}
 function weg(){if(el)el.hidden=true}
 function sag(t,e){var emo=e;if(!an())return;bau();clearTimeout(tm);txt.textContent=t;bild(emo);el.hidden=false;el.classList.remove("rein");void el.offsetWidth;el.classList.add("rein");
  var dauer=Math.max(2800,t.length*80);
  if(ton(t))return;
  if(window.speechSynthesis&&window.SpeechSynthesisUtterance){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="de-DE";var v=wahl();if(v)u.voice=v;u.rate=1.05;u.pitch=1.25;
   u.onstart=function(){el.classList.add("spricht");mundSchein()};u.onend=u.onerror=function(){el.classList.remove("spricht");mundAus();tm=setTimeout(weg,2200)};speechSynthesis.speak(u);return}catch(e){}}
  el.classList.add("spricht");tm=setTimeout(function(){el.classList.remove("spricht");weg()},dauer)}
 function fnv(t){var h=0x811c9dc5;for(var i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}return ("0000000"+h.toString(16)).slice(-8)}
 // Aufgenommene Patti-Stimme (Qwen3-TTS, Vivian); fehlt die Datei, spricht die Browserstimme
 function ton(t){try{var b=window.PATTI_TON&&window.PATTI_TON[fnv(t)];if(!b||!window.Audio)return false;still();var bin=atob(b),z=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)z[i]=bin.charCodeAt(i);var url=URL.createObjectURL(new Blob([z],{type:"audio/mpeg"})),a=new Audio(url);au=a;a.addEventListener("ended",function(){URL.revokeObjectURL(url)});
  a.onplaying=function(){el.classList.add("spricht")};a.onended=function(){el.classList.remove("spricht");mundAus();tm=setTimeout(weg,2200)};mundAudio(a);
  a.onerror=function(){if(au!==a)return;au=null;try{var u=new SpeechSynthesisUtterance(t);u.lang="de-DE";var v=wahl();if(v)u.voice=v;u.rate=1.05;u.pitch=1.25;u.onstart=function(){el.classList.add("spricht");mundSchein()};u.onend=u.onerror=function(){el.classList.remove("spricht");mundAus();tm=setTimeout(weg,2200)};speechSynthesis.speak(u)}catch(e){tm=setTimeout(weg,Math.max(2800,t.length*80))}};
  var p=a.play();if(p&&p.catch)p.catch(function(){});return true}catch(e){return false}}
 function eins(a){return a[Math.floor(Math.random()*a.length)]}
 var RICHTIG=["Na also, geht doch.","Sogar ein blindes Huhn findet mal ein Korn.","Wer hätte das gedacht. Richtig.","Ich bin fast stolz auf dich.","Schau an, da ist ja doch was hängen geblieben.","Richtig. Sag das bloß nicht zu laut, sonst gewöhn ich mich dran."],
  FALSCH=[["Wie kann man nur so blöd sein? Lies die Erklärung, aber gründlich.","frech"],["Ernsthaft jetzt, Bruno?","entsetzt"],["Hast du dein Examen im Lotto gewonnen?","frech"],["Das tut mir als Kniescheibe körperlich weh.","entsetzt"],["Dein Dozent weint gerade leise.","enttaeuscht"],["Mutig. Dumm, aber mutig.","skeptisch"]],
  SERIE={3:"Drei in Folge. Wer bist du und was hast du mit Bruno gemacht?",5:"Fünf am Stück. Jetzt bloß nicht abheben.",8:"Acht in Folge. Ich bin beeindruckt."},
  EMO={skeptisch:"skeptisch",frech:"frech","enttäuscht":"enttaeuscht",enttaeuscht:"enttaeuscht",entsetzt:"entsetzt",nachdenklich:"nachdenklich"};
 function antwort(ok,serie,uid,frage){
  if(ok&&SERIE[serie])return sag(SERIE[serie],"begeistert");
  var x=SP&&uid&&frage?SP[uid+"|"+String(frage).slice(0,60)]:null;
  if(x)return ok?sag(x[0],Math.random()<.35?"stolz":"freut"):sag(x[1],EMO[x[2]]||"nachdenklich");
  if(ok)return sag(eins(RICHTIG),Math.random()<.35?"stolz":"freut");var f=eins(FALSCH);sag(f[0],f[1])}
 function hallo(){sag("Hallo Bruno, ich bin Patti. Ab jetzt sag ich dir ehrlich, was ich von deinen Antworten halte.","neutral")}
 function pause(r,n){r===n?sag("Erste Runde ohne Fehler. Hast du geschummelt?","stolz"):sag("Erste Runde geschafft. Jetzt kommen deine Peinlichkeiten nochmal dran.","nachdenklich")}
 function ende(r,n){var q=r/Math.max(n,1);q===1?sag("Alles auf Anhieb richtig. Ich bin sprachlos. Fast.","begeistert"):q>=.75?sag("Starke Runde. Ich muss mich erst mal setzen.","stolz"):q>=.5?sag("Geht so, Bruno. Ein paar Sachen sitzen noch nicht, und das weißt du.","nachdenklich"):sag("Ganz ehrlich, Bruno? Das war nichts. Nochmal, und diesmal mit Gehirn.","enttaeuscht")}
 return{in:function(h){heim=h;if(el)h.append(el)},an:an,setz:setz,lade:lade,einheit:einheit,antwort:antwort,hallo:hallo,pause:pause,ende:ende,still:still,weg:weg}})();

/* ---------- Quiz: eine Frage pro Bildschirm ---------- */
var Quiz=(function(){
 var RM=matchMedia("(prefers-reduced-motion: reduce)").matches,L="ABCD",st,view,sheet,bar,cnt,Q,unit,queue,pos,round,att,right,answered,firstWrong,done,streak;
 function $(s){return st.querySelector(s)}
 function bauen(){if(st)return;st=document.createElement("div");st.className="wq";st.hidden=true;st.setAttribute("role","dialog");st.setAttribute("aria-modal","true");
  st.innerHTML=`<header class="wq-top"><button class="wq-ico" data-q="zu" type="button" aria-label="Quiz schließen">${ICO.x}</button><div class="wq-bar" aria-hidden="true"><i></i></div><span class="wq-cnt"></span><button class="wq-ico wq-buddy" data-q="buddy" type="button" aria-label="Quiz-Buddy mit Stimme" aria-pressed="false"></button></header><div class="wq-view"></div><div class="wq-sheet" aria-live="polite"><div class="wq-sin"><div class="wq-verdict"></div><div class="wq-cmp"></div><p class="wq-why"></p><button class="wq-go" data-q="weiter" type="button">Weiter</button></div></div>`;
  document.body.append(st);Buddy.in(st);view=$(".wq-view");sheet=$(".wq-sheet");bar=$(".wq-bar i");cnt=$(".wq-cnt");
  st.addEventListener("click",function(ev){var b=ev.target.closest("button");if(!b)return;
   if(b.classList.contains("wq-opt"))return pick(b);
   var q=b.dataset.q;if(q==="zu")zu();else if(q==="weiter")next();else if(q==="rep")ask();else if(q==="neu"){offenWeg(unit.id);reset();ask()}else if(q==="fort")fort();else if(q==="buddy")buddyKnopf(true)});
  document.addEventListener("keydown",function(e){if(st.hidden)return;if(e.key==="Escape"){zu();return}
   var k="1234abcd".indexOf(String(e.key).toLowerCase());
   if(k>-1&&!answered){var o=view.lastElementChild&&view.lastElementChild.querySelectorAll(".wq-opt")[k%4];if(o)pick(o)}
   else if(e.key==="Enter"&&answered&&document.activeElement!==$('[data-q="weiter"]')){e.preventDefault();next()}})}
 function buddyKnopf(um){var b=$(".wq-buddy"),v=Buddy.an();if(um){v=!v;Buddy.setz(v);if(v)Buddy.hallo()}else if(v)Buddy.lade();
  b.setAttribute("aria-pressed",v?"true":"false");b.innerHTML=v?'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>':'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>';
  b.title=v?"Buddy an: tippen zum Ausschalten":"Buddy aus: tippen zum Einschalten"}
 function mix(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=a[i];a[i]=a[j];a[j]=t}return a}
 function reset(){queue=Q.map(function(_,i){return i});pos=0;round=1;att=Q.map(function(){return 0});right=0;firstWrong=[];done=0;streak=0}
 function progress(){var rest=queue.length-pos-(answered?1:0),total=done+rest;bar.style.transform="scaleX("+Math.max(.02,done/Math.max(total,1))+")";cnt.textContent=round===1?(pos+1)+" / "+Q.length:"Wiederholung "+(pos+1)+" / "+queue.length}
 function sheetZu(){answered=false;sheet.classList.remove("on","ok","no");st.style.setProperty("--sh","0px")}
 function swap(html,after){var old=view.firstElementChild,nu=document.createElement("div");nu.className="wq-card";nu.innerHTML=html;
  if(old&&!RM){old.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateX(-6%)",filter:"blur(2px)"}],{duration:180,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"}).onfinish=function(){old.remove()};
   nu.style.position="absolute";view.append(nu);nu.animate([{opacity:0,transform:"translateX(8%)"},{opacity:1,transform:"none"}],{duration:300,delay:90,easing:"cubic-bezier(.23,1,.32,1)",fill:"backwards"}).onfinish=function(){nu.style.position=""}}
  else{if(old)old.remove();view.append(nu)}
  view.scrollTop=0;if(after)after(nu)}
 function ask(){sheetZu();var i=queue[pos],q=Q[i],again=round>1,ord=q[1].map(function(_,j){return j});if(again)ord=mix(ord);progress();
  swap(`${again?'<span class="wq-tag">Nochmal</span>':""}<h3 class="wq-q">${E(q[0])}</h3>${q[4]?`<figure class="wq-img"><img src="${E(q[4])}" alt="Bild zur Frage"></figure>`:""}<div class="wq-opts" role="group">${ord.map(function(j,k){return `<button class="wq-opt" type="button" data-a="${j}" style="--d:${k*40}ms"><span class="wq-key">${L[k]}</span><span class="wq-tx">${E(q[1][j])}</span><span class="wq-st"></span></button>`}).join("")}</div>`)}
 function pick(btn){if(answered)return;answered=true;var i=queue[pos],q=Q[i],c=q[2],a=+btn.dataset.a,ok=a===c,card=view.lastElementChild;att[i]++;done++;
  if(round===1){if(ok)right++;else firstWrong.push(i)}
  card.classList.add("wq-ans");var cb=card.querySelector('.wq-opt[data-a="'+c+'"]');cb.classList.add("isok");cb.querySelector(".wq-st").innerHTML=ICO.ok;
  if(!ok){btn.classList.add("isno");btn.querySelector(".wq-st").innerHTML=ICO.no;if(!RM)btn.animate([{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(5px)"},{transform:"translateX(-3px)"},{transform:"translateX(0)"}],{duration:320,easing:"ease-out"});try{navigator.vibrate&&navigator.vibrate(40)}catch(e){}queue.push(i);streak=0}
  else{streak++;if(!RM)cb.animate([{transform:"scale(1)"},{transform:"scale(1.025)"},{transform:"scale(1)"}],{duration:280,easing:"cubic-bezier(.23,1,.32,1)"})}
  var lines=ok?["Richtig.","Genau.","Sitzt.","Stimmt."]:["Nicht ganz.","Knapp daneben.","Das war es nicht."];
  $(".wq-verdict").innerHTML=(ok?ICO.ok:ICO.no)+"<span>"+lines[(i+att[i])%lines.length]+"</span>"+(ok&&streak>=3?"<em>"+streak+" in Folge</em>":"");
  $(".wq-cmp").innerHTML=ok?"":`<div><small>Deine Antwort</small>${E(q[1][a])}</div><div><small>Richtig</small><b>${E(q[1][c])}</b></div>`;
  $(".wq-why").textContent=OHNE(q[3]);
  var last=pos+1>=queue.length;$('[data-q="weiter"]').textContent=last?"Zur Auswertung":(pos+1===Q.length&&round===1&&queue.length>Q.length?"Zu den Wiederholungen":"Weiter");
  sheet.classList.add("on",ok?"ok":"no");
  requestAnimationFrame(function(){var sh=sheet.offsetHeight;st.style.setProperty("--sh",sh+"px");var o=card.querySelector(".wq-opts"),t=o.offsetTop+o.offsetHeight-(view.clientHeight-sh)+20;if(t>view.scrollTop)setTimeout(function(){view.scrollTo({top:t,behavior:RM?"auto":"smooth"})},60)});
  Buddy.antwort(ok,streak,unit.id,q[0]);progress();sichern(true);setTimeout(function(){$('[data-q="weiter"]').focus({preventScroll:true})},60)}
 /* Stand nach jeder Antwort sichern, damit ein unterbrochenes Quiz an derselben Stelle weitergeht */
 function sichern(ans){var P=jLes(PKEY,{});if(!P||typeof P!=="object")P={};
  var f=round===1?Math.min(pos+(ans?2:1),Q.length):0;
  P[unit.id]={n:Q.length,queue:queue,pos:pos,round:round,att:att,right:right,firstWrong:firstWrong,done:done,streak:streak,ans:!!ans,f:f,t:Date.now()};jSchr(PKEY,P)}
 function next(){if(!answered)return;weiter()}
 function weiter(){pos++;
  if(pos<queue.length&&pos===Q.length&&round===1){queue=queue.slice(pos);pos=0;round=2;sichern(false);pause();Buddy.pause(right,Q.length);return}
  if(pos>=queue.length){ende();return}sichern(false);ask()}
 function fort(){var o=offen(unit.id);if(!o){reset();ask();return}
  queue=o.queue;pos=o.pos;round=o.round;att=o.att;right=o.right;firstWrong=o.firstWrong||[];done=o.done;streak=o.streak||0;answered=false;
  if(o.ans)weiter();else ask()}
 function fortFrage(o){sheetZu();progress();cnt.textContent="Pause";
  swap(`<div class="wq-mid"><div class="wq-big">${o.right}<span>/${o.n}</span></div><h3 class="wq-q">Du warst mittendrin.</h3><p>${E(offenText(o))}. ${o.right} ${o.right===1?"Frage":"Fragen"} hattest du bis dahin auf Anhieb richtig.</p><div class="wq-ends"><button class="wq-go" data-q="fort" type="button">Weitermachen</button><button class="wq-ghost" data-q="neu" type="button">Neu anfangen</button></div></div>`)}
 function pause(){sheetZu();progress();cnt.textContent="Pause";var n=queue.length;
  swap(`<div class="wq-mid"><div class="wq-big">${right}<span>/${Q.length}</span></div><h3 class="wq-q">Erste Runde geschafft.</h3><p>${n===1?"Eine Frage kommt":n+" Fragen kommen"} jetzt nochmal, mit neu gemischten Antworten. Was wieder falsch ist, kommt so lange, bis es sitzt.</p><button class="wq-go" data-q="rep" type="button">Wiederholung starten</button></div>`)}
 function ende(){sheetZu();bar.style.transform="scaleX(1)";cnt.textContent="Fertig";
  var reps=att.reduce(function(s,a){return s+a-1},0),R=lesen(),alt=R[unit.id];
  var heute=new Date(),dat=heute.getFullYear()+"-"+String(heute.getMonth()+1).padStart(2,"0")+"-"+String(heute.getDate()).padStart(2,"0"),fehler=Q.length-right;
  R[unit.id]={right:right,total:Q.length,reps:reps,datum:dat,mal:(alt&&alt.mal||0)+1,best:Math.max(right,alt&&alt.best||0)};schreiben(R);
  Buddy.ende(right,Q.length);var LG=laeufe();LG.push({d:dat,id:unit.id,t:unit.titel,r:right,n:Q.length,w:reps});jSchr(LKEY,LG);offenWeg(unit.id);
  var ms=monatStat(dat.slice(0,7)),zahl=`<div class="wq-zahl"><div><b>${right}/${Q.length}</b><small>auf Anhieb</small></div><div><b>${fehler}</b><small>Fehler</small></div><div><b>${reps}</b><small>${reps===1?"Wiederholung":"Wiederholungen"}</small></div></div>`+(ms?`<p class="wq-note">Im ${E(MON[heute.getMonth()])} bisher: ${ms.l} ${ms.l===1?"Durchlauf":"Durchläufe"}, ${ms.pct} % auf Anhieb richtig, ${ms.w} Wiederholungen.</p>`:"");
  var miss=firstWrong.length?`<div class="wq-miss"><h4>Diese Fragen hatten dich erwischt</h4><ol>${firstWrong.filter(function(v,i,a){return a.indexOf(v)===i}).map(function(i){return `<li><span>${E(Q[i][0])}</span><b>${E(Q[i][1][Q[i][2]])}</b></li>`}).join("")}</ol></div>`:"";
  swap(`<h3 class="wq-q">Auswertung</h3><div class="wq-ausw"></div><p class="wq-note">Antippen spielt die Auswertung nochmal ab.</p>${zahl}${miss}<div class="wq-ends"><button class="wq-go" data-q="neu" type="button">Quiz neu starten</button><button class="wq-ghost" data-q="zu" type="button">Zurück zur Einheit</button></div>`,function(nu){
   var el=nu.querySelector(".wq-ausw"),p={right:right,total:Q.length,attempts:att.slice()};
   var fb=function(){el.style.cssText="padding:20px;color:#fff";el.textContent=right+" von "+Q.length+" auf Anhieb, "+reps+(reps===1?" Wiederholung":" Wiederholungen")+"."};
   var go=function(){try{window.zeigeAuswertung(el,p)}catch(e){fb()}};
   if(window.zeigeAuswertung)go();else{var s=document.createElement("script");s.src="fortbildung/auswertung.js";s.onload=go;s.onerror=fb;document.head.append(s)}})}
 function auf(e){bauen();unit=e;Buddy.einheit(e.id);buddyKnopf(false);Q=e.fragen;reset();st.hidden=false;document.documentElement.classList.add("wi-auf");
  if(!RM)st.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:320,easing:"cubic-bezier(.23,1,.32,1)"});
  view.innerHTML="";var o=offen(e.id);if(o&&o.n===Q.length&&Array.isArray(o.queue))fortFrage(o);else{offenWeg(e.id);ask()}}
 function zu(){st.hidden=true;sheetZu();Buddy.still();Buddy.weg();document.documentElement.classList.remove("wi-auf");if(WI_st.modus==="wdh")WI_zeige()}
 return{auf:auf}})();
window.WDH_Quiz=Quiz;
document.addEventListener("click",function(ev){var im=ev.target.closest(".wd-figs img");if(im)lupe(im)});
/* Kleines Fenster mit der Zusatzerklärung, am Begriff verankert */
var Pop=(function(){var el,quelle,RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
 function bau(){if(el)return;el=document.createElement("div");el.className="wd-pop";el.hidden=true;el.setAttribute("role","dialog");
  el.innerHTML='<div class="wd-pop-k"><button type="button" class="wd-pop-x" aria-label="Schließen">&times;</button><h3></h3><div class="wd-pop-t"></div></div>';document.body.append(el);
  el.querySelector(".wd-pop-x").addEventListener("click",zu);
  document.addEventListener("pointerdown",function(ev){if(!el.hidden&&!ev.target.closest(".wd-pop-k")&&!ev.target.closest(".wd-i"))zu()},true);
  document.addEventListener("keydown",function(ev){if(ev.key==="Escape"&&!el.hidden)zu()});
  window.addEventListener("resize",zu);document.addEventListener("scroll",function(){if(!el.hidden)lage()},true)}
 function lage(){if(!quelle)return;var k=el.firstChild,r=quelle.getBoundingClientRect(),vw=innerWidth,vh=innerHeight,w=Math.min(380,vw-24);
  k.style.width=w+"px";var h=k.offsetHeight,x=Math.max(12,Math.min(r.left+r.width/2-w/2,vw-w-12)),unten=r.bottom+10+h<vh-80||r.top-10-h<70,y=unten?r.bottom+10:r.top-10-h;
  if(r.bottom<0||r.top>vh)return zu();
  k.style.left=x+"px";k.style.top=Math.max(12,y)+"px";k.style.transformOrigin=(r.left+r.width/2-x)+"px "+(unten?"0":"100%")}
 function auf(btn){bau();var e=aktE,i=e&&e.info&&e.info[btn.dataset.info];if(!i)return;
  if(quelle===btn&&!el.hidden)return zu();if(quelle)quelle.setAttribute("aria-expanded","false");quelle=btn;btn.setAttribute("aria-expanded","true");
  el.querySelector("h3").textContent=i.t;el.querySelector(".wd-pop-t").innerHTML=(Array.isArray(i.x)?i.x:[i.x]).map(function(p){return "<p>"+TX(p)+"</p>"}).join("")+(i.q?'<p class="wd-pop-q">'+E(i.q)+"</p>":"");
  el.hidden=false;lage();var k=el.firstChild;if(!RM)k.animate([{opacity:0,transform:"scale(.96)"},{opacity:1,transform:"none"}],{duration:200,easing:"cubic-bezier(.23,1,.32,1)"})}
 function zu(){if(!el||el.hidden)return;el.hidden=true;if(quelle){quelle.setAttribute("aria-expanded","false");quelle.focus({preventScroll:true})}quelle=null}
 return{auf:auf,zu:zu}})();
document.addEventListener("click",function(ev){var b=ev.target.closest(".wd-i");if(b){ev.preventDefault();Pop.auf(b)}});
function muWahl(k,ausChip){if(!k)return;var war=k.classList.contains("an");var sec=k.closest(".wd-k")||document;
 sec.querySelectorAll(".wd-mu.an").forEach(function(x){x.classList.remove("an");x.setAttribute("aria-pressed","false")});
 sec.querySelectorAll(".wd-muc button").forEach(function(x){x.classList.toggle("an",!war&&x.dataset.mu===k.id)});
 var figs=[].slice.call(sec.querySelectorAll(".wd-figs figure"));figs.forEach(function(f){f.classList.remove("spot");f.querySelectorAll(".wd-ring").forEach(function(r){r.remove()})});var fig=(k.dataset.b&&figs.filter(function(f){var i=f.querySelector("img");return i&&i.getAttribute("src").indexOf(k.dataset.b)>=0})[0])||figs[0],img=fig&&fig.querySelector("img");
 if(fig){fig.classList.remove("spot");fig.querySelectorAll(".wd-ring").forEach(function(r){r.remove()})}
 if(war&&!ausChip)return;
 k.classList.add("an");k.setAttribute("aria-pressed","true");
 var pts=[];try{pts=JSON.parse(k.dataset.p||"[]")}catch(e){}
 if(img&&pts.length){
  var sp=fig.querySelector(".wd-spot");if(!sp){sp=document.createElement("span");sp.className="wd-spot";fig.insertBefore(sp,fig.querySelector("figcaption"))}
  sp.style.width=img.offsetWidth+"px";sp.style.height=img.offsetHeight+"px";sp.style.left=img.offsetLeft+"px";sp.style.top=img.offsetTop+"px";sp.style.aspectRatio="auto";
  sp.style.background=pts.map(function(q){return "radial-gradient(circle at "+q[0]+"% "+q[1]+"%,transparent 0,transparent 9%,rgba(20,24,16,.5) 15%)"}).join(",");
  if(pts.length>1)sp.style.background="rgba(20,24,16,.35)";
  pts.forEach(function(q){var r=document.createElement("span");r.className="wd-ring";r.style.left=(img.offsetLeft+img.offsetWidth*q[0]/100)+"px";r.style.top=(img.offsetTop+img.offsetHeight*q[1]/100)+"px";fig.appendChild(r)});
  requestAnimationFrame(function(){fig.classList.add("spot")});
  var z=k.querySelector(".wd-zoom i");if(z){var cx=0,cy=0;pts.forEach(function(q){cx+=q[0]/pts.length;cy+=q[1]/pts.length});var S=pts.length>1?1.25:1.6;
   z.style.backgroundImage="url('"+img.getAttribute("src")+"')";z.style.boxShadow="inset 0 0 0 1px rgba(0,0,0,.06)";z.style.backgroundSize=(S*100)+"% auto";
   requestAnimationFrame(function(){var w=z.offsetWidth||300,h=z.offsetHeight||225,W=w*S;var bx=Math.min(0,Math.max(w-W,w/2-W*cx/100)),by=Math.min(0,Math.max(h-W,h/2-W*cy/100));
    z.style.backgroundPosition=bx+"px "+by+"px";z.querySelectorAll(".wd-ring").forEach(function(r){r.remove()});
    pts.forEach(function(q){var r=document.createElement("span");r.className="wd-ring";r.style.left=(bx+W*q[0]/100)+"px";r.style.top=(by+W*q[1]/100)+"px";z.appendChild(r)})})}}
 if(ausChip)k.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"})}
document.addEventListener("click",function(ev){var b=ev.target.closest(".wd-muc button");if(b){muWahl(document.getElementById(b.dataset.mu),true);return}
 var k=ev.target.closest(".wd-mu[data-p]");if(k)muWahl(k,false)});
document.addEventListener("keydown",function(ev){if((ev.key==="Enter"||ev.key===" ")&&ev.target.matches&&ev.target.matches(".wd-mu[data-p]")){ev.preventDefault();muWahl(ev.target,false)}});
index();
if(window.WI_st&&WI_st.el)WI_zeige();
})();
