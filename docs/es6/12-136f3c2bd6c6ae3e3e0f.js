(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{12:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>d});var i=r(386),s=r(804),n=r(649),a=r(77),o=r(710),l=r(67);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c=s.h.getStore();class d extends i.wA{constructor(...t){super(...t),u(this,"state",{isLoading:!1,token:""}),u(this,"_resetError",()=>c.isLoggedIn?this.setState({error:null}):(0,i.uX)("/login")),u(this,"onInput",t=>this.setState({token:t.target.value||""})),u(this,"onSubmit",()=>{if(this.state.isLoading)return;const t=(this.state.token||"").trim();if(!t)return this.setState({error:"Blank Token"});this.setState({isLoading:!0}),(0,n.V)(a.EA.checkEmailToken,{token:t}).then(t=>{const e=t.error||t.data.error;return e?this.setState({error:e,isLoading:!1}):(c.userData.has_verified_email=!0,(0,i.uX)("/profile?email-verified"))})})}componentDidMount(){return c.isLoggedIn?c.userData.has_verified_email?(0,i.uX)("/profile"):(this.setState({isLoading:!0}),void(0,n.V)(a.EA.verifyEmail,{user:c.userData.id}).then(t=>{const e=t.error||t.data.error;if(e)return this.setState({error:e,isLoading:!1});this.setState({isLoading:!1,emailSent:!0})})):this.setState({error:"Log in first"})}render(t,e){return(0,i.az)("div",{children:[e.error&&(0,i.az)(l.OK,{errorHead:"Failed",reasons:Array.isArray(e.error)?e.error:[e.error],close:this._resetError}),(0,i.az)("div",{class:"heading-text bfont mtx-fp",children:"Verify Email"}),(0,i.az)("form",{action:"javascript:",onSubmit:this.onSubmit,children:[e.emailSent?"Check your email for the token":"Still mailing you..",e.emailSent&&(0,i.az)("div",{class:"input-parent",children:[(0,i.az)(o.H,{onInput:this.onInput,labelText:"Token"}),(0,i.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]})]}),e.isLoading&&"Just a sec"]})}}},710:(t,e,r)=>{"use strict";r.d(e,{H:()=>n});var i=r(386);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class n extends i.wA{constructor(...t){super(...t),s(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),s(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),s(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),s(this,"onInput",t=>this.setState({value:t.target.value})),s(this,"__onInput",t=>{const e=this.props.onInput;this.onInput(t),null!=e&&e(t)})}render({id:t,labelText:e="",type:r="text",inputClass:s,extraProps:n},{isFocused:o,moveDown:l}){const u=t||this.state.id,c=this.state.value,d=["_animate",o||c?"moveup":"",l?"movedown":""];return(0,i.h)("div",{class:"user-input-anim "+(s||"")},(0,i.h)("label",{class:d,for:u},e),(0,i.h)(a,{onFocus:this.onFocus,onBlur:this.onBlur,type:r,value:c,extraProps:n,id:u,onInput:this.__onInput}))}}function a({onFocus:t,onBlur:e,onInput:r,id:s,type:n,value:a,extraProps:o}){return(0,i.h)("input",{onFocus:t,onBlur:e,onInput:r,id:s,value:a,type:n,...o,class:"paper-input"})}},67:(t,e,r)=>{"use strict";r.d(e,{OK:()=>s,Pt:()=>n,GI:()=>a,r8:()=>o});var i=r(386);function s(t){return(0,i.az)(a,{...Object.assign({},t,{title:"Something Ain't Right"})})}const n=/([^\w]|_)/g;class a extends i.ZP{constructor(...t){var e,r,i;super(...t),e=this,r="__id",i=Math.random(),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}componentDidMount(){const t=document.getElementById(""+this.__id);t&&t.focus()}render(t){return(0,i.az)("div",{class:"app-popup",children:[(0,i.az)("div",{class:"heading-text clr app-popup-title",children:t.title}),(0,i.az)("div",{children:t.errorHead}),(0,i.az)("div",{class:"err-reasons",children:(0,i.az)("div",{children:(t.reasons||[]).map(t=>(0,i.az)("div",{children:[" - ",t]}))})}),(0,i.az)("button",{id:this.__id,class:"app-popup-close",onClick:t.close,children:"OK"})]})}}function o(){return(0,i.az)("div",{class:"social-link-container",children:[(0,i.az)("a",{href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,i.az)("a",{href:"https://instagram.com/halocrypt",class:"heading-text clr hoverable",children:"Instagram"}),(0,i.az)("a",{href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})}}}]);