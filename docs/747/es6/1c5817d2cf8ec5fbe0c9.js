(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{7:(e,t,s)=>{"use strict";s.d(t,{u:()=>c,k:()=>d});var r=s(77),n=s(596),a=s(804),i=s(369);const o=(0,i.Z)({},window.__initConfig);window.__initConfig=null;const l=a.h.getStore(),c=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout;const d=new class{constructor(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile",this.passwordResetRequested="password-reset"}__shouldPostLog(){return!r.mH}_admin_getLogs(){if(l.isLoggedIn&&l.userData.is_admin)return(0,n.A)(r.PW.getLogs)}sendUserLog(e){const t="string"==typeof e?{type:e}:e,s=(0,i.Z)({},t,o);this.__shouldPostLog()?c(()=>(0,n.V)(r.PW.addLog,s)):console.log("prod log post ->",s)}};window.onerror=(e,t,s,r,n)=>{const a=n||{};e=e||a.message||"";const i=n.line||a.message||0,o=n.column||0,l=a.script||"",c=a.stackTrace||a.stack||"",u=Date.now(),h=location.href;d.sendUserLog({type:"js-error",timestamp:u,message:e,line:i,column:o,script:l,stack:c,url:h,source:t})}},747:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(386),n=s(710),a=s(67),i=s(118),o=s(508),l=s(804),c=s(7),d=s(264);function u(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const h=l.h.getStore(),p=d.R0;class g extends o.Z{constructor(...e){var t;super(...e),t=this,u(this,"state",{user:"",email:"",name:"",password:"",conf_pass:"",school:"",ig_user_id:"",currentInputIndex:0}),u(this,"fieldsOrder",["name","user","email","school","ig_user_id","password","conf_pass"]),u(this,"labelTexts",{school:"School (Optional)",ig_user_id:"Instagram (Optional)",conf_pass:"Confirm password",user:"Username"}),u(this,"resetError",()=>this.setState({hasError:!1,error:null})),u(this,"_validate_password",d.Bj),u(this,"_validate_user",d.RX),u(this,"_validate_name",d.u2),u(this,"_validate_email",d.sQ),u(this,"_validate_school",d.oS),u(this,"_validate_ig_user_id",d.oS),u(this,"onSubmit",(async function(e){if(t.state.loading)return;e.preventDefault();const s=t.state.currentInputIndex,n=t.fieldsOrder[s],a=t["_validate_"+n](t.state[n]);if(a.valid){if(s!==t.fieldsOrder.length-1)return t.setState({currentInputIndex:s+1,hasError:!1,error:null});const{user:e,email:n,name:a,password:o,school:l,ig_user_id:d}=t.state;t.setState({loading:!0});const u=await i.y.createAccount({user:e,email:n,name:a,password:o,school:l,ig_user_id:d});if(u.error)return t.setState({hasError:!0,error:u.error,loading:!1});if(u.id)return c.k.sendUserLog(c.k.registerActionComplete),(0,r.uX)("/login")}else t.setState({hasError:!0,error:a.error})})),u(this,"_decrementState",()=>{this.setState(e=>({currentInputIndex:e.currentInputIndex-1}))})}componentDidMount(){super.componentDidMount(),c.k.sendUserLog(c.k.pageViewRegistered)}componentDidUpdate(){if(h.isLoggedIn)return(0,r.uX)("/profile");const e=document.getElementById("input___"+this.state.currentInputIndex);e&&e.focus()}_validate_conf_pass(e){return e!==this.state.password?{error:p.pwNomatch}:d.Vy}onInput(e){return t=>{let s=t.target.value;"password"!==t&&"conf_pass"!==t&&(s=(s||"").trim()),this.setState({[e]:s||""})}}render(e,t){const s=t.currentInputIndex===this.fieldsOrder.length-1;return(0,r.az)("div",{class:"form-doc",children:[(0,r.az)("div",{class:"form-title heading-text",children:"Register"}),(0,r.az)("div",{class:"form-ext-text heading-text clr",children:"Let's Get You Started"}),t.hasError&&(0,r.az)(w,{close:this.resetError,reason:t.error}),(0,r.az)("div",{class:"form-stx",children:[(0,r.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,r.az)(v,{instance:this}),(0,r.az)(m,{state:t,decrement:this._decrementState,isLastInput:s}),t.loading&&(0,r.az)("div",{children:"Hang on, getting you signed up"})]}),(0,r.az)("div",{class:"inst",children:(0,r.az)(r.A,{href:"/login",class:"heading-text clr ",children:"Want to Login Instead?"})}),(0,r.az)("div",{class:"social-link-container",children:[(0,r.az)("a",{href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,r.az)("a",{href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})]})]})}}function m(e){const{state:t,decrement:s,isLastInput:n}=e;return(0,r.az)("div",{class:"form-action-controls",children:[0!==t.currentInputIndex&&(0,r.az)("span",{class:"form-act back",onClick:s,"aria-label":"previous step"}),n?(0,r.az)("button",{"aria-label":"Register",style:{marginLeft:"auto"},class:"heading-text submit-button",children:"Register"}):(0,r.az)("button",{class:"form-act fwd","aria-label":"next step"})]})}const f={email:"email",password:"password",conf_pass:"password"};function v(e){const t=e.instance;return t.fieldsOrder.map((e,s)=>s===t.state.currentInputIndex&&(0,r.az)(n.H,{id:"input___"+s,inputClass:"form-anim",value:t.state[e],type:f[e]||"text",labelText:t.labelTexts[e]||e,onInput:t.onInput(e)}))}function w(e){return(0,r.az)(r.HY,{children:[(0,r.az)("div",{class:"mask"}),(0,r.az)(a.OK,{errorHead:"Can't register",close:e.close,reasons:[e.reason]})]})}},508:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(386),n=s(804);class a extends r.wA{constructor(...e){var t,s,r;super(...e),r=()=>this.setState({hasNewData:!0}),(s="_globalStoreStateChanged")in(t=this)?Object.defineProperty(t,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[s]=r}componentDidMount(){n.h.subscribe(this._globalStoreStateChanged)}componentWillUnmount(){n.h.unsubscribe(this._globalStoreStateChanged)}}},710:(e,t,s)=>{"use strict";s.d(t,{H:()=>a});var r=s(386);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class a extends r.wA{constructor(...e){super(...e),n(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),n(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),n(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),n(this,"onInput",e=>this.setState({value:e.target.value})),n(this,"__onInput",e=>{const t=this.props.onInput;this.onInput(e),null!=t&&t(e)})}render({id:e,labelText:t="",type:s="text",inputClass:n,extraProps:a},{isFocused:o,moveDown:l}){const c=e||this.state.id,d=this.state.value,u=["_animate",o||d?"moveup":"",l?"movedown":""];return(0,r.h)("div",{class:"user-input-anim "+(n||"")},(0,r.h)("label",{class:u,for:c},t),(0,r.h)(i,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:d,extraProps:a,id:c,onInput:this.__onInput}))}}function i({onFocus:e,onBlur:t,onInput:s,id:n,type:a,value:i,extraProps:o}){return(0,r.h)("input",{onFocus:e,onBlur:t,onInput:s,id:n,value:i,type:a,...o,class:"paper-input"})}},67:(e,t,s)=>{"use strict";s.d(t,{OK:()=>n,Pt:()=>a});var r=s(386);function n(e){return(0,r.az)(i,{...Object.assign({},e,{title:"Something Ain't Right"})})}const a=/([^\w]|_)/g;function i(e){return(0,r.az)("div",{class:"app-popup",children:[(0,r.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,r.az)("div",{children:e.errorHead}),(0,r.az)("div",{class:"err-reasons",children:(0,r.az)("div",{children:e.reasons.map(e=>(0,r.az)("div",{children:[" - ",e]}))})}),(0,r.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}},264:(e,t,s)=>{"use strict";s.d(t,{Vy:()=>n,sQ:()=>a,oS:()=>i,Bj:()=>o,RX:()=>l,u2:()=>c,R0:()=>d});var r=s(67);const n={valid:!0};function a(e){return e?n:{error:"Value required"}}const i=()=>n;function o(e){return e.length<5?{error:d.pwLength}:n}function l(e){const t=e.length;return t<3||t>30?{error:d.userLength}:e!==e.replace(r.Pt,"")?{error:d.invalidCharacters}:n}function c(e){const t=e.length;return!t||t>30?{error:d.nameLength}:n}const d={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}}}]);