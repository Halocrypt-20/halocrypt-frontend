(window.webpackJsonp=window.webpackJsonp||[]).push([[654,564],{1128:function(t,e,n){t.exports=n(7784)},6007:function(t,e,n){"use strict";n.d(e,{u:function(){return m},k:function(){return b}});n(1539),n(8674);var a,r=n(1128),i=n.n(r),s=n(3032),o=n.n(s),u=n(875),c=n.n(u),l=n(4103),d=n.n(l),h=n(77),p=n(3735),f=n(4383),v=n(9369),g=(0,v.Z)({},window.__initConfig);window.__initConfig=null;var w=f.h.getStore(),m=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&d()(a=c().prototype.then).call(a,c().resolve())||o(),b=new(function(){function t(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile"}var e=t.prototype;return e.__shouldPostLog=function(){return!h.mH},e._admin_getLogs=function(){if(w.isLoggedIn&&w.userData.is_admin)return(0,p.A)(h.PW.getLogs)},e.sendUserLog=function(t){var e="string"==typeof t?{type:t}:t,n=(0,v.Z)({},e,g);this.__shouldPostLog()?m((function(){return(0,p.V)(h.PW.addLog,n)})):console.log("prod log post ->",n)},t}());window.onerror=function(t,e,n,a,r){var s=r||{};t=t||s.message||"";var o=r.line||s.message||0,u=r.column||0,c=s.script||"",l=s.stackTrace||s.stack||"",d=i()(),h=location.href;b.sendUserLog({type:"js-error",timestamp:d,message:t,line:o,column:u,script:c,stack:l,url:h,source:e})}},1564:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return I},Question:function(){return x}});n(4916),n(5306);var a=n(1942),r=n.n(a),i=n(2991),s=n.n(i),o=n(3109),u=n.n(o),c=(n(5666),n(1161)),l=n.n(c),d=n(7766),h=n.n(d),p=n(1222),f=n.n(p),v=n(4382),g=n.n(v),w=n(7672),m=n.n(w),b=n(2386),y=n(4383),z=n(77),k=n(3735),S=(n(9710),n(9067)),_=n(6007),A=y.h.getStore(),Q=function(t){return(t||"").toLowerCase().replace(/\s/g,"")},D=(0,b.az)(x,{data:{question_level:"Loading",question:"Finding your question",hint:[]}}),I=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,h()(e=[this]).call(e,r))||this,m()(f()(n),"state",{fetchedQuestion:null,isFetching:!1,answer:"",isAwaitingAnswer:!1,incorrect:!1}),m()(f()(n),"onInput",(function(t){return n.setState({answer:Q(t.target.value)})})),m()(f()(n),"_submit",l()(u().mark((function t(){var e,a,r,i,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.state.isAwaitingAnswer){t.next=2;break}return t.abrupt("return");case 2:if(n.setState({isAwaitingAnswer:!0}),e=n.state.answer,a=n.state.fetchedQuestion&&n.state.fetchedQuestion.question_level||1,e){t.next=7;break}return t.abrupt("return");case 7:return r={answer:e},t.next=10,(0,k.V)(z.hY.answerQuestion,r);case 10:if(i=t.sent,s=i.data,_.k.sendUserLog({type:_.k.answeredQuestion,question_level:a}),!s.result){t.next=15;break}return t.abrupt("return",n.proceedToNextLevel());case 15:n.setState({isAwaitingAnswer:!1,incorrect:!0});case 16:case"end":return t.stop()}}),t)})))),m()(f()(n),"proceedToNextLevel",(function(){_.k.sendUserLog({type:_.k.accessQuestion,question_level:(n.state.fetchedQuestion&&n.state.fetchedQuestion.question_level||0)+1}),n.setState({fetchedQuestion:null})})),m()(f()(n),"resetError",(function(){return n.setState({incorrect:!1})})),n}g()(e,t);var n=e.prototype;return n.componentDidMount=function(){if(!A.isLoggedIn)return(0,b.uX)("/login?next=/play");_.k.sendUserLog(_.k.pageViewPlay),this.fetchQuestion()},n.componentDidUpdate=function(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()},n.fetchQuestion=function(){var t=l()(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.isFetching){t.next=2;break}return t.abrupt("return");case 2:return this.setState({isFetching:!0}),t.next=5,(0,k.A)(z.hY.getQuestion);case 5:if(!(e=t.sent).error){t.next=8;break}return t.abrupt("return",this.setState({hasError:!0,isFetching:!1,fetchedQuestion:1}));case 8:n=e.data,this.setState({fetchedQuestion:n,isFetching:!1});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.render=function(t,e){return A.eventBegan?(0,b.az)(b.HY,{children:[e.incorrect&&(0,b.az)(b.HY,{children:[(0,b.az)("div",{class:"mask"}),(0,b.az)(S.O,{errorHead:"Nope",reasons:["That is not the right answer"],close:this.resetError})]}),e.isFetching||!e.fetchedQuestion?D:(0,b.az)(x,{data:e.fetchedQuestion,value:e.answer,onInput:this.onInput,onSubmit:this._submit}),e.isAwaitingAnswer&&"Checking your answer..."]}):(0,b.az)("div",{style:{fontSize:"4rem"},children:"Not yet"})},e}(b.wA),q={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,style:{width:"90%"}};function x(t){var e,n=t.data,a=t.value,i=t.onInput,o=t.onSubmit,u=t.disableInput;return n.game_over?"You win (?)":(0,b.az)("form",{action:"javascript:",onSubmit:o,children:[(0,b.az)("div",{class:"question-num",children:["Question - ",n.question_level]}),(0,b.az)("div",{class:"question-card",children:[(0,b.az)("div",{children:n.question}),(0,b.az)("div",{class:"question-hint",children:n.hint&&!!n.hint.length&&s()(e=n.hint).call(e,(function(t,e){return(0,b.az)(T,{data:t,i:e})}))}),!u&&(0,b.az)("input",r()({class:"paper-input",placeholder:"Answer",onInput:i,value:a},q))]}),!u&&(0,b.az)("button",{class:"action-button heading-text sbm-button hoverable",children:"Submit"})]})}function L(t){if("string"==typeof t)return t;var e=t.type,n=t.value;return"text"===e?n:"link"===e?(0,b.az)("a",{target:"_blank",href:n,style:{textDecoration:"underline",color:"var(--spec-color)"},children:n}):void 0}function T(t){var e=t.data,n=t.i;return e&&!!e.value&&(0,b.az)("div",{children:["Hint "+(n+1)+": ",L(e)]})}},6654:function(t,e,n){"use strict";n.r(e);var a=n(2991),r=n.n(a),i=n(7766),s=n.n(i),o=n(1222),u=n.n(o),c=n(4382),l=n.n(c),d=n(7672),h=n.n(d),p=n(2386),f=n(4383),v=(n(8309),n(1539),n(4916),n(9714),n(5306),n(6976)),g=n.n(v),w=n(1511),m=n.n(w),b=n(9996),y=n.n(b),z=n(5420),k=n.n(z),S=n(6419),_=n.n(S),A=n(3649),Q=n.n(A),D=n(4103),I=n.n(D),q=n(5843),x=n.n(q),L=n(116),T=n.n(L),C=n(8580),P=n.n(C),M=n(3109),H=n.n(M),N=(n(5666),n(1161)),U=n.n(N),E=n(77),F=n(3735),Z=function(t){return t.data};function j(){return(0,F.A)(E.SA.getLatestQuestionNumber).then(Z)}function B(){return(0,F.A)(E.SA.getAllQuestions).then(Z)}var G=function(){return"Loading data..."},V=n(9067),W=n(1564),Y=n(1942),O=n.n(Y),R={type:"text",value:""},$=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,s()(e=[this]).call(e,r))||this,h()(u()(n),"state",{hasQuestionData:null,question:"",hint:[],special:[],answer:""}),h()(u()(n),"_handleQuestion",(function(t){var e=t.target.value||"";n.setState({question:e}),n.props.propUpdater("question",e)})),h()(u()(n),"_handleAnswer",(function(t){var e=t.target.value||"";n.setState({answer:e}),n.props.propUpdater("answer",e)})),h()(u()(n),"componentDidUpdate",n.componentDidMount),h()(u()(n),"toggleType",(function(t){var e={text:"link",link:"text"},a=+t.target.dataset.value,r=t.target.dataset.type,i=t.target.dataset.name;n.setState((function(t){var s=t[i],o=O()({},s[a]);return o.type=e[r],s[a]=o,n.props.propUpdater(i,s),t}))})),n}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){if(!this.state.hasQuestionData||this.state.question_level!==this.props.questionData.question_level){var t=O()({},this.props.questionData);t.hint&&t.hint.length||(t.hint=[R],this.props.propUpdater("hint",t.hint)),this.setState(O()({hasQuestionData:!0},t))}},n._handleHintLike=function(t){var e=this;return function(n){var a=+n.target.dataset.value,r=n.target.value||"",i=n.target.dataset.type;e.setState((function(n){var s=Q()([]).call(n[t]);return s[a]={value:r,type:i},n[t]=s,e.props.propUpdater(t,T()(s).call(s,(function(t){var e;return t.value&&x()(e=t.value).call(e)}))),n}))}},n._add=function(t){var e=this;return function(){return e.setState((function(e){var n=Q()([]).call(e[t]||getHintLike(e,t));return n.push(R),e[t]=n,e}))}},n.render=function(t,e){if(e.hasQuestionData)return(0,p.az)("form",{action:"javascript:",onSubmit:t.onSubmit,children:[(0,p.az)("div",{class:"input-parent",children:[(0,p.az)("div",{class:"task-desc",children:"Question:"}),(0,p.az)("input",{class:"paper-input",value:e.question,placeholder:"Question",onInput:this._handleQuestion})]}),(0,p.az)("hr",{}),(0,p.az)("div",{class:"input-parent",children:[(0,p.az)("div",{class:"task-desc",children:"Answer:"}),(0,p.az)("input",{class:"paper-input",value:e.answer,placeholder:"Answer",onInput:this._handleAnswer})]}),(0,p.az)("hr",{}),(0,p.az)("div",{class:"input-parent",children:[(0,p.az)("div",{class:"task-desc",children:"Hints:"}),(0,p.az)(J,{name:"hint",hint:e.hint,handleHint:this._handleHintLike("hint"),setType:this.toggleType}),(0,p.az)(X,{add:this._add("hint"),name:"hint"})]}),(0,p.az)("hr",{}),(0,p.az)("div",{class:"input-parent",children:[(0,p.az)("div",{class:"task-desc",children:"Special:"}),(0,p.az)(J,{name:"special",hint:e.special,handleHint:this._handleHintLike("special")}),(0,p.az)(X,{add:this._add("special"),name:"special"})]}),(0,p.az)("hr",{}),(0,p.az)("button",{class:"action-button hoverable",children:"Submit"})]})},e}(p.wA);function J(t){var e=t.hint,n=t.handleHint,a=t.name;return(!e||e.length<=0)&&(e=[R]),r()(e).call(e,(function(e,r){return(0,p.az)("div",{class:"hints-parent-admin",children:["Hint Type: ",e.type,(0,p.az)("input",{"data-value":r,class:"paper-input","data-type":e.type,value:e.value,placeholder:a+" #"+r,onInput:n}),(0,p.az)("div",{"data-type":e.type,"data-value":r,"data-name":a,onClick:t.setType,class:"hoverable action-button",style:{padding:0},children:"Toggle Type"})]})}))}function X(t){return(0,p.az)("img",{class:"hoverable plus back",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeiIgZmlsbD0iI2ZmZiIgLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+",title:"add "+t.name,onClick:t.add})}var K=n(6007);function tt(t){var e,n=0;if(void 0===k()||null==y()(t)){if(m()(t)||(t=function(t,e){var n;if(!t)return;if("string"==typeof t)return et(t,e);var a=Q()(n=Object.prototype.toString.call(t)).call(n,8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return _()(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return et(t,e)}(t)))return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return n=g()(t),I()(e=n.next).call(e,n)}function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var nt=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,s()(e=[this]).call(e,r))||this,h()(u()(n),"url",E.SA.addQuestion),h()(u()(n),"state",{questionData:{question:"",hint:[],special_hint:[]}}),h()(u()(n),"_sendQuestion",(function(){n.setState({isLoading:!0}),(0,F.V)(n.url,n.state.questionData).then((function(t){if(t.error||t.data.error)return n.setState({isLoading:!1,error:t.error||t.data.error});n.props.close()}))})),h()(u()(n),"_propUpdater",(function(t,e){return n.setState((function(n){return n.questionData[t]=e,n}))})),h()(u()(n),"_reset",(function(){return n.setState({error:!0})})),n}l()(e,t);var n=e.prototype;return n.getLastQuestionData=function(){var t=U()(H().mark((function t(){var e,n,a;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0,data:null,showLastQuestion:!1}),t.next=3,j();case 3:e=t.sent,n=this.state.questionData,null==(a=e.question_number)&&(a=-1),n.question_level=a+1,this.setState({data:!0,isLoading:!1,questionData:n});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.componentDidMount=function(){this.getLastQuestionData()},n.render=function(t,e){if(e.isLoading)return(0,p.az)(G,{});if(e.data){if(e.error)return(0,p.az)(V.O,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(!e.success)return(0,p.az)(ot,{propUpdater:this._propUpdater,sendQuestion:this._sendQuestion,questionData:e.questionData})}},e}(p.wA),at=function(t,e){var n;return P()(n=(t+"").replace(V.P)).call(n,e)};function rt(t,e){var n=e.replace(V.P,""),a=t.question,r=t.question_level,i=t.hint,s=t.answer;if(at(a,n)||at(r,n)||at(s,n))return!0;if(i&&i.length)for(var o,u=tt(i);!(o=u()).done;){var c=o.value;if(at(c.value||c,n))return!0}return!1}var it=function(t){function e(){for(var e,n,a,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=t.call.apply(t,s()(e=[this]).call(e,i))||this,h()(u()(a),"state",((n={questionData:{question:"",hint:[],special_hint:[]}}).questionData=null,n.isLoading=!1,n.data=!1,n.fetchedQuestions=null,n.filteredData=null,n.searchValue="",n)),h()(u()(a),"url",E.SA.editQuestion),h()(u()(a),"_search",(function(t){var e,n=t.target.value||"",r=a.state.fetchedQuestions;(0,K.u)((function(){e=n?T()(r).call(r,(function(t){return rt(t,x()(n).call(n))})):r,a.setState({filteredData:e})})),a.setState({searchValue:n})})),h()(u()(a),"_setEditQuestion",(function(t){var e=+I()(t.target.dataset),n=a.state.filteredData[e];a.setState({questionData:n})})),a}l()(e,t);var n=e.prototype;return n.fetchAll=function(){var t=U()(H().mark((function t(){var e;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,B();case 3:e=t.sent,this.setState({data:!0,isLoading:!1,fetchedQuestions:e,filteredData:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.componentDidMount=function(){this.fetchAll()},n.render=function(t,e){if(e.isLoading)return(0,p.az)(G,{});if(e.data){if(e.error)return(0,p.az)(V.O,{errorHead:"unknown error",reasons:["check your console?"],close:this._reset});if(e.data){if(!e.questionData&&e.filteredData){var n=e.filteredData.length;return(0,p.az)("div",{children:[(0,p.az)("div",{children:["Result: ",n," ",(a="Question",r=n,1===r?a:a+"s")]}),(0,p.az)("div",{class:"search-box",children:[(0,p.az)("div",{style:{marginBottom:"10px"},children:"Search By Question/Question number/Answer/Hint Content"}),(0,p.az)("input",{value:e.searchValue,class:"paper-input",onInput:this._search})]}),(0,p.az)("hr",{}),(0,p.az)("div",{children:(0,p.az)(st,{filteredData:e.filteredData,setEditQuestion:this._setEditQuestion})})]})}var a,r;return e.questionData?(0,p.az)(ot,{questionData:e.questionData,propUpdater:this._propUpdater,sendQuestion:this._sendQuestion}):void 0}}},e}(nt);function st(t){var e;return r()(e=t.filteredData).call(e,(function(e,n){return(0,p.az)("div",{class:"c_u question-parent",children:[(0,p.az)(W.Question,{data:e,disableInput:!0}),(0,p.az)("button",{"data-bind":n,onClick:t.setEditQuestion,class:"action-button hoverable edit-q",children:["Edit Question ",e.question_level]})]})}))}var ot=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,s()(e=[this]).call(e,r))||this,h()(u()(n),"state",{showGameLivePreview:!0}),h()(u()(n),"_toggle",(function(){return n.setState((function(t){return{showGameLivePreview:!t.showGameLivePreview}}))})),n}return l()(e,t),e.prototype.render=function(t,e){var n=t.propUpdater,a=t.sendQuestion,r=t.questionData,i=e.showGameLivePreview;return(0,p.az)("div",{children:[(0,p.az)("button",{onClick:this._toggle,class:"heading-text last-q hoverable action-button",children:[i?"hide":"show"," Live Preview"]}),i&&(0,p.az)("div",{class:"last-question-card",children:(0,p.az)(W.Question,{data:r,disableInput:!0})}),(0,p.az)($,{propUpdater:n,onSubmit:a,questionData:r})]})},e}(p.wA);n.d(e,{default:function(){return ct}});var ut=f.h.getStore();function ct(){return ut.isLoggedIn&&ut.userData.is_admin?(0,p.az)("div",{class:"admin-data-panel",children:(0,p.az)(lt,{})}):(0,p.az)("div",{style:{fontSize:"8rem"},children:"NO"})}var lt=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,s()(e=[this]).call(e,r))||this,h()(u()(n),"state",{currentTab:"questions"}),h()(u()(n),"setTab",(function(t){return n.setState({currentTab:t?t.target.dataset.tab:null})})),n}return l()(e,t),e.prototype.render=function(t,e){var n,a=this,i="questions"===e.currentTab,s="users"===e.currentTab;e.currentTab;return(0,p.az)(p.HY,{children:[(0,p.az)("div",{class:"btn-box",children:r()(n=["questions","users","logs"]).call(n,(function(t){return e.currentTab!==t&&(0,p.az)("button",{onClick:a.setTab,"data-tab":t,class:"admin-button-tab",children:t})}))}),(0,p.az)("div",{style:{fontSize:"2rem"},children:["Workspace: ",e.currentTab||"Not selected"]}),this.state.currentTab&&(0,p.az)("div",{style:{textAlign:"left"},children:(0,p.az)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNi4wMSAxMUg0djJoMTIuMDF2M0wyMCAxMmwtMy45OS00eiIvPjwvc3ZnPg==",class:"back hoverable",title:"go back",onClick:function(){return a.setTab()}})}),i&&(0,p.az)(dt,{}),s&&(0,p.az)(ht,{})]})},e}(p.wA),dt=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,s()(e=[this]).call(e,r))||this,h()(u()(n),"state",{currentTask:null}),h()(u()(n),"closeWorkspaceTask",(function(){return n.setState({currentTask:null})})),h()(u()(n),"setTask_addQuestion",(function(){return n.setState({currentTask:nt})})),h()(u()(n),"setTask_editQuestion",(function(){return n.setState({currentTask:it})})),n}return l()(e,t),e.prototype.render=function(t,e){if(null==e.currentTask)return(0,p.az)("div",{children:[(0,p.az)("span",{children:"Available Actions:"}),(0,p.az)("button",{class:"btn-act hoverable",onClick:this.setTask_addQuestion,children:"Add Question"}),(0,p.az)("button",{class:"btn-act hoverable",onClick:this.setTask_editQuestion,children:"Edit Question"})]});var n=this.state.currentTask;return(0,p.az)(n,{close:this.closeWorkspaceTask})},e}(p.wA);function ht(){}},9710:function(t,e,n){"use strict";n.d(e,{H:function(){return f}});var a=n(1942),r=n.n(a),i=n(7766),s=n.n(i),o=n(1222),u=n.n(o),c=n(4382),l=n.n(c),d=n(7672),h=n.n(d),p=n(2386),f=function(t){function e(){for(var e,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=t.call.apply(t,s()(e=[this]).call(e,r))||this,h()(u()(n),"state",{id:Math.random(),isFocused:!1,value:n.props.value||""}),h()(u()(n),"onFocus",(function(){return!n.state.value&&n.setState({isFocused:!0,moveDown:!1})})),h()(u()(n),"onBlur",(function(){return!n.state.value&&n.setState({isFocused:!1,moveDown:!0})})),h()(u()(n),"onInput",(function(t){return n.setState({value:t.target.value})})),h()(u()(n),"__onInput",(function(t){var e=n.props.onInput;n.onInput(t),null!=e&&e(t)})),n}return l()(e,t),e.prototype.render=function(t,e){var n=t.idx,a=t.labelText,r=void 0===a?"":a,i=t.type,s=void 0===i?"text":i,o=t.inputClass,u=t.extraProps,c=e.isFocused,l=e.moveDown,d=n||this.state.id,h=this.state.value,f=["_animate",c||h?"moveup":"",l?"movedown":""];return(0,p.h)("div",{class:"user-input-anim "+(o||"")},(0,p.h)("label",{class:f,for:d},r),(0,p.h)(v,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:h,extraProps:u,id:d,onInput:this.__onInput}))},e}(p.wA);function v(t){var e=t.onFocus,n=t.onBlur,a=t.onInput,i=t.id,s=t.type,o=t.value,u=t.extraProps;return(0,p.h)("input",r()({onFocus:e,onBlur:n,onInput:a,id:i,value:o,type:s},u,{class:"paper-input"}))}},9067:function(t,e,n){"use strict";n.d(e,{O:function(){return s},P:function(){return o}});var a=n(2991),r=n.n(a),i=n(2386);function s(t){var e;return(0,i.az)("div",{class:"app-popup",children:[(0,i.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,i.az)("div",{children:t.errorHead}),(0,i.az)("div",{class:"err-reasons",children:(0,i.az)("div",{children:r()(e=t.reasons).call(e,(function(t){return(0,i.az)("div",{children:[" - ",t]})}))})}),(0,i.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}var o=/([^\w]|_)/g},1103:function(t,e,n){n(5160);var a=n(4058);t.exports=a.Date.now},5160:function(t,e,n){n(6887)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},7784:function(t,e,n){var a=n(1103);t.exports=a},5306:function(t,e,n){"use strict";var a=n(7007),r=n(9670),i=n(7908),s=n(7466),o=n(9958),u=n(4488),c=n(1530),l=n(7651),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;a("replace",2,(function(t,e,n,a){var g=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=a.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(n,a){var r=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!g&&w||"string"==typeof a&&-1===a.indexOf(m)){var i=n(e,t,this,a);if(i.done)return i.value}var u=r(t),p=String(this),f="function"==typeof a;f||(a=String(a));var v=u.global;if(v){var y=u.unicode;u.lastIndex=0}for(var z=[];;){var k=l(u,p);if(null===k)break;if(z.push(k),!v)break;""===String(k[0])&&(u.lastIndex=c(p,s(u.lastIndex),y))}for(var S,_="",A=0,Q=0;Q<z.length;Q++){k=z[Q];for(var D=String(k[0]),I=d(h(o(k.index),p.length),0),q=[],x=1;x<k.length;x++)q.push(void 0===(S=k[x])?S:String(S));var L=k.groups;if(f){var T=[D].concat(q,I,p);void 0!==L&&T.push(L);var C=String(a.apply(void 0,T))}else C=b(D,p,I,q,L,a);I>=A&&(_+=p.slice(A,I)+C,A=I+D.length)}return _+p.slice(A)}];function b(t,n,a,r,s,o){var u=a+t.length,c=r.length,l=v;return void 0!==s&&(s=i(s),l=f),e.call(o,l,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(u);case"<":o=s[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>c){var d=p(l/10);return 0===d?e:d<=c?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):e}o=r[l-1]}return void 0===o?"":o}))}}))}}]);