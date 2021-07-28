(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{32:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return L}));var c=n(2),r={fetchContactsRequest:Object(c.b)("phonebook/fetchContactsRequest"),fetchContactsSuccess:Object(c.b)("phonebook/fetchContactsSuccess"),fetchContactsError:Object(c.b)("phonebook/fetchContactsError"),addContactRequest:Object(c.b)("phonebook/addContactRequest"),addContactSuccess:Object(c.b)("phonebook/addContactSuccess"),addContactError:Object(c.b)("phonebook/addContactError"),deleteContactRequest:Object(c.b)("phonebook/deleteContactRequest"),deleteContactSuccess:Object(c.b)("phonebook/deleteContactSuccess"),deleteContactError:Object(c.b)("phonebook/deleteContactError"),changeFilter:Object(c.b)("phonebook/changeFilter")},o=n(13),a=n.n(o),u=r.fetchContactsRequest,s=r.fetchContactsSuccess,i=(r.fetchContactsError,r.addContactRequest),b=r.addContactSuccess,j=r.addContactError,l=r.deleteContactRequest,d=r.deleteContactSuccess,O=r.deleteContactError;a.a.defaults.baseURL="https://connections-api.herokuapp.com";var h,f,g={fetchContacts:function(){return function(t){t(u()),a.a.get("/contacts").then((function(e){var n=e.data;return t(s(n))})).catch((function(e){return t(j(e))}))}},addContact:function(t,e){return function(n){var c={name:t,number:e};n(i()),a.a.post("/contacts",c).then((function(t){var e=t.data;return n(b(e))})).catch((function(t){return n(j(t))}))}},deleteContact:function(t){return function(e){e(l()),a.a.delete("/contacts/".concat(t)).then((function(){return e(d(t))})).catch((function(t){return e(O(t))}))}}},p=n(3),C=n(23),v=n(6),m=r.fetchContactsRequest,x=r.fetchContactsSuccess,S=r.fetchContactsError,k=r.addContactRequest,E=r.addContactSuccess,R=r.addContactError,q=r.deleteContactRequest,A=r.deleteContactSuccess,U=r.deleteContactError,y=r.changeFilter,N=Object(c.c)([],(h={},Object(p.a)(h,x,(function(t,e){return e.payload})),Object(p.a)(h,E,(function(t,e){var n=e.payload;return[].concat(Object(C.a)(t),[n])})),Object(p.a)(h,A,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),h)),T=Object(c.c)("",Object(p.a)({},y,(function(t,e){return e.payload}))),I=Object(c.c)(!1,(f={},Object(p.a)(f,m,(function(){return!0})),Object(p.a)(f,x,(function(){return!1})),Object(p.a)(f,S,(function(){return!1})),Object(p.a)(f,k,(function(){return!0})),Object(p.a)(f,E,(function(){return!1})),Object(p.a)(f,R,(function(){return!1})),Object(p.a)(f,q,(function(){return!0})),Object(p.a)(f,A,(function(){return!1})),Object(p.a)(f,U,(function(){return!1})),f)),L=Object(v.b)({contacts:N,filter:T,loading:I})},41:function(t,e,n){},45:function(t,e,n){},75:function(t,e,n){},77:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return S})),n.d(e,"a",(function(){return A})),n.d(e,"c",(function(){return U}));var c,r,o,a,u=n(2),s=Object(u.b)("auth/registerRequest"),i=Object(u.b)("auth/registerSuccess"),b=Object(u.b)("auth/registerError"),j=Object(u.b)("auth/loginRequest"),l=Object(u.b)("auth/loginSuccess"),d=Object(u.b)("auth/loginError"),O={registerRequest:s,registerSuccess:i,registerError:b,logoutRequest:Object(u.b)("auth/logoutRequest"),logoutSuccess:Object(u.b)("auth/logoutSuccess"),logoutError:Object(u.b)("auth/logoutError"),loginRequest:j,loginSuccess:l,loginError:d,getCurrentUserRequest:Object(u.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(u.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(u.b)("auth/getCurrentUserError")},h=n(3),f=n(6),g={name:null,email:null},p=Object(u.c)(g,(c={},Object(h.a)(c,O.registerSuccess,(function(t,e){return e.payload.user})),Object(h.a)(c,O.loginSuccess,(function(t,e){return e.payload.user})),Object(h.a)(c,O.logoutSuccess,(function(){return g})),Object(h.a)(c,O.getCurrentUserSuccess,(function(t,e){return e.payload})),c)),C=Object(u.c)(null,(r={},Object(h.a)(r,O.registerSuccess,(function(t,e){return e.payload.token})),Object(h.a)(r,O.loginSuccess,(function(t,e){return e.payload.token})),Object(h.a)(r,O.logoutSuccess,(function(){return null})),r)),v=function(t,e){return e.payload},m=Object(u.c)(null,(o={},Object(h.a)(o,O.registerError,v),Object(h.a)(o,O.loginError,v),Object(h.a)(o,O.logoutError,v),Object(h.a)(o,O.getCurrentUserError,v),o)),x=Object(u.c)(!1,(a={},Object(h.a)(a,O.registerSuccess,(function(){return!0})),Object(h.a)(a,O.loginSuccess,(function(){return!0})),Object(h.a)(a,O.getCurrentUserSuccess,(function(){return!0})),Object(h.a)(a,O.registerError,(function(){return!1})),Object(h.a)(a,O.loginError,(function(){return!1})),Object(h.a)(a,O.getCurrentUserError,(function(){return!1})),Object(h.a)(a,O.logoutSuccess,(function(){return!1})),a)),S=Object(f.b)({user:p,isAuthenticated:x,token:C,error:m}),k=n(13),E=n.n(k);E.a.defaults.baseURL="https://connections-api.herokuapp.com";var R=function(t){E.a.defaults.headers.common.Authorization="Bearer ".concat(t)},q=function(){E.a.defaults.headers.common.Authorization=""},A={register:function(t){return function(e){e(O.registerRequest()),E.a.post("/users/signup",t).then((function(t){var n=t.data;R(n.token),e(O.registerSuccess(n))})).catch((function(t){var n=t.message;return e(O.registerError(n))}))}},logOut:function(){return function(t){t(O.logoutRequest()),E.a.post("/users/logout").then((function(){q(),t(O.logoutSuccess())})).catch((function(e){var n=e.message;return t(O.logoutError(n))}))}},logIn:function(t){return function(e){e(O.loginRequest()),E.a.post("/users/login",t).then((function(t){var n=t.data;R(n.token),e(O.loginSuccess(n))})).catch((function(t){var n=t.message;return e(O.loginError(n))}))}},getCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(R(n),t(O.getCurrentUserRequest()),E.a.get("/users/current").then((function(e){var n=e.data;t(O.getCurrentUserSuccess(n))})).catch((function(e){var n=e.message;return t(O.getCurrentUserError(n))})))}}},U={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUsername:function(t){return t.auth.user.name}}},82:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(20),a=n.n(o),u=n(15),s=n(42),i=n(23),b=n(2),j=n(17),l=n(43),d=n.n(l),O=n(32),h=n(8),f=Object(i.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),g={key:"auth",storage:d.a,whitelist:["token"]},p=Object(b.a)({reducer:{auth:Object(j.g)(g,h.b),contacts:O.c},middleware:f,devTools:!1}),C={store:p,persistor:Object(j.h)(p)},v=n(28),m=n(29),x=n(31),S=n(30),k=n(5),E=n(9),R=(n(75),n(1)),q=function(t){var e=t.children;return Object(R.jsx)("div",{className:"Container",children:e})},A=(n(77),n(41),Object(E.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(R.jsxs)("nav",{children:[Object(R.jsx)(u.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"nav-link__active",children:"Main"}),e&&Object(R.jsx)(u.b,{to:"/contacts",exact:!0,className:"nav-link",activeClassName:"nav-link__active",children:"Contacts"})]})}))),U=function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(u.b,{to:"/register",exact:!0,className:"nav-link",activeClassName:"nav-link__active",children:"Registration"}),Object(R.jsx)(u.b,{to:"/login",exact:!0,className:"nav-link",activeClassName:"nav-link__active",children:"Log In"})]})},y=n.p+"static/media/defaultAvatar.12e39dc7.jpg",N=(n(82),{onLogout:h.a.logOut}),T=Object(E.b)((function(t){return{name:h.c.getUsername(t),avatar:y}}),N)((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(R.jsxs)("div",{className:"user-container",children:[Object(R.jsx)("img",{src:e,alt:"",width:"32",className:"user-avatar"}),Object(R.jsxs)("span",{className:"user-name",children:["Welcome, ",n]}),Object(R.jsx)("button",{type:"button",onClick:c,className:"user-btn",children:"Logout"})]})})),I=Object(E.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(R.jsxs)("header",{className:"app-header",children:[Object(R.jsx)(A,{}),e?Object(R.jsx)(T,{}):Object(R.jsx)(U,{})]})})),L=n(16),_=n(22),z=["component","isAuthenticated","redirectTo"],F=Object(E.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(_.a)(t,z);return Object(R.jsx)(k.b,Object(L.a)(Object(L.a)({},r),{},{render:function(t){return n&&r.restricted?Object(R.jsx)(k.a,{to:c}):Object(R.jsx)(e,Object(L.a)({},t))}}))})),w=["component","isAuthenticated","redirectTo"],B=Object(E.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(_.a)(t,w);return Object(R.jsx)(k.b,Object(L.a)(Object(L.a)({},r),{},{render:function(t){return n?Object(R.jsx)(e,Object(L.a)({},t)):Object(R.jsx)(k.a,{to:c})}}))})),M=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,92))})),D=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,93))})),G=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,94))})),J=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,91))})),P=function(t){Object(x.a)(n,t);var e=Object(S.a)(n);function n(){return Object(v.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(R.jsxs)(q,{children:[Object(R.jsx)(I,{}),Object(R.jsx)(c.Suspense,{fallback:Object(R.jsx)("h3",{children:"Loading..."}),children:Object(R.jsxs)(k.d,{children:[Object(R.jsx)(F,{exact:!0,path:"/",component:M}),Object(R.jsx)(F,{path:"/register",restricted:!0,redirectTo:"/contacts",component:D}),Object(R.jsx)(F,{path:"/login",restricted:!0,redirectTo:"/contacts",component:G}),Object(R.jsx)(B,{path:"/contacts",redirectTo:"/login",component:J})]})})]})}}]),n}(c.Component),W={onGetCurrentUser:h.a.getCurrentUser},H=Object(E.b)(null,W)(P),K=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,90)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};n(83),n(45);a.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(E.a,{store:C.store,children:Object(R.jsx)(s.a,{loading:null,persistor:C.persistor,children:Object(R.jsx)(u.a,{children:Object(R.jsx)(H,{})})})})}),document.getElementById("root")),K()}},[[84,1,2]]]);
//# sourceMappingURL=main.d76d5997.chunk.js.map