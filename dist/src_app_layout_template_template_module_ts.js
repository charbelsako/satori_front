"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_template_template_module_ts"],{

/***/ 5968:
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/template/components/add-edit-template/add-edit-template.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditTemplateComponent": () => (/* binding */ AddEditTemplateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_edit_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-template.component.html?ngResource */ 37590);
/* harmony import */ var _add_edit_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-template.component.scss?ngResource */ 78478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 79949);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/template.service */ 39600);









let AddEditTemplateComponent = class AddEditTemplateComponent {
    constructor(router, fb, route, templateService) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.templateService = templateService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editForm = false;
        this.isLoading = false;
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getTemplate(this.tempId);
            }
        });
        this.addEditForm = fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            template: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            templateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            cc: [null, []],
            bcc: [null, []],
        });
    }
    ngOnInit() {
    }
    getTemplate(tempId) {
        this.isLoading = true;
        this.templateService.getTemplateById(tempId).subscribe(response => {
            this.addEditForm.patchValue(response);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/notifications']);
        });
    }
    onSubmit() {
        this.templateService.addTemplates(this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                // this.toastr.success(response.title + ' added!', 'Success');
                this.router.navigate(['/notifications']);
            }
        });
    }
    onUpdate() {
        this.templateService.updateTemplate(this.tempId, this.addEditForm.value).subscribe(response => {
            if (response) {
                this.addEditForm.reset();
                // this.toastr.success(response.title + ' Updated!', 'Success');
                this.router.navigate(['/notifications']);
            }
        });
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
};
AddEditTemplateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_template_service__WEBPACK_IMPORTED_MODULE_4__.TemplateService }
];
AddEditTemplateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-edit-template',
        template: _add_edit_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_add_edit_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddEditTemplateComponent);



/***/ }),

/***/ 17317:
/*!***************************************************************************!*\
  !*** ./src/app/layout/template/components/template/template.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateComponent": () => (/* binding */ TemplateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.component.html?ngResource */ 5616);
/* harmony import */ var _template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.component.scss?ngResource */ 57168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_shared_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/directives */ 94221);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _service_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/template.service */ 39600);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services */ 17253);











let TemplateComponent = class TemplateComponent {
    constructor(router, templateService, cdr, confirmationDialogService, jwtService) {
        this.router = router;
        this.templateService = templateService;
        this.cdr = cdr;
        this.confirmationDialogService = confirmationDialogService;
        this.jwtService = jwtService;
        this.searchTerm = '';
        this.searchTermUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.templates = [];
        this.isTemplates = true;
        this.isLoading = false;
        this._state = {
            page: 1,
            limit: 20,
            totalPages: 1,
            totalResults: 0,
            searchTerm: '',
            sortColumn: 'createdAt',
            sortDirection: 'desc',
        };
        this.isEditAccess = false;
        this.searchTermUpdate
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
            .subscribe(value => {
            this._state.searchTerm = value;
            this.getTemplates(this._state);
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.isEditAccess = this.jwtService.checkAccess('templates');
        this.getTemplates(this._state);
    }
    getTemplates(state) {
        this.isLoading = true;
        this.templateService.getTemplates(state).subscribe(response => {
            this.templates = response['results'];
            this.setState(response);
            if (this.templates.length == 0) {
                this.isTemplates = false;
            }
            else {
                this.isTemplates = true;
            }
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    editTemplate(id) {
        this.router.navigate(['/notifications/edit-notification/' + id]);
    }
    deleteTemplate(id) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this template ?')
            .then((confirmed) => {
            if (confirmed) {
                this.templateService.deleteTemplate(id).subscribe(response => {
                    this.getTemplates(this._state);
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
        this.getTemplates(this._state);
    }
    refresh() {
        this.getTemplates(this._state);
    }
    setState(response) {
        this._state.page = response.page;
        this._state.limit = response.limit;
        this._state.totalPages = response.totalPages;
        this._state.totalResults = response.totalResults;
    }
};
TemplateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _service_template_service__WEBPACK_IMPORTED_MODULE_5__.TemplateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _app_shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmationDialogService },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_6__.JwtService }
];
TemplateComponent.propDecorators = {
    headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChildren, args: [_app_shared_directives__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader,] }]
};
TemplateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-template',
        template: _template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TemplateComponent);



/***/ }),

/***/ 59182:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/template/components/view-template/view-template.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTemplateComponent": () => (/* binding */ ViewTemplateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-template.component.html?ngResource */ 90385);
/* harmony import */ var _view_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-template.component.scss?ngResource */ 2585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 79949);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/template.service */ 39600);
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services */ 17253);










let ViewTemplateComponent = class ViewTemplateComponent {
    constructor(router, fb, route, templateService, jwtService) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.templateService = templateService;
        this.jwtService = jwtService;
        this.Editor = (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default());
        this.editForm = false;
        this.isLoading = false;
        this.templateData = [];
        this.route.params.subscribe(params => {
            if (params.tempId !== '' && params.tempId != null) {
                this.tempId = params.tempId;
                this.editForm = true;
                this.getTemplate(this.tempId);
            }
        });
    }
    ngOnInit() {
        this.isEditAccess = this.jwtService.checkAccess('templates');
    }
    getTemplate(tempId) {
        this.isLoading = true;
        this.templateService.getTemplateById(tempId).subscribe(response => {
            this.templateData = response;
            console.log(this.templateData);
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.router.navigate(['/templates']);
        });
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    editTemplate(id) {
        this.router.navigate(['/notifications/edit-notification/' + id]);
    }
};
ViewTemplateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_template_service__WEBPACK_IMPORTED_MODULE_4__.TemplateService },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_5__.JwtService }
];
ViewTemplateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-view-template',
        template: _view_template_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_view_template_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewTemplateComponent);



/***/ }),

/***/ 39600:
/*!*************************************************************!*\
  !*** ./src/app/layout/template/service/template.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateService": () => (/* binding */ TemplateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/services/api/api.service */ 32487);



let TemplateService = class TemplateService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getTemplates(data) {
        if (data.searchTerm == '') {
            return this.apiService.get(`/templates?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}`);
        }
        else {
            return this.apiService.get(`/templates?sortBy=${data.sortColumn + ':' + data.sortDirection}&limit=${data.limit}&page=${data.page}&search=${data.searchTerm}`);
        }
    }
    addTemplates(data) {
        return this.apiService.post(`/templates`, data);
    }
    getTemplateById(data) {
        return this.apiService.get(`/templates/${data}`);
    }
    deleteTemplate(data) {
        return this.apiService.delete(`/templates/${data}`);
    }
    updateTemplate(templateId, data) {
        return this.apiService.patch(`/templates/${templateId}`, data);
    }
};
TemplateService.ctorParameters = () => [
    { type: _app_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService }
];
TemplateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], TemplateService);



/***/ }),

/***/ 20455:
/*!************************************************************!*\
  !*** ./src/app/layout/template/template-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateRoutingModule": () => (/* binding */ TemplateRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-edit-template/add-edit-template.component */ 5968);
/* harmony import */ var _components_template_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template/template.component */ 17317);
/* harmony import */ var _components_view_template_view_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view-template/view-template.component */ 59182);






const routes = [
    {
        path: '',
        component: _components_template_template_component__WEBPACK_IMPORTED_MODULE_1__.TemplateComponent
    },
    {
        path: 'add-notification',
        component: _components_add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_0__.AddEditTemplateComponent
    },
    {
        path: 'edit-notification/:tempId',
        component: _components_add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_0__.AddEditTemplateComponent
    },
    {
        path: 'view-notification/:tempId',
        component: _components_view_template_view_template_component__WEBPACK_IMPORTED_MODULE_2__.ViewTemplateComponent
    }
];
let TemplateRoutingModule = class TemplateRoutingModule {
};
TemplateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], TemplateRoutingModule);



/***/ }),

/***/ 70839:
/*!****************************************************!*\
  !*** ./src/app/layout/template/template.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateModule": () => (/* binding */ TemplateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 87194);
/* harmony import */ var _template_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-routing.module */ 20455);
/* harmony import */ var _components_template_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template/template.component */ 17317);
/* harmony import */ var _components_add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-edit-template/add-edit-template.component */ 5968);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _service_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/template.service */ 39600);
/* harmony import */ var _shared_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives */ 94221);
/* harmony import */ var _components_view_template_view_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-template/view-template.component */ 59182);













let TemplateModule = class TemplateModule {
};
TemplateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _components_template_template_component__WEBPACK_IMPORTED_MODULE_1__.TemplateComponent,
            _components_add_edit_template_add_edit_template_component__WEBPACK_IMPORTED_MODULE_2__.AddEditTemplateComponent,
            _components_view_template_view_template_component__WEBPACK_IMPORTED_MODULE_6__.ViewTemplateComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _template_routing_module__WEBPACK_IMPORTED_MODULE_0__.TemplateRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _app_shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__.CKEditorModule
        ],
        providers: [_shared_directives__WEBPACK_IMPORTED_MODULE_5__.NgbdSortableHeader, _service_template_service__WEBPACK_IMPORTED_MODULE_4__.TemplateService]
    })
], TemplateModule);



/***/ }),

