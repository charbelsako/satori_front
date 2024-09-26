"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/guard */ 61140);




const routes = [
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 71674)).then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layout_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layout/layout.module */ 4805)).then((m) => m.LayoutModule),
        canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_server-error_server-error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./server-error/server-error.module */ 19818)).then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_access-denied_access-denied_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./access-denied/access-denied.module */ 11565)).then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./not-found/not-found.module */ 92867)).then((m) => m.NotFoundModule) },
    // { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guard */ 61140);
/* harmony import */ var _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/interceptors */ 20746);
/* harmony import */ var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/modules/language-translation/language-translation.module */ 90894);
/* harmony import */ var _shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/api/api.service */ 32487);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ 16256);
/* harmony import */ var _shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/confirmation-dialog/confirmation-dialog.service */ 20791);
/* harmony import */ var _shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/jwt/jwt.service */ 34891);
/* harmony import */ var _shared_services_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/confirmation-dialog/confirmation-dialog.component */ 60215);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ 94817);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__.LanguageTranslationModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule.forRoot({
                maxOpened: 1,
                progressBar: true,
                preventDuplicates: true,
                closeButton: true,
                tapToDismiss: true,
                timeOut: 4000,
                positionClass: 'toast-top-right',
            }),
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_services_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmationDialogComponent],
        providers: [
            _shared_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard,
            _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
            _shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_8__.JwtService,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
                useClass: _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__.HttpTokenInterceptor,
                multi: true
            },
            _shared_interceptors__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor,
            _shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService,
            _shared_services_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_7__.ConfirmationDialogService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 45240:
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/jwt/jwt.service */ 34891);







let AuthGuard = class AuthGuard {
    constructor(authService, location, jwtService, router) {
        this.authService = authService;
        this.location = location;
        this.jwtService = jwtService;
        this.router = router;
    }
    canActivate(next, state) {
        let url = state.url;
        if (localStorage.getItem('access_token')) {
            let user = this.jwtService.getUser();
            if (user.isSuperAdmin == true || url.includes('dashboard') || url.includes('matter')) { // 
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            }
            if (this.verifyRole(url)) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
            }
            else {
                this.location.back();
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
            }
        }
        else {
            this.jwtService.logoutUser();
            this.router.navigate(['auth/login'], { queryParams: { return_url: window.location.pathname } });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
        }
    }
    verifyRole(url) {
        console.log("verify-role");
        const permissions = this.jwtService.getUserPermissions();
        for (let index in permissions) {
            if (url.includes(index) && permissions[index] == true)
                return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 61140:
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard)
/* harmony export */ });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 45240);



/***/ }),

/***/ 94730:
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 53158);





let ErrorInterceptor = class ErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
            if (err.status === 401) {
                localStorage.removeItem('access_token');
                setTimeout(() => {
                    this.router.navigate(['']);
                }, 2000);
            }
            const error = { message: err.error.message || err.statusText, code: err.status };
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ErrorInterceptor);



/***/ }),

/***/ 40792:
/*!***************************************************************!*\
  !*** ./src/app/shared/interceptors/http.token.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTokenInterceptor": () => (/* binding */ HttpTokenInterceptor)
/* harmony export */ });
/* harmony import */ var _Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ 16256);
/* harmony import */ var _services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/jwt/jwt.service */ 34891);





let HttpTokenInterceptor = class HttpTokenInterceptor {
  constructor(jwtService, authService) {
    this.jwtService = jwtService;
    this.authService = authService;
  }

  setUser() {
    var _this = this;

    return (0,_Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.authHeader = _this.jwtService.getToken();
    })();
  }

  intercept(req, next) {
    this.setUser();

    if (this.authHeader === null) {
      return next.handle(req.clone());
    }

    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `bearer ${this.authHeader}`)
    });
    return next.handle(clonedReq);
  }

};

HttpTokenInterceptor.ctorParameters = () => [{
  type: _services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_2__.JwtService
}, {
  type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}];

HttpTokenInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], HttpTokenInterceptor);


/***/ }),

/***/ 20746:
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor),
/* harmony export */   "HttpTokenInterceptor": () => (/* reexport safe */ _http_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpTokenInterceptor),
/* harmony export */   "interceptors": () => (/* binding */ interceptors)
/* harmony export */ });
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-interceptor */ 94730);
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.token.interceptor */ 40792);


