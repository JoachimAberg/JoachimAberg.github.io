(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const We=(e,t)=>e===t,se=Symbol("solid-proxy"),X={equals:We};let ke=Ce;const $=1,G=2,me={owned:null,cleanups:null,context:null,owner:null};var g=null;let te=null,p=null,A=null,R=null,Y=0;function we(e,t){const n=p,r=g,s=e.length===0,o=s?me:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>x(()=>Z(o)));g=o,p=null;try{return _(l,!0)}finally{p=n,g=r}}function D(e,t){t=t?Object.assign({},X,t):X;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Pe(n,s));return[Se.bind(n),r]}function j(e,t,n){const r=xe(e,t,!1,$);z(r)}function S(e,t,n){n=n?Object.assign({},X,n):X;const r=xe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),Se.bind(r)}function x(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function ve(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o){o=!1;return}const c=x(()=>t(i,s,l));return s=i,c}}function be(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function He(){return g}function Ve(e,t){const n=g,r=p;g=e,p=null;try{return _(t,!0)}catch(s){ce(s)}finally{g=n,p=r}}function Xe(e){const t=p,n=g;return Promise.resolve().then(()=>{p=t,g=n;let r;return _(e,!1),p=g=null,r?r.done:void 0})}function Ae(e,t){const n=Symbol("context");return{id:n,Provider:Qe(n),defaultValue:e}}function le(e){let t;return(t=Re(g,e.id))!==void 0?t:e.defaultValue}function ue(e){const t=S(e),n=S(()=>oe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Se(){if(this.sources&&this.state)if(this.state===$)z(this);else{const e=A;A=null,_(()=>J(this),!1),A=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Pe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=te&&te.running;l&&te.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?A.push(o):R.push(o),o.observers&&Oe(o)),l||(o.state=$)}if(A.length>1e6)throw A=[],new Error},!1)),t}function z(e){if(!e.fn)return;Z(e);const t=g,n=p,r=Y;p=g=e,Ge(e,e.value,r),p=n,g=t}function Ge(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=$,e.owned&&e.owned.forEach(Z),e.owned=null),e.updatedAt=n+1,ce(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,r):e.value=r,e.updatedAt=n)}function xe(e,t,n,r=$,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==me&&(g.owned?g.owned.push(o):g.owned=[o]),o}function Ee(e){if(e.state===0)return;if(e.state===G)return J(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===$)z(e);else if(e.state===G){const r=A;A=null,_(()=>J(e,t[0]),!1),A=r}}function _(e,t){if(A)return e();let n=!1;t||(A=[]),R?n=!0:R=[],Y++;try{const r=e();return Je(n),r}catch(r){n||(R=null),A=null,ce(r)}}function Je(e){if(A&&(Ce(A),A=null),e)return;const t=R;R=null,t.length&&_(()=>ke(t),!1)}function Ce(e){for(let t=0;t<e.length;t++)Ee(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===$?r!==t&&(!r.updatedAt||r.updatedAt<Y)&&Ee(r):s===G&&J(r,t)}}}function Oe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=G,n.pure?A.push(n):R.push(n),n.observers&&Oe(n))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ce(e){throw e}function Re(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Re(e.owner,t):void 0}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=oe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Qe(e,t){return function(r){let s;return j(()=>s=x(()=>(g.context={[e]:r.value},ue(()=>r.children))),void 0),s}}function P(e,t){return x(()=>e(t||{}))}function H(){return!0}const Ye={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function ze(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ze(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&se in l,e[o]=typeof l=="function"?(t=!0,S(l)):l}if(t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const i=ne(e[l])[o];if(i!==void 0)return i}},has(o){for(let l=e.length-1;l>=0;l--)if(o in ne(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(ne(e[l])));return[...new Set(o)]}},Ye);const n={},r={};let s=!1;for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const i=Object.getOwnPropertyNames(l);s=s||o!==0&&!!i.length;for(let c=0,a=i.length;c<a;c++){const u=i[c];if(!(u==="__proto__"||u==="constructor"))if(u in n){const h=r[u],f=Object.getOwnPropertyDescriptor(l,u);h?f.get?h.push(f.get.bind(l)):f.value!==void 0&&h.push(()=>f.value):n[u]===void 0&&(n[u]=f.value)}else{const h=Object.getOwnPropertyDescriptor(l,u);h.get?Object.defineProperty(n,u,{enumerable:!0,configurable:!0,get:ze.bind(r[u]=[h.get.bind(l)])}):n[u]=h.value}}}return n}const et=e=>`Stale read from <${e}>.`;function $e(e){const t=e.keyed,n=S(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return S(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?x(()=>s(t?r:()=>{if(!x(n))throw et("Show");return e.when})):s}return e.fallback},void 0,void 0)}function tt(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,c=t[s-1].nextSibling,a=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!a){a=new Map;let h=i;for(;h<o;)a.set(n[h],h++)}const u=a.get(t[l]);if(u!=null)if(i<u&&u<o){let h=l,f=1,w;for(;++h<s&&h<o&&!((w=a.get(t[h]))==null||w!==u+f);)f++;if(f>u-i){const v=t[l];for(;i<u;)e.insertBefore(n[i++],v)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const de="_$DX_DELEGATE";function nt(e,t,n,r={}){let s;return we(o=>{s=o,t===document?e():_e(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function rt(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},o=t?()=>x(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function st(e,t=window.document){const n=t[de]||(t[de]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,ot))}}function pe(e,t){t==null?e.removeAttribute("class"):e.className=t}function _e(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Q(e,t,r,n);j(s=>Q(e,t(),s,n),r)}function ot(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=N(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=N(e,n,r);else{if(o==="function")return j(()=>{let i=t();for(;typeof i=="function";)i=i();n=Q(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(ie(i,t,n,s))return j(()=>n=Q(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=N(e,n,r),l)return n}else c?n.length===0?ge(e,i,r):tt(e,n,i):(n&&N(e),ge(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=N(e,n,r,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ie(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[o],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=ie(e,i,c)||s;else if(a==="function")if(r){for(;typeof i=="function";)i=i();s=ie(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const u=String(i);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function ge(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function N(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const it=!1;function Le(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function lt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function ut(e){try{return document.querySelector(e)}catch{return null}}function Te(e,t){const n=ut(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Ne(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=lt(D(o(e()),{equals:(i,c)=>i.value===c.value}),void 0,i=>(!s&&t(i),i));return n&&be(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function ct(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:D({value:""})};return e}function at(){return Ne(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Te(window.location.hash.slice(1),n)},e=>Le(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function ft(){return Ne(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"","#"+e):window.location.hash=e;const s=e.indexOf("#"),o=s>=0?e.slice(s+1):"";Te(o,n)},e=>Le(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function ht(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const dt=/^(?:[a-z0-9]+:)?\/\//i,pt=/^\/+|(\/)\/+$/g;function K(e,t=!1){const n=e.replace(pt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function V(e,t,n){if(dt.test(t))return;const r=K(e),s=n&&K(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+K(t,!o)}function gt(e,t){if(e==null)throw new Error(t);return e}function je(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function yt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function mt(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),a=c.length-l;if(a<0||a>0&&s===void 0&&!t)return null;const u={path:l?"":"/",params:{}},h=f=>n===void 0?void 0:n[f];for(let f=0;f<l;f++){const w=o[f],v=c[f],m=w[0]===":",O=m?w.slice(1):w;if(m&&re(v,h(O)))u.params[O]=v;else if(m||!re(v,w))return null;u.path+=`/${v}`}if(s){const f=a?c.slice(-a).join("/"):"";if(re(f,h(s)))u.params[s]=f;else return null}return u}}function re(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function wt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function qe(e){const t=new Map,n=He();return new Proxy({},{get(r,s){return t.has(s)||Ve(n,()=>t.set(s,S(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Be(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Be(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const vt=100,Ie=Ae(),ee=Ae(),De=()=>gt(le(Ie),"Make sure your app is wrapped in a <Router />");let U;const ae=()=>U||le(ee)||De().base,bt=()=>ae().params;function At(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>P(r,{}):()=>{const{element:c}=e;return c===void 0&&n?P(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return Ke(e.path).reduce((c,a)=>{for(const u of Be(a)){const h=je(t,u),f=l?h:h.split("/*",1)[0];c.push({...i,originalPath:u,pattern:f,matcher:mt(f,!l,e.matchFilters)})}return c},[])}function St(e,t=0){return{routes:e,score:wt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function Ke(e){return Array.isArray(e)?e:[e]}function Ue(e,t="",n,r=[],s=[]){const o=Ke(e);for(let l=0,i=o.length;l<i;l++){const c=o[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const a=At(c,t,n);for(const u of a){r.push(u);const h=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!h)Ue(c.children,u.pattern,n,r,s);else{const f=St([...r],s.length);s.push(f)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function Pt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function xt(e,t){const n=new URL("http://sar"),r=S(c=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),c}},n,{equals:(c,a)=>c.href===a.href}),s=S(()=>r().pathname),o=S(()=>r().search,!0),l=S(()=>r().hash),i=S(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:qe(ve(o,()=>yt(r())))}}function Et(e,t="",n,r){const{signal:[s,o],utils:l={}}=ct(e),i=l.parsePath||(y=>y),c=l.renderPath||(y=>y),a=l.beforeLeave||ht(),u=V("",t),h=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[f,w]=D(!1),v=async y=>{w(!0);try{await Xe(y)}finally{w(!1)}},[m,O]=D(s().value),[L,F]=D(s().state),M=xt(m,L),q=[],T={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(y){return V(u,y)}};if(n)try{U=T,T.data=n({data:void 0,params:{},location:M,navigate:he(T)})}finally{U=void 0}function fe(y,d,b){x(()=>{if(typeof d=="number"){d&&(l.go?a.confirm(d,b)&&l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:W,resolve:k,scroll:E,state:B}={replace:!1,resolve:!0,scroll:!0,...b},C=k?y.resolvePath(d):V("",d);if(C===void 0)throw new Error(`Path '${d}' is not a routable path`);if(q.length>=vt)throw new Error("Too many redirects");const I=m();if((C!==I||B!==L())&&!it){if(a.confirm(C,b)){const Me=q.push({value:I,replace:W,scroll:E,state:L()});v(()=>{O(C),F(B)}).then(()=>{q.length===Me&&Fe({value:C,state:B})})}}})}function he(y){return y=y||le(ee)||T,(d,b)=>fe(y,d,b)}function Fe(y){const d=q[0];d&&((y.value!==d.value||y.state!==d.state)&&o({...y,replace:d.replace,scroll:d.scroll}),q.length=0)}j(()=>{const{value:y,state:d}=s();x(()=>{y!==m()&&v(()=>{O(y),F(d)})})});{let y=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const b=d.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!b||!b.hasAttribute("link"))return;const W=b.href;if(b.target||!W&&!b.hasAttribute("state"))return;const k=(b.getAttribute("rel")||"").split(/\s+/);if(b.hasAttribute("download")||k&&k.includes("external"))return;const E=new URL(W);if(E.origin!==window.location.origin||u&&E.pathname&&!E.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const B=i(E.pathname+E.search+E.hash),C=b.getAttribute("state");d.preventDefault(),fe(T,B,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:C&&JSON.parse(C)})};var Bt=y;st(["click"]),document.addEventListener("click",y),be(()=>document.removeEventListener("click",y))}return{base:T,out:h,location:M,isRouting:f,renderPath:c,parsePath:i,navigatorFactory:he,beforeLeave:a}}function Ct(e,t,n,r,s){const{base:o,location:l,navigatorFactory:i}=e,{pattern:c,element:a,preload:u,data:h}=r().route,f=S(()=>r().path);u&&u();const w={parent:t,pattern:c,get child(){return n()},path:f,params:s,data:t.data,outlet:a,resolvePath(v){return V(o.path(),v,f())}};if(h)try{U=w,w.data=h({data:t.data,params:s,location:l,navigate:i(w)})}finally{U=void 0}return w}const Ot=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||at(),i=Et(l,r,s);return P(Ie.Provider,{value:i,get children(){return e.children}})},Rt=e=>{const t=De(),n=ae(),r=ue(()=>e.children),s=S(()=>Ue(r(),je(n.pattern,e.base||""),_t)),o=S(()=>Pt(s(),t.location.pathname)),l=qe(()=>{const u=o(),h={};for(let f=0;f<u.length;f++)Object.assign(h,u[f].params);return h});t.out&&t.out.matches.push(o().map(({route:u,path:h,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:h,params:f})));const i=[];let c;const a=S(ve(o,(u,h,f)=>{let w=h&&u.length===h.length;const v=[];for(let m=0,O=u.length;m<O;m++){const L=h&&h[m],F=u[m];f&&L&&F.route.key===L.route.key?v[m]=f[m]:(w=!1,i[m]&&i[m](),we(M=>{i[m]=M,v[m]=Ct(t,v[m-1]||n,()=>a()[m+1],()=>o()[m],l)}))}return i.splice(u.length).forEach(m=>m()),f&&w?f:(c=v[0],v)}));return P($e,{get when(){return a()&&c},keyed:!0,children:u=>P(ee.Provider,{value:u,get children(){return u.outlet()}})})},$t=e=>{const t=ue(()=>e.children);return Ze(e,{get children(){return t()}})},_t=()=>{const e=ae();return P($e,{get when(){return e.child},keyed:!0,children:t=>P(ee.Provider,{value:t,get children(){return t.outlet()}})})};const Lt="_main_1iqrh_1",Tt="_wave_1iqrh_5",ye={main:Lt,wave:Tt,"wave-animation":"_wave-animation_1iqrh_1"},Nt=rt("<div><h1>Hallå <!> <span>👋"),jt=()=>{const e=bt();return(()=>{const t=Nt(),n=t.firstChild,r=n.firstChild,s=r.nextSibling,o=s.nextSibling,l=o.nextSibling;return _e(n,()=>e.namn??"Världen",s),j(i=>{const c=ye.main,a=ye.wave;return c!==i._v$&&pe(t,i._v$=c),a!==i._v$2&&pe(l,i._v$2=a),i},{_v$:void 0,_v$2:void 0}),t})()},qt=document.getElementById("root");nt(()=>P(Ot,{get source(){return ft()},get children(){return P(Rt,{get children(){return P($t,{path:"/:namn?",component:jt})}})}}),qt);