/***/ 78478:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/template/components/add-edit-template/add-edit-template.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = ".ck.ck-content {\n  border: 2px solid #707070 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJhZGQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay5jay1jb250ZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 57168:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/template/components/template/template.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2585:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/template/components/view-template/view-template.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ".form-group {\n  margin-bottom: 10px !important;\n}\n.form-group label {\n  font-size: 18px;\n  font-weight: 400;\n  margin: 10px;\n}\n.container {\n  padding: 10px;\n  border: 2px solid #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InZpZXctdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxufSBcblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyO1xufSJdfQ== */";

/***/ }),

/***/ 37590:
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/template/components/add-edit-template/add-edit-template.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <!-- <app-page-header [previousHeading]=\"'Notification'\" [previousLink]=\"'notifications'\" [heading]=\"'Add|Edit Notification'\"></app-page-header> -->\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                 Notification\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n                <form *ngIf=\"!isLoading\" [formGroup]=\"addEditForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">Title *</label>\n                                <input formControlName=\"title\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['title'].errors && (addEditForm.controls['title'].dirty || addEditForm.controls['title'].touched)\">\n                                    <span class=\" text-danger error\" *ngIf=\"addEditForm.controls['title'].errors?.required\">\n                                        * Title is required.\n                                    </span>\n                                </div>\n                            </div>\n    \n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">Template Id *</label>\n                                <input formControlName=\"templateId\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['templateId'].errors && (addEditForm.controls['templateId'].dirty || addEditForm.controls['templateId'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['templateId'].errors?.required\">\n                                        * Template Id is required.\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">CC </label>\n                                <input formControlName=\"cc\" type=\"text\" class=\"form-control\">\n    \n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">Subject *</label>\n                                <input formControlName=\"subject\" type=\"text\" class=\"form-control\">\n                                <div\n                                    *ngIf=\"addEditForm.controls['subject'].errors && (addEditForm.controls['subject'].dirty || addEditForm.controls['subject'].touched)\">\n                                    <span class=\" text-danger error\"\n                                        *ngIf=\"addEditForm.controls['subject'].errors?.required\">\n                                        * Subject is required.\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"form-group mb-2\">\n                                <label class=\"bmd-label-floating\">BCC </label>\n                                <input formControlName=\"bcc\" type=\"text\" class=\"form-control\">\n    \n                            </div>\n                        </div>\n                        <div class=\"col-md-12 mb-2\">\n                            <!-- <div [froalaEditor] [(froalaModel)]=\"template\" ></div> -->\n                            <!-- <textarea [froalaEditor] formControlName=\"template\"></textarea> -->\n                            <ckeditor [editor]=\"Editor\" formControlName=\"template\" (ready)=\"onReady($event)\"></ckeditor>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2 py-2 text-right\">\n                        <button type=\"button\" *ngIf=\"editForm\" (click)=\"onUpdate()\" class=\"btn btn-info\">Update\n                            Notification</button>\n                        <button type=\"button\" *ngIf=\"!editForm\" (click)=\"onSubmit()\" class=\"btn btn-info\">Add\n                            Notification</button>\n                        <button type=\"button\" routerLink=\"/notifications\" class=\"btn btn-secondary\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ }),

/***/ 5616:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/template/components/template/template.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Notifications'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row mb-2 search-header\">\n                  <div class=\"col-sm-9 col-lg-10 text-left mb-1 mb-md-0\">\n                    <div class=\"form-group mb-1\">\n                      <input type=\"text\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"_state.searchTerm\"\n                        (ngModelChange)=\"this.searchTermUpdate.next($event)\" class=\"form-control\" placeholder=\"Search here...\">\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3 col-lg-2 text-center\">\n                    <button *ngIf=\"isEditAccess\" type=\"button\" routerLink=\"/notifications/add-notification\" class=\"btn btn-primary btn-block\">Add Notification</button>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"isLoading\">\n                  <div class=\"text-center\">\n                    <div class=\"spinner-border\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </div>\n                </ng-container>\n                <div *ngIf=\"!isTemplates;else table\">\n                  <p class=\"text-center\">No Templates found</p>\n                </div>\n                <ng-template #table>\n                  <div *ngIf=\"!isLoading\">\n                    <div class=\"table-responsive\">\n                      <table  class=\"table table-striped\">\n                        <thead>\n                          <tr>\n                            <!-- <th>#</th> -->\n                            <th scope=\"col\" sortable=\"title\" (sort)=\"onSort($event)\">Title</th>\n                            <th scope=\"col\" sortable=\"subject\" (sort)=\"onSort($event)\">Subject</th>\n                            <th *ngIf=\"isEditAccess\" scope=\"col\">Edit</th>\n                            <th *ngIf=\"isEditAccess\" scope=\"col\">Delete</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let template of templates; let i = index\">\n                            <!-- <td>{{i+1}}</td> -->\n                            <td>\n                              <a [routerLink]=\"['view-notification',template.id]\">\n                                {{template?.title}}\n                            </a>\n                            </td>\n                            <td>{{template?.subject}}</td>\n                            <td *ngIf=\"isEditAccess\">\n                              <div class=\"action-buttons\"><button\n                                  (click)=\"editTemplate(template.id)\"><img\n                                      src=\"assets/images/pencil.svg\"\n                                      alt=\"\"></button></div>\n                            </td>\n                            <td *ngIf=\"isEditAccess\">\n                              <div class=\"action-buttons\">\n                              <button\n                                  (click)=\"deleteTemplate(template.id)\"><img\n                                      src=\"assets/images/icons8-trash-can.svg\"\n                                      alt=\"\"></button></div>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n             \n                    <div class=\"d-flex justify-content-between p-2\">\n                      <ngb-pagination [collectionSize]=\"_state.totalResults\" [(page)]=\"_state.page\" [pageSize]=\"_state.limit\" [rotate]=\"true\" [maxSize]=\"5\" [boundaryLinks]=\"true\"\n                        (pageChange)=\"refresh()\">\n                      </ngb-pagination>\n                      <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"_state.limit\" (ngModelChange)=\"refresh()\">\n                        <option [ngValue]=\"10\">10 items per page</option>\n                        <option [ngValue]=\"20\">20 items per page</option>\n                        <option [ngValue]=\"30\">30 items per page</option>\n                      </select>\n                    </div>\n                  </div>  \n                </ng-template>\n              </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ }),

/***/ 90385:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/template/components/view-template/view-template.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition]>\n    <app-page-header [previousHeading]=\"'Notification'\" [previousLink]=\"'notifications'\" [heading]=\"'View Notification'\"></app-page-header>\n    <div class=\"container-fluid mt-2\" [@routerTransition]>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                 Notification\n                 <button *ngIf=\"isEditAccess\" style=\"float: right;\" (click)=\"editTemplate(templateData.id)\" class=\"btn btn-info\">Edit</button>\n            </div>\n            <div class=\"card-body\">\n                <ng-container *ngIf=\"isLoading\">\n                    <div class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                    </div>\n                </ng-container>\n            <ng-container>\n                <div class=\"form-group\">\n                    <label>Title: {{templateData.title}}</label>\n                </div>\n                <div class=\"form-group\">\n                    <label>Subject: {{templateData.subject}}</label>\n                </div>\n                <div class=\"form-group\">\n                    <label>CC: {{templateData.cc}}</label>\n                </div>\n                <div class=\"form-group\">\n                    <label>BCC: {{templateData.bcc}}</label>\n                </div>\n                <div class=\"container\" [innerHTML]=\"templateData.template\"></div>\n            </ng-container>\n               \n            </div>\n        </div>\n    </div>  \n</div>\n  ";

/***/ }),

/***/ 87194:
/*!******************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-angular/fesm2020/ckeditor-ckeditor5-angular.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CKEditorComponent": () => (/* binding */ CKEditorComponent),
/* harmony export */   "CKEditorModule": () => (/* binding */ CKEditorModule)
/* harmony export */ });
/* harmony import */ var _Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ckeditor_ckeditor5_watchdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-watchdog */ 12440);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);







/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
// A copy of @ckeditor/ckeditor5-utils/src/uid.js
// A hash table of hex numbers to avoid using toString() in uid() which is costly.
// [ '00', '01', '02', ..., 'fe', 'ff' ]

function CKEditorComponent_ng_template_0_Template(rf, ctx) {}

const HEX_NUMBERS = new Array(256).fill(0).map((val, index) => ('0' + index.toString(16)).slice(-2));
/**
 * Returns a unique id. The id starts with an "e" character and a randomly generated string of
 * 32 alphanumeric characters.
 *
 * **Note**: The characters the unique id is built from correspond to the hex number notation
 * (from "0" to "9", from "a" to "f"). In other words, each id corresponds to an "e" followed
 * by 16 8-bit numbers next to each other.
 *
 * @returns An unique id string.
 */

