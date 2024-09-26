"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_billingcurrency_billingcurrency_module_ts"],{

/***/ 88694:
/*!**************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/billingcurrency-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingcurrencyRoutingModule": () => (/* binding */ BillingcurrencyRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_billingcurrency_add_edit_billingcurrency_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-billingcurrency/add-edit-billingcurrency.component */ 65105);
/* harmony import */ var _components_billingcurrency_billingcurrency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/billingcurrency/billingcurrency.component */ 48353);





const routes = [
    {
        path: '',
        component: _components_billingcurrency_billingcurrency_component__WEBPACK_IMPORTED_MODULE_1__.BillingcurrencyComponent
    },
    {
        path: 'add-billingcurrency',
        component: _components_add_edit_billingcurrency_add_edit_billingcurrency_component__WEBPACK_IMPORTED_MODULE_0__.AddEditBillingcurrencyComponent
    },
    {
        path: 'edit-billingcurrency/:tempId',
        component: _components_add_edit_billingcurrency_add_edit_billingcurrency_component__WEBPACK_IMPORTED_MODULE_0__.AddEditBillingcurrencyComponent
    }
];
let BillingcurrencyRoutingModule = class BillingcurrencyRoutingModule {
};
BillingcurrencyRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], BillingcurrencyRoutingModule);



/***/ }),

/***/ 6731:
/*!******************************************************************!*\
  !*** ./src/app/layout/billingcurrency/billingcurrency.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingcurrencyModule": () => (/* binding */ BillingcurrencyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _billingcurrency_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billingcurrency-routing.module */ 88694);
/* harmony import */ var _components_billingcurrency_billingcurrency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/billingcurrency/billingcurrency.component */ 48353);
/* harmony import */ var _components_add_edit_billingcurrency_add_edit_billingcurrency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-billingcurrency/add-edit-billingcurrency.component */ 65105);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/billingcurrency.service */ 46134);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives */ 94221);











let BillingcurrencyModule = class BillingcurrencyModule {
};
BillingcurrencyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_billingcurrency_billingcurrency_component__WEBPACK_IMPORTED_MODULE_1__.BillingcurrencyComponent,
            _components_add_edit_billingcurrency_add_edit_billingcurrency_component__WEBPACK_IMPORTED_MODULE_2__.AddEditBillingcurrencyComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _billingcurrency_routing_module__WEBPACK_IMPORTED_MODULE_0__.BillingcurrencyRoutingModule,
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
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_4__.BillingcurrencyService]
    })
], BillingcurrencyModule);



/***/ }),

/***/ 65105:
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/components/add-edit-billingcurrency/add-edit-billingcurrency.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditBillingcurrencyComponent": () => (/* binding */ AddEditBillingcurrencyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_billingcurrency_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-billingcurrency.component.html?ngResource */ 96329);
/* harmony import */ var _add_edit_billingcurrency_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-billingcurrency.component.scss?ngResource */ 98956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/billingcurrency.service */ 46134);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);









let AddEditBillingcurrencyComponent = class AddEditBillingcurrencyComponent {
    //   public options: Object = {
    //     plugins: [ HtmlEmbed],
    //     toolbar: [ 'htmlEmbed'],
    // };
    constructor(router, fb, route, billingcurrencyService, toastr) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.billingcurrencyService = billingcurrencyService;
        this.toastr = toastr;
        this.editForm = false;
        this.isLoading = false;
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getBillingcurrency(this.tempId);
            }
        });
        this.addEditForm = fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() {
    }
    getBillingcurrency(tempId) {
        this.isLoading = true;
        this.billingcurrencyService.getBillingcurrencyById(tempId).subscribe(response => {
            this.addEditForm.patchValue(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/data-mangement/billingcurrencies']);
        });
    }
    onSubmit() {
        this.billingcurrencyService.addBillingcurrencys(this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                //this.toastr.success(response.title + ' added!', 'Success');
                this.newItemEvent.emit();
                //this.router.navigate(['/data-mangement/billingcurrencies']);
            }
        });
    }
    cancelEvent() {
        this.addEditForm.reset();
        this.newItemEvent.emit();
    }
    onUpdate() {
        this.billingcurrencyService.updateBillingcurrency(this.tempId, this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                // this.toastr.success(response.title + ' Updated!', 'Success');
                this.router.navigate(['/data-mangement/billingcurrencies']);
            }
        });
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
};
AddEditBillingcurrencyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_3__.BillingcurrencyService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService }
];
AddEditBillingcurrencyComponent.propDecorators = {
    newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
AddEditBillingcurrencyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-edit-billingcurrency',
        template: _add_edit_billingcurrency_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_billingcurrency_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditBillingcurrencyComponent);



