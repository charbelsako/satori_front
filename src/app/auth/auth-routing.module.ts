import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
      path: 'login',
      canActivate: [],
      component: LoginComponent,
      data: {
          title: 'Login',
      },
  },
  {
      path: 'forgot-password',
      component: ForgetPasswordComponent,
      data: {
          title: 'Forgot Password',
      },
  },
  {
      path: 'reset-password',
      component: ResetPasswordComponent,
      data: {
          title: 'Forgot Password',
      },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
