"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_bs-component_bs-component_module_ts"],{

/***/ 61324:
/*!********************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsComponentRoutingModule": () => (/* binding */ BsComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bs_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-component.component */ 85960);




const routes = [
    {
        path: '',
        component: _bs_component_component__WEBPACK_IMPORTED_MODULE_0__.BsComponentComponent
    }
];
let BsComponentRoutingModule = class BsComponentRoutingModule {
};
BsComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], BsComponentRoutingModule);



/***/ }),

/***/ 85960:
/*!***************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsComponentComponent": () => (/* binding */ BsComponentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bs_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-component.component.html?ngResource */ 69459);
/* harmony import */ var _bs_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-component.component.scss?ngResource */ 63992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BsComponentComponent = class BsComponentComponent {
    constructor() { }
    ngOnInit() { }
};
BsComponentComponent.ctorParameters = () => [];
BsComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bs-component',
        template: _bs_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bs_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BsComponentComponent);



/***/ }),

/***/ 65765:
/*!************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsComponentModule": () => (/* binding */ BsComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-component-routing.module */ 61324);
/* harmony import */ var _bs_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-component.component */ 85960);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 88103);









let BsComponentModule = class BsComponentModule {
};
BsComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_1__.BsComponentRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
        declarations: [
            _bs_component_component__WEBPACK_IMPORTED_MODULE_2__.BsComponentComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.ButtonsComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.AlertComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.ModalComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.CollapseComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.DatePickerComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.DropdownComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.PopOverComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.ProgressbarComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.RatingComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.TooltipComponent,
            _components__WEBPACK_IMPORTED_MODULE_3__.TimepickerComponent
        ]
    })
], BsComponentModule);



/***/ }),

/***/ 31080:
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component.html?ngResource */ 7307);
/* harmony import */ var _alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component.scss?ngResource */ 61804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AlertComponent = class AlertComponent {
    constructor() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        });
    }
    ngOnInit() { }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
};
AlertComponent.ctorParameters = () => [];
AlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert',
        template: _alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertComponent);



/***/ }),

/***/ 67901:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsComponent": () => (/* binding */ ButtonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.component.html?ngResource */ 35830);
/* harmony import */ var _buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.component.scss?ngResource */ 23344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





let ButtonsComponent = class ButtonsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = 1;
    }
    ngOnInit() {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
    }
};
ButtonsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder }
];
ButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-buttons',
        template: _buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ButtonsComponent);



/***/ }),

/***/ 94846:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseComponent": () => (/* binding */ CollapseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _collapse_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.component.html?ngResource */ 9013);
/* harmony import */ var _collapse_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.component.scss?ngResource */ 19400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let CollapseComponent = class CollapseComponent {
    constructor() {
        this.isCollapsed = false;
    }
};
CollapseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-collapse',
        template: _collapse_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_collapse_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CollapseComponent);



/***/ }),

/***/ 17820:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerComponent": () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _date_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker.component.html?ngResource */ 95097);
/* harmony import */ var _date_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker.component.scss?ngResource */ 17842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DatePickerComponent = class DatePickerComponent {
    constructor() { }
    ngOnInit() { }
};
DatePickerComponent.ctorParameters = () => [];
DatePickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-date-picker',
        template: _date_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_date_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DatePickerComponent);



/***/ }),

/***/ 79624:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dropdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component.html?ngResource */ 12950);
/* harmony import */ var _dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.component.scss?ngResource */ 21316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DropdownComponent = class DropdownComponent {
    constructor() { }
    ngOnInit() { }
};
DropdownComponent.ctorParameters = () => [];
DropdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dropdown',
        template: _dropdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DropdownComponent);



/***/ }),

