"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_dashboard_dashboard_module_ts"],{

/***/ 80716:
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/activity/activity.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityComponent": () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activity_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity.component.html?ngResource */ 9991);
/* harmony import */ var _activity_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.component.scss?ngResource */ 10356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_layout_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout/staff/service/staff.service */ 37441);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 98977);










let ActivityComponent = class ActivityComponent {
    constructor(router, staffService, cdr) {
        this.router = router;
        this.staffService = staffService;
        this.cdr = cdr;
        this.isActivity = true;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc'
        };
        this.promotions = [];
        this.isLoading = false;
        this.searchTermUpdate
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getAllPromotions(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllPromotions(this._state);
    }
    getAllPromotions(state) {
        this.staffService.getActivity(state).subscribe(response => {
            this.promotions = response.results;
            this.isLoading = false;
            if (this.promotions.length == 0) {
                this.isActivity = false;
            }
            else {
                this.isActivity = true;
            }
            this.cdr.detectChanges();
            this.setState(response);
        });
    }
    refreshPromotions() {
        this.getAllPromotions(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
        this.cdr.detectChanges();
    }
    view(request) {
        console.log(request.url);
        // this.router.navigate(['roles'])
        if (request.url === 'agreements') {
            this.router.navigate(['dashboard/search/view-agreement/', request.refId]);
        }
        else if (request.url == 'roles') {
            this.router.navigate(['roles/view-role/', request.refId]);
        }
        else if (request.url == 'templates') {
            this.router.navigate(['notifications/view-notification', request.refId]);
        }
        else if (request.url == 'staffs') {
            this.router.navigate(['employees/view-employee/', request.refId]);
        }
        else if (request.url == 'timekeepers') {
            this.router.navigate(['time-keepers/', request.refId]);
        }
        else if (request.url == 'timekeepers') {
            this.router.navigate(['time-keepers/', request.refId]);
        }
        else if (request.url == 'billingcurrencys') {
            this.router.navigate(['data-mangement/billingcurrencies/']);
        }
        else if (request.url == 'attachmentTypes') {
            this.router.navigate(['data-mangement/attachmentTypes/']);
        }
        else if (request.url == 'areaOfLaws') {
            this.router.navigate(['data-mangement/area-of-laws/']);
        }
        else if (request.url == 'practiceGroups') {
            this.router.navigate(['data-mangement/practice-groups']);
        }
        else if (request.url == 'hourlyBillings') {
            this.router.navigate(['data-mangement/hourly-billings']);
        }
        else if (request.url == 'billingFrequencys') {
            this.router.navigate(['data-mangement/billing-frequencies']);
        }
        else if (request.url == 'baseRates') {
            this.router.navigate(['data-mangement/base-rates']);
        }
        else if (request.url == 'billingMethods') {
            this.router.navigate(['data-mangement/billing-methods']);
        }
        else if (request.url == 'billingMethods') {
            this.router.navigate(['data-mangement/billing-methods']);
        }
        else if (request.url == 'payorTypes') {
            this.router.navigate(['data-mangement/payor-types']);
        }
        else if (request.url == 'sicCodes') {
            this.router.navigate(['data-mangement/sic-codes']);
        }
    }
};
ActivityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _app_layout_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_3__.StaffService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef }
];
ActivityComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
ActivityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-activity',
        template: _activity_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_4__.routerTransition)()],
        styles: [_activity_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActivityComponent);



/***/ }),

/***/ 46739:
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component.html?ngResource */ 11820);
/* harmony import */ var _chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss?ngResource */ 17267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() { }
};
ChatComponent.ctorParameters = () => [];
ChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat',
        template: _chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatComponent);



/***/ }),

/***/ 42923:
/*!************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/filter/filter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.component.html?ngResource */ 71561);
/* harmony import */ var _filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.component.scss?ngResource */ 10077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/search.service */ 96995);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 14620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _app_layout_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/layout/staff/service/staff.service */ 37441);













let FilterComponent = class FilterComponent {
    constructor(router, searchService, cdr, fb, staffsService, confirmationDialogService) {
        this.router = router;
        this.searchService = searchService;
        this.cdr = cdr;
        this.fb = fb;
        this.staffsService = staffsService;
        this.confirmationDialogService = confirmationDialogService;
        this.found = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.actionparam = {
            billingMode: "",
            payorType: "",
            expire: "",
            adjustment: "",
            staffId: "",
            staffIdOperation: "",
            staffIdDuration: ""
        };
        this.open = false;
        this.openClass = "";
        this.baseRateAll = false;
        this.loader = false;
        this.initalLoad = false;
        this.focus3$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.click3$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.clientLoading = false;
        this.collectionOptions = {
            billingFrequency: [],
            baseRate: [],
            billingCurrency: [],
            billingMethod: [],
            payorType: [],
            feeArrangementType: []
        };
        this._employee = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this.countRecords = 2;
        this.expanded = false;
        this.expandedPracticeGroup = false;
        this.expandedAreaOfLow = false;
        this.formatterEmployee = (r) => {
            return this.formatEmployee(r);
        };
        this.toggleAllSelectionResponsibleAttorney = () => {
            //this.loader = true
            // const _data = this.filterForm.value
            // this.searchData(_data)
            this.filter();
        };
        this.toggleDurationMin = (event) => {
            if (this.filterForm.value.durationTo && this.filterForm.value.durationTo < event.target.value) {
                this.filterForm.patchValue({
                    "durationFrom": this.filterForm.value.durationTo
                });
            }
            this.filter();
        };
        this.toggleDurationMax = (event) => {
            if (this.filterForm.value.durationFrom && this.filterForm.value.durationFrom > event.target.value) {
                this.filterForm.patchValue({
                    "durationTo": this.filterForm.value.durationFrom
                });
            }
            this.filter();
        };
        this.searchEmployee = (text$) => text$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.merge)(this.focus3$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.merge)(this.click3$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(() => !this.instance3?.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)((term) => {
            this._employee.searchTerm = term;
            const _responsibleBillingManagerId = this.collectionOptions["responsibleBillingManagerId"].filter((_item) => _item._id !== null).map((_item) => _item._id);
            return this.staffsService.getSearchStaffs(this._employee, _responsibleBillingManagerId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(x => {
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => (this.clientLoading = false)));
    }
    getFilterValue() {
        if (localStorage.getItem('filter_values')) {
            return JSON.parse(localStorage.getItem('filter_values'));
        }
        return false;
    }
    iniitalLoadData(callback = false) {
        this.loader = true;
        this.initalLoad = true;
        this.searchService.filtersSearchData(this.actionparam).subscribe(response => {
            const initData = this.getFilterValue();
            this.collectionOptions = response;
            if (!initData) {
                this.toggleAllSelection(true, "baseRate", true);
                this.toggleAllSelection(true, "billingMethod", true);
                this.toggleAllSelection(true, "payorType", true);
                this.toggleAllSelection(true, "billingFrequency", true);
                this.toggleAllSelectionName(true, "matterId", true, 'matterName');
                this.toggleAllSelectionName(true, "sicCode", true, 'clientSicId');
                this.toggleAllSelection(true, "feeArrangementType", true);
                this.toggleAllSelectionName(true, "areaOfLaw", true, 'areaOfLawId');
                this.toggleAllSelectionName(true, "practiceGroup", true, 'practiceGroupId');
            }
            else {
                this.filterForm.patchValue(initData);
            }
            this.loader = false;
            this.initalLoad = false;
            this.cdr.detectChanges();
            callback && this.callbackLoad();
        });
    }
    ngOnChanges(changes) {
        this.actionparam = changes.actionparam.currentValue;
        this.iniitalLoadData();
        // You can also use categoryId.previousValue and 
        // categoryId.firstChange for comparing old and new values
    }
    ngOnInit() {
        this.filterForm = this.fb.group({
            //Client Details
            durationFrom: [""],
            durationTo: [""],
            responsibleAttorney: [""],
            billingFrequency: [[]],
            baseRate: [[]],
            matterId: [[]],
            billingMethod: [[]],
            payorType: [[]],
            sicCode: [[]],
            feeArrangementType: [[]],
            areaOfLaw: [[]],
            practiceGroup: [[]],
            adjustmentStartDate: [""],
            adjustmentEndDate: [""],
            expirationStartDate: [""],
            expirationEndDate: [""]
        });
    }
    expandClick(bool) {
        this.expanded = bool;
        //this.cdr.detectChanges();
    }
    expandPracticeGroupClick(bool) {
        this.expandedPracticeGroup = bool;
        //this.cdr.detectChanges();
    }
    expandAreaOfLowClick(bool) {
        this.expandedAreaOfLow = bool;
        //this.cdr.detectChanges();
    }
    clearDuration() {
        this.filterForm.patchValue({
            'durationFrom': "",
            'durationTo': ""
        });
    }
    loadFilterDataFrequency() {
        if (!this.initalLoad) {
            this.loader = true;
            const _data = this.filterForm.value;
            this.searchService.filtersSearchDataOption(_data, this.actionparam).subscribe(response => {
                this.collectionOptions = response;
                this.cdr.detectChanges();
                this.toggleAllSelection(true, "baseRate", false);
                this.toggleAllSelection(true, "billingMethod", false);
                this.toggleAllSelection(true, "payorType", false);
                this.toggleAllSelection(true, "billingFrequency", false);
                this.toggleAllSelectionName(true, "sicCode", false, 'clientSicId');
                this.toggleAllSelectionName(true, "matterId", false, 'matterName');
                this.toggleAllSelection(true, "feeArrangementType", false);
                this.toggleAllSelectionName(true, "areaOfLaw", false, 'areaOfLawId');
                this.toggleAllSelectionName(true, "practiceGroup", false, 'practiceGroupId');
                this.loader = false;
            });
        }
    }
    searchData(_data) {
        this.searchService.filtersSearchDataOption(_data, this.actionparam).subscribe(response => {
            this.collectionOptions = response;
            this.cdr.detectChanges();
            this.toggleAllSelection(true, "baseRate", false);
            this.toggleAllSelection(true, "billingMethod", false);
            this.toggleAllSelection(true, "payorType", false);
            this.toggleAllSelection(true, "billingFrequency", false);
            this.toggleAllSelectionName(true, "sicCode", false, 'clientSicId');
            this.toggleAllSelectionName(true, "matterId", false, 'matterName');
            this.toggleAllSelection(true, "feeArrangementType", false);
            this.toggleAllSelectionName(true, "areaOfLaw", false, 'areaOfLawId');
            this.toggleAllSelectionName(true, "practiceGroup", false, 'practiceGroupId');
            this.loader = false;
        });
    }
    loadFilterData(model) {
        if (!this.initalLoad && this.filterForm.controls[model]?.value.length > 0) {
            const baseRate = this.filterForm.value['baseRate'];
            const billingMethod = this.filterForm.value['billingMethod'];
            const payorType = this.filterForm.value['payorType'];
            const billingFrequency = this.filterForm.value['billingFrequency'];
            const sicCode = this.filterForm.value['sicCode'];
            const matterId = this.filterForm.value['matterId'];
            const feeArrangementType = this.filterForm.value['feeArrangementType'];
            const areaOfLawId = this.filterForm.value['areaOfLaw'];
            const practiceGroupId = this.filterForm.value['practiceGroup'];
            if (baseRate.length === 0) {
                this.toggleAllSelection(true, "baseRate", false);
            }
            if (payorType.length === 0) {
                this.toggleAllSelection(true, "payorType", false);
            }
            if (billingMethod.length === 0) {
                this.toggleAllSelection(true, "billingMethod", false);
            }
            if (billingFrequency.length === 0) {
                this.toggleAllSelection(true, "billingFrequency", false);
            }
            if (sicCode.length === 0) {
                this.toggleAllSelectionName(true, "sicCode", false, 'clientSicId');
            }
            if (feeArrangementType.length === 0) {
                this.toggleAllSelection(true, "feeArrangementType", false);
            }
            if (areaOfLawId.length === 0) {
                this.toggleAllSelectionName(true, "areaOfLaw", false, 'areaOfLawId');
            }
            if (practiceGroupId.length === 0) {
                this.toggleAllSelectionName(true, "practiceGroup", false, 'practiceGroupId');
            }
            if (matterId.length === 0) {
                this.toggleAllSelectionName(true, "matterId", false, 'matterName');
            }
            this.found.emit(this.filterForm.value);
            //const _data = this.filterForm.value
            //this.searchData(_data)
        }
    }
    formatEmployee(r) {
        return r ? `${r.name} - ${r.email}` : "";
    }
    onCheckboxChange(e, model) {
        let checkArray = this.filterForm.controls[model].value;
        if (e.target.checked) {
            checkArray.push(e.target.value);
        }
        else {
            let i = 0;
            checkArray.forEach((item) => {
                if (item == e.target.value) {
                    checkArray = [
                        ...checkArray.slice(0, i),
                        ...checkArray.slice(i + 1, checkArray.length)
                    ];
                    return;
                }
                i++;
            });
        }
        this.filterForm.patchValue({
            [model]: checkArray
        });
        this.loadFilterData(model);
    }
    resetResponsibleAttorney() {
        this.filterForm.patchValue({
            "responsibleAttorney": ""
        });
        this.found.emit(this.filterForm.value);
    }
    calllbackFn(model) {
        return this.filterForm.controls[model]?.value.length == this.collectionOptions[model]?.length;
    }
    toggleAllSelectionName(checked, model, inital = true, fieldName = 'matterName') {
        if (checked) {
            this.filterForm.patchValue({
                [model]: this.collectionOptions[model].map((_baseRate) => _baseRate._id[fieldName])
            });
        }
        else {
            this.filterForm.patchValue({
                [model]: []
            });
        }
        inital && this.loadFilterData(model);
    }
    selectedItem(item) {
        console.log(item);
        const data = { ...this.filterForm.value, "responsibleAttorney": item?.item };
        this.found.emit(data);
    }
    toggleAllSelection(checked, model, inital = true) {
        if (checked) {
            this.filterForm.patchValue({
                [model]: this.collectionOptions[model].map((_baseRate) => _baseRate._id || -1)
            });
        }
        else {
            this.filterForm.patchValue({
                [model]: []
            });
        }
        inital && this.loadFilterData(model);
    }
    openMenu() {
        this.open = true;
        this.openClass = "slide-in";
    }
    closeMenu() {
        this.openClass = "slide-out";
        this.open = false;
    }
    filter() {
        this.found.emit(this.filterForm.value);
    }
    callbackLoad() {
        // this.filterForm.patchValue({
        //   "billingFrequency": ""
        // })
        console.log(this.filterForm.value);
        this.filter();
    }
    resetEvent() {
        this.filterForm.patchValue({
            "adjustmentStartDate": "",
            "adjustmentEndDate": "",
            "expirationStartDate": "",
            "expirationEndDate": ""
        });
        this.iniitalLoadData(true);
    }
};
FilterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _service_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder },
    { type: _app_layout_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_6__.StaffService },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
FilterComponent.propDecorators = {
    found: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    actionparam: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["actionparam",] }],
    instance3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['instance',] }],
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
FilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-agreements-filter-search',
        template: _filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilterComponent);



/***/ }),

/***/ 91595:
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* reexport safe */ _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent),
/* harmony export */   "NotificationComponent": () => (/* reexport safe */ _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent),
/* harmony export */   "TimelineComponent": () => (/* reexport safe */ _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent)
/* harmony export */ });
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ 72362);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ 66195);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ 46739);





/***/ }),

/***/ 66195:
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component.html?ngResource */ 44865);
/* harmony import */ var _notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss?ngResource */ 28651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let NotificationComponent = class NotificationComponent {
    constructor() { }
    ngOnInit() { }
};
NotificationComponent.ctorParameters = () => [];
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notification',
        template: _notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationComponent);



/***/ }),

/***/ 50342:
/*!************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/search/search.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component.html?ngResource */ 85762);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 32797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/search.service */ 96995);











let SearchComponent = class SearchComponent {
    constructor(route, router, searchService, cdr, confirmationDialogService) {
        this.route = route;
        this.router = router;
        this.searchService = searchService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.search = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.pageLoading = false;
        this.isSearch = true;
        this.billingMode = '';
        this.payorType = '';
        this.filterData = this.getFilterValue();
        this.expire = '';
        this.adjustment = '';
        this.staffId = '';
        this.staffIdOperation = '';
        this.staffIdDuration = '';
        this.actionparam = {};
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: localStorage.getItem('search_value') || '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
        this.route.params.subscribe(params => {
            if (params.billingMode !== '' && params.billingMode != null) {
                // this.billingMode = params.billingMode;
                this.actionparam['billingMode'] = params.billingMode;
            }
            if (params.payorType !== '' && params.payorType != null) {
                this.actionparam['payorType'] = params.payorType;
                // this.payorType = params.payorType;
            }
            if (params.expireType !== '' && params.expireType != null) {
                this.actionparam['expire'] = params.expireType;
                // this.expire = params.expireType;
            }
            if (params.adjustmentType !== '' && params.adjustmentType != null) {
                this.actionparam['adjustment'] = params.adjustmentType;
                // this.adjustment = params.adjustmentType;
            }
            if (params.actionType !== '' && params.actionType != null) {
                this.actionparam['staffId'] = params.staffId;
                this.actionparam['staffIdOperation'] = params.actionType;
                this.actionparam['staffIdDuration'] = params.date;
                // this.staffId = params.staffId;
                // this.staffIdOperation = params.actionType;
                // this.staffIdDuration = params.date;
            }
        });
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.saveSearch(value);
            this.getAllSearch(this._state);
        });
    }
    getFilterValue() {
        if (localStorage.getItem('filter_values')) {
            return JSON.parse(localStorage.getItem('filter_values'));
        }
        else {
            return {};
        }
    }
    handleResults(event) {
        this.saveFilter(event);
        this.filterData = event;
        this.isLoading = true;
        this.getAllSearch(this._state);
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllSearch(this._state);
    }
    downloadFileExcel() {
        return this.searchService.getSearchForExcelDownload(this._state, this.actionparam, this.filterData).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "search");
        }, (error) => {
        });
    }
    viewAgrement(agreementId) {
        this.router.navigate(['/dashboard/search/view-agreement/' + agreementId]);
    }
    onSort({ column, direction }) {
        console.log(column, direction);
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.pageLoading = true;
        this.search = [];
        this.getAllSearch(this._state);
    }
    getHeader() {
        const { billingMode, payorType, expire, adjustment, staffId, staffIdOperation } = this.actionparam;
        if (billingMode) {
            return "Billing";
        }
        else if (payorType) {
            return "Payor Type";
        }
        else if (expire) {
            return `Search - Expire-${expire === 'expire-weekly' ? 'Weekly' : 'Monthly'}`;
        }
        else if (adjustment) {
            return `Search - Expire-${expire === 'expire-weekly' ? 'Weekly' : 'Monthly'}`;
        }
        else if (staffId) {
            return `Staff - ${staffIdOperation.charAt(0).toUpperCase() + staffIdOperation.slice(1)}`;
        }
        else {
            return "Search";
        }
    }
    getAllSearch(state) {
        this.searchService.getRecords(state, this.actionparam, this.filterData).subscribe(response => {
            this.search = response.results;
            if (this.search.length == 0) {
                this.isSearch = false;
            }
            else {
                this.isSearch = true;
            }
            this.setState(response);
            this.isLoading = false;
            this.pageLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.pageLoading = false;
        });
    }
    saveFilter(value) {
        if (value) {
            localStorage.setItem('filter_values', JSON.stringify(value));
        }
        else {
            localStorage.removeItem('filter_values');
        }
    }
    saveSearch(value) {
        localStorage.setItem('search_Value', value || '');
    }
    calcDate(startingDate, endingDate) {
        let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
        if (!endingDate) {
            endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
        }
        let endDate = new Date(endingDate);
        if (startDate > endDate) {
            const swap = startDate;
            startDate = endDate;
            endDate = swap;
        }
        const startYear = startDate.getFullYear();
        const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
        const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let yearDiff = endDate.getFullYear() - startYear;
        let monthDiff = endDate.getMonth() - startDate.getMonth();
        if (monthDiff < 0) {
            yearDiff--;
            monthDiff += 12;
        }
        let dayDiff = endDate.getDate() - startDate.getDate();
        if (dayDiff < 0) {
            if (monthDiff > 0) {
                monthDiff--;
            }
            else {
                yearDiff--;
                monthDiff = 11;
            }
            dayDiff += daysInMonth[startDate.getMonth()];
        }
        var message = [];
        if (yearDiff) {
            message.push(yearDiff + " Y ");
        }
        if (monthDiff) {
            message.push(monthDiff + " M ");
        }
        if (dayDiff) {
            message.push(dayDiff + " D  ");
        }
        return message.join(" ");
    }
    refreshSearch() {
        this.getAllSearch(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    getDurationBetweenDates(startDate, endDate) {
        // Calculate the difference in milliseconds
        const diffMs = new Date(endDate).getTime() - new Date(startDate).getTime();
        // Calculate the duration in days, hours, minutes, and seconds
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        // Create a human-readable string representing the duration
        const durationString = `${diffDays} days`;
        // Return the duration string
        return durationString;
    }
    decode(string) {
        return decodeURIComponent(string);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
SearchComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-search',
        template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchComponent);



/***/ }),

/***/ 72362:
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component.html?ngResource */ 6558);
/* harmony import */ var _timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.component.scss?ngResource */ 70452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TimelineComponent = class TimelineComponent {
    constructor() { }
    ngOnInit() { }
};
TimelineComponent.ctorParameters = () => [];
TimelineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timeline',
        template: _timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimelineComponent);



/***/ }),

/***/ 23201:
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/activity/activity.component */ 80716);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 73850);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ 50342);
/* harmony import */ var _agreement_components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agreement/components/view-agreement/view-agreement.component */ 83531);







const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
    },
    {
        path: 'search',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    {
        path: 'billing/:billingMode',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    {
        path: 'payor/:payorType',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    {
        path: 'search/expire/:expireType',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    {
        path: 'search/adjustment/:adjustmentType',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    {
        path: 'staff/:actionType/:staffId/:date',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent
    },
    {
        path: 'activity',
        component: _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_0__.ActivityComponent
    },
    {
        path: "search/view-agreement/:agreementId",
        component: _agreement_components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_3__.ViewAgreementComponent,
        data: { search: true }
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], DashboardRoutingModule);



/***/ }),

/***/ 73850:
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 19473);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 60274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/search.service */ 96995);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);









