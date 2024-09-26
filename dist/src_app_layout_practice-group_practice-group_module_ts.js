"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_practice-group_practice-group_module_ts"],{

/***/ 73691:
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/practice-group/components/add-edit-practice-group/add-edit-practice-group.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditPracticeGroupComponent": () => (/* binding */ AddEditPracticeGroupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_practice_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-practice-group.component.html?ngResource */ 63515);
/* harmony import */ var _add_edit_practice_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-practice-group.component.scss?ngResource */ 52032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _service_practice_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/practice-group.service */ 85307);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _app_layout_area_of_law_service_area_of_law_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layout/area-of-law/service/area-of-law.service */ 68870);










let AddEditPracticeGroupComponent = class AddEditPracticeGroupComponent {
    constructor(router, fb, route, areaOfLawService, practiceGroupService, toastr) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.areaOfLawService = areaOfLawService;
        this.practiceGroupService = practiceGroupService;
        this.toastr = toastr;
        this.editForm = false;
        this.isLoading = false;
        this.areaOfLaws = [];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getPracticeGroup(this.tempId);
            }
            else {
                this.isLoading = true;
                this.getAreaOfLaw();
            }
        });
        this.addEditForm = fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            areaOfLawId: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    ngOnInit() {
    }
    getAreaOfLaw() {
        this.areaOfLawService.getAreaOfLaws({
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        }).subscribe(response => {
            this.areaOfLaws = response['results'];
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    getPracticeGroup(tempId) {
        this.isLoading = true;
        this.practiceGroupService.getPracticeGroupById(tempId).subscribe(response => {
            this.addEditForm.patchValue({ ...response, areaOfLawId: response?.areaOfLawId?.map((areaOfLaw) => areaOfLaw?.id || areaOfLaw) || [] });
            this.getAreaOfLaw();
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/data-mangement/practice-groups']);
        });
    }
    onSubmit() {
        this.practiceGroupService.addPracticeGroups(this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                //this.toastr.success(response.title + ' added!', 'Success');
                this.newItemEvent.emit();
                //this.router.navigate(['/data-mangement/practice-groups']);
            }
        });
    }
    cancelEvent() {
        this.addEditForm.reset();
        this.newItemEvent.emit();
    }
    onUpdate() {
        this.practiceGroupService.updatePracticeGroup(this.tempId, this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                // this.toastr.success(response.title + ' Updated!', 'Success');
                this.router.navigate(['/data-mangement/practice-groups']);
            }
        });
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
};
AddEditPracticeGroupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _app_layout_area_of_law_service_area_of_law_service__WEBPACK_IMPORTED_MODULE_4__.AreaOfLawService },
    { type: _service_practice_group_service__WEBPACK_IMPORTED_MODULE_3__.PracticeGroupService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService }
];
AddEditPracticeGroupComponent.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
AddEditPracticeGroupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-edit-practice-group',
        template: _add_edit_practice_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_practice_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditPracticeGroupComponent);



/***/ }),

/***/ 20901:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/practice-group/components/practice-group/practice-group.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeGroupComponent": () => (/* binding */ PracticeGroupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _practice_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice-group.component.html?ngResource */ 81504);
/* harmony import */ var _practice_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./practice-group.component.scss?ngResource */ 59178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_practice_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/practice-group.service */ 85307);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let PracticeGroupComponent = class PracticeGroupComponent {
    constructor(router, practiceGroupService, cdr, jwtService, confirmationDialogService) {
        this.router = router;
        this.practiceGroupService = practiceGroupService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.confirmationDialogService = confirmationDialogService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.practiceGroups = [];
        this.isPracticeGroups = true;
        this.isLoading = false;
        this._state = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this.isEditAccess = false;
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getPracticeGroups(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('data-mangement');
        this.getPracticeGroups(this._state);
    }
    reload() {
        window.scrollTo(0, 400);
        this.getPracticeGroups(this._state);
    }
    getPracticeGroups(state) {
        this.isLoading = true;
        this.practiceGroupService.getPracticeGroups(state).subscribe(response => {
            this.practiceGroups = response['results'];
            this.setState(response);
            if (this.practiceGroups.length == 0) {
                this.isPracticeGroups = false;
            }
            else {
                this.isPracticeGroups = true;
            }
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    editPracticeGroup(id) {
        this.router.navigate(['/data-mangement/practice-groups/edit-practice-group/' + id]);
    }
    deletePracticeGroup(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this practice group ?')
            .then((confirmed) => {
            if (confirmed) {
                this.practiceGroupService.deletePracticeGroup(id).subscribe(response => {
                    this.getPracticeGroups(this._state);
                });
            }
        });
    }
    onSort({ column, direction }) {
        alert(column);
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getPracticeGroups(this._state);
    }
    refresh() {
        this.getPracticeGroups(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
PracticeGroupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_practice_group_service__WEBPACK_IMPORTED_MODULE_5__.PracticeGroupService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
PracticeGroupComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['content',] }]
};
PracticeGroupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-practice-group',
        template: _practice_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_practice_group_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PracticeGroupComponent);



/***/ }),

/***/ 68315:
/*!************************************************************************!*\
  !*** ./src/app/layout/practice-group/practice-group-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeGroupRoutingModule": () => (/* binding */ PracticeGroupRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_practice_group_add_edit_practice_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-practice-group/add-edit-practice-group.component */ 73691);