/***/ 88103:
/*!*********************************************************!*\
  !*** ./src/app/layout/bs-component/components/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent),
/* harmony export */   "ButtonsComponent": () => (/* reexport safe */ _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ButtonsComponent),
/* harmony export */   "CollapseComponent": () => (/* reexport safe */ _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__.CollapseComponent),
/* harmony export */   "DatePickerComponent": () => (/* reexport safe */ _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__.DatePickerComponent),
/* harmony export */   "DropdownComponent": () => (/* reexport safe */ _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.DropdownComponent),
/* harmony export */   "ModalComponent": () => (/* reexport safe */ _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent),
/* harmony export */   "PaginationComponent": () => (/* reexport safe */ _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent),
/* harmony export */   "PopOverComponent": () => (/* reexport safe */ _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__.PopOverComponent),
/* harmony export */   "ProgressbarComponent": () => (/* reexport safe */ _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressbarComponent),
/* harmony export */   "RatingComponent": () => (/* reexport safe */ _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__.RatingComponent),
/* harmony export */   "TimepickerComponent": () => (/* reexport safe */ _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__.TimepickerComponent),
/* harmony export */   "TooltipComponent": () => (/* reexport safe */ _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_10__.TooltipComponent)
/* harmony export */ });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ 67901);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ 31080);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.component */ 24292);
/* harmony import */ var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse/collapse.component */ 94846);
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-picker/date-picker.component */ 17820);
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown/dropdown.component */ 79624);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.component */ 90499);
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pop-over/pop-over.component */ 26450);
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progressbar/progressbar.component */ 20125);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating/rating.component */ 67154);
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip/tooltip.component */ 36);
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timepicker/timepicker.component */ 17486);














/***/ }),

/***/ 24292:
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component.html?ngResource */ 51191);
/* harmony import */ var _modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.scss?ngResource */ 86682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);





let ModalComponent = class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal }
];
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal',
        template: _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalComponent);



/***/ }),

/***/ 90499:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component.html?ngResource */ 67093);
/* harmony import */ var _pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.component.scss?ngResource */ 88753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PaginationComponent = class PaginationComponent {
    constructor() {
        this.defaultPagination = 1;
        this.advancedPagination = 1;
        this.paginationSize = 1;
        this.disabledPagination = 1;
        this.isDisabled = true;
    }
    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
};
PaginationComponent.ctorParameters = () => [];
PaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pagination',
        template: _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaginationComponent);



/***/ }),

/***/ 26450:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverComponent": () => (/* binding */ PopOverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pop_over_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-over.component.html?ngResource */ 68065);
/* harmony import */ var _pop_over_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over.component.scss?ngResource */ 4863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PopOverComponent = class PopOverComponent {
    constructor() { }
    ngOnInit() { }
};
PopOverComponent.ctorParameters = () => [];
PopOverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pop-over',
        template: _pop_over_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pop_over_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopOverComponent);



/***/ }),

/***/ 20125:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressbarComponent": () => (/* binding */ ProgressbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _progressbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressbar.component.html?ngResource */ 83886);
/* harmony import */ var _progressbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component.scss?ngResource */ 27683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ProgressbarComponent = class ProgressbarComponent {
    constructor() { }
    ngOnInit() { }
};
ProgressbarComponent.ctorParameters = () => [];
ProgressbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-progressbar',
        template: _progressbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_progressbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProgressbarComponent);



/***/ }),

/***/ 67154:
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rating_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.component.html?ngResource */ 91735);
/* harmony import */ var _rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss?ngResource */ 40089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let RatingComponent = class RatingComponent {
    constructor() {
        this.currentRate = 8;
    }
    ngOnInit() { }
};
RatingComponent.ctorParameters = () => [];
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rating',
        template: _rating_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingComponent);



/***/ }),

/***/ 17486:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimepickerComponent": () => (/* binding */ TimepickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _timepicker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timepicker.component.html?ngResource */ 15461);
/* harmony import */ var _timepicker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timepicker.component.scss?ngResource */ 98636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TimepickerComponent = class TimepickerComponent {
    constructor() {
        this.defaultTime = { hour: 13, minute: 30 };
        this.meridianTime = { hour: 13, minute: 30 };
        this.meridian = true;
        this.SecondsTime = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.customTime = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
    }
    toggleSeconds() {
        this.seconds = !this.seconds;
    }
    toggleMeridian() {
        this.meridian = !this.meridian;
    }
};
TimepickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timepicker',
        template: _timepicker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timepicker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimepickerComponent);



/***/ }),

/***/ 36:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tooltip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.component.html?ngResource */ 41514);
/* harmony import */ var _tooltip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.component.scss?ngResource */ 75633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TooltipComponent = class TooltipComponent {
    constructor() { }
    ngOnInit() { }
};
TooltipComponent.ctorParameters = () => [];
TooltipComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _tooltip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tooltip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TooltipComponent);



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

