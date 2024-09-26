"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_matter_matter_module_ts"],{

/***/ 15720:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter-filter/matter-filter.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterFilterComponent": () => (/* binding */ MatterFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matter_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matter-filter.component.html?ngResource */ 42787);
/* harmony import */ var _matter_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matter-filter.component.scss?ngResource */ 51948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_dashboard_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/dashboard/service/search.service */ 96995);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 14620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _service_matter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/matter.service */ 44240);











let MatterFilterComponent = class MatterFilterComponent {
    constructor(router, searchService, cdr, fb, matterService) {
        this.router = router;
        this.searchService = searchService;
        this.cdr = cdr;
        this.fb = fb;
        this.matterService = matterService;
        this.matterRecords = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.actionparam = {
            status: "",
            openDate: "",
            closeDate: "",
            lastInvoiceDate: "",
            postDate: "",
            billTkprName: "",
            rspTkprName: ""
        };
        this.open = false;
        this.openClass = "";
        this.loader = false;
        this.focusResAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.clickResAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.focusBillAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.clickBillAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this._employee = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this.searchEmployeeResAtt = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.merge)(this.focusResAtt$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.merge)(this.clickResAtt$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(() => !this.instanceResAtt.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((term) => {
            this._employee.searchTerm = term;
            return this.matterService.getMatterByColumn(this._employee, "rspTkprName").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => {
                return x;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => (this.clientLoading = false)));
        this.searchEmployeeBillAtt = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.merge)(this.focusBillAtt$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.merge)(this.clickBillAtt$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(() => !this.instanceBillAtt.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((term) => {
            this._employee.searchTerm = term;
            return this.matterService.getMatterByColumn(this._employee, "billTkprName").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(x => {
                return x;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => (this.clientLoading = false)));
    }
    getFilterValue() {
        if (localStorage.getItem('filter_matter_values')) {
            return JSON.parse(localStorage.getItem('filter_matter_values'));
        }
        return false;
    }
    ngOnInit() {
        this.filterForm = this.fb.group({
            status: ["Open"],
            openDate: [null],
            closeDate: [null],
            lastInvoiceDate: [null],
            postDate: [null],
            billTkprName: [null],
            rspTkprName: [null]
        });
    }
    openMenu() {
        this.open = true;
        this.openClass = "slide-in";
    }
    closeMenu() {
        this.openClass = "slide-out";
        this.open = false;
    }
    emitValues() {
        this.matterRecords.emit(this.filterForm.value);
    }
    resetEvent() {
        this.filterForm.patchValue({
            status: null,
            openDate: null,
            closeDate: null,
            lastInvoiceDate: null,
            postDate: null,
            billTkprName: null,
            rspTkprName: null
        });
        this.emitValues();
    }
    selectedResAtt(item) {
        console.log(item);
        const data = { ...this.filterForm.value, "rspTkprName": item?.item };
        this.matterRecords.emit(data);
    }
    selectedBillAtt(item) {
        console.log(item);
        const data = { ...this.filterForm.value, "billTkprName": item?.item };
        this.matterRecords.emit(data);
    }
    formatEmployee(r) {
        if (typeof r === 'string') {
            return r;
        }
    }
};
MatterFilterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _app_layout_dashboard_service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder },
    { type: _service_matter_service__WEBPACK_IMPORTED_MODULE_4__.MatterService }
];
MatterFilterComponent.propDecorators = {
    instanceResAtt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['instanceResAtt',] }],
    instanceBillAtt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['instanceBillAtt',] }],
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader,] }],
    matterRecords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    actionparam: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ["actionparam",] }]
};
MatterFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-matter-filter',
        template: _matter_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_matter_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatterFilterComponent);



/***/ }),

/***/ 88156:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter-roster/matter-roster.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterRosterComponent": () => (/* binding */ MatterRosterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matter_roster_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matter-roster.component.html?ngResource */ 79191);
/* harmony import */ var _matter_roster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matter-roster.component.scss?ngResource */ 30444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _service_matter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/matter.service */ 44240);









let MatterRosterComponent = class MatterRosterComponent {
    constructor(router, matterService, cdr, route) {
        this.router = router;
        this.matterService = matterService;
        this.cdr = cdr;
        this.route = route;
        this.matters = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
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
            if (params.keyword !== '' && params.keyword != null) {
                this.keyword = params.keyword;
                this.getAllMatters(this._state);
            }
        });
    }
    ngOnInit() {
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllMatters(this._state);
    }
    getAllMatters(state) {
        this.isLoading = true;
        this.matterService.getMatterRoster(state, this.keyword).subscribe(response => {
            this.matters = response.results;
            console.log(response);
            if (this.matters.length == 0) {
                this.isMatters = false;
            }
            else {
                this.isMatters = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    refreshMatters() {
        this.isLoading = true;
        this.getAllMatters(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
MatterRosterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _service_matter_service__WEBPACK_IMPORTED_MODULE_4__.MatterService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
MatterRosterComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
MatterRosterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-matter-roster',
        template: _matter_roster_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_matter_roster_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatterRosterComponent);



/***/ }),

/***/ 65726:
/*!*********************************************************************!*\
  !*** ./src/app/layout/matter/components/matter/matter.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterComponent": () => (/* binding */ MatterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _matter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matter.component.html?ngResource */ 29164);
/* harmony import */ var _matter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matter.component.scss?ngResource */ 877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_matter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/matter.service */ 44240);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_layout_timecard_service_timecard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/layout/timecard/service/timecard.service */ 67090);