function uid() {
  // Let's create some positive random 32bit integers first.
  //
  // 1. Math.random() is a float between 0 and 1.
  // 2. 0x100000000 is 2^32 = 4294967296.
  // 3. >>> 0 enforces integer (in JS all numbers are floating point).
  //
  // For instance:
  //		Math.random() * 0x100000000 = 3366450031.853859
  // but
  //		Math.random() * 0x100000000 >>> 0 = 3366450031.
  const r1 = Math.random() * 0x100000000 >>> 0;
  const r2 = Math.random() * 0x100000000 >>> 0;
  const r3 = Math.random() * 0x100000000 >>> 0;
  const r4 = Math.random() * 0x100000000 >>> 0; // Make sure that id does not start with number.

  return 'e' + HEX_NUMBERS[r1 >> 0 & 0xFF] + HEX_NUMBERS[r1 >> 8 & 0xFF] + HEX_NUMBERS[r1 >> 16 & 0xFF] + HEX_NUMBERS[r1 >> 24 & 0xFF] + HEX_NUMBERS[r2 >> 0 & 0xFF] + HEX_NUMBERS[r2 >> 8 & 0xFF] + HEX_NUMBERS[r2 >> 16 & 0xFF] + HEX_NUMBERS[r2 >> 24 & 0xFF] + HEX_NUMBERS[r3 >> 0 & 0xFF] + HEX_NUMBERS[r3 >> 8 & 0xFF] + HEX_NUMBERS[r3 >> 16 & 0xFF] + HEX_NUMBERS[r3 >> 24 & 0xFF] + HEX_NUMBERS[r4 >> 0 & 0xFF] + HEX_NUMBERS[r4 >> 8 & 0xFF] + HEX_NUMBERS[r4 >> 16 & 0xFF] + HEX_NUMBERS[r4 >> 24 & 0xFF];
}

const ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID = 'Lock from Angular integration (@ckeditor/ckeditor5-angular)';

class CKEditorComponent {
  constructor(elementRef, ngZone) {
    /**
     * The configuration of the editor.
     * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
     * to learn more.
     */
    this.config = {};
    /**
     * The initial data of the editor. Useful when not using the ngModel.
     * See https://angular.io/api/forms/NgModel to learn more.
     */

    this.data = '';
    /**
     * Tag name of the editor component.
     *
     * The default tag is 'div'.
     */

    this.tagName = 'div';
    /**
     * Allows disabling the two-way data binding mechanism. Disabling it can boost performance for large documents.
     *
     * When a component is connected using the [(ngModel)] or [formControl] directives and this value is set to true then none of the data
     * will ever be synchronized.
     *
     * An integrator must call `editor.data.get()` manually once the application needs the editor's data.
     * An editor instance can be received in the `ready()` callback.
     */

    this.disableTwoWayDataBinding = false;
    /**
     * Fires when the editor is ready. It corresponds with the `editor#ready`
     * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
     * event.
     */

    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
     * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
     * event.
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
     * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
     * event.
     */

    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
     * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
     * event.
     */

    this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Fires when the editor component crashes.
     */

    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * If the component is read–only before the editor instance is created, it remembers that state,
     * so the editor can become read–only once it is ready.
     */

    this.initiallyDisabled = false;
    /**
     * A lock flag preventing from calling the `cvaOnChange()` during setting editor data.
     */

    this.isEditorSettingData = false;
    this.id = uid();
    this.ngZone = ngZone;
    this.elementRef = elementRef; // To avoid issues with the community typings and CKEditor 5, let's treat window as any. See #342.

    const {
      CKEDITOR_VERSION
    } = window;

    if (CKEDITOR_VERSION) {
      const [major] = CKEDITOR_VERSION.split('.').map(Number);

      if (major < 37) {
        console.warn('The <CKEditor> component requires using CKEditor 5 in version 37 or higher.');
      }
    } else {
      console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
    }
  }
  /**
   * When set `true`, the editor becomes read-only.
   * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
   * to learn more.
   */


  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }

  get disabled() {
    if (this.editorInstance) {
      return this.editorInstance.isReadOnly;
    }

    return this.initiallyDisabled;
  }
  /**
   * The instance of the editor created by this component.
   */


  get editorInstance() {
    let editorWatchdog = this.editorWatchdog;

    if (this.watchdog) {
      // Temporarily use the `_watchdogs` internal map as the `getItem()` method throws
      // an error when the item is not registered yet.
      // See https://github.com/ckeditor/ckeditor5-angular/issues/177.
      // TODO should be able to change when new chages in Watcdog are released.
      editorWatchdog = this.watchdog._watchdogs.get(this.id);
    }

    if (editorWatchdog) {
      return editorWatchdog.editor;
    }

    return null;
  }

  getId() {
    return this.id;
  } // Implementing the OnChanges interface. Whenever the `data` property is changed, update the editor content.


  ngOnChanges(changes) {
    if (Object.prototype.hasOwnProperty.call(changes, 'data') && changes.data && !changes.data.isFirstChange()) {
      this.writeValue(changes.data.currentValue);
    }
  } // Implementing the AfterViewInit interface.


  ngAfterViewInit() {
    this.attachToWatchdog();
  } // Implementing the OnDestroy interface.


  ngOnDestroy() {
    var _this = this;

    return (0,_Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.watchdog) {
        yield _this.watchdog.remove(_this.id);
      } else if (_this.editorWatchdog && _this.editorWatchdog.editor) {
        yield _this.editorWatchdog.destroy();
        _this.editorWatchdog = undefined;
      }
    })();
  } // Implementing the ControlValueAccessor interface (only when binding to ngModel).


  writeValue(value) {
    // This method is called with the `null` value when the form resets.
    // A component's responsibility is to restore to the initial state.
    if (value === null) {
      value = '';
    } // If already initialized.


    if (this.editorInstance) {
      // The lock mechanism prevents from calling `cvaOnChange()` during changing
      // the editor state. See #139
      this.isEditorSettingData = true;
      this.editorInstance.data.set(value);
      this.isEditorSettingData = false;
    } // If not, wait for it to be ready; store the data.
    else {
      // If the editor element is already available, then update its content.
      this.data = value; // If not, then wait until it is ready
      // and change data only for the first `ready` event.

      this.ready.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(editor => {
        editor.data.set(this.data);
      });
    }
  } // Implementing the ControlValueAccessor interface (only when binding to ngModel).


  registerOnChange(callback) {
    this.cvaOnChange = callback;
  } // Implementing the ControlValueAccessor interface (only when binding to ngModel).


  registerOnTouched(callback) {
    this.cvaOnTouched = callback;
  } // Implementing the ControlValueAccessor interface (only when binding to ngModel).


  setDisabledState(isDisabled) {
    // If already initialized.
    if (this.editorInstance) {
      if (isDisabled) {
        this.editorInstance.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      } else {
        this.editorInstance.disableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
      }
    } // Store the state anyway to use it once the editor is created.


    this.initiallyDisabled = isDisabled;
  }
  /**
   * Creates the editor instance, sets initial editor data, then integrates
   * the editor with the Angular component. This method does not use the `editor.data.set()`
   * because of the issue in the collaboration mode (#6).
   */


  attachToWatchdog() {
    var _this2 = this;

    // TODO: elementOrData parameter type can be simplified to HTMLElemen after templated Watchdog will be released.
    const creator = (elementOrData, config) => {
      return this.ngZone.runOutsideAngular( /*#__PURE__*/(0,_Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.elementRef.nativeElement.appendChild(elementOrData);

        const editor = yield _this2.editor.create(elementOrData, config);

        if (_this2.initiallyDisabled) {
          editor.enableReadOnlyMode(ANGULAR_INTEGRATION_READ_ONLY_LOCK_ID);
        }

        _this2.ngZone.run(() => {
          _this2.ready.emit(editor);
        });

        _this2.setUpEditorEvents(editor);

        return editor;
      }));
    };

    const destructor = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (editor) {
        yield editor.destroy();

        _this2.elementRef.nativeElement.removeChild(_this2.editorElement);
      });

      return function destructor(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    const emitError = e => {
      // Do not run change detection by re-entering the Angular zone if the `error`
      // emitter doesn't have any subscribers.
      // Subscribers are pushed onto the list whenever `error` is listened inside the template:
      // `<ckeditor (error)="onError(...)"></ckeditor>`.
      if (hasObservers(this.error)) {
        this.ngZone.run(() => this.error.emit(e));
      }
    };

    const element = document.createElement(this.tagName);
    const config = this.getConfig();
    this.editorElement = element; // Based on the presence of the watchdog decide how to initialize the editor.

    if (this.watchdog) {
      // When the context watchdog is passed add the new item to it based on the passed configuration.
      this.watchdog.add({
        id: this.id,
        type: 'editor',
        creator,
        destructor,
        sourceElementOrData: element,
        config
      }).catch(e => {
        emitError(e);
      });
      this.watchdog.on('itemError', (_, {
        itemId
      }) => {
        if (itemId === this.id) {
          emitError();
        }
      });
    } else {
      // In the other case create the watchdog by hand to keep the editor running.
      const editorWatchdog = new _ckeditor_ckeditor5_watchdog__WEBPACK_IMPORTED_MODULE_1__.EditorWatchdog(this.editor, this.editorWatchdogConfig);
      editorWatchdog.setCreator(creator);
      editorWatchdog.setDestructor(destructor);
      editorWatchdog.on('error', emitError);
      this.editorWatchdog = editorWatchdog;
      this.ngZone.runOutsideAngular(() => {
        // Note: must be called outside of the Angular zone too because `create` is calling
        // `_startErrorHandling` within a microtask which sets up `error` listener on the window.
        editorWatchdog.create(element, config).catch(e => {
          emitError(e);
        });
      });
    }
  }

  getConfig() {
    if (this.data && this.config.initialData) {
      throw new Error('Editor data should be provided either using `config.initialData` or `data` properties.');
    }

    const config = { ...this.config
    }; // Merge two possible ways of providing data into the `config.initialData` field.

    const initialData = this.config.initialData || this.data;

    if (initialData) {
      // Define the `config.initialData` only when the initial content is specified.
      config.initialData = initialData;
    }

    return config;
  }
  /**
   * Integrates the editor with the component by attaching related event listeners.
   */


  setUpEditorEvents(editor) {
    const modelDocument = editor.model.document;
    const viewDocument = editor.editing.view.document;
    modelDocument.on('change:data', evt => {
      this.ngZone.run(() => {
        if (this.disableTwoWayDataBinding) {
          return;
        }

        if (this.cvaOnChange && !this.isEditorSettingData) {
          const data = editor.data.get();
          this.cvaOnChange(data);
        }

        this.change.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on('focus', evt => {
      this.ngZone.run(() => {
        this.focus.emit({
          event: evt,
          editor
        });
      });
    });
    viewDocument.on('blur', evt => {
      this.ngZone.run(() => {
        if (this.cvaOnTouched) {
          this.cvaOnTouched();
        }

        this.blur.emit({
          event: evt,
          editor
        });
      });
    });
  }

}

CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
  return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
};

CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CKEditorComponent,
  selectors: [["ckeditor"]],
  inputs: {
    editor: "editor",
    config: "config",
    data: "data",
    tagName: "tagName",
    watchdog: "watchdog",
    editorWatchdogConfig: "editorWatchdogConfig",
    disableTwoWayDataBinding: "disableTwoWayDataBinding",
    disabled: "disabled"
  },
  outputs: {
    ready: "ready",
    change: "change",
    blur: "blur",
    focus: "focus",
    error: "error"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CKEditorComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 0,
  template: function CKEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CKEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'ckeditor',
      template: '<ng-template></ng-template>',
      // Integration with @angular/forms.
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CKEditorComponent),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, {
    editor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tagName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    watchdog: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    editorWatchdogConfig: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disableTwoWayDataBinding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    blur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    focus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

function hasObservers(emitter) {
  // Cast to `any` because `observed` property is available in RxJS >= 7.2.0.
  // Fallback to checking `observers` list if this property is not defined.
  return emitter.observed || emitter.observers.length > 0;
}
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */


class CKEditorModule {}

CKEditorModule.ɵfac = function CKEditorModule_Factory(t) {
  return new (t || CKEditorModule)();
};

CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CKEditorModule,
  declarations: [CKEditorComponent],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
  exports: [CKEditorComponent]
});
CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CKEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      declarations: [CKEditorComponent],
      exports: [CKEditorComponent]
    }]
  }], null, null);
})();
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 12138:
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/augmentation.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


