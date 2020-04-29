(window.webpackJsonp=window.webpackJsonp||[]).push([[654,564],{7:(t,e,s)=>{"use strict";s.d(e,{u:()=>l,k:()=>c});var n=s(77),i=s(596),a=s(804),r=s(369);const o=(0,r.Z)({},window.__initConfig);window.__initConfig=null;const u=a.h.getStore(),l=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout;const c=new class{constructor(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile"}__shouldPostLog(){return!n.mH}_admin_getLogs(){if(u.isLoggedIn&&u.userData.is_admin)return(0,i.A)(n.PW.getLogs)}sendUserLog(t){const e="string"==typeof t?{type:t}:t,s=(0,r.Z)({},e,o);this.__shouldPostLog()?l(()=>(0,i.V)(n.PW.addLog,s)):console.log("prod log post ->",s)}};window.onerror=(t,e,s,n,i)=>{const a=i||{};t=t||a.message||"";const r=i.line||a.message||0,o=i.column||0,u=a.script||"",l=a.stackTrace||a.stack||"",d=Date.now(),h=location.href;c.sendUserLog({type:"js-error",timestamp:d,message:t,line:r,column:o,script:u,stack:l,url:h,source:e})}},564:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p,Question:()=>v});var n=s(386),i=s(804),a=s(77),r=s(596),o=(s(710),s(67)),u=s(7);function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const c=i.h.getStore(),d=t=>(t||"").toLowerCase().replace(/\s/g,""),h=(0,n.az)(v,{data:{question_level:"Loading",question:"Finding your question",hint:[]}});class p extends n.wA{constructor(...t){var e;super(...t),e=this,l(this,"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),l(this,"onInput",t=>this.setState({answer:d(t.target.value)})),l(this,"_submit",(async function(){if(e.state.isAwaitingAnswer)return;e.setState({isAwaitingAnswer:!0});const t=e.state.answer,s=e.state.fetchedQuestion&&e.state.fetchedQuestion.question_level||1;if(!t)return;const n={answer:t},i=(await(0,r.V)(a.hY.answerQuestion,n)).data;if(u.k.sendUserLog({type:u.k.answeredQuestion,question_level:s}),i.result)return e.proceedToNextLevel();e.setState({isAwaitingAnswer:!1,incorrect:!0})})),l(this,"proceedToNextLevel",()=>{u.k.sendUserLog({type:u.k.accessQuestion,question_level:(this.state.fetchedQuestion&&this.state.fetchedQuestion.question_level||0)+1}),this.setState({fetchedQuestion:null})}),l(this,"resetError",()=>this.setState({incorrect:!1}))}componentDidMount(){if(!c.isLoggedIn)return(0,n.uX)("/login?next=/play");u.k.sendUserLog(u.k.pageViewPlay),this.fetchQuestion()}componentDidUpdate(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()}async fetchQuestion(){if(this.state.isFetching)return;this.setState({isFetching:!0});const t=await(0,r.A)(a.hY.getQuestion);if(t.error)return this.setState({hasError:!0,isFetching:!1,fetchedQuestion:1});const e=t.data;this.setState({fetchedQuestion:e,isFetching:!1})}render(t,e){return c.eventBegan?(0,n.az)(n.HY,{children:[e.incorrect&&(0,n.az)(n.HY,{children:[(0,n.az)("div",{class:"mask"}),(0,n.az)(o.O,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),e.isFetching||!e.fetchedQuestion?h:(0,n.az)(v,{data:e.fetchedQuestion,value:e.answer,onInput:this.onInput,onSubmit:this._submit}),e.isAwaitingAnswer&&"Checking your answer..."]}):(0,n.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})}}const g={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%"}};function v(t){const{data:e,value:s,onInput:i,onSubmit:a,disableInput:r}=t;return e.game_over?"You win (?)":(0,n.az)("form",{action:"javascript:",onSubmit:a,children:[(0,n.az)("div",{class:"question-num",children:["Question - ",e.question_level]}),(0,n.az)("div",{class:"question-card",children:[(0,n.az)("div",{children:e.question}),(0,n.az)("div",{class:"question-hint",children:e.hint&&!!e.hint.length&&e.hint.map((t,e)=>(0,n.az)(b,{data:t,i:e}))}),!r&&(0,n.az)("input",{...Object.assign({class:"paper-input",placeholder:"Answer",onInput:i,value:s},g)})]}),!r&&(0,n.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function f(t){if("string"==typeof t)return t;const e=t.type,s=t.value;return"text"===e?s:"link"===e?(0,n.az)("a",{target:"_blank",href:s,style:{textDecoration:"underline",color:"var(--spec-color)"},children:s}):void 0}function b(t){const e=t.data,s=t.i;return e&&!!e.value&&(0,n.az)("div",{children:[`Hint ${s+1}: `,f(e)]})}},654:(t,e,s)=>{"use strict";s.r(e);var n=s(386),i=s(804),a=s(77),r=s(596);const o=t=>t.data;function u(){return(0,r.A)(a.SA.getLatestQuestionNumber).then(o)}function l(){return(0,r.A)(a.SA.getAllQuestions).then(o)}const c=()=>"Loading data...";var d=s(67),h=s(564);function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const g={type:"text",value:""};class v extends n.wA{constructor(...t){super(...t),p(this,"state",{hasQuestionData:null,question:"",hint:[],special:[],answer:""}),p(this,"_handleQuestion",t=>{const e=t.target.value||"";this.setState({question:e}),this.props.propUpdater("question",e)}),p(this,"_handleAnswer",t=>{const e=t.target.value||"";this.setState({answer:e}),this.props.propUpdater("answer",e)}),p(this,"componentDidUpdate",this.componentDidMount),p(this,"toggleType",t=>{const e={text:"link",link:"text"},s=+t.target.dataset.value,n=t.target.dataset.type,i=t.target.dataset.name;this.setState(t=>{const a=t[i],r={...a[s]};return r.type=e[n],a[s]=r,this.props.propUpdater(i,a),t})})}componentDidMount(){if(this.state.hasQuestionData&&this.state.question_level===this.props.questionData.question_level)return;const t={...this.props.questionData};t.hint&&t.hint.length||(t.hint=[g],this.props.propUpdater("hint",t.hint)),this.setState({hasQuestionData:!0,...t})}_handleHintLike(t){return e=>{const s=+e.target.dataset.value,n=e.target.value||"",i=e.target.dataset.type;this.setState(e=>{const a=[].slice.call(e[t]);return a[s]={value:n,type:i},e[t]=a,this.props.propUpdater(t,a.filter(t=>t.value&&t.value.trim())),e})}}_add(t){return()=>this.setState(e=>{const s=[].slice.call(e[t]||getHintLike(e,t));return s.push(g),e[t]=s,e})}render(t,e){if(e.hasQuestionData)return(0,n.az)("form",{action:"javascript:",onSubmit:t.onSubmit,children:[(0,n.az)("div",{class:"input-parent",children:[(0,n.az)("div",{class:"task-desc",children:"Question:"}),(0,n.az)("input",{class:"paper-input",value:e.question,placeholder:"Question",onInput:this._handleQuestion})]}),(0,n.az)("hr",{}),(0,n.az)("div",{class:"input-parent",children:[(0,n.az)("div",{class:"task-desc",children:"Answer:"}),(0,n.az)("input",{class:"paper-input",value:e.answer,placeholder:"Answer",onInput:this._handleAnswer})]}),(0,n.az)("hr",{}),(0,n.az)("div",{class:"input-parent",children:[(0,n.az)("div",{class:"task-desc",children:"Hints:"}),(0,n.az)(f,{name:"hint",hint:e.hint,handleHint:this._handleHintLike("hint"),setType:this.toggleType}),(0,n.az)(b,{add:this._add("hint"),name:"hint"})]}),(0,n.az)("hr",{}),(0,n.az)("div",{class:"input-parent",children:[(0,n.az)("div",{class:"task-desc",children:"Special:"}),(0,n.az)(f,{name:"special",hint:e.special,handleHint:this._handleHintLike("special")}),(0,n.az)(b,{add:this._add("special"),name:"special"})]}),(0,n.az)("hr",{}),(0,n.az)("button",{class:"action-button hoverable",children:"Submit"})]})}}function f(t){let{hint:e,handleHint:s,name:i}=t;return(!e||e.length<=0)&&(e=[g]),e.map((e,a)=>(0,n.az)("div",{class:"hints-parent-admin",children:["Hint Type: ",e.type,(0,n.az)("input",{"data-value":a,class:"paper-input","data-type":e.type,value:e.value,placeholder:`${i} #${a}`,onInput:s}),(0,n.az)("div",{"data-type":e.type,"data-value":a,"data-name":i,onClick:t.setType,class:"hoverable action-button",style:{padding:0},children:"Toggle Type"})]}))}function b(t){return(0,n.az)("img",{class:"hoverable plus back",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIgZmlsbD0iI2ZmZiIgLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+",title:"add "+t.name,onClick:t.add})}var m=s(7);function w(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class z extends n.wA{constructor(...t){super(...t),w(this,"url",a.SA.addQuestion),w(this,"state",{questionData:{question:"",hint:[],special_hint:[]}}),w(this,"_sendQuestion",()=>{this.setState({isLoading:!0}),(0,r.V)(this.url,this.state.questionData).then(t=>{if(t.error||t.data.error)return this.setState({isLoading:!1,error:t.error||t.data.error});this.props.close()})}),w(this,"_propUpdater",(t,e)=>this.setState(s=>(s.questionData[t]=e,s))),w(this,"_reset",()=>this.setState({error:!0}))}async getLastQuestionData(){this.setState({isLoading:!0,data:null,showLastQuestion:!1});const t=await u(),e=this.state.questionData;let s=t.question_number;null==s&&(s=-1),e.question_level=s+1,this.setState({data:!0,isLoading:!1,questionData:e})}componentDidMount(){this.getLastQuestionData()}render(t,e){if(e.isLoading)return(0,n.az)(c,{});if(e.data){if(e.error)return(0,n.az)(d.O,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(!e.success)return(0,n.az)(Q,{propUpdater:this._propUpdater,sendQuestion:this._sendQuestion,questionData:e.questionData})}}}const y=(t,e)=>(t+"").replace(d.P).includes(e);class _ extends z{constructor(...t){super(...t),w(this,"state",{questionData:{question:"",hint:[],special_hint:[]},questionData:null,isLoading:!1,data:!1,fetchedQuestions:null,filteredData:null,searchValue:""}),w(this,"url",a.SA.editQuestion),w(this,"_search",t=>{const e=t.target.value||"";let s;const n=this.state.fetchedQuestions;(0,m.u)(()=>{s=e?n.filter(t=>function(t,e){const s=e.replace(d.P,""),{question:n,question_level:i,hint:a,answer:r}=t;if(y(n,s)||y(i,s)||y(r,s))return!0;if(a&&a.length)for(const t of a)if(y(t.value||t,s))return!0;return!1}(t,e.trim())):n,this.setState({filteredData:s})}),this.setState({searchValue:e})}),w(this,"_setEditQuestion",t=>{const e=+t.target.dataset.bind,s=this.state.filteredData[e];this.setState({questionData:s})})}async fetchAll(){this.setState({isLoading:!0});const t=await l();this.setState({data:!0,isLoading:!1,fetchedQuestions:t,filteredData:t})}componentDidMount(){this.fetchAll()}render(t,e){if(e.isLoading)return(0,n.az)(c,{});if(e.data){if(e.error)return(0,n.az)(d.O,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(e.data){if(!e.questionData&&e.filteredData){const t=e.filteredData.length;return(0,n.az)("div",{children:[(0,n.az)("div",{children:["Result: ",t," ",(s="Question",i=t,1===i?s:s+"s")]}),(0,n.az)("div",{class:"search-box",children:[(0,n.az)("div",{style:{marginBottom:"10px"},children:"Search By Question/Question number/Answer/Hint Content"}),(0,n.az)("input",{value:e.searchValue,class:"paper-input",onInput:this._search})]}),(0,n.az)("hr",{}),(0,n.az)("div",{children:(0,n.az)(k,{filteredData:e.filteredData,setEditQuestion:this._setEditQuestion})})]})}var s,i;return e.questionData?(0,n.az)(Q,{questionData:e.questionData,propUpdater:this._propUpdater,sendQuestion:this._sendQuestion}):void 0}}}}function k(t){return t.filteredData.map((e,s)=>(0,n.az)("div",{class:"c_u question-parent",children:[(0,n.az)(h.Question,{data:e,disableInput:!0}),(0,n.az)("button",{"data-bind":s,onClick:t.setEditQuestion,class:"action-button hoverable edit-q",children:["Edit Question ",e.question_level]})]}))}class Q extends n.wA{constructor(...t){super(...t),w(this,"state",{showGameLivePreview:!0}),w(this,"_toggle",()=>this.setState(t=>({showGameLivePreview:!t.showGameLivePreview})))}render(t,e){const{propUpdater:s,sendQuestion:i,questionData:a}=t,r=e.showGameLivePreview;return(0,n.az)("div",{children:[(0,n.az)("button",{onClick:this._toggle,class:"heading-text last-q hoverable action-button",children:[r?"hide":"show"," Live Preview"]}),r&&(0,n.az)("div",{class:"last-question-card",children:(0,n.az)(h.Question,{data:a,disableInput:!0})}),(0,n.az)(v,{propUpdater:s,onSubmit:i,questionData:a})]})}}function S(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,{default:()=>A});const D=i.h.getStore();function A(){return D.isLoggedIn&&D.userData.is_admin?(0,n.az)("div",{class:"admin-data-panel",children:(0,n.az)(q,{})}):(0,n.az)("div",{style:{fontSize:"8rem"},children:"NO"})}class q extends n.wA{constructor(...t){super(...t),S(this,"state",{currentTab:"questions"}),S(this,"setTab",t=>this.setState({currentTab:t?t.target.dataset.tab:null}))}render(t,e){const s="questions"===e.currentTab,i="users"===e.currentTab;e.currentTab;return(0,n.az)(n.HY,{children:[(0,n.az)("div",{class:"btn-box",children:["questions","users","logs"].map(t=>e.currentTab!==t&&(0,n.az)("button",{onClick:this.setTab,"data-tab":t,class:"admin-button-tab",children:t}))}),(0,n.az)("div",{style:{fontSize:"2rem"},children:["Workspace: ",e.currentTab||"Not selected"]}),this.state.currentTab&&(0,n.az)("div",{style:{textAlign:"left"},children:(0,n.az)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4wMSAxMUg0djJoMTIuMDF2M0wyMCAxMmwtMy45OS00eiIvPjwvc3ZnPg==",class:"back hoverable",title:"go back",onClick:()=>this.setTab()})}),s&&(0,n.az)(I,{}),i&&(0,n.az)(L,{})]})}}class I extends n.wA{constructor(...t){super(...t),S(this,"state",{currentTask:null}),S(this,"closeWorkspaceTask",()=>this.setState({currentTask:null})),S(this,"setTask_addQuestion",()=>this.setState({currentTask:z})),S(this,"setTask_editQuestion",()=>this.setState({currentTask:_}))}render(t,e){if(null==e.currentTask)return(0,n.az)("div",{children:[(0,n.az)("span",{children:"Available Actions:"}),(0,n.az)("button",{class:"btn-act hoverable",onClick:this.setTask_addQuestion,children:"Add Question"}),(0,n.az)("button",{class:"btn-act hoverable",onClick:this.setTask_editQuestion,children:"Edit Question"})]});const s=this.state.currentTask;return(0,n.az)(s,{close:this.closeWorkspaceTask})}}function L(){}},710:(t,e,s)=>{"use strict";s.d(e,{H:()=>a});var n=s(386);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class a extends n.wA{constructor(...t){super(...t),i(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),i(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),i(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),i(this,"onInput",t=>this.setState({value:t.target.value})),i(this,"__onInput",t=>{const e=this.props.onInput;this.onInput(t),null!=e&&e(t)})}render({idx:t,labelText:e="",type:s="text",inputClass:i,extraProps:a},{isFocused:o,moveDown:u}){const l=t||this.state.id,c=this.state.value,d=["_animate",o||c?"moveup":"",u?"movedown":""];return(0,n.h)("div",{class:"user-input-anim "+(i||"")},(0,n.h)("label",{class:d,for:l},e),(0,n.h)(r,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:c,extraProps:a,id:l,onInput:this.__onInput}))}}function r({onFocus:t,onBlur:e,onInput:s,id:i,type:a,value:r,extraProps:o}){return(0,n.h)("input",{onFocus:t,onBlur:e,onInput:s,id:i,value:r,type:a,...o,class:"paper-input"})}},67:(t,e,s)=>{"use strict";s.d(e,{O:()=>i,P:()=>a});var n=s(386);function i(t){return(0,n.az)("div",{class:"app-popup",children:[(0,n.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,n.az)("div",{children:t.errorHead}),(0,n.az)("div",{class:"err-reasons",children:(0,n.az)("div",{children:t.reasons.map(t=>(0,n.az)("div",{children:[" - ",t]}))})}),(0,n.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}const a=/([^\w]|_)/g}}]);