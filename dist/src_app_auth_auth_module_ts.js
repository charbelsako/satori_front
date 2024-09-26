"use strict";
(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 82765);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 88310);






const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        canActivate: [],
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        data: {
            title: 'Login',
        },
    },
    {
        path: 'forgot-password',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordComponent,
        data: {
            title: 'Forgot Password',
        },
    },
    {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent,
        data: {
            title: 'Forgot Password',
        },
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AuthRoutingModule);



/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 82765);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 88310);









let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
            _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordComponent,
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule
        ]
    })
], AuthModule);



/***/ }),

/***/ 82765:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordComponent": () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forget_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password.component.html?ngResource */ 20925);
/* harmony import */ var _forget_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.component.scss?ngResource */ 90105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);









let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(cdr, router, fb, authService, jwtService) {
        this.cdr = cdr;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.jwtService = jwtService;
        this.FormSubmitted = false;
        this.disableSubmit = false;
        this.userData = [];
        this.loginStatus = false;
        this.errorMsg = '';
        this.successMsg = '';
        this.forgotPassword = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            type: ['admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() {
        this.disableSubmit = false;
        this.authService.getLoggedInStatus().subscribe(res => {
            this.loginStatus = res;
        });
        this.userData = this.jwtService.getUser();
        if (this.userData) {
            this.loginStatus = true;
            this.authService.setLoggedInStatus(true);
            this.router.navigate(['/dashboard']);
        }
        else {
            this.loginStatus = false;
            this.authService.setLoggedInStatus(false);
        }
    }
    forgotPasswordSubmit() {
        if (this.disableSubmit) {
            return;
        }
        this.errorMsg = '';
        this.FormSubmitted = true;
        this.disableSubmit = true;
        if (!this.forgotPassword.valid) {
            this.disableSubmit = false;
            return;
        }
        else {
            this.authService.forgotPassword(this.forgotPassword.value).subscribe(response => {
                this.successMsg = "Reset password mail has been sent!";
                this.disableSubmit = false;
                this.FormSubmitted = false;
            }, (error) => {
                this.errorMsg = error.message;
                this.disableSubmit = false;
                this.FormSubmitted = false;
                this.cdr.detectChanges();
            });
        }
    }
};
ForgetPasswordComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService }
];
ForgetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forget-password',
        template: _forget_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_forget_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetPasswordComponent);



/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 85639);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 83488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/layout/role/service/role.service */ 26316);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);