/***/ 63992:
/*!****************************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 61804:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 23344:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 19400:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 17842:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ":host ::ng-deep .datepicker-input .custom-select {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtBQUFSIiwiZmlsZSI6ImRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5kYXRlcGlja2VyLWlucHV0IHtcbiAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 21316:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 86682:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 88753:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 4863:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3Atb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 27683:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 40089:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 98636:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 75633:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIn0= */";

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

/***/ 69459:
/*!****************************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <app-page-header [heading]=\"'Bootstrap Component'\" [icon]=\"'fa-th-list'\"></app-page-header>\n    <app-modal></app-modal>\n    <app-alert></app-alert>\n    <app-buttons></app-buttons>\n    <app-collapse></app-collapse>\n    <app-date-picker></app-date-picker>\n    <app-dropdown></app-dropdown>\n    <app-pagination></app-pagination>\n    <app-pop-over></app-pop-over>\n    <app-progressbar></app-progressbar>\n    <app-tooltip></app-tooltip>\n    <app-timepicker></app-timepicker>\n    <app-rating></app-rating>\n</div>\n";

/***/ }),

/***/ 7307:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Buttons</div>\n            <div class=\"card-body\">\n                <p *ngFor=\"let alert of alerts\">\n                    <ngb-alert (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{ alert.message }}</ngb-alert>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 35830:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row mb-3\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Radio Button group (<strong>Using ngModel</strong>)</div>\n            <div class=\"card-body\">\n                <div [(ngModel)]=\"model\" class=\"btn-group btn-group-toggle mb-3\" name=\"radioBasic\" ngbRadioGroup>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                        <input [value]=\"1\" ngbButton type=\"radio\" /> Left (pre-checked)\n                    </label>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                        <input ngbButton type=\"radio\" value=\"middle\" /> Middle\n                    </label>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                        <input [value]=\"false\" ngbButton type=\"radio\" /> Right\n                    </label>\n                </div>\n                <div class=\"alert alert-info mb-0\"><strong>Selected Value: </strong>{{ model }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Radio Button group (<strong>Ractive Forms</strong>)</div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"radioGroupForm\" class=\"mb-3\">\n                    <div class=\"btn-group btn-group-toggle\" formControlName=\"model\" name=\"radioBasic\" ngbRadioGroup>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input [value]=\"1\" ngbButton type=\"radio\" /> Left (pre-checked)\n                        </label>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input ngbButton type=\"radio\" value=\"middle\" /> Middle\n                        </label>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input [value]=\"false\" ngbButton type=\"radio\" /> Right\n                        </label>\n                    </div>\n                </form>\n                <div class=\"alert alert-info mb-0\">\n                    <strong>Selected Value: </strong>{{ radioGroupForm.value.model }}\n                </div>\n                <!-- <form [formGroup]=\"radioGroupForm\">\n                    <div ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                        </label>\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" value=\"middle\"> Middle\n                        </label>\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [value]=\"false\"> Right\n                        </label>\n                    </div>\n                </form> -->\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 9013:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Collapse</div>\n            <div class=\"card-body\">\n                <p>\n                    <button\n                        (click)=\"isCollapsed = !isCollapsed\"\n                        [attr.aria-expanded]=\"!isCollapsed\"\n                        aria-controls=\"collapseExample\"\n                        class=\"btn btn-outline-primary\"\n                        type=\"button\"\n                    >\n                        Toggle\n                    </button>\n                </p>\n                <div [ngbCollapse]=\"isCollapsed\" id=\"collapseExample\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            You can collapse this card by clicking Toggle\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 95097:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Date Picker</div>\n            <div class=\"card-body\">\n                <form class=\"form-inline mb-3\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group datepicker-input\">\n                            <input\n                                #d=\"ngbDatepicker\"\n                                [(ngModel)]=\"model\"\n                                class=\"form-control\"\n                                name=\"dp\"\n                                ngbDatepicker\n                                placeholder=\"yyyy-mm-dd\"\n                            />\n                            <button (click)=\"d.toggle()\" class=\"input-group-addon\" type=\"button\">\n                                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\n                                <span class=\"fa fa-calendar\"></span>\n                            </button>\n                        </div>\n                    </div>\n                </form>\n                <div class=\"alert alert-info mb-0\"><strong>Model: </strong> {{ model | json }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 12950:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Dropdown</div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"d-inline-block dropdown\" ngbDropdown>\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\">Action</button>\n                        <button class=\"dropdown-item\">Another Action</button>\n                        <button class=\"dropdown-item\">Something else is here</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col text-right\">\n                <div class=\"d-inline-block dropdown\" ngbDropdown placement=\"top-right\">\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropup</button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\">Action</button>\n                        <button class=\"dropdown-item\">Another Action</button>\n                        <button class=\"dropdown-item\">Something else is here</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr />\n        <p class=\"mb-2\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\n            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\n            <div ngbDropdownMenu>\n                <button class=\"dropdown-item\">Action</button>\n                <button class=\"dropdown-item\">Another Action</button>\n                <button class=\"dropdown-item\">Something else is here</button>\n            </div>\n        </div>\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\n            <button (click)=\"$event.stopPropagation(); myDrop.open()\" class=\"btn btn-outline-success\">\n                Open from outside\n            </button>\n        </div>\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\n            <button (click)=\"$event.stopPropagation(); myDrop.close()\" class=\"btn btn-outline-danger\">\n                Close from outside\n            </button>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 51191:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Modal</div>\n            <!-- Large modal -->\n            <div class=\"card-body\">\n                <button (click)=\"open(content)\" class=\"btn btn-primary\">Large modal</button>\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Modal title</h4>\n                        <button (click)=\"d('Cross click')\" aria-label=\"Close\" class=\"close\" type=\"button\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <p>One fine body&hellip;</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button (click)=\"c('Close click')\" class=\"btn btn-secondary\" type=\"button\">Close</button>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 67093:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Basic Pagination</div>\n            <div class=\"card-body\">\n                <div class=\"text-uppercase text-muted fs-12\">Default pagination</div>\n                <ngb-pagination [(page)]=\"defaultPagination\" [collectionSize]=\"70\"></ngb-pagination>\n                <div class=\"text-uppercase text-muted fs-12\">directionLinks = false</div>\n                <ngb-pagination\n                    [(page)]=\"defaultPagination\"\n                    [collectionSize]=\"70\"\n                    [directionLinks]=\"false\"\n                ></ngb-pagination>\n                <div class=\"text-uppercase text-muted fs-12\">boundaryLinks = true</div>\n                <ngb-pagination\n                    [(page)]=\"defaultPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"70\"\n                ></ngb-pagination>\n                <div class=\"alert alert-info\"><b>Current page: </b>{{ defaultPagination }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Advanced Pagination</div>\n            <div class=\"card-body\">\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = false</div>\n                <ngb-pagination\n                    [(page)]=\"advancedPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"120\"\n                    [maxSize]=\"5\"\n                ></ngb-pagination>\n\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true</div>\n                <ngb-pagination\n                    [(page)]=\"advancedPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"120\"\n                    [maxSize]=\"5\"\n                    [rotate]=\"true\"\n                ></ngb-pagination>\n\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true, ellipses = false</div>\n                <ngb-pagination\n                    [(page)]=\"advancedPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"120\"\n                    [ellipses]=\"false\"\n                    [maxSize]=\"5\"\n                    [rotate]=\"true\"\n                ></ngb-pagination>\n                <div class=\"alert alert-info\"><b>Current page: </b>{{ advancedPagination }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Pagination size</div>\n            <div class=\"card-body\">\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\" size=\"lg\"></ngb-pagination>\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\"></ngb-pagination>\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\" size=\"sm\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Disabled pagination</div>\n            <div class=\"card-body\">\n                <p>Pagination control can be disabled:</p>\n                <ngb-pagination\n                    [(page)]=\"disabledPagination\"\n                    [collectionSize]=\"70\"\n                    [disabled]=\"isDisabled\"\n                ></ngb-pagination>\n                <hr />\n                <button (click)=\"toggleDisabled()\" class=\"btn btn-outline-primary\">\n                    Toggle disabled\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 68065:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card mt-3\">\n    <div class=\"card-header\">\n        Pop over\n    </div>\n    <div class=\"card-body\">\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"top\"\n            popoverTitle=\"Popover on top\"\n            type=\"button\"\n        >\n            Popover on top\n        </button>\n\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"right\"\n            popoverTitle=\"Popover on right\"\n            type=\"button\"\n        >\n            Popover on right\n        </button>\n\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"bottom\"\n            popoverTitle=\"Popover on bottom\"\n            type=\"button\"\n        >\n            Popover on bottom\n        </button>\n\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"left\"\n            popoverTitle=\"Popover on left\"\n            type=\"button\"\n        >\n            Popover on left\n        </button>\n    </div>\n</div>\n";

