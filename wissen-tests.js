(function(){if(document.getElementById("wissen-ds"))return;var st=document.createElement("style");st.id="wissen-ds";st.textContent=".wi-ds{list-style:none;margin:0;padding:0;counter-reset:ds;display:grid;grid-template-columns:30px max-content 22px minmax(0,1fr);column-gap:10px}.wi-ds li{grid-column:1/-1;display:grid;grid-template-columns:subgrid;align-items:baseline;padding:9px 0;border-top:1px solid var(--linie);margin:0}.wi-ds li:first-child{border-top:0;padding-top:2px}.wi-ds li::before{counter-increment:ds;content:counter(ds);width:26px;height:26px;border-radius:50%;background:#C9E86B;color:#2E3236;font-weight:800;font-size:.8125rem;display:grid;place-items:center;align-self:start}.wi-ds-z{display:contents}.wi-ds b{font-weight:700}.wi-ds-p{color:var(--tape);font-weight:700;text-align:center}.wi-ds-voll{grid-column:2/-1}@media (max-width:640px){.wi-ds{display:block}.wi-ds li{display:grid;grid-template-columns:30px minmax(0,1fr);column-gap:10px}.wi-ds-z{display:block}.wi-ds-p{margin:0 6px}}";document.head.append(st)})();
(function(){if(document.getElementById("wissen-tests"))return;var st=document.createElement("style");st.id="wissen-tests";st.textContent=".wi-seg{display:inline-flex;background:var(--seite);border-radius:999px;padding:3px;margin:14px 0 0;gap:2px}\n.wi-seg button{border:0;background:none;font:inherit;font-weight:700;font-size:.9375rem;padding:8px 16px;border-radius:999px;color:var(--schrift2);cursor:pointer}\n.wi-seg button.an{background:var(--flaeche);color:var(--schrift);box-shadow:0 1px 3px rgba(0,0,0,.12)}\n.wi-seg.klein{margin:0 8px 10px 0}.wi-seg.klein button{font-size:.8125rem;padding:6px 12px}\n.wi-tgr{font-size:1.0625rem;font-weight:800;margin:22px 0 10px;letter-spacing:-.01em}\n.wi-tbox>.wi-tgr:first-child{margin-top:4px}\n.wi-plbox{position:relative;border-radius:14px;overflow:hidden}\n.wi-plbox .wi-pl-b{aspect-ratio:4/5;object-fit:cover}\n.wi-pin{position:absolute;transform:translate(-50%,-50%);width:28px;height:28px;border-radius:50%;background:#C9E86B;color:#2E3236;font-weight:800;font-size:.875rem;display:grid;place-items:center;box-shadow:0 0 0 3px #fff,0 2px 8px rgba(0,0,0,.25)}\n.wi-pf{position:absolute;width:12%;height:16%;pointer-events:none;filter:drop-shadow(0 1px 2px rgba(0,0,0,.35))}\n.wi-schr{list-style:none;padding:0;margin:0;counter-reset:s}\n.wi-schr li{display:grid;grid-template-columns:30px 1fr;gap:12px;padding:10px 0;border-top:1px solid var(--linie);margin:0}\n.wi-schr li:first-child{border-top:0;padding-top:2px}\n.wi-schr li::before{counter-increment:s;content:counter(s);width:30px;height:30px;border-radius:50%;background:var(--tape);color:var(--flaeche);font-weight:800;display:grid;place-items:center;font-size:.875rem}\n.wi-schr b{display:block}.wi-schr li>span>span{color:var(--schrift2);font-size:.9375rem}\n.wi-zwei{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.wi-erg{border-radius:16px;padding:12px 14px}\n.wi-erg.pos{background:#fdecec;color:#3a1a1a}.wi-erg.neg{background:#eef6d9;color:#1f2a08}\nhtml[data-theme=\"dark\"] .wi-erg.pos{background:#3a1f22;color:#f3dede}html[data-theme=\"dark\"] .wi-erg.neg{background:#26301a;color:#e5f0cf}html[data-theme=\"dark\"] .wi-erg.pos b{color:#ff8a8a}html[data-theme=\"dark\"] .wi-erg.neg b{color:#c9e86b}\n.wi-erg b{display:block;font-size:.8125rem;text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}\n.wi-erg.pos b{color:#a3141f}.wi-erg.neg b{color:var(--tape)}.wi-erg p{font-size:.9375rem;margin:0}\n.wi-lr{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.wi-lr>div{background:var(--grund);border-radius:16px;padding:12px 14px}\n.wi-lr .z{font-size:2rem;font-weight:800;letter-spacing:-.02em;line-height:1;font-variant-numeric:tabular-nums}\n.wi-lr .z small{font-size:.875rem;color:var(--schrift2);font-weight:700;margin-left:4px}\n.wi-lr .t{font-size:.875rem;color:var(--schrift2);margin-top:6px;line-height:1.35}\n.wi-skala{margin-top:12px}\n.wi-skala .bahn{position:relative;height:10px;border-radius:5px;background:linear-gradient(90deg,#c9e86b,var(--seite) 45%,var(--seite) 55%,#f2b8b8)}\n.wi-skala .m{position:absolute;top:-4px;width:4px;height:18px;border-radius:2px;background:var(--schrift);transform:translateX(-50%)}\n.wi-skala .lbl{display:flex;justify-content:space-between;font-size:.75rem;color:var(--schrift2);margin-top:6px}\n.wi-fein{font-size:.8125rem;color:var(--schrift2);margin-top:8px!important}\n.wi-cl{display:flex;flex-wrap:wrap;gap:8px}\n.wi-cl button{border:0;background:var(--grund);border-radius:14px;padding:9px 12px;font:inherit;text-align:left;cursor:pointer;color:inherit}\n.wi-cl button b{display:block;font-size:.9375rem}.wi-cl button small{color:var(--tape);font-weight:700;font-size:.78rem}\n.wi-link{display:flex;align-items:center;gap:12px;width:100%;border:0;background:var(--grund);border-radius:16px;padding:10px 12px;margin-top:10px;font:inherit;color:inherit;text-align:left;cursor:pointer}\n.wi-link .wi-mini{width:44px;height:44px;border-radius:10px;object-fit:cover;flex:none;aspect-ratio:auto}\n.wi-link b{display:block}.wi-link small{color:var(--schrift2)}.wi-pfr{margin-left:auto;color:var(--tape);font-weight:800;font-size:1.25rem}\n.wi-doku{background:var(--grund);border-radius:14px;padding:12px 14px;font-size:.9375rem}\n@media (max-width:520px){.wi-zwei,.wi-lr{grid-template-columns:1fr}}\n.wi-reih{margin:0 0 6px}\n.wi-schr-t{color:var(--schrift)!important;font-size:.9375rem}\n.wi-legh{font-size:.8125rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--schrift2);margin:0}\n";document.head.append(st)})();
var WI_TBILD={"apprehension": "wissen/tests/apprehension.webp", "bbs": "wissen/tests/bbs.webp", "belly": "wissen/tests/belly.webp", "crossbody": "wissen/tests/crossbody.webp", "dgi": "wissen/tests/dgi.webp", "distraktion": "wissen/tests/distraktion.webp", "droparm": "wissen/tests/droparm.webp", "durkan": "wissen/tests/durkan.webp", "einbeinstand30": "wissen/tests/einbeinstand30.webp", "ellbogenstreckung": "wissen/tests/ellbogenstreckung.webp", "erlag": "wissen/tests/erlag.webp", "faber": "wissen/tests/faber.webp", "fadir": "wissen/tests/fadir.webp", "faustperkussion": "wissen/tests/faustperkussion.webp", "fingerkompression": "wissen/tests/fingerkompression.webp", "flexionrotation": "wissen/tests/flexionrotation.webp", "fmao": "wissen/tests/fmao.webp", "foveazeichen": "wissen/tests/foveazeichen.webp", "gangbild": "wissen/tests/gangbild.webp", "gelenkspalt": "wissen/tests/gelenkspalt.webp", "handkraftjamar": "wissen/tests/handkraftjamar.webp", "hawkins": "wissen/tests/hawkins.webp", "hinteresag": "wissen/tests/hinteresag.webp", "hintereschublade": "wissen/tests/hintereschublade.webp", "hockschmerz": "wissen/tests/hockschmerz.webp", "hooktest": "wissen/tests/hooktest.webp", "hueftextensionaktiv": "wissen/tests/hueftextensionaktiv.webp", "hueftflexionaktiv": "wissen/tests/hueftflexionaktiv.webp", "infraspinatus": "wissen/tests/infraspinatus.webp", "irpassiv": "wissen/tests/irpassiv.webp", "lachman": "wissen/tests/lachman.webp", "leversign": "wissen/tests/leversign.webp", "lfapalpation": "wissen/tests/lfapalpation.webp", "liftoff": "wissen/tests/liftoff.webp", "mbest": "wissen/tests/mbest.webp", "mcmurray": "wissen/tests/mcmurray.webp", "movingvalgus": "wissen/tests/movingvalgus.webp", "mundoeffnung": "wissen/tests/mundoeffnung.webp", "neer": "wissen/tests/neer.webp", "nhpt": "wissen/tests/nhpt.webp", "obrien": "wissen/tests/obrien.webp", "ottawafuss": "wissen/tests/ottawafuss.webp", "ottawaknie": "wissen/tests/ottawaknie.webp", "painfularc": "wissen/tests/painfularc.webp", "palpkaumuskel": "wissen/tests/palpkaumuskel.webp", "palpkiefergelenk": "wissen/tests/palpkiefergelenk.webp", "pf_hop1": "wissen/tests/pf_hop1.webp", "pf_hop3": "wissen/tests/pf_hop3.webp", "pf_hop6": "wissen/tests/pf_hop6.webp", "pf_hopx": "wissen/tests/pf_hopx.webp", "phalen": "wissen/tests/phalen.webp", "pivotshift": "wissen/tests/pivotshift.webp", "raldt": "wissen/tests/raldt.webp", "relocation": "wissen/tests/relocation.webp", "rotation60": "wissen/tests/rotation60.webp", "rueckenlagezeichen": "wissen/tests/rueckenlagezeichen.webp", "schmerzfreiegriffkraft": "wissen/tests/schmerzfreiegriffkraft.webp", "schublade": "wissen/tests/schublade.webp", "schubladeosg": "wissen/tests/schubladeosg.webp", "schuettelzeichen": "wissen/tests/schuettelzeichen.webp", "scour": "wissen/tests/scour.webp", "sharppurser": "wissen/tests/sharppurser.webp", "slr": "wissen/tests/slr.webp", "slrgekreuzt": "wissen/tests/slrgekreuzt.webp", "slump": "wissen/tests/slump.webp", "spurling": "wissen/tests/spurling.webp", "supinatorzeichen": "wissen/tests/supinatorzeichen.webp", "surprise": "wissen/tests/surprise.webp", "t10": "wissen/tests/t10.webp", "t25": "wissen/tests/t25.webp", "t6": "wissen/tests/t6.webp", "tabatiere": "wissen/tests/tabatiere.webp", "tanzendepatella": "wissen/tests/tanzendepatella.webp", "thessaly": "wissen/tests/thessaly.webp", "thomas": "wissen/tests/thomas.webp", "thompson": "wissen/tests/thompson.webp", "tinelhandgelenk": "wissen/tests/tinelhandgelenk.webp", "tinetti": "wissen/tests/tinetti.webp", "trendelenburg": "wissen/tests/trendelenburg.webp", "tug": "wissen/tests/tug.webp", "ucldaumen": "wissen/tests/ucldaumen.webp", "ultt": "wissen/tests/ultt.webp", "updrs": "wissen/tests/updrs.webp", "valgusstress": "wissen/tests/valgusstress.webp", "varusstress": "wissen/tests/varusstress.webp", "weightbearinglunge": "wissen/tests/weightbearinglunge.webp", "zentralisation": "wissen/tests/zentralisation.webp"};var WI_TPIN={};
var WI_TK=window.WI_TK||{};
/* Ellenbogen, Handgelenk, Finger: Teil-Handtexte, Rest kommt automatisch aus der Testdatenbank */
Object.assign(WI_TK,{
ellbogenstreckung:{u:"Ellenbogen · Trauma · Ausschlussregel",k:"Nach Ellenbogentrauma streckt der Patient beide Arme vollständig. Gelingt das seitengleich, ist eine Fraktur sehr unwahrscheinlich. Gelingt es nicht, wird geröntgt.",
d:[["Position","Sitz, beide Schultern 90° nach vorn gehoben."],["Strecken","Beide Ellenbogen vollständig durchstrecken."],["Vergleichen","Fehlt auf einer Seite die volle Streckung?"]],leg:[["Arme waagerecht nach vorn","Schultern 90°"],["Ellenbogen durchgestreckt","Seitenvergleich"]],r:"Fehlende Streckung, Fehlstellung, Durchblutungs- oder Nervenstörung → Röntgen, ärztlich."},
hooktest:{u:"Ellenbogen · distale Bizepssehne · Palpation",k:"Bei angespanntem Bizeps hakt der Zeigefinger von außen unter die Sehne in der Ellenbeuge. Lässt sie sich nicht unterhaken, ist sie wahrscheinlich abgerissen.",
d:[["Position","Sitz, Ellenbogen 90° gebeugt, Unterarm aktiv supiniert."],["Anspannen","Patient spannt den Bizeps an."],["Haken","Zeigefinger von lateral unter die Sehne in der Ellenbeuge schieben."],["Werten","Lässt sich eine strangförmige Sehne unterhaken?"]],leg:[["Ellenbogen 90°","Handfläche oben"],["Finger in der Ellenbeuge","von lateral unterhaken"]],r:"Verdacht auf Abriss → zügig ärztlich, Nahtfenster 2–3 Wochen.",kb:["EB06"]},
movingvalgus:{u:"Ellenbogen · Innenband (UCL) · Provokationstest",k:"Unter Valgusstress wird der Ellenbogen schnell aus Beugung gestreckt. Schmerz innen im mittleren Bogen spricht für eine Verletzung des Innenbands, typisch bei Werfern.",
d:[["Position","Schulter 90° abduziert und maximal außenrotiert."],["Valgus","Konstanten Valgusstress am Unterarm geben."],["Bewegen","Ellenbogen zügig aus voller Beugung in Streckung führen."],["Fragen","Bekannter Schmerz innen, bei welchem Winkel?"]],leg:[["Arm 90° abduziert","außenrotiert"],["Valgusstress","Unterarm nach hinten"],["Beugen und Strecken","Schmerz innen?"]]},
lateralpivot:{u:"Ellenbogen · posterolaterale Instabilität",k:"Bei supiniertem Unterarm mit Valgus und Kompression wird der Ellenbogen aus der Streckung gebeugt. Angst oder Zurückspringen des Radiuskopfes spricht für eine posterolaterale Rotationsinstabilität.",
d:[["Lagerung","Rückenlage, Arm über dem Kopf."],["Griff","Unterarm supinieren, Valgus und axiale Kompression geben."],["Beugen","Ellenbogen langsam aus der Streckung beugen."],["Beobachten","Angst des Patienten oder Zurückspringen ab etwa 40°?"]],leg:[["Arm über dem Kopf","Rückenlage"],["Hand am Unterarm","supiniert"],["Hand am Ellenbogen","Valgus und Kompression"]],kb:["EB05"]},
cozen:{u:"Ellenbogen · laterale Epikondylopathie · Widerstandstest",k:"Faust, Handgelenk gestreckt, der Patient drückt gegen die Hand des Therapeuten. Schmerz am äußeren Epikondylus spricht für einen Tennisellenbogen.",
d:[["Position","Sitz, Ellenbogen leicht gebeugt, Unterarm proniert."],["Faust","Faust schließen, Handgelenk in Extension und Radialduktion."],["Widerstand","Therapeut drückt den Handrücken nach unten, Daumen am Epicondylus lateralis."],["Fragen","Bekannter Schmerz außen?"]],leg:[["Faust, Handgelenk gestreckt","Unterarm proniert"],["Widerstand auf dem Handrücken","nach unten"],["Daumen am Epicondylus lateralis","tastet"]],dk:["Cozen-Test {s} positiv: Schmerz am Epicondylus lateralis.","Cozen-Test {s} negativ."]},
mill:{u:"Ellenbogen · laterale Epikondylopathie · Dehntest",k:"Unterarm proniert, Handgelenk passiv gebeugt, dann wird der Ellenbogen gestreckt. Schmerz außen spricht für einen Tennisellenbogen.",
d:[["Tasten","Daumen auf den Epicondylus lateralis."],["Pronation","Unterarm pronieren."],["Beugen","Handgelenk passiv voll beugen."],["Strecken","Ellenbogen langsam strecken, Schmerz außen?"]],leg:[["Ellenbogen gestreckt","Handrücken oben"],["Handgelenk passiv gebeugt","Dehnung der Extensoren"],["Daumen außen am Ellenbogen","tastet"]],dk:["Mill-Test {s} positiv.","Mill-Test {s} negativ."]},
maudsley:{u:"Ellenbogen · laterale Epikondylopathie · Widerstandstest",k:"Der Patient streckt den Mittelfinger gegen Widerstand. Schmerz außen am Ellenbogen spricht für eine Beteiligung des M. extensor digitorum.",
d:[["Position","Ellenbogen gestreckt, Unterarm proniert."],["Widerstand","Therapeut drückt auf das Grundglied des Mittelfingers."],["Fragen","Bekannter Schmerz außen am Ellenbogen?"]],leg:[["Gestreckter Arm","Handrücken oben"],["Widerstand am Mittelfinger","Grundglied"]],dk:["Maudsley-Test {s} positiv.","Maudsley-Test {s} negativ."]},
medialepi:{u:"Ellenbogen · mediale Epikondylopathie · Widerstandstest",k:"Handgelenkbeugung und Pronation gegen Widerstand bei gestrecktem Ellenbogen. Schmerz am inneren Epikondylus spricht für einen Golferellenbogen.",
d:[["Position","Sitz, Ellenbogen gestreckt, Unterarm supiniert."],["Widerstand","Patient beugt das Handgelenk gegen die Hand des Therapeuten."],["Tasten","Daumen am Epicondylus medialis."],["Variante","Passive Dehnung in Extension und Supination."]],leg:[["Handfläche oben","Ellenbogen gestreckt"],["Widerstand in der Handfläche","Handgelenkbeugung"],["Daumen innen","Epicondylus medialis"]],dk:["Test Epicondylopathia medialis {s} positiv.","Test Epicondylopathia medialis {s} negativ."]},
ulnarisdruck:{u:"Ellenbogen · N. ulnaris · Provokationstest",k:"Druck auf den N. ulnaris hinter dem inneren Epikondylus bis 60 Sekunden. Kribbeln in Ring- und Kleinfinger spricht für ein Kubitaltunnelsyndrom. Mit voller Beugung kombiniert deutlich empfindlicher.",
d:[["Position","Ellenbogen 20° gebeugt, Unterarm supiniert."],["Druck","Zeige- und Mittelfinger auf den Nerv knapp proximal des Kubitaltunnels."],["Halten","Bis 60 Sekunden."],["Fragen","Kribbeln in Ring- und Kleinfinger? Beide Seiten."]],leg:[["Handfläche oben","Ellenbogen leicht gebeugt"],["Zwei Finger auf dem Nerv","hinter dem Epicondylus medialis"]]},
ellbeugetest:{u:"Ellenbogen · N. ulnaris · Provokationstest",k:"Ellenbogen maximal gebeugt, Handgelenk gestreckt, bis 60 Sekunden halten. Kribbeln in Ring- und Kleinfinger spricht für ein Kubitaltunnelsyndrom.",
d:[["Position","Sitz, Ellenbogen maximal gebeugt, Unterarm supiniert."],["Handgelenk","Handgelenk in Extension."],["Halten","Bis 60 Sekunden, beidseits."],["Fragen","Kribbeln in Ring- und Kleinfinger?"]],leg:[["Ellenbogen maximal gebeugt","beidseits"],["Hände vor den Schultern","Handgelenk gestreckt"]]},
tabatiere:{u:"Handgelenk · Skaphoid · Palpation",k:"Druck in die Grube zwischen den Daumensehnen. Fehlt der Druckschmerz, ist eine Kahnbeinfraktur unwahrscheinlich. Vorhanden heißt nur: weiter abklären.",
d:[["Position","Hand in Neutralstellung, leichte Ulnarduktion, Daumen abgespreizt."],["Aufsuchen","Grube zwischen EPL- und EPB-Sehne."],["Druck","Mit der Fingerkuppe gezielt drücken."],["Vergleichen","Gegenseite gleich prüfen."]],leg:[["Daumen abgespreizt","Tabatière sichtbar"],["Fingerkuppe in der Grube","radial am Handgelenk"]],r:"Druckschmerz nach Sturz → ruhigstellen, Bildgebung, auch bei unauffälligem Röntgen.",kb:["HG04","HG10"]},
tuberculumscaphoidei:{u:"Handgelenk · Skaphoid · Palpation",k:"Druck palmar auf das Tuberculum des Kahnbeins an der Handgelenksfalte. Ergänzt die Tabatière, allein nicht ausreichend.",
d:[["Position","Handfläche nach oben, Handgelenk leicht gestreckt."],["Aufsuchen","Palmar radial an der distalen Beugefalte."],["Druck","Mit der Daumenkuppe drücken, Seitenvergleich."]],leg:[["Handfläche oben","Handgelenk leicht gestreckt"],["Daumen auf dem Tuberculum","radial an der Beugefalte"]],kb:["HG04"]},
scaphoidkompression:{u:"Handgelenk · Skaphoid · Kompressionstest",k:"Längsdruck über den Daumen in Richtung Handgelenk. Schmerz am Kahnbein spricht für eine Fraktur, die Werte schwanken aber stark.",
d:[["Griff","Daumen umfassen, in Verlängerung des Unterarms halten."],["Druck","Axialen Druck über das erste Metakarpale nach proximal."],["Fragen","Schmerz im radialen Handgelenk?"]],leg:[["Daumen gestreckt","in Unterarmlinie"],["Längsdruck","Richtung Handgelenk"]],kb:["HG04"]},
schuettelzeichen:{u:"Handgelenk · Karpaltunnel · Anamnese",k:"Schüttelt der Patient nachts die Hand aus und wird es dadurch besser, spricht das für ein Karpaltunnelsyndrom. Teil der Wainner-Regel.",
d:[["Fragen","Werden die Beschwerden besser, wenn Sie die Hand ausschütteln?"],["Zeigen lassen","Patient macht die Bewegung vor."]],leg:[["Hand ausschütteln","aus dem Handgelenk"]],kb:["HG02"]},
phalen:{u:"Handgelenk · Karpaltunnel · Provokationstest",k:"Handrücken aneinander, Handgelenke maximal gebeugt, 60 Sekunden halten. Kribbeln in Daumen bis Ringfinger spricht für ein Karpaltunnelsyndrom.",
d:[["Position","Sitz, Handrücken vor der Brust aneinanderlegen."],["Beugen","Beide Handgelenke maximal gebeugt, Unterarme waagerecht."],["Halten","60 Sekunden."],["Fragen","Kribbeln in Daumen, Zeige-, Mittelfinger?"]],leg:[["Handrücken aneinander","Finger zeigen nach unten"],["Unterarme waagerecht","60 Sekunden"]],kb:["HG02"]},
tinelhandgelenk:{u:"Handgelenk · Karpaltunnel · Klopftest",k:"Klopfen auf den Karpaltunnel. Elektrisierendes Kribbeln in die Finger spricht für ein Karpaltunnelsyndrom. Allein kaum aussagekräftig.",
d:[["Position","Handfläche oben, Handgelenk leicht gestreckt."],["Klopfen","Mit Finger oder Reflexhammer palmar über dem Karpaltunnel."],["Fragen","Elektrisieren in Daumen bis Ringfinger?"]],leg:[["Handfläche oben","Handgelenk leicht gestreckt"],["Klopfen","Reflexhammer auf dem Karpaltunnel"]],kb:["HG02"]},
durkan:{u:"Handgelenk · Karpaltunnel · Kompressionstest",k:"Beide Daumen drücken bis 30 Sekunden auf den Karpaltunnel. Kribbeln im Medianusgebiet spricht für ein Karpaltunnelsyndrom. Genauer als Phalen und Tinel.",
d:[["Position","Unterarm supiniert, Handgelenk neutral."],["Druck","Beide Daumen gleichmäßig auf den Karpaltunnel."],["Halten","Bis 30 Sekunden."],["Fragen","Kribbeln im Medianusgebiet?"]],leg:[["Handfläche oben","neutral"],["Beide Daumen","auf dem Karpaltunnel"]],kb:["HG02"]},
handelevation:{u:"Handgelenk · Karpaltunnel · Provokationstest",k:"Beide Arme locker über dem Kopf bis 1 Minute. Kommen die bekannten Beschwerden, spricht das stark für ein Karpaltunnelsyndrom. In der Metaanalyse 2022 der beste Einzeltest.",
d:[["Position","Sitz, beide Arme locker senkrecht über den Kopf."],["Halten","Bis 1 Minute."],["Fragen","Kommen die bekannten Beschwerden?"]],leg:[["Arme über dem Kopf","locker, ohne Anstrengung"]],kb:["HG02"]},
whattest:{u:"Handgelenk · de Quervain · Widerstandstest",k:"Handgelenk gebeugt, Daumen abgespreizt gegen Widerstand. Schmerz über dem ersten Strecksehnenfach spricht für eine Tendovaginitis de Quervain. Negativ schließt sie fast aus.",
d:[["Beugen","Handgelenk maximal bis zur Schmerzgrenze beugen."],["Daumen","Daumen gestreckt und abgespreizt halten."],["Widerstand","Therapeut drückt zunehmend gegen die Abduktion."],["Fragen","Schmerz radial am Handgelenk?"]],leg:[["Handgelenk gebeugt","Daumen oben"],["Daumen abgespreizt","gegen Widerstand"]],kb:["HG03"]},
finkelstein:{u:"Handgelenk · de Quervain · Dehntest",k:"Der Therapeut hält den Daumen und kippt das Handgelenk zur Kleinfingerseite. Schmerz über dem ersten Strecksehnenfach spricht für eine Tendovaginitis de Quervain.",
d:[["Position","Unterarm in Neutralstellung."],["Griff","Therapeut fasst den Daumen."],["Ulnarduktion","Handgelenk passiv zur Kleinfingerseite kippen."],["Vergleichen","Seitenvergleich, Variante Eichhoff ist schmerzhafter."]],leg:[["Daumen gehalten","vom Therapeuten"],["Kippen zur Kleinfingerseite","passiv"]],kb:["HG03"]},
foveazeichen:{u:"Handgelenk · TFCC · Palpation",k:"Druck in die weiche Mulde ulnar am Handgelenk. Bekannter Schmerz spricht für eine TFCC-Läsion oder das ulnotriquetrale Band.",
d:[["Position","Unterarm in Neutralrotation."],["Aufsuchen","Mulde zwischen Processus styloideus ulnae, FCU-Sehne und Pisiforme."],["Druck","Mit dem Daumen drücken, Seitenvergleich."]],leg:[["Unterarm neutral","Daumen oben"],["Daumen in der Fovea","ulnar am Handgelenk"]],kb:["HG05"]},
watson:{u:"Handgelenk · SL-Band · Instabilitätstest",k:"Daumen auf dem Kahnbein, das Handgelenk wird von ulnar nach radial geführt. Ein schmerzhafter Klunk beim Loslassen spricht für eine skapholunäre Instabilität.",
d:[["Griff","Daumen palmar auf das Tuberculum ossis scaphoidei."],["Bewegen","Handgelenk aus Ulnar- in Radialduktion führen."],["Loslassen","Daumen lösen, Klunk spüren?"],["Vergleichen","Gegenseite, auch Gesunde können schnappen."]],leg:[["Daumen auf dem Kahnbein","palmar"],["Hand an der Mittelhand","führt nach radial"]],kb:["HG06"]},
fdptest:{u:"Finger · tiefe Beugesehne · Funktionstest",k:"Das Mittelglied wird gestreckt gehalten, der Patient beugt das Endgelenk. Geht das nicht, ist die tiefe Beugesehne gerissen, oft am Ringfinger (Jersey Finger).",
d:[["Position","Hand supiniert auf der Unterlage."],["Fixieren","Mittelglied in Streckung halten."],["Beugen","Patient beugt nur das Endgelenk."]],leg:[["Mittelglied fixiert","gestreckt"],["Endglied beugen","aktiv"]],r:"Fehlende Endgelenkbeugung nach Trauma → Handchirurgie innerhalb von 7 Tagen.",kb:["FI05"]},
fdstest:{u:"Finger · oberflächliche Beugesehne · Funktionstest",k:"Die übrigen Finger werden gestreckt gehalten, der Patient beugt den Testfinger im Mittelgelenk. Geht das nicht, ist die oberflächliche Beugesehne verletzt.",
d:[["Position","Hand supiniert."],["Blockieren","Alle anderen Finger in voller Streckung halten."],["Beugen","Patient beugt den Testfinger im Mittelgelenk."],["Achtung Kleinfinger","Dort oft physiologisch schwach, Seitenvergleich."]],leg:[["Nachbarfinger gestreckt","festgehalten"],["Mittelgelenk beugen","Testfinger"]],kb:["FI05"]},
elson:{u:"Finger · Strecksehne (Central Slip) · Funktionstest",k:"Mittelgelenk 90° über die Tischkante gebeugt, der Patient streckt gegen Widerstand. Fehlt die Kraft im Mittelgelenk und wird das Endglied steif, ist der Tractus intermedius gerissen.",
d:[["Position","Finger über die Tischkante, PIP 90° gebeugt."],["Widerstand","Therapeut drückt gegen das Mittelglied."],["Strecken","Patient versucht zu strecken."],["Beobachten","Kraft im PIP? Endglied locker oder steif?"]],leg:[["Mittelgelenk 90°","über die Tischkante"],["Widerstand am Mittelglied","dorsal"]],kb:["FI06","FI09"]},
pipseitenband:{u:"Finger · Seitenband PIP · Stabilitätstest",k:"Seitlicher Stress am Mittelgelenk in Streckung und 30° Beugung. Aufklappen oder lokaler Schmerz spricht für eine Seitenbandverletzung.",
d:[["Fixieren","Grundglied festhalten."],["Stress","Mittelglied radial und ulnar drücken."],["Zwei Stellungen","Volle Streckung und etwa 30° Beugung."],["Vergleichen","Gleicher Finger der Gegenseite."]],leg:[["Grundglied fixiert","zwischen Daumen und Zeigefinger"],["Mittelglied seitlich","Stress"]],kb:["FI09"]},
ucldaumen:{u:"Daumen · ulnares Seitenband · Stabilitätstest",k:"Das Daumengrundglied wird vom Zeigefinger weggedrückt. Vermehrtes Aufklappen ohne festen Stopp spricht für einen Skidaumen, über 35° für eine komplette Ruptur.",
d:[["Fixieren","Erstes Metakarpale festhalten."],["Stress","Grundglied radialwärts drücken."],["Zwei Stellungen","Streckung und etwa 30° MCP-Beugung."],["Vergleichen","Gegenseite, Aufklappwinkel schätzen."]],leg:[["Mittelhand fixiert","erstes Metakarpale"],["Grundglied nach radial","vom Zeigefinger weg"]],r:"Vorher Röntgen bei Verdacht auf knöchernen Ausriss. Tastbarer Knoten (Stener) → Handchirurgie.",kb:["FI07"]},
cmcgrind:{u:"Daumen · Sattelgelenk · Kompressionstest",k:"Längsdruck mit Drehung auf den Daumen in das Sattelgelenk. Schmerz oder Reiben spricht für eine Rhizarthrose. Negativ schließt sie nicht aus.",
d:[["Fixieren","Trapezium bzw. Handwurzel halten."],["Druck","Axial über das erste Metakarpale."],["Drehen","Unter Druck rotieren."],["Fragen","Schmerz oder Reiben an der Daumenbasis?"]],leg:[["Handwurzel fixiert","eine Hand"],["Druck und Drehung","über den Daumen"]],kb:["FI01"]},
schmerzfreiegriffkraft:{u:"Ellenbogen · Tennisellenbogen · Verlaufsmessung",k:"Der Patient drückt den Dynamometer bei gestrecktem Ellenbogen nur bis zum ersten Schmerz. Der Wert in kg zeigt den Verlauf beim Tennisellenbogen.",
d:[["Position","Ellenbogen gestreckt, Unterarm proniert, Handgelenk leicht gestreckt."],["Drücken","Langsam zudrücken, beim ersten Schmerz aufhören."],["Wiederholen","Drei Versuche, Mittelwert, gleiche Griffstufe."],["Vergleichen","Gegenseite messen."]],leg:[["Ellenbogen gestreckt","Handrücken oben"],["Dynamometer","bis zum ersten Schmerz"]],kb:["EB01"]},
handkraftjamar:{u:"Hand · Griffkraft · Messung",k:"Standardisierte Messung der maximalen Griffkraft mit dem Jamar-Dynamometer. Seitenvergleich und Normwerte nach Alter und Geschlecht.",
d:[["Position","Sitz, Oberarm am Körper, Ellenbogen 90°, Unterarm neutral, Griffstufe 2."],["Drücken","Maximal zudrücken."],["Wiederholen","Drei Versuche mit Pause, Mittelwert."],["Vergleichen","Beide Seiten messen."]],leg:[["Ellenbogen 90° am Körper","Unterarm neutral"],["Jamar-Dynamometer","Griffstufe 2"]],kb:["HG01","FI01","FI10"]}
});

