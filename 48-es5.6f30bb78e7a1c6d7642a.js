var __awaiter=this&&this.__awaiter||function(t,o,e,n){return new(e||(e=Promise))((function(i,r){function a(t){try{l(n.next(t))}catch(o){r(o)}}function s(t){try{l(n.throw(t))}catch(o){r(o)}}function l(t){t.done?i(t.value):new e((function(o){o(t.value)})).then(a,s)}l((n=n.apply(t,o||[])).next())}))},__generator=this&&this.__generator||function(t,o){var e,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=o.call(t,a)}catch(s){r=[6,s],n=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{iInF:function(t,o,e){"use strict";e.r(o),e.d(o,"ion_app",(function(){return d})),e.d(o,"ion_buttons",(function(){return p})),e.d(o,"ion_content",(function(){return h})),e.d(o,"ion_footer",(function(){return m})),e.d(o,"ion_header",(function(){return k})),e.d(o,"ion_router_outlet",(function(){return j})),e.d(o,"ion_title",(function(){return O})),e.d(o,"ion_toolbar",(function(){return S}));var n=e("c1op"),i=e("AfW+"),r=e("aiEM"),a=(e("kBU6"),e("Dl6n")),s=e("m9yc"),l=e("K6rM"),c=e("qaSm"),d=function(){function t(t){Object(n.l)(this,t)}return t.prototype.componentDidLoad=function(){b((function(){var t=Object(i.f)(window,"hybrid");i.b.getBoolean("_testing")||e.e(11).then(e.bind(null,"tCf4")).then((function(t){return t.startTapClick(i.b)})),i.b.getBoolean("statusTap",t)&&e.e(9).then(e.bind(null,"m/DA")).then((function(t){return t.startStatusTap()})),i.b.getBoolean("inputShims",u())&&e.e(8).then(e.bind(null,"aoIK")).then((function(t){return t.startInputShims(i.b)})),i.b.getBoolean("hardwareBackButton",t)&&e.e(6).then(e.bind(null,"XRsP")).then((function(t){return t.startHardwareBackButton()})),e.e(5).then(e.bind(null,"3YLQ")).then((function(t){return t.startFocusVisible()}))}))},t.prototype.render=function(){var t,o=Object(n.d)(this);return Object(n.i)(n.a,{class:(t={},t[o]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=i.b.getBoolean("_forceStatusbarPadding"),t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:!0,configurable:!0}),t}(),u=function(){return Object(i.f)(window,"ios")&&Object(i.f)(window,"mobile")},b=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},p=function(){function t(t){Object(n.l)(this,t),this.collapse=!1}return t.prototype.render=function(){var t,o=Object(n.d)(this);return Object(n.i)(n.a,{class:(t={},t[o]=!0,t["buttons-collapse"]=this.collapse,t)})},Object.defineProperty(t,"style",{get:function(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"},enumerable:!0,configurable:!0}),t}(),h=function(){function t(t){Object(n.l)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(n.d)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(n.e)(this,"ionScrollStart",7),this.ionScroll=Object(n.e)(this,"ionScroll",7),this.ionScrollEnd=Object(n.e)(this,"ionScrollEnd",7)}return t.prototype.disconnectedCallback=function(){this.onScrollEnd()},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},t.prototype.shouldForceOverscroll=function(){var t=this.forceOverscroll,o=this.mode;return void 0===t?"ios"===o&&Object(i.f)("ios"):t},t.prototype.resize=function(){this.fullscreen?Object(n.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},t.prototype.readDimensions=function(){var t=f(this.el),o=Math.max(this.el.offsetTop,0),e=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||e!==this.cBottom)&&(this.cTop=o,this.cBottom=e,this.el.forceUpdate())},t.prototype.onScroll=function(t){var o=this,e=Date.now(),i=!this.isScrolling;this.lastScroll=e,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(n.g)((function(e){o.queued=!1,o.detail.event=t,g(o.detail,o.scrollEl,e,i),o.ionScroll.emit(o.detail)})))},t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},t.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},t.prototype.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},t.prototype.scrollByPoint=function(t,o,e){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,e)},t.prototype.scrollToPoint=function(t,o,e){return void 0===e&&(e=0),__awaiter(this,void 0,void 0,(function(){var n,i,r,a,s,l,c,d,u;return __generator(this,(function(b){return n=this.scrollEl,e<32?[2,(null!=o&&(n.scrollTop=o),void(null!=t&&(n.scrollLeft=t)))]:(r=0,a=new Promise((function(t){return i=t})),s=n.scrollTop,l=n.scrollLeft,c=null!=o?o-s:0,d=null!=t?t-l:0,u=function(t){var o=Math.min(1,(t-r)/e)-1,a=Math.pow(o,3)+1;0!==c&&(n.scrollTop=Math.floor(a*c+s)),0!==d&&(n.scrollLeft=Math.floor(a*d+l)),a<1?requestAnimationFrame(u):i()},[2,(requestAnimationFrame((function(t){r=t,u(t)})),a)])}))}))},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()}),100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},t.prototype.render=function(){var t,o=this,e=this.scrollX,r=this.scrollY,s=Object(n.d)(this),l=this.shouldForceOverscroll(),c="ios"===s&&i.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(n.i)(n.a,{class:Object.assign(Object.assign({},Object(a.a)(this.color)),(t={},t[s]=!0,t["content-sizing"]=Object(a.c)("ion-popover",this.el),t.overscroll=l,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},Object(n.i)("main",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":r,overscroll:(e||r)&&l},ref:function(t){return o.scrollEl=t},onScroll:function(t){return o.onScroll(t)}},Object(n.i)("slot",null)),c?Object(n.i)("div",{class:"transition-effect"},Object(n.i)("div",{class:"transition-cover"}),Object(n.i)("div",{class:"transition-shadow"})):null,Object(n.i)("slot",{name:"fixed"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'},enumerable:!0,configurable:!0}),t}(),f=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)},g=function(t,o,e,n){var i=t.currentX,r=t.currentY,a=o.scrollLeft,s=o.scrollTop,l=e-t.timeStamp;if(n&&(t.startTimeStamp=e,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=e,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){var c=(s-r)/l;t.velocityX=(a-i)/l*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}},m=function(){function t(t){Object(n.l)(this,t),this.translucent=!1}return t.prototype.render=function(){var t,o=Object(n.d)(this),e=this.translucent;return Object(n.i)(n.a,{role:"contentinfo",class:(t={},t[o]=!0,t["footer-"+o]=!0,t["footer-translucent"]=e,t["footer-translucent-"+o]=e,t)})},Object.defineProperty(t,"style",{get:function(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"},enumerable:!0,configurable:!0}),t}(),v=function(t){var o=document.querySelector(t+".ion-cloned-element");if(null!==o)return o;var e=document.createElement(t);return e.classList.add("ion-cloned-element"),e.style.setProperty("display","none"),document.body.appendChild(e),e},y=function(t){if(t){var o=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(o).map((function(t){var o=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}}))||[[]]}}},w=function(t,o){void 0===o?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",o.toString())},x=function(t,o){void 0===o&&(o=!0),Object(n.m)((function(){o?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")}))},k=function(){function t(t){Object(n.l)(this,t),this.collapsibleHeaderInitialized=!1,this.translucent=!1}return t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkCollapsibleHeader()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentDidUnload=function(){this.destroyCollapsibleHeader()},t.prototype.checkCollapsibleHeader=function(){return __awaiter(this,void 0,void 0,(function(){var t,o,e,i;return __generator(this,(function(r){switch(r.label){case 0:return t="condense"===this.collapse,(o=!(!t||"ios"!==Object(n.d)(this))&&t)||!this.collapsibleHeaderInitialized?[3,1]:(this.destroyCollapsibleHeader(),[3,3]);case 1:return!o||this.collapsibleHeaderInitialized?[3,3]:(e=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),i=e?e.querySelector("ion-content"):null,[4,this.setupCollapsibleHeader(i,e)]);case 2:r.sent(),r.label=3;case 3:return[2]}}))}))},t.prototype.destroyCollapsibleHeader=function(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)},t.prototype.setupCollapsibleHeader=function(t,o){return __awaiter(this,void 0,void 0,(function(){var e,i=this;return __generator(this,(function(a){switch(a.label){case 0:return t&&o?(e=this,[4,t.getScrollElement()]):[3,2];case 1:return e.scrollEl=a.sent(),Object(n.g)((function(){var t=o.querySelectorAll("ion-header"),e=Array.from(t).find((function(t){return"condense"!==t.collapse}));if(e&&i.scrollEl){var a=y(e),s=y(i.el);a&&s&&(x(a,!1),Object(n.g)((function(){i.intersectionObserver=new IntersectionObserver((function(t){!function(t,o,e){Object(n.m)((function(){!function(t,o){if(t[0].isIntersecting){var e=100*(1-t[0].intersectionRatio)/75;w(o.toolbars[0],1===e?void 0:e)}}(t,o);var n=t[0],i=n.intersectionRect,r=i.width*i.height,a=0===r&&0==n.rootBounds.width*n.rootBounds.height,s=Math.abs(i.left-n.boundingClientRect.left),l=Math.abs(i.right-n.boundingClientRect.right);a||r>0&&(s>=5||l>=5)||(n.isIntersecting?(x(o,!1),x(e)):(0===i.x&&0===i.y||0!==i.width&&0!==i.height)&&(x(o),x(e,!1),w(o.toolbars[0],1)))}))}(t,a,s)}),{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:"-"+a.el.clientHeight+"px 0px 0px 0px"}),i.intersectionObserver.observe(s.toolbars[0].el)})),i.contentScrollCallback=function(){!function(t,o){Object(n.g)((function(){var e=t.scrollTop,i=Object(r.c)(1,1+-e/500,1.1);Object(n.m)((function(){!function(t,o,e){void 0===t&&(t=[]),void 0===o&&(o=1),void 0===e&&(e=!1),t.forEach((function(t){var n=t.ionTitleEl,i=t.innerTitleEl;n&&"large"===n.size&&(i.style.transformOrigin="left center",i.style.transition=e?"all 0.2s ease-in-out":"",i.style.transform="scale3d("+o+", "+o+", 1)")}))}(o.toolbars,i)}))}))}(i.scrollEl,s)},i.scrollEl.addEventListener("scroll",i.contentScrollCallback))}})),Object(n.m)((function(){v("ion-title"),v("ion-back-button")})),this.collapsibleHeaderInitialized=!0,[3,3];case 2:console.error("ion-header requires a content to collapse, make sure there is an ion-content."),a.label=3;case 3:return[2]}}))}))},t.prototype.render=function(){var t,o=Object(n.d)(this),e=this.collapse||"none";return Object(n.i)(n.a,{role:"banner",class:(t={},t[o]=!0,t["header-"+o]=!0,t["header-translucent"]=this.translucent,t["header-collapse-"+e]=!0,t["header-translucent-"+o]=this.translucent,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"},enumerable:!0,configurable:!0}),t}(),j=function(){function t(t){Object(n.l)(this,t),this.animationEnabled=!0,this.mode=Object(n.d)(this),this.animated=!0,this.ionNavWillLoad=Object(n.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(n.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(n.e)(this,"ionNavDidChange",3)}return t.prototype.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,o=this;return __generator(this,(function(n){switch(n.label){case 0:return t=this,[4,e.e(4).then(e.bind(null,"0yHn"))];case 1:return t.gesture=n.sent().createSwipeBackGesture(this.el,(function(){return!!o.swipeHandler&&o.swipeHandler.canStart()&&o.animationEnabled}),(function(){return o.swipeHandler&&o.swipeHandler.onStart()}),(function(t){return o.ani&&o.ani.progressStep(t)}),(function(t,e,n){if(o.ani){o.animationEnabled=!1,o.ani.onFinish((function(){o.animationEnabled=!0,o.swipeHandler&&o.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});var i=t?-.001:.001;t?i+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),e):(o.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),e)),o.ani.progressEnd(t?1:0,i,n)}})),this.swipeHandlerChanged(),[2]}}))}))},t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.commit=function(t,o,e){return __awaiter(this,void 0,void 0,(function(){var n,i,r;return __generator(this,(function(a){switch(a.label){case 0:return[4,this.lock()];case 1:n=a.sent(),i=!1,a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.transition(t,o,e)];case 3:return i=a.sent(),[3,5];case 4:return r=a.sent(),console.error(r),[3,5];case 5:return[2,(n(),i)]}}))}))},t.prototype.setRouteId=function(t,o,e){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(i){switch(i.label){case 0:return n={},[4,this.setRoot(t,o,{duration:"root"===e?0:void 0,direction:"back"===e?"back":"forward"})];case 1:return[2,(n.changed=i.sent(),n.element=this.activeEl,n)]}}))}))},t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(o){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]}))}))},t.prototype.setRoot=function(t,o,e){return __awaiter(this,void 0,void 0,(function(){var n,i;return __generator(this,(function(r){switch(r.label){case 0:return this.activeComponent===t?[2,!1]:(n=this.activeEl,[4,Object(s.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],o)]);case 1:return i=r.sent(),this.activeComponent=t,this.activeEl=i,[4,this.commit(i,n,e)];case 2:return r.sent(),[4,Object(s.b)(this.delegate,n)];case 3:return[2,(r.sent(),!0)]}}))}))},t.prototype.transition=function(t,o,e){return void 0===e&&(e={}),__awaiter(this,void 0,void 0,(function(){var n,r,a,s,c,d=this;return __generator(this,(function(u){switch(u.label){case 0:return o===t?[2,!1]:(this.ionNavWillChange.emit(),r=(n=this).el,a=n.mode,s=this.animated&&i.b.getBoolean("animated",!0),c=this.animation||e.animationBuilder||i.b.get("navAnimation"),[4,Object(l.e)(Object.assign({mode:a,animated:s,animationBuilder:c,enteringEl:t,leavingEl:o,baseEl:r,progressCallback:e.progressAnimation?function(t){return d.ani=t}:void 0},e))]);case 1:return[2,(u.sent(),this.ionNavDidChange.emit(),!0)]}}))}))},t.prototype.lock=function(){return __awaiter(this,void 0,void 0,(function(){var t,o;return __generator(this,(function(e){switch(e.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return o=t})),void 0!==t?[4,t]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,o]}}))}))},t.prototype.render=function(){return Object(n.i)("slot",null)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{swipeHandler:["swipeHandlerChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}(),O=function(){function t(t){Object(n.l)(this,t),this.ionStyle=Object(n.e)(this,"ionStyle",7)}return t.prototype.sizeChanged=function(){this.emitStyle()},t.prototype.connectedCallback=function(){this.emitStyle()},t.prototype.emitStyle=function(){var t,o=this.getSize();this.ionStyle.emit(((t={})["title-"+o]=!0,t))},t.prototype.getSize=function(){return void 0!==this.size?this.size:"default"},t.prototype.getMode=function(){var t=Object(n.d)(this),o=this.el.closest("ion-toolbar");return o&&o.mode||t},t.prototype.render=function(){var t,o=this.getMode(),e=this.getSize();return Object(n.i)(n.a,{class:Object.assign((t={},t[o]=!0,t["title-"+o]=!0,t["title-"+e]=!0,t),Object(a.a)(this.color))},Object(n.i)("div",{class:"toolbar-title"},Object(n.i)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{size:["sizeChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"},enumerable:!0,configurable:!0}),t}(),S=function(){function t(t){Object(n.l)(this,t),this.childrenStyles=new Map}return t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find((function(t){return"start"===t.slot}));o&&o.classList.add("buttons-first-slot");var e=t.reverse(),n=e.find((function(t){return"end"===t.slot}))||e.find((function(t){return"primary"===t.slot}))||e.find((function(t){return"secondary"===t.slot}));n&&n.classList.add("buttons-last-slot")},t.prototype.childrenStyle=function(t){t.stopPropagation();var o=t.target.tagName,e=t.detail,n={},i=this.childrenStyles.get(o)||{},r=!1;Object.keys(e).forEach((function(t){var o="toolbar-"+t,a=e[t];a!==i[o]&&(r=!0),a&&(n[o]=!0)})),r&&(this.childrenStyles.set(o,n),this.el.forceUpdate())},t.prototype.render=function(){var t,o=Object(n.d)(this),e={};return this.childrenStyles.forEach((function(t){Object.assign(e,t)})),Object(n.i)(n.a,{class:Object.assign(Object.assign((t={"in-toolbar":Object(a.c)("ion-toolbar",this.el)},t[o]=!0,t),e),Object(a.a)(this.color))},Object(n.i)("div",{class:"toolbar-background"}),Object(n.i)("div",{class:"toolbar-container"},Object(n.i)("slot",{name:"start"}),Object(n.i)("slot",{name:"secondary"}),Object(n.i)("div",{class:"toolbar-content"},Object(n.i)("slot",null)),Object(n.i)("slot",{name:"primary"}),Object(n.i)("slot",{name:"end"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"},enumerable:!0,configurable:!0}),t}()}}]);