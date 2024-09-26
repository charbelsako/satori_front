"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_role_role_module_ts"],{

/***/ 97222:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/role/components/add-edit-role/add-edit-role.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditRoleComponent": () => (/* binding */ AddEditRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-role.component.html?ngResource */ 67553);
/* harmony import */ var _add_edit_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-role.component.scss?ngResource */ 36725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/role.service */ 26316);









let AddEditRoleComponent = class AddEditRoleComponent {
    constructor(fb, rolesService, router, route, jwtService
    // public toastr: ToastrService
    ) {
        this.fb = fb;
        this.rolesService = rolesService;
        this.router = router;
        this.route = route;
        this.jwtService = jwtService;
        this.roleId = '';
        this.editForm = false;
        this.isLoading = false;
        this.modulesPermissions = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([]);
        this.webModules = [];
        this.welcomeScreen = 'Dashboard';
        this.route.params.subscribe(params => {
            if (params.roleId !== '' && params.roleId != null) {
                this.roleId = params.roleId;
                this.editForm = true;
            }
        });
    }
    ngOnInit() {
        this.user = this.jwtService.getUser();
        this.isSuperAdmin = this.user.isSuperAdmin;
        this.permissionsStatus = [];
        this.webModules = this.jwtService.getPermissions();
        if (this.editForm && this.roleId) {
            this.getRole(this.roleId);
        }
        else {
            this.createNewForm();
        }
    }
    createNewForm() {
        this.isLoading = true;
        this.webModules.map(x => {
            let data = {
                name: x.name,
                key: x.key,
                read: true,
                write: true,
                rateMiner: false,
                dealMapper: false,
            };
            this.permissionsStatus.push(data);
        });
        this.isLoading = false;
        // console.log(this.webModules);
        console.log(this.permissionsStatus);
    }
    getRole(roleId) {
        this.isLoading = true;
        this.rolesService.getRoleById(roleId).subscribe(res => {
            this.permissionsStatus = res.permission;
            this.roleName = res.name;
            this.welcomeScreen = res.welcomeScreen;
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/roles']);
        });
    }
    onUpdate() {
        const data = {
            name: this.roleName,
            permission: this.permissionsStatus,
            welcomeScreen: this.welcomeScreen
        };
        this.rolesService.updateRole(this.roleId, data).subscribe(response => {
            // this.toastr.success(response.name + ' updated', 'Success');
            this.router.navigate(['/roles']);
        });
    }
    onSubmit() {
        const data = {
            name: this.roleName,
            permission: this.permissionsStatus,
            welcomeScreen: this.welcomeScreen
        };
        this.rolesService.addNewRole(data).subscribe(response => {
            // this.toastr.success(response.name + ' added!', 'Success');
            this.router.navigate(['/roles']);
        });
    }
    checkSubmit() {
        if (this.editForm) {
            this.onUpdate();
        }
        else {
            this.onSubmit();
        }
    }
    updatePermissionSet(index, permission, value) {
        const item = this.permissionsStatus[index];
        item[permission] = value;
        if (permission === 'write' && value) {
            item.read = true;
        }
        if (permission === 'read' && !value) {
            item.write = false;
        }
    }
    updateProfilePermissionSet(index, permission, value) {
        const item = this.permissionsStatus[index];
        item[permission] = value;
        if (permission === 'rateMiner') {
            if (value) {
                item.rateMiner = true;
                this.updatePermissionSet(index, 'read', true);
            }
            else {
                item.rateMiner = false;
                this.updatePermissionSet(index, 'read', false);
            }
        }
        if (permission === 'dealMapper') {
            if (value) {
                item.dealMapper = true;
                this.updatePermissionSet(index, 'read', true);
            }
            else {
                item.dealMapper = false;
                this.updatePermissionSet(index, 'read', false);
            }
        }
    }
    getObjectKeys(obj) {
        return Object.keys(obj);
    }
};
AddEditRoleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _service_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService }
];
AddEditRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-edit-role',
        template: _add_edit_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditRoleComponent);



/***/ }),

/***/ 25168:
/*!*****************************************************************!*\
  !*** ./src/app/layout/role/components/roles/roles.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesComponent": () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _roles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.component.html?ngResource */ 5347);