var WI_TK=window.WI_TK||{};
(function(){const SUT="Gehört zur Prädiktionsregel nach Sutlive 2008 für Hüftarthrose (5 Kriterien): 3 von 5 positiv LR+ 5,2, 4 von 5 positiv LR+ 24,3. Einzeln wenig aussagekräftig.";
const sutC=["hockschmerz","hueftflexionaktiv","irpassiv","scour","hueftextensionaktiv"];
Object.assign(WI_TK,{
einbeinstand30:{u:"Hüfte · laterale Hüfte · Provokationstest",ev:"Belegstärke mäßig · Grimaldi 2017",
k:"Einbeinstand auf der betroffenen Seite bis 30 Sekunden. Kommt der bekannte Schmerz über dem Trochanter, spricht das für eine gluteale Tendinopathie. Einfach, schnell, im Stand.",
p:[["Struktur","Sehnen von M. gluteus medius und minimus am Trochanter major"],["Prinzip","Kompression und Zug der Abduktorensehnen unter Last"],["Frage","Kommt der laterale Hüftschmerz von den Glutealsehnen?"],["Wann einsetzen","Seitlicher Hüftschmerz, Liegen auf der Seite schmerzt"]],
d:[["Stand","Neben einer Wand, betroffenes Bein wandfern."],["Balance","Ein Finger berührt die Wand nur zur Balance."],["Bein heben","Anderes Knie auf 90° anheben, Becken bleibt waagerecht."],["Halten","Bis zu 30 Sekunden halten."],["Fragen","Schmerz über dem Trochanter, wie stark (0–10)?"]],
pos:"Bekannter Schmerz über dem Trochanter major ab 2 von 10 innerhalb von 30 Sekunden.",neg:"30 Sekunden ohne lateralen Hüftschmerz.",
lr:null,kw:"Gegen MRT: Sensitivität 38 %, Spezifität 100 % (Grimaldi 2017). Positiv spricht also stark dafür, negativ schließt wenig aus. Lequesne 2008 fand deutlich höhere Werte.",
f:["Becken kippt oder Rumpf weicht aus: Haltung korrigieren, sonst sinkt die Last.","Leistenschmerz zählt nicht, er spricht eher für das Gelenk."],
r:"",c:["fader","trendelenburg","faber"],kb:["HU04"],
leg:[["Einbeinstand","betroffenes Bein, wandfern"],["Finger an der Wand","nur zur Balance"],["Knie 90° angehoben","Becken waagerecht"]],
dk:["Einbeinstand 30 s {s} positiv: lateraler Hüftschmerz über dem Trochanter (NRS __/10).","Einbeinstand 30 s {s} schmerzfrei."],
q:"Grimaldi A et al. Am J Sports Med 2017;45:2667. Lequesne M et al. Arthritis Rheum 2008;59:241."},
trendelenburg:{u:"Hüfte · Abduktoren · Beobachtung",ev:"Belegstärke mäßig · Reiman 2015",
k:"Der Patient steht auf einem Bein, der Therapeut schaut von hinten aufs Becken. Sinkt das Becken auf der Spielbeinseite ab oder neigt sich der Rumpf zur Standbeinseite, reichen die Hüftabduktoren nicht aus.",
p:[["Struktur","M. gluteus medius und minimus der Standbeinseite"],["Prinzip","Abduktoren halten das Becken im Einbeinstand waagerecht"],["Frage","Sind die Hüftabduktoren insuffizient?"],["Wann einsetzen","Hinken, lateraler Hüftschmerz, nach Hüft-TEP"]],
d:[["Position","Patient steht, Therapeut hinter ihm, Becken frei sichtbar."],["Einbeinstand","Patient hebt das Bein der Gegenseite an."],["Halten","Etwa 30 Sekunden stehen bleiben."],["Beobachten","Beckenkämme und Rumpf: bleibt alles waagerecht?"]],
pos:"Becken sinkt auf der Spielbeinseite ab (Trendelenburg) oder Rumpf neigt sich zum Standbein (Duchenne).",neg:"Becken bleibt 30 Sekunden waagerecht.",
lr:["6,8",null],kw:"Gluteale Pathologie: Sensitivität 61 %, Spezifität 92 % (3 Studien, gepoolt). Bei Hüftarthrose schwächer: 55 % und 70 % (Reiman 2015).",
f:["Zu kurz beobachtet: das Absinken kommt oft erst nach 20–30 Sekunden.","Schmerz, Gleichgewichtsprobleme oder Beinlängendifferenz verfälschen das Bild."],
r:"",c:["einbeinstand30","fader"],kb:["HU04","HU01","HU02"],
leg:[["Standbein","getestete Seite"],["Becken von hinten","Beckenkämme beobachten"],["Spielbein angehoben","Becken sinkt oder bleibt"]],
dk:["Trendelenburg-Zeichen {s} positiv: Absinken des Beckens zur Gegenseite im Einbeinstand.","Trendelenburg-Zeichen {s} negativ."],
q:"Reiman MP et al. Br J Sports Med 2015 (Hüfte, Übersicht)."},
fader:{u:"Hüfte · laterale Hüfte · Provokationstest",ev:"Belegstärke mäßig · Grimaldi 2017",
k:"Hüfte in 90° Beugung, Adduktion und Außenrotation bis zum Ende, dann drückt der Patient in Innenrotation. Kommt der bekannte seitliche Schmerz, spricht das für eine gluteale Tendinopathie.",
p:[["Struktur","Glutealsehnen am Trochanter major"],["Prinzip","Kompression in Adduktion plus Muskelaktivität"],["Frage","Liegt eine gluteale Tendinopathie vor?"],["Wann einsetzen","Lateraler Hüftschmerz, ergänzend zum Einbeinstand"]],
d:[["Lagerung","Rückenlage."],["Flexion","Hüfte und Knie auf 90° beugen."],["Adduktion und AR","Bein über die Mitte führen und nach außen rotieren bis zum Ende."],["Widerstand","Patient drückt isometrisch in Innenrotation gegen die Hand des Therapeuten."],["Fragen","Bekannter Schmerz seitlich?"]],
pos:"Bekannter lateraler Hüftschmerz ab 2 von 10.",neg:"Kein lateraler Schmerz.",
lr:["6,6",null],kw:"FADER-R: Sensitivität 44 %, Spezifität 93 % gegen MRT (Grimaldi 2017). Ohne Widerstand (FADER) schwächer.",
f:["Leistenschmerz in dieser Position deutet eher auf das Gelenk (FAI, Labrum).","Zu wenig Adduktion: Kompression fehlt."],
r:"",c:["einbeinstand30","trendelenburg"],kb:["HU04"],
leg:[["Hüfte und Knie 90°","Rückenlage"],["Adduktion und Außenrotation","bis zum Bewegungsende"],["Widerstand","Patient drückt in Innenrotation"]],
dk:["FADER-R {s} positiv: lateraler Hüftschmerz über dem Trochanter.","FADER-R {s} negativ."],
q:"Grimaldi A et al. Am J Sports Med 2017;45:2667."},
hockschmerz:{u:"Hüfte · Arthrose · Sutlive-Kriterium",ev:"Belegstärke mäßig · Sutlive 2008",
k:"Der Patient geht so tief er kann in die Hocke. Bekannter Leisten- oder Hüftschmerz zählt als ein Kriterium der Sutlive-Regel für Hüftarthrose.",
p:[["Struktur","Hüftgelenk"],["Prinzip","Maximale Flexion unter Last"],["Frage","Spricht das Beschwerdebild für eine Hüftarthrose?"],["Wann einsetzen","Leistenschmerz ab etwa 40 Jahren"]],
d:[["Stand","Füße hüftbreit."],["Hocke","So tief wie möglich, Fersen möglichst am Boden, notfalls an der Liege festhalten."],["Fragen","Bekannter Schmerz in Leiste oder Hüfte?"]],
pos:"Bekannter Hüft- oder Leistenschmerz in der Hocke.",neg:"Hocke ohne Hüftschmerz.",lr:null,kw:SUT,
f:["Knieschmerz oder Gleichgewicht begrenzen die Hocke, das zählt nicht."],r:"",c:sutC.filter(x=>x!=="hockschmerz"),kb:["HU01"],
leg:[["Tiefe Hocke","Fersen möglichst am Boden"],["Halt an der Liege","bei Unsicherheit"]],
dk:["Hocke {s}: bekannter Leistenschmerz (Sutlive-Kriterium positiv).","Hocke {s} schmerzfrei."],q:"Sutlive TG et al. J Orthop Sports Phys Ther 2008;38:542."},
hueftflexionaktiv:{u:"Hüfte · Arthrose · Sutlive-Kriterium",ev:"Belegstärke mäßig · Sutlive 2008",
k:"In Rückenlage zieht der Patient das Knie aktiv zur Brust. Schmerz seitlich an der Hüfte zählt als ein Kriterium der Sutlive-Regel.",
p:[["Struktur","Hüftgelenk, laterale Strukturen"],["Prinzip","Aktive maximale Flexion"],["Frage","Spricht das Beschwerdebild für eine Hüftarthrose?"],["Wann einsetzen","Im Cluster bei Verdacht auf Koxarthrose"]],
d:[["Lagerung","Rückenlage, Beine gestreckt."],["Bewegung","Patient zieht das Knie aktiv so weit wie möglich zur Brust."],["Fragen","Schmerz an der Außenseite der Hüfte?"]],
pos:"Schmerz an der lateralen Hüfte während der aktiven Flexion.",neg:"Kein lateraler Schmerz.",lr:null,kw:SUT,
f:["Leistenschmerz allein zählt bei diesem Kriterium nicht."],r:"",c:sutC.filter(x=>x!=="hueftflexionaktiv"),kb:["HU01"],
leg:[["Rückenlage","anderes Bein gestreckt"],["Knie aktiv zur Brust","ohne Hilfe der Hände"]],
dk:["Aktive Hüftflexion {s}: lateraler Hüftschmerz (Sutlive-Kriterium positiv).","Aktive Hüftflexion {s} schmerzfrei."],q:"Sutlive TG et al. J Orthop Sports Phys Ther 2008;38:542."},
irpassiv:{u:"Hüfte · Arthrose · Sutlive-Kriterium",ev:"Belegstärke mäßig · Sutlive 2008",
k:"Bei 90° gebeugter Hüfte wird passiv nach innen rotiert und gemessen. 25° oder weniger zählt als Kriterium der Sutlive-Regel. Die Innenrotation ist bei Koxarthrose meist zuerst eingeschränkt.",
p:[["Struktur","Hüftgelenkkapsel, Gelenkflächen"],["Bewegung","Passive Innenrotation in 90° Flexion"],["Frage","Ist die Innenrotation arthrosetypisch eingeschränkt?"],["Wann einsetzen","Leistenschmerz, Anlaufschmerz, Verdacht Koxarthrose"]],
d:[["Lagerung","Rückenlage, Hüfte und Knie 90° gebeugt."],["Rotation","Unterschenkel nach außen führen, so dreht der Oberschenkel nach innen."],["Ende","Bis zum Bewegungsende, Becken nicht mitnehmen."],["Messen","Winkel mit dem Goniometer am Unterschenkel ablesen."]],
pos:"Passive Innenrotation 25° oder weniger.",neg:"Innenrotation über 25°.",lr:null,kw:SUT,
f:["Becken rotiert mit: Wert wird zu groß.","Verwechslung: Unterschenkel nach außen bedeutet Hüftinnenrotation."],
r:"",c:sutC.filter(x=>x!=="irpassiv"),kb:["HU01","HU09"],
leg:[["Hüfte und Knie 90°","Rückenlage"],["Unterschenkel nach außen","Hüfte rotiert nach innen"],["Goniometer","Winkel ablesen"]],
dk:["Passive Hüft-IR {s} __° (≤ 25°, Sutlive-Kriterium positiv).","Passive Hüft-IR {s} __°, nicht eingeschränkt."],q:"Sutlive TG et al. J Orthop Sports Phys Ther 2008;38:542."},
scour:{u:"Hüfte · Gelenk · Kompressionstest",ev:"Belegstärke mäßig · Sutlive 2008",
k:"Über das gebeugte Knie wird Druck in die Hüfte gegeben und das Bein kreisend von Adduktion in Abduktion bewegt. Leistenschmerz, vor allem in Adduktion, spricht für ein Problem im Gelenk.",
p:[["Struktur","Gelenkknorpel, Labrum, Pfannenrand"],["Bewegung","Axiale Kompression plus Kreisen"],["Frage","Ist der Schmerz intraartikulär?"],["Wann einsetzen","Leistenschmerz, Verdacht Arthrose oder Labrum"]],
d:[["Lagerung","Rückenlage, Hüfte etwa 90° gebeugt."],["Griff","Beide Hände auf dem gebeugten Knie."],["Druck","Axialen Druck über den Femur in die Hüfte geben."],["Kreisen","Hüfte unter Druck von Adduktion in Abduktion bewegen."],["Fragen","Bekannter Leistenschmerz, Reiben, Klicken?"]],
pos:"Bekannter Leistenschmerz, besonders in Adduktion.",neg:"Kein Leistenschmerz.",lr:null,kw:SUT,
f:["Zu viel Druck macht fast jede Hüfte schmerzhaft."],r:"",c:sutC.filter(x=>x!=="scour").concat(["fadir"]),kb:["HU01","HU06"],
leg:[["Hüfte 90° gebeugt","Rückenlage"],["Druck über das Knie","axial in den Femur"],["Kreisen","Adduktion zu Abduktion"]],
dk:["Scour-Test {s} positiv: Leistenschmerz in Adduktion.","Scour-Test {s} negativ."],q:"Sutlive TG et al. J Orthop Sports Phys Ther 2008;38:542."},
hueftextensionaktiv:{u:"Hüfte · Arthrose · Sutlive-Kriterium",ev:"Belegstärke mäßig · Sutlive 2008",
k:"In Bauchlage hebt der Patient das gestreckte Bein an. Bekannter Hüft- oder Leistenschmerz zählt als Kriterium der Sutlive-Regel.",
p:[["Struktur","Hüftgelenk, vordere Kapsel"],["Bewegung","Aktive Extension"],["Frage","Spricht das Beschwerdebild für eine Hüftarthrose?"],["Wann einsetzen","Zuletzt im Hüft-Cluster"]],
d:[["Lagerung","Bauchlage, Beine gestreckt."],["Bewegung","Patient hebt das gestreckte Bein von der Liege."],["Fragen","Bekannter Schmerz in Hüfte oder Leiste?"]],
pos:"Bekannter Hüft- oder Leistenschmerz bei aktiver Extension.",neg:"Kein Schmerz.",lr:null,kw:SUT,
f:["Kreuzschmerz bei Hohlkreuz zählt nicht."],r:"",c:sutC.filter(x=>x!=="hueftextensionaktiv"),kb:["HU01"],
leg:[["Bauchlage","Becken liegt auf"],["Gestrecktes Bein anheben","aktiv"]],
dk:["Aktive Hüftextension {s} schmerzhaft (Sutlive-Kriterium positiv).","Aktive Hüftextension {s} schmerzfrei."],q:"Sutlive TG et al. J Orthop Sports Phys Ther 2008;38:542."},
fadir:{u:"Hüfte · Leiste · FAI und Labrum",ev:"Belegstärke mäßig · Reiman 2015",
k:"Hüfte in 90° Beugung, Adduktion und Innenrotation. Fast jeder mit FAI oder Labrumschaden reagiert mit Leistenschmerz. Ein negativer Test spricht deutlich dagegen, ein positiver beweist wenig.",
p:[["Struktur","Kopf-Hals-Übergang, vorderer Pfannenrand, Labrum"],["Bewegung","Flexion, Adduktion, Innenrotation"],["Frage","Gibt es ein Impingement oder eine Labrumläsion?"],["Wann einsetzen","Leistenschmerz bei jungen Aktiven, C-Zeichen"]],
d:[["Lagerung","Rückenlage."],["Flexion","Hüfte und Knie auf 90° beugen."],["Adduktion","Knie zur Gegenseite führen."],["Innenrotation","Unterschenkel nach außen führen bis zum Ende."],["Fragen","Bekannter Leistenschmerz?"]],
pos:"Bekannter Leistenschmerz.",neg:"Kein Leistenschmerz.",lr:["1,0","0,15"],kw:"Sensitivität 99 %, Spezifität 5–7 % (Reiman 2015). Zum Ausschließen gut, zum Bestätigen ungeeignet.",
f:["Positiv auch bei Arthrose, Psoas oder Adduktoren.","Bewegung nicht über den Schmerz hinaus forcieren."],
r:"",c:["faber","scour","thomas"],kb:["HU05","HU06"],
leg:[["Hüfte und Knie 90°","Rückenlage"],["Adduktion","Knie zur Gegenseite"],["Innenrotation","Unterschenkel nach außen"]],
dk:["FADIR {s} positiv: bekannter Leistenschmerz.","FADIR {s} negativ."],q:"Reiman MP et al. Br J Sports Med 2015;49:811."},
faber:{u:"Hüfte · Leiste und ISG · Provokationstest",ev:"Belegstärke schwach · Schneider 2020",
k:"Viererzeichen: Ferse aufs andere Knie, das Knie wird zur Liege gedrückt. Wo der Schmerz sitzt, gibt die Richtung vor: Leiste spricht für die Hüfte, hinten für das ISG.",
p:[["Struktur","Hüftgelenk, Iliosakralgelenk, Adduktoren"],["Bewegung","Flexion, Abduktion, Außenrotation"],["Frage","Hüfte oder ISG?"],["Wann einsetzen","Leisten- oder Gesäßschmerz unklarer Herkunft"]],
d:[["Lagerung","Rückenlage."],["Viererzeichen","Ferse des Testbeins auf das andere Knie legen."],["Fixieren","Eine Hand fixiert die gegenseitige SIAS."],["Druck","Andere Hand drückt das Knie des Testbeins Richtung Liege."],["Fragen","Wo genau tut es weh? Abstand Knie zur Liege notieren."]],
pos:"Bekannter Schmerz in der Leiste (Hüfte) oder hinten am ISG, oder deutliche Seitendifferenz.",neg:"Schmerzfrei, seitengleich.",lr:["1,1","0,9"],kw:"ISG-Schmerz: Sensitivität 50 %, Spezifität 56 % (Schneider 2020). Reliabilität mäßig (Kappa 0,47).",
f:["Ziehen in den Adduktoren ist Dehnung, kein positiver Befund.","Allein wenig aussagekräftig, nur im Cluster nutzen."],
r:"",c:["fadir","gaenslen","thighthrust"],kb:["HU01","HU05","WS01"],
leg:[["Viererzeichen","Ferse auf dem anderen Knie"],["Hand an der SIAS","fixiert das Becken"],["Druck aufs Knie","Richtung Liege"]],
dk:["FABER {s} positiv: Schmerz in der Leiste.","FABER {s} negativ."],q:"Schneider BJ et al. Pain Med 2020. Sutlive TG et al. 2008."},
thomas:{u:"Hüfte · Hüftbeuger · Längentest",ev:"Belegstärke schwach · Einzelstudie",
k:"Am Liegenende zieht der Patient ein Knie zur Brust, das andere Bein hängt. Hebt der Oberschenkel ab, ist der Iliopsoas verkürzt. Streckt sich das Knie, der Rectus femoris.",
p:[["Struktur","M. iliopsoas, M. rectus femoris, Tractus iliotibialis"],["Prinzip","Becken fixiert, Hüftbeuger auf Länge"],["Frage","Sind die Hüftbeuger verkürzt?"],["Wann einsetzen","Leistenschmerz, Hohlkreuz, Läufer"]],
d:[["Lagerung","Rückenlage am Liegenende, Gesäß an der Kante."],["Anziehen","Patient zieht ein Knie mit beiden Händen zur Brust, bis die LWS aufliegt."],["Hängenlassen","Das andere Bein hängt frei über die Kante."],["Beobachten","Liegt der Oberschenkel auf? Knie etwa 90° gebeugt? Weicht das Bein seitlich ab?"]],
pos:"Oberschenkel hebt ab (Iliopsoas), Knie streckt sich (Rectus femoris) oder Bein weicht nach außen (Tractus).",neg:"Oberschenkel liegt auf, Knie hängt etwa 90° gebeugt.",lr:["11,1",null],kw:"Sensitivität 89 %, Spezifität 92 % aus einer Einzelstudie (zitiert in Reiman 2015). Mit Vorsicht verwenden.",
f:["LWS nicht flach: Becken kippt, Ergebnis falsch.","Knie zu weit zur Brust: Becken kippt nach hinten, falsch positiv."],
r:"",c:["fadir","faber"],kb:["HU05","HU10"],
leg:[["Knie zur Brust","LWS liegt auf"],["Bein hängt frei","Oberschenkel beobachten"],["Kniewinkel","Rectus femoris"]],
dk:["Thomas-Test {s} positiv: Oberschenkel hebt ab, Verkürzung M. iliopsoas.","Thomas-Test {s} negativ."],q:"Reiman MP et al. Br J Sports Med 2015."}
});})();

