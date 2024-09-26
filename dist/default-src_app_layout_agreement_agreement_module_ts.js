(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["default-src_app_layout_agreement_agreement_module_ts"],{

/***/ 16880:
/*!**************************************************************!*\
  !*** ./src/app/layout/agreement/agreement-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementRoutingModule": () => (/* binding */ AgreementRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_agreements_agreements_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/agreements/agreements.component */ 21814);
/* harmony import */ var _components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/view-agreement/view-agreement.component */ 83531);
/* harmony import */ var _components_add_edit_agreement_add_edit_agreement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-agreement/add-edit-agreement.component */ 4310);
/* harmony import */ var _components_logs_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logs/logs.component */ 9156);







const routes = [
    {
        path: '',
        component: _components_agreements_agreements_component__WEBPACK_IMPORTED_MODULE_0__.AgreementsComponent
    },
    {
        path: 'add-agreement',
        component: _components_add_edit_agreement_add_edit_agreement_component__WEBPACK_IMPORTED_MODULE_2__.AddEditAgreementComponent
    },
    {
        path: "view-agreement/:agreementId",
        component: _components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_1__.ViewAgreementComponent
    },
    {
        path: 'edit-agreement/:agreementId',
        component: _components_add_edit_agreement_add_edit_agreement_component__WEBPACK_IMPORTED_MODULE_2__.AddEditAgreementComponent
    },
    {
        path: 'history/:agreementId',
        component: _components_logs_logs_component__WEBPACK_IMPORTED_MODULE_3__.LogsComponent
    }
];
let AgreementRoutingModule = class AgreementRoutingModule {
};
AgreementRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], AgreementRoutingModule);



/***/ }),

/***/ 30162:
/*!******************************************************!*\
  !*** ./src/app/layout/agreement/agreement.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementModule": () => (/* binding */ AgreementModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _agreement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-routing.module */ 16880);
/* harmony import */ var _components_agreements_agreements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/agreements/agreements.component */ 21814);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter/filter.component */ 8720);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view-agreement/view-agreement.component */ 83531);
/* harmony import */ var _components_add_edit_agreement_add_edit_agreement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-edit-agreement/add-edit-agreement.component */ 4310);
/* harmony import */ var _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../attachment-type/service/attachment-type.service */ 1959);
/* harmony import */ var _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-rate/service/base-rate.service */ 99581);
/* harmony import */ var _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../billing-frequency/service/billing-frequency.service */ 96124);
/* harmony import */ var _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../billing-method/service/billing-method.service */ 83476);
/* harmony import */ var _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../billingcurrency/service/billingcurrency.service */ 46134);
/* harmony import */ var _client_service_client_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client/service/client.service */ 74705);
/* harmony import */ var _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hourly-billing/service/hourly-billing.service */ 95418);
/* harmony import */ var _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../payor-type/service/payor-type.service */ 18530);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/directives */ 94221);
/* harmony import */ var _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../staff/service/staff.service */ 37441);
/* harmony import */ var _components_logs_logs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/logs/logs.component */ 9156);























let AgreementModule = class AgreementModule {
};
AgreementModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [
            _components_agreements_agreements_component__WEBPACK_IMPORTED_MODULE_1__.AgreementsComponent,
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__.FilterComponent,
            _components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_4__.ViewAgreementComponent,
            _components_add_edit_agreement_add_edit_agreement_component__WEBPACK_IMPORTED_MODULE_5__.AddEditAgreementComponent,
            _components_logs_logs_component__WEBPACK_IMPORTED_MODULE_16__.LogsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _agreement_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgreementRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf,
            ngx_mask__WEBPACK_IMPORTED_MODULE_22__.NgxMaskModule.forRoot(),
        ],
        exports: [
            _components_view_agreement_view_agreement_component__WEBPACK_IMPORTED_MODULE_4__.ViewAgreementComponent,
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__.FilterComponent
        ],
        providers: [
            _shared_directives__WEBPACK_IMPORTED_MODULE_14__.NgbdSortableHeader,
            _client_service_client_service__WEBPACK_IMPORTED_MODULE_11__.ClientService,
            _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_6__.AttachmentTypeService,
            _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_7__.BaseRateService,
            _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_8__.BillingFrequencyService,
            _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_9__.BillingMethodService,
            _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_10__.BillingcurrencyService,
            _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_12__.HourlyBillingService,
            _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_13__.PayorTypeService,
            _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_15__.StaffService
        ]
    })
], AgreementModule);



/***/ }),

/***/ 4310:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/add-edit-agreement/add-edit-agreement.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditAgreementComponent": () => (/* binding */ AddEditAgreementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_agreement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-agreement.component.html?ngResource */ 58490);
/* harmony import */ var _add_edit_agreement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-agreement.component.scss?ngResource */ 75624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../attachment-type/service/attachment-type.service */ 1959);
/* harmony import */ var _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base-rate/service/base-rate.service */ 99581);
/* harmony import */ var _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../billing-frequency/service/billing-frequency.service */ 96124);
/* harmony import */ var _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../billing-method/service/billing-method.service */ 83476);
/* harmony import */ var _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../billingcurrency/service/billingcurrency.service */ 46134);
/* harmony import */ var _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hourly-billing/service/hourly-billing.service */ 95418);
/* harmony import */ var _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../payor-type/service/payor-type.service */ 18530);
/* harmony import */ var _app_layout_sic_code_service_sic_code_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/layout/sic-code/service/sic-code.service */ 49867);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 14620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ 59453);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_layout_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/layout/staff/service/staff.service */ 37441);
/* harmony import */ var _app_layout_agreement_service_agreement_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/layout/agreement/service/agreement.service */ 3516);






















