"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_sic-code_sic-code_module_ts"],{

/***/ 53812:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/sic-code/components/add-edit-sic-code/add-edit-sic-code.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditSICCodeComponent": () => (/* binding */ AddEditSICCodeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_sic_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-sic-code.component.html?ngResource */ 5633);
/* harmony import */ var _add_edit_sic_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-sic-code.component.scss?ngResource */ 82836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_validation_alphanumeric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/modules/validation/alphanumeric */ 36771);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 79949);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_sic_code_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/sic-code.service */ 49867);










let AddEditSICCodeComponent = class AddEditSICCodeComponent {
    //   public options: Object = {
    //     plugins: [ HtmlEmbed],
    //     toolbar: [ 'htmlEmbed'],
    // };
    constructor(router, fb, route, sicCodeService) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.sicCodeService = sicCodeService;
        this.Editor = (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default());
        this.editForm = false;
        this.isLoading = false;
        this.options = ["Monthly", "On Completion", "Quarterly", "Other"];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getSICCode(this.tempId);
            }
        });
        this.addEditForm = fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _app_shared_modules_validation_alphanumeric__WEBPACK_IMPORTED_MODULE_3__.alphaNumericValidatorHipen]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _app_shared_modules_validation_alphanumeric__WEBPACK_IMPORTED_MODULE_3__.alphaNumericValidator]]
        });
    }
    ngOnInit() {
    }
    getValue(response) {
        let data = {
            ...response
        };
        return data;
    }
    getSICCode(tempId) {
        this.isLoading = true;
        this.sicCodeService.getSICCodeById(tempId).subscribe(response => {
            this.addEditForm.patchValue({
                ...this.getValue(response)
            });
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/data-mangement/sic-codes']);
        });
    }
    onSubmit() {
        if (this.addEditForm.valid) {
            this.sicCodeService.addSICCode(this.addEditForm.value).subscribe(response => {
                if (response) {
                    this.addEditForm.reset();
                    //this.newItemEvent.emit();
                    // this.toastr.success(response.title + ' added!', 'Success');
                    this.router.navigate(['/data-mangement/sic-codes']);
                }
            });
        }
        else {
            this.addEditForm.markAllAsTouched();
        }
    }
    cancelEvent() {
        this.addEditForm.reset();
        this.newItemEvent.emit();
    }
    onUpdate() {
        if (this.addEditForm.valid) {
            this.sicCodeService.updateSICCode(this.tempId, this.addEditForm.value).subscribe(response => {
                if (response) {
                    this.addEditForm.reset();
                    // this.toastr.success(response.title + ' Updated!', 'Success');
                    this.router.navigate(['/data-mangement/sic-codes']);
                }
            });
        }
        else {
            this.addEditForm.markAllAsTouched();
        }
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
};
AddEditSICCodeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _service_sic_code_service__WEBPACK_IMPORTED_MODULE_5__.SICCodeService }
];
AddEditSICCodeComponent.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
AddEditSICCodeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-edit-sic-code',
        template: _add_edit_sic_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_sic_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditSICCodeComponent);



/***/ }),

/***/ 36447:
/*!***************************************************************************!*\
  !*** ./src/app/layout/sic-code/components/sic-code/sic-code.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SICCodeComponent": () => (/* binding */ SICCodeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _sic_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sic-code.component.html?ngResource */ 31431);