/* harmony import */ var _components_practice_group_practice_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/practice-group/practice-group.component */ 20901);





const routes = [
    {
        path: '',
        component: _components_practice_group_practice_group_component__WEBPACK_IMPORTED_MODULE_1__.PracticeGroupComponent
    },
    {
        path: 'add-practice-group',
        component: _components_add_edit_practice_group_add_edit_practice_group_component__WEBPACK_IMPORTED_MODULE_0__.AddEditPracticeGroupComponent
    },
    {
        path: 'edit-practice-group/:tempId',
        component: _components_add_edit_practice_group_add_edit_practice_group_component__WEBPACK_IMPORTED_MODULE_0__.AddEditPracticeGroupComponent
    }
];
let PracticeGroupRoutingModule = class PracticeGroupRoutingModule {
};
PracticeGroupRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PracticeGroupRoutingModule);



/***/ }),

/***/ 59229:
/*!****************************************************************!*\
  !*** ./src/app/layout/practice-group/practice-group.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeGroupModule": () => (/* binding */ PracticeGroupModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _practice_group_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice-group-routing.module */ 68315);
/* harmony import */ var _components_practice_group_practice_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/practice-group/practice-group.component */ 20901);
/* harmony import */ var _components_add_edit_practice_group_add_edit_practice_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-practice-group/add-edit-practice-group.component */ 73691);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_practice_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/practice-group.service */ 85307);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives */ 94221);
/* harmony import */ var _area_of_law_service_area_of_law_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../area-of-law/service/area-of-law.service */ 68870);












let PracticeGroupModule = class PracticeGroupModule {
};
PracticeGroupModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _components_practice_group_practice_group_component__WEBPACK_IMPORTED_MODULE_1__.PracticeGroupComponent,
            _components_add_edit_practice_group_add_edit_practice_group_component__WEBPACK_IMPORTED_MODULE_2__.AddEditPracticeGroupComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _practice_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.PracticeGroupRoutingModule,
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
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_practice_group_service__WEBPACK_IMPORTED_MODULE_4__.PracticeGroupService, _area_of_law_service_area_of_law_service__WEBPACK_IMPORTED_MODULE_6__.AreaOfLawService]
    })
], PracticeGroupModule);



/***/ }),

/***/ 85307:
/*!*************************************************************************!*\
  !*** ./src/app/layout/practice-group/service/practice-group.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PracticeGroupService": () => (/* binding */ PracticeGroupService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);



let PracticeGroupService = class PracticeGroupService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getPracticeGroups(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/practice-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/practice-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    addPracticeGroups(data) {
        return this.apiService.post(`/practice-group`, data);
    }
    getPracticeGroupById(data) {
        return this.apiService.get(`/practice-group/${data}`);
    }
    deletePracticeGroup(data) {
        return this.apiService.delete(`/practice-group/${data}`);
    }
    updatePracticeGroup(practiceGroupId, data) {
        return this.apiService.patch(`/practice-group/${practiceGroupId}`, data);
    }
};
PracticeGroupService.ctorParameters = () => [
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
PracticeGroupService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], PracticeGroupService);



/***/ }),