let DashboardComponent = class DashboardComponent {
    // Radar
    //  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    //  public radarChartData: any = [
    //      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    //      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    //  ];
    //  public radarChartType: ChartType;
    //  // Pie
    //  // public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    //  // public pieChartData: number[] = [300, 500, 100];
    //  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    //      labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    //      datasets: [ {
    //          data: [ 300, 500, 100 ]
    //      } ]
    //  };
    //  public pieChartType: ChartType;
    constructor(router, searchService, cdr, confirmationDialogService) {
        this.router = router;
        this.searchService = searchService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.alerts = [];
        this.sliders = [];
        this.aggregationBilling = [];
        this.payorTypeAggrements = [];
        this.isLoading = false;
        this.isChartLoading = false;
        this.isAggregationBillingLoading = false;
        this.clientCount = 0;
        this.clientGroupCount = 0;
        this.expireWeeklyCount = 0;
        this.expireMonthlyCount = 0;
        this.matterCount = 0;
        this.aggregationCount = 0;
        this.expireAggrement = [0, 0, 0, 0];
        this.adjustmentAggrement = [0, 0, 0, 0];
        this.dataSets = ['Matter', 'Client', 'Aggreement'];
        this.dateRangeLabel = ['30 Days', '31 to 60 Days', '61 to 90 Days', '90+ Days'];
        this.dateRangeValue = ["Expiring Agreement", "Adjustment Date"];
        this.actionType = ["Added Agreement", "Modify Agreement"];
        this.addedAggrement = [];
        this.updateAggrement = [];
        this.staff = [];
        this.teamMemberFilter = "15";
        this.teamMemberFilterLoading = false;
        this.teamMembersAggregationOperation = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isChartLoading = true;
        this.isAggregationBillingLoading = true;
        this.getAllSearch();
        this.getDayExpireChart();
        this.getAggregationBilling();
        this.getAggregationFilter();
    }
    getDayExpireChart() {
        return this.searchService.getDayExpireChart().subscribe(response => {
            this.expireAggrement = [
                response.expire.expire30DaysCount || 0,
                response.expire.expire31To60DaysCount || 0,
                response.expire.expire61To90DaysCount || 0,
                response.expire.expire90PlusDaysCount || 0
            ];
            this.adjustmentAggrement = [
                response.adjustment.adjustment30DaysCount || 0,
                response.adjustment.adjustment31To60DaysCount || 0,
                response.adjustment.adjustment61To90DaysCount || 0,
                response.adjustment.adjustment90PlusDaysCount || 0
            ];
            this.isChartLoading = false;
            this.createExpireChart();
        }, (error) => {
            this.isChartLoading = false;
        });
    }
    getAggregationFilter() {
        this.teamMemberFilterLoading = true;
        return this.searchService.getAggregationFilter(this.teamMemberFilter).subscribe(response => {
            this.teamMemberFilterLoading = false;
            this.teamMembersAggregationOperation = response;
            this.chartTeamMembersAggregationOperationDraw(response);
        }, (error) => {
            this.teamMemberFilterLoading = false;
        });
    }
    onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }
    chartTeamMembersAggregationOperationDraw(data) {
        let updateAggrement = [];
        let addedAggrement = [];
        let labelArray = {};
        data.map((_data) => {
            if (!labelArray[_data.staffName.name]) {
                labelArray[_data.staffName.name] = {};
            }
            if (_data._id.action === "add") {
                labelArray[_data.staffName.name].addField = _data;
            }
            else {
                labelArray[_data.staffName.name].updateField = _data;
            }
        }).filter(this.onlyUnique);
        Object.values(labelArray).forEach((_data) => {
            if (_data['addField']) {
                this.addedAggrement.push(_data['addField']);
                addedAggrement.push(_data['addField'].count);
            }
            else {
                this.addedAggrement.push(null);
                addedAggrement.push(0);
            }
            if (_data['updateField']) {
                this.updateAggrement.push(_data['updateField']);
                updateAggrement.push(_data['updateField'].count);
            }
            else {
                this.updateAggrement.push(null);
                updateAggrement.push(0);
            }
        });
        this.staff = data;
        this.chartAggregationTeamActivity = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart("chartTeamMemberFilter", {
            type: 'bar',
            data: {
                labels: Object.keys(labelArray),
                datasets: [
                    {
                        label: this.actionType[0],
                        data: addedAggrement,
                        backgroundColor: 'limegreen'
                    },
                    {
                        label: this.actionType[1],
                        data: updateAggrement,
                        backgroundColor: 'blue'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onChartTeamActionClicked(event, element)
            }
        });
    }
    onChartTeamActionClicked(event, elements) {
        const itemIndex = elements?.[0]?.datasetIndex >= 0 && this.actionType[elements[0].datasetIndex];
        switch (itemIndex) {
            case "Added Agreement":
                const itemDataRange = elements?.[0]?.index >= 0 && this.addedAggrement[elements[0].index];
                itemDataRange?._id?.staff && this.router.navigate([`/dashboard/staff/added/${itemDataRange._id.staff}/${this.teamMemberFilter}`]);
                break;
            case "Modify Agreement":
                const itemDataRange1 = elements?.[0]?.index >= 0 && this.updateAggrement[elements[0].index];
                itemDataRange1?._id?.staff && this.router.navigate([`/dashboard/staff/updated/${itemDataRange1._id.staff}/${this.teamMemberFilter}`]);
        }
    }
    getAggregationBilling() {
        return this.searchService.getAggregationBilling().subscribe(response => {
            this.isAggregationBillingLoading = false;
            this.aggregationBilling = response.billingModel || [];
            this.payorTypeAggrements = response.payorType || [];
            this.chartAggregationBillingDraw(response.billingModel || []);
            this.chartPayorTypeAggrementsDraw(response.payorType || []);
        }, (error) => {
            this.isAggregationBillingLoading = false;
        });
    }
    chartPayorTypeAggrementsDraw(data) {
        if (data.length === 0)
            return;
        this.chartpayorTypeAggrementschart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart("chartpayorTypeAggrements", {
            type: 'pie',
            data: {
                labels: data.map((_data) => _data._id),
                datasets: [
                    {
                        data: data.map((_data) => _data.count)
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onChartPayorClicked(event, element)
            }
        });
    }
    chartAggregationBillingDraw(data) {
        if (data.length === 0)
            return;
        this.aggregationBillingchart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart("chartAggregationBilling", {
            type: 'pie',
            data: {
                labels: data.map((_data) => _data._id),
                datasets: [
                    {
                        data: data.map((_data) => _data.count)
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onChartClicked(event, element)
            }
        });
    }
    onChartPayorClicked(event, elements) {
        const item = elements?.[0]?.index >= 0 && this.payorTypeAggrements[elements[0].index];
        if (item) {
            this.router.navigate(['/dashboard/payor/' + encodeURI(item._id)]);
        }
    }
    onCharLinkClicked(event, elements) {
        const item = elements?.[0]?.index >= 0 && this.dataSets[elements[0].index];
        switch (item) {
            case "Matter":
                this.router.navigate(['/matters']);
                break;
            case "Client":
                this.router.navigate(['/clients']);
                break;
            case "Aggreement":
                this.router.navigate(['/dashboard/search']);
        }
    }
    onChartClicked(event, elements) {
        const item = elements?.[0]?.index >= 0 && this.aggregationBilling[elements[0].index];
        if (item) {
            this.router.navigate(['/dashboard/billing/' + encodeURI(item._id)]);
        }
    }
    onCharExpireClicked(event, elements) {
        const itemDataRange = elements?.[0]?.index >= 0 && this.dateRangeLabel[elements[0].index].toLowerCase().replace(/ /g, '-').replace(/\+/g, 'plus');
        const itemIndex = elements?.[0]?.datasetIndex >= 0 && this.dateRangeValue[elements[0].datasetIndex];
        switch (itemIndex) {
            case "Expiring Agreement":
                this.router.navigate([`/dashboard/search/expire/${itemDataRange}`]);
                break;
            case "Adjustment Date":
                this.router.navigate([`/dashboard/search/adjustment/${itemDataRange}`]);
        }
    }
    teamMemberFilterChange() {
        this.chartAggregationTeamActivity && this.chartAggregationTeamActivity.destroy();
        this.getAggregationFilter();
    }
    drawPieChar() {
        this.pieChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart("cl-ma-ag--chart", {
            type: 'pie',
            data: {
                labels: this.dataSets,
                datasets: [
                    {
                        data: [
                            this.matterCount,
                            this.clientCount,
                            this.aggregationCount
                        ],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ]
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onCharLinkClicked(event, element)
            }
        });
    }
    getAllSearch() {
        return this.searchService.getDashboardRecords().subscribe(response => {
            this.clientCount = response.clientCount;
            this.aggregationCount = response.aggregationCount;
            this.expireWeeklyCount = response.expireWeeklyCount;
            this.expireMonthlyCount = response.expireMonthlyCount;
            this.matterCount = response.matterCount;
            this.clientGroupCount = response.clientCount;
            this.isLoading = false;
            this.drawPieChar();
        }, (error) => {
            this.isLoading = false;
        });
    }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    // events
    chartClicked(e) {
        // console.log(e);
    }
    chartHovered(e) {
        // console.log(e);
    }
    clientLink() {
        this.router.navigate(['/clients']);
    }
    matterLink() {
        this.router.navigate(['/matters']);
    }
    aggregationLink(type) {
        this.router.navigate([`/dashboard/search/expire/${type}`]);
    }
    createExpireChart() {
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart("expire-chart", {
            type: 'bar',
            data: {
                labels: this.dateRangeLabel,
                datasets: [
                    {
                        label: this.dateRangeValue[0],
                        data: this.expireAggrement,
                        backgroundColor: 'blue'
                    },
                    {
                        label: this.dateRangeValue[1],
                        data: this.adjustmentAggrement,
                        backgroundColor: 'limegreen'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5,
                onClick: (event, element) => this.onCharExpireClicked(event, element)
            }
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 99869:
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 91595);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 23201);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 73850);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/activity/activity.component */ 80716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../staff/service/staff.service */ 37441);
/* harmony import */ var _app_shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/modules/page-header/page-header.module */ 12956);
/* harmony import */ var _app_shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/modules/stat/stat.module */ 80110);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ 50342);
/* harmony import */ var _agreement_agreement_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../agreement/agreement.module */ 30162);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/filter/filter.component */ 42923);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/directives */ 94221);



















let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbCarouselModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbAlertModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
            _app_shared_modules_stat_stat_module__WEBPACK_IMPORTED_MODULE_6__.StatModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__.MatSliderModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _app_shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_5__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf,
            ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule,
            _agreement_agreement_module__WEBPACK_IMPORTED_MODULE_8__.AgreementModule
        ],
        exports: [
            _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_3__.ActivityComponent,
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__.FilterComponent
        ],
        providers: [_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_4__.StaffService],
        declarations: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_10__.NgbdSortableHeader, _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _components__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent, _components__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent, _components__WEBPACK_IMPORTED_MODULE_0__.ChatComponent, _components_activity_activity_component__WEBPACK_IMPORTED_MODULE_3__.ActivityComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__.FilterComponent]
    })
], DashboardModule);



/***/ }),

/***/ 10356:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/activity/activity.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".view-activity {\n  margin: 0px !important;\n  padding: 1px 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6ImFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctYWN0aXZpdHl7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxcHggMTBweCFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 17267:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px;\n}\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat-panel .chat .left img {\n  margin-right: 15px;\n}\n.chat-panel .chat .right img {\n  margin-left: 15px;\n}\n.chat-panel .chat li {\n  margin-bottom: 10px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999;\n}\n.chat-panel .card-footer input {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBR0k7RUFhSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBYlI7QUFGWTtFQUNJLGtCQUFBO0FBSWhCO0FBQ1k7RUFDSSxpQkFBQTtBQUNoQjtBQVNRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFQWjtBQVlRO0VBQ0ksWUFBQTtBQVZaIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1wYW5lbCB7XG4gICAgLmNoYXQtZHJvcGRvd24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIH1cblxuICAgIC5jaGF0IHtcbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 10077:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/filter/filter.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "#slider {\n  position: absolute;\n  width: 310px;\n  height: 100%;\n  background: #fff;\n  overflow-x: scroll;\n  padding-bottom: 10px;\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  right: 0;\n}\n#slider ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.slide_main_menu {\n  padding: 16px;\n  border-bottom: 1px solid #ccc;\n}\n.slide_main_menu .slide_header {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #212529;\n}\n.parent-slide {\n  position: fixed;\n  right: 0;\n  top: 215px;\n  height: 92%;\n}\n.parent-slide.slide-in {\n  top: 65px;\n}\n.parent-slide .loader-overlay {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #ccc;\n  opacity: 0.3;\n}\n.parent-slide .loader {\n  position: fixed;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n.slide_body {\n  gap: 10px;\n}\n.slide-in #slider {\n  animation: slide-in 0.5s forwards;\n  -webkit-animation: slide-in 0.5s forwards;\n}\n.menu-open {\n  position: absolute;\n  right: 39px;\n  top: -77px;\n}\n.slide-in .menu-open {\n  display: none;\n}\n.menu-open button {\n  margin: 0 !important;\n  padding: 4px 50px;\n}\n.slide-out #slider {\n  animation: slide-out 0.5s forwards;\n  -webkit-animation: slide-out 0.5s forwards;\n}\n.action-button {\n  position: relative;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n@keyframes slide-in {\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes slide-in {\n  100% {\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes slide-out {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@-webkit-keyframes slide-out {\n  0% {\n    -webkit-transform: translateX(0%);\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n  }\n}\n.slide_main_menu li {\n  padding: 4px 0;\n}\n.close-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 1px;\n  background: #d8d8d8;\n  border: 0;\n}\n.close-button img {\n  width: 15px;\n}\n.slide_main_menu li input {\n  margin-right: 9px;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n}\n.slide_main_menu li label {\n  display: flex;\n}\n.filter-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 10px;\n}\n.filter-buttons button {\n  width: 48%;\n  margin: 0 !important;\n}\n.action-button1 {\n  position: absolute;\n  top: 90px;\n  right: -14px;\n}\n.expand-main {\n  text-align: right;\n}\n.expand-main .expand {\n  text-decoration: none;\n  color: var(--bs-body-color);\n  cursor: pointer;\n}\n.align-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0ZBQUE7RUFDQSxRQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDUjtBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFESjtBQUdJO0VBQ0ksU0FBQTtBQURSO0FBSUk7RUFDSSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFIUjtBQU9BO0VBRUksU0FBQTtBQUxKO0FBUUE7RUFDSSxpQ0FBQTtFQUNBLHlDQUFBO0FBTEo7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFMSjtBQVFBO0VBQ0ksYUFBQTtBQUxKO0FBUUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFVQTtFQUNJLGtDQUFBO0VBQ0EsMENBQUE7QUFQSjtBQVVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFQSjtBQVVBO0VBQ0k7SUFDSSx5QkFBQTtFQVBOO0FBQ0Y7QUFVQTtFQUNJO0lBQ0ksaUNBQUE7RUFSTjtBQUNGO0FBV0E7RUFDSTtJQUNJLHlCQUFBO0VBVE47RUFZRTtJQUNJLDJCQUFBO0VBVk47QUFDRjtBQWFBO0VBQ0k7SUFDSSxpQ0FBQTtFQVhOO0VBY0U7SUFDSSxtQ0FBQTtFQVpOO0FBQ0Y7QUFlQTtFQUNJLGNBQUE7QUFiSjtBQWdCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBYko7QUFnQkE7RUFDSSxXQUFBO0FBYko7QUFpQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWRKO0FBa0JBO0VBQ0ksYUFBQTtBQWZKO0FBa0JBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFmSjtBQWtCQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQWZKO0FBbUJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWhCSjtBQW1CQTtFQUNJLGlCQUFBO0FBaEJKO0FBaUJJO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFmUjtBQWtCQTtFQUNJLGlCQUFBO0FBZkoiLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4uc2xpZGVfbWFpbl9tZW51IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgLnNsaWRlX2hlYWRlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxufVxuXG4ucGFyZW50LXNsaWRlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAyMTVweDtcbiAgICBoZWlnaHQ6IDkyJTtcblxuICAgICYuc2xpZGUtaW4ge1xuICAgICAgICB0b3A6IDY1cHg7XG4gICAgfVxuXG4gICAgLmxvYWRlci1vdmVybGF5IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxuXG4gICAgLmxvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG4uc2xpZGVfYm9keSB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zbGlkZS1pbiAjc2xpZGVyIHtcbiAgICBhbmltYXRpb246IHNsaWRlLWluIDAuNXMgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDAuNXMgZm9yd2FyZHM7XG59XG5cbi5tZW51LW9wZW4geyAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzOXB4O1xuICAgIHRvcDogLTc3cHg7XG59XG5cbi5zbGlkZS1pbiAubWVudS1vcGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1vcGVuIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNHB4IDUwcHg7IFxufVxuXG5cblxuLnNsaWRlLW91dCAjc2xpZGVyIHtcbiAgICBhbmltYXRpb246IHNsaWRlLW91dCAwLjVzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBmb3J3YXJkcztcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG59XG5cbi5zbGlkZV9tYWluX21lbnUgbGkge1xuICAgIHBhZGRpbmc6IDRweCAwO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5jbG9zZS1idXR0b24gaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbn1cblxuXG4uc2xpZGVfbWFpbl9tZW51IGxpIGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAxNnB4O1xuXG59XG5cbi5zbGlkZV9tYWluX21lbnUgbGkgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maWx0ZXItYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5maWx0ZXItYnV0dG9ucyBidXR0b24ge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLmFjdGlvbi1idXR0b24xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5MHB4O1xuICAgIHJpZ2h0OiAtMTRweDtcbn1cblxuLmV4cGFuZC1tYWluIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAuZXhwYW5kIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnMtYm9keS1jb2xvcik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4uYWxpZ24tcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */";

/***/ }),

