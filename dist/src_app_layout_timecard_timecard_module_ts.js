"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_timecard_timecard_module_ts"],{

/***/ 82489:
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/timecard/components/timecard-details/timecard-details.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimecardDetailsComponent": () => (/* binding */ TimecardDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _timecard_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timecard-details.component.html?ngResource */ 32360);
/* harmony import */ var _timecard_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timecard-details.component.scss?ngResource */ 74372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _service_timecard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/timecard.service */ 67090);







let TimecardDetailsComponent = class TimecardDetailsComponent {
    constructor(router, route, timeCardService, cdr) {
        this.router = router;
        this.route = route;
        this.timeCardService = timeCardService;
        this.cdr = cdr;
        this.isLoading = false;
        this.data = [];
        this.route.params.subscribe(params => {
            if (params.timecardId !== '' && params.timecardId != null) {
                this.timecardId = params.timecardId;
                this.getTimeCardById();
            }
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getTimeCardById();
    }
    getTimeCardById() {
        this.isLoading = true;
        this.timeCardService.getTimeCardById(this.timecardId).subscribe(response => {
            this.data = response;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/timecards']);
        });
    }
};
TimecardDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _service_timecard_service__WEBPACK_IMPORTED_MODULE_3__.TimeCardService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
TimecardDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-timecard-details',
        template: _timecard_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_timecard_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimecardDetailsComponent);



/***/ }),

/***/ 70445:
/*!***************************************************************************!*\
  !*** ./src/app/layout/timecard/components/timecard/timecard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeCardComponent": () => (/* binding */ TimeCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _timecard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timecard.component.html?ngResource */ 91921);
/* harmony import */ var _timecard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timecard.component.scss?ngResource */ 18858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_timecard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/timecard.service */ 67090);











let TimeCardComponent = class TimeCardComponent {
    constructor(router, timeCardService, cdr, confirmationDialogService) {
        this.router = router;
        this.timeCardService = timeCardService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.timeCards = [];
        this.timeKeeperData = {};
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isTimeCards = true;
        this.downloading = false;
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
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getAllTimeCards(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllTimeCards(this._state);
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllTimeCards(this._state);
    }
    downloadFileExcel() {
        this.downloading = true;
        return this.timeCardService.getTimeCardForExcelDownload(this._state).subscribe(response => {
            this.downloading = false;
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "timecard");
        }, (error) => {
            this.downloading = false;
        });
    }
    getAllTimeCards(state) {
        this.isPaginationLoading = true;
        this.timeCardService.getTimeCards(state).subscribe(response => {
            this.timeCards = response?.result?.results || [];
            this.timeKeeperData = response?.timeKeeperData || [];
            if (this.timeCards.length == 0) {
                this.isTimeCards = false;
            }
            else {
                this.isTimeCards = true;
            }
            this.isPaginationLoading = false;
            this.setState(response?.result);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.isPaginationLoading = false;
        });
    }
    refreshTimeCards() {
        this.getAllTimeCards(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editTimeCard(timeCardId) {
        this.router.navigate(['/timeCards/edit-timeCard/' + timeCardId]);
    }
    updateStatus(timeCardId, status) {
        let data = {
            isActive: !status
        };
        this.timeCardService.updateTimeCard(timeCardId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshTimeCards();
            }
        });
    }
    updateFavorite(timeCardId, status) {
        let data = {
            isFavorite: !status
        };
        this.timeCardService.updateTimeCard(timeCardId, data).subscribe(response => {
            if (response) {
                // this.toastr.success(response.name + ' Updated!', 'Success');
                this.refreshTimeCards();
            }
        });
    }
    deleteTimeCard(timeCardId) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this timeCard ?')
            .then((confirmed) => {
            if (confirmed) {
                this.timeCardService.deleteTimeCard(timeCardId).subscribe(response => {
                    this.getAllTimeCards(this._state);
                });
            }
        });
    }
};
TimeCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_timecard_service__WEBPACK_IMPORTED_MODULE_6__.TimeCardService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
TimeCardComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
TimeCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-timecard',
        template: _timecard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_timecard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimeCardComponent);