/* harmony import */ var _sic_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sic-code.component.scss?ngResource */ 20468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_sic_code_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/sic-code.service */ 49867);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let SICCodeComponent = class SICCodeComponent {
    constructor(router, sicCodeService, cdr, jwtService, confirmationDialogService) {
        this.router = router;
        this.sicCodeService = sicCodeService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.confirmationDialogService = confirmationDialogService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.sicCodes = [];
        this.isSICCodes = true;
        this.isLoading = false;
        this.isEditAccess = false;
        this._state = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getSICCodes(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('data-mangement');
        this.getSICCodes(this._state);
    }
    getSICCodes(state) {
        this.isLoading = true;
        this.sicCodeService.getSICCodes(state).subscribe(response => {
            this.sicCodes = response['results'];
            this.setState(response);
            if (this.sicCodes.length == 0) {
                this.isSICCodes = false;
            }
            else {
                this.isSICCodes = true;
            }
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    reload() {
        window.scrollTo(0, 400);
        this.getSICCodes(this._state);
    }
    editSICCode(id) {
        this.router.navigate(['/data-mangement/sic-codes/edit-sic-code/' + id]);
    }
    deleteSICCode(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this SIC Code ?')
            .then((confirmed) => {
            if (confirmed) {
                this.sicCodeService.deleteSICCode(id).subscribe(response => {
                    this.getSICCodes(this._state);
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
        this.getSICCodes(this._state);
    }
    refresh() {
        this.getSICCodes(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
SICCodeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_sic_code_service__WEBPACK_IMPORTED_MODULE_5__.SICCodeService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
SICCodeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
SICCodeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-sic-code',
        template: _sic_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_sic_code_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SICCodeComponent);



/***/ }),

/***/ 49867:
/*!*************************************************************!*\
  !*** ./src/app/layout/sic-code/service/sic-code.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SICCodeService": () => (/* binding */ SICCodeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);



let SICCodeService = class SICCodeService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getSICCodes(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/sic-code?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/sic-code?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    addSICCode(data) {
        return this.apiService.post(`/sic-code`, data);
    }
    getSICCodeById(data) {
        return this.apiService.get(`/sic-code/${data}`);
    }
    deleteSICCode(data) {
        return this.apiService.delete(`/sic-code/${data}`);
    }
    updateSICCode(sicCodeId, data) {
        return this.apiService.patch(`/sic-code/${sicCodeId}`, data);
    }
};
SICCodeService.ctorParameters = () => [
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
SICCodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], SICCodeService);



/***/ }),

/***/ 49431:
/*!************************************************************!*\
  !*** ./src/app/layout/sic-code/sic-code-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SICCodeRoutingModule": () => (/* binding */ SICCodeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_sic_code_add_edit_sic_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-sic-code/add-edit-sic-code.component */ 53812);
/* harmony import */ var _components_sic_code_sic_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sic-code/sic-code.component */ 36447);





const routes = [
    {
        path: '',
        component: _components_sic_code_sic_code_component__WEBPACK_IMPORTED_MODULE_1__.SICCodeComponent
    },
    {
        path: 'add-sic-code',
        component: _components_add_edit_sic_code_add_edit_sic_code_component__WEBPACK_IMPORTED_MODULE_0__.AddEditSICCodeComponent
    },
    {
        path: 'edit-sic-code/:tempId',
        component: _components_add_edit_sic_code_add_edit_sic_code_component__WEBPACK_IMPORTED_MODULE_0__.AddEditSICCodeComponent
    }
];
let SICCodeRoutingModule = class SICCodeRoutingModule {
};
SICCodeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], SICCodeRoutingModule);



/***/ }),

/***/ 38635:
/*!****************************************************!*\
  !*** ./src/app/layout/sic-code/sic-code.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SICCodeModule": () => (/* binding */ SICCodeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _sic_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sic-code-routing.module */ 49431);
/* harmony import */ var _components_sic_code_sic_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sic-code/sic-code.component */ 36447);
/* harmony import */ var _components_add_edit_sic_code_add_edit_sic_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-sic-code/add-edit-sic-code.component */ 53812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_sic_code_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/sic-code.service */ 49867);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives */ 94221);











let SICCodeModule = class SICCodeModule {
};
SICCodeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_sic_code_sic_code_component__WEBPACK_IMPORTED_MODULE_1__.SICCodeComponent,
            _components_add_edit_sic_code_add_edit_sic_code_component__WEBPACK_IMPORTED_MODULE_2__.AddEditSICCodeComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _sic_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.SICCodeRoutingModule,
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
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_sic_code_service__WEBPACK_IMPORTED_MODULE_4__.SICCodeService]
    })
], SICCodeModule);



/***/ }),

/***/ 36771:
/*!***********************************************************!*\
  !*** ./src/app/shared/modules/validation/alphanumeric.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alphaNumericValidator": () => (/* binding */ alphaNumericValidator),
/* harmony export */   "alphaNumericValidatorHipen": () => (/* binding */ alphaNumericValidatorHipen)
/* harmony export */ });
const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]+([ a-zA-Z0-9_,;]+)*$/;
const ALPHA_NUMERIC_REGEXHipen = /^[a-zA-Z0-9_-]+([a-zA-Z0-9_-]+)*$/;
const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' };
function alphaNumericValidator(control) {
    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}
function alphaNumericValidatorHipen(control) {
    return ALPHA_NUMERIC_REGEXHipen.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}



/***/ }),

