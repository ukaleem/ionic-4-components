(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zqhc:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("R66G"),o=function(){function l(l){this.dom=l,this.shouldBounce=!0,this.dockedHeight=224,this.distanceTop=0,this.drawerState=t.a.Docked,this.states=t.a,this.handle=!0,this.float=!0,this.rounded=!0,this.animation=!1}return l.prototype.ngOnInit=function(){},l.prototype.onPan=function(l){this.animation&&(l=+l.toFixed(2),this.transform=this.dom.bypassSecurityTrustStyle("translateY(-"+180*l+"px) scale("+Math.min(1,1.2-l)+")"),this.filter=this.dom.bypassSecurityTrustStyle("blur("+4*l+"px)"))},l}(),a=function(){return function(){}}(),b=u("pMnS"),i=u("NcP4"),r=u("tzjl"),s=u("MzJX"),d=u("oBZk"),g=u("ZZ/e"),c=u("gIcY"),h=u("refH"),f=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:rgba(0,0,0,0);-webkit-transform:translateY(100vh);transform:translateY(100vh)}.fiv-bottom-drawer-scrollable-content[_ngcontent-%COMP%]{width:100%;height:100%}"]],data:{}});function p(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","fiv-bottom-drawer-scrollable-content"],["no-bounce",""]],null,null,null,null,null)),e.Ab(null,0)],null,null)}var B=u("iR0D"),C=u("ZYjt"),v=u("Ip0R"),k=u("hfLL"),m=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100%;height:100%;--fiv-border-radius:12px;--fiv-padding:20px;padding-top:var(--fiv-padding);--fiv-background:var(--ion-background-color);--fiv-handle-background:var(--ion-color-light-shade);background:var(--fiv-background)}.bsc-wrapper[_ngcontent-%COMP%]{width:100%;height:100%}.rounded[_nghost-%COMP%]{border-top-left-radius:var(--fiv-border-radius);border-top-right-radius:var(--fiv-border-radius)}.handle[_ngcontent-%COMP%]{display:block;background:var(--fiv-handle-background);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content[_ngcontent-%COMP%]{height:100%}"]],data:{}});function z(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"span",[["class","handle"]],[[8,"style",2]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.click()&&e),e},null,null)),e.rb(1,81920,null,0,B.a,[C.c],{fivCenter:[0,"fivCenter"]},null),e.Eb(2,{vertical:0,horizontal:1})],function(l,n){var u=l(n,2,0,!1,!0);l(n,1,0,u)},function(l,n){l(n,0,0,e.Bb(n,1).myStyle)})}function M(l){return e.Lb(0,[e.Hb(402653184,1,{content:0}),(l()(),e.sb(1,0,null,null,8,"div",[["class","bsc-wrapper"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,z)),e.rb(3,16384,null,0,v.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(4,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),e.rb(5,278528,null,0,v.k,[e.t,e.u,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Eb(6,{margin:0}),(l()(),e.sb(7,0,null,null,2,"ion-content",[],null,null,null,d.db,d.m)),e.rb(8,49152,[[1,4]],0,g.v,[e.h,e.k,e.A],{scrollY:[0,"scrollY"]},null),e.Ab(0,0)],function(l,n){var u=n.component;l(n,3,0,u.currentState!==u.states.Top&&u.handle);var e=l(n,6,0,u.handle);l(n,5,0,"content",e),l(n,8,0,2===u.currentState&&u.shouldBounce&&!u.panning)},null)}var y=u("Xqnl"),A=u("2MiI"),x=u("XVzZ"),I=u("F5vI"),P=u("jp9y"),S=e.qb({encapsulation:0,styles:[[".drawer-content[_ngcontent-%COMP%]{border-top:.5px solid #e5e5e5;padding:10px}.flex-scroll[_ngcontent-%COMP%]{display:flex;overflow-x:scroll;width:100%}.flex-scroll[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{flex:1 0 auto}fiv-bottom-sheet-content[_ngcontent-%COMP%]{--fiv-border-radius:12px;--fiv-padding:20px}ion-item[_ngcontent-%COMP%]{--background:var(--ion-item-background)}"]],data:{}});function j(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,28,"ion-list",[],null,null,null,d.qb,d.y)),e.rb(1,49152,null,0,g.P,[e.h,e.k,e.A],null,null),(l()(),e.sb(2,0,null,0,8,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(3,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(4,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(5,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Top"])),(l()(),e.sb(7,0,null,0,3,"ion-radio",[],null,[[null,"click"],[null,"ionBlur"],[null,"ionSelect"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,10)._handleBlurEvent(u.target)&&t),"ionSelect"===n&&(t=!1!==e.Bb(l,10)._handleIonSelect(u.target)&&t),"click"===n&&(t=!1!==(o.drawerState=o.states.Top)&&t),t},d.vb,d.D)),e.Gb(5120,null,c.f,function(l){return[l]},[g.Mb]),e.rb(9,49152,null,0,g.ab,[e.h,e.k,e.A],{checked:[0,"checked"]},null),e.rb(10,16384,null,0,g.Mb,[e.k],null,null),(l()(),e.sb(11,0,null,0,8,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(12,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(13,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(14,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Docked"])),(l()(),e.sb(16,0,null,0,3,"ion-radio",[],null,[[null,"click"],[null,"ionBlur"],[null,"ionSelect"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,19)._handleBlurEvent(u.target)&&t),"ionSelect"===n&&(t=!1!==e.Bb(l,19)._handleIonSelect(u.target)&&t),"click"===n&&(t=!1!==(o.drawerState=o.states.Docked)&&t),t},d.vb,d.D)),e.Gb(5120,null,c.f,function(l){return[l]},[g.Mb]),e.rb(18,49152,null,0,g.ab,[e.h,e.k,e.A],{checked:[0,"checked"]},null),e.rb(19,16384,null,0,g.Mb,[e.k],null,null),(l()(),e.sb(20,0,null,0,8,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(21,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(22,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(23,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Bottom"])),(l()(),e.sb(25,0,null,0,3,"ion-radio",[],null,[[null,"click"],[null,"ionBlur"],[null,"ionSelect"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,28)._handleBlurEvent(u.target)&&t),"ionSelect"===n&&(t=!1!==e.Bb(l,28)._handleIonSelect(u.target)&&t),"click"===n&&(t=!1!==(o.drawerState=o.states.Bottom)&&t),t},d.vb,d.D)),e.Gb(5120,null,c.f,function(l){return[l]},[g.Mb]),e.rb(27,49152,null,0,g.ab,[e.h,e.k,e.A],{checked:[0,"checked"]},null),e.rb(28,16384,null,0,g.Mb,[e.k],null,null)],function(l,n){var u=n.component;l(n,9,0,u.drawerState===u.states.Top),l(n,18,0,u.drawerState===u.states.Docked),l(n,27,0,u.drawerState===u.states.Bottom)},null)}function w(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["This component only works on mobile."]))],null,null)}function _(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,4,"fiv-bottom-sheet",[],null,[[null,"fivProgress"],[null,"stateChange"]],function(l,n,u){var e=!0,t=l.component;return"fivProgress"===n&&(e=!1!==t.onPan(u)&&e),"stateChange"===n&&(e=!1!==(t.drawerState=u)&&e),e},p,f)),e.rb(1,4898816,[["fbs",4]],1,h.a,[e.k,e.F,g.e,g.Kb],{dockedHeight:[0,"dockedHeight"],shouldBounce:[1,"shouldBounce"],distanceTop:[2,"distanceTop"],state:[3,"state"]},{stateChange:"stateChange",fivProgress:"fivProgress"}),e.Hb(335544320,1,{content:0}),(l()(),e.sb(3,0,null,0,1,"fiv-bottom-sheet-content",[],[[2,"rounded",null],[8,"style",2]],null,null,M,m)),e.rb(4,4308992,[[1,4]],0,k.a,[C.c],{rounded:[0,"rounded"],handle:[1,"handle"],float:[2,"float"]},null)],function(l,n){var u=n.component;l(n,1,0,u.dockedHeight,u.shouldBounce,u.distanceTop,u.drawerState),l(n,4,0,u.rounded,u.handle,u.float)},function(l,n){l(n,3,0,e.Bb(n,4).isRounded,e.Bb(n,4).styles)})}function O(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-header",[["title","Bottom Sheet"]],null,null,null,y.b,y.a)),e.rb(1,114688,null,0,A.a,[g.Hb],{title:[0,"title"]},null),(l()(),e.sb(2,0,null,null,106,"ion-content",[["no-bounce",""],["padding",""]],[[4,"filter",null],[4,"transform",null]],null,null,d.db,d.m)),e.rb(3,49152,null,0,g.v,[e.h,e.k,e.A],null,null),(l()(),e.sb(4,0,null,0,104,"ion-grid",[["class","page-content"],["fixed",""]],null,null,null,d.hb,d.q)),e.rb(5,49152,null,0,g.B,[e.h,e.k,e.A],{fixed:[0,"fixed"]},null),(l()(),e.sb(6,0,null,0,102,"ion-row",[],null,null,null,d.xb,d.G)),e.rb(7,49152,null,0,g.jb,[e.h,e.k,e.A],null,null),(l()(),e.sb(8,0,null,0,100,"ion-col",[["offsetLg","1"],["offsetMd","0"],["offsetSm","0"],["offsetXl","1"],["offsetXs","0"],["sizeLg","10"],["sizeMd","12"],["sizeSm","12"],["sizeXl","10"],["sizeXs","12"]],null,null,null,d.cb,d.l)),e.rb(9,49152,null,0,g.u,[e.h,e.k,e.A],{offsetLg:[0,"offsetLg"],offsetMd:[1,"offsetMd"],offsetSm:[2,"offsetSm"],offsetXl:[3,"offsetXl"],offsetXs:[4,"offsetXs"],sizeLg:[5,"sizeLg"],sizeMd:[6,"sizeMd"],sizeSm:[7,"sizeSm"],sizeXl:[8,"sizeXl"],sizeXs:[9,"sizeXs"]},null),(l()(),e.sb(10,0,null,0,98,"app-example",[["docs","assets/docs/components/bottom-sheet.md"]],null,null,null,x.b,x.a)),e.rb(11,114688,null,0,I.a,[],{docs:[0,"docs"]},null),(l()(),e.jb(16777216,null,0,2,null,j)),e.rb(13,16384,null,0,P.a,[g.Kb,e.Q,e.N],{fivIf:[0,"fivIf"]},null),e.Cb(14,1),(l()(),e.sb(15,0,null,0,90,"ion-list",[],null,null,null,d.qb,d.y)),e.rb(16,49152,null,0,g.P,[e.h,e.k,e.A],null,null),(l()(),e.sb(17,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(18,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(19,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(20,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Bounce"])),(l()(),e.sb(22,0,null,0,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,23)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,23)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.shouldBounce=u)&&t),t},d.ab,d.j)),e.rb(23,16384,null,0,g.c,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.c]),e.rb(25,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(27,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(28,49152,null,0,g.s,[e.h,e.k,e.A],null,null),(l()(),e.sb(29,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(30,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(31,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(32,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Docked height"])),(l()(),e.sb(34,0,null,0,6,"ion-input",[["type","number"],["value","150"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,35)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,35)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.dockedHeight=u)&&t),t},d.kb,d.t)),e.rb(35,16384,null,0,g.Jb,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.Jb]),e.rb(37,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(39,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(40,49152,null,0,g.H,[e.h,e.k,e.A],{type:[0,"type"],value:[1,"value"]},null),(l()(),e.sb(41,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(42,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(43,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(44,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Top Distance"])),(l()(),e.sb(46,0,null,0,6,"ion-input",[["type","number"],["value","56"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,47)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,47)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.distanceTop=u)&&t),t},d.kb,d.t)),e.rb(47,16384,null,0,g.Jb,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.Jb]),e.rb(49,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(51,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(52,49152,null,0,g.H,[e.h,e.k,e.A],{type:[0,"type"],value:[1,"value"]},null),(l()(),e.sb(53,0,null,0,4,"ion-item-divider",[],null,null,null,d.lb,d.v)),e.rb(54,49152,null,0,g.J,[e.h,e.k,e.A],null,null),(l()(),e.sb(55,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(56,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Bottom Sheet Content"])),(l()(),e.sb(58,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(59,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(60,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(61,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Show example content pan animation"])),(l()(),e.sb(63,0,null,0,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,64)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,64)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.animation=u)&&t),t},d.ab,d.j)),e.rb(64,16384,null,0,g.c,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.c]),e.rb(66,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(68,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(69,49152,null,0,g.s,[e.h,e.k,e.A],null,null),(l()(),e.sb(70,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(71,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(72,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(73,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Rounded"])),(l()(),e.sb(75,0,null,0,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,76)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,76)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.rounded=u)&&t),t},d.ab,d.j)),e.rb(76,16384,null,0,g.c,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.c]),e.rb(78,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(80,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(81,49152,null,0,g.s,[e.h,e.k,e.A],null,null),(l()(),e.sb(82,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(83,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(84,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(85,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Handle"])),(l()(),e.sb(87,0,null,0,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,88)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,88)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.handle=u)&&t),t},d.ab,d.j)),e.rb(88,16384,null,0,g.c,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.c]),e.rb(90,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(92,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(93,49152,null,0,g.s,[e.h,e.k,e.A],null,null),(l()(),e.sb(94,0,null,0,11,"ion-item",[],null,null,null,d.nb,d.u)),e.rb(95,49152,null,0,g.I,[e.h,e.k,e.A],null,null),(l()(),e.sb(96,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.x)),e.rb(97,49152,null,0,g.O,[e.h,e.k,e.A],null,null),(l()(),e.Jb(-1,0,["Float"])),(l()(),e.sb(99,0,null,0,6,"ion-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,100)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,100)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.float=u)&&t),t},d.ab,d.j)),e.rb(100,16384,null,0,g.c,[e.k],null,null),e.Gb(1024,null,c.f,function(l){return[l]},[g.c]),e.rb(102,671744,null,0,c.j,[[8,null],[8,null],[8,null],[6,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,c.g,null,[c.j]),e.rb(104,16384,null,0,c.h,[[4,c.g]],null,null),e.rb(105,49152,null,0,g.s,[e.h,e.k,e.A],null,null),(l()(),e.jb(16777216,null,0,2,null,w)),e.rb(107,16384,null,0,P.a,[g.Kb,e.Q,e.N],{fivIf:[0,"fivIf"]},null),e.Cb(108,1),(l()(),e.jb(16777216,null,null,2,null,_)),e.rb(110,16384,null,0,P.a,[g.Kb,e.Q,e.N],{fivIf:[0,"fivIf"]},null),e.Cb(111,1)],function(l,n){var u=n.component;l(n,1,0,"Bottom Sheet"),l(n,5,0,""),l(n,9,0,"1","0","0","1","0","10","12","12","10","12"),l(n,11,0,"assets/docs/components/bottom-sheet.md");var e=l(n,14,0,"mobile");l(n,13,0,e),l(n,25,0,u.shouldBounce),l(n,37,0,u.dockedHeight),l(n,40,0,"number","150"),l(n,49,0,u.distanceTop),l(n,52,0,"number","56"),l(n,66,0,u.animation),l(n,78,0,u.rounded),l(n,90,0,u.handle),l(n,102,0,u.float);var t=l(n,108,0,"desktop");l(n,107,0,t);var o=l(n,111,0,"mobile");l(n,110,0,o)},function(l,n){var u=n.component;l(n,2,0,u.filter,u.transform),l(n,22,0,e.Bb(n,27).ngClassUntouched,e.Bb(n,27).ngClassTouched,e.Bb(n,27).ngClassPristine,e.Bb(n,27).ngClassDirty,e.Bb(n,27).ngClassValid,e.Bb(n,27).ngClassInvalid,e.Bb(n,27).ngClassPending),l(n,34,0,e.Bb(n,39).ngClassUntouched,e.Bb(n,39).ngClassTouched,e.Bb(n,39).ngClassPristine,e.Bb(n,39).ngClassDirty,e.Bb(n,39).ngClassValid,e.Bb(n,39).ngClassInvalid,e.Bb(n,39).ngClassPending),l(n,46,0,e.Bb(n,51).ngClassUntouched,e.Bb(n,51).ngClassTouched,e.Bb(n,51).ngClassPristine,e.Bb(n,51).ngClassDirty,e.Bb(n,51).ngClassValid,e.Bb(n,51).ngClassInvalid,e.Bb(n,51).ngClassPending),l(n,63,0,e.Bb(n,68).ngClassUntouched,e.Bb(n,68).ngClassTouched,e.Bb(n,68).ngClassPristine,e.Bb(n,68).ngClassDirty,e.Bb(n,68).ngClassValid,e.Bb(n,68).ngClassInvalid,e.Bb(n,68).ngClassPending),l(n,75,0,e.Bb(n,80).ngClassUntouched,e.Bb(n,80).ngClassTouched,e.Bb(n,80).ngClassPristine,e.Bb(n,80).ngClassDirty,e.Bb(n,80).ngClassValid,e.Bb(n,80).ngClassInvalid,e.Bb(n,80).ngClassPending),l(n,87,0,e.Bb(n,92).ngClassUntouched,e.Bb(n,92).ngClassTouched,e.Bb(n,92).ngClassPristine,e.Bb(n,92).ngClassDirty,e.Bb(n,92).ngClassValid,e.Bb(n,92).ngClassInvalid,e.Bb(n,92).ngClassPending),l(n,99,0,e.Bb(n,104).ngClassUntouched,e.Bb(n,104).ngClassTouched,e.Bb(n,104).ngClassPristine,e.Bb(n,104).ngClassDirty,e.Bb(n,104).ngClassValid,e.Bb(n,104).ngClassInvalid,e.Bb(n,104).ngClassPending)})}function G(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-bottom-sheet",[],null,null,null,O,S)),e.rb(1,114688,null,0,o,[C.c],null,null)],function(l,n){l(n,1,0)},null)}var L=e.ob("app-bottom-sheet",o,G,{},{},[]),T=u("M2Lx"),J=u("eDkP"),D=u("Fzqc"),X=u("v9Dh"),E=u("Wf4p"),q=u("lqlK"),H=u("ZYCi"),V=u("9rwy"),Z=u("Zhmc"),Y=u("gVIA"),F=u("LOpI"),U=u("dWZg"),K=u("lLAP"),N=u("4c35"),R=u("qAlS"),Q=u("La40"),W=u("UOu5"),$=u("0RK4"),ll=u("6wuw"),nl=u("isGY"),ul=u("ZhfK"),el=u("/Gdi"),tl=u("GkVF"),ol=u("j1ZV");u.d(n,"BottomSheetPageModuleNgFactory",function(){return al});var al=e.pb(a,[],function(l){return e.yb([e.zb(512,e.j,e.db,[[8,[b.a,i.a,r.a,s.a,L]],[3,e.j],e.y]),e.zb(4608,v.o,v.n,[e.v,[2,v.B]]),e.zb(4608,c.o,c.o,[]),e.zb(4608,g.b,g.b,[e.A,e.g]),e.zb(4608,g.Gb,g.Gb,[g.b,e.j,e.r]),e.zb(4608,g.Lb,g.Lb,[g.b,e.j,e.r]),e.zb(4608,T.c,T.c,[]),e.zb(4608,J.a,J.a,[J.f,J.b,e.j,J.e,J.c,e.r,e.A,v.d,D.b,[2,v.i]]),e.zb(5120,J.g,J.h,[J.a]),e.zb(5120,X.a,X.b,[J.a]),e.zb(4608,C.f,E.a,[[2,E.c],[2,E.e]]),e.zb(4608,q.a,q.a,[e.j,e.G,e.g,e.r]),e.zb(1073742336,v.c,v.c,[]),e.zb(1073742336,c.m,c.m,[]),e.zb(1073742336,c.e,c.e,[]),e.zb(1073742336,g.Eb,g.Eb,[]),e.zb(1073742336,H.q,H.q,[[2,H.w],[2,H.n]]),e.zb(1073742336,V.a,V.a,[]),e.zb(1073742336,Z.a,Z.a,[]),e.zb(1073742336,Y.a,Y.a,[]),e.zb(1073742336,F.b,F.b,[]),e.zb(1073742336,U.b,U.b,[]),e.zb(1073742336,T.d,T.d,[]),e.zb(1073742336,K.a,K.a,[]),e.zb(1073742336,D.a,D.a,[]),e.zb(1073742336,N.e,N.e,[]),e.zb(1073742336,R.b,R.b,[]),e.zb(1073742336,J.d,J.d,[]),e.zb(1073742336,E.e,E.e,[[2,E.b],[2,C.g]]),e.zb(1073742336,X.c,X.c,[]),e.zb(1073742336,E.g,E.g,[]),e.zb(1073742336,Q.j,Q.j,[]),e.zb(1073742336,W.a,W.a,[]),e.zb(1073742336,$.a,$.a,[]),e.zb(1073742336,ll.a,ll.a,[]),e.zb(1073742336,nl.a,nl.a,[]),e.zb(1073742336,ul.a,ul.a,[]),e.zb(1073742336,el.a,el.a,[]),e.zb(1073742336,tl.a,tl.a,[]),e.zb(1073742336,ol.a,ol.a,[]),e.zb(1073742336,a,a,[]),e.zb(1024,H.l,function(){return[[{path:"",component:o}]]},[])])})}}]);