/***/ }),

/***/ 5229:
/*!*****************************************************!*\
  !*** ./src/app/layout/timecard/directives/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 26995);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 26995:
/*!******************************************************************!*\
  !*** ./src/app/layout/timecard/directives/sortable.directive.ts ***!
  \******************************************************************/
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

/***/ 6133:
/*!************************************************************!*\
  !*** ./src/app/layout/timecard/timecard-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeCardRoutingModule": () => (/* binding */ TimeCardRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_timecard_timecard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/timecard/timecard.component */ 70445);
/* harmony import */ var _components_timecard_details_timecard_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timecard-details/timecard-details.component */ 82489);





const routes = [
    {
        path: '',
        component: _components_timecard_timecard_component__WEBPACK_IMPORTED_MODULE_0__.TimeCardComponent
    },
    {
        path: 'view/:timecardId',
        component: _components_timecard_details_timecard_details_component__WEBPACK_IMPORTED_MODULE_1__.TimecardDetailsComponent
    },
];
let TimeCardRoutingModule = class TimeCardRoutingModule {
};
TimeCardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], TimeCardRoutingModule);



/***/ }),

/***/ 47235:
/*!****************************************************!*\
  !*** ./src/app/layout/timecard/timecard.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeCardModule": () => (/* binding */ TimeCardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _components_timecard_timecard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timecard/timecard.component */ 70445);
/* harmony import */ var _timecard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timecard-routing.module */ 6133);
/* harmony import */ var _service_timecard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/timecard.service */ 67090);
/* harmony import */ var _components_timecard_details_timecard_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/timecard-details/timecard-details.component */ 82489);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ 5229);












let TimeCardModule = class TimeCardModule {
};
TimeCardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_timecard_timecard_component__WEBPACK_IMPORTED_MODULE_1__.TimeCardComponent,
            _components_timecard_details_timecard_details_component__WEBPACK_IMPORTED_MODULE_4__.TimecardDetailsComponent,
            _directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _timecard_routing_module__WEBPACK_IMPORTED_MODULE_2__.TimeCardRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule.forRoot(),
        ],
        providers: [_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_timecard_service__WEBPACK_IMPORTED_MODULE_3__.TimeCardService]
    })
], TimeCardModule);



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

