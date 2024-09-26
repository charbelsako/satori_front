"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_staff_staff_module_ts"],{

/***/ 13728:
/*!****************************************************************************!*\
  !*** ./src/app/layout/staff/components/add-member/add-member.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMemberComponent": () => (/* binding */ AddMemberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_member_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-member.component.html?ngResource */ 34755);
/* harmony import */ var _add_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-member.component.scss?ngResource */ 86303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _service_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/staff.service */ 37441);










let AddMemberComponent = class AddMemberComponent {
    constructor(route, cdr, router, fb, rolesServie, staffsService, toastrService) {
        this.route = route;
        this.cdr = cdr;
        this.router = router;
        this.fb = fb;
        this.rolesServie = rolesServie;
        this.staffsService = staffsService;
        this.toastrService = toastrService;
        this.roles = [];
        this.editForm = false;
        this.isLoading = false;
        this.editData = [];
        this.submitted = false;
        this.route.params.subscribe(params => {
            if (params.userId !== '' && params.userId != null) {
                this.userId = params.userId;
                this.editForm = true;
                this.getStaff(this.userId);
            }
        });
        if (this.editForm) {
            this.addEditForm = this.fb.group({
                name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-zA-Z\s]*$/)]],
                email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
                role: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                profile: [''],
                password: [null, [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(14),
                        this.regexValidator(/^(?=.*\d)(?=.*[@$!%*#~^\-+=])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/, { 'mainValidation': true }),
                        this.regexValidator(/^(?=.*\d).{1,}$/, { 'numberValidation': true }),
                        this.regexValidator(/^(?=.*[@$!%*#~^\-+=]).{1,}$/, { 'specialChar': true }),
                        this.regexValidator(/^(?=.*[a-z]).{1,}$/, { 'smallAlpha': true }),
                        this.regexValidator(/^(?=.*[A-Z]).{1,}$/, { 'capitalAlpha': true })
                    ]]
            });
        }
        else {
            this.addEditForm = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[a-zA-Z\s]*$/)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
                role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                profile: [''],
                password: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(14),
                        this.regexValidator(/^(?=.*\d)(?=.*[@$!%*#~^\-+=])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/, { 'mainValidation': true }),
                        this.regexValidator(/^(?=.*\d).{1,}$/, { 'numberValidation': true }),
                        this.regexValidator(/^(?=.*[@$!%*#~^\-+=]).{1,}$/, { 'specialChar': true }),
                        this.regexValidator(/^(?=.*[a-z]).{1,}$/, { 'smallAlpha': true }),
                        this.regexValidator(/^(?=.*[A-Z]).{1,}$/, { 'capitalAlpha': true })
                    ]],
            });
        }
    }
    regexValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
    ngOnInit() {
        this.getAllRoles();
    }
    getAllRoles() {
        this.rolesServie.getAllRoles().subscribe(response => {
            this.roles = response.results.filter(role => role.isActive == true);
            this.cdr.detectChanges();
        });
    }
    submitForm() {
        if (!this.addEditForm.valid) {
            this.submitted = true;
            return;
        }
        this.staffsService.addMember(this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                this.toastrService.success(response.name + ' added!', 'Success');
                this.router.navigate(['/employees']);
            }
        }, (error) => {
            this.toastrService.error(error.message);
        });
    }
    submitUpdateForm() {
        if (!this.addEditForm.valid) {
            this.submitted = true;
            return;
        }
        if (this.addEditForm.value.password == null || this.addEditForm.value.password == '') {
            this.editData = {
                name: this.addEditForm.value.name,
                email: this.addEditForm.value.email,
                role: this.addEditForm.value.role
            };
        }
        else {
            this.editData = this.addEditForm.value;
        }
        this.staffsService.updateMember(this.userId, this.editData).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                this.toastrService.success(response.name + ' Updated!', 'Success');
                this.router.navigate(['/employees']);
            }
        }, (error) => {
            this.toastrService.error(error.message);
        });
    }
    getStaff(userId) {
        this.isLoading = true;
        this.staffsService.getStaffById(userId).subscribe(response => {
            this.addEditForm.patchValue(response);
            this.addEditForm.patchValue({ role: response.role.id || response.role });
            this.isLoading = false;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/employees']);
        });
    }
};
AddMemberComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService },
    { type: _service_staff_service__WEBPACK_IMPORTED_MODULE_4__.StaffService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService }
];
AddMemberComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-member',
        template: _add_member_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_add_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddMemberComponent);



