(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{7:(e,t,s)=>{"use strict";s.d(t,{u:()=>u,k:()=>c});var n=s(77),r=s(596),o=s(804),i=s(369);const a=(0,i.Z)({session:function(){if("crypto"in self)return crypto.getRandomValues(new Uint8Array(10)).join("-");return String(Math.random())}()},window.__initConfig);window.__initConfig=null;const l=o.h.getStore(),u=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout;const c=new class{constructor(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile"}__shouldPostLog(){return!n.mH}_admin_getLogs(){if(l.isLoggedIn&&l.userData.is_admin)return(0,r.A)(n.PW.getLogs)}sendUserLog(e){const t="string"==typeof e?{type:e}:e,s=(0,i.Z)({},t,a);this.__shouldPostLog()?u(()=>(0,r.V)(n.PW.addLog,s)):console.log("prod log post ->",s)}};window.onerror=(e,t,s,n,r)=>{const o=r||{};e=e||o.message||"";const i=r.line||o.message||0,a=r.column||0,l=o.script||"",u=o.stackTrace||o.stack||"",d=Date.now(),h=location.href;c.sendUserLog({type:"js-error",timestamp:d,message:e,line:i,column:a,script:l,stack:u,url:h,source:t})}},894:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var n=s(386),r=s(67),o=s(710),i=s(118),a=s(662),l=s(804),u=s(7);function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const d=l.h.getStore();class h extends a.Z{constructor(...e){var t;super(...e),t=this,c(this,"state",{user:"",password:""}),c(this,"componentDidUpdate",this.loginCheck),c(this,"onSubmit",(async function(){if(t.state.loading)return;t.setState({loading:!0});const e=await i.y.auth({user:t.state.user,password:t.state.password});if(e.error)return t.setState({hasError:!0,error:e.error,loading:!1});u.k.sendUserLog(u.k.loginActionCompleted);const s=t.state.next;return s&&!g(s)?(0,n.uX)(s):(0,n.uX)("/profile")})),c(this,"resetError",()=>this.setState({hasError:!1,error:null}))}loginCheck(){if(d.isLoggedIn){const e=this.state.next;return e&&!g(e)?(0,n.uX)(e):(0,n.uX)("/profile")}}componentDidMount(){u.k.sendUserLog(u.k.pageViewLogin);const e=new URLSearchParams(n.F0.getQs).get("next");e&&this.setState({next:e}),super.componentDidMount(),this.loginCheck()}onInput(e){return t=>{let s=t.target.value;"password"!==t&&(s=(s||"").trim()),this.setState({[e]:s||""})}}render(e,t){return(0,n.az)("div",{class:"form-doc",children:[(0,n.az)("div",{class:"form-title heading-text",children:"Login"}),t.hasError&&(0,n.az)(p,{close:this.resetError,reason:t.error}),(0,n.az)("div",{class:"form-stx",children:[(0,n.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,n.az)(o.H,{inputClass:"form-anim",value:this.state.user,type:"text",labelText:"username",onInput:this.onInput("user")}),(0,n.az)(o.H,{inputClass:"form-anim",value:this.state.password,type:"password",labelText:"password",onInput:this.onInput("password")}),(0,n.az)("button",{class:"heading-text submit-button hoverable",children:"Login"}),t.loading&&(0,n.az)("div",{children:"Just a sec, checking your credentials"})]}),(0,n.az)("div",{children:(0,n.az)("div",{class:"inst",children:[(0,n.az)(n.A,{href:"/register",class:"heading-text clr hoverable",children:"New User?"}),(0,n.az)(n.A,{href:"/forgot-password",class:"heading-text clr hoverable",style:{marginLeft:"auto"},children:"Forgot Password?"})]})})]})]})}}function p(e){return(0,n.az)(n.HY,{children:[(0,n.az)("div",{class:"mask child"}),(0,n.az)(r.O,{errorHead:"Can't Login",close:e.close,reasons:[e.reason]})]})}const g=e=>e.indexOf("://")>0||0===e.indexOf("//")},662:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var n=s(386),r=s(804);class o extends n.wA{constructor(...e){var t,s,n;super(...e),n=()=>this.setState({hasNewData:!0}),(s="_globalStoreStateChanged")in(t=this)?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n}componentDidMount(){r.h.subscribe(this._globalStoreStateChanged)}componentWillUnmount(){r.h.unsubscribe(this._globalStoreStateChanged)}}},710:(e,t,s)=>{"use strict";s.d(t,{H:()=>o});var n=s(386);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o extends n.wA{constructor(...e){super(...e),r(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),r(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),r(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),r(this,"onInput",e=>this.setState({value:e.target.value})),r(this,"__onInput",e=>{const t=this.props.onInput;this.onInput(e),null!=t&&t(e)})}render({idx:e,labelText:t="",type:s="text",inputClass:r,extraProps:o},{isFocused:a,moveDown:l}){const u=e||this.state.id,c=this.state.value,d=["_animate",a||c?"moveup":"",l?"movedown":""];return(0,n.h)("div",{class:"user-input-anim "+(r||"")},(0,n.h)("label",{class:d,for:u},t),(0,n.h)(i,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:c,extraProps:o,id:u,onInput:this.__onInput}))}}function i({onFocus:e,onBlur:t,onInput:s,id:r,type:o,value:i,extraProps:a}){return(0,n.h)("input",{onFocus:e,onBlur:t,onInput:s,id:r,value:i,type:o,...a,class:"paper-input"})}},67:(e,t,s)=>{"use strict";s.d(t,{O:()=>r,P:()=>o});var n=s(386);function r(e){return(0,n.az)("div",{class:"app-popup",children:[(0,n.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,n.az)("div",{children:e.errorHead}),(0,n.az)("div",{class:"err-reasons",children:(0,n.az)("div",{children:e.reasons.map(e=>(0,n.az)("div",{children:[" - ",e]}))})}),(0,n.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}const o=/([^\w]|_)/g}}]);