(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1128:function(t,e,n){t.exports=n(7784)},6007:function(t,e,n){"use strict";n.d(e,{u:function(){return _},k:function(){return w}});n(1539),n(8674);var r,a=n(1128),i=n.n(a),o=n(3032),s=n.n(o),u=n(875),c=n.n(u),l=n(4103),d=n.n(l),p=n(77),h=n(3735),f=n(4383),v=n(9369),g=(0,v.Z)({},window.__initConfig);window.__initConfig=null;var m=f.h.getStore(),_=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&d()(r=c().prototype.then).call(r,c().resolve())||s(),w=new(function(){function t(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile",this.passwordResetRequested="password-reset"}var e=t.prototype;return e.__shouldPostLog=function(){return!p.mH},e._admin_getLogs=function(){if(m.isLoggedIn&&m.userData.is_admin)return(0,h.A)(p.PW.getLogs)},e.sendUserLog=function(t){var e="string"==typeof t?{type:t}:t,n=(0,v.Z)({},e,g);this.__shouldPostLog()?_((function(){return(0,h.V)(p.PW.addLog,n)})):console.log("prod log post ->",n)},t}());window.onerror=function(t,e,n,r,a){var o=a||{};t=t||o.message||"";var s=a.line||o.message||0,u=a.column||0,c=o.script||"",l=o.stackTrace||o.stack||"",d=i()(),p=location.href;w.sendUserLog({type:"js-error",timestamp:d,message:t,line:s,column:u,script:c,stack:l,url:p,source:e})}},2747:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});n(8309);var r=n(2991),a=n.n(r),i=n(5843),o=n.n(i),s=n(3109),u=n.n(s),c=(n(5666),n(1161)),l=n.n(c),d=n(7766),p=n.n(d),h=n(1222),f=n.n(h),v=n(4382),g=n.n(v),m=n(7672),_=n.n(m),w=n(2386),b=n(9710),x=n(9067),I=n(8118),S=n(3662),y=n(4383),z=n(6007),k=n(9264),L=y.h.getStore(),E=k.R0,C=function(t){function e(){for(var e,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=t.call.apply(t,p()(e=[this]).call(e,a))||this,_()(f()(n),"state",{user:"",email:"",name:"",password:"",conf_pass:"",school:"",ig_user_id:"",currentInputIndex:0}),_()(f()(n),"fieldsOrder",["name","user","email","school","ig_user_id","password","conf_pass"]),_()(f()(n),"labelTexts",{school:"School (Optional)",ig_user_id:"Instagram (Optional)",conf_pass:"Confirm password",user:"Username"}),_()(f()(n),"resetError",(function(){return n.setState({hasError:!1,error:null})})),_()(f()(n),"_validate_password",k.Bj),_()(f()(n),"_validate_user",k.RX),_()(f()(n),"_validate_name",k.u2),_()(f()(n),"_validate_email",k.sQ),_()(f()(n),"_validate_school",k.oS),_()(f()(n),"_validate_ig_user_id",k.oS),_()(f()(n),"onSubmit",function(){var t=l()(u().mark((function t(e){var r,a,i,o,s,c,l,d,p,h,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.state.loading){t.next=2;break}return t.abrupt("return");case 2:if(e.preventDefault(),r=n.state.currentInputIndex,a=n.fieldsOrder[r],!(i=n["_validate_"+a](n.state[a])).valid){t.next=21;break}if(r===n.fieldsOrder.length-1){t.next=9;break}return t.abrupt("return",n.setState({currentInputIndex:r+1,hasError:!1,error:null}));case 9:return o=n.state,s=o.user,c=o.email,l=o.name,d=o.password,p=o.school,h=o.ig_user_id,n.setState({loading:!0}),t.next=13,I.y.createAccount({user:s,email:c,name:l,password:d,school:p,ig_user_id:h});case 13:if(!(f=t.sent).error){t.next=16;break}return t.abrupt("return",n.setState({hasError:!0,error:f.error,loading:!1}));case 16:if(!f.id){t.next=19;break}return z.k.sendUserLog(z.k.registerActionComplete),t.abrupt("return",(0,w.uX)("/login"));case 19:t.next=22;break;case 21:n.setState({hasError:!0,error:i.error});case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),_()(f()(n),"_decrementState",(function(){n.setState((function(t){return{currentInputIndex:t.currentInputIndex-1}}))})),n}g()(e,t);var n=e.prototype;return n.componentDidMount=function(){t.prototype.componentDidMount.call(this),z.k.sendUserLog(z.k.pageViewRegistered)},n.componentDidUpdate=function(){if(L.isLoggedIn)return(0,w.uX)("/profile");var t=document.getElementById("input___"+this.state.currentInputIndex);t&&t.focus()},n._validate_conf_pass=function(t){return t!==this.state.password?{error:E.pwNomatch}:k.Vy},n.onInput=function(t){var e=this;return function(n){var r,a,i=n.target.value;"password"!==n&&"conf_pass"!==n&&(i=o()(a=i||"").call(a));e.setState(((r={})[t]=i||"",r))}},n.render=function(t,e){var n=e.currentInputIndex===this.fieldsOrder.length-1;return(0,w.az)("div",{class:"form-doc",children:[(0,w.az)("div",{class:"form-title heading-text",children:"Register"}),(0,w.az)("div",{class:"form-ext-text heading-text clr",children:"Let's Get You Started"}),e.hasError&&(0,w.az)(R,{close:this.resetError,reason:e.error}),(0,w.az)("div",{class:"form-stx",children:[(0,w.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,w.az)(D,{instance:this}),(0,w.az)(A,{state:e,decrement:this._decrementState,isLastInput:n}),e.loading&&(0,w.az)("div",{children:"Hang on, getting you signed up"})]}),(0,w.az)("div",{class:"inst",children:(0,w.az)(w.A,{href:"/login",class:"heading-text clr ",children:"Want to Login Instead?"})}),(0,w.az)("div",{class:"social-link-container",children:[(0,w.az)("a",{href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,w.az)("a",{href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})]})]})},e}(S.Z);function A(t){var e=t.state,n=t.decrement,r=t.isLastInput;return(0,w.az)("div",{class:"form-action-controls",children:[0!==e.currentInputIndex&&(0,w.az)("span",{class:"form-act back",onClick:n,"aria-label":"previous step"}),r?(0,w.az)("button",{"aria-label":"Register",style:{marginLeft:"auto"},class:"heading-text submit-button",children:"Register"}):(0,w.az)("button",{class:"form-act fwd","aria-label":"next step"})]})}var P={email:"email",password:"password",conf_pass:"password"};function D(t){var e,n=t.instance;return a()(e=n.fieldsOrder).call(e,(function(t,e){return e===n.state.currentInputIndex&&(0,w.az)(b.H,{id:"input___"+e,inputClass:"form-anim",value:n.state[t],type:P[t]||"text",labelText:n.labelTexts[t]||t,onInput:n.onInput(t)})}))}function R(t){return(0,w.az)(w.HY,{children:[(0,w.az)("div",{class:"mask"}),(0,w.az)(x.OK,{errorHead:"Can't register",close:t.close,reasons:[t.reason]})]})}},3662:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(7766),a=n.n(r),i=n(1222),o=n.n(i),s=n(4382),u=n.n(s),c=n(7672),l=n.n(c),d=n(2386),p=n(4383),h=function(t){function e(){for(var e,n,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=t.call.apply(t,a()(e=[this]).call(e,i))||this,l()(o()(n),"_globalStoreStateChanged",(function(){return n.setState({hasNewData:!0})})),n}u()(e,t);var n=e.prototype;return n.componentDidMount=function(){p.h.subscribe(this._globalStoreStateChanged)},n.componentWillUnmount=function(){p.h.unsubscribe(this._globalStoreStateChanged)},e}(d.wA)},9710:function(t,e,n){"use strict";n.d(e,{H:function(){return f}});var r=n(1942),a=n.n(r),i=n(7766),o=n.n(i),s=n(1222),u=n.n(s),c=n(4382),l=n.n(c),d=n(7672),p=n.n(d),h=n(2386),f=function(t){function e(){for(var e,n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=t.call.apply(t,o()(e=[this]).call(e,a))||this,p()(u()(n),"state",{id:Math.random(),isFocused:!1,value:n.props.value||""}),p()(u()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),p()(u()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),p()(u()(n),"onInput",(function(t){return n.setState({value:t.target.value})})),p()(u()(n),"__onInput",(function(t){var e=n.props.onInput;n.onInput(t),null!=e&&e(t)})),n}return l()(e,t),e.prototype.render=function(t,e){var n=t.id,r=t.labelText,a=void 0===r?"":r,i=t.type,o=void 0===i?"text":i,s=t.inputClass,u=t.extraProps,c=e.isFocused,l=e.moveDown,d=n||this.state.id,p=this.state.value,f=["_animate",c||p?"moveup":"",l?"movedown":""];return(0,h.h)("div",{class:"user-input-anim "+(s||"")},(0,h.h)("label",{class:f,for:d},a),(0,h.h)(v,{onFocus:this.onFocus,onBlur:this.onBlur,type:o,value:p,extraProps:u,id:d,onInput:this.__onInput}))},e}(h.wA);function v(t){var e=t.onFocus,n=t.onBlur,r=t.onInput,i=t.id,o=t.type,s=t.value,u=t.extraProps;return(0,h.h)("input",a()(a()({onFocus:e,onBlur:n,onInput:r,id:i,value:s,type:o},u),{},{class:"paper-input"}))}},9067:function(t,e,n){"use strict";n.d(e,{OK:function(){return u},Pt:function(){return c}});var r=n(2991),a=n.n(r),i=n(1942),o=n.n(i),s=n(2386);function u(t){return(0,s.az)(l,o()(o()({},t),{},{title:"Something Ain't Right"}))}var c=/([^\w]|_)/g;function l(t){var e;return(0,s.az)("div",{class:"app-popup",children:[(0,s.az)("div",{class:"heading-text clr app-popup-title",children:t.title}),(0,s.az)("div",{children:t.errorHead}),(0,s.az)("div",{class:"err-reasons",children:(0,s.az)("div",{children:a()(e=t.reasons).call(e,(function(t){return(0,s.az)("div",{children:[" - ",t]})}))})}),(0,s.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}},9264:function(t,e,n){"use strict";n.d(e,{Vy:function(){return a},sQ:function(){return i},oS:function(){return o},Bj:function(){return s},RX:function(){return u},u2:function(){return c},R0:function(){return l}});n(4916),n(5306);var r=n(9067),a={valid:!0};function i(t){return t?a:{error:"Value required"}}var o=function(){return a};function s(t){return t.length<5?{error:l.pwLength}:a}function u(t){var e=t.length;return e<3||e>30?{error:l.userLength}:t!==t.replace(r.Pt,"")?{error:l.invalidCharacters}:a}function c(t){var e=t.length;return!e||e>30?{error:l.nameLength}:a}var l={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}},1103:function(t,e,n){n(5160);var r=n(4058);t.exports=r.Date.now},5160:function(t,e,n){n(6887)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},7784:function(t,e,n){var r=n(1103);t.exports=r},5306:function(t,e,n){"use strict";var r=n(7007),a=n(9670),i=n(7908),o=n(7466),s=n(9958),u=n(4488),c=n(1530),l=n(7651),d=Math.max,p=Math.min,h=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,_=g?"$":"$0";return[function(n,r){var a=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!g&&m||"string"==typeof r&&-1===r.indexOf(_)){var i=n(e,t,this,r);if(i.done)return i.value}var u=a(t),h=String(this),f="function"==typeof r;f||(r=String(r));var v=u.global;if(v){var b=u.unicode;u.lastIndex=0}for(var x=[];;){var I=l(u,h);if(null===I)break;if(x.push(I),!v)break;""===String(I[0])&&(u.lastIndex=c(h,o(u.lastIndex),b))}for(var S,y="",z=0,k=0;k<x.length;k++){I=x[k];for(var L=String(I[0]),E=d(p(s(I.index),h.length),0),C=[],A=1;A<I.length;A++)C.push(void 0===(S=I[A])?S:String(S));var P=I.groups;if(f){var D=[L].concat(C,E,h);void 0!==P&&D.push(P);var R=String(r.apply(void 0,D))}else R=w(L,h,E,C,P,r);E>=z&&(y+=h.slice(z,E)+R,z=E+L.length)}return y+h.slice(z)}];function w(t,n,r,a,o,s){var u=r+t.length,c=a.length,l=v;return void 0!==o&&(o=i(o),l=f),e.call(s,l,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>c){var d=h(l/10);return 0===d?e:d<=c?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}s=a[l-1]}return void 0===s?"":s}))}}))}}]);