const interceptors = [_http_token_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpTokenInterceptor, _error_interceptor__WEBPACK_IMPORTED_MODULE_0__.ErrorInterceptor];




/***/ }),

/***/ 90894:
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "LanguageTranslationModule": () => (/* binding */ LanguageTranslationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);

/**
 * This module is used to language translations.
 * The translations are saved in a json file in /src/app/assets/i18n directory
 * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
 */


// import ngx-translate and the http loader


// ngx-translate - required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http);
}
let LanguageTranslationModule = class LanguageTranslationModule {
    constructor(translate) {
        this.translate = translate;
        // Gets Default language from browser if available, otherwise set English ad default
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
};
LanguageTranslationModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService }
];
LanguageTranslationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
                }
            })
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule]
    })
], LanguageTranslationModule);



/***/ }),

/***/ 32487:
/*!****************************************************!*\
  !*** ./src/app/shared/services/api/api.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jwt/jwt.service */ 34891);




// import { ToastrService } from 'ngx-toastr';




let ApiService = class ApiService {
    constructor(http, jwtService, 
    // private toastr: ToastrService,
    router) {
        this.http = http;
        this.jwtService = jwtService;
        this.router = router;
    }
    sendError(err) {
        // this.toastr.error(err, 'Error !');
    }
    formatErrors(error) {
        let errorText = '';
        if (error.error && error.error.message) {
            errorText = error.error.message;
        }
        else if (error.statusText === 'Unknown Error' || error.statusText === 'Not Found') {
            errorText = 'Something went wrong try again';
        }
        if (error.status === 401) {
            this.jwtService.logoutUser();
            this.router.navigate(['auth/login'], { queryParams: { return_url: window.location.pathname } });
        }
        this.sendError(errorText);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error.error);
    }
    setHeaders(headers = {}) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headers);
    }
    get(path, headers = {}) {
        // this.checkToken();
        return this.http
            .get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, { headers: this.setHeaders(headers) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    put(path, body = {}, headers = {}) {
        // this.checkToken();
        return this.http
            .put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, body, { headers: this.setHeaders(headers) })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    post(path, body = {}) {
        // this.checkToken();
        return this.http
            .post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    getBlob(path, headers = {}) {
        // this.checkToken();
        return this.http
            .get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, { headers: this.setHeaders(headers), responseType: 'blob' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    postBlob(path, body = {}) {
        // this.checkToken();
        return this.http
            .post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, body, { responseType: 'blob' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    patch(path, body = {}) {
        // this.checkToken();
        return this.http
            .patch(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    delete(path) {
        // this.checkToken();
        return this.http
            .delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
    checkToken() {
        let tokenExpiryTime = atob(localStorage.getItem('access_token_expiry') || '');
        let refreshToken = atob(localStorage.getItem('refresh_token') || '');
        let currentTime = new Date().toISOString();
        if (refreshToken != '' && tokenExpiryTime != '' && tokenExpiryTime < currentTime) {
            let data = {
                'refreshToken': refreshToken,
                'type': 'admin'
            };
            this.refreshToken('/auth/refresh-tokens', data).subscribe(response => {
                this.jwtService.saveTokens(response);
            }, (error) => {
                // this.jwtService.logoutUser();
                // this.router.navigate(['/auth/login']);     
            });
        }
    }
    refreshToken(path, body = {}) {
        return this.http
            .post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl}${path}`, body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.formatErrors(err)));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _jwt_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 16256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26067);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ 32487);





let AuthService = class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backendUrl;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
    }
    login(data) {
        return this.apiService.post('/auth/login', data);
    }
    forgotPassword(data) {
        return this.apiService.post('/auth/forgot-password', data);
    }
    resetPassword(data) {
        return this.apiService.post('/auth/reset-password', data);
    }
    refreshToken(data) {
        return this.apiService.post('/auth/refresh-tokens', data);
    }
    /**
     * Getter method for getting Logged In status
     */
    getLoggedInStatus() {
        return this.loggedIn.asObservable();
    }
    /**
     * Setter method to set Logged In status
     */
    setLoggedInStatus(value) {
        this.loggedIn.next(value);
    }
    /**
     * Getter method for getting Logged In status
     */
    getUserData() {
        return this.userData.asObservable();
    }
    /**
     * Setter method to set Logged In status
     */
    setUserData(value) {
        this.userData.next(value);
    }
};
AuthService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], AuthService);



/***/ }),

/***/ 60215:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogComponent": () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirmation_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-dialog.component.html?ngResource */ 74493);
/* harmony import */ var _confirmation_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-dialog.component.scss?ngResource */ 81357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);





let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    decline() {
        this.activeModal.close(false);
    }
    accept() {
        this.activeModal.close(true);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
};
ConfirmationDialogComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal }
];
ConfirmationDialogComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnOkText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnCancelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ConfirmationDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'sb-confirmation-dialog',
        template: _confirmation_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirmation_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmationDialogComponent);



/***/ }),

/***/ 20791:
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/confirmation-dialog/confirmation-dialog.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogService": () => (/* binding */ ConfirmationDialogService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-dialog.component */ 60215);




let ConfirmationDialogService = class ConfirmationDialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'lg') {
        const modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
};
ConfirmationDialogService.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal }
];
ConfirmationDialogService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], ConfirmationDialogService);



/***/ }),

/***/ 34891:
/*!****************************************************!*\
  !*** ./src/app/shared/services/jwt/jwt.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtService": () => (/* binding */ JwtService)
/* harmony export */ });
/* harmony import */ var _Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let JwtService = class JwtService {
  constructor() {
    this.refreshToken = '';
  }

  getToken() {
    let accesstoken = localStorage.access_token;

    if (accesstoken) {
      return atob(accesstoken);
    } else {
      return false;
    }
  }

  saveTokens(tokens) {
    localStorage.setItem('access_token', btoa(tokens.access.token));
    localStorage.setItem('access_token_expiry', btoa(tokens.access.expires));
    localStorage.setItem('refresh_token', btoa(tokens.refresh.token));
    localStorage.setItem('refresh_token_expiry', btoa(tokens.refresh.expires));
    this.setIsLogin();
  }

  savePermissions(permissions) {
    localStorage.setItem('permissions', JSON.stringify(permissions));
    return true;
  }

  getPermissions() {
    let permissions = JSON.parse(localStorage.getItem('permissions') || '');

    if (permissions) {
      return permissions;
    }
  }

  setUserPermissions(permissions) {
    localStorage.setItem('userPermissions', JSON.stringify(permissions));
    return true;
  }

  getUserPermissions() {
    let permissions = JSON.parse(localStorage.getItem('userPermissions') || '');

    if (permissions) {
      return permissions;
    }
  }

  checkAccess(key) {
    const user = this.getUser();

    if (user.isSuperAdmin) {
      return true;
    }

    const permissions = this.getUserPermissions();
    const access = permissions.find(obj => obj.key === key);
    console.log(key);
    return access.write;
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

  getUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      return user;
    }
  }

  setIsLogin() {
    localStorage.setItem('isLoggedin', 'true');
  }

  destroyToken() {
    return (0,_Users_charbelsarkis_Projects_satori_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.removeItem('access_token');
      localStorage.removeItem('access_token_expiry');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('refresh_token_expiry');
      localStorage.removeItem('user');
      localStorage.removeItem('userPermissions');
      return true;
    })();
  }

  logoutUser() {
    this.destroyToken();
    localStorage.removeItem('isLoggedin');
  }

};

JwtService.ctorParameters = () => [];

JwtService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], JwtService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    APP_SECRET_KEY: "123456789123456789",
    // @TODO: for development only
    backendUrl: 'http://localhost:3000/api/v1',
    socket_url: 'http://localhost:3000',
    // backendUrl:'http://192.236.178.57:3000/api/v1',
    // socket_url:'http://192.236.178.57:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n\n.black-text-link {\n  color: #000;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9EQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFHSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgfSAgXG4gIC5ibGFjay10ZXh0LWxpbmt7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 81357:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/services/confirmation-dialog/confirmation-dialog.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 74493:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/services/confirmation-dialog/confirmation-dialog.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n      <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button> -->\n    </div>\n    <div class=\"modal-body\">\n      {{ message }}\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\n    </div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map