
if(!window.PI_JS){window.PI_JS=1;(function(){
var PI=["WS01","WS02","WS03","WS04","WS05","WS06","WS07","WS08","WS09","WS10","SH01","SH02","SH03","ZE01","EB01","EB02","EB03","EB04","EB05","EB06","EB07","EB08","EB09","EB10","FI01","FI02","FI03","FI04","FI05","FI06","FI07","FI08","FI09","FI10","FU09","HG01","HG02","HG03","HG04","HG05","HG06","HG07","HG08","HG09","HG10","HU01","HU02","HU03","HU04","HU05","HU06","HU07","HU08","HU09","HU10","KN01","KN02","KN03","KN04","KN05","KN06","KN07","KN08","KN09","KN10","KN11","NE07","NE08","SG01","SH04","SH05","SH06","SH07","SH08","SH09","SH10","SG04","SG02","SG03","SG05","SG06","SG07","SG08","SG09","SG10","FU01","FU02","FU03","FU04","FU05","FU06","FU07","FU08","FU10","ZE02","ZE03","ZE04","ZE05","ZE06","ZE07","ZE08","ZE09","ZE10","NE01","NE02","NE03","NE04","NE05","NE06","NE09","NE10","IM01","IM02","IM03","IM04","IM05","IM06","IM07","IM08","IM09","IM10","KI01","IM11","IM12","NE11"];
function titel(id){var e=(typeof Fb!=="undefined"?Fb:[]).find(function(x){return x.id===id});return e?e.titel:id}
var alt=WI_kapitel;
WI_kapitel=function(id){var h=alt(id);if(PI.indexOf(id)<0)return h;
 var c='<section class="wi-karte pi-karte"><img src="patienteninfo/'+id+'.jpg" alt="" loading="lazy"><div class="t"><h2>Info für Patienten</h2><p>Eine A4-Seite zum Mitgeben: Alltag, Hilfsmittel, Übungen, Warnzeichen</p></div><button class="pi-btn" data-pi="'+id+'">Ansehen</button></section>';
 var i=h.lastIndexOf('<section class="wi-karte wi-q">');return i<0?h+c:h.slice(0,i)+c+h.slice(i)};
function dateiname(id,ext){return "Patienteninfo_"+titel(id).replace(/[^A-Za-zÄÖÜäöüß0-9]+/g,"_").replace(/^_|_$/g,"")+"."+ext}
async function teilen(id,ext){var url="patienteninfo/"+id+"."+ext;
 try{var r=await fetch(url);var b=await r.blob();var f=new File([b],dateiname(id,ext),{type:ext==="pdf"?"application/pdf":"image/jpeg"});
  if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:"Patienteninformation: "+titel(id)});return}
  var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=f.name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},2000)}
 catch(e){if(e&&e.name==="AbortError")return;window.open(url,"_blank")}}
function zeige(id){document.querySelectorAll(".pi-ov").forEach(function(x){x.remove()});var o=document.createElement("div");o.className="pi-ov";
 o.innerHTML='<div class="kopf"><span>'+titel(id)+'</span><button aria-label="Schließen" data-x>✕</button></div><div class="bl"><img src="patienteninfo/'+id+'.jpg" alt="Patienteninformation"></div><div class="fuss"><button class="h" data-t="pdf">PDF teilen</button><button data-t="jpg">Bild teilen</button><button data-x>Schließen</button></div>';
 o.addEventListener("click",function(ev){if(ev.target===o||ev.target.closest("[data-x]")){o.remove();return}var b=ev.target.closest("[data-t]");if(b)teilen(id,b.dataset.t)});
 document.body.appendChild(o)}
document.addEventListener("click",function(ev){var b=ev.target.closest("[data-pi]");if(!b)return;ev.preventDefault();ev.stopPropagation();zeige(b.dataset.pi)},true);
})();}