/***/ }),

/***/ 99702:
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/contextwatchdog.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContextWatchdog)
/* harmony export */ });
/* harmony import */ var _watchdog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchdog.js */ 30633);
/* harmony import */ var _editorwatchdog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorwatchdog.js */ 17013);
/* harmony import */ var _utils_areconnectedthroughproperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/areconnectedthroughproperties.js */ 45727);
/* harmony import */ var _utils_getsubnodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getsubnodes.js */ 40399);
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */




const mainQueueId = Symbol('MainQueueId');
/**
 * A watchdog for the {@link module:core/context~Context} class.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and
 * how to use it.
 */

class ContextWatchdog extends _watchdog_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * The context watchdog class constructor.
   *
   * ```ts
   * const watchdog = new ContextWatchdog( Context );
   *
   * await watchdog.create( contextConfiguration );
   *
   * await watchdog.add( item );
   * ```
   *
   * See the {@glink features/watchdog Watchdog feature guide} to learn more how to use this feature.
   *
   * @param Context The {@link module:core/context~Context} class.
   * @param watchdogConfig The watchdog configuration.
   */
  constructor(Context, watchdogConfig = {}) {
    super(watchdogConfig);
    /**
     * A map of internal watchdogs for added items.
     */

    this._watchdogs = new Map();
    /**
     * The current context instance.
     */

    this._context = null;
    /**
     * Context properties (nodes/references) that are gathered during the initial context creation
     * and are used to distinguish the origin of an error.
     */

    this._contextProps = new Set();
    /**
     * An action queue, which is used to handle async functions queuing.
     */

    this._actionQueues = new ActionQueues();
    this._watchdogConfig = watchdogConfig; // Default creator and destructor.

    this._creator = contextConfig => Context.create(contextConfig);

    this._destructor = context => context.destroy();

    this._actionQueues.onEmpty(() => {
      if (this.state === 'initializing') {
        this.state = 'ready';

        this._fire('stateChange');
      }
    });
  }
  /**
   * Sets the function that is responsible for the context creation.
   * It expects a function that should return a promise (or `undefined`).
   *
   * ```ts
   * watchdog.setCreator( config => Context.create( config ) );
   * ```
   */


  setCreator(creator) {
    this._creator = creator;
  }
  /**
   * Sets the function that is responsible for the context destruction.
   * Overrides the default destruction function, which destroys only the context instance.
   * It expects a function that should return a promise (or `undefined`).
   *
   * ```ts
   * watchdog.setDestructor( context => {
   * 	// Do something before the context is destroyed.
   *
   * 	return context
   * 		.destroy()
   * 		.then( () => {
   * 			// Do something after the context is destroyed.
   * 		} );
   * } );
   * ```
   */


  setDestructor(destructor) {
    this._destructor = destructor;
  }
  /**
   * The context instance. Keep in mind that this property might be changed when the context watchdog restarts,
   * so do not keep this instance internally. Always operate on the `ContextWatchdog#context` property.
   */


  get context() {
    return this._context;
  }
  /**
   * Initializes the context watchdog. Once it is created, the watchdog takes care about
   * recreating the context and the provided items, and starts the error handling mechanism.
   *
   * ```ts
   * await watchdog.create( {
   * 	plugins: []
   * } );
   * ```
   *
   * @param contextConfig The context configuration. See {@link module:core/context~Context}.
   */


  create(contextConfig = {}) {
    return this._actionQueues.enqueue(mainQueueId, () => {
      this._contextConfig = contextConfig;
      return this._create();
    });
  }
  /**
   * Returns an item instance with the given `itemId`.
   *
   * ```ts
   * const editor1 = watchdog.getItem( 'editor1' );
   * ```
   *
   * @param itemId The item ID.
   * @returns The item instance or `undefined` if an item with a given ID has not been found.
   */


  getItem(itemId) {
    const watchdog = this._getWatchdog(itemId);

    return watchdog._item;
  }
  /**
   * Gets the state of the given item. See {@link #state} for a list of available states.
   *
   * ```ts
   * const editor1State = watchdog.getItemState( 'editor1' );
   * ```
   *
   * @param itemId Item ID.
   * @returns The state of the item.
   */


  getItemState(itemId) {
    const watchdog = this._getWatchdog(itemId);

    return watchdog.state;
  }
  /**
   * Adds items to the watchdog. Once created, instances of these items will be available using the {@link #getItem} method.
   *
   * Items can be passed together as an array of objects:
   *
   * ```ts
   * await watchdog.add( [ {
   * 	id: 'editor1',
   * 	type: 'editor',
   * 	sourceElementOrData: document.querySelector( '#editor' ),
   * 	config: {
   * 		plugins: [ Essentials, Paragraph, Bold, Italic ],
   * 		toolbar: [ 'bold', 'italic', 'alignment' ]
   * 	},
   * 	creator: ( element, config ) => ClassicEditor.create( element, config )
   * } ] );
   * ```
   *
   * Or one by one as objects:
   *
   * ```ts
   * await watchdog.add( {
   * 	id: 'editor1',
   * 	type: 'editor',
   * 	sourceElementOrData: document.querySelector( '#editor' ),
   * 	config: {
   * 		plugins: [ Essentials, Paragraph, Bold, Italic ],
   * 		toolbar: [ 'bold', 'italic', 'alignment' ]
   * 	},
   * 	creator: ( element, config ) => ClassicEditor.create( element, config )
   * ] );
   * ```
   *
   * Then an instance can be retrieved using the {@link #getItem} method:
   *
   * ```ts
   * const editor1 = watchdog.getItem( 'editor1' );
   * ```
   *
   * Note that this method can be called multiple times, but for performance reasons it is better
   * to pass all items together.
   *
   * @param itemConfigurationOrItemConfigurations An item configuration object or an array of item configurations.
   */


  add(itemConfigurationOrItemConfigurations) {
    const itemConfigurations = toArray(itemConfigurationOrItemConfigurations);
    return Promise.all(itemConfigurations.map(item => {
      return this._actionQueues.enqueue(item.id, () => {
        if (this.state === 'destroyed') {
          throw new Error('Cannot add items to destroyed watchdog.');
        }

        if (!this._context) {
          throw new Error('Context was not created yet. You should call the `ContextWatchdog#create()` method first.');
        }

        let watchdog;

        if (this._watchdogs.has(item.id)) {
          throw new Error(`Item with the given id is already added: '${item.id}'.`);
        }

        if (item.type === 'editor') {
          watchdog = new _editorwatchdog_js__WEBPACK_IMPORTED_MODULE_1__["default"](null, this._watchdogConfig);
          watchdog.setCreator(item.creator);

          watchdog._setExcludedProperties(this._contextProps);

          if (item.destructor) {
            watchdog.setDestructor(item.destructor);
          }

          this._watchdogs.set(item.id, watchdog); // Enqueue the internal watchdog errors within the main queue.
          // And propagate the internal `error` events as `itemError` event.


          watchdog.on('error', (evt, {
            error,
            causesRestart
          }) => {
            this._fire('itemError', {
              itemId: item.id,
              error
            }); // Do not enqueue the item restart action if the item will not restart.


            if (!causesRestart) {
              return;
            }

            this._actionQueues.enqueue(item.id, () => new Promise(res => {
              const rethrowRestartEventOnce = () => {
                watchdog.off('restart', rethrowRestartEventOnce);

                this._fire('itemRestart', {
                  itemId: item.id
                });

                res();
              };

              watchdog.on('restart', rethrowRestartEventOnce);
            }));
          });
          return watchdog.create(item.sourceElementOrData, item.config, this._context);
        } else {
          throw new Error(`Not supported item type: '${item.type}'.`);
        }
      });
    }));
  }
  /**
   * Removes and destroys item(s) with given ID(s).
   *
   * ```ts
   * await watchdog.remove( 'editor1' );
   * ```
   *
   * Or
   *
   * ```ts
   * await watchdog.remove( [ 'editor1', 'editor2' ] );
   * ```
   *
   * @param itemIdOrItemIds Item ID or an array of item IDs.
   */


  remove(itemIdOrItemIds) {
    const itemIds = toArray(itemIdOrItemIds);
    return Promise.all(itemIds.map(itemId => {
      return this._actionQueues.enqueue(itemId, () => {
        const watchdog = this._getWatchdog(itemId);

        this._watchdogs.delete(itemId);

        return watchdog.destroy();
      });
    }));
  }
  /**
   * Destroys the context watchdog and all added items.
   * Once the context watchdog is destroyed, new items cannot be added.
   *
   * ```ts
   * await watchdog.destroy();
   * ```
   */


  destroy() {
    return this._actionQueues.enqueue(mainQueueId, () => {
      this.state = 'destroyed';

      this._fire('stateChange');

      super.destroy();
      return this._destroy();
    });
  }
  /**
   * Restarts the context watchdog.
   */


  _restart() {
    return this._actionQueues.enqueue(mainQueueId, () => {
      this.state = 'initializing';

      this._fire('stateChange');

      return this._destroy().catch(err => {
        console.error('An error happened during destroying the context or items.', err);
      }).then(() => this._create()).then(() => this._fire('restart'));
    });
  }
  /**
   * Initializes the context watchdog.
   */


  _create() {
    return Promise.resolve().then(() => {
      this._startErrorHandling();

      return this._creator(this._contextConfig);
    }).then(context => {
      this._context = context;
      this._contextProps = (0,_utils_getsubnodes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._context);
      return Promise.all(Array.from(this._watchdogs.values()).map(watchdog => {
        watchdog._setExcludedProperties(this._contextProps);

        return watchdog.create(undefined, undefined, this._context);
      }));
    });
  }
  /**
   * Destroys the context instance and all added items.
   */


  _destroy() {
    return Promise.resolve().then(() => {
      this._stopErrorHandling();

      const context = this._context;
      this._context = null;
      this._contextProps = new Set();
      return Promise.all(Array.from(this._watchdogs.values()).map(watchdog => watchdog.destroy())) // Context destructor destroys each editor.
      .then(() => this._destructor(context));
    });
  }
  /**
   * Returns the watchdog for a given item ID.
   *
   * @param itemId Item ID.
   */


  _getWatchdog(itemId) {
    const watchdog = this._watchdogs.get(itemId);

    if (!watchdog) {
      throw new Error(`Item with the given id was not registered: ${itemId}.`);
    }

    return watchdog;
  }
  /**
   * Checks whether an error comes from the context instance and not from the item instances.
   *
   * @internal
   */


  _isErrorComingFromThisItem(error) {
    for (const watchdog of this._watchdogs.values()) {
      if (watchdog._isErrorComingFromThisItem(error)) {
        return false;
      }
    }

    return (0,_utils_areconnectedthroughproperties_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._context, error.context);
  }

}
/**
 * Manager of action queues that allows queuing async functions.
 */