/* harmony import */ var _roles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.component.scss?ngResource */ 14272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/role.service */ 26316);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let RolesComponent = class RolesComponent {
    constructor(router, rolesService, cdr, jwtService, confirmationDialogService) {
        this.router = router;
        this.rolesService = rolesService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.confirmationDialogService = confirmationDialogService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isRoles = true;
        this.roles = [];
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
        this.isEditAccess = false;
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getAllRoles(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('roles');
        this.getAllRoles(this._state);
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllRoles(this._state);
    }
    getAllRoles(state) {
        this.isLoading = true;
        this.rolesService.getRoles(state).subscribe(response => {
            this.roles = response.results;
            if (this.roles.length == 0) {
                this.isRoles = false;
            }
            else {
                this.isRoles = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    refreshRoles() {
        this.getAllRoles(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editRole(roleId) {
        this.router.navigate(['/roles/edit-role/' + roleId]);
    }
    updateStatus(roleId, status) {
        let data = {
            isActive: !status
        };
        this.rolesService.updateRole(roleId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshRoles();
            }
        });
    }
    deleteRole(roleId) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this user ?')
            .then((confirmed) => {
            if (confirmed) {
                this.rolesService.deleteRole(roleId).subscribe(response => {
                    this.getAllRoles(this._state);
                });
            }
        });
    }
};
RolesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
RolesComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
RolesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-roles',
        template: _roles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_roles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RolesComponent);



/***/ }),

/***/ 75385:
/*!*************************************************************************!*\
  !*** ./src/app/layout/role/components/view-role/view-role.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRoleComponent": () => (/* binding */ ViewRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-role.component.html?ngResource */ 35800);
/* harmony import */ var _view_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-role.component.scss?ngResource */ 50999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/role.service */ 26316);









let ViewRoleComponent = class ViewRoleComponent {
    constructor(fb, rolesService, router, route, jwtService
    // public toastr: ToastrService
    ) {
        this.fb = fb;
        this.rolesService = rolesService;
        this.router = router;
        this.route = route;
        this.jwtService = jwtService;
        this.roleId = '';
        this.editForm = false;
        this.isLoading = false;
        this.modulesPermissions = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([]);
        this.webModules = [];
        this.route.params.subscribe(params => {
            if (params.roleId !== '' && params.roleId != null) {
                this.roleId = params.roleId;
                this.editForm = true;
            }
        });
    }
    ngOnInit() {
        this.getRole(this.roleId);
    }
    getRole(roleId) {
        this.isLoading = true;
        this.rolesService.getRoleById(roleId).subscribe(res => {
            this.permissionsStatus = res.permission;
            this.roleName = res.name;
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/roles']);
        });
    }
};
ViewRoleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _service_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService }
];
ViewRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-role',
        template: _view_role_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_view_role_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewRoleComponent);



/***/ }),

/***/ 41915:
/*!****************************************************!*\
  !*** ./src/app/layout/role/role-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleRoutingModule": () => (/* binding */ RoleRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-role/add-edit-role.component */ 97222);
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/roles/roles.component */ 25168);
/* harmony import */ var _components_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view-role/view-role.component */ 75385);






const routes = [
    {
        path: '',
        component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_1__.RolesComponent
    },
    {
        path: 'add-role',
        component: _components_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_0__.AddEditRoleComponent,
    },
    {
        path: 'edit-role/:roleId',
        component: _components_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_0__.AddEditRoleComponent,
    },
    {
        path: 'view-role/:roleId',
        component: _components_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_2__.ViewRoleComponent,
    }
];
let RoleRoutingModule = class RoleRoutingModule {
};
RoleRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], RoleRoutingModule);



/***/ }),

/***/ 8211:
/*!********************************************!*\
  !*** ./src/app/layout/role/role.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleModule": () => (/* binding */ RoleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-routing.module */ 41915);
/* harmony import */ var _components_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-edit-role/add-edit-role.component */ 97222);
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/roles/roles.component */ 25168);
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/role.service */ 26316);
/* harmony import */ var _shared_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/sortable.directive */ 8260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _components_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-role/view-role.component */ 75385);












let RoleModule = class RoleModule {
};
RoleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _components_add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_1__.AddEditRoleComponent,
            _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_2__.RolesComponent,
            _components_view_role_view_role_component__WEBPACK_IMPORTED_MODULE_6__.ViewRoleComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoleRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_5__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf,
        ],
        providers: [_shared_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader, _service_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService]
    })
], RoleModule);



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

/***/ 94221:
/*!********************************************!*\
  !*** ./src/app/shared/directives/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 8260);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 8260:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/sortable.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* binding */ NgbdSortableHeader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const rotate = { asc: 'desc', desc: 'asc', '': 'asc' };
