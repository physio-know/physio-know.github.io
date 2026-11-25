/* Wissen › Forschung: aktuelle Studien, aufbereitet für die Praxis. Seit v263 (24.11.2026).
   Neue Studie: oben in FO_STUDIEN eintragen (neueste zuerst). Ordnet außerdem die Reiter:
   Krankheitsbilder · Wiederholung · Tests · Verordnung & Abrechnung · Forschung. */
(function(){
if(window.FO_geladen)return;window.FO_geladen=true;
var E=function(x){return String(x==null?"":x).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};

var FO_STUDIEN=[
{id:"ss-mech",
 titel:"Manuelle Therapie oder Übungen bei chronischem Nackenschmerz: gleiche Wirkwege",
 orig:"Specific and shared mechanisms associated with treatment for chronic neck pain: the SS-MECH mechanistic clinical trial",
 autoren:"Cook CE, O'Halloran B, Clewley D, Keefe F, McDevitt A",
 journal:"Pain Management 2026;16(9):1009–1017", online:"08.06.2026", aufgenommen:"24.11.2026",
 doi:"10.1080/17581869.2026.2685609", region:"HWS", art:"RCT (mechanistisch)", kb:["WS05"],
 kurz:"Manuelle Therapie und Kräftigung verändern bei chronischem Nackenschmerz dieselben Mechanismen und führen zu fast gleichen Ergebnissen. Erklärt wird die Besserung am ehesten durch weniger Angst und besseres Coping, nicht durch Beweglichkeit oder Ausdauer.",
 merk:"Die Methode ist zweitrangig. Wichtig ist, Angst abzubauen, Bewältigung zu stärken und den Patienten aktiv zu machen.",
 zahlen:[["124","Teilnehmer, randomisiert"],["5","Termine in 4 Wochen"],["8","Mechanismen gemessen"],["6","Monate Nachbeobachtung"]],
 abschnitte:[
  {h2:"Fragestellung",b:[{p:"Vergleiche zwischen manueller Therapie und Übungen gehen bei chronischem Nackenschmerz meist unentschieden aus. Die Duke-Gruppe um Chad Cook wollte wissen, warum: Wirkt jede Methode über ihren eigenen Weg, also MT über Beweglichkeit und Übungen über Ausdauer, oder laufen beide über gemeinsame Faktoren? Die klinischen Ergebnisse waren nur Nebenziel."}]},
  {h2:"Wer und was",b:[
   {l:["Erwachsene mit Nackenschmerz ab NRS 3 an den meisten Tagen seit mindestens 3 Monaten, im Mittel 38 Jahre, 72 % Frauen, Beschwerden seit etwa 76 Monaten, Schmerz im Mittel 4,5/10 (aus der Mediationsauswertung)","Ausgeschlossen: Warnzeichen, Verdacht auf Radikulopathie, Nacken-OP im letzten Jahr"]},
   {h3:"Manuelle Therapie"},{l:["Weichteiltechnik und Dehnung: M. trapezius pars descendens, subokzipitale Muskeln, M. levator scapulae, Mm. scaleni","Nicht-Thrust-Mobilisation: PA zentral und unilateral an HWS und oberer BWS, passive Rotation in Rückenlage","Keine Manipulation","Heimprogramm: Rotation und Lateralflexion mit Gurt, Selbstdehnung obere BWS, Ecken-Dehnung"]},
   {h3:"Kräftigung"},{l:["Chin Tucks, tiefe Nackenflexoren in Rückenlage, isometrische Übungen, Extension in Bauchlage mit Chin Tuck","Laterale Nackenheber, Upright Rows, Prone I/T/Y, PNF-Muster mit Stab","Heimprogramm: Chin Tucks, Nackenflexion in Rückenlage, Rudern mit Band"]},
   {p:"Beide Gruppen hatten 5 Termine in 4 Wochen bei Physiotherapeuten, gleich viel Zeit in der Praxis und ein vergleichbar umfangreiches Heimprogramm. Sätze und Wiederholungen nennt das Protokoll nicht."}]},
  {h2:"Gemessen",b:[{tab:{k:["Bereich","Messung","Wann"],z:[["Spezifisch MT","Beweglichkeit mit CROM-Gerät, Druckschmerzschwelle (Algometer)","Beginn, 2 und 3 Wochen"],["Spezifisch Übungen","Ausdauer tiefe Flexoren, Extensoren, Lateralflexoren","Beginn, 2 und 3 Wochen"],["Gemeinsam","Selbstwirksamkeit, Bewegungsangst (OSPRO-YF), Coping, therapeutische Beziehung (WAI), Engagement","Beginn, 2 und 3 Wochen"],["Klinisch","PROMIS: Schmerzbeeinträchtigung, Schmerzstärke, körperliche Funktion","Beginn, 4 Wochen, 6 Monate"]]}}]},
  {h2:"Ergebnisse",b:[
   {l:["Bei keinem der Mechanismen gab es einen Unterschied zwischen den Gruppen. Beide verbesserten sich über die Zeit.","Klinisch waren beide Gruppen fast gleich. Einzige Ausnahme: nach 4 Wochen ein kleiner Vorteil der MT bei der körperlichen Funktion."]},
   {h3:"Folgeauswertung: Was erklärt die Besserung? (Mediation, Pain Manag 2026)"},
   {l:["Nach 4 Wochen erklärten nur weniger Angstvermeidung und besseres Coping die bessere Funktion.","Beweglichkeit, Druckschmerzschwelle und Ausdauer waren keine Vermittler.","Für die Schmerzbeeinträchtigung fand sich kein Vermittler.","Auch die psychischen Faktoren erklärten nur wenig (R² 0,05–0,12)."]},
   {h3:"Folgeauswertung: Wer profitiert wovon? (Moderatoren, Musculoskelet Sci Pract 2026)"},
   {l:["Eher MT: viel Angst, schlechte Funktion, wenig Beweglichkeit","Eher Übungen: gute Beweglichkeit, wenig Angst, gute Funktion; nach 6 Monaten auch bei seitenungleicher Beweglichkeit","Die Effekte waren klein, nur wenige von 18 geprüften Merkmalen spielten eine Rolle. Zu der Arbeit gibt es eine Korrektur."]}]},
  {h2:"Für die Praxis",b:[
   {ev:[["mittel","MT und Kräftigung gleichwertig.","Die Wahl kann sich nach Wunsch des Patienten, Zugang, Kosten und dem eigenen Können richten."],["schwach","Angst und Coping im Blick behalten.","Sie waren die einzigen messbaren Vermittler, aber auch sie erklären nur einen kleinen Teil."],["schwach","Ängstliche, stark eingeschränkte Patienten:","kurzfristig eher mit MT einsteigen, dann aktiv werden. Hinweis aus einer Folgeauswertung, kleine Effekte."]]},
   {merk:"Ein schöner ROM-Zuwachs ist nicht automatisch der Grund, warum es dem Patienten besser geht."}]},
  {h2:"Grenzen",b:[{l:["Kurze Behandlung mit nur 5 Terminen","Breite Gruppe, nur über die Dauer definiert; Untergruppen können untergehen","PROMIS erfasst nackenspezifische Veränderungen womöglich zu grob","Deckeneffekte bei therapeutischer Beziehung und Engagement","Keine Gruppe ohne Behandlung, der natürliche Verlauf lässt sich nicht abgrenzen","Volltext lag für diese Aufbereitung nicht vor; Angaben aus Abstract, Studienprotokoll und Folgeauswertungen"]}]}
 ],
 quellen:[
  ["Cook CE et al. Pain Manag 2026;16(9):1009–1017 (Hauptstudie)","10.1080/17581869.2026.2685609"],
  ["Cook CE et al. Studienprotokoll SS-MECH. J Man Manip Ther 2024;32(1):85–95","10.1080/10669817.2023.2267391"],
  ["Cook CE et al. Moderatoranalyse SS-MECH. Musculoskelet Sci Pract 2026;86:103665","10.1016/j.msksp.2026.103665"],
  ["Korrektur zur Moderatoranalyse. Musculoskelet Sci Pract 2026;86:103669","10.1016/j.msksp.2026.103669"],
  ["Cook CE et al. Mediationsanalyse SS-MECH. Pain Manag, online 14.04.2026",""],
  ["Registrierung ClinicalTrials.gov NCT05940012",""]]}
];
window.FO_STUDIEN=FO_STUDIEN;

var REIHE=['[data-a="wk-kb"]','[data-modus="wdh"]','[data-modus="tests"]','[data-a="wk-vo"]','[data-modus="forschung"]'];
function seg(){return `<div class="wk-seg"><button data-a="wk-kb">Krankheitsbilder</button><button data-modus="wdh">Wiederholung</button><button data-modus="tests">Tests</button><button data-a="wk-vo">Verordnung<span class="wk-lang"> &amp; Abrechnung</span></button><button data-modus="forschung" class="an">Forschung</button></div>`}
function ordnen(el){el.querySelectorAll(".wk-seg").forEach(function(s){
 if(!s.querySelector('[data-modus="forschung"]')){var b=document.createElement("button");b.dataset.modus="forschung";b.textContent="Forschung";s.append(b)}
 REIHE.forEach(function(q){var b=s.querySelector(q);if(b)s.append(b)});
 if(WI_st.modus==="forschung")s.querySelectorAll("button").forEach(function(b){b.classList.toggle("an",b.dataset.modus==="forschung")});
 var an=s.querySelector("button.an");if(an&&s.scrollWidth>s.clientWidth)s.scrollLeft=Math.max(0,an.offsetLeft-s.offsetLeft-40)})}

function zahl(z){return `<div class="fo-zahl">${z.map(function(x){return `<div><b>${E(x[0])}</b><small>${E(x[1])}</small></div>`}).join("")}</div>`}
function karteListe(s){return `<button class="fo-tr" data-fo="${E(s.id)}"><span class="fo-kopf"><span class="wk-pill g">${E(s.region)}</span><span class="wk-pill">${E(s.art)}</span><small>aufgenommen ${E(s.aufgenommen)}</small></span><b>${E(s.titel)}</b><span class="fo-q">${E(s.journal)}</span><span class="fo-k">${E(s.kurz)}</span></button>`}
function treffer(){var w=(WI_st.q||"").toLowerCase().trim().split(/\s+/).filter(Boolean);return FO_STUDIEN.filter(function(s){var t=JSON.stringify(s).toLowerCase();return w.every(function(x){return t.includes(x)})})}
function seiteListe(){var T=treffer();
 return `<div class="wi-seite"><button class="wi-zur" data-a="zu">‹ Mehr</button><h1>Wissen</h1><p class="wi-unter">${FO_STUDIEN.length} ${FO_STUDIEN.length===1?"Studie":"Studien"} · neu aus der Forschung, für die Praxis aufbereitet</p>${seg()}
<label class="wi-such"><input type="search" data-fo-such placeholder="Studie, Region, Thema suchen" value="${E(WI_st.q||"")}"></label>
<div class="fo-liste">${T.length?T.map(karteListe).join(""):`<p class="wi-leer">Keine Studie gefunden.</p>`}</div></div>`}
function blocks(b){return(b||[]).map(function(x){
 if(x.h3)return `<h3>${E(x.h3)}</h3>`;if(x.p)return `<p>${E(x.p)}</p>`;
 if(x.l)return `<ul>${x.l.map(function(y){return `<li>${E(y)}</li>`}).join("")}</ul>`;
 if(x.merk)return `<div class="wi-merk">${E(x.merk)}</div>`;
 if(x.tab)return `<div class="fo-tab">${x.tab.z.map(function(z){return `<div class="fo-tz">${z.map(function(c,i){return `<div><small>${E(x.tab.k[i])}</small>${E(c)}</div>`}).join("")}</div>`}).join("")}</div>`;
 if(x.ev)return `<div class="fo-ev">${x.ev.map(function(e){return `<p>${typeof WI_evChip==="function"?WI_evChip(e[0]):""} <b>${E(e[1])}</b> ${E(e[2])}</p>`}).join("")}</div>`;
 return ""}).join("")}
function kbName(id){try{var e=Fb.find(function(x){return x.id===id});return e?e.titel:id}catch(e){return id}}
function seiteStudie(s){
 return `<div class="wi-seite"><button class="wi-zur" data-fo-zur>‹ Forschung</button><h1>${E(s.titel)}</h1><p class="wi-unter">${E(s.autoren)} · ${E(s.journal)} · online ${E(s.online)}</p>
<div class="wi-chips"><span class="wi-chip ev">${E(s.art)}</span><span class="wi-chip w">Entwurf, fachlich prüfen</span></div>
<section class="wi-karte"><h2>Auf einen Blick</h2><p class="wi-kurz">${E(s.kurz)}</p>${zahl(s.zahlen)}<div class="wi-merk">${E(s.merk)}</div>
${s.kb&&s.kb.length?`<h3>Passt zu</h3><div class="wk-links">${s.kb.map(function(k){return `<button data-kbid="${E(k)}">${E(kbName(k))}</button>`}).join("")}</div>`:""}</section>
${s.abschnitte.map(function(a){return `<section class="wi-karte"><h2>${E(a.h2)}</h2>${blocks(a.b)}</section>`}).join("")}
<section class="wi-karte wi-q"><h2>Quellen</h2><p class="fo-orig">Originaltitel: ${E(s.orig)}</p><ul>${s.quellen.map(function(q){return `<li>${E(q[0])}${q[1]?` · <a href="https://doi.org/${E(q[1])}" target="_blank" rel="noopener">doi ${E(q[1])}</a>`:""}</li>`}).join("")}</ul><p>Aufgenommen am ${E(s.aufgenommen)}. Entwurf, fachlich prüfen.</p></section></div>`}

var st=document.createElement("style");st.id="wissen-forschung";st.textContent=
".wk-seg{overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}.wk-seg::-webkit-scrollbar{display:none}\n"+
".fo-liste{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;margin-top:14px}\n"+
".fo-tr{display:flex;flex-direction:column;gap:6px;text-align:left;border:0;background:var(--flaeche);border-radius:18px;padding:16px 18px;font:inherit;color:var(--schrift);cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.06)}\n"+
".fo-tr>b{font-size:1.0625rem;line-height:1.3}.fo-kopf{display:flex;align-items:center;flex-wrap:wrap;gap:2px}.fo-kopf small{margin-left:auto;color:var(--schrift2);font-size:.75rem}\n"+
".fo-q{font-size:.8125rem;color:var(--schrift2)}.fo-k{font-size:.9375rem;line-height:1.45;color:var(--schrift2)}\n"+
".fo-zahl{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin:12px 0}.fo-zahl>div{background:var(--grund);border-radius:14px;padding:10px 12px}.fo-zahl b{display:block;font-size:1.5rem;color:var(--tape)}.fo-zahl small{font-size:.8125rem;color:var(--schrift2)}\n"+
".fo-tab{display:grid;gap:8px}.fo-tz{display:grid;grid-template-columns:1fr 2fr 1fr;gap:10px;padding:8px 0;border-bottom:1px solid var(--linie);font-size:.9375rem}.fo-tz small{display:block;font-size:.72rem;font-weight:700;color:var(--schrift2);text-transform:uppercase;letter-spacing:.03em}\n"+
"@media(max-width:600px){.fo-tz{grid-template-columns:1fr}}\n.fo-ev p{margin:8px 0}.fo-orig{font-style:italic;color:var(--schrift2)}";
document.head.append(st);

var vorListe=WI_liste,vorZeige=WI_zeige;
WI_liste=function(){if(WI_st.modus==="forschung"){var s=WI_st.fo&&FO_STUDIEN.find(function(x){return x.id===WI_st.fo});return s?seiteStudie(s):seiteListe()}return vorListe.apply(this,arguments)};
WI_zeige=function(){var el=WI_st.el;
 if(el&&WI_st.modus==="forschung"&&!WI_st.tid&&!WI_st.id){el.innerHTML=WI_liste();ordnen(el);if(WI_st.fo)el.scrollTop=0;return}
 vorZeige.apply(this,arguments);if(el)ordnen(el)};
document.addEventListener("click",function(ev){var b=ev.target.closest(".wi-portal button");if(!b)return;var d=b.dataset;
 if(d.a==="wk-kb"||d.a==="wk-vo"||d.a==="wk-kartei"){WI_st.modus="kb";WI_st.fo=null}
 if(d.modus){WI_st.fo=null}
 if(d.fo){ev.stopImmediatePropagation();WI_st.fo=d.fo;WI_st.id=null;WI_zeige();return}
 if(b.hasAttribute("data-fo-zur")){ev.stopImmediatePropagation();WI_st.fo=null;WI_zeige();return}},true);
document.addEventListener("input",function(ev){var i=ev.target.closest("[data-fo-such]");if(!i)return;WI_st.q=i.value;var l=WI_st.el&&WI_st.el.querySelector(".fo-liste");if(l){var T=treffer();l.innerHTML=T.length?T.map(karteListe).join(""):`<p class="wi-leer">Keine Studie gefunden.</p>`}});
if(WI_st.el)WI_zeige();
})();
