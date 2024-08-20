import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '@app/layout/role/service/role.service';
import { routerTransition } from '@app/router.animations';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    FormSubmitted = false;
    disableSubmit = false;
    public userData: any = [];
    public loginStatus = false;
    user: any;
    errorMsg: String = '';

    constructor(
        private cdr: ChangeDetectorRef,
        public router: Router,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private authService: AuthService,
        private jwtService: JwtService,
        private roleService: RoleService
        // private toastr: ToastrService
    ) {
        this.loginForm = fb.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            type: ['ADMIN', [Validators.required]],
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
        } else {
            this.authService.login(this.loginForm.value).subscribe(
                response => {
                    this.jwtService.saveTokens(response.tokens);
                    this.jwtService.saveUser(response.user);
                    this.authService.setUserData(response.user);
                    this.disableSubmit = false;
                    if (response.user.profile === 'rateMiner' || response.user.profile === 'dealMapper') {
                        const returnUrl = '/matters';
                        this.router.navigate([returnUrl]);
                    } else {
                        const returnUrl = '/dashboard';
                        this.router.navigate([returnUrl]);
                    }
                },
                (error) => {
                    this.errorMsg = error.message
                    this.FormSubmitted = false;
                    this.cdr.detectChanges();
                    this.disableSubmit = false;
                }
            );
        }
    }
}
