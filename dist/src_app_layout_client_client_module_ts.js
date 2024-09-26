"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_client_client_module_ts"],{

/***/ 15142:
/*!********************************************************!*\
  !*** ./src/app/layout/client/client-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRoutingModule": () => (/* binding */ ClientRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/client/client.component */ 80573);
/* harmony import */ var _components_client_roster_client_roster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/client-roster/client-roster.component */ 85704);





const routes = [
    {
        path: '',
        component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_0__.ClientComponent
    },
    {
        path: 'roster/:keyword',
        component: _components_client_roster_client_roster_component__WEBPACK_IMPORTED_MODULE_1__.ClientRosterComponent
    },
];
let ClientRoutingModule = class ClientRoutingModule {
};
ClientRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ClientRoutingModule);



/***/ }),

/***/ 10003:
/*!************************************************!*\
  !*** ./src/app/layout/client/client.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientModule": () => (/* binding */ ClientModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-routing.module */ 15142);
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/client/client.component */ 80573);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/client.service */ 74705);
/* harmony import */ var _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attachment-type/service/attachment-type.service */ 1959);
/* harmony import */ var _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-rate/service/base-rate.service */ 99581);
/* harmony import */ var _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../billing-frequency/service/billing-frequency.service */ 96124);
/* harmony import */ var _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../billing-method/service/billing-method.service */ 83476);
/* harmony import */ var _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../billingcurrency/service/billingcurrency.service */ 46134);
/* harmony import */ var _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hourly-billing/service/hourly-billing.service */ 95418);
/* harmony import */ var _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../payor-type/service/payor-type.service */ 18530);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../staff/service/staff.service */ 37441);
/* harmony import */ var _components_client_roster_client_roster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/client-roster/client-roster.component */ 85704);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives */ 78782);




















let ClientModule = class ClientModule {
};
ClientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _components_client_client_component__WEBPACK_IMPORTED_MODULE_1__.ClientComponent,
            _components_client_roster_client_roster_component__WEBPACK_IMPORTED_MODULE_12__.ClientRosterComponent,
            _directives__WEBPACK_IMPORTED_MODULE_13__.NgbdSortableHeader
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _client_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_19__.NgxMaskModule.forRoot(),
        ],
        providers: [
            _service_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService,
            _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_4__.AttachmentTypeService,
            _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_5__.BaseRateService,
            _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_6__.BillingFrequencyService,
            _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_7__.BillingMethodService,
            _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_8__.BillingcurrencyService,
            _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_9__.HourlyBillingService,
            _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_10__.PayorTypeService,
            _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_11__.StaffService
        ]
    })
], ClientModule);



/***/ }),

/***/ 85704:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/client/components/client-roster/client-roster.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRosterComponent": () => (/* binding */ ClientRosterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_roster_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-roster.component.html?ngResource */ 65419);
/* harmony import */ var _client_roster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-roster.component.scss?ngResource */ 80477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/client.service */ 74705);









let ClientRosterComponent = class ClientRosterComponent {
    constructor(router, clientService, cdr, route) {
        this.router = router;
        this.clientService = clientService;
        this.cdr = cdr;
        this.route = route;
        this.clients = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.isLoading = false;
        this.isClients = true;
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.keyword !== '' && params.keyword != null) {
                this.keyword = params.keyword;
                this.getAllClients(this._state);
            }
        });
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllClients(this._state);
    }
    getAllClients(state) {
        this.clientService.getClientRoster(state, this.keyword).subscribe(response => {
            this.clients = response.results;
            if (this.clients.length == 0) {
                this.isClients = false;
            }
            else {
                this.isClients = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
ClientRosterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _service_client_service__WEBPACK_IMPORTED_MODULE_4__.ClientService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
ClientRosterComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
ClientRosterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-client-roster',
        template: _client_roster_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_client_roster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientRosterComponent);



/***/ }),

/***/ 80573:
/*!*********************************************************************!*\
  !*** ./src/app/layout/client/components/client/client.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponent": () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.component.html?ngResource */ 88201);
/* harmony import */ var _client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.component.scss?ngResource */ 26066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/client.service */ 74705);