const objAdjustment = {
    adjustmentDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
    adjustmentDetails: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
    adjustmentReminder: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
    expirationReminderDate: ['', []],
    adjustmentReminderDate: ['', []],
    adjustmentReminderEmailRecipient: '',
    adjustmentReminderEmailContent: ['', []],
};
let AddEditAgreementComponent = class AddEditAgreementComponent {
    constructor(route, cdr, router, fb, rolesServie, agreementService, attachmentTypeService, baseRateService, billingFrequencyService, billingMethodService, billingcurrencyService, hourlyBillingService, payorTypeService, sicCodeService, staffsService, modalService
    // public toastr: ToastrService
    ) {
        this.route = route;
        this.cdr = cdr;
        this.router = router;
        this.fb = fb;
        this.rolesServie = rolesServie;
        this.agreementService = agreementService;
        this.attachmentTypeService = attachmentTypeService;
        this.baseRateService = baseRateService;
        this.billingFrequencyService = billingFrequencyService;
        this.billingMethodService = billingMethodService;
        this.billingcurrencyService = billingcurrencyService;
        this.hourlyBillingService = hourlyBillingService;
        this.payorTypeService = payorTypeService;
        this.sicCodeService = sicCodeService;
        this.staffsService = staffsService;
        this.modalService = modalService;
        this.roles = [];
        this.editForm = false;
        this.isLoading = false;
        this.isLoadingbtn = false;
        this.isLoadingAttachment = false;
        this.editData = [];
        this.submitted = false;
        this.isBillingFreOther = false;
        this.isFeeArrangmentHourlyBilled = false;
        this.isFeeArrangmentFixedFee = false;
        this.isFeeArrangmentCappedFee = false;
        this.isFeeArrangmentFullContingency = false;
        this.isFeeArrangmentPartialContingency = false;
        this.isFeeArrangmentFeeCollar = false;
        this.isRateAdjustmentDuringTerm = false;
        this.isRateAdjustmentDuringTermReminder = false;
        this.isBillingMethodOther = false;
        this.isPayorTypeOther = false;
        this.clients = [];
        this.clientLoading = false;
        this.clientSearchFailed = false;
        this._hourlyBilling = [];
        this._baseRate = [];
        this._billingMethods = [];
        this._billingCurrency = [];
        this._billingFrequencies = [];
        this._attachmentType = [];
        this._payorType = [];
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focus1$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.click1$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focus2$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.click2$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focusResAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.clickResAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focusBillAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focusAreaOfLaw$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.clickBillAtt$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focusMatter$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.focusPracticeGroup$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.clickMatter$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.clickPracticeGroup$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.clickAreaOfLaw$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.adjustmentArray = [];
        this._state = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
        this._dropdown = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this._sic = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this._matter = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this._employee = {
            page: 1,
            limit: 10,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this._areaOfLaw = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this._practiceGroup = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'asc',
        };
        this.matterRecord = [];
        this.isMatterRecord = false;
        this.attachmentArray = [];
        this.formatter = (r) => {
            return this.format(r);
        };
        this.formatterMatter = (r) => {
            return this.formatMatter(r);
        };
        this.formatClientGrp = (r) => {
            if (r) {
                return this.formatClientGroup(r);
            }
        };
        this.formatterEmployee = (r) => {
            return this.formatEmployee(r);
        };
        this.formatterBillingAttorney = (r) => {
            return this.formatBillingAttorney(r);
        };
        this.formatterAreaOfLaw = (r) => {
            return this.formatAreaOfLaw(r);
        };
        this.formatterPracticeGroup = (r) => {
            return this.formatPracticeGroup(r);
        };
        this.formatterSIC = (r) => {
            return this.formatSIC(r);
        };
        this.searchEmployeeResAtt = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focusResAtt$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.clickResAtt$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instanceResAtt.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._employee.searchTerm = term;
            return this.staffsService.getStaffs(this._employee).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchEmployeeBillAtt = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focusBillAtt$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.clickBillAtt$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instanceBillAtt.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._employee.searchTerm = term;
            return this.staffsService.getStaffs(this._employee).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchAreaOfLaw = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focusAreaOfLaw$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.clickAreaOfLaw$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instanceAreaOfLaw.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._areaOfLaw.searchTerm = term;
            return this.agreementService.getPracticeGroupById(this._areaOfLaw, this.addEditForm.value.practiceGroup.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x.areaOfLawId;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchPracticeGroup = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focusPracticeGroup$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.clickPracticeGroup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instancePracticeGroup.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._practiceGroup.searchTerm = term;
            return this.agreementService.getPracticeGroup(this._practiceGroup).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchSIC = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focus1$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.click1$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instance1.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._sic.searchTerm = term;
            return this.sicCodeService.getSICCodes(this._sic).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchMatterRecords = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focusMatter$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.clickMatter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instanceMatter.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._matter.searchTerm = term;
            const clientId = this.addEditForm.value.client.clientId || "";
            return this.agreementService.getMatters(this._matter, clientId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                console.log(x.results);
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchResponsibleAttorney = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._matter.searchTerm = term;
            console.log(this.addEditForm.controls['matter'].value?.responsibleAttorney);
            const responsibleAttorney = this.addEditForm.controls['matter'].value?.responsibleAttorney || "";
            return this.agreementService.getTimeKeepers(responsibleAttorney).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchBillingAttorney = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._matter.searchTerm = term;
            console.log(this.addEditForm.controls['matter'].value?.billingAttorney);
            const billingAttorney = this.addEditForm.controls['matter'].value?.billingAttorney || "";
            return this.agreementService.getTimeKeepers(billingAttorney).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.search = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focus$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.click$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instance.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._state.searchTerm = term;
            const groupId = this.addEditForm?.value?.clientGroup?.groupId;
            return this.agreementService.getClientByGroup(this._state, groupId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientSearchFailed = false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                console.log(x);
                return x;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                this.clientSearchFailed = true;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.searchClientGroup = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.focus2$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.merge)(this.click2$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(() => !this.instance2.isPopupOpen()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)((term) => {
            this._state.searchTerm = term;
            return this.agreementService.getClientGroup(this._state).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientSearchFailed = false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.map)(x => {
                return x.results;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.catchError)(() => {
                this.clientSearchFailed = true;
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(() => (this.clientLoading = false)));
        this.addEditForm = this.fb.group({
            //Client Details
            clientGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            matter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            matterId: ['', []],
            matterName: ['', []],
            clientSic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            responsibleAttorney: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            billingAttorney: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            areaOfLaw: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            practiceGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            agreementStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            expirationDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            reminderTimingDay: [''],
            //Fee Details Fields
            feeArrangementType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            fixedFeeType: ['', []],
            fixedFeeValue: ['', []],
            fixedFeeDetails: ['', []],
            baseRateType: ['', []],
            discount: ['', []],
            discountType: ['', []],
            otherDiscount: ['', []],
            feeArrangementDetail: ['', []],
            rateCardDetails: ['', []],
            cappedRateDetail: ['', []],
            targetFee: ['', []],
            collarPercentage: ['', []],
            feeCapAmount: ['', []],
            rateAdjustmentDuringTerm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            fullContingencyDetail: ['', []],
            partialContingencyDetail: [''],
            cappedFeeDetails: ['', []],
            feeCollarDetail: ['', []],
            //Billing Details Fields
            billingFrequency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            billingFrequencyOther: ['', []],
            billingCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            billingMethod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            payorType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            payorDetail: ['', []],
            preferredProvider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
            attachmentType: ['Engagement Letter'],
            attachmentTypeOther: [''],
            adjustmentArray: this.fb.array([])
        });
        const feeArrangmentHourlyBilled = ["baseRateType", "discount", "discountType" /*, "rateCardDetails", "cappedRateDetail"*/];
        const feeArrangmentFixedFee = ["fixedFeeType", "fixedFeeValue", /*, "fixedFeeDetails"*/];
        const feeArrangmentCappedFee = ["baseRateType", "feeCapAmount", "discount", "discountType"];
        const feeArrangmentFullContingency = ["fullContingencyDetail"];
        const feeArrangmentPartialContingency = ["partialContingencyDetail"];
        const feeArrangmentFeeCollar = [ /*'targetFee', 'collarPercentage', 'feeCollarDetail'*/];
        const otherDiscount = ["otherDiscount"];
        this.addEditForm.get('feeArrangementType').valueChanges.subscribe(val => {
            let currentArray = [];
            switch (val) {
                case "Hourly Billed":
                    this.addValidation(feeArrangmentHourlyBilled);
                    currentArray = feeArrangmentHourlyBilled;
                    break;
                case "Fixed Fee":
                    this.addValidation(feeArrangmentFixedFee);
                    currentArray = feeArrangmentFixedFee;
                    break;
                case "Capped Fee":
                    this.addValidation(feeArrangmentCappedFee);
                    currentArray = feeArrangmentCappedFee;
                    break;
                case "Full Contingency":
                    this.addValidation(feeArrangmentFullContingency);
                    currentArray = feeArrangmentFullContingency;
                    break;
                case "Partial Contingency":
                    this.addValidation(feeArrangmentPartialContingency);
                    currentArray = feeArrangmentPartialContingency;
                    break;
                case "Fee Collar":
                    this.addValidation(feeArrangmentFeeCollar);
                    currentArray = feeArrangmentFeeCollar;
                    break;
            }
            let combineArray = [
                ...feeArrangmentFeeCollar,
                ...feeArrangmentHourlyBilled,
                ...feeArrangmentFixedFee,
                ...feeArrangmentCappedFee,
                ...feeArrangmentFullContingency,
                ...feeArrangmentPartialContingency,
            ];
            ///combineArray = [...new Set(combineArray)]
            const removeValidatio = combineArray.filter((_v) => {
                return !currentArray.includes(_v);
            });
            this.removeValidation(removeValidatio);
            this.updateValues(combineArray);
        });
        this.addEditForm.get('rateAdjustmentDuringTerm').valueChanges.subscribe(val => {
            if (val === 'Yes') {
                this.addAdjustmentRow();
            }
            else {
                this.getAdjustmentArray().controls.forEach((valu, index) => {
                    this.removeAdjustmentRow(index);
                });
            }
        });
        this.route.params.subscribe(params => {
            if (params.agreementId !== '' && params.agreementId != null) {
                this.agreementId = params.agreementId;
                this.editForm = true;
                this.getAgreement(this.agreementId);
            }
        });
        this.viewAgreementLink = `view-agreement/${this.agreementId}`;
    }
    addValidation(_validations) {
        _validations.forEach(validation => {
            this.addEditForm.get(validation).setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
            this.addEditForm.get(validation).markAsUntouched();
        });
    }
    removeValidation(_validations) {
        _validations.forEach(validation => {
            this.addEditForm.get(validation).clearValidators();
        });
    }
    updateValues(_validations) {
        _validations.forEach(validation => {
            this.addEditForm.get(validation).updateValueAndValidity();
        });
    }
    getAdjustmentArray() {
        const control = this.addEditForm.get("adjustmentArray");
        return control;
    }
    getValidity(i, name) {
        const adjustArray = this.addEditForm.get('adjustmentArray').controls[i];
        const control = adjustArray && adjustArray.controls[name];
        //console.log((<FormGroup>adjustArray).controls[name])
        return control;
    }
    newAdjustmentArray() {
        const obj = this.fb.group(objAdjustment);
        const reminderField = [
            'adjustmentReminderDate',
            'expirationReminderDate',
            'adjustmentReminderEmailContent'
        ];
        obj.get('adjustmentReminder').valueChanges.subscribe(val => {
            if (val === 'Yes') {
                reminderField.forEach((validation) => {
                    obj.get(validation).setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
                    obj.get(validation).markAsUntouched();
                });
            }
            else {
                reminderField.forEach((validation) => {
                    obj.get(validation).clearValidators();
                });
            }
            reminderField.forEach((validation) => {
                obj.get(validation).updateValueAndValidity();
            });
        });
        return obj;
    }
    addAdjustmentRow() {
        const index = this.getAdjustmentArray().controls.length;
        this.getAdjustmentArray().push(this.newAdjustmentArray());
    }
    removeAdjustmentRow(index) {
        this.getAdjustmentArray().removeAt(index);
    }
    initAttachment() {
        return this.fb.group({
            attachmentType: this.fb.control(['Engagement Letter', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]),
            otherAttachmentType: this.fb.control(['']),
            attachmentFile: this.fb.control(['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]),
            trackingId: this.generateUniqueId()
        });
    }
    addGroup() {
        // add to the list
        const control = this.addEditForm.controls['attachment'];
        control.push(this.initAttachment());
    }
    removeGroup(i) {
        // remove from the list
        const control = this.addEditForm.controls['attachment'];
        control.removeAt(i);
    }
    ngOnInit() {
        this.getAllDropDown();
    }
    getAllDropDown() {
        this.attachmentTypeService.getAttachmentTypes(this._dropdown).subscribe(response => {
            response?.results.map(element => {
                this._attachmentType.push({ value: element.name, label: element.name });
            });
            // console.log(this._attachmentType);
        }, (error) => {
        });
        this.baseRateService.getBaseRates(this._dropdown).subscribe(response => {
            this._baseRate = response['results'];
        }, (error) => {
        });
        this.billingFrequencyService.getBillingFrequencies(this._dropdown).subscribe(response => {
            this._billingFrequencies = response['results'];
        }, (error) => {
        });
        this.billingMethodService.getBillingMethods(this._dropdown).subscribe(response => {
            this._billingMethods = response['results'];
        }, (error) => {
        });
        this.billingcurrencyService.getBillingcurrencys(this._dropdown).subscribe(response => {
            this._billingCurrency = response['results'];
        }, (error) => {
        });
        this.hourlyBillingService.getHourlyBillings(this._dropdown).subscribe(response => {
            this._hourlyBilling = response['results'];
        }, (error) => {
        });
        this.payorTypeService.getPayorTypes(this._dropdown).subscribe(response => {
            this._payorType = response['results'];
        }, (error) => {
        });
    }
    submitForm() {
        console.log(this.addEditForm.valid);
        // if (!this.addEditForm.valid) {
        //   this.submitted = true;
        //   return;
        // }
        this.processAgreementsObj();
        this.isLoadingbtn = true;
        this.agreementService.addNewAgreement(this.aggreementDataObject).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                this.attachmentArray = [];
                this.modalReference.close();
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default().fire({
                    icon: 'success',
                    title: 'Record Created',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            this.isLoadingbtn = false;
            this.router.navigate(['/dashboard/search']);
        }, (error) => {
            this.isLoadingbtn = false;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default().fire({
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
    processAgreementsObj() {
        this.aggreementDataObject = {
            "clientGroupId": this.addEditForm.value.clientGroup.groupId,
            "clientGroupName": this.addEditForm.value.clientGroup.name,
            "client": this.addEditForm.value.client.id,
            "clientId": this.addEditForm.value.client.clientId,
            "clientName": this.addEditForm.value.client.name,
            'matterId': this.addEditForm.value.matterId || this.addEditForm.value.matter.matterId,
            "matterName": this.addEditForm.value.matterName || this.addEditForm.value.matter.name,
            "clientSicId": this.addEditForm.value.clientSic.id,
            "clientSicName": this.addEditForm.value.clientSic.description,
            "principalAttorneyId": this.addEditForm.value.responsibleAttorney.id,
            "principalAttorneyName": this.addEditForm.value.responsibleAttorney.name,
            "responsibleBillingManagerId": this.addEditForm.value.billingAttorney.id,
            "responsibleBillingManagerName": this.addEditForm.value.billingAttorney.name,
            "areaOfLawId": this.addEditForm.value.areaOfLaw.id,
            "areaOfLawName": this.addEditForm.value.areaOfLaw.name,
            "practiceGroupId": this.addEditForm.value.practiceGroup.id,
            "practiceGroupName": this.addEditForm.value.practiceGroup.name,
            'startDate': this.addEditForm.value.agreementStartDate,
            'expirationDate': this.addEditForm.value.expirationDate,
            'feeArrangementDetails_reminderTimingDay': this.addEditForm.value.reminderTimingDay,
            'feeArrangementType': this.addEditForm.value.feeArrangementType,
            'feeArrangementDetails_fixedFeeType': this.addEditForm.value.fixedFeeType,
            'feeArrangementDetails_fixedFeeValue': this.addEditForm.value.fixedFeeValue,
            'feeArrangementDetails_fixedFeeDetail': this.addEditForm.value.fixedFeeDetails || '',
            'feeArrangementDetails_baseRateType': this.addEditForm.value.baseRateType || '',
            'feeArrangementDetails_discount': this.addEditForm.value.discount || '',
            'feeArrangementDetails_discountDetail': this.addEditForm.value.discountType || '',
            'feeArrangementDetails_discountDetailDescription': this.addEditForm.value.otherDiscount || '',
            'feeArrangementDetails_rateCardDetail': this.addEditForm.value.rateCardDetails || '',
            'feeArrangementDetails_cappedRateDetail': this.addEditForm.value.cappedRateDetail || '',
            'feeArrangementDetails_feeCapAmount': this.addEditForm.value.feeCapAmount || '',
            'feeArrangementDetails_targetFee': this.addEditForm.value.targetFee || '',
            'feeArrangementDetails_cappedFeeDetail': this.addEditForm.value.cappedFeeDetails || '',
            'feeArrangementDetails_feeCollarDetail': this.addEditForm.value.feeCollarDetail || '',
            'feeArrangementDetails_collarPercentage': this.addEditForm.value.collarPercentage || '',
            'feeArrangementDetails_rateAdjustmentDuringTerm': this.addEditForm.value.rateAdjustmentDuringTerm == 'Yes' ? true : false,
            'feeArrangementDetails_adjustment': this.addEditForm.value.adjustmentArray.map((_adj) => {
                let reminderObj = {};
                if (_adj.adjustmentReminder === 'Yes') {
                    reminderObj = {
                        reminderDate: _adj.adjustmentReminderDate,
                        expirationDate: _adj.expirationReminderDate,
                        reminderEmailRecipient: _adj.adjustmentReminderEmailRecipient,
                        reminderEmailContent: _adj.adjustmentReminderEmailContent
                    };
                }
                return {
                    adjustmentDate: _adj.adjustmentDate,
                    adjustmentDetails: _adj.adjustmentDetails,
                    reminder: (_adj.adjustmentReminder === 'Yes'),
                    ...reminderObj
                };
            }),
            'feeArrangementDetails_fullContingencyDetail': this.addEditForm.value.fullContingencyDetail || '',
            'feeArrangementDetails_partialContingencyDetail': this.addEditForm.value.partialContingencyDetail || '',
            'billingFrequency': this.addEditForm.value.billingFrequency,
            'billingFrequencyDetails': this.addEditForm.value.billingFrequencyOther,
            'billingCurrency': this.addEditForm.value.billingCurrency,
            'billingMethod': this.addEditForm.value.billingMethod,
            'billingMethodDetails': this.addEditForm.value.billingMethodOther || '',
            'payorType': this.addEditForm.value.payorType,
            'payorDetail': this.addEditForm.value.payorDetail,
            'preferredProvider': this.addEditForm.value.preferredProvider == 'Yes' ? true : false,
            'attachments': this.attachmentArray,
            'updateDetails': []
        };
        if (!this.editForm) {
            for (var key in this.aggreementDataObject) {
                if (this.aggreementDataObject.hasOwnProperty(key)) {
                    var value = this.aggreementDataObject[key];
                    if (value === null || value === undefined || value === '') {
                        delete this.aggreementDataObject[key];
                        delete this.addEditForm.value[key];
                    }
                }
            }
            delete this.aggreementDataObject.updateDetails;
        }
        else {
            const oldObj = this.agreementData;
            const newObj = this.aggreementDataObject;
            let modifiedProps = this.findModifiedProperties(oldObj, newObj);
            this.aggreementDataObject.updateDetails = modifiedProps;
            console.log(modifiedProps, "----------");
        }
    }
    submitUpdateForm() {
        this.processAgreementsObj();
        this.isLoadingbtn = true;
        this.agreementService.updateAgreement(this.agreementId, this.aggreementDataObject).subscribe(response => {
            if (response) {
                this.modalReference.close();
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default().fire({
                    icon: 'success',
                    title: 'Record Updated!',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            this.addEditForm.reset();
            this.attachmentArray = [];
            this.isLoadingbtn = false;
            this.router.navigate(['/dashboard/search']);
        }, (error) => {
            this.isLoadingbtn = false;
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_12___default().fire({
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
    getAgreement(agreementId) {
        this.isLoading = true;
        this.agreementService.getAgreementById(agreementId).subscribe(response => {
            this.agreementData = response;
            this.agreementData.feeArrangementDetails_adjustment = this.agreementData.feeArrangementDetails_adjustment?.map((adjustmentDetail) => {
                return {
                    adjustmentDate: this.getDateFormat(adjustmentDetail.adjustmentDate),
                    adjustmentDetails: adjustmentDetail.adjustmentDetails,
                    adjustmentReminder: adjustmentDetail.reminder ? 'Yes' : 'No',
                    expirationReminderDate: adjustmentDetail.expirationDate,
                    adjustmentReminderDate: this.getDateFormat(adjustmentDetail.reminderDate),
                    adjustmentReminderEmailRecipient: adjustmentDetail.reminderEmailRecipients,
                    adjustmentReminderEmailContent: adjustmentDetail.reminderEmailContent,
                };
            });
            const patchedValues = {
                clientGroup: `${this.agreementData.clientGroupId} - ${this.agreementData.clientGroupName}`,
                client: `${this.agreementData.clientId} - ${this.agreementData.clientName}`,
                matter: `${this.agreementData.matterId} - ${this.agreementData.matterName}`,
                matterId: this.agreementData.matterId,
                matterName: this.agreementData.matterName,
                clientSic: this.agreementData.clientSicName,
                responsibleAttorney: this.agreementData.principalAttorneyName,
                billingAttorney: this.agreementData.responsibleBillingManagerName,
                areaOfLaw: this.agreementData.areaOfLawName,
                practiceGroup: this.agreementData.practiceGroupName,
                agreementStartDate: this.getDateFormat(this.agreementData.startDate),
                expirationDate: this.getDateFormat(this.agreementData.expirationDate),
                reminderTimingDay: this.agreementData.feeArrangementDetails_reminderTimingDay,
                feeArrangementType: this.agreementData.feeArrangementType,
                fixedFeeType: this.agreementData.feeArrangementDetails_fixedFeeType,
                fixedFeeValue: this.agreementData.feeArrangementDetails_fixedFeeValue,
                fixedFeeDetails: this.agreementData.feeArrangementDetails_fixedFeeDetail,
                baseRateType: this.agreementData.feeArrangementDetails_baseRateType,
                discount: this.agreementData.feeArrangementDetails_discount,
                discountType: this.agreementData.feeArrangementDetails_discountDetail,
                otherDiscount: this.agreementData.feeArrangementDetails_discountDetailDescription,
                rateCardDetails: this.agreementData.feeArrangementDetails_rateCardDetail,
                cappedRateDetail: this.agreementData.feeArrangementDetails_cappedRateDetail,
                targetFee: this.agreementData.feeArrangementDetails_targetFee,
                collarPercentage: this.agreementData.feeArrangementDetails_collarPercentage,
                feeCapAmount: this.agreementData.feeArrangementDetails_feeCapAmount,
                rateAdjustmentDuringTerm: this.agreementData.feeArrangementDetails_rateAdjustmentDuringTerm ? 'Yes' : 'No',
                adjustmentArray: this.agreementData.feeArrangementDetails_adjustment,
                fullContingencyDetail: this.agreementData.feeArrangementDetails_fullContingencyDetail,
                partialContingencyDetail: this.agreementData.feeArrangementDetails_partialContingencyDetail,
                cappedFeeDetails: this.agreementData.feeArrangementDetails_cappedFeeDetail,
                feeCollarDetail: this.agreementData.feeArrangementDetails_feeCollarDetail,
                billingFrequency: this.agreementData.billingFrequency,
                billingFrequencyOther: this.agreementData.billingFrequencyDetails,
                billingCurrency: this.agreementData.billingCurrency,
                billingMethod: this.agreementData.billingMethod,
                payorType: this.agreementData.payorType,
                payorDetail: this.agreementData.payorDetail,
                preferredProvider: this.agreementData.preferredProvider ? 'Yes' : 'No',
                attachments: this.agreementData.attachments
            };
            this.agreementData.startDate = this.getDateFormat(this.agreementData.startDate);
            this.agreementData.expirationDate = this.getDateFormat(this.agreementData.expirationDate);
            this.agreementData.feeArrangementDetails_adjustmentDate = this.getDateFormat(this.agreementData.feeArrangementDetails_adjustmentDate);
            this.agreementData.feeArrangementDetails_reminderDate = this.getDateFormat(this.agreementData.feeArrangementDetails_reminderDate);
            this.attachmentArray = this.agreementData.attachments;
            this.feeArrangementType(event, patchedValues.feeArrangementType);
            this.rateAdjustmentDuringTerm(event, patchedValues.rateAdjustmentDuringTerm);
            // this.rateAdjustmentDuringTermReminder(event, patchedValues.adjustmentReminder)
            this.addEditForm.patchValue(patchedValues);
            this.discountType(event, patchedValues.discountType);
            this.billingFrequency(event, patchedValues.billingFrequency);
            this.billingMethod(event, patchedValues.billingMethod);
            this.isLoading = false;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/dashboard/search']);
        });
    }
    billingFrequency(event, billingFrequency) {
        if (event.target.value == "Other" || billingFrequency == "Other") {
            this.isBillingFreOther = true;
        }
        else {
            this.isBillingFreOther = false;
            this.addEditForm.patchValue({ billingFrequencyOther: '' });
        }
    }
    getResponsibleAttorney(responsibleAttorneyId) {
        this.agreementService.getTimeKeepers(responsibleAttorneyId).subscribe(res => {
            console.log(res);
            this.addEditForm.patchValue({ responsibleAttorney: res[0].displayName });
            this.cdr.detectChanges();
        });
    }
    getBillingAttorney(billingAttorneyId) {
        this.agreementService.getTimeKeepers(billingAttorneyId).subscribe(res => {
            console.log(res);
            this.addEditForm.patchValue({ billingAttorney: res[0].displayName });
            this.cdr.detectChanges();
        });
    }
    getMatterRecord(clientId) {
        this.addEditForm.patchValue({ matter: '' });
        this.addEditForm.patchValue({ billingAttorneyId: '' });
        this.addEditForm.patchValue({ responsibleAttorney: '' });
        this.agreementService.getMatters(this._matter, clientId).subscribe(res => {
        });
    }
    displayMatter(value) {
        if (value) {
            this.addEditForm.patchValue({ matter: '' });
        }
        else {
            this.addEditForm.patchValue({ matterName: '' });
            this.addEditForm.patchValue({ matterId: '' });
        }
        this.isMatterRecord = value;
    }
    format(r) {
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.clientId} - ${r.name}` : "";
        }
    }
    formatClientGroup(r) {
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.groupId} - ${r.name}` : "";
        }
    }
    formatMatter(r) {
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.matterId} - ${r.name}` : "";
        }
    }
    formatEmployee(r) {
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.name} - ${r.email}` : "";
        }
    }
    formatBillingAttorney(r) {
        console.log(r);
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.name} - ${r.email}` : "";
        }
    }
    formatAreaOfLaw(r) {
        console.log(r);
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.aol_code} - ${r.name}` : "";
        }
    }
    formatPracticeGroup(r) {
        console.log(r);
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.name}` : "";
        }
    }
    formatSIC(r) {
        if (typeof r === 'string') {
            return r;
        }
        else if (typeof r === 'object') {
            return r ? `${r.code} - ${r.description}` : "";
        }
    }
    feeArrangementType(event, feeArrangementType) {
        this.resetFeeDetailsForm();
        if (event.target.value == "Hourly Billed" || feeArrangementType == "Hourly Billed") {
            this.isFeeArrangmentHourlyBilled = true;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.discountTypeOther = false;
        }
        else if (event.target.value == "Fixed Fee" || feeArrangementType == "Fixed Fee") {
            this.isFeeArrangmentFixedFee = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        else if (event.target.value == "Capped Fee" || feeArrangementType == "Capped Fee") {
            this.isFeeArrangmentCappedFee = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.discountTypeOther = false;
        }
        else if (event.target.value == "Full Contingency" || feeArrangementType == "Full Contingency") {
            this.isFeeArrangmentFullContingency = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        else if (event.target.value == "Partial Contingency" || feeArrangementType == "Partial Contingency") {
            this.isFeeArrangmentPartialContingency = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        else if (event.target.value == "Fee Collar" || feeArrangementType == "Fee Collar") {
            this.isFeeArrangmentFeeCollar = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.discountTypeOther = false;
        }
        return true;
    }
    discountType(event, discountType) {
        if (event.target.value == "Other" || discountType == "Other") {
            this.discountTypeOther = true;
        }
        else {
            this.discountTypeOther = false;
            this.addEditForm.patchValue({
                otherDiscount: ''
            });
        }
    }
    rateAdjustmentDuringTerm(event, rateAdjustmentDuringTerm) {
        if (event.target.value == "Yes" || rateAdjustmentDuringTerm == "Yes") {
            this.isRateAdjustmentDuringTerm = true;
        }
        else {
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        this.addEditForm.patchValue({
            adjustmentReminder: '',
            adjustmentDate: '',
            adjustmentDetails: '',
            adjustmentReminderDate: '',
            expirationReminderDate: '',
            adjustmentReminderEmailRecipients: '',
            adjustmentReminderEmailContent: ''
        });
    }
    rateAdjustmentDuringTermReminder(event, rateAdjustmentDuringTermReminder) {
        this.addEditForm.patchValue({
            adjustmentReminderDate: '',
            expirationReminderDate: '',
            adjustmentReminderEmailRecipients: '',
            adjustmentReminderEmailContent: ''
        });
        if (event.target.value == "Yes" || rateAdjustmentDuringTermReminder == "Yes") {
            this.isRateAdjustmentDuringTermReminder = true;
        }
        else {
            this.isRateAdjustmentDuringTermReminder = false;
        }
    }
    billingMethod(event, billingMethod) {
        if (event.target.value == "Other" || billingMethod == "Other") {
            this.isBillingMethodOther = true;
        }
        else {
            this.isBillingMethodOther = false;
        }
    }
    payorType(event) {
        this.addEditForm.patchValue({ payorDetail: '' });
        if (event.target.value == "Other") {
            this.isPayorTypeOther = true;
        }
        else {
            this.isPayorTypeOther = false;
        }
    }
    resetFeeDetailsForm() {
        this.addEditForm.patchValue({
            discount: '',
            discountType: '',
            otherDiscount: '',
            baseRateType: '',
            rateCardDetails: '',
            cappedRateDetail: '',
            targetFee: '',
            collarPercentage: '',
            rateAdjustmentDuringTerm: '',
            adjustmentArray: [],
            fullContingencyDetail: '',
            fixedFeeDetails: '',
        });
        this.isRateAdjustmentDuringTerm = false;
        this.isRateAdjustmentDuringTermReminder = false;
    }
    generateUniqueId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    trackByFn(index, item) {
        return item.trackingId;
    }
    open(content) {
        console.log(this.addEditForm.valid, this.addEditForm, "test=========================");
        if (this.addEditForm.valid) {
            this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
        }
        else {
            this.addEditForm.markAllAsTouched();
        }
    }
    getAttachment(event) {
        this.isLoadingAttachment = true;
        let docType = this.addEditForm.value.attachmentType != 'Other' ? this.addEditForm.value.attachmentType : this.addEditForm.value.attachmentTypeOther;
        var formdata = new FormData();
        formdata.append("file", event.target.files[0]);
        // formdata.append("type", event.target.files[0].name);
        this.agreementService.saveAttachment(formdata).subscribe(res => {
            this.attachmentArray.push({
                type: docType,
                name: res?.key,
                file: res?.location
            });
            console.log(this.attachmentArray);
            this.resetAttachmentForm();
            this.isLoadingAttachment = false;
        }, (error) => {
            this.isLoadingAttachment = false;
        });
        this.input.nativeElement.value = "";
    }
    removeAttachment(index) {
        if (this.attachmentArray.length > 0)
            this.attachmentArray.splice(index, 1);
    }
    resetAttachmentForm() {
        this.addEditForm.patchValue({
            attachmentType: '',
            attachmentTypeOther: ''
        });
    }
    accessFileURL(filePath) {
        let data = {
            key: filePath
        };
        this.agreementService.getFileURL(data).subscribe(res => {
            window.open(res.file, '_blank');
        });
    }
    getDateFormat(dateString) {
        if (dateString) {
            const date = new Date(dateString);
            const formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
            return formattedDate;
        }
        else {
            return null;
        }
    }
    findModifiedProperties(oldObj, newObj) {
        let modifiedProps = [];
        // loop through all the properties in the new object
        for (let prop in newObj) {
            // if the property exists in both objects and has a different value
            if (oldObj.hasOwnProperty(prop) && oldObj[prop] !== newObj[prop] && newObj[prop] !== undefined) {
                // add the property and its old and new values to the modifiedProps object
                modifiedProps.push({
                    key: prop,
                    before: oldObj[prop],
                    after: newObj[prop]
                });
            }
        }
        // return the modifiedProps object
        return modifiedProps;
    }
    back() {
        this.router.navigate(['/dashboard/search/view-agreement/' + this.agreementId]);
    }
};
AddEditAgreementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_26__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService },
    { type: _app_layout_agreement_service_agreement_service__WEBPACK_IMPORTED_MODULE_14__.AgreementService },
    { type: _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_4__.AttachmentTypeService },
    { type: _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_5__.BaseRateService },
    { type: _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_6__.BillingFrequencyService },
    { type: _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_7__.BillingMethodService },
    { type: _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_8__.BillingcurrencyService },
    { type: _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_9__.HourlyBillingService },
    { type: _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_10__.PayorTypeService },
    { type: _app_layout_sic_code_service_sic_code_service__WEBPACK_IMPORTED_MODULE_11__.SICCodeService },
    { type: _app_layout_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_13__.StaffService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModal }
];
AddEditAgreementComponent.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['file', { static: false },] }],
    instance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instance1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instance2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instanceResAtt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instanceBillAtt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instanceMatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instancePracticeGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }],
    instanceAreaOfLaw: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild, args: ['instance',] }]
};
AddEditAgreementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
        selector: 'app-add-edit-agreement',
        template: _add_edit_agreement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_add_edit_agreement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditAgreementComponent);



/***/ }),

/***/ 21814:
/*!********************************************************************************!*\
  !*** ./src/app/layout/agreement/components/agreements/agreements.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementsComponent": () => (/* binding */ AgreementsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _agreements_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreements.component.html?ngResource */ 58844);
/* harmony import */ var _agreements_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreements.component.scss?ngResource */ 93214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/modules/download-file/download-file */ 52558);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_agreement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/agreement.service */ 3516);











let AgreementsComponent = class AgreementsComponent {
    constructor(router, agreementService, cdr, confirmationDialogService) {
        this.router = router;
        this.agreementService = agreementService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.agreements = [];
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.isAgreements = true;
        this.open = false;
        this.filterData = {};
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
            this.getAllAgreements(this._state);
        });
    }
    downloadFileExcel() {
        return this.agreementService.getAgreementsForExcel(this._state, this.filterData).subscribe(response => {
            (0,_app_shared_modules_download_file_download_file__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(response, "aggrements");
        }, (error) => {
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllAgreements(this._state);
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this._state.sortColumn = column;
        this._state.sortDirection = direction;
        this.getAllAgreements(this._state);
    }
    handleResults(event) {
        this.filterData = event;
        this.isLoading = true;
        this.getAllAgreements(this._state);
    }
    getAllAgreements(state) {
        this.agreementService.getAgreements(state, this.filterData).subscribe(response => {
            this.agreements = response.results;
            console.log(this.agreements);
            if (this.agreements.length == 0) {
                this.isAgreements = false;
            }
            else {
                this.isAgreements = true;
            }
            this.setState(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    refreshAgreements() {
        this.getAllAgreements(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
    editAgreement(agreementId) {
        this.router.navigate(['/agreements/edit-agreement/' + agreementId]);
    }
    viewAgrement(agreementId) {
        this.router.navigate(['/agreements/view-agreement/' + agreementId]);
    }
    openMenu() {
        this.open = true;
    }
    closeMenu() {
        this.open = false;
    }
};
AgreementsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_agreement_service__WEBPACK_IMPORTED_MODULE_6__.AgreementService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogService }
];
AgreementsComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
AgreementsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-agreements',
        template: _agreements_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_agreements_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgreementsComponent);



/***/ }),

/***/ 8720:
/*!************************************************************************!*\
  !*** ./src/app/layout/agreement/components/filter/filter.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.component.html?ngResource */ 78919);
/* harmony import */ var _filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.component.scss?ngResource */ 52189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var _service_agreement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/agreement.service */ 3516);










let FilterComponent = class FilterComponent {
    constructor(router, agreementService, cdr, fb, confirmationDialogService) {
        this.router = router;
        this.agreementService = agreementService;
        this.cdr = cdr;
        this.fb = fb;
        this.confirmationDialogService = confirmationDialogService;
        this.found = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.open = false;
        this.openClass = "";
        this.baseRateAll = false;
        this.loader = false;
        this.initalLoad = false;
        this.collectionOptions = {
            billingFrequency: [],
            baseRate: [],
            billingCurrency: [],
            billingMethod: [],
            payorType: [],
            feeArrangementType: []
        };
        this.iniitalLoadData();
    }
    iniitalLoadData(callback = false) {
        this.loader = true;
        this.initalLoad = true;
        this.agreementService.filtersData().subscribe(response => {
            this.collectionOptions = response;
            this.toggleAllSelection(true, "baseRate");
            this.toggleAllSelection(true, "billingCurrency");
            this.toggleAllSelection(true, "billingMethod");
            this.toggleAllSelection(true, "payorType");
            this.toggleAllSelection(true, "feeArrangementType");
            this.toggleAllSelection(true, "attachmentType");
            this.toggleAllSelectionSic(true, "sicCode");
            this.loader = false;
            this.initalLoad = false;
            this.cdr.detectChanges();
            callback && this.callbackLoad();
        });
    }
    ngOnInit() {
        this.filterForm = this.fb.group({
            //Client Details
            billingFrequency: [''],
            baseRate: [[]],
            billingCurrency: [[]],
            billingMethod: [[]],
            payorType: [[]],
            feeArrangementType: [[]],
            attachmentType: [[]],
            sicCode: [[]]
        });
    }
    loadFilterDataFrequency() {
        if (!this.initalLoad) {
            this.loader = true;
            const _data = this.filterForm.value;
            this.agreementService.filtersDataOption(_data).subscribe(response => {
                this.collectionOptions = response;
                this.cdr.detectChanges();
                this.toggleAllSelection(true, "baseRate", false);
                this.toggleAllSelection(true, "billingCurrency", false);
                this.toggleAllSelection(true, "billingMethod", false);
                this.toggleAllSelection(true, "payorType", false);
                this.toggleAllSelection(true, "feeArrangementType", false);
                this.toggleAllSelection(true, "attachmentType", false);
                this.toggleAllSelectionSic(true, "sicCode", false);
                this.loader = false;
            });
        }
    }
    loadFilterData(model) {
        if (!this.initalLoad && this.filterForm.controls[model]?.value.length > 0) {
            this.loader = true;
            const _data = this.filterForm.value;
            this.agreementService.filtersDataOption(_data).subscribe(response => {
                this.collectionOptions = response;
                this.cdr.detectChanges();
                this.toggleAllSelection(true, "baseRate", false);
                this.toggleAllSelection(true, "billingCurrency", false);
                this.toggleAllSelection(true, "billingMethod", false);
                this.toggleAllSelection(true, "payorType", false);
                this.toggleAllSelection(true, "feeArrangementType", false);
                this.toggleAllSelection(true, "attachmentType", false);
                this.toggleAllSelectionSic(true, "sicCode", false);
                this.loader = false;
            });
        }
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
    calllbackFn(model) {
        return this.filterForm.controls[model]?.value.length == this.collectionOptions[model]?.length;
    }
    toggleAllSelectionSic(checked, model, inital = true) {
        if (checked) {
            this.filterForm.patchValue({
                [model]: this.collectionOptions[model].map((_baseRate) => _baseRate._id.clientSicId)
            });
        }
        else {
            this.filterForm.patchValue({
                [model]: []
            });
        }
        inital && this.loadFilterData(model);
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
        this.filterForm.patchValue({
            "billingFrequency": ""
        });
        console.log(this.filterForm.value);
        this.filter();
    }
    resetEvent() {
        this.iniitalLoadData(true);
    }
};
FilterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _service_agreement_service__WEBPACK_IMPORTED_MODULE_5__.AgreementService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService }
];
FilterComponent.propDecorators = {
    found: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
FilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-agreements-filter',
        template: _filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilterComponent);



/***/ }),

/***/ 9156:
/*!********************************************************************!*\
  !*** ./src/app/layout/agreement/components/logs/logs.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsComponent": () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _logs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.component.html?ngResource */ 76379);
/* harmony import */ var _logs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs.component.scss?ngResource */ 89262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _service_agreement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/agreement.service */ 3516);










let LogsComponent = class LogsComponent {
    constructor(agreementService, route, cdr, router) {
        this.agreementService = agreementService;
        this.route = route;
        this.cdr = cdr;
        this.router = router;
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
        this.logs = [];
        this.excludedKeys = [
            'client',
            'clientGroupId',
            'clientId',
            'clientSicId',
            'principalAttorneyId',
            'responsibleBillingManagerId',
        ];
        this.isLoading = false;
        this.route.params.subscribe(params => {
            if (params.agreementId !== '' && params.agreementId != null) {
                this.agreementId = params.agreementId;
            }
        });
        this.searchTermUpdate
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getLogs(this._state);
        });
        this.route.data.subscribe(data => {
            this.searchTerm = data?.search;
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.getLogs(this._state);
    }
    getLogs(state) {
        this.agreementService.logs(state, this.agreementId).subscribe(response => {
            this.logs = response.results;
            this.isLoading = false;
            if (this.logs.length == 0) {
                this.isActivity = false;
            }
            else {
                this.isActivity = true;
            }
            this.cdr.detectChanges();
            this.setState(response);
        });
    }
    excludeValuesFromLogs() {
    }
    refreshLogs() {
        this.getLogs(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
        this.cdr.detectChanges();
    }
    back() {
        this.router.navigate(['/dashboard/search/view-agreement/' + this.agreementId]);
    }
    transformTitle(key) {
        const title = {
            'clientGroupName': 'Client Group',
            'clientName': 'Client',
            'matterName': 'Matter Name',
            'clientSicName': 'Client SIC Category',
            'principalAttorneyName': 'Responsible Partner',
            'responsibleBillingManagerName': 'Billing Manager',
            'startDate': 'Agreement Start Date (MM/DD/YYYY)',
            'expirationDate': 'Agreement Expiration Date (MM/DD/YYYY)',
            'feeArrangementDetails_reminderTimingDay': 'Reminder Timing',
            'feeArrangementType': 'Fee Arrangement Type',
            'feeArrangementDetails_baseRateType': 'Base Rate Type',
            'feeArrangementDetails_discount': 'Discount',
            'feeArrangementDetails_discountDetail': 'Discount Details',
            'feeArrangementDetails_discountDetailDescription': 'Discount Description',
            'feeArrangementDetails_rateCardDetail': 'Rate Card Detail',
            'feeArrangementDetails_cappedRateDetail': 'Capped Rate Detail',
            'feeArrangementDetails_feeCapAmount': 'Fee Cap Amount($)',
            'feeArrangementDetails_targetFee': 'Target Fee($)',
            'feeArrangementDetails_matterFixedFee': 'Matter Fixed Fee($)',
            'feeArrangementDetails_annualFixedFee': 'Annual Fixed Fee($)',
            'feeArrangementDetails_monthlyFixedFee': 'Monthly Fixed Fee($)',
            'feeArrangementDetails_portfolioFixedFee': 'Portfolio Fixed Fee($)',
            'feeArrangementDetails_milestoneFixedFee': 'Phase/Milestone Fixed Fee($)',
            'feeArrangementDetails_fixedFeeDetail': 'Fixed Fee Detail',
            'feeArrangementDetails_collarPercentage': 'Collar Percentage(%)',
            'feeArrangementDetails_rateAdjustmentDuringTerm': 'Rate Adjustment During Term',
            'feeArrangementDetails_adjustmentDate': 'Adjustment Date (MM/DD/YYYY)',
            'feeArrangementDetails_adjustmentDetails': 'Adjustment Details',
            'feeArrangementDetails_reminder': 'Adjustment Reminder',
            'feeArrangementDetails_reminderDate': 'Adjustment Reminder Date (MM/DD/YYYY)',
            'feeArrangementDetails_reminderEmailRecipients': 'Adjustment Reminder Email Recipients',
            'feeArrangementDetails_reminderEmailContent': 'Adjustment Reminder Email Content',
            'feeArrangementDetails_fullContingencyDetail': 'Full Contingency Detail',
            'feeArrangementDetails_partialContingencyDetail': 'Partial Contingency Detail',
            'billingFrequency': 'Billing Frequency',
            'billingFrequencyDetails': 'Billing Frequency Details',
            'billingCurrency': 'Billing Currency',
            'billingMethod': 'Billing Method',
            'billingMethodDetails': 'Billing Method Details',
            'payorType': 'Payor Type',
            'payorDetail': 'Payor Details',
            'preferredProvider': 'Preferred Provider',
        };
        return title[key];
    }
};
LogsComponent.ctorParameters = () => [
    { type: _service_agreement_service__WEBPACK_IMPORTED_MODULE_4__.AgreementService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
LogsComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
LogsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-logs',
        template: _logs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_logs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogsComponent);



/***/ }),

/***/ 83531:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/view-agreement/view-agreement.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAgreementComponent": () => (/* binding */ ViewAgreementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_agreement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-agreement.component.html?ngResource */ 73169);
/* harmony import */ var _view_agreement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-agreement.component.scss?ngResource */ 86289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _service_agreement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/agreement.service */ 3516);
/* harmony import */ var _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../attachment-type/service/attachment-type.service */ 1959);
/* harmony import */ var _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base-rate/service/base-rate.service */ 99581);
/* harmony import */ var _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../billing-frequency/service/billing-frequency.service */ 96124);
/* harmony import */ var _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../billing-method/service/billing-method.service */ 83476);
/* harmony import */ var _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../billingcurrency/service/billingcurrency.service */ 46134);
/* harmony import */ var _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hourly-billing/service/hourly-billing.service */ 95418);
/* harmony import */ var _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../payor-type/service/payor-type.service */ 18530);
/* harmony import */ var _app_layout_sic_code_service_sic_code_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout/sic-code/service/sic-code.service */ 49867);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/shared/services */ 17253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);



















let ViewAgreementComponent = class ViewAgreementComponent {
    constructor(route, cdr, router, fb, rolesServie, agreementService, attachmentTypeService, baseRateService, billingFrequencyService, billingMethodService, billingcurrencyService, hourlyBillingService, payorTypeService, sicCodeService, jwtService, _location
    // public toastr: ToastrService
    ) {
        this.route = route;
        this.cdr = cdr;
        this.router = router;
        this.fb = fb;
        this.rolesServie = rolesServie;
        this.agreementService = agreementService;
        this.attachmentTypeService = attachmentTypeService;
        this.baseRateService = baseRateService;
        this.billingFrequencyService = billingFrequencyService;
        this.billingMethodService = billingMethodService;
        this.billingcurrencyService = billingcurrencyService;
        this.hourlyBillingService = hourlyBillingService;
        this.payorTypeService = payorTypeService;
        this.sicCodeService = sicCodeService;
        this.jwtService = jwtService;
        this._location = _location;
        this.isEditAccess = false;
        this.isLoading = false;
        this.isLoadingAttachment = false;
        this.agreementData = {};
        this.clientDetailsEdit = false;
        this.route.params.subscribe(params => {
            if (params.agreementId !== '' && params.agreementId != null) {
                this.agreementId = params.agreementId;
                this.getAggrement(this.agreementId);
            }
        });
        this.route.data.subscribe(data => {
            this.searchType = data?.search;
        });
    }
    ngOnInit() {
        this.isEditAccess = this.jwtService.checkAccess('agreements');
    }
    accessFileURL(filePath) {
        let data = {
            key: filePath
        };
        this.agreementService.getFileURL(data).subscribe(res => {
            window.open(res.file, '_blank');
        });
    }
    getAggrement(agreementId) {
        this.isLoading = true;
        this.agreementService.getAgreementById(agreementId).subscribe(response => {
            this.agreementData = response;
            this.feeArrangementType(this.agreementData.feeArrangementType);
            this.isLoading = false;
            this.cdr.detectChanges();
        }, (error) => {
            this.isLoading = false;
            alert("Record Not Found");
            this.router.navigate(['/dashboard/search']);
        });
    }
    editClientDetails() {
        this.clientDetailsEdit = !this.clientDetailsEdit;
    }
    goBack() {
        this._location.back();
    }
    editAgreement() {
        this.router.navigate(['/agreements/edit-agreement/' + this.agreementId]);
    }
    feeArrangementType(feeArrangementType) {
        if (feeArrangementType == "Hourly Billed") {
            this.isFeeArrangmentHourlyBilled = true;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.discountTypeOther = false;
        }
        else if (feeArrangementType == "Fixed Fee") {
            this.isFeeArrangmentFixedFee = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        else if (feeArrangementType == "Capped Fee") {
            this.isFeeArrangmentCappedFee = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.discountTypeOther = false;
        }
        else if (feeArrangementType == "Full Contingency") {
            this.isFeeArrangmentFullContingency = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentPartialContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        else if (feeArrangementType == "Partial Contingency") {
            this.isFeeArrangmentPartialContingency = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentFeeCollar = false;
            this.isRateAdjustmentDuringTerm = false;
            this.isRateAdjustmentDuringTermReminder = false;
        }
        else if (feeArrangementType == "Fee Collar") {
            this.isFeeArrangmentFeeCollar = true;
            this.isFeeArrangmentHourlyBilled = false;
            this.isFeeArrangmentFixedFee = false;
            this.isFeeArrangmentCappedFee = false;
            this.isFeeArrangmentFullContingency = false;
            this.isFeeArrangmentPartialContingency = false;
            this.discountTypeOther = false;
        }
        return true;
    }
    viewHistory() {
        this.router.navigate(['/agreements/history/', this.agreementId]);
    }
    getUrl(url) {
        return encodeURIComponent(url);
    }
};
ViewAgreementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService },
    { type: _service_agreement_service__WEBPACK_IMPORTED_MODULE_4__.AgreementService },
    { type: _attachment_type_service_attachment_type_service__WEBPACK_IMPORTED_MODULE_5__.AttachmentTypeService },
    { type: _base_rate_service_base_rate_service__WEBPACK_IMPORTED_MODULE_6__.BaseRateService },
    { type: _billing_frequency_service_billing_frequency_service__WEBPACK_IMPORTED_MODULE_7__.BillingFrequencyService },
    { type: _billing_method_service_billing_method_service__WEBPACK_IMPORTED_MODULE_8__.BillingMethodService },
    { type: _billingcurrency_service_billingcurrency_service__WEBPACK_IMPORTED_MODULE_9__.BillingcurrencyService },
    { type: _hourly_billing_service_hourly_billing_service__WEBPACK_IMPORTED_MODULE_10__.HourlyBillingService },
    { type: _payor_type_service_payor_type_service__WEBPACK_IMPORTED_MODULE_11__.PayorTypeService },
    { type: _app_layout_sic_code_service_sic_code_service__WEBPACK_IMPORTED_MODULE_12__.SICCodeService },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_13__.JwtService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__.Location }
];
ViewAgreementComponent.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['file', { static: false },] }]
};
ViewAgreementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-view-agreement',
        template: _view_agreement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_view_agreement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewAgreementComponent);



/***/ }),

/***/ 3516:
/*!***************************************************************!*\
  !*** ./src/app/layout/agreement/service/agreement.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementService": () => (/* binding */ AgreementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);





let AgreementService = class AgreementService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.backendUrl;
    }
    getAgreements(data, filterData) {
        // if (data.searchTerm == '') {
        //   return this.apiService.get(`/agreements?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        // } else {
        //   return this.apiService.get(`/agreements?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        // }
        if (data.searchTerm == '') {
            return this.apiService.post(`/agreements/filter?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`, filterData);
        }
        else {
            return this.apiService.post(`/agreements/filter?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, filterData);
        }
    }
    getAgreementsForExcel(data, filterData) {
        if (data.searchTerm == '') {
            return this.apiService.postBlob(`/agreements/download-excel?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`, filterData);
        }
        else {
            return this.apiService.postBlob(`/agreements/download-excel?&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`, filterData);
        }
    }
    getAgreementById(arggrementId) {
        return this.apiService.get(`/agreements/${arggrementId}`);
    }
    filtersData() {
        return this.apiService.post(`/agreements/filter/options`);
    }
    filtersDataOption(data) {
        return this.apiService.post(`/agreements/filter/options`, data);
    }
    getClientGroup(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/client-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/client-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getClients(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/clients?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/clients?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getClientByGroup(data, clientGrpId) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/clients/clientGroup-id/${clientGrpId}`);
        }
        else {
            return this.apiService.get(`/clients/clientGroup-id/${clientGrpId}?&search=${data.searchTerm}`);
        }
    }
    getMatters(data, clientId) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/matters?clientId=${clientId}&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else if (data.searchTerm && clientId) {
            return this.apiService.get(`/matters?clientId=${clientId}&sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
        else {
            return this.apiService.get(`/matters?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getTimeKeepers(data) {
        return this.apiService.get(`/timekeepers/timekeeper-id/${data}`);
    }
    saveAttachment(data) {
        return this.apiService.post(`/app/file-upload`, data);
    }
    getFileURL(data) {
        return this.apiService.post(`/app/access-file`, data);
    }
    addNewAgreement(data) {
        return this.apiService.post(`/agreements`, data);
    }
    updateAgreement(id, data) {
        return this.apiService.patch(`/agreements/${id}`, data);
    }
    logs(data, id) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/agreements/logs/${id}?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/agreements/logs/${id}?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getAreaOfLaw(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/area-of-law?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/area-of-law?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getPracticeGroup(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/practice-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/practice-group?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    getPracticeGroupById(data, id) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/practice-group/${id}`);
        }
        else {
            return this.apiService.get(`/practice-group/${id}?search=${data.searchTerm}`);
        }
    }
};
AgreementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
AgreementService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AgreementService);



/***/ }),

/***/ 49867:
/*!*************************************************************!*\
  !*** ./src/app/layout/sic-code/service/sic-code.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 17253:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 14620:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/merge.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 59453:
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.7.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';
  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };
  const swalPrefix = 'swal2-';
  /**
   * @param {string[]} items
   * @returns {object}
   */

  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };

  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   *
   * @param {Array} arr
   * @returns {Array}
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */


  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Standardize console warnings
   *
   * @param {string | Array} message
   */


  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };
  /**
   * Standardize console errors
   *
   * @param {string} message
   */


  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };
  /**
   * Private global state for `warnOnce`
   *
   * @type {Array}
   * @private
   */


  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */


  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */


  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  /**
   * @param {any} arg
   * @returns {boolean}
   */


  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  /**
   * @param {any} arg
   * @returns {Promise}
   */


  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  /**
   * @param {any} arg
   * @returns {boolean}
   */


  const isPromise = arg => arg && Promise.resolve(arg) === arg;
  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */


  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */


  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */


  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };
  /**
   * @returns {HTMLElement | null}
   */


  const getPopup = () => elementByClass(swalClasses.popup);
  /**
   * @returns {HTMLElement | null}
   */


  const getIcon = () => elementByClass(swalClasses.icon);
  /**
   * @returns {HTMLElement | null}
   */


  const getIconContent = () => elementByClass(swalClasses['icon-content']);
  /**
   * @returns {HTMLElement | null}
   */


  const getTitle = () => elementByClass(swalClasses.title);
  /**
   * @returns {HTMLElement | null}
   */


  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  /**
   * @returns {HTMLElement | null}
   */


  const getImage = () => elementByClass(swalClasses.image);
  /**
   * @returns {HTMLElement | null}
   */


  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  /**
   * @returns {HTMLElement | null}
   */


  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  /**
   * @returns {HTMLButtonElement | null}
   */


  const getConfirmButton = () =>
  /** @type {HTMLButtonElement} */
  elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
  /**
   * @returns {HTMLButtonElement | null}
   */


  const getCancelButton = () =>
  /** @type {HTMLButtonElement} */
  elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
  /**
   * @returns {HTMLButtonElement | null}
   */


  const getDenyButton = () =>
  /** @type {HTMLButtonElement} */
  elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
  /**
   * @returns {HTMLElement | null}
   */


  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  /**
   * @returns {HTMLElement | null}
   */


  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
  /**
   * @returns {HTMLElement | null}
   */


  const getActions = () => elementByClass(swalClasses.actions);
  /**
   * @returns {HTMLElement | null}
   */


  const getFooter = () => elementByClass(swalClasses.footer);
  /**
   * @returns {HTMLElement | null}
   */


  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  /**
   * @returns {HTMLElement | null}
   */


  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js


  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */

  const getFocusableElements = () => {
    const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible$1(el));
  };
  /**
   * @returns {boolean}
   */


  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */


  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */


  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  }; // Remember state in cases where opening and handling a modal will fiddle with it.


  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      Array.from(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      Array.from(parsed.querySelector('body').childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */


  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */


  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
        return;
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */


  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);

      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);

      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);

      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);

      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */


  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */


  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */


  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */


  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */


  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */


  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? `${value}px` : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */


  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */


  const hide = elem => {
    elem.style.display = 'none';
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */


  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */


  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  /**
   * @returns {boolean}
   */


  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */


  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */


  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };

  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  const RESTORE_FOCUS_TIMEOUT = 100;
  /** @type {GlobalState} */

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };
  /**
   * Detect Node env
   *
   * @returns {boolean}
   */


  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */

    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;

    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
  /**
   * @param {SweetAlertOptions} params
   */


  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };
  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */


  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */


  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */


  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };
  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */


  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();
  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */


  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */


  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`]); // Set caption text

    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
    addClass(button, params[`${buttonType}ButtonClass`]);
  }
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */


  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = `grow-${grow}`;

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  } /// <reference path="../../../../sweetalert2.d.ts"/>

  /** @type {InputClass[]} */


  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const showInput = params => {
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
      return;
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };
  /**
   * @param {HTMLInputElement} input
   */


  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput$1(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };
  /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */


  const renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const setContent = (icon, params) => {
    let oldContent = icon.innerHTML;
    let newContent;

    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }

    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  /**
   * @param {string} content
   * @returns {string}
   */


  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      hide(image);
      return;
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses$1(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  const addClasses$1 = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ''}`;

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      hide(progressStepsContainer);
      return;
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */


  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };
  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */


  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };
  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @param {SweetAlert2} instance
   * @returns {HTMLElement | null}
   */


  function getInput(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput$1(domCache.popup, innerParams.input);
  }
  /*
   * Global function to determine if SweetAlert2 popup is shown
   */


  const isVisible = () => {
    return isVisible$1(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */


  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */


  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */


  const clickCancel = () => getCancelButton() && getCancelButton().click();

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });
  /**
   * @param {GlobalState} globalState
   */

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */


  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {number} index
   * @param {number} increment
   */


  const setFocus = (index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      focusableElements[index].focus();
      return;
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };

  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */

  const keydownHandler = (instance, event, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (event.isComposing || event.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    } // ENTER


    if (event.key === 'Enter') {
      handleEnter(instance, event, innerParams);
    } // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    } // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */


  const handleEnter = (instance, event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      event.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} event
   */


  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }

    event.stopPropagation();
    event.preventDefault();
  };
  /**
   * @param {string} key
   */


  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    /** @type HTMLElement[] */

    const buttons = [confirmButton, denyButton, cancelButton];

    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */


  const handleEsc = (event, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };
  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */


  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  }; // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };

  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };
  /* istanbul ignore file */
  // Fix iOS scrolling http://stackoverflow.com/q/39626302


  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */


  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */

    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */


    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };
  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
    }
  };

  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = `${states.previousBodyPadding}px`;
      states.previousBodyPadding = null;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */


  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }
  /**
   * Remove SweetAlert2 classes from body
   */


  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }
  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */


  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  /**
   * @returns {boolean}
   */


  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };
  /**
   * @param {any} error
   */


  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  /**
   * @param {SweetAlert2} instance
   */


  const handleAwaitingPromise = instance => {
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        // @ts-ignore
        instance._destroy();
      }
    }
  };
  /**
   * @param {any} resolveValue
   * @returns {import('sweetalert2').SweetAlertResult}
   */


  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */


  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */


  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {Function} didClose
   */


  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        // @ts-ignore
        didClose.bind(instance.params)();
      } // @ts-ignore


      instance._destroy();
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */


  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }
  /**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */


  function setInputDisabled(input, disabled) {
    if (!input) {
      return;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }
  /**
   * Show block with validation message
   *
   * @param {string} error
   */


  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }
  /**
   * Hide block with validation message
   */


  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */


  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */


  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };
  /**
   * @param {string} param
   */


  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };
  /**
   * @param {string} param
   */


  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };
  /**
   * @param {string} param
   */


  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */


  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };
  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */


  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }
  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */


  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };
  /**
   * Dispose the current SweetAlert2 instance
   */


  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert2} instance
   */


  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert2} instance
   */


  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */


  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });
  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement} [buttonToReplace]
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };
  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement} [buttonToReplace]
   */


  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };
  /**
   * @typedef { string | number | boolean } InputValue
   */

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */


  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };
  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */


  const getCheckboxValue = input => input.checked ? 1 : 0;
  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */


  const getRadioValue = input => input.checked ? input.value : null;
  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */


  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    /**
     * @param {Record<string, any>} inputOptions
     */

    const processInputOptions = inputOptions => {
      populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */


  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);
      /**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },

    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };
  /**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */


  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };
  /**
   * @param {SweetAlert2} instance
   */


  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  /**
   * @param {SweetAlert2} instance
   */


  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */


  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */


  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */


  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */


  const rejectWith = (instance, error) => {
    // @ts-ignore
    instance.rejectPromise(error);
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }
  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */


  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }
  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */


  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */


  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */


  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */


  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  /**
   * @param {string} attr
   */

  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */

  const getTemplateParams = params => {
    /** @type {HTMLTemplateElement} */
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalFunctionParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;

      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore

      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */


    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));

    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };
  /**
   * @param {AnimationEvent} event
   */


  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */


  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };
  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */


  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },

    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  /**
   * @param {SweetAlertOptions} params
   */


  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = currentInstance._main(currentInstance.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }
  /**
   * @param {SweetAlert2} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */


  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals

      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        // @ts-ignore
        instance.close({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };

      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };

      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = () => {
        // @ts-ignore
        dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };
  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */


  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */


  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */


  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // Dear russian users visiting russian sites. Let's have fun.


  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');

    if (!initiationDate) {
      localStorage.setItem('swal-initiation', `${now}`);
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {// ignore
          });
        }, 2500);
      }, 500);
    }
  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.7.2';
  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;
  return Swal;
});

if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}

/***/ }),

/***/ 75624:
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/add-edit-agreement/add-edit-agreement.component.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".form-group {\n  margin-bottom: 8px;\n}\n\nlabel {\n  margin: 2px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\nh4 {\n  font-weight: 500;\n}\n\n.card-body {\n  padding: 20px;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgb(83, 82, 82);\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgb(83, 82, 82);\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: rgb(83, 82, 82);\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: rgb(83, 82, 82);\n}\n\nspan.input-group-text {\n  padding: 0.7rem 1rem;\n}\n\n.display-flex {\n  display: flex;\n}\n\n.display-flex .btn {\n  height: 3rem;\n  position: relative;\n  top: 20px;\n}\n\n.review-item {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 8px !important;\n}\n\n.review-item label {\n  font-weight: 500 !important;\n}\n\n.modal-body {\n  height: 400px;\n  overflow: auto;\n}\n\n.flex-container {\n  display: flex;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  margin: 10px;\n  padding: 10px;\n  font-size: 12px;\n}\n\n.cross-icon {\n  text-align: right;\n  cursor: pointer;\n}\n\na {\n  cursor: pointer;\n}\n\n.form-group {\n  margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWFncmVlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBTEE7RUFDRSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNFO0VBQ0UsMkJBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBT0E7RUFDRSw4QkFBQTtBQUpGIiwiZmlsZSI6ImFkZC1lZGl0LWFncmVlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHJnYig4MywgODIsIDgyKTtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6IHJnYig4MywgODIsIDgyKTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogcmdiKDgzLCA4MiwgODIpO1xufVxuXG5zcGFuLmlucHV0LWdyb3VwLXRleHQge1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbn1cblxuLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXNwbGF5LWZsZXggLmJ0biB7XG4gIGhlaWdodDogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG59XG5cbi5yZXZpZXctaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubW9kYWwtYm9keSB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1jb250YWluZXI+ZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gLmZvcm0tY29udHJvbCB7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vIH1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 93214:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/agreements/agreements.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 52189:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/filter/filter.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#slider {\n  position: absolute;\n  width: 310px;\n  height: 100%;\n  background: #fff;\n  overflow-x: scroll;\n  padding-bottom: 10px;\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  right: 0;\n}\n#slider ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.slide_main_menu {\n  padding: 16px;\n  border-bottom: 1px solid #ccc;\n}\n.slide_main_menu .slide_header {\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #212529;\n}\n.parent-slide {\n  position: fixed;\n  right: 0;\n  top: 215px;\n  height: 92%;\n}\n.parent-slide.slide-in {\n  top: 65px;\n}\n.parent-slide .loader-overlay {\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #ccc;\n  opacity: 0.3;\n}\n.parent-slide .loader {\n  position: fixed;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n.slide-in #slider {\n  animation: slide-in 0.5s forwards;\n  -webkit-animation: slide-in 0.5s forwards;\n}\n.menu-open {\n  position: absolute;\n  right: 91px;\n  top: -77px;\n  width: 90%;\n}\n.slide-in .menu-open {\n  display: none;\n}\n.menu-open button {\n  background: #ffffff;\n  color: #753681;\n  /* border: 0; */\n  padding: 3.2px 10px;\n  /* width: 90%; */\n  border-radius: 0 5px 5px 0;\n  margin: 0 !important;\n}\n.slide-out #slider {\n  animation: slide-out 0.5s forwards;\n  -webkit-animation: slide-out 0.5s forwards;\n}\n.action-button {\n  position: relative;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n@keyframes slide-in {\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes slide-in {\n  100% {\n    -webkit-transform: translateX(0%);\n  }\n}\n@keyframes slide-out {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@-webkit-keyframes slide-out {\n  0% {\n    -webkit-transform: translateX(0%);\n  }\n  100% {\n    -webkit-transform: translateX(100%);\n  }\n}\n.slide_main_menu li {\n  padding: 4px 0;\n}\n.close-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 1px;\n  background: #d8d8d8;\n  border: 0;\n}\n.close-button img {\n  width: 15px;\n}\n.slide_main_menu li input {\n  margin-right: 9px;\n  width: 16px;\n  height: 16px;\n  min-width: 16px;\n}\n.slide_main_menu li label {\n  display: flex;\n}\n.filter-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 10px;\n}\n.filter-buttons button {\n  width: 48%;\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0ZBQUE7RUFDQSxRQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDUjtBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFESjtBQUdJO0VBQ0ksU0FBQTtBQURSO0FBSUk7RUFDSSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUFIUjtBQVNBO0VBQ0ksaUNBQUE7RUFDQSx5Q0FBQTtBQU5KO0FBU0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQU5KO0FBU0E7RUFDSSxhQUFBO0FBTko7QUFRQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQUxKO0FBVUE7RUFDSSxrQ0FBQTtFQUNBLDBDQUFBO0FBUEo7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBUEo7QUFVQTtFQUNJO0lBQ0kseUJBQUE7RUFQTjtBQUNGO0FBVUE7RUFDSTtJQUNJLGlDQUFBO0VBUk47QUFDRjtBQVdBO0VBQ0k7SUFDSSx5QkFBQTtFQVROO0VBWUU7SUFDSSwyQkFBQTtFQVZOO0FBQ0Y7QUFhQTtFQUNJO0lBQ0ksaUNBQUE7RUFYTjtFQWNFO0lBQ0ksbUNBQUE7RUFaTjtBQUNGO0FBZUE7RUFDSSxjQUFBO0FBYko7QUFnQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJKO0FBZ0JBO0VBQ0ksV0FBQTtBQWJKO0FBZ0JBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFiSjtBQWlCQTtFQUNJLGFBQUE7QUFkSjtBQWlCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBZEo7QUFpQkE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFkSiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHg7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5zbGlkZV9tYWluX21lbnUge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAuc2xpZGVfaGVhZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICB9XG59XG5cbi5wYXJlbnQtc2xpZGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDIxNXB4O1xuICAgIGhlaWdodDogOTIlO1xuXG4gICAgJi5zbGlkZS1pbiB7XG4gICAgICAgIHRvcDogNjVweDtcbiAgICB9XG5cbiAgICAubG9hZGVyLW92ZXJsYXkge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG5cbiAgICAubG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cblxuXG4uc2xpZGUtaW4gI3NsaWRlciB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjVzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjVzIGZvcndhcmRzO1xufVxuXG4ubWVudS1vcGVuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDkxcHg7XG4gICAgdG9wOiAtNzdweDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uc2xpZGUtaW4gLm1lbnUtb3BlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW51LW9wZW4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICM3NTM2ODE7XG4gICAgLyogYm9yZGVyOiAwOyAqL1xuICAgIHBhZGRpbmc6IDMuMnB4IDEwcHg7XG4gICAgLyogd2lkdGg6IDkwJTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuXG59XG5cbi5zbGlkZS1vdXQgI3NsaWRlciB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC41cyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNXMgZm9yd2FyZHM7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4ge1xuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxufVxuXG4uc2xpZGVfbWFpbl9tZW51IGxpIHtcbiAgICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uY2xvc2UtYnV0dG9uIGltZ3tcbiAgICB3aWR0aDogMTVweDtcbn1cblxuLnNsaWRlX21haW5fbWVudSBsaSBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1pbi13aWR0aDogMTZweDtcblxufVxuXG4uc2xpZGVfbWFpbl9tZW51IGxpIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG59Il19 */";

/***/ }),

/***/ 89262:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/agreement/components/logs/logs.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".table td {\n  vertical-align: top !important;\n  border: 1px solid #dedede !important;\n}\n\n.no-border td {\n  border: 0 !important;\n  padding-left: 0 !important;\n}\n\n.no-border th {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQkFBQTtBQUVKIiwiZmlsZSI6ImxvZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlIWltcG9ydGFudDtcbn1cblxuLm5vLWJvcmRlciB0ZHtcbiAgICBib3JkZXI6MCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLm5vLWJvcmRlciB0aHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 86289:
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/view-agreement/view-agreement.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "form .form-group {\n  text-align: left;\n}\n\n.form-group {\n  margin-bottom: 8px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding-left: 8px;\n  margin-bottom: 16px;\n}\n\n.header .heading {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 5px;\n  margin-bottom: 0px;\n  color: #773784;\n}\n\n.header .edit-icon {\n  height: 20px;\n  width: auto;\n  margin: 5px;\n  cursor: pointer;\n}\n\nlabel {\n  margin: 2px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\nh4 {\n  font-weight: 500;\n}\n\n.card-body {\n  padding: 20px;\n}\n\n::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgb(83, 82, 82);\n  opacity: 1; /* Firefox */\n}\n\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgb(83, 82, 82);\n  opacity: 1; /* Firefox */\n}\n\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: rgb(83, 82, 82);\n}\n\n::-ms-input-placeholder { /* Microsoft Edge */\n  color: rgb(83, 82, 82);\n}\n\nspan.input-group-text {\n  padding: 0.7rem 1rem;\n}\n\n.display-flex {\n  display: flex;\n}\n\n.display-flex .btn {\n  height: 3rem;\n  position: relative;\n  top: 20px;\n}\n\n.review-item {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.review-item label {\n  font-weight: 500 !important;\n}\n\n.modal-body {\n  height: 400px;\n  overflow: auto;\n}\n\n.flex-container {\n  display: flex;\n}\n\n.flex-container > div {\n  background-color: #f6f6f6;\n  margin: 10px;\n  padding: 10px;\n  font-size: 12px;\n  border-radius: 10px;\n}\n\n.cross-icon {\n  text-align: right;\n  cursor: pointer;\n}\n\n.field_name {\n  font-weight: 600;\n  margin-bottom: 3px !important;\n  font-size: 14px;\n}\n\n.field-data label {\n  font-size: 14px !important;\n}\n\n.form-group {\n  margin-bottom: 4px !important;\n}\n\n.trow {\n  display: inline-block;\n}\n\n.trow > div {\n  display: inline-block;\n}\n\n.m5 {\n  margin: 5px;\n}\n\n.cursor {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0EscUJBQUEseUNBQUE7RUFDSSxzQkFBQTtFQUNBLFVBQUEsRUFBQSxZQUFBO0FBQUo7O0FBRkEsZ0JBQUEseUNBQUE7RUFDSSxzQkFBQTtFQUNBLFVBQUEsRUFBQSxZQUFBO0FBQUo7O0FBR0UseUJBQUEsNEJBQUE7RUFDRSxzQkFBQTtBQUFKOztBQUdFLDBCQUFBLG1CQUFBO0VBQ0Usc0JBQUE7QUFBSjs7QUFHRTtFQUNFLG9CQUFBO0FBQUo7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLDJCQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsMEJBQUE7QUFHRjs7QUFBQTtFQUNFLDZCQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFGQTtFQUNFLGVBQUE7QUFLRiIsImZpbGUiOiJ2aWV3LWFncmVlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0gLmZvcm0tZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG59XG4uaGVhZGVyIC5oZWFkaW5ne1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogIzc3Mzc4NDtcbn1cblxuLmhlYWRlciAuZWRpdC1pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGFiZWwge1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgIGNvbG9yOiByZ2IoODMsIDgyLCA4Mik7XG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICB9XG4gIFxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICBjb2xvcjogcmdiKDgzLCA4MiwgODIpO1xuICB9XG4gIFxuICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgY29sb3I6IHJnYig4MywgODIsIDgyKTtcbiAgfVxuXG4gIHNwYW4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGlzcGxheS1mbGV4IC5idG57XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi5yZXZpZXctaXRlbXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtYm9keSB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1jb250YWluZXIgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCBcbn1cbi5jcm9zcy1pY29ue1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZpZWxkX25hbWV7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5maWVsZC1kYXRhIGxhYmVse1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXB7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuXG4udHJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50cm93ID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm01e1xuICBtYXJnaW46IDVweDtcbn1cblxuLmN1cnNvcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";

/***/ }),

/***/ 58490:
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/add-edit-agreement/add-edit-agreement.component.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-template #clientGrp let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatClientGroup(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #rt let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"format(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #matter let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatMatter(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #sicTemplate let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatSIC(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #billingAttorneyTemplate let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatterEmployee(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #responsibleAttorney let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatEmployee(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #areaOfLawTemplate let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatterAreaOfLaw(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<ng-template #practiceGroupTemplate let-r=\"result\" let-t=\"term\">\n    <ngb-highlight [result]=\"formatterPracticeGroup(r)\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n<div [@routerTransition]>\n    <app-page-header *ngIf=\"!editForm\" [heading]=\"'Create New Record'\"></app-page-header>\n    <app-page-header *ngIf=\"editForm\" [previousHeading]=\"'Agreements'\" [previousLink]=\"viewAgreementLink\"\n        [heading]=\"'Edit Record'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n\n        <div class=\"card\">\n            <div *ngIf=\"!editForm\" class=\"card-header\">\n                Create New Record\n            </div>\n            <div *ngIf=\"editForm\" class=\"card-header\">\n                Edit Record\n                <div class=\"col-md-12\">\n                    <button class=\"btn btn-info\" style=\"float: right;\" (click)=\"back()\">Back</button>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" class=\"form-inline\" autocomplete=\"off\">\n                    <div class=\"row mb-2\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">*Client Group</label>\n                                <input type=\"text\" [ngbTypeahead]=\"searchClientGroup\" [editable]=\"false\"\n                                    [resultTemplate]=\"clientGrp\" (focus)=\"focus2$.next($event.target.value)\"\n                                    (click)=\"click2$.next($event.target.value)\" #instance2=\"ngbTypeahead\"\n                                    [inputFormatter]=\"formatClientGrp\" formControlName=\"clientGroup\"\n                                    class=\"form-control\">\n                                <div *ngIf=\"addEditForm.controls['clientGroup'].errors\n                                    && (submitted ||\n                                    addEditForm.controls['clientGroup'].dirty ||\n                                    addEditForm.controls['clientGroup'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['clientGroup'].errors?.required\n                                        ||\n                                        addEditForm.controls['clientGroup'].errors?.pattern\">\n                                        * clientGroup is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">*Client</label>\n                                <input type=\"text\" formControlName=\"client\" [ngbTypeahead]=\"search\" [editable]=\"false\"\n                                    [resultTemplate]=\"rt\" (focus)=\"focus$.next($event.target.value)\"\n                                    (click)=\"click$.next($event.target.value)\" #instance=\"ngbTypeahead\"\n                                    [inputFormatter]=\"formatter\" class=\"form-control\">\n                                <div *ngIf=\"addEditForm.controls['client'].errors &&\n                                    (submitted ||\n                                    addEditForm.controls['client'].dirty ||\n                                    addEditForm.controls['client'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['client'].errors?.required\n                                        ||\n                                        addEditForm.controls['client'].errors?.pattern\">\n                                        * client is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">*Client SIC Category</label>\n                                <input type=\"text\" formControlName=\"clientSic\" [ngbTypeahead]=\"searchSIC\"\n                                    [resultTemplate]=\"sicTemplate\" (focus)=\"focus1$.next($event.target.value)\"\n                                    (click)=\"click1$.next($event.target.value)\" #instance1=\"ngbTypeahead\"\n                                    [inputFormatter]=\"formatterSIC\" class=\"form-control\">\n                                <div *ngIf=\"addEditForm.controls['clientSic'].errors\n                            && (submitted ||\n                            addEditForm.controls['clientSic'].dirty ||\n                            addEditForm.controls['clientSic'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['clientSic'].errors?.required\n                                ||\n                                addEditForm.controls['clientSic'].errors?.pattern\">\n                                        * Client SIC Category is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\" *ngIf=\"!isMatterRecord\">\n                                <label for=\"name\">*Matter</label>\n                                <input type=\"text\" formControlName=\"matter\" [ngbTypeahead]=\"searchMatterRecords\"\n                                    (focus)=\"focusMatter$.next($event.target.value)\"\n                                    (click)=\"clickMatter$.next($event.target.value)\" #instanceMatter=\"ngbTypeahead\"\n                                    [resultTemplate]=\"matter\" [inputFormatter]=\"formatterMatter\" class=\"form-control\">\n                                <div *ngIf=\"addEditForm.controls['matter'].errors &&\n                            (submitted ||\n                            addEditForm.controls['matter'].dirty ||\n                            addEditForm.controls['matter'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['matter'].errors?.required\n                                ||\n                                addEditForm.controls['matter'].errors?.pattern\">\n                                        * matter is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\" *ngIf=\"isMatterRecord && !editForm\">\n                                <label for=\"name\">*Matter ID</label>\n                                <input type=\"text\" formControlName=\"matterId\" class=\"form-control form-control-lg\"\n                                    pattern=\"[0-9]+\">\n                                <div *ngIf=\"addEditForm.controls['matterId'].errors &&\n                            (submitted ||\n                            addEditForm.controls['matterId'].dirty ||\n                            addEditForm.controls['matterId'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['matterId'].errors?.required\n                                ||\n                                addEditForm.controls['matterId'].errors?.pattern\">\n                                        * matterId is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"col-md-6\">\n\n                            <div class=\"form-group\" *ngIf=\"isMatterRecord\">\n                                <label for=\"name\">*Matter Name</label>\n                                <input type=\"text\" formControlName=\"matterName\" class=\"form-control\">\n                                <div *ngIf=\"addEditForm.controls['matterName'].errors &&\n                                (submitted ||\n                                addEditForm.controls['matterName'].dirty ||\n                                addEditForm.controls['matterName'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['matterName'].errors?.required\n                                    ||\n                                    addEditForm.controls['matterName'].errors?.pattern\">\n                                        * matterName is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">*Responsible Partner</label>\n                                <input type=\"text\" formControlName=\"responsibleAttorney\"\n                                    [ngbTypeahead]=\"searchEmployeeResAtt\"\n                                    (focus)=\"focusResAtt$.next($event.target.value)\"\n                                    (click)=\"clickResAtt$.next($event.target.value)\" #instanceResAtt=\"ngbTypeahead\"\n                                    [resultTemplate]=\"responsibleAttorney\" [inputFormatter]=\"formatterEmployee\"\n                                    class=\"form-control\">\n                                <div *ngIf=\"addEditForm.controls['responsibleAttorney'].errors\n                                && (submitted ||\n                                addEditForm.controls['responsibleAttorney'].dirty\n                                ||\n                                addEditForm.controls['responsibleAttorney'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['responsibleAttorney'].errors?.required\n                                    ||\n                                    addEditForm.controls['responsibleAttorney'].errors?.pattern\">\n                                        * Responsible Partner is required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">*Billing Manager</label>\n                                <input type=\"text\" formControlName=\"billingAttorney\" class=\"form-control\"\n                                    [ngbTypeahead]=\"searchEmployeeBillAtt\"\n                                    (focus)=\"focusBillAtt$.next($event.target.value)\"\n                                    (click)=\"clickBillAtt$.next($event.target.value)\" #instanceBillAtt=\"ngbTypeahead\"\n                                    [resultTemplate]=\"billingAttorneyTemplate\" [inputFormatter]=\"formatterEmployee\">\n                                <div *ngIf=\"addEditForm.controls['billingAttorney'].errors\n                                    && (submitted ||\n                                    addEditForm.controls['billingAttorney'].dirty\n                                    ||\n                                    addEditForm.controls['billingAttorney'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['billingAttorney'].errors?.required\n                                        ||\n                                        addEditForm.controls['billingAttorney'].errors?.pattern\">\n                                        * Billing Manager is\n                                        required.\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                    </div>\n                    <div class=\"row mb-2\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">*Practice Group</label>\n                            <input type=\"text\" formControlName=\"practiceGroup\" class=\"form-control\"\n                                [ngbTypeahead]=\"searchPracticeGroup\"\n                                (focus)=\"focusPracticeGroup$.next($event.target.value)\"\n                                (click)=\"clickPracticeGroup$.next($event.target.value)\"\n                                #instancePracticeGroup=\"ngbTypeahead\" [resultTemplate]=\"practiceGroupTemplate\"\n                                [inputFormatter]=\"formatterPracticeGroup\">\n                            <div *ngIf=\"addEditForm.controls['practiceGroup'].errors\n                               && (submitted ||\n                               addEditForm.controls['practiceGroup'].dirty\n                               ||\n                               addEditForm.controls['practiceGroup'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['practiceGroup'].errors?.required\n                                   ||\n                                   addEditForm.controls['practiceGroup'].errors?.pattern\">\n                                    * Practice Group is\n                                    required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">*Area Of Law</label>\n                            <input type=\"text\" formControlName=\"areaOfLaw\" class=\"form-control\"\n                                [ngbTypeahead]=\"searchAreaOfLaw\" (focus)=\"focusAreaOfLaw$.next($event.target.value)\"\n                                (click)=\"clickAreaOfLaw$.next($event.target.value)\" #instanceAreaOfLaw=\"ngbTypeahead\"\n                                [resultTemplate]=\"areaOfLawTemplate\" [inputFormatter]=\"formatterAreaOfLaw\">\n                            <div *ngIf=\"addEditForm.controls['areaOfLaw'].errors\n                                && (submitted ||\n                                addEditForm.controls['areaOfLaw'].dirty\n                                ||\n                                addEditForm.controls['areaOfLaw'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['areaOfLaw'].errors?.required\n                                    ||\n                                    addEditForm.controls['areaOfLaw'].errors?.pattern\">\n                                    * Area of Law is\n                                    required.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row mb-2\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">*Agreement Start Date <span>(DD-MM-YYYY)</span></label>\n                            <input type=\"date\" class=\"form-control\" formControlName=\"agreementStartDate\"\n                                id=\"floatingInput\" max=\"{{addEditForm.value.expirationDate | date: 'YYY-MM-dd'}}\">\n\n                            <div *ngIf=\"addEditForm.controls['agreementStartDate'].errors\n                                && (submitted ||\n                                addEditForm.controls['agreementStartDate'].dirty\n                                ||\n                                addEditForm.controls['agreementStartDate'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['agreementStartDate'].errors?.required\n                                    ||\n                                    addEditForm.controls['agreementStartDate'].errors?.pattern\">\n                                    * agreementStartDate is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">*Agreement Expiration Date <span>(DD-MM-YYYY)</span></label>\n                            <input type=\"date\" class=\"form-control\" formControlName=\"expirationDate\" id=\"floatingInput\"\n                                min=\"{{addEditForm.value.agreementStartDate | date: 'YYY-MM-dd'}}\">\n                            <div *ngIf=\"addEditForm.controls['expirationDate'].errors\n                                && (submitted ||\n                                addEditForm.controls['expirationDate'].dirty ||\n                                addEditForm.controls['expirationDate'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['expirationDate'].errors?.required\n                                    ||\n                                    addEditForm.controls['expirationDate'].errors?.pattern\">\n                                    * Expiration Date is required.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row mb-2\">\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"name\">*Reminder Timing</label>\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"reminderTimingDay\" id=\"floatingSelect\">\n                                <option selected disabled value=\"\">Select Reminder Timing</option>\n                                <option value=\"30\">30 Days</option>\n                                <option value=\"60\">60 Days</option>\n                                <option value=\"90\">90 Days</option>\n                                <option value=\"120\">120 Days</option>\n                            </select>\n                            <div *ngIf=\"addEditForm.controls['reminderTimingDay'].errors\n                                && (submitted ||\n                                addEditForm.controls['reminderTimingDay'].dirty\n                                ||\n                                addEditForm.controls['reminderTimingDay'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['reminderTimingDay'].errors?.required\n                                    ||\n                                    addEditForm.controls['reminderTimingDay'].errors?.pattern\">\n                                    * Fee Arrangement Type is required.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n\n\n\n                    <div class=\"row mb-2\">\n                        <h4>Fee Details</h4>\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"name\">*Fee Arrangement Type</label>\n                            <select (change)=\"feeArrangementType($event, '')\" class=\"form-select form-control\n                                form-control-lg\" formControlName=\"feeArrangementType\" id=\"floatingSelect\">\n                                <option selected disabled value=\"\">Select Fee\n                                    Arrangement Type</option>\n                                <option value=\"{{hourlyBilling.name}}\" *ngFor=\"let hourlyBilling of _hourlyBilling;\n                                    index as i\">\n                                    {{hourlyBilling.name}}</option>\n                            </select>\n                            <div *ngIf=\"addEditForm.controls['feeArrangementType'].errors\n                                && (submitted ||\n                                addEditForm.controls['feeArrangementType'].dirty\n                                ||\n                                addEditForm.controls['feeArrangementType'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['feeArrangementType'].errors?.required\n                                    ||\n                                    addEditForm.controls['feeArrangementType'].errors?.pattern\">\n                                    * Fee Arrangement Type is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentHourlyBilled ||\n                            isFeeArrangmentFeeCollar ||\n                            isFeeArrangmentCappedFee\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\">*Base Rate Type</label>\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"baseRateType\" id=\"floatingSelect\">\n                                <option value=\"\" selected disabled>Select Base\n                                    Rate Type</option>\n                                <option value=\"{{baseRate.name}}\" *ngFor=\"let\n                                    baseRate of _baseRate; index as i\">\n                                    {{baseRate.name}}</option>\n                            </select>\n                            <div *ngIf=\"addEditForm.controls['baseRateType'].errors\n                                && (submitted ||\n                                addEditForm.controls['baseRateType'].dirty\n                                ||\n                                addEditForm.controls['baseRateType'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['baseRateType'].errors?.required\n                                    ||\n                                    addEditForm.controls['baseRateType'].errors?.pattern\">\n                                    * Base Rate Type is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentFeeCollar\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\">*Target Fee</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\">$</span>\n                                </div>\n                                <input type=\"text\"\n                                    onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode==46 || event.charCode == 8 || event.charCode == 0)\"\n                                    maxlength=\"7\" min=\"0\" formControlName=\"targetFee\"\n                                    class=\"form-control form-control-lg\">\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['targetFee'].errors\n                                && (submitted ||\n                                addEditForm.controls['targetFee'].dirty\n                                ||\n                                addEditForm.controls['targetFee'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['targetFee'].errors?.required\n                                    ||\n                                    addEditForm.controls['targetFee'].errors?.pattern\">\n                                    * Target Fee is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentFeeCollar\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\">*Collar percentage (in %)</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\">%</span>\n                                </div>\n                                <input type=\"text\"\n                                    onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode==46 || event.charCode == 8 || event.charCode == 0)\"\n                                    maxlength=\"3\" min=\"0\" max=\"100\" formControlName=\"collarPercentage\"\n                                    class=\"form-control form-control-lg\">\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['collarPercentage'].errors\n                                && (submitted ||\n                                addEditForm.controls['collarPercentage'].dirty\n                                ||\n                                addEditForm.controls['collarPercentage'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['collarPercentage'].errors?.required\n                                    ||\n                                    addEditForm.controls['collarPercentage'].errors?.pattern\">\n                                    * Collar Percentage is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentCappedFee\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\"> *Fee Cap Amount</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\">$</span>\n                                </div>\n                                <input type=\"text\"\n                                    onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode==46 || event.charCode == 8 || event.charCode == 0)\"\n                                    maxlength=\"7\" formControlName=\"feeCapAmount\" class=\"form-control form-control-lg\">\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['feeCapAmount'].errors\n                                && (submitted ||\n                                addEditForm.controls['feeCapAmount'].dirty\n                                ||\n                                addEditForm.controls['feeCapAmount'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['feeCapAmount'].errors?.required\n                                    ||\n                                    addEditForm.controls['feeCapAmount'].errors?.pattern\">\n                                    * Fee Cap Amount is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentHourlyBilled ||\n                            isFeeArrangmentFeeCollar ||\n                            isFeeArrangmentCappedFee\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\">*Discount (in %)</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\">%</span>\n                                </div>\n                                <input type=\"text\"\n                                    onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode==46 || event.charCode == 8 || event.charCode == 0)\"\n                                    maxlength=\"3\" min=\"0\" max=\"100\" formControlName=\"discount\"\n                                    class=\"form-control form-control-lg\">\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['discount'].errors\n                                && (submitted ||\n                                addEditForm.controls['discount'].dirty\n                                ||\n                                addEditForm.controls['discount'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['discount'].errors?.required\n                                    ||\n                                    addEditForm.controls['discount'].errors?.pattern\">\n                                    * Discount is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentHourlyBilled ||\n                            isFeeArrangmentFeeCollar ||\n                            isFeeArrangmentCappedFee\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\" class=\"mb-2\">*Other Discount Detail</label><br />\n                            <div class=\"form-check form-check-inline\">\n                                <input (change)=\"discountType($event)\" class=\"form-check-input\" type=\"radio\"\n                                    value=\"Discount built into rates\" formControlName=\"discountType\" id=\"discountType1\"\n                                    checked>\n                                <label class=\"form-check-label\" for=\"discountType1\">\n                                    Discount built into rates\n                                </label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input (change)=\"discountType($event)\" class=\"form-check-input\" type=\"radio\"\n                                    value=\"Time of billing discount\" formControlName=\"discountType\" id=\"discountType2\">\n                                <label class=\"form-check-label\" for=\"discountType2\">\n                                    Time of billing discount\n                                </label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input (change)=\"discountType($event, '')\" class=\"form-check-input\" type=\"radio\"\n                                    value=\"Other\" formControlName=\"discountType\" id=\"discountType3\">\n                                <label class=\"form-check-label\" for=\"discountType3\">\n                                    Other\n                                </label>\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['discountType'].errors\n                                && (submitted ||\n                                addEditForm.controls['discountType'].dirty\n                                ||\n                                addEditForm.controls['discountType'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['discountType'].errors?.required\n                                    ||\n                                    addEditForm.controls['discountType'].errors?.pattern\">\n                                    * Discount Type is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"(isFeeArrangmentHourlyBilled ||\n                            isFeeArrangmentFeeCollar ||\n                            isFeeArrangmentCappedFee) && discountTypeOther\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">Other Discount Detail Description</label>\n                            <input type=\"text\" placeholder=\"\" formControlName=\"otherDiscount\" class=\"form-control\">\n                            <div *ngIf=\"addEditForm.controls['otherDiscount'].errors\n                                && (submitted ||\n                                addEditForm.controls['otherDiscount'].dirty\n                                ||\n                                addEditForm.controls['otherDiscount'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['otherDiscount'].errors?.required\n                                    ||\n                                    addEditForm.controls['otherDiscount'].errors?.pattern\">\n                                    * Discount Detail is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentHourlyBilled\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">Rate Card Detail</label>\n                            <input type=\"text\" class=\"form-control\n                                form-control-lg\" formControlName=\"rateCardDetails\">\n                            <div *ngIf=\"addEditForm.controls['rateCardDetails'].errors\n                                && (submitted ||\n                                addEditForm.controls['rateCardDetails'].dirty\n                                ||\n                                addEditForm.controls['rateCardDetails'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['rateCardDetails'].errors?.required\n                                    ||\n                                    addEditForm.controls['rateCardDetails'].errors?.pattern\">\n                                    * Rate Card Detail is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentHourlyBilled\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">Capped Rate Detail</label>\n                            <input type=\"text\" formControlName=\"cappedRateDetail\" class=\"form-control\n                                form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['cappedRateDetail'].errors\n                                && (submitted ||\n                                addEditForm.controls['cappedRateDetail'].dirty\n                                ||\n                                addEditForm.controls['cappedRateDetail'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['cappedRateDetail'].errors?.required\n                                    ||\n                                    addEditForm.controls['cappedRateDetail'].errors?.pattern\">\n                                    * Capped Rate Detail is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentFixedFee\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">*Fixed Fee Type</label>\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"fixedFeeType\" id=\"floatingSelect\">\n                                <option selected disabled value=\"\">Select Fee Type</option>\n                                <option value=\"Matter\">Matter</option>\n                                <option value=\"Annual\">Annual</option>\n                                <option value=\"Monthly\">Monthly</option>\n                                <option value=\"Portfolio\">Portfolio</option>\n                                <option value=\"Phase/Milestone\">Phase/Milestone</option>\n                            </select>\n                            <div *ngIf=\"addEditForm.controls['fixedFeeType'].errors\n                                && (submitted ||\n                                addEditForm.controls['fixedFeeType'].dirty\n                                ||\n                                addEditForm.controls['fixedFeeType'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['fixedFeeType'].errors?.required\n                                    ||\n                                    addEditForm.controls['fixedFeeType'].errors?.pattern\">\n                                    * Fee Type is required.\n                                </span>\n                            </div>\n                        </div>\n                      \n                        <div *ngIf=\"isFeeArrangmentFixedFee\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">Fixed Fee Detail</label>\n                            <input type=\"text\" formControlName=\"fixedFeeDetails\" class=\"form-control form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['fixedFeeDetails'].errors\n                                && (submitted ||\n                                addEditForm.controls['fixedFeeDetails'].dirty\n                                ||\n                                addEditForm.controls['fixedFeeDetails'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['fixedFeeDetails'].errors?.required\n                                    ||\n                                    addEditForm.controls['fixedFeeDetails'].errors?.pattern\">\n                                    * Fixed Fee Details is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentFixedFee\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">*Fee Type Value</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\">$</span>\n                                </div>\n                                <input type=\"text\"\n                                    onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode==46 || event.charCode == 8 || event.charCode == 0)\"\n                                    maxlength=\"7\" min=\"0\" max=\"100\" formControlName=\"fixedFeeValue\"\n                                    class=\"form-control\">\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['fixedFeeValue'].errors\n                            && (submitted ||\n                            addEditForm.controls['fixedFeeValue'].dirty\n                            ||\n                            addEditForm.controls['fixedFeeValue'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['fixedFeeValue'].errors?.required\n                                ||\n                                addEditForm.controls['fixedFeeValue'].errors?.pattern\">\n                                    * Fee Type Value is required.\n                                </span>\n                            </div>\n                        </div>\n                        <!-- <div *ngIf=\"isFeeArrangmentCappedFee\" class=\"form-group\n                            col-sm-6\">\n                    <label for=\"name\">*Capped Fee Detail</label>\n                    <input type=\"text\" formControlName=\"cappedFeeDetails\" class=\"form-control form-control-lg\">\n                    <div *ngIf=\"addEditForm.controls['cappedFeeDetails'].errors\n                                && (submitted ||\n                                addEditForm.controls['cappedFeeDetails'].dirty\n                                ||\n                                addEditForm.controls['cappedFeeDetails'].touched)\">\n                        <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['cappedFeeDetails'].errors?.required\n                                    ||\n                                    addEditForm.controls['cappedFeeDetails'].errors?.pattern\">\n                            * Capped Fee Details is required.\n                        </span>\n                    </div>\n                </div> -->\n                        <div *ngIf=\"isFeeArrangmentFeeCollar\" class=\"form-group\n                            col-sm-6\">\n                            <label for=\"name\">Fee Collar Detail</label>\n                            <input type=\"text\" formControlName=\"feeCollarDetail\" class=\"form-control form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['feeCollarDetail'].errors\n                                && (submitted ||\n                                addEditForm.controls['feeCollarDetail'].dirty\n                                ||\n                                addEditForm.controls['feeCollarDetail'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['feeCollarDetail'].errors?.required\n                                    ||\n                                    addEditForm.controls['feeCollarDetail'].errors?.pattern\">\n                                    * Capped Fee Details is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentFullContingency\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">*Full Contingency Detail </label>\n                            <input type=\"text\" formControlName=\"fullContingencyDetail\"\n                                class=\"form-control form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['fullContingencyDetail'].errors\n                                && (submitted ||\n                                addEditForm.controls['fullContingencyDetail'].dirty\n                                ||\n                                addEditForm.controls['fullContingencyDetail'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['fullContingencyDetail'].errors?.required\n                                    ||\n                                    addEditForm.controls['fullContingencyDetail'].errors?.pattern\">\n                                    * Full Contingency Detail is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isFeeArrangmentPartialContingency\" class=\"form-group col-sm-6\">\n                            <label for=\"name\">*Partial Contingency Detail\n                            </label>\n                            <input type=\"text\" formControlName=\"partialContingencyDetail\" class=\"form-control\n                                form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['partialContingencyDetail'].errors\n                                && (submitted ||\n                                addEditForm.controls['partialContingencyDetail'].dirty\n                                ||\n                                addEditForm.controls['partialContingencyDetail'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['partialContingencyDetail'].errors?.required\n                                    ||\n                                    addEditForm.controls['partialContingencyDetail'].errors?.pattern\">\n                                    * Partial Contingency Detail is required.\n                                </span>\n                            </div>\n                        </div>\n                        <hr>\n                        <!-- <div *ngIf=\"isFeeArrangmentHourlyBilled ||\n                            isFeeArrangmentCappedFee ||\n                            isFeeArrangmentFeeCollar\" class=\"form-group\"> -->\n                        <div class=\"form-group\">\n                            <label for=\"name\" class=\"mb-2\">*Rate Adjustment\n                                During Term</label><br />\n\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" value=\"Yes\"\n                                    (change)=\"rateAdjustmentDuringTerm($event, '')\" type=\"radio\"\n                                    formControlName=\"rateAdjustmentDuringTerm\" id=\"flexRadioDefault1\">\n                                <label class=\"form-check-label\" for=\"flexRadioDefault1\">\n                                    Yes\n                                </label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" value=\"No\"\n                                    (change)=\"rateAdjustmentDuringTerm($event, '')\" type=\"radio\"\n                                    formControlName=\"rateAdjustmentDuringTerm\" id=\"flexRadioDefault2\" checked>\n                                <label class=\"form-check-label\" for=\"flexRadioDefault2\">\n                                    No\n                                </label>\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['rateAdjustmentDuringTerm'].errors\n                                && (submitted ||\n                                addEditForm.controls['rateAdjustmentDuringTerm'].dirty\n                                ||\n                                addEditForm.controls['rateAdjustmentDuringTerm'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['rateAdjustmentDuringTerm'].errors?.required\n                                    ||\n                                    addEditForm.controls['rateAdjustmentDuringTerm'].errors?.pattern\">\n                                    * Rate Reminder During Term is required.\n                                </span>\n                            </div>\n                        </div>\n                        <!-- Adjustment-->\n                        <div>\n                            <div *ngIf=\"isRateAdjustmentDuringTerm\" formArrayName=\"adjustmentArray\">\n                                <div *ngFor=\"let adjustment of getAdjustmentArray().controls; let i=index\"\n                                    [formGroupName]=\"i\">\n                                    <div class=\"form-group col-sm-6\">\n                                        <label for=\"name\">*Adjustment Date (DD-MM-YYYY)\n                                        </label>\n                                        <input type=\"date\" formControlName=\"adjustmentDate\" class=\"form-control\n                                form-control-lg\" />\n                                        <div *ngIf=\"getValidity(i, 'adjustmentDate')?.errors\n                                && (submitted ||\n                                getValidity(i, 'adjustmentDate')?.dirty\n                                ||\n                                getValidity(i, 'adjustmentDate')?.touched)\">\n                                            <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentDate')?.errors?.required\n                                    ||\n                                    getValidity(i, 'adjustmentDate')?.errors?.pattern\">\n                                                * Adjustment Dates is required.\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-sm-6\">\n                                        <label for=\"name\">*Adjustment Details\n                                        </label>\n                                        <input type=\"text\" formControlName=\"adjustmentDetails\" class=\"form-control\n                                    form-control-lg\" />\n                                        <div *ngIf=\"getValidity(i, 'adjustmentDetails')?.errors\n                                    && (submitted ||\n                                    getValidity(i, 'adjustmentDetails')?.dirty\n                                    ||\n                                    getValidity(i, 'adjustmentDetails')?.touched)\">\n                                            <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentDetails')?.errors?.required\n                                        ||\n                                        getValidity(i, 'adjustmentDetails')?.errors?.pattern\">\n                                                * Adjustment Dates is required.\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-sm-6\">\n                                        <label for=\"name\" class=\"mb-2\">*Adjustment Reminder</label><br />\n                                        <div class=\"form-check form-check-inline\">\n                                            <input class=\"form-check-input\" type=\"radio\" value=\"Yes\"\n                                                formControlName=\"adjustmentReminder\" id=\"adjustmentReminder1\"\n                                                (change)=\"rateAdjustmentDuringTermReminder($event)\"\n                                                min=\"{{addEditForm.value.agreementStartDate | date: 'YYY-MM-dd'}}\"\n                                                max=\"{{addEditForm.value.expirationDate | date: 'YYY-MM-dd'}}\">\n                                            <label class=\"form-check-label\" for=\"adjustmentReminder1\">\n                                                Yes\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check form-check-inline\">\n                                            <!-- (change)=\"rateAdjustmentDuringTermReminder($event)\" -->\n                                            <input class=\"form-check-input\" type=\"radio\" value=\"No\"\n                                                formControlName=\"adjustmentReminder\" id=\"adjustmentReminder2\" checked>\n                                            <label class=\"form-check-label\" for=\"adjustmentReminder2\">\n                                                No\n                                            </label>\n                                        </div>\n                                        <div *ngIf=\"getValidity(i, 'adjustmentReminder')?.errors\n                                    && (submitted ||\n                                    getValidity(i, 'adjustmentReminder')?.dirty\n                                    ||\n                                    getValidity(i, 'adjustmentReminder')?.touched)\">\n                                            <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentReminder')?.errors?.required\n                                        ||\n                                        getValidity(i, 'adjustmentReminder')?.errors?.pattern\">\n                                                * Adjustment Reminder is required.\n                                            </span>\n                                        </div>\n                                        <div *ngIf=\"getValidity(i, 'adjustmentReminderDate')?.errors\n                                        \">\n                                            <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentReminderDate')?.errors?.required\n                                            ||\n                                            getValidity(i, 'adjustmentReminderDate')?.errors?.pattern\">\n                                                * Reminder Date is required.\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <!-- *ngIf=\"getValidity(i, 'adjustmentReminder')?.value === 'Yes'\" -->\n                                    <div class=\"row mt-2\" *ngIf=\"getValidity(i, 'adjustmentReminder')?.value === 'Yes'\">\n                                        <h4>*Rate Adjustment Reminder </h4>\n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"name\">Reminder Date</label>\n                                            <input type=\"date\" class=\"form-control\"\n                                                formControlName=\"adjustmentReminderDate\" id=\"floatingInput\">\n\n                                            <div *ngIf=\"getValidity(i, 'adjustmentReminderDate')?.errors\n                                        && (submitted ||\n                                        getValidity(i, 'adjustmentReminderDate')?.dirty\n                                        ||\n                                        getValidity(i, 'adjustmentReminderDate')?.touched)\">\n                                                <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentReminderDate')?.errors?.required\n                                            ||\n                                            getValidity(i, 'adjustmentReminderDate')?.errors?.pattern\">\n                                                    * Reminder Date is required.\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"name\">Expiration Reminder</label>\n                                            <input type=\"date\" class=\"form-control\"\n                                                min=\"{{getValidity(i, 'adjustmentReminderDate')?.value | date: 'YYY-MM-dd'}}\"\n                                                formControlName=\"expirationReminderDate\" id=\"floatingInput\">\n                                            <div *ngIf=\"getValidity(i, 'expirationReminderDate')?.errors\n                                        && (submitted ||\n                                        getValidity(i, 'expirationReminderDate')?.dirty\n                                        ||\n                                        getValidity(i, 'expirationReminderDate')?.touched)\">\n                                                <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'expirationReminderDate')?.errors?.required\n                                            ||\n                                            getValidity(i, 'expirationReminderDate')?.errors?.pattern\">\n                                                    * Expiration Reminder is required.\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"name\">Reminder Email Recipients</label>\n                                            <input type=\"text\" formControlName=\"adjustmentReminderEmailRecipient\"\n                                                class=\"form-control form-control-lg\">\n                                            <div *ngIf=\"getValidity(i, 'adjustmentReminderEmailRecipient')?.errors\n                                        && (submitted ||\n                                        getValidity(i, 'adjustmentReminderEmailRecipient')?.dirty\n                                        ||\n                                        getValidity(i, 'adjustmentReminderEmailRecipient')?.touched)\">\n                                                <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentReminderEmailRecipients')?.errors?.required\n                                            ||\n                                            getValidity(i, 'adjustmentReminderEmailRecipient')?.errors?.pattern\">\n                                                    * Email Recipients field is required.\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"name\">*Reminder Email Content</label>\n                                            <textarea class=\"form-control rounded-2\"\n                                                formControlName=\"adjustmentReminderEmailContent\"\n                                                id=\"exampleFormControlTextarea1\" rows=\"4\"></textarea>\n                                            <div *ngIf=\"getValidity(i, 'adjustmentReminderEmailContent')?.errors\n                                        && (submitted ||\n                                        getValidity(i, 'adjustmentReminderEmailContent')?.dirty\n                                        ||\n                                        getValidity(i, 'adjustmentReminderEmailContent')?.touched)\">\n                                                <span class=\" text-danger error\" *ngIf=\"getValidity(i, 'adjustmentReminderEmailContent')?.errors?.required\n                                            ||\n                                            getValidity(i, 'adjustmentReminderEmailContent')?.errors?.pattern\">\n                                                    * Rate Adjustment Reminder\n                                                    Email Content is required.\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <button *ngIf=\"getAdjustmentArray().controls.length > 1\"\n                                        (click)=\"removeAdjustmentRow(index)\"> Remove Adjustment </button>\n                                </div>\n                                <button (click)=\"addAdjustmentRow()\"> Add Adjustment </button>\n                            </div>\n                        </div>\n                        <!-- Adjustment-->\n                        <hr>\n                    </div>\n\n                    <div class=\"row mb-2\">\n                        <h4>Billing Details</h4>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">*Billing Frequency</label>\n                            <select (click)=\"billingFrequency($event, '')\"\n                                class=\"form-select form-control form-control-lg\" formControlName=\"billingFrequency\"\n                                id=\"floatingSelect\">\n                                <option value=\"\" selected disabled>Select\n                                    Billing Frequency</option>\n                                <option value=\"{{billingFrequency.name}}\" *ngFor=\"let billingFrequency of\n                                    _billingFrequencies; index as i\">\n                                    {{billingFrequency.name}}</option>\n                            </select>\n                        </div>\n                        <div *ngIf=\"isBillingFreOther\" class=\"form-group col-md-6\">\n                            <label for=\"name\">*Billing Frequency Other</label>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Billing Frequency Detail\"\n                                formControlName=\"billingFrequencyOther\" ([ngModel])=\"billingFrequencyOther\"\n                                id=\"flexRadioDefault67\">\n                            <div *ngIf=\"addEditForm.controls['billingFrequency'].errors\n                                && (submitted ||\n                                addEditForm.controls['billingFrequency'].dirty\n                                ||\n                                addEditForm.controls['billingFrequency'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['billingFrequency'].errors?.required\n                                    ||\n                                    addEditForm.controls['billingFrequency'].errors?.pattern\">\n                                    * Billing Frequency is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"name\" class=\"mb-2\">*Billing Method</label><br />\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"billingMethod\" id=\"floatingSelect\"\n                                (change)=\"billingMethod($event, '')\">\n                                <option selected disabled value=\"\">Select\n                                    Billing Method</option>\n                                <option value=\"{{billingMethod.name}}\" *ngFor=\"let billingMethod of\n                                    _billingMethods; index as i\">\n                                    {{billingMethod.name}}</option>\n                            </select>\n                            <input class=\"form-control mt-2\" type=\"text\" placeholder=\"Other Billing Method\"\n                                *ngIf=\"isBillingMethodOther\" ([ngModel])=\"billingMethodOther\" id=\"flexRadioDefault1\">\n                            <div *ngIf=\"addEditForm.controls['billingMethod'].errors\n                                && (submitted ||\n                                addEditForm.controls['billingMethod'].dirty\n                                ||\n                                addEditForm.controls['billingMethod'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['billingMethod'].errors?.required\n                                    ||\n                                    addEditForm.controls['billingMethod'].errors?.pattern\">\n                                    * Billing Method is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"name\">*Billing Currency</label>\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"billingCurrency\" id=\"floatingSelect\">\n                                <option value=\"\" selected disabled> Select\n                                    Billing Currency</option>\n                                <option value=\"{{billingCurrency.name}}\" *ngFor=\"let billingCurrency of\n                                    _billingCurrency; index as i\">\n                                    {{billingCurrency.name}}</option>\n                                <!-- <option value=\"USD\">USD</option>\n                                <option value=\"EUR\">EUR</option>\n                                <option value=\"GBP\">GBP</option>\n                                <option value=\"RMB\">RMB</option>\n                                <option value=\"AUS\">AUS</option>\n                                <option value=\"JPY\">JPY</option> -->\n                            </select>\n                            <div *ngIf=\"addEditForm.controls['billingCurrency'].errors\n                                && (submitted ||\n                                addEditForm.controls['billingCurrency'].dirty\n                                ||\n                                addEditForm.controls['billingCurrency'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['billingCurrency'].errors?.required\n                                    ||\n                                    addEditForm.controls['billingCurrency'].errors?.pattern\">\n                                    * Billing Currency is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"name\" class=\"mb-2\">*Payor Type</label><br />\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"payorType\" id=\"floatingSelect\"\n                                (change)=\"payorType($event)\">\n                                <option selected disabled value=\"\">Select Payor\n                                    Type</option>\n                                <option value=\"{{payorType.name}}\" *ngFor=\"let\n                                    payorType of _payorType; index as i\">\n                                    {{payorType.name}}</option>\n                                <!-- <option value=\"Client\">Client</option>\n                                <option value=\"3rd Party\">3rd Party</option>\n                                <option value=\"Multiple\">Multiple</option>\n                                <option value=\"Multiple\">Multiple</option>\n                                <option value=\"Other\">Other</option> -->\n                            </select>\n                            <div *ngIf=\"addEditForm.controls['payorType'].errors\n                                && (submitted ||\n                                addEditForm.controls['payorType'].dirty ||\n                                addEditForm.controls['payorType'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['payorType'].errors?.required\n                                    ||\n                                    addEditForm.controls['payorType'].errors?.pattern\">\n                                    * Payor Type is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"isPayorTypeOther\" class=\"form-group\">\n                            <label for=\"name\">*Payor Detail</label>\n                            <input type=\"text\" formControlName=\"payorDetail\" class=\"form-control form-control-lg\">\n                            <div *ngIf=\"addEditForm.controls['payorDetail'].errors\n                                && (submitted ||\n                                addEditForm.controls['payorDetail'].dirty ||\n                                addEditForm.controls['payorDetail'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['payorDetail'].errors?.required\n                                    ||\n                                    addEditForm.controls['payorDetail'].errors?.pattern\">\n                                    * payorDetail is required.\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"name\" class=\"mb-2\">*Is Firm a\n                                Preferred Provider?</label><br />\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"radio\" value=\"Yes\"\n                                    formControlName=\"preferredProvider\" id=\"flexRadioDefault1\" checked>\n                                <label class=\"form-check-label\" for=\"flexRadioDefault1\">\n                                    Yes\n                                </label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"radio\" value=\"No\"\n                                    formControlName=\"preferredProvider\" id=\"flexRadioDefault2\">\n                                <label class=\"form-check-label\" for=\"flexRadioDefault2\">\n                                    No\n                                </label>\n                            </div>\n                            <div *ngIf=\"addEditForm.controls['preferredProvider'].errors\n                                && (submitted ||\n                                addEditForm.controls['preferredProvider'].dirty\n                                ||\n                                addEditForm.controls['preferredProvider'].touched)\">\n                                <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['preferredProvider'].errors?.required\n                                    ||\n                                    addEditForm.controls['preferredProvider'].errors?.pattern\">\n                                    * Preferred Provider is required.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n                    <h4>Attachments</h4>\n                    <ng-container *ngIf=\"isLoadingAttachment\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div class=\"row mb-2\" *ngIf=\"!isLoadingAttachment\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"name\">Attachment Type</label>\n                            <select class=\"form-select form-control\n                                form-control-lg\" formControlName=\"attachmentType\" id=\"floatingSelect\">\n                                <ng-container *ngFor=\"let option of _attachmentType\">\n                                    <option [selected]=\"option.label == 'Engagement Letter'\" [value]=\"option.value\">\n                                        {{option.label}}</option>\n                                </ng-container>\n                            </select>\n                        </div>\n                        <div *ngIf=\"addEditForm.value.attachmentType == 'Other'\" class=\"form-group col-md-2\">\n                            <label for=\"name\">Other</label>\n                            <input type=\"text\" formControlName=\"attachmentTypeOther\"\n                                class=\"form-control form-control-lg\">\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"name\">Attachment</label>\n                            <input type=\"file\" (change)=\"getAttachment($event)\" name=\"attachmentFile\"\n                                class=\"form-control form-control-lg\"\n                                accept=\"image/png, image/jpeg,application/pdf,application/vnd.ms-excel, application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\n                                #file ngModel [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                    </div>\n                    <div *ngIf=\"attachmentArray.length > 0\" class=\"flex-container\">\n                        <div *ngFor=\"let item of attachmentArray;let i=index\">\n                            <div (click)=\"removeAttachment(i)\" class=\"cross-icon\"><img class=\"text-center\"\n                                    src=\"assets/images/cross-icon.png\"></div>\n                            <a (click)=\"accessFileURL(item.name)\">\n                                <img class=\"text-center\" src=\"assets/images/document-icon.png\">\n                            </a>\n                            <p>{{item?.name}}</p>\n                            <p>{{item?.type}}</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2 py-2 text-right\">\n                        <button type=\"button\" (click)=\"open(content)\" class=\"btn\n                            btn-primary\">Review</button>\n                        <button type=\"button\" routerLink=\"/dashboard/search\" class=\"btn\n                            btn-secondary\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Review Client</h4>\n        <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"modal.dismiss()\"></button>\n    </div>\n    <div class=\"modal-body\">\n        <h4>Client Details</h4>\n        <div class=\"form-group review-item\">\n            <label>Client Group:</label> {{this.addEditForm.value.clientGroup?.name ||\n            this.addEditForm.value.clientGroup}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value?.client?.name\" class=\"form-group review-item\">\n            <label>Client Name:</label> {{this.addEditForm.value.client?.name || this.addEditForm.value.client}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.matterId || this.addEditForm.value.matter?.matterId\"\n            class=\"form-group review-item\">\n            <label>Matter ID:</label> {{this.addEditForm.value.matterId || this.addEditForm.value.matter?.matterId}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.matterName || this.addEditForm.value.matter?.name\"\n            class=\"form-group review-item\">\n            <label>Matter Name:</label> {{this.addEditForm.value.matterName || this.addEditForm.value.matter?.name}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.clientSic?.description||this.addEditForm.value.clientSic\"\n            class=\"form-group review-item\">\n            <label>Client SIC Category:</label> {{this.addEditForm.value.clientSic?.description ||\n            this.addEditForm.value.clientSic}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.responsibleAttorney\" class=\"form-group review-item\">\n            <label>Responsible Partner:</label> {{this.addEditForm.value.responsibleAttorney?.name ||\n            this.addEditForm.value.responsibleAttorney}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.billingAttorney\" class=\"form-group review-item\">\n            <label>Billing Manager:</label> {{this.addEditForm.value.billingAttorney?.name ||\n            this.addEditForm.value.billingAttorney}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.areaOfLaw\" class=\"form-group review-item\">\n            <label>Area Of Law:</label> {{this.addEditForm.value.areaOfLaw?.name || this.addEditForm.value.areaOfLaw}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.practiceGroup\" class=\"form-group review-item\">\n            <label>Practice Group:</label> {{this.addEditForm.value.practiceGroup?.name ||\n            this.addEditForm.value.practiceGroup}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.agreementStartDate\" class=\"form-group review-item\">\n            <label>Agreement Start Date (MM/DD/YYYY):</label> {{this.addEditForm.value.agreementStartDate |\n            date:'MM/dd/YYYY'}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.expirationDate\" class=\"form-group review-item\">\n            <label>Agreement Expiration Date (MM/DD/YYYY):</label> {{this.addEditForm.value.expirationDate |\n            date:'MM/dd/YYYY'}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.reminderTimingDay\" class=\"form-group review-item\">\n            <label>Reminder Timing:</label> {{this.addEditForm.value.reminderTimingDay}}&nbsp;days\n        </div>\n        <hr>\n        <h4>Fee Details</h4>\n        <div *ngIf=\"this.addEditForm.value.feeArrangementType\" class=\"form-group review-item\">\n            <label>Fee Arrangement Type:</label> {{this.addEditForm.value.feeArrangementType}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.baseRateType\" class=\"form-group review-item\">\n            <label>Base Rate Type:</label> {{this.addEditForm.value.baseRateType}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.discount\" class=\"form-group review-item\">\n            <label>Discount(%):</label> {{this.addEditForm.value.discount}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.discountType\" class=\"form-group review-item\">\n            <label>Discount Type:</label> {{this.addEditForm.value.discountType}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.otherDiscount\" class=\"form-group review-item\">\n            <label>Other Discount:</label> {{this.addEditForm.value.otherDiscount}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.feeArrangementDetail\" class=\"form-group review-item\">\n            <label>Fee Arrangement Detail:</label> {{this.addEditForm.value.feeArrangementDetail}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.rateCardDetails\" class=\"form-group review-item\">\n            <label>Rate Card Detail:</label> {{this.addEditForm.value.rateCardDetails}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.cappedRateDetail\" class=\"form-group review-item\">\n            <label>Capped Rate Detail:</label> {{this.addEditForm.value.cappedRateDetail}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.feeCapAmount\" class=\"form-group review-item\">\n            <label>Fee Cap Amount($):</label> {{this.addEditForm.value.feeCapAmount}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.targetFee\" class=\"form-group review-item\">\n            <label>Target Fee($):</label> {{this.addEditForm.value.targetFee}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.collarPercentage\" class=\"form-group review-item\">\n            <label>Collar Percentage(%):</label> {{this.addEditForm.value.collarPercentage}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.rateAdjustmentDuringTerm\" class=\"form-group review-item\">\n            <label>Rate Reminder During Term:</label> {{this.addEditForm.value.rateAdjustmentDuringTerm}}\n        </div>\n        <!----->\n        <div\n            *ngIf=\"this.addEditForm.value.rateAdjustmentDuringTerm =='Yes' || this.addEditForm.value.rateAdjustmentDuringTerm == true\">\n            <div *ngFor=\"let adjustment of getAdjustmentArray().controls; let i=index\">\n                <div *ngIf=\"getValidity(i, 'adjustmentDate')?.value\" class=\"form-group review-item\">\n                    <label>Adjustment Date (MM/DD/YYYY):</label> {{getValidity(i, 'adjustmentDate')?.value |\n                    date:'MM/dd/YYYY'}}\n                </div>\n                <div *ngIf=\"getValidity(i, 'adjustmentDetails')?.value \" class=\"form-group review-item\">\n                    <label>Adjustment Details:</label> {{getValidity(i, 'adjustmentDetails')?.value}}\n                </div>\n                <div *ngIf=\"getValidity(i, 'adjustmentReminder')?.value \" class=\"form-group review-item\">\n                    <label>Adjustment Reminder:</label> {{getValidity(i, 'adjustmentReminder')?.value}}\n                </div>\n                <div *ngIf=\"getValidity(i, 'adjustmentReminderDate')?.value \" class=\"form-group review-item\">\n                    <label>Adjustment Reminder Date (MM/DD/YYYY):</label>\n                    {{getValidity(i, 'adjustmentReminderDate')?.value |\n                    date:'MM/dd/YYY'}}\n                </div>\n                <div *ngIf=\"getValidity(i, 'expirationReminderDate')?.value \" class=\"form-group review-item\">\n                    <label>Adjustment Reminder Date (MM/DD/YYYY):</label>\n                    {{getValidity(i, 'expirationReminderDate')?.value |\n                    date:'MM/dd/YYY'}}\n                </div>\n\n                <div *ngIf=\"getValidity(i, 'adjustmentReminderEmailRecipients')?.value\" class=\"form-group review-item\">\n                    <label>Adjustment Reminder Email Recipients:</label>\n                    {{getValidity(i, 'adjustmentReminderEmailRecipients')?.value}}\n                </div>\n                <div *ngIf=\"getValidity(i, 'adjustmentReminderEmailContent')?.value\" class=\"form-group review-item\">\n                    <label>Adjustment Reminder Email Content:</label>\n                    {{getValidity(i, 'adjustmentReminderEmailContent')?.value}}\n                </div>\n            </div>\n        </div>\n        <!---->\n        <div *ngIf=\"this.addEditForm.value.fullContingencyDetail\" class=\"form-group review-item\">\n            <label>Full Contingency Detail:</label> {{this.addEditForm.value.fullContingencyDetail}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.partialContingencyDetail\" class=\"form-group review-item\">\n            <label>Partial Contingency Detail:</label> {{this.addEditForm.value.partialContingencyDetail}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.fixedFeeType\" class=\"form-group review-item\">\n            <label>Fixed Fee Type:</label> {{this.addEditForm.value.fixedFeeType}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.fixedFeeValue\" class=\"form-group review-item\">\n            <label>Fixed Fee Value($):</label> {{this.addEditForm.value.fixedFeeValue}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.fixedFeeDetails\" class=\"form-group review-item\">\n            <label>Fixed Fee Detail:</label> {{this.addEditForm.value.fixedFeeDetails}}\n        </div>\n\n        <hr>\n        <h4>Billing Details</h4>\n        <div *ngIf=\"this.addEditForm.value.billingFrequency\" class=\"form-group review-item\">\n            <label>Billing Frequency:</label> {{this.addEditForm.value.billingFrequency}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.billingFrequencyOther\" class=\"form-group review-item\">\n            <label>Billing Frequency Other:</label> {{this.addEditForm.value.billingFrequencyOther}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.billingCurrency\" class=\"form-group review-item\">\n            <label>Billing Currency:</label> {{this.addEditForm.value.billingCurrency}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.billingMethod\" class=\"form-group review-item\">\n            <label>Billing Method:</label> {{this.addEditForm.value.billingMethod}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.payorType\" class=\"form-group review-item\">\n            <label>Payor Type:</label> {{this.addEditForm.value.payorType}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.payorDetail\" class=\"form-group review-item\">\n            <label>Payor Details:</label> {{this.addEditForm.value.payorDetail}}\n        </div>\n        <div *ngIf=\"this.addEditForm.value.preferredProvider\" class=\"form-group review-item\">\n            <label>Preferred Provider:</label> {{this.addEditForm.value.preferredProvider}}\n        </div>\n        <hr>\n        <h4>Attachments</h4>\n        <div class=\"flex-container\">\n            <div *ngFor=\"let item of attachmentArray;let i=index;\">\n                <div (click)=\"removeAttachment(i)\" class=\"cross-icon\"><img class=\"text-center\"\n                        src=\"assets/images/cross-icon.png\"></div>\n                <a (click)=\"accessFileURL(item.name)\">\n                    <img class=\"text-center\" src=\"assets/images/document-icon.png\">\n                </a>\n                <p>{{item?.name}}</p>\n                <p>{{item?.type}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" *ngIf=\"editForm && isLoadingbtn == false\" (click)=\"submitUpdateForm()\" class=\"btn\n                            btn-info\">Update\n            Client</button>\n        <button type=\"submit\" *ngIf=\"!editForm && isLoadingbtn == false\" (click)=\"submitForm()\" class=\"btn btn-info\">Add\n            Client</button>\n        <div class=\"text-center\" *ngIf=\"isLoadingbtn == true\">\n            <div class=\"spinner-border\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n            </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cancel</button>\n    </div>\n</ng-template>";

/***/ }),

/***/ 58844:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/agreements/agreements.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'Agreements'\" [previousLink]=\"'agreements'\" [heading]=\"'Agreements'\" ></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"row mb-2\">\n                        <div class=\"col-md-9 text-left\">\n                            <div class=\"form-group mb-1\">\n                                <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                                    (ngModelChange)=\"this.searchTermUpdate.next($event)\" id=\"agreementstaffs\"\n                                    class=\"form-control\" placeholder=\"Search here...\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 text-center\" *ngIf=\"!isLoading && _state.totalResults > 0\">\n                            <button type=\"button\" (click)=\"downloadFileExcel()\" class=\"btn btn-primary\">Download</button>\n                        </div>\n                        <!-- <div class=\"col-md-2 text-center\">\n                            <button type=\"button\" routerLink=\"/agreements/add-agreement\" class=\"btn btn-primary\">Add Matter</button>\n                        </div> -->\n                    </div>\n                    <ng-container *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <div *ngIf=\"!isAgreements;else table\">\n                        <p class=\"text-center\">No agreements found</p>\n                    </div>\n                    <ng-template #table>\n                        <div *ngIf=\"!isLoading\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th scope=\"col\">#</th> -->\n                                            <th scope=\"col\" sortable=\"clientName\" (sort)=\"onSort($event)\">Client Name\n                                            </th>\n                                            <th scope=\"col\" sortable=\"clientSicName\" (sort)=\"onSort($event)\">Client SIC\n                                                Name</th>\n                                            <th scope=\"col\" sortable=\"matterName\" (sort)=\"onSort($event)\">Matter Name\n                                            </th>\n                                            <th scope=\"col\" sortable=\"feeArrangementType\" (sort)=\"onSort($event)\">Fee\n                                                Arrangement Type</th>\n                                            <th scope=\"col\" sortable=\"principalAttorneyName\" (sort)=\"onSort($event)\">\n                                                Responsible Partner</th>\n                                            <th scope=\"col\" sortable=\"responsibleBillingManagerName\"\n                                                (sort)=\"onSort($event)\">Billing Manager</th>\n                                            <th>View</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let agreement of agreements; index as i\">\n                                            <!-- <th scope=\"row\">{{ ((_state.page-1) * _state.limit) + i +1 }}</th> -->\n                                            <td>{{agreement?.clientName}}</td>\n                                            <td>{{agreement?.clientSicName}}</td>\n                                            <td>{{agreement?.matterName}}</td>\n                                            <td>{{agreement?.feeArrangementType}}</td>\n                                            <td>{{agreement?.principalAttorneyName}}</td>\n                                            <td>{{agreement?.responsibleBillingManagerName}}</td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                        (click)=\"viewAgrement(agreement.id)\"><img\n                                                            src=\"assets/images/search.svg\" alt=\"\"></button></div>\n                                            </td>\n                                            <!-- <td>\n                                                <label class=\"switch\" *ngIf=\"agreement.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(agreement.id, agreement.isActive)\" checked>\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                                <label class=\"switch\" *ngIf=\"!agreement.isActive\">\n                                                    <input type=\"checkbox\" (click)=\"updateStatus(agreement.id, agreement.isActive)\">\n                                                    <span class=\"slider round\"></span>\n                                                </label>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\"><button\n                                                    (click)=\"editUser(agreement.id)\"><img\n                                                        src=\"assets/images/pencil.svg\"\n                                                        alt=\"\"></button></div>\n                                            </td>\n                                            <td>\n                                                <div class=\"action-buttons\">\n                                                    <button (click)=\"deleteUser(agreement.id)\"><img\n                                                            src=\"assets/images/icons8-trash-can.svg\"\n                                                            alt=\"\"></button></div>\n                                            </td> -->\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"d-flex justify-content-between p-2\">\n                                    <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\"\n                                        [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                                        (pageChange)=\"refreshAgreements()\">\n                                    </ngb-pagination>\n\n                                    <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\"\n                                        (ngModelChange)=\"refreshAgreements()\" [ngModelOptions]=\"{standalone: true}\">\n                                        <option [ngValue]=\"10\">10 items per page</option>\n                                        <option [ngValue]=\"20\">20 items per page</option>\n                                        <option [ngValue]=\"30\">30 items per page</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </form>\n            </div>\n        </div>\n      <app-agreements-filter (found)=\"handleResults($event)\" *ngIf=\"_state.totalResults > 0\"></app-agreements-filter>\n    </div> \n</div>";

/***/ }),

/***/ 78919:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/filter/filter.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Right Slide-->\n<div class=\"parent-slide\" [ngClass]=\"openClass\">\n    <form [formGroup]=\"filterForm\" class=\"form-inline\" autocomplete=\"off\">\n        <div id=\"slider\" class=\"slide-out\">\n            <div class=\"position-relative\">\n                <div class=\"menu-close\">\n                    <button class=\"close-button\" type=\"button\" (click)=\"closeMenu()\"><img\n                            src=\"assets/images/close-icon.svg\" alt=\"\"></button>\n                    <div class=\"slide_main_menu\">\n                        <p>Please click filter button after selection</p>\n                    </div>\n                    <!--Frequency-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Billing Frequency</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"radio\" value=\"\" formControlName=\"billingFrequency\"\n                                        (change)=\"loadFilterDataFrequency()\" />\n                                    All </li>\n                                <li *ngFor=\"let data of collectionOptions.billingFrequency; let i=index\">\n                                    <input type=\"radio\" [value]=\"data._id\" formControlName=\"billingFrequency\"\n                                        (change)=\"loadFilterDataFrequency()\" />\n                                    {{data._id}} ({{data.count}})\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--Base Rate-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Base Rate</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('baseRate')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'baseRate')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.baseRate; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id || -1\"\n                                            [checked]=\"filterForm.controls['baseRate'].value.includes(data._id || -1)\"\n                                            (change)=\"onCheckboxChange($event, 'baseRate')\" />\n                                        {{data._id || \"Other\"}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--billingCurrency-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Billing Currency</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('billingCurrency')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'billingCurrency')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.billingCurrency; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['billingCurrency'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'billingCurrency')\" />\n                                        {{data._id}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--billingMethod-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Billing Method</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('billingMethod')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'billingMethod')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.billingMethod; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['billingMethod'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'billingMethod')\" />\n                                        {{data._id}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--payorType-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Payor Type</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('payorType')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'payorType')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.payorType; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['payorType'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'payorType')\" />\n                                        {{data._id}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--billingCurrency-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Billing Currency</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('billingCurrency')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'billingCurrency')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.billingCurrency; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['billingCurrency'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'billingCurrency')\" />\n                                        {{data._id}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--Attachment Type-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">Attachment Type</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('attachmentType')\"\n                                        (change)=\"toggleAllSelection($event.target.checked, 'attachmentType')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.attachmentType; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id\"\n                                            [checked]=\"filterForm.controls['attachmentType'].value.includes(data._id)\"\n                                            (change)=\"onCheckboxChange($event, 'attachmentType')\" />\n                                        {{data._id}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!--SIC CODE-->\n                    <div class=\"slide_main_menu\">\n                        <div class=\"slide_header\">SIC Code</div>\n                        <div class=\"slide_body\">\n                            <ul>\n                                <li><input type=\"checkbox\" value=\"all\" [checked]=\"calllbackFn('sicCode')\"\n                                        (change)=\"toggleAllSelectionSic($event.target.checked, 'sicCode')\" />\n                                    All</li>\n                                <li *ngFor=\"let data of collectionOptions.sicCode; let i=index\">\n                                    <label>\n                                        <input type=\"checkbox\" [value]=\"data._id.clientSicId\"\n                                            [checked]=\"filterForm.controls['sicCode'].value.includes(data._id.clientSicId)\"\n                                            (change)=\"onCheckboxChange($event, 'sicCode')\" />\n                                        {{data._id.clientSicName}} ( {{data.count}})\n                                    </label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"position-absolute loader-overlay\" *ngIf=\"loader\">\n                    <div class=\"loader\">\n                        <div class=\"position-relative\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"flex position-relative\">\n                <div class=\"filter-buttons\">\n\n                    <button (click)=\"resetEvent()\" class=\"btn btn-outline-secondary\">Reset</button>\n                    <button (click)=\"filter()\" class=\"btn btn-primary\">Filter</button>\n                </div>\n\n            </div>\n        </div>\n    </form>\n    <div class=\"action-button\">\n        <div class=\"menu-open\">\n            <button (click)=\"openMenu()\" class=\"btn btn-outline-secondary\">Filter</button>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 76379:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/agreement/components/logs/logs.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\n    <app-page-header [previousLink]=\"'search'\"\n    [previousHeading]=\"'Search Record'\" [heading]=\"'Agreement Logs'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                    <div class=\"col-md-12\">\n                        <button class=\"btn btn-info\" style=\"float: right;\" (click)=\"back()\">Back</button>\n                    </div>\n                    <div class=\"col-md-12 text-left\">\n                  </div>\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                  <div class=\"text-center\">\n                    <div class=\"spinner-border\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </div>\n                </ng-container>\n                <div *ngIf=\"!isActivity;else table\">\n                  <p class=\"text-center\">No logs found</p>\n                </div>\n                <ng-template #table>\n                  <div *ngIf=\"!isLoading\">\n                    <table class=\"table table-bordered\">\n                      <thead>\n                        <tr>\n                          <th>Time</th>\n                         \n                          <th>Updates</th>\n                          <!-- <th>View</th> -->\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let request of logs; let i = index\">\n                          <td>{{request?.createdAt |  date:'short'}}</td>\n                          <td>{{request?.text}}\n                            <table width=\"100%\" class=\"no-border\">\n                              <tr>\n                             <th scope=\"col\"><span>Activity</span></th>\n                              </tr>\n                              <tr>\n                                <td>\n                                  <ng-container *ngFor=\"let field of request?.details?.updateDetails; let i = index\">\n                                    <ng-container *ngIf=\"!excludedKeys.includes(field.key)\">\n                                      <span>Field: {{transformTitle(field.key)}}</span><br/>\n                                      <span> \n                                      <ng-container *ngIf=\"field.key == 'startDate' || field.key == 'expirationDate' || field.key == 'feeArrangementDetails_adjustmentDate' || field.key == 'feeArrangementDetails_reminderDate'; else newDeb\">\n                                        Before: {{field.before | date:\"MM/dd/YYYY\"}}\n                                      </ng-container>\n                                      <ng-template #newDeb>\n                                        Before: {{field.before}}\n                                    </ng-template>\n                                      </span><br/>\n                                      <span>\n                                        <ng-container *ngIf=\"field.key == 'startDate' || field.key == 'expirationDate' || field.key == 'feeArrangementDetails_adjustmentDate' || field.key == 'feeArrangementDetails_reminderDate'; else newDeb1\">\n                                          Before: {{field.after | date:\"MM/dd/YYYY\"}}\n                                        </ng-container>\n                                        <ng-template #newDeb1>\n                                          Before: {{field.after}}\n                                      </ng-template>\n                                      </span><br/>\n                                      <hr>\n                                    </ng-container> \n                                  </ng-container>\n                                </td>\n                              </tr>\n                            </table>\n                          </td>\n                        \n                          <!-- <td>\n                            <span *ngIf=\"request.type === 'link'\" (click)=\"view(request)\">\n                              <i class=\"fa fw fa-eye\"></i>\n                            </span>\n                          </td> -->\n                        </tr>\n                      </tbody>\n                    </table>\n                    <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refreshLogs()\">\n                      </ngb-pagination>\n          \n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\"\n                        (ngModelChange)=\"refreshLogs()\">\n                        <option [ngValue]=\"5\">5 items per page</option>\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                      </select>\n                    </div>\n                  </div>\n                </ng-template>\n              </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ }),

/***/ 73169:
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/agreement/components/view-agreement/view-agreement.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Agreement Details'\" *ngIf=\"!searchType\" [previousLink]=\"'agreements'\"\n        [previousHeading]=\"'Agreements'\"></app-page-header>\n    <app-page-header [heading]=\"'Search Detail'\"></app-page-header>\n\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header py-2 d-flex flex-wrap justify-content-between align-items-center\">\n                <span>Agreement Details</span>\n                <div class=\"buttons\">\n                    <div class=\"trow\">\n                        <div class=\"m5\">\n                            <button *ngIf=\"isEditAccess\" (click)=\"editAgreement()\"\n                                class=\"btn btn-info btn-block\">Edit</button>\n                        </div>\n                        <div class=\"\">\n                            <button class=\"btn btn-secondary btn-block nowrap\" (click)=\"viewHistory()\">History</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <div>\n                    <div *ngIf=\"isLoading\">\n                        <div class=\"text-center\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"!isLoading\">\n                        <div class=\"header\">\n                            <p class=\"heading\">Client Details</p>\n                            <div class=\"buttons\">\n                                <div class=\"trow\">\n                                    <button class=\"btn btn-secondary btn-block nowrap\" (click)=\"goBack()\">Back</button>\n                                </div>\n                            </div>\n                        </div>\n                        <ng-container>\n\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.clientGroupName\">\n                                <label class=\"field_name\">Client Group Name:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.clientGroupName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\">\n                                <label class=\"field_name\">Client Name:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.clientName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.matterId\">\n                                <label class=\"field_name\">Matter Name:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.matterName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\">\n                                <label class=\"field_name\">Client SIC Name:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.clientSicName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.principalAttorneyName\">\n                                <label class=\"field_name\">Responsible Partner:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.principalAttorneyName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.responsibleBillingManagerName\">\n                                <label class=\"field_name\">Billing Manager:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.responsibleBillingManagerName}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.areaOfLawName\">\n                                <label class=\"field_name\">Area Of Law:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.areaOfLawName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.practiceGroupName\">\n                                <label class=\"field_name\">Practice Group:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.practiceGroupName}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.startDate\">\n                                <label class=\"field_name\">Agreement Start Date (MM/DD/YYYY):</label>\n                                <div class=\"field-data\"><label>{{agreementData?.startDate | date\n                                        :'MM/dd/YYYY'}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.expirationDate\">\n                                <label class=\"field_name\">Agreement Expiration Date (MM/DD/YYYY):</label>\n                                <div class=\"field-data\"><label>{{agreementData?.expirationDate |\n                                        date\n                                        :'MM/dd/YYYY'}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_reminderTimingDay\">\n                                <label class=\"field_name\">Reminder Timing:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData.feeArrangementDetails_reminderTimingDay}}&nbsp;days</label>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <hr />\n                        <ng-container>\n                            <div class=\"header\">\n                                <p class=\"heading\">Fee Details</p>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.feeArrangementType\">\n                                <label class=\"field_name\">Fee Arrangement Type:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementType}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.feeArrangementDetails_baseRateType && (isFeeArrangmentHourlyBilled ||\n                                isFeeArrangmentFeeCollar ||\n                                isFeeArrangmentCappedFee)\">\n                                <label class=\"field_name\">Base Rate Type:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_baseRateType}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.feeArrangementDetails_discount && (isFeeArrangmentHourlyBilled ||\n                                isFeeArrangmentFeeCollar ||\n                                isFeeArrangmentCappedFee)\">\n                                <label class=\"field_name\">Discount (%):</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_discount}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.feeArrangementDetails_discountDetail && (isFeeArrangmentHourlyBilled ||\n                                isFeeArrangmentFeeCollar ||\n                                isFeeArrangmentCappedFee)\">\n                                <label class=\"field_name\">Discount Type:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_discountDetail}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.feeArrangementDetails_discountDetailDescription && (isFeeArrangmentHourlyBilled ||\n                                isFeeArrangmentFeeCollar ||\n                                isFeeArrangmentCappedFee)\">\n                                <label class=\"field_name\"> Other Discount:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_discountDetailDescription}}</label>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_rateCardDetail && isFeeArrangmentHourlyBilled\">\n                                <label class=\"field_name\">Rate Card Detail:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_rateCardDetail}}</label>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_cappedRateDetail && isFeeArrangmentHourlyBilled\">\n                                <label class=\"field_name\">Capped Rate Detail:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_cappedRateDetail}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_feeCapAmount && isFeeArrangmentCappedFee\">\n                                <label class=\"field_name\">Fee Cap Amount($):</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_feeCapAmount|\n                                        currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_targetFee && isFeeArrangmentFeeCollar\">\n                                <label class=\"field_name\">Target Fee:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_targetFee|\n                                        currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_collarPercentage && isFeeArrangmentFeeCollar\">\n                                <label class=\"field_name\">Collar Percentage (in\n                                    %):</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_collarPercentage}}</label>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"isFeeArrangmentHourlyBilled || isFeeArrangmentCappedFee || isFeeArrangmentFeeCollar\">\n                                <label class=\"field_name\">Rate Adjustment During Term:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_rateAdjustmentDuringTerm?\"Yes\":\"No\"}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_adjustmentDate && agreementData.feeArrangementDetails_rateAdjustmentDuringTerm\">\n                                <label class=\"field_name\">Adjustment Date (MM/DD/YYYY):</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_adjustmentDate |\n                                        date:'MM/dd/YYYY'}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_adjustmentDetails && agreementData.feeArrangementDetails_rateAdjustmentDuringTerm\">\n                                <label class=\"field_name\">Adjustment Details:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_adjustmentDetails}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_rateAdjustmentDuringTerm\">\n                                <label class=\"field_name\">Adjustment Reminder:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_reminder?\"Yes\":\"No\"}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_reminderDate && agreementData.feeArrangementDetails_rateAdjustmentDuringTerm && agreementData.feeArrangementDetails_reminder\">\n                                <label class=\"field_name\">Adjustment Reminder Date:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_reminderDate|\n                                        date :'MM/dd/YYYY'}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_reminderEmailRecipients && agreementData.feeArrangementDetails_rateAdjustmentDuringTerm && agreementData.feeArrangementDetails_reminder\">\n                                <label class=\"field_name\">Adjustment Reminder Email Recipients:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_reminderEmailRecipients}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_reminderEmailContent && agreementData.feeArrangementDetails_rateAdjustmentDuringTerm && agreementData.feeArrangementDetails_reminder\">\n                                <label class=\"field_name\">Adjustment Reminder Email Content:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_reminderEmailContent}}</label>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_fullContingencyDetail && isFeeArrangmentFullContingency\">\n                                <label class=\"field_name\">Full Contingency\n                                    Detail:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_fullContingencyDetail}}</label>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_matterFixedFee && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Matter Fixed Fee:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_matterFixedFee|\n                                        currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_annualFixedFee && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Annual Fixed Fee:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_annualFixedFee|\n                                        currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_monthlyFixedFee && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Monthly Fixed Fee:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_monthlyFixedFee|\n                                        currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_portfolioFixedFee && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Portfolio Fixed Fee:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_portfolioFixedFee|\n                                        currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_milestoneFixedFee && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Phase/Milestone Fixed\n                                    Fee:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.feeArrangementDetails_milestoneFixedFee\n                                        | currency : symbol :\n                                        fractionsize}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_fixedFeeType && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Fixed Fee Type:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_fixedFeeType}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_fixedFeeValue && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Fixed Fee Value:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_fixedFeeValue}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_fixedFeeDetail && isFeeArrangmentFixedFee\">\n                                <label class=\"field_name\">Fixed Fee Detail:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_fixedFeeDetail}}</label>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <hr>\n                        <ng-container>\n                            <div class=\"header\">\n                                <p class=\"heading\">Billing Details</p>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.billingFrequency\">\n                                <label class=\"field_name\">Billing Frequency:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.billingFrequency}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.billingFrequencyDetails\">\n                                <label class=\"field_name\">Billing Frequency\n                                    Other:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.billingFrequencyDetails}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.billingCurrency\">\n                                <label class=\"field_name\">Billing Currency:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.billingCurrency}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\"\n                                *ngIf=\"agreementData.feeArrangementDetails_partialContingencyDetail && isFeeArrangmentPartialContingency\">\n                                <label class=\"field_name\">Partial Contingency Detail:</label>\n                                <div class=\"field-data\">\n                                    <label>{{agreementData?.feeArrangementDetails_partialContingencyDetail}}</label>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.billingMethod\">\n                                <label class=\"field_name\">Billing Method:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.billingMethod}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.billingMethodDetails\">\n                                <label class=\"field_name\">Billing Method\n                                    Details:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.billingMethodDetails}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.payorType\">\n                                <label class=\"field_name\">Payor Type:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.payorType}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\" *ngIf=\"agreementData.payorDetail\">\n                                <label class=\"field_name\">Payor Detail:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.payorDetail}}</label></div>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\">\n                                <label class=\"field_name\">Preferred Provider:</label>\n                                <div class=\"field-data\"><label>{{agreementData?.preferredProvider?\"Yes\":\"No\"}}</label>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <hr>\n                        <ng-container>\n                            <div class=\"header\">\n                                <p class=\"heading\">Attachments</p>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12\">\n                                <div class=\"flex-container\">\n                                    <div *ngFor=\"let item of\n                                        agreementData.attachments;let i=index;\">\n                                        <a (click)=\"accessFileURL(item.name)\" class=\"cursor\">\n                                            <img class=\"text-center\" src=\"assets/images/document-icon.png\">\n                                        <p>{{item?.type}}</p>\n                                    </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_layout_agreement_agreement_module_ts.js.map