/***/ }),

/***/ 93070:
/*!**************************************************!*\
  !*** ./src/app/layout/staff/components/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMemberComponent": () => (/* reexport safe */ _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_0__.AddMemberComponent),
/* harmony export */   "StaffMembersComponent": () => (/* reexport safe */ _staff_members_staff_members_component__WEBPACK_IMPORTED_MODULE_1__.StaffMembersComponent),
/* harmony export */   "components": () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-member/add-member.component */ 13728);
/* harmony import */ var _staff_members_staff_members_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-members/staff-members.component */ 44);


const components = [_staff_members_staff_members_component__WEBPACK_IMPORTED_MODULE_1__.StaffMembersComponent, _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_0__.AddMemberComponent];




/***/ }),

/***/ 44:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/staff/components/staff-members/staff-members.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffMembersComponent": () => (/* binding */ StaffMembersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _staff_members_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-members.component.html?ngResource */ 66316);
/* harmony import */ var _staff_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-members.component.scss?ngResource */ 22986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/staff.service */ 37441);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/sortable.directive */ 22997);











let StaffMembersComponent = class StaffMembersComponent {
    constructor(router, staffsService, jwtService, cdr, confirmationDialogService) {
        this.router = router;
        this.staffsService = staffsService;
        this.jwtService = jwtService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.users = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isUsers = true;
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
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getStaffMembers(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('employees');
        this.getStaffMembers(this._state);
    }
    getStaffMembers(state) {
        // this.isLoading = true;
        this.staffsService.getStaffs(state).subscribe(response => {
            if (response && response.results) {
                this.users = response['results'];
                if (this.users.length == 0) {
                    this.isUsers = false;
                }
                else {
                    this.isUsers = true;
                }
                this.setState(response);
                this.isLoading = false;
            }
            ;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
        });
    }
    refreshStaff() {
        this.getStaffMembers(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editUser(id) {
        this.router.navigate(['/employees/edit-employee/' + id]);
    }
    updateStatus(userId, status) {
        let data = {
            isActive: !status
        };
        this.staffsService.updateMember(userId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshStaff();
            }
        });
    }
    deleteUser(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this user ?')
            .then((confirmed) => {
            if (confirmed) {
                this.staffsService.deleteUser(id).subscribe(response => {
                    this.getStaffMembers(this._state);
                });
            }
        });
    }
    onSort({ column, direction }) {
        console.log(column, direction);
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getStaffMembers(this._state);
    }
};
StaffMembersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_staff_service__WEBPACK_IMPORTED_MODULE_4__.StaffService },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__.JwtService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogService }
];
StaffMembersComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_6__.NgbdSortableHeader,] }]
};
StaffMembersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-staff-members',
        template: _staff_members_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_staff_members_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StaffMembersComponent);



/***/ }),

/***/ 66293:
/*!******************************************************************************!*\
  !*** ./src/app/layout/staff/components/view-member/view-member.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMemberComponent": () => (/* binding */ ViewMemberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_member_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-member.component.html?ngResource */ 75508);
/* harmony import */ var _view_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-member.component.scss?ngResource */ 14174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/staff.service */ 37441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services */ 17253);








