"use strict";(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[113],{4113:(H,g,c)=>{c.r(g),c.d(g,{ExceptionModule:()=>_});var p=c(9808),t=c(5e3),T=c(7579),h=c(3085),C=c(5442),a=c(5617),E=c(2313),b=c(226),l=c(6042),m=c(7144),x=c(2643),y=c(2683),r=c(4521);const z=["conTpl"];function k(e,i){if(1&e&&(t.TgZ(0,"button",9),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("routerLink",n.backRouterLink)("nzType","primary"),t.xp6(1),t.hij(" ",n.locale.backToHome," ")}}const M=["*"];let f=(()=>{class e{constructor(n,o,s,d){this.i18n=n,this.dom=o,this.directionality=s,this.cdr=d,this.destroy$=new T.x,this.locale={},this.hasCon=!1,this.dir="ltr",this._img="",this._title="",this._desc="",this.backRouterLink="/"}set type(n){const o={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500"}}[n];!o||(this.fixImg(o.img),this._type=n,this._title=o.title,this._desc="")}fixImg(n){this._img=this.dom.bypassSecurityTrustStyle(`url('${n}')`)}set img(n){this.fixImg(n)}set title(n){this._title=this.dom.bypassSecurityTrustHtml(n)}set desc(n){this._desc=this.dom.bypassSecurityTrustHtml(n)}checkContent(){this.hasCon=!(0,C.xb)(this.conTpl.nativeElement),this.cdr.detectChanges()}ngOnInit(){var n;this.dir=this.directionality.value,null===(n=this.directionality.change)||void 0===n||n.pipe((0,h.R)(this.destroy$)).subscribe(o=>{this.dir=o}),this.i18n.change.pipe((0,h.R)(this.destroy$)).subscribe(()=>this.locale=this.i18n.getData("exception")),this.checkContent()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.s7),t.Y36(E.H7),t.Y36(b.Is,8),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["exception"]],viewQuery:function(n,o){if(1&n&&t.Gf(z,7),2&n){let s;t.iGM(s=t.CRH())&&(o.conTpl=s.first)}},hostVars:4,hostBindings:function(n,o){2&n&&t.ekj("exception",!0)("exception-rtl","rtl"===o.dir)},inputs:{type:"type",img:"img",title:"title",desc:"desc",backRouterLink:"backRouterLink"},exportAs:["exception"],ngContentSelectors:M,decls:10,vars:5,consts:[[1,"exception__img-block"],[1,"exception__img"],[1,"exception__cont"],[1,"exception__cont-title",3,"innerHTML"],[1,"exception__cont-desc",3,"innerHTML"],[1,"exception__cont-actions"],[3,"cdkObserveContent"],["conTpl",""],["nz-button","",3,"routerLink","nzType",4,"ngIf"],["nz-button","",3,"routerLink","nzType"]],template:function(n,o){1&n&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"div",1),t.qZA(),t.TgZ(2,"div",2),t._UZ(3,"h1",3)(4,"div",4),t.TgZ(5,"div",5)(6,"div",6,7),t.NdJ("cdkObserveContent",function(){return o.checkContent()}),t.Hsn(8),t.qZA(),t.YNc(9,k,2,3,"button",8),t.qZA()()),2&n&&(t.xp6(1),t.Udp("background-image",o._img),t.xp6(2),t.Q6J("innerHTML",o._title,t.oJD),t.xp6(1),t.Q6J("innerHTML",o._desc||o.locale[o._type],t.oJD),t.xp6(5),t.Q6J("ngIf",!o.hasCon))},directives:[l.ix,m.wD,p.O5,x.dQ,y.w,r.rH],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,m.Q8,r.Bz,a.lD,l.sL]]}),e})();var v=c(7484);let u=(()=>{class e{constructor(n){this.route=n}get type(){return this.route.snapshot.data.type}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-exception"]],decls:1,vars:1,consts:[[2,"min-height","500px","height","80%",3,"type"]],template:function(n,o){1&n&&t._UZ(0,"exception",0),2&n&&t.Q6J("type",o.type)},directives:[f],encapsulation:2,changeDetection:0}),e})();var Z=c(6105);function J(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){const d=t.CHM(n).$implicit;return t.oxw().go(d)}),t._uU(1),t.qZA()}if(2&e){const n=i.$implicit;t.xp6(1),t.hij("\u89e6\u53d1",n,"")}}const L=[{path:"403",component:u,data:{type:403}},{path:"404",component:u,data:{type:404}},{path:"500",component:u,data:{type:500}},{path:"trigger",component:(()=>{class e{constructor(n,o){this.http=n,this.tokenService=o,this.types=[401,403,404,500]}go(n){this.http.get(`/api/${n}`).subscribe()}refresh(){this.tokenService.set({token:"invalid-token"}),this.http.post("https://localhost:5001/auth").subscribe(n=>console.warn("\u6210\u529f",n),n=>{console.log("\u6700\u540e\u7ed3\u679c\u5931\u8d25",n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.lP),t.Y36(Z.T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["exception-trigger"]],decls:5,vars:1,consts:[[1,"pt-lg"],["nz-button","","nzDanger","",3,"click",4,"ngFor","ngForOf"],["nz-button","","nzType","link",3,"click"],["nz-button","","nzDanger","",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"nz-card"),t.YNc(2,J,2,1,"button",1),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.refresh()}),t._uU(4,"\u89e6\u53d1\u5237\u65b0Token"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("ngForOf",o.types))},directives:[v.bd,p.sg,l.ix,x.dQ,y.w],encapsulation:2}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.Bz.forChild(L)],r.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,D,l.sL,v.vh,R]]}),e})()}}]);