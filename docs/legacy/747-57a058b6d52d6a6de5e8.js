(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{2747:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return A}});e(8309);var r=e(2991),a=e.n(r),i=e(5843),o=e.n(i),s=e(3109),u=e.n(s),c=(e(5666),e(1161)),l=e.n(c),d=e(7766),h=e.n(d),p=e(1222),f=e.n(p),v=e(4382),g=e.n(v),m=e(7672),_=e.n(m),b=e(2386),I=e(9710),x=e(9067),w=e(8118),S=e(3662),z=e(4383),y=e(9264),E=z.h.getStore(),k=y.R0,A=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,h()(n=[this]).call(n,a))||this,_()(f()(e),"state",{user:"",email:"",name:"",password:"",conf_pass:"",school:"",ig_user_id:"",currentInputIndex:0}),_()(f()(e),"fieldsOrder",["name","user","email","school","ig_user_id","password","conf_pass"]),_()(f()(e),"labelTexts",{school:"School (Optional)",ig_user_id:"Instagram (Optional)",conf_pass:"Confirm password",user:"Username"}),_()(f()(e),"resetError",(function(){return e.setState({hasError:!1,error:null})})),_()(f()(e),"_validate_password",y.Bj),_()(f()(e),"_validate_user",y.RX),_()(f()(e),"_validate_name",y.u2),_()(f()(e),"_validate_email",y.sQ),_()(f()(e),"_validate_school",y.oS),_()(f()(e),"_validate_ig_user_id",y.oS),_()(f()(e),"onSubmit",function(){var t=l()(u().mark((function t(n){var r,a,i,o,s,c,l,d,h,p,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.loading){t.next=2;break}return t.abrupt("return");case 2:if(n.preventDefault(),r=e.state.currentInputIndex,a=e.fieldsOrder[r],!(i=e["_validate_"+a](e.state[a])).valid){t.next=20;break}if(r===e.fieldsOrder.length-1){t.next=9;break}return t.abrupt("return",e.setState({currentInputIndex:r+1,hasError:!1,error:null}));case 9:return o=e.state,s=o.user,c=o.email,l=o.name,d=o.password,h=o.school,p=o.ig_user_id,e.setState({loading:!0}),t.next=13,w.y.createAccount({user:s,email:c,name:l,password:d,school:h,ig_user_id:p});case 13:if(!(f=t.sent).error){t.next=16;break}return t.abrupt("return",e.setState({hasError:!0,error:f.error,loading:!1}));case 16:if(!f.id){t.next=18;break}return t.abrupt("return",(0,b.uX)("/login"));case 18:t.next=21;break;case 20:e.setState({hasError:!0,error:i.error});case 21:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()),_()(f()(e),"_decrementState",(function(){e.setState((function(t){return{currentInputIndex:t.currentInputIndex-1}}))})),e}g()(n,t);var e=n.prototype;return e.componentDidMount=function(){t.prototype.componentDidMount.call(this)},e.componentDidUpdate=function(){if(E.isLoggedIn)return(0,b.uX)("/profile");var t=document.getElementById("input___"+this.state.currentInputIndex);t&&t.focus()},e._validate_conf_pass=function(t){return t!==this.state.password?{error:k.pwNomatch}:y.Vy},e.onInput=function(t){var n=this;return function(e){var r,a,i=e.target.value;"password"!==e&&"conf_pass"!==e&&(i=o()(a=i||"").call(a));n.setState(((r={})[t]=i||"",r))}},e.render=function(t,n){var e=n.currentInputIndex===this.fieldsOrder.length-1;return(0,b.az)("div",{class:"form-doc",children:[(0,b.az)("div",{class:"form-title heading-text",children:"Register"}),(0,b.az)("div",{class:"form-ext-text heading-text clr",children:"Let's Get You Started"}),n.hasError&&(0,b.az)(P,{close:this.resetError,reason:n.error}),(0,b.az)("div",{class:"form-stx",children:[(0,b.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,b.az)(L,{instance:this}),(0,b.az)(C,{state:n,decrement:this._decrementState,isLastInput:e}),n.loading&&(0,b.az)("div",{children:"Hang on, getting you signed up"})]}),(0,b.az)("div",{class:"inst",children:(0,b.az)(b.A,{href:"/login",class:"heading-text clr ",children:"Want to Login Instead?"})}),(0,b.az)(x.r8,{})]})]})},n}(S.Z);function C(t){var n=t.state,e=t.decrement,r=t.isLastInput;return(0,b.az)("div",{class:"form-action-controls",children:[0!==n.currentInputIndex&&(0,b.az)("span",{class:"form-act back",onClick:e,"aria-label":"previous step"}),r?(0,b.az)("button",{"aria-label":"Register",style:{marginLeft:"auto"},class:"heading-text submit-button",children:"Register"}):(0,b.az)("button",{class:"form-act fwd","aria-label":"next step"})]})}var D={email:"email",password:"password",conf_pass:"password"};function L(t){var n,e=t.instance;return a()(n=e.fieldsOrder).call(n,(function(t,n){return n===e.state.currentInputIndex&&(0,b.az)(I.H,{id:"input___"+n,inputClass:"form-anim",value:e.state[t],type:D[t]||"text",labelText:e.labelTexts[t]||t,onInput:e.onInput(t)})}))}function P(t){return(0,b.az)(b.HY,{children:[(0,b.az)("div",{class:"mask"}),(0,b.az)(x.OK,{errorHead:"Can't register",close:t.close,reasons:[t.reason]})]})}},3662:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var r=e(7766),a=e.n(r),i=e(1222),o=e.n(i),s=e(4382),u=e.n(s),c=e(7672),l=e.n(c),d=e(2386),h=e(4383),p=function(t){function n(){for(var n,e,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=t.call.apply(t,a()(n=[this]).call(n,i))||this,l()(o()(e),"_globalStoreStateChanged",(function(){return e.setState({hasNewData:!0})})),e}u()(n,t);var e=n.prototype;return e.componentDidMount=function(){h.h.subscribe(this._globalStoreStateChanged)},e.componentWillUnmount=function(){h.h.unsubscribe(this._globalStoreStateChanged)},n}(d.wA)},9710:function(t,n,e){"use strict";e.d(n,{H:function(){return f}});var r=e(1942),a=e.n(r),i=e(7766),o=e.n(i),s=e(1222),u=e.n(s),c=e(4382),l=e.n(c),d=e(7672),h=e.n(d),p=e(2386),f=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,o()(n=[this]).call(n,a))||this,h()(u()(e),"state",{id:Math.random(),isFocused:!1,value:e.props.value||""}),h()(u()(e),"onFocus",(function(){return!e.state.value&&e.setState({isFocused:!0,moveDown:!1})})),h()(u()(e),"onBlur",(function(){return!e.state.value&&e.setState({isFocused:!1,moveDown:!0})})),h()(u()(e),"onInput",(function(t){return e.setState({value:t.target.value})})),h()(u()(e),"__onInput",(function(t){var n=e.props.onInput;e.onInput(t),null!=n&&n(t)})),e}return l()(n,t),n.prototype.render=function(t,n){var e=t.id,r=t.labelText,a=void 0===r?"":r,i=t.type,o=void 0===i?"text":i,s=t.inputClass,u=t.extraProps,c=n.isFocused,l=n.moveDown,d=e||this.state.id,h=this.state.value,f=["_animate",c||h?"moveup":"",l?"movedown":""];return(0,p.h)("div",{class:"user-input-anim "+(s||"")},(0,p.h)("label",{class:f,for:d},a),(0,p.h)(v,{onFocus:this.onFocus,onBlur:this.onBlur,type:o,value:h,extraProps:u,id:d,onInput:this.__onInput}))},n}(p.wA);function v(t){var n=t.onFocus,e=t.onBlur,r=t.onInput,i=t.id,o=t.type,s=t.value,u=t.extraProps;return(0,p.h)("input",a()(a()({onFocus:n,onBlur:e,onInput:r,id:i,value:s,type:o},u),{},{class:"paper-input"}))}},9067:function(t,n,e){"use strict";e.d(n,{OK:function(){return g},Pt:function(){return m},GI:function(){return _},r8:function(){return b}});var r=e(2991),a=e.n(r),i=e(7766),o=e.n(i),s=e(1222),u=e.n(s),c=e(4382),l=e.n(c),d=e(7672),h=e.n(d),p=e(1942),f=e.n(p),v=e(2386);function g(t){return(0,v.az)(_,f()(f()({},t),{},{title:"Something Ain't Right"}))}var m=/([^\w]|_)/g,_=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,o()(n=[this]).call(n,a))||this,h()(u()(e),"__id",Math.random()),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t=document.getElementById(""+this.__id);t&&t.focus()},e.render=function(t){var n;return(0,v.az)("div",{class:"app-popup",children:[(0,v.az)("div",{class:"heading-text clr app-popup-title",children:t.title}),(0,v.az)("div",{children:t.errorHead}),(0,v.az)("div",{class:"err-reasons",children:(0,v.az)("div",{children:a()(n=t.reasons||[]).call(n,(function(t){return(0,v.az)("div",{children:[" - ",t]})}))})}),(0,v.az)("button",{id:this.__id,class:"app-popup-close",onClick:t.close,children:"OK"})]})},n}(v.ZP);function b(){return(0,v.az)("div",{class:"social-link-container",children:[(0,v.az)("a",{href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,v.az)("a",{href:"https://instagram.com/halocrypt",class:"heading-text clr hoverable",children:"Instagram"}),(0,v.az)("a",{href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}},9264:function(t,n,e){"use strict";e.d(n,{Vy:function(){return a},sQ:function(){return o},oS:function(){return s},If:function(){return u},Bj:function(){return c},RX:function(){return l},u2:function(){return d},R0:function(){return h}});e(4916),e(5306);var r=e(9067),a={valid:!0},i={valid:!1};function o(t){return t?a:{error:"Value required"}}var s=function(){return a};function u(t){return(n=+(n=t))==n?a:i;var n}function c(t){return t.length<5?{error:h.pwLength}:a}function l(t){var n=t.length;return n<3||n>30?{error:h.userLength}:t!==t.replace(r.Pt,"")?{error:h.invalidCharacters}:a}function d(t){var n=t.length;return!n||n>30?{error:h.nameLength}:a}var h={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}},5306:function(t,n,e){"use strict";var r=e(7007),a=e(9670),i=e(7908),o=e(7466),s=e(9958),u=e(4488),c=e(1530),l=e(7651),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,n,e,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,_=g?"$":"$0";return[function(e,r){var a=u(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,a,r):n.call(String(a),e,r)},function(t,r){if(!g&&m||"string"==typeof r&&-1===r.indexOf(_)){var i=e(n,t,this,r);if(i.done)return i.value}var u=a(t),p=String(this),f="function"==typeof r;f||(r=String(r));var v=u.global;if(v){var I=u.unicode;u.lastIndex=0}for(var x=[];;){var w=l(u,p);if(null===w)break;if(x.push(w),!v)break;""===String(w[0])&&(u.lastIndex=c(p,o(u.lastIndex),I))}for(var S,z="",y=0,E=0;E<x.length;E++){w=x[E];for(var k=String(w[0]),A=d(h(s(w.index),p.length),0),C=[],D=1;D<w.length;D++)C.push(void 0===(S=w[D])?S:String(S));var L=w.groups;if(f){var P=[k].concat(C,A,p);void 0!==L&&P.push(L);var R=String(r.apply(void 0,P))}else R=b(k,p,A,C,L,r);A>=y&&(z+=p.slice(y,A)+R,y=A+k.length)}return z+p.slice(y)}];function b(t,e,r,a,o,s){var u=r+t.length,c=a.length,l=v;return void 0!==o&&(o=i(o),l=f),n.call(s,l,(function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>c){var d=p(l/10);return 0===d?n:d<=c?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):n}s=a[l-1]}return void 0===s?"":s}))}}))}}]);