/* Testkapitel Knie. Schema: u Untertitel, ev Beleg-Chip, k Auf einen Blick, p [[Label,Text]] Was der Test prüft, d [[Schritt,Text]] Durchführung,
   pos/neg Auswertung, lr [LR+,LR−] als Text oder null, kw Kennwerte-Satz, f Fehlerquellen, r Abklären, c Cluster-Tests, kb Krankheitsbilder (WI_KL-ids),
   leg [[Titel,Text]] Legende, dk [positiv, negativ] Doku-Satz ({s} = Seite) */
var WI_TK=window.WI_TK||{};
Object.assign(WI_TK,{
lachman:{u:"Knie · vorderes Kreuzband · Provokationstest",ev:"Belegstärke stark · Jackson 2003",
k:"Die Tibia wird bei leicht gebeugtem Knie gegen den Oberschenkel nach vorn gezogen. Entscheidend sind Weg und Endgefühl im Seitenvergleich. Der genaueste klinische Einzeltest für einen Riss des vorderen Kreuzbands.",
p:[["Struktur","Lig. cruciatum anterius, vor allem anteromediales Bündel"],["Bewegung","Vordere Translation der Tibia gegenüber dem Femur in 20–30° Flexion"],["Frage","Ist das vordere Kreuzband gerissen?"],["Wann einsetzen","Nach Dreh- oder Landetrauma, Knall, schneller Schwellung, Giving way"]],
d:[["Lagerung","Rückenlage, Knie 20–30° gebeugt auf Handtuch oder dem Oberschenkel des Untersuchers, Bein leicht außenrotiert."],["Hinteres Kreuzband zuerst","Durchhängende Tibia ausschließen. Sonst wirkt der Zug nach vorn wie ein positiver Test."],["Griff","Eine Hand fixiert den distalen Oberschenkel, die andere umgreift die Tibia direkt unter dem Gelenkspalt, Daumen an der Tuberositas."],["Zug","Tibia zügig, aber ohne Ruck nach vorn ziehen. Weg und Anschlag spüren."],["Seitenvergleich","Gesundes Knie genauso testen und beide vergleichen."]],
pos:"Weiches oder fehlendes Endgefühl. Mehr als 2 mm mehr Translation als auf der gesunden Seite oder insgesamt über 10 mm.",neg:"Fester, harter Anschlag. Translation seitengleich.",
lr:["12,4","0,14"],kw:"Sensitivität 78–85 %, Spezifität über 95 % (Katz und Fingeroth 1986, Untersuchung in Narkose). In der Praxis eher etwas niedriger.",
f:["Frischer Erguss und Abwehrspannung machen den Test falsch negativ.","Riss des hinteren Kreuzbands macht ihn falsch positiv.","Großer Oberschenkel, kleine Hand: Knie des Untersuchers unterlegen oder Variante in Bauchlage.","Eingeklemmter Meniskus kann die Translation blockieren."],
r:"Echte Blockade des Knies nach Trauma spricht für einen Korbhenkelriss, zügig ärztlich.",
c:["pivotshift","schublade","leversign"],kb:["KN04"],
leg:[["Knie 20–30° gebeugt","Handtuch unter dem Knie, Bein leicht außenrotiert, Patient entspannt"],["Fixierende Hand am Oberschenkel","distaler Femur knapp über der Patella"],["Ziehende Hand an der Tibia","Daumen an der Tuberositas tibiae, Finger in der Kniekehle"],["Zug nach ventral","Tibia gegen den Femur nach vorn, Endgefühl beurteilen"]],
dk:["Lachman-Test {s} positiv: weiches Endgefühl, vermehrte vordere Tibiatranslation im Seitenvergleich.","Lachman-Test {s} negativ: fester Anschlag, Translation seitengleich."],
q:"Jackson JL et al. Ann Intern Med 2003;139:575–588. Katz JW, Fingeroth RJ. Am J Sports Med 1986;14:88–91."},

schublade:{u:"Knie · vorderes Kreuzband · Provokationstest",ev:"Belegstärke mäßig · Jackson 2003",
k:"Bei 90° gebeugtem Knie wird die Tibia nach vorn gezogen. Weit verbreitet, aber für das vordere Kreuzband die schwächste der drei Standardproben. Ein negatives Ergebnis schließt einen Riss nicht aus.",
p:[["Struktur","Lig. cruciatum anterius, dazu posteromediale Kapsel"],["Bewegung","Vordere Translation der Tibia in 90° Flexion"],["Frage","Ist das vordere Kreuzband insuffizient?"],["Wann einsetzen","Ergänzend zum Lachman, vor allem bei chronischer Instabilität"]],
d:[["Lagerung","Rückenlage, Hüfte 45°, Knie 90° gebeugt, Fuß flach auf der Liege."],["Hinteres Kreuzband zuerst","Sag Sign prüfen. Eine durchhängende Tibia täuscht sonst eine vordere Schublade vor."],["Fuß fixieren","Untersucher sitzt auf dem Vorfuß des Patienten."],["Griff","Beide Hände umgreifen die Tibia direkt unter dem Gelenkspalt, Daumen beidseits der Patellasehne, Zeigefinger tasten die Hamstrings auf Entspannung."],["Zug","Tibia nach vorn ziehen und mit der Gegenseite vergleichen."]],
pos:"Vermehrte vordere Translation im Seitenvergleich oder kein fester Anschlag.",neg:"Fester Anschlag, Translation seitengleich.",
lr:["3,7","0,6"],kw:"Für Aussagen zum Kreuzband deutlich schwächer als Lachman und Pivot-Shift.",
f:["Angespannte Hamstrings bremsen die Tibia, Test wird falsch negativ.","Erguss verhindert die 90° Beugung bei frischer Verletzung.","Riss des hinteren Kreuzbands täuscht einen positiven Test vor."],
r:"",c:["lachman","pivotshift","hinteresag"],kb:["KN04"],
leg:[["Hüfte 45°, Knie 90°","Fuß flach auf der Liege"],["Fuß fixiert","Untersucher sitzt auf dem Vorfuß"],["Griff an der Tibia","Daumen beidseits der Patellasehne"],["Zug nach ventral","Tibia nach vorn, Seitenvergleich"]],
dk:["Vordere Schublade {s} positiv: vermehrte ventrale Translation, weicher Anschlag.","Vordere Schublade {s} negativ: fester Anschlag, seitengleich."],
q:"Jackson JL et al. Ann Intern Med 2003;139:575–588."},

pivotshift:{u:"Knie · vorderes Kreuzband · Rotationsinstabilität",ev:"Belegstärke stark · Jackson 2003",
k:"Aus der Streckung wird das Knie unter Innenrotation und Valgus gebeugt. Bei VKB-Riss springt die nach vorn subluxierte Tibia bei etwa 30–40° zurück. Ein positiver Test bestätigt den Riss sehr zuverlässig.",
p:[["Struktur","Lig. cruciatum anterius, anterolaterale Strukturen"],["Bewegung","Anterolaterale Rotationsinstabilität der Tibia"],["Frage","Gibt es eine funktionelle Instabilität bei VKB-Insuffizienz?"],["Wann einsetzen","Zuletzt im Untersuchungsgang, wenn der Patient entspannt ist"]],
d:[["Lagerung","Rückenlage, Hüfte passiv 30° gebeugt und leicht abduziert."],["Griff","Eine Hand hält Ferse und Knöchel und rotiert die Tibia etwa 20° nach innen. Die andere Hand liegt außen am Fibulaköpfchen."],["Streckung","Knie in volle Streckung sinken lassen. Die Tibia steht jetzt vorn subluxiert."],["Valgus und Beugung","Unter Innenrotation leichten Valgusstress geben und das Knie langsam beugen."],["Beobachten","Bei 30–40° Beugung auf das ruckartige Zurückspringen der Tibia achten."]],
pos:"Spürbares oder sichtbares Zurückspringen der Tibia bei 30–40° Beugung.",neg:"Gleichmäßige Bewegung ohne Ruck.",
lr:["20,3","0,4"],kw:"Positiv beweist den Riss fast sicher. Negativ schließt ihn nicht aus, weil Abwehrspannung den Test oft verhindert.",
f:["Abwehrspannung macht den Test häufig falsch negativ. Wach oft nicht auslösbar.","Blockierter Meniskus kann das Zurückspringen verhindern.","Bei Schmerz nicht erzwingen."],
r:"",c:["lachman","schublade","leversign"],kb:["KN04"],
leg:[["Bein angehoben, fast gestreckt","Hüfte leicht abduziert"],["Hand an Ferse und Knöchel","hält die Tibia in Innenrotation"],["Hand außen am Knie","am Fibulaköpfchen, gibt Valgus"],["Langsam beugen","Zurückspringen bei 30–40° beobachten"]],
dk:["Pivot-Shift-Test {s} positiv: Reposition der Tibia bei ca. 30° Flexion.","Pivot-Shift-Test {s} negativ."],
q:"Jackson JL et al. Ann Intern Med 2003;139:575–588."},

leversign:{u:"Knie · vorderes Kreuzband · Hebeltest",ev:"Belegstärke mäßig · Metaanalyse 2019",
k:"Eine Faust unter dem Unterschenkel dient als Drehpunkt, Druck auf den Oberschenkel hebt bei intaktem Kreuzband die Ferse. Funktioniert auch bei verspanntem oder ängstlichem Patienten.",
p:[["Struktur","Lig. cruciatum anterius"],["Bewegung","Hebel über die Tibia, das VKB überträgt den Druck auf die Ferse"],["Frage","Ist das vordere Kreuzband gerissen?"],["Wann einsetzen","Wenn Lachman wegen Schmerz oder Spannung schwer zu beurteilen ist"]],
d:[["Lagerung","Rückenlage, beide Beine gestreckt."],["Faust unterlegen","Faust unter das obere Drittel des Unterschenkels legen."],["Druck","Mit der anderen Hand kräftig auf das distale Drittel des Oberschenkels drücken."],["Beobachten","Hebt sich die Ferse von der Liege?"],["Seitenvergleich","Gesundes Bein zuerst als Referenz."]],
pos:"Die Ferse bleibt auf der Liege liegen.",neg:"Die Ferse hebt deutlich ab.",
lr:["6,6","0,22"],kw:"Sensitivität 77 %, Spezifität 90 % (Metaanalyse 2019). In einer akuten Skiunfall-Gruppe nur 61 % Sensitivität (Bucher 2022).",
f:["Zu wenig Druck auf den Oberschenkel täuscht einen positiven Test vor.","Faust zu weit distal verändert den Hebel."],
r:"",c:["lachman","pivotshift","schublade"],kb:["KN04"],
leg:[["Bein gestreckt","Rückenlage, entspannt"],["Faust unter dem Unterschenkel","oberes Drittel, als Drehpunkt"],["Druck auf den Oberschenkel","distales Drittel"],["Ferse beobachten","hebt ab oder bleibt liegen"]],
dk:["Lever-Sign {s} positiv: Ferse bleibt bei Druck auf den distalen Femur liegen.","Lever-Sign {s} negativ: Ferse hebt ab."],
q:"Metaanalyse 2019, zitiert nach Physiotutors. Bucher C et al. 2022."},

ottawaknie:{u:"Knie · Trauma · Entscheidungsregel",ev:"Belegstärke stark · Bachmann 2004",
k:"Fünf Kriterien nach akutem Knietrauma. Trifft keines zu, ist eine Fraktur sehr unwahrscheinlich und Röntgen meist nicht nötig. Trifft eines zu, wird geröntgt.",
p:[["Struktur","Patella, Fibulaköpfchen, Tibiaplateau, distaler Femur"],["Prinzip","Klinische Entscheidungsregel zum Röntgen"],["Frage","Muss das Knie geröntgt werden?"],["Wann einsetzen","Innerhalb von 7 Tagen nach akutem Knietrauma"]],
d:[["Alter","55 Jahre oder älter?"],["Patella","Isolierter Druckschmerz der Kniescheibe?"],["Fibulaköpfchen","Druckschmerz am Wadenbeinköpfchen?"],["Beugung","Aktive Flexion unter 90° möglich?"],["Gehen","Direkt nach dem Unfall und jetzt keine 4 Schritte möglich (Hinken zählt als Schritt)?"]],
pos:"Mindestens ein Kriterium trifft zu: Röntgen.",neg:"Kein Kriterium trifft zu: Fraktur sehr unwahrscheinlich.",
lr:[null,"0,03"],kw:"Sensitivität 98,5 %, Spezifität 48,6 % (Bachmann 2004). Die Regel ist zum Ausschließen gemacht.",
f:["Nicht anwendbar bei Kindern, Bewusstseinsstörung, Mehrfachverletzung oder veränderter Sensibilität.","Hohe Falsch-Positiv-Rate: positiv heißt nur Röntgen, nicht Fraktur."],
r:"Fehlstellung, grobe Instabilität, Durchblutungs- oder Nervenstörung → sofort ärztlich.",
c:["tanzendepatella","gelenkspalt"],kb:["KN10"],
leg:[["Fibulaköpfchen palpieren","Druckschmerz außen unter dem Gelenkspalt"],["Patella","isolierter Druckschmerz"],["Beugung prüfen","aktiv unter 90°?"],["4 Schritte","Gehfähigkeit prüfen"]],
dk:["Ottawa Knee Rules {s} positiv (Kriterium erfüllt), Röntgen empfohlen.","Ottawa Knee Rules {s} negativ, kein Kriterium erfüllt."],
q:"Bachmann LM et al. Ann Intern Med 2004;140:121–124."},

tanzendepatella:{u:"Knie · Erguss · Inspektion und Palpation",ev:"Belegstärke ohne Daten",
k:"Der obere Rezessus wird ausgestrichen, dann die Kniescheibe nach unten gedrückt. Federt sie auf den Femur und zurück, liegt ein deutlicher Erguss vor. Kleine Ergüsse erfasst der Wischtest besser.",
p:[["Struktur","Recessus suprapatellaris, Gelenkhöhle"],["Prinzip","Verdrängte Flüssigkeit hebt die Patella an"],["Frage","Liegt ein Gelenkerguss vor?"],["Wann einsetzen","Nach Trauma, bei Schwellung, im Verlauf nach OP"]],
d:[["Lagerung","Rückenlage, Knie gestreckt, Quadrizeps entspannt."],["Ausstreichen","Eine Hand streicht den Rezessus oberhalb der Patella nach distal aus und hält dort."],["Druck","Zeigefinger der anderen Hand drückt die Patella kurz nach dorsal."],["Spüren","Federt die Patella an und zurück?"],["Seitenvergleich","Gegenseite gleich prüfen."]],
pos:"Patella schlägt spürbar auf den Femur und federt zurück.",neg:"Kein Anschlagen, Patella liegt dem Femur an.",
lr:null,kw:"Keine Kennwerte zur Genauigkeit in den gelesenen Quellen. Bei kleinem Erguss oft negativ.",
f:["Angespannter Quadrizeps verfälscht das Ergebnis.","Sehr großer, praller Erguss: Patella lässt sich kaum eindrücken."],
r:"Rasch auftretender Erguss nach Trauma (Hämarthros) spricht für Kreuzband oder Fraktur. Heißes, gerötetes Knie mit Fieber → ärztlich.",
c:["ottawaknie","lachman"],kb:["KN01","KN02","KN04"],
leg:[["Rezessus ausstreichen","Hand oberhalb der Patella nach distal"],["Patella drücken","Zeigefinger mittig auf der Kniescheibe"],["Bein gestreckt","Quadrizeps entspannt"]],
dk:["Tanzende Patella {s} positiv, deutlicher Gelenkerguss.","Tanzende Patella {s} negativ."],
q:"Lehrbuchwissen, Kennwerte nicht belegt."},

thessaly:{u:"Knie · Meniskus · Belastungstest",ev:"Belegstärke mäßig · Smith 2015",
k:"Der Patient steht auf dem Testbein mit leicht gebeugtem Knie und dreht den Körper dreimal nach innen und außen. Schmerz im Gelenkspalt oder ein Blockierungsgefühl spricht für einen Meniskusschaden.",
p:[["Struktur","Meniscus medialis und lateralis"],["Bewegung","Rotation unter axialer Last in 20° Flexion"],["Frage","Gibt es eine Meniskusläsion?"],["Wann einsetzen","Bei Gelenkspaltschmerz, Einklemmen, Drehschmerz"]],
d:[["Gesunde Seite zuerst","Patient lernt die Bewegung und hat einen Vergleich."],["Stand","Einbeinstand auf dem Testbein, Knie 20° gebeugt."],["Halten","Therapeut hält beide Hände des Patienten."],["Drehen","Knie und Körper dreimal nach innen und außen drehen."],["Fragen","Schmerz im Gelenkspalt? Einklemmen?"]],
pos:"Schmerz im medialen oder lateralen Gelenkspalt oder Blockierungsgefühl.",neg:"Drehen ohne Gelenkspaltschmerz.",
lr:["5,8","0,29"],kw:"Sensitivität 75 %, Spezifität 87 % in 20° Flexion (Smith 2015, gepoolt).",
f:["Nicht bei frischer Verletzung mit starkem Schmerz oder unsicherem Stand.","Schmerz vorn an der Kniescheibe zählt nicht."],
r:"Echte Blockade, Knie lässt sich nicht strecken → zügig ärztlich.",
c:["mcmurray","gelenkspalt"],kb:["KN05"],
leg:[["Einbeinstand","Testbein, Knie 20° gebeugt"],["Hände halten","Therapeut sichert"],["Rotation","dreimal innen und außen"]],
dk:["Thessaly-Test {s} positiv: Gelenkspaltschmerz medial bei Rotation in 20° Flexion.","Thessaly-Test {s} negativ."],
q:"Smith BE et al. BMJ Evid Based Med 2015;20:88."},

gelenkspalt:{u:"Knie · Meniskus · Palpation",ev:"Belegstärke mäßig · Smith 2015",
k:"Medialer und lateraler Gelenkspalt werden bei gebeugtem Knie abgetastet. Bekannter, punktueller Druckschmerz spricht für den Meniskus der Seite. Allein nicht beweisend, im Cluster hilfreich.",
p:[["Struktur","Meniskusränder, Kapsel am Gelenkspalt"],["Prinzip","Lokaler Druckschmerz"],["Frage","Wo sitzt der Schmerz?"],["Wann einsetzen","Bei Verdacht auf Meniskusschaden, immer im Seitenvergleich"]],
d:[["Lagerung","Sitz an der Liegenkante oder Rückenlage, Knie etwa 90° gebeugt."],["Orientieren","Gelenkspalt neben der Patellasehne aufsuchen."],["Palpieren","Mit den Daumen medial und lateral von vorn nach hinten tasten."],["Fragen","Ist das der bekannte Schmerz?"]],
pos:"Bekannter, lokaler Druckschmerz im Gelenkspalt.",neg:"Kein Druckschmerz.",
lr:["4,9","0,2"],kw:"Sensitivität 83 %, Spezifität 83 % (Smith 2015). Ältere Übersicht deutlich schwächer (Jackson 2003: LR+ 1,1).",
f:["Druckschmerz auch bei Arthrose, Seitenband oder Plica.","Ohne Seitenvergleich schwer zu werten."],
r:"",c:["thessaly","mcmurray"],kb:["KN05","KN01"],
leg:[["Knie 90°","Sitz an der Liegenkante"],["Daumen medial","Gelenkspalt innen"],["Daumen lateral","Gelenkspalt außen"]],
dk:["Druckschmerz Gelenkspalt medial {s}.","Gelenkspalt {s} medial und lateral druckschmerzfrei."],
q:"Smith BE et al. BMJ Evid Based Med 2015;20:88. Jackson JL et al. 2003."},

mcmurray:{u:"Knie · Meniskus · Provokationstest",ev:"Belegstärke stark · Jackson 2003",
k:"Aus starker Beugung wird das Knie unter Rotation langsam gestreckt, eine Hand tastet den Gelenkspalt. Ein schmerzhafter Klick spricht stark für einen Meniskusriss.",
p:[["Struktur","Hinterhorn Meniscus medialis und lateralis"],["Bewegung","Flexion, Rotation und Varus/Valgus, dann Streckung"],["Frage","Ist der Meniskus gerissen?"],["Wann einsetzen","Bei Einklemmen, Klicken, Gelenkspaltschmerz"]],
d:[["Lagerung","Rückenlage, Bein entspannt."],["Griff","Eine Hand an der Ferse, die andere am Knie, Daumen und Finger am Gelenkspalt."],["Medial","Aus maximaler schmerzfreier Beugung: Tibia außenrotieren, Valgus, langsam strecken."],["Lateral","Wieder beugen: Tibia innenrotieren, Varus, langsam strecken."],["Fragen","Klick, bekannter Schmerz, Einklemmen?"]],
pos:"Tastbarer oder hörbarer Klick mit dem bekannten Gelenkspaltschmerz.",neg:"Kein Klick, kein Gelenkspaltschmerz.",
lr:["17,3","0,5"],kw:"Positiv spricht stark für einen Riss, negativ schließt ihn nicht aus. Neuere Daten (2025) liegen deutlich niedriger.",
f:["Beugung nicht erzwingen, sonst Schmerz ohne Aussage.","Schmerz ohne Klick ist wenig spezifisch.","Patellofemorales Reiben nicht mit Meniskusklick verwechseln."],
r:"Echte Blockade → zügig ärztlich.",
c:["thessaly","gelenkspalt"],kb:["KN05"],
leg:[["Starke Beugung","Ausgangsstellung"],["Hand an der Ferse","steuert Rotation und Streckung"],["Hand am Gelenkspalt","Daumen medial, Finger lateral"],["Langsam strecken","auf Klick achten"]],
dk:["McMurray-Test {s} positiv: Klick mit Schmerz am medialen Gelenkspalt.","McMurray-Test {s} negativ."],
q:"Jackson JL et al. Ann Intern Med 2003;139:575–588."},

valgusstress:{u:"Knie · Innenband · Stabilitätstest",ev:"Belegstärke ohne Daten",
k:"Das Knie wird nach innen gedrückt, der Unterschenkel nach außen geführt. Aufklappen innen in 20–30° Beugung spricht für eine Innenbandverletzung. Aufklappen in voller Streckung zusätzlich für Kapsel oder Kreuzband.",
p:[["Struktur","Lig. collaterale mediale, posteromediale Kapsel"],["Bewegung","Valgus in 20–30° und in 0° Flexion"],["Frage","Ist das Innenband verletzt, wie stark?"],["Wann einsetzen","Nach Valgustrauma, bei Schmerz an der Knieinnenseite"]],
d:[["Lagerung","Rückenlage, Bein am Liegenrand."],["30° Beugung","Knie 20–30° beugen, Oberschenkel liegt auf."],["Valgus","Hand außen am Knie drückt nach innen, Hand am Knöchel führt den Unterschenkel nach außen."],["Streckung","Test in voller Streckung wiederholen."],["Seitenvergleich","Aufklappen und Endgefühl vergleichen."]],
pos:"Vermehrtes Aufklappen innen oder Schmerz am Innenband im Seitenvergleich.",neg:"Fester Anschlag, seitengleich, schmerzfrei.",
lr:null,kw:"Keine Kennwerte in den gelesenen Quellen. Einteilung grob: Grad I Schmerz ohne Aufklappen, Grad II leicht, Grad III deutlich ohne Anschlag.",
f:["Abwehrspannung verdeckt das Aufklappen.","Oberschenkel nicht fixiert: Hüfte rotiert mit."],
r:"Aufklappen in voller Streckung → Kreuzband und Kapsel mitbetroffen, ärztlich abklären.",
c:["varusstress","lachman"],kb:["KN06"],
leg:[["Knie 20–30° gebeugt","Bein am Liegenrand"],["Hand außen am Knie","drückt nach innen"],["Hand am Knöchel","führt nach außen"]],
dk:["Valgusstresstest {s} in 30° Flexion positiv: vermehrte mediale Aufklappbarkeit, Schmerz am Innenband.","Valgusstresstest {s} in 0° und 30° negativ."],
q:"Lehrbuchwissen, Kennwerte nicht belegt."},

varusstress:{u:"Knie · Außenband · Stabilitätstest",ev:"Belegstärke ohne Daten",
k:"Das Knie wird nach außen gedrückt, der Unterschenkel nach innen geführt. Aufklappen außen spricht für eine Verletzung des Außenbands und der posterolateralen Ecke.",
p:[["Struktur","Lig. collaterale laterale, posterolaterale Ecke"],["Bewegung","Varus in 20–30° und in 0° Flexion"],["Frage","Ist das Außenband verletzt?"],["Wann einsetzen","Nach Varustrauma, bei Schmerz außen am Knie"]],
d:[["Lagerung","Rückenlage."],["30° Beugung","Knie 20–30° beugen."],["Varus","Hand innen am Knie drückt nach außen, Hand am Knöchel führt den Unterschenkel nach innen."],["Streckung","In voller Streckung wiederholen."],["Seitenvergleich","Aufklappen vergleichen."]],
pos:"Vermehrtes Aufklappen außen oder Schmerz am Außenband im Seitenvergleich.",neg:"Fester Anschlag, seitengleich.",
lr:null,kw:"Keine Kennwerte in den gelesenen Quellen.",
f:["Abwehrspannung verdeckt das Aufklappen.","Ein leichtes physiologisches Aufklappen außen ist normal, deshalb immer Seitenvergleich."],
r:"Fußheberschwäche oder Taubheit am Fußrücken nach Varustrauma → N. peroneus, ärztlich.",
c:["valgusstress","hintereschublade"],kb:["KN06"],
leg:[["Knie 20–30° gebeugt","Rückenlage"],["Hand innen am Knie","drückt nach außen"],["Hand am Knöchel","führt nach innen"]],
dk:["Varusstresstest {s} in 30° Flexion positiv: vermehrte laterale Aufklappbarkeit.","Varusstresstest {s} in 0° und 30° negativ."],
q:"Lehrbuchwissen, Kennwerte nicht belegt."},

hinteresag:{u:"Knie · hinteres Kreuzband · Inspektion",ev:"Belegstärke mäßig · Rubinstein 1994",
k:"Hüfte und Knie beidseits 90° gebeugt, Blick von der Seite. Hängt die Tibia auf einer Seite nach hinten durch, ist das hintere Kreuzband insuffizient. Immer vor der vorderen Schublade prüfen.",
p:[["Struktur","Lig. cruciatum posterius"],["Prinzip","Schwerkraft zieht die Tibia nach dorsal"],["Frage","Ist das hintere Kreuzband gerissen?"],["Wann einsetzen","Nach Anpralltrauma auf die Tibia (Armaturenbrett), Sturz aufs gebeugte Knie"]],
d:[["Lagerung","Rückenlage, Hüften und Knie beidseits 90°."],["Halten","Unterschenkel an den Fersen unterstützen, Muskulatur entspannt."],["Schauen","Von der Seite die Kontur der Tuberositas tibiae beider Beine vergleichen."]],
pos:"Tibia steht auf der betroffenen Seite sichtbar weiter hinten.",neg:"Profil seitengleich.",
lr:null,kw:"Keine eigenen Kennwerte gelesen. Verbessert zusammen mit der hinteren Schublade die Treffsicherheit.",
f:["Angespannter Quadrizeps zieht die Tibia nach vorn und verdeckt das Durchhängen.","Nur im Seitenvergleich verwertbar."],
r:"",c:["hintereschublade","schublade"],kb:["KN04"],
leg:[["Hüfte und Knie 90°","beidseits"],["Unterschenkel gestützt","Muskeln entspannt"],["Profil vergleichen","Tuberositas tibiae"]],
dk:["Sag Sign {s} positiv: dorsales Durchhängen der Tibia.","Sag Sign {s} negativ."],
q:"Rubinstein RA et al. Am J Sports Med 1994;22:550–557."},

hintereschublade:{u:"Knie · hinteres Kreuzband · Provokationstest",ev:"Belegstärke stark · Rubinstein 1994",
k:"Bei 90° gebeugtem Knie wird die Tibia nach hinten geschoben. Vermehrter Weg mit weichem Anschlag spricht sehr stark für einen Riss des hinteren Kreuzbands.",
p:[["Struktur","Lig. cruciatum posterius"],["Bewegung","Dorsale Translation der Tibia in 90° Flexion"],["Frage","Ist das hintere Kreuzband gerissen?"],["Wann einsetzen","Nach Anpralltrauma, positivem Sag Sign"]],
d:[["Lagerung","Rückenlage, Hüfte 45°, Knie 90°, Fuß flach."],["Ausgangslage","Zuerst prüfen, ob die Tibia schon durchhängt, und sie in Neutralstellung bringen."],["Fuß fixieren","Untersucher sitzt auf dem Vorfuß."],["Schub","Beide Hände umfassen die Tibia, Handballen vorn, und schieben sie nach dorsal."],["Seitenvergleich","Weg und Anschlag vergleichen."]],
pos:"Vermehrte dorsale Translation und weicher Anschlag.",neg:"Fester Anschlag, seitengleich.",
lr:["90","0,1"],kw:"Sensitivität 90 %, Spezifität 99 % (Rubinstein 1994, n = 39, kleine Studie).",
f:["Aus der durchhängenden Stellung gestartet, wirkt der Test negativ.","Kleine Studie, Werte vermutlich zu optimistisch."],
r:"",c:["hinteresag","schublade"],kb:["KN04"],
leg:[["Knie 90°","Fuß flach, fixiert"],["Handballen am Schienbeinkopf","beide Hände"],["Schub nach dorsal","Weg und Anschlag spüren"]],
dk:["Hintere Schublade {s} positiv: vermehrte dorsale Translation, weicher Anschlag.","Hintere Schublade {s} negativ."],
q:"Rubinstein RA et al. Am J Sports Med 1994;22:550–557."}
});