/***/ }),

/***/ 48353:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/components/billingcurrency/billingcurrency.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingcurrencyComponent": () => (/* binding */ BillingcurrencyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _billingcurrency_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billingcurrency.component.html?ngResource */ 2226);
/* harmony import */ var _billingcurrency_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billingcurrency.component.scss?ngResource */ 54301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/billingcurrency.service */ 46134);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let BillingcurrencyComponent = class BillingcurrencyComponent {
    constructor(router, billingcurrencyService, cdr, jwtService, confirmationDialogService) {
        this.router = router;
        this.billingcurrencyService = billingcurrencyService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.confirmationDialogService = confirmationDialogService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.billingcurrencys = [];
        this.isBillingcurrencys = true;
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
            this.getBillingcurrencys(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('data-mangement');
        this.getBillingcurrencys(this._state);
    }
    reload() {
        window.scrollTo(0, 400);
        this.getBillingcurrencys(this._state);
    }
    getBillingcurrencys(state) {
        this.isLoading = true;
        this.billingcurrencyService.getBillingcurrencys(state).subscribe(response => {
            this.billingcurrencys = response['results'];
            this.setState(response);
            if (this.billingcurrencys.length == 0) {
                this.isBillingcurrencys = false;
            }
            else {
                this.isBillingcurrencys = true;
            }
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    editBillingcurrency(id) {
        this.router.navigate(['/data-mangement/billingcurrencies/edit-billingcurrency/' + id]);
    }
    deleteBillingcurrency(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this billing currency ?')
            .then((confirmed) => {
            if (confirmed) {
                this.billingcurrencyService.deleteBillingcurrency(id).subscribe(response => {
                    this.getBillingcurrencys(this._state);
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
        this.getBillingcurrencys(this._state);
    }
    refresh() {
        this.getBillingcurrencys(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
BillingcurrencyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_5__.BillingcurrencyService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
BillingcurrencyComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['content',] }]
};
BillingcurrencyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-billingcurrency',
        template: _billingcurrency_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_billingcurrency_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BillingcurrencyComponent);



/***/ }),

/***/ 46134:
/*!***************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/service/billingcurrency.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingcurrencyService": () => (/* binding */ BillingcurrencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);



let BillingcurrencyService = class BillingcurrencyService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getBillingcurrencys(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/billingcurrency?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/billingcurrency?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    addBillingcurrencys(data) {
        return this.apiService.post(`/billingcurrency`, data);
    }
    getBillingcurrencyById(data) {
        return this.apiService.get(`/billingcurrency/${data}`);
    }
    deleteBillingcurrency(data) {
        return this.apiService.delete(`/billingcurrency/${data}`);
    }
    updateBillingcurrency(billingcurrencyId, data) {
        return this.apiService.patch(`/billingcurrency/${billingcurrencyId}`, data);
    }
};
BillingcurrencyService.ctorParameters = () => [
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
BillingcurrencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], BillingcurrencyService);



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

/***/ 98956:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/components/add-edit-billingcurrency/add-edit-billingcurrency.component.scss?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".ck.ck-content {\n  border: 2px solid #707070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWJpbGxpbmdjdXJyZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWVkaXQtYmlsbGluZ2N1cnJlbmN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNrLmNrLWNvbnRlbnQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzAgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 54301:
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/components/billingcurrency/billingcurrency.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nY3VycmVuY3kuY29tcG9uZW50LnNjc3MifQ== */";

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

/***/ 96329:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/components/add-edit-billingcurrency/add-edit-billingcurrency.component.html?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] *ngIf=\"editForm\">\n    <app-page-header [heading]=\"'Add | Edit Billing Currency'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                 Billing Currency\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>x\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Name *</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Name is required.\n                                    </span>\n                                </div>\n                            </div>\n    \n                        </div>\n                        <div class=\"col-md-6\">\n                            <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                                Billing Currency</button>\n                            <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                                Billing Currency</button>\n                            <button type=\"button\" routerLink=\"/data-mangement/billingcurrencies\" class=\"btn btn-secondary\">Cancel</button>\n                        </div>\n                    \n                    </div>\n                    <div class=\"form-group mb-2 py-2 text-right\">\n                    \n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>  \n</div>\n<div class=\"card\"  *ngIf=\"!editForm\">\n    <div class=\"card-header\">\n         Billing Currency\n    </div>\n    <div class=\"card-body\">\n        <ng-container *ngIf=\"isLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n  \n              \n                    <div class=\"row align-items-center\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating mb-2\">Title *</label>\n                                <input formControlName=\"name\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['name'].errors && (addEditForm.controls['name'].dirty || addEditForm.controls['name'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['name'].errors?.required\">\n                                        * Name is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                                Billing Currency</button>\n                            <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                                Billing Currency</button>\n                            <button type=\"button\" (click)=\"cancelEvent()\" class=\"btn btn-outline-secondary\">Cancel</button>  \n                        </div>\n                    </div>\n                \n\n          \n          \n      \n        </form>\n    </div>\n</div>";

/***/ }),

/***/ 2226:
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/billingcurrency/components/billingcurrency/billingcurrency.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Billing Currencies'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition] #content>\n       <app-add-edit-billingcurrency *ngIf=\"isEditAccess\" (newItemEvent)=\"reload()\"></app-add-edit-billingcurrency>\n        <div class=\"card min-height-500 mt-3 card-2 bg-transparent\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                  <div class=\"col-md-12 text-left\">\n                    <div class=\"form-group mb-1\">\n                      <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                        (ngModelChange)=\"this.searchTermUpdate.next($event)\" class=\"form-control\" placeholder=\"Search here...\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"col-md-2 text-center\">\n                    <button type=\"button\" routerLink=\"/billingcurrencies/add-billingcurrency\" class=\"btn btn-primary\">Add Billingcurrency</button>\n                  </div> -->\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                  <div class=\"text-center\">\n                    <div class=\"spinner-border\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </div>\n                </ng-container>\n                <div *ngIf=\"!isBillingcurrencys;else table\">\n                  <p class=\"text-center\">No Billing Currency found</p>\n                </div>\n                <ng-template #table>\n                  <div *ngIf=\"!isLoading\">\n                    <table  class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <!-- <th width=\"60\">#</th> -->\n                          <th scope=\"col\" sortable=\"title\" (sort)=\"onSort($event)\"><span>Name</span></th>\n                          <th *ngIf=\"isEditAccess\" scope=\"col\" width=\"100\">Actions</th>                        \n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let billingcurrency of billingcurrencys; let i = index\">\n                          <!-- <td>{{i+1}}</td> -->\n                          <td>{{billingcurrency?.name}}</td>\n                          <td *ngIf=\"isEditAccess\">\n                            <div class=\"action-buttons\"><button\n                                (click)=\"editBillingcurrency(billingcurrency.id)\"><img\n                                    src=\"assets/images/pencil.svg\"\n                                    alt=\"\"></button>\n                                    <button\n                                    (click)=\"deleteBillingcurrency(billingcurrency.id)\"><img\n                                        src=\"assets/images/icons8-trash-can.svg\"\n                                        alt=\"\"></button>\n                                  </div>\n                          </td>\n                      \n                        </tr>\n                      </tbody>\n                    </table>\n                    <!-- <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refresh()\">\n                      </ngb-pagination>\n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refresh()\">\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                        <option [ngValue]=\"30\">30 items per page</option>\n                      </select>\n                    </div> -->\n                  </div>  \n                </ng-template>\n              </div>\n        </div>\n    </div>  \n</div>\n  ";

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
//# sourceMappingURL=src_app_layout_billingcurrency_billingcurrency_module_ts.js.map