/***/ 74372:
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/timecard/components/timecard-details/timecard-details.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 18858:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/timecard/components/timecard/timecard.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "th[sortable] {\n  cursor: pointer;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\nth[sortable].desc:before,\nth[sortable].asc:before {\n  content: \"\";\n  display: block;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC\") no-repeat;\n  background-size: 22px;\n  width: 22px;\n  height: 22px;\n  float: right;\n}\n\nth[sortable].desc:before {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUVBOztFQUVDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMjhCQUFBO0VBRUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRDs7QUFHQTtFQUNDLHlCQUFBO0VBQ0EsNkJBQUE7QUFBRCIsImZpbGUiOiJ0aW1lY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoW3NvcnRhYmxlXSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbnRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSxcbnRoW3NvcnRhYmxlXS5hc2M6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFBWE5TUjBJQXJzNGM2UUFBQW14SlJFRlVlQUh0bWtzclJWRVV4NzJmSDhDSUdRTkprcEdVVW1ha0RFaVpTSlJJWnNSUW1Da1RKUm1abUpnUUUwa3BYMEQ1REpLSmdmZjd2K3J1MnUzTzN2dmM2N1RPdnNkYXRkcm5uUDFZLy8vdjdIdnZ1YmRiVWlJaEJJU0FFQkFDUWtBSUNBRWhJQVE0Q1hTaDJEbnlEZm1DUEVHMkl2OUY5TVBsTS9MSHlBZWNkeU16SFlOd1IzZmROSy9PSDlIWGwxVUNvekQyNFRDdklMeGl6RURXSUV6QTBGY004d29DZ1JySkNvUzVQSXdyQU5RU01BSlgxTEVJOWJxcFFvNEpZTkZGS1JTdklnc3hIRFZucVpnSWtQbk5CTTBySUd0WWs5WU9Pc3FnYmdlcFJDZmRibUZ0cWhGa1ZFRFZQakpwMCtaNmU2aFJIaHFCS2dnNlpEQ3ZZQnlnVm1Vb0VHb2g1SlRSdklKd2hKbzFhVU9vaDRDTFBNeXZ4eGk3RVdPTWduQ0dzWFhJMUdJWGxaVVlYN3VjVStrYlI4Tlc4bGgzTzdjdWUwUGszMk1LbmRmVXhRRkF3eGRpcmszZkhhcHBBbmMwb3FEUHpEZkdUQnJDZkhQMDRkTTRvVFY4Y3hyMFNWekg5RkYwN3hEM2liNnhDREUrTSthVWNWeWd0V3p6YnRHWDJyUEJyRVVZZmVjZlFrYUZ6WWk2SGpWbkdCZHRMN2VwcUFsYzEralJkQWFwNzRScm5QYzRCQ2lqdHRZMnRSY2ROMGcxN3c3SHFaclhoZEpUWUF1UzNoZDh6K3ZLZ0szVjF6V1BhZTBtWkRNeWthZEJuMWhUUUJMblpOd1ZySnBTZS9Od0VlRHNFd0NjdEVPc0pUc2d4THZDcVVsMkFDZnRFR3ZKRGdqeHJuQnFraDNBU1R2RVdySURRcndybkpwa0IzRFNEckdXN0lBUTd3cW5KdGtCbkxSenRlalhYVnU0K214ei9uUTlqUjF3NVZCODZlakxURmNubkR3aHpWK0Y2VCtDSFpseDZUSFNqbjc2ZXl5QklPUEh5RGFraEJBUUFrSkFDQWdCSVNBRWhJQVFZQ0x3QzhKeHBBbXNFR3Q2QUFBQUFFbEZUa1N1UW1DQycpXG5cdFx0bm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDIycHg7XG5cdHdpZHRoOiAyMnB4O1xuXHRoZWlnaHQ6IDIycHg7XG5cdGZsb2F0OiByaWdodDtcbn1cblxudGhbc29ydGFibGVdLmRlc2M6YmVmb3JlIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */";

/***/ }),

