(this["webpackJsonpskunexus-recruit"]=this["webpackJsonpskunexus-recruit"]||[]).push([[0],{11:function(e,t,n){e.exports={formContainer:"PlanetForm_formContainer__1RWKz",formHeader:"PlanetForm_formHeader__261ta",buttonsBlock:"PlanetForm_buttonsBlock__FKFYz",formErrorLabel:"PlanetForm_formErrorLabel__2p-FY",formElement:"PlanetForm_formElement__35UyY",formElementLabel:"PlanetForm_formElementLabel__3Ayxz",formInput:"PlanetForm_formInput__3xY9x",actionButton:"PlanetForm_actionButton__eGZJG"}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r="FETCH_PLANET_REQUEST",a="FETCH_PLANET_SUCCESS",c="FETCH_PLANET_LIST_REQUEST",o="FETCH_PLANET_LIST_SUCCESS"},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="FETCH_FILM_LIST_REQUEST",a="FETCH_FILM_LIST_SUCCESS"},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="FETCH_RESIDENTS_REQUEST",a="FETCH_RESIDENTS_SUCCESS"},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i}));var r=n(12),a=function(e){return{type:r.a,payload:{page:e}}},c=function(e){return{type:r.b,payload:e}},o=function(e){return{type:r.c,payload:e}},i=function(e){return{type:r.d,payload:e}}},34:function(e,t,n){e.exports={button:"IconButton_button__1BPZn",invert:"IconButton_invert__3fwWT"}},38:function(e,t,n){"use strict";var r=n(5),a=n(20),c=n(21),o=n(4),i=n(0),u=n.n(i),s=n(34),l=n.n(s),b=n(39),d=n.n(b);function p(e){var t=e.Icon,n=e.invert,i=e.className,u=Object(c.a)(e,["Icon","invert","className"]);return Object(o.jsx)("button",Object(r.a)(Object(r.a)({className:d()(l.a.button,i,Object(a.a)({},l.a.invert,n))},u),{},{children:Object(o.jsx)(t,{})}))}t.a=u.a.memo(p)},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(18),a=function(e){return{type:r.b,payload:e}},c=function(e){return{type:r.a,payload:e}}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(19),a=function(e){return{type:r.b,payload:e}},c=function(e){return{type:r.a,payload:e}}},77:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),o=n(23),i=n.n(o),u=n(28),s=n.n(u),l=n(98),b=n(16),d=n(25),p=(n(77),n(7)),f=n.n(p),j=n(29),m=n(22),O=n(21),v=n(5),h=n(30),x=n(38),y=n(11),_=n.n(y),E=["desert","grasslands","mountains","mountain ranges","jungle","forests","ocean","lakes","cityscape","grassy hills","rainforests","tundra","ice caves","swamp","gas giant"],g={name:"Name",rotation_period:"Rotation Period",orbital_period:"Orbital Period",diameter:"Diameter",climate:"\u0421limate",gravity:"Gravity",terrain:"Terrain",surface_water:"Surface Water",film_count:"Film Count",residents_count:"Resident Count"};function S(e){var t={};return e.name||(t.name="Name should not be empty"),(null==e.rotation_period||e.rotation_period<=0)&&(t.rotation_period="Rotation period should be positive"),(null==e.orbital_period||e.orbital_period<=0)&&(t.orbital_period="Orbital period should be positive"),(null==e.diameter||e.diameter<=0)&&(t.diameter="Planet diameter should be positive"),e.climate||(t.climate="Climate should be specified"),e.gravity||(t.gravity="Gravity should be specified as based on standard value"),e.terrain&&0!==e.terrain.length||(t.terrain="Terrain should have at least one value"),(null==e.surface_water||e.surface_water<=0)&&(t.surface_water="Surface water should be positive"),t}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C=a.createElement("path",{d:"M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"});function k(e,t){var n=e.title,r=e.titleId,c=I(e,["title","titleId"]);return a.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"clear"):n?a.createElement("title",{id:r},n):null,C)}var T=a.forwardRef(k);n.p;function P(e){var t=e.name,n=e.type,a=void 0===n?"text":n;return Object(r.jsx)(h.a,{name:t,render:function(e){var n=e.input,c=e.meta;return Object(r.jsxs)("div",{className:_.a.formElement,children:[Object(r.jsx)("label",{htmlFor:t,className:_.a.formElementLabel,children:g[t]}),Object(r.jsx)("input",Object(v.a)(Object(v.a)({id:t},n),{},{type:a,className:_.a.formInput})),c.touched&&(c.error||c.submitError)&&Object(r.jsx)("span",{className:_.a.formErrorLabel,children:c.error||c.submitError})]})}})}function F(e){var t=e.planet,n=e.onCloseClick,c=e.onSubmit,o=Object(a.useCallback)(function(){var e=Object(j.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.terrain,r=Object(O.a)(t,["terrain"]),e.abrupt("return",c(Object(v.a)(Object(v.a)({},r),{},{terrain:n.join(", ")})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[c]),i=Object(a.useMemo)((function(){if(t)return Object(v.a)(Object(v.a)({},t),{},{terrain:t.terrain.split(", ")})}),[t]);return Object(r.jsx)("div",{className:_.a.formContainer,children:Object(r.jsx)(h.b,{onSubmit:o,initialValues:i,validate:S,render:function(e){var t=e.handleSubmit,a=e.submitting,c=e.pristine,o=e.form,i=e.errors;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{className:_.a.formHeader,children:[Object(r.jsx)("h2",{children:"EDIT PLANET DETAILS"}),Object(r.jsx)(x.a,{Icon:T,title:"Close",onClick:n,invert:!0})]}),Object(r.jsx)(P,{name:"name"}),Object(r.jsx)(P,{name:"rotation_period",type:"number"}),Object(r.jsx)(P,{name:"orbital_period",type:"number"}),Object(r.jsx)(P,{name:"diameter",type:"number"}),Object(r.jsx)(P,{name:"climate"}),Object(r.jsx)(P,{name:"gravity"}),Object(r.jsx)(h.a,{name:"terrain",type:"select",render:function(e){var t=e.input,n=e.meta;return Object(r.jsxs)("div",{className:_.a.formElement,children:[Object(r.jsx)("label",{className:_.a.formElementLabel,children:"Terrain"}),Object(r.jsx)("select",Object(v.a)(Object(v.a)({},t),{},{multiple:!0,children:E.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})),n.touched&&(n.error||n.submitError)&&Object(r.jsx)("span",{className:_.a.formErrorLabel,children:n.error||n.submitError})]})}}),Object(r.jsx)(P,{name:"surface_water",type:"number"}),Object(r.jsxs)("div",{className:_.a.buttonsBlock,children:[Object(r.jsx)("button",{type:"button",onClick:o.reset,disabled:a||c,className:_.a.actionButton,children:"Reset"}),Object(r.jsx)("button",{type:"submit",disabled:a||c||Object.keys(i).length>0,className:_.a.actionButton,children:"Submit"})]})]})}})})}var L=c.a.memo(F),N={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",boxShadow:"0 0 20px rgba(0, 0, 0, 0.15)"}};var B=Object(d.b)((function(e,t){var n,r=new URLSearchParams(t.location.search).get("edit");return r&&(n=e.planets.planetById[r]),{planet:n,planetId:r}}),(function(e){return{fetchPlanetDetails:function(t){return e(Object(m.c)(t))}}}))((function(e){var t=e.fetchPlanetDetails,n=e.planet,c=e.history,o=e.location,i=e.planetId,u=Object(a.useCallback)((function(){var e=new URLSearchParams(o.search);e.delete("edit"),c.replace({search:e.toString()})}),[c,o]),l=Object(a.useCallback)(function(){var e=Object(j.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e({name:"Some server side error message"})}),1e3)}));case 2:if(n=e.sent){e.next=6;break}return u(),e.abrupt("return");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[u]);return Object(a.useEffect)((function(){!n&&i&&t(i)}),[t,n,i]),Object(r.jsx)(s.a,{isOpen:!!i,onRequestClose:u,style:N,children:n?Object(r.jsx)(L,{onCloseClick:u,planet:n,onSubmit:l}):null})})),R=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,111))})),U=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,112))})),H=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,113))})),D=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,114))})),z=function(){return Object(r.jsxs)(a.Suspense,{fallback:"Loading...",children:[Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/planets",component:R}),Object(r.jsx)(l.b,{exact:!0,path:"/planets/:id",component:U}),Object(r.jsx)(l.b,{exact:!0,path:"/planets/:id/films",component:H}),Object(r.jsx)(l.b,{exact:!0,path:"/planets/:id/residents",component:D}),Object(r.jsx)(l.a,{to:"/planets"})]}),Object(r.jsx)(l.b,{exact:!0,path:"/planets",component:B})]})},A=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,110)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},M=n(13),G=n(57),Q=n(18),Y={filmById:{}},J=n(20),W=n(37),q=n(12),K={planetById:{},nextPage:1,planetsIds:[]},V=n(19),X={residentById:{}},Z=Object(M.c)({planets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.b:var n=t.payload.planets,r=n.reduce((function(e,t){return e[t.id]=t,e}),{}),a=n.map((function(e){return e.id}));return Object(v.a)(Object(v.a)({},e),{},{nextPage:t.payload.nextPage,planetById:Object(v.a)(Object(v.a)({},e.planetById),r),planetsIds:[].concat(Object(W.a)(e.planetsIds),Object(W.a)(a))});case q.d:var c=t.payload.id;return Object(v.a)(Object(v.a)({},e),{},{planetById:Object(v.a)(Object(v.a)({},e.planetById),{},Object(J.a)({},c,t.payload))});default:return e}},residents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.b:return Object(v.a)(Object(v.a)({},e),{},{residentById:t.payload});default:return e}},films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.b:return Object(v.a)(Object(v.a)({},e),{},{filmById:t.payload});default:return e}}}),$=n(8),ee=n(56),te=n.n(ee).a.create({baseURL:"https://swapi.dev/api/"});function ne(e){var t=e.match(/(\d*)\/$/);if(t)return t[1]}function re(e){var t=e.match(/page=(\d*)$/);return t?parseInt(t[1],10):null}var ae=n(53),ce=f.a.mark(ie),oe=f.a.mark(ue);function ie(e){var t,n,r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object($.a)(t.map((function(e){return Object($.b)(te.get,"films/".concat(e,"/"))})));case 4:return n=a.sent,r=n.reduce((function(e,t){var n=t.data,r=ne(n.url);return r&&(e[r]=Object(v.a)(Object(v.a)({},n),{},{id:r})),e}),{}),a.next=8,Object($.c)(Object(ae.b)(r));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0);case 13:case"end":return a.stop()}}),ce,null,[[1,10]])}function ue(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.d)(Q.a,ie)]);case 2:case"end":return e.stop()}}),oe)}var se=f.a.mark(pe),le=f.a.mark(fe),be=f.a.mark(je);function de(e){var t=ne(e.url);if(t){var n=e.residents,r=e.films,a=Object(O.a)(e,["residents","films"]),c=n.map(ne),o=r.map(ne);return Object(v.a)(Object(v.a)({},a),{},{id:t,residentsIds:c,filmsIds:o})}}function pe(e){var t,n,r,a,c,o,i;return f.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,t=e.payload.page,u.next=4,Object($.b)(te.get,"planets?page=".concat(t));case 4:return n=u.sent,r=n.data,a=r.results,c=r.next,o=a.map(de).filter(Boolean),i=c?re(c):null,u.next=12,Object($.c)(Object(m.b)({planets:o,nextPage:i}));case 12:u.next=17;break;case 14:u.prev=14,u.t0=u.catch(0),console.log(u.t0);case 17:case"end":return u.stop()}}),se,null,[[0,14]])}function fe(e){var t,n,r,a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,c.next=4,Object($.b)(te.get,"planets/".concat(t,"/"));case 4:if(n=c.sent,r=n.data,!(a=de(r))){c.next=10;break}return c.next=10,Object($.c)(Object(m.d)(a));case 10:c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),console.log(c.t0);case 15:case"end":return c.stop()}}),le,null,[[0,12]])}function je(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.d)(q.a,pe),Object($.d)(q.c,fe)]);case 2:case"end":return e.stop()}}),be)}var me=n(54),Oe=f.a.mark(he),ve=f.a.mark(xe);function he(e){var t,n,r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object($.a)(t.map((function(e){return Object($.b)(te.get,"people/".concat(e,"/"))})));case 4:return n=a.sent,r=n.reduce((function(e,t){var n=t.data,r=ne(n.url);return r&&(e[r]=Object(v.a)(Object(v.a)({},n),{},{id:r})),e}),{}),a.next=8,Object($.c)(Object(me.b)(r));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0);case 13:case"end":return a.stop()}}),Oe,null,[[1,10]])}function xe(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.d)(V.a,he)]);case 2:case"end":return e.stop()}}),ve)}var ye=f.a.mark(_e);function _e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([je(),xe(),ue()]);case 2:case"end":return e.stop()}}),ye)}var Ee=function(e){var t=Object(G.a)(),n=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d)(Object(M.a)(t)),r=Object(M.e)(Z,e,n);return t.run(_e),r},ge=Object(b.a)(),Se=Ee({});s.a.setAppElement(document.querySelector("#modal")),i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:Se,children:Object(r.jsx)(l.c,{history:ge,children:Object(r.jsx)(z,{})})})}),document.getElementById("root")),A()}},[[97,1,2]]]);
//# sourceMappingURL=main.6972aafc.chunk.js.map