let ClientComponent = class ClientComponent {
    constructor(router, clientService, cdr, confirmationDialogService) {
        this.router = router;
        this.clientService = clientService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.clients = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isClients = true;
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getAllClients(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllClients(this._state);
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllClients(this._state);
    }
    getAllClients(state) {
        this.clientService.getClients(state).subscribe(response => {
            this.clients = response.results;
            if (this.clients.length == 0) {
                this.isClients = false;
            }
            else {
                this.isClients = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    downloadFileExcel() {
        return this.clientService.getClientForExcelDownload(this._state).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "client");
        }, (error) => {
        });
    }
    refreshClients() {
        this.getAllClients(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editClient(clientId) {
        this.router.navigate(['/clients/edit-client/' + clientId]);
    }
    updateStatus(clientId, status) {
        let data = {
            isActive: !status
        };
        this.clientService.updateClient(clientId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshClients();
            }
        });
    }
    updateFavorite(clientId, status) {
        let data = {
            isFavorite: !status
        };
        this.clientService.updateClient(clientId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshClients();
            }
        });
    }
    deleteClient(clientId) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this client ?')
            .then((confirmed) => {
            if (confirmed) {
                this.clientService.deleteClient(clientId).subscribe(response => {
                    this.getAllClients(this._state);
                });
            }
        });
    }
};
ClientComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_client_service__WEBPACK_IMPORTED_MODULE_6__.ClientService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
ClientComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
ClientComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-client',
        template: _client_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_client_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientComponent);



/***/ }),

/***/ 78782:
/*!***************************************************!*\
  !*** ./src/app/layout/client/directives/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 66740);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 66740:
/*!****************************************************************!*\
  !*** ./src/app/layout/client/directives/sortable.directive.ts ***!
  \****************************************************************/
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

