(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{75193:function(n,e,r){"use strict";r.r(e);var a=r(63109),i=r.n(a),t=(r(35666),r(94435)),c=r.n(t),d=r(51161),o=r.n(d),s=r(77766),l=r.n(s),u=r(2991),f=r.n(u),p=r(12386),h=r(74383),g=r(80077),v=r(73735),z=r(79067),_=r(83659),m=h.h.getStore(),b={},x={id:"Username",current_level:"Level",ig_user_id:"Insta",is_admin:"Player Type"};function w(n){var e,r,a=n.data,i=a.secure_data||b,t=m.isLoggedIn&&m.userData.id;return(0,p.az)("div",{children:[(0,p.az)("div",{class:"heading-text bfont",children:"Profile"}),(0,p.az)("div",{class:"prof-data-box",children:f()(e=l()(r=["name","id","current_level","is_admin"]).call(r,(0,_.Z)(i))).call(e,(function(n){return(0,p.az)("div",{class:"prof-container",children:[(0,p.az)("div",{class:"heading-text prof-field",children:x[n]||n}),(0,p.az)("div",{class:"prof-field",children:A(a,i,n)})]})}))}),P(a,t)&&(0,p.az)(p.A,{href:"/__admin__",class:"heading-text hoverable landing-action-button",children:"Admin Panel"}),a.id===t&&(0,p.az)(p.A,{href:"/logout",class:"heading-text hoverable landing-action-button",children:"Logout"})]})}function k(){return y.apply(this,arguments)}function y(){return(y=o()(i().mark((function n(){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=new(c())(p.F0.getQs),r=e.get("id"),!m.isLoggedIn||r!==m.userData.id){n.next=6;break}a=m.userData,n.next=10;break;case 6:return n.next=8,(0,v.A)(g.EA.getUserDetails+"?id="+r);case 8:a=(a=n.sent).data;case 10:if(!a){n.next=12;break}return n.abrupt("return",(function(){return(0,p.az)(w,{data:a})}));case 12:return n.abrupt("return",(function(){return(0,p.az)(z.O,{errorHead:"Profile Error",reasons:["User does not exist"],close:function(){return(0,p.uX)("/")}})}));case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function A(n,e,r){var a=r in n?n[r]:e[r];return null==a&&(a="N/A"),"is_admin"===r&&(a=!0===a?"Team Halocrypt":"Player"),a}function P(n,e){return n.is_admin&&n.id===e}var L={id:"Loading..",current_level:"Infinity",has_verified_email:null,name:"??"};e.default=function(){return new(c())(p.F0.getQs).get("id")?(0,p.az)(p.gr,{componentPromise:k,fallbackComponent:function(){return(0,p.az)(w,{data:L})}}):m.isLoggedIn?(0,p.uX)("/profile?id="+m.userData.id):(0,p.uX)("/login")}},79067:function(n,e,r){"use strict";r.d(e,{O:function(){return c},P:function(){return d}});var a=r(2991),i=r.n(a),t=r(12386);function c(n){var e;return(0,t.az)("div",{class:"app-popup",children:[(0,t.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,t.az)("div",{children:n.errorHead}),(0,t.az)("div",{class:"err-reasons",children:(0,t.az)("div",{children:i()(e=n.reasons).call(e,(function(n){return(0,t.az)("div",{children:[" - ",n]})}))})}),(0,t.az)("button",{class:"app-popup-close",onClick:n.close,children:"OK"})]})}var d=/([^\w]|_)/g}}]);