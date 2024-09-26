"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_server-error_server-error_module_ts"],{

/***/ 64018:
/*!*************************************************************!*\
  !*** ./src/app/server-error/server-error-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorRoutingModule": () => (/* binding */ ServerErrorRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-error.component */ 61685);




const routes = [
    {
        path: '',
        component: _server_error_component__WEBPACK_IMPORTED_MODULE_0__.ServerErrorComponent
    }
];
let ServerErrorRoutingModule = class ServerErrorRoutingModule {
};
ServerErrorRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ServerErrorRoutingModule);



/***/ }),

/***/ 61685:
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _server_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-error.component.html?ngResource */ 90219);
/* harmony import */ var _server_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-error.component.scss?ngResource */ 26127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ServerErrorComponent = class ServerErrorComponent {
    constructor() { }
    ngOnInit() { }
};
ServerErrorComponent.ctorParameters = () => [];
ServerErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-server-error',
        template: _server_error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_server_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServerErrorComponent);



/***/ }),

/***/ 19818:
/*!*****************************************************!*\
  !*** ./src/app/server-error/server-error.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorModule": () => (/* binding */ ServerErrorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-error-routing.module */ 64018);
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-error.component */ 61685);





let ServerErrorModule = class ServerErrorModule {
};
ServerErrorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _server_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServerErrorRoutingModule],
        declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_1__.ServerErrorComponent]
    })
], ServerErrorModule);



/***/ }),

/***/ 26127:
/*!*********************************************************************!*\
  !*** ./src/app/server-error/server-error.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 90219:
/*!*********************************************************************!*\
  !*** ./src/app/server-error/server-error.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<p>\n    server-error works!\n</p>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_server-error_server-error_module_ts.js.map