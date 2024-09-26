"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_layout_module_ts"],{

/***/ 42176:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 77509);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 27989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








let HeaderComponent = class HeaderComponent {
    constructor(translate, router, authService, jwtService) {
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.jwtService = jwtService;
        this.userData = [];
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.user = this.jwtService.getUser();
        this.userProfile = this.user.profile;
        this.pushRightClass = 'push-right';
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    onLoggedout() {
        this.jwtService.logoutUser();
        this.authService.setLoggedInStatus(false);
        this.router.navigate(['auth/login']);
    }
    changeLang(language) {
        this.translate.use(language);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 74660:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component.html?ngResource */ 62819);
/* harmony import */ var _sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss?ngResource */ 95163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









let SidebarComponent = class SidebarComponent {
    constructor(translate, router, authService, jwtService, roleService) {
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.jwtService = jwtService;
        this.roleService = roleService;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isLoading = false;
        this.isSuperAdmin = false;
        this.user = [];
        this.userProfile = null;
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.user = this.jwtService.getUser();
        this.userProfile = this.user.profile;
        this.getRolePermission(this.user.role);
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    getRolePermission(roleId) {
        this.isLoading = true;
        this.roleService.getRoleById(roleId).subscribe(response => {
            console.log("response", response);
            this.isSuperAdmin = response.isSuperAdmin;
            if (!this.isSuperAdmin) {
                if (this.userProfile === 'rateMiner' || this.userProfile === 'dealMapper') {
                    response.permission = this.filterObjectsWithRateMinerTrue(response.permission, this.userProfile);
                }
                this.sideItemControls = response.permission;
                this.jwtService.setUserPermissions(this.sideItemControls);
            }
        });
        this.roleService.getWebModules().subscribe(res => {
            this.jwtService.savePermissions(res);
            this.sideNavitems = res;
        });
        this.isLoading = false;
    }
    filterObjectsWithRateMinerTrue(inputArray, profile) {
        if (profile == 'rateMiner') {
            const newArray = inputArray.filter(obj => obj.rateMiner === true);
            return newArray;
        }
        else if (profile == 'dealMapper') {
            const newArray = inputArray.filter(obj => obj.dealMapper === true);
            return newArray;
        }
    }
    checkAccess(key) {
        if (this.isSuperAdmin) {
            return true;
        }
        const access = this.sideItemControls?.find((obj) => obj.key === key);
        if (access) {
            return access.read;
        }
        else {
            return false;
        }
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    changeLang(language) {
        this.translate.use(language);
    }
    onLoggedout() {
        this.jwtService.logoutUser();
        this.authService.setLoggedInStatus(false);
        this.router.navigate(['auth/login']);
    }
    checkProfileNavName(item) {
        if (item.key === "matters" && this.userProfile === 'rateMiner') {
            return "Search Records";
        }
        else {
            return item.name;
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService },
    { type: _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService }
];
SidebarComponent.propDecorators = {
    collapsedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sidebar',
        template: _sidebar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sidebar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SidebarComponent);



/***/ }),

/***/ 99689:
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 36674);




const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [
            { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("src_app_layout_dashboard_components_redirect_redirect_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/components/redirect/redirect.module */ 32962)).then((m) => m.RedirectModule) },
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-src_app_layout_attachment-type_service_attachment-type_service_ts-src_app_layout_base-504c20"), __webpack_require__.e("default-node_modules_ng2-charts_fesm2020_ng2-charts_mjs"), __webpack_require__.e("default-src_app_layout_agreement_agreement_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layout_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 99869)).then((m) => m.DashboardModule) },
            { path: 'employees', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_staff_staff_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./staff/staff.module */ 64125)).then((m) => m.StaffModule) },
            { path: 'roles', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_role_role_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./role/role.module */ 8211)).then((m) => m.RoleModule) },
            { path: 'matters', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layout_matter_matter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./matter/matter.module */ 70282)).then((m) => m.MatterModule) },
            { path: 'matter-name/:matterName', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("src_app_layout_matter-name_matter-name_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./matter-name/matter-name.module */ 88805)).then((m) => m.MatterNameModule) },
            { path: 'matter-id/:matterId', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("src_app_layout_matter-name_matter-name_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./matter-name/matter-name.module */ 88805)).then((m) => m.MatterNameModule) },
            { path: 'clients', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("default-src_app_layout_attachment-type_service_attachment-type_service_ts-src_app_layout_base-504c20"), __webpack_require__.e("src_app_layout_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./client/client.module */ 10003)).then((m) => m.ClientModule) },
            { path: 'agreements', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("default-src_app_layout_attachment-type_service_attachment-type_service_ts-src_app_layout_base-504c20"), __webpack_require__.e("default-src_app_layout_agreement_agreement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agreement/agreement.module */ 30162)).then((m) => m.AgreementModule) },
            { path: 'notifications', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_directives_index_ts-src_app_shared_index_-55d892"), __webpack_require__.e("src_app_layout_template_template_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./template/template.module */ 70839)).then((m) => m.TemplateModule) },
            { path: 'data-mangement/billingcurrencies', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_billingcurrency_billingcurrency_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./billingcurrency/billingcurrency.module */ 6731)).then((m) => m.BillingcurrencyModule) },
            { path: 'data-mangement/billing-frequencies', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_billing-frequency_billing-frequency_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./billing-frequency/billing-frequency.module */ 72407)).then((m) => m.BillingFrequencyModule) },
            { path: 'data-mangement/billing-methods', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_billing-method_billing-method_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./billing-method/billing-method.module */ 45381)).then((m) => m.BillingMethodModule) },
            { path: 'data-mangement/hourly-billings', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_hourly-billing_hourly-billing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./hourly-billing/hourly-billing.module */ 15027)).then((m) => m.HourlyBillingModule) },
            { path: 'data-mangement/base-rates', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_base-rate_base-rate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./base-rate/base-rate.module */ 79449)).then((m) => m.BaseRateModule) },
            { path: 'data-mangement/payor-types', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_payor-type_payor-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payor-type/payor-type.module */ 7123)).then((m) => m.PayorTypeModule) },
            { path: 'data-mangement/sic-codes', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_directives_index_ts-src_app_shared_index_-55d892"), __webpack_require__.e("src_app_layout_sic-code_sic-code_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sic-code/sic-code.module */ 38635)).then((m) => m.SICCodeModule) },
            { path: 'data-mangement/attachment-types', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_attachment-type_attachment-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./attachment-type/attachment-type.module */ 69033)).then((m) => m.AttachmentTypeModule) },
            { path: 'data-mangement/area-of-laws', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_area-of-law_service_area-of-law_service_ts-src_app_router_animations_t-c089a0"), __webpack_require__.e("src_app_layout_area-of-law_area-of-law_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./area-of-law/area-of-law.module */ 82543)).then((m) => m.AreaOfLawModule) },
            { path: 'data-mangement/practice-groups', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layout_area-of-law_service_area-of-law_service_ts-src_app_router_animations_t-c089a0"), __webpack_require__.e("src_app_layout_practice-group_practice-group_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./practice-group/practice-group.module */ 59229)).then((m) => m.PracticeGroupModule) },
            { path: 'data-management', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_data-management_data-management_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./data-management/data-management.module */ 9337)).then((m) => m.HourlyBillingModule) },
            { path: 'time-keepers', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("src_app_layout_time-keeper_time-keeper_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./time-keeper/time-keeper.module */ 41856)).then((m) => m.TimeKeeperModule) },
            { path: 'timecards', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layout_timecard_timecard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./timecard/timecard.module */ 47235)).then((m) => m.TimeCardModule) },
            { path: 'rates', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_router_animations_ts-src_app_shared_index_ts-node_modules_ngx-mask_fesm2020_n-fbac55"), __webpack_require__.e("src_app_layout_rates_rates_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rates/rates.module */ 71499)).then((m) => m.RatesModule) },
            { path: 'charts', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ng2-charts_fesm2020_ng2-charts_mjs"), __webpack_require__.e("src_app_layout_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 47000)).then((m) => m.ChartsModule) },
            { path: 'forms', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 52569)).then((m) => m.FormModule) },
            { path: 'grid', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_grid_grid_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./grid/grid.module */ 36605)).then((m) => m.GridModule) },
            { path: 'components', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_bs-component_bs-component_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bs-component/bs-component.module */ 65765)).then((m) => m.BsComponentModule) },
        ]
    }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LayoutRoutingModule);