let ViewMemberComponent = class ViewMemberComponent {
    constructor(route, staffsService, cdr, jwtService, router) {
        this.route = route;
        this.staffsService = staffsService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.router = router;
        this.isEditAccess = false;
        this.route.params.subscribe(params => {
            if (params.userId !== '' && params.userId != null) {
                this.userId = params.userId;
                this.getStaff(this.userId);
            }
        });
    }
    ngOnInit() {
        this.isEditAccess = this.jwtService.checkAccess('employees');
    }
    getStaff(userId) {
        this.isLoading = true;
        this.staffsService.getStaffById(userId).subscribe(response => {
            this.userDetails = response;
            console.log(this.userDetails);
            this.isLoading = false;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/employees']);
        });
    }
    editUser(id) {
        this.router.navigate(['/employees/edit-employee/' + id]);
    }
};
ViewMemberComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _service_staff_service__WEBPACK_IMPORTED_MODULE_2__.StaffService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_4__.JwtService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ViewMemberComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-member',
        template: _view_member_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_view_member_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewMemberComponent);



/***/ }),

/***/ 301:
/*!**************************************************!*\
  !*** ./src/app/layout/staff/directives/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 22997);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 22997:
/*!***************************************************************!*\
  !*** ./src/app/layout/staff/directives/sortable.directive.ts ***!
  \***************************************************************/
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
        if (this.sortable) {
            if (this.direction === 'asc') {
                this.direction = 'desc';
            }
            else if (this.direction === 'desc') {
                this.direction = '';
            }
            else {
                this.direction = 'asc';
            }
            this.sort.emit({ column: this.sortable, direction: this.direction });
        }
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

