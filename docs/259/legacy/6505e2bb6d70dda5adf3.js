(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{31581:function(e,t,n){e.exports=n(43474)},87259:function(e,t,n){"use strict";n.r(t);var i=n(94382),a=n.n(i),r=n(12386),o=n(86209),s=n(31581),l=n.n(s),c=n(77766),h=n.n(c),d=n(5824),u=n.n(d),p=n(87672),f=n.n(p),m=n(74383),v=function(e){return(1===(e=""+e).length?"0":"")+e},g=function(e){function t(){for(var t,n,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return n=e.call.apply(e,h()(t=[this]).call(t,a))||this,f()(u()(n),"state",{timeLeft:m.h.getStore().eventBeginTimeStamp-+new Date}),f()(u()(n),"_updateTime",(function(){return n.setState((function(e){var t=e.timeLeft-1e3;return{timeLeft:t,isTiming:t>500}}))})),n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.state.timeLeft>500;this.setState({isTiming:e}),e&&(this.__interval=l()(this._updateTime,1e3))},n.componentWillUnmount=function(){clearInterval(this.__interval)},n.componentDidUpdate=function(){this.state.isTiming||this.state.eventEmitted||(m.h.set("eventBegan",!0),this.setState({eventEmitted:!0}),clearInterval(this.__interval))},n.parseTime=function(e){var t,n=e/1e3,i=Math.floor(n/3600);t=n%3600;var a=Math.floor(t/60),r=t=Math.round(t%60);if(n>3)return v(i)+":"+v(a)+":"+v(r);var o="Ready?";switch(r){case 3:return"Are";case 2:return"You";case 1:default:return o}},n.render=function(e,t){return this.state.isTiming?(0,r.az)(r.HY,{children:[(0,r.az)("div",{class:"heading-text goes-live",children:"Going Live In"}),(0,r.az)("div",{class:"heading-text going-live-time-delta",children:this.parseTime(t.timeLeft)})]}):null},t}(r.wA),z=n(33662);n.d(t,{default:function(){return y}});var b=m.h.getStore(),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(e){return(0,r.az)("div",{children:[(0,r.az)("div",{class:"animated-landing-title",children:[(0,r.az)("div",{class:"front-logo",children:(0,r.az)(o.Z,{size:"200"})}),(0,r.az)("div",{class:"heading-text main-title c_u",children:"HALOCRYPT"})]}),(0,r.az)(g,{}),(0,r.az)("div",{class:"reg-btn-box",children:b.isLoggedIn?(0,r.az)(r.A,{href:b.eventBegan?"/play":"profile",class:"heading-text hoverable landing-action-button",children:b.eventBegan?"Play":"Profile"}):(0,r.az)(r.HY,{children:[(0,r.az)(r.A,{href:"/register",class:"landing-action-button heading-text hoverable",children:"Register"}),(0,r.az)(r.A,{href:"/login",class:"heading-text hoverable landing-action-button",children:"Login"})]})}),(0,r.az)("div",{style:{marginTop:"85px"},children:[(0,r.az)("div",{class:"t-container",children:[(0,r.az)("div",{style:{fontSize:"2rem"},children:"About"}),(0,r.az)("div",{children:"Halocrypt is an international online cryptic hunt organized by the students of DPS, Indore."}),(0,r.az)("div",{children:"The hunt consists of 50 brain wrecking questions based on famous incidents, figures and internet culture. The goal of the participant is to answer the questions as fast as possible using the hints given to place themselves at the top of the leaderboard."}),(0,r.az)("div",{children:"The top competitors who reach the highest levels in the shortest amount of time shall receive the prizes. The participant is free to use the internet to search for the answers. The hunt will commence on the 1st of May at 12 AM IST."}),(0,r.az)("div",{children:"Halocrypt provides participating students with an international platform to compete and test their skills against some of the greatest cryptic hunters and intellects on the globe."}),(0,r.az)("div",{children:"The competitor who completes all 50 questions or ends at the top of the leaderboard when the event ends, shall be declared as the winner of Halocrypt 2020."}),(0,r.az)("div",{children:"IF a competitor completes all the 50 levels before the competition ends, the competitor shall get all the prizes and no other competitor will receive any prize."})]}),(0,r.az)("div",{class:"t-container",children:[(0,r.az)("div",{style:{fontSize:"2rem"},children:"Prizes:-"}),(0,r.az)("div",{children:[(0,r.az)("span",{class:"bold",children:"1st:"})," NETFLIX PREMIUM or amazon gift card for the same amount, spotify premium family and discord nitro."]}),(0,r.az)("div",{children:[(0,r.az)("span",{class:"bold",children:"2nd:"})," NETFLIX STANDARD or amazon gift card for the same amount, spotify premium family and discord nitro."]}),(0,r.az)("div",{children:[(0,r.az)("span",{class:"bold",children:"3rd:"})," NETFLIX STANDARD or amazon gift card for the same amount, spotify premium family and discord nitro."]}),(0,r.az)("div",{children:"10X spotify premium."}),(0,r.az)("div",{children:"10Xdiscord nitro classic"})]})]})]})},t}(z.Z)},33662:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(77766),a=n.n(i),r=n(5824),o=n.n(r),s=n(94382),l=n.n(s),c=n(87672),h=n.n(c),d=n(12386),u=n(74383),p=function(e){function t(){for(var t,n,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return n=e.call.apply(e,a()(t=[this]).call(t,r))||this,h()(o()(n),"_globalStoreStateChanged",(function(){return n.setState({hasNewData:!0})})),n}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){u.h.subscribe(this._globalStoreStateChanged)},n.componentWillUnmount=function(){u.h.unsubscribe(this._globalStoreStateChanged)},t}(d.wA)},43474:function(e,t,n){n(71249);var i=n(54058);e.exports=i.setInterval}}]);