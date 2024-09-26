"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_form_form_module_ts"],{

/***/ 81864:
/*!****************************************************!*\
  !*** ./src/app/layout/form/form-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormRoutingModule": () => (/* binding */ FormRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component */ 10019);




const routes = [
    {
        path: '',
        component: _form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent
    }
];
let FormRoutingModule = class FormRoutingModule {
};
FormRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FormRoutingModule);



/***/ }),

/***/ 10019:
/*!***********************************************!*\
  !*** ./src/app/layout/form/form.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 25793);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 21680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);





let FormComponent = class FormComponent {
    constructor() { }
    ngOnInit() { }
};
FormComponent.ctorParameters = () => [];
FormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-form',
        template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormComponent);



/***/ }),

/***/ 52569:
/*!********************************************!*\
  !*** ./src/app/layout/form/form.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormModule": () => (/* binding */ FormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-routing.module */ 81864);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ 10019);






let FormModule = class FormModule {
};
FormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _form_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormRoutingModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
        declarations: [_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent]
    })
], FormModule);



/***/ }),

/***/ 74903:
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noTransition": () => (/* binding */ noTransition),
/* harmony export */   "routerTransition": () => (/* binding */ routerTransition),
/* harmony export */   "slideToBottom": () => (/* binding */ slideToBottom),
/* harmony export */   "slideToLeft": () => (/* binding */ slideToLeft),
/* harmony export */   "slideToRight": () => (/* binding */ slideToRight),
/* harmony export */   "slideToTop": () => (/* binding */ slideToTop)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', []);
}
function slideToRight() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ 51679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard),
/* harmony export */   "PageHeaderModule": () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule),
/* harmony export */   "SharedPipesModule": () => (/* reexport safe */ _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__.SharedPipesModule),
/* harmony export */   "StatModule": () => (/* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_0__.StatModule)
/* harmony export */ });
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ 41277);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ 81233);
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ 61140);





/***/ }),

/***/ 41277:
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderModule": () => (/* reexport safe */ _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule),
/* harmony export */   "StatModule": () => (/* reexport safe */ _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__.StatModule)
/* harmony export */ });
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ 12956);
/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ 80110);




/***/ }),

/***/ 88161:
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component.html?ngResource */ 41230);
/* harmony import */ var _page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss?ngResource */ 28641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let PageHeaderComponent = class PageHeaderComponent {
    constructor() {
        this.previousLink = decodeURIComponent(this.previousLink);
    }
    ngOnInit() { }
};
PageHeaderComponent.ctorParameters = () => [];
PageHeaderComponent.propDecorators = {
    previousHeading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    previousLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    previoudIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-header',
        template: _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageHeaderComponent);



/***/ }),

/***/ 12956:
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderModule": () => (/* binding */ PageHeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component */ 88161);





let PageHeaderModule = class PageHeaderModule {
};
PageHeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent]
    })
], PageHeaderModule);



/***/ }),

/***/ 15357:
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatComponent": () => (/* binding */ StatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _stat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component.html?ngResource */ 19539);
/* harmony import */ var _stat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat.component.scss?ngResource */ 10873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let StatComponent = class StatComponent {
    constructor() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
};
StatComponent.ctorParameters = () => [];
StatComponent.propDecorators = {
    bgClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
StatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-stat',
        template: _stat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StatComponent);



/***/ }),

/***/ 80110:
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatModule": () => (/* binding */ StatModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 15357);




let StatModule = class StatModule {
};
StatModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent]
    })
], StatModule);



/***/ }),

/***/ 81233:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPipesModule": () => (/* binding */ SharedPipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



let SharedPipesModule = class SharedPipesModule {
};
SharedPipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        declarations: []
    })
], SharedPipesModule);



/***/ }),