var WI_TK=window.WI_TK||{};
(function(){const H="Hegedus EJ et al. Br J Sports Med 2012;46:964.",MI="Michener LA et al. Arch Phys Med Rehabil 2009;90:1898.",HE="Hermans J et al. JAMA 2013;310:837.";
const imp=["painfularc","hawkins","neer","jobe","infraspinatus"],rm=["droparm","erlag","infraspinatus","jobe"],sub=["liftoff","belly","bearhug"],inst=["apprehension","relocation","surprise"];
const X=(id,o)=>WI_TK[id]=o;
X("painfularc",{u:"Schulter · subakromial · Bewegungstest",ev:"Belegstärke mäßig · JOSPT 2025",
k:"Der Patient hebt den Arm seitlich bis ganz nach oben und wieder ab. Schmerz nur im mittleren Bereich zwischen 60° und 120° ist der schmerzhafte Bogen. Teil des Michener-Clusters für subakromialen Schmerz.",
p:[["Struktur","Rotatorenmanschette, Bursa subacromialis"],["Bewegung","Aktive Abduktion in der Frontalebene"],["Frage","Ist der Schmerz subakromial bedingt?"],["Wann einsetzen","Belastungsabhängiger Schulterschmerz, Überkopf"]],
d:[["Stand","Patient steht, Arm hängt locker, Daumen nach oben."],["Heben","Arm seitlich gestreckt langsam bis ganz nach oben heben."],["Senken","Langsam wieder absenken."],["Beobachten","Wo beginnt und endet der Schmerz? Ausweichbewegungen der Schulter?"]],
pos:"Schmerz zwischen etwa 60° und 120° Abduktion, darüber und darunter schmerzfrei.",neg:"Schmerzfreie Abduktion oder Schmerz nur am Ende.",
lr:["3,44","0,46"],kw:"Leitlinie JOSPT 2025: Sensitivität 62 %, Spezifität 82 %, LR+ 3,44, LR− 0,46, eher zum Bestätigen. Cluster 3 von 5 positiv (Hawkins-Kennedy, Neer, Painful Arc, Jobe, Außenrotation gegen Widerstand): LR+ 2,93, LR− 0,34. Ältere Metaanalyse: Sensitivität 53 %, Spezifität 76 % (Hegedus 2012).",
f:["Schmerz erst ab 160–180° spricht eher für das AC-Gelenk.","Ausweichen über das Schulterblatt verschiebt den Bogen."],r:"",c:imp,kb:["SH01","SH02","SH03"],
leg:[["Arm seitlich gehoben","Schmerz zwischen 60° und 120°?"],["Hand auf der Schulterhöhe","Ausweichbewegung tasten"]],
dk:["Painful Arc {s} positiv zwischen ca. 60° und 120° Abduktion.","Painful Arc {s} negativ."],q:H+" "+HE+" "+MI+" Desmeules F et al. JOSPT 2025;55(4):235–274."});
X("hawkins",{u:"Schulter · subakromial · Provokationstest",ev:"Belegstärke mäßig · JOSPT 2025",
k:"Arm in 90° Flexion, Ellenbogen gebeugt, dann passiv nach innen rotiert. Schmerz vorn-seitlich spricht für eine subakromiale Reizung. Allein wenig aussagekräftig, im Cluster brauchbar.",
p:[["Struktur","Supraspinatussehne, Bursa unter dem Lig. coracoacromiale"],["Bewegung","Innenrotation in 90° Flexion"],["Frage","Gibt es eine subakromiale Schmerzquelle?"],["Wann einsetzen","Schulterschmerz bei Überkopfarbeit"]],
d:[["Position","Sitz oder Stand, Arm 90° nach vorn gehoben, Ellenbogen 90° gebeugt."],["Halten","Eine Hand stützt den Ellenbogen."],["Rotieren","Andere Hand dreht den Unterarm nach unten in Innenrotation."],["Fragen","Bekannter Schmerz an der Schulter?"]],
pos:"Bekannter Schmerz vorn oder seitlich an der Schulter.",neg:"Innenrotation schmerzfrei.",
lr:["2,68","0,25"],kw:"Leitlinie JOSPT 2025: Sensitivität 83 %, Spezifität 69 %, LR+ 2,68, LR− 0,25, eher zum Ausschließen, wenn negativ. Ältere Metaanalyse: Sensitivität 80 %, Spezifität 56 % (Hegedus 2012). Hawkins, Painful Arc und Infraspinatus-Test alle positiv: 95 % Wahrscheinlichkeit (Park 2005).",
f:["Reliabilität nur mäßig (Kappa 0,4).","Schmerz hinten an der Schulter zählt nicht."],r:"",c:imp,kb:["SH01"],
leg:[["Arm 90° Flexion","Ellenbogen 90°"],["Hand am Ellenbogen","stützt"],["Innenrotation","Unterarm nach unten"]],
dk:["Hawkins-Kennedy {s} positiv.","Hawkins-Kennedy {s} negativ."],q:H+" Park HB et al. J Bone Joint Surg Am 2005;87:1446. Desmeules F et al. JOSPT 2025;55(4):235–274."});
X("neer",{u:"Schulter · subakromial · Provokationstest",ev:"Belegstärke schwach · JOSPT 2025",
k:"Das Schulterblatt wird fixiert, der gestreckte, innenrotierte Arm passiv ganz nach oben geführt. Schmerz am Ende spricht für eine subakromiale Reizung. Allein wenig aussagekräftig, im Cluster deuten.",
p:[["Struktur","Supraspinatussehne, Bursa subacromialis"],["Bewegung","Passive Elevation mit Innenrotation"],["Frage","Gibt es eine subakromiale Schmerzquelle?"],["Wann einsetzen","Zusammen mit Hawkins und Painful Arc"]],
d:[["Position","Sitz, Therapeut hinter dem Patienten."],["Fixieren","Eine Hand drückt das Schulterblatt von oben nach unten."],["Elevation","Andere Hand führt den gestreckten Arm, Daumen nach unten, nach vorn-oben bis zum Ende."],["Fragen","Bekannter Schmerz?"]],
pos:"Bekannter Schulterschmerz bei endgradiger Elevation.",neg:"Schmerzfrei.",
lr:["1,48","0,68"],kw:"Leitlinie JOSPT 2025: LR+ 1,48, LR− 0,68, allein wenig Nutzen, nur im Cluster deuten. Ältere Metaanalyse: Sensitivität 72 %, Spezifität 60 % (Hegedus 2012).",
f:["Schulterblatt nicht fixiert: weicht aus, falsch negativ.","Steife Schulter (Frozen Shoulder) schmerzt hier immer."],r:"",c:imp,kb:["SH01"],
leg:[["Schulterblatt fixiert","Hand von oben"],["Gestreckter Arm","Daumen nach unten"],["Passiv nach oben","bis zum Ende"]],
dk:["Neer-Test {s} positiv.","Neer-Test {s} negativ."],q:H+" "+MI+" Desmeules F et al. JOSPT 2025;55(4):235–274."});
X("jobe",{u:"Schulter · Supraspinatus · Krafttest",ev:"Belegstärke mäßig · Michener 2009",
k:"Beide Arme in 90° Abduktion in der Skapulaebene, Daumen nach unten. Der Therapeut drückt nach unten. Schwäche im Seitenvergleich zählt mehr als Schmerz.",
p:[["Struktur","M. supraspinatus"],["Bewegung","Abduktion in Skapulaebene gegen Widerstand"],["Frage","Ist der Supraspinatus geschwächt oder gerissen?"],["Wann einsetzen","Kraftverlust beim Armheben"]],
d:[["Position","Stand, beide Arme 90° gehoben, 30° nach vorn (Skapulaebene)."],["Daumen","Daumen zeigen nach unten (Empty Can) oder oben (Full Can)."],["Widerstand","Therapeut drückt beide Unterarme gleichzeitig nach unten."],["Vergleichen","Kraft und Schmerz beider Seiten."]],
pos:"Schwäche im Seitenvergleich, mit oder ohne Schmerz.",neg:"Seitengleich kräftig.",
lr:["3,9",null],kw:"Subakromial LR+ 3,9 (Michener 2009). Supraspinatusruptur mit Kriterium Schwäche LR+ 2,1, LR− 0,31 (Lasbleiz 2014). Full Can ist gleich genau und oft weniger schmerzhaft.",
f:["Schmerz allein ist wenig spezifisch.","Schmerzhemmung kann Schwäche vortäuschen."],r:"",c:rm,kb:["SH02","SH01"],
leg:[["Arme in Skapulaebene","90° gehoben"],["Daumen nach unten","Empty Can"],["Druck nach unten","beidseits"]],
dk:["Jobe-Test {s} positiv: Schwäche bei Abduktion gegen Widerstand.","Jobe-Test {s} negativ, Kraft seitengleich."],q:MI+" Itoi E et al. Am J Sports Med 1999;27:65."});
X("infraspinatus",{u:"Schulter · Außenrotatoren · Krafttest",ev:"Belegstärke mäßig · Hermans 2013",
k:"Ellenbogen am Körper 90° gebeugt, der Patient drückt nach außen gegen Widerstand. Schmerz oder Schwäche sprechen für ein Problem der Rotatorenmanschette. Einer der aussagekräftigsten Schultertests.",
p:[["Struktur","M. infraspinatus, M. teres minor"],["Bewegung","Isometrische Außenrotation"],["Frage","Ist die Rotatorenmanschette betroffen?"],["Wann einsetzen","Jeder Verdacht auf RM-Läsion oder subakromialen Schmerz"]],
d:[["Position","Stand oder Sitz, Ellenbogen am Körper, 90° gebeugt, Unterarm nach vorn."],["Fixieren","Eine Hand hält den Ellenbogen am Körper."],["Widerstand","Andere Hand außen am Unterarm."],["Drücken","Patient drückt nach außen, Seitenvergleich."]],
pos:"Schmerz oder Schwäche bei Außenrotation.",neg:"Kräftig und schmerzfrei.",
lr:["4,39","0,5"],kw:"Subakromial LR+ 4,4 (Michener 2009). Painful Arc, Drop Arm und Infraspinatus-Test alle positiv: 91 % Wahrscheinlichkeit für eine komplette Ruptur (Park 2005).",
f:["Ellenbogen weicht vom Körper ab: andere Muskeln helfen mit."],r:"",c:["painfularc","droparm","erlag"],kb:["SH02","SH01"],
leg:[["Ellenbogen am Körper","90° gebeugt"],["Widerstand außen","am Unterarm"],["Drücken nach außen","isometrisch"]],
dk:["Außenrotation gegen Widerstand {s} schmerzhaft und abgeschwächt.","Außenrotation gegen Widerstand {s} kräftig und schmerzfrei."],q:MI+" "+HE});
X("droparm",{u:"Schulter · Rotatorenmanschette · Halteversuch",ev:"Belegstärke mäßig · Hermans 2013",
k:"Der Arm wird passiv auf 90° Abduktion gebracht, der Patient soll ihn langsam absenken. Fällt er ab, spricht das für eine große Ruptur. Negativ schließt wenig aus.",
p:[["Struktur","M. supraspinatus, M. infraspinatus"],["Bewegung","Exzentrisches Absenken aus Abduktion"],["Frage","Gibt es eine größere Rotatorenmanschettenruptur?"],["Wann einsetzen","Kraftverlust, Pseudoparalyse, nach Sturz"]],
d:[["Position","Stand oder Sitz."],["Heben","Therapeut hebt den gestreckten Arm seitlich auf 90°."],["Loslassen","Patient hält und senkt den Arm langsam ab."],["Beobachten","Fällt der Arm ab oder ruckelt?"]],
pos:"Arm fällt ab oder kann nicht kontrolliert abgesenkt werden.",neg:"Kontrolliertes Absenken.",
lr:["3,3",null],kw:"Spezifität 83–93 %, Sensitivität 24–41 % (Hegedus 2012). Positiv spricht dafür, negativ schließt nichts aus.",
f:["Starker Schmerz kann den Test unmöglich machen."],r:"Akute Pseudoparalyse nach Trauma → zügig ärztlich.",c:rm,kb:["SH02"],
leg:[["Arm seitlich 90°","passiv gebracht"],["Hand gelöst","Therapeut sichert"],["Langsam absenken","fällt er ab?"]],
dk:["Drop-Arm-Test {s} positiv.","Drop-Arm-Test {s} negativ."],q:HE+" "+H});
X("erlag",{u:"Schulter · Rotatorenmanschette · Lag-Sign",ev:"Belegstärke stark · Hermans 2013",
k:"Der Arm wird passiv maximal außenrotiert, der Patient soll die Stellung halten. Dreht der Unterarm zurück, spricht das sehr spezifisch für eine komplette Ruptur von Supra- und Infraspinatus.",
p:[["Struktur","M. supraspinatus, M. infraspinatus"],["Bewegung","Halten der maximalen Außenrotation"],["Frage","Liegt eine komplette Ruptur vor?"],["Wann einsetzen","Schwäche bei Außenrotation, ältere Patienten"]],
d:[["Position","Sitz, Ellenbogen 90° gebeugt, Arm leicht abduziert."],["Führen","Therapeut dreht den Unterarm passiv in maximale Außenrotation, minus 5°."],["Loslassen","Handgelenk loslassen, Ellenbogen weiter stützen."],["Beobachten","Kann der Patient die Stellung halten?"]],
pos:"Unterarm dreht zurück nach innen (Lag).",neg:"Stellung wird gehalten.",
lr:["7,2","0,57"],kw:"Spezifität 94–98 %, Sensitivität 46–56 % (Castoldi 2009, Miller 2008). Das Lag wird mit der Rupturgröße größer.",
f:["Steife Schulter: passive Außenrotation fehlt, nicht auswertbar."],r:"",c:rm,kb:["SH02"],
leg:[["Ellenbogen 90°","gestützt"],["Maximale Außenrotation","passiv"],["Loslassen","Halten oder Zurückfallen"]],
dk:["Außenrotations-Lag-Sign {s} positiv.","Außenrotations-Lag-Sign {s} negativ."],q:HE+" Castoldi F et al. 2009. Miller CA et al. 2008."});
X("liftoff",{u:"Schulter · Subscapularis · Krafttest",ev:"Belegstärke stark · Lasbleiz 2014",
k:"Der Handrücken liegt hinten am unteren Rücken, der Patient hebt die Hand nach hinten ab. Gelingt das nicht, ist der Subscapularis wahrscheinlich gerissen. Sehr spezifisch.",
p:[["Struktur","M. subscapularis"],["Bewegung","Innenrotation hinter dem Rücken"],["Frage","Ist der Subscapularis gerissen?"],["Wann einsetzen","Schwäche bei Innenrotation, nach Luxation"]],
d:[["Position","Stand, Handrücken auf Höhe der LWS."],["Abheben","Hand aktiv nach hinten vom Rücken weg."],["Lag-Variante","Therapeut hebt die Hand ab und lässt los: fällt sie zurück?"]],
pos:"Hand kann nicht abgehoben oder gehalten werden.",neg:"Hand hebt deutlich ab.",
lr:["8,5","0,27"],kw:"Spezifität 98–100 %, Sensitivität 18–35 %. Positiv erst ab etwa 75 % Rupturgröße (Barth 2006).",
f:["Eingeschränkte Innenrotation: Hand erreicht den Rücken nicht, dann Belly-Press nehmen.","Abheben über Extension des Ellenbogens zählt nicht."],r:"",c:sub,kb:["SH02","SH05"],
leg:[["Handrücken am unteren Rücken","Höhe LWS"],["Abheben nach hinten","aktiv"]],
dk:["Lift-off-Test {s} positiv.","Lift-off-Test {s} negativ."],q:"Lasbleiz S et al. 2014. Barth JR et al. Arthroscopy 2006;22:1076. "+HE});
X("belly",{u:"Schulter · Subscapularis · Krafttest",ev:"Belegstärke mäßig · Barth 2006",
k:"Die flache Hand drückt auf den Bauch, der Ellenbogen bleibt vorn. Kippt das Handgelenk oder fällt der Ellenbogen nach hinten, spricht das für eine Subscapularisläsion.",
p:[["Struktur","M. subscapularis, oberer Anteil"],["Bewegung","Innenrotation vor dem Körper"],["Frage","Ist der Subscapularis geschädigt?"],["Wann einsetzen","Wenn die Hand den Rücken nicht erreicht"]],
d:[["Position","Stand, flache Hand auf dem Bauch."],["Drücken","Hand fest auf den Bauch drücken."],["Halten","Handgelenk gerade, Ellenbogen vor der Körperlinie."],["Beobachten","Kippt das Handgelenk, sinkt der Ellenbogen nach hinten?"]],
pos:"Handgelenk beugt sich oder Ellenbogen fällt nach hinten.",neg:"Druck mit geradem Handgelenk möglich.",
lr:[null,null],kw:"Spezifität 92–98 %, Sensitivität 34–40 %. Positiv ab etwa 30 % Rupturgröße (Barth 2006).",
f:["Druck über Handgelenkbeugung statt Innenrotation täuscht Kraft vor."],r:"",c:sub,kb:["SH02"],
leg:[["Flache Hand auf dem Bauch","Handgelenk gerade"],["Ellenbogen vorn","vor der Körperlinie"]],
dk:["Belly-Press {s} positiv.","Belly-Press {s} negativ."],q:"Barth JR et al. Arthroscopy 2006;22:1076. Kappe T et al. 2018."});
X("bearhug",{u:"Schulter · Subscapularis · Krafttest",ev:"Belegstärke mäßig · Barth 2006",
k:"Die Hand liegt auf der Gegenschulter, der Therapeut versucht sie nach vorn abzuziehen. Der empfindlichste Subscapularistest, positiv schon bei kleineren Rissen.",
p:[["Struktur","M. subscapularis, oberer Sehnenanteil"],["Bewegung","Isometrische Innenrotation"],["Frage","Gibt es einen Subscapularisriss?"],["Wann einsetzen","Vorderer Schulterschmerz, Schwäche bei Innenrotation"]],
d:[["Position","Hand flach auf der Gegenschulter, Ellenbogen vor dem Körper angehoben."],["Halten","Patient drückt die Hand auf die Schulter."],["Zug","Therapeut zieht am Unterarm senkrecht nach vorn."],["Vergleichen","Seitenvergleich."]],
pos:"Hand lässt sich abheben oder deutlich schwächer.",neg:"Hand bleibt liegen.",
lr:[null,null],kw:"Sensitivität 52–60 %, Spezifität 85–92 % (Barth 2006, Kappe 2018).",
f:["Zugrichtung nicht senkrecht zum Unterarm: andere Muskeln helfen."],r:"",c:sub,kb:["SH02"],
leg:[["Hand auf der Gegenschulter","Ellenbogen vorn"],["Zug nach vorn","am Unterarm"]],
dk:["Bear-Hug-Test {s} positiv.","Bear-Hug-Test {s} negativ."],q:"Barth JR et al. Arthroscopy 2006;22:1076."});
X("crossbody",{u:"Schulter · AC-Gelenk · Kompressionstest",ev:"Belegstärke mäßig · Chronopoulos 2004",
k:"Der Arm wird in 90° Flexion quer vor dem Körper zur Gegenseite geführt. Schmerz oben auf der Schulter am AC-Gelenk ist positiv. Der empfindlichste AC-Test.",
p:[["Struktur","Art. acromioclavicularis"],["Bewegung","Horizontale Adduktion"],["Frage","Ist das AC-Gelenk die Schmerzquelle?"],["Wann einsetzen","Schmerz oben auf der Schulter, Kraftsportler"]],
d:[["Position","Sitz, Arm 90° nach vorn gehoben."],["Führen","Arm quer vor dem Körper zur Gegenseite führen."],["Fragen","Schmerz oben am AC-Gelenk?"]],
pos:"Lokaler Schmerz über dem AC-Gelenk.",neg:"Kein Schmerz am AC-Gelenk.",
lr:["3,67","0,29"],kw:"Sensitivität 77 % (Chronopoulos 2004). Zusammen mit O'Brien aussagekräftiger.",
f:["Ziehen hinten an der Schulter ist Kapseldehnung, nicht AC."],r:"",c:["obrien","painfularc"],kb:["SH07"],
leg:[["Arm 90° Flexion","im Sitz"],["Quer zur Gegenseite","horizontale Adduktion"]],
dk:["Cross-Body-Test {s} positiv: Schmerz am AC-Gelenk.","Cross-Body-Test {s} negativ."],q:"Chronopoulos E et al. Am J Sports Med 2004;32:655."});
X("obrien",{u:"Schulter · AC-Gelenk · Kompressionstest",ev:"Belegstärke mäßig · Chronopoulos 2004",
k:"Gestreckter Arm vorn, Daumen nach unten, Druck nach unten. Schmerz oben auf der Schulter, der mit Daumen nach oben nachlässt, spricht für das AC-Gelenk. Für SLAP-Läsionen nicht brauchbar.",
p:[["Struktur","AC-Gelenk, Labrum superius"],["Bewegung","Flexion 90°, Adduktion 10°, Innenrotation gegen Widerstand"],["Frage","AC-Gelenk betroffen?"],["Wann einsetzen","Nach Cross-Body, zur Bestätigung"]],
d:[["Position","Arm gestreckt, 90° Flexion, 10° zur Mitte."],["Daumen nach unten","Maximale Innenrotation."],["Druck","Therapeut drückt den Unterarm nach unten, Patient hält."],["Wiederholen","Mit Daumen nach oben: wird der Schmerz weniger?"]],
pos:"Schmerz oben am AC-Gelenk mit Daumen unten, weniger mit Daumen oben.",neg:"Kein oder gleicher Schmerz.",
lr:[null,null],kw:"AC-Gelenk: Spezifität 95 %, Sensitivität 41 % (Chronopoulos 2004). SLAP: LR+ 1,06, ohne Aussage (Hegedus 2012).",
f:["Tiefer Schmerz in der Schulter wird oft als SLAP gedeutet, ist aber unspezifisch."],r:"",c:["crossbody"],kb:["SH07","SH09"],
leg:[["Gestreckter Arm vorn","Daumen nach unten"],["Druck von oben","Patient hält dagegen"]],
dk:["O'Brien-Test {s} positiv: Schmerz am AC-Gelenk.","O'Brien-Test {s} negativ."],q:"Chronopoulos E et al. 2004. "+H});
X("apprehension",{u:"Schulter · vordere Instabilität · Provokationstest",ev:"Belegstärke stark · Hegedus 2012",
k:"In Rückenlage wird der Arm in 90° Abduktion zunehmend außenrotiert. Spürt der Patient Angst, dass die Schulter herausspringt, ist der Test positiv. Schmerz allein reicht nicht.",
p:[["Struktur","Vordere Kapsel, Labrum, Lig. glenohumerale inferius"],["Bewegung","Abduktion 90° plus Außenrotation"],["Frage","Ist die Schulter vorn instabil?"],["Wann einsetzen","Nach Luxation, Unsicherheitsgefühl bei Wurf"]],
d:[["Lagerung","Rückenlage, Schulter am Liegenrand."],["Position","Arm 90° abduziert, Ellenbogen 90°."],["Außenrotation","Unterarm langsam Richtung Kopf drehen."],["Fragen","Gefühl, dass die Schulter rausspringt?"]],
pos:"Angst oder Abwehrspannung (Apprehension).",neg:"Volle Außenrotation ohne Angst.",
lr:["17,2","0,39"],kw:"Sensitivität 66 %, Spezifität 95 % (Hegedus 2012). Mit positivem Relocation LR+ 40.",
f:["Nur Schmerz ohne Angst ist kein positiver Test.","Langsam vorgehen, keine Luxation provozieren."],r:"Taubheit außen am Oberarm nach Luxation → N. axillaris, ärztlich.",c:inst,kb:["SH05"],
leg:[["Rückenlage","Schulter am Liegenrand"],["Arm 90/90","abduziert, Ellenbogen gebeugt"],["Außenrotation","langsam steigern"]],
dk:["Apprehension-Test {s} positiv.","Apprehension-Test {s} negativ."],q:H});
X("relocation",{u:"Schulter · vordere Instabilität · Entlastungstest",ev:"Belegstärke stark · Hegedus 2012",
k:"Direkt nach positivem Apprehension drückt der Therapeut den Humeruskopf von vorn nach hinten. Verschwindet die Angst, bestätigt das die vordere Instabilität.",
p:[["Struktur","Vordere Kapsel, Labrum"],["Prinzip","Humeruskopf wird zentriert, Angst lässt nach"],["Frage","Bestätigt sich die vordere Instabilität?"],["Wann einsetzen","Nach positivem Apprehension-Test"]],
d:[["Ausgangslage","Wie Apprehension: Rückenlage, Arm 90/90 in Außenrotation."],["Druck","Flache Hand drückt vorn auf den Humeruskopf nach dorsal."],["Weiter","Außenrotation unter Druck vorsichtig steigern."],["Fragen","Ist die Angst weg?"]],
pos:"Angst nimmt unter dem Druck deutlich ab.",neg:"Angst bleibt gleich.",
lr:["5,48","0,55"],kw:"Sensitivität 65 %, Spezifität 90 % (Hegedus 2012).",
f:["Nur auswertbar, wenn Apprehension vorher positiv war."],r:"",c:inst,kb:["SH05"],
leg:[["Arm 90/90","außenrotiert"],["Druck vorn auf die Schulter","nach dorsal"]],
dk:["Relocation-Test {s} positiv.","Relocation-Test {s} negativ."],q:H});
X("surprise",{u:"Schulter · vordere Instabilität · Entlastungstest",ev:"Belegstärke mäßig · Hegedus 2012",
k:"Im Anschluss an Relocation wird die Hand plötzlich von der Schulter genommen. Kommt die Angst schlagartig zurück, ist der Test positiv.",
p:[["Struktur","Vordere Kapsel, Labrum"],["Prinzip","Plötzlicher Wegfall der Stabilisierung"],["Frage","Bestätigt sich die vordere Instabilität?"],["Wann einsetzen","Als letzter Schritt nach Relocation"]],
d:[["Ausgangslage","Relocation-Position mit Druck auf den Humeruskopf."],["Loslassen","Hand plötzlich abheben."],["Beobachten","Angst, Zucken, Abwehrspannung?"]],
pos:"Angst oder Schmerz kehrt schlagartig zurück.",neg:"Keine Reaktion.",
lr:["5,42","0,25"],kw:"Sensitivität 82 %, Spezifität 86 %, aus zwei kleinen Studien (Hegedus 2012).",
f:["Kann eine Luxation auslösen, nur bei gutem Vertrauen und Ruhe testen."],r:"",c:inst,kb:["SH05"],
leg:[["Arm 90/90","außenrotiert"],["Hand abgehoben","plötzlich"]],
dk:["Surprise-Test {s} positiv.","Surprise-Test {s} negativ."],q:H});
X("speed",{u:"Schulter · lange Bizepssehne · Provokationstest",ev:"Belegstärke schwach · Hegedus 2012",
k:"Gestreckter Arm vorn, Handfläche oben, Druck nach unten. Schmerz vorn im Sulcus spricht für die lange Bizepssehne. Für SLAP-Läsionen nutzlos.",
p:[["Struktur","Caput longum M. biceps brachii"],["Bewegung","Flexion gegen Widerstand mit Supination"],["Frage","Ist die lange Bizepssehne gereizt?"],["Wann einsetzen","Vorderer Schulterschmerz"]],
d:[["Position","Arm gestreckt 90° nach vorn, Handfläche nach oben."],["Tasten","Finger auf dem Sulcus intertubercularis."],["Widerstand","Druck von oben auf den Unterarm, Patient hält."],["Fragen","Schmerz vorn an der Schulter?"]],
pos:"Schmerz im Sulcus intertubercularis.",neg:"Kein Schmerz vorn.",
lr:["2,8",null],kw:"Tendinopathie: Spezifität 81–85 %, Sensitivität 54–71 % (Einzelstudien). Zusammen mit Upper-Cut am besten (Kibler 2009).",
f:["SLAP-Läsionen erfasst der Test nicht (LR+ 0,9)."],r:"",c:["uppercut"],kb:["SH09"],
leg:[["Gestreckter Arm vorn","Handfläche oben"],["Finger am Sulcus","vorn an der Schulter"],["Druck nach unten","Patient hält"]],
dk:["Speed-Test {s} positiv.","Speed-Test {s} negativ."],q:"Kibler WB et al. Am J Sports Med 2009;37:1840. "+H});
X("uppercut",{u:"Schulter · lange Bizepssehne · Provokationstest",ev:"Belegstärke mäßig · Kibler 2009",
k:"Der Patient macht gegen die Hand des Therapeuten einen Aufwärtshaken. Schmerz oder Schnappen vorn an der Schulter spricht für eine Bizepsläsion.",
p:[["Struktur","Lange Bizepssehne, Pulley"],["Bewegung","Flexion und Supination aus Neutralstellung"],["Frage","Gibt es eine Bizepssehnenläsion?"],["Wann einsetzen","Vorderer Schulterschmerz, Überkopfsportler"]],
d:[["Position","Ellenbogen 90° am Körper, Faust, Handfläche nach oben."],["Widerstand","Therapeut legt die Hand auf die Faust."],["Bewegung","Patient schlägt kräftig nach oben Richtung Kinn."],["Fragen","Schmerz oder Schnappen vorn?"]],
pos:"Schmerz oder schmerzhaftes Schnappen vorn an der Schulter.",neg:"Schmerzfrei.",
lr:["3,38",null],kw:"Sensitivität 73 %, Spezifität 78 % (Kibler 2009, Einzelstudie).",f:["Einzelstudie, Werte mit Vorsicht."],r:"",c:["speed"],kb:["SH09"],
leg:[["Ellenbogen 90°","Faust, Handfläche oben"],["Hand auf der Faust","Widerstand"],["Aufwärtshaken","Richtung Kinn"]],
dk:["Upper-Cut-Test {s} positiv.","Upper-Cut-Test {s} negativ."],q:"Kibler WB et al. Am J Sports Med 2009;37:1840."});
})();