class ActionQueues {
  constructor() {
    this._onEmptyCallbacks = [];
    this._queues = new Map();
    this._activeActions = 0;
  }
  /**
   * Used to register callbacks that will be run when the queue becomes empty.
   *
   * @param onEmptyCallback A callback that will be run whenever the queue becomes empty.
   */


  onEmpty(onEmptyCallback) {
    this._onEmptyCallbacks.push(onEmptyCallback);
  }
  /**
   * It adds asynchronous actions (functions) to the proper queue and runs them one by one.
   *
   * @param queueId The action queue ID.
   * @param action A function that should be enqueued.
   */


  enqueue(queueId, action) {
    const isMainAction = queueId === mainQueueId;
    this._activeActions++;

    if (!this._queues.get(queueId)) {
      this._queues.set(queueId, Promise.resolve());
    } // List all sources of actions that the current action needs to await for.
    // For the main action wait for all other actions.
    // For the item action wait only for the item queue and the main queue.


    const awaitedActions = isMainAction ? Promise.all(this._queues.values()) : Promise.all([this._queues.get(mainQueueId), this._queues.get(queueId)]);
    const queueWithAction = awaitedActions.then(action); // Catch all errors in the main queue to stack promises even if an error occurred in the past.

    const nonErrorQueue = queueWithAction.catch(() => {});

    this._queues.set(queueId, nonErrorQueue);

    return queueWithAction.finally(() => {
      this._activeActions--;

      if (this._queues.get(queueId) === nonErrorQueue && this._activeActions === 0) {
        this._onEmptyCallbacks.forEach(cb => cb());
      }
    });
  }

}
/**
 * Transforms any value to an array. If the provided value is already an array, it is returned unchanged.
 *
 * @param elementOrArray The value to transform to an array.
 * @returns An array created from data.
 */


function toArray(elementOrArray) {
  return Array.isArray(elementOrArray) ? elementOrArray : [elementOrArray];
}

/***/ }),

/***/ 17013:
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorWatchdog)
/* harmony export */ });
/* harmony import */ var _utils_areconnectedthroughproperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/areconnectedthroughproperties.js */ 45727);
/* harmony import */ var _watchdog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchdog.js */ 30633);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 69616);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 25780);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 5846);
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */



/**
 * A watchdog for CKEditor 5 editors.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and
 * how to use it.
 */