/***/ 37441:
/*!*******************************************************!*\
  !*** ./src/app/layout/staff/service/staff.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffService": () => (/* binding */ StaffService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let StaffService = class StaffService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getStaffs(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/staffs?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/staffs?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getSearchStaffs(data, responsibleBillingManagerId) {
        if (data.searchTerm == '') {
            return this.apiService.post(`/staffs/search?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`, { responsibleBillingManagerId });
        }
        else {
            return this.apiService.post(`/staffs/search?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, { responsibleBillingManagerId });
        }
    }
    addMember(data) {
        return this.apiService.post(`/staffs`, data);
    }
    updateMember(id, data) {
        return this.apiService.patch(`/staffs/${id}`, data);
    }
    getStaffById(data) {
        return this.apiService.get(`/staffs/` + data);
    }
    deleteUser(data) {
        return this.apiService.delete(`/staffs/` + data);
    }
    getActivity(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/staffs/activity/all?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/staffs/activity/all?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
};
StaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
StaffService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], StaffService);



/***/ }),

/***/ 33189:
/*!******************************************************!*\
  !*** ./src/app/layout/staff/staff-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffRoutingModule": () => (/* binding */ StaffRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 93070);
/* harmony import */ var _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-member/add-member.component */ 13728);
/* harmony import */ var _components_view_member_view_member_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view-member/view-member.component */ 66293);






const routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_0__.StaffMembersComponent
    },
    {
        path: 'add-employee',
        component: _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__.AddMemberComponent
    },
    {
        path: 'edit-employee/:userId',
        component: _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__.AddMemberComponent
    },
    {
        path: 'view-employee/:userId',
        component: _components_view_member_view_member_component__WEBPACK_IMPORTED_MODULE_2__.ViewMemberComponent
    }
];
let StaffRoutingModule = class StaffRoutingModule {
};
StaffRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], StaffRoutingModule);



/***/ }),

/***/ 64125:
/*!**********************************************!*\
  !*** ./src/app/layout/staff/staff.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffModule": () => (/* binding */ StaffModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-routing.module */ 33189);
/* harmony import */ var _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-member/add-member.component */ 13728);
/* harmony import */ var _components_staff_members_staff_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/staff-members/staff-members.component */ 44);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/staff.service */ 37441);
/* harmony import */ var _components_view_member_view_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/view-member/view-member.component */ 66293);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives */ 301);












let StaffModule = class StaffModule {
};
StaffModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _components_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_1__.AddMemberComponent,
            _components_staff_members_staff_members_component__WEBPACK_IMPORTED_MODULE_2__.StaffMembersComponent,
            _components_view_member_view_member_component__WEBPACK_IMPORTED_MODULE_5__.ViewMemberComponent,
            _directives__WEBPACK_IMPORTED_MODULE_6__.NgbdSortableHeader
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf
        ],
        providers: [_service_staff_service__WEBPACK_IMPORTED_MODULE_4__.StaffService]
    })
], StaffModule);



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

/***/ 86303:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/staff/components/add-member/add-member.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 22986:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/staff/components/staff-members/staff-members.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "th[sortable] {\n  cursor: pointer;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\nth[sortable].desc:before,\nth[sortable].asc:before {\n  content: \"\";\n  display: block;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC\") no-repeat;\n  background-size: 22px;\n  width: 22px;\n  height: 22px;\n  float: right;\n}\n\nth[sortable].desc:before {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLW1lbWJlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0Q7O0FBRUE7O0VBRUMsV0FBQTtFQUNBLGNBQUE7RUFDQSwyOEJBQUE7RUFFQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFEOztBQUdBO0VBQ0MseUJBQUE7RUFDQSw2QkFBQTtBQUFEIiwiZmlsZSI6InN0YWZmLW1lbWJlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aFtzb3J0YWJsZV0ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG50aFtzb3J0YWJsZV0uZGVzYzpiZWZvcmUsXG50aFtzb3J0YWJsZV0uYXNjOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRkaXNwbGF5OiBibG9jaztcblx0YmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUFteEpSRUZVZUFIdG1rc3JSVkVVeDcyZkg4Q0lHUU5Ka3BHVVVtYWtERWlaU0pSSVpzUlFtQ2tUSlJtWm1KZ1FFMGtwWDBENURKS0pnZmY3ditydTJ1M08zdnZjNjdUT3ZzZGF0ZHJublAxWS8vL3Y3SHZ2dWJkYlVpSWhCSVNBRUJBQ1FrQUlDQUVoSUFRNENYU2gyRG55RGZtQ1BFRzJJdjlGOU1QbE0vTEh5QWVjZHlNekhZTndSM2ZkTksvT0g5SFhsMVVDb3pEMjRUQ3ZJTHhpekVEV0lFekEwRmNNOHdvQ2dSckpDb1M1UEl3ckFOUVNNQUpYMUxFSTlicXBRbzRKWU5GRktSU3ZJZ3N4SERWbnFaZ0lrUG5OQk0wcklHdFlrOVlPT3NxZ2JnZXBSQ2ZkYm1GdHFoRmtWRURWUGpKcDArWjZlNmhSSGhxQktnZzZaREN2WUJ5Z1ZtVW9FR29oNUpUUnZJSndoSm8xYVVPb2g0Q0xQTXl2eHhpN0VXT01nbkNHc1hYSTFHSVhsWlVZWDd1Y1Ura2JSOE5XOGxoM083Y3VlMFBrMzJNS25kZlV4UUZBd3hkaXJrM2ZIYXBwQW5jMG9xRFB6RGZHVEJyQ2ZIUDA0ZE00b1RWOGN4cjBTVnpIOUZGMDd4RDNpYjZ4Q0RFK00rYVVjVnlndFd6emJ0R1gyclBCckVVWWZlY2ZRa2FGellpNkhqVm5HQmR0TDdlcHFBbGMxK2pSZEFhcDc0UnJuUGM0QkNpanR0WTJ0UmNkTjBnMTd3N0hxWnJYaGRKVFlBdVMzaGQ4eit2S2dLM1YxeldQYWUwbVpETXlrYWRCbjFoVFFCTG5aTndWckpwU2UvTndFZURzRXdDY3RFT3NKVHNneEx2Q3FVbDJBQ2Z0RUd2SkRnanhybkJxa2gzQVNUdkVXcklEUXJ3cm5KcGtCM0RTRHJHVzdJQVE3d3FuSnRrQm5MUnp0ZWpYWFZ1NCtteHovblE5alIxdzVWQjg2ZWpMVEZjbm5Ed2h6VitGNlQrQ0habHg2VEhTam43NmV5eUJJT1BIeURha2hCQVFBa0pBQ0FnQklTQUVoSUFRWUNMd0M4SnhwQW1zRUd0NkFBQUFBRWxGVGtTdVFtQ0MnKVxuXHRcdG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiAyMnB4O1xuXHR3aWR0aDogMjJweDtcblx0aGVpZ2h0OiAyMnB4O1xuXHRmbG9hdDogcmlnaHQ7XG59XG5cbnRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */";

/***/ }),

/***/ 14174:
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/staff/components/view-member/view-member.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */";

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

/***/ 34755:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/staff/components/add-member/add-member.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'Employees'\" [previousLink]=\"'employees'\" [heading]=\"'Add | Edit Employee'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                 Employee Details\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" autocomplete=\"off\">\n                    <div class=\"row mb-2\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['name'].errors && (submitted || addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['name'].errors?.required || addEditForm.controls['name'].errors?.pattern\">\n                                    * Name is required and need to be a valid string.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"email\" autocomplete=\"off\" formControlName=\"email\" class=\"form-control form-control-lg\">\n                            <div\n                                *ngIf=\"addEditForm.controls['email'].errors && (submitted || addEditForm.controls['email'].dirty || addEditForm.controls['email'].touched) || addEditForm.controls['email'].hasError('email')\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['email'].errors?.required || addEditForm.controls['email'].errors?.email\">\n                                    * Email is required and need to valid email.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row mb-2\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"role\">Role</label>\n                            <select class=\"form-control form-control-lg\" formControlName=\"role\">\n                                <option value=\"\"  disabled>Select Role</option>\n                                <option *ngFor=\"let role of roles\" value=\"{{role.id}}\">{{role?.name}}</option>\n                            </select>\n                            <div\n                                *ngIf=\"addEditForm.controls['role'].errors && (submitted || addEditForm.controls['role'].dirty || addEditForm.controls['role'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['role'].errors?.required\">\n                                    * Role is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"role\">Profile</label>\n                            <select class=\"form-control form-control-lg\" formControlName=\"profile\">\n                                <option value=\"\" selected disabled>Select Profile</option>\n                                <option value=\"rateMiner\">Rate Miner</option>\n                                <option value=\"dealMapper\">Deal Mapper</option>\n                            </select>\n                            <div\n                                *ngIf=\"addEditForm.controls['role'].errors && (submitted || addEditForm.controls['role'].dirty || addEditForm.controls['role'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['role'].errors?.required\">\n                                    * Role is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" class=\"form-control form-control-lg\" formControlName=\"password\"\n                                placeholder=\"Password\" autocomplete=\"off\">\n                            <div\n                                *ngIf=\"addEditForm.controls['password'].errors && (submitted || addEditForm.controls['password'].dirty || addEditForm.controls['password'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['password'].errors?.mainValidation || addEditForm.controls['password'].errors?.required\">\n                                    <span *ngIf=\"addEditForm.controls['password'].errors?.required\">• The passowrd is required<br/></span>\n                                    <span *ngIf=\"addEditForm.controls['password'].errors?.minlength || addEditForm.controls['password'].errors?.maxlength\">• The passowrd must contain (8 - 14 characters)<br/></span>\n                                    <span *ngIf=\"addEditForm.controls['password'].errors?.capitalAlpha\">• Uppercase characters (A-Z)<br/></span>\n                                    <span *ngIf=\"addEditForm.controls['password'].errors?.smallAlpha\">• Lowercase characters (a-z)<br/></span>\n                                    <span *ngIf=\"addEditForm.controls['password'].errors?.numberValidation\">• Digits (0-9)<br/></span>\n                                    <span *ngIf=\"addEditForm.controls['password'].errors?.specialChar\">• Special characters (@ $ ! % * # ~ ^ - + =)</span>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-5 py-2 text-right\">\n                        <button type=\"submit\" *ngIf=\"editForm\" (click)=\"submitUpdateForm()\" class=\"btn btn-info\">Update\n                            Employee</button>\n                        <button type=\"submit\" *ngIf=\"!editForm\" (click)=\"submitForm()\" class=\"btn btn-info\">Add\n                            Employee</button>\n                        <button type=\"button\" routerLink=\"/employees\" class=\"btn btn-secondary\">Cancel</button>\n                    </div>\n        \n                </form>\n            </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ }),

/***/ 66316:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/staff/components/staff-members/staff-members.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Employees'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2 search-header\">\n                        <div class=\"col-md-10 text-left mb-1 mb-sm-0\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"userstaffs\" class=\"form-control\"\n                                    placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2 text-center\">\n                            <button *ngIf=\"isEditAccess\" type=\"button\" routerLink=\"/employees/add-employee\" class=\"btn btn-primary btn-block\">Add Employee</button>\n                        </div>\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isUsers;else table\">\n                        <p class=\"text-center\">No users found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th scope=\"col\">#</th> -->\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Name</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"email\" (sort)=\"onSort($event)\">Email</th>\n                                            <th scope=\"col\"  [oldColumn] = \"_state.sortColumn\" sortable=\"role\" (sort)=\"onSort($event)\">Role</th>\n                                            <th scope=\"col\" *ngIf=\"isEditAccess\">Active</th>\n                                            <th scope=\"col\" *ngIf=\"isEditAccess\">Edit</th>\n                                            <th scope=\"col\" *ngIf=\"isEditAccess\">Delete</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let user of users; index as i\">\n                                            <!-- <th scope=\"row\">{{ i + 1 }}</th> -->\n                                            <td>\n                                                <a [routerLink]=\"['view-employee',user.id]\">\n                                                    {{user?.name}}\n                                                </a>\n                                            </td>\n                                            <td>{{user?.email}}</td>\n                                            <td>{{user?.role?.name}}</td>\n                                            <td *ngIf=\"isEditAccess\">\n                                                <label class=\"switch\" *ngIf=\"user.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(user.id, user.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!user.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(user.id, user.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td *ngIf=\"isEditAccess\">\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(user.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td *ngIf=\"isEditAccess\">\n                                                <div class=\"action-buttons\">\n                                                    <button\n                                                        (click)=\"deleteUser(user.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td>\n                                    \n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshStaff()\">\n                                    </ngb-pagination>\n                            \n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refreshStaff()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n                \n      \n    </div>  \n</div>\n  ";

/***/ }),

/***/ 75508:
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/staff/components/view-member/view-member.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'Employees'\" [previousLink]=\"'employees'\" [heading]=\"'View Employee'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                 Employee Details\n                 <button *ngIf=\"isEditAccess\" style=\"float: right;\" (click)=\"editUser(userDetails.id)\" class=\"btn btn-info\">Edit</button>\n            </div>\n            \n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <ng-container *ngIf=\"!isLoading\">\n                    <div class=\"container\">\n                        <div class=\"form-group\">\n                            <label class=\"col-md-4\">Name:</label>\n                            <label class=\"col-md-4\">{{userDetails?.name}}</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-4\">Email:</label>\n                            <label class=\"col-md-4\">{{userDetails?.email}}</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-4\">Role:</label>\n                            <label class=\"col-md-4\">{{userDetails?.role?.name}}</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-4\">Profile:</label>\n                            <label class=\"col-md-4\">{{userDetails?.profile | titlecase}}</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-md-4\">Created:</label>\n                            <label class=\"col-md-4\">{{userDetails?.createdAt | date:'medium'}}</label>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </div>  \n</div>\n  ";

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
//# sourceMappingURL=src_app_layout_staff_staff_module_ts.js.map