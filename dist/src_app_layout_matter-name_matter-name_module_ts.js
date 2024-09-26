"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_matter-name_matter-name_module_ts"],{

/***/ 49919:
/*!************************************************************************************!*\
  !*** ./src/app/layout/matter-name/components/matter-name/matter-name.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterComponent": () => (/* binding */ MatterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matter_name_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matter-name.component.html?ngResource */ 61977);
/* harmony import */ var _matter_name_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matter-name.component.scss?ngResource */ 96289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_matter_name_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/matter-name.service */ 19041);











let MatterComponent = class MatterComponent {
    constructor(router, matterService, cdr, route, confirmationDialogService) {
        this.router = router;
        this.matterService = matterService;
        this.cdr = cdr;
        this.route = route;
        this.confirmationDialogService = confirmationDialogService;
        this.matters = [];
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isMatters = true;
        this.isPaginationLoading = false;
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
        this.route.params.subscribe(params => {
            if (params.matterName !== '' && params.matterName != null) {
                this.matterName = params.matterName;
            }
            if (params.matterId !== '' && params.matterId != null) {
                this.matterId = params.matterId;
            }
        });
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.page = 1;
            this._state.searchTerm = value;
            this.isLoading = true;
            this.getAllMatters(this._state, this.matterName, this.matterId);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllMatters(this._state, this.matterName, this.matterId);
    }
    downloadFileExcel() {
        return this.matterService.getMaterForExcelDownload(this._state, this.matterName, this.matterId).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "matter");
        }, (error) => {
        });
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllMatters(this._state, this.matterName, this.matterId);
    }
    getAllMatters(state, matterName, matterId) {
        this.matterService.getMatters(state, matterName, matterId).subscribe(response => {
            this.isPaginationLoading = false;
            this.matters = response.results;
            if (this.matters.length == 0) {
                this.isMatters = false;
            }
            else {
                this.isMatters = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isPaginationLoading = false;
            this.isLoading = false;
        });
    }
    refreshMatters() {
        this.isPaginationLoading = true;
        this.getAllMatters(this._state, this.matterName, this.matterId);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editMatter(matterId) {
        this.router.navigate(['/matters/edit-matter/' + matterId]);
    }
    updateStatus(matterId, status) {
        let data = {
            isActive: !status
        };
        this.matterService.updateMatter(matterId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshMatters();
            }
        });
    }
    updateFavorite(matterId, status) {
        let data = {
            isFavorite: !status
        };
        this.matterService.updateMatter(matterId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshMatters();
            }
        });
    }
    deleteMatter(matterId) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this matter ?')
            .then((confirmed) => {
            if (confirmed) {
                this.matterService.deleteMatter(matterId).subscribe(response => {
                    this.getAllMatters(this._state, this.matterName, this.matterId);
                });
            }
        });
    }
};
MatterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_matter_name_service__WEBPACK_IMPORTED_MODULE_6__.MatterService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
MatterComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
MatterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-matter-name',
        template: _matter_name_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_matter_name_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatterComponent);



/***/ }),

/***/ 96461:
/*!******************************************************************!*\
  !*** ./src/app/layout/matter-name/matter-name-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterRoutingModule": () => (/* binding */ MatterRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_matter_name_matter_name_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/matter-name/matter-name.component */ 49919);




const routes = [
    {
        path: '',
        component: _components_matter_name_matter_name_component__WEBPACK_IMPORTED_MODULE_0__.MatterComponent
    },
];
let MatterRoutingModule = class MatterRoutingModule {
};
MatterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], MatterRoutingModule);



/***/ }),

/***/ 88805:
/*!**********************************************************!*\
  !*** ./src/app/layout/matter-name/matter-name.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterNameModule": () => (/* binding */ MatterNameModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _matter_name_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matter-name-routing.module */ 96461);
/* harmony import */ var _components_matter_name_matter_name_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/matter-name/matter-name.component */ 49919);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives */ 94221);
/* harmony import */ var _service_matter_name_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/matter-name.service */ 19041);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 80446);











let MatterNameModule = class MatterNameModule {
};
MatterNameModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _components_matter_name_matter_name_component__WEBPACK_IMPORTED_MODULE_1__.MatterComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _matter_name_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatterRoutingModule,
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
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader, _service_matter_name_service__WEBPACK_IMPORTED_MODULE_4__.MatterService]
    })
], MatterNameModule);



