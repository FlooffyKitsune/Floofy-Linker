import{s as at,l as K,i as et,n as Q,f as _,k as W,e as d,t as S,a as P,c as b,b as g,d as H,g as N,m as Z,o as h,h as n,D as rt,j as I}from"../chunks/scheduler.v4c2umFH.js";import{S as st,i as ot}from"../chunks/index.3VQIyI8a.js";import{p as lt}from"../chunks/stores.JTTrptLV.js";import{p as nt,i as it,a as ct}from"../chunks/entry.Dh5W7N9l.js";import{c as ut}from"../chunks/firebase.BUtuNcO3.js";function mt(r){const e=JSON.parse(r);return e.data&&(e.data=nt(e.data)),e}function $(r){return HTMLElement.prototype.cloneNode.call(r)}function ft(r,e=()=>{}){const a=async({action:t,result:l,reset:o=!0,invalidateAll:f=!0})=>{l.type==="success"&&(o&&HTMLFormElement.prototype.reset.call(r),f&&await it()),(location.origin+location.pathname===t.origin+t.pathname||l.type==="redirect"||l.type==="error")&&ct(l)};async function u(t){var y,x,M,m;if(((y=t.submitter)!=null&&y.hasAttribute("formmethod")?t.submitter.formMethod:$(r).method)!=="post")return;t.preventDefault();const o=new URL((x=t.submitter)!=null&&x.hasAttribute("formaction")?t.submitter.formAction:$(r).action),f=new FormData(r),v=(M=t.submitter)==null?void 0:M.getAttribute("name");v&&f.append(v,((m=t.submitter)==null?void 0:m.getAttribute("value"))??"");const C=new AbortController;let E=!1;const D=await e({action:o,cancel:()=>E=!0,controller:C,formData:f,formElement:r,submitter:t.submitter})??a;if(E)return;let c;try{const s=await fetch(o,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:f,signal:C.signal});c=mt(await s.text()),c.type==="error"&&(c.status=s.status)}catch(s){if((s==null?void 0:s.name)==="AbortError")return;c={type:"error",error:s}}D({action:o,formData:f,formElement:r,update:s=>a({action:o,result:c,reset:s==null?void 0:s.reset,invalidateAll:s==null?void 0:s.invalidateAll}),result:c})}return HTMLFormElement.prototype.addEventListener.call(r,"submit",u),{destroy(){HTMLFormElement.prototype.removeEventListener.call(r,"submit",u)}}}function tt(r){var X;let e,a,u,t,l=r[0].bio+"",o,f,v,C,E=r[2].status+"",w,D,c,y=(((X=r[2].form)==null?void 0:X.problem)??"")+"",x,M,m,s,A,z='<span class="label-text">Your bio</span>',R,T,B,U,L,J="Update Bio",j,V;return{c(){e=d("main"),a=d("p"),u=S("Current Bio: "),t=d("span"),o=S(l),f=P(),v=d("p"),C=S("Status Code: "),w=S(E),D=P(),c=d("p"),x=S(y),M=P(),m=d("form"),s=d("div"),A=d("label"),A.innerHTML=z,R=P(),T=d("textarea"),U=P(),L=d("button"),L.textContent=J,this.h()},l(p){e=b(p,"MAIN",{class:!0});var i=g(e);a=b(i,"P",{});var k=g(a);u=H(k,"Current Bio: "),t=b(k,"SPAN",{class:!0});var Y=g(t);o=H(Y,l),Y.forEach(_),k.forEach(_),f=N(i),v=b(i,"P",{});var q=g(v);C=H(q,"Status Code: "),w=H(q,E),q.forEach(_),D=N(i),c=b(i,"P",{class:!0});var G=g(c);x=H(G,y),G.forEach(_),M=N(i),m=b(i,"FORM",{method:!0});var F=g(m);s=b(F,"DIV",{class:!0});var O=g(s);A=b(O,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),Z(A)!=="svelte-18mmhtu"&&(A.innerHTML=z),R=N(O),T=b(O,"TEXTAREA",{name:!0,class:!0}),g(T).forEach(_),O.forEach(_),U=N(F),L=b(F,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(L)!=="svelte-tqnit3"&&(L.textContent=J),F.forEach(_),i.forEach(_),this.h()},h(){h(t,"class","text-info"),h(c,"class","text-error"),h(A,"for","bio"),h(A,"class","label"),h(T,"name","bio"),h(T,"class","textarea textarea-bordered textarea-accent"),T.value=B=r[0].bio,h(s,"class","form-control"),h(L,"class","btn btn-primary my-5"),h(m,"method","POST"),h(e,"class","max-w-lg prose text-center mx-auto my-6")},m(p,i){et(p,e,i),n(e,a),n(a,u),n(a,t),n(t,o),n(e,f),n(e,v),n(v,C),n(v,w),n(e,D),n(e,c),n(c,x),n(e,M),n(e,m),n(m,s),n(s,A),n(s,R),n(s,T),n(m,U),n(m,L),j||(V=rt(ft.call(null,m)),j=!0)},p(p,i){var k;i&1&&l!==(l=p[0].bio+"")&&I(o,l),i&4&&E!==(E=p[2].status+"")&&I(w,E),i&4&&y!==(y=(((k=p[2].form)==null?void 0:k.problem)??"")+"")&&I(x,y),i&1&&B!==(B=p[0].bio)&&(T.value=B)},d(p){p&&_(e),j=!1,V()}}}function pt(r){var u;let e,a=((u=r[1])==null?void 0:u.username)==r[2].params.username&&tt(r);return{c(){a&&a.c(),e=K()},l(t){a&&a.l(t),e=K()},m(t,l){a&&a.m(t,l),et(t,e,l)},p(t,[l]){var o;((o=t[1])==null?void 0:o.username)==t[2].params.username?a?a.p(t,l):(a=tt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:Q,o:Q,d(t){t&&_(e),a&&a.d(t)}}}function dt(r,e,a){let u,t;W(r,ut,o=>a(1,u=o)),W(r,lt,o=>a(2,t=o));let{data:l}=e;return r.$$set=o=>{"data"in o&&a(0,l=o.data)},[l,u,t]}class yt extends st{constructor(e){super(),ot(this,e,dt,pt,at,{data:0})}}export{yt as component};