let LoginComponent = class LoginComponent {
    constructor(cdr, router, fb, route, authService, jwtService, roleService
    // private toastr: ToastrService
    ) {
        this.cdr = cdr;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.authService = authService;
        this.jwtService = jwtService;
        this.roleService = roleService;
        this.FormSubmitted = false;
        this.disableSubmit = false;
        this.userData = [];
        this.loginStatus = false;
        this.errorMsg = '';
        this.loginForm = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            type: ['ADMIN', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ngOnInit() {
        this.disableSubmit = false;
    }
    onLoggedIn() {
        if (this.disableSubmit) {
            return;
        }
        this.errorMsg = '';
        this.FormSubmitted = true;
        this.disableSubmit = true;
        if (!this.loginForm.valid) {
            this.disableSubmit = false;
            return;
        }
        else {
            this.authService.login(this.loginForm.value).subscribe(response => {
                this.jwtService.saveTokens(response.tokens);
                this.jwtService.saveUser(response.user);
                this.authService.setUserData(response.user);
                this.disableSubmit = false;
                if (response.user.profile === 'rateMiner' || response.user.profile === 'dealMapper') {
                    const returnUrl = '/matters';
                    this.router.navigate([returnUrl]);
                }
                else {
                    const returnUrl = '/dashboard';
                    this.router.navigate([returnUrl]);
                }
            }, (error) => {
                this.errorMsg = error.message;
                this.FormSubmitted = false;
                this.cdr.detectChanges();
                this.disableSubmit = false;
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__.JwtService },
    { type: _app_layout_role_service_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 88310:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component.html?ngResource */ 43426);
/* harmony import */ var _reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss?ngResource */ 96816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/router.animations */ 74903);
/* harmony import */ var _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/auth/auth.service */ 16256);
/* harmony import */ var _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/jwt/jwt.service */ 34891);









let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(cdr, router, route, fb, authService, jwtService) {
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.jwtService = jwtService;
        this.FormSubmitted = false;
        this.disableSubmit = false;
        this.userData = [];
        this.loginStatus = false;
        this.errorMsg = '';
        this.successMsg = '';
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.email = params.email;
            this.OTP = params.OTP;
        });
        this.resetPassword = fb.group({
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            otp: [this.OTP, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
            type: ['admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() {
        this.disableSubmit = false;
        this.authService.getLoggedInStatus().subscribe(res => {
            this.loginStatus = res;
        });
        this.userData = this.jwtService.getUser();
        if (this.userData) {
            this.loginStatus = true;
            this.authService.setLoggedInStatus(true);
            this.router.navigate(['/dashboard']);
        }
        else {
            this.loginStatus = false;
            this.authService.setLoggedInStatus(false);
        }
    }
    resetPasswordSubmit() {
        if (this.disableSubmit) {
            return;
        }
        this.errorMsg = '';
        this.FormSubmitted = true;
        this.disableSubmit = true;
        if (!this.resetPassword.valid) {
            this.disableSubmit = false;
            return;
        }
        else {
            this.authService.resetPassword(this.resetPassword.value).subscribe(response => {
                if (response) {
                    this.successMsg = response.message;
                }
                this.disableSubmit = false;
                this.FormSubmitted = false;
            }, (error) => {
                this.errorMsg = error.message;
                this.disableSubmit = false;
                this.FormSubmitted = false;
                this.cdr.detectChanges();
            });
        }
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _app_shared_services_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService }
];
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reset-password',
        template: _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_app_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 74903:
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noTransition": () => (/* binding */ noTransition),
/* harmony export */   "routerTransition": () => (/* binding */ routerTransition),
/* harmony export */   "slideToBottom": () => (/* binding */ slideToBottom),
/* harmony export */   "slideToLeft": () => (/* binding */ slideToLeft),
/* harmony export */   "slideToRight": () => (/* binding */ slideToRight),
/* harmony export */   "slideToTop": () => (/* binding */ slideToTop)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', []);
}
function slideToRight() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ 90105:
/*!********************************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".admin-logo {\n  width: 4rem;\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\nform.user .form-control-user {\n  font-size: 0.8rem;\n  border-radius: 10rem;\n  padding: 1.5rem 1rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #6e707e;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d1d3e2;\n  border-radius: 0.35rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nform.user .custom-checkbox.small label {\n  line-height: 1.5rem;\n}\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n       print-color-adjust: exact;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: 50%/50% 50% no-repeat;\n}\n\nform.user .custom-checkbox.small label {\n  line-height: 1.5rem;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n\nform.user .btn-user {\n  font-size: 0.8rem;\n  border-radius: 10rem;\n  padding: 0.75rem 1rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #4e73df;\n  border-color: #4e73df;\n}\n\n.card.o-hidden.border-0.shadow-lg.my-5 {\n  margin-top: 8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO09BQUEseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREE7RUFDSSwyQkFBQTtBQUlKIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1sb2dvIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuZm9ybS51c2VyIC5mb3JtLWNvbnRyb2wtdXNlciB7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNmU3MDdlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkM2UyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG5mb3JtLnVzZXIgLmN1c3RvbS1jaGVja2JveC5zbWFsbCBsYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICAgIHByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuMjVyZW07XG4gICAgbGVmdDogLTEuNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kOiA1MCUvNTAlIDUwJSBuby1yZXBlYXQ7XG59XG5cbmZvcm0udXNlciAuY3VzdG9tLWNoZWNrYm94LnNtYWxsIGxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5mb3JtLnVzZXIgLmJ0bi11c2VyIHtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbn1cbi5idG4tYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTczZGY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNGU3M2RmO1xufVxuXG4uY2FyZC5vLWhpZGRlbi5ib3JkZXItMC5zaGFkb3ctbGcubXktNSB7XG4gICAgbWFyZ2luLXRvcDogOHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 83488:
/*!************************************************************!*\
  !*** ./src/app/auth/login/login.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".admin-logo {\n  width: 4rem;\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\nform.user .form-control-user {\n  font-size: 0.8rem;\n  border-radius: 10rem;\n  padding: 1.5rem 1rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #6e707e;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d1d3e2;\n  border-radius: 0.35rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nform.user .custom-checkbox.small label {\n  line-height: 1.5rem;\n}\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n       print-color-adjust: exact;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: 50%/50% 50% no-repeat;\n}\n\nform.user .custom-checkbox.small label {\n  line-height: 1.5rem;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n\nform.user .btn-user {\n  font-size: 0.8rem;\n  border-radius: 10rem;\n  padding: 0.75rem 1rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #4e73df;\n  border-color: #4e73df;\n}\n\n.card.o-hidden.border-0.shadow-lg.my-5 {\n  margin-top: 8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7T0FBQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbG9nbyB7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmZvcm0udXNlciAuZm9ybS1jb250cm9sLXVzZXIge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzZlNzA3ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNlMjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cblxuZm9ybS51c2VyIC5jdXN0b20tY2hlY2tib3guc21hbGwgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjI1cmVtO1xuICAgIGxlZnQ6IC0xLjVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogNTAlLzUwJSA1MCUgbm8tcmVwZWF0O1xufVxuXG5mb3JtLnVzZXIgLmN1c3RvbS1jaGVja2JveC5zbWFsbCBsYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuZm9ybS51c2VyIC5idG4tdXNlciB7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG59XG4uYnRuLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3M2RmO1xuICAgIGJvcmRlci1jb2xvcjogIzRlNzNkZjtcbn1cblxuLmNhcmQuby1oaWRkZW4uYm9yZGVyLTAuc2hhZG93LWxnLm15LTUge1xuICAgIG1hcmdpbi10b3A6IDhyZW0gIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 96816:
/*!******************************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".admin-logo {\n  width: 4rem;\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\nform.user .form-control-user {\n  font-size: 0.8rem;\n  border-radius: 10rem;\n  padding: 1.5rem 1rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #6e707e;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d1d3e2;\n  border-radius: 0.35rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nform.user .custom-checkbox.small label {\n  line-height: 1.5rem;\n}\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n       print-color-adjust: exact;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: 50%/50% 50% no-repeat;\n}\n\nform.user .custom-checkbox.small label {\n  line-height: 1.5rem;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n\nform.user .btn-user {\n  font-size: 0.8rem;\n  border-radius: 10rem;\n  padding: 0.75rem 1rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #4e73df;\n  border-color: #4e73df;\n}\n\n.card.o-hidden.border-0.shadow-lg.my-5 {\n  margin-top: 6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7T0FBQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUoiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbG9nbyB7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmZvcm0udXNlciAuZm9ybS1jb250cm9sLXVzZXIge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzZlNzA3ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNlMjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cblxuZm9ybS51c2VyIC5jdXN0b20tY2hlY2tib3guc21hbGwgbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjI1cmVtO1xuICAgIGxlZnQ6IC0xLjVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogNTAlLzUwJSA1MCUgbm8tcmVwZWF0O1xufVxuXG5mb3JtLnVzZXIgLmN1c3RvbS1jaGVja2JveC5zbWFsbCBsYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuZm9ybS51c2VyIC5idG4tdXNlciB7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG59XG4uYnRuLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3M2RmO1xuICAgIGJvcmRlci1jb2xvcjogIzRlNzNkZjtcbn1cblxuLmNhcmQuby1oaWRkZW4uYm9yZGVyLTAuc2hhZG93LWxnLm15LTUge1xuICAgIG1hcmdpbi10b3A6IDZyZW0gIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 20925:
/*!********************************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] class=\"login-page\">\n    <div class=\"login-container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\n                <div class=\"card o-hidden border-0 shadow-lg \">\n                    <div class=\"card-body p-0\">\n                        <!-- Nested Row within Card Body -->\n                        <div class=\"p-5\">\n                            <div class=\"text-center\">\n                                <img class=\"admin-logo\" src=\"assets/images/rate-dark.svg\">\n                                <h1 class=\"h4 text-gray-900 mb-2\">Rate Management | Admin</h1>\n                                <h3 class=\"h4 text-gray-400 mb-4\">Forgot Password</h3>\n                            </div>\n                            <form class=\"user\" [formGroup]=\"forgotPassword\" novalidate\n                                role=\"form\" (keydown.enter)=\"forgotPasswordSubmit()\">\n                                <div class=\"form-group\">\n                                    <input [ngClass]=\"\n                                        forgotPassword.controls['email'].errors &&\n                                        (forgotPassword.controls['email'].dirty ||\n                                        forgotPassword.controls['email'].touched ||\n                                        FormSubmitted)\n                                        ? 'form-control py-4 is-invalid'\n                                        : 'form-control py-4'\n                                        \" formControlName=\"email\"\n                                        id=\"inputEmailAddress\" type=\"email\" email\n                                        placeholder=\"Enter email\">\n                                    <div style=\"text-align: left\" *ngIf=\"\n                                    forgotPassword.controls['email'].errors &&\n                                        (forgotPassword.controls['email'].dirty ||\n                                        forgotPassword.controls['email'].touched ||\n                                        FormSubmitted)\n                                        \">\n                                        <span class=\"text-danger error\"\n                                            *ngIf=\"forgotPassword.controls['email'].errors?.required\">\n                                            * Email is required.\n                                        </span>\n                                    </div>\n                                </div>\n                               \n                                <div class=\"text-center\" *ngIf=\"disableSubmit == true\">\n                                    <div class=\"spinner-border\" role=\"status\">\n                                        <span class=\"sr-only\">Loading...</span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"disableSubmit == false\">\n                                    <a (click)=\"forgotPasswordSubmit()\" class=\"btn\n                                    btn-primary btn-user btn-block\">\n                                        Send Mail\n                                    </a>\n                                </div>\n                            </form>\n                            <hr>\n                            <div class=\"text-center mb-2\">\n                                <a class=\"link\" routerLink=\"/auth/login\" role=\"link\" tabindex=\"0\">Login?</a>\n                            </div>\n                            <ngb-alert *ngIf=\"errorMsg\" type=\"danger\">{{ errorMsg }}</ngb-alert>\n                            <ngb-alert *ngIf=\"successMsg\" type=\"success\">{{ successMsg }}</ngb-alert>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 85639:
/*!************************************************************!*\
  !*** ./src/app/auth/login/login.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] class=\"login-page\">\n<div class=\"wave-bg\">\n    <div class=\"wave\"></div>\n    <div class=\"wave\"></div>\n    <div class=\"wave\"></div>\n</div>\n    <div class=\"login-container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\n                <div class=\"card o-hidden border-0 shadow-lg\">\n                    <div class=\"card-body p-0\">\n                        <!-- Nested Row within Card Body -->\n                        <div class=\"p-5\">\n                            <div class=\"text-center\">\n                                <img class=\"admin-logo\" src=\"assets/images/satori-dark.svg\">\n                                <h1 class=\"h4 text-gray-900 mb-4\">Rate Management | Admin</h1>\n                            </div>\n                            <form class=\"user\" [formGroup]=\"loginForm\" novalidate\n                                role=\"form\" (keydown.enter)=\"onLoggedIn()\">\n                                <div class=\"form-group\">\n                                    <input [ngClass]=\"\n                                        loginForm.controls['email'].errors &&\n                                        (loginForm.controls['email'].dirty ||\n                                        loginForm.controls['email'].touched ||\n                                        FormSubmitted)\n                                        ? 'form-control py-4 is-invalid'\n                                        : 'form-control py-4'\n                                        \" formControlName=\"email\"\n                                        id=\"inputEmailAddress\" type=\"email\" email\n                                        placeholder=\"Enter email\">\n                                    <div style=\"text-align: left\" *ngIf=\"\n                                        loginForm.controls['email'].errors &&\n                                        (loginForm.controls['email'].dirty ||\n                                        loginForm.controls['email'].touched ||\n                                        FormSubmitted)\n                                        \">\n                                        <span class=\"text-danger error\"\n                                            *ngIf=\"loginForm.controls['email'].errors?.required\">\n                                            * Email is required.\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input [ngClass]=\"\n                                        loginForm.controls['password'].errors &&\n                                        (loginForm.controls['password'].dirty ||\n                                        loginForm.controls['password'].touched ||\n                                        FormSubmitted)\n                                        ? 'form-control py-4 is-invalid'\n                                        : 'form-control py-4'\n                                        \" formControlName=\"password\"\n                                        class=\"form-control py-4\" id=\"inputPassword\"\n                                        type=\"password\" placeholder=\"Enter password\">\n                                        <div style=\"text-align: left\" *ngIf=\"\n                                            loginForm.controls['password'].errors &&\n                                            (loginForm.controls['password'].dirty ||\n                                                loginForm.controls['password'].touched ||\n                                                FormSubmitted)\n                                        \">\n                                        <span class=\"text-danger error\"\n                                            *ngIf=\"loginForm.controls['password'].errors?.required\">\n                                            * Password is required.\n                                        </span>\n                                    </div>\n                                </div> \n                                <div class=\"text-center\" *ngIf=\"disableSubmit == true\">\n                                    <div class=\"spinner-border\" role=\"status\">\n                                        <span class=\"sr-only\">Loading...</span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"disableSubmit == false\">\n                                    <a (click)=\"onLoggedIn()\" class=\"btn\n                                    btn-primary btn-user btn-block\">\n                                        Log in\n                                    </a>\n                                </div>\n                            </form>\n                            <hr>\n                            <div class=\"text-center\">\n                                <a class=\"link\" routerLink=\"/auth/forgot-password/\" role=\"link\" tabindex=\"0\">Forgot password?</a>\n                            </div>\n                            <ngb-alert *ngIf=\"errorMsg\" type=\"danger\">{{ errorMsg }}</ngb-alert>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n \n</div>\n";

/***/ }),

/***/ 43426:
/*!******************************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<div [@routerTransition] class=\"login-page\">\n    <div class=\"login-container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-4 col-lg-6 col-md-6\">\n                <div class=\"card o-hidden border-0 shadow-lg my-5\">\n                    <div class=\"card-body p-0\">\n                        <!-- Nested Row within Card Body -->\n                        <div class=\"p-5\">\n                            <div class=\"text-center\">\n                                <img class=\"admin-logo\" src=\"assets/images/rate-dark.svg\">\n                                <h1 class=\"h4 text-gray-900 mb-2\">Rate Management | Admin</h1>\n                                <h3 class=\"h4 text-gray-400 mb-4\">Reset Password</h3>\n                            </div>\n                            <form class=\"user\" [formGroup]=\"resetPassword\" novalidate\n                                role=\"form\" (keydown.enter)=\"resetPasswordSubmit()\">\n                                <div class=\"form-group\">\n                                    <input [ngClass]=\"\n                                        resetPassword.controls['email'].errors &&\n                                        (resetPassword.controls['email'].dirty ||\n                                        resetPassword.controls['email'].touched ||\n                                        FormSubmitted)\n                                        ? 'form-control py-4 is-invalid'\n                                        : 'form-control py-4'\n                                        \" formControlName=\"email\"\n                                        id=\"inputEmailAddress\" type=\"email\" email\n                                        placeholder=\"Enter email\">\n                                    <div style=\"text-align: left\" *ngIf=\"\n                                    resetPassword.controls['email'].errors &&\n                                        (resetPassword.controls['email'].dirty ||\n                                        resetPassword.controls['email'].touched ||\n                                        FormSubmitted)\n                                        \">\n                                        <span class=\"text-danger error\"\n                                            *ngIf=\"resetPassword.controls['email'].errors?.required\">\n                                            * Email is required.\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input [ngClass]=\"\n                                        resetPassword.controls['password'].errors &&\n                                        (resetPassword.controls['password'].dirty ||\n                                        resetPassword.controls['password'].touched ||\n                                        FormSubmitted)\n                                        ? 'form-control py-4 is-invalid'\n                                        : 'form-control py-4'\n                                        \" formControlName=\"password\"\n                                        class=\"form-control py-4\" id=\"inputPassword\"\n                                        type=\"password\" placeholder=\"Enter password\">\n                                        <div style=\"text-align: left\" *ngIf=\"\n                                            resetPassword.controls['password'].errors &&\n                                            (resetPassword.controls['password'].dirty ||\n                                                resetPassword.controls['password'].touched ||\n                                                FormSubmitted)\n                                        \">\n                                        <span class=\"text-danger error\"\n                                            *ngIf=\"resetPassword.controls['password'].errors?.required\">\n                                            * Password is required.\n                                        </span>\n                                    </div>\n                                </div> \n                                <div class=\"text-center\" *ngIf=\"disableSubmit == true\">\n                                    <div class=\"spinner-border\" role=\"status\">\n                                        <span class=\"sr-only\">Loading...</span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"disableSubmit == false\">\n                                    <a (click)=\"resetPasswordSubmit()\" class=\"btn\n                                    btn-primary btn-user btn-block\">\n                                        Reset Password\n                                    </a>\n                                </div>\n                            </form>\n                            <hr>\n                            <div class=\"text-center mb-2\">\n                                <a class=\"link\" routerLink=\"/auth/login\" role=\"link\" tabindex=\"0\">Login?</a>\n                            </div>\n                            <ngb-alert *ngIf=\"errorMsg\" type=\"danger\">{{ errorMsg }}</ngb-alert>\n                            <ngb-alert *ngIf=\"successMsg\" type=\"success\">{{ successMsg }}</ngb-alert>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map