/* Wissen: Testkapitel. Ergänzt wi_ui.js um einen zweiten Bereich "Tests" (Daten: Vb.tests + WI_TK, Bilder WI_TBILD, Punkte WI_TPIN). */
var WI_TBILD=window.WI_TBILD||{},WI_TPIN=window.WI_TPIN||{};
var WI_FRAGEBOGEN=["abc","sis","mrs","moca","pdq","fog","msws","mfis","msis","pfs"];
function WI_tn(id){return Vb.tests[id]?.name||id}
function WI_tGebiete(){let g=[],drin=new Set();for(let x of Vb.gebiete){let t=x.tests.filter((i)=>Vb.tests[i]&&!drin.has(i));t.forEach((i)=>drin.add(i));if(t.length)g.push(x.name.includes(",")?{n:x.name.split(",")[0],u:x.name.split(",").slice(1).join(",").trim(),t}:{n:"Neurologie",u:x.name,t})}let rest=Object.keys(Vb.tests).filter((i)=>!drin.has(i));if(rest.length)g.push({n:"Weitere",u:"",t:rest});return g.filter((x)=>x.n!=="Neurologie").concat(g.filter((x)=>x.n==="Neurologie"))}
function WI_tRegionen(){let r=[];for(let g of WI_tGebiete())if(!r.includes(g.n))r.push(g.n);return r}
function WI_tTreffer(q,reg){let w=WI_norm(q).trim().split(/\s+/).filter(Boolean),out=[];for(let g of WI_tGebiete()){if(reg&&g.n!==reg)continue;for(let id of g.t){let x=Vb.tests[id],k=WI_TK[id]||{},h=WI_norm([x.name,x.was,x.ziel,k.u,k.k,g.n,g.u].join(" "));if(w.every((v)=>h.includes(v)))out.push({id,g})}}return out}
function WI_tBild(id,kl){let b=WI_TBILD[id];return b?`<img src="${b}" alt="" loading="lazy" class="${kl||""}">`:`<div class="wi-ph ${kl||""}"><span>${WI_FRAGEBOGEN.includes(id)?"Fragebogen":"Bild folgt"}</span></div>`}
function WI_tListe(){let T=WI_tTreffer(WI_st.q,WI_st.treg),seen=new Set(),gr=[];for(let x of T){if(seen.has(x.id))continue;seen.add(x.id);let key=x.g.n+(x.g.u?" · "+x.g.u:""),z=gr.find((a)=>a.k===key);z?z.t.push(x.id):gr.push({k:key,t:[x.id]})}
return gr.length?gr.map((z)=>`<h2 class="wi-tgr">${WI_esc(z.k)}</h2><div class="wi-treffer">${z.t.map((id)=>{let x=Vb.tests[id],k=WI_TK[id]||{};return `<button class="wi-tr" data-tid="${id}">${WI_tBild(id,"wi-tr-b")}<span class="wi-tr-t"><b>${WI_esc(x.name)}</b><small>${WI_esc(k.u||x.was)}</small><span>${WI_esc(k.k||x.kurz)}</span></span></button>`}).join("")}</div>`).join(""):`<p class="wi-leer">Kein Test gefunden.</p>`}
function WI_umsch(){return `<div class="wk-seg"><button data-a="wk-kb">Krankheitsbilder</button><button data-modus="tests" class="an">Tests</button><button data-a="wk-vo">Verordnung<span class="wk-lang"> &amp; Abrechnung</span></button></div>`}
function WI_tSeite(){let n=Object.keys(Vb.tests).length;return `<div class="wi-seite"><button class="wi-zur" data-a="zu">‹ Mehr</button><h1>Wissen</h1><p class="wi-unter">${n} Tests · Durchführung, Auswertung, Aussagekraft</p>${WI_umsch()}
<label class="wi-such"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="search" placeholder="Test, Struktur oder Verdacht suchen" value="${WI_esc(WI_st.q)}" data-a="tq" autocomplete="off" enterkeyhint="search"></label>
<div class="wi-ber"><button data-treg="" class="${WI_st.treg?"":"an"}">Alle</button>${WI_tRegionen().map((r)=>`<button data-treg="${WI_esc(r)}" class="${WI_st.treg===r?"an":""}">${WI_esc(r)}</button>`).join("")}</div>${WI_tHinweis()}<div class="wi-tbox">${WI_tListe()}</div></div>`}
function WI_tHinweis(){if(!WI_st.treg)return"";let c=Vb.cluster.find((x)=>x.id.startsWith("o_")&&x.name.startsWith(WI_st.treg))||(WI_st.treg==="Neurologie"?{hinweis:Vb.reihenfolgeHinweis}:null);return c?.hinweis?`<div class="wi-ziel wi-reih"><b>Reihenfolge:</b> ${WI_esc(c.hinweis)}</div>`:""}
function WI_tPins(id,k){let p=WI_TPIN[id];if(!p||!WI_TBILD[id])return"";return p.map(([x,y,pf],i)=>`${pf?`<svg class="wi-pf" style="left:${x}%;top:${y}%;transform:translate(-50%,-50%) rotate(${pf}deg)" viewBox="0 0 40 60"><path d="M20 56V10M8 22 20 8l12 14" fill="none" stroke="#C9E86B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`:`<span class="wi-pin" style="left:${x}%;top:${y}%">${i+1}</span>`}`).join("")}
function WI_tKapitel(id){let x=Vb.tests[id];if(!x)return WI_tSeite();let k=WI_tAuto(id),fb=WI_FRAGEBOGEN.includes(id)||/Fragebogen|Skala|Index|Score|Questionnaire/i.test(x.name+x.einheit)&&!WI_TBILD[id];
let leg=(k.leg||[]).map(([a,b],i)=>`<div><span class="wi-nr">${i+1}</span><span><b>${WI_esc(a)}</b>${b?`<i>${WI_esc(b)}</i>`:""}</span></div>`).join("");
let pins=WI_TPIN[id]||[],pnr=0,pinHtml=WI_TBILD[id]?pins.map(([px,py,pf])=>pf!=null?`<svg class="wi-pf" style="left:${px}%;top:${py}%;transform:translate(-50%,-50%) rotate(${pf}deg)" viewBox="0 0 40 60"><path d="M20 56V10M8 22 20 8l12 14" fill="none" stroke="#C9E86B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`:`<span class="wi-pin" style="left:${px}%;top:${py}%">${++pnr}</span>`).join(""):"";
let schritte=k.d?`<ol class="wi-ds">${k.d.map(([a,b])=>a?`<li><span class="wi-ds-z"><b>${WI_esc(a)}</b><span class="wi-ds-p" aria-hidden="true">→</span><span class="wi-ds-t">${WI_esc(b)}</span></span></li>`:`<li><span class="wi-ds-z"><span class="wi-ds-t wi-ds-voll">${WI_esc(b)}</span></span></li>`).join("")}</ol>`:`<p>${WI_esc(x.durch)}</p>`;
let ausw=k.pos&&!k.neg?`<p>${WI_esc(k.pos)}</p><p class="wi-fein">Ergebnis: ${WI_esc(x.einheit)}</p>`:k.pos?`<div class="wi-zwei"><div class="wi-erg pos"><b>${fb?"Auffällig":"Positiv"}</b><p>${WI_esc(k.pos)}</p></div><div class="wi-erg neg"><b>${fb?"Unauffällig":"Negativ"}</b><p>${WI_esc(k.neg)}</p></div></div>`:(x.norm||[]).map((n)=>`<p>${WI_esc(n)}</p>`).join("");
let lr="";if(k.lr&&(k.lr[0]||k.lr[1])){let[a,b]=k.lr,pos=(v,d)=>{let n=parseFloat(String(v).replace(",","."));if(!n)return d;let l=Math.log10(n);return Math.max(3,Math.min(97,50+l*30))};lr=`<div class="wi-lr">${a?`<div><div class="z">${WI_esc(a)}<small>LR+</small></div><div class="t">${parseFloat(a.replace(",","."))>=10?"Positiv spricht stark für den Befund.":parseFloat(a.replace(",","."))>=5?"Positiv spricht deutlich dafür.":"Positiv spricht nur mäßig dafür."}</div></div>`:""}${b?`<div><div class="z">${WI_esc(b)}<small>LR−</small></div><div class="t">${parseFloat(b.replace(",","."))<=0.1?"Negativ schließt den Befund weitgehend aus.":parseFloat(b.replace(",","."))<=0.3?"Negativ macht den Befund deutlich unwahrscheinlicher.":"Negativ schließt wenig aus."}</div></div>`:""}</div><div class="wi-skala"><div class="bahn">${a?`<span class="m" style="left:${pos(a,80)}%"></span>`:""}${b?`<span class="m" style="left:${pos(b,20)}%"></span>`:""}</div><div class="lbl"><span>schließt eher aus</span><span>ohne Aussage</span><span>bestätigt eher</span></div></div>`}
let kw=k.kw&&k.kw!==k.pos?`<p class="wi-fein">${WI_esc(k.kw)}</p>`:"";
let cl=(k.c||[]).filter((c)=>Vb.tests[c]),kb=(k.kb||[]).filter((i)=>Fb.some((e)=>e.id===i));
let clHtml=cl.length||kb.length?`<section class="wi-karte"><h2>Im Cluster mit</h2>${cl.length?`<div class="wi-cl">${cl.map((c)=>{let lp=WI_tAuto(c).lr?.[0];return `<button data-tid="${c}"><b>${WI_esc(WI_tn(c))}</b><small>${lp?"LR+ "+WI_esc(lp):WI_esc(WI_TK[c]?.u?.split(" · ").pop()||Vb.tests[c].was||"")}</small></button>`}).join("")}</div>`:""}${kb.map((i)=>{let e=Fb.find((f)=>f.id===i);return `<button class="wi-link" data-kbid="${i}">${WI_bildHtml(i,"wi-mini")}<span><b>${WI_esc(e.titel)}</b><small>Krankheitsbild · ${WI_esc(e.bereich)}</small></span><span class="wi-pfr">›</span></button>`}).join("")}</section>`:"";
let doku=k.dk0?`<section class="wi-karte"><h2>Für die Doku</h2><div class="wi-doku">${WI_esc(k.dk0.replace(" {s}",""))}</div></section>`:k.dk?`<section class="wi-karte"><h2>Für die Doku</h2><div class="wi-seg klein" data-dk><button class="an" data-dke="0">${fb?"Auffällig":"Positiv"}</button><button data-dke="1">${fb?"Unauffällig":"Negativ"}</button></div><div class="wi-seg klein" data-ds><button class="an" data-dse="re.">rechts</button><button data-dse="li.">links</button><button data-dse="bds.">beidseits</button></div><div class="wi-doku" id="wi-doku">${WI_esc(WI_tDoku(id))}</div><button class="wi-knopf" data-a="tkopier">Text kopieren</button></section>`:"";
return `<div class="wi-seite"><button class="wi-zur" data-a="tliste">‹ Tests</button><h1>${WI_esc(x.name)}</h1><p class="wi-unter">${WI_esc(k.u||x.was)}</p>
<div class="wi-chips">${k.ev?`<span class="wi-chip ev">${WI_esc(k.ev)}</span>`:""}<span class="wi-chip">Ergebnis: ${WI_esc(x.einheit)}</span><span class="wi-chip w">Entwurf, fachlich prüfen</span></div>
<div class="wi-raster"><div class="wi-plakat"><div class="wi-plbox">${WI_tBild(id,"wi-pl-b")}${pinHtml}</div>${leg?`<div class="wi-leg"><h3 class="wi-legh">Darauf achten</h3>${leg}</div>`:""}</div><div>
<section class="wi-karte"><h2>Auf einen Blick</h2><p class="wi-kurz">${WI_esc(k.k||x.kurz)}</p></section>
${k.p?`<section class="wi-karte"><h2>Was der Test prüft</h2><div class="wi-str">${k.p.map(([a,b])=>`<div>${WI_esc(a)}</div><div>${WI_esc(b)}</div>`).join("")}</div></section>`:`<section class="wi-karte"><h2>Ziel</h2><p>${WI_esc(x.ziel)}</p></section>`}
<section class="wi-karte"><h2>Durchführung</h2>${schritte}</section>
<section class="wi-karte"><h2>Auswertung</h2>${ausw}</section>
${lr||kw?`<section class="wi-karte"><h2>Aussagekraft</h2>${lr}${kw}</section>`:""}
${k.f?.length?`<section class="wi-karte"><h2>Fehlerquellen</h2><ul>${k.f.map((t)=>`<li>${WI_esc(t)}</li>`).join("")}</ul>${k.r?`<div class="wi-rot"><b>Abklären:</b> ${WI_esc(k.r)}</div>`:""}</section>`:""}
${clHtml}${doku}
<section class="wi-karte wi-q">Quellen: ${WI_esc(k.q||(x.quellen||[]).map((s)=>s.split(" – ")[0]).join(", ")||"noch prüfen")}. Entwurf, fachlich prüfen.</section></div></div></div>`}
WI_st.dke=0;WI_st.dse="re.";
function WI_tDoku(id){let k=WI_tAuto(id);if(!k?.dk)return"";return k.dk[WI_st.dke||0].replace("{s}",WI_st.dse||"re.").replace(/\s+/g," ")}
/* Automatische Kapitel aus der Testdatenbank, wenn (noch) kein Handtext existiert */
var WI_GKB={g_kiefer_bewegung:["KI01"],g_kiefer_schmerz:["KI01"],g_hws_myelopathie:["WS05"],g_hws_obere:["WS05","WS07"],g_hws_radikulopathie:["WS06"],g_bws_fraktur:["WS08"],g_bws_neural_rippe:["WS05"],g_lws_radikulaer:["WS02"],g_lws_isg:["WS01"],g_lws_instabilitaet:["WS04","WS01"],g_schulter_subakromial:["SH01"],g_schulter_rm:["SH02"],g_schulter_ac:["SH07"],g_schulter_instabilitaet:["SH05"],g_ellenbogen_trauma:["EB04","EB05","EB06"],g_ellenbogen_epikondylus:["EB01","EB02"],g_ellenbogen_ulnaris:["EB03"],g_handgelenk_skaphoid:["HG04"],g_handgelenk_kts:["HG02"],g_handgelenk_radial:["HG03"],g_handgelenk_instabil:["HG05","HG06"],g_finger_sehnen:["FI05","FI06"],g_finger_gelenke:["FI01","FI07","FI09"],g_huefte_lateral:["HU04"],g_huefte_arthrose:["HU01"],g_huefte_leiste:["HU05","HU06","HU07"],g_knie_trauma:["KN10"],g_knie_meniskus:["KN05"],g_knie_seitenbaender_hkb:["KN06"],g_knie_vkb:["KN04"],g_osg_akut:["SG01","SG03"],g_osg_syndesmose:["SG06"],g_osg_chronisch:["SG02"],g_usg_tibpost:["FU02"],g_usg_flexibilitaet:["FU02","FU10"],g_usg_lateral:["SG09"],g_fuss_plantarfaszie:["FU01"],g_fuss_tarsaltunnel:["FU08"],g_fuss_achillesruptur:["SG05"],g_fuss_achillestendinopathie:["SG04"],g_zehen_plantarplatte:["ZE09"],g_zehen_morton:["FU04"]};
var WI_NEURO_KB={schlaganfall:"NE01",parkinson:"NE02",ms:"NE03"};
function WI_tAuto(id){let x=Vb.tests[id],h=WI_TK[id]||{},k={...h};if(!x)return k;
 let gr=Vb.gebiete.filter((g)=>g.tests.includes(id));
 if(!k.kb){let kb=new Set();gr.forEach((g)=>(WI_GKB[g.id]||[]).forEach((i)=>kb.add(i)));Vb.cluster.forEach((c)=>{if(WI_NEURO_KB[c.id]&&(c.hoch||[]).includes(id))kb.add(WI_NEURO_KB[c.id])});k.kb=[...kb]}
 if(!k.c){let c=new Set();gr.forEach((g)=>g.tests.forEach((t)=>t!==id&&c.add(t)));k.c=[...c].slice(0,4)}
 let nt=(x.norm||[]).join(" ");
 if(k.lr===undefined){let a=nt.match(/LR\+\s*(?:von\s*)?([\d]+(?:,\d+)?)/),b=nt.match(/LR[−-]\s*(?:von\s*)?([\d]+(?:,\d+)?)/);k.lr=a||b?[a?a[1]:null,b?b[1]:null]:null}
 if(!k.d&&x.durch){let z=x.durch.replace(/\s+/g," ").split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ])/).filter(Boolean);k.d=z.map((t)=>["",t])}
 if(!k.pos&&x.norm?.length){k.pos=x.norm[0];k.neg=null}
 if(!k.kw&&x.norm?.length>1)k.kw=x.norm.slice(1).join(" ");
 if(!k.ev&&x.quellen?.length)k.ev="Quelle: "+x.quellen[0].split(" – ")[0].split(",")[0];
 if(!k.dk&&/positiv|negativ/.test(x.einheit))k.dk=[x.name+" {s} positiv.",x.name+" {s} negativ."];
 if(!k.dk&&!/positiv|negativ/.test(x.einheit))k.dk0=x.name+" {s}: __ ("+x.einheit+").";
 return k}
