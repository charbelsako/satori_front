"use strict";(self.webpackChunktest_ng7=self.webpackChunktest_ng7||[]).push([[735,161],{1735:(h,_,i)=>{i.r(_),i.d(_,{BillingFrequencyModule:()=>$});var r=i(6895),d=i(7750),e=i(4650),l=i(4006),g=i(4903),o=i(6124),u=i(8161);function f(n,s){1&n&&(e.ynx(0),e.TgZ(1,"div",8)(2,"div",9)(3,"span",10),e._uU(4,"Loading..."),e.qZA()()(),e.BQk())}function m(n,s){1&n&&(e.TgZ(0,"span",21),e._uU(1," * Billing Frequency is required. "),e.qZA())}function v(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,m,2,0,"span",20),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",null==t.addEditForm.controls.name.errors?null:t.addEditForm.controls.name.errors.required)}}function q(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(3);return e.KtG(c.onUpdate())}),e._uU(1,"Update Billing Frequency"),e.qZA()}}function b(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(3);return e.KtG(c.onSubmit())}),e._uU(1,"Add Billing Frequency"),e.qZA()}}function T(n,s){if(1&n&&(e.TgZ(0,"form",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"label",15),e._uU(5,"Billing Frequency *"),e.qZA(),e._UZ(6,"input",16),e.YNc(7,v,2,1,"div",0),e.qZA()()(),e.TgZ(8,"div",17),e.YNc(9,q,2,0,"button",18),e.YNc(10,b,2,0,"button",18),e.TgZ(11,"button",19),e._uU(12,"Cancel"),e.qZA()()()),2&n){const t=e.oxw(2);e.Q6J("formGroup",t.addEditForm),e.xp6(7),e.Q6J("ngIf",t.addEditForm.controls.name.errors&&(t.addEditForm.controls.name.dirty||t.addEditForm.controls.name.touched)),e.xp6(2),e.Q6J("ngIf",t.editForm),e.xp6(1),e.Q6J("ngIf",!t.editForm)}}function y(n,s){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"app-page-header",2),e.TgZ(2,"div",3)(3,"div",4)(4,"div",5),e._uU(5," Billing Frequency "),e.qZA(),e.TgZ(6,"div",6),e.YNc(7,f,5,0,"ng-container",0),e.YNc(8,T,13,4,"form",7),e.qZA()()()()),2&n){const t=e.oxw();e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("heading","Add | Edit Billing Frequency"),e.xp6(1),e.Q6J("@routerTransition",void 0),e.xp6(5),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",!t.isLoading)}}function B(n,s){1&n&&(e.ynx(0),e.TgZ(1,"div",8)(2,"div",9)(3,"span",10),e._uU(4,"Loading..."),e.qZA()()(),e.BQk())}function A(n,s){1&n&&(e.TgZ(0,"span",21),e._uU(1," * Billing Frequency is required. "),e.qZA())}function M(n,s){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,A,2,0,"span",20),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",null==t.addEditForm.controls.name.errors?null:t.addEditForm.controls.name.errors.required)}}function Z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"form",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"label",23),e._uU(5,"Billing Frequency *"),e.qZA(),e._UZ(6,"input",16),e.YNc(7,M,2,1,"div",0),e.qZA()(),e._UZ(8,"div",24),e.qZA(),e.TgZ(9,"div",17)(10,"button",22),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.onSubmit())}),e._uU(11,"Add Billing Frequency"),e.qZA(),e.TgZ(12,"button",25),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.cancelEvent())}),e._uU(13,"Cancel"),e.qZA()()()}if(2&n){const t=e.oxw(2);e.Q6J("formGroup",t.addEditForm),e.xp6(7),e.Q6J("ngIf",t.addEditForm.controls.name.errors&&(t.addEditForm.controls.name.dirty||t.addEditForm.controls.name.touched))}}function I(n,s){if(1&n&&(e.TgZ(0,"div",4)(1,"div",5),e._uU(2," Billing Frequency "),e.qZA(),e.TgZ(3,"div",6),e.YNc(4,B,5,0,"ng-container",0),e.YNc(5,Z,14,2,"form",7),e.qZA()()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",!t.isLoading)}}let E=(()=>{class n{constructor(t,a,c,p){this.router=t,this.fb=a,this.route=c,this.billingFrequencyService=p,this.editForm=!1,this.isLoading=!1,this.options=["Monthly","On Completion","Quarterly","Other"],this.newItemEvent=new e.vpe,this.route.params.subscribe(F=>{""!==F.tempId&&null!=F.tempId&&(this.tempId=F.tempId,this.editForm=!0,this.getBillingFrequency(this.tempId))}),this.addEditForm=a.group({name:["",[l.kI.required]]})}ngOnInit(){}getValue(t){return{name:t.name}}getBillingFrequency(t){this.isLoading=!0,this.billingFrequencyService.getBillingFrequencyById(t).subscribe(a=>{this.addEditForm.patchValue({...this.getValue(a)}),this.isLoading=!1},a=>{this.isLoading=!1,this.router.navigate(["/data-management/billing-frequencies"])})}onSubmit(){this.billingFrequencyService.addBillingFrequency(this.addEditForm.value).subscribe(t=>{t&&(this.addEditForm.reset(),this.newItemEvent.emit())})}cancelEvent(){this.addEditForm.reset(),this.newItemEvent.emit()}onUpdate(){this.billingFrequencyService.updateBillingFrequency(this.tempId,this.addEditForm.value).subscribe(t=>{t&&(this.addEditForm.reset(),this.router.navigate(["/data-management/billing-frequencies"]))})}onReady(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(l.qu),e.Y36(d.gz),e.Y36(o.w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-edit-billing-frequency"]],outputs:{newItemEvent:"newItemEvent"},decls:2,vars:2,consts:[[4,"ngIf"],["class","card",4,"ngIf"],[3,"heading"],[1,"container-fluid","mt-2"],[1,"card"],[1,"card-header"],[1,"card-body"],["novalidate","",3,"formGroup",4,"ngIf"],[1,"text-center"],["role","status",1,"spinner-border"],[1,"sr-only"],["novalidate","",3,"formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-2"],[1,"bmd-label-floating"],["formControlName","name","type","text",1,"form-control"],[1,"form-group","mb-2","py-2"],["type","button","class","btn btn-info",3,"click",4,"ngIf"],["type","button","routerLink","/data-management/billing-frequencies",1,"btn","btn-secondary"],["class"," text-danger error",4,"ngIf"],[1,"text-danger","error"],["type","button",1,"btn","btn-info",3,"click"],[1,"bmd-label-floating","mb-2"],[1,"col-md-6"],["type","button",1,"btn","btn-outline-secondary",3,"click"]],template:function(t,a){1&t&&(e.YNc(0,y,9,5,"div",0),e.YNc(1,I,6,2,"div",1)),2&t&&(e.Q6J("ngIf",a.editForm),e.xp6(1),e.Q6J("ngIf",!a.editForm))},dependencies:[r.O5,d.rH,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,u.q],styles:[".ck.ck-content[_ngcontent-%COMP%]{border:2px solid #707070!important}"],data:{animation:[(0,g.Z9)()]}}),n})();var C=i(4221),P=i(7579),O=i(8372),U=i(1884),S=i(7253),J=i(4304);function L(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-add-edit-billing-frequency",12),e.NdJ("newItemEvent",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.reload())}),e.qZA()}}function D(n,s){1&n&&(e.ynx(0),e.TgZ(1,"div",13)(2,"div",14)(3,"span",15),e._uU(4,"Loading..."),e.qZA()()(),e.BQk())}function w(n,s){1&n&&(e.TgZ(0,"div")(1,"p",13),e._uU(2,"No Billing Frequency found"),e.qZA()())}function N(n,s){1&n&&(e.TgZ(0,"th",20),e._uU(1,"Actions"),e.qZA())}function Y(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"td")(1,"div",21)(2,"button",22),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit,p=e.oxw(3);return e.KtG(p.editBillingFrequency(c.id))}),e._UZ(3,"img",23),e.qZA(),e.TgZ(4,"button",22),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit,p=e.oxw(3);return e.KtG(p.deleteBillingFrequency(c.id))}),e._UZ(5,"img",24),e.qZA()()()}}function Q(n,s){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.YNc(3,Y,6,0,"td",9),e.qZA()),2&n){const t=s.$implicit,a=e.oxw(3);e.xp6(2),e.Oqu(null==t?null:t.name),e.xp6(1),e.Q6J("ngIf",a.isEditAccess)}}function H(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"table",16)(2,"thead")(3,"tr")(4,"th",17),e.NdJ("sort",function(c){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onSort(c))}),e.TgZ(5,"span"),e._uU(6,"Name"),e.qZA()(),e.YNc(7,N,2,0,"th",18),e.qZA()(),e.TgZ(8,"tbody"),e.YNc(9,Q,4,2,"tr",19),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(7),e.Q6J("ngIf",t.isEditAccess),e.xp6(2),e.Q6J("ngForOf",t.billingFrequencies)}}function R(n,s){if(1&n&&e.YNc(0,H,10,2,"div",9),2&n){const t=e.oxw();e.Q6J("ngIf",!t.isLoading)}}const K=[{path:"",component:(()=>{class n{constructor(t,a,c,p,F){this.router=t,this.billingFrequencyService=a,this.cdr=c,this.jwtService=p,this.confirmationDialogService=F,this.searchTerm="",this.searchTermUpdate=new P.x,this.billingFrequencies=[],this.isBillingFrequencies=!0,this.isLoading=!1,this.isEditAccess=!1,this._state={page:1,limit:10,totalPages:1,totalResults:0,searchTerm:"",sortColumn:"createdAt",sortDirection:"asc"},this.searchTermUpdate.pipe((0,O.b)(200),(0,U.x)()).subscribe(G=>{this._state.searchTerm=G,this.getBillingFrequencies(this._state)})}ngOnInit(){this.isLoading=!0,this.isEditAccess=this.jwtService.checkAccess("data-mangement"),this.getBillingFrequencies(this._state)}getBillingFrequencies(t){this.isLoading=!0,this.billingFrequencyService.getBillingFrequencies(t).subscribe(a=>{this.billingFrequencies=a.results,this.setState(a),this.isBillingFrequencies=0!=this.billingFrequencies.length,this.isLoading=!1},a=>{this.isLoading=!1})}reload(){window.scrollTo(0,400),this.getBillingFrequencies(this._state)}editBillingFrequency(t){this.router.navigate(["/data-management/billing-frequencies/edit-billing-frequency/"+t])}deleteBillingFrequency(t){this.confirmationDialogService.confirm("Please confirm..","Do you really want to delete this billing frequency ?").then(a=>{a&&this.billingFrequencyService.deleteBillingFrequency(t).subscribe(c=>{this.getBillingFrequencies(this._state)})})}onSort({column:t,direction:a}){alert(t),this.sortedColumn=t,this.sortedDirection=a,this._state.sortColumn=t,this._state.sortDirection=a,this.getBillingFrequencies(this._state)}refresh(){this.getBillingFrequencies(this._state)}setState(t){this._state.page=t.page,this._state.limit=t.limit,this._state.totalPages=t.totalPages,this._state.totalResults=t.totalResults}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(o.w),e.Y36(e.sBO),e.Y36(S.Tj),e.Y36(J.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-billing-frequency"]],viewQuery:function(t,a){if(1&t&&e.Gf(C.j,5),2&t){let c;e.iGM(c=e.CRH())&&(a.headers=c)}},decls:14,vars:8,consts:[[3,"heading"],[1,"container-fluid","mt-2"],[3,"newItemEvent",4,"ngIf"],[1,"card","card-2","bg-transparent","mt-3"],[1,"card-body"],[1,"row","mb-2","search-header"],[1,"col-md-12","text-left"],[1,"form-group","mb-1"],["type","text","type","text","name","searchTerm","placeholder","Search here...",1,"form-control",3,"ngModel","ngModelChange"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["table",""],[3,"newItemEvent"],[1,"text-center"],["role","status",1,"spinner-border"],[1,"sr-only"],[1,"table","table-hover"],["scope","col","sortable","name",3,"sort"],["scope","col","width","100",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col","width","100"],[1,"action-buttons"],[3,"click"],["src","assets/images/pencil.svg","alt",""],["src","assets/images/icons8-trash-can.svg","alt",""]],template:function(t,a){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-page-header",0),e.TgZ(2,"div",1),e.YNc(3,L,1,0,"app-add-edit-billing-frequency",2),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"input",8),e.NdJ("ngModelChange",function(p){return a._state.searchTerm=p})("ngModelChange",function(p){return a.searchTermUpdate.next(p)}),e.qZA()()()(),e.YNc(10,D,5,0,"ng-container",9),e.YNc(11,w,3,0,"div",10),e.YNc(12,R,1,1,"ng-template",null,11,e.W1O),e.qZA()()()()),2&t){const c=e.MAs(13);e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("heading","Billing Frequencies"),e.xp6(1),e.Q6J("@routerTransition",void 0),e.xp6(1),e.Q6J("ngIf",a.isEditAccess),e.xp6(6),e.Q6J("ngModel",a._state.searchTerm),e.xp6(1),e.Q6J("ngIf",a.isLoading),e.xp6(1),e.Q6J("ngIf",!a.isBillingFrequencies)("ngIfElse",c)}},dependencies:[r.sg,r.O5,l.Fj,l.JJ,u.q,l.On,E],data:{animation:[(0,g.Z9)()]}}),n})()},{path:"add-billing-frequency",component:E},{path:"edit-billing-frequency/:tempId",component:E}];let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(K),d.Bz]}),n})();var W=i(4336),x=i(6393);let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[C.j,o.w],imports:[r.ez,j,l.UX,W.$n,l.u5,x.ZS,x.jF]}),n})()},6124:(h,_,i)=>{i.d(_,{w:()=>e});var r=i(4650),d=i(2487);let e=(()=>{class l{constructor(o){this.apiService=o}getBillingFrequencies(o){return this.apiService.get(""==o.searchTerm?`/billing-frequency?sortBy=${o.sortColumn+":"+o.sortDirection}&limit=${o.limit}&page=${o.page}`:`/billing-frequency?sortBy=${o.sortColumn+":"+o.sortDirection}&limit=${o.limit}&page=${o.page}&search=${o.searchTerm}`)}addBillingFrequency(o){return this.apiService.post("/billing-frequency",o)}getBillingFrequencyById(o){return this.apiService.get(`/billing-frequency/${o}`)}deleteBillingFrequency(o){return this.apiService.delete(`/billing-frequency/${o}`)}updateBillingFrequency(o,u){return this.apiService.patch(`/billing-frequency/${o}`,u)}}return l.\u0275fac=function(o){return new(o||l)(r.LFG(d.s))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},4903:(h,_,i)=>{i.d(_,{Z9:()=>d});var r=i(7340);function d(){return function e(){return(0,r.X$)("routerTransition",[])}()}},4221:(h,_,i)=>{i.d(_,{j:()=>r.j});var r=i(8260)},8260:(h,_,i)=>{i.d(_,{j:()=>e});var r=i(4650);const d={asc:"desc",desc:"asc","":"asc"};let e=(()=>{class l{constructor(){this.direction="",this.sort=new r.vpe}ngOnChanges(o){this.sortable!==o?.oldColumn?.currentValue&&o?.oldColumn?.currentValue!==o?.oldColumn?.previousValue&&(this.direction="")}rotate(){this.direction=d[this.direction],this.sort.emit({column:this.sortable,direction:this.direction})}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275dir=r.lG2({type:l,selectors:[["th","sortable",""]],hostVars:4,hostBindings:function(o,u){1&o&&r.NdJ("click",function(){return u.rotate()}),2&o&&r.ekj("asc","asc"===u.direction)("desc","desc"===u.direction)},inputs:{sortable:"sortable",oldColumn:"oldColumn",direction:"direction"},outputs:{sort:"sort"},exportAs:["NgbdSortableHeader"],features:[r.TTD]}),l})()},4336:(h,_,i)=>{i.d(_,{$n:()=>r.$});var r=i(2956);i(110),i(1880)},8161:(h,_,i)=>{i.d(_,{q:()=>o});var r=i(4650),d=i(6895),e=i(7750);const l=function(u){return["/",u]};function g(u,f){if(1&u&&(r.TgZ(0,"li",6)(1,"a",7),r._uU(2),r.qZA()()),2&u){const m=r.oxw();r.xp6(1),r.Q6J("routerLink",r.VKq(2,l,m.previousLink)),r.xp6(1),r.Oqu(m.previousHeading)}}let o=(()=>{class u{constructor(){this.previousLink=decodeURIComponent(this.previousLink)}ngOnInit(){}}return u.\u0275fac=function(m){return new(m||u)},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-page-header"]],inputs:{previousHeading:"previousHeading",previousLink:"previousLink",heading:"heading",previoudIcon:"previoudIcon",icon:"icon"},decls:9,vars:6,consts:[[1,"row"],[1,"col-xl-12"],[1,"page-header"],[1,"breadcrumb"],["class","breadcrumb-item",4,"ngIf"],[1,"breadcrumb-item","active"],[1,"breadcrumb-item"],["href","Javascript:void(0)",3,"routerLink"]],template:function(m,v){1&m&&(r.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),r._uU(3),r.qZA(),r.TgZ(4,"ol",3),r.YNc(5,g,3,4,"li",4),r.TgZ(6,"li",5),r._UZ(7,"i"),r._uU(8),r.qZA()()()()),2&m&&(r.xp6(3),r.hij(" ",v.heading," "),r.xp6(2),r.Q6J("ngIf",v.previousHeading),r.xp6(2),r.Gre("fa ",v.icon,""),r.xp6(1),r.hij(" ",v.heading,""))},dependencies:[d.O5,e.yS],styles:[".breadcrumb[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:0;list-style:none;padding:7px 0 0 22px}.breadcrumb-item[_ngcontent-%COMP%]{color:#773784}.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#773784}.breadcrumb-item.active[_ngcontent-%COMP%]{color:#773784}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:first-child   i[_ngcontent-%COMP%]{margin-right:1rem}@media (max-width: 768px){.breadcrumb-item.active[_ngcontent-%COMP%]{color:#773784}}"]}),u})()},2956:(h,_,i)=>{i.d(_,{$:()=>l});var r=i(6895),d=i(7750),e=i(4650);let l=(()=>{class g{}return g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[r.ez,d.Bz]}),g})()},110:(h,_,i)=>{i.d(_,{o:()=>e});var r=i(6895),d=i(4650);let e=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[r.ez]}),l})()},7253:(h,_,i)=>{i.d(_,{Tj:()=>d.T}),i(6256);var d=i(4891)},8372:(h,_,i)=>{i.d(_,{b:()=>l});var r=i(4049),d=i(4482),e=i(5403);function l(g,o=r.z){return(0,d.e)((u,f)=>{let m=null,v=null,q=null;const b=()=>{if(m){m.unsubscribe(),m=null;const y=v;v=null,f.next(y)}};function T(){const y=q+g,B=o.now();if(B<y)return m=this.schedule(void 0,y-B),void f.add(m);b()}u.subscribe((0,e.x)(f,y=>{v=y,q=o.now(),m||(m=o.schedule(T,g),f.add(m))},()=>{b(),f.complete()},void 0,()=>{v=m=null}))})}}}]);