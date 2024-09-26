"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_attachment-type_attachment-type_module_ts"],{

/***/ 4059:
/*!**************************************************************************!*\
  !*** ./src/app/layout/attachment-type/attachment-type-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentTypeRoutingModule": () => (/* binding */ AttachmentTypeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_attachment_type_add_edit_attachment_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-attachment-type/add-edit-attachment-type.component */ 39173);
/* harmony import */ var _components_attachment_type_attachment_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/attachment-type/attachment-type.component */ 44942);





const routes = [
    {
        path: '',
        component: _components_attachment_type_attachment_type_component__WEBPACK_IMPORTED_MODULE_1__.AttachmentTypeComponent
    },
    {
        path: 'add-attachment-type',
        component: _components_add_edit_attachment_type_add_edit_attachment_type_component__WEBPACK_IMPORTED_MODULE_0__.AddEditAttachmentTypeComponent
    },
    {
        path: 'edit-attachment-type/:tempId',
        component: _components_add_edit_attachment_type_add_edit_attachment_type_component__WEBPACK_IMPORTED_MODULE_0__.AddEditAttachmentTypeComponent
    }
];
let AttachmentTypeRoutingModule = class AttachmentTypeRoutingModule {
};
AttachmentTypeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AttachmentTypeRoutingModule);



/***/ }),

/***/ 69033:
/*!******************************************************************!*\
  !*** ./src/app/layout/attachment-type/attachment-type.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentTypeModule": () => (/* binding */ AttachmentTypeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _attachment_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment-type-routing.module */ 4059);
/* harmony import */ var _components_attachment_type_attachment_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/attachment-type/attachment-type.component */ 44942);
/* harmony import */ var _components_add_edit_attachment_type_add_edit_attachment_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-attachment-type/add-edit-attachment-type.component */ 39173);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_attachment_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/attachment-type.service */ 1959);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives */ 94221);











let AttachmentTypeModule = class AttachmentTypeModule {
};
AttachmentTypeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_attachment_type_attachment_type_component__WEBPACK_IMPORTED_MODULE_1__.AttachmentTypeComponent,
            _components_add_edit_attachment_type_add_edit_attachment_type_component__WEBPACK_IMPORTED_MODULE_2__.AddEditAttachmentTypeComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _attachment_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttachmentTypeRoutingModule,
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
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_attachment_type_service__WEBPACK_IMPORTED_MODULE_4__.AttachmentTypeService]
    })
], AttachmentTypeModule);



/***/ }),

/***/ 39173:
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/attachment-type/components/add-edit-attachment-type/add-edit-attachment-type.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditAttachmentTypeComponent": () => (/* binding */ AddEditAttachmentTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_attachment_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-attachment-type.component.html?ngResource */ 42160);
/* harmony import */ var _add_edit_attachment_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-attachment-type.component.scss?ngResource */ 65335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _service_attachment_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/attachment-type.service */ 1959);








let AddEditAttachmentTypeComponent = class AddEditAttachmentTypeComponent {
    //   public options: Object = {
    //     plugins: [ HtmlEmbed],
    //     toolbar: [ 'htmlEmbed'],
    // };
    constructor(router, fb, route, attachmentTypeService) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.attachmentTypeService = attachmentTypeService;
        this.editForm = false;
        this.isLoading = false;
        this.options = ["Monthly", "On Completion", "Quarterly", "Other"];
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getAttachmentType(this.tempId);
            }
        });
        this.addEditForm = fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() {
    }
    getValue(response) {
        let data = {
            name: response.name
        };
        return data;
    }
    getAttachmentType(tempId) {
        this.isLoading = true;
        this.attachmentTypeService.getAttachmentTypeById(tempId).subscribe(response => {
            this.addEditForm.patchValue({
                ...this.getValue(response)
            });
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/data-mangement/attachment-types']);
        });
    }
    onSubmit() {
        this.attachmentTypeService.addAttachmentType(this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                this.newItemEvent.emit();
                // this.toastr.success(response.title + ' added!', 'Success');
                //this.router.navigate(['/data-mangement/attachment-types']);
            }
        });
    }
    cancelEvent() {
        this.addEditForm.reset();
        this.newItemEvent.emit();
    }
    onUpdate() {
        this.attachmentTypeService.updateAttachmentType(this.tempId, this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                // this.toastr.success(response.title + ' Updated!', 'Success');
                this.router.navigate(['/data-mangement/attachment-types']);
            }
        });
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
};
AddEditAttachmentTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_attachment_type_service__WEBPACK_IMPORTED_MODULE_3__.AttachmentTypeService }
];
AddEditAttachmentTypeComponent.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
AddEditAttachmentTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-edit-attachment-type',
        template: _add_edit_attachment_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_attachment_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditAttachmentTypeComponent);



