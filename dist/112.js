(self.webpackChunkcolor_admin=self.webpackChunkcolor_admin||[]).push([[112],{4940:le=>{var H={exports:{}};function D(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var i=e[t];"object"==typeof i&&!Object.isFrozen(i)&&D(i)}),e}H.exports=D,H.exports.default=D;class j{constructor(t){void 0===t.data&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function W(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function A(e,...t){const i=Object.create(null);for(const f in e)i[f]=e[f];return t.forEach(function(f){for(const b in f)i[b]=f[b]}),i}const ue=e=>!!e.scope||e.sublanguage&&e.language;class Ce{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=W(t)}openNode(t){if(!ue(t))return;let i="";i=t.sublanguage?`language-${t.language}`:((e,{prefix:t})=>{if(e.includes(".")){const i=e.split(".");return[`${t}${i.shift()}`,...i.map((f,b)=>`${f}${"_".repeat(b+1)}`)].join(" ")}return`${t}${e}`})(t.scope,{prefix:this.classPrefix}),this.span(i)}closeNode(t){!ue(t)||(this.buffer+="</span>")}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const fe=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class q{constructor(){this.rootNode=fe(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const i=fe({scope:t});this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return"string"==typeof i?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(f=>this._walk(t,f)),t.closeNode(i)),t}static _collapse(t){"string"!=typeof t&&(!t.children||(t.children.every(i=>"string"==typeof i)?t.children=[t.children.join("")]:t.children.forEach(i=>{q._collapse(i)})))}}class Le extends q{constructor(t){super(),this.options=t}addKeyword(t,i){""!==t&&(this.openNode(i),this.addText(t),this.closeNode())}addText(t){""!==t&&this.add(t)}addSublanguage(t,i){const f=t.root;f.sublanguage=!0,f.language=i,this.add(f)}toHTML(){return new Ce(this,this.options).value()}finalize(){return!0}}function U(e){return e?"string"==typeof e?e:e.source:null}function ge(e){return v("(?=",e,")")}function He(e){return v("(?:",e,")*")}function Pe(e){return v("(?:",e,")?")}function v(...e){return e.map(i=>U(i)).join("")}function m(...e){const t=function je(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e);return"("+(t.capture?"":"?:")+e.map(f=>U(f)).join("|")+")"}function he(e){return new RegExp(e.toString()+"|").exec("").length-1}const $e=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ee(e,{joinWith:t}){let i=0;return e.map(f=>{i+=1;const b=i;let _=U(f),c="";for(;_.length>0;){const r=$e.exec(_);if(!r){c+=_;break}c+=_.substring(0,r.index),_=_.substring(r.index+r[0].length),"\\"===r[0][0]&&r[1]?c+="\\"+String(Number(r[1])+b):(c+=r[0],"("===r[0]&&i++)}return c}).map(f=>`(${f})`).join(t)}const de="[a-zA-Z]\\w*",te="[a-zA-Z_]\\w*",pe="\\b\\d+(\\.\\d+)?",Ee="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",be="\\b(0b[01]+)",$={begin:"\\\\[\\s\\S]",relevance:0},Fe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[$]},ze={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[$]},F=function(e,t,i={}){const f=A({scope:"comment",begin:e,end:t,contains:[]},i);f.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const b=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return f.contains.push({begin:v(/[ ]+/,"(",b,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),f},Ye=F("//","$"),Ze=F("/\\*","\\*/"),Je=F("#","$");var z=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:de,UNDERSCORE_IDENT_RE:te,NUMBER_RE:pe,C_NUMBER_RE:Ee,BINARY_NUMBER_RE:be,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=v(t,/.*\b/,e.binary,/\b.*/)),A({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,f)=>{0!==i.index&&f.ignoreMatch()}},e)},BACKSLASH_ESCAPE:$,APOS_STRING_MODE:Fe,QUOTE_STRING_MODE:ze,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:F,C_LINE_COMMENT_MODE:Ye,C_BLOCK_COMMENT_MODE:Ze,HASH_COMMENT_MODE:Je,NUMBER_MODE:{scope:"number",begin:pe,relevance:0},C_NUMBER_MODE:{scope:"number",begin:Ee,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:be,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[$,{begin:/\[/,end:/\]/,relevance:0,contains:[$]}]}]},TITLE_MODE:{scope:"title",begin:de,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:te,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+te,relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})}});function it(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function st(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function rt(e,t){!t||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=it,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function ct(e,t){!Array.isArray(e.illegal)||(e.illegal=m(...e.illegal))}function ot(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function at(e,t){void 0===e.relevance&&(e.relevance=1)}const lt=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const i=Object.assign({},e);Object.keys(e).forEach(f=>{delete e[f]}),e.keywords=i.keywords,e.begin=v(i.beforeMatch,ge(i.begin)),e.starts={relevance:0,contains:[Object.assign(i,{endsParent:!0})]},e.relevance=0,delete i.beforeMatch},ut=["of","and","for","in","not","or","if","then","parent","list","value"];function _e(e,t,i="keyword"){const f=Object.create(null);return"string"==typeof e?b(i,e.split(" ")):Array.isArray(e)?b(i,e):Object.keys(e).forEach(function(_){Object.assign(f,_e(e[_],t,_))}),f;function b(_,c){t&&(c=c.map(r=>r.toLowerCase())),c.forEach(function(r){const l=r.split("|");f[l[0]]=[_,gt(l[0],l[1])]})}}function gt(e,t){return t?Number(t):function ht(e){return ut.includes(e.toLowerCase())}(e)?0:1}const we={},C=e=>{console.error(e)},Me=(e,...t)=>{console.log(`WARN: ${e}`,...t)},P=(e,t)=>{we[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),we[`${e}/${t}`]=!0)},X=new Error;function xe(e,t,{key:i}){let f=0;const b=e[i],_={},c={};for(let r=1;r<=t.length;r++)c[r+f]=b[r],_[r+f]=!0,f+=he(t[r-1]);e[i]=c,e[i]._emit=_,e[i]._multi=!0}function bt(e){(function Et(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function dt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw C("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),X;if("object"!=typeof e.beginScope||null===e.beginScope)throw C("beginScope must be object"),X;xe(e,e.begin,{key:"beginScope"}),e.begin=ee(e.begin,{joinWith:""})}}(e),function pt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw C("skip, excludeEnd, returnEnd not compatible with endScope: {}"),X;if("object"!=typeof e.endScope||null===e.endScope)throw C("endScope must be object"),X;xe(e,e.end,{key:"endScope"}),e.end=ee(e.end,{joinWith:""})}}(e)}function _t(e){function t(c,r){return new RegExp(U(c),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=he(r)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=t(ee(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const x=l.findIndex((K,ie)=>ie>0&&void 0!==K),w=this.matchIndexes[x];return l.splice(0,x),Object.assign(l,w)}}class f{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new i;return this.rules.slice(r).forEach(([x,w])=>l.addRule(x,w)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),"begin"===l.type&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let x=l.exec(r);if(this.resumingScanAtSamePosition()&&(!x||x.index!==this.lastIndex)){const w=this.getMatcher(0);w.lastIndex=this.lastIndex+1,x=w.exec(r)}return x&&(this.regexIndex+=x.position+1,this.regexIndex===this.count&&this.considerAll()),x}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=A(e.classNameAliases||{}),function _(c,r){const l=c;if(c.isCompiled)return l;[st,ot,bt,lt].forEach(w=>w(c,r)),e.compilerExtensions.forEach(w=>w(c,r)),c.__beforeBegin=null,[rt,ct,at].forEach(w=>w(c,r)),c.isCompiled=!0;let x=null;return"object"==typeof c.keywords&&c.keywords.$pattern&&(c.keywords=Object.assign({},c.keywords),x=c.keywords.$pattern,delete c.keywords.$pattern),x=x||/\w+/,c.keywords&&(c.keywords=_e(c.keywords,e.case_insensitive)),l.keywordPatternRe=t(x,!0),r&&(c.begin||(c.begin=/\B|\b/),l.beginRe=t(l.begin),!c.end&&!c.endsWithParent&&(c.end=/\B|\b/),c.end&&(l.endRe=t(l.end)),l.terminatorEnd=U(l.end)||"",c.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(c.end?"|":"")+r.terminatorEnd)),c.illegal&&(l.illegalRe=t(c.illegal)),c.contains||(c.contains=[]),c.contains=[].concat(...c.contains.map(function(w){return function wt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return A(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Oe(e)?A(e,{starts:e.starts?A(e.starts):null}):Object.isFrozen(e)?A(e):e}("self"===w?c:w)})),c.contains.forEach(function(w){_(w,l)}),c.starts&&_(c.starts,r),l.matcher=function b(c){const r=new f;return c.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),c.terminatorEnd&&r.addRule(c.terminatorEnd,{type:"end"}),c.illegal&&r.addRule(c.illegal,{type:"illegal"}),r}(l),l}(e)}function Oe(e){return!!e&&(e.endsWithParent||Oe(e.starts))}class xt extends Error{constructor(t,i){super(t),this.name="HTMLInjectionError",this.html=i}}const ne=W,Re=A,ye=Symbol("nomatch");var G=function(e){const t=Object.create(null),i=Object.create(null),f=[];let b=!0;const _="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Le};function l(n){return r.noHighlightRe.test(n)}function w(n,a,h){let p="",M="";"object"==typeof a?(p=n,h=a.ignoreIllegals,M=a.language):(P("10.7.0","highlight(lang, code, ...args) has been deprecated."),P("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),M=n,p=a),void 0===h&&(h=!0);const S={code:p,language:M};Z("before:highlight",S);const T=S.result?S.result:K(S.language,S.code,h);return T.code=S.code,Z("after:highlight",T),T}function K(n,a,h,p){const M=Object.create(null);function S(s,o){return s.keywords[o]}function T(){if(!u.keywords)return void O.addText(E);let s=0;u.keywordPatternRe.lastIndex=0;let o=u.keywordPatternRe.exec(E),g="";for(;o;){g+=E.substring(s,o.index);const d=B.case_insensitive?o[0].toLowerCase():o[0],R=S(u,d);if(R){const[N,Ut]=R;O.addText(g),g="",M[d]=(M[d]||0)+1,M[d]<=7&&(Q+=Ut),N.startsWith("_")?g+=o[0]:O.addKeyword(o[0],B.classNameAliases[N]||N)}else g+=o[0];s=u.keywordPatternRe.lastIndex,o=u.keywordPatternRe.exec(E)}g+=E.substring(s),O.addText(g)}function y(){null!=u.subLanguage?function J(){if(""===E)return;let s=null;if("string"==typeof u.subLanguage){if(!t[u.subLanguage])return void O.addText(E);s=K(u.subLanguage,E,!0,Be[u.subLanguage]),Be[u.subLanguage]=s._top}else s=se(E,u.subLanguage.length?u.subLanguage:null);u.relevance>0&&(Q+=s.relevance),O.addSublanguage(s._emitter,s.language)}():T(),E=""}function I(s,o){let g=1;const d=o.length-1;for(;g<=d;){if(!s._emit[g]){g++;continue}const R=B.classNameAliases[s[g]]||s[g],N=o[g];R?O.addKeyword(N,R):(E=N,T(),E=""),g++}}function ke(s,o){return s.scope&&"string"==typeof s.scope&&O.openNode(B.classNameAliases[s.scope]||s.scope),s.beginScope&&(s.beginScope._wrap?(O.addKeyword(E,B.classNameAliases[s.beginScope._wrap]||s.beginScope._wrap),E=""):s.beginScope._multi&&(I(s.beginScope,o),E="")),u=Object.create(s,{parent:{value:u}}),u}function Te(s,o,g){let d=function Ue(e,t){const i=e&&e.exec(t);return i&&0===i.index}(s.endRe,g);if(d){if(s["on:end"]){const R=new j(s);s["on:end"](o,R),R.isMatchIgnored&&(d=!1)}if(d){for(;s.endsParent&&s.parent;)s=s.parent;return s}}if(s.endsWithParent)return Te(s.parent,o,g)}function Ct(s){return 0===u.matcher.regexIndex?(E+=s[0],1):(ae=!0,0)}function Ht(s){const o=s[0],g=a.substring(s.index),d=Te(u,s,g);if(!d)return ye;const R=u;u.endScope&&u.endScope._wrap?(y(),O.addKeyword(o,u.endScope._wrap)):u.endScope&&u.endScope._multi?(y(),I(u.endScope,s)):R.skip?E+=o:(R.returnEnd||R.excludeEnd||(E+=o),y(),R.excludeEnd&&(E=o));do{u.scope&&O.closeNode(),!u.skip&&!u.subLanguage&&(Q+=u.relevance),u=u.parent}while(u!==d.parent);return d.starts&&ke(d.starts,s),R.returnEnd?0:o.length}let V={};function Ie(s,o){const g=o&&o[0];if(E+=s,null==g)return y(),0;if("begin"===V.type&&"end"===o.type&&V.index===o.index&&""===g){if(E+=a.slice(o.index,o.index+1),!b){const d=new Error(`0 width match regex (${n})`);throw d.languageName=n,d.badRule=V.rule,d}return 1}if(V=o,"begin"===o.type)return function Lt(s){const o=s[0],g=s.rule,d=new j(g),R=[g.__beforeBegin,g["on:begin"]];for(const N of R)if(N&&(N(s,d),d.isMatchIgnored))return Ct(o);return g.skip?E+=o:(g.excludeBegin&&(E+=o),y(),!g.returnBegin&&!g.excludeBegin&&(E=o)),ke(g,s),g.returnBegin?0:o.length}(o);if("illegal"===o.type&&!h){const d=new Error('Illegal lexeme "'+g+'" for mode "'+(u.scope||"<unnamed>")+'"');throw d.mode=u,d}if("end"===o.type){const d=Ht(o);if(d!==ye)return d}if("illegal"===o.type&&""===g)return 1;if(oe>1e5&&oe>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return E+=g,g.length}const B=k(n);if(!B)throw C(_.replace("{}",n)),new Error('Unknown language: "'+n+'"');const jt=_t(B);let ce="",u=p||jt;const Be={},O=new r.__emitter(r);!function Pt(){const s=[];for(let o=u;o!==B;o=o.parent)o.scope&&s.unshift(o.scope);s.forEach(o=>O.openNode(o))}();let E="",Q=0,L=0,oe=0,ae=!1;try{for(u.matcher.considerAll();;){oe++,ae?ae=!1:u.matcher.considerAll(),u.matcher.lastIndex=L;const s=u.matcher.exec(a);if(!s)break;const g=Ie(a.substring(L,s.index),s);L=s.index+g}return Ie(a.substring(L)),O.closeAllNodes(),O.finalize(),ce=O.toHTML(),{language:n,value:ce,relevance:Q,illegal:!1,_emitter:O,_top:u}}catch(s){if(s.message&&s.message.includes("Illegal"))return{language:n,value:ne(a),illegal:!0,relevance:0,_illegalBy:{message:s.message,index:L,context:a.slice(L-100,L+100),mode:s.mode,resultSoFar:ce},_emitter:O};if(b)return{language:n,value:ne(a),illegal:!1,relevance:0,errorRaised:s,_emitter:O,_top:u};throw s}}function se(n,a){a=a||r.languages||Object.keys(t);const h=function ie(n){const a={value:ne(n),illegal:!1,relevance:0,_top:c,_emitter:new r.__emitter(r)};return a._emitter.addText(n),a}(n),p=a.filter(k).filter(Ae).map(y=>K(y,n,!1));p.unshift(h);const M=p.sort((y,I)=>{if(y.relevance!==I.relevance)return I.relevance-y.relevance;if(y.language&&I.language){if(k(y.language).supersetOf===I.language)return 1;if(k(I.language).supersetOf===y.language)return-1}return 0}),[S,T]=M,J=S;return J.secondBest=T,J}function re(n){let a=null;const h=function x(n){let a=n.className+" ";a+=n.parentNode?n.parentNode.className:"";const h=r.languageDetectRe.exec(a);if(h){const p=k(h[1]);return p||(Me(_.replace("{}",h[1])),Me("Falling back to no-highlight mode for this block.",n)),p?h[1]:"no-highlight"}return a.split(/\s+/).find(p=>l(p)||k(p))}(n);if(l(h))return;if(Z("before:highlightElement",{el:n,language:h}),n.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(n)),r.throwUnescapedHTML))throw new xt("One of your code blocks includes unescaped HTML.",n.innerHTML);a=n;const p=a.textContent,M=h?w(p,{language:h,ignoreIllegals:!0}):se(p);n.innerHTML=M.value,function Rt(n,a,h){const p=a&&i[a]||h;n.classList.add("hljs"),n.classList.add(`language-${p}`)}(n,h,M.language),n.result={language:M.language,re:M.relevance,relevance:M.relevance},M.secondBest&&(n.secondBest={language:M.secondBest.language,relevance:M.secondBest.relevance}),Z("after:highlightElement",{el:n,result:M,text:p})}let Se=!1;function Y(){"loading"!==document.readyState?document.querySelectorAll(r.cssSelector).forEach(re):Se=!0}function k(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function Ne(n,{languageName:a}){"string"==typeof n&&(n=[n]),n.forEach(h=>{i[h.toLowerCase()]=a})}function Ae(n){const a=k(n);return a&&!a.disableAutodetect}function Z(n,a){const h=n;f.forEach(function(p){p[h]&&p[h](a)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function At(){Se&&Y()},!1),Object.assign(e,{highlight:w,highlightAuto:se,highlightAll:Y,highlightElement:re,highlightBlock:function vt(n){return P("10.7.0","highlightBlock will be removed entirely in v12.0"),P("10.7.0","Please use highlightElement now."),re(n)},configure:function yt(n){r=Re(r,n)},initHighlighting:()=>{Y(),P("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function Nt(){Y(),P("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function kt(n,a){let h=null;try{h=a(e)}catch(p){if(C("Language definition for '{}' could not be registered.".replace("{}",n)),!b)throw p;C(p),h=c}h.name||(h.name=n),t[n]=h,h.rawDefinition=a.bind(null,e),h.aliases&&Ne(h.aliases,{languageName:n})},unregisterLanguage:function Tt(n){delete t[n];for(const a of Object.keys(i))i[a]===n&&delete i[a]},listLanguages:function It(){return Object.keys(t)},getLanguage:k,registerAliases:Ne,autoDetection:Ae,inherit:Re,addPlugin:function Dt(n){(function Bt(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=a=>{n["before:highlightBlock"](Object.assign({block:a.el},a))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=a=>{n["after:highlightBlock"](Object.assign({block:a.el},a))})})(n),f.push(n)}}),e.debugMode=function(){b=!1},e.safeMode=function(){b=!0},e.versionString="11.6.0",e.regex={concat:v,lookahead:ge,either:m,optional:Pe,anyNumberOfTimes:He};for(const n in z)"object"==typeof z[n]&&H.exports(z[n]);return Object.assign(e,z),e}({});le.exports=G,G.HighlightJS=G,G.default=G},9112:(le,H,D)=>{"use strict";D.r(H),D.d(H,{HighlightJS:()=>j,default:()=>W});var j=D(4940);const W=j}}]);