"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_time-keeper_time-keeper_module_ts"],{

/***/ 14241:
/*!************************************************************************************!*\
  !*** ./src/app/layout/time-keeper/components/time-keeper/time-keeper.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeKeeperComponent": () => (/* binding */ TimeKeeperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _time_keeper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-keeper.component.html?ngResource */ 36620);
/* harmony import */ var _time_keeper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-keeper.component.scss?ngResource */ 57605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_time_keeper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/time-keeper.service */ 98469);











let TimeKeeperComponent = class TimeKeeperComponent {
    constructor(router, timeKeeperService, cdr, confirmationDialogService) {
        this.router = router;
        this.timeKeeperService = timeKeeperService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.timeKeepers = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isTimeKeepers = true;
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
            this.getAllTimeKeepers(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllTimeKeepers(this._state);
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllTimeKeepers(this._state);
    }
    downloadFileExcel() {
        return this.timeKeeperService.getTimeKeeperForExcelDownload(this._state).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "time-keeper");
        }, (error) => {
        });
    }
    getAllTimeKeepers(state) {
        this.timeKeeperService.getTimeKeepers(state).subscribe(response => {
            this.timeKeepers = response.results;
            if (this.timeKeepers.length == 0) {
                this.isTimeKeepers = false;
            }
            else {
                this.isTimeKeepers = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    refreshTimeKeepers() {
        this.getAllTimeKeepers(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editTimeKeeper(timeKeeperId) {
        this.router.navigate(['/timeKeepers/edit-timeKeeper/' + timeKeeperId]);
    }
    updateStatus(timeKeeperId, status) {
        let data = {
            isActive: !status
        };
        this.timeKeeperService.updateTimeKeeper(timeKeeperId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshTimeKeepers();
            }
        });
    }
    updateFavorite(timeKeeperId, status) {
        let data = {
            isFavorite: !status
        };
        this.timeKeeperService.updateTimeKeeper(timeKeeperId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshTimeKeepers();
            }
        });
    }
    deleteTimeKeeper(timeKeeperId) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this timeKeeper ?')
            .then((confirmed) => {
            if (confirmed) {
                this.timeKeeperService.deleteTimeKeeper(timeKeeperId).subscribe(response => {
                    this.getAllTimeKeepers(this._state);
                });
            }
        });
    }
};
TimeKeeperComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_time_keeper_service__WEBPACK_IMPORTED_MODULE_6__.TimeKeeperService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
TimeKeeperComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
TimeKeeperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-time-keeper',
        template: _time_keeper_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_time_keeper_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimeKeeperComponent);



/***/ }),

/***/ 76159:
/*!********************************************************!*\
  !*** ./src/app/layout/time-keeper/directives/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 30003);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 30003:
/*!*********************************************************************!*\
  !*** ./src/app/layout/time-keeper/directives/sortable.directive.ts ***!
  \*********************************************************************/
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

