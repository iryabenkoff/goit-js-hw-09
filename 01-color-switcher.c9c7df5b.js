const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.btnStart.addEventListener("click",(()=>e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.btnStart.disabled=!0,t.btnStop.disabled=!1}),1e3)));t.btnStop.addEventListener("click",(()=>{clearInterval(e),t.btnStart.disabled=!1,t.btnStop.disabled=!0})),t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.c9c7df5b.js.map