/***/ 28651:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 32797:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/search/search.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".black-text-link {\n  color: #000;\n  text-decoration: none;\n}\n\n.btn-download-button {\n  max-width: 153px;\n  padding: 4px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFjay10ZXh0LWxpbmt7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0bi1kb3dubG9hZC1idXR0b24ge1xuICAgIG1heC13aWR0aDogMTUzcHg7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 70452:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px);\n  }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n  ul.timeline > li > .timeline-panel {\n    float: right;\n  }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7O0VBRUksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFQUNOO0VBRUU7SUFDSSx3QkFBQTtJQUVBLGdDQUFBO0VBQU47RUFHRTtJQUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQUROO0VBSUU7SUFDSSxZQUFBO0VBRk47RUFLRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQUhOO0VBTUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnRpbWVsaW5lID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDYlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjZweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2NjYztcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNjY2M7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI3cHg7XG4gICAgcmlnaHQ6IC0xNHB4O1xuICAgIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTRweCBzb2xpZCAjZmZmO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuXG4udGltZWxpbmUtYmFkZ2UucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNmRhNCAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2Uuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmOTAzZiAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2Uud2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2UuZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnRpbWVsaW5lLWJvZHkgPiBwLFxuLnRpbWVsaW5lLWJvZHkgPiB1bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpbWVsaW5lLWJvZHkgPiBwICsgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB1bC50aW1lbGluZTpiZWZvcmUge1xuICAgICAgICBsZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDkwcHgpO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA5MHB4KTtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNXB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE0cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 60274:
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".border-left-primary {\n  border-left: 0.25rem solid #4e73df !important;\n}\n\n.border-bottom-primary {\n  border-bottom: 0.25rem solid #4e73df !important;\n}\n\n.border-left-secondary {\n  border-left: 0.25rem solid #858796 !important;\n}\n\n.border-bottom-secondary {\n  border-bottom: 0.25rem solid #858796 !important;\n}\n\n.border-left-success {\n  border-left: 0.25rem solid #1cc88a !important;\n}\n\n.border-bottom-success {\n  border-bottom: 0.25rem solid #1cc88a !important;\n}\n\n.border-left-info {\n  border-left: 0.25rem solid #36b9cc !important;\n}\n\n.border-bottom-info {\n  border-bottom: 0.25rem solid #36b9cc !important;\n}\n\n.border-left-warning {\n  border-left: 0.25rem solid #f6c23e !important;\n}\n\n.border-bottom-warning {\n  border-bottom: 0.25rem solid #f6c23e !important;\n}\n\n.border-left-danger {\n  border-left: 0.25rem solid #e74a3b !important;\n}\n\n.border-bottom-danger {\n  border-bottom: 0.25rem solid #e74a3b !important;\n}\n\n.border-left-light {\n  border-left: 0.25rem solid #f8f9fc !important;\n}\n\n.border-bottom-light {\n  border-bottom: 0.25rem solid #f8f9fc !important;\n}\n\n.border-left-dark {\n  border-left: 0.25rem solid #5a5c69 !important;\n}\n\n.border-bottom-dark {\n  border-bottom: 0.25rem solid #5a5c69 !important;\n}\n\n.div-loader-height {\n  min-height: 200px;\n  line-height: 200px;\n}\n\n@media (max-width: 768px) {\n  .dashboard-cols .col-6 .row {\n    flex-direction: column;\n    align-items: center !important;\n    text-align: center;\n  }\n  .dashboard-cols .col-6 .row .col-auto {\n    padding: 0;\n    margin: 0;\n    margin-bottom: 10px;\n  }\n  .dashboard-cols .col-6 .row .col.mr-2 {\n    margin-right: 0 !important;\n  }\n}\n\ncanvas {\n  cursor: pointer;\n}\n\n.dashboard-cols .dashboard-stripe {\n  width: 20%;\n}\n\n@media (max-width: 768px) {\n  .dashboard-cols .dashboard-stripe {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFxQiw2Q0FBQTtBQUVyQjs7QUFGZ0U7RUFBdUIsK0NBQUE7QUFNdkY7O0FBTm9JO0VBQXVCLDZDQUFBO0FBVTNKOztBQVZzTTtFQUF5QiwrQ0FBQTtBQWMvTjs7QUFkNFE7RUFBcUIsNkNBQUE7QUFrQmpTOztBQWxCNFU7RUFBdUIsK0NBQUE7QUFzQm5XOztBQXRCZ1o7RUFBa0IsNkNBQUE7QUEwQmxhOztBQTFCNmM7RUFBb0IsK0NBQUE7QUE4QmplOztBQTlCOGdCO0VBQXFCLDZDQUFBO0FBa0NuaUI7O0FBbEM4a0I7RUFBdUIsK0NBQUE7QUFzQ3JtQjs7QUF0Q2twQjtFQUFvQiw2Q0FBQTtBQTBDdHFCOztBQTFDaXRCO0VBQXNCLCtDQUFBO0FBOEN2dUI7O0FBOUNveEI7RUFBbUIsNkNBQUE7QUFrRHZ5Qjs7QUFsRGsxQjtFQUFxQiwrQ0FBQTtBQXNEdjJCOztBQXREbzVCO0VBQWtCLDZDQUFBO0FBMER0NkI7O0FBMURpOUI7RUFBb0IsK0NBQUE7QUE4RHIrQjs7QUE3REE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBZ0VKOztBQTdEQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0VBZ0VOO0VBN0RFO0lBQ0ksVUFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQStETjtFQTdERTtJQUNJLDBCQUFBO0VBK0ROO0FBQ0Y7O0FBN0RBO0VBQ0ksZUFBQTtBQStESjs7QUE1REE7RUFDSSxVQUFBO0FBK0RKOztBQTVEQTtFQUNJO0lBQ0ksVUFBQTtFQStETjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItbGVmdC1wcmltYXJ5e2JvcmRlci1sZWZ0Oi4yNXJlbSBzb2xpZCAjNGU3M2RmIWltcG9ydGFudH0uYm9yZGVyLWJvdHRvbS1wcmltYXJ5e2JvcmRlci1ib3R0b206LjI1cmVtIHNvbGlkICM0ZTczZGYhaW1wb3J0YW50fS5ib3JkZXItbGVmdC1zZWNvbmRhcnl7Ym9yZGVyLWxlZnQ6LjI1cmVtIHNvbGlkICM4NTg3OTYhaW1wb3J0YW50fS5ib3JkZXItYm90dG9tLXNlY29uZGFyeXtib3JkZXItYm90dG9tOi4yNXJlbSBzb2xpZCAjODU4Nzk2IWltcG9ydGFudH0uYm9yZGVyLWxlZnQtc3VjY2Vzc3tib3JkZXItbGVmdDouMjVyZW0gc29saWQgIzFjYzg4YSFpbXBvcnRhbnR9LmJvcmRlci1ib3R0b20tc3VjY2Vzc3tib3JkZXItYm90dG9tOi4yNXJlbSBzb2xpZCAjMWNjODhhIWltcG9ydGFudH0uYm9yZGVyLWxlZnQtaW5mb3tib3JkZXItbGVmdDouMjVyZW0gc29saWQgIzM2YjljYyFpbXBvcnRhbnR9LmJvcmRlci1ib3R0b20taW5mb3tib3JkZXItYm90dG9tOi4yNXJlbSBzb2xpZCAjMzZiOWNjIWltcG9ydGFudH0uYm9yZGVyLWxlZnQtd2FybmluZ3tib3JkZXItbGVmdDouMjVyZW0gc29saWQgI2Y2YzIzZSFpbXBvcnRhbnR9LmJvcmRlci1ib3R0b20td2FybmluZ3tib3JkZXItYm90dG9tOi4yNXJlbSBzb2xpZCAjZjZjMjNlIWltcG9ydGFudH0uYm9yZGVyLWxlZnQtZGFuZ2Vye2JvcmRlci1sZWZ0Oi4yNXJlbSBzb2xpZCAjZTc0YTNiIWltcG9ydGFudH0uYm9yZGVyLWJvdHRvbS1kYW5nZXJ7Ym9yZGVyLWJvdHRvbTouMjVyZW0gc29saWQgI2U3NGEzYiFpbXBvcnRhbnR9LmJvcmRlci1sZWZ0LWxpZ2h0e2JvcmRlci1sZWZ0Oi4yNXJlbSBzb2xpZCAjZjhmOWZjIWltcG9ydGFudH0uYm9yZGVyLWJvdHRvbS1saWdodHtib3JkZXItYm90dG9tOi4yNXJlbSBzb2xpZCAjZjhmOWZjIWltcG9ydGFudH0uYm9yZGVyLWxlZnQtZGFya3tib3JkZXItbGVmdDouMjVyZW0gc29saWQgIzVhNWM2OSFpbXBvcnRhbnR9LmJvcmRlci1ib3R0b20tZGFya3tib3JkZXItYm90dG9tOi4yNXJlbSBzb2xpZCAjNWE1YzY5IWltcG9ydGFudH1cbi5kaXYtbG9hZGVyLWhlaWdodHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBsaW5lLWhlaWdodDogMjAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAuZGFzaGJvYXJkLWNvbHMgLmNvbC02IC5yb3d7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5kYXNoYm9hcmQtY29scyAuY29sLTYgLnJvdyAuY29sLWF1dG97XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmRhc2hib2FyZC1jb2xzIC5jb2wtNiAucm93IC5jb2wubXItMntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuY2FudmFzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXNoYm9hcmQtY29scyAuZGFzaGJvYXJkLXN0cmlwZXtcbiAgICB3aWR0aDogMjAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XG4gICAgLmRhc2hib2FyZC1jb2xzIC5kYXNoYm9hcmQtc3RyaXBle1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 9991:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/activity/activity.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Activity Logs'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                  <div class=\"col-md-12 text-left\">\n                    <div class=\"form-group mb-1\">\n                      <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                        (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"logs\" class=\"form-control\"\n                        placeholder=\"Search here...\">\n                    </div>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                  <div class=\"text-center\">\n                    <div class=\"spinner-border\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </div>\n                </ng-container>\n                <div *ngIf=\"!isActivity;else table\">\n                  <p class=\"text-center\">No logs found</p>\n                </div>\n                <ng-template #table>\n                  <div *ngIf=\"!isLoading\">\n                    <table class=\"table table-bordered\">\n                      <thead>\n                        <tr>\n                          <th>Time</th>\n                          <th scope=\"col\"><span>Activity</span></th>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let request of promotions; let i = index\">\n                          <td>{{request?.createdAt |  date:'short'}}</td>\n                          <td>{{request?.text}}</td>\n                          <td>\n                            <button (click)=\"view(request)\" class=\"btn btn-info view-activity btn-block\">View</button>\n                            <!-- <span *ngIf=\"request.type === 'link'\">\n                              \n                            </span> -->\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refreshPromotions()\">\n                      </ngb-pagination>\n          \n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\"\n                        (ngModelChange)=\"refreshPromotions()\">\n                        <option [ngValue]=\"5\">5 items per page</option>\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                      </select>\n                    </div>\n                  </div>\n                </ng-template>\n              </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ }),

/***/ 11820:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\"pull-right\" ngbDropdown>\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-times fa-fw\"></i> Busy </a>\n                </li>\n                <li>\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-clock-o fa-fw\"></i> Away </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-body\">\n        <ul class=\"chat\">\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/55C1E7/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/FA6F57/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\"text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/55C1E7/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/FA6F57/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\"text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input class=\"form-control input-sm\" id=\"btn-input\" placeholder=\"Type your message here...\" type=\"text\" />\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- /.card-footer -->\n</div>\n";

/***/ }),

/***/ 71561:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/filter/filter.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<!--Right Slide-->\n<ng-template #responsibleAttorney let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatEmployee(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<div class=\"parent-slide\" [ngClass]=\"openClass\">\n    <form [formGroup]=\"filterForm\" class=\"form-inline\" autocomplete=\"off\">\n        <div id=\"slider\" class=\"slide-out\">\n            <div class=\"position-relative\">\n                <div class=\"menu-close\">\n                    <div class=\"flex position-relative\">\n                        <div class=\"filter-buttons\">\n                            <button (click)=\"resetEvent()\" class=\"btn btn-outline-secondary\">Reset</button>\n                            <button (click)=\"closeMenu()\" class=\"btn btn-outline-secondary\">Close Filter</button>\n                        </div>\n                    </div>\n                    <!--Frequency-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Responsible Attorney</div>\n                        <div class=\"slide_body\">\n                            <input type=\"text\" [ngbTypeahead]=\"searchEmployee\" (selectItem)=\"selectedItem($event)\"\n                                (focus)=\"focus3$.next($event.target.value)\" (click)=\"click3$.next($event.target.value)\"\n                                #instance3=\"ngbTypeahead\" [resultTemplate]=\"responsibleAttorney\"\n                                [inputFormatter]=\"formatterEmployee\" class=\"form-control form-control-lg\"\n                                formControlName=\"responsibleAttorney\" />\n                            <button type=\"button\" (click)=\"resetResponsibleAttorney()\"\n                                class=\"btn btn-outline-secondary\"><img src=\"assets/images/close-icon.svg\"\n                                    alt=\"\"></button>\n                        </div>\n                    </div>\n                    <!--billingCurrency-->\n                    <!-- <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Practice Group</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('billingCurrency')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'billingCurrency')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.billingCurrency; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['billingCurrency'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'billingCurrency')\" />\n                                        {{data._id}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n                    <!--Practice Group-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Practice Group</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('practiceGroup')\"\n                                        (change)=\"toggleAllSelectionName($event.target.checked, 'practiceGroup', true, 'practiceGroupId')\" />\n                                    All</li>\n                                <li\n                                    *ngFor=\"let data of collectionOptions?.practiceGroup?.slice(0, countRecords); let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.practiceGroupId\"\n                                            [checked]=\"filterForm.controls['practiceGroup'].value.includes(data._id.practiceGroupId)\"\n                                            (change)=\"onCheckboxChange($event, 'practiceGroup')\" />\n                                        {{data._id.practiceGroupName}}\n                                    </label>\n                                </li>\n                            </ul>\n                            <ul *ngIf=\"expandedPracticeGroup\">\n                                <li\n                                    *ngFor=\"let data of collectionOptions?.practiceGroup?.slice(countRecords, countRecords.length); let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.practiceGroupId\"\n                                            [checked]=\"filterForm.controls['practiceGroup'].value.includes(data._id.practiceGroupId)\"\n                                            (change)=\"onCheckboxChange($event, 'practiceGroup')\" />\n                                        {{data._id.practiceGroupName}}\n                                    </label>\n                                </li>\n                            </ul>\n                            <div class=\"expand-main\">\n                                <a type=\"link\" class=\"expand\" (click)=\"expandPracticeGroupClick(true)\"\n                                    *ngIf=\"!expandedPracticeGroup && collectionOptions?.practiceGroup?.length > countRecords\">Show\n                                    More\n                                    >></a>\n                                <a type=\"link\" class=\"expand\" (click)=\"expandPracticeGroupClick(false)\"\n                                    *ngIf=\"expandedPracticeGroup\">Show Less << </a>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Practice Group-->\n                    <!-- <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Practice Group</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('matterId')\"\n                                        (change)=\"toggleAllSelectionMatter($event.target.checked, 'matterId')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.matterId; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.matterName\"\n                                            [checked]=\"filterForm.controls['matterId'].value.includes(data._id.matterName)\"\n                                            (change)=\"onCheckboxChange($event, 'matterId')\" />\n                                        {{data._id.matterName}}\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n                    <!--Area of Law-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Area of Law</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('areaOfLaw')\"\n                                        (change)=\"toggleAllSelectionName($event.target.checked, 'areaOfLaw', true, 'areaOfLawId')\" />\n                                    All</li>\n                                <li\n                                    *ngFor=\"let data of collectionOptions?.areaOfLaw?.slice(0,countRecords); let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.areaOfLawId\"\n                                            [checked]=\"filterForm.controls['areaOfLaw'].value.includes(data._id.areaOfLawId)\"\n                                            (change)=\"onCheckboxChange($event, 'areaOfLaw')\" />\n                                        {{data._id.areaOfLawName}}\n                                    </label>\n                                </li>\n                            </ul>\n                            <ul *ngIf=\"expandedAreaOfLow\">\n                                <li\n                                    *ngFor=\"let data of collectionOptions?.areaOfLaw?.slice(countRecords, countRecords.length); let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.areaOfLawId\"\n                                            [checked]=\"filterForm.controls['areaOfLaw'].value.includes(data._id.areaOfLawId)\"\n                                            (change)=\"onCheckboxChange($event, 'areaOfLaw')\" />\n                                        {{data._id.areaOfLawName}}\n                                    </label>\n                                </li>\n                            </ul>\n                            <div class=\"expand-main\">\n                                <a type=\"link\" class=\"expand\" (click)=\"expandAreaOfLowClick(true)\"\n                                    *ngIf=\"!expandedAreaOfLow && collectionOptions?.areaOfLaw?.length > countRecords\">Show\n                                    More\n                                    >></a>\n                                <a type=\"link\" class=\"expand\" (click)=\"expandAreaOfLowClick(false)\"\n                                    *ngIf=\"expandedAreaOfLow\">Show Less << </a>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Expiration Date-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Expiration Date</div>\n                        <div class=\"slide_body\">\n                            <div class=\"slide_body\">\n                                <div>\n                                    <label>From</label>\n                                    <input type=\"date\" class=\"form-control\" formControlName=\"expirationStartDate\"\n                                        id=\"floatingInput\" (change)=\"toggleAllSelectionResponsibleAttorney();\"\n                                        min=\"{{ collectionOptions.expirationDate?.[0]?.minExpirationDate  | date: 'yyyy-MM-dd'}}\"\n                                        max=\"{{filterForm.value.expirationEndDate | date: 'yyyy-MM-dd'}}\" />\n                                </div>\n                                <div>\n                                    <label>To</label>\n                                    <input type=\"date\" class=\"form-control\" formControlName=\"expirationEndDate\"\n                                        id=\"floatingInput\" (change)=\"toggleAllSelectionResponsibleAttorney();\"\n                                        min=\"{{filterForm.value.expirationStartDate | date: 'yyyy-MM-dd'}}\"\n                                        max=\"{{ collectionOptions.expirationDate?.[0]?.maxExpirationDate  | date: 'yyyy-MM-dd'}}\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Base Rate-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Base Rate</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('baseRate')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'baseRate')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.baseRate; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id || -1\"\n                                            [checked]=\"filterForm.controls['baseRate'].value.includes(data._id || -1)\"\n                                            (change)=\"onCheckboxChange($event, 'baseRate')\" />\n                                        {{data._id || \"Other\"}}\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--feeArrangementType-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Fee Arrangement Type</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('feeArrangementType')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'feeArrangementType')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.feeArrangementType; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['feeArrangementType'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'feeArrangementType')\" />\n                                        {{data._id}}\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--Payor Type-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Payor Type</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('payorType')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'payorType')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.payorType; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['payorType'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'payorType')\" />\n                                        {{data._id}}\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--billingMethode-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Billing Method</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('billingMethod')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'billingMethod')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.billingMethod; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['billingMethod'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'billingMethod')\" />\n                                        {{data._id}}\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--Sic code-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Industry SIC Code</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('sicCode')\"\n                                        (change)=\"toggleAllSelectionName($event.target.checked, 'sicCode', true, 'clientSicId')\" />\n                                    All</li>\n                                <li\n                                    *ngFor=\"let data of collectionOptions?.sicCode?.slice(0, countRecords); let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.clientSicId\"\n                                            [checked]=\"filterForm.controls['sicCode'].value.includes(data._id.clientSicId)\"\n                                            (change)=\"onCheckboxChange($event, 'sicCode')\" />\n                                        {{data._id.clientSicName}}\n                                    </label>\n                                </li>\n                            </ul>\n                            <ul *ngIf=\"expanded\">\n                                <li\n                                    *ngFor=\"let data of collectionOptions?.sicCode?.slice(countRecords, countRecords.length); let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.clientSicId\"\n                                            [checked]=\"filterForm.controls['sicCode'].value.includes(data._id.clientSicId)\"\n                                            (change)=\"onCheckboxChange($event, 'sicCode')\" />\n                                        {{data._id.clientSicName}}\n                                    </label>\n                                </li>\n                            </ul>\n                            <div class=\"expand-main\">\n                                <a type=\"link\" class=\"expand\" (click)=\"expandClick(true)\"\n                                    *ngIf=\"!expanded && collectionOptions?.sicCode?.length > countRecords\">Show More\n                                    >></a>\n                                <a type=\"link\" class=\"expand\" (click)=\"expandClick(false)\" *ngIf=\"expanded\">Show Less <<\n                                        </a>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Adjustment Date-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Adjustment Date</div>\n                        <div class=\"slide_body\">\n                            <div>\n                                <label>From</label>\n                                <input type=\"date\" class=\"form-control\" formControlName=\"adjustmentStartDate\"\n                                    id=\"floatingInput\" (change)=\"toggleAllSelectionResponsibleAttorney();\"\n                                    min=\"{{ collectionOptions.adjustmentDate?.[0]?.minAdjustmentDate | date: 'yyyy-MM-dd'}}\"\n                                    max=\"{{filterForm.value.adjustmentEndDate | date: 'yyyy-MM-dd' }}\" />\n                            </div>\n                            <div>\n                                <label>To</label>\n                                <input type=\"date\" class=\"form-control\" formControlName=\"adjustmentEndDate\"\n                                    id=\"floatingInput\" (change)=\"toggleAllSelectionResponsibleAttorney();\"\n                                    min=\"{{filterForm.value.adjustmentStartDate | date: 'yyyy-MM-dd'}}\"\n                                    max=\"{{ collectionOptions.adjustmentDate?.[0]?.maxAdjustmentDate | date: 'yyyy-MM-dd'}}\" />\n                            </div>\n                        </div>\n                    </div>\n                    <!--Duration-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Agreement Duration (In Days)</div>\n                        <div class=\"slide_body\">\n                            <div>\n                                <label>From</label>\n                                <input type=\"number\" class=\"form-control\" formControlName=\"durationFrom\"\n                                    id=\"floatingInput\" (change)=\"toggleDurationMin($event);\"\n                                    max=\"{{ filterForm.value.durationTo || 1000 }}\" />\n                            </div>\n                            <div>\n                                <label>To</label>\n                                <input type=\"number\" class=\"form-control\" formControlName=\"durationTo\"\n                                    id=\"floatingInput\" (change)=\"toggleDurationMax($event);\"\n                                    min=\"{{  filterForm.value.durationFrom || 0 }}\" />\n                            </div>\n                            <!-- <div class=\"align-right\">\n                                <button (click)=\"clearDuration()\" class=\"btn btn-primary\">clear</button>\n                            </div> -->\n                        </div>\n                    </div>\n                    <!--Billing Frequency-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">BILLING FREQUENCY</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('billingFrequency')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'billingFrequency')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.billingFrequency; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['billingFrequency'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'billingFrequency')\" />\n                                        {{data._id}}\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"position-absolute loader-overlay\" *ngIf=\"loader\">\n                    <div class=\"loader\">\n                        <div class=\"position-relative\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </form>\n</div>\n<div class=\"action-button1\" *ngIf=\"!open && !this.loader && collectionOptions?.sicCode?.length!==0\">\n    <div class=\"menu-open\">\n        <button (click)=\"openMenu()\" class=\"btn btn-primary\">Filter</button>\n    </div>\n</div>";

/***/ }),

/***/ 44865:
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card-body\">\n    <div class=\"list-group\">\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\n        </a>\n    </div>\n    <!-- /.list-group -->\n    <a class=\"btn btn-default btn-block\" href=\"#\">View All Alerts</a>\n</div>\n";

/***/ }),

