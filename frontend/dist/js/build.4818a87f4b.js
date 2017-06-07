(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var options={};options=function(e){return{props:["content"]}}(),options.render=function(e){return e("h1",{attrs:{class:"m-scope-i6pim"}},{shouldRender:!0,eventListeners:{}},[e("#text",{shouldRender:!0,eventListeners:{}},"\\"+this.get("content"))])},module.exports=function(e){e.component("header",options)};
},{}],2:[function(require,module,exports){
var Moon=require("moonjs"),header=require("./components/header.moon")(Moon),app=new Moon({el:"#app"});
},{"./components/header.moon":1,"moonjs":3}],3:[function(require,module,exports){
!function(e,t){"object"==typeof module&&module.exports?module.exports=t():e.Moon=t()}(this,function(){"use strict";function e(e){this.instance=e,this.cache={},this.setters={},this.clear={},this.target=null,this.map={}}function t(t){this.$opts=t||{};var r=this;this.$id=a++,this.$name=this.$opts.name||"root",this.$data=this.$opts.data||{},this.$render=this.$opts.render||b,this.$hooks=this.$opts.hooks||{};var n=this.$opts.methods;void 0!==n&&s(r,n),this.$events={},this.$dom={},this.$observer=new e(this),this.$destroyed=!0,this.$queued=!1;var i=this.$opts.computed;void 0!==i&&l(this,i),this.init()}var r={},n={},i={},o={stop:"event.stopPropagation();",prevent:"event.preventDefault();",ctrl:"if(!event.ctrlKey) {return;};",shift:"if(!event.shiftKey) {return;};",alt:"if(!event.altKey) {return;};",enter:"if(event.keyCode !== 13) {return;};"},a=0,s=function(e,t){for(var r in t)!function(t,r){e.$data[t]=function(){return r.apply(e,arguments)}}(r,t[r])},l=function(e,t){for(var r in t)!function(r){var n=e.$observer;n.observe(r),Object.defineProperty(e.$data,r,{get:function(){var i=null;return void 0===n.cache[r]?(n.target=r,i=t[r].get.call(e),n.target=null,n.cache[r]=i):i=n.cache[r],i},set:b});var i=null;void 0!==(i=t[r].set)&&(n.setters[r]=i)}(r)};e.prototype.observe=function(e){var t=this;this.clear[e]=function(){t.cache[e]=void 0}},e.prototype.notify=function(e,t){var r=null;if(void 0!==(r=this.map[e]))for(var n=0;n<r.length;n++)this.notify(r[n]);var i=null;void 0!==(i=this.clear[e])&&i()};var u=function(e){!1===t.config.silent&&console.log(e)},c=function(e){!1===t.config.silent&&console.error("[Moon] ERR: "+e)},v=function(e){!1===e.$queued&&!1===e.$destroyed&&(e.$queued=!0,setTimeout(function(){e.build(),y(e,"updated"),e.$queued=!1},0))},p=function(){return{shouldRender:!1,eventListeners:{}}},f=function(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n")},d=function(e,t,r,n){r=r.replace(/\[(\w+)\]/g,".$1");for(var i=r.split("."),o=0;o<i.length-1;o++)t=t[i[o]];return t[i[o]]=n,i[0]},h=function(e){var t={};if(t.default=[],0===e.length)return t;for(var r=0;r<e.length;r++){var n=e[r],i=n.props.attrs,o="";void 0!==(o=i.slot)?(void 0===t[o]?t[o]=[n]:t[o].push(n),delete i.slot):t.default.push(n)}return t},m=function(e,t){for(var r in t)e[r]=t[r];return e},g=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},y=function(e,t){var r=e.$hooks[t];void 0!==r&&r.call(e)},$=function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},b=function(){},k=function(e){for(var t={},r=e.attributes,n=r.length;n--;)t[r[n].name]=r[n].value;return t},x=function(e,t,r){var n=t.meta.eventListeners;for(var i in n)!function(t){var r=function(e){for(var t=r.handlers,n=0;n<t.length;n++)t[n](e)};r.handlers=n[t],n[t]=r,e.addEventListener(t,r)}(i)},_=function(e,t){var r=null;if("#text"===e.type)r=document.createTextNode(e.val);else{if(r=e.meta.isSVG?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),1===e.children.length&&"#text"===e.children[0].type)r.textContent=e.children[0].val,e.children[0].meta.el=r.firstChild;else for(var n=0;n<e.children.length;n++){var i=e.children[n];E(_(i,t),i,r)}x(r,e)}return S(r,{},e,e.props.attrs),e.meta.el=r,r},E=function(e,t,r){r.appendChild(e),t.meta.component&&P(e,t,t.meta.component)},w=function(e,t){e.__moon__&&e.__moon__.destroy(),t.removeChild(e)},A=function(e,t,r,n){e.__moon__&&e.__moon__.destroy(),n.replaceChild(t,e),r.meta.component&&P(t,r,r.meta.component)},R={SKIP:0,APPEND:1,REMOVE:2,REPLACE:3,TEXT:4,CHILDREN:5},L=function(e,t,r,n,i){return{type:e,val:t,props:r,children:i,meta:n||p()}},C=function(e,t,r){var n=r.opts.data||{};if(void 0!==r.opts.props)for(var i=r.opts.props,o=0;o<i.length;o++){var a=i[o];n[a]=e.attrs[a]}return r.opts.render(O,{data:n,slots:h(t)})},O=function(e,t,r,n){var o=null;if("#text"===e)return L("#text",r,{attrs:{}},t,[]);if(void 0!==(o=i[e])){if(!0===o.opts.functional)return C(t,n,i[e]);r.component=o}return L(e,"",t,r,n)},P=function(e,t,r){for(var n=new r.CTor,i=n.$props,o=n.$data,a=t.props.attrs,s=0;s<i.length;s++){var l=i[s];o[l]=a[l]}return n.$slots=h(t.children),n.$el=e,n.build(),y(n,"mounted"),t.meta.el=n.$el,n.$el},T=function(e,t,r){var n=t.meta.eventListeners,i=r.meta.eventListeners;for(var o in i){var a=n[o];void 0===a?e.removeEventListener(o,a):n[o].handlers=i[o]}},S=function(e,t,n){var i=n.props.attrs;for(var o in i){var a=i[o],s=t[o];void 0===a&&!1===a&&null===a||void 0!==s&&!1!==s&&null!==s&&a===s||(10===o.length&&"xlink:href"===o?e.setAttributeNS("http://www.w3.org/1999/xlink","href",a):e.setAttribute(o,!0===a?"":a))}for(var l in t){var u=i[l];void 0!==u&&!1!==u&&null!==u||e.removeAttribute(l)}var c=null;if(void 0!==(c=n.props.directives))for(var v in c){var p=null;void 0!==(p=r[v])&&p(e,c[v],n)}var f=null;if(void 0!==(f=n.props.dom))for(var d in f){var h=f[d];e[d]!==h&&(e[d]=h)}},D=function(e,t){if(void 0===e.__moon__)P(e,t,t.meta.component);else{for(var r=e.__moon__,n=!1,i=r.$props,o=r.$data,a=t.props.attrs,s=0;s<i.length;s++){var l=i[s];o[l]!==a[l]&&(o[l]=a[l],n=!0)}0!==t.children.length&&(r.$slots=h(t.children),n=!0),!0===n&&r.build()}},G=function(e,t,r,n){var i=e?e.nodeName.toLowerCase():null;if(null===e){var o=_(t,n);return E(o,t,r),o}if(null===t)return w(e,r),null;if(i!==t.type){var a=_(t,n);return A(e,a,t,r),a}if("#text"===t.type)return"#text"===i?(e.textContent!==t.val&&(e.textContent=t.val),t.meta.el=e):A(e,_(t,n),t,r),e;if(t.meta.el=e,void 0!==t.meta.component)return D(e,t),e;S(e,k(e),t),x(e,t);var s=t.props.dom;if(void 0!==s&&void 0!==s.innerHTML)return e;for(var l=t.children,u=l.length,c=0,v=e.firstChild,p=0!==u?l[0]:null;null!==p||null!==v;){var f=null!==v?v.nextSibling:null;G(v,p,e,n),p=++c<u?l[c]:null,v=f}return e},N=function(e,t,r,n){if(null===e)return E(_(t,n),t,r),R.APPEND;if(null===t)return w(e.meta.el,r),R.REMOVE;if(e===t)return R.SKIP;if(e.type!==t.type)return A(e.meta.el,_(t,n),t,r),R.REPLACE;if(!0===t.meta.shouldRender&&"#text"===t.type){var i=e.meta.el;return"#text"===e.type?(t.val!==e.val&&(i.textContent=t.val),R.TEXT):(A(i,_(t,n),t,r),R.REPLACE)}if(!0===t.meta.shouldRender){var o=e.meta.el;if(void 0!==t.meta.component)return D(o,t),R.SKIP;S(o,e.props.attrs,t),e.props.attrs=t.props.attrs,T(o,e,t);var a=t.props.dom;if(void 0!==a&&void 0!==a.innerHTML)return R.SKIP;var s=t.children,l=e.children,u=s.length,c=l.length;if(0===u){if(0!==c){for(var v=null;null!==(v=o.firstChild);)w(v,o);e.children=[]}}else for(var p=u>c?u:c,f=0,d=0;f<p;f++,d++){var h=d<c?l[d]:null,m=f<u?s[f]:null,g=N(h,m,o,n);switch(g){case R.APPEND:l[c++]=m;break;case R.REMOVE:l.splice(d--,1),c--;break;case R.REPLACE:l[d]=s[f];break;case R.TEXT:h.val=m.val}}return R.CHILDREN}return t.meta.el=e.meta.el,R.SKIP},M=/\s/,j=/"[^"]*"|'[^']*'|\.\w*[a-zA-Z$_]\w*|\w*[a-zA-Z$_]\w*:|(\w*[a-zA-Z$_]\w*)/g,K=["true","false","undefined","NaN","typeof"],I=function(e,t,r,n,i){var o={current:0,template:e,output:"",openDelimiterLen:t[0].length,closeDelimiterLen:t[1].length,openRE:new RegExp(r[0]),closeRE:new RegExp("\\s*"+r[1]),dependencies:n};return V(o,i),o.output},V=function(e,t){for(var r=e.template,n=r.length;e.current<n;){var i=q(e,e.openRE);if(i&&(e.output+=f(i)),e.current===n)break;e.current+=e.openDelimiterLen,z(e);var o=q(e,e.closeRE);if(e.current===n)break;o&&(H(o,e.dependencies),t&&(o='" + '+o+' + "'),e.output+=o),z(e),e.current+=e.closeDelimiterLen}},H=function(e,t){return e.replace(j,function(e,r){void 0!==r&&-1===K.indexOf(r)&&-1===t.indexOf(r)&&t.push(r)}),t},q=function(e,t){var r=e.template,n=r.substring(e.current),i=(n.length,n.search(t)),o="";switch(i){case-1:o=n;break;case 0:o="";break;default:o=n.substring(0,i)}return e.current+=o.length,o},z=function(e){for(var t=e.template,r=t[e.current];M.test(r);)r=t[++e.current]},X=function(e){var t={input:e,current:0,tokens:[]};return Z(t),t.tokens},Z=function(e){for(var t=e.input,r=t.length;e.current<r;)"<"===t.charAt(e.current)?"\x3c!--"!==t.substr(e.current,4)?J(e):B(e):F(e)},F=function(e){var t=e.input,r=t.length,n=t.substring(e.current).search(/<[\w\/]\s*|<!--/);if(-1===n)return e.tokens.push({type:"text",value:t.slice(e.current)}),void(e.current=r);0!==n&&(n+=e.current,e.tokens.push({type:"text",value:t.slice(e.current,n)}),e.current=n)},B=function(e){var t=e.input,r=t.length;e.current+=4;var n=t.indexOf("--\x3e",e.current);if(-1===n)return e.tokens.push({type:"comment",value:t.slice(e.current)}),void(e.current=r);e.tokens.push({type:"comment",value:t.slice(e.current,n)}),e.current=n+3},J=function(e){var t=e.input,r=(t.length,"/"===t.charAt(e.current+1));e.current+=r?2:1;var n=Q(e);U(n,e);var i="/"===t.charAt(e.current);e.current+=i?2:1,r&&(n.closeStart=!0),i&&(n.closeEnd=!0)},Q=function(e){for(var t=e.input,r=t.length,n=e.current,i="";n<r;){var o=t.charAt(n);if("/"===o||">"===o||" "===o)break;i+=o,n++}var a={type:"tag",value:i};return e.tokens.push(a),e.current=n,a},U=function(e,t){for(var r=t.input,n=r.length,i=t.current,o=r.charAt(i),a=r.charAt(i+1),s=function(){i++,o=r.charAt(i),a=r.charAt(i+1)},l={};i<n&&">"!==o&&("/"!==o||">"!==a);)if(" "!==o){for(var u="",c=!1;i<n&&"="!==o;){if(" "===o||">"===o||"/"===o||">"===a){c=!0;break}u+=o,s()}var v={name:u,value:"",meta:{}};if(c)l[u]=v;else{s();var p=" ";for("'"!==o&&'"'!==o||(p=o,s());i<n&&o!==p;)v.value+=o,s();s();var f=u.indexOf(":");if(-1!==f){var d=u.split(":");v.name=d[0],v.meta.arg=d[1]}l[u]=v}}else s();t.current=i,e.attributes=l},W=function(e){for(var t={type:"ROOT",children:[]},r={current:0,tokens:e};r.current<e.length;){var n=re(r);n&&t.children.push(n)}return t},Y=["area","base","br","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ee=["svg","animate","circle","clippath","cursor","defs","desc","ellipse","filter","font-face","foreignObject","g","glyph","image","line","marker","mask","missing-glyph","path","pattern","polygon","polyline","rect","switch","symbol","text","textpath","tspan","use","view"],te=function(e,t,r){return{type:e,props:t,children:r}},re=function(e){var t=e.tokens[e.current],r=e.tokens[e.current-1],n=e.tokens[e.current+1],i=function(i){e.current+=void 0===i?1:i,t=e.tokens[e.current],r=e.tokens[e.current-1],n=e.tokens[e.current+1]};if("text"===t.type)return i(),r.value;if("comment"===t.type)return i(),null;if("tag"===t.type){var o=t.value,a=t.closeStart,s=t.closeEnd,l=-1!==ee.indexOf(o),u=-1!==Y.indexOf(o)||!0===s,c=te(o,t.attributes,[]);if(i(),l&&(c.isSVG=!0),!0===u)return c;if(!0===a)return null;if(void 0!==t){for(e.current;"tag"!==t.type||"tag"===t.type&&(void 0===t.closeStart&&void 0===t.closeEnd||t.value!==o);){var v=re(e);if(null!==v&&c.children.push(v),i(0),void 0===t)break}i()}return c}i()},ne=null,ie=null,oe=function(e,t,r){var i=e.props.attrs,o="{attrs: {";e.props.directives=[];for(var a in i){var s=i[a],l=null,u=null;void 0!==(l=n[s.name])&&void 0!==(u=l.beforeGenerate)&&u(s.value,s.meta,e,t,r)}for(var c in i){var v=i[c],p=v.name,f=null;if(void 0!==(f=n[p])){var d=e.specialDirectivesAfter;void 0!==f.afterGenerate&&(void 0===d&&(e.specialDirectivesAfter=d={}),d[c]=v);var h=null;void 0!==(h=f.duringPropGenerate)&&(o+=h(v.value,v.meta,e,r)),e.meta.shouldRender=!0,delete i[c]}else if(p[0]+p[1]==="m-")e.props.directives.push(v),e.meta.shouldRender=!0;else{var m=v.value,g=I(m,ne,ie,r,!0);m!==g&&(e.meta.shouldRender=!0),o+='"'+c+'": "'+g+'", '}}0!==Object.keys(i).length?o=o.slice(0,-2)+"}":o+="}";var y=e.props.dom;if(void 0!==y){e.meta.shouldRender=!0,o+=", dom: {";for(var $ in y)o+='"'+$+'": '+y[$]+", ";o=o.slice(0,-2)+"}"}var b=e.props.directives;if(0!==b.length){o+=", directives: {";for(var k=0;k<b.length;k++){var x=b[k],_=x.value;0!==_.length?H(_,r):_='""',o+='"'+x.name+'": '+_+", "}o=o.slice(0,-2)+"}"}return o+="}"},ae=function(e){if(0===Object.keys(e).length)return"{}";var t="{";for(var r in e)t+='"'+r+'": ['+le(e[r])+"], ";return t=t.slice(0,-2)+"}"},se=function(e){var t="{";for(var r in e)t+="eventListeners"===r?'"'+r+'": '+ae(e[r])+", ":'"'+r+'": '+e[r]+", ";return t=t.slice(0,-2)+"}"},le=function(e){for(var t="",r=0;r<e.length;r++)t+=e[r]+", ";return t=t.slice(0,-2)},ue=function(e,t,r){var n='h("'+e.type+'", ';n+=oe(e,t,r)+", ";for(var i=[],o=e.children,a=0;a<o.length;a++)i.push(ce(o[a],e,r));return!0===e.meta.shouldRender&&void 0!==t&&(t.meta.shouldRender=!0),n+=se(e.meta),0!==i.length?!0===e.deep?n+=", [].concat.apply([], ["+le(i)+"])":n+=", ["+le(i)+"]":n+=", []",n+=")"},ce=function(e,t,r){var i="";if("string"==typeof e){var o=e,a=I(o,ne,ie,r,!0),s=p();o!==a&&(t.meta.shouldRender=!0,s.shouldRender=!0),i+='h("#text", '+se(s)+', "'+a+'")'}else{e.meta=p(),!0===e.isSVG&&(e.meta.isSVG=!0),e.props={attrs:e.props};var l="";if("slot"===e.type){t.meta.shouldRender=!0,t.deep=!0;var u=e.props.attrs.name;l="instance.$slots['"+(u&&u.value||"default")+"']"}else l=ue(e,t,r);if(void 0!==e.specialDirectivesAfter)for(var c in e.specialDirectivesAfter){var v=e.specialDirectivesAfter[c];l=n[v.name].afterGenerate(v.value,v.meta,l,e,r)}i+=l}return i},ve=function(e){var r=e.children[0],n=[],i=null;(i=t.config.delimiters)!==ne&&(ne=i,ie=new Array(2),ie[0]=$(ne[0]),ie[1]=$(ne[1]));for(var o=ce(r,void 0,n),a="",s=0;s<n.length;s++){var l=n[s];a+="var "+l+' = instance.get("'+l+'");'}var u="var instance = this; "+a+" return "+o;try{return new Function("h",u)}catch(e){return c("Could not create render function"),b}},pe=function(e){var t=X(e),r=W(t);return ve(r)};t.prototype.get=function(e){var t=this.$observer,r=null;return null!==(r=t.target)&&(void 0===t.map[e]?t.map[e]=[r]:-1===t.map[e].indexOf(r)&&t.map[e].push(r)),this.$data[e]},t.prototype.set=function(e,t){var r=this.$observer,n=d(0,this.$data,e,t),i=null;void 0!==(i=r.setters[n])&&i.call(this,t),r.notify(n,t),v(this)},t.prototype.destroy=function(){this.off(),this.$el=null,this.$destroyed=!0,y(this,"destroyed")},t.prototype.callMethod=function(e,t){t=t||[],this.$data[e].apply(this,t)},t.prototype.on=function(e,t){var r=this.$events[e];void 0===r?this.$events[e]=[t]:r.push(t)},t.prototype.off=function(e,t){if(void 0===e)this.$events={};else if(void 0===t)this.$events[e]=[];else{var r=this.$events[e],n=r.indexOf(t);r.splice(n,1)}},t.prototype.emit=function(e,t){var r=t||{};r.type=e;for(var n=this.$events[e],i=this.$events["*"],o=0;o<n.length;o++)n[o](r);if(void 0!==i)for(var o=0;o<i.length;o++)i[o](r)},t.prototype.renderLoop=function(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)r[n]=t(e[n],n);return r},t.prototype.renderClass=function(e){if("string"==typeof e)return e;var t="";if(Array.isArray(e))for(var r=0;r<e.length;r++)t+=this.renderClass(e[r])+" ";else if("object"==typeof e)for(var n in e)e[n]&&(t+=n+" ");return t=t.slice(0,-1)},t.prototype.mount=function(e){this.$el="string"==typeof e?document.querySelector(e):e,this.$destroyed=!1,this.$el.__moon__=this,this.$template=this.$opts.template||this.$el.outerHTML,this.$render===b&&(this.$render=t.compile(this.$template)),this.build(),y(this,"mounted")},t.prototype.render=function(){return this.$render(O)},t.prototype.patch=function(e,t,r){if(void 0!==e.meta&&void 0!==e.meta.el)t.type!==e.type?(A(e.meta.el,_(t,this),r),this.$el=t.meta.el,this.$el.__moon__=this):N(e,t,r,this);else if(e instanceof Node){var n=G(e,t,r,this);n!==e&&(this.$el=t.meta.el,this.$el.__moon__=this)}},t.prototype.build=function(){var e=this.render(),t=null;void 0!==this.$dom.meta?t=this.$dom:(t=this.$el,this.$dom=e),this.patch(t,e,this.$el.parentNode)},t.prototype.init=function(){u("======= Moon ======="),y(this,"init"),void 0!==this.$opts.el&&this.mount(this.$opts.el)},t.config={silent:!0,delimiters:["{{","}}"],keyCodes:function(e){for(var t in e)o[t]="if(event.keyCode !== "+e[t]+") {return;};"}},t.version="0.10.0",t.util={noop:b,error:c,log:u,merge:g,extend:m,h:O},t.use=function(e,r){e.init(t,r)},t.compile=function(e){return pe(e)},t.nextTick=function(e){setTimeout(e,0)},t.directive=function(e,t){r["m-"+e]=t},t.component=function(e,r){function n(){t.call(this,r)}var o=this;return r.name?e=r.name:r.name=e,n.prototype=Object.create(o.prototype),n.prototype.constructor=n,n.prototype.init=function(){y(this,"init"),this.$destroyed=!1,this.$props=this.$opts.props||[],this.$template=this.$opts.template,this.$render===b&&(this.$render=t.compile(this.$template))},i[e]={CTor:n,opts:r},n};var fe='h("#text", '+se(p())+', "")';return n["m-if"]={afterGenerate:function(e,t,r,n,i){return H(e,i),e+" ? "+r+" : "+fe}},n["m-for"]={beforeGenerate:function(e,t,r,n,i){n.deep=!0},afterGenerate:function(e,t,r,n,i){var o=e.split(" in "),a=o[0].split(","),s=o[1];H(s,i);for(var l=a.join(","),u=0;u<a.length;u++){var c=i.indexOf(a[u]);-1!==c&&i.splice(c,1)}return"instance.renderLoop("+s+", function("+l+") { return "+r+"; })"}},n["m-on"]={beforeGenerate:function(e,t,r,n,i){var a=e,s=t.arg.split("."),l=s.shift(),u="event",c=a.split("(");c.length>1&&(a=c.shift(),u=c.join("(").slice(0,-1),H(u,i));for(var v="",p=0;p<s.length;p++)v+=o[s[p]];var f="function(event) {"+v+'instance.callMethod("'+a+'", ['+u+"])}",d=r.meta.eventListeners[l];void 0===d?r.meta.eventListeners[l]=[f]:d.push(f)}},n["m-model"]={beforeGenerate:function(e,t,r,n,i){H(e,i);var o="input",a="value";void 0!==r.props.attrs.type&&"checkbox"===r.props.attrs.type.value&&(o="change",a="checked");var s=e,l=e.indexOf("["),u=e.indexOf("."),c=null;-1!==l&&(-1===u||l<u)?c=e.slice(0,l):-1!==u&&(-1===l||u<l)&&(c=e.slice(0,u)),null!==c&&(s=s.replace(j,function(e,t){return void 0!==t&&t!==c?'" + '+t+' + "':e}));var v='function(event) {instance.set("'+s+'", event.target.'+a+")}",p=r.meta.eventListeners[o];void 0===p?r.meta.eventListeners[o]=[v]:p.push(v);var f=r.props.dom;void 0===f&&(r.props.dom=f={}),f[a]=e}},n["m-literal"]={duringPropGenerate:function(e,t,r,n){var i=t.arg;return H(e,n),"class"===i?'"class": instance.renderClass('+e+"), ":'"'+i+'": '+e+", "}},n["m-html"]={beforeGenerate:function(e,t,r,n,i){var o=r.props.dom;void 0===o&&(r.props.dom=o={}),H(e,i),o.innerHTML='("" + '+e+")"}},n["m-mask"]={},r["m-show"]=function(e,t,r){e.style.display=t?"":"none"},t});
},{}]},{},[2]);