/***/ 32360:
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/timecard/components/timecard-details/timecard-details.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'View Timecard'\" [previousHeading]=\"'Timecards'\" [previousLink]=\"'timecards'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div *ngIf=\"data\" class=\"table-responsive\">\n                    <table class=\"table table-striped table-bordered\">\n                      <tbody>\n                        <tr>\n                          <th>rownum</th>\n                          <td>{{ data?.rownum }}</td>\n                          <th>timecardID</th>\n                          <td>{{ data.timecardID }}</td>\n                          <th>timeIndex</th>\n                          <td>{{ data.timeIndex }}</td>\n                          <th>origTimeIndex</th>\n                          <td>{{ data.origTimeIndex }}</td>\n                        </tr>\n                        <tr>\n                          <th>office</th>\n                          <td>{{ data.office }}</td>\n                          <th>workDate</th>\n                          <td>{{ data.workDate }}</td>\n                          <th>postDate</th>\n                          <td>{{ data.postDate }}</td>\n                          <th>currency</th>\n                          <td>{{ data.currency }}</td>\n                        </tr>\n                        <tr>\n                          <th>currDate</th>\n                          <td>{{ data.currDate }}</td>\n                          <th>matter</th>\n                          <td>{{ data.matter }}</td>\n                          <th>billMatter</th>\n                          <td>{{ data.billMatter }}</td>\n                          <th>timekeeper</th>\n                          <td>{{ data.timekeeper }}</td>\n                        </tr>\n                        <tr>\n                          <th>workMattEffDate</th>\n                          <td>{{ data.workMattEffDate }}</td>\n                          <th>billMattEffDate</th>\n                          <td>{{ data.billMattEffDate }}</td>\n                          <th>tkprEffDate</th>\n                          <td>{{ data.tkprEffDate }}</td>\n                          <th>workHrs</th>\n                          <td>{{ data.workHrs }}</td>\n                        </tr>\n                        <tr>\n                          <th>workRate</th>\n                          <td>{{ data.workRate }}</td>\n                          <th>workAmt</th>\n                          <td>{{ data.workAmt }}</td>\n                          <th>origHrs</th>\n                          <td>{{ data.origHrs }}</td>\n                          <th>stdCurrency</th>\n                          <td>{{ data.stdCurrency }}</td>\n                        </tr>\n                        <tr>\n                          <th>stdRate</th>\n                          <td>{{ data.stdRate }}</td>\n                          <th>stdAmt</th>\n                          <td>{{ data.stdAmt }}</td>\n                          <th>language</th>\n                          <td>{{ data.language }}</td>\n                          <th>narrative</th>\n                          <td>{{ data.narrative }}</td>\n                        </tr>\n                        <tr>\n                          <th>narrative_UnformattedText</th>\n                          <td>{{ data.narrative_UnformattedText }}</td>\n                          <th>timeType</th>\n                          <td>{{ data.timeType }}</td>\n                          <th>transactionType</th>\n                          <td>{{ data.transactionType }}</td>\n                          <th>editTranType</th>\n                          <td>{{ data.editTranType }}</td>\n                        </tr>\n                        <tr>\n                          <th>profMaster</th>\n                          <td>{{ data.profMaster }}</td>\n                          <th>invMaster</th>\n                          <td>{{ data.invMaster }}</td>\n                          <th>workType</th>\n                          <td>{{ data.workType }}</td>\n                          <th>wIPRemoveDate</th>\n                          <td>{{ data.wIPRemoveDate }}</td>\n                        </tr>\n                        <tr>\n                          <th>refCurrency</th>\n                          <td>{{ data.refCurrency }}</td>\n                          <th>refRate</th>\n                          <td>{{ data.refRate }}</td>\n                          <th>refAmt</th>\n                          <td>{{ data.refAmt }}</td>\n                          <th>unitCurrRate</th>\n                          <td>{{ data.unitCurrRate }}</td>\n                        </tr>\n                        <tr>\n                          <th>firmCurrRate</th>\n                          <td>{{ data.firmCurrRate }}</td>\n                          <th>unitCurrRateStd</th>\n                          <td>{{ data.unitCurrRateStd }}</td>\n                          <th>firmCurrRateStd</th>\n                          <td>{{ data.firmCurrRateStd }}</td>\n                          <th>wIPHrs</th>\n                          <td>{{ data.wIPHrs }}</td>\n                        </tr>\n                        <tr>\n                          <th>wIPRate</th>\n                          <td>{{ data.wIPRate }}</td>\n                          <th>wIPAmt</th>\n                          <td>{{ data.wIPAmt }}</td>\n                          <th>isDisplay</th>\n                          <td>{{ data.isDisplay }}</td>\n                          <th>loadNumber</th>\n                          <td>{{ data.loadNumber }}</td>\n                        </tr>\n                        <tr>\n                          <th>loadSource</th>\n                          <td>{{ data.loadSource }}</td>\n                          <th>loadGroup</th>\n                          <td>{{ data.loadGroup }}</td>\n                          <th>rateCalcList</th>\n                          <td>{{ data.rateCalcList }}</td>\n                          <th>gLDate</th>\n                          <td>{{ data.gLDate }}</td>\n                        </tr>\n                        <tr>\n                          <th>spvTimekeeper</th>\n                          <td>{{ data.spvTimekeeper }}</td>\n                          <th>prevProfMaster</th>\n                          <td>{{ data.prevProfMaster }}</td>\n                          <th>archetypeCode</th>\n                          <td>{{ data.archetypeCode }}</td>\n                          <th>lastProcItemID</th>\n                          <td>{{ data.lastProcItemID }}</td>\n                        </tr>\n                        <tr>\n                          <th>origProcItemID</th>\n                          <td>{{ data.origProcItemID }}</td>\n                          <th>timeStamp</th>\n                          <td>{{ data.timeStamp }}</td>\n                          <th>createdAt</th>\n                          <td>{{ data.createdAt }}</td>\n                          <th>updatedAt</th>\n                          <td>{{ data.updatedAt }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 91921:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/timecard/components/timecard/timecard.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Timecards'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2 search-header\">\n                        <div class=\"col-md-10 text-left mb-1 mb-sm-0\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"timeKeeperstaffs\" class=\"form-control\"\n                                    placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/timeKeepers/add-time-keeper\" class=\"btn btn-primary\">Add TimeKeeper</button>\n                        </div> -->\n                        <div class=\"col-md-2 text-center\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                            <button type=\"button\" *ngIf=\"downloading\" class=\"btn btn-primary btn-block opacity-25\">Downloading...</button>\n                            <button type=\"button\" *ngIf=\"!downloading\" (click)=\"downloadFileExcel()\" class=\"btn btn-primary btn-block \">Download</button>\n                        </div>\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isTimeCards;else table\">\n                        <p class=\"text-center\">No timecards found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"timekeeperNumber\" (sort)=\"onSort($event)\" >Timekeeper </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"displayName\" (sort)=\"onSort($event)\" >Name </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"matter\" (sort)=\"onSort($event)\" >Matter </th>\n                                            <!-- <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientGroup\" (sort)=\"onSort($event)\" >Description </th> -->\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"workRate\" (sort)=\"onSort($event)\" >Worked Rate </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"origHrs\" (sort)=\"onSort($event)\" >Time </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"workAmt\" (sort)=\"onSort($event)\" >Amount @ Worked </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"stdCurrency\" (sort)=\"onSort($event)\" >Currency  </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"stdRate\" (sort)=\"onSort($event)\" >Standard Rate  </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"stdAmt\" (sort)=\"onSort($event)\" >Amount @ Standard </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"workDate\" (sort)=\"onSort($event)\" >Worked Date  </th>\n                                            <th  scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"postDate\" (sort)=\"onSort($event)\" >Posted Date  </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"isPaginationLoading\">\n                                        <tr>\n                                            <td colspan=\"16\">\n                                                <div class=\"text-center\">\n                                                    <div class=\"spinner-border\" role=\"status\">\n                                                        <span class=\"sr-only\">Loading...</span>\n                                                    </div>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                    <tbody *ngIf=\"!isPaginationLoading\">\n                                        <tr *ngFor=\"let data of timeCards; index as i\">\n                                            <td>\n                                                <a [routerLink]=\"['view',data.id]\">\n                                                    {{ timeKeeperData[''+data?.timekeeper]?.timekeeperNumber }}\n                                                </a>\n                                            </td>\n                                            <td>{{timeKeeperData[''+data?.timekeeper]?.name}}</td>\n                                            <td>{{ data.matter }}</td>\n                                            <!-- <td>{{data.matterDetails}}</td> -->\n                                            <td>{{ data.workRate }}</td>    \n                                            <td>{{ data.origHrs }}</td>\n                                            <td>{{ data.workAmt }}</td>\n                                            <td>{{ data.stdCurrency }}</td>\n                                            <td>{{ data.stdRate }}</td>\n                                            <td>{{ data.stdAmt }}</td>\n                                            <td>{{ data.workDate | date:'mediumDate' }}</td>\n                                            <td>{{ data.postDate | date:'mediumDate' }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshTimeCards()\">\n                                    </ngb-pagination>\n                            \n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refreshTimeCards()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n                \n      \n    </div>  \n</div>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_timecard_timecard_module_ts.js.map