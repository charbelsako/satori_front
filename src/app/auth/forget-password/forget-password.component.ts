import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss'],
    animations: [routerTransition()]
})
export class ForgetPasswordComponent implements OnInit {
    forgotPassword: FormGroup;
    FormSubmitted = false;
    disableSubmit = false;
    public userData: any = [];
    public loginStatus = false;
    user: any;
    errorMsg: String = '';
    successMsg: String = '';
    
    constructor(
        private cdr: ChangeDetectorRef,
        public router: Router,
        private fb: FormBuilder,
        private authService: AuthService,
        private jwtService: JwtService,
        // private toastr: ToastrService
        ) {
            this.forgotPassword = fb.group({
                email: ['', [Validators.required]],
                type: ['admin', [Validators.required]],
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
        } else {
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
        } else {
            this.authService.forgotPassword(this.forgotPassword.value).subscribe(
                response => {
                  this.successMsg = "Reset password mail has been sent!";
                  this.disableSubmit = false;
                  this.FormSubmitted = false;
                },
                (error) => {
                    this.errorMsg = error.message
                    this.disableSubmit = false;
                    this.FormSubmitted = false;
                    this.cdr.detectChanges();
                }
            );
        }
    }
}