/***/ }),

/***/ 36674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component.html?ngResource */ 34226);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss?ngResource */ 54040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() { }
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
};
LayoutComponent.ctorParameters = () => [];
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-layout',
        template: _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutComponent);



/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 42176);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 74660);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ 99689);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ 36674);









let LayoutModule = class LayoutModule {
};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__.LayoutRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule],
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent]
    })
], LayoutModule);



/***/ }),

/***/ 27989:
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ":host .navbar .ml-auto {\n  margin-left: auto;\n}\n:host .navbar .navbar-brand {\n  margin-left: 15px;\n}\n:host .navbar .nav-item {\n  margin-left: 1rem;\n}\n:host .navbar .nav-link .img-profile {\n  height: 2rem;\n  width: 2rem;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n:host .topbar-divider {\n  width: 0;\n  border-right: 1px solid #e3e6f0;\n  height: 2.375rem;\n  margin: auto 1rem;\n}\n:host .img-profile {\n  height: 1.8rem;\n  width: 1.8rem;\n}\n:host .user-title {\n  font-weight: 700;\n}\nbody {\n  background-color: #FBFBFB;\n}\n.nav-header {\n  background-color: #773784;\n  padding: 11px 0;\n}\n.nav-header .navbar-brand {\n  color: #fff;\n}\n.nav-header .navbar-brand h4 {\n  font-size: 20px;\n  font-weight: 700;\n}\n.nav-header .nav-link {\n  color: #fff;\n}\n.navbar.fixed-top {\n  z-index: 1000;\n}\n@media (max-width: 992px) {\n  .navbar-expand .navbar-toggler {\n    display: block !important;\n    position: fixed;\n    right: 0;\n    top: 11px;\n    border: 0;\n    box-shadow: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .nav-header {\n    flex-wrap: wrap !important;\n  }\n  .nav-header .navbar-collapse {\n    width: 100%;\n  }\n  .navbar-nav.ml-auto {\n    margin-left: 0 !important;\n  }\n  .profile-dropdown {\n    position: fixed;\n    top: 2px;\n    right: 60px;\n  }\n  .mobile-btn {\n    font-size: 12px;\n    text-align: center;\n    padding: 9px 5px;\n  }\n  .profile-dropdown .dropdown-menu {\n    left: auto !important;\n    right: 0 !important;\n  }\n}\n.dropdown-menu[data-bs-popper] {\n  right: 0px;\n}\n.profile-dropdown .dropdown-menu {\n  right: 10px !important;\n  left: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLGlCQUFBO0FBRlo7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFJUTtFQUNJLGlCQUFBO0FBRlo7QUFJUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRlo7QUFNSTtFQUNJLFlBQUE7QUFKUjtBQU1RO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQUpaO0FBTVk7RUFDSSxtQkFBQTtBQUpoQjtBQVNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUGhCO0FBVVk7RUFDSSxTQUFBO0FBUmhCO0FBV1k7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQVRoQjtBQWFJO0VBQ0ksUUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVhSO0FBYUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQVhSO0FBYUk7RUFDSSxnQkFBQTtBQVhSO0FBZUE7RUFDSSx5QkFBQTtBQVpKO0FBZUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFaSjtBQWVBO0VBQ0ksV0FBQTtBQVpKO0FBZUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFaSjtBQWVBO0VBQ0ksV0FBQTtBQVpKO0FBY0E7RUFDSSxhQUFBO0FBWEo7QUFjQTtFQUNJO0lBQ0kseUJBQUE7SUFDQSxlQUFBO0lBQ0osUUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUFYRjtBQUNGO0FBYUE7RUFDSTtJQUNHLDBCQUFBO0VBWEw7RUFhRTtJQUNJLFdBQUE7RUFYTjtFQWFFO0lBQ0kseUJBQUE7RUFYTjtFQWFFO0lBQ0ksZUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0VBWE47RUFhRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBWE47RUFjRTtJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7RUFaTjtBQUNGO0FBaUJBO0VBQ0ksVUFBQTtBQWZKO0FBa0JBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQWZKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIC5uYXZiYXIge1xuICAgICAgICAubWwtYXV0byB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubmF2YmFyLWJyYW5kIHsgICAgIFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtbGluayAuaW1nLXByb2ZpbGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVzc2FnZXMge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG5cbiAgICAgICAgLm1lZGlhIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sYXN0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50b3BiYXItZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlNmYwO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoNC4zNzVyZW0gLSAycmVtKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDFyZW07XG4gICAgfVxuICAgIC5pbWctcHJvZmlsZSB7XG4gICAgICAgIGhlaWdodDogMS44cmVtO1xuICAgICAgICB3aWR0aDogMS44cmVtO1xuICAgIH1cbiAgICAudXNlci10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG59XG5cbi5uYXYtaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzM3ODQ7XG4gICAgcGFkZGluZzogMTFweCAwO1xufVxuXG4ubmF2LWhlYWRlciAubmF2YmFyLWJyYW5ke1xuICAgIGNvbG9yOiAjZmZmO1xuICAgXG59XG4ubmF2LWhlYWRlciAubmF2YmFyLWJyYW5kIGg0e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmF2LWhlYWRlciAubmF2LWxpbmt7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyLmZpeGVkLXRvcHtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCl7XG4gICAgLm5hdmJhci1leHBhbmQgLm5hdmJhci10b2dnbGVye1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMXB4O1xuICAgIGJvcmRlcjogMDsgXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAubmF2LWhlYWRlcntcbiAgICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5hdi1oZWFkZXIgLm5hdmJhci1jb2xsYXBzZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5uYXZiYXItbmF2Lm1sLWF1dG97XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wcm9maWxlLWRyb3Bkb3due1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICByaWdodDogNjBweDtcbiAgICB9XG4gICAgLm1vYmlsZS1idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA5cHggNXB4O1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1kcm9wZG93biAuZHJvcGRvd24tbWVudXtcbiAgICAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICBcbn1cblxuLmRyb3Bkb3duLW1lbnVbZGF0YS1icy1wb3BwZXJdIHtcbiAgICByaWdodDogMHB4O1xufVxuXG4ucHJvZmlsZS1kcm9wZG93biAuZHJvcGRvd24tbWVudXtcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 95163:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 59px;\n  left: 235px;\n  width: 220px;\n  margin-left: -235px;\n  margin-bottom: 0;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar .list-group a.list-group-item {\n  background: #222;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n.sidebar .list-group a.list-group-item .fa {\n  margin-right: 10px;\n}\n.sidebar .list-group a:hover {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group a.router-link-active {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group .header-fields {\n  padding-top: 10px;\n}\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar .sidebar-dropdown *:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-title {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar .sidebar-dropdown .panel-title a {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222;\n}\n.sidebar .sidebar-dropdown .panel-title a span {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar .sidebar-dropdown .panel-title a:hover,\n.sidebar .sidebar-dropdown .panel-title a:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar .sidebar-dropdown .panel-title:hover {\n  background: #151515;\n}\n.sidebar .sidebar-dropdown .panel-collapse {\n  border-radius: 0;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n  border-radius: 0;\n  background-color: #222;\n  border: 0 solid transparent;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n  color: #999;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n  color: #fff;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item.active {\n  background: #151515;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n  background: #151515;\n}\n.nested-menu .list-group-item {\n  cursor: pointer;\n}\n.nested-menu .nested {\n  list-style-type: none;\n}\n.nested-menu ul.submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n.nested-menu .expand ul.submenu li a {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 59px;\n    left: -55px;\n  }\n}\n@media print {\n  .sidebar {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background-color: #d3d3d3;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  background-color: #afafaf;\n}\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button i {\n  font-size: 23px;\n}\n.toggle-button:hover {\n  background: #151515;\n  color: #fff;\n}\n.collapsed {\n  width: 60px;\n}\n.collapsed span {\n  display: none;\n}\n.sidebar {\n  background-color: #fff;\n  padding-top: 20px;\n}\n.list-item-group {\n  text-decoration: none !important;\n}\n.sidebar .list-group .list-group-item {\n  color: #242424 !important;\n  background-color: #fff !important;\n}\n.sidebar .list-group .list-group-item:hover {\n  background-color: #e9e9e9 !important;\n}\n.sidebar .list-group .list-group-item.active,\n.sidebar .list-group .handle.active {\n  background-color: #e9e9e9 !important;\n}\n.sidebar-user {\n  text-decoration: none;\n  text-align: center;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 15px;\n  text-decoration: none;\n}\n.sidebar-user .image {\n  width: 57px;\n  height: 57px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 8px;\n  margin: 0 auto 10px auto;\n}\n.sidebar-user .image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidebar-user span {\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: capitalize;\n  color: #773784;\n}\n.sidebar .list-group-item {\n  color: #242424;\n  font-size: 13px;\n  padding: 8px 16px;\n}\n.sidebar .list-group .list-group-item i {\n  width: 19px;\n  text-align: left;\n}\n.hamburger {\n  width: 28px;\n  height: 2px;\n  background-color: transparent;\n  border-radius: 10px;\n  display: inline-block;\n  position: relative;\n}\n.hamburger:before, .hamburger:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 4px;\n  width: 62%;\n  height: 100%;\n  background-color: #7a7373;\n  transform: rotate(-24deg);\n  transition: all 0.3s;\n  display: none;\n}\n.hamburger:after {\n  top: 4px;\n  bottom: auto;\n  transform: rotate(22deg);\n}\n.toggle-button {\n  bottom: auto;\n  background: url(/assets/images/back.svg) center no-repeat;\n  width: 30px;\n  height: 28px;\n  border: 0;\n  left: 174px;\n  top: 77px;\n  padding: 0 !important;\n  padding-left: 5px !important;\n  padding-right: 27px !important;\n  border-radius: 3px;\n}\n.toggle-button.collapsed {\n  background: #fff !important;\n  left: 43px;\n  top: 69px;\n}\n.toggle-button.collapsed span {\n  display: inline-block;\n  width: 22px;\n}\n.toggle-button.collapsed .hamburger {\n  background-color: #7a7373;\n}\n.toggle-button.collapsed .hamburger:before {\n  bottom: -6px;\n  transform: none;\n  width: 100%;\n  display: block;\n}\n.toggle-button.collapsed .hamburger::after {\n  width: 100%;\n  display: block;\n}\n.sidebar.collapsed .signout-con span {\n  display: none;\n}\n.sidebar.collapsed .list-group-item i {\n  margin-right: 0 !important;\n  text-align: center !important;\n}\n.toggle-button.collapsed .hamburger:after {\n  top: -6px;\n  transform: none;\n}\n.sidebar-heading {\n  padding: 4px 16px;\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  margin-top: 22px;\n}\n.user-side:hover {\n  background-color: #fff !important;\n}\n@media (max-width: 768px) {\n  .toggle-button {\n    display: none;\n  }\n  .hamburger {\n    background-color: #fff !important;\n  }\n  .hamburger:before, .hamburger:after {\n    transform: none;\n  }\n  .hamburger:before {\n    bottom: -6px;\n  }\n  .hamburger:after {\n    top: -6px;\n  }\n  .sidebar {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n    border-radius: 0 !important;\n  }\n}\n.side-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 5px;\n}\n.sidebar .list-group {\n  max-height: 72vh;\n  overflow: auto;\n}\n/*\n CSS for the main interaction\n*/\n.accordion > input[type=checkbox] {\n  position: absolute;\n  left: -100vw;\n}\n.accordion .content {\n  overflow-y: hidden;\n  height: 0;\n  transition: height 0.3s ease;\n}\n.accordion > input[type=checkbox]:checked ~ .content {\n  height: auto;\n  overflow: visible;\n}\n.accordion label {\n  display: block;\n}\n.accordion label {\n  margin-bottom: 0px !important;\n}\n.accordion > input[type=checkbox]:checked ~ .content {\n  padding: 0 15px 15px 15px;\n}\n.accordion .handle {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.2em;\n}\n.accordion label {\n  color: #242424;\n  cursor: pointer;\n  font-weight: normal;\n  padding: 15px;\n  position: relative;\n  font-family: \"Poppins\", sans-serif !important;\n}\n.accordion label:hover,\n.accordion label:focus {\n  background: #e9e9e9;\n}\n.accordion .handle label:before {\n  font-family: \"fontawesome\";\n  content: \"\\f054\";\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 0.58em;\n  line-height: 1.556em;\n  vertical-align: middle;\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n.accordion > input[type=checkbox]:checked ~ .handle label:before {\n  content: \"\\f078\";\n}\n.accordion {\n  max-width: 65em;\n}\n.accordion p:last-child {\n  margin-bottom: 0;\n}\n.collapse-links {\n  padding-left: 23px;\n}\n.collapse-links a {\n  display: block;\n  font-size: 15px;\n  color: #242424;\n  text-decoration: none;\n  padding: 8px 10px;\n  font-family: \"Poppins\", sans-serif !important;\n}\n.collapse-links a:hover {\n  background: #e9e9e9 !important;\n  color: #242424 !important;\n}\n.toggle-button:hover {\n  background-color: #fff !important;\n}\n@media (max-width: 992px) {\n  .toggle-button {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuLnNpZGViYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdG9wOiA1OXB4O1xuICAgIGxlZnQ6IDIzNXB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICAubGlzdC1ncm91cCB7XG4gICAgICAgIGEubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZHJvcGRvd24ge1xuICAgICAgICAqOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICAgICAucGFuZWwtYm9keSB7XG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmVzdGVkLW1lbnUge1xuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm5lc3RlZCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG5cbiAgICB1bC5zdWJtZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cblxuICAgICYgLmV4cGFuZCB7XG4gICAgICAgIHVsLnN1Ym1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHRvcDogNTlweDtcbiAgICAgICAgbGVmdDogLTU1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmhlYWRlci1maWVsZHMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjtcbn1cblxuLnRvZ2dsZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XG5cbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb2xsYXBzZWQge1xuICAgIHdpZHRoOiA2MHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG59XG4ubGlzdC1pdGVtLWdyb3Vwe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbXtcbiAgICBjb2xvcjogIzI0MjQyNCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOSAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUsXG4uc2lkZWJhciAubGlzdC1ncm91cCAuaGFuZGxlLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLXVzZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjBGMEYwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpZGViYXItdXNlciAuaW1hZ2V7XG4gICAgd2lkdGg6IDU3cHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG59XG4uc2lkZWJhci11c2VyIC5pbWFnZSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnNpZGViYXItdXNlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjNzczNzg0O1xuXG59XG5cblxuLnNpZGViYXIgLmxpc3QtZ3JvdXAtaXRlbXtcbmNvbG9yOiAjMjQyNDI0O1xuZm9udC1zaXplOiAxM3B4O1xucGFkZGluZzogOHB4IDE2cHg7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIGl7XG4gICB3aWR0aDogMTlweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaGFtYnVyZ2Vye1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhhbWJ1cmdlcjpiZWZvcmUsIC5oYW1idXJnZXI6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDRweDtcbiAgICB3aWR0aDogNjIlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3MzczO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmhhbWJ1cmdlcjphZnRlcntcbiAgICB0b3A6IDRweDtcbiAgICBib3R0b206IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xufVxuLnRvZ2dsZS1idXR0b257XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iYWNrLnN2ZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGxlZnQ6IDE3NHB4O1xuICAgIHRvcDogNzdweDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG59XG4udG9nZ2xlLWJ1dHRvbi5jb2xsYXBzZWR7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDQzcHg7XG4gICAgdG9wOiA2OXB4O1xufVxuLnRvZ2dsZS1idXR0b24uY29sbGFwc2VkIHNwYW57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMnB4O1xuXG59XG4udG9nZ2xlLWJ1dHRvbi5jb2xsYXBzZWQgLmhhbWJ1cmdlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3MzczO1xufVxuLnRvZ2dsZS1idXR0b24uY29sbGFwc2VkIC5oYW1idXJnZXI6YmVmb3Jle1xuYm90dG9tOiAtNnB4O1xudHJhbnNmb3JtOiBub25lO1xud2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBibG9jaztcbn1cbi50b2dnbGUtYnV0dG9uLmNvbGxhcHNlZCAuaGFtYnVyZ2VyOjphZnRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaWRlYmFyLmNvbGxhcHNlZCAuc2lnbm91dC1jb24gc3BhbntcbmRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZWJhci5jb2xsYXBzZWQgLmxpc3QtZ3JvdXAtaXRlbSBpe1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnRvZ2dsZS1idXR0b24uY29sbGFwc2VkIC5oYW1idXJnZXI6YWZ0ZXJ7XG4gICAgdG9wOiAtNnB4O1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgLnNpZGViYXItaGVhZGluZ3tcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIH1cbiAgICBcbiAgICAudXNlci1zaWRlOmhvdmVye1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpeyAgICAgXG4gICAgICAgIC50b2dnbGUtYnV0dG9ueyAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuaGFtYnVyZ2Vye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXI6YmVmb3JlLCAuaGFtYnVyZ2VyOmFmdGVye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXI6YmVmb3Jle1xuICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oYW1idXJnZXI6YWZ0ZXJ7XG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXJ7ICAgICAgICAgICBcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gMTUlKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICBcbiAgICAgICAgfVxuICAgXG4gICAgfVxuXG4gICAgLnNpZGUtaWNvbntcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgLnNpZGViYXIgLmxpc3QtZ3JvdXB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcydmg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgLypcbiBDU1MgZm9yIHRoZSBtYWluIGludGVyYWN0aW9uXG4qL1xuLmFjY29yZGlvbiA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMDB2dztcbiAgfVxuICBcbiAgLmFjY29yZGlvbiAuY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAuYWNjb3JkaW9uID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY29udGVudCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gIFxuICAuYWNjb3JkaW9uIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuIFxuICAuYWNjb3JkaW9uIGxhYmVse1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYWNjb3JkaW9uID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHggMTVweDtcbiAgIFxuICB9XG4gIFxuICAuYWNjb3JkaW9uIC5oYW5kbGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICB9XG4gIFxuICAuYWNjb3JkaW9uIGxhYmVsIHtcbiAgICBjb2xvcjogIzI0MjQyNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAxNXB4OyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYWNjb3JkaW9uIGxhYmVsOmhvdmVyLFxuICAuYWNjb3JkaW9uIGxhYmVsOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICB9XG4gIFxuICAuYWNjb3JkaW9uIC5oYW5kbGUgbGFiZWw6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ2ZvbnRhd2Vzb21lJztcbiAgICBjb250ZW50OiBcIlxcZjA1NFwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAuNThlbTtcbiAgICBsaW5lLWhlaWdodDogMS41NTZlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDE4cHg7XG4gIH1cbiAgXG4gIC5hY2NvcmRpb24gPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IC5oYW5kbGUgbGFiZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZjA3OFwiO1xuICB9XG4gIFxuICAuYWNjb3JkaW9uIHtcbiAgICBtYXgtd2lkdGg6IDY1ZW07XG4gIH1cbiAgXG4gIC5hY2NvcmRpb24gcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5jb2xsYXBzZS1saW5rc3tcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcHg7XG4gIH1cbiAgLmNvbGxhcHNlLWxpbmtzIGF7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMjQyNDI0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sbGFwc2UtbGlua3MgYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyNDI0MjQgIWltcG9ydGFudDtcbiAgfSAgICBcblxuICAudG9nZ2xlLWJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcbiAgICAudG9nZ2xlLWJ1dHRvbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";

