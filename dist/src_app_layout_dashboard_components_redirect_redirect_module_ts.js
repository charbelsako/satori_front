"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_dashboard_components_redirect_redirect_module_ts"],{

/***/ 99779:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/redirect/redirect-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectRoutingModule": () => (/* binding */ RedirectRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _redirect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirect.component */ 74879);




const routes = [
    {
        path: '',
        component: _redirect_component__WEBPACK_IMPORTED_MODULE_0__.RedirectComponent
    }
];
let RedirectRoutingModule = class RedirectRoutingModule {
};
RedirectRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], RedirectRoutingModule);



/***/ }),

/***/ 74879:
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/redirect/redirect.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectComponent": () => (/* binding */ RedirectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _redirect_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirect.component.html?ngResource */ 35153);
/* harmony import */ var _redirect_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.component.scss?ngResource */ 30736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services */ 17253);








let RedirectComponent = class RedirectComponent {
    constructor(roleService, jwtService, router, route) {
        this.roleService = roleService;
        this.jwtService = jwtService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.userData = this.jwtService.getUser();
        if (this.userData) {
            this.roleService.getRoleById(this.userData.role).subscribe(response => {
                const returnUrl = response.link || '/dashboard';
                this.router.navigate([returnUrl]);
            });
        }
        else {
            this.router.navigate(['auth/login']);
        }
    }
};
RedirectComponent.ctorParameters = () => [
    { type: _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_4__.JwtService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
RedirectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-redirect',
        template: _redirect_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_redirect_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedirectComponent);



/***/ }),

/***/ 32962:
/*!*************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/redirect/redirect.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectModule": () => (/* binding */ RedirectModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _redirect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirect.component */ 74879);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _redirect_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-routing.module */ 99779);










let RedirectModule = class RedirectModule {
};
RedirectModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _redirect_component__WEBPACK_IMPORTED_MODULE_1__.RedirectComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _redirect_routing_module__WEBPACK_IMPORTED_MODULE_3__.RedirectRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskModule.forRoot(),
        ],
        providers: [_app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService]
    })
], RedirectModule);



/***/ }),

/***/ 17253:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService),
/* harmony export */   "JwtService": () => (/* reexport safe */ _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService),
/* harmony export */   "services": () => (/* binding */ services)
/* harmony export */ });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ 16256);
/* harmony import */ var _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt/jwt.service */ 34891);


const services = [_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService, _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService];




/***/ }),

/***/ 30736:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/redirect/redirect.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 35153:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/redirect/redirect.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"green-bg pb-3\">\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <ng-container>\n            <div class=\"text-center div-loader-height\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_dashboard_components_redirect_redirect_module_ts.js.map