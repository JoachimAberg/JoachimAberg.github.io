(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const De=(e,t)=>e===t,se=Symbol("solid-proxy"),X={equals:De};let Ke=xe;const L=1,G=2,ge={owned:null,cleanups:null,context:null,owner:null};var g=null;let te=null,p=null,A=null,O=null,Y=0;function ye(e,t){const n=p,r=g,s=e.length===0,o=s?ge:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},i=s?e:()=>e(()=>x(()=>Z(o)));g=o,p=null;try{return T(i,!0)}finally{p=n,g=r}}function D(e,t){t=t?Object.assign({},X,t):X;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Ae(n,s));return[ve.bind(n),r]}function B(e,t,n){const r=Pe(e,t,!1,L);z(r)}function P(e,t,n){n=n?Object.assign({},X,n):X;const r=Pe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,z(r),ve.bind(r)}function x(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function me(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let a=0;a<e.length;a++)l[a]=e[a]()}else l=e();if(o){o=!1;return}const c=x(()=>t(l,s,i));return s=l,c}}function we(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Ue(){return g}function Fe(e,t){const n=g,r=p;g=e,p=null;try{return T(t,!0)}catch(s){ce(s)}finally{g=n,p=r}}function Me(e){const t=p,n=g;return Promise.resolve().then(()=>{p=t,g=n;let r;return T(e,!1),p=g=null,r?r.done:void 0})}function be(e,t){const n=Symbol("context");return{id:n,Provider:He(n),defaultValue:e}}function le(e){let t;return(t=Ce(g,e.id))!==void 0?t:e.defaultValue}function ue(e){const t=P(e),n=P(()=>oe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function ve(){if(this.sources&&this.state)if(this.state===L)z(this);else{const e=A;A=null,T(()=>J(this),!1),A=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function Ae(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=te&&te.running;i&&te.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?A.push(o):O.push(o),o.observers&&Ee(o)),i||(o.state=L)}if(A.length>1e6)throw A=[],new Error},!1)),t}function z(e){if(!e.fn)return;Z(e);const t=g,n=p,r=Y;p=g=e,ke(e,e.value,r),p=n,g=t}function ke(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=L,e.owned&&e.owned.forEach(Z),e.owned=null),e.updatedAt=n+1,ce(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ae(e,r):e.value=r,e.updatedAt=n)}function Pe(e,t,n,r=L,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==ge&&(g.owned?g.owned.push(o):g.owned=[o]),o}function Se(e){if(e.state===0)return;if(e.state===G)return J(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===L)z(e);else if(e.state===G){const r=A;A=null,T(()=>J(e,t[0]),!1),A=r}}function T(e,t){if(A)return e();let n=!1;t||(A=[]),O?n=!0:O=[],Y++;try{const r=e();return We(n),r}catch(r){n||(O=null),A=null,ce(r)}}function We(e){if(A&&(xe(A),A=null),e)return;const t=O;O=null,t.length&&T(()=>Ke(t),!1)}function xe(e){for(let t=0;t<e.length;t++)Se(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===L?r!==t&&(!r.updatedAt||r.updatedAt<Y)&&Se(r):s===G&&J(r,t)}}}function Ee(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=G,n.pure?A.push(n):O.push(n),n.observers&&Ee(n))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ce(e){throw e}function Ce(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ce(e.owner,t):void 0}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=oe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function He(e,t){return function(r){let s;return B(()=>s=x(()=>(g.context={[e]:r.value},ue(()=>r.children))),void 0),s}}function S(e,t){return x(()=>e(t||{}))}function H(){return!0}const Ve={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function Xe(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ge(...e){let t=!1;for(let o=0;o<e.length;o++){const i=e[o];t=t||!!i&&se in i,e[o]=typeof i=="function"?(t=!0,P(i)):i}if(t)return new Proxy({get(o){for(let i=e.length-1;i>=0;i--){const l=ne(e[i])[o];if(l!==void 0)return l}},has(o){for(let i=e.length-1;i>=0;i--)if(o in ne(e[i]))return!0;return!1},keys(){const o=[];for(let i=0;i<e.length;i++)o.push(...Object.keys(ne(e[i])));return[...new Set(o)]}},Ve);const n={},r={};let s=!1;for(let o=e.length-1;o>=0;o--){const i=e[o];if(!i)continue;const l=Object.getOwnPropertyNames(i);s=s||o!==0&&!!l.length;for(let c=0,a=l.length;c<a;c++){const u=l[c];if(!(u==="__proto__"||u==="constructor"))if(u in n){const h=r[u],f=Object.getOwnPropertyDescriptor(i,u);h?f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value):n[u]===void 0&&(n[u]=f.value)}else{const h=Object.getOwnPropertyDescriptor(i,u);h.get?Object.defineProperty(n,u,{enumerable:!0,configurable:!0,get:Xe.bind(r[u]=[h.get.bind(i)])}):n[u]=h.value}}}return n}const Je=e=>`Stale read from <${e}>.`;function Re(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return P(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?x(()=>s(t?r:()=>{if(!x(n))throw Je("Show");return e.when})):s}return e.fallback},void 0,void 0)}function Qe(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,c=t[s-1].nextSibling,a=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const u=o<r?l?n[l-1].nextSibling:n[o-l]:c;for(;l<o;)e.insertBefore(n[l++],u)}else if(o===l)for(;i<s;)(!a||!a.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!a){a=new Map;let h=l;for(;h<o;)a.set(n[h],h++)}const u=a.get(t[i]);if(u!=null)if(l<u&&u<o){let h=i,f=1,w;for(;++h<s&&h<o&&!((w=a.get(t[h]))==null||w!==u+f);)f++;if(f>u-l){const b=t[i];for(;l<u;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const de="_$DX_DELEGATE";function Ye(e,t,n,r={}){let s;return ye(o=>{s=o,t===document?e():Oe(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function ze(e,t,n){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},o=t?()=>x(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function Ze(e,t=window.document){const n=t[de]||(t[de]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,tt))}}function et(e,t){t==null?e.removeAttribute("class"):e.className=t}function Oe(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Q(e,t,r,n);B(s=>Q(e,t(),s,n),r)}function tt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=j(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=j(e,n,r);else{if(o==="function")return B(()=>{let l=t();for(;typeof l=="function";)l=l();n=Q(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(ie(l,t,n,s))return B(()=>n=Q(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=j(e,n,r),i)return n}else c?n.length===0?pe(e,l,r):Qe(e,n,l):(n&&j(e),pe(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=j(e,n,r,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ie(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let l=t[o],c=n&&n[o],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=ie(e,l,c)||s;else if(a==="function")if(r){for(;typeof l=="function";)l=l();s=ie(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else e.push(l),s=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function pe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function j(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const c=l.parentNode===e;!o&&!i?c?e.replaceChild(s,l):e.insertBefore(s,n):c&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const nt=!1;function rt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function st([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function ot(e){try{return document.querySelector(e)}catch{return null}}function it(e,t){const n=ot(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function lt(e,t,n,r){let s=!1;const o=l=>typeof l=="string"?{value:l}:l,i=st(D(o(e()),{equals:(l,c)=>l.value===c.value}),void 0,l=>(!s&&t(l),l));return n&&we(n((l=e())=>{s=!0,i[1](o(l)),s=!1})),{signal:i,utils:r}}function ut(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:D({value:""})};return e}function ct(){return lt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),it(window.location.hash.slice(1),n)},e=>rt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function at(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:c=>{c&&(n=!0),l.navigate(s,o)}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}const ft=/^(?:[a-z0-9]+:)?\/\//i,ht=/^\/+|(\/)\/+$/g;function K(e,t=!1){const n=e.replace(ht,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function V(e,t,n){if(ft.test(t))return;const r=K(e),s=n&&K(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+K(t,!o)}function dt(e,t){if(e==null)throw new Error(t);return e}function Le(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function pt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function gt(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return l=>{const c=l.split("/").filter(Boolean),a=c.length-i;if(a<0||a>0&&s===void 0&&!t)return null;const u={path:i?"":"/",params:{}},h=f=>n===void 0?void 0:n[f];for(let f=0;f<i;f++){const w=o[f],b=c[f],m=w[0]===":",R=m?w.slice(1):w;if(m&&re(b,h(R)))u.params[R]=b;else if(m||!re(b,w))return null;u.path+=`/${b}`}if(s){const f=a?c.slice(-a).join("/"):"";if(re(f,h(s)))u.params[s]=f;else return null}return u}}function re(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function yt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Te(e){const t=new Map,n=Ue();return new Proxy({},{get(r,s){return t.has(s)||Fe(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ne(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Ne(r).reduce((o,i)=>[...o,...s.map(l=>l+i)],[])}const mt=100,$e=be(),ee=be(),je=()=>dt(le($e),"Make sure your app is wrapped in a <Router />");let U;const ae=()=>U||le(ee)||je().base,wt=()=>ae().params;function bt(e,t="",n){const{component:r,data:s,children:o}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,element:r?()=>S(r,{}):()=>{const{element:c}=e;return c===void 0&&n?S(n,{}):c},preload:e.component?r.preload:e.preload,data:s};return Be(e.path).reduce((c,a)=>{for(const u of Ne(a)){const h=Le(t,u),f=i?h:h.split("/*",1)[0];c.push({...l,originalPath:u,pattern:f,matcher:gt(f,!i,e.matchFilters)})}return c},[])}function vt(e,t=0){return{routes:e,score:yt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function Be(e){return Array.isArray(e)?e:[e]}function _e(e,t="",n,r=[],s=[]){const o=Be(e);for(let i=0,l=o.length;i<l;i++){const c=o[i];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const a=bt(c,t,n);for(const u of a){r.push(u);const h=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!h)_e(c.children,u.pattern,n,r,s);else{const f=vt([...r],s.length);s.push(f)}r.pop()}}}return r.length?s:s.sort((i,l)=>l.score-i.score)}function At(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Pt(e,t){const n=new URL("http://sar"),r=P(c=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),c}},n,{equals:(c,a)=>c.href===a.href}),s=P(()=>r().pathname),o=P(()=>r().search,!0),i=P(()=>r().hash),l=P(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Te(me(o,()=>pt(r())))}}function St(e,t="",n,r){const{signal:[s,o],utils:i={}}=ut(e),l=i.parsePath||(y=>y),c=i.renderPath||(y=>y),a=i.beforeLeave||at(),u=V("",t),h=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[f,w]=D(!1),b=async y=>{w(!0);try{await Me(y)}finally{w(!1)}},[m,R]=D(s().value),[N,F]=D(s().state),M=Pt(m,N),_=[],$={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(y){return V(u,y)}};if(n)try{U=$,$.data=n({data:void 0,params:{},location:M,navigate:he($)})}finally{U=void 0}function fe(y,d,v){x(()=>{if(typeof d=="number"){d&&(i.go?a.confirm(d,v)&&i.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:k,resolve:W,scroll:E,state:q}={replace:!1,resolve:!0,scroll:!0,...v},C=W?y.resolvePath(d):V("",d);if(C===void 0)throw new Error(`Path '${d}' is not a routable path`);if(_.length>=mt)throw new Error("Too many redirects");const I=m();if((C!==I||q!==N())&&!nt){if(a.confirm(C,v)){const Ie=_.push({value:I,replace:k,scroll:E,state:N()});b(()=>{R(C),F(q)}).then(()=>{_.length===Ie&&qe({value:C,state:q})})}}})}function he(y){return y=y||le(ee)||$,(d,v)=>fe(y,d,v)}function qe(y){const d=_[0];d&&((y.value!==d.value||y.state!==d.state)&&o({...y,replace:d.replace,scroll:d.scroll}),_.length=0)}B(()=>{const{value:y,state:d}=s();x(()=>{y!==m()&&b(()=>{R(y),F(d)})})});{let y=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const v=d.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!v||!v.hasAttribute("link"))return;const k=v.href;if(v.target||!k&&!v.hasAttribute("state"))return;const W=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||W&&W.includes("external"))return;const E=new URL(k);if(E.origin!==window.location.origin||u&&E.pathname&&!E.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const q=l(E.pathname+E.search+E.hash),C=v.getAttribute("state");d.preventDefault(),fe($,q,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:C&&JSON.parse(C)})};var Bt=y;Ze(["click"]),document.addEventListener("click",y),we(()=>document.removeEventListener("click",y))}return{base:$,out:h,location:M,isRouting:f,renderPath:c,parsePath:l,navigatorFactory:he,beforeLeave:a}}function xt(e,t,n,r,s){const{base:o,location:i,navigatorFactory:l}=e,{pattern:c,element:a,preload:u,data:h}=r().route,f=P(()=>r().path);u&&u();const w={parent:t,pattern:c,get child(){return n()},path:f,params:s,data:t.data,outlet:a,resolvePath(b){return V(o.path(),b,f())}};if(h)try{U=w,w.data=h({data:t.data,params:s,location:i,navigate:l(w)})}finally{U=void 0}return w}const Et=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,i=t||ct(),l=St(i,r,s);return S($e.Provider,{value:l,get children(){return e.children}})},Ct=e=>{const t=je(),n=ae(),r=ue(()=>e.children),s=P(()=>_e(r(),Le(n.pattern,e.base||""),Ot)),o=P(()=>At(s(),t.location.pathname)),i=Te(()=>{const u=o(),h={};for(let f=0;f<u.length;f++)Object.assign(h,u[f].params);return h});t.out&&t.out.matches.push(o().map(({route:u,path:h,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:h,params:f})));const l=[];let c;const a=P(me(o,(u,h,f)=>{let w=h&&u.length===h.length;const b=[];for(let m=0,R=u.length;m<R;m++){const N=h&&h[m],F=u[m];f&&N&&F.route.key===N.route.key?b[m]=f[m]:(w=!1,l[m]&&l[m](),ye(M=>{l[m]=M,b[m]=xt(t,b[m-1]||n,()=>a()[m+1],()=>o()[m],i)}))}return l.splice(u.length).forEach(m=>m()),f&&w?f:(c=b[0],b)}));return S(Re,{get when(){return a()&&c},keyed:!0,children:u=>S(ee.Provider,{value:u,get children(){return u.outlet()}})})},Rt=e=>{const t=ue(()=>e.children);return Ge(e,{get children(){return t()}})},Ot=()=>{const e=ae();return S(Re,{get when(){return e.child},keyed:!0,children:t=>S(ee.Provider,{value:t,get children(){return t.outlet()}})})};const Lt="_main_17foe_1",Tt={main:Lt},Nt=ze("<div><h1>Hallå "),$t=()=>{const e=wt();return(()=>{const t=Nt(),n=t.firstChild;return n.firstChild,Oe(n,()=>e.namn??"Världen",null),B(()=>et(t,Tt.main)),t})()},jt=document.getElementById("root");Ye(()=>S(Et,{get children(){return S(Ct,{get children(){return S(Rt,{path:"/:namn?",component:$t})}})}}),jt);