/***/ 21680:
/*!************************************************************!*\
  !*** ./src/app/layout/form/form.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 28641:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 7px 0 0px 0;\n  margin-bottom: 0;\n  list-style: none;\n  padding-left: 22px;\n}\n\n.breadcrumb-item {\n  color: #773784;\n}\n\n.breadcrumb-item a {\n  text-decoration: none !important;\n  color: #773784;\n}\n\n.breadcrumb-item.active {\n  color: #773784;\n}\n\n.breadcrumb .breadcrumb-item:first-child i {\n  margin-right: 1rem;\n}\n\n@media (max-width: 768px) {\n  .breadcrumb-item.active {\n    color: #773784;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQUFBO0VBQ0k7SUFDSSxjQUFBO0VBR047QUFDRiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiA3cHggMCAwcHggMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICBcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgXG59XG4uYnJlYWRjcnVtYi1pdGVte1xuICAgIGNvbG9yOiAjNzczNzg0O1xuICBcbn1cbi5icmVhZGNydW1iLWl0ZW0gYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzc3Mzc4NDtcbn1cbi5icmVhZGNydW1iLWl0ZW0uYWN0aXZle1xuICAgIGNvbG9yOiAjNzczNzg0O1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbTpmaXJzdC1jaGlsZCBpe1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAuYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZXtcbiAgICAgICAgY29sb3I6ICM3NzM3ODQ7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 10873:
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 25793:
/*!************************************************************!*\
  !*** ./src/app/layout/form/form.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n\n  <app-page-header [heading]=\"'Profile'\"></app-page-header>\n\n\n\n  <div class=\"container-fluid mt-2\" [@routerTransition]>\n\n\n  </div>\n\n\n  <div class=\"container-fluid mt-4\">\n\n    <form action=\"\">\n      <div class=\"card card-3 mb-5\">\n        <div class=\"card-body py-3\">\n          <h2>Basic Details</h2>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-floating mb-4\">\n                <select class=\"form-select\" id=\"floatingSelect\"\n                  aria-label=\"Floating label select example\">\n                  <option selected>392944- Grey Stone & Co.</option>\n                  <option value=\"1\">392944- Grey Stone & Co.</option>\n                  <option value=\"2\">392944- Grey Stone & Co.</option>\n                  <option value=\"3\">392944- Grey Stone & Co.</option>\n                </select>\n                <label for=\"floatingSelect\">Client Group</label>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-floating mb-4\">\n                <select class=\"form-select\" id=\"floatingSelect\"\n                  aria-label=\"Floating label select example\">\n                  <option selected>392944- Grey Stone & Co.</option>\n                  <option value=\"1\">392944- Grey Stone & Co.</option>\n                  <option value=\"2\">392944- Grey Stone & Co.</option>\n                  <option value=\"3\">392944- Grey Stone & Co.</option>\n                </select>\n                <label for=\"floatingSelect\">Client </label>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-floating mb-4\">\n                <select class=\"form-select\" id=\"floatingSelect\"\n                  aria-label=\"Floating label select example\">\n                  <option selected>Option 1</option>\n                  <option value=\"1\">Option 1</option>\n                  <option value=\"2\">Option 1</option>\n                  <option value=\"3\">Option 1</option>\n                </select>\n                <label for=\"floatingSelect\">Principal Attorney </label>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-floating mb-4\">\n                <select class=\"form-select\" id=\"floatingSelect\"\n                  aria-label=\"Floating label select example\">\n                  <option selected>Option 1</option>\n                  <option value=\"1\">Option 1</option>\n                  <option value=\"2\">Option 1</option>\n                  <option value=\"3\">Option 1</option>\n                </select>\n                <label for=\"floatingSelect\">Katten Billing Manager </label>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"form-floating mb-4\">\n                <select class=\"form-select\" id=\"floatingSelect\"\n                  aria-label=\"Floating label select example\">\n                  <option selected>Option 1</option>\n                  <option value=\"1\">Option 1</option>\n                  <option value=\"2\">Option 1</option>\n                  <option value=\"3\">Option 1</option>\n                </select>\n                <label for=\"floatingSelect\">Client Group </label>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"card card-3 mb-5\">\n        <div class=\"card-body py-3\">\n\n          <div class=\"d-flex align-items-center\">\n            <h2 class=\"me-4 mb-1\">Client billing details</h2>\n            <a href=\"#\" class=\"link\">Add billing contact</a>\n          </div>\n\n          <form action=\"\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-floating mb-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"floatingInput\"\n                    placeholder=\"name@example.com\">\n                  <label for=\"floatingInput\">First Name</label>\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                <div class=\"form-floating mb-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"floatingInput\"\n                    placeholder=\"name@example.com\">\n                  <label for=\"floatingInput\">Last Name</label>\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                <div class=\"form-floating mb-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"floatingInput\"\n                    placeholder=\"name@example.com\">\n                  <label for=\"floatingInput\">Phone</label>\n                </div>\n              </div>\n\n              <div class=\"col-md-3\">\n                <div class=\"form-floating mb-4\">\n                  <input type=\"Date\" class=\"form-control\" id=\"floatingInput\"\n                    placeholder=\"name@example.com\">\n                  <label for=\"floatingInput\">Start Date</label>\n                </div>\n              </div>\n\n              <div class=\"col-md-3\">\n                <div class=\"form-floating mb-4\">\n                  <input type=\"Date\" class=\"form-control\" id=\"floatingInput\"\n                    placeholder=\"name@example.com\">\n                  <label for=\"floatingInput\">Expiration Date</label>\n                </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                <div class=\"form-floating mb-4\">\n                  <select class=\"form-select\" id=\"floatingSelect\"\n                    aria-label=\"Floating label select example\">\n                    <option selected>Option 1</option>\n                    <option value=\"1\">Option 1</option>\n                    <option value=\"2\">Option 1</option>\n                    <option value=\"3\">Option 1</option>\n                  </select>\n                  <label for=\"floatingSelect\">Katten Expiring Reminder Contacts\n                  </label>\n                </div>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n\n      <div class=\"card card-3 mb-5\">\n        <div class=\"card-body py-3\">\n          <div class=\"d-flex align-items-center\">\n            <h2 class=\"me-4 mb-1\">Expiration reminder dates</h2>\n            <a href=\"#\" class=\"link\">Add expiration reminder</a>\n          </div>\n\n\n          <form action=\"\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-floating mb-4\">\n                  <select class=\"form-select\" id=\"floatingSelect\"\n                    aria-label=\"Floating label select example\" multiple>\n                    <option selected>Option 1</option>\n                    <option value=\"1\">Option 1</option>\n                    <option value=\"2\">Option 1</option>\n                    <option value=\"3\">Option 1</option>\n                  </select>\n                  <label for=\"floatingSelect\">Reminder Date</label>\n                </div>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </form>\n    <div class=\"col-md-3\">\n      <input type=\"submit\" class=\"btn btn-primary btn-lg btn-boxed btn-block\"\n        value=\"Save Changes\">\n    </div>\n\n\n  </div>\n\n</div>\n";

/***/ }),

/***/ 41230:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li *ngIf=\"previousHeading\" class=\"breadcrumb-item\">\n                <a [routerLink]=\"['/', previousLink]\" href=\"Javascript:void(0)\">{{previousHeading}}</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\n        </ol>\n    </div>\n</div>\n";

/***/ }),

/***/ 19539:
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{ icon }} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{ count }}</div>\n                <div class=\"d-block\">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{ data }}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\">\n            <span><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_form_form_module_ts.js.map