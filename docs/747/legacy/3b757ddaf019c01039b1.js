(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1128:function(e,t,n){e.exports=n(7784)},6007:function(e,t,n){"use strict";n.d(t,{u:function(){return _},k:function(){return w}});n(1539),n(8674);var r,a=n(1128),o=n.n(a),s=n(3032),i=n.n(s),u=n(875),c=n.n(u),l=n(4103),d=n.n(l),p=n(77),f=n(3735),h=n(4383),v=n(9369),g=(0,v.Z)({},window.__initConfig);window.__initConfig=null;var m=h.h.getStore(),_=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&d()(r=c().prototype.then).call(r,c().resolve())||i(),w=new(function(){function e(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile"}var t=e.prototype;return t.__shouldPostLog=function(){return!p.mH},t._admin_getLogs=function(){if(m.isLoggedIn&&m.userData.is_admin)return(0,f.A)(p.PW.getLogs)},t.sendUserLog=function(e){var t="string"==typeof e?{type:e}:e,n=(0,v.Z)({},t,g);this.__shouldPostLog()?_((function(){return(0,f.V)(p.PW.addLog,n)})):console.log("prod log post ->",n)},e}());window.onerror=function(e,t,n,r,a){var s=a||{};e=e||s.message||"";var i=a.line||s.message||0,u=a.column||0,c=s.script||"",l=s.stackTrace||s.stack||"",d=o()(),p=location.href;w.sendUserLog({type:"js-error",timestamp:d,message:e,line:i,column:u,script:c,stack:l,url:p,source:t})}},2747:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});n(8309),n(4916),n(5306);var r=n(2991),a=n.n(r),o=n(5843),s=n.n(o),i=n(3109),u=n.n(i),c=(n(5666),n(1161)),l=n.n(c),d=n(7766),p=n.n(d),f=n(1222),h=n.n(f),v=n(4382),g=n.n(v),m=n(7672),_=n.n(m),w=n(2386),b=n(9710),x=n(9067),I=n(8118),S=n(3662),y=n(4383),k=n(6007),z={valid:!0},E=y.h.getStore();function A(e){return e?z:{error:"Value required"}}var L="Username should be between 3 and 30 characters",C="Username and name can not contain special characters",P="Name should be less than 30 characters and cannot be blank",D="Password should be longer than 5 characters",U="Passwords do not match",F=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=e.call.apply(e,p()(t=[this]).call(t,a))||this,_()(h()(n),"state",{user:"",email:"",name:"",password:"",conf_pass:"",school:"",ig_user_id:"",currentInputIndex:0}),_()(h()(n),"fieldsOrder",["name","user","email","school","ig_user_id","password","conf_pass"]),_()(h()(n),"labelTexts",{ig_user_id:"Instagram (Optional)",conf_pass:"Confirm password",user:"Username"}),_()(h()(n),"resetError",(function(){return n.setState({hasError:!1,error:null})})),_()(h()(n),"_validate_email",A),_()(h()(n),"_validate_school",A),_()(h()(n),"_validate_ig_user_id",(function(){return z})),_()(h()(n),"onSubmit",function(){var e=l()(u().mark((function e(t){var r,a,o,s,i,c,l,d,p,f,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.loading){e.next=2;break}return e.abrupt("return");case 2:if(t.preventDefault(),r=n.state.currentInputIndex,a=n.fieldsOrder[r],!(o=n["_validate_"+a](n.state[a])).valid){e.next=21;break}if(r===n.fieldsOrder.length-1){e.next=9;break}return e.abrupt("return",n.setState({currentInputIndex:r+1,hasError:!1,error:null}));case 9:return s=n.state,i=s.user,c=s.email,l=s.name,d=s.password,p=s.school,f=s.ig_user_id,n.setState({loading:!0}),e.next=13,I.y.createAccount({user:i,email:c,name:l,password:d,school:p,ig_user_id:f});case 13:if(!(h=e.sent).error){e.next=16;break}return e.abrupt("return",n.setState({hasError:!0,error:h.error,loading:!1}));case 16:if(!h.id){e.next=19;break}return k.k.sendUserLog(k.k.registerActionComplete),e.abrupt("return",(0,w.uX)("/login"));case 19:e.next=22;break;case 21:n.setState({hasError:!0,error:o.error});case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_()(h()(n),"_decrementState",(function(){n.setState((function(e){return{currentInputIndex:e.currentInputIndex-1}}))})),n}g()(t,e);var n=t.prototype;return n.componentDidMount=function(){e.prototype.componentDidMount.call(this),k.k.sendUserLog(k.k.pageViewRegistered)},n.componentDidUpdate=function(){if(E.isLoggedIn)return(0,w.uX)("/profile");var e=document.getElementById("input___"+this.state.currentInputIndex);e&&e.focus()},n._validate_password=function(e){return e.length<5?{error:D}:z},n._validate_user=function(e){var t=e.length;return t<3||t>30?{error:L}:e!==e.replace(x.P,"")?{error:C}:z},n._validate_name=function(e){var t=e.length;return!t||t>30?{error:P}:z},n._validate_conf_pass=function(e){return e!==this.state.password?{error:U}:z},n.onInput=function(e){var t=this;return function(n){var r,a,o=n.target.value;"password"!==n&&"conf_pass"!==n&&(o=s()(a=o||"").call(a));t.setState(((r={})[e]=o||"",r))}},n.render=function(e,t){var n=t.currentInputIndex===this.fieldsOrder.length-1;return(0,w.az)("div",{class:"form-doc",children:[(0,w.az)("div",{class:"form-title heading-text",children:"Register"}),(0,w.az)("div",{class:"form-ext-text heading-text clr",children:"Let's Get You Started"}),t.hasError&&(0,w.az)($,{close:this.resetError,reason:t.error}),(0,w.az)("div",{class:"form-stx",children:[(0,w.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,w.az)(T,{instance:this}),(0,w.az)(O,{state:t,decrement:this._decrementState,isLastInput:n}),t.loading&&(0,w.az)("div",{children:"Hang on, getting you signed up"})]}),(0,w.az)("div",{class:"inst",children:(0,w.az)(w.A,{href:"/login",class:"heading-text clr ",children:"Want to Login Instead?"})})]})]})},t}(S.Z);function O(e){var t=e.state,n=e.decrement,r=e.isLastInput;return(0,w.az)("div",{class:"form-action-controls",children:[0!==t.currentInputIndex&&(0,w.az)("span",{class:"form-act back",onClick:n,"aria-label":"previous step"}),r?(0,w.az)("button",{"aria-label":"Register",style:{marginLeft:"auto"},class:"heading-text submit-button",children:"Register"}):(0,w.az)("button",{class:"form-act fwd","aria-label":"next step"})]})}var R={email:"email",password:"password",conf_pass:"password"};function T(e){var t,n=e.instance;return a()(t=n.fieldsOrder).call(t,(function(e,t){return t===n.state.currentInputIndex&&(0,w.az)(b.H,{id:"input___"+t,inputClass:"form-anim",value:n.state[e],type:R[e]||"text",labelText:n.labelTexts[e]||e,onInput:n.onInput(e)})}))}function $(e){return(0,w.az)(w.HY,{children:[(0,w.az)("div",{class:"mask"}),(0,w.az)(x.O,{errorHead:"Can't register",close:e.close,reasons:[e.reason]})]})}},3662:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7766),a=n.n(r),o=n(1222),s=n.n(o),i=n(4382),u=n.n(i),c=n(7672),l=n.n(c),d=n(2386),p=n(4383),f=function(e){function t(){for(var t,n,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=e.call.apply(e,a()(t=[this]).call(t,o))||this,l()(s()(n),"_globalStoreStateChanged",(function(){return n.setState({hasNewData:!0})})),n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){p.h.subscribe(this._globalStoreStateChanged)},n.componentWillUnmount=function(){p.h.unsubscribe(this._globalStoreStateChanged)},t}(d.wA)},9710:function(e,t,n){"use strict";n.d(t,{H:function(){return h}});var r=n(1942),a=n.n(r),o=n(7766),s=n.n(o),i=n(1222),u=n.n(i),c=n(4382),l=n.n(c),d=n(7672),p=n.n(d),f=n(2386),h=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=e.call.apply(e,s()(t=[this]).call(t,a))||this,p()(u()(n),"state",{id:Math.random(),isFocused:!1,value:n.props.value||""}),p()(u()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),p()(u()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),p()(u()(n),"onInput",(function(e){return n.setState({value:e.target.value})})),p()(u()(n),"__onInput",(function(e){var t=n.props.onInput;n.onInput(e),null!=t&&t(e)})),n}return l()(t,e),t.prototype.render=function(e,t){var n=e.idx,r=e.labelText,a=void 0===r?"":r,o=e.type,s=void 0===o?"text":o,i=e.inputClass,u=e.extraProps,c=t.isFocused,l=t.moveDown,d=n||this.state.id,p=this.state.value,h=["_animate",c||p?"moveup":"",l?"movedown":""];return(0,f.h)("div",{class:"user-input-anim "+(i||"")},(0,f.h)("label",{class:h,for:d},a),(0,f.h)(v,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:p,extraProps:u,id:d,onInput:this.__onInput}))},t}(f.wA);function v(e){var t=e.onFocus,n=e.onBlur,r=e.onInput,o=e.id,s=e.type,i=e.value,u=e.extraProps;return(0,f.h)("input",a()({onFocus:t,onBlur:n,onInput:r,id:o,value:i,type:s},u,{class:"paper-input"}))}},9067:function(e,t,n){"use strict";n.d(t,{O:function(){return s},P:function(){return i}});var r=n(2991),a=n.n(r),o=n(2386);function s(e){var t;return(0,o.az)("div",{class:"app-popup",children:[(0,o.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,o.az)("div",{children:e.errorHead}),(0,o.az)("div",{class:"err-reasons",children:(0,o.az)("div",{children:a()(t=e.reasons).call(t,(function(e){return(0,o.az)("div",{children:[" - ",e]})}))})}),(0,o.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}var i=/([^\w]|_)/g},1103:function(e,t,n){n(5160);var r=n(4058);e.exports=r.Date.now},5160:function(e,t,n){n(6887)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},7784:function(e,t,n){var r=n(1103);e.exports=r},5306:function(e,t,n){"use strict";var r=n(7007),a=n(9670),o=n(7908),s=n(7466),i=n(9958),u=n(4488),c=n(1530),l=n(7651),d=Math.max,p=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,_=g?"$":"$0";return[function(n,r){var a=u(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!g&&m||"string"==typeof r&&-1===r.indexOf(_)){var o=n(t,e,this,r);if(o.done)return o.value}var u=a(e),f=String(this),h="function"==typeof r;h||(r=String(r));var v=u.global;if(v){var b=u.unicode;u.lastIndex=0}for(var x=[];;){var I=l(u,f);if(null===I)break;if(x.push(I),!v)break;""===String(I[0])&&(u.lastIndex=c(f,s(u.lastIndex),b))}for(var S,y="",k=0,z=0;z<x.length;z++){I=x[z];for(var E=String(I[0]),A=d(p(i(I.index),f.length),0),L=[],C=1;C<I.length;C++)L.push(void 0===(S=I[C])?S:String(S));var P=I.groups;if(h){var D=[E].concat(L,A,f);void 0!==P&&D.push(P);var U=String(r.apply(void 0,D))}else U=w(E,f,A,L,P,r);A>=k&&(y+=f.slice(k,A)+U,k=A+E.length)}return y+f.slice(k)}];function w(e,n,r,a,s,i){var u=r+e.length,c=a.length,l=v;return void 0!==s&&(s=o(s),l=h),t.call(i,l,(function(t,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":i=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return t;if(l>c){var d=f(l/10);return 0===d?t:d<=c?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):t}i=a[l-1]}return void 0===i?"":i}))}}))}}]);