/***/ }),

/***/ 83886:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card mt-3\">\n    <div class=\"card-header\">Progressbar</div>\n    <div class=\"card-body\">\n        <p>\n            <ngb-progressbar [value]=\"50\" type=\"info\"></ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [max]=\"200\" [value]=\"150\" showValue=\"true\" type=\"warning\"></ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [striped]=\"true\" [value]=\"100\" type=\"danger\"></ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [value]=\"25\" type=\"success\">25</ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [value]=\"50\" type=\"info\">Copying file <b>2 of 4</b>...</ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [animated]=\"true\" [striped]=\"true\" [value]=\"75\" type=\"warning\"><i>50%</i></ngb-progressbar>\n        </p>\n        <p class=\"mb-0\">\n            <ngb-progressbar [striped]=\"true\" [value]=\"100\" type=\"danger\">Completed!</ngb-progressbar>\n        </p>\n    </div>\n</div>\n";

/***/ }),

/***/ 91735:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Rating (<strong>Basic demo</strong>)</div>\n    <div class=\"card-body\">\n        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n        <hr />\n        <pre>Rate: <b>{{currentRate}}</b></pre>\n    </div>\n</div>\n";

/***/ }),

/***/ 15461:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"row mt-3\">\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker [(ngModel)]=\"defaultTime\"></ngb-timepicker>\n                <div class=\"alert alert-info\"><b>Selected time: </b>{{ defaultTime | json }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\n                <button (click)=\"toggleMeridian()\" class=\"btn btn-sm btn-outline-{{ meridian ? 'success' : 'danger' }}\">\n                    Meridian - {{ meridian ? 'ON' : 'OFF' }}\n                </button>\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ meridianTime | json }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Seconds</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker [(ngModel)]=\"SecondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\n                <button (click)=\"toggleSeconds()\" class=\"btn btn-sm btn-outline-{{ seconds ? 'success' : 'danger' }}\">\n                    Seconds - {{ seconds ? 'ON' : 'OFF' }}\n                </button>\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ SecondsTime | json }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 mt-3\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Custom Step</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker\n                    [(ngModel)]=\"customTime\"\n                    [hourStep]=\"hourStep\"\n                    [minuteStep]=\"minuteStep\"\n                    [secondStep]=\"secondStep\"\n                    [seconds]=\"true\"\n                ></ngb-timepicker>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeHourStep\">Hour Step</label>\n                        <input [(ngModel)]=\"hourStep\" class=\"form-control\" type=\"number\" />\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeMinuteStep\">Minute Step</label>\n                        <input [(ngModel)]=\"minuteStep\" class=\"form-control\" type=\"number\" />\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeSecondStep\">Second Step</label>\n                        <input [(ngModel)]=\"secondStep\" class=\"form-control\" type=\"number\" />\n                    </div>\n                </div>\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ customTime | json }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 41514:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Tooltip\n    </div>\n    <div class=\"card-body\">\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on top\" placement=\"top\" type=\"button\">\n            Tooltip on top\n        </button>\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on right\" placement=\"right\" type=\"button\">\n            Tooltip on right\n        </button>\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on bottom\" placement=\"bottom\" type=\"button\">\n            Tooltip on bottom\n        </button>\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on left\" placement=\"left\" type=\"button\">\n            Tooltip on left\n        </button>\n        <ng-template #StaticTipContent><em>Tooltip</em> <u>with</u> <b>HTML</b></ng-template>\n        <button [ngbTooltip]=\"StaticTipContent\" class=\"btn btn-secondary\" data-html=\"true\" type=\"button\">\n            Tooltip with HTML\n        </button>\n    </div>\n</div>\n";

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
//# sourceMappingURL=src_app_layout_bs-component_bs-component_module_ts.js.map