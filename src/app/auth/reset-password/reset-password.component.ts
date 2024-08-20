import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '@app/router.animations';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { JwtService } from '@app/shared/services/jwt/jwt.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    animations: [routerTransition()]
})
export class ResetPasswordComponent implements OnInit {
    resetPassword: FormGroup;
    FormSubmitted = false;
    disableSubmit = false;
    public userData: any = [];
    public loginStatus = false;
    user: any;
    errorMsg: String = '';
    successMsg: String = '';
  OTP: any;
  email: any;
    
    constructor(
        private cdr: ChangeDetectorRef,
        public router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private authService: AuthService,
        private jwtService: JwtService,
        // private toastr: ToastrService
        ) {
          this.route.queryParams
          .subscribe(params => {
            console.log(params);
            this.email = params.email;
            this.OTP = params.OTP;
          }
        );
            this.resetPassword = fb.group({
                email: [this.email, [Validators.required]],
                otp: [this.OTP, [Validators.required]],
                password: [null, [Validators.required, Validators.minLength(8)]],
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
        } else {
            this.authService.resetPassword(this.resetPassword.value).subscribe(
                response => {
                  if(response){
                    this.successMsg = response.message;
                  }
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