class EditorWatchdog extends _watchdog_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param Editor The editor class.
   * @param watchdogConfig The watchdog plugin configuration.
   */
  constructor(Editor, watchdogConfig = {}) {
    super(watchdogConfig);
    /**
     * The current editor instance.
     */

    this._editor = null;
    /**
     * Specifies whether the editor was initialized using document data (`true`) or HTML elements (`false`).
     */

    this._initUsingData = true;
    /**
     * The latest record of the editor editable elements. Used to restart the editor.
     */

    this._editables = {}; // this._editorClass = Editor;

    this._throttledSave = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(this._save.bind(this), typeof watchdogConfig.saveInterval === 'number' ? watchdogConfig.saveInterval : 5000); // Set default creator and destructor functions:

    if (Editor) {
      this._creator = (elementOrData, config) => Editor.create(elementOrData, config);
    }

    this._destructor = editor => editor.destroy();
  }
  /**
   * The current editor instance.
   */


  get editor() {
    return this._editor;
  }
  /**
   * @internal
   */


  get _item() {
    return this._editor;
  }
  /**
   * Sets the function that is responsible for the editor creation.
   * It expects a function that should return a promise.
   *
   * ```ts
   * watchdog.setCreator( ( element, config ) => ClassicEditor.create( element, config ) );
   * ```
   */


  setCreator(creator) {
    this._creator = creator;
  }
  /**
   * Sets the function that is responsible for the editor destruction.
   * Overrides the default destruction function, which destroys only the editor instance.
   * It expects a function that should return a promise or `undefined`.
   *
   * ```ts
   * watchdog.setDestructor( editor => {
   * 	// Do something before the editor is destroyed.
   *
   * 	return editor
   * 		.destroy()
   * 		.then( () => {
   * 			// Do something after the editor is destroyed.
   * 		} );
   * } );
   * ```
   */


  setDestructor(destructor) {
    this._destructor = destructor;
  }
  /**
   * Restarts the editor instance. This method is called whenever an editor error occurs. It fires the `restart` event and changes
   * the state to `initializing`.
   *
   * @fires restart
   */


  _restart() {
    return Promise.resolve().then(() => {
      this.state = 'initializing';

      this._fire('stateChange');

      return this._destroy();
    }).catch(err => {
      console.error('An error happened during the editor destroying.', err);
    }).then(() => {
      // Pre-process some data from the original editor config.
      // Our goal here is to make sure that the restarted editor will be reinitialized with correct set of roots.
      // We are not interested in any data set in config or in `.create()` first parameter. It will be replaced anyway.
      // But we need to set them correctly to make sure that proper roots are created.
      //
      // Since a different set of roots will be created, `lazyRoots` and `rootsAttributes` properties must be managed too.
      // Keys are root names, values are ''. Used when the editor was initialized by setting the first parameter to document data.
      const existingRoots = {}; // Keeps lazy roots. They may be different when compared to initial config if some of the roots were loaded.

      const lazyRoots = []; // Roots attributes from the old config. Will be referred when setting new attributes.

      const oldRootsAttributes = this._config.rootsAttributes || {}; // New attributes to be set. Is filled only for roots that still exist in the document.

      const rootsAttributes = {}; // Traverse through the roots saved when the editor crashed and set up the discussed values.

      for (const [rootName, rootData] of Object.entries(this._data.roots)) {
        if (rootData.isLoaded) {
          existingRoots[rootName] = '';
          rootsAttributes[rootName] = oldRootsAttributes[rootName] || {};
        } else {
          lazyRoots.push(rootName);
        }
      }

      const updatedConfig = { ...this._config,
        extraPlugins: this._config.extraPlugins || [],
        lazyRoots,
        rootsAttributes,
        _watchdogInitialData: this._data
      }; // Delete `initialData` as it is not needed. Data will be set by the watchdog based on `_watchdogInitialData`.
      // First parameter of the editor `.create()` will be used to set up initial roots.

      delete updatedConfig.initialData;
      updatedConfig.extraPlugins.push(EditorWatchdogInitPlugin);

      if (this._initUsingData) {
        return this.create(existingRoots, updatedConfig, updatedConfig.context);
      } else {
        // Set correct editables to make sure that proper roots are created and linked with DOM elements.
        // No need to set initial data, as it would be discarded anyway.
        //
        // If one element was initially set in `elementOrData`, then use that original element to restart the editor.
        // This is for compatibility purposes with single-root editor types.
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(this._elementOrData)) {
          return this.create(this._elementOrData, updatedConfig, updatedConfig.context);
        } else {
          return this.create(this._editables, updatedConfig, updatedConfig.context);
        }
      }
    }).then(() => {
      this._fire('restart');
    });
  }
  /**
   * Creates the editor instance and keeps it running, using the defined creator and destructor.
   *
   * @param elementOrData The editor source element or the editor data.
   * @param config The editor configuration.
   * @param context A context for the editor.
   */


  create(elementOrData = this._elementOrData, config = this._config, context) {
    return Promise.resolve().then(() => {
      super._startErrorHandling();

      this._elementOrData = elementOrData; // Use document data in the first parameter of the editor `.create()` call only if it was used like this originally.
      // Use document data if a string or object with strings was passed.

      this._initUsingData = typeof elementOrData == 'string' || Object.keys(elementOrData).length > 0 && typeof Object.values(elementOrData)[0] == 'string'; // Clone configuration because it might be shared within multiple watchdog instances. Otherwise,
      // when an error occurs in one of these editors, the watchdog will restart all of them.

      this._config = this._cloneEditorConfiguration(config) || {};
      this._config.context = context;
      return this._creator(elementOrData, this._config);
    }).then(editor => {
      this._editor = editor;
      editor.model.document.on('change:data', this._throttledSave);
      this._lastDocumentVersion = editor.model.document.version;
      this._data = this._getData();

      if (!this._initUsingData) {
        this._editables = this._getEditables();
      }

      this.state = 'ready';

      this._fire('stateChange');
    });
  }
  /**
   * Destroys the watchdog and the current editor instance. It fires the callback
   * registered in {@link #setDestructor `setDestructor()`} and uses it to destroy the editor instance.
   * It also sets the state to `destroyed`.
   */


  destroy() {
    return Promise.resolve().then(() => {
      this.state = 'destroyed';

      this._fire('stateChange');

      super.destroy();
      return this._destroy();
    });
  }

  _destroy() {
    return Promise.resolve().then(() => {
      this._stopErrorHandling();

      this._throttledSave.cancel();

      const editor = this._editor;
      this._editor = null; // Remove the `change:data` listener before destroying the editor.
      // Incorrectly written plugins may trigger firing `change:data` events during the editor destruction phase
      // causing the watchdog to call `editor.getData()` when some parts of editor are already destroyed.

      editor.model.document.off('change:data', this._throttledSave);
      return this._destructor(editor);
    });
  }
  /**
   * Saves the editor data, so it can be restored after the crash even if the data cannot be fetched at
   * the moment of the crash.
   */


  _save() {
    const version = this._editor.model.document.version;

    try {
      this._data = this._getData();

      if (!this._initUsingData) {
        this._editables = this._getEditables();
      }

      this._lastDocumentVersion = version;
    } catch (err) {
      console.error(err, 'An error happened during restoring editor data. ' + 'Editor will be restored from the previously saved data.');
    }
  }
  /**
   * @internal
   */


  _setExcludedProperties(props) {
    this._excludedProps = props;
  }
  /**
   * Gets all data that is required to reinitialize editor instance.
   */


  _getData() {
    const editor = this._editor;
    const roots = editor.model.document.roots.filter(root => root.isAttached() && root.rootName != '$graveyard');
    const {
      plugins
    } = editor; // `as any` to avoid linking from external private repo.

    const commentsRepository = plugins.has('CommentsRepository') && plugins.get('CommentsRepository');
    const trackChanges = plugins.has('TrackChanges') && plugins.get('TrackChanges');
    const data = {
      roots: {},
      markers: {},
      commentThreads: JSON.stringify([]),
      suggestions: JSON.stringify([])
    };
    roots.forEach(root => {
      data.roots[root.rootName] = {
        content: JSON.stringify(Array.from(root.getChildren())),
        attributes: JSON.stringify(Array.from(root.getAttributes())),
        isLoaded: root._isLoaded
      };
    });

    for (const marker of editor.model.markers) {
      if (!marker._affectsData) {
        continue;
      }

      data.markers[marker.name] = {
        rangeJSON: marker.getRange().toJSON(),
        usingOperation: marker._managedUsingOperations,
        affectsData: marker._affectsData
      };
    }

    if (commentsRepository) {
      data.commentThreads = JSON.stringify(commentsRepository.getCommentThreads({
        toJSON: true,
        skipNotAttached: true
      }));
    }

    if (trackChanges) {
      data.suggestions = JSON.stringify(trackChanges.getSuggestions({
        toJSON: true,
        skipNotAttached: true
      }));
    }

    return data;
  }
  /**
   * For each attached model root, returns its HTML editable element (if available).
   */


  _getEditables() {
    const editables = {};

    for (const rootName of this.editor.model.document.getRootNames()) {
      const editable = this.editor.ui.getEditableElement(rootName);

      if (editable) {
        editables[rootName] = editable;
      }
    }

    return editables;
  }
  /**
   * Traverses the error context and the current editor to find out whether these structures are connected
   * to each other via properties.
   *
   * @internal
   */


  _isErrorComingFromThisItem(error) {
    return (0,_utils_areconnectedthroughproperties_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._editor, error.context, this._excludedProps);
  }
  /**
   * Clones the editor configuration.
   */


  _cloneEditorConfiguration(config) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(config, (value, key) => {
      // Leave DOM references.
      if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
        return value;
      }

      if (key === 'context') {
        return value;
      }
    });
  }

}
/**
 * Internal plugin that is used to stop the default editor initialization and restoring the editor state
 * based on the `editor.config._watchdogInitialData` data.
 */

class EditorWatchdogInitPlugin {
  constructor(editor) {
    this.editor = editor;
    this._data = editor.config.get('_watchdogInitialData');
  }
  /**
   * @inheritDoc
   */


  init() {
    // Stops the default editor initialization and use the saved data to restore the editor state.
    // Some of data could not be initialize as a config properties. It is important to keep the data
    // in the same form as it was before the restarting.
    this.editor.data.on('init', evt => {
      evt.stop();
      this.editor.model.enqueueChange({
        isUndoable: false
      }, writer => {
        this._restoreCollaborationData();

        this._restoreEditorData(writer);
      });
      this.editor.data.fire('ready'); // Keep priority `'high' - 1` to be sure that RTC initialization will be first.
    }, {
      priority: 1000 - 1
    });
  }
  /**
   * Creates a model node (element or text) based on provided JSON.
   */


  _createNode(writer, jsonNode) {
    if ('name' in jsonNode) {
      // If child has name property, it is an Element.
      const element = writer.createElement(jsonNode.name, jsonNode.attributes);

      if (jsonNode.children) {
        for (const child of jsonNode.children) {
          element._appendChild(this._createNode(writer, child));
        }
      }

      return element;
    } else {
      // Otherwise, it is a Text node.
      return writer.createText(jsonNode.data, jsonNode.attributes);
    }
  }
  /**
   * Restores the editor by setting the document data, roots attributes and markers.
   */