/***/ 52032:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/layout/practice-group/components/add-edit-practice-group/add-edit-practice-group.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".ck.ck-content {\n  border: 2px solid #707070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXByYWN0aWNlLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJhZGQtZWRpdC1wcmFjdGljZS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay5jay1jb250ZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 59178:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/practice-group/components/practice-group/practice-group.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmFjdGljZS1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 63515:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/layout/practice-group/components/add-edit-practice-group/add-edit-practice-group.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] *ngIf=\"editForm\">\n    <app-page-header [heading]=\"'Add | Edit Practice Group'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Practice Group\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>x\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Name *</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Name is required.\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Area Of Law *</label>\n                                <select formControlName=\"areaOfLawId\" class=\"form-control\" multiple size=\"10\" >\n                                    <option *ngFor=\"let areaOfLaw of areaOfLaws; let i = index;\" [value]=\"areaOfLaw.id\">\n                                        {{areaOfLaw.name}} - {{areaOfLaw.aol_code}}\n                                    </option>\n                                </select>\n                                <div\n                                    *ngIf=\"addEditForm.controls['areaOfLawId'].errors && (addEditForm.controls['areaOfLawId'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['areaOfLawId'].errors?.required\">\n                                        * Area Of Law is required.\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                                Practice Group</button>\n                            <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                                Practice Group</button>\n                            <button type=\"button\" routerLink=\"/data-mangement/practice-groups\"\n                                class=\"btn btn-secondary\">Cancel</button>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group mb-2 py-2 text-right\">\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"card\" *ngIf=\"!editForm\">\n    <div class=\"card-header\">\n        Practice Group\n    </div>\n    <div class=\"card-body\">\n        <ng-container *ngIf=\"isLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n     \n                    <div class=\"row align-items-center\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Title *</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Name is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Area Of Law *</label>\n                                <select formControlName=\"areaOfLawId\" class=\"form-control\" multiple>\n                                    <option *ngFor=\"let areaOfLaw of areaOfLaws; let i = index;\" [value]=\"areaOfLaw.id\">\n                                        {{areaOfLaw.name}} - {{areaOfLaw.aol_code}}\n                                    </option>\n                                </select>\n                                <div\n                                    *ngIf=\"addEditForm.controls['areaOfLawId'].errors && (addEditForm.controls['areaOfLawId'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['areaOfLawId'].errors?.required\">\n                                        * Area Of Law is required.\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-md-12\">\n                            <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                                Practice Group</button>\n                            <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                                Practice Group</button>\n                            <button type=\"button\" (click)=\"cancelEvent()\"\n                                class=\"btn btn-outline-secondary\">Cancel</button>\n                        </div>\n                    </div>\n\n\n             \n\n        </form>\n    </div>\n</div>";

/***/ }),

/***/ 81504:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/practice-group/components/practice-group/practice-group.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Practice Groups'\"></app-page-header>\n  <div class=\"container-fluid mt-2\" [@routerTransition] #content>\n    <app-add-edit-practice-group *ngIf=\"isEditAccess\" (newItemEvent)=\"reload()\"></app-add-edit-practice-group>\n    <div class=\"card min-height-500 mt-3 card-2 bg-transparent\">\n      <div class=\"card-body\">\n        <div class=\"row mb-2 search-header\">\n          <div class=\"col-md-12 text-left\">\n            <div class=\"form-group mb-1\">\n              <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                (ngModelChange)=\"this.searchTermUpdate.next($event)\" class=\"form-control\" placeholder=\"Search here...\">\n            </div>\n          </div>\n          <!-- <div class=\"col-md-2 text-center\">\n                    <button type=\"button\" routerLink=\"/practice-groups/add-practice-group\" class=\"btn btn-primary\">Add PracticeGroup</button>\n                  </div> -->\n        </div>\n        <ng-container *ngIf=\"isLoading\">\n          <div class=\"text-center\">\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </ng-container>\n        <div *ngIf=\"!isPracticeGroups;else table\">\n          <p class=\"text-center\">No Practice Group found</p>\n        </div>\n        <ng-template #table>\n          <div *ngIf=\"!isLoading\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <!-- <th width=\"60\">#</th> -->\n                  <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\"><span>Name</span></th>\n                  <th scope=\"col\"><span>Area of Law</span></th>\n                  <th *ngIf=\"isEditAccess\" scope=\"col\" width=\"100\">Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let practiceGroup of practiceGroups; let i = index\">\n                  <!-- <td>{{i+1}}</td> -->\n                  <td>{{practiceGroup?.name}}</td>\n                  <td>\n                    <div *ngFor=\"let areaOfLaw of practiceGroup.areaOfLawId; let ii = index\">{{areaOfLaw.name}}-\n                      {{areaOfLaw.aol_code}}</div>\n                  </td>\n                  <td *ngIf=\"isEditAccess\">\n                    <div class=\"action-buttons\"><button (click)=\"editPracticeGroup(practiceGroup.id)\"><img\n                          src=\"assets/images/pencil.svg\" alt=\"\"></button>\n                      <button (click)=\"deletePracticeGroup(practiceGroup.id)\"><img\n                          src=\"assets/images/icons8-trash-can.svg\" alt=\"\"></button>\n                    </div>\n                  </td>\n\n                </tr>\n              </tbody>\n            </table>\n            <!-- <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refresh()\">\n                      </ngb-pagination>\n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refresh()\">\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                        <option [ngValue]=\"30\">30 items per page</option>\n                      </select>\n                    </div> -->\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_practice-group_practice-group_module_ts.js.map