let MatterComponent = class MatterComponent {
    constructor(router, route, matterService, timecardService, cdr, confirmationDialogService, modalService) {
        this.router = router;
        this.route = route;
        this.matterService = matterService;
        this.timecardService = timecardService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.modalService = modalService;
        this.matters = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
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
        this.matterIds = [];
        this.openWindowRef = [];
        this.clientExceptionData = [];
        this.matterExceptionData = [];
        this.matterLevelExceptionData = [];
        this.isClientContentLoading = false;
        this.isMatterContentLoading = false;
        this.route.params.subscribe(params => {
            if (params.matterName !== '' && params.matterName != null) {
                this.matterName = params.matterName;
            }
            if (params.matterId !== '' && params.matterId != null) {
                this.matterId = params.matterId;
            }
            if (params.clientName !== '' && params.clientName != null) {
                this.clientName = params.clientName;
            }
            if (params.clientId !== '' && params.clientId != null) {
                this.clientId = params.clientId;
            }
        });
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.page = 1;
            this._state.searchTerm = value;
            this.isLoading = true;
            this.getAllMatters(this._state);
        });
    }
    ngOnDestroy() {
        this.openWindowRef.forEach(win => {
            win.close();
        });
    }
    openWindowMatter(href) {
        const win = window.open(href, '_blank', `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550px,height=350px`);
        this.openWindowRef.push(win);
        return false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllMatters(this._state);
    }
    downloadFileExcel() {
        return this.matterService.getMaterForExcelDownload(this._state, {
            matterName: this.matterName,
            matterId: this.matterId,
            clientName: this.clientName,
            clientId: this.clientId
        }).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_3__.downloadFile)(response, "matter");
        }, (error) => {
        });
    }
    onSort({ column, direction }) {
        console.log(column, direction);
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllMatters(this._state);
    }
    getAllMatters(state) {
        this.isPaginationLoading = true;
        this.matterService.getMatters(state, {
            matterName: this.matterName,
            matterId: this.matterId,
            clientName: this.clientName,
            clientId: this.clientId
        }).subscribe(response => {
            this.matters = response.results;
            if (this.matters.length == 0) {
                this.isMatters = false;
            }
            else {
                this.isMatters = true;
            }
            this.isPaginationLoading = false;
            this.isLoading = false;
            this.setState(response);
        }, (error) => {
            this.isPaginationLoading = false;
            this.isLoading = false;
        });
    }
    getMatterFilterData() {
        this.matterService.getMatterFilteredData(this._state, this.filterData).subscribe((response) => {
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
        this.getAllMatters(this._state);
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
                    this.getAllMatters(this._state);
                });
            }
        });
    }
    openClientData(clientcontent, matter) {
        this.clientExceptionData['matter'] = matter;
        this.timecardService.getTimeCardsByMatter(matter.matterId).subscribe(res => {
            this.isClientContentLoading = true;
            this.clientExceptionData['timecards'] = res.result.results;
            const modalRef = this.modalService.open(clientcontent, { size: 'xl' });
            console.log(this.clientExceptionData);
            this.isClientContentLoading = false;
        }, (error) => {
            this.isClientContentLoading = false;
        });
    }
    openMatterData(mattercontent, matter) {
        this.matterExceptionData['matter'] = matter;
        this.timecardService.getTimeCardsByMatter(matter.matterId).subscribe(res => {
            this.isMatterContentLoading = true;
            this.matterExceptionData['timecards'] = res.result.results;
            const modalRef = this.modalService.open(mattercontent, { size: 'xl' });
            this.isMatterContentLoading = false;
        }, (error) => {
            this.isMatterContentLoading = false;
        });
    }
    openMatterLevelClientData(mattercontent, cliendId) {
        this.timecardService.getTimecardClientLevelRate(cliendId).subscribe(res => {
            this.clientLevelExceptionData = res.timecards.results;
            const modalRef = this.modalService.open(mattercontent, { size: 'xl' });
        });
    }
    openMatterLevelMatterData(mattercontent, matterNumber) {
        this.timecardService.getTimecardMatterLevelRate(matterNumber).subscribe(res => {
            this.matterLevelExceptionData = res.timecards.results;
            const modalRef = this.modalService.open(mattercontent, { size: 'xl' });
        });
    }
    saveFilter(value) {
        if (value) {
            localStorage.setItem('filter_matter_values', JSON.stringify(value));
        }
        else {
            localStorage.removeItem('filter_matter_values');
        }
    }
    handleResults(event) {
        this.saveFilter(event);
        this.filterData = event;
        this.isLoading = true;
        this.getMatterFilterData();
    }
};
MatterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _service_matter_service__WEBPACK_IMPORTED_MODULE_5__.MatterService },
    { type: _app_layout_timecard_service_timecard_service__WEBPACK_IMPORTED_MODULE_7__.TimeCardService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal }
];
MatterComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_6__.NgbdSortableHeader,] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
MatterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-matter',
        template: _matter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_matter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatterComponent);



/***/ }),

/***/ 97169:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/matter/components/view-matter/view-matter.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMatterComponent": () => (/* binding */ ViewMatterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_matter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-matter.component.html?ngResource */ 7952);
/* harmony import */ var _view_matter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-matter.component.scss?ngResource */ 99175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_matter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/matter.service */ 44240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services */ 17253);








let ViewMatterComponent = class ViewMatterComponent {
    constructor(route, MatterService, cdr, jwtService, router) {
        this.route = route;
        this.MatterService = MatterService;
        this.cdr = cdr;
        this.jwtService = jwtService;
        this.router = router;
        this.isEditAccess = false;
        this.matterIds = [];
        this.closeMatterId = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
    }
    closeMatter(matterId) {
        this.closeMatterId.emit(matterId);
    }
    ngOnChanges(changes) {
        changes.matterIds.currentValue?.length > 0 && this.getMatter(changes.matterIds.currentValue);
        // You can also use categoryId.previousValue and 
        // categoryId.firstChange for comparing old and new values
    }
    getMatter(matterIds) {
        this.isLoading = true;
        this.MatterService.getMatterByIds(matterIds).subscribe(response => {
            this.matters = response;
            this.isLoading = false;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
        });
    }
};
ViewMatterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_matter_service__WEBPACK_IMPORTED_MODULE_2__.MatterService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_4__.JwtService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ViewMatterComponent.propDecorators = {
    matterIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['matterIds',] }],
    closeMatterId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output, args: ['closeMatterId',] }]
};
ViewMatterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-matter',
        template: _view_matter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_view_matter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewMatterComponent);