  _restoreEditorData(writer) {
    const editor = this.editor;
    Object.entries(this._data.roots).forEach(([rootName, {
      content,
      attributes
    }]) => {
      const parsedNodes = JSON.parse(content);
      const parsedAttributes = JSON.parse(attributes);
      const rootElement = editor.model.document.getRoot(rootName);

      for (const [key, value] of parsedAttributes) {
        writer.setAttribute(key, value, rootElement);
      }

      for (const child of parsedNodes) {
        const node = this._createNode(writer, child);

        writer.insert(node, rootElement, 'end');
      }
    });
    Object.entries(this._data.markers).forEach(([markerName, markerOptions]) => {
      const {
        document
      } = editor.model;
      const {
        rangeJSON: {
          start,
          end
        },
        ...options
      } = markerOptions;
      const root = document.getRoot(start.root);
      const startPosition = writer.createPositionFromPath(root, start.path, start.stickiness);
      const endPosition = writer.createPositionFromPath(root, end.path, end.stickiness);
      const range = writer.createRange(startPosition, endPosition);
      writer.addMarker(markerName, {
        range,
        ...options
      });
    });
  }
  /**
   * Restores the editor collaboration data - comment threads and suggestions.
   */


  _restoreCollaborationData() {
    // `as any` to avoid linking from external private repo.
    const parsedCommentThreads = JSON.parse(this._data.commentThreads);
    const parsedSuggestions = JSON.parse(this._data.suggestions);
    parsedCommentThreads.forEach(commentThreadData => {
      const channelId = this.editor.config.get('collaboration.channelId');
      const commentsRepository = this.editor.plugins.get('CommentsRepository');

      if (commentsRepository.hasCommentThread(commentThreadData.threadId)) {
        const commentThread = commentsRepository.getCommentThread(commentThreadData.threadId);
        commentThread.remove();
      }

      commentsRepository.addCommentThread({
        channelId,
        ...commentThreadData
      });
    });
    parsedSuggestions.forEach(suggestionData => {
      const trackChangesEditing = this.editor.plugins.get('TrackChangesEditing');

      if (trackChangesEditing.hasSuggestion(suggestionData.id)) {
        const suggestion = trackChangesEditing.getSuggestion(suggestionData.id);
        suggestion.attributes = suggestionData.attributes;
      } else {
        trackChangesEditing.addSuggestionData(suggestionData);
      }
    });
  }

}

/***/ }),

/***/ 12440:
/*!****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextWatchdog": () => (/* reexport safe */ _contextwatchdog_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "EditorWatchdog": () => (/* reexport safe */ _editorwatchdog_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Watchdog": () => (/* reexport safe */ _watchdog_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _contextwatchdog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contextwatchdog.js */ 99702);
/* harmony import */ var _editorwatchdog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editorwatchdog.js */ 17013);
/* harmony import */ var _watchdog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchdog.js */ 30633);
/* harmony import */ var _augmentation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./augmentation.js */ 12138);
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog
 */





/***/ }),

/***/ 45727:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ areConnectedThroughProperties)
/* harmony export */ });
/* harmony import */ var _getsubnodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getsubnodes.js */ 40399);
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/areconnectedthroughproperties
 */

/* globals console */

/**
 * Traverses both structures to find out whether there is a reference that is shared between both structures.
 */

function areConnectedThroughProperties(target1, target2, excludedNodes = new Set()) {
  if (target1 === target2 && isObject(target1)) {
    return true;
  } // @if CK_DEBUG_WATCHDOG // return checkConnectionBetweenProps( target1, target2, excludedNodes );


  const subNodes1 = (0,_getsubnodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target1, excludedNodes);
  const subNodes2 = (0,_getsubnodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target2, excludedNodes);

  for (const node of subNodes1) {
    if (subNodes2.has(node)) {
      return true;
    }
  }

  return false;
}
/* istanbul ignore next -- @preserve */
// eslint-disable-next-line

function checkConnectionBetweenProps(target1, target2, excludedNodes) {
  const {
    subNodes: subNodes1,
    prevNodeMap: prevNodeMap1
  } = (0,_getsubnodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target1, excludedNodes.subNodes);
  const {
    subNodes: subNodes2,
    prevNodeMap: prevNodeMap2
  } = (0,_getsubnodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target2, excludedNodes.subNodes);

  for (const sharedNode of subNodes1) {
    if (subNodes2.has(sharedNode)) {
      const connection = [];
      connection.push(sharedNode);
      let node = prevNodeMap1.get(sharedNode);

      while (node && node !== target1) {
        connection.push(node);
        node = prevNodeMap1.get(node);
      }

      node = prevNodeMap2.get(sharedNode);

      while (node && node !== target2) {
        connection.unshift(node);
        node = prevNodeMap2.get(node);
      }

      console.log('--------');
      console.log({
        target1
      });
      console.log({
        sharedNode
      });
      console.log({
        target2
      });
      console.log({
        connection
      });
      return true;
    }
  }

  return false;
}

function isObject(structure) {
  return typeof structure === 'object' && structure !== null;
}

/***/ }),

/***/ 40399:
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSubNodes)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/getsubnodes
 */

/* globals EventTarget, Event */
function getSubNodes(head, excludedProperties = new Set()) {
  const nodes = [head]; // @if CK_DEBUG_WATCHDOG // const prevNodeMap = new Map();
  // Nodes are stored to prevent infinite looping.

  const subNodes = new Set();
  let nodeIndex = 0;

  while (nodes.length > nodeIndex) {
    // Incrementing the iterator is much faster than changing size of the array with Array.prototype.shift().
    const node = nodes[nodeIndex++];

    if (subNodes.has(node) || !shouldNodeBeIncluded(node) || excludedProperties.has(node)) {
      continue;
    }

    subNodes.add(node); // Handle arrays, maps, sets, custom collections that implements `[ Symbol.iterator ]()`, etc.

    if (Symbol.iterator in node) {
      // The custom editor iterators might cause some problems if the editor is crashed.
      try {
        for (const n of node) {
          nodes.push(n); // @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( n ) ) {
          // @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( n, node );
          // @if CK_DEBUG_WATCHDOG // }
        }
      } catch (err) {// Do not log errors for broken structures
        // since we are in the error handling process already.
        // eslint-disable-line no-empty
      }
    } else {
      for (const key in node) {
        // We share a reference via the protobuf library within the editors,
        // hence the shared value should be skipped. Although, it's not a perfect
        // solution since new places like that might occur in the future.
        if (key === 'defaultValue') {
          continue;
        }

        nodes.push(node[key]); // @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( node[ key ] ) ) {
        // @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( node[ key ], node );
        // @if CK_DEBUG_WATCHDOG // }
      }
    }
  } // @if CK_DEBUG_WATCHDOG // return { subNodes, prevNodeMap } as any;


  return subNodes;
}

function shouldNodeBeIncluded(node) {
  const type = Object.prototype.toString.call(node);
  const typeOfNode = typeof node;
  return !(typeOfNode === 'number' || typeOfNode === 'boolean' || typeOfNode === 'string' || typeOfNode === 'symbol' || typeOfNode === 'function' || type === '[object Date]' || type === '[object RegExp]' || type === '[object Module]' || node === undefined || node === null || // This flag is meant to exclude singletons shared across editor instances. So when an error is thrown in one editor,
  // the other editors connected through the reference to the same singleton are not restarted. This is a temporary workaround
  // until a better solution is found.
  // More in https://github.com/ckeditor/ckeditor5/issues/12292.
  node._watchdogExcluded || // Skip native DOM objects, e.g. Window, nodes, events, etc.
  node instanceof EventTarget || node instanceof Event);
}

/***/ }),

/***/ 30633:
/*!*******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/watchdog.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Watchdog)
/* harmony export */ });
/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * An abstract watchdog class that handles most of the error handling process and the state of the underlying component.
 *
 * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and how to use it.
 *
 * @internal
 */
class Watchdog {
  /**
   * @param {module:watchdog/watchdog~WatchdogConfig} config The watchdog plugin configuration.
   */
  constructor(config) {
    /**
     * An array of crashes saved as an object with the following properties:
     *
     * * `message`: `String`,
     * * `stack`: `String`,
     * * `date`: `Number`,
     * * `filename`: `String | undefined`,
     * * `lineno`: `Number | undefined`,
     * * `colno`: `Number | undefined`,
     */
    this.crashes = [];
    /**
     * Specifies the state of the item watched by the watchdog. The state can be one of the following values:
     *
     * * `initializing` &ndash; Before the first initialization, and after crashes, before the item is ready.
     * * `ready` &ndash; A state when the user can interact with the item.
     * * `crashed` &ndash; A state when an error occurs. It quickly changes to `initializing` or `crashedPermanently`
     * depending on how many and how frequent errors have been caught recently.
     * * `crashedPermanently` &ndash; A state when the watchdog stops reacting to errors and keeps the item it is watching crashed,
     * * `destroyed` &ndash; A state when the item is manually destroyed by the user after calling `watchdog.destroy()`.
     */

    this.state = 'initializing';
    /**
     * Returns the result of the `Date.now()` call. It can be overridden in tests to mock time as some popular
     * approaches like `sinon.useFakeTimers()` do not work well with error handling.
     */

    this._now = Date.now;
    this.crashes = [];
    this._crashNumberLimit = typeof config.crashNumberLimit === 'number' ? config.crashNumberLimit : 3;
    this._minimumNonErrorTimePeriod = typeof config.minimumNonErrorTimePeriod === 'number' ? config.minimumNonErrorTimePeriod : 5000;

    this._boundErrorHandler = evt => {
      // `evt.error` is exposed by EventError while `evt.reason` is available in PromiseRejectionEvent.
      const error = 'error' in evt ? evt.error : evt.reason; // Note that `evt.reason` might be everything that is in the promise rejection.
      // Similarly everything that is thrown lands in `evt.error`.

      if (error instanceof Error) {
        this._handleError(error, evt);
      }
    };

    this._listeners = {};

    if (!this._restart) {
      throw new Error('The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. ' + 'Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.');
    }
  }
  /**
   * Destroys the watchdog and releases the resources.
   */


