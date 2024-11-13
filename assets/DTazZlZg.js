import{a1 as Ot,ah as nt,bR as L}from"./C7Ij6hdR.js";const j=/^[a-z0-9]+(-[a-z0-9]+)*$/,N=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!F(f)?null:f}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!F(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!F(c,n)?null:c}return null},F=(t,e)=>t?!!((t.provider===""||t.provider.match(j))&&(e&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,yt=Object.freeze({left:0,top:0,width:16,height:16}),D=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),R=Object.freeze({...yt,...D}),Q=Object.freeze({...R,body:"",hidden:!1});function Ft(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function ot(t,e){const n=Ft(t,e);for(const r in Q)r in D?r in t&&!(r in n)&&(n[r]=D[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function _t(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return Object.keys(n).concat(Object.keys(r)).forEach(s),o}function At(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=ot(r[c]||o[c],s)}return i(e),n.forEach(i),ot(t,s)}function bt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=_t(t);for(const o in r){const s=r[o];s&&(e(o,At(t,o,s)),n.push(o))}return n}const Dt={provider:"",aliases:{},not_found:{},...yt};function V(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function wt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!V(t,Dt))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(j)||typeof s.body!="string"||!V(s,Q))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(j)||typeof i!="string"||!n[i]&&!r[i]||!V(s,Q))return null}return e}const rt=Object.create(null);function Nt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function S(t,e){const n=rt[t]||(rt[t]=Object.create(null));return n[e]||(n[e]=Nt(t,e))}function W(t,e){return wt(e)?bt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Rt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let P=!1;function xt(t){return typeof t=="boolean"&&(P=t),P}function Bt(t){const e=typeof t=="string"?N(t,!0,P):t;if(e){const n=S(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function zt(t,e){const n=N(t,!0,P);if(!n)return!1;const r=S(n.provider,n.prefix);return Rt(r,n.name,e)}function Vt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),P&&!e&&!t.prefix){let o=!1;return wt(t)&&(t.prefix="",bt(t,(s,i)=>{i&&zt(s,i)&&(o=!0)})),o}const n=t.prefix;if(!F({provider:e,prefix:n,name:"a"}))return!1;const r=S(e,n);return!!W(r,t)}const It=Object.freeze({width:null,height:null}),vt=Object.freeze({...It,...D}),qt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Qt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function st(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(qt);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=Qt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function Ut(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const o=t.indexOf(">",r),s=t.indexOf("</"+e);if(o===-1||s===-1)break;const i=t.indexOf(">",s);if(i===-1)break;n+=t.slice(o+1,s).trim(),t=t.slice(0,r).trim()+t.slice(i+1)}return{defs:n,content:t}}function $t(t,e){return t?"<defs>"+t+"</defs>"+e:e}function Ht(t,e,n){const r=Ut(t);return $t(r.defs,e+r.content+n)}const Gt=t=>t==="unset"||t==="undefined"||t==="none";function Kt(t,e){const n={...R,...t},r={...vt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(g=>{const u=[],C=g.hFlip,I=g.vFlip;let w=g.rotate;C?I?w+=2:(u.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),u.push("scale(-1 1)"),o.top=o.left=0):I&&(u.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),u.push("scale(1 -1)"),o.top=o.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=o.height/2+o.top,u.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:u.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:y=o.width/2+o.left,u.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(o.left!==o.top&&(y=o.left,o.left=o.top,o.top=y),o.width!==o.height&&(y=o.width,o.width=o.height,o.height=y)),u.length&&(s=Ht(s,'<g transform="'+u.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=o.width,f=o.height;let a,d;i===null?(d=c===null?"1em":c==="auto"?f:c,a=st(d,l/f)):(a=i==="auto"?l:i,d=c===null?st(a,f/l):c==="auto"?f:c);const h={},m=(g,u)=>{Gt(u)||(h[g]=u.toString())};m("width",a),m("height",d);const x=[o.left,o.top,l,f];return h.viewBox=x.join(" "),{attributes:h,viewBox:x,body:s}}const Jt=/\sid="(\S+)"/g,Wt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Xt=0;function Yt(t,e=Wt){const n=[];let r;for(;r=Jt.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(Xt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const U=Object.create(null);function Zt(t,e){U[t]=e}function $(t){return U[t]||U[""]}function X(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Y=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],_=[];for(;T.length>0;)T.length===1||Math.random()>.5?_.push(T.shift()):_.push(T.pop());Y[""]=X({resources:["https://api.iconify.design"].concat(_)});function te(t,e){const n=X(e);return n===null?!1:(Y[t]=n,!0)}function Z(t){return Y[t]}const ee=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let it=ee();function ne(t,e){const n=Z(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function oe(t){return t===404}const re=(t,e,n)=>{const r=[],o=ne(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function se(t){if(typeof t=="string"){const e=Z(t);if(e)return e.path}return"/"}const ie=(t,e,n)=>{if(!it){n("abort",424);return}let r=se(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;it(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(oe(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},ce={prepare:re,send:ie};function le(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),f=l[i]||(l[i]=S(s,i));let a;c in f.icons?a=e.loaded:i===""||f.missing.has(c)?a=e.missing:a=e.pending;const d={provider:s,prefix:i,name:c};a.push(d)}),e}function St(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function fe(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])i.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))i.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||St([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let ae=0;function ue(t,e,n){const r=ae++,o=St.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function de(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?N(o,e,n):o;s&&r.push(s)}),r}var pe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function he(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let p=t.resources.slice(0);for(i=[];p.length>1;){const b=Math.floor(Math.random()*p.length);i.push(p[b]),p=p.slice(0,b).concat(p.slice(b+1))}i=i.concat(p)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",f=0,a,d=null,h=[],m=[];typeof r=="function"&&m.push(r);function x(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),x(),h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function u(p,b){b&&(m=[]),typeof p=="function"&&m.push(p)}function C(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:h.length,subscribe:u,abort:g}}function I(){l="failed",m.forEach(p=>{p(void 0,a)})}function w(){h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function y(p,b,k){const M=b!=="success";switch(h=h.filter(v=>v!==p),l){case"pending":break;case"failed":if(M||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){a=k,I();return}if(M){a=k,h.length||(i.length?z():I());return}if(x(),w(),!t.random){const v=t.resources.indexOf(p.resource);v!==-1&&v!==t.index&&(t.index=v)}l="completed",m.forEach(v=>{v(k)})}function z(){if(l!=="pending")return;x();const p=i.shift();if(p===void 0){if(h.length){d=setTimeout(()=>{x(),l==="pending"&&(w(),I())},t.timeout);return}I();return}const b={status:"pending",resource:p,callback:(k,M)=>{y(b,k,M)}};h.push(b),f++,d=setTimeout(z,t.rotate),n(p,e,b.callback)}return setTimeout(z),C}function Ct(t){const e={...pe,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=he(e,c,l,(d,h)=>{r(),f&&f(d,h)});return n.push(a),a}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function ct(){}const q=Object.create(null);function ge(t){if(!q[t]){const e=Z(t);if(!e)return;const n=Ct(e),r={config:e,redundancy:n};q[t]=r}return q[t]}function me(t,e,n){let r,o;if(typeof t=="string"){const s=$(t);if(!s)return n(void 0,424),ct;o=s.send;const i=ge(t);i&&(r=i.redundancy)}else{const s=X(t);if(s){r=Ct(s);const i=t.resources?t.resources[0]:"",c=$(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),ct):r.query(e,o,n)().abort}const lt="iconify2",E="iconify",kt=E+"-count",ft=E+"-version",Tt=36e5,ye=168,be=50;function H(t,e){try{return t.getItem(e)}catch{}}function tt(t,e,n){try{return t.setItem(e,n),!0}catch{}}function at(t,e){try{t.removeItem(e)}catch{}}function G(t,e){return tt(t,kt,e.toString())}function K(t){return parseInt(H(t,kt))||0}const B={local:!0,session:!0},jt={local:new Set,session:new Set};let et=!1;function we(t){et=t}let O=typeof window>"u"?{}:window;function Pt(t){const e=t+"Storage";try{if(O&&O[e]&&typeof O[e].length=="number")return O[e]}catch{}B[t]=!1}function Et(t,e){const n=Pt(t);if(!n)return;const r=H(n,ft);if(r!==lt){if(r){const c=K(n);for(let l=0;l<c;l++)at(n,E+l.toString())}tt(n,ft,lt),G(n,0);return}const o=Math.floor(Date.now()/Tt)-ye,s=c=>{const l=E+c.toString(),f=H(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&e(a,c))return!0}catch{}at(n,l)}};let i=K(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,G(n,i)):jt[t].add(c))}function Lt(){if(!et){we(!0);for(const t in B)Et(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=S(r,o);if(!W(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function xe(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in B)Et(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Ie(t,e){et||Lt();function n(r){let o;if(!B[r]||!(o=Pt(r)))return;const s=jt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=K(o),i>=be||!G(o,i+1))return;const c={cached:Math.floor(Date.now()/Tt),provider:t.provider,data:e};return tt(o,E+i.toString(),JSON.stringify(c))}e.lastModified&&!xe(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function ut(){}function ve(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,fe(t)}))}function Se(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=$(n)))return;s.prepare(n,r,o).forEach(c=>{me(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=W(t,l);if(!f.length)return;const a=t.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),Ie(t,l)}catch(f){console.error(f)}ve(t)})})}))}const Ce=(t,e)=>{const n=de(t,!0,xt()),r=le(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,ut)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===i)return;i=f,c=a,s.push(S(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,h=S(f,a),m=h.pendingIcons||(h.pendingIcons=new Set);m.has(d)||(m.add(d),o[f][a].push(d))}),s.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&Se(l,o[f][a])}),e?ue(e,r,s):ut};function ke(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in It?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Te=/[\s,]+/;function je(t,e){e.split(Te).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Pe(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}function Ee(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Le(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Me(t){return"data:image/svg+xml,"+Le(t)}function Oe(t){return'url("'+Me(t)+'")'}const dt={...vt,inline:!1},Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_e={display:"inline-block"},J={backgroundColor:"currentColor"},Mt={backgroundColor:"transparent"},pt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ht={webkitMask:J,mask:J,background:Mt};for(const t in ht){const e=ht[t];for(const n in pt)e[t+n]=pt[n]}const A={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";A[t+"-flip"]=e,A[t.slice(0,1)+"-flip"]=e,A[t+"Flip"]=e});function gt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const mt=(t,e)=>{const n=ke(dt,e),r={...Fe},o=e.mode||"svg",s={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let g in e){const u=e[g];if(u!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&je(n,u);break;case"color":s.color=u;break;case"rotate":typeof u=="string"?n[g]=Pe(u):typeof u=="number"&&(n[g]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete r["aria-hidden"];break;default:{const C=A[g];C?(u===!0||u==="true"||u===1)&&(n[C]=!0):dt[g]===void 0&&(r[g]=u)}}}const l=Kt(t,n),f=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,f);let g=0,u=e.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),r.innerHTML=Yt(l.body,u?()=>u+"ID"+g++:"iconifyVue"),nt("svg",r)}const{body:a,width:d,height:h}=t,m=o==="mask"||(o==="bg"?!1:a.indexOf("currentColor")!==-1),x=Ee(a,{...f,width:d+"",height:h+""});return r.style={...s,"--svg":Oe(x),width:gt(f.width),height:gt(f.height),..._e,...m?J:Mt,...c},nt("span",r)};xt(!0);Zt("",ce);if(typeof document<"u"&&typeof window<"u"){Lt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Vt(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;te(n,o)||console.error(r)}catch{console.error(r)}}}}const Ae={...R,body:""},Ne=Ot({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=N(t,!1,!0))===null)return this.abortLoading(),null;const r=Bt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Ce([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!e)return mt(Ae,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),mt({...R,...e.data},n)}}),Re=L("/logos/nasdaq-dark-logo.svg"),Be=L("/logos/volkswagen-dark-logo.svg"),ze=L("/logos/box-dark-logo.svg"),Ve=L("/logos/netapp-dark-logo.svg"),qe=L("/logos/eventbrite-dark-logo.svg");export{Ne as I,Re as _,Be as a,ze as b,Ve as c,qe as d};