(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{DnJw:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),i=t("R66G"),u=t("ZZ/e"),o=t("dEwP"),s=t("909l"),r=t("xMyE"),b=function(){function l(l){this.platform=l,this.s=!0,this.items=[{url:"https://via.placeholder.com/640x360",title:"1. title",subtitle:"1. subtitle"},{url:"https://via.placeholder.com/640x360/0000FF",title:"2. title",subtitle:"2. subtitle"},{url:"https://via.placeholder.com/640x360/FF0000",title:"3. title",subtitle:"3. subtitle"}]}return l.prototype.ngOnInit=function(){},l.prototype.startMorph=function(l,n){var t=this;Object(i.f)(this.descs.toArray()[l],i.d,150).pipe(Object(i.b)(function(){return t.overlay.show(null,{index:l,item:n})})).subscribe()},l.prototype.morph=function(l){this.currentIndex=l.index,this.currentItem=l.item,Object(i.t)(i.c,320).pipe(Object(r.a)(console.log),Object(i.g)(),Object(i.j)(this.content,this.cards.toArray()[l.index])).subscribe(),this.content.nativeElement.style.opacity=1},l.prototype.morphOut=function(){var l=this,n=Object(i.t)(i.c,320).pipe(Object(i.k)(),Object(i.j)(this.content,this.cards.toArray()[this.currentIndex]),Object(i.b)(function(){return l.overlay.hide()})),t=Object(i.e)(this.descs.toArray()[this.currentIndex],i.d,150);return Object(o.a)(n,t).subscribe(),n},l.prototype.ngAfterViewInit=function(){this.currentIndex=0,this.currentItem=this.items[0]},l.prototype.animations=function(){Object(o.a)(Object(i.p)(this.slideElement,i.d,240),Object(i.o)(this.slideElement,i.d,220),Object(i.q)(this.slideElement,i.d,220),Object(i.m)(this.slideElement,i.d,220),Object(i.r)(this.slideElement,i.d,2200),Object(i.n)(this.slideElement,i.d,220),Object(i.s)(this.slideElement,i.d,220),Object(i.l)(this.slideElement,i.d,220),Object(i.f)(this.slideElement,i.d,120),Object(i.e)(this.slideElement,i.d,120),Object(i.f)(this.slideElement,i.d,120),Object(i.e)(this.slideElement,i.d,120),Object(i.f)(this.slideElement,i.d,120),Object(i.e)(this.slideElement,i.d,120)).subscribe()},l.prototype.deconstruct=function(){var l=this,n=this.cards.toArray()[this.currentIndex],t=Object(i.i)(n);Object(o.a)(this.morphOut(),Object(s.a)(Object(i.r)(n,i.d,400),Object(i.f)(n,i.d,400)),Object(i.t)(i.d,200).pipe(Object(i.h)(n,"height",t.height,0)),Object(i.b)(function(){return l.items=l.items.splice(l.currentIndex,1)})).subscribe()},l}(),a=function(){return function(){}}(),c=t("tzjl"),d=t("pMnS"),p=t("NcP4"),h=t("MzJX"),v=t("oBZk"),f=t("jpUf"),g=e.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;position:relative;height:88px;width:100%;--fiv-border-radius:6px;--fiv-background:var(--ion-color-dark);--fiv-radius:88px;--fiv-fab-size:72px}.container[_ngcontent-%COMP%]{max-width:800px;position:relative;margin:0 auto;height:calc(100%);background:rgba(0,0,0,0)}.side[_ngcontent-%COMP%]{width:calc(50% - (var(--fiv-radius)/ 2));position:absolute}.center[_ngcontent-%COMP%]{position:absolute;left:calc(50% - (var(--fiv-radius)/ 2) - 1px);bottom:0;width:calc(var(--fiv-radius) + 2px);height:calc(100% - var(--fiv-border-radius) - (var(--fiv-radius)/ 2));background:var(--fiv-background)}svg[_ngcontent-%COMP%]{height:calc(var(--fiv-radius)/ 2);width:var(--fiv-radius);left:calc(50% - (var(--fiv-radius)/ 2));position:absolute;top:var(--fiv-border-radius);border-left:-1px solid var(--fiv-background);border-right:-1px solid var(--fiv-background);border-bottom:-1px solid var(--fiv-background)}svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:var(--fiv-background);stroke:var(--fiv-background)}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}.top[_ngcontent-%COMP%]{height:var(--fiv-border-radius);background:var(--fiv-background);top:0;box-shadow:0 0 10px 0 rgba(0,0,0,.4)}.bottom[_ngcontent-%COMP%]{height:calc(100% - var(--fiv-border-radius) + 1px);background:var(--fiv-background);bottom:0}.top.right[_ngcontent-%COMP%]{border-top-left-radius:var(--fiv-border-radius)}.top.left[_ngcontent-%COMP%]{border-top-right-radius:var(--fiv-border-radius)}.bottom.right[_ngcontent-%COMP%]{border-top-left-radius:1px}.bottom.left[_ngcontent-%COMP%]{border-top-right-radius:1px}ion-fab[_ngcontent-%COMP%]{position:absolute;left:calc(50% - .5 * var(--fiv-fab-size));top:calc(-.5 * var(--fiv-fab-size) + var(--fiv-border-radius))}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{height:var(--fiv-fab-size);width:var(--fiv-fab-size)}"]],data:{}});function m(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,18,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,0,"div",[["class","side left top"]],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,0,"div",[["class","side left bottom"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,0,"div",[["class","side right top"]],null,null,null,null,null)),(l()(),e.sb(4,0,null,null,0,"div",[["class","side right bottom"]],null,null,null,null,null)),(l()(),e.sb(5,0,null,null,12,":svg:svg",[[":xmlns:xlink","http://www.w3.org/1999/xlink"],["height","50px"],["version","1.1"],["viewBox","0 0 100 50"],["width","100px"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),e.sb(6,0,null,null,1,":svg:title",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["cutout"])),(l()(),e.sb(8,0,null,null,1,":svg:desc",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Created with Sketch."])),(l()(),e.sb(10,0,null,null,1,":svg:defs",[],null,null,null,null,null)),(l()(),e.sb(11,0,null,null,0,":svg:path",[["d","M0,0 C0,28 22,50 50,50 C78,50 100,28 100,0 L101,50 L0,50"],["id","path-1"]],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,5,":svg:g",[["fill","none"],["fill-rule","evenodd"],["id","Page-1"],["stroke","none"],["stroke-width","1px"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,4,":svg:g",[["id","cutout"]],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,1,":svg:mask",[["fill","white"],["id","mask-2"]],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,0,":svg:use",[[":xlink:href","#path-1"]],null,null,null,null,null)),(l()(),e.sb(16,0,null,null,0,":svg:g",[["id","Path"]],null,null,null,null,null)),(l()(),e.sb(17,0,null,null,0,":svg:polygon",[["fill-rule","nonzero"],["id","Path"],["mask","url(#mask-2)"],["points","0 0 100 0 100 50 0 50"]],null,null,null,null,null)),(l()(),e.sb(18,0,null,null,0,"div",[["class","center"]],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,5,"ion-fab",[],null,null,null,v.fb,v.n)),e.rb(20,49152,null,0,u.x,[e.h,e.k,e.A],null,null),(l()(),e.sb(21,0,null,0,3,"ion-fab-button",[],null,null,null,v.eb,v.o)),e.rb(22,49152,null,0,u.y,[e.h,e.k,e.A],null,null),(l()(),e.sb(23,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,v.jb,v.s)),e.rb(24,49152,null,0,u.D,[e.h,e.k,e.A],{name:[0,"name"]},null)],function(l,n){l(n,24,0,"add")},null)}var O=e.qb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--ion-padding:60px}"]],data:{animation:[{type:7,name:"slideout",definitions:[{type:1,expr:"* => void",animation:{type:10,animation:{type:8,animation:[{type:4,styles:{type:6,styles:{transform:"translate({{toX}},{{toY}})"},offset:null},timings:"{{ time }}"}],options:null},options:{params:{toX:"0",toY:"100%",time:"300ms ease"}}},options:null}],options:{}}]}});function j(l){return e.Lb(0,[e.Hb(402653184,1,{i2:0}),e.Hb(402653184,2,{content:0}),e.Hb(402653184,3,{title:0}),e.Hb(402653184,4,{overlay:0}),e.Hb(671088640,5,{cards:1}),e.Hb(671088640,6,{labels:1}),e.Hb(671088640,7,{images:1}),e.Hb(671088640,8,{descs:1}),e.Hb(402653184,9,{slideElement:0}),(l()(),e.sb(9,0,null,null,3,"ion-content",[["class","ion-padding-top"]],null,null,null,v.db,v.m)),e.rb(10,49152,null,0,u.v,[e.h,e.k,e.A],null,null),(l()(),e.sb(11,0,null,0,1,"app-bar",[],null,null,null,m,g)),e.rb(12,114688,null,0,f.a,[],null,null)],function(l,n){l(n,12,0)},null)}function z(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-test",[],null,null,null,j,O)),e.rb(1,4308992,null,0,b,[u.Kb],null,null)],function(l,n){l(n,1,0)},null)}var x=e.ob("app-test",b,z,{},{},[]),k=t("Ip0R"),y=t("gIcY"),w=t("lqlK"),P=t("M2Lx"),M=t("eDkP"),C=t("Fzqc"),E=t("v9Dh"),_=t("ZYjt"),A=t("Wf4p"),I=t("ZhfK"),L=t("/Gdi"),H=t("ZYCi"),q=t("LOpI"),G=t("dWZg"),Z=t("lLAP"),F=t("4c35"),J=t("qAlS"),Y=t("La40"),D=t("UOu5"),K=t("gVIA"),V=t("0RK4"),B=t("6wuw"),R=t("isGY"),S=t("GkVF"),X=t("j1ZV");t.d(n,"TestPageModuleNgFactory",function(){return N});var N=e.pb(a,[],function(l){return e.yb([e.zb(512,e.j,e.db,[[8,[c.a,d.a,p.a,h.a,x]],[3,e.j],e.y]),e.zb(4608,k.o,k.n,[e.v,[2,k.B]]),e.zb(4608,y.o,y.o,[]),e.zb(4608,u.b,u.b,[e.A,e.g]),e.zb(4608,u.Gb,u.Gb,[u.b,e.j,e.r]),e.zb(4608,u.Lb,u.Lb,[u.b,e.j,e.r]),e.zb(4608,w.a,w.a,[e.j,e.G,e.g,e.r]),e.zb(4608,P.c,P.c,[]),e.zb(4608,M.a,M.a,[M.f,M.b,e.j,M.e,M.c,e.r,e.A,k.d,C.b,[2,k.i]]),e.zb(5120,M.g,M.h,[M.a]),e.zb(5120,E.a,E.b,[M.a]),e.zb(4608,_.f,A.a,[[2,A.c],[2,A.e]]),e.zb(1073742336,k.c,k.c,[]),e.zb(1073742336,y.m,y.m,[]),e.zb(1073742336,y.e,y.e,[]),e.zb(1073742336,u.Eb,u.Eb,[]),e.zb(1073742336,I.a,I.a,[]),e.zb(1073742336,L.a,L.a,[]),e.zb(1073742336,H.q,H.q,[[2,H.w],[2,H.n]]),e.zb(1073742336,q.b,q.b,[]),e.zb(1073742336,G.b,G.b,[]),e.zb(1073742336,P.d,P.d,[]),e.zb(1073742336,Z.a,Z.a,[]),e.zb(1073742336,C.a,C.a,[]),e.zb(1073742336,F.e,F.e,[]),e.zb(1073742336,J.b,J.b,[]),e.zb(1073742336,M.d,M.d,[]),e.zb(1073742336,A.e,A.e,[[2,A.b],[2,_.g]]),e.zb(1073742336,E.c,E.c,[]),e.zb(1073742336,A.g,A.g,[]),e.zb(1073742336,Y.j,Y.j,[]),e.zb(1073742336,D.a,D.a,[]),e.zb(1073742336,K.a,K.a,[]),e.zb(1073742336,V.a,V.a,[]),e.zb(1073742336,B.a,B.a,[]),e.zb(1073742336,R.a,R.a,[]),e.zb(1073742336,S.a,S.a,[]),e.zb(1073742336,X.a,X.a,[]),e.zb(1073742336,a,a,[]),e.zb(1024,H.l,function(){return[[{path:"",component:b}]]},[])])})}}]);