/* Krankheitsbild-Kapitel: passende Tests */
function WI_kbTests(kid){let t=Object.keys(Vb.tests).filter((i)=>WI_tAuto(i).kb?.includes(kid));if(!t.length)return"";return `<section class="wi-karte"><h2>Passende Tests</h2><div class="wi-cl">${t.map((i)=>`<button data-tid="${i}"><b>${WI_esc(WI_tn(i))}</b><small>${WI_tAuto(i).lr?.[0]?"LR+ "+WI_esc(WI_tAuto(i).lr[0]):WI_esc(WI_TK[i]?.u?.split(" · ").pop()||Vb.tests[i].was||"")}</small></button>`).join("")}</div></section>`}
(function(){
let altListe=WI_liste,altKap=WI_kapitel,altZeige=WI_zeige;
WI_liste=function(){return WI_st.modus==="tests"?WI_tSeite():altListe().replace(/(<div class="wk-seg"><button data-a="wk-kb"[^>]*>Krankheitsbilder<\/button>)/,'$1<button data-modus="tests">Tests</button>')};
WI_kapitel=function(id){let h=altKap(id),t=WI_kbTests(id);return t?h.replace('<section class="wi-karte wi-q">',t+'<section class="wi-karte wi-q">'):h};
WI_zeige=function(){let el=WI_st.el;if(!el)return;if(WI_st.tid){el.innerHTML=WI_tKapitel(WI_st.tid);el.scrollTop=0}else altZeige()};
document.addEventListener("click",(ev)=>{let b=ev.target.closest(".wi-portal button");if(!b)return;let d=b.dataset;
 if(d.a==="wk-kb"||d.a==="wk-vo"||d.a==="wk-kartei"){WI_st.modus="kb";WI_st.tid=null}
 if(d.modus){WI_st.kap=null;WI_st.modus=d.modus;WI_st.q="";WI_st.tid=null;WI_st.id=null;WI_zeige();ev.stopPropagation();return}
 if(d.tid){WI_st.kap=null;WI_st.tid=d.tid;WI_st.id=null;WI_st.modus="tests";WI_zeige();ev.stopPropagation();return}
 if(d.kbid){WI_st.tid=null;WI_st.modus="kb";WI_st.tab="kb";WI_st.kap=null;WI_st.id=d.kbid;WI_zeige();ev.stopPropagation();return}
 if(d.treg!=null){WI_st.treg=d.treg;WI_zeige();ev.stopPropagation();return}
 if(d.a==="tliste"){WI_st.tid=null;WI_zeige();ev.stopPropagation();return}
 if(d.a==="zu"&&WI_st.modus==="tests"){WI_st.modus="kb";WI_st.tid=null}
 if(d.a==="liste"){WI_st.tid=null}
 if(d.dke!=null||d.dse){if(d.dke!=null)WI_st.dke=+d.dke;if(d.dse)WI_st.dse=d.dse;b.parentNode.querySelectorAll("button").forEach((x)=>x.classList.toggle("an",x===b));let z=document.getElementById("wi-doku");if(z)z.textContent=WI_tDoku(WI_st.tid);ev.stopPropagation();return}
 if(d.a==="tkopier"){navigator.clipboard?.writeText(WI_tDoku(WI_st.tid)).then(()=>{b.textContent="Kopiert";setTimeout(()=>{b.textContent="Text kopieren"},1600)}).catch(()=>{});ev.stopPropagation();return}
},true);
document.addEventListener("input",(ev)=>{if(ev.target.dataset?.a!=="tq")return;WI_st.q=ev.target.value;let box=document.querySelector(".wi-tbox");if(box)box.innerHTML=WI_tListe()},true);
window.WI_oeffneTest=function(id){WI_oeffnen();WI_st.kap=null;WI_st.modus="tests";WI_st.tid=id||null;WI_zeige()};
})();