/***/ 82836:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/sic-code/components/add-edit-sic-code/add-edit-sic-code.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = ".ck.ck-content {\n  border: 2px solid #707070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXNpYy1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJhZGQtZWRpdC1zaWMtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay5jay1jb250ZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 20468:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/sic-code/components/sic-code/sic-code.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWMtY29kZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5633:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/sic-code/components/add-edit-sic-code/add-edit-sic-code.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'SIC Codes'\" [previousLink]=\"'sic-codes'\" [heading]=\"'Add | Edit SIC Code'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                SIC Code\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">Code *</label>\n                                <input formControlName=\"code\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['code'].errors && (addEditForm.controls['code'].dirty || addEditForm.controls['code'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['code'].errors?.required; else alphaNumericErrorCode\">\n                                        *Code No is required.\n                                    </span>\n                                    <ng-template #alphaNumericErrorCode>\n                                        <span class=\" text-danger error\"\n                                            *ngIf=\"addEditForm.controls['code'].errors?.alphaNumericError\">\n                                            *Only Apha Numeric is required.\n                                        </span>\n                                    </ng-template>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">Description *</label>\n                                <input formControlName=\"description\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['description'].errors && (addEditForm.controls['description'].dirty || addEditForm.controls['description'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['description'].errors?.required; else alphaNumericErrorDescription\">\n                                        *Description is required.\n                                    </span>\n                                    <ng-template #alphaNumericErrorDescription>\n                                        <span class=\" text-danger error\"\n                                            *ngIf=\"addEditForm.controls['description'].errors?.alphaNumericError\">\n                                            *Only Apha Numeric is required.\n                                        </span>\n                                    </ng-template>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2 py-2\">\n                        <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                            SIC Code</button>\n                        <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                            SIC Code</button>\n                        <button type=\"button\" routerLink=\"/data-mangement/sic-codes\"\n                            class=\"btn btn-secondary\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 31431:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/sic-code/components/sic-code/sic-code.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'SIC Codes'\"></app-page-header>\n  <div class=\"container-fluid mt-2\" [@routerTransition]>\n    <div class=\"card card-2 bg-transparent mt-3\">\n      <div class=\"card-body\">\n        <div class=\"row mb-2 search-header\">\n          <div class=\"col-md-9 text-left mb-1 mb-sm-0\">\n            <div class=\"form-group mb-1\">\n              <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                (ngModelChange)=\"this.searchTermUpdate.next($event)\" class=\"form-control\" placeholder=\"Search here...\">\n            </div>\n          </div>\n          <div class=\"col-md-3 text-center\">\n            <button *ngIf=\"isEditAccess\" type=\"button\" routerLink=\"/data-mangement/sic-codes/add-sic-code\" class=\"btn btn-primary btn-block\">Add SIC\n              Code</button>\n          </div>\n        </div>\n        <ng-container *ngIf=\"isLoading\">\n          <div class=\"text-center\">\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </ng-container>\n        <div *ngIf=\"!isSICCodes;else table\">\n          <p class=\"text-center\">No SIC Code found</p>\n        </div>\n        <ng-template #table>\n          <div *ngIf=\"!isLoading\" class=\"table-responsive\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <!-- <th width=\"60\">#</th> -->\n                  <th scope=\"col\" sortable=\"code\" (sort)=\"onSort($event)\"><span>Code</span></th>\n                  <th scope=\"col\" sortable=\"description\" (sort)=\"onSort($event)\"><span>Description</span></th>\n                  <th *ngIf=\"isEditAccess\" scope=\"col\" width=\"100\">Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let sicCode of sicCodes; let i = index\">\n                  <!-- <td>{{((_state.page-1) * _state.limit) + i+1}}</td> -->\n                  <td>{{sicCode?.code}}</td>\n                  <td>{{sicCode?.description}}</td>\n                  <td *ngIf=\"isEditAccess\">\n                    <div class=\"action-buttons\"><button (click)=\"editSICCode(sicCode.id)\"><img\n                          src=\"assets/images/pencil.svg\" alt=\"\"></button>\n                      <button (click)=\"deleteSICCode(sicCode.id)\"><img src=\"assets/images/icons8-trash-can.svg\"\n                          alt=\"\"></button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n          </div>\n          <div class=\"d-flex justify-content-between p-2\">\n            <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\"\n              [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\" (pageChange)=\"refresh()\">\n            </ngb-pagination>\n            <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refresh()\">\n              <option [ngValue]=\"10\">10 items per page</option>\n              <option [ngValue]=\"20\">20 items per page</option>\n              <option [ngValue]=\"30\">30 items per page</option>\n            </select>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_sic-code_sic-code_module_ts.js.map