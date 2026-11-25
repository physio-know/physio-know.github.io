import json,asyncio,sys
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        pg=await b.new_page(viewport={"width":820,"height":1180},locale="de-DE",timezone_id="Europe/Berlin")
        errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)[:200]))
        await pg.goto("http://127.0.0.1:8765/index.html",wait_until="load")
        await pg.wait_for_timeout(1500)
        await pg.evaluate("""()=>{const wk=document.getElementById('wk-js');let t=wk.textContent;let i=t.lastIndexOf('})();');wk.textContent=t.slice(0,i)+';window.__WK={WI_KARTEI:typeof WI_KARTEI!="undefined"?WI_KARTEI:null,WI_VO:typeof WI_VO!="undefined"?WI_VO:null,WK_BILD:typeof WK_BILD!="undefined"?WK_BILD:null};'+t.slice(i);
        const alle=document.querySelectorAll('script[data-ts]');for(const alt of alle){const neu=document.createElement('script');if(alt.id)neu.id=alt.id;neu.textContent=alt.textContent;alt.parentNode.replaceChild(neu,alt)}}""")
        await pg.wait_for_timeout(6000)
        res=await pg.evaluate("""()=>{const o={};const g=(n)=>{try{return (0,eval)(n)}catch(e){return undefined}};
          for(const n of ['Fb','WI_KL','WI_BILD','Vb','ICD','WI_testInhalt','Fe','Lb']){const v=g(n);o[n]=v===undefined?null:(typeof v==='function'?'FUNC':v)}
          o.__WK=window.__WK||null;return JSON.stringify(o)}""")
        open("roh.json","w").write(res)
        d=json.loads(res)
        for k,v in d.items(): print(k, type(v).__name__, (len(v) if hasattr(v,'__len__') else ''), len(json.dumps(v)) )
        if d.get('__WK'): print({k:len(json.dumps(v)) for k,v in d['__WK'].items()})
        print("Fehler:",errs[:5])
        await b.close()
asyncio.run(main())