(function(){var r=document.querySelector(".wi-portal");if(r&&window.WI_st)WI_zeige()})();

/* Neues Kapitel, neuer Test oder neues Thema: immer oben anfangen (auch im Reiter Wissen, wo die Seite selbst scrollt) */
(function(){var vorZeige=WI_zeige,letzter=null;
function schluessel(){return [WI_st.modus,WI_st.id,WI_st.tid,WI_st.kap].join("|")}
WI_zeige=function(){var k=schluessel();vorZeige.apply(this,arguments);if(k===letzter)return;letzter=k;var el=WI_st.el;if(!el)return;
var n=el;while(n&&n!==document.documentElement){if(n.scrollTop)n.scrollTop=0;n=n.parentElement}
try{window.scrollTo(0,0)}catch(e){}};})();

/* Zurückwischen: im geöffneten Kapitel, Test oder Karteikapitel von überall nach rechts wischen = zurück zur Übersicht */
(function(){if(window.__wiWisch)return;window.__wiWisch=1;var s=null;
function zurueck(){var el=WI_st&&WI_st.el;return el?el.querySelector('.wi-zur:not([data-a="zu"])'):null}
function seite(){var el=WI_st&&WI_st.el;return el?el.querySelector(".wi-seite"):null}
function quer(n){while(n&&n!==document.body){if(n.scrollWidth>n.clientWidth+2){var o=getComputedStyle(n).overflowX;if(o==="auto"||o==="scroll")return true}if(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.tagName==="SELECT")return true;n=n.parentElement}return false}
document.addEventListener("touchstart",function(e){s=null;var el=WI_st&&WI_st.el;if(!el||e.touches.length!==1||!el.contains(e.target)||!zurueck()||quer(e.target))return;var t=e.touches[0];s={x:t.clientX,y:t.clientY,t:Date.now(),an:false}},{passive:true});
document.addEventListener("touchmove",function(e){if(!s)return;var t=e.touches[0],dx=t.clientX-s.x,dy=t.clientY-s.y;
if(!s.an){if(Math.abs(dy)>12&&Math.abs(dy)>Math.abs(dx)){s=null;return}if(dx>12&&dx>Math.abs(dy)*1.4)s.an=true;else return}
var p=seite();if(p){p.style.transition="none";p.style.transform="translateX("+Math.max(0,dx*.85)+"px)";p.style.opacity=String(Math.max(.4,1-dx/900))}},{passive:true});
document.addEventListener("touchend",function(e){if(!s)return;var a=s;s=null;var t=e.changedTouches[0],dx=t.clientX-a.x,dt=Date.now()-a.t,p=seite();
var los=a.an&&(dx>Math.min(140,innerWidth*.22)||(dx>50&&dx/dt>.45));
if(!p){if(los){var b=zurueck();b&&b.click()}return}
if(los){p.style.transition="transform .18s cubic-bezier(.23,1,.32,1),opacity .18s";p.style.transform="translateX("+innerWidth*.6+"px)";p.style.opacity="0";
setTimeout(function(){var b=zurueck();if(b)b.click();var n=seite();if(n){n.style.transition="none";n.style.transform="";n.style.opacity=""}},170)}
else{p.style.transition="transform .2s cubic-bezier(.23,1,.32,1),opacity .2s";p.style.transform="";p.style.opacity=""}},{passive:true});
document.addEventListener("touchcancel",function(){if(!s)return;s=null;var p=seite();if(p){p.style.transform="";p.style.opacity=""}},{passive:true});
})();


