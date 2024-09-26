"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_area-of-law_area-of-law_module_ts"],{

/***/ 91380:
/*!******************************************************************!*\
  !*** ./src/app/layout/area-of-law/area-of-law-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfLawRoutingModule": () => (/* binding */ AreaOfLawRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_area_of_law_add_edit_area_of_law_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-area-of-law/add-edit-area-of-law.component */ 7602);
/* harmony import */ var _components_area_of_law_area_of_law_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/area-of-law/area-of-law.component */ 82502);





const routes = [
    {
        path: '',
        component: _components_area_of_law_area_of_law_component__WEBPACK_IMPORTED_MODULE_1__.AreaOfLawComponent
    },
    {
        path: 'add-area-of-law',
        component: _components_add_edit_area_of_law_add_edit_area_of_law_component__WEBPACK_IMPORTED_MODULE_0__.AddEditAreaOfLawComponent
    },
    {
        path: 'edit-area-of-law/:tempId',
        component: _components_add_edit_area_of_law_add_edit_area_of_law_component__WEBPACK_IMPORTED_MODULE_0__.AddEditAreaOfLawComponent
    }
];
let AreaOfLawRoutingModule = class AreaOfLawRoutingModule {
};
AreaOfLawRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AreaOfLawRoutingModule);



/***/ }),

/***/ 82543:
/*!**********************************************************!*\
  !*** ./src/app/layout/area-of-law/area-of-law.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfLawModule": () => (/* binding */ AreaOfLawModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _area_of_law_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-law-routing.module */ 91380);
/* harmony import */ var _components_area_of_law_area_of_law_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/area-of-law/area-of-law.component */ 82502);
/* harmony import */ var _components_add_edit_area_of_law_add_edit_area_of_law_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-area-of-law/add-edit-area-of-law.component */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_area_of_law_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/area-of-law.service */ 68870);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives */ 94221);











let AreaOfLawModule = class AreaOfLawModule {
};
AreaOfLawModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_area_of_law_area_of_law_component__WEBPACK_IMPORTED_MODULE_1__.AreaOfLawComponent,
            _components_add_edit_area_of_law_add_edit_area_of_law_component__WEBPACK_IMPORTED_MODULE_2__.AddEditAreaOfLawComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _area_of_law_routing_module__WEBPACK_IMPORTED_MODULE_0__.AreaOfLawRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf
        ],
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_area_of_law_service__WEBPACK_IMPORTED_MODULE_4__.AreaOfLawService]
    })
], AreaOfLawModule);



/***/ }),

/***/ 7602:
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/area-of-law/components/add-edit-area-of-law/add-edit-area-of-law.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditAreaOfLawComponent": () => (/* binding */ AddEditAreaOfLawComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_area_of_law_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-area-of-law.component.html?ngResource */ 70266);
/* harmony import */ var _add_edit_area_of_law_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-area-of-law.component.scss?ngResource */ 35764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _service_area_of_law_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/area-of-law.service */ 68870);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);









let AddEditAreaOfLawComponent = class AddEditAreaOfLawComponent {
    constructor(router, fb, route, areaOfLawService, toastr) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.areaOfLawService = areaOfLawService;
        this.toastr = toastr;
        this.editForm = false;
        this.isLoading = false;
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getAreaOfLaw(this.tempId);
            }
        });
        this.addEditForm = fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            aol_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
    }
    getAreaOfLaw(tempId) {
        this.isLoading = true;
        this.areaOfLawService.getAreaOfLawById(tempId).subscribe(response => {
            this.addEditForm.patchValue(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/data-mangement/area-of-law']);
        });
    }
    onSubmit() {
        this.areaOfLawService.addAreaOfLaws(this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                //this.toastr.success(response.title + ' added!', 'Success');
                this.newItemEvent.emit();
                //this.router.navigate(['/data-mangement/area-of-law']);
            }
        });
    }
    cancelEvent() {
        this.addEditForm.reset();
        this.newItemEvent.emit();
    }
    onUpdate() {
        this.areaOfLawService.updateAreaOfLaw(this.tempId, this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                // this.toastr.success(response.title + ' Updated!', 'Success');
                this.router.navigate(['/data-mangement/area-of-laws']);
            }
        });
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
};
AddEditAreaOfLawComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_area_of_law_service__WEBPACK_IMPORTED_MODULE_3__.AreaOfLawService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
AddEditAreaOfLawComponent.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
AddEditAreaOfLawComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-edit-area-of-law',
        template: _add_edit_area_of_law_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_area_of_law_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditAreaOfLawComponent);



/***/ }),

/***/ 82502:
/*!************************************************************************************!*\
  !*** ./src/app/layout/area-of-law/components/area-of-law/area-of-law.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaOfLawComponent": () => (/* binding */ AreaOfLawComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _area_of_law_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-of-law.component.html?ngResource */ 9258);