let NgbdSortableHeader = class NgbdSortableHeader {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.sortable !== changes?.oldColumn?.currentValue && changes?.oldColumn?.currentValue !== changes?.oldColumn?.previousValue) {
            this.direction = '';
        }
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
};
NgbdSortableHeader.propDecorators = {
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    oldColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
NgbdSortableHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'th[sortable]',
        exportAs: 'NgbdSortableHeader',
        host: {
            '[class.asc]': 'direction === "asc"',
            '[class.desc]': 'direction === "desc"',
            '(click)': 'rotate()'
        }
    })
], NgbdSortableHeader);



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

/***/ 71989:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;

    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ }),

/***/ 36725:
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/role/components/add-edit-role/add-edit-role.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".form-check-input {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWVkaXQtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59Il19 */";

/***/ }),

/***/ 14272:
/*!******************************************************************************!*\
  !*** ./src/app/layout/role/components/roles/roles.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 50999:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/role/components/view-role/view-role.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJvbGUuY29tcG9uZW50LnNjc3MifQ== */";

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

/***/ 67553:
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/role/components/add-edit-role/add-edit-role.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'Roles and Permissions'\" [previousLink]=\"'roles'\" [heading]=\"'Add-Edit Role'\">\n    </app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Add | Edit Role\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <div *ngIf=\"!isLoading\" class=\"tab-inn\">\n                    <div class=\"table-responsive table-desi\">\n                        <div class=\"form-group\" style=\"margin: 10px 10px; \">\n                            <label class=\"bmd-label-floating\">Name</label>\n                            <input [(ngModel)]=\"roleName\" type=\"text\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <form class=\"form-group\" role=\"form\" novalidate (ngSubmit)=\"onSubmit()\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                                <tr class=\"text-center\">\n                                    <th>Module Items</th>\n                                    <th *ngIf=\"isSuperAdmin\">RateMiner</th>\n                                    <th *ngIf=\"isSuperAdmin\">DealMapper</th>\n                                    <th>Read</th>\n                                    <th>Read-Write</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <ng-container *ngFor=\"let item of permissionsStatus;\n                                    let i= index;\">\n                                    <tr class=\"text-center\">\n                                        <td>{{item.name | titlecase }}</td>\n                                        <td *ngIf=\"isSuperAdmin\">\n                                            <span>\n                                                <label class=\"switch\">\n                                                    <input type=\"checkbox\" [checked]=\"item.rateMiner\"\n                                                        (change)=\"updateProfilePermissionSet(i,'rateMiner',$event.target.checked)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </span>\n                                        </td>\n                                        <td *ngIf=\"isSuperAdmin\">\n                                            <span>\n                                                <label class=\"switch\">\n                                                    <input type=\"checkbox\" [checked]=\"item.dealMapper\"\n                                                        (change)=\"updateProfilePermissionSet(i,'dealMapper',$event.target.checked)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </span>\n                                        </td>\n                                        <td>\n                                            <span>\n                                                <label class=\"switch\">\n                                                    <input type=\"checkbox\" [checked]=\"item.read\"\n                                                        (change)=\"updatePermissionSet(i,'read',$event.target.checked)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </span>\n                                        </td>\n                                        <td>\n                                            <span>\n                                                <label class=\"switch\">\n                                                    <input type=\"checkbox\" [checked]=\"item.write\"\n                                                        (change)=\"updatePermissionSet(i,'write',$event.target.checked)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </span>\n                                        </td>\n\n                                    </tr>\n                                </ng-container>\n                            </tbody>\n                        </table>\n                        <div class=\"table-responsive table-desi\" *ngIf=\"permissionsStatus.length > 0\">\n                            <div class=\"form-group\" style=\"margin: 10px 10px; \">\n                                <label class=\"bmd-label-floating\">Welcome Screen</label>\n                                <select [(ngModel)]=\"welcomeScreen\" name=\"welcomeScreen\" class=\"form-control\">\n                                    <option *ngFor=\"let item of permissionsStatus;\n                                        let i= index;\" [value]=\"item.name\">{{item.name | titlecase }}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group mb-2 py-2 text-right\">\n                            <button type=\"button\" (click)=\"checkSubmit()\" class=\"btn\n                                btn-info\">Submit</button>\n                            <button type=\"button\" routerLink=\"/roles\" class=\"btn\n                                btn-secondary\">Cancel</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 5347:
/*!******************************************************************************!*\
  !*** ./src/app/layout/role/components/roles/roles.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Roles and Permissions'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2 search-header\">\n                        <div class=\"col-md-10 text-left mb-1 mb-md-0\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\"\n                                    [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\"\n                                    id=\"userstaffs\" class=\"form-control\"\n                                    placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2 text-center\">\n                            <button *ngIf=\"isEditAccess\" type=\"button\" routerLink=\"/roles/add-role\"\n                                class=\"btn btn-primary btn-block\">Add New Role</button>\n                        </div>\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isRoles;else table\">\n                        <p class=\"text-center\">No users found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th scope=\"col\">#</th> -->\n                                            <th scope=\"col\" sortable=\"name\"\n                                                (sort)=\"onSort($event)\">Title</th>\n                                            <!-- <th scope=\"col\" *ngIf=\"isEditAccess\">Active</th> -->\n                                            <th scope=\"col\" *ngIf=\"isEditAccess\">Edit</th>\n                                            <th scope=\"col\" *ngIf=\"isEditAccess\">Delete</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let role of roles; index as\n                                            i\">\n                                            <!-- <td>{{i+1}}</td> -->\n                                            <td>\n                                                <a [routerLink]=\"['view-role',role.id]\">\n                                                    {{role?.name}}\n                                                </a>\n                                            </td>\n                                            <!-- <td *ngIf=\"isEditAccess\">\n                                                <label class=\"switch\"\n                                                    *ngIf=\"role.isActive\">\n                                                    <input type=\"checkbox\"\n                                                        (click)=\"updateStatus(role.id,\n                                                        role.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\"\n                                                    *ngIf=\"!role.isActive\">\n                                                    <input type=\"checkbox\"\n                                                        (click)=\"updateStatus(role.id,\n                                                        role.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td> -->\n                                            <td *ngIf=\"isEditAccess\">\n                                                <div class=\"action-buttons\"><button\n                                                        (click)=\"editRole(role.id)\"><img\n                                                            src=\"assets/images/pencil.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td>\n                                            <td *ngIf=\"isEditAccess\">\n                                                <div class=\"action-buttons\">\n                                                    <button\n                                                        (click)=\"deleteRole(role.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination\n                                        [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\"\n                                        [pageSize]=\"_state.limit\"\n                                        [rotate]=\"true\" [maxSize]=\"5\"\n                                        [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshStaff()\">\n                                    </ngb-pagination>\n\n                                    <select class=\"custom-select\" style=\"width:\n                                        auto\" [(ngModel)]=\"_state.limit\"\n                                        (ngModelChange)=\"refreshStaff()\"\n                                        [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 35800:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/role/components/view-role/view-role.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'Roles and Permissions'\" [previousLink]=\"'roles'\" [heading]=\"'Role Details'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Role Details\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <div *ngIf=\"!isLoading\" class=\"tab-inn\">\n                    <div class=\"table-responsive table-desi\">\n                        <div class=\"form-group\" style=\"margin: 10px 10px; \">\n                            <label class=\"bmd-label-floating\">Name</label>\n                            <input [readOnly]=\"true\" [(ngModel)]=\"roleName\" type=\"text\"\n                                class=\"form-control\">\n                        </div>\n                    </div>\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Module Items</th>\n                                <th>Rateminer</th>\n                                <th>Dealmapper</th>\n                                <th>Read</th>\n                                <th>Read-Write</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <ng-container *ngFor=\"let item of permissionsStatus;\n                                let i= index;\">\n                                <tr>\n                                    <td>{{item.name | titlecase }}</td>\n                                    <td>\n                                        <span *ngIf=\"item.rateMiner\">Yes</span>\n                                        <span *ngIf=\"!item.rateMiner\">No</span>\n                                    </td>\n                                    <td>\n                                        <span *ngIf=\"item.dealMapper\">Yes</span>\n                                        <span *ngIf=\"!item.dealMapper\">No</span>\n                                    </td>\n                                    <td>\n                                        <span *ngIf=\"item.read\">Yes</span>\n                                        <span *ngIf=\"!item.read\">No</span>\n                                    </td>\n                                    <td>\n                                        <span *ngIf=\"item.write\">Yes</span>\n                                        <span *ngIf=\"!item.write\">No</span>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

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
//# sourceMappingURL=src_app_layout_role_role_module_ts.js.map