  destroy() {
    this._stopErrorHandling();

    this._listeners = {};
  }
  /**
   * Starts listening to a specific event name by registering a callback that will be executed
   * whenever an event with a given name fires.
   *
   * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
   *
   * @param eventName The event name.
   * @param callback A callback which will be added to event listeners.
   */


  on(eventName, callback) {
    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }

    this._listeners[eventName].push(callback);
  }
  /**
   * Stops listening to the specified event name by removing the callback from event listeners.
   *
   * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
   *
   * @param eventName The event name.
   * @param callback A callback which will be removed from event listeners.
   */


  off(eventName, callback) {
    this._listeners[eventName] = this._listeners[eventName].filter(cb => cb !== callback);
  }
  /**
   * Fires an event with a given event name and arguments.
   *
   * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
   */


  _fire(eventName, ...args) {
    const callbacks = this._listeners[eventName] || [];

    for (const callback of callbacks) {
      callback.apply(this, [null, ...args]);
    }
  }
  /**
   * Starts error handling by attaching global error handlers.
   */


  _startErrorHandling() {
    window.addEventListener('error', this._boundErrorHandler);
    window.addEventListener('unhandledrejection', this._boundErrorHandler);
  }
  /**
   * Stops error handling by detaching global error handlers.
   */


  _stopErrorHandling() {
    window.removeEventListener('error', this._boundErrorHandler);
    window.removeEventListener('unhandledrejection', this._boundErrorHandler);
  }
  /**
   * Checks if an error comes from the watched item and restarts it.
   * It reacts to {@link module:utils/ckeditorerror~CKEditorError `CKEditorError` errors} only.
   *
   * @fires error
   * @param error Error.
   * @param evt An error event.
   */


  _handleError(error, evt) {
    // @if CK_DEBUG // const err = error as CKEditorError;
    // @if CK_DEBUG // if ( err.is && err.is( 'CKEditorError' ) && err.context === undefined ) {
    // @if CK_DEBUG // console.warn( 'The error is missing its context and Watchdog cannot restart the proper item.' );
    // @if CK_DEBUG // }
    if (this._shouldReactToError(error)) {
      this.crashes.push({
        message: error.message,
        stack: error.stack,
        // `evt.filename`, `evt.lineno` and `evt.colno` are available only in ErrorEvent events
        filename: evt instanceof ErrorEvent ? evt.filename : undefined,
        lineno: evt instanceof ErrorEvent ? evt.lineno : undefined,
        colno: evt instanceof ErrorEvent ? evt.colno : undefined,
        date: this._now()
      });

      const causesRestart = this._shouldRestart();

      this.state = 'crashed';

      this._fire('stateChange');

      this._fire('error', {
        error,
        causesRestart
      });

      if (causesRestart) {
        this._restart();
      } else {
        this.state = 'crashedPermanently';

        this._fire('stateChange');
      }
    }
  }
  /**
   * Checks whether an error should be handled by the watchdog.
   *
   * @param error An error that was caught by the error handling process.
   */


  _shouldReactToError(error) {
    return error.is && error.is('CKEditorError') && error.context !== undefined && // In some cases the watched item should not be restarted - e.g. during the item initialization.
    // That's why the `null` was introduced as a correct error context which does cause restarting.
    error.context !== null && // Do not react to errors if the watchdog is in states other than `ready`.
    this.state === 'ready' && this._isErrorComingFromThisItem(error);
  }
  /**
   * Checks if the watchdog should restart the underlying item.
   */


  _shouldRestart() {
    if (this.crashes.length <= this._crashNumberLimit) {
      return true;
    }

    const lastErrorTime = this.crashes[this.crashes.length - 1].date;
    const firstMeaningfulErrorTime = this.crashes[this.crashes.length - 1 - this._crashNumberLimit].date;
    const averageNonErrorTimePeriod = (lastErrorTime - firstMeaningfulErrorTime) / this._crashNumberLimit;
    return averageNonErrorTimePeriod > this._minimumNonErrorTimePeriod;
  }

}

/***/ }),

/***/ 28230:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);


/* Built-in method references that are verified to be native. */

var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 69420:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);


/* Built-in method references that are verified to be native. */

var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 63538:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);


/* Built-in method references that are verified to be native. */

var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 57571:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 94727);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 84261);


/* Built-in method references that are verified to be native. */

var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 75805:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 28468:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);

/***/ }),

/***/ 82784:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);

/***/ }),

/***/ 29065:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 24876);


/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);

/***/ }),

/***/ 76563:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 39274);


/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);

/***/ }),

/***/ 19702:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Stack.js */ 90246);
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_arrayEach.js */ 75805);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_assignValue.js */ 21123);
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_baseAssign.js */ 29065);
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_baseAssignIn.js */ 76563);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneBuffer.js */ 59097);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ 77331);
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_copySymbols.js */ 14104);
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ 64488);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_getAllKeys.js */ 11922);
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_getAllKeysIn.js */ 24173);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ 33221);
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_initCloneArray.js */ 13530);
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneByTag.js */ 84191);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_initCloneObject.js */ 65914);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 17191);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ 28057);
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isMap.js */ 5088);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSet.js */ 59486);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keys.js */ 24876);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keysIn.js */ 39274);






















/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }

  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);

  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, isDeep);
    }

    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value);

      if (!isDeep) {
        return isFlat ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, value)) : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__["default"])(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__["default"]());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__["default"] : isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_19__["default"];
  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__["default"])(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);

/***/ }),

/***/ 6288:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 82784);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 17191);


/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);

/***/ }),

/***/ 44774:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 33221);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);


/** `Object#toString` result references. */

var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == mapTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);

/***/ }),

/***/ 60694:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 33221);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);


/** `Object#toString` result references. */

var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == setTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);

/***/ }),

/***/ 962:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 5908);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 70081);


/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 12695:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ 51463);

/** Used to match leading whitespace. */

var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */

function baseTrim(string) {
  return string ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '') : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);

/***/ }),

/***/ 28653:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 57094);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);

/***/ }),

/***/ 43992:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);

/***/ }),

/***/ 64149:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 194);

/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);

/***/ }),

/***/ 14104:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ 65175);


/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);

/***/ }),

/***/ 64488:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 1540);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 8065);


/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);

/***/ }),

/***/ 11922:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 6288);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 65175);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 24876);



/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);

/***/ }),

/***/ 24173:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 6288);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 8065);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 39274);



/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);

/***/ }),

/***/ 65175:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 28468);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 30709);


/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);

/***/ }),

/***/ 8065:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 82784);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getPrototype.js */ 70118);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 65175);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 30709);




/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  var result = [];

  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }

  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);

/***/ }),

/***/ 33221:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 28230);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 83686);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 69420);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 63538);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 57571);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 66018);







/** `Object#toString` result references. */

var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"]; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 13530:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);

/***/ }),

/***/ 84191:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 57094);
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ 28653);
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp.js */ 43992);
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSymbol.js */ 64149);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ 22856);





/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);

/***/ }),

/***/ 70081:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 76854);

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 51463:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */

function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}

  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);

/***/ }),

/***/ 5846:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/cloneDeepWith.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ 19702);

/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */

function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeepWith);

/***/ }),

/***/ 88673:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now.js */ 80600);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ 79034);



/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;

  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);

/***/ }),

/***/ 25780:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/isElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isPlainObject.js */ 8978);


/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */

function isElement(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && value.nodeType === 1 && !(0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isElement);

/***/ }),

/***/ 5088:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMap.js */ 44774);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 7560);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 25986);



/* Node.js helper references. */

var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);

/***/ }),

/***/ 59486:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsSet.js */ 60694);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 7560);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 25986);



/* Node.js helper references. */

var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);

/***/ }),

/***/ 48455:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 4035);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 86567);


/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);

/***/ }),

/***/ 24876:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 87224);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ 962);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 53943);



/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 80600:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 84261);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function () {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);

/***/ }),

/***/ 30709:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);

/***/ }),

/***/ 69616:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/throttle.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ 88673);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 19089);


/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */

function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);

/***/ }),

/***/ 79034:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ 12695);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ 19089);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 48455);



/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }

  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);

/***/ })

}]);
//# sourceMappingURL=src_app_layout_template_template_module_ts.js.map