/***/ }),

/***/ 2110:
/*!***************************************************!*\
  !*** ./src/app/layout/matter/directives/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* reexport safe */ _sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader),
/* harmony export */   "directives": () => (/* binding */ directives)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 79407);

const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader];



/***/ }),

/***/ 79407:
/*!****************************************************************!*\
  !*** ./src/app/layout/matter/directives/sortable.directive.ts ***!
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

/***/ 93523:
/*!********************************************************!*\
  !*** ./src/app/layout/matter/matter-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterRoutingModule": () => (/* binding */ MatterRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/matter/matter.component */ 65726);
/* harmony import */ var _components_matter_roster_matter_roster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/matter-roster/matter-roster.component */ 88156);





const routes = [
    {
        path: '',
        component: _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_0__.MatterComponent
    },
    {
        path: 'roster/:keyword',
        component: _components_matter_roster_matter_roster_component__WEBPACK_IMPORTED_MODULE_1__.MatterRosterComponent
    },
    {
        path: 'matter-name/:matterName',
        component: _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_0__.MatterComponent,
    },
    {
        path: 'matter-id/:matterId',
        component: _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_0__.MatterComponent,
    },
    {
        path: 'client-name/:clientName',
        component: _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_0__.MatterComponent,
    },
    {
        path: 'client-id/:clientId',
        component: _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_0__.MatterComponent,
    },
];
let MatterRoutingModule = class MatterRoutingModule {
};
MatterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], MatterRoutingModule);



/***/ }),

/***/ 70282:
/*!************************************************!*\
  !*** ./src/app/layout/matter/matter.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatterModule": () => (/* binding */ MatterModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _matter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matter-routing.module */ 93523);
/* harmony import */ var _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/matter/matter.component */ 65726);
/* harmony import */ var _components_view_matter_view_matter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view-matter/view-matter.component */ 97169);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _service_matter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/matter.service */ 44240);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _components_matter_roster_matter_roster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/matter-roster/matter-roster.component */ 88156);
/* harmony import */ var _components_matter_filter_matter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/matter-filter/matter-filter.component */ 15720);
/* harmony import */ var _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../staff/service/staff.service */ 37441);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives */ 2110);















let MatterModule = class MatterModule {
};
MatterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _components_matter_matter_component__WEBPACK_IMPORTED_MODULE_1__.MatterComponent,
            _components_matter_roster_matter_roster_component__WEBPACK_IMPORTED_MODULE_5__.MatterRosterComponent,
            _components_view_matter_view_matter_component__WEBPACK_IMPORTED_MODULE_2__.ViewMatterComponent,
            _components_matter_filter_matter_filter_component__WEBPACK_IMPORTED_MODULE_6__.MatterFilterComponent,
            _directives__WEBPACK_IMPORTED_MODULE_8__.NgbdSortableHeader
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _matter_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatterRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_14__.NgxMaskModule.forRoot()
        ],
        providers: [_service_matter_service__WEBPACK_IMPORTED_MODULE_4__.MatterService, _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_7__.StaffService, _directives__WEBPACK_IMPORTED_MODULE_8__.NgbdSortableHeader]
    })
], MatterModule);



/***/ }),