/***/ }),

/***/ 54040:
/*!*********************************************************!*\
  !*** ./src/app/layout/layout.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 59px;\n  margin-left: 222px;\n  padding: 8px 15px 15px 2px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed {\n  margin-left: 60px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n\n.shadow {\n  box-shadow: -14px 0rem 58px rgba(0, 0, 0, 0.15) !important;\n}\n\n.main-container:before {\n  left: 0;\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .main-container {\n    margin-top: 65px;\n  }\n  .main-container:before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSwyQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLDBCQUFBO0lBQ0EsMkJBQUE7RUFBTjtBQUNGOztBQWVBO0VBQ0ksMERBQUE7QUFiSjs7QUFnQkE7RUFDSSxPQUFBO0VBQ0EsV0FBQTtBQWJKOztBQWlCQTtFQUNJO0lBQ0ksZ0JBQUE7RUFkTjtFQWdCRTtJQUNJLGFBQUE7RUFkTjtBQUNGIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDU5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIyMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxNXB4IDE1cHggMnB4O1xuICAgIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbGxhcHNlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG4vLyAubWFpbi1jb250YWluZXI6YmVmb3Jle1xuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIHdpZHRoOiAxMzAlO1xuLy8gICAgIGhlaWdodDogMTMwcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Mzc4NDtcbi8vICAgICBsZWZ0OiAtMjMwcHg7XG4vLyAgICAgei1pbmRleDogLTE7XG4vLyB9XG4uc2hhZG93e1xuICAgIGJveC1zaGFkb3c6IC0xNHB4IDByZW0gNThweCByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XG5cbn1cbi5tYWluLWNvbnRhaW5lcjpiZWZvcmV7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICB9XG4gICAgLm1haW4tY29udGFpbmVyOmJlZm9yZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 77509:
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<nav class=\"navbar navbar-expand mb-4 shadow fixed-top nav-header\">\n    <a class=\"navbar-brand\" href=\"#\" *ngIf=\"userProfile != 'rateMiner'\">\n       <img src=\"assets/images/stori-logo.svg\" width=\"140px\" alt=\"\">\n    </a>\n    <a class=\"navbar-brand\" href=\"#\" *ngIf=\"userProfile == 'rateMiner'\">\n        <img src=\"assets/images/rateminer-bg-w1.png\" width=\"150px\" alt=\"\">\n     </a>\n    <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <span class=\"hamburger\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav ml-auto align-items-center d-none\">            &nbsp;\n        \n            <!-- <li class=\"nav-item\">\n                <a\n                    (click)=\"rltAndLtr()\"\n                    class=\"nav-link mt-1\"\n                    href=\"javascript:void(0)\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                >\n                    RTL/LTR\n                </a>\n            </li>\n            &nbsp;\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a (click)=\"changeLang('en')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fr')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('ur')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('es')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('it')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fa')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('de')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('zh-CHS')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li> -->\n            <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n            <!-- Nav Item - User Information -->\n            <li class=\"nav-item dropdown no-arrow profile-dropdown d-none\" ngbDropdown>\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\"\n                href=\"javascript:void(0)\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"mr-2 d-none d-lg-inline user-title\">{{userData.name}}</span>\n                <img class=\"img-profile rounded-circle\" src=\"assets/images/undraw_profile.svg\">\n            </a>\n                <!-- Dropdown - User Information -->\n                <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n                    aria-labelledby=\"userDropdown\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"#\">\n                        <i class=\"fa fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n                        Profile\n                    </a>\n                    <a class=\"dropdown-item\" href=\"#\">\n                        <i class=\"fa fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n                        Settings\n                    </a>\n                    <a class=\"dropdown-item\" href=\"#\">\n                        <i class=\"fa fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n                        Activity Log\n                    </a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n                        Logout\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n    \n</nav>\n";

/***/ }),