/* IM12 Thrombose: Wells-Score TVT (v239) */
Object.assign(WI_TK,{wellstvt:{u:"Bein · Thrombose · Entscheidungsregel",ev:"Belegstärke stark · Goodacre 2005",
k:"Neun Kriterien je 1 Punkt, minus 2 Punkte, wenn eine andere Diagnose mindestens ebenso wahrscheinlich ist. Ab 2 Punkten ist eine tiefe Beinvenenthrombose wahrscheinlich. Der Score ersetzt keine ärztliche Diagnostik, er begründet die Dringlichkeit.",
p:[["Struktur","Tiefe Bein- und Beckenvenen"],["Prinzip","Klinische Entscheidungsregel"],["Frage","Wie wahrscheinlich ist eine TVT?"],["Wann einsetzen","Neue einseitige Beinschwellung oder Wadenschmerz"]],
d:[["Krebs","Aktive Krebserkrankung (in Behandlung, palliativ oder Diagnose in den letzten 6 Monaten)?"],["Ruhigstellung","Lähmung oder Gips am Bein?"],["Bettruhe, OP","Bettruhe ab 3 Tagen oder große OP in den letzten 3 Monaten?"],["Venenverlauf","Druckschmerz entlang der tiefen Venen?"],["Ganzes Bein","Schwellung des ganzen Beins?"],["Umfang","Unterschenkel mindestens 3 cm dicker als auf der Gegenseite?"],["Ödem","Eindrückbares Ödem nur am betroffenen Bein?"],["Kollateralen","Sichtbare Kollateralvenen (keine Krampfadern)?"],["Vorgeschichte","Frühere TVT?"],["Alternative","Andere Diagnose mindestens ebenso wahrscheinlich? Dann minus 2"]],
pos:"2 Punkte und mehr: TVT wahrscheinlich, noch am selben Tag ärztlich.",neg:"0–1 Punkt: TVT unwahrscheinlich; bei anhaltendem Verdacht trotzdem ärztlich (D-Dimer).",
lr:["5,2","0,25"],kw:"Zweistufig: 2 und mehr Punkte etwa 28 % TVT, 0–1 Punkt etwa 6 % (AWMF 065-002). Dreistufig hoch LR 5,2, niedrig LR 0,25 (Goodacre 2005).",
f:["Bei Bettlägerigen und nach OP unzuverlässiger, die Beschwerden fehlen oft.","Ein niedriger Score allein schließt keine Thrombose aus, ärztlich folgt der D-Dimer-Test."],
r:"Atemnot, Brustschmerz, Herzrasen, Kollaps oder Bluthusten → Lungenembolie, Notruf 112.",
kb:["IM12"],
dk:["Wells-Score TVT {s}: TVT wahrscheinlich (2 und mehr Punkte), ärztliche Abklärung am selben Tag.","Wells-Score TVT {s}: TVT unwahrscheinlich (0–1 Punkt)."],
q:"AWMF S2k 065-002, Version 5.0, 2023. Goodacre S et al. Ann Intern Med 2005;143:129–139."}});
/* Tests in den Krankheitsbildern: jeder Test im Text ist markiert (eigene Kennung, getrennt von den Begriffsfenstern) und öffnet ein Testfenster mit Durchführung, Bewertung und LR (seit v230). */
(function(){if(window.__wiTestLinks)return;window.__wiTestLinks=1;
var st=document.createElement("style");st.textContent=".wi-i.wi-t{text-decoration:none;color:var(--schrift);font-weight:650;background:color-mix(in srgb,#C9E86B 38%,transparent);border-radius:6px;padding:0 5px 0 3px;box-decoration-break:clone;-webkit-box-decoration-break:clone;white-space:nowrap}.wi-i.wi-t::before{content:'';display:inline-block;width:.78em;height:.78em;margin-right:3px;vertical-align:-.04em;background:currentColor;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3'/%3E%3C/svg%3E\") center/contain no-repeat;mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3'/%3E%3C/svg%3E\") center/contain no-repeat;opacity:.7}.wi-i.wi-t:hover,.wi-i.wi-t[aria-expanded=true]{background:color-mix(in srgb,#C9E86B 65%,transparent)}.wi-tp-u{font-size:.75rem;font-weight:700;color:var(--schrift2);text-transform:uppercase;letter-spacing:.04em;margin:-2px 0 6px}.wi-tp-lr{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}.wi-tp-lr span{background:color-mix(in srgb,#C9E86B 40%,var(--flaeche));border-radius:999px;padding:3px 10px;font-size:.8125rem;font-weight:800}.wi-tp-pn{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;font-size:.875rem;margin:8px 0}.wi-tp-pn b{font-weight:800}.wi-tp-d{margin:6px 0 4px;padding-left:20px;font-size:.875rem}.wi-tp-d li{margin:3px 0}.wi-tp-auf{margin-top:10px;width:100%;border:0;border-radius:12px;background:var(--tape);color:#fff;font:inherit;font-weight:800;font-size:.9375rem;padding:11px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.wi-tp-auf:active{transform:scale(.98)}";document.head.append(st);
var RAUS={pf_stand:1,pf_seit:1,pf_wade:1,pf_bruecke:1,pf_stuhl:1,pf_presse:1,pf_keiser:1,pf_grs:1,pf_gw:1,gangbild:1,rotation60:1,gelenkspalt:1,hockschmerz:1};
var EXTRA={wellstvt:["Wells-Score","Wells-Kriterien"],hawkins:["Hawkins-Kennedy","Hawkins"],neer:["Neer"],jobe:["Jobe","Empty Can","Full Can"],droparm:["Drop Arm","Drop-Arm"],erlag:["Lag Signs","Lag Sign","Lag-Zeichen","Außenrotations-Lag"],mill:["Mill"],tinelhandgelenk:["Tinel","Tinel-Zeichen"],schublade:["vordere Schublade","Vordere Schublade","Schubladentest"],einbeinstand30:["Einbeinstand 30 s","Einbeinstand 30 Sekunden"],lachman:["Lachman"],mcmurray:["McMurray"],spurling:["Spurling-Test","Spurling"],phalen:["Phalen"],finkelstein:["Finkelstein"],thessaly:["Thessaly"],thompson:["Thompson"],gaenslen:["Gaenslen"],slr:["Lasègue","Straight Leg Raise","SLR"],faber:["FABER","Patrick-Test"],fadir:["FADIR"],trendelenburg:["Trendelenburg"],apprehension:["Apprehension"],relocation:["Relocation"],belly:["Belly-Press","Belly Press"],liftoff:["Lift-off"],pivotshift:["Pivot-Shift","Pivot Shift"],scour:["Scour"],slump:["Slump"],windlass:["Windlass"],mulder:["Mulder"],cozen:["Cozen"],maudsley:["Maudsley"],obrien:["O'Brien","O’Brien"],kleiger:["Kleiger"],babinski:["Babinski"],hoffmann:["Hoffmann"],crossbody:["Cross-Body-Test","Cross-Body","Cross Body"],infraspinatus:["Infraspinatus-Test","Außenrotation gegen Widerstand"],painfularc:["Painful Arc","schmerzhafter Bogen","Schmerzhafter Bogen"],tug:["Timed Up and Go","TUG"],bbs:["Berg Balance Scale","Berg-Balance","Berg Balance"],moca:["MoCA"],t6:["6-Minuten-Gehtest","6MWT"],t10:["10-Meter-Gehtest","10MWT","10-m-Gehtest"],sts5:["5xSTS","Five Times Sit to Stand"],ottawaknie:["Ottawa Knee Rules","Ottawa-Knie-Regeln"],ottawafuss:["Ottawa Ankle Rules","Ottawa-Regeln"],squeeze:["Squeeze-Test"],speed:["Speed-Test"],uppercut:["Upper-Cut-Test"],bearhug:["Bear-Hug"],thomas:["Thomas-Test"],fader:["FADER"],hintereschublade:["hintere Schublade","Hintere Schublade"],tanzendepatella:["tanzende Patella","Tanzende Patella"],durkan:["Durkan"],matles:["Matles"],royallondon:["Royal-London"],jacktest:["Jack-Test"],colemanblock:["Coleman-Block"],windlas:[],sharppurser:["Sharp-Purser"],kraniozervikalflexion:["CCFT","kraniozervikale Flexion"],canadiancspine:["Canadian C-Spine"],barthel:["Barthel"],tinetti:["Tinetti"],fac:["FAC"],arat:["ARAT"],fga:["FGA"],dgi:["DGI"],mbest:["Mini-BESTest"],updrs:["UPDRS"],fr:["Functional Reach"],watson:["Watson-Test"],movingvalgus:["Moving-Valgus"],hooktest:["Hook-Test"]};
var RE=null,MAP={};
function bau(){if(RE)return;var al=[];for(var id in Vb.tests){if(RAUS[id])continue;var n=Vb.tests[id].name,v=new Set([n]);var o=n.replace(/\s*\([^)]*\)\s*/g," ").trim();if(o.length>=5)v.add(o);(EXTRA[id]||[]).forEach(function(x){v.add(x)});v.forEach(function(x){if(x.length<3)return;var k=x.toLowerCase();if(MAP[k]&&MAP[k]!==id)return;MAP[k]=id;al.push(x)})}
 al.sort(function(a,b){return b.length-a.length});var esc=function(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};
 RE=new RegExp("(^|[^A-Za-zÄÖÜäöüß0-9-])("+al.map(esc).join("|")+")(?:-Tests?|-Zeichen|s)?(?![A-Za-zÄÖÜäöüß0-9])","g")}
var KTX={SH08:{neer:0},SH09:{neer:0},SH10:{neer:0},SH07:{painfularc:0}};function kontext(id){var e=Fb.find(function(f){return f.id===WI_st.id})||{},b=e.bereich||"",o=KTX[e.id]||{};if(id in o)return o[id];if(id==="tinelhandgelenk"&&/Fuß|Sprung/.test(b))return "tineltarsal";if(id==="schublade"&&/Sprung|Fuß/.test(b))return "schubladeosg";if(id==="apprehension"&&/Knie/.test(b))return "movingpatellaapprehension";if(id==="lachman"&&/Zehe/.test(b))return "plantarplatte";if(id==="einbeinstand30"&&!/Hüfte/.test(b))return 0;return id}
function verlinke(root){if(!root||!window.Vb||!Vb.tests)return;bau();
 root.querySelectorAll("section").forEach(function(sec){if(sec.querySelector(".wi-cl")||sec.classList.contains("wi-q"))return;var schon=new Set();
  var w=document.createTreeWalker(sec,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentElement;if(!p||p.closest("h1,h2,h3,button,.wi-i,.wi-nr,a,script,style,.wi-reiz-seg"))return NodeFilter.FILTER_REJECT;return /\S/.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
  var nodes=[];while(w.nextNode())nodes.push(w.currentNode);
  nodes.forEach(function(n){var t=n.nodeValue,m,last=0,frag=null;RE.lastIndex=0;
   while((m=RE.exec(t))){var id=MAP[m[2].toLowerCase()];id=id&&kontext(id);if(!id||!Vb.tests[id]||schon.has(id))continue;schon.add(id);frag=frag||document.createDocumentFragment();var start=m.index+m[1].length,ende=m.index+m[0].length;frag.append(t.slice(last,start));var s=document.createElement("span");s.className="wi-i wi-t";s.setAttribute("role","button");s.tabIndex=0;s.dataset.wiTest=id;s.setAttribute("aria-label","Test "+Vb.tests[id].name+", Details");s.setAttribute("aria-expanded","false");s.textContent=t.slice(start,ende);frag.append(s);last=ende}
   if(frag){frag.append(t.slice(last));n.replaceWith(frag)}})})}
window.WI_testInhalt=function(id){var x=Vb.tests[id],k=WI_tAuto(id),h="";if(k.u)h+='<p class="wi-tp-u">'+WI_esc(k.u)+'</p>';h+="<p>"+WI_esc(k.k||x.kurz||x.was||"")+"</p>";
 var lr=k.lr||[];if(lr[0]||lr[1])h+='<div class="wi-tp-lr">'+(lr[0]?"<span>LR+ "+WI_esc(lr[0])+"</span>":"")+(lr[1]?"<span>LR− "+WI_esc(lr[1])+"</span>":"")+"</div>";
 if(k.pos||k.neg)h+='<div class="wi-tp-pn">'+(k.pos?"<b>Positiv</b><span>"+WI_esc(k.pos)+"</span>":"")+(k.neg?"<b>Negativ</b><span>"+WI_esc(k.neg)+"</span>":"")+"</div>";
 if(k.d&&k.d.length)h+='<ol class="wi-tp-d">'+k.d.map(function(z){return "<li><b>"+WI_esc(z[0])+":</b> "+WI_esc(z[1])+"</li>"}).join("")+"</ol>";
 if(k.ev)h+='<p class="wi-pop-q">'+WI_esc(k.ev)+"</p>";
 h+='<button type="button" class="wi-tp-auf" data-tauf="'+id+'"><span>Ganzen Test öffnen</span>'+(window.WI_CHEV||"›")+"</button>";return h};
document.addEventListener("click",function(ev){var b=ev.target.closest&&ev.target.closest(".wi-tp-auf");if(!b)return;ev.preventDefault();ev.stopPropagation();var id=b.dataset.tauf;WI_Pop.zu();WI_st.vonKb=WI_st.id;WI_st.vonTiefe=WI_st.tiefeId;WI_st.kap=null;WI_st.tid=id;WI_st.id=null;WI_st.modus="tests";WI_zeige()},true);
document.addEventListener("click",function(ev){var b=ev.target.closest&&ev.target.closest(".wi-portal [data-a=tzurkb]");if(!b)return;ev.preventDefault();ev.stopPropagation();var kb=b.dataset.zurkb;WI_st.tid=null;WI_st.modus="kb";WI_st.tab="kb";WI_st.kap=null;WI_st.id=kb;WI_st.vonKb=null;WI_st.tiefeId=WI_st.vonTiefe===kb?kb:null;WI_st.vonTiefe=null;WI_zeige()},true);
var z0=WI_zeige;WI_zeige=function(){z0();var el=WI_st.el;if(!el)return;if(WI_st.tid){if(WI_st.vonKb){var b=el.querySelector("[data-a=tliste]"),e=Fb.find(function(f){return f.id===WI_st.vonKb});if(b&&e){b.dataset.a="tzurkb";b.dataset.zurkb=WI_st.vonKb;b.textContent="‹ "+(e.titel.length>28?e.titel.split(/[\/(]/)[0].trim():e.titel)}}}else{WI_st.vonKb=null;if(WI_st.id)verlinke(el)}};
window.WI_testLinks=verlinke})();