/***/ }),

/***/ 19041:
/*!*******************************************************************!*\
  !*** ./src/app/layout/matter-name/service/matter-name.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterService": () => (/* binding */ MatterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let MatterService = class MatterService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getMatters(data, matterName, matterId) {
        let queryString = this.queryString(matterName, matterId);
        if (data.searchTerm == '') {
            return this.apiService.post(`/search/matter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${queryString}`, {});
        }
        else {
            return this.apiService.post(`/search/matter?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${queryString}`, {});
        }
    }
    getMaterForExcelDownload(data, matterName, matterId) {
        let queryString = this.queryString(matterName, matterId);
        if (data.searchTerm == '') {
            return this.apiService.postBlob(`/search/matter/download?sortBy=${data.sortColumn + ':' + data.sortDirection}${queryString}`, {});
        }
        else {
            return this.apiService.postBlob(`/search/matter/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}${queryString}`, {});
        }
    }
    getDeletedMatters(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/Matter?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/Matter?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getMatterCSV() {
        return this.apiService.get(`/Matter/bulk/csv/data`);
    }
    getMatterById(data) {
        return this.apiService.get(`/Matter/${data}`);
    }
    addNewMatter(data) {
        return this.apiService.post(`/Matter`, data);
    }
    updateMatter(clientId, data) {
        return this.apiService.patch(`/Matter/${clientId}`, data);
    }
    deleteMatter(data) {
        return this.apiService.delete(`/Matter/` + data);
    }
    queryString(matterName, matterId) {
        let queryArray = [];
        if (matterName) {
            queryArray.push(`matterName=${decodeURI(matterName)}`);
        }
        if (matterId) {
            queryArray.push(`matterId=${decodeURI(matterId)}`);
        }
        let queryString = "";
        if (queryArray.length > 0) {
            queryString = `&${queryArray.join("&")}`;
        }
        return queryString;
    }
};
MatterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
MatterService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], MatterService);



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

/***/ 96289:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/matter-name/components/matter-name/matter-name.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXR0ZXItbmFtZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 61977:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/matter-name/components/matter-name/matter-name.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Matters'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2\">\n                        <div class=\"col-md-10 text-left\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"searchstaffs\"\n                                    class=\"form-control\" placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-2 text-center\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                            <button type=\"button\" (click)=\"downloadFileExcel()\"\n                                class=\"btn btn-primary\">Download</button>\n                        </div>\n                        <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/search/add-matter\" class=\"btn btn-primary\">Add Matter</button>\n                        </div> -->\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isMatters;else table\">\n                        <p class=\"text-center\">No Matter found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th scope=\"col\">#</th> -->\n                                            <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Matter ID</th>\n                                            <th scope=\"col\" sortable=\"email\" (sort)=\"onSort($event)\">Matter Name</th>\n                                            <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Client ID</th>\n                                            <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Client name</th>\n                                            <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Client Group</th>\n                                            <th scope=\"col\" sortable=\"feeArrangementType\" (sort)=\"onSort($event)\">\n                                                Fee Arrangement Type</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"isPaginationLoading\">\n                                        <tr>\n                                            <td colspan=\"6\">\n                                                <div class=\"text-center\">\n                                                    <div class=\"spinner-border\" role=\"status\">\n                                                        <span class=\"sr-only\">Loading...</span>\n                                                    </div>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                    <tbody *ngIf=\"!isPaginationLoading\">\n                                        <tr *ngFor=\"let matter of matters; index as i\">\n                                            <!-- <th scope=\"row\">{{ i + 1 }}</th> -->\n                                            <td>{{matter?.matterId}}</td>\n                                            <td>{{matter?.matterName}}</td>\n                                            <td>{{matter?.client?.clientId}}</td>\n                                            <td>{{matter?.clientName}}</td>\n                                            <td>{{matter?.client?.clientGroup}}</td>\n                                            <td>{{agreement?.feeArrangementType}}</td>\n                                            <!-- <td>\n                                                <label class=\"switch\" *ngIf=\"matter.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(matter.id, matter.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!matter.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(matter.id, matter.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(matter.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\">\n                                                    <button (click)=\"deleteUser(matter.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td> -->\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\"\n                                        [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshMatters()\">\n                                    </ngb-pagination>\n\n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\"\n                                        (ngModelChange)=\"refreshMatters()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n\n\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_matter-name_matter-name_module_ts.js.map