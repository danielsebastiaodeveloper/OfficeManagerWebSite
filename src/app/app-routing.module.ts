import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { RegisterFailComponent } from './user/register-fail/register-fail.component';
import { LoginActivateComponent } from './user/login-activate/login-activate.component';
import { EmailNotifComponent } from './user/email-notif/email-notif.component';
import { ConfirmationComponent } from './user/confirmation/confirmation.component';
import { RegisterDataComponent } from './user/register-data/register-data.component';
import { VerificationComponent } from './user/verification/verification.component';
import { VerificationCodeComponent } from './user/verification-code/verification-code.component';
import { DashboardComponent } from './reservations/dashboard/dashboard.component';
import { FilterComponent } from './reservations/filter/filter.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register-failed',
    component: RegisterFailComponent
  },
  {
    path: 'activate-account',
    component: LoginActivateComponent
  },
  {
    path: 'confirm-email',
    component: EmailNotifComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'register-data',
    component: RegisterDataComponent
  },
  {
    path: 'verification',
    component: VerificationComponent
  },
  {
    path: 'verification-code',
    component: VerificationCodeComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  //Child Components Test Environment
  {
    path: 'xyz',
    component: FilterComponent
  },
  //----------------------------------
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
