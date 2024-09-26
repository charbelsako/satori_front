"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_access-denied_access-denied_module_ts"],{

/***/ 58853:
/*!***************************************************************!*\
  !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessDeniedRoutingModule": () => (/* binding */ AccessDeniedRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-denied.component */ 52123);




const routes = [
    {
        path: '',
        component: _access_denied_component__WEBPACK_IMPORTED_MODULE_0__.AccessDeniedComponent
    }
];
let AccessDeniedRoutingModule = class AccessDeniedRoutingModule {
};
AccessDeniedRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AccessDeniedRoutingModule);



/***/ }),

/***/ 52123:
/*!**********************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessDeniedComponent": () => (/* binding */ AccessDeniedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _access_denied_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-denied.component.html?ngResource */ 60882);
/* harmony import */ var _access_denied_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-denied.component.scss?ngResource */ 10097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AccessDeniedComponent = class AccessDeniedComponent {
    constructor() { }
    ngOnInit() { }
};
AccessDeniedComponent.ctorParameters = () => [];
AccessDeniedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-access-denied',
        template: _access_denied_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_access_denied_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccessDeniedComponent);



/***/ }),

/***/ 11565:
/*!*******************************************************!*\
  !*** ./src/app/access-denied/access-denied.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessDeniedModule": () => (/* binding */ AccessDeniedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-denied-routing.module */ 58853);
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-denied.component */ 52123);





let AccessDeniedModule = class AccessDeniedModule {
};
AccessDeniedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessDeniedRoutingModule],
        declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_1__.AccessDeniedComponent]
    })
], AccessDeniedModule);



/***/ }),

/***/ 10097:
/*!***********************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 60882:
/*!***********************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<p>\n    access-denied works!\n</p>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_access-denied_access-denied_module_ts.js.map