/***/ 62819:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<nav [ngClass]=\"{ sidebarPushRight: isActive, collapsed: collapsed }\" class=\"sidebar mt-2\">\n \n    <div class=\"list-group\">\n        <a href=\"#\" class=\"list-item-group user-side\">\n            <div class=\"sidebar-user\">\n                <div class=\"image\"><img class=\"img-profile \" src=\"assets/images/gffd.jpg\"></div>\n                <span>{{user?.name}}</span>&nbsp;<span *ngIf=\"userProfile\">|&nbsp;\n                {{userProfile}}</span>\n            </div>\n        </a>\n        <!-- <ng-container *ngFor=\"let item of sideNavitems\">\n            <a [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" routerLink=\"{{item.link}}\">\n                <img src=\"assets/images/{{item.icon}}\" class=\"side-icon\" alt=\"icon\"/>&nbsp;\n                <span>{{item.name}}</span>\n            </a>\n        </ng-container> -->\n        <ng-container *ngIf=\"isLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <div *ngIf=\"!isLoading\">\n            <ng-container *ngFor=\"let item of sideNavitems\">\n                <ng-container *ngIf=\"item.key !== 'data-mangement'\">\n                    <a *ngIf=\"checkAccess(item.key)\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\"\n                        [ngClass]=\"{'active': ((router.url === item.link) || (!['/dashboard', '/clients'].includes(item.link) && router.url.includes(item.link)))}\"\n                        routerLink=\"{{item.link}}\">\n                        <!-- <i class=\"fa fa-{{item.icon}}\"></i>  -->\n                        <img src=\"assets/images/{{item.icon}}\" class=\"side-icon\" alt=\"icon\" />&nbsp;\n                        <span>{{checkProfileNavName(item)}}</span>\n                    </a>\n                </ng-container>\n                <section class=\"accordion\" *ngIf=\"item.key === 'data-mangement' && checkAccess(item.key)\">\n                    <input type=\"checkbox\" name=\"collapse\" id=\"handle1\"\n                        [checked]=\"router.url.startsWith('/data-mangement')\">\n                    <h2 class=\"handle\" [ngClass]=\"{'active': router.url.startsWith('/data-mangement')}\">\n                        <label for=\"handle1\" [ngClass]=\"{'active': router.url === '/data-mangement'}\"> <img\n                                src=\"assets/images/data-management.svg\" class=\"side-icon\" alt=\"icon\" />&nbsp; Data Management</label>\n                    </h2>\n                    <div class=\"content\">\n                        <div class=\"collapse-links\">\n                            <a routerLink=\"/data-mangement/billingcurrencies\" role=\"link\">Billing Currency</a>\n                            <a routerLink=\"/data-mangement/area-of-laws\" role=\"link\">Area Of Law</a>\n                            <a routerLink=\"/data-mangement/practice-groups\" role=\"link\">Practice Group</a>\n                            <a routerLink=\"/data-mangement/hourly-billings\" role=\"link\">Fee Agreement Type</a>\n                            <a routerLink=\"/data-mangement/billing-frequencies\" role=\"link\">Billing Frequencies</a>\n                            <a routerLink=\"/data-mangement/base-rates\" role=\"link\">Base Rate Type</a>\n                            <a routerLink=\"/data-mangement/billing-methods\" role=\"link\">Billing Methods</a>\n                            <a routerLink=\"/data-mangement/payor-types\" role=\"link\">Payor Types</a>\n                            <a routerLink=\"/data-mangement/attachment-types\" role=\"link\">Attachment Types</a> \n                            <a routerLink=\"/data-mangement/sic-codes\" role=\"link\">SIC Code</a>       \n                        </div>\n    \n                    </div>\n                </section>\n            </ng-container>\n        </div>\n  \n        <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a (click)=\"addExpandClass('languages')\" class=\"list-group-item\">\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' |\n                        translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li [class.expand]=\"showMenu === 'languages'\" class=\"nested\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a (click)=\"changeLang('en')\" href=\"javascript:void(0)\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('fr')\" href=\"javascript:void(0)\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('ur')\" href=\"javascript:void(0)\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('es')\" href=\"javascript:void(0)\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('it')\" href=\"javascript:void(0)\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('fa')\" href=\"javascript:void(0)\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('de')\" href=\"javascript:void(0)\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n    <div class=\"px-2 pe-3 mt-5 signout-con\">\n        <a class=\"btn btn-light btn-block radius-10 font-medium py-2\" (click)=\"onLoggedout()\"><i class=\"fa fa-sign-out\"\n                aria-hidden=\"true\"></i> <span>Log Out</span></a>\n    </div>\n\n    <div (click)=\"toggleCollapsed()\" [ngClass]=\"{ collapsed: collapsed }\" class=\"toggle-button\" id=\"toggle-button\">\n        <!-- <i class=\"fa fa-fw fa-angle-double-{{ collapsed ? 'right' : 'left' }}\"></i>&nbsp;\n        <span>{{ 'Collapse Sidebar' | translate }}</span> -->\n        <span class=\"hamburger\"></span>\n    </div>\n</nav>";

/***/ }),

/***/ 34226:
/*!*********************************************************!*\
  !*** ./src/app/layout/layout.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section [ngClass]=\"{ collapsed: collapedSideBar }\" class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_layout_module_ts.js.map