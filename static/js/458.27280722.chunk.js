/*! For license information please see 458.27280722.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkinstagram_clone_project=self.webpackChunkinstagram_clone_project||[]).push([[458],{2458:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(4165),o=r(5861),a=r(885),i=r(2791),u=r(4880),c=r(1523),s=r(3620),l=r(8155),f=r(8944),p=r(184);function h(){var t=(0,u.k6)(),e=(0,i.useContext)(s.Z).firebase,r=(0,i.useState)(""),h=(0,a.Z)(r,2),d=h[0],m=h[1],y=(0,i.useState)(""),v=(0,a.Z)(y,2),w=v[0],g=v[1],x=(0,i.useState)(""),b=(0,a.Z)(x,2),Z=b[0],j=b[1],L=(0,i.useState)(""),k=(0,a.Z)(L,2),E=k[0],N=k[1],I=(0,i.useState)(""),S=(0,a.Z)(I,2),_=S[0],P=S[1],O=""===E||""===Z,G=function(){var r=(0,o.Z)((0,n.Z)().mark((function r(o){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.preventDefault(),r.next=3,(0,f.$K)(d);case 3:if(r.sent){r.next=24;break}return r.prev=5,r.next=8,e.auth().createUserWithEmailAndPassword(Z,E);case 8:return a=r.sent,r.next=11,a.user.updateProfile({displayName:d});case 11:return r.next=13,e.firestore().collection("users").add({userId:a.user.uid,username:d.toLowerCase(),fullName:w,emailAddress:Z.toLowerCase(),following:[],followers:[],dateCreated:Date.now()});case 13:t.push(l.h1),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(5),g(""),j(""),N(""),P(r.t0.message);case 22:r.next=26;break;case 24:m(""),P("The username is already used, please try another one.");case 26:case"end":return r.stop()}}),r,null,[[5,16]])})));return function(t){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){document.title="Instagram - Sign Up"}),[]),(0,p.jsxs)("div",{className:"container flex mx-auto max-w-screen-md items-center h-screen",children:[(0,p.jsx)("div",{className:"flex w-3/5",children:(0,p.jsx)("img",{src:"/images/insta-pic.jpeg",alt:"Instagram app"})}),(0,p.jsxs)("div",{className:"flex flex-col w-2/5",children:[(0,p.jsxs)("div",{className:"flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded",children:[(0,p.jsx)("h1",{className:"flex justify-center w-full",children:(0,p.jsx)("img",{src:"/images/logo.jpg",alt:"Instagram",className:"mt-2 w-6/12 mb-4"})}),_&&(0,p.jsx)("p",{className:"mb-4 text-xs text-red-primary",children:_}),(0,p.jsxs)("form",{onSubmit:G,method:"POST",children:[(0,p.jsx)("input",{"aria-label":"Enter your username",type:"text",placeholder:"Username",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(t){var e=t.target;return m(e.value)},value:d}),(0,p.jsx)("input",{"aria-label":"Enter your full name",type:"text",placeholder:"Full name",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(t){var e=t.target;return g(e.value)},value:w}),(0,p.jsx)("input",{"aria-label":"Enter your email address",type:"text",placeholder:"Email address",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(t){var e=t.target;return j(e.value)},value:Z}),(0,p.jsx)("input",{"aria-label":"Enter your password",type:"password",placeholder:"Password",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(t){var e=t.target;return N(e.value)},value:E}),(0,p.jsx)("button",{disabled:O,type:"submit",className:"bg-blue-medium text-white w-full rounded h-8 font-bold\n            ".concat(O&&"opacity-50"),children:"Sign Up"})]})]}),(0,p.jsx)("div",{className:"flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary",children:(0,p.jsxs)("p",{className:"text-sm",children:["Have an account?"," ",(0,p.jsx)(c.rU,{to:l.ym,className:"font-bold text-blue-medium",children:"Login"})]})})]})]})}},8944:function(t,e,r){r.d(e,{$K:function(){return s},Gm:function(){return N},IU:function(){return k},NS:function(){return v},T6:function(){return g},dQ:function(){return f},oJ:function(){return j},ve:function(){return m},wP:function(){return b},xD:function(){return h}});var n=r(885),o=r(2982),a=r(9236),i=r(4165),u=r(5861),c=r(2788);function s(t){return l.apply(this,arguments)}function l(){return(l=(0,u.Z)((0,i.Z)().mark((function t(e){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.w.firestore().collection("users").where("username","==",e.toLowerCase()).get();case 2:return r=t.sent,t.abrupt("return",r.docs.length>0);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return(p=(0,u.Z)((0,i.Z)().mark((function t(e){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.w.firestore().collection("users").where("username","==",e.toLowerCase()).get();case 2:return r=t.sent,t.abrupt("return",r.docs.map((function(t){return(0,a.Z)((0,a.Z)({},t.data()),{},{docId:t.id})})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.w.firestore().collection("users").where("userId","==",e).get();case 2:return r=t.sent,n=r.docs.map((function(t){return(0,a.Z)((0,a.Z)({},t.data()),{},{docId:t.id})})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e){return y.apply(this,arguments)}function y(){return(y=(0,u.Z)((0,i.Z)().mark((function t(e,r){var n,u,s;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.w.firestore().collection("users"),n=r.length>0?n.where("userId","not-in",[].concat((0,o.Z)(r),[e])):n.where("userId","!=",e),t.next=4,n.limit(10).get();case 4:return u=t.sent,s=u.docs.map((function(t){return(0,a.Z)((0,a.Z)({},t.data()),{},{docId:t.id})})),t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e,r){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,i.Z)().mark((function t(e,r,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.w.firestore().collection("users").doc(e).update({following:n?c.G.arrayRemove(r):c.G.arrayUnion(r)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e,r){return x.apply(this,arguments)}function x(){return(x=(0,u.Z)((0,i.Z)().mark((function t(e,r,n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.w.firestore().collection("users").doc(e).update({followers:n?c.G.arrayRemove(r):c.G.arrayUnion(r)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,e){return Z.apply(this,arguments)}function Z(){return Z=(0,u.Z)((0,i.Z)().mark((function t(e,r){var n,o,s;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.w.firestore().collection("photos").where("userId","in",r).get();case 2:return n=t.sent,o=n.docs.map((function(t){return(0,a.Z)((0,a.Z)({},t.data()),{},{docId:t.id})})),t.next=6,Promise.all(o.map(function(){var t=(0,u.Z)((0,i.Z)().mark((function t(r){var n,o,u;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,r.likes.includes(e)&&(n=!0),t.next=4,h(r.userId);case 4:return o=t.sent,u=o[0].username,t.abrupt("return",(0,a.Z)((0,a.Z)({username:u},r),{},{userLikedPhoto:n}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 6:return s=t.sent,t.abrupt("return",s);case 8:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}function j(t){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)((0,i.Z)().mark((function t(e){var r,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.w.firestore().collection("photos").where("userId","==",e).get();case 2:return r=t.sent,n=r.docs.map((function(t){return(0,a.Z)((0,a.Z)({},t.data()),{},{docId:t.id})})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return E.apply(this,arguments)}function E(){return(E=(0,u.Z)((0,i.Z)().mark((function t(e,r){var o,u,s,l,f;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.w.firestore().collection("users").where("username","==",e).where("following","array-contains",r).get();case 2:return o=t.sent,u=o.docs.map((function(t){return(0,a.Z)((0,a.Z)({},t.data()),{},{docId:t.id})})),s=(0,n.Z)(u,1),l=s[0],f=void 0===l?{}:l,t.abrupt("return",f.userId);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e,r,n,o){return I.apply(this,arguments)}function I(){return(I=(0,u.Z)((0,i.Z)().mark((function t(e,r,n,o,a){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(r,o,e);case 2:return t.next=4,g(n,a,e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},5861:function(t,e,r){function n(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:j(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=f;var h={};function d(){}function m(){}function y(){}var v={};l(v,u,(function(){return this}));var w=Object.getPrototypeOf,g=w&&w(w(I([])));g&&g!==e&&r.call(g,u)&&(v=g);var x=y.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function o(a,i,u,c){var s=p(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=L(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=y,a(x,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(Z.prototype),l(Z.prototype,c,(function(){return this})),t.AsyncIterator=Z,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new Z(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),l(x,s,"Generator"),l(x,u,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}},2982:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r(907);var o=r(181);function a(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=458.27280722.chunk.js.map