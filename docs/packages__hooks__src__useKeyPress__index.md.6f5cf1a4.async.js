(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"95eJ":function(e,t,a){},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},aFgg:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),r=a("T52B"),c=a("1i7f"),o=a("PAHk"),m=a("v8OG"),i=l.a.memo((e=>{var t=e.demos,a=t["usekeypress-demo1"].component,n=t["usekeypress-demo6"].component,i=t["usekeypress-demo7"].component,s=t["usekeypress-demo3"].component,d=t["usekeypress-demo8"].component,u=t["usekeypress-demo4"].component,E=t["usekeypress-demo5"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usekeypress"},l.a.createElement(r["AnchorLink"],{to:"#usekeypress","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useKeyPress"),l.a.createElement("p",null,"\u76d1\u542c\u952e\u76d8\u6309\u952e\uff0c\u652f\u6301\u7ec4\u5408\u952e\uff0c\u652f\u6301\u6309\u952e\u522b\u540d\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["usekeypress-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u76d1\u542c\u7ec4\u5408\u6309\u952e"},l.a.createElement(r["AnchorLink"],{to:"#\u76d1\u542c\u7ec4\u5408\u6309\u952e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d1\u542c\u7ec4\u5408\u6309\u952e")),l.a.createElement(c["default"],t["usekeypress-demo6"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u7cbe\u786e\u5339\u914d"},l.a.createElement(r["AnchorLink"],{to:"#\u7cbe\u786e\u5339\u914d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7cbe\u786e\u5339\u914d")),l.a.createElement(c["default"],t["usekeypress-demo7"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u76d1\u542c\u591a\u4e2a\u6309\u952e"},l.a.createElement(r["AnchorLink"],{to:"#\u76d1\u542c\u591a\u4e2a\u6309\u952e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d1\u542c\u591a\u4e2a\u6309\u952e")),l.a.createElement(c["default"],t["usekeypress-demo3"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u83b7\u53d6\u89e6\u53d1\u7684\u6309\u952e"},l.a.createElement(r["AnchorLink"],{to:"#\u83b7\u53d6\u89e6\u53d1\u7684\u6309\u952e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u83b7\u53d6\u89e6\u53d1\u7684\u6309\u952e")),l.a.createElement(c["default"],t["usekeypress-demo8"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u76d1\u542c\u65b9\u5f0f"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u76d1\u542c\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u76d1\u542c\u65b9\u5f0f")),l.a.createElement(c["default"],t["usekeypress-demo4"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49-dom"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49-dom","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49 DOM")),l.a.createElement(c["default"],t["usekeypress-demo5"].previewerProps,l.a.createElement(E,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"type KeyType = number | string;\ntype KeyFilter = KeyType | KeyType[] | ((event: KeyboardEvent) => boolean);\n\nuseKeyPress(\n  keyFilter: KeyFilter,\n  eventHandler: (event: KeyboardEvent, key: KeyType) => void,\n  options?: Options\n);",lang:"typescript"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"keyFilter"),l.a.createElement("td",null,"\u652f\u6301 keyCode\u3001\u522b\u540d\u3001\u7ec4\u5408\u952e\u3001\u6570\u7ec4\u3001\u81ea\u5b9a\u4e49\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"KeyType")," | ",l.a.createElement("code",null,"KeyType[]")," | ",l.a.createElement("code",null,"(event: KeyboardEvent) => boolean")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"eventHandler"),l.a.createElement("td",null,"\u56de\u8c03\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"(event: KeyboardEvent, key: KeyType) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u53ef\u9009\u914d\u7f6e\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"Options")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"events"),l.a.createElement("td",null,"\u89e6\u53d1\u4e8b\u4ef6"),l.a.createElement("td",null,l.a.createElement("code",null,"('keydown' | 'keyup')[]")),l.a.createElement("td",null,l.a.createElement("code",null,"['keydown']"))),l.a.createElement("tr",null,l.a.createElement("td",null,"target"),l.a.createElement("td",null,"DOM \u8282\u70b9\u6216\u8005 ref"),l.a.createElement("td",null,l.a.createElement("code",null,"() => Element")," | ",l.a.createElement("code",null,"Element")," | ",l.a.createElement("code",null,"MutableRefObject<Element>")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"exactMatch"),l.a.createElement("td",null,"\u7cbe\u786e\u5339\u914d\u3002\u5982\u679c\u5f00\u542f\uff0c\u5219\u53ea\u6709\u5728\u6309\u952e\u5b8c\u5168\u5339\u914d\u7684\u60c5\u51b5\u4e0b\u89e6\u53d1\u4e8b\u4ef6\u3002\u6bd4\u5982\u6309\u952e [shift + c] \u4e0d\u4f1a\u89e6\u53d1 [c]"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"useCapture"),l.a.createElement("td",null,"\u662f\u5426\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))))),l.a.createElement("h2",{id:"remarks"},l.a.createElement(r["AnchorLink"],{to:"#remarks","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Remarks"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u6309\u952e\u522b\u540d\u89c1 ",l.a.createElement(r["Link"],{to:"https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useKeyPress/index.ts#L21"},"\u4ee3\u7801"))),l.a.createElement("li",null,l.a.createElement("p",null,"\u4fee\u9970\u952e"))),l.a.createElement(o["a"],{code:"ctrl\nalt\nshift\nmeta",lang:"text"}))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}},v8OG:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("95eJ");function o(e,t){return u(e)||d(e,t)||i(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){o=!0,l=m}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function u(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=o(r,2),i=m[0],s=m[1],d=Object(n["useState"])(!1),u=o(d,2),E=u[0],p=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){s(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);