/***/ }),

/***/ 44942:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/attachment-type/components/attachment-type/attachment-type.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentTypeComponent": () => (/* binding */ AttachmentTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _attachment_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment-type.component.html?ngResource */ 13926);
/* harmony import */ var _attachment_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attachment-type.component.scss?ngResource */ 48389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_attachment_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/attachment-type.service */ 1959);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let AttachmentTypeComponent = class AttachmentTypeComponent {
    constructor(router, attachmentTypeService, cdr, jwtService, confirmationDialogService) {
        this.router = router;
        this.attachmentTypeService = attachmentTypeService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.confirmationDialogService = confirmationDialogService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.attachmentTypes = [];
        this.isAttachmentTypes = true;
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
            this.getAttachmentTypes(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('data-mangement');
        this.getAttachmentTypes(this._state);
    }
    getAttachmentTypes(state) {
        this.isLoading = true;
        this.attachmentTypeService.getAttachmentTypes(state).subscribe(response => {
            this.attachmentTypes = response['results'];
            this.setState(response);
            if (this.attachmentTypes.length == 0) {
                this.isAttachmentTypes = false;
            }
            else {
                this.isAttachmentTypes = true;
            }
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    reload() {
        window.scrollTo(0, 400);
        this.getAttachmentTypes(this._state);
    }
    editAttachmentType(id) {
        this.router.navigate(['/data-mangement/attachment-types/edit-attachment-type/' + id]);
    }
    deleteAttachmentType(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this payor type ?')
            .then((confirmed) => {
            if (confirmed) {
                this.attachmentTypeService.deleteAttachmentType(id).subscribe(response => {
                    this.getAttachmentTypes(this._state);
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
        this.getAttachmentTypes(this._state);
    }
    refresh() {
        this.getAttachmentTypes(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
AttachmentTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_attachment_type_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentTypeService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
AttachmentTypeComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
AttachmentTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-attachment-type',
        template: _attachment_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_attachment_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AttachmentTypeComponent);



/***/ }),

/***/ 1959:
/*!***************************************************************************!*\
  !*** ./src/app/layout/attachment-type/service/attachment-type.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentTypeService": () => (/* binding */ AttachmentTypeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);



let AttachmentTypeService = class AttachmentTypeService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAttachmentTypes(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/attachment-type?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/attachment-type?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    addAttachmentType(data) {
        return this.apiService.post(`/attachment-type`, data);
    }
    getAttachmentTypeById(data) {
        return this.apiService.get(`/attachment-type/${data}`);
    }
    deleteAttachmentType(data) {
        return this.apiService.delete(`/attachment-type/${data}`);
    }
    updateAttachmentType(attachmentTypeId, data) {
        return this.apiService.patch(`/attachment-type/${attachmentTypeId}`, data);
    }
};
AttachmentTypeService.ctorParameters = () => [
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
AttachmentTypeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AttachmentTypeService);



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

/***/ 65335:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/layout/attachment-type/components/add-edit-attachment-type/add-edit-attachment-type.component.scss?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".ck.ck-content {\n  border: 2px solid #707070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWF0dGFjaG1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWVkaXQtYXR0YWNobWVudC10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNrLmNrLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzAgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 48389:
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/attachment-type/components/attachment-type/attachment-type.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRhY2htZW50LXR5cGUuY29tcG9uZW50LnNjc3MifQ== */";

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

/***/ 42160:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/layout/attachment-type/components/add-edit-attachment-type/add-edit-attachment-type.component.html?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] *ngIf=\"editForm\">\n    <app-page-header [heading]=\"'Add | Edit Attachment Type'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Attachment Type\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">Attachment Type*</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Attachment Types required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                      \n                      \n                    </div>\n                    <div class=\"form-group mb-2 py-2\">\n                        <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                            Attachment Type</button>\n                        <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                            Attachment Type</button>\n                        <button type=\"button\" routerLink=\"/data-mangement/billing-frequencies\" class=\"btn btn-secondary\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>  \n</div>\n<div class=\"card\" *ngIf=\"!editForm\">\n    <div class=\"card-header\">\n        Attachment Type\n    </div>\n    <div class=\"card-body\">\n        <ng-container *ngIf=\"isLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group mb-2\">\n                        <label class=\"bmd-label-floating mb-2\">Attachment Type*</label>\n                        <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                        <div\n                            *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                            <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                * Attachment Types required.\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    \n                </div>\n              \n            </div>\n            <div class=\"form-group mb-2 py-2\">\n               \n                <button type=\"button\"  (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                    Attachment Type</button>\n                <button type=\"button\" (click)=\"cancelEvent()\" class=\"btn btn-outline-secondary\">Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>\n  ";

/***/ }),

/***/ 13926:
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/attachment-type/components/attachment-type/attachment-type.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Attachment Type'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n      <app-add-edit-attachment-type *ngIf=\"isEditAccess\" (newItemEvent)=\"reload()\"></app-add-edit-attachment-type>\n        <div class=\"card card-2 bg-transparent mt-3\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                  <div class=\"col-md-12 text-left\">\n                    <div class=\"form-group mb-1\">\n                      <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                        (ngModelChange)=\"this.searchTermUpdate.next($event)\" class=\"form-control\" placeholder=\"Search here...\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-md-2 text-center\">\n                    <button type=\"button\" routerLink=\"/billing-frequencies/add-attachment-type\" class=\"btn btn-primary\">Add Template</button>\n                  </div> -->\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                  <div class=\"text-center\">\n                    <div class=\"spinner-border\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </div>\n                </ng-container>\n                <div *ngIf=\"!isAttachmentTypes;else table\">\n                  <p class=\"text-center\">No Attachment Typefound</p>\n                </div>\n                <ng-template #table>\n                  <div *ngIf=\"!isLoading\">\n                    <table  class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <!-- <th width=\"60\">#</th> -->\n                          <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\"><span>Name</span></th>\n                          <th *ngIf=\"isEditAccess\" scope=\"col\" width=\"100\">Actions</th>     \n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let attachmentType of attachmentTypes; let i = index\">\n                          <!-- <td>{{i+1}}</td> -->\n                          <td>{{attachmentType?.name}}</td>\n                          <td *ngIf=\"isEditAccess\">\n                            <div class=\"action-buttons\"><button\n                                (click)=\"editAttachmentType(attachmentType.id)\"><img\n                                    src=\"assets/images/pencil.svg\"\n                                    alt=\"\"></button>\n                            <button\n                                (click)=\"deleteAttachmentType(attachmentType.id)\"><img\n                                    src=\"assets/images/icons8-trash-can.svg\"\n                                    alt=\"\"></button></div>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <!-- <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refresh()\">\n                      </ngb-pagination>\n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refresh()\">\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                        <option [ngValue]=\"30\">30 items per page</option>\n                      </select>\n                    </div> -->\n                  </div>  \n                </ng-template>\n              </div>\n        </div>\n    </div>  \n</div>\n  ";

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
//# sourceMappingURL=src_app_layout_attachment-type_attachment-type_module_ts.js.map