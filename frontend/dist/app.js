(function(){function v(){}function m(a){for(var b,d,c=1,h=arguments.length;c<h;c++)for(b in d=arguments[c],d)a[b]=d[b];return a}function l(a){a.parentNode.removeChild(a)}function f(a){return document.createElement(a)}function g(a){return document.createTextNode(a)}function n(a,b,d,c){for(var h in b)if(h in d){var e=d[h],k=c[h];if(e!==k||e&&"object"===typeof e||"function"===typeof e){var f=b[h];if(f)for(var g=0;g<f.length;g+=1){var l=f[g];l.s||(l.s=!0,l.call(a,e,k),l.s=!1)}}}}function y(a){function b(){a.C("menutoggle")}
var d=f("div");d.setAttribute("svelte-981402989","");d.id="menu-toggle";d.addEventListener("click",b,!1);var c=f("div");d.appendChild(c);c.className="top line";d.appendChild(g("\n  "));c=f("div");d.appendChild(c);c.className="middle line";d.appendChild(g("\n  "));c=f("div");d.appendChild(c);c.className="bottom line";var h=g("\n\n"),e=f("menu");e.setAttribute("svelte-981402989","");c=f("li");e.appendChild(c);c.appendChild(g("Foo"));e.appendChild(g("\n  "));c=f("li");e.appendChild(c);c.appendChild(g("Bar"));
e.appendChild(g("\n  "));c=f("li");e.appendChild(c);c.appendChild(g("Baz"));return{c:function(a,b){a.insertBefore(d,b);a.insertBefore(h,b);a.insertBefore(e,b)},h:function(){l(d);l(h);l(e)},g:function(){d.removeEventListener("click",b,!1)}}}function q(a){a=a||{};this.a=a.data||{};this.f={m:Object.create(null),l:Object.create(null)};this.j=Object.create(null);this.b=a.b||this;this.o=a.o;if(!document.getElementById("svelte-981402989-style")){var b=f("style");b.id="svelte-981402989-style";b.textContent=
"\n  [svelte-981402989]#menu-toggle, [svelte-981402989] #menu-toggle {\n    position: fixed;\n    top: 1rem;\n    left: 1rem;\n    width: 3rem;\n    height: 3rem;\n    margin: 1em 2em;\n    cursor: pointer;\n    z-index: 10000;\n  }\n  [svelte-981402989]#menu-toggle \x3e .line, [svelte-981402989] #menu-toggle \x3e .line {\n    width: 100%;\n    height: .1rem;\n    background: var(--text-color);\n    margin: .43em;\n    transition: opacity .1s, transform .2s;\n  }\n  [svelte-981402989]#app.menu #menu-toggle \x3e .line, [svelte-981402989] #app.menu #menu-toggle \x3e .line { height: .1rem; }\n  [svelte-981402989]#app.menu #menu-toggle \x3e .middle, [svelte-981402989] #app.menu #menu-toggle \x3e .middle { opacity: 0; }\n  [svelte-981402989]#app.menu #menu-toggle \x3e .top, [svelte-981402989] #app.menu #menu-toggle \x3e .top { transform: rotate(-30deg); }\n  [svelte-981402989]#app.menu #menu-toggle \x3e .bottom, [svelte-981402989] #app.menu #menu-toggle \x3e .bottom { transform: rotate(30deg); }\n";
document.head.appendChild(b)}this.i=y(this);a.target&&this.i.c(a.target,null)}function z(a){var b=f("header");b.setAttribute("svelte-2810832196","");var d=f("h1");b.appendChild(d);var c=a.username&&w(a);c&&c.c(d,null);var h=g("\n    learned\n    ");d.appendChild(h);var e=f("span");d.appendChild(e);e.appendChild(g("."));d.appendChild(g("\n    today\n    "));var k=!a.username&&x();k&&k.c(d,null);return{c:function(a,c){a.insertBefore(b,c)},update:function(a,b){b.username?c?c.update(a,b):(c=w(b),c.c(d,
h)):c&&(c.h(),c.g(),c=null);b.username?k&&(k.h(),k.g(),k=null):k||(k=x(),k.c(d,null))},h:function(){l(b);c&&c.h();k&&k.h()},g:function(){c&&c.g();k&&k.g()}}}function w(a){var b,d=g(b=a.username),c=g("\n      "),h=f("span");h.appendChild(g("."));return{c:function(a,b){a.insertBefore(d,b);a.insertBefore(c,b);a.insertBefore(h,b)},update:function(a,c){b!==(b=c.username)&&(d.data=b)},h:function(){l(d);l(c);l(h)},g:v}}function x(){var a=f("span");a.appendChild(g("/"));var b=g("\n      login");return{c:function(d,
c){d.insertBefore(a,c);d.insertBefore(b,c)},h:function(){l(a);l(b)},g:v}}function r(a){a=a||{};this.a=a.data||{};this.f={m:Object.create(null),l:Object.create(null)};this.j=Object.create(null);this.b=a.b||this;this.o=a.o;if(!document.getElementById("svelte-2810832196-style")){var b=f("style");b.id="svelte-2810832196-style";b.textContent="\n  header[svelte-2810832196], [svelte-2810832196] header {\n    display: flex;\n    flex: 1 1 100%;\n    justify-content: space-between;\n    align-content: center;\n    height: 8rem;\n  }\n  header[svelte-2810832196] \x3e h1, [svelte-2810832196] header \x3e h1 {\n    width: 100%;\n    font-size: 6rem;\n    line-height: 8rem;\n    margin: 2rem;\n    color: var(--text-color);\n    text-align: center;\n  }\n  header[svelte-2810832196] \x3e h1 \x3e span, [svelte-2810832196] header \x3e h1 \x3e span {\n    margin: 0 .3em;\n    font-weight: 200;\n    color: var(--outline-color);\n  }\n";
document.head.appendChild(b)}this.i=z(this.a);a.target&&this.i.c(a.target,null)}function A(a,b){var d=f("aside");d.setAttribute("svelte-991727204","");d.className="col-2";var c=new q({target:d,b:b.b});c.A("menutoggle",function(){b.D()});var h=g("\n\n"),e=f("div");e.setAttribute("svelte-991727204","");e.className="col-10";var k=new r({target:e,b:b.b,data:{username:a.username}});return{c:function(a,b){a.insertBefore(d,b);a.insertBefore(h,b);a.insertBefore(e,b)},update:function(a,b){var c={};"username"in
a&&(c.username=b.username);Object.keys(c).length&&k.set(c)},h:function(){l(d);l(h);l(e)},g:function(){c.g(!1);k.g(!1)}}}function t(a){a=a||{};this.a=m(p.data(),a.data);this.f={m:Object.create(null),l:Object.create(null)};this.j=Object.create(null);this.b=a.b||this;this.o=a.o;if(!document.getElementById("svelte-991727204-style")){var b=f("style");b.id="svelte-991727204-style";b.textContent="\n";document.head.appendChild(b)}this.u=[];this.i=A(this.a,this);a.target&&this.i.c(a.target,null);this.v();
a.b?a.b.u.push(p.B.bind(this)):p.B.call(this)}var u={get:function(a){return a?this.a[a]:this.a},C:function(a,b){if(a=a in this.j&&this.j[a].slice())for(var d=0;d<a.length;d+=1)a[d].call(this,b)},observe:function(a,b,d){var c=d&&d.defer?this.f.l:this.f.m;(c[a]||(c[a]=[])).push(b);d&&!1===d.G||(b.s=!0,b.call(this,this.a[a]),b.s=!1);return{cancel:function(){var d=c[a].indexOf(b);~d&&c[a].splice(d,1)}}},A:function(a,b){if("teardown"===a)return this.A("destroy",b);var d=this.j[a]||(this.j[a]=[]);d.push(b);
return{cancel:function(){var a=d.indexOf(b);~a&&d.splice(a,1)}}},set:function(a){this.w(m({},a));this.b.v()},v:function(){if(this.u)for(;this.u.length;)this.u.pop()()}};m(q.prototype,u);q.prototype.w=function(a){var b=this.a;this.a=m({},b,a);n(this,this.f.m,a,b);n(this,this.f.l,a,b)};m(r.prototype,u);r.prototype.w=function(a){var b=this.a;this.a=m({},b,a);n(this,this.f.m,a,b);this.i.update(a,this.a);n(this,this.f.l,a,b)};var p=function(){return{data:function(){return{username:""}},methods:{D:function(){console.log("menu toggled");
document.getElementById("app").classList.toggle("menu")}},B:function(){setTimeout(function(){document.getElementById("app").classList.add("loaded")})}}}();m(t.prototype,p.methods,u);t.prototype.w=function(a){var b=this.a;this.a=m({},b,a);n(this,this.f.m,a,b);this.i.update(a,this.a);n(this,this.f.l,a,b);this.v()};window.F=new t({target:document.getElementById("app")})})();
//# sourceMappingURL=app.js.map
