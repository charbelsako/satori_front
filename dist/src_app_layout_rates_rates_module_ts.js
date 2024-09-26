"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_rates_rates_module_ts"],{

/***/ 39155:
/*!******************************************************************!*\
  !*** ./src/app/layout/rates/components/rates/rates.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatesComponent": () => (/* binding */ RatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rates.component.html?ngResource */ 53797);
/* harmony import */ var _rates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rates.component.scss?ngResource */ 30659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_rates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/rates.service */ 14285);











let RatesComponent = class RatesComponent {
    constructor(router, rateService, cdr, confirmationDialogService) {
        this.router = router;
        this.rateService = rateService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.rates = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isRates = true;
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
            this.getAllRates(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllRates(this._state);
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllRates(this._state);
    }
    downloadFileExcel() {
        return this.rateService.getRateForExcelDownload(this._state).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "rate");
        }, (error) => {
        });
    }
    getAllRates(state) {
        this.rateService.getRates(state).subscribe(response => {
            this.rates = response.results;
            console.log(this.rates, "---------------------");
            if (this.rates.length == 0) {
                this.isRates = false;
            }
            else {
                this.isRates = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    refreshRates() {
        this.getAllRates(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editRate(rateId) {
        this.router.navigate(['/rates/edit-rate/' + rateId]);
    }
    updateStatus(rateId, status) {
        let data = {
            isActive: !status
        };
        this.rateService.updateRate(rateId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshRates();
            }
        });
    }
    updateFavorite(rateId, status) {
        let data = {
            isFavorite: !status
        };
        this.rateService.updateRate(rateId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshRates();
            }
        });
    }
    deleteRate(rateId) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this rate ?')
            .then((confirmed) => {
            if (confirmed) {
                this.rateService.deleteRate(rateId).subscribe(response => {
                    this.getAllRates(this._state);
                });
            }
        });
    }
};
RatesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_rates_service__WEBPACK_IMPORTED_MODULE_6__.RateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
RatesComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
RatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-rate',
        template: _rates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_rates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatesComponent);



/***/ }),

/***/ 11641:
/*!**************************************************!*\
  !*** ./src/app/layout/rates/directives/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 86674);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 86674:
/*!***************************************************************!*\
  !*** ./src/app/layout/rates/directives/sortable.directive.ts ***!
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

/***/ 24467:
/*!******************************************************!*\
  !*** ./src/app/layout/rates/rates-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatesRoutingModule": () => (/* binding */ RatesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_rates_rates_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/rates/rates.component */ 39155);




const routes = [
    {
        path: '',
        component: _components_rates_rates_component__WEBPACK_IMPORTED_MODULE_0__.RatesComponent
    },
];
let RatesRoutingModule = class RatesRoutingModule {
};
RatesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], RatesRoutingModule);



/***/ }),

/***/ 71499:
/*!**********************************************!*\
  !*** ./src/app/layout/rates/rates.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatesModule": () => (/* binding */ RatesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _components_rates_rates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rates/rates.component */ 39155);
/* harmony import */ var _rates_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rates-routing.module */ 24467);
/* harmony import */ var _service_rates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/rates.service */ 14285);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives */ 11641);











let RatesModule = class RatesModule {
};
RatesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _components_rates_rates_component__WEBPACK_IMPORTED_MODULE_1__.RatesComponent,
            _directives__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _rates_routing_module__WEBPACK_IMPORTED_MODULE_2__.RatesRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_10__.NgxMaskModule.forRoot(),
        ],
        providers: [_directives__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader, _service_rates_service__WEBPACK_IMPORTED_MODULE_3__.RateService]
    })
], RatesModule);



/***/ }),

/***/ 14285:
/*!*******************************************************!*\
  !*** ./src/app/layout/rates/service/rates.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateService": () => (/* binding */ RateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let RateService = class RateService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getRates(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/rates?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/rates?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getRateForExcelDownload(data) {
        if (data.searchTerm == '') {
            return this.apiService.getBlob(`/rates/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
        }
        else {
            return this.apiService.getBlob(`/rates/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
        }
    }
    getDeletedRates(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/rates?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/rates?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getRateCSV() {
        return this.apiService.get(`/rates/bulk/csv/data`);
    }
    getRateById(data) {
        return this.apiService.get(`/rates/${data}`);
    }
    addNewRate(data) {
        return this.apiService.post(`/rates`, data);
    }
    updateRate(clientId, data) {
        return this.apiService.patch(`/rates/${clientId}`, data);
    }
    deleteRate(data) {
        return this.apiService.delete(`/rates/` + data);
    }
};
RateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
RateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], RateService);



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

/***/ 52558:
/*!***************************************************************!*\
  !*** ./src/app/shared/modules/download-file/download-file.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadFile": () => (/* binding */ downloadFile)
/* harmony export */ });
const downloadFile = (data, filename = "records") => {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    let downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `${filename}.xlsx`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};



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

/***/ 30659:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/rates/components/rates/rates.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRlcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 53797:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/rates/components/rates/rates.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Rates'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2 search-header\">\n                        <div class=\"col-md-10 text-left mb-1 mb-sm-0\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"timeKeeperstaffs\" class=\"form-control\"\n                                    placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/timeKeepers/add-time-keeper\" class=\"btn btn-primary\">Add TimeKeeper</button>\n                        </div> -->\n                        <div class=\"col-md-2 text-center\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                            <button type=\"button\" (click)=\"downloadFileExcel()\" class=\"btn btn-primary btn-block\">Download</button>\n                        </div>\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isRates;else table\">\n                        <p class=\"text-center\">No rates found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th>#</th> -->\n                                            <!-- <th>rownum</th> -->\n                                            <!-- <th>rateID</th> -->\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"code\" (sort)=\"onSort($event)\">Code<span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"description\" (sort)=\"onSort($event)\">Description<span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"formula\" (sort)=\"onSort($event)\">Formula<span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"rateTypeOne\" (sort)=\"onSort($event)\">Rate Type One<span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"isApplyCurrencyRounding\" (sort)=\"onSort($event)\">Currency Rounding<span></span></th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"createdAt\" (sort)=\"onSort($event)\">Created At<span></span></th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let data of rates; index as i\">\n                                            <!-- <th>{{((_state.page-1) * _state.limit) + i+1}}</th> -->\n                                            <!-- <td>{{ data.rownum }}</td> -->\n                                            <!-- <td>{{ data.rateID }}</td> -->\n                                            <td>{{ data.code }}</td>\n                                            <td>{{ data.description }}</td>\n                                            <td>{{ data.formula }}</td>\n                                            <td>{{ data.rateTypeOne }}</td>\n                                            <td>{{ data.isApplyCurrencyRounding }}</td>\n                                            <td>{{ data.createdAt | date: 'medium'}}</td>\n                                            <!-- <td>\n                                                <label class=\"switch\" *ngIf=\"timeKeeper.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(timeKeeper.id, timeKeeper.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!timeKeeper.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(timeKeeper.id, timeKeeper.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(timeKeeper.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\">\n                                                    <button (click)=\"deleteUser(timeKeeper.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td> -->\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshTimeKeepers()\">\n                                    </ngb-pagination>\n                            \n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refreshRates()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n                \n      \n    </div>  \n</div>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_rates_rates_module_ts.js.map