/***/ 44240:
/*!*********************************************************!*\
  !*** ./src/app/layout/matter/service/matter.service.ts ***!
  \*********************************************************/
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
    filterQuery(filters) {
        let obj = '';
        if (filters.matterName) {
            obj += '&matterName=' + filters.matterName;
        }
        if (filters.matterId) {
            obj += '&matterId=' + filters.matterId;
        }
        if (filters.clientId) {
            obj += '&clientId=' + filters.clientId;
        }
        if (filters.clientName) {
            obj += '&clientName=' + filters.clientName;
        }
        if (filters.status) {
            obj += '&status=' + filters.status;
        }
        if (filters.openDate) {
            obj += '&openDate=' + filters.openDate;
        }
        if (filters.closeDate) {
            obj += '&closeDate=' + filters.closeDate;
        }
        if (filters.lastInvoiceDate) {
            obj += '&lastInvoiceDate=' + filters.lastInvoiceDate;
        }
        if (filters.postDate) {
            obj += '&postDate=' + filters.postDate;
        }
        if (filters.billTkprName) {
            obj += '&billTkprName=' + filters.billTkprName;
        }
        if (filters.rspTkprName) {
            obj += '&rspTkprName=' + filters.rspTkprName;
        }
        return obj;
    }
    getMatters(data, filters) {
        const filter = this.filterQuery(filters);
        if (data.searchTerm == '') {
            return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${filter}`);
        }
        else {
            return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${filter}`);
        }
    }
    getMatterFilteredData(data, filters) {
        const filter = this.filterQuery(filters);
        if (data.searchTerm == '') {
            return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}${filter}`);
        }
        else {
            return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}${filter}`);
        }
    }
    getMaterForExcelDownload(data, filters) {
        const filter = this.filterQuery(filters);
        if (data.searchTerm == '') {
            return this.apiService.getBlob(`/matters/download?sortBy=${data.sortColumn + ':' + data.sortDirection}${filter}`);
        }
        else {
            return this.apiService.getBlob(`/matters/download?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}${filter}`);
        }
    }
    getDeletedMatters(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/matters?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/matters?isDelete=true&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getMatterCSV() {
        return this.apiService.get(`/matters/bulk/csv/data`);
    }
    getMatterById(data) {
        return this.apiService.get(`/matters/${data}`);
    }
    getMatterByIds(data) {
        return this.apiService.post(`/matters/matterIds`, { matterIds: data });
    }
    addNewMatter(data) {
        return this.apiService.post(`/matters`, data);
    }
    updateMatter(clientId, data) {
        return this.apiService.patch(`/Matter/${clientId}`, data);
    }
    deleteMatter(data) {
        return this.apiService.delete(`/Matter/` + data);
    }
    getMatterRoster(data, keyword) {
        return this.apiService.get(`/matterRosters?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&name=${keyword}`);
        // if (data.searchTerm == '') {
        //   return this.apiService.get(`/matterRosters?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        // } else {
        // }
    }
    getMatterByColumn(data, column) {
        return this.apiService.get(`/matters/column/${column}?sortBy=${data.sortColumn + ':' + data.sortDirection}&search=${data.searchTerm}`);
    }
    getClientExceptionData(data) {
        return this.apiService.get(`/clients/get/rate/exception/rate/${data}`);
    }
    getMatterExceptionData(data) {
        return this.apiService.get(`/matters/get/matter/exception/rate/${data}`);
    }
    getMatterExceptionLevelData(data) {
        return this.apiService.get(`/matters/get/matter/exception/level/${data}`);
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

/***/ 37441:
/*!*******************************************************!*\
  !*** ./src/app/layout/staff/service/staff.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffService": () => (/* binding */ StaffService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let StaffService = class StaffService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getStaffs(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/staffs?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/staffs?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getSearchStaffs(data, responsibleBillingManagerId) {
        if (data.searchTerm == '') {
            return this.apiService.post(`/staffs/search?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`, { responsibleBillingManagerId });
        }
        else {
            return this.apiService.post(`/staffs/search?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, { responsibleBillingManagerId });
        }
    }
    addMember(data) {
        return this.apiService.post(`/staffs`, data);
    }
    updateMember(id, data) {
        return this.apiService.patch(`/staffs/${id}`, data);
    }
    getStaffById(data) {
        return this.apiService.get(`/staffs/` + data);
    }
    deleteUser(data) {
        return this.apiService.delete(`/staffs/` + data);
    }
    getActivity(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/staffs/activity/all?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/staffs/activity/all?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
};
StaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
StaffService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], StaffService);



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

/***/ 14620:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/merge.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/argsOrArgArray */ 5330);
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeAll */ 1308);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 10420);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/from */ 59346);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  args = (0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_1__.argsOrArgArray)(args);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_2__.operate)((source, subscriber) => {
    (0,_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_observable_from__WEBPACK_IMPORTED_MODULE_4__.from)([source, ...args], scheduler)).subscribe(subscriber);
  });
}

/***/ }),

/***/ 51948:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter-filter/matter-filter.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "#slider {\n  position: absolute;\n  width: 340px;\n  height: 100%;\n  background: #fff;\n  overflow-x: scroll;\n  padding-bottom: 10px;\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  right: 0;\n}\n#slider ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.slide_main_menu {\n  padding: 16px;\n  border-bottom: 1px solid #ccc;\n}\n.slide_main_menu .slide_header {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #212529;\n}\n.parent-slide {\n  position: fixed;\n  right: 0;\n  top: 215px;\n  height: 92%;\n}\n.parent-slide.slide-in {\n  top: 65px;\n}\n.parent-slide .loader-overlay {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #ccc;\n  opacity: 0.3;\n}\n.parent-slide .loader {\n  position: fixed;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n.slide_body {\n  gap: 10px;\n}\n.slide-in #slider {\n  animation: slide-in 0.5s forwards;\n  -webkit-animation: slide-in 0.5s forwards;\n}\n.menu-open {\n  position: absolute;\n  right: 28px;\n  top: -78px;\n}\n.slide-in .menu-open {\n  display: none;\n}\n.menu-open button {\n  padding: 4px 50px;\n  margin: 0 !important;\n}\n.slide-out #slider {\n  animation: slide-out 0.5s forwards;\n  -webkit-animation: slide-out 0.5s forwards;\n}\n.action-button {\n  position: relative;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n@keyframes slide-in {\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes slide-in {\n  100% {\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes slide-out {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@-webkit-keyframes slide-out {\n  0% {\n    -webkit-transform: translateX(0%);\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n  }\n}\n.slide_main_menu li {\n  padding: 4px 0;\n}\n.close-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 1px;\n  background: #d8d8d8;\n  border: 0;\n}\n.close-button img {\n  width: 15px;\n}\n.slide_main_menu li input {\n  margin-right: 9px;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n}\n.slide_main_menu li label {\n  display: flex;\n}\n.filter-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 10px;\n}\n.filter-buttons button {\n  width: 48%;\n  margin: 0 !important;\n}\n.action-button1 {\n  position: absolute;\n  top: 90px;\n  right: -14px;\n}\n.expand-main {\n  text-align: right;\n}\n.expand-main .expand {\n  text-decoration: none;\n  color: var(--bs-body-color);\n  cursor: pointer;\n}\n.align-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdHRlci1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtGQUFBO0VBQ0EsUUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBSUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNJLFNBQUE7QUFEUjtBQUlJO0VBQ0ksTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FBSFI7QUFPQTtFQUVJLFNBQUE7QUFMSjtBQVFBO0VBQ0ksaUNBQUE7RUFDQSx5Q0FBQTtBQUxKO0FBUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTEo7QUFRQTtFQUNJLGFBQUE7QUFMSjtBQVFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUxKO0FBVUE7RUFDSSxrQ0FBQTtFQUNBLDBDQUFBO0FBUEo7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBUEo7QUFVQTtFQUNJO0lBQ0kseUJBQUE7RUFQTjtBQUNGO0FBVUE7RUFDSTtJQUNJLGlDQUFBO0VBUk47QUFDRjtBQVdBO0VBQ0k7SUFDSSx5QkFBQTtFQVROO0VBWUU7SUFDSSwyQkFBQTtFQVZOO0FBQ0Y7QUFhQTtFQUNJO0lBQ0ksaUNBQUE7RUFYTjtFQWNFO0lBQ0ksbUNBQUE7RUFaTjtBQUNGO0FBZUE7RUFDSSxjQUFBO0FBYko7QUFnQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJKO0FBZ0JBO0VBQ0ksV0FBQTtBQWJKO0FBaUJBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFkSjtBQWtCQTtFQUNJLGFBQUE7QUFmSjtBQWtCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBZko7QUFrQkE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFmSjtBQW1CQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFoQko7QUFtQkE7RUFDSSxpQkFBQTtBQWhCSjtBQWlCSTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBZlI7QUFrQkE7RUFDSSxpQkFBQTtBQWZKIiwiZmlsZSI6Im1hdHRlci1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHg7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5zbGlkZV9tYWluX21lbnUge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAuc2xpZGVfaGVhZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICB9XG59XG5cbi5wYXJlbnQtc2xpZGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDIxNXB4O1xuICAgIGhlaWdodDogOTIlO1xuXG4gICAgJi5zbGlkZS1pbiB7XG4gICAgICAgIHRvcDogNjVweDtcbiAgICB9XG5cbiAgICAubG9hZGVyLW92ZXJsYXkge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG5cbiAgICAubG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbi5zbGlkZV9ib2R5IHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNsaWRlLWluICNzbGlkZXIge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMC41cyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4gMC41cyBmb3J3YXJkcztcbn1cblxuLm1lbnUtb3BlbiB7ICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI4cHg7XG4gICAgdG9wOiAtNzhweDtcbn1cblxuLnNsaWRlLWluIC5tZW51LW9wZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LW9wZW4gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA0cHggNTBweDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuXG5cbi5zbGlkZS1vdXQgI3NsaWRlciB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNXMgZm9yd2FyZHM7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxufVxuXG4uc2xpZGVfbWFpbl9tZW51IGxpIHtcbiAgICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uY2xvc2UtYnV0dG9uIGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG59XG5cblxuLnNsaWRlX21haW5fbWVudSBsaSBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1pbi13aWR0aDogMTZweDtcblxufVxuXG4uc2xpZGVfbWFpbl9tZW51IGxpIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG59XG5cbi5hY3Rpb24tYnV0dG9uMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTBweDtcbiAgICByaWdodDogLTE0cHg7XG59XG5cbi5leHBhbmQtbWFpbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLmV4cGFuZCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJzLWJvZHktY29sb3IpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLmFsaWduLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 30444:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter-roster/matter-roster.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXR0ZXItcm9zdGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 877:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter/matter.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".black-text-link {\n  color: #000;\n  text-decoration: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.btn-download-button {\n  max-width: 153px;\n  padding: 4px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6Im1hdHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFjay10ZXh0LWxpbmt7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucG9pbnRlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tZG93bmxvYWQtYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDE1M3B4O1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 99175:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/matter/components/view-matter/view-matter.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LW1hdHRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 42787:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter-filter/matter-filter.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<!--Right Slide-->\n<ng-template #responsibleAttorney let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatEmployee(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<div class=\"parent-slide\" [ngClass]=\"openClass\">\n    <form [formGroup]=\"filterForm\" class=\"form-inline\" autocomplete=\"off\">\n        <div id=\"slider\" class=\"slide-out\">\n            <div class=\"position-relative\">\n                <div class=\"menu-close\">\n                    <div class=\"flex position-relative\">\n                        <div class=\"filter-buttons\">\n                            <button (click)=\"resetEvent()\" class=\"btn btn-outline-secondary\">Reset</button>\n                            <button (click)=\"closeMenu()\" class=\"btn btn-outline-secondary\">Close Filter</button>\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Billing Attorney</div>\n                        <div class=\"slide_body\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"billTkprName\" (change)=\"emitValues()\"\n                            [ngbTypeahead]=\"searchEmployeeBillAtt\" (selectItem)=\"selectedBillAtt($event)\"\n                            (focus)=\"focusBillAtt$.next($event.target.value)\"\n                            (click)=\"clickBillAtt$.next($event.target.value)\" #instanceBillAtt=\"ngbTypeahead\"\n                            [resultTemplate]=\"billingAttorneyTemplate\" [inputFormatter]=\"formatEmployee\"\n                            />\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Responsible Attorney</div>\n                        <div class=\"slide_body\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"rspTkprName\" (change)=\"emitValues()\"\n                            [ngbTypeahead]=\"searchEmployeeResAtt\" (selectItem)=\"selectedResAtt($event)\"\n                                    (focus)=\"focusResAtt$.next($event.target.value)\"\n                                    (click)=\"clickResAtt$.next($event.target.value)\" #instanceResAtt=\"ngbTypeahead\"\n                                    [resultTemplate]=\"responsibleAttorney\" [inputFormatter]=\"formatEmployee\"\n                            />\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Status</div>\n                        <div class=\"slide_body\">\n                            <select class=\"form-select\" class=\"form-control\" formControlName=\"status\" (change)=\"emitValues()\">\n                                <option value=\"Open\" [selected]=\"true\">Open</option>\n                                <option value=\"OT\">OT</option>\n                                <option value=\"OD\">OD</option>\n                                <option value=\"D\">D</option>\n                              </select>\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Open Date</div>\n                        <div class=\"slide_body\">\n                            <input type=\"date\" class=\"form-control\" formControlName=\"openDate\" (change)=\"emitValues()\"/>\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Close Date</div>\n                        <div class=\"slide_body\">\n                            <input type=\"date\" class=\"form-control\" formControlName=\"closeDate\" (change)=\"emitValues()\"/>\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Last Bill Date</div>\n                        <div class=\"slide_body\">\n                            <input type=\"date\" class=\"form-control\" formControlName=\"lastInvoiceDate\" (change)=\"emitValues()\"/>\n                        </div>\n                    </div>\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Last Time Entry</div>\n                        <div class=\"slide_body\">\n                            <input type=\"date\" class=\"form-control\" formControlName=\"postDate\" (change)=\"emitValues()\"/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"position-absolute loader-overlay\" *ngIf=\"loader\">\n                <div class=\"loader\">\n                    <div class=\"position-relative\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"action-button1\" *ngIf=\"!open && !this.loader\">\n    <div class=\"menu-open\">\n        <button (click)=\"openMenu()\" class=\"btn btn-primary\">Filter</button>\n    </div>\n</div>\n\n<ng-template #billingAttorneyTemplate let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatEmployee(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #responsibleAttorney let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatEmployee(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>";

/***/ }),

/***/ 79191:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter-roster/matter-roster.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Matter Roster'\" [previousHeading]=\"'Matters'\" [previousLink]=\"'matters'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <div *ngIf=\"!isMatters;else table\">\n                    <p class=\"text-center\">No Matter found</p>\n                </div>\n                <ng-template #table>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Number</th>\n                                        <th>Name</th>\n                                        <th>Status</th>\n                                        <th>Class Year</th>\n                                        <th>Office</th>\n                                        <th>Office Name</th>\n                                        <th>Rank Code</th>\n                                        <th>Rank Name</th>\n                                        <th>Effective Date</th>\n                                        <th>Currency</th>\n                                        <th>Bill Rate</th>\n                                        <th>Standard Rate</th>\n                                        <th>Diff</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"isLoading\">\n                                    <tr>\n                                        <td colspan=\"6\">\n                                            <div class=\"text-center\">\n                                                <div class=\"spinner-border\"\n                                                    role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"!isLoading\">\n                                    <tr *ngFor=\"let matter of matters; index as i\">\n                                        <td>{{ matter.number }}</td>\n                                        <td>{{ matter.name }}</td>\n                                        <td>{{ matter.active }}</td>\n                                        <td>{{ matter.classYear }}</td>\n                                        <td>{{ matter.office }}</td>\n                                        <td>{{ matter.officeName }}</td>\n                                        <td>{{ matter.rankCode }}</td>\n                                        <td>{{ matter.rankName }}</td>\n                                        <td>{{ matter.effectiveDate }}</td>\n                                        <td>{{ matter.Currency }}</td>\n                                        <td>{{ matter.billRate }}</td>\n                                        <td>{{ matter.standardRate }}</td>\n                                        <td>{{ matter.diff }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div class=\"d-flex justify-content-between p-2\">\n                                <ngb-pagination\n                                    [collectionSize]=\"_state.totalResults\"\n                                    [(page)]=\"_state.page\"\n                                    [pageSize]=\"_state.limit\" [rotate]=\"true\"\n                                    [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                    (pageChange)=\"refreshMatters()\">\n                                </ngb-pagination>\n\n                                <select class=\"custom-select\"\n                                    style=\"width: auto\"\n                                    [(ngModel)]=\"_state.limit\"\n                                    (ngModelChange)=\"refreshMatters()\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"10\">10 items per page</option>\n                                    <option [ngValue]=\"20\">20 items per page</option>\n                                    <option [ngValue]=\"30\">30 items per page</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 29164:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/matter/components/matter/matter.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n<!-- <app-page-header [heading]=\"'Matter Records'\"></app-page-header> -->\n<div class=\"container-fluid mt-2\" [@routerTransition]>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <form>\n                <div class=\"row mb-2 search-header\">\n                    <div class=\"col-md-9 text-left mb-1 mb-md-0\">\n                        <div class=\"form-group mb-1\">\n                            <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"searchstaffs\"\n                                class=\"form-control\" placeholder=\"Search here...\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                        <button type=\"button\" (click)=\"downloadFileExcel()\"\n                            class=\"btn btn-primary btn-block btn-download-button\">Download</button>\n                    </div>\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <div *ngIf=\"!isMatters;else table\">\n                    <p class=\"text-center\">No Matter found</p>\n                </div>\n                <ng-template #table>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"table-responsive scroll-position\">\n                            <table class=\"table table-striped scroll-position-div\">\n                                <thead>\n                                    <tr>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientId\" (sort)=\"onSort($event)\">Client Group <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Group name <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientNumber\" (sort)=\"onSort($event)\">Client Code <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Client Name <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"name\" (sort)=\"onSort($event)\">Matter Name <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"matterNumber\" (sort)=\"onSort($event)\">Client Matter <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"status\" (sort)=\"onSort($event)\">Status <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"openDate\" (sort)=\"onSort($event)\">Open Date <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"closeDate\" (sort)=\"onSort($event)\">Close Date <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"lastInvoiceDate\" (sort)=\"onSort($event)\">Last Bill Date <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"postDate\" (sort)=\"onSort($event)\">Last Time Entry</th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"billTkprName\" (sort)=\"onSort($event)\">Billing Attorney <span></span></th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"rspTkprName\" (sort)=\"onSort($event)\">Responsible Attorney <span></span></th>\n                                        <th scope=\"col\">Client Rate Set</th>\n                                        <th scope=\"col\">Matter Rate Set</th>\n                                        <th scope=\"col\">Client Level Rates</th>\n                                        <th scope=\"col\">Matter Level Rates</th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngIf=\"isPaginationLoading\">\n                                    <tr>\n                                        <td colspan=\"16\">\n                                            <div class=\"text-center\">\n                                                <div class=\"spinner-border\" role=\"status\">\n                                                    <span class=\"sr-only\">Loading...</span>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                                <tbody *ngIf=\"!isPaginationLoading\">\n                                    <tr *ngFor=\"let matter of matters; index as i\">\n                                        <!-- <th scope=\"row\">{{ i + 1 }}</th> -->\n                                        <td>{{matter?.client?.clientGroup}}</td>\n                                        <td>\n                                            {{ matter.client?.clientGroupDetails?.name || matter.client.name }}\n                                        </td>\n                                        <td><a routerLink=\"/matters/client-id/{{matter?.clientId}}\"\n                                                role=\"link\">{{matter?.client?.clientNumber}}</a></td>\n                                        <td><a routerLink=\"/matters/client-id/{{matter?.clientId}}\"\n                                                role=\"link\">{{matter?.client?.name}}</a>\n                                        </td>\n                                        <td><a routerLink=\"/matters/matter-id/{{matter?.matterId}}\"\n                                                role=\"link\">{{matter?.name}}</a></td>\n                                        <td><a routerLink=\"/matters/matter-id/{{matter?.matterId}}\"\n                                                role=\"link\">{{matter?.matterNumber}}</a></td>\n                                        <td>{{matter?.status}}</td>\n                                        <td>{{matter?.openDate | date: 'MM/dd/YYYY': 'UTC'}}</td>\n                                        <td>{{matter?.closeDate | date: 'MM/dd/YYYY': 'UTC'}}</td>\n                                        <td>{{matter?.lastInvoiceDate | date: 'MM/dd/YYYY': 'UTC'}}</td>\n                                        <td>{{matter?.timecard?.postDate | date: 'MM/dd/YYYY': 'UTC'}}</td>\n                                        <td>{{matter?.billTkprName}}</td>\n                                        <td>{{matter?.rspTkprName}}</td>\n                                        <td class=\"pointer\">\n                                            <a (click)=\"openClientData(clientcontent, matter)\">{{matter?.clientExceptionRate?.rateExcDescription | titlecase}}</a>\n                                        </td>\n                                        <td class=\"pointer\">\n                                            <a (click)=\"openMatterData(mattercontent, matter)\">{{matter?.matterExceptionRate?.rateExcDescription | titlecase}}</a>\n                                        </td>\n                                        <td class=\"pointer\" (click)=\"openMatterLevelClientData(clientLevelContent, matter.clientId)\">\n                                            <a>See Rates</a>\n                                        </td>\n                                        <td class=\"pointer\" (click)=\"openMatterLevelMatterData(matterLevelContent, matter.matterNumber)\">\n                                            <a>See Rates</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"d-flex justify-content-between p-2\">\n                            <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\"\n                                [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                (pageChange)=\"refreshMatters()\">\n                            </ngb-pagination>\n\n                            <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\"\n                                (ngModelChange)=\"refreshMatters()\" [ngModelOptions]=\"{standalone: true}\">\n                                <option [ngValue]=\"10\">10 items per page</option>\n                                <option [ngValue]=\"20\">20 items per page</option>\n                                <option [ngValue]=\"30\">30 items per page</option>\n                            </select>\n                        </div>\n                    </div>\n                </ng-template>\n            </form>\n        </div>\n        <app-matter-filter (matterRecords)=\"handleResults($event)\" [actionparam]=\"[]\">\n        </app-matter-filter>\n    </div>\n</div>\n<ng-template #clientcontent let-modal>\n    <div class=\"modal-header\">\n        <p class=\"modal-title\" id=\"modal-basic-title\">Client Rate Set</p>\n        <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss()\"></button>\n    </div>\n    <div class=\"modal-body\">\n        <ng-container *ngIf=\"isClientContentLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <table class=\"table table-bordered table-hover mb-5 mt-2\" *ngIf=\"clientExceptionData\">\n            <thead>\n                <tr>\n                    <th>Number</th>\n                    <th>Name</th>\n                    <th>Status</th>\n                    <th>Office</th>\n                    <th>Currency</th>\n                    <th>Worked Rate</th>\n                    <th>Standard Rate</th>\n                    <th>Discount Percentage Difference</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of clientExceptionData.timecards\">\n                    <td>{{ clientExceptionData?.matter?.rspTkprNumber }}</td>\n                    <td>{{ clientExceptionData?.matter?.rspTkprName }}</td>\n                    <td>{{ clientExceptionData?.matter?.status }}</td>\n                    <td>{{ item?.office }}</td>\n                    <td>{{ clientExceptionData?.matter?.currency }}</td>\n                    <td>{{ item?.workRate }}</td>\n                    <td>{{ item?.stdRate }}</td>\n                    <td>{{ ((item?.stdRate - item?.workRate) / item?.stdRate) * 100 | number: '1.2-2' }}%</td>\n                </tr>\n            </tbody>\n        </table>\n        <div *ngIf=\"!clientExceptionData\">\n            <p class=\"text-center\">No record found</p>\n        </div>\n    </div>\n</ng-template>\n<ng-template #mattercontent let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Matter Rate Set</h4>\n        <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss()\"></button>\n    </div>\n    <div class=\"modal-body\">\n        <ng-container *ngIf=\"isMatterContentLoading\">\n            <div class=\"text-center\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n        <table class=\"table table-bordered table-hover mb-5 mt-2\" *ngIf=\"matterExceptionData.timecards.length\">\n            <thead>\n                <tr>\n                    <th>Number</th>\n                    <th>Name</th>\n                    <th>Status</th>\n                    <th>Office</th>\n                    <th>Currency</th>\n                    <th>Worked Rate</th>\n                    <th>Standard Rate</th>\n                    <th>Discount Percentage Difference</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of matterExceptionData.timecards\">\n                    <td>{{ matterExceptionData?.matter?.rspTkprNumber }}</td>\n                    <td>{{ matterExceptionData?.matter?.rspTkprName }}</td>\n                    <td>{{ matterExceptionData?.matter?.status }}</td>\n                    <td>{{ item?.office }}</td>\n                    <td>{{ matterExceptionData?.matter?.currency }}</td>\n                    <td>{{ item?.workRate }}</td>\n                    <td>{{ item?.stdRate }}</td>\n                    <td>{{ ((item?.stdRate - item?.workRate) / item?.stdRate) * 100 | number: '1.2-2' }}%</td>\n                </tr>\n            </tbody>\n        </table>\n        <div *ngIf=\"!matterExceptionData.timecards.length\">\n            <p class=\"text-center\">No record found</p>\n        </div>\n    </div>\n</ng-template>\n<ng-template #matterLevelContent let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Matter Level Rates</h4>\n        <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss()\"></button>\n    </div>\n    <div class=\"modal-body\">\n        <table class=\"table table-bordered\" *ngIf=\"matterLevelExceptionData.length\">\n            <thead>\n                <tr>\n                    <th>Number</th>\n                    <th>Name</th>\n                    <th>Status</th>\n                    <th>Office</th>\n                    <th>Currency</th>\n                    <th>Worked Rate</th>\n                    <th>Standard Rate</th>\n                    <th>Discount Percentage Difference</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of matterLevelExceptionData\">\n                    <td>{{ item?.matter?.rspTkprNumber }}</td>\n                    <td>{{ item?.matter?.rspTkprName }}</td>\n                    <td>{{ item?.matter?.status }}</td>\n                    <td>{{ item?.office?.description }}</td>\n                    <td>{{ item?.matter?.currency }}</td>\n                    <td>{{ item?.workRate }}</td>\n                    <td>{{ item?.stdRate }}</td>\n                    <td>{{ ((item?.stdRate - item?.workRate) / item?.stdRate) * 100 | number: '1.2-2' }}%</td>\n                </tr>\n            </tbody>\n        </table>\n        <div *ngIf=\"!matterLevelExceptionData.length\">\n            <p class=\"text-center\">No records found</p>\n        </div>\n    </div>\n</ng-template>\n<ng-template #clientLevelContent let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Client Level Rates</h4>\n        <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss()\"></button>\n    </div>\n    <div class=\"modal-body\">\n        <table class=\"table table-bordered\" *ngIf=\"clientLevelExceptionData.length\">\n            <thead>\n                <tr>\n                    <th>Number</th>\n                    <th>Name</th>\n                    <th>Status</th>\n                    <th>Office</th>\n                    <th>Currency</th>\n                    <th>Worked Rate</th>\n                    <th>Standard Rate</th>\n                    <th>Discount Percentage Difference</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of clientLevelExceptionData\">\n                    <td>{{ item?.matter?.rspTkprNumber }}</td>\n                    <td>{{ item?.matter?.rspTkprName }}</td>\n                    <td>{{ item?.matter?.status }}</td>\n                    <td>{{ item?.office?.description }}</td>\n                    <td>{{ item?.matter?.currency }}</td>\n                    <td>{{ item?.workRate }}</td>\n                    <td>{{ item?.stdRate }}</td>\n                    <td>{{ ((item?.stdRate - item?.workRate) / item?.stdRate) * 100 | number: '1.2-2' }}%</td>\n                </tr>\n            </tbody>\n        </table>\n        <div *ngIf=\"!clientLevelExceptionData.length\">\n            <p class=\"text-center\">No records found</p>\n        </div>\n    </div>\n</ng-template>\n";

/***/ }),

/***/ 7952:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/matter/components/view-matter/view-matter.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<h4>View Matter</h4>\n<ng-container *ngIf=\"isLoading\">\n    <div class=\"text-center\">\n        <div class=\"spinner-border\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"!isLoading\">\n    <div class=\"d-flex justify-content-between p-2\">\n        <div class=\"container\" *ngFor=\"let matterDetail of matters; index as i\">\n            <button type=\"button\" class=\"btn-close\" *ngIf=\"matters.length !== 1\" aria-label=\"Close\" (click)=\"closeMatter(matterDetail.id)\"></button>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Client Group:</label>\n                <label class=\"col-md-4\">{{matterDetail?.client?.clientGroup}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Group name:</label>\n                <label class=\"col-md-4\">{{matterDetail?.client.clientGroupDetails?.name || matterDetail?.client.name\n                    }}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Client Code:</label>\n                <label class=\"col-md-4\">{{matterDetail?.client?.clientNumber}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Client Name:</label>\n                <label class=\"col-md-4\">{{matterDetail?.client?.name}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Matter Number:</label>\n                <label class=\"col-md-4\">{{matterDetail?.matterNumber}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Matter Name:</label>\n                <label class=\"col-md-4\">{{matterDetail?.name}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Status:</label>\n                <label class=\"col-md-4\">{{matterDetail?.status}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Open Date:</label>\n                <label class=\"col-md-4\">{{matterDetail?.openDate | date: 'mediumDate'}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Close Date:</label>\n                <label class=\"col-md-4\">{{matterDetail?.closeDate | date: 'mediumDate'}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Last Bill Date:</label>\n                <label class=\"col-md-4\">{{matterDetail?.lastInvoiceDate | date: 'mediumDate'}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Billing Attorney:</label>\n                <label class=\"col-md-4\">{{matterDetail?.billTkprName}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Responsible Attorney:</label>\n                <label class=\"col-md-4\">{{matterDetail?.rspTkprName}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Billing Frequency:</label>\n                <label class=\"col-md-4\">{{matterDetail?.billingFrequency}}</label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Client Rate Set:</label>\n                <label class=\"col-md-4\"><a [routerLink]=\"['/clients/roster', matterDetail.matterNumber]\"\n                        target=\"_blank\">See\n                        Rates</a></label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Matter Rate Set:</label>\n                <label class=\"col-md-4\"><a [routerLink]=\"['roster', matterDetail.rspTkprName]\" target=\"_blank\">See\n                        Rates</a></label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Client Level Rates:</label>\n                <label class=\"col-md-4\"><a>See Rates</a></label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Matter Level Rates:</label>\n                <label class=\"col-md-4\"><a>See Rates</a></label>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-4\">Area of Law:</label>\n                <label class=\"col-md-4\"></label>\n            </div>\n        </div>\n    </div>\n</ng-container>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_matter_matter_module_ts.js.map