/***/ 85762:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/search/search.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"getHeader()\"></app-page-header>\n    <div class=\"container-fluid mt-2 position-relative\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                    <div class=\"col-md-9 text-left mb-1 mb-md-0\">\n                        <div class=\"form-group mb-1\">\n                            <form>\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"matterstaffs\"\n                                    class=\"form-control\" placeholder=\"Search here...\" />\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                        <button type=\"button\" (click)=\"downloadFileExcel()\" class=\"btn btn-primary btn-block btn-download-button\">Download</button>\n                    </div>\n                    <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/matters/add-matter\" class=\"btn btn-primary\">Add Matter</button>\n                        </div> -->\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <div *ngIf=\"!isSearch;else table\">\n                    <p class=\"text-center\">No search found</p>\n                </div>\n                <ng-template #table>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"table-responsive scroll-position\" >\n                            <table class=\"table table-striped scroll-position-div\">\n                                <thead>\n                                    <tr>\n                                        <!-- <th scope=\"col\">#</th> -->\n                                        <th>View</th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientGroupId\"  (sort)=\"onSort($event)\">Client Group# \n                                        </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientGroupName\" (sort)=\"onSort($event)\">Client Group \n                                            Name \n                                        </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientId\" (sort)=\"onSort($event)\">Client# </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"clientName\" (sort)=\"onSort($event)\">Client Name \n                                        </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"matterId\" (sort)=\"onSort($event)\">Matter# </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"matterName\" (sort)=\"onSort($event)\">Matter Name \n                                        </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"principalAttorneyName\" (sort)=\"onSort($event)\">\n                                            Responsible Attorney </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"payorType\" (sort)=\"onSort($event)\">Pricing Model \n                                        </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"feeArrangementType\" (sort)=\"onSort($event)\">\n                                            Fee Arrangement Type </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"startDate\" (sort)=\"onSort($event)\">Agreement Start\n                                            Date </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"expirationDate\" (sort)=\"onSort($event)\">Agreement\n                                            Expiration Date </th>\n                                        <th scope=\"col\">Agreement Duration </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"updatedAt\" (sort)=\"onSort($event)\">Last Modified\n                                            Date </th>\n                                        <th scope=\"col\" [oldColumn] = \"_state.sortColumn\" sortable=\"responsibleBillingManagerName\"\n                                            (sort)=\"onSort($event)\">Modified By </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"pageLoading\">\n                                        <td colspan=\"15\" class=\"text-center\">Loading...</td>\n                                    </tr>\n                                    <tr  *ngFor=\"let agreement of search; index as i\">\n                                        <!-- <th scope=\"row\">{{ ((_state.page-1) * _state.limit) + i +1 }}</th> -->\n                                        <td>\n                                            <div class=\"action-buttons\"><button\n                                                    (click)=\"viewAgrement(agreement.id)\"><img\n                                                        src=\"assets/images/search.svg\" alt=\"\"></button></div>\n                                        </td>\n                                        <td>{{agreement?.client.clientGroup}}</td>\n                                        <td>{{agreement?.clientGroupName}}</td>\n                                        <td><a routerLink=\"/matters/client-id/{{agreement.client.clientId}}\"\n                                                role=\"link\">{{agreement?.client.clientId}}</a></td>\n                                        <td><a routerLink=\"/matters/client-id/{{agreement.client.clientId}}\"\n                                                role=\"link\">{{agreement?.clientName}}</a></td>\n                                        <td><a routerLink=\"/matters/matter-id/{{agreement?.matterId}}\"\n                                                role=\"link\">{{agreement?.matterId}}</a></td>\n                                        <td><a routerLink=\"/matters/matter-id/{{agreement?.matterId}}\"\n                                                role=\"link\">{{agreement?.matterName}}</a></td>\n                                        <td><a routerLink=\"/employees/view-employee/{{agreement?.principalAttorneyId}}\"\n                                                role=\"link\">{{agreement?.principalAttorneyName}}</a>\n                                        </td>\n                                        <td>{{agreement?.payorType}}</td>\n                                        <td>{{agreement?.feeArrangementType}}</td>\n                                        <td>{{agreement?.startDate | date:'MM/dd/YYYY'}}</td>\n                                        <td>{{agreement?.expirationDate | date:'MM/dd/YYYY'}}</td>\n                                        <td>{{calcDate(agreement?.startDate, agreement?.expirationDate)}}</td>\n                                        <td>{{agreement?.updatedAt | date:'MM/dd/YYYY'}}</td>\n                                        <td><a class=\"link\"\n                                                routerLink=\"/employees/view-employee/{{agreement?.principalAttorneyId}}\"\n                                                role=\"link\"\n                                                class=\"black-text-link\">{{agreement?.responsibleBillingManagerName}}</a>\n                                        </td>\n\n                                        <!-- <td>\n                                                <label class=\"switch\" *ngIf=\"agreement.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(agreement.id, agreement.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!agreement.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(agreement.id, agreement.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(agreement.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\">\n                                                    <button (click)=\"deleteUser(agreement.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"d-flex justify-content-between p-2\">\n                            <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\"\n                                [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                (pageChange)=\"refreshSearch()\">\n                            </ngb-pagination>\n\n                            <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\"\n                                (ngModelChange)=\"refreshSearch()\" [ngModelOptions]=\"{standalone: true}\">\n                                <option [ngValue]=\"10\">10 items per page</option>\n                                <option [ngValue]=\"20\">20 items per page</option>\n                                <option [ngValue]=\"30\">30 items per page</option>\n                            </select>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n\n        <app-agreements-filter-search (found)=\"handleResults($event)\" [actionparam]=\"actionparam\">\n        </app-agreements-filter-search>\n    </div>\n</div>";

/***/ }),

/***/ 6558:
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card-body\">\n    <ul class=\"timeline\">\n        <li>\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                    <p>\n                        <small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis\n                        omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium,\n                        porro voluptas suscipit facere rem dicta, debitis.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur\n                        commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio,\n                        tempore. Animi officiis alias, officia repellendus.\n                    </p>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est\n                        tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad\n                        aut recusandae minus eaque facere.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim\n                        eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam\n                        quaerat, magni commodi quisquam.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores\n                        sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem\n                        delectus libero, omnis ut debitis!\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at\n                        est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit\n                        nulla qui! Laborum, atque.\n                    </p>\n                    <hr />\n                    <div class=\"btn-group\">\n                        <button class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n                            <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure\n                        expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur\n                        nostrum sequi. Consequuntur, commodi.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore\n                        officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam,\n                        enim incidunt quisquam maxime neque eaque.\n                    </p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n";

/***/ }),

/***/ 19473:
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"green-bg pb-3\">\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"row dashboard-cols\" *ngIf=\"!isLoading\">\n            <!-- Number of Groups -->\n            <div class=\"col-6 dashboard-stripe mb-2\" role=\"button\" (click)=\"clientLink()\">\n                <div class=\"i-container\">\n                    <div class=\"icon-i\">\n                        <img class=\"icon-image \" src=\"assets/images/up.svg\">\n                    </div>\n                    <div class=\"text\">\n                        <p> Number of Groups</p>\n                        <div>{{clientGroupCount}}</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-6 dashboard-stripe mb-2\" role=\"button\" (click)=\"clientLink()\">\n                <div class=\"i-container\">\n                    <div class=\"icon-i\">\n                        <img class=\"icon-image \" src=\"assets/images/up.svg\">\n                    </div>\n                    <div class=\"text\">\n                        <p> Number of Clients</p>\n                        <div>{{clientCount | number}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6 dashboard-stripe mb-2\" role=\"button\" (click)=\"matterLink()\">\n                <div class=\"i-container\">\n                    <div class=\"icon-i\">\n                        <img class=\"icon-image \" src=\"assets/images/up.svg\">\n                    </div>\n\n                    <div class=\"text\">\n                        <p>Number of Matters</p>\n                        <div>{{matterCount | number}}</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-6 dashboard-stripe mb-2\" role=\"button\" (click)=\"aggregationLink('expire-weekly')\">\n                <div class=\"i-container negative\">\n                    <div class=\"icon-i\">\n                        <img class=\"icon-image \" src=\"assets/images/down.svg\">\n                    </div>\n                    <div class=\"text\">\n                        <p>Clients expiring this week</p>\n                        <div>{{expireWeeklyCount | number}}</div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n            <div class=\"col-6 dashboard-stripe mb-2\" role=\"button\" (click)=\"aggregationLink('expire-monthly')\">\n                <div class=\"i-container negative\">\n                    <div class=\"icon-i\">\n                        <img class=\"icon-image \" src=\"assets/images/down.svg\">\n                    </div>\n                    <div class=\"text\">\n                        <p>Clients expiring this month</p>\n                        <div>{{expireMonthlyCount | number}}</div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n\n            <!-- <div class=\"col-xl-3 col-lg-6\">\n                <app-stat [bgClass]=\"'primary'\" [count]=\"26\" [icon]=\"'fa-comments'\"\n                    [label]=\"'New Comments!'\"></app-stat>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <app-stat [bgClass]=\"'warning'\" [count]=\"12\" [icon]=\"'fa-tasks'\"\n                    [label]=\"'New task!'\"></app-stat>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <app-stat\n                    [bgClass]=\"'success'\"\n                    [count]=\"124\"\n                    [icon]=\"'fa-shopping-cart'\"\n                    [label]=\"'New Orders!'\"></app-stat>\n            </div>\n            <div class=\"col-xl-3 col-lg-6\">\n                <app-stat [bgClass]=\"'danger'\" [count]=\"13\" [icon]=\"'fa-support'\"\n                    [label]=\"'New Tickets!'\"></app-stat>\n            </div> -->\n        </div>\n        <ng-container *ngIf=\"isLoading\">\n            <div class=\"text-center div-loader-height\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col col-sm-6\">\n                <div class=\"card mb-2\">\n                    <div class=\"card-header\">\n                        Expire/Adjustment Agreement\n                    </div>\n                    <div class=\"card-body\">\n                        <ng-container *ngIf=\"isChartLoading\">\n                            <div class=\"text-center \">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <canvas id=\"expire-chart\">{{ chart }}</canvas>\n                        <!-- <canvas (chartClick)=\"chartClicked($event)\" (chartHover)=\"chartHovered($event)\"\n                            [type]=\"radarChartType\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" baseChart\n                            height=\"150px\">\n                        </canvas> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col col-sm-6\">\n                <div class=\"card mb-2\">\n                    <div class=\"card-header\">\n                        Client/Matter/Agreement\n                    </div>\n                    <div class=\"card-body\">\n                        <ng-container *ngIf=\"isLoading\">\n                            <div class=\"text-center\">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <canvas id=\"cl-ma-ag--chart\">{{ pieChart }}</canvas>\n                        <!-- <canvas (chartClick)=\"chartClicked($event)\" (chartHover)=\"chartHovered($event)\"\n                            [type]=\"pieChartType\" [data]=\"pieChartData\" baseChart height=\"150px\">\n                        </canvas> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col col-sm-6\">\n                <div class=\"card mb-2\">\n                    <div class=\"card-header\">\n                        Agreement Pricing Model\n                    </div>\n                    <div class=\"card-body\">\n                        <ng-container *ngIf=\"isAggregationBillingLoading\">\n                            <div class=\"text-center \">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <div class=\"text-center\"\n                            *ngIf=\"!isAggregationBillingLoading && aggregationBilling.length === 0\">\n                            <span>No Agreement Found</span>\n                        </div>\n\n                        <canvas id=\"chartAggregationBilling\">{{ chartAggregationBilling}}</canvas>\n                        <!-- <canvas (chartClick)=\"chartClicked($event)\" (chartHover)=\"chartHovered($event)\"\n                            [type]=\"radarChartType\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" baseChart\n                            height=\"150px\">\n                        </canvas> -->\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-6 col-sm-6\">\n                <div class=\"card mb-2\">\n                    <div class=\"card-header\">\n                        Payor Type\n                    </div>\n                    <div class=\"card-body\">\n                        <ng-container *ngIf=\"isAggregationBillingLoading\">\n                            <div class=\"text-center \">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <div class=\"text-center\"\n                            *ngIf=\"!isAggregationBillingLoading && payorTypeAggrements.length === 0\">\n                            <span>No Payor Type Found</span>\n                        </div>\n\n                        <canvas id=\"chartpayorTypeAggrements\">{{ chartpayorTypeAggrementschart }}</canvas>\n                        <!-- <canvas (chartClick)=\"chartClicked($event)\" (chartHover)=\"chartHovered($event)\"\n                            [type]=\"radarChartType\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" baseChart\n                            height=\"150px\">\n                        </canvas> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col col-sm-6\">\n                <div class=\"card mb-2\">\n                    <div class=\"card-header\">\n                        Number of Records Created and Modified by Team Member\n                    </div>\n                    <div class=\"card-body\">\n                        <select class=\"form-select form-control\n                        form-control-lg\" id=\"floatingSelect\" (change)=\"teamMemberFilterChange()\"\n                            [(ngModel)]=\"teamMemberFilter\">\n                            <option selected disabled value=\"\">Select Filter Timing</option>\n                            <option value=\"15\">15 Days</option>\n                            <option value=\"1M\">Monthly</option>\n                            <option value=\"3M\">3 Months</option>\n                            <option value=\"6M\">6 Months</option>\n                            <option value=\"9M\">9 Months</option>\n                            <option value=\"12M\">12 Months</option>\n                        </select>\n                        <ng-container *ngIf=\"teamMemberFilterLoading\">\n                            <div class=\"text-center \">\n                                <div class=\"spinner-border\" role=\"status\">\n                                    <span class=\"sr-only\">Loading...</span>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <div class=\"text-center\"\n                            *ngIf=\"!isAggregationBillingLoading && aggregationBilling.length === 0\">\n                            <span>No Agreement Found</span>\n                        </div>\n                        <canvas id=\"chartTeamMemberFilter\">{{ chartAggregationTeamActivity}}</canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col col-sm-6\">\n               \n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 24218:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11yModule": () => (/* binding */ A11yModule),
/* harmony export */   "ActiveDescendantKeyManager": () => (/* binding */ ActiveDescendantKeyManager),
/* harmony export */   "AriaDescriber": () => (/* binding */ AriaDescriber),
/* harmony export */   "CDK_DESCRIBEDBY_HOST_ATTRIBUTE": () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   "CDK_DESCRIBEDBY_ID_PREFIX": () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   "CdkAriaLive": () => (/* binding */ CdkAriaLive),
/* harmony export */   "CdkMonitorFocus": () => (/* binding */ CdkMonitorFocus),
/* harmony export */   "CdkTrapFocus": () => (/* binding */ CdkTrapFocus),
/* harmony export */   "ConfigurableFocusTrap": () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   "ConfigurableFocusTrapFactory": () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   "EventListenerFocusTrapInertStrategy": () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   "FOCUS_MONITOR_DEFAULT_OPTIONS": () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   "FOCUS_TRAP_INERT_STRATEGY": () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   "FocusKeyManager": () => (/* binding */ FocusKeyManager),
/* harmony export */   "FocusMonitor": () => (/* binding */ FocusMonitor),
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap),
/* harmony export */   "FocusTrapFactory": () => (/* binding */ FocusTrapFactory),
/* harmony export */   "HighContrastModeDetector": () => (/* binding */ HighContrastModeDetector),
/* harmony export */   "INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   "INPUT_MODALITY_DETECTOR_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   "InputModalityDetector": () => (/* binding */ InputModalityDetector),
/* harmony export */   "InteractivityChecker": () => (/* binding */ InteractivityChecker),
/* harmony export */   "IsFocusableConfig": () => (/* binding */ IsFocusableConfig),
/* harmony export */   "LIVE_ANNOUNCER_DEFAULT_OPTIONS": () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   "ListKeyManager": () => (/* binding */ ListKeyManager),
/* harmony export */   "LiveAnnouncer": () => (/* binding */ LiveAnnouncer),
/* harmony export */   "MESSAGES_CONTAINER_ID": () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   "isFakeMousedownFromScreenReader": () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   "isFakeTouchstartFromScreenReader": () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ 43773);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ 83278);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */

const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);

  if (ids.some(existingId => existingId.trim() == id.trim())) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  const filteredIds = ids.filter(val => val != id.trim());

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */


const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

class AriaDescriber {
  constructor(_document,
  /**
   * @deprecated To be turned into a required parameter.
   * @breaking-change 14.0.0
   */
  _platform) {
    this._platform = _platform;
    /** Map of all registered message elements that have been placed into the document. */

    this._messageRegistry = new Map();
    /** Container for all registered messages. */

    this._messagesContainer = null;
    /** Unique ID for the service. */

    this._id = `${nextId++}`;
    this._document = _document;
    this._id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID) + '-' + nextId++;
  }

  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }

    const key = getKey(message, role);

    if (typeof message !== 'string') {
      // We need to ensure that the element has an ID.
      setMessageId(message, this._id);

      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }

    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }

  removeDescription(hostElement, message, role) {
    var _this$_messagesContai;

    if (!message || !this._isElementNode(hostElement)) {
      return;
    }

    const key = getKey(message, role);

    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    } // If the message is a string, it means that it's one that we created for the
    // consumer so we can remove it safely, otherwise we should leave it in place.


    if (typeof message === 'string') {
      const registeredMessage = this._messageRegistry.get(key);

      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }

    if (((_this$_messagesContai = this._messagesContainer) === null || _this$_messagesContai === void 0 ? void 0 : _this$_messagesContai.childNodes.length) === 0) {
      this._messagesContainer.remove();

      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */


  ngOnDestroy() {
    var _this$_messagesContai2;

    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);

    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);

      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }

    (_this$_messagesContai2 = this._messagesContainer) === null || _this$_messagesContai2 === void 0 ? void 0 : _this$_messagesContai2.remove();
    this._messagesContainer = null;

    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */


  _createMessageElement(message, role) {
    const messageElement = this._document.createElement('div');

    setMessageId(messageElement, this._id);
    messageElement.textContent = message;

    if (role) {
      messageElement.setAttribute('role', role);
    }

    this._createMessagesContainer();

    this._messagesContainer.appendChild(messageElement);

    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */


  _deleteMessageElement(key) {
    var _this$_messageRegistr, _this$_messageRegistr2;

    (_this$_messageRegistr = this._messageRegistry.get(key)) === null || _this$_messageRegistr === void 0 ? void 0 : (_this$_messageRegistr2 = _this$_messageRegistr.messageElement) === null || _this$_messageRegistr2 === void 0 ? void 0 : _this$_messageRegistr2.remove();

    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */


  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }

    const containerClassName = 'cdk-describedby-message-container';

    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);

    for (let i = 0; i < serverContainers.length; i++) {
      // When going from the server to the client, we may end up in a situation where there's
      // already a container on the page, but we don't have a reference to it. Clear the
      // old container so we don't get duplicates. Doing this, instead of emptying the previous
      // container, should be slightly faster.
      serverContainers[i].remove();
    }

    const messagesContainer = this._document.createElement('div'); // We add `visibility: hidden` in order to prevent text in this container from
    // being searchable by the browser's Ctrl + F functionality.
    // Screen-readers will still read the description for elements with aria-describedby even
    // when the description element is not visible.


    messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
    // the description element doesn't impact page layout.

    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add('cdk-visually-hidden'); // @breaking-change 14.0.0 Remove null check for `_platform`.

    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute('platform', 'server');
    }

    this._document.body.appendChild(messagesContainer);

    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */


  _removeCdkDescribedByReferenceIds(element) {
    // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
    const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */


  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key); // Add the aria-describedby reference and set the
    // describedby_host attribute to mark the element.


    addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */


  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);

    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */


  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, 'aria-describedby');

    const registeredMessage = this._messageRegistry.get(key);

    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */


  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }

    if (message && typeof message === 'object') {
      // We'd have to make some assumptions about the description element's text, if the consumer
      // passed in an element. Assume that if an element is passed in, the consumer has verified
      // that it can be used as a description.
      return true;
    }

    const trimmedMessage = message == null ? '' : `${message}`.trim();
    const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
    // element, because screen readers will end up reading out the same text twice in a row.

    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */


  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }

}

AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

AriaDescriber.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AriaDescriber,
  factory: AriaDescriber.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaDescriber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, null);
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


class ListKeyManager {
  constructor(_items) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      _items.changes.subscribe(newItems => {
        if (this._activeItem) {
          const itemArray = newItems.toArray();
          const newIndex = itemArray.indexOf(this._activeItem);

          if (newIndex > -1 && newIndex !== this._activeItemIndex) {
            this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */


  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */


  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */


  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */


  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */


  withTypeAhead(debounceInterval = 200) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(item => typeof item.getLabel !== 'function')) {
      throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
    }

    this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.


    this._typeaheadSubscription = this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(debounceInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this._pressedLetters.join(''))).subscribe(inputString => {
      const items = this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
      // following the current active item.


      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];

        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }

      this._pressedLetters = [];
    });
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */


  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }

  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);

    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */


  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });

    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.TAB:
        this.tabOut.next();
        return;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }

      default:
        if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.hasModifierKey)(event, 'shiftKey')) {
          // Attempt to use the `event.key` which also maps it to the user's keyboard language,
          // otherwise fall back to resolving alphanumeric characters via the keyCode.
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        } // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.


        return;
    }

    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */


  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */


  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */


  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */


  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */


  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */


  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */


  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(item) {
    const itemArray = this._getItemsArray();

    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */


  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */


  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();

    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];

      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */


  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */


  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();

    if (!items[index]) {
      return;
    }

    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;

      if (!items[index]) {
        return;
      }
    }

    this.setActiveItem(index);
  }
  /** Returns the items as an array. */


  _getItemsArray() {
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }

    super.setActiveItem(index);

    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FocusKeyManager extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }

  setActiveItem(item) {
    super.setActiveItem(item);

    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for the isFocusable method.
 */


class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }

} // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


class InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */


  isDisabled(element) {
    // This does not capture some cases, such as a non-form control with a disabled attribute or
    // a form control inside of a disabled form, but should capture the most common cases.
    return element.hasAttribute('disabled');
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */


  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */


  isTabbable(element) {
    // Nothing is tabbable on the server 😎
    if (!this._platform.isBrowser) {
      return false;
    }

    const frameElement = getFrameElement(getWindow(element));

    if (frameElement) {
      // Frame elements inherit their tabindex onto all child elements.
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      } // Browsers disable tabbing to an element inside of an invisible frame.


      if (!this.isVisible(frameElement)) {
        return false;
      }
    }

    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);

    if (element.hasAttribute('contenteditable')) {
      return tabIndexValue !== -1;
    }

    if (nodeName === 'iframe' || nodeName === 'object') {
      // The frame or object's content may be tabbable depending on the content, but it's
      // not possibly to reliably detect the content of the frames. We always consider such
      // elements as non-tabbable.
      return false;
    } // In iOS, the browser only considers some specific elements as tabbable.


    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }

    if (nodeName === 'audio') {
      // Audio elements without controls enabled are never tabbable, regardless
      // of the tabindex attribute explicitly being set.
      if (!element.hasAttribute('controls')) {
        return false;
      } // Audio elements with controls are by default tabbable unless the
      // tabindex attribute is set to `-1` explicitly.


      return tabIndexValue !== -1;
    }

    if (nodeName === 'video') {
      // For all video elements, if the tabindex attribute is set to `-1`, the video
      // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
      // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
      // tabindex attribute is the source of truth here.
      if (tabIndexValue === -1) {
        return false;
      } // If the tabindex is explicitly set, and not `-1` (as per check before), the
      // video element is always tabbable (regardless of whether it has controls or not).


      if (tabIndexValue !== null) {
        return true;
      } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
      // has controls enabled. Firefox is special as videos are always tabbable regardless
      // of whether there are controls or not.


      return this._platform.FIREFOX || element.hasAttribute('controls');
    }

    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */


  isFocusable(element, config) {
    // Perform checks in order of left to most expensive.
    // Again, naive approach that does not capture many edge cases and browser quirks.
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
  }

}

InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

InteractivityChecker.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InteractivityChecker,
  factory: InteractivityChecker.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractivityChecker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */


class FocusTrap {
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = () => this.focusLastTabbableElement();

    this.endAnchorListener = () => this.focusFirstTabbableElement();

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);

      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */


  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;

    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }

    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }

    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */


  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }

    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();

        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }

      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();

        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });

    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);

      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

      this._hasAttached = true;
    }

    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */


  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }

    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }

    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */


  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);

    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      } // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.


      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }

      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);

        focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
        return !!focusableChild;
      }

      redirectToElement.focus(options);
      return true;
    }

    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */


  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */


  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }

    const children = root.children;

    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */


  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in reverse DOM order.


    const children = root.children;

    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Creates an anchor element. */


  _createAnchor() {
    const anchor = this._document.createElement('div');

    this._toggleAnchorTabIndex(this._enabled, anchor);

    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */


  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */


  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);

      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */


  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(fn);
    }
  }

}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */


class FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */


  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }

}

FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

FocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusTrapFactory,
  factory: FocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** Directive for trapping focus within a region. */


class CdkTrapFocus {
  constructor(_elementRef, _focusTrapFactory,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 13.0.0
   */
  _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */

    this._previouslyFocusedElement = null;
    this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this.focusTrap.enabled;
  }

  set enabled(value) {
    this.focusTrap.enabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the directive should automatically move focus into the trapped region upon
   * initialization and return focus to the previous activeElement upon destruction.
   */


  get autoCapture() {
    return this._autoCapture;
  }

  set autoCapture(value) {
    this._autoCapture = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }

  ngOnDestroy() {
    this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
    // element now that the trapped region is being destroyed.

    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();

      this._previouslyFocusedElement = null;
    }
  }

  ngAfterContentInit() {
    this.focusTrap.attachAnchors();

    if (this.autoCapture) {
      this._captureFocus();
    }
  }

  ngDoCheck() {
    if (!this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }

  ngOnChanges(changes) {
    const autoCaptureChange = changes['autoCapture'];

    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
      this._captureFocus();
    }
  }

  _captureFocus() {
    this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    this.focusTrap.focusInitialElementWhenReady();
  }

}

CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

CdkTrapFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: ["cdkTrapFocus", "enabled"],
    autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
  },
  exportAs: ["cdkTrapFocus"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkTrapFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkTrapFocus]',
      exportAs: 'cdkTrapFocus'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, {
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocus']
    }],
    autoCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocusAutoCapture']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


class ConfigurableFocusTrap extends FocusTrap {
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;

    this._focusTrapManager.register(this);
  }
  /** Whether the FocusTrap is enabled. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */


  destroy() {
    this._focusTrapManager.deregister(this);

    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _enable() {
    this._inertStrategy.preventFocus(this);

    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _disable() {
    this._inertStrategy.allowFocus(this);

    this.toggleAnchors(false);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the inert strategy. */


const FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */

class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }

    this._listener = e => this._trapFocus(focusTrap, e);

    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */


  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }

    focusTrap._document.removeEventListener('focus', this._listener, true);

    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */


  _trapFocus(focusTrap, event) {
    var _target$closest;

    const target = event.target;
    const focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.

    if (target && !focusTrapRoot.contains(target) && !((_target$closest = target.closest) !== null && _target$closest !== void 0 && _target$closest.call(target, 'div.cdk-overlay-pane'))) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */


class FocusTrapManager {
  constructor() {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */


  register(focusTrap) {
    // Dedupe focusTraps that register multiple times.
    this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
    let stack = this._focusTrapStack;

    if (stack.length) {
      stack[stack.length - 1]._disable();
    }

    stack.push(focusTrap);

    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */


  deregister(focusTrap) {
    focusTrap._disable();

    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);

    if (i !== -1) {
      stack.splice(i, 1);

      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }

}

FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || FocusTrapManager)();
};

FocusTrapManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusTrapManager,
  factory: FocusTrapManager.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


class ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }

  create(element, config = {
    defer: false
  }) {
    let configObject;

    if (typeof config === 'boolean') {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }

    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }

}

ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
};

ConfigurableFocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigurableFocusTrapFactory,
  factory: ConfigurableFocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: FocusTrapManager
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FOCUS_TRAP_INERT_STRATEGY]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
  // zero or `event.buttons` is zero, depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `offsetX` and `offsetY` work on Chrome, but fail on Firefox.
  // Note that there's an edge case where the user could click the 0x0 spot of the
  // screen themselves, but that is unlikely to contain interactive elements.
  return event.buttons === 0 || event.offsetX === 0 && event.offsetY === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */


const INPUT_MODALITY_DETECTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */

const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */

const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */

const modalityEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */

class InputModalityDetector {
  constructor(_platform, ngZone, document, options) {
    this._platform = _platform;
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */

    this._mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

    this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */

    this._lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */

    this._onKeydown = event => {
      var _this$_options, _this$_options$ignore;

      // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.
      if ((_this$_options = this._options) !== null && _this$_options !== void 0 && (_this$_options$ignore = _this$_options.ignoreKeys) !== null && _this$_options$ignore !== void 0 && _this$_options$ignore.some(keyCode => keyCode === event.keyCode)) {
        return;
      }

      this._modality.next('keyboard');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      } // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.


      this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next('keyboard');

        return;
      } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.


      this._lastTouchMs = Date.now();

      this._modality.next('touch');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };

    this._options = { ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
      ...options
    }; // Skip the first emission as it's null.

    this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1));
    this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()); // If we're not in a browser, this service should do nothing, as there's no relevant input
    // modality to detect.

    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  /** The most recently detected input modality. */


  get mostRecentModality() {
    return this._modality.value;
  }

  ngOnDestroy() {
    this._modality.complete();

    if (this._platform.isBrowser) {
      document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
    }
  }

}

InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};

InputModalityDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InputModalityDetector,
  factory: InputModalityDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModalityDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [INPUT_MODALITY_DETECTOR_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
    // reference browser globals (HTMLElement, Document) on non-browser environments, since having
    // a class decorator causes TypeScript to preserve the constructor signature types.

    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }

  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;

    if (args.length === 1 && typeof args[0] === 'number') {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }

    this.clear();
    clearTimeout(this._previousTimeout);

    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
    }

    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    } // TODO: ensure changing the politeness works on all environments we support.


    this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).


    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
      }

      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;

        if (typeof duration === 'number') {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }

        this._currentResolve();

        this._currentPromise = this._currentResolve = undefined;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */


  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = '';
    }
  }

  ngOnDestroy() {
    var _this$_liveElement, _this$_currentResolve;

    clearTimeout(this._previousTimeout);
    (_this$_liveElement = this._liveElement) === null || _this$_liveElement === void 0 ? void 0 : _this$_liveElement.remove();
    this._liveElement = null;
    (_this$_currentResolve = this._currentResolve) === null || _this$_currentResolve === void 0 ? void 0 : _this$_currentResolve.call(this);
    this._currentPromise = this._currentResolve = undefined;
  }

  _createLiveElement() {
    const elementClass = 'cdk-live-announcer-element';

    const previousElements = this._document.getElementsByClassName(elementClass);

    const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }

    liveEl.classList.add(elementClass);
    liveEl.classList.add('cdk-visually-hidden');
    liveEl.setAttribute('aria-atomic', 'true');
    liveEl.setAttribute('aria-live', 'polite');

    this._document.body.appendChild(liveEl);

    return liveEl;
  }

}

LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};

LiveAnnouncer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LiveAnnouncer,
  factory: LiveAnnouncer.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveAnnouncer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


class CdkAriaLive {
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = 'polite';
  }
  /** The aria-live politeness level to use when announcing messages. */


  get politeness() {
    return this._politeness;
  }

  set politeness(value) {
    this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

    if (this._politeness === 'off') {
      if (this._subscription) {
        this._subscription.unsubscribe();

        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
          const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
          // changes which we don't want to announce.

          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);

            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkAriaLive.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: ["cdkAriaLive", "politeness"],
    duration: ["cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAriaLive, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkAriaLive]',
      exportAs: 'cdkAriaLive'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: LiveAnnouncer
    }, {
      type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    politeness: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkAriaLive']
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkAriaLiveDuration']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for FocusMonitorOptions. */


const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

const captureEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

class FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector,
  /** @breaking-change 11.0.0 make document required */
  document, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    /** The focus origin that the next focus event is a result of. */

    this._origin = null;
    /** Whether the window has just been focused. */

    this._windowFocused = false;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */

    this._originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */

    this._elementInfo = new Map();
    /** The number of elements currently being monitored. */

    this._monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */

    this._rootNodeFocusListenerCount = new Map();
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    /** Subject for stopping our InputModalityDetector subscription. */


    this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._rootNodeFocusAndBlurListener = event => {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event); // We need to walk up the ancestor chain in order to support `checkChildren`.


      for (let element = target; element; element = element.parentElement) {
        if (event.type === 'focus') {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };

    this._document = document;
    this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
    /* FocusMonitorDetectionMode.IMMEDIATE */
    ;
  }

  monitor(element, checkChildren = false) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null);
    } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
    // the shadow root, rather than the `document`, because the browser won't emit focus events
    // to the `document`, if focus is moving within the same shadow root.


    const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(nativeElement) || this._getDocument();

    const cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


    if (cachedInfo) {
      if (checkChildren) {
        // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
        // observers into ones that behave as if `checkChildren` was turned on. We need a more
        // robust solution.
        cachedInfo.checkChildren = true;
      }

      return cachedInfo.subject;
    } // Create monitored element info.


    const info = {
      checkChildren: checkChildren,
      subject: new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(),
      rootNode
    };

    this._elementInfo.set(nativeElement, info);

    this._registerGlobalListeners(info);

    return info.subject;
  }

  stopMonitoring(element) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

    const elementInfo = this._elementInfo.get(nativeElement);

    if (elementInfo) {
      elementInfo.subject.complete();

      this._setClasses(nativeElement);

      this._elementInfo.delete(nativeElement);

      this._removeGlobalListeners(elementInfo);
    }
  }

  focusVia(element, origin, options) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

    const focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
    // which means that the focus classes won't be updated. If that's the case, update the classes
    // directly without waiting for an event.


    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin); // `focus` isn't available on the server


      if (typeof nativeElement.focus === 'function') {
        nativeElement.focus(options);
      }
    }
  }

  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */


  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    const doc = this._getDocument();

    return doc.defaultView || window;
  }

  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      // If the origin was realized via a touch interaction, we need to perform additional checks
      // to determine whether the focus origin should be attributed to touch or program.
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
      } else {
        return this._origin;
      }
    } // If the window has just regained focus, we can restore the most recent origin from before the
    // window blurred. Otherwise, we've reached the point where we can't identify the source of the
    // focus. This typically means one of two things happened:
    //
    // 1) The element was programmatically focused, or
    // 2) The element was focused via screen reader navigation (which generally doesn't fire
    //    events).
    //
    // Because we can't distinguish between these two cases, we default to setting `program`.


    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    } // If the interaction is coming from an input label, we consider it a mouse interactions.
    // This is a special case where focus moves on `click`, rather than `mousedown` which breaks
    // our detection, because all our assumptions are for `mousedown`. We need to handle this
    // special case, because it's very common for checkboxes and radio buttons.


    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return 'mouse';
    }

    return 'program';
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */


  _shouldBeAttributedToTouch(focusEventTarget) {
    // Please note that this check is not perfect. Consider the following edge case:
    //
    // <div #parent tabindex="0">
    //   <div #child tabindex="0" (click)="#parent.focus()"></div>
    // </div>
    //
    // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
    // #child, #parent is programmatically focused. This code will attribute the focus to touch
    // instead of program. This is a relatively minor edge-case that can be worked around by using
    // focusVia(parent, 'program') to focus #parent.
    return this._detectionMode === 1
    /* FocusMonitorDetectionMode.EVENTUAL */
    || !!(focusEventTarget !== null && focusEventTarget !== void 0 && focusEventTarget.contains(this._inputModalityDetector._mostRecentTarget));
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */


  _setClasses(element, origin) {
    element.classList.toggle('cdk-focused', !!origin);
    element.classList.toggle('cdk-touch-focused', origin === 'touch');
    element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
    element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
    element.classList.toggle('cdk-program-focused', origin === 'program');
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */


  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
      // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
      // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
      // a touch event because when a touch event is fired, the associated focus event isn't yet in
      // the event queue. Before doing so, clear any pending timeouts.

      if (this._detectionMode === 0
      /* FocusMonitorDetectionMode.IMMEDIATE */
      ) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */


  _onFocus(event, element) {
    // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
    // focus event affecting the monitored element. If we want to use the origin of the first event
    // instead we should check for the cdk-focused class here and return if the element already has
    // it. (This only matters for elements that have includesChildren = true).
    // If we are not counting child-element-focus as focused, make sure that the event target is the
    // monitored element itself.
    const elementInfo = this._elementInfo.get(element);

    const focusEventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);

    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }

    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */


  _onBlur(event, element) {
    // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
    // order to focus another child of the monitored element.
    const elementInfo = this._elementInfo.get(element);

    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }

    this._setClasses(element);

    this._emitOrigin(elementInfo, null);
  }

  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }

  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }

    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }

    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


    if (++this._monitoredElementCount === 1) {
      // Note: we listen to events in the capture phase so we
      // can detect them even if the user stops propagation.
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();

        window.addEventListener('focus', this._windowFocusListener);
      }); // The InputModalityDetector is also just a collection of global listeners.


      this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
        this._setOrigin(modality, true
        /* isFromInteraction */
        );
      });
    }
  }

  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;

    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    } // Unregister global listeners when last element is unmonitored.


    if (! --this._monitoredElementCount) {
      const window = this._getWindow();

      window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.

      this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */


  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);

    this._emitOrigin(elementInfo, origin);

    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */


  _getClosestElementsInfo(element) {
    const results = [];

    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });

    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */


  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector; // If the last interaction used the mouse on an element contained by one of the labels
    // of an `input`/`textarea` that is currently focused, it is very likely that the
    // user redirected focus using the label.

    if (mostRecentModality !== 'mouse' || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== 'INPUT' && focusEventTarget.nodeName !== 'TEXTAREA' || focusEventTarget.disabled) {
      return false;
    }

    const labels = focusEventTarget.labels;

    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }

    return false;
  }

}

FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};

FocusMonitor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusMonitor,
  factory: FocusMonitor.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: InputModalityDetector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


class CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  get focusOrigin() {
    return this._focusOrigin;
  }

  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }

}

CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor));
};

CdkMonitorFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkMonitorFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
      exportAs: 'cdkMonitorFocus'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: FocusMonitor
    }];
  }, {
    cdkFocusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** CSS class applied to the document body when in black-on-white high-contrast mode. */


const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

class HighContrastModeDetector {
  constructor(_platform, document) {
    this._platform = _platform;
    this._document = document;
    this._breakpointSubscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__.BreakpointObserver).observe('(forced-colors: active)').subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;

        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */


  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return 0
      /* HighContrastMode.NONE */
      ;
    } // Create a test element with an arbitrary background-color that is neither black nor
    // white; high-contrast mode will coerce the color to either black or white. Also ensure that
    // appending the test element to the DOM does not affect layout by absolutely positioning it


    const testElement = this._document.createElement('div');

    testElement.style.backgroundColor = 'rgb(1,2,3)';
    testElement.style.position = 'absolute';

    this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
    // browsers. Once we get this color, we no longer need the test element. Access the `window`
    // via the document so we can fake it in tests. Note that we have extra null checks, because
    // this logic will likely run during app bootstrap and throwing can break the entire app.


    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
    testElement.remove();

    switch (computedColor) {
      // Pre Windows 11 dark theme.
      case 'rgb(0,0,0)': // Windows 11 dark themes.

      case 'rgb(45,50,54)':
      case 'rgb(32,32,32)':
        return 2
        /* HighContrastMode.WHITE_ON_BLACK */
        ;
      // Pre Windows 11 light theme.

      case 'rgb(255,255,255)': // Windows 11 light theme.

      case 'rgb(255,250,239)':
        return 1
        /* HighContrastMode.BLACK_ON_WHITE */
        ;
    }

    return 0
    /* HighContrastMode.NONE */
    ;
  }

  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */


  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();

      if (mode === 1
      /* HighContrastMode.BLACK_ON_WHITE */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === 2
      /* HighContrastMode.WHITE_ON_BLACK */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }

}

HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

HighContrastModeDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HighContrastModeDetector,
  factory: HighContrastModeDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighContrastModeDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }

}

A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector));
};

A11yModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: A11yModule,
  declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
});
A11yModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A11yModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule],
      declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], function () {
    return [{
      type: HighContrastModeDetector
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 72867:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/bidi.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidiModule": () => (/* binding */ BidiModule),
/* harmony export */   "DIR_DOCUMENT": () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   "Dir": () => (/* binding */ Dir),
/* harmony export */   "Directionality": () => (/* binding */ Directionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-browser because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */

const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */

function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */


const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */

function _resolveDirectionality(rawValue) {
  var _navigator;

  const value = (rawValue === null || rawValue === void 0 ? void 0 : rawValue.toLowerCase()) || '';

  if (value === 'auto' && typeof navigator !== 'undefined' && (_navigator = navigator) !== null && _navigator !== void 0 && _navigator.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }

  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */


class Directionality {
  constructor(_document) {
    /** The current 'ltr' or 'rtl' value. */
    this.value = 'ltr';
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || 'ltr');
    }
  }

  ngOnDestroy() {
    this.change.complete();
  }

}

Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
};

Directionality.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Directionality,
  factory: Directionality.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */


class Dir {
  constructor() {
    /** Normalized direction that accounts for invalid/unsupported values. */
    this._dir = 'ltr';
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Event emitted when the direction changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** @docs-private */


  get dir() {
    return this._dir;
  }

  set dir(value) {
    const previousValue = this._dir; // Note: `_resolveDirectionality` resolves the language based on the browser's language,
    // whereas the browser does it based on the content of the element. Since doing so based
    // on the content can be expensive, for now we're doing the simpler matching.

    this._dir = _resolveDirectionality(value);
    this._rawDir = value;

    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */


  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */


  ngAfterContentInit() {
    this._isInitialized = true;
  }

  ngOnDestroy() {
    this.change.complete();
  }

}

Dir.ɵfac = function Dir_Factory(t) {
  return new (t || Dir)();
};

Dir.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: Directionality,
    useExisting: Dir
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], null, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class BidiModule {}

BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || BidiModule)();
};

BidiModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: BidiModule,
  declarations: [Dir],
  exports: [Dir]
});
BidiModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 46507:
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/cdk.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of the Angular Component Development Kit. */

const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('14.2.7');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/***/ }),

/***/ 48971:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/coercion.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isNumberValue": () => (/* binding */ _isNumberValue),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "coerceBooleanProperty": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "coerceCssPixelValue": () => (/* binding */ coerceCssPixelValue),
/* harmony export */   "coerceElement": () => (/* binding */ coerceElement),
/* harmony export */   "coerceNumberProperty": () => (/* binding */ coerceNumberProperty),
/* harmony export */   "coerceStringArray": () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Coerces a data-bound value (typically a string) to a boolean. */

function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */


function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Coerces a value to a CSS pixel value. */


function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }

  return typeof value === 'string' ? value : `${value}px`;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */


function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */


function coerceStringArray(value, separator = /\s+/) {
  const result = [];

  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);

    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();

      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }

  return result;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/***/ }),

/***/ 28456:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "ALT": () => (/* binding */ ALT),
/* harmony export */   "APOSTROPHE": () => (/* binding */ APOSTROPHE),
/* harmony export */   "AT_SIGN": () => (/* binding */ AT_SIGN),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "BACKSLASH": () => (/* binding */ BACKSLASH),
/* harmony export */   "BACKSPACE": () => (/* binding */ BACKSPACE),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "CAPS_LOCK": () => (/* binding */ CAPS_LOCK),
/* harmony export */   "CLOSE_SQUARE_BRACKET": () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   "COMMA": () => (/* binding */ COMMA),
/* harmony export */   "CONTEXT_MENU": () => (/* binding */ CONTEXT_MENU),
/* harmony export */   "CONTROL": () => (/* binding */ CONTROL),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "DASH": () => (/* binding */ DASH),
/* harmony export */   "DELETE": () => (/* binding */ DELETE),
/* harmony export */   "DOWN_ARROW": () => (/* binding */ DOWN_ARROW),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "EIGHT": () => (/* binding */ EIGHT),
/* harmony export */   "END": () => (/* binding */ END),
/* harmony export */   "ENTER": () => (/* binding */ ENTER),
/* harmony export */   "EQUALS": () => (/* binding */ EQUALS),
/* harmony export */   "ESCAPE": () => (/* binding */ ESCAPE),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "F1": () => (/* binding */ F1),
/* harmony export */   "F10": () => (/* binding */ F10),
/* harmony export */   "F11": () => (/* binding */ F11),
/* harmony export */   "F12": () => (/* binding */ F12),
/* harmony export */   "F2": () => (/* binding */ F2),
/* harmony export */   "F3": () => (/* binding */ F3),
/* harmony export */   "F4": () => (/* binding */ F4),
/* harmony export */   "F5": () => (/* binding */ F5),
/* harmony export */   "F6": () => (/* binding */ F6),
/* harmony export */   "F7": () => (/* binding */ F7),
/* harmony export */   "F8": () => (/* binding */ F8),
/* harmony export */   "F9": () => (/* binding */ F9),
/* harmony export */   "FF_EQUALS": () => (/* binding */ FF_EQUALS),
/* harmony export */   "FF_MINUS": () => (/* binding */ FF_MINUS),
/* harmony export */   "FF_MUTE": () => (/* binding */ FF_MUTE),
/* harmony export */   "FF_SEMICOLON": () => (/* binding */ FF_SEMICOLON),
/* harmony export */   "FF_VOLUME_DOWN": () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   "FF_VOLUME_UP": () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   "FIRST_MEDIA": () => (/* binding */ FIRST_MEDIA),
/* harmony export */   "FIVE": () => (/* binding */ FIVE),
/* harmony export */   "FOUR": () => (/* binding */ FOUR),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "HOME": () => (/* binding */ HOME),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "INSERT": () => (/* binding */ INSERT),
/* harmony export */   "J": () => (/* binding */ J),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "LAST_MEDIA": () => (/* binding */ LAST_MEDIA),
/* harmony export */   "LEFT_ARROW": () => (/* binding */ LEFT_ARROW),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "MAC_ENTER": () => (/* binding */ MAC_ENTER),
/* harmony export */   "MAC_META": () => (/* binding */ MAC_META),
/* harmony export */   "MAC_WK_CMD_LEFT": () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   "MAC_WK_CMD_RIGHT": () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   "META": () => (/* binding */ META),
/* harmony export */   "MUTE": () => (/* binding */ MUTE),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "NINE": () => (/* binding */ NINE),
/* harmony export */   "NUMPAD_DIVIDE": () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   "NUMPAD_EIGHT": () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   "NUMPAD_FIVE": () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   "NUMPAD_FOUR": () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   "NUMPAD_MINUS": () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   "NUMPAD_MULTIPLY": () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   "NUMPAD_NINE": () => (/* binding */ NUMPAD_NINE),
/* harmony export */   "NUMPAD_ONE": () => (/* binding */ NUMPAD_ONE),
/* harmony export */   "NUMPAD_PERIOD": () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   "NUMPAD_PLUS": () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   "NUMPAD_SEVEN": () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   "NUMPAD_SIX": () => (/* binding */ NUMPAD_SIX),
/* harmony export */   "NUMPAD_THREE": () => (/* binding */ NUMPAD_THREE),
/* harmony export */   "NUMPAD_TWO": () => (/* binding */ NUMPAD_TWO),
/* harmony export */   "NUMPAD_ZERO": () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   "NUM_CENTER": () => (/* binding */ NUM_CENTER),
/* harmony export */   "NUM_LOCK": () => (/* binding */ NUM_LOCK),
/* harmony export */   "O": () => (/* binding */ O),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "OPEN_SQUARE_BRACKET": () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "PAGE_DOWN": () => (/* binding */ PAGE_DOWN),
/* harmony export */   "PAGE_UP": () => (/* binding */ PAGE_UP),
/* harmony export */   "PAUSE": () => (/* binding */ PAUSE),
/* harmony export */   "PERIOD": () => (/* binding */ PERIOD),
/* harmony export */   "PLUS_SIGN": () => (/* binding */ PLUS_SIGN),
/* harmony export */   "PRINT_SCREEN": () => (/* binding */ PRINT_SCREEN),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "QUESTION_MARK": () => (/* binding */ QUESTION_MARK),
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "RIGHT_ARROW": () => (/* binding */ RIGHT_ARROW),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "SCROLL_LOCK": () => (/* binding */ SCROLL_LOCK),
/* harmony export */   "SEMICOLON": () => (/* binding */ SEMICOLON),
/* harmony export */   "SEVEN": () => (/* binding */ SEVEN),
/* harmony export */   "SHIFT": () => (/* binding */ SHIFT),
/* harmony export */   "SINGLE_QUOTE": () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   "SIX": () => (/* binding */ SIX),
/* harmony export */   "SLASH": () => (/* binding */ SLASH),
/* harmony export */   "SPACE": () => (/* binding */ SPACE),
/* harmony export */   "T": () => (/* binding */ T),
/* harmony export */   "TAB": () => (/* binding */ TAB),
/* harmony export */   "THREE": () => (/* binding */ THREE),
/* harmony export */   "TILDE": () => (/* binding */ TILDE),
/* harmony export */   "TWO": () => (/* binding */ TWO),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "UP_ARROW": () => (/* binding */ UP_ARROW),
/* harmony export */   "V": () => (/* binding */ V),
/* harmony export */   "VOLUME_DOWN": () => (/* binding */ VOLUME_DOWN),
/* harmony export */   "VOLUME_UP": () => (/* binding */ VOLUME_UP),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z),
/* harmony export */   "ZERO": () => (/* binding */ ZERO),
/* harmony export */   "hasModifierKey": () => (/* binding */ hasModifierKey)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT

const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */

function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }

  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 83278:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/layout.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakpointObserver": () => (/* binding */ BreakpointObserver),
/* harmony export */   "Breakpoints": () => (/* binding */ Breakpoints),
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule),
/* harmony export */   "MediaMatcher": () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 54240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class LayoutModule {}

LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};

LayoutModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Global registry for all dynamically-created, injected media queries. */


const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */

let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */

class MediaMatcher {
  constructor(_platform) {
    this._platform = _platform;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
    // call it from a different scope.
    window.matchMedia.bind(window) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */


  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query);
    }

    return this._matchMedia(query);
  }

}

MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
  return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
};

MediaMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MediaMatcher,
  factory: MediaMatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }];
  }, null);
})();
/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 */


function createEmptyStyleRule(query) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }

  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }

    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */


function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Utility for checking the matching state of @media queries. */


class BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    /**  A map of all media queries currently being listened for. */

    this._queries = new Map();
    /** A subject for all other observables to takeUntil based on. */

    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */


  ngOnDestroy() {
    this._destroySubject.next();

    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */


  isMatched(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */


  observe(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    const observables = queries.map(query => this._registerQuery(query).observable);
    let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

    stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
    return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breakpointStates => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */


  _registerQuery(query) {
    // Only set up a new MediaQueryList if it is not already being listened for.
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }

    const mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.


    const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(observer => {
      // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
      // back into the zone because matchMedia is only included in Zone.js by loading the
      // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
      // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
      // patches it.
      const handler = e => this._zone.run(() => observer.next(e));

      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
      matches
    }) => ({
      query,
      matches
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject)); // Add the MediaQueryList to the set of queries.

    const output = {
      observable: queryObservable,
      mql
    };

    this._queries.set(query, output);

    return output;
  }

}

BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
  return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

BreakpointObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BreakpointObserver,
  factory: BreakpointObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MediaMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */


function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name


const Breakpoints = {
  XSmall: '(max-width: 599.98px)',
  Small: '(min-width: 600px) and (max-width: 959.98px)',
  Medium: '(min-width: 960px) and (max-width: 1279.98px)',
  Large: '(min-width: 1280px) and (max-width: 1919.98px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43773:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkObserveContent": () => (/* binding */ CdkObserveContent),
/* harmony export */   "ContentObserver": () => (/* binding */ ContentObserver),
/* harmony export */   "MutationObserverFactory": () => (/* binding */ MutationObserverFactory),
/* harmony export */   "ObserversModule": () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71989);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

class MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
  }

}

MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || MutationObserverFactory)();
};

MutationObserverFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MutationObserverFactory,
  factory: MutationObserverFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MutationObserverFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** An injectable service that allows watching elements for changes to their content. */


class ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */

    this._observedElements = new Map();
  }

  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }

  observe(elementOrRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const stream = this._observeElement(element);

      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();

        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */


  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

      const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));

      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }

      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }

    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */


  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;

      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */


  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);

      if (observer) {
        observer.disconnect();
      }

      stream.complete();

      this._observedElements.delete(element);
    }
  }

}

ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory));
};

ContentObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ContentObserver,
  factory: ContentObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MutationObserverFactory
    }];
  }, null);
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


class CdkObserveContent {
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** Event emitted for each change in the element's content. */

    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */


  get debounce() {
    return this._debounce;
  }

  set debounce(value) {
    this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);

    this._subscribe();
  }

  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }

  ngOnDestroy() {
    this._unsubscribe();
  }

  _subscribe() {
    this._unsubscribe();

    const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
    // Consider brining it back inside the zone next time we're making breaking changes.
    // Bringing it back inside can cause things like infinite change detection loops and changed
    // after checked errors if people's code isn't handling it properly.


    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
    });
  }

  _unsubscribe() {
    var _this$_currentSubscri;

    (_this$_currentSubscri = this._currentSubscription) === null || _this$_currentSubscri === void 0 ? void 0 : _this$_currentSubscri.unsubscribe();
  }

}

CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkObserveContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: ["cdkObserveContentDisabled", "disabled"],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkObserveContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkObserveContent]',
      exportAs: 'cdkObserveContent'
    }]
  }], function () {
    return [{
      type: ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkObserveContent']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkObserveContentDisabled']
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ObserversModule {}

ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || ObserversModule)();
};

ObserversModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ObserversModule,
  declarations: [CdkObserveContent],
  exports: [CdkObserveContent]
});
ObserversModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MutationObserverFactory]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserversModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkObserveContent],
      declarations: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 89107:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/platform.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "PlatformModule": () => (/* binding */ PlatformModule),
/* harmony export */   "_getEventTarget": () => (/* binding */ _getEventTarget),
/* harmony export */   "_getFocusedElementPierceShadowDom": () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   "_getShadowRoot": () => (/* binding */ _getShadowRoot),
/* harmony export */   "_isTestEnvironment": () => (/* binding */ _isTestEnvironment),
/* harmony export */   "_supportsShadowDom": () => (/* binding */ _supportsShadowDom),
/* harmony export */   "getRtlScrollAxisType": () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   "getSupportedInputTypes": () => (/* binding */ getSupportedInputTypes),
/* harmony export */   "normalizePassiveListenerOptions": () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   "supportsPassiveEventListeners": () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   "supportsScrollBehavior": () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

let hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687

try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */


class Platform {
  constructor(_platformId) {
    this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention

    /** Whether the Angular application is being rendered in the browser. */

    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */

    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */

    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

    /** Whether the current rendering engine is Blink. */

    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.

    /** Whether the current rendering engine is WebKit. */

    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */

    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.

    /** Whether the current browser is Firefox. */

    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.

    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.

    /** Whether the current browser is Safari. */

    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }

}

Platform.ɵfac = function Platform_Factory(t) {
  return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

Platform.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Platform,
  factory: Platform.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class PlatformModule {}

PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || PlatformModule)();
};

PlatformModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlatformModule
});
PlatformModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result Set of input types support by the current browser. */


let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */

const candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */

function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  } // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.


  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }

  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of whether the user's browser supports passive event listeners. */


let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */

function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }

  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */


function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */

let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */

function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;

      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }

  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */


function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return 0
    /* RtlScrollAxisType.NORMAL */
    ;
  }

  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = 0
    /* RtlScrollAxisType.NORMAL */
    ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.

    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
      /* RtlScrollAxisType.NEGATED */
      : 2
      /* RtlScrollAxisType.INVERTED */
      ;
    }

    scrollContainer.remove();
  }

  return rtlScrollAxisType;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */

function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }

  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.

    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }

  return null;
}
/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */


function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;

  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;

    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }

  return activeElement;
}
/** Gets the target of an event while accounting for Shadow DOM. */


function _getEventTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether the code is currently running in a test environment. */


function _isTestEnvironment() {
  // We can't use `declare const` because it causes conflicts inside Google with the real typings
  // for these symbols and we can't read them off the global object, because they don't appear to
  // be attached there for some runners like Jest.
  // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
  return (// @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ || // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine || // @ts-ignore
    typeof jest !== 'undefined' && !!jest || // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha
  );
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 82156:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCard": () => (/* binding */ MatCard),
/* harmony export */   "MatCardActions": () => (/* binding */ MatCardActions),
/* harmony export */   "MatCardAvatar": () => (/* binding */ MatCardAvatar),
/* harmony export */   "MatCardContent": () => (/* binding */ MatCardContent),
/* harmony export */   "MatCardFooter": () => (/* binding */ MatCardFooter),
/* harmony export */   "MatCardHeader": () => (/* binding */ MatCardHeader),
/* harmony export */   "MatCardImage": () => (/* binding */ MatCardImage),
/* harmony export */   "MatCardLgImage": () => (/* binding */ MatCardLgImage),
/* harmony export */   "MatCardMdImage": () => (/* binding */ MatCardMdImage),
/* harmony export */   "MatCardModule": () => (/* binding */ MatCardModule),
/* harmony export */   "MatCardSmImage": () => (/* binding */ MatCardSmImage),
/* harmony export */   "MatCardSubtitle": () => (/* binding */ MatCardSubtitle),
/* harmony export */   "MatCardTitle": () => (/* binding */ MatCardTitle),
/* harmony export */   "MatCardTitleGroup": () => (/* binding */ MatCardTitleGroup),
/* harmony export */   "MatCardXlImage": () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 59121);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */

const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

class MatCardContent {}

MatCardContent.ɵfac = function MatCardContent_Factory(t) {
  return new (t || MatCardContent)();
};

MatCardContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardContent,
  selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
  hostAttrs: [1, "mat-card-content"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content, [mat-card-content], [matCardContent]',
      host: {
        'class': 'mat-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardTitle {}

MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
  return new (t || MatCardTitle)();
};

MatCardTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-card-title"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardSubtitle {}

MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
  return new (t || MatCardSubtitle)();
};

MatCardSubtitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-card-subtitle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardActions {
  constructor() {
    /** Position of the actions inside the card. */
    this.align = 'start';
  }

}

MatCardActions.ɵfac = function MatCardActions_Factory(t) {
  return new (t || MatCardActions)();
};

MatCardActions.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-card-actions"],
  hostVars: 2,
  hostBindings: function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-card-actions',
        '[class.mat-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardFooter {}

MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
  return new (t || MatCardFooter)();
};

MatCardFooter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-card-footer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-card-footer'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardImage {}

MatCardImage.ɵfac = function MatCardImage_Factory(t) {
  return new (t || MatCardImage)();
};

MatCardImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-card-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-card-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardSmImage {}

MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
  return new (t || MatCardSmImage)();
};

MatCardSmImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-card-sm-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-card-sm-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardMdImage {}

MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
  return new (t || MatCardMdImage)();
};

MatCardMdImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-card-md-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-card-md-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardLgImage {}

MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
  return new (t || MatCardLgImage)();
};

MatCardLgImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-card-lg-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-card-lg-image'
      }
    }]
  }], null, null);
})();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardXlImage {}

MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
  return new (t || MatCardXlImage)();
};

MatCardXlImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-card-xl-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-card-xl-image'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardAvatar {}

MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
  return new (t || MatCardAvatar)();
};

MatCardAvatar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-card-avatar"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-card-avatar'
      }
    }]
  }], null, null);
})();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */


class MatCard {
  // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  constructor(_animationMode) {
    this._animationMode = _animationMode;
  }

}

MatCard.ɵfac = function MatCard_Factory(t) {
  return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};

MatCard.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-card", "mat-focus-indicator"],
  hostVars: 2,
  hostBindings: function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    }
  },
  styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card mat-focus-indicator',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
      styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */


class MatCardHeader {}

MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
  return new (t || MatCardHeader)();
};

MatCardHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-card-header"],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-card-header-text"]],
  template: function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */


class MatCardTitleGroup {}

MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
  return new (t || MatCardTitleGroup)();
};

MatCardTitleGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-card-title-group"],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 0,
  template: function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatCardModule {}

MatCardModule.ɵfac = function MatCardModule_Factory(t) {
  return new (t || MatCardModule)();
};

MatCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCardModule,
  declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar],
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
  exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
MatCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 59121:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/core.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationCurves": () => (/* binding */ AnimationCurves),
/* harmony export */   "AnimationDurations": () => (/* binding */ AnimationDurations),
/* harmony export */   "DateAdapter": () => (/* binding */ DateAdapter),
/* harmony export */   "ErrorStateMatcher": () => (/* binding */ ErrorStateMatcher),
/* harmony export */   "MATERIAL_SANITY_CHECKS": () => (/* binding */ MATERIAL_SANITY_CHECKS),
/* harmony export */   "MAT_DATE_FORMATS": () => (/* binding */ MAT_DATE_FORMATS),
/* harmony export */   "MAT_DATE_LOCALE": () => (/* binding */ MAT_DATE_LOCALE),
/* harmony export */   "MAT_DATE_LOCALE_FACTORY": () => (/* binding */ MAT_DATE_LOCALE_FACTORY),
/* harmony export */   "MAT_NATIVE_DATE_FORMATS": () => (/* binding */ MAT_NATIVE_DATE_FORMATS),
/* harmony export */   "MAT_OPTGROUP": () => (/* binding */ MAT_OPTGROUP),
/* harmony export */   "MAT_OPTION_PARENT_COMPONENT": () => (/* binding */ MAT_OPTION_PARENT_COMPONENT),
/* harmony export */   "MAT_RIPPLE_GLOBAL_OPTIONS": () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   "MatCommonModule": () => (/* binding */ MatCommonModule),
/* harmony export */   "MatLine": () => (/* binding */ MatLine),
/* harmony export */   "MatLineModule": () => (/* binding */ MatLineModule),
/* harmony export */   "MatNativeDateModule": () => (/* binding */ MatNativeDateModule),
/* harmony export */   "MatOptgroup": () => (/* binding */ MatOptgroup),
/* harmony export */   "MatOption": () => (/* binding */ MatOption),
/* harmony export */   "MatOptionModule": () => (/* binding */ MatOptionModule),
/* harmony export */   "MatOptionSelectionChange": () => (/* binding */ MatOptionSelectionChange),
/* harmony export */   "MatPseudoCheckbox": () => (/* binding */ MatPseudoCheckbox),
/* harmony export */   "MatPseudoCheckboxModule": () => (/* binding */ MatPseudoCheckboxModule),
/* harmony export */   "MatRipple": () => (/* binding */ MatRipple),
/* harmony export */   "MatRippleModule": () => (/* binding */ MatRippleModule),
/* harmony export */   "NativeDateAdapter": () => (/* binding */ NativeDateAdapter),
/* harmony export */   "NativeDateModule": () => (/* binding */ NativeDateModule),
/* harmony export */   "RippleRef": () => (/* binding */ RippleRef),
/* harmony export */   "RippleRenderer": () => (/* binding */ RippleRenderer),
/* harmony export */   "ShowOnDirtyErrorStateMatcher": () => (/* binding */ ShowOnDirtyErrorStateMatcher),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "_MatOptgroupBase": () => (/* binding */ _MatOptgroupBase),
/* harmony export */   "_MatOptionBase": () => (/* binding */ _MatOptionBase),
/* harmony export */   "_countGroupLabelsBeforeOption": () => (/* binding */ _countGroupLabelsBeforeOption),
/* harmony export */   "_getOptionScrollPosition": () => (/* binding */ _getOptionScrollPosition),
/* harmony export */   "defaultRippleAnimationConfig": () => (/* binding */ defaultRippleAnimationConfig),
/* harmony export */   "mixinColor": () => (/* binding */ mixinColor),
/* harmony export */   "mixinDisableRipple": () => (/* binding */ mixinDisableRipple),
/* harmony export */   "mixinDisabled": () => (/* binding */ mixinDisabled),
/* harmony export */   "mixinErrorState": () => (/* binding */ mixinErrorState),
/* harmony export */   "mixinInitialized": () => (/* binding */ mixinInitialized),
/* harmony export */   "mixinTabIndex": () => (/* binding */ mixinTabIndex),
/* harmony export */   "setLines": () => (/* binding */ setLines)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk */ 46507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of Angular Material. */

const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];

function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}

function MatOption_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
  }
}

const _c2 = ["*"];
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('14.2.7');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

class AnimationCurves {}

AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */

class AnimationDurations {}

AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */


const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-sanity-checks', {
  providedIn: 'root',
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */

class MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */

    this._hasDoneGlobalChecks = false; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
    // in MatCommonModule.

    highContrastModeDetector._applyBodyHighContrastModeCssClasses();

    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;

      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (this._checkIsEnabled('doctype')) {
          _checkDoctypeIsDefined(this._document);
        }

        if (this._checkIsEnabled('theme')) {
          _checkThemeIsPresent(this._document);
        }

        if (this._checkIsEnabled('version')) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */


  _checkIsEnabled(name) {
    if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._isTestEnvironment)()) {
      return false;
    }

    if (typeof this._sanityChecks === 'boolean') {
      return this._sanityChecks;
    }

    return !!this._sanityChecks[name];
  }

}

MatCommonModule.ɵfac = function MatCommonModule_Factory(t) {
  return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
};

MatCommonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCommonModule,
  imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule],
  exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
});
MatCommonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MATERIAL_SANITY_CHECKS]
      }]
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** Checks that the page has a doctype. */


function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
  }
}
/** Checks that a theme has been included. */


function _checkThemeIsPresent(doc) {
  // We need to assert that the `body` is defined, because these checks run very early
  // and the `body` won't be defined if the consumer put their scripts in the `head`.
  if (!doc.body || typeof getComputedStyle !== 'function') {
    return;
  }

  const testElement = doc.createElement('div');
  testElement.classList.add('mat-theme-loaded-marker');
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
  // Firefox, the computed style is null if an application is running inside of a hidden iframe.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  if (computedStyle && computedStyle.display !== 'none') {
    console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
  }

  testElement.remove();
}
/** Checks whether the Material version matches the CDK version. */


function _checkCdkVersionMatch() {
  if (VERSION.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_5__.VERSION.full) {
    console.warn('The Angular Material version (' + VERSION.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_5__.VERSION.full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinDisabled(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disabled = false;
    }

    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinColor(base, defaultColor) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

      this.color = defaultColor;
    }

    get color() {
      return this._color;
    }

    set color(value) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }

        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinDisableRipple(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */


    get disableRipple() {
      return this._disableRipple;
    }

    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinTabIndex(base, defaultTabIndex = 0) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._tabIndex = defaultTabIndex;
      this.defaultTabIndex = defaultTabIndex;
    }

    get tabIndex() {
      return this.disabled ? -1 : this._tabIndex;
    }

    set tabIndex(value) {
      // If the specified tabIndex value is null or undefined, fall back to the default value.
      this._tabIndex = value != null ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(value) : this.defaultTabIndex;
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinErrorState(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      /** Whether the component is in an error state. */

      this.errorState = false;
    }
    /** Updates the error state based on the provided error state matcher. */


    updateErrorState() {
      const oldState = this.errorState;
      const parent = this._parentFormGroup || this._parentForm;
      const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
      const control = this.ngControl ? this.ngControl.control : null;
      const newState = matcher.isErrorState(control, parent);

      if (newState !== oldState) {
        this.errorState = newState;
        this.stateChanges.next();
      }
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


function mixinInitialized(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      /** Whether this directive has been marked as initialized. */

      this._isInitialized = false;
      /**
       * List of subscribers that subscribed before the directive was initialized. Should be notified
       * during _markInitialized. Set to null after pending subscribers are notified, and should
       * not expect to be populated after.
       */

      this._pendingSubscribers = [];
      /**
       * Observable stream that emits when the directive initializes. If already initialized, the
       * subscriber is stored to be notified once _markInitialized is called.
       */

      this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(subscriber => {
        // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
        // when _markInitialized is called.
        if (this._isInitialized) {
          this._notifySubscriber(subscriber);
        } else {
          this._pendingSubscribers.push(subscriber);
        }
      });
    }
    /**
     * Marks the state as initialized and notifies pending subscribers. Should be called at the end
     * of ngOnInit.
     * @docs-private
     */


    _markInitialized() {
      if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
      }

      this._isInitialized = true;

      this._pendingSubscribers.forEach(this._notifySubscriber);

      this._pendingSubscribers = null;
    }
    /** Emits and completes the subscriber stream (should only emit once). */


    _notifySubscriber(subscriber) {
      subscriber.next();
      subscriber.complete();
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for datepicker that can be used to override default locale code. */


const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: MAT_DATE_LOCALE_FACTORY
});
/** @docs-private */

function MAT_DATE_LOCALE_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */


class DateAdapter {
  constructor() {
    this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    /** A stream that emits when the locale changes. */

    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */


  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */


  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }

    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */


  setLocale(locale) {
    this.locale = locale;

    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */


  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */


  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);

      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }

      return firstValid == secondValid;
    }

    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */


  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }

    if (max && this.compareDate(date, max) > 0) {
      return max;
    }

    return date;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-date-formats');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */

const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */

function range(length, valueFunction) {
  const valuesArray = Array(length);

  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }

  return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */


class NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 14.0.0
   */
  _platform) {
    super();
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 14.0.0
     */

    this.useUtcForDisplay = false;
    super.setLocale(matDateLocale);
  }

  getYear(date) {
    return date.getFullYear();
  }

  getMonth(date) {
    return date.getMonth();
  }

  getDate(date) {
    return date.getDate();
  }

  getDayOfWeek(date) {
    return date.getDay();
  }

  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: 'utc'
    });
    return range(12, i => this._format(dtf, new Date(2017, i, 1)));
  }

  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: 'numeric',
      timeZone: 'utc'
    });
    return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
  }

  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: 'utc'
    });
    return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
  }

  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: 'numeric',
      timeZone: 'utc'
    });
    return this._format(dtf, date);
  }

  getFirstDayOfWeek() {
    // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
    return 0;
  }

  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }

  clone(date) {
    return new Date(date.getTime());
  }

  createDate(year, month, date) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      // Check for invalid month and date (except upper bound on date which we have to check after
      // creating the Date).
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }

      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }

    let result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


    if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }

  today() {
    return new Date();
  }

  parse(value, parseFormat) {
    // We have no way using the native JS Date to set the parse format or locale, so we ignore these
    // parameters.
    if (typeof value == 'number') {
      return new Date(value);
    }

    return value ? new Date(Date.parse(value)) : null;
  }

  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error('NativeDateAdapter: Cannot format invalid date.');
    }

    const dtf = new Intl.DateTimeFormat(this.locale, { ...displayFormat,
      timeZone: 'utc'
    });
    return this._format(dtf, date);
  }

  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }

  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
    // month. In this case we want to go to the last day of the desired month.
    // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
    // guarantee this.


    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }

    return newDate;
  }

  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }

  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */


  deserialize(value) {
    if (typeof value === 'string') {
      if (!value) {
        return null;
      } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
      // string is the right format first.


      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);

        if (this.isValid(date)) {
          return date;
        }
      }
    }

    return super.deserialize(value);
  }

  isDateInstance(obj) {
    return obj instanceof Date;
  }

  isValid(date) {
    return !isNaN(date.getTime());
  }

  invalid() {
    return new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */


  _createDateWithOverflow(year, month, date) {
    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setFullYear` and `setHours` instead.
    const d = new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */


  _2digit(n) {
    return ('00' + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */


  _format(dtf, date) {
    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
    const d = new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }

}

NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
  return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
};

NativeDateAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NativeDateAdapter,
  factory: NativeDateAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_LOCALE]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    }
  }
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class NativeDateModule {}

NativeDateModule.ɵfac = function NativeDateModule_Factory(t) {
  return new (t || NativeDateModule)();
};

NativeDateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NativeDateModule
});
NativeDateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();

class MatNativeDateModule {}

MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) {
  return new (t || MatNativeDateModule)();
};

MatNativeDateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatNativeDateModule,
  imports: [NativeDateModule]
});
MatNativeDateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: MAT_DATE_FORMATS,
    useValue: MAT_NATIVE_DATE_FORMATS
  }],
  imports: [NativeDateModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NativeDateModule],
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: MAT_NATIVE_DATE_FORMATS
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Error state matcher that matches when a control is invalid and dirty. */


class ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }

}

ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || ShowOnDirtyErrorStateMatcher)();
};

ShowOnDirtyErrorStateMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ShowOnDirtyErrorStateMatcher,
  factory: ShowOnDirtyErrorStateMatcher.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/** Provider that defines how form controls behave with regards to displaying error messages. */


class ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }

}

ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
  return new (t || ErrorStateMatcher)();
};

ErrorStateMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ErrorStateMatcher,
  factory: ErrorStateMatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */


class MatLine {}

MatLine.ɵfac = function MatLine_Factory(t) {
  return new (t || MatLine)();
};

MatLine.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-line], [matLine]',
      host: {
        'class': 'mat-line'
      }
    }]
  }], null, null);
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */


function setLines(lines, element, prefix = 'mat') {
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);

    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
/** Adds or removes a class from an element. */


function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}

class MatLineModule {}

MatLineModule.ɵfac = function MatLineModule_Factory(t) {
  return new (t || MatLineModule)();
};

MatLineModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatLineModule,
  declarations: [MatLine],
  imports: [MatCommonModule],
  exports: [MatLine, MatCommonModule]
});
MatLineModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [MatCommonModule, MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatLine, MatCommonModule],
      declarations: [MatLine]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reference to a previously launched ripple element.
 */


class RippleRef {
  constructor(_renderer,
  /** Reference to the ripple HTML element. */
  element,
  /** Ripple configuration used for the ripple. */
  config,
  /* Whether animations are forcibly disabled for ripples through CSS. */
  _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    /** Current state of the ripple. */

    this.state = 3
    /* RippleState.HIDDEN */
    ;
  }
  /** Fades out the ripple element. */


  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }

} // TODO: import these values from `@material/ripple` eventually.

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */


const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */

const ignoreMouseEventsTimeout = 800;
/** Options that apply to all the event listeners that are bound by the ripple renderer. */

const passiveEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({
  passive: true
});
/** Events that signal that the pointer is down. */

const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */

const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */

class RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    /** Whether the pointer is currently down or not. */

    this._isPointerDown = false;
    /**
     * Map of currently active ripple references.
     * The ripple reference is mapped to its element event listeners.
     * The reason why `| null` is used is that event listeners are added only
     * when the condition is truthy (see the `_startFadeOutTransition` method).
     */

    this._activeRipples = new Map();
    /** Whether pointer-up event listeners have been registered. */

    this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

    if (platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */


  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

    const animationConfig = { ...defaultRippleAnimationConfig,
      ...config.animation
    };

    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }

    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`; // If a custom color has been specified, set it as inline style. If no color is
    // set, the default color will be applied through the ripple theme styles.

    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }

    ripple.style.transitionDuration = `${enterDuration}ms`;

    this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical to ensure that the `scale` animates properly.
    // We enforce a style recalculation by calling `getComputedStyle` and *accessing* a property.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a


    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration; // Note: We detect whether animation is forcibly disabled through CSS by the use of
    // `transition: none`. This is technically unexpected since animations are controlled
    // through the animation config, but this exists for backwards compatibility. This logic does
    // not need to be super accurate since it covers some edge cases which can be easily avoided by users.

    const animationForciblyDisabledThroughCss = userTransitionProperty === 'none' || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === '0s' || userTransitionDuration === '0s, 0s'; // Exposed reference to the ripple that will be returned.

    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss); // Start the enter animation by setting the transform/scale to 100%. The animation will
    // execute as part of this statement because we forced a style recalculation before.
    // Note: We use a 3d transform here in order to avoid an issue in Safari where
    // the ripples aren't clipped when inside the shadow DOM (see #24028).

    ripple.style.transform = 'scale3d(1, 1, 1)';
    rippleRef.state = 0
    /* RippleState.FADING_IN */
    ;

    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }

    let eventListeners = null; // Do not register the `transition` event listener if fade-in and fade-out duration
    // are set to zero. The events won't fire anyway and we can save resources here.

    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => this._finishRippleTransition(rippleRef);

        const onTransitionCancel = () => this._destroyRipple(rippleRef);

        ripple.addEventListener('transitionend', onTransitionEnd); // If the transition is cancelled (e.g. due to DOM removal), we destroy the ripple
        // directly as otherwise we would keep it part of the ripple container forever.
        // https://www.w3.org/TR/css-transitions-1/#:~:text=no%20longer%20in%20the%20document.

        ripple.addEventListener('transitioncancel', onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel
        };
      });
    } // Add the ripple reference to the list of all active ripples.


    this._activeRipples.set(rippleRef, eventListeners); // In case there is no fade-in transition duration, we need to manually call the transition
    // end listener because `transitionend` doesn't fire if there is no transition.


    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }

    return rippleRef;
  }
  /** Fades out a ripple reference. */


  fadeOutRipple(rippleRef) {
    // For ripples already fading out or hidden, this should be a noop.
    if (rippleRef.state === 2
    /* RippleState.FADING_OUT */
    || rippleRef.state === 3
    /* RippleState.HIDDEN */
    ) {
      return;
    }

    const rippleEl = rippleRef.element;
    const animationConfig = { ...defaultRippleAnimationConfig,
      ...rippleRef.config.animation
    }; // This starts the fade-out transition and will fire the transition end listener that
    // removes the ripple element from the DOM.

    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = 2
    /* RippleState.FADING_OUT */
    ; // In case there is no fade-out transition duration, we need to manually call the
    // transition end listener because `transitionend` doesn't fire if there is no transition.

    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */


  fadeOutAll() {
    this._getActiveRipples().forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */


  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */


  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);

    if (!element || element === this._triggerElement) {
      return;
    } // Remove all previously registered event listeners from the trigger element.


    this._removeTriggerEvents();

    this._triggerElement = element;

    this._registerEvents(pointerDownEvents);
  }
  /**
   * Handles all registered events.
   * @docs-private
   */


  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    } // If pointer-up events haven't been registered yet, do so now.
    // We do this on-demand in order to reduce the total number of event listeners
    // registered by the ripples, which speeds up the rendering time for large UIs.


    if (!this._pointerUpEventsRegistered) {
      this._registerEvents(pointerUpEvents);

      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */


  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === 0
    /* RippleState.FADING_IN */
    ) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === 2
    /* RippleState.FADING_OUT */
    ) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */


  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = 1
    /* RippleState.VISIBLE */
    ; // When the timer runs out while the user has kept their pointer down, we want to
    // keep only the persistent ripples and the latest transient ripple. We do this,
    // because we don't want stacked transient ripples to appear after their enter
    // animation has finished.

    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */


  _destroyRipple(rippleRef) {
    var _this$_activeRipples$;

    const eventListeners = (_this$_activeRipples$ = this._activeRipples.get(rippleRef)) !== null && _this$_activeRipples$ !== void 0 ? _this$_activeRipples$ : null;

    this._activeRipples.delete(rippleRef); // Clear out the cached bounding rect if we have no more ripples.


    if (!this._activeRipples.size) {
      this._containerRect = null;
    } // If the current ref is the most recent transient ripple, unset it
    // avoid memory leaks.


    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }

    rippleRef.state = 3
    /* RippleState.HIDDEN */
    ;

    if (eventListeners !== null) {
      rippleRef.element.removeEventListener('transitionend', eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener('transitioncancel', eventListeners.onTransitionCancel);
    }

    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */


  _onMousedown(event) {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */


  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.

      const touches = event.changedTouches;

      for (let i = 0; i < touches.length; i++) {
        this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
      }
    }
  }
  /** Function being called whenever the trigger is being released. */


  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }

    this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

    this._getActiveRipples().forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === 1
      /* RippleState.VISIBLE */
      || ripple.config.terminateOnPointerUp && ripple.state === 0
      /* RippleState.FADING_IN */
      ;

      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  /** Registers event listeners for a given list of events. */


  _registerEvents(eventTypes) {
    this._ngZone.runOutsideAngular(() => {
      eventTypes.forEach(type => {
        this._triggerElement.addEventListener(type, this, passiveEventOptions);
      });
    });
  }

  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */


  _removeTriggerEvents() {
    if (this._triggerElement) {
      pointerDownEvents.forEach(type => {
        this._triggerElement.removeEventListener(type, this, passiveEventOptions);
      });

      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => {
          this._triggerElement.removeEventListener(type, this, passiveEventOptions);
        });
      }
    }
  }

}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */


function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to specify the global ripple options. */


const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-ripple-global-options');

class MatRipple {
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */

    this.radius = 0;
    this._disabled = false;
    /** Whether ripple directive is initialized and the input bindings are set. */

    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }

    this._disabled = value;

    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */


  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }

  set trigger(trigger) {
    this._trigger = trigger;

    this._setupTriggerEventsIfEnabled();
  }

  ngOnInit() {
    this._isInitialized = true;

    this._setupTriggerEventsIfEnabled();
  }

  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */


  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */


  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */


  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: { ...this._globalOptions.animation,
        ...(this._animationMode === 'NoopAnimations' ? {
          enterDuration: 0,
          exitDuration: 0
        } : {}),
        ...this.animation
      },
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */


  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */


  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */


  launch(configOrX, y = 0, config) {
    if (typeof configOrX === 'number') {
      return this._rippleRenderer.fadeInRipple(configOrX, y, { ...this.rippleConfig,
        ...config
      });
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, { ...this.rippleConfig,
        ...configOrX
      });
    }
  }

}

MatRipple.ɵfac = function MatRipple_Factory(t) {
  return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};

MatRipple.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: ["matRippleColor", "color"],
    unbounded: ["matRippleUnbounded", "unbounded"],
    centered: ["matRippleCentered", "centered"],
    radius: ["matRippleRadius", "radius"],
    animation: ["matRippleAnimation", "animation"],
    disabled: ["matRippleDisabled", "disabled"],
    trigger: ["matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-ripple], [matRipple]',
      exportAs: 'matRipple',
      host: {
        'class': 'mat-ripple',
        '[class.mat-ripple-unbounded]': 'unbounded'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleColor']
    }],
    unbounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleUnbounded']
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleCentered']
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleRadius']
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleAnimation']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleDisabled']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleTrigger']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatRippleModule {}

MatRippleModule.ɵfac = function MatRippleModule_Factory(t) {
  return new (t || MatRippleModule)();
};

MatRippleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatRippleModule,
  declarations: [MatRipple],
  imports: [MatCommonModule],
  exports: [MatRipple, MatCommonModule]
});
MatRippleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [MatCommonModule, MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatRipple, MatCommonModule],
      declarations: [MatRipple]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */


class MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    /** Display state of the checkbox. */

    this.state = 'unchecked';
    /** Whether the checkbox is disabled. */

    this.disabled = false;
  }

}

MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
  return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};

MatPseudoCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 8,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled"
  },
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {},
  styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'mat-pseudo-checkbox',
      template: '',
      host: {
        'class': 'mat-pseudo-checkbox',
        '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
        '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
        '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatPseudoCheckboxModule {}

MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) {
  return new (t || MatPseudoCheckboxModule)();
};

MatPseudoCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatPseudoCheckboxModule,
  declarations: [MatPseudoCheckbox],
  imports: [MatCommonModule],
  exports: [MatPseudoCheckbox]
});
MatPseudoCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatPseudoCheckbox],
      declarations: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide the parent component to options.
 */


const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_OPTION_PARENT_COMPONENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Boilerplate for applying mixins to MatOptgroup.

/** @docs-private */

const _MatOptgroupMixinBase = mixinDisabled(class {}); // Counter for unique group ids.


let _uniqueOptgroupIdCounter = 0;

class _MatOptgroupBase extends _MatOptgroupMixinBase {
  constructor(parent) {
    var _parent$inertGroups;

    super();
    /** Unique id for the underlying label. */

    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = (_parent$inertGroups = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _parent$inertGroups !== void 0 ? _parent$inertGroups : false;
  }

}

_MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
  return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
};

_MatOptgroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatOptgroupBase,
  inputs: {
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptgroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


const MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */

class MatOptgroup extends _MatOptgroupBase {}

MatOptgroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatOptgroup_BaseFactory;
  return function MatOptgroup_Factory(t) {
    return (ɵMatOptgroup_BaseFactory || (ɵMatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup)))(t || MatOptgroup);
  };
}();

MatOptgroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-optgroup"],
  hostVars: 5,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matOptgroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_OPTGROUP,
    useExisting: MatOptgroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 2,
  consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
    }
  },
  styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-optgroup',
      exportAs: 'matOptgroup',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      host: {
        'class': 'mat-optgroup',
        '[attr.role]': '_inert ? null : "group"',
        '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
        '[attr.aria-labelledby]': '_inert ? null : _labelId',
        '[class.mat-optgroup-disabled]': 'disabled'
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */


let _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */

class MatOptionSelectionChange {
  constructor(
  /** Reference to the option that emitted the event. */
  source,
  /** Whether the change in the option's value was a result of a user action. */
  isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }

}

class _MatOptionBase {
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = '';
    /** The unique ID of the option. */

    this.id = `mat-option-${_uniqueIdCounter++}`;
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the state of the option changes and any parents have to be notified. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  }
  /** Whether the wrapping component is in multiple selection mode. */


  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */


  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */


  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
  }
  /** Whether ripples for the option are disabled. */


  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */


  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */


  get viewValue() {
    // TODO(kara): Add input property alternative for node envs.
    return (this._getHostElement().textContent || '').trim();
  }
  /** Selects the option. */


  select() {
    if (!this._selected) {
      this._selected = true;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent();
    }
  }
  /** Deselects the option. */


  deselect() {
    if (this._selected) {
      this._selected = false;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent();
    }
  }
  /** Sets focus onto this option. */


  focus(_origin, options) {
    // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
    // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
    const element = this._getHostElement();

    if (typeof element.focus === 'function') {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setActiveStyles() {
    if (!this._active) {
      this._active = true;

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setInactiveStyles() {
    if (this._active) {
      this._active = false;

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */


  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */


  _handleKeydown(event) {
    if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.SPACE) && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event)) {
      this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */


  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent(true);
    }
  }
  /**
   * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
   * attribute from single-selection, unselected options. Including the `aria-selected="false"`
   * attributes adds a significant amount of noise to screen-reader users without providing useful
   * information.
   */


  _getAriaSelected() {
    return this.selected || (this.multiple ? false : null);
  }
  /** Returns the correct tabindex for the option depending on disabled state. */


  _getTabIndex() {
    return this.disabled ? '-1' : '0';
  }
  /** Gets the host DOM element. */


  _getHostElement() {
    return this._element.nativeElement;
  }

  ngAfterViewChecked() {
    // Since parent components could be using the option's label to display the selected values
    // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
    // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
    // relatively cheap, however we still limit them only to selected options in order to avoid
    // hitting the DOM too often.
    if (this._selected) {
      const viewValue = this.viewValue;

      if (viewValue !== this._mostRecentViewValue) {
        this._mostRecentViewValue = viewValue;

        this._stateChanges.next();
      }
    }
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */


  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }

}

_MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};

_MatOptionBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatOptionBase,
  inputs: {
    value: "value",
    id: "id",
    disabled: "disabled"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptionBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined
    }, {
      type: _MatOptgroupBase
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Single option inside of a `<mat-select>` element.
 */


class MatOption extends _MatOptionBase {
  constructor(element, changeDetectorRef, parent, group) {
    super(element, changeDetectorRef, parent, group);
  }

}

MatOption.ɵfac = function MatOption_Factory(t) {
  return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
};

MatOption.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatOption,
  selectors: [["mat-option"]],
  hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
  hostVars: 12,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    }
  },
  exportAs: ["matOption"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 4,
  consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  dependencies: [MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MatPseudoCheckbox],
  styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:\"\"}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-option',
      exportAs: 'matOption',
      host: {
        'role': 'option',
        '[attr.tabindex]': '_getTabIndex()',
        '[class.mat-selected]': 'selected',
        '[class.mat-option-multiple]': 'multiple',
        '[class.mat-active]': 'active',
        '[id]': 'id',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[class.mat-option-disabled]': 'disabled',
        '(click)': '_selectViaInteraction()',
        '(keydown)': '_handleKeydown($event)',
        'class': 'mat-option mat-focus-indicator'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:\"\"}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: MatOptgroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_OPTGROUP]
      }]
    }];
  }, null);
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */


function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;

    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }

    return groupCounter;
  }

  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */


function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatOptionModule {}

MatOptionModule.ɵfac = function MatOptionModule_Factory(t) {
  return new (t || MatOptionModule)();
};

MatOptionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatOptionModule,
  declarations: [MatOption, MatOptgroup],
  imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule],
  exports: [MatOption, MatOptgroup]
});
MatOptionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule],
      exports: [MatOption, MatOptgroup],
      declarations: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5682:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/slider.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SLIDER_VALUE_ACCESSOR": () => (/* binding */ MAT_SLIDER_VALUE_ACCESSOR),
/* harmony export */   "MatSlider": () => (/* binding */ MatSlider),
/* harmony export */   "MatSliderChange": () => (/* binding */ MatSliderChange),
/* harmony export */   "MatSliderModule": () => (/* binding */ MatSliderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ 28456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 89107);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const _c0 = ["sliderWrapper"];
const activeEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */

const MIN_AUTO_TICK_SEPARATION = 30;
/** The thumb gap size for a disabled slider. */

const DISABLED_THUMB_GAP = 7;
/** The thumb gap size for a non-active slider at its minimum value. */

const MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
/** The thumb gap size for an active slider at its minimum value. */

const MIN_VALUE_ACTIVE_THUMB_GAP = 10;
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * @docs-private
 */

const MAT_SLIDER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MatSlider),
  multi: true
};
/** A simple change event emitted by the MatSlider component. */

class MatSliderChange {} // Boilerplate for applying mixins to MatSlider.

/** @docs-private */


const _MatSliderBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}), 'accent'));
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */


class MatSlider extends _MatSliderBase {
  constructor(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._invert = false;
    this._max = 100;
    this._min = 0;
    this._step = 1;
    this._thumbLabel = false;
    this._tickInterval = 0;
    this._value = null;
    this._vertical = false;
    /** Event emitted when the slider value has changed. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Event emitted when the slider thumb moves. */

    this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Emits when the raw value of the slider changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** onTouch function registered via registerOnTouch (ControlValueAccessor). */

    this.onTouched = () => {};

    this._percent = 0;
    /**
     * Whether or not the thumb is sliding and what the user is using to slide it with.
     * Used to determine if there should be a transition for the thumb and fill track.
     */

    this._isSliding = null;
    /**
     * Whether or not the slider is active (clicked or sliding).
     * Used to shrink and grow the thumb as according to the Material Design spec.
     */

    this._isActive = false;
    /** The size of a tick interval as a percentage of the size of the track. */

    this._tickIntervalPercent = 0;
    /** The dimensions of the slider. */

    this._sliderDimensions = null;

    this._controlValueAccessorChangeFn = () => {};
    /** Subscription to the Directionality change EventEmitter. */


    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    /** Called when the user has put their pointer down on the slider. */

    this._pointerDown = event => {
      // Don't do anything if the slider is disabled or the
      // user is using anything other than the main mouse button.
      if (this.disabled || this._isSliding || !isTouchEvent(event) && event.button !== 0) {
        return;
      }

      this._ngZone.run(() => {
        this._touchId = isTouchEvent(event) ? getTouchIdForSlider(event, this._elementRef.nativeElement) : undefined;
        const pointerPosition = getPointerPositionOnPage(event, this._touchId);

        if (pointerPosition) {
          const oldValue = this.value;
          this._isSliding = 'pointer';
          this._lastPointerEvent = event;

          this._focusHostElement();

          this._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


          this._bindGlobalEvents(event);

          this._focusHostElement();

          this._updateValueFromPosition(pointerPosition);

          this._valueOnSlideStart = oldValue; // Despite the fact that we explicitly bind active events, in some cases the browser
          // still dispatches non-cancelable events which cause this call to throw an error.
          // There doesn't appear to be a good way of avoiding them. See #23820.

          if (event.cancelable) {
            event.preventDefault();
          } // Emit a change and input event if the value changed.


          if (oldValue != this.value) {
            this._emitInputEvent();
          }
        }
      });
    };
    /**
     * Called when the user has moved their pointer after
     * starting to drag. Bound on the document level.
     */


    this._pointerMove = event => {
      if (this._isSliding === 'pointer') {
        const pointerPosition = getPointerPositionOnPage(event, this._touchId);

        if (pointerPosition) {
          // Prevent the slide from selecting anything else.
          if (event.cancelable) {
            event.preventDefault();
          }

          const oldValue = this.value;
          this._lastPointerEvent = event;

          this._updateValueFromPosition(pointerPosition); // Native range elements always emit `input` events when the value changed while sliding.


          if (oldValue != this.value) {
            this._emitInputEvent();
          }
        }
      }
    };
    /** Called when the user has lifted their pointer. Bound on the document level. */


    this._pointerUp = event => {
      if (this._isSliding === 'pointer') {
        if (!isTouchEvent(event) || typeof this._touchId !== 'number' || // Note that we use `changedTouches`, rather than `touches` because it
        // seems like in most cases `touches` is empty for `touchend` events.
        findMatchingTouch(event.changedTouches, this._touchId)) {
          if (event.cancelable) {
            event.preventDefault();
          }

          this._removeGlobalEvents();

          this._isSliding = null;
          this._touchId = undefined;

          if (this._valueOnSlideStart != this.value && !this.disabled) {
            this._emitChangeEvent();
          }

          this._valueOnSlideStart = this._lastPointerEvent = null;
        }
      }
    };
    /** Called when the window has lost focus. */


    this._windowBlur = () => {
      // If the window is blurred while dragging we need to stop dragging because the
      // browser won't dispatch the `mouseup` and `touchend` events anymore.
      if (this._lastPointerEvent) {
        this._pointerUp(this._lastPointerEvent);
      }
    };

    this._document = _document;
    this.tabIndex = parseInt(tabIndex) || 0;

    _ngZone.runOutsideAngular(() => {
      const element = elementRef.nativeElement;
      element.addEventListener('mousedown', this._pointerDown, activeEventOptions);
      element.addEventListener('touchstart', this._pointerDown, activeEventOptions);
    });
  }
  /** Whether the slider is inverted. */


  get invert() {
    return this._invert;
  }

  set invert(value) {
    this._invert = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
  }
  /** The maximum value that the slider can have. */


  get max() {
    return this._max;
  }

  set max(v) {
    this._max = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._max);
    this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

    this._changeDetectorRef.markForCheck();
  }
  /** The minimum value that the slider can have. */


  get min() {
    return this._min;
  }

  set min(v) {
    this._min = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._min);
    this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

    this._changeDetectorRef.markForCheck();
  }
  /** The values at which the thumb will snap. */


  get step() {
    return this._step;
  }

  set step(v) {
    this._step = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._step);

    if (this._step % 1 !== 0) {
      this._roundToDecimal = this._step.toString().split('.').pop().length;
    } // Since this could modify the label, we need to notify the change detection.


    this._changeDetectorRef.markForCheck();
  }
  /** Whether or not to show the thumb label. */


  get thumbLabel() {
    return this._thumbLabel;
  }

  set thumbLabel(value) {
    this._thumbLabel = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
  }
  /**
   * How often to show ticks. Relative to the step so that a tick always appears on a step.
   * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
   */


  get tickInterval() {
    return this._tickInterval;
  }

  set tickInterval(value) {
    if (value === 'auto') {
      this._tickInterval = 'auto';
    } else if (typeof value === 'number' || typeof value === 'string') {
      this._tickInterval = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value, this._tickInterval);
    } else {
      this._tickInterval = 0;
    }
  }
  /** Value of the slider. */


  get value() {
    // If the value needs to be read and it is still uninitialized, initialize it to the min.
    if (this._value === null) {
      this.value = this._min;
    }

    return this._value;
  }

  set value(v) {
    if (v !== this._value) {
      let value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, 0); // While incrementing by a decimal we can end up with values like 33.300000000000004.
      // Truncate it to ensure that it matches the label and to make it easier to work with.

      if (this._roundToDecimal && value !== this.min && value !== this.max) {
        value = parseFloat(value.toFixed(this._roundToDecimal));
      }

      this._value = value;
      this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the slider is vertical. */


  get vertical() {
    return this._vertical;
  }

  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
  }
  /** The value to be used for display purposes. */


  get displayValue() {
    if (this.displayWith) {
      // Value is never null but since setters and getters cannot have
      // different types, the value getter is also typed to return null.
      return this.displayWith(this.value);
    } // Note that this could be improved further by rounding something like 0.999 to 1 or
    // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
    // every change detection cycle.


    if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
      return this.value.toFixed(this._roundToDecimal);
    }

    return this.value || 0;
  }
  /** set focus to the host element */


  focus(options) {
    this._focusHostElement(options);
  }
  /** blur the host element */


  blur() {
    this._blurHostElement();
  }
  /** The percentage of the slider that coincides with the value. */


  get percent() {
    return this._clamp(this._percent);
  }
  /**
   * Whether the axis of the slider is inverted.
   * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
   */


  _shouldInvertAxis() {
    // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
    // top. However from a y-axis standpoint this is inverted.
    return this.vertical ? !this.invert : this.invert;
  }
  /** Whether the slider is at its minimum value. */


  _isMinValue() {
    return this.percent === 0;
  }
  /**
   * The amount of space to leave between the slider thumb and the track fill & track background
   * elements.
   */


  _getThumbGap() {
    if (this.disabled) {
      return DISABLED_THUMB_GAP;
    }

    if (this._isMinValue() && !this.thumbLabel) {
      return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
    }

    return 0;
  }
  /** CSS styles for the track background element. */


  _getTrackBackgroundStyles() {
    const axis = this.vertical ? 'Y' : 'X';
    const scale = this.vertical ? `1, ${1 - this.percent}, 1` : `${1 - this.percent}, 1, 1`;
    const sign = this._shouldInvertMouseCoords() ? '-' : '';
    return {
      // scale3d avoids some rendering issues in Chrome. See #12071.
      transform: `translate${axis}(${sign}${this._getThumbGap()}px) scale3d(${scale})`
    };
  }
  /** CSS styles for the track fill element. */


  _getTrackFillStyles() {
    const percent = this.percent;
    const axis = this.vertical ? 'Y' : 'X';
    const scale = this.vertical ? `1, ${percent}, 1` : `${percent}, 1, 1`;
    const sign = this._shouldInvertMouseCoords() ? '' : '-';
    return {
      // scale3d avoids some rendering issues in Chrome. See #12071.
      transform: `translate${axis}(${sign}${this._getThumbGap()}px) scale3d(${scale})`,
      // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
      // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
      // the value of the slider is 0, we can easily get into this situation. We force a
      // recalculation by changing the element's `display` when it goes from 0 to any other value.
      display: percent === 0 ? 'none' : ''
    };
  }
  /** CSS styles for the ticks container element. */


  _getTicksContainerStyles() {
    let axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
    // instead of the right edge to avoid causing a horizontal scrollbar to appear.

    let sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
    let offset = this._tickIntervalPercent / 2 * 100;
    return {
      'transform': `translate${axis}(${sign}${offset}%)`
    };
  }
  /** CSS styles for the ticks element. */


  _getTicksStyles() {
    let tickSize = this._tickIntervalPercent * 100;
    let backgroundSize = this.vertical ? `2px ${tickSize}%` : `${tickSize}% 2px`;
    let axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
    // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
    // ticks 180 degrees so we're really cutting off the end edge abd not the start.

    let sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
    let rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
    let styles = {
      'backgroundSize': backgroundSize,
      // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
      'transform': `translateZ(0) translate${axis}(${sign}${tickSize / 2}%)${rotate}`
    };

    if (this._isMinValue() && this._getThumbGap()) {
      const shouldInvertAxis = this._shouldInvertAxis();

      let side;

      if (this.vertical) {
        side = shouldInvertAxis ? 'Bottom' : 'Top';
      } else {
        side = shouldInvertAxis ? 'Right' : 'Left';
      }

      styles[`padding${side}`] = `${this._getThumbGap()}px`;
    }

    return styles;
  }

  _getThumbContainerStyles() {
    const shouldInvertAxis = this._shouldInvertAxis();

    let axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
    // instead of the right edge to avoid causing a horizontal scrollbar to appear.

    let invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
    let offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
    return {
      'transform': `translate${axis}(-${offset}%)`
    };
  }
  /**
   * Whether mouse events should be converted to a slider position by calculating their distance
   * from the right or bottom edge of the slider as opposed to the top or left.
   */


  _shouldInvertMouseCoords() {
    const shouldInvertAxis = this._shouldInvertAxis();

    return this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
  }
  /** The language direction for this slider element. */


  _getDirection() {
    return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      this._isActive = !!origin && origin !== 'keyboard';

      this._changeDetectorRef.detectChanges();
    });

    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
  }

  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
    element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
    this._lastPointerEvent = null;

    this._removeGlobalEvents();

    this._focusMonitor.stopMonitoring(this._elementRef);

    this._dirChangeSubscription.unsubscribe();
  }

  _onMouseenter() {
    if (this.disabled) {
      return;
    } // We save the dimensions of the slider here so we can use them to update the spacing of the
    // ticks and determine where on the slider click and slide events happen.


    this._sliderDimensions = this._getSliderDimensions();

    this._updateTickIntervalPercent();
  }

  _onFocus() {
    // We save the dimensions of the slider here so we can use them to update the spacing of the
    // ticks and determine where on the slider click and slide events happen.
    this._sliderDimensions = this._getSliderDimensions();

    this._updateTickIntervalPercent();
  }

  _onBlur() {
    this.onTouched();
  }

  _onKeydown(event) {
    if (this.disabled || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event) || this._isSliding && this._isSliding !== 'keyboard') {
      return;
    }

    const oldValue = this.value;

    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_UP:
        this._increment(10);

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_DOWN:
        this._increment(-10);

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.END:
        this.value = this.max;
        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.HOME:
        this.value = this.min;
        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.LEFT_ARROW:
        // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
        // inverted slider the thumb moves in that direction. However for a blind user, nothing
        // about the slider indicates that it is inverted. They will expect left to be decrement,
        // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
        // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
        // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
        // sighted users, therefore we do not swap the meaning.
        this._increment(this._getDirection() == 'rtl' ? 1 : -1);

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.UP_ARROW:
        this._increment(1);

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.RIGHT_ARROW:
        // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
        this._increment(this._getDirection() == 'rtl' ? -1 : 1);

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.DOWN_ARROW:
        this._increment(-1);

        break;

      default:
        // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
        // it.
        return;
    }

    if (oldValue != this.value) {
      this._emitInputEvent();

      this._emitChangeEvent();
    }

    this._isSliding = 'keyboard';
    event.preventDefault();
  }

  _onKeyup() {
    if (this._isSliding === 'keyboard') {
      this._isSliding = null;
    }
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    return this._document.defaultView || window;
  }
  /**
   * Binds our global move and end events. They're bound at the document level and only while
   * dragging so that the user doesn't have to keep their pointer exactly over the slider
   * as they're swiping across the screen.
   */


  _bindGlobalEvents(triggerEvent) {
    // Note that we bind the events to the `document`, because it allows us to capture
    // drag cancel events where the user's pointer is outside the browser window.
    const document = this._document;
    const isTouch = isTouchEvent(triggerEvent);
    const moveEventName = isTouch ? 'touchmove' : 'mousemove';
    const endEventName = isTouch ? 'touchend' : 'mouseup';
    document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
    document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

    if (isTouch) {
      document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
    }

    const window = this._getWindow();

    if (typeof window !== 'undefined' && window) {
      window.addEventListener('blur', this._windowBlur);
    }
  }
  /** Removes any global event listeners that we may have added. */


  _removeGlobalEvents() {
    const document = this._document;
    document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
    document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
    document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
    document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
    document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);

    const window = this._getWindow();

    if (typeof window !== 'undefined' && window) {
      window.removeEventListener('blur', this._windowBlur);
    }
  }
  /** Increments the slider by the given number of steps (negative number decrements). */


  _increment(numSteps) {
    // Pre-clamp the current value since it's allowed to be
    // out of bounds when assigned programmatically.
    const clampedValue = this._clamp(this.value || 0, this.min, this.max);

    this.value = this._clamp(clampedValue + this.step * numSteps, this.min, this.max);
  }
  /** Calculate the new value from the new physical location. The value will always be snapped. */


  _updateValueFromPosition(pos) {
    if (!this._sliderDimensions) {
      return;
    }

    let offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
    let size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
    let posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

    let percent = this._clamp((posComponent - offset) / size);

    if (this._shouldInvertMouseCoords()) {
      percent = 1 - percent;
    } // Since the steps may not divide cleanly into the max value, if the user
    // slid to 0 or 100 percent, we jump to the min/max value. This approach
    // is slightly more intuitive than using `Math.ceil` below, because it
    // follows the user's pointer closer.


    if (percent === 0) {
      this.value = this.min;
    } else if (percent === 1) {
      this.value = this.max;
    } else {
      const exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
      // whole number divisible by the step relative to the min.


      const closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

      this.value = this._clamp(closestValue, this.min, this.max);
    }
  }
  /** Emits a change event if the current value is different from the last emitted value. */


  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.value);

    this.valueChange.emit(this.value);
    this.change.emit(this._createChangeEvent());
  }
  /** Emits an input event when the current value is different from the last emitted value. */


  _emitInputEvent() {
    this.input.emit(this._createChangeEvent());
  }
  /** Updates the amount of space between ticks as a percentage of the width of the slider. */


  _updateTickIntervalPercent() {
    if (!this.tickInterval || !this._sliderDimensions) {
      return;
    }

    let tickIntervalPercent;

    if (this.tickInterval == 'auto') {
      let trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
      let pixelsPerStep = trackSize * this.step / (this.max - this.min);
      let stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
      let pixelsPerTick = stepsPerTick * this.step;
      tickIntervalPercent = pixelsPerTick / trackSize;
    } else {
      tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
    }

    this._tickIntervalPercent = isSafeNumber(tickIntervalPercent) ? tickIntervalPercent : 0;
  }
  /** Creates a slider change object from the specified value. */


  _createChangeEvent(value = this.value) {
    let event = new MatSliderChange();
    event.source = this;
    event.value = value;
    return event;
  }
  /** Calculates the percentage of the slider that a value is. */


  _calculatePercentage(value) {
    const percentage = ((value || 0) - this.min) / (this.max - this.min);
    return isSafeNumber(percentage) ? percentage : 0;
  }
  /** Calculates the value a percentage of the slider corresponds to. */


  _calculateValue(percentage) {
    return this.min + percentage * (this.max - this.min);
  }
  /** Return a number between two numbers. */


  _clamp(value, min = 0, max = 1) {
    return Math.max(min, Math.min(value, max));
  }
  /**
   * Get the bounding client rect of the slider track element.
   * The track is used rather than the native element to ignore the extra space that the thumb can
   * take up.
   */


  _getSliderDimensions() {
    return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
  }
  /**
   * Focuses the native element.
   * Currently only used to allow a blur event to fire but will be used with keyboard input later.
   */


  _focusHostElement(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Blurs the native element. */


  _blurHostElement() {
    this._elementRef.nativeElement.blur();
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */


  writeValue(value) {
    this.value = value;
  }
  /**
   * Registers a callback to be triggered when the value has changed.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the component is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   * @param isDisabled
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

}

MatSlider.ɵfac = function MatSlider_Factory(t) {
  return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, 8));
};

MatSlider.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MatSlider,
  selectors: [["mat-slider"]],
  viewQuery: function MatSlider_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
    }
  },
  hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
  hostVars: 29,
  hostBindings: function MatSlider_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
        return ctx._onFocus();
      })("blur", function MatSlider_blur_HostBindingHandler() {
        return ctx._onBlur();
      })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("keyup", function MatSlider_keyup_HostBindingHandler() {
        return ctx._onKeyup();
      })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
        return ctx._onMouseenter();
      })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
        return $event.preventDefault();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-valuetext", ctx.valueText == null ? ctx.displayValue : ctx.valueText)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    disabled: "disabled",
    color: "color",
    tabIndex: "tabIndex",
    invert: "invert",
    max: "max",
    min: "min",
    step: "step",
    thumbLabel: "thumbLabel",
    tickInterval: "tickInterval",
    value: "value",
    displayWith: "displayWith",
    valueText: "valueText",
    vertical: "vertical"
  },
  outputs: {
    change: "change",
    input: "input",
    valueChange: "valueChange"
  },
  exportAs: ["matSlider"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 13,
  vars: 6,
  consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
  template: function MatSlider_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10)(11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.displayValue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle],
  styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid rgba(0,0,0,0);border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSlider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mat-slider',
      exportAs: 'matSlider',
      providers: [MAT_SLIDER_VALUE_ACCESSOR],
      host: {
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()',
        '(keydown)': '_onKeydown($event)',
        '(keyup)': '_onKeyup()',
        '(mouseenter)': '_onMouseenter()',
        // On Safari starting to slide temporarily triggers text selection mode which
        // show the wrong cursor. We prevent it by stopping the `selectstart` event.
        '(selectstart)': '$event.preventDefault()',
        'class': 'mat-slider mat-focus-indicator',
        'role': 'slider',
        '[tabIndex]': 'tabIndex',
        '[attr.aria-disabled]': 'disabled',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-valuemin]': 'min',
        '[attr.aria-valuenow]': 'value',
        // NVDA and Jaws appear to announce the `aria-valuenow` by calculating its percentage based
        // on its value between `aria-valuemin` and `aria-valuemax`. Due to how decimals are handled,
        // it can cause the slider to read out a very long value like 0.20000068 if the current value
        // is 0.2 with a min of 0 and max of 1. We work around the issue by setting `aria-valuetext`
        // to the same value that we set on the slider's thumb which will be truncated.
        '[attr.aria-valuetext]': 'valueText == null ? displayValue : valueText',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-slider-disabled]': 'disabled',
        '[class.mat-slider-has-ticks]': 'tickInterval',
        '[class.mat-slider-horizontal]': '!vertical',
        '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if mouse coordinates need to be inverted.
        '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
        '[class.mat-slider-sliding]': '_isSliding',
        '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
        '[class.mat-slider-vertical]': 'vertical',
        '[class.mat-slider-min-value]': '_isMinValue()',
        '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      inputs: ['disabled', 'color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid rgba(0,0,0,0);border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    invert: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    thumbLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tickInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    displayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    valueText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    input: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    _sliderWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['sliderWrapper']
    }]
  });
})();
/** Checks if number is safe for calculation */


function isSafeNumber(value) {
  return !isNaN(value) && isFinite(value);
}
/** Returns whether an event is a touch event. */


function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/** Gets the coordinates of a touch or mouse event relative to the viewport. */


function getPointerPositionOnPage(event, id) {
  let point;

  if (isTouchEvent(event)) {
    // The `identifier` could be undefined if the browser doesn't support `TouchEvent.identifier`.
    // If that's the case, attribute the first touch to all active sliders. This should still cover
    // the most common case while only breaking multi-touch.
    if (typeof id === 'number') {
      point = findMatchingTouch(event.touches, id) || findMatchingTouch(event.changedTouches, id);
    } else {
      // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
      point = event.touches[0] || event.changedTouches[0];
    }
  } else {
    point = event;
  }

  return point ? {
    x: point.clientX,
    y: point.clientY
  } : undefined;
}
/** Finds a `Touch` with a specific ID in a `TouchList`. */


function findMatchingTouch(touches, id) {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].identifier === id) {
      return touches[i];
    }
  }

  return undefined;
}
/** Gets the unique ID of a touch that matches a specific slider. */


function getTouchIdForSlider(event, sliderHost) {
  for (let i = 0; i < event.touches.length; i++) {
    const target = event.touches[i].target;

    if (sliderHost === target || sliderHost.contains(target)) {
      return event.touches[i].identifier;
    }
  }

  return undefined;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSliderModule {}

MatSliderModule.ɵfac = function MatSliderModule_Factory(t) {
  return new (t || MatSliderModule)();
};

MatSliderModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MatSliderModule,
  declarations: [MatSlider],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
  exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});
MatSliderModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatSlider]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_layout_dashboard_dashboard_module_ts.js.map