/***/ 98469:
/*!*******************************************************************!*\
  !*** ./src/app/layout/time-keeper/service/time-keeper.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeKeeperService": () => (/* binding */ TimeKeeperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let TimeKeeperService = class TimeKeeperService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getTimeKeepers(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/timekeepers?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/timekeepers?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getTimeKeeperForExcelDownload(data) {
        if (data.searchTerm == '') {
            return this.apiService.getBlob(`/timekeepers/download?sortBy=${data.sortColumn + ':' + data.sortDirection}`);
        }
        else {
            return this.apiService.getBlob(`/timekeepers/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
        }
    }
    getDeletedTimeKeepers(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/timekeepers?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/timekeepers?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getTimeKeeperCSV() {
        return this.apiService.get(`/timekeepers/bulk/csv/data`);
    }
    getTimeKeeperById(data) {
        return this.apiService.get(`/timekeepers/${data}`);
    }
    addNewTimeKeeper(data) {
        return this.apiService.post(`/timekeepers`, data);
    }
    updateTimeKeeper(clientId, data) {
        return this.apiService.patch(`/timekeepers/${clientId}`, data);
    }
    deleteTimeKeeper(data) {
        return this.apiService.delete(`/timekeepers/` + data);
    }
};
TimeKeeperService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
TimeKeeperService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TimeKeeperService);



/***/ }),

/***/ 58310:
/*!******************************************************************!*\
  !*** ./src/app/layout/time-keeper/time-keeper-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeKeeperRoutingModule": () => (/* binding */ TimeKeeperRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_time_keeper_time_keeper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/time-keeper/time-keeper.component */ 14241);




const routes = [
    {
        path: '',
        component: _components_time_keeper_time_keeper_component__WEBPACK_IMPORTED_MODULE_0__.TimeKeeperComponent
    },
];
let TimeKeeperRoutingModule = class TimeKeeperRoutingModule {
};
TimeKeeperRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TimeKeeperRoutingModule);



/***/ }),

/***/ 41856:
/*!**********************************************************!*\
  !*** ./src/app/layout/time-keeper/time-keeper.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeKeeperModule": () => (/* binding */ TimeKeeperModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _time_keeper_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-keeper-routing.module */ 58310);
/* harmony import */ var _components_time_keeper_time_keeper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/time-keeper/time-keeper.component */ 14241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _service_time_keeper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/time-keeper.service */ 98469);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives */ 76159);











let TimeKeeperModule = class TimeKeeperModule {
};
TimeKeeperModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _components_time_keeper_time_keeper_component__WEBPACK_IMPORTED_MODULE_1__.TimeKeeperComponent,
            _directives__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _time_keeper_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimeKeeperRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_10__.NgxMaskModule.forRoot(),
        ],
        providers: [_directives__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader, _service_time_keeper_service__WEBPACK_IMPORTED_MODULE_3__.TimeKeeperService]
    })
], TimeKeeperModule);



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

/***/ 57605:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/time-keeper/components/time-keeper/time-keeper.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lLWtlZXBlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 36620:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/time-keeper/components/time-keeper/time-keeper.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'TimeKeepers'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2 search-header\">\n                        <div class=\"col-md-10 text-left mb-1 mb-md-0\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"timeKeeperstaffs\" class=\"form-control\"\n                                    placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/timeKeepers/add-time-keeper\" class=\"btn btn-primary\">Add TimeKeeper</button>\n                        </div> -->\n                        <div class=\"col-md-2 text-center\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                            <button type=\"button\" (click)=\"downloadFileExcel()\" class=\"btn btn-primary btn-block\">Download</button>\n                        </div>\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isTimeKeepers;else table\">\n                        <p class=\"text-center\">No timekeeper found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th scope=\"col\">#</th> -->\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"timekeeperId\" (sort)=\"onSort($event)\">ID</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Name</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"timekeeperNumber\" (sort)=\"onSort($event)\">Number</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"office\" (sort)=\"onSort($event)\">Office</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"department\" (sort)=\"onSort($event)\">Department</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"section\" (sort)=\"onSort($event)\">Section</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"title\" (sort)=\"onSort($event)\">Title</th>\n                                            <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"rateClass\" (sort)=\"onSort($event)\">Rate Class</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let timeKeeper of timeKeepers; index as i\">\n                                            <!-- <th>{{((_state.page-1) * _state.limit) + i+1}}</th> -->\n                                            <td>{{timeKeeper?.timekeeperId}}</td>\n                                            <td>{{timeKeeper?.name}}</td>\n                                            <td>{{timeKeeper?.timekeeperNumber}}</td>\n                                            <td>{{ timeKeeper?.office }}</td>\n                                            <td>{{ timeKeeper?.department }}</td>\n                                            <td>{{ timeKeeper?.section }}</td>\n                                            <td>{{ timeKeeper?.title }}</td>\n                                            <td>{{ timeKeeper?.rateClass }}</td>\n\n                                            <!-- <td>{{timeKeeper?.displayName}}</td>\n                                            <td>{{timeKeeper?.billName}}</td>\n                                            <td>{{ timeKeeper?.details?.rownum }}</td>\n                                            <td>{{ timeKeeper?.details?.TkprDateID }}</td>\n                                            <td>{{ timeKeeper?.details?.TimekeeperLkUp }}</td>\n                                            <td>{{ timeKeeper?.details?.EffStart | date:'medium' }}</td>\n                                            \n                                           \n                                            <td>{{ timeKeeper?.details?.HireDate | date:'medium'}}</td>\n                                            <td>{{ timeKeeper?.details?.TermDate | date:'medium'}}</td>\n                                            \n                                            <td>{{ timeKeeper?.details?.WorkCalendar }}</td>\n                                            <td>{{ timeKeeper?.details?.NxUnit }}</td>\n                                            <td>{{ timeKeeper?.details?.SupTkpr }}</td>\n                                            <td>{{ timeKeeper?.details?.NxEndDate | date:'medium' }}</td>\n                                            <td>{{ timeKeeper?.details?.NxStartDate | date:'medium' }}</td>\n                                            <td>{{ timeKeeper?.details?.WorkType }}</td>\n                                            <td>{{ timeKeeper?.details?.BillingCoordinator }}</td>\n                                            <td>{{ timeKeeper?.details?.ArchetypeCode }}</td>\n                                            <td>{{ timeKeeper?.details?.CurrProcItemID }}</td>\n                                            <td>{{ timeKeeper?.details?.LastProcItemID }}</td>\n                                            <td>{{ timeKeeper?.details?.OrigProcItemID }}</td>\n                                            <td>{{ timeKeeper?.details?.HasAttachments }}</td>\n                                            <td>{{ timeKeeper?.details?.TimeStamp | date:'medium' }}</td> -->\n                                            \n                                            <!-- <td>\n                                                <label class=\"switch\" *ngIf=\"timeKeeper.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(timeKeeper.id, timeKeeper.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!timeKeeper.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(timeKeeper.id, timeKeeper.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(timeKeeper.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\">\n                                                    <button (click)=\"deleteUser(timeKeeper.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td> -->\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshTimeKeepers()\">\n                                    </ngb-pagination>\n                            \n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refreshTimeKeepers()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n                \n      \n    </div>  \n</div>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_time-keeper_time-keeper_module_ts.js.map