/* harmony import */ var _area_of_law_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-of-law.component.scss?ngResource */ 32027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_area_of_law_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/area-of-law.service */ 68870);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let AreaOfLawComponent = class AreaOfLawComponent {
    constructor(router, areaOfLawService, cdr, jwtService, confirmationDialogService) {
        this.router = router;
        this.areaOfLawService = areaOfLawService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.confirmationDialogService = confirmationDialogService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.areaOfLaws = [];
        this.isAreaOfLaws = true;
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
            this.getAreaOfLaws(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('data-mangement');
        this.getAreaOfLaws(this._state);
    }
    reload() {
        window.scrollTo(0, 400);
        this.getAreaOfLaws(this._state);
    }
    getAreaOfLaws(state) {
        this.isLoading = true;
        this.areaOfLawService.getAreaOfLaws(state).subscribe(response => {
            this.areaOfLaws = response['results'];
            this.setState(response);
            if (this.areaOfLaws.length == 0) {
                this.isAreaOfLaws = false;
            }
            else {
                this.isAreaOfLaws = true;
            }
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    editAreaOfLaw(id) {
        this.router.navigate(['/data-mangement/area-of-laws/edit-area-of-law/' + id]);
    }
    deleteAreaOfLaw(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this area of law ?')
            .then((confirmed) => {
            if (confirmed) {
                this.areaOfLawService.deleteAreaOfLaw(id).subscribe(response => {
                    this.getAreaOfLaws(this._state);
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
        this.getAreaOfLaws(this._state);
    }
    refresh() {
        this.getAreaOfLaws(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
AreaOfLawComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_area_of_law_service__WEBPACK_IMPORTED_MODULE_5__.AreaOfLawService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
AreaOfLawComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['content',] }]
};
AreaOfLawComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-area-of-law',
        template: _area_of_law_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_area_of_law_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AreaOfLawComponent);



/***/ }),

/***/ 35764:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/area-of-law/components/add-edit-area-of-law/add-edit-area-of-law.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = ".ck.ck-content {\n  border: 2px solid #707070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWFyZWEtb2YtbGF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJhZGQtZWRpdC1hcmVhLW9mLWxhdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay5jay1jb250ZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 32027:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/area-of-law/components/area-of-law/area-of-law.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLW9mLWxhdy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 70266:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/area-of-law/components/add-edit-area-of-law/add-edit-area-of-law.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] *ngIf=\"editForm\">\n    <app-page-header [heading]=\"'Add | Edit Area Of Law'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Area Of Law\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>x\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Title *</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Title is required.\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Code *</label>\n                                <input formControlName=\"aol_code\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['aol_code'].errors && (addEditForm.controls['aol_code'].dirty || addEditForm.controls['aol_code'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['aol_code'].errors?.required\">\n                                        * Code is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                                Area Of Law</button>\n                            <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                                Area Of Law</button>\n                            <button type=\"button\" routerLink=\"/data-mangement/area-of-laws\"\n                                class=\"btn btn-secondary\">Cancel</button>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group mb-2 py-2 text-right\">\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"card\" *ngIf=\"!editForm\">\n    <div class=\"card-header\">\n        Area Of Law\n    </div>\n    <div class=\"card-body\">\n        <ng-container *ngIf=\"isLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n         \n                    <div class=\"row align-items-center\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Title *</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Name is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Code *</label>\n                                <input formControlName=\"aol_code\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['aol_code'].errors && (addEditForm.controls['aol_code'].dirty || addEditForm.controls['aol_code'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['aol_code'].errors?.required\">\n                                        * Code is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                                Area Of Law</button>\n                            <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                                Area Of Law</button>\n                            <button type=\"button\" (click)=\"cancelEvent()\"\n                                class=\"btn btn-outline-secondary\">Cancel</button>\n                        </div>\n                    </div>\n\n\n              \n\n        </form>\n    </div>\n</div>";

/***/ }),

/***/ 9258:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/area-of-law/components/area-of-law/area-of-law.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Area Of Laws'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition] #content>\n       <app-add-edit-area-of-law *ngIf=\"isEditAccess\" (newItemEvent)=\"reload()\"></app-add-edit-area-of-law>\n        <div class=\"card min-height-500 mt-3 card-2 bg-transparent\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                  <div class=\"col-md-12 text-left\">\n                    <div class=\"form-group mb-1\">\n                      <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                        (ngModelChange)=\"this.searchTermUpdate.next($event)\" class=\"form-control\" placeholder=\"Search here...\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-md-2 text-center\">\n                    <button type=\"button\" routerLink=\"/area-of-law/add-areaOfLaw\" class=\"btn btn-primary\">Add AreaOfLaw</button>\n                  </div> -->\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                  <div class=\"text-center\">\n                    <div class=\"spinner-border\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </div>\n                </ng-container>\n                <div *ngIf=\"!isAreaOfLaws;else table\">\n                  <p class=\"text-center\">No Area Of Law found</p>\n                </div>\n                <ng-template #table>\n                  <div *ngIf=\"!isLoading\">\n                    <table  class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <!-- <th width=\"60\">#</th> -->\n                          <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\"><span>Name</span></th>\n                          <th scope=\"col\" sortable=\"aol_code\" (sort)=\"onSort($event)\"><span>Code</span></th>\n                          <th *ngIf=\"isEditAccess\" scope=\"col\" width=\"100\">Actions</th>                        \n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let areaOfLaw of areaOfLaws; let i = index\">\n                          <!-- <td>{{i+1}}</td> -->\n                          <td>{{areaOfLaw?.name}}</td>\n                          <td>{{areaOfLaw?.aol_code}}</td>\n                          <td *ngIf=\"isEditAccess\">\n                            <div class=\"action-buttons\"><button\n                                (click)=\"editAreaOfLaw(areaOfLaw.id)\"><img\n                                    src=\"assets/images/pencil.svg\"\n                                    alt=\"\"></button>\n                                    <button\n                                    (click)=\"deleteAreaOfLaw(areaOfLaw.id)\"><img\n                                        src=\"assets/images/icons8-trash-can.svg\"\n                                        alt=\"\"></button>\n                                  </div>\n                          </td>\n                      \n                        </tr>\n                      </tbody>\n                    </table>\n                    <!-- <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refresh()\">\n                      </ngb-pagination>\n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refresh()\">\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                        <option [ngValue]=\"30\">30 items per page</option>\n                      </select>\n                    </div> -->\n                  </div>  \n                </ng-template>\n              </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_area-of-law_area-of-law_module_ts.js.map