"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_not-found_not-found_module_ts"],{

/***/ 44017:
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundRoutingModule": () => (/* binding */ NotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 21142);




const routes = [
    {
        path: '',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
    }
];
let NotFoundRoutingModule = class NotFoundRoutingModule {
};
NotFoundRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], NotFoundRoutingModule);



/***/ }),

/***/ 21142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.html?ngResource */ 24025);
/* harmony import */ var _not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss?ngResource */ 31401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundComponent);



/***/ }),

/***/ 92867:
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found-routing.module */ 44017);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ 21142);





let NotFoundModule = class NotFoundModule {
};
NotFoundModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRoutingModule],
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent]
    })
], NotFoundModule);



/***/ }),

/***/ 31401:
/*!***************************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH0iXX0= */";

/***/ }),

/***/ 24025:
/*!***************************************************************!*\
  !*** ./src/app/not-found/not-found.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <img src=\"assets/images/not-found.jpg\">\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_not-found_not-found_module_ts.js.map