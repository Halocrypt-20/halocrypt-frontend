(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{894:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var r=s(386),n=s(67),a=s(710),o=s(118),i=s(662);function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const l=s(804).h.getStore();class c extends i.Z{constructor(...t){var e;super(...t),e=this,u(this,"state",{user:"",password:""}),u(this,"componentDidUpdate",this.loginCheck),u(this,"onSubmit",(async function(){e.setState({loading:!0});const t=await o.y.auth({user:e.state.user,password:e.state.password});if(t.error)return e.setState({hasError:!0,error:t.error,loading:!1});const s=e.state.next;return s&&!h(s)?(0,r.uX)(s):(0,r.uX)("/profile")})),u(this,"resetError",()=>this.setState({hasError:!1,error:null}))}loginCheck(){if(l.isLoggedIn){const t=this.state.next;return t&&!h(t)?(0,r.uX)(t):(0,r.uX)("/profile")}}componentDidMount(){const t=new URLSearchParams(r.F0.getQs).get("next");t&&this.setState({next:t}),super.componentDidMount(),this.loginCheck()}onInput(t){return e=>{let s=e.target.value;"password"!==e&&(s=(s||"").trim()),this.setState({[t]:s||""})}}render(t,e){return(0,r.az)("div",{class:"form-doc",children:[(0,r.az)("div",{class:"form-title heading-text",children:"Login"}),e.hasError&&(0,r.az)(d,{close:this.resetError,reason:e.error}),(0,r.az)("div",{class:"form-stx",children:[(0,r.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,r.az)(a.H,{inputClass:"form-anim",value:this.state.user,type:"text",labelText:"username",onInput:this.onInput("user")}),(0,r.az)(a.H,{inputClass:"form-anim",value:this.state.password,type:"password",labelText:"password",onInput:this.onInput("password")}),(0,r.az)("button",{class:"heading-text submit-button hoverable",children:"Login"}),e.loading&&(0,r.az)("div",{children:"Just a sec, checking your credentials"})]}),(0,r.az)("div",{children:(0,r.az)("div",{class:"inst",children:[(0,r.az)(r.A,{href:"/register",class:"heading-text clr hoverable",children:"New User?"}),(0,r.az)(r.A,{href:"/forgot-password",class:"heading-text clr hoverable",style:{marginLeft:"auto"},children:"Forgot Password?"})]})})]})]})}}function d(t){return(0,r.az)(r.HY,{children:[(0,r.az)("div",{class:"mask child"}),(0,r.az)(n.O,{errorHead:"Can't Login",close:t.close,reasons:[t.reason]})]})}const h=t=>t.indexOf("://")>0||0===t.indexOf("//")},662:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var r=s(386),n=s(804);class a extends r.wA{constructor(...t){var e,s,r;super(...t),r=()=>this.setState({hasNewData:!0}),(s="_globalStoreStateChanged")in(e=this)?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r}componentDidMount(){n.h.subscribe(this._globalStoreStateChanged)}componentWillUnmount(){n.h.unsubscribe(this._globalStoreStateChanged)}}},710:(t,e,s)=>{"use strict";s.d(e,{H:()=>a});var r=s(386);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class a extends r.wA{constructor(...t){super(...t),n(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),n(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),n(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),n(this,"onInput",t=>this.setState({value:t.target.value})),n(this,"__onInput",t=>{const e=this.props.onInput;this.onInput(t),null!=e&&e(t)})}render({idx:t,labelText:e="",type:s="text",inputClass:n,extraProps:a},{isFocused:i,moveDown:u}){const l=t||this.state.id,c=this.props.value||this.state.value,d=["_animate",i||c?"moveup":"",u?"movedown":""];return(0,r.h)("div",{class:"user-input-anim "+(n||"")},(0,r.h)("label",{class:d,for:l},e),(0,r.h)(o,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:c,extraProps:a,id:l,onInput:this.__onInput}))}}function o({onFocus:t,onBlur:e,onInput:s,id:n,type:a,value:o,extraProps:i}){return(0,r.h)("input",{onFocus:t,onBlur:e,onInput:s,id:n,value:o,type:a,...i,class:"paper-input"})}},67:(t,e,s)=>{"use strict";s.d(e,{O:()=>n,P:()=>a});var r=s(386);function n(t){return(0,r.az)("div",{class:"app-popup",children:[(0,r.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,r.az)("div",{children:t.errorHead}),(0,r.az)("div",{class:"err-reasons",children:(0,r.az)("div",{children:t.reasons.map(t=>(0,r.az)("div",{children:[" - ",t]}))})}),(0,r.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}const a=/([^\w]|_)/g}}]);