/***/ 80477:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-roster/client-roster.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtcm9zdGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 26066:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/client/components/client/client.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".black-text-link {\n  color: #000;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFjay10ZXh0LWxpbmt7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 65419:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-roster/client-roster.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Client Roster'\" [previousHeading]=\"'Clients'\" [previousLink]=\"'clients'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <div *ngIf=\"!isClients;else table\">\n                    <p class=\"text-center\">No clients found</p>\n                </div>\n                <ng-template #table>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Number</th>\n                                        <th>Name</th>\n                                        <th>Active</th>\n                                        <th>Class Year</th>\n                                        <th>Office</th>\n                                        <th>Office Name</th>\n                                        <th>Rank Code</th>\n                                        <th>Rank Name</th>\n                                        <th>Effective Date</th>\n                                        <th>Currency</th>\n                                        <th>Matter Number</th>\n                                        <th>Matter Name</th>\n                                        <th>Bill Rate</th>\n                                        <th>Standard Rate</th>\n                                        <th>Diff</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"isPaginationLoading\">\n                                    <tr>\n                                        <td colspan=\"6\">\n                                            <div class=\"text-center\">\n                                                <div class=\"spinner-border\"\n                                                    role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"!isPaginationLoading\">\n                                    <tr *ngFor=\"let client of clients; index as i\">\n                                        <td>{{ client.number }}</td>\n                                        <td>{{ client.name }}</td>\n                                        <td>{{ client.active }}</td>\n                                        <td>{{ client.classYear }}</td>\n                                        <td>{{ client.office }}</td>\n                                        <td>{{ client.officeName }}</td>\n                                        <td>{{ client.rankCode }}</td>\n                                        <td>{{ client.rankName }}</td>\n                                        <td>{{ client.effectiveDate }}</td>\n                                        <td>{{ client.Currency }}</td>\n                                        <td>{{ client.matterNumber }}</td>\n                                        <td>{{ client.matterName }}</td>\n                                        <td>{{ client.billRate }}</td>\n                                        <td>{{ client.standardRate }}</td>\n                                        <td>{{ client.diff }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div class=\"d-flex justify-content-between p-2\">\n                                <ngb-pagination\n                                    [collectionSize]=\"_state.totalResults\"\n                                    [(page)]=\"_state.page\"\n                                    [pageSize]=\"_state.limit\" [rotate]=\"true\"\n                                    [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                    (pageChange)=\"refreshMatters()\">\n                                </ngb-pagination>\n\n                                <select class=\"custom-select\"\n                                    style=\"width: auto\"\n                                    [(ngModel)]=\"_state.limit\"\n                                    (ngModelChange)=\"refreshMatters()\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"10\">10 items per page</option>\n                                    <option [ngValue]=\"20\">20 items per page</option>\n                                    <option [ngValue]=\"30\">30 items per page</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 88201:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/client/components/client/client.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Clients'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2 search-header\">\n                        <div class=\"col-md-10 text-left mb-1 mb-md-0\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"clientstaffs\" class=\"form-control\"\n                                    placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2 text-center\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                            <button type=\"button\" (click)=\"downloadFileExcel()\" class=\"btn btn-primary btn-block\">Download</button>\n                        </div>\n                        <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/clients/add-client\" class=\"btn btn-primary\">Add Client</button>\n                        </div> -->\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isClients;else table\">\n                        <p class=\"text-center\">No clients found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th scope=\"col\">#</th> -->\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientGroup\" (sort)=\"onSort($event)\">Client Group <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Group Name <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientNumber\" (sort)=\"onSort($event)\">Client Code <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Client Name <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"rspTkprName\" (sort)=\"onSort($event)\">Client Responsible <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"status\" (sort)=\"onSort($event)\">Status <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"openDate\" (sort)=\"onSort($event)\">Open Date <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"closeDate\" (sort)=\"onSort($event)\">Close Date <span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"lastInvoiceDate\" (sort)=\"onSort($event)\">Last Bill Date <span></span></th>\n                                            <!-- <th scope=\"col\">Client SIC Code/Category</th>\n                                            <th scope=\"col\">Principal Attorney(s)</th>\n                                            <th scope=\"col\">Responsible Billing Manager</th>\n                                            <th scope=\"col\">Agreement Start Date</th>\n                                            <th scope=\"col\">Expiration Date</th>\n                                            <th scope=\"col\">Fee Arrangement Type</th>\n                                            <th scope=\"col\">Fee Arrangement Detail</th>\n                                            <th scope=\"col\">Rate adjustment during term? </th>\n                                            <th scope=\"col\">Internal Rate Adjustment Reminder Email Recipients</th>\n                                            <th scope=\"col\">Internal Rate Adjustment Reminder Email Content</th>\n                                            <th scope=\"col\">Internal Expiration Reminder Recipients</th>\n                                            <th scope=\"col\">Billing Frequency</th>\n                                            <th scope=\"col\">Billing Method</th>\n                                            <th scope=\"col\">Payor Type</th>\n                                            <th scope=\"col\">Payor Detail</th>\n                                            <th scope=\"col\">Is Firm a Preferred Provider?</th>\n                                            <th scope=\"col\">Attachments</th> -->\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let client of clients; index as i\">\n                                            <!-- <th scope=\"row\">{{ i + 1 }}</th> -->\n                                            <td>{{client?.clientGroup}}</td>\n                                            <td>\n                                                {{ client.clientGroupDetails?.name || client.name }}\n                                            </td>\n                                            <td><a routerLink=\"/matters/client-id/{{client?.clientId}}\" role=\"link\">{{client?.clientNumber}}</a></td>\n                                            <td><a routerLink=\"/matters/client-id/{{client?.clientId}}\" role=\"link\">{{client?.name}}</a></td>\n                                            <td>{{client?.rspTkprName}}</td>\n                                            <td>{{client?.status}}</td>\n                                            <td>{{client?.openDate | date: 'mediumDate'}}</td>\n                                            <td>{{client?.closeDate | date: 'mediumDate'}}</td>\n                                            <td>{{client?.lastInvoiceDate | date: 'mediumDate'}}</td>\n                                           \n                                            <!-- <td>\n                                                <label class=\"switch\" *ngIf=\"client.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(client.id, client.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!client.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(client.id, client.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(client.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\">\n                                                    <button (click)=\"deleteUser(client.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td> -->\n                                    \n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshClients()\">\n                                    </ngb-pagination>\n                            \n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refreshClients()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n                \n      \n    </